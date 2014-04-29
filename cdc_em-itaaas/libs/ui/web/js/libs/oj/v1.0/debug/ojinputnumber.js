define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/*!
 * JET InputNumber @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundertion and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 *
 * Depends:
 *  jquery.ui.widget.js
 */
/**
 * @class
 * @name oj.ojInputNumber
 * @augments oj.editableValue
 * 
 * @classdesc
 * <h3 id="inputNumberOverview-section">
 *   JET InputNumber Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputNumberOverview-section"></a>
 * </h3>
 * <p>Description: The ojInputNumber component enhances a browser input element 
 * into one that holds numbers and it has a spinbox to quickly increment or 
 * decrement the number. The <code>value</code> option must be a number and must 
 * be within the <code>min</code> and <code>max</code> range. 
 * </p>
 * <p>A step mismatch is when
 * the value is not a multiple of <code>step</code>, starting at the <code>min</code> 
 * or 0 if no <code>min</code> is set.
 * A step mismatch will not be flagged as a validation error by default, but
 * the step up and step down feature will change the value to be a step match
 * if it isn't already.
 * </p>
 * <p>
 * The component is accessible; it sets and maintains the appropriate aria- attributes, 
 * like aria-valuenow, aria-valuemax, aria-valuemin and aria-valuetext.
 * </p>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Enter</kbd> or <kbd>Tab</kbd></td>
 *       <td>Submit the value you typed in the input field. If you type in
 *       a value out of range, and press Enter, you will see a validation error.
 *       Step mismatch errors will not cause a validation error.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Increment the number in the input field; alternatively you can click 
 *           on the up arrow icon. If the resulting value is above the
 *           <code>max</code>, below the <code>min</code>, or results in a step 
 *           mismatch, the value will be adjusted to the closest valid value.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Decrement the number in the input field; alternatively you can click
 *           on the down arrow icon. If the resulting value is above the 
 *           <code>max</code>, below the <code>min</code>, or results in a step
 *           mismatch, the value will be adjusted to the closest valid value.</td>
 *     </tr>
 * </tbody></table>
 *  
 * <h3 id="state-section">
 *   Setting the Value Option
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#state-section"></a>
 * </h3>
 * <p>If the value option is undefined, 
 * then the DOM value property is used, if any; else it is null.</p>
 * <p>The value option (if it is not null or undefined) 
 * is coerced (+ val). e.g., "123a" is coerced to NaN</p>
 * <p>To clear out the value option, you can set it to null.
 * <code>$(".selector").ojInputNumber("option", "value", null);</code>
 * </p>
 *
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * @desc Creates an ojInputNumber component
 * @example <caption>Initialize component using widget API</caption>
 * &lt;input id="spin" type="text"/&gt;<br/>
 * $("#spin").ojInputNumber({'value': 10, 'max':100, 'min':0, 'step':2});
 * $("#spin").ojInputNumber({'option', 'value', 10});
 * @example <caption>Using knockout, value, min, max bind to observables - salary, salaryMax, salaryMin</caption> 
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputNumber', value: salary, min:salaryMin, max:salaryMax, step:5}"/&gt;
 * 
 * @constructor
 */
oj.__registerWidget("oj.ojInputNumber", $['oj']['editableValue'],
{
  version : "1.0.0",  
  defaultElement : "<input>", 
  widgetEventPrefix : "oj", 
  options : 
  {
    /**
     * The default converter for ojInputNumber.
     *
     * If one wishes to provide a custom converter for the ojInputNumber 
     * override the factory returned for
     * oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_NUMBER).
     * When initialized with no options, 
     * the default options for the current locale are assumed.
     *
     * @expose
     * @memberof! oj.ojInputNumber
     * @instance
     * @default <code class="prettyprint">
     *  oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_NUMBER).createConverter()</code>
     */
    converter : oj.Validation.converterFactory(
            oj.ConverterFactory.CONVERTER_TYPE_NUMBER).createConverter(), 
    /** 
     * The maximum allowed value. The element's max attribute is used if it 
     * exists and the option is not explicitly set. If null, there is no maximum enforced.
     * The max must not be less than the min.
     * @expose 
     * @public
     * @instance
     * @memberof! oj.ojInputNumber */
    max : undefined, 
    /** 
     * The minimum allowed value. The element's min attribute is used if it 
     * exists and the option is not explicitly set. If null, there is no minimum enforced.
     * The min must not be greater than the max.
     * @expose 
     * @public 
     * @instance
     * @memberof! oj.ojInputNumber */
    min : undefined, 
    /** 
     * whether the component is readOnly. The element's readOnly property is used as its initial 
     * value if it exists, when the option is not explicitly set. When neither is set, readOnly 
     * defaults to false.
     * 
     * @example <caption>Initialize component with <code class="prettyprint">readOnly</code> option:</caption>
     * $(".selector").ojInputNumber({"readOnly": true});
     * 
     * @expose 
     * @type {?boolean}
     * @default <code class="prettyprint">false</code>
     * @public
     * @instance
     * @memberof! oj.ojInputNumber
     */
    readOnly: null,
    /**
     * This option allows setting HTML5's placeholder attribute. Though it is possible to set 
     * placeholder attribute on the element itself, the component will only read the value during 
     * creation time; meaning any subsequent changes to the element's placeholder attribute will 
     * not be picked up.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">placeholder</code> option:</caption>
     * &lt;input id="number" data-bind="ojComponent: {component: 'ojInputNumber', placeholder: 'Please enter a number'}" /&gt;
     * 
     * @example <caption>Initialize <code class="prettyprint">placeholder</code> option from html attribute:</caption>
     * &lt;input id="number" data-bind="ojComponent: {component: 'ojInputNumber'}" placeholder="Please enter a number" /&gt;
     * 
     * @expose 
     * @instance
     * @memberof! oj.ojInputNumber
     * @type {string|null|undefined}
     */    
    placeholder: undefined,
    /** 
     * The size of the step to take when spinning via buttons or via the 
     * stepUp()/stepDown() methods. The element's step attribute is used if it 
     * exists and the option is not explicitly set. Step must be a number 
     * greater than 0, otherwise it defaults to 1.
     * @expose 
     * @public
     * @instance
     * @memberof! oj.ojInputNumber */
    step : undefined
  },
   /**
  * @private
  * @const
  */
  _BUNDLE_KEY:
  {
    _TOOLTIP_DECREMENT: 'tooltipDecrement',
    _TOOLTIP_INCREMENT: 'tooltipIncrement'    
  },
  /**
   * After _ComponentCreate and _AfterCreate, 
   * the widget should be 100% set up. this._super should be called first.
   * @override
   * @protected
   * @instance
   * @memberof! oj.ojInputNumber
   */
  _ComponentCreate : function ()
  {
    this._super();
    
    this._draw();
    
    this._on(this._events);

    // turning off autocomplete prevents the browser from remembering the
    // value when navigating through history, so we re-enable autocomplete
    // if the page is unloaded before the widget is destroyed. #7790
    this._on(this.window, 
    {
      "beforeunload" : function ()
      {
        this.element.removeAttr("autocomplete");
      }
    });
    
    // input type=number does not support the 'pattern' attribute, so
    // neither should ojInputNumber.
    // remove this before EditableValue grabs it and uses it.
    this.element.removeAttr("pattern");
    
    this._inputNumberDefaultValidators = {};


  },
  
  /**
   * This is where we do things right after the component was created.
   * this._super should be called first.
   * 
   * @override
   * @memberof! oj.ojInputNumber
   * @instance
   * @protected
   */
  _AfterCreate : function ()
  {
    this._super();
    
    // handle string values that need to be parsed
    // jmw do I really need to do this?
    //this._setOption("max", this.options.max);
    //this._setOption("min", this.options.min);
    this._setOption("step", this.options.step);
        
    // READONLY:
    // if options.readOnly is not set, or not valid, get it from the element
    // if options.readOnly is set to a valid value (boolean), set it on the 
    // element to keep the two in sync. 
    if ( typeof this.options.readOnly !== "boolean" ) 
    {
      // !! ensures it is a boolean
      this.options.readOnly = !!this.element.prop( "readonly" );
    } 
    else 
    {
      this.element.prop( "readonly", this.options.readOnly );
    }  
    
    this._refreshAriaMinMaxValue();
    this._updateButtons();
  },
    /**
   * Initializes the option represented by the 'key' using either the option
   *  value or the element value. If option is undefined, we get it from the DOM.
   *  This method sets options 'value', 'min', 'max', 'step'. 
   * <br/>
   * @memberof! oj.ojInputNumber
   * @instance
   * @protected
   */        
  _InitOptions : function ()
  {
    this._super();
    
    // EditableValue basically does the same thing. Instead of getting it
    // from this.element.val(), it gets it from the savedAttributes. 
    // This doesn't always work for numbers, though. savedAttribute for 'value'
    // is null when the html's value attribute is set to a number when
    // you do element.val(15). So I have to get it using this.element.val().
    // this.element.val(15).ojInputNumber() -> savedAttributes does not have a value prop.
    // $("#inputnumber-id").val(5555).ojInputNumber()
    // $("#inputnumber-id").prop("value")
    // "5555" // WORKS!
    // BUT "value" in savedAttributes is false
    // 
    // We coerce the input number's value if not null, and we do the 
    // same thing in _setOption
    // 1) "" on the DOM ==  null on the option.value
    // 2) Conversely, null on the option.value means 
    // that we set "" on the input element's value even if it was alreayd set.
    var valueOption = this.options['value'];
    // TODO: change to valueOptioin === undefined, and have value option's constructor default be undefined.
    // I'll need a way so that my superclass won't set null for me if I need to do something different, like
    // set the option to null if the dom is "" (regular inputText's don't convert "" attribute value to null value option.
    if (valueOption == null)
    {
      this.options['value'] = (this.element.val() !== "") 
        ? this.element.val() : null;
    }

    // html-5 input type=number seems to coerce the value option using +
    this.options['value'] = this._coerceInputNumberValue(this.options['value']);
    
    // For min, max, step, if option is not set, get it from the dom
    // Also, if not a number, try to coerce it to a number
    // In html-5 input type=number, e.g., min="40a", it treats it as null.
    // it doesn't seem to coerce it.
    // e.g.,
    //"345.67 abc" coerces to NaN (+ val)
    //"ab34.56" coerces to NaN 
    // "" coerces to 0. html-5 min="" acts like there is no min
    // html-5 number,  null acts like there is no min
    var that = this;
    $.each(['min','max','step'], function (index, value)
    {
      if (that.options[value] === undefined)
      {
        // get it from the dom
        that.options[value] = that.element.attr(value);
        // if it is still null or undefined, then default
        if (that.options[value] == null)
          that.options[value] = (value === "step" ? 1 : null);
      }
      // coerce to a number if it isn't; the app dev could have used "5" string
      // to mean 5. We are pretty strict when coercing options that the 
      // app dev types in, and more lenient for user values.
      // we don't coerce for null, so the user can clear these
      // out with null.
      if (that.options[value] != null)
      {
        if (value === "step")
          that.options[value] = that._parseStep(that.options[value]);
        else
          that.options[value] = that._parse(that.options[value]);
      }
    });

  },
          
  /**
   * Sets up the default numberRange validators.
   * 
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputNumber
   */
  _GetDefaultValidators : function ()
  {
    var ret = this._superApply(arguments),
        // min and max need to be 'undefined' to be reset in the numberrangevalidator
        min = this.options['min'] != null ? this.options['min'] : undefined, 
        max = this.options['max'] != null ? this.options['max'] : undefined,
        numberRangeOptions = {};
    
    if (min != null || max != null)
    {
      numberRangeOptions = {'min': min, 
                          'max': max,
                          'converter': this._GetConverter()};
      this._createRangeValidator(numberRangeOptions);

    }
 
    return $.extend(this._inputNumberDefaultValidators, ret);
  },
  _events : 
  {
    'keydown' : function (event)
    {
      var keyCode = $.ui.keyCode;
      if(event.keyCode === keyCode.ENTER)
      {
        this._blurEnterSetValue(event);
        event.preventDefault();
      }
      else if (this._start() && this._keydown(event))
      {
        event.preventDefault();
      }
    },
    'keyup' : function(event){this._stop(event);}, 
    'focus' : function ()
    {
      this.previous = this.element.val();
    },
    'blur' : function (event)
    {
      if (this.cancelBlur)
      {
        delete this.cancelBlur;
        return;
      }
      this._blurEnterSetValue(event);
    },
    "mousedown .oj-inputnumber-button" : function (event)
    {
      var previous;

      // We never want the buttons to have focus; whenever the user is
      // interacting with the inputnumber, the focus should be on the input.
      // If the input is focused then this.previous is properly set from
      // when the input first received focus. If the input is not focused
      // then we need to set this.previous based on the value before spinning.
      previous = this.element[0] === this.document[0].activeElement ? 
        this.previous : this.element.val();

      function checkFocus()
      {
        var isActive = this.element[0] === this.document[0].activeElement;
        if (!isActive)
        {
          this.element.focus();
          this.previous = previous;
          // support: IE
          // IE sets focus asynchronously, so we need to check if focus
          // moved off of the input because the user clicked on the button.
          this._delay(function ()
          {
            this.previous = previous;
          });
        }
      }

      // ensure focus is on (or stays on) the text field
      event.preventDefault();
      checkFocus.call(this);

      // support: IE
      // IE doesn't prevent moving focus even with event.preventDefault()
      // so we set a flag to know when we should ignore the blur event
      // and check (again) if focus moved off of the input.
      this.cancelBlur = true;
      this._delay(function ()
      {
        delete this.cancelBlur;
        checkFocus.call(this);
      });

      this._start();

	    this._repeat(null, $(event.currentTarget).hasClass("oj-inputnumber-up") ? 1 :  - 1, event);
    },
    "mouseup .oj-inputnumber-button" : function(event)
    { 
      this._stop(event);
    }, 
    "mouseenter .oj-inputnumber-button" : function (event)
    {
      // button will add oj-active if mouse was down while mouseleave and kept down
      if (!$(event.currentTarget).hasClass("oj-active"))
      {
        return;
      }

      this._start();
	  
      this._repeat(null, $(event.currentTarget).hasClass("oj-inputnumber-up") ? 1 :  - 1, event);
    },
    // TODO: do we really want to consider this a stop?
    // shouldn't we just stop the repeater and wait until mouseup before
    // we trigger the stop event?
    "mouseleave .oj-inputnumber-button" : function(event)
    { 
      this._stop(event);
    }
  },
  _draw : function ()
  {
    var uiInputNumber = this.uiInputNumber = this.element.addClass("oj-inputnumber-input")
            .attr("autocomplete", "off")
            .wrap(this._uiInputNumberHtml()).parent()
            // add buttons
            .append(this._buttonHtml());

    // we decided not to add role=spinbutton since A screen reader user hearing 
    // it is a spinbutton is a little confusing as you obviously can't do 
    // any of the spinbutton controls on it..
    // 
    // TODO: need to save off attributes and reset on destroy generically.
    // EditableValue renames attributes with data-oj-. Should we do that or 
    // should we overwrite? I think we should overwrite for these... discuss
    this.saveType = this.element.prop("type");
    this.element.attr("type", "text");

    // button bindings. interesting.
    var incrementString = 
            this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_INCREMENT);
    var decrementString = 
            this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_DECREMENT);
    uiInputNumber.find(".oj-inputnumber-up").ojButton({display: 'icons', 
                      icons: {start:'oj-component-icon oj-inputnumber-up-icon'}, 
                      label: incrementString});
    uiInputNumber.find(".oj-inputnumber-down").ojButton({display: 'icons', 
                      icons: {start:'oj-component-icon oj-inputnumber-down-icon'}, 
                      label: decrementString});                    
    // add aria-hidden=true to buttons. As they are not in the keyboard sequence 
    // we decided it makes more sense to just add aria-hidden="true" to them 
    // and rely on the up/down arrow keys
    this.buttons = uiInputNumber.find(".oj-inputnumber-button")
            .attr("tabIndex",  "-1").attr("aria-hidden",true);

    // disable inputnumber if element was already disabled
    if (this.options.disabled)
    {
      // calls _setOption disable is true
      this.disable();
    }
    
    // set readOnly on inputnumber if element was already in readonly
    if (this.options.readOnly)
    {
      // calls _setOption disable is true
      this._setOption("readOnly", true);
    }

  },
  _keydown : function (event)
  {
    var options = this.options, keyCode = $.ui.keyCode;

    switch (event.keyCode)
    {
      // keeping the up/down pressed repeats
      // using the up and down arrows will adjust the value so that it is 
      // a multiple of step and it is in min/max, same as if you used the 
      // up and down buttons
      case keyCode.UP:
        this._repeat(null, 1, event);
        return true;
      case keyCode.DOWN:
        this._repeat(null,  - 1, event);
        return true;
    }

    return false;
  },
  _uiInputNumberHtml : function ()
  {
    return "<span class='oj-inputnumber oj-component'></span>";
  },
  _buttonHtml : function ()
  {
    return "" + "<a class='oj-inputnumber-button oj-inputnumber-down'></a>" + 
            "<a class='oj-inputnumber-button oj-inputnumber-up'></a>";
  },
  _start : function ()
  {
    this.spinning = true;
    return true;
  },
  _repeat : function (i, steps, event)
  {
    // repeat spinning as long as the key is down and min/max isn't reached
    i = i || 500;

    clearTimeout(this.timer);
    this.timer = this._delay(function ()
    {
      this._repeat(40, steps, event);
    },
    i);

    this._spin(steps * this.options.step, event);
  },
  _spin : function (step, event)
  {
    // When the component's 'value' changes, the displayValue is automatically updated.
    // So reading the component's display value should always give you the element's value
    var displayValue = this._GetDisplayValue() || 0;
    var value = this._parseValue(displayValue);
    value = this._adjustValue(value, step);
    
    this._SetValue(value, event, this._VALIDATION_MODE.VALIDATORS_ONLY);
  },
  // called from _adjustValue
  _precision : function ()
  {
    var precision = this._precisionOf(this.options.step);
    if (this.options.min != null)
    {
      precision = Math.max(precision, this._precisionOf(this.options.min));
    }
    return precision;
  },
  // called from _adjustValue->_precision
  _precisionOf : function (num)
  {
    var str = num.toString(), decimal = str.indexOf(".");
    return decimal ===  - 1 ? 0 : str.length - decimal - 1;
  },
  /**
   * adjust the value to be "valid".
   * The logic follows that of HTML-5's input number.
   * http://www.w3.org/TR/html5/forms.html#dom-input-stepup
   * A valid value is one that is a multiple of 
   * step starting at stepBase, where stepBase is min (if present),
   * else initial value (if present) TODO,
   * else (if type == number) 0 
   * If max is not a valid value, stepUp/stepDown will never go to max. It
   * will go to the calculated valid max (one that is the largest value 
   * that is an integral multiple of the step, and that is less than or equal
   * to the maximum.
   * @private
   */
  _adjustValue : function (value, step)
  {
    var newValue;
    var stepBase, aboveMin, options = this.options;
    var precision = this._precision();

    // make sure we're at a valid step when we step up or down.
    // - find out where we are relative to the base (min or 0)
    stepBase = options.min != null ? options.min : 0;
     
    // From http://www.w3.org/TR/html5/forms.html#dom-input-stepup:
    // If value subtracted from the step base is not an integral multiple 
    // of the step, then set value to the nearest value that, when subtracted
    // from the step base, is an integral multiple of the allowed value step,
    // and that is less than value if the method invoked was stepDown() and
    // more than value if the method invoked was stepUp().
    
    // is value-stepBase an integral multiple of step?
    aboveMin = value - stepBase;
    var rounded = Math.round(aboveMin / options.step) * options.step;
    rounded = parseFloat(rounded.toFixed(precision));
    var multiple = (rounded === aboveMin);
    
    if (!multiple)
    {
      if (step < 0)
        aboveMin = Math.ceil(aboveMin / options.step) * options.step;
      else
      {
        aboveMin = Math.floor(aboveMin / options.step) * options.step;
      }

      // rounding is based on 0, so adjust back to our base
      newValue = stepBase + aboveMin + step;
    }
    else
    {
      newValue = value + step;
    }
    
    // fix precision from bad JS floating point math
    // toFixed returns the newValue with a specific # of digits after the 
    // decimal point (this_precision() looks at max of step/min's # of 
    // digits.
    newValue = parseFloat(newValue.toFixed(precision));
    
    if (options.min != null && newValue < options.min)
      return options.min;
    
    if (options.max != null && newValue > options.max)
    {
      var validMax = (Math.floor((options.max - stepBase)/ options.step) * 
                  options.step) + stepBase;
      // fix precision from bad JS floating point math
      validMax = parseFloat(validMax.toFixed(precision));
      return validMax;
    }
    
    return newValue;
  },
  _stop : function (event)
  {
    if (!this.spinning)
    {
      return;
    }
    clearTimeout(this.timer);
    this.spinning = false;
  },
  _updateButtons: function()
  {
    var value = this._GetDisplayValue() || 0;
    var min = this.options.min, max = this.options.max;
    if (!this.uiInputNumber)
      return;
    var downButton = this.uiInputNumber.find(".oj-inputnumber-down").ojButton();
    var upButton = this.uiInputNumber.find(".oj-inputnumber-up").ojButton();
    if (this.options.disabled)
    {
      downButton.ojButton("disable");
      upButton.ojButton("disable");      
    }
    else if (max != null && value >= max)
    {
      downButton.ojButton("enable");
      upButton.ojButton("disable");
    }
    else if (min != null && value <= min)
    {
      downButton.ojButton("disable");
      upButton.ojButton("enable");
    }
    else
    {
      downButton.ojButton("enable");
      upButton.ojButton("enable");      
    }    
  },
  _blurEnterSetValue: function(event)
  {
      this._stop();
      if (this.previous !== this.element.val())
      {
        // _SetValue triggers valuechange event
        this._SetValue(this.element.val(), event);
      }    
  },
  /**
   * Handles options specific to inputnumber.
   * Note that _setOption does not get called during create in the super class. 
   * It only gets called when the component has already been created.
   * However, we do call _setOption in _draw for certain attributes 
   * (disabled/readOnly)
   * @override
   * @protected
   * @memberof! oj.ojInputNumber
   */
  _setOption : function (key, value)
  {
    // we don't coerce value for null or undefined, so to clear out value
    // they can set it to null or undefined.
    if (key === "value")
      value = this._coerceInputNumberValue(value);

    if (key === "max" || key === "min")
    {
      if (typeof value === "string")
      {
        value = this._parse(value);
      }
    } 
    if (key === "step")
    {
      value = this._parseStep(value);
    }
    
    // the superclass calls _Refresh. Our _Refresh calls _updateButton
    // and _refreshAriaMinMaxValue.
    this._super(key, value);

    // when a dom element supports disabled, use that, and not aria-disabled.
    // having both is an error. 
    // having aria-disabled on root dom element is ok (if it is added in base class)
    if (key === "disabled")
    {
      if (value)
      {
        this.element.prop("disabled", true);
      }
      else 
      {
        this.element.prop("disabled", false);
      }
    }
    // when a dom element supports readonly, use that, and not aria-readonly.
    // having both is an error
    if (key === "readOnly")
    {
      if (value)
      {
        this.element.prop("readonly", true);
      }
      else 
      {
        this.element.prop("readonly", false);
      }
    }
//    // when min or max changes reset the validators
//    if (key === "max" || key === "min")
//    {
//      // min and max need to be 'undefined' to be reset in the numberrangevalidator
//      var min = this.options['min'] != null ? this.options['min'] : undefined, 
//      max = this.options['max'] != null ? this.options['max'] : undefined;
//      // since validators are immutable, they will contain min + max as local values. 
//      // Because of this will need to recreate
//      var numberRangeOptions = {'min': min, 
//          'max': max,
//          'converter': this._GetConverter()};
//
//      this._createRangeValidator(numberRangeOptions);
//      this._ResetAllValidators();
//    } 
  }, 
    /**
   * Reacts to changes to the 'min' and/or 'max' option by
   * resetting the NumberRangeValidator.
   * 
   * @param {String|Object|string=} key a single string representing a 
   * key or an object representing a group 
   * of options
   * @param {Object=} value of the key
   */
  option : function (key, value)
  {
    var retVal = this._superApply(arguments);
    
    // key === max, key === min, key is both min and max, so it's an object
    
    if (key === "max" || key === "min" || 
        (typeof key === "object" && 
         (key['min'] !== undefined || key['max'] !== undefined)))
    {
      var min = undefined, max = undefined;
      if (key === "max")
      {      
        max = value != null ? value : undefined;
      }
      else if (key === "min")
      {
        min = value != null ? value : undefined;
      }
      else
      {
        // it's an object
        if (key['max'] !== undefined)
          max = key['max'] != null ? key['max'] : undefined;
        if (key['min'] !== undefined)
          min = key['min'] != null ? key['min'] : undefined;
      }
      // since validators are immutable, they will contain min + max as local values. 
      // Because of this will need to recreate
      var numberRangeOptions = {'min': min, 
          'max': max,
          'converter': this._GetConverter()};

      this._createRangeValidator(numberRangeOptions);
      this._ResetAllValidators();
    }
    return retVal;
  },
  _createRangeValidator : function(options)
  {
    this._inputNumberDefaultValidators[oj.ValidatorFactory.VALIDATOR_TYPE_NUMBERRANGE] = 
      oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_NUMBERRANGE)
      .createValidator(options);
  },
  _coerceInputNumberValue : function (val)
  {
    // 
    if (val !== null)
      return val = + val;
  },
  // The user can clear out min/max by setting the option to null, so we
  // do not coerce null.
  _parse : function (val)
  {
    // do not coerce if null
    if (val === null)
      return val;
    // coerce non-null
    // Invalid options provided by the application are errors.  We do not continue.
    // be strict: we coerce if string so that "312123abc" becomes NaN 
    // and doesn't make it through. What about "", should that become null? + "" is 0
    // parseFloat("") is NaN
    var parsedVal;
    if (typeof val === "string" && val !== "")
      parsedVal = + val;
    else
      parsedVal = parseFloat(val);
    
    if (isNaN(parsedVal))
    {
      oj.Logger.error("min or max or step is not a number");// TODO throw an exception
      return null; // TODO change to an exception and blow up
    }
    else
      return parsedVal;

    // 
    // this was too lenient. It passed through Objects, like new Object(1),
    // and returned the Object, but I think I want the number! I decided to
    // use parseFloat for _parse/_parseStep since these are what the app developer
    // sets, not the user. We can be more strict for app develoers.
//    if (typeof val === "string" && val !== "")
//       val = + val;
//    
//    return val === "" || isNaN(val) ? null : val;

  },
  /* We are following the behavior of HTML-5 the best we can. According
   * to the spec, it says step must be a number greater than 0. 
   * Chrome defaults it to 1 if it is not. */
  _parseStep : function (val)
  {
    var defaultStep = 1;
    if (val === null)
      return defaultStep;
    var parsedStep = this._parse(val);
    // DEFAULT to 1 if it isn't > 0
    if (parsedStep === null || parsedStep <= 0)
      parsedStep = defaultStep;
    return parsedStep;
  },
  /* updates the aria-value information */
  _refreshAriaMinMaxValue : function ()
  {
    var valuenow = this._parse(this.options.value);
    var valuetext = this.element.val();
    
    this.element.attr(
    {
      "aria-valuemin" : this.options.min, "aria-valuemax" : this.options.max, 
      // TODO: what should we do with values that can't be parsed?
      // TODO: Ask Pavitra, do we need to parse the value?
      "aria-valuenow" : valuenow
    });
    if (!this._ValueEquals(""+valuenow, valuetext))
      this.element.attr({"aria-valuetext" : valuetext});
  },

  /**
   * Used for explicit cases where the component needs to be refreshed 
   * (e.g., when the value option changes or other UI gestures).
   * @override
   * @protected
   * @memberof! oj.ojInputNumber
   */
  _Refresh : function (name, value)
  {
    this._super(name, value);
    if (name === "value" || name === "max" || name === "min")
    {
      this._refreshAriaMinMaxValue();
    }
    this._updateButtons();
  },
  /**
   * Returns the default styleclass for the component.
   * 
   * @return {string}
   * @memberof! oj.ojInputNumber
   * @override
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-inputnumber";
  },
  /**
   * @override
   * @private
   */
  _destroy : function ()
  {    
    this.element.removeClass("oj-inputnumber-input")
            .prop("disabled", false)
            .removeAttr("autocomplete")
            .removeAttr("aria-valuemin")
            .removeAttr("aria-valuemax")
            .removeAttr("aria-valuenow")
            .removeAttr("aria-valuetext")
            .removeAttr("aria-disabled");
    // TODO: need a generic way to save off attributes and then restore them.
    // attribute name/value array.
    this.element.attr("type", this.saveType);
    this._super();
    this._off(this.element, "keydown keyup focus blur mousedown mouseup mouseenter mouseleave");
    this.uiInputNumber.replaceWith(this.element);
    clearTimeout(this.timer);
  },
  
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * Test authors should target inputNumber's sub elements using the following names:
   * <ul>
   * <li><b>oj-inputnumber-up</b>: the inputNumber's up arrow</li>
   * <li><b>oj-inputnumber-down</b>: the inputNumber's down arrow</li>
   * <li><b>oj-inputnumber-input</b>: the inputNumber's input</li>
   * </ul>
   * @expose
   * @override
   * @memberof! oj.ojInputNumber
   * @instance
   * @param {Object} locator An Object containing at minimum a subId property 
   * whose value is a string, documented by the component, that allows the component to 
   * look up the subcomponent associated with that string.  It contains:
   * <ul>
   * <li>
   * component: optional - in the future there may be more than one component 
   *   contained within a page element
   * </li>
   * <li>
   * subId: the string, documented by the component, that the component expects 
   * in getNodeBySubId to locate a particular subcomponent 
   * </li>
   * </ul>  
   * @returns {Element|null} the subcomponent located by the subId string 
   * passed in locator, if found.
   */
  getNodeBySubId: function(locator)
  {
    if (locator == null)
    {
      return this.element ? this.element[0] : null;
    }
    
    var subId = locator['subId'];
    if (subId === "oj-inputnumber-up") {
      return this.widget().find(".oj-inputnumber-up")[0];
    }
    if (subId === "oj-inputnumber-down") {
      return this.widget().find(".oj-inputnumber-down")[0];
    }
    if (subId === "oj-inputnumber-input") {
      return this.widget().find(".oj-inputnumber-input")[0];
    }
    
    
    // Non-null locators have to be handled by the component subclasses
    return null;
  },  
   /**
   * Whether the a value can be set on the component. 
   * If the component is disabled (or readOnly) then 
   * then setting value on component is a no-op. 
   * 
   * @see #_SetValue
   * @memberof! oj.ojInputNumber
   * @instance
   * @protected
   */
  _CanSetValue: function ()
  {
    var canSetValue = this._super();
    
    if (!canSetValue)
      return false;
    
    var readOnly = this.options['readOnly'] || false;
    
    if (readOnly)
    {
      return false;
    }
    
    return true;
  }, 
 /**
 * <p>Increments the value by the specified number of steps. 
 * Without the parameter, a single step is incremented.</p>
   <p>If the resulting value is above the max, below the min, 
   or results in a step mismatch, the value will be adjusted to the closest valid value.</p>
 * @public
 * @param {Number} steps - Number of steps to increment, defaults to 1.
 * @expose
 * @memberof! oj.ojInputNumber 
 */
  stepUp : function (steps)
  {
    this._step(steps, true);
  },
 /**
 * <p>Decrements the value by the specified number of steps. 
 * Without the parameter, a single step is decremented.</p>
   <p>If the resulting value is above the max, below the min, 
   or results in a step mismatch, the value will be adjusted to the closest valid value.</p>
 * @public
 * @param {Number} steps - Number of steps to decrement, defaults to 1.
 * @expose
 * @memberof! oj.ojInputNumber 
 */
  stepDown : function (steps)
  {
    this._step(steps, false);
  },  
  _step : function (steps, up)
  {
    this._start();
    if (up)
      this._spin((steps || 1) * this.options.step);
    else
     this._spin((steps || 1) *  - this.options.step);     
    this._stop();
  },
  /**
   * Returns a jQuery object containing the element visually representing the inputnumber. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj.ojInputNumber
   * @instance
   * @return {jQuery} the inputnumber
  */
  widget : function ()
  {
    return this.uiInputNumber;
  }
 
});
});
