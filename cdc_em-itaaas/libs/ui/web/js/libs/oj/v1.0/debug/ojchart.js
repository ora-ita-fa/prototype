define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtChart'], function(oj, $)
{
/**
 * An object used for automation verification of chart axes
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ChartAxis = function(data) {
  this._data = data;
};

/**
 * Returns the title of an axis
 * @return {String} The axis title
 * @export
 */
oj.ChartAxis.prototype.getTitle = function() {
  return this._data ? this._data['title'] : null;
};

/**
 * Returns the bounds of an axis
 * @return {Object} An object containing the x, y coordinates and width and height of the axis
 * @export
 */
oj.ChartAxis.prototype.getBounds = function() {
  return this._data ? this._data['bounds'] : null;
};

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
  
  /**
   * @override
   */
  _CreateComponent : function(context, callback, callbackObj) {
    return DvtChart.newInstance(context, callback, callbackObj);
  },
  
  /**
   * @override
   */
  _GetComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-chart');
    return styleClasses;
  },
  
  /**
   * @override
   */
  _GetChildStyleClasses : function() {
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
    
  /**
   * @override
   */
  _GetTranslationMap: function() {
    var superMap = this._super();   
    var selfMap = {
      'DvtChartBundle.DEFAULT_GROUP_NAME': this._GetTranslatedResource('labelDefaultGroupName', ['groupName']),
      'DvtChartBundle.EMPTY_TEXT': this._GetTranslatedResource('msgNoData'),
      'DvtChartBundle.LABEL_SERIES': this._GetTranslatedResource('labelSeries', ['seriesName']),
      'DvtChartBundle.LABEL_GROUP': this._GetTranslatedResource('labelGroup', ['groupName']),
      'DvtChartBundle.LABEL_VALUE': this._GetTranslatedResource('labelValue', ['value']),
      'DvtChartBundle.LABEL_TARGET_VALUE': this._GetTranslatedResource('labelTargetValue', ['targetValue']),
      'DvtChartBundle.LABEL_X': this._GetTranslatedResource('labelX', ['x']),
      'DvtChartBundle.LABEL_Y': this._GetTranslatedResource('labelY', ['y']),
      'DvtChartBundle.LABEL_Z': this._GetTranslatedResource('labelZ', ['z']),
      'DvtChartBundle.LABEL_LOW': this._GetTranslatedResource('labelLow', ['low']),
      'DvtChartBundle.LABEL_HIGH': this._GetTranslatedResource('labelHigh', ['high']),
      'DvtChartBundle.LABEL_OTHER': this._GetTranslatedResource('labelOther'),
      'DvtChartBundle.PAN': this._GetTranslatedResource('tooltipPan'),
      'DvtChartBundle.MARQUEE_SELECT': this._GetTranslatedResource('tooltipSelect'),
      'DvtChartBundle.MARQUEE_ZOOM': this._GetTranslatedResource('tooltipZoom')
    }
    
    // TODO Workaround for inheritance of resource from parent not working
    selfMap['DvtChartBundle.EMPTY_TEXT'] = oj.Translations.getResource('oj-dvtBaseComponent.msgNoData');
    
    // Combine with the map from the superclass
    var ret = {};
    for(var key in superMap) { ret[key] = superMap[key]; }
    for(var key in selfMap) { ret[key] = selfMap[key]; }
    
    return ret;
  },
  
  /**
   * @override
   */
  _HandleEvent : function(event) {
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
   
  /**
   * @override
   */
  _LoadResources : function() {
    // Ensure the resources object exists
    if(this.options['_resources'] == null)
      this.options['_resources'] = {};
      
    var resources = this.options['_resources'];
      
    // Add images
    resources['overviewGrippy'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/chart/drag_horizontal.png');
    
    // Add cursors
    resources['panCursorDown'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/chart/hand-closed.cur');
    resources['panCursorUp'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/chart/hand-open.cur');
  },
  
   /**
   * Test authors should target chart sub elements using the following locators:
   * dataItem[seriesIndex][groupIndex] - A data item indexed by its series index and group index. 
   *                                        [groupIndex] is not required for pie and funnel chart types
   * series[seriesIndex] - A legend item that represents the series with the given seriesIndex
   * group[groupIndex] - A categorical axis label that represents the group with the given groupIndex 
   * @override
   * @expose
   */
  getNodeBySubId : function(locator) {
    return this._super(locator);
  },
  
  /**
   * Returns the locator attribute values represented by the subcomponent node.
   * @param {Element} node The subcomponent node used by the component to lookup the subId string
   * @return {Object} An Object containing at minimum a subId property
   * whose value is a string and allows the component to
   * look up the subcomponent associated with that string.  Valide chart subIds include:
   * dataItem[seriesIndex][groupIndex] - A data item indexed by its series index and group index. 
   *                                        [groupIndex] is not required for pie and funnel chart types
   * series[seriesIndex] - A legend item that represents the series with the given seriesIndex
   * group[groupIndex] - A categorical axis label that represents the group with the given groupIndex 
   * @expose
   */
  getSubIdByNode:function(node) {
    return this._super(node);  
  }, 
  
  /**
   * Returns the chart title. 
   * @return {String} The chart title
   * @expose
   */
  getTitle: function() {
    var auto = this._component.getAutomation();
    return auto.getTitle();
  },
  
  /**
   * Returns the group corresponding to the given index
   * @param {String} groupIndex the group index
   * @return {String} The group name corresponding to the given group index
   * @expose
   */
  getGroup: function(groupIndex) {
    var auto = this._component.getAutomation();
    return auto.getGroup(groupIndex);
  },
  
  /**
   * Returns the series corresponding to the given index
   * @param {String} seriesIndex the series index
   * @return {String} The series name corresponding to the given series index
   * @expose
   */
  getSeries: function(seriesIndex) {
    var auto = this._component.getAutomation();
    return auto.getSeries(seriesIndex);
  },
  
  /**
   * Returns number of groups in the chart data
   * @return {Number} The number of groups
   * @expose
   */
  getGroupCount: function() {
    var auto = this._component.getAutomation();
    return auto.getGroupCount();
  },
  
  /**
   * Returns number of series in the chart data
   * @return {Number} The number of series
   * @expose
   */
  getSeriesCount: function() {
    var auto = this._component.getAutomation();
    return auto.getSeriesCount();
  },
  
  /**
   * Returns a ChartDataItem object for automation testing verification.
   * @param {String} seriesIndex The series index
   * @param {String} groupIndex The group index
   * @return {Object} The chart data item with the given series index and group index 
   *                             or null if none exists
   * @expose
   */
  getDataItem : function(seriesIndex, groupIndex) {
    var auto = this._component.getAutomation();
    return new oj.ChartDataItem(auto.getDataItem(seriesIndex, groupIndex));
  },
  
  /**
   * Returns a ChartLegend object for automation testing verification.
   * @return {Object} The legend for this chart
   * @expose
   */
  getLegend : function() {
    var auto = this._component.getAutomation();
    return new oj.ChartLegend(auto.getLegend());
  },
  
  /**
   * Returns a ChartPlotArea object for automation testing verification.
   * @return {Object} The plot area for this chart
   * @expose
   */
  getPlotArea : function() {
    var auto = this._component.getAutomation();
    return new oj.ChartPlotArea(auto.getPlotArea());
  },
  
  /**
   * Returns a ChartAxis object for automation testing verification.
   * @return {Object} The xAxis for this chart or null if it doesn't exist
   * @expose
   */
  getXAxis : function() {
    var auto = this._component.getAutomation();
    return new oj.ChartAxis(auto.getXAxis());
  },
  
  /**
   * Returns a ChartAxis object for automation testing verification.
   * @return {Object} The yAxis for this chart or null if it doesn't exist
   * @expose
   */
  getYAxis : function() {
    var auto = this._component.getAutomation();
    return new oj.ChartAxis(auto.getYAxis());
  },
  
  /**
   * Returns a ChartAxis object for automation testing verification.
   * @return {Object} The y2Axis for this chart or null if it doesn't exist
   * @expose
   */
  getY2Axis : function() {
    var auto = this._component.getAutomation();
    return new oj.ChartAxis(auto.getY2Axis());
  }
});
/**
 * An object used for automation verification of a chart plot area
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ChartPlotArea = function(data) {
  this._data = data;
};

/**
 * Returns the bounds of the plot area
 * @return {Object} An object containing the x, y coordinates and width and height of the plotarea
 * @export
 */
oj.ChartPlotArea.prototype.getBounds = function() {
  return this._data ? this._data['bounds'] : null;
};

/**
 * An object used for automation verification of a chart legend
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ChartLegend = function(data) {
  this._data = data;
};

/**
 * Returns the title of a legend
 * @return {String} The legend title
 * @export
 */
oj.ChartLegend.prototype.getTitle = function() {
  return this._data ? this._data['title'] : null;
};

/**
 * Returns the bounds of a legend
 * @return {Object} An object containing the x, y coordinates and width and height of the legend
 * @export
 */
oj.ChartLegend.prototype.getBounds = function() {
  return this._data ? this._data['bounds'] : null;
};

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
  
  /**
   * @override
   */
  _CreateComponent : function(context, callback, callbackObj) {
    return DvtSparkChart.newInstance(context, callback, callbackObj);
  },  
  
  /**
   * @override
   */
  _GetComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-sparkchart');
    return styleClasses;
  },
  
  /**
   * @override
   */
  _Render : function() {
    // Display the title of the surrounding div as the tooltip
    this.options['shortDesc'] = this.element.attr('title');
  
    // Call the super to render
    this._super();
  }
});
/**
 * An object used for automation verification of chart data items
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ChartDataItem = function(data) {
  this._data = data;
};

/**
 * Returns the group of a chart data item
 * @returns {String} The data item group
 * @export
 */
oj.ChartDataItem.prototype.getGroup = function() {
  return this._data ? this._data['group'] : null;
};

/**
 * Returns the series of a chart data item
 * @returns {String} The data item series
 * @export
 */
oj.ChartDataItem.prototype.getSeries = function() {
  return this._data ? this._data['series'] : null;
};

/**
 * Returns the border color of a chart data item
 * @returns {String} The data item border color
 * @export
 */
oj.ChartDataItem.prototype.getBorderColor = function() {
  return this._data ? this._data['borderColor'] : null;
};

/**
 * Returns the color of a chart data item
 * @returns {String} The data item color
 * @export
 */
oj.ChartDataItem.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
};

/**
 * Returns the label of a chart data item
 * @returns {String} The data item label
 * @export
 */
oj.ChartDataItem.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
};

/**
 * Returns the value of a chart data item.
 * @returns {Number} The data item value
 * @export
 */
oj.ChartDataItem.prototype.getValue = function() {
  return this._data ? this._data['value'] : null;
};

/**
 * Returns the target value of a chart data item. Only applies to funnel chart types.
 * @returns {Number} The data item target value
 * @export
 */
oj.ChartDataItem.prototype.getTargetValue = function() {
  return this._data ? this._data['targetValue'] : null;
};

/**
 * Returns the tooltip of a chart data item.
 * @returns {String} The data item tooltip
 * @export
 */
oj.ChartDataItem.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
};

/**
 * Returns the x value of a chart data item.
 * @returns {Number} The data item x value
 * @export
 */
oj.ChartDataItem.prototype.getX = function() {
  return this._data ? this._data['x'] : null;
};

/**
 * Returns the y value of a chart data item.
 * @returns {Number} The data item y value
 * @export
 */
oj.ChartDataItem.prototype.getY = function() {
  return this._data ? this._data['y'] : null;
};

/**
 * Returns the z value of a chart data item.
 * @returns {Number} The data item z value
 * @export
 */
oj.ChartDataItem.prototype.getZ = function() {
  return this._data ? this._data['z'] : null;
};

/**
 * Returns whether or not the data item is selected
 * @returns {Boolean} The data item selection state
 * @export
 */
oj.ChartDataItem.prototype.getSelected = function() {
  return this._data ? this._data['selected'] : null;
};
});
