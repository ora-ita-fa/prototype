define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtGauge'], function(oj, $)
{
// Base class for all gauge components
oj.__registerWidget('oj.dvtBaseGauge', $['oj']['dvtBaseComponent'], 
{
  /**
   * Reacts to changes to the 'value' option by triggering a 'optionChange' event if the value changes from its previous 
   * value. Refer to the optionChange event for details.
   * 
   * @param {String|Object|string=} key a single string representing a key or an object representing a group 
   * of options
   * @param {Object=} value of the key
   * @fires oj.editableValue#optionChange
   */
  option : function (key, value)
  {    
    // If this contains an update of the value property, retrieve the previous value
    var previousValue, valueOptionSet = false;
    if (typeof key === "string" && value !== undefined)
    {
      // Explicit key or key/value is passed in.
      if(key === "value") {
        valueOptionSet = true;
        previousValue = this.options['value'];
      }
    }
    else if (typeof key === "object" && key)
    {
      // Object literal of key...values is passed in - ('option', {key: value, key2: value2})
      if (key['value'] !== undefined)
      {
        valueOptionSet = true;
        previousValue = this.options['value'];
      }
    }
    
    // Step 2: call the super to set the option 
    var ret = this._superApply(arguments);
    
    // Step 3: trigger events if needed
    if (valueOptionSet)
    {
      var newValue = this.options['value'];
      
      // trigger a optionChange event only when the newValue is different from the previousValue to 
      // avoid recursion. E.g., setOption() triggers optionChange, which calls ko binding callback, 
      // which then writes to observable. Which then causes binding update to call set option again
      if (!oj.Object.innerEquals(previousValue, newValue))
      {
        this._trigger('optionChange', null, {'option': 'value', 'previousValue': previousValue, 'value': newValue});
      }
    }
    
    return ret;
  },

  // Overrides $.oj.dvtBaseComponent
  _getChildStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses['oj-gauge-metric-label'] = {'path' : 'metricLabel/style', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-gauge-tick-label'] = {'path' : 'tickLabel/style', 'property' : 'CSS_TEXT_PROPERTIES'};
// TODO HZHANG threshold colors needs bug fix 17334522
//    styleClasses['oj-gauge-threshold-index1'] = {'path' : '', 'type' : 'color'};
//    styleClasses['oj-gauge-threshold-index2'] = {'path' : '', 'type' : 'color'};
//    styleClasses['oj-gauge-threshold-index3'] = {'path' : '', 'type' : 'color'};
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getTranslationMap: function() {
    var superMap = this._super();
    var selfMap = {
      'oj-ojDvtCommon.msgNoData': 'DvtGaugeBundle.EMPTY_TEXT'
    };
    
    // Combine with the map from the superclass
    var ret = {};
    for(var key in superMap) { ret[key] = superMap[key]; }
    for(var key in selfMap) { ret[key] = selfMap[key]; }
    
    return ret;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _handleEvent : function(event) {
    var type = event && event.getType ? event.getType() : null;
    if(type === DvtValueChangeEvent.TYPE) {
      // Fired after the value change interaction is complete
      this.option('value', event.getNewValue());
    }
    else if(type === DvtValueChangeEvent.TYPE_INPUT) {
      // Fired during the value change interaction for each change
      this._trigger('input', null, {'value': event.getNewValue()});
    }
    else {
      this._super(event);
    }
  }
});

/**
 * @class 
 * @name oj.ojDialGauge
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="dialGaugeOverview-section">
 *   JET Dial Gauge Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#dialGaugeOverview-section"></a>
 * </h3>
 * 
 * <p>Dial gauge component for JET.  Dial gauges are used to display a metric value in relation to the minimum and 
 * maximum possible values for that metric.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojDialGauge',
 *   value: 63, min: 0, max: 100, 
 *   metricLabel: {rendered: 'on'}
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="dialGaugeOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#dialGaugeOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/dialGauge.xml">here</a>.</p>
 * 
 * @desc Creates a JET Dial Gauge.
 * @example <caption>Initialize the Dial Gauge with no options specified:</caption>
 * $(".selector").ojDialGauge();
 * 
 * @example <caption>Initialize the Dial Gauge with some options:</caption>
 * $(".selector").ojDialGauge({value: 63, min: 0, max: 100, metricLabel: {rendered: 'on'}});
 * 
 * @example <caption>Initialize the Dial Gauge via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojDialGauge'}">
 */
oj.__registerWidget('oj.ojDialGauge', $['oj']['dvtBaseGauge'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered during a value change gesture on mouse or touch move.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the value of the gauge
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">input</code> callback specified:</caption>
     * $(".selector").ojDialGauge({
     *   "input": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojinput</code> event:</caption>
     * $(".selector").on("ojinput", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojDialGauge
     * @instance
     */
    input : null,
    
    /**
     * Triggered when the following component options change. 
     * <ul>
     * <li><strong>value</strong>: when the component's value changes. </li>
     * </ul>
     * 
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "value"
     * @property {Object} data.previousValue an Object holding the previous value of the option
     * @property {Object} data.value an Object holding the current value of the option
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">optionChange</code> callback:</caption>
     * $(".selector").ojDialGauge({
     *   'optionChange': function (event, data) {} 
     * });
     * 
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojDialGauge
     * @instance
     */
    optionChange: null
  },
  
  // Overrides $.oj.dvtBaseComponent
  _createComponent : function(context, callback, callbackObj) {
    return DvtDialGauge.newInstance(context, callback, callbackObj);
  },

  // Overrides $.oj.dvtBaseComponent
  _getComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-dialgauge');
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _render : function() {
    // Display the title of the surrounding div as the tooltip
    this.options['shortDesc'] = this.element.attr('title');
  
    // Call the super to render
    this._super();
  }
});

/**
 * @class 
 * @name oj.ojLedGauge
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="ledGaugeOverview-section">
 *   JET LED Gauge Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#ledGaugeOverview-section"></a>
 * </h3>
 * 
 * <p>LED gauge component for JET.  LED gauges are used to highlight a specific metric value in relation to its 
 * thresholds.<p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojLedGauge',
 *   value: 63, min: 0, max: 100, 
 *   thresholds: [{max: 33}, {max: 67}, {}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="ledGaugeOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#ledGaugeOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/ledGauge.xml">here</a>.</p>
 * 
 * @desc Creates a JET LED Gauge.
 * @example <caption>Initialize the LED Gauge with no options specified:</caption>
 * $(".selector").ojLedGauge();
 * 
 * @example <caption>Initialize the LED Gauge with some options:</caption>
 * $(".selector").ojLedGauge({value: 63, min: 0, max: 100, thresholds: [{max: 33}, {max: 67}, {}]});
 * 
 * @example <caption>Initialize the LED Gauge via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojLedGauge'}">
 */
oj.__registerWidget('oj.ojLedGauge', $['oj']['dvtBaseGauge'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered when the following component options change. 
     * <ul>
     * <li><strong>value</strong>: when the component's value changes. </li>
     * </ul>
     * 
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "value"
     * @property {Object} data.previousValue an Object holding the previous value of the option
     * @property {Object} data.value an Object holding the current value of the option
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">optionChange</code> callback:</caption>
     * $(".selector").ojLedGauge({
     *   'optionChange': function (event, data) {} 
     * });
     * 
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojLedGauge
     * @instance
     */
    optionChange: null
  },
  
  // Overrides $.oj.dvtBaseComponent
  _createComponent : function(context, callback, callbackObj) {
    return DvtLedGauge.newInstance(context, callback, callbackObj);
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-ledgauge');
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _render : function() {
    // Display the title of the surrounding div as the tooltip
    this.options['shortDesc'] = this.element.attr('title');
  
    // Call the super to render
    this._super();
  }
});

/**
 * @class 
 * @name oj.ojRatingGauge
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="ratingGaugeOverview-section">
 *   JET Rating Gauge Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#ratingGaugeOverview-section"></a>
 * </h3>
 * 
 * <p>Rating gauge component for JET.  Rating gauges are typically used to display or accept user feedback on a product
 * or service.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {component: 'ojRatingGauge', value: 4}"/>
 * </code>
 * </pre>
 * 
 * <h3 id="ratingGaugeOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#ratingGaugeOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/ratingGauge.xml">here</a>.</p>
 * 
 * @desc Creates a JET Rating Gauge.
 * @example <caption>Initialize the Rating Gauge with no options specified:</caption>
 * $(".selector").ojRatingGauge();
 * 
 * @example <caption>Initialize the Rating Gauge with some options:</caption>
 * $(".selector").ojRatingGauge({value: 4});
 * 
 * @example <caption>Initialize the Rating Gauge via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojRatingGauge'}">
 */
oj.__registerWidget('oj.ojRatingGauge', $['oj']['dvtBaseGauge'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered during a value change gesture on mouse or touch move.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the value of the gauge
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">input</code> callback specified:</caption>
     * $(".selector").ojRatingGauge({
     *   "input": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojinput</code> event:</caption>
     * $(".selector").on("ojinput", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojRatingGauge
     * @instance
     */
    input : null,
    
    /**
     * Triggered when the following component options change. 
     * <ul>
     * <li><strong>value</strong>: when the component's value changes. </li>
     * </ul>
     * 
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "value"
     * @property {Object} data.previousValue an Object holding the previous value of the option
     * @property {Object} data.value an Object holding the current value of the option
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">optionChange</code> callback:</caption>
     * $(".selector").ojRatingGauge({
     *   'optionChange': function (event, data) {} 
     * });
     * 
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojRatingGauge
     * @instance
     */
    optionChange: null
  },
  
  // Overrides $.oj.dvtBaseComponent
  _createComponent : function(context, callback, callbackObj) {
    return DvtRatingGauge.newInstance(context, callback, callbackObj);
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-ratinggauge');
    //TODO HZHANG Add style classes for rating gauge selected/hover/unselected/changed
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _render : function() {
    // Display the title of the surrounding div as the tooltip
    this.options['shortDesc'] = this.element.attr('title');
  
    // Call the super to render
    this._super();
  }
});

/**
 * @class 
 * @name oj.ojStatusMeterGauge
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="statusMeterGaugeOverview-section">
 *   JET Status Meter Gauge Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#statusMeterGaugeOverview-section"></a>
 * </h3>
 * 
 * <p>Status meter gauge component for JET, supporting horizontal and circular status meters.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojStatusMeterGauge',
 *   value: 63, min: 0, max: 100, 
 *   thresholds: [{max: 33}, {max: 67}, {}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="statusMeterGaugeOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#statusMeterGaugeOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/statusMeterGauge.xml">here</a>.</p>
 * 
 * @desc Creates a JET Status Meter Gauge.
 * @example <caption>Initialize the Status Meter Gauge with no options specified:</caption>
 * $(".selector").ojStatusMeterGauge();
 * 
 * @example <caption>Initialize the Status Meter Gauge with some options:</caption>
 * $(".selector").ojStatusMeterGauge({value: 63, min: 0, max: 100, thresholds: [{max: 33}, {max: 67}, {}]});
 * 
 * @example <caption>Initialize the Status Meter Gauge via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojStatusMeterGauge'}">
 */
oj.__registerWidget('oj.ojStatusMeterGauge', $['oj']['dvtBaseGauge'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered during a value change gesture on mouse or touch move.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the value of the gauge
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">input</code> callback specified:</caption>
     * $(".selector").ojStatusMeterGauge({
     *   "input": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojinput</code> event:</caption>
     * $(".selector").on("ojinput", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojStatusMeterGauge
     * @instance
     */
    input : null,
    
    /**
     * Triggered when the following component options change. 
     * <ul>
     * <li><strong>value</strong>: when the component's value changes. </li>
     * </ul>
     * 
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "value"
     * @property {Object} data.previousValue an Object holding the previous value of the option
     * @property {Object} data.value an Object holding the current value of the option
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">optionChange</code> callback:</caption>
     * $(".selector").ojStatusMeterGauge({
     *   'optionChange': function (event, data) {} 
     * });
     * 
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojStatusMeterGauge
     * @instance
     */
    optionChange: null
  },
  
  // Overrides $.oj.dvtBaseComponent
  _createComponent : function(context, callback, callbackObj) {
    return DvtStatusMeterGauge.newInstance(context, callback, callbackObj);
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-statusmetergauge');
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _render : function() {
    // Display the title of the surrounding div as the tooltip
    this.options['shortDesc'] = this.element.attr('title');
  
    // Call the super to render
    this._super();
  }
});
});
