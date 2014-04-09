define(['ojs/ojcore', 'jquery', 'ojL10n!ojtranslations/nls/localeElements'], function(oj, $, ojld)
{
/*
** Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
**
**34567890123456789012345678901234567890123456789012345678901234567890123456789
*/

/*global ojld:true*/

/**
 * @class Locale Data Services
 * @export
 */
oj.LocaleData = {};

/**
 * Sets the Locale Elements bundle used by JET
 * If an AMD loader (such as Require.js) is not present, this method should be called by the application to provide
 * a Locale Elements for JET.
 * This method may also be used by an application that wants to completely replace the Locale Elements bundle that is automatically
 * fetched by an AMD loader.
 * @param {Object} bundle resource bundle that should be used by the framework
 * @export
 */
oj.LocaleData.setBundle = function(bundle)
{
  oj.LocaleData._bundle = bundle;
};

/**
 * Retrieves the first day of week for the current locale's region
 * @return {number} a numeric representation of the first week day of the week: 
 * 0 for Sunday, 1 for Monday, etc.
 * @export
 */
oj.LocaleData.getFirstDayOfWeek = function()
{
  return oj.LocaleData._getWeekData("firstDay");
};

/**
 * Retrieves the first weekend day for the current locale's region
 * @return {number} a numeric representation of the first weekend day: 
 * 0 for Sunday, 1 for Monday, etc.
 * @export
 */
oj.LocaleData.getWeekendStart = function()
{
  return oj.LocaleData._getWeekData("weekendStart");
};

/**
 * Retrieves the last weekend day for the current locale's region
 * @return {number} a numeric representation of the last weekend day: 
 * 0 for Sunday, 1 for Monday, etc.
 * @export
 */
oj.LocaleData.getWeekendEnd = function()
{
  return oj.LocaleData._getWeekData("weekendEnd");
};

/**
 * Retrieves locale-specific names of the days of the week
 * @return {Array.<string>} names of the days from Sunday through Sturday
 * @param {string} type - the type of the name. Currently, "abbreviated", "narrow" and "wide" are supported
 * @export
 */
oj.LocaleData.getDayNames = function(type)
{
  if (type== null || (type !== "abbreviated" && type !== "narrow"))
  {
    type = "wide";
  }
  var days = oj.LocaleData._getCalendarData()["days"]["stand-alone"][type];
  
  return [days["sun"], days["mon"], days["tue"], days["wed"], days["thu"],  days["fri"],  days["sat"]];
};

/**
 * Retrieves locale-specific names of months
 * @return {Array.<string>} names of months from January through December
 * @param {string} type - the type of the name. Currently, "abbreviated", "narrow" and "wide" are supported
 * @export
 */
oj.LocaleData.getMonthNames = function(type)
{
  if (type== null || (type !== "abbreviated" && type !== "narrow"))
  {
    type = "wide";
  }
  var months = oj.LocaleData._getCalendarData()["months"]["stand-alone"][type];
  
  return [months["1"], months["2"], months["3"], months["4"], months["5"], months["6"],
           months["7"], months["8"], months["9"], months["10"], months["11"], months["12"]];
};

/**
 * Retrieves whether month is displayed prior to year
 * @return {boolean} whether month is prior to year
 * @export
 */
oj.LocaleData.isMonthPriorToYear = function() 
{
  var longDateFormat = oj.LocaleData._getCalendarData()["dateFormats"]["long"].toUpperCase(),
      monthIndex = longDateFormat.indexOf("M"),
	  yearIndex = longDateFormat.indexOf("Y");
  
  return monthIndex < yearIndex;
}

/**
 * @hidden
 */
oj.LocaleData._getWeekData = function(key)
{
  var b = oj.LocaleData.__getBundle();
  var defRegion = "001";
  var region = oj.LocaleData._getRegion() || defRegion;
  
  var data = b["supplemental"]["weekData"][key];
  
  var val = data[region];
  
  if (val === undefined)
  {
    val = data[defRegion];
  }
  
  return val;
};

/**
 * @hidden
 */
oj.LocaleData._getCalendarData = function()
{
   var b = oj.LocaleData.__getBundle();
   var main  = b['main'];
   
   // skip one level (the name of the locale)
   var data, p;
   for (p in main)
   {
     if (main.hasOwnProperty(p)) {
        data = main[p];
        break;
     }
   }
   return data['dates']['calendars']['gregorian'];
};

/**
 * @hidden
 */
oj.LocaleData._getRegion = function()
{
  var locale = oj.Config.getLocale();
  if (locale)
  {
    var tokens = locale.toUpperCase().split(/-|_/);
    if (tokens.length >= 2)
    {
      var tag = tokens[1];
      if (tag.length == 4) // this is a script tag
      {
        if (tokens.length >= 3)
        {
          return tokens[2];
        }
      }
      else
      {
        return tag;
      }
    }
  }
  return null;
};

/**
 * @hidden
 */
oj.LocaleData.__getBundle = function()
{
  var b = oj.LocaleData._bundle;
  if (b)
  {
    return b;
  }
  
  if (oj.__isAmdLoaderPresent()) {
    oj.Assert.assert(ojld !== undefined, "LocaleElements module must be loaded");
    return ojld;
  }
  return {};
};

/**
 * @hidden
 * Called from oj.Config after AMD loader fetches LocaleElements for the new locale
 */
oj.LocaleData.__updateBundle = function(bundle)
{
  ojld = bundle;
};
/**
 * This is a forked version of globalize.js
 */
/*
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

/*
   DESCRIPTION
   oji18nImpl.js provides implementation for number and date-time converters
   based on ECMA-402 specification. It also supports user defined patterns and
   lenient parsing. The locale data is based on CLDR.

   PRIVATE CLASSES
    <list of private classes defined - with one-line descriptions>

   NOTES
    <other useful comments, qualifications, etc.>

   MODIFIED    (MM/DD/YY)
    gmurr       01/08/13 - Creation
 */



 
/**  
 * <p>
 * oji18nImpl.js module provides APIs for DateTime and number formatting and 
 * parsing. The locale data
 * definitions will be based on CLDR locale data. It is the user responsibility 
 * to pass the locale data
 * to the format/parse functions. 
 * <p>The format and parse functions can throw the following exceptions:
 * <li> RangeError can be thrown during the validation of the options:
 * Example: The value 'longs' is out of range for 'OraDateTimeConverter.parse'
 * options property 'year'. Expected: ['2-digit', 'numeric']<br>
 * var errorInfo = {<br>
 *   'errorCode' : "optionOutOfRange",<br>
 *   'parameterMap' : {<br>
 *   'propertyName': $property$,<br>
 *   'propertyValue': $options.property$,<br>
 *   'propertyValueValid': $expectedValues$,<br>
 *   'caller': $_getOptionCaller$<br>
 * }<br>
 * };<br>
 * <br>
 * <br>
 * <li> TypeError can be thrown when currency is missing for currency style. It 
 * can be generic when an options requires a corresponding  option value.<br>
 * Example: A value for the property currency is required when the property
 * style is set to the value currency. An accepted value is a three-letter
 * ISO 4217 currency code.<br>
 * var errorInfo = {<br>
 * 'errorCode' : "optionTypesMismatch",<br>  
 * 'parameterMap' : {<br>
 * 'propertyName': 'style', // the driving property<br>
 * 'propertyValue': 'currency', // the driving property's value<br>
 * 'requiredPropertyName': 'currency', // the required property name<br>
 * 'requiredPropertyValueValid': 'a three-letter ISO 4217 currency code'<br>
 * }<br>
 * };<br>
 * 
 * <br>
 * <br>
 * <li>SyntaxError can be thrown when the date format is invalid. it can happen
 * during the calls to parse and format date.<br>
 * Example: Unexpected character(s) encountered in the pattern "MM/dd/cc".<br>
 * An example of a valid pattern is "MM/dd/y".<br>
 * var errorInfo = {<br>
 * 'errorCode' : "optionValueInvalid",<br> 
 * parameterMap : {'propertyName' : 'pattern',<br>
 *                 'propertyValue': $options.pattern$,<br>
 *                 'propertyValueHint': $format$}<br>
 * };<br>
 * <br>
 * <br>
 * <li>Error can be thrown when there is mismatch between date format and
 * date string. it can happen during the calls to parse date.<br>
 * Example: The value "03,05,12" does not match the expected date format
 * "MM/dd/yy"<br>
 * errorInfo = {'errorCode' : "datetimeFormatMismatch", 'parameterMap' : 
 * { 'value': $value$,  'format': $format$}};<br>
 * errorInfo = {'errorCode' : "timeFormatMismatch", 'parameterMap' : 
 * { 'value': $value$,  'format': $format$}};<br>
 * verrorInfo = {'errorCode' : "dateFormatMismatch", 'parameterMap' : 
 * { 'value': $value$,  'format': $format$}};<br>
 * <br>
 *
 * <br>
 * <li>RangeError can be thrown if one of the date fields is out of range.
 * It can happen during the calls to parse date.<br>
 * Example: 64  is out of range.  Enter a value between 0 and 59 for minute 
 * ({'value'} is out of range. Enter a value between {'minValue'} and 
 * {'maxValue'} for {'propertyName'})<br>
 * errorInfo = {<br>
 * 'errorCode' : "datetimeOutOfRange",<br>
 * 'parameterMap' : {'value': $value$, 'minValue': $mainValue$,
 * 'maxVlaue': $maxValue$, 'propertyName': $name$}<br>
 * };<br>
 * <br>
 * <br>
 * <li>SyntaxError  can be thrown during the parsing of the number pattern.
 * It can happen during the calls to parse and format number when the user
 * provides pattern in the options.
 * Or if for some reason the pattern is invalid inside the locale data.<br>
 * <br>
 * Example: Unexpected character(s) encountered in the pattern "#,0##0.0.0". 
 * An example of a valid pattern is "#,##0.0.0".<br>
 * errorInfo = {<br>
 * 'errorCode' : "optionValueInvalid",p<br>
 * 'parameterMap : {'propertyName' : 'pattern',
 * 'propertyValue': $options.pattern$, 'propertyValueHint': $format$}<br>
 * };<br>
 * <br>
 * <li>Error can be thrown when there is mismatch between number pattern and
 * number string. it can happen during the calls to parse number.<br>
 * Example: The value "-$125" does not match the expected currency 
 * pattern "&#xa4;#,##0.00;(&#xa4;#,##0.00)"<br>
 * errorInfo = {'errorCode' : "decimalFormatMismatch", 
 * 'parameterMap' : { 'value': $value$,  'format': $format$}};<br>
 * errorInfo = {'errorCode' : "currencyFormatMismatch", 
 * 'parameterMap' : { 'value': $value$,   'format': $format$}};<br>
 * errorInfo = {'errorCode' : "percentFormatMismatch", 
 * 'parameterMap' : { 'value': $value$,   'format': $format$}};<br>
 *
 * <br>
 * <br>
 * <li>Error  can be thrown during the parsing of a date. it can happen during
 * the calls to parse and format number when the user provides pattern in the 
 * options.
 * Or if for some reason the pattern is invalid inside the locale data.<br>
 * <br>
 * Example: Unexpected character(s) encountered in the pattern "#,0##0.0.0". 
 * An example of a valid pattern is "#,##0.0.0".<br>
 * errorInfo = {<br>
 * 'errorCode' : "optionValueInvalid",p<br>
 * 'parameterMap : {'propertyName' : 'pattern',
 * 'propertyValue': $options.pattern$, 'propertyValueHint': $format$}<br>
 * };<br>
 * <br>
 * <li>Error can be thrown when there is mismatch between weekday and date.
 * It can happen during the calls to parse date.<br>
 * Example: If the user provides "Monday November 26 2013" as input to parse
 * method. The error will be:<br>
 * The weekday Monday does not match the date 26.
 * errorInfo = {'errorCode' : "dateToWeekdayMismatch", 
 * 'parameterMap' : { 'weekday': $weekday$,  'date': $day$}};<br>
 * errorInfo = {'errorCode' : "currencyFormatMismatch", 
 * 'parameterMap' : { 'value': $value$,   'format': $format$}};<br>
 * errorInfo = {'errorCode' : "percentFormatMismatch", 
 * 'parameterMap' : { 'value': $value$,   'format': $format$}};<br>
 *
 */
 
/**
 * @class
 * @name OraNumberConverter
 */
var OraNumberConverter;
/**
 * @class
 * @name OraDateTimeConverter
 */
var OraDateTimeConverter;
 
(function () {
   
  var _parseBCP47, _getLanguageExtension, _parseExtension, _toUpper,
  _trim, _startsWith,
  _getLocaleElementsMainNode, _getLocaleElementsMainNodeKey, _getGetOption,
  _getNumberingSystemKey,
  _localeDataCache = {};
  
  var numeringSystems = {
    'latn' : "\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039",
    'arab' : "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669",
    'thai' : "\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59"
  };
  
  _trim = function(value) {
    var regexTrim = /^\s+|\s+$|\u200f|\u200e/g;
    return (value + "").replace(regexTrim, "");
  };
    
  _startsWith = function(value, pattern) {
    return value.indexOf(pattern) === 0;
  };
    
  _toUpper = function(value) {
    // "he-IL" has non-breaking space in weekday names.
    return value.split("\u00A0").join(" ").toUpperCase();
  };

  _getNumberingSystemKey = function(localeElements, locale){
    if(locale === undefined)
      return 'latn';
    var numberingSystemKey = _getLanguageExtension(locale, "nu") || "";
    var symbols = "symbols-numberSystem-" + numberingSystemKey;
    if(localeElements['numbers'][symbols] === undefined)
      numberingSystemKey =  'latn';
    return numberingSystemKey;
  };
  
  _parseBCP47 = function (tag){
    var re = /^(?:(en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(art-lojban|cel-gaulish|no-(?:bok|nyn)|zh-(?:guoyu|hakka|min|min-nan|xiang)))$|^(x(?:-[0-9a-z]{1,8})+)$|^(?:((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|[0-9]{3}))?((?:-(?:[a-z0-9]{5,8}|[0-9][a-z0-9]{3}))*)?((?:-[0-9a-wy-z](?:-[a-z0-9]{2,8}){1,})*)?(-x(?:-[0-9a-z]{1,8})+)?)$/i;
    var match = re.exec (tag);
    if (!match) return null;
	
    var match4 = match[4];
    match4 = match4 ? match4.split ("-") : null;
    var language = null;
    if (match4) language = match4.shift ();
	
    var match7 = match[7];
    match7 = match7 ? match7.split ("-") : null;
    if (match7) match7.shift ();
	
    var match9 = match[9];
    match9 = match9 ? match9.split ("-") : null;
    if (match9){
      match9.shift ();
      match9.shift ();
    }
	
    var match3 = match[3];
    match3 = match3 ? match3.split ("-") : null;
    if (match3) match3.shift ();
    return {
      language: {
        language: language,
        extlang: match4 || []
      },
      script: match[5] || null,
      region: match[6] || null,
      variant: match7 || null,
      extension: _parseExtension (match[8]),
      privateuse: match9 || match3 || [],
      grandfathered: {
        irregular: match[1] || null,
        regular: match[2] || null
      }
    };
  };

  _parseExtension = function (tag){
      
    if (!tag) return [];

    var extensions = [];
    var e;
    var c;
    var newExtension = false;
    var singleton = false;
    var extension = "";
    var parsingExtension = false;
	
    for (var i=0, len=tag.length; i<len; i++){
      c = tag[i];
		
      if (c === "-" && !newExtension){
        newExtension = true;
        e = {
          'singleton': null,
          'extension': []
        };
        continue;
      }
		
      if (newExtension && !singleton){
        singleton = true;
        e['singleton'] = c;
        continue;
      }
		
      if (c === "-"){
        if (!parsingExtension){
          extension = "";
          parsingExtension = true;
        }else{
          if (extension.length === 1){
            parsingExtension = false;
            singleton = false;
            extensions.push (e);
            e = {
              'singleton': null,
              'extension': []
            };
          }
          else{
            e['extension'].push (extension);
            extension = "";
          }
        }
        continue;
      }
		
      extension += c;
    }
	
    e['extension'].push (extension);
    extensions.push (e);
	
    return extensions;
  }; 
    
  _getLanguageExtension = function(locale, token){
    locale = locale || "en-US";
    var parsedLang = _parseBCP47(locale);
    if(parsedLang === null || parsedLang === undefined)
      return null;
    var ext = parsedLang['extension'];
    var localeExtension;
    for(var i in ext) {
      if(ext[i]['singleton'] === 'u') {
        for(var j in ext[i]['extension']) {
          if(ext[i]['extension'][j] === token) {
            j++;
            localeExtension = ext[i]['extension'][j];
            break;
          }
        }
        break;
      }
    }
    return localeExtension;    
  };
    
  _getLocaleElementsMainNode= function(bundle) {
    var mainNode = bundle['main'];
    var subnode;
    for (var n in mainNode)
    {
      subnode = n;
      break;
    }
    return mainNode[subnode];
  }
  
  _getLocaleElementsMainNodeKey= function(bundle) {
    var mainNode = bundle['main'];
    var subnode;
    for (var n in mainNode)
    {
      subnode = n;
      break;
    }
    return subnode;
  }
  
  _getGetOption = function(options, getOptionCaller) {
    if (options === undefined) {
      throw new Error('Internal ' + getOptionCaller +
        ' error. Default options missing.');
    }

    var getOption = function getOption(property, type, values, defaultValue) {
      if (options[property] !== undefined) {
        var value = options[property];
        switch (type) {
          case 'boolean':
            value = Boolean(value);
            break;
          case 'string':
            value = String(value);
            break;
          case 'number':
            value = Number(value);
            break;
          default:
            throw new Error('Internal error. Wrong value type.');
        }
        if (values !== undefined && values.indexOf(value) === -1) {
          var expectedValues = [];
          for(var i=0; i < values.length; i++) {
            expectedValues.push(values[i]);
          }
          var msg = "The value '" + options[property] +
          "' is out of range for '" + getOptionCaller +
          "' options property '" + property + "'. Valid values: " + 
          expectedValues; 
          var rangeError = new RangeError(msg);
          var errorInfo = {
            'errorCode' : 'optionOutOfRange',
            'parameterMap' : {
              'propertyName': property,
              'propertyValue': options[property],
              'propertyValueValid': expectedValues,
              'caller': getOptionCaller
            }
          };
          rangeError['errorInfo'] = errorInfo;
          throw rangeError;
        }

        return value;
      }
      return defaultValue;
    }

    return getOption;
  }

  OraNumberConverter = (function () {
    var regexInfinity,
    regexParseFloat,
    _startsWith,
    _zeroPad,
    _formatNumberImpl,
    _applyPatternImpl,
    _parseNegativePattern,
    _parseNegativeExponent,
    _getNumberSettings,
    _validateNumberOptions,
    _throwMissingCurrency;

    var instance;
 
    regexInfinity = /^[+\-]?infinity$/i;
    regexParseFloat = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
    
    _startsWith = function(value, pattern) {
      return value.indexOf(pattern) === 0;
    };

    _zeroPad = function(str, count, left) {
      var l;
      for (l = str.length; l < count; l += 1) {
        str = (left ? ("0" + str) : (str + "0"));
      }
      return str;
    };

    _getNumberSettings = function(localeElements, numberSettings,
      options, locale) {
      var pat;
      var numberingSystemKey = _getNumberingSystemKey(localeElements, locale);
      numberSettings['numberingSystemKey'] = numberingSystemKey;
      numberSettings['numberingSystem'] = "symbols-numberSystem-" +
      numberingSystemKey;        

      //pattern passed in options
      if(options['pattern'] !== undefined && options['pattern'].length > 0) {
        pat = options['pattern'];
      }
      else
      {  
        var key;
        switch(options['style'])
        {
          case "decimal" :
            key = "decimalFormats-numberSystem-" +
            numberSettings['numberingSystemKey'];
            pat = localeElements['numbers'][key]['standard'];
            break;
          case "currency" :
            key = "currencyFormats-numberSystem-" +
            numberSettings['numberingSystemKey'];
            pat = localeElements['numbers'][key]['standard'];
            break;
          case "percent" :
            key = "percentFormats-numberSystem-" +
            numberSettings['numberingSystemKey'];
            pat = localeElements['numbers'][key]['standard'];
            break;
          default:
            key = "decimalFormats-numberSystem-" +
            numberSettings['numberingSystemKey'];
            pat = localeElements['numbers'][key]['standard'];
            break;
        }
      }
      numberSettings['pat'] = pat;
      numberSettings['decimalSeparator'] = localeElements['numbers']
      [numberSettings['numberingSystem']]['decimal'];
      numberSettings['groupingSeparator'] = localeElements['numbers']
      [numberSettings['numberingSystem']]['group'];
      numberSettings['currencyDisplay'] = options['currencyDisplay'];
      if(options['currency'] !== undefined)
        numberSettings['currencyCode'] = options['currency'].toUpperCase();
      numberSettings['style'] = options['style'];
      _applyPatternImpl(options, pat, localeElements, numberSettings);
      if(options['pattern'] === undefined) {
        var nb;
        if(options['maximumFractionDigits'] !== undefined) {
          nb = parseInt(options['maximumFractionDigits'], 10);
          numberSettings['maximumFractionDigits'] = nb;
          if(numberSettings['maximumFractionDigits'] < numberSettings['minimumFractionDigits']) {
            numberSettings['minimumFractionDigits'] = numberSettings['maximumFractionDigits'];
          }
        }
        if(options['minimumFractionDigits'] !== undefined) {
          nb = parseInt(options['minimumFractionDigits'], 10);
          numberSettings['minimumFractionDigits'] = nb;
        }
        if(numberSettings['maximumFractionDigits'] < numberSettings['minimumFractionDigits']) {
          numberSettings['maximumFractionDigits'] = numberSettings['minimumFractionDigits'];
        }
        if(options['minimumIntegerDigits'] !== undefined) {
          nb = parseInt(options['minimumIntegerDigits'], 10);
          numberSettings['minimumIntegerDigits'] = nb;
        }
      }
    };
    
    _throwMissingCurrency = function(prop) {
      var typeError = new TypeError('The property "currency" is required when' +
        'the property "' + prop + '" is "currency". An accepted value is a ' +
        'three-letter ISO 4217 currency code.');
      var errorInfo = {
        'errorCode' : 'optionTypesMismatch',
        'parameterMap' : {
          'propertyName': prop, // the driving property
          'propertyValue': 'currency', // the driving property's value
          'requiredPropertyName': 'currency', // the required property name
          'requiredPropertyValueValid':  'a three-letter ISO 4217 currency code'  
        }
      };
      typeError['errorInfo'] = errorInfo;
      throw typeError;
    };
    
    _validateNumberOptions = function(options, caller) {
      var getOption = _getGetOption(options, caller);
      var s = getOption('style', 'string', ['currency', 'decimal', 'percent', 'perMill'],
        'decimal');
      var c =getOption('currency', 'string');
      if(s === 'currency' && c === undefined) {
        _throwMissingCurrency("style");
      }
    };
    
    // formatNumber
    (function() {
      var _expandNumber;

      _expandNumber = function(number, options, numberSettings) {
        var curSize = numberSettings['groupingSize'];
        if(numberSettings['isPercent'] === true ||
          options['style'] === 'percent')
          number *= 100;
        else if(numberSettings['isPerMill'] === true)
          number *= 1000;
        var numberString = number + "";     
        var split = numberString.split( /e/i );
        var exponent = split.length > 1 ? parseInt( split[1], 10 ) : 0;
        numberString = split[ 0 ];
        split = numberString.split('.');
        var right = split.length > 1 ? split[ 1 ] : "";

        //round the number only if it has decimal points
        if(split.length > 1 && right.length > exponent)      
        {
          var precision = Math.min(numberSettings['maximumFractionDigits'],
            right.length-exponent);
          var factor = Math.pow( 10, precision ),
          rounded = Math.round( number * factor )  / factor;
          if ( !isFinite(rounded) ) {
            rounded = number;
          }
          number = rounded;
        }
      
        numberString = number + "";
        split = numberString.split( /e/i );
        exponent = split.length > 1 ? parseInt( split[1], 10 ) : 0;
        numberString = split[ 0 ];
        split = numberString.split('.');
        numberString = split[ 0 ];
        right = split.length > 1 ? split[ 1 ] : "";

        if (exponent > 0) {
          right = _zeroPad(right, exponent, false);
          numberString += right.slice(0, exponent);
          right = right.substr(exponent);
        }
        else if (exponent < 0) {
          exponent = -exponent;
          numberString = _zeroPad(numberString, exponent + 1, true);
          right = numberString.slice(-exponent, numberString.length) + right;
          numberString = numberString.slice(0, -exponent);
        }
        if (precision > 0) {       
          right = numberSettings['decimalSeparator'] +
          ((right.length > precision) ? right.slice(0, precision) : 
            _zeroPad(right, precision, false));
        }
        else {
          if (numberSettings['minimumFractionDigits'] > 0){
            right = numberSettings['decimalSeparator'];
          }
          else {
            right = "";
          }
        }
        var padLen = numberSettings['decimalSeparator'].length +
        numberSettings['minimumFractionDigits'];
        right = _zeroPad(right, padLen, false);
        var sep = numberSettings['groupingSeparator'],
        ret = "";
        if(options['useGrouping'] === false && options['pattern'] === undefined)
          sep = '';      
        numberString = _zeroPad(numberString,
          numberSettings['minimumIntegerDigits'], true);
        var stringIndex = numberString.length - 1;
        right = right.length > 1 ? right : "";
        var rets;
        while (stringIndex >= 0) {
          if (curSize === 0 || curSize > stringIndex) {
            rets = numberString.slice(0, stringIndex + 1) +
            (ret.length ? (sep + ret + right) : right);
            return rets;
          }
          ret = numberString.slice(stringIndex - curSize + 1, stringIndex + 1) +
          (ret.length ? (sep + ret) : "");
          stringIndex -= curSize;
        }
        rets = numberString.slice(0, stringIndex + 1) + sep + ret + right;
        return rets;
      };

      _formatNumberImpl = function(value, options, localeElements,
        numberSettings, locale) {
        if (!isFinite(value)) {
          if (value === Infinity) {
            return localeElements['numbers'][numberSettings['numberingSystem']]['infinity'];
          }
          if (value === -Infinity) {
            return localeElements['numbers'][numberSettings['numberingSystem']]['infinity'];
          }
          return localeElements['numbers'][numberSettings['numberingSystem']]['nan'];
        }
		
        var number = Math.abs(value);
        number = _expandNumber(number, options, numberSettings);
        var ret = "";
        if(value < 0) {
          ret += numberSettings['negativePrefix'] + number +
          numberSettings['negativeSuffix'];
        }
        else {
          ret += numberSettings['positivePrefix'] + number +
          numberSettings['positiveSuffix'];
        }
        var numberingSystemKey =  _getLanguageExtension(locale, "nu");
        if(numeringSystems[numberingSystemKey] === undefined)
          numberingSystemKey = 'latn';
        if(numberingSystemKey !== 'latn') {
          var idx;
          var nativeRet = [];
          for(idx = 0; idx < ret.length; idx++)
          {
            if(ret[idx] >= '0' && ret[idx] <= '9')
              nativeRet.push(numeringSystems[numberingSystemKey][ret[idx]]);
            else nativeRet.push(ret[idx]);
        
          }
          return nativeRet.join("");
        }
        return ret;
      };

    }());
    
    //remove prefix and suffix, return a sign and value
    _parseNegativePattern = function(value, options, numberSettings,
      localeElements) {
      
      var ret, num = _trim(value), sign = "";
      var exactMatch = false;
      //try exact match of negative prefix and suffix
      var posPrefRegexp = new RegExp("^" + (numberSettings['positivePrefix'] ||
        "+").replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\$1"));
      var posSuffRegexp = new RegExp((numberSettings['positiveSuffix'] || "").
        replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\$1") + "$");
      var negPrefRegexp = new RegExp("^" + (numberSettings['negativePrefix'] ||
        "-").replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\$1"));
      var negSuffRegexp = new RegExp((numberSettings['negativeSuffix'] ||
        "").replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\$1") + "$");

      if(num.search(negPrefRegexp) >= 0 && num.search(negSuffRegexp) >= 0) {   
        num = num.replace(negPrefRegexp, "");
        num = num.replace(negSuffRegexp, "");
        sign = "-";
        exactMatch = true;
      }
      //try exact match of positive prefix and suffix
      else if(num.search(posPrefRegexp) >= 0 && num.search(posSuffRegexp) >= 0){
        num = num.replace(posPrefRegexp, "");
        num = num.replace(posSuffRegexp, "");
        sign = "+";
        exactMatch = true;
      }
      //if style is currency, remove currency symbol from prefix and suffix 
      //and try a match
      else if (options['style'] === 'currency') {
        var code = numberSettings['currencyCode'], symbol = code;
        var posPrefix, posSuffix, negPrefix, negSuffix, repStr;
        if(localeElements['numbers']['currencies'][code] !== undefined) {
          symbol = localeElements['numbers']['currencies'][code]['symbol'];
        }
        if(numberSettings['currencyDisplay'] === undefined ||
          numberSettings['currencyDisplay'] === "symbol"){
          repStr = symbol;
        }
        else if (numberSettings['currencyDisplay'] === "code") {
          repStr = code;
        }
        if(repStr !== undefined) {
          posPrefix = (numberSettings['positivePrefix'] || "").replace(
            repStr, "");
          posSuffix = (numberSettings['positiveSuffix'] || "").replace(
            repStr, "");
          negPrefix = (numberSettings['negativePrefix'] || "").replace(
            repStr, "");
          negSuffix = (numberSettings['negativeSuffix'] || "").replace(
            repStr, "");
          posPrefRegexp = new RegExp(("^" + posPrefix).replace(
            /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\$1"));
          posSuffRegexp = new RegExp(posSuffix.replace(
            /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\$1") + "$");
          negPrefRegexp = new RegExp(("^" + negPrefix).replace(
            /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\$1"));
          negSuffRegexp = new RegExp(negSuffix.replace(
            /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\$1") + "$");

          //try  match of positive prefix and suffix
          if(num.search(negPrefRegexp) >= 0 && num.search(negSuffRegexp) >= 0) {        
            num = num.replace(negPrefRegexp, "");
            num = num.replace(negSuffRegexp, "");
            sign = "-";
            exactMatch = true;
          }
          //try exact match of positive prefix and suffix
          else if(num.search(posPrefRegexp) >= 0 &&
            num.search(posSuffRegexp) >= 0) {
            num = num.replace(posPrefRegexp, "");
            num = num.replace(posSuffRegexp, "");
            sign = "+";
            exactMatch = true;
          }
        }
      }

      // Try to extract the number accoring to the following pattern:
      // optional +- followed by one or many digits followed by optional
      // fraction part followed by optional exponential.
      // use localized +, -, decimal separator, exponential
      // [+-]?\d+(?:\.\d+)?(?:E[+-]?\d+)?/;
      if(!exactMatch) {
        //remove grouping deparator from string
        var groupingSeparator = 
        localeElements['numbers'][numberSettings['numberingSystem']]['group'];
        var decimalSeparator = 
        localeElements['numbers'][numberSettings['numberingSystem']]['decimal'];
        var plusSign = "+";
        var minusSign = "-";
        var exponential = 
        _toUpper(localeElements['numbers'][numberSettings['numberingSystem']]['exponential']);
        //remove grouping separator from string
        var groupSep = groupingSeparator;
        num = num.split(groupSep).join("");
        var altGroupSep = groupSep.replace(/\u00A0/g, " ");
        if (groupSep !== altGroupSep) {
          num = num.split(altGroupSep).join("");
        }       
        var regExpStr = "[" + plusSign + minusSign + "]" + "?\\d*(?:"  +
        decimalSeparator + "\\d+)?(?:" + exponential +
        "[" + "+" + "-" + "]?\\d+)?";
        regExpStr = regExpStr.replace(".", "\\.");
        var regExp =new RegExp(regExpStr);
        var match = regExp.exec(_toUpper(num));
        num = match[0];
        if (_startsWith(num, minusSign)) {
          num =  num.substr(minusSign.length);
          sign = "-";
        }
        else if (_startsWith(num, plusSign)) {
          num = num.substr(plusSign.length);
          sign = "+";
        }
      }
      ret = [sign, num];
      return ret;
    };

    _parseNegativeExponent = function(value, localeElements, numberSettings) {
      var neg = localeElements['numbers'][numberSettings['numberingSystem']]['minusSign'],
      pos =  localeElements['numbers'][numberSettings['numberingSystem']]['plusSign'],
      ret;
      if (_startsWith(value, neg)) {
        ret = [ "-", value.substr(neg.length) ];
      }
      else if (_startsWith(value, pos)) {
        ret = [ "+", value.substr(pos.length) ];
      }
      return ret || [ "", value ];
    };

    // _applyPatternImpl
    (function() {

      var _regionMatches, _expandAffix, _expandAffixes, _throwSyntaxError,
      zeroDigit         = '0',
      groupingSeparator = ',',
      decimalSeparator  = '.',
      percent           = '%',
      perMill           = '\u2030',
      digit             = '#',
      separator         = ';',
      exponent          =  "E|e",
      minus             = '-',
      quot              = '\'',
      currency     = '\u00A4';
  
      var posPrefixPattern,
      posSuffixPattern,
      negPrefixPattern,
      negSuffixPattern;

      var MAXIMUM_INTEGER_DIGITS = 0x7fffffff;
      var MAXIMUM_FRACTION_DIGITS = 0x7fffffff;
      
      _throwSyntaxError = function(pattern) {
        var msg, syntaxError, errorInfo, samplePattern = "#,##0.###";
        msg =  "Unexpected character(s) encountered in the pattern \"" + 
        pattern + " An example of a valid pattern is \"" + samplePattern +
        '".';
        syntaxError = new SyntaxError(msg);
        errorInfo = {
          'errorCode' : 'optionValueInvalid',
          'parameterMap' : {
            'propertyName' : 'pattern',
            'propertyValue': pattern,
            'propertyValueHint': samplePattern
          }
        };
        syntaxError['errorInfo'] = errorInfo;
        throw syntaxError;
      }
      _regionMatches = function(str1, offset1, str2, offset2, len) {
        var sub1 = str1.substr(offset1, len);
        var sub2 = str2.substr(offset2, len);
        if(sub1.localeCompare(sub2) == 0){
          return true;
        }
        return false;
      };

      _expandAffixes = function(localeElements, numberSettings) {
        var curDisplay = {};
        if (posPrefixPattern != null) {
          numberSettings['positivePrefix'] = _trim(_expandAffix(posPrefixPattern,
            localeElements, numberSettings, curDisplay));
        }
        if (posSuffixPattern != null) {
          numberSettings['positiveSuffix'] = _trim(_expandAffix(posSuffixPattern,
            localeElements, numberSettings, curDisplay));
        }
        if (negPrefixPattern != null) {
          numberSettings['negativePrefix'] = _trim(_expandAffix(negPrefixPattern,
            localeElements, numberSettings, curDisplay));
        }
        if (negSuffixPattern != null) {
          numberSettings['negativeSuffix'] = _trim(_expandAffix(negSuffixPattern,
            localeElements, numberSettings, curDisplay));
        }
        if(curDisplay['name'] !== undefined) {
          numberSettings['positiveSuffix'] = "\u00a0" + curDisplay['name'];
          numberSettings['positivePrefix'] = "";
          numberSettings['negativeSuffix'] = "\u00a0" + curDisplay['name'];
          numberSettings['negativePrefix'] =  _trim(localeElements['numbers'][numberSettings['numberingSystem']]['minusSign']);
        }
      }

      _expandAffix = function(pattern, localeElements, numberSettings,
        currencyDisplay) {
        var buffer = "";
        for (var i=0; i<pattern.length;) {
          var c = pattern.charAt(i++);
          if (c == quot)// {
            continue;
          //c = pattern.charAt(i++);
          switch (c) {
            case currency:
              var code = numberSettings['currencyCode'];
              var name = code, symbol = code;
              if(localeElements['numbers']['currencies'][code] !== undefined) {
                name = localeElements['numbers']['currencies'][code]['displayName']; 
                symbol = localeElements['numbers']['currencies'][code]['symbol'];
              }
              if(numberSettings['currencyDisplay'] === undefined ||
                numberSettings['currencyDisplay'] === "symbol")
                c = symbol;
              else if (numberSettings['currencyDisplay'] === "code") {
                c = code;
              }
              else {
                c = name;
                currencyDisplay['name'] = c;
              }
              break;
            case percent:
              c = localeElements['numbers'][numberSettings['numberingSystem']]['percentSign'];
              break;
            case perMill:
              c = localeElements['numbers'][numberSettings['numberingSystem']]['perMille'];
              break;
            case minus:
              c = localeElements['numbers'][numberSettings['numberingSystem']]['minusSign'];
              break;
          }
          //}
          buffer = buffer.concat(c);
        }
        return buffer;
      }

      _applyPatternImpl = function(options, pattern, localeElements,
        numberSettings) {
      
        var gotNegative = false,
        useExponentialNotation = false;
        var phaseOneLength = 0;         
        var start = 0;
        var isPrefix = true;
        
        for (var j = 1; j >= 0 && start < pattern.length; --j) {
          var inQuote = false;
          var prefix = "";
          var suffix = "";
          var decimalPos = -1;
          var multiplier = 1;
          var digitLeftCount = 0, zeroDigitCount = 0, digitRightCount = 0,
          groupingCount = -1;
          var minExponentDigits;
          var phase = 0;

          isPrefix = true;
          for (var pos = start; pos < pattern.length; ++pos) {
            var ch = pattern.charAt(pos);
            switch (phase) {
              case 0:
              case 2:
                // Process the prefix / suffix characters
                if (inQuote) {
                  if (ch === quot) {
                    if ((pos+1) < pattern.length && pattern.charAt(pos+1) === 
                      quot) {
                      ++pos;
                      if(isPrefix)
                        prefix = prefix.concat("''");
                      else
                        suffix = suffix.concat("''");
                    } else {
                      inQuote = false; // 'do'
                    }
                    continue;
                  }
                }
                else {
                  // Process unquoted characters seen in prefix or suffix phase.
                  if (ch === digit ||
                    ch === zeroDigit ||
                    ch === groupingSeparator ||
                    ch === decimalSeparator) {
                    phase = 1;
                    --pos; // Reprocess this character
                    continue;
                  } else if (ch === currency) {
                    if(options['currency'] === undefined)
                      _throwMissingCurrency("pattern");
                    // Use lookahead to determine if the currency sign
                    // is doubled or not.
                    options['style'] = 'currency';
                    var doubled = (pos + 1) < pattern.length &&
                    pattern.charAt(pos + 1) === currency;
                    if (doubled) { // Skip over the doubled character
                      ++pos;
                    }
                    if(isPrefix)
                      prefix = prefix.concat(doubled ? "'\u00A4\u00A4" : 
                        "'\u00A4");
                    else
                      suffix = suffix.concat(doubled ? "'\u00A4\u00A4" : 
                        "'\u00A4");
                    continue;
                  } else if (ch === quot) {
                    if (ch == quot) {
                      if ((pos+1) < pattern.length &&
                        pattern.charAt(pos+1) == quot) {
                        ++pos;
                        if(isPrefix)
                          prefix = prefix.concat("''");// o''clock
                        else
                          suffix = suffix.concat("''");
                      } else {
                        inQuote = true; // 'do'
                      }
                      continue;
                    }
                  } else if (ch === separator) {
                    if (phase === 0 || j === 0) {                    
                      _throwSyntaxError(pattern);
                    }
                    start = pos + 1;
                    pos = pattern.length;
                    continue;
                  }

                  // Next handle characters which are appended directly.
                  else if (ch === percent) {
                    options['style'] = 'percent';
                    if (multiplier != 1) {                      
                      _throwSyntaxError(pattern);
                    }
                    numberSettings['isPercent'] = true;
                    multiplier = 100;
                    if(isPrefix)
                      prefix = prefix.concat("'%");
                    else
                      suffix = suffix.concat("'%");
                    continue;
                  } else if (ch === perMill) {
                    if (multiplier != 1) {                      
                      _throwSyntaxError(pattern);
                    }
                    options['style'] = 'perMill';
                    numberSettings['isPerMill'] = true;
                    multiplier = 1000;
                    if(isPrefix)
                      prefix = prefix.concat("'\u2030");
                    else
                      suffix = suffix.concat("'\u2030");
                    continue;
                  }
                  else if (ch === minus) {
                    if(isPrefix)
                      prefix = prefix.concat("'-");
                    else
                      suffix = suffix.concat("'-");
                    continue;
                  }
                }
                if(isPrefix)
                  prefix = prefix.concat(ch);
                else
                  suffix = suffix.concat(ch);
                break;

              case 1:
                if (j === 1) {
                  ++phaseOneLength;
                } else {
                  if (--phaseOneLength === 0) {
                    phase = 2;
                    isPrefix = false;
                  }
                  continue;
                }

                if (ch === digit) {
                  if (zeroDigitCount > 0) {
                    ++digitRightCount;
                  } else {
                    ++digitLeftCount;
                  }
                  if (groupingCount >= 0 && decimalPos < 0) {
                    ++groupingCount;
                  }
                } else if (ch === zeroDigit) {
                  if (digitRightCount > 0) {
                    _throwSyntaxError(pattern);
                  }
                  ++zeroDigitCount;
                  if (groupingCount >= 0 && decimalPos < 0) {
                    ++groupingCount;
                  }
                } else if (ch === groupingSeparator) {
                  groupingCount = 0;
                } else if (ch === decimalSeparator) {
                  if (decimalPos >= 0) {                    
                    _throwSyntaxError(pattern);
                  }
                  decimalPos = digitLeftCount + zeroDigitCount + 
                  digitRightCount;
                } else if (_regionMatches(pattern, pos, exponent, 0, 
                  exponent.length)){
                  if (useExponentialNotation) {
                    _throwSyntaxError(pattern);
                  }
                  useExponentialNotation = true;
                  minExponentDigits = 0;

                  pos = pos + exponent.length;
                  while (pos < pattern.length && pattern.charAt(pos) === 
                    zeroDigit) {
                    ++minExponentDigits;
                    ++phaseOneLength;
                    ++pos;
                  }
              
                  if ((digitLeftCount + zeroDigitCount) < 1 || 
                    minExponentDigits < 1) {
                    _throwSyntaxError(pattern);
                  }
                  phase = 2;
                  isPrefix = false;
                  --pos;
                  continue;
                } else {
                  phase = 2;
                  isPrefix = false;
                  --pos;
                  --phaseOneLength;
                  continue;
                }
                break;
            }
          }

      
          if (zeroDigitCount === 0 && digitLeftCount > 0 && decimalPos >= 0) {
            // Handle "###.###" and "###." and ".###"
            var n = decimalPos;
            if (n === 0) { // Handle ".###"
              ++n;
            }
            digitRightCount = digitLeftCount - n;
            digitLeftCount = n - 1;
            zeroDigitCount = 1;
          }

          // Do syntax checking on the digits.
          if ((decimalPos < 0 && digitRightCount > 0) ||
            (decimalPos >= 0 && (decimalPos < digitLeftCount ||
              decimalPos > (digitLeftCount + zeroDigitCount))) ||
            groupingCount == 0 || inQuote) {
            _throwSyntaxError(pattern);
          }

          if (j === 1) {
            posPrefixPattern = prefix;
            posSuffixPattern = suffix;
            negPrefixPattern = posPrefixPattern;
            negSuffixPattern = posSuffixPattern;
            var digitTotalCount = digitLeftCount + zeroDigitCount + 
            digitRightCount;
            // The effectiveDecimalPos is the position the decimal is at or
            //would be at if there is no decimal. Note that if decimalPos<0,
            // then digitTotalCount == digitLeftCount + zeroDigitCount.
            var effectiveDecimalPos = decimalPos >= 0 ?
            decimalPos : digitTotalCount;
            numberSettings['minimumIntegerDigits'] = (effectiveDecimalPos - 
              digitLeftCount);
            numberSettings['maximumIntegerDigits'] = (useExponentialNotation ?
              digitLeftCount + numberSettings['minimumIntegerDigits'] :
              MAXIMUM_INTEGER_DIGITS);
            numberSettings['maximumFractionDigits'] = (decimalPos >= 0 ?
              (digitTotalCount - decimalPos) : 0);
            numberSettings['minimumFractionDigits'] = (decimalPos >= 0 ?
              (digitLeftCount + zeroDigitCount - decimalPos) : 0);
            numberSettings['groupingSize'] = (groupingCount > 0) ? 
            groupingCount : 0;
            
          } else {
            negPrefixPattern = prefix;
            negSuffixPattern = suffix;
            gotNegative = true;
          }
        }

        if (pattern.length == 0) {
          posPrefixPattern = posSuffixPattern = "";
          numberSettings['minimumIntegerDigits'] = 0;
          numberSettings['maximumIntegerDigits'] = MAXIMUM_INTEGER_DIGITS;
          numberSettings['minimumFractionDigits'] = 0;
          numberSettings['maximumFractionDigits'] = MAXIMUM_FRACTION_DIGITS;
        }

        // If there was no negative pattern, or if the negative pattern is
        // identical to the positive pattern, then prepend the minus sign to
        // the positive pattern to form the negative pattern.
        if (!gotNegative ||
          ((negPrefixPattern.localeCompare(posPrefixPattern) == 0)
            && (negSuffixPattern.localeCompare(posSuffixPattern) == 0))) {
          negSuffixPattern = posSuffixPattern;
          negPrefixPattern = "'-" + posPrefixPattern;
        }
        _expandAffixes(localeElements, numberSettings);
      }

    }());
  
    function _init()
    {
    
      return {
        /**
         * Format a number.
         * @memberOf OraNumberConverter
         * @param {number} value - Number object to be formatted.
         * @param {Object} localeElements - the instance of LocaleElements  
         * bundle
         * @param {Object=} options - Containing the following properties:<br>
         * - <b>style.</b>  is one of the String values "decimal", "currency"  
         * or "percent". The default is "decimal".<br>
         * - <b>currency.</b> An ISO 4217 alphabetic currency code. Mandatory 
         *  when style is "currency".<br>
         * - <b>currencyDisplay.</b> is one of the String values "code", 
         * "symbol", or "name", specifying whether to display the currency as  
         * an ISO 4217 alphabetic currency code, 
         * a localized currency symbol, or a localized currency name if 
         * formatting with the "currency" style. It is only present when style 
         * has the value "currency". The default is "symbol".<br>
         * - <b>minimumIntegerDigits.</b> is a non-negative integer Number value 
         * indicating the minimum integer digits to be used. Numbers will be 
         * padded with leading zeroes if necessary.<br>
         * - <b>minimumFractionDigits.</b> a non-negative integer Number value 
         * indicating the minimum fraction digits to be used. Numbers will be 
         * padded with trailing zeroes if necessary.<br>
         * - <b>maximumFractionDigits.</b> a non-negative integer Number value 
         * indicating the maximum fraction digits to be used. Numbers will be 
         * rounded if necessary.<br>
         * - <b>useGrouping.</b> is a Boolean value indicating whether a 
         * grouping separator should be used. The default is true.<br>
         * - <b>pattern.</b> custom pattern. Will override above options 
         * when present.
         * @param {string=} locale - A BCP47 compliant language tag. it is only 
         * used to extract the unicode extension keys. 
         * @return {string} formatted number.
         * @throws {RangeError} If a property value of the options parameter is 
         * out of range.
         * @throws {TypeError} If the style is currency and currency code is 
         * missing.
         * @throws {SyntaxError} If an unexpected character is encountered in 
         * the pattern.
         */ 
        format : function(value, localeElements, options, locale) {
          if(arguments.length <=2 || options === undefined) {
            options = {
              'useGrouping': true,
              'style': 'decimal'
            }; 
          }
          _validateNumberOptions(options, "OraNumberConverter.format");
          localeElements = _getLocaleElementsMainNode(localeElements);
          var numberSettings = {};
          _getNumberSettings(localeElements, numberSettings, options, locale);
          return _formatNumberImpl(value, options, localeElements,
            numberSettings, locale);
        },
    
        /**
         * Parse a number.
         * @memberOf OraNumberConverter
         * @param {string|number} str - string to be parsed.
         * @param {Object} localeElements - the instance of LocaleElements 
         * bundle
         * @param {Object=} options - Containing the following properties:<br>
         * - <b>style.</b>  is one of the String values "decimal", "currency" or 
         * "percent". The default is "decimal".<br>
         * - <b>currency.</b> An ISO 4217 alphabetic currency code. Mandatory 
         * when style is "currency".<br>
         * - <b>currencyDisplay.</b> is one of the String values "code", 
         * "symbol", or "name", specifying whether to display the currency as 
         * an ISO 4217 alphabetic currency code,
         *  a localized currency symbol, or a localized currency name if 
         *  formatting with the "currency" style. It is only considered when 
         *  style has the value "currency". The default is "symbol".<br>
         * - <b>minimumIntegerDigits.</b> is a non-negative integer Number value 
         * indicating the minimum integer digits to be used. Numbers will be 
         * padded with leading zeroes if necessary.<br>
         * - <b>minimumFractionDigits.</b> a non-negative integer Number value 
         * indicating the minimum fraction digits to be used. Numbers will be 
         * padded with trailing zeroes if necessary.<br>
         * - <b>maximumFractionDigits.</b> a non-negative integer Number value 
         * indicating the maximum fraction digits to be used. Numbers will be 
         * rounded if necessary.<br>
         * - <b>useGrouping.</b> is a Boolean value indicating whether a 
         * grouping separator should be used. The default is true.<br>
         * - <b>pattern.</b> custom pattern. Will override above options when 
         * present.<br>
         * @param {string=} locale - A BCP47 compliant language tag. it is only 
         * used to extract the unicode extension keys. 
         * @return {number} a number object parsed from the string. In case of 
         * error, returns null.
         * @throws {RangeError} If a property value of the options parameter is 
         * out of range.
         * @throws {TypeError} If the style is currency and currency code is 
         * missing.
         * @throws {SyntaxError} If an unexpected character is encountered in 
         * the pattern.
         * @throws {Error} If the <i>str</i> parameter does not match the number 
         * pattern.
         */ 
        parse : function(str, localeElements, options, locale) {
          if(typeof str === "number")
            return str;
          if(Object.prototype.toString.call(str) === '[object Number]')
            return  Number(str);
          if(arguments.length <= 2 || options === undefined) {
            options = {
              'useGrouping': true,
              'style': 'decimal'
            }; 
          }
          var errStr = str;
          _validateNumberOptions(options, "OraNumberConverter.parse");
          localeElements = _getLocaleElementsMainNode(localeElements);
          var numberSettings = {};
          var numberingSystemKey =  _getLanguageExtension(locale, "nu");
          if(numeringSystems[numberingSystemKey] === undefined)
            numberingSystemKey = 'latn';
          if(numberingSystemKey !== 'latn') {
            var idx;
            var latnStr = [];
            for(idx = 0; idx < str.length; idx++)
            {
              var pos = numeringSystems[numberingSystemKey].indexOf(str[idx]);
              if(pos != -1)
                latnStr.push(pos);
              else
                latnStr.push(str[idx]);       
            }
            str =  latnStr.join("");
          }
          _getNumberSettings(localeElements, numberSettings, options, locale); 
          var decimalSeparator = localeElements['numbers']
          [numberSettings['numberingSystem']]['decimal'],
          groupingSeparator = localeElements['numbers']
          [numberSettings['numberingSystem']]['group'],      
          ret = NaN,        
          value1 = str.replace(/ /g, "");      
          // allow infinity or hexidecimal
          if (regexInfinity.test(value1)) {
            ret = parseFloat(str);
          }
          else {

            var signInfo = _parseNegativePattern(str, options, numberSettings,
              localeElements),
            sign = signInfo[ 0 ],
            num = signInfo[ 1 ];
            sign = sign || "+";

            // remove spaces: leading, trailing and between - and number. 
            // Used for negative currency pt-BR
            num = num.replace(/ /g, "");

            // determine exponent and number
            var exponent,
            intAndFraction,
            exponentPos = num.indexOf("e");
            if (exponentPos < 0) exponentPos = num.indexOf("E");
            if (exponentPos < 0) {
              intAndFraction = num;
              exponent = null;
            }
            else {
              intAndFraction = num.substr(0, exponentPos);
              exponent = num.substr(exponentPos + 1);
            }
            // determine decimal position
            var integer,
            fraction,
            decSep = decimalSeparator,
            decimalPos = intAndFraction.indexOf(decSep);
            if (decimalPos < 0) {
              integer = intAndFraction;
              fraction = null;
            }
            else {
              integer = intAndFraction.substr(0, decimalPos);
              fraction = intAndFraction.substr(decimalPos + decSep.length);
            }
            // handle groups (e.g. 1,000,000)
            var groupSep = groupingSeparator;
            integer = integer.split(groupSep).join("");
            var altGroupSep = groupSep.replace(/\u00A0/g, " ");
            if (groupSep !== altGroupSep) {
              integer = integer.split(altGroupSep).join("");
            }
            // build a natively parsable number string
            var p = sign + integer;
            if (fraction !== null) {
              p += "." + fraction;
            }
            if (exponent !== null) {
              // exponent itself may have a number patternd
              var expSignInfo = _parseNegativeExponent(exponent, localeElements,
                numberSettings);
              p += "e" + (expSignInfo[0] || "+") + expSignInfo[ 1 ];
            }
            if (regexParseFloat.test(p)) {
              ret = parseFloat(p);
            }
          }
          if(numberSettings['isPercent'] === true || options['style'] ===
            'percent')
            ret /= 100;
          else if(numberSettings['isPerMill'] === true)
            ret /= 1000;
          if(isNaN(ret)) {
            var msg, error, errorInfo, code;
            msg = "Unparsable number " + errStr + " The expected number " + 
            "pattern is " + numberSettings['pat'];
            switch(options['style'])
            {
              case "decimal" :
                code = "decimalFormatMismatch";
                break;
              case "currency" :
                code = "currencyFormatMismatch";
                break;
              case "percent" :
                code = "percentFormatMismatch";
                break;
            }
            error = new Error(msg);
            errorInfo = {
              'errorCode' : code,
              'parameterMap' : {
                'value' : errStr,
                'format': numberSettings['pat']
              }
            };
            error['errorInfo'] = errorInfo;
            throw error;
          }
          return ret;
        },
      
        /**
         * Resolve options.
         * Returns a new object with properties reflecting the number formatting 
         * options computed based on the options parameter.
         * If options is not provided, the properties will be derived from the 
         * locale defaults.
         * @memberOf OraNumberConverter
         * @param {Object} localeElements - the instance of LocaleElements 
         * bundle
         * @param {Object=} options containing the following properties:<br>
         * - <b>style.</b> "decimal", "currency" or "percent". The default is 
         * "decimal".<br>
         * - <b>currency.</b> An ISO 4217 alphabetic currency code. Mandatory 
         * when when style is "currency".<br>
         * - <b>currencyDisplay.</b> is one of the String values "code", 
         * "symbol", or "name", specifying whether to display the currency as 
         * an ISO 4217 alphabetic currency code,
         *   a localized currency symbol, or a localized currency name if 
         *   formatting with the "currency" style. It is only present 
         *   when style has the value "currency". The default is "symbol".<br>
         * - <b>minimumIntegerDigits.</b> is a non-negative integer Number value 
         * indicating the minimum integer digits to be used. Numbers will be 
         * padded with leading zeroes if necessary.<br>
         * - <b>minimumFractionDigits.</b> a non-negative integer Number value 
         * indicating the minimum fraction digits to be used. Numbers will be 
         * padded with trailing zeroes if necessary.<br>
         * - <b>maximumFractionDigits.</b> a non-negative integer Number value 
         * indicating the maximum fraction digits to be used. Numbers will be 
         * rounded if necessary.<br>
         * - <b>numberingSystem</b>. The numbering system.
         * - <b>useGrouping.</b> is a Boolean value indicating whether a 
         * grouping separator should be used. The default is true.<br>
         * - <b>pattern.</b> custom pattern. Will override above options when 
         * present.<br>
         * @param {string=} locale - A BCP47 compliant language tag. it is only 
         * used to extract the unicode extension keys. 
         * @return {Object} Resolved options object.
         * @throws {RangeError} If a property value of the options parameter is 
         * out of range.
         * @throws {TypeError} If the style is currency and currency code is 
         * missing. 
         */
        resolvedOptions : function(localeElements, options, locale){
          if(arguments.length < 3 || locale === undefined) {
            locale = _getLocaleElementsMainNodeKey(localeElements);
          }
          if(arguments.length < 2 || options === undefined) {
            options = {
              'useGrouping': true,
              'style': 'decimal'
            }; 
          }
          localeElements = _getLocaleElementsMainNode(localeElements);
          var numberSettings = {};
          _validateNumberOptions(options, "OraNumberConverter.resolvedOptions");
          _getNumberSettings(localeElements, numberSettings, options, locale);
          numberSettings['numberingSystemKey'] =  _getLanguageExtension(locale,
            "nu");
          if(numeringSystems[numberSettings['numberingSystemKey']] === 
            undefined)
            numberSettings['numberingSystemKey'] = 'latn';
          var resOptions = {
            'locale': locale,
            'style': (options['style'] === undefined) ? 'decimal' : 
            options['style'],
            'useGrouping' : (options['useGrouping'] === undefined) ? true : 
            options['useGrouping'],
            'minimumIntegerDigits' : numberSettings['minimumIntegerDigits'],
            'minimumFractionDigits' : numberSettings['minimumFractionDigits'],
            'maximumFractionDigits' : numberSettings['maximumFractionDigits'],
            'numberingSystem': numberSettings['numberingSystemKey']
          }
          if(options['style'] === 'currency') {
            resOptions['currency'] = options['currency'];
            resOptions['currencyDisplay'] = (options['currencyDisplay'] === 
              undefined) ?  'symbol' : options['currencyDisplay'];
          }
          if(options['pattern'] !== undefined)
            resOptions['pattern'] = options['pattern'];
          return resOptions;
        }
      };
    }
  
    return {
      /**
       * getInstance.
       * Returns the singleton instance of OraNumberConverter class.  
       * @memberOf OraNumberConverter
       * @return {Object} The singleton OraNumberConverter instance.
       */
      getInstance: function () {	 
        if ( !instance ) {
          instance = _init();
        }	 
        return instance;
      }	 
    };
  
  }());
  ///////////////////////////////--DateTimeConverter--/////////////////////////
  OraDateTimeConverter =  (function() {

    var
    _appendPreOrPostMatch,
    _expandFormat,
    _getTokenRegExp,
    _parseExact,
    _formatImpl,
    _parseImpl,
    _formatRelativeImpl,
    _throwInvalidDateFormat,
    _getResolvedOptionsFromPattern,
    _dateTimeStyle,
    _get2DigitYearStart,
    _isHour12,
    _dateTimeStyleFromPattern,
    _expandPredefinedStylesFormat,
    _isLeapYear, _getDaysInMonth, instance;
  
    
    _get2DigitYearStart = function(options) {
      var option = options['two-digit-year-start'];
      if(option === undefined || isNaN(option))
        option = 1950;
      option = parseInt(option, 10);
      return option;
    };
    
    _isHour12 = function(localeElements) {
      var mainNode = _getLocaleElementsMainNode(localeElements);
      var territory = mainNode['identity']['territory'] || '001';
      var prefferedHours = localeElements['supplemental']['prefferedHours'];
      var hour12 = prefferedHours[territory];
      return hour12 === 'h';      
    };
    
    _isLeapYear = function(y) {
      if (y % 400 == 0)
        return true;
      else if (y % 100 == 0)
        return false;
      else if (y % 4 == 0)
        return true;
      else
        return false;
    };
    
    _getDaysInMonth = function(y, m) {
      switch (m) {
        case 0 :
        case 2 :
        case 4 :
        case 6 :
        case 7 :
        case 9 :
        case 11 :
          return 31;
        case 1:
          if(_isLeapYear(y))
            return 29;
          else
            return 28;
        default:
          return 30;
      }
    };

    _getTokenRegExp = function() {
      return (/ccccc|cccc|ccc|cc|c|EEEEE|EEEE|EEE|EE|E|dd|d|MMMMM|MMMM|MMM|MM|M|LLLLL|LLLL|LLL|LL|L|yyyy|yy|y|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|aa|a|SS|S|zzzz|zzz|zz|z|GGGGG|GGGG|GGG|GG|G/g);
    };

    _expandPredefinedStylesFormat = function(options, localeElements, caller) {
      var mainNode = _getLocaleElementsMainNode(localeElements);
      var getOption = _getGetOption(options, caller);
      var fmtType = getOption('formatType', 'string', ['date', 'time', 
        'datetime'], 'date');
      var dStyle = getOption('dateFormat', 'string', 
        ['short', 'medium', 'long', 'full'], 'short');
      var tStyle = getOption('timeFormat', 'string', 
        ['short', 'medium', 'long', 'full'], 'short');
      var cal = mainNode['dates']['calendars']['gregorian'];
      var dateFormats = cal['dateFormats'];
      var timeFormats = cal['timeFormats'];
      var dStyleFmt, tStyleFmt, format;
      switch (dStyle)
      {
        case "full" :
          dStyleFmt = dateFormats['full'];
          break;
        case "long" :
          dStyleFmt = dateFormats['long'];
          break;
        case "medium" :
          dStyleFmt = dateFormats['medium'];
          break;
        case "short" :
          dStyleFmt = dateFormats['short'];
          break;
        default:
          break;
      }
      switch (tStyle)
      {
        case "full" :
          tStyleFmt = timeFormats['full'];
          break;
        case "long" :
          tStyleFmt = timeFormats['long'];
          break;
        case "medium" :
          tStyleFmt = timeFormats['medium'];
          break;
        case "short" :
          tStyleFmt = timeFormats['short'];
          break;
        default:
          break;
      }
      if(dStyleFmt !== undefined && (fmtType === "datetime" || 
        fmtType === "date"))
        format = dStyleFmt;
      if(tStyleFmt !== undefined && (fmtType === "datetime" || 
        fmtType === "time"))
        { 
        if(format)
          format = format + " " + tStyleFmt;
        else
          format = tStyleFmt;
      }
      return format;
    };

    _appendPreOrPostMatch = function(preMatch, strings) {
      // appends pre- and post- token match strings while removing escaped 
      // characters.
      // Returns a single quote count which is used to determine if the 
      // token occurs
      // in a string literal.
      var quoteCount = 0,
      escaped = false;
      for (var i = 0, il = preMatch.length; i < il; i++) {
        var c = preMatch.charAt(i);
        switch (c) {
          case "\'":
            if (escaped) {
              strings.push("\'");
            }
            else {
              quoteCount++;
            }
            escaped = false;
            break;
          case "\\":
            if (escaped) {
              strings.push("\\");
            }
            escaped = !escaped;
            break;
          default:
            strings.push(c);
            escaped = false;
            break;
        }
      }
      return quoteCount;
    };
    
    _throwInvalidDateFormat = function(format, options, m) {
      var msg, error, errorInfo, samplePattern;
      var isDate = options['year'] !== undefined || options['month'] !== 
      undefined ||
      options['weekday'] !== undefined || options['day'] !== undefined;
      var isTime = options['hour'] !== undefined || options['minute'] !==
      undefined ||
      options['second'] !== undefined;
      if(isDate && isTime) {
        samplePattern = "MM/dd/yy hh:mm:ss a";
      }
      else if(isDate) {
        samplePattern = "MM/dd/yy";           
      }
      else {
        samplePattern = "hh:mm:ss a";          
      }
      msg = "Unexpected character(s) " + m + " encountered in the pattern \"" +
      format  + " An example of a valid pattern is \"" + samplePattern + '".';
      error = new SyntaxError(msg);
      errorInfo = {
        'errorCode' : 'optionValueInvalid',
        'parameterMap' : {
          'propertyName' : 'pattern',
          'propertyValue' : format,
          'propertyValueHint ': samplePattern
        }
      };
      error['errorInfo'] = errorInfo;
      throw error;
    };
    
    //expand formats
    (function() {   
      var _toAvailableFormatsKeys,
      _expandAvailableDateFormatsPattern,
      _expandAvailableTimeFormatsPattern,
      _basicFormatMatcher,
      _appendToKey;
      
      _basicFormatMatcher = function(dateTimeKeys, localeElements, isDate,
        hour12)
        {          
        var mainNode = _getLocaleElementsMainNode(localeElements);
        var availableFormats = mainNode['dates']['calendars']['gregorian']
        ['dateTimeFormats']['availableFormats'];
        var dateTimeFormats;
        if(isDate)
          dateTimeFormats = ['era', 'year', 'month', 'weekday', 'day'];
        else
          dateTimeFormats = ['weekday', 'hour', 'minute', 'second'];
        //,'timeZoneName'];

        var removalPenalty = 120;
        var additionPenalty = 20;
        var longLessPenalty = 8;
        var longMorePenalty = 6;
        var shortLessPenalty = 6;
        var shortMorePenalty = 3;
        var bestScore = -Infinity;
        var bestFormat = undefined; 
        var match;
        var regExp = _getTokenRegExp();
        for(var f in availableFormats) {
          var format = {};
          format['pattern'] = availableFormats[f];
          var score = 0;
          while ((match = regExp.exec(f)) !== null) {
            var m = match[0];
            switch(m) {
              case "y" :
                format['year'] = 'numeric';
                break;
              case "yy" :
                format['year'] = '2-digit';
                break;
              case "M" :
              case "L" :
                format['month'] = 'numeric';
                break;
              case "MM" :
              case "LL" :
                format['month'] = '2-digit';
                break;
              case "MMM":
              case "LLL":
                format['month'] = 'short';
                break;
              case "MMMM":
              case "LLLL":
                format['month'] = 'long';
                break;
              case "MMMMM" :
              case "LLLLL" :
                format['month'] = 'narrow';
                break;
              case "E":
              case "EE":
              case "EEE":
              case "c":
              case "cc":
              case "ccc":
                format['weekday'] = 'short';
                break;
              case "EEEE":
              case "cccc":
                format['weekday'] = 'long';
                break;
              case "EEEEE" :
              case "ccccc" :
                format['weekday'] = 'narrow';
                break;               
              case "d" :
                format['day'] = 'numeric';
                break;
              case "dd" :
                format['day'] = '2-digit';
                break;               
              case "h" :
                if (hour12) {
                  format['hour'] = 'numeric';
                }
                break;
              case "H" :
                if (!hour12) {
                  format['hour'] = 'numeric';
                }
                break;
              case "hh" :
                if (hour12) {
                  format['hour'] = '2-digit';
                }
              case "HH" :
                if (!hour12) {
                  format['hour'] = '2-digit';
                }              
                break;
              case "m" :
                format['minute'] = 'numeric';
                break;
              case "mm" :
                format['minute'] = '2-digit';
                break;               
              case "s" :
                format['second'] = 'numeric';
                break;
              case "ss" :
                format['second'] = '2-digit';
                break;               
              case "G" :
              case "GG" :
              case "GGG" :
                format['era'] = 'short';
                break;              
              case "GGGG" :
                format['era'] = 'long';
                break;               
              case "GGGGG" :
                format['era'] = 'narrow';
                break;
              case "z" :
              case "zz" :
              case "zzz" :
                format['timeZoneName'] = 'short';
                break;              
              case "zzzz" :
                format['timeZoneName'] = 'long';
                break;               
              default:
                break;
            }
          }
          for(var property in dateTimeFormats) {
            var optionsProp = dateTimeKeys[dateTimeFormats[property]];
            var formatProp = format[dateTimeFormats[property]];
            if(optionsProp === undefined && formatProp !== undefined) {
              score -= additionPenalty;
            }
            else if(optionsProp !== undefined && formatProp === undefined) {
              score -= removalPenalty;
            }
            else if(optionsProp !== undefined && formatProp !== undefined){
 
              var values = {
                '2-digit':0, 
                'numeric':1, 
                'narrow':2, 
                'short':3, 
                'long':4
              };
              var optionsPropIndex = values[optionsProp];
              var formatPropIndex = values[formatProp];
              var delta = Math.max(Math.min(formatPropIndex - 
                optionsPropIndex, 2), -2);
              if(delta === 2) {
                score -= longMorePenalty;
              }
              else if(delta ===1 ) {
                score -= shortMorePenalty;
              }
              else if(delta === -1) {
                score -= shortLessPenalty;
              }
              else if(delta === -2) {
                score -= longLessPenalty;
              }
            }
          }
          if(score > bestScore) {
            bestScore = score;
            bestFormat = format;
          }         
        }
        if(bestFormat !== undefined) {
          return bestFormat['pattern'];
        }
        return null;
      };
      
      
      _toAvailableFormatsKeys = function (options, localeElements, caller) {
        var dateKey = '', timeKey = '';
        var dateOptions = {}, timeOptions = {};
  
        var getOption = _getGetOption(options, caller);
          
        //date key
        var option = getOption('era', 'string', ['narrow', 'short', 'long']);
        dateKey += _appendToKey(dateOptions, 'era',
          option, {
            'narrow': 'GGGGG', 
            'short': 'GGG', 
            'long': 'GGGG'
          });            
  
        option = getOption('year',  'string', ['2-digit', 'numeric']); 
        dateKey += _appendToKey(dateOptions, 'year',
          option, {
            '2-digit': 'yy', 
            'numeric': 'y'
          });

        option = getOption('month', 'string', ['2-digit', 'numeric', 'narrow',
          'short', 'long']);
        dateKey += _appendToKey(dateOptions, 'month',
          option, {
            '2-digit': 'MM', 
            'numeric': 'M',
            'narrow': 'MMMMM', 
            'short': 'MMM', 
            'long': 'MMMM'
          });

        option = getOption('weekday', 'string', ['narrow', 'short', 'long']);
        dateKey += _appendToKey(dateOptions, 'weekday',
          option, {
            'narrow': 'EEEEE', 
            'short': 'E', 
            'long': 'EEEE'
          });

        option = getOption('day', 'string', ['2-digit', 'numeric']);
        dateKey += _appendToKey(dateOptions, 'day',
          option, {
            '2-digit': 'dd', 
            'numeric': 'd'
          });
   
        //time key
        var hr12 = getOption('hour12', 'boolean', [true, false]);
        if(hr12 === undefined)
          hr12 = _isHour12(localeElements);
        option = getOption('hour', 'string', ['2-digit', 'numeric']);
        if (hr12 === true) {
          timeKey += _appendToKey(timeOptions, 'hour',
            option, {
              '2-digit': 'hh', 
              'numeric': 'h'
            });
        } 
        else {
          timeKey += _appendToKey(timeOptions, 'hour',
            option, {
              '2-digit': 'HH', 
              'numeric': 'H'
            });
        }

        option = getOption('minute', 'string', ['2-digit', 'numeric']);
        timeKey += _appendToKey(timeOptions, 'minute',
          option, {
            '2-digit': 'mm', 
            'numeric': 'm'
          });

        option = getOption('second', 'string', ['2-digit', 'numeric']);
        timeKey += _appendToKey(timeOptions, 'second',
          option, {
            '2-digit': 'ss', 
            'numeric': 's'
          });
            
        return [dateKey, timeKey, dateOptions, timeOptions];
      };
        
      _appendToKey = function (obj, prop, option, pairs) {
        if (option !== undefined) {
          obj[prop] = option;
          return pairs[option];
        } else {
          return '';
        }
      };

      _expandAvailableDateFormatsPattern = function (formatTemplate, options,
        caller)
        {
        var datePat = formatTemplate, regExPat, match;
        var getOption = _getGetOption(options, caller);
        //year
        var option = getOption('year', 'string', ['2-digit', 'numeric']);
        var pairs =  {
          '2-digit': 'yy', 
          'numeric': 'yyyy'
        };
        if(option !== undefined)
          datePat = datePat.replace(/y{1,4}/, pairs[option]);

        //month
        option = getOption('month', 'string', ['2-digit', 'numeric', 'narrow',
          'short', 'long']);
        if(option !== undefined) {
          pairs = {
            '2-digit': 'MM', 
            'numeric': 'M', 
            'narrow': 'MMMMM', 
            'short': 'MMM', 
            'long': 'MMMM'
          };
          if(pairs[option] !== undefined && pairs[option].length > 2)
            datePat = datePat.replace(/M{3,5}/, pairs[option]);
          else if(option === '2-digit') {
            regExPat=/^[M][^M]|[^M]M[^M]/g;
            match= regExPat.exec(formatTemplate);
            if(match !== null) {
              datePat = datePat.replace('M', 'MM');
            }
          }
        }
            
        //weekday
        option = getOption('weekday', 'string', ['narrow', 'short', 'long']);
        if(option !== undefined) { 
          pairs = {
            'narrow': 'EEEEE', 
            'short': 'EEE', 
            'long': 'EEEE'
          };
          datePat = datePat.replace(/E{1,5}/, pairs[option]);
        }
        //day

        option = getOption('day', 'string', ['2-digit', 'numeric']);
        if(option !== undefined) { 
          if(option === '2-digit') {
            regExPat=/^[d][^d]|[^d]d[^d]/g;
            match = regExPat.exec(formatTemplate);
            if(match !== null) {
              datePat = datePat.replace('d', 'dd');
            }
          }
        }
          
        return datePat;
      };
      
      _expandAvailableTimeFormatsPattern = function (formatTemplate, options,
        caller) {
        var timePat = formatTemplate;
        var getOption = _getGetOption(options, caller);
        var option = getOption('hour', 'string', ['2-digit', 'numeric']);
        if(option === '2-digit') {
          var regExPat=/(?:^|[^h])h[^h]|[^H]H[^H]|[^k]k[^k]|[^K]K[^K]/;
          var match= regExPat.exec(formatTemplate);
          if(match !== null) {
            var len = match[0].length-2;
            var ext = match[0][len] + match[0][len];
            timePat = formatTemplate.replace(match[0][len], ext);
          }
        }
        return timePat;
      };
        
      _expandFormat = function(options, localeElements, caller) {
        var mainNode = _getLocaleElementsMainNode(localeElements);
        var locale = _getLocaleElementsMainNodeKey(localeElements);
        var getOption = _getGetOption(options, caller);
        var pattern;
        var matcher = getOption('formatMatcher',  'string', 
          ['basic', 'munger'], 'munger');
        var count = 0;
        for(count in options){
          count++;
        }
        if(count == 0) {
          options = {
            'year': 'numeric', 
            'month': 'numeric', 
            'day': 'numeric'
          };
        }

        var dateTimeKeys = _toAvailableFormatsKeys(options, localeElements, 
          caller);
        //First try to get the pattern from cache
        if(_localeDataCache[locale] !== undefined) {
          if(_localeDataCache[locale]['dates']['calendars']['gregorian']
            ['dateTimeFormats'][dateTimeKeys[0] + dateTimeKeys[1]] !==
            undefined){
            return _localeDataCache[locale]['dates']['calendars']['gregorian']['dateTimeFormats'][dateTimeKeys[0] + dateTimeKeys[1]];
          }
        }          
        if(dateTimeKeys[0] === '' && dateTimeKeys[1] === '') {
          return _expandPredefinedStylesFormat(options, localeElements, 
            caller);
        }
        var availableFormats = mainNode['dates']['calendars']['gregorian']
        ['dateTimeFormats']['availableFormats'];
        var datePattern = availableFormats[dateTimeKeys[0]];
        var hour12 = getOption('hour12', 'boolean', [true, false]);
        if(hour12 === undefined)
          hour12 = _isHour12(localeElements);
        if(datePattern === undefined && dateTimeKeys[0] !== '') {
          var dateTemplatePattern = _basicFormatMatcher(dateTimeKeys[2], 
            localeElements, true, hour12);
          if(dateTemplatePattern !== null) {
            if(matcher === 'basic') {
              datePattern = dateTemplatePattern;
            }
            else {
              datePattern = _expandAvailableDateFormatsPattern(
                dateTemplatePattern, options, caller);
            }
          }
          else
            datePattern = dateTimeKeys[0];
        }
        var timePattern = availableFormats[dateTimeKeys[1]];
        if(timePattern === undefined && dateTimeKeys[1] !== '') {
          var timeTemplatePattern = _basicFormatMatcher(dateTimeKeys[3],
            localeElements, false, hour12);
          if(timeTemplatePattern !== null) {
            if(matcher === 'basic')
              timePattern = timeTemplatePattern;
            else
              timePattern = _expandAvailableTimeFormatsPattern(
                timeTemplatePattern, options, caller);
          }
          else
            timePattern = dateTimeKeys[1];
        }
        pattern = datePattern || '';
        if(timePattern !== undefined)
        {
          if(pattern !== '')
            pattern += ' ' + timePattern;
          else
            pattern = timePattern;
        }
        //cache the pattern
        if(_localeDataCache[locale] === undefined) {
          _localeDataCache[locale] = {};
          _localeDataCache[locale]['dates'] = {};
          _localeDataCache[locale]['dates']['calendars'] = {};
          _localeDataCache[locale]['dates']['calendars']['gregorian'] = {};
          _localeDataCache[locale]['dates']['calendars']['gregorian']
          ['dateTimeFormats'] = {};
        }
        _localeDataCache[locale]['dates']['calendars']['gregorian']
        ['dateTimeFormats'][dateTimeKeys[0] + dateTimeKeys[1]] = pattern;
        return pattern;
      };      
    }());
            
      
    _formatImpl = function(value, localeElements, options) {
      var ret;
      var mainNode = _getLocaleElementsMainNode(localeElements);
      var format = options['pattern'] || _expandFormat(options, localeElements,
        "OraDateTimeConverter.format");
      // Start with an empty string
      ret = [];
      var part,
      zeros = [ "0", "00", "000" ],
      quoteCount = 0,
      tokenRegExp = _getTokenRegExp(),
      cal = mainNode['dates']['calendars']['gregorian'];
      var calDaysFormt = cal['days']['format'],
      calDaysStandAlone = cal['days']['stand-alone'],
      calMonthdFormt = cal['months']['format'],
      calMonthdStandAlone = cal['months']['stand-alone'];

      function _padZeros(num, c) {
        var r, s = num + "";
        if (c > 1 && s.length < c) {
          r = (zeros[c - 2] + s);
          return r.substr(r.length - c, c);
        }
        else {
          r = s;
        }
        return r;
      }

      function _getPart(date, part) {
        switch (part) {
          case 0:
            return date.getFullYear();
          case 1:
            return date.getMonth();
          case 2:
            return date.getDate();
          case 3:
            var days = {
              0: "sun", 
              1: "mon", 
              2: "tue", 
              3: "wed", 
              4: "thu", 
              5: "fri", 
              6: "sat"
            };
            return days[date.getDay()];
        }
      }
      
      for (; ;) {
        // Save the current index
        var index = tokenRegExp.lastIndex,
        // Look for the next pattern
        ar = tokenRegExp.exec(format);

        // Append the text before the pattern (or the end of the string if 
        // not found)
        var preMatch = format.slice(index, ar ? ar.index : format.length);
        quoteCount += _appendPreOrPostMatch(preMatch, ret);

        if (!ar) {
          break;
        }

        // do not replace any matches that occur inside a string literal.
        if (quoteCount % 2) {
          ret.push(ar[0]);
          continue;
        }

        var current = ar[ 0 ],
        clength = current.length;

        switch (current) {
          case "E":
          case "EE":
          case "EEE":
          case "EEEE":
          case "EEEEE":
            switch(clength) {
              case 5:
                part = calDaysFormt['narrow'];
                break;
              case 4:
                part = calDaysFormt['wide'];
                break;
              case 3:
              case 2:
              case 1:
                part = calDaysFormt['abbreviated'];
                break;
            }
            ret.push(part[_getPart(value, 3)]);
            break;
          case "c":
          case "cc":
          case "ccc":
          case "cccc":
          case "ccccc":
            switch(clength) {
              case 5:
                part = calDaysStandAlone['narrow'];
                break;
              case 4:
                part = calDaysStandAlone['wide'];
                break;
              case 3:
              case 2:
              case 1:
                part = calDaysStandAlone['abbreviated'];
                break;
            }
            ret.push(part[_getPart(value, 3)]);
            break;
          case "d":
            ret.push(_getPart(value, 2));
            break;
          case "dd":
            // Day of month, with leading zero for single-digit days
            ret.push(
              _padZeros(_getPart(value, 2), clength)
              );
            break;
          case "MMM":
          case "MMMM":
          case "MMMMM":
            switch(clength) {
              case 5:
                part = calMonthdFormt['narrow'];
                break;
              case 4:
                part = calMonthdFormt['wide'];
                break;
              case 3:
                part = calMonthdFormt['abbreviated'];
                break;
            }          
            ret.push(part[_getPart(value, 1)+1]);
            break;
          case "LLL":
          case "LLLL":
          case "LLLLL":
            switch(clength) {
              case 5:
                part = calMonthdStandAlone['narrow'];
                break;
              case 4:
                part = calMonthdStandAlone['wide'];
                break;
              case 3:
                part = calMonthdStandAlone['abbreviated'];
                break;
            }          
            ret.push(part[_getPart(value, 1)+1]);
            break;
          case "M":
          case "L":
            // Month, as digits, with no leading zero for single-digit months
            ret.push(_getPart(value, 1) + 1);
            break;
          case "MM":
          case "LL":
            // Month, as digits, with leading zero for single-digit months
            ret.push(
              _padZeros(_getPart(value, 1) + 1, clength));
            break;
          case "y":
          case "yy":
          case "yyyy":
            // Year represented by four full digits
            part =  value.getFullYear();
            if (clength == 2) {
              part = part % 100;
            }
            ret.push(_padZeros(part, clength));
            break;
          case "h":
            // Hours with no leading zero for single-digit hours, 
            // using 12-hour clock
            part = value.getHours() % 12;
            if (part === 0) part = 12;
            ret.push(part);
            break;
          case "hh":
            // Hours with leading zero for single-digit hours, 
            // using 12-hour clock
            part = value.getHours() % 12;
            if (part === 0) part = 12;
            ret.push(_padZeros(part, clength));
            break;
          case "K":
            // Hours with leading zero for single-digit hours, 
            // using 12-hour clock
            part = value.getHours() % 12;
            ret.push(part);
            break;
          case "KK":
            // Hours with leading zero for single-digit hours, 
            // using 12-hour clock
            part = value.getHours() % 12;
            ret.push(_padZeros(part, clength));
            break;
          case "H":
            // Hours with no leading zero for single-digit hours, 
            // using 24-hour clock
            ret.push(value.getHours());
            break;
          case "HH":
            // Hours with leading zero for single-digit hours, 
            // using 24-hour clock
            ret.push(_padZeros(value.getHours(), clength));
            break;
          case "k":
            // Hours with no leading zero for single-digit hours, 
            // using 24-hour clock
            part = value.getHours();
            if (part === 0) part = 24;
            ret.push(part);
            break;
          case "kk":
            // Hours with leading zero for single-digit hours, 
            // using 24-hour clock
            part = value.getHours();
            if (part === 0) part = 24;
            ret.push(_padZeros(part, clength));
            break;
          case "m":
            // Minutes with no leading zero for single-digit minutes
            ret.push(value.getMinutes());
            break;
          case "mm":
            // Minutes with leading zero for single-digit minutes
            ret.push(_padZeros(value.getMinutes(), clength));
            break;
          case "s":
            // Seconds with no leading zero for single-digit seconds
            ret.push(value.getSeconds());
            break;
          case "ss":
            // Seconds with leading zero for single-digit seconds
            ret.push(_padZeros(value.getSeconds(), clength));
            break;
          case "a":
            // Multicharacter am/pm indicator
            part = value.getHours() < 12 ? 
            cal['dayPeriods']['format']['wide']['am'] : 
            cal['dayPeriods']['format']['wide']['pm'];
            ret.push(part);
            break;
          case "SS":
          case "S":
            // Milliseconds
            ret.push(value.getMilliseconds());
            break;
          case "z":
          case "zz":
          case "zzz":
          case "zzzz":
            // Time zone offset with leading zero
            part = value.getTimezoneOffset();
            ret.push(
              (part <= 0 ? "+" : "-") + 
              _padZeros(Math.floor(Math.abs(part/60)), 2) + 
              _padZeros(Math.floor(Math.abs(part%60)), 2)
              );
            break;
          case "G":
          case "GG":
          case "GGG":
          case "GGGG":
          case "GGGGG":
            switch(clength) {
              case 5:
                part = cal['eras']['eraAbbr'];
                break;
              case 4:
                part = cal['eras']['eraAbbr'];
                break;
              case 3:
              case 2:
              case 1:
                part = cal['eras']['eraAbbr'];
                break;
            }          
            ret.push(part['1']);
            break;
          case "/":
            ret.push("/");
            break;
          default:
            _throwInvalidDateFormat(format, options, current);
        }
      }
      return ret.join("");
      
    };
  

    //_formatRelativeImpl
    (function() {
      var _getDaysDif, _getDayIndex,
      _isSameYear, _isNextYear, _isPrevYear,
      _isSameMonth, _isNextMonth, _isPrevMonth,
      _isSameWeek, _isNextWeek, _isPrevWeek,
      _isSameDay, _isNextDay, _isPrevDay;

      //d1 and d2 same year
      _isSameYear = function(d1, d2) {
        return d1.getFullYear() == d2.getFullYear();
      };

      //d2 is next year
      _isNextYear = function(d1, d2) {
        return d2.getFullYear() - d1.getFullYear() == 1;
      };

      //d2 is previous year
      _isPrevYear = function(d1, d2) {
        return _isNextYear(d2, d1);
      };

      //d2 and d1 same month 
      _isSameMonth = function(d1, d2) {
        return _isSameYear(d1, d2) && (d1.getMonth() === d2.getMonth());
      };

      //d2 is next month
      _isNextMonth = function(d1, d2) {
        if(_isSameYear(d1, d2))
          return (d2.getMonth() - d1.getMonth()) == 1;
        else if(_isNextYear(d1, d2)) {
          return d1.getMonth() == 11 && (d2.getMonth() == 0);   
        }
        return false;
      };

      //d2 is previous month
      _isPrevMonth = function(d1, d2) {
        return _isNextMonth(d2, d1);
      };

      //difference in days between d2 and d1. Only valid if d2 is same or 
      //next month of d1
      _getDaysDif = function(d1, d2) {
        var day1 = d1.getDate();
        var day2 = d2.getDate();  
        if(_isNextMonth(d1, d2)) {
          day2 += _getDaysInMonth(d1.getFullYear, d1.getMonth());
        }
        return day2 - day1;
      };

      _getDayIndex = function(localeElements, idx) {
        var mainNode = _getLocaleElementsMainNode(localeElements);
        var territory = mainNode['identity']['territory'] || '001';
        var firstDayNode = 
        localeElements['supplemental']['weekData']['firstDay'];
        var firstDayOfweek = firstDayNode[territory];
        var ret = idx - firstDayOfweek;
        if(ret < 0)
          ret += 7;
        return ret;
      };

      //d1 and d2 same week
      _isSameWeek = function(localeElements, d1, d2) {
        if(d1 > d2) {
          //swap dates to make sure we work with positive numbers
          var tmp = d1;
          d1 = d2;
          d2 = tmp;  
        }
        if((!_isSameMonth(d1, d2)) && (!_isNextMonth(d1, d2)))
          return false;
        var dif = _getDaysDif(d1, d2) + 
        _getDayIndex(localeElements, d1.getDay());
        return dif >= 0 && dif <= 6; 
      };

      //d2 is next week
      _isNextWeek = function(localeElements, d1, d2) {
        if((!_isSameMonth(d1, d2)) && (!_isNextMonth(d1, d2)))
          return false;
        var dif = _getDaysDif(d1, d2) + 
        _getDayIndex(localeElements, d1.getDay());
        return dif >= 7 && dif <= 13; 
      };

      //d2 is previous week
      _isPrevWeek = function(localeElements, d1, d2) {
        return _isNextWeek(localeElements, d2, d1);
      };

      //d1 and d2 same day
      _isSameDay = function(d1, d2) {
        return _isSameYear(d1, d2) && _isSameMonth(d1, d2) &&
        (d1.getDate() === d2.getDate());
      };

      //d2 is next day
      _isNextDay = function(d1, d2) {
        if((!_isSameMonth(d1, d2)) && (!_isNextMonth(d1, d2))) {
          return false;
        }
        return (_getDaysDif(d1, d2) === 1);
      };

      //d2 is previous day
      _isPrevDay = function(d1, d2) {
        return _isNextDay(d2, d1);
      };
      
      /**
       * Format a relative date/time
       * @param {Date} value - Date object to be formatted.
       * @param {Object} localeElements - the instance of 
       * LocaleElements bundle.
       * @param {Object} options - Containing the following properties:
       * formatUsing. Allowed values: "displayName"
       * dateField. Allowed values: "day", "week", "month", "year"
       * @return {string|null} relative date. null if the value falls 
       * out side the supported relative range.
       */
      _formatRelativeImpl = function(value, localeElements, options) {
        var mainNode = _getLocaleElementsMainNode(localeElements);
        var fields = mainNode['dates']['fields'];
        var getOption = _getGetOption(options, 
          "OraDateTimeConverter.formatRelative");
        var formatUsing = getOption('formatUsing', 'string', 
          ['displayName']);
        var option = getOption('dateField', 'string',
          ['day', 'week', 'month', 'year']);
        var now = new Date();
        switch(option) {
          case "day" :
            if(_isSameDay(now, value))
              return fields['day']['relative-type-0'];
            if(_isNextDay(now, value))
              return fields['day']['relative-type-1'];
            if(_isPrevDay(now, value))
              return fields['day']['relative-type--1'];
            break;
          case "week" :
            if(_isSameWeek(localeElements, now, value))
              return fields['week']['relative-type-0'];
            if(_isNextWeek(localeElements, now, value))
              return fields['week']['relative-type-1'];
            if(_isPrevWeek(localeElements, now, value))
              return fields['week']['relative-type--1'];
            break;
          case "month" :
            if(_isSameMonth(now, value))
              return fields['month']['relative-type-0'];
            if(_isNextMonth(now, value))
              return fields['month']['relative-type-1'];
            if(_isPrevMonth(now, value))
              return fields['month']['relative-type--1'];
            break;
          case "year" :
            if(_isSameYear(now, value))
              return fields['year']['relative-type-0'];
            if(_isNextYear(now, value))
              return fields['year']['relative-type-1'];
            if(_isPrevYear(now, value))
              return fields['year']['relative-type--1'];
            break;
          default :
            break;
        }
        return null;
      };
    }());
    
    
    // parse functions
    (function() {
      var _expandYear,
      _getTokenIndex,
      _parseLenient,
      _parseLenientyMEd,
      _parseLenientyMMMEd,
      _parseLenienthms,
      _getDayIndex,
      _getMonthIndex,
      _getParseRegExp,
      _validateRange,
      _arrayIndexOfDay,
      _arrayIndexOfMonth,
      _throwDateFormatMismatch,
      _throwWeekdayMismatch;
      
      _throwWeekdayMismatch = function(weekday, day) {
        var msg, error, errorInfo;
        msg =  "The weekday " + weekday + " does not match the date " + day; 
        error = new Error(msg);
        errorInfo = {
          'errorCode' : 'dateToWeekdayMismatch',
          'parameterMap' : {
            'weekday' : weekday,
            'date':day
          }
        };
        error['errorInfo'] = errorInfo;
        throw error;
      };
      
      _throwDateFormatMismatch = function(value, format, style) {
        var msg, error, errorInfo, errorCodeType;
        if(style === 2) {
          msg =  "The value \"" + value + 
          "\" does not match the expected date-time format \"" + format + '"';
          errorCodeType = "datetimeFormatMismatch";
        }
        else if(style === 0) {
          msg =  "The value \"" + value + 
          "\" does not match the expected date format \"" + format + '"';
          errorCodeType = "dateFormatMismatch";
         
        }
        else {
          msg = "The value \"" + value + 
          "\" does not match the expected time format \"" + format + '"';
          errorCodeType = "timeFormatMismatch";
        
        }
        error = new Error(msg);
        errorInfo = {
          'errorCode' : errorCodeType,
          'parameterMap' : {
            'value': value,
            'format': format
          }
        };
        error['errorInfo'] = errorInfo;
        throw error;
      };
        
      _expandYear = function(start2DigitYear, year) {
        // expands 2-digit year into 4 digits.
        if (year < 100) {
          var ambiguousTwoDigitYear = start2DigitYear % 100;
          year += Math.floor((start2DigitYear/100))*100 + 
          (year < ambiguousTwoDigitYear ? 100 : 0);
        }
        return year;
      };
  
      _arrayIndexOfDay = function(daysObj, item) {
        var days = {
          "sun": 0, 
          "mon": 1, 
          "tue": 2, 
          "wed": 3, 
          "thu": 4, 
          "fri": 5, 
          "sat": 6
        };
        for (var d in daysObj) {
          if (_toUpper(daysObj[d]) === item) {
            return days[d];
          }
        }
        return -1;
      };
  
      _arrayIndexOfMonth = function(monthsObj, item) {    
        for (var m in monthsObj) {
          if (_toUpper(monthsObj[m]) === item) {
            return (m - 1);
          }
        }
        return -1;
      };
      
      _getDayIndex = function(localeElements, value, fmt) {
        var mainNode = _getLocaleElementsMainNode(localeElements);
        var ret, days;
        var calDaysFmt = 
        mainNode['dates']['calendars']['gregorian']['days']['format'];
        var calDaysStdAlone = 
        mainNode['dates']['calendars']['gregorian']['days']['stand-alone'];
        switch(fmt) {
          case 0:
            days =  [
            calDaysFmt['abbreviated'],
            calDaysFmt['wide']
            ];
            break;
          case 1:
            days =  [
            calDaysStdAlone['abbreviated'],
            calDaysStdAlone['wide']
            ];
            break;
          default:
            break;
        }
        value = _toUpper(value);
        ret = _arrayIndexOfDay(days[0], value);
        if (ret === -1) {
          ret = _arrayIndexOfDay(days[1], value);
        }
        return ret;
      };

      //fmt:0 for format, 1 for stand-alone, 2 for lenient parse
      _getMonthIndex = function(localeElements, value, fmt) {
        var ret = -1, months;
        var mainNode = _getLocaleElementsMainNode(localeElements);
        var calMonthsFmt = 
        mainNode['dates']['calendars']['gregorian']['months']['format'];
        var calMonthsStdAlone = 
        mainNode['dates']['calendars']['gregorian']['months']['stand-alone'];
        switch(fmt) {
          case 0:
            months =  [
            calMonthsFmt['wide'],
            calMonthsFmt['abbreviated']
            ];
            break;
          case 1:
            months =  [
            calMonthsStdAlone['wide'],
            calMonthsStdAlone['abbreviated']
            ];
            break;
          case 2:
            months =  [
            calMonthsFmt['wide'],
            calMonthsFmt['abbreviated'],
            calMonthsStdAlone['wide'],
            calMonthsStdAlone['abbreviated']
            ];
            break; 
          default:
            return -1;
        }
        value = _toUpper(value);
        for(var m in months) {
          ret = _arrayIndexOfMonth(months[m], value);
          if (ret !== -1) {
            return ret;
          }
        }
        return ret;
      };

      _getParseRegExp = function(format, options) {
        // converts a format string into a regular expression with groups that
        // can be used to extract date fields from a date string.
        // check for a cached parse regex.
        var re = {};
		

        // expand single digit formats, then escape regular expression
        //  characters.
        var expFormat = format.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,
          "\\\\$1"),
        regexp = [ "^" ],
        groups = [],
        index = 0,
        quoteCount = 0,
        tokenRegExp = _getTokenRegExp(),
        match;

        // iterate through each date token found.
        while ((match = tokenRegExp.exec(expFormat)) !== null) {
          var preMatch = expFormat.slice(index, match.index);
          index = tokenRegExp.lastIndex;

          // don't replace any matches that occur inside a string literal.
          quoteCount += _appendPreOrPostMatch(preMatch, regexp);
          if (quoteCount % 2) {
            regexp.push(match[0]);
            continue;
          }

          // add a regex group for the token.
          var m = match[ 0 ],
          add;
          switch (m) { 
            //Some locales have month names as alpha-numeric
            case "MMMMM":
            case "MMMM":
            case "MMM":
              add = "(\\D+|\\d\\d?\\D|\\d\\d?)";
              break;
            case "LLLLL":
            case "LLLL":
            case "LLL":
              add = "(\\D+|\\d\\d?\\D|\\d\\d?)";
              break;
            case "EEEEE":
            case "EEEE":
            case "EEE":
            case "EE":
            case "E":
            case "ccccc":
            case "cccc":
            case "ccc":
            case "cc":
            case "c":
            case "GGGGG":
            case "GGGG":
            case "GGG":
            case "GG":
            case "G":
              add = "(\\D+)";
              break;
            case "a":
              add = "(\\D*)";
              break;
            case "yy":
            case "dd":
            case "MM":
            case "LL":
            case "hh":
            case "HH":
            case "KK":
            case "kk":
            case "mm":
            case "ss":
              add = "(\\d\\d?)";
              break;
            case "SS":
            case "S":
              add = "(\\d{1,3})";
              break;
            case "y":
            case "yyyy":
              add = "(\\d{1,4})";
              break;
            case "d":
            case "M":
            case "L":
            case "H":
            case "h":
            case "K":
            case "k":
            case "m":
            case "s":
              add = "(\\d\\d?)";
              break;
            case "zzzz":
            case "zzz":
            case "zz":
            case "z":
              add = "([+-]?\\d{1,4})";
              break;
            case "/":
              add = "(\\/)";
              break;
            default:
              _throwInvalidDateFormat(format, options, m);
          }
          if (add) {
            regexp.push(add);
          }
          groups.push(match[0]);
        }
        _appendPreOrPostMatch(expFormat.slice(index), regexp);
        regexp.push("$");

        // allow whitespace to differ when matching formats.
        var regexpStr = regexp.join("").replace(/\s+/g, "\\s+"),
        parseRegExp = {
          'regExp': regexpStr, 
          'groups': groups
        };

        // cache the regex for this format.
        return re[ format ] = parseRegExp;
      };

      _validateRange = function(name, value, low, high, displayValue,
        displayLow, displayHigh) {
        if(value < low || value > high) { 
          var msg =  displayValue + 
          " is out of range.  Enter a value between " + displayLow +
          " and " + displayHigh + " for " + name; 
          var rangeError = new RangeError(msg);
          var errorInfo = {
            'errorCode' : "datetimeOutOfRange",
            'parameterMap' : {
              'value': displayValue, 
              'minValue': displayLow,
              'maxValue': displayHigh,
              'propertyName': name
            }
          };
          rangeError['errorInfo'] = errorInfo;
          throw rangeError;              
        }
      };
        
      _getTokenIndex = function(arr, token)
      {
        for(var i in arr){
          for (var n in arr[i])
          {
            if(n === token)
              return parseInt(i, 10);
          }         
        }
        return 0;
      };
        
      //time lenient parse
      _parseLenienthms = function(result, timepart, format, localeElements) {
        var mainNode = _getLocaleElementsMainNode(localeElements);
        var calPM = mainNode['dates']['calendars']['gregorian']['dayPeriods']['format']['wide']['pm'];
        //hour, optional minutes and optional seconds
        var timeRegExp = 
        /(\d{1,2})(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,3}))?/g;
        var timeFormatRegExp= /h|H|K|k/g;
        var hour = 0, minute = 0, second = 0, msec=0, idx;
        var match = timeRegExp.exec(timepart);
        if(match[1] !== undefined)
          hour = parseInt(match[1], 10);
        if(match[2] !== undefined)
          minute = parseInt(match[2], 10);
        if(match[3] !== undefined)
          second = parseInt(match[3], 10);
        if(match[4] !== undefined)
          msec = parseInt(match[4], 10);
 
        match =  timeFormatRegExp.exec(format);
        switch(match[0]) {
          case "h":
            // Hour in am/pm (1-12)
            if (hour === 12) hour = 0;
            _validateRange("hour", hour, 0, 11, hour, 1, 12);
            idx = (_toUpper(timepart)).indexOf(_toUpper(calPM));
            if( idx !== -1 && hour < 12)
              hour += 12;
            break;
          case "K":
            // Hour in am/pm (0-11)
            _validateRange("hour", hour, 0, 11, hour, 0, 11);
            idx = (_toUpper(timepart)).indexOf(_toUpper(calPM));
            if( idx !== -1 && hour < 12)
              hour += 12;
            break;
          case "H":
            _validateRange("hour", hour, 0, 23, hour, 0, 23);
            break;
          case "k":
            if (hour === 24) hour = 0;
            _validateRange("hour", hour, 0, 23, hour, 1, 24);
            break;
          default:
            break;
        }
        // Minutes.
        _validateRange("minute", minute, 0, 59, minute, 0, 59);
        // Seconds.
        _validateRange("second", second, 0, 59, second, 0, 59);
        //millisec
        _validateRange("millisec", msec, 0, 999, msec, 0, 999);

        result.setHours(hour, minute, second, msec);
      };
        
      //lenient parse yMd and yMEd patterm. Must have year, moth, 
      //date all numbers. Ex: 5/3/2013
      //weekday is optional. If present it must match date. 
      //Ex:  Tuesday 11/19/2013
      //if year > 2-digits it can be anywhere in the string. 
      //Otherwise assume its position based on pattern
      //if date > 12 it can be anywhere in the string. 
      //Otherwise assume its position based on pattern 
      //separators can be any non digit characters
      _parseLenientyMEd = function(value, format, options, localeElements,
        isDateTime)
        {
        var regExp = /(\d{1,4})\D+?(\d{1,4})\D+?(\d{1,4})/g;
        var match = regExp.exec(value);
        if(match === null) {
          _throwDateFormatMismatch(value, format, 0);
        }
        var tokenIndexes = [{
          'y':format.indexOf("y")
        },{
          'M':format.indexOf("M")
        },{
          'd':format.indexOf("d")
        }];
        tokenIndexes.sort(function(a,b){
          for (var n1 in a)
          {
            break;
          }
          for (var n2 in b)
          {
            break;
          }
          return a[n1]-b[n2];
        });
        var year, month, day, yearIndex, dayIndex, i;
        var foundYear = false, foundDay = false;
        for(i =1; i <= 3; i++)
        {
          var tokenMatch =  match[i];
          //find year if year is yyy|yyyy
          if(tokenMatch.length > 2 || tokenMatch > 31)
          {
            year = tokenMatch;
            foundYear = true;
            yearIndex = i-1;
          }
        }

        if(!foundYear) {
          yearIndex = _getTokenIndex(tokenIndexes, 'y');
          year = match[_getTokenIndex(tokenIndexes, 'y')+1];
        }
        //find day if day value > 12
        for(i = 0; i < 3; i++){ 
          if(i!== yearIndex && match[i+1] > 12) {
            day = match[i+1];
            foundDay = true;
            dayIndex = i;
            break;
          }
        }
        if(!foundDay) {
          if(yearIndex === _getTokenIndex(tokenIndexes, 'd'))
          {
            day = match[_getTokenIndex(tokenIndexes, 'y')+1];
            month = match[_getTokenIndex(tokenIndexes, 'M')+1];
          }
          else if (yearIndex === _getTokenIndex(tokenIndexes, 'M'))
          {
            day = match[_getTokenIndex(tokenIndexes, 'd')+1];
            month = match[_getTokenIndex(tokenIndexes, 'y')+1];   
          }
          else {
            day = match[_getTokenIndex(tokenIndexes, 'd')+1];
            month = match[_getTokenIndex(tokenIndexes, 'M')+1];   
 
          }
        }
        else {
          for(i = 0; i < 3; i++){ 
            if(i!== dayIndex && i !== yearIndex) {
              month = match[i+1];
              break;
            }
          }
          if(month === undefined) {
            month = match[_getTokenIndex(tokenIndexes, 'M')+1];
          }
        }
        month -= 1;
        var daysInMonth = _getDaysInMonth(year, month);
        _validateRange("month", month, 0, 11, month+1, 1, 12);
        _validateRange("day", day, 1, daysInMonth, day, 1, daysInMonth);
        var start2DigitYear = _get2DigitYearStart(options);
        year = _expandYear(start2DigitYear, parseInt(year, 10));
        _validateRange("year", year, 0, 9999, year, 0, 9999);
        var result = 
        {
          'value': new Date(year, month, day),
          'warning' : 'lenient parsing was used'
        };
        if(isDateTime) {
          var timepart = value.substr(regExp.lastIndex +1);
          _parseLenienthms(result['value'], timepart, format, localeElements);
        }
        return result;
      };

      //lenient parse yMMMd and yMMMEd patterns. Must have year, date as numbers 
      //and month name.
      //weekday is optional. If present it must match date.
      // Ex:  Monday Nov, 11 2013
      //weekday and month name can be anywhere in the string.
      //if year > 2-digits it can be anywhere in the string. 
      //Otherwise assume its position based on pattern
      //separators can be any non digit characters
      _parseLenientyMMMEd = function(value, format, options, localeElements,
        isDateTime) {
        value =  _toUpper(value); 
        var mainNode = _getLocaleElementsMainNode(localeElements);
        //locate month name
        var calMonthsFmt = 
        mainNode['dates']['calendars']['gregorian']['months']['format'];
        var calMonthsStandAlone = 
        mainNode['dates']['calendars']['gregorian']['months']['stand-alone'];
        var months =  [
        calMonthsFmt['wide'],
        calMonthsFmt['abbreviated'],
        calMonthsStandAlone['wide'],         
        calMonthsStandAlone['abbreviated']
        ];
        var foundMatch = false;
        var reverseMonth;
        var i, j, mName;
        for (i in months) {
          reverseMonth = [];
          for(j in months[i]) {
            mName = _toUpper( months[i][j]);
            reverseMonth.push({
              'idx':j, 
              'name':mName
            });
          }
          reverseMonth.sort(function(a,b){
            return b['idx'] - a['idx'];
          });
          
          for(j in reverseMonth) {
            mName =  reverseMonth[j]['name'];
            if (value.indexOf(mName) != -1) {
              foundMatch = true;
              value = value.replace(mName, "");
              break;
            }
          }
          if(foundMatch)
            break;
        }
        //There is no month name. Try yMEd lenient parse.
        if(!foundMatch) {
          return _parseLenientyMEd(value, format, options, localeElements,
            isDateTime);
        }
          
        var month = _getMonthIndex(localeElements, mName, 2);          
        _validateRange("month", month, 0, 11, month, 1, 12);

        //locate weekday
        var calDaysFmt = 
        mainNode['dates']['calendars']['gregorian']['days']['format'];
        var calDaysStandAlone = 
        mainNode['dates']['calendars']['gregorian']['days']['stand-alone'];
        var days =  [
        calDaysFmt['wide'],
        calDaysFmt['abbreviated'],
        calDaysStandAlone['wide'],         
        calDaysStandAlone['abbreviated']
        ];
          
        foundMatch = false;
        var dName;
        for (i in days) {
          for(j in days[i]) {
            dName = _toUpper(days[i][j]);
            if (value.indexOf(dName) != -1) {
              foundMatch = true;
              value = value.replace(dName, "");
              break;
            }
          }
          if(foundMatch)
            break;
          dName = null;
        }
   
        //find year and date
        var regExp = /(\d{1,4})\D+?(\d{1,4})/g;
        var match = regExp.exec(value);
        if(match === null) {
          _throwDateFormatMismatch(value, format, 0);
        }
        var tokenIndexes = [{
          'y':format.indexOf("y")
        },{
          'd':format.indexOf("d")
        }];
      
        tokenIndexes.sort(function(a,b){
          for (var n1 in a)
          {
            break;
          }
          for (var n2 in b)
          {
            break;
          }
          return a[n1]-b[n2];
        });
        
        var year, day, yearIndex;
        var foundYear = false;
        for(i =1; i <= 2; i++)
        {
          var tokenMatch =  match[i];
          //find year if year is yyy|yyyy
          if(tokenMatch.length > 2 || tokenMatch > 31)
          {
            year = tokenMatch;
            foundYear = true;
            yearIndex = i-1;
          }
        }
        if(!foundYear) {
          yearIndex = _getTokenIndex(tokenIndexes, 'y');
          year = match[_getTokenIndex(tokenIndexes, 'y')+1];
        } 
        if(yearIndex === _getTokenIndex(tokenIndexes, 'd'))
        {
          day = match[_getTokenIndex(tokenIndexes, 'y')+1];
        }
        else {
          day = match[_getTokenIndex(tokenIndexes, 'd')+1];
        }
          
        var start2DigitYear = _get2DigitYearStart(options);
        year = _expandYear(start2DigitYear, parseInt(year, 10));
        _validateRange("year", year, 0, 9999, year, 0, 9999);
        var parsedDate = new Date(year, month, day);
        if(dName != null) {
          var weekDay = _getDayIndex(localeElements, dName, 0);  
          // day of week does not match date
          if (parsedDate.getDay() !== weekDay) {
            _throwWeekdayMismatch(dName, parsedDate.getDate());
          }
        }
        var daysInMonth = _getDaysInMonth(year, month);
        _validateRange("day", day, 1, daysInMonth, day, 1, daysInMonth);
        var result = 
        {
          'value': parsedDate,
          'warning' : 'lenient parsing was used'
        };
        if(isDateTime) {
          var timepart = value.substr(regExp.lastIndex +1);
          _parseLenienthms(result['value'], timepart, format, localeElements);
        }
        return result;
      };
      
      _parseLenient = function(value, format, options, localeElements) {
        var dtStyle = _dateTimeStyle(options, "OraDateTimeConverter.parse");
        switch (dtStyle) {
          //date style
          case 0 :
            return _parseLenientyMMMEd(value, format, options, localeElements,
              false);
            break
          //time style
          case 1 :
            var d = new Date();
            _parseLenienthms(d, value, format, localeElements);
            var result = 
            {
              'value': d,
              'warning' : 'lenient parsing was used'
            };
            return result;
            break;
          //date-time style
          case 2 :
            return _parseLenientyMMMEd(value, format, options, localeElements,
              true);
            break;
          default:
            break;
        }
        return null;
      };
         
      _parseExact = function(value, format, options, localeElements) {
        var mainNode = _getLocaleElementsMainNode(localeElements);
        // try to parse the date string by matching against the format string
        // while using the specified culture for date field names.
        value = _trim(value);
        // convert date formats into regular expressions with groupings.
        // use the regexp to determine the input format and extract the date
        //  fields.
        var parseInfo = _getParseRegExp(format, options),
        match = new RegExp(parseInfo['regExp']).exec(value);
        var monthsFormat = 
        mainNode['dates']['calendars']['gregorian']['months']['format'];
        var monthsStandalone = 
        mainNode['dates']['calendars']['gregorian']['months']['stand-alone'];
        var daysFormat = 
        mainNode['dates']['calendars']['gregorian']['days']['format'];
        var daysStandAlone = 
        mainNode['dates']['calendars']['gregorian']['days']['stand-alone'];
        var startName, endName;
        if (match === null) {
          return _parseLenient(value, format, options, localeElements);
        }

        // found a date format that matches the input.
        var groups = parseInfo['groups'],
        year = null, month = null, date = null, weekDay = null,
        hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
        pmHour = false, weekDayName,
        calPM = mainNode['dates']['calendars']['gregorian']['dayPeriods']['format']['wide']['pm'];
        var start2DigitYear = _get2DigitYearStart(options);
        // iterate the format groups to extract and set the date fields.
        for (var j = 0, jl = groups.length; j < jl; j++) {
          var matchGroup = match[ j + 1 ];
          if (matchGroup) {
            var current = groups[ j ],
            clength = current.length,
            matchInt = parseInt(matchGroup, 10);
            switch (current) {
              case "dd":
              case "d":
                // Day of month.
                date = matchInt;
                //try leneient parse for date style only
                if(date > 31)                    
                  return _parseLenient(value, format, options, localeElements)
                break;
              case "MMM":
                month = _getMonthIndex(localeElements, matchGroup, 0);
                startName = monthsFormat['abbreviated']['1'];
                endName = monthsFormat['abbreviated']['12'];
                _validateRange("month name", month, 0, 11, matchGroup, 
                  startName, endName);
                break;
              case "MMMM":
                month = _getMonthIndex(localeElements, matchGroup, 0);
                startName = monthsFormat['wide']['1'];
                endName = monthsFormat['wide']['12'];
                _validateRange("month name", month, 0, 11, matchGroup, 
                  startName, endName);
                break;
              case "MMMMM":
                month = _getMonthIndex(localeElements, matchGroup, 0);
                startName = monthsFormat['abbreviated']['1'];
                endName = monthsFormat['abbreviated']['12'];
                _validateRange("month name", month, 0, 11, matchGroup, 
                  startName, endName);
                break;
              case "LLL":
                month = _getMonthIndex(localeElements, matchGroup, 1);
                startName = monthsStandalone['abbreviated']['1'];
                endName = monthsStandalone['abbreviated']['12'];
                _validateRange("month name", month, 0, 11, matchGroup, 
                  startName, endName);
                break;
              case "LLLL":
                month = _getMonthIndex(localeElements, matchGroup, 1);
                startName = monthsStandalone['wide']['1'];
                endName = monthsStandalone['wide']['12'];
                _validateRange("month name", month, 0, 11, matchGroup, 
                  startName, endName);
                break;
              case "LLLLL":
                month = _getMonthIndex(localeElements, matchGroup, 1);
                startName = monthsStandalone['abbreviated']['1'];
                endName = monthsStandalone['abbreviated']['12'];
                _validateRange("month name", month, 0, 11, matchGroup, 
                  startName, endName);
                break;
              case "M":
              case "MM":
              case "L":
              case "LL":
                // Month.
                month = matchInt - 1;
                //try leneient parse for date style only
                if(month > 11)
                  return _parseLenient(value, format, options, localeElements)
                break;
              case "y":
              case "yy":
              case "yyyy":
                year = _expandYear(start2DigitYear, matchInt);
                _validateRange("year", year, 0, 9999, year, 0, 9999);
                break;
              case "h":
              case "hh":
                // Hour in am/pm (1-12)
                hour = matchInt;
                if (hour === 12) hour = 0;
                _validateRange("hour", hour, 0, 11, matchInt, 1, 12);
                break;
              case "K":
              case "KK":
                // Hour in am/pm (0-11)
                hour = matchInt;
                _validateRange("hour", hour, 0, 11, matchInt, 0, 11);
                break;
              case "H":
              case "HH":
                hour = matchInt;
                _validateRange("hour", hour, 0, 23, matchInt, 0, 23);
                break;
              case "k":
              case "kk":
                hour = matchInt;
                if (hour === 24) hour = 0;
                _validateRange("hour", hour, 0, 23, matchInt, 1, 24);
                break;
              case "m":
              case "mm":
                // Minutes.
                min = matchInt;
                _validateRange("minute", min, 0, 59, matchInt, 0, 59);
                break;
              case "s":
              case "ss":
                // Seconds.
                sec = matchInt;
                _validateRange("second", sec, 0, 59, matchInt, 0, 59);
                break;
              case "a":
                pmHour = (_toUpper(matchGroup) === _toUpper(calPM)) ;
                break;
              case "S":
                // Milliseconds.
                msec = matchInt * Math.pow(10, 3 - clength);
                _validateRange("millisec", msec, 0, 999, matchInt, 0, 999);
                break;
              case "E":
              case "EE":
              case "EEE":
                // Day of week.
                weekDayName = matchGroup;
                weekDay = _getDayIndex(localeElements, matchGroup, 0);
                startName = daysFormat['abbreviated']['sun'];
                endName = daysFormat['abbreviated']['sat'];
                _validateRange("weekday", weekDay, 0, 6, matchGroup, 
                  startName, endName);
                break;  
              case "c":
              case "cc":
              case "ccc":
                // Day of week.
                weekDayName = matchGroup;
                weekDay = _getDayIndex(localeElements, matchGroup, 1);
                startName = daysStandAlone['abbreviated']['sun'];
                endName = daysStandAlone['abbreviated']['sat'];
                _validateRange("weekday", weekDay, 0, 6, matchGroup, 
                  startName, endName);
                break;  
              case "EEEE":
                // Day of week.
                weekDayName = matchGroup;
                weekDay = _getDayIndex(localeElements, matchGroup, 0);
                startName = daysFormat['wide']['sun'];
                endName = daysFormat['wide']['sat'];
                _validateRange("weekday", weekDay, 0, 6, matchGroup, 
                  startName, endName);
                break;
              case "EEEEE":
                // Day of week.
                weekDayName = matchGroup;
                weekDay = _getDayIndex(localeElements, matchGroup, 0);
                startName = daysFormat['abbreviated']['sun'];
                endName = daysFormat['abbreviated']['sat'];
                _validateRange("weekday", weekDay, 0, 6, matchGroup, 
                  startName, endName);
                break; 
              case "cccc":
                // Day of week.
                weekDayName = matchGroup;
                weekDay = _getDayIndex(localeElements, matchGroup, 1);
                startName = daysStandAlone['wide']['sun'];
                endName = daysStandAlone['wide']['sat'];
                _validateRange("weekday", weekDay, 0, 6, matchGroup, 
                  startName, endName);
                break;
              case "ccccc":
                // Day of week.
                weekDayName = matchGroup;
                weekDay = _getDayIndex(localeElements, matchGroup, 1);
                startName = daysStandAlone['abbreviated']['sun'];
                endName = daysStandAlone['abbreviated']['sat'];
                _validateRange("weekday", weekDay, 0, 6, matchGroup, 
                  startName, endName);
                break;
              case "z":
              case "zz":
              case "zzz":
              case "zzzz":
                // Time zone offset in +/-hhmm | +/-hmm.
                hourOffset = (matchInt/100) << 0;
                _validateRange("TZ Offset", hourOffset, -12, 13, 
                  matchInt, -12, 13);
                var minOffset = Math.abs(matchInt % 100);
                _validateRange("TZ Offset", minOffset, 0, 59, minOffset, 0, 
                  59);
                tzMinOffset  = (hourOffset * 60)  + 
                (_startsWith(matchGroup, "-") ? -minOffset : minOffset);
                break;
            }
          }
        }
        var parsedDate = new Date(), defaultYear;
        defaultYear =  parsedDate.getFullYear();
        if (year === null) {
          year = defaultYear;
        }
        // if day and month are unspecified,the defaults are current 
        // day and month.
        if (month === null && date === null) {
          month = parsedDate.getMonth();
          date = parsedDate.getDate();
        }
        // if day is unspecified, default 1st day of month.
        else if (date === null) {
          date = 1;
        }
        
        //validate day range, depending on the month and year
        var daysInMonth = _getDaysInMonth(year, month);
        _validateRange("day", date, 1, daysInMonth, date, 1, daysInMonth);
        // have to set year, month and date together to avoid overflow based 
        // on current date.
        parsedDate.setFullYear(year, month, date);

        // day of week does not match date
        if (weekDay !== null && parsedDate.getDay() !== weekDay) {
          _throwWeekdayMismatch(weekDayName, parsedDate.getDate());
        }
        // if pm designator token was found make sure the hours fit the 
        // 24-hour clock.
        if (pmHour && hour < 12) {
          hour += 12;
        }
        parsedDate.setHours(hour, min, sec, msec);
        if (tzMinOffset !== null) {
          // adjust timezone to utc before applying local offset.
          var adjustedMin = parsedDate.getMinutes() - (tzMinOffset + 
            parsedDate.getTimezoneOffset());
          parsedDate.setHours(parsedDate.getHours() + 
            ((adjustedMin / 60) << 0), adjustedMin % 60);
        }
        var result =
        {
          'value': parsedDate
        };
        return result;
      };
    }()); 
    
    _getResolvedOptionsFromPattern = function(locale, numberingSystemKey, 
      pattern) {
      // expand single digit formats, then escape regular expression 
      // characters.
      var expFormat = pattern.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, 
        "\\\\$1"),
      regexp = [ "^" ],
      quoteCount = 0,
      index=0,
      tokenRegExp = _getTokenRegExp(),
      match;
      var result = {
        'locale': locale,
        'numberingSystem': numberingSystemKey,
        'calendar': 'gregorian'
      };
      // iterate through each date token found.
      while ((match = tokenRegExp.exec(expFormat)) !== null) {
        var preMatch = expFormat.slice(index, match.index);
        index = tokenRegExp.lastIndex;

        // skip matches that occur inside a string literal.
        quoteCount += _appendPreOrPostMatch(preMatch, regexp);
        if (quoteCount % 2) {
          continue;
        }

        // add a regex group for the token.
        var m = match[ 0 ];
        switch (m) {
          case "EEEEE":
          case "ccccc":
            result['weekday'] = 'narrow';
            break
          case "EEEE":
          case "cccc":
            result['weekday'] = 'long';
            break;
          case "EEE":
          case "EE":
          case "E":
          case "ccc":
          case "cc":
          case "c":
            result['weekday'] = 'short';
            break;
          case "MMMMM":
          case "LLLLL":
            result['month'] = 'narrow';
            break;
          case "MMMM":
          case "LLLL":
            result['month'] = 'long';
            break;
          case "MMM":
          case "LLL":
            result['month'] = 'short';
            break;
          case "MM":
          case "LL":
            result['month'] = '2-digit';
            break;
          case "M":
          case "L":
            result['month'] = 'numeric';
            break;
          case "a":
            result['hour12'] = true;
            break;
          case "SS":
          case "S":
            result['millisecond'] = 'numeric';
            break;
          case "dd":
            result['day'] = '2-digit';
            break;
          case "d":
            result['day'] = 'numeric';
            break;
          case "yyyy":
          case "y":
            result['year'] = 'numeric';
            break;
          case "yy":
            result['year'] = '2-digit';
            break;
          case "HH":
          case "kk":
            result['hour'] = '2-digit';
            result['hour12'] = false;
            break;
          case "H":
          case "k":
            result['hour'] = 'numeric';
            result['hour12'] = false;
            break;
          case "hh":
          case "KK":
            result['hour'] = '2-digit';
            result['hour12'] = true;
            break;        
          case "h":
          case "K":
            result['hour'] = 'numeric';
            result['hour12'] = true;
            break;
          case "mm":
            result['minute'] = '2-digit';
            break;
          case "m":
            result['minute'] = 'numeric';
            break;
          case "ss":
            result['second'] = '2-digit';
            break;
          case "s":
            result['second'] = 'numeric';
            break;
          case "/":
          case "zzzz":
          case "zzzz":
          case "zz":
          case "z":
            break;
          default:
            _throwInvalidDateFormat(pattern, result, m);
            break;
        }
      }
      return result;
    };
  
    //test if the pattern is date, time or date-time
    //0: date, 1:time, 2:date-time
    _dateTimeStyleFromPattern = function(pattern) {
      var result = _getResolvedOptionsFromPattern('', '', pattern);
      var isDate = (result['year'] !== undefined || result['month'] !== 
        undefined ||
        result['weekday'] !== undefined || result['day'] !== undefined);
      var isTime = (result['hour'] !== undefined || result['minute'] !== 
        undefined ||
        result['second'] !== undefined);
      if(isDate && isTime)
        return 2;
      else if (isTime)
        return 1;
      else
        return 0;    
    };
      
    //test if the pattern/options is date, time or date-time
    //0: date, 1:time, 2:date-time
    _dateTimeStyle = function(options, caller) {
      //try pattern
      if(options['pattern'] !== undefined ) {
        return _dateTimeStyleFromPattern(options['pattern']);     
      }
        
      //try ecma options
      var getOption = _getGetOption(options, caller);
      var isTime = (getOption('hour', 'string', ['2-digit', 'numeric']) !== 
        undefined ||
        getOption('minute', 'string', ['2-digit', 'numeric']) !== undefined ||
        getOption('second', 'string', ['2-digit', 'numeric']) !== undefined);
      var isDate = (getOption('year', 'string', ['2-digit', 'numeric']) !== 
        undefined ||
        getOption('month', 'string', 
          ['2-digit', 'numeric', 'narrow', 'short', 'long']) !== undefined ||
        getOption('day', 'string', ['2-digit', 'numeric']) !== undefined ||
        getOption('weekday', 'string', ['narrow', 'short', 'long']) !== 
        undefined);
      if(isDate && isTime)
        return 2;
      else if (isTime)
        return 1;
      else if (isDate)
        return 0;                
        
      //try predefined style
      var option = getOption('formatType', 'string', 
        ['date', 'time', 'datetime'], 'date');
      if(option === 'datetime')
        return 2;
      else if (option === 'time')
        return 1;
      return 0;
    };
  
    _parseImpl = function(str, localeElements, options, locale) {
      var numberingSystemKey =  _getLanguageExtension(locale, "nu");
      if(numeringSystems[numberingSystemKey] === undefined)
        numberingSystemKey = 'latn';         
      if(numberingSystemKey !== 'latn') {
        var idx;
        var latnStr = [];
        for(idx = 0; idx < str.length; idx++)
        {
          var pos = numeringSystems[numberingSystemKey].indexOf(str[idx]);
          if(pos != -1)
            latnStr.push(pos);
          else
            latnStr.push(str[idx]);       
        }
        str =  latnStr.join("");
      }
      if(arguments.length <= 2 || options === undefined)
      {
        //default is yMd
        options = {
          'year': 'numeric', 
          'month': 'numeric', 
          'day': 'numeric'
        };
      }
      var formats = options['pattern'] || _expandFormat(options, localeElements, 
        "OraDateTimeConverter.parse");
      var date = _parseExact(str, formats, options, localeElements);
      return date;
    };
      
    function _init() {    
      return {
        /**
       * Format a date.
       * @memberOf OraDateTimeConverter
       * @param {Date} value - Date object to be formatted.
       * @param {Object} localeElements - the instance of LocaleElements bundle.
       * @param {Object=} options - Containing the following properties:<br>
       * - <b>weekday.</b> Allowed values: "narrow", "short", "long".<br>
       * - <b>era.</b> Allowed values: "narrow", "short", "long".<br>
       * - <b>year.</b> Allowed values:"2-digit", "numeric".<br>
       * - <b>month.</b> Allowed values: "2-digit", "numeric", "narrow", 
       * "short", "long".<br>
       * - <b>day.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>hour.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>minute.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>second.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>timeZoneName.</b> Will be ignored in phase1. We do not support it 
       * yet.<br>
       * - <b>hour12.</b> is a Boolean value indicating whether 12-hour format 
       * (true) or 24-hour format (false) should be used. It is only relevant 
       * when hour is also present.<br>
       * - <b>formatMatcher.</b> optional, specifies the algorithm to be used 
       * for looking up the date format based on the options. Allowed values: 
       * "basic", "munger". The default is munger.
       * - <b>pattern.</b> custom String pattern as defined by Unicode CLDR.<br>
       * - <b>formatType.</b> a predefined formatting type. Allowed values: 
       * "date", "time", "datetime".
       * - <b>dateFormat.</b> optional, specifies the date format field. 
       * Allowed values: "short", "medium", "long", "full". It is only 
       * considered when formatType is present. The default value 
       * is "short".<br>
       * - <b>timeFormat.</b> optional, specifies the time format field. 
       * Allowed values: "short", "medium", "long", "full". It is only 
       * considered when formatType is present. The default value 
       * is "short".<br><br>
       * The order of precedence is the following:<br>
       * 1. pattern.<br>
       * 2. ECMA options.<br>
       * 3. formatType.<br>
       * If options is ommitted, the default will be the following object:<br>
       * {<br>
       * year:"numeric",<br> 
       * month:"numeric",<br> 
       * day:"numeric"<br>
       * };
       * @param {string=} locale - A BCP47 compliant language tag. it is only 
       * used to extract the unicode extension keys. 
       * @return {string|null} formatted date.
       * @throws {RangeError} If a propery value of the options parameter is 
       * out of range.
       * @throws {SyntaxError} If an Unexpected token is encountered in the 
       * pattern. 
       */ 
        format : function(value, localeElements, options, locale) {
          if(typeof value === "number") {
            value = new Date(value);            
          }
          else if(typeof value === "string") {
            if(_trim(value) === '')
              return null;
            value = _parseImpl(value, localeElements, options, locale);
            value = value['value'];
          }
          if(value.toString() === 'Invalid Date')
            return 'Invalid Date';
          if(arguments.length <=2 || options === undefined)
          {
            //default is yMd
            options = {
              'year': 'numeric', 
              'month': 'numeric', 
              'day': 'numeric'
            };
          }
          var ret = _formatImpl(value, localeElements, options);
          var numberingSystemKey =  _getLanguageExtension(locale, "nu");
          if(numeringSystems[numberingSystemKey] === undefined)
            numberingSystemKey = 'latn';           
          if(numberingSystemKey !== 'latn') {
            var idx;
            var nativeRet = [];
            for(idx = 0; idx < ret.length; idx++)
            {
              if(ret[idx] >= '0' && ret[idx] <= '9')
                nativeRet.push(numeringSystems[numberingSystemKey][ret[idx]]);
              else nativeRet.push(ret[idx]);
        
            }
            return nativeRet.join("");
          }
          return ret;
        },
      
        /**
       * Format a relative date/time
       * @memberOf OraDateTimeConverter
       * @param {Date} value - Date object to be formatted.
       * @param {Object} localeElements - the instance of LocaleElements bundle.
       * @param {Object} options - Containing the following properties:
       * formatUsing. Allowed values: "displayName"
       * dateField. Allowed values: "day", "week", "month", "year"
       * @return {string|null} relative date. null if the value falls out side 
       * the supported relative range.
       */
        formatRelative : function(value, localeElements, options) {
          return _formatRelativeImpl(value, localeElements, options);
        },


        /**
       * Parse a date.
       * @memberOf OraDateTimeConverter
       * @param {string} str - String to be parsed.
       * @param {Object} localeElements - The instance of LocaleElements bundle
       * @param {Object=} options - Containing the following properties:<br>
       * - <b>weekday.</b> Allowed values: "narrow", "short", "long".<br>
       * - <b>era.</b> Allowed values: "narrow", "short", "long".<br>
       * - <b>year.</b> Allowed values:"2-digit", "numeric".<br>
       * - <b>month.</b> Allowed values: "2-digit", "numeric", "narrow", 
       * "short", "long".<br>
       * - <b>day.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>hour.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>minute.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>second.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>timeZoneNmae.</b> Will be ignored in phase1. We do not support it
       *  yet.<br>
       * - <b>hour12.</b> is a Boolean value indicating whether 12-hour format 
       * (true) or 24-hour format (false) should be used. It is only relevant 
       * when hour is also present.<br>
       * - <b>formatMatcher.</b> optional, specifies the algorithm to be used 
       * for looking up the date format based on the options. Allowed values: 
       * "basic", "munger". The default is munger.
       * - <b>pattern.</b> custom String pattern as defined by Unicode CLDR.<br>
       * - <b>two-digit-year-start.</b> the 100-year period 2-digit year. 
       * During parsing, two digit years will be placed in the range 
       * two-digit-year-start to two-digit-year-start + 100 years. 
       * The default is 1950.<br>
       * - <b>formatType.</b> a predefined formatting type. Allowed values: 
       * "date", "time", "datetime".
       * - <b>dateFormat.</b> optional, specifies the date format. Allowed 
       * values: "short", "medium", "long", "full". It is only considered when 
       * formatType is present. The default value is "short".<br>
       * - <b>timeFormat.</b> optional, specifies the time format. Allowed 
       * values: "short", "medium", "long", "full". It is only considered when 
       * formatType is present. The default value is "short".<br><br>
       * The order of precedence is the following:<br>
       * 1. pattern.<br>
       * 2. ECMA options.<br>
       * 3. formatType.<br>          
       * If options is ommitted, the default will be the following object:<br>
       * {<br>
       * year:"numeric",<br> 
       * month:"numeric",<br> 
       * day:"numeric"<br>
       * };
       * @param {string=} locale - A BCP47 compliant language tag. it is only 
       * used to extract the unicode extension keys. 
       * @return {Date} a date object parsed from the string. In case of error, 
       * returns null.
       * @throws {RangeError} If a property value of the options parameter is 
       * out of range.
       * @throws {SyntaxError} If an Unexpected token is encountered in the 
       * pattern.
       * @throws {Error} If the <i>str</i> parameter does not match the format 
       * pattern.
       * @throws {RangeError} if one of the date fields is out of range.
       */ 
        parse : function(str, localeElements, options, locale) {
          return _parseImpl(str, localeElements, options, locale);
        },
      
        /**
       * Resolve options.
       * Returns a new object with properties reflecting the date and time 
       * formatting options computed based on the options parameter. 
       * If the options parameter is ommitted, the following object will be 
       * returned:<br>
       * {<br>
       * calendar: "gregorian"<br>
       * numberingSystem: "latn"<br>
       * locale: &lt;locale parameter&gt;,<br>
       * day: "numeric",<br>
       * month: "numeric",<br>
       * year: "numeric"<br>
       * };
       * @memberOf OraDateTimeConverter
       * @param {Object} localeElements - The instance of LocaleElements bundle                           
       * @param {Object=} options - Containing the following properties:<br>
       * - <b>calendar.</b> The calendar system.<br>
       * - <b>weekday.</b> Allowed values: "narrow", "short", "long".<br>
       * - <b>era.</b> Allowed values: "narrow", "short", "long".<br>
       * - <b>year.</b> Allowed values:"2-digit", "numeric".<br>
       * - <b>month.</b> Allowed values: "2-digit", "numeric", "narrow", 
       * "short", "long".<br>
       * - <b>day.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>hour.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>minute.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>second.</b> Allowed values: "2-digit", "numeric".<br>
       * - <b>timeZoneName.</b> Will be ignored in phase1. We do not support 
       * it yet.<br>
       * - <b>hour12.</b> is a Boolean value indicating whether 12-hour format 
       * (true) or 24-hour format (false) should be used. It is only relevant 
       * when hour is also present.<br>
       * - <b>formatMatcher.</b> optional, specifies the algorithm to be used 
       * for looking up the date format based on the options. Allowed values: 
       * "basic", "munger". The default is munger.
       * - <b>pattern.</b> custom String pattern as defined by Unicode CLDR. 
       * Will override above options when present.<br>
       * - <b>two-digit-year-start.</b> the 100-year period 2-digit year. 
       * During parsing, two digit years will be placed in the range 
       * two-digit-year-start to two-digit-year-start + 100 years. 
       * The default is 1950.<br>
       * - <b>formatType.</b> predefined format type.  Allowed values: 
       * "datetime", "date", "time"<br>
       * - <b>dateFormat.</b> format of date field.  Allowed values: "short", 
       * "medium", "long", "full". It is only relevant when formatType is also 
       * present<br>
       * - <b>timeFormat.</b> format of time field.  Allowed values: "short", 
       * "medium", "long", "full". It is only relevant when formatType is also 
       * present<br>
       * @param {string=} locale - A BCP47 compliant language tag. it is only 
       * used to extract the unicode extension keys.
       * @return {Object} Resolved options object.
       * @throws {RangeError} If a property value of the options parameter is 
       * out of range.
       */
           
        resolvedOptions : function(localeElements, options, locale){
          if(arguments.length < 3 || locale === undefined) {
            locale = _getLocaleElementsMainNodeKey(localeElements);
          }
          if(arguments.length < 2 || options === undefined)
          {
            //default is yMd
            options = {
              'year': 'numeric', 
              'month': 'numeric', 
              'day': 'numeric'
            };
          }
          var ecma = false;
          var result;
          var numberingSystemKey =  _getLanguageExtension(locale, "nu");
          if(numeringSystems[numberingSystemKey] === undefined)
            numberingSystemKey = 'latn';
          if(options !== undefined && options['pattern'] !== undefined ) {
            result = _getResolvedOptionsFromPattern(locale, numberingSystemKey, 
              options['pattern']);
            result['pattern'] = options['pattern'];
            return result;
          }
          if(options !== undefined) {
            result = {
              'locale': locale,
              'numberingSystem': numberingSystemKey,
              'calendar': 'gregorian'
            };
            var count = 0;
            for(count in options){
              count++;
            }
            if(count == 0) {            
              result['year']= 'numeric'; 
              result['month'] = 'numeric'; 
              result['day']=  'numeric';
              return result;
            }
            var getOption = _getGetOption(options, 
              "OraDateTimeConverter.resolvedOptions");
            var option = getOption('year',  'string', ['2-digit', 'numeric']);
            if(option !== undefined) {
              result['year'] = option;
              ecma = true;
            }
            option = getOption('era', 'string', ['narrow', 'short', 'long']);
            if(option !== undefined) {
              result['era'] = option;
              ecma = true;
            }
            option = getOption('month', 'string', ['2-digit', 'numeric', 
              'narrow', 'short', 'long']);
            if(option !== undefined) {
              result['month'] = option;
              ecma = true;
            }
            option = getOption('day', 'string', ['2-digit', 'numeric']);
            if(option !== undefined) {
              result['day'] = option;
              ecma = true;
            }
            option = getOption('weekday', 'string', ['narrow', 'short', 
              'long']);
            if(option !== undefined) {
              result['weekday'] = option;
              ecma = true;
            }           
            option = getOption('hour', 'string', ['2-digit', 'numeric']);
            if(option !== undefined) {
              result['hour'] = option;
              ecma = true;
              option = getOption('hour12', 'boolean', [true, false]);
              if(option === undefined)
                option = _isHour12(localeElements);
              result['hour12'] = option;
            }
            option = getOption('minute', 'string', ['2-digit', 'numeric']);
            if(option !== undefined) {
              result['minute'] = option;
              ecma = true;
            }
            option = getOption('second', 'string', ['2-digit', 'numeric']);
            if(option !== undefined) {
              result['second'] = option;
              ecma = true;
            }
            result['two-digit-year-start'] = _get2DigitYearStart(options);
            if(!ecma) {
              //var format = _expandPredefinedStylesFormat(options, 
                //localeElements, OraDateTimeConverter.resolvedOptions);
              //result = _getResolvedOptionsFromPattern(locale, 
                //numberingSystemKey, format);
              var fmtType = getOption('formatType', 'string', 
                ['date', 'time', 'datetime'], 'date');
              var dStyle = getOption('dateFormat', 'string', 
                ['short', 'medium', 'long', 'full'], 'short');
              var tStyle = getOption('timeFormat', 'string', 
                ['short', 'medium', 'long', 'full'], 'short');
              result['formatType'] = fmtType;
              result['dateFormat'] = dStyle;
              result['timeFormat'] = tStyle;
              return result;
            }
            result['patternFromOptions'] = _expandFormat(options, 
              localeElements, "OraDateTimeConverter.resolvedOptions");
            return result;
          }
          var defaultOptions = {
            'year': 'numeric', 
            'month': 'numeric', 
            'day': 'numeric'
          };
          var patternFromOptions = _expandFormat(defaultOptions,
            localeElements, "OraDateTimeConverter.resolvedOptions");
          return {
            'calendar': 'gregorian',
            'locale': locale,
            'numberingSystem': numberingSystemKey,
            'year': 'numeric', 
            'month': 'numeric', 
            'day': 'numeric',
            'patternFromOptions': patternFromOptions
          };
        }
      };
    }
   
    return {
      /**
     * getInstance.
     * Returns the singleton instance of OraDateTimeConverter class.  
     * @memberOf OraDateTimeConverter
     * @return {Object} The singleton OraDateTimeConverter instance.
     */
      getInstance: function () {	 
        if ( !instance ) {
          instance = _init();
        }	 
        return instance;
      }	 
    };
  }());
}());
/**
 * @export
 * Placeholder here as closure compiler objects to export annotation outside of top level
 */

/**
 * The ojvalidation module.
 * @name oj.Validation
 * @class 
 * @export
 */
oj.Validation = {};

/**
 * Internal properties to hold all factory provider callbacks or instances by name
 * @private
 */
oj.Validation._converterFactories = {}; oj.Validation._validatorFactories = {};

/**
 * Internal properties to hold the default factory instances.
 * @private
 */
oj.Validation._defaultConverterFactories = {}; oj.Validation._defaultValidatorFactories = {};

/**
 * Internal property that identifies the type that is the contract for conveters and validators.
 * @private
 */
oj.Validation._CONTRACTS = {'converter' : {name: "oj.ConverterFactory",  type: oj.ConverterFactory},
                            'validator': {name: "oj.ValidatorFactory", type: oj.ValidatorFactory}};

/**
 * Module method to register and retrieve converter factory instances by name. 
 * When passed only the name, an existing factory (registered for the name) is returned. Callers can 
 * expect to get back the default 'number' and 'datetime' converters. 
 * When passed two arguments, a new factory for the name is registered. If the name already exists 
 * the new instance replaces the old one. 
 * 
 * @param {string} type a case insensitive name of the converter factory. 
 * @param {Object=} instance the instance of the factory that implements the contract for 
 * oj.ConverterFactory.
 * 
 * @export
 */
oj.Validation.converterFactory = function (type, instance)
{
  var retValue;
  if (type && !instance)
  {
    // getter
    retValue = oj.Validation._getFactory(type, oj.Validation._converterFactories);
  }
  else if (type && instance)
  {
    // setter
    retValue = oj.Validation._registerFactory(type, 
                                              instance, 
                                              oj.Validation._converterFactories,
                                              oj.Validation._CONTRACTS['converter']);
  }
  
  return retValue;
};

/**
 * Module method to register and retrieve validator factory instances by name. 
 * When passed only the name, an existing factory (registered for the name) is returned. 
 * When passed two arguments, a new factory for the name is registered. If the name already exists 
 * the new instance replaces the old one. 
 * 
 * @param {string} type a case insensitive name of the validator factory. 
 * @param {Object=} instance the instance of the factory that implements the contract for 
 * oj.ValidatorFactory.
 * 
 * @export
 */
oj.Validation.validatorFactory = function (type, instance)
{
  var retValue;
  if (type && !instance)
  {
    // getter
    retValue = oj.Validation._getFactory(type, oj.Validation._validatorFactories);
  }
  else if (type && instance)
  {
    // setter
    retValue = oj.Validation._registerFactory(type, 
                                              instance, 
                                              oj.Validation._validatorFactories, 
                                              oj.Validation._CONTRACTS['validator']);
  }
  
  return retValue;
};

/**
 * Returns the default converter factory instances for the supported types as defined by the 
 * oj.ConverterFactory.
 * 
 * @param {string} type The default converter factory for the type. Supported types are 'number' and 
 * 'datetime'
 * @return {Object} an instance of oj.ConverterFactory or null if an unknown type is requested.
 * @export
 */
oj.Validation.getDefaultConverterFactory = function (type)
{
  return oj.Validation._getFactory(type, oj.Validation._defaultConverterFactories);
};

/**
 * Returns the default validator factory instance for the requested types as defined by the 
 * oj.ValidatorFactory.
 * 
 * @param {string} type The default converter factory for the type. Supported types are 'number' and 
 * 'datetime'
 * @return {Object} an instance of oj.ConverterFactory or null if an unknown type is requested.
 * @export
 */
oj.Validation.getDefaultValidatorFactory = function (type)
{
  return oj.Validation._getFactory(type, oj.Validation._defaultValidatorFactories);
};

// PACKAGE PRIVATE METHODS
/**
 * Called only by internal jet converter factory implementations.
 * 
 * @param {string} name
 * @param {Object} instance
 * @private
 */
oj.Validation.__registerDefaultConverterFactory = function (name, instance)
{
  // save to both factories
  var contractDef = oj.Validation._CONTRACTS['converter'];
  oj.Validation._registerFactory (name, instance, oj.Validation._defaultConverterFactories, contractDef);
  oj.Validation._registerFactory(name, instance, oj.Validation._converterFactories, contractDef);
};

/**
 * Called only by internal jet validator factory implementations.
 * 
 * @param {string} name of the validator factory
 * @param {Object} instance of the validator factory that creates instances of the validator
 * @private
 */
oj.Validation.__registerDefaultValidatorFactory = function (name, instance)
{
  // save to both factories
  var contractDef = oj.Validation._CONTRACTS['validator'];
  oj.Validation._registerFactory (name, instance, oj.Validation._defaultValidatorFactories, contractDef);
  oj.Validation._registerFactory(name, instance, oj.Validation._validatorFactories, contractDef);
};


/**
 * Checks that the instance implements the interface type. If it doesn't it throws an error.
 * @param {Object} instance
 * @param {Object} type
 * @param {string} typeName 
 * @throws {Error} if instance does not implement the methods defined on type.  
 * @private
 */
oj.Validation._doImplementsCheck = function (instance, type, typeName)
{
  if (type)
  {
    // Check that instance duck types providerType
    if (!oj.Validation._quacksLike(instance, type))
    {
      throw new Error("Factory instance does not implement the methods expected by the factory of type " + typeName);
    }
  }
};

/**
 * Retrieves the converter factory by name from the provided factories.
 * @private
 */
oj.Validation._getFactory = function(name, factories)
{
  oj.Assert.assertString(name);
  var cachedInstance = null;
  
  if (name)
  {
    name = name.toLowerCase();

    // getter called to retrieve the factory instance 
    var providerProps = factories[name] || {}; 
    cachedInstance = providerProps['instance'] || null;
  }
  // TODO: log a warning that name is null
  return cachedInstance;
};

/**
 * Tests whether an object 'quacks like a duck'. Returns `true` if the thingie has all of the 
 * methods of the second, parameter 'duck'. Returns `false` otherwise. 
 *
 * @param {Object} thingie the object to test.
 * @param {Object} duck The archetypal object, or 'duck', that the test is against.
 * @private
*/
oj.Validation._quacksLike = function(thingie, duck) 
{
  var valid = true, property;

  oj.Assert.assertObject(thingie);
  oj.Assert.assertObject(duck);

  for (property in duck) 
  {
    // Ensure that thingie defines the same functions as duck. We don't care about other properties
    if (duck.hasOwnProperty(property)) 
    {
      if (typeof duck[property] === "function" && 
              !thingie[property] && typeof thingie[property] !== "function") 
      {
        valid = false;
        break;
      }
    }
  }
  
  return valid;
};

/**
 * Registers the factory instance by the name, storing it into the factories object, after ensruing 
 * that the instance duck types the specified contract.
 * 
 * @private
 */
oj.Validation._registerFactory = function(name, instance, factories, contractDef)
{
  oj.Assert.assertString(name);
  oj.Assert.assertObject(instance);

  if (name)
  {
    // set new provider factory function clearing out the previously stored instance
    var props = {};
    props['instance'] = instance;
    oj.Validation._doImplementsCheck(instance, contractDef.type, contractDef.name);

    // Save to default and public factories
    factories[name.toLowerCase()] = props;
  }
};

/**
 * The contract for a ConverterFactory that provides a factory method to create a converter by its 
 * type.
 * 
 * @name oj.ConverterFactory
 * @abstract
 * @class
 * @export
 */
oj.ConverterFactory = 
{
  /**
   * Default converter type for number
   * @expose
   * @member
   */
  "CONVERTER_TYPE_NUMBER" : 'number',
  /**
   * Default converter type for datetime 
   * @expose
   * @member
   */
  "CONVERTER_TYPE_DATETIME" : 'datetime',

  /**
   * Creates an immutable converter instance of the requested type. Implementations can register 
   * custom converter factories for the supported or new types.
   * 
   * @param {(Object|null)} options an object containing the options required by the converter for its 
   * initialization. The key value pairs used in the options is implementation specific.
   * 
   * @return {Object} a converter instance.
   * @throws {TypeError} if an unrecognized type was provided 
   * @expose
   */
  createConverter : function(options) {}  
};

/**
 * The contract for a ValidatorFactory that provides a factory method to create a validator by its 
 * type.
 * 
 * @name oj.ValidatorFactory
 * @abstract
 * @class
 * @export
 */
oj.ValidatorFactory = 
{
  /**
   * Default validator type for required validation, used to create an instance of type 
   * {@link oj.RequiredValidator}.
   * @expose
   * @member
   */
  "VALIDATOR_TYPE_REQUIRED" : 'required',
          
  /**
   * Default validator type for regular expression based validation, used to create an instance of 
   * type {@link oj.RegExpValidator}.
   * @expose
   * @member
   */
  "VALIDATOR_TYPE_REGEXP" : 'regexp',

  /**
   * Default validator type for range validation involving numbers, used to create an instance of type 
   * {@link oj.NumberRangeValidator}.
   * @expose
   * @member
   */
  "VALIDATOR_TYPE_NUMBERRANGE" : 'numberRange',

  /**
   * Default validator type for length validation, used to create an instance of type 
   * {@link oj.LengthValidator}.
   * @expose
   * @member
   */
  "VALIDATOR_TYPE_LENGTH" : 'length',

  /**
   * Default validator type for range validation involving datetimes, used to create an instance of type 
   * {@link oj.DateTimeRangeValidator}.
   * @expose
   * @member
   */
  "VALIDATOR_TYPE_DATETIMERANGE" : 'dateTimeRange',
  
  /**
   * Default validator type for date restriction validation, used to create an instance of type 
   * {@link oj.DateRestrictionValidator}.
   * @expose
   * @member
   */
  "VALIDATOR_TYPE_DATERESTRICTION" : 'dateRestriction',
          
  /**
   * Creates an immutable validator instance of the requested type. Implementations can register 
   * custom validator factories for the supported or new types.
   * 
   * @param {(Object|null)} options an object containing the options required by the validator for its 
   * initialization. The key value pairs used in the options is implementation specific.
   * 
   * @return {Object} a validator instance.
   * @throws {TypeError} if an unrecognized type was provided 
   * @expose
   */
  createValidator : function(options) {}  
};

/**
 * @export
 * Placeholder here as closure compiler objects to export annotation outside of top level
 */

/**
 * Converter Contract
 */

/**
 * Constructs an immutable instance of Converter.
 * 
 * @param {Object=} options an object literal used to provide an optional information to 
 * initialize the converter.<p>
 * @export
 * @constructor
 */
oj.Converter = function(options)
{
  this.Init(options);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.Converter, oj.Object, "oj.Converter");


/**
 * Initializes converter instance with the set options
 * @param {Object=} options an object literal used to provide an optional information to 
 * initialize the converter.<p>
 * @export
 */
oj.Converter.prototype.Init = function(options) 
{
  oj.Converter.superclass.Init.call(this);
  // should we make options truly immutable? non-configurable, non-enumerable, non-writable
  // Object.defineProperty(oj.Converter.prototype, "_options", {value: options});
  this._options = options;
};

/**
 * Returns a hint that describes the converter format expected.
 * @return {String|null} a hint describing the format the value is expected to be in.
 * @export
 */
oj.Converter.prototype.getHint = function () 
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Returns the options called with converter initialization.
 * @return {Object} an object of options.
 * @export
 */
oj.Converter.prototype.getOptions = function () 
{
  return (this._options || {});
};

/**
 * Parses a String value using the options provided. 
 * 
 * @param {String} value to parse
 * @return {(Number|Date)} the parsed value. 
 * @throws {Error} if parsing fails
 * @export
 */
oj.Converter.prototype.parse = function (value) 
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Formats the value using the options provided. 
 * 
 * @param {(Number|Date)} value the value to be formatted for display
 * @return {(String|null)} the localized and formatted value suitable for display
 * @throws {Error} if formatting fails.
 * @export
 */
oj.Converter.prototype.format = function (value) 
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Returns an object literal with locale and formatting options computed during initialization of 
 * the object. If options was not provided at the time of initialization, the properties will be 
 * derived from the locale defaults.
 * @return {Object} an object of resolved options.
 * @export
 */
oj.Converter.prototype.resolvedOptions = function ()
{
  var resolved = {};
  // returns a clone of this._options
  $.extend(resolved, this._options);
  
  return resolved;
};


// oj.ConverterError

/**
 * Constructs a ConverterError instance from a summary and detail 
 * 
 * @param {string} summary a localized String that provides a summary of the error
 * @param {string} detail a localized String that provides a detail of the error
 * @constructor
 * @export
 */
oj.ConverterError = function (summary, detail)
{
  var message = new oj.Message(summary, detail, oj.Message.SEVERITY_LEVEL['ERROR']);
  this.Init(message); 
};

oj.ConverterError.prototype = new Error();

/**
 * Initializes the instance. 
 * @param {Object} message instance of oj.Message
 * @export
 */
oj.ConverterError.prototype.Init = function (message)
{
  var detail = message['detail'], summary = message['summary'];
  this._message = message;

  // so browser can get to e.name and e.message 
  this.name = 'Converter Error';
  this.message = detail || summary;
};

/**
 * Returns an instance of oj.Message.
 * 
 * @return {Object} instance of oj.Message
 * @export
 */
oj.ConverterError.prototype.getMessage = function ()
{
  return this._message;
};
/**
 * @export
 * Placeholder here as closure compiler objects to export annotation outside of top level
 */

/**
 * oj.NumberConverter Contract. 
 */

/**
 * @export
 * @constructor
 * @augments oj.Converter 
 * @name oj.NumberConverter
 */
oj.NumberConverter = function()
{
  this.Init();
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.NumberConverter, oj.Converter, "oj.NumberConverter");

/**
 * Initializes the number converter instance with the set options.
 * @param {Object=} options an object literal used to provide an optional information to 
 * initialize the converter.<p>
 * @export
 */
oj.NumberConverter.prototype.Init = function(options) 
{
  oj.NumberConverter.superclass.Init.call(this, options);
};

/**
 * Formats the Number value using the options provided and returs a String value.
 * 
 * @param {Number} value the value to be formatted for display
 * @return {(String|null)} the localized and formatted value suitable for display
 * @throws {Error} a ConverterError if formatting fails.
 * @export
 */
oj.NumberConverter.prototype.format = function (value) 
{
  return oj.NumberConverter.superclass.format.call(this, value);
};

/**
 * Parses the value using the options provided and returns a Number object.
 * 
 * @param {String} value to parse
 * @return {Number} the parsed value as a Number object.
 * @throws {Error} a ConverterError if parsing fails
 * @export
 */
oj.NumberConverter.prototype.parse = function (value) 
{
  return oj.NumberConverter.superclass.parse.call(this, value);
};

/**
 * @export
 * Placeholder here as closure compiler objects to export annotation outside of top level
 */

/**
 * oj.DateTimeConverter Contract. 
 */

/**
 * @constructor
 * @param {Object=} options an object literal used to provide an optional information to 
 * @augments oj.Converter 
 * @name oj.DateTimeConverter
 * @export
 */
oj.DateTimeConverter = function(options)
{
  this.Init(options);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.DateTimeConverter, oj.Converter, "oj.DateTimeConverter");

/**
 * Initializes the date time converter instance with the set options.
 * @param {Object=} options an object literal used to provide an optional information to 
 * initialize the converter.<p>
 * @export
 */
oj.DateTimeConverter.prototype.Init = function(options) 
{
  oj.DateTimeConverter.superclass.Init.call(this, options);
};

/**
 * Formats the Date value using the options provided and returns a String value.
 * 
 * @param {Date} value to be formatted for display
 * @return {(String|null)} the localized and formatted value suitable for display
 * @throws {Error} a ConverterError if formatting fails.
 * @export
 */
oj.DateTimeConverter.prototype.format = function (value) 
{
  return oj.DateTimeConverter.superclass.format.call(this, value);
};


/**
 * Returns true if a 24-hour format is set; false otherwise.
 * @export
 */
oj.DateTimeConverter.prototype.isHourInDaySet = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Returns true if 12-hour is set; false otherwise.
 * @export
 */
oj.DateTimeConverter.prototype.isHourInAMPMSet = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Returns true if minutes are shown in the time portion; false otherwise.
 * @export
 */
oj.DateTimeConverter.prototype.isMinuteSet = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Returns true if seconds are shown in the time portion; false otherwise.
 * @export
 */
oj.DateTimeConverter.prototype.isSecondSet = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Returns true if milliseconds are shown in the time portion; false otherwise.
 * @export
 */
oj.DateTimeConverter.prototype.isMilliSecondSet = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Returns true if year is shown in the date portion; false otherwise.
 * @export
 */
oj.DateTimeConverter.prototype.isYearSet = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Returns true if month is shown in the date portion; false otherwise.
 * @export
 */
oj.DateTimeConverter.prototype.isMonthSet = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Returns true if day is shown in the date portion; false otherwise.
 * @export
 */
oj.DateTimeConverter.prototype.isDaySet = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Returns true if the day name is shown in the date portion; false otherwise.
 * @export
 */
oj.DateTimeConverter.prototype.isDayNameSet = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Parses the value using the options provided and returns a Date value.
 * 
 * @param {String} value to parse
 * @return {Date} the parsed value as a Date object.
 * @throws {Error} a ConverterError if parsing fails
 * @export
 */
oj.DateTimeConverter.prototype.parse = function (value) 
{
  return oj.DateTimeConverter.superclass.parse.call(this, value);
};
/**
 * @export
 * Placeholder here as closure compiler objects to export annotation outside of top level
 */

/**
 * Validator Contract
 */

/**
 * @constructor
 * @export
 */
oj.Validator = function()
{
  this.Init();
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.Validator, oj.Object, "oj.Validator");

/**
 * Initializes validator instance with the set options
 * @export
 */
oj.Validator.prototype.Init = function() 
{
  oj.Validator.superclass.Init.call(this);
};

/**
 * Vaidates the value.
 * 
 * @param {Object} value to be validated
 * @return {*} a boolean true if validation passes.
 * @throws Error if validation fails
 * @export
 */
oj.Validator.prototype.validate = function (value) {
  oj.Assert.failedInAbstractFunction();
};

/**
 * Returns a hint that describes the validator rule.
 * @returns {*} a hint string or null
 * @export
 */
oj.Validator.prototype.getHint = function () 
{
  oj.Assert.failedInAbstractFunction();
};

// ValidatorError

/**
 * Constructs a ValidatorError instance from a summary and detail 
 * 
 * @param {string} summary a localized String that provides a summary of the error
 * @param {string} detail a localized String that provides a detail of the error
 * @constructor
 * @export
 */
oj.ValidatorError = function (summary, detail)
{
  var message = new oj.Message(summary, 
                               detail, 
                               oj.Message.SEVERITY_LEVEL['ERROR']);
  this.Init(message); 
};

oj.ValidatorError.prototype = new Error();

/**
 * Initializes the instance. 
 * @param {Object} message an instance of oj.Message
 * @export
 */
oj.ValidatorError.prototype.Init = function (message)
{
  var detail = message['detail'], summary = message['summary'];
  this._message = message;

  // so browser can get to e.name and e.message 
  this.name = 'Validator Error';
  this.message = detail || summary;
};

/**
 * Returns an instance of oj.Message.
 * 
 * @returns {Object} instance of oj.Message
 * @export
 */
oj.ValidatorError.prototype.getMessage = function ()
{
  return this._message;
};
/**
 * @export
 * Placeholder here as closure compiler objects to export annotation outside of top level
 */

/**
 * Constructs a message object 
 * .
 * @param {string} summary - Localized summary message text
 * @param {string} detail - Localized detail message text 
 * @param {number|string} severity - An optional severity for this message. Use constants 
 * oj.Message.SEVERITY_LEVEL for number types and oj.Message.SEVERITY_TYPE for string types. Default 
 * is SEVERITY_ERROR if no severity is specified
 * @constructor
 * @export
 */
oj.Message = function(summary, detail, severity)
{
  this.Init(summary, detail, severity);
};

/**
 * Message Severity Type. 
 * @const
 * @export 
 */
oj.Message.SEVERITY_TYPE = {
  /**
   * Message Severity Level Confirmation. This is the lowest severity level outside of none.
   */
  'CONFIRMATION': 'confirmation',

  /**
   * Message Severity Level Info. This has a higher severity level than confirmation.
   */
  'INFO':'info',

  /**
   * Message Severity Level Warning. This has a higher severity level than confirmation and is used 
   * when displaying a warning message.
   */
  'WARNING': 'warning',

  /**
   * Message Severity Level Error. This has a higher severity level than warning but lower than fatal 
   * and used when displaying an error message. 
   */
  'ERROR': 'error',

  /**
   * Message Severity Level Fatal. This is highest severity level used when displaying a critical 
   * error message, often fatal or unrecoverable.
   * @const
   * @export 
   */
  'FATAL': 'fatal'
};


/**
 * Message severity level
 * @export
 */
oj.Message.SEVERITY_LEVEL = {
  'FATAL' : 5,
  'ERROR' : 4,        
  'WARNING' : 3,
  'INFO' : 2,
  'CONFIRMATION' : 1
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.Message, oj.Object, "oj.Message");

/**
 * Initializes Message instance with the set options
 * @param {string} summary a lcalized summary message text
 * @param {string} detail a localized detail message text 
 * @param {number|string} severity - An optional severity for this message.  Use constants 
 * oj.Message.SEVERITY_LEVEL for number types and oj.Message.SEVERITY_TYPE for string types.
 *                   
 * @export
 */
oj.Message.prototype.Init = function(summary, detail, severity) 
{
  this['summary'] = summary;
  this['detail'] = detail;
  this['severity'] = severity || oj.Message.SEVERITY_TYPE.ERROR; // defaults to ERROR
  
  /*
  // once initialized proeperties of the oj.Message instance cannot be altered.
  Object.defineProperty(oj.Message.prototype, "summary", {value: summary,  
                                                          writable : false,
                                                          enumerable : true,
                                                          configurable : true});
  Object.defineProperty(oj.Message.prototype, "detail", {value: detail,  
                                                          writable : false,
                                                          enumerable : true,
                                                          configurable : true});
  Object.defineProperty(oj.Message.prototype, "severity", {value: severity,  
                                                          writable : false,
                                                          enumerable : true,
                                                          configurable : true});
  */
  oj.Message.superclass.Init.call(this);
};

/**
 * Indicates whether some other oj.Message instance - msg,  is "equal to" this one.
 * Method is equivalent to java ".equals()" method.
 * 
 * @param {Object} msg 
 * @export
 */
oj.Message.prototype.equals = function (msg)
{
  if (msg)
  {
    if ((oj.Message.getSeverityLevel(this['severity']) === 
            oj.Message.getSeverityLevel(msg['severity'])) && 
        this['summary'] === msg['summary'] && 
        this['detail'] === msg['detail'])
    {
      return true;
    }
  }
  
  return false;
};

/**
 * A convenience method that returns the severity level when given either a severity level of type 
 * number or a severity type of string. 
 * If severity level is not provided or is not valid this return a severity error.
 * @param {string|number|undefined} severity 
 * @return {number}
 * @export
 */
oj.Message.getSeverityLevel = function (severity)
{
  var index;
  if (severity)
  {
    if (typeof severity === "string")
    {
      index = oj.Message._LEVEL_TO_TYPE.indexOf(severity, 1);
      if (index === -1)
      {
        severity = oj.Message.SEVERITY_LEVEL['ERROR'];
      }
      else
      {
        severity = index;
      }
    }
    else if (typeof severity === "number" && (severity < oj.Message.SEVERITY_LEVEL['CONFIRMATION'] && 
          severity > oj.Message.SEVERITY_LEVEL['FATAL']))
    {
      severity = oj.Message.SEVERITY_LEVEL['ERROR'];
    }
  }
  
  return !severity ? oj.Message.SEVERITY_LEVEL['ERROR'] : severity;
};

/**
 * A convenience method that returns the severity type when given either a severity level of type 
 * number or a severity type of string. 
 * If severity level is not provided or is not valid this return a severity error.
 * @param {string|number|undefined} level 
 * @return {string}
 * @export
 */
oj.Message.getSeverityType = function (level) 
{
  var index;
  if (level)
  {
    if (typeof level === "string")
    {
      index = oj.Message._LEVEL_TO_TYPE.indexOf(level, 1);
      if (index === -1)
      {
        // when given an unrecognized type return "error"
        level = oj.Message.SEVERITY_TYPE['ERROR'];
      }
    }
    else if (typeof level === "number")
    {
      if (level < oj.Message.SEVERITY_LEVEL['CONFIRMATION'] && 
          level > oj.Message.SEVERITY_LEVEL['FATAL'])
      {
        level = oj.Message.SEVERITY_TYPE['ERROR'];
      }
      else
      {
        level = oj.Message._LEVEL_TO_TYPE[level];
      }
    }
  }
  return level || oj.Message.SEVERITY_TYPE['ERROR'];
};

/**
 * A convenience method that returns the max severity level in a array of message objects.  
 * @param {Array} messages an array of message instances
 * @returns {number} -1 if none can be determined; otherwise a severity level as defined by 
 * oj.Message.SEVERITY_LEVEL.
 * @export
 */
oj.Message.getMaxSeverity = function (messages)
{
  var maxLevel = -1, currLevel, message, i;
  if (messages && messages.length > 0)
  {
    $.each(messages, function (i, message)
      {
        if (message)
        {
          currLevel = oj.Message.getSeverityLevel(message['severity']);
        }
        maxLevel = maxLevel < currLevel ? currLevel : maxLevel;
      });
    
  }
  
  return maxLevel;
};

/**
 * A convenience method to determine the validity of the messages.
 * @param {Array} messages an array of message instances
 * @returns {boolean} true if none of the messages are of severity error or greater. false otherwise
 * @export
 */
oj.Message.isValid = function (messages)
{
  var maxSeverity = oj.Message.getMaxSeverity(messages);
  if (maxSeverity >= oj.Message.SEVERITY_LEVEL.ERROR)
  {
    return false;
  }
  
  return true;
};

/**
 * @private
 * @type Array
 */
oj.Message._LEVEL_TO_TYPE = ['none', // this can never be set
                             oj.Message.SEVERITY_TYPE['CONFIRMATION'], 
                             oj.Message.SEVERITY_TYPE['INFO'],
                             oj.Message.SEVERITY_TYPE['WARNING'],
                             oj.Message.SEVERITY_TYPE['ERROR'],
                             oj.Message.SEVERITY_TYPE['FATAL']];

/*global OraNumberConverter:true*/
/**
 * @export
 * Placeholder here as closure compiler objects to export annotation outside of top level
 */

/**
 * @constructor
 * @classdesc Constructs an immutable instance and initializes it with the options provided. When initialized 
 * with no options, the default options for the current locale are assumed. The converters by 
 * default use the current page locale (returned by oj.Config.getLocale()). There are several ways 
 * to initialize the converter.
 * <p>
 * <ul>
 * <li>Using options defined by the ECMA 402 Specification, these would be the properties style, 
 * currency, currencyDisplay, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, 
 * useGrouping</li>
 * <li>Using a custom decimal, currency or percent format pattern. specified using the 'pattern' property</li>
 * </ul>
 * <p>
 * 
 * The converter provides leniency when parsing user input value to a number in the following ways:<br/>
 * 
 * <ul>
 * <li>Prefix and suffix that do not match the pattern, are removed. E.g., when pattern is 
 * "#,##0.00%" (suffix is the % character), a value of "abc-123.45xyz", will be leniently parsed to 
 * -123.45</li>
 * <li>When a value includes a symbol but the pattern doesn't require it.  E.g., the options are 
 * {pattern: "###", currency: 'USD'}, then values ($123), (123) and -123 will be leniently parsed as 
 * -123.</li>
 * </ul>
 * <p>
 * @property {Object=} options - an object literal used to provide an optional information to 
 * initialize the converter.
 * @property {string=} options.style - sets the style of number formatting. Allowed values are "decimal" 
 * (the default), "currency" or "percent". When a number is formatted as a decimal, the decimal 
 * character is replaced with the most appropriate symbol for the locale. In English this is a 
 * decimal point ("."), while in many locales it is a decimal comma (","). If grouping is enabled the 
 * locale dependent grouping separator is also used. These symbols are also used for numbers 
 * formatted as currency or a percentage, where appropriate.
 * @property {string=} options.currency - specifies the currency that will be used when formatting the 
 * number. The value should be a ISO 4217 alphabetic currency code. If the style is set to currency, 
 * it's required that the currency property also be specified. This is because the currency used is 
 * not dependent on the locale. You may be using a Thai locale, but dealing in US Dollars, e.g.
 * @property {string=} options.currencyDisplay - if the number is using currency formatting, specifies 
 * if the currency will be displayed using its "code" (as an ISO 4217 alphabetic currency code), 
 * "symbol" (a localized currency symbol (e.g. $ for US dollars, £ for Great British pounds, and so 
 * on), or "name" (a localized currency name. So allowed values are "code", "symbol" and "name "
 * @property {number=} options.minimumIntegerDigits - sets the minimum number of digits before the 
 * decimal place (known as integer digits). The number is padded with leading zeros if it would not 
 * otherwise have enough digits. The value must be an integer between 1 and 21.
 * @property {number=} options.minimumFractionDigits - similar to 'minimumIntegerDigits', except it 
 * deals with the digits after the decimal place (fractional digits). It must be an integer between 
 * 0 and 20. The fractional digits will be padded with trailing zeros if they are less than the minimum.
 * @property {number=} options.maximumFractionDigits - follows the same rules as 'minimumFractionDigits', 
 * but sets the maximum number of fractional digits that are allowed. The value will be rounded if 
 * there are more digits than the maximum specified.
 * @property {boolean=} options.useGrouping - when the value is truthy, the locale dependent grouping 
 * separator is used when formatting the number. This is often known as the thousands separator, 
 * although it is up to the locale where it is placed. The ‘useGrouping’ is set to true by default.
 * @property {string=} options.pattern an optional localized pattern, where the characters used in 
 * pattern are as defined in the Unicode CLDR for numbers, percent or currency formats. When present 
 * this will override the other "options". <p>
 * 
 * &nbsp;&nbsp;- When the pattern represents a currency style the 'currency' property is required to 
 * be set, as not setting this will throw an error. The 'currencyDisplay' is optional. <br/>Example: 
 * {pattern: '¤#,##0', currency: 'USD'}. <p>
 * 
 * &nbsp;&nbsp;- It's not mandatory for the pattern to have the special character '¤' (currency sign) 
 * be present. When not present, values are treated as a currency value, but are not formatted to 
 * show the currency symbol. <br/>Example: {pattern: '#,##0', currency: 'USD'} <p>
 * 
 * &nbsp;&nbsp;- When the pattern represents a percent style, the percent special character ('%') needs to be 
 * explicitly specified in the pattern, e.g., {pattern: "#,##0%"}. If the pattern does not contain 
 * the percent character it's treated as a decimal pattern, unless the style is set to percent, 
 * in which case the value is treated as a percent value, but not formatted to show the percent symbol. 
 * <br/>Example: {style: 'percent', pattern: "#,##0"}. <p>
 * 
 * &nbsp;&nbsp;- A decimal pattern or exponent pattern is specified in the pattern using the CLDR 
 * conventions. <br/>Example: {pattern: "#,##0.00"} or {pattern: "0.##E+0"}. <p>
 * 
 * NOTE: 'pattern' is provided for backwards compatibility with existing apps that may want the 
 * convenience of specifying an explicit format mask. Setting a pattern will override the default 
 * locale specific format. <br/>
 * 
 * @example <caption>Create a number converter to parse/format currencies</caption>
 * var converterFactory = oj.Validation.converterFactory("number");
 * var options = {style: "currency", currency: "USD", minimumIntegerDigits: 2};
 * converter = converterFactory.createConverter(options);<br/>
 * 
 * @example <caption>A number converter for percent values using a custom (CLDR) pattern</caption>
 * var converterFactory = oj.Validation.converterFactory("number");
 * var options = {pattern: '#,##0%'};
 * converter = converterFactory.createConverter(options);<br/>
 * 
 * @example <caption>To parse a value as percent but format it without displaying the percent character</caption>
 * var options = {style: 'percent', pattern: '#,##0'};<br/>
 * 
 * @example <caption>To parse a value as currency using a custom (CLDR) pattern</caption>
 * var options = {pattern: '¤#,##0', currency: 'USD'};
 * 
 * @export
 * @augments oj.NumberConverter 
 * @name oj.IntlNumberConverter
 */
oj.IntlNumberConverter = function(options)
{
  this.Init(options);
};

oj.Object.createSubclass(oj.IntlNumberConverter, oj.NumberConverter, "oj.IntlNumberConverter");

/**
 * Initializes the number converter instance with the set options.
 * @param {Object=} options an object literal used to provide an optional information to 
 * initialize the converter.<p>
 * @export
 */
oj.IntlNumberConverter.prototype.Init = function(options) 
{
  oj.IntlNumberConverter.superclass.Init.call(this, options);
};


// Returns the wrapped number converter implementation object.
oj.IntlNumberConverter.prototype._getWrapped = function ()
{
  if (!this._wrapped)
  {
    this._wrapped = OraNumberConverter.getInstance();
  }
  
  return this._wrapped;
};

/**
 * Formats a Number and returns the formatted string, using the options this converter was 
 * initialized with.
 * 
 * @param {Number|number} value to be formatted for display
 * @return {string} the localized and formatted value suitable for display. When the value is 
 * formatted as a percent it's multiplied by 100.
 * 
 * @throws {Error} a ConverterError both when formatting fails, or if the options provided during 
 * initialization cannot be resolved correctly. 
 * 
 * @export
 */
oj.IntlNumberConverter.prototype.format = function (value) 
{
  // undefined, null and empty string values all return null. If value is NaN then return "".
  if (value == null || 
      (typeof value === "string" && (oj.StringUtils.trim("" + value)).length === 0) ||
      (typeof value === "number" && isNaN(value))) 
  {
    return oj.IntlConverterUtils.__getNullFormattedValue();
  }
  
  // TODO: Is this correct?
  var localeElements = oj.LocaleData.__getBundle(), locale = oj.Config.getLocale(), 
          resolvedOptions = this.resolvedOptions(), converterError;
  
  try
  {
    return this._getWrapped().format(value, localeElements, resolvedOptions, locale);
  }
  catch (e)
  {
    converterError = this._processConverterError(e, value);
    throw converterError;
  }
};

/**
 * Retrieves a hint String describing the format the value is expected to be in.
 * 
 * @return {String} a hint describing the format the value is expected to be in.
 * @export
 */
oj.IntlNumberConverter.prototype.getHint = function ()
{
  // UX does not want any hint for numbers. 
  // return oj.Translations.getTranslatedString("oj-converter.hint.summary",
  //        {'exampleValue': this._getHintValue()}); 
  return oj.IntlNumberConverter.superclass.getHint.call(this);
};

/**
 * Returns the options called with converter initialization.
 * @return {Object} an object of options.
 * @export
 */
oj.IntlNumberConverter.prototype.getOptions = function () 
{
  return oj.IntlNumberConverter.superclass.getOptions.call(this);
};

/**
 * Parses a string value to return a Number, using the options this converter was initialized with. 
 * 
 * @param {String|string} value to parse
 * @return {number|null} the parsed number or null if the value was null or an empty string. When 
 * the value is parsed as a percent its 1/100th part is returned.
 * 
 * @throws {Error} a ConverterError both when parsing fails, or if the options provided during 
 * initialization cannot be resolved correctly. 
 *  
 * @export
 */
oj.IntlNumberConverter.prototype.parse = function (value) 
{
  var localeElements = oj.LocaleData.__getBundle(), locale = oj.Config.getLocale(), 
          resolvedOptions = this.resolvedOptions(), converterError;

  // null and empty string values are ignored and not parsed. It
  // undefined.
  if (value == null || value === "") // check for undefined, null and ""
  {
    return null;
  }
  
  try
  {
    // we want to trim the value for leading spaces before and after
    return this._getWrapped().parse(oj.StringUtils.trim(value), 
                                    localeElements, 
                                    resolvedOptions, 
                                    locale);
  }
  catch (e)
  {
    converterError = this._processConverterError(e, value);
    throw converterError;
  }
  
};

/**
 * Returns an object literal with properties reflecting the number formatting options computed based 
 * on the options parameter. If options (or pattern) is not provided, the properties will be derived 
 * from the locale defaults.
 * 
 * @return {Object} An object literal containing the resolved values for the following options. Some 
 * of these properties may not be present, indicating that the corresponding components will not be 
 * represented in the formatted output.
 * <ul>
 * <li><b>locale</b>: a String value with the language tag of the locale whose localization is used 
 * for formatting.</li>
 * <li><b>style</b>: a String value. One of the allowed values - "decimal", "currency" or "percent".</li>
 * <li><b>currency</b>: a String value.  an ISO 4217 alphabetic currency code. May be present only 
 *  when style is currency.</li>
 * <li><b>currencyDisplay</b>: a String value. One of the allowed values - "code", "symbol", or 
 *  "name".</li>
 * <li><b>numberingSystem</b>: a String value of the numbering system used. E.g. latn</li>
 * <li><b>minimumIntegerDigits</b>: a non-negative integer Number value indicating the minimum 
 *  integer digits to be used.</li>
 * <li><b>minimumFractionDigits</b>: a non-negative integer Number value indicating the minimum 
 *  fraction digits to be used.</li>
 * <li><b>maximumFractionDigits</b>: a non-negative integer Number value indicating the maximum 
 *  fraction digits to be used.</li>
 * <li><b>useGrouping</b>: a Boolean value indicating whether a grouping separator is used.</li>
 * 
 * @throws a oj.ConverterError when the options that the converter was initialized with are invalid. 
 * @export
 */
oj.IntlNumberConverter.prototype.resolvedOptions = function()
{
  var localeElements, locale = oj.Config.getLocale(), converterError;
  // options are resolved and cached for the current locale. when locale changes resolvedOptions 
  // is reevaluated as it contains locale specific info.
  if ((locale !== this._locale) || !this._resolvedOptions)
  {
    localeElements = oj.LocaleData.__getBundle();
    try
    {
      // cache if successfully resolved
      this._resolvedOptions = this._getWrapped().resolvedOptions(localeElements, 
                                                                 this.getOptions(), 
                                                                 locale);
      this._locale = locale;
    }
    catch (e)
    {
      converterError = this._processConverterError(e);
      throw converterError;
    }
  }
  
  return this._resolvedOptions;
};

/**
 * Processes the error returned by the converter implementation and throws a oj.ConverterError 
 * instance.
 * 
 * @param {Error} e
 * @param {String|string|Number|number|Object=} value
 * @throws an instance of oj.ConverterError
 * @private
 */
oj.IntlNumberConverter.prototype._processConverterError = function (e, value)
{
  var errorInfo = e['errorInfo'], summary, detail, errorCode, parameterMap, converterError, 
          propName, resourceKey;
  if (errorInfo)
  {
    errorCode = errorInfo['errorCode'];
    parameterMap = errorInfo['parameterMap'];
    oj.Assert.assertObject(parameterMap);
    propName = parameterMap['propertyName'];
    
    if (e instanceof TypeError)
    {
      if (errorCode === "optionTypesMismatch" || errorCode === "optionTypeInvalid")
      {
        converterError = oj.IntlConverterUtils.__getConverterOptionError(errorCode, parameterMap);
      }
    }
    else if (e instanceof RangeError)
    {
      if (errorCode === "optionOutOfRange")
      {
        converterError = oj.IntlConverterUtils.__getConverterOptionError(errorCode, parameterMap);
      }
    }
    else if (e instanceof SyntaxError)
    {
      if (errorCode === "optionValueInvalid")
      {
        converterError = oj.IntlConverterUtils.__getConverterOptionError(errorCode, parameterMap);
      }
    }
    else if (e instanceof Error)
    {
      if (errorCode === "decimalFormatMismatch")
      {
        // The '{value}' does not match the expected decimal format '{format}'.
        resourceKey = "oj-converter.number.decimalFormatMismatch.summary";
      }
      else if (errorCode === "currencyFormatMismatch")
      {
        // The {value} does not match the expected currency format {format}.
        resourceKey = "oj-converter.number.currencyFormatMismatch.summary";
      }
      else if (errorCode === "percentFormatMismatch")
      {
        resourceKey = "oj-converter.number.percentFormatMismatch.summary";
      }
      
      if (resourceKey)
      {
        summary = oj.Translations.getTranslatedString(resourceKey, 
          {'value': value || parameterMap['value'],
           'format': parameterMap['format']});
        
        detail = oj.Translations.getTranslatedString("oj-converter.hint.detail",
          {'exampleValue': this._getHintValue()}); 
          
        converterError = new oj.ConverterError(summary, detail);
      }
    }
  }
  
  if (!converterError)
  {
    // An error we are unfamiliar with. Get the message and set as detail
    summary = e.message; // TODO: What should the summary be when it's missing??
    detail = e.message;
    converterError = new oj.ConverterError(summary, detail);
  }
  
  return converterError;
};

// Returns the hint value.
oj.IntlNumberConverter.prototype._getHintValue = function()
{
  var value = "";
  try
  {
    value =  this.format(12345.98765);
  }
  catch (e)
  {
    if (e instanceof oj.ConverterError)
    {
      // Something went wrong and we don't have a way to retrieve a valid value.
      // TODO: Log an error
      value = "";
    }
  }
  finally
  {
    return value;
  }
};

/*
 * Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
 */
/**
 * Constructs a DateRestrictionValidator that ensures the value provided is not in a disabled entry of dayMetaData
 * @param {Object=} options an object literal used to provide:<p>
 * <ul>
 *   <li> 'dayMetaData': Additional info to be used when rendering the day 
 *                       This should be in the following JSON format with the year, month, day based on Date.getFullYear(), Date.getMonth(), and Date.getDate():
 *                       {year: {month: {day: {disabled: true|false, className: "additionalCSS", tooltip: 'Stuff to display'}}}<p>
 *   <li> 'message': an optional object literal of custom error message to be used:<p>
 *       <ul>
 *                <li> messageDayMetaData: The detail error message to be used for constructing faces messages, if input value is in disabled entry of dayMetaData.<p>
 *                     Parameters:<p>
 *                     <ul>
 *                       <li> {0} value entered by the user<p>
 *                     </ul>
 *                     Usage: Entered {0} which is a disabled entry of dayMetaData.<p>
 *        </ul>
 * </ul>
 * @export
 * @constructor
 */
oj.DateRestrictionValidator = function _DateRestrictionValidator(options)
{
  this.Init(options);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.DateRestrictionValidator, oj.Validator, "oj.DateRestrictionValidator");

/**
 * Initializes validator instance with the set options
 * @param {Object=} options
 * @export
 */
oj.DateRestrictionValidator.prototype.Init = function (options)
{
  oj.DateRestrictionValidator.superclass.Init.call(this);
  this._dayMetaData = options["dayMetaData"];
  if (options)
  {
    this._customMessage = options['message'] || {};
  }
};

/**
 * Validates whether the date provided is part of disabled date within dayMetaData
 *
 * @param {Object} value that is being validated
 * @returns {boolean} boolean of whether it is in disabled meta data
 * 
 * @export
 */
oj.DateRestrictionValidator.prototype._inDisabledMetaData = function(value) 
{
  var dayMetaData = this._dayMetaData,
      disabledInMetaData = function getMetaData(dayMetaData, position, params) {
        if(!dayMetaData || position === params.length) {
          return dayMetaData;
        }
        
        var nextPos = position + 1;
        return getMetaData(dayMetaData[params[position]], nextPos, params) || getMetaData(dayMetaData["*"], nextPos, params);
      };
  
  if(dayMetaData) {
    var fullYear = value.getFullYear(),
        month = value.getMonth(),
        date = value.getDate(),
        metaData = disabledInMetaData(dayMetaData, 0, [fullYear, month, date]);
    
    return metaData && metaData.disabled;
  }
  
  return false;
};

/**
 * Validates whether the date provided is part of disabled date within dayMetaData
 *
 * @param {Object} value that is being validated
 * @returns {Object} original if validation was successful
 *
 * @throws {Error} when there is no match
 * @export
 */
oj.DateRestrictionValidator.prototype.validate = function (value)
{
  var messageDayMetaData,
      summary = "", 
      detail = "", 
      translations = oj.Translations, 
      customMessage = this._customMessage;
  
  if(this._inDisabledMetaData(value)) {
    
    messageDayMetaData = customMessage["messageDayMetaData"];
    summary = translations.getTranslatedString('oj-validator.restriction.date.dayMetaData.summary');
    detail = messageDayMetaData ? translations.applyParameters(messageDayMetaData, {"value": value}) : 
                translations.getTranslatedString('oj-validator.restriction.date.dayMetaData.detail', {"value": value});
    throw new oj.ValidatorError(summary, detail);
  }
  
  return value;
};

/*
 * Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
 */

/**
 * Constructs a RegExpValidator that ensures the value matches the provided pattern
 * @param {Object} options an object literal used to provide the pattern, an optional hint and error 
 * message.<p>
 * <ul>
 * <li><b>pattern</b>: a regexp pattern that the validator matches a value against. <p>
 * Example:<p>
 * '\\d{10}'</li>
 * <li><b>hint</b>: an optional hint text. There is no default hint provided by the validator. <p>
 * Parameters: <p>
 * {pattern} - the pattern to enforce<p>
 * Example:<p>
 * "value must meet this pattern {pattern}" </li>
 * <li>
 * <b>messageSummary</b>: a custom error message summarizing the error <p>
 * Parameters: <p>
 * {label} - label of the component for which this message applies. The label may not always be 
 * available depending on the usage of the validator. <p>
 * {pattern} - the pattern the value should match<p>
 * {value} - value entered by user<p>
 * Examples:<p>
 * "'{label}' Format Incorrect" // translating to 'Phone Number' Format Incorrect
 * </li>
 * <li><b>messageDetail</b>: a custom error message to be used for creating detail part of message, when 
 * the users input does not match the specified pattern. <p>
 * Parameters:<p>
 * {label} - label text of the component for which this message applies. 
 * {pattern} the 'pattern' that the value should match <p>
 * {value} value entered by the user<p>
 * Examples:<p>
 * "The value {value} must contain at least 3 alphanumeric characters"<br/>
 * </li>
 * </ul>
 * @export
 * @constructor
 */
oj.RegExpValidator = function(options) 
{
  this.Init(options);
};

// Subclass from oj.Object or oj.Validator. It does not matter
oj.Object.createSubclass(oj.RegExpValidator, oj.Validator, "oj.RegExpValidator");

// key to access required validator specific resources in the bundle 
oj.RegExpValidator._BUNDLE_KEY_DETAIL = "oj-validator.regExp.detail";
oj.RegExpValidator._BUNDLE_KEY_SUMMARY = "oj-validator.regExp.summary";

/**
 * Initializes validator instance with the set options
 * @param {Object} options
 * @export
 */
oj.RegExpValidator.prototype.Init = function(options) 
{
  oj.RegExpValidator.superclass.Init.call(this);
  this._options = options;
};

/**
 * Validates value for matches using the regular expression provided by the pattern. 
 * 
 * @param {string|number} value that is being validated 
 * @returns {boolean} true if validation was successful 
 * 
 * @throws {Error} when there is no match
 * @export
 */

oj.RegExpValidator.prototype.validate = function(value)
{
  var pattern = (this._options && this._options['pattern']) || "", label, summary, detail, params;
  //For some reason when using digits as input values
  // parseString becomes a integer type, so get away with it.
  value = value ? value.toString() : value;
  
  // We intend that the pattern provided is matched exactly
  var exactPattern = "^(" + pattern + ")$", valid = false, 
          localizedDetail, localizedSummary, matchArr;
  
  matchArr = value.match(exactPattern);
  if ((matchArr !== null) && (matchArr[0] === value))
  {
    valid = true;
  }
  else
  {
    if (this._options)
    {
      summary = this._options['messageSummary'] || null;
      detail = this._options['messageDetail'] || null;
      label = this._options && this._options['label'] || "";
    }
    
    params = {'label': label, 'pattern': pattern, 'value': value};
    localizedSummary = summary ? 
      oj.Translations.applyParameters(summary, params) : 
      oj.Translations.getTranslatedString(this._getSummaryKey(), params);
    localizedDetail = (detail) ? 
      oj.Translations.applyParameters(detail, params) : 
      oj.Translations.getTranslatedString(this._getDetailKey(), params);
    
    throw new oj.ValidatorError(localizedSummary, localizedDetail);
  }
  
  return valid;
};

/**
 * A message to be used as hint, when giving a hint on the expected pattern. There is no default 
 * hint for this property.
 * 
 * @returns {String|null} a hint message or null if no hint is available in the options
 * @export
 */
oj.RegExpValidator.prototype.getHint = function()
{
  var hint = null;
  if (this._options && (this._options['hint']))
  {
    hint = oj.Translations.applyParameters(this._options['hint'], this._options['pattern']);
  }
  
  return hint;
};

oj.RegExpValidator.prototype._getSummaryKey = function ()
{
  return oj.RegExpValidator._BUNDLE_KEY_SUMMARY;
};

oj.RegExpValidator.prototype._getDetailKey = function ()
{
  return oj.RegExpValidator._BUNDLE_KEY_DETAIL;
};
/*global OraDateTimeConverter:true*/
/**
 * @export
 * Placeholder here as closure compiler objects to export annotation outside of top level
 */

/**
 * @constructor
 * 
 * @classdesc Constructs an immutable instance and initializes it with the options provided. There are 
 * several ways to initialize the converter. The converters by default uses the locale symbols for 
 * the current page locale (returned by {@link oj.Config#getLocale}.
 * <ul>
 * <li>Using options defined by the ECMA 402 Specification, these would be the properties year, 
 * month, day, hour, minute, second, weekday, era, timeZoneName, hour12</li>
 * <li>Using a custom date and/or time format pattern using the 'pattern' property</li>
 * <li>Using the standard date, datetime and time format lengths defined by Unicode CLDR, these 
 * would include the properties formaType, dateFormat, timeFormat.</li>
 * </ul>
 * 
 * <p>
 * The options when specified take precendence in the following order:<br>
 * 1. pattern.<br>
 * 2. ECMA options.<br>
 * 3. formatType/dateFormat/timeFormat.
 * <p>
 * The converter provides great leniency when parsing a user input value to a date in the following 
 * ways: <br/>
 * <ul>
 * <li>Allows use of any character for separators irrespective of the separator specified in the 
 * associated pattern. E.g., if pattern is set to 'y-M-d', the following values are all valid - 
 * 2013-11-16, 2013/11-16 and 2013aaa11xxx16.</li>
 * <li>Allows specifying 4 digit year in any position in relation to day and month. E.g., 11-2013-16 
 * or 16-11-2013</li>
 * <li>Supports auto-correction of value, when month and day positions are swapped as long as the 
 * date is > 12 when working with the Gregorian calendar. E.g., if the pattern is 'y-M-d', 
 * 2013-16-11 will be auto-corrected to 2013-11-16. However if both date and month are less or equal 
 * to 12, no assumptions are made about the day or month and the value parsed against the exact pattern.</li>
 * <li>Supports auto-correction of value, for the short and long types of weekday and month names. 
 * So they can are used anywhere in the value. E.g., if the expected pattern is E, MMM, d, y, all 
 * these values are acceptable - Tue, Nov 26 2013 or Nov, Tue 2013 26 or 2013 Tue 26 Nov. <br/>
 * NOTE: Lenient parsing of narrow era, weekday or month name is not supported because of ambiguity in 
 * choosing the right value. So we expect for narrow era, weekday or month option that values be 
 * provided either in their short or long forms. E.g., Sat, March 02, 2013.
 * </li>
 * <li>Specifying the weekday is optional. E.g., if the expected pattern is E, MMM, d, y; then 
 * entering Nov 26, 2013, is automatically turned to Tuesday Nov 26, 2013. But entering an invalid 
 * weekday, i.e., if the weekday does not match the date, an exception is thrown.</li>
 * <li>Leniency rules apply equally no matter which option is used - pattern, ECMA options or formatType</li>
 * </ul>
 * 
 * @property {Object=} options - an object literal used to provide an optional information to 
 * initialize the converter.<p>
 * @property {string=} options.year - allowed values are "2-digit", "numeric". When no options are 
 * set the default value of "numeric" is used.
 * @property {string=} options.month - specifies how the month is formatted. Allowed values are 
 * "2-digit", "numeric", "narrow", "short", "long". The last 3 values behave in the same way as for 
 * weekday, indicating the length of the string used. When no options are set the default value of 
 * "numeric" is used.
 * @property {string=} options.day - specifies how the day is formatted. Allowed values are "2-digit",
 *  "numeric". When no options are set the default value of "numeric" is used.
 * @property {string=} options.hour - specifies how the hour is formatted. Allowed values are 
 * "2-digit" or "numeric". The hour is displayed using the 12 or 24 hour clock, depending on the 
 * locale. See 'hour12' for details.
 * @property {string=} options.minute - specifies how the minute is formatted. Allowed values are 
 * "2-digit", "numeric".
 * @property {string=} options.second - specifies whether the second should be displayed as "2-digit" 
 * or "numeric".
 * @property {string=} options.weekday - specifies how the day of the week is formatted. If absent, it 
 * is not included in the date formatting. Allowed values are "narrow", "short", "long" indicating the 
 * length of the string used.
 * @property {string=} options.era - specifies how the era is included in the formatted date. If 
 * absent, it is not included in the date formatting. Allowed values are "narrow", "short", "long".
 * @property {string=} options.timeZoneName - allowed values are "short", "long".
 * @property {boolean=} options.hour12 - specifies what time notation is used for formatting the time. 
 * A true value uses the 12-hour clock and false uses the 24-hour clock (often called military time 
 * in the US). This property is undefined if the hour property is not used when formatting the date.
 * 
 * @property {string=} options.pattern - a localized string pattern, where the the characters used in 
 * pattern conform to Unicode CLDR for date time formats. This will override all other options 
 * when present. <br/>
 * NOTE: 'pattern' is provided for backwards compatibility with existing apps that may want the 
 * convenience of specifying an explicit format mask. Setting a 'pattern' will override the default 
 * locale specific format.
 * 
 * @property {string=} options.formatType - determines the 'standard' date and/or time format lengths 
 * to use. Allowed values: "date", "time", "datetime". See 'dateFormat' and 'timeFormat' options. 
 * When set a value must be specified.
 * @property {string=} options.dateFormat - specifies the standard date format length to use when 
 * formatType is set to "date" or "datetime". Allowed values are : "short" (default), "medium", "long", 
 * "full". 
 * @property {string=} options.timeFormat - specifies the standard time format length to use when 
 * 'formatType' is set to "time" or "datetime". Allowed values: "short" (default), "medium", "long", 
 * "full". 
 * 
 * @example <caption>Create a date time converter using no options. This uses the default value for 
 * year, month, day properties</caption>
 * var converterFactory = oj.Validation.converterFactory("datetime");
 * converter = converterFactory.createConverter();
 * var resolved = converter.resolvedOpions();
 * // logs "day=numeric, month=numeric, year=numeric"
 * window.console.log("day=" + resolved.day + ", month=" + resolved.month + ", year=" + resolved.year);
 * <br/>
 * 
 * @example <caption>Create a date time converter using the ECMA options to represent date</caption>
 * var options = { year:'2-digit', month: '2-digit', day: '2-digit'};
 * var converterFactory = oj.Validation.converterFactory("datetime");
 * converter = converterFactory.createConverter(options);<br/>
 * 
 * @example <caption>Create a date time converter using the 'pattern' option</caption>
 * var options = {pattern: 'MM-dd-yyyy'}; 
 * var converterFactory = oj.Validation.converterFactory("datetime");
 * converter = converterFactory.createConverter(options);<br/>
 * 
 * @example <caption>Create a date time converter using the standard format length</caption>
 * var options = {formatType: 'date', dateFormat: 'medium'}; 
 * var converterFactory = oj.Validation.converterFactory("datetime");
 * converter = converterFactory.createConverter(options);<br/>
 * 
 * @export
 * @augments oj.DateTimeConverter 
 * @name oj.IntlDateTimeConverter
 */
oj.IntlDateTimeConverter = function(options)
{
  this.Init(options);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.IntlDateTimeConverter, oj.DateTimeConverter, "oj.IntlDateTimeConverter");
oj.IntlDateTimeConverter._DEFAULT_DATE = new Date(1998, 10, 29, 15, 45, 31);

/**
 * Initializes the date time converter instance with the set options.
 * @param {Object=} options an object literal used to provide an optional information to initialize 
 * the converter.<p>
 * 
 * @export
 */
oj.IntlDateTimeConverter.prototype.Init = function(options) 
{
  oj.IntlDateTimeConverter.superclass.Init.call(this, options);
};


// Returns the wrapped date time converter implementation object.
oj.IntlDateTimeConverter.prototype._getWrapped = function ()
{
  if (!this._wrapped)
  {
    this._wrapped = OraDateTimeConverter.getInstance();
  }
  
  return this._wrapped;
};

/**
 * Formats the Date value using the resolved options and returns a String value.
 * 
 * @param {Date} value to be formatted for display
 * @return {string} the localized and formatted value suitable for display
 * 
 * @throws {Error} a ConverterError both when formatting fails, and if the options provided during 
 * initialization cannot be resolved correctly. 
 * @export
 */
oj.IntlDateTimeConverter.prototype.format = function (value) 
{
  var localeElements = oj.LocaleData.__getBundle(), locale = oj.Config.getLocale(), 
          resolvedOptions = this.resolvedOptions(), converterError;
  
  // undefined, null and empty string values all return null. If value is NaN then return "".
  // TODO: Should we automatically parse() the integer value representing the number of milliseconds 
  // since 1 January 1970 00:00:00 UTC (Unix Epoch)?
  if (value == null || 
      (typeof value === "string" && (oj.StringUtils.trim("" + value)).length === 0)) 
  {
    return oj.IntlConverterUtils.__getNullFormattedValue();
  }
  
  try
  {
    return this._getWrapped().format(value, localeElements, resolvedOptions, locale);
  }
  catch (e)
  {
    converterError = this._processConverterError(e, value);
    throw converterError;
  }
};


/**
 * Formats a Date object as a relative date, using the relativeOptions. 
 * @param {Date} value - Date object to be formatted. This value is compared with the current date 
 * on the client to arrive at the relative formatted value.
 * @param {Object} relativeOptions - an Object literal containing the following properties. The 
 * default options are ignored during relative formatting - <br>
 * <ul>
 * <li><b>formatUsing</b>: Specifies the relative formatting convention to use for (calendar or) 
 * the date field type. allowed values: "displayName". <br>Setting value to 'displayName' uses the 
 * relative display name for the instance of the dateField, and one or two past and future instances.
 * </li>
 * <li><b>dateField</b>: allowed values are: "day", "week", "month", "year"</li>
 * </ul>
 * @return {string|null} relative date. null if the value falls out side the supported relative range.
 * @throws {Object} an instance of {@link oj.ConverterError}
 * @memberOf oj.IntlDateTimeConverter
 * @export
 */
oj.IntlDateTimeConverter.prototype.formatRelative = function(value, relativeOptions) 
{
  var localeElements = oj.LocaleData.__getBundle(), locale = oj.Config.getLocale(), converterError;
  try
  {
    return this._getWrapped().formatRelative(value, localeElements, relativeOptions, locale);
  }
  catch (e)
  {
    converterError = this._processConverterError(e, value);
    throw converterError;
  }
};

/**
 * Retrieves a hint String describing the format the value is expected to be in.
 * 
 * @return {String} a hint describing the format the value is expected to be in.
 * @export
 */
oj.IntlDateTimeConverter.prototype.getHint = function ()
{
  var resolvedOptions = this.resolvedOptions(), patternFromOptions = 
          resolvedOptions["patternFromOptions"];;
  
  // TODO: converter hints are often shown in placeholder and is a user-friendly readable pattern. 
  // Until this feature is implemented use the CLDR pattern
  return patternFromOptions ? patternFromOptions : "";
};

// Returns the hint value.
oj.IntlDateTimeConverter.prototype._getHintValue = function()
{
  var value = "";
  try
  {
    // example date 
    value =  this.format(oj.IntlDateTimeConverter._DEFAULT_DATE);
  }
  catch (e)
  {
    if (e instanceof oj.ConverterError)
    {
      // Something went wrong and we don't have a way to retrieve a valid value.
      // TODO: Log an error
      value = "";
    }
  }
  finally
  {
    return value;
  }
};


/**
 * Returns the options called with converter initialization.
 * @return {Object} an object of options.
 * @export
 */
oj.IntlDateTimeConverter.prototype.getOptions = function () 
{
  return oj.IntlDateTimeConverter.superclass.getOptions.call(this);
};

/**
 * Returns an object literal with locale and formatting options computed during initialization of 
 * the object. If options was not provided at the time of initialization, the properties will be 
 * derived from the locale defaults.
 * @return {Object} an object of resolved options. Properties whose corresponding internal 
 * properties are not present are not assigned. More properties may be included as needed.
 * <ul>
 * <li><b>locale</b> - a String value with the language tag of the locale whose localization is used 
 * for formatting.</li>
 * <li><b>numberingSystem</b>: a String value of the numbering system used. E.g. latn</li>
 * <li><b>era</b>: a String value. One of allowed values - "narrow", "short", "long"</li>
 * <li><b>year</b>: a String value. One of allowed values - "2-digit", "numeric"</li>
 * <li><b>month</b>: a String value. One of allowed values - "2-digit", "numeric", "narrow", "short"
 * , "long"</li>
 * <li><b>weekday</b>: a String value. One of the allowed values - "narrow", "short", "long"</li>
 * <li><b>day</b>: a String value. One of allowed values - "2-digit", "numeric"</li>
 * <li><b>hour</b>: String value. One of allowed values - "2-digit", "numeric"</li>
 * <li><b>minute</b>: a String value. One of allowed values - "2-digit", "numeric"</li>
 * <li><b>second</b>: a String value. One of allowed values - "2-digit", "numeric"</li>
 * <li><b>hour12</b>: a Boolean value indicating whether 12-hour format (true) or 24-hour format 
 * (false) should be used. It is only relevant when hour is also present.</li>
 * <li><b>timeZoneName</b>: String value. One of allowed values - "short", "long".</li>
 * </ul>
 * 
 * @throws a oj.ConverterError when the options that the converter was initialized with are invalid. 
 * @export
 */
oj.IntlDateTimeConverter.prototype.resolvedOptions = function ()
{
  var localeElements, locale = oj.Config.getLocale(), converterError, options = this.getOptions();
  // options are resolved and cached for a locale
  if ((locale !== this._locale) || !this._resolvedOptions)
  {
    localeElements = oj.LocaleData.__getBundle();
    try
    {
      // cache if successfully resolved
      this._resolvedOptions = this._getWrapped().resolvedOptions(localeElements, 
                                                                 options, 
                                                                 locale);
      this._locale = locale;
    }
    catch (e)
    {
      converterError = this._processConverterError(e);
      throw converterError;
    }
  }
  
  return this._resolvedOptions;
};

/**
 * Returns true if a 24-hour format is set; false otherwise.
 * @export
 */
oj.IntlDateTimeConverter.prototype.isHourInDaySet = function()
{
  var ro = this.resolvedOptions(), hour = ro['hour'], hour12 = ro['hour12'];
  if (hour && !hour12)
  {
    // if hour12=false or not set and hour is set to some value
    return true;
  }
  
  return false;
};

/**
 * Returns true if 12-hour is set; false otherwise.
 * @export
 */
oj.IntlDateTimeConverter.prototype.isHourInAMPMSet = function()
{
  var ro = this.resolvedOptions(), hour = ro['hour'], hour12 = ro['hour12'];  
  if (hour && hour12)
  {
    // if hour12==true and hour is set to some value
    return true;
  }
  
  return false;
  
};

/**
 * Returns true if minutes are shown in the time portion; false otherwise.
 * @export
 */
oj.IntlDateTimeConverter.prototype.isMinuteSet = function()
{
  return this._isOptionSet('minute');
};

/**
 * Returns true if seconds are shown in the time portion; false otherwise.
 * @export
 */
oj.IntlDateTimeConverter.prototype.isSecondSet = function()
{
  return this._isOptionSet('second');
};

/**
 * Returns true if milliseconds are shown in the time portion; false otherwise.
 * @export
 */
oj.IntlDateTimeConverter.prototype.isMilliSecondSet = function()
{
  return this._isOptionSet('millisecond');
};

/**
 * Returns true if year is shown in the date portion; false otherwise.
 * @export
 */
oj.IntlDateTimeConverter.prototype.isYearSet = function()
{
  return this._isOptionSet('year');
};

/**
 * Returns true if month is shown in the date portion; false otherwise.
 * @export
 */
oj.IntlDateTimeConverter.prototype.isMonthSet = function()
{
  return this._isOptionSet('month');
};

/**
 * Returns true if day is shown in the date portion; false otherwise.
 * @export
 */
oj.IntlDateTimeConverter.prototype.isDaySet = function()
{
  return this._isOptionSet('day');
};

/**
 * Returns true if the day name is shown in the date portion; false otherwise.
 * @export
 */
oj.IntlDateTimeConverter.prototype.isDayNameSet = function()
{
  return this._isOptionSet('weekday');
};

/**
 * Parses the value using the resolved options provided and returns a Date value.
 * 
 * @param {String|string} value to parse
 * @return {Date} the parsed value as a Date object.
 * 
 * @throws {Error} a ConverterError both when parsing fails, and if the options provided during 
 * initialization cannot be resolved correctly. 
 *  
 * @export
 */
oj.IntlDateTimeConverter.prototype.parse = function (value) 
{
  var result, parsed;
  // undefined, null and empty string values are ignored and not parsed. 
  if (value == null || value === "") 
  {
    return null;
  }
  
  var localeElements = oj.LocaleData.__getBundle(), locale = oj.Config.getLocale(), 
          resolvedOptions = this.resolvedOptions(), converterError;

  try
  {
    // date converter parses the value and returns an Object with 2 fields - 'value' and 'warning'
    result = this._getWrapped().parse(value, localeElements, resolvedOptions, locale); 
    parsed = result['value'];
    if (typeof result === "object" && parsed)
    {
      // TODO: For now log a warning when we leniently parse a value; later we plan to flash the 
      // field.
      if (result['warning'])
      {
        oj.Logger.warn("The value " + value + " was leniently parsed to represent a date " + 
                (parsed.toString) ? parsed.toString() : parsed);
      }
      
    }
    return parsed;
  }
  catch (e)
  {
    converterError = this._processConverterError(e, value);
    throw converterError;
  }
};

/**
 * Processes the error returned by the converter implementation and throws a oj.ConverterError 
 * instance.
 * @param {Error} e
 * @param {String|string|Date|Object=} value 
 * @throws an instance of oj.ConverterError
 * @private
 */
oj.IntlDateTimeConverter.prototype._processConverterError = function (e, value)
{
  var errorInfo = e['errorInfo'], summary, detail, errorCode, parameterMap, converterError, 
          propName, resourceKey;
  if (errorInfo)
  {
    errorCode = errorInfo['errorCode'];
    parameterMap = errorInfo['parameterMap'];
    oj.Assert.assertObject(parameterMap);
    propName = parameterMap['propertyName'];
    
    if (e instanceof TypeError)
    {
      if (errorCode === "optionTypesMismatch" || errorCode === "optionTypeInvalid")
      {
        converterError = oj.IntlConverterUtils.__getConverterOptionError(errorCode, parameterMap);
      }
    }
    else if (e instanceof RangeError)
    {
      if (errorCode === "optionOutOfRange")
      {
        converterError = oj.IntlConverterUtils.__getConverterOptionError(errorCode, parameterMap);
      }
      else if (errorCode === 'datetimeOutOfRange') // TODO: NLS should use lower case time
      {
        // The '{value}' is out of range. Enter a value between '{minValue}' and '{maxValue}' for 
        // '{propertyName}'.
        summary = oj.Translations.getTranslatedString("oj-converter.datetime.datetimeOutOfRange.summary", 
          {'propertyName': propName,
           'value': parameterMap['value']});
        detail = oj.Translations.getTranslatedString("oj-converter.datetime.datetimeOutOfRange.detail",
          {'minValue': parameterMap['minValue'],
           'maxValue': parameterMap['maxValue']});
         
        converterError = new oj.ConverterError(summary, detail);
      }
    }
    else if (e instanceof SyntaxError)
    {
      if (errorCode === "optionValueInvalid")
      {
        converterError = oj.IntlConverterUtils.__getConverterOptionError(errorCode, parameterMap);
      }
    }
    else if (e instanceof Error)
    {
      if (errorCode === "dateFormatMismatch")
      {
        // The '{value}' does not match the expected date format '{format}'.
        resourceKey = "oj-converter.datetime.dateFormatMismatch.summary";
      }
      else if (errorCode === "timeFormatMismatch")
      {
        // The {value} does not match the expected time format {format}.
        resourceKey = "oj-converter.datetime.timeFormatMismatch.summary";
      }
      else if (errorCode === "datetimeFormatMismatch")
      {
        resourceKey = "oj-converter.datetime.datetimeFormatMismatch.summary";
      }
      else if (errorCode === "dateToWeekdayMismatch")
      {
        summary = oj.Translations.getTranslatedString("oj-converter.datetime.dateToWeekdayMismatch.summary", 
          {'date': parameterMap['date'], 'weekday': parameterMap['weekday']});
        detail = oj.Translations.getTranslatedString("oj-converter.datetime.dateToWeekdayMismatch.detail");
        converterError = new oj.ConverterError(summary, detail);
      }
      
      if (resourceKey)
      {
        summary = oj.Translations.getTranslatedString(resourceKey, 
          {'value': value || parameterMap['value'],
           'format': parameterMap['format']});
        
        detail = oj.Translations.getTranslatedString("oj-converter.hint.detail",
          {'exampleValue': this._getHintValue()}); 
          
        converterError = new oj.ConverterError(summary, detail);
      }
    }
  }
  
  if (!converterError)
  {
    // An error we are unfamiliar with. Get the message and set as detail
    summary = e.message; // TODO: What should the summary be when it's missing??
    detail = e.message;
    converterError = new oj.ConverterError(summary, detail);
  }
  
  return converterError;
};

/**
 * Checks to see if an option is present in the resolved options.
 * @param {string} optionName
 * @returns {boolean} true if optionName is present.
 * @private
 */
oj.IntlDateTimeConverter.prototype._isOptionSet = function (optionName)
{
  var ro = this.resolvedOptions(), hasOption = ro[optionName] ? true : false;
  return hasOption;
};

/*
 * Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
 */
/**
 * Constructs a DateTimeRangeValidator that ensures the value provided is within a given range
 * @param {Object=} options an object literal used to provide:<p>
 * <ul>
 *   <li><b>min</b>: The minimum datetime value of the entered value.<p>
 *   <li><b>max</b>: The maximum datetime value of the entered value.<p>
 *   <li><b>hint</b>: an optional object literal of hint text to be used. There is no default hint 
 *   provided by this validator.<p>
 *    <ul>     
 *      <li>'hintMaximum': Hint message to be used, to give a hint about the allowed maximum.<p>
 *        Parameters:
 *        <ul>
 *          <li>{max} the maximum </li>
 *        </ul>
 *        <p>Usage: Enter a datetime less than or equal to {max}</p>
 *      </li>
 *      <li>'hintMinimum': Hint message to be used, to give a hint about the allowed minimum.<p>
 *        Parameters:
 *        <ul>
 *          <li>{min} the minimum</li>
 *        </ul>
 *        <p>Usage: Enter a datetime greater than or equal to {min}</p>
 *      </li>
 *      <li>'hintInRange': Hint message to be used, to give a hint about the allowed range.<p>
 *        Parameters:<p>
 *        <ul>
 *          <li>{min} the minimum</li>
 *          <li>{max} the maximum</li>
 *        </ul>
 *        <p>Usage: Enter a datetime between {min} and {max}</p>
 *      </li>
 *     </ul>
 *   </li>
 *   <li><b>message</b>: an optional object literal of custom error messages to be used:<p>
 *    <ul>
 *      <li>'messageMaximum': The detail error message to be used when input value exceeds the maximum value set.<p>
 *        Parameters:<p>
 *        <ul>
 *          <li>{value} value entered by the user</li>
 *          <li>{max} the maximum allowed value</li>
 *        </ul>
 *        <p>Usage: Entered {value} with max being {max}</p>
 *      </li>
 *      <li>'messageMinimum': The detail error message to be used when input value is less than the set minimum value.<p>
 *        Parameters:<p>
 *        <ul>
 *          <li>{value} value entered by the user</li>
 *          <li>{max} the minimum allowed value</li>
 *        </ul>
 *        <p>Usage: Entered {value} with min being {min}</p>
 *      </li>
 *      <li>'messageNotInRange': The detail error message to be used if input value is not within the range, when minimum and maximum is set.<p>
 *        Parameters:<p>
 *        <ul>
 *          <li>{value} value entered by the user</li>
 *          <li>{min} the minimum allowed value</li>
 *          <li>{max} the maximum allowed value</li>
 *        </ul>
 *        <p>Usage: Entered {value} with min and max being {min}, {max}</p>
 *      </li>
 *    </ul>
 *  </li>
 * </ul>
 * @export
 * @constructor
 */
oj.DateTimeRangeValidator = function _DateTimeRangeValidator(options)
{
  this.Init(options);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.DateTimeRangeValidator, oj.Validator, "oj.DateTimeRangeValidator");

/**
 * Initializes validator instance with the set options
 * @param {Object=} options
 * @export
 */
oj.DateTimeRangeValidator.prototype.Init = function (options)
{
  oj.DateTimeRangeValidator.superclass.Init.call(this);
  this._min = options["min"];
  this._max = options["max"];
  this._converter = oj.IntlConverterUtils.getConverterInstance(options["converter"]);
  if (options)
  {
    this._hint = options['hint'] || {};
    this._customMessage = options['message'] || {};
  }
};

/**
 * Validates the minimum + maximum conditions
 *
 * @param {Object} value that is being validated
 * @returns {Object} original if validation was successful
 *
 * @throws {Error} when there is no match
 * @export
 */
oj.DateTimeRangeValidator.prototype.validate = function (value)
{
  var messageNotInRange, messageMinimum, messageMaximum,
      min = this._min, 
      max = this._max, 
      summary = "", 
      detail = "", 
      translations = oj.Translations, 
      customMessage = this._customMessage,
      minStr = min && this._converter ? this._converter['format'](min) : min,
      maxStr = max && this._converter ? this._converter['format'](max) : max;
  
  if (min !== null && max !== null)
  {
    //range
    if ((value >= min && value <= max) || min > max)
    {
      return value;
    }
	
    messageNotInRange = customMessage["messageNotInRange"];
    summary = translations.getTranslatedString('oj-validator.range.datetime.range.summary');
    detail = messageNotInRange ? 
      translations.applyParameters(messageNotInRange, {"value": value, "min": minStr, "max": maxStr}) : 
      translations.getTranslatedString('oj-validator.range.datetime.range.detail', {"min": minStr, "max": maxStr});
  }
  else 
  {
    //only min
    if (min !== null)
    {
      if (value >= min)
      {
        return value;
      }
	  
      messageMinimum = customMessage["messageMinimum"];
      summary = translations.getTranslatedString('oj-validator.range.datetime.min.summary');
      detail = messageMinimum ? 
        translations.applyParameters(messageMinimum, {"value": value, "min": minStr}) : 
        translations.getTranslatedString('oj-validator.range.datetime.min.detail', {"min": minStr});
    }
    //max only
    else 
    {
      if (max === null || value <= max)
      {
        return value;
      }
	    messageMaximum = customMessage["messageMaximum"];
      summary = translations.getTranslatedString('oj-validator.range.datetime.max.summary');
      detail = messageMaximum ? 
        translations.applyParameters(messageMaximum, {"value": value, "max": maxStr}) : 
        translations.getTranslatedString('oj-validator.range.datetime.max.detail', {"max": maxStr});
    }
  }

  throw new oj.ValidatorError(summary, detail);
};

/**
 * A message to be used as hint. There is no default hint for this property.
 *
 * @returns {String|null} a hint message or null if no hint is available in the options
 * @export
 */
oj.DateTimeRangeValidator.prototype.getHint = function ()
{
  var hint = null, hints = this._hint, 
      hintInRange = hints["hintInRange"], hintMinimum = hints["hintMinimum"], hintMaximum = hints["hintMaximum"],
      min = this._min, 
      max = this._max, 
      minStr = min && this._converter ? this._converter['format'](min) : min,
      maxStr = max && this._converter ? this._converter['format'](max) : max,
      translations = oj.Translations;
	  
  if (min !== null && max !== null) 
  {
    hint = hintInRange ? translations.applyParameters(hintInRange, {"min": minStr, "max": maxStr}) : 
            translations.getTranslatedString('oj-validator.range.datetime.range.hint', {"min": minStr, "max": maxStr});
  }
  else if (min !== null)
  {
    hint = hintMinimum ?  translations.applyParameters(hintMinimum, {"min": min}) :
                          translations.getTranslatedString('oj-validator.range.datetime.min.hint', {"min": minStr});
  }
  else if (max !== null)
  {
    hint = hintMaximum ?  translations.applyParameters(hintMaximum, {"max": max}) :
                          translations.getTranslatedString('oj-validator.range.datetime.max.hint', {"max": maxStr});
  }

  return hint;
};
/*
 * Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
 */

/**
 * Constructs a RequiredValidator that ensures that the value provided is not empty
 * @param {Object=} options an object literal used to provide an optional hint and error message.<p>
 * <ul>
 * <li><b>hint</b>: an optional hint text. There is no default hint provided by this validator.</li>
 * <li>
 * <b>messageSummary</b>: a custom error message summarizing the error <p>
 * Parameters: <p>
 * {label} - label of the component for which this message applies. The label may not always be 
 * available depending on the usage of the validator. <p>
 * Examples:<p>
 * "'{label}' Required" 
 * </li>
 * <li><b>messageDetail</b>: a custom error message to be used for creating detail part of message, 
 * when the value provided is empty. NOTE: the parameter 'message' has been deprecated.<p>
 * Parameters:<p>
 * {label} - label text of the component for which this message applies. 
 * Examples:<p>
 * "A value is required for the field '{label}'.<br/>
 * </li>
 * </ul>
 * @export
 * @constructor
 */
oj.RequiredValidator = function(options) 
{
  this.Init(options);
};

// Subclass from oj.Object or oj.Validator. It does not matter
oj.Object.createSubclass(oj.RequiredValidator, oj.Validator, "oj.RequiredValidator");

// key to access required validator specific resources in the bundle 
oj.RequiredValidator._BUNDLE_KEY_DETAIL = "oj-validator.required.detail";
oj.RequiredValidator._BUNDLE_KEY_SUMMARY = "oj-validator.required.summary";

/**
 * Initializes validator instance with the set options
 * @param {Object=} options
 * @export
 */
oj.RequiredValidator.prototype.Init = function(options) 
{
  oj.RequiredValidator.superclass.Init.call(this);
  this._options = options;
};

/**
 * Validates value to be non-empty
 * 
 * @param {Object|string|number} value that is being validated 
 * @returns {boolean} true if validation was was successful the value is non-empty
 * 
 * @throws {Error} when fails required-ness check
 * @export
 */
oj.RequiredValidator.prototype.validate = function(value)
{
  var localizedDetail, localizedSummary, detail, summary, params = {}, label = "";
  // checks for empty arrays and String. Objects are considered non-null.
  // Need to specifically test for if value is 0 first if number is passed on.
  if ((typeof value === "number" && value === 0) || (value && value.length !== 0))
  {
    return true;
  }
  else
  {
    if (this._options)
    {
      // we have deprecated support for message param and instead use messageDetail.
      detail = this._options['messageDetail'] || this._options['message'] || null;
      summary = this._options['messageSummary'] || null;
      label = this._options['label'] || "";
    }
    params = {'label': label};
    localizedSummary = (summary) ? oj.Translations.applyParameters(summary, params) :
            oj.Translations.getTranslatedString(this._getSummaryKey(), params);
    localizedDetail = (detail) ? 
    oj.Translations.applyParameters(detail, params) : 
    oj.Translations.getTranslatedString(this._getDetailKey(), params);
    
    throw new oj.ValidatorError(localizedSummary, localizedDetail);
  }

};

/**
 * A message to be used as hint, when giving a hint on the expected pattern. There is no default 
 * hint for this property.
 * 
 * @returns {String|string|null} a hint message or null if no hint is available in the options
 * @export
 */
oj.RequiredValidator.prototype.getHint = function()
{
  var hint = "";
  if (this._options && (this._options['hint']))
  {
    hint = oj.Translations.getTranslatedString(this._options['hint']);
  }
  
  return hint;
};

oj.RequiredValidator.prototype._getSummaryKey = function ()
{
  return oj.RequiredValidator._BUNDLE_KEY_SUMMARY;
};

oj.RequiredValidator.prototype._getDetailKey = function ()
{
  return oj.RequiredValidator._BUNDLE_KEY_DETAIL;
};
/*
 * Copyright (c) 2013, Oracle and/or its affiliates. All rights reserved.
 */

/**
 * Constructs a LengthValidator that ensures the value entered is within a given length. 
 * 
 * @param {Object=} options an object literal used to provide:<p>
 *  <ul>
 *    <li><strong>min</strong>: A number that is the minimum length of the value.</li>
 *    <li><strong>max</strong>: a number that is the maximum length of the value.</li>
 *    <li><strong>hint</strong>: optional object literal of hint text to be used. There is no default 
 *    hint provided by this validator.</li>
 *      <ul>     
 *        <li>'hintMaximum': Hint message to be used, to indicate the allowed maximum.<p>
 *          Parameters:
 *          <ul>
 *            <li>{max} the maximum</li>
 *          </ul>
 *          Usage: Enter {max} or fewer characters
 *        </li>
 *        <li>'hintMinimum': Hint message to be used, to indicate the allowed minimum.<p>
 *        Parameters:
 *          <ul>
 *            <li>{min} the minimum</li>
 *          </ul>
 *          Usage: Enter {min} or more characters</li>
 *        <li>'hintInRange': Hint message to be used, to indicate the allowed range.<p>
 *        Parameters:
 *          <ul>
 *            <li>{min} the minimum</li>
 *            <li>{max} the maximum</li>
 *          </ul>
 *          Usage: Enter between {min} and {max} characters
 *        </li>
 *      </ul>
 *    </li>
 *    <li><strong>message</strong>: optional object literal of custom error message to be used:<p>
 *      <ul>
 *        <li>'messageMaximum': The detail error message to be used as the error message, when 
 *        the length of the input value exceeds the maximum value set.<p>
 *        Parameters:
 *          <ul>
 *            <li>{value} value entered by the user</li>
 *            <li>{max} the maximum allowed value</li>
 *          </ul>
 *          Usage: The {value} has too many characters. Enter {max} or fewer characters, not more.
 *        </li>
 *        <li>'messageMinimum': The detail error message to be used as the error message, when 
 *        input value is less than the set minimum value.<p>
 *        Parameters:
 *          <ul>
 *            <li>{value} value entered by the user</li>
 *            <li>{min} the minimum allowed value</li>
 *          </ul>
 *          Usage: The {value} has too few characters. Enter {min} or more characters, not less.
 *        </li>
 *        <li>'messageNotInRange': The detail error message to be used as the error messages, when 
 *        input value is not with in the range, set by min and max options.<p>
 *        Parameters:<p>
 *          <ul>
 *            <li> {value} value entered by the user</li>
 *            <li> {min} the minimum allowed value</li>
 *            <li> {max} the maximum allowed value</li>
 *          </ul>
 *          Usage: The number of characters in {value} is out of range. Enter {min} or more characters 
 *          up to a maximum of {max}.
 *        </li>
 *      </ul>
 *    </li>
 *  </ul>
 * @export
 * @constructor
 */
oj.LengthValidator = function (options)
{
  this.Init(options);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.LengthValidator, oj.Validator, "oj.LengthValidator");

/**
 * Initializes validator instance with the set options
 * @param {Object=} options
 * @export
 */
oj.LengthValidator.prototype.Init = function (options)
{
  oj.LengthValidator.superclass.Init.call(this);
  this._min = options["min"];
  this._max = options["max"];
  
  if (options)
  {
    this._hint = options['hint'] || {};
    this._customMessage = options['message'] || {};
  }
};

oj.LengthValidator.prototype.getHint = function()
{
  var hint = null, hints = this._hint, 
      hintInRange = hints["hintInRange"], hintMinimum = hints["hintMinimum"], 
      hintMaximum = hints["hintMaximum"],
      translations = oj.Translations,
      min = this._min !== undefined ? parseInt(this._min, 10) : null, 
      max = this._max !== undefined ? parseInt(this._max, 10) : null, params;
	  
  if (min !== null && max !== null) 
  {
    if (min !== max)
    {
      params = {"min": min, "max": max};
      hint = hintInRange ? translations.applyParameters(hintInRange, params) : 
	                       translations.getTranslatedString('oj-validator.length.range.hint', params);
    }
    else
    {
      hint = translations.getTranslatedString('oj-validator.length.exact.hint', {'length': min});
    }
  }
  else if (min !== null)
  {
    params = {"min": min};
    hint = hintMinimum ?  translations.applyParameters(hintMinimum, params) :
	                      translations.getTranslatedString('oj-validator.length.min.hint', params);
  }
  else if (max !== null)
  {
    params = {"max": max};
    hint = hintMaximum ?  translations.applyParameters(hintMaximum, params) :
                          translations.getTranslatedString('oj-validator.length.max.hint', params);
  }

  return hint;
};

/**
 * Validates the length of vaue is greater than minimum and/or less than maximum.
 *
 * @param {string} value that is being validated
 * @returns {string} original if validation was successful
 *
 * @throws {Error} when the length is out of range.
 * @export
 */
oj.LengthValidator.prototype.validate  = function(value)
{
  var summary = "", detail = "", string = "" + value, length = string.length,
      customMessage = this._customMessage, 
      messageNotInRange = customMessage["messageNotInRange"], 
      messageMinimum = customMessage["messageMinimum"], 
      messageMaximum = customMessage["messageMaximum"],
      translations = oj.Translations, params,
      min = this._min !== undefined ? parseInt(this._min, 10) : null, 
      max = this._max !== undefined ? parseInt(this._max, 10) : null;
  
  // If only min is set and length is at least min, or 
  // if only max is set and length is at most max, or
  // if length is between min and max or
  // if neither min or max is set return with no error.
  if ((min === null || length >= this._min) &&
     ((max === null) || (length <= this._max)))
  {
    return string;
  }
  else
  {
    if ((this._min > 0) && (max !== null))

    {
      var exact = (this._min === this._max);
      if (exact)
      {
        params = {"value": value, "length": min};
        summary = translations.getTranslatedString('oj-validator.length.exact.summary');
        detail = translations.getTranslatedString('oj-validator.length.exact.detail', params);
      }
      else
      {
        params = {"value": value, "min": min, "max": max};
        summary = translations.getTranslatedString('oj-validator.length.range.summary');
        detail = messageNotInRange ? translations.applyParameters(messageNotInRange, params) : 
                    translations.getTranslatedString('oj-validator.length.range.detail', params);
        
      }
    }
    else if (length < this._min) //too short
    {
      params = {"value": value, "min": min};
      summary = translations.getTranslatedString('oj-validator.length.min.summary');
      detail = messageMinimum ? translations.applyParameters(messageMinimum, params) : 
                  translations.getTranslatedString('oj-validator.length.min.detail', params);
    }
    else // too long
    {
      params = {"value": value, "max": max};
      summary = translations.getTranslatedString('oj-validator.length.max.summary');
      detail = messageMaximum ? translations.applyParameters(messageMaximum, params) : 
                    translations.getTranslatedString('oj-validator.length.max.detail', params);
    }
    
    throw new oj.ValidatorError(summary, detail);
  }
};
/*
 * Copyright (c) 2013, Oracle and/or its affiliates. All rights reserved.
 */
/**
 * Constructs a NumberRangeValidator that ensures the value provided is within a given range
 * @param {Object=} options an object literal used to provide:<p>
 *  <ul>
 *    <li><strong>min</strong>: The minimum number value of the entered value.</li>
 *    <li><strong>max</strong>: The maximum number value of the entered value.</li>
 *    <li><strong>hint</strong>: optional object literal of hint text to be used.</li>
 *      <ul>     
 *        <li>'hintMaximum': Hint message to be used, to indicate the allowed maximum.<p>
 *          Parameters:
 *          <ul>
 *            <li>{max} the maximum</li>
 *          </ul>
 *          Usage: Enter a number less than or equal to {max}
 *        </li>
 *        <li>'hintMinimum': Hint message to be used, to indicate the allowed minimum.<p>
 *        Parameters:
 *          <ul>
 *            <li>{min} the minimum</li>
 *          </ul>
 *          Usage: Enter a number greater than or equal to {min}</li>
 *        <li>'hintInRange': Hint message to be used, to indicate the allowed range.<p>
 *        Parameters:
 *          <ul>
 *            <li>{min} the minimum</li>
 *            <li>{max} the maximum</li>
 *          </ul>
 *          Usage: Enter a number between {min} and {max}
 *        </li>
 *      </ul>
 *    </li>
 *    <li><strong>message</strong>: optional object literal of custom error message to be used:<p>
 *      <ul>
 *        <li>'messageMaximum': The detail error message to be used as the error message, when 
 *        input value exceeds the maximum value set.<p>
 *        Parameters:
 *          <ul>
 *            <li>{value} value entered by the user</li>
 *            <li>{max} the maximum allowed value</li>
 *          </ul>
 *          Usage: The number {value} must be less than or equal to {max}.
 *        </li>
 *        <li>'messageMinimum': The detail error message to be used as the error message, when 
 *        input value is less than the set minimum value.<p>
 *        Parameters:
 *          <ul>
 *            <li>{value} value entered by the user</li>
 *            <li>{min} the minimum allowed value</li>
 *          </ul>
 *          Usage: The number {value} must be greater than or equal to {min}.
 *        </li>
 *        <li>'messageNotInRange': The detail error message to be used as the error messages, when 
 *        input value is not with in the range, set by min and max options.<p>
 *        Parameters:<p>
 *          <ul>
 *            <li> {value} value entered by the user</li>
 *            <li> {min} the minimum allowed value</li>
 *            <li> {max} the maximum allowed value</li>
 *          </ul>
 *          Usage: The number {value} is not between {min} and {max}.
 *        </li>
 *      </ul>
 *    </li>
 *  </ul>
 * @export
 * @constructor
 */
oj.NumberRangeValidator = function _NumberRangeValidator(options)
{
  this.Init(options);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.NumberRangeValidator, oj.Validator, "oj.NumberRangeValidator");

/**
 * Initializes validator instance with the set options
 * @param {Object=} options
 * @export
 */
oj.NumberRangeValidator.prototype.Init = function (options)
{
  oj.NumberRangeValidator.superclass.Init.call(this);
  this._min = options["min"];
  this._max = options["max"];
  this._converter = oj.IntlConverterUtils.getConverterInstance(options['converter']);
  
  if (options)
  {
    this._hint = options['hint'] || {};
    this._customMessage = options['message'] || {};
  }
};

/**
 * Validates the minimum + maximum conditions
 *
 * @param {string|number} value that is being validated
 * @returns {string} original if validation was successful
 *
 * @throws {Error} when value is out of range
 * @export
 */
oj.NumberRangeValidator.prototype.validate = function (value)
{
  var string = value ? value.toString() : value, 
      numberValue = parseFloat(string), customMessage = this._customMessage, 
      messageNotInRange = customMessage["messageNotInRange"], 
      messageMinimum = customMessage["messageMinimum"], 
      messageMaximum = customMessage["messageMaximum"],
      min = this._min !== undefined ? parseFloat(this._min) : null, 
      max = this._max !== undefined ? parseFloat(this._max) : null, 
      minStr = min && this._converter ? this._converter['format'](min) : min,
      maxStr = max && this._converter ? this._converter['format'](max) : max,
      summary = "", 
      detail = "", 
	  params = null,
      translations = oj.Translations;
  
  if (min !== null && max !== null)
  {
    //range
    if ((numberValue >= min && numberValue <= max) || min > max)
    {
      return string;
    }
	
	params = {"value": value, "min": minStr, "max": maxStr};
    summary = translations.getTranslatedString('oj-validator.range.number.range.summary');
    detail = messageNotInRange ? translations.applyParameters(messageNotInRange, params) : 
                translations.getTranslatedString('oj-validator.range.number.range.detail', params);
  }
  else 
  {
    //only min
    if (min !== null)
    {
      if (numberValue >= min)
      {
        return string;
      }
	  
	  params = {"value": value, "min": minStr};
      summary = translations.getTranslatedString('oj-validator.range.number.min.summary');
      detail = messageMinimum ? translations.applyParameters(messageMinimum, params) : 
                  translations.getTranslatedString('oj-validator.range.number.min.detail', params);
    }
    //max only
    else 
    {
      if (max === null || numberValue <= max)
      {
        return string;
      }
	  
	  params = {"value": value, "max": maxStr};
      summary = translations.getTranslatedString('oj-validator.range.number.max.summary');
      detail = messageMaximum ? translations.applyParameters(messageMaximum, params) : 
                    translations.getTranslatedString('oj-validator.range.number.max.detail', params);
    }
  }

  throw new oj.ValidatorError(summary, detail);
};

/**
 * @returns {String|null} a hint message or null if no hint is available in the options
 * @export
 */
oj.NumberRangeValidator.prototype.getHint = function ()
{
  var hint = null, hints = this._hint, 
      hintInRange = hints["hintInRange"], hintMinimum = hints["hintMinimum"], hintMaximum = hints["hintMaximum"],
      translations = oj.Translations,
      min = this._min !== undefined ? parseFloat(this._min) : null, 
      max = this._max !== undefined ? parseFloat(this._max) : null,
      minStr = min && this._converter ? this._converter['format'](min) : min,
      maxStr = max && this._converter ? this._converter['format'](max) : max;
	  
  if (min !== null && max !== null) 
  {
  	hint = hintInRange ? translations.applyParameters(hintInRange, {"min": minStr, "max": maxStr}) : 
	                       translations.getTranslatedString('oj-validator.range.number.range.hint', {"min": minStr, "max": maxStr});
  }
  else if (min !== null)
  {
    hint = hintMinimum ?  translations.applyParameters(hintMinimum, {"min": minStr}) :
	                      translations.getTranslatedString('oj-validator.range.number.min.hint', {"min": minStr});
  }
  else if (max !== null)
  {
    hint = hintMaximum ?  translations.applyParameters(hintMaximum, {"max": maxStr}) :
                          translations.getTranslatedString('oj-validator.range.number.max.hint', {"max": maxStr});
  }

  return hint;
};
/*
 * Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
 */

/**
 * A factory implementation to create the built-in number converter of type 
 * {@link oj.IntlNumberConverter}. 
 * 
 * @name oj.NumberConverterFactory
 * @class
 * 
 * @example <caption>create an instance of the jet datetime converter using the options provided</caption>
 * var ncf = oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_NUMBER); 
 * var salaryOptions = {currency: "EUR" , pattern: "¤#,##0.00;(¤#,##0.00)"};
 * var salaryConverter = ncf.createConverter(salaryOptions);
 * @public
 */
oj.NumberConverterFactory = (function () 
{
  
  function _createNumberConverter(options) 
  {
    return new oj.IntlNumberConverter(options);
  }
  
  return {
    /**
     * Creates an immutable (jet) number converter instance.
     * 
     * @param {Object=} options an object literal used to provide optional information to initialize 
     * the jet number converter with. For details on what to pass for options, refer to 
     * {@link oj.IntlNumberConverter}
     * 
     * @return {oj.IntlNumberConverter}
     * @memberOf oj.NumberConverterFactory
     * @public
     */
    'createConverter': function(options) {
      return _createNumberConverter(options);
    }
  };
}()); // notice immediate invocation of anonymous function

/** Register the default factory provider function */
oj.Validation.__registerDefaultConverterFactory(oj.ConverterFactory.CONVERTER_TYPE_NUMBER, // factory name
                               oj.NumberConverterFactory);


/**
 * A factory implementation to create the built-in datetime converter of type 
 * {@link oj.IntlDateTimeConverter}. 
 * 
 * @name oj.DateTimeConverterFactory
 * @public
 * @class
 * @example <caption>create an instance of the jet datetime converter using the options provided</caption>
 * var dtcf = oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME);  
 * var dateOptions = {year: '2-digit', month: 'numeric', day: 'numeric'};
 * var dateConverter = dtcf.createConverter(dateOptions);
 */
oj.DateTimeConverterFactory = (function () 
{
  function _createDateTimeConverter(options) 
  {
    return new oj.IntlDateTimeConverter(options);
  }
  
  /**
   * 
   * @public
   */
  return {
    /**
     * Creates an immutable (jet) datetime converter instance. 
     * 
     * @param {Object=} options an object literal used to provide an optional information to 
     * initialize the jet datetime converter. For details on what to pass for options, refer to 
     * @link oj.IntlDateTimeConverter.
     * 
     * @return {oj.IntlDateTimeConverter} 
     * @memberOf oj.DateTimeConverterFactory
     * @public
     */
    'createConverter' : function(options) {
      return _createDateTimeConverter(options);
    }
  };
}()); // notice immediate invocation of anonymous function

/** Register the default factory provider function */
oj.Validation.__registerDefaultConverterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME, // factory name
                               oj.DateTimeConverterFactory);


// JET VALIDATOR FACTORIES 

/**
 * A factory implementation to create an instance of the built-in required validator of type 
 * {@link oj.RequiredValidator}. 
 * 
 * @example <caption>create an instance of the required validator using the factory</caption>
 * var rvf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_REQUIRED); 
 * var options = {'hint' : 'a value is required for this field'};
 * var requiredValidator = rvf.createValidator(options);
 * 
 * @name oj.RequiredValidatorFactory
 * @class
 * @public
 */
oj.RequiredValidatorFactory = (function () 
{
  
  function _createRequiredValidator(options) 
  {
    return new oj.RequiredValidator(options);
  }
  
  return {
    /**
     * Creates an immutable validator instance of type @link oj.RequiredValidator that ensures that 
     * the value provided is not empty.  
     * 
     * @param {Object=} options an object literal used to provide an optional hint and error 
     * message. See {@link oj.RequiredValidator} for details.<p>
     * 
     * @return {oj.RequiredValidator}
     * @memberOf oj.RequiredValidatorFactory
     * @public
     */
    'createValidator': function(options) {
      return _createRequiredValidator(options);
    }
  };
}()); // notice immediate invocation of anonymous function

/** Register the default factory provider function */
oj.Validation.__registerDefaultValidatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_REQUIRED,
                                                oj.RequiredValidatorFactory);
                               
/**
 * A factory implementation that creates an instance of the built-in regExp validator of type 
 * {@link oj.RegExpValidator}.
 * 
 * @example <caption>create an instance of the regExp validator using the factory</caption>
 * var rvf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_REGEXP);  
 * var usernameValidator = rvf.createValidator(
 *  {
 *    'pattern': '[a-zA-Z0-9]{3,}', 
 *    'messageDetail': 'You must enter at least 3 letters or numbers'}
 *  });
 * 
 * @name oj.RegExpValidatorFactory
 * @class
 * @public
 */
oj.RegExpValidatorFactory = (function () 
{
  
  function _createRegExpValidator(options) 
  {
    return new oj.RegExpValidator(options);
  }
  
  return {
    /**
     * Creates an immutable validator instance of type {@link oj.RegExpValidator} that ensures the value 
     * matches the provided pattern. 
     * 
     * @param {Object} options an object literal used to provide the pattern, an optional hint, error 
     * message among others. See {@link oj.RegExpValidator} for details.<p>
     * 
     * 
     * @return {oj.RegExpValidator} 
     * @memberOf oj.RegExpValidatorFactory
     * @public
     */
    'createValidator': function(options) {
      return _createRegExpValidator(options);
    }
  };
}()); // notice immediate invocation of anonymous function

/** Register the default factory provider function */
oj.Validation.__registerDefaultValidatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_REGEXP,
                                                oj.RegExpValidatorFactory);
                                        
/**
 * a factory implementation to create an instance of the built-in dateTimeRange validator of type 
 * {@link oj.DateTimeRangeValidator}. 
 * 
 * @example <caption>create an instance of the dateTimeRange validator using the factory</caption>
 * var drvf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE);  
 * var birthdateOptions = {min: new Date(1930, 00, 01), max: new Date(1995, 11,31)};
 * var birthdateValidator = drvf.createValidator(birthdateOptions);
 *  
 * @name oj.DateTimeRangeValidatorFactory
 * @class
 * @public
 */
oj.DateTimeRangeValidatorFactory = (function () 
{
  
  function _createDateTimeRangeValidator(options) 
  {
    return new oj.DateTimeRangeValidator(options);
  }
  
  return {
    /**
     * Creates an immutable validator instance of type {@link oj.DateTimeRangeValidator} that ensures 
     * that the (datetime) value provided is within a given range.
     * 
     * @param {Object=} options an object literal used to provide the minimum, maximum and other 
     * optional values. See {@link oj.DateTimeRangeValidator} for details.<p>
     * 
     * @return {oj.DateTimeRangeValidator}
     * @memberOf oj.DateTimeRangeValidatorFactory
     * @public
     */
    'createValidator': function(options) {
      return _createDateTimeRangeValidator(options);
    }
  };
}()); // notice immediate invocation of anonymous function

/** Register the default factory provider function */
oj.Validation.__registerDefaultValidatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE,
                                                oj.DateTimeRangeValidatorFactory);
												
/**
 * a factory method to create an instance of the built-in dateRestriction validator of type 
 * {@link oj.DateRestrictionValidator}. 
 * 
 * @example <caption>create an instance of the dateRestriction validator using the factory </caption>
 * var drvf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATERESTRICTION);
 * var drValidator = drvf.createValidator();
 *  
 * @name oj.DateRestrictionValidatorFactory
 * @class
 * @public
 */
oj.DateRestrictionValidatorFactory = (function () 
{
  
  function _createDateRestrictionValidator(options) 
  {
    return new oj.DateRestrictionValidator(options);
  }
  
  return {
    /**
     * Creates an immutable validator instance of type oj.DateRestrictionValidator that ensures that the 
     * (date) value provided is not in a disabled entry of dayMetaData.
     * 
     * @param {Object=} options an object literal used to provide the dayMetaData optional value. 
     * See {@link oj.ojInputDate} and {@link oj.DateRestrictionValidator} for details.<p>
     * 
     * @return {oj.DateRestrictionValidator}
     * @memberOf oj.DateRestrictionValidatorFactory
     * @public
     */
    'createValidator': function(options) {
      return _createDateRestrictionValidator(options);
    }
  };
}()); // notice immediate invocation of anonymous function

/** Register the default factory provider function */
oj.Validation.__registerDefaultValidatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATERESTRICTION,
                                                oj.DateRestrictionValidatorFactory);
                                        
/**
 * a factory method to create an instance of a built-in numberRange validator of type 
 * {@link oj.NumberRangeValidator}. 
 * 
 * @example <caption>create an instance of the numberRange validator using the factory</caption>
 * var lrvf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_NUMBER_RANGE);
 * var options = {hint: {hintMinimum: 'Enter a value greater than {min}'}, min: 100};
 * var lrValidator = lrvf.createValidator(options);
 * 
 * @name oj.NumberRangeValidatorFactory
 * @class
 * @public
 */
oj.NumberRangeValidatorFactory = (function () 
{
  
  function _createNumberRangeValidator(options) 
  {
    return new oj.NumberRangeValidator(options);
  }
  
  return {
    /**
     * Creates an immutable validator instance of type {@link oj.NumberRangeValidator} that ensures 
     * that the value provided is within a given range.
     * 
     * @param {Object=} options an object literal used to provide the minimum, maximum and other 
     * optional values. See {@link oj.NumberRangeValidator} for details.<p>
     * 
     * @return {oj.NumberRangeValidator}
     * @memberOf oj.NumberRangeValidatorFactory
     * @public
     */
    'createValidator': function(options) {
      return _createNumberRangeValidator(options);
    }
  };
}()); // notice immediate invocation of anonymous function

/** Register the default factory provider function */
oj.Validation.__registerDefaultValidatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_NUMBERRANGE,
                                                oj.NumberRangeValidatorFactory);
                                        
/**
 * Returns an instance of oj.LengthValidatorFactory that provides a factory method to create an 
 * instance of a length validator. 
 * 
 * @example <caption>create an instance of the length validator using the factory</caption>
 * var lvf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_LENGTH);
 * var options = {hint: {hintMaximum: 'Enter {max} or fewer characters'}, max: 10};
 * var lValidator = lvf.createValidator(options);
 * 
 * @name oj.LengthValidatorFactory
 * @class
 * @public
 */
oj.LengthValidatorFactory = (function () 
{
  
  function _createLengthValidator(options) 
  {
    return new oj.LengthValidator(options);
  }
  
  return {
    /**
     * Creates an immutable validator instance of type oj.LengthValidator that ensures that the 
     * value provided is withing a given length.
     * 
     * @param {Object=} options an object literal used to provide the 'minimum', 'maximum' and other 
     * optional values. See {@link oj.LengthValidator} for details.<p>
     * 
     * @return {oj.LengthValidator}
     * @memberOf oj.LengthValidatorFactory
     * @public
     */
    'createValidator': function(options) {
      return _createLengthValidator(options);
    }
  };
}()); // notice immediate invocation of anonymous function

/** Register the default factory provider function */
oj.Validation.__registerDefaultValidatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_LENGTH,
                                                oj.LengthValidatorFactory);
oj.IntlConverterUtils = {};

/**
 * Given either an Object literal representing a 'converter' option (used in components) or a 
 * converter instance of type oj.Converter, this method returns the converter instance.
 * 
 * @param {Object} converterOption
 * @returns {Object} converterInstance or null if a converter cannot be determined
 * @expose
 */
oj.IntlConverterUtils.getConverterInstance = function (converterOption)
{
  var cTypeStr = "", cOptions = {}, converterInstance = null, cf;
  
  if (converterOption)
  {
    if (typeof converterOption === "object")
    {
      // TODO: Should we check that it duck types oj.Converter?
      if (converterOption instanceof oj.Converter || 
          (converterOption['parse'] && typeof converterOption['parse'] === "function") || 
          (converterOption['format'] && typeof converterOption['format'] === "function"))
      {
        // we are dealing with a converter instance
        converterInstance = converterOption;
      }
      else 
      {
        // check if there is a type set
        cTypeStr = converterOption['type'];
        cOptions = converterOption['options'] || {};
      }
    }

    if (!converterInstance)
    {
      // either we have an object literal or just plain string.
      cTypeStr = cTypeStr || converterOption;
      if (cTypeStr && typeof cTypeStr === "string")
      {
        // if we are passed a string get registered type. 
        cf = oj.Validation.converterFactory(cTypeStr);
        converterInstance = cf.createConverter(cOptions);
      }
    }
  }
  
  return converterInstance;
};

// PACKAGE PRIVATE

/**
 * Processes an converter option error and returns a oj.ConverterERror instance.
 * @param {string} errorCode
 * @param {Object} parameterMap
 * @return {Object} an oj.ConverterError instance
 * @private
 */
oj.IntlConverterUtils.__getConverterOptionError = function(errorCode, parameterMap)
{
  oj.Assert.assertObject(parameterMap);
  var summary = "", detail = "", propName = parameterMap['propertyName'], reqPropName, 
          propValueValid;
  
  if (errorCode === "optionTypesMismatch")
  {
    reqPropName = parameterMap['requiredPropertyName'];
    propValueValid = parameterMap['requiredPropertyValueValid'];
    // Summary: A value for the property '{requiredPropertyName}' is required when the property 
    // '{propertyName}' is set to '{propertyValue}'.
    summary = oj.Translations.getTranslatedString("oj-converter.optionTypesMismatch.summary", 
      {'propertyName': propName,
       'propertyValue': parameterMap['propertyValue'],
       'requiredPropertyName': reqPropName});

    detail = oj.IntlConverterUtils._getOptionValueDetailMessage(reqPropName, propValueValid);
  }
  else if (errorCode === "optionTypeInvalid")
  {
    // Summary: A value of the expected type was not provided for '{propertyName}'.
    propName = parameterMap['propertyName'];
    propValueValid = parameterMap['propertyValueValid'];
    summary = oj.Translations.getTranslatedString("oj-converter.optionTypeInvalid.summary", 
      {'propertyName': propName});

    detail = oj.IntlConverterUtils._getOptionValueDetailMessage(propName, propValueValid);
  }
  else if (errorCode === "optionOutOfRange")
  {
    // The value {propertyValue} is out of range for the option '{propertyName}'.
    summary = oj.Translations.getTranslatedString("oj-converter.optionOutOfRange.summary", 
      {'propertyName': propName,
       'propertyValue': parameterMap['propertyValue']});

    propValueValid = parameterMap['propertyValueValid'];
    detail = oj.IntlConverterUtils._getOptionValueDetailMessage(propName, propValueValid);
  }
  else if (errorCode === "optionValueInvalid")
  {
    // An invalid value '{propertyValue}' was specified for the option '{propertyName}'.. 
    summary = oj.Translations.getTranslatedString("oj-converter.optionValueInvalid.summary", 
      {'propertyName': propName,
       'propertyValue': parameterMap['propertyValue']});
    
    propValueValid = parameterMap['propertyValueHint'];
    detail = oj.IntlConverterUtils._getOptionValueDetailMessage(propName, propValueValid);
  }
  
  return new oj.ConverterError(summary, detail);

};


/**
 * Builds the detail message for possible converter option values. Only applicable when errorInfo is 
 * returned from JET converter implementation.
 * 
 * @param {string} propName name of the property 
 * @param {Array|string} propValueValid valid value or values expected.
 * 
 * @return {string} the localized message
 * @private
 */
oj.IntlConverterUtils._getOptionValueDetailMessage = function (propName, propValueValid)
{
  // Detail: An accepted value for '{propertyName}' is '{propertyValueValid}'. or 
  // Accepted values for '{propertyName}' are '{propertyValueValid}'.
  var resourceKey;
  
  if (propValueValid)
  {
    if (typeof propValueValid === "string")
    {
      resourceKey = "oj-converter.optionHint.detail";
    }
    else
    {
      // we have an array of values
      resourceKey = "oj-converter.optionHint.detail-plural";
      propValueValid = 
         propValueValid.join(oj.Translations.getTranslatedString("oj-converter.plural-separator"));
    }
    return oj.Translations.getTranslatedString(resourceKey, 
      {'propertyName': propName,
       'propertyValueValid': propValueValid});

  }
  
  return "";
};

/**
 * Returns the default value for non-truthy values.
 * 
 * @returns {string} an empty string
 * @private
 */
oj.IntlConverterUtils.__getNullFormattedValue = function ()
{
  return "";
};

});
