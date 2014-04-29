define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojcollapsible'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
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
 *   &lt;div id="c3" data-bind="ojComponent: {component: 'ojCollapsible', expanded:true}">
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
 *                                                    multiple: false}">
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
       * Allow multiple collapsible(s) to be open at the same time. 
       *
       * @expose 
       * @memberof! oj.ojAccordion
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Initialize the accordion with the <code class="prettyprint">multiple</code> option specified:</caption>
       * $( ".selector" ).ojAccordion( { "multiple": true } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">multiple</code> option, after initialization:</caption>
       * // getter
       * var multiple = $( ".selector" ).ojAccordion( "option", "multiple" );
       * 
       * // setter
       * $( ".selector" ).ojAccordion( "option", "multiple", true );
       */
      multiple : false,

      // callbacks
      /**
       * Triggered immediately before any collapsible in the accordion is expanded.
       * The beforeExpand can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojAccordion
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.newCollapsible The collapsible that is about to be expanded.
       * @property {jQuery} ui.oldCollapsible The collapsible that is about to be collapsed. Only available if multiple is false.
       * 
       * @example <caption>Initialize any collapsible in the accordion with the <code class="prettyprint">beforeExpand</code> callback specified:</caption>
       * $( ".selector" ).ojAccordion({
       *     "beforeExpand": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeexpand</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeexpand", function( event, ui ) {} );
       */
      beforeExpand : null,

      /**
       * Triggered after the accordion has been expanded (after animation completes).
       * The afterExpand can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojAccordion
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.newCollapsible The collapsible that was just expanded.
       * @property {jQuery} ui.oldCollapsible The collapsible that was just collapsed. Only available if multiple is false.
       * 
       * @example <caption>Initialize the accordion with the <code class="prettyprint">afterExpand</code> callback specified:</caption>
       * $( ".selector" ).ojAccordion({
       *     "afterExpand": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojafterexpand</code> event:</caption>
       * $( ".selector" ).on( "ojafterexpand", function( event, ui ) {} );
       */
      afterExpand : null, 

      /**
       * Triggered immediately before any collapsible in the accordion is collapsed.
       * The beforeCollapse can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojAccordion
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.newCollapsible The collapsible that is about to be collapsed.
       * @property {jQuery} ui.oldCollapsible The collapsible that is about to be expanded. Only available if multiple is false.
       * 
       * @example <caption>Initialize any collapsible in the accordion with the <code class="prettyprint">beforeCollapse</code> callback specified:</caption>
       * $( ".selector" ).ojAccordion({
       *     "beforeCollapse": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforecollapse</code> event:</caption>
       * $( ".selector" ).on( "ojbeforecollapse", function( event, ui ) {} );
       */
      beforeCollapse : null,

      /**
       * Triggered after any collapsible in the accordion has been collapsed (after animation completes).
       * The afterCollapse can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojAccordion
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.newCollapsible The collapsible that was just collapsed.
       * @property {jQuery} ui.oldCollapsible The collapsible that was just expanded. Only available if multiple is false.
       * 
       * @example <caption>Initialize any collapsible in the accordion with the <code class="prettyprint">afterCollapse</code> callback specified:</caption>
       * $( ".selector" ).ojAccordion({
       *     "afterCollapse": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojaftercollapse</code> event:</caption>
       * $( ".selector" ).on( "ojaftercollapse", function( event, ui ) {} );
       */
      afterCollapse : null

    },

    _ComponentCreate : function ()
    {
      this._super();
      //Bug 18633679 - Stop using ui-helper-reset in the layout widgets.
      this.element
        .addClass("oj-accordion oj-component")
        //aria
        .attr("role", "group");

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
    
    _destroy : function ()
    {
      // clean up main element
      this.element
        .removeClass("oj-accordion oj-component")
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
      if (key === "multiple")
      {
        // Transition multiple to single.
        // Keep the first expanded one expanded and collapse the rest.
        if (value == false && this.options.multiple == true)
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
      this._refresh();
    },

    _refresh : function ()
    {
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
        "ojafterexpand" : this._expandHandler,
        "ojbeforecollapse" : this._beforeCollapseHandler, 
        "ojaftercollapse" : this._collapseHandler
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
      if (! ($(event.target).hasClass("oj-collapsible-header")) &&
          ! ($(event.target).hasClass("oj-collapsible-header-icon")))
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
      $(collapsible).trigger(value ? "ojafterexpand" : "ojcollapse");
    }
  },
*/

    /* 
     * For single expansion
     *   returns a list of expanded collapsible widgets that are sibling 
     *   of the current event target
     * For multiple expansion
     *   returns an empty set.
     */
    _findTargetSiblings : function (event)
    {
      if (! this.options.multiple)
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
     * Trigger "beforeCollapse" on all expanded siblings in
     * the before expand handler
     */
    _beforeExpandHandler : function (event, eventData)
    {
      var result, self = this;
      var newData;

        this._findTargetSiblings(event).each(function()
        {
          newData = self._initEventData(event, this.element);

          var beforeCollapsedData = 
          {
            /** @expose */
            newCollapsible : newData.oldCollapsible, 
            /** @expose */
            oldCollapsible : newData.newCollapsible
          };

          result = this._trigger("beforeCollapse", event, beforeCollapsedData);
          return result;
        });

      if (! newData)
      {
        newData = self._initEventData(event, null);
      }

      //oldCollapsible: currently expanded
      //newCollapsible: event.target
      this._trigger("beforeExpand", event, newData);
      return result;
    },

    /* 
     * Collapse all expanded siblings and don't allow cancel
     */
    _expandHandler : function (event, eventData)
    {
      var newData;
      var self = this;

        this._findTargetSiblings(event).each(function ()
        {
          this.collapse(false, event, eventData);

          //oldCollapsible: currently expanded
          //newCollapsible: event.target
          newData = self._initEventData(event, this.element);
        });

      if (! newData)
      {
        newData = self._initEventData(event, null);
      }

      this._trigger("afterExpand", event, newData);
    },

    /* 
     * Trigger "beforecollapse" on all collapsed siblings in
     * the before collapse handler
     */
    _beforeCollapseHandler : function (event, eventData)
    {
      var newData;
      if (eventData.newCollapsible)
      {
        newData = eventData;
      }
      else
      {
        newData = this._initEventData(event, null);
      }

      return this._trigger("beforeCollapse", event, newData);
    },

    /* 
     * Collapse all collapsed siblings and don't allow cancel
     */
    _collapseHandler : function (event, eventData)
    {
      var newData;
      if (eventData.newCollapsible)
      {
        newData = eventData;
      }
      else
      {
        if (event.originalEvent && event.originalEvent.target)
        {
          var collapsible = $(event.originalEvent.target);
          if (collapsible.hasClass("oj-collapsible"))
            newData = this._initEventData(event, collapsible);
        }
        if (! newData)
          newData = this._initEventData(event, null);
      }
      this._trigger("afterCollapse", event, newData);
    },

    _initEventData : function (event, oCollapsible)
    {
      var eventData = 
        {
          /** @expose */
          oldCollapsible : oCollapsible,
          /** @expose */
          newCollapsible : $(event.target)
        };
      return eventData;
    },

    /**
     * Return the subcomponent node represented by the documented locator 
     * attribute values.
     *
     * To lookup a header the locator object should have the following:
     *          subId: 'oj-accordion-header'
     *          index: number
     *
     * To lookup a disclosure icon the locator object should have the following:
     *          subId: 'oj-accordion-header-icon'
     *          index: number
     *
     * To lookup a panel content the locator object should have the following:
     *          subId: 'oj-accordion-content'
     *          index: number
     *
     * To lookup a collapsible the locator object should have the following:
     *          subId: 'oj-accordion-collapsible'
     *          index: number
     *
     * @expose
     * @memberof! oj.ojAccordion
     * @instance
     * @override
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

      var subId = locator['subId'],
          index = locator['index'],
          collapsible = this.colllapsibles[index];

      switch (subId)
      {
      case 'oj-accordion-content':
        subId = 'oj-collapsible-content';
        break;

      case 'oj-accordion-header':
        subId = 'oj-collapsible-header';
        break;

      case 'oj-accordion-header-icon':
        subId = 'oj-collapsible-header-icon';
        break;

      case 'oj-accordion-collapsible':
        return collapsible;

      default:
        // Non-null locators have to be handled by the component subclasses
        return null;
      }

      return $(collapsible).ojCollapsible("getNodeBySubId", {subId: subId});
    }


  });
}
());
});
