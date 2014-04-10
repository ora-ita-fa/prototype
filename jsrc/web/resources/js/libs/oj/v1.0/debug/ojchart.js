define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtChart'], function(oj, $)
{
/**
 * @class 
 * @name oj.ojChart
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="chartOverview-section">
 *   JET Chart Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#chartOverview-section"></a>
 * </h3>
 * 
 * <p>Chart component for JET with support for bar, line, area, combination, pie, scatter, bubble, and funnel
 * charts.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojChart',
 *   type: 'bar',
 *   series: [{name: 'Q1 Sales', items: [50, 60, 20]}],  
 *   groups: ['Phones', 'Tablets', 'Laptops']
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="chartOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#chartOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/chart.xml">here</a>.</p>
 * 
 * @desc Creates a JET Chart.
 * @example <caption>Initialize the Chart with no options specified:</caption>
 * $(".selector").ojChart();
 * 
 * @example <caption>Initialize the Chart with some options:</caption>
 * $(".selector").ojChart({type: 'bar'});
 * 
 * @example <caption>Initialize the Chart via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojChart'}">
 */
oj.__registerWidget('oj.ojChart', $['oj']['dvtBaseComponent'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered when a category of data items is hidden or shown. TODO: This event is in development and may change.
     * 
     * @property {Object} ui event payload
     * @property {Object} ui.category the category that was filtered on
     * @property {string} ui.type specifies whether the category is being filtered 'in' or 'out'
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">categoryFilter</code> callback specified:</caption>
     * $(".selector").ojChart({
     *   "categoryFilter": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojcategoryfilter</code> event:</caption>
     * $(".selector").on("ojcategoryfilter", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojChart
     * @instance
     */
    categoryFilter : null,
    
    /**
     * Triggered when a category of data items is highlighted. TODO: This event is in development and may change.
     * 
     * @property {Object} ui event payload
     * @property {Array} ui.categories the categories that are being highlighted
     * @property {string} ui.type specifies whether highlighting is being turned 'on' or 'off'
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">categoryHighlight</code> callback specified:</caption>
     * $(".selector").ojChart({
     *   "categoryHighlight": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojcategoryhighlight</code> event:</caption>
     * $(".selector").on("ojcategoryhighlight", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojChart
     * @instance
     */
    categoryHighlight : null,
    
    /**
     * Triggered after data items are selected or de-selected.
     * 
     * @property {Object} ui event payload
     * @property {Array} ui.items an array containing objects describing the selected data items
     * @property {string} ui.items.id the id of the data item, if one was specified
     * @property {string} ui.items.group the group of the data item
     * @property {string} ui.items.series the series of the data item
     * @property {string} ui.endGroup the end group of a marquee selection on a chart with categorical axis
     * @property {string} ui.startGroup the start group of a marquee selection on a chart with categorical axis
     * @property {number} ui.xMax the maximum x value of a marquee selection 
     * @property {number} ui.xMin the minimum x value of a marquee selection 
     * @property {number} ui.yMax the maximum y value of a marquee selection 
     * @property {number} ui.yMin the minimum y value of a marquee selection 
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">select</code> callback specified:</caption>
     * $(".selector").ojChart({
     *   "select": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
     * $(".selector").on("ojselect", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojChart
     * @instance
     */
    select : null,
    
    /**
     * Triggered after the viewport is changed due to a zoom or scroll operation.
     * 
     * @property {Object} ui event payload
     * @property {string} ui.endGroup the end group of the new viewport on a chart with categorical axis
     * @property {string} ui.startGroup the start group of the new viewport on a chart with categorical axis
     * @property {number} ui.xMax the maximum x value of the new viewport
     * @property {number} ui.xMin the minimum x value of the new viewport
     * @property {number} ui.yMax the maximum y value of the new viewport
     * @property {number} ui.yMin the minimum y value of the new viewport
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">viewportChange</code> callback specified:</caption>
     * $(".selector").ojChart({
     *   "viewportChange": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojviewportchange</code> event:</caption>
     * $(".selector").on("ojviewportchange", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojChart
     * @instance
     */
    viewportChange : null
  },
  
  // Overrides $.oj.dvtBaseComponent
  _createComponent : function(context, callback, callbackObj) {
    return DvtChart.newInstance(context, callback, callbackObj);
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-chart');
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getChildStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses['oj-chart-footnote'] = {'path' : 'footnote/style', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-chart-subtitle'] = {'path' : 'subtitle/style', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-chart-title'] = {'path' : 'title/style', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-chart-xaxis-tick-label'] = {'path' : 'xAxis/tickLabel/style', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-chart-xaxis-title'] = {'path' : 'xAxis/titleStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-chart-yaxis-tick-label'] = {'path' : 'yAxis/tickLabel/style', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-chart-yaxis-title'] = {'path' : 'yAxis/titleStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-chart-y2axis-tick-label'] = {'path' : 'y2Axis/tickLabel/style', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-chart-y2axis-title'] = {'path' : 'y2Axis/titleStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-legend'] = {'path' : 'legend/textStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-legend-title'] = {'path' : 'legend/titleStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    
    // Images
    styleClasses['oj-chart-pan-icon'] = {'path' : '_resources/panUp', 'property' : 'CSS_URL'};
   	styleClasses['oj-chart-pan-icon oj-active'] = {'path' : '_resources/panDown', 'property' : 'CSS_URL'};
    styleClasses['oj-chart-select-icon'] = {'path' : '_resources/selectUp', 'property' : 'CSS_URL'};
   	styleClasses['oj-chart-select-icon oj-active'] = {'path' : '_resources/selectDown', 'property' : 'CSS_URL'};
    styleClasses['oj-chart-zoom-icon'] = {'path' : '_resources/zoomUp', 'property' : 'CSS_URL'};
   	styleClasses['oj-chart-zoom-icon oj-active'] = {'path' : '_resources/zoomDown', 'property' : 'CSS_URL'};
    return styleClasses;
  },
    
  // Overrides $.oj.dvtBaseComponent
  _getTranslationMap: function() {
    var superMap = this._super();
    var selfMap = {
      'oj-ojDvtCommon.msgNoData': 'DvtChartBundle.EMPTY_TEXT',
      
      'oj-ojChart.labelDefaultGroupName': 'DvtChartBundle.DEFAULT_GROUP_NAME',
      'oj-ojChart.labelSeries': 'DvtChartBundle.LABEL_SERIES',
      'oj-ojChart.labelGroup': 'DvtChartBundle.LABEL_GROUP',
      'oj-ojChart.labelValue': 'DvtChartBundle.LABEL_VALUE',
      'oj-ojChart.labelTargetValue': 'DvtChartBundle.LABEL_TARGET_VALUE',
      'oj-ojChart.labelX': 'DvtChartBundle.LABEL_X',
      'oj-ojChart.labelY': 'DvtChartBundle.LABEL_Y',
      'oj-ojChart.labelZ': 'DvtChartBundle.LABEL_Z',
      'oj-ojChart.labelLow': 'DvtChartBundle.LABEL_LOW',
      'oj-ojChart.labelHigh': 'DvtChartBundle.LABEL_HIGH',
      'oj-ojChart.labelOther': 'DvtChartBundle.LABEL_OTHER',
      'oj-ojChart.tooltipPan': 'DvtChartBundle.PAN',
      'oj-ojChart.tooltipSelect': 'DvtChartBundle.MARQUEE_SELECT',
      'oj-ojChart.tooltipZoom': 'DvtChartBundle.MARQUEE_ZOOM'
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
    if(type === DvtSelectionEvent.TYPE) {
      var selection = event.getSelection();
      if(selection) {
        // Convert the graph selection context into the JET context
        var selectedItems = [];
        for(var i=0; i<selection.length; i++) {
          var selectedItem = {'id': selection[i].getId(),
                              'series': selection[i].getSeries(),
                              'group': selection[i].getGroup()};
          selectedItems.push(selectedItem);  
        }
        
        // TODO PANGUS: ADD THE MARQUEE SELECT CONTEXT
        
        this._trigger('select', null, {'items': selectedItems});
      }
    }
    else if(type === DvtCategoryHideShowEvent.TYPE_HIDE || type === DvtCategoryHideShowEvent.TYPE_SHOW) {
      var filterType = (type === DvtCategoryHideShowEvent.TYPE_HIDE) ? 'out' : 'in';
      this._trigger('categoryFilter', null, {'category': event.getCategory(), 'type': filterType});
    }
    else if(type === DvtCategoryRolloverEvent.TYPE_OVER || type === DvtCategoryRolloverEvent.TYPE_OUT) {
      var highlightType = (type === DvtCategoryRolloverEvent.TYPE_OVER) ? 'on' : 'off';
      this._trigger('categoryHighlight', null, {'categories': [event.getCategory()], 'type': highlightType});
    }
    else {
      this._super(event);
    }
  },
   
  // Overrides $.oj.dvtBaseComponent
  _loadResources : function() {
    // Ensure the resources object exists
    if(this.options['_resources'] == null)
      this.options['_resources'] = {};
      
    var resources = this.options['_resources'];
      
    // Add images
    resources['overviewGrippy'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/chart/drag_horizontal.png');
    
    // Add cursors
    resources['panCursorDown'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/chart/hand-closed.cur');
    resources['panCursorUp'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/chart/hand-open.cur');
  }
});

/**
 * @class 
 * @name oj.ojSparkChart
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="sparkChartOverview-section">
 *   JET Spark Chart Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#sparkChartOverview-section"></a>
 * </h3>
 * 
 * <p>Spark Chart component for JET with support for bar, line, area, and floating bar subtypes.  Spark Charts are
 * designed to visualize the trend of a data set in a compact form factor.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojSparkChart', 
 *   type: 'line', 
 *   items: [5, 8, 2, 7, 0, 9]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="sparkChartOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#sparkChartOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/sparkChart.xml">here</a>.</p>
 * 
 * @desc Creates a JET Spark Chart. 
 * @example <caption>Initialize the Chart with no options specified:</caption>
 * $(".selector").ojSparkChart();
 * 
 * @example <caption>Initialize the Spark Chart with some options:</caption>
 * $(".selector").ojSparkChart({type: 'line', items: [5, 8, 2, 7, 0, 9]});
 * 
 * @example <caption>Initialize the Spark Chart via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojSparkChart'}">
 */
oj.__registerWidget('oj.ojSparkChart', $['oj']['dvtBaseComponent'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  
  // Overrides $.oj.dvtBaseComponent
  _createComponent : function(context, callback, callbackObj) {
    return DvtSparkChart.newInstance(context, callback, callbackObj);
  },  
  
  // Overrides $.oj.dvtBaseComponent
  _getComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-sparkchart');
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
