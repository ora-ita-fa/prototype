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
var _OJ_WIDGET_NAMES_DATA = "oj-widget-names";

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
     * Identifies the JET Menu that the component should launch as a context menu on right-click or <kbd>Shift-F10</kbd>. If specified, 
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
     * @default <code class="prettyprint">{ menu: null }</code>
     * 
     * @example <caption>Initialize a JET component with a context menu:</caption>
     * // via recommended HTML5 syntax:
     * &lt;div id="myComponent" contextmenu="myMenu" data-bind="ojComponent: { ... }>
     * 
     * // via JET initializer (less preferred) :
     * $( ".selector" ).ojFoo({ "contextMenu": { menu: 'myContextMenu' } });
     * 
     * @example <caption>Get or set the <code class="prettyprint">contextMenu</code> option, after initialization:</caption>
     * // getter
     * var menu = $( ".selector" ).ojFoo( "option", "contextMenu" );
     * 
     * // setter
     * $( ".selector" ).ojFoo( "option", "contextMenu", { menu: 'myContextMenu'} );
     * 
     * @example <caption>Set a JET context menu on an ordinary HTML element:</caption>
     * &lt;a href="#" id="myAnchor" contextmenu="myMenu" data-bind="ojContextMenu: {}">Some text</a>
     */
     contextMenu:
     {
       /** @expose */
       menu: null
     }
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

  /*
   * Unlike JQUI, all subclasses must call this._super() when overriding this method, since we override it here.
   * 
   * TODO: JSDoc!!  (with at-protected tag, etc.)
   */
  _create : function()
  {
    this._savedAttributes = [];
    this._SaveAttributes(this.element);
    this._CreateComponent();
    this._AfterCreateComponent();

  },
  
  /**
   * Overridden to return component-specific translations and default options specified with oj.Components.setDefaultOptions()
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
   * This is where we create components. You have access to the options, and 
   * that's about it. Use _AfterCreateComponent if you want to do things
   * after the component is created, like add styles to the root dom element.
   * this._super should be call first.
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _CreateComponent : function ()
  {
    this['activeable'] = $();
    this._setupDynamicProperties();
    
    // Store widget name, so that oj.Components.getWidgetConstructor() can get widget from the element
    _storeWidgetName(this.element, this.widgetName);
  },
  /**
   * This is where we do things right after the component was created.
   * this._super should be call first.
   *
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _AfterCreateComponent : function ()
  { 
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
  
    $.each(element, function (index, ele)
    {
  
      //need to be able to save for multiple elements 
      var saveAttributes = {},
          save = { "element" : ele, "attributes" : saveAttributes },
          attributes = ele.attributes;
      
      self._savedAttributes.push(save);
      
      $.each(attributes, function (index, attr)
      {
  
        var nodeType = attr.nodeType, 
            nodeName = attr["name"], 
            nodeAttribute = { "attr" : attr["value"] };
        
        //for proper access certain so called attributes should be accessed as properties [i.e. required]
        nodeAttribute["prop"] = $(ele).prop(nodeName);
        
        saveAttributes[nodeName] = nodeAttribute;
      });
  
    });
  
  },
  
  /**
   * Gets the saved attributes for the provided element
   *
   * @param {Object} element - jQuery selection, should be a single entry
   * @return {Object} savedAttributes - attributes that were saved for this element
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
    if ( menu )
        menu = menu.menu;
    if (!menu) // TODO: prob do this part in _create only?  Emulate disabled option.
        menu = this.element.attr("contextmenu");
    if ( menu ) 
        menu = $("#" + menu).data( "oj-ojMenu" );
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
    // TODO: this requires components to call _super() at the *end* of _create(), since at the beginning the oj-widget class 
    // hasn't been applied yet.  Is this OK for editableComponents?  This logic works for radioset and inputnumber if I call _super() 
    // at the end, but I didn't keep the change pending discussion with component owners.  ojInputText would have additionally needed 
    // to use oj-widget class, after which would have presumably worked.
    // If this is not OK, components' _create methods will have to call 2 superclass methods, not just 1 call to _super(), or stop 
    // using closest.
    // UPDATE: Now that we're saying that widget() must always return the (or at least *a*) component root, just using widget() instead.
    // Once Button becomes single-rooted, we may be able to get rid of this method and just call widget() directly, since no component 
    // should need to override this method.  
    // This eliminates the issue with .oj-widget possibly not being set when _create._super() is called, so the only issue is whether 
    // widget() works as expected at the time of that call.  Presumably the only issue is for ancestor-rooted components like inputNumber, 
    // Dialog, and Button that create their own root: widget() can't return that root if it hasn't been created yet.  Assuming 
    // that some components continue to need to call _create._super() at the beginning of _create (before creating the root), a good 
    // solution is probably to have a protected _DelayContextMenuSetup ivar that subclasses can set before calling _create._super.  If they 
    // do so, they must call _setupContextMenu (which becomes protected, not private) before exiting _create().  
    // Until this is all figured out, widget is better than closest(".oj-widget") as long as we null-check it, since fewer widgets are affected, 
    // and since when it fails it will be a no-op rather than accidentally setting the listeners on the closest *container* component having .oj-widget.
     
    // return this.element.closest(".oj-widget");  // Old version, per comments above
    
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
/**
 * @class
 * @abstract
 * @name oj.editableValue
 * @augments oj.baseComponent
 * 
 * @description Abstract base class for all editable components that are value holders. Any 
 * component that provides 'value' option to set/get the value(s) will extend from this class. <p>
 * 
 * @example <caption>Initialize component value using options</caption>
 * &lt;input id="foo" type="text"/&gt;
 * &lt;script&gt;
 * &nbsp;&nbsp;$('#foo").ojInputText({'value': 'abc'});
 * &lt;/script&gt;
 * // using knockout ojComponent binding
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputText', value: 'abc'}"/&gt;
 * @example <caption>Initialize component value using ko observable</caption>
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputText', value: salary}"/&gt;
 * &lt;script&gt;
 * &nbsp;&nbsp;var salary = ko.observable('abc');
 * &lt;/script&gt;
 * @example <caption>Initialize component value using element value</caption>
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputText'}" value='abc'/&gt;
 * 
 * @constructor
 */
oj.editableValue = $.widget('oj.editableValue', $['oj']['baseComponent'], 
/** @lends oj.editableValue.prototype */
{
  widgetEventPrefix: "oj",
  
  options: 
  {
    /** 
     * a converter instance, where each instance duck types oj.Converter, or an converter object 
     * literal containing the following name value pair. 
     * <ul>
     *   <li><i>type</i>: the string conveter type registered with the ConverterFactory. Supported 
     *   types are 'number' and 'datetime'</li>
     *   <li><i>options</i>: an optional Object literal of options that the converter expects.</li>
     * </ul>
     * 
     * After the component has been initialized with a converter, if a new converter instance is 
     * set then <br/>
     * - if the component is valid, the value is formatted using the new converter instance and the 
     *   display updated with the new value.<br/>
     * - if the component is invalid when the converter instance was changed, it is the 
     * responsibility of the page author to clear messages on the component and reset the value if 
     * needed.<br/>
     * 
     * @example <caption>Initialize the component with converter object literal:</caption>
     * $(".selector").ojInputNumber({
     *   value: 25000,
     *   converter: {
     *     type: 'number', 
     *     options : {
     *       style: 'currency', 
     *       currency: 'USD', 
     *       maximumFractionDigits: 0
     *     }
     *   }
     * });
     * 
     * @example <caption>Initialize the component with default number converter type:</caption>
     * $(".selector").ojInputNumber({
     *   'value': 10, 
     *   'converter': 'number'
     * });
     * 
     * @example <caption>Initialize the component with a number converter instance:</caption>
     * // Initialize converter instance using currency options
     * var options = {style: 'currency', 'currency': 'USD', maximumFractionDigits: 0};
     * var numberConverterFactory = oj.Validation.converterFactory("number");
     * var salaryConverter = numberConverterFactory.createConverter(options);<br/>
     * // set converter instance using converter option
     * $(".selector").ojInputNumber({
     *   value: 25000, 
     *   converter: salaryConverter
     * });
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {string|Object}
     */    
    converter: null,

    /** 
     * whether the component is disabled. The element's disabled property is used as its initial 
     * value if it exists, when the option is not explicitly set. When neither is set, disabled 
     * defaults to false.
     *  
     * <p>The 2-way <code class="prettyprint">disabled</code> binding offered by 
     * the <code class="prettyprint">ojComponent</code> binding 
     * should be used instead of Knockout's built-in <code class="prettyprint">disable</code> 
     * and <code class="prettyprint">enable</code> bindings, 
     * as the former sets the API, while the latter sets the underlying DOM attribute.
     * 
     * @example <caption>Initialize component with <code class="prettyprint">disabled</code> option:</caption>
     * $(".selector").ojInputText({"disabled": true});
     * 
     * @expose 
     * @type {?boolean}
     * @default <code class="prettyprint">false</code>
     * @public
     * @instance
     * @memberof! oj.editableValue
     */
    disabled: null,
    
    /**
     * The help information that goes on the label. When help
     * is set on the input component, then help information 
     * is added to the input's label. The help options are:
     * <ul>
     * <li>definition - this is the help definition text. It is what shows up
     * when the user hovers over the label or the help icon.</li>
     * <li>source - this is the help source url. If present, a help icon will
     * render next to the label and the anchor's target is this source.
     * </ul>
     * 
     * @expose 
     * @memberof! oj.editableValue
     * @instance
     * @type {Object.<string, string>}
     * @default <code class="prettyprint">{ "definition":"some help definition, "source":"some external url" }</code>
     * 
     * @example <caption>Initialize the input with the help definition and external url information:</caption>
     * $( ".selector" ).ojRadioset({ "help": {"definition":"some help definition, "source":"some external url" } });
     * 
     * @example <caption>Set the <code class="prettyprint">help</code> option, after initialization:</caption>
     *
     * // setter
     * $( ".selector" ).ojRadioset( "option", "help", {"definition":"fill out the name", "source":"http:\\www.oracle.com" } );
     */
    help: {definition: null, source: null},
    /** 
     * an array of messages for this component, each instance of type oj.Message. 
     * 
     * @example <caption>Get the current set of <code class="prettyprint">messages</code> for the component:</caption>
     * var messages = $(".selector").ojInputText("option", "messages");
     * @example <caption>Clear all messages set on the component:</caption>
     * $(".selector").ojInputText("option", "messages", []);
     * @example <caption>Add a message (of default error severity) to the component using the <code class="prettyprint">messages</code> option:</caption>
     * var msgs = [];
     * msgs.push({'summary': 'Error Summary', 'detail': 'Error Detail'}); 
     * $(".selector").ojInputText("option", "messages", msgs);
     * @example <caption>Set a <code class="prettyprint">oj.Message</code> instance to the component:</caption>
     * var message = new oj.Message("summary text", "detail text");
     * var messagesArr = [message];
     * $(".selector").ojInputText("option", "messages", messagesArr);
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {Array}
     */    
    messages : null,

    /**
     * an Object literal containing the following property-value pairs, that allows a widget to specify 
     * how it wants the various 'messaging artifacts' to be displayed in relation to itself. <br/>
     * Accepted values for the key is a string type of the messaging artifact and they include 
     * 'messages', 'converterHint', 'validatorHint', 'title'. NOTE: In the future additional types 
     * like 'help' might be supported. <br/>
     * The value is either an array of display options or a string display option. When an array of 
     * display options is specified the first display option is used first and then the second as 
     * fallback and so on. NOTE: In the future we plan to support additional display options like 
     * 'inline'. 
     * <br/>
     * By default components that support messaging define default values for all messaging 
     * artifacts. Page authors will update this option when overriding defaults.
     * 
     * @property {string=} converterHint - supported values are 'placeholder', 'notewindow', 'none'. 
     * E.g. {'converterHint': ['placeholder', 'notewindow']}
     * @property {string=} validatorHint - supported values are 'notewindow', 'none'. 
     * E.g. {'validatorHint': ['notewindow']}
     * @property {string=} messages - supported values are 'notewindow', 'none'. 
     * E.g. {'messages': 'notewindow'}
     * @property {string=} title - supported values are 'notewindow', 'none'. 
     * E.g. {'title': 'notewindow'}
     * 
     * @example <caption>Initialize component and override default for converterHint using <code class="prettyprint">messagingDisplayOptions</code>:</caption>
     * // Only messages will get shown in the notewindow associated to this component
     * $(".selector").ojInputText("option", "messagingDisplayOptions", {
     *   'converterHint': ['notewindow'] // the default is ['placeholder', 'notewindow']
     * });
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {Object|undefined}
     */
    messagingDisplayOptions : undefined,
    
    /** 
     * specifies a regular expression against which the component's value. If specified, the 
     * property's value must match the JavaScript Pattern production. The element's pattern 
     * property is used as its initial value if it exists when the option is not explicitly set. 
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">pattern</code> option:</caption>
     * $(".selector").ojInputNumber({pattern: "[a-zA-Z0-9]{3-9}"});<br/>
     * @example <caption>Initialize <code class="prettyprint">pattern</code> option from the html attribute 'pattern':</caption>
     * &lt;input type="text" id="username" value= "" pattern="[a-zA-Z0-9]{3,}" 
     *           title="Enter at least 3 alphanumeric characters"/><br/>
     * // reading the pattern option will return "[a-zA-Z0-9]{3-9}"
     * $(".selector").ojInputNumber("option", "pattern");<br/>
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {string}
     */    
    pattern: "",
    
    /** 
     * whether the component is required. The element's required property is used as its initial 
     * value if it exists, when the option is not explicitly set. Allowed values for required are 
     * 'required' and 'optional', 'optional' being the default. <br/>
     * 
     * When required option is set, the input's label will render a required icon. <br/>
     * When required option is set, a required validator - (@link oj.RequiredValidator) - is 
     * implicitly used. If an explicit required validator is set using the validators option then 
     * that gets used instead.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">required</code> option:</caption>
     * $(".selector").ojInputNumber({required: 'required'});<br/>
     * @example <caption>Initialize <code class="prettyprint">required</code> otpion from html attribute 'required':</caption>
     * &lt;input type="text" value= "foobar" required/><br/>
     * // reading the required option will return "required"
     * $(".selector").ojInputNumber("option", "required");<br/>
     * 
     * @example <caption>Using <code class="prettyprint">required</code> option and setting an explicit required validator:</caption>
     * &lt;input type="text" value="foobar" required data-bind="ojComponent: {
     *   component: 'ojInputText', 
     *   value: password, 
     *   validators: [{type: 'required', options : {
                               messageSummary: '\'{label}\' Required', 
                               messageDetail: 'A value is required for this field'}}]}"/>
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {string}
     */
    required: "",
    
    /** 
     * represents advisory information for the component, such as would be appropriate for a tooltip. 
     * The element's title property is used as its initial value if it exists, when the option is 
     * not explicitly set. 
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">title</code> option:</caption>
     * &lt;input id="username" type="text" name="username" title="enter at least 3 alphanumeric characters" 
     *           pattern="[a-zA-Z0-9]{3,}" value=""/><br/>
     * $("#username").ojInputText({});
     * @example <caption>Initialize <code class="prettyprint">title</code> otpion from html attribute 'title':</caption>
     * &lt;input type="text" value= "foobar"  title="enter at least 3 alphanumeric characters" 
     *           pattern="[a-zA-Z0-9]{3,}"/><br/>
     * // reading the title option will return "enter at least 3 alphanumeric characters"
     * $(".selector").ojInputNumber("option", "required");<br/>
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {string}
     */    
    title: "",
    
    /** 
     * an array of validator instances, where each instance duck types oj.Validator, or an array of 
     * validator object literals where each object contains the following name value pairs. 
     * <ul>
     *   <li><i>type</i>: a string validator type that is registered with the oj.ValidatorFactory. 
     *   An instance is created using the factory method on @link oj.ValidatorFactory. </li>
     *   <li><i>options</i>: an optional Object literal of options that the validator expects.</li>
     * </ul>
     * After the component has been initialized with validators, changing the validators on the 
     * component can present issues that need to addressed appropriately <br/>
     * - if the component is valid, the current value that passed validations before may now start 
     * failing. E.g, if value was below a certain max value but a new validator lowered the max 
     * value, invalidating the current value. In such cases the page author has the option of 
     * calling the validate() method to re-run validators against the current value. In some cases 
     * it may be necessary to re-initialize the component.<br/>
     * - if the component was invalid when the validators changed, again it may be necessary to 
     * for the page author to clear messages on the component, or in some cases re-initialize the 
     * component might be necessary.<br/>
     * 
     * @example <caption>Initialize the component with validator object literal:</caption>
     * $(".selector").ojInputNumber({
     *   validators: [{
     *     type: 'numberRange', 
     *     options : {
     *       hint: {hintMinimum: 'Enter a value greater than '{min}'}, 
     *       min: 100
     *     }
     *   }],
     * });
     * NOTE: oj.Validation.validatorFactory('numberRange') returns the validator factory that is used 
     * to instantiate a numberRange validator.
     * 
     * @example <caption>Initialize the component with multiple validator instances:</caption>
     * var validator1 = new MyCustomValidator({'foo': 'A'}); 
     * var validator2 = new MyCustomValidator({'foo': 'B'});
     * $(".selector").ojInputNumber({
     *   value: 10, 
     *   validators: [validator1, validator2]
     * });
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {Array}
     */    
    validators: null,
    
    /** 
     * The value of the editable component. The element's value property is used as its initial 
     * value if it exists, when the option is not explicitly set. The type of the value is as 
     * defined by the component that extends this class. 
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">value</code> option specified:</caption>
     * $(".selector").ojInputNumber({'value': 10});<br/>
     * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
     * // Getter: returns 10
     * $(".selector").ojInputNumber("option", "value");
     * // Setter: sets 20
     * $(".selector").ojInputNumber("option", "value", 20);
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {Object}
     */
    value: null,
    
    // Events
    /**
     * Triggered when the following component options change. 
     * <ul>
     * <li><strong>messages</strong>: a component's validity changes when its messages changes. For example - <br/>
     *   <ul>
     *     <li>when it goes from valid with no messages, to invalid with messages (of severity fatal 
     *      or error), or to valid with messages (of severity warning, info or confirmation). </li>
     *      <li>when it goes from valid with messages, to valid with a new set of messages, or to 
     *        valid with no messages, or to invalid with messages</li>
     *      <li>when it goes from invalid with messages, to invalid with new set of messages, or to 
     *      valid with no messages, or to valid with messages (of severity warning or lower). </li>
     *   </ul>
     * </li>
     * <li><strong>value</strong>: when the component's value changes. </li>
     * </ul>
     * <p>The event payload has the following properties - </p>
     * @property {Event} event <code class="prettyprint">jQuery</code> event object
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "messages" or "value"
     * @property {Object} data.previousValue - an Object holding the previous value of the option
     * @property {Object} data.value - an Object holding the current value of the option
     * @property {Object} data.optionMetadata - an Object literal that provides metadata for the option. 
     * 
     * @example <caption>Initialize the ojInputText component with the <code class="prettyprint">optionChange</code> callback to be notified of changes to the component's validity</caption>
     * $(".selector").ojInputText({
     *   'optionChange': function (event, data) {} 
     * });
     * @example <caption>Bind an event listener to the ojoptionchange event</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @memberof! oj.editableValue
     * @expose
     * @event 
     * @access public
     * @instance
     *
     */
    optionChange: null,
    
     /**
     * Allows you to set certain attributes on the root dom element.
     *
     * @example <caption>Initialize root dom element with the set of 
     * <code class="prettyprint">rootAttributes</code>:</caption>
     * $(".selector").ojInputText("option", "rootAttributes", {
     *   'id': 'myId', 
     *   'style': 'max-width:100%; color:blue;', 
     *   'class': 'my-text-class'
     * });
     * 
     * @expose
     * @access public
     * @memberof! oj.editableValue
     * @instance
     * @type {Object|undefined}
     * @default <code class="prettyprint">{ id: null, class: null, style:null }</code>
     */
     rootAttributes: undefined
	},
  
  // P U B L I C    M E T H O D S
  // value() as a public method is not required to be supported. Customers will use the 'option' 
  // method to set the value instead
  
  /**
   * Reacts to changes to the 'value' or 'messages' option by triggering a 'optionChange' event if 
   * the value changes from its previous value. Refer to the optionChange event for details.
   * 
   * @param {String|Object|string=} key a single string representing a key or an object representing a group 
   * of options
   * @param {Object=} value of the key
   * @fires oj.editableValue#optionChange
   */
  option : function (key, value)
  {
    var retVal, previousValue, previousMsgs, previousMsgDisplay, valueOptionSet = false, newValue, 
        originalEvent, messagesOptionSet = false, deleteSpecialEventKey = false, 
        refreshMessagingOptions = true, placeholderOptionSet = false;
    
    // an explicit key or key/value is passed in.
    if (typeof key === "string" && value !== undefined)
    {
      switch (key)
      {
        case "value":
          valueOptionSet = true;
          previousValue = this.options['value'];
          break;
          
        case "messages":
          messagesOptionSet = true;
          previousMsgs = this.options['messages'] || [];
          break;
          
        case "messagingDisplayOptions":
          previousMsgDisplay = $.extend({}, this.options['messagingDisplayOptions']);
          break;
          
        case "placeholder" :
          placeholderOptionSet = true;
          break;           
      }
    }
    // an object literal of key...values is passed in - ('option', {key: value, key2: value2})
    else if (typeof key === "object")
    {
      if (key)
      {
        if (key['value'] !== undefined)
        {
          valueOptionSet = true;
          previousValue = this.options['value'];
          deleteSpecialEventKey = true;
        }
      
        if (key["messages"] !== undefined)
        {
          messagesOptionSet = true;
          previousMsgs = this.options['messages'];
          deleteSpecialEventKey = true;
        }
        
        // messagingDisplayOptions - 
        if (key['messagingDisplayOptions'])
        {
          previousMsgDisplay = $.extend({}, this.options['messagingDisplayOptions']);
          // key['messagingDisplayOptions'] = $.extend(previousMsgDisplay, key['messagingDisplayOptions']);
        }
        
        if (key['placeholder'])
        {
          placeholderOptionSet = true;
          refreshMessagingOptions = key['_oj_messaging_update'] ? false : true;
          delete key['_oj_messaging_update']; // remove before call to _super
          
        }
        
        if (deleteSpecialEventKey)
        {
          // _SetValue passes a special key for the event, which needs to be removed.
          originalEvent = key['_oj_originalEvent'];
          delete key['_oj_originalEvent']; // remove before call to _super
        }
      }
    }
    
    // Step 2: call the super to set the option 
    retVal = this._superApply(arguments);
    
    // Step 3: trigger events if needed
    if (valueOptionSet)
    {
      newValue = this.options['value'];
      // trigger a optionChange event only when the newValue is different from the previousValue to 
      // avoid recursion. E.g., setOption() triggers optionChange, which calls ko binding callback, 
      // which then writes to observable. Which then causes binding update to call set option again
      if (!this._ValueEquals(previousValue, newValue))
      {
        this._TriggerOptionChange('value', previousValue, originalEvent || null);
      }
    }
    
    if (messagesOptionSet)
    {
      if (!this._ValueEquals(previousMsgs, this.options['messages']))
      {
        this._TriggerOptionChange('messages', previousMsgs, originalEvent || null);
      }
    }
    
    if (placeholderOptionSet)
    {
      if (refreshMessagingOptions)
      {
        // if placeholder was set and it's not from messaging code, then the messaging preferences 
        // will need to re-evaluated. E.g., the default display for 
        // converterHint: ['placeholder', 'notewindow'] is 'placeholder', and if user were to set a 
        // custom placeholder, this overrides the default display for convererHint from 'placeholder'
        // to 'notewindow'. 
        this.__customPlaceholderSet = true;
        this._initComponentMessaging();
      }
      else
      {
        this.__customPlaceholderSet = false;
      }
    }
    
    return retVal;
  },

          
  /**
   * whether the component is currently valid. 
   * @example <caption>Check whether the component is valid:</caption>
   * var value = $(".selector").ojInputText("isValid");
   * @returns {boolean}
   * @access public
   * @instance
   * @expose
   * @memberof! oj.editableValue
   */
  isValid : function ()
  {
    return this.__valid;
  },
  
  /**
   * Called typically when the DOM underneath the component has changed requiring a re-render 
   * of the component, but also when some external condition impacts the rendering of the component,
   * e.g., when the locale for the page change, a component using a converter or translations will 
   * need to be refreshed. <br/>
   * This method override refreshes the component display value to the option value. When the 
   * component was previously invalid it is important to clear the messages explicitly., before 
   * calling refresh.
   * 
   * @example <caption>Clear messages and refresh component.</caption>
   * $(selector).ojInputText("option", "messages", []); <br/>
   * $(selector).ojInputText("refresh");
   * component 
   * @access public
   * @instance
   * @expose
   * @memberof! oj.editableValue
   */
  refresh : function ()
  {
    this._super();
    this._doRefresh(true);
  },
  
  /**
   * A convenience method to validate the option value after it is set programmatically using the 
   * option setter. <br/>
   * 
   * When the value property is set, it's expected to be of the correct type as defined by 
   * the component. To run the value through the validators, this method can be called. When there 
   * are no validators setup for the component this method is a no-op and returns true.
   * When there is at least one validator the first one that fails, updates the component validity, 
   * adds messages and triggers the optionChange event. <br/>
   * Callers should explicitly clear messages when calling this method.
   * 
   * @example <caption>Validate the <code class="prettyprint">value</code> option.</caption>
   * // set value
   * $(.selector).ojInputDate('option', 'value', new Date());
   * // clear current messages on component
   * $(.selector).ojInputText('option', 'messages', []);
   * // validate value. validation errors are displayed if any based on the messagingDisplayOptions.
   * $(.selector).ojInputText('validate');
   * 
   * @param {boolean} requiredOnly If true only runs the required-ness check.
   * 
   * @access public
   * @expose
   * @instance
   * @memberof! oj.editableValue
   */
  validate : function (requiredOnly)
  {
    var newValue, mode = requiredOnly ? this._VALIDATION_MODE.REQUIRED_VALIDATOR_ONLY : 
            this._VALIDATION_MODE.VALIDATORS_ONLY;
    
    // Callers would use the messages option to clear existing messages, before calling validate(). 
    // component("option", "messages", []);
    newValue = this._doRunValidation(this.options['value'], undefined, mode);
    if (!this.isValid())
    {
      return false;
    }
    
    return true;
  },   
    
  // P R O T E C T E D    C O N S T A N T S   A N D   M E T H O D S

  // *********** START WIDGET FACTORY METHODS (they retain _camelcase naming convention) **********
  
  /**
   * Validation mode specifying the kind of validation that gets run.
   * @protected
   * @memberof! oj.editableValue
   * @const
   */       
  _VALIDATION_MODE : {FULL : 1, VALIDATORS_ONLY : 2, REQUIRED_VALIDATOR_ONLY : 3, NONE : 4},

  /**
   * This is where we create components. You have access to the options, and 
   * that's about it. Use _AfterCreateComponent if you want to do things
   * after the component is created, like add styles to the root dom element.
   * this._super should be call first.
   * 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _CreateComponent : function ()
  {
    this._super();
  },
  /**
   * This is where we do things right after the component was created.
   * this._super should be call first.
   * 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _AfterCreateComponent : function ()
  {
    this._super();
    // VALUE: 
    // if options doesn't have a value property look for the element value
    if (!this.options['value'])
    {
      this.options['value'] = this._GetElementValue();
    }
    
    // DISABLED:
    // if options.disabled is not set, or not valid, get it from the element
    // if options.disabled is set to a valid value (boolean), set it on the 
    // element to keep the two in sync. 
    if ( typeof this.options.disabled !== "boolean" ) 
    {
      // !! ensures it is a boolean
      this.options.disabled = !!this.element.prop( "disabled" );
    } 
    else 
    {
      this.element.prop( "disabled", this.options.disabled );
    }  
    // decorate the label
    this._createOjLabel();
    
    // refresh value, theming and aria attributes
    this._doRefresh(false);

    // initialize component messaging
    this._initComponentMessaging();
   
    // trigger a optionChange event to push current set of messages into invalidComponentTracker at 
    // creation time.
    if (!this.options['messages'])
    {
      this.options['messages'] = [];
    }
    this._TriggerOptionChange('messages', [], null);   
           
    this.widget().addClass("oj-form-control");
  },
  
  /**
   * Invokes the super functionality and removes select attributes from the node
   * 
   * @ignore
   * @expose
   * @param {Object} node - jQuery selection to save attributes for
   * @override
   * @instance
   * @protected
   */
  _SaveAttributes : function (node)
  {
    var ret = this._superApply(arguments), 
        savedAttributes = this._GetSavedAttributes(node), 
        attrToRemove = ["required", "title", "pattern"]; //remove the attribute to not trigger html5 validation + inline bubble
    
    // REQUIRED: 
    // if options.required is not set, use required attribute on the element.
    if (!this.options['required'])
    {
      // Usually element attribute is updated when required property is set and vice versa.
      var propValue = "required" in savedAttributes ? savedAttributes["required"]["prop"] : false;
      this.options['required'] = propValue ? "required" : "optional";
    }
  
    // TITLE:
    // if options.title is not set, use title attribute on element.
    if (!this.options['title'])
    {
      this.options['title'] = "title" in savedAttributes ? savedAttributes["title"]["prop"] || "" : "";
    }
  
    // PATTERN:
    // if options.pattern is not set, use pattern attribute on element.
    if (!this.options['pattern'])
    {
      this.options['pattern'] = "pattern" in savedAttributes ? savedAttributes["pattern"]["prop"] || "" : "";
    }
  
    // register a default RegExp validator if we have a valid pattern
    if (this.options['pattern'])
    {
      // add validator to the special internalValidators list. These are validators created by 
      // the framework. We don't want these cleared using the option - 'validators'
      this._GetDefaultValidators()['regExp'] = this._getDefaultRegExpValidator();
    }
  
    // PLACEHOLDER:
    // if options.placeholder is not set, use placeholder attribute on element
    if (!this.options['placeholder'])
    {
      this.options['placeholder'] = "placeholder" in savedAttributes ? 
        savedAttributes["placeholder"]["prop"] || "" : "";
      this.__customPlaceholderSet = true;
    }
    
    // remove html5 validation attributes 
    $.each(attrToRemove, function (index, value)
    {
      if (value in savedAttributes)
      {
        node.removeAttr(value);
      }
    });
  
    return ret;
  },
          
  
  /**
   * Detaches the widget from the element and restores element exactly like it was before the widget 
   * was attached.
   * @protected
   */
  _destroy : function ()
  {
    var widget = this.widget();
    
    this._clearMessages(undefined, true);
    this._getComponentMessaging().deactivate(this._getMessagingContent());
    // remove all selectors added to the widget
    $.each(this._OPTION_TO_CSS_MAPPING, function() { 
        widget.removeClass(this.toString());
      });
    widget.removeClass("oj-form-control");
    // remove all aria attributes added to the element  
    this.element.removeAttr("aria-required");
    if (this.$label)
    {
      this.$label._ojLabel( "destroy" );
    }
    return this._super();
  },
          
  
  /**
   * Called (by the widget factory) when the option changes, this method responds to the change 
   * by refreshing the component if needed. This method is not called for the options passed in 
   * during the creation of the widget.
   * 
   * @param {string} name of the option
   * @param {Object|string} value 
   * 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _setOption : function (name, value) 
  {
    var retVal = this._superApply(arguments), shouldRefresh = true, hasMessages, maxLevel = 0;
    switch(name)
    {
      case "converter":
        // When the converter changes clear the cached converter instance.
        this.__converter = null;
        
        // also update messagingstrategy as hint associated with converter could have changed
        this._getComponentMessaging().update(this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.CONVERTER_HINT));
        // shouldRefresh = true; we want component to refresh its display value using new converter
        break;
      
      case "validators":
        // Clear the cached normalized list of all validator instances
        this._ResetAllValidators();
        
        // update messagingstrategy as hints associated with validators could have changed
        this._getComponentMessaging().update(this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDATOR_HINTS));
        shouldRefresh = false;
        break;
        
      case "messages":
        
        // When new messages are written determine component validity and severity and update 
        // component messaging
        hasMessages = value && value.length !== 0;
        // When messages are cleared reset component validity
        if (!hasMessages)
        {
          // options.messages is empty; 
          this.__maxSeverityLevel = 0;
          this.__valid = true;
        }
        else 
        {
          // clear current max severity 
          this.__maxSeverityLevel = 0;
          maxLevel = this._getMaxSeverity();
          
          // determine new valid state
          if (maxLevel >= oj.Message.SEVERITY_LEVEL['ERROR'])
          {
            this.__valid = false;
          }
          else
          {
            this.__valid = true;
          }
        }
        
        this._getComponentMessaging().update(this._getMessagingContent());
        break;
        
      case "messagingDisplayOptions" :
        // clear the cached merged options; the getter setup for this.options['messagingDisplayOptions']
        // will merge the new value with the defaults
        this.__messagingDisplayOptions = null;
        this._initComponentMessaging();
        
        break;
      
      case "pattern":
        this.__defaultRegExpOptions['pattern'] = value;
        shouldRefresh = false;
        break;

      case "placeholder":
        this._SetPlaceholder(value);
        shouldRefresh = false; //  no reason to refresh component.
        break;
      
      case "required":
        // shouldRefresh=true because hints and label should refresh to show new state
        break;
        
      case "title":
        // update messagingstrategy
        this._getComponentMessaging().update(this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.TITLE));
        break;
    }
      
    if (shouldRefresh)
    {
      // TODO: _setOption is calling _Refresh for every option change. 
      // Allowing this only for value and some specific options (see above) breaks inputnumber tests
      this._Refresh(name, value);
      // refresh aria attributes if needed
      this._refreshAria(name, value);

      // some options have special CSS selectors that need to be added or removed on the widget 
      this._refreshTheming(name, value);
    }      

    return retVal;
  },
  
  // *********** END WIDGET FACTORY METHODS **********
  
  /**
   * Returns a jquery object of the element representing the content node. This could be a jQuery 
   * object of the element the widget was invoked on - typically this is an input or select or 
   * textarea element for which a value can be set.
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * @return {Object} the jquery element that represents the editable content. E.g., an input
   */
  _GetContentElement : function ()
  {
    return this.element;
  },
    /**
   * Returns a jquery object of the element representing the primary label node 
   * for the input component. 
   * First we look for the aria-labelledby attribute on the input.
   * If that's not found, we look for the label with 'for' attribute 
   * pointing to input.
   * If that's not found, we walk up the dom looking for aria-labelledby.
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * @return {Object} the jquery element that represents the input component's label.
   *  return null if it can't find anything.
   */
  _GetLabelElement : function ()
  {
    // If input has aria-labelledby set, then look for label it is referring to.
    var queryResult = this._getAriaLabelledByElement(this.element);
    if (queryResult !== null && queryResult.length !== 0)
    {
      return queryResult;
    }
    
    // if no aria-labelledby is on the input, then look for a label with 'for'
    // set.
    var id = this.element.prop("id");
    if (id !== undefined)
    {
      var labelQuery = "label[for='" + id + "']";
      queryResult = $(labelQuery);
      if (queryResult.length !== 0)
      {
        return queryResult;
      }
    }
 
    // if no aria-labelledby on input and no label with 'for' pointing to input,
    // then as a final step we walk up the dom to see if aria-labelledby is set.
    // If so, then we find the label it is referring to.
    // This would be the case when you have multiple inputs grouped in a div 
    // <label id="grouplabel">Address</label>
    // <div aria-labelledby="grouplabel"><input/><input/><input/></div>
    var ariaElement = this.element.closest("[aria-labelledby]");
    if (ariaElement.length !== 0)
    {
      // Element has aria-labelledby set, so look for label it is referring to.
      queryResult = this._getAriaLabelledByElement(ariaElement);
      if (queryResult !== null && queryResult.length !== 0)
      {
        return queryResult;
      }
    }
    return null;

  },
  
  
  /**
   * Returns the element's value. Normally, this is a call to this.element.val(), but for some 
   * components, it could be something else. E.g., for ojRadioset the element's value is really the 
   * value of the selected radio in the set. 
   * 
   * @override
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetElementValue : function () 
  {
    return this.element.val();
  },
  

/**
   * Returns a jquery object of the element that triggers messaging behavior. The trigger element 
   * is usually an input or select or textarea element for which a value can be set/retrieved and 
   * validated. 
   * 
   * @return {Object} jquery object 
   * 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetMessagingTriggerElement : function ()
  {
    return this._GetContentElement();
  },
  
  /**
   * Returns the normalized converter instance.
   * 
   * @return {Object} a converter instance or null
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetConverter : function () 
  {
    // this.__converter holds the instance
    if (!this.__converter)
    {
      var converterOption = this.options['converter'];
      this.__converter = oj.IntlConverterUtils.getConverterInstance(converterOption);
    }
    
    return this.__converter || null;
  },

  /**
   * Returns an array of default validators used by component. The list of default validators are 
   * for the internal use of the component and are not a part of this.options.validators. E.g., if 
   * the pattern attribute or option is set, a RegExpValidator instance is automatically created and 
   * added to this list. RequiredValidtor is tracked separately from the default validators.
   * 
   * @return {Object} a map of string name to the validator instance. 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetDefaultValidators : function ()
  {
    if (!this.__defaultValidators)
    {
      this.__defaultValidators = {};
    }
    
    return this.__defaultValidators;
  },
          
  /**
   * Returns the display value that is ready to be passed to the converter.
   * 
   * @param {Object} value the stored value if available that needs to be formatted for display
   * @return {string} usually a string display value
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetDisplayValue : function (value) 
  {
    return this._GetContentElement().val();
  },

  /**
   * Returns an array of all validators built by merging the validators option set on the component 
   * and the default validators setup by the component. <br/>
   * This does not include the default required validator. Components can override to add to this 
   * array of validators.
   * 
   * @return {Array} of validators
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetAllValidators : function ()
  {
    if (!this.__allValidators)
    {
      var allValidators = [], validatorsOption = this.options['validators'], validator, 
          isValidatorInstance = true, defaultValidatorMap = this._GetDefaultValidators(), 
          defaultValidators = [], vType, vOptions, vTypeStr, normalizedValidators, i;

      // combine public and internal validators to get the combined list
      for (var val in defaultValidatorMap) 
      {
        if (defaultValidatorMap.hasOwnProperty(val)) 
        {
          defaultValidators.push(defaultValidatorMap[val]);
        }          
      }
      allValidators = allValidators.concat(defaultValidators);
        
      if (validatorsOption)
      {
        normalizedValidators = [];
        // Normalize validators 
        for (i = 0; i < validatorsOption.length; i++)
        {
          validator = validatorsOption[i];
          if (typeof validator === "object") 
          {
            // check if we have an actual validator instance that implements the validate() method
            // oj.Validation.__doImplementsCheck(validator, oj.Validator);
            if (!(validator['validate'] && typeof validator['validate'] === "function"))
            {
              isValidatorInstance = false;
            }
            
            if (!isValidatorInstance)
            {
              // we maybe dealing with an object literal
              // {'type': 'numberRange', 'options': { 'min': 100, 'max': 1000,
              //                                    'hint': {'hintMinimum': 'some hint'}}}
              vTypeStr = validator['type'];
              if (vTypeStr && typeof vTypeStr === "string")
              {
                vType = oj.Validation.validatorFactory(vTypeStr);
                if (vType)
                {
                  vOptions = $.extend({}, validator['options']) || {};
                  // we push converter into the options if not provided explicitly. This is to allow
                  // validators to format values shown in the hint and messages
                  vOptions['converter'] = vOptions['converter'] || this._GetConverter();
                  vOptions['label'] = vOptions['label'] || this._getLabelText();
                  validator = vType.createValidator(vOptions);
                }
                else
                {
                  oj.Logger.error("Unable to locate a validatorFactory for the requested type: " + vTypeStr);
                }
              }
            }
            
            normalizedValidators.push(validator);
          }
          else
          {
            oj.Logger.error("Unable to parse the validator provided:" + validator);
          }
        }

        allValidators = allValidators.concat(normalizedValidators);
      }
      
      this.__allValidators = allValidators;
    }
    
    return this.__allValidators || [];
  },
  
  /**
   * EditableValue caches the validators to be run within this.__allValidators variable.
   * This is great; however when the default validators need to be reset [i.e. min + max changing] 
   * then the cached this.__allValidators needs to be cleared out]
   * 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _ResetAllValidators : function () 
  {
    if (this.__allValidators)
    {
      this.__allValidators.length = 0;
    }
    this.__allValidators = null;
  },

  /**
   * Whether the component is required.
   * 
   * @return {boolean} true if required; false
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _IsRequired : function () 
  {
    // by default we check if required attribute is set on the element.
    return this.options.required === "required";
  },
            
  
  /**
   * Convenience handler for the DOM 'change' event. Subclasses are expected to wire up event 
   * handlers for DOM events that they wish to handle.<br/>
   * 
   * The implementation retrieves the display value for the component by calling _GetDisplayValue() 
   * and calls _SetValue(), with full validation.
   * 
   * @param {Event} event DOM event 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _HandleChangeEvent : function (event) 
  {
    var submittedValue = this._GetDisplayValue();
    // run full validation
    this._SetValue(submittedValue, event);
  }, 

  /**
   * Called in response to a change in the options set for this component, this method refreshes the 
   * component display value. Subclasses can override to provide custom refresh behavior.
   * 
   * @param {String=} name the name of the option that was changed
   * @param {Object=} value the current value of the option
   * @param {boolean=} fullRefresh false is the default; true means always refresh component 
   * display value
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _Refresh : function (name, value, fullRefresh)
  {
    switch (name)
    {
      case "converter":
        value = this.options['value'];
        // when converter changes format of value could change
        this._refreshComponentDisplayValue(value, true);
        break;
         
      case "value":
        this._refreshComponentDisplayValue(value, fullRefresh);
        break;

      case "required":
        // need to keep the label in sync with the input
        if (this.$label)
        {
          this.$label._ojLabel("option", "required", value);
        }
        break;
        
      case "help":
        // refresh the help - need to keep the label in sync with the input.
        var helpDef = this.options.help["definition"];
        var helpSource = this.options.help["source"];
        var labelHelpIconWrapper = this._ariaDescribedByHelpIconWrapper(helpSource);

        if (this.$label)
        {
          // Calling option this way calls _setOption in _ojLabel.
          // order matters here. When _ojLabel's help is changed, it removes
          // the help dom, then re-adds it. We need to make sure _ojLabel's  
          // describedById option is there so we can find the dom to remove
          // and recreate if needed.
          this.$label._ojLabel("option", "describedById", labelHelpIconWrapper);
          this.$label._ojLabel("option", "help", 
                          {"definition":helpDef, 
                          "source":helpSource});
        }
        break;        
    }
  },
  /**
   * Called when a aria-required attribute needs to be set or removed. 
   * Most inputs/selects need aria-required on the input element (aka 'content')
   * But it is not legal to have aria-required on radio/checkboxes.
   * Subclasses can override to put aria-required where they want.
   * 
   * @param {Object=} value the current value of the required option
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _RefreshAriaRequired : function (value)
  {
    var ariaValue, contentNode = this._GetContentElement();

    ariaValue = (value == "required") ? true : false;
    if (ariaValue && contentNode) 
    {
      contentNode.attr("aria-required", ariaValue);
    }
    else
    {
      contentNode.removeAttr("aria-required");
    }
  },

  /**
   * Called when the display value on the element needs to be updated. This method updates the 
   * (content) element value. Widgets can override this method to update the element appropriately. 
   * 
   * @param {String} displayValue of the new string to be displayed
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
  */  
  _SetDisplayValue : function (displayValue) 
  {
    var contentElem = this._GetContentElement();
    contentElem.val(displayValue);
  },
  
  /**
   * Sets the value on the component after clearing existing messages on the component. This method 
   * is typically called when a component needs to write a user value into the component. <br/>
   * 
   * @param {Object} newValue the value to be set.
   * @param {Object=} event an optional event if this was a result of ui interaction. For user 
   * initiated actions that trigger a DOM event, passing this event is required. E.g., if user action 
   * causes a 'blur' event. <br/>
   * When _SetValue is called as a result of a programmatic update, such as calling a method on a 
   * component, then the event can be undefined. E.g., ojInputNumber.stepUp()
   * @param {{validationMode:number}=} options an Object literal that callers pass in to determine 
   * how validation gets run. Keys and values to pass in options are as follows:
   * 'validationMode': {number} Accepted values (defined in _VALIDATION_MODE) are - 
   * <ul>
   *   <li>FULL - the default and runs both the converter and all validators. </li>
   *   <li>VALIDATORS_ONLY - runs all validators including the required validator is run.</li>
   *   <li>REQUIRED_VALIDATOR_ONLY - runs just the required validator. </li>
   *   <li>NONE - runs no validation and write the value to the options.</li>
   * </ul>  
   * NOTE: All options expect NONE will clear current messages. <br/>
   * 
   * <ul>
   * <li>
   * If validation is to be run, then the newValue is compared with the last element value. If it's 
   * the same then validation is skipped. If not the same validation continues.
   * </li>
   * <li>When there is a validation error, value option not set and the method returns false.</li>
   * <li>If all validations pass, and the new parsed value is the same as the options.value then the 
   * value option is not written, the component display is refreshed and the method returns true. But
   * if the new value is different then it's written to the options and the component refreshed</li>
   * </ul>
   *   
   * @return {boolean} false if value was not set due to validation error. 
   * @example: Widget subclasses can use this convention to run full validation
   * this._SetValue(value, event);
   * 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * 
   */
  _SetValue : function (newValue, event, options)
  {
    var previousValue = this.options['value'], mode, runningValidations = true;
    
    // disallow setting a value of undefined by widgets
    if (newValue === undefined)
    {
      oj.Logger.warn("Attempt to set a value of undefined");
      return false;
    }
    
    if (this._CanSetValue())
    {
      mode = options && options.validationMode ? options.validationMode : this._VALIDATION_MODE.FULL;
      runningValidations = (mode !== this._VALIDATION_MODE.NONE);
      
      if (runningValidations)
      {
        // reset validity and clear messages stored on the component if we are validating and 
        // the new (display) value is not the same as the previous display value.
        if (!(newValue === this._getLastElementValue())) 
        {
          // save off the newValue into the last element value
          this._setLastElementValue(newValue);          
          this._clearMessages(event);

          newValue = this._doRunValidation(newValue, event, mode);
          if (!this.isValid())
          {
            return false;
          }
        }
        else
        {
          if (oj.Logger.level > oj.Logger.LEVEL_WARN)
          {
            oj.Logger.info("Validation was skipped because the display value " + 
                    (newValue.toString) ? newValue.toString() : newValue + " as the previous.");
          }
          return false;
        }
      }

      // before writing the new value to the option, we check if it's same as the current option 
      // value to avoid unnecessary writes to option, observable etc. This alos means no triggering 
      // a optionChange event. it may be necessary to refresh the displayValue.
      if (this._ValueEquals(previousValue, newValue))
      {
        this._updateElementDisplayValue(newValue, event);
        if (oj.Logger.level > oj.Logger.LEVEL_WARN)
        {
          oj.Logger.info("The value was not set on the component as it's the same as the current value - " + 
                  (newValue.toString) ? newValue.toString() : newValue);
        }
      }
      else
      {
        // writing to option value.
        this._updateValueOption(newValue, event);
      }
    }
    
    return true;
  },
    
  /**
   * Whether the a value can be set on the component. If the component is 
   * disabled then setting value on component is a no-op. 
   * 
   * @see #_SetValue
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _CanSetValue: function ()
  {
    var disabled = this.options['disabled'] || false;
    
    if (disabled)
    {
      return false;
    }
    
    return true;
  },
          
  /**
   * Set root attribues  
   * @protected
  */
  _SetRootAttributes : function () 
  {
    var value = this.options.rootAttributes;
    if (value)
    {
      // todo: save root attributes in create and set them back during destroy?
      // todo: currently only support id, class, style
      var widget = this.widget();
      
      var idValue = value["id"];
      
      if (idValue)
      {
        widget.attr('id', idValue)
      }
      
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
    }
  },
  /**
   * Sets the placeholder text on the content element by default. It sets the placeholder attribute
   * on the element. Component subclasses can override this method to control where placeholder text
   * gets set.
   * @param {string} value
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _SetPlaceholder : function(value)
  {
    this._GetContentElement().attr("placeholder", value);
  },
          
  /**
   * Triggers a 'optionChange' event on the component. The payload is the previous and current 
   * values for the option that changed. Currently supported options that trigger this event are 
   * value and messages.
   * 
   * @param {string} option name of the option that changed
   * @param {string|number|Object} previousValue an array of the previous 
   * @param {Event=} originalEvent the original dom event that triggered the validation
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
   _TriggerOptionChange : function (option, previousValue, originalEvent)
   {
     oj.Assert.assertNonEmptyString(option, "");
     var dataHash = {
       'option': option,
       'previousValue': previousValue, 
       'value' : this.options[option],
       'optionMetadata': {'writeback': 'shouldWrite'}};

     switch(option)
     {
       case 'messages':
         
        this._trigger('optionChange', originalEvent || null, dataHash);
        // not preventing default behavior. So show messages
        this._getComponentMessaging().update(this._getMessagingContent());
        break;
        
      case 'value':
        // users can't cancel the value change event as the event is triggered after the value changes
        this._trigger('optionChange', originalEvent || null, dataHash);
        break;
        
      default:
        break;
     }
     
   },

  /**
   * Compares 2 values for equality and returns true if they are equal; false otherwise. Calls 
   * oj.Object.innerEquals() which works for most Javascript data types.
   * 
   * @param {Object|string|undefined} value1 first value
   * @param {Object|string|undefined} value2 another value
   * @return {boolean}
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _ValueEquals : function (value1, value2)
  {
    return oj.Object.innerEquals(value1, value2);
  },
  /**
   * Returns the default styleclass for the component. Currently this is 
   * used to pass to the _ojLabel component, which will append -label and 
   * add the style class onto the label. This way we can style the label
   * specific to the input component. For example, for inline labels, the
   * radioset/checkboxset components need to have margin-top:0, whereas all the
   * other inputs need it to be .5em. So we'll have a special margin-top style 
   * for .oj-label-inline.oj-radioset-label
   * All input components must override
   * 
   * @return {string}
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-editablevalue";
  },
    
  
  // I N T E R N A L   P R I V A T E   C O N S T A N T S    A N D   M E T H O D S 
  // Subclasses should not override or call these methods
  
  
  /**
   * when below listed options are passed to the component, corresponding CSS will be toggled
   * @private
   * @const
   * @type {Object}
   */
  _OPTION_TO_CSS_MAPPING: {
    "disabled": "oj-disabled",
    "required": "oj-required",
    "readOnly": "oj-read-only"
  },
  
  /**
   * Types of messaging content to update.
   * <ul>
   * <li>'ALL' - builds all messaging content</li>
   * <li>'VALIDITY_STATE' - updates only validityState every time validation runs and there are 
   * new messages or when the messages option changes.</li>
   * <li>'CONVERTER_HINT' - updates only converter hints, this is used when converter option 
   * changes</li>
   * <li>'VALIDATOR_HINTS' - updates only validator hints, this is used when validators option 
   * changes</li>
   * <li>'TITLE' - updates only title, when the title property changes</li>
   * </ul>
   * @private
   */
  __MESSAGING_CONTENT_UPDATE_TYPE : {ALL : 1, 
                                     VALIDITY_STATE : 2, 
                                     CONVERTER_HINT : 3, 
                                     VALIDATOR_HINTS : 4, 
                                     TITLE : 5},
                                   
  
  /**
   * Clears messages for this component.  
   * @param {Event=} event
   * @param {boolean=} silentUpdate default value is false; a true value clears the member variable 
   * directly without using the public option method, causing no events to be fired. 
   * @private
  */
  _clearMessages : function (event, silentUpdate) 
  {
    silentUpdate = silentUpdate ? true : false;
    if (!silentUpdate)
    {
      var msgsHash = {};
      msgsHash['messages'] = [];
      if (event)
      {  
        msgsHash['_oj_originalEvent'] = event;
      }
      this.option(msgsHash);
    }
    else
    {
      // if we are destroying widget don't bother setting option
      this.options['messages'] = [];
    }
  },
  /**
   * Refreshes the component to respond to DOM changes, in which case fullRefresh=true. This 
   * internal method is also called when the component's theme or accessibility attributes need to 
   * be refreshed.
   * @param {boolean} fullRefresh true if a full refresh of the component is desired.
   * @private
   */
  _doRefresh : function (fullRefresh)
  {
    // we decided not to clear messages on refresh because the user intends to refresh the component 
    // using the latest DOM and latest option values. Page Authors will need to clear messages and 
    // generally ensure component state is accurate and as expected before calling refresh().
    
    fullRefresh = fullRefresh || false;
    if (fullRefresh)
    {
      // the DOM for the label and its text could have changed. 
      if (this.$label)
      {
        this.$label._ojLabel("refresh");
      }
      
      // also clear out anything that relies on the label 
      this._refreshLabelDependents();
      
      // also re-initialize component messaging, since refresh() can be called when the locale 
      // changes, requiring component to show messaging artifacts for current locale. 
      // E.g., hints, placeholder, messages are all retrieved for the current locale. Typically when 
      // switching locales user should have cleared messages.
      this._initComponentMessaging();
    }
        
    this._Refresh("value", this.options['value'], fullRefresh);
    this._refreshAria("required", this.options.required);
    this._refreshTheming("required", this.options.required);
  },

  /**
   * Gets the last stored model value
   * 
   * @private
   */
  _getLastModelValue : function ()
  {
    return this.__oj_lastModelValue;
  },
          
  _getLastElementValue : function () 
  {
    return this.__oj_lastElementValue;
  },
  /**
   * Get the element whose id matches the elem's aria-labelledby value, if any.
   * @private
   * @param {Object} elem the dom element from which you want to get the 
   * aria-labelledby property value
   * @return {Object} if element does not have aria-labelledby defined, then
   *    returns null. If it  does, then return a new jQuery object with the 
   *    label with an id equal to the aria-labelledby value. If no match, then
   *    the jQuery object will be empty.
   */
  _getAriaLabelledByElement: function (elem)
  {
    // look for a label with an id equal to the value of aria-labelledby. 
    // .prop does not work for aria-labelledby. Need to use .attr to find
    // aria-labelledby.
    var ariaId = elem.attr("aria-labelledby");

    if (ariaId !== undefined )
    {
      var labelQuery = "label[id='" + ariaId + "']"; 
      return $(labelQuery);
    }    
    else
      return null;
  },
  /**        
   * Create the _ojLabel component
   * @private
   */
  _createOjLabel : function ()
  {
    this.$label = this._GetLabelElement();
    if (this.$label)
    {
      var helpDef = this.options['help']['definition'];
      var helpSource = this.options['help']['source'];

      var labelHelpIconWrapper = this._ariaDescribedByHelpIconWrapper(helpSource);
      // create the ojLabel component 
      this.$label._ojLabel(
    //   {inputLabelStyleClass: this._GetDefaultStyleClass()+"-label",
        {rootAttributes:{'class': this._GetDefaultStyleClass()+"-label"},
        describedById: labelHelpIconWrapper, 
        required:this.options['required'], 
        help:{'definition': helpDef, 'source': helpSource}});

    }    
  },
  /**  
   * If there is help source (an external URL), then construct an
   * id from the element's id, render aria-describedby with this id, and then
   * return the id to be used by the ojLabel.
   * 
   * For accessibility, we need to wrap help icons with a div. 
   * Then, on the input component we use aria-describedby to point to this div.
   * &lt;div id="fooIcons"&gt;
   *   &lt;span class="oj-label-help-icon oj-widget-icon oj-clickable-icon"&gt;
   *   /&lt;span/&gt;
   * /&lt;div/&gt;
   * &lt;input aria-describedby="fooIcons" id="foo" type="text"/&gt;
   *    
   * This function constructs an id to put on the help icon div and returns it.
   * It also adds the aria-describedby on the input.
   * 
   * We render the help icon only if there is help source.
   * 
   * @return {string} an id we constructed
   * @param {string} helpSource helpSource must be present
   * for the aria-describedby to be rendered.
   * @private
   */
  _ariaDescribedByHelpIconWrapper : function (helpSource)
  {
    var labelHelpIconWrapperId = this.element.prop("id") + "Icons";
    if (helpSource)
    {  
      var contentElements = this._GetContentElement();        

      // aria-describedby can be a list of ids, so make sure to append
      //contentElements.attr("aria-describedby", labelHelpIconWrapperId);
      contentElements.each(function() {
        var ariaDescBy = $(this).attr("aria-describedby");
        if (ariaDescBy)
          $(this).attr("aria-describedby", ariaDescBy + ' ' + labelHelpIconWrapperId);
        else
          $(this).attr("aria-describedby", labelHelpIconWrapperId);
     });
    }
    return labelHelpIconWrapperId;  
  },
          
  // helper method to retrieve the label text.          
  _getLabelText : function ()
  {
    if (this.$label)
    {
      return this.$label.text();
    }
  },
  /**        
   * For the current list of messages this method returns the current severity.
   * @return {number} See oj.Message.SEVERITY_LEVEL or -1 if 
   * @private
   */
  _getMaxSeverity : function ()
  {
    if (!this.__maxSeverityLevel)
    {
      this.__maxSeverityLevel = oj.Message.getMaxSeverity(this.options['messages']);
    }
    return this.__maxSeverityLevel;
  },
  
  _getValidityState : function ()
  {
    if (this.__validityState)
    {
      var messages = $.extend([], this.options['messages']); //clone array
      this.__validityState.update(this.__valid, messages, this.__maxSeverityLevel);
    }
    else
    {
      if (typeof this.__valid === "undefined")
      {  
        this.__valid = true;
      }
      this.__validityState = new oj.ComponentValidity(this.__valid, 
                                                      this.options['messages'], 
                                                      this.__maxSeverityLevel);
    }
    return this.__validityState;
  },

  /**
   * Initializes component messaging both when component is initialized or when 
   * messagingDisplayOptions is set/changed. 
   * 
   * @private
   */
  _initComponentMessaging : function()
  {
    var compMessaging = this._getComponentMessaging(), 
            messagingTrigger = this._GetMessagingTriggerElement(), 
            messagingContent = this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL);
    
    // if default placeholder is currently set then it needs to be cleared here. This is needed for 
    // the following reasons
    // i. a component is reinitialized when the locale changed, requiring the converter hint for 
    // new locale to be set as placeholder.
    // ii. or a component's placeholder option or messagingDisplayOptions option, could have changed 
    // requiring the placeholder to be reset if it's currently set to the default.
    // 
    if (!this.__customPlaceholderSet)
    {
      this.options['placeholder'] = "";
    }
    
    compMessaging.activate(messagingTrigger, messagingContent);
  },
  
  _setLastModelValue : function (value)
  {
    this.__oj_lastModelValue = value;
  },

  _setLastElementValue : function (value) 
  {
    this.__oj_lastElementValue = value;
  },

  
  /**
 * Adds a message to this element
 * @param {Object} message a Message object. TODO: contract needs to exposed
 * @param {Event=} event
 * @private
 */
  _updateMessages: function(message, event) 
  {
    var msgs = this.options['messages'].slice(), messagesHash = {};
    oj.Assert.assertPrototype(message, oj.Message);
    
    // this.options['messages'].push(message);
    msgs.push(message);
    messagesHash['messages'] = msgs;
    if (event)
    {  
      messagesHash['_oj_originalEvent'] = event;
    }
    this.option(messagesHash);
  },
          
          
  _updateValueOption : function (newValue, event)
  {
    var values = {};
    values['value'] = newValue;
    if (event)
    {  
      values['_oj_originalEvent'] = event;
    }

    this.option(values);
  },
  
  /**
   * Runs validation based on the mode settings. 
   * @param {Object} value to parse and/or validate
   * @param {Event=} event the original event or undefined
   * @param {number=} mode determines how validation is run. see _VALIDATION_MODE
   * @return {Object|string} parsed value 
   * @private
   */
  _doRunValidation : function (value, event, mode) 
  {
    var newValue = value;

    // callers of this function should clear messages 
    try
    {
      // Step 1: only when "full" validation is requested converters get run
      if (mode === this._VALIDATION_MODE.FULL)
      {
        // Step1: Parse value using converter
        newValue = this._parseValue(value);
      }

      // Step 2: Run validators
      this._validateValue(newValue, mode === this._VALIDATION_MODE.REQUIRED_VALIDATOR_ONLY);
    }
    catch (ve)
    {
      this._processValidationError(ve, event);
    }
    
    return newValue;
  },
          
  
  /**
   * Formats the value for display, based on the converter options. If no converter is set then 
   * returns the value as is.
   * 
   * @param {string} value value to be formatted
   * 
   * @return {string} formatted value
   * @throws {Error} when an error occurs during formatting
   * @private
   */
  _formatValue : function (value)
  {
    var formattedValue = value, converter = this._GetConverter();
    
    // don't clear messages here because we clear messages only when direct user interaction with 
    // component changes value. All other usecases we expect page authors to clear messages.

    if (converter)
    {
      // TODO: We should support chaining converters but for now we use just the first converter 
      // to parse.

      // Check if we have a converter instance
      if (typeof converter === "object") 
      {
        if (converter['format'] && typeof converter['format'] === "function")
        {
          formattedValue = converter['format'](value);
        }
        else
        {
          if (oj.Logger.level > oj.Logger.LEVEL_WARN)
          {
            oj.Logger.info("converter does not support the format method.");
          }
        }
      }
    }
    
    return formattedValue;
  },
  
  /**
   * @private
   */
  _getComponentMessaging : function ()
  {
    if (!this.__componentMessaging)
    {
      this.__componentMessaging = new oj.ComponentMessaging(this);
    }
    
    return this.__componentMessaging;
  },
  
  /**
   * Returns the required validator instance or creates it if needed and caches it.
   * 
   * @private
   */
  _getDefaultRequiredValidator : function ()
  {
    var vf;
    
    // TODO: Should we cache the same instance of required validator for all components?
    this.__defaultReqValOptions = {'label': this._getLabelText()};    
    vf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_REQUIRED);
    return vf ? vf.createValidator(this.__defaultReqValOptions) : null;
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
   * Returns an array of validator hints.
   * @param {Array} allValidators
   * @private
   */        
  _getHintsForAllValidators : function(allValidators)
  {
    var validator, validatorHints = [], vHint = "", i;
    if (this._IsRequired())
    {
      validator = this._hasRequiredInValidators(allValidators);
      if (!validator)
      {
        // get the hint for the default required validator and push into array if it's not already 
        // present in the validators array
        validator = this._getDefaultRequiredValidator();
        if (validator['getHint'] && typeof validator['getHint'] === "function")
        {
          vHint = validator['getHint']();
          if (vHint)
          {
            validatorHints.push(vHint);
          }
        }
      }
    }

    // loop through all remaining validators
    for (i = 0; i < allValidators.length; i++)
    {
      validator = allValidators[i], vHint = "";
      if (typeof validator === "object") 
      {
        if (validator['getHint'] && typeof validator['getHint'] === "function")
        {
          vHint = validator['getHint']();
          if (vHint)
          {
            validatorHints.push(vHint);
          }
        }
      }
    }

    return validatorHints;
  },
  
  /**
   * Returns content that will be used by messaging strategies.
   * 
   * @param {number} updateType of messaging content to update. Accepted values are defined by 
   * this.__MESSAGING_CONTENT_UPDATE_TYPE.
   * 
   * @private
   */
  _getMessagingContent : function (updateType)
  {
    var messagingContent = {}, converter = this._GetConverter(), converterHint, allValidators, 
            validatorHints = [];
    updateType = updateType || this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDITY_STATE;
    
    // Add validityState which includes messages, valid and severity
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDITY_STATE)
    {
      messagingContent['validityState'] = this._getValidityState();
    }
    
    // Add converter hints
    
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.CONVERTER_HINT)
    {
      if (converter)
      {
        if (typeof converter === "object") 
        {
          if (converter['getHint'] && typeof converter['getHint'] === "function")
          {
            converterHint = converter['getHint']();
            if (converterHint)
            {
              messagingContent['converterHint'] = converterHint;
            }
          }
        }
      }
    }
    
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDATOR_HINTS)
    {
      allValidators = this._GetAllValidators();
      validatorHints = this._getHintsForAllValidators(allValidators);
      
      if (validatorHints.length > 0)
      {
        messagingContent['validatorHint'] = validatorHints;
      }
    }
    
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.TITLE)
    {
      if (this.options['title'])
      {
        messagingContent['title'] = this.options['title'];
      }
    }
    
    return messagingContent;
  },
          
  /**
   * Checks if a required validator is set explicitly on the validators array and return it.
   * @param {Array} allValidators
   * @return {Object|null} required validator instance
   * @private
   */
  _hasRequiredInValidators : function (allValidators)
  {
    var validator = null, i, required = null;
    for (i = 0; i < allValidators.length; i++)
    {
      validator = allValidators[i];
      if (validator instanceof oj.RequiredValidator)
      {
        required = validator;
        break;
      }
    }

    return required;
  },
  
  /**
   * Parses the value using the converter set and returns the parsed value. If parsing fails the 
   * error is written into the element 
   * 
   * @param {string=} submittedValue to parse
   * @return {Object} parsed value 
   * @throws {Error} an Object with message
   * @private
   */
  _parseValue: function(submittedValue) 
  {
    var converter = this._GetConverter(), parsedValue = submittedValue;
    
    if (converter)
    {
      // TODO: We should support chaining converters but for now we use just the first converter 
      // to parse.

      if (typeof converter === "object") 
      {
        if (converter['parse'] && typeof converter['parse'] === "function")
        {
          // we are dealing with a converter instance
          parsedValue = converter['parse'](submittedValue);
        }
        else
        {
          if (oj.Logger.level > oj.Logger.LEVEL_WARN)
          {
            oj.Logger.info("converter does not support the parse method.");
          }
        }
      }
    }
    
    return parsedValue;
  },

 /**
  * Processes the validation exception and updates the element.
  * 
  * @param {Error} e instance of Error
  * @param {Event=} event the original event that triggered the validation. 
  * @private
  */
  _processValidationError : function (e, event)
  {
    var ojmessage, summary, detail, severity, newMsg = {};
    if (e instanceof oj.ConverterError || e instanceof oj.ValidatorError)
    {
      ojmessage = e.getMessage();
      oj.Assert.assertPrototype(ojmessage, oj.Message);

      severity = ojmessage['severity'];
      summary = ojmessage['summary'];
      detail = ojmessage['detail'];
    }
    else
    {
      // TODO: is this error message generic enough to use for both converter and validator errors?
      severity = oj.Message.SEVERITY_LEVEL['ERROR'];
      summary = oj.Translations.getTranslatedString("oj-message.error");
      detail = e['message'] || oj.Translations.getTranslatedString("oj-converter.detail");
      // ojmessage = new oj.Message(summary, detail, severity);
    }
    
    newMsg['summary'] = summary;
    newMsg['severity'] = severity;
    newMsg['detail'] = detail;
    this._updateMessages(newMsg, event);
  },

  /**
   * Called when a aria attribute needs to be set or removed. 
   * @param {string} option name of the option
   * @param {Object|string} value
   * @private
   */
  _refreshAria : function (option, value)
  {

    var ariaValue, contentNode = this._GetContentElement();
    switch (option)
    {
      case "required":
        this._RefreshAriaRequired(value);
        break;
    }
  },
          
  /**
   * Refreshes the component when a property changes, that affects the display of the component. 
   * E.g., displayValue changes when value, converter or validator changes. Likewise the 
   * invalidElementTracker.
   * 
   * @param {Object|undefined} value the changed value that needs to be updated on UI
   * @param {boolean=} fullRefresh false is the default; true means always refresh component 
   * display value
   * @private
   */        
  _refreshComponentDisplayValue : function (value, fullRefresh)
  {
    var modelValue = value || this.options['value'], lastModelValue, elementValueUpdated;
    
    lastModelValue = this._getLastModelValue();
    elementValueUpdated = fullRefresh || (modelValue !== lastModelValue);

    // If instance (value) changes, we clear the element value and reset errors. 
    // But if the modelValue is the same as the element's _lastModelValue, then the element value 
    // need not be updated nor errors cleared. This situation can happen because the ojComponent 
    // binding's update method can be called too often - e.g. when other bindings are called.

    // TODO: If converter changes we want to format the value using the new converter. This means we 
    // clear the element value and reset any errors on it

    // TODO: If validator changes we don't do anything to update the element. The new validator will 
    // get picked up the next time the value is validated. If we support runnning contextual 
    // validators then the element might need to react appropriately. E.g., if a required validator 
    // was added and the field was empty we would need to run the validator

    if (elementValueUpdated)
    {
      this._updateElementDisplayValue(modelValue);
    }
  },
  
  /**
   * Called anytime the label DOM changes requiring a reset of any dependent feature that caches the 
   * label.
   * @private
   */        
  _refreshLabelDependents : function ()
  {
    // for now reset all validators
    this.__defaultRegExpOptions = {};
    this.__defaultReqValOptions = {};
    this._ResetAllValidators();
  },

  /**
   * Toggles css selector on the widget. E.g., when required option changes, the oj-required 
   * selector needs to be toggled.
   * @param {string} option
   * @param {Object|string} value 
   * @private
   */        
  _refreshTheming : function (option, value)
  {
    if (this._OPTION_TO_CSS_MAPPING.hasOwnProperty(option)) 
    {
      // required is 'required' or 'optional'. Treat anything but 'required' as false.
      if (option !== "required") {
        this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[option], !!value);
      }
      else {
        this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[option], (value === "required"));
      }
    }
  },

  _updateElementDisplayValue : function (modelValue, event)
  {
    var displayValue;
    // cache the new model value on the element 
    this._setLastModelValue(modelValue);

    // Update element with the displayValue
    displayValue = modelValue;

    try
    {
      displayValue = this._formatValue(modelValue);
    }
    catch (e)
    {
      this._processValidationError(e, event);
    }

    this._setLastElementValue(displayValue);
    // Ugly: we need a special check for input [type=file] as a value cannot be set programmatically 
    // as it's considered a security violation.
    // if (element.type !== "file")
    this._SetDisplayValue(displayValue);

    // Update the invalidElementTracker
    //this._updateInvalidElementTracker(invalidElementTracker);
  },
  
  _updateInvalidElementTracker : function (invalidElementTracker)
  {
    // TBD
  },
          
          
  /**
   * Validates the value by running through the list of regsitered validators. The algorithm is as 
   * follows -
   * 1. check to see if we are currently valid, if not return
   * 2. run required check. 
   * 3. if value is not empty get all the validators and validate in sequence. 
   * 4. if all validators pass return.
   * 
   * Callers can rely on the 'valid' options property to determine the validity state of the 
   * component after calling this method
   * 
   * @param {Object|undefined} value to be validated
   * @param {boolean} requiredOnly true only runs required validation
   * @throws {Error} when validation fails.
   * @private
   */
  _validateValue : function (value, requiredOnly)
  {
    if (!this.__valid)
    {
      return;
    }
    
    var allValidators = this._GetAllValidators(), validator, i, reqValRun = false;

    // run required validation before anything else; 
    if (this._IsRequired())
    {
      validator = this._hasRequiredInValidators(allValidators);
      if (!validator)
      {
        validator = this._getDefaultRequiredValidator();
      }
      validator.validate(value);
      reqValRun = true;
    }

    // Only run other validators when required validation passes and only if all validators are 
    // requested to be run
    if (!requiredOnly)
    {
      for (i = 0; i < allValidators.length; i++)
      {
        validator = allValidators[i];
        if (typeof validator === "object") 
        {
          // validators : [required, numberRange]
          if (validator['validate'] && typeof validator['validate'] === "function")
          {
            if (validator instanceof oj.RequiredValidator && reqValRun)
            {
              // skip running required validation again
              continue;
            }
            validator['validate'](value);
          }
          else
          {
            if (oj.Logger.level > oj.Logger.LEVEL_WARN)
            {
              oj.Logger.info("validator does not support the validate method.");
            }
          }
        
        }
      }
    }
  }     
});

oj.Components.setDefaultOptions(
  {
    'editableValue': // properties for all editableValue components 
    {
      'messagingDisplayOptions': oj.Components.createDynamicPropertyGetter(
        function(context) 
        {
          // var inTable = context['containers'].indexOf('ojTable') >= 0;
          return  {
                    'messages': ['notewindow'], 
                    'converterHint': ['placeholder', 'notewindow'], 
                    'validatorHint': ['notewindow'], 
                    'title': ['notewindow']
                  };
        }
      )
    }
  }
);

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
  
  /**
   * Below JSON content is a helper to manage events for the input widgets
   * 1) If additional handling is required [i.e. blur] then one can provide a function, an Array, or string to handlers field
   * 
   * @expose
   * @private
   */
  _EVENT_LIST : [{type: "blur", handlers: "_HandleSetValue"}, 
                {type: "keydown", handlers: function(event) 
                                  {
                                    if(event.keyCode === $.ui.keyCode.ENTER)
                                    {
                                      this["_HandleSetValue"](event);
                                      event.preventDefault();
                                      event.stopPropagation();
                                    }
                                  }
                }, 
                {type: "paste", handlers: "_HandleSetValue"}], 
  
  options : 
  {
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
     * @memberof! oj.inputBase
     */
    readOnly: null
  },
  
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * @expose
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
  
  /**
   * Sub classes can override this function to modify the super's event list. Note one should perform $.extend(true, {}, this.super());
   * or something equivalent to not alter the base object which is tied to prototype [meaning object + array are by reference].
   * 
   * @protected
   * @memberof! oj.inputBase
   */
  _GetEventList : function __GetEventList() 
  {
    return this._EVENT_LIST;
  },
  
  /** 
   * @ignore
   * @expose
   * @protected
   */
  _HandleSetValue : function __HandleSetValue(event) 
  {
    this._SetValue(this._GetDisplayValue(), event);
  },
  
  /**
   * This helper function will generate ids using widget's uuid as unique identifier for 
   * wai-aria and other necessary ids 
   * 
   * @ignore
   * @expose
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
   * @expose
   * @protected
   * @return {boolean}
   */
  _IsRTL : function ()
  {
    return this._GetReadingDirection() === "rtl";
  },
  
  /**
   * Whether the this.element should be wrapped. Function so that additional conditions can be placed
   * 
   * @ignore
   * @expose
   * @protected
   * @return {boolean}
   */
  _DoWrapElement : function ()
  {
    return this._WIDGET_CLASS_NAMES;
  },

  _create : function __create()
  {
    
    if(this._DoWrapElement())
    {
      this._wrapElement();
    }
    
    // todo: where should this be called from
    this._SetRootAttributes();
    
    var ret = this._superApply(arguments);
    
    if(this._CLASS_NAMES) 
    {
      this.element.addClass(this._CLASS_NAMES);
    }
    
    this._processEventList();
    this._processAttrCheck();
    
    if(this.options["disabled"])
    {
      this.disable();
    }
    
    if (typeof this.options.readOnly !== "boolean") 
    {
      this.options.readOnly = !!this.element.prop( "readonly" );
    } 
    else 
    {
      this.element.prop( "readonly", this.options.readOnly );
    }

    return ret;
  },
  
  _wrapElement : function __wrapElement() 
  {
    $(this.element).wrap( $("<div>").addClass(this._WIDGET_CLASS_NAMES) );
    this._wrapper = this.element.parent();
  },
  
  _processEventList : function __processEventList()
  {
    var eventList = this._GetEventList();
    
    for (var i = 0, j = eventList.length; i < j; i++)
    {

      var handler = $.proxy((function ()
      {
        var handlers = eventList[i].handlers;
        
        return function (evt)
        {
          var handle = function(handler, scope, args) 
                        {
                          if($.isFunction(handler))
                          {
                            handler.apply(scope, args);
                          }
                          else if(typeof handler === "string")
                          {
                            scope[handler](args);
                          }
                        };
                        
          
          if(handlers) 
          {
            if($.isArray(handlers))
            {
              for(var m = 0, n = handlers.length; m < n; m++)
              {
                handle(handlers[m], this, arguments);
              }
            }
            else
            {
              handle(handlers, this, arguments);
            }
          }
        };
      })(), this);

      this.element.on(eventList[i].type, handler);
    };
    
  },
  
  _processAttrCheck : function __processAttrCheck()
  {
    //attributes to be reset when _destroy is invoked [note it will be reset in Stack order]
    this._resetAttributes = [];
    
    var attrCheck = this._ATTR_CHECK;
    
    for(var i=0, j=attrCheck.length; i < j; i++) 
    {
      var attr = attrCheck[i]["attr"],
          exists = this.element.is("[" + attr + "]"),
          setMandatoryExists = "setMandatory" in attrCheck[i],
          val = this.element.attr(attr);
      
      if(!exists) 
      {
        //if it doesn't exist just have to check whether one should set it to a mandatory value
        if(setMandatoryExists)
        {
          this._resetAttributes.push({"process": "removeAttr", "param": {"attr": attr}});
          this.element.attr(attr, attrCheck[i]["setMandatory"]);
        }
      }
      else
      {
        //means it exists
        
        var processSetExists = setMandatoryExists && val != attrCheck[i]["setMandatory"];
        
        //check if setMandatory exists and attr != the value
        if(processSetExists)
        {
          this._resetAttributes.push({"process": "setAttr", "param": {"attr": attr, "val": val}});
          this.element.attr(attr, attrCheck[i]["setMandatory"]);
        }
        
      }
      
    }
  },
  
  /**
   * @ignore
   * @override
   * @protected
   */
  _destroy : function __destroy()
  {
    var ret = this._superApply(arguments),
        eventList = this._GetEventList(),
        resetAttributes = this._resetAttributes;
    
    for(var i=0, j = eventList.length; i < j; i++)
    {
      this.element.off(eventList[i].type);
    }
    
    this.widget().removeClass(this._CLASS_NAMES);
    
    //need to go in Stack order
    for(var i=resetAttributes.length-1; i > -1; i--) 
    {
      var process = resetAttributes[i]["process"],
          param = resetAttributes[i]["param"] || {},
          attr = param["attr"],
          val = param["val"];
      
      switch(process)
      {
      case "setAttr" : this.element.attr(attr, val) ; break;
      case "removeAttr" : this.element.removeAttr(attr); break;
      }
    }
    
    if(this._DoWrapElement())
    {
      this.element.unwrap();
    }
    
    return ret;
  },
  
  /**
   * @ignore
   * @override
   * @protected
   */
  _setOption : function __setOption(key, value)
  {
    
    this._super(key, value);
    
    if (key === "disabled")
    {
      this.element.attr("disabled", value);
    }
    
    if (key === "readOnly")
    {
      this.element.prop("readonly", !!value);
    }
    
  },
  
  widget : function _widget() 
  {
    return this._DoWrapElement() ? this._wrapper : this.element;
  }

});
/*jslint browser: true*/
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
 * @expose
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
 * @expose
 */
oj.ComponentValidity.prototype.isValid = function () 
{
  return this._valid;
};

/**
 * Returns an Array or messages or an empty array.
 * @expose
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
 * @expose
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

/**
 * Component Messaging Utilities.
 * @param {Object} component instance
 * @private
 * @constructor
 */
oj.ComponentMessaging = function (component) 
{
  this.Init(component);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.ComponentMessaging, oj.Object, "oj.ComponentMessaging");

/**
 * Defqult display types supported for component messaging.
 * Future: support for inline 
 * @private
 */
oj.ComponentMessaging._DISPLAY_TYPE = {
  NONE: "none", 
  NOTEWINDOW: "notewindow", 
  PLACEHOLDER: "placeholder"};


/**
 * Initializes the strategy based on the display options that specify the messaging artifacts that 
 * will be displayed by this strategy.
 * 
 * @param {Object} component widget instance
 * @private
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
 * @param {Object} target element(s) to which messaging applies
 * @param {Object} content 
 * @private
 */
oj.ComponentMessaging.prototype.activate = function (target, content)
{
  var that = this;
  oj.Assert.assertObject(content);
  
  // if already active, reinitialize strategies based on new messagingDisplay preferences.
  if (!this._isActive())
  {
    $.each(this._strategies, function(i, strategy) 
    {
      strategy.activate(that._component, target, content);
    });
    this._activated = true;
  }
  else
  {
    this._reactivate(target, content);
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

oj.ComponentMessaging.prototype._createMessagingStrategy = function (type, options)
{
  var strategy = null;
  switch (type)
  {
    case oj.ComponentMessaging._DISPLAY_TYPE.NOTEWINDOW:
      strategy = new oj.NoteWindowMessagingStrategy(options);
      break;
    case oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER:
      strategy = new oj.PlaceholderMessagingStrategy(options);
      break;
    case oj.ComponentMessaging._DISPLAY_TYPE.NONE: 
      strategy = new oj.MessagingStrategy(options);
      break;
  }
  
  return strategy;
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
 * @param {Object} target element(s) to which messaging applies
 * @param {Object} content 
 * @private
 */
oj.ComponentMessaging.prototype._reactivate = function (target, content)
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
        strategy.activate(cm._component, target, content);
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
 * @param {Object} target the element to which the messaging applies.
 * @param {Object} content an Object literal consisting of content that the messaging strategy will 
 * use to initialize. <br/>
 * Accepted keys are 'validityState', 'converterHint', 'validatorHint', 'title'.<br/>
 * The values are Object (instance of oj.ComponentValidity), string, Array of strings and string 
 * respectively.
 * @private
 */
oj.MessagingStrategy.prototype.activate = function (component, target, content)
{
  this._target = target;
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
  var target = this.GetTarget(), maxSeverity = this.GetMaxSeverity(), removeClasses = [], addClasses=[], 
      invalid = false, jqRoot = this.GetComponent().widget();
  
  if (!target)
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
  target.attr({"aria-invalid": invalid}); // aria attrs added to the target element
  
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
  this.GetTarget().removeAttr("aria-invalid")
                  .removeAttr("aria-describedby");
  this._target = null;
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
 * Gets the target element for which the messaging is applied.
 * @return {Object} the jquery element of the form element.
 * @private
 */
oj.MessagingStrategy.prototype.GetTarget = function ()
{
  return this._target;
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
 * @param {Object} target element for which the messaging applies. 
 * @param {Object} content the messaging content
 * @private
 * 
 */
oj.PlaceholderMessagingStrategy.prototype.activate = function (component, target, content)
{
  oj.PlaceholderMessagingStrategy.superclass.activate.call(this, component, target, content);
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
  var target = this.GetTarget(), jqRoot = this.GetComponent().widget(), content, hints;
  
  if (this.ShowPlaceholderContent() && target)
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
 * A messaging strategy that uses a jqueryUI tooltip to show and hide messaging content.
 * 
 * @param {Array} displayOptions an array of messaging artifacts displayed in the notewindow.
 * @constructor
 * @extends {oj.MessagingStrategy}
 * @private
 */
oj.NoteWindowMessagingStrategy = function (displayOptions)
{
  this.Init(displayOptions);
};

// Subclass from oj.MessagingStrategy 
oj.Object.createSubclass(oj.NoteWindowMessagingStrategy, oj.MessagingStrategy, "oj.NoteWindowMessagingStrategy");

/**
 * Initializes the tooltip.
 *  
 * @param {Array} displayOptions an array of messaging artifacts displayed in the notewindow.
 * @private
 */
oj.NoteWindowMessagingStrategy.prototype.Init = function (displayOptions) 
{
  oj.NoteWindowMessagingStrategy.superclass.Init.call(this, displayOptions);
};

/**
 * Sets up a tooltip for the component instance using the messaging content provided. 
 * 
 * @param {Object} component widget instance
 * @param {Object} target element for which the messaging applies. 
 * @param {Object} content the messaging content
 * @private
 * 
 */
oj.NoteWindowMessagingStrategy.prototype.activate = function (component, target, content)
{
  oj.NoteWindowMessagingStrategy.superclass.activate.call(this, component, target, content);
  this._initTooltip();
  
  // Since activate can be called anytime widget is initialized we want to make sure and update its 
  // state
  this.update(content);
};


/**
 * Updates the tooltip content associated to the component instance using the updated messaging 
 * content provided. 
 * 
 * @param {Object} content the messaging content
 * @private
 * 
 */
oj.NoteWindowMessagingStrategy.prototype.update = function (content)
{
  oj.NoteWindowMessagingStrategy.superclass.update.call(this, content);
};

/**
 * Cleans up messages on the component and destroys any widgets it created.
 * 
 * @param {Object} content the messaging content
 * @private
 */
oj.NoteWindowMessagingStrategy.prototype.deactivate = function (content)
{
  //var jRoot = this.GetComponent().widget();
  this.GetTarget().off("mouseleave", this._handleMouseLeave)
            .off("focusin", this._showTooltip)
            .off("focusout", this._hideTooltip);
  this._destroyTooltip();
  oj.NoteWindowMessagingStrategy.superclass.deactivate.call(this, content);
};

oj.NoteWindowMessagingStrategy.prototype.reinitialize = function (newDisplayOptions)
{
  oj.NoteWindowMessagingStrategy.superclass.reinitialize.call(this, newDisplayOptions);
};

oj.NoteWindowMessagingStrategy.prototype._showTooltip = function (event)
{
  // window.console.log(event.type + " called: tooltip opened");
  $(this).tooltip("enable").tooltip("open");
  
};

oj.NoteWindowMessagingStrategy.prototype._hideTooltip = function (event)
{
  // window.console.log(event.type + " called; tooltip closed");
  $(this).tooltip("disable").tooltip('close');
};

oj.NoteWindowMessagingStrategy.prototype._handleMouseLeave = function (e)
{
  // needed to turn off default open of tooltip for mouseleave. 
  // window.console.log(event.type + " called: turning off default open of tooltip");
  e.preventDefault();
  e.stopImmediatePropagation(); 
  return false;
};

oj.NoteWindowMessagingStrategy.prototype._handleValidityChange = function (e, data)
{
  var valid = true, messages;
  // needed to turn off default open of tooltip for mouseleave. 
  if (data && data['option'] === "messages")
  {
    messages = data && data['messages'];
    valid = oj.Message.isValid(messages);
    if (!valid)
    {
      window.console.log("onoptionchange called:  tooltip reopened");
      $(this).tooltip("close").tooltip("enable").tooltip("open");
    }
  }
  if (valid) 
  {
    window.console.log("onoptionchange called:  tooltip closed");
    $(this).tooltip('close');
  }
};

oj.NoteWindowMessagingStrategy.prototype._initTooltip = function ()
{
  var self = this; 
  // TODO: Message tooltip setup needs to be delegated to a MessagingService?
  // Setup default tooltip options on this, as we are a validating element and will likely 
  // display hints, errors
  if (!this._isTooltipInitialized())
  {
    var jqTarget = this.GetTarget(), jqRoot = this.GetComponent().widget();
    this._tooltip = jqTarget.tooltip({
                    position: {
                      'my': 'left+14 bottom', 
                      'at': 'right top', 
                      'of': jqTarget, 
                      //jqTarget.find('input[type=radio]:first'), // the element the tooltip will be positioned relative to
                      'using': function(position, feedback) {
                          $(this).css(position);
                          $("<div>")
                          .addClass("arrow")
                          .addClass(feedback['vertical'])
                          .addClass(feedback['horizontal'])
                          .appendTo(this);
                      }
                    },
                    'open': function (event, ui)
                    {
                      //window.console.log("tooltip opened: " + ui.tooltip.attr("id"));
                    },
                    'close' : function (event, ui)
                    {
                      //window.console.log("tooltip closed: ");
                    },
                    'content' : function ()
                    {
                      // called every time tooltip is enabled or open
                      //window.console.log("tooltip content fetch: ");
                      return self._buildNoteWindowHtml();
                    },
                    'items' : jqTarget
                  }).off("mouseover mouseout")
                    .on("mouseleave", {target: $(this)}, self._handleMouseLeave)
                    .on("focusout", {target: $(this)}, self._hideTooltip)
                    .on("focusin", {target: $(this)}, self._showTooltip);
                    
            /*
            for checkboxes and radio
             
                  }).on("mouseover", {}, self._showTooltip)
                    .on("mouseout", {}, self._hideTooltip)
                    .on("mouseleave", {}, self._handleMouseLeave)
                    .on("focusin", {}, self._showTooltip)
                    .on("focusout", {}, self._hideTooltip)
                    .on("ojoptionchange", {}, self._handleValidityChange);
            */  
  }
};

oj.NoteWindowMessagingStrategy.prototype._destroyTooltip = function ()
{
  if (this._isTooltipInitialized())
  {
    if (this._tooltip)
    {
      this._tooltip.tooltip("destroy");
    }
  }
  this._tooltip = null;
};

/**
 * Returns the content to show inside notewindow.
 * @private
 * @return {String|string} content
 */
oj.NoteWindowMessagingStrategy.prototype._buildNoteWindowHtml = function ()
{
  var nwHtml = "", component = this.GetComponent(), jDocument = component.document, 
          document = jDocument[0], nwContent = [], addSeparator = false, that = this; 
  
  if (this.ShowMessages()) 
  {
    nwContent.push(this._buildMessagesHtml());
  }
  
  if (this.ShowConverterHint() || this.ShowValidatorHint())
  {
    nwContent.push(this._buildHintsHtml(document));
  }
  if (this.ShowTitle())
  {
    nwContent.push(this._buildTitleHtml(document));
  }
  
  // TODO: Add support for shortDesc, instrcution text etc.
  $.each(nwContent, function(i, content) 
    {
      if (content)
      {
        if (addSeparator)
        {
          nwHtml = nwHtml.concat(that._getSeparatorHtml(document));
        }
        else
        {
          addSeparator = true; 
        }
        
        nwHtml = nwHtml.concat(content);
      }
    });
    
  return nwHtml;
};

/**
 * Returns the content to show inside tooltip.
 * @private
 * @return {string} content
 */
oj.NoteWindowMessagingStrategy.prototype._buildMessagesHtml = function ()
{
  var messages, content = "", i, j, severity, severityStr,severityLevel,
          message, maxSeverity = this.GetMaxSeverity(), summary, detail, messageObj, 
          messagesByTypes={}, messagesByType = [];

  if (this.HasMessages())
  {
    messages = this.GetMessages();
    
    // Step1: build an indexed array of messages by severity level.
    for (i = 0; i < messages.length; i++)
    {
      message = messages[i];
      
      if (!(message instanceof oj.Message))
      {
        messageObj = new oj.Message(message['summary'], message['detail'], message['severity']);
      }
      else
      {
        messageObj = message;
      }
      
      severityLevel = oj.Message.getSeverityLevel(messageObj['severity']);
      if (!messagesByTypes[severityLevel])
      {
        messagesByTypes[severityLevel] = [];
      }
      
      messagesByTypes[severityLevel].push(messageObj);
    }
    
    // Step 2: starting with maxSeverity level build messages with decreasing severity
    for (i = maxSeverity; i >= oj.Message.SEVERITY_LEVEL['CONFIRMATION']; i--)
    {
      messagesByType = messagesByTypes[i] || [];
      
      for (j = 0; j < messagesByType.length; j++)
      {
        message = messagesByType[j];
        oj.Assert.assertPrototype(message, oj.Message);

        severityLevel = oj.Message.getSeverityLevel(message['severity']);
        severityStr = this._getSeverityTranslatedString(severityLevel);
        summary = message['summary'] || severityStr;
        // if detail is empty we don't care to duplicate summary
        detail = message['detail'] || "";
        
        // build message dom
        // (x) <Summary Text>
        // <Detail Text>
        
        content = content.concat("<div class='oj-message'>")
                         .concat("<span class='" + this._getSeverityIconSelector(severityLevel) + 
                                      "' title='" + severityStr + "' role='img'></span>")
                         .concat("<span class='oj-message-content'>")
                         .concat("<div class='oj-message-summary'>" + summary + "</div>");
        if (detail)
        {
          content = content.concat("<div class='oj-message-detail'>" + detail + "</div>");
        }
        
        content = content.concat("</div>"); // end of oj-message
      }
    }
  }  
  return content;
};

/**
 * @param {Document} document
 * @return {string} html content for all hints.
 * @private
 */
oj.NoteWindowMessagingStrategy.prototype._buildHintsHtml = function (document)
{
  var hints = [], jHintsDom, i;
  if (this.ShowValidatorHint())
  {
    hints = hints.concat(this.GetValidatorHints());
  }
  if (this.ShowConverterHint())
  {
    hints = hints.concat(this.GetConverterHint());
  }
  
  if (hints && hints.length > 0)
  {
    jHintsDom = $(document.createElement("div"));
    jHintsDom.addClass("oj-form-control-hint");
    // AdfDomUtils.addCSSClassName(hDom, AdfDhtmlEditableValuePeer._NOTE_WINDOW_HINT_TEXT_STYLE_CLASS);
    
    for(i = 0; i < hints.length;i++) 
    {
      jHintsDom.append(this._getHintDom(document, hints[i]));
    }
  }
  
  return jHintsDom ? jHintsDom.get(0).outerHTML : "";
};

oj.NoteWindowMessagingStrategy.prototype._buildTitleHtml = function (document)
{
  var title = this.GetTitle(), jTitleDom;
  if (title)
  {
    jTitleDom = $(document.createElement("div"));
    jTitleDom.addClass("oj-form-control-title");
    jTitleDom.append(this._getHintDom(document, title));
  }
  
  return jTitleDom ? jTitleDom.get(0).outerHTML : "";
};

oj.NoteWindowMessagingStrategy.prototype._getHintDom = function(document, hintText) 
{
  var jHintDom = null;
  // 
  if (oj.DomUtils.isHTMLContent(hintText)) 
  {
    jHintDom = oj.DomUtils.cleanHtml(hintText.substring(6, hintText.length - 7));
  }
  else 
  {
    jHintDom = $(document.createElement("div"));
    jHintDom.text(hintText);
    jHintDom = jHintDom.get(0);
  }
    
  return jHintDom;
}; 

oj.NoteWindowMessagingStrategy.prototype._getSeparatorHtml = function (document)
{
  var jSeparatorDom; 
  jSeparatorDom = $(document.createElement("hr"));
  
  return jSeparatorDom ? jSeparatorDom.get(0).outerHTML : "";
};


oj.NoteWindowMessagingStrategy.prototype._getSeverityTranslatedString = function (severity)
{
  var sevTypeStr;
  // get the translated string for the severity
  switch (severity)
  {
    case oj.Message.SEVERITY_LEVEL['FATAL']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.fatal');
      break;
    case oj.Message.SEVERITY_LEVEL['ERROR']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.error');
      break;
    case oj.Message.SEVERITY_LEVEL['WARNING']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.warning');
      break;
    case oj.Message.SEVERITY_LEVEL['INFO']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.info');
      break;
    case oj.Message.SEVERITY_LEVEL['CONFIRMATION']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.confirmation');
      break;
  }
  
  return sevTypeStr;
  
};

oj.NoteWindowMessagingStrategy.prototype._getSeverityIconSelector = function (severity)
{
  var sevIconStr;
  // get the icon selector for the severity
  switch (severity)
  {
    case oj.Message.SEVERITY_LEVEL['FATAL']:
      sevIconStr = 'oj-message-error-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['ERROR']:
      sevIconStr = 'oj-message-error-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['WARNING']:
      sevIconStr = 'oj-message-warning-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['INFO']:
      sevIconStr = 'oj-message-info-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['CONFIRMATION']:
      sevIconStr = 'oj-message-confirmation-icon';
      break;
  }
  
  return "oj-widget-icon" + " " + sevIconStr;
};

oj.NoteWindowMessagingStrategy.prototype._isTooltipInitialized = function ()
{
  var target = this.GetTarget();
  return (target) ? target.is(":ui-tooltip") : false;
};


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
    
    var newWidth = this._detectExpansion.offsetWidth;
    var newHeight = this._detectExpansion.offsetHeight;
    if (this._oldWidth != newWidth || this._oldHeight != newHeight)
    {
      this._adjust(newWidth, newHeight);
      this._listeners.fire(newWidth, newHeight);
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
});
