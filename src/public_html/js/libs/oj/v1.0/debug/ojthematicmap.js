define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtThematicMap'], function(oj, $)
{
/**
 * An object used for automation verification of thematic map markers.
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ThematicMapMarker = function(data) {
  this._data = data;
}

/**
 * Returns the color of a thematic map marker
 * @return {String} The marker color
 * @export
 */
oj.ThematicMapMarker.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
}

/**
 * Returns the label of a thematic map marker
 * @return {String} The marker tooltip
 * @export
 */
oj.ThematicMapMarker.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
}

/**
 * Returns the tooltip of a thematic map marker
 * @return {String} The marker tooltip
 * @export
 */
oj.ThematicMapMarker.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
}
/**
 * An object used for automation verification of thematic map areas.
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ThematicMapArea = function(data) {
  this._data = data;
}

/**
 * Returns the color of a thematic map area
 * @returns {String} The area color
 * @export
 */
oj.ThematicMapArea.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
}

/**
 * Returns the tooltip of a thematic map area
 * @returns {String} The area tooltip
 * @export
 */
oj.ThematicMapArea.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
}

/**
 * Returns the label of a thematic map area
 * @returns {String} The area label
 * @export
 */
oj.ThematicMapArea.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
}
/**
 * @class 
 * @name oj.ojThematicMap
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="thematicMapOverview-section">
 *   JET Thematic Map Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#thematicMapOverview-section"></a>
 * </h3>
 * 
 * <p>Thematic Map component for JET. Thematic maps are used to display data corresponding to a geographic location
 * or region, such as election data for a state or sales by territory for a product.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojThematicMap',
 *   basemap: 'usa',
 *   areaLayers: [{
 *     layer: 'states',
 *     areaDataLayer: {
 *       areas: [{color:'#003366', location:'FL'},
 *               {color:'#CC3300', location:'TX'},
 *               {color:'#99CC33', location:'CA'}]
 *     }
 *   }]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="thematicMapOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#thematicMapOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/thematicMap.xml">here</a>.</p>
 * 
 * @desc Creates a JET Thematic Map.
 * @example <caption>Initialize the Thematic Map with no options specified:</caption>
 * $(".selector").ojThematicMap();
 * 
 * @example <caption>Initialize the Thematic Map with some options:</caption>
 * $(".selector").ojThematicMap({basemap: 'usa'});
 * 
 * @example <caption>Initialize the Thematic Map via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojThematicMap'}">
 */
oj.__registerWidget('oj.ojThematicMap', $['oj']['dvtBaseComponent'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj",
  options: {
    /**
     * Triggered after data items are selected or de-selected.
     * 
     * @property {Object} ui event payload
     * @property {Array} ui.items an array containing objects describing the selected data items
     * @property {string} ui.items.dataLayerId the id of the data layer to which the data item belongs
     * @property {string} ui.items.id the id of the data item
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">select</code> callback specified:</caption>
     * $(".selector").ojThematicMap({
     *   "select": function(event){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
     * $(".selector").on("ojselect", function(event){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojThematicMap
     * @instance
     */
    select : null
  },
  
  _loadedBasemaps : [],
  _checkBasemaps : [],
  
  // Overrides $.oj.dvtBaseComponent
  _createComponent : function(context, callback, callbackObj) {
    return DvtThematicMap.newInstance(context, callback, callbackObj);
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-thematicmap');
    return styleClasses;
  },
  
  // Overrides $.oj.dvtBaseComponent
  _getChildStyleClasses : function() {
    var styleClasses = this._super();
	  styleClasses['oj-dvtbase oj-thematicmap'] = {'path' : 'animationDuration', 'property' : 'animation-duration'};
    styleClasses['oj-thematicmap-arealayer'] = [
      {'path' : 'styleDefaults/areaStyle', 'property' : 'CSS_BACKGROUND_PROPERTIES'},
      {'path' : 'styleDefaults/labelStyle', 'property' : 'CSS_TEXT_PROPERTIES'}
    ];
    styleClasses['oj-thematicmap-area'] = {'path' : 'styleDefaults/dataAreaDefaults/borderColor', 'property' : 'border-top-color'};
    styleClasses['oj-thematicmap-area oj-hover'] = {'path' : 'styleDefaults/dataAreaDefaults/hoverColor', 'property' : 'border-top-color'};
    styleClasses['oj-thematicmap-area oj-selected'] = [
      {'path' : 'styleDefaults/dataAreaDefaults/selectedInnerColor', 'property' : 'border-top-color'}, 
      {'path' : 'styleDefaults/dataAreaDefaults/selectedOuterColor', 'property' : 'border-bottom-color'}];
    styleClasses['oj-thematicmap-marker'] = [
      {'path' : 'styleDefaults/dataMarkerDefaults/labelStyle', 'property' : 'CSS_TEXT_PROPERTIES'},
      {'path' : 'styleDefaults/dataMarkerDefaults/color', 'property' : 'background-color'},
      {'path' : 'styleDefaults/dataMarkerDefaults/opacity', 'property' : 'opacity'},
      {'path' : 'styleDefaults/dataMarkerDefaults/borderStyle', 'property' : 'border-style'},
      {'path' : 'styleDefaults/dataMarkerDefaults/borderColor', 'property' : 'border-top-color'},
      {'path' : 'styleDefaults/dataMarkerDefaults/borderWidth', 'property' : 'border-width'}
    ];
    return styleClasses;
  },
   
  // Overrides $.oj.dvtBaseComponent
  _loadResources : function() {
    this._loadBasemap();
  },
  
  // Overrides $.oj.dvtBaseComponent
  _render : function() {
    // do not render until all basemaps are loaded
    for (var i=0; i<this._checkBasemaps.length; i++) {
      if (!this._loadedBasemaps[this._checkBasemaps[i]])
        return;
    }
    this._checkBasemaps = [];
    this._super();
  },
  
  // Load the basemaps and resource bundles 
  _loadBasemap : function() {
    var basemap = this.options['basemap'];
    if (basemap) {
      var locale = oj.Config.getLocale();
      
      // Track basemaps that need to be loaded before rendering
      basemap = basemap.charAt(0).toUpperCase()+basemap.slice(1);
          
      var areaLayers = this.options['areaLayers'];
      // load area layer basemaps
      if (areaLayers) {
        for (var i=0; i<areaLayers.length; i++) {
          var layer = areaLayers[i]['layer'];
          if (layer) {
            layer = layer.charAt(0).toUpperCase()+layer.slice(1);
            this._loadBasemapHelper(basemap, layer, locale);
          }
        }
      }
      
      // load city basemap
      var pointDataLayers = this.options['pointDataLayers'];
      if (pointDataLayers && pointDataLayers.length > 0)
        this._loadBasemapHelper(basemap, 'Cities', locale);
    }
  },
  
  _loadBasemapHelper : function(basemap, layer, locale) {
    var relativeUrl = 'resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap'+basemap+layer+'.js';
    var resolvedUrl = oj.Config.getResourceUrl(relativeUrl);

    var loadedBasemaps = this._loadedBasemaps;
    // check to see if basemap is already loaded
    if (loadedBasemaps[relativeUrl])
      return;

    this._checkBasemaps.push(relativeUrl);
    var thisRef = this;
    $.getScript(resolvedUrl, function( data, textStatus, jqxhr ) {
      loadedBasemaps[relativeUrl] = true;
      thisRef._render();
    });

    if (locale.indexOf('en') === -1) {
      var bundleName = basemap+layer+'Bundle';
      this._loadResourceBundle('resources/internal-deps/dvt/thematicMap/resourceBundles/'+bundleName);
    }
  },
  
  // Overrides $.oj.dvtBaseComponent
  _handleEvent : function(event) {
    var type = event && event.getType ? event.getType() : null, selectedItems, selection, i, selectedItem;
    if(type === DvtSelectionEvent.TYPE) {
      selectedItems = [];
      selection = event.getSelection();
      var dataLayerId = null;//event.getParamValue('clientId');
      for(i=0; i<selection.length; i++) {
        selectedItem = {'id': selection[i], 'dataLayerId': dataLayerId};
        selectedItems.push(selectedItem);  
      }
      this._trigger('select', null, {'items': selectedItems});
    }
    else {
      this._super(event);
    }
  },
  
  /**
   * Test authors should target thematic map sub elements using the following names:
   * dataLayerId:area[id] - An area indexed by the given id in a data layer with id dataLayerId
   * dataLayerId:marker[id] - A marker indexed by the given id in a data layer with id dataLayerId
   * @override
   */
  getNodeBySubId : function(locator) {
    this._super(locator);
  },
  
  /**
   * Returns a ThematicMapArea object for automation testing verification.
   * @param {String} dataLayerId The dataLayer id
   * @param {String} id The area id 
   * @return {Object} The thematic map area with the given id 
   *                             within the given data layer or null if none exists
   */
  getArea : function(dataLayerId, id) {
    var auto = this._component.getAutomation();
    return new oj.ThematicMapArea(auto.getData(dataLayerId, 'area', id));
  },
  
  /**
   * Returns a ThematicMapMarker object for automation testing verification.
   * @param {String} dataLayerId The dataLayer id
   * @param {String} id The marker id 
   * @return {Object} The thematic map marker with the given id 
   *                             within the given data layer or null if none exists
   */
  getMarker : function(dataLayerId, id) {
    var auto = this._component.getAutomation();
    return new oj.ThematicMapMarker(auto.getData(dataLayerId, 'marker', id));
  }
});
});
