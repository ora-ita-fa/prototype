define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtLegend'], function(oj, $)
{
/**
 * @class 
 * @name oj.ojLegend
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="legendOverview-section">
 *   JET Legend Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#legendOverview-section"></a>
 * </h3>
 * 
 * <p>Legend component for JET.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojLegend',
 *   orientation: 'vertical',
 *   sections: [{text : "Database"},
 *              {text : "Middleware"},
 *              {text : "Applications"}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="legendOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#legendOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/legend.xml">here</a>.</p>
 * 
 * @desc Creates a JET Legend.
 * @example <caption>Initialize the Legend with no options specified:</caption>
 * $(".selector").ojLegend();
 * 
 * @example <caption>Initialize the Legend with some options:</caption>
 * $(".selector").ojLegend({orientation: 'vertical', sections: [{text : "Database"}, {text : "Middleware"}, {text : "Applications"}});
 * 
 * @example <caption>Initialize the Legend via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojLegend'}">
 */
oj.__registerWidget('oj.ojLegend', $['oj']['dvtBaseComponent'], 
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
     * $(".selector").ojLegend({
     *   "categoryFilter": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojcategoryfilter</code> event:</caption>
     * $(".selector").on("ojcategoryfilter", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojLegend
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
     * $(".selector").ojLegend({
     *   "categoryHighlight": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojcategoryhighlight</code> event:</caption>
     * $(".selector").on("ojcategoryhighlight", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojLegend
     * @instance
     */
    categoryHighlight : null
  },
  
  /**
   * @override
   */
  _CreateComponent : function(context, callback, callbackObj) {
    return DvtLegend.newInstance(context, callback, callbackObj);
  },
  
  /**
   * @override
   */
  _GetChildStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses['oj-legend'] = {'path' : 'textStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-legendTitle'] = {'path' : 'titleStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    // TODO HZHANG: Need to support a default sectionTitleStyle property
    styleClasses['oj-legendSectionTitle'] = {'path' : '_sectionTitleStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    return styleClasses;
  },
  
  /**
   * @override
   */
  _HandleEvent : function(event) {
    var type = event && event.getType ? event.getType() : null, filterType, highlightType;
    if(type === DvtCategoryHideShowEvent.TYPE_HIDE || type === DvtCategoryHideShowEvent.TYPE_SHOW) {
      filterType = (type === DvtCategoryHideShowEvent.TYPE_HIDE) ? 'out' : 'in';
      this._trigger('categoryFilter', null, {'category': event.getCategory(), 'type': filterType});
    }
    else if(type === DvtCategoryRolloverEvent.TYPE_OVER || type === DvtCategoryRolloverEvent.TYPE_OUT) {
      highlightType = (type === DvtCategoryRolloverEvent.TYPE_OVER) ? 'on' : 'off';
      this._trigger('categoryHighlight', null, {'categories': [event.getCategory()], 'type': highlightType});
    }
    else {
      this._super(event);
    }
  }
});
});
