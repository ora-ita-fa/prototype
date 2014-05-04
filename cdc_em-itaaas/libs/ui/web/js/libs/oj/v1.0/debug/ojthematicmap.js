define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtThematicMap'], function(oj, $)
{
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
     *   "select": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
     * $(".selector").on("ojselect", function(event, ui){});
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
  _supportedLocales : ['ar','cs','da','de','el','es','fi','fr','hu','it','iw','ja','ko','nl','no','pl','pt','pt_BR','ro','ru','sk','sv','th','tr','zh_CN','zh_TW'],
 
  
  /**
   * @override
   */
  _CreateComponent : function(context, callback, callbackObj) {
    return DvtThematicMap.newInstance(context, callback, callbackObj);
  },
  
  /**
   * @override
   */
  _GetComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-thematicmap');
    return styleClasses;
  },
  
  /**
   * @override
   */
  _GetChildStyleClasses : function() {
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
   
  /**
   * @override
   */
  _LoadResources : function() {
    this._loadBasemap();
  },
  
  /**
   * @override
   */
  _Render : function() {
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
  
  /**
   * Utility function for loading resource bundles by url.
   * @param {string} url The url of the resource to load
   * @private
   */
  _loadResourceByUrl : function(url) {
    // resource is already loaded or function tried to load this resource but failed
    if(this._loadedBasemaps[url])
      return;
    
    var resolvedUrl = oj.Config.getResourceUrl(url);
    var thisRef = this;
    var loadedBundles = this._loadedBasemaps;
    $.getScript(resolvedUrl, function( data, textStatus, jqxhr ) {
      loadedBundles[url] = true;
      thisRef._Render();
    });
  },
  
  _loadBasemapHelper : function(basemap, layer, locale) {
    var relativeUrl = 'resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap'+basemap+layer+'.js';
    this._checkBasemaps.push(relativeUrl);

    if (locale.indexOf('en') === -1) {
      // split locale by subtags and try to load resource bundle that satisfies
      var splitLocale = locale.split('_');
      var localeList = [];
      for (var j = 0; j < splitLocale.length; j++) {
        var tempLocale = '';
        for (var k = 0; k < (j + 1); k++) {
          if (k != 0)
            tempLocale += '_';
          tempLocale += splitLocale[k];
        }
        localeList.push(tempLocale)
      }

      var bundleName = 'resources/internal-deps/dvt/thematicMap/resourceBundles/'+basemap+layer+'Bundle';
      // Go thru list of supported DVT languages
      for (var i = localeList.length - 1; i >= 0; i++) {
        if (this._supportedLocales.indexOf(localeList[i]) !== -1) {
          var bundleUrl = bundleName + "_" + localeList[i] + ".js";
//          this._checkBasemaps.push(bundleUrl);
          this._loadResourceByUrl(bundleUrl);
          break;
        }
      }
    }
    
    this._loadResourceByUrl(relativeUrl);
  },
  
  /**
   * @override
   */
  _HandleEvent : function(event) {
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
    return this._super(locator);
  },
  
  /**
   * Thematic map supports the following ids for sub elements:
   * dataLayerId:area[id] - An area indexed by the given id in a data layer with id dataLayerId
   * dataLayerId:marker[id] - A marker indexed by the given id in a data layer with id dataLayerId
   * @override
   */
  getSubIdByNode : function(locator) {
    return this._super(locator);
  },
  
  /**
   * Returns a ThematicMapArea object for automation testing verification.
   * @param {String} dataLayerId The dataLayer id
   * @param {String} id The area id 
   * @return {Object} The thematic map area with the given id 
   *                             within the given data layer or null if none exists
   * @expose
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
   * @expose
   */
  getMarker : function(dataLayerId, id) {
    var auto = this._component.getAutomation();
    return new oj.ThematicMapMarker(auto.getData(dataLayerId, 'marker', id));
  }
});
/**
 * An object used for automation verification of thematic map markers.
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ThematicMapMarker = function(data) {
  this._data = data;
};

/**
 * Returns the color of a thematic map marker
 * @return {String} The marker color
 * @export
 */
oj.ThematicMapMarker.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
};

/**
 * Returns the label of a thematic map marker
 * @return {String} The marker tooltip
 * @export
 */
oj.ThematicMapMarker.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
};

/**
 * Returns the tooltip of a thematic map marker
 * @return {String} The marker tooltip
 * @export
 */
oj.ThematicMapMarker.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
};
/**
 * An object used for automation verification of thematic map areas.
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ThematicMapArea = function(data) {
  this._data = data;
};

/**
 * Returns the color of a thematic map area
 * @returns {String} The area color
 * @export
 */
oj.ThematicMapArea.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
};

/**
 * Returns the tooltip of a thematic map area
 * @returns {String} The area tooltip
 * @export
 */
oj.ThematicMapArea.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
};

/**
 * Returns the label of a thematic map area
 * @returns {String} The area label
 * @export
 */
oj.ThematicMapArea.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
};
});
