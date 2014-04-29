define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore'], function(oj, $)
{
/**
 * Creates an attribute group handler that will generate stylistic attribute values such as colors or shapes based on data set categories.
 * @param {Object} matchRules A map of key value pairs for categories and the matching attribute value e.g. {"soda" : "square", "water" : "circle", "iced tea" : "triangleUp"}.
 *                            Attribute values listed in the matchRules object will be reserved only for the matching categories when getAttributeValue is called.
 * @export
 * @constructor
 */
oj.AttributeGroupHandler = function(matchRules) {
  this.Init(matchRules);
};

oj.Object.createSubclass(oj.AttributeGroupHandler, oj.Object, "oj.AttributeGroupHandler");

oj.AttributeGroupHandler.prototype.Init = function(matchRules) {
  oj.AttributeGroupHandler.superclass.Init.call(this);
  this._matchRules = matchRules ? matchRules : {};
  this._assignments = {};
  this._valueIndex = 0;
  this.Values = this.getValueRamp();
  for (var key in this._matchRules) {
    // remove match rule value from attribute group values
    var idx = this.Values.indexOf(this._matchRules[key]);
    if (idx !== -1)
      this.Values.splice(idx, 1);
  }
}

/**
 * Returns the array of possible attribute values for this attribute group handler.
 * This array can be modified so subclasses should return a copy of its internal value ramp.
 * @returns {Array} The array of attribute values
 * @export
 */
oj.AttributeGroupHandler.prototype.getValueRamp = function() {
  return [];
}

/**
 * Assigns the given category an attribute value.  Will consistently return the same attribute value for equal categories.
 * @param {Object} category The category to assign
 * @returns {Object} The attribute value for the category
 * @export
 */
oj.AttributeGroupHandler.prototype.getValue = function(category) {
  if (this._matchRules[category])
    return this._matchRules[category];
  else if (this._assignments[category])
    return this._assignments[category];
  else {
    this._assignments[category] = this.Values[this._valueIndex];
    if (this._valueIndex == this.Values.length - 1)
      this._valueIndex = 0;
    else
      this._valueIndex++;
    return this._assignments[category];
  } 
}

/**
 * Returns the current map of key value pairs for categories and the assigned attribute values
 * @return {Array} The current list of category and value pairing
 * @export
 */
oj.AttributeGroupHandler.prototype.geCategoryAssignments  = function() {
  var assignments = [];
  for (var i in this._assignments)
    assignments.push({"category": i, "value": this._assignments[i]});
  return assignments;
}

/**
 * Reserves an attribute value for the given category
 * @param {String} category Used for checking inputs to getAttributeValue against when assigning an attribute value
 * @param {String} attributeValue The attribute value to assign for inputs matching the given category e.g. "square" or "circle"
 * @export
 */
oj.AttributeGroupHandler.prototype.addMatchRule = function(category, attributeValue) {
  this._matchRules[category] = attributeValue;
}
var DvtStyleProcessor = {
	'CSS_TEXT_PROPERTIES':
		function(node, styleString) {
			var ignoreProperties = {};
			if (node) {
				if (node.hasClass("oj-gaugeMetricLabel") && node.hasClass(node.parentNode, "oj-ledGauge")) {
					ignoreProperties ['font-size'] = true;
					ignoreProperties ['color'] = true;
				}
				if (node.hasClass(node, "oj-chartSliceLabel")) {
					ignoreProperties ['color'] = true;
				}
			}
			return DvtStyleProcessor._mergeOptionsAndDivStyle(node, styleString, false, ignoreProperties);
		},
	'CSS_BACKGROUND_PROPERTIES':
		function(node, styleString) {
			return DvtStyleProcessor._mergeOptionsAndDivStyle(node, styleString, true, {});
		},
	'CSS_URL':
		function(node, styleString) {
			return DvtStyleProcessor._parseUrl(node);
		}
	}
        
DvtStyleProcessor._INHERITED_FONT_COLOR = "rgb(254, 0, 254)";
DvtStyleProcessor._INHERITED_FONT_FAMILY = "Times";
DvtStyleProcessor._INHERITED_FONT_SIZE = "1px";
DvtStyleProcessor._INHERITED_FONT_WEIGHT = "1";
DvtStyleProcessor._INHERITED_FONT_STYLE = "normal";

DvtStyleProcessor.defaultStyleProcessor = function(cssDiv, property) {
	return cssDiv.css(property);
}

/**
 * @param {Object} cssDiv The element with style class or with some default style
 */
DvtStyleProcessor._parseUrl = function(cssDiv) {
  var url = cssDiv.css('content');
  if (url && url.indexOf('url(') !== -1)
    return url.slice(url.indexOf('url(')+4, url.length-1).replace(/"/g,"");
  else
    return url;
}

/**
 * @param {Object} cssDiv The element with style class or with some default style
 * @return {string} The merged CSS background properties string including border-color, border-width, and background-color
 */
DvtStyleProcessor._buildCssBackgroundPropertiesString = function(cssDiv) {
  var styleString = "";
  if (cssDiv.css('border-top-color'))
  {
    styleString += "border-color: " + cssDiv.css('border-top-color') + ";";
  }
  // border without border-style is always nonsense (with width 0px)
  if (cssDiv.css('border-width') && (cssDiv.css('border-style') && cssDiv.css('border-style') != 'none'))
  {
    styleString += "border-width: " + cssDiv.css('border-width') + ";";
  }
  if (cssDiv.css('background-color'))
  {
    styleString += "background-color: " + cssDiv.css('background-color') + ";";
  }

  return styleString;
}

/**
 * build css style string
 * @param {Object} cssDiv The element with style class or with some default style
 * @param {Object} ignoreProperties The css properties to ignore
 * @return {string} The merged CSS text properties string including font-family, font-size, font-weight, color, and font-style
 */
DvtStyleProcessor._buildTextCssPropertiesString = function(cssDiv, ignoreProperties)
{
  var styleString = "";
  var value = cssDiv.css('font-family');
  if (value && value !== DvtStyleProcessor._INHERITED_FONT_FAMILY)
  {
    styleString += "font-family: " + value.replace(/"/g,"'") + ";";
  }
  value = cssDiv.css('font-size');
  if (value && value !== DvtStyleProcessor._INHERITED_FONT_SIZE && !ignoreProperties ['font-size'])
  {
    styleString += "font-size: " + value + ";";
  }
  value = cssDiv.css('font-weight');
  if (value && value !== DvtStyleProcessor._INHERITED_FONT_WEIGHT)
  {
    styleString += "font-weight: " + value + ";";
  }
  value = cssDiv.css('color');
  if (value && value !== DvtStyleProcessor._INHERITED_FONT_COLOR && !ignoreProperties ['color'])
  {
    styleString += "color: " + value + ";";
  }
  value = cssDiv.css('font-style');
  if (value && value !== DvtStyleProcessor._INHERITED_FONT_STYLE)
  {
    styleString += "font-style: " + value + ";";
  }
  return styleString;
}

/**
 * Merges style on div with css text in optionsStyle.
 * 
 * @param {Object} cssDiv The element with style class or with some default style
 * @param {string} optionsStyle The extending CSS text style
 * @param {Object} ignoreProperties The css properties to ignore
 * @param {boolean} bIncludeBackgroundProps Whether to merge background properties in addition to text properties. Default is to merge only text properties.
 * @return {string} The merged CSS properties string
 */
DvtStyleProcessor._mergeOptionsAndDivStyle = function(cssDiv, optionsStyle, bIncludeBackgroundProps, ignoreProperties)
{
  if (!ignoreProperties)
    ignoreProperties = {};

  if (!cssDiv)
  {
    return optionsStyle;
  }

  var oldStyle;
  if (optionsStyle)
  {
    oldStyle = cssDiv.attr("style");
    cssDiv.attr("style", oldStyle + optionsStyle);
  }

  var styleString = '';

  if (bIncludeBackgroundProps !== true)
  {
    styleString += this._buildTextCssPropertiesString(cssDiv, ignoreProperties);
  }

  if (bIncludeBackgroundProps !== false)
  {
    styleString += this._buildCssBackgroundPropertiesString(cssDiv);
  }
  if (oldStyle)
  {
    cssDiv.attr("style", oldStyle);
  }
  return styleString;
}
oj.__registerWidget('oj.dvtBaseComponent', $['oj']['baseComponent'], {
  _loadedResources : [],
  _checkResources : [],
  _supportedLocales : ['ar','cs','da','de','el','es','fi','fr','hu','it','iw','ja','ko','nl','no','pl','pt','pt_BR','ro','ru','sk','sv','th','tr','zh_CN','zh_TW'],
  
  /** 
   * @override
   * @protected
   */
  _create : function() {
    this._super();
  
    // Create the DvtContext, which creates the svg element and adds it to the DOM.
    this._context = new DvtContext(this.element[0]);
    
    // Set the reading direction on the context
    this._context.setReadingDirection(this._GetReadingDirection());
    
    // Set the tabindex on the element to enable keyboard handling
    this.element.attr("tabIndex", 0);
    
    // Create and cache the component instance
    this._component = this._CreateComponent(this._context, this._HandleEvent, this);

    // Add the component to the display tree of the rendering context.
    this._context.getStage().addChild(this._component);  
    
    // Create dummy divs for style classes and merge style class values with json options object
    this._processStyles(this._GetChildStyleClasses());
    
    // Retrieve and apply the translated strings onto the component bundle
    this._processTranslations();

    // Load component resources
    this._LoadResources();
    
    // Add options object to hidden div
    this._addOptionsDiv();

    // Render the component
    this._Render();
    
    // Add resize listener
    oj.DomUtils.addResizeListener(this.element[0], $.proxy(this._handleResize, this));
  },
  
  /** 
   * @override
   */
  refresh : function() {
    this._super();
  
    // Update the reading direction on the context
    this._context.setReadingDirection(this._GetReadingDirection());
    
    // Retrieve and apply the translated strings onto the component bundle
    this._processTranslations();
  
    // Render the component with any changes
    this._Render();
  },
  
  /** 
   * @override
   */
  getNodeBySubId : function(locator) {
    // subcomponents should override for jsDoc to list subId values
    var automation;
    if (this._component && this._component.getAutomation)
      automation = this._component.getAutomation();
    if (automation)
      return automation.getDomElementForSubId(locator);
    return null;
  },
  
  /**
   * Add options object to a hidden div for debugging.
   * @private
   */
  _addOptionsDiv : function() {
    var optionsDiv = $(document.createElement("div"));
    optionsDiv.attr("style", "display:none;");
    optionsDiv.text(JSON.stringify(this.options));
    this.element.append(optionsDiv);
  },
  
  /**
   * Returns the style classes associated with the component.
   * @return {Array}
   * @protected
   */
  _GetComponentStyleClasses : function() {
    return ['oj-dvtbase'];
  },
  
  /**
   * Returns a map of the style classes associated with a component's children.
   * @return {Object}
   * @protected
   */
  _GetChildStyleClasses : function() {
    return {};
  },
  
  /**
   * Creates dummy divs for each component style class and merges their values with the component options object.
   * @param {Array} styleClasses
   * @private
   */ 
  _processStyles : function(styleClasses) {
    // TODO AMDAI Consider refactoring to DvtStyleProcessor
    // Add the common css properties
    var componentClasses = this._GetComponentStyleClasses();
    var oldClasses = this.element.attr("class");
		var newClasses = '';
    for (var i=0; i<componentClasses.length; i++)
			newClasses = newClasses + componentClasses[i] + " ";
    if (oldClasses)
      newClasses += oldClasses;
    this.element.attr("class", newClasses);
    
    var outerDummyDiv = $(document.createElement("div"));
    outerDummyDiv.attr("style", "display:none;");
    this.element.append(outerDummyDiv);
    // overwrite inherited values to prevent populating options object with them
    outerDummyDiv.css("font-family", DvtStyleProcessor._INHERITED_FONT_FAMILY);
    outerDummyDiv.css("font-size", DvtStyleProcessor._INHERITED_FONT_SIZE);
    outerDummyDiv.css("color", DvtStyleProcessor._INHERITED_FONT_COLOR);
    outerDummyDiv.css("font-weight", DvtStyleProcessor._INHERITED_FONT_WEIGHT);
    outerDummyDiv.css("font-style", DvtStyleProcessor._INHERITED_FONT_STYLE);
    for (var styleClass in styleClasses) {
      var dummyDiv = $(document.createElement("div"));
      dummyDiv.addClass(styleClass);
      outerDummyDiv.append(dummyDiv);
      this._processStyle(dummyDiv, styleClasses[styleClass]);
    }
  },

  /**
   * Resolves the css properties within a dummy div
   * @param {Object} cssDiv
   * @param {Object} definition
   * @private
   */ 
  _processStyle : function(cssDiv, definition) {
    // TODO AMDAI Consider refactoring to DvtStyleProcessor
    if (definition instanceof Array) {
      for (var i=0;i<definition.length; i++) 
        this._resolveStyle(cssDiv, definition[i]);
    } else {
      this._resolveStyle(cssDiv, definition);
    }
  },
  
  /**
   * Helper function to resolve the css properties within a dummy div.
   * @param {Object} cssDiv
   * @param {Object} definition
   * @private
   */ 
  _resolveStyle : function(cssDiv, definition) { 
    // TODO AMDAI Consider refactoring to DvtStyleProcessor
    var path = new DvtJsonPath(this.options, definition['path']);
    var value;
    if(definition['property']) {
      var handler = DvtStyleProcessor[definition['property']];
      if (!handler)
      	value = DvtStyleProcessor.defaultStyleProcessor(cssDiv, definition['property']);
      else
      	value = handler(cssDiv, path.getValue());
    }
    if(value != null
       && !(typeof value == 'string' && value.replace(/^\s+/g, '') == '')) {
      path.setValue(value);
    }
  },
  
  /**
   * Returns a map containing keys corresponding to the string ids in ojtranslations.js and values corresponding to the 
   * toolkit constants for the DvtBundle objects.  This map must be guaranteed to be a new instance so that subclasses can
   * add their translations to it.
   * @return {Object}
   * @protected
   */
  _GetTranslationMap: function() {
    // TODO This function is a mess and we shouldn't define our own months.  
    // Will fix once the inheritance of resources is fixed via 18545592.
    var map = {
      'oj-ojDvtCommon.labelClearSelection': 'DvtUtilBundle.CLEAR_SELECTION',
      
      // TODO: Should try to get all of these from common translations not specific to DVT
      'oj-dvtBaseComponent.labelMonthShortJanuary': 'DvtUtilBundle.MONTH_SHORT_JANUARY',
      'oj-dvtBaseComponent.labelMonthShortFebruary': 'DvtUtilBundle.MONTH_SHORT_FEBRUARY',
      'oj-dvtBaseComponent.labelMonthShortMarch': 'DvtUtilBundle.MONTH_SHORT_MARCH',
      'oj-dvtBaseComponent.labelMonthShortApril': 'DvtUtilBundle.MONTH_SHORT_APRIL',
      'oj-dvtBaseComponent.labelMonthShortMay': 'DvtUtilBundle.MONTH_SHORT_MAY',
      'oj-dvtBaseComponent.labelMonthShortJune': 'DvtUtilBundle.MONTH_SHORT_JUNE',
      'oj-dvtBaseComponent.labelMonthShortJuly': 'DvtUtilBundle.MONTH_SHORT_JULY',
      'oj-dvtBaseComponent.labelMonthShortAugust': 'DvtUtilBundle.MONTH_SHORT_AUGUST',
      'oj-dvtBaseComponent.labelMonthShortSeptember': 'DvtUtilBundle.MONTH_SHORT_SEPTEMBER',
      'oj-dvtBaseComponent.labelMonthShortOctober': 'DvtUtilBundle.MONTH_SHORT_OCTOBER',
      'oj-dvtBaseComponent.labelMonthShortNovember': 'DvtUtilBundle.MONTH_SHORT_NOVEMBER',
      'oj-dvtBaseComponent.labelMonthShortDecember': 'DvtUtilBundle.MONTH_SHORT_DECEMBER',
      'oj-dvtBaseComponent.labelScalingSuffixThousand': 'DvtUtilBundle.SCALING_SUFFIX_THOUSAND',
      'oj-dvtBaseComponent.labelScalingSuffixMillion': 'DvtUtilBundle.SCALING_SUFFIX_MILLION',
      'oj-dvtBaseComponent.labelScalingSuffixBillion': 'DvtUtilBundle.SCALING_SUFFIX_BILLION',
      'oj-dvtBaseComponent.labelScalingSuffixTrillion': 'DvtUtilBundle.SCALING_SUFFIX_TRILLION',
      'oj-dvtBaseComponent.labelScalingSuffixQuadrillion': 'DvtUtilBundle.SCALING_SUFFIX_QUADRILLION',
      
      'oj-dvtBaseComponent.stateSelected': 'DvtUtilBundle.STATE_SELECTED',
      'oj-dvtBaseComponent.stateUnselected': 'DvtUtilBundle.STATE_UNSELECTED',
      'oj-dvtBaseComponent.stateMaximized': 'DvtUtilBundle.STATE_MAXIMIZED',
      'oj-dvtBaseComponent.stateMinimized': 'DvtUtilBundle.STATE_MINIMIZED',
      'oj-dvtBaseComponent.stateExpanded': 'DvtUtilBundle.STATE_EXPANDED',
      'oj-dvtBaseComponent.stateCollapsed': 'DvtUtilBundle.STATE_COLLAPSED',
      'oj-dvtBaseComponent.stateIsolated': 'DvtUtilBundle.STATE_ISOLATED',
      'oj-dvtBaseComponent.stateHidden': 'DvtUtilBundle.STATE_HIDDEN',
      'oj-dvtBaseComponent.stateVisible': 'DvtUtilBundle.STATE_VISIBLE'
    };
    
    // Retrieve the resources and map to the DvtBundle identifiers
    var ret = {};
    for(var key in map) {
      var bundleKey = map[key];
      var resource = oj.Translations.getResource(key);
      ret[bundleKey] = resource;
    }
    return ret;
  },
  
  /**
   * Retrieves the translated resource with the specified 
   * @param {string} key The key used to retrieve the translated resource.
   * @param {Array.<string>} params The array of named parameters that need to be converted into index based parameters.
   * @protected
   */
  _GetTranslatedResource: function(key, params) {
    var translatedResource = this.options[key];
    
    // If named parameters are defined, replace with index based params
    if(params) {
      var paramMap = {};
      for(var i=0; i<params.length; i++) {
        paramMap[params[i]] = '{' + i + '}';
      }
      translatedResource = oj.Translations.applyParameters(translatedResource, paramMap);
    }

    return translatedResource;
  },
   
  /**
   * Called to process the translated strings for this widget.  
   * @private
   */
  _processTranslations: function() {
    // Retrieve the map of translation keys + DvtBundle identifiers
    var translationMap = this._GetTranslationMap();
    
    // Register with the DvtBundle
    DvtBundle.addLocalizedStrings(translationMap);
  },
  
  /**
   * @override
   * @protected
   */
  _destroy : function() {
    this.element.children().remove();
    
    // Call super last for destroy
    this._super();
  },

  /**
   * @override
   * @protected
   */
  _setOptions : function(options) {
    // Call the super to update the property values
    this._superApply(arguments);
    
    // Render the component with the changes
    this._Render();
  },
  
  /**
   * Called by _create to instantiate the specific component instance.  Subclasses must override.
   * @param {DvtContext} context
   * @param {Function} callback
   * @param {Object} callbackObj
   * @protected
   */
  _CreateComponent : function(context, callback, callbackObj) {
    return null; // subclasses must override
  },
  
  /**
   * Called by the component to process events.  Subclasses should override to delegate DVT component events to their 
   * JQuery listeners.
   * @param {Object} event
   * @protected
   */
  _HandleEvent : function(event) {
    // subclasses should override to delegate component events to their listeners
  },
  
  /**
   * Called when the component is resized.
   * @param {number} width
   * @param {number} height
   * @private
   */
  _handleResize : function(width, height) {
    // Render the component at the new size if it changed enough
    var newWidth = this.element.width();
    var newHeight = this.element.height();
    if(Math.abs(newWidth - this._width) + Math.abs(newHeight - this._height) >= 5) {    
      this._component.render(null, newWidth, newHeight);
      
      // Update the rendered size
      this._width = newWidth;
      this._height = newHeight;
    }
  },
  
  /**
   * Called by our implementation to load component resources like images, resource bundles, or basemaps.
   * @protected
   */
  _LoadResources : function() {
    // subcomponents should override
  }, 
  
  /**
   * Utility function for loading resource bundles.
   * @protected
   */
  _LoadResourceBundle : function(url) {
    // TODO AMDAI Move this to thematic map since the other DVTs are not likely to use.
    var locale = oj.Config.getLocale();
    if (locale.indexOf("en") === 0) {
      this._loadResourceBundleByUrl(url + ".js");
    } else {
      // split locale by subtags and try to load resource bundle that satisfies
      var splitLocale = locale.split('_');
      var localeList = [];
      for (var j = 0; j < splitLocale.length; j++) {
        var tempLocale = '';
        for (var k = 0; k < (j + 1); k++) {
          if (k != 0)
            tempLocale += '_';
          tempLocale += splitLocale[k];
        }
        localeList.push(tempLocale)
      }
      
      // Go thru list of supported DVT languages
      for (var i = localeList.length - 1; i >= 0; i++) {
        if (this._supportedLocales.indexOf(localeList[i]) !== -1)
          this._loadResourceBundleByUrl(url + "_" + localeList[i] + ".js");
      }
    }
  },
  
  /**
   * Utility function for loading resource bundles by url.
   * @private
   */
  _loadResourceBundleByUrl : function(url) {
    // TODO AMDAI Move this to thematic map since the other DVTs are not likely to use.
    // resource is already loaded or function tried to load this resource but failed
    if(this._loadedResources[url])
      return;
    
    var resolvedUrl = oj.Config.getResourceUrl(url);
    var thisRef = this;
    var loadedBundles = this._loadedResources;
    $.getScript(resolvedUrl, function( data, textStatus, jqxhr ) {
      loadedBundles[url] = true;
      thisRef._Render();
    });
  },
          
  /**
   * Called to render the component at the current size.
   * @protected
   */
  _Render : function() {
    // do not render until all resources are loaded
    for (var i=0; i<this._checkResources.length; i++) {
      if (!this._loadedResources[this._checkResources[i]])
        return;
    }
    
    // Fix 18498656: If the component is not attached to a visible subtree of the DOM, rendering will fail because 
    // getBBox calls will not return the correct values.  Log an error message in this case and avoid rendering.
    if(!this._context.isReadyToRender())
      // TODO This resource should be retrieved off of the options object
      oj.Logger.error(oj.Translations.getResource('oj-dvtBaseComponent.notReadyToRender')['summary']);
    else {
      // Render the component
      this._width = this.element.width();
      this._height = this.element.height();
      this._component.render(this.options, this._width, this._height);
    }
  }
});
/**
 * Creates a shape attribute group handler that will generate shape attribute values.
 * @param {Object} matchRules A map of key value pairs for categories and the matching attribute value e.g. {"soda" : "square", "water" : "circle", "iced tea" : "triangleUp"}.
 *                            Attribute values listed in the matchRules object will be reserved only for the matching categories when getAttributeValue is called.
 * @export
 * @constructor
 * @extends {oj.AttributeGroupHandler}
 */
oj.ShapeAttributeGroupHandler = function(matchRules) {
  this.Init(matchRules);
}

oj.Object.createSubclass(oj.ShapeAttributeGroupHandler, oj.AttributeGroupHandler, "oj.ShapeAttributeGroupHandler");

oj.ShapeAttributeGroupHandler._attributeValues = ['square', 'circle', 'diamond', 'plus', 'triangleDown', 'triangleUp', 'human'];

/**
 * @override
 */
oj.ShapeAttributeGroupHandler.prototype.getValueRamp = function() {
  return oj.ShapeAttributeGroupHandler._attributeValues.slice();
}
/**
 * Creates a color attribute group handler that will generate color attribute values.
 * @param {Object} matchRules A map of key value pairs for categories and the matching attribute value e.g. {"soda" : "#336699", "water" : "#CC3300", "iced tea" : "#F7C808"}.
 *                            Attribute values listed in the matchRules object will be reserved only for the matching categories when getAttributeValue is called.
 * @export
 * @constructor
 * @extends {oj.AttributeGroupHandler}
 */
oj.ColorAttributeGroupHandler = function(matchRules) {
  this._attributeValues = [];
  var attrGpsDiv = $(document.createElement("div"));
  attrGpsDiv.attr("style", "display:none;");
  attrGpsDiv.attr("id", "attrGps");
  $(document.body).append(attrGpsDiv);
  for (var i=0; i<oj.ColorAttributeGroupHandler._styleClasses.length; i++) {
    var childDiv = $(document.createElement("div"));
    childDiv.addClass(oj.ColorAttributeGroupHandler._styleClasses[i]);
    attrGpsDiv.append(childDiv);
    this._attributeValues.push(childDiv.css('color'));
  }
  attrGpsDiv.remove();
  this.Init(matchRules);
}

oj.Object.createSubclass(oj.ColorAttributeGroupHandler, oj.AttributeGroupHandler, "oj.ColorAttributeGroupHandler");

oj.ColorAttributeGroupHandler._styleClasses = ['oj-dvt-category-index1', 
  'oj-dvt-category-index2', 'oj-dvt-category-index3', 'oj-dvt-category-index4', 
  'oj-dvt-category-index5', 'oj-dvt-category-index6', 'oj-dvt-category-index7', 
  'oj-dvt-category-index8', 'oj-dvt-category-index9', 'oj-dvt-category-index10', 
  'oj-dvt-category-index11', 'oj-dvt-category-index12'];

/**
 * @override
 */
oj.ColorAttributeGroupHandler.prototype.getValueRamp = function() {
  return this._attributeValues.slice();
}
/**
 * Class to help set css properties on the component root options object
 * @param {Object} object The root options object from which this path should be resolved
 * @param {string} path The string path within the options object to resolve
 * @constructor
 */
var DvtJsonPath = function(object, path)
{
  this._path = path;
  this._root = object;
  this._delimiter = '/';
}

/**
 * Resolves the parameter of the leaf object and the leaf object itself
 * @param {Object} root The root object to update
 * @param {string} path The string path within the root object to resolve
 * @param {string} delimiter The string delimiter for the path string
 * @param {boolean} createIfMissing Flag to create the hierarchy of the namespaces if they do not exist
 * @return {Object} The resolved parameter
 * @private
 */
DvtJsonPath.prototype._resolveLeafObjectAndProperty = function(root, path, delimiter, createIfMissing)
{
  var result = {};
  while (root && path.indexOf(delimiter) > -1)
  {
    var subProperty = path.substring(0, path.indexOf(delimiter));
    if (createIfMissing && root[subProperty] === undefined)
    {
      root[subProperty] = {};
    }
    root = root[subProperty];
    path = path.substring(path.indexOf(delimiter) + 1, path.length);
  }

  if (root)
  {
    result['object'] = root;
    result['parameter'] = path;
  }

  return result;
}

/**
 * Resolves path to the leaf object and parameter of this object
 * @param {boolean} createIfMissing Flag to create the hierarchy of the namespaces if they do not exist
 * @private
 */
DvtJsonPath.prototype._resolvePath = function(createIfMissing)
{
  if (this._leaf === undefined)
  {
    var result = this._resolveLeafObjectAndProperty(this._root, this._path, this._delimiter, createIfMissing);

    this._leaf = result['object'];
    this._param = result['parameter'];
  }
}

/**
 * Returns value of the leaf element of the path.
 * @return {string} value The value of the leaf element or undefined if path structure is not yet created
 */
DvtJsonPath.prototype.getValue = function()
{
  this._resolvePath(false);
  return this._leaf === undefined ? undefined : this._leaf[this._param];
}

/**
 * Sets value of the leaf element of the path.
 * @param {String} value The value of the leaf element
 */
DvtJsonPath.prototype.setValue = function(value)
{
  this._resolvePath(true);

  if (this._leaf[this._param] !== value)
  {
    this._leaf[this._param] = value;
  }
}
});
