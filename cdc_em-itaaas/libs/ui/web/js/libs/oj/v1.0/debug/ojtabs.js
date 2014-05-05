define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojconveyorbelt'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

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
 *       <td> Only the selected tab is in the tab order.</tr>
 *     <tr>
 *       <td><kbd>UpArrow or LeftArrow</kbd> (<kbd>RightArrow</kbd> in RTL)</td>
 *       <td> Move focus to the previous tab and select it.</tr>
 *     <tr>
 *       <td><kbd>DownArrow or RightArrow</kbd> (<kbd>LeftArrow</kbd> in RTL)</td>
 *       <td> Move focus to the next tab and select it.</tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td> Move focus to the first tabs item.</tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td> Move focus to the last tabs item.</tr>
 *     <tr>
 *       <td><kbd>Delete</kbd></td>
 *       <td> If deletion is allowed, will delete the current tab.</tr>
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
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td> move focus to the tab for that panel.</tr>
 *   </tbody>
 *  </table>
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
 *   <li>JET Tabs supports reorderable option allow the tab to be reordered by drag and drop within the Tab bar</li>
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
 *                                             reorderable: true }">
 */
(function ()
{
  var _CLOSE_ICON = "oj-tabs-close-icon";
  var _CLOSE_ICON_SIZE = 28;
  var _ID_PREFIX = "ojtabs-id_";
  var _DELETE_KEY = 46;


  oj.__registerWidget("oj.ojTabs", $['oj']['baseComponent'], 
  {
    version : "1.0.0", 
    widgetEventPrefix : "oj", 
    delay : 300, 
    options : 
    {
      /** 
       * The zero-based index of the panel that is selected (open).
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {number}
       * @default <code class="prettyprint">0</code>
       */
      selected : 0, 

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
       * Truncation option applies to the tab titles when there is not enough room to display
       * all tabs.
       * Valid Values: none, progressive and auto.
       *
       * <ul>
       *  <li> none - tabs always take up the space needed by the label texts. When there
       *   is not enough room, the conveyorBelt's navigation arrows are displayed to allow
       *   the label texts be scrolled within the conveyor.</li>
       *
       *  <li> progressive - If not enough space is available to display all of the tabs, 
       *   then the width of each tab label is restricted just enough to allow all tabs to fit. 
       *   All tab labels that are truncated are displayed with ellipses. However the width 
       *   of each tab will not be truncated below tabLabelMinWidth. If after all truncation 
       *   has been applied, there still is not enough room, then the conveyorBelt's navigation 
       *   arrows will appear. When the container of the tabs is resized the truncation will 
       *   be reevaluated.</li>
       *
       *  <li> auto - same as "progressive".</li>
       * </ul>
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @default <code class="prettyprint">auto</code>
       * @type {string}
       */
      truncation : "auto",

      /** 
       * The type of event to select the tab. 
       * To select a tab on hover, use "mouseover".
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"click"</code>
       */
      selectOn : "click", 

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
       * This text is used to provide audible feedback for screen reader users
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {string}
       * @default <code class="prettyprint">Removable</code>
       */
      removeCueText : "Removable",

      /** 
       * Specifies if the tabs can be reordered within the tab bar by drag-and-drop
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       */
      reorderable : false,

      // callbacks
      /**
       * Triggered immediately before a tab is selected.
       * The beforeSelect can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.newHeader The tab that is about to be selected.
       * @property {jQuery} ui.newContent The panel that is about to be selected.
       * @property {jQuery} ui.oldHeader The tab that is about to be deselected.
       * @property {jQuery} ui.oldContent The panel that is about to be deselected.
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">beforeSelect</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "beforeSelect": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeselect</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeselect", function( event, ui ) {} );
       */
      beforeSelect : null,

      /**
       * Triggered after a tab has been selected.
       * The afterSelect can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.newHeader The tab that was just selected.
       * @property {jQuery} ui.newContent The panel that was just selected.
       * @property {jQuery} ui.oldHeader The tab that was just deselected.
       * @property {jQuery} ui.oldContent The panel that was just deselected.
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">afterSelect</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "afterSelect": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojafterselect</code> event:</caption>
       * $( ".selector" ).on( "ojafterselect", function( event, ui ) {} );
       */
      afterSelect : null, 

      /**
       * Triggered immediately before a tab is deselected.
       * The beforeDeselect can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.newHeader The tab that is about to be deselected.
       * @property {jQuery} ui.newContent The panel that is about to be deselected.
       * @property {jQuery} ui.oldHeader The tab that is about to be selected.
       * @property {jQuery} ui.oldContent The panel that is about to be selected.
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">beforeDeselect</code> callback specified:</caption>
       * $( ".deselector" ).ojTabs({
       *     "beforeDeselect": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforedeselect</code> event:</caption>
       * $( ".deselector" ).on( "ojbeforedeselect", function( event, ui ) {} );
       */
      beforeDeselect : null,

      /**
       * Triggered after a tab has been deselected.
       * The afterDeselect can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.newHeader The tab that was just deselected.
       * @property {jQuery} ui.newContent The panel that was just deselected.
       * @property {jQuery} ui.oldHeader The tab that was just selected.
       * @property {jQuery} ui.oldContent The panel that was just selected.
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">afterDeselect</code> callback specified:</caption>
       * $( ".deselector" ).ojTabs({
       *     "afterDeselect": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojafterdeselect</code> event:</caption>
       * $( ".deselector" ).on( "ojafterdeselect", function( event, ui ) {} );
       */
      afterDeselect : null, 

      /**
       * Triggered immediately before a tab is removed.
       * The beforeRemove can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.header The tab that is about to be removed.
       * @property {jQuery} ui.content The panel that is about to be removed.
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">beforeRemove</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "beforeRemove": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeremove</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeremove", function( event, ui ) {} );
       */
      beforeRemove : null,

      /**
       * Triggered after a tab has been removed.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.header The tab that was just removed.
       * @property {jQuery} ui.content The panel that was just removed.
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">afterRemove</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "afterRemove": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojafterremove</code> event:</caption>
       * $( ".selector" ).on( "ojafterremove", function( event, ui ) {} );
       */
      afterRemove : null, 

      /**
       * Fired whenever a supported component option changes, whether due to user interaction or programmatic
       * intervention.  If the new value is the same as the previous value, no event will be fired.
       *
       * Currently there is one supported option, <code class="prettyprint">"selected"</code>.  Additional
       * options may be supported in the future, so listeners should verify which option is changing
       * before taking any action.
       *
       * @expose
       * @event
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {string} ui.option the name of the option that is changing
       * @property {Object} ui.previousValue the previous value of the option
       * @property {Object} ui.value the current value of the option
       * @property {Object} ui.optionMetadata information about the option that is changing
       * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
       *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
       *
       */
      optionChange: null

    },

    _ComponentCreate : function ()
    {
      var self = this, 
          options = this.options;

      this._super();
      this.running = false;

      this._setupOrientation(options.orientation);

      this._processTabs();

      // Take disabling tabs via class attribute from HTML
      // into account and update option properly.
      if (Array.isArray(options.disabled))
      {
        var disabledTabs = this.tabs.filter(".oj-disabled");
        options.disabled = $.unique(options.disabled.concat($.map(disabledTabs, 
          function (li)
          {
            return self.tabs.index(li);
          }))).sort();
      }

      //Bug 18270242 - When ojtab first displays beforeSelect & afterSelect events are not raised  
      // select the selected tab after refresh
      this._initialActivate = options.selected;
      options.selected = -1;

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

        case _DELETE_KEY:
        // James: remove tab keystroke doesn't seem to work with JAWS. 
        // ALT+DEL seems to conflict with a JAWS keystroke. I have raised an issue on the Authoring 
        // Practices for this. Could we just use Delete as well or does that sound like a bad idea?
//          if (event.altKey)
//          {
            // simulate a click on the close icon of the current selected header
            var anchor = this.active.find("." + _CLOSE_ICON);
            if (anchor)
            {
              event.preventDefault();
              this._removeTabHandler(
                {
                  target : anchor, 
                  currentTarget : anchor, 
                  preventDefault : $.noop
                });
            }
//          }
          return;

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
        // Otherwise AT may confuse the user by stating that they need to select the tab,
        // but the tab will already be selected by the time the announcement finishes.
        focusedTab.attr("aria-selected", "false");
        this.tabs.eq(selectedIndex).attr("aria-selected", "true");

        this.activating = this._delay(function ()
        {
          this.option("selected", selectedIndex);
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

    },

    // Ctrl+page up/down moves focus to the previous/next tab (and selects)
    _handlePageNav : function (event)
    {
      if (event.ctrlKey && event.keyCode === $.ui.keyCode.PAGE_UP)
      {
        this._activate(this._focusNextTab(this.options.selected - 1, false));
        return true;
      }
      if (event.ctrlKey && event.keyCode === $.ui.keyCode.PAGE_DOWN)
      {
        this._activate(this._focusNextTab(this.options.selected + 1, true));
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
      if (key === "selected")
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
      if (key === "reorderable")
      {
        if (value !== this.options.reorderable)
        {
          this.options.reorderable = value;
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

      if (key === "selectOn")
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
      var options = this.options;

      // check for length avoids error when initializing empty list
      if (this.tabs.length && options.selected != -1)
        this.active = this._findActive(options.selected);
      else 
        this.active = $();

      this._setupDisabled(options.disabled);

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

      //Bug 18270242 - When ojtab first displays beforeSelect & afterSelect events are not raised  
      // handle active numbers: negative, out of range
      if (this._initialActivate !== undefined)
      {
        var active = this._initialActivate;
        if (active != 0 && (active < 0 || active > this.tabs.length))
          options.selected = 0;
        else
          options.selected = active;

        //Bug 18539151 - ojtabs should not let user set focus on disabled tabs
        //if the selected tab is disabled, select the next enabled tab
        if ($.inArray(active, options.disabled) !==  - 1)
        {
          options.selected = this._activateNextTab(active);
        }

        this._activate(options.selected);
        this._initialActivate = undefined;
      }

      if (options.orientation == "horizontal")
      {
        //always add conveyor
        this._truncateBeforeOverflow();
        this._addConveyor();
      }

      //Bug 18269323 - After a tab is deleted, reorder does not work
      this._setupReorder();
    },

    _addConveyor : function ()
    {
      if (this.options.orientation == "horizontal")
      {
        var tabsId = this.tablist.uniqueId().attr("id");

        var conveyorDiv = this._getTabbarWrapper()
          .wrap("<div>")
          .parent();

        conveyorDiv.uniqueId().attr("id");
        
        //add special class so tabs component can skin the conveyor overflow 
        //indicators to add padding between them and the tabs
        conveyorDiv.addClass("oj-tabs-conveyorbelt");

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
      //Bug 18633679 - Stop using ui-helper-reset in the layout widgets.
      this.tablist = $("<ul>")
        .addClass("oj-tabs-nav oj-helper-clearfix")
        .attr("role", "tablist")
        .prependTo(this.element);

      //list of tabs
      this.tabs = $();
      //list of contents
      this.panels = $();
      //list of titles
      this.titles = $();

      this.element.children(":not(.oj-tabs-nav)").each(
        function (index)
        {
          var header = $(this).find("> :first-child");
          var headerClone = header.clone();
          headerClone
            .addClass("oj-tabs-title")
            .css(
            {
              "display": ""
            })
            .attr(
            {
              "aria-hidden": "false"
            });

          //make ids unique after clone
          self._removePrefixIds(headerClone);
          self.titles = self.titles.add(headerClone);

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

        if (this.options.removable)
        {
          maxTabWidth += _CLOSE_ICON_SIZE;
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
      if (Array.isArray(disabled))
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
      // Prevent users from focusing disabled tabs via click
      this.element.on("mousedown" + this.eventNamespace, ".oj-tabs-nav > li",  
        function (event)
        {
          if ($(this).is(".oj-disabled"))
            event.preventDefault();
        });

/*
        // support: IE <9
        // Preventing the default action in mousedown doesn't prevent IE
        // from focusing the element, so if the anchor gets focused, blur.
        // We don't have to worry about focusing the previously focused
        // element since clicking on a non-focusable element should focus
        // the body anyway.
        .on("focus" + this.eventNamespace, ".oj-tabs-anchor", 
          function ()
          {
            if ($(this).closest("li").is(".oj-disabled"))
              this.blur();
          });
*/

      var events = 
      {
        'keydown' : this._tabKeydown
      };

      var event = this.options.selectOn;
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

      this.element.off("mousedown" + this.eventNamespace);
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
            oldHeader : active, 
            /** @expose */
            oldContent : toHide, 
            /** @expose */
            newHeader : tab, 
            /** @expose */
            newContent : toShow
          },

          deselectData = 
          {
            /** @expose */
            oldHeader : eventData.newHeader,
            /** @expose */
            oldContent : eventData.newContent,
            /** @expose */
            newHeader : eventData.oldHeader,
            /** @expose */
            newContent : eventData.oldContent
          };


      event.preventDefault();

      if (tab.hasClass("oj-disabled") || 

      // can't switch durning an animation
      this.running || 
          // click on active header, 
          (clickedIsActive) || 
          // allow canceling deselect
          ((! this._initialActivate) &&
           (this._trigger("beforeDeselect", event, deselectData) === false)) ||
          // allow canceling select
          (this._trigger("beforeSelect", event, eventData) === false))
      {
        return;
      }

      options.selected = this.tabs.index(tab);

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
          toShow = eventData.newContent, 
          toHide = eventData.oldContent;

      this.running = true;

      function complete()
      {
        self.running = false;

        if (! this._initialActivate)
          self._trigger("afterDeselect", event, eventData);
        self._trigger("afterSelect", event, eventData);

        var oldIndex = -1,
            newIndex = -1;
        if (eventData)
        {
          var tab = eventData.oldHeader;
          if (tab)
            oldIndex = self.tabs.index(tab);
          tab = eventData.newHeader;
          if (tab)
            newIndex = self.tabs.index(tab);
        }
        self._fireOptionChange("selected", oldIndex, newIndex, event ? true : false);
      }

      function show()
      {
        var active = eventData.newHeader.closest("li");
        active.addClass("oj-tabs-active");

        toShow.show();
        complete();
      }

      // start out by hiding, then showing, then completing
      var old = eventData.oldHeader.closest("li");
      old.removeClass("oj-tabs-active");

      toHide.hide();
      show();

      toHide.attr(
      {
        "aria-expanded" : "false", 
        "aria-hidden" : "true"
      });

      eventData.oldHeader.attr("aria-selected", "false");
      // If we're switching tabs, remove the old tab from the tab order.
      // If we're opening from collapsed state, remove the previous tab from the tab order.
      if (toShow.length && toHide.length)
      {
        eventData.oldHeader.attr("tabIndex", "-1");
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

      eventData.newHeader.attr(
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

      this.options.selected = index;

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
//        var removeCueText = this.getTranslatedString("removeCueText");
        var removeCueText = this.options.removeCueText;
        this.tabs.not(".oj-disabled").each(function (index)
        {
          var div = $(this).find("> :first-child");

          //add cue text for removable icon for screen reader users
          var rmId = _ID_PREFIX + "rm_" + index;
          $(this).attr("aria-describedby", rmId);

          $("<a href='#'>")
            .addClass("oj-tabs-icon oj-component-icon oj-clickable-icon " + _CLOSE_ICON)
            .attr(
              {
                "id": rmId,
                "tabIndex" : "-1",
                "aria-label" : removeCueText,
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
      //remove listener
      this._tabMaxWidthApplied = false;
      if (this._hasResizeListener)
      {
        oj.DomUtils.removeResizeListener(this.element[0], $.proxy(this._handleResize, this));
        this._hasResizeListener = false;
        this._originalWidth = undefined;
      }

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
        this.element.removeClass("oj-tabs-vertical oj-component oj-helper-clearfix");
      else
      this.element.removeClass("oj-tabs oj-component ");

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
        self._removePrefixIds(header);

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
        if (Array.isArray(disabled))
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

        if (Array.isArray(disabled))
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
          tab = icon.closest("li"),
          panel = this._getPanelForTab(tab),
          eventData = 
          {
            /** @expose */
            header : tab, 
            /** @expose */
            content : panel
          };

      //trigger before delete event and only delete if it's not cancelled
      if (tab && this._trigger("beforeRemove", event, eventData) !== false)
      {
        var idxRmTab = this.tabs.index(tab);

        //if tab to be removed is selected, select the next enabled tab
        if (tab.hasClass("oj-tabs-active"))
        {
          this.options.selected = this._activateNextTab(idxRmTab);
        }
        else if (idxRmTab < this.options.selected)
        {
          this.options.selected = Math.max(0, this.options.selected - 1)
        }

        //Bug 18269291 - If user closes tab then index for tabs changes and disabled tab becomes enable
        // update indexes of disabled tabs 
        if (Array.isArray(this.options.disabled))
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

        panel.remove();
        tab.remove();

        //fire select event 
        this._initialActivate = this.options.selected;
        this.refresh();

        //set focus on the active
        this.active.focus();

        this._trigger("afterRemove", event, eventData);
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
      if (options.selected == -1) {
        options.selected = this.tabs.length;

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
      if (this.options.reorderable)
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
            else if (self.panels.length > 0)
            {
              self.panels.first().before(mvContent);
            }

            //Bug 18680706 - calling refresh after reordering tabs causes tabs to loose there disabled state 
            //update disabled and active
            var arr  = [];
            tabBar.children(".oj-disabled").each(
              function() {
                arr.push($(this).index());
              }
            );

            self.options.disabled = arr;
            self.options.selected = tabBar.children(".oj-tabs-active").index();

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
        if (this.options.orientation == "vertical" && this.panels)
        {
          this.panels.each(function ()
          {
            $(this).css("margin-left", "")
              .css("min-height", "");
          });
        }
        this.element.addClass("oj-tabs oj-component");
      }

      //TODO: need refresh
      else if (value == "vertical")
      {
        this.element.addClass( "oj-tabs-vertical oj-component oj-helper-clearfix" );
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
      if (elem.id.indexOf(_ID_PREFIX) < 0)
        $(elem).attr("id", _ID_PREFIX + elem.id);
    },

    _removePrefixId : function (elem)
    {
      if (elem.id.indexOf(_ID_PREFIX) == 0)
        $(elem).attr("id", elem.id.substring(_ID_PREFIX.length));
    },

    _removePrefixIds : function (header)
    {
      //remove prefix from ids
      var self = this;
      var ohd = header[0];
      if (ohd.id)
        this._removePrefixId(ohd);
      header.find("[id]").each(function() {
        self._removePrefixId(this);
      });
    },

    /**
     * Return the subcomponent node represented by the documented locator 
     * attribute values.
     *
     * To lookup a title text the locator object should have the following:
     *          subId: 'oj-tabs-title'
     *          index: number
     *
     * To lookup a close icon the locator object should have the following:
     *          subId: 'oj-tabs-close-icon'
     *          index: number       
     *
     * To lookup a panel content the locator object should have the following:
     *          subId: 'oj-tabs-panel'
     *          index: number
     *
     * To lookup the conveyorbelt the locator object should have the following:
     *          subId: 'oj-conveyorbelt'
     *
     * @expose
     * @memberof! oj.ojTabs
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
          index = locator['index'];

      switch (subId)
      {
      case 'oj-conveyorbelt':
        return this.conveyor ? this.conveyor[0] : null;

      case 'oj-tabs-panel':
        return this.panels[index];

      case 'oj-tabs-title':
        return this.titles[index];

      case 'oj-tabs-close-icon':
        return this.tabs.eq(index).find("." + subId)[0];
      }

      // Non-null locators have to be handled by the component subclasses
      return null;
    },

    _getTabsWidth: function()
    {
      return this.element[0].clientWidth;
    },

    _isOverflow: function()
    {
      return (this._originalWidth > this._getTabsWidth());
    },

    _isMaxWidthApplied: function()
    {
      return this._tabMaxWidthApplied;
    },

    _setMaxWidthApplied: function(bval)
    {
      this._tabMaxWidthApplied = bval;
    },

    _getTabMaxWidth: function()
    {
      var max = Math.floor(this._getTabsWidth()  / this.tabs.length);

      if (this.options.removable)
        max -= _CLOSE_ICON_SIZE;

      return max;
    },

    _applyTabMaxWidth: function()
    {
      if (! this._isMaxWidthApplied())
      {
        var maxWidth = this._getTabMaxWidth();

        this.titles.each(function (index)
        {
          $(this)
            .css("max-width", "" + maxWidth + "px")
            .addClass("oj-tabs-title-overflow");
        });

        this._setMaxWidthApplied(true);
        this._logMessage("apply max width");
      }
    },

    _removeTabMaxWidth: function()
    {
      if (this._isMaxWidthApplied())
      {
        this.titles.each(function (index)
        {
          $(this)
            .css("max-width", "")
            .removeClass("oj-tabs-title-overflow");
        });

        this._setMaxWidthApplied(false);
        this._logMessage("remove max width");
      }
    },

    _logMessage: function(msg)
    {
//      console.log(msg);
    },

    /* resize handler */
    _handleResize: function(width, height)
    {
      this._logMessage("width " + width + " ulWidth " + this._originalWidth +
                       " clientWidth " + this._getTabsWidth());

      if (this._isOverflow())
      {
        this._logMessage("overflow");
        this._applyTabMaxWidth();
      }
      else
      {
        this._logMessage("underflow");
        this._removeTabMaxWidth();
      }
    },

    _getTabbarWrapper: function()
    {
      var ulParent = this.tablist.parent();
      if (! ulParent.hasClass("oj-tabs-conveyor"))
      {
        ulParent = this.tablist
            .wrap("<div>")
            .parent()
            .addClass("oj-tabs-conveyor");
      }
      return ulParent;
    },

    _isProgressive: function()
    {
      return this.options.truncation == "auto" ||
        this.options.truncation == "progressive";
    },

    _truncateBeforeOverflow: function()
    {
      var options = this.options;
      if (options.orientation == "horizontal" && this.tabs.length > 0 && 
          this._isProgressive())
      {
        oj.DomUtils.addResizeListener(this.element[0], $.proxy(this._handleResize, this));
        this._hasResizeListener = true;

        //handle initial overflow
        this._originalWidth = this._getTabbarWrapper()[0].scrollWidth;

        if (this._isOverflow())
          this._applyTabMaxWidth();
      }
    },

    /**
     * Fire optionChange event 
     * @param {String} key - 'selected'
     * @param {Object} previousValue 
     * @param {Object} value
     * @param {Boolean} originalEvent  
     *
     * @private
     */
    _fireOptionChange: function(key, previousValue, value, originalEvent) 
    {
      var ui = {
        "option": key,
        "previousValue": previousValue,
        "value": value,
        // (originalEvent is non-null) iff (option change is due to user interaction) 
        // iff (binding should write back the value)
        "optionMetadata": {'writeback': originalEvent ? "shouldWrite" : "shouldNotWrite"}
      };
      this._trigger('optionChange', originalEvent, ui);
    }

  });
}
());


});
