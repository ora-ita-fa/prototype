define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojvalidation'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $, compCore, validation)
{

/*!
 * jQuery UI Accordion 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 */
/**
 * @class 
 * @name oj.ojAccordion
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="collapsibleOverview-section">
 *   JET Accordion Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#collapsibleOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant collapsible with mouse and keyboard interactions for navigation.
 * 
 * <p>A JET Accordion can be created from any valid markup as long as the root element has one or more child elements and 
 * each child element must have two children: the first element for the header and the second element for the content.
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div id="accordion">
 *   &lt;div id="c1">
 *     &lt;h3>
 *       &lt;img src="images/default.png"/>
 *       &lt;span>Header 1&lt;/span>
 *     &lt;/h3>
 *     &lt;p>Content 1.&lt;/p>
 *   &lt;/div>
 *   &lt;div id="c2" class="oj-disabled">
 *     &lt;h3>Disabled Header&lt;/h3>
 *     &lt;p>I'm disabled.&lt;/p>
 *   &lt;/div>
 *   &lt;div id="c3" data-bind="ojComponent: {component: 'ojCollapsible', collapsed:false}">
 *     &lt;h3>Header 3&lt;/h3>
 *     &lt;p>Content 3&lt;/p>
 *   &lt;/div>
 * &lt;/div>
 * </code></pre>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>
 * <h5>When the focus is on a collapsible header</h5>
 * </p>
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
 *       <td><kbd>Tab</kbd></td>
 *       <td> Navigate to next collapsible header and if none then the next component on page.</tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td> Navigate to previous collapsible header and if none then the previous component on page.</tr>
 *     <tr>
 *       <td><kbd>UpArrow or LeftArrow</kbd> (<kbd>RightArrow</kbd> in RTL)</td>
 *       <td> Move focus to the previous collapsible header with wrap around.</tr>
 *     <tr>
 *       <td><kbd>DownArrow or RightArrow</kbd> (<kbd>LeftArrow</kbd> in RTL)</td>
 *       <td> Move focus to the next collapsible header with wrap around.</tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td> Move focus to the first collapsible header.</tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td> Move focus to the last collapsible header.</tr>
 *   </tbody>
 *  </table>
 *
 * <p>Disabled items can receive keyboard focus, but do not allow any other interaction.
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the collapsible must be <code class="prettyprint">refresh()</code>ed.
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-collapsible</code> pseudo-selector can be used in jQuery expressions to select JET Accordion.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-collapsible" ) // selects all JET Accordion on the page
 * $myEventTarget.closest( ":oj-collapsible" ) // selects the closest ancestor that is a JET Accordion
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <li>JET Accordion supports clickable option: specifies where to click to toggle disclosure. Default is "disclosureIcon", however if a collapsible is inside an Accordion, default is "header"</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "collapsible".  
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates a JET Accordion. 
 * @example <caption>Initialize the collapsible with no options specified:</caption>
 * $( ".selector" ).ojAccordion();
 * 
 * @example <caption>Initialize the collapsible with some options and callbacks specified:</caption>
 * $( ".selector" ).ojAccordion( { "disabled": true, "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize the collapsible via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="collapsible" data-bind="ojComponent: { component: 'ojAccordion', 
 *                                                    expansion: "single"}">
 */
(function ()
{
  oj.__registerWidget("oj.ojAccordion", $['oj']['baseComponent'], 
  {
    version : "1.0.0", 
    widgetEventPrefix : "oj", 
    options : 
    {
      /** 
       * Allow single or multiple collapsible(s) to be open at the same time. Valid values: "single" or "multiple".
       *
       * @expose 
       * @memberof! oj.ojAccordion
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"single"</code>
       *
       * @example <caption>Initialize the accordion with the <code class="prettyprint">expansion</code> option specified:</caption>
       * $( ".selector" ).ojAccordion( { "expansion": "multiple" } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">expansion</code> option, after initialization:</caption>
       * // getter
       * var expansion = $( ".selector" ).ojAccordion( "option", "expansion" );
       * 
       * // setter
       * $( ".selector" ).ojAccordion( "option", "expansion", "multiple" );
       */
      expansion : "single"
    },

    _create : function ()
    {
      this._super();
      this.element
        .addClass("oj-accordion oj-widget oj-helper-reset")
        //aria
        .attr("role", "group");

      this.refresh();
    },

  /* 
   * Component developers: This API and functionality is subject to change pending architectural review!
   * See the baseComponent method for preliminary API doc.
   */
  _showContextMenu: function(menu, event)
  {
    // TODO: is this the right logic for this component?
    menu.show(event, {"launcher": this.element.find(".oj-collapsible-header-icon").first(), "focus": "menu"});
  },
    
    _destroy : function ()
    {
      // clean up main element
      this.element
        .removeClass("oj-accordion oj-widget oj-helper-reset")
        .removeAttr("role");

      this.element.children()
        .removeClass("oj-accordion-collapsible");

      //remove collapsibles created by accordion
      this.element.children(".oj-accordion-created")
        .removeClass("oj-accordion-created")
        .ojCollapsible("destroy");
    },

    _setOption : function (key, value)
    {
      if (key === "expansion")
      {
        // Transition expansion from multiple to single.
        // Keep the first expanded one expanded and collapse the rest.
        if (value == "single" && this.options.expansion == "multiple")
        {
          this.colllapsibles
//TODO:
//            .filter(".oj-collapsible-expanded")
            .not(".oj-collapsible-collapsed")
            .first().siblings(".oj-collapsible")
            .trigger("ojcollapse");
        }
      }

      this._super(key, value);

      if (key === "disabled")
      {
        value = !!value;

        if (value) {
          this.colllapsibles.each(function ()
          {
            //TODO: Don't override if collapsible has disabled set
            if ($(this).ojCollapsible("option", key) == null)
              $(this).ojCollapsible("option", key, value);
          });
        }
        this.element.toggleClass("oj-disabled", value);
      }
    },

    /**
     * Refreshes the visual state of the accordion. JET components require a <code class="prettyprint">refresh()</code> or re-init after the DOM is 
     * programmatically changed underneath the component.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojAccordion
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojAccordion( "refresh" );
     */
    refresh : function ()
    {
      this._super();
      this._makeCollapsible();
      this._setOption("disabled", this.options.disabled);

      this._setupEvents();
    },

    _makeCollapsible : function ()
    {
      this.element.children(":oj-collapsible")
        .each(function ()
        {
          $(this).ojCollapsible("option", "clickable", "header");
        });

      this.colllapsibles = 
        this.element.children()
          .not(":oj-ojCollapsible")
            .ojCollapsible(
            {
              clickable : "header"
            })
            .addClass("oj-accordion-created")
          .end()
          .addClass("oj-accordion-collapsible");
    },

    _setupEvents : function ()
    {
      var events = 
      {
        "keydown" : this._keydown, 
        "ojbeforeexpand" : this._beforeExpandHandler, 
        "ojexpand" : this._expandHandler
      };

      this._off(this.colllapsibles);
      this._on(this.colllapsibles, events);
    },

    _keydown : function (event)
    {
      if (event.altKey || event.ctrlKey)
        return;

      //ignore event if target is not a header
//TODO:
//      if ($(event.target).parentsUntil(event.currentTarget)[0] !== 
//          $(event.currentTarget).children()[0])
      if (! ($(event.target).hasClass("oj-collapsible-header")))
        return;

      //TODO: add "showDisclsoure"?
      var keyCode = $.ui.keyCode, 
          enabledCollapsibles = this.colllapsibles.not(".oj-disabled"), 
          length = enabledCollapsibles.length, 
          target = $(event.target).closest(".oj-collapsible"), 
          currentIndex = enabledCollapsibles.index(target), 
          toFocus = false;

      if (currentIndex >= 0)
      {
        switch (event.keyCode)
        {
          case keyCode.RIGHT:
          case keyCode.DOWN:
            toFocus = enabledCollapsibles[(currentIndex + 1) % length];
            break;
          case keyCode.LEFT:
          case keyCode.UP:
            toFocus = enabledCollapsibles[(currentIndex - 1 + length) % length];
            break;
          case keyCode.HOME:
            toFocus = enabledCollapsibles[0];
            break;
          case keyCode.END:
            toFocus = enabledCollapsibles[length - 1];
            break;
        }
      }

      if (toFocus)
      {
        if (target)
        {
          $(target).trigger("ojfocusout");
        }
        $(toFocus).trigger("ojfocus");

        event.preventDefault();
      }
    },

/*
  _activate: function( index, value )
  {
    var collapsible = this.colllapsibles[ index ];

    if (collapsible)
    {
      $(collapsible).trigger(value ? "ojexpand" : "ojcollapse");
    }
  },
*/

    /* 
     * For expansion="single"
     *   returns a list of expanded collapsible widgets that are sibling 
     *   of the current event target
     * For expansion="multiple" 
     *   returns an empty set.
     */
    _findTargetSiblings : function (event)
    {
      if (this.options.expansion === "single")
      {
        var closestCollapsible = $(event.target).closest(".oj-collapsible");

        if (closestCollapsible.parent().is(":oj-ojAccordion"))
          return closestCollapsible
            .siblings(".oj-collapsible:not(.oj-collapsible-collapsed)")
            .map(function()
            {
              return $(this).data("oj-ojCollapsible");
            });
      }
      return $();
    },

    /* 
     * Trigger "beforecollapse" on all expanded siblings in
     * the before expand handler
     */
    _beforeExpandHandler : function (event)
    {
      var result;
      this._findTargetSiblings(event).each(
        function()
        {
          result = this._trigger("beforecollapse", event);
          return result;
        }
      );
      return result;
    },

    /* 
     * Collapse all expanded siblings and don't allow cancel
     */
    _expandHandler : function (event)
    {
      var siblings = this._findTargetSiblings(event);
      siblings.each(function ()
      {
        this.collapse(false, event);
      });
    }

  });
}
());
/*!
 * JET Radio This component is private. @VERSION
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
 * The _ojRadio component enhances a browser input element into one that is 
 * of type=radio. This is a private component used by ojRadioset.
 * 
 * <h3>Events:</h3>
 * <ul>
 *   <li>clicked/checked?<p>
 *   Triggered if the checkbox is clicked; or if the checkbox was checked programatically
 *   with the checked option.
 *   </li>
 * </ul>
 * 
 * @class
 * @constructor
 * @name oj._ojRadioCheckbox
 * @augments oj.baseComponent TODO: Should I extend this? 
 * Pros: it gives me oj-disabled/oj-enabled. (easy to add myself)
 * Cons: It gives me tooltip stuff that I don't want. I want that on the div or on the first checkbox only.
 * Pro/Con?: it rewrites required for me if it is on the dom node, but then it makes it required??? Should I rewrite required or don't care?
 */
oj.__registerWidget("oj._ojRadioCheckbox", $['oj']['baseComponent'],
{
  version : "1.0.0",  
  defaultElement : "<input>", 
  widgetEventPrefix : "oj", 
  options : 
  {	 
    /** 
     * First we look for the disabled option to be explicitly set. If not, then
     * we look if disabled is on the dom. If null, disabled defaults to false.
     * @expose 
     * @type {?boolean}
     * @default <code class="prettyprint">false</code>
     * @public
     * @instance
     * @memberof! oj._ojRadioCheckbox
     */
    disabled: null,
    /** 
     * First we look for the checked option to be explicitly set. If not, then
     * we look if checked is on the dom. If null, checked defaults to false.
     * @expose 
     * @public
     * @instance
     * @memberof! oj._ojRadioCheckbox */
    checked : null,
    /** 
     * First we look for the disabled option to be explicitly set. If not, then
     * we look if disabled is on the dom. If null, disabled defaults to false.
     * @expose 
     * @type {?boolean}
     * @default <code class="prettyprint">false</code>
     * @public
     * @instance
     * @memberof! oj._ojRadioCheckbox
     */
     type: null	
  },
  /**** start Public APIs ****/
  /**
   * 
   * <p>This method does not accept any arguments.
   * 
   * @public
   * @expose
   * @memberof! oj.RadioCheckbox 
   * @return {jQuery} the label(s) for the checkbox/radio input
  */
  label : function ()
  {
    if (this.$label === undefined)
    {
      this.$label = this._getLabelsForElement();
    }
    return this.$label;
  },  
  /*
   * @expose 
   * @memberof! oj._ojRadioCheckbox
   * @instance
   * @override
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" )._ojRadioCheckbox( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    
    var isDisabled = this.element.is( ":disabled" );

    if ( isDisabled !== this.options.disabled ) 
    {
      this._setOption( "disabled", isDisabled );
    }
    this._setup();
  },    
  /**
   * Returns a jQuery object containing the element visually representing the checkbox. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj._ojRadioCheckbox
   * @instance
   * @return {jQuery} the checkbox or radio
  */
  widget : function ()
  {
      return this.uiRadioCheckbox;
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
       
  /**
   * @override
   * @private
   */
  _create : function ()
  {
    this._super();
    
    // CHECKED:
    // if options.checked is not set, or not valid, get it from the element
    // if options.checked is set to a valid value (boolean), set it on the 
    // element to keep the two in sync. 
    if ( typeof this.options.checked !== "boolean" ) 
    {
      // !! ensures it is a boolean
      this.options.checked = !!this.element.prop( "checked" );
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
	
	// TYPE:
	// Get's the type which will be either radio or checkbox
    this.options.type = this.element.prop( "type" );
	
    this._drawOnCreate();
    
    this._on(this._events);
  },
  /** Called every time ojCheckboxset or ojRadioSet is called without attributes. It's essentially
   * a hard-reset.
   * @override
   * @private
   */
  _init : function ()
  {
    this._super();
    this._setup();
  },
  _setup : function() 
  {

    // disable checkbox or radio dom if component disabled option is true
    if (this.options.disabled)
    {
      // calls _setOption disable is true
      this.disable();
    }
    else
    { 
      this.enable();
    }

    // set checked checkbox or radio dom if component checked option is true
    if (this.options.checked)
    {
      this._setOption("checked", true);
    }
    else
    {
      this._setOption("checked", false);
    }
  },
  _events : 
  {

  },
  /**
   * set up styles on create
   * @private
   */
  _drawOnCreate : function ()
  {
    var type = this.options.type;
	if (type == "checkbox") {
      this.uiRadioCheckbox = this.element.addClass("oj-checkbox oj-widget");
      this.$label = this._getLabelsForElement();
      this.$label.addClass("oj-checkbox-label");
	}
	else if (type == "radio") {
      this.uiRadioCheckbox = this.element.addClass("oj-radio oj-widget");
      this.$label = this._getLabelsForElement();
      this.$label.addClass("oj-radio-label");
	}	
    // oj-hover/oj-focus/oj-active should be added/removed in code as needed, 
    // however these should only be added when the item is enabled. 
    // When the item is disabled these classes should not be added.
    var self = this;
    this._hoverable( this.element );
    this._focusable( this.element );
    this._activeable( this.element );
    // loop through each label
    $.each(self.$label, function ()
    {
      self._hoverable(this);
      self._focusable(this);
      self._activeable(this);
    });
   },
  /**
   * @override
   * @private
   */
  _setOption : function (key, value)
  {

    this._super(key, value);

    if (key === "disabled")
    {
      value = !!value;
      if (value)
      {
        // when a dom element supports disabled, use that, and not aria-disabled.
        // having both is an error.
        this.element.prop("disabled", true).removeAttr( "aria-disabled")
        .removeClass("oj-enabled").addClass("oj-disabled");

        this.$label.removeClass("oj-enabled")
        .addClass("oj-disabled");
      }
      else 
      {
        // when a dom element supports disabled, use that, and not aria-disabled.
        // having both is an error.
        this.element.prop("disabled", false)
        .removeAttr( "aria-disabled").removeClass("oj-disabled")
        .addClass("oj-enabled");
        this.$label.addClass("oj-enabled")
        .removeClass("oj-disabled");
      }
    }
 
    if (key === "checked")
    {
      if (value)
      {
        this.element.prop("checked", true);
      }
      else 
      {
        this.element.prop("checked", false);
      }
      this.element.toggleClass("oj-checked", value);
    }
  }, 
  /**
   * Returns the list of labels for the element. Most likely this will be 
   * one label, not multiple labels.
   * We do not guarantee that the returned list is live
   * We do not guarantee that the returned list is in document order
   * We first check if we are nested in a label, and then we check a jquery 
   * selector query on <label>s with a 'for' id equal to our id.
   * NOTE: The .labels DOM property does not work on most browsers, so we don't use it.
   * e.g,
   * <pre>
   * <input id="opt3" type="checkbox" name="rb" value="opt3">
   * <label class="oj-choice-label" for="opt3">Checkbox Option 3</label>
   * </pre>
   * @private
   */
  _getLabelsForElement: function() 
  {
    // .closest("label") - For each element in the set, get the first element   
    // that matches the selector by testing the element itself and traversing up 
    // through its ancestors in the DOM tree.   
    var labelClosestParent = this.element.closest("label");
    var id = this.element.prop("id");
    var labelForQuery = "label[for='" + id + "']";
    // combine these two query results to return the label we are nested in
    //  and/or the label with the for attribute pointing to the checkbox's id.
    return labelClosestParent.add($(labelForQuery)); 
  },
  /**
   * TODO Do I need to save off the html attributes and restore later? like disabled? name (if they change it with the option?) YES
   * @override
   * @private
   */
  _destroy : function ()
  { 
    this._super();
    // base class removes oj-disabled
	var type = this.options.type;
	if (type == "checkbox") {
      this.element.removeClass("oj-checkbox oj-checked oj-disabled oj-enabled oj-widget");
	  // label isn't a widget, so remove oj-disabled
	  this.$label.removeClass("oj-enabled oj-disabled oj-checkbox-label");
	}
	else if (type == "radio") {
	  this.element.removeClass("oj-radio oj-checked oj-disabled oj-enabled oj-widget");
      this.$label.removeClass("oj-enabled oj-disabled oj-radio-label");
	}
  }
  
  /**** end internal widget functions ****/ 
 
});
// -------------------------------------------------------------------------------------------------------
// This file contains both the Button and Buttonset components,
// so that they can share the same wrapper function / closure containing shared "private static members".
// -------------------------------------------------------------------------------------------------------

// jim retrieved from https://raw.github.com/jquery/jquery-ui/1-10-stable/ui/jquery.ui.button.js on 6/29/2013, and then modified

/*!
 * TODO: how should the copyright (and rest of header) change in our fork?  Is the above Provenance comment OK?
 * Should we use Google's at-licence or at-preserve annotations?  At-copyright?  At-version (in addition to or instead of version field in components)?  
 * Put answers in forking wiki, and update menu.js and other existing componenents too.
 * 
 * jQuery UI Button @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 *
 * Depends:
 *    jquery.ui.core.js
 *    jquery.ui.widget.js
 */
(function()
{

// "private static members" shared by all buttons and buttonsets
// TODO: per architect conversation, these private static fields and methods (but not constants) should be prefixed with _ for our own convenience, 
// even though the closure enforces the private status.
var lastActive, 
    startXPos, startYPos, clickDragged = false, // these 3 together address a drag issue with radios/checkboxes
    
    // "static" namespace for events associated with all buttons on page/form/etc., not just one.  E.g. see form reset handler at top of _create().
    // this.eventNamespace, used for individual button instances, is .ojButtonX, whereX = 0, 1, 2, etc.
    BUTTON_EVENT_NAMESPACE = ".ojButton",
    
    BASE_CLASSES = "oj-button oj-widget oj-enabled", // oj-enabled is a state class, but convenient to include in this var instead
    STATE_CLASSES = "oj-hover oj-active oj-checked", // TBD: oj-hover doesn't really need to be listed here since this var is only used to remove classes from rootElement at destroy time, which already happens because we register rootElement as a hoverable.  Same might apply to oj-active if we switch to an activeable paradigm.
    TYPE_CLASSES = "oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only",
    
    /**
     * In all cases, the return value includes only radios that are an :oj-button, i.e. radios that have been buttonized.
     * 
     * Where this method looks for radio groupmates:
     *
     * - If $elems is present (even if empty), 
     *     - This method will only look in that set, and will not attempt to weed out any false positives as defined below. 
     *       (So in this case, return value includes the specified radio iff it's an :oj-button in $elems.)
     * - Else this method looks in exactly the places where groupmates (including the original radio) would live, i.e. not in 
     *   the places false positives would live.  (So in both of the following cases, return value includes the specified radio 
     *   iff it's an :oj-button.)  Specifically:
     *     - If radio is in a form, this method will only look in that form.
     *     - Else, this method will look in the radio's document, but not in any forms.
     * 
     * Radios w/ name="" (incl name omitted) are not in a radio group (i.e. no SelectOne semantics), not even with other radios with 
     * w/ name="".  So if radio is nameless, the return value will include only radio (or nothing at all if it isn't an :oj-button, or 
     * if $elems is passed and it doesn't include radio).  
     * 
     * False positives: radios with nonempty names that match radio's name, but are actually not groupmates (i.e. no SelectOne 
     * relationship), e.g. because they're from a different form.
     * 
     * TBD: should this method handle the disconnected-from-dom case that _determineButtonType tries to handle?
     * 
     * 
     * @param {!Element} radio  a radio button.  Not a JQ object, other button or element type, or null.
     * @param {jQuery=} $elems  optional JQ object, containing 0 or more elems that aren't necessarily radios or buttons, in which to look for groupmates.
     *                          E.g. the elements in a buttonset or toolbar.  Must not contain any false positives as defined above.
     */
    _radioGroup = function( radio, $elems )
    {
        var name = radio.name,
            form = radio.form,
            $radios;
        if ( name ) 
        {
            name = name.replace( /'/g, "\\'" ); // escape single quotes
            var selector = ":radio[name='" + name + "']:oj-button";
            if ( $elems ) 
            {
                $radios = $elems.filter( selector );
            } else if ( form ) 
            {
                $radios = $( form ).find( selector );
            } else 
            {
                $radios = $( selector, radio.ownerDocument )
                    .filter(function() {
                        return !this.form;
                    });
            }
        } else 
        {
            $radios = ($elems ? $elems.filter( radio ) : $( radio )).filter(":oj-button");
        }
        return $radios;
    };

/**
 * @class
 * @name oj.ojButton
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="buttonOverview-section">
 *   JET Button Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#buttonOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant push buttons and toggle buttons, with appropriate styles for hover, active, checked, and disabled.
 * 
 * <p>There are two types of JET Buttons: push buttons and toggle buttons.
 * 
 * 
 * <h3 id="pushButtons-section">
 *   Push Buttons
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pushButtons-section"></a>
 * </h3>
 * 
 * <p>Push buttons are ordinary buttons that do not stay pressed in when clicked.  
 * Push buttons are created from buttons, anchors, and inputs of type button, submit, and reset.  Button elements are typically a good general-purpose choice.
 * 
 * 
 * <h3 id="toggleButtons-section">
 *   Toggle Buttons
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#toggleButtons-section"></a>
 * </h3>
 * 
 * <p>Toggle buttons are buttons that toggle between a selected state and an unselected state when clicked.  
 * Toggle buttons are created from radio buttons and checkboxes (inputs of type radio and checkbox).
 * 
 * <p>For toggle buttons, the input must have a label, which must be a sibling of the input that precedes the input.
 * The label's <code class="prettyprint">for</code> attribute must refer to the input's <code class="prettyprint">id</code> attribute. 
 * 
 * <p>A new wrapper element is created around the label and input, so that the component has a single root, while avoiding the accessibility problems
 * caused by nesting the input inside the label.  
 * 
 * <p>The label-precedes-input requirement ensures compatibility with the JET <code class="prettyprint">ojComponent</code> binding on the input element, 
 * which expects all relevant DOM elements, including label, to be already available with all their attributes resolved.
 * 
 * <p>The wrapper and label are styled to appear as the button, while the underlying input is updated on click. 
 * 
 * <p> Note that a given radio button must not be both checked and disabled, unless all radios in the group are disabled, since this removes 
 * the entire radio group from the tab order in mainstream browsers.  This issue applies to native radios and is not unique to JET.
 * 
 * 
 * <h3 id="buttonsetToolbar-section">
 *   Buttonsets and Toolbars
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#buttonsetToolbar-section"></a>
 * </h3>
 * 
 * <p>The [JET Buttonset]{@link oj.ojButtonset} component can be used to group related buttons, such as a group of radios or checkboxes.  Buttonset provides
 * visual and semantic grouping and WAI-ARIA-compliant focus management.  See the Buttonset API doc for more information.
 * 
 * <p>Also, buttons and buttonsets can be placed in a [JET Toolbar]{@link oj.ojToolbar}.  Like Buttonset, Toolbar is themable and provides WAI-ARIA-compliant 
 * focus management.  See the Toolbar API doc for more information.
 * 
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>Per WAI-ARIA requirements for role="button", all flavors of JET Button support invocation via both <kbd>Enter</kbd> and <kbd>Spacebar</kbd>, even when the 
 * underlying DOM element does not.
 * 
 * 
 * <h3 id="eventHandling-section">
 *   Event Handling
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#eventHandling-section"></a>
 * </h3>
 * 
 * <p>It's most reliable to register click handlers directly on the button, rather than on an ancestor.  For example, if any of the button's DOM is swapped out in a click 
 * handler (e.g. alternating the text and icon between "Play" and "Pause"), the bubbling will stop if the click target was part of the content that was removed in the swap.
 * 
 * <p>In lieu of a shared listener on an ancestor, syntax like <code class="prettyprint">$( "#ancestor :oj-button" ).click( myFunc );</code> can be used to set a handler on many 
 * buttons at once. 
 * 
 * <p>Also, the Knockout <code class="prettyprint">click</code> binding doesn't reliably work for <kbd>Spacebar</kbd>-generated clicks on anchor-based buttons, which are fired by the component, not natively.
 * In this case, register the click listener via jQuery's <code class="prettyprint">click()</code> method.  
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-button</code> pseudo-selector can be used in jQuery expressions to select JET Buttons.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-button" ) // selects all JET Buttons on the page
 * $myEventTarget.closest( ":oj-button" ) // selects the closest ancestor that is a JET Button
 * </code></pre>
 * 
 * 
 * <h3 id="state-section">
 *   Setting Component State
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#state-section"></a>
 * </h3>
 * 
 * <p>In JET, when setting component state after create time, the correct approach depends on whether the component has a JS API for that state.
 * 
 * <p>State with a JS API, such as Button's disabled state, checked state, and label, should be set via that API (which in those examples is 
 * <code class="prettyprint">option()</code>), not by manipulating the DOM directly.  This can be done by calling that JS API directly, or by binding 
 * a component option like <code class="prettyprint">disabled</code> to an observable using the <code class="prettyprint">ojComponent</code> binding.  
 * 
 * <p>Built-in KO bindings, like KO's <code class="prettyprint">disable</code> binding, should not be used in this case, since that is tatamount to 
 * updating the DOM directly.  The component option should be bound instead, via JET's <code class="prettyprint">ojComponent</code> binding.
 * 
 * <p>If a button's checked state needs to be set programmatically, then it should be wrapped in a Buttonset so that its <code class="prettyprint">checked</code> 
 * option can be used.
 * 
 * <p>State with no JS API should be set by manipulating the DOM directly in an allowable way, and then calling <code class="prettyprint">refresh()</code> 
 * on the affected component(s).  E.g. the reading direction (LTR / RTL) is changed by by setting the <code class="prettyprint">"dir"</code> attribute on the 
 * <code class="prettyprint">&lt;html></code> node and calling <code class="prettyprint">refresh()</code>.  
 * 
 * <p>When using a built-in Knockout binding (as opposed to the <code class="prettyprint">ojComponent</code> binding), keep in mind that those bindings do not 
 * execute the necessary <code class="prettyprint">refresh()</code> call after updating the DOM.  Updates that flow from the component to the observable, 
 * as a result of user interaction, are not problematic.  But updates in the other direction, that programmatically update the DOM because the observable changed, 
 * will not be picked up until the next <code class="prettyprint">refresh()</code>.
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <!-- TODO: discuss component state, refresh(), etc. -->
 * <ol>
 *   <li>All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.</li>
 *   <li>JQUI Button has a Boolean <code class="prettyprint">text</code> option indicating whether to hide the label when icons are present.
 *       In JET, we prefer to avoid Booleans for future flexibility, so JET Button instead has an expandable <code class="prettyprint">display</code> option accepting 
 *       the values <code class="prettyprint">"all"</code> and <code class="prettyprint">"icons"</code>.</li>
 *   <li>In JQUI Button, the <code class="prettyprint">icons</code> option accepts keys named <code class="prettyprint">"primary"</code> and 
 *       <code class="prettyprint">"secondary"</code>.  For clarity, these options have been renamed in JET Button to <code class="prettyprint">"start"</code> and 
 *       <code class="prettyprint">"end"</code>, our standard directionality-neutral terms for (in LTR) "left" and "right".</li>
 * </ol>
 * 
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "button" or "menu".  
 * E.g. the JQUI <code class="prettyprint">buttoncreate</code> event is <code class="prettyprint">ojcreate</code> in JET, as shown in the doc for that event.
 * Reason:  This makes the API more powerful.  It allows apps to listen to "foo" events from <em>all</em> JET components via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", myFunc);
 * </code></pre>
 * 
 * or to "foo" events only from JET Buttons (the JQUI functionality) via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", ":oj-button", myFunc);
 * </code></pre>
 * 
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * 
 * @desc Creates a JET Button.  If called after the button is already created, it is equivalent to the 
 * "set many options" overload of <code class="prettyprint">option()</code>.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the button with no options specified:</caption>
 * $( ".selector" ).ojButton();
 * 
 * @example <caption>Initialize the button with some options and callbacks specified:</caption>
 * $( ".selector" ).ojButton( { "label": "Copy", "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize a push button via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;button id="paste" data-bind="ojComponent: { component: 'ojButton', 
 *                                              label: 'Paste', 
 *                                              create: setupButton }">
 * 
 * @example <caption>Initialize a toggle button via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;label for="check">Toggle&lt;/label>
 * &lt;input type="checkbox" id="check" data-bind="ojComponent: {component: 'ojButton'}"/>
 */
oj.__registerWidget("oj.ojButton", $['oj']['baseComponent'], 
{
    version: "1.0.0", // doesn't get renamed even when unquoted and not in (our) externs.js file, so I'm leaving it unquoted for now.  TODO: Is it used anywhere, e.g. build tool?  If so, should prob quote or extern or something.  If not, should it get moved to @version (if that exists) or similar, or just remove, or...?
    defaultElement: "<button>", // added to externs.js, since this is an override of a superclass member.  (That's the rule for public methods, what about protected fields?)  Would @override do the job and be better than externing?
    widgetEventPrefix : "oj", 
    options: // options is in externs.js, so no need for quotes
    { 
        /**
         * Disables the button if set to <code class="prettyprint">true</code>.
         * 
         * @expose
         * @memberof! oj.ojButton
         * @instance
         * @type {?boolean}
         * @default <code class="prettyprint">false</code>
         * 
         * @example <caption>Initialize the button with the <code class="prettyprint">disabled</code> option specified:</caption>
         * $( ".selector" ).ojButton( { "disabled": true } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
         * // getter
         * var disabled = $( ".selector" ).ojButton( "option", "disabled" );
         * 
         * // setter
         * $( ".selector" ).ojButton( "option", "disabled", true );
         */
        disabled: null,
        
        /**
         * Whether to display both the label and icons (<code class="prettyprint">"all"</code>) or just the icons (<code class="prettyprint">"icons"</code>).
         * In the latter case, the label is displayed in a tooltip instead, unless a tooltip was already supplied at create time.  
         * 
         * <p>The <code class="prettyprint">display</code> option will be ignored if no icons are specified via the <code class="prettyprint">icons</code> option.
         * 
         * @expose
         * @memberof! oj.ojButton
         * @instance
         * @type {string}
         * @default <code class="prettyprint">"all"</code>
         * 
         * @example <caption>Initialize the button with the <code class="prettyprint">display</code> option specified:</caption>
         * $( ".selector" ).ojButton( { "display": "icons" } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">display</code> option, after initialization:</caption>
         * // getter
         * var display = $( ".selector" ).ojButton( "option", "display" );
         * 
         * // setter
         * $( ".selector" ).ojButton( "option", "display", "icons" );
         */
        display: "all",
        
        /**
         * Text to show in the button. When not specified (<code class="prettyprint">null</code>), the element's HTML content is used, or its <code class="prettyprint">value</code> 
         * attribute if the element is an input element of type button, submit, or reset, or the HTML content of the associated 
         * label element if the element is an input of type radio or checkbox.
         * 
         * @expose
         * @memberof! oj.ojButton
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">null</code>
         * 
         * @example <caption>Initialize the button with the <code class="prettyprint">label</code> option specified:</caption>
         * $( ".selector" ).ojButton( { "label": "custom label" } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">label</code> option, after initialization:</caption>
         * // getter
         * var label = $( ".selector" ).ojButton( "option", "label" );
         * 
         * // setter
         * $( ".selector" ).ojButton( "option", "label", "custom label" );
         */
        label: null,
        
        /**
         * Icons to display in the button.  Support is as follows:
         * <ul>
         *   <li>Any combination of start and end icons can be specified, with or without the label (see <code class="prettyprint">display</code> option).</li>
         *   <li>Icons are supported for push buttons created from buttons and anchors, and for toggle buttons (radios and checkboxes).</li>
         *   <li>Icons are not supported for push buttons created from inputs of type button, submit, and reset.</li>
         * </ul>
         * 
         * <p>The start icon is displayed before the label text (on the left in LTR), and the end icon is displayed after the 
         * label (on the right in LTR).  In RTL, the positions are reversed.
         * 
         * <p>The value for the <code class="prettyprint">start</code> and <code class="prettyprint">end</code> properties should be one or more style class names (as seen in the 
         * examples) or <code class="prettyprint">null</code> (the default).
         * 
         * @expose
         * @memberof! oj.ojButton
         * @instance
         * @type {Object}
         * @default <code class="prettyprint">{ start: null, end: null }</code>
         * 
         * @example <caption>Initialize the button, specifying only one icon:</caption>
         * $( ".selector" ).ojButton({ "icons": { start:'demo-icon-sprite demo-icon-locked' } });
         * 
         * @example <caption>Get or set the <code class="prettyprint">icons</code> option, after initialization:</caption>
         * // getter
         * var icons = $( ".selector" ).ojButton( "option", "icons" );
         * 
         * // setter, specifying both icons:
         * $( ".selector" ).ojButton( "option", "icons", { start: 'demo-icon-sprite demo-icon-gear', 
         *                                                 end: 'demo-icon-sprite demo-icon-triangle-1-s'} );
         */
        icons:
        {
            /** @expose */
            start: null,
            /** @expose */
            end: "auto" // TODO: surface this new default for review, and modify API doc above.  Should "start" default be "auto" too?  For start would be same as null.
        },
        
        /*
         * TODO: Have API doc discuss menuButton fcnality.  Mention WAI-ARIA compliant without unnecessary keyboard detail.  See Menu wiki, menuButton Design wiki, v0.5 demos.
         * Mention is positioned as a dropdown by default, and how to override default menu positioning.
         * 
         * TODO: would be better for menuButton and contextMenu API's to take a JQ selector rather than an ID.
         */
        /**
         * Identifies the JET Menu that the button should launch. If specified, the button is a WAI-ARIA-compliant menu button.  
         * 
         * <p>By default, menu buttons have a downward pointing "dropdown" arrow for their end icon.  See the <code class="prettyprint">icons</code> option for details.
         * 
         * <p>Menu button functionality is supported for Buttons based on button or anchor tags.  (Buttons based on input tags either do not support the dropdown icon, 
         * or do not make sense for use as a menu button, or both.)
         * 
         * <p>The JET Menu should be initialized before the JET Button that launches it.
         * 
         * @expose
         * @memberof! oj.ojButton
         * @instance
         * @type {Object}
         * @default <code class="prettyprint">{ menu: null }</code>
         * 
         * @example <caption>Initialize a menu button:</caption>
         * $( ".selector" ).ojButton({ "menu": { menu: 'myMenu' } });
         * 
         * @example <caption>Get or set the <code class="prettyprint">menu</code> option, after initialization:</caption>
         * // getter
         * var menu = $( ".selector" ).ojButton( "option", "menu" );
         * 
         * // setter
         * $( ".selector" ).ojButton( "option", "menu", { menu: 'myMenu'} );
         */
        menu: 
        {
            /** @expose */
            menu: null
        }

        // Events
        
        /**
         * Triggered when the button is created.
         *
         * @event 
         * @name create
         * @memberof! oj.ojButton
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Empty object included for consistency with other events
         * 
         * @example <caption>Initialize the button with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojButton({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */
        // create event declared in superclass, but we still want the above API doc
    },
    
    _create: function() // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        // Add "form reset" handler to form (if any) that refreshes all buttons on form.
        // Register on the form once with a "static" button namespace, not once per button with each particular button's namespace, 
        // so handler doesn't get removed if this particular button is destroyed.
        // TODO: 
        // - should JET editableValues / etc. have this same code?
        // - test this handler (there's already a unit test for it)
        // - do we just get rid of this now that refresh() doesn't update checked state?
        // - if an already-created JET Button is reparented into a form that doesn't yet have any buttons, that form will 
        //   incorrectly lack this handler.  Maybe move this into refresh() and doc that must refresh button in that case?  Ties in with 
        //   issue of buttons moving in and out of buttonsets, buttonsets moving in and out of toolbars, etc.  
        this.element.closest( "form" )
            .unbind( "reset" + BUTTON_EVENT_NAMESPACE )
            .bind( "reset" + BUTTON_EVENT_NAMESPACE, function() {
                var form = $( this );
                setTimeout(function() {
                    var $buttons = form.find( ":oj-button" ).each(function() {
                        $( this ).data( "oj-ojButton" )._applyCheckedStateFromDom(false);
                    });
                    
                    // if last button in form has been destroyed or moved out, remove the handler
                    if (!$buttons.length)
                        form.unbind( "reset" + BUTTON_EVENT_NAMESPACE );
                }, 1 );
            } );
        
        // Sync up disabled option and disabled DOM property.
        // If app set the option to valid value (true/false), then that wins, else DOM wins (which always has a valid value).
        if ( typeof this.options.disabled !== "boolean" )
        {   // then app either didn't set the option from its initial value of null, or they set it 
            // to invalid value which we'll ignore, so set the option from the DOM.  Just set the ivar without calling _setOption()
            // here, since we call it below.
            // For anchors, this line always sets it to false.  (Neither JQUI nor JET look for the .oj-disabled class for anchors, 
            // so the only way to disable an anchor button at create time is via the API.  At refresh time, JQUI did look 
            // for the .oj-disabled class, but our refresh doesn't handle disabled.)
            this.options.disabled = !!this.element.prop( "disabled" );
        } // else the app definitely set the option to true or false, since default was null, so set app's value 
        // on the DOM.  No need to do that here, since we call _setOption("disabled"...) below, which sets the DOM property.
        
        // facilitate removing menuButton handlers separately, if app clears the "menu" option
        this.menuEventNamespace = this.eventNamespace + "menu";
        
        this._initButtonTypes();
        this.hasTitle = !!this.rootElement.attr( "title" );

        var self = this,
            options = this.options,
            toggleButton = this.type === "checkbox" || this.type === "radio",
            activeClass = !toggleButton ? "oj-active" : "",
            focusClass = "oj-focus";

        this._hoverable( this.rootElement );

        this.rootElement.addClass( BASE_CLASSES );
    
        this.buttonElement
            .bind( "mouseenter" + this.eventNamespace, function() {
                if ( options.disabled )
                    return;
                if ( this === lastActive ) 
                    self.rootElement.addClass( "oj-active" );
            })
            .bind( "mouseleave" + this.eventNamespace, function() {
                if ( options.disabled )
                    return;
                self.rootElement.removeClass( activeClass );
            })
            .bind( "click" + this.eventNamespace, function( event ) {
                if ( options.disabled )
                {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
            });

        this.element
            .attr( "role", "button" )
            .bind( "focus" + this.eventNamespace, function() {
                // no need to check disabled, focus won't be triggered anyway
                self.rootElement.addClass( focusClass );
            })
            .bind( "blur" + this.eventNamespace, function() {
                self.rootElement.removeClass( focusClass );
            });

        if ( toggleButton )
        {
            this.element.bind( "change" + this.eventNamespace, function( event ) {
                if ( clickDragged )
                {
                    //console.log("toggle change listener bailing due to clickDrag");
                    return;
                }
                
                self._applyCheckedStateFromDom(true); // we just get one change event for entire radio group, even though up to 2 changed, so must refresh entire radio group, not just this button
                
                // if in a buttonset that tracks checked state (i.e. checkbox set or single 
                // radio group), then set that option and fire optionChange event
                var buttonset = $( this ).closest( ":oj-buttonset" ).data( "oj-ojButtonset" );
                var checkedState = buttonset && buttonset._getCheckedFromDom(buttonset.$buttons);
                if (buttonset && checkedState!==undefined)
                {
                    buttonset._optionChangeOriginalEvent = event;
                    
                    // only sets the option and fires optionChange, since _optionChangeOriginalEvent ivar is set
                    buttonset._setOption("checked", checkedState);
                }
            });
            
            // if mouse moves between mousedown and mouseup (drag) set clickDragged flag
            // prevents issue where button state changes but checkbox/radio checked state
            // does not in Firefox (see ticket #6970)
            // TODO jim: we've inherited a multi-browser JQUI bug involving clickDragging, that repros on JQUI site and in 
            // JET button.  After clickDragging, highlighting is wrong, and it can impact Buttonset focus management.
            this.buttonElement
                .bind( "mousedown" + this.eventNamespace, function( event ) {
                    if ( options.disabled )
                        return;
                    clickDragged = false;
                    startXPos = event.pageX;
                    startYPos = event.pageY;
                })
                .bind( "mouseup" + this.eventNamespace, function( event ) {
                    if ( options.disabled )
                        return;
                    if ( startXPos !== event.pageX || startYPos !== event.pageY )
                        clickDragged = true;
                });
        }

        if ( this.type === "checkbox" )
        {
            this.buttonElement.bind( "click" + this.eventNamespace, function() {
                //console.log("checkbox label click handler that returns false if button disabled or clickDragged");
                if ( options.disabled || clickDragged )
                    return false;
            });
            
            // role="button" requires both Space and Enter support, but radios and checkboxes natively support only Space, so add Enter.
            // This fire-click-on-Enter logic gives Enter the same behavior as Space for checkboxes in Chrome, FF, and IE9:
            // In Chrome28 and IE9, for Space and Enter on Checkboxes, first the "checked" value updates, then change event, then click event.
            // In FF22, for Space and Enter on Checkboxes, first the "checked" value updates, then click event, then change event.
            // Unlike the radio Enter handler, we get this good behavior by only firing "click".
            this.element.bind( "keyup" + this.eventNamespace, function(event) {
                if ( event.keyCode === $.ui.keyCode.ENTER ) {
                    if ( !options.disabled ) {
                        //console.log("checkbox Enter handler firing click event");
                        self.element.click();
                    }
                }
            });
        } else if ( this.type === "radio" )
        {
            this.buttonElement.bind( "click" + this.eventNamespace, function() {
                if ( options.disabled || clickDragged )
                {
                    //console.log("radio label click handler returning false b/c button disabled or clickDragged");
                    return false;
                }
            });
            
            // role="button" requires both Space and Enter support, but radios and checkboxes natively support only Space, so add Enter.
            // For radios, this handler gives Enter in Chrome28/ IE9/ FF22 the same behavior as Space on Chrome.  Since Space in IE/FF is 
            // different than Space in Chrome, this means that Enter and Space are not quite the same within those browsers.
            // For Space and Enter on unchecked radios in Chrome28 and IE9:
            //   - first the "Checked" value updates, then change event, then click event.
            // For already-checked radios, where activation would just check it again:
            //   - Space and Enter in Chrome28, and Enter in IE9:  do nothing.
            //   - Space in IE9:  first the "Checked" value updates, then click event.  (No change event since nothing changed.)
            //     (This is the only Chrome/IE9 Space/Enter difference.)
            // In FF22:
            //   - Space on unchecked radios: first the "Checked" value updates, then click event, then change event.
            //   - Enter on unchecked radios is same as Chrome.  (Different event ordering than FF.)
            //   - Space on checked radios is like IE9: first the "Checked" value updates, then click event.  (No change event since nothing changed.)
            //   - Enter on checked radios is same as Chrome.  (Do-nothing.)
            this.element.bind( "keyup" + this.eventNamespace, function(event) {
                if ( event.keyCode === $.ui.keyCode.ENTER )
                {
                    if ( !self.element[0].checked && !options.disabled ) {
                        //console.log("radio Enter handler found radio unchecked, so checking it and firing click event");

                        // Unlike the checkbox Enter handler, we set checked=true and fire changed before firing click, without which 
                        // we didn't get the exact behavior described above.  Without setting checked, the click handlers in all 3 desktop
                        // browsers saw the "old" "checked" value when Enter was pressed on radios, which broke Buttonset's focus mgmt logic.
                        // If we set checked, then change no longer fires automatically, in at least some browsers, so we have to fire it 
                        // manually, both for apps that rely on it, and because our code relies on our change listener to update the "checked" styling.
                        self.element[0].checked = true;
                        self.element.change();
                        self.element.click();
                    }
                }
            });
        } else // neither checkbox nor radio, so not a toggle button, so element, buttonElement, and rootElement are all the same node
        {
            this.buttonElement
                .bind( "mousedown" + this.eventNamespace, function( event ) {
                    if ( options.disabled ) {
                        return false;
                    }
                    if ( event.which === 1 ) // don't show active/pressed-down state unless left mouse button, since only that button will click the button after mouseup
                    { 
                        $( this ).addClass( "oj-active" );
                        lastActive = this;
                        self.document.one( "mouseup", function() {
                            lastActive = null;
                        });
                    }
                })
                .bind( "mouseup" + this.eventNamespace, function() {
                    if ( options.disabled ) 
                        return false;
                    $( this ).removeClass( "oj-active" );
                })
                .bind( "keydown" + this.eventNamespace, function(event) {
                    if ( options.disabled ) 
                        return false;
                    if ( event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER )
                        $( this ).addClass( "oj-active" );
                })
                // see #8559, we bind to blur here in case the button element loses
                // focus between keydown and keyup, it would be left in an "active" state
                // TBD: blur handler doesn't clear the oj-active class in the following specific case, because blur event doesn't seem to fire if (quasi-) focus goes to the alert() box:
                // - For push buttons but not radios (what about checkboxes?), 
                // - only if click handler has an alert() (but not code that simply moves focus elsewhere in DOM), 
                // - if Button is clicked via Enter, but not Spacebar or mouse click.  
                // The oj-active class clears on any subsequent keypress on the Button.  Is there some creative solution to this browser limitation.
                .bind( "keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    $( this ).removeClass( "oj-active" );
                });

            if ( this.buttonElement.is("a") ) 
            {
                // TBD: For <a> buttons, Enter scrolls to the top of the doc (presumably b/c of the href="#"), but Space scrolls down (presumably 
                // b/c we're not cancelling its normal PageDown semantics).  Would preventDefault or stopPropagation also prevent the link from being
                // followed or its JS executed?  
                this.buttonElement.bind( "keyup" + this.eventNamespace, function(event) {
                    if ( event.keyCode === $.ui.keyCode.SPACE ) 
                    {
                        // JQUI's TODO: pass through original event correctly (just as 2nd argument doesn't work)
                        $( this ).click();
                    }
                });
            }
        } // end of: if (checkbox) {} else if (radio) {} else {} 
        
        // TODO: pull out $.Widget's handling for the disabled option into
        // $.Widget.prototype._setOptionDisabled so it's easy to proxy and can
        // be overridden by individual plugins
        this._setOption( "disabled", options.disabled );
        this._handleLabelAndIconsAtCreateTime();
        this._setupMenuButton();
        this._super();
    },

    _initButtonTypes: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    { 
        var labelSelector, checked;

        // for toggle buttons (radio/checkbox), element is <input>, buttonElement is <label>,
        // and rootElement is a new wrapper element we create.
        if ( this.element.is("input[type=checkbox]") )
            this.type = "checkbox";
        else if ( this.element.is("input[type=radio]") )
            this.type = "radio";
        
        // for push buttons (next 2 cases), element, buttonElement, and rootElement are all the same elem.  We ignore <label> if present.
        else if ( this.element.is("input[type=button],input[type=submit],input[type=reset]") )
            this.type = "input";
        else if ( this.element.is("button,a"))
            this.type = "button";
        else 
            throw new Error("JET Button not supported on this element type");

        if ( this.type === "checkbox" || this.type === "radio" ) 
        {
            // TBD: rather than requiring the label to be supplied, should we just create one for them if it's not there?
            labelSelector = "label[for='" + this.element.attr("id") + "']";
            this.buttonElement = this.element.siblings().filter( labelSelector ).addClass( "oj-button-label" );
             
            this.element
                .addClass( "oj-helper-hidden-accessible" )
                .add(this.buttonElement) // doesn't mutate this.element
                .wrapAll("<span></span>"); // add root node around label/input

            this.rootElement = this.element.parent(); // the new root
            
            checked = this.element[0].checked;
            if ( checked )
                this.rootElement.addClass( "oj-checked" );
            // else no need to removeClass since this code runs only at _create time
            
            // must be set for toggle buttons even if false, since presence of this attr conveys to AT's 
            // whether it's a toggle button or push button.
            this.element.attr( "aria-pressed", checked );
        } else 
        {
            this.buttonElement = this.element;
            this.rootElement = this.element;
        }
    },

    /**
     * Returns a <code class="prettyprint">jQuery</code> object containing the element visually representing the button.  For checkboxes and radios, this is the label, not the input.  
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose
     * @memberof! oj.ojButton
     * @instance
     * @return {jQuery} the button
     * 
     * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
     * var widget = $( ".selector" ).ojButton( "widget" );
     */
    widget: function() // Override of public base class method.  Method name needn't be quoted since is in externs.js.
    { 
        return this.rootElement;
    },
    
    // TODO: test that _destroy really does remove everything.  See also Buttonset todo about remembering initial state.
    _destroy: function() // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        this._removeMenuBehavior();
        
        // TBD: won't need this after the restore-attrs feature is in place.
        this.element
            .removeClass( "oj-helper-hidden-accessible" )
            .removeAttr( "role" )
            .removeAttr( "aria-pressed" );
        
        var isToggle = this.type === "checkbox" || this.type === "radio";
        
        // TBD: won't need this after the restore-attrs feature is in place.
        if ( !isToggle ) 
            this.rootElement.removeClass( BASE_CLASSES + " " + STATE_CLASSES + " " + TYPE_CLASSES );
        
        // TBD: would be better to restore the *original* html, not what it is now.
        this.buttonElement.html( this.buttonElement.find(".oj-button-text").html() );
        
        if ( !isToggle )
        {
            // TBD: won't need this after the restore-attrs feature is in place.
            if ( !this.hasTitle )
                this.rootElement.removeAttr( "title" );
        } else 
        {
            this.buttonElement.removeClass( "oj-button-label" ); // TBD: won't need this after the restore-attrs feature is in place.
            this.element.unwrap(); // remove rootElement
        }
    },

    _setOption: function( key, value ) // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        this._super( key, value );
        
        switch (key) 
        {
            case "disabled":
                // _super() applies oj-disabled and aria-disabled to rootElement (see code below), and removes oj-hover/focus/active from associated "-ables"
                value = !!value;
                
                if (!this.element.is("a")) // i.e. <button> or <input> (including type=radio|checkbox|other)
                {
                    // <button> and <input> (including type=radio|checkbox|other) have this property, but <a> doesn't
                    this.element.prop( "disabled", value ); // JQUI sets this for <a>'s too.
                    
                    //Toggle oj-enabled style class based on the disabled flag as it should have either oj-enabled or oj-disbaled not both at any point of time.
                    this.widget().toggleClass( "oj-enabled", !value );
                    
                    // _super() puts aria-disabled on the rootElement.  Per wai-aria, don't put aria-disabled on element already having disabled 
                    // attr.  (And if we DID apply aria-disabled, for radios/checkboxes it should go on the element / input, not the buttonElement / label or rootElement, 
                    // so the _super() behavior used by JQUI button is doubly wrong.)
                    this.rootElement.removeAttr( "aria-disabled" );
                } // else is <a>, so we keep the aria-disabled that _super() put on it.
                  // Unlike radios/checkboxes, _super() puts it on the correct element for <a>'s since element and rootElement are both the <a>.
                
                if (value)
                {
                    // TBD: when the handling of oj-active in baseComponent._setOption("disabled") is finalized, review whether this should be handled there instead.
                    this.widget().removeClass("oj-active");
                    
                    // when disabling a menu button, dismiss the menu if open
                    this._dismissMenu(null, null, true);
                }
                break;
            case "label":
                this._setLabelOption();
                break;
            case "display":
                if ( this.type !== "input" ) // <input type=button|submit|reset> doesn't support child nodes, thus no icons, icon-only buttons, etc.
                    this._setDisplayOptionOnDom();
                break;
            case "icons":
                this._setIconsOption(true);
                break;
            case "menu": // setting/clearing the menu sets whether this is a menuButton
                if (this.options.icons.end === "auto") // then the end icon is a dropdown arrow iff the new menu value points to a valid menu, so must call...
                    this._setIconsOption(false);
                this._setupMenuButton();
                break;
        }
    },
    
    /**
     * Refreshes the button. JET components require a <code class="prettyprint">refresh()</code> after a supported DOM change is made 
     * that affects the component, of which the component would otherwise be unaware.  
     * 
     * <p>This method calls <code class="prettyprint">baseComponent.refresh()</code>, but doesn't currently do anything Button-specific.
     * Note that anything having a JS API, such as the Button's label, disabled state, and checked state, must be set via the API, not 
     * by mutating the DOM and calling <code class="prettyprint">refresh()</code>.  (For the checked state, see Buttonset's 
     * <code class="prettyprint">checked</code> option.)  
     * 
     * @expose 
     * @memberof! oj.ojButton
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojButton( "refresh" );
     */
    refresh: function() // Override of public base class method (unlike JQUI).  Method name needn't be quoted since is in externs.js.
    {
        this._super();
    },
    
    // If this button is radio/checkbox, then this method gets the checked state from DOM's 
    // "checked" prop and toggles oj-checked and aria-pressed accordingly.
    // If wholeGroup param is true, and this button is a radio, then do that for all buttons in the group.
    _applyCheckedStateFromDom: function(wholeGroup) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if ( this.type === "radio" ) 
        {
            (wholeGroup ? _radioGroup( this.element[0] ) : this.element ).each(function() {
                var $radioWidget = $( this ).data( "oj-ojButton" ); // definitely exists because _radioGroup() checks for :oj-button 
                
                if ( this.checked )
                {
                    $radioWidget.rootElement.addClass( "oj-checked" );
                    $radioWidget.element.attr( "aria-pressed", "true" );
                } else 
                {
                    $radioWidget.rootElement.removeClass( "oj-checked" );
                    $radioWidget.element.attr( "aria-pressed", "false" );
                }
            });
        } else if ( this.type === "checkbox" ) 
        {
            if ( this.element[0].checked ) 
            {
                this.rootElement.addClass( "oj-checked" );
                this.element.attr( "aria-pressed", "true" );
            } else 
            {
                this.rootElement.removeClass( "oj-checked" );
                this.element.attr( "aria-pressed", "false" );
            }
        }
    },
    
    /* 
     * Method name sums it up.  Should only be called at create time.
     */
    _handleLabelAndIconsAtCreateTime: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var keepDom = false;
        if ( this.options.label === null ) {
            keepDom = true;
            this.options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
        }
        
        if ( this.type === "input" ) { // <input type=button|submit|reset> doesn't support child nodes, thus no icons, etc.
            this._setLabelOnDomOfSpanlessButton();
        } else { // <button>, <a>, checkboxes, and radios
            var textSpan = this._setLabelOnDomAtCreateTime(keepDom);
            var hasStartIcon = this._setIconOnDom(true);
            var hasEndIcon = this._setIconOnDom(false);
            this._setDisplayOptionOnDom(textSpan, hasStartIcon, hasEndIcon);
        }
    },
    
    /*
     * Replace the button contents with a span containing the label:
     * - If app didn't set the label option, then reparent their DOM label to the new span.
     * - If app set the label option, then set escaped version onto label span.
     * Either way, button contents are completely replaced with the new span.
     * 
     * Should only be called at create time.
     * 
     * @return the new textSpan
     */
    _setLabelOnDomAtCreateTime: function(keepDom) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var buttonElement = this.buttonElement;
        var textSpan = $( "<span class='oj-button-text'></span>", this.document[0] );
        
        if (keepDom) {
            textSpan.append(buttonElement.contents());
        } else { 
            buttonElement.empty();
            textSpan.text(this.options.label); // performs escaping; e.g. if label is <a>foo</a>, then text() replaces the span's contents with a text node containing that literal string (rather than setting innerHtml).
        }
        
        buttonElement.append(textSpan);
        return textSpan;
    },
    
    /*
     * Following is an old TBD from before the refactoring.  Now that we've sharply reduced the amount of unnecessary DOM replacement when 
     * options like label and icons are set, is this still an issue?  If so, can we further minimize the churn to fix it?
     * TBD: Per http://www.quirksmode.org/blog/archives/2007/01/a_note_about_ev.html, if a click handler blows away the thing that was 
     * clicked, it stops the click event from bubbling any further.  For antonym buttons like Play/Pause where the app puts a click handler
     * on the button that toggles its label and/or icons, this method replaces the clicked element, e.g. a <span> inside the <button>, 
     * stopping the bubble. [UPDATE: we keep the span now but change its contents.  Does that fix it?].  This makes bubbling brittle.  
     * Consider improving and/or doc'ing the issue.
     */
    
    /*
     * This method takes care of everything that needs to happen when the "label" option is set *after* create time.
     */
    _setLabelOption: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if ( this.type === "input" ) { // <input type=button|submit|reset> doesn't support child nodes, thus no icons, etc.
            this._setLabelOnDomOfSpanlessButton();
        } else {
            var textSpan = this.buttonElement.find( '.oj-button-text' );
            textSpan.text(this.options.label); // performs escaping; e.g. if label is <a>foo</a>, then text() replaces the span's contents with a text node containing that literal string (rather than setting innerHtml).
            this._setDisplayOptionOnDom(textSpan);
        }
    },
    
    /*
     * This method should only be called when the button is a "spanless" button, i.e. <input type=button|submit|reset>. It is called when the label is set, 
     * both at create time and when it is set later.  
     */
    _setLabelOnDomOfSpanlessButton: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        // TBD: The "if label" check is from JQUI.  Is there some reason that setting "" should be ignored?
        // Probably not too harmful since they should set "display" option to "icons" instead, or set " " if they really want to.
        if ( this.options.label )
            this.element.val( this.options.label ); // escaping is automatic; e.g. if label is <span>foo</span>, then val() sets that literal string on the input's "value" attr.
    },
    
    /*
     * When the param is true, this method takes care of everything that needs to happen when the "icons" option is set *after* create time.
     * When the param is false, this method takes care of everything that needs to happen when the "menu" option is set *after* create time, when icons.end is already "auto", 
     * which the caller should verify before calling this method.  (When icons.end === "auto", toggling the "is a menuButton" status affects the end icon.)
     */
    _setIconsOption: function(doStart) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if ( this.type === "input" ) // <input type=button|submit|reset> doesn't support child nodes, thus no icons, etc.
            return;
        
        var hasStartIcon;
        if (doStart)
            hasStartIcon = this._setIconOnDom(true);
        
        var hasEndIcon = this._setIconOnDom(false);
        this._setDisplayOptionOnDom(undefined, hasStartIcon, hasEndIcon);
    },
    
    /*
     * This method sets either the start or end icon on the DOM, depending on the param, adding or removing the 
     * icon span as needed.  It is called both at create time and when the icon changes later.
     * 
     * @param isStart boolean, whether is start or end icon
     * @return boolean indicating whether an icon was set on DOM
     */
    _setIconOnDom: function(isStart) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (isStart) {
            var standardIconClass = 'oj-button-icon-start';
            var appIconClass = this.options.icons.start;
            var lastIvar = "_lastStartIcon";
            var pendTo = "prependTo";
        } else {
            standardIconClass = 'oj-button-icon-end';
            appIconClass = this._getEndIconOption();
            lastIvar = "_lastEndIcon";
            pendTo = "appendTo";
        }
        
        var iconSpan = this.buttonElement.find( "."+standardIconClass );
        
        if ( appIconClass ) {
            if ( iconSpan.length ) {
                // remove the app icon class we set last time
                var oldAppIconClass = this[lastIvar];
                iconSpan.removeClass(oldAppIconClass);
            } else {
                iconSpan = $( "<span></span>" )
                    .addClass( standardIconClass )
                    [pendTo]( this.buttonElement );
            }
            iconSpan.addClass( appIconClass );
        } else {
            iconSpan.remove();
        }
        
        // remember the app icon class we set, so we can remove it next time
        this[lastIvar] = appIconClass;
        
        return !!appIconClass;
    },
    
    /*
     * Gets the actual end icon.  If icons.end is "auto", the answer depends on whether this is a menuButton or not.
     */
    _getEndIconOption: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var icons = this.options.icons;
        return (icons.end === "auto") 
               ? (this._getMenu() ? "oj-widget-icon oj-button-menu-dropdown-icon" : null)
               : icons.end;
    },
    
    /*
     * Hides / shows the label, and adds / removes the rootElement tooltip, depending on whether 
     * display is "icons" (and whether there are in fact icons).  Doesn't add/remove the 
     * tooltip if app provided one initially.
     * 
     * Sets the corresponding root style class, e.g. "oj-button-text-only" or "oj-button-text-icon-start".
     * 
     * TODO: need to call this *after* setRootAttributes so app has a chance to set their own 
     * tooltip for checkbox/radio.  
     * 
     * Must be called when display, icons, or label options are set.
     * If icons.end is "auto", must be called when menu option is set.
     * 
     * Caller must check that it's not a spanless button before calling this method.
     * 
     * All params optional.
     */
    _setDisplayOptionOnDom: function(textSpan, hasStartIcon, hasEndIcon) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (textSpan === undefined)
            textSpan = this.buttonElement.find( '.oj-button-text' );
        if (hasStartIcon === undefined)
            hasStartIcon = !!this.options.icons.start;
        if (hasEndIcon === undefined)
            hasEndIcon = !!this._getEndIconOption();
        
        var multipleIcons = hasStartIcon && hasEndIcon;
        var atLeastOneIcon = hasStartIcon || hasEndIcon;
        var displayIsIcons = this.options.display === "icons";
        
        if ( atLeastOneIcon && displayIsIcons )
        {
            textSpan.addClass( "oj-helper-hidden-accessible" );
            
            if ( !this.hasTitle )
            {
                var buttonText = /** @type {string}  tell GCC is getter, not setter, overload of text() */
                                 (textSpan.text());
                this.rootElement.attr( "title", $.trim( buttonText ) ); // use buttonText, which is escaped, not options.label, which isn't!
            }
        } else
        {
            textSpan.removeClass( "oj-helper-hidden-accessible" );
            
            if ( !this.hasTitle )
                this.rootElement.removeAttr( "title" );
        }
        
        var buttonClass = 
            !atLeastOneIcon
                ? "oj-button-text-only"
                : displayIsIcons
                    ? multipleIcons ? "oj-button-icons-only" : "oj-button-icon-only"
                    : multipleIcons 
                        ? "oj-button-text-icons"
                        : hasStartIcon
                            ? "oj-button-text-icon-start" 
                            : "oj-button-text-icon-end";
        
        this.rootElement.removeClass( TYPE_CLASSES )
                        .addClass( buttonClass );
    },
    
    /* 
     * This method adds/removes menuButton stuff from the element, based on the Button's "menu" option.
     */
    _setupMenuButton: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        this._removeMenuBehavior();
        
        var menu = this._getMenu(); // non-null iff all criteria are met for this to truly be a menuButton
        if ( menu ) 
        {
            var self = this;
            this.element
                .attr("aria-haspopup", true)
                .on( "keydown" + this.menuEventNamespace, function( event ) { 
                    if (event.which === $.ui.keyCode.DOWN ) 
                    {
                        self._showMenu(event, "firstItem", menu);
                        return false;
                    } else if (event.which === $.ui.keyCode.ESCAPE )
                    {
                        self._dismissMenu(event, menu);
                        return false;
                    }

                    return true;
                })
                .on( "click" + this.menuEventNamespace, function( event ) {
                    //console.log("mb click handler");
                    if (!menu.__spaceEnterDownInMenu)
                    {
                        //console.log("mb click handler toggling");
                        self._toggleMenu(event, menu);
                    }
                    menu.__spaceEnterDownInMenu = false;
                    return false;
                });
            menu.widget()
                .on( "oj__dismiss" + this.menuEventNamespace, function( event, ui ) {
                    //console.log(this.options.label + ": mb dismiss handler");
                    self._menuDismissHandler(event);
                })
                .on( "ojbeforeshow" + this.menuEventNamespace, function( event, ui ) {
                    //console.log(this.options.label + ": mb beforeshow handler");
                    // if something else launches the same menu (including the case where it's our own *context* menu),
                    // then the *menuButton* menu is no longer showing, so unpress the button.
                    if (!self._launchingMenu)
                    {
                        //console.log(this.options.label + ": mb beforeshow handler calling dismiss handler");
                        self._menuDismissHandler(event);
                    }
                    self._launchingMenu = false;
                });
        }
    },
    
    /*
     * This method removes menuButton functionality from the element
     */
    _removeMenuBehavior: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this.element
            .removeAttr( "aria-haspopup" )
            .off( this.menuEventNamespace ); // TODO: need to call this on the menu, not just this.element, right?
    // TODO: remove .oj-checked, but only if button/anchor
    },
    
    /* 
     * This Button is a MenuButton iff 1-3 are all true:
     *   (1) the "menu" option is specified
     *   (2) it's well-formed and points to a valid, already inited JET Menu
     *   (3) this is a <button> or <a> (not <input> of any type).
     * This method returns isMenuButton ? menu : null.
     * (Do NOT return null just because button is disabled, since that would mean disabled menuButtons lose their dropdown arrow, and possibly other problems.)
     */
    _getMenu: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var menu = this.options.menu;
//        var menuOptionSpecified = !!menu;
        
        if ( menu )
            menu = menu.menu;
        if ( menu ) 
            menu = $("#" + menu).data( "oj-ojMenu" );
        if ( menu && this.element.not("input"))
            return menu;
        
//        if (menuOptionSpecified)
            // TODO: log: menu option specified but was malformed or this is an input
        
        return null;
    },
    
    /* 
     * TODO: Make sure _destroy gets rid of the extra stuff we set for menu buttons.  e.g. now we're setting oj-checked even if is push button.
     * 
     * Shows the menuButton menu if there is one and we're not disabled.
     * 
     * MenuButton types:
     * - We support menuButtons on push buttons based on <button> and <a>.
     *     - Architects require that we support menuButtons on at least some types of push buttons.
     *       I.e. if checkbox-based menuButtons were supported, it would not be OK for that to be the only type that's supported.
     * - <input type=button|submit|reset> work fine using the same code path as <button> and <a>, but architects approved proposal 
     *   not to support them for following reasons:
     *     - submit/reset menubuttons are semantically / behaviorally absurd.
     *     - these types don't support icons, i.e. the dropdown icon.
     *     - reduces exposure to issues like we had for checkboxes, without sacrificing anything since these flavors were undesirable
     *       for menuButton use anyway.
     *  - Radios are inappropriate for menuButtons.  Alternate clicks should open and close the menu, with corresponding visual 
     *    feedback from button, but radios are idempotent: they stay pressed on repeated clicks.
     *  - Architects approved proposal not to support checkboxes for following reasons:  
     *      - Checkbox-based menuButtons were considered a bit odd, and we had zero requirements for it.
     *      - The only thing they buy anyone is the checked state corresponding to the menu-open state, but there are several ways for 
     *        apps to find out if the menu is open, e.g. check its "hidden" status, check whether the oj-checked class is present, etc.
     *      - They proved to be somewhat brittle, with *different* event-ordering problems in each browser.  Even if we spent the time 
     *        to fix it, they could still be a source of problems later, which didn't seem worth it for a flavor no one wanted.
     * 
     * @param event required
     * @param focus required
     * @param menu optional. pass it if already have it
     */
    _showMenu: function(event, focus, menu) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        // TBD: should we bail at top if oj-checked already set?
        if (this.options.disabled) 
            return;
        if (!menu)
            menu = this._getMenu();
        if (menu) 
        {
            // Per UX requirements, menuButtons should look pressed/checked iff the menu is open:
            // - For push buttons, per architectural review, just add/remove oj-checked even though it's a push button.
            //     - Per a11y review, that's fine, but do NOT apply aria-pressed to push buttons, which would turn it into a toggle button for AT users.  He said that 
            //       would just confuse things, and that the visual pressed-in look was just eye candy in this case, not semantics that we need to show to AT users. 
            // - If checkbox menuButtons were supported, obviously we'd toggle the pressed look by checking/unchecking the button, which in turn would toggle oj-checked.
            //   In that case, we'd fire DOM checked event (right?) and if wrapped in Buttonset, update its checked option and fire optionChange event.
            this.rootElement.addClass( "oj-checked" );
            
            // No need to fire click event, since not appropriate for DownArrow, and already fired for user click.
            
            this._launchingMenu = true; // TODO: same considerations as todo on _menuVisible below???
            menu.show(event, {"launcher": this.element, "focus": focus});
            this._menuVisible = true; // TODO: not true if show is cancelled by beforeShow listener.  Prob need an internal __showCancelled event for this?
        }
    },
    
    /* 
     * Dismisses the menuButton menu if there is one, and if either we're not disabled or force is true
     * 
     * @param event optional
     * @param menu optional. pass it if already have it
     * @param: force: if true, will skip the disabled check; useful when dismissing *because* we've become disabled
     */
    _dismissMenu: function(event, menu, force) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        //console.log(this.options.label + ": button._dismissMenu called");
        // TBD: could bail at top if oj-checked not set
        if (!force && this.options.disabled) 
            return;
        if (!menu)
            menu = this._getMenu();
        if (menu)
            menu.__dismiss(event); // causes _menuDismissHandler to be called
    },
    
    /*
     * Handles menu dismissals, whether or not we dismissed it ourselves.  
     * See comments on similar code in _showMenu().
     * 
     * @param event must remain optional, since some callers of _dismissMenu have no event
     * 
     * TODO: need a beforeShow listener that calls this same handler *if* the launch was by something else, i.e. 
     * if they steal our menu, we uncheck the button.
     */
    _menuDismissHandler: function(event) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        //console.log(this.options.label + ": button._menuDismissHandler called");
        if ( this.type === "button" )
            // then only reason for .oj-checked to be present is if it's an open menu button, 
            // in which case remove the class since the menu is being dismissed
            this.rootElement.removeClass( "oj-checked" );
        // else it's not a menu button.  Probably never called in that case, but if it is, there's no need to 
        // clear oj-checked.  If this is a toggle button, doing so w/b harmful.
        
        this._menuVisible = false;
    },
    
    /*
     * Shows or dismisses the menu.
     * 
     * @param event required
     * @param menu optional. pass it if already have it
     */
    _toggleMenu: function(event, menu) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (this._menuVisible)
        {
            //console.log(this.options.label + ": _toggleMenu dismissing");
            this._dismissMenu(event, menu);
        } else 
        {
            //console.log(this.options.label + ": _toggleMenu showing");
            this._showMenu(event, "none", menu);
        }
    }
    
    // API doc for inherited methods with no JS in this file:

    /**
     * Removes the button functionality completely. This will return the element back to its pre-init state.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojButton#destroy
     * @memberof! oj.ojButton
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
     * $( ".selector" ).ojButton( "destroy" );
     */
});

/**
 * @class
 * @name oj.ojButtonset
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="buttonsetOverview-section">
 *   JET Buttonset Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#buttonsetOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant visual and semantic grouping container for [JET Buttons]{@link oj.ojButton}.
 * 
 * <p>The JET Buttonset component can be used to group related buttons, such as a group of radios or checkboxes.  Buttonset provides
 * visual and semantic grouping and WAI-ARIA-compliant focus management.
 * 
 * <p>When a Buttonset is created or refreshed, it creates JET Buttons out of all contained DOM elements supported by JET Button 
 * that are not already Buttons, by calling <code class="prettyprint">.ojButton()</code> on them.
 * 
 * <p>A buttonset that contains radios should contain all radios in the radio group.  Checkboxes and radios in the buttonset should specify the 
 * <code class="prettyprint">value</code> attribute, since the <code class="prettyprint">checked</code> option refers to that attribute.
 * 
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction and Focus management
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>JET Buttonset manages its own focus.  It maintains a single tabstop, with arrow-key navigation within the buttonset.  This navigation 
 * skips disabled buttons, wraps around at the end, and adjusts correctly in RTL.
 * 
 * <p> When tabbing back into the buttonset, focus goes to the most recently focused button.  (To address a browser limitation, if that button is an 
 * unchecked radio having a checked groupmate, the latter is focused instead.)
 * 
 * <p>As with any JET Button, buttons in a buttonset are activated with <kbd>Enter</kbd> or <kbd>Spacebar</kbd>.  
 * 
 * <p>The application should not do anything to interfere with the focus management.  E.g. it should not set the <code class="prettyprint">tabindex</code> of the buttons, or 
 * do anything that prevents enabled buttons from being a tabstop.  Also, enabled buttons should remain user-visible, without which arrow-key
 * navigation to the button would cause the focus to seemingly disappear.
 * 
 * <p>The buttonset's focus management should be turned off when placing the buttonset in a [JET Toolbar]{@link oj.ojToolbar}.  See the <code class="prettyprint">focusManagement</code> option.
 * 
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>JET Buttonset takes care of focus management, as noted above, and setting <code class="prettyprint">role="group"</code> on the buttonset element.  
 * 
 * <p>In addition, as shown in the online demos, the application is responsible for applying <code class="prettyprint">aria-label</code> and/or 
 * <code class="prettyprint">aria-controls</code> attributes like the following to the buttonset element, if applicable per the instructions that follow:
 * 
 * <pre class="prettyprint">
 * <code>aria-label="Choose only one beverage.  Use left and right arrow keys to navigate."
 * aria-controls="myTextEditor"
 * </code></pre>
 * 
 * <p>A sentence like the first is appropriate for a buttonset consisting of a radio group, in order to convey the "select one" semantics 
 * to AT users.  It should be omitted for checkboxes and push buttons.
 * 
 * <p>The second sentence lets the user know how to navigate.  It should be omitted if the buttonset's focus management is overridden 
 * by another component such as a containing Toolbar. (Note that Buttonsets inside Toolbars are not yet supported in v0.5.)
 * 
 * <p>The <code class="prettyprint">aria-controls</code> attribute is appropriate if the buttonset is controlling something else on the page, e.g. 
 * bold/italic/underline buttons controlling a rich text editor.  
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the buttonset must be <code class="prettyprint">refresh()</code>ed.  
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-buttonset</code> pseudo-selector can be used in jQuery expressions to select JET Buttonsets.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-buttonset" ) // selects all JET Buttonsets on the page
 * $myEventTarget.closest( ":oj-buttonset" ) // selects the closest ancestor that is a JET Buttonset
 * </code></pre>
 * 
 * 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <p>For components like Buttonset and Menu that contain a number of like items, applications may wish to use a <code class="prettyprint">foreach</code> Knockout binding 
 * to stamp out the contents.  This binding cannot live on the same node as the JET <code class="prettyprint">ojComponent</code> binding, and must instead live on a nested 
 * virtual element as follows:
 * 
 * <pre class="prettyprint">
 * <code>&lt;div id="radioButtonset" data-bind="ojComponent: {component: 'ojButtonset'}"
 *      aria-label="Choose only one beverage.  Use left and right arrow keys to navigate.">
 *     &lt;!-- ko foreach: drinkRadios -->
 *         &lt;label data-bind="attr: {for: id}, text: label">&lt;/label>
 *         &lt;input type="radio" name="beverage"
 *                data-bind="value: id, click: $parent.offerAdvice, attr: {id: id, checked: id === $parent.initialDrink}"/>
 *     &lt;!-- /ko -->
 * &lt;/div>
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <li>All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.</li>
 *   <li>JQUI Buttonset has an undocumented <code class="prettyprint">items</code> option allowing apps to get and set the selector used by Buttonset to find all its 
 *       buttonizable descendants.  This option has been removed in JET, as we do not want this to be settable.</li>
 *   <li>The focus management functionality is new in JET.</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "buttonset" or "menu".  
 * E.g. the JQUI <code class="prettyprint">buttonsetcreate</code> event is <code class="prettyprint">ojcreate</code> in JET, as shown in the doc for that event.
 * Reason:  This makes the API more powerful.  It allows apps to listen to "foo" events from <em>all</em> JET components via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", myFunc);
 * </code></pre>
 * 
 * or to "foo" events only from JET Buttonsets (the JQUI functionality) via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", ":oj-buttonset", myFunc);
 * </code></pre>
 * 
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * 
 * @desc Creates a JET Buttonset.  If called after the buttonset is already created, is equivalent to the 
 * "set many options" overload of <code class="prettyprint">option()</code>.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the buttonset with no options specified:</caption>
 * $( ".selector" ).ojButtonset();
 * 
 * @example <caption>Initialize the buttonset with some options and callbacks specified:</caption>
 * $( ".selector" ).ojButtonset( { "disabled": true, "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize the buttonset via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="beverages" data-bind="ojComponent: { component: 'ojButtonset', 
 *                                               disabled: true, 
 *                                               create: setupButtonset }">
 */
oj.__registerWidget("oj.ojButtonset", $['oj']['baseComponent'], 
{
    version: "1.0.0", // TODO: doesn't get renamed even when unquoted and not in (our) externs.js file, so I'm leaving it for now.  Is it used anywhere, e.g. build tool?  If so, should prob quote or extern or something.  If not, should it get moved to @version (if that exists) or similar, or just remove, or...?
    
    // TODO: See notes for blurb to put in JET for JQUI Devs doc, that we're removing JQUI's undocumented public "items " API.  
    //       If we reinstate this option, need to restore @expose tag, and decide doc it.
    // TODO: do we want to keep the :data selector at the end?  Especially now that I'm planning to instantiate new buttons but not 
    //       refresh old ones?  Review how this selector is used.  If keep it, reconfirm that the param to data is correct under the new namespace.
    // private.  I moved from options to here since no longer public option.  Leave unquoted so gets renamed by GCC as desired.
    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(oj-ojButton)",
    
    widgetEventPrefix : "oj", 

    // TODO: is it preferred to have an empty options object or not declare it at all?
    options: // options is in externs.js.  TODO: same as other prototype fields.
    {
        /**
         * The <code class="prettyprint">checked</code> option indicates which radio or checkboxes in the Buttonset are selected.
         * It corresponds to the <code class="prettyprint">value</code> attribute of those elements, which should always be set.
         * 
         * <p>If this Buttonset consists of a single radio group, and no other buttons, then <code class="prettyprint">checked</code> 
         * is a string equal to the <code class="prettyprint">value</code> attribute of the checked radio.  The option is 
         * <code class="prettyprint">null</code> if and only if no radio is selected.  Thus, an n-radio group has n+1 valid 
         * <code class="prettyprint">checked</code> values: the n radio values, and <code class="prettyprint">null</code> .
         * 
         * <p>If this Buttonset consists of one or more checkboxes, and no other buttons, then <code class="prettyprint">checked</code> is 
         * a possibly empty, non-<code class="prettyprint">null</code> string array containing the <code class="prettyprint">value</code> 
         * attributes of the checked checkboxes.  This array has "set", not "list", semantics; i.e. order is neither important nor guaranteed.
         * Thus, an n-checkbox set has 2^n valid <code class="prettyprint">checked</code> values: the 2^n possible subsets of n checkboxes.
         * 
         * <p>In all other cases, <code class="prettyprint">checked</code> is <code class="prettyprint">null</code>.
         * 
         * <p>An <code class="prettyprint">optionChange</code> event is fired whenever this option changes, whether due to user interaction 
         * or programmatic intervention.  If the value is the same as the previous value (using order-independent "set" equality for 
         * checkboxes), no event will be fired.
         * 
         * @expose
         * @memberof! oj.ojButtonset
         * @instance
         * @type {?string|Array.<string>|undefined}
         * @default If not initially set, is initialized to reflect the initial DOM state
         * 
         * @example <caption>Initialize a buttonset with the <code class="prettyprint">checked</code> option specified:</caption>
         * // radio
         * $( ".selector" ).ojButtonset( { "checked": "tea" } );
         * 
         * // checkbox
         * $( ".selector" ).ojButtonset( { "checked": ["bold", "italic"] } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">checked</code> option, after initialization:</caption>
         * // getter
         * var display = $( ".selector" ).ojButtonset( "option", "checked" );
         * 
         * // radio setter
         * $( ".selector" ).ojButtonset( "option", "checked", "tea" );
         * 
         * // checkbox setter
         * $( ".selector" ).ojButtonset( "option", "checked", ["bold", "italic"] );
         */
        checked: undefined, // initial value that's different from any valid values like null, so _create() can tell whether app set it.
                            // At Create time will definitely be replaced with valid value.
        
        /**
         * If the <code class="prettyprint">disabled</code> option is set to <code class="prettyprint">true</code> at create time, then 
         * all its buttons will be disabled.  If it is <code class="prettyprint">false</code> at create time, then each button's 
         * <code class="prettyprint">disabled</code> status will be set from the button's API and DOM in the same way 
         * as a standalone JET Button.
         * 
         * <p>Setting the <code class="prettyprint">disabled</code> option after creation will enable or disable all contained buttons.  Enabling or 
         * disabling the individual buttons will not update the value of Buttonset's <code class="prettyprint">disabled</code> option.
         * 
         * @member
         * @name disabled
         * @memberof! oj.ojButtonset
         * @instance
         * @type {boolean}
         * @default <code class="prettyprint">false</code>
         * 
         * @example <caption>Initialize the buttonset with the <code class="prettyprint">disabled</code> option specified:</caption>
         * $( ".selector" ).ojButtonset( { "disabled": true } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
         * // getter (does not reflect changes made directly to the buttons)
         * var disabled = $( ".selector" ).ojButtonset( "option", "disabled" );
         * 
         * // setter
         * $( ".selector" ).ojButtonset( "option", "disabled", true );
         */
        // disabled option declared in superclass, but we still want the above API doc

        /**
         * The <code class="prettyprint">focusManagement</code> option should be set to <code class="prettyprint">"none"</code> when the 
         * Buttonset is placed in a [JET Toolbar]{@link oj.ojToolbar}.  This allows the Toolbar to manage the focus with no interference from the Buttonset, 
         * so that arrow keys move within the entire Toolbar, not just within the Buttonset.  
         * 
         * @expose
         * @memberof! oj.ojButtonset
         * @instance
         * @type {string}
         * @default <code class="prettyprint">"oneTabstop"</code>
         * 
         * @example <caption>Initialize the buttonset with the <code class="prettyprint">focusManagement</code> option specified:</caption>
         * $( ".selector" ).ojButtonset( { "focusManagement": "none" } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">focusManagement</code> option, after initialization:</caption>
         * // getter
         * var display = $( ".selector" ).ojButtonset( "option", "focusManagement" );
         * 
         * // setter
         * $( ".selector" ).ojButtonset( "option", "focusManagement", "none" );
         */
        focusManagement: "oneTabstop",
        
        // Events
        
        /**
         * Fired whenever a supported component option changes, whether due to user interaction or programmatic 
         * intervention.  If the new value is the same as the previous value, no event will be fired.
         * 
         * <p>Currently there is one supported option, <code class="prettyprint">checked</code>.  Additional 
         * options may be supported in the future, so listeners should verify which option is changing 
         * before taking any action.
         * 
         * @expose 
         * @event 
         * @memberof! oj.ojButtonset
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {string} ui.option the name of the option that is changing
         * @property {?string|Array.<string>} ui.previousValue the previous value of the option.
         *     <code class="prettyprint">null</code> iff the previous value was <code class="prettyprint">null</code>.
         * @property {?string|Array.<string>} ui.value the current value of the option.
         *     <code class="prettyprint">null</code> iff the current value is <code class="prettyprint">null</code>.
         * @property {Object} ui.optionMetadata information about the option that is changing
         * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or 
         *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
         * 
         * @example <caption>Initialize the buttonset with the <code class="prettyprint">optionChange</code> callback specified:</caption>
         * $( ".selector" ).ojButtonset({
         *     "optionChange": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
         * $( ".selector" ).on( "ojoptionchange", function( event, ui ) {} );
         */
        optionChange: null
        
        /**
         * Triggered when the buttonset is created.
         *
         * @event 
         * @name create
         * @memberof! oj.ojButtonset
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Empty object included for consistency with other events
         * 
         * @example <caption>Initialize the buttonset with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojButtonset({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */
        // create event declared in superclass, but we still want the above API doc
    },
    
    // If this is a radio or checkbox buttonset, and the specified checked value is valid, 
    //   then sets it on the buttons' checked properties in the DOM, and returns true,
    // Else it's an invalid value, or it's the non-radio, non-checkbox case and null was passed, which is valid for that case, 
    //   then returns false without changing DOM.
    // Does not set oj-checked or aria-pressed, so must call _applyCheckedStateFromDom() after this.  
    //   TBD: optionally, this method could do that work, perhaps controlled by a param
    // This method is called by _setOption("checked", ...) and _create > _setup.  
    // Does NOT require the buttons to already be JET Buttons (useful for _setup caller).
    _setCheckedOnDom: function(checked, $buttons) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var type = $.type(checked);
        var valid;
        
        // If caller passes null there are 3 cases: (the radio branch handles null in all cases)
        // - This is a radio group, for which null means "no radio checked".  The radio branch will uncheck all radios
        //   and return true indicating that it was a valid value so it updated the DOM.
        // - This is a checkbox set, for which null is an invalid value.  The radio branch will correctly do nothing and return false.  
        // - Neither radio nor checkbox case, for which null is the one and only valid value.  The radio branch will do nothing 
        //   (correct; there's nothing to set on the DOM) and return false.  The only caller than calls in this case is the 
        //   _create > _setup caller, for which either return value is OK, since it can either keep the null value or call 
        //   _getCheckedFromDom which will return null.  _setOption doesn't call this method in this 3rd case.  
        if (type === "string" || type === "null") // radio
        {
            // before setting *any* buttons, verify that *all* buttons are radios in same group, and that the checked 
            // value to be set is null or matches one of the radio values
            var name = $buttons[0].name;
            valid = (name || $buttons.length<=1) // if name is "" and there's >1 radio, then they're in separate radio groups
                && $buttons.filter("input[type=radio][name=" + name + "]").length === $buttons.length 
                && (checked===null || $buttons.filter("[value=" + checked + "]").length);
            
            if ( valid )
            {
                $buttons.each(function() {
                    this.checked = (this.value === checked);
                });
            }
            
            return valid;
        } else if (type === "array") // checkbox
        {
            // before setting any buttons, verify that the checked value to be set is valid:
            
            // verify that all buttons are checkboxes, since is array
            valid = $buttons.filter("input[type=checkbox]").length === $buttons.length;
            
            // in a sorted copy of the array (concat makes a copy), verify no dupes and 
            // that all entries are values in the buttonset
            var last;
            valid = valid && checked.concat().sort().every(function(elem, index, array) {
                var retVal = elem !== last && $buttons.filter("[value=" + elem + "]").length;
                last = elem;
                return retVal;
            });
            
            if (valid)
            {
                $buttons.each(function() {
                    this.checked = (checked.indexOf(this.value) > -1);
                });
            }
            return valid;
        } else 
        {
            // didn't set on DOM b/c value was invalid (not the right type for *any* kind of buttonset)
            return false; 
        }
    },
    
    // if all buttons are radios with same group, returns value attr of selected radio (string), or null if none selected
    // else if all buttons are checkboxes, returns non-null, possibly empty string array containing values of selected checkboxes
    // else returns undefined.  In the API we use null, not undefined, for this case, so callers should map undefined to null before setting on DOM. 
    _getCheckedFromDom: function($buttons) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var checked = undefined;
        var isRadio = null;
        var name = null;
        
        $buttons.each(function(index) {
            // at this point, all previous buttons, if any, were all radios in same group, or were all checkboxes
            var tagName = this.tagName.toLowerCase();
            if (tagName !== "input")
            {
                checked = undefined;
                return false; // stop iterating
            }
            
            var currentType = this.type.toLowerCase();
            var currentIsRadio;
            var currentName;
            
            if (currentType === "radio"){
                currentIsRadio = true;
                currentName = this.name.toLowerCase();
            } else if (currentType === "checkbox")
            {
                currentIsRadio = false;
                currentName = null;
            } else 
            {
                checked = undefined;
                return false; // stop iterating
            }
            
            // at this point, current button is input of type radio or checkbox
            
            // If this is not the first button, then bail if:
            // - this is a radio and previous were checkboxes or vice versa
            // - this is a radio in a different group than previous ones, which can happen 
            //   if the group names are different, or if the names are all "", in which 
            //   case each radio is in a separate radio group.
            if ( (checked !== undefined) // must be !== not != 
                 && ( currentIsRadio !== isRadio 
                      || currentName !== name
                      || (isRadio && !name) ) )
            { 
                checked = undefined;
                return false; // stop iterating
            }
            
            // at this point, all buttons so far including this one are either all radios in same group, or are all checkboxes
            
            if (checked === undefined) // this is first button
            {
                checked = currentIsRadio 
                    ? this.checked ? this.value : null
                    : this.checked ? [this.value] : [];
                isRadio = currentIsRadio;
                name = currentName;
            } else if (this.checked)
            {
                if (isRadio) 
                    checked = this.value;
                else
                    checked.push(this.value);
            } // else not first button and not checked, so leave "checked" at whatever value we set on previous iteration
        });
        
        return checked;
    },
    
    // are 2 checked option values equal?
    _checkedEquals: function(checked1, checked2) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        // handle null, string, and (rare) identically equal arrays
        if (checked1 === checked2)
            return true;
        else // handle arrays.  order needn't be same
            return $.type(checked1) === "array" && $.type(checked2) === "array" 
                   && !$(checked1).not(checked2).length && !$(checked2).not(checked1).length;
        
    },
    
    _create: function() // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        this.element
            .addClass( "oj-buttonset oj-widget" )
            .attr( "role", "group" );
        
        // call _setup from _create, not _init, so create listeners (called after _create before _init) see a fully inited component.
        // We don't implement _init at all, since it's intended to perform startup behaviors like autoOpen, 
        // not initing state or performing a refresh, and we have no such startup behaviors.
        this._setup(true);
        
        this._super(); // TODO: call this at beginning of method.  This will happen as part of the JET create-time refactoring.
    },

    /* 
     * Component developers: This API and functionality is subject to change pending architectural review!
     * See the baseComponent method for preliminary API doc.
     */
    _showContextMenu: function(menu, event)
    {
      // TODO: currently CM not supported when focusManagement off, because there's not necessarily a tabbable thing in the buttonset if 
      // focus is somewhere else in the toolbar.  Need to put focus on (say) body in that case.  New focus() solution should address this sort of thing.
      menu.show(event, {"launcher": this.element.find(":oj-button[tabindex=0]"), "focus": "menu"});
    },

    _setOption: function( key, value ) // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        var bail = false;
        
        // if Button is calling this method due to user interaction checking a button, this is set; else it's not.
        var optionChangeOriginalEvent = this._optionChangeOriginalEvent;
        this._optionChangeOriginalEvent = null;
        
        // JIM TODO: for which button options should this be supported?  Part of broader discussion of whether container components 
        // should recursively call API on their children, e.g. refresh(), destroy().
        // TODO: this should automatically refresh the component to pick up the new disabled statuses, so app doesn't have to.
        if ( key === "disabled" )
            this.$buttons.ojButton( "option", key, value );
        
        // if app called option, but not if called because user clicked button.  In latter case we know we 
        // passed a valid non-undefined value, and DOM is already up to date.
        if ( key === "checked" && !optionChangeOriginalEvent) 
        {
            if (value === null && this._getCheckedFromDom(this.$buttons) === undefined)
            {
                // _getCheckedFromDom() returns undefined iff buttonset is neither a single radio group nor a checkbox set.
                // In this case, when they pass null (the only valid value), there's nothing to set on DOM, 
                // but let_super() call and event firing logic run since it's a valid value.  The event almost always 
                // won't fire since the old value would have been null too, but if it was a different value the event 
                // will fire as it should.  The only way that could happen is if this buttonset was previously a checkbox set 
                // or single radio group, but now is not (e.g. incompatible button added), and buttonset hasn't been refreshed since then.
            } else 
            {
                var successful = this._setCheckedOnDom(value, this.$buttons);
                if (successful) 
                {
                    // Set oj-checked/aria-pressed on all buttons' DOM:
                    this.$buttons.each(function() {
                        $( this ).data( "oj-ojButton" )._applyCheckedStateFromDom(false);
                    });
                    // Let _super() call and event firing happen.
                } else 
                { // invalid value
                    // Don't set anything on DOM.
                    bail = true; // don't fire event or call _super()
                    // TODO: Maybe log.
                }
            }
        }
        
        // TODO: handle focusManagement option
        
        if (!bail)
        {
            var previousValue = this.options[key];
            this._super( key, value );
            // TBD: optionally could reference some metadata somewhere rather than hard-coding list of supported options and their equals methods here,
            //      e.g. static buttonsetOptionChangeMap = { "checked" : {equals: checkedEquals} }
            if ( key === "checked" ) // the only supported optionChange option
                this._fireOptionChange(key, previousValue, value, this._checkedEquals, optionChangeOriginalEvent); 
        }
    },
    
    // TBD: should this method be pushed up to superclass?
    _fireOptionChange: function(key, previousValue, value, equals, originalEvent) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (!equals.call(this, previousValue, value))
        {
            var ui = { 
                "option": key,
                "previousValue": previousValue, 
                "value": value,
                // (originalEvent is non-null) iff (option change is due to user interaction) iff (binding should write back the value)
                "optionMetadata": {"writeback": originalEvent ? "shouldWrite" : "shouldNotWrite"}
            };
            this._trigger( "optionChange", originalEvent, ui );
        }
    },
    
    // TODO: mention whether existing buttons are refreshed, and any params we add, when that discussion complete.
    //       Mention that autom'ly use "onlyThis" option, to avoid n^2 work.
    /**
     * Refreshes the buttonset, including the following:
     * 
     * <ul>
     *   <li>Creates JET Buttons out of all contained DOM elements supported by JET Button that are not already Buttons, by calling <code class="prettyprint">.ojButton()</code> on them.
     *   <li>Re-applies focus management / keyboard navigation.
     *   <li>Applies special styles to the first and last button of the buttonset (e.g. for rounded corners, depending on theming).
     *   <li>Rechecks the reading direction (LTR vs. RTL).
     * </ul>
     * 
     * <p>A <code class="prettyprint">refresh()</code> is required in the following circumstances:
     * <ul>
     *   <li>After buttons are added to or removed from the buttonset.</li>
     *   <li>After a change to the <code class="prettyprint">disabled</code> status of any of the buttons in the buttonset.</li>
     *   <li>After the reading direction (LTR vs. RTL) changes.</li>
     * </ul>
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojButtonset
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojButtonset( "refresh" );
     */
    refresh: function() // Override of public base class method (unlike JQUI).  Method name needn't be quoted since is in externs.js.
    {
        this._super();
        this._setup(false);
    },
    
    _setup: function(isCreate) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var self = this;
        this.isRtl = this._GetReadingDirection() === "rtl";
        
        // remove empty text nodes that are generated if there's any whitespace between the tags in the HTML.
        // The inline-block display means that these text nodes display as a space between the buttons.
        // TBD: this seems to be the most efficient way to do this in JQ; maybe use JS.
        this.element.find(":not(iframe)").andSelf().contents().filter(function() {
            return this.nodeType === 3 && this.nodeValue.trim() === "";
        }).remove();
        
        // TODO: don't cache this for general use.  But I think we do need to cache it so that the next refresh
        // can unbind all buttons, not just the ones that are still inside the buttonset.
        this.$buttons = this.element.find( this.items );
        
        if (isCreate) 
        {
            // At create time, if app provided a valid "checked" option, it wins over whatever's in the DOM.
            var successful = this._setCheckedOnDom(this.options.checked, this.$buttons);
            // Successful or not, don't call _setOption(), since don't want to fire optionChange event at create time
            // (The JQUI framework does NOT call _setOption at create time.)  Refresh happens below.
            if (!successful) // option value wasn't valid
            {
                var newChecked = this._getCheckedFromDom(this.$buttons);
                this.options.checked = newChecked === undefined ? null : newChecked;
            }
        } else 
        {
            // There are 2 ways the DOM and checked option could be out of synch at refresh time:
            // 1. An existing JET Button, that was already in this Buttonset, may have had its HTML checked prop 
            //    set directly by the app, which we don't support.  The Buttonset API should have been called instead.
            // 2. The set of contained buttons may have changed (where the current buttons may or may not have already 
            //    been buttonized).  The type of set (checkboxes, radios, or other) may even have changed.
            // #2 is the sort of thing that refresh() is for: a DOM change for which there is no API, so the right thing 
            // for the app to do is to change the DOM and call refresh()).
            // Even though we don't wish to support #1 (DOM change that should have been done via the API), we have 
            // to support #2.  It would be too much trouble to write our support for #2 in such a way as to make sure 
            // that #1 doesn't work.
            // In any case, refresh() should refresh the API from the DOM, not refresh the DOM from the API.
            // Don't call _setOption() here, since it does redundant work.  (_applyCheckedStateFromDom() is already 
            // called below.)  So set ivar and fire event directly.  We decided to fire optionChange event even in this 
            // case, when refresh() notices that the checked state changed underneath us.  
            var newChecked = this._getCheckedFromDom(this.$buttons);
            newChecked = (newChecked === undefined) ? null : newChecked;
            var oldChecked = this.options.checked;
        
            this.options.checked = newChecked;
            var shouldFire = true; // fire event at end, not in the middle
        }
        
        // Create or not, successful set or not, checked option and checked props are now in synch, so we just need to 
        // set .oj-checked and aria-pressed on each button.  This is done below by either the _applyCheckedStateFromDom()
        // call (for existing buttons) or the initializer call (for new buttons).
        
        this.$buttons
            // refresh any buttons underneath us that already exist, like JQUI does
            // TODO:
            // - Update class API doc to indicate that refresh() recursively refreshes Bset's buttons.
            // - Now that Bset has a checked option, this recursive refreshing is necessary in more cases than before.  
            //   Review whether it's still desirable to add a refresh() param that would allow turning off this recursive
            //   refreshing.  That was previously approved, but changing the default (compared to JQUI) was not approved.
            //   The refresh param wouldn't help for creates; for that we'd need to add a Buttonset option.  
            //   See also _destroy() code comment.
            .filter( ":oj-button" )
                .ojButton( "refresh" )
                .each(function() {
                    $( this ).data( "oj-ojButton" )._applyCheckedStateFromDom(false); // set .oj-checked and aria-pressed
                })
            .end()
            
            // Create buttons underneath us
            .not( ":oj-button" )
                .ojButton() // sets .oj-checked and aria-pressed
            .end()
        
            // Update rounded corners
            // TODO: sounds like Gab wants to lose this code and do rounded corners a different way (descendant selectors?)
            .map(function() {
                return $( this ).ojButton( "widget" )[ 0 ];
            })
                .removeClass( "oj-buttonset-corner-start oj-buttonset-corner-end" )
                .filter( ":first" )
                    .addClass( "oj-buttonset-corner-start" )
                .end()
                .filter( ":last" )
                    .addClass( "oj-buttonset-corner-end" )
                .end()
            .end()
            
        // See disabled option's jsdoc for description of how disabled is handled at create and refresh time.
        // Must do this after creating the buttons above since at create time, a true value for Bset.disabled should win over the DOM and Button API.
        // Must do this before the focus mgmt code, which needs to know which buttons are disabled.
        if (isCreate && this.options.disabled)
            this.$buttons.ojButton("option", "disabled", true);
        
        if (this.options.focusManagement==="oneTabstop")
        {
            // When buttonset is binding listeners to buttons, use the Buttonset's eventNamespace, not the Button's 
            // eventNamespace, to facilitate later unbinding only the Buttonset listeners.
        
            // For checkbox/radio, we're binding to inputs, not labels.
            
            // Put listeners on every button, b/c it's too unreliable to put them on the buttonset node and rely on event bubbling.
            // - E.g. bubbling doesn't work for antonym buttons (is this still true after the refactoring?) -- see comment on Button._setLabelOption().
            // - Likewise, focus mgmt can't just break if app listener stops propagation.
            // - Both of these problems still happen when using the delegation / selector overload of .on(); there is no special JQ bubbling magic.
            
            // TODO: Button itself already registers listeners for events like click and change.  Make sure we coord OK.  If it 
            // matters which handler (B or BS) is bound first, then must fix or doc.
            
            // TODO: If possible, find a way to bind to $newButtons.not($oldButtons), rather than unbind/bind on every one.  Presumably cheaper, 
            // (unless computing that set difference is expensive), and makes sure that any app bindings that are added after ours *stay* after ours.
            // This set diff includes both new buttons that were created since the last time this logic ran, and existing buttons that are now 
            // underneath this Buttonset.
            this.$buttons
                .unbind( "keydown" + this.eventNamespace )
                .bind( "keydown" + this.eventNamespace, function(event) { 
                    self._handleKeyDown(event, $(this)); 
                })

                .unbind( "click" + this.eventNamespace )
                .bind( "click" + this.eventNamespace, function(event) {
                    if ( !clickDragged && !$(this).ojButton("option", "disabled") ) 
                    { 
                        // Normally the button will be tabbable after the click, since (a) if we reach here, the clicked button is enabled, and 
                        // (b) an unchecked radio before the click will normally be checked after the click.  But just in case it's unchecked 
                        // (e.g. due to app listener), we let callee run it thru _mapToTabbable() before using, as usual.
                        self._setTabStop( $(this) );
                    }
                })
                .unbind( "focus" + this.eventNamespace )
                .bind( "focus" + this.eventNamespace, function(event) { 
                    self._setTabStop( $(this) );
                });
        
            // the subset of Buttonset buttons that are enabled.  Disabled buttons are not tabbable.
            // TODO: don't cache this
            this.$enabledButtons = this.$buttons.filter(function(index) {
                return !$( this ).ojButton( "option", "disabled" );
            });

            this._initTabindexes(isCreate);
        }
        
        if (shouldFire)
            this._fireOptionChange("checked", oldChecked, newChecked, this._checkedEquals, null); 
    },
    
    // For create, make only the first enabled button tabbable.  (We decided to have Shift-Tab go to first, not last, button.)
    // For refreshes, keep the existing tabstop if we can, otherwise proceed as with create.
    // Either way, if that button is a radio and some radio in its group is checked, make that one tabbable instead.
    // If there are no enabled buttons, makes them all untabbable.
    // No return value.
    _initTabindexes: function(isCreate) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        // even for refreshes where we'll wind up keeping the same tabstop, must make everything untabbable first, to ensure any new buttons become untabbable.
        var $last = $(this._lastTabStop);
        this._lastTabStop = undefined;
        this.$buttons.attr( "tabindex", "-1" );
        var $newTabStop; // callee might map this to radio groupmate
        
        // TODO: for refreshes when $last is a disabled radio with a checked enabled groupmate and they are in the buttonset, the groupmate would be 
        // a valid tabstop, but this defaults to the first.
        if (isCreate || !$last.is(this.$enabledButtons)) 
        {
            // is create, or is refresh but must treat like create b/c $last is empty, or not enabled, or no longer in the buttonset
            $newTabStop = this.$enabledButtons.first(); // if empty (none enabled), no tabstop will be set
        } else 
        {
            // is a refresh, and $last is non-empty and is an enabled button still in the buttonset.  May be a radio whose groupmate
            // has become checked, in which case callee will map it to that groupmate.
            $newTabStop = $last;
        }
        this._setTabStop( $newTabStop );
    },
    
    // For each button in $button (in our usage always 0-1 button hence $button singular), if that button is an unchecked radio 
    // with a checked groupmate (which means it's not tabbable), then map it to the checked one (checked enabled radios are 
    // tabbable, and we know it's enabled per the argument below).
    // 
    // $button contains 0 or more buttons to map.  Must be enabled since disabled buttons aren't tabbable.
    // Returns the mapped JQ object (which the caller will make the tabstop).
    // 
    // We know that this.$enabledButtons contains all buttons in $button, and all of their potentially checked radio-groupmates, since:
    // - The above "enabled" requirement guarantees that $button's contents are all in $enabledButtons.
    // - The prohibition against radio groupmates that are not in the buttonset, and the prohibition against checked disabled groupmates 
    //   of enabled radios, guarantee that if $button is a radio, then all of its potentially checked groupmates are enabled and thus in 
    //   $enabledButtons.
    // 
    // Firefox browser issue:   (TODO: should we doc this?  File FF and/or JET bug?)
    // 
    // When this method maps an unchecked radio to its checked groupmate, the caller ensures that the former still has focus, but the latter
    // is the tabstop for when the user tabs out and back in.  When tabbing / Shift-Tabbing from the unchecked radio in the direction of the 
    // checked one, Chrome and IE9 are smart enough to tab out of the radio group to the adjacent tabstop as desired.  But in FF, focus goes to 
    // the checked one, which is not what we want.
    // 
    // Reason: Chrome and IE9 are smart enough never to tab within a radio group.  If focus is in the radio group, Tab and Shift-Tab exit the radio group.
    // But in FF, [a radio is reachable via Tab/Shift-Tab from within the group] if [it's enabled, tabindex != -1, and either checked or has no 
    // checked groupmates], i.e. [it would be reachable via Tab/Shift-Tab from outside the group if all its groupmates happened to be untabbable 
    // (e.g. disabled)].  In other words, FF is the only one that fails to distinguish between radios that could be valid tabstops from outside, and
    // those that should be valid tabstops from inside.  
    // 
    // This impl improves on the native behavior.  In FF, in an unchecked radio group, every single radio is a tabstop.  Our use of tabindex=-1 
    // guarantees that we never tab within the group in that case.  It's only a checked groupmate that can be tabbed to from within. (So at 
    // most one unwanted tabstop.)
    // 
    // After much time and effort, the latter issue seems to be infeasible to fix in any robust, non-brittle way.  E.g.:
    // - Clearing all tabstops and restoring on tab-out of buttonset:  FF provides no reliable way to find out whether a blur is exiting the entire 
    //   buttonset.  The obvious setTimeout workaround needed to be unacceptably long (e.g. 250ms) and even then was unreliable.  If we ever fail 
    //   to restore the tabstop, the buttonset becomes untabbable and inaccessible.
    // - Every other approach had similar robustness issues. 
    _mapToTabbable: function( $button ) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var $enabledButtons = this.$enabledButtons;
        return $button.map(function(index, elem) {
            // Buttons other than radios, and checked radios, are always tabbable if they're enabled, which this method requires.
            // Radios w/ name="" (incl name omitted) are not in a radio group, not even with other radios with w/ name="".  Radios 
            // with no groupmates are always tabbable, since either they're checked, or they're unchecked with no checked groupmate.
            if (elem.type != "radio" || elem.checked || elem.name == "")
                return elem;
            else 
            {
                // elem is unchecked radio in real (not "") group, which is tabbable iff no groupmate is checked.  Per above doc, we know that 
                // all of its potentially checked groupmates are in $enabledButtons.
                var $checkedRadio = _radioGroup(elem, $enabledButtons).filter(":checked");
                return ($checkedRadio.length ? $checkedRadio[0] : elem);
            }
        });
    },
    
    // Set which button is in the tab sequence.
    // $button should contain 0 or 1 button to be made tabbable (since at most one should be tabbable at a time).
    //   If 0 (i.e. no enabled buttons), all will become untabbable.  If 1, it must be tabbable in every way (e.g. enabled) except possibly 
    //   being an unchecked radio with a checked groupmate, which this method will map to its checked groupmate, which 
    //   we know is enabled thus tabbable since we require that checked radios with enabled groupmates not be disabled.  
    // No return value.
    _setTabStop: function( $button ) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
//        if (!window.setTabStopCounter) window.setTabStopCounter=1; // REMOVE, is only for console.log's
//        console.log("in _setTabStop: " + window.setTabStopCounter++ + ".  Orig (premap) button checked: " + $button[0].checked); // + " and is:");
//        console.log($button[0]);
        
        $button = this._mapToTabbable( $button );
        var button = $button[0]; // button is undefined iff $button is empty iff we need to clear all tabstops b/c there are no enabled buttons to make tabbable
        var last = this._lastTabStop; // last is undefined iff $(last) is empty iff there are no existing tabstops to clear (b/c _initTabindexes just ran 
                                      // or previously there were no enabled buttons to make tabbable)
        
//        console.log("mapped button and last button are:");  console.log(button);  console.log(last);  console.log(".");
        
        // Cases: both are undefined: have no tabstops; want to keep it that way (b/c none enabled), so do nothing
        //        both are node X: X is the tabstop; want to keep it that way, so do nothing
        //        last is node X; button is undefined: X is the tabstop; want to clear it w/o replacing it (b/c none enabled).  This logic does that.
        //        last is undefined; button is node X: no existing tabstop; want to make X the tabstop.  This logic does that.
        //        last is node X; button is node Y: X is the tabstop; want to clear it and make Y the tabstop.  This logic does that.
        if ( button !== last) {
            //console.log("setting tab stop to " + $button.attr("id"));  console.log("$(last).length:");  console.log($(last).length);
            
            $(last).attr( "tabindex", "-1" ); // no-op iff $(last) is empty iff (see comment above)
            $button.attr( "tabindex", "0" ); // no-op iff $button is empty iff (see comment above)
            this._lastTabStop = button;
        }
    },
    
    // No return value.
    _handleKeyDown: function(event, $button) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        switch (event.which) {
            case $.ui.keyCode.LEFT:  // left arrow
            case $.ui.keyCode.RIGHT: // right arrow
                event.preventDefault();
                
                var $enabledButtons = this.$enabledButtons;
                var length = $enabledButtons.length;
                if (length<2) // nowhere to navigate to; currently focused button is the only enabled one in buttonset
                    break;
                
                var oldIndex = $enabledButtons.index($button);
                var increment = ((event.which == $.ui.keyCode.RIGHT) ^ this.isRtl) ? 1 : -1;
                var newIndex = (oldIndex+increment+length)%length; // wrap around if at start/end of buttonset
                
                // A11y office recommended treating radios like other buttons: Arrow moves focus without selecting, Spacebar selects, 
                // which we prefer too.  Since we're using role='button', not 'radio', we don't need to follow the WAI-ARIA radio behavior 
                // where Arrow moves focus and selects, Ctrl-Arrow moves focus without selecting.  
                $enabledButtons.eq(newIndex).focus();
                break;
            case $.ui.keyCode.UP:   // up arrow
            case $.ui.keyCode.DOWN: // down arrow
                // Per above comment, treating radios like buttons, which have no native or WAI-ARIA-mandated up/down arrow behavior, 
                // so disable native focus-and-select behavior.  TODO: should up/down emulate left/right, for buttonset (role="group") 
                // and/or toolbar (role="toolbar"), for radio groups and/or regular buttons?  Which of those 4 combos create the expectation 
                // that up/down arrows should work, either via convention or because JAWS reads out a claim that up/down should work?
                if ( $button.attr("type")=="radio" )
                    event.preventDefault();
                break;
            
            // Don't need Space/Enter handlers.  For all buttons except already-checked radios in some browsers, Space/Enter fire a click event 
            // (natively or manually), which already calls _setTabStop.  For checked radios (which are focused if they're getting 
            // this key event), _setTabStop has already been called for whichever happened 2nd:  focus (an already checked radio) or
            // check (an already focused radio) via click/Space/Enter.  We don't support programmatically checking the button; it must 
            // be done via the "checked" option.
        }
    },
    
    // TODO: 
    // - As code evolves, ensure this still undoes everything we do in create/refresh/etc.
    // - Seems that superclass takes care of method bindings, but verify this works even when they're placed on other nodes / components like buttons.  Prelim 
    //   tests suggest that focus mgmt bindings are NOT removed from buttons on destroy!
    // - If a button is destroyed or otherwise removed from the buttonset (e.g. reparented outside it), we need to do all the things to it
    //   that are done in this method.  We need to doc that the BS must be refresh()ed (or re-inited?) in that case, and refresh() needs to do something like 
    //   removeButtonsetStuff($oldButtons.not($newButtons)).  Needs additional care if any of the tasks assume the elem is still buttonized, in 
    //   which case maybe B.destroy has to do it (but prefer not to tightly couple).
    // - For the attrs below (role, tabindex, ...), probably best to remember initial value at create time, and restore it on destroy, 
    //   rather than removeAttr, setting it to 0, etc.  Use JQ's .data() method, and removeData() on buttonset destroy().
    _destroy: function() // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        this.element
            .removeClass( "oj-buttonset oj-widget" )
            .removeAttr( "role" );
        
        if (this.options.focusManagement==="oneTabstop") 
            this.$buttons.attr( "tabindex", "0" );
        
        this.$buttons
            .map(function() {
                return $( this ).ojButton( "widget" )[ 0 ];
            })
                // do .removeClass outside the filter in case button has been destroyed but still has these Buttonset styles on it.  TODO: if above todo means 
                // that this has definitely been taken care of already for destroyed buttons, then move inside filter.
                .removeClass( "oj-buttonset-corner-start oj-buttonset-corner-end" )
            .end()
    
            // Recursively destroy Bset's buttons like JQUI.  
            // TODO:
            // - Update class API doc to indicate that destroy() recursively destroys Bset's buttons.
            // - The recursive destroy makes it impossible to ungroup the buttons if desired, i.e. destroy the Buttonset without destroying its buttons.
            //   As discussed in _setup() code comment, it was approved to add refresh() and/or destroy() params that would allow turning off
            //   the recursive behavior, but changing the default (compared to JQUI) was not approved.
            //   When not destroying the buttons, must instead restore the buttons to a not-in-buttonset state, i.e. remove Bset stuff, restore any 
            //   Button stuff we removed, etc.
            .ojButton( "destroy" );
    }
    
    // API doc for inherited methods with no JS in this file:

    /**
     * Returns a <code class="prettyprint">jQuery</code> object containing the buttonset element.  
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojButtonset#widget
     * @memberof! oj.ojButtonset
     * @instance
     * @return {jQuery} the buttonset element
     * 
     * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
     * var widget = $( ".selector" ).ojButtonset( "widget" );
     */

    /**
     * Removes the buttonset functionality completely, including focus management, and recursively <code class="prettyprint">destroy()</code>s 
     * the contained buttons. This will return the element back to its pre-init state.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojButtonset#destroy
     * @memberof! oj.ojButtonset
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
     * $( ".selector" ).ojButtonset( "destroy" );
     */
});

}() ); // end of Button / Buttonset wrapper function

/*
Copyright 2012 Igor Vaynberg

Version: @@ver@@ Timestamp: @@timestamp@@

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
(function ()
{
  /**
   * @class
   * @name oj.ojCombobox
   * @augments oj.editableValue
   *
   * @classdesc
   * <h3 id="comboboxOverview-section">
   *   JET Combobox Component
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#comboboxOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Combobox enhances a html input and datalist element into a Combobox that supports
   * single-select, multi-select, free text input, and search filtering.
   *
   * <p>A JET Combobox can be created with the following markup. By default, it creates a single-select
   * Combobox. The 'multiple' option can be specified to change it to a multi-select Combobox.
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;input list="items" data-bind="ojComponent: {component: 'ojCombobox', multiple: true}"/>
   *   &lt;datalist id="items">
   *     &lt;option value="option 1">option 1&lt;/option>
   *     &lt;option value="option 2">option 2&lt;/option>
   *     &lt;option value="option 3">option 3&lt;/option>
   *     &lt;option value="option 4">option 4&lt;/option>
   *   &lt;/datalist>
   * </code></pre>
   *
   * <h3 id="keyboard-section">
   *   Keyboard interaction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   *
   * <p>
   * <h5>When the focus is in the input element</h5>
   * </p>
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
   *       <td><kbd>Enter</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Tab</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>UpArrow or DownArrow</kbd></td>
   *       <td> Highlight the option item on the drop down list in the direction of the arrow.
   *         If the drop down is not open, expand the drop down list.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>LeftArrow or RightArrow</kbd></td>
   *       <td> Move focus to the previous or next selected item in Multi-select Combobox.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Esc</kbd></td>
   *       <td> Collapse the drop down list. If the drop down is already closed, do nothing.</td>
   *     </tr>
   *
   *   </tbody>
   *  </table>
   *
   * <p>Disabled option items receive no highlight and are not selectable.
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the Combobox must be <code class="prettyprint">refresh()</code>ed.
   *
   *
   * <h3 id="pseudos-section">
   *   Pseudo-selectors
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
   * </h3>
   *
   * <p>The <code class="prettyprint">:oj-combobox</code> pseudo-selector can be used in jQuery expressions to select JET Combobox.  For example:
   *
   * <pre class="prettyprint">
   * <code>$( ":oj-combobox" ) // selects all JET Combobox on the page
   * $myEventTarget.closest( ":oj-combobox" ) // selects the closest ancestor that is a JET Combobox
   * </code></pre>
   *
   *
   * <h3 id="jqui2jet-section">
   *   JET for jQuery UI developers
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
   * </h3>
   *
   * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "Combobox".
   *
   * @desc Creates a JET Combobox.
   * @example <caption>Initialize the Combobox with no options specified:</caption>
   * $( ".selector" ).ojCombobox();
   *
   * @example <caption>Initialize the Combobox with some options:</caption>
   * $( ".selector" ).ojCombobox( { "multiple": true, "placeholder": "Select multiple values." } );
   *
   * @example <caption>Initialize the Combobox via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
   * &lt;div id="combobox" data-bind="ojComponent: { component: 'ojCombobox',
   *                                                    multiple: true}">
   */
  oj.__registerWidget("oj.ojCombobox", $['oj']['editableValue'],
  {
    version : "1.0.0",
    defaultElement : "<input>",
    widgetEventPrefix : "oj",
    options :
    {
      /**
       * The placeholder text.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {string}
       *
       * @example <caption>Initialize the combobox with the <code class="prettyprint">placeholder</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "placeholder": "Please select ..." } );
       */
      placeholder : "",
      /**
       * If multi-select is enabled for the combobox.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">multiple</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "multiple": true } );
       */
      multiple : false,
      /**
       * The data for the Combobox. Instead of providing the option items in a datalist, the data can be specified as an array of objects containing id and text.
       * The id is used as the value of the option item and text as the label.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {Array}
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">data</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "data": [{id: 'option1', text: 'option1'}, {id: 'option2', text: 'option2'}, {id: 'option3', text: 'option3'},] } );
       */
      data : null,
      /**
       * Triggered after the Combobox drop down has been expanded.
       *
       * @expose
       * @event
       * @memberof! oj.ojCombobox
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">expand</code> callback specified:</caption>
       * $( ".selector" ).ojCombobox({
       *     "expand": function( event ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
       * $( ".selector" ).on( "ojexpand", function( event ) {} );
       */
      expand : null

    },

    /**
     * Returns a jQuery object containing the element visually representing the combobox.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     * @return {jQuery} the combobox
     */
    widget : function ()
    {
      return this.combobox.container;
    },

    /**
     * @override
     * @private
     */
    _create : function ()
    {
      this._setup();
      this._super();
    },

    _setup : function ()
    {
      var opts,
      multiple = this.options.multiple;
      opts = {};
      opts.element = this.element;
      opts.ojContext = this;
      opts = $.extend(this.options, opts);

      this.combobox = multiple ? new _OjMultiCombobox() : new _OjSingleCombobox();

      this.combobox._init(opts);
      this._SetRootAttributes();
    },

    /**
     * @override
     * @private
     */
    _destroy : function ()
    {
      this.combobox._destroy();
    },

    /**
     * Expands the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     */
    expand : function (event)
    {
      this.combobox.open();
      this._trigger("ojexpand", event);
    },

    /**
     * Collapses the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     */
    collapse : function ()
    {
      this.combobox.close();
    },

    /**
     * Handles options specific to combobox.
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _setOption : function (key, value)
    {
      this._super(key, value);

      if (key === "disabled")
      {
        if (value)
          this.combobox._disable();
        else
          this.combobox._enable();
      }
    },

    /**
     * Returns the messaging trigger element
     *
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _GetMessagingTriggerElement : function ()
    {
      return this.combobox.container;
    }

  }
  );

  /**
   * @class
   * @name oj.ojSelect
   * @augments oj.editableValue
   *
   * @classdesc
   * <h3 id="selectOverview-section">
   *   JET Select Component
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#selectOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Select enhances a html select and option elements into a Select that supports
   * single-select, multi-select and search filtering.
   *
   * <p>A JET Select can be created with the following markup. By default, it creates a single-select
   * Select. The 'multiple' option can be specified to change it to a multi-select Select.
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;select data-bind="ojComponent: {component: 'ojSelect'}">
   *     &lt;option value="option 1">option 1&lt;/option>
   *     &lt;option value="option 2">option 2&lt;/option>
   *     &lt;option value="option 3">option 3&lt;/option>
   *     &lt;option value="option 4">option 4&lt;/option>
   * &lt;/select>
   * </code></pre>
   *
   * <h3 id="keyboard-section">
   *   Keyboard interaction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   *
   * <p>
   * <h5>When the focus is in the select element</h5>
   * </p>
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
   *       <td><kbd>Enter</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Tab</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>UpArrow or DownArrow</kbd></td>
   *       <td> Highlight the option item on the drop down list in the direction of the arrow.
   *         If the drop down is not open, expand the drop down list.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>LeftArrow or RightArrow</kbd></td>
   *       <td> Move focus to the previous or next selected item in Multi-select Select.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Esc</kbd></td>
   *       <td> Collapse the drop down list. If the drop down is already closed, do nothing.</td>
   *     </tr>
   *
   *   </tbody>
   *  </table>
   *
   * <p>Disabled option items receive no highlight and are not selectable.
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the Select must be <code class="prettyprint">refresh()</code>ed.
   *
   *
   * <h3 id="pseudos-section">
   *   Pseudo-selectors
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
   * </h3>
   *
   * <p>The <code class="prettyprint">:oj-select</code> pseudo-selector can be used in jQuery expressions to select JET Select.  For example:
   *
   * <pre class="prettyprint">
   * <code>$( ":oj-select" ) // selects all JET Select on the page
   * $myEventTarget.closest( ":oj-select" ) // selects the closest ancestor that is a JET Select
   * </code></pre>
   *
   *
   * <h3 id="jqui2jet-section">
   *   JET for jQuery UI developers
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
   * </h3>
   *
   * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "Select".
   *
   * @desc Creates a JET Select.
   * @example <caption>Initialize the Select with no options specified:</caption>
   * $( ".selector" ).ojSelect();
   *
   * @example <caption>Initialize the Select with some options:</caption>
   * $( ".selector" ).ojSelect( { "multiple": true, "placeholder": "Select multiple values." } );
   *
   * @example <caption>Initialize the Select via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
   * &lt;div id="select" data-bind="ojComponent: { component: 'ojSelect' }">
   */
  oj.__registerWidget("oj.ojSelect", $['oj']['editableValue'],
  {
    version : "1.0.0",
    defaultElement : "<select>",
    widgetEventPrefix : "oj",
    options :
    {
      /**
       * The threshold for showing the search box in the dropdown when it's expanded.
       * The search box is always displayed when the results size is greater than
       * the threshold, otherwise the search box is initially turned off.
       * However, the search box is displayed as soon as the user starts typing.
       * This property only applies to single-select.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {number}
       * @default <code class="prettyprint">10</code>
       */
      minimumResultsForSearch : 10,
      /**
       * The placeholder text. When placeholder is used for a non-multi-value select box,
       * it requires that you include an empty <option></option> tag as your first option.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {string}
       *
       * @example <caption>Initialize the select with the <code class="prettyprint">placeholder</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "placeholder": "Please select ..." } );
       */
      placeholder : "",
      /**
       * If multi-select is enabled for the select.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">multiple</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "multiple": true } );

      multiple: false,
       */

      /**
       * The data for the Select. Instead of providing the option items in a datalist, the data can be specified as an array of objects containing id and text.
       * The id is used as the value of the option item and text as the label.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {Array}
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">data</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "data": [{id: 'option1', text: 'option1'}, {id: 'option2', text: 'option2'}, {id: 'option3', text: 'option3'},] } );
       */
      data : null,
      /**
       * Triggered after the Select drop down has been expanded.
       *
       * @expose
       * @event
       * @memberof! oj.ojSelect
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">expand</code> callback specified:</caption>
       * $( ".selector" ).ojSelect({
       *     "expand": function( event ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
       * $( ".selector" ).on( "ojexpand", function( event ) {} );
       */
      expand : null

    },

    /**
     * Returns a jQuery object containing the element visually representing the select.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     * @return {jQuery} the select
     */
    widget : function ()
    {
      return this.select.container;
    },

    /**
     * @override
     * @private
     */
    _create : function ()
    {
      this._setup();
      this._super();
    },

    _setup : function ()
    {
      var opts,
      multiple = this.options.multiple;
      opts = {};
      opts.element = this.element;
      opts.ojContext = this;
      opts = $.extend(this.options, opts);

      this.select = new _OjSingleSelect();

      this.select._init(opts);
      this._SetRootAttributes();
    },

    /**
     * Refreshes the visual state of the tabs. JET components require a <code class="prettyprint">refresh()</code> or re-init after the DOM is programmatically changed underneath the component.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojSelect
     * @instance

    refresh : function ()
    {
      this._super();

      this.select._destroy();
      this._setup();
      //TODO: apply value in options for the selected value
    },
     */
    /**
     * @override
     * @private
     */
    _destroy : function ()
    {
      this.select._destroy();
    },

    /**
     * Expands the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     */
    expand : function ()
    {
      this.select.open();
    },

    /**
     * Collapses the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     */
    collapse : function ()
    {
      this.select.close();
    },

    /**
     * Handles options specific to select.
     * @override
     * @protected
     * @memberof! oj.ojSelect
     */
    _setOption : function (key, value)
    {
      this._super(key, value);

      if (key === "disabled")
      {
        if (value)
          this.select._disable();
        else
          this.select._enable();
      }
    },

    /**
     * Returns the messaging trigger element
     *
     * @override
     * @protected
     * @memberof! oj.ojSelect
     */
    _GetMessagingTriggerElement : function ()
    {
      return this.select.container;
    }

  }
  );

  var _KEY,
  _AbstractOjChoice,
  _AbstractSingleChoice,
  _OjSingleCombobox,
  _OjMultiCombobox,
  _OjSingleSelect,
  _nextUid,
  _lastMousePosition ={x : 0,y : 0},
  _scrollBarDimensions;

  _KEY =
  {
    TAB : 9,
    ENTER : 13,
    ESC : 27,
    SPACE : 32,
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40,
    SHIFT : 16,
    CTRL : 17,
    ALT : 18,
    PAGE_UP : 33,
    PAGE_DOWN : 34,
    HOME : 36,
    END : 35,
    BACKSPACE : 8,
    DELETE : 46,
    isArrow : function (k)
    {
      k = k.which ? k.which : k;
      switch (k)
      {
      case _KEY.LEFT:
      case _KEY.RIGHT:
      case _KEY.UP:
      case _KEY.DOWN:
        return true;
      }
      return false;
    },
    isControl : function (e)
    {
      var k = e.which;
      switch (k)
      {
      case _KEY.SHIFT:
      case _KEY.CTRL:
      case _KEY.ALT:
        return true;
      }
      if (e.metaKey)
        return true;
      return false;
    },
    isFunctionKey : function (k)
    {
      k = k.which ? k.which : k;
      return k >= 112 && k <= 123;
    }
  };

  _nextUid = (function () {var counter = 1; return function () { return counter++; };}());

  /*
   * 4-10 times faster .each replacement
   * it overrides jQuery context of element on each iteration
   */
  function _each2(list, c)
  {
    var j = $(list[0]),
    i = -1,
    l = list.length;
    while (
      ++i < l
       && (j.context = j[0] = list[i])
       && c.call(j[0], i, j) !== false //i=index, j=jQuery object
    )
    {};
    return list;
  }

  function _measureScrollbar(className)
  {
    var $template = $("<div class='" + className + "-measure-scrollbar'></div>");
    $template.appendTo('body');
    var dim =
    {
      width : $template.width() - $template[0].clientWidth,
      height : $template.height() - $template[0].clientHeight
    };
    $template.remove();
    return dim;
  }

  /*
   * Splits the string into an array of values, trimming each value. An empty array is returned for nulls or empty
   */
  function _splitVal(string, separator)
  {
    var val,
    i,
    l;
    if (string === null || string.length < 1)
      return [];
    val = string.split(separator);
    for (i = 0, l = val.length; i < l; i = i + 1)
      val[i] = $.trim(val[i]);
    return val;
  }

  function _getSideBorderPadding(element)
  {
    return element.outerWidth(false) - element.width();
  }

  function _installKeyUpChangeEvent(element)
  {
    var key = "keyup-change-value";
    element.on("keydown", function ()
    {
      if ($.data(element, key) === undefined)
      {
        $.data(element, key, element.val());
      }
    }
    );
    element.on("keyup", function (e)
    {
      if (e.which === _KEY.ENTER)
      {
        e.stopPropagation();
        return;
      }
      var val = $.data(element, key);
      if (val !== undefined && element.val() !== val)
      {
        $.removeData(element, key);
        element.trigger("keyup-change");
      }
    }
    );
  }

  /*
   * filters mouse events so an event is fired only if the mouse moved.
   *
   * filters out mouse events that occur when mouse is stationary but
   * the elements under the pointer are scrolled.
   */
  function _installFilteredMouseMove(element)
  {
    element.on("mousemove", function (e)
    {
      var lastpos = _lastMousePosition;
      if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY)
      {
        $(e.target).trigger("mousemove-filtered", e);
        _lastMousePosition.x = e.pageX;
        _lastMousePosition.y = e.pageY;
      }
    }
    );
  }

  function _thunk(formula)
  {
    var evaluated = false,
    value;
    return function ()
    {
      if (evaluated === false)
      {
        value = formula();
        evaluated = true;
      }
      return value;
    };
  }

  function _focus($el)
  {
    if ($el[0] === document.activeElement)
      return;

    /* set the focus in a 0 timeout - that way the focus is set after the processing
    of the current event has finished - which seems like the only reliable way
    to set focus */
    window.setTimeout(function ()
    {
      var el = $el[0],
      pos = $el.val().length,
      range;
      $el.focus();

      /* make sure el received focus so we do not error out when trying to manipulate the caret.
      sometimes modals or others listeners may steal it after its set */
      if ($el.is(":visible") && el === document.activeElement)
      {
        /* after the focus is set move the caret to the end, necessary when we val()
        just before setting focus */
        if (el.setSelectionRange)
          el.setSelectionRange(pos, pos);
        else if (el.createTextRange)
        {
          range = el.createTextRange();
          range.collapse(false);
          range.select();
        }
      }
    }, 0);
  }

  function _getCursorInfo(el)
  {
    el = $(el)[0];
    var offset = 0;
    var length = 0;
    if ('selectionStart' in el)
    {
      offset = el.selectionStart;
      length = el.selectionEnd - offset;
    }
    else if ('selection' in document)
    {
      el._focus();
      var sel = document.selection.createRange();
      length = document.selection.createRange().text.length;
      sel.moveStart('character', -el.value.length);
      offset = sel.text.length - length;
    }
    return {offset : offset, length : length};
  }

  function _killEvent(event)
  {
    event.preventDefault();
    event.stopPropagation();
  }
  function _killEventImmediately(event)
  {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function _defaultEscapeMarkup(markup)
  {
    var replace_map =
    {
      '\\' : '&#92;',
      '&' : '&amp;',
      '<' : '&lt;',
      '>' : '&gt;',
      '"' : '&quot;',
      "'" : '&#39;',
      "/" : '&#47;'
    };
    return String(markup).replace(/[&<>"'\/\\]/g, function (match)
    {
      return replace_map[match];
    }
    );
  }

  /*
   * Produces a query function that works with a local array
   */
  function _local(options)
  {
    var data = options, // data elements
    dataText,
    tmp,
    text = function (item)
    {
      return "" + item.text;
    }; // function used to retrieve the text portion of a data item that is matched against the search

    if ($.isArray(data))
    {
      tmp = data;
      data =
      {
        results : tmp
      };
    }
    if ($.isFunction(data) === false)
    {
      tmp = data;
      data = function ()
      {
        return tmp;
      };
    }
    var dataItem = data();
    if (dataItem.text)
    {
      text = dataItem.text;
      // if text is not a function we assume it to be a key name
      if (!$.isFunction(text))
      {
        dataText = dataItem.text; // we need to store this in a separate variable because in the next step data gets reset and data.text is no longer available
        text = function (item)
        {
          return item[dataText];
        };
      }
    }
    return function (query)
    {
      var t = query.term,
      filtered =
      {
        results : []
      },
      process;
      if (t === "")
      {
        query.callback(data());
        return;
      }
      process = function (datum, collection)
      {
        var group,
        attr;
        datum = datum[0];
        if (datum.children)
        {
          group = {};
          for (attr in datum)
          {
            if (datum.hasOwnProperty(attr))
              group[attr] = datum[attr];
          }
          group.children = [];
          _each2($(datum.children), function (i, childDatum)
          {
            process(childDatum, group.children);
          }
          );
          if (group.children.length || query.matcher(t, text(group), datum))
          {
            collection.push(group);
          }
        }
        else
        {
          if (query.matcher(t, text(datum), datum))
          {
            collection.push(datum);
          }
        }
      };
      _each2($(data().results), function (i, datum)
      {
        process(datum, filtered.results);
      }
      );
      query.callback(filtered);
    };
  }

  function _checkFormatter(formatter, formatterName)
  {
    if ($.isFunction(formatter))
      return true;
    if (!formatter)
      return false;
    throw new Error(formatterName + " must be a function or a false value");
  }

  /*
   * Creates a new class
   */
  function _clazz(SuperClass, methods)
  {
    var constructor = function ()  {};
    oj.Object.createSubclass(constructor, SuperClass, '');
    constructor.prototype = $.extend(constructor.prototype, methods);
    return constructor;
  }

  _AbstractOjChoice = _clazz(Object,
    {
      _bind : function (func)
      {
        var self = this;
        return function ()
        {
          func.apply(self, arguments);
        };
      },
      _init : function (opts)
      {
        var results,
        search,
        className = this._classNm,
        elemName = this._elemNm,
        resultsSelector = "." + className + "-results";

        this.ojContext = opts.ojContext;
        this.opts = opts = this._prepareOpts(opts);
        this.id = opts.id;

        // destroy if called on an existing component
        if (opts.element.data(elemName) !== undefined &&
          opts.element.data(elemName) !== null)
        {
          opts.element.data(elemName)._destroy();
        }
        this.container = this._createContainer();
        this.containerId = "ojChoiceId_" + (opts.element.attr("id") || "autogen" + _nextUid());
        this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
        this.container.attr("id", this.containerId);
        // cache the body so future lookups are cheap
        this.body = _thunk(function ()
          {
            return opts.element.closest("body");
          }
          );
        this.container.attr("style", opts.element.attr("style"));
        this.elementTabIndex = this.opts.element.attr("tabindex");

        // swap container for the element
        this.opts.element
        .data(elemName, this)
        .attr("tabindex", "-1")
        .before(this.container);
        this.container.data(elemName, this);
        this.dropdown = this.container.find("." + className + "-drop");
        this.dropdown.data(elemName, this);
        this.dropdown.on("click", _killEvent);
        this.results = results = this.container.find(resultsSelector);
        this.search = search = this.container.find("input." + className + "-input");
        this.queryCount = 0;
        this.resultsPage = 0;
        this.context = null;

        // initialize the container
        this._initContainer();
        this.container.on("click", _killEvent);
        _installFilteredMouseMove(this.results);
        this.dropdown.on("mousemove-filtered touchstart touchmove touchend", resultsSelector, this._bind(this._highlightUnderEvent));
        // do not propagate change event from the search field out of the component
        $(this.container).on("change", "." + className + "-input", function (e)
        {
          e.stopPropagation();
        }
        );
        $(this.dropdown).on("change", "." + className + "-input", function (e)
        {
          e.stopPropagation();
        }
        );
        _installKeyUpChangeEvent(search);
        search.on("keyup-change input paste", this._bind(this._updateResults));
        search.on("focus", function ()
        {
          search.addClass(className + "-focused");
        }
        );
        search.on("blur", function ()
        {
          search.removeClass(className + "-focused");
        }
        );
        this.dropdown.on("mouseup", resultsSelector, this._bind(function (e)
          {
            if ($(e.target).closest("." + className + "-result-selectable").length > 0)
            {
              this._highlightUnderEvent(e);
              this._selectHighlighted(e);
            }
          }
          ));
        // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
        // for mouse events outside of itself so it can close itself. since the dropdown is now outside the combobox's
        // dom it will trigger the popup close, which is not what we want
        this.dropdown.on("click mouseup mousedown", function (e)
        {
          e.stopPropagation();
        }
        );
        if ($.isFunction(this.opts.initSelection))
        {
          // initialize selection based on the current value of the source element
          if (opts.value)
            this.setVal(opts.value);
          this._initSelection();
        }
        var disabled = opts.element.prop("disabled");
        if (disabled === undefined)
          disabled = false;
        this._enable(!disabled);
        var readonly = opts.element.prop("readonly");
        if (readonly === undefined)
          readonly = false;
        this._readonly(readonly);
        // Calculate size of scrollbar
        _scrollBarDimensions = _scrollBarDimensions || _measureScrollbar(this._classNm);
        this.autofocus = opts.element.prop("autofocus");
        opts.element.prop("autofocus", false);
        if (this.autofocus)
          this._focus();
      },
      _destroy : function ()
      {
        var element = this.opts.element,
            ojcomp = element.data(this._elemNm);

        this.close();
        if (this.propertyObserver)
        {
          delete this.propertyObserver;
          this.propertyObserver = null;
        }
        if (ojcomp !== undefined)
        {
          ojcomp.container.remove();
          ojcomp.dropdown.remove();
          element
          .removeClass(this._classNm + "-offscreen")
          .removeData(this._elemNm)
          .off("." + this._classNm)
          .prop("autofocus", this.autofocus || false);
          if (this.elementTabIndex)
          {
            element.attr(
            {
              tabindex : this.elementTabIndex
            }
            );
          }
          else
          {
            element.removeAttr("tabindex");
          }
          element.show();
        }
      },
      /*
       * Processes option element and return data object
       */
      _optionToData : function (element)
      {
        if (element.is("option"))
        {
          return {
            id : element.prop("value"),
            text : element.text(),
            element : element.get(),
            css : element.attr("class"),
            disabled : element.prop("disabled"),
            locked : (element.attr("locked") === "locked") || (element.data("locked") === true)
          };
        }
        else if (element.is("optgroup"))
        {
          return {
            text : element.attr("label"),
            children : [],
            element : element.get(),
            css : element.attr("class")
          };
        }
      },
      /*
       * Prepares the option items to display in the drop down
       */
      _prepareOpts : function (opts)
      {
        var element,
        datalist,
        idKey,
        self = this;

        element = opts.element;
        var tagName = element.get(0).tagName.toLowerCase();
        if (tagName === "input" && element.attr("list"))
        {
          this.datalist = datalist = $('#' + element.attr("list"));
        }

        ///ojselect
        else if (tagName === "select" && element.children().length > 0)
        {
          this.datalist = datalist = element;
        }

        opts = $.extend({},
          {
            populateResults : function (container, results, query)
            {
              var populate,
              id = this.opts.id;

              populate = function (results, container, depth)
              {
                var i,
                l,
                result,
                selectable,
                disabled,
                compound,
                node,
                label,
                innerContainer,
                formatted;

                for (i = 0, l = results.length; i < l; i = i + 1)
                {
                  result = results[i];
                  disabled = (result.disabled === true);
                  selectable = (!disabled) && (id(result) !== undefined);
                  compound = result.children && result.children.length > 0;

                  node = $("<li></li>");
                  node.addClass(self._classNm + "-results-dept-" + depth);
                  node.addClass(self._classNm + "-result");
                  node.addClass(selectable ? self._classNm + "-result-selectable" : self._classNm + "-result-unselectable");
                  if (disabled)
                  {
                    node.addClass("oj-disabled");
                  }
                  if (compound)
                  {
                    node.addClass(self._classNm + "-result-with-children");
                  }
                  node.attr("role", "presentation");

                  label = $(document.createElement("div"));
                  label.addClass(self._classNm + "-result-label");
                  label.attr("id", self._classNm + "-result-label-" + _nextUid());
                  label.attr("role", "option");
                  if (disabled)
                    label.attr("aria-disabled", "true");

                  formatted = opts.formatResult(result, label, query, self.opts.escapeMarkup);
                  if (formatted !== undefined)
                  {
                    label.html(formatted);
                  }

                  node.append(label);

                  if (compound)
                  {
                    innerContainer = $("<ul></ul>");
                    innerContainer.addClass(self._classNm + "-result-sub");
                    populate(result.children, innerContainer, depth + 1);
                    node.append(innerContainer);
                  }

                  node.data(self._elemNm, result);
                  container.append(node);
                }
              };
              populate(results, container, 0);
            }
          }, _ojChoice_defaults, (tagName === "select") ? null : _ojCombobox_methods, opts);

        if (typeof(opts.id) !== "function")
        {
          idKey = opts.id;
          opts.id = function (e)
          {
            return e[idKey];
          };
        }

        if (datalist)
        {
          opts.query = this._bind(function (query)
            {
              var data =
              {
                results : [],
                more : false
              },
              term = query.term,
              children,
              process;

              process = function (element, collection)
              {
                var group;
                if (element.is("option"))
                {
                  if (query.matcher(term, element.text(), element))
                  {
                    collection.push(self._optionToData(element));
                  }
                }
                else if (element.is("optgroup"))
                {
                  group = self._optionToData(element);
                  _each2(element.children(), function (i, elm)
                  {
                    process(elm, group.children);
                  }
                  );
                  if (group.children.length > 0)
                  {
                    collection.push(group);
                  }
                }
              };

              children = datalist.children();

              ///ojselect placeholder
              // ignore the placeholder option if there is one
              if (this._getPlaceholder() !== undefined && children.length > 0)
              {
                var placeholderOption = this._getPlaceholderOption();
                if (placeholderOption)
                {
                  children = children.not(placeholderOption);
                }
              }

              _each2(children, function (i, elm)
              {
                process(elm, data.results);
              }
              );
              query.callback(data);
            }
            );
          // this is needed because inside val() we construct choices from options and there id is hardcoded
          opts.id = function (e)
          {
            return e.id;
          };
        }
        else if ("data" in opts)
        {
          opts.query = _local(opts.data);
        }

        return opts;
      },
      _triggerSelect : function (data)
      {
        var evt = $.Event(this._elemNm + "-selecting",
          {
            val : this.id(data),
            object : data
          }
          );
        this.opts.element.trigger(evt);
        return !evt.isDefaultPrevented();
      },
      /*
       * triggers the optionChange event
       */
      _triggerChange : function ()
      {
        this.ojContext._SetValue(this.getVal());
      },
      _isInterfaceEnabled : function ()
      {
        return this.enabledInterface === true;
      },
      _enableInterface : function ()
      {
        var enabled = this._enabled && !this._readonly,
        disabled = !enabled;

        if (enabled === this.enabledInterface)
          return false;

        this.container.toggleClass("oj-disabled", disabled);
        this.close();
        this.enabledInterface = enabled;

        return true;
      },
      _enable : function (enabled)
      {
        if (enabled === undefined)
          enabled = true;
        if (this._enabled === enabled)
          return;
        this._enabled = enabled;

        this.opts.element.prop("disabled", !enabled);
        this._enableInterface();
      },
      _disable : function ()
      {
        this._enable(false);
      },
      _readonly : function (enabled)
      {
        if (enabled === undefined)
          enabled = false;
        if (this._readonly === enabled)
          return false;
        this._readonly = enabled;

        this.opts.element.prop("readonly", enabled);
        this._enableInterface();
        return true;
      },
      _opened : function ()
      {
        return this.container.hasClass(this._classNm + "-dropdown-open");
      },
      _positionDropdown : function ()
      {
        var $dropdown = this.dropdown,
        offset = this.container.offset(),
        height = this.container.outerHeight(false),
        width = this.container.outerWidth(false),
        dropHeight = $dropdown.outerHeight(false),
        $window = $(window),
        windowWidth = $window.width(),
        windowHeight = $window.height(),
        viewPortRight = $window.scrollLeft() + windowWidth,
        viewportBottom = $window.scrollTop() + windowHeight,
        dropTop = offset.top + height,
        dropLeft = offset.left,
        enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
        enoughRoomAbove = (offset.top - dropHeight) >= this.body().scrollTop(),
        dropWidth = $dropdown.outerWidth(false),
        enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
        aboveNow = $dropdown.hasClass(this._classNm + "-drop-above"),
        bodyOffset,
        above,
        changeDirection,
        css,
        resultsListNode;

        // always prefer the current above/below alignment, unless there is not enough room
        if (aboveNow)
        {
          above = true;
          if (!enoughRoomAbove && enoughRoomBelow)
          {
            changeDirection = true;
            above = false;
          }
        }
        else
        {
          above = false;
          if (!enoughRoomBelow && enoughRoomAbove)
          {
            changeDirection = true;
            above = true;
          }
        }

        //if we are changing direction we need to get positions when dropdown is hidden;
        if (changeDirection)
        {
          $dropdown.hide();
          offset = this.container.offset();
          height = this.container.outerHeight(false);
          width = this.container.outerWidth(false);
          dropHeight = $dropdown.outerHeight(false);
          viewPortRight = $window.scrollLeft() + windowWidth;
          viewportBottom = $window.scrollTop() + windowHeight;
          dropTop = offset.top + height;

          ///ojselect move 1px up to cover up the border bottom of the select box
          if (!above && this._hasSearchBox())
            dropTop -= 1;

          dropLeft = offset.left;
          dropWidth = $dropdown.outerWidth(false);
          enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
          $dropdown.show();
        }

        ///ojselect move 1px up to cover up the border bottom of the select box
        else if (!above && this._hasSearchBox())
          dropTop -= 1;

        if (this.opts.dropdownAutoWidth)
        {
          resultsListNode = $("." + this._classNm + "-results", $dropdown)[0];
          $dropdown.addClass(this._classNm + "-drop-auto-width");
          $dropdown.css('width', '');
          // Add scrollbar width to dropdown if vertical scrollbar is present
          dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : _scrollBarDimensions.width);
          dropWidth > width ? width = dropWidth : dropWidth = width;
          enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
        }
        else
        {
          this.container.removeClass(this._classNm + "-drop-auto-width");
        }

        // fix positioning when body has an offset and is not position: static
        if (this.body().css('position') !== 'static')
        {
          bodyOffset = this.body().offset();
          dropTop -= bodyOffset.top;
          dropLeft -= bodyOffset.left;
        }

        if (!enoughRoomOnRight)
        {
          dropLeft = offset.left + width - dropWidth;
        }

        css =
        {
          left : dropLeft,
          width : width
        };

        if (above)
        {
          css.bottom = windowHeight - offset.top;
          css.top = 'auto';
          this.container.addClass(this._classNm + "-drop-above");
          $dropdown.addClass(this._classNm + "-drop-above");
        }
        else
        {
          css.top = dropTop;
          css.bottom = 'auto';
          this.container.removeClass(this._classNm + "-drop-above");
          $dropdown.removeClass(this._classNm + "-drop-above");
        }

        $dropdown.css(css);
      },
      _shouldOpen : function ()
      {
        var event;

        if (this._opened())
          return false;
        if (this._enabled === false || this._readonly === true)
          return false;

        event = $.Event(this._elemNm + "-opening");
        this.opts.element.trigger(event);
        return !event.isDefaultPrevented();
      },
      _clearDropdownAlignmentPreference : function ()
      {
        // clear the classes used to figure out the preference of where the dropdown should be opened
        this.container.removeClass(this._classNm + "-drop-above");
        this.dropdown.removeClass(this._classNm + "-drop-above");
      },
      /*
       * Opens the dropdown
       *
       * @return {boolean} whether or not dropdown was opened. This method will return false if, for example,
       * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
       */
      open : function ()
      {
        if (!this._shouldOpen())
          return false;
        this._opening();
        return true;
      },
      _clearPlaceholder : function ()
      {
        if (this.search.hasClass(this._classNm + "-default"))
        {
          this.search.val("").removeClass(this._classNm + "-default");
        }
      },
      _opening : function ()
      {
        var cid = this.containerId,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid,
        className = this._classNm,
        elemName = this._elemNm,
        mask;

        this._clearPlaceholder();
        this.container.addClass(className + "-dropdown-open");

        this._clearDropdownAlignmentPreference();

        if (this.dropdown[0] !== this.body().children().last()[0])
        {
          this.dropdown.detach().appendTo(this.body());
        }

        // create the dropdown mask if doesnt already exist
        mask = $("#" + className + "-drop-mask");
        if (mask.length == 0)
        {
          mask = $(document.createElement("div"));
          mask.attr("id", className + "-drop-mask").attr("class", className + "-drop-mask");
          mask.hide();
          mask.appendTo(this.body());

          mask.on("mousedown touchstart click", function (e)
          {
            var dropdown = $("#" + className + "-drop"),
            self;
            if (dropdown.length > 0)
            {
              self = dropdown.data(elemName);
              if (self.opts.selectOnBlur)
              {
                self._selectHighlighted(
                {
                  noFocus : true
                }
                );
              }
              self.close();
              e.preventDefault();
              e.stopPropagation();
            }
          }
          );
        }

        // ensure the mask is always right before the dropdown
        if (this.dropdown.prev()[0] !== mask[0])
        {
          this.dropdown.before(mask);
        }

        // move the global id to the correct dropdown
        $("#" + className + "-drop").removeAttr("id");
        this.dropdown.attr("id", className + "-drop");

        // show the elements
        mask.show();

        this._positionDropdown();
        this.dropdown.show();
        this._positionDropdown();

        this.search.attr("aria-expanded", true);

        // attach listeners to events that can change the position of the container and thus require
        // the position of the dropdown to be updated as well so it does not come unglued from the container
        var that = this;
        this.container.parents().add(window).each(function ()
        {
          $(this).on(resize + " " + scroll + " " + orient, function (e)
          {
            that._positionDropdown();
          }
          );
        }
        );

      },
      close : function ()
      {
        if (!this._opened())
          return;

        var cid = this.containerId,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid;

        // unbind event listeners
        this.container.parents().add(window).each(function ()
        {
          $(this).off(scroll).off(resize).off(orient);
        }
        );

        this._clearDropdownAlignmentPreference();

        $("#" + this._classNm + "-drop-mask").hide();
        this.dropdown.removeAttr("id");
        this.dropdown.hide();
        this.container.removeClass(this._classNm + "-dropdown-open");
        this.results.empty();

        this.search.attr("aria-expanded", false);
      },
      _clearSearch : function ()  {},
      _ensureHighlightVisible : function ()
      {
        var results = this.results,
        children,
        index,
        child,
        hb,
        rb,
        y,
        more;

        index = this._highlight();

        if (index < 0)
          return;

        if (index == 0)
        {
          // if the first element is highlighted scroll all the way to the top,
          // that way any unselectable headers above it will also be scrolled
          // into view
          results.scrollTop(0);
          return;
        }

        children = this._findHighlightableChoices().find("." + this._classNm + "-result-label");
        child = $(children[index]);
        hb = child.offset().top + child.outerHeight(true);

        // if this is the last child lets also make sure oj-combobox-more-results is visible
        if (index === children.length - 1)
        {
          more = results.find("li." + this._classNm + "-more-results");
          if (more.length > 0)
          {
            hb = more.offset().top + more.outerHeight(true);
          }
        }

        rb = results.offset().top + results.outerHeight(true);
        if (hb > rb)
        {
          results.scrollTop(results.scrollTop() + (hb - rb));
        }
        y = child.offset().top - results.offset().top;

        // make sure the top of the element is visible
        if (y < 0 && child.css('display') != 'none')
        {
          results.scrollTop(results.scrollTop() + y); // y is negative
        }
      },
      _findHighlightableChoices : function ()
      {
        return this.results.find("." + this._classNm + "-result-selectable:not(.oj-disabled, ." + this._classNm + "-selected)");
      },
      _moveHighlight : function (delta)
      {
        var choices = this._findHighlightableChoices(),
        index = this._highlight();
        while (index > -1 && index < choices.length)
        {
          index += delta;
          var choice = $(choices[index]);
          if (choice.hasClass(this._classNm + "-result-selectable") && !choice.hasClass("oj-disabled") && !choice.hasClass(this._classNm + "-selected"))
          {
            this._highlight(index);
            break;
          }
        }
      },
      _highlight : function (index)
      {
        var choices = this._findHighlightableChoices(),
        choice,
        data;

        if (arguments.length === 0)
        {
          return choices.get().indexOf(choices.filter("." + this._classNm + "-highlighted")[0]);
        }

        if (index >= choices.length)
          index = choices.length - 1;
        if (index < 0)
          index = 0;

        this._removeHighlight();

        choice = $(choices[index]);
        choice.addClass(this._classNm + "-highlighted");

        // ensure assistive technology can determine the active choice
        this.search.attr("aria-activedescendant", choice.find("." + this._classNm + "-result-label").attr("id"));
        this._ensureHighlightVisible();
      },
      _removeHighlight : function ()
      {
        this.results.find("." + this._classNm + "-highlighted").removeClass(this._classNm + "-highlighted");
      },
      _highlightUnderEvent : function (event)
      {
        var el = $(event.target).closest("." + this._classNm + "-result-selectable");
        if (el.length > 0 && !el.is("." + this._classNm + "-highlighted"))
        {
          var choices = this._findHighlightableChoices();
          this._highlight(choices.index(el));
        }
        else if (el.length == 0)
        {
          // if we are over an unselectable item remove all highlights
          this._removeHighlight();
        }
      },
      _updateResults : function (initial)
      {
        var search = this.search,
        results = this.results,
        opts = this.opts,
        data,
        self = this,
        input,
        term = search.val(),
        lastTerm = $.data(this.container, this._classNm + "-last-term"),
        // sequence number used to drop out-of-order responses
        queryNumber;

        // prevent duplicate queries against the same term
        if (initial !== true && lastTerm && (term === lastTerm))
          return;

        $.data(this.container, this._classNm + "-last-term", term);

        function postRender()
        {
          self._positionDropdown();
        }

        function render(html)
        {
          results.html(html);
          postRender();
        }

        queryNumber = ++this.queryCount;

        this._removeHighlight();
        input = this.search.val();
        if (input != undefined && input != null && initial !== true)
        {
          term = input;
        }
        else
        {
          term = "";
        }

        this.resultsPage = 1;

        opts.query(
        {
          element : opts.element,
          term : term,
          page : this.resultsPage,
          context : null,
          matcher : opts.matcher,
          callback : this._bind(function (data)
          {
            var def; // default choice

            // ignore old responses
            if (queryNumber != this.queryCount)
            {
              return;
            }

            // ignore a response if the oj-combobox has been closed before it was received
            if (!this._opened())
            {
              return;
            }

            // save context, if any
            this.context = (data.context === undefined) ? null : data.context;
            // create a default choice and prepend it to the list

            ///ojselect doesn't allow adding a new option
            if (data.results.length === 0 && this.opts.manageNewEntry && search.val() !== "")
            {
              def = this.opts.manageNewEntry.call(self, search.val(), data.results);
              if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null)
              {
                if ($(data.results).filter(
                    function ()
                  {
                    return self.id(this) === self.id(def);
                  }
                  ).length === 0)
                {
                  data.results.unshift(def);
                }
              }
            }

            if (data.results.length === 0 && _checkFormatter(opts.formatNoMatches, "formatNoMatches"))
            {
              render("<li class='" + self._classNm + "-no-results'>" + opts.formatNoMatches(search.val()) + "</li>");
              return;
            }

            results.empty();
            self.opts.populateResults.call(this, results, data.results,
            {
              term : search.val(),
              page : this.resultsPage,
              context : null
            }
            );
            this._postprocessResults(data, initial);
            postRender();
          }
          )
        }
        );
      },
      _cancel : function ()
      {
        this.close();
      },
      _focusSearch : function ()
      {
        _focus(this.search);
      },
      _selectHighlighted : function (options)
      {
        var index = this._highlight(),
        highlighted = this.results.find("." + this._classNm + "-highlighted"),
        data = highlighted.closest("." + this._classNm + "-result").data(this._elemNm);

        if (data)
        {
          this._highlight(index);
          this._onSelect(data, options);
        }
        else if (options && options.noFocus)
        {
          this.close();
        }
      },
      _getPlaceholder : function ()
      {
        return this.opts.element.attr("placeholder") ||
        this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
        this.opts.element.data("placeholder") ||
        this.opts.placeholder;
      },

      ///ojselect placeholder
      _getPlaceholderOption : function ()
      {
        return undefined;
      },

      _initContainerWidth : function ()
      {
        function resolveContainerWidth()
        {
          var style,
          attrs,
          matches,
          i,
          l,
          attr;

          // check if there is inline style on the element that contains width
          style = this.opts.element.attr('style');
          if (style !== undefined)
          {
            attrs = style.split(';');
            for (i = 0, l = attrs.length; i < l; i = i + 1)
            {
              attr = attrs[i].replace(/\s/g, '');
              matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
              if (matches !== null && matches.length >= 1)
                return matches[1];
            }
          }
        };

        var width = resolveContainerWidth.call(this);
        if (width !== null)
        {
          this.container.css("width", width);
        }
      },

      ///ojselect
      getVal: function () {
        return this.opts.element.val();
      },

      ///ojselect
      setVal: function (val) {
        this.opts.element.val(val);
      },

      ///ojselect
      _hasSearchBox : function ()
      {
        return (this.opts.minimumResultsForSearch !== undefined &&
          this.container._hasSearchBox !== undefined);
      }

    }
    );

  ///ojselect
  _AbstractSingleChoice = _clazz(_AbstractOjChoice,
    {
      //_AbstractSingleChoice single
      _enableInterface : function ()
      {
        if (_AbstractSingleChoice.superclass._enableInterface.apply(this, arguments))
        {
          this.search.prop("disabled", !this._isInterfaceEnabled());
        }
      },

      //_AbstractSingleChoice single
      _focus : function ()
      {
        if (this._opened())
        {
          this.close();
        }
      },

      //_AbstractSingleChoice single
      _cancel : function ()
      {
        _AbstractSingleChoice.superclass._cancel.apply(this, arguments);
      },

      //_AbstractSingleChoice single
      _destroy : function ()
      {
        $("label[for='" + this.search.attr('id') + "']")
        .attr('for', this.opts.element.attr("id"));
        _AbstractSingleChoice.superclass._destroy.apply(this, arguments);
      },

      //_AbstractSingleChoice single
      _clear : function ()
      {
        var data = this.selection.data(this._elemNm);
        if (data)
        { // guard against queued quick consecutive clicks
          this.opts.element.val("");
          this.search.val("");
          this.selection.removeData(this._elemNm);
          this._triggerChange();
        }
        this._setPlaceholder();
      },

      //_AbstractSingleChoice single
      _initSelection : function ()
      {
        var selected,
        element,
        self = this;

        if (this.datalist || this.getVal() !== "")
        {
          if (this.datalist)
            element = this.datalist;
          else
            element = this.opts.element;
          this.opts.initSelection.call(null, element, function (selected)
          {
            if (selected !== undefined && selected !== null)
            {
              self.setVal(self.id(selected));
              self._updateSelection(selected);
              self.close();
              //self._setPlaceholder();
            }
          }
          );
        }
      },

      //_AbstractSingleChoice single
      _containerKeydownHandler : function (e)
      {
        if (!this._isInterfaceEnabled())
          return;

        if (e.which === _KEY.PAGE_UP || e.which === _KEY.PAGE_DOWN)
        {
          // prevent the page from scrolling
          _killEvent(e);
          return;
        }

        ///ojselect
        var isSelectTag = (this._elemNm === "ojselect");
        switch (e.which)
        {
        case _KEY.UP:
        case _KEY.DOWN:
          if (this._opened())
          {
            this._moveHighlight((e.which === _KEY.UP) ? -1 : 1);
          }
          else
          {
            this.open();
            ///ojselect
            if (isSelectTag)
              _focus(this.selection);
          }
          _killEvent(e);
          return;

        case _KEY.ENTER:
          this._selectHighlighted();
          _killEvent(e);
          return;

        case _KEY.TAB:
          this._selectHighlighted(
            {
              noFocus : true
            }
          );
          return;

        case _KEY.ESC:
          this._cancel(e);
          _killEvent(e);
          return;
        }

        ///ojselect
        if (isSelectTag)
          this._userTyping = true;

        if (!this._opened())
          this.open();
      },

      //_AbstractSingleChoice single
      _containerKeyupHandler : function (e)
      {
        if (this._isInterfaceEnabled())
        {
          if (!this._opened())
            this.open();
        }
      },

      //_AbstractSingleChoice single
      _initContainer : function ()
      {
        var selection,
        container = this.container,
        dropdown = this.dropdown,
        idSuffix = _nextUid(),
        elementLabel;

        this.selection = selection = container.find("." + this._classNm + "-choice");

        elementLabel = $("label[for='" + this.opts.element.attr("id") + "']")
          .attr('id', this._classNm + "-label-" + idSuffix);

        // add aria associations
        selection.find("." + this._classNm + "-input").attr("id", this._classNm + "-input-" + idSuffix);
        this.results.attr("id", this._classNm + "-results-" + idSuffix);
        this.search.attr("aria-owns", this._classNm + "-results-" + idSuffix);
        this.search.attr("aria-labelledby", elementLabel.attr("id"));

        this.search.on("keydown", this._bind(this._containerKeydownHandler));
        this.search.on("keyup-change input", this._bind(this._containerKeyupHandler));

        selection.on("mousedown", "abbr", this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;
            this._clear();
            _killEventImmediately(e);
            this.close();
            this.selection._focus();
          }
          ));

        selection.on("mousedown", this._bind(function (e)
          {
            if (this._opened())
            {
              this.close();
            }
            else if (this._isInterfaceEnabled())
            {
              this.open();
            }
            this.search.focus();
          }
          ));

        selection.on("focus", this._bind(function (e)
          {
            _killEvent(e);
          }
          ));

        this.search.on("blur", this._bind(function ()
          {
            this.search.removeClass(this._classNm + "-focused");
          }
          ));

        this._initContainerWidth();
        this.opts.element.addClass(this._classNm + "-offscreen");
        this._setPlaceholder();

      },

      //_AbstractSingleChoice single
      _opening : function (event)
      {
        var el,
        range,
        len;
        _AbstractSingleChoice.superclass._opening.apply(this, arguments);

        el = this.search.get(0);
        if (el.createTextRange)
        {
          range = el.createTextRange();
          range.collapse(false);
          range.select();
        }
        else if (el.setSelectionRange)
        {
          len = this.search.val().length;
          el.setSelectionRange(len, len);
        }

        this._updateResults(true);
        this.opts.element.trigger($.Event("ojexpand"));
      },

      //_AbstractSingleChoice single
      _prepareOpts : function ()
      {
        var opts = _AbstractSingleChoice.superclass._prepareOpts.apply(this, arguments),
        self = this;

        ///ojselect set initial selected value
        var tagName = opts.element.get(0).tagName.toLowerCase();
        if ((tagName === "input" && opts.element.prop("list")) ||
          (tagName === "select" && opts.element.children().length > 0))
        {
          // install the selection initializer
          opts.initSelection = function (element, callback)
          {
            var selected;
            if (self.getVal())
            {
              selected = self._optionToData(element.find("option").filter(function ()
                  {
                    return this.value === self.getVal();
                  }
                  ));
            }
            else
            {
              selected = self._optionToData(element.find("option").filter(function ()
                  {
                    return this.selected;
                  }
                  ));
            }
            callback(selected);
          };
        }
        else if ("data" in opts || this.getVal())
        {
          // install default initSelection when applied to hidden input and data is local
          opts.initSelection = opts.initSelection || function (element, callback)
          {
            var id = self.getVal();

            //search in data by id, storing the actual matching item
            var first = null;
            var match = null;
            opts.query(
            {
              matcher : function (term, text, el)
              {
                var is_match = (id === opts.id(el));
                if (is_match)
                {
                  match = el;
                }
                ///ojselect save the 1st option
                if (!first)
                {
                  first = el;
                }
                return is_match;
              },
              callback : !$.isFunction(callback) ? $.noop : function ()
              {
                ///ojselect if no match, pick the 1st option
                if (!match && tagName === "select")
                {
                  match = first;
                }
                callback(match);
              }
            }
            );
          };
        }
        return opts;
      },

      //_AbstractSingleChoice single
      _setPlaceholder : function ()
      {
        var placeholder = this._getPlaceholder();

        if (placeholder === undefined)
          placeholder = "";
        this.search.val(placeholder).addClass(this._classNm + "-default");
        this.container.removeClass(this._classNm + "-allowclear");
      },

      //_AbstractSingleChoice single
      _postprocessResults : function (data, initial, noHighlightUpdate)
      {
        var selected = 0,
        self = this,
        highlightableChoices;

        highlightableChoices = this._findHighlightableChoices();
        _each2(highlightableChoices, function (i, elm)
        {
          if (self.id(elm.data(self._elemNm)) === self.getVal())
          {
            selected = i;
            return false;
          }
        }
        );

        // and highlight it
        if (noHighlightUpdate !== false)
        {
          if (initial === true && selected >= 0)
          {
            this._highlight(selected);
          }
          else
          {
            this._highlight(0);
          }
        }
      },

      //_AbstractSingleChoice single
      _onSelect : function (data, options)
      {
        if (!this._triggerSelect(data))
        {
          return;
        }

        var old = this.getVal(),
        oldData = this._data();
        this.setVal(this.id(data));
        this._updateSelection(data);
        this.close();

        if (!(old === this.id(data)))
        {
          this._triggerChange();
        }
      },

      //_AbstractSingleChoice single
      val : function ()
      {
        var val,
        data = null,
        self = this,
        oldData = this._data();

        if (arguments.length === 0)
        {
          return this.getVal();
        }

        val = arguments[0];

        if (this.datalist)
        {
          var selected;

          selected = this.datalist
            .val(val)
            .find("option").filter(function ()
            {
              return this.selected
            }
            );

          _each2(selected, function (i, elm)
          {
            data = self._optionToData(elm);
            return false;
          }
          );
          this.setVal(val);
          this._updateSelection(data);
          this._setPlaceholder();
          this._triggerChange();
        }
        else
        {
          // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
          if (!val && val !== 0)
          {
            this._clear();
            return;
          }
          if (this.opts.initSelection === undefined)
          {
            throw new Error("cannot call val() if initSelection() is not defined");
          }
          this.setVal(val);
          this.opts.initSelection(this.opts.element, function (data)
          {
            self.setVal(!data ? "" : self.id(data));
            self._updateSelection(data);
            self._setPlaceholder();
            self._triggerChange();
          }
          );
        }
      },

      //_AbstractSingleChoice single
      _clearSearch : function ()
      {
        this.search.val("");
      },

      //_AbstractSingleChoice single
      _data : function (value)
      {
        var data;

        if (arguments.length === 0)
        {
          data = this.selection.data(this._elemNm);
          if (data == undefined)
            data = null;
          return data;
        }
        else
        {
          if (!value)
          {
            this._clear();
          }
          else
          {
            data = this._data();
            this.setVal(!value ? "" : this.id(value));
            this._updateSelection(value);
            this._triggerChange();
          }
        }
      }

    }
    );

  _OjSingleCombobox = _clazz(_AbstractSingleChoice,
    {
      _elemNm : "ojcombobox",
      _classNm : "oj-combobox",

      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-combobox oj-widget"
          }
          ).html([
              "<div class='oj-combobox-choice' tabindex='-1' role='presentation'>",
              "   <span class='oj-combobox-search'><input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'",
              "       spellcheck='false' class='oj-combobox-input' role='combobox' aria-expanded='false' aria-autocomplete='list' />",
              "   </span><abbr class='oj-combobox-search-choice-close' role='presentation'></abbr>",
              "   <a class='oj-combobox-arrow' role='presentation'><b class='oj-combobox-icon oj-widget-icon oj-clickable-icon oj-combobox-open-icon' role='presentation'></b></a>",
              "</div>",
              "<div class='oj-combobox-drop oj-combobox-display-none' role='presentation'>",
              "   <ul class='oj-combobox-results' role='listbox'>",
              "   </ul>",
              "</div>"].join(""));
        return container;
      },
      close : function ()
      {
        if (!this._opened())
          return;
        _OjSingleCombobox.superclass.close.apply(this, arguments);

        if (this.search.val() == "")
          this._clear();
        else if (!this._data() && this.search.val !== "")
          this._clearSearch();
        else
          this.search.val(this._data().text);
      },
      _updateSelection : function (data)
      {
        var formatted;

        this.selection.data(this._elemNm, data);
        if (data !== null)
        {
          formatted = this.opts.formatSelection(data, this.search, this.opts.escapeMarkup);
        }
        if (formatted !== undefined)
        {
          this.search.val(formatted);
        }
        this.search.removeClass(this._classNm + "-default");
        if (this.opts.allowClear)
        {
          this.container.addClass(this._classNm + "-allowclear");
        }
      }
    }
    );

  _OjMultiCombobox = _clazz(_AbstractOjChoice,
    {
      _elemNm : "ojcombobox",
      _classNm : "oj-combobox",

      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-combobox oj-combobox-multi oj-widget"
          }
          ).html([
              "<ul class='oj-combobox-choices'>",
              "  <li class='oj-combobox-search-field'>",
              "    <input type='text' role='combobox' aria-expanded='false' aria-autocomplete='list' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='oj-combobox-input'>",
              "  </li>",
              "</ul>",
              "<div class='oj-combobox-description oj-combobox-offscreen'/>",
              "<div class='oj-combobox-drop oj-combobox-drop-multi oj-combobox-display-none'>",
              "   <ul class='oj-combobox-results' role='listbox'>",
              "   </ul>",
              "</div>"].join(""));
        return container;
      },
      _prepareOpts : function ()
      {
        var opts = _OjMultiCombobox.superclass._prepareOpts.apply(this, arguments),
        self = this;

        if (opts.element.get(0).tagName.toLowerCase() === "input" && opts.element.prop("list"))
        {
          // install the selection initializer
          opts.initSelection = function (element, callback)
          {
            var data = [];
            if (opts.element.val())
            {
              var selected;
              var ids = _splitVal(opts.element.val(), opts.separator);
              for (var i = 0; i < ids.length; i++)
              {
                var id = ids[i];
                selected = element.find("option").filter(function ()
                  {
                    return this.value === id;
                  }
                  );
                data.push(self._optionToData(selected));
              }
            }
            else
            {
              var selected;
              selected = element.find("option").filter(function ()
                {
                  return this.selected
                }
                );
              _each2(selected, function (i, elm)
              {
                data.push(self._optionToData(elm));
              }
              );
            }
            callback(data);
          };
        }
        else if ("data" in opts)
        {
          // install default initSelection when applied to hidden input and data is local
          opts.initSelection = opts.initSelection || function (element, callback)
          {
            var ids = _splitVal(element.val(), opts.separator);
            //search in data by array of ids, storing matching items in a list
            var matches = [];
            opts.query(
            {
              matcher : function (term, text, el)
              {
                var is_match = $.grep(ids, function (id)
                  {
                    return id === opts.id(el);
                  }
                  ).length;
                if (is_match)
                {
                  matches.push(el);
                }
                return is_match;
              },
              callback : !$.isFunction(callback) ? $.noop : function ()
              {
                // reorder matches based on the order they appear in the ids array because right now
                // they are in the order in which they appear in data array
                var ordered = [];
                for (var i = 0; i < ids.length; i++)
                {
                  var id = ids[i];
                  for (var j = 0; j < matches.length; j++)
                  {
                    var match = matches[j];
                    if (id === opts.id(match))
                    {
                      ordered.push(match);
                      matches.splice(j, 1);
                      break;
                    }
                  }
                }
                callback(ordered);
              }
            }
            );
          };
        }
        return opts;
      },
      _selectChoice : function (choice)
      {
        var selected = this.container.find("." + this._classNm + "-search-choice-focus");
        if (selected.length && choice && choice[0] == selected[0])
        {}

        else
        {
          if (selected.length)
          {
            this.opts.element.trigger("choice-deselected", selected);
          }
          selected.removeClass(this._classNm + "-search-choice-focus");
          if (choice && choice.length)
          {
            this.close();
            choice.addClass(this._classNm + "-search-choice-focus");
            this.container.find(".oj-combobox-description").html(choice.attr("valueText") + ". Press back space to delete.")
            .attr("aria-live", "assertive");
            this.opts.element.trigger("choice-selected", choice);
          }
        }
      },
      _destroy : function ()
      {
        $("label[for='" + this.search.attr('id') + "']")
        .attr('for', this.opts.element.attr("id"));
        _OjMultiCombobox.superclass._destroy.apply(this, arguments);
      },

      _initContainer : function ()
      {
        var selector = "." + this._classNm + "-choices",
        selection,
        idSuffix = _nextUid(),
        elementLabel;

        this.searchContainer = this.container.find("." + this._classNm + "-search-field");
        this.selection = selection = this.container.find(selector);

        var _this = this;
        this.selection.on("click", "." + this._classNm + "-search-choice:not(." + this._classNm + "-locked)", function (e)
        {
          _this.search[0]._focus();
          _this._selectChoice($(this));
        }
        );

        elementLabel = $("label[for='" + this.opts.element.attr("id") + "']")
          .attr('id', this._classNm + "-label-" + idSuffix);

        // add aria associations
        this.results.attr("id", this._classNm + "-results-" + idSuffix);
        this.search.attr("aria-owns", this._classNm + "-results-" + idSuffix);
        this.search.attr("aria-labelledby", elementLabel.attr("id"));

        this.search.on("input paste", this._bind(function ()
          {
            if (!this._isInterfaceEnabled())
              return;
            if (!this._opened())
            {
              this.open();
            }
          }
          ));

        this.search.attr("tabindex", this.elementTabIndex);
        this.keydowns = 0;
        this.search.on("keydown", this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;

            ++this.keydowns;
            var selected = selection.find("." + this._classNm + "-search-choice-focus");
            var prev = selected.prev("." + this._classNm + "-search-choice:not(." + this._classNm + "-locked)");
            var next = selected.next("." + this._classNm + "-search-choice:not(." + this._classNm + "-locked)");
            var pos = _getCursorInfo(this.search);

            if (selected.length &&
              (e.which == _KEY.LEFT || e.which == _KEY.RIGHT || e.which == _KEY.BACKSPACE || e.which == _KEY.DELETE || e.which == _KEY.ENTER))
            {
              var selectedChoice = selected;
              if (e.which == _KEY.LEFT && prev.length)
              {
                selectedChoice = prev;
              }
              else if (e.which == _KEY.RIGHT)
              {
                selectedChoice = next.length ? next : null;
              }
              else if (e.which === _KEY.BACKSPACE)
              {
                this._unselect(selected.first());
                this.search.width(10);
                selectedChoice = prev.length ? prev : next;
              }
              else if (e.which == _KEY.DELETE)
              {
                this._unselect(selected.first());
                this.search.width(10);
                selectedChoice = next.length ? next : null;
              }
              else if (e.which == _KEY.ENTER)
              {
                selectedChoice = null;
              }

              this._selectChoice(selectedChoice);
              _killEvent(e);
              if (!selectedChoice || !selectedChoice.length)
              {
                this.open();
              }
              return;
            }
            else if (((e.which === _KEY.BACKSPACE && this.keydowns == 1)
                 || e.which == _KEY.LEFT) && (pos.offset == 0 && !pos.length))
            {
              this._selectChoice(selection.find("." + this._classNm + "-search-choice:not(." + this._classNm + "-locked)").last());
              _killEvent(e);
              return;
            }
            else
            {
              this._selectChoice(null);
            }

            if (this._opened())
            {
              switch (e.which)
              {
              case _KEY.UP:
              case _KEY.DOWN:
                this._moveHighlight((e.which === _KEY.UP) ? -1 : 1);
                _killEvent(e);
                return;
              case _KEY.ENTER:
                this._selectHighlighted();
                _killEvent(e);
                return;
              case _KEY.TAB:
                this._selectHighlighted(
                {
                  noFocus : true
                }
                );
                this.close();
                return;
              case _KEY.ESC:
                this._cancel(e);
                _killEvent(e);
                return;
              }
            }

            if (e.which === _KEY.TAB || _KEY.isControl(e) || _KEY.isFunctionKey(e)
               || e.which === _KEY.BACKSPACE || e.which === _KEY.ESC)
            {
              return;
            }

            if (e.which === _KEY.ENTER)
            {
              if (this.opts.openOnEnter === false)
              {
                return;
              }
              else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)
              {
                return;
              }
            }

            this.open();

            if (e.which === _KEY.PAGE_UP || e.which === _KEY.PAGE_DOWN)
            {
              // prevent the page from scrolling
              _killEvent(e);
            }

            if (e.which === _KEY.ENTER)
            {
              // prevent form from being submitted
              _killEvent(e);
            }

          }
          ));

        this.search.on("keyup", this._bind(function (e)
          {
            this.keydowns = 0;
            this._resizeSearch();
          }
          ));

        this.search.on("blur", this._bind(function (e)
          {
            this.search.removeClass(this._classNm + "-focused");
            this._selectChoice(null);
            if (!this._opened())
              this._clearSearch();
            e.stopImmediatePropagation();
          }
          ));

        this.container.on("click", selector, this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;
            if ($(e.target).closest("." + this._classNm + "-search-choice").length > 0)
            {
              // clicked inside a oj-combobox search choice, do not open
              return;
            }
            this._selectChoice(null);
            this._clearPlaceholder();
            this.open();
            this._focusSearch();
            e.preventDefault();
          }
          ));

        this.container.on("focus", selector, this._bind(function ()
          {
            if (!this._isInterfaceEnabled())
              return;
            this._clearPlaceholder();
          }
          ));

        this._initContainerWidth();
        this.opts.element.addClass(this._classNm + "-offscreen");

        // set the placeholder if necessary
        this._clearSearch();
      },
      _enableInterface : function ()
      {
        if (_OjMultiCombobox.superclass._enableInterface.apply(this, arguments))
        {
          this.search.prop("disabled", !this._isInterfaceEnabled());
        }
      },
      _initSelection : function ()
      {
        var data;
        if (this.opts.element.val() === "" && this.opts.element.text() === "")
        {
          this._updateSelection([]);
          this.close();
          // set the placeholder if necessary
          this._clearSearch();
        }
        if (this.datalist || this.opts.element.val() !== "")
        {
          var self = this,
          element;
          if (this.datalist)
            element = this.datalist;
          else
            element = this.opts.element;
          this.opts.initSelection.call(null, element, function (data)
          {
            if (data !== undefined && data !== null)
            {
              self._updateSelection(data);
              self.close();
              // set the placeholder if necessary
              self._clearSearch();
            }
          }
          );
        }
      },
      _clearSearch : function ()
      {
        var placeholder = this._getPlaceholder(),
        maxWidth = this._getMaxSearchWidth();

        if (placeholder !== undefined && this.getVal().length === 0)
        {
          this.search.val(placeholder).addClass(this._classNm + "-default");
          // stretch the search box to full width of the container so as much of the placeholder is visible as possible
          // we could call this._resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
          this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
        }
        else
        {
          this.search.val("").width(10);
        }
      },
      _clearPlaceholder : function ()
      {
        if (this.search.hasClass(this._classNm + "-default"))
        {
          this.search.val("").removeClass(this._classNm + "-default");
        }
      },
      _opening : function (event)
      {
        this._resizeSearch();
        _OjMultiCombobox.superclass._opening.apply(this, arguments);
        this._focusSearch();
        this._updateResults(true);
        this.search.focus();
        this.opts.element.trigger($.Event("ojexpand"));
      },
      close : function ()
      {
        if (!this._opened())
          return;
        this._clearSearch();
        _OjMultiCombobox.superclass.close.apply(this, arguments);
      },
      _focus : function ()
      {
        this.close();
        this.search.focus();
      },
      _updateSelection : function (data)
      {
        var ids = [],
        filtered = [],
        self = this;

        // filter out duplicates
        $(data).each(function ()
        {
          if (ids.indexOf(self.id(this)) < 0)
          {
            ids.push(self.id(this));
            filtered.push(this);
          }
        }
        );
        data = filtered;
        this.selection.find("." + this._classNm + "-search-choice").remove();
        $(data).each(function ()
        {
          self._addSelectedChoice(this);
        }
        );
        self._postprocessResults();
      },
      _onSelect : function (data, options)
      {
        if (!this._triggerSelect(data))
        {
          return;
        }
        this._addSelectedChoice(data);
        if (this.select || !this.opts.closeOnSelect)
          this._postprocessResults(data, false, this.opts.closeOnSelect === true);
        if (this.opts.closeOnSelect)
        {
          this.close();
          this.search.width(10);
        }
        else
        {
          if (this._findHighlightableChoices().length > 0)
          {
            this._clearSearch();
            this.search.width(10);
            this._resizeSearch();
            this._positionDropdown();
          }
          else
          {
            // if nothing left to select close
            this.close();
            this.search.width(10);
          }
        }
        // since its not possible to select an element that has already been
        // added we do not need to check if this is a new element before firing change
        this._triggerChange();

        if (!options || !options.noFocus)
          this._focusSearch();
      },
      _cancel : function ()
      {
        this.close();
        this._focusSearch();
      },
      _addSelectedChoice : function (data)
      {
        var enableChoice = !data.locked,
        enabledItem = $(
            "<li class='" + this._classNm + "-search-choice'>" +
            "    <div></div>" +
            "    <a href='#' onclick='return false;' class='" + this._classNm + "-search-choice-close' tabindex='-1'></a>" +
            "</li>"),
        disabledItem = $(
            //"<li class='oj-combobox-search-choice oj-combobox-locked'>" +
            "<li class='" + this._classNm + "-search-choice " + this._classNm + "-locked'>" +
            "<div></div>" +
            "</li>");
        var choice = enableChoice ? enabledItem : disabledItem,
        id = this.id(data),
        val = this.getVal(),
        formatted;

        formatted = this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
        if (formatted != undefined)
        {
          choice.find("div").replaceWith("<div>" + formatted + "</div>");
          choice.attr("valueText", formatted);
        }
        if (enableChoice)
        {
          choice.find("." + this._classNm + "-search-choice-close")
          .on("mousedown", _killEvent)
          .on("click dblclick", this._bind(function (e)
            {
              if (!this._isInterfaceEnabled())
                return;

              $(e.target).closest("." + this._classNm + "-search-choice").fadeOut('fast', this._bind(function ()
                {
                  this._unselect($(e.target));
                  this.selection.find("." + this._classNm + "-search-choice-focus").removeClass(this._classNm + "-search-choice-focus");
                  this.close();
                  this._focusSearch();
                }
                )).dequeue();
              _killEvent(e);
            }
            ));
        }
        choice.data(this._elemNm, data);
        choice.insertBefore(this.searchContainer);
        val.push(id);
        this.setVal(val);
      },
      _unselect : function (selected)
      {
        var val = this.getVal(),
        data,
        index;
        selected = selected.closest("." + this._classNm + "-search-choice");
        if (selected.length === 0)
        {
          throw "Invalid argument: " + selected + ". Must be ." + this._classNm + "-search-choice";
        }
        data = selected.data(this._elemNm);
        if (!data)
        {
          // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
          // and invoked on an element already removed
          return;
        }
        while ((index = val.indexOf(this.id(data))) >= 0)
        {
          val.splice(index, 1);
          this.setVal(val);
          if (this.select)
            this._postprocessResults();
        }
        selected.remove();
        this._triggerChange();
      },
      _postprocessResults : function (data, initial, noHighlightUpdate)
      {
        var val = this.getVal(),
        choices = this.results.find("." + this._classNm + "-result"),
        compound = this.results.find("." + this._classNm + "-result-with-children"),
        self = this;

        _each2(choices, function (i, choice)
        {
          var id = self.id(choice.data(self._elemNm));
          if (val.indexOf(id) >= 0)
          {
            choice.addClass(self._classNm + "-selected");
            // mark all children of the selected parent as selected
            choice.find("." + self._classNm + "-result-selectable").addClass(self._classNm + "-selected");
          }
        }
        );
        _each2(compound, function (i, choice)
        {
          // hide an optgroup if it doesnt have any selectable children
          //".oj-combobox-result-selectable:not(.oj-combobox-selected)"
          if (!choice.is("." + self._classNm + "-result-selectable")
             && choice.find("." + self._classNm + "-result-selectable:not(." + self._classNm + "-selected)").length === 0)
          {
            choice.addClass(self._classNm + "-selected");
          }
        }
        );
        if (this._highlight() == -1 && noHighlightUpdate !== false)
        {
          self._highlight(0);
        }
        //If all results are chosen render formatNoMAtches
        //".oj-combobox-result:not(.oj-combobox-selected)"
        if (!this.opts.manageNewEntry && !choices.filter("." + this._classNm + "-result:not(." + this._classNm + "-selected)").length > 0)
        {
          if (!data || data && !data.more && this.results.find("." + this._classNm + "-no-results").length === 0)
          {
            if (_checkFormatter(self.opts.formatNoMatches, "formatNoMatches"))
            {
              //"<li class='oj-combobox-no-results'>"
              this.results.append("<li class='" + this._classNm + "-no-results'>" + self.opts.formatNoMatches(self.search.val()) + "</li>");
            }
          }
        }
      },
      _getMaxSearchWidth : function ()
      {
        return this.selection.width() - _getSideBorderPadding(this.search);
      },
      _resizeSearch : function ()
      {
        var minimumWidth,
        left,
        maxWidth,
        containerLeft,
        searchWidth,
        sideBorderPadding = _getSideBorderPadding(this.search);

        minimumWidth = this.search.width() + 10;
        left = this.search.offset().left;
        maxWidth = this.selection.width();
        containerLeft = this.selection.offset().left;
        searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;
        if (searchWidth < minimumWidth)
        {
          searchWidth = maxWidth - sideBorderPadding;
        }
        if (searchWidth < 40)
        {
          searchWidth = maxWidth - sideBorderPadding;
        }
        if (searchWidth <= 0)
        {
          searchWidth = minimumWidth;
        }
        this.search.width(Math.floor(searchWidth));
      },
      getVal : function ()
      {
        var val;
        val = this.opts.element.val();
        return _splitVal(val, this.opts.separator);

      },
      setVal : function (val)
      {
        var unique;
        unique = [];
        // filter out duplicates
        $(val).each(function ()
        {
          if (unique.indexOf(this) < 0)
            unique.push(this);
        }
        );
        this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
        this.search.attr("aria-activedescendant", this.opts.element.attr("id"));
      },
      val : function (val)
      {
        var oldData,
        self = this;

        if (arguments.length === 0)
        {
          return this.getVal();
        }
        oldData = this._data();
        if (!oldData.length)
          oldData = [];
        // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
        if (!val && val !== 0)
        {
          this.opts.element.val("");
          this._updateSelection([]);
          this._clearSearch();
          this._triggerChange();
          return;
        }
        // val is a list of ids
        this.setVal(val);
        if (this.select)
        {
          this.opts.initSelection(this.select, this._bind(this._updateSelection));
          this._triggerChange();
        }
        else
        {
          if (this.opts.initSelection === undefined)
          {
            throw new Error("val() cannot be called if initSelection() is not defined");
          }

          this.opts.initSelection(this.opts.element, function (data)
          {
            var ids = $.map(data, self.id);
            self.setVal(ids);
            self._updateSelection(data);
            self._clearSearch();
            self._triggerChange();
          }
          );
        }
        this._clearSearch();
      },
      _data : function (values)
      {
        var self = this,
        ids,
        old;
        if (arguments.length === 0)
        {
          return this.selection
          .find("." + this._classNm + "-search-choice")
          .map(function ()
          {
            return $(this).data(self._elemNm);
          }
          )
          .get();
        }
        else
        {
          old = this._data();
          if (!values)
          {
            values = [];
          }
          ids = $.map(values, function (e)
            {
              return self.opts.id(e);
            }
            );
          this.setVal(ids);
          this._updateSelection(values);
          this._clearSearch();
          this._triggerChange();
        }
      }
    }
    );

  //ojselect single
  _OjSingleSelect = _clazz(_AbstractSingleChoice,
    {
      _elemNm : "ojselect",
      _classNm : "oj-select",
      _userTyping : false,


      //ojselect single
      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-select oj-widget"
          }
          ).html([

              "<div class='oj-select-choice' tabindex='0' role='presentation'>",
              "  <span class='oj-select-box'>",
              "    <span class='oj-select-chosen'></span>",
              "    <abbr class='oj-select-search-choice-close' role='presentation'></abbr>",
              "    <a class='oj-widget-icon oj-clickable-icon oj-select-open-icon' role='presentation'>",
              "    <b role='presentation'></b></a>",
              "  </span>",
              "</div>",

              "<div class='oj-select-drop oj-select-display-none' role='presentation'>",

              "  <div class='oj-select-search-wrapper'>",

              "  <div class='oj-select-search'>",
              "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'",
              "           spellcheck='false' class='oj-select-input' title='Search field' ",
              "           role='select' aria-expanded='false' aria-autocomplete='list' />",

              "    <span class='oj-select-spyglass-box'>",
              "      <span class='oj-widget-icon oj-select-search-icon' role='presentation'>",
              "       <b role='presentation'></b></span>",
              "    </span>",
              "  </div>",

              "  </div>",

              "   <ul class='oj-select-results' role='listbox'>",
              "   </ul>",
              "</div>"

            ].join(""));
        return container;
      },

       //ojselect single
      _opening : function ()
      {
        _OjSingleSelect.superclass._opening.apply(this, arguments);

        ///ojselect
        this._showSearchBox();
      },

      //ojselect single
      close : function ()
      {
        if (!this._opened())
          return;
        _OjSingleSelect.superclass.close.apply(this, arguments);

        ///ojselect
        //if (this.search.val() == "")
        if (this.text.text() == "")
          this._clear();
        else if (!this._data() && this.search.val !== "")
          this._clearSearch();
        else
          this.search.val(this._data().text);
      },

      //ojselect single
      _initContainer : function ()
      {
        ///ojselect placeholder
        this.text = this.container.find(".oj-select-chosen");
        _OjSingleSelect.superclass._initContainer.apply(this, arguments);

        ///ojselect
        this.selection.on("keydown", this._bind(this._containerKeydownHandler));
        this.selection.on("keyup-change input", this._bind(this._containerKeyupHandler));
      },

      //ojselect single
      _initSelection : function ()
      {
        if (this._isPlaceholderOptionSelected())
        {
          this._updateSelection(null);
          this.close();
          this._setPlaceholder();
        }
        else
        {
          _OjSingleSelect.superclass._initSelection.apply(this, arguments);
        }

      },

      //ojselect single
      _updateSelection : function (data)
      {
        var formatted;

        this.selection.data(this._elemNm, data);
        if (data !== null)
        {
          formatted = this.opts.formatSelection(data, this.search, this.opts.escapeMarkup);
        }
        if (formatted !== undefined)
        {
          ///ojselect
          //this.search.val(formatted);
          this.text.text(formatted);
        }
        ///ojselect placeholder
        this.setVal(data? this.opts.id(data) : data);
        this.text.removeClass(this._classNm + "-default");

        if (this.opts.allowClear)
        {
          this.container.addClass(this._classNm + "-allowclear");
        }
      },

      //ojselect single
      _getPlaceholderOption : function ()
      {
        var element = this.opts.element;
        var firstOption = element.children('option').first();
        if (firstOption.text() === "" && firstOption.val() === "")
        {
          return firstOption;
        }
      },

      //ojselect single
      _isPlaceholderOptionSelected : function ()
      {
        var placeholderOption;
        if (!this._getPlaceholder())
          return false; // no placeholder specified so no option should be considered

        var cval = this.getVal();
        return ((placeholderOption = this._getPlaceholderOption()) !== undefined && placeholderOption.prop("selected"))
         || (cval === "")
         || (cval === undefined)
         || (cval === null);
      },

      //ojselect single
      _getPlaceholder : function ()
      {
        // if a placeholder is specified on a single select without a valid placeholder option ignore it
        if (this._getPlaceholderOption() === undefined)
        {
          return undefined;
        }

        return _OjSingleSelect.superclass._getPlaceholder.apply(this, arguments);
      },

      //ojselect single
      _setPlaceholder : function ()
      {
        var placeholder = this._getPlaceholder();

        if (this._isPlaceholderOptionSelected() && placeholder !== undefined)
        {
          // check for a placeholder option if attached to a select
          if (this._getPlaceholderOption() === undefined)
            return;

          if (placeholder === undefined)
            placeholder = "";
          this.text.text(placeholder).addClass(this._classNm + "-default");
          this.container.removeClass(this._classNm + "-allowclear");
        }
      },

      //ojselect single
      _clearPlaceholder : function ()
      {
        if (this.text.hasClass(this._classNm + "-default"))
        {
          this.text.val("").removeClass(this._classNm + "-default");
        }
      },

      //ojselect single
      getVal: function ()
      {
        return this.opts.element.val() || this.selection.data("selectVal");
      },

      //ojselect single
      setVal: function (val)
      {
        this.opts.element.val(val);
        this.selection.data("selectVal", val);
      },

      //ojselect single
      _showSearchBox : function ()
      {
        var searchBox = this.dropdown.find(".oj-select-search");
        if (searchBox)
        {
          //hide and show the search box
          if (this._hasSearchBox())
          {
            this.dropdown.find(".oj-select-search-wrapper")
            .css("display", "");
            $(searchBox).removeAttr("aria-hidden")
            .attr(
            {
              "tabIndex" : "0"
            }
            );
          }
          else
          {
            this.dropdown.find(".oj-select-search-wrapper")
            .css("display", "none");
            $(searchBox)
            .removeAttr("tabIndex")
            .attr(
            {
              "aria-hidden" : "true"
            }
            );
          }
        }
      },

      //ojselect single
      _hasSearchBox : function ()
      {
        var threshold = this.opts.minimumResultsForSearch;
        var len = this.datalist ? this.datalist[0].length : this.opts.data.length;
        return (len > threshold || this._userTyping);
      }

    }
    );

  var _ojChoice_defaults =
  {
    closeOnSelect : true,
    openOnEnter : true,
    formatResult : function (result, container, query, escapeMarkup)
    {
      var markup = [];
      markup.push(escapeMarkup(result.text));
      return markup.join("");
    },
    formatSelection : function (data, container, escapeMarkup)
    {
      return data ? escapeMarkup(data.text) : undefined;
    },
    formatNoMatches : function ()
    {
      return "No matches found";
    },
    id : function (e)
    {
      return e.id;
    },
    matcher : function (term, text)
    {
      return ('' + text).toUpperCase().indexOf(('' + term).toUpperCase()) >= 0;
    },

    separator : ",",
    escapeMarkup : _defaultEscapeMarkup,
    blurOnChange : false,
    selectOnBlur : false
  };

  var _ojCombobox_methods =
  {
    manageNewEntry : function (term)
    {
      return {
        id : $.trim(term),
        text : $.trim(term)
      };
    }
  };

}());

// TODO: how should copyright notice and header change in our fork?  See related Q's / TODO's in ojButton.js.
/*!
 * jQuery UI Menu @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.position.js
 */
(function() {

/**
 * @class 
 * @name oj.ojMenu
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="menuOverview-section">
 *   JET Menu Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#menuOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant menu with mouse and keyboard interactions for navigation.
 * 
 * <p>A JET Menu can be created from any valid markup as long as the elements have a strict parent/child relationship 
 * and each menu item has an anchor. The most commonly used element is the unordered list ( <code class="prettyprint">&lt;ul></code> ):
 * 
 * <pre class="prettyprint">
 * <code>&lt;ul id="menu">
 *   &lt;li>&lt;a href="#">Item 1&lt;/a>&lt;/li>
 *   &lt;li>&lt;a href="#">Item 2&lt;/a>&lt;/li>
 *   &lt;li>&lt;a href="#">Item 3&lt;/a>
 *     &lt;ul>
 *       &lt;li>&lt;a href="#">Item 3-1&lt;/a>&lt;/li>
 *       &lt;li>&lt;a href="#">Item 3-2&lt;/a>&lt;/li>
 *       &lt;li>&lt;a href="#">Item 3-3&lt;/a>&lt;/li>
 *       &lt;li>&lt;a href="#">Item 3-4&lt;/a>&lt;/li>
 *       &lt;li>&lt;a href="#">Item 3-5&lt;/a>&lt;/li>
 *     &lt;/ul>
 *   &lt;/li>
 *   &lt;li>&lt;a href="#">Item 4&lt;/a>&lt;/li>
 *   &lt;li>&lt;a href="#">Item 5&lt;/a>&lt;/li>
 * &lt;/ul>
 * </code></pre>
 * 
 * <p>If you use a structure other than <code class="prettyprint">&lt;ul></code>/<code class="prettyprint">&lt;li></code>, including using the same element for the menu and the menu items, use the 
 * <code class="prettyprint">menuSelector</code> option to specify a way to differentiate the two elements, e.g., <code class="prettyprint">menuSelector: "div.menuElement"</code>.
 * 
 * <p>Any menu item can be disabled by adding the <code class="prettyprint">oj-disabled</code> class to that element.  As with any DOM change, doing so post-init 
 * requires a <code class="prettyprint">refresh()</code> of the component.  
 * 
 * 
 * <h3 id="icons-section">
 *   Icons
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#icons-section"></a>
 * </h3>
 * 
 * <p>To customize the submenu icon, see the <code class="prettyprint">icons</code> option.
 * 
 * <p>To add other icons to menu items, include them in the markup:
 * 
 * <pre class="prettyprint">
 * <code>&lt;ul id="menu">
 *   &lt;li>&lt;a href="#">&lt;span class="oj-menu-item-icon demo-icon-sprite demo-icon-disk">&lt;/span>Save&lt;/a>&lt;/li>
 * &lt;/ul>
 * </code></pre>
 * 
 * <p>JET Menu automatically adds the necessary padding to items without icons.
 * 
 * 
 * <h3 id="dividers-section">
 *   Dividers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#dividers-section"></a>
 * </h3>
 * 
 * <p>Divider elements can be created by including unlinked menu items that contain only spaces and/or dashes, or nothing at all:  
 * 
 * <pre class="prettyprint">
 * <code>&lt;ul id="menu">
 *   &lt;li>&lt;a href="#">Item 1&lt;/a>&lt;/li>
 *   &lt;li>---&lt;/li>
 *   &lt;li>&lt;a href="#">Item 2&lt;/a>&lt;/li>
 * &lt;/ul>
 * </code></pre>
 * 
 * <p>For WAI-ARIA compliance, JET automatically adds <code class="prettyprint">role="separator"</code> to the divider element.
 * 
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
 *       <td><kbd>Enter</kbd> or <kbd>Space</kbd></td>
 *       <td>Invoke the focused menu item's action, which may be opening a submenu.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td> Move focus to the previous menu item, wrapping around at the top.</tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td> Move focus to the next menu item, wrapping around at the bottom.</tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd> (<kbd>LeftArrow</kbd> in RTL)</td>
 *       <td> Open the submenu, if available.</tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd> (<kbd>RightArrow</kbd> in RTL)</td>
 *       <td> Close the current submenu and move focus to the parent menu item. If not in a submenu, do nothing.</tr>
 *     <tr>
 *       <td><kbd>Esc</kbd></td>
 *       <td> Close the current submenu and move focus to the parent menu item. If not in a submenu, do nothing.</tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td> Move focus to the first menu item.</tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td> Move focus to the last menu item.</tr>
 * </tbody></table>
 * 
 * <p>Typing a letter moves focus to the first item whose title starts with that character. Repeating the same character cycles through matching items. 
 * Typing more characters within the one second timer matches those characters.  
 * 
 * <p>Note that the "Search for text when I start typing" feature in Firefox can interfere with web content that accepts keystrokes, such as this "type a letter" feature of JET Menu.  
 * 
 * <p>Disabled items can receive keyboard focus, but do not allow any other interaction.
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the menu must be <code class="prettyprint">refresh()</code>ed.  
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-menu</code> pseudo-selector can be used in jQuery expressions to select JET Menus.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-menu" ) // selects all JET Menus on the page
 * $myEventTarget.closest( ":oj-menu" ) // selects the closest ancestor that is a JET Menu
 * </code></pre>
 * 
 * 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <p>For components like Menu and Buttonset that contain a number of like items, applications may wish to use a <code class="prettyprint">foreach</code> Knockout binding
 * to stamp out the contents.  This binding cannot live on the same node as the JET <code class="prettyprint">ojComponent</code> binding, and must instead live on a nested 
 * virtual element as follows:
 * 
 * <pre class="prettyprint">
 * <code>&lt;ul id="menu" data-bind="ojComponent: {component: 'ojMenu'}">
 *     &lt;!-- ko foreach: menuItems -->
 *         &lt;li data-bind="attr: {id: id}, css: {'oj-disabled': disabled}">
 *             &lt;a href="#" data-bind="text: label">&lt;/a>
 *         &lt;/li>
 *     &lt;!-- /ko -->
 * &lt;/ul>
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <li>All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.</li>
 *   <li>JQUI Menu has <code class="prettyprint">menus</code> and <code class="prettyprint">position</code> options.  For clarity, these options have been renamed to 
 *       <code class="prettyprint">menuSelector</code> and <code class="prettyprint">submenuPosition</code> in JET Menu.</li>
 *   <li>JQUI Menu has a <code class="prettyprint">role</code> option, which defaults to <code class="prettyprint">"menu"</code>.  This option was removed in JET Menu.  Reason: 
 *       JET Menu is a menu component; thus we feel that the only appropriate WAI-ARIA role for our component is <code class="prettyprint">"menu"</code>.</li>
 *   <li>JQUI Menu has <code class="prettyprint">isFirstItem()</code> and <code class="prettyprint">isLastItem()</code> methods, which were removed in JET Menu.  Reason:  To 
 *       keep the API lean, we prefer to avoid methods with such specific functionality.</li>
 *   <li>JQUI Menu has <code class="prettyprint">nextPage()</code> and <code class="prettyprint">previousPage()</code> methods, which were removed in JET Menu.  Reason:  
 *       In JET we wish to promote best design practices.  Menus with scrollbars are considered undesirable UX.</li>
 *   <li>JET Menu swaps the functionality of the left and right arrow keys in RTL.</li>
 *   <li>JET Menu creates WAI-ARIA compliant separator elements, by applying <code class="prettyprint">role="separator"</code> to them.</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "menu" or "button".  
 * E.g. the JQUI <code class="prettyprint">menucreate</code> event is <code class="prettyprint">ojcreate</code> in JET, as shown in the doc for that event.
 * Reason:  This makes the API more powerful.  It allows apps to listen to "foo" events from <em>all</em> JET components via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", myFunc);
 * </code></pre>
 * 
 * or to "foo" events only from JET Menus (the JQUI functionality) via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", ":oj-menu", myFunc);
 * </code></pre>
 * 
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * 
 * @desc Creates a JET Menu.  If called after the menu is already created, it is equivalent to the 
 * "set many options" overload of <code class="prettyprint">option()</code>.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the menu with no options specified:</caption>
 * $( ".selector" ).ojMenu();
 * 
 * @example <caption>Initialize the menu with some options and callbacks specified:</caption>
 * $( ".selector" ).ojMenu( { "disabled": true, "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize the menu via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;ul id="menu" data-bind="ojComponent: { component: 'ojMenu', 
 *                                         disabled: true, 
 *                                         select: menuItemSelect }">
 */
oj.__registerWidget("oj.ojMenu", $['oj']['baseComponent'], {
    version: "1.0.0", // doesn't get renamed even when unquoted and not in (our) externs.js file, so I'm leaving it unquoted for now.  TODO: Is it used anywhere, e.g. build tool?  If so, should prob quote or extern or something.  If not, should it get moved to @version (if that exists) or similar, or just remove, or...?
    defaultElement: "<ul>", // added to externs.js, since this is an override of a superclass member.  (That's the rule for public methods, what about protected fields?)  TODO: Would @override do the job and be better than externing?
    delay: 300, // like version, doesn't get renamed even when unquoted and not in (our) externs.js file, so I'm leaving it unquoted for now.  Unlike version, I assume this is completely private, but do NOT rename to _delay since there's an inherited instance method by that name.
    role: "menu", // private.  I moved from options to here since no longer public option.  Leave unquoted so gets renamed by GCC as desired.
    widgetEventPrefix : "oj", 
    options: { // options is in externs.js, so no need for quotes
        /**
         * Disables the menu if set to <code class="prettyprint">true</code>.
         * 
         * @member
         * @name disabled
         * @memberof! oj.ojMenu
         * @instance
         * @type {boolean}
         * @default <code class="prettyprint">false</code>
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">disabled</code> option specified:</caption>
         * $( ".selector" ).ojMenu( { "disabled": true } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
         * // getter
         * var disabled = $( ".selector" ).ojMenu( "option", "disabled" );
         * 
         * // setter
         * $( ".selector" ).ojMenu( "option", "disabled", true );
         */
        // disabled option declared in superclass, but we still want the above API doc
        
        /**
         * Icon to use for submenus.
         * 
         * <p> Note: This API is under review and may be removed, in lieu of using theming to change the submenu icon.  
         * For the moment, that is how it works; this API has no effect.  
         * If the API is kept, it may change.  At a minimum, the default value will change.
         * 
         * @expose 
         * @memberof! oj.ojMenu
         * @instance
         * @type {Object}
         * @default <code class="prettyprint">{ submenu: "ui-icon-carat-1-e" }</code>
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">icons</code> option specified:</caption>
         * $( ".selector" ).ojMenu({ "icons": { "submenu": "my-style-class" } });
         * 
         * @example <caption>Get or set the <code class="prettyprint">icons</code> option, after initialization:</caption>
         * // getter
         * var icons = $( ".selector" ).ojMenu( "option", "icons" );
         * 
         * // setter
         * $( ".selector" ).ojMenu( "option", "icons", { "submenu": "my-style-class" } );
         */
        icons: {
            /** @expose */
            submenu: "ui-icon-carat-1-e"
        },
        
        /**
         * Identifies the position of this menu when launched via the <code class="prettyprint">show()</code> method or via menu button or 
         * context menu functionality.
         * 
         * <p>By default, the menu is positioned relative to the launching event if that event is a right-click mouse event, and the launcher 
         * element otherwise.  Both of those items are passed to the <code class="prettyprint">show()</code> method.  This behavior is 
         * appropriate for context menus and menu buttons.  If a value is set on the <code class="prettyprint">of</code> field, then the menu 
         * is positioned relative to that element or position instead.  
         * 
         * <p>Please refer to the jQuery UI [Position]{@link http://api.jqueryui.com/position/} utility for more details about the various choices.
         * 
         * <p>See also <code class="prettyprint">show()</code> for more details.
         * 
         * @expose 
         * @memberof! oj.ojMenu
         * @instance
         * @type {Object}
         * @default <code class="prettyprint">{ "my": "left top", "at": "left bottom" }</code>
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">menuPosition</code> option specified:</caption>
         * $( ".selector" ).ojMenu({ menuPosition: { "my": "left top", "at": "right-5 top+5" } });
         * 
         * @example <caption>Get or set the <code class="prettyprint">menuPosition</code> option, after initialization:</caption>
         * // getter
         * var position = $( ".selector" ).ojMenu( "option", "menuPosition" );
         *  
         * // setter
         * $( ".selector" ).ojMenu( "option", "menuPosition", { "my": "left top", "at": "right-5 top+5" } );
         */
        menuPosition: { // TODO: start, not left.  Do we need to "at-expose" the other fields (of, etc.) for them to work when minified?  
            /** @expose */
            my: "left top",
            /** @expose */
            at: "left bottom"
        },

        /**
         * Selector for the elements that serve as the menu container, including submenus.
         * 
         * <p>Note: The <code class="prettyprint">menuSelector</code> option should not be changed after initialization. Existing submenus will not be updated.
         * 
         * @expose 
         * @memberof! oj.ojMenu
         * @instance
         * @type {string}
         * @default <code class="prettyprint">"ul"</code>
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">menuSelector</code> option specified:</caption>
         * $( ".selector" ).ojMenu({ menuSelector: "div" });
         * 
         * @example <caption>Get the <code class="prettyprint">menuSelector</code> option, after initialization:</caption>
         * // getter
         * var menuSelector = $( ".selector" ).ojMenu( "option", "menuSelector" );
         */
        menuSelector: "ul",
        
        /**
         * Identifies the position of submenus.  By default, the submenu is positioned relative to the parent menu item, but if a value is set on 
         * the <code class="prettyprint">of</code> field, then the submenu is positioned relative to that element or position instead.  
         * 
         * <p>Please refer to the jQuery UI [Position]{@link http://api.jqueryui.com/position/} utility for more details about the various choices.
         * 
         * @expose 
         * @memberof! oj.ojMenu
         * @instance
         * @type {Object}
         * @default <code class="prettyprint">{ "my": "left top", "at": "right top" }</code>
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">submenuPosition</code> option specified:</caption>
         * $( ".selector" ).ojMenu({ submenuPosition: { "my": "left top", "at": "right-5 top+5" } });
         * 
         * @example <caption>Get or set the <code class="prettyprint">submenuPosition</code> option, after initialization:</caption>
         * // getter
         * var position = $( ".selector" ).ojMenu( "option", "submenuPosition" );
         *  
         * // setter
         * $( ".selector" ).ojMenu( "option", "submenuPosition", { "my": "left top", "at": "right-5 top+5" } );
         */
        submenuPosition: { // TODO: start, not left.  Do we need to "at-expose" the other fields (of, etc.) for them to work when minified?  
            /** @expose */
            my: "left top",
            /** @expose */
            at: "right top"
        },

        // Events
        
        /**
         * Triggered before this menu is launched via the <code class="prettyprint">show()</code> method or via menu button or context menu functionality.
         * The launch can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
         *
         * @expose 
         * @event 
         * @memberof! oj.ojMenu
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.launcher the launcher element that was passed to the <code class="prettyprint">show()</code> method.
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">beforeShow</code> callback specified:</caption>
         * $( ".selector" ).ojMenu({
         *     "beforeShow": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeshow</code> event:</caption>
         * $( ".selector" ).on( "ojbeforeshow", function( event, ui ) {} );
         */
        beforeShow: null,
        
        /**
         * Triggered when a menu item loses focus.
         *
         * @expose 
         * @event 
         * @memberof! oj.ojMenu
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.item the currently active menu item
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">blur</code> callback specified:</caption>
         * $( ".selector" ).ojMenu({
         *     "blur": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojblur</code> event:</caption>
         * $( ".selector" ).on( "ojblur", function( event, ui ) {} );
         */
        blur: null,
        
        /**
         * Triggered when the menu is created.
         *
         * @event 
         * @name create
         * @memberof! oj.ojMenu
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Empty object included for consistency with other events
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojMenu({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */
        // create event declared in superclass, but we still want the above API doc
        
        /**
         * Triggered when a menu gains focus or a menu item becomes active.
         *
         * @expose 
         * @event 
         * @memberof! oj.ojMenu
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.item the currently active menu item
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">focus</code> callback specified:</caption>
         * $( ".selector" ).ojMenu({
         *     "focus": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojfocus</code> event:</caption>
         * $( ".selector" ).on( "ojfocus", function( event, ui ) {} );
         */
        focus: null,
        
        /**
         * Triggered when a menu item is selected.  Applications should listen for this event, not the 
         * <code class="prettyprint">click</code> event, to detect when a menu item has been selected. 
         *
         * @expose 
         * @event 
         * @memberof! oj.ojMenu
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.item the currently active menu item
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">select</code> callback specified:</caption>
         * $( ".selector" ).ojMenu({
         *     "select": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
         * $( ".selector" ).on( "ojselect", function( event, ui ) {} );
         */
        select: null
    },

    _create: function() { // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
        this.activeMenu = this.element;
        // flag used to prevent firing of the click handler
        // as the event bubbles up through nested menus
        this.mouseHandled = false;
        this.element
            .uniqueId()
            .addClass( "oj-menu oj-widget" )
            
            // TODO: several issues with this toggleClass call that JQUI put here:
            // - Shouldn't this be done at refresh time too, not just create time, in case the presence of icons changes prior to a refresh?
            //   If so, move this line to _setup().
            // - Our "Menu with icons" demo currently indicates that the app specifies icons using "oj-menu-item-icon", but this find() is looking for .oj-widget-icon, 
            //   so that in the demo this line doesn't add the "oj-menu-icons" class.  
            .toggleClass( "oj-menu-icons", !!this.element.find( ".oj-widget-icon" ).length )
            
            .attr({
                "role": this.role,
                "tabIndex": "0"
            });
            // pass true to catch these events on all menus, not just enabled menus
            this._on(true, {
                //Required to stick the focus on disabled menu.
                "mousedown .oj-menu-item": function(event) {
                    if (this.options.disabled) {
                        event.preventDefault();
                    }
                },
                "click": function(event) {
                    if (this.options.disabled) {
                        event.preventDefault();
                    }
                },
                //On Esc key focus should be shifted to launcher and dismiss menu.
                "keydown": function(event) {
                    if (this.options.disabled) {
                        if (event.keyCode === $.ui.keyCode.ESCAPE) {
                            if (this._launcher) { // if this is a popup menu that's currently shown
                                this._focusLauncherAndDismiss(event);
                            }
                        }
                    }
                },
                //Dismiss the disbaled menu popup on focus lost.
                "blur": function(event) {
                    if (this.options.disabled) {
                        if (this._launcher) {
                            this.__dismiss(event);
                        }
                    }
                }
            });
        
        // needed since _setOption() is not automatically called at create time.
        // TODO: Would be a little better to toggle these 2 things rather than only setting them if true, as in superclass _setOption().
        if ( this.options.disabled ) {
            this.element
                .addClass( "oj-disabled" )
                .attr( "aria-disabled", "true" );
        }

        this._on({
            // Prevent focus from sticking to links inside menu after clicking
            // them (focus should always stay on UL during navigation).
            "mousedown .oj-menu-item > a": function( event ) {
                event.preventDefault();
            },
            "click .oj-disabled > a": function( event ) {
                event.preventDefault();
            },
            "click .oj-menu-item:has(a)": function( event ) {
                var target = $( event.target ).closest( ".oj-menu-item" );
                if ( !this.mouseHandled && target.not( ".oj-disabled" ).length ) {
                    this.mouseHandled = true;

                    this.select( event ); // TODO
                    // Open submenu on click
                    if ( target.has( ".oj-menu" ).length ) {
                        this.expand( event );
                    } else if ( !this.element.is( ":focus" ) ) {
                        // Redirect focus to the menu
                        this.element.trigger( "focus", [ true ] );

                        // If the active item is on the top level, let it stay active.
                        // Otherwise, blur the active item since it is no longer visible.
                        if ( this.active && this.active.parents( ".oj-menu" ).length === 1 ) {
                            clearTimeout( this.timer );
                        }
                    }
                }
            },
            "mouseenter .oj-menu-item": function( event ) {
                var target = $( event.currentTarget );
                // Remove oj-active class from siblings of the newly focused menu item
                // to avoid a jump caused by adjacent elements both having a class with a border
                target.siblings().children( ".oj-active" ).removeClass( "oj-active" );
                this.focus( event, target );
            },
            "mouseleave": this.collapseAll,
            "mouseleave .oj-menu": this.collapseAll,
            "focus": function( event, keepActiveItem ) {
                // If there's already an active item, keep it active
                // If not, activate the first item
                var item = this.active || this.element.children( ".oj-menu-item" ).eq( 0 );

                if ( !keepActiveItem ) {
                    this.focus( event, item );
                }
            },
            // this handles enabled menus.  For disabled menus, see this handler: this._on(true, {...});
            "blur": function( event ) {
                this._delay(function() {
                    if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
                        this.collapseAll( event );
                    }
                });
                
                if (this._launcher) // if this is a popup menu that's currently shown
                    this.__dismiss(event);
            },
            "keydown": this._keydown,
            "keyup": function( event ) {
                if (event.keyCode == $.ui.keyCode.ENTER || event.keyCode == $.ui.keyCode.SPACE) 
                    this.__spaceEnterDownInMenu = false;
            }
        });
        
        this._setup();

        // Clicks outside of a menu collapse any open menus, and dismiss the entire menu if it's a popup
        this._on(true, this.document, {
            "click": function( event ) {
                // TODO: file bug for this fix
                if ( !$( event.target ).closest( this.element ).length ) {
                    this.collapseAll( event );
                    if (this._launcher) 
                        this.__dismiss(event);
                }

                // Reset the mouseHandled flag
                this.mouseHandled = false;
            }
        });
        this._super();
    },
    
    // TODO: destroy the stuff from _popupInit, too, and anything set by position() callee on menu or submenus
    _destroy: function() { // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
        // Destroy (sub)menus
        this.element
            .removeAttr( "aria-activedescendant" )
            .find( ".oj-menu" ).addBack()
                .removeClass( "oj-menu oj-widget oj-menu-icons" )
                .removeAttr( "role" )
                .removeAttr( "tabIndex" )
                .removeAttr( "aria-labelledby" )
                .removeAttr( "aria-expanded" )
                .removeAttr( "aria-hidden" )
                .removeAttr( "aria-disabled" )
                .removeUniqueId()
                .show();

        // Destroy menu items
        this.element.find( ".oj-menu-item" )
            .removeClass( "oj-menu-item" )
            .removeAttr( "role" )
            .children( "a" )
                .removeAttr( "aria-disabled" )
                .removeUniqueId()
                .removeClass( "oj-hover" )
                .removeAttr( "tabIndex" )
                .removeAttr( "role" )
                .removeAttr( "aria-haspopup" )
                .children().each( function() {
                    var elem = $( this );
                    if ( elem.data( "oj-ojMenu-submenu-carat" ) ) {
                        elem.remove();
                    }
                });

        // Destroy menu dividers
        this.element.find( ".oj-menu-divider" )
            .removeClass( "oj-menu-divider" )
            .removeAttr( "role" );
    },

    _keydown: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        /*jshint maxcomplexity:20*/
        var match, prev, character, skip, regex,
            preventDefault = true;

        function escape( value ) {
            return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
        }

        switch ( event.keyCode ) {
        case $.ui.keyCode.HOME:
            this._move( "first", "first", event );
            break;
        case $.ui.keyCode.END:
            this._move( "last", "last", event );
            break;
        case $.ui.keyCode.UP:
            this.previous( event );
            break;
        case $.ui.keyCode.DOWN:
            this.next( event );
            break;
        case $.ui.keyCode.LEFT:
        case $.ui.keyCode.RIGHT:
            var isExpand = (event.keyCode === $.ui.keyCode.RIGHT) ^ this.isRtl;
            if (isExpand) {
                if ( this.active && !this.active.is( ".oj-disabled" ) ) {
                    this.expand( event );
                }
            } else {
                this.collapse( event );
            }
            break;
        case $.ui.keyCode.ENTER:
        case $.ui.keyCode.SPACE:
            this._activate( event );
            
            this.__spaceEnterDownInMenu = true;
            var self = this;
            
            // The spaceEnterDelay and __spaceEnterDownInMenu code addresses an issue where closing a menu, from within the menu via 
            // Space or Enter, can immediately reopen the menu, because the keyUp can happen after focus has jumped to the button, 
            // which clicks the button, which reopens the menu.  Repros most readily in Firefox.
            var spaceEnterDelay = 100; // 1 not enough in FF; 100 seems to do it.  If continued problems, try increasing this value.

            setTimeout(function () {
                self.__spaceEnterDownInMenu = false;
            }, spaceEnterDelay); 
            
            break;
        // this handles enabled menus.  For disabled menus, see this handler: this._on(true, {...});
        case $.ui.keyCode.ESCAPE:
            if (this._launcher) { // if this is a popup menu that's currently shown
                // TBD: Currently using the exact code (checking aria-activedescendant) that worked in the v0.5 demo.  Seems cleaner to use this.active (or maybe 
                // this.activeMenu?), but per todo's in this file, the jqui code doesn't seem to do a good job of keeping the 2 in synch, so sticking with tried-and-true for now.
                var activeItemId = this.element.attr("aria-activedescendant"); // <a> or nothing
                var topLevelAnchorSelector = "#" + this.element.attr("id") + ">*>a"; // * is typically <li>
                var submenuOpen = activeItemId && !$("#" + activeItemId).is( topLevelAnchorSelector );

                if (submenuOpen)
                    this.collapse( event );
                else
                    this._focusLauncherAndDismiss( event );
            } else {
                this.collapse( event );
            }
            break;
        default:
            preventDefault = false;
            prev = this.previousFilter || "";
            character = String.fromCharCode( event.keyCode );
            skip = false;

            clearTimeout( this.filterTimer );

            if ( character === prev ) {
                skip = true;
            } else {
                character = prev + character;
            }

            regex = new RegExp( "^" + escape( character ), "i" );
            match = this.activeMenu.children( ".oj-menu-item" ).filter(function() {
                return regex.test( $( this ).children( "a" ).text() );
            });
            match = skip && match.index( this.active.next() ) !== -1 ?
                this.active.nextAll( ".oj-menu-item" ) :
                match;

            // If no matches on the current filter, reset to the last character pressed
            // to move down the menu to the first item that starts with that character
            if ( !match.length ) {
                character = String.fromCharCode( event.keyCode );
                regex = new RegExp( "^" + escape( character ), "i" );
                match = this.activeMenu.children( ".oj-menu-item" ).filter(function() {
                    return regex.test( $( this ).children( "a" ).text() );
                });
            }

            if ( match.length ) {
                this.focus( event, match );
                if ( match.length > 1 ) {
                    this.previousFilter = character;
                    this.filterTimer = this._delay(function() {
                        delete this.previousFilter;
                    }, 1000 );
                } else {
                    delete this.previousFilter;
                }
            } else {
                delete this.previousFilter;
            }
        }

        if ( preventDefault ) {
            event.preventDefault();
        }
    },

    /*
     * Called for Space and Enter
     */
    _activate: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        if ( !this.active.is( ".oj-disabled" ) ) {
            if ( this.active.children( "a[aria-haspopup='true']" ).length ) {
                this.expand( event );
            } else {
                this.select( event );
            }
        }
    },

    /**
     * Refreshes the visual state of the menu. JET components require a <code class="prettyprint">refresh()</code> after the DOM is 
     * programmatically changed underneath the component.  For Menu, this includes:
     * 
     * <ul>
     *   <li>After menu items or submenus are added or removed.</li>
     *   <li>After a change to a menu item's disabled status (which is set by applying or removing the <code class="prettyprint">oj-disabled</code> 
     *       class from the menu item).</li>
     *   <li>After the reading direction (LTR vs. RTL) changes.</li>
     * </ul>
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojMenu
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojMenu( "refresh" );
     */
    refresh: function() { // Override of public base class method (unlike JQUI).  Method name needn't be quoted since is in externs.js.
        this._super();
        this._setup();
    },

    _setup: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this.isRtl = this._GetReadingDirection() === "rtl";
        var menus,
            icon = this.options.icons.submenu,
            submenus = this.element.find( this.options.menuSelector );

        // Initialize nested menus
        submenus.filter( ":not(.oj-menu)" )
            .addClass( "oj-menu oj-widget" )
            .hide()
            .attr({
                "role": this.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            })
            .each(function() {
                var menu = $( this ),
                    item = menu.prev( "a" ),
                    submenuCarat = $( "<span>" );
                
                submenuCarat   // separate stmt rather than chaining, since GCC can't tell that this is the setter overload of .data().
                    .addClass( "oj-menu-icon oj-widget-icon " + icon )
                    .data( "oj-ojMenu-submenu-carat", true );

                item
                    .attr( "aria-haspopup", "true" )
                    .prepend( submenuCarat );
                var itemId = /** @type {string|undefined}  tell GCC is getter, not setter, overload of attr() */
                             (item.attr( "id" ));
                
                // itemId is undefined if id attr not present, in which case following stmt is a chainable no-op (returns 
                // "this" and doesn't set anything).
                menu.attr( "aria-labelledby", itemId );
            });

        menus = submenus.add( this.element );
        var children = menus.children();
        
        // Anything that used to be a divider, but now has an "a", should become a menu element.
        // TODO: the need for this should go away once we start using <hr>'s rather than unlinked <li>s.  
        // If not, should add code to go in other direction too, i.e. anything that used to be a menu item 
        // but is now a divider.  
        children.filter( ".oj-menu-divider" ).has("a")
            .removeClass("oj-menu-divider oj-menu-item") // remove oj-menu-item if somehow present to ensure that it enters following block
            .removeAttr("role");
        
        // Don't refresh list items that are already adapted
        // TBD: .has prob has better perf than :has
        children.filter( ":not(.oj-menu-item):has(a)" )
            .addClass( "oj-menu-item" )
            .attr( "role", "presentation" )
            .children( "a" )
                .uniqueId()
                .attr({
                    "tabIndex": "-1",
                    "role": this._itemRole()
                });

        // Initialize unlinked menu-items containing spaces and/or dashes only as dividers
        children.filter( ":not(.oj-menu-item)" ).each(function() {
            var item = $( this );
            // hyphen, em dash, en dash
            if ( !/[^\-\u2014\u2013\s]/.test( item.text() ) ) {
                item.addClass( "oj-menu-divider" )
                    .attr( "role", "separator" );
            }
        });

        // Add aria-disabled to any disabled menu item, and remove it from any recently enabled menu item
        children.filter( ".oj-disabled" ).children( "a" ).attr( "aria-disabled", "true" );
        children.filter( ":not(.oj-disabled)" ).children( "a" ).removeAttr( "aria-disabled" );

        // If the active item has been removed, blur the menu
        if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
            this.blur();
        }
    },

    _itemRole: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        return "menuitem"; 
//        {
//            "menu": "menuitem",
//            "listbox": "option"
//        }[ this.role ];
    },

    _setOption: function( key, value ) { // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
        if ( key === "icons" ) {
            this.element.find( ".oj-menu-icon" )
                .removeClass( this.options.icons.submenu )
                .addClass( value.submenu );
        }
        this._super( key, value );
    },

    /**
     * Activates the specified menu item and triggers the menu's <code class="prettyprint">focus</code> event.
     * 
     * @expose 
     * @memberof! oj.ojMenu
     * @instance
     * @param {Event} event - What triggered the menu item to gain focus.  May be <code class="prettyprint">null</code>, but may not be omitted.
     * @param {!jQuery} item - The menu item to focus/activate.  Its containing submenu, if any, must already be expanded.
     * 
     * @example <caption>Invoke the <code class="prettyprint">focus</code> method:</caption>
     * $( ".selector" ).ojMenu( "focus", null, menu.find( ".oj-menu-item:last" ) );
     */
    focus: function( event, item ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        var nested, focused;
        this.blur( event, event && event.type === "focus" );

        this.active = item.first();
        focused = this.active.children( "a" ).addClass( "oj-focus" );
        // Only update aria-activedescendant if there's a role
        // otherwise we assume focus is managed elsewhere
        if ( this.role ) {
            this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
        }

        // Highlight active parent menu item, if any
        this.active
            .parent()
            .closest( ".oj-menu-item" )
            .children( "a:first" )
            .addClass( "oj-active" );

        if ( event && event.type === "keydown" ) {
            this._close();
        } else {
            this.timer = this._delay(function() {
                this._close();
            }, this.delay );
        }

        nested = item.children( ".oj-menu" );
        if ( nested.length && ( /^mouse/.test( event.type ) && !this.active.hasClass( "oj-disabled" ) ) ) {
            this._startOpening(nested);
        }
        this.activeMenu = item.parent();

        this._trigger( "focus", event, { "item": item } ); // TODO: item.first() or this.active
    },

    /**
     * Removes focus from the active menu item, if any.  Does not affect whether the menu itself 
     * has browser focus.  Resets any active element styles and triggers the menu's <code class="prettyprint">blur</code> event.
     * 
     * @expose 
     * @memberof! oj.ojMenu
     * @instance
     * @param {Event=} event - What triggered the menu item to blur.  May be <code class="prettyprint">null</code> or omitted.
     * 
     * @example <caption>Invoke the <code class="prettyprint">blur</code> method:</caption>
     * $( ".selector" ).ojMenu( "blur" ) );
     */
    blur: function( event /*, fromFocus*/ ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        // fromFocus is an internal param that should not be JSDoc'd.  It's true iff the caller is the focus() method.
        // The JSDoc claim that the first param can be omitted is directed at public callers; it can't be omitted (but could be null) when fromFocus is being passed.
        // Now using "arguments" to refer to the internal param, to keep GCC happy, which doesn't like optional params before params that aren't marked optional.
        var fromFocus = arguments[1];
        
        if ( !fromFocus ) {
            clearTimeout( this.timer );
        }

        if ( !this.active ) {
            return;
        }

        this.active.children( "a" ).removeClass( "oj-focus" );
        this.active = null; // TODO: shouldn't this also clear aria-activedescendant?

        this._trigger( "blur", event, { "item": this.active } );
    },
    
    _focusLauncherAndDismiss: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var menuFocused = this.element.is(":focus");
        this._launcher.focus();
        if (!menuFocused)
            this.__dismiss( event );
        // else blur handler calls __dismiss()
    },
    
    /*
     * TODO: JSDoc, then add 2nd star above
     * TODO: Should we just make this method, and the event, public?  Surface for review if so.
     * 
     * @private (actually internal, not private)
     */
    __dismiss: function(event) { // Internal visibility; called by Button's MenuButton functionality.  Not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this.element.hide().attr( "aria-hidden", "true" );
        this._launcher = undefined;
        
        // TODO: if keep this, check whether actually open first, to avoid spurious events
        this._trigger( "__dismiss", event, {} ); // internal event
    },
    
    // TODO: make the bullets for the 'params' param a table?
    /**
     * Launches this menu as a popup, after firing the <code class="prettyprint">beforeShow</code> event.  Listeners to that event can cancel the launch 
     * via <code class="prettyprint">event.preventDefault()</code>, and can tweak menu configuration as needed, such as 
     * <code class="prettyprint">menuPosition</code>.
     * 
     * @expose
     * @memberof! oj.ojMenu
     * @instance
     * 
     * @param {Event} event What triggered the menu launch.  May be <code class="prettyprint">null</code>, but may not be omitted.
     * 
     * @param {Object.<string, string>} params  Map including one or more of the following keys: 
     *     <ul>
     *       <li><code class="prettyprint">"launcher"</code>: Required.  The DOM element (which may or may not be a JET component) that launched the popup menu.  
     *         Focus is returned to this node upon menu dismissal. Can be the <code class="prettyprint">string</code> id of the DOM node, or a 
     *         <code class="prettyprint">jQuery</code> object containing the node.
     *       </li>
     *       <li><code class="prettyprint">"focus"</code>: Optional; defaults to <code class="prettyprint">"firstItem"</code>.  Values are the following <code class="prettyprint">string</code>s:
     *         <ul>
     *           <li><code class="prettyprint">"none"</code>: Leaves focus where it is, e.g. on the launching component (e.g. WAI-ARIA MenuButton Space/Enter behavior).  Use this value 
     *               if setting focus in the <code class="prettyprint">beforeShow</code> listener.</li>
     *           <li><code class="prettyprint">"menu"</code>: Focuses the menu itself with no menu item focused (e.g. typical Context Menu behavior).</li>
     *           <li><code class="prettyprint">"firstItem"</code>: Focuses the first menu item (e.g. WAI-ARIA MenuButton DownArrow behavior).</li>
     *         </ul>
     *       </li>
     *     </ul>
     * 
     * @example <caption>Invoke the <code class="prettyprint">show</code> method:</caption>
     * $( ".selector" ).ojMenu( "show", myEvent, {launcher: "myElement"} );
     */
    // API TODO's:
    // - Surface API tweak compared to design spec: added event as first param.  Add to design spec.
    // - Component could have a "type" option with values button/context/fixed, with rule that can't go to/from fixed after create.  Benefits:
    //   - we'd know whether we're a popup or not at create time, rather than finding out on first call to show():
    //     - future-proofed, in case create-time stuff is needed later
    //     - could set display:none so app doesn't have to.  (But to avoid possibility of menu flashing at outset, and for more semantic correctness at outset, 
    //       might want to make them do it anyway.)
    //     - menuPosition.of could do the right thing for each type of menu, even if we get new requirements that require knowing what type it is.
    // - Consider this paradigm: 
    //   - move focus param to an "initialFocus" or "focusOnShow" menu option that applies on show() but not to static menus.
    //   - then 2nd param only contains launcher, which is required anyway, so maybe make that top level
    //   - optionally third show() param is options hash, just like the hash supported by option() and initializer.  Or caller sets it just before calling show().
    //   - result:  show(event, launcher[, options])
    //   - advantages:  consistent treatment of menuPosition and focus.  Both can be set once as an option for cases where every invocation will be the same, 
    //     but can also set them each time without having to register a beforeShow listener, with this convenience extending to all options.  Consistent with 
    //     option()/init API.  
    show: function( event, params ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        // we don't know at create time that we're a popup, so do popup init on first call to show, which is when we find out we're a popup.
        // TBD: would do this at init time if we add a "type" component option.
        if (!this._popupInited) {
            this._popupInit();
            this._popupInited = true;
        }
        
        if (!params || !params["launcher"]) {
            // TODO: log a warning or error: need launcher so can return focus to it.
            return;
        }
        
        var launcher = params["launcher"]; // GCC needs bracket syntax even if you declare the field via @param {{launcher:(string|jQuery), focus: string}} params
        
        var cancelled = !this._trigger( "beforeShow", event, {"launcher": launcher} );
        
        if (cancelled) 
            return;
        
        launcher = $.type(launcher) === "string" 
                   ? $("#" + launcher)
                   : launcher;
        
        // following JQUI's pattern of copying even if don't need to change anything.  
        // TBD: is that important b/c position() might mutate it, or can we optimize this?  Applies to submenu code too.
        var position = $.extend({}, this.options.menuPosition );
        
        if (position.of == null) {
            // TBD: this isRightClick check works so far, but supposedly browsers are supposed to fire contextmenu event for Shift-F10 too, 
            // so might have to check other stuff like coordinates to distinguish from keyboard.
            var isRightClick = (event && event.type === "contextmenu");
            position.of = isRightClick ? event : launcher;
        }
        
        this.element
            .show()
            .removeAttr( "aria-hidden" )
            .position( position );
        
        var focusFirstItem = params.focus === "firstItem";
        var focusMenu = focusFirstItem || params.focus === "menu" ;
        
        if (focusMenu)
            this.element.focus();

        if (focusFirstItem) {
            this.focus(event, this.element.children().first());
        } else {
            this.blur(event);
        }

        // store launcher so we can return focus to it, e.g. if Esc pressed.  Ivar is non-null iff menu is a popup and is currently shown.
        this._launcher = launcher;
    },
    
    // TODO: undo this stuff in _destroy()
    _popupInit: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this.element.css({position: 'absolute', // make it a popup menu
                          zIndex:999}); // workaround for 17307603.  TODO: remove when fixed
    },
    
    _startOpening: function( submenu ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        clearTimeout( this.timer );

        // Don't open if already open fixes a Firefox bug that caused a .5 pixel
        // shift in the submenu position when mousing over the carat icon
        if ( submenu.attr( "aria-hidden" ) !== "true" ) {
            return;
        }

        this.timer = this._delay(function() {
            this._close();
            this._open( submenu );
        }, this.delay );
    },
    
    _open: function( submenu ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var position = $.extend({
            "of": this.active
        }, this.options.submenuPosition );

        clearTimeout( this.timer );
        this.element.find( ".oj-menu" ).not( submenu.parents( ".oj-menu" ) )
            .hide()
            .attr( "aria-hidden", "true" );

        submenu
            .show()
            .removeAttr( "aria-hidden" )
            .attr( "aria-expanded", "true" )
            .position( position );
    },

    /**
     * Closes some or all open submenus.
     * 
     * @expose 
     * @memberof! oj.ojMenu
     * @instance
     * @param {Event=} event - What triggered the menu to collapse.  May be <code class="prettyprint">null</code>.  
     *                         May be omitted if the <code class="prettyprint">all</code> parameter is omitted.
     * @param {boolean=} all - Indicates whether all submenus should be closed or only submenus below and including the menu that is or 
     *                         contains the target of the triggering event.  Defaults to <code class="prettyprint">false</code>.
     * 
     * @example <caption>Invoke the <code class="prettyprint">collapseAll</code> method:</caption>
     * $( ".selector" ).ojMenu( "collapseAll ", null, true );
     */
    collapseAll: function( event, all ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        clearTimeout( this.timer );
        this.timer = this._delay(function() {
            // If we were passed an event, look for the submenu that contains the event
            var currentMenu = all ? this.element :
                $( event && event.target ).closest( this.element.find( ".oj-menu" ) );

            // If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
            if ( !currentMenu.length ) {
                currentMenu = this.element;
            }

            this._close( currentMenu );

            this.blur( event );
            this.activeMenu = currentMenu;
        }, this.delay );
    },

    // With no arguments, closes the currently active menu - if nothing is active
    // it closes all menus.  If passed an argument, it will search for menus BELOW
    _close: function( startMenu ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        if ( !startMenu ) {
            startMenu = this.active ? this.active.parent() : this.element;
        }

        startMenu
            .find( ".oj-menu" )
                .hide()
                .attr( "aria-hidden", "true" )
                .attr( "aria-expanded", "false" )
            .end()
            .find( "a.oj-active" )
                .removeClass( "oj-active" );
    },

    /**
     * Closes the currently active submenu.
     * 
     * @expose 
     * @memberof! oj.ojMenu
     * @instance
     * @param {Event=} event - What triggered the menu to collapse.  May be <code class="prettyprint">null</code> or omitted.
     * 
     * @example <caption>Invoke the <code class="prettyprint">collapse</code> method:</caption>
     * $( ".selector" ).ojMenu( "collapse" );
     */
    collapse: function( event ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        var newItem = this.active &&
            this.active.parent().closest( ".oj-menu-item", this.element );
        if ( newItem && newItem.length ) {
            this._close();
            this.focus( event, newItem );
        }
    },

    /**
     * Opens the submenu below the currently active item, if one exists.
     * 
     * @expose 
     * @memberof! oj.ojMenu
     * @instance
     * @param {Event=} event - What triggered the menu to expand.  May be <code class="prettyprint">null</code> or omitted.
     * 
     * @example <caption>Invoke the <code class="prettyprint">expand</code> method:</caption>
     * $( ".selector" ).ojMenu( "expand" );
     */
    expand: function( event ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        var newItem = this.active &&
            this.active
                .children( ".oj-menu " )
                .children( ".oj-menu-item" )
                .first();

        if ( newItem && newItem.length ) {
            this._open( newItem.parent() );

            // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
            this._delay(function() {
                this.focus( event, newItem );
            });
        }
    },

    /**
     * Moves active state to next menu item.
     * 
     * @expose 
     * @memberof! oj.ojMenu
     * @instance
     * @param {Event=} event - What triggered the focus to move.  May be <code class="prettyprint">null</code> or omitted.
     * 
     * @example <caption>Invoke the <code class="prettyprint">next</code> method:</caption>
     * $( ".selector" ).ojMenu( "next" );
     */
    next: function( event ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        this._move( "next", "first", event );
    },

    /**
     * Moves active state to previous menu item.
     * 
     * @expose 
     * @memberof! oj.ojMenu
     * @instance
     * @param {Event=} event - What triggered the focus to move.  May be <code class="prettyprint">null</code> or omitted.
     * 
     * @example <caption>Invoke the <code class="prettyprint">previous</code> method:</caption>
     * $( ".selector" ).ojMenu( "previous" );
     */
    previous: function( event ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        this._move( "prev", "last", event );
    },


    _isFirstItem: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        return this.active && !this.active.prevAll( ".oj-menu-item" ).length;
    },

    _isLastItem: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        return this.active && !this.active.nextAll( ".oj-menu-item" ).length;
    },


    _move: function( direction, filter, event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var next;
        if ( this.active ) {
            if ( direction === "first" || direction === "last" ) {
                next = this.active
                    [ direction === "first" ? "prevAll" : "nextAll" ]( ".oj-menu-item" )
                    .eq( -1 );
            } else {
                next = this.active
                    [ direction + "All" ]( ".oj-menu-item" )
                    .eq( 0 );
            }
        }
        if ( !next || !next.length || !this.active ) {
            next = this.activeMenu.children( ".oj-menu-item" )[ filter ]();
        }

        this.focus( event, next );
    },

    /* TODO: update JSdoc to be something like this revised version, once todo's in code are resolved.  
     * Let selectItem be the currently active menu item if any, else the menu item containing the target of the supplied event if any, else null.
     * 
     * If selectItem is non-null, this method selects that item, collapses all submenus, and triggers the menu's 
     * <code class="prettyprint">select</code> event.
     */
    /**
     * Selects the currently active menu item, collapses all submenus and triggers the menu's <code class="prettyprint">select</code> event.
     * 
     * @expose 
     * @memberof! oj.ojMenu
     * @instance
     * @param {Event=} event - What triggered the selection.  May be <code class="prettyprint">null</code> or omitted.
     * 
     * @example <caption>Invoke the <code class="prettyprint">select</code> method:</caption>
     * $( ".selector" ).ojMenu( "select" );
     */
    select: function( event ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        // TODO: shouldn't this set aria-activedescendant in synch with this.active?
        // OLD: this.active = this.active || $( event.target ).closest( ".oj-menu-item" );
        // NEW: this new code does approp. null-checks and parent-checks, but still has issues like 17501993.
        // TODO: we should probably prevent selecting a non-leaf, and make sure we're consistent with overall 
        // behavior re: whether a non-leaf can be active
        if (!this.active && event && event.target ) {
            var menuItem = $( event.target ).closest( ".oj-menu-item" );
            if (menuItem.closest( this.element ).length)
                this.active = menuItem;
        }
        
        if (!this.active)
            return;
        // END OF "NEW" CODE
        
        var ui = { "item": this.active };
        if ( !this.active.has( ".oj-menu" ).length ) {
            this.collapseAll( event, true );
        }

        // if this is a popup menu that's currently shown
        if (this._launcher) {
            // if this is a leaf.  TODO: remove isLeaf check when 17501993 is fixed
            if (!ui.item.children(this.options.menuSelector).length)
                this._focusLauncherAndDismiss(event);
        }
        
        // TODO: should this fire before or after calling _focusLauncherAndDismiss()?
        this._trigger( "select", event, ui );
    }
    
    // API doc for inherited methods with no JS in this file:

    /**
     * Returns a <code class="prettyprint">jQuery</code> object containing the menu.  
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojMenu#widget
     * @memberof! oj.ojMenu
     * @instance
     * @return {jQuery} the menu
     * 
     * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
     * var widget = $( ".selector" ).ojMenu( "widget" );
     */

    /**
     * Removes the menu functionality completely. This will return the element back to its pre-init state.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojMenu#destroy
     * @memberof! oj.ojMenu
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
     * $( ".selector" ).ojMenu( "destroy" );
     */
});

}());

/**
 * The ojTrain component allows a user to display a navigation visual that allows a user to go between different "steps"
 * Each step can display information about the state of the step("visited", "unvisited", "diabled")
 * and display a message type("error", "complete", "warning", "infromation")
 *
 *
 * @example <caption>Initialize component using widget API</caption>
 * &lt;div id="train"/&gt;<br/>
 * $("#train").ojTrain({'currentStep': "stp1", 'steps': [{name:'Step One', id:'stp1'},
 * {name:'Step Two', id:'stp2'},{name:'Step Three', id:'stp3'}]});
 * @example <caption>Using knockout, currentStep bind to observables - selectedStep</caption>
 * &lt;div id="train" data-bind="ojComponent:{component: 'ojTrain', currentStep: selectedStep, steps:[{name:'Step One', id:'stp1'},
 * {name:'Step Two', id:'stp2'},{name:'Step Three', id:'stp3'}]}"/&gt;gt;
 *
 * @class
 * @constructor
 * @name oj.ojTrain
 * @augments oj.baseComponent
 */
(function() {

    oj.__registerWidget("oj.ojTrain", $['oj']['baseComponent'], {
        version: "1.0.0",
        defaultElement: "<div>",
        widgetEventPrefix: "oj",
        options: {
            /**
             * The array of step objects. Each step must have an 'id' and 'name' variable, optional additonal variables are:
             * 'selection' - Indicates if the step is selectable and overrides the 'selection' variable passed in the options. Values are 'on' or 'off'.
             * 'state' - Indicates the state of the step. Possible options are 'visited', 'unvisited', 'disabled'. Default value is 'unvisited'
             * 'messageType' - The messageType icon to display on the step. Possible options are 'none', 'complete', 'error', or 'warning'. Default value is 'none'
             * @expose
             * @public
             * @instance
             * @memberof! oj.ojTrain
             */
            steps: [],
			
            /**
             * The global selection variable that sets a default section on all steps. By default, selection is set to "next",
             * meaning only the step after the selected one can be selected.
             * @expose
             * @public
             * @instance
             * @memberof! oj.ojTrain
             */
            selection: "next",
			
            /**
             * The currentStep variable indicates the id of the current selected step.
             * @expose
             * @public
             * @instance
             * @memberof! oj.ojTrain
             */
            currentStep: "",
            // Events

            /**
             * Fired whenever a supported component option changes, whether due to user interaction or programmatic
             * intervention.  If the new value is the same as the previous value, no event will be fired.
             *
             * Currently there is one supported option, <code class="prettyprint">"currentStep"</code>.  Additional
             * options may be supported in the future, so listeners should verify which option is changing
             * before taking any action.
             *
             * @expose
             * @event
             * @memberof! oj.ojTrain
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Parameters
             * @property {string} ui.option the name of the option that is changing
             * @property {string} ui.previousValue the previous value of the option
             * @property {string} ui.value the current value of the option
             * @property {Object} ui.optionMetadata information about the option that is changing
             * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
             *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
             *
             */
            optionChange: null

			/**
			 * Triggered when the train is created.
			 *
			 * @event
			 * @name create
			 * @memberof! oj.ojTrain
			 * @instance
			 * @property {Event} event <code class="prettyprint">jQuery</code> event object
			 * @property {Object} ui Empty object included for consistency with other events
			 *
			 */
        },
        /**
         * Variable for storing the number of steps in the train
         *
         * @private
         */
        _stepNum: 0,
		
        /**
         * Variable for storing the train information about each step in 2D Array form
         *
         * @private
         */
        _stepArray: new Array(),
		
        /**
         * _create contains all actions that are needed fo the initialization of the train and is only called once.
         *
         * @override
         * @private
         */
        _create: function() {
            // Constrain initial value
            var options = this.options;
            this._super();
            var steps = options.steps;
            this._stepNum = steps.length;
            this._isRtl = this._GetReadingDirection() === "rtl";

            // Use margin-left normally and margin-right for rtl, same with alignment
            this._marginType = this._isRtl ? 'margin-right' : 'margin-left';
            this._alignType = this._isRtl ? 'right' : 'left';

            // Draw the background bar for the train
            var bar = $("<div class='oj-train-bar'></div>");
            this._maxStepWidth = this.element.width() < 107 * (this._stepNum - 1) + 72 ? (this.element.width() - 72) / (this._stepNum - 1) : 107;
            this._centerMargin = (this.element.width() - this._maxStepWidth * (this._stepNum - 1) - 72) / 2
            this._stepList = $("<ul>")
                    .attr({'aria-label': "Train Component"})
                    .css({'margin': "0", 'padding': "0"});
            if (this._stepNum > 1) {
                bar.css({'margin-top': "7px", 'width': ((this._stepNum - 1) * this._maxStepWidth) + "px"})
                        .css(this._marginType, 36 + this._centerMargin + "px")
                        .css(this._alignType, 0);
            }
            bar.appendTo(this.element);

            // Initialize the background progressbar object that will be updated to have the correct width based on the current step.
            this._progressbar = $("<div class='oj-train-bar-overlay'></div>");
            this._progressbar.appendTo(this.element);

            // Setup array that stores train information for each step.
            this._setupArray();
            this._currentStepIndex = this._getCurrentStepIndex(options.currentStep);

            // Draw each step. Visually each step consists of a background circle, a button, an icon, and a label.
            for (var i = 0; i < this._stepNum; i++)
            {
                // Create a list item to store each step.
                var stepTag = $("<li>")
                        .attr({'id': this._stepArray[i][1]})
                        .css({'list-style-type': "none", 'position': "absolute"})
                        .css(this._marginType, this._centerMargin + (this._maxStepWidth * i) + "px")
                        .css(this._alignType, 0);
                this._stepList.append(stepTag);
                if (i == (this._currentStepIndex + 1) && options.selection == "next")
                    this._stepArray[i][2] = "on";
                this._drawLabel(i);
                this._drawStepFill(i);
                this._drawButton(i);
                this._drawMessageType(i);
            }
            ;
            // Update background progressbar width to show the progress.
            this._updateProgressWidth();

            this.element.addClass("oj-train oj-widget oj-widget-content oj-corner-all");
        },
		
        /**
         * Updates the overlay progressbar width based on the currentStepIndex variable
         *
         * @private
         */
        _updateProgressWidth: function() {
            var progressWidth = this._currentStepIndex === (this._stepNum - 1) ? ((this._stepNum - 1) * this._maxStepWidth) : (this._maxStepWidth * this._currentStepIndex + 53.5 * (this._maxStepWidth / 107));
            this._progressbar.css({'margin-top': "7px", 'width': progressWidth + "px"})
                    .css(this._marginType, this._centerMargin + 36 + "px")
                    .css(this._alignType, 0);
            this._stepList.appendTo(this.element);
        },
		
        /**
         * Set up the _stepArray(). The first dimension indicates the step index and the second dimension indicates the step variables.
         * The order of the step variables are: name, id, selection, state, messageType
         *
         * @private
         */
        _setupArray: function() {
            var options = this.options;
            for (var i = 0; i < this._stepNum; i++) {
                var step = options.steps[i];
                this._stepArray[i] = new Array(5);
                this._stepArray[i][2] = options.selection && options.selection != "next" ? options.selection : "off";
                this._stepArray[i][3] = "unvisited";
                for (var key in step) {
                    if (key === "name")
                    {
                        this._stepArray[i][0] = step[key];
                    }
                    else if (key === "id")
                    {
                        this._stepArray[i][1] = step[key];
                    }
                    else if (key === "selection")
                    {
                        this._stepArray[i][2] = step[key];
                    }
                    else if (key === "state")
                    {
                        this._stepArray[i][3] = step[key];
                    }
                    else if (key === "messageType")
                    {
                        this._stepArray[i][4] = step[key];
                    }
                }
            }
        },
		
        /**
         * Draw the button object for the step based on the index. If a button for that step alread exists remove it and draw the new one.
         * @param {Number} index - The index of the step for which the button is being drawn.
         *
         * @private
         */
        _drawButton: function(index)
        {
            var button = $("<div/>");
            var scrnRead = $("<span/>");
            var self = this;
            var desc = "";
            if (this._stepArray[index])
            {
                var state = this._stepArray[index][3];
                if (this._currentStepIndex === index) {
                    button.addClass("oj-train-button-current");
                    desc = ". This is the current step.";
                }
                else
                {
                    if (state === "visited") {
                        button.addClass("oj-train-button-visited");
                        desc = ". This step has been visited.";
                    }
                    else if (state === "unvisited") {
                        button.addClass("oj-train-button-unvisited");
                        desc = ". This step has not been visited yet.";
                    }
                    else
                        button.addClass("oj-train-button-disabled");
                }
                if (this._stepArray[index][3] !== "disabled" && (this.options.disabled == null || !this.options.disabled)) {
                    if (this._stepArray[index][2] === "on") {
                        this._hoverable(button);
                        button.bind("click" + this.eventNamespace, function() {
                            var oldStep = self.options.currentStep;
                            self.options.currentStep = this.parentNode.id;
                            self._fireOptionChange("currentStep", oldStep, this.parentNode.id, true);
                        });
                    }
                }
                button.css({'margin-top': "4px", 'width': "12px", 'height': "12px"})
                        .css(this._marginType, "29px")
                        .css(this._alignType, 0);
                var stepLi = this._stepList.children().eq(index).children();

                // Check that there are at least 3 items in the list item indicating that a button has already been created for this step.
                // If there is remove it and insert the new button in the same position. If there isn't a preexsisting button, simply add one.
                if (stepLi.length >= 3) {
                    stepLi[2].remove();
                    button.insertAfter(stepLi[1]);
                }
                else
                    this._stepList.children().eq(index).append(button);
                scrnRead.text(desc);
                scrnRead.css("display", "none");
                this._stepList.children().eq(index).find('a').append(scrnRead);
            }
        },
		
        /**
         * Draw the icon that displays the messageType for the step based on the index. If there already is an icon remove it and draw the new one.
         * @param {Number} index - The index of the step for which the icon is being drawn.
         *
         * @private
         */
        _drawMessageType: function(index)
        {
            var icon = $("<div/>");
            var scrnRead = $("<span/>");
            var desc = "";
            var self = this;
            if (this._stepArray[index])
            {
                var messageType = this._stepArray[index][4];
                if (messageType === "complete") {
                    icon.addClass("oj-train-icon-complete");
                    desc = " Complete";
                }
                else if (messageType === "info") {
                    icon.addClass("oj-train-icon-info");
                    desc = " Info";
                }
                else if (messageType === "error") {
                    icon.addClass("oj-train-icon-error");
                    desc = " Error";
                }
                else if (messageType === "warning") {
                    icon.addClass("oj-train-icon-warning");
                    desc = " Warning";
                }

                // Remove previous messageType
                var stepLi = this._stepList.children().eq(index).children();
                if (stepLi.length >= 4) {
                    stepLi[3].remove();
                }
                // Make icon clickable
                if (this._stepArray[index][3] !== "disabled" && (this.options.disabled == null || !this.options.disabled)) {
                    if (this._stepArray[index][2] === "on") {
                        this._hoverable(icon);
                        icon.bind("click" + this.eventNamespace, function() {
                            var oldStep = self.options.currentStep;
                            self.options.currentStep = this.parentNode.id;
                            self._fireOptionChange("currentStep", oldStep, this.parentNode.id, true);
                        });
                    }
                }
                // Add new message
                if (messageType != null && messageType != "none") {
                    icon.css({'margin-top': "9px", 'height': "9px", 'width': "9px"})
                            .css(this._marginType, "34px")
                            .css(this._alignType, 0);
                    // If there is remove it and insert the new icon in the same position.
                    // Add description to span
                    scrnRead.text(desc);
                    scrnRead.css("display", "none");
                    this._stepList.children().eq(index).find('a').append(scrnRead);
                    this._stepList.children().eq(index).append(icon);

                }
            }
        },
		
        _fireOptionChange: function(key, previousValue, value, originalEvent) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        {

            var ui = {
                "option": key,
                "previousValue": previousValue,
                "value": value,
                // (originalEvent is non-null) iff (option change is due to user interaction) iff (binding should write back the value)
                "optionMetadata": {'writeback': originalEvent ? "shouldWrite" : "shouldNotWrite"}
            };
            this._trigger('optionChange', originalEvent, ui);

        },
		
        /**
         * Draw the background circle for the step which is either light or dark base on if the step is before or after the selected step.
         * @param {Number} index - The index of the step for which the icon is being drawn.
         *
         * @private
         */
        _drawStepFill: function(index)
        {
            var stepFill = $("<div/>");
            if (this._stepArray[index])
            {
                if (index <= this._currentStepIndex)
                    stepFill.addClass("oj-train-stepBackground-overlay");
                else
                    stepFill.addClass("oj-train-stepBackground");
                stepFill.css(this._marginType, "25px")
                        .css(this._alignType, 0);
                var stepLi = this._stepList.children().eq(index).children();
                if (stepLi.length > 1)
                    stepLi[1].remove();
                stepFill.insertAfter(stepLi[0]);

            }
        },
		
        /**
         * Draw the label for the step.
         * @param {Number} index - The index of the step for which the icon is being drawn.
         *
         * @private
         */
        _drawLabel: function(index)
        {
            var self = this;
            if (this._stepArray[index])
            {
                var name = this._stepArray[index][0];
                var label = $("<a>" + name + "</a>");
                label.addClass("oj-train-label");
                label.css('margin-bottom', "7px");
                label.css(this._alignType, 0);
                if (index === this._currentStepIndex)
                    label.addClass("oj-selected");
                else if (this._stepArray[index][3] === "visited")
                    label.addClass("oj-visited");
                else if (this._stepArray[index][3] === "disabled")
                    label.addClass("oj-disabled");
                if (this._stepArray[index][2] === "on" && (this.options.disabled == null || !this.options.disabled)) {
                    label.attr("tabindex", index + 1);
                    this._hoverable(label);
                    label.bind("click keydown" + this.eventNamespace, function(e) {
                        if (e.keyCode == 13 || e.type == "click") {
                            var oldStep = self.options.currentStep;
                            self.options.currentStep = this.parentNode.id;
                            self._fireOptionChange("currentStep", oldStep, this.parentNode.id, true);
                        }
                    });
                }
                var stepLi = this._stepList.children().eq(index).children();
                if (stepLi.length >= 1)
                    stepLi[0].remove();
                this._stepList.children().eq(index).prepend(label);
            }
        },
		
        /**
         * Draw the label for the step.
         * @param {String} id - The index of the id whose id is being passed in.
         *
         * @private
         */
        _getCurrentStepIndex: function(id)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][1] === id)
                    return i;
            }
            return 0;
        },
		
        /**
         * <p>Returns the name of the step based on the id passed in. If the step doesn't have a name, return null;</p>
         * @public
         * @param {String} id - The id of the step.
         * @return {String} name of step.
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        getStepName: function(id)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][1] === id)
                    return this._stepArray[i][0];
            }
            return null;
        },
		
        /**
         * <p>Returns the id of the step based on the name passed in. If the step doesn't have an id, return null;</p>
         * @public
         * @param {String} name - The name of the step.
         * @return {String} id of step.
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        getStepId: function(name)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][0] === name)
                    return this._stepArray[i][1];
            }
            return null;
        },
		
        /**
         * <p>Select the step based on the id provided. </p>
         * <p>Select should be run after running the deselect function on the previously selected step.  </p>
         * @public
         * @param {String} id - The id of the step being selected.
         * @expose
         * @memberof! oj.ojTrain
         * @instance
         */
        select: function(id)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][1] === id)
                {
                    if (this.options.selection === "next" && (i + 1 < this._stepNum))
                    {
                        this._stepArray[i + 1][2] = "on";
                        this._drawLabel(i + 1);
                        this._drawButton(i + 1);
                    }
                    this._stepArray[i][3] = "current";
                    this._currentStepIndex = i;
                    this.options.currentStep = id;
                    this._drawLabel(i);
                    this._drawButton(i);
                    this._updateProgressWidth();
                }
            }
            for (var i = 0; i < this._stepNum; i++)
                this._drawStepFill(i);
        },
		
        /**
         * <p>Deselect the step based on the id provided. When deselecting a step selection, state, and messageType can be changed.</p>
         * <p>Deselect should be run before running select().  </p>
         * @public
         * @param {String} id - The id of the step being deselected.
         * @param {String} selection - Selection on the step once it is deselected, if this parameter isn't selection is set to "off" on this step.
         * @param {String} state - The state of the step once it is deselected, if this parameter isn't provided the state is set by default to "visited".
         * @param {String} messageType - The messageType to display for the deselected step, if this parameter isn't provided the messageType remains unchanged.
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        deselect: function(id, selection, state, messageType)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][1] === id)
                {
                    selection ? this._stepArray[i][2] = selection : this._stepArray[i][2] = "off";
                    state ? this._stepArray[i][3] = state : this._stepArray[i][3] = "visited";
                    messageType ? this._stepArray[i][4] = messageType : this._stepArray[i][4] = "none";
                    this._currentStepIndex = -1;
                    if (this.options.selection === "next" && (i + 1 < this._stepNum))
                    {
                        this._stepArray[i + 1][2] = "off";
                        this._drawLabel(i + 1);
                        this._drawButton(i + 1);
                    }
                    this._drawLabel(i);
                    this._drawButton(i);
                    this._drawMessageType(i);
                }
            }
        },
		
        /**
         * <p>Returns the id of the next selectable step based on the currentStep id. If the current step is the last selectable step, returns null</p>
         * @public
         * @return {String} next selectable Id
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        nextSelectableStep: function()
        {
            for (var i = this._currentStepIndex; i < this._stepNum; i++) {
                if (i + 1 < this._stepNum && this._stepArray[i + 1] && this._stepArray[i + 1][2] === "on")
                {
                    return this._stepArray[i + 1][1];
                }
            }
            return this._stepArray[this._currentStepIndex][1];

        },
		
        /**
         * <p>Returns the id of the previous selectable step based on the currentStep id. If the current step is the first selectable step, returns null</p>
         * @public
         * @return {String} previous selectable Id
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        previousSelectableStep: function()
        {
            for (var i = this._currentStepIndex; i >= 0; i--) {
                if (this._stepArray[i - 1] && this._stepArray[i - 1][2] === "on")
                {
                    return this._stepArray[i - 1][1];
                }
            }
            return this._stepArray[this._currentStepIndex][1];
        }

    });
}( ));
/*!
 * JET Radioset @VERSION
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
 * @name oj.ojRadioset
 * @augments oj.editableValue
 * @classdesc
 * <p>
 * The JET Radioset component (ojRadioset) enhances a group of 
 * <code class="prettyprint">input type="radio"</code> elements. It 
 * manages the selected value of the group and it adds required validation. 
 * It also adds and removes the correct
 * oj-* styles to the dom elements so it has the JET styling and is themable.
 * </p>
 * <p>To use an ojRadioset, group all the inputs and their labels within a 
 * container dom element, e.g., div. 
 *   For accessibility, set <code class="prettyprint">aria-labelledby</code> on 
 *   this container dom element.
 *   Also set each input's <code class="prettyprint">id</code> attribute, and 
 *   refer to that in the input's label's 
 *   <code class="prettyprint">for</code> attribute.
 *   Then create the ojRadioset on this container dom element.  
 * </p>
 * <p>
 *  Radioset is used by selecting a container element which contains the 
 *  radio input elements and calling <code class="prettyprint">ojRadioset()</code>. 
 *  You can enable and disable a radio set, 
 *  which will enable and disable all contained radios. 
 * </p>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>The radioset does not add any extra keyboard navigation to the input radios. 
 * The keyboard interaction comes from the native browser.
 * </p>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>JET Radioset takes care of setting 
 * <code class="prettyprint">role="radiogroup"</code> on the radioset element.  
 * 
 * <p>As shown in the online demos, the application is responsible for applying 
 * <code class="prettyprint">aria-labelledby</code>
 * to point to the main label element for the group of radios.
 * <h3 id="eventHandling-section">
 *   Event Handling
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#eventHandling-section"></a>
 * </h3>
 * <ul>
 *  <li>optionChange(event, ui) - Type: ojoptionchange
 *  <p>
 *   Triggered if the value changes when the user interacts with the component 
 *   (clicking on one of the radio buttons); or if the value has 
 *   changed programmatically via the value option. 
 *  </li>
 * </ul>
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <p>
 *   All JQUI and JET components inherit <code class="prettyprint">disable()</code> 
 *   and <code class="prettyprint">enable()</code> methods from the base class. 
 *    This API duplicates the functionality of the 
 *    <code class="prettyprint">disabled</code> option.  
 *    In JET, to keep the API as lean as possible, we have chosen not to document 
 *    these methods outside of this section.
 * </p>
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates a JET Radioset.
 *  For JET Radioset, if the DOM changes (for example, you add/remove a radio), 
 *  you should <code class="prettyprint">refresh()</code>.
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the radioset with no options specified:</caption>
 * $(".selector").ojRadioset();
 * 
 * @example <caption>Initialize the radioset with some options and callbacks specified:</caption>
 * $( ".selector" ).ojRadioset( { "value": "copy", "valuechange": 
 * function( event, ui ) {alert("valuechanged from " + ui.previousValue + " to " + ui.value);} } );             
 * @example <caption>Initialize component using widget API</caption>
 * &lt;label id="grouplabel">Greetings&lt;/label>
 * &lt;div id="radioset" aria-labelledby="grouplabel">
 *   &lt;input id="helloid" value="hello" type="radio" name="greetings"/&gt;
 *   &lt;label for="helloid"/&gt;Hello&lt;/label>
 *   &lt;input id="bonjourid" value="bonjour" type="radio" name="greetings"/&gt;
 *   &lt;label for="bonjourid"/&gt;Bonjour&lt;/label>
 *   &lt;input id="ciaoid" value="ciao" type="radio" name="greetings"/&gt;
 *   &lt;label for="ciaoid"/&gt;Ciao&lt;/label>
 * &lt;div>
 * <br/>
 * // set the value to "ciao". (The 'ciao' radio will be checked)
 * $("#radioset").ojRadioset({'option', 'value', 'ciao'});
 * 
 * @example <caption>Initialize a radioset via the JET 
 * <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="radioset" data-bind="ojComponent: {component: 'ojRadioset', value: 'night'} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="radio" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="radio" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
  * @example <caption>Using knockout, value bind to observable:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="radioset" data-bind="ojComponent: {component: 'ojRadioset', 
 * value: currentTime} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="radio" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="radio" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
 * // in the model, make the currentTime variable a knockout observable.
 * // The model and the component's value option will stay in sync. Change the
 * // component's value option and the model will change. Change the model,
 * // and the component's value option will change. Click on a radio, and both
 * // will change.
 * self.currentTime = ko.observable("night");
 * @constructor
 */
oj.__registerWidget("oj.ojRadioset", $['oj']['editableValue'],
{
  version : "1.0.0",  
  defaultElement : "<div>", 
  widgetEventPrefix : "oj", 
  options : 
  {
 
  },
  /**** start Public APIs ****/
      
   /**
   * Refreshes the radioset
   * <p>A <code class="prettyprint">refresh()</code> is required 
   * when a radioset is programatically changed, like in the following circumstances:
   * <ul>
   *   <li>After radios are added or removed or modified (without using ojRadioset) in the DOM.</li>
   * </ul>    
   * @expose 
   * @memberof! oj.ojRadioset
   * @instance
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" ).ojRadioset( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    // refresh the ojRadioCheckbox's that exist, and  of the type=radio inputs that 
    // are not yet ojRadioCheckboxs, make them ojRadioCheckboxs.
    this.$radios = this._findRadiosWithMatchingName()
                    .filter( ".oj-radio" )
                    ._ojRadioCheckbox("refresh")
                    .end()                  
                    // Create ojRadioCheckbox out of any 'new' radios.
                     // the END is key here. It makes it so that 
                     // this.$radios has ALL the radios.
                     // .not if a filter, it removes elements that do not have the
                     // oj-radio style class from the list of all input[type=radio]s.
                    .not( ".oj-radio" )
                    ._ojRadioCheckbox()
                    .end();
         
    this._setup();
  },
  /**
   * Returns a jQuery object containing the element visually representing the radioset. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj.ojRadioset
   * @instance
   * @return {jQuery} the radio
  */
  widget : function ()
  {
    return this.uiRadioset;
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
       
  /**
   * After _create, the widget should be 100% set up.
   * @override
   * @private
   */
  _create : function ()
  {
    // turn each radio into ojRadioCheckbox. Do this first, since we need it
    // in calls from 'create'.
    this.$radios = this._findRadiosWithMatchingName()._ojRadioCheckbox();

    this.uiRadioset = this.element.addClass("oj-radioset oj-widget")
                                  .attr( "role", "radiogroup" );
    this._on(this._events);
    this._setup();
    this._super();
    
    // todo: where should this be called from?
    this._SetRootAttributes();
  },
  /**
   * Returns a jquery object that is a set of elements that are input type radio
   * and have the name of the first radio found.
   * 
   * @return {Object} jquery object of all the radios within the root dom element
   * that have the same 'name' attribute as the first radio found.
   * @private
   */
  _findRadiosWithMatchingName : function ()
  {
    //return this.element.find('input[type=radio]'); // simplest thing to do.
    
    var first = this.element.find("input[type=radio]:first");
    if (first.length === 0)
    {
      oj.Logger.warn("Could not find any input type=radio within this element");
    }
    // get the name attribute of the first input radio
    var name = first.attr("name");
    // find all input radios with matching name
    if (name === undefined)
    {
    	// search for all radios with no name
      var allradios = this.element.find("input[type=radio]");
      // now loop and find the ones without 'name' attribute
      return allradios.not("[name]");
    }
    else
    {
    	// search for all radios with the name
      var selector = "input[type=radio][name=" + name + "]";
      return this.element.find(selector);
    	
    }
  },
  /* 
   * Component developers: This API and functionality is subject to change pending architectural review!
   * See the baseComponent method for preliminary API doc.
   */
  _showContextMenu: function(menu, event)
  {
    // TODO: confirm this logic
    var radios = this.element.find("input[type=radio]");
    var checked = radios.filter(":checked");
    var launcher = checked.length ? checked : radios.first(); 
    menu.show(event, {"launcher": launcher, "focus": "menu"});
  },
  _setup: function() 
  {

    // disable radio if element was already disabled
    if (this.options.disabled)
    {
      // calls _setOption disable is true, which in turn disables all radios.
      this.disable();
    }
  },   
  _events : 
  {
    'change' : function (event)
    {
      
      this._HandleChangeEvent(event);
    }
  },

  /**
   * @param {Event} event DOM event 
   * @override
   * @protected
   * @memberof! oj.ojRadioset
   */
  _HandleChangeEvent: function(event)
  {
    // TODO make sure the target is an input radio?
    // TODO any more checks I need to do?
    //alert("XYZ In _changeSetValue target is " + event.target + " And the value of the input is " + event.target.value);

    // should I double check that the event.target is the same as the 'checked'?
    // if (event.target === this.$radios.filter(":checked"))???
    // _SetValue triggers valuechange event
    this._super();
  },
                  
  /**
   * Returns the display value that is ready to be passed to the converter.
   * 
   * @param {Object} value the stored value if available that needs to be formatted for display
   * @override
   * @protected
   * @memberof! oj.ojRadioset
   */
  _GetDisplayValue : function (value) 
  {
    // return the value of the 'checked' radio
    return this._GetElementValue();
  },
  /**
   * Called when the display value on the element needs to be updated 
   * as a result of a value change. 
   * ojRadioset stores a String value, and this value matches the value
   * of the currently checked radio. So, if we need to set the display value,
   * what this means is we need to 'check' the radio whose value matches the
   * displayValue.
   * 
   * @param {String} displayValue of the new string to be displayed
   * @override
   * @protected
   * @memberof! oj.ojRadioset
  */  
  _SetDisplayValue : function (displayValue) 
  {

    if (displayValue != null)
    {
      // If we found a radio with a matching value, and it isn't already checked,
      // then check it. If it is already checked, do nothing.
      // If we can't find a radio with a matching value, then we uncheck 
      // all the radios. We do this so that the radio state matches the value option
      // value.
      
      var valueFilter = "[value='" + displayValue + "']"; 
      if (valueFilter !== undefined && this.$radios !== undefined)
      {
        var radioWithMatchingValue = 
            this.$radios.filter(valueFilter);
        // found a radio with a matching value
        if (radioWithMatchingValue !== undefined && radioWithMatchingValue.length > 0)
        {
          // if not already checked, then mark as checked.
          if (!radioWithMatchingValue.prop('checked'))
          {
            radioWithMatchingValue._ojRadioCheckbox("option", "checked", true);
          }
        }
        else
        {
          // did not find any radios with a matching value, so uncheck
          // all of them.
          this.$radios._ojRadioCheckbox("option", "checked", false);
        }
      }
      // TODO Do I need to refresh
    } 
  },
  /**
   * Returns the element's value. Normally, this is a call to this.element.val(),
   * but in the case of ojRadioset, the element's value is really the value
   * of the checked radio in the set.
   * @override
   * @protected
   * @memberof! oj.ojRadioset
   */
  _GetElementValue : function () 
  {
    // "input:checked" selects radios that are currently checked as 
    // reflected in their boolean (true or false) checked property, 
    // which is affected when the user clicks the radio for example.
    // for radio, there will be one or none checked; 
    // if none are checked, return null (checkedRadio.val() is undefined if nothing is checked)
    var checkedRadio = this.$radios.filter(":checked");
    if (checkedRadio.length === 0)
      return null;
    else
      return checkedRadio.val();
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
   * @memberof! oj.ojRadioset
   * @override
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-radioset";
  },
  /**
   * Returns a jquery object of the elements representing the 
   * content nodes (input type=radio). This is used in EditableValue to add
   * aria-describedby to the input when there is a help icon, to add
   * aria-required and aria-invalid
   * @protected
   * @override
   * @memberof! oj.ojRadioset
   */
  _GetContentElement : function ()
  {
    return this._findRadiosWithMatchingName();
  },
   /**
   * Called when a aria-required attribute needs to be set or removed. 
   * Most inputs/selects need aria-required on the input element (aka 'content')
   * But it is not legal to have aria-required on radio/checkboxes.
   * Subclasses can override to put aria-required where they want.
   * 
   * @param {Object=} value the current value of the required option
   * @expose
   * @memberof! oj.ojRadioset
   * @instance
   * @protected
   */
  _RefreshAriaRequired : function (value)
  {
    var ariaValue, rootNode = this.uiRadioset;

    ariaValue = (value == "required") ? true : false;
    if (ariaValue && rootNode) 
    {
      rootNode.attr("aria-required", ariaValue);
    }
    else
    {
      rootNode.removeAttr("aria-required");
    }
  }, 
  /**
   * @override
   * @private
   */
  _setOption : function (key, value)
  {
    this._super(key, value);
    
    if ( key === "disabled" ) {
      // disables all the radios
      this.$radios._ojRadioCheckbox( "option", key, value );
    }
  },

  /**
   * TODO: What is our 'destroy' strategy with regards to html attributes that 
   * they have initially on their dom, but we change? like disabled? Do we store 
   * on data at the beginning, then restore from this data, and then call removeData?
   * @override
   * @private
   */
  _destroy : function ()
  {  
    this._super();
    // base class removes oj-disabled
    this.element.removeClass("oj-radioset oj-enabled oj-widget")
                .removeAttr( "role" );
    if (this.$radios)
    {
      this.$radios._ojRadioCheckbox( "destroy" );
    }
  }
  /**** end internal widget functions ****/ 
 
});
/*!
 * JET Radio This component is private. @VERSION
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
 * The _ojRadio component enhances a browser input element into one that is 
 * of type=radio. This is a private component used by ojRadioset.
 * 
 * <h3>Events:</h3>
 * <ul>
 *   <li>clicked/checked?<p>
 *   Triggered if the radio is clicked; or if the radio was checked programatically
 *   with the checked option.
 *   </li>
 * </ul>
 * 
 * @class
 * @constructor
 * @name oj._ojRadio
 * @augments oj.baseComponent TODO: Should I extend this? 
 * Pros: it gives me oj-disabled/oj-enabled. (easy to add myself)
 * Cons: It gives me tooltip stuff that I don't want. I want that on the div or on the first radio only.
 * Pro/Con?: it rewrites required for me if it is on the dom node, but then it makes it required??? Should I rewrite required or don't care?
 */
oj.__registerWidget("oj._ojRadio", $['oj']['baseComponent'],
{
  version : "1.0.0",  
  defaultElement : "<input>", 
  widgetEventPrefix : "oj", 
  options : 
  {
    
    /** 
     * First we look for the disabled option to be explicitly set. If not, then
     * we look if disabled is on the dom. If null, disabled defaults to false.
     * @expose 
     * @type {?boolean}
     * @default <code class="prettyprint">false</code>
     * @public
     * @instance
     * @memberof! oj._ojRadio
     */
    disabled: null,
    /** 
     * First we look for the checked option to be explicitly set. If not, then
     * we look if checked is on the dom. If null, checked defaults to false.
     * @expose 
     * @public
     * @instance
     * @memberof! oj._ojRadio */
    checked : null   
  },
  /**** start Public APIs ****/
  /**
   * 
   * <p>This method does not accept any arguments.
   * 
   * @public
   * @expose
   * @memberof! oj.Radio 
   * @return {jQuery} the label(s) for this radio input
  */
  label : function ()
  {
    if (this.$label === undefined)
    {
      this.$label = this._getLabelsForElement();
    }
    return this.$label;
  },  
  /*
   * @expose 
   * @memberof! oj._ojRadio
   * @instance
   * @override
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" )._ojRadio( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    
    var isDisabled = this.element.is( ":disabled" );

    if ( isDisabled !== this.options.disabled ) 
    {
      this._setOption( "disabled", isDisabled );
    }
    this._setup();
  },    
  /**
   * Returns a jQuery object containing the element visually representing the radio. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj._ojRadio
   * @instance
   * @return {jQuery} the radio
  */
  widget : function ()
  {
    return this.uiRadio;
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
       
  /**
   * @override
   * @private
   */
  _create : function ()
  {
    this._super();
    
    // CHECKED:
    // if options.checked is not set, or not valid, get it from the element
    // if options.checked is set to a valid value (boolean), set it on the 
    // element to keep the two in sync. 
    if ( typeof this.options.checked !== "boolean" ) 
    {
      // !! ensures it is a boolean
      this.options.checked = !!this.element.prop( "checked" );
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

    this._drawOnCreate();
    
    this._on(this._events);
  },
  /** Called every time ojRadioset is called without attributes. It's essentially
   * a hard-reset.
   * @override
   * @private
   */
  _init : function ()
  {
    this._super();
    this._setup();
  },
  _setup : function() 
  {

    // disable radio dom if component disabled option is true
    if (this.options.disabled)
    {
      // calls _setOption disable is true
      this.disable();
    }
    else
    { 
      this.enable();
    }

    // set checked radio dom if component checked option is true
    if (this.options.checked)
    {
      this._setOption("checked", true);
    }
    else
    {
      this._setOption("checked", false);
    }
  },
  _events : 
  {

  },
  /**
   * set up styles on create
   * @private
   */
  _drawOnCreate : function ()
  {
    this.uiRadio = this.element.addClass("oj-radio oj-widget");
    this.$label = this._getLabelsForElement();
    this.$label.addClass("oj-radio-label");
    // oj-hover/oj-focus/oj-active should be added/removed in code as needed, 
    // however these should only be added when the item is enabled. 
    // When the item is disabled these classes should not be added.
    var self = this;
    this._hoverable( this.element );
    this._focusable( this.element );
    this._activeable( this.element );
    // loop through each label
    $.each(self.$label, function ()
    {
      self._hoverable(this);
      self._focusable(this);
      self._activeable(this);
    });
   },
  /**
   * @override
   * @private
   */
  _setOption : function (key, value)
  {

    this._super(key, value);

    if (key === "disabled")
    {
      value = !!value;
      if (value)
      {
        // when a dom element supports disabled, use that, and not aria-disabled.
        // having both is an error.
        this.element.prop("disabled", true).removeAttr( "aria-disabled")
        .removeClass("oj-enabled").addClass("oj-disabled");

        this.$label.removeClass("oj-enabled")
        .addClass("oj-disabled");
      }
      else 
      {
        // when a dom element supports disabled, use that, and not aria-disabled.
        // having both is an error.
        this.element.prop("disabled", false)
        .removeAttr( "aria-disabled").removeClass("oj-disabled")
        .addClass("oj-enabled");
        this.$label.addClass("oj-enabled")
        .removeClass("oj-disabled");
      }
    }
 
    if (key === "checked")
    {
      if (value)
      {
        this.element.prop("checked", true);
      }
      else 
      {
        this.element.prop("checked", false);
      }
      this.element.toggleClass("oj-checked", value);
    }
  }, 
  /**
   * Returns the list of labels for the element. Most likely this will be 
   * one label, not multiple labels.
   * We do not guarantee that the returned list is live
   * We do not guarantee that the returned list is in document order
   * We first check if we are nested in a label, and then we check a jquery 
   * selector query on <label>s with a 'for' id equal to our id.
   * NOTE: The .labels DOM property does not work on most browsers, so we don't use it.
   * e.g,
   * <pre>
   * <input id="opt3" type="radio" name="rb" value="opt3">
   * <label class="oj-choice-label" for="opt3">Radio Option 3</label>
   * </pre>
   * @private
   */
  _getLabelsForElement: function() 
  {
    // .closest("label") - For each element in the set, get the first element   
    // that matches the selector by testing the element itself and traversing up 
    // through its ancestors in the DOM tree.   
    var labelClosestParent = this.element.closest("label");
    var id = this.element.prop("id");
    var labelForQuery = "label[for='" + id + "']";
    // combine these two query results to return the label we are nested in
    //  and/or the label with the for attribute pointing to the radio's id.
    return labelClosestParent.add($(labelForQuery)); 
  },
  /**
   * TODO Do I need to save off the html attributes and restore later? like disabled? name (if they change it with the option?) YES
   * @override
   * @private
   */
  _destroy : function ()
  { 
    this._super();
    // base class removes oj-disabled
    this.element.removeClass("oj-radio oj-checked oj-disabled oj-enabled oj-widget");
    // label isn't a widget, so remove oj-disabled
    this.$label.removeClass("oj-enabled oj-disabled oj-radio-label");
  }
  
  /**** end internal widget functions ****/ 
 
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
  _CLASS_NAMES : "oj-inputtext oj-form-control oj-widget",
  
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
 * JET Label This component is private. @VERSION
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
 * The _ojLabel component is a private component. It is not meant to be used
 * on a label element directly. Instead EditableValue components 
 * use the _ojLabel component in the internal implementation. 
 * <p>
 * The _ojLabel component decorates the input component's label with
 * extra dom for the required icon and help information (help
 * icon, help description, and help external url). If oj-label* styles are on
 * the label element, then the _ojLabel element will move them onto its root
 * dom element.
 * </p>
 * @class
 * @constructor
 * @name oj._ojLabel
 * @augments oj.baseComponent
 */
oj.__registerWidget("oj._ojLabel", $['oj']['baseComponent'],
{
  version : "1.0.0",  
  defaultElement : "<label>", 
  widgetEventPrefix : "oj", 
  options : 
  {
    /** 
     * The id of the input component that is associated with this label.
     * It is used to create an id for label's help icon dom (if any)
     * and that in turn is referred to with aria-describedby on the 
     * input component. This is needed for accessibility so that the screen
     * reader knows that the help icon is related to the input.
     * @expose 
     * @public
     * @instance
     * @memberof! oj._ojLabel
     */
    describedById: null,
    /**
     * The help information that goes on the label.  The help options are:
     * <ul>
     * <li>definition - this is the help definition text. It is what shows up
     * when the user hovers over the label or the help icon.</li>
     * <li>source - this is the help source url. If present, a help icon will
     * render next to the label and the anchor's target is this source.
     * </ul>
     * 
     * @expose 
     * @memberof! oj._ojLabel
     * @instance
     * @type {Object.<string, string>}
     * @default <code class="prettyprint">TODO: what goes here?</code>
     * 
     * @example <caption>Initialize the label with the help definition and external url information:</caption>
     * $( ".selector" )._ojLabel({ help: {definition:"some help definition", source:"some external url" } });
     * 
     * @example <caption>Set the <code class="prettyprint">help</code> option, after initialization:</caption>
     *
     * // setter
     * $( ".selector" )._ojLabel( "option", "help", {definition:"fill out the name", source:"http:\\www.oracle.com" } );
     */
    help: {definition: null, source: null},
    /** 
     * Whether this label should have a required icon.  Allowed values for 
     * required are 'required' and 'optional', 'optional' being the default.
     * @expose 
     * @public
     * @instance
     * @memberof! oj._ojLabel
     */
    required: null,
    /**
     * Allows you to set certain attributes on the root dom element.
     * For _ojLabel, we use 'class' only. The input components (via
     * EditableValue) set a styleclass on the _ojLabel's root in case
     * component-specific label styling is needed. For example, ojradioset
     * would pass class: 'oj-radioset-label'. ojinputtext would pass class:
     * 'oj-inputtext-label'. 
     *
     * @example <caption>Initialize root dom element with the set of 
     * <code class="prettyprint">rootAttributes</code>:</caption>
     * $(".selector")._ojLabel("option", "rootAttributes", {
     *   'class': 'oj-inputtext-label'
     * });
     * 
     * @expose
     * @access public
     * @memberof! oj._ojLabel
     * @instance
     * @type {Object|undefined}
     * @default <code class="prettyprint">{ id: null, class: null, style:null }</code>
     */
     rootAttributes: undefined
  },
 /**
  * @private
  * @const
  */
  _BUNDLE_KEY:
  {
    _TOOLTIP_HELP:      'tooltipHelp',
    _TOOLTIP_REQUIRED:  'tooltipRequired'    
  },
  /**** start Public APIs ****/
   
  /**
   * Returns a jQuery object containing the root dom element of the label 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj._ojLabel
   * @instance
   * @return {jQuery} the label
  */
  widget : function ()
  {
    return this.uiLabel;
  },
  /**
   * Refreshes the required and help dom.
   * @example <caption>Clear messages and refresh component.</caption>
   * $(selector).ojInputText("option", "messages", []); <br/>
   * $(selector).ojInputText("refresh");
   * component 
   * @access public
   * @instance
   * @expose
   * @memberof! oj._ojLabel
   */
  refresh : function ()
  {
    this._super();
    this._refreshRequired();
    this._refreshHelp();
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
       
  /**
   * After _create, the widget should be 100% set up.
   * @override
   * @private
   */
  _create : function ()
  {
    this._super();

    this._drawOnCreate();

  },
  /**
   * set up styles on create
   * @private
   */
  _drawOnCreate : function ()
  {
    // wrap the label with a root dom element (oj-label) and its child 
    // (oj-label-group). Then point this.uiLabel to the root dom element.

    this.uiLabel = this.element.wrap(this._uiLabelWrapperHtml())
                               .closest(".oj-widget");
                       
    // move an oj-label styles off of this.element, and put on the 
    // root dom element. Save these so we can put these back on 
    // this.element on destroy.
    this._moveClassesToRoot();
    if (this.options.help['definition'] || this.options.help['source'])
    { 
      this._insertHelpHtml();
      this._addHelpDefToLabel();
    }
    
    if (this.options.required === "required")
    {
      // Add or remove 'required' dom.
      // required. should go right before the label.
      this.element.before(this._requiredHtml());
    }
   },
   /**
   * move oj-label* classes from label element onto the root dom element
   * @private
   */
  _moveClassesToRoot : function ()
  {
    var classes = this.element.attr("class");
    this.movedClassArray  = [];
    if (classes)
    {
      var arrayOfClasses = classes.split(/\s+/);
      var numClasses = arrayOfClasses.length;
      for (var i=0; i < numClasses; i++)
      {
        var className = arrayOfClasses[i];
        // if class name has -label- in it, then move it
        // (e.g., oj-label, oj-label-inline, oj-md-label-nowrap, 
        // oj-md-labels-inline)
        if (className.indexOf("-label") > 0)
        {
          this.uiLabel.addClass(className); 
          this.element.removeClass(className);
          this.movedClassArray.push(className);
        }
      }
    }
  },
  /**
   * return the html string for the root dom element
   * @private
   */
  _uiLabelWrapperHtml : function ()
  {
    var rootAttributes = this.options.rootAttributes;
    var inputLabelClass;
    
    if (rootAttributes)
    {
      inputLabelClass = this.options.rootAttributes['class'];
    }
    
    if (inputLabelClass !== null)
    {
      return "<div class='oj-label oj-widget " + inputLabelClass + 
              "'><div class='oj-label-group'></div></div>";
    }
    else
    {
      return "<div class='oj-label oj-widget'><div class='oj-label-group'></div></div>";
    }

    
    
  },
  /** 
   * return the html string for the span with oj-label-required-icon
   * @private
   */
  _requiredHtml : function ()
  {
    var required = this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_REQUIRED);
    // TODO: Do we need oj-widget-icon? I'm not seeing it in the label demos
    return "<span class='oj-label-required-icon oj-widget-icon' title='" 
            + required + "'></span>";
  },
  /** 
   * return the html string of the span and its help information.
   * if (source), show help icon
   * if (helpDef), add 'title'=helpDef on help icon.
   * @private
   */
  _helpHtml : function (helpDef, source, describedById)
  {
    // construct the help html
    // if source (external url), then render a clickable help icon
    // if helpDef, then render oj-label-help-def style class on the label
    if (source)
    {
      var helpHtml = "<span id='" + describedById + "'>";
      helpHtml += "<a href='" + source + "' target='_blank'><span class=";
      helpHtml += "'oj-label-help-icon oj-widget-icon oj-clickable-icon' title='";
      if (helpDef)
        helpHtml += helpDef;
      else
      {
        var tooltipHelp = this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_HELP);
        helpHtml += tooltipHelp;
      }
      helpHtml += "' role='img'></span>";
      helpHtml += "</a></span>"
    }
    return helpHtml;
  },
   /** 
   * Add help definition information to the label element.
   * @private
   */
  _addHelpDefToLabel : function ()
  {
    var helpDef = this.options.help['definition'];
    if (helpDef)
    {
      // add oj-label-help-def styleclass to the label.
      // add title to the label.
      this.element.addClass("oj-label-help-def");
      this.element.attr("title", helpDef);
    }
  },
     /** 
   * Add help definition information to the label element.
   * @private
   */
  _removeHelpDefToLabel : function ()
  {
      this.element.removeClass("oj-label-help-def");
      this.element.attr("title", "");
  },
  /** 
   * finds the oj-label-group dom node and prepends the help html to it.
   * @private
   */
  _insertHelpHtml : function ()
  {
    var helpSource = this.options.help['source'];
    if (helpSource)
    {
      var helpDef = this.options.help['definition'];
      this.uiLabel.find(".oj-label-group").prepend(
        this._helpHtml(helpDef, 
                       helpSource,
                       this.options.describedById));
    }                     
  },
  /** 
   * refresh the help dom --
   * find the help root dom node and remove it if it is there 
   * and add back the help html. Helpful if a help option changed.
   * @private
   */  
  _refreshHelp : function ()
  {
    if (this.options.describedById !== null)
    {
      var describedById = "#" + this.options.describedById;
      this.uiLabel.find(describedById).remove();
    }
    // remove the style off of label dom as well.
    this._removeHelpDefToLabel();
    
    // now insert back if needed
    this._insertHelpHtml();
    this._addHelpDefToLabel();
  },
  /** 
   * refresh the required dom --
   * if required is required, then add the required dom if it isn't already there
   * if required is optional, remove the required dom if it is there.
   * Helpful if the required option changed.
   * @private
   */   
  _refreshRequired : function ()
  {
    // Add or remove 'required' dom.
    if (this.options.required === "required")
    {
      // required. should go right before the label if it isn't already there.
      if (this.uiLabel.find(".oj-label-required-icon").length === 0)
        this.element.before(this._requiredHtml());
    }
    else 
    {
      // not required, so find dom node with oj-label-required-icon on it.
      // Remove it.
      this.uiLabel.find(".oj-label-required-icon").remove();
    }
  },
  /**
   * Note that _setOption does not get called during create. it only gets called
   * when the component has already been created.
   * @override
   * @protected
   */
  _setOption : function (key, value)
  {
    this._super(key, value);

    if (key === "required")
    {
      this._refreshRequired();
    }

    // if user changed the help definition or source, then update the UI.
    // Find the help dom first. If it exists, replace it with new dom.
    // if it doesn't exist, add it.
     if (key === "help")
    {
      this._refreshHelp();
    }
  }, 
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * Test authors should target spinner sub elements using the following names:
   * <ul>
   * <li><b>oj-label-help-icon</b>: the label's help icon</li>
   * <li><b>oj-label-help-icon-anchor</b>: the anchor tag of the help icon</li>
   * <li><b>oj-label-required-icon</b>: the label's required icon</li>
   * </ul>
   * 
   * @expose
   * @override
   * @memberof! oj._ojLabel
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
    if (subId === "oj-label-help-icon") {
      return this.widget().find(".oj-label-help-icon")[0];
    }
    if (subId === "oj-label-help-icon-anchor") {
      return this.widget().find(".oj-label-help-icon").parent()[0];
    }
    if (subId === "oj-label-required-icon") {
        return this.widget().find(".oj-label-required-icon")[0];
    }
    
    // Non-null locators have to be handled by the component subclasses
    return null;
  },  
  /**
   * 
   * @override
   * @protected
   */
  _destroy : function ()
  { 
    // replace the dom we added back with the element dom.
    this._super();
    // replace the oj-label* style classes we moved  to the root dom node 
    // on create
    for (var i=0; i < this.movedClassArray.length; i++)
    {
      this.element.addClass(this.movedClassArray[i]);
    }  
    this._removeHelpDefToLabel();
    
    this.uiLabel.replaceWith(this.element);
  }
  
  /**** end internal widget functions ****/ 
 
});
/*!
 * jQuery UI Accordion 1.10.3
 * http://jqueryui.com
 *
 * jQuery Mobile 1.3.2
 * http://jquerymobile.com
 (
 * Copyright 2010, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 */
/**
 * @class 
 * @name oj.ojCollapsible
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="collapsibleOverview-section">
 *   JET Collapsible Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#collapsibleOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant collapsible with mouse and keyboard interactions for navigation.
 * 
 * <p>A JET Collapsible can be created from any valid markup as long as the root element has at least two children: the first element for the header and the second element for the content.
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div id="collapsible">
 *   &lt;h3>Header 1&lt;/h3>
 *   &lt;p>Content 1&lt;/p>
 * &lt;/div>
 * </code></pre>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>
 * <h5>When the focus is on the header</h5>
 * </p>
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
 *       <td><kbd>Space or Enter</kbd></td>
 *       <td> Toggle disclosure state.</tr>
 *   </tbody>
 *  </table>
 *
 * <p>Disabled items can receive keyboard focus, but do not allow any other interaction.
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the collapsible must be <code class="prettyprint">refresh()</code>ed.
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-collapsible</code> pseudo-selector can be used in jQuery expressions to select JET Collapsible.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-collapsible" ) // selects all JET Collapsible on the page
 * $myEventTarget.closest( ":oj-collapsible" ) // selects the closest ancestor that is a JET Collapsible
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <li>JET Collapsible supports clickable option: specifies where to click to toggle disclosure. Default is "disclosureIcon", however if a collapsible is inside an Accordion, default is "header"</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "collapsible".  
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates a JET Collapsible. 
 * @example <caption>Initialize the collapsible with no options specified:</caption>
 * $( ".selector" ).ojCollapsible();
 * 
 * @example <caption>Initialize the collapsible with some options and callbacks specified:</caption>
 * $( ".selector" ).ojCollapsible( { "disabled": true, "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize the collapsible via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="collapsible" data-bind="ojComponent: { component: 'ojCollapsible', 
 *                                             clickable: "header", 
 *                                             collapsed: false }">
 */
(function ()
{
  var uid = 0, 
      OPEN_ICON = "oj-collapsible-open-icon", 
      CLOSE_ICON = "oj-collapsible-close-icon";

  oj.__registerWidget("oj.ojCollapsible", $['oj']['baseComponent'], 
  {
    version : "1.0.0", 
    widgetEventPrefix : "oj",
    options : 
    {
      /** 
       * Specifies if the content is collapsed or expanded initially.
       *
       * @expose 
       * @memberof! oj.ojCollapsible
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">true</code>
       *
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">collapsed</code> option specified:</caption>
       * $( ".selector" ).ojCollapsible( { "collapsed": true } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">collapsed</code> option, after initialization:</caption>
       * // getter
       * var collapsed = $( ".selector" ).ojCollapsible( "option", "collapsed" );
       * 
       * // setter
       * $( ".selector" ).ojCollapsible( "option", "collapsed", true );
       */
      collapsed : true, 

      /** 
       * Disables the collapsible if set to <code class="prettyprint">true</code>.
       * @name disabled
       * @memberof! oj.ojCollapsible
       * @instance
       * @type {boolean|null}
       * @default <code class="prettyprint">false</code>
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">disabled</code> option specified:</caption>
       * $( ".selector" ).ojCollapsible( { "disabled": true } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
       * // getter
       * var disabled = $( ".selector" ).ojCollapsible( "option", "disabled" );
       * 
       * // setter
       * $( ".selector" ).ojCollapsible( "option", "disabled", true );
       */
      disabled: null,

      /** 
       * The event that the header will react to toggle disclosure. Valid values: "click" and or "mouseover".
       *
       * @expose 
       * @memberof! oj.ojCollapsible
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"click"</code>
       *
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">event</code> option specified:</caption>
       * $( ".selector" ).ojCollapsible( { "event": "mouseover" } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">event</code> option, after initialization:</caption>
       * // getter
       * var event = $( ".selector" ).ojCollapsible( "option", "event" );
       * 
       * // setter
       * $( ".selector" ).ojCollapsible( "option", "event", "mouseover" );
       */
      event : "click", 

      /** 
       * Where in the header to click to toggle disclosure. Valid values: disclosureIcon or header
       *
       * @expose 
       * @memberof! oj.ojCollapsible
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"disclosureIcon"</code>
       *
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">clickable</code> option specified:</caption>
       * $( ".selector" ).ojCollapsible( { "clickable": "header" } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">clickable</code> option, after initialization:</caption>
       * // getter
       * var clickable = $( ".selector" ).ojCollapsible( "option", "clickable" );
       * 
       * // setter
       * $( ".selector" ).ojCollapsible( "option", "clickable", "header" );
       */
      clickable : "disclosureIcon",

      // callbacks
      /**
       * Triggered after the collapsible has been expanded (after animation completes).
       * The expand can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojCollapsible
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * 
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">expand</code> callback specified:</caption>
       * $( ".selector" ).ojCollapsible({
       *     "expand": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
       * $( ".selector" ).on( "ojexpand", function( event, ui ) {} );
       */
      expand : null, 

      /**
       * Triggered immediately before the collapsible is expanded.
       * The beforeexpand can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojCollapsible
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * 
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">beforeexpand</code> callback specified:</caption>
       * $( ".selector" ).ojCollapsible({
       *     "beforeexpand": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeexpand</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeexpand", function( event, ui ) {} );
       */
      beforeExpand : null,

      /**
       * Triggered after the collapsible has been collapseed (after animation completes).
       * The collapse can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojCollapsible
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * 
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">collapse</code> callback specified:</caption>
       * $( ".selector" ).ojCollapsible({
       *     "collapse": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapse</code> event:</caption>
       * $( ".selector" ).on( "ojcollapse", function( event, ui ) {} );
       */
      collapse : null, 

      /**
       * Triggered immediately before the collapsible is collapseed.
       * The beforecollapse can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojCollapsible
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * 
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">beforecollapse</code> callback specified:</caption>
       * $( ".selector" ).ojCollapsible({
       *     "beforecollapse": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforecollapse</code> event:</caption>
       * $( ".selector" ).on( "ojbeforecollapse", function( event, ui ) {} );
       */
      beforeCollapse : null

    },

    _create : function ()
    {
      this._super();
      this.activatable = $();

      this.element.addClass("oj-collapsible oj-widget oj-helper-reset")

      this._processPanels();
      this._refresh();
    },

    /* 
     * Component developers: This API and functionality is subject to change pending architectural review!
     * See the baseComponent method for preliminary API doc.
     */
    _showContextMenu: function(menu, event)
    {
      // TODO: is this the right logic for this component?
      menu.show(event, {"launcher": this.element.find(".oj-collapsible-header-icon").first(), "focus": "menu"});
    },

    _createIcons : function ()
    {
      var options = this.options;
      var icon = (options.collapsed ? CLOSE_ICON : OPEN_ICON);
      var iconTag = this._isDisabled() ? $("<span>") : $("<a href='#'>");

      iconTag.addClass("oj-widget-icon oj-clickable-icon oj-collapsible-header-icon " + icon)
        .attr("aria-labelledby", this.header.attr( "id" ))
        .prependTo(this.header);

      this.header.addClass("oj-collapsible-icons ");
    },

    _destroyIcons : function ()
    {
      this.header
        .removeClass("oj-collapsible-icons")
        .children(".oj-collapsible-header-icon")
        .remove();
    },

    _destroy : function ()
    {
      // clean up main element
      this.element
        .removeClass("oj-collapsible oj-widget oj-helper-reset oj-collapsible-collapsed oj-disabled");

      // clean up headers
      if (this._isDisabled())
        this._findFocusables(this.header).removeAttr("tabIndex");

      this.header
        .removeClass("oj-collapsible-header oj-helper-reset")
        .each(function ()
        {
          if (/^oj-collapsible/.test(this.id))
          {
            this.removeAttribute("id");
          }
        });

      //aria
      var focusable = this._findFirstFocusableInHeader();
      focusable.removeAttr("role")
        .removeAttr("aria-controls")
        .removeAttr("aria-expanded")
        .removeAttr("aria-disabled");

      this._destroyIcons();

      this._findFocusables(this.content).removeAttr("tabIndex");
      this.content.unwrap();

      // clean up content panels
      this.content
        .css("display", "")
        .removeAttr("aria-hidden")
        .removeAttr("tabIndex")
        .removeClass("oj-helper-reset oj-widget-content oj-collapsible-content")
        .each(function ()
        {
          if (/^oj-collapsible/.test(this.id))
          {
            this.removeAttribute("id");
          }
        });
    },

    _isDisabled : function ()
    {
      //TODO: should we added "showDisclosure" option?
      return this.element.hasClass("oj-disabled");
    },

    _getClickableSelector : function ()
    {
      if (this.options.clickable == "header")
        return "> .oj-collapsible-header";
      else //disclosureIcon
        return "> .oj-collapsible-header > .oj-collapsible-header-icon";
    },

    _setOption : function (key, value)
    {
      if (key === "collapsed")
      {
        this._setCollapsed(value);
        return;
      }

      if (key === "event" || key === "clickable")
      {
        this._tearDownEvents();
        this._super(key, value);
        this._setupEvents();
      }
      else 
      {
        this._super(key, value);
      }

      // #5332 - opacity doesn't cascade to positioned elements in IE
      // so we need to add the disabled class to the headers and panels
      if (key === "disabled")
      {
        this.header
          .add(this.header.next());
        this.element.toggleClass("oj-disabled", !!value);
      }
    },

    _keydown : function (event)
    {
      if (event.altKey || event.ctrlKey)
      {
        return;
      }
      var keyCode = $.ui.keyCode;

      switch (event.keyCode)
      {
        case keyCode.SPACE:
        case keyCode.ENTER:
          this._toggleHandler(event);
          break;
      }
    },

    /**
     * Refreshes the visual state of the collapsible. JET components require a <code class="prettyprint">refresh()</code> or re-init after the DOM is 
     * programmatically changed underneath the component.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojCollapsible
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojCollapsible( "refresh" );
     */
    refresh : function ()
    {
      this._super();
      this._processPanels();
      this._destroyIcons();
      this._refresh();
    },

    _processPanels : function ()
    {
      this.header = this.element.children(":first-child")
                      .addClass("oj-collapsible-header oj-helper-reset");

      this.content = this.header.next()
        .addClass("oj-collapsible-content oj-helper-reset oj-widget-content");

      this.content.wrap("<div></div>");
      this.wrapper = this.content.parent()
        .addClass("oj-collapsible-wrapper oj-helper-reset");

      //Note: must set tabIndex=-1 to focusable elements
      //to avoid tabbing in a disabled header
      if (this.options.disabled)
        this.element.addClass("oj-disabled");

      if (this._isDisabled())
      {
        this._findFocusables(this.header)
          .attr("tabIndex",  -1);
      }
    },

    /**
     * Used for explicit cases where the component needs to be refreshed 
     * (e.g., when the value option changes or other UI gestures).
     * @private
     */
    _refresh : function ()
    {
      var header = this.header, 
          content = this.content, 
          options = this.options;

      var collapsibleId = this.collapsibleId = 
        "oj-collapsible-" + (this.element.attr("id") || ++uid);

      var headerId = header.attr("id"), 
          contentId = content.attr("id");

      if (!headerId)
      {
        headerId = collapsibleId + "-header";
        header.attr("id", headerId);
      }
      if (!contentId)
      {
        contentId = collapsibleId + "-content";
        content.attr("id", contentId);
      }

      //aria
      this._createIcons();
      var focusable = this._findFirstFocusableInHeader();
      focusable.attr("role", "button")
        .attr("aria-controls", contentId);

      if (this._isDisabled())
      {
        focusable.attr("aria-disabled", true);
      }

      if (!this._isDisabled())
      {
        this._setContentTabIndex(options.collapsed ? "-1" : "0");
      }

      this.element.toggleClass("oj-collapsible-collapsed", options.collapsed);

      if (options.collapsed)
      {
        this.wrapper.css('max-height', 0);
        content.attr(
        {
          "aria-hidden" : "true"
        });
        focusable.attr("aria-expanded", "false");
      }
      else 
      {
        content.attr(
        {
          "aria-hidden" : "false"
        });
        focusable.attr("aria-expanded", "true");
      }

      this._tearDownEvents();
      this._setupEvents();
    },

    _setCollapsed : function (collapsed)
    {
      if (collapsed === this.options.collapsed)
        return;

      if (collapsed)
        this.collapse(true);
      else 
        this.expand(true);
    },

    _setupEvents : function ()
    {
      var events = 
      {
        "keydown" : this._keydown
      };

      var event = this.options.event;
      if (event)
      {
        var self = this ;
        $.each(event.split(" "), function (index, eventName)
        {
          events[eventName] = self._toggleHandler;
        });
      }

      var clickable = this.element.find(this._getClickableSelector());

      //add listeners on clickable (event clickable)
      this._on(clickable, events);

      this._on(this.wrapper, 
      {
        "transitionend" : this._transitionEndHandler, 
        "webkitTransitionEnd" : this._transitionEndHandler, 
        "otransitionend" : this._transitionEndHandler, 
        "oTransitionEnd" : this._transitionEndHandler
      });

      if (!this._isDisabled())
      {
        this._on(this.element, 
        {
          "ojexpand" : this._expandCollapseHandler, 
          "ojcollapse" : this._expandCollapseHandler, 
          "ojfocus" : this._focusHandler,
          "ojfocusout" : this._focusHandler
        });

        this._hoverable(clickable);
        this._focusable(clickable);
        this._activatable(clickable);

      }
    },

    _tearDownEvents : function ()
    {
      this._off(this.element.find(this._getClickableSelector()));
      this._off(this.element.add(this.content));
    },

    _toggleHandler : function (event)
    {
      if (this._isDisabled())
        return;

      if (this.options.collapsed)
        this.expand(true, event);
      else 
        this.collapse(true, event);

      event.preventDefault();
      event.stopPropagation();

      //set focus on the disclosure icon
      this.header.find(".oj-collapsible-header-icon").focus();

    },

    _expandCollapseHandler : function (event)
    {
      if (this._isDisabled())
        return;

      if (!event.isDefaultPrevented())
      {
        var element = this.element, 
            options = this.options, 
            content = this.content,
            wrapper = this.wrapper,
            isCollapse = (event.type === "ojcollapse");

        event.preventDefault();

        options.collapsed = isCollapse;

        wrapper.contentHeight = wrapper.outerHeight();

        //collapsing
        if (isCollapse)
        {
          // disable transitions & set max-height to content height
          wrapper.removeClass("oj-collapsible-transition");
          wrapper.css('max-height', wrapper.contentHeight);

          setTimeout(function()
          {            
            // enable & start transition
            wrapper.addClass('oj-collapsible-transition')
              .css('max-height', 0);//!important

            element.addClass("oj-collapsible-collapsed");
          }, 10); // 10ms timeout is the secret ingredient for disabling/enabling transitions
          // chrome only needs 1ms but FF needs ~10ms or it chokes on the first animation for some reason

        }
        else
        {
          wrapper.contentHeight += content.outerHeight(); // if closed, add inner height to content height
          wrapper.addClass('oj-collapsible-transition').css(
          {
            'max-height': wrapper.contentHeight
          });
          element.removeClass("oj-collapsible-collapsed");
        }

        this.header
          .find(".oj-collapsible-header-icon").toggleClass(OPEN_ICON, !isCollapse)
            // logic or cause same icon for expanded/collapsed state would remove the oj-icon-class
            .toggleClass(CLOSE_ICON, (isCollapse || OPEN_ICON === CLOSE_ICON))
          .end();

        //aria
        this.content.attr("aria-hidden", isCollapse);

        this._findFirstFocusableInHeader().attr("aria-expanded", !isCollapse);

        this._setContentTabIndex(isCollapse ? "-1" : "0");

      }
    },

    _focusHandler : function (event)
    {
      if (this._isDisabled())
        return null;

      if (event.type == "ojfocusout")
      {
//        this.header.attr("aria-activedescendant", "false");
        this._findFirstFocusableInHeader()
          .attr("tabIndex", -1);
      }
      else if (event.type == "ojfocus")
      {
//        this.header.attr("aria-activedescendant", "true");
        this._findFirstFocusableInHeader()
          .attr("tabIndex", 0)
          .focus();
      }
    },

    _findFirstFocusableInHeader : function ()
    {
      return this._findFocusables(this.header).first();
    },

    _setContentTabIndex : function (value)
    {
      return this._findFocusables(this.content).attr("tabIndex", value);
    },

    _findFocusables : function (start)
    {
      //create <span> or <a> depending on if this.isDisabled
      if (this._isDisabled()) {
        return start.find("span");
      }
      return start.find("a,:input");
    },

    /**
     * Expand a collapsible.
     * 
     * @expose 
     * @memberof! oj.ojCollapsible
     * @instance
     * @param {boolean} vetoable if event is vetoable
     */
    expand : function (vetoable, event)
    {
      if (this._isDisabled())
        return;

      if (!vetoable || this._trigger("beforeexpand", event) !== false)
      {
        this._trigger("expand", event);
      }
    },

    /**
     * Collapse a collapsible.
     * 
     * @expose 
     * @memberof! oj.ojCollapsible
     * @instance
     * @param {boolean} vetoable if event is vetoable
     */
    collapse : function (vetoable, event)
    {
      if (this._isDisabled())
        return;

      if (!vetoable || this._trigger("beforecollapse", event) !== false)
      {
        this._trigger("collapse", event);
      }
    },

    _transitionEndHandler : function (event)
    {
      if (this._isDisabled())
        return;

      //just completed a collapse transition
      if (this.options.collapsed)
      {
        this._trigger("aftercollapse", event);
      }
      else 
      {
        this.wrapper.css('max-height', 9999);
        this._trigger("afterexpand", event);
      }
    },

    /**
     * Overridden to set oj-active class
     * @private
     */
    _activatable: function( element )
    {
      this.activatable = this.activatable.add( element );
      this._on( element, 
      {
        mousedown: function( event )
        {
	  $( event.currentTarget ).addClass( "oj-active" );
	},
        mouseup: function( event )
        {
	  $( event.currentTarget ).removeClass( "oj-active" );
	}
      });
    }

  });

}
());
(function() {

// "private static members" shared by all toolbars:

/**
 * In all cases, the return value includes only radios that are an :oj-button, i.e. radios that have been buttonized.
 * 
 * Where this method looks for radio groupmates:
 *
 * - If $elems is present (even if empty), 
 *     - This method will only look in that set, and will not attempt to weed out any false positives as defined below. 
 *       (So in this case, return value includes the specified radio iff it's an :oj-button in $elems.)
 * - Else this method looks in exactly the places where groupmates (including the original radio) would live, i.e. not in 
 *   the places false positives would live.  (So in both of the following cases, return value includes the specified radio 
 *   iff it's an :oj-button.)  Specifically:
 *     - If radio is in a form, this method will only look in that form.
 *     - Else, this method will look in the radio's document, but not in any forms.
 * 
 * Radios w/ name="" (incl name omitted) are not in a radio group (i.e. no SelectOne semantics), not even with other radios with 
 * w/ name="".  So if radio is nameless, the return value will include only radio (or nothing at all if it isn't an :oj-button, or 
 * if $elems is passed and it doesn't include radio).  
 * 
 * False positives: radios with nonempty names that match radio's name, but are actually not groupmates (i.e. no SelectOne 
 * relationship), e.g. because they're from a different form.
 * 
 * TBD: should this method handle the disconnected-from-dom case that _determineButtonType tries to handle?
 * 
 * 
 * @param {!Element} radio  a radio button.  Not a JQ object, other button or element type, or null.
 * @param {jQuery=} $elems  optional JQ object, containing 0 or more elems that aren't necessarily radios or buttons, in which to look for groupmates.
 *                          E.g. the elements in a buttonset or toolbar.  Must not contain any false positives as defined above.
 */
var _radioGroup = function( radio, $elems ) {
    var name = radio.name,
        form = radio.form,
        $radios;
    if ( name ) {
        name = name.replace( /'/g, "\\'" ); // escape single quotes
        var selector = ":radio[name='" + name + "']:oj-button";
        if ( $elems ) {
            $radios = $elems.filter( selector );
        } else if ( form ) {
            $radios = $( form ).find( selector );
        } else {
            $radios = $( selector, radio.ownerDocument )
                .filter(function() {
                    return !this.form;
                });
        }
    } else {
        $radios = ($elems ? $elems.filter( radio ) : $( radio )).filter(":oj-button");
    }
    return $radios;
};

/**
 * @class
 * @name oj.ojToolbar
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="toolbarOverview-section">
 *   JET Toolbar Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#toolbarOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant toolbar component.
 * 
 * <p>The JET Toolbar component can contain [JET Buttons]{@link oj.ojButton}, [JET Buttonsets]{@link oj.ojButtonset}, and non-focusable content 
 * such as separator icons.  Toolbar provides WAI-ARIA-compliant focus management.
 * 
 * <p>A toolbar that contains radios should contain all radios in the radio group.
 * 
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction and Focus management
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>JET Toolbar manages its own focus.  It maintains a single tabstop, with arrow-key navigation within the toolbar.  This navigation 
 * skips disabled buttons, wraps around at the end, and adjusts correctly in RTL.
 * 
 * <p> When tabbing back into the toolbar, focus goes to the most recently focused button.  (To address a browser limitation, if that button is an 
 * unchecked radio having a checked groupmate, the latter is focused instead.)
 * 
 * <p>As with any JET Button, buttons in a toolbar are activated with <kbd>Enter</kbd> or <kbd>Spacebar</kbd>.  
 * 
 * <p>Any buttonsets placed in the toolbar should have <code class="prettyprint">focusManagement</code> set to <code class="prettyprint">"none"</code>, 
 * so as not to compete with the toolbar's focus management.  
 * 
 * <p>The application should not do anything to interfere with the focus management.  E.g. it should not set the <code class="prettyprint">tabindex</code> of the buttons, or 
 * do anything that prevents enabled buttons from being a tabstop.  Also, enabled buttons should remain user-visible, without which arrow-key
 * navigation to the button would cause the focus to seemingly disappear.
 * 
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>JET Toolbar takes care of focus management, as noted above, and setting <code class="prettyprint">role="toolbar"</code> on the toolbar element.  
 * 
 * <!-- TODO: REVIEW WHETHER ANY PART OF THE FOLLOWING BUTTONSET VERBIAGE WAS RELEVANT TO TOOLBAR, AND UPATE ACCORDINGLY
 * 
 * <p>In addition, as shown in the online demos, the application is responsible for applying <code class="prettyprint">aria-label</code> and/or 
 * <code class="prettyprint">aria-controls</code> attributes like the following to the buttonset element, if applicable per the instructions that follow:
 * 
 * <pre class="prettyprint">
 * <code>aria-label="Choose only one beverage.  Use left and right arrow keys to navigate."
 * aria-controls="myTextEditor"
 * </code></pre>
 * 
 * <p>A sentence like the first is appropriate for a buttonset consisting of a radio group, in order to convey the "select one" semantics 
 * to AT users.  It should be omitted for checkboxes and push buttons.
 * 
 * <p>The second sentence lets the user know how to navigate.  It should be omitted if the buttonset's focus management is overridden 
 * by another component such as a containing Toolbar. (Note that Buttonsets inside Toolbars are not yet supported in v0.5.)
 * 
 * <p>The <code class="prettyprint">aria-controls</code> attribute is appropriate if the buttonset is controlling something else on the page, e.g. 
 * bold/italic/underline buttons controlling a rich text editor.  
 * 
 * END OF TODO - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the toolbar must be <code class="prettyprint">refresh()</code>ed.  
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-toolbar</code> pseudo-selector can be used in jQuery expressions to select JET Toolbars.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-toolbar" ) // selects all JET Toolbars on the page
 * $myEventTarget.closest( ":oj-toolbar" ) // selects the closest ancestor that is a JET Toolbar
 * </code></pre>
 * 
 * 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <p>For components like Toolbar and Menu that contain a number of like items, applications may wish to use a <code class="prettyprint">foreach</code> Knockout binding 
 * to stamp out the contents.  This binding cannot live on the same node as the JET <code class="prettyprint">ojComponent</code> binding, and must instead live on a nested 
 * virtual element as follows:
 * 
 * TODO: UPDATE EXAMPLE FROM BUTTONSET
 * 
 * <pre class="prettyprint">
 * <code>&lt;div id="radioButtonset" data-bind="ojComponent: {component: 'ojButtonset'}"
 *      aria-label="Choose only one beverage.  Use left and right arrow keys to navigate.">
 *     &lt;!-- ko foreach: drinkRadios -->
 *         &lt;label data-bind="attr: {for: id}, text: label">&lt;/label>
 *         &lt;input type="radio" name="beverage"
 *                data-bind="value: id, click: $parent.offerAdvice, attr: {id: id, checked: id === $parent.initialDrink}"/>
 *     &lt;!-- /ko -->
 * &lt;/div>
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <li>All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "toolbar" or "menu".  
 * E.g. if JQUI had a toolbar component, and if it followed the usual pattern, then it would have a <code class="prettyprint">toolbarcreate</code> 
 * event, while JET's is called <code class="prettyprint">ojcreate</code>, as shown in the doc for that event.
 * Reason:  This makes the API more powerful.  It allows apps to listen to "foo" events from <em>all</em> JET components via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", myFunc);
 * </code></pre>
 * 
 * or to "foo" events only from JET Toolbars (the JQUI functionality) via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", ":oj-toolbar", myFunc);
 * </code></pre>
 * 
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * 
 * @desc Creates a JET Toolbar.  If called after the toolbar is already created, is equivalent to the 
 * "set many options" overload of <code class="prettyprint">option()</code>.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the toolbar with no options specified:</caption>
 * $( ".selector" ).ojToolbar();
 * 
 * @example <caption>Initialize the toolbar with some options and callbacks specified:</caption>
 * $( ".selector" ).ojToolbar( { "disabled": true, "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize the toolbar via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="beverages" data-bind="ojComponent: { component: 'ojToolbar', 
 *                                               disabled: true, 
 *                                               create: setupToolbar }">
 */
oj.__registerWidget("oj.ojToolbar", $['oj']['baseComponent'], {
    version: "1.0.0", // TODO: doesn't get renamed even when unquoted and not in (our) externs.js file, so I'm leaving it for now.  Is it used anywhere, e.g. build tool?  If so, should prob quote or extern or something.  If not, should it get moved to @version (if that exists) or similar, or just remove, or...?
    
    // TODO: See notes for blurb to put in JET for JQUI Devs doc, that we're removing JQUI's undocumented public "items " API.  
    //       If we reinstate this option, need to restore @expose tag, and decide doc it.
    // TODO: do we want to keep the :data selector at the end?  Especially now that I'm planning to instantiate new buttons but not 
    //       refresh old ones?  Review how this selector is used.  If keep it, reconfirm that the param to data is correct under the new namespace.
    // private.  I moved from options to here since no longer public option.  Leave unquoted so gets renamed by GCC as desired.
    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(oj-ojButton)",
    
    widgetEventPrefix : "oj", 

    options: { // options is in externs.js.  TODO: same as other prototype fields.
        /**
         * The exact semantics of disabling a toolbar is currently under review.
         * 
         * @member
         * @name disabled
         * @memberof! oj.ojToolbar
         * @instance
         * @type {boolean}
         * @default <code class="prettyprint">false</code>
         * 
         * @example <caption>Initialize the toolbar with the <code class="prettyprint">disabled</code> option specified:</caption>
         * $( ".selector" ).ojToolbar( { "disabled": true } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
         * // getter (does not reflect changes made directly to the buttons)
         * var disabled = $( ".selector" ).ojToolbar( "option", "disabled" );
         * 
         * // setter
         * $( ".selector" ).ojToolbar( "option", "disabled", true );
         */
        // disabled option declared in superclass, but we still want the above API doc

        // Events
        
        /**
         * Triggered when the toolbar is created.
         *
         * @event 
         * @name create
         * @memberof! oj.ojToolbar
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Empty object included for consistency with other events
         * 
         * @example <caption>Initialize the toolbar with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojToolbar({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */
        // create event declared in superclass, but we still want the above API doc
    },

    _create: function() { // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
        this.element
            .addClass( "oj-toolbar oj-widget" )
            .attr( "role", "toolbar" );

        // call _setup from _create, not _init, so create listeners (called after _create before _init) see a fully inited component.
        // We don't implement _init at all, since it's intended to perform startup behaviors like autoOpen, 
        // not initing state or performing a refresh, and we have no such startup behaviors.
        this._setup(true);
        
        this._super(); // TODO: call this at beginning of method.  This will happen as part of the JET create-time refactoring.
    },

    /* 
     * Component developers: This API and functionality is subject to change pending architectural review!
     * See the baseComponent method for preliminary API doc.
     */
    _showContextMenu: function(menu, event)
    {
      menu.show(event, {"launcher": this.element.find(":oj-button[tabindex=0]"), "focus": "menu"});
    },

    _setOption: function( key, value ) { // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
        // JIM TODO: for which button options should this be supported?  Part of broader discussion of whether container components 
        // should recursively call API on their children, e.g. refresh(), destroy().
        // TODO: this should automatically refresh the component to pick up the new disabled statuses, so app doesn't have to.
        // TODO: TOOLBAR IS LESS TIGHTLY BOUND TO ITS CONTENTS THAN BUTTONSET.  POST-V1, IT CAN CONTAIN MUCH MORE THAN JUST 
        //       BUTTONS.  DO WE WANT TO GO DOWN THE PATH WHERE IT IS EXPECTED TO BE ABLE AND WILLING TO DISABLE ALL ITS CONTENTS?
        //       IF SO, THEN WE SHOULD ADD THE "DISABLED" CODE TO _SETUP THAT WE ADDED TO BUTTONSET.  WE'VE ALREADY DECIDED "NO" FOR 
        //       REFRESH()'ING THE CONTENTS, WHY DISABLE THE CONTENTS?
        if ( key === "disabled" ) {
            this.$buttons.ojButton( "option", key, value );
        }

        this._super( key, value );
    },

    // TODO: mention whether existing buttons are refreshed, and any params we add, when that discussion complete.
    //       Mention that autom'ly use "onlyThis" option, to avoid n^2 work.
    // TODO: THIS IS N/A FOR TOOLBAR, RIGHT? <li>Applies special styles to the first and last button of the toolbar (e.g. for rounded corners, depending on theming).
    /**
     * Refreshes the toolbar, including the following:
     * 
     * <ul>
     *   <li>Re-applies focus management / keyboard navigation.
     *   <li>Rechecks the reading direction (LTR vs. RTL).
     * </ul>
     * 
     * 
     * <p>A <code class="prettyprint">refresh()</code> is required in the following circumstances:
     * <ul>
     *   <li>After buttons are added to or removed from the toolbar.</li>
     *   <li>After a change to the <code class="prettyprint">disabled</code> status of any of the buttons in the toolbar.</li>
     *   <li>After a programmatic change to the <code class="prettyprint">checked</code> status of a radio button in the toolbar
     *       (which should be done via Buttonset's <code class="prettyprint">checked</code> option).  This applies only to radios, 
     *       not to checkboxes or push buttons.</li>
     *   <li>After the reading direction (LTR vs. RTL) changes.</li>
     * </ul>
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojToolbar
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojToolbar( "refresh" );
     */
    refresh: function() {
        this._super();
        this._setup(false);
    },
    
    _setup: function(isCreate) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var self = this;
        this.isRtl = this._GetReadingDirection() === "rtl";
        
        // When toolbar is binding listeners to buttons, use the Toolbar's eventNamespace, not the Button's 
        // eventNamespace, to facilitate later unbinding only the Toolbar listeners.

        // For checkbox/radio, we're binding to inputs, not labels.

        // Put listeners on every button, b/c it's too unreliable to put them on the toolbar node and rely on event bubbling.
        // - E.g. bubbling doesn't work for antonym buttons (is this still true after the refactoring?) -- see comment on Button._setLabelOption().
        // - Likewise, focus mgmt can't just break if app listener stops propagation.
        // - Both of these problems still happen when using the delegation / selector overload of .on(); there is no special JQ bubbling magic.

        // TODO: Button itself already registers listeners for events like click and change.  Make sure we coord OK.  If it 
        // matters which handler (B or TB) is bound first, then must fix or doc.

        // TODO: If possible, find a way to bind to $newButtons.not($oldButtons), rather than unbind/bind on every one.  Presumably cheaper, 
        // (unless computing that set difference is expensive), and makes sure that any app bindings that are added after ours *stay* after ours.
        // This set diff includes both new buttons that were created since the last time this logic ran, and existing buttons that are now 
        // underneath this Toolbar.
        this.$buttons = this.element.find( this.items )
            .unbind( "keydown" + this.eventNamespace )
            .bind( "keydown" + this.eventNamespace, function(event) { 
                self._handleKeyDown(event, $(this)); 
            })
            
            .unbind( "click" + this.eventNamespace )
            .bind( "click" + this.eventNamespace, function(event) {
                if ( /*!clickDragged &&*/ !$(this).ojButton("option", "disabled") ) { 
                    // Normally the button will be tabbable after the click, since (a) if we reach here, the clicked button is enabled, and 
                    // (b) an unchecked radio before the click will normally be checked after the click.  But just in case it's unchecked 
                    // (e.g. due to app listener), we let callee run it thru _mapToTabbable() before using, as usual.
                    self._setTabStop( $(this) );
                }
            })
            .unbind( "focus" + this.eventNamespace )
            .bind( "focus" + this.eventNamespace, function(event) { 
                self._setTabStop( $(this) );
            });
        
        // the subset of Toolbar buttons that are enabled.  Disabled buttons are not tabbable.
        // TODO: don't cache this
        this.$enabledButtons = this.$buttons.filter(function(index) {
            return !$( this ).ojButton( "option", "disabled" );
        });
        
        this._initTabindexes(isCreate);
    },
    
    // For create, make only the first enabled button tabbable.  (We decided to have Shift-Tab go to first, not last, button.)
    // For refreshes, keep the existing tabstop if we can, otherwise proceed as with create.
    // Either way, if that button is a radio and some radio in its group is checked, make that one tabbable instead.
    // If there are no enabled buttons, makes them all untabbable.
    // No return value.
    _initTabindexes: function(isCreate) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        // even for refreshes where we'll wind up keeping the same tabstop, must make everything untabbable first, to ensure any new buttons become untabbable.
        var $last = $(this._lastTabStop);
        this._lastTabStop = undefined;
        this.$buttons.attr( "tabindex", "-1" );
        var $newTabStop; // callee might map this to radio groupmate
        
        // TODO: for refreshes when $last is a disabled radio with a checked enabled groupmate and they are in the toolbar, the groupmate would be 
        // a valid tabstop, but this defaults to the first.
        if (isCreate || !$last.is(this.$enabledButtons)) {
            // is create, or is refresh but must treat like create b/c $last is empty, or not enabled, or no longer in the toolbar
            $newTabStop = this.$enabledButtons.first(); // if empty (none enabled), no tabstop will be set
        } else {
            // is a refresh, and $last is non-empty and is an enabled button still in the toolbar.  May be a radio whose groupmate
            // has become checked, in which case callee will map it to that groupmate.
            $newTabStop = $last;
        }
        this._setTabStop( $newTabStop );
    },
    
    // For each button in $button (in our usage always 0-1 button hence $button singular), if that button is an unchecked radio 
    // with a checked groupmate (which means it's not tabbable), then map it to the checked one (checked enabled radios are 
    // tabbable, and we know it's enabled per the argument below).
    // 
    // $button contains 0 or more buttons to map.  Must be enabled since disabled buttons aren't tabbable.
    // Returns the mapped JQ object (which the caller will make the tabstop).
    // 
    // We know that this.$enabledButtons contains all buttons in $button, and all of their potentially checked radio-groupmates, since:
    // - The above "enabled" requirement guarantees that $button's contents are all in $enabledButtons.
    // - The prohibition against radio groupmates that are not in the toolbar, and the prohibition against checked disabled groupmates 
    //   of enabled radios, guarantee that if $button is a radio, then all of its potentially checked groupmates are enabled and thus in 
    //   $enabledButtons.
    // 
    // Firefox browser issue:   (TODO: should we doc this?  File FF and/or JET bug?)
    // 
    // When this method maps an unchecked radio to its checked groupmate, the caller ensures that the former still has focus, but the latter
    // is the tabstop for when the user tabs out and back in.  When tabbing / Shift-Tabbing from the unchecked radio in the direction of the 
    // checked one, Chrome and IE9 are smart enough to tab out of the radio group to the adjacent tabstop as desired.  But in FF, focus goes to 
    // the checked one, which is not what we want.
    // 
    // Reason: Chrome and IE9 are smart enough never to tab within a radio group.  If focus is in the radio group, Tab and Shift-Tab exit the radio group.
    // But in FF, [a radio is reachable via Tab/Shift-Tab from within the group] if [it's enabled, tabindex != -1, and either checked or has no 
    // checked groupmates], i.e. [it would be reachable via Tab/Shift-Tab from outside the group if all its groupmates happened to be untabbable 
    // (e.g. disabled)].  In other words, FF is the only one that fails to distinguish between radios that could be valid tabstops from outside, and
    // those that should be valid tabstops from inside.  
    // 
    // This impl improves on the native behavior.  In FF, in an unchecked radio group, every single radio is a tabstop.  Our use of tabindex=-1 
    // guarantees that we never tab within the group in that case.  It's only a checked groupmate that can be tabbed to from within. (So at 
    // most one unwanted tabstop.)
    // 
    // After much time and effort, the latter issue seems to be infeasible to fix in any robust, non-brittle way.  E.g.:
    // - Clearing all tabstops and restoring on tab-out of toolbar:  FF provides no reliable way to find out whether a blur is exiting the entire 
    //   toolbar.  The obvious setTimeout workaround needed to be unacceptably long (e.g. 250ms) and even then was unreliable.  If we ever fail 
    //   to restore the tabstop, the toolbar becomes untabbable and inaccessible.
    // - Every other approach had similar robustness issues. 
    _mapToTabbable: function( $button ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var $enabledButtons = this.$enabledButtons;
        return $button.map(function(index, elem) {
            // Buttons other than radios, and checked radios, are always tabbable if they're enabled, which this method requires.
            // Radios w/ name="" (incl name omitted) are not in a radio group, not even with other radios with w/ name="".  Radios 
            // with no groupmates are always tabbable, since either they're checked, or they're unchecked with no checked groupmate.
            if (elem.type != "radio" || elem.checked || elem.name == "") { 
                return elem;
            } else {
                // elem is unchecked radio in real (not "") group, which is tabbable iff no groupmate is checked.  Per above doc, we know that 
                // all of its potentially checked groupmates are in $enabledButtons.
                var $checkedRadio = _radioGroup(elem, $enabledButtons).filter(":checked");
                return ($checkedRadio.length ? $checkedRadio[0] : elem);
            }
        });
    },
    
    // Set which button is in the tab sequence.
    // $button should contain 0 or 1 button to be made tabbable (since at most one should be tabbable at a time).
    //   If 0 (i.e. no enabled buttons), all will become untabbable.  If 1, it must be tabbable in every way (e.g. enabled) except possibly 
    //   being an unchecked radio with a checked groupmate, which this method will map to its checked groupmate, which 
    //   we know is enabled thus tabbable since we require that checked radios with enabled groupmates not be disabled.  
    // No return value.
    _setTabStop: function( $button ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
//        if (!window.setTabStopCounter) window.setTabStopCounter=1; // REMOVE, is only for console.log's
//        console.log("in _setTabStop: " + window.setTabStopCounter++ + ".  Orig (premap) button checked: " + $button[0].checked); // + " and is:");
//        console.log($button[0]);
        
        $button = this._mapToTabbable( $button );
        var button = $button[0]; // button is undefined iff $button is empty iff we need to clear all tabstops b/c there are no enabled buttons to make tabbable
        var last = this._lastTabStop; // last is undefined iff $(last) is empty iff there are no existing tabstops to clear (b/c _initTabindexes just ran 
                                      // or previously there were no enabled buttons to make tabbable)
        
//        console.log("mapped button and last button are:");  console.log(button);  console.log(last);  console.log(".");
        
        // Cases: both are undefined: have no tabstops; want to keep it that way (b/c none enabled), so do nothing
        //        both are node X: X is the tabstop; want to keep it that way, so do nothing
        //        last is node X; button is undefined: X is the tabstop; want to clear it w/o replacing it (b/c none enabled).  This logic does that.
        //        last is undefined; button is node X: no existing tabstop; want to make X the tabstop.  This logic does that.
        //        last is node X; button is node Y: X is the tabstop; want to clear it and make Y the tabstop.  This logic does that.
        if ( button !== last) {
            //console.log("setting tab stop to " + $button.attr("id"));  console.log("$(last).length:");  console.log($(last).length);
            
            $(last).attr( "tabindex", "-1" ); // no-op iff $(last) is empty iff (see comment above)
            $button.attr( "tabindex", "0" ); // no-op iff $button is empty iff (see comment above)
            this._lastTabStop = button;
        }
    },
    
    // No return value.
    _handleKeyDown: function(event, $button) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        switch (event.which) {
            case $.ui.keyCode.LEFT:  // left arrow
            case $.ui.keyCode.RIGHT: // right arrow
                event.preventDefault();
                
                var $enabledButtons = this.$enabledButtons;
                var length = $enabledButtons.length;
                if (length<2) // nowhere to navigate to; currently focused button is the only enabled one in toolbar
                    break;
                
                var oldIndex = $enabledButtons.index($button);
                var increment = ((event.which == $.ui.keyCode.RIGHT) ^ this.isRtl) ? 1 : -1;
                var newIndex = (oldIndex+increment+length)%length; // wrap around if at start/end of toolbar
                
                // A11y office recommended treating radios like other buttons: Arrow moves focus without selecting, Spacebar selects, 
                // which we prefer too.  Since we're using role='button', not 'radio', we don't need to follow the WAI-ARIA radio behavior 
                // where Arrow moves focus and selects, Ctrl-Arrow moves focus without selecting.  
                $enabledButtons.eq(newIndex).focus();
                break;
            case $.ui.keyCode.UP:   // up arrow
            case $.ui.keyCode.DOWN: // down arrow
                // Per above comment, treating radios like buttons, which have no native or WAI-ARIA-mandated up/down arrow behavior, 
                // so disable native focus-and-select behavior.  TODO: should up/down emulate left/right, for buttonset (role="group") 
                // and/or toolbar (role="toolbar"), for radio groups and/or regular buttons?  Which of those 4 combos create the expectation 
                // that up/down arrows should work, either via convention or because JAWS reads out a claim that up/down should work?
                if ( $button.attr("type")=="radio" )
                    event.preventDefault();
                break;
            
            // Don't need Space/Enter handlers.  For all buttons except already-checked radios in some browsers, Space/Enter fire a click event 
            // (natively or manually), which already calls _setTabStop.  For checked radios (which are focused if they're getting 
            // this key event), _setTabStop has already been called for whichever happened 2nd:  focus (an already checked radio) or
            // check (an already focused radio) via click/Space/Enter.  If checking was done programmatically (via Bset.checked option), we require a refresh().
        }
    },
    
    // TODO: 
    // - As code evolves, ensure this still undoes everything we do in create/refresh/etc.
    // - Seems that superclass takes care of method bindings, but verify this works even when they're placed on other nodes / components like buttons.  Prelim 
    //   tests suggest that focus mgmt bindings are NOT removed from buttons on destroy!
    // - If a button is destroyed or otherwise removed from the toolbar (e.g. reparented outside it), we need to do all the things to it
    //   that are done in this method.  We need to doc that the toolbar must be refresh()ed in that case, and refresh() needs to do something like 
    //   removeToolbarStuff($oldButtons.not($newButtons)).  Needs additional care if any of the tasks assume the elem is still buttonized, in 
    //   which case maybe B.destroy has to do it (but prefer not to tightly couple).
    // - For the attrs below (role, tabindex, ...), probably best to remember initial value at create time, and restore it on destroy, 
    //   rather than removeAttr, setting it to 0, etc.  Use JQ's .data() method, and removeData() on toolbar destroy().
    _destroy: function() { // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
        this.element
            .removeClass( "oj-toolbar oj-widget" )
            .removeAttr( "role" );
        this.$buttons
            .attr( "tabindex", "0" ) // bsets in a toolbar should not have focusMgmt turned on, so this is OK, but should revert to orig value, not assume 0.
            .map(function() {
                return $( this ).ojButton( "widget" )[ 0 ];
            })
/*
            .end()
    
            // TODO: Since not recursively destroying the buttons like Bset, must instead restore the buttons to a not-in-toolbar (but possibly still in non-focus-managed bset) state, i.e. remove Toolbar stuff, 
            // restore any Button stuff we removed, etc.  Do right thing whether or not the buttons are in a buttonset (what does that affect?)
*/
    }
    
    // API doc for inherited methods with no JS in this file:

    /**
     * Returns a <code class="prettyprint">jQuery</code> object containing the toolbar element.  
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojToolbar#widget
     * @memberof! oj.ojToolbar
     * @instance
     * @return {jQuery} the toolbar element
     * 
     * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
     * var widget = $( ".selector" ).ojToolbar( "widget" );
     */

    // TODO: mention whether buttons are destroyed, and any params we add, when that discussion complete.
    /**
     * Removes the toolbar functionality completely. This will return the element back to its pre-init state, 
     * and remove the toolbar's focus management from the contained buttons.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojToolbar#destroy
     * @memberof! oj.ojToolbar
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
     * $( ".selector" ).ojToolbar( "destroy" );
     */
});

}() ); // end of Toolbar wrapper function

oj.__registerWidget("oj.ojPopup", $['oj']['baseComponent'], {
    version: "1.0.0",
    widgetEventPrefix: "oj",
    options: {
        'autoDismiss': 'none',
        'chrome': 'default',
        'initialFocus': 'none',
        'position': {
            'my': 'left top',
            'at': 'left bottom',
            'collision': 'flip'
        },
        'tail': 'none'
    },
    _create: function () {

        var rootStyle = this._GetRootStyle();
        var rootElement = $("<div>");
        this._rootElement = rootElement.hide().addClass(rootStyle)
      .attr("aria-hidden", "true");
        var content = $("<div>").addClass([rootStyle, "content"].join("-"));
        content.appendTo(rootElement);
        this.element.after(rootElement);
        this.element.appendTo(content);

        this._createTail();
        this._setChrome();

        // callback that overrides the positon['using'] for setting the tail.
        this._usingCallback = $.proxy(this._usingHandler, this);

        this._super();
    },
    _destroy: function () {
        this._super();

        if (this.isOpen())
            this.close();

        this._destroyTail();
        delete this._usingCallback;

        this._rootElement.replaceWith(this.element);
    },
    widget: function () {
        return this._rootElement;
    },
    open: function (launcher, position) {

        if (this.isOpen()) {
            this.close();

            //if beforeClose handler prevents that action, just bail out.
            if (this.isOpen())
                return;
        }

        if (this._trigger("beforeOpen") === false)
            return;

        this._setLauncher(launcher);
        this._setPosition(position);

        // TODO make a generic service that has a single resize listener and
        //      only publishes to popups that are in the active layer (aka modality).
        //      
        // establish a window resize listener to reevaluate best fit for
        // positioning
        var rootElement = this._rootElement;
        oj.Assert.assertPrototype(rootElement, jQuery);

        launcher = this._launcher;
        oj.Assert.assertPrototype(launcher, jQuery);

        this._on(true, $(window), { 'resize': this._resizeHandler });
        this._on(true, rootElement, { 'keydown': this._keydownHandler });
        this._on(true, launcher, { 'keydown': this._keydownHandler });

        var launcherId = launcher.attr("id");
        if (oj.StringUtils.isEmptyOrUndefined(launcherId)) {
            launcher.data("id-generated", true);
            launcherId = launcher.uniqueId().attr("id");
        }
        launcher.attr("aria-haspopup", "true");

        rootElement.removeAttr("aria-hidden");
        rootElement.attr("aria-describedby", launcherId);
        rootElement.attr("role", "tooltip");

        position = this.options["position"];
        rootElement.show().position(position);

        this._trigger("open");
        this._intialFoucs();
    },
    close: function () {
        if (!this.isOpen())
            return;

        if (this._trigger("beforeClose") === false)
            return;

        // if the content has focus, restore the the launcher
        this._restoreFocus();

        var rootElement = this._rootElement;
        oj.Assert.assertPrototype(rootElement, jQuery);

        rootElement.hide();
        rootElement.attr("aria-hidden", "true");

        var launcher = this._launcher;
        oj.Assert.assertPrototype(launcher, jQuery);

        if (launcher.data("id-generated"))
            launcher.removeUniqueId();
        launcher.removeAttr("aria-haspopup");
        rootElement.removeAttr("aria-describedby");

        this._off($(window), "resize");
        this._off(rootElement, "keydown");
        this._off(launcher, "keydown");

        delete this._launcher;
        this._trigger("close");
    },
    isOpen: function () {
        return this._rootElement.is(":visible");
    },
    _setOption: function (key, value) {

        switch (key) {
            case "tail":
                if (value !== this.options["tail"]) {
                    this._destroyTail();
                    this._createTail(value);
                }
                break;
            case "chrome":
                if (value !== this.options["chrome"])
                    this._setChrome(value);
                break;
            case "position":
                this._setPosition(value);
                if (this.isOpen())
                    this._resizeHandler();
                break;
        }

        this._super(key, value);
    },
    _GetRootStyle: function () {
        return "oj-popup";
    },
    _createTail: function (tail) {
        var tailDecoration = tail ? tail : this.options['tail'];
        if ("none" === tailDecoration)
            return null;

        var rootStyle = this._GetRootStyle();
        var tailMarkerStyle = [rootStyle, "tail"].join("-");
        var tailStyle = [tailMarkerStyle, tailDecoration].join("-");
        var tailStyleStartTop = [tailStyle, "start-top"].join("-");
        var tailStyleEndTop = [tailStyle, "end-top"].join("-");
        var tailStyleStartMiddle = [tailStyle, "start-middle"].join("-");
        var tailStyleEndMiddle = [tailStyle, "end-middle"].join("-");
        var tailStyleStartBottom = [tailStyle, "start-bottom"].join("-");
        var tailStyleEndBottom = [tailStyle, "end-bottom"].join("-");

        this._TAIL_STYLES = [tailStyleStartTop, tailStyleEndTop, tailStyleStartMiddle,
      tailStyleEndMiddle, tailStyleStartBottom, tailStyleEndBottom];

        //TODO horizontal "center" - don't have top and bottom center images for alta
        //horizontal-vertical, x-y
        //horizontal: right, left, center
        //vertical: top, bottom, middle
        this._TAIL_ALIGN_RULES = {
            'right-top': tailStyleEndTop,
            'right-middle': tailStyleEndMiddle,
            'right-bottom': tailStyleEndBottom,
            'left-top': tailStyleStartTop,
            'left-middle': tailStyleStartMiddle,
            'left-bottom': tailStyleStartBottom,
            'center-top': tailStyleStartTop,
            'center-middle': tailStyleStartMiddle,
            'center-bottom': tailStyleEndBottom
        };

        var tailDom = $("<div>").hide().addClass(tailMarkerStyle).addClass(tailStyle);

        // id over "marker style" due to nesting popups in popups
        this._tailId = "#" + tailDom.uniqueId().attr("id");
        var rootElement = this._rootElement;
        oj.Assert.assertPrototype(rootElement, jQuery);
        tailDom.appendTo(rootElement);

        return tail;
    },
    _getTail: function () {
        var tailId = this._tailId;
        if (!tailId)
            return null;

        return $(tailId);
    },
    _destroyTail: function () {

        var tail = this._getTail();
        if (tail)
            tail.remove();

        delete this._tailId;
    },
    _setChrome: function (chrome) {
        var chromeDecoration = (chrome ? chrome : this.options["chrome"]);
        var noChromeStyle = [this._GetRootStyle(), "no-chrome"].join("-");
        var rootElement = this._rootElement;
        oj.Assert.assertPrototype(rootElement, jQuery);

        if ("default" === chromeDecoration && rootElement.hasClass(noChromeStyle))
            rootElement.removeClass(noChromeStyle);
        else if ("none" === chromeDecoration && !rootElement.hasClass(noChromeStyle))
            rootElement.addClass(noChromeStyle);
    },
    _setLauncher: function (launcher) {
        if (!launcher)
            launcher = $(document.activeElement);
        else if ($.type(launcher) === "string")  //id jquery selector    
            launcher = $(launcher);
        else if (launcher.nodeType !== 1)        //dom element
            launcher = $(launcher);

        // if a jquery collection, select the first dom node not in the popups content
        if (launcher instanceof jQuery && launcher.length > 1) {
            var rootElement = this._rootElement;
            oj.Assert.assertPrototype(rootElement, jQuery);

            for (var i = 0; i < launcher.length; i++) {
                var target = launcher[0];
                //if (rootElement.has(target).length === 0) {
                if (!oj.DomUtils.isAncestorOrSelf(rootElement[0], target)) {
                    launcher = $(target);
                    break;
                }
            }
        }
        else if (!(launcher instanceof jQuery) || //object is not a jq
      ((launcher instanceof jQuery) && launcher.length === 0)) // empty jq collection
            launcher = $(document.activeElement);

        oj.Assert.assertPrototype(launcher, jQuery);
        this._launcher = launcher;
    },
    _setPosition: function (position) {

        var options = this.options;

        // new postion extends the existing object
        if (position)
            options["position"] = $.extend(options[position], position);

        // grab the updated postion
        position = options["position"];

        var usingCallback = this._usingCallback;
        oj.Assert.assertFunction(usingCallback);

        // if they provided a using function that is not our callback, stash it
        // away so that we can delegate to it in our proxy.
        if ($.isFunction(position["using"]) && position["using"] !== usingCallback)
            position["origUsing"] = position["using"];

        // override with our proxy to handle positioning of the tail
        position["using"] = usingCallback;

        //override "of" alignment node to the launcher if not specified
        var launcher = this._launcher;
        oj.Assert.assertPrototype(launcher, jQuery);

        if (!position["of"])
            position["of"] = launcher;

    },
    _usingHandler: function (pos, props) {
        var rootElement = props["element"]["element"];
        oj.Assert.assertPrototype(rootElement, jQuery);
        rootElement.css(pos);

        var tail = this._getTail();
        if (!tail)
            return;

        tail.hide();

        for (var i = 0; i < this._TAIL_STYLES.length; i++)
            tail.removeClass(this._TAIL_STYLES[i]);

        var alignMnemonic = [props["horizontal"], props["vertical"]].join("-");
        var tailStyle = this._TAIL_ALIGN_RULES[alignMnemonic];
        oj.Assert.assertString(tailStyle);

        if (tailStyle) {
            tail.addClass(tailStyle);
            tail.show();
        }

        var options = this.options;
        var origUsing = options["position"]["origUsing"];
        if (origUsing)
            origUsing(pos, props);
    },
    _resizeHandler: function (event) {
        var rootElement = this._rootElement;
        oj.Assert.assertPrototype(rootElement, jQuery);

        var position = this.options["position"];
        oj.Assert.assertObject(position);

        rootElement.position(position);
    },
    _intialFoucs: function () {
        var options = this.options;
        if ("none" === options["initialFocus"])
            return;

        if ("firstFocusable" === options["initialFocus"]) {
            var nodes = this.element.find(":focusable");
            if (nodes.length > 0) {
                var first = nodes[0];
                oj.Assert.assertDomElement(first);
                $(first).focus();
            }
        }
    },
    _isFocusInPopup: function (activeElement) {
        if (!activeElement)
            activeElement = document.activeElement;
        oj.Assert.assertDomElement(activeElement);

        var rootElement = this._rootElement;
        oj.Assert.assertPrototype(rootElement, jQuery);

        // return rootElement.is(activeElement) || rootElement.has(activeElement).length > 0;
        return oj.DomUtils.isAncestorOrSelf(rootElement[0], activeElement);
    },
    _isFocusInLauncher: function (activeElement) {
        if (!activeElement)
            activeElement = document.activeElement;
        oj.Assert.assertDomElement(activeElement);

        var launcher = this._launcher;
        oj.Assert.assertPrototype(launcher, jQuery);

        // return launcher.is(activeElement) || launcher.has(activeElement).length > 0;
        return oj.DomUtils.isAncestorOrSelf(launcher[0], activeElement);
    },
    _restoreFocus: function () {

        if (this._isFocusInPopup()) {
            var launcher = this._launcher;
            oj.Assert.assertPrototype(launcher, jQuery);

            launcher.focus();
        }
    },
    _keydownHandler: function (event) {
        if (event.isDefaultPrevented())
            return;

        var target = event.target;
        oj.Assert.assertDomElement(target);
        if (event.keyCode === $.ui.keyCode.ESCAPE) {
            event.preventDefault();
            this.close();
        } else if (event.keyCode === 117) {
            //F6 - toggle focus to launcher or popup
            if (this._isFocusInPopup(target)) {
                event.preventDefault();
                var launcher = this._launcher;
                oj.Assert.assertPrototype(launcher, jQuery);
                launcher.focus();
            }
            else if (this._isFocusInLauncher(target)) {
                event.preventDefault();
                this._intialFoucs();
            }
        } else if (event.keyCode === 9 && this._isFocusInPopup(target)) {
            // TAB within popup

            var nodes = this.element.find(":focusable");
            if (nodes.length > 0) {
                var firstNode = nodes[0];
                oj.Assert.assertDomElement(firstNode);

                var lastNode = nodes[nodes.length - 1];
                oj.Assert.assertDomElement(lastNode);

                if (firstNode === target && event.shiftKey) {
                    //tabbing backwards, cycle focus to last node
                    event.preventDefault();
                    $(lastNode).focus();
                }
                else if (lastNode === target && !event.shiftKey) {
                    //tabbing forwards, cycle to the first node
                    event.preventDefault();
                    $(firstNode).focus();
                }
            }
        }
    }

});
/*-------------------------------------------------------------------------*/
/* Copyright (c) 2013, Oracle and/or its affiliates. All rights reserved.  */
/*-------------------------------------------------------------------------*/
/*                                                                         */
/* ojTree v1.0                                                             */
/*                                                                         */
/* This based on the following version of jsTree                           */
/* jsTree 1.0-rc3                                                          */
/* http://jstree.com/                                                      */
/*                                                                         */
/* Copyright (c) 2010 Ivan Bozhanov (vakata.com)                           */
/*                                                                         */
/* Licensed same as jquery - under the terms of either the MIT License or  */
/* the GPL Version 2 License                                               */
/*   http://www.opensource.org/licenses/mit-license.php                    */
/*   http://www.gnu.org/licenses/gpl.html                                  */
/*                                                                         */
/* $Date: 2011-02-09 01:17:14 +0200 (� р, 09 февр 2011) $             */
/* $Revision: 236 $                                                        */
/*-------------------------------------------------------------------------*/
/*                                                                         */
/* The following plugin is also used.                                      */
/*                                                                         */
/* jQuery Hotkeys Plugin                                                   */
/* Copyright 2010, John Resig                                              */
/* Dual licensed under the MIT or GPL Version 2 licenses.                  */
/*                                                                         */
/* Based upon the plugin by Tzury Bar Yochay:                              */
/* http://github.com/tzuryby/hotkeys                                       */
/*                                                                         */
/* Original idea by:                                                       */
/* Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/     */
/*-------------------------------------------------------------------------*/


/**
  * The ojTree component allows a user to display the hierarchical relationship between the nodes of a tree.
  * 
  * Depends:
  *  jquery.ui.core.js
  *  jquery.ui.widget.js
  *
  * 
  * <h3 id="keyboard-section">Keyboard interaction<a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a></h3>
  * <table class="keyboard-table">
  *   <thead>
  *     <tr>
  *       <th>Key</th>
  *       <th>Use</th>
  *     </tr>
  *   </thead>
  *   <tbody>
  *     <tr>
  *       <td><kbd>Up/down arrow</kbd></td>
  *       <td>Moves between visible nodes.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Left-arrow</kbd></td>
  *       <td>On an expanded node, collapses the node.<br>On a collapsed or leaf node, moves focus to the node's parent.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Right-arrow</kbd></td>
  *       <td>On a collapsed node, expands the node.<br>On an expanded node, moves to the first first child of the node.<br>On an end node, does nothing.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Space bar</kbd></td>
  *       <td>Toggles the select status of the node.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Home</kbd></td>
  *       <td>Moves to the top node of the tree.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>End</kbd></td>
  *       <td>Moves to the last visible node of the tree.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Shift-Up arrow</kbd></td>
  *       <td>Extends selection up one node (assuming multiple selection has been defined).</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Shift-Down arrow</kbd></td>
  *       <td>Extends selection down one node (assuming multiple selection has been defined).</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Shift-Home</kbd></td>
  *       <td>Extends selection up to the top-most node.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Shift+pgDn</kbd></td>
  *       <td>Extends selection to the last node.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>* (asterisk)</kbd></td>
  *       <td>Expands all nodes.</td>
  *     </tr>
  * </tbody></table>
  *
  * @class
  * @name oj.ojTree
  * @augments oj.baseComponent
  */
(function () 
{
  /*
  function debugObj(o)  {
    var s ;
    try { s = JSON.stringify(o) ; }
    catch (e) { s = "ERROR";}
    return s ;
  };
  */

  /* 
   *  ojTree class names
   *  @type {string}
   *  @const
   */
  var  OJT_OPEN          = "oj-tree-open",
       OJT_CLOSED        = "oj-tree-closed",
       OJT_LEAF          = "oj-tree-leaf",
       OJT_ICON          = "oj-tree-icon",
       OJT_HOVER         = "oj-tree-hovered",
       OJT_CLICKED       = "oj-tree-clicked",
       OJT_LAST          = "oj-tree-last",
       OJT_LOADING       = "oj-tree-loading",
       OJT_LAST_SELECTED = "oj-tree-last-selected",
       OJT_DISABLED      = "oj-disabled" ;

  /**
    *  Public event names
    *  @const
    */
  var  _aEvNames = ["select", "deselect", "hover", "dehover", "expand", "collapse", "loaded", "move",
                    "delete", "deselectall", "rename", "refresh", "expandall", "collapseall", "destroy",
                    "create",
                    "remove", "cut", "copy", "paste"] ;     // <-- context menu ops

  /**
    *  Return true if event name is public. 
    *  @private
    */
  function _isPublicEvent(s) {
     var  b = ($.inArray(s, _aEvNames) >= 0) ;
     if ((! b) && (s == "create_node")) {
       b = true ;
     }
     return b ;
  };

  /**
    *  Convert event names to ojTree style.
    *  @private
    */
  function _convertEventName(s) {
    // jsTree uses the same event names as its methods.  This behavior is changed for ojTree

    if      (s === "expandAll")   {s = "expandall";}
    else if (s === "collapseAll") {s = "collapseall";}
    else if (s === "deselectAll") {s = "deselectall";}
    else if (s === "rename_node") {s = "rename";}
    else if (s === "set_focus")   {s = "focus";}
    else if (s === "unset_focus") {s = "unfocus";}
    else if (s === "delete_node") {s = "delete";}
    else if (s === "move_node")   {s = "move";}
    else if (s === "create_node") {s = "create";}

    return s ;
  };

  //  Default menu
  var _defaultMenu  = "<ul><li id='ojtreecreate'><a href='#'>{create}</a></li><li id='ojtreerename'><a href='#'>{rename}</a></li><li id='ojtreedelete'><a href='#'>{remove}</a></li><li id='ojtreeedit'><a href='#'>{edit}</a><ul><li id='ojtreecut'><a href='#'>{cut}</a></li><li id='ojtreecopy'><a href='#'>{copy}</a></li><li id='ojtreepaste'><a href='#'>{paste}</a></li></ul></a></li></ul>" ;
  var _translated   = false ;

  var scrollbar_width, e1, e2;
  $(function() {
   if (/msie/.test(navigator.userAgent.toLowerCase())) {
     e1 = $('<textarea cols="10" rows="2"></textarea>').css({ position: 'absolute', top: -1000, left: 0 }).appendTo('body');
     e2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({ position: 'absolute', top: -1000, left: 0 }).appendTo('body');
     scrollbar_width = e1.width() - e2.width();
     e1.add(e2).remove();
   } 
   else {
     e1 = $('<div />').css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: 0 })
             .prependTo('body').append('<div />').find('div').css({ width: '100%', height: 200 });
     scrollbar_width = 100 - e1.width();
     e1.parent().remove();
   }
  });


  /**
    *  Last remnants of jsTree css stuff.  TO BE REMOVED  TDO
    *  @param {Object=}  opts  The css data.
    *  @param {boolean=} bLink  True if opts.url is to be ignored.
    *  @private
    */
  function  _addSheet(opts, bLink)                                     
  {
     var tmp    = false,
         isNew  = true;

     if (opts.str)  {
        if (opts.title)  {
          tmp = $("style[id='" + opts.title + "-stylesheet']")[0];
        }
        if (tmp)  {
          isNew = false;
        }
        else   {
          tmp = document.createElement("style");
          tmp.setAttribute('type',"text/css");
          if (opts.title) {
            tmp.setAttribute("id", opts.title + "-stylesheet");
          }
        }
        if (tmp.styleSheet)  {
          if (isNew)  { 
            document.getElementsByTagName("head")[0].appendChild(tmp); 
            tmp.styleSheet.cssText = opts.str; 
          }
          else  {
            tmp.styleSheet.cssText = tmp.styleSheet.cssText + " " + opts.str; 
          }
        }
        else   {
          tmp.appendChild(document.createTextNode(opts.str));
          document.getElementsByTagName("head")[0].appendChild(tmp);
        }
        return tmp.sheet || tmp.styleSheet;
     }

     if (opts.url) {
       if (bLink) {
           if (document.createStyleSheet)  {
             try  {
              tmp = document.createStyleSheet(opts.url);    // IE
             }
             catch (e) { }
           }
           else  {
             tmp         = document.createElement('link');
             tmp.rel     = 'stylesheet';
             tmp.type    = 'text/css';
             tmp.media   = "all";
             tmp.href    = opts.url;
             document.getElementsByTagName("head")[0].appendChild(tmp);
             return tmp.styleSheet;
           }
       }
     }
  };

  /**
    * @private
    */
  var _instance = -1 ;      // Tree instance id

  oj.__registerWidget("oj.ojTree", $['oj']['baseComponent'], 
  {
     version : "1.0.0", 
     widgetEventPrefix : "oj", 
     defaultElement    : "<div>", 

     options: {
                /**
                  * Specifies an animation duration in milliseconds for expanding or collapsing a node.
                  * Specify zero to inhibit animation.
                  * @type {number}
                  * @default <code class="prettyprint">500</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                animDuration  : 500,

                /**
                  * Specify <span class="code-caption">true</span> if expanding a node programatically should
                  * also expand its parents (i.e all parent nodes down to this node will be expanded).
                  * @type {boolean}
                  * @default <code class="prettyprint">false</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                expandParents : false,

                /**
                  * Specifies whether any nodes should be initially expanded on start-up.   Specify an array
                  * of node id's, or the string <span class="code-caption">"all"</span> if all parent nodes
                  * should be expanded.  The value may optionally be specified as an empty array.
                  * @type {Array | null}
                  * @default <code class="prettyprint">null</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                initExpanded  : null,

                initLoaded    : [],                  // suppressed per design review

                /**
                  * Specifies whether selection is permitted, and whether more than one node
                  * can be selected at a time.  Values are <span class="code-caption">"single"</span>
                  * for single selection, <span class="code-caption">"multiple"</span> to allow multiple
                  * concurrent selections, and <span class="code-caption">"none"</span> to inhibit selection.
                  * @type {string}
                  * @default <code class="prettyprint">"single"</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                selectionMode             :  "single" ,

                selectedParentCollapse    :  false ,     // false, "deselect", "selectParent"
                selectedParentExpand      :  true ,

                /**
                  * Specifies the action to take when a selected node is deleted.  If set to 
                  * <span class="code-caption">true</span>, its previous sibling (or parent, if no previous siblings)
                  * is selected.  If <span class="code-caption">false</span> is specified, no action is taken.
                  * @type {boolean}
                  * @default <code class="prettyprint">false</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                selectPrevOnDelete        :  false ,

//              "initSelected"              :  [],         // removed per Design Review
                selectMultipleModifier    :  "ctrl" ,    // on, or ctrl, shift, alt
                selectRangeModifier       :  "shift" ,
                disableSelectingChildren  :  false,

                /**
                  * Specifies that the tree is to be populated from JSON (local or remote).
                  * json_data contains two properties:
                  * <ul>
                  *  <li>"data"</li>
                  *  <li>"ajax"</li>
                  * </ul>
                  *
                  * "data" - specifies the JSON node data for the tree as an array of node definitions (see
                  * format below). It may also be specified as a function which receives two arguments,
                  * <span class="code-caption">node</span>, and <span class="code-caption">fn</span>.
                  * </br>
                  * Here is a skeleton outline of a <span class="code-caption">"data"</span> function:
                  *</br>
                  *<pre class="prettyprint">
                  *<code>
                  *json_data = {
                  *               . . .
                  *               "data" : function(node, fn) {
                  *                         // node  -  the jQuery wrapped node to be expanded for a lazy load,
                  *                         //          or -1 if it is the initial call to load the table.
                  *                         // fn    -  a function to call with the JSON to be applied.
                  *
                  *                         fn( new_json_node_data ) ;   // return the JSON
                  *                        },
                  *               . . .
                  *}
                  *</code></pre>
                  * </br>
                  * <span class="code-caption">"ajax"</span> - allows remote JSON to be retrieved. It may be
                  * specifed as a boolean or as an object. If specifed as <span class="code-caption">false</span>
                  * or omitted, no AJAX operations are performed.</br></br>
                  * When specified as an object, it should contain the following two properties:
                  * <ul>
                  *  <li>type</li>
                  *  <li>url</li>
                  * </ul>
                  *<pre class="prettyprint">
                  *<code>
                  *{ "type": "GET",
                  *   "url":   "my_url"
                  *}
                  *</code></pre>
                  * If <span class="code-caption">"url"</span> is specified, the following format is used:
                  *</br>
                  *<pre class="prettyprint">
                  *<code>
                  *{ "type" : "GET",
                  *   "url":   function (node) {
                  *             ... return a url string ...
                  *            }
                  *)
                  *</code></pre>
                  * </br>
                  *  where  <span class="code-caption">node</span> is a parent node (used for lazy loading), or -1 to
                  *  indicate the initial tree load.
                  * </br></br>
                  *  Optionally, <span class="code-caption">success</span> and <span class="code-caption">error</span>
                  *  functions may be defined. If the <span class="code-caption">success</span> function returns a
                  *  value, it will be used to populate the tree; this can be useful if there is a need to transform
                  *  the data returned by a server at the client before it is displayed in the tree.
                  * </br></br></br>
                  *
                  * Note: to enable lazy loading of a parent node, specify that it has children but do not define them.
                  * When it is opened, data() or ajax() will be called with the node id whose JSON is to be returned.</br></br>
                  * 
                  *@example <caption>Skeleton outline of success and error functions</caption>
                  *<code>
                  *"ajax": {
                  *          "type":"GET",
                  *          "url": myurl    <-- url to full tree JSON
                  *          "success" : function(data, status, obj) {
                  *                        // data   = the JSON data
                  *                        // status = "success"
                  *                        // obj    = the AJAX object.
                  *                        trace("Ajax " + status) ;
                  *                        // return the data, can transform it first if required ;
                  *          },
                  *          "error" : function(reason, feedback, obj) {
                  *                        // reason e.g. "parsererror"
                  *                        // feedback.message  e.g. "unexpected string"
                  *                        // obj    = the AJAX object.
                  *                        trace("Ajax error " + reason + " feedback=" + feedback.message) ;
                  *          },
                  * </code>
                  *
                  *@example <caption>Example 1:  Load the complete tree from locally defined JSON.</caption>
                  *<code>
                  *"json_data": {  
                  *               "data": [
                  *                         { 
                  *                           "title": "Home",
                  *                           "attr": {"id": "home"},
                  *                         },
                  *                         { 
                  *                           "title": "News",
                  *                           "attr": {"id": "news"}
                  *                         },
                  *                         { 
                  *                           "title": "Blogs",
                  *                           "attr": {"id": "blogs"},
                  *                           "children": [ { 
                  *                                           "title": "Today",
                  *                                           "attr": {"id": "today"}
                  *                                         },
                  *                                         { 
                  *                                           "title": "Yesterday",
                  *                                           "attr": {"id": "yesterday"}
                  *                                         }
                  *                                       ]
                  *                         }
                  *                       ]
                  *             }
                  *</code>
                  *
                  *@example <caption>Example 2:  Load the complete tree with remotely served JSON.</caption>
                  *<code>
                  *"json_data": {
                  *              "ajax": {
                  *                         "type":"GET",
                  *                          "url": myurl    <-- url to full tree JSON
                  *                      }
                  *             }  
                  *</code>
                  *
                  *@example <caption>Example 3:  Load the complete tree with remotely served JSON via a function.</caption>
                  *<code>
                  *"json_data": {
                  *              "ajax": {
                  *                         "type":"GET",
                  *                          "url": function() {
                  *                                     return (a url) ;
                  *                                 }
                  *                      }  
                  * </code>
                  *
                  *@example <caption>Example 4:  Load a partial tree, and retrieve node data when a parent node is expanded and needs to be populated.</caption>
                  *<code>
                  *"json_data": {
                  *               "ajax": {
                  *                         "type":"GET",
                  *                         "url": function(node) {
                  *                                  if (node === -1) {                       // -1 indicates initial load
                  *                                    return (url for for  partial json) ;   // the tree outline with parent nodes empty.
                  *                                  }
                  *                                  else {
                  *                                     var id = node.attr("id") ;
                  *
                  *                                     return (a url based on the node id to retrieve just the node children) ; 
                  *                                  }
                  *                                }
                  *                       }
                  *             }
                  *</code>
                  *
                  *@example <caption>Example 5:  Transform data received from server before passing to ojTree.</caption>
                  *<code>
                  *"json_data": {
                  *               "ajax": {
                  *                         "type":"GET",
                  *                         "url": function(node) {
                  *                                        . . .
                  *                                },
                  *                         "success" : function (data)  {
                  *                                        . . .    // transform the received data into node JSON format
                  *
                  *                                        return (transformed data) ;
                  *                                     },
                  *                         "error" : function () {
                  *                                      // ajax call failed, do something here (e.g. tell the user)
                  *                                   }
                  *                       } 
                  *             }
                  *</code>
                  *
                  * @example <caption>Example 6:  Use own mechanism to load a partial tree and retrieve node data when a parent is expanded.</caption>
                  * <code>
                  * // Sample outline of a tree.  Note that the parent nodes "Node2" and "Node3" have
                  * // their "children" property specifed, but no children are actually defined.
                  *
                  *{
                  *  "title" : Node1",
                  *  "attr" : {"id" : "n1"}
                  *},
                  *{
                  *  "title" : Node2",
                  *  "attr" : {"id" : "n2"},
                  *  "children" : []
                  *},
                  *{
                  *  "title" : Node3",
                  *  "attr" : {"id" : "n2"},
                  *  "children" : []
                  *},
                  *
                  *
                  *"json_data": {
                  *         "data": function(node, fn) {
                  *                   // node  =  the node whose children are to be retrieved
                  *                   // fn    =  the function to call with the retrieved node json 
                  *
                  *                   if (node === -1) {                  // initial tree load
                  *                     fn( acquired node json for the tree) ;
                  *                   }
                  *                   else {                              // node lazy load
                  *                     var id = node.attr("id") ;  // get the node id, will be "n1" 
                  *                                                 // or "n2", in this example.  
                  *                     fn( acquired node json for the expanded node ) ;
                  *                   }
                  *                 }
                  *         }
                  *}
                  * </code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                json_data  : null,

                //  Html Data

                html_data  : null,

                //  Themes

                /**
                  * Specifies whether node icons are to be displayed.  Specify <span class="code-caption">true</span>
                  * to display icons, or <span class="code-caption">false </span> to suppress node icons.
                  * @type {boolean}
                  * @default <code class="prettyprint">true</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                icons : true,

                //dots" : false,       // not exposed in V1


                /**
                  * <span class="code-caption">'Types'</span> allow nodes to be classified and their appearance
                  * and behavior modified.</br></br>
                  * Typical uses are to define a specific icon for a particular node, or to inhibit certain
                  * operations on a particular type of folder (e.g. the root node cannot be deleted or moved).
                  * <p>
                  * A node <span class="code-caption">type</span> has the following properties:
                  * <ul>
                  *   <li><span class="code-caption">"image"</span> -  specifies the location of the icon to be used (optional)</br></br></li>
                  *   <li><span class="code-caption">"position"</span> - position of sprite in the image in the format 
                  *        <span class="code-caption">"left top"</span>, e.g. "-36px -16px".</br>
                  *        Optional - omit if icon is not contained within a multi-sprite image.</br></br></li>
                  *   <li><span class="code-caption">method name</span> - specify a function or a
                  *         boolean. Optional.</br>  Any node operation method (that
                  *         is, takes a node as its first argument) can be redefined.  e.g. <span class="code-caption">select</span>,
                  *         <span class="code-caption">expand</span>, <span class="code-caption">collapse</span>, etc. 
                  *         Alternatively, the method can be defined as <span class="code-caption">true</span> or 
                  *         <span class="code-caption">false</span> to permit or inhibit the operation, or a
                  *         function that returns a boolean value. The default value
                  *         if omitted is <span class="code-caption">true</span> (i.e. the operation is allowed).</li>
                  * </ul>
                  * In the following example, 3 node types have been defined: <span class="code-caption">"myroot"</span>,
                  * <span class="code-caption">"myfolder"</span>, and <span class="code-caption">"myleaf"</span>.
                  * Any node that does not have one of these types defaults its behavior to the default type
                  * (whose properties can also be redefined).  The default <span class="code-caption">"default"</span>
                  * node type has no restrictions on the operations that can be performed on the node. In the following
                  * this example a modification to the default type properties have been made.  Also, for the
                  * <span class="code-caption">"myroot"</span> node type, the standard <span class="code-caption">select</span>,
                  * <span class="code-caption">delete</span> and <span class="code-caption">move</span> oprations have
                  * been redefined to be no-ops.
                  * @example <caption>Example 1:  Add custom appearance and node behavior.</caption>
                  * <code>
                  *"types": {
                  *            "myroot" :   {
                  *                            "image"  : baseurl + "/img/root.png",
                  *                            "select" : function() { return false; },
                  *                            "delete" : function() { return false; },
                  *                            "move" :   function() { return false; },
                  *                         },
                  *            "myfolder" : {
                  *                            "image" : baseurl + "/img/folder.png"
                  *                         },
                  *            "myleaf" :   {
                  *                           "image" : "baseurl + "/img/leaf.png"
                  *                         },
                  *            "default" : {   <-- optional redefinition of the default behavior
                  *                           "image" : "baseurl + "/img/leaf.png",
                  *                           "delete" : function() { return false; }
                  *                        }
                  *
                  *          }
                  *}
                  *</code>
                  *
                  *<p>
                  * User-defined types are specified as an attribute of the node.  The default node
                  * type attribute is <span class="code-caption">"type"</span>, but this could be changed
                  * if desired using the <span class="code-caption">"attr"</span> property. Thus, for
                  * the node types in example 1 above, the node type attribute values in the node
                  * definitions could be set as in the example 2:
                  * @example <caption>Example 2:  Using node types in the tree JSON.</caption>
                  * <code>
                  *[
                  *   {                                    
                  *     "title": "Root",
                  *     "attr": {
                  *               "id": "root",                       
                  *               "type": "myroot"                      <----- node type 
                  *             },
                  *     "children": [
                  *                   {
                  *                     "title": "Home",
                  *                     "attr": {"id": "home",
                  *                              "type": "myleaf"}       <----- node type
                  *                   },
                  *                   { 
                  *                     "title": "News",
                  *                     "attr": {
                  *                               "id": "news",
                  *                               "type": "myleaf"       <----- node type
                  *                             }
                  *                   },
                  *                   { 
                  *                     "title": "Blogs",
                  *                     "attr": {
                  *                               "id": "blogs",
                  *                               "type": "myfolder"     <----- node type
                  *                             },
                  *                     "children": [ {
                  *                                     "title": "Today",
                  *                                     "attr": {
                  *                                               "id": "today",
                  *                                               "type": "myleaf"
                  *                                             }
                  *                                   },
                  *                                   {                  <----- default node type
                  *                                     "title": "Yesterday",
                  *                                     "attr": {"id": "yesterday"}
                  *                                   }
                  *                                 ]
                  *                   }
                  *                 ] 
                  *  }
                  *]
                  *</code>
                  * As described above, the node type attribute used on the corresponding tree &lt;li&gt; element
                  * defaults to <span class="code-caption">"type"</span>, but this can be redefined using the
                  * <span class="code-caption"> attr</span> as in the following example:
                  * @example <caption>Example 2:  Using node types in the tree JSON.</caption>
                  * <code>
                  *"types": {
                  *           "attr" : "mytype",    <---- node element type attribute is now "mytype"
                  *           "types": {
                  *                      "myroot" : {
                  *                                   "image" : . . .
                  *                                    . . .
                  *                                 }
                  *         }
                  *</code>
                  * @type {Object | null}
                  * @default <code class="prettyprint">true</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                types: null,


                //---------------------------//
                //   Option Event callbacks  //
                //---------------------------//

				/**
				  * Triggered prior to an event.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {string} ui.func the event causing this <code class="prettyprint">before</code> event to be triggered.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">before</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "before": function(event, ui)  {
				  *                                       console.log("Before event " + ui.func);
				  *               }
				  * });
			      *
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojbefore</code> event:</caption>
				  * $( ".selector" ).on( "ojbefore", function( event, ui ) {
				  *                                       console.log("Before event " + ui.func);
				  *                                  });
				  */
				before : null,

				/**
				  * Triggered when a tree node is collapsed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been collapsed
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">collapse</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "collapse": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapse</code> event:</caption>
				  * $( ".selector" ).on( "ojcollapse", function(event, ui) {. . .}
				  *                    );
				  */
				collapse : null,

				/**
				  * Triggered when a tree node has been created and added to the tree.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been created
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">create</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "create": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
				  * $( ".selector" ).on( "ojcreate", function(event, ui) {. . .}
				  *                    );
				  */
				create : null,

				/**
				  * Triggered when all nodes of a parent node, or the complete tree, have been collapsed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that was collapsed, or -1 if the complete tree is collapsed.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">collapseAll</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "collapseAll": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapseall</code> event:</caption>
				  * $( ".selector" ).on( "ojcollapseall", function( event, ui ) {. . .} );
				  */
				collapseAll : null,

				/**
				  * Triggered when a tree node has been cut from the tree via the context menu.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that was cut
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">cut</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "cut": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojcut</code> event:</caption>
				  * $( ".selector" ).on( "ojcut", function( event, ui ) {. . .} );
				  */
				cut : null,

				/**
				  * Triggered when a tree node is no longer hovered over.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that is no longer hovered over
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">dehover</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "dehover": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojdehover</code> event:</caption>
				  * $( ".selector" ).on( "ojdehover", function( event, ui ) {. . .} );
				  */
				dehover : null,

				/**
				  * Triggered when a tree node has been deleted.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been deleted.
				  * @property {Object} ui.parent the parent of the node that was deleted.
				  * @property {Object} ui.prev the previous sibling, or if ui.item is the first child of
				  *                    its parent, the parent node.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">delete</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "delete": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojdelete</code> event:</caption>
				  * $( ".selector" ).on( "ojdelete", function( event, ui ) {. . .} );
				  */
				"delete" : null,

				/**
				  * Triggered when a tree node is deselected.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has become de-selected.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">deselect</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "deselect": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojdeselect</code> event:</caption>
				  * $( ".selector" ).on( "ojdeselect", function( event, ui ) {. . .} );
				  */
				deselect : null,

				/**
				  * Triggered when all nodes of a parent node, or the complete tree, have been de-selected.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has become de-selected, or -1 if all selected nodes in the tree are deselected. 
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">deselectAll</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "deselectAll": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojdeselectall</code> event:</caption>
				  * $( ".selector" ).on( "ojdeselectall", function( event, ui ) {. . .} );
				  */
				deselectAll : null,

				/**
				  * Triggered when a tree node is destroyed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">destroy</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "destroy": function( event, ui ) {}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojdestroy</code> event:</caption>
				  * $( ".selector" ).on( "ojdestroy", function( event, ui ) {} );
				  */
				destroy : null,

				/**
				  * Triggered when a tree node is expanded.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been expanded
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">expand</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "expand": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
				  * $( ".selector" ).on( "ojexpand", function( event, ui ) {. . .} );
				  */
				expand : null,

				/**
				  * Triggered when all nodes of a parent node, or the complete tree, have been expanded.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that was completely expanded, -1 is the complete tree is expanded.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">expandAll</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "expandAll": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpandall</code> event:</caption>
				  * $( ".selector" ).on( "ojexpandall", function( event, ui ) {. . .} );
				  */
				expandAll : null,

				/**
				  * Triggered when a tree node is hovered over.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that is hovered over
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">hover</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "hover": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojhover</code> event:</caption>
				  * $( ".selector" ).on( "ojhover", function( event, ui ) {. . .} );
				  */
				hover : null,

				/**
				  * Triggered when a tree has been loaded and the node data has been applied.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">loaded</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "loaded": function( event, ui ) {}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojloaded</code> event:</caption>
				  * $( ".selector" ).on( "ojloaded", function( event, ui ) {} );
				  */
				loaded : null,

				/**
				  * Triggered when a tree node has been moved within the tree.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that was moved
				  * @property {string} ui.position the moved node's new position relative to the reference node.
				  *                    Can be "before", "after", or "inside".
				  * @property {Object} ui.reference the reference node that ui.position refers to.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">move</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "move": function(event, ui) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojmove</code> event:</caption>
				  * $( ".selector" ).on( "ojmove", function(event, ui) {. . .} );
				  */
				move : null,

				/**
				  * Triggered when a tree node has been pasted into the tree via the context menu.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that was pasted
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">paste</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "paste": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojpaste</code> event:</caption>
				  * $( ".selector" ).on( "ojpaste", function( event, ui ) {. . .} );
				  */
				paste : null,

				/**
				  * Triggered when a tree node, or the complete tree, has been refreshed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been refreshed, or -1 if the whole tree has been refreshed.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">refresh</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "refresh": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojrefresh</code> event:</caption>
				  * $( ".selector" ).on( "ojrefresh", function( event, ui ) {. . .} );
				  */
				refresh : null,

				/**
				  * Triggered when a tree node has been renamed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been renamed
				  * @property {string} ui.title the new node text title.
				  * @property {string} ui.prevTitle the node title prior to the rename.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">rename</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "rename": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojrename</code> event:</caption>
				  * $( ".selector" ).on( "ojrename", function( event, ui ) {. . .} );
				  */
				rename : null,

				/**
				  * Triggered when a tree node is selected.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been selected.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">select</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "select": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
				  * $( ".selector" ).on( "ojselect", function( event, ui ) {. . .} );
				  */
				select : null

     },   // end options


     /*---------------*/
     /* Public API's  */
     /*---------------*/

     /** Collapses an expanded node, so that its children are not visible.  Triggers a "collapse" event.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, or a selector
       *                        pointing to the element to be collapsed.
       * @param {boolean} skipAnim - Set to true to suppress node collapse animation (assuming
       *                        option property "animDuration" is defined or defaulted). Default is false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     collapse : function(node, skipAnim)
     {
        node = this._getNode(node);
        var s = skipAnim || this.options["animDuration"],
            t = this;

        if (!node.length || !node.hasClass("oj-tree-open"))  {
          return false;
        }
        if (s)  {
          node.children("ul").attr("style","display:block !important");
        }
        node.removeClass("oj-tree-open").addClass("oj-tree-closed").attr("aria-expanded", "false");
        if (s) {
          node.children("ul").stop(true, true).slideUp(s, function ()
                                                         {
                                                           this.style.display = "";
//                                                          this["style"]["display"] = "";
                                                           t["after_close"](node);
                                                          }); }
        else   {
          t["after_close"](node);
        }
        this._emitEvent({ "obj" : node }, "collapse");
     },


     /** Collapses a node and all its descendants.  Triggers a "collapseall" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, or a
       *                       selector pointing to the element whose descendants are to be collapsed. 
       *                       If omitted , or set to -1, all nodes in the tree are collapsed.
       * @param {boolean} anim - Set to true (or omit) if all nodes are to collapsed with animation (assuming
       *                        option property "animDuration" is defined or defaulted). Default is true.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
     */
     collapseAll : function(node, anim)
     {
        var origTarg = node? node : -1 ;
        var _this = this;

//      if ($.type(node) == "boolean") {            // Handle if node is omitted and just
//        anim = node ;                             // anim is specified
//        node = -1 ;
//      }

        node = node ? this._getNode(node) : this._$container;
        if (!node || node === -1)  { 
          node = this._$container_ul;
        }
        else {
          origTarg = node ;
        }

        node.find("li.oj-tree-open").addBack().each(function ()
                                                    {
                                                      _this["collapse"](this, !anim);
                                                    });
        this._emitEvent({ "obj" : origTarg }, "collapseall");
     },


     /** Expands a collapsed parent node, so that its children are visible. Triggers an "expand" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element to be expanded.
       * @param {boolean} skipAnim - Set to true to suppress node expansion animation (assuming
       *                        option property "animDuration" is defined or defaulted). Default is false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     expand : function(node, skipAnim)
     {
        this._expand(node, false, skipAnim) ;
     },

     /** May be used as a getter of setter.  If no argument is supplied, the method returns an
       * array of nodes currently expanded. (An empty array implies that no nodes are expanded.)  
       * If an array of nodes is supplied as an argument, the specified nodes are expanded.
       * @param {Array=} nodes - Omit to use as a getter, or specify an array of nodes to be
       *                 expanded.  Nodes may be defined as elements, jQuery wrapped nodes, or
       *                 selectors pointing to the elements to be expanded.
       * @param {boolean=} skipAnim - Set to true to suppress node expansion animation (assuming
       *                        option property "animDuration" is defined or defaulted). Default is false.
       * @return {Array | null} An array of jQuery wrapped nodes if used as a getter, else null
       *                        if used as a setter.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     expanded : function(nodes, skipAnim)
     {
        var exlr,
            exlen,
            _this = this;

        if (nodes && $.type(nodes) === "array")  {    // setter
          exlen = nodes.length ;
          $.each(nodes, function (i, val) {
              _this._expand(val, false, skipAnim); 
            });
          return null ;
        }
        else  {     // getter

          nodes = this._$container_ul.find("li.oj-tree-open");
          exlen  = nodes.length ;
          exlr   = [] ;
          for (var n = 0; n < exlen; n++)  {
            exlr.push($(nodes[n]));
          };
          return exlr ;
        }
     },


     /** Expands a node and all its descendants.  Triggers an "expandall" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node,
       *                        or a selector pointing to the element whose descendants are to be expanded.
       *                        If omitted , or set to -1, all nodes in the tree are expanded.
       * @param {boolean} anim - Set to true (or omit) if all nodes are to expanded with animation (assuming
       *                        option property "animDuration" is greater than zero). Default is true.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     expandAll : function(node, anim)
     {
        this._expandAll(node, anim) ;
     },

     /** Expands a node if collapsed, or collapses a node if expanded. Triggers an "expand" or "collapse" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element to be expanded/collapsed.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     toggleExpand : function (node)
     {
        node = this._getNode(node);
        if (node.hasClass("oj-tree-closed"))  {
           return this["expand"](node);
        }
        if (node.hasClass("oj-tree-open"))  {
          return this["collapse"](node);
        }
     },


     /** Deselects a node. Triggers a "deselect" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element to be deselected.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     deselect : function (node)
     {
       node = this._getNode(node);
       if (!node.length)  {
         return false;
       }

       if (this["isSelected"](node))  {
          node.children("a").removeClass("oj-tree-clicked");
          node.removeAttr("aria-selected");

          this._data.ui.selected = this._data.ui.selected.not(node);

//Wed     if(this.data.ui.last_selected.get(0) === obj.get(0)) { this.data.ui.last_selected = this.data.ui.selected.eq(0); }

          if (this._data.ui.last_selected.get(0) === node.get(0))  {
             this._data.ui.last_selected = this._data.ui.selected.eq(0);
          }
          this._emitEvent({ "obj" : node }, "deselect");
       }

     },


     /** Deselects all selected nodes. If optional argument "context" is specified, only the selected
       * nodes within that context will be selected. Triggers a "deselectall" event.
       * @param {HTMLElement | Object | string=} context - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to an element within the tree.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     deselectAll : function(context)
     {
         var ret = context ? $(context).find("a.oj-tree-clicked").parent() : this._$container.find("a.oj-tree-clicked").parent();

         ret.children("a.oj-tree-clicked").removeClass("oj-tree-clicked");
         ret.removeAttr("aria-selected");
         this._data.ui.selected = $([]);
         this._data.ui.last_selected = false;

         this._emitEvent({ "obj" : ret }, "deselectall");
     },

     /** Selects a node. Triggers a "select" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                       or a selector pointing to the element to be deselected.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     select : function (node)
     {
        this._select(node) ;
     },



     /** May be used as a getter of setter.  If no argument is supplied, the method returns a 
       * jqQery wrapped list of nodes currently selected. If an array or list (that is the argument
       * has a "length" property) of nodes is supplied as an argument, the specified nodes are selected.
       *
       * @param {Array | Object} nodes - Omit to use as a getter, or specify an array or list of nodes to be
       *                 expanded.  Nodes may be defined as elements, jQuery wrapped nodes, or
       *                 selectors pointing to the elements to be expanded.
       * @return {Array} An array of nodes if used as a getter.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     selected : function(nodes)
     {
        if (nodes === undefined)  {
          return this._getSelected() ;
        }
        else  if (nodes.length !== undefined)     // setter
        {
          var _this = this;
          $.each(nodes, function (i, val) {
            if (val)  {
              _this._select(val, true);
            }
          });
        }
        return null ;
     },


     /** Selects a node if deselected, or deselects a node if selected. Triggers a "select" or "deselect" event.
       * 
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element to be expanded/collapsed.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     toggleSelect : function (node)
     {
        node = this._getNode(node) ;
        if (!node.length)  {
           return false;
        }

        if (this["isSelected"](node))  {
           this["deselect"](node);
        }
        else  {
          this._select(node, true);
        }
        
     },

     /** Returns true if the node is collapsed, else false.
       *
	   * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
	   *                        or a selector pointing to the element.
       * @return {boolean} true if the node is collapsed, else false.
       * @expose 
       * @public
       * @instance
 	   * @memberof! oj.ojTree 
       */
     isCollapsed : function(node)
     {
       node = this._getNode(node);
       return node && node !== -1 && node.hasClass("oj-tree-closed");
     },

     /** Returns true if the node is expanded, else false.
       *
	   * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
	   *                        or a selector pointing to the element.
       * @return {boolean} true if the node is expanded,  else false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     isExpanded : function(node)
     {
       node = this._getNode(node);
       return node && node !== -1 && node.hasClass("oj-tree-open");
     },

     /** Returns true if the node is a leaf node (that is, it has no children), else false.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       * @return {boolean} true if the node is a leaf node, else false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     isLeaf : function(node)
     {
       node = this._getNode(node) ;
       return node && node !== -1 && node.hasClass("oj-tree-leaf");
       
     },

     /** Returns true if the node is selected, else false.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       * @return {boolean} true if the node is selected,  else false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     isSelected : function(node)
     {
       return this._data.ui.selected.index(this._getNode(node)) >= 0;
     },


     /** Creates a new node and adds it to the tree.  Triggers a createnode" event.
       *
       * @param {HTMLElement | Object | string} refnode - specifies the node that the new node will be
       *                       placed in, or next to, depending on the "position" argument. Can be a
       *                       DOM element, a jQuery wrapped node, or a selector pointing to the element.
       * @param {string | number} position - specifies the position of the newly created node in relation
       *                       to the "refnode" specified by the first argument.  Can be a string : "before",
       *                       "after", "inside", "first",, "last", or a zero-based index to position the
       *                       new node at a specific point among the childfren of "refnode".
       * @param {Object} data - An object literal containing data to create the new node.  The object properties
       *                       are:<br>
       *                       "attr" - an object of attribute name/value pairs (at least an "id" property should
       *                       be defined).<br>
       *                       "title" - a string used for the visible text of the node.<br><br>
       * <code>
       * var new Node = { "title" : "My Title", "attr" : { "id": "myid" } };
       * </code>
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     create : function(refnode, position, data)
     {
        return this._create_node(refnode, position, data);
     },

     /**  Deletes a node. Triggers a "delete" event.
       *
       *  @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       *  @return {Object | boolean}   The jQuery wrapped node used as an argument.
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       *
       */ 
     "delete" : function(node)
     {
       node = this._getNode(node);
       if (!node.length) {
         return false;
       }

       this.__rollback();
       var p    = this._getParent(node),
           prev = $([]),
           t = this,
           sib = this._getPrev(node) ;

       node.each(function () {
           prev = prev.add(t._getPrev(this));
       });

       node = node.detach();

       if (p !== -1 && p.find("> ul > li").length === 0)  {
         p.removeClass("oj-tree-open oj-tree-closed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
       }

       this._clean_node(p);
       this._emitEvent({ "obj" : node, "prev" : sib, "parent" : p }, "delete");
       return node ;
     },


     /** Returns the title of the specified node
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                       or a selector pointing to the element.
       * @return {string | boolean} The text string title of the node.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     getText : function(node)
     {
       node = this._getNode(node) ;
       if (!node.length) {
          return false;
       }

       var s = this.options["html_titles"];
       node = node.children("a:eq(0)");

       if (s)  {
          node = node.clone();
          node.children("INS").remove();
          return node.html();
       }
       else  {
          node = node.contents().filter(function()
                                {
                                  return this.nodeType == 3;
                                })[0];
          return node.nodeValue;
       }

     },

     /** Renames a node title.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       * @param {string} text - The new text string.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     rename : function(node, text)
     {
       this._rename_node(node, text) ;
     },

     /** Sets the specifed node as the current node of interest (e.g. a mouse-over).  Triggers a "hover" event.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     hover : function(node)
     {
       node = this._getNode(node);
       if (! node.length)  {
         return false;
       }
       //if(this.data.ui.hovered && node.get(0) === this.data.ui.hovered.get(0)) { return; }
       if (! node.hasClass("oj-tree-hovered"))  {
          this["dehover"]();
       }

       this._data.ui.hovered = node.children("a").addClass("oj-tree-hovered").parent();
       this._$container_ul.attr("aria-activedescendant", this._data.ui.hovered.attr("id")) ;
       this._fix_scroll(node);
       this._emitEvent({ "obj" : node }, "hover");
     },


     /** Removes the "hover" state of the currently hovered node.  Triggers a "dehover" event.
       *
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     dehover : function()
     {
       var obj = this._data.ui.hovered,
            p;
       if (!obj || !obj.length) {
         return false;
       }

       p = obj.children("a").removeClass("oj-tree-hovered").parent();
       this._$container_ul.removeAttr("aria-activedescendant") ;

       if(this._data.ui.hovered[0] === p[0]) { 
           this._data.ui.hovered = null;
       }
       this._emitEvent({ "obj" : obj }, "dehover");
     },

     /** Returns the full path to a node, either as an array of ID's or node names, depending on
       * the value of the "idmode" argument.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                       or a selector pointing to the element.
       * @param {boolean=} idMode - Set to true (or omit) to return ID's from the node attribute
       *                       "id"), or false to return the names (i.e. text titles).  Default is true.
       *
       * @return {Array | boolean} An array of node ID's or names.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     getPath : function(node, idMode)
     {
        var p     = [],
            _this = this;

        node = this._getNode(node);
        if (node === -1 || !node || !node.length)  {
          return false;
        }

        node.parentsUntil(".oj-tree", "li").each(function () {
               p.push( idMode ? this.id : _this["getText"](this) );
        });

        p.reverse();
        p.push( idMode ? node.attr("id") : this["getText"](node) );

        return p;
      },

     /** Returns the jQuery wrapped wrapped top outer &lt;ul&gt; element of the tree.
       *
       * @return {Object} The jQuery wrapped &lt;ul&gt; element of the tree.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     getRoot : function()
     {
        return this._$container.children("ul:eq(0)");    // return the top <ul>
     },

     /**  Refreshes the tree or a node.
       *
       *  @param {HTMLElement | Object | string | number=} node - If -1 is specified (or the argument is omitted),
       *                   the whole tree is refreshed.  Alternatively, a specific node to be refreshed can be
       *                   supplied. Can be a DOM element, a jQuery wrapped node, or a selector pointing to the element.
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       */
     refresh : function(node)
     {
       this._super() ;
       this._refresh(node) ;
     },


     /**  Moves a tree node.
       *
       *  @param {HTMLElement | Object | string | number=} node  The node to be moved. Can be a DOM element,
       *            a jQuery wrapped node, or a selector pointing to the element.
       *  @param {HTMLElement | Object | string | number=} refnode  The reference node for the move. Can be
       *            a DOM element, a jQuery wrapped node, or a selector pointing to the element. If -1 is 
       *            specified, the container element is used.
       *  @param {string | number=} position  The position of the moved node relative to the reference node refnode.
       *            Can be "before", "after", "inside", "first", "last", or the zero-based index to position the node at a
       *            specific point among the reference node's current children.
       *  @param {boolean=} iscopy  Specify false for a move operation, or true for a copy.
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       */
     move : function(node, refnode, position, iscopy)
     {
        this._move_node(node, refnode, position, iscopy);
     },


     /**
       *  Remove all traces of ojTree in the DOM (only the ones set using oj-tree*)
       *  and cleans out all events.
       *
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       */
     destroy : function ()
     {
        var  n = this._getIndex();
        
        this._$container
            .unbind(".oj-tree")
            .undelegate(".oj-tree")
            .removeData("oj-tree-instance-id")
            .find("[class^='oj-tree']")
            .addBack()
            .attr("class", function ()
                    {
                      return this["className"].replace(/oj-tree[^ ]*|$/ig,'');
                    });
        $(document)
            .unbind(".oj-tree-" + n)
            .undelegate(".oj-tree-" + n);

        this._super() ;
     },



     //-----------------------------------------//
     //     Internal API's and data             //
     //-----------------------------------------//


     /**
       *   Called the first time the widget is called on an element.
       *  @private
       */
     _create: function ()
     {
        this._super() ;

        this._bCreate       = true ;                            // in _create()
        this._elemId        = "#" + this.element.attr("id") ;   // tree element id
        this._$container    = $(this._elemId) ;                 // the containing <div>
        this._$container_ul = null ;                            // the containing <ul>
        this._data          = {} ;                              // working data
        this._index         = this._newIndex() ;
        this._isRtl         = this._GetReadingDirection() === "rtl";
        this._initWidget() ;
        this._bCreate       = false ;
     },


     /**
       *  Handle an option changes.
       *  Called by $(selector).ojtree("options", "prop", valua)
       *  @private
       */
     _setOption: function (key, newval)
     {
        if (! this._bCreate) {      // if in _create(), option already in this.options
          var _this = this ;
          var prev  = this.options[key] ;
          var val ;

          if (key === "selectionMode") {
            if (newval === "none") {
              val = 0 ;
            }
            else if (newval === "single") {
              val = 1;
            }
            else if (newval === "multiple") {
              val = -1 ;
            }
            else {
              val = undefined ;
            }
            if (val != _this._data.core.selectMode) {
              _this._data.core.selectMode = val ;
            }
          }
          else if (key === "icons") {
             if ($.type(newval) == "boolean") {
               if (newval != _this._data.themes.icons) {
                 _this._data.themes.icons = newval ;
                 _this[newval? "show_icons" : "hide_icons"]() ;
               }
             }
          }                                // end "core/ui" options
          else if (key === "contextMenu") {
            if (! this._data.menu.changing) {         // if menu is being reset in applyMenu(), ignore
              if (newval["menu"] != this.options["contextMenu"]["menu"]) {  
                this._clearMenu() ;
                this._initMenu(newval) ;
              }
            }
          }                                // end "contextMenu"
        }

        this._super(key, newval);

     },


     /**
       *  Returns a jQuery wrapped tree node.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.  If -1 is used
       *  (indicating the whole tree), -1 is returned.
       *  @private
       */
     _getNodeCore : function(obj) 
     {
         var $obj = $(obj, this._$container); 

         if ($obj.is(".oj-tree") || obj == -1)  {
            return -1;
         } 
         $obj = $obj.closest("li", this._$container); 
         return $obj.length ? $obj : false; 
     },

     /**
       *  Returns a jQuery wrapped tree node.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.  If -1 is used
       *  (indicating the whole tree), -1 is returned.
       *  @private
       */
     _getNode :  function (obj, allow_multiple)
     {
       if (typeof obj === "undefined" || obj === null) {
         return allow_multiple ? this._data.ui.selected : this._data.ui.last_selected;
       }

       var $obj = $(obj, this._getContainer()); 

       if ($obj.is(".oj-tree") || obj == -1) {
          return -1;
       } 

       $obj = $obj.closest("li", this._getContainer()); 
       return $obj.length ? $obj : false; 
     },

     /**
       *  Returns the node previous to the supplied obj.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.  If -1 is used
       *  (indicating the whole tree), -1 is returned.  If arg strict is true, only immediate
       *  siblings are considered, else if the obj has no previous siblings (i.e is the first
       *  child of its parent), the parent is returned.
       *  @private
       */
     _getPrev  : function (obj, strict)
     {
        obj = this._getNode(obj);
        if (obj === -1) {
          return this._$container.find("> ul > li:last-child");
        }
        if (!obj.length) {
          return false;
        }
        if (strict) {
         return (obj.prevAll("li").length > 0) ? obj.prevAll("li:eq(0)") : false;
        }

        if (obj.prev("li").length) {
            obj = obj.prev("li").eq(0);
            while (obj.hasClass("oj-tree-open")) {
               obj = obj.children("ul:eq(0)").children("li:last");
            }
           return obj;
        }
        else {
           var o = obj.parentsUntil(".oj-tree","li:eq(0)");
           return o.length ? o : false;
        }
     },

     /**  Returns the node after the supplied obj.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.  If -1 is used
       *  (indicating the whole tree), -1 is returned.  If arg strict is true, only immediate
       *  siblings are considered, else if the obj has no more siblings (i.e is the last
       *  child of its parent), the parent's next sibling is returned.
       *  @private
       */
     _getNext  : function (obj, strict)
     {
        obj = this._getNode(obj);
        if (obj === -1)  {
          return this._$container.find("> ul > li:first-child");
        }
        if (!obj.length) {
           return false;
         }
        if (strict)  {
           return (obj.nextAll("li").size() > 0) ? obj.nextAll("li:eq(0)") : false;
        }
        
        if (obj.hasClass("oj-tree-open"))  {
          return obj.find("li:eq(0)");
        }
        else if(obj.nextAll("li").size() > 0)  {
          return obj.nextAll("li:eq(0)");
        }
        else  {
           return obj.parentsUntil(".oj-tree","li").next("li").eq(0);
        }
     },


     /**
       *  Returns the parent node of the supplied obj.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.
       *  child of its parent), the parent is returned.
       *  @private
       */
     _getParent  : function (obj)
     {
        obj = this._getNode(obj);
        if (obj == -1 || !obj.length)  {
          return false;
        }
        var o = obj.parentsUntil(".oj-tree", "li:eq(0)");
        return o.length ? o : -1;
     },

     /**
       *  Returns the child nodes of the supplied obj, or false if no children or failure.
       *  obj can be a selector pointing to an element within the tree, a DOM node, or a
       *  jQuery wrapped node.  If -1 can be used to indicate the whole tree.
       *  @private
       */
     _getChildren   : function (obj)
     {
        obj = this._getNode(obj);
        if (obj === -1) {
          return this._$container.children("ul:eq(0)").children("li");
        }
        if (!obj.length) {
          return false;
        }
        return obj.children("ul:eq(0)").children("li");
     },

     /**
       *  Returns the widget instance for the supplied node.  Not currently used.  TDO
       *  @private
       */
     _reference : function(node)
     {
        var div  = node.parents("div").eq(0) ;

        return this ;
     },


     /**
       *  Add default values to options, unless already defined in options.
       *  @private
       */
     _applyDefaults :  function(to, from)
     {
        if (to != undefined && from != undefined)  {
          $.each(from, function(prop, val) {
                                             if (to[prop] == undefined) {
                                               to[prop] = val ;
                                             }  
                                            });
        }
     },

     /**
       *  Creates a "move" object containing details of the impending move, and
       *  stores it in this._data.core.prepared_move
       *
       *  The object contains :
       *     .o   the node being moved
       *     .r   the reference node
       *     .p   the destination position relative to the reference node
       *     .np  the new parent
       *     .oc  the original node if there was a copy
       *     .cy  boolean indicating if the move was a copy
       *     .op  the former parent
       *     .or  the node that was previously in the position of the moved node
       *     .ot  the original tree instance
       *     .rt  the reference tree instance
       *     .cr  same as .np but if a root node is created this is -1
       *
       *   @private
       */
     _prepare_move :  function (o, r, pos, cb, is_cb)
     {
       var p = {};
             
       p.ot =  this;
       p.o  = p.ot._getNode(o);
       p.r  = r === - 1 ? -1 : this._getNode(r);
       p.p = (typeof pos === "undefined" || pos === false) ? "last" : pos; // TODO: move to a setting

       if (!is_cb && this._data.core.prepared_move.o && this._data.core.prepared_move.o[0] === p.o[0] 
                                                     && this._data.core.prepared_move.r[0] === p.r[0]
                                                     && this._data.core.prepared_move.p    === p.p)  {
          this._emitEvent(this._data.core.prepared_move);
          if (cb)  {
            cb.call(this, this._data.core.prepared_move);
          }
          return;
       }

       p.ot = this;
       p.rt = this; // r === -1 ? p.ot : $.jstree._reference(p.r) || this
 
       if (p.r === -1 || !p.r)  {
         p.cr = -1;

         switch(p.p)
         {
            case "first":
            case "before":
            case "inside":
                           p.cp = 0; 
                           break;
            case "after":
            case "last":
                           p.cp = p.rt._$container.find(" > ul > li").length; 
                           break;
            default:
                           p.cp = p.p;
                           break;
         }
       }
       else {
         if (!/^(before|after)$/.test(p.p) && !this._is_loaded(p.r)) {
           return this._load_node(p.r, function ()
                                                    {
                                                      this._prepare_move(o, r, pos, cb, true);
                                                    });
         }
          switch(p.p)
          {
             case "before":  p.cp = p.r.index();
                             p.cr = p.rt._getParent(p.r);
                             break;
             case "after":   p.cp = p.r.index() + 1;
                             p.cr = p.rt._getParent(p.r);
                             break;
             case "inside":
             case "first":
                             p.cp = 0;
                             p.cr = p.r;
                             break;
             case "last":
                             p.cp = p.r.find(" > ul > li").length; 
                             p.cr = p.r;
                             break;
             default: 
                             p.cp = p.p;
                             p.cr = p.r;
                             break;
          }
       }

       p.np  = p.cr == -1 ? p.rt._getContainer() : p.cr;
       p.op  = p.ot._getParent(p.o);
       p.cop = p.o.index();

       if (p.op === -1)  {
         p.op = p.ot ? p.ot._$container : this._$container;
       }
       if (!/^(before|after)$/.test(p.p) && p.op && p.np && p.op[0] === p.np[0] && p.o.index() < p.cp)
       {
         p.cp++;
       }

       //if(p.p === "before" && p.op && p.np && p.op[0] === p.np[0] && p.o.index() < p.cp) { p.cp--; }
       p.or = p.np.find(" > ul > li:nth-child(" + (p.cp + 1) + ")");
       this._data.core.prepared_move = p;
       this._emitEvent(this._data.core.prepared_move, "prepare_move");
       if (cb) {
         cb.call(this, this._data.core.prepared_move, "prepare_move");
       }
     },


     "check_move" : function ()
     {
       var obj  = this._data.core.prepared_move,
           ret  = true,
           r ;

       r = obj.r === -1 ? this._$container() : obj.r;

       if (!obj || !obj.o || obj.or[0] === obj.o[0]) {
         return false;
       }

       if (!obj.cy) {
         if (obj.op && obj.np && obj.op[0] === obj.np[0] && obj.cp - 1 === obj.o.index())  { 
           return false;
         }
         obj.o.each(function ()
                    { 
                      if (r.parentsUntil(".oj-tree", "li").addBack().index(this) !== -1)  {
                        ret = false; return false;
                      }
                    });
       }

       return ret;
     },

     /**
       *  Changes the text title of a node
       *  @private
       */
     _rename_node : function(node, text)
     {
       var  t ;

       node = this._getNode(node);
       this.__rollback();
       t  = this["getText"](node) ;

       if (node && node.length && this._set_text.apply(this, Array.prototype.slice.call(arguments)))
                    {
                      this._emitEvent({ "obj" : node, "title" : text, "prevTitle" : t}, "rename");
                    }
     },

     /**
       *   Moves a node within the tree
       *   @private
       */ 
     _move_node : function (obj, ref, position, is_copy, is_prepared, skip_check)
     {
        if (!is_prepared)  { 
          return this._prepare_move(obj, ref, position, function (p)
                                                        {
                                                          this._move_node(p, false, false,
                                                                          is_copy, true, skip_check);
                                                        });
        }
        if (is_copy) { 
          this._data.core.prepared_move.cy = true;
        }
        if (!skip_check && !this["check_move"]())  {
          return false;
        }

        this.__rollback();
        var o = false;

        if (is_copy)  {
           o = obj.o.clone(true);
           o.find("*[id]").addBack().each(function () {
                                             if (this.id) {
                                               this.id = "copy_" + this.id;
                                             }
                                         });
        }
        else   {
          o = obj.o;
        }

        if (obj.or.length)  {
          obj.or.before(o);
        }
        else   { 
           if (!obj.np.children("ul").length)  {
             $("<ul />").appendTo(obj.np);
           }
           obj.np.children("ul:eq(0)").append(o); 
        }

        try { 
               obj.ot._clean_node(obj.op);
               obj.rt._clean_node(obj.np);
               if (!obj.op.find("> ul > li").length)  {
                obj.op.removeClass("oj-tree-open oj-tree-closed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
               }
        } catch (e) { }

        if (is_copy)  { 
           this._data.core.prepared_move.cy = true;
           this._data.core.prepared_move.oc = o; 
        }
        var d = $.extend(true, {}, this._data.core.prepared_move) ;
        d["obj"] = obj.o ;  
//Fri28 this._emitEvent(this._data.core.prepared_move, "move");
        this._emitEvent(d, "move");
        return this._data.core.prepared_move;
     },


      /**
        *  Returns the "move" object created by a previous _prepare_move()
        *
        *  The object contains :
        *     .o   the node being moved
        *     .r   the reference node
        *     .p   the destination position relative to the reference node
        *     .np  the new parent
        *     .oc  the original node if there was a copy
        *     .cy  boolean indicating if the move was a copy
        *     .op  the former parent
        *     .or  the node that was previously in the position of the moved node
        *     .ot  the original tree instance
        *     .rt  the reference tree instance
        *     .cr  same as .np but if a root node is created this is -1
        *
        *  @private
        */
      _getMove  : function ()
      {
         return this._data.crrm.prepared_move;
      },


      _getType : function (node)
      {
         node = this._getNode(node);

         return (!node || !node.length) ? false : node.attr(this.options["types"]["attr"]) || "default";
      },

     /**
       *  @private
       */
      _clean_node  : function (obj)
      {
         obj = obj && obj != -1 ? $(obj) : this._$container_ul;
         obj = obj.is("li") ? obj.find("li").addBack() : obj.find("li");

         obj.removeClass("oj-tree-last")
             .filter("li:last-child").addClass("oj-tree-last").end()
             .filter(":has(li)")
             .not(".oj-tree-open")
             .removeClass("oj-tree-leaf")
             .addClass("oj-tree-closed")
             .attr("aria-expanded", "false");
//JRM        .not(".oj-tree-open").removeClass("oj-tree-leaf").addClass("oj-tree-closed");
         obj.not(".oj-tree-open, .oj-tree-closed").addClass("oj-tree-leaf").children("ul").remove();

         this._emitEvent({ "obj" : obj }, "clean_node");
      },


      /**
        *  Creates a new node
        *  @private
        */
      _create_node :  function (obj, position, js, callback, is_loaded)
      {
         obj = this._getNode(obj);
         if (obj !== -1 && !obj.length) {
           return false;
         }

         position = typeof position === "undefined" ? "last" : position;
         var d = $("<li />"),
             s = this.options,
             tmp;

         if (!is_loaded && !this._is_loaded(obj)) {
           this._load_node(obj, function () 
                               {
                                 this._create_node(obj, position, js, callback, true);
                               });
           return false;
         }
           
         this.__rollback();
           
         if (typeof js === "string") {
            js = { "data" : js };
         }
         if (!js) {
            js = {};
         }
         if (js["attr"])  {
           d.attr(js["attr"]);
         }
         if (js["metadata"]) {
           d.data(js["metadata"]);
         }
         if (js["state"]) {
           d.addClass("oj-tree-" + ((js["state"] === "expanded")? "open" : "closed"));
         }
         if (!js["data"]) {
           js["data"] = (js["title"] !== undefined)? js["title"] :
                                                     this.getTranslatedString("m_newnode");
         }
           
         if (!$.isArray(js["data"]))  {
           tmp = js["data"];
           js["data"] = [];
           js["data"].push(tmp);
         }

         $.each(js["data"], function (i, m) {
             tmp = $("<a />");
             if ($.isFunction(m)) {
                m = m.call(this, js);
             }
             if (typeof m == "string")  {
                tmp.attr('href','#')[ s["html_titles"] ? "html" : "text" ](m);
             }
             else  {
               if (! m["attr"])  {
                  m["attr"] = {};
               }
               if (! m["attr"]["href"])  {
                  m["attr"]["href"] = '#';
               }
               tmp.attr(m["attr"])[ s["html_titles"] ? "html" : "text" ](m["title"]);
               if (m["language"]) {
                 tmp.addClass(m["language"]);
               }
             }
             tmp.prepend("<ins class='oj-tree-icon'>&#160;</ins>");

             if (!m["icon"] && js["icon"]) {
               m["icon"] = js["icon"];
             }
             if (m["icon"]) { 
               if (m["icon"].indexOf("/") === -1)  {
                  tmp.children("ins").addClass(m["icon"]);
               }
               else  {
                  tmp.children("ins").css("background","url('" + m["icon"] + "') center center no-repeat");
               }
             }
             d.append(tmp);
         });

         d.prepend("<ins class='oj-tree-icon'>&#160;</ins>");
         if (obj === -1) {
           obj = this._$container;
           if (position === "before")  {
             position = "first";
           }
           if (position === "after") {
             position = "last";
           }
         }

         switch(position)
         {
           case "before":  obj.before(d);
                           tmp = this._getParent(obj);
                           break;
           case "after" :  obj.after(d);
                           tmp = this._getParent(obj);
                           break;
           case "inside":
           case "first" :  if (!obj.children("ul").length) {
                            obj.append("<ul />");
                           }
                           obj.children("ul").prepend(d);
                           tmp = obj;
                           break;
           case "last":    if (!obj.children("ul").length) {
                             obj.append("<ul />");
                           }
                           obj.children("ul").append(d);
                           tmp = obj;
                           break;
           default:        if (!obj.children("ul").length) {
                             obj.append("<ul />");
                           }
                           if (!position) {
                             position = 0;
                           }
                           tmp = obj.children("ul").children("li").eq(position);
                           if (tmp.length)  {
                             tmp.before(d);
                           }
                           else  {
                             obj.children("ul").append(d);
                           }
                           tmp = obj;
                           break;
         }

         if (tmp === -1 || tmp.get(0) === this._$container.get(0)) {
           tmp = -1;
         }
         this._clean_node(tmp);
         this._emitEvent({ "obj" : d, "parent" : tmp }, "create_node");

         if (callback) {
           callback.call(this, d);
         }

         return d;
      },


      /**
        *  Expands a collapsed node
        *  @private
        */
      _expand   : function (obj, callback, skip_animation)
      {
         obj = this._getNode(obj);
         if (! obj.length) {
           return false;
         }

         if (! obj.hasClass("oj-tree-closed"))  {
           if (callback)  {
             callback.call();
           }
           return false;
         }

         var s = skip_animation || this.options["animDuration"],
             t = this;

         if (! this._is_loaded(obj))  {
           obj.children("a").addClass("oj-tree-loading");
           this._load_node(obj, function () {
                                   t["expand"](obj, callback, skip_animation);
                                }, callback) ;
         }
         else    {
           if (this.options["expandParents"])  {
             obj.parentsUntil(".oj-tree",".oj-tree-closed").each(function ()
                                   {
                                     t["expand"](this, false, true);
                                    });
           }
           if (s)  {
             obj.children("ul").css("display","none");
           }
           obj.removeClass("oj-tree-closed").addClass("oj-tree-open").attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading");

           if (s)  {
             obj.children("ul").stop(true, true).slideDown(s, function ()
                                                               {
                                                                 this.style.display = ""; 
//                                                               this["style"]["display"] = ""; 
                                                                 t["after_open"](obj);
                                                                });
           }
           else  {
              t["after_open"](obj);
           }

           this._emitEvent({ "obj" : obj }, "expand");
           if (callback)  {
             callback.call();
           }
         }
    },


    /**
      *  Expands all collapsed nodes
      *  @private
      */
    _expandAll  : function (obj, do_animation, original_obj)
    {
      var origTarg = obj? obj : -1 ;

      obj = obj ? this._getNode(obj) : -1;
      if (!obj || obj === -1) {
        obj = this._$container_ul;
      }
      else {
        origTarg = obj ;
      }

      if (original_obj)  { 
        obj = obj.find("li.oj-tree-closed");
      }
      else   {
        original_obj = obj;
        if (obj.is(".oj-tree-closed"))
        {
          obj = obj.find("li.oj-tree-closed").addBack();
        }
        else  {
          obj = obj.find("li.oj-tree-closed");
        }
      }

      var _this = this;
      obj.each(function ()
           { 
             var __this = this; 

             if (!_this._is_loaded(this))   {
               _this["expand"](this, function()
                                     {
                                       _this._expandAll(__this, do_animation, original_obj);
                                     }, !do_animation);
             }
             else  {
               _this._expand(this, false, !do_animation);
             }
           });

      // so that callback is fired AFTER all nodes are open
      if (original_obj.find('li.oj-tree-closed').length === 0)  {
        this._emitEvent({ "obj" : origTarg }, "expandall");
      }

   },


    /**
      *  Selects a node
      *  @private
      */
    _select : function (node, check, e)
    {
       node = this._getNode(node);
       if (node == -1 || !node || !node.length)  {
         return false;
       }

       var s = this.options,
           is_multiple = (s["selectMultipleModifier"] == "on" || (s["selectMultipleModifier"] !== false && e && e[s["selectMultipleModifier"] + "Key"])),
           is_range = (s["selectRangeModifier"] !== false && e &&  e[s["selectRangeModifier"] + "Key"] && this._data.ui.last_selected && this._data.ui.last_selected[0] !== node[0] && this._data.ui.last_selected.parent()[0] === node.parent()[0]),
           is_selected = this["isSelected"](node),
           proceed = true,
           t = this;

if ((! is_multiple) && (this._data.core.selectMode == -1)) {
is_multiple = true ;
}
if (this._data.core.selectMode == 0) {
  return false ;
}
check = true ;

        if (check)   {
           if (s["disableSelectingChildren"] && is_multiple && 
               ((node.parentsUntil(".oj-tree","li").children("a.oj-tree-clicked").length) ||
                (node.children("ul").find("a.oj-tree-clicked:eq(0)").length)))  {
              return false;
           }
           proceed = false;
           switch(!0)
           {
              case (is_range):
                  this._data.ui.last_selected.addClass("oj-tree-last-selected");
                  node = node[ node.index() < this._data.ui.last_selected.index() ? "nextUntil" : "prevUntil" ](".oj-tree-last-selected").addBack();

                  if (this._data.core.selectMode == -1 || node.length < this._data.core.selectMode)  {
                    this._data.ui.last_selected.removeClass("oj-tree-last-selected");
                    this._data.ui.last_selected.removeClass("oj-tree-last-selected");
                    this.data.ui.selected.each(function ()
                                            {
                                               if (this !== t._data.ui.last_selected[0])  {
                                                 t["deselect"](this);
                                               }
                                          });
                    is_selected = false;
                    proceed     = true;
                  }
                  else {
                    proceed = false;
                  }
                  break;

              case (is_selected && !is_multiple): 
                  this["deselectAll"]();
                  is_selected = false;
                  proceed     = true;
                  break;

              case (! is_selected && !is_multiple): 
                  if (this._data.core.selectMode == -1 || this._data.core.selectMode > 0)  {
                    this["deselectAll"]();
                    proceed = true;
                  }
                  break;

              case (is_selected && is_multiple): 
                  this["deselect"](node);
                  break;

              case (! is_selected && is_multiple): 
                  if (this._data.core.selectMode == -1 || this._data.ui.selected.length + 1 <= this._data.core.selectMode)  { 
                    proceed = true;
                  }
                  break;
           }
        }

        if (proceed && !is_selected)  {
           if (!is_range)  {
             this._data.ui.last_selected = node;
           }
           node.children("a").addClass("oj-tree-clicked");
           node.attr("aria-selected", "true");

           if (s["selectedParentExpand"])  {
              node.parents(".oj-tree-closed").each(function () {
                                                    t["expand"](this, false, true);
                                             });
           }
           this._data.ui.selected = this._data.ui.selected.add(node);
           this._fix_scroll(node.eq(0));
           this._emitEvent({ "obj" : node, "e" : e }, "select");
        }

     },


      /**
        *  Placeholder for a more specific refresh action. It is replaced
        *  by refresh_json() for json_data, or _refresh_ui() for html_data.
        *  @private
        */
     _refresh : function(node) {
        this._refresh_core(node) ;
     },


     /**
       *  Base _refresh action
       *  @private
       */
     _refresh_core : function(node)
     {
       var origTarg = node? node : -1 ;
       var _this    = this;
       
       this._save_opened();
       if (!node) {
          node = -1;
       }
       node = this._getNode(node);
       if (!node)  {
         node = -1;
       }
       else {
         origTarg = node
       }

       if (node !== -1)  {
         node.children("UL").remove();
       }
       else  {
         this._$container_ul.empty();
       }
       this._load_node(node, function ()
                           {
                             _this._emitEvent({ "obj" : origTarg}, "refresh");
                             _this._reload_nodes();
                            }
                      );
     },


     /**
       *  Ui _refresh action 
       *  @private
       */
     _refresh_ui : function (obj)
     {
        this["save_selected"]();
//wed5  return this.__call_old();
        this._refresh_core(obj) ;
     },


    /**
      *  Emits an "after_open" event for internal use only.
      *  @private
      */
    "after_open"  : function (obj)
    { 
       this._emitEvent({ "obj" : obj }, "after_open");
    },


    /**
      *  Emits an "after_close" event for internal use only.
      *  @private
      */
    "after_close" : function (obj)
    { 
       this._emitEvent({ "obj" : obj }, "after_close");
    },

    /**
      *  @private
      */
    _reopen : function ()
    {
       var _this = this;

       if (this._data.core.toExpand.length) {
         $.each(this._data.core.toExpand, function (i, val)
                                          {
                                              _this._expand(val, false, true); 
                                          });
       }
       this._emitEvent({}, "reopen");
     },


     /**
       *  Returns an array of currently selected nodes.
       *  @private
       */
     _getSelected : function (context)
     { 
         return context ? $(context).find("a.oj-tree-clicked").parent() : this._data.ui.selected ; 
     },


     /**
       *  Changes the text title of the node's <a>
       *  @private
       */
     _set_text  : function (obj, val)
     {
        obj = this._getNode(obj);
        if (!obj.length)  {
          return false;
        }

        obj = obj.children("a:eq(0)");
        if (this.options["html_titles"])  {
           var tmp = obj.children("INS").clone();
           obj.html(val).prepend(tmp);
           this._emitEvent({ "obj" : obj, "name" : val }, "set_text");
           return true;
        }
        else
        {
           obj = obj.contents().filter(function() {
                                   return this.nodeType == 3;
                                })[0];

           this._emitEvent({ "obj" : obj, "name" : val }, "set_text");
           return (obj.nodeValue = val);
        }
     },


    /*
     *  @private
     */ 
     _load_node : function(obj, success_callback, error_callback)     // Dummy function overriden by data methods
     {
        this._emitEvent({ "obj" : obj }, "load_node");

     },

     /**
       *  Returns whether a node is current loaded. This is a dummy function
       *  overriden by data methods (such as_load_node_J()).
       *  @private
       */
     _is_loaded  : function (obj)                 // Dummy function overriden by data methods
     {
       return true;
     },


     /*
      *  json_data's _load_node
      *  @private
      */
     _load_node_J : function (obj, s_call, e_call)
     {
        var _this = this;
        this._load_node_json(obj, function ()  {
                                      _this._emitEvent({ "obj" : _this._getNode(obj) }, "load_node");
                                      s_call.call(this);
                                  }, e_call);
     },

     /*
      *   json_data's _is_loaded
      *   @private
      */
     _is_loaded_J : function (obj)
     { 
       var s = this.options["json_data"];

       obj = this._getNode(obj); 
       return obj == -1 || !obj || (!s["ajax"] && !s["progressive_render"] && !$.isFunction(s["data"]))
                        || obj.is(".oj-tree-open, .oj-tree-leaf")
                        || obj.children("ul").children("li").length > 0;
     },


     /*
      *   html_data's _load_node
      *   @private
      */
     _load_node_H : function (obj, s_call, e_call)
     {
       var _this = this;
       this._load_node_html(obj, function ()
                                {
                                   _this._emitEvent({ "obj" : _this._getNode(obj)}, "load_node") ;
                                   s_call.call(this);
                                   
                                 }, e_call);
     },

     /*
      *  html_data's _load_node
      *  @private
      */
     _is_loaded_H : function (obj)
     { 
       var s = this.options["html_data"];

       obj = this._getNode(obj); 

       return obj == -1 || !obj || (!s["ajax"] && !$.isFunction(s["data"])) || obj.is(".oj-tree-open, .oj-tree-leaf") || obj.children("ul").children("li").size() > 0;
     },



     "reselect" : function ()
     {
        var _this = this,
            s      = this._data.ui.to_select;

        s = $.map($.makeArray(s), function (n) {
                           return "#" + n.toString().replace(/^#/,"")
                                                    .replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
        // this.deselect_all(); WHY deselect, breaks plugin state notifier?
        $.each(s, function (i, val)
                   {
                      if (val && val !== "#")  {
                        _this["select"](val);
                      }
              });

        this._data.ui.selected = this._data.ui.selected.filter(function ()
                                           {
                                             return this["parentNode"];
                                            });
        this._emitEvent(null, "reselect");
     },

     "save_selected" : function ()
     {
        var _this = this;

        this._data.ui.to_select = [];
        this._data.ui.selected.each(function ()
                  {
                    if (this.id) {
                      _this._data.ui.to_select.push("#" + this.id.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:")); 
                     }
                  });
        this._emitEvent(this._data.ui.to_select, "save_selected");
     },


     /*
      *      Not documented
      */
     "rollback" : function (rb)
     {
        if (rb)  {
          if (!$.isArray(rb))  {
            rb = [ rb ];
          }
          $.each(rb, function (i, val)
                     {
//                       instances[val.i]["set_rollback"](val.h, val.d);     //TDO
                     });
        }
    },


    "get_rollback" : function ()
    { 
       this._emitEvent(null, "get_rollback");
       return {
                i : this._getIndex(),
                h : this._$container.children("ul").clone(true),
                d : this["data"]                    // TDO ???
              }; 
    },
           
    "set_rollback" : function (html, data)
    {
       if (this._$container)   {                   // if added for closure conmpiler
         this._$container.empty().append(html);
       }

       this["data"] = data;                       // TDO ???
       this._emitEvent(null, "set_rollback");
    },
           

     /*
      *  @private
      */
     _refresh_json  : function (obj)
     {
        obj = this._getNode(obj);

        var s = this.options["json_data"];

        if (obj && obj !== -1 && s["progressive_unload"] && ($.isFunction(s["data"]) || !!s["ajax"]))  {
          obj.removeData("oj-tree-children");
        }
//Wed5  return this.__call_old();
        return this._refresh_ui(obj);
     },


     /*
      *  Load json for a particular node (or the whole tree)
      *  @private
      */
     _load_node_json : function (obj, s_call, e_call)
     {
       var s = this._getOptions()["json_data"],
           d,
           error_func   = function () {},
           success_func = function () {};

       obj = this._getNode(obj);

       if (obj && obj !== -1 && (s["progressive_render"] || s["progressive_unload"]) && !obj.is(".oj-tree-open, .oj-tree-leaf") && obj.children("ul").children("li").length === 0 && obj.data("oj-tree-children"))
       {
          d = this._parseJson(obj.data("oj-tree-children"), obj);
          if (d)  {
            obj.append(d);
            if (! s["progressive_unload"]) {
              obj.removeData("oj-tree-children");
            }
          }

          this._clean_node(obj);
          if (s_call)  {
            s_call.call(this);
          }
          return;
       }

       if (obj && obj !== -1) {
         if (obj.data("oj-tree-is-loading"))  {
            return;
         }
         else  {
            obj.data("oj-tree-is-loading",true);
         }
       }

       switch (!0)
       {
          case (! s["data"] && !s["ajax"]) : throw "Neither data nor ajax settings supplied.";


                   // function option added here for easier model integration (also supporting async - see callback)

          case ($.isFunction(s["data"])):
                       s["data"].call(this, obj, $.proxy(function (d) {
                           d = this._parseJson(d, obj);
                           if (!d) { 
                              if (obj === -1 || !obj)  {
                                if (s["correct_state"])  {
                                  this._$container.children("ul").empty();
                                }
                              }
                              else  {
                                 obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                 obj.removeData("oj-tree-is-loading");

                                 if (s["correct_state"]) {
                                   this._correct_state(obj);
                                 }
                              }
                              if (e_call) {
                                e_call.call(this);
                              }
                           }
                           else  {
                              if (obj === -1 || !obj)  {
                                 this._$container.children("ul").empty().append(d.children());
                              }
                              else
                              {
                                 obj.append(d).children("a.oj-tree-loading").removeClass("oj-tree-loading"); obj.removeData("oj-tree-is-loading");
                              }
                              this._clean_node(obj);
                              if (s_call)  {
                                s_call.call(this);
                              }
                           }
                       }, this));
                       break;

          case (!!s["data"] && !s["ajax"]) || (!!s["data"] && !!s["ajax"] && (!obj || obj === -1)):

                       if (!obj || obj == -1)  {
                         d = this._parseJson(s["data"], obj) ;
                         if (d)  {
                           this._$container.children("ul").empty().append(d.children());
                           this._clean_node();
                         }
                         else  { 
                            if (s["correct_state"]) {
                                this._$container.children("ul").empty();
                             }
                         }
                       }
                       if (s_call) {
                          s_call.call(this);
                       }
                       break;

          case (!s["data"] && !!s["ajax"]) || (!!s["data"] && !!s["ajax"] && obj && obj !== -1):

                       error_func = function (x, t, e)
                       {
                           var ef = this._getOptions()["json_data"]["ajax"]["error"]; 
                           if (ef)  {
                              ef.call(this,  t, e, x);
                           }
                           if (obj != -1 && obj.length)  {
                              obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                              obj.removeData("oj-tree-is-loading");
                              if (t === "success" && s["correct_state"])  {
                                this._correct_state(obj);
                              }
                           }
                           else   {
                             if (t === "success" && s["correct_state"])  {
                               this._$container.children("ul").empty();
                             }
                           }
                           if (e_call)  {
                             e_call.call(this);
                           }
                       };

                       success_func = function (d, t, x)
                       {
                           var sf = this._getOptions()["json_data"]["ajax"]["success"]; 
                           if (sf) {
                              d = sf.call(this, d, t, x) || d;
                           }

                           if (d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "") || (!$.isArray(d) && !$.isPlainObject(d)))  {
                             return error_func.call(this, x, t, "");
                           }

                           d = this._parseJson(d, obj);
                           if (d)  {
//JRM                         if(obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
                              if (obj === -1 || !obj)
                              {
                                 var $u =  this._$container.children("ul");
                                 $u.empty().append(d.children());
                                 $u.attr("role", "tree").attr("tabindex", "0").css("outline", "none") ;
                                 if (this._data.core.selectMode === -1)  {
                                   $u.attr("aria-multiselectable", true) ;
                                 }
                               }
                               else   {
                                  obj.append(d).children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                  obj.removeData("oj-tree-is-loading");
                               }

                               this._clean_node(obj);
                               if (s_call)  {
                                 s_call.call(this);
                               }
                           }
                           else  {
                             if (obj === -1 || !obj) {
                                if (s["correct_state"])
                                { 
                                   this._$container.children("ul").empty(); 
                                   if (s_call) {
                                     s_call.call(this);
                                   }
                                }
                             }
                             else  {
                                obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                obj.removeData("oj-tree-is-loading");
                                if (s["correct_state"])
                                { 
                                  this._correct_state(obj);
                                  if (s_call)  {
                                    s_call.call(this);
                                  } 
                                }
                               }
                           }
                       };

                       s["ajax"]["context"] = this;
                       s["ajax"]["error"]   = error_func;
                       s["ajax"]["success"] = success_func;

                       if (! s["ajax"]["dataType"])  {
                          s["ajax"]["dataType"] = "json";
                       }
                       if ($.isFunction(s["ajax"]["url"]))  {
                          s["ajax"]["url"] = s["ajax"]["url"].call(this, obj);
                       }
                       if ($.isFunction(s["ajax"]["data"]))  {
                         s["ajax"]["data"] = s["ajax"]["data"].call(this, obj);
                       }
                       $.ajax(s["ajax"]);
                       break;
               }                       // end switch

     },


     /*
      *  Parse a JSON representation of the tree into a jQUery wrapped <ul> structure
      *  @private
      */
     _parseJson : function (js, obj, isRecurse)
     {
        var d = false, 
            p = this.options,
            s = p["json_data"],
            t = p["html_titles"],
            tmp, i, j, ul1, ul2;

        if (!js) {
          return d;
        }

        if (s["progressive_unload"] && obj && obj !== -1)  { 
          obj.data("oj-tree-children", d);
        }

        if ($.isArray(js))  {
          d = $('<ul>');
          if (! js.length)  {
            return false;
          }

          for (i = 0, j = js.length; i < j; i++)  {
             tmp = this._parseJson(js[i], obj, true);
             if (tmp.length)  {
               d = d.append(tmp);
             }
          }

          d = d.children();
        }
        else   {
           if (typeof js == "string")  {
             js = { "data" : js };
           }

           // jstree wants js.data to be an object or a string (for the title).
           // If not object,  we expect a title property.

           if (! js["data"] && js["data"] !== "")  {
             if (js["title"] !== undefined)  {
               js["data"] = js["title"];
               delete js["title"];
             }
             else  {
                return d;
             }
           }


//JRM      if(!js.data && js.data !== "") { return d; }
           d = $("<li role='treeitem' />");

           if (js["attr"])  {
             d.attr(js["attr"]);
           }

           if (js["metadata"])  {
             d.data(js["metadata"]);
           }

           // js.state     // not published - per Design Review

          if (js["state"] || (js["children"] && js["children"].length === 0)) {    // length zero means lazy load
            d.addClass("oj-tree-" + ((js["state"] === "expanded")? "open" : "closed"));
         }

           if (!$.isArray(js["data"])) {
             tmp = js["data"];
             js["data"] = [];
             js["data"].push(tmp);
           }
           
           $.each(js["data"], function (i, m)   {
                      tmp = $("<a tabindex='-1' />");
//                    tmp = $("<a role=presentation tabindex=-1 />");
                      if ($.isFunction(m)) {
                         m = m.call(this, js);
                      }
                      if (typeof m == "string")  {
                        tmp.attr('href','#')[ t ? "html" : "text" ](m);
                      }
                      else  {
                        if (!m["attr"]) {
                          m["attr"] = {};
                        }
                        if (!m["attr"]["href"]) {
                          m["attr"]["href"] = '#';
                        }
                        tmp.attr(m["attr"])[ t ? "html" : "text" ](m["title"]);
                        if (m["language"]) {
                          tmp.addClass(m["language"]);
                        }
                      }
           
                      tmp.prepend("<ins class='oj-tree-icon'>&#160;</ins>");
                      if (!m["icon"] && js["icon"])  {
                        m["icon"] = js["icon"];
                      }
                      if (m["icon"])  { 
                        if (m["icon"].indexOf("/") === -1)  {
                          tmp.children("ins").addClass(m["icon"]);
                        }
                        else  {
                          tmp.children("ins").css("background","url('" + m["icon"] + "') center center no-repeat"); }
                      }
                      d.append(tmp);
           });

           d.prepend("<ins class='oj-tree-icon'>&#160;</ins>");

           if (js["children"])  { 
             if (s["progressive_render"] && js["state"] !== "expanded")  {
               d.addClass("oj-tree-closed").attr("aria-expanded", "false").data("oj-tree-children", js["children"]);
             }
             else  {
               if (s["progressive_unload"])  {
                 d.data("oj-tree-children", js["children"]);
               }
               if ($.isArray(js["children"]) && js["children"].length) {
                 tmp = this._parseJson(js["children"], obj, true);
                 if (tmp.length)  {
                   ul2 = $("<ul role='group' />");
                   ul2.append(tmp);
                   d.append(ul2);
                 }
               }
             }
           }
        }  // end else

        if (! isRecurse)  {
          ul1 = $("<ul />");
          ul1.append(d);
          d = ul1;
        }

        return d;
     },

     /*
      *   Returns a Json representation of a node
      *   @private
      */
     _getJson : function (obj, li_attr, a_attr, is_callback)
     {
       var result = [], 
           s      = this.options, 
           _this  = this,
           tmp1,
           tmp2,
           li,
           a,
           t,
           lang;

       obj = this._getNode(obj);

       if (!obj || obj === -1)  {
         obj = this._$container.find("> ul > li");
       }
       li_attr = $.isArray(li_attr) ? li_attr : [ "id", "class" ];

//wed  if (!is_callback && this.data.types)
       if (!is_callback && this["data"]["types"])  {
         li_attr.push(s["types"]["type_attr"]);
       }
       a_attr = $.isArray(a_attr) ? a_attr : [ ];

       obj.each(function () {
                  li = $(this);
                  tmp1 = { data : [] };

                  if (li_attr.length)  {
                    tmp1.attr = { };
                  }
                  $.each(li_attr, function (i, v)  { 
                                    tmp2 = li.attr(v); 
                                    if (tmp2 && tmp2.length && tmp2.replace(/oj-tree[^ ]*/ig,'').length)  {
                                      tmp1.attr[v] = (" " + tmp2).replace(/ oj-tree[^ ]*/ig,'')
                                                                 .replace(/\s+$/ig," ")
                                                                 .replace(/^ /,"").replace(/ $/,""); 
                                    }
                  });

                  if (li.hasClass("oj-tree-open"))  {
                    tmp1.state = "open";
                  }
                  if (li.hasClass("oj-tree-closed"))  {
                    tmp1.state = "closed";
                  }
                  if (li.data())  {
                    tmp1.metadata = li.data();
                  }
                  a = li.children("a");
                  a.each(function ()  {
                          t = $(this);

                          if ( a_attr.length || $.inArray("languages", s["plugins"]) !== -1 || 
//wed3                         t.children("ins").get(0).style.backgroundImage.length || 
                               t.children("ins").get(0)["style"]["backgroundImage"].length || 
//wed3                        (t.children("ins").get(0).className && t.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig,'').length))
                              (t.children("ins").get(0)["className"] && t.children("ins").get(0)["className"].replace(/oj-tree[^ ]*|$/ig,'').length))
                          { 
                            lang = false;
                            if ($.inArray("languages", s["plugins"]) !== -1 && $.isArray(s["languages"]) && s["languages"].length)  {
//                            $.each(s.languages, function (l, lv)   {
                              $.each(s["languages"], function (l, lv)   {

                                                     if (t.hasClass(lv))  {
                                                       lang = lv;
                                                       return false;
                                                     }
                              });
                            }

                            tmp2 = { "attr" : { }, "title" : _this.getText(t, lang) }; 
                            $.each(a_attr, function (k, z) {
                                tmp2.attr[z] = (" " + (t.attr(z) || "")).replace(/ oj-tree[^ ]*/ig,'')
                                                                        .replace(/\s+$/ig," ")
                                                                        .replace(/^ /,"")
                                                                        .replace(/ $/,"");
                            });
                            if ($.inArray("languages", s["plugins"]) !== -1 && $.isArray(s["languages"]) && s["languages"].length) {
                               $.each(s["languages"], function (k, z)  {
                                  if (t.hasClass(z))  {
                                    tmp2.language = z;
                                    return true;
                                  }
                               });
                            }

                            if (t.children("ins").get(0)["className"].replace(/oj-tree[^ ]*|$/ig,'').replace(/^\s+$/ig,"").length)
                            {
                              tmp2.icon = t.children("ins").get(0)["className"].replace(/oj-tree[^ ]*|$/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"");
                            }
                            if (t.children("ins").get(0)["style"]["backgroundImage"].length)
                            {
                              tmp2.icon = t.children("ins").get(0)["style"]["backgroundImage"].replace("url(","").replace(")","");
                            }
                          }
                          else   {
                             tmp2 = _this["getText"](t);
                          }

                          if (a.length > 1)  {
                            tmp1.data.push(tmp2);
                          }
                          else   {
                            tmp1.data = tmp2;
                         }
                  });

                  li = li.find("> ul > li");
                  if (li.length)  {
                     tmp1.children = _this._getJson(li, li_attr, a_attr, true);
                  }
                  result.push(tmp1);
       });

       return result;
     },

     /**
       *  @private
       */
     _correct_state   : function (obj)
     {
         obj = this._getNode(obj);
         if (!obj || obj === -1) {
           return false;
         }
         obj.removeClass("oj-tree-closed oj-tree-open").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
         this._emitEvent({ "obj" : obj }, "correct_state");
     },


     /**
       *  @private
       */
     _core_notify : function (n, data)
     {
        if (data.opened)  {
          this._expand(n, false, true);
        }
     },


     /*
      *  Dummy function to fire after the first load (so that there is a loaded event)
      *  @private
      */
     _loaded  : function ()
     { 
        this._emitEvent(null, "loaded"); 
      },


     /**
       *   Process the user tree <ul> list placed in the tree div.
       *   @private
       */
     _load_node_html : function (obj, s_call, e_call)
     {
       var d,
           s            = this.options["html_data"],
           error_func   = function () {},
           success_func = function () {};

       obj = this._getNode(obj);
       if (obj && obj !== -1)  {
         if (obj.data("oj-tree-is-loading")) {
           return;
         }
         else  {
           obj.data("oj-tree-is-loading", true);
         }
       }

       switch(!0)
       {
          case ($.isFunction(s["data"])):
                     s["data"].call(this, obj, $.proxy(function (d)
                               {
                                if (d && d !== "" && d.toString && d.toString().replace(/^[\s\n]+$/,"") !== "") {
                                  d = $(d);
                                  if (! d.is("ul")) {
                                    d = $("<ul />").append(d);
                                  }
                                  if (obj == -1 || !obj) {
                                    this._$container.children("ul").empty().append(d.children())
                                                                           .find("li, a")
                                                                           .filter(function () {
                                                                              return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='oj-tree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon");
                                  }
                                  else  {
                                    obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                    obj.append(d).children("ul").find("li, a").filter(function ()
                                                     { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='oj-tree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"); obj.removeData("oj-tree-is-loading");
                                  }
                                  this._clean_node(obj);
                                  if (s_call)  {
                                    s_call.call(this);
                                  }
                                }
                                else  {
                                  if (obj && obj !== -1)  {
                                    obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                    obj.removeData("oj-tree-is-loading");
                                    if (s["correct_state"]) { 
                                      this._correct_state(obj);
                                      if (s_call) {
                                        s_call.call(this);
                                      } 
                                    }
                                  }
                                  else  {
                                    if (s["correct_state"])
                                    { 
                                      this._$container.children("ul").empty();
                                      if (s_call) {
                                        s_call.call(this);
                                      } 
                                    }
                                  }
                                }
                               }, this));
                     break;

          case (!s["data"] && !s["ajax"]):
                     if (!obj || obj == -1 )  {
                       this._$container
                                .children("ul").empty()
                                .append(this._data.html.originalContainerHtml)
                                .find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='oj-tree-icon'>&#160;</ins>").end()
                                .filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon");
                       this._clean_node();
                       this._$container_ul.find("ul").attr("role", "group") ;
                       this._$container_ul.find("li").attr("role", "treeitem") ;
                       this._$container_ul.find("a").attr("tabindex", -1) ;
                     }
                     if (s_call)  {
                          s_call.call(this);
                     }
                     break;

          case (!!s["data"] && !s["ajax"]) || (!!s["data"] && !!s["ajax"] && (!obj || obj === -1)):
                     if (!obj || obj == -1) {
                            d = $(s["data"]);
                            if (!d.is("ul")) {
                              d = $("<ul />").append(d);
                            }
                            this._$container
                                .children("ul").empty().append(d.children())
                                .find("li, a").filter(function ()
                                                 {
                                                    return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='oj-tree-icon'>&#160;</ins>").end()
                                .filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon");

                            this._clean_node();
                            this._$container_ul.find("ul").attr("role", "group") ;
                            this._$container_ul.find("li").attr("role", "treeitem") ;
                            this._$container_ul.find("a").attr("tabindex", "-1") ;
                     }
                     if (s_call)  {
                          s_call.call(this);
                     }
                     break;

          case (!s["data"] && !!s["ajax"]) || (!!s["data"] && !!s["ajax"] && obj && obj !== -1):
                    obj = this._getNode(obj);
                    error_func = function (x, t, e)
                         {
                            var ef = this._getOptions()["html_data"]["ajax"]["error"]; 
                            if (ef) {
                              ef.call(this, x, t, e);
                            }
                            if (obj != -1 && obj.length)  {
                              obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                              obj.removeData("oj-tree-is-loading");
                              if (t === "success" && s["correct_state"]) {
                                 this._correct_state(obj);
                              }
                            }
                            else  {
                              if (t === "success" && s["correct_state"]) {
                                 this._$container().children("ul").empty();
                              }
                            }
                            if (e_call)  {
                              e_call.call(this);
                            }
                        };
                    success_func = function (d, t, x)
                         {
                            var sf = this._getOptions()["html_data"]["ajax"]["success"]; 

                            if (sf) {
                              d = sf.call(this,d,t,x) || d;
                            }

                            if (d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "")) {
                              return error_func.call(this, x, t, "");
                            }

                            if (d)  {
                              d = $(d);
                              if (!d.is("ul")) {
                                d = $("<ul />").append(d);
                              }
                              if (obj == -1 || !obj) {
                                this._$container.children("ul")
                                                .empty()
                                                .append(d.children())
                                                .find("li, a").filter(function ()
                                                      {
                                                        return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS";
                                                       }).prepend("<ins class='oj-tree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon");
                              }
                              else  {
                                 obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                 obj.append(d).children("ul").find("li, a")
                                                             .filter(function () {
                                                                        return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS";
                                                                     }
                                                              ).prepend("<ins class='oj-tree-icon'>&#160;</ins>").end().filter("a")
                                                                                                                 .children("ins:first-child")
                                                                                                                 .not(".oj-tree-icon").addClass("oj-tree-icon");
                                 obj.removeData("oj-tree-is-loading");
                              }
                              this._clean_node(obj);
                              if (s_call)  {
                                s_call.call(this);
                              }
                            }
                            else  {
                              if (obj && obj !== -1)  {
                                 obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                 obj.removeData("oj-tree-is-loading");
                                 if (s["correct_state"])  { 
                                    this._correct_state(obj);
                                    if (s_call) {
                                      s_call.call(this);
                                    } 
                                 }
                                }
                                else  {
                                  if (s["correct_state"])  { 
                                     this._$container.children("ul").empty();
                                     if (s_call) {
                                       s_call.call(this);
                                     } 
                                  }
                                }
                                this._$container_ul.find("ul").attr("role", "group") ;
                                this._$container_ul.find("li").attr("role", "treeitem") ;
                            }
                        };

                        s["ajax"]["context"] = this;
                        s["ajax"]["error"]   = error_func;
                        s["ajax"]["success"] = success_func;

                        if (!s["ajax"]["dataType"]) {
                          s["ajax"]["dataType"] = "html";
                        }
                        if ($.isFunction(s["ajax"]["url"])) {
                          s["ajax"]["url"] = s["ajax"]["url"].call(this, obj);
                        }
                        if ($.isFunction(s["ajax"]["data"])) {
                          s["ajax"]["data"] = s["ajax"]["data"].call(this, obj);
                        }
                        $.ajax(s["ajax"]);
                        break;
       }
     },

     /*
      *
      *   @private
      */
     _dnd_prepare : function ()
     {
       var  vars = this._data.dnd.vars ;

       if (! vars.r || ! vars.r.length) {
         return;
       }
       this._data.dnd.off = vars.r.offset();

       if (this._isRtl) {
         this._data.dnd.off.right = this._data.dnd.off.left + vars.r.width();
       }

       if (this._data.dnd.foreign)  {

         var a = this.options["dnd"]["drag_check"].call(this, { "o" : vars.o, "r" : vars.r });

         this._data.dnd["after"]   = a["after"];
         this._data.dnd["before"]  = a["before"];
         this._data.dnd["inside"]  = a["inside"];
         this._data.dnd.prepared   = true;
         return this._dnd_show();
       }

       this._prepare_move(vars.o, vars.r, "before");
       this._data.dnd["before"] = this["check_move"]();
       this._prepare_move(vars.o, vars.r, "after");
       this._data.dnd["after"]  = this["check_move"]();

       if (this._is_loaded(vars.r)) {
         this._prepare_move(vars.o, vars.r, "inside");
         this._data.dnd["inside"] = this["check_move"]();
       }
       else  {
         this._data.dnd["inside"] = false;
       }

       this._data.dnd.prepared = true;
       return this._dnd_show();
     },


     /*
      *
      *   @private
      */
     _dnd_show : function ()
     {
        var  dnd = this._data.dnd ;

        if (! dnd.prepared)  {
          return;
        }

        var o     =  ["before","inside","after"],
            r     =  false,
            pos,
            ctl   =  dnd.ctl,
            vars  =  dnd.vars ;

        if (dnd.w < this._data.core.li_height/3)  {
           o = ["before","inside","after"];
        }
        else if (dnd.w <= this._data.core.li_height * 2/3)  {
          o = dnd.w < this._data.core.li_height/2 ? ["inside","before","after"] :
                                                    ["inside","after","before"] ;
        }
        else {
          o = ["after","inside","before"];
        }
 
        $.each(o, $.proxy(function (i, val)
           { 
             if (this._data.dnd[val])  {
               ctl.helper.children("ins").attr("class","oj-tree-ok");
               r = val;
               return false;
             }
        }, this));

        if (r === false)  {
           ctl.helper.children("ins").attr("class","oj-tree-invalid");
        }
        
        pos = this._isRtl ? (this._data.dnd.off.right - 18) : (this._data.dnd.off.left + 10);
        switch(r)
         {
            case "before":
                vars.m.css({ "left" : pos + "px", "top" : (this._data.dnd.off.top - 6) + "px" }).show();
                if (vars.ml) {
                  vars.ml.css({ "left" : (pos + 8) + "px", "top" : (this._data.dnd.off.top - 1) + "px" }).show();
                }
                break;

            case "after":
                vars.m.css({ "left" : pos + "px", "top" : (this._data.dnd.off.top + this._data.core.li_height - 6) + "px" }).show();
                if (vars.ml) {
                  vars.ml.css({ "left" : (pos + 8) + "px", "top" : (this._data.dnd.off.top + this._data.core.li_height - 1) + "px" }).show();
                }
                break;

            case "inside":
                vars.m.css({ "left" : pos + ( this._isRtl ? -4 : 4) + "px", "top" : (this._data.dnd.off.top + this._data.core.li_height/2 - 5) + "px" }).show();
                if (vars.ml)  {
                  vars.ml.hide();
                }
                break;

            default:
                vars.m.hide();
                if (vars.ml) {
                  vars.ml.hide();
                }
                break;
        }

        vars.last_pos = r;

        return  r;

     },



     /*
      *
      *   @private
      */
     _dnd_enter : function (obj)
     {
        var dnd = this._data.dnd,
            vars = dnd.vars ;

        if (dnd.mto)  { 
          clearTimeout(dnd.mto);
          dnd.mto = false;
        }

        dnd.prepared = false;
        vars.r = this._getNode(obj);

        var s             = this.options["dnd"];
        var checkTimeout  = s["check_timeout"] ;

        if (checkTimeout)  { 

           // do the calculations after a minimal timeout (users tend to drag quickly to the desired location)

           if (dnd.to1)  {
             clearTimeout(dnd.to1);
           }
           dnd.to1 = setTimeout($.proxy(this._dnd_prepare, this), checkTimeout); 
        }
        else { 
            this._dnd_prepare(); 
        }

        var openTimeout  = s["open_timeout"] ;
        if (openTimeout)  { 
          if (dnd.to2)  {
            clearTimeout(dnd.to2);
          }
          if (vars.r && vars.r.length && vars.r.hasClass("oj-tree-closed"))  { 
            // if the node is closed - open it, then recalculate
            dnd.to2 = setTimeout($.proxy(this._dnd_open, this), openTimeout);
          }
        }
        else   {
          if (vars.r && vars.r.length && vars.r.hasClass("oj-tree-closed"))  { 
             this._dnd_open();
          }
        }
  
     },


     /*
      *
      *   @private
      */
     _dnd_leave : function (e)
     {
        var dnd  = this._data.dnd,
            vars = this._data.dnd.vars ;

        dnd["after"]   = false;
        dnd["before"]  = false;
        dnd["inside"]  = false;

        this._data.dnd.ctl.helper.children("ins").attr("class","oj-tree-invalid");

        vars.m.hide();

        if (vars.ml) {
          vars.ml.hide();
        }
        if (vars.r && vars.r[0] === e.target.parentNode)
        {
          if (dnd.to1) {
            clearTimeout(dnd.to1);
            dnd.to1 = false;
          }
          if (dnd.to2)  {
            clearTimeout(dnd.to2);
            dnd.to2 = false;
          }
        }

     },


     /**
       *  Expand the node hovered over while dragging so the user can drop inside a folder.
       *  @private
       */
     _dnd_open : function ()
     {
        var  vars = this._data.dnd.vars ;

        this._data.dnd.to2 = false;
        this["expand"](vars.r, $.proxy(this._dnd_prepare, this), true);
     },


     /**
       *  Drag is complete - move the node.
       *  @private
       */
     _dnd_finish : function (e)
      {
         var dnd  = this._data.dnd,
             vars = this._data.dnd.vars ;

         if (dnd.foreign)   {
           if (dnd["after"] || dnd["before"] || dnd["inside"])  {
              this.options["dnd"]["drag_finish"].call(this, { "o" : vars.o, "r" : vars.r, "p" : vars.last_pos });
           }
         }
         else  {
           this._dnd_prepare();
           this._move_node(vars.o, vars.r, vars.last_pos, e[this.options["dnd"]["copy_modifier"] + "Key"]);
         }

         vars.o = false;
         vars.r = false;
         vars.m.hide();

         if (vars.ml) {
           vars.ml.hide();
         }
     },


     /**
       *  @private
       */
     _start_drag : function (obj, e)
     {
        var  dnd  = this._data.dnd,
             vars = this._data.dnd.vars ;

        vars.o = this._getNode(obj);
        if (this._data.ui && this["isSelected"](vars.o))  {
          vars.o = this._getNode(null, true);
        }

        var dt  = vars.o.length > 1 ? this.getTranslatedString("m_multisel") : this["getText"](vars.o),
            cnt = this._getContainer();

        if (!this.options["html_titles"]) {
          dt = dt.replace(/</ig,"&lt;").replace(/>/ig,"&gt;");
        }
        this._drag_start(e, { jstree : true,
                              obj    : vars.o
                            }, "<ins class='oj-tree-icon'></ins>" + dt);

        if (this._data.themes) {
          if (vars.m) {
             vars.m.attr("class", "oj-tree-" + this._data.themes.theme);
          }
          dnd.ctl.helper.attr("class", "oj-tree-dnd-helper oj-tree-" + this._data.themes.theme); 
        }

        dnd.cof    = cnt.offset();
        dnd.cw     = parseInt(cnt.width(),10);
        dnd.ch     = parseInt(cnt.height(),10);
        dnd.active = true;
     },


     /**
       *  @private
       */
     _drag_start : function (e, data, html)
     {  
         var ctl = this._data.dnd.ctl ;

         if (ctl.is_drag)  {
           this._drag_stop() ;
         }
         try {
               e.currentTarget.unselectable = "on";
               e.currentTarget.onselectstart = function()  { return false; };

               if (e.currentTarget.style)  {
                e.currentTarget.style.MozUserSelect = "none";
               }
         } catch(err) { }

         ctl.init_x    = e.pageX;
         ctl.init_y    = e.pageY;
         ctl.user_data = data;
         ctl.is_down   = true;
         ctl.helper    = $("<div id='ojtreeu-dragged' />").html(html); //.fadeTo(10,0.25);

         $(document).bind("mousemove", this._drag.bind(this));
         $(document).bind("mouseup",   this._drag_stop.bind(this));

         return false;
     },


     /**
       *  @private
       */
     _drag :  function (e)
     { 
        var ctl  = this._data.dnd.ctl,
            vars = this._data.dnd.vars ;

        if (! ctl.is_down) {
          return;
        }
        if (! ctl.is_drag)  {
          if (Math.abs(e.pageX - ctl.init_x) > 5 || Math.abs(e.pageY - ctl.init_y) > 5)  { 
            ctl.helper.appendTo("body");
            ctl.is_drag = true;
            $(document).triggerHandler("drag_start.ojtreeu", [{
                                                                 "event" : e,
                                                                 "data" : ctl.user_data
                                                               }]);
          }
          else  {
               return;
          }
        }


        // maybe use a scrolling parent element instead of document?
        if (e.type === "mousemove")
        {   // thought of adding scroll in order to move the helper, but mouse position is n/a
           var d = $(document),
               t = d.scrollTop(),
               l = d.scrollLeft();

           if (e.pageY - t < 20)  { 
             if (vars.sti && vars.dir1 === "down") {
                clearInterval(vars.sti);
                vars.sti = undefined;
             }
             if (! vars.sti)  {
               vars.dir1 = "up";
               vars.sti = setInterval(function ()
                            {
                              $(document).scrollTop( $(document).scrollTop() - ctl.scroll_spd );
                            }, 150);
             }
           }
           else  { 
              if (vars.sti && vars.dir1 === "up")   {
                clearInterval(vars.sti);
                vars.sti = undefined;
              }
           }

           if ($(window).height() - (e.pageY - t) < 20)   {
             if (vars.sti && vars.dir1 === "up")  {
                clearInterval(vars.sti);
                vars.sti = undefined;
             }
             if (! vars.sti)  {
               vars.dir1 = "down";
               vars.sti = setInterval(function ()
                         {
                           $(document).scrollTop( Number($(document).scrollTop()) + ctl.scroll_spd );
                           // above Number() is for the closure compiler!!
                         }, 150);
             }
           }
           else   { 
              if (vars.sti && vars.dir1 === "down")  {
                clearInterval(vars.sti);
                vars.sti = undefined;
              }
           }

           if (e.pageX - l < 20)   {
             if (vars.sli && vars.dir2 === "right")  {
                clearInterval(vars.sli);
                vars.sli = undefined;
             }
             if (! vars.sli)  {
                vars.dir2 = "left";
                vars.sli = setInterval(function ()
                       {
                         $(document).scrollLeft( $(document).scrollLeft() - ctl.scroll_spd );
                       }, 150);
             }
           }
           else   { 
             if (vars.sli && vars.dir2 === "left")   {
               clearInterval(vars.sli);
               vars.sli = undefined;
             }
           }

           if ($(window).width() - (e.pageX - l) < 20)   {
             if (vars.sli && vars.dir2 === "left")  {
                clearInterval(vars.sli);
                vars.sli = undefined;
             }
             if (! vars.sli)   {
               vars.dir2 = "right";
               vars.sli = setInterval(function ()
                        {
//                        Nunmber() is for the closure compiler!!
                          $(document).scrollLeft(Number($(document).scrollLeft()) + ctl.scroll_spd);
                        }, 150);
             }
           }
           else  { 
             if (vars.sli && vars.dir2 === "right")  {
               clearInterval(vars.sli);
               vars.sli = undefined;
             }
           }
        }

        ctl.helper.css({ left : (e.pageX + ctl.helper_left) + "px", top : (e.pageY + ctl.helper_top) + "px" });
        $(document).triggerHandler("drag.ojtreeu", [{
                                                      "event" : e,
                                                      "data"  : ctl.user_data
                                                     }]);
     },


     /**
       *  @private
       */
     _drag_stop  : function (e)
     {
        var vars = this._data.dnd.vars,
            ctl  = this._data.dnd.ctl ;

        if (vars.sli)  {
          clearInterval(vars.sli);
        }
        if (vars.sti)   {
          clearInterval(vars.sti);
        }

        $(document).unbind("mousemove", this._drag.bind(this));
        $(document).unbind("mouseup",   this._drag_stop.bind(this));
        $(document).triggerHandler("drag_stop.ojtreeu", [{
                                                           "event" : e? e: {},
                                                           "data"  : ctl.user_data
                                                          }]);
        ctl.helper.remove();
        ctl.init_x    = 0;
        ctl.init_y    = 0;
        ctl.user_data = {};
        ctl.is_down   = false;
        ctl.is_drag   = false;
    },


     /**
       *  @private
       */
     _save_opened : function ()
     {
        var _this = this;
        this._data.core.toExpand = [];
        this._$container_ul.find("li.oj-tree-open").each(function () { 
            if (this.id)  { 
              _this._data.core.toExpand.push("#" + this.id.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"));
            }
        });

        this._emitEvent(_this._data.core.toExpand, "save_opened");
     },


     /*
      *   Reload tree nodes
      *   @private
      */
      _reload_nodes : function (is_callback)
      {
         var _this     = this,
             done      = true,
             current   = [],
             remaining = [],
             ea,
             bExpandAll ;
     
         if (!is_callback)  { 
            this._data.core.reopen     = false; 
            this._data.core.refreshing = true; 

            bExpandAll = this._data.core.toExpand === "all" ;
            if (bExpandAll) {
              this._data.core.toExpand  = [];
            }
            else  if (($.type(this._data.core.toExpand) === "array") && (this._data.core.toExpand.length > 0) &&
                                                                        (this._data.core.toExpand[0] === "all")) {
              this._data.core.toExpand.length = 0 ;
              bExpandAll = true ;
            }

            if (bExpandAll) {
              ea = this._$container_ul.find("li.oj-tree-closed").each(function() {
                     var id = $(this).attr("id") ;
                     _this._data.core.toExpand.push('#' + $(this).attr("id")) ;
                   }) ;
            }
     
            this._data.core.toExpand = 
                     $.map(
                            $.makeArray(this._data.core.toExpand),
                                function (n) {
                                   return "#" + n.toString().replace(/^#/, "")
                                                            .replace(/\\\//g, "/")
                                                            .replace(/\//g, "\\\/")
                                                            .replace(/\\\./g, ".")
                                                            .replace(/\./g, "\\.")
                                                            .replace(/\:/g, "\\:");
                                }
                          );
     
            this._data.core.toLoad = 
                       $.map(
                              $.makeArray(this._data.core.toLoad),
                                  function (n)  {
                                     return "#" + n.toString().replace(/^#/,"")
                                                              .replace(/\\\//g,"/")
                                                              .replace(/\//g,"\\\/")
                                                              .replace(/\\\./g,".")
                                                              .replace(/\./g,"\\.")
                                                              .replace(/\:/g,"\\:");
                            }
                       );
     
            if (this._data.core.toExpand.length)  {
              this._data.core.toLoad  = this._data.core.toLoad.concat(this._data.core.toExpand);
            }
         }
     
         if (this._data.core.toLoad.length) {
            $.each(this._data.core.toLoad, function (i, val) {
                if (val == "#") {
                  return true;
                }
                if ($(val).length) {
                  current.push(val);
                }
                else {
                  remaining.push(val);
                }
            });
     
            if (current.length) {
               this._data.core.toLoad  =  remaining;
               $.each(current, function (i, val) { 
                   if (! _this._is_loaded(val))  {
                      _this._load_node(val, function ()  {
                                               _this._reload_nodes(true);
                                             }, function ()  {
                                                 _this._reload_nodes(true);
                                                }
                                      );
                      done = false;
                   }
               });
            }
         }

         if (this._data.core.toExpand.length)
         {
            $.each(this._data.core.toExpand, function (i, val) {
                 _this["expand"](val, false, true); 
            });
         }

         if (done)  { 
            // TODO: find a more elegant approach to syncronizing returning requests

            if (this._data.core.reopen)  {
              clearTimeout(this._data.core.reopen);
            }
            this._data.core.reopen = setTimeout(function ()  {
                                                   _this._emitEvent({}, "reload_nodes");
                                               }, 50);

            this._data.core.refreshing = false;
            this._reopen();
         }
    },


     /*
      *   TDO   replace with Jet theming.
      *   @private
      */
    "set_theme" : function (theme_name, theme_url)
    {
       if (! theme_name)  {
         return false;
       }

       if (! theme_url)  {
          theme_url = this._data.themes._themes + theme_name + '/style.css';
       }

       if ($.inArray(theme_url, this._data.themes.themes_loaded) == -1)  {
         _addSheet({ url : theme_url });
         this._data.themes.themes_loaded.push(theme_url);
       }

       if (this._data.themes.theme != theme_name)  {
         this._$container.removeClass('oj-tree-' + this._data.themes.theme);
         this._data.themes.theme = theme_name;
       }

       this._$container.addClass('oj-tree-' + theme_name);

       if (! this._data.themes.dots) {
         this["hide_dots"]();
       }
       else  {
          this["show_dots"]();
       }

       if (! this._data.themes.icons)  {
         this["hide_icons"]();
       }
       else  {
         this["show_icons"]();
       }
 
       this._emitEvent(null, "set_theme");

    },


    /*
     *   Shows the hierarchy lines.  Not used in V1
     *   @private
     */
    "show_dots"  : function ()
    {
      this._data.themes.dots = true;
      this._$container.children("ul").removeClass("oj-tree-no-dots");
    },

    /*
     *   Hides the hierarchy lines.  Not used in V1
     *   @private
     */
    "hide_dots"   : function ()
    {
      this._data.themes.dots = false;
      this._$container.children("ul").addClass("oj-tree-no-dots");
    },

    /*
     *   Toggles the current hierarchy line state.  Not used in V1
     *   @private
     */
    "toggle_dots" : function ()
    {
       if (this._data.themes.dots) {
         this["hide_dots"]();
       }
       else  {
         this["show_dots"]();
       }
    },

    /*
     *   Returns true if node icons are currently displayed.  Users can find this state from options.
     *   @private
     */
    "isIcons"  : function ()
    {
       return this._data.themes.icons ;
    },


    /*
     *   Displays node icons. Users can set this state from options.
     *   @private
     */
    "show_icons"  : function ()
    {
       this._data.themes.icons = true;
       this._$container.children("ul").removeClass("oj-tree-no-icons");
    },

    /*
     *   Hides node icons. Users can set this state from options.
     *   @private
     */
    "hide_icons"  : function ()
    {
       this._data.themes.icons = false;
       this._$container.children("ul").addClass("oj-tree-no-icons");
    },

    /*
     *   Toggles the display state of node icons. User can set this state from options.
     *   @private
     */
    "toggle_icons" : function ()
    {
       if (this.data.themes.icons) {
         this["hide_icons"]();
       }
       else  {
         this["show_icons"]();
       }
    },


    /**
      *  Dispatches a key stroke from the HotKeys plugin
      *  @private
      */
    _execKey : function(t, key, event)
    {
//wed5  var f = $.ojTreex._focused(),
//        var f = $.ojTreex["_focused"](),
       var tmp;

       if (t._data.keys.enabled) {
//     if (f && f["data"] && f["data"]["hotkeys"] && f["data"]["hotkeys"]["enabled"]) {

//       tmp = f._get_settings()["hotkeys"][i];
         tmp = t._keyHandler[key];
         if (tmp) {
            return tmp.call(t, event);
         }
        }
    },


    /**
      *   Enables keyboard support
      *   @private
      */
    _enableKeys : function ()
    {
       this._data.keys.enabled = true;
    },

    /**
      *   Disables keyboard support
      *   @private
      */
    _disableKeys : function ()
    {
       this._data.keys.enabled = false;
    },


    /**
      *   Initializes the widget, examining options and setting up
      *   internal data structures.
      *   @private
      */
     _initWidget : function()
     {
        this._initData() ;
        this._initCoreOpts() ;
        this._initUIOpts() ;
        this._initCrrmOpts() ;
        this._initThemeOpts()
        this._initJsonOpts() ;
        this._initHtmlOpts() ;
        this._initTypeOpts()
        this._initDnDOpts() ;
        this._initMenuOpts() ;

        this._initCore() ;
        this._initUI() ;
        this._initThemes() ;
        this._initJsonData() ;
        this._initHtmlData() ;
//        this._initCrrm() ;
        this._initTypes() ;
        this._initDnD() ;
        this._initKeys() ;
        this._initMenu() ;

        this._start() ;
     },


     /**
       *   Emit events
       *   @param {Object} data an object containing details about the event.
       *   @param {string} eventname the raw event name (e.g. "select")
       *   @private
       */
     _emitEvent : function (data, eventname) 
     { 
        if ((! eventname) || $.type(eventname) !== "string"){
          return ;
        } 

        var rslt,
            func,
            args     = Array.prototype.slice.call(arguments),
            rlbk     = false,
            evname   = eventname,
            inst     = this._$container,
            isBefore = (eventname === "before"),
            isPublic = false,
            item ;

        if ((this._data.core.locked === true) && (eventname !== "unlock")
                                              && (eventname !== "isLocked")
                                              && (eventname !== "lock")) {
            return;
        }

        if (!isBefore) {
          evname   =  _convertEventName(eventname) ;
          isPublic =  _isPublicEvent(evname) ;
        }
        if (! isPublic) {
          evname = "tree" + evname ;        // internal event
        }

        item = (data? data["obj"] : undefined) ;
        if (evname === "loaded") {
          item = -1 ;
        }

        //  Trigger the event

        var eventdata = {} ;                     // build the "ui" argument
        eventdata["item"] = item ;
        eventdata["inst"] = inst ;

        if (isBefore) {
          eventdata["func"]  = data["func"] ;      // position relative to the reference node
          eventdata["args"]  = args ;
        }
        else  if (isPublic) {
          if (evname == "move") {
            eventdata["position"]  = data.p ;      // position relative to the reference node
            eventdata["reference"] = data.r ;      // the reference node
            eventdata["data"]      = data ;        // (req'd internally)
          }
          else if (evname == "rename") {
            eventdata["title"] = data["name"] ;    // the new node title
            delete eventdata["name"] ;
          }
          else if (evname == "remove") {            // node was deleted via context menu
            eventdata["parent"]  = data["parent"] ; // parent node
            eventdata["prev"]    = data["prev"] ;   // the "previous" node
          }
          else if (evname == "delete") {            // node was deleted via context menu
            eventdata["prev"]   = data["prev"] ;    // (req'd internally) - the "previous" node
            eventdata["parent"] = data["parent"] ;  // parent node
          }
        }

        console.log("JRM-> Event (" + eventname + ")  " + evname + " isPublic=" + isPublic +
                                   (isBefore? (" isBefore=true - " + eventdata["func"]) : ""));

        if (isPublic) {
          rslt = this._trigger(evname, new $.Event("oj" + evname), eventdata) ;

          if (isBefore) {
            if (typeof rslt != "undefined") {
              rslt = rslt? true : false ;         // returns true/false/undefined
            }
            return rslt ;
          }
        }
        else {
          this._$container.trigger(evname, eventdata) ;    // internal event
        }
        
     },





     /**
       *  TDO _not currently used in V1
       *  @private
       */
     __rollback : function ()
     { 
         var
         rlbk = this["get_rollback"]();
         return rlbk;
     },


     /**
       *   To Be Removed  TDO 
       *   @private
       */
     __call_old : function (replace_arguments)
     {
//       return func.old.apply(this, (replace_arguments ? Array.prototype.slice.call(arguments, 1) : args ) );
     },

     /*
      *  Initialization complete.  Build and render the tree.
      *  @private
      */
     _start : function()
     {
       this.set_focus(); 

       if (this._isRtl) {
         this._$container.addClass("oj-tree-rtl").css("direction", "rtl");
       }

       this._$container.html("<ul role='tree' tabindex='0' class='oj-tree-list' style='outline:none'" + 
                    ((this._data.core.selectMode === -1)? " aria-multiselectable='true'" : "") +
                    "><li class='oj-tree-last oj-tree-leaf'><ins>&#160;</ins><a class='oj-tree-loading' href='#'><ins class='oj-tree-icon'>&#160;</ins>" + this.getTranslatedString("m_loading") + "</a></li></ul>");
       this._$container_ul = this._$container.children("ul:eq(0)");

       this._$container.data("oj-tree-instance-id", this._getIndex());

       this._data.core.li_height = this._$container_ul.find("li.oj-tree-closed, li.oj-tree-leaf").eq(0).height() || 18;

       this._$container
              .delegate(".oj-tree-list li > ins", "click.ojtree", $.proxy(function (event)  {
                     var trgt = $(event.target);
                     // if(trgt.is("ins") && event.pageY - trgt.offset().top < this.data.core.li_height) { this.toggle_node(trgt); }
                     this["toggleExpand"](trgt);
                }, this))
              .bind("mousedown.ojtree", $.proxy(function ()  { 
                     this.set_focus(); // This used to be setTimeout(set_focus,0) - why?
                }, this))
              .bind("dblclick.ojtree", function (event)  { 
                     var sel;
                     if (document.selection && document.selection.empty) {
                       document.selection.empty();
                     }
                     else  {
                       if (window.getSelection)  {
                         sel = window.getSelection();
                         try { 
                               sel.removeAllRanges();
                               sel["collapse"](document.getElementsByTagName("body")[0], 0);
                             } catch (err) { }
                       }
                     }
                });

       if (this._data.core.notify_plugins)  {          // TDO is it needed
         this._$container
             .bind("treeload_node", $.proxy(function (e, ui)  { 
                  var o = this._getNode(ui["item"]),
                      t = this;
                  if (o === -1)  {
                    o = this._$container_ul;
                  }
                  if (! o.length)  {
                    return;
                  }

                  o.find("li").each(function ()  {
                       var th = $(this);
                       if (th.data("oj-tree"))
                       {
                         $.each(/** @type {Array} */(th.data("oj-tree")), function (plugin, values)
//COD                    $.each(th.data("oj-tree"), function (plugin, values)
                            {
//Fri                          if (t.data[plugin] && $.isFunction(t["_" + plugin + "_notify"]))
//Sat22                        if (t["data"][plugin] && $.isFunction(t["_" + plugin + "_notify"]))
                               if (th["data"][plugin] && $.isFunction(t["_" + plugin + "_notify"]))   //TDO
                               {
                                 t["_" + plugin + "_notify"].call(t, th, values);
                               }
                            });
                       }
                  });

             }, this));
       }

       if (this._data.core.load_open)   {

         this._$container
            .bind("treeload_node", $.proxy(function (e, ui)  { 
                 var o = this._getNode(ui["item"]),
                     t = this;
                 if (o === -1)  {
                   o = this._$container_ul;
                 }
                 if (!o.length)  {
                   return;
                 }
                 o.find("li.oj-tree-open:not(:has(ul))").each(function ()
                     {
                        this._load_node(this, $.noop, $.noop);
                 });
            }, this));
       }

       this._emitEvent({}, "init");

       this._load_node(-1, function ()  {
                             this._loaded();
                             this._reload_nodes();
                           });
     },



     /*
      *  Initialize the Core section
      *  @private
      */ 
     _initCore : function()
     {
       //  Update the default menu html with localized text

       if (! _translated) {
         _defaultMenu = _defaultMenu.replace("{create}", this.getTranslatedString("m_create")) ;
         _defaultMenu = _defaultMenu.replace("{rename}", this.getTranslatedString("m_rename")) ;
         _defaultMenu = _defaultMenu.replace("{remove}", this.getTranslatedString("m_remove")) ;
         _defaultMenu = _defaultMenu.replace("{edit}",   this.getTranslatedString("m_edit")) ;
         _defaultMenu = _defaultMenu.replace("{cut}",    this.getTranslatedString("m_cut")) ;
         _defaultMenu = _defaultMenu.replace("{copy}",   this.getTranslatedString("m_copy")) ;
         _defaultMenu = _defaultMenu.replace("{paste}",  this.getTranslatedString("m_paste")) ;
         _translated = true ;
       }

       this._data.core.locked   = false;

       this._$container.addClass("oj-tree oj-tree-" + this._getIndex()) ;     //TDO TDO

       this._$container.css("outline", "none");
       this._$container.css("MozUserSelect", "none");
       this._$container.css("WebkitTouchCallout", "none");
       this._$container.css("WebkitUserSelect", "none");
       this._$container.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
     },


    /*
     *  Initialize the UI section
     *  @private
     */
     _initUI : function() 
     {
         this._data.ui.selected      = $(); 
         this._data.ui.last_selected = false; 
         this._data.ui.hovered       = null;
//       this._data.ui.to_select     = this.options["initSelected"];  // removed per Design Review

        // Bind to events
        this._$container
             .delegate(".oj-tree-list a", "click.ojtree", $.proxy(function (event)
                {
                  event.preventDefault();
                  event.currentTarget.blur();
                  if (!$(event.currentTarget).hasClass("oj-tree-loading"))  {
                    this._select(event.currentTarget, true, event);
                  }
                }, this))
             .delegate(".oj-tree-list a", "mouseenter.ojtree", $.proxy(function (event)
                {
                  if (! $(event.currentTarget).hasClass("oj-tree-loading"))  {
                     this["hover"](event.target);
                  }
                }, this))
             .delegate(".oj-tree-list a", "mouseleave.ojtree", $.proxy(function (event)
               {
                  if (! $(event.currentTarget).hasClass("oj-tree-loading"))  {
                    this["dehover"](event.target);
                  }
               }, this))
             .bind("treereopen", $.proxy(function ()
               { 
                 this["reselect"]();
               }, this))
             .bind("treeget_rollback", $.proxy(function ()
               { 
                  this["dehover"]();
                  this["save_selected"]();
               }, this))
             .bind("treeset_rollback", $.proxy(function ()
               { 
                  this["reselect"]();
               }, this))
             .bind("ojcollapse", $.proxy(function (event, ui)
              { 
                var obj   = this._getNode(ui["item"]),
                    clk   = (obj && obj.length) ? obj.children("ul").find("a.oj-tree-clicked") : $(),
                    _this = this;
                if (this.options["selectedParentCollapse"] === false || (! clk.length))  {
                  return;
                }
                clk.each(function ()  { 
                               this["deselect"](this);
                               if (this.options["selectedParentCollapse"] === "selectParent")  {
                                  this["select"](obj);
                               }
                         });
                 }, this))
             .bind("ojdelete", $.proxy(function (event, ui)         // delete node
                { 
                   var s     = this.options["selectPrevOnDelete"],
                       obj   = this._getNode(ui["item"]),
                       clk   = (obj && obj.length) ? obj.find("a.oj-tree-clicked") : [],
                       _this = this;

                     clk.each(function ()
                                {
                                   _this["deselect"](this);
                                });
                     if (s && clk.length)
                     { 
                       ui["prev"].each(function ()
                          { 
//Wed3                      if(this.parentNode)
                            if (this["parentNode"])
                            {
                              _this["select"](this);
                              return false;   // if return false is removed all prev nodes will be selected 
                            }
                         });
                     }
                 }, this))
             .bind("ojmove", $.proxy(function (event, ui)
                { 
                   var data = ui["data"] ;
                   if (data["cy"])  { 
                     data["oc"].find("a.oj-tree-clicked").removeClass("oj-tree-clicked");
                     data["oc"].removeAttr("aria-selected");
                   }
                 }, this));

     },


     /*
      *  Initialize the json_data section if requested
      *  @private
      */
     _initJsonData : function()
     {
        var s = this.options["json_data"];
        if (! s) {
          return ;
        }

        if (s["progressive_unload"])  {
           this._$container.bind("treeafter_close", function (e, ui)  {
                                    ui["item"].children("ul").remove();
                                  });
        }

        this._load_node  = this._load_node_J ;
        this._is_loaded  = this._is_loaded_J ;
        this._refresh    = this._refresh_json ;
     },


     /**
       *  Initialize html_data support if requested.
       *  @private
       */
     _initHtmlData : function()
     {
       var opts =  this.options["html_data"],
           ot  = $.type(opts) ;

       if (ot == "undefined" || (ot == "boolean" && !opts)) {
         return ;
       }

       if (ot == "boolean" || ot =="object") {
         this._data.html.useExistingMarkup = true ;

         // this used to use html() and clean the whitespace, but this way any attached data was lost

         this._data.html.originalContainerHtml = this._$container.find(" > ul > li").clone(true);
         // remove white space from LI node - otherwise nodes appear a bit to the right
         this._data.html.originalContainerHtml.find("li").addBack().contents().filter(function()
                                                               { return this.nodeType == 3;
                                                               }).remove();
         this._load_node = this._load_node_H ;
         this._is_loaded = this._is_loaded_H ;
         this._refresh   = this._refresh_ui ;
       }
     },


     /*
      *  Initialize the Themes section   -  TDO replace with Jet functionality
      *  @private
      */
     _initThemes : function()
     {
        // autodetect themes path
        if (this._data.themes._themes === false)  {
           $("script").each(function ()
            { 
              if( this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/))  { 
                 this._data.themes._themes = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + 'themes/'; 
                 return false; 
              }
            });
        }
        if (this._data.themes._themes === false)    {
          this._data.themes._themes = "themes/";
        }

        this._$container
             .bind("treeinit", $.proxy(function ()
                {
                   var s = this.options ;

                   this._data.themes.dots  = s["dots"]; 
                   this._data.themes.icons = s["icons"]; 
                   this["set_theme"](this._data.themes.theme, this._data.themes.url);

                }, this))

             .bind("ojloaded", $.proxy(function ()
                {
                   // bound here too, as simple HTML tree's won't honor dots & icons otherwise
                   if (! this._data.themes.dots)  {
                     this["hide_dots"]();
                   }
                   else  {
                     this["show_dots"]();
                   }
                   if (!this._data.themes.icons)  {
                     this["hide_icons"]();
                   }
                   else  {
                     this["show_icons"]();
                   }
                }, this));

     },


     /*
      *  Initialize the folder type functionality
      *  @private
      */
     _initTypes : function()
     {
        var s = this.options["types"];
        if (! s) {
          return ;
        }

        this._$container
               .bind("treeinit", $.proxy(function ()
                  { 
                    var types = s["types"], 
                        attr  = s["attr"] || this._data.types.defaults["type_attr"],
                        icons_css = "", 
                        _this = this;

                    $.each(types, function (i, tp)
                       {
                         $.each(tp, function (k, v)
                            { 
                              if (!/^(max_depth|max_children|icon|valid_children)$/.test(k))  {
                                _this._data.types.attach_to.push(k);
                              }
                            });

//JRM                    if(!tp.icon) { return true; }

                         // For ojTree we allow image and position props to not
                         // have to be in an icon object
                         if (! tp["icon"]) {
                           if ((! tp["image"]) && (! tp["position"])) {
                             return true;
                           }
                           else  {
                             tp["icon"] = {} ;

                             if (tp["image"])  {
                               tp["icon"]["image"] = tp["image"]; 
                               delete tp["image"] ;
                             } 

                             if (tp["position"] !== undefined)  {
                               tp["icon"]["position"] = tp["position"] ;
                               delete tp["position"] ;
                             }
                           }
                         }    

                         if ( tp["icon"]["image"] || tp["icon"]["position"])  {
                           if (i == "default")  {
                             icons_css += '.oj-tree-' + _this._getIndex() + ' a > .oj-tree-icon { ';
                           }
                           else  {
                              icons_css += '.oj-tree-' + _this._getIndex() + ' li[' + attr + '="' + i + '"] > a > .oj-tree-icon { ';
                           }

                           if (tp["icon"]["image"])  {
                             icons_css += ' background-image:url(' + tp["icon"]["image"] + '); ';
                           }

                           if (tp["icon"]["position"])  {
                             icons_css += ' background-position:' + tp["icon"]["position"] + '; ';
                           }
                           else  {
                             icons_css += ' background-position:0 0; ';
                           }
                           icons_css += '} ';
                         }
                       });

                    if (icons_css !== "")  {
                      _addSheet({ str : icons_css, title : "oj-tree-types" });
                    }
                   }, this))
               .bind("ojbefore", $.proxy(function (e, data)
                  { 
                     /** @type {Object} */
                     var s;
                     var t, 
                         o = this.options["types"]["use_data"] ? this._getNode(data["args"][0]) : false, 
                         d = o && o !== -1 && o.length ? o.data("oj-tree") : false;

                     if (d && d["types"] && d["types"]["data"]["func"] === false)
                     {
                       e.stopImmediatePropagation();
                       return false;
                     }
                     if ($.inArray(data["func"], this._data.types.attach_to) !== -1)
                     {
//wed5                 if (!data.args[0] || (!data.args[0].tagName && !data.args[0].jquery))
                       if (!data["args"][0] || (!data["args"][0]["tagName"] && !data["args"][0]["jquery"]))  {
                          return;
                       }
                       s = this.options["types"]["types"];
                       t = this._getType(data["args"][0]);

                       if (( (s[t] && typeof s[t][data["func"]] !== "undefined") || 
//wed5                        (s["default"] && typeof s["default"][data.func] !== "undefined") 
                              (s["default"] && typeof s["default"][data["func"]] !== "undefined") 
//wed5                      ) && this._check(data.func, data.args[0]) === false
//Fri3                      ) && this._check(data["func"], data["args"][0]) === false)
                            ) && this["_check"](data["func"], data["args"][0]) === false)  {
                         e.stopImmediatePropagation();
                         return false;
                       }
                     }

                  }, this));
     },


     /*
      *  Initialize Drag and Drop functionality.  TDO - this will change when the JET support is available.
      *  @private
      */
     _initDnD : function()
     {
        if (! this._data.dnd.reorder) {          // only handling a temporary version
          return ;                               // of Dnd for reorder within the tree.
        }
  
        var css_str ;
        css_str = '#ojtreeu-dragged { display:block; margin:0 0 0 0; padding:4px 4px 4px 24px; position:absolute; top:-2000px; line-height:16px; z-index:10000; } ' +
        '#ojtreeu-dragged ins { display:block; text-decoration:none; width:16px; height:16px; margin:0 0 0 0; padding:0; position:absolute; top:4px; left:4px; ' + 
        ' -moz-border-radius:4px; border-radius:4px; -webkit-border-radius:4px; } ' + 
        '#oj-tree-marker { padding:0; margin:0; font-size:12px; overflow:hidden; height:12px; width:8px; position:absolute; top:-30px; z-index:10001; background-repeat:no-repeat; display:none; background-color:transparent; text-shadow:1px 1px 1px white; color:black; line-height:10px; background:url("css/libs/oj/v1.0/alta/images/d.png") -41px -57px no-repeat !important; text-indent:-100px; } ' + 
        '#ojtreeu-dragged .oj-tree-ok { background:url("css/libs/oj/v1.0/alta/images/d.png") -2px -53px no-repeat !important; } ' + 
        '#ojtreeu-dragged .oj-tree-invalid { background:url("css/libs/oj/v1.0/alta/images/d.png") -18px -53px no-repeat !important; } ' + 
        '#oj-tree-marker-line { padding:0; margin:0; line-height:0%; font-size:1px; overflow:hidden; height:1px; width:100px; position:absolute; top:-30px; z-index:10000; background-repeat:no-repeat; display:none; background-color:#456c43; ' + 
        ' cursor:pointer; border:1px solid #eeeeee; border-left:0; -moz-box-shadow: 0px 0px 2px #666; -webkit-box-shadow: 0px 0px 2px #666; box-shadow: 0px 0px 2px #666; ' + 
        ' -moz-border-radius:1px; border-radius:1px; -webkit-border-radius:1px; ' +
        '}' + 
        '';

        _addSheet({ str : css_str, title : "oj-tree" }, true);       //TDO REMOVE

        var vars = this._data.dnd.vars ;

        vars.m = $("<div />").attr({ id : "oj-tree-marker" }).hide().html("&raquo;")   // dnd marker div
            .bind("mouseleave mouseenter", $.proxy(function (e) { 

                var vars = this._data.dnd.vars ;
                vars.m.hide();
                vars.ml.hide();
                e.preventDefault(); 
                e.stopImmediatePropagation(); 
                return false; 
            }, this))
            .appendTo("body");

        vars.ml = $("<div />").attr({ id : "oj-tree-marker-line" }).hide()             // dnd marker line
            .bind("mouseup", function (e) { 

               var vars = this._data.dnd.vars ;

               if (vars.r && vars.r.length) { 
                  vars.r.children("a").trigger(e); 
                  e.preventDefault(); 
                  e.stopImmediatePropagation(); 
                  return false; 
               } 
            })
            .bind("mouseleave", $.proxy(function (e)  { 

                var vars = this._data.dnd.vars ;
                var rt = $(e.relatedTarget);

                if (rt.is(".oj-tree") || rt.closest(".oj-tree").length === 0) {
                    if (vars.r && vars.r.length) { 
                        vars.r.children("a").trigger(e); 
                        vars.m.hide();
                        vars.ml.hide();
                        e.preventDefault(); 
                        e.stopImmediatePropagation(); 
                        return false; 
                    }
                }
            }, this))
            .appendTo("body");

        $(document).bind("drag_start.ojtreeu", $.proxy(function (e, data)
            {
             var vars = this._data.dnd.vars ;

             if (data.data.jstree)  {
                vars.m.show();
                if (vars.ml)  {
                   vars.ml.show();
                 }
             }
           }, this));

        $(document).bind("drag_stop.ojtreeu", $.proxy(function (e, data)
           {
              var vars = this._data.dnd.vars ;

              if (data.data.jstree)  {
                vars.m.hide();
                if (vars.ml) {
                  vars.ml.hide();
                }
              }
           }, this));

        this._getContainer()
            .bind("mouseenter.ojtree", $.proxy(function (e)
                {
                  var  ctl  = this._data.dnd.ctl,
                       vars = this._data.dnd.vars ;

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                    if (this.options["themes"]) {
                      vars.m.attr("class", "oj-tree-" + this._data.themes.theme); 
                      if (vars.ml) {
                        vars.ml.attr("class", "oj-tree-" + this._data.themes.theme);
                      }
                      ctl.helper.attr("class", "oj-tree-dnd-helper oj-tree-" + this._data.themes.theme);
                    }
                      //if($(e.currentTarget).find("> ul > li").length === 0) {
                    if (e.currentTarget === e.target && ctl.user_data.obj &&
                        $(ctl.user_data.obj).length && $(ctl.user_data.obj).parents(".oj-tree:eq(0)")[0] !== e.target)
                    {
                      // node should not be from the same tree
                      var tr = this._reference(e.target),   //TDO
                          dc;

                      if (tr.data.dnd.foreign) {
                        dc = tr.options["dnd"]["drag_check"].call(this, { "o" : vars.o, "r" : tr._getContainer(), "is_root" : true });
                         if (dc === true || dc["inside"] === true || dc["before"] === true || dc["after"] === true)  {
                           ctl.helper.children("ins").attr("class","oj-tree-ok");
                         }
                      }
                      else {
                         tr._prepare_move(vars.o, tr._getContainer(), "last");
                         if (tr["check_move"]()) {
                           ctl.helper.children("ins").attr("class","oj-tree-ok");
                         }
                      }
                    }
                  }
                 }, this))
            .bind("mouseup.ojtree", $.proxy(function (e)
               {
                  var vars = this._data.dnd.vars,
                      ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (ctl.is_drag && ctl.user_data.jstree && e.currentTarget === e.target  &&
                                     ctl.user_data.obj    && $(ctl.user_data.obj).length   &&
                                     $(ctl.user_data.obj).parents(".oj-tree:eq(0)")[0] !== e.target)
                  {  // node should not be from the same tree
                      var tr = this._reference(e["currentTarget"]),
                          dc;
                      if (tr["data"]["dnd"]["foreign"])  {
                        dc = tr._getOptions()["dnd"]["drag_check"].call(this, { "o" : vars.o, "r" : tr._getContainer(), "is_root" : true });
                        if (dc === true || dc["inside"] === true || dc["before"] === true || dc["after"] === true)
                        {
                           tr._getOptions()["dnd"]["drag_finish"].call(this, { "o" : vars.o, "r" : tr._getContainer(), "is_root" : true });
                        }
                      }
                      else  {
                         tr._move_node(vars.o, tr._getContainer(), "last", e[tr.options["dnd"]["copy_modifier"] + "Key"]);
                      }
                  }
                 }, this))
            .bind("mouseleave.ojtree", $.proxy(function (e)
               {
                  var ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (e.relatedTarget && e.relatedTarget.id && e.relatedTarget.id === "oj-tree-marker-line")  {
                    return false; 
                  }
                  if (ctl.is_drag && ctl.user_data.jstree)  {
                    if (this._data.dnd.i1) {
                       clearInterval(this._data.dnd.i1);
                    }
                    if (this._data.dnd.i2) {
                      clearInterval(this._data.dnd.i2);
                    }
                    if (this._data.dnd.to1)  {
                      clearTimeout(this._data.dnd.to1);
                    }
                    if (this._data.dnd.to2) {
                      clearTimeout(this._data.dnd.to2);
                    }
                    if (ctl.helper.children("ins").hasClass("oj-tree-ok"))  {
                       ctl.helper.children("ins").attr("class","oj-tree-invalid");
                    }
                  }
                }, this))
            .bind("mousemove.ojtree", $.proxy(function (e)
               {
                  var ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (ctl.is_drag && ctl.user_data.jstree) {
                    var cnt = this._getContainer()[0];

                    // Horizontal scroll
                    if (e.pageX + 24 > this._data.dnd.cof.left + this._data.dnd.cw) {
                      if (this._data.dnd.i1) {
                        clearInterval(this._data.dnd.i1);
                      }
                      this._data.dnd.i1 = setInterval($.proxy(function () {
                                                   this.scrollLeft += ctl.scroll_spd;
                                                 }, cnt), 100);
                    }
                    else if (e.pageX - 24 < this._data.dnd.cof.left)  {
                      if (this._data.dnd.i1) {
                        clearInterval(this._data.dnd.i1);
                      }
                      this._data.dnd.i1 = setInterval($.proxy(function () {
                                                this.scrollLeft -= ctl.scroll_spd;
                                              }, cnt), 100);
                    }
                    else   {
                      if (this._data.dnd.i1)  {
                        clearInterval(this._data.dnd.i1);
                      }
                    }

                    // Vertical scroll
                    if (e.pageY + 24 > this._data.dnd.cof.top + this._data.dnd.ch)  {
                      if (this._data.dnd.i2)  {
                        clearInterval(this._data.dnd.i2);
                      }
                      this._data.dnd.i2 = setInterval($.proxy(function () {
                                                this.scrollTop += ctl.scroll_spd;
                                             }, cnt), 100);
                    }
                    else if (e.pageY - 24 < this._data.dnd.cof.top) {
                        if (this._data.dnd.i2)  {
                          clearInterval(this._data.dnd.i2);
                        }
                        this._data.dnd.i2 = setInterval($.proxy(function () {
                                                 this.scrollTop -= ctl.scroll_spd;
                                               }, cnt), 100);
                    }
                    else   {
                       if (this._data.dnd.i2) {
                         clearInterval(this._data.dnd.i2);
                       }
                    }

                  }
                }, this))
            .bind("scroll.ojtree", $.proxy(function (e)
               { 
                  var ctl  = this._data.dnd.ctl,        // jsTree helper class
                      vars = this._data.dnd.vars ; 

                  if (ctl.is_drag && ctl.user_data.jstree && vars.m && vars.ml)  {
                     vars.m.hide();
                     vars.ml.hide();
                  }
                }, this))
            .delegate(".oj-tree-list a", "mousedown.ojtree", $.proxy(function (e)
                { 
                  if (e.which === 1) {
                    this._start_drag(e.currentTarget, e);
                    return false;
                  }
                }, this))
            .delegate(".oj-tree-list a", "mouseenter.ojtree", $.proxy(function (e)
                { 
                  var ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                    this._dnd_enter(e.currentTarget);
                  }
                }, this))
            .delegate(".oj-tree-list a", "mousemove.ojtree", $.proxy(function (e)
                { 
                  var  ctl  = this._data.dnd.ctl,       // jsTree helper class
                       vars = this._data.dnd.vars ;

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                     if (! vars.r || ! vars.r.length || vars.r.children("a")[0] !== e.currentTarget) {
                         this._dnd_enter(e.currentTarget);
                     }
                     if (typeof this._data.dnd.off.top === "undefined") {
                       this._data.dnd.off = $(e.target).offset();
                     }
                     if (typeof this._data.dnd.off.top === "undefined")  {
                       this._data.dnd.off = $(e.target).offset();
                     }

                     this._data.dnd.w = (e.pageY - (this._data.dnd.off.top || 0)) % this._data.core.li_height ;
                     this._data.dnd.w = (e.pageY - (this._data.dnd.off.top || 0)) % this._data.core.li_height ;

                     if (this._data.dnd.w < 0)   {
                       this._data.dnd.w += this._data.core.li_height;
                     }
                     this._dnd_show();
                  }
                }, this))
            .delegate(".oj-tree-list a", "mouseleave.ojtree", $.proxy(function (e)
                { 
                  var ctl  = this._data.dnd.ctl,        // jsTree helper class
                      vars = this._data.dnd.vars ;

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                     if (e.relatedTarget && e.relatedTarget.id
                                         && e.relatedTarget.id === "oj-tree-marker-line")  {
                       return false; 
                     }
                     if (vars.m) {
                        vars.m.hide();
                     }
                     if (vars.ml) {
                       vars.ml.hide();
                     }
                     /*
                     var ec = $(e.currentTarget).closest("li"), 
                         er = $(e.relatedTarget).closest("li");
                     if(er[0] !== ec.prev()[0] && er[0] !== ec.next()[0]) {
                         if(m) { m.hide(); }
                         if(ml) { ml.hide(); }
                     }
                     */

                     this._data.dnd.mto = setTimeout( (function (t) {
                                                         return function () {
                                                                   t._dnd_leave(e);
                                                                };
                                                       })(this), 0);
                  }
                }, this))
            .delegate(".oj-tree-list a", "mouseup.ojtree", $.proxy(function (e)
                { 
                  var ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                    this._dnd_finish(e);
                  }
                }, this));

            $(document)
                .bind("drag_stop.ojtreeu", $.proxy(function ()
                   {
                     var dnd  = this._data.dnd,
                         vars = this._data.dnd.vars ;

                     if (dnd.to1) {
                       clearTimeout(dnd.to1);
                     }
                     if (dnd.to2) {
                       clearTimeout(dnd.to2);
                     }
                     if (dnd.i1)  {
                       clearInterval(dnd.i1);
                     }
                     if (dnd.i2)  {
                       clearInterval(dnd.i2);
                     }

                     dnd["after"]   = false;
                     dnd["before"]  = false;
                     dnd["inside"]  = false;
                     dnd.off        = false;
                     dnd.prepared   = false;
                     dnd.w          = false;
                     dnd.to1        = false;
                     dnd.to2        = false;
                     dnd.i1         = false;
                     dnd.i2         = false;
                     dnd.active     = false;
                     dnd.foreign    = false;

                     if (vars.m) {
                       vars.m.css({ "top" : "-2000px" });
                     }
                     if (vars.ml) {
                       vars.ml.css({ "top" : "-2000px" });
                     }
                   }, this))
                .bind("drag_start.ojtreeu", $.proxy(function (e, data)
                   {
                      if (data.data.jstree) { 
                        var et = $(data.event.target);
                        if (et.closest(".jstree").hasClass("oj-tree-" + this._getIndex())) {
                          this._dnd_enter(et);
                        }
                      }
                   }, this));

                /*
                .bind("keydown.jstree-" + this.get_index() + " keyup.jstree-" + this.get_index(), $.proxy(function(e) {
                        if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && !this.data.dnd.foreign) {
                            var h = $.vakata.dnd.helper.children("ins");
                            if(e[this._get_settings().dnd.copy_modifier + "Key"] && h.hasClass("jstree-ok")) {
                                h.parent().html(h.parent().html().replace(/ \(Copy\)$/, "") + " (Copy)");
                            } 
                            else {
                                h.parent().html(h.parent().html().replace(/ \(Copy\)$/, ""));
                            }
                        }
                    }, this)); */



            var s = this.options["dnd"];
            if (s["drag_target"])
            {
               $(document)
                   .delegate(s["drag_target"], "mousedown.ojtree-" + this._getIndex(), $.proxy(function (e) {

                       var ctl  = this._data.dnd.ctl,
                           dnd  = this._data.dnd,
                           vars = this._data.dnd.vars ;

                       vars.o = e.target;

                       this._drag_start(e, { jstree : true,
                                             obj    : e.target
                                         }, "<ins class='oj-tree-icon'></ins>" + $(e.target).text());
                       if (this._data.themes) { 
                         if (vars.m) {
                            vars.m.attr("class", "oj-tree-" + this._data.themes.theme);
                         }
                         if (vars.m) {
                            vars.m.attr("class", "oj-tree-" + this._data.themes.theme);
                         }
                         if (vars.ml) {
                           vars.ml.attr("class", "oj-tree-" + this._data.themes.theme);
                         }
                         ctl.helper.attr("class", "oj-tree-dnd-helper oj-tree-" + this._data.themes.theme); 
                       }

                       ctl.helper.children("ins").attr("class","oj-tree-invalid");

                       var cnt     = this._getContainer();
                       dnd.cof     = cnt.offset();
                       dnd.cw      = parseInt(cnt.width(),10);
                       dnd.ch      = parseInt(cnt.height(),10);
                       dnd.foreign = true;
                       e.preventDefault();
                   }, this));
            }

            if (s["drop_target"])
            {
                $(document)
                    .delegate(s["drop_target"], "mouseenter.ojtreex-" + this._getIndex(), $.proxy(function (e)
                         {
                           var dnd  = this._data.dnd,
                               vars = this._data.dnd.vars ;

                           if (dnd.active && this.options["dnd"]["drop_check"].call(this, { "o" : vars.o, "r" : $(e.target), "e" : e }))
                           {
                              dnd.ctl.helper.children("ins").attr("class","oj-tree-ok");
                            }
                        }, this))
                    .delegate(s["drop_target"], "mouseleave.ojtree-" + this._getIndex(), $.proxy(function (e)
                        {
                           if (this._data.dnd.active)  {
                             this._data.dnd.ctl.helper.children("ins").attr("class","oj-tree-invalid");
                            }
                        }, this))
                    .delegate(s["drop_target"], "mouseup.ojtreex-" + this._getIndex(), $.proxy(function (e)
                       {
                         var vars = this._data.dnd.vars ;

                         if (this._data.dnd.active && this._data.dnd.ctl.helper.children("ins").hasClass("oj-tree-ok"))  {
                           this.options["dnd"]["drop_finish"].call(this, { "o" : vars.o, "r" : $(e.target), "e" : e });
                         }
                        }, this));
            }

          // TDO

     },


     /**
       *  Process Drag and Drop options.
       *  @private
       */
     _initDnDOpts : function()
     {
        var opts, ot ;

        if (this.options["dnd"] !== "undefined")
        {
          opts = this.options["dnd"] ;
          ot = $.type(this.options["dnd"]) ;        // dnd -> tree reorder only for V1.0   

          if (ot === "object") {
            if (($.type(opts["reorder"]) === "boolean") && (opts["reorder"]))  {
              this._data.dnd.reorder = true ;
            }
          }
          else if (ot == "string" && opts == "reorder") {
              this._data.dnd.reorder = true ;
          }

          if (this._data.dnd.reorder) {
            //  Add our default requirements until these are made public and can be
            //  defined in options.
            this.options["dnd"] = {} ;
            this._applyDefaults(this.options["dnd"], this._data.dnd.defaults) ;
          }
        }

     },


     /*
      *  Initialize the context menu cut/copy/paste/remove/rename support.
      *  @private
      */
     _initCrrm :  function()
     {
        this._$container
                .bind("ojmove",
                     $.proxy(function (e, data)
                               {
                                 if (this.options["crrm"]["move"]["openOnMove"])
                                 {
                                   var t = this;
/*  Tue4
                                   data.rslt.np.parentsUntil(".oj-tree").addBack()
                                                                        .filter(".oj-tree-closed")
                                                                        .each(function ()
                                                                          {
                                                                           t["expand"](this, false, true);
                                                                          });
*/  //Tue4
                                 }
                               }, this));

     },


     /**
       *  @private
       */
     _initKeys  :  function()
     {
        var _this = this ;

//JRMTH        $.each(this._get_settings().hotkeys, function (i, v)
        $.each(this._keyHandler, function (i, v)
                         {
//                         if (v !== false && $.inArray(i, bound) == -1)
                           if (v !== false && $.inArray(i, _this._data.keys.bound) == -1)
                           {
//JRMEXP                     $(document).bind("keydown", i, function (event)
                             $(document).on("keydown", null, i, function (event)
                                   {
                                     return _this._execKey(_this, i, event);
                                    });
                             _this._data.keys.bound.push(i);
                           }
                         });
/*
      this._$container()
               .bind("treelock", $.proxy(function ()
                  {
                    if (this._data.hotkeys.enabled)  {
                      this._data.hotkeys.enabled = false;
                      this._data.hotkeys.revert  = true;
                    }
                  }, this))
               .bind("treeunlock", $.proxy(function () 
                 {
                   if (this._data.hotkeys.revert)  {
                    this._data.hotkeys.enabled = true;
                   }
                 }, this));
*/

       this._enableKeys();

     },


     /**
       *  Initialize the context menu.  This is called on startup, or on option "contextMenu" change.
       *  @param {Object=} newVal  previous value if option change.
       *  @private
       */
     _initMenu : function(newVal)
     {
       var opts, menu, t, html, $html ;

       if ((! this.options["contextMenu"]) && (! newVal)) {
         return ;
       }

       opts = newVal? newVal : this.options["contextMenu"] ;
       t = $.type(opts) ;
       if (t != "object")  {
         return ;
       }

       menu = opts["menu"] ;
       if (menu == undefined) {
         return ;
       }

       t = $.type(menu) ;
       if (t == "function") {
         opts = menu() ;             // call user's method to get the context menu
         menu = opts["menu"]
         t = $.type(menu) ;
       }

       if (t == "boolean") {
         if (!menu) {
           return ;
         }

         // Use ojTree default menu

         this._data.menu.menuid      = "ojtreemenu" + this._getIndex();
         this._data.menu.$container  = $(_defaultMenu) ;
         this._data.menu.$container.css("display","none") ;
         this._data.menu.$container.attr("id", this._data.menu.menuid) ;
         this._data.menu.usermenu   = true ;
         this._data.menu.$elemPaste = this._data.menu.$container.find("#ojtreepaste") ;   // save for disabling
       }
       else if (t === "string") {
         //  Handle user-supplied ojMenu  style menu

         var $m = $(document.getElementById(menu)) ;   // get the user's <ul> list   
         if ($m) {
           $m.css("display","none") ;
           this._data.menu.$container = $m ;
           this._data.menu.menuid     = menu ;     // user-supplied ojMenu id
           this._data.menu.usermenu   = true ;     // menu is ojMenu
           this._data.menu.$container.css("display","none") ;
         }
       }
       else {
         return ;      // unknown
       }
       
       if (this._data.menu.usermenu) {
         if (newVal) {
           this._applyMenu() ;   // complete menu creation/attachnment
         }
         else {
           this._$container.bind("ojloaded", $.proxy(function ()  { 
                                                 this._applyMenu() ;   // complete menu creation/attachnment
                                             }, this)
                             );
         }
       }
     },


     /**
       *   Note the tree node that the menu has just been activated on.
       *   @private
       */
     _handleContextMenuBeforeShow: function(e, ui)
     {
        this._data.menu.node = $(e.originalEvent.target.parentNode) ;

        // Set menu "Paste" disable state, depending on whether there's been a previous "cut"/"copy"
        if (this._data.menu.usermenu && this._data.menu.attached && this._data.menu.$elemPaste) {

          var state         = this._data.menu.$elemPaste.hasClass("oj-disabled") ;
          var disabledState = (! this._data.crrm.ct_nodes && !this._data.crrm.cp_nodes) ;

          if (! state) {
            state = false ;      // in case undefined
          }
          if (state != disabledState) {
            if (disabledState) {
              this._data.menu.$elemPaste.addClass("oj-disabled") ;
            }
            else {
              this._data.menu.$elemPaste.removeClass("oj-disabled") ;
            }
            this._data.menu.$container.ojMenu("refresh") ;
          }
        }

     },

     /**
       *   Check menu selected to see if it one of our predefined remove/delete/cut/copy/paste id's
       *   @private
       */
     _handleContextMenuSelect: function(ev, ui)
     {
        var  id = ui? ui.item.attr("id") : undefined ;

        if (id === "ojtreecopy") {
          this._crrm_copy(this._data.menu.node);
        }
        else if (id === "ojtreecut") {
          this._crrm_cut(this._data.menu.node);
        }
        else if (id === "ojtreepaste") {
          this._crrm_paste(this._data.menu.node);
        }
        else if (id === "ojtreedelete") {
          if (this["isSelected"](this._data.menu.node)) {
            this._crrm_remove();
          }
          else {
           this._crrm_remove(this._data.menu.node);
          }
        }
        else if (id === "ojtreerename") {
          this._crrm_rename(this._data.menu.node);
        }
        else if (id === "ojtreecreate") {
          this._crrm_create(this._data.menu.node);
        }
     },


     /**
       *  Process Core options
       *  @private
       */
     _initCoreOpts : function()
     {
        var val = this.options["selectionMode"] ;

        val = (val == undefined)? "single" : val ;
        if (val === "none") {
          val = 0 ;
        }
        else if (val === "single") {
          val = 1;
        }
        else if (val === "multiple") {
          val = -1 ;
        }
        this._data.core.selectMode = val ;

        this._data.themes.icons = this.options["icons"] ;

        this._data.core.toExpand = this.options["initExpanded"];  
        if (this._data.core.toExpand == null) {
          this._data.core.toExpand = [] ;
        }
        this._data.core.toLoad   = this.options["initLoaded"];
     },


     /**
       *  Process UI type options
       *  @private
       */
     _initUIOpts : function()
     {
     },

     /**
       *  Process json_data options
       *  @private
       */
     _initJsonOpts : function()
     {
        var s = this.options["json_data"] ;

        if (s) {
          if (this.options["json_data"])  {
            //  Add our default requirements until these are made public and can be
            //  defined in options.
            this._applyDefaults(this.options["json_data"], this._data.json.defaults) ;
          }
        }
     },


     /**
       *  Process html_data options
       *  @private
       */
     _initHtmlOpts : function()
     {
     },

     /**
       *  Process cut/copy/paste/rename/remove options
       *  @private
       */
     _initCrrmOpts : function()
     {
       if (this.options["crrm"] == undefined)  {
         //  Add our default requirements until these are made public and can be
         //  defined in options.
         this._applyDefaults(this.options["crrm"], this._data.crrm.defaults) ;
       }

     },

     /**
       *  Process context menu options
       *  @private
       */
     _initMenuOpts : function()
     {
     },

     /**
       *  Process theme options
       *  @private
       */
     _initThemeOpts : function()
     {
       //  Themes support not yet published
     },


     /**
       *  Process node type options
       *  @private
       */
     _initTypeOpts  : function()
     {
       var opts ;
       var o = this.options["types"] ;

       if ($.type(o) == "object") {
         //  Add our default requirements until these are made public and can be
         //  defined in options.
         this._applyDefaults(this["options"]["types"], this._data.types.defaults) ;
       }
     },


     /**
       *  Set up tree instance data
       *  @private
       */
     _initData : function()
     {
        //  Establish working values, and define default values

        var data = this._data ;
         
        //  Core
        data.core  =  {
                        html_titles    : false,
                        initLoaded     : [],
                        selectMode     : 1,          //  0, 1, 2 ... or -1 for unlimited
                        load_open      : false,
                        li_height      : 0,
                        notify_plugins : true,       // TDO is it needed, this is jstree default
                        toExpand       : false,
                        toLoad         : false,
                        prepared_move  : {}          // for the move_node function
                      };

        // UI
        data.ui =  {
                      selected          :  $(),       // selected node jquery list
                      last_selected     :  false,
                      hovered           :  null,
                      to_select         :  null       // removed per Design Review
                 };


        //  Creating/renaming/removing/moving via context menu

        data.crrm = {} ;
        data.crrm.cp_nodes = false;     // nodes that have been copy'd
        data.crrm.ct_nodes = false;     // node(s) that have been cut
        data.crrm.defaults = {
                               "inputWidthLimit" : 200,
                               "move"            : {
                                                     "alwaysCopy"       : false, // false, true or "multitree"
                                                     "openOnMove"       : true,
                                                     "defaultPosition"  : "last",
                                                     "checkMove"        : function (m) {
                                                                             return true;
                                                                          }
                                                   }
                             };
        data.crrm.prepared_move = {} ;   // for the move node function
        
        //  json_data

        data.json = {} ;
        data.json.defaults = {
                               "data" : false,   // `data` can be a function:
                                                 //  accepts two arguments - node being loaded
                                                 //  and a callback to pass the result to
                                                 //  will be executed in the current tree's scope
                                                 //  & ajax won't be supported
                               "ajax"               : false,
                               "correct_state"      : true,
                               "progressive_render" : false,
                               "progressive_unload" : false
                             } ;

        // html_data

       data.html = {} ;
       data.html.defaults = {
                              "data"          : false,     // `data` can be a function:
                              "ajax"          : false,
                              "correct_state" : true 
                            };

       data.html.useExistingMarkup       = false ;         // true == use existing div markup
       data.html.originalContainerHtml = false ;


        //  Themes

        data.themes       = {} ;
        data.themes.icons = true ;
        data.themes.dots  = false ;
        data.themes.theme = "default" ;
        data.themes.url   = false ;

        data.themes.themes_loaded = [];
        data.themes._themes = false;   //  path to themes folder - if false - it will be autodetected

        //  Types

        data.types           = {} ;
        data.types.attach_to = [];
        data.types.defaults  = {
                                 "max_children"        : -1,     // defines max number of root nodes
                                                                 // (-1 = unlimited, -2 = disable max_children checking)
                                 "max_depth"           : -1,     //  maximum depth of the tree
                                 "valid_children"      : "all",  // defines valid node types for the root nodes
                                 "use_data" : false,             // whether to use $.data     TDO
                                 "type_attr" : "type",           // where type stored (the "types" attr of the LI element)
                                 "types" : {                     // a list of types
                                             "default" : {       // the default type
                                                          "max_children"  : -1,
                                                          "max_depth"     : -1,
                                                          "valid_children": "all"
                                       
                                                          // Bound functions - you can bind any other function here
                                                          // (using boolean or function)
                                                          //"select_node" : true
                                                         }
                                           }
                               } ;

        //  Context menu

        data.menu              = {} ;
        data.menu.actions      = false ;   // action callbacks by menu id for old jsTree style menu
        data.menu.menuid       = false ;
        data.menu.select       = false ;   // from options

        data.menu.usermenu     = false ;   // user has supplied an ojMenu id if true
        data.menu.attached     = false ;   // menu has been attached to tree DOM
        data.menu.$container   = false ;   // the menu <ul>
        data.menu.parent       = false ;   // the menu <ul>'s original parent
        data.menu.$elemPaste   = false ;   // the menu "Paste" element

        data.menu.changing     = false ;   // _setOption() gate to inhibit _initMenu() race

        //  Keyboard support

        data.keys         = {} ;
        data.keys.enabled = true ;
        data.keys.bound   = [];

        // Drag and Drop

        data.dnd          = {} ;
        data.dnd.reorder  = true ;

        data.dnd.active     = false ;
        data.dnd["after"]   = false ;
        data.dnd["inside"]  = false ;
        data.dnd["before"]  = false ;
        data.dnd.off        = false ;
        data.dnd.prepared   = false ;
        data.dnd.w          = 0,
        data.dnd.to1        = false ;
        data.dnd.to2        = false ;
        data.dnd.cof        = false ;
        data.dnd.cw         = false ;
        data.dnd.ch         = false ;
        data.dnd.i1         = false ;
        data.dnd.i2         = false ;
        data.dnd.mto        = false ;
  
        data.dnd.defaults = {
                              "copy_modifier"  : "ctrl",
                              "check_timeout"  : 100,
                              "open_timeout"   : 500,
                              "drop_target"    : ".oj-tree-drop",
                              "drop_check"     : function (data) { return true; },
                              "drop_finish"    : $.noop,
                              "drag_target"    : ".oj-tree-draggable",
                              "drag_finish"    : $.noop,
                              "drag_check"     : function (data)
                                                  {
                                                     return {
                                                              "after"  : false,
                                                              "before" : false,
                                                              "inside" : true
                                                            };
                                                  }
                            } ;


        data.dnd.vars          = {}
        data.dnd.vars.o        = false ;
        data.dnd.vars.r        = false ;
        data.dnd.vars.m        = false ;     // marker pointer div
        data.dnd.vars.ml       = false ;     // marker line div
//JRM   data.dnd.vars.sli      = false ;
//JRM   data.dnd.vars.sti      = false ;
        data.dnd.vars.sli      = undefined ;
        data.dnd.vars.sti      = undefined ;
        data.dnd.vars.dir1     = false ;
        data.dnd.vars.dir2     = false ;
        data.dnd.vars.last_pos = false ;

        data.dnd.ctl             = {} ;      //  this was the old ojtreeu helper
        data.dnd.ctl.is_down     = false,
        data.dnd.ctl.is_drag     = false,
        data.dnd.ctl.helper      = false,
        data.dnd.ctl.scroll_spd  = 10,
        data.dnd.ctl.init_x      = 0,
        data.dnd.ctl.init_y      = 0,
        data.dnd.ctl.threshold   = 5,
        data.dnd.ctl.helper_left = 5,
        data.dnd.ctl.helper_top  = 10,
        data.dnd.ctl.user_data   = {}
     },

     /**
       *  @private
       */
     _fix_scroll : function (obj)
     {
        var c = this._$container[0],
            t;
       
       if (c.scrollHeight > c.offsetHeight)
       {
          obj = this._getNode(obj);
          if (!obj || obj === -1 || !obj.length || !obj.is(":visible"))  {
             return;
          }

          t = obj.offset().top - this._$container.offset().top;

          if (t < 0)  { 
            c.scrollTop = c.scrollTop + t - 1; 
          }

         if (t + this._data.core.li_height + (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0) > c.offsetHeight)  { 
           c.scrollTop = c.scrollTop + (t - c.offsetHeight + this._data.core.li_height + 1 + (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0)); 
          }
       }
     },


     set_focus   : function ()            // undocumented per Design Review
     { 
       if (this.is_focused()) {
          return;
       }
       var f = this._focused();
       if (f) {
         this.unset_focus();
       }
           
       this._$container.addClass("oj-tree-focused"); 
       this._data.focused = true ;
       this._emitEvent(null, "set_focus");
     },

     is_focused  : function ()            // undocumented per Design Review
     { 
        return this._data.focused ;
     },

     unset_focus : function ()            // undocumented per Design Review
     {
        if (this.is_focused()) {
          this._$container.removeClass("oj-tree-focused"); 
          this._data.focused = false ;
        }
        this._emitEvent(null, "unset_focus");
      },

     _focused : function ()
     {
//        return instances[focused_instance] || null;     // TDO
     },


     /**
       *  Returns the next instance index to use.
       *  @private
       */
     _newIndex: function()
     {
       return ++_instance
     },

     /**
       *  Returns the current instance index.
       *  @private
       */
     _getIndex : function()
     {
        return this._index ;
     },

     /**
       *  Returns a copy of the options.
       *  @private
       */
     _getOptions : function()
     {
        return ($.extend(true, {}, this.options)) ;
     },

     /**
       *  Returns the tree containig div
       *  #private
       */ 
     _getContainer : function()
     {
        return this._$container ;
     },

     /**
       *   Handle keystrokes
       *   @private
       */
     _keyHandler : {

         "up" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["hover"](this._getPrev(o));
            return false; 
         },

         "ctrl+up" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["hover"](this._getPrev(o));
            return false; 
         },

         "shift+up" : function (t)
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["select"](this._getPrev(o), (this._data.ui.selectMode !== -1));
            return false; 
         },

         "down" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["hover"](this._getNext(o));
            return false;
         },

         "ctrl+down" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["hover"](this._getNext(o));
            return false;
         },

         "shift+down" : function ()
         { 
           var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
//         this.hover(this._get_next(o));
//JRM      this.hover_node(this._get_next(o));
//JRMCC    this.select(this._get_next(o), (this.get_settings()["ui"].selectMode !== -1));
//Fri2     this.select(this["_get_next"](o), (this["get_settings"]()["ui"]["selectMode"] !== -1));
           this["select"](this._getNext(o), (this._data.ui.selectMode !== -1));
           return false;
         },

         "left" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o) {
              if (o.hasClass("oj-tree-open"))  {
                this["collapse"](o);
              }
              else  {
                this["hover"](this._getPrev(o));
              }
            }
            return false;
         },

         "ctrl+left" : function ()
         { 
           var o = this._data.ui.hovered || this._data.ui.last_selected;
           if (o)  {
             if (o.hasClass("oj-tree-open"))  {
                this["collapse"](o);
             }
             else  {
               this["hover"](this._getPrev(o));
             }
           }
           return false;
         },

         "shift+left" : function ()
         { 
           var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o) {
              if (o.hasClass("oj-tree-open")) {
                this["collapse"](o);
              }
              else  {
//JRM           this.hover_node(this._get_prev(o));
                this["hover"](this._getPrev(o));
              }
            }
            return false;
         },

         "right" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o && o.length) {
               if (o.hasClass("oj-tree-closed"))  {
                  this["expand"](o);
               }
               else  {
//JRM             this.hover_node(this._get_next(o));
                  this["hover"](this._getNext(o));
               }
            }
            return false;
         },

         "ctrl+right" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o && o.length) {
               if (o.hasClass("oj-tree-closed")) {
                 this["expand"](o);
               }
               else   {
//JRM            this.hover_node(this._get_next(o));
                 this["hover"](this._getNext(o));
               }
           }
           return false;
         },

         "shift+right" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o && o.length) {
              if (o.hasClass("oj-tree-closed"))  {
                this["expand"](o);
              }
              else  {
                this["hover"](this._getNext(o));
              }
            }
            return false;
         },

         "space" : function ()
         { 
            if (this._data.ui.hovered)  {
              this._data.ui.hovered.children("a:eq(0)").click();
            } 
            return false; 
         },

         "home" : function ()
         { 
           this["hover"](this._$container_ul.find("li:first"));
           return false; 
         },

         "end" : function ()
         { 
           var a = this._$container_ul.find("li.oj-tree-last:visible");
           this["hover"](a[a.length-1]) ;
           return false; 
         },

         "*" : function ()
         { 
           var l = this._$container_ul.find("a") ;
           this.selected(l) ;
           return false; 
         },

         "ctrl+space" : function (event)
         { 
          event.type = "click";
          if (this._data.ui.hovered)  { 
            this._data.ui.hovered.children("a:eq(0)").trigger(event);
          } 
         return false; 
         },

         "shift+space" : function (event)
         { 
           event.type = "click";
           if (this._data.ui.hovered)  {
             this._data.ui.hovered.children("a:eq(0)").trigger(event);
           } 
           return false; 
         },

         "f2" : function ()
         {
           this["rename"](this._data.ui.hovered || this._data.ui.last_selected);
         },

         "del" : function ()
         {
           this["remove"](this._data.ui.hovered || this._getNode(null));
         }
     },

     /**
       *   Attach the user menu <ul> list to the tree div, and set up listeners on it.
       *   @private
       */
     _applyMenu : function()
     {
       if (!this._data.menu.attached) {
         if (this._data.menu.usermenu) {         // user supplied menu id in options. contextMenu?
           if (this._data.menu.$container) {
             var $ul = this._data.menu.$container ;

             $ul.parent().detach() ;                             // detach menu div
             $ul.css('display', 'none') ;
           }
         }

         this._data.menu.attached = true ;
         var _this = this
         setTimeout(function() {                         //TDO - why do we need this - I think its because of the setTimeout in reload_nodes
               _this._$container.append(_this._data.menu.$container) ; // reparent to tree container
               _this._data.menu.$container.ojMenu() ;
               _this._data.menu.ojmenuCreated = true ;
               _this._data.menu.changing = true ;     // inhibit _setOption() calling us again
               _this._setOption("contextMenu", {menu: _this._data.menu.menuid}) ;
               _this._data.menu.changing = false ;
               _this._data.menu.$container.on("ojselect",     $.proxy(_this._handleContextMenuSelect, _this));
               _this._data.menu.$container.on("ojbeforeshow", $.proxy(_this._handleContextMenuBeforeShow, _this));
       
           }, 0);
       }             // end if not attached
     },

     /**
       *   Clear out any existing ojMenu
       *   @private
       */
     _clearMenu : function() {

       if (this._data.menu.usermenu)  {
         this._data.menu.$container.ojMenu("destroy") ;
         this._data.menu.parent.append(this._data.menu.$container) ;
         this._data.menu.attached   = false ;
         this._data.menu.menuid     = null ;
         this._data.menu.$container = null ;
         this._data.menu.parent     = null ;
       }
     },


     /**
       *  Menu "cut" functionality
       *  @private
       */
     _crrm_cut : function (obj)
     {
        obj = this._getNode(obj, true);
        if (!obj || !obj.length)  {
          return false;
        }

        this._data.crrm.cp_nodes = false;
        this._data.crrm.ct_nodes = obj;

        this._emitEvent({ "obj" : obj }, "cut");
     },

     /**
       *  Menu "copy" functionality
       *  @private
       */
     _crrm_copy : function (obj)
     {
        obj = this._getNode(obj, true);
        if (!obj || !obj.length)  {
          return false;
        }
        this._data.crrm.ct_nodes = false;
        this._data.crrm.cp_nodes = obj;
        this._emitEvent({ "obj" : obj }, "copy");
     },

     /**
       *  Menu "paste" functionality
       *  @private
       */
     _crrm_paste : function (obj)
     { 
        obj = this._getNode(obj);
        if (!obj || !obj.length) {
          return false;
        }
        var nodes = this._data.crrm.ct_nodes ? this._data.crrm.ct_nodes : this._data.crrm.cp_nodes;

        if (! this._data.crrm.ct_nodes && !this._data.crrm.cp_nodes)  {
           return false;
         }
         if (this._data.crrm.ct_nodes)  {
//         this.move_node(this._data.crrm.ct_nodes, obj);
           this._crrm_move_node(this._data.crrm.ct_nodes, obj);
           this._data.crrm.ct_nodes = false;
         }
         if (this._data.crrm.ct_nodes)
         {
//         this.move_node(this._data.crrm.ct_nodes, obj);
           this._crrm_move_node(this._data.crrm.ct_nodes, obj);
           this._data.crrm.ct_nodes = false;
         }
         if (this._data.crrm.cp_nodes)  {
//         this.move_node(this._data.crrm.cp_nodes, obj, false, true);
           this._crrm_move_node(this._data.crrm.cp_nodes, obj, false, true);
         }
         this._emitEvent({ "obj" : obj, "nodes" : nodes}, "paste");
     },

    /**
      *  Menu move node support for paste
      * @private
      */
     _crrm_move_node : function (obj, ref, position, is_copy, is_prepared, skip_check)
     {
        var s = this.options["crrm"]["move"];
        if (! is_prepared)  { 
          if (typeof position === "undefined")  {
            position = s["defaultPosition"];
          }
          if (position === "inside" && !s["defaultPosition"].match(/^(before|after)$/))  {
            position = s["defaultPosition"];
          }
//Wed5      return this.__call_old(true, obj, ref, position, is_copy, false, skip_check);
            return this._move_node(obj, ref, position, is_copy, false, skip_check);
        }

        // if the move is already prepared
        if (s["alwaysCopy"] === true || (s["alwaysCopy"] === "multitree" && obj.rt._getIndex() !== obj.ot._getIndex() ))  { 
          is_copy = true;
        }
//Wed5  this.__call_old(true, obj, ref, position, is_copy, true, skip_check);
        this._move_node(obj, ref, position, is_copy, true, skip_check);
     },

     /**
       *  Menu "remove" (i.e. delete) functionality
       *  @private
       */
     _crrm_remove : function (obj)
     {
        obj = this._getNode(obj, true);

//         var p   = this._getParent(obj),
//            prev = this._getPrev(obj);

         this.__rollback();
         obj = this["delete"](obj);
//         if (obj !== false) {
//           this._emitEvent({ "obj" : obj, "prev" : prev, "parent" : p }, "remove");
//         }
     },

     /**
       *  Menu rename a node functionality
       *  @private
       */
     _crrm_rename  :  function (obj)
     {
        var f = this._emitEvent;

        obj = this._getNode(obj);
        this.__rollback();
        this._crrm_showInput(obj, function (obj, new_name, old_name)
                                  { 
                                    f.call(this, { "obj"       : obj,
                                                   "title"     : new_name,
                                                   "prevTitle" : old_name 
                                                 }, "rename");
        });
     },

     /**
       *  @private
       */
     _crrm_showInput : function (obj, callback)
     {
        obj = this._getNode(obj);

        var rtl = this._isRtl,
            w   = this.options["crrm"]["inputWidthLimit"],
            w1  = obj.children("ins").width(),
            w2  = obj.find("> a:visible > ins").width() * obj.find("> a:visible > ins").length,
            t   = this["getText"](obj),
            h1  = $("<div />", { css : { "position" : "absolute", "top" : "-200px", "left" : (rtl ? "0px" : "-1000px"), "visibility" : "hidden" } }).appendTo("body"),
            h2  = obj.css("position","relative").append(
                $("<input />", { 
                    "value" : t,
                    "class" : "oj-tree-rename-input",
                    // "size" : t.length,
                    "css" : {
                              "padding" : "0",
                              "border" : "1px solid silver",
                              "position" : "absolute",
                              "left"  : (rtl ? "auto" : (w1 + w2 + 4) + "px"),
                              "right" : (rtl ? (w1 + w2 + 4) + "px" : "auto"),
                              "top" : "0px",
                              "height" : (this._data.core.li_height - 2) + "px",
                              "lineHeight" : (this._data.core.li_height - 2) + "px",
                              "width" : "150px" // will be set a bit further down
                             },
                    "blur" : $.proxy(function ()
                      {
                        var i = obj.children(".oj-tree-rename-input"),
                            v = i.val();
                        if (v === "")  {
                          v = t;
                        }
                        h1.remove();
                        i.remove();                    // rollback purposes
                        this._set_text(obj, t);        // rollback purposes
                        this._rename_node(obj, v);
                        callback.call(this, obj, v, t);
                        obj.css("position","");
                    }, this),

                    "keyup" : function (event)
                      {
                        var key = event.keyCode || event.which;
                        if(key == 27)  {
                           this.value = t;
                           this.blur(); return;
                        }
                        else if(key == 13)  {
                           this.blur();
                           return;
                        }
                        else
                        {
                           h2.width(Math.min(h1.text("pW" + this.value).width(),w));
                        }
                    },

                    "keypress" : function(event)
                    {
                      var key = event.keyCode || event.which;
                      if (key == 13)  {
                        return false;
                      }
                    }
                })
            ).children(".oj-tree-rename-input"); 
            this._set_text(obj, "");
            h1.css({
                    fontFamily      : h2.css('fontFamily')      || '',
                    fontSize        : h2.css('fontSize')        || '',
                    fontWeight      : h2.css('fontWeight')      || '',
                    fontStyle       : h2.css('fontStyle')       || '',
                    fontStretch     : h2.css('fontStretch')     || '',
                    fontVariant     : h2.css('fontVariant')     || '',
                    letterSpacing   : h2.css('letterSpacing')   || '',
                    wordSpacing     : h2.css('wordSpacing')     || ''
            });
//Fri2      h2.width(Math.min(h1.text("pW" + h2[0].value).width(),w))[0].select();
            h2.width(Math.min(h1.text("pW" + h2[0].value).width(),w))[0]["select"]();
     },

     /**
       *  @private
       */
     _crrm_create : function (obj, position, js, callback, skip_rename)
     {
        var t, _this = this;
        obj = this._getNode(obj);
        if (!obj) {
           obj = -1;
        }
        this.__rollback();
        t = this._create_node(obj, position, js, function (t)
             {
                var p = this._getParent(t),
                    pos = $(t).index();

                if (callback)  {
                   callback.call(this, t);
                }
                if (p.length && p.hasClass("oj-tree-closed"))  {
                   this["expand"](p, false, true);
                }
                if (!skip_rename)  { 
                  this._crrm_showInput(t, function (obj, new_name, old_name)
                         { 
                            _this._emitEvent({ "obj"      : obj,
                                               "name"     : new_name,
                                               "parent"   : p,
                                               "position" : pos
                                              });
                         });
                }
                else  {
                   _this._emitEvent({ "obj"      : t, 
                                      "name"     : this["getText"](t),
                                      "parent"   : p,
                                      "position" : pos 
                                    });
                }
             });

        return t;
     },

     /**
       *  @private
       */
     _crrm_check_move : function ()
     {
        if (! this.__call_old())  {
          return false;
        }
        var s = this.options["crrm"]["move"];
        if (! s["checkMove"].call(this, this._getMove()))  {
          return false;
        }
        return true;
     }

  }) ;    // end    $.widget("oj.ojTree", ...



   // load the css when DOM is ready  -  need to remove this  - TDO
   $(function() {
       var  css = '' + 
           '.oj-tree-list, .oj-tree-list ul, .oj-tree-list li { display:block; margin:0 0 0 0; padding:0 0 0 0; list-style-type:none; } ' + 
           '.oj-tree-list li { display:block; min-height:18px; line-height:18px; white-space:nowrap; margin-left:18px; min-width:18px; } ' + 
           '.oj-tree-rtl li { margin-left:0; margin-right:18px; } ' + 
           '.oj-tree-list > li { margin-left:0px; } ' + 
           '.oj-tree-rtl > ul > li { margin-right:0px; } ' + 
           '.oj-tree-list ins { display:inline-block; text-decoration:none; width:18px; height:18px; margin:0 0 0 0; padding:0; } ' + 
           '.oj-tree-list a { display:inline-block; line-height:16px; height:16px; color:black; white-space:nowrap; text-decoration:none; padding:1px 2px; margin:0; } ' + 
           '.oj-tree-list a:focus { outline: none; } ' + 
           '.oj-tree-list a > ins { height:16px; width:16px; } ' + 
           '.oj-tree-list a > .oj-tree-icon { margin-right:3px; } ' + 
           '.oj-tree-rtl a > .oj-tree-icon { margin-left:3px; margin-right:0; } ' + 
           'li.oj-tree-open > ul { display:block; } ' + 
           'li.oj-tree-closed > ul { display:none; } ';
       // the default stylesheet
       _addSheet({ str : css, title : "oj-tree" });
   });



})();


/*--------------------------------------------------------------------------
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 *--------------------------------------------------------------------------*/

(function()
{
   function debugObj(o)
   {
     var s ;
     try { s = JSON.stringify(o) ; }
     catch (e) { s = "ERROR";}
     return s ;
   };

   jQuery.hotkeys = {
        version: "0.8",

		specialKeys: {
			8:   "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
			20:  "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
			37:  "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 
			96:  "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
			104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/", 
			112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 
			120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
		},
	
		shiftNums: {
			"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", 
			"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<", 
			".": ">",  "/": "?",  "\\": "|"
		}
	};

	function keyHandler(handleObj)
    {
	   // Only care when a possible input has been specified

	   if ( typeof handleObj["data"] !== "string" ) {
		  return;
	   }
		
	   var origHandler = handleObj["handler"],
	   	   keys        = handleObj["data"].toLowerCase().split(" ");
	
	   handleObj["handler"] = function( event )
		  {
			// Don't fire in text-accepting inputs that we didn't directly bind to
			if ( this !== event["target"] && (/textarea|select/i.test( event["target"]["nodeName"] ) ||
				                                                    event["target"]["type"] === "text") )
			{
               return;
			}
			
			// Keypress represents characters, not special keys
            var special   = event["type"] !== "keypress" && jQuery.hotkeys.specialKeys[ event["which"] ],
                character = String.fromCharCode( event["which"] ).toLowerCase(),
				key,
			    modif     = "",
			    possible = {};

			// check combinations (alt|ctrl|shift+anything)
            if ( event["altKey"] && special !== "alt" ) {
			  modif += "alt+";
			}

			if ( event["ctrlKey"] && special !== "ctrl" )  {
		      modif += "ctrl+";
			}
			
			// TODO: Need to make sure this works consistently across platforms
			if ( event["metaKey"] && !event["ctrlKey"] && special !== "meta" )
            {
              modif += "meta+";
			}

			if ( event["shiftKey"] && special !== "shift" )  {
		      modif += "shift+";
			}

			if ( special )  {
              possible[ modif + special ] = true;
			}
            else   {
              possible[ modif + character ] = true;
              possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true;

              // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
              if ( modif === "shift+" )   {
                possible[ jQuery["hotkeys"]["shiftNums"][ character ] ] = true;
              }
		    }

		    for ( var i = 0, l = keys.length; i < l; i++ )  {
              if ( possible[ keys[i] ] )  {
                 return origHandler.apply( this, arguments );
              }
            }
		  };
	}

	jQuery.each([ "keydown", "keyup", "keypress" ], function()
	  {
        jQuery["event"]["special"][ this ] = {
                                               "add": keyHandler
                                             };
	  });

})();


/*
** Copyright (c) 2013, Oracle and/or its affiliates. All rights reserved. 
** Important:
** - This file is designed to be shared verbatim among the ADFui products.
** - Do not add framework-specific dependencies in this file (it must be self-contained).
** - Do not change this file without testing it in other ADFui products (ADF Faces, JET, etc.).
*/
if (!window.adf) { /** @expose */ window.adf = {}; };
//explicitly declare var adf to avoid compilation error in JET
var adf                        = window.adf;
adf.shared                     = adf.shared || {};
adf.shared.impl                = adf.shared.impl || {};
adf.shared.impl.conveyorBelt   = adf.shared.impl.conveyorBelt || {};
// must be explicitly assigned to the window.adf.shared.impl object for cross-framework sharing
/**
 * Constructor.
 * @param {Object} elem DOM element associated with the conveyor
 * @param {string} orientation Direction of scrolling, either horizontal or vertical
 * @param {Object} contentParent DOM element whose children are the items to scroll
 * @param {boolean} bRtl True if the reading direction is right-to-left, otherwise false
 * @param {Object} buttonInfo Map of properties for the following button information:
 *  - "prevButtonId": Id to use for the scroll previous button,
 *  - "nextButtonId": Id to use for the scroll next button,
 *  - "prevButtonStyleClass": Style class name to use for the scroll previous button,
 *  - "nextButtonStyleClass": Style class name to use for the scroll next button,
 *  - "prevButtonIcon": Icon element to use for the scroll previous button,
 *  - "nextButtonIcon": Icon element to use for the scroll next button,
 * @param {Object} callbackInfo Map of properties for the following callback information:
 *  - "scrollFunc": Callback function to animate scrolling a DOM element, 
 *  - "firstVisibleItemChangedFunc": Callback function to notify when the first visible item changes, 
 *  - "callbackObj": Optional object on which the callback functions are defined
 *  - "automaticSizeCheck": True to periodically check whether conveyor size
 *    has changed
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon = function(
  elem, orientation, contentParent, bRtl, buttonInfo, callbackInfo)
{
  this._elem = elem;
  this._orientation = orientation;
  this._contentParent = contentParent;
  this._bRtl = bRtl;
  if (buttonInfo)
  {
    this._prevButtonId = buttonInfo["prevButtonId"];
    this._nextButtonId = buttonInfo["nextButtonId"];
    this._prevButtonStyleClass = buttonInfo["prevButtonStyleClass"];
    this._nextButtonStyleClass = buttonInfo["nextButtonStyleClass"];
    this._prevButtonIcon = buttonInfo["prevButtonIcon"];
    this._nextButtonIcon = buttonInfo["nextButtonIcon"];
  }
  if (callbackInfo)
  {
    this._scrollFunc = callbackInfo["scrollFunc"];
    this._firstVisibleItemChangedFunc = callbackInfo["firstVisibleItemChangedFunc"];
    this._callbackObj = callbackInfo["callbackObj"];
    this._bAutomaticSizeCheck = callbackInfo["automaticSizeCheck"];
  }
  
  this._bExternalScroll = true;
  this._firstVisibleItemIndex = 0;
  
  //copied basic checks from AdfAgent
  var navUserAgent = navigator.userAgent;
  var agentName = navUserAgent.toLowerCase();
  if (agentName.indexOf("gecko/") !== -1) {
    this._bAgentGecko = true;
  }
  else if (agentName.indexOf("opera") !== -1) {
    this._bAgentOpera = true;
  }
  else if (agentName.indexOf("applewebkit") !== -1 ||
           agentName.indexOf("safari") !== -1) {
    this._bAgentWebkit = true;
  }
};

/**
 * Setup the conveyor belt.
 * @param {boolean} bInit True for initialization, false for refresh
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype.setup = function(bInit)
{
  var self = this;
  var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
  if (bInit)
  {
    //create the content and overflow containers
    this._createInnerContainers();
    
    //create the next/prev buttons
    this._createPrevButton(this._prevButtonId, this._prevButtonStyleClass, this._prevButtonIcon);
    this._createNextButton(this._nextButtonId, this._nextButtonStyleClass, this._nextButtonIcon);
    
    var nextButton = this._nextButton;
    this._buttonWidth = nextButton.offsetWidth;
    this._buttonHeight = nextButton.offsetHeight;
    
    //hide the buttons until we know we need them
    this._hidePrevButton();
    this._hideNextButton();
    
    //handle the mouse wheel on the whole conveyor
    this._mouseWheelListener = function (event) {self._handleMouseWheel(event);};
    cbcClass._addBubbleEventListener(this._elem, "mousewheel", this._mouseWheelListener);
    cbcClass._addBubbleEventListener(this._elem, "wheel", this._mouseWheelListener);
    
    //handle swipe gestures on the overflow container, which excludes the next/prev buttons
    this._touchStartListener = function (event) {self._handleTouchStart(event);};
    cbcClass._addBubbleEventListener(this._overflowContainer, "touchstart", this._touchStartListener);
    this._touchMoveListener = function (event) {self._handleTouchMove(event);};
    cbcClass._addBubbleEventListener(this._overflowContainer, "touchmove", this._touchMoveListener);
    this._touchEndListener = function (event) {self._handleTouchEnd(event);};
    cbcClass._addBubbleEventListener(this._overflowContainer, "touchend", this._touchEndListener);
    cbcClass._addBubbleEventListener(this._overflowContainer, "touchcancel", this._touchEndListener);
    
    this._origScroll = 0;
  }
  else
  {
    //need to restore inner DOM to its initial state before we can accurately
    //calculate sizes
    this._reinitializeInnerDom();
  }

  //clear any old sizes so that new sizes will be calculated
  this._clearCachedSizes();
  //adjust overflow size
  this._adjustOverflowSize(bInit);
  //center buttons orthogonal to conveyor orientation
  var contentContainer = this._contentContainer;
  this._alignButtons(contentContainer.offsetWidth, contentContainer.offsetHeight);
  if (this._bAutomaticSizeCheck)
  {
    //create the timer to periodically check whether the component or its content 
    //has been resized
    if (!this._checkSizesTimer)
    {
      this._checkSizesTimer = setInterval(function() {self._checkSizes();}, 
                                          cbcClass._CHECK_SIZES_INTERVAL);
    }
  }
  else
  {
    //if not automatically checking sizes later on a timer, do it immediately
    this._checkSizes();
  }
};

/**
 * Destroy the conveyor belt.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype.destroy = function()
{
  if (this._checkSizesTimer)
  {
    clearInterval(this._checkSizesTimer);
    this._checkSizesTimer = null;
  }
  
  var elem = this._elem;
  var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
  cbcClass._removeBubbleEventListener(elem, "mousewheel", this._mouseWheelListener);
  cbcClass._removeBubbleEventListener(elem, "wheel", this._mouseWheelListener);
  cbcClass._removeBubbleEventListener(this._overflowContainer, "touchstart", this._touchStartListener);
  cbcClass._removeBubbleEventListener(this._overflowContainer, "touchmove", this._touchMoveListener);
  cbcClass._removeBubbleEventListener(this._overflowContainer, "touchend", this._touchEndListener);
  cbcClass._removeBubbleEventListener(this._overflowContainer, "touchcancel", this._touchEndListener);
  this._mouseWheelListener = null;
  this._touchStartListener = null;
  this._touchMoveListener = null;
  this._touchEndListener = null;
  
  //move the children of the _contentContainer back to the original DOM element
  cbcClass._reparentChildren(this._contentContainer, elem);
  if (this._tableDiv)
  {
    //the overflow, content, and buttons are all children of the table div
    elem.removeChild(this._tableDiv);
  }
  else
  {
    //the _contentContainer is a child of the _overflowContainer, so will be removed with it
    elem.removeChild(this._overflowContainer);
    elem.removeChild(this._nextButton);
    elem.removeChild(this._prevButton);
  }
  this._nextButton = null;
  this._prevButton = null;
  this._contentContainer = null;
  this._overflowContainer = null;
  this._tableDiv = null;
  this._tableCellDivPrevButton = null;
  this._tableCellDivNextButton = null;
  this._clearCachedSizes();
  
  this._elem = null;
  this._scrollFunc = null;
  this._firstVisibleItemChangedFunc = null;
  this._callbackObj = null;
};

/**
 * Set the id of the item to make first visible.
 * @param {string} id id of the item to make first visible
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype.setFirstVisibleItem = function(id)
{
  var sizes = this._getSizes();
  for (var i = 0; i < sizes.length; i++)
  {
    var sizeObj = sizes[i];
    if (sizeObj.id === id)
    {
      this._setCurrScroll(sizeObj.start, true);
      break;
    }
  }
};

/**
 * Reparent the DOM child nodes from their old parent node to a new parent node.
 * @param {Object} fromNode Old parent DOM node
 * @param {Object} toNode New parent DOM node
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._reparentChildren = function(fromNode, toNode)
{
  var fromNodeChildren = fromNode.childNodes;
  while (fromNodeChildren.length > 0)
  {
    toNode.appendChild(fromNodeChildren[0]);
  }
};

/**
 * Get the computed style of the given DOM element.
 * @param {Object} elem DOM element
 * @return {Object} Computed style for the element
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._getComputedStyle = function(elem)
{
  var elemOwnerDoc = elem.ownerDocument;
  var defView = elemOwnerDoc.defaultView;
  var computedStyle = null;
  if (defView)
  {
    //this line copied from AdfAgent.getComputedStyle()
    computedStyle = defView.getComputedStyle(elem, null);
  }
  else
  {
    //this line copied from AdfIEAgent.getComputedStyle()
    computedStyle = elem.currentStyle;
  }
  return computedStyle;
};

/**
 * Get the inner width of the given DOM element (inside borders and padding).
 * @param {Object} elem DOM element
 * @return {number} Width of element
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._getElemInnerWidth = function(elem)
{
  var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
  var computedStyle = cbcClass._getComputedStyle(elem);
  //concept copied from AdfConveyorBeltSupport._getInnerWidth()
  var extraWidth = cbcClass._getCSSLengthAsInt(computedStyle.paddingLeft) + 
                   cbcClass._getCSSLengthAsInt(computedStyle.paddingRight) + 
                   cbcClass._getCSSLengthAsInt(computedStyle.borderLeftWidth) + 
                   cbcClass._getCSSLengthAsInt(computedStyle.borderRightWidth);
  return elem.offsetWidth - extraWidth;
};

/**
 * Get the inner height of the given DOM element (inside borders and padding).
 * @param {Object} elem DOM element
 * @return {number} Height of element
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._getElemInnerHeight = function(elem)
{
  var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
  var computedStyle = cbcClass._getComputedStyle(elem);
  //concept copied from AdfConveyorBeltSupport._getInnerWidth()
  var extraHeight = cbcClass._getCSSLengthAsInt(computedStyle.paddingTop) + 
                    cbcClass._getCSSLengthAsInt(computedStyle.paddingBottom) + 
                    cbcClass._getCSSLengthAsInt(computedStyle.borderTopWidth) + 
                    cbcClass._getCSSLengthAsInt(computedStyle.borderBottomWidth);
  return elem.offsetHeight - extraHeight;
};

/**
 * Get the int value of a CSS length.
 * @param {string} cssLength cssLength as a String
 * @return {number} cssLength as an int
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._getCSSLengthAsInt = function(cssLength)
{
  //this function copied from AdfAgent.getCSSLengthAsInt
  if ((cssLength.length) > 0 && (cssLength != 'auto'))
  {
    var intLength = parseInt(cssLength, 10);

    if (isNaN(intLength))
      intLength = 0;

    return intLength;
  }
  return 0;
};

/**
 * Add a bubble event listener to the given DOM node.
 * @param {Object} node DOM node
 * @param {string} type Event type
 * @param {Function} listener Listener function
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._addBubbleEventListener = function(node, type, listener)
{
  if (node.addEventListener)
  {
    node.addEventListener(type, listener, false);
  }
  else if (node.attachEvent)
  {
    node.attachEvent("on" + type, listener);
  }
};

/**
 * Remove a bubble event listener from the given DOM node.
 * @param {Object} node DOM node
 * @param {string} type Event type
 * @param {Function} listener Listener function
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._removeBubbleEventListener = function(node, type, listener)
{
  if (node.removeEventListener)
  {
    node.removeEventListener(type, listener, false);
  }
  else if (node.detachEvent)
  {
    node.detachEvent("on" + type, listener);
  }
};

/**
 * Get the wheel delta from a mousewheel event.
 * @param {Object} event Event object
 * @return {number} Wheel delta
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._getWheelDelta = function(event)
{
  var wheelDelta = 0;
  if (event.wheelDelta != null)
  {
    wheelDelta = event.wheelDelta;
  }
  //use bracket notation to avoid compilation warning in JET
  else if (event["deltaY"] != null)
  {
    wheelDelta = -event["deltaY"];
  }
  else
  {
    wheelDelta = -event.detail;
  }
  return wheelDelta;
};

/**
 * Determine if this conveyor belt is horizontal or vertical.
 * @return {boolean} True if the conveyor belt is horizontal, false if vertical
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._isHorizontal = function()
{
  return (this._orientation === "horizontal");
};

/**
 * Determine if this conveyor belt is empty.
 * @return {boolean} True if the conveyor belt is empty, false if not
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._isEmpty = function()
{
  var contentParent = this._getContentParent();
  return !contentParent.hasChildNodes();
};

/**
 * Restore inner DOM to its initial state before sizes were calculated.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._reinitializeInnerDom = function()
{
  //restore inner DOM to initial state in order to accurately calculate new sizes

  //save original scroll value for use in _adjustOverflowSize()
  this._origScroll = this._getCurrScroll();
  this._clearOverflowMaxSize();
  this._setOverflowScroll(0);

  //hide the buttons until we know we need them
  this._hidePrevButton();
  this._hideNextButton();
};

/**
 * Clear cached sizes.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._clearCachedSizes = function()
{
  this._totalSize = null;
  this._sizes = null;
  this._oldContentSize = null;
  this._oldComponentSize = null;
};

/**
 * Check whether component sizes have changed.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._checkSizes = function()
{
  var oldContentSize = this._oldContentSize;
  var oldComponentSize = this._oldComponentSize;
  var contentContainer = this._contentContainer;
  var contentWidth = contentContainer.offsetWidth;
  var contentHeight = contentContainer.offsetHeight;
  var elem = this._elem;
  var elemWidth = elem.offsetWidth;
  var elemHeight = elem.offsetHeight;
  var bSizeChanged = false;
  //this is the first call to _checkSizes if we don't have any saved old sizes
  var bFirst = (!oldContentSize || !oldComponentSize);
  //check whether this is the first call or any sizes have changed
  if (bFirst || 
      oldContentSize.w !== contentWidth || oldContentSize.h !== contentHeight ||
      oldComponentSize.w !== elemWidth || oldComponentSize.h !== elemHeight)
  {
    //if this is not the first call, need to reinitialize the inner DOM before
    //we can accurately calculate new sizes (if this is the first call, DOM
    //is already in initial state)
    if (!bFirst)
    {
      this._reinitializeInnerDom();
    }
    this._clearCachedSizes();
    //save updated sizes
    this._oldContentSize = {w: contentWidth, h: contentHeight};
    this._oldComponentSize = {w: elemWidth, h: elemHeight};
    bSizeChanged = true;
  }
  if (!this._totalSize || !this._sizes)
  {
    //measure content size
    this._totalSize = this._measureContents();
    bSizeChanged = true;
  }
  //if sizes have changed, need to update inner DOM
  if (bSizeChanged)
  {
    //if this is not the first call, need to adjust the overflow size (if this 
    //is the first call, the overflow size was already adjusted in _setup)
    if (!bFirst)
    {
      this._adjustOverflowSize();
    }
    //center buttons orthogonal to conveyor orientation
    var totalSize = this._totalSize;
    this._alignButtons(totalSize.w, totalSize.h);
  }
};

/**
 * Center the overflow buttons orthogonal to the conveyor orientation.
 * @param {number} w Width to align inside
 * @param {number} h Height to align inside
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._alignButtons = function(w, h)
{
  var nextButton = this._nextButton;
  var prevButton = this._prevButton;
  var nextButtonStyle = nextButton.style;
  var prevButtonStyle = prevButton.style;
  
  if (this._isHorizontal())
  {
    var vOffset = .5 * (h - this._buttonHeight);
    nextButtonStyle.top = vOffset + "px";
    prevButtonStyle.top = vOffset + "px";
  }
  else
  {
    var hOffset = .5 * (w - this._buttonWidth);
    if (!this._bRtl)
    {
      nextButtonStyle.left = hOffset + "px";
      prevButtonStyle.left = hOffset + "px";
    }
    else
    {
      nextButtonStyle.left = -hOffset + "px";
      prevButtonStyle.left = -hOffset + "px";
    }
  }
};

/**
 * Adjust the overflow size.
 * @param {boolean} bInit True for initialization, false for refresh
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._adjustOverflowSize = function(bInit)
{
  var contentContainer = this._contentContainer;
  var bHoriz = this._isHorizontal();

  var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
  var elemInnerSize = bHoriz ? 
                      cbcClass._getElemInnerWidth(this._elem) : 
                      cbcClass._getElemInnerHeight(this._elem);
  //constrain the max overflow size if necessary
  if ((bHoriz ? contentContainer.offsetWidth : contentContainer.offsetHeight) > elemInnerSize)
  {
    this._setOverflowMaxSize(elemInnerSize);
  }
  
  this._minScroll = 0;
  //take the button size into account for max scroll position
  this._maxScroll = bHoriz ? 
                    contentContainer.offsetWidth - elemInnerSize + this._buttonWidth : 
                    contentContainer.offsetHeight - elemInnerSize + this._buttonHeight;
  //constrain max scroll
  if (this._maxScroll < 0)
  {
    this._maxScroll = 0;
  }
  
  //hide buttons AFTER calculating sizes above, but BEFORE updating scroll position below
  this._hidePrevButton();
  this._hideNextButton();
  
  //refresh current scroll position AFTER calculating sizes above
  this._setCurrScroll(bInit ? this._minScroll : this._origScroll, true);
  this._origScroll = 0;
};

/**
 * Create the inner overflow and content containers.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._createInnerContainers = function()
{
  //the original children of the conveyor elem will be reparented to the contentContainer;
  //the conveyor elem will contain the overflowContainer, which will contain the contentContainer, which
  //will contain the original children
  
  var self = this;
  var bHoriz = this._isHorizontal();
  
  var overflowContainer = document.createElement("div");
  this._overflowContainer = overflowContainer;
  var overflowContainerStyle = overflowContainer.style;
  overflowContainerStyle.overflow = "hidden";
  overflowContainerStyle.display = this._getCssDisplay();
  overflowContainerStyle.position = "relative";
  //ojTabs: verticalAlign top is needed so there's no gap between the tab bar and the tab content in Jet Tabs
  if (bHoriz)
  {
    overflowContainerStyle.verticalAlign = "top";
  }
  
  var elem = this._elem;
  var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
  var contentContainer = document.createElement("div");
  this._contentContainer = contentContainer;
  var contentContainerStyle = contentContainer.style;
  contentContainerStyle.position = "relative";
  if (bHoriz)
  {
    //ojTabs: set display of content container to inline-block so that its size
    //will be driven by its children
    contentContainerStyle.display = "inline-block";
  }
  overflowContainer.appendChild(contentContainer);
  
  var tableDiv = null;
  if (bHoriz)
  {
    //layout the buttons and overflow container in divs styled like table cells
    //in a single row in order to guarantee that they don't accidentally wrap
    //(don't want to specify white-space:nowrap because that would get inherited
    //by the content and either conveyor or the app would potentially have to
    //restore the initial value)
    tableDiv = document.createElement("div");
    this._tableDiv = tableDiv;
    var style = tableDiv.style;
    style.display = "table";
    var tableRowDiv = document.createElement("div");
    style = tableRowDiv.style;
    style.display = "table-row";
    var tableCellDivPrevButton = document.createElement("div");
    this._tableCellDivPrevButton = tableCellDivPrevButton;
    style = tableCellDivPrevButton.style;
    style.display = "table-cell";
    var tableCellDivOverflow = document.createElement("div");
    style = tableCellDivOverflow.style;
    style.display = "table-cell";
    var tableCellDivNextButton = document.createElement("div");
    this._tableCellDivNextButton = tableCellDivNextButton;
    style = tableCellDivNextButton.style;
    style.display = "table-cell";
    
    tableCellDivOverflow.appendChild(overflowContainer);
    tableRowDiv.appendChild(tableCellDivPrevButton);
    tableRowDiv.appendChild(tableCellDivOverflow);
    tableRowDiv.appendChild(tableCellDivNextButton);
    tableDiv.appendChild(tableRowDiv);
  }
  
  //reparent children from elem to contentContainer before adding overflow and
  //content containers to elem
  cbcClass._reparentChildren(elem, contentContainer);
  if (tableDiv)
  {
    elem.appendChild(tableDiv);
  }
  else
  {
    elem.appendChild(overflowContainer);
  }
  
  //the overflow container listens to DOM scroll events in case the scroll was triggered externally,
  //for example when the user tabs through the child content
  cbcClass._addBubbleEventListener(overflowContainer, "scroll", function (event) {self._handleScroll(event);});
};

/**
 * Get the value to use for the CSS display attribute.
 * @return {string} Value to use for CSS display attribute
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._getCssDisplay = function()
{
  return this._isHorizontal() ? "inline-block" : "block";
};

/**
 * Create the prev button.
 * @param {string} buttonId Id to use for the button
 * @param {string} buttonStyleClass Style class to use for the button
 * @param {Node} icon Button icon element
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._createPrevButton = function(
  buttonId, buttonStyleClass, icon)
{
  var self = this;
  var prevButton = document.createElement("div");
  this._prevButton = prevButton;
  if (buttonId)
  {
    prevButton.setAttribute("id", buttonId);
  }
  prevButton.setAttribute("class", buttonStyleClass);
  //hide the button from screen readers because it is not keyboard accessible
  prevButton.setAttribute("aria-hidden", "true");
  var prevButtonStyle = prevButton.style;
  prevButtonStyle.display = this._getCssDisplay();
  prevButtonStyle.position = "relative";
  if (this._isHorizontal())
  {
    prevButtonStyle.verticalAlign = "top";
  }
  var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
  cbcClass._addBubbleEventListener(prevButton, "click", function (event) {self._scrollPrev();});
  if (this._tableCellDivPrevButton)
  {
    //the button belongs to the table cell
    var tableCell = this._tableCellDivPrevButton;
    tableCell.appendChild(prevButton);
  }
  else
  {
    //make the prev button the first child
    var elem = this._elem;
    elem.insertBefore(prevButton, elem.firstChild);
  }
  
  if (icon)
  {
    prevButton.appendChild(icon);
  }
};

/**
 * Create the next button.
 * @param {string} buttonId Id to use for the button
 * @param {string} buttonStyleClass Style class to use for the button
 * @param {Node} icon Button icon element
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._createNextButton = function(
  buttonId, buttonStyleClass, icon)
{
  var self = this;
  var nextButton = document.createElement("div");
  this._nextButton = nextButton;
  if (buttonId)
  {
    nextButton.setAttribute("id", buttonId);
  }
  nextButton.setAttribute("class", buttonStyleClass);
  //hide the button from screen readers because it is not keyboard accessible
  nextButton.setAttribute("aria-hidden", "true");
  var nextButtonStyle = nextButton.style;
  nextButtonStyle.display = this._getCssDisplay();
  nextButtonStyle.position = "relative";
  if (this._isHorizontal())
  {
    nextButtonStyle.verticalAlign = "top";
  }
  var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
  cbcClass._addBubbleEventListener(nextButton, "click", function (event) {self._scrollNext();});
  if (this._tableCellDivNextButton)
  {
    //the button belongs to the table cell
    var tableCell = this._tableCellDivNextButton;
    tableCell.appendChild(nextButton);
  }
  else
  {
    //make the next button the last child
    var elem = this._elem;
    elem.appendChild(nextButton);
  }
  
  if (icon)
  {
    nextButton.appendChild(icon);
  }
};

/**
 * Get the content parent.
 * @return {Object} parent DOM element of the content
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._getContentParent = function()
{
  //if an explicit content parent was not specified, it will be the _contentContainer
  var contentParent = this._contentParent;
  if (!contentParent)
  {
    contentParent = this._contentContainer;
  }
  return contentParent;
};

/**
 * Measure the contents of the conveyor.
 * @return {Object} Total size of the contents
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._measureContents = function()
{
  var contentParent = this._getContentParent();
  var totalSize = {w: 0, h: 0};
  var sizes = [];
  if (contentParent.hasChildNodes())
  {
    var children = contentParent.childNodes;
    var bHoriz = this._isHorizontal();
    var contentWidth = 0;

    //get the width of the contentContainer, not the contentParent, because
    //in JET, if the children are in a buttonset, for example, the offsetLeft
    //of the children is relative to the contentContainer, not the 
    //contentParent
    var contentContainer = this._contentContainer;
    contentWidth = contentContainer.offsetWidth;

    var startOffset = 0;
    var prevSizeObj = null;
    for (var i = 0; i < children.length; i++)
    {
      var child = children[i];
      if (child.nodeType === 1)
      {
        var ww = child.offsetWidth;
        var hh = child.offsetHeight;
        var childId = child.id;
        var sizeObj = {w: ww, h: hh, id: childId};
        //calculating the start assumes that the browser has done the appropriate layout;
        //subtract 1 from the end so it's the last pixel of this child, not the start of the next child
        if (bHoriz)
        {
          //if RTL, still want to save the start coords in logical, ascending order beginning with 0
          if (this._bRtl)
          {
            sizeObj.start = contentWidth - (child.offsetLeft + ww);
          }
          else
          {
            sizeObj.start = child.offsetLeft;
          }
          
          //Offset each item's start coord by the first item's offset to handle cases like text-align:right,
          //where the items may be right-aligned within the content container.  We still want our logical 
          //coords to start at 0.
          if (i === 0)
            startOffset = sizeObj.start;
          sizeObj.start -= startOffset;
          
          totalSize.w = sizeObj.start + ww;
          totalSize.h = Math.max(totalSize.h, hh);
          sizeObj.end = totalSize.w - 1;
        }
        else
        {
          sizeObj.start = child.offsetTop;
          totalSize.w = Math.max(totalSize.w, ww);
          totalSize.h = sizeObj.start + hh;
          sizeObj.end = totalSize.h - 1;
        }
        
        //if this item overlaps the previous item, adjust the previous item to
        //end just before this item (can happen, for example, with horizontal
        //JET buttonsets)
        if (prevSizeObj)
        {
          if (prevSizeObj.end >= sizeObj.start)
          {
            var overlap = prevSizeObj.end - (sizeObj.start - 1);
            prevSizeObj.end -= overlap;
            if (bHoriz)
            {
              prevSizeObj.w -= overlap;
            }
            else
            {
              prevSizeObj.h -= overlap;
            }
          }
        }
        
        sizes.push(sizeObj);
        prevSizeObj = sizeObj;
      }
    }
  }
  this._sizes = sizes;
  return totalSize;
};

/**
 * Get the array of content sizes.
 * @return {Array} Array of content sizes
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._getSizes = function()
{
  //only calculate sizes if they haven't been calculated already
  if (!this._sizes)
  {
    var totalSize = this._measureContents();
    //only save the total size if it hasn't already been saved
    if (!this._totalSize)
    {
      this._totalSize = totalSize;
    }
  }
  return this._sizes;
};

/**
 * Show the next button.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._showNextButton = function()
{
  var nextButton = this._nextButton;
  var nextButtonStyle = nextButton.style;
  nextButtonStyle.display = this._getCssDisplay();
};

/**
 * Show the prev button.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._showPrevButton = function()
{
  var prevButton = this._prevButton;
  var prevButtonStyle = prevButton.style;
  prevButtonStyle.display = this._getCssDisplay();
};

/**
 * Hide the next button.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._hideNextButton = function()
{
  var nextButton = this._nextButton;
  var nextButtonStyle = nextButton.style;
  nextButtonStyle.display = "none";
};

/**
 * Hide the prev button.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._hidePrevButton = function()
{
  var prevButton = this._prevButton;
  var prevButtonStyle = prevButton.style;
  prevButtonStyle.display = "none";
};

/**
 * Determine if the next button is shown.
 * @return {boolean} true if shown, false if hidden
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._isNextButtonShown = function()
{
  var nextButton = this._nextButton;
  var nextButtonStyle = nextButton.style;
  return nextButtonStyle.display !== "none";
};

/**
 * Determine if the prev button is shown.
 * @return {boolean} True if shown, false if hidden
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._isPrevButtonShown = function()
{
  var prevButton = this._prevButton;
  var prevButtonStyle = prevButton.style;
  return prevButtonStyle.display !== "none";
};

/**
 * Get the size of a next/prev button along the direction of conveyor orientation.
 * @return {number} Size of a button
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._getButtonSize = function()
{
  return this._isHorizontal() ? this._buttonWidth : this._buttonHeight;
};

/**
 * Update visibility of the next/prev buttons and adjust scroll position accordingly.
 * @param {number} scroll Desired scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._updateButtonVisibility = function(scroll)
{
  var buttonSize = this._getButtonSize();
  var ovScroll = this._getCurrScroll();
  var ovSize = this._getCurrViewportSize();
  var bNeedsScroll = this._needsScroll();
  //if scrolling to the start, hide the prev button and reclaim its space
  if (scroll <= this._minScroll)
  {
    if (this._isPrevButtonShown())
    {
      ovSize += buttonSize;
      ovScroll -= buttonSize;
    }
    this._hidePrevButton();
  }
  //if not at the start, show the prev button and allocate space for it
  else if (bNeedsScroll)
  {
    if (!this._isPrevButtonShown())
    {
      ovSize -= buttonSize;
      ovScroll += buttonSize;
    }
    this._showPrevButton();
  }

  //if scrolling to the end, hide the next button and reclaim its space
  if (scroll >= this._maxScroll)
  {
    if (this._isNextButtonShown())
    {
      ovSize += buttonSize;
    }
    this._hideNextButton();
  }
  //if not at the end, show the next button and allocate space for it
  else if (bNeedsScroll)
  {
    if (!this._isNextButtonShown())
    {
      ovSize -= buttonSize;
    }
    this._showNextButton();
  }
  //update the overflow container
  this._setOverflowScroll(ovScroll);
  if (bNeedsScroll)
  {
    this._setOverflowMaxSize(ovSize);
  }
  else
  {
    this._clearOverflowMaxSize();
  }
};

/**
 * Set the max size of the overflow container.
 * @param {number} size Overflow max size
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._setOverflowMaxSize = function(size)
{
  var overflowContainer = this._overflowContainer;
  var overflowContainerStyle = overflowContainer.style;
  var s = size + "px";
  if (this._isHorizontal())
  {
    overflowContainerStyle.maxWidth = s;
  }
  else
  {
    overflowContainerStyle.maxHeight = s;
  }
};

/**
 * Clear the max size of the overflow container.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._clearOverflowMaxSize = function()
{
  var overflowContainer = this._overflowContainer;
  var overflowContainerStyle = overflowContainer.style;
  if (this._isHorizontal())
  {
    overflowContainerStyle.maxWidth = "";
  }
  else
  {
    overflowContainerStyle.maxHeight = "";
  }
};

/**
 * Set the overflow scroll position.
 * @param {number} scroll Overflow logical scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._setOverflowScroll = function(scroll)
{
  var overflowContainer = this._overflowContainer;
  if (this._isHorizontal())
  {
    overflowContainer.scrollLeft = this._convertScrollLogicalToBrowser(scroll);
  }
  else
  {
    overflowContainer.scrollTop = scroll;
  }
};

/**
 * Get the current overflow viewport size.
 * @return {number} Overflow viewport size
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._getCurrViewportSize = function()
{
  var overflowContainer = this._overflowContainer;
  return this._isHorizontal() ? overflowContainer.offsetWidth : overflowContainer.offsetHeight;
};

/**
 * Set the scroll position.
 * @param {number} scroll Desired scroll position
 * @param {boolean} bImmediate True to make the change immediately, false to animate it
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._setCurrScroll = function(scroll, bImmediate)
{
  //don't do anything if we're already in the middle of scrolling
  if (!this._bScrolling)
  {
    //if this function is called, the conveyor internally initiated the scroll, so turn off the 
    //flag for an externally triggered scroll
    this._bExternalScroll = false;
    this._setCurrScrollHelper(scroll, bImmediate);
  }
};

/**
 * Helper function to set scroll position.
 * @param {number} scroll Desired scroll position
 * @param {boolean} bImmediate True to make the change immediately, false to animate it
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._setCurrScrollHelper = function(scroll, bImmediate)
{
  if (this._isEmpty())
    return;
  
  this._bScrolling = true;
  scroll = this._constrainScroll(scroll);
  //update button visibility before scrolling
  this._updateButtonVisibility(scroll);
  var scrollFunc = this._scrollFunc;
  //if making the change immediately, simply call the anim end function
  if (bImmediate || !scrollFunc || scroll === this._getCurrScroll())
  {
    this._onScrollAnimEnd(scroll);
  }
  //if animating the change, call out to the provided callback
  else
  {
    var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
    // 1.1 px/ms is the desired animation speed, so calculate the duration based on the distance to scroll
    var duration = Math.abs(this._getCurrScroll() - scroll) / cbcClass._SCROLL_SPEED;
    var self = this;
    var onEndFunc = function () {self._onScrollAnimEnd(scroll);};
    //need to convert the logical scroll to the browser value for animating
    scrollFunc.call(this._callbackObj, this._overflowContainer, this._convertScrollLogicalToBrowser(scroll), 
                    duration, onEndFunc);
  }
};

/**
 * Get the current scroll position.
 * @return {number} Logical scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._getCurrScroll = function()
{
  var overflowContainer = this._overflowContainer;
  return this._isHorizontal() ? this._convertScrollBrowserToLogical(overflowContainer.scrollLeft) : 
                                overflowContainer.scrollTop;
};

/**
 * Determine if the conveyor needs to show scroll buttons.
 * @return {boolean} True if scrolling is needed, false if not
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._needsScroll = function()
{
  var contentContainer = this._contentContainer;
  var overflowContainer = this._overflowContainer;
  return this._isHorizontal() ? 
    contentContainer.offsetWidth > overflowContainer.offsetWidth : 
    contentContainer.offsetHeight > overflowContainer.offsetHeight;
};

/**
 * Constrain the scroll position.
 * @param {number} scroll Desired scroll position
 * @return {number} Constrained scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._constrainScroll = function(scroll)
{
  if (!this._needsScroll() || scroll < this._minScroll)
  {
    scroll = this._minScroll;
  }
  else if (scroll > this._maxScroll)
  {
    scroll = this._maxScroll;
  }
  return scroll;
};

/**
 * Handle a mousewheel event.
 * @param {Object} event Event object
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._handleMouseWheel = function(event)
{
  //if we're already scrolling, just consume the event
  var bConsumeEvent = this._bScrolling;
  if (this._needsScroll() && !this._bScrolling)
  {
    var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
    var wheelDelta = cbcClass._getWheelDelta(event);
    if (wheelDelta < 0 && this._isNextButtonShown())
    {
      bConsumeEvent = true;
      this._scrollNext();
    }
    else if (wheelDelta > 0 && this._isPrevButtonShown())
    {
      bConsumeEvent = true;
      this._scrollPrev();
    }
  }
  if (bConsumeEvent)
  {
    event.preventDefault();
    event.stopPropagation();
  }
};

/**
 * Handle a touchstart event.
 * @param {Object} event Event object
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._handleTouchStart = function(event)
{
  var eventTouches = event.touches;
  if (this._needsScroll() && !this._bScrolling && eventTouches.length === 1)
  {
    this._bTouch = true;
    //save off some initial information at the start of a swipe
    var firstTouch = eventTouches[0];
    this._touchStartCoord = this._isHorizontal() ? firstTouch.pageX : firstTouch.pageY;
    this._touchStartScroll = this._getCurrScroll();
    this._touchStartNextScroll = this._calcNextScroll();
    this._touchStartPrevScroll = this._calcPrevScroll();
  }
};

/**
 * Handle a touchmove event.
 * @param {Object} event Event object
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._handleTouchMove = function(event)
{
  //only need to do something if we also received the touchstart
  if (this._bTouch)
  {
    var bHoriz = this._isHorizontal();
    var eventTouches = event.touches;
    var firstTouch = eventTouches[0];
    var touchCoord = bHoriz ? firstTouch.pageX : firstTouch.pageY;
    var diff = touchCoord - this._touchStartCoord;
    //only scroll next/prev if the swipe is longer than the threshold; if it's less, then just
    //drag the items with the swipe
    var cbcClass = adf.shared.impl.conveyorBelt.ConveyorBeltCommon;
    var overflowContainer = this._overflowContainer;
    var threshold = cbcClass._SWIPE_THRESHOLD * 
                    (bHoriz ? overflowContainer.offsetWidth : overflowContainer.offsetHeight);
    //if swiping under the threshold, just move the conveyor with the swipe
    if (Math.abs(diff) < threshold)
    {
      this._setCurrScroll(this._touchStartScroll - diff, true);
    }
    //if swiping beyond the threshold, scroll to the next/prev set of items
    else
    {
      //in non-RTL, if swiping left or up, scroll next; otherwise scroll prev
      //in RTL, if swiping right or up, scroll next; otherwise scroll prev
      var bNext = (bHoriz && this._bRtl) ? (diff > 0) : (diff < 0);
      this._setCurrScroll(bNext ? this._touchStartNextScroll : this._touchStartPrevScroll);
      //don't scroll again for this same swipe
      this._bTouch = false;
    }
  }
};

/**
 * Handle a touchend event.
 * @param {Object} event Event object
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._handleTouchEnd = function(event)
{
  //if a full page swipe hasn't happened, scroll back to the original position
  if (this._bTouch)
  {
    this._setCurrScroll(this._touchStartScroll);
  }
  this._bTouch = false;
};

/**
 * Handle a DOM scroll event.
 * @param {Object} event Event object
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._handleScroll = function(event)
{
  //if the scroll was triggered externally, for example by tabbing through 
  //child items, then update the visual state of the conveyor to match the
  //new scroll state
  if (this._bExternalScroll && !this._bScrolling)
  {
    this._setCurrScrollHelper(this._getCurrScroll(), true);
  }
};

/**
 * Function called after a scroll finishes.
 * @param {number} scroll Scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._onScrollAnimEnd = function(scroll)
{
  //set the desired value after the animation to make sure that the final value is exactly what was intended,
  //in case the animation introduced interpolation errors
  this._setOverflowScroll(scroll);
  //toggle the externalScroll flag in a timeout so that it happens after any current processing finishes
  this._setExternalScrollTimeout();
  this._bScrolling = false;
  //if there is a callback to notify about a change of first visible item, call it now
  if (this._firstVisibleItemChangedFunc)
  {
    this._firstVisibleItemIndex = this._calcFirstVisibleItemIndex();
    //if there is more than one item visible, and the first item is only 
    //partially visible, then save the second item as the actual first visible 
    //item for state purposes (if the last navigation had been prev,
    //we would want the last visible item to remain visible)
    var lastVisIndex = this._calcLastVisibleItemIndex();
    var sizes = this._getSizes();
    var sizeObj = sizes[this._firstVisibleItemIndex];
    if (this._firstVisibleItemIndex !== lastVisIndex &&
        this._getCurrScroll() > sizeObj.start &&
        this._firstVisibleItemIndex < sizes.length - 2)
    {
      this._firstVisibleItemIndex++;
      sizeObj = sizes[this._firstVisibleItemIndex];
    }
    this._firstVisibleItemId = sizeObj.id;
    var firstVisibleItemChangedFunc = this._firstVisibleItemChangedFunc;
    firstVisibleItemChangedFunc.call(this._callbackObj, this._firstVisibleItemId);
  }
};

/**
 * Set a timout to reset the externalScroll flag.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._setExternalScrollTimeout = function()
{
  var self = this;
  var f = function () {if (self) self._bExternalScroll = true;};
  window.setTimeout(f, 0); 
};

/**
 * Scroll to the next set of items.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._scrollNext = function()
{
  if (!this._bScrolling)
    this._setCurrScroll(this._calcNextScroll());
};

/**
 * Scroll to the previous set of items.
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._scrollPrev = function()
{
  if (!this._bScrolling)
    this._setCurrScroll(this._calcPrevScroll());
};

/**
 * Calculate the scroll position for the next set of items.
 * @return {number} Next scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._calcNextScroll = function()
{
  var nextIndex = this._calcNextVisibleItemIndex();
  var scroll = 0;
  //if single item is bigger than viewport, then scroll by viewport size
  if (nextIndex === this._calcFirstVisibleItemIndex())
  {
    scroll = this._getCurrScroll() + this._getCurrViewportSize();
  }
  else
  {
    scroll = this._calcStartScroll(nextIndex);
  }
  return scroll;
};

/**
 * Calculate the scroll position for the previous set of items.
 * @return {number} Previous scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._calcPrevScroll = function()
{
  var prevIndex = this._calcPrevVisibleItemIndex();
  var scroll = 0;
  //if single item is bigger than viewport, then scroll by viewport size
  if (prevIndex === this._calcLastVisibleItemIndex())
  {
    scroll = this._getCurrScroll() - this._getCurrViewportSize();
  }
  else
  {
    scroll = this._calcEndScroll(prevIndex);
  }
  //if at the end and scrolling prev, anticipate the next button becoming 
  //visible and adjust the scroll position
  if (!this._isNextButtonShown())
  {
    scroll += this._getButtonSize();
  }
  //if scrolling prev and the scroll position is less than the size of the prev button, just
  //scroll to the very beginning because the prev button should get hidden
  if (scroll < this._getButtonSize())
  {
    scroll = this._minScroll;
  }
  return scroll;
};

/**
 * Calculate the scroll position for the start of the specified item.
 * @param {number} index Index of the item to scroll to
 * @return {number} Scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._calcStartScroll = function(index)
{
  var sizes = this._getSizes();
  var sizeObj = sizes[index];
  return sizeObj.start;
};

/**
 * Calculate the scroll position for the end of the specified item.
 * @param {number} index Index of the item to scroll to
 * @return {number} Scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._calcEndScroll = function(index)
{
  var sizes = this._getSizes();
  var sizeObj = sizes[index];
  return sizeObj.end - this._getCurrViewportSize() + 1;
};

/**
 * Calculate the index of the first visible item.
 * @return {number} Index of first visible item
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._calcFirstVisibleItemIndex = function()
{
  var currScroll = this._getCurrScroll();
  var i = this._calcItemIndex(currScroll);
  return (i < 0) ? 0 : i;
};

/**
 * Calculate the index of the last visible item.
 * @return {number} Index of last visible item
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._calcLastVisibleItemIndex = function()
{
  var elemSize = this._getCurrViewportSize();
  var currScroll = this._getCurrScroll() + elemSize - 1;
  var i = this._calcItemIndex(currScroll);
  var sizes = this._getSizes();
  return (i < 0) ? sizes.length - 1 : i;
};

/**
 * Calculate the index of the previous visible item.
 * @return {number} Index of previous visible item
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._calcPrevVisibleItemIndex = function()
{
  var currScroll = this._getCurrScroll() - 1;
  var i = this._calcItemIndex(currScroll);
  return (i < 0) ? 0 : i;
};

/**
 * Calculate the index of the next visible item.
 * @return {number} Index of next visible item
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._calcNextVisibleItemIndex = function()
{
  var elemSize = this._getCurrViewportSize();
  var currScroll = this._getCurrScroll() + elemSize;
  var i = this._calcItemIndex(currScroll);
  var sizes = this._getSizes();
  return (i < 0) ? sizes.length - 1 : i;
};

/**
 * Calculate the index of the item at the given scroll position.
 * @param {number} scroll Scroll position
 * @return {number} Index of item at given scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._calcItemIndex = function(scroll)
{
  var sizes = this._getSizes();
  for (var i = 0; i < sizes.length; i++)
  {
    var sizeObj = sizes[i];
    if (scroll <= sizeObj.end)
      return i;
  }
  return -1;
};

/**
 * Convert a logical scroll position to its corresponding browser value.
 * @param {number} scroll logical scroll position
 * @return {number} browser scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._convertScrollLogicalToBrowser = function(scroll)
{
  //(comment mostly copied from AdfConveyorBeltSupport)
  //If this is LTR or RTL mode in IE, then we want the default positive new scroll value.
  //If FF in RTL, then get the negative scroll value
  //If Webkit in RTL, to scroll to a position, we resolve this equation:
  // contentContainerWidth - browserScroll = overflowContainerWidth + logicalScroll
  var newScroll = scroll;
  if (this._bRtl && this._isHorizontal())
  {
    if (this._bAgentGecko) {
      newScroll = -scroll;
    }
    else if (this._bAgentWebkit || this._bAgentOpera) {
      var contentContainer = this._contentContainer;
      var overflowContainer = this._overflowContainer;
      newScroll = contentContainer.offsetWidth - overflowContainer.offsetWidth - scroll;
    }
  }
  return newScroll;
};

/**
 * Convert a browser scroll position to its corresponding logical value.
 * @param {number} scroll browser scroll position
 * @return {number} logical scroll position
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon.prototype._convertScrollBrowserToLogical = function(scroll)
{
  //(comment mostly copied from AdfConveyorBeltSupport)
  //If this is LTR or RTL mode in IE, then we want the default positive new scroll value.
  //If FF in RTL, then get the negative scroll value
  //If Webkit in RTL, to scroll to a position, we resolve this equation:
  // contentContainerWidth - browserScroll = overflowContainerWidth + logicalScroll
  
  //because the equations are the same whether converting from browser -> logical or logical -> browser,
  //simply call _convertScrollLogicalToBrowser from here
  //(NOTE: want to leave _convertScrollBrowserToLogical as a separate function so that it's clear from the
  //calling code which conversion direction is used, and in case the conversion impls ever need to be changed)
  return this._convertScrollLogicalToBrowser(scroll);
};

/**
 * Scroll animation speed (px/ms).
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._SCROLL_SPEED = 1.1;
/**
 * Touch swipe threshold (percentage of conveyor size).
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._SWIPE_THRESHOLD = .33;
/**
 * Time between checks for size changes (ms).
 */
adf.shared.impl.conveyorBelt.ConveyorBeltCommon._CHECK_SIZES_INTERVAL = 300;
// lory retrieved from https://raw.github.com/jquery/jquery-ui/1-10-stable/ui/jquery.ui.dialog.js on 09/03/2013, and then modified

//
// Issues: do we want our own copy of $ui.dialog ? 
// Notes:
//  -  $.ui.dialog.overlayInstances and $.ui.dialog['overlayInstances'] are synonyms
//  - $.uiBackCompat has been deprecated
//


/*!
 * jQuery UI Dialog @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  // jquery.ui.button.js
 *  jquery.oj.ojButton.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function() {

    var sizeRelatedOptions = {
	buttons: true,
	height: true,
	maxHeight: true,
	maxWidth: true,
	minHeight: true,
	minWidth: true,
	width: true
    },
    resizableRelatedOptions = {
	maxHeight: true,
	maxWidth: true,
	minHeight: true,
	minWidth: true
    };

    /**
    * @class
    * @name oj.ojDialog
    *
    * @classdesc
    * <h3 id="dialogOverview-section">
    *   JET Dialog Component
    *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#dialogOverview-section"></a>
    * </h3>
    * <p>Description: Themeable, WAI-ARIA-compliant dialog component.
    * A dialog is a floating window that typically contains a title bar and a content area. 
    * The dialog window can be moved, resized and with the title area, and closed with the 'x' icon by default.</p>
    *
    *<p>If the content length exceeds the maximum height, a scrollbar will automatically appear.</p>
    *
    *<p>A bottom button bar and semi-transparent modal overlay layer are common options that can be added.</p>
    *
    *<h3>Focus</h3>
    *
    *<p>Upon opening a dialog, focus is automatically moved to the first item that matches the following:</p>
    *<ol>
    *  <li>The first element within the dialog with the <code>autofocus</code> attribute</li>
    *  <li>The first <a href="/tabbable-selector/"><code>:tabbable</code></a> element within the dialog's content</li>
    *  <li>The first <a href="/tabbable-selector/"><code>:tabbable</code></a> element within the dialog's buttonpane</li>
    *  <li>The dialog's close button</li>
    *  <li>The dialog itself</li>
    *</ol>
    *<p>While open, the dialog widget ensures that tabbing cycles focus between elements within the dialog itself, not elements outside of it. Modal dialogs additionally prevent mouse users fro  clicking on elements outside of the dialog.</p>
    *
    *<p>Upon closing a dialog, focus is automatically returned to the element that had focus when the dialog was opened.</p>
    *
    *<h3>HTML Markup and Style Classes</h3>
    *
    * Three formatting classes are provided:
    *
    *<ul>
    *  <li> <b> oj-dialog-header </b> </li>
    *  Optional. If oj-dialog-header is omitted, a header will automatically be created. 
    *  <li> <b> oj-dialog-body </b> </li>
    *  Expected. Formats the body of the dialog.
    *  <li> <b> oj-dialog-footer </b> </li>
    *  Expected. Formats the footer of the dialog.
    *</ul>
    *
    * For automically created headers, the title of the header is the dialog title. A close button will also be created.
    *
    *<h3>Examples</h3>
    *
    * The following defines a basic dialog.
    *
    * <pre class="prettyprint">
    * <code>
    *
    * &lt;div id="dialog" class="ojDialog" title="ojDialog Title"&gt;
    *     &lt;div class="oj-dialog-body"&gt;
    *         &lt;p&gt;Dialog Text&lt;/p&gt;
    *     &lt;/div&gt;
    *     &lt;div class="oj-dialog-footer"&gt;
    *        &lt;button id="buttonCancel" data-bind="ojComponent: 
    *              { component: 'ojButton', label: 'OK'}"&gt; &lt;/button&gt;
    *        &lt;button data-bind="ojComponent: 
    *              { component: 'ojButton', label: 'Cancel'}"&gt; &lt;/button&gt;
    *     &lt;/div&gt;
    * &lt;/div&gt;
    *
    * </code></pre>
    *
    * To implement a button action that closes the dialog, just implement a click handler on the dialog id:
    *
    * <pre class="prettyprint">
    * <code>
    *
    * function() {
    *   $("#dialog").ojDialog({width: '400', modality: "modeless"});
    *   $("#buttonCancel").click(function() {
    *     $("#dialog").ojDialog("close");
    *   });
    * });
    *
    * </code></pre>
    *
    * A dialog with user-defined header is shown next.
    *
    * <pre class="prettyprint">
    * <code>
    *
    * &lt;div id="dialog" class="ojDialog" title="ojDialog Title"&gt;
    *   &lt;div class="oj-dialog-header" aria-labelledby="dialog-title-id"&gt;
    *     &lt;span id="dialog-title-id" class="oj-dialog-title"&gt; User Defined Header&lt;/span&gt;
    *    &lt;/div&gt;
    *    &lt;div class="oj-dialog-body"&gt;
    *        &lt;p&gt;Dialog Text&lt;/p&gt;
    *        &lt;br&gt;
    *    &lt;/div&gt;
    *    &lt;div class="oj-dialog-footer"&gt;
    *       &lt;button data-bind="ojComponent: 
    *           { component: 'ojButton', label: 'OK'}"&gt; &lt;/button&gt;
    *       &lt;button id="buttonCancel" class="" data-bind="ojComponent: 
    *           { component: 'ojButton', label: 'Cancel'}"&gt; &lt;/button&gt;
    *    &lt;/div&gt;
    * &lt;/div&gt;
    * 
    * </code></pre>
    *
    * @desc Creates a JET Dialog.
    * @param {Object=} options a map of option-value pairs to set on the component
    * @example <caption>Initialize a (modal) dialog with no options specified:</caption>
    * $( ".selector" ).ojDialog();
    * @example <caption>Create a modeless dialog of width 400:</caption>
    * $("#dialog").ojDialog({width: '400', modality: "modeless"});
    */
    oj.__registerWidget("oj.ojDialog", $['oj']['baseComponent'], {
	version: "1.0.0",
        widgetEventPrefix : "oj", 
	options: 
	{
	    /** 
             *
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated
             */
	    appendTo: "body",

	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated Replaced by initialVisibility.
             */
	    autoOpen: true,
	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated Replaced by html markup.
             */
	    buttons: [],

	    /**
	     * Specifies the escape behavior of the dialog.
	     * If set to <code class="prettyprint">"close"</code> (the default) the dialog will close when it has focus and user presses the escape (ESC) key.
	     * If <code class="prettyprint">"none"</code>, no actions will be associated with the escape key.
             *
             * @expose 
             * @memberof! oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"close"</code>
             *
             * @example <caption>Initialize the dialog to disable the default <code class="prettyprint">escapeBehavior</code></caption>
             * $(".selector" ).ojDialog( {escapeBehavior: "none" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">escapeBehavior</code> option, after initialization:</caption>
             * // getter
             * var escapeBehavior = $(".selector" ).ojDialog( "option", "escapeBehavior" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "escapeBehavior", "none");
             */
	    escapeBehavior: 'close',

	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (replaced by escapeBehavior)
             */
	     closeOnEscape: true,


	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated
             */
	    closeText: "",


	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated
             */
	    dialogClass: "",

	    /**
	     * Specifies the drag affordance.
	     * If set to <code class="prettyprint">"title-bar"</code> (the default) the dialog will be draggable by the title bar.
	     * If <code class="prettyprint">"none"</code>, the dialog will not be draggable.
             *
             * @expose 
             * @memberof! oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"close"</code>
             *
             * @example <caption>Initialize the dialog to disable dragging <code class="prettyprint">dragAffordance</code></caption>
             * $(".selector" ).ojDialog( {dragAffordance: "none" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">dragAffordance</code> option, after initialization:</caption>
             * // getter
             * var dragAffordance = $(".selector" ).ojDialog( "option", "dragAffordance" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "dragAffordance", "none");
             */
	    dragAffordance: 'title-bar',

	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (renamed to dragAffordance)
             */
	     draggable: true,

	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (use css classes instead)
             */
	    hide: null,

	    /**
	     * The height of the dialog. <br>
	     * <strong>Multiple types are supported:</strong><ul>
	     * <li>
	     * <strong>Number</strong>: The height in pixels.</li>
	     * <li>
	     * <strong>String</strong>: The only supported string value is <code>"auto"</code> which will allow the dialog height to adjust based on its content.</li>
	     * </ul>
             *
             * @expose 
             * @memberof! oj.ojDialog
             * @type {string|number} 
             *
             * @example <caption>Initialize the dialog to a fixed height <code class="prettyprint">height</code></caption>
             * $(".selector" ).ojDialog( {height: 300 } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">height</code> option, after initialization:</caption>
             * // getter
             * var height = $(".selector" ).ojDialog( "option", "height" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "height", 300);
             */
	    height: "auto",

	    /**
             * <p> Set the initial visibility of the dialog. 
	     * If set to <code class="prettyprint">"show"</code>, the dialog will automatically open upon initialization. 
	     * If <code class="prettyprint">"hide"</code>, the dialog will stay hidden until the <a href="#method-open"><code class="prettyprint">open()</code></a> method is called.
             *
             * @expose 
             * @memberof! oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"hide"</code>
             *
             * @example <caption>Initialize the dialog with the <code class="prettyprint">initialVisibility</code> option specified:</caption>
             * $(".selector" ).ojDialog( {initialVisibility: "show" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">initialVisibility</code> option, after initialization:</caption>
             * // getter
             * var initialVisibility = $(".selector" ).ojDialog( "option", "initialVisibility" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "initialVisibility", "show");
             */
	    initialVisibility: "show",

	    // createTitlebar: true,

	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (use css variables max-height instead)
             */
	    maxHeight: null,
	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (use css variables max-width instead)
             */
	    maxWidth: null,
	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (use css variables min-height instead)
             */
	    minHeight: 150,
	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (use css variables min-width instead)
             */
	    minWidth: 150,

	    /** 
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (replaced by modality)
             */
	    modal: false,

	    // todo: change default (spec says default should be "modal")
	    /**
	     *
	     * The modality of the dialog. "modal" will disable interaction with other page elements. Modal dialogs overlay other page elements.
             * A modeless dialg can be defined with "modeless" (current default).
             *
             * @expose 
             * @memberof! oj.ojDialog
             * @instance
             * @type {string}
             *
             * @example <caption>Initialize the dialog to a specific modality <code class="prettyprint">modality</code></caption>
             * $(".selector" ).ojDialog( {modality: "modal" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">modality</code> option, after initialization:</caption>
             * // getter
             * var modality = $(".selector" ).ojDialog( "option", "modality" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "modality", "modal");
             */
	    modality: "modal",

	    // todo: link to position utility?
	    // JQUi doc had { ..., of: button}} - what does this mean?

	    /**
	     *
	     * Specifies where the dialog should be displayed.
             * The dialog will handle collisions such that as much of the dialog will be visible as possible.
             *
             * @expose 
             * @memberof! oj.ojDialog
             * @instance
             * @type {Object}
             * @default <code class="prettyprint">{my: "center", at: "center", of: "window"}</code>
             *
             * @example <caption>Initialize the dialog to a specific position <code class="prettyprint">position</code></caption>
             * $(".selector" ).ojDialog( {position:, {my: "left top", at: "left bottom", of: window}} );
             * of
             * @example <caption>Get or set the <code class="prettyprint">position</code> option, after initialization:</caption>
             * // getter
             * var position = $(".selector" ).ojDialog( "option", "position" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "position", {my: "left top", at: "left bottom", of: window});
             */
	    position: {
                /**
                 *
                 * @expose 
		 * @type {string}
                 *
                 */
		my: "center",
                /**
                 *
                 * @expose 
		 * @type {string}
                 *
                 */
		at: "center",
                /**
                 *
                 * @expose 
		 * @type {Object}
                 *
                 */
		of: window,
                /**
                 *
                 * @expose 
		 * @type {string}
                 *
                 */
		collision: "fit",
		// Ensure the titlebar is always visible
		using: function( pos ) {
		    var topOffset = $( this ).css( pos ).offset().top;
		    if ( topOffset < 0 ) {
			$( this ).css( "top", pos.top - topOffset );
		    }
		}
	    },

	    /**
	     *
	     * The resizeBehavior of the dialog. "resizable" (default) makes the dialog resizable.
             * "none" disables dialog resizability.
             *
             * @expose 
             * @memberof! oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"resizable"}</code>
             *
             * @example <caption>Initialize the dialog to a specific resizeBehavior <code class="prettyprint">resizeBehavior</code></caption>
             * $(".selector" ).ojDialog( {resizeBehavior: "none" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">resizeBehavior</code> option, after initialization:</caption>
             * // getter
             * var resizeBehavior = $(".selector" ).ojDialog( "option", "resizeBehavior" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "resizeBehavior", "none");
             */
	    resizeBehavior: "resizable",

	    /** 
             * @expose 
	     * @memberof! oj.ojDialog
	     * @instance
             * @deprecated Replaced by resizeBehavior.
             */
	    resizable: true,


	    /**
	     *
	     * The role of the dialog. By default, role="dialog" is added to the generated HTML markup that surrounds the dialog.
             * When used as an alert dialog, the user should set role to "alertdialog".
             *
             * @expose 
             * @memberof! oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"dialog"}</code>
             *
             * @example <caption>Initialize the dialog with the <code class="prettyprint">role</code></caption> option specified:</caption>
             * $(".selector" ).ojDialog( {role: "alertdialog" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">role</code> option, after initialization:</caption>
             * // getter
             * var role = $(".selector" ).ojDialog( "option", "role" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "role", "alertdialog");
             */
	    role: "resizable",

	    /** 
             * @expose 
	     * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (use css classes instead)
             */
	    show: null,

	    /**
	     *
	     * Specify the title of the dialog. null is the default. 
             *
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @type {string|null}
             *
             * @example <caption>Initialize the dialog to a specific title <code class="prettyprint">title</code></caption>
             * $(".selector" ).ojDialog( {title: "Title of Dialog" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">title</code> option, after initialization:</caption>
             * // getter
             * var title = $(".selector" ).ojDialog( "option", "title" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "title", "Title of Dialog");
             */
	    title: null,

	    /**
	     * The width of the dialog, in pixels <br>
             *
             * @expose 
             * @memberof! oj.ojDialog
	     * @instance
             * @type {number}
             * @default <code class="prettyprint">300</code>
             *
             * @example <caption>Initialize the dialog to a fixed width <code class="prettyprint">width</code></caption>
             * $(".selector" ).ojDialog( {width: 400 } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">width</code> option, after initialization:</caption>
             * // getter
             * var width = $(".selector" ).ojDialog("option", "width" );
             * 
             * // setter
             * $(".selector" ).ojDialog("option", "width", 400);
             */
	    width: 300,

	    // need to add role


	    ///////////////////////////////////////////////////////
	    // events
	    ///////////////////////////////////////////////////////

            /**
             * Triggered when a dialog is about to close. If cancelled, the dialog will not close.
             *
	     * @expose
             * @event 
             * @name beforeClose
             * @memberof! oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Empty object included for consistency with other events
             * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">beforeClose</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "beforeClose": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeClose</code> event:</caption>
             * $( ".selector" ).on( "ojbeforeClose", function( event, ui ) {} );
             */

	    beforeClose: null,

            /**
             * Triggered when the dialog is closed.
             *
	     * @expose
             * @event 
             * @name close
             * @memberof! oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Empty object included for consistency with other events
             * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">close</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "close": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojclose</code> event:</caption>
             * $( ".selector" ).on( "ojclose", function( event, ui ) {} );
             */

	    close: null,

	    /** 
             * @expose 
	     * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (In the future, this functionality will be supported in HTML 5)
             */
	    drag: null,

	    /** 
             * @expose 
	     * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (In the future, this functionality will be supported in HTML 5)
             */
	    dragStart: null,

	    /** 
             * @expose 
	     * @memberof! oj.ojDialog
	     * @instance
             * @deprecated (In the future, this functionality will be supported in HTML 5)
             */
	    dragStop: null,

            /**
             * Triggered when the dialog gains focus.
             *
	     * @expose
             * @event 
             * @name focus
             * @memberof! oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Empty object included for consistency with other events
             * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">focus</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "focus": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojfocus</code> event:</caption>
             * $( ".selector" ).on( "ojfocus", function( event, ui ) {} );
             */

	    focus: null,
            /**
             * Triggered when the dialog is opened.
             *
	     * @expose
             * @event 
             * @name open
             * @memberof! oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Empty object included for consistency with other events
             * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">open</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "open": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojopen</code> event:</caption>
             * $( ".selector" ).on( "ojopen", function( event, ui ) {} );
             */
	    open: null,

            /**
             * Triggered when the dialog is being resized.
             *
	     * @expose
             * @event 
             * @name resize
             * @memberof! oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Empty object included for consistency with other events
             * 
	     * <ul>
	     * <li>
	     * <div><strong>event</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Event">Event</a>
	     * </div>
	     * <div></div>
	     * </li>
	     * <li>
	     * <div><strong>ui</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div></div>
	     * <ul>
	     * <li>
	     * <div><strong>originalPosition</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The CSS position of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>position</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current CSS position of the dialog.</div>
	     * </li>
	     * <li>
	     * <div><strong>originalSize</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The size of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>size</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current size of the dialog.</div>
	     * </li>
	     * </ul>
	     * </li>
	     * </ul>
	     * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">resize</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "resize": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojresize</code> event:</caption>
             * $( ".selector" ).on( "ojresize", function( event, ui ) {} );
             */
	    resize: null,

            /**
             * Triggered when the user starts resizing the dialog.
             *
	     * @expose
             * @event 
             * @name resizeStart
             * @memberof! oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Empty object included for consistency with other events
             * 
	     * <ul>
	     * <li>
	     * <div><strong>event</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Event">Event</a>
	     * </div>
	     * <div></div>
	     * </li>
	     * <li>
	     * <div><strong>ui</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div></div>
	     * <ul>
	     * <li>
	     * <div><strong>originalPosition</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The CSS position of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>position</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current CSS position of the dialog.</div>
	     * </li>
	     * <li>
	     * <div><strong>originalSize</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The size of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>size</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current size of the dialog.</div>
	     * </li>
	     * </ul>
	     * </li>
	     * </ul>
	     * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">resizeStart</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "resizeStart": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojresizeStart</code> event:</caption>
             * $( ".selector" ).on( "ojresizeStart", function( event, ui ) {} );
             */
	    resizeStart: null,

            /**
             * Triggered when the user stops resizing the dialog.
             *
	     * @expose
             * @event 
             * @name resizeStop
             * @memberof! oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Empty object included for consistency with other events
             * 
	     * <ul>
	     * <li>
	     * <div><strong>event</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Event">Event</a>
	     * </div>
	     * <div></div>
	     * </li>
	     * <li>
	     * <div><strong>ui</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div></div>
	     * <ul>
	     * <li>
	     * <div><strong>originalPosition</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The CSS position of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>position</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current CSS position of the dialog.</div>
	     * </li>
	     * <li>
	     * <div><strong>originalSize</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The size of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>size</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current size of the dialog.</div>
	     * </li>
	     * </ul>
	     * </li>
	     * </ul>
	     * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">resizeStop</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "resizeStop": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojresizeStop</code> event:</caption>
             * $( ".selector" ).on( "ojresizeStop", function( event, ui ) {} );
             */
	    resizeStop: null
	},

        
        /**
         * Triggered when the dialog is created.
         *
         * @event 
         * @name create
         * @memberof! oj.ojDialog
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Empty object included for consistency with other events
         * 
         * @example <caption>Initialize the buttonset with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojDialog({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */

	_create: function() {
	    this.originalCss = {
		display: this.element[0].style.display,
		width: this.element[0].style.width,
		minHeight: this.element[0].style.minHeight,
		maxHeight: this.element[0].style.maxHeight,
		height: this.element[0].style.height
	    };
	    this.originalPosition = {
		parent: this.element.parent(),
		index: this.element.parent().children().index( this.element )
	    };
	    this.originalTitle = this.element.attr("title");
	    this.options.title = this.options.title || this.originalTitle;

	    this._createWrapper();

	    this.element
		.show()
		.removeAttr("title")
		// .addClass("oj-dialog-content oj-widget-content")
		.addClass("oj-dialog-content oj-dialog-default-content")
		.appendTo( this.uiDialog );

	    // check

	    this.userDefinedDialog = false;
	    if (this.uiDialog.find(".oj-dialog-header").length) 
		this.userDefinedDialog = true;

	    if (this.userDefinedDialog) {

		// var a = this.uiDialog.find(".oj-dialog-content");
		var b = this.uiDialog.find(".oj-dialog-header");

		b.prependTo(this.uiDialog);

	    }

	    // If a user-defined header is NOT there, then create a title bar
	    if (!this.userDefinedDialog) { this._createTitlebar(); }
	    // if (!this.uiDialog.find(".oj-dialog-header").length ) { this._createTitlebar(); }

	    this._createButtonPane();

            // if ( this.options.draggable && $.fn.draggable ) {
	    if ( this.options.dragAffordance === "title-bar" && $.fn.draggable ) {
		this._makeDraggable();
	    }
	    // if ( this.options.resizable && $.fn.resizable ) {
	    if (this.options.resizeBehavior === "resizable" && $.fn.resizable) {
		this._makeResizable();
	    }

	    this._isOpen = false;
            
            this._super();
	},

	_init: function() {

	    if (this.options.initialVisibility === "show" ) {
		this.open();
	    }

	    // if ( this.options.autoOpen ) {
	    // this.open();
    	    // }

	},

	_appendTo: function() {
	    var element = this.options.appendTo;
	    if ( element && (element.jquery || element.nodeType) ) {
		return $( element );
	    }
	    return this.document.find( element || "body" ).eq( 0 );
	},

	/**
	 * Remove the dialog functionality completely. 
	 * This will return the element back to its pre-init state.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
	 * @method
	 * @name oj.ojDialog#destroy
	 * @memberof! oj.ojDialog
	 * @instance
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
	 * var destroy = $( ".selector" ).ojDialog( "destroy" );
	 */

	_destroy: function() {
	    var next,
	    originalPosition = this.originalPosition;

	    this._destroyOverlay();

	    this.element
		.removeUniqueId()
		// .removeClass("oj-dialog-content oj-widget-content")
		.removeClass("oj-dialog-content")
		.css( this.originalCss )
	    // Without detaching first, the following becomes really slow
		.detach();

	    this.uiDialog.stop( true, true ).remove();

	    if ( this.originalTitle ) {
		this.element.attr( "title", this.originalTitle );
	    }

	    next = originalPosition.parent.children().eq( originalPosition.index );
	    // Don't try to place the dialog next to itself (#8613)
	    if ( next.length && next[0] !== this.element[0] ) {
		next.before( this.element );
	    } else {
		originalPosition.parent.append( this.element );
	    }
	},

	/**
	 * Returns a <code class="prettyprint">jQuery</code> object containing the generated wrapper.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
	 * @expose
	 * @name oj.ojDialog#widget
	 * @memberof! oj.ojDialog
	 * @instance
	 * @return {jQuery} the dialog
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
	 * var widget = $( ".selector" ).ojDialog( "widget" );
	 */

	widget: function() {
	    return this.uiDialog;
	},

	disable: $.noop,
	enable: $.noop,


	/**
	 * Closes the dialog.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
	 * @method
	 * @name oj.ojDialog#close
	 * @memberof! oj.ojDialog
	 * @instance
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">close</code> method:</caption>
	 * var close = $( ".selector" ).ojDialog( "close" );
	 */
	close: function( event ) {
	    var that = this;

	    if ( !this._isOpen || this._trigger( "beforeClose", event ) === false ) {
		return;
	    }

	    this._isOpen = false;
	    this._destroyOverlay();

	    if ( !this.opener.filter(":focusable").focus().length ) {
		// Hiding a focused element doesn't trigger blur in WebKit
		// so in case we have nothing to focus on, explicitly blur the active element
		// https://bugs.webkit.org/show_bug.cgi?id=47182
		$( this.document[0].activeElement ).blur();
	    }

	    this._hide( this.uiDialog, this.options.hide, function() {
		that._trigger( "close", event );
	    });
	},

	/**
	 * Whether the dialog is currently open.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
	 * @method
	 * @name oj.ojDialog#isOpen
	 * @memberof! oj.ojDialog
	 * @instance
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">isOpen</code> method:</caption>
	 * var isOpen = $( ".selector" ).ojDialog( "isOpen" );
	 */
	isOpen: function() {
	    return this._isOpen;
	},

	/**
	 * Moves the dialog to the top of the dialog stack.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
	 * @method
	 * @name oj.ojDialog#moveToTop
	 * @memberof! oj.ojDialog
	 * @instance
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">moveToTop</code> method:</caption>
	 * var moveToTop = $( ".selector" ).ojDialog( "moveToTop" );
	 */
	moveToTop: function() {
	    this._moveToTop();
	},

	_moveToTop: function( event, silent ) {
	    var moved = !!this.uiDialog.nextAll(":visible").insertBefore( this.uiDialog ).length;
	    if ( moved && !silent ) {
		this._trigger( "focus", event );
	    }
	    return moved;
	},


	/**
	 * Opens the dialog.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
	 * @method
	 * @name oj.ojDialog#open
	 * @memberof! oj.ojDialog
	 * @instance
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">open</code> method:</caption>
	 * var open = $( ".selector" ).ojDialog( "open" );
	 */
	open: function() {

            // this.$element.on('click.ojDialog', $.proxy(this.uiDialog.hide, this));

	    var that = this;
	    if ( this._isOpen ) {
		if ( this._moveToTop() ) {
		    this._focusTabbable();
		}
		return;
	    }

	    this._isOpen = true;
	    this.opener = $( this.document[0].activeElement );

	    this._size();
	    this._position();
	    this._createOverlay();
	    this._moveToTop( null, true );
	    this._show( this.uiDialog, this.options.show, function() {
		that._focusTabbable();
		that._trigger("focus");
	    });

	    this._trigger("open");
	},

	_focusTabbable: function() {
	    // Set focus to the first match:
	    // 1. First element inside the dialog matching [autofocus]
	    // 2. Tabbable element inside the content element
	    // 3. Tabbable element inside the buttonpane
	    // 4. The close button
	    // 5. The dialog itself
	    var hasFocus = this.element.find("[autofocus]");
	    if ( !hasFocus.length ) {
		hasFocus = this.element.find(":tabbable");
	    }
	    if ( !hasFocus.length ) {
		if (this.uiDialogButtonPane)
		    hasFocus = this.uiDialogButtonPane.find(":tabbable");
	    }
	    if ( !hasFocus.length ) {
		// todo: this may not exist when a user-defined header is used.
		// We may want to provide an api for the focusable element, or
		// check the oj-dialog-header markup
		if (this.uiDialogTitlebarClose)
		    hasFocus = this.uiDialogTitlebarClose.filter(":tabbable");
	    }
	    if ( !hasFocus.length ) {
		hasFocus = this.uiDialog;
	    }
	    hasFocus.eq( 0 ).focus();
	},

	_keepFocus: function( event ) {
	    function checkFocus() {
		var activeElement = this.document[0].activeElement,
		isActive = this.uiDialog[0] === activeElement ||
		    $.contains( this.uiDialog[0], activeElement );
		if ( !isActive ) {
		    this._focusTabbable();
		}
	    }
	    event.preventDefault();
	    checkFocus.call( this );
	    // support: IE
	    // IE <= 8 doesn't prevent moving focus even with event.preventDefault()
	    // so we check again later
	    this._delay( checkFocus );
	},

	_createWrapper: function() {
	    this.uiDialog = $("<div>")
		// .addClass( "oj-dialog oj-widget oj-widget-content oj-corner-all oj-front " +
		.addClass( "oj-dialog oj-widget oj-dialog-front " +
			   this.options.dialogClass )
		.hide()
		.attr({
		    // Setting tabIndex makes the div focusable
		    'tabIndex': -1,
		    'role': "dialog"
		})
		.appendTo( this._appendTo() );

	    this._on( this.uiDialog, {
		keydown: function( event ) {

		    // if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
		    if (this.options.escapeBehavior === "close" && !event.isDefaultPrevented() && event.keyCode &&
			 event.keyCode === $.ui.keyCode.ESCAPE ) {
			event.preventDefault();
			this.close( event );
			return;
		    }

		    // prevent tabbing out of dialogs
		    if ( event.keyCode !== $.ui.keyCode.TAB ) {
			return;
		    }
		    var tabbables = this.uiDialog.find(":tabbable"),
		    first = tabbables.filter(":first"),
		    last  = tabbables.filter(":last");

		    if ( ( event.target === last[0] || event.target === this.uiDialog[0] ) && !event.shiftKey ) {
			first.focus( 1 );
			event.preventDefault();
		    } else if ( ( event.target === first[0] || event.target === this.uiDialog[0] ) && event.shiftKey ) {
			last.focus( 1 );
			event.preventDefault();
		    }
		},
		mousedown: function( event ) {
		    if ( this._moveToTop( event ) ) {
			this._focusTabbable();
		    }
		}
	    });

	    // We assume that any existing aria-describedby attribute means
	    // that the dialog content is marked up properly
	    // otherwise we brute force the content as the description
	    if ( !this.element.find("[aria-describedby]").length ) {
		this.uiDialog.attr({
		    "aria-describedby": this.element.uniqueId().attr("id")
		});
	    }
	},

	_createTitlebar: function() {
	    var uiDialogTitle;

	    this.uiDialogTitlebar = $("<div>")
		// .addClass("oj-dialog-titlebar oj-widget-header oj-corner-all oj-helper-clearfix")
		// .addClass("oj-dialog-titlebar oj-helper-clearfix")
		.addClass("oj-dialog-header oj-helper-clearfix oj-dialog-temp-createdtitlebar")
		.prependTo( this.uiDialog );
	    this._on( this.uiDialogTitlebar, {
		mousedown: function( event ) {
		    // Don't prevent click on close button (#8838)
		    // Focusing a dialog that is partially scrolled out of view
		    // causes the browser to scroll it into view, preventing the click event
		    // if ( !$( event.target ).closest(".oj-fwk-icon-close") ) {
		    if ( !$( event.target ).closest(".oj-dialog-close-icon") ) {
			// Dialog isn't getting focus when dragging (#8063)
			this.uiDialog.focus();
		    }
		}
	    });

	    this.uiDialogTitlebarClose = $("<button></button>")
		.ojButton({
		    // label: "",
		    display: "icons",
		    icons: {
			// start: "oj-fwk-icon oj-fwk-icon-close"
			start: "oj-widget-icon oj-dialog-close-icon"
		    },
		    text: false
		})
		// .addClass("oj-dialog-titlebar-close oj-button-no-chrome")
		.addClass("oj-dialog-header-close oj-button-no-chrome")
		.appendTo( this.uiDialogTitlebar );

	    // Add the class to properly center the close icon.
	    // this.uiDialogTitlebarClose.find(".oj-fwk-icon-close").addClass("oj-dialog-close-icon");

	    this._on( this.uiDialogTitlebarClose, {
		click: function( event ) {
		    event.preventDefault();
		    this.close( event );
		}
	    });

	    uiDialogTitle = $("<span>")
		.uniqueId()
		.addClass("oj-dialog-title")
		.prependTo( this.uiDialogTitlebar );
	    this._title( uiDialogTitle );

	    this.uiDialog.attr({
		"aria-labelledby": uiDialogTitle.attr("id")
	    });
	},

	_title: function( title ) {
	    if ( !this.options.title ) {
		title.html("&#160;");
	    }
	    title.text( this.options.title );
	},

	_createButtonPane: function() {
	    this.uiDialogButtonPane = $("<div>")
		// .addClass("oj-dialog-buttonpane oj-widget-content oj-helper-clearfix");
		.addClass("oj-dialog-buttonpane oj-helper-clearfix");

	    this.uiButtonSet = $("<div>")
		.addClass("oj-dialog-buttonset")
		.appendTo( this.uiDialogButtonPane );

	    this._createButtons();
	},

	_createButtons: function() {
	    var that = this,
	    buttons = this.options.buttons;

	    // if we already have a button pane, remove it
	    this.uiDialogButtonPane.remove();
	    this.uiButtonSet.empty();

	    if ( $.isEmptyObject( buttons ) || ($.isArray( buttons ) && !buttons.length) ) {
		this.uiDialog.removeClass("oj-dialog-buttons");
		return;
	    }

	    $.each( buttons, function( name, props ) {
		var click, buttonOptions;
		props = $.isFunction( props ) ?
		    { click: props, text: name } :
		props;
		// Default to a non-submitting button
		props = $.extend( { type: "button" }, props );
		// Change the context for the click callback to be the main element
		click = props.click;
		props.click = function() {
		    click.apply( that.element[0], arguments );
		};
		buttonOptions = {
		    /** @expose */
		    icons: props.icons,
		    /** @expose */
		    text: props['showText']
		};
		delete props.icons;
		delete props['showText'];
		$( "<button></button>", props )
		    .ojButton( buttonOptions )
		    .appendTo( that.uiButtonSet );
	    });
	    this.uiDialog.addClass("oj-dialog-buttons");
	    this.uiDialogButtonPane.appendTo( this.uiDialog );
	},

	_makeDraggable: function() {
	    var that = this,
	    options = this.options;

	    function filteredUi( ui ) {
		return {
		    position: ui.position,
		    offset: ui.offset
		};
	    }

	    this.uiDialog.draggable({
		// cancel: ".oj-dialog-content, .oj-dialog-titlebar-close",
		// handle: ".oj-dialog-titlebar",
		cancel: ".oj-dialog-content, .oj-dialog-header-close",
		handle: ".oj-dialog-header",
		containment: "document",
		start: function( event, ui ) {
		    $( this ).addClass("oj-dialog-dragging");
		    that._blockFrames();
		    that._trigger( "dragStart", event, filteredUi( ui ) );
		},
		drag: function( event, ui ) {
		    that._trigger( "drag", event, filteredUi( ui ) );
		},
		stop: function( event, ui ) {
		    options.position = [
			ui.position.left - that.document.scrollLeft(),
			ui.position.top - that.document.scrollTop()
		    ];
		    $( this ).removeClass("oj-dialog-dragging");
		    that._unblockFrames();
		    that._trigger( "dragStop", event, filteredUi( ui ) );
		}
	    });
	},

	_makeResizable: function() {
	    var that = this,
	    options = this.options,
	    handles = options.resizable,
	    // .oj-resizable has position: relative defined in the stylesheet
	    // but dialogs have to use absolute or fixed positioning
	    position = this.uiDialog.css("position"),
	    resizeHandles = typeof handles === "string" ?
		handles	:
		"n,e,s,w,se,sw,ne,nw";

	    function filteredUi( ui ) {
		return {
		    originalPosition: ui.originalPosition,
		    originalSize: ui.originalSize,
		    position: ui.position,
		    size: ui.size
		};
	    }

	    this.uiDialog.resizable({
		cancel: ".oj-dialog-content",
		containment: "document",
		alsoResize: this.element,
		maxWidth: options.maxWidth,
		maxHeight: options.maxHeight,
		minWidth: options.minWidth,
		minHeight: this._minHeight(),
		handles: resizeHandles,
		start: function( event, ui ) {
		    $( this ).addClass("oj-dialog-resizing");
		    that._blockFrames();
		    that._trigger( "resizeStart", event, filteredUi( ui ) );
		},
		resize: function( event, ui ) {
		    that._trigger( "resize", event, filteredUi( ui ) );
		},
		stop: function( event, ui ) {
		    options.height = $( this ).height();
		    options.width = $( this ).width();
		    $( this ).removeClass("oj-dialog-resizing");
		    that._unblockFrames();
		    that._trigger( "resizeStop", event, filteredUi( ui ) );
		}
	    })
		.css( "position", position );
	},

	_minHeight: function() {
	    var options = this.options;

	    return options.height === "auto" ?
		options.minHeight :
		Math.min( options.minHeight, options.height );
	},

	_position: function() {
	    // Need to show the dialog to get the actual offset in the position plugin
	    var isVisible = this.uiDialog.is(":visible");
	    if ( !isVisible ) {
		this.uiDialog.show();
	    }
	    this.uiDialog.position( this.options.position );
	    if ( !isVisible ) {
		this.uiDialog.hide();
	    }
	},
	/**
	 * Sets one or more options for the dialog.
	 * 
	 * @method
	 * @name oj.ojDialog#setOptions
	 * @memberof! oj.ojDialog
	 * @instance
	 * @param options A map of option/value pairs to set
	 * 
	 * @example <caption>Invoke the method:</caption>
	 * $( ".selector" ).ojDialog( "option", {disabled: true});
	 */
	_setOptions: function( options ) {
	    var that = this,
	    resize = false,
	    resizableOptions = {};

	    $.each( options, function( key, value ) {
		that._setOption( key, value );

		if ( key in sizeRelatedOptions ) {
		    resize = true;
		}
		if ( key in resizableRelatedOptions ) {
		    resizableOptions[ key ] = value;
		}
	    });

	    if ( resize ) {
		this._size();
		this._position();
	    }
	    if ( this.uiDialog.is(":data(oj-resizable)") ) {
		this.uiDialog.resizable( "option", resizableOptions );
	    }
	},


	/**
	 * Sets one or more options for the dialog.
	 * 
	 * @method
	 * @name oj.ojDialog#setOptions
	 * @memberof! oj.ojDialog
	 * @instance
	 * @param key The name of the option name to set.
	 * @param value A value to set for the option.
	 * 
	 * @example <caption>Invoke the method:</caption>
	 * $( ".selector" ).ojDialog( "option", disabled, true);
	 */

	_setOption: function( key, value ) {
	    /*jshint maxcomplexity:15*/
	    var isDraggable, isResizable,
	    uiDialog = this.uiDialog;

	    if ( key === "dialogClass" ) {
		uiDialog
		    .removeClass( this.options.dialogClass )
		    .addClass( value );
	    }

	    if ( key === "disabled" ) {
		return;
	    }

	    this._super( key, value );

	    if ( key === "appendTo" ) {
		this.uiDialog.appendTo( this._appendTo() );
	    }

	    if ( key === "buttons" ) {
		this._createButtons();
	    }

/*

	    if ( key === "closeText" ) {
		this.uiDialogTitlebarClose.ojButton({
		    // Ensure that we always pass a string
		    label: "" + value
		});
	    }

*/

	    if ( key === "draggable" ) {
		isDraggable = uiDialog.is(":data(oj-draggable)");
		if ( isDraggable && !value ) {
		    uiDialog.draggable("destroy");
		}

		if ( !isDraggable && value ) {
		    this._makeDraggable();
		}
	    }

	    if ( key === "position" ) {
		this._position();
	    }

	    if ( key === "resizable" ) {
		// currently resizable, becoming non-resizable
		isResizable = uiDialog.is(":data(oj-resizable)");
		if ( isResizable && !value ) {
		    uiDialog.resizable("destroy");
		}

		// currently resizable, changing handles
		if ( isResizable && typeof value === "string" ) {
		    uiDialog.resizable( "option", "handles", value );
		}

		// currently non-resizable, becoming resizable
		if ( !isResizable && value !== false ) {
		    this._makeResizable();
		}
	    }

	    if ( key === "title" ) {
		this._title( this.uiDialogTitlebar.find(".oj-dialog-title") );
	    }
	},

	_size: function() {
	    // If the user has resized the dialog, the .oj-dialog and .oj-dialog-content
	    // divs will both have width and height set, so we need to reset them
	    var nonContentHeight, minContentHeight, maxContentHeight,
	    options = this.options;

	    // Reset content sizing
	    this.element.show().css({
		width: "auto",
		minHeight: 0,
		maxHeight: "none",
		height: 0
	    });

	    if ( options.minWidth > options.width ) {
		options.width = options.minWidth;
	    }

	    // reset wrapper sizing
	    // determine the height of all the non-content elements
	    nonContentHeight = this.uiDialog.css({
		height: "auto",
		width: options.width
	    })
		.outerHeight();
	    minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
	    maxContentHeight = typeof options.maxHeight === "number" ?
		Math.max( 0, options.maxHeight - nonContentHeight ) :
		"none";

	    if ( options.height === "auto" ) {
		this.element.css({
		    minHeight: minContentHeight,
		    maxHeight: maxContentHeight,
		    height: "auto"
		});
	    } else {
		this.element.height( Math.max( 0, options.height - nonContentHeight ) );
	    }

	    if (this.uiDialog.is(":data(oj-resizable)") ) {
		this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
	    }
	},

	_blockFrames: function() {
	    this.iframeBlocks = this.document.find( "iframe" ).map(function() {
		var iframe = $( this );

		var offset = /** @type {{left: number, top: number}}  */ (iframe.offset());

		return $( "<div>" )
		    .css({
			position: "absolute",
			width: iframe.outerWidth(),
			height: iframe.outerHeight()
		    })
		    .appendTo( iframe.parent() )
		    .offset( offset )[0];
	    });
	},

	_unblockFrames: function() {
	    if ( this.iframeBlocks ) {
		this.iframeBlocks.remove();
		delete this.iframeBlocks;
	    }
	},

	_allowInteraction: function( event ) {
	    if ( $( event.target ).closest(".oj-dialog").length ) {
		return true;
	    }

	    // TODO: Remove hack when datepicker implements
	    // the .oj-front logic (#8989)
	    return !!$( event.target ).closest(".oj-datepicker").length;
	},

	_createOverlay: function() {

	    if (this.options.modality === "modeless" ) {
		return;
	    }

	    //if ( !this.options.modal ) {
// 		return;
// 	    }

	    var that = this,
	    widgetFullName = this.widgetFullName;
	    if ( !$.ui.dialog.overlayInstances) {
		// Prevent use of anchors and inputs.
		// We use a delay in case the overlay is created from an
		// event that we're going to be cancelling. (#2804)
		this._delay(function() {
		    // Handle .dialog().dialog("close") (#4065)
		    if ( $.ui.dialog.overlayInstances ) {
			this.document.bind( "focusin.dialog", function( event ) {
			    if ( !that._allowInteraction( event ) ) {
				event.preventDefault();
				$(".oj-dialog:visible:last .oj-dialog-content")
				    .data( widgetFullName )._focusTabbable();
			    }
			});
		    }
		});
	    }

	    this.overlay = $("<div>")
		.addClass("oj-widget-overlay oj-dialog-front")
		.appendTo( this._appendTo() );
	    this._on( this.overlay, {
		mousedown: "_keepFocus"
	    });

	    $.ui.dialog['overlayInstances']++;
	},

	_destroyOverlay: function() {

	    if (this.options.modality === "modeless" ) {
		return;
	    }

//	    if ( !this.options.modal ) {
//		return;
//	    }

	    if ( this.overlay ) {
		$.ui.dialog['overlayInstances']--;

		if ( !$.ui.dialog.overlayInstances ) {
		    this.document.unbind( "focusin.dialog" );
		}
		this.overlay.remove();
		this.overlay = null;
	    }
	}

    });

    $.ui.dialog['overlayInstances'] = 0;


//
// ldm - deleted BackCompat option.
//


/*

    // DEPRECATED
    if ( $.uiBackCompat !== false ) {
	// position option with array notation
	// just override with old implementation
	$.widget( "oj.ojDialog", $.oj.ojDialog, { // TODO: if this is uncommented, it should call the new oj.__registerWidget method, not $.widget
	    _position: function() {
		var position = this.options.position,
		myAt = [],
		offset = [ 0, 0 ],
		isVisible;

		if ( position ) {
		    if ( typeof position === "string" || (typeof position === "object" && "0" in position ) ) {
			myAt = position.split ? position.split(" ") : [ position[0], position[1] ];
			if ( myAt.length === 1 ) {
			    myAt[1] = myAt[0];
			}

			$.each( [ "left", "top" ], function( i, offsetPosition ) {
			    if ( +myAt[ i ] === myAt[ i ] ) {
				offset[ i ] = myAt[ i ];
				myAt[ i ] = offsetPosition;
			    }
			});

			position = {
			    my: myAt[0] + (offset[0] < 0 ? offset[0] : "+" + offset[0]) + " " +
				myAt[1] + (offset[1] < 0 ? offset[1] : "+" + offset[1]),
			    at: myAt.join(" ")
			};
		    }

		    position = $.extend( {}, $.oj.ojDialog.prototype.options.position, position );
		} else {
		    position = $.oj.ojDialog.prototype.options.position;
		}

		// need to show the dialog to get the actual offset in the position plugin
		isVisible = this.uiDialog.is(":visible");
		if ( !isVisible ) {
		    this.uiDialog.show();
		}
		this.uiDialog.position( position );
		if ( !isVisible ) {
		    this.uiDialog.hide();
		}
	    }
	});
    }
*/

}() );

/*!
 * JET Checkboxset @VERSION
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
 * @name oj.ojCheckboxset
 * @augments oj.editableValue
 * @classdesc
 * <p>
 * The JET Checkboxset component (ojCheckboxset) enhances a group of <code class="prettyprint">input type="checkbox"</code> elements and 
 * manages the selected values of the group. It also adds and removes the correct
 * oj-* styles to the dom elements so it has the JET styling and is themable.
 * </p>
 * <p>To use an ojCheckboxset, group all the inputs and their labels within a container dom element, e.g., div. 
 *   For accessibility, set <code class="prettyprint">aria-labelledby</code> on this container dom element.
 *   Also set each input's <code class="prettyprint">id</code> attribute, and refer to that in the input's label's <code class="prettyprint">for</code> attribute.
 *   Then create the ojCheckboxset on this container dom element.  
 * </p>
 * <p>
 *  Checkboxset is used by selecting a container element which contains the 
 *  checkbox input elements and calling <code class="prettyprint">ojCheckboxset()</code>. You can enable and disable a checkbox set, 
 *  which will enable and disable all contained checkboxes. 
 * </p>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>The checkboxset does not add any extra keyboard navigation to the input checkboxes. 
 * The keyboard interaction comes from the native browser.
 * </p>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>JET Checkboxset takes care of setting <code class="prettyprint">role="group"</code> on the checkboxset element.  
 * 
 * <p>As shown in the online demos, the application is responsible for applying <code class="prettyprint">aria-labelledby</code>
 * to point to the main label element for the group of checkboxes.
 * <h3 id="eventHandling-section">
 *   Event Handling
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#eventHandling-section"></a>
 * </h3>
 * <ul>
 *  <li>optionChange(event, ui) - Type: ojoptionchange
 *  <p>
 *   Triggered if the value changes when the user interacts with the component 
 *   (clicking on one of the checkboxe buttons); or if the value has 
 *   changed programmatically via the value option. 
 *  </li>
 * </ul>
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <p>
 *   All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.
 * </p>
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates or re-initializes a JET Checkboxset.  For JET components, re-initing 
 * is generally like a hard refresh, meaning it typically does everything 
 * <code class="prettyprint">refresh()</code> does, plus potentially a bit more. 
 *  For JET Checkboxset, if the DOM changes (for example, you add/remove a checkbox), you should refresh.
 * 
 * <p>Don't confuse the re-initializer with the <code class="prettyprint">option()</code> method, 
 * which (in one overload) also accepts a map of option-value pairs
 * to set on the component, but does not re-init.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the checkboxset with no options specified:</caption>
 * $(".selector").ojCheckboxset();
 * 
 * @example <caption>Initialize the checkboxset with some options and callbacks specified:</caption>
 * $( ".selector" ).ojCheckboxset( { "value": ["copy"], "valuechange": 
 * function( event, ui ) {alert("valuechanged from " + ui.previousValue + " to " + ui.value);} } );             
 * @example <caption>Initialize component using widget API</caption>
 * &lt;label id="grouplabel">Greetings&lt;/label>
 * &lt;div id="checkboxset" aria-labelledby="grouplabel">
 *   &lt;input id="helloid" value="hello" type="checkbox" name="greetings"/&gt;
 *   &lt;label for="helloid"/&gt;Hello&lt;/label>
 *   &lt;input id="bonjourid" value="bonjour" type="checkbox" name="greetings"/&gt;
 *   &lt;label for="bonjourid"/&gt;Bonjour&lt;/label>
 *   &lt;input id="ciaoid" value="ciao" type="checkbox" name="greetings"/&gt;
 *   &lt;label for="ciaoid"/&gt;Ciao&lt;/label>
 * &lt;div>
 * <br/>
 * // set the value to "ciao". (The 'ciao' checkbox will be checked)
 * $("#checkboxset").ojCheckboxset({'option', 'value', ['ciao']});
 * 
 * @example <caption>Initialize a checkboxset via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="checkboxset" data-bind="ojComponent: {component: 'ojCheckboxset', value: ['night']} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="checkbox" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="checkbox" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
  * @example <caption>Using knockout, value bind to observable:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="checkboxset" data-bind="ojComponent: {component: 'ojCheckboxset', value: currentTime} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="checkbox" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="checkbox" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
 * // in the model, make the currentTime variable a knockout observable.
 * // The model and the component's value option will stay in sync. Change the
 * // component's value option and the model will change. Change the model,
 * // and the component's value option will change. Click on a checkbox, and both
 * // will change.
 * self.currentTime = ko.observable(["night"]);
 * @constructor
 */
oj.__registerWidget("oj.ojCheckboxset", $['oj']['editableValue'],
{
  version : "1.0.0",  
  defaultElement : "<div>", 
  widgetEventPrefix : "oj", 
  options : 
  {
 
  },
  /**** start Public APIs ****/
      
   /**
   * Refreshes the checkboxset
   * <p>A <code class="prettyprint">refresh()</code> or re-init is required 
   * when a checkboxset is programatically changed, like in the following circumstances:
   * <ul>
   *   <li>After checkboxes are added or removed or modified (without using ojCheckboxset) in the DOM.</li>
   * </ul>    
   * @expose 
   * @memberof! oj.ojCheckboxset
   * @instance
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" ).ojCheckboxset( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    // refresh the ojCheckbox's that exist, and  of the type=checkbox inputs that 
    // are not yet ojcheckboxes, make them ojcheckboxes.
    this.$checkboxes = this._findCheckboxesWithMatchingName()
                    .filter( ".oj-checkbox" )
                    ._ojRadioCheckbox("refresh")
                    .end()                  
                    // Create ojCheckbox out of any 'new' checkboxes.

                     // the END is key here. It makes it so that 
                     // this.$checkboxes has ALL the checkboxes.

                     // .not if a filter, it removes elements that do not have the
                     // oj-checkbox style class from the list of all input[type=checkbox]s.
                    .not( ".oj-checkbox" )

                    ._ojRadioCheckbox()
                    .end();
         
    this._setup();
  },
  /**
   * Returns a jQuery object containing the element visually representing the checkboxset. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj.ojCheckboxset
   * @instance
   * @return {jQuery} the checkbox
  */
  widget : function ()
  {
    return this.uiCheckboxset;
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
       
  /**
   * After _create, the widget should be 100% set up.
   * @override
   * @private
   */
  _create : function ()
  {
    // turn each checkbox into ojCheckbox. Do this first, since we need it
    // in calls from 'create'.
    this.$checkboxes = this._findCheckboxesWithMatchingName()._ojRadioCheckbox();
    this.uiCheckboxset = this.element.addClass("oj-checkboxset oj-widget")
                                  .attr( "role", "group" );

    this._on(this._events);
    this._setup();
    this._super();
    
    // todo: where should this be called from?
    this._SetRootAttributes();
  },
  /**
   * Returns a jquery object that is a set of elements that are input type checkbox
   * and have the name of the first checkbox found.
   * 
   * @return {Object} jquery object of all the checkboxes within the root dom element
   * that have the same 'name' attribute as the first checkbox found.
   * @private
   */
  _findCheckboxesWithMatchingName : function ()

  {
    //return this.element.find('input[type=checkbox]'); // simplest thing to do.
    
    var first = this.element.find("input[type=checkbox]:first");
    if (first.length === 0)
    {
      oj.Logger.warn("Could not find any input type=checkbox within this element");
    }
    // get the name attribute of the first input checkbox
    var name = first.attr("name");
    // find all input checkboxes with matching name
    if (name === undefined)
    {
    	// search for all checkboxes with no name
      var allcheckboxes = this.element.find("input[type=checkbox]");
      // now loop and find the ones without 'name' attribute
      return allcheckboxes.not("[name]");
    }
    else
    {
    	// search for all checkboxes with the name
      var selector = "input[type=checkbox][name=" + name + "]";
      return this.element.find(selector);
    	
    }
  },
  /* 
   * Component developers: This API and functionality is subject to change pending architectural review!
   * See the baseComponent method for preliminary API doc.
   */
  _showContextMenu: function(menu, event)
  {
    // TODO: confirm this logic
    var checkboxes = this.element.find("input[type=checkbox]");
    var checked = checkboxes.filter(":checked");
    var launcher = checked.length ? checked : checkboxes.first(); 
    menu.show(event, {"launcher": launcher, "focus": "menu"});
  },
  _setup: function() 
  {

    // disable checkbox if element was already disabled
    if (this.options.disabled)
    {
      // calls _setOption disable is true, which in turn disables all checkboxs.
      this.disable();
    }
  },   
  _events : 
  {
    'change' : function (event)
    {
      
      this._HandleChangeEvent(event);
    }
  },

  /**
   * @param {Event} event DOM event 
   * @override
   * @protected
   * @memberof! oj.ojCheckboxset
   */
  _HandleChangeEvent: function(event)
  {
    // TODO make sure the target is an input checkbox?
    // TODO any more checks I need to do?
    //alert("XYZ In _changeSetValue target is " + event.target + " And the value of the input is " + event.target.value);

    // should I double check that the event.target is the same as the 'checked'?
    // if (event.target === this.$checkboxes.filter(":checked"))???
    // _SetValue triggers valuechange event
    this._super();
  },
                  
  /**
   * Returns the display value that is ready to be passed to the converter.
   * 
   * @param {Object} value the stored value if available that needs to be formatted for display
   * @override
   * @protected
   * @memberof! oj.ojCheckboxset
   */
  _GetDisplayValue : function (value) 
  {
    // return the value of the 'checked' checkboxes
    return this._GetElementValue();
  },
  /**
   * Called when the display value on the element needs to be updated 
   * as a result of a value change. 
   * ojCheckboxset stores an Array value, and this value matches the values
   * of the currently checked checkboxes. So, if we need to set the display value,
   * what this means is we need to 'check' the checkboxes whose values match the
   * displayValue.
   * 
   * @param {String} checkedBoxes of the new string to be displayed
   * @override
   * @protected
   * @memberof! oj.ojCheckboxset
  */  
 _SetDisplayValue : function (checkedBoxes) 
  {
    this.$checkboxes._ojRadioCheckbox("option", "checked", false);
    if (checkedBoxes != null)
    {
      // Uncheck all the checkboxes then iterate through and checkoff any matching checkboxes from the value
      for(var i = 0; i < checkedBoxes.length; i++) {

      var displayValue = checkedBoxes[i];
      var valueFilter = "[value='" + displayValue + "']"; 
      if (valueFilter !== undefined && this.$checkboxes !== undefined)
      {
        var checkboxWithMatchingValue = 
            this.$checkboxes.filter(valueFilter);
        // found a checkbox with a matching value


        if (checkboxWithMatchingValue !== undefined && checkboxWithMatchingValue.length > 0)
        {
          // if not already checked, then mark as checked.
          if (!checkboxWithMatchingValue.prop('checked'))

          {
            checkboxWithMatchingValue._ojRadioCheckbox("option", "checked", true);
          }
        }
      }
      }
      // TODO Do I need to refresh
    } 
  },
  /**
   * Returns the element's value. Normally, this is a call to this.element.val(),
   * but in the case of ojCheckboxset, the element's value is really the value
   * of the checked checkboxes in the set.
   * @override
   * @protected
   * @memberof! oj.ojCheckboxset
   */
  _GetElementValue : function () 
  {
    // "input:checked" selects checkboxes that are currently checked as 
    // reflected in their boolean (true or false) checked property, 
    // which is affected when the user clicks the checkbox for example.
    // for checkbox, there will be one or none checked; 
    // if none are checked, return null (selectedCheckbox.val() is undefined if nothing is checked)
    var checkedValues=new Array();
    var selectedCheckbox = this.$checkboxes.filter(":checked");
    if (selectedCheckbox.length === 0)
      return null;
    else 
    { 
      selectedCheckbox.each(function(){checkedValues.push($(this).val());});
      return checkedValues;
    }
  },
  /**
   * Returns the default styleclass for the component. Currently this is 
   * used to pass to the _ojLabel component, which will append -label and 
   * add the style class onto the label. This way we can style the label
   * specific to the input component. For example, for inline labels, the
   * checkboxset/checkboxset components need to have margin-top:0, whereas all the
   * other inputs need it to be .5em. So we'll have a special margin-top style 
   * for .oj-label-inline.oj-checkboxset-label
   * All input components must override
   * 
   * @return {string}
   * @expose
   * @memberof! oj.ojCheckboxset
   * @override
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-checkboxset";
  },
  /**
   * Returns a jquery object of the elements representing the content nodes (checkboxes/labels).
   * @protected
   * @override
   * @memberof! oj.ojCheckboxset
   */
  _GetContentElement : function ()
  {
    return this._findCheckboxesWithMatchingName();
  },
  /**
   * Called when a aria-required attribute needs to be set or removed. 
   * Most inputs/selects need aria-required on the input element (aka 'content')
   * But it is not legal to have aria-required on radio/checkboxes.
   * Subclasses can override to put aria-required where they want.
   * 
   * @param {Object=} value the current value of the required option
   * @expose
   * @memberof! oj.ojCheckboxset
   * @instance
   * @protected
   */
  _RefreshAriaRequired : function (value)
  {
    var ariaValue, rootNode = this.uiCheckboxset;

    ariaValue = (value == "required") ? true : false;
    if (ariaValue && rootNode) 
    {
      rootNode.attr("aria-required", ariaValue);
    }
    else
    {
      rootNode.removeAttr("aria-required");
    }
  },
  /**
   * @override
   * @private
   */
  _setOption : function (key, value)
  {
    this._super(key, value);

    if ( key === "disabled" ) {
      // disables all the checkboxs
      this.$checkboxes._ojRadioCheckbox( "option", key, value );
    }
  },

  /**
   * TODO: What is our 'destroy' strategy with regards to html attributes that 
   * they have initially on their dom, but we change? like disabled? Do we store 
   * on data at the beginning, then restore from this data, and then call removeData?
   * @override
   * @private
   */
  _destroy : function ()
  {  
    this._super();
    // base class removes oj-disabled
    this.element.removeClass("oj-checkboxset oj-enabled oj-widget")
                .removeAttr( "role" );
    if (this.$checkboxes)
    {
      this.$checkboxes._ojRadioCheckbox( "destroy" );
    }
  }
  /**** end internal widget functions ****/ 
 
});
/*!
 * jQuery UI Tabs 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 */
/**
 * @class 
 * @name oj.ojTabs
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="tabsOverview-section">
 *   JET Tabs Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#tabsOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant tabs with mouse and keyboard interactions for navigation.
 * 
 * <p>A JET Tabs can be created from any valid markup as long as the root element has one or more child elements and 
 * each child element must have at least two children: the first element for the title and the rest of the element(s) for the content.
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div id="tabs">
 *   &lt;div id ="tab-1">
 *     &lt;span>Tab 1&lt;/span>
 *     &lt;p>Tab 1 content&lt;/p>
 *     &lt;p>Tab 1 more content&lt;/p>
 *   &lt;/div>
 *   &lt;div id ="tab-2">
 *     &lt;span>Tab 2&lt;/span>
 *     &lt;p>Tab 2 content&lt;/p>
 *   &lt;/div>
 *   &lt;div id ="tab-3">
 *     &lt;span>Tab 3&lt;/span>
 *     &lt;p>Tab 3 content&lt;/p>
 *   &lt;/div>
 * &lt;/div>
 * </code></pre>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>
 * <h5>When the focus is on the tab bar</h5>
 * </p>
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
 *       <td><kbd>Tab</kbd></td>
 *       <td> Navigate to next tab and activate the tab.</tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td> Navigate to previous tab and activate the tab.</tr>
 *     <tr>
 *       <td><kbd>UpArrow or LeftArrow</kbd> (<kbd>RightArrow</kbd> in RTL)</td>
 *       <td> Move focus to the previous tab with wrap around.</tr>
 *     <tr>
 *       <td><kbd>DownArrow or RightArrow</kbd> (<kbd>LeftArrow</kbd> in RTL)</td>
 *       <td> Move focus to the next tab with wrap around.</tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td> Move focus to the first tabs item.</tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td> Move focus to the last tabs item.</tr>
 *   </tbody>
 *  </table>
 *
 * <p>
 * <h5>When the focus is on anywhere within the tab content</h5>
 * </p>
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
 *       <td><kbd>Control+Up</kbd></td>
 *       <td> move focus to the tab for that panel.</tr>
 *     <tr>
 *       <td><kbd>Alt+Delete</kbd></td>
 *       <td> If deletion is allowed, will delete the current tab.</tr>
 *   </tbody>
 *  </table>
 * 
 * <p>Disabled items can receive keyboard focus, but do not allow any other interaction.
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the tabs must be <code class="prettyprint">refresh()</code>ed.
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-tabs</code> pseudo-selector can be used in jQuery expressions to select JET Tabs.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-tabs" ) // selects all JET Tabs on the page
 * $myEventTarget.closest( ":oj-tabs" ) // selects the closest ancestor that is a JET Tabs
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <ul>
 *   <li>JQUI Tabs expects the tabs titles either in an ordered or unordered list followed by their content elements. Each tab must have an anchor with the href points to its content element.
 *     <pre class="prettyprint">
 *     <code>
 *       &lt;div id="tabs">
 *         &lt;ul>
 *           &lt;li>&lt;a href="#tabs-1">Tab 1 Title&lt;/a>&lt;/li>
 *           &lt;li>&lt;a href="#tabs-2">Tab 2 Title&lt;/a>&lt;/li>
 *         &lt;/ul>
 *         &lt;div id="tabs-1">
 *           &lt;p>Tab 1 content.&lt;/p>
 *         &lt;/div>
 *         &lt;div id="tabs-2">
 *           &lt;p>Tab 2 content.&lt;/p>
 *           &lt;p>More Tab 2 content.&lt;/p>
 *         &lt;/div
 *       &lt;/div>
 *     </code></pre>
 *   </li>
 *
 *   <li>JET Tabs requires a simplier DOM structures. Like the JQuery Accordion, the tabs is a list of tab where each tab contains its own title and content. It requires no anchors and pointers to the contents.
 *     <pre class="prettyprint">
 *     <code>
 *       &lt;div id="tabs">
 *         &lt;div id="tabs-1">
 *           &lt;span>Tab 1 Title&lt;/span>
 *           &lt;p>Tab 1 content.&lt;/p>
 *         &lt;/div>
 *         &lt;div id="tabs-2">
 *           &lt;span>Tab 2 Title&lt;/span>
 *           &lt;p>Tab 2 content.&lt;/p>
 *           &lt;p>More Tab 2 content.&lt;/p>
 *         &lt;/div
 *       &lt;/div>
 *     </code></pre>
 *   </li>
 *   </ul>
 *   <li>All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.</li>
 *   <li>JET Tabs supports orientation option: to be placed horizontal (default) or vertical</li>
 *   <li>JET Tabs supports removable option by adding a close icon to each tab which when clicked remove the tab from the DOM.</li>
 *   <li>JET Tabs supports reorder option allow the tab to be reordered by drag and drop within the Tab bar</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "tabs".  
 * E.g. the JQUI <code class="prettyprint">tabscreate</code> event is <code class="prettyprint">ojcreate</code> in JET, as shown in the doc for that event.
 * Reason:  This makes the API more powerful.  It allows apps to listen to "foo" events from <em>all</em> JET components via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", myFunc);
 * </code></pre>
 * 
 * or to "foo" events only from JET Tabs (the JQUI functionality) via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", ":oj-tabs", myFunc);
 * </code></pre>
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates a JET Tabs. 
 * @example <caption>Initialize the tabs with no options specified:</caption>
 * $( ".selector" ).ojTabs();
 * 
 * @example <caption>Initialize the tabs with some options and callbacks specified:</caption>
 * $( ".selector" ).ojTabs( { "disabled": true, "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize the tabs via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="tabs" data-bind="ojComponent: { component: 'ojTabs', 
 *                                             disabled: [1], 
 *                                             reorder: true }">
 */
(function ()
{
  var _CLOSE_ICON = "oj-tabs-close-icon";
  var _ID_PREFIX = "ojtabs-id_";

  oj.__registerWidget("oj.ojTabs", $['oj']['baseComponent'], 
  {
    version : "1.0.0", 
    widgetEventPrefix : "oj", 
    delay : 300, 
    options : 
    {
      /** 
       * The zero-based index of the panel that is active (open).
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {number}
       * @default <code class="prettyprint">0</code>
       */
      active : 0, 

      /** 
       * Which tabs are disabled.
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @default <code class="prettyprint">false</code>
       * @type {boolean|Array}
       * Boolean: Enable or disable all tabs.
       * Array: An array containing the zero-based indexes of the tabs that should be disabled. 
       * @example [ 0, 2 ] would disable the first and third tab.
       */
      disabled : false, 
      /** 
       * The type of event that the tabs should react to in order to activate the tab. 
       * To activate on hover, use "mouseover".
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"click"</code>
       */
      event : "click", 

      /** 
       * The orientation of the tab bar. 
       * Valid Values: horizontal and vertical
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"horizontal"</code>
       */
      orientation : "horizontal", 

      /** 
       * Specifies if the tabs can be closed (removed)
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       */
      removable : false, 

      /** 
       * Specifies if the tabs can be reordered within the tab bar by drag-and-drop
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       */
      reorder : false,

      // callbacks
      /**
       * Triggered after a tab has been activated (after animation completes).
       * The activate can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">activate</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "activate": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojactivate</code> event:</caption>
       * $( ".selector" ).on( "ojactivate", function( event, ui ) {} );
       */
      activate : null, 

      /**
       * Triggered immediately before a tab is activated.
       * The beforeactivate can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">beforeactivate</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "beforeactivate": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeactivate</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeactivate", function( event, ui ) {} );
       */
      beforeActivate : null,

      /**
       * Triggered after a tab has been removed.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">remove</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "remove": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojremove</code> event:</caption>
       * $( ".selector" ).on( "ojremove", function( event, ui ) {} );
       */
      remove : null, 

      /**
       * Triggered immediately before a tab is removed.
       * The beforeremove can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">beforeremove</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "beforeremove": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeremove</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeremove", function( event, ui ) {} );
       */
      beforeRemove : null

    },

    _create : function ()
    {
      var self = this, 
          options = this.options;

      this._super();
      this.running = false;

      this._setupOrientation(options.orientation);

      // Prevent users from focusing disabled tabs via click
      this.element.delegate(".oj-tabs-nav > li", "mousedown" + this.eventNamespace, 
        function (event)
        {
          if ($(this).is(".oj-disabled"))
            event.preventDefault();
        })

        // support: IE <9
        // Preventing the default action in mousedown doesn't prevent IE
        // from focusing the element, so if the anchor gets focused, blur.
        // We don't have to worry about focusing the previously focused
        // element since clicking on a non-focusable element should focus
        // the body anyway.
        .delegate(".oj-tabs-anchor", "focus" + this.eventNamespace, 
          function ()
          {
            if ($(this).closest("li").is(".oj-disabled"))
              this.blur();
          });

      this._processTabs();

      // Take disabling tabs via class attribute from HTML
      // into account and update option properly.
      if ($.isArray(options.disabled))
      {
        var disabledTabs = this.tabs.filter(".oj-disabled");
        options.disabled = $.unique(options.disabled.concat($.map(disabledTabs, 
          function (li)
          {
            return self.tabs.index(li);
          }))).sort();
      }

      //Bug 18270242 - When ojtab first displays beforeactivate & activate events are not raised  
      // activate the active tab after refresh
      this._needActivate = options.active;
      options.active = -1;

      this._refresh();

    },

    /* 
     * Component developers: This API and functionality is subject to change pending architectural review!
     * See the baseComponent method for preliminary API doc.
     */
    _showContextMenu: function(menu, event)
    {
      // TODO: is this the right logic for this component?
      menu.show(event, {"launcher": this.element.children(".oj-tabs-nav").children("[tabindex=0]"), "focus": "menu"});
    },

    _tabKeydown : function (event)
    {
      /*jshint maxcomplexity:15*/
      var focusedTab = $(this.document[0].activeElement).closest("li"), 
          selectedIndex = this.tabs.index(focusedTab), goingForward = true;

      if (this._handlePageNav(event))
      {
        return;
      }

      switch (event.keyCode)
      {
        case $.ui.keyCode.RIGHT:
        case $.ui.keyCode.DOWN:
          selectedIndex++;
          break;
        case $.ui.keyCode.UP:
        case $.ui.keyCode.LEFT:
          goingForward = false;
          selectedIndex--;
          break;
        case $.ui.keyCode.END:
//TODO: disabled tab 
          selectedIndex = this.tabs.length - 1;
          break;
        case $.ui.keyCode.HOME:
          selectedIndex = 0;
          break;
        default :
          return;
      }

      // Focus the appropriate tab, based on which key was pressed
      event.preventDefault();
      clearTimeout(this.activating);
      selectedIndex = this._focusNextTab(selectedIndex, goingForward);

      // Navigating with control key will prevent automatic activation
      if (!event.ctrlKey)
      {
        // Update aria-selected immediately so that AT think the tab is already selected.
        // Otherwise AT may confuse the user by stating that they need to activate the tab,
        // but the tab will already be activated by the time the announcement finishes.
        focusedTab.attr("aria-selected", "false");
        this.tabs.eq(selectedIndex).attr("aria-selected", "true");

        this.activating = this._delay(function ()
        {
          this.option("active", selectedIndex);
        },
        this.delay);
      }
    },

    _panelKeydown : function (event)
    {
      if (this._handlePageNav(event))
        return;

      // Ctrl+up moves focus to the current tab
      if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP)
      {
        event.preventDefault();
        this.active.focus();
      }

      //TODO: Alt+Del to remove the tab (DEL == 46)
      if (event.altKey && event.keyCode === 46)
      {
        event.preventDefault();

        // simulate a click on the close icon of the current active header
        var anchor = this.active.find("." + _CLOSE_ICON);
        this._removeTabHandler(
          {
            target : anchor, 
            currentTarget : anchor, 
            preventDefault : $.noop
          });

      }
    },

    // Ctrl+page up/down moves focus to the previous/next tab (and activates)
    _handlePageNav : function (event)
    {
      if (event.ctrlKey && event.keyCode === $.ui.keyCode.PAGE_UP)
      {
        this._activate(this._focusNextTab(this.options.active - 1, false));
        return true;
      }
      if (event.ctrlKey && event.keyCode === $.ui.keyCode.PAGE_DOWN)
      {
        this._activate(this._focusNextTab(this.options.active + 1, true));
        return true;
      }
    },

    _isTabDisabled : function (index)
    {
      return ($.inArray(index, this.options.disabled) !=  - 1);
    },

    _findNextTab : function (index, goingForward)
    {
      var lastTabIndex = this.tabs.length - 1;

      function constrain()
      {
        if (index > lastTabIndex)
        {
          index = 0;
        }
        if (index < 0)
        {
          index = lastTabIndex;
        }
        return index;
      }

      while (this._isTabDisabled(constrain()))
      {
        index = goingForward ? index + 1 : index - 1;
      }

      return index;
    },

    _focusNextTab : function (index, goingForward)
    {
      index = this._findNextTab(index, goingForward);
      this.tabs.eq(index).focus();
      return index;
    },

    _activateNextTab : function (index)
    {
      var lastTabIndex = this.tabs.length - 1;
      var next = index + 1;

      while (next <= lastTabIndex) 
      {
        if (! this._isTabDisabled(next))
        {
          this._activate(next);
          return next - 1;
        }
        next++;
      }
      next = index - 1;
      while (next >= 0)
      {
        if (! this._isTabDisabled(next))
        {
          this._activate(next);
          return next;
        }
        next--;
      }
      return -1;
    },

    _setOption : function (key, value)
    {
      if (key === "active")
      {
        if (typeof value === "string")
        {
          value = this._parse(value);
        }
        // _activate() will handle invalid values and update this.options
        this._activate(value);
        return;
      }

      if (key === "disabled")
      {
        // don't use the widget factory's disabled handling
        this._setupDisabled(value);
        return;
      }

      if (key === "removable")
      {
        this._setRemovable(value);
        return;
      }

      //allow drag and drop a tab within the tab bar
      if (key === "reorder")
      {
        if (value !== this.options.reorder)
        {
          this.options.reorder = value;
          this._setupReorder();
        }
        return;
      }

      //change orientation need refresh
      if (key === "orientation")
      {
        this._setupOrientation(value);
        this.refresh();
        return;
      }

      this._super(key, value);

      if (key === "event")
      {
        this._tearDownEvents();
        this._super(key, value);
        this._setupEvents();
      }

    },

    /**
     * Refreshes the visual state of the tabs. JET components require a <code class="prettyprint">refresh()</code> or re-init after the DOM is 
     * programmatically changed underneath the component.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojTabs
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojTabs( "refresh" );
     */
    refresh : function ()
    {
      this._super();

/*
      //Bug 18269291 - If user closes tab then index for tabs changes and disabled tab becomes enable
      var options = this.options,
          lis = this.tabs;

      // get disabled tabs from class attribute from HTML
      // this will get converted to a boolean if needed in _refresh()
      options.disabled = $.map(lis.filter(".oj-disabled"), function (tab)
      {
        return lis.index(tab);
      });
*/
      this._destroyCloseIcons();
      this._processTabs();

      this._refresh();
    },

    _refresh : function ()
    {
      // check for length avoids error when initializing empty list
      if (this.tabs.length && this.options.active != -1)
        this.active = this._findActive(this.options.active);
      else 
        this.active = $();

      this._setupDisabled(this.options.disabled);

      this._createCloseIcons();

      this._tearDownEvents();
      this._setupEvents();

      this.tabs.not(this.active).attr(
      {
        "aria-selected" : "false", 
        "tabIndex" : "-1"
      });
      this.panels.not(this._getPanelForTab(this.active)).hide().attr(
      {
        "aria-expanded" : "false", 
        "aria-hidden" : "true"
      });

      // Make sure one tab is in the tab order
      if (!this.active.length)
      {
        this.tabs.eq(0).attr("tabIndex", "0");
      }
      else 
      {
        this.active.addClass("oj-tabs-active").attr(
        {
          "aria-selected" : "true", 
          "tabIndex" : "0"
        });
        this._getPanelForTab(this.active).show().attr(
        {
          "aria-expanded" : "true", 
          "aria-hidden" : "false"
        });
      }


      //Bug 18270242 - When ojtab first displays beforeactivate & activate events are not raised  
      // handle active numbers: negative, out of range
      if (this._needActivate !== undefined)
      {
        var active = this._needActivate;
        this._needActivate = undefined;
        if (active != 0 && (active < 0 || active > this.tabs.length))
          this.options.active = 0;
        else
          this.options.active = active;

        this._activate(active);
      }

      if (this.options.orientation == "horizontal")
      {
        this._addConveyor();
/*
tabSizeBehavior: uniform or variable?
tooltips?
        if (this.tabs.length > 0)
        {
          //TODO: not work if display:none
          var tabsWidth = this.element[0].offsetWidth;

          var tabPercent = 1 / this.tabs.length;
          var tabWidth = tabPercent * tabsWidth;
          var tabBar = this.element.find(".oj-tabs-nav");
          var minWidth = tabBar.children(0).css("min-width");
          if (minWidth.length > 0)
            minWidth = parseInt(minWidth);
          else
            minWidth = 0;

          //add conveyorBelt
          this.tabs.each(function (index)
          {
            var tab = $(this);
            tab.css("width", (tabPercent * 100) + "%");
          });

          if (tabWidth < minWidth)
            this._addConveyor();
        }
*/

      }

      //Bug 18269323 - After a tab is deleted, reorder does not work
      this._setupReorder();
    },

    _addConveyor : function ()
    {
      if (this.options.orientation == "horizontal")
      {
        var tabsId = this.tablist.uniqueId().attr("id");

        var ulParent = this.tablist
          .wrap("<div>")
          .parent();

        ulParent.addClass( "oj-tabs-conveyor" );
        var conveyorDiv = ulParent
          .wrap("<div>")
          .parent();

        conveyorDiv.uniqueId().attr("id");

        //Bug 18330774 - Tabs appear to be broken in ojet version used by 02/27 quickstart 
//        conveyorDiv.css("max-width", "" + this.element.width() + "px");

        this.conveyor = conveyorDiv.ojConveyorBelt(
          {
            orientation: "horizontal", 
            contentParent: "#" + tabsId
          });
      }
    },

    _processTabs : function ()
    {
      var self = this;

      //destroy the old tab bar before creating a new one
      this._destroyTabBar();

      //create a tab bar: create a <ul> and its <li> children based on the 
      //original tabs markup
      this.tablist = $("<ul>")
        .addClass("oj-tabs-nav oj-helper-reset oj-helper-clearfix")
        .attr("role", "tablist")
        .prependTo(this.element);

      //list of tabs
      this.tabs = $();
      //list of contents
      this.panels = $();

      this.element.children(":not(.oj-tabs-nav)").each(
        function (index)
        {
          var header = $(this).find("> :first-child");
          var headerClone = header.clone();
          headerClone
            .css("display", "")
            .attr(
            {
              "aria-hidden": "false"
            });

          //make ids unique after clone
          var ohd = header[0];
          if (ohd.id)
            self._addPrefixId(ohd);
          header.find("[id]").each(function() {
            self._addPrefixId(this);
          });

          var anchor = headerClone
              .wrap("<li><div><a href='#'></a></div></li>")
              .parent();

          anchor.addClass("oj-tabs-anchor")
            .attr(
            {
              "role" : "presentation", 
              "tabIndex" : "-1"
            });

          var div = anchor.parent()
            .addClass("oj-tabs-tab-content");

          var tab = div.parent()
            .addClass("oj-tabs-default")
            .attr(
            {
              "role" : "tab", 
              "aria-hidden": "false",
              "tabIndex" : "-1"
            });

          tab.appendTo(self.tablist);
          self.tabs = self.tabs.add(tab);

          //TODO: remove aria-hidden attribute
          header.hide()            
            .attr(
            {
              "aria-hidden": "true"
            });

          var anchorId = anchor.uniqueId().attr("id"),
              originalAriaControls = tab.attr("aria-controls"),
              panel = $(this);

          if (panel.hasClass("oj-disabled")) 
          {
            self.disable(index);
          }

          if (originalAriaControls)
            tab.data("oj-tabs-aria-controls", originalAriaControls);

          tab.attr(
            {
              "aria-controls" : panel.uniqueId().attr("id"),
              "aria-labelledby" : anchorId
            });

          self.panels = self.panels.add(panel);
          panel.attr("aria-labelledby", anchorId);
        });

      if (this.options.orientation == "vertical")
      {
        //find out the longest tab width
        var maxTabWidth = 0,
            sumTabHeight = 0;

        this.tabs
          .addClass("oj-tabs-active")
          .each(function ()
            {
              var tab = $(this);
              maxTabWidth = Math.max(maxTabWidth, tab.width());
              sumTabHeight += tab.outerHeight(true);
            })
          .removeClass("oj-tabs-active");

        //close icon 16x16
        if (this.options.removable)
        {
          maxTabWidth += 20;
        }

        this.tabs.css(
          {
            'width': maxTabWidth + "px"
          });

        var outerWidth = this.tablist.outerWidth(true);
        if (this._GetReadingDirection() == "rtl")
        {
          this.panels.css(
            {
              'margin-right': outerWidth - 1 + "px",
              'min-height': sumTabHeight + "px"
            });
        }
        else
        {
          this.panels.css(        
            {
              'margin-left': outerWidth - 1 + "px",
              'min-height': sumTabHeight + "px"
            });
          }
      }

      this.panels.addClass("oj-tabs-panel")
        .attr("role", "tabpanel");

    },

    _setupDisabled : function (disabled)
    {
      if ($.isArray(disabled))
      {
        if (!disabled.length)
        {
          disabled = false;
        }
        else if (disabled.length === this.tabs.length)
        {
          disabled = true;
        }
      }

      // disable tabs
      this.tabs.each(function (index)
      {
        if (disabled === true || $.inArray(index, disabled) !==  - 1)
        {
          $(this).addClass("oj-disabled")
            .attr("aria-disabled", "true");
        }
        else 
        {
          $(this).removeClass("oj-disabled")
            .removeAttr("aria-disabled");
        }
      });

      this.options.disabled = disabled;
    },

    _setupEvents : function ()
    {
      var events = 
      {
        'keydown' : this._tabKeydown
      };

      var event = this.options.event;
      if (event)
      {
        var self = this;
        $.each(event.split(" "), function (index, eventName)
        {
          events[eventName] = self._eventHandler;
        });
      }

      var enabledTabs = this.tabs.not(".oj-disabled");

      this._on(enabledTabs, events);
      this._on(this.panels, 
      {
        'keydown' : this._panelKeydown
      });

      //add listeners on close icon
      if (this.options.removable)
      {
        var revents = 
        {
          "click" : this._removeTabHandler
        }
        this._on(enabledTabs.find("." + _CLOSE_ICON), revents);
      }

      this._focusable(enabledTabs);
      this._hoverable(enabledTabs);
      this._activeable(enabledTabs);

    },

    _tearDownEvents : function ()
    {
      var enabledTabs = this.tabs.not(".oj-disabled");
      this._off(enabledTabs);
      this._off(this.panels);
    },

    _eventHandler : function (event)
    {
      var options = this.options, 
          active = this.active, 
          anchor = $(event.currentTarget), 
          tab = anchor.closest("li"), 
          clickedIsActive = tab[0] === active[0], 
          toShow = this._getPanelForTab(tab), 
          toHide = !active.length ? $() : this._getPanelForTab(active), 

          eventData = 
          {
            /** @expose */
            oldTab : active, 
            /** @expose */
            oldPanel : toHide, 
            /** @expose */
            newTab : tab, 
            /** @expose */
            newPanel : toShow
          };

      event.preventDefault();

      if (tab.hasClass("oj-disabled") || 

      // can't switch durning an animation
      this.running || 
          // click on active header, 
          (clickedIsActive) || 
          // allow canceling activation
          (this._trigger("beforeActivate", event, eventData) === false))
      {
        return;
      }

      options.active = this.tabs.index(tab);

      this.active = clickedIsActive ? $() : tab;

      if (!toHide.length && !toShow.length)
      {
        $.error("OJ Tabs: Mismatching fragment identifier.");
      }

      this._toggle(event, eventData);
    },

    // handles show/hide for selecting tabs
    _toggle : function (event, eventData)
    {
      var self = this, 
          toShow = eventData.newPanel, 
          toHide = eventData.oldPanel;

      this.running = true;

      function complete()
      {
        self.running = false;
        self._trigger("activate", event, eventData);
      }

      function show()
      {
        var active = eventData.newTab.closest("li");
        active.addClass("oj-tabs-active");

        toShow.show();
        complete();
      }

      // start out by hiding, then showing, then completing
      var old = eventData.oldTab.closest("li");
      old.removeClass("oj-tabs-active");

      toHide.hide();
      show();

      toHide.attr(
      {
        "aria-expanded" : "false", 
        "aria-hidden" : "true"
      });

      eventData.oldTab.attr("aria-selected", "false");
      // If we're switching tabs, remove the old tab from the tab order.
      // If we're opening from collapsed state, remove the previous tab from the tab order.
      if (toShow.length && toHide.length)
      {
        eventData.oldTab.attr("tabIndex", "-1");
      }
      else if (toShow.length)
      {
        this.tabs.filter(function ()
        {
          return $(this).attr("tabIndex") === "0";
        })
          .attr("tabIndex", "-1");
      }

      toShow.attr(
      {
        "aria-expanded" : "true", 
        "aria-hidden" : "false"
      });

      eventData.newTab.attr(
      {
        "aria-selected" : "true", "tabIndex" : "0"
      });

    },

    _activate : function (index)
    {
      var anchor, 
          active = this._findActive(index);

      // trying to activate the already active panel
      if (active[0] === this.active[0])
        return;

      // simulate a click on the current active header
      if (!active.length)
        active = this.active;

      this.options.active = index;

      anchor = active.find(".oj-tabs-anchor")[0];
      this._eventHandler(
      {
        target : anchor, 
        currentTarget : anchor, 
        preventDefault : $.noop
      });
    },

    _findActive : function (index)
    {
      return this.tabs.eq(index);
    },

    _createCloseIcons : function ()
    {
      //create close icon only if it's not disabled
      if (this.options.removable)
      {
        this.tabs.not(".oj-disabled").each(function ()
        {
          var div = $(this).find("> :first-child");
          $("<a href='#'>")
            .addClass("oj-tabs-icon oj-widget-icon oj-clickable-icon " + _CLOSE_ICON)
            .attr(
              {
                "tabIndex" : "-1",
                "aria-labelledby" : $(this).attr( "id" ),
                "role" : "presentation"
              })
            .appendTo(div);
        });
      }
    },

    _destroyCloseIcons : function ()
    {
      this.tabs.find(_CLOSE_ICON).remove();
    },

    _destroyTabBar : function ()
    {
      if (this.conveyor) {
        this.conveyor.ojConveyorBelt( "destroy" );
        this.conveyor.remove();
        this.conveyor = null;
        this.active = null;
      }
      else
      {
        this.element.children(".oj-tabs-nav").remove();
      }
    },

    _destroy : function ()
    {
      var orientation = this.options.orientation;
      if (orientation == "vertical")
        this.element.removeClass("oj-tabs-vertical oj-widget oj-helper-clearfix");
      else
      this.element.removeClass("oj-tabs oj-widget ");

      //destroy tab bar and conveyor
      this._destroyTabBar();

      var self = this;
      this.panels.each(function ()
      {
        $(this).removeAttr("tabIndex")
          .removeAttr("aria-expanded")
          .removeAttr("aria-selected")
          .removeAttr("aria-labelledby")
          .removeAttr("aria-hidden")
          .removeAttr("role")
          .removeClass("oj-active oj-disabled oj-tabs-panel")
          .css("display", "");

        if (orientation == "vertical")
        {
          $(this).css("margin-left", "")
            .css("min-height", "");
        }

        //remove display:none
        var header = $(this).find("> :first-child");
        header.css("display", "")
          .removeAttr("aria-hidden");

        //remove prefix from ids
        var ohd = header[0];
        if (ohd.id)
          self._removePrefixId(ohd);
        header.find("[id]").each(function() {
          self._removePrefixId(this);
        });

      });
    },

    /**
     * Enables a tab.
     * 
     * @expose 
     * @memberof! oj.ojTabs
     * @instance
     * @param {number} index zero-based index of the tabs to enable
     * @example <caption>Invoke the <code class="prettyprint">enable</code> method:</caption>
     * $( ".selector" ).ojTabs( "enable", 1 );
     */
    enable : function (index)
    {
      var disabled = this.options.disabled;
      if (disabled === false)
        return;

      if (index === undefined)
      {
        disabled = false;
      }
      else 
      {
        if ($.isArray(disabled))
        {
          disabled = $.map(disabled, function (num)
          {
            return num !== index ? num : null;
          });
        }
        else 
        {
          disabled = $.map(this.tabs, function (li, num)
          {
            return num !== index ? num : null;
          });
        }
      }
      this._setupDisabled(disabled);
    },

    /**
     * Disables a tab.
     * 
     * @expose 
     * @memberof! oj.ojTabs
     * @instance
     * @param {number} index zero-based index of the tabs to disable
     * @example <caption>Invoke the <code class="prettyprint">disable</code> method:</caption>
     * $( ".selector" ).ojTabs( "disable", 1 );
     */
    disable : function (index)
    {
      var disabled = this.options.disabled;
      if (disabled === true)
        return;

      if (index === undefined)
      {
        disabled = true;
      }
      else 
      {
        if ($.inArray(index, disabled) !==  - 1)
          return;

        if ($.isArray(disabled))
        {
          disabled = $.merge([index], disabled).sort();
        }
        else 
        {
          disabled = [index];
        }
      }
      this._setupDisabled(disabled);
    },

    _setRemovable : function (removable)
    {
      if (removable === this.options.removable)
        return;

      this.options.removable = removable;
      this.refresh();
    },

    _removeTabHandler : function (event)
    {
      var icon = $(event.currentTarget),
          tab = icon.closest("li");

      //trigger before delete event and only delete if it's not cancelled
      if (tab && this._trigger("beforeremove", event) !== false)
      {
        var idxRmTab = this.tabs.index(tab);

        //if tab to be removed is active, activate the next enabled tab
        if (tab.hasClass("oj-tabs-active"))
        {
          this.options.active = this._activateNextTab(idxRmTab);
        }
        else if (idxRmTab < this.options.active)
        {
          this.options.active = Math.max(0, this.options.active - 1)
        }

        //Bug 18269291 - If user closes tab then index for tabs changes and disabled tab becomes enable
        // update indexes of disabled tabs 
        if ($.isArray(this.options.disabled))
        {
          var adis = this.options.disabled;
          for(var i = adis.length - 1; i >= 0; i--) {
            if (idxRmTab == adis[i]) {
              this.options.disabled = adis = adis.splice(i, 1);
            }
            else if (idxRmTab < adis[i])
              adis[i] = adis[i] - 1;
          }
        }

        var panel = this._getPanelForTab(tab);
        this._getPanelForTab(tab).remove();
        tab.remove();

        this.refresh();
        this._trigger("remove", event);
      }
    },

    /**
     * Add a tab to the end of the tabs
     * 
     * @expose 
     * @memberof! oj.ojTabs
     * @instance
     * @param {jQuery} newTab jQuery object of the new tab
     * @example <caption>Invoke the <code class="prettyprint">addTab</code> method:</caption>
     * $( ".selector" ).ojTabs( "addTab", $("&lt;div>&lt;h3>New Tab&lt;/h3>&lt;p>Content of New Tab&lt;/p>&lt;/div>") );
     */
    addTab : function (newTab)
    {
      this.element.append(newTab);
      var options = this.options;

      //in case all tabs are disabled, make sure the new tab is enabled.
      if (options.active == -1) {
        options.active = this.tabs.length;

        var disabledTabs = this.tabs.filter(".oj-disabled");
        var self = this;
        options.disabled = $.map(disabledTabs, 
          function (li)
          {
            return self.tabs.index(li);
          });
      }
      this.refresh();
    },

    _setupReorder : function ()
    {
      var tabBar = this.conveyor ? this.conveyor.find(".oj-tabs-nav") :
        this.element.children(".oj-tabs-nav");

      //enable sortable
      if (this.options.reorder)
      {
        var self = this;
        tabBar.sortable(
        {
          axis: (self.options.orientation == "horizontal") ? "x" : "y",
          stop: function(event, ui) {              
            //find the element that was moved
            //to move its content
            var mvTab = ui.item;
            var mvContent = self._getPanelForTab(mvTab);

            var prevTab = mvTab.prev();
            if (prevTab.length)
            {
              self._getPanelForTab(prevTab).after(mvContent);
            }
            else
            {
              tabBar.after(mvContent);
            }
          }
        })
      }
      //disable sortable
      else
      {
        tabBar.sortable({ disabled: true });
      }
    },

    _setupOrientation : function (value)
    {
      if (! value)
        value = this.options.orientation;

      if (value == "horizontal")
      {
        this.element.addClass("oj-tabs oj-widget");
      }

      //TODO: need refresh
      else if (value == "vertical")
      {
        this.element.addClass( "oj-tabs-vertical oj-widget oj-helper-clearfix" );
      }
      else
      {
        return;
      }
      this.options.orientation = value;

    },

    //Bug 18290621 - ojtabs do not work with tabs whose id has '::' 
    _sanitizeSelector: function( hash ) {
      return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
    },

    _getPanelForTab : function (tab)
    {
      var id = $(tab).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + id));
    },

    _addPrefixId : function (elem)
    {
      $(elem).attr("id", _ID_PREFIX + elem.id);
    },

    _removePrefixId : function (elem)
    {
      $(elem).attr("id", elem.id.substring(_ID_PREFIX.length));
    }


  });
}
());

//ojprogressbar is based of JQueryUI porgressbar and was modified by Eugene
/*!
 * jQuery UI Progressbar 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/progressbar/
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
 
 /**
 * The ojProgressbar component allows a user to display progress of an input in a rectangular horizontal meter. 
 * If a developer does not witsh to display the exact value, a value of '-1' can be passed in to display an indeterminate value.
 * 
 * 
 * @example <caption>Initialize component using widget API</caption>
 * &lt;div id="progressBar"/&gt;<br/>
 * $("#progressBar").ojProgressbar({'value': loadValue, 'max':100});
 * @example <caption>Using knockout, value bind to observables - loadValue</caption> 
 * &lt;div id="progressBar" data-bind="ojComponent: {role: 'ojProgressbar', value: loadValue, max:100}"/&gt;gt;
 * 
 * @class
 * @constructor
 * @name oj.ojProgressbar
 * @augments oj.baseComponent
 */
(function() {

oj.__registerWidget("oj.ojProgressbar",  $['oj']['baseComponent'], {
	version: "1.0.0",
	defaultElement : "<div>", 
    widgetEventPrefix : "oj", 
	options: {
		/** 
		 * The maximum allowed value. The element's max attribute is used if it 
		 * is provided, otherwise the default value of 100 is used. 
		 * @expose 
		 * @public
		 * @instance
		 * @memberof! oj.ojProgressbar 
		 * @default <code class="prettyprint">100</code>
		 */
		max: 100,
		/** 
		 * The value of the progressbar. The element's value attribute is used if it 
		 * is provided, otherwise the default value of 0 is used.
		 * @expose 
		 * @public
		 * @instance
		 * @memberof! oj.ojProgressbar 
		 * @default <code class="prettyprint">0</code>
		 */
		value: 0,
		/** 
		 * If disbled is set to true, then the progressbar will not change if a new value is passed in.
		 * By default this parameter is set to false.
		 * @expose 
		 * @public
		 * @instance
		 * @memberof! oj.ojProgressbar 
		 * @default <code class="prettyprint">false</code>
		 */
		disabled: false
		
		/**
         * Triggered when the progressbar is created.
         *
         * @event 
         * @name create
         * @memberof! oj.ojProgressbar
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Empty object included for consistency with other events
         * 
         */
	},
    // The min value is a constant and 0 is the value set for it.
	min: 0,
	
	 /** 
	   * Variable used to indicate that the value is indeterminate
	   *
	   * @override
	   * @private
	   */
	_indeterminate: false,
	
	 /**
	   * 
	   * _create contains all actions that are needed fo the initialization of the progressbar and is only called once.
	   *
	   * @override
	   * @private
	   */
	_create: function() {
		// Constrain initial value
		this.oldValue = this.options.value = this._constrainedValue();

		this.element
			.addClass( "oj-progressbar oj-widget oj-widget-content oj-corner-all" )
			.attr({
				// Only set static values, aria-valuenow and aria-valuemax are
				// set inside _refreshValue()
				"role": "progressbar",
				"aria-valuemin": this.min
			});

		this.valueDiv = $( "<div class='oj-progressbar-value oj-widget-header oj-corner-left'></div>" )
			.appendTo( this.element );

		this._refreshValue();
		
		this._super();
	},
	
    /** 
	 * Called when creating widget. Looks for attributes on the dom, and sets
     * the options.
     * @override
     * @private
     */
    _getCreateOptions : function ()
    {
      var allDefaults = this._super(), options = {}, element = this.element;
      $.each(["max"], function (i, option)
      {
        var value = element.attr(option);
        if (value !== undefined && value.length)
        {
          options[option] = value;
        }
      });

	 return $.extend(allDefaults, options);
    },
	
  /**
	 * Check that value is valid and within the correct bounds. A value of -1 indicates an indeterminate value.
	 * @param {Object} newValue - The newValue of the progressbar being passed in.
   * @override
   * @public
 	 * @memberof! oj.ojProgressbar 
   * 
   */	 
	value : function(newValue) {
		if ( newValue === undefined) {
			return this.options.value;
		}

		this.options.value = this._constrainedValue( newValue );

	},
  /**
   * Check that value is valid and within the correct bounds. A value of -1 indicates an indeterminate value.
   * @param {number} newValue - The new value of the progressbar being passed in.
   * @override
   * @private
   */
	_constrainedValue: function( newValue ) {
		if ( newValue === undefined ) {
			newValue = this.options.value;
		}
		
        // Indicates that the value is indeterminate.
		this._indeterminate = (newValue == -1 );

		// sanitize value
		if ( typeof newValue !== "number" ) {
			newValue = isNaN(newValue) ? 0 : Number(newValue);

		}

		return this._indeterminate ? -1 :
			Math.min( this.options.max, Math.max( this.min, newValue ) );
	},
  /**
   * Set the value
   * @param {Object} options - The options being set
   * @override
   * @private
   */
	_setOptions: function( options ) {
		// Ensure "value" option is set after other values (like max)
		if( !this.options.disabled) {
		    var value = options.value;
		    delete options.value;

		    this._super( options );
		    this.options.value = this._constrainedValue( value );
		    this._refreshValue();
		}
	},

   /**
   * Check that the max value is not less than the min 
   * @param {string} key - The key for the option being set
   * @param {string|number} value - The value being set
   * @override
   * @private
   */
	_setOption: function( key, value ) {
		if ( key === "max" ) {
			// Don't allow a max less than min
			value = Math.max( this.min, value );
		}

		this._super( key, value );
	},
  /**
   * Calculates the percentage of the progressbar that has been loaded based on min, max, and value.
   *
   * @override
   * @private
   */
	_percentage: function() {
		return this._indeterminate ? 100 : 100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
	},

   /**
    * This function is used to update the value when the value has changed.
    *
    * @override
    * @private
    */
	_refreshValue: function() {
		var value = this.options.value,
			percentage = this._percentage();

		this.valueDiv
			.toggle( this._indeterminate || value > this.min )
			.toggleClass( "oj-corner-right", value === this.options.max )
			.width( percentage.toFixed(0) + "%" );

		this.element.toggleClass( "oj-progressbar-indeterminate", this._indeterminate );


		if ( this._indeterminate) {
			this.element.attr({
				"aria-valuetext": "In Progress"
			});
			this.element.removeAttr( "aria-valuenow" );
			this.element.removeAttr( "aria-valuemin" );
			this.element.removeAttr( "aria-valuemax" );
			if ( !this.overlayDiv ) {
				this.overlayDiv = $( "<div class='oj-progressbar-overlay'></div>" ).appendTo( this.valueDiv );
			}
		} else {
			this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": value
			});
			if ( this.overlayDiv ) {
				this.overlayDiv.remove();
				this.overlayDiv = null;
			}
		}
	},
	
   /**
    * Overide the destory function to remove appropriate class and atrributes.
    *
    * @override
    * @private
    */	
	_destroy: function() {
		this.element
			.removeClass( "oj-progressbar oj-widget oj-widget-content oj-corner-all" )
			.removeAttr( "role" )
			.removeAttr( "aria-valuemin" )
			.removeAttr( "aria-valuemax" )
			.removeAttr( "aria-valuenow" );

		this.valueDiv.remove();
	}
});

}( ));
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
  _CLASS_NAMES : "oj-textarea oj-form-control oj-widget",
  
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
  _CLASS_NAMES : "oj-inputpassword oj-form-control oj-widget",
  
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
/**
 * @class 
 * @constructor
 * @name oj.ojConveyorBelt
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="conveyorBeltOverview-section">
 *   JET ConveyorBelt Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#conveyorBeltOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Container component that manages overflow for its child
 * components and allows scrolling among them.
 * 
 * <p>A JET ConveyorBelt can be created from any &lt;div> element that contains
 * multiple child elements at the same level to scroll among.  The root must be
 * a &lt;div> element because the ConveyorBelt will create additional DOM
 * elements between the root and the scrollable child elements.  The size of the
 * ConveyorBelt must somehow be constrained in order for there to be overflow to
 * manage.  ConveyorBelt does not position its scrollable children.  It is up to
 * calling code to ensure that the children are laid out horizontally, for 
 * example by using <code class="prettyprint">white-space:nowrap;</code>, or 
 * vertically, for example by using <code class="prettyprint">display:block;</code>, 
 * before creating the ConveyorBelt.  
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div id="conveyorBelt" style="max-width:100px;white-space:nowrap;"
 *         data-bind="ojComponent: {component: 'ojConveyorBelt'}">
 *   &lt;button id="button1">Alpha&lt;/button>
 *   &lt;button id="button2">Beta&lt;/button>
 *   &lt;button id="button3">Gamma&lt;/button>
 *   &lt;button id="button4">Delta&lt;/button>
 *   &lt;button id="button5">Epsilon&lt;/button>
 *   &lt;button id="button6">Zeta&lt;/button>
 * &lt;/div>
 * </code></pre>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 *
 * <p>ConveyorBelt does not directly support keyboard interaction.  If child 
 * items support interaction or keyboard navigation, they are responsible for 
 * scrolling themselves into view when focused in case they are partially 
 * visible or completely hidden.  The child component should call the DOM 
 * function scrollIntoView() on itself.  ConveyorBelt will also honor any 
 * scrolling that the browser may try to do when tabbing through child items.  
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>As with any JET component, in the unusual case that the directionality 
 * (LTR or RTL) changes post-init, the conveyorBelt must be 
 * <code class="prettyprint">refresh()</code>ed.
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-conveyorbelt</code> pseudo-selector can 
 * be used in jQuery expressions to select JET ConveyorBelt.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-conveyorbelt" ) // selects all JET ConveyorBelts on the page
 * $myEventTarget.closest( ":oj-conveyorbelt" ) // selects the closest ancestor that is a JET ConveyorBelt
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "conveyorBelt".  
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates a JET ConveyorBelt. 
 * @example <caption>Initialize the conveyorBelt with no options specified:</caption>
 * $( ".selector" ).ojConveyorBelt();
 * 
 * @example <caption>Initialize the conveyorBelt with some options specified:</caption>
 * $( ".selector" ).ojConveyorBelt( { "orientation": "vertical" } );
 * 
 * @example <caption>Initialize the conveyorBelt via the JET 
 * <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="conveyorBelt" data-bind="ojComponent: { component: 'ojConveyorBelt', 
 *                                                     orientation: "vertical"}">
 */
(function()
{
oj.__registerWidget("oj.ojConveyorBelt", $['oj']['baseComponent'],
{
  version: "1.0.0",
  defaultElement: "<div>",
  widgetEventPrefix: "oj",

  options:
  {
    /** 
     * Specify the orientation of the conveyorBelt.
     * Valid values: "horizontal" or "vertical".
     *
     * @expose 
     * @memberof! oj.ojConveyorBelt
     * @instance
     * @type {string}
     * @default <code class="prettyprint">"horizontal"</code>
     *
     * @example <caption>Initialize the conveyorBelt with the 
     * <code class="prettyprint">orientation</code> option specified:</caption>
     * $( ".selector" ).ojConveyorBelt( { "orientation": "vertical" } );
     * 
     * @example <caption>Get or set the <code class="prettyprint">orientation</code> 
     * option after initialization:</caption>
     * // getter
     * var orientation = $( ".selector" ).ojConveyorBelt( "option", "orientation" );
     * 
     * // setter
     * $( ".selector" ).ojConveyorBelt( "option", "orientation", "vertical" );
     */
    orientation: "horizontal",
    /** 
     * Specify the selector of the descendant DOM element in the conveyorBelt
     * that directly contains the items to scroll among.  
     *
     * @expose 
     * @memberof! oj.ojConveyorBelt
     * @instance
     * @type {?string}
     * @default <code class="prettyprint">null</code>
     *
     * @example <caption>Initialize the conveyorBelt with the 
     * <code class="prettyprint">contentParent</code> option specified:</caption>
     * $( ".selector" ).ojConveyorBelt( { "contentParent": "#myContentDiv" } );
     * 
     * @example <caption>Get or set the <code class="prettyprint">contentParent</code> 
     * option after initialization:</caption>
     * // getter
     * var contentParent = $( ".selector" ).ojConveyorBelt( "option", "contentParent" );
     * 
     * // setter
     * $( ".selector" ).ojConveyorBelt( "option", "contentParent", "#myContentDiv" );
     */
    contentParent: null
  },

  /**
   * Anything that only needs to happen once ever, should go in _create. 
   * Anything that should happen on both the first init and every re-init,
   * should be called from _init.
   * @memberof! oj.ojConveyorBelt
   * @override
   * @protected
   */
  _create: function() // Override of protected base class method.  
  {
    var elem = this.element;  
    elem.addClass("oj-conveyorbelt oj-widget");
    this._super();
  },

  /** 
   * Called every time ojConveyorBelt is called without attributes. It's essentially
   * a hard-reset.
   * @memberof! oj.ojConveyorBelt
   * @override
   * @protected
   */
  _init: function() // Override of protected base class method.  
  {
    this._setup(true);
  },

  // This method currently runs at create, init, and refresh time (since refresh() is called by _init()).
  /**
   * Refreshes the visual state of the accordion. JET components require a 
   * <code class="prettyprint">refresh()</code> or re-init after the DOM is 
   * programmatically changed underneath the component.
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose 
   * @memberof! oj.ojConveyorBelt
   * @instance
   * 
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" ).ojConveyorBelt( "refresh" );
   */
  refresh: function() // Override of public base class method.  
  {
    this._super();
    
    //if RTL has changed, just destroy and recreate the ConveyorBeltCommon
    var bRTL = (this._GetReadingDirection() === "rtl");
    var bRecreate = (bRTL !== this._bRTL);
    if (bRecreate)
    {
      this._destroyCBCommon();
    }
    this._setup(bRecreate);
  },

  // isInit is true for init (create and re-init), false for refresh
  /** 
   * Setup the conveyorBelt.
   * @param {boolean} isInit true if _setup is called from _init(), false
   *        if called from refresh()
   * @memberof! oj.ojConveyorBelt
   * @private
   */
  _setup: function(isInit) // Private, not an override (not in base class).  
  {
    this._bRTL = (this._GetReadingDirection() === "rtl");
    var elem = this.element;  
    var options = this.options;
    if (isInit)
    {
      if (!this._cbCommon)
      {
        var orientation = options.orientation;
        var prevStyleClass = null;
        var nextStyleClass = null;
        var prevIcon = null;
        var nextIcon = null;
        var animateScrollFunc = null;
        if (orientation !== "vertical")
        {
          prevStyleClass = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-start-overflow-indicator";
          nextStyleClass = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-end-overflow-indicator";
          prevIcon = this._createIcon("oj-conveyorbelt-start-overflow-icon");
          nextIcon = this._createIcon("oj-conveyorbelt-end-overflow-icon");
          animateScrollFunc = this._animateScrollLeft;
        }
        else
        {
          prevStyleClass = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-top-overflow-indicator";
          nextStyleClass = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-bottom-overflow-indicator";
          prevIcon = this._createIcon("oj-conveyorbelt-top-overflow-icon");
          nextIcon = this._createIcon("oj-conveyorbelt-bottom-overflow-icon");
          animateScrollFunc = this._animateScrollTop;
        }
        var buttonInfo = {};
        buttonInfo["prevButtonStyleClass"] = prevStyleClass;
        buttonInfo["nextButtonStyleClass"] = nextStyleClass;
        buttonInfo["prevButtonIcon"] = prevIcon;
        buttonInfo["nextButtonIcon"] = nextIcon;
        var callbackInfo = {};
        callbackInfo["automaticSizeCheck"] = true;
        //disable scroll animation during testing
        if (elem.attr("_ojConveyorBeltTesting") !== "true")
        {
          callbackInfo["scrollFunc"] = animateScrollFunc;
          callbackInfo["callbackObj"] = this;
        }
        var contentParentElem = null;
        if (options.contentParent)
        {
          contentParentElem = $(options.contentParent)[0];
        }
        this._cbCommon = new window.adf.shared.impl.conveyorBelt.ConveyorBeltCommon(
            elem[0],
            orientation, 
            contentParentElem,
            this._bRTL, 
            buttonInfo, 
            callbackInfo);
      }
    }
    var cbCommon = this._cbCommon;
    cbCommon.setup(isInit);
    if (isInit)
    {
      var children = elem.find(".oj-conveyorbelt-overflow-indicator");
      var numChildren = children.size();
      for (var i = 0; i < numChildren; i++)
      {
        var child = children.get(i);
        this._setupButtonMouseStyles(child);
      }
    }
  },

  /** 
   * Destroy the conveyorBelt.
   * @memberof! oj.ojConveyorBelt
   * @override
   * @protected
   */
  _destroy: function() // Override of protected base class method.  
  {
    this._destroyCBCommon();
    var elem = this.element;
    elem.removeClass("oj-conveyorbelt oj-widget");
  },

  /** 
   * Set an option on the conveyorBelt.
   * @memberof! oj.ojConveyorBelt
   * @override
   * @protected
   */
  _setOption: function(key, value) // Override of protected base class method.
                                   // Method name needn't be quoted since is in externs.js.
  {
    var bRecreate = false;
    switch (key) 
    {
      //when changing containerParent or orientation, just destroy and recreate
      //the ConveyorBeltCommon
      case "containerParent":
      case "orientation":
        bRecreate = true;
        break;
    }
    //if recreating, destroy the ConveyorBeltCommon before calling superclass
    //_setOption
    if (bRecreate)
    {
      this._destroyCBCommon();
    }
    this._super(key, value);
    //if recreating, setup the new ConveyorBeltCommon after calling superclass
    //_setOption
    if (bRecreate)
    {
      this._setup(true);
    }
  },

  /** 
   * Destroy the ConveyorBeltCommon.
   * @memberof! oj.ojConveyorBelt
   * @private
   */
  _destroyCBCommon: function()
  {
    var cbCommon = this._cbCommon;
    if (cbCommon)
    {
      cbCommon.destroy();
    }
    this._cbCommon = null;
  },

  /** 
   * Setup mouse listeners to change button styles.
   * @param {Element} element DOM element to affect
   * @memberof! oj.ojConveyorBelt
   * @private
   */
  _setupButtonMouseStyles: function(element)
  {
    this._on(element,
      {
        mousedown: function( event ) {
          var currTarget = event.currentTarget;
          $(currTarget).addClass("oj-active");
        },
        mouseup: function( event ) {
          var currTarget = event.currentTarget;
          $(currTarget).removeClass("oj-active");
        },
        mouseenter: function( event ) {
          var currTarget = event.currentTarget;
          $(currTarget).addClass("oj-hover");
        },
        mouseleave: function( event ) {
          var currTarget = event.currentTarget;
          $(currTarget).removeClass("oj-hover");
          $(currTarget).removeClass("oj-active");
        }
      });
  },

  /** 
   * Create a DOM element for an icon.
   * @param {string} iconStyleClass Style class for the icon
   * @memberof! oj.ojConveyorBelt
   * @private
   */
  _createIcon: function(iconStyleClass)
  {
    var span = document.createElement("span");
    span.setAttribute("class", "oj-widget-icon oj-clickable-icon " + iconStyleClass);
    return span;
  },

  /** 
   * Animate setting the scrollLeft DOM property.
   * @param {Element} elem DOM element to scroll
   * @param {number} value Scroll value
   * @param {number} duration Duration of animation, in ms
   * @param {function()} onEndFunc Function to call when the animation ends
   * @memberof! oj.ojConveyorBelt
   * @private
   */
  _animateScrollLeft: function(elem, value, duration, onEndFunc)
  {
    var props = {};
    props["scrollLeft"] = value;
    //use swing instead of easeInOutCubic because easeInOutCubic isn't found
    //when running in the cookbook
    $(elem).animate(props, duration, "swing", onEndFunc);
  },

  /** 
   * Animate setting the scrollTop DOM property.
   * @param {Element} elem DOM element to scroll
   * @param {number} value Scroll value
   * @param {number} duration Duration of animation, in ms
   * @param {function()} onEndFunc Function to call when the animation ends
   * @memberof! oj.ojConveyorBelt
   * @private
   */
  _animateScrollTop: function(elem, value, duration, onEndFunc)
  {
    var props = {};
    props["scrollTop"] = value;
    //use swing instead of easeInOutCubic because easeInOutCubic isn't found
    //when running in the cookbook
    $(elem).animate(props, duration, "swing", onEndFunc);
  },
  
  /**
   * @expose
   * Return the subcomponent node represented by the documented locator 
   * attribute values.
   * Test authors should target sub elements using the following names:
   * oj-conveyorbelt-start-overflow-indicator: the start overflow indicator of a
   * horizontal ConveyorBelt
   * oj-conveyorbelt-end-overflow-indicator: the end overflow indicator of a
   * horizontal ConveyorBelt
   * oj-conveyorbelt-top-overflow-indicator: the top overflow indicator of a
   * vertical ConveyorBelt
   * oj-conveyorbelt-bottom-overflow-indicator: the bottom overflow indicator of
   * a vertical ConveyorBelt
   * @param {Object} locator An Object containing at minimum a subId property 
   *        whose value is a string, documented by the component, that allows 
   *        the component to look up the subcomponent associated with that 
   *        string.  It contains:<p>
   *        component: optional - in the future there may be more than one 
   *        component contained within a page element<p>
   *        subId: the string, documented by the component, that the component 
   *        expects in getNodeBySubId to locate a particular subcomponent
   * @returns {Element|null} the subcomponent located by the subId string passed
   *          in locator, if found.<p>
   */
  getNodeBySubId: function(locator)
  {
    if (locator == null)
    {
      return this.element ? this.element[0] : null;
    }
    
    var subId = locator['subId'];
    if (subId === "oj-conveyorbelt-start-overflow-indicator") {
      return this.widget().find(".oj-conveyorbelt-start-overflow-indicator")[0];
    }
    if (subId === "oj-conveyorbelt-end-overflow-indicator") {
      return this.widget().find(".oj-conveyorbelt-end-overflow-indicator")[0];
    }
    if (subId === "oj-conveyorbelt-top-overflow-indicator") {
      return this.widget().find(".oj-conveyorbelt-top-overflow-indicator")[0];
    }
    if (subId === "oj-conveyorbelt-bottom-overflow-indicator") {
      return this.widget().find(".oj-conveyorbelt-bottom-overflow-indicator")[0];
    }
    
    // Non-null locators have to be handled by the component subclasses
    return null;
  }
}); // end of oj.__registerWidget

}()); // end of ConveyorBelt wrapper function
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
 * The ojInputNumber component enhances a browser input element into one that holds numbers 
 * and it has a spinbox to quickly increment or decrement the number. The value option
 * must be a number. Conversion and validation is not yet supported.
 * 
 * <h3>Events:</h3>
 * <ul>
 *   <li>optionChange(event, data) - Type: ojoptionchange<p>
 *   Triggered if the value changes when the user interacts with the component 
 *   (blur, enter, up/down arrows, and up/down buttons); or if the value has 
 *   changed programmatically via the value option or stepUp or stepDown methods. 
 *   </li>
 * </ul>
 * 
 * @example <caption>Initialize component using widget API</caption>
 * &lt;input id="spin" type="text"/&gt;<br/>
 * $("#spin").ojInputNumber({'value': 10, 'max':100, 'min':0, 'step':2});
 * $("#spin").ojInputNumber({'option', 'value', 10});
 * @example <caption>Using knockout, value, min, max bind to observables - salary, salaryMax, salaryMin</caption> 
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputNumber', value: salary, min:salaryMin, max:salaryMax, step:5}"/&gt;
 * 
 * @class
 * @constructor
 * @name oj.ojInputNumber
 * @augments oj.editableValue
 */
oj.__registerWidget("oj.ojInputNumber", $['oj']['editableValue'],
{
  version : "1.0.0",  
  defaultElement : "<input>", 
  widgetEventPrefix : "oj", 
  options : 
  {
    /** 
     * The maximum allowed value. The element's max attribute is used if it 
     * exists and the option is not explicitly set. If null, there is no maximum enforced.
     * @expose 
     * @public
     * @instance
     * @memberof! oj.ojInputNumber */
    max : null, 
    /** 
     * The minimum allowed value. The element's min attribute is used if it 
     * exists and the option is not explicitly set. If null, there is no minimum enforced.
     * @expose 
     * @public 
     * @instance
     * @memberof! oj.ojInputNumber */
    min : null, 
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
     * The size of the step to take when spinning via buttons or via the 
     * stepUp()/stepDown() methods. The element's step attribute is used if it 
     * exists and the option is not explicitly set. Step must be a number 
     * greater than 0, otherwise it defaults to 1.
     * @expose 
     * @public
     * @instance
     * @memberof! oj.ojInputNumber */
    step : 1
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
   * 
   * After _create, the widget should be 100% set up.
   *
   *
   * @override
   * @private
   */
  _create : function ()
  {
    this._draw();
    
    // todo: where should this be called from?
    this._SetRootAttributes();
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
    
	  this._super();
    
    // This will make sure the display value is set. If we don't do this
    // then the value will be null when we refreshAria and updateButtons.
    // TODO jmw: We may want to move this up to the base class. Pavitra needs
    // to think about about why this wouldn't be a good idea first.
    this._SetDisplayValue(this.options['value']);
    
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
  /** Called when creating widget. Looks for attributes on the dom, and sets
   * the options.
   * @override
   * @private
   */
  _getCreateOptions : function ()
  {
    var allDefaults = this._super(), options = {}, element = this.element;
    // TODO move to _create to be consistent with how we do disabled, and other attributes
    // In a meeting with Jim, Pavitra, Ji, we decided not to put it here.
    $.each(["min", "max", "step"], function (i, option)
    {
      var value = element.attr(option);
      if (value !== undefined && value.length)
      {
        options[option] = value;
      }
    });

    return $.extend(allDefaults, options);
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
                      icons: {start:'oj-widget-icon oj-inputnumber-up-icon'}, 
                      label: incrementString});
    uiInputNumber.find(".oj-inputnumber-down").ojButton({display: 'icons', 
                      icons: {start:'oj-widget-icon oj-inputnumber-down-icon'}, 
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
    return "<span class='oj-inputnumber oj-widget'></span>";
  },
  _buttonHtml : function ()
  {
    return "" + "<a class='oj-inputnumber-button oj-inputnumber-up'></a>" + 
            "<a class='oj-inputnumber-button oj-inputnumber-down'></a>";
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
    // TODO jmw _GetDisplayValue could be 20%. I need to convert it to the actual number first,
    // then update it, then convert it back, right? Ask pavitra. I use _parseValue, but that is private in EditableValue.
    //jmw  value needs to be a number, but here it is a string. How do I get it to be a number?
    if (typeof value === "string")
    {
      value = + value;
    }
    value = this._adjustValue(value, step);
    //this._SetDisplayValue(value); TODO: jmw I commented this out since it doesn't convert the value for display. Check with Pavitra.
    // Convert value back to a String. The RequiredValidator currently
    // fails validation if the value is the number 0. It works if it's a string.
    // Also, if this we don't do this, then we get two optionChange events triggered,
    // one from this spin (which is a number unless we convert it to a string)
    // and one from blur (which gets the value from the dom, which is a string).
    // TODO: Do I need to convert back to the converted value before I set?
    // In blur, we are calling _SetValue with the one from the dom which is 
    // the converted value. Here we are calling _SetValue with the unconverted value.
    // It seems to work fine. As Pavitra.
    // TODO: Add tests for converted values.
    this._SetValue(""+value, event); // calls valueChange event
  },
  // called from _adjustValue
  _precision : function ()
  {
    var precision = this._precisionOf(this.options.step);
    if (this.options.min !== null)
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

    // make sure we're at a valid step when we step up or down.
    // - find out where we are relative to the base (min or 0)
    stepBase = options.min !== null ? options.min : 0;
     
    // If value subtracted from the step base is not an integral multiple 
    // of the step, then set value to the nearest value that, when subtracted
    // from the step base, is an integral multiple of the allowed value step,
    // and that is less than value if the method invoked was stepDown() and
    // more than value if the method invoked was stepUp().
    
    // is value-stepBase an integral multiple of step?
    aboveMin = value - stepBase;
    var rounded = Math.round(aboveMin / options.step) * options.step;
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
    newValue = parseFloat(newValue.toFixed(this._precision()));
    
    if (options.min !== null && newValue < options.min)
      return options.min;
    
    if (options.max !== null && newValue > options.max)
    {
      var validMax = (Math.floor((options.max - stepBase)/ options.step) * 
                  options.step) + stepBase;
      // fix precision from bad JS floating point math
      validMax = parseFloat(validMax.toFixed(this._precision()));
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
    else if (max !== null && value >= max)
    {
      downButton.ojButton("enable");
      upButton.ojButton("disable");
    }
    else if (min !== null && value <= min)
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
    
    
  }, 
  _parse : function (val)
  {
    if (typeof val === "string" && val !== "")
    {
       val = 
              // window.Globalize && this.options.numberFormat ? Globalize.parseFloat(val, 10, this.options.culture) :  
               + val;
    }
    return val === "" || isNaN(val) ? null : val;
  },
  /* We are following the behavior of HTML-5 the best we can. According
   * to the spec, it says step must be a number greater than 0. 
   * Chrome defaults it to 1 if it is not. */
  _parseStep : function (val)
  {
    if (typeof val === "string" && val !== "")
    {
       val = + val;
    }
    var parsedStep = val === "" || isNaN(val) ? null : val;
    // DEFAULT to 1 if it isn't > 0
    if (parsedStep === null || parsedStep <= 0)
      parsedStep = 1;
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
   * @expose
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
    
    // Non-null locators have to be handled by the component subclasses
    return null;
  },  
   /**
   * Whether the a value can be set on the component. 
   * If the component is disabled (or readOnly) then 
   * then setting value on component is a no-op. 
   * 
   * @see #_SetValue
   * @expose
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
   * Calls _setSubmittedValue if setting value option
   * 
   * @param {String|Object} key a single string representing a key or an object representing a group 
   * of options
   * @param {Object=} value of the key
   */
  /* 
  // [pavi]: this override is not needed
  option : function (key, value)
  {
    if(key == "value" && arguments.length === 2 && typeof value === "string") 
    {
      // TODO jmw: what else do I have to do? Why isn't this in base class?
      return this._setSubmittedValue(value);
    } 
    return this._superApply( arguments );
  },
  */
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
