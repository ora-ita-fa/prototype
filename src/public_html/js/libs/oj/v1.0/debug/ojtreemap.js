define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtTreemap'], function(oj, $)
{
/**
 * @class 
 * @name oj.ojTreemap
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="treemapOverview-section">
 *   JET Treemap Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#treemapOverview-section"></a>
 * </h3>
 * 
 * <p>Treemap component for JET. Treemaps are used to display hierarchical data across two dimensions, represented by 
 * the size and color of the treemap nodes. Treemaps are generally preferred over sunbursts when emphasizing the data
 * for the leaf nodes.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojTreemap',
 *   nodes: [{value: 100, color: "#FFFF00", label: "Total Sales", 
 *            nodes: [{value: 75, color: "#00FF00", label: "Candy"},
 *                    {value: 20, color: "#FFFF00", label: "Fruit"},
 *                    {value: 15, color: "#FF0000", label: "Vegetables"}]}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="treemapOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#treemapOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/treemap.xml">here</a>.</p>
 * 
 * @desc Creates a JET Treemap.
 * @example <caption>Initialize the Treemap with no options specified:</caption>
 * $(".selector").ojTreemap();
 * 
 * @example <caption>Initialize the Treemap with some options:</caption>
 * $(".selector").ojTreemap({nodes: [{value: 75, color: "#00FF00", label: "Candy"}, {value: 20, color: "#FFFF00", label: "Fruit"}, {value: 15, color: "#FF0000", label: "Vegetables"}]});
 * 
 * @example <caption>Initialize the Treemap via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojTreemap'}">
 */
oj.__registerWidget('oj.ojTreemap', $['oj']['dvtBaseComponent'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered when node isolation is turned on or off.
     * 
     * @property {Object} ui event payload
     * @property {Object} ui.item an object with the following properties
     * @property {string} ui.items.id the id of the node
     * @property {string} ui.type specifies whether the node isolation is being turned 'on' or 'off'
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">isolate</code> callback specified:</caption>
     * $(".selector").ojTreemap({
     *   "isolate": function(event){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojisolate</code> event:</caption>
     * $(".selector").on("ojisolate", function(event){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojTreemap
     * @instance
     */
    isolate : null,
    
    /**
     * Triggered after data items are selected or de-selected.
     * 
     * @property {Object} ui event payload
     * @property {Array} ui.items an array containing objects describing the selected nodes
     * @property {string} ui.items.id the id of the node
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">select</code> callback specified:</caption>
     * $(".selector").ojTreemap({
     *   "select": function(event){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
     * $(".selector").on("ojselect", function(event){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojTreemap
     * @instance
     */
    select : null
  },
  
  // Overrides $.oj.dvtBaseComponent
  _createComponent : function(context, callback, callbackObj) {
    return DvtTreemap.newInstance(context, callback, callbackObj);
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-treemap');
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getChildStyleClasses : function() {
  	var styleClasses = this._super();
   	styleClasses['oj-treemap-isolate-icon'] = {'path' : '_resources/isolate', 'property' : 'CSS_URL'};
   	styleClasses['oj-treemap-isolate-icon oj-hover'] = {'path' : '_resources/isolateOver', 'property' : 'CSS_URL'};
   	styleClasses['oj-treemap-isolate-icon oj-active'] = {'path' : '_resources/isolateDown', 'property' : 'CSS_URL'};
    
   	styleClasses['oj-treemap-restore-icon'] = {'path' : '_resources/restore', 'property' : 'CSS_URL'};
   	styleClasses['oj-treemap-restore-icon oj-hover'] = {'path' : '_resources/restoreOver', 'property' : 'CSS_URL'};
   	styleClasses['oj-treemap-restore-icon oj-active'] = {'path' : '_resources/restoreDown', 'property' : 'CSS_URL'};
    
    styleClasses['oj-treemap-attribute-type-text'] = {'path' : 'styleDefaults/_attributeTypeTextStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-treemap-attribute-value-text'] = {'path' : 'styleDefaults/_attributeValueTextStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    // TODO HZHANG add this once drilling is supported
//    styleClasses['oj-treemapCurrentText '] = {'path' : '', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-treemap-node'] = {'path' : 'nodeDefaults/labelStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-treemap-node oj-hover'] = {'path' : 'nodeDefaults/hoverColor', 'property' : 'border-top-color'};
    styleClasses['oj-treemap-node oj-selected'] = [
      {'path' : 'nodeDefaults/selectedOuterColor', 'property' : 'border-top-color'},
      {'path' : 'nodeDefaults/selectedInnerColor', 'property' : 'border-bottom-color'}
    ];
    styleClasses['oj-treemap-node-header'] = [
      {'path' : 'nodeDefaults/header/backgroundColor', 'property' : 'background-color'},
      {'path' : 'nodeDefaults/header/borderColor', 'property' : 'border-top-color'},
      {'path' : 'nodeDefaults/header/labelStyle', 'property' : 'CSS_TEXT_PROPERTIES'}
    ];
    styleClasses['oj-treemap-node-header oj-hover'] = [
      {'path' : 'nodeDefaults/header/hoverBackgroundColor', 'property' : 'background-color'},
      {'path' : 'nodeDefaults/header/hoverOuterColor', 'property' : 'border-top-color'},
      {'path' : 'nodeDefaults/header/hoverInnerColor', 'property' : 'border-bottom-color'}
    ];
    styleClasses['oj-treemap-node-header oj-selected'] = [
      {'path' : 'nodeDefaults/header/selectedBackgroundColor', 'property' : 'background-color'},
      {'path' : 'nodeDefaults/header/selectedOuterColor', 'property' : 'border-top-color'},
      {'path' : 'nodeDefaults/header/selectedInnerColor', 'property' : 'border-bottom-color'}
    ];
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getTranslationMap: function() {
    var superMap = this._super();
    var selfMap = {
      'oj-ojTreemap.labelColor': 'DvtTreemapBundle.COLOR',
      'oj-ojTreemap.labelSize': 'DvtTreemapBundle.SIZE'
    };
    
    // Combine with the map from the superclass
    var ret = {};
    for(var key in superMap) { ret[key] = superMap[key]; }
    for(var key in selfMap) { ret[key] = selfMap[key]; }
    
    return ret;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _handleEvent : function(event) {
    var type = event && event.getType ? event.getType() : null, selectedItems, selection, i, selectedItem,
        isolatedNodes, isolatedNode, isolateType;
    if(type === DvtSelectionEvent.TYPE) {
      selectedItems = [];
      selection = event.getSelection();
      for(i=0; i<selection.length; i++) {
        selectedItem = {'id': selection[i]};
        selectedItems.push(selectedItem);  
      }
      this._trigger('select', null, {'items': selectedItems});
    }
//    else if(type === DvtTreemapIsolateEvent.TYPE) {
//      // Keep track of all isolated nodes
//      isolatedNodes = this.options._isolatedNodes;
//      if(!isolatedNodes) {
//        this.options._isolatedNodes = [];
//        isolatedNodes = this.options._isolatedNodes;
//      }
//    
//      // If event has id, it's an isolate.  If null id, then restore.      
//      isolatedNode = event.getId();
//      if(isolatedNode) {
//        isolateType = "on";
//        isolatedNodes.push(isolatedNode);
//        this.options['isolatedNode'] = isolatedNode;
//      }
//      else {
//        isolateType = "off";
//        isolatedNode = isolatedNodes.pop();
//        this.options['isolatedNode'] = (isolatedNodes.length > 0) ? isolatedNodes[isolatedNodes.length] : null;
//      }
//    
//      this._trigger('isolate', null, {'item': {'id': isolatedNode}, 'type': isolateType});
//    }
    else {
      this._super(event);
    }
  }
});
});
