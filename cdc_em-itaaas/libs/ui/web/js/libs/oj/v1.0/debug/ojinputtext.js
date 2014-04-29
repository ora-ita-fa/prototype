define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/**
 * @class
 * @name oj.inputBase
 * @augments oj.editableValue
 * @classdesc
 * <h3 id="inputBaseOverview-section">
 *   Abstract inputBase component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputBaseOverview-section"></a>
 * </h3>
 * 
 * <p>Description: The inputBase component takes care of general needs of other input components [i.e. text + password]
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 */
oj.__registerWidget("oj.inputBase", $['oj']['editableValue'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj",
  
  /**
   * Convenience Array which one can extend to set the attribute to a mandatory value if it doesn't exist or is set to something else 
   * [
   * {
   *    "attr"              : string - attribute associated to the task
   *    "setMandatory"      : value it must be set to [i.e. type="text"]
   * }
   * ]
   * 
   * Examples:
   * 1) [{"attr": "type", "setMandatory": "text"}]
   * 
   * @expose
   * @private
   */
  _ATTR_CHECK : [],
  
  /** 
   * Class names to be applied to this.element()
   * 
   * @expose
   * @private
   */
  _CLASS_NAMES : "",
  
  /** 
   * Class names to be applied to this.widget()
   * 
   * Note that if this value is defined then the this.element will be wrapped
   * 
   * @expose
   * @private
   */
  _WIDGET_CLASS_NAMES : "",
  
  /*
   * If defined will append a div element containing text to be read out by Jaws when focus is placed on the input element 
   * and the value will be used to locate the translated text to be read out by Jaws.
   * 
   * Note the component must also be wrapped
   * Used in conjunction with the above variable. Used to locate the translated text to be read out by Jaws
   * 
   * @expose
   * @private
   */
  _INPUT_HELPER_KEY: "",
  
  options : 
  {
    /** 
     * Regular expression pattern which will be used to validate the component's value. Note that option value 
     * always supercedes element's attribute value and it is best practice to pass the value as an option than to 
     * set it as an element's attribute.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">pattern</code> option:</caption>
     * $(".selector").ojInputText({pattern: "[a-zA-Z0-9]{3-9}"});<br/>
     * @example <caption>Initialize <code class="prettyprint">pattern</code> option from the html attribute 'pattern':</caption>
     * &lt;input type="text" id="username" value= "" pattern="[a-zA-Z0-9]{3,}" 
     *           title="Enter at least 3 alphanumeric characters"/><br/>
     * // reading the pattern option will return "[a-zA-Z0-9]{3-9}"
     * $(".selector").ojInputText("option", "pattern");<br/>
     * 
     * @expose 
     * @instance
     * @memberof! oj.inputBase
     * @type {string|undefined}
     */    
    pattern: undefined,
    
    /**
     * This option allows setting HTML5's placeholder attribute. Though it is possible to set 
     * placeholder attribute on the element itself, the component will only read the value during 
     * creation time; meaning any subsequent changes to the element's placeholder attribute will 
     * not be picked up.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">placeholder</code> option:</caption>
     * &lt;input id="userId" data-bind="ojComponent: {component: 'ojInputText', placeholder: 'User Name'}" /&gt;
     * @example <caption>Initialize <code class="prettyprint">placeholder</code> option from html attribute:</caption>
     * &lt;input id="userId" data-bind="ojComponent: {component: 'ojInputText'}" placeholder="User Name" /&gt;
     * 
     * // reading the placeholder option will return "User Name"
     * $(".selector").ojInputText("option", "placeholder");<br/>
     * 
     * 
     * @expose 
     * @instance
     * @memberof! oj.inputBase
     * @type {string|undefined}
     */    
    placeholder: undefined,
    
    /** 
     * Dictates component's readOnly state. Note that option value 
     * always supercedes element's attribute value and it is best practice to pass the value as an option than to 
     * set it as an element's attribute.
     * 
     * @example <caption>Initialize component with <code class="prettyprint">readOnly</code> option:</caption>
     * $(".selector").ojInputNumber({"readOnly": true});
     * 
     * @expose 
     * @type {boolean|undefined}
     * @default <code class="prettyprint">false</code>
     * @instance
     * @memberof! oj.inputBase
     */
    readOnly: undefined
  },
  
  /**
   * The base method needs to be overriden so that one can perform attribute check/set [i.e. ojInputText can only have type="text"] 
   * 
   * @protected
   * @override
   * @param {Object} element - jQuery selection to save attributes for
   * @instance
   * @memberof! oj.inputBase
   */
  _SaveAttributes : function (element)
  {
    var ret = this._superApply(arguments);
    
    this._processAttrCheck();
    
    return ret;
  },
  
  /**
   * Overridden to return defaults for pattern and readonly options by using the attr values set on
   * element.
   *  
   * @protected
   * @override
   * @instance
   * @memberOf !oj.inputBase
   */
  _InitOptions: function()
  {
    this._super();
    
    // READONLY: (boolean)
    // if options.readonly is not set (undefined), read from DOM not saved attributes
    // if options.readonly is not set to a valid value (boolean), throw error
    if (this.options['readOnly'] === undefined)
    {
      // TODO: In the absence of attribute set default value to false. Should default be null??
      this.options['readOnly'] = this.element.attr("readonly") !== undefined ? 
        !!this.element.prop("readonly") : false; 
    }
    if (typeof this.options['readOnly'] !== "boolean")
    {
      throw "Option 'readOnly' has an invalid value set: " + this.options['readOnly'];
    }
    
    // PATTERN: (string)
    // if options.pattern is not set, use pattern attribute on element.
    if (this.options['pattern'] === undefined)
    {
      this.options['pattern'] = this.element.prop("pattern"); // if not set this returns ""
    }
  },

  /**
   * 1) Initializes the options
   * 2) If needed wraps the input element, 
   * 
   * @protected
   * @override
   * @instance
   * @memberof! oj.inputBase
   */
  _ComponentCreate : function()
  {
    var node = this.element, 
        ret = this._superApply(arguments),
        savedAttributes = this._GetSavedAttributes(node);
    
    // update element state using options
    if (typeof this.options['readOnly'] === "boolean") 
    {
      this.element.prop("readonly", this.options['readOnly']);
    }
    
    if (this._DoWrapElement())
    {
      this._wrapElement();
    }
    
    // remove pattern attribute to not trigger html5 validation + inline bubble
    if ('pattern' in savedAttributes)
    {
      node.removeAttr('pattern');
    }
  
    return ret;
  },
  
  /**
   * 1) Updates component state based on the option values
   * 2) Adds the classname to the element [intentionally postponing till this process since the component might need to 
   *    reset this.element for some reason]
   * 3) Hooks up the blur handler
   * 4) If necessary appends an input helper to be read out by Jaws accessibility reader
   * 
   * @protected
   * @override
   * @instance
   * @memberof! oj.inputBase
   */        
  _AfterCreate : function () 
  {
    var ret = this._superApply(arguments);

    if(this.options["disabled"])
    {
      this.disable();
    }
    
    if(this._CLASS_NAMES) 
    {
      this.element.addClass(this._CLASS_NAMES);
    }
    
    this.element.on("blur", $.proxy(this._onBlurHandler, this));
    
    this._AppendInputHelper();
    
    return ret;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _setOption : function __setOption(key, value)
  {
    var retVal = this._super(key, value);
    
    if (key === "disabled")
    {
      this.element.attr("disabled", value);
    }
    
    if (key === "readOnly")
    {
      this.element.prop("readonly", !!value);
    }

    if (key === "pattern")
    {
      this.__defaultRegExpOptions['pattern'] = value;
    }
    
    return retVal;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _destroy : function __destroy()
  {
    var ret = this._superApply(arguments);
    
    this.element.off("blur");
    
    this.element.removeClass(this._CLASS_NAMES);
    
    if(this._inputHelper) 
    {
      this._inputHelper.remove();
    }
    
    if(this._DoWrapElement())
    {
      this.element.unwrap();
    }
    
    return ret;
  },
  
  /**
   * Performs the attribute check/set by using _ATTR_CHECK variable [i.e. ojInputText must have type be set to "text"].
   * 
   * @private
   */
  _processAttrCheck : function __processAttrCheck()
  {
    
    var attrCheck = this._ATTR_CHECK;
    
    for(var i=0, j=attrCheck.length; i < j; i++) 
    {
      var attr = attrCheck[i]["attr"],
          setMandatoryExists = "setMandatory" in attrCheck[i];
      
      //if it doesn't exist just have to check whether one should set it to a mandatory value
      if(setMandatoryExists)
      {
        this.element.attr(attr, attrCheck[i]["setMandatory"]);
      }
    }
  },
  
  /**
   * Invoked when blur is triggered of the this.element
   * 
   * @ignore
   * @protected
   * @param {Event} event
   */
  _onBlurHandler : function __onBlurHandler(event) 
  {
    this._SetValue(this._GetDisplayValue(), event);
  },
  
  /**
   * Whether the this.element should be wrapped. Method so that additional conditions can be placed
   * 
   * @ignore
   * @protected
   * @return {boolean}
   */
  _DoWrapElement : function ()
  {
    return this._WIDGET_CLASS_NAMES;
  },
  
  /**
   * Wraps the this.element and adds _WIDGET_CLASS_NAMES classes to the wrapped element
   * 
   * @private
   */
  _wrapElement : function __wrapElement() 
  {
    $(this.element).wrap( $("<div>").addClass(this._WIDGET_CLASS_NAMES) );
    this._wrapper = this.element.parent();
  },
  
  /**
   * In some complex components [i.e. datepicker], when the input element receives focus we wish to have Jaws read 
   * out some content.
   * 
   * For those case does this method exist.
   *  
   * @protected
   * @instance
   * @memberOf !oj.inputBase
   */
  _AppendInputHelper : function __AppendInputHelper()
  {
    if(this._INPUT_HELPER_KEY && this._DoWrapElement()) 
    {
      var helperLabeledById = this._GetSubId(this._INPUT_HELPER_KEY);
      
      this.element.attr("aria-labelledby", helperLabeledById);
      this._inputHelper = $("<div class='oj-helper-hidden-accessible' id='" + helperLabeledById + "'>" + 
                              this.getTranslatedString(this._INPUT_HELPER_KEY) + "</div>");
      this.widget().append(this._inputHelper);
    }
  },
  
  /**
   * Called when the label DOM changes. This method resets any validators that rely on the label.
   * 
   * @protected
   * @override
   * @instance
   * @memberof! oj.inputBase
   */
  _RefreshLabelDependents : function ()
  {
    // for now reset all validators
    this.__defaultRegExpOptions = {};
    this._super();
  },
  
  /**
   * Sets up the default regExp validator.
   * 
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof! oj.inputBase
   */
  _GetDefaultValidators : function ()
  {
    var ret = this._superApply(arguments), validatorMap = {};

    // register a default RegExp validator if we have a valid pattern
    if (this.options['pattern'])
    {
      // add validator to the special internalValidators list. These are validators created by 
      // the framework. We don't want these cleared using the option - 'validators'
      validatorMap[oj.ValidatorFactory.VALIDATOR_TYPE_REGEXP] = this._getDefaultRegExpValidator();
    }
    
    return $.extend(validatorMap, ret);
  },
  
  /**
   * Returns the regexp validator instance or creates it if needed and caches it.
   * @private
   */
  _getDefaultRegExpValidator : function ()
  {
    var vf;
    this.__defaultRegExpOptions = {'pattern': this.options['pattern'], 
                                   'label': this._getLabelText()};

    vf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_REGEXP);
    return vf ? vf.createValidator(this.__defaultRegExpOptions) : null;
  },  
  
  /**
   * This helper function will generate ids using widget's uuid as unique identifier for 
   * wai-aria and other necessary ids
   * 
   * @ignore
   * @protected
   * @param {string} sub
   * @return {string}
   */
  _GetSubId : function __getSubId(sub)
  {
    return this["uuid"] + "_" + sub;
  },
  
  /**
   * @ignore
   * @protected
   * @return {boolean}
   */
  _IsRTL : function ()
  {
    return this._GetReadingDirection() === "rtl";
  },
  
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * @expose
   * @override
   * @param {Object} locator An Object containing at minimum a subId property whose value is a string, documented by the component, that allows the component to 
   *                        look up the subcomponent associated with that string.  It contains:<p>
   *                        component: optional - in the future there may be more than one component contained within a page element<p>
   *                        subId: the string, documented by the component, that the component expects in getNodeBySubId to locate a particular subcomponent
   * @returns {Object|null} the subcomponent located by the subId string passed in locator, if found.<p>
   */
  getNodeBySubId: function(locator)
  {
    if (locator == null)
    {
      return this.element ? this.element[0] : null;
    }
    return null;
  },
  
  widget : function _widget() 
  {
    return this._DoWrapElement() ? this._wrapper : this.element;
  }

});
/*!
 * JET Input  Text @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundertion and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Depends:
 *  jquery.ui.widget.js
 */
/**
 * @class
 * @name oj.ojInputText
 * @augments oj.inputBase
 * 
 * @classdesc
 * <h3 id="inputTextOverview-section">
 *   JET ojInputText Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputTextOverview-section"></a>
 * </h3>
 * 
 * <p>Description: The ojInputText component enhances a browser input type="text" element.
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-inputText" )            // selects all JET input on the page
 * </code>
 * </pre>
 * 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>
 *    &lt;input id="textId" data-bind="ojComponent: {component: 'ojInputText'}" /&gt;
 * </code>
 * </pre>
 * 
 * @desc Creates or re-initializes a JET ojInputText
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the input element with no options specified:</caption>
 * $( ".selector" ).ojInputText();
 * 
 * * @example <caption>Initialize the input element with some options:</caption>
 * $( ".selector" ).ojInputText( { "disabled": true } );
 * 
 * @example <caption>Initialize the input element via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;input id="textId" data-bind="ojComponent: {component: 'ojInputText'}" /&gt;
 */
oj.__registerWidget("oj.ojInputText", $['oj']['inputBase'],
{
  version : "1.0.0",  
  defaultElement : "<input>", 
  widgetEventPrefix : "oj", 
  
  /** 
   * @expose
   * @private
   */
  _ATTR_CHECK : [{"attr": "type", "setMandatory": "text"}],
  
  /** 
   * @expose
   * @private
   */
  _CLASS_NAMES : "oj-inputtext-input",
  
  /** 
   * @expose
   * @private
   */
  _WIDGET_CLASS_NAMES : "oj-inputtext oj-form-control oj-component",
  
  /**
   * @override
   * @protected
   * @return {string}
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-inputtext";
  }
  
});
/*!
 * JET TextArea @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundertion and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Depends:
 *  jquery.ui.widget.js
 */
/**
 * @class
 * @name oj.ojTextArea
 * @augments oj.inputBase
 * 
 * @classdesc
 * <h3 id="textAreaOverview-section">
 *   JET ojTextArea Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#textAreaOverview-section"></a>
 * </h3>
 * 
 * <p>Description: The ojTextArea component enhances a browser textarea element.
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-textarea" )            // selects all JET textarea on the page
 * </code>
 * </pre>
 * 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>
 *    &lt;textarea id="textAreaId" data-bind="ojComponent: {component: 'ojTextArea'}" &gt;&lt;/textarea&gt;
 * </code>
 * </pre>
 * 
 * @desc Creates or re-initializes a JET ojTextArea.
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the textarea with no options specified:</caption>
 * $( ".selector" ).ojTextArea();
 * 
 * * @example <caption>Initialize the textarea with some options:</caption>
 * $( ".selector" ).ojTextArea( { "disabled": true } );
 * 
 * @example <caption>Initialize the textarea via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;textarea id="textAreaId" data-bind="ojComponent: {component: 'ojTextArea'}" &gt;&lt;/textarea&gt;
 */
oj.__registerWidget("oj.ojTextArea", $['oj']['inputBase'],
{
  version : "1.0.0",  
  defaultElement : "<textarea>", 
  widgetEventPrefix : "oj", 
  
  /** 
   * @expose
   * @private
   */
  _ATTR_CHECK : [],
  
  /** 
   * @expose
   * @private
   */
  _CLASS_NAMES : "oj-textarea-input",
  
  /** 
   * @expose
   * @private
   */
  _WIDGET_CLASS_NAMES : "oj-textarea oj-form-control oj-component",
  
  /**
   * @override
   * @protected
   * @return {string}
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-textarea";
  }
  
});
/*!
 * JET Input Password @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundertion and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Depends:
 *  jquery.ui.widget.js
 */
/**
 * @class
 * @name oj.ojInputPassword
 * @augments oj.inputBase
 * 
 * @classdesc
 * <h3 id="inputPasswordOverview-section">
 *   JET ojInputPassword Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputPasswordOverview-section"></a>
 * </h3>
 * 
 * <p>Description: The ojInputPassword component enhances a browser input type="password" element.
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-inputPassword" )            // selects all JET input on the page
 * </code>
 * </pre>
 * 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>
 *    &lt;input id="passwordId" data-bind="ojComponent: {component: 'ojInputPassword'}" /&gt;
 * </code>
 * </pre>
 * 
 * @desc Creates or re-initializes a JET ojInputPassword
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the input element with no options specified:</caption>
 * $( ".selector" ).ojInputPassword();
 * 
 * * @example <caption>Initialize the input element with some options:</caption>
 * $( ".selector" ).ojInputPassword( { "disabled": true } );
 * 
 * @example <caption>Initialize the input element via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;input id="passwordId" data-bind="ojComponent: {component: 'ojInputPassword'}" /&gt;
 */
oj.__registerWidget("oj.ojInputPassword", $['oj']['inputBase'],
{
  version : "1.0.0",  
  defaultElement : "<input>", 
  widgetEventPrefix : "oj", 
  
  /** 
   * @expose
   * @private
   */
  _ATTR_CHECK : [{"attr": "type", "setMandatory": "password"}],
  
  /** 
   * @expose
   * @private
   */
  _CLASS_NAMES : "oj-inputpassword-input",
  
  /** 
   * @expose
   * @private
   */
  _WIDGET_CLASS_NAMES : "oj-inputpassword oj-form-control oj-component",
  
  /**
   * @override
   * @protected
   * @return {string}
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-inputpassword";
  }
   
});
});
