define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtSunburst'], function(oj, $)
{
/**
 * @class 
 * @name oj.ojSunburst
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="sunburstOverview-section">
 *   JET Sunburst Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#sunburstOverview-section"></a>
 * </h3>
 * 
 * <p>Sunburst component for JET. Sunbursts are used to display hierarchical data across two dimensions, represented by 
 * the size and color of the sunburst nodes.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojSunburst',
 *   nodes: [{value: 100, color: "#FFFF00", label: "Total Sales", 
 *            nodes: [{value: 75, color: "#00FF00", label: "Candy"},
 *                    {value: 20, color: "#FFFF00", label: "Fruit"},
 *                    {value: 15, color: "#FF0000", label: "Vegetables"}]}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="sunburstOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#sunburstOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/sunburst.xml">here</a>.</p>
 * 
 * @desc Creates a JET Sunburst.
 * @example <caption>Initialize the Sunburst with no options specified:</caption>
 * $(".selector").ojSunburst();
 * 
 * @example <caption>Initialize the Sunburst with some options:</caption>
 * $(".selector").ojSunburst({nodes: [{value: 75, color: "#00FF00", label: "Candy"}, {value: 20, color: "#FFFF00", label: "Fruit"}, {value: 15, color: "#FF0000", label: "Vegetables"}]});
 * 
 * @example <caption>Initialize the Sunburst via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojSunburst'}">
 */
oj.__registerWidget('oj.ojSunburst', $['oj']['dvtBaseComponent'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered after user rotation is completed.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the start angle of the sunburst, in degrees
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">rotate</code> callback specified:</caption>
     * $(".selector").ojSunburst({
     *   "rotate": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojrotate</code> event:</caption>
     * $(".selector").on("ojrotate", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojSunburst
     * @instance
     */
    rotate : null,
    
    /**
     * Triggered during user rotation of the sunburst.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the start angle of the sunburst, in degrees
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">rotateInput</code> callback specified:</caption>
     * $(".selector").ojSunburst({
     *   "rotateInput": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojrotateinput</code> event:</caption>
     * $(".selector").on("ojrotateinput", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojSunburst
     * @instance
     */
    rotateInput : null,
    
    /**
     * Triggered after data items are selected or de-selected.
     * 
     * @property {Object} ui event payload
     * @property {Array} ui.items an array containing objects describing the selected nodes
     * @property {string} ui.items.id the id of the node
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">select</code> callback specified:</caption>
     * $(".selector").ojSunburst({
     *   "select": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
     * $(".selector").on("ojselect", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojSunburst
     * @instance
     */
    select : null
  },
  
  // Overrides $.oj.dvtBaseComponent
  _createComponent : function(context, callback, callbackObj) {
    return DvtSunburst.newInstance(context, callback, callbackObj);
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-sunburst');
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getChildStyleClasses : function() {
    var styleClasses = this._super();
    // TODO HZHANG fill in the urls after expand/collapse are supported
// 		styleClasses['oj-sunburst-expand-icon'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-expand-icon oj-hover'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-expand-icon oj-active'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-collapse-icon'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-collapse-icon oj-hover'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-collapse-icon oj-active'] = {'path' : '', 'property' : 'CSS_URL'};
    styleClasses['oj-sunburst-attribute-type-text'] = {'path' : 'styleDefaults/_attributeTypeTextStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-sunburst-attribute-value-text'] = {'path' : 'styleDefaults/_attributeValueTextStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    // TODO HZHANG add this once drilling is supported
//    styleClasses['oj-sunburst-current-text'] = {'path' : '', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-sunburst-node'] = {'path' : 'nodeDefaults/labelStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-sunburst-node oj-hover'] = {'path' : 'nodeDefaults/hoverColor', 'property' : 'border-top-color'};
    styleClasses['oj-sunburst-node oj-selected'] = [
      {'path' : 'nodeDefaults/selectedOuterColor', 'property' : 'border-top-color'},
      {'path' : 'nodeDefaults/selectedInnerColor', 'property' : 'border-bottom-color'}
    ];
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getTranslationMap: function() {
    var superMap = this._super();
    var selfMap = {
      'oj-ojSunburst.labelColor': 'DvtSunburstBundle.COLOR',
      'oj-ojSunburst.labelSize': 'DvtSunburstBundle.SIZE'
    };
    
    // Combine with the map from the superclass
    var ret = {};
    for(var key in superMap) { ret[key] = superMap[key]; }
    for(var key in selfMap) { ret[key] = selfMap[key]; }
    
    return ret;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _handleEvent : function(event) {
    var type = event && event.getType ? event.getType() : null, selectedItems, selection, selectedItem, i;
    if(type === DvtSelectionEvent.TYPE) {
      selectedItems = [];
      selection = event.getSelection();
      for(i=0; i<selection.length; i++) {
        selectedItem = {'id': selection[i]};
        selectedItems.push(selectedItem);  
      }
      this._trigger('select', null, {'items': selectedItems});
    }
    else if(type === DvtSunburstRotationEvent.TYPE) {
      // Fired after the rotate interaction is complete
      this._trigger('rotate', null, {'value': event.getStartAngle()});
    }
    else if(type === DvtSunburstRotationEvent.TYPE_INPUT) {
      // Fired during the rotate interaction for each change
      this._trigger('rotateInput', null, {'value': event.getStartAngle()});
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
      
    // Add cursors
    resources['rotateCursor'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/sunburst/rotate.cur');
  }
});
});
