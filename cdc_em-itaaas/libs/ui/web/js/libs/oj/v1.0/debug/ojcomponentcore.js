define(['ojs/ojcore', 'jquery', 'jqueryui'], function(oj, $)
{
/*
** Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
**
**34567890123456789012345678901234567890123456789012345678901234567890123456789
*/


/**
 * @class JET Component services
 * @export
 */
oj.Components = {};


/**
 * Sets default options values for JET components.
 * @param {Object} options - property values that will be merged into the values
 * that were previously set using this method. The options object is expected to have the format demonstrated
 * by the following example:
 * <pre>
 * {
 *   'default': // properties for all JET components 
 *   {
 *     'option1': 'somevalue'
 *   },
 *   'editableValue': // properties for editableValue components 
 *   {
 *     'option1': 'somevalue1',
 *     'option2': oj.Components.createDynamicPropertyGetter(function(context){
 *                                 return context['containers'].indexOf('ojTable') >= 0 ? 'tableValue' : 'normalValue'})
 *   },
 *   'ojText': // properties for instances of ojText 
 *   {
 *     'option1': 'somevalue2'
 *   }
 * }
 * </pre>
 * To specify a dynamic getter for the property, pass your callback to oj.Components.createDynamicPropertyGetter(). Note
 * that dynamic getters nested within a complex property value are not supported
 * @see oj.Components.createDynamicPropertyGetter
 * @export
 */
oj.Components.setDefaultOptions = function(options)
{
  oj.Components._defaultProperties = $.widget.extend(oj.Components._defaultProperties || {}, options);
};

/**
 * Retrieves default option values for JET components.
 * @return {Object} default option values
 * @see oj.Components.setDefaultOptions
 * @export
 */
oj.Components.getDefaultOptions = function()
{
  return (oj.Components._defaultProperties || {});
};


/**
 * Creates a dynamic getter that can be used as a property value in oj.Components.setDefaultOptions()
 * @param {!Function} callback - dynamic property callback. The callback will receive a context object as a parameter.
 * The following properties are currently supported on the context object:
 * <ul>
 * <li>containers - an array of component names of the current component's containers that require special behavior from
 * their children</li>
 * </ul>
 * The callback should return the computed property value
 * 
 * @return {Object} - dynamic property getter
 * @see oj.Components.setDefaultOptions
 * @export
 */
oj.Components.createDynamicPropertyGetter = function(callback)
{
  return new __ojDynamicGetter(callback, true);
};

/**
 * Retrieves widget constructor associated with the HTML element
 * or null if none is found. The returned constructor is already bound to the associated 
 * JQuery element, so it can be invoked as a function directly. For example:
 * <pre>
 * widgetConstructor("option", "label", "custom"); // sets label option
 * </pre>
 * If widgetName is not specified, and if more than one widget is associated with the element, 
 * the method will a return the widget that was created first.
 * @param {Element} element - HTML element
 * @param {string=} widgetName - optional widget name
 * @return {Function|null} widget constructor
 * @export
 */
oj.Components.getWidgetConstructor = function(element, widgetName)
{
  var jelem = $(element);
  
  if (widgetName == null)
  {
    var data = jelem.data(_OJ_WIDGET_NAMES_DATA);
    if (data)
    {
      widgetName = data[0]; 
    }
  }
  
  if (widgetName != null)
  {
    var func = jelem[widgetName];
    if ((typeof func) === "function")
    {
      return func.bind(jelem);
    }
  }
  
  return null;
};

/**
 * @constructor
 * @param {Function} callback
 * @param {boolean=} needsDynamicContext
 * @private
 */
function __ojDynamicGetter(callback, needsDynamicContext)
{
  this.getCallback = function()
  {
    return callback;
  }
  this.isDynamicContextNeeded = function()
  {
    return needsDynamicContext;
  }
};


/**
 * @private
 */
oj.Components._OJ_CONTAINER_ATTR = "data-oj-container";

/**
 * @private
 */
var _OJ_WIDGET_NAMES_DATA = "oj-component-names";

/*
** Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
**
**34567890123456789012345678901234567890123456789012345678901234567890123456789
*/
/*jslint browser: true*/

/**
 * @class
 * @abstract
 * @name oj.baseComponent
 */
$.widget('oj.baseComponent', 
{
  options: 
  {
    /**
     * JQ selector identifying the JET Menu that the component should launch as a context menu on right-click or <kbd>Shift-F10</kbd>. If specified, 
     * the browser's native context menu will be replaced by the specified JET Menu.
     * 
     * <p>To specify a JET context menu on a DOM element that is not a JET component, see the <code class="prettyprint">ojContextMenu</code> binding.  
     * 
     * <p>To make the page semantically accurate from the outset, applications are encouraged to specify the context menu via the standard 
     * HTML5 syntax shown in the below example.  When the component is initialized, the context menu thus specified will be set on the component.
     * 
     * <p>The JET Menu should be initialized before any component using it as a context menu.
     * 
     * @expose
     * @memberof! oj.baseComponent
     * @instance
     * @type {Object}
     * @default <code class="prettyprint">null</code>
     * 
     * @example <caption>Initialize a JET component with a context menu:</caption>
     * // via recommended HTML5 syntax:
     * &lt;div id="myComponent" contextmenu="myMenu" data-bind="ojComponent: { ... }>
     * 
     * // via JET initializer (less preferred) :
     * $( ".selector" ).ojFoo({ "contextMenu": "#myMenu" });
     * 
     * @example <caption>Get or set the <code class="prettyprint">contextMenu</code> option, after initialization:</caption>
     * // getter
     * var menu = $( ".selector" ).ojFoo( "option", "contextMenu" );
     * 
     * // setter
     * $( ".selector" ).ojFoo( "option", "contextMenu", ".my-marker-class" );
     * 
     * @example <caption>Set a JET context menu on an ordinary HTML element:</caption>
     * &lt;a href="#" id="myAnchor" contextmenu="myMenu" data-bind="ojContextMenu: {}">Some text</a>
     */
    contextMenu: null,
    
    /**
     * Attributes specified here will be set on the component's root DOM element at creation time.
     * This is particularly useful for components like Dialog that wrap themselves in a root element
     * at creation time.
     * 
     * <p>The specified <code class="prettyprint">class</code> and <code class="prettyprint">style</code> are 
     * appended to the current class and style, respectively.  All other attributes overwrite any existing value.
     * 
     * <p>Setting this option after component creation has no effect.  
     *
     * @example <caption>Initialize a JET component, specifying a set of attributes to be set
     * on the component's root DOM element:</caption>
     * $( ".selector" ).ojFoo({ "rootAttributes": {
     *   'id': 'myId', 
     *   'style': 'max-width:100%; color:blue;', 
     *   'class': 'my-class'
     * }});
     * 
     * @expose
     * @memberof! oj.baseComponent
     * @instance
     * @type {Object|undefined}
     * @default <code class="prettyprint">undefined</code>
     */
    rootAttributes: undefined
  },
  
  /**
   * Refreshes the widget.
   * 
   * @expose
   * @memberof! oj.baseComponent
   * @instance
   */
  refresh: function()
  {
    this._propertyContext = null;
  },
  
  /**
   * Reads the <code class="prettyprint">rootAttributes</code> option, and sets the root attributes on the 
   * component's root DOM element.
   * 
   * <p><code class="prettyprint">class</code> and <code class="prettyprint">style</code> are appended
   * to the current class and style, respectively.  All other attributes overwrite any existing value.
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _SetRootAttributes : function () 
  {
    var value = this.options.rootAttributes;
    if (value)
    {
      var widget = this.widget();
      if (widget == null)
        return;
      
      var classValue = value["class"];
      
      if (classValue)
      {
        widget.addClass(classValue);
      }
      
      var styleValue = value["style"];
      
      if (styleValue)
      {
        var currStyle = widget.attr('style');
        
        if (currStyle)
        {
          widget.attr('style', currStyle + ';' + styleValue);
        }
        else
        {
          widget.attr('style', styleValue);
        }
      }
      
      // make shallow copy, remove class and style from the copy, and set all 
      // remaining attrs on the element
      value = $.extend({}, value); 
      delete value['class'];
      delete value['style'];
      
      widget.attr(value);
    }
  },

  /*
   * It's recommended that you override @link oj.baseComponent#_ComponentCreate and 
   * @link oj.baseComponent#_AfterCreate, instead of this method to render your component. This 
   * method saves off all element attributes (retrieved using 
   * @link oj.baseComponent#_GetSavedAttributes) and then calls _InitOptions(), _ComponentCreate(),
   * _AfterCreate() in that order.
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   * TODO: JSDoc!!  (with at-protected tag, at-final, etc.)
   */
  _create : function()
  {
    this._SaveAttributes(this.element);
    this._InitOptions();
    this._ComponentCreate();
    this._AfterCreate();
  },
  
  /**
   * Overridden to return component-specific translations and default options specified with 
   * oj.Components.setDefaultOptions()
   * @private
   */
  _getCreateOptions: function()
  {
    var defaults = {};
    
    // Load component translations
    var getters = {};
    this._RegisterTranslatedOptionGetters(getters);
    
    // wrap translation getters in the __ojDynamicGetter wrapper do distinguish them
    // from regular functions
    for (var prop in getters)
    {
      defaults[prop] = new __ojDynamicGetter(getters[prop]);
    }
    
    // Load options specified with oj.Components.setDefaultOptions()
    var widgetHierNames = [];
    var proto = this.constructor.prototype;
    while (proto != null && proto.widgetName)
    {
      widgetHierNames.push(proto.widgetName);
      proto = Object.getPrototypeOf(proto);
    }
    
    widgetHierNames.push('default');
    
    var allProperties = oj.Components.getDefaultOptions();
    
    // merge properties applicable to this component
    for (var i= widgetHierNames.length; i>=0; i--)
    {
      var name = widgetHierNames[i];
      var props = allProperties[name];
      if (props !== undefined)
      {
        defaults = $.widget.extend(defaults, props);
      }
    }
    
    return defaults;
  },

  /**
   * <p>This method is called before <code class="prettyprint">_ComponentCreate</code>, at which point the component has not yet 
   * been rendered.  Component options should be initialized in this method, so that their final values are in place when 
   * <code class="prettyprint">_ComponentCreate</code> is called. 
   * 
   * <p>This includes getting option values from the DOM, where applicable, and coercing option values (however derived) to their 
   * appropriate data type.  No other work should be done in this method.  See below for details.
   * 
   * <p>Overrides of this method should call <code class="prettyprint">this._super</code> first.
   * 
   * <p>Usage:
   * 
   * <ul>
   * <li>If the component has an option like <code class="prettyprint">disabled</code> that can be set from the DOM 
   * at create time, then the "get from DOM" logic should live in this method.  E.g. a typical override might say "if 
   * the <code class="prettyprint">disabled</code> option still has its initial value of <code class="prettyprint">undefined</code>
   * (i.e., the option has not been set), then get the DOM property and set it on the option." (See also next bullet.)</li>
   * 
   * <li>For attributes that live on the component's root node, keep in mind that anything specified via 
   * the <code class="prettyprint">rootAttributes</code> option will not be placed on the DOM until 
   * <code class="prettyprint">_AfterCreate</code>.  So when getting attributes from the root node, components must first look in the 
   * <code class="prettyprint">rootAttributes</code> option, and then, only if the attribute is not found there, look on the component 
   * root (if it already exists).</li>
   * 
   * <li>For options that, unlike <code class="prettyprint">disabled</code>, have no corresponding DOM property, and are not otherwise 
   * set from the DOM, there is nothing to do in this method.</li>
   * 
   * <li>Do NOT set anything on the DOM in this method (like the resolved <code class="prettyprint">disabled</code> value, or any 
   * <code class="prettyprint">rootAttributes</code> values). The resolved option values should be set on the DOM later, in 
   * <code class="prettyprint">_ComponentCreate</code>, and the <code class="prettyprint">rootAttributes</code> values are set in 
   * <code class="prettyprint">baseComponent._AfterCreate</code>.</li>
   * </ul> 
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _InitOptions : function ()
  {
    this._setupDynamicProperties();
  },
  
  /**
   * <p>All component create-time initialization lives in this method, except the logic that specifically 
   * needs to live in <code class="prettyprint">_InitOptions</code> or <code class="prettyprint">_AfterCreate</code>, 
   * per the documentation for those methods.  All DOM creation must happen here, since the intent of 
   * <code class="prettyprint">_AfterCreate</code> is to contain superclass logic that must run after that DOM is created.  
   * 
   * <p>Overrides of this method should call <code class="prettyprint">this._super</code> first.
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _ComponentCreate : function ()
  {
    this['activeable'] = $();
    this._setupDynamicProperties();
    
    // Store widget name, so that oj.Components.getWidgetConstructor() can get widget from the element
    _storeWidgetName(this.element, this.widgetName);
  },
          
  /**
   * This method is called after <code class="prettyprint">_ComponentCreate</code>.  The JET base component does 
   * tasks here that must happen after the component (subclass) has created itself in its override of 
   * <code class="prettyprint">_ComponentCreate</code>.  Notably, the base component handles the 
   * <code class="prettyprint">rootAttributes</code> and <code class="prettyprint">contextMenu</code> options here, 
   * since those options operate on the component root node, which for some components is created in their override 
   * of <code class="prettyprint">_ComponentCreate</code>. 
   * 
   * <p>Subclasses should override this method only if they have tasks that must happen after a superclass's 
   * implementation of this method, e.g. tasks that must happen after the context menu is set on the component.
   * 
   * <p>Overrides of this method should call <code class="prettyprint">this._super</code> first.
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _AfterCreate : function ()
  {
    this._SetRootAttributes(); // do first, since has no dependencies, but other stuff might care about these attrs
    
    // namespace facilitates removing contextMenu handlers separately, if app clears the "contextMenu" option
    this.contextMenuEventNamespace = this.eventNamespace + "contextMenu";
    this._setupContextMenu(); 
  },
  
  /**
   * Saves the element's attributes within an internal variable to be reset during the destroy function
   *
   * The JSON variable will be held as :
   * [
   *   {
   *   "element" : element[i], 
   *   "attributes" : 
   *     {
   *       attributes[m]["name"] : {"attr": attributes[m]["value"], "prop": $(element[i]).prop(attributes[m]["name"])
   *     }
   *   }
   * ]
   *
   * @param {Object} element - jQuery selection to save attributes for
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _SaveAttributes : function (element)
  {
    var self = this;
    this._savedAttributes = [];

    $.each(element, function (index, ele)
    {
      //need to be able to save for multiple elements 
      var saveAttributes = {},
          save = { "element" : ele, "attributes" : saveAttributes },
          attributes = ele.attributes;
      
      self._savedAttributes.push(save);
      
      $.each(attributes, function (index, attr)
      {
        var attrName = attr["name"], attrValues = { "attr" : attr["value"] };
        
        // for proper access certain so called attributes should be accessed as properties 
        // [i.e. required]
        attrValues["prop"] = $(ele).prop(attrName);
        saveAttributes[attrName] = attrValues;
      });
  
    });
  
  },
  
  /**
   * Gets the saved attributes for the provided element. This is usually the original list of 
   * attributes set on the element.
   *
   * @param {Object} element - jQuery selection, should be a single entry
   * @return {Object} savedAttributes - attributes that were saved for this element. 
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _GetSavedAttributes : function (element)
  {
    var savedAttributes = this._savedAttributes;
  
    element = element[0];
  
    for (var i = 0, j = savedAttributes.length;i < j;i++)
    {
      var curr = savedAttributes[i];
      
      if (curr["element"] === element)
      {
        return curr["attributes"];
      }
    }
  
    return {};
  },
  
  /**
   * Restores the saved element's attributes
   *
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _RestoreAttributes : function ()
  {
    
    $.each(this._savedAttributes, function (index, savedAttr)
    {
  
      var element = $(savedAttr["element"]), 
          attributes = savedAttr["attributes"];
  
      //sanity check
      if (element.length === 1)
      {
	    var currAttr = savedAttr["element"].attributes,
		    removeAttr = [];
		
		//request is to remove any attributes that didn't exist previously
		
		for(var i=0, j=currAttr.length; i < j; i++) 
		{
		  if(!(currAttr[i]["name"] in attributes)) 
		  {
		    removeAttr.push(currAttr[i]["name"]);
		  }
		}
		
		for(var i=0, j=removeAttr.length; i < j; i++) 
		{
		  element.removeAttr(removeAttr[i]);
		}
		
        for (var attribute in attributes)
        {
          element.attr(attribute, attributes[attribute]["attr"]);
        }
      }
  
    });
  
  },
  
  /**
   * Registers getters for the component's translated properties
   * @param {Object} getters - object where the getter functions may be added.
   * Property name should be used as a key, and the getter function should be used as a value
   * The getter will be passed option name as a parameter
   * @memberof! oj.baseComponent
   * @protected
   */
  _RegisterTranslatedOptionGetters: function(getters)
  {
    var sectionName = this._GetTranslationsSectionName();
    
    var translations = oj.Translations.getComponentTranslations(sectionName) || {};
   
    for (var prop in translations)
    {
      getters[prop] = function(name)
                      {
                        return oj.Translations.getComponentTranslations(sectionName)[name];
                      };
    }
  },
  
  /**
   * Determines the name of the translation bundle section for this component
   * @return {string} the name of this component's translations section
   * 
   * @memberof! oj.baseComponent
   * @protected
   */
  _GetTranslationsSectionName: function()
  {
    return this.widgetFullName;
  },
  
  
  /**
   * Retrieves a translated string after inserting optional parameters
   * @param {string} key the translations resource key
   * The key is used to retrieve a format pattern from the component options, or if none
   * is found - from the translated resource bundle.
   * Tokens like {0}, {1}, {name} within the pattern will be used to define placement
   * for the optional parameters.  Token strings should not contain comma (,) 
   * or space characters, since they are reserved for future format type enhancements.
   * The reserved characters within a pattern are:
   * $ { } [ ]  
   * These characters will not appear in the formatted output unless they are escaped
   * with a dollar character ('$').
   * 
   * @param {...string|Object|Array} var_args  - optional parameters to be inserted into the 
   * translated pattern.
   * 
   * If more than one var_args arguments are passed, they will be treated as an array 
   * for replacing positional tokens like {0}, {1}, etc.
   * If a single argument is passed, it will be treated as a Javascript Object whose
   * keys will be matched to tokens within the pattern. Note that an Array is just
   * a special kind of such an Object.
   * 
   * For backward compatibility, a var_args argument whose type is neither 
   * Object or Array will be used to replace {0} in the pattern.
   * @return formatted translated string or the key argument if the resource for the
   * key was not found
   * @private
   */
  getTranslatedString : function (key, var_args)
  {
    var params = {}, pattern;
  
    if (arguments.length > 2)
    {
      params = Array.prototype.slice.call(arguments, 1);
    }
    else if (arguments.length == 2)
    {
      params = arguments[1];
      if (typeof params !== 'object' && !(params instanceof Array))
      {
        params = [params];
      }
        
    }
    pattern = this.options[key];
    // pattern could be undefined
    return (pattern == null) ? key : oj.Translations.applyParameters(pattern.toString(), params);
  },
  
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * 
   * @param {Object} locator An Object containing at minimum a subId property whose value is a string, documented by the component, that allows the component to 
   * look up the subcomponent associated with that string.  It contains:<p>
   * component: optional - in the future there may be more than one component contained within a page element<p>
   * subId: the string, documented by the component, that the component expects in getNodeBySubId to 
   * locate a particular subcomponent.
   *    
   * @returns {Element|null} the subcomponent located by the subId string passed in locator, if found.<p>
   * @expose
   * @memberof! oj.baseComponent
   * @instance
   * 
   */
  getNodeBySubId: function(locator)
  {
    if (locator == null || locator['subId'])
    {
      return this.element ? this.element[0] : null;
    }
    
    // Non-null locators have to be handled by the component subclasses
    return null;
  },
  
  /**
   * Overridden to set oj-hover and oj-focus classes
   * @private
   */
  'destroy': function()
  {
    this._unbindContextMenu();
    this._super();
    
    // clean up states
    this.widget().removeClass( "oj-disabled" );
    this['hoverable'].removeClass( "oj-hover" );
    this['focusable'].removeClass( "oj-focus" );
    this['activeable'].removeClass( "oj-active" );
    
    _removeWidgetName(this.element, this.widgetName);
	
	//this._RestoreAttributes();
  },
  
  /**
   * Overridden to set an instance variable indicating that a particular property
   * is being mutated (for use by _defineDynamicProperty())
   * @private
   */
  option: function(key, value)
  {
    var retval;
    if (arguments.length > 0 &&  typeof key === "string" && value !== undefined)
    {
      var dotIndex = key.indexOf('.');
      if (dotIndex > 0)
      {
        this._settingOption = key.substring(0, dotIndex);
      }
    }
    try
    {
      retval = this._superApply(arguments);
    }
    finally
    {
      this._settingOption = null;
      return retval;
    }
  },
        
  /**
   * This method has several overloads, which gets and set component options.
   * 
   * <p>The first overload accepts a single <code class="prettyprint">optionName</code> param as a string, and returns 
   * the current value of that option.  
   * 
   * <p>The second overload accepts two params, an <code class="prettyprint">optionName</code> string and a new value to 
   * which that option will be set.
   * 
   * <p>The third overload accepts no params, and returns a map of key/value pairs 
   * representing all the component options and their values.
   * 
   * <p>The fourth overload accepts a single map of option-value pairs to set on the component. 
   * 
   * @method
   * @name oj.baseComponent#option
   * @memberof! oj.baseComponent
   * @instance
   * 
   * @param {string|Object=} optionName the option name (string, first two overloads), or the map (Object, last overload).
   *        Omitted in the third overload.
   * @param {Object=} value a value to set for the option.  Second overload only.
   * @return {Object|undefined} The getter overloads return the retrieved value(s).  When called via the public jQuery syntax, the setter overloads 
   *         return the object on which they were called, to facilitate method chaining.
   * 
   * @example <caption>First overload: get one option:</caption>
   * var isDisabled = $( ".selector" ).ojFoo( "option", "disabled" ); // Foo is Button, Menu, etc.
   * 
   * @example <caption>Second overload: set one option:</caption>
   * $( ".selector" ).ojFoo( "option", "disabled", true ); // Foo is Button, Menu, etc.
   * 
   * @example <caption>Third overload: get all options:</caption>
   * var options = $( ".selector" ).ojFoo( "option" ); // Foo is Button, Menu, etc.
   * 
   * @example <caption>Fourth overload: set one or more options:</caption>
   * $( ".selector" ).ojFoo( "option", { disabled: true } ); // Foo is Button, Menu, etc.
   */
  // option() method declared in superclass, but we still want the above API doc.
  
  /**
   * Overridden to set oj-hover and oj-focus classes
   * @private
   */
  _setOption: function( key, value )
  {
    if ( key === "disabled" )
    {
      // The JQUI superclass method has hard-coded style classes in the 'if key === "disabled"' block, so unfortunately 
      // we must copy that logic here with updated style classes, and NOT call _super() for the disabled case.
      // TBD: keep this logic updated if superclass method changes.  
      this.options[ key ] = value;
      
      // TBD: widget() is not always the thing that should have aria-disabled on it.  E.g. for the checkbox/radio flavors of ojButton, 
      // widget() returns the root node, but aria-disabled belongs on the <input>.  We fixed this JQUI bug in ojButton by having ojButton
      // override this method to remove it from the root node and add it to the input.  Would be better for each component to know which 
      // element to apply that to, e.g. an overridable method returning that element, or copying "hoverable" paradigm if appropriate.  
      // In the cases where this.element is different than widget(), this.element is more likely to be the right thing, so maybe change 
      // default to that.
      this.widget()
	  .toggleClass( "oj-disabled", !!value )
	  .attr( "aria-disabled", value );
      
      if (value) 
      {
          this['hoverable'].removeClass( "oj-hover" );
          this['focusable'].removeClass( "oj-focus" );
          // TODO: when we have worked out the 'create' super code change,
          // this this check should not be necessary. Right now, this gets
          // called before _create for radioset (and possibly others) when
          // we create a component like ojRadioset({disabled: true});
          if (!this['activeable'])
            this['activeable'] = $(); 
          this['activeable'].removeClass( "oj-active" );
      }
    }
    else {
      this._super(key, value); // disabled is the only key for which we don't call _super()
      
      if ( key === "contextMenu" )
        this._setupContextMenu();
    }
    
    return this;
  },
  
  /*
   * This method adds/removes a contextMenu listener on the component, based on the component's "contextMenu" option.
   * It is private since the logic that is likely to vary by component is encapsulated in the protected callees 
   * <code class="prettyprint">_listenerNodes()</code> and <code class="prettyprint">_showContextMenu()</code>.
   * 
   * TODO: all API doc at-tags, including @private, then add 2nd star at top.
   */
  _setupContextMenu: function()
  {
    this._unbindContextMenu();
    
    var menu = this.options.contextMenu;
    // menu is selector like "#myMenuId", or null, or some malformed thing.
    
    // TODO: move this part to _InitOptions, in the trxn that handles that refactoring
    if (!menu)
    {
        menu = this.element.attr("contextmenu");
        if (menu)
            menu = "#" + menu;
    }
    
    if ( menu )
        menu = $(menu).data( "oj-ojMenu" ); // if selector finds >1 element, .data() uses the first one.
                                            // if selector finds 0 elements, .data() returns nothing.
    if ( menu )
    {
        var self = this;
        this._listenerNodes().on( "keydown" + this.contextMenuEventNamespace + " " + "contextmenu" + this.contextMenuEventNamespace, function( event ) {
            if (event.type === "contextmenu" || (event.which == 121 && event.shiftKey)) // right-click or Shift-F10
            {
                self._showContextMenu(menu, event);
                return false; // don't show native context menu
            }

            return true;
        });
    }
  },
  
  /* 
   * This method removes contextMenu functionality from the component.
   * 
   * TODO: all API doc at-tags, including @private, then add 2nd star at top.
   */
  _unbindContextMenu: function()
  {
    this._listenerNodes().off( this.contextMenuEventNamespace );
  },
  
  /* 
   * Component developers: This API and functionality is subject to change pending architectural review!
   * 
   * When the <code class="prettyprint">contextMenu</code> option is set, this method is called when the user invokes the context menu.  
   * It may be overridden by components needing to configure the menu specially, e.g. customize the <code class="prettyprint">launcher</code> 
   * or <code class="prettyprint">menuPosition</code>.  Note that for context menus, <code class="prettyprint">"focus"</code> should always 
   * be set to <code class="prettyprint">"menu"</code> as seen here.
   * 
   * TODO: all API doc at-tags, including @protected, then add 2nd star at top.  Update method name once protected naming convention nailed down.
   */
  _showContextMenu: function(menu, event)
  {
    menu.show(event, {"launcher": this.element, "focus": "menu"});
  },
    
  /* 
   * Component developers: This API and functionality is subject to change pending architectural review!
   * 
   * This method identifies the DOM node(s) on which context menu listeners should be set.  It is called whenever the <code class="prettyprint">contextMenu</code>
   * component option is set, whether at create time or later.  It may be overridden by components whose needs differ from the default.  
   * 
   * TODO: all API doc at-tags, including @protected, then add 2nd star at top.  Update method name once protected naming convention nailed down.
   */
  _listenerNodes: function() 
  {
    // .closest() handles components like inputnumber whose root node is an ancestor of the initialization node.
    // TODO: this requires components to call _super() at the *end* of _create(), since at the beginning the oj-component class 
    // hasn't been applied yet.  Is this OK for editableComponents?  This logic works for radioset and inputnumber if I call _super() 
    // at the end, but I didn't keep the change pending discussion with component owners.  ojInputText would have additionally needed 
    // to use oj-component class, after which would have presumably worked.
    // If this is not OK, components' _create methods will have to call 2 superclass methods, not just 1 call to _super(), or stop 
    // using closest.
    // UPDATE: Now that we're saying that widget() must always return the (or at least *a*) component root, just using widget() instead.
    // Once Button becomes single-rooted, we may be able to get rid of this method and just call widget() directly, since no component 
    // should need to override this method.  
    // This eliminates the issue with .oj-component possibly not being set when _create._super() is called, so the only issue is whether 
    // widget() works as expected at the time of that call.  Presumably the only issue is for ancestor-rooted components like inputNumber, 
    // Dialog, and Button that create their own root: widget() can't return that root if it hasn't been created yet.  Assuming 
    // that some components continue to need to call _create._super() at the beginning of _create (before creating the root), a good 
    // solution is probably to have a protected _DelayContextMenuSetup ivar that subclasses can set before calling _create._super.  If they 
    // do so, they must call _setupContextMenu (which becomes protected, not private) before exiting _create().  
    // Until this is all figured out, widget is better than closest(".oj-component") as long as we null-check it, since fewer widgets are affected, 
    // and since when it fails it will be a no-op rather than accidentally setting the listeners on the closest *container* component having .oj-component.
     
    // return this.element.closest(".oj-component");  // Old version, per comments above
    
    var widget = this.widget(); // could be undefined if called too early at create time, e.g. if it returns a created root that isn't yet created
    return widget ? widget : $();
  },
    
  /**
   * Overridden to set oj-hover class
   * @private
   */
  _hoverable: function( element )
  {
    // The JQUI superclass method has hard-coded style classes, so unfortunately 
    // we must copy that logic here with updated style classes, and NOT call _super().
    // TBD: keep this logic updated if superclass method changes.  
    this['hoverable'] = this['hoverable'].add( element );
    this._on( element, {
      mouseenter: function( event ) {
        $( event.currentTarget ).addClass( "oj-hover" );
      },
      mouseleave: function( event ) {
        $( event.currentTarget ).removeClass( "oj-hover" );
      }
    });
  },
  
  /**
   * Overridden to set oj-focus class
   * @private
   */
  _focusable: function( element )
  {
    // The JQUI superclass method has hard-coded style classes, so unfortunately 
    // we must copy that logic here with updated style classes, and NOT call _super().
    // TBD: keep this logic updated if superclass method changes.  
    this['focusable'] = this['focusable'].add( element );
    this._on( element, {
      focusin: function( event ) {
	  $( event.currentTarget ).addClass( "oj-focus" );
	},
	focusout: function( event ) {
	  $( event.currentTarget ).removeClass( "oj-focus" );
	}
    });
  },      
  
  /**
   * Set oj-active class on mousedown  and remove it on mouseup.
   * oj-active is one of JET's 'marker' style classes. It emulates 
   * the css :active pseudo-class.
   * @private
   */
  _activeable: function( element )
  {
    this['activeable'] = this['activeable'].add( element );
    
    this._on( element, {
    mousedown: function( event ) 
    {
      $( event.currentTarget ).addClass( "oj-active" );
    },
    mouseup: function( event ) 
    {
      $( event.currentTarget ).removeClass( "oj-active" );
    }
    });
  },
  
  /**
   * Retrieves a translated resource for a given key
   * @param {string} key
   * @return {Object} resource associated with the key or null if none was found
   * @private
   */
  getResource : function (key)
  {
    return this.options[key];
  },
  
  /**
   * <p>Determines whether the component is LTR or RTL.
   * 
   * <p>Component responsibilities:
   * 
   * <ul>
   * <li>All components must determine directionality exclusively by calling this protected superclass method.
   *     (So that any future updates to the logic can be made in this one place.)</li>
   * <li>Components that need to know the directionality must call this method from <code class="prettyprint">_create()</code> 
   *     and <code class="prettyprint">refresh()</code>, and cache the value.  
   * <li>Components should not call this at other times, and should instead use the cached value.  (This avoids constant DOM 
   *     queries, and avoids any future issues if directional islands and component reparenting (e.g. popups) should coexist.)</li>
   * </ul>
   * 
   * <p>App responsibilities:
   * 
   * <ul>
   * <li>The app specifies directionality by setting the HTML <code class="prettyprint">"dir"</code> attribute on the 
   *     <code class="prettyprint">&lt;html></code> node.  When omitted, the default is <code class="prettyprint">"ltr"</code>.  
   *     (Per-component directionality / directional islands are not currently supported due to inadequate CSS support.)</li>
   * <li>As with any DOM change, the app must <code class="prettyprint">refresh()</code> the component if the directionality changes dynamically. 
   *   (This provides a hook for component housekeeping, and allows caching.)</li>
   * </ul>
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   * @return {string} the reading direction, either <code class="prettyprint">"ltr"</code> or <code class="prettyprint">"rtl"</code>
   * @default <code class="prettyprint">"ltr"</code>
   */
  _GetReadingDirection: function( )
  {
    return (document.documentElement.dir === "rtl") ? "rtl" : "ltr";
  },
  
  /**
   * @private
   */
  _getDynamicPropertyContext: function()
  {
    if (!this._propertyContext)
    {
      var c = {};
      this._propertyContext = c;
      c['containers'] = _getSpecialContainerNames(this.element[0]);
    }
    return this._propertyContext;
  },
  
  /**
   * @private
   */
  _setupDynamicProperties: function()
  {
    var self = this;
    
    var contextCallback = function()
    {
      return self._getDynamicPropertyContext();
    };
    
    var options = this.options;
    
    for (var prop in options)
    {
      var val = options[prop];
      
      if (typeof val !== 'undefined' && val instanceof __ojDynamicGetter)
      {
        var callback = val.getCallback();
        if ($.isFunction(callback))
        {
          delete options[prop];
          _defineDynamicProperty(this, options, prop, callback, val.isDynamicContextNeeded() ? contextCallback : undefined);
        }
        else 
        {
          oj.Logger.error("Dynamic getter for property %s is not a function", prop);
        }
      }
    }
    
  }
});

/**
 * This method is our version of $.widget, i.e. the static initializer of a component such as ojButton.
 * It calls that method, plus does any other static init we need.
 * 
 * TODO: 
 * - Consider moving this method into its own file.
 * - For base param, make the type oj.baseComponent rather than Object, but need to declare that as a type first.  Review how that's done.
 * 
 * @private
 * @param {string} name typically of the form "oj.ojMenu"
 * @param {Object} base NOT optional (unlike JQUI) 
 * @param {Object} prototype
 */
oj.__registerWidget = function( name, base, prototype )
{
  $.widget( name, base, prototype );

  // create single-OJ pseudo-selector for component, e.g. ":oj-menu", in addition to the ":oj-ojMenu" that $.widget() creates.
  // for private components it will begin with an underscore, e.g.,  ":_oj-radio"
  if (name.substring(0, 5) === "oj.oj" || name.substring(0, 6) === "oj._oj")
  { 
    var nameArray = name.split( "." ); // ["oj", "ojMenu"], ["oj", "_ojRadio"]
    var namespace = nameArray[ 0 ];    // "oj"
    var simpleName = nameArray [ 1 ];  // "ojMenu", "_ojRadio"
    var fullName = namespace + "-" + simpleName; // "oj-ojMenu", "oj-_ojRadio"
    var isPrivate = simpleName.substring(0, 1) === "_";
    // if private, make the single-oj pseudo-selector start with an underscore, like this -> "_oj-radio"
    var modifiedFullName; // "oj-Menu", "_oj-Radio".  Lowercased below.
    if (isPrivate)
    {
      modifiedFullName = "_" + namespace + "-" + simpleName.substring(3); 
    }
    else
    {
      modifiedFullName = namespace + "-" + simpleName.substring(2);
    }

    // Capitalization doesn't seem to matter with JQ pseudos, e.g. for the existing double-oj pseudo, both $(":oj-ojMenu") and $(":oj-ojmenu") work.
    // So, follow JQUI's pattern of using toLowerCase here, which will lowercase not only the "M' in "Menu", but also any camelcased chars after that.
    $.expr[ ":" ][ modifiedFullName.toLowerCase() ] = function( elem ) {
      return !!$.data( elem, fullName );
    };
  }
};



/**
 * @param {Object} self
 * @param {Object!} options
 * @param {string} prop
 * @param {Function} getter
 * @param {Function=} contextCallback
 * @private
 */
 function _defineDynamicProperty(self, options, prop, getter, contextCallback)
 {
   var override = undefined;
   
   Object.defineProperty(options, prop,
     {
       'get': function()
              {
                if (prop === self._settingOption)
                {
                  // The getter is getting called from the option() method that may be mutating the current
                  // object. We need to return only the override portion in this case to avoid the defaults being
                  // reapplied an override
                  
                  return override || {};
                  
                }
                
                if (override !== undefined && !$.isPlainObject(override))
                {
                  return override;
                }
                 
                var defaults = getter(contextCallback? contextCallback() : prop);
                
                if (!$.isPlainObject(defaults))
                {
                  return (override === undefined) ? defaults : override;
                }
                
                return $.widget.extend({}, defaults||{}, override||{});
              },
       'set': function(value)
              {
                override = value;
              },
       'enumerable' : true
     }
   );
 };
 
 /**
  * @private
  */
 function _getSpecialContainerNames(elem)
 {
    var containers = [];
    while (elem)
    {
      var ga =  elem.getAttribute;
      var name = ga ? ga.call(elem, oj.Components._OJ_CONTAINER_ATTR) : null;
      if (name != null)
      {
        containers.push(name);
      }
      elem = elem.parentNode;
    }
    
    return containers;
 };
 
 /**
  * @private
  */
 function _storeWidgetName(element, widgetName)
 {
   var data = element.data(_OJ_WIDGET_NAMES_DATA);
   if (!data)
   {
     data = [];
     element.data(_OJ_WIDGET_NAMES_DATA, data);
   }
   if (data.indexOf(widgetName) < 0)
   {
     data.push(widgetName);
   }
 }
 
 /**
  * @private
  */
 function _removeWidgetName(element, widgetName)
 {
   var data = element.data(_OJ_WIDGET_NAMES_DATA);
   if (data)
   {
     var index = data.indexOf(widgetName);
     if (index >= 0)
     {
       data.splice(index, 1);
       if (data.length === 0)
       {
         element.removeData(_OJ_WIDGET_NAMES_DATA);
     }
   }
 }
 }
/*jslint browser: true*/
/*
** Copyright (c) 2004, 2012, Oracle and/or its affiliates. All rights reserved.
*/
/**
 * String utilities.
 * @ignore
 */
oj.DomUtils = {};

oj.DomUtils._HTML_START_TAG = "\\x3chtml\\x3e";
oj.DomUtils._HTML_END_TAG = "\\x3c/html\\x3e";
oj.DomUtils._LEGAL_ELEMENTS = {"SPAN":1, "B":1, "A":1, "I":1, "EM":1, "BR":1, "HR":1, "LI":1, "OL":1, "UL":1, "P":1, "TT":1, "BIG":1, "SMALL":1, "PRE":1};
oj.DomUtils._LEGAL_ATTRIBUTES = {"class":1, "style":1, "href":1}; 
/**
 * Returns true if the value is null or if the trimmed value is of zero length.
 * 
 * @param {string|null} content
 * @return {boolean} true if the string is wrapped in <html> tag.
 */        
oj.DomUtils.isHTMLContent = function(content)
{    
  if (content.indexOf(oj.DomUtils._HTML_START_TAG) === 0 && 
      content.lastIndexOf(oj.DomUtils._HTML_END_TAG) === content.length - 7) 
  {
    return true;
  }

  return false;
};

oj.DomUtils.cleanHtml = function (value) 
{
  var offSpan = $(document.createElement("span")).get(0);
  offSpan.innerHTML = value;
  if (value && value.indexOf("\\x3c") >= 0) 
  {
    oj.DomUtils._cleanElementHtml(offSpan);
  }
  return offSpan;
}; 

// TODO: Needs to be verified.
oj.DomUtils._cleanElementHtml = function(node) 
{
  var children = node.childNodes, child, attrs, attr, childHasAttr, i;
  var count = children.length - 1;
  while (count >= 0) 
  {
    child = children.item(count);
    if (child.nodeType === 1) 
    {
      if (oj.DomUtils._LEGAL_ELEMENTS[child.nodeName]) 
      {
        attrs = child.attributes;
        for (i = attrs.length - 1;i >= 0;i--) 
        {
          attr = attrs[i];
          // jquery - the .attr() method returns undefined for attributes that have not been set.
          childHasAttr = $(child).attr(attr) !== undefined;
          if (childHasAttr) 
          {
            if (!oj.DomUtils._LEGAL_ATTRIBUTES[attr.name]) 
            {
              child.removeAttribute(attr.nodeName);
            }
          }
        }
      }
      
      oj.DomUtils._cleanElementHtml(child);
    }
    else 
    {
      node.removeChild(child);
    }
  }
  count--;
};

/**
* Checks to see if the "ancestorNode" is a ancestor of "node".
*
* @param {!Element} ancestorNode dom subtree to check to see if the target node exists
* @param {!Element} node target node to check to see if it exists within a subtree rooted at the ancestorNode
* @return {boolean} <code>true</code> if the "ancestorNode" is a ancestor of "node".
*/
oj.DomUtils.isAncestor = function (ancestorNode, node) 
{
  oj.Assert.assertDomElement(ancestorNode);
  oj.Assert.assertDomElement(node);

  var parentNode = node.parentNode;

  while (parentNode) {
    if (parentNode == ancestorNode)
      return true;

    parentNode = parentNode.parentNode;
  }

  return false;
}

/**
* Checks to see if the "ancestorNode" is a ancestor of "node" or if they are the same.
*
* @param {!Element} ancestorNode dom subtree to check to see if the target node exists
* @param {!Element} node target node to check to see if it exists within a subtree rooted at the ancestorNode
* @return {boolean} <code>true</code> if the "ancestorNode" is a ancestor of "node" or if they are the same 
*/
oj.DomUtils.isAncestorOrSelf = function (ancestorNode, node) 
{
  oj.Assert.assertDomElement(ancestorNode);
  oj.Assert.assertDomElement(node);

  return (node == ancestorNode) ?
          true :
          oj.DomUtils.isAncestor(ancestorNode, node);
};


/**
 * Adds a resize listener for a block or inline-block element
 * @param {!Element} elem - node where the listener should be added
 * @param {!Function} listener - listener to be added. The listener will receive
 * two parameters: 1) the new width in pixels; 2) the new height in pixels
 */
oj.DomUtils.addResizeListener = function(elem, listener)
{
  var jelem = $(elem);
  var tracker = jelem.data(oj.DomUtils._RESIZE_TRACKER_KEY);
  if (tracker == null)
  {
    tracker = new oj.DomUtils._ResizeTracker(elem);
    jelem.data(oj.DomUtils._RESIZE_TRACKER_KEY, tracker);
    tracker.start();
  }
  tracker.addListener(listener);
}

/**
 * Removes a resize listener
 * @param {!Element} elem - node whose listener should be removed
 * @param {!Function} listener - listener to be removed
 */
oj.DomUtils.removeResizeListener = function(elem, listener)
{
  var jelem = $(elem);
  var tracker = jelem.data(oj.DomUtils._RESIZE_TRACKER_KEY);
  if (tracker != null)
  {
    tracker.removeListener(listener);
    if (tracker.isEmpty())
    {
      tracker.stop();
      jelem.removeData(oj.DomUtils._RESIZE_TRACKER_KEY);
    }
  }
};

/**
 * @private
 */
oj.DomUtils._invokeAfterPaint =  (window['requestAnimationFrame'] || window['mozRequestAnimationFrame'] || 
                                  window['webkitRequestAnimationFrame'] || 
                                  function(fn){ return window.setTimeout(fn, 0); }
                                  ).bind(window);

/**
 * Utility class for tracking resize events for a given element and  sispatching them
 * to listeners
 * @constructor
 */
oj.DomUtils._ResizeTracker = function(div)
{
  this._listeners = jQuery.Callbacks();
  
  this.addListener = function(listener)
  {
    this._listeners.add(listener);    
  };
  
  this.removeListener = function(listener)
  {
    this._listeners.remove(listener);    
  };
  
  this.isEmpty = function()
  {
    return this._listeners.empty();
  };
  
  this.start = function()
  {
    var firstChild = div.childNodes[0]; // could be undefined, but insertBefore() will deal with it
    
    // This child DIV will track expansion events. It is meant to be 1px taller and wider than the DIV
    // whose resize events we are tracking. After we set its scrollTop and scrollLeft to 1, any increate in size
    // will fire a scroll event
    this._detectExpansion = document.createElement("div");
    this._detectExpansion.className = "oj-helper-detect-resize";
    var expansionChild = document.createElement("div");
    this._detectExpansion.appendChild(expansionChild);
    div.insertBefore(this._detectExpansion, firstChild);
    
    this._scrollListener = this._handleScroll.bind(this); 
    this._detectExpansion.addEventListener("scroll", this._scrollListener, false);
      
      
    // This child DIV will track contraction events. Its height and width are set to 200%. After we set its scrollTop and 
    // scrollLeft to the current height and width of its parent, any decrease in size will fire a scroll event
    this._detectContraction = document.createElement("div");
    this._detectContraction.className = "oj-helper-detect-resize";
    
    var contractionChild = document.createElement("div");
    contractionChild.style.width = "200%";
    contractionChild.style.height = "200%";
    this._detectContraction.appendChild(contractionChild);
    div.insertBefore(this._detectContraction, firstChild);
     
    this._detectContraction.addEventListener("scroll", this._scrollListener, false);
    
    //Size child DIVs adn recored the current size of the tracked DIV
    this._adjust(this._detectExpansion.offsetWidth, this._detectExpansion.offsetHeight);
  };
  
  this.stop = function()
  {
    this._detectExpansion.removeEventListener("scroll", this._scrollListener);
    this._detectContraction.removeEventListener("scroll", this._scrollListener);
    div.removeChild(this._detectExpansion);
    div.removeChild(this._detectContraction);
  };
  
  
  this._handleScroll = function(evt)
  {
    evt.stopPropagation();
    
    var expDiv = this._detectExpansion;
    
    var newWidth = expDiv.offsetWidth;
    var newHeight = expDiv.offsetHeight;
    if (this._oldWidth != newWidth || this._oldHeight != newHeight)
    {
      this._retrySetScroll = 2;
      this._adjust(newWidth, newHeight);
      
      var listeners = this._listeners;
      oj.DomUtils._invokeAfterPaint(
        function()
        {
          listeners.fire(newWidth, newHeight);
        }
      );
    }
    // Workaround for the WebKit issue where scrollLeft gets reset to 0 without the DIV being expanded
    // We will retry to the set the scrollTop only twice to avoid infinite loops
    else if (this._retrySetScroll > 0 && (expDiv.scrollLeft == 0 || expDiv.scrollTop == 0))
    {
      this._retrySetScroll--;
      this._adjust(newWidth, newHeight);
    }
  };
  
  this._adjust = function(width, height)
  { 
    this._oldWidth = width;
    this._oldHeight = height;
    
    var expansionChild = this._detectExpansion.firstChild;
    expansionChild.style.width = width + 1 + 'px';
    expansionChild.style.height = height + 1 + 'px';
    
    this._detectExpansion.scrollLeft = 1;
    this._detectExpansion.scrollTop = 1;
    
    this._detectContraction.scrollLeft = width;
    this._detectContraction.scrollTop = height;
  };
}

oj.DomUtils._RESIZE_TRACKER_KEY = "_ojResizeTracker";
/*jslint browser: true*/
/**
 * Component Messaging Utilities.
 * @param {Object} component instance
 * @protected
 * @constructor
 */
oj.ComponentMessaging = function (component) 
{
  this.Init(component);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.ComponentMessaging, oj.Object, "oj.ComponentMessaging");

/**
 * Default display types supported for component messaging.
 * Future: support for inline 
 * @memberof! oj.ComponentMessaging
 * @const
 * @protected
 */
oj.ComponentMessaging._DISPLAY_TYPE = {
  NONE: "none",
  NOTEWINDOW: "notewindow", 
  PLACEHOLDER: "placeholder"
};

/**
 * Tracks the messaging strategy callback function by type, used to instantiate messaging strategies.
 * Implementations register by type. 
 * @memberof! oj.ComponentMessaging
 * @const
 * @protected
 */
oj.ComponentMessaging._DISPLAY_TYPE_TO_CALLBACK = {};
  
/**
 * Stores the constructor function callback object used to constuct a strategy object for the 
 * specified type.
 * 
 * @param {string} type
 * @param {Function} strategyConstructorCallback a constructor callback that can be used to constuct
 * a strategy object for the specified type
 * @returns {undefined}
 */
oj.ComponentMessaging.registerMessagingStrategy = function (type, strategyConstructorCallback)
{
  if (type && typeof strategyConstructorCallback === "function")
  {
    oj.ComponentMessaging._DISPLAY_TYPE_TO_CALLBACK[type] = strategyConstructorCallback;
  }
};

/**
 * Initializes the strategy based on the display options that specify the messaging artifacts that 
 * will be displayed by this strategy.
 * 
 * @param {Object} component widget instance
 * @memberof! oj.ComponentMessaging
 * @instance
 * @protected
 */
oj.ComponentMessaging.prototype.Init = function (component)
{
  oj.ComponentMessaging.superclass.Init.call(this);
  
  this._component = component;
  this._activated = false;
  
  this._initializeMessagingStrategies();
};

/**
 * Utility function that activates messaging on the component using the strategy provided.
 * @param {Object} launcher element(s) to which messaging applies
 * @param {Object} content 
 * @private
 */
oj.ComponentMessaging.prototype.activate = function (launcher, content)
{
  var that = this;
  oj.Assert.assertObject(content);
  
  // if already active, reinitialize strategies based on new messagingDisplay preferences.
  if (!this._isActive())
  {
    $.each(this._strategies, function(i, strategy) 
    {
      strategy.activate(that._component, launcher, content);
    });
    this._activated = true;
  }
  else
  {
    this._reactivate(launcher, content);
  }
};

/**
 * Utility function that updates messaging on the component for the content provided, using the 
 * strategies.
 * 
 * @param {Object} content 
 * @private
 */
// TODO: component messaging could take the component instance
oj.ComponentMessaging.prototype.update = function (content)
{
  oj.Assert.assertObject(content);
  oj.Assert.assertBoolean(this._activated);
  if (this._activated)
  {
    $.each(this._strategies, function(i, strategy) 
      {
        strategy.update(content);
      });
  }
};

/**
 * Utility function that deactivates messaging on the component using the strategy provided.
 * @param {Object} content 
 * @private
 */
oj.ComponentMessaging.prototype.deactivate = function (content)
{
  oj.Assert.assertObject(content);
  
  $.each(this._strategies, function(i, strategy) 
    {
      strategy.deactivate(content);
    });
    
  this._activated = false;
  this._strategies = {};
};

/**
 * Creates a messaging strategy for the specified type, initializing it with the options provided.
 * @param {string|number} type defined by oj.ComponentMessaging._DISPLAY_TYPE
 * @param {Object|undefined} options
 * 
 * @private
 * @instance
 * @memberOf !oj.ComponentMessaging
 */
oj.ComponentMessaging.prototype._createMessagingStrategy = function (type, options)
{
  var callback = oj.ComponentMessaging._DISPLAY_TYPE_TO_CALLBACK[type] || 
          oj.ComponentMessaging._DISPLAY_TYPE_TO_CALLBACK["none"];
  
  // dynamically instantiate the strategy objects
  return new callback(options);
},

/**
 * Whether the component messaging is activated. 
 * @return {boolean}
 * @private
 */
oj.ComponentMessaging.prototype._isActive = function ()
{
  return this._activated;
};

oj.ComponentMessaging.prototype._getResolvedMessagingDisplayOptions = function ()
{
    var artifactsByDisplayType = {}, index, artifactDisplayTypeResolved = false, messagingStrategies = {}, 
      compPH = this._component.options['placeholder'], artifact, key,
      messagingPreferences = this._component.options['messagingDisplayOptions'] || {},
      $messagingPreferences = {}, self = this;
      
    // first resolve primary display options for each artifact.
    // E.g. at the end of this loop you should have something like this
    // {messages: 'notewindow', converterHint: 'placeholder', validatorHint: 'notewindow', title: 'none'}
    $.each(messagingPreferences, function (key, displayTypes)
      {
        // loop over array of displayTypes preferred for artifact.
        // artifacts are 'messages', 'converterHint', 'validatorHint', 'title'
        artifactDisplayTypeResolved = false;
        artifact = key + "";
        // we take either array or string values for messagingDisplayOptions.
        if (Array.isArray(displayTypes))
        {
          $.each(displayTypes, function(index, displayType)
          {
            if (!artifactDisplayTypeResolved)
            {
              artifactDisplayTypeResolved = 
                self._resolveDisplayTypeForArtifact(artifact, displayType, compPH, $messagingPreferences);
            }
          });
        }
        else if (typeof displayTypes === "string")
        {
          if (!artifactDisplayTypeResolved)
          {
            artifactDisplayTypeResolved = 
              self._resolveDisplayTypeForArtifact(artifact, displayTypes, compPH, $messagingPreferences);
          }
        }
        
        // if we couldn't resolve then use "none" as the default. E.g., validationHint: ['placeholder']
        if (!artifactDisplayTypeResolved)
        {
          $messagingPreferences[artifact] = oj.ComponentMessaging._DISPLAY_TYPE.NONE;
        }
      });
    
    // collate by displayType -> artifact. but first reset 
    $.each(oj.ComponentMessaging._DISPLAY_TYPE, function(type, name){
      artifactsByDisplayType[name] = [];
    });
    
    $.each($messagingPreferences, function(artifact, displayType)
    {
      // an artifact eventually resolves to one displayType. 
      artifactsByDisplayType[displayType].push(artifact);        
    });
    
    return artifactsByDisplayType;
},
        
oj.ComponentMessaging.prototype._resolveDisplayTypeForArtifact = function(
  artifact, 
  displayType, 
  compPH,
  $messagingPreferences)
{
  var artifactDisplayTypeResolved = false;
  switch (displayType)
  {
    // placeholder display is special in that it's only supported on 'converterHint'.
    case oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER :

      if (artifact === "converterHint")
      {
        // if placeholder is the first preference for converterHint, it's used under certain 
        // conditions
        // if options.placeholder is not set then use 'converterHint' as the default 
        // 'placeholder'
        // alternately if (options.placeholder), i.e., a custom placeholder is set, then 
        // ignore the placeholder displayType and use the next display type as the default 
        // for the artifact. We may have a fallback displayType in which case we use it, 
        // otherwise we use 'none'. E.g., 
        // {'converterHint': ['placeholder', 'notewindow']} // use notewindow
        // {'converterHint': ['placeholder']}               // use none

        if (!artifactDisplayTypeResolved)
        {
          if (!compPH)
          {
            $messagingPreferences[artifact] = displayType;
            artifactDisplayTypeResolved = true;
            
          }
        }
      }
      else
      {
        // displayType 'placeholder' is not supported on other artifacts
        // ignore if present
        // TODO: In the future we may want to support configuring validatorHint ot title as 
        // placeholder as well.
      }

      break;

    default:
      if (!artifactDisplayTypeResolved)
      {
        $messagingPreferences[artifact] = displayType;
        artifactDisplayTypeResolved = true;
      }
      break;
  }
  
  return artifactDisplayTypeResolved;
  
},

/**
 * Creates a default messaging strategy for the component based on the messagingOptions.
 * @private
 */
oj.ComponentMessaging.prototype._initializeMessagingStrategies = function ()
{
  var artifactsByDisplayType = this._getResolvedMessagingDisplayOptions(), 
    displayInNoteWindow = artifactsByDisplayType[oj.ComponentMessaging._DISPLAY_TYPE.NOTEWINDOW], 
    displayNone = artifactsByDisplayType[oj.ComponentMessaging._DISPLAY_TYPE.NONE], 
    displayInPlaceholder = artifactsByDisplayType[oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER],
    messagingStrategies = {};
    
  // TODO: A component may have both a notewindow and inline messaging strategy
  if (displayInNoteWindow.length > 0)
  {
    messagingStrategies[oj.ComponentMessaging._DISPLAY_TYPE.NOTEWINDOW] = 
      this._createMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.NOTEWINDOW, displayInNoteWindow);
  }
  
  if (displayInPlaceholder.length > 0)
  {
    messagingStrategies[oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER] = 
      this._createMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER, displayInPlaceholder);
  }
  
  if (displayNone.length > 0)
  {
    // if we are not displaying in notewindow, messagingDisplayOptions are probably set to "none" 
    // so use the default messaging strategy
    messagingStrategies[oj.ComponentMessaging._DISPLAY_TYPE.NONE] = 
      this._createMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.NONE, displayNone);
  }
  
  this._strategies = messagingStrategies;
};

/**
 * Reinitializes component messaging with new messagingDisplayOptions.
 * 
 * @param {Object} launcher element(s) to which messaging applies
 * @param {Object} content 
 * @private
 */
oj.ComponentMessaging.prototype._reactivate = function (launcher, content)
{
  var artifactsByDisplayType = this._getResolvedMessagingDisplayOptions(), strategy, cm = this; 
  
  // for every displayType being requested either create the messaging strategy for the type or 
  // then reuse existing strategy if it has already been created. 
  $.each(artifactsByDisplayType, function(type, artifactsForType) {
    strategy = cm._strategies[type];
    if (artifactsForType && artifactsForType.length > 0)
    {
      if (!strategy )
      {
        // if no notewindow strategy exists create a new one 
        strategy = cm._createMessagingStrategy(type, artifactsForType);
        cm._strategies[type] = strategy;
        strategy.activate(cm._component, launcher, content);
      }
      else if (strategy)
      {
        // update the note window strategy with the latest displayOptions if already present. we don;t 
        // want to remove it once activated.
        strategy.reactivate(artifactsForType, content);
      }
    }
    else
    {
      if (strategy)
      {
        // if we have no artifacts to show for a type, then remove the strategy.
        strategy.deactivate(content);
        delete cm._strategies[type];
      }
    }
  });
};

/**
 * A base strategy class that encapsulates the mechanism by which both the messaging content is 
 * built and the messaging content is shown
 * @param {Array} displayOptions an array of messaging artifacts displayed.
 * 
 * @constructor
 * @class oj.MessagingStrategy
 * @private
 */
oj.MessagingStrategy = function (displayOptions)
{
  this.Init(displayOptions);
};

oj.ComponentMessaging.registerMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.NONE, 
                                                oj.MessagingStrategy);

// TODO: Need to retrieve style selectors from a Style Manager
oj.MessagingStrategy._SELECTOR_STATE_INVALID = "oj-invalid";
oj.MessagingStrategy._SELECTOR_STATE_WARNING = "oj-warning";

// Subclass from oj.Object 
oj.Object.createSubclass(oj.MessagingStrategy, oj.Object, "oj.MessagingStrategy");

/**
 * Initializes the strategy based on the display options that specify the messaging artifacts that 
 * will be displayed by this strategy.
 * 
 * @param {Array} displayOptions an array of messaging artifacts displayed.
 * @private
 */
oj.MessagingStrategy.prototype.Init = function (displayOptions)
{
  oj.Assert.assertArray(displayOptions);
  oj.MessagingStrategy.superclass.Init.call(this);
  
  this._displayOptions = displayOptions;
};


// P U B L I C  M E T H O D S

/**
 * Activates messaging artifacts for a specific component instance using the content provided.
 * 
 * @param {Object} component 
 * @param {Object} launcher the element to which the messaging applies.
 * @param {Object} content an Object literal consisting of content that the messaging strategy will 
 * use to initialize. <br/>
 * Accepted keys are 'validityState', 'converterHint', 'validatorHint', 'title'.<br/>
 * The values are Object (instance of oj.ComponentValidity), string, Array of strings and string 
 * respectively.
 * @private
 */
oj.MessagingStrategy.prototype.activate = function (component, launcher, content)
{
  this._launcher = launcher;
  this._component = component; 
  this._updateMessagingContent(content);
};

/**
 * Updates component with instance using the content provided.
 * 
 * @param {Object} content the updated messaging content 
 * @private
 */
oj.MessagingStrategy.prototype.update = function (content)
{
  this._updateMessagingContent(content);
  var launcher = this.GetLauncher(), maxSeverity = this.GetMaxSeverity(), removeClasses = [], addClasses=[], 
      invalid = false, jqRoot = this.GetComponent().widget();
  
  if (!launcher)
  {
    return;
  }
  
  // apply element error styling
  if (!this.IsValid())
  {
    // enable tooltip; set invalid class and aria invalid
    // TODO: oj classes should be set on the root DOM
    removeClasses.push(oj.MessagingStrategy._SELECTOR_STATE_WARNING);
    addClasses.push(oj.MessagingStrategy._SELECTOR_STATE_INVALID);
    invalid = true;
  }
  else
  {
    // TODO: add warning or other severity state
    if (this.HasMessages() && maxSeverity === oj.Message.SEVERITY_LEVEL['WARNING'])
    {
      removeClasses.push(oj.MessagingStrategy._SELECTOR_STATE_INVALID);
      addClasses.push(oj.MessagingStrategy._SELECTOR_STATE_WARNING);
    }
    else
    {
      // for all other messages we remove selectors
      removeClasses.push(oj.MessagingStrategy._SELECTOR_STATE_INVALID);
      removeClasses.push(oj.MessagingStrategy._SELECTOR_STATE_WARNING);
    }
  }
  jqRoot.removeClass(removeClasses.join(" "))
          .addClass(addClasses.join(" ")); // classes added to root
  launcher.attr({"aria-invalid": invalid}); // aria attrs added to the launcher element
  
};

/**
 * Cleans up messaging artifacts that were created on the component instance. E.g., destroys any 
 * widgets it created, removes styles added etc.
 * 
 * @param {Object} content the messaging content
 * @private
 */
oj.MessagingStrategy.prototype.deactivate = function (content)
{
  var jqRoot = this.GetComponent().widget();
  
  jqRoot.removeClass(oj.MessagingStrategy._SELECTOR_STATE_INVALID)
                  .removeClass(oj.MessagingStrategy._SELECTOR_STATE_WARNING);
  this.GetLauncher().removeAttr("aria-invalid")
                  .removeAttr("aria-describedby");
  this._launcher = null;
  this._component = null;
};

/**
 * Reinitializes with the new display options and updates component messaging using the new content. 
 * 
 * @param {Array} newDisplayOptions
 * @param {Object} content
 * @private
 */
oj.MessagingStrategy.prototype.reactivate = function (newDisplayOptions, content)
{
  this.Init(newDisplayOptions);
  this.update(content);
};

// P R O T E C T E D  M E T H O D S 
/**
 * Gets the launcher element for which the messaging is applied.
 * @return {Object} the jquery element of the form element.
 * @private
 */
oj.MessagingStrategy.prototype.GetLauncher = function ()
{
  return this._launcher;
};

/**
 * Gets the component (widget).
 * @return {Object} the jet component instance
 * @private
 */
oj.MessagingStrategy.prototype.GetComponent = function ()
{
  return this._component;
};


/**
 * Returns an array of messages.
 * 
 * @return {Array} of messages each an instance of oj.Message
 * @private
 */
oj.MessagingStrategy.prototype.GetMessages = function ()
{
  return this.GetValidityState().getMessages();
};

oj.MessagingStrategy.prototype.GetMaxSeverity = function ()
{
  return this.GetValidityState().getMaxSeverity();
};

/**
 * Gets the converter hint.
 * 
 * @return {Array} an array of hints, each a string.
 * @private
 */
oj.MessagingStrategy.prototype.GetConverterHint = function ()
{
  var hints = [], converterHint = this._messagingContent['converterHint'], hint;
  if (converterHint)
  {
    hints.push(converterHint);
  }
  
  return hints;
};

oj.MessagingStrategy.prototype.GetValidatorHints = function ()
{
  var hints = [], vHints = this._messagingContent['validatorHint'] || [];
  $.each(vHints, function (index, hint)
    {
      hints.push(hint);
    }
  );
  
  return hints;
};


/**
 * Gets the short description.
 * @return {string} title or ""
 * @private
 */
oj.MessagingStrategy.prototype.GetTitle = function ()
{
  return this._messagingContent['title'] || ""; 
};

/**
 * Gets the validityState.
 * @private
 */
oj.MessagingStrategy.prototype.GetValidityState = function ()
{
  return this._messagingContent['validityState'];
};

/**
 * Whether the strategy is displaying messages or not.
 * @return {boolean} true if strategy has messages to display
 * @private
 */
oj.MessagingStrategy.prototype.HasMessages = function ()
{
  var messages = this.GetMessages();
  return (messages && messages.length > 0) ? true: false;
};

oj.MessagingStrategy.prototype.ShowMessages = function ()
{
  return this._displayOptions.indexOf('messages') !== -1 ? true : false;
};

oj.MessagingStrategy.prototype.ShowConverterHint = function ()
{
  return this._displayOptions.indexOf('converterHint') !== -1 ? true : false;
};

oj.MessagingStrategy.prototype.ShowValidatorHint = function ()
{
  return this._displayOptions.indexOf('validatorHint') !== -1 ? true : false;
};

oj.MessagingStrategy.prototype.ShowTitle = function ()
{
  return this._displayOptions.indexOf('title') !== -1 ? true : false;
};

/**
 * Returns true if component is currently valid; false otherwise.
 * 
 * @return {boolean} true if valid; false if not.
 * @private
 */
oj.MessagingStrategy.prototype.IsValid = function ()
{
  return this.GetValidityState().isValid();
};

/**
 * Sets the component current validityState. 
 * @param {Object} content
 * @private
 */
oj.MessagingStrategy.prototype._updateMessagingContent = function (content)
{
  this._messagingContent = $.extend(this._messagingContent || {}, content);
};

/**
 * A messaging strategy that uses html5 placeholder (for now) to set/remove placeholder content.
 * 
 * @param {Array} displayOptions an array of messaging artifacts displayed in the placeholder.
 * @constructor
 * @extends {oj.MessagingStrategy}
 * @private
 */
oj.PlaceholderMessagingStrategy = function(displayOptions)
{
  this.Init(displayOptions);
};

oj.ComponentMessaging.registerMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER, 
                                                oj.PlaceholderMessagingStrategy);

// Subclass from oj.MessagingStrategy 
oj.Object.createSubclass(oj.PlaceholderMessagingStrategy, oj.MessagingStrategy, "oj.PlaceholderMessagingStrategy");

/**
 * Initializer
 *  
 * @param {Array} displayOptions an array of messaging artifacts displayed in the notewindow.
 * @private
 */
oj.PlaceholderMessagingStrategy.prototype.Init = function (displayOptions) 
{
  oj.PlaceholderMessagingStrategy.superclass.Init.call(this, displayOptions);
};

/**
 * Sets up a placeholder for the component instance using the converter hint.
 * 
 * @param {Object} component widget instance
 * @param {Object} launcher element for which the messaging applies. 
 * @param {Object} content the messaging content
 * @private
 * 
 */
oj.PlaceholderMessagingStrategy.prototype.activate = function (component, launcher, content)
{
  oj.PlaceholderMessagingStrategy.superclass.activate.call(this, component, launcher, content);
  this._refreshPlaceholder();
};

oj.PlaceholderMessagingStrategy.prototype.update = function (content)
{
  oj.PlaceholderMessagingStrategy.superclass.update.call(this, content);
  this._refreshPlaceholder();
};

oj.PlaceholderMessagingStrategy.prototype.deactivate = function (content)
{
  oj.PlaceholderMessagingStrategy.superclass.deactivate.call(this, content);
};

// a default placeholder is set on the component, and that is typically the converter hint
oj.PlaceholderMessagingStrategy.prototype._refreshPlaceholder = function()
{
  var launcher = this.GetLauncher(), jqRoot = this.GetComponent().widget(), content, hints;
  
  if (this.ShowPlaceholderContent() && launcher)
  {
    hints = this.GetConverterHint();
    content = hints.length ? hints[0] : "";
    if (content)
    {
      var values = {};
      values['placeholder'] = content;
      values['_oj_messaging_update'] = true; // to indicate to component that placeholder is being 
                                             // set from messaging module 

      this.GetComponent().option(values);
    }
  }
};

oj.PlaceholderMessagingStrategy.prototype.ShowPlaceholderContent = function ()
{
  // we have a placeholder to set/show if we have converterHint set.
  return this.ShowConverterHint();
};

/**
 * The ComponentValidity object represent a component's current validity state. The instance 
 * provides specific methods to retrieve info such as <p>
 *  - whether the component is valid <p>
 *  - the messages currently tracked on the component.<p>
 *  - the max severity level of the messages, e.g., fatal, error etc. See oj.Message for details
 * 
 * @param {boolean} valid
 * @param {Array} messages
 * @param {number} maxSeverity
 * @constructor
 * @private
 */
oj.ComponentValidity = function(valid, messages, maxSeverity)
{
  // TODO: provide methods that allow model implementations to instruct the elements to showMessages, 
  // especially the ones marked for 'lazy' notification. 
  this.Init(valid, messages, maxSeverity);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.ComponentValidity, oj.Object, "oj.ComponentValidity");

/**
 * The jquery element whose validity this object describes
 * @param {boolean} valid
 * @param {Array} messages instances of oj.Message
 * @param {number} maxSeverity
 */
oj.ComponentValidity.prototype.Init = function (valid, messages, maxSeverity) 
{
  oj.ComponentValidity.superclass.Init.call(this);
  this._valid = valid;
  this._messages = messages;
  this._maxSeverity = maxSeverity;
  
};

/**
 * Returns a boolean true if valid; false if element not valid
 * @returns {boolean}
 * @private
 */
oj.ComponentValidity.prototype.isValid = function () 
{
  return this._valid;
};

/**
 * Returns an Array or messages or an empty array.
 * @private
 * @returns {Array}
 */
oj.ComponentValidity.prototype.getMessages = function () 
{
  if (this._messages)
  {
    return this._messages;
  }
  return [];
};

/**
 * Returns the max severity level.
 * @return {number}
 * @private
 */
oj.ComponentValidity.prototype.getMaxSeverity = function () 
{
  return this._maxSeverity;
};

/**
 * Updates the validity state for the component.
 * 
 * @param {boolean} valid
 * @param {Array} messages instances of oj.Message
 * @param {number} maxSeverity
 * @private
 */
oj.ComponentValidity.prototype.update = function (valid, messages, maxSeverity)
{
  this._valid = valid;
  this._messages = messages;
  this._maxSeverity = maxSeverity;
};

/**
 * Returns a cloned object literal representing the current validity of component. 
 * @return {Object} a literal with the following names and values
 * <ul>
 *   <li>'messages': an array of message object, each a object literal containing string name value 
 *   pairs of 'summary', 'detail', 'severity'</li>
 *   <li>'valid': a boolean true if valid; false otherwise</li>
 *   <li>'maxSeverity': a string severity type. Values are as defined in oj.Message.SEVERITY_TYPE</li>
 * </ul>
 * @private 
 */
oj.ComponentValidity.prototype.__getJSON = function () 
{
  // TODO: messages may need to be normalized
  return {
           'messages': $.extend([], this._messages),
           'valid': this._valid,
           'maxSeverity': this._maxSeverity
         };
  
};


// Copyright (c) 2013, Oracle and/or its affiliates. 
// All rights reserved.

/*jslint browser: true*/

/**
 * @export
 * @class
 * Common test support in JavaScript
 */ 
oj.Test = {}; 


/**
 * @export
 * @type {boolean} 
 * A global application flag that can be set by a test to indicate that all page startup processing is done
 * and an external automated test can begin
 */
oj.Test.ready = false;

/**
 * @export
 * Return the node found given the locator
 * @param {Object|string} locator A locator which is either a JSON string (to be parsed using $.parseJSON), or an Object with the following properties:
 *                                             element: the component's selector, determined by the test author when laying out the page
 *                                             component: optional - in the future there may be more than one component contained within a page element
 *                                             subId: the string, documented by the component, that the component expects in getNodeBySubId to locate a particular subcomponent
 *  @returns {Object} the subcomponent located by the subId string passed in locator, if found.
 */
oj.Test.domNodeForLocator = function(locator) {   
    var locObj = locator;
    if (oj.StringUtils.isString(locator)) {
        var locStr = /** @type {string} */ (locator);
        try {
            locObj = $.parseJSON(locStr);
        }
        catch (e) {
            return null;
        }
    }
    if (locObj && locObj['element']) {
        var element = $(locObj['element']);
        if (element) {
            var widgetConst = oj.Components.getWidgetConstructor(element[0], locObj['component']);
            return widgetConst("getNodeBySubId", {'subId' : locObj['subId']});
        }
    }
    return null;
};




/*jslint browser: true*/
/**
 * in some OS/browser combinations you can attempt to detect high contrast mode
 * in javascript, go to the url below and look for "High Contrast"
 * http://www.w3.org/TR/wai-aria-practices/
 * 
 * This function uses a variation of the code in the "High Contrast" section of  
 * the site above to try and detect high contrast mode
 * by script, but it by no means definitively tells you whether or not you
 * are actually in high contrast mode. As discussed at the url above you 
 * may need to have a user preference setting for high contrast.
 * 
 * If the script is able to detect high contrast mode it sets the class 
 * "oj-hicontrast" on the body tag. When "oj-high-contrast" is present 
 * JET provides alternate informational images that are specially designed 
 * for high contrast users. 
 * @private
 */
function _ojHighContrast()
{
  // using a data uri, I googled for shortest uri to get this one since 
  // I don't care about the actual image, but I do want a legit image
  // otherwise I see an error in chrome and I don't want users to be
  // confused by seeing any error.

  var div = $("<div style='border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=);'></div>"), bki;
  div.appendTo("body");

  bki = div.css("backgroundImage");
  //console.log("background-image:" + bki);
  //console.log("borderTopColor == borderRightColor: ", div.css("borderTopColor") == div.css("borderRightColor"));
  if (div.css("borderTopColor") == div.css("borderRightColor") ||
      (bki != null && (bki == 'none' || bki == 'url (invalid-url:)')))
  {
    $('body').addClass("oj-hicontrast");
  }

  div.remove();
}

$(document).ready(function() {
  _ojHighContrast();
});
/*jslint browser: true*/
/**
 * @private
 */
function _ojSlowCSS()
{
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    $('html').addClass("oj-slow-borderradius oj-slow-cssgradients oj-slow-boxshadow");
  }

}

$(document).ready(function() {
  _ojSlowCSS();
});
/*jslint browser: true*/
/*
** Copyright (c) 2004, 2012, Oracle and/or its affiliates. All rights reserved.
*/
/**
 * Utilities used in conjunction with the jquery positon utility.
 * @ignore
 */
oj.PositionUtils = {};

/**
 * Of the properties on the position object, "my" and "at" are of intrest. The base jquery
 * horizontal alignment mnemonics are "right", "center" and "left". For better Jet RTL
 * support we have added "start" and "end".  Depending on the rtl direction, "start" and
 * "end" will be replaced with "left" or "right". The resultant postion object will
 * be a new instance that extends the postion passed as the first argument.
 * 
 * @param {Object} position source position object
 * @param {boolean} isRtl 
 * @return {Object} position object that has normalized jquery horizontal mnemonics.
 */        
oj.PositionUtils.normalizeHorizontalAlignment = function(position, isRtl)
{
  oj.Assert.assertObject(position, "position");
  var target = $.extend({}, position);  
  for (var i = 0; i < oj.PositionUtils._ALIGN_RULE_PROPERTIES.length; i++)
  {
    var propName = oj.PositionUtils._ALIGN_RULE_PROPERTIES[i];
    var align = target[propName];
    if (align)
      target[propName] = align.replace("start", (isRtl ? "right" : "left"))
                              .replace("end", (isRtl ? "left" : "right"));
  } 

  return target;
};

oj.PositionUtils._ALIGN_RULE_PROPERTIES = ['my', 'at'];
});
