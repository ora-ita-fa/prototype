define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$12$$, $$$$12$$) {
  $oj$$12$$.$ThematicMapMarker$ = $JSCompiler_set$$("$_data$");
  $goog$exportPath_$$("ThematicMapMarker", $oj$$12$$.$ThematicMapMarker$, $oj$$12$$);
  $oj$$12$$.$ThematicMapMarker$.prototype.$getColor$ = function $$oj$$12$$$$ThematicMapMarker$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getColor", {$getColor$:$oj$$12$$.$ThematicMapMarker$.prototype.$getColor$});
  $oj$$12$$.$ThematicMapMarker$.prototype.$getTooltip$ = function $$oj$$12$$$$ThematicMapMarker$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getTooltip", {$getTooltip$:$oj$$12$$.$ThematicMapMarker$.prototype.$getTooltip$});
  $oj$$12$$.$ThematicMapMarker$.prototype.$getLabel$ = function $$oj$$12$$$$ThematicMapMarker$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getLabel", {$getLabel$:$oj$$12$$.$ThematicMapMarker$.prototype.$getLabel$});
  $oj$$12$$.$ThematicMapArea$ = $JSCompiler_set$$("$_data$");
  $goog$exportPath_$$("ThematicMapArea", $oj$$12$$.$ThematicMapArea$, $oj$$12$$);
  $oj$$12$$.$ThematicMapArea$.prototype.$getColor$ = function $$oj$$12$$$$ThematicMapArea$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getColor", {$getColor$:$oj$$12$$.$ThematicMapArea$.prototype.$getColor$});
  $oj$$12$$.$ThematicMapArea$.prototype.$getTooltip$ = function $$oj$$12$$$$ThematicMapArea$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getTooltip", {$getTooltip$:$oj$$12$$.$ThematicMapArea$.prototype.$getTooltip$});
  $oj$$12$$.$ThematicMapArea$.prototype.$getLabel$ = function $$oj$$12$$$$ThematicMapArea$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getLabel", {$getLabel$:$oj$$12$$.$ThematicMapArea$.prototype.$getLabel$});
  $oj$$12$$.$__registerWidget$("oj.ojThematicMap", $$$$12$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{select:null}, $_loadedBasemaps$:[], $_checkBasemaps$:[], $_createComponent$:function($context$$38$$, $callback$$84$$, $callbackObj$$2$$) {
    return DvtThematicMap.newInstance($context$$38$$, $callback$$84$$, $callbackObj$$2$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$3$$ = this._super();
    $styleClasses$$3$$.push("oj-thematicmap");
    return $styleClasses$$3$$
  }, $_getChildStyleClasses$:function() {
    var $styleClasses$$4$$ = this._super();
    $styleClasses$$4$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$4$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$4$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$4$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$4$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$4$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderStyle", property:"border-style"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}, {path:"styleDefaults/dataMarkerDefaults/borderWidth", 
    property:"border-width"}];
    return $styleClasses$$4$$
  }, $_loadResources$:function() {
    this.$_loadBasemap$()
  }, $_render$:function() {
    for(var $i$$192$$ = 0;$i$$192$$ < this.$_checkBasemaps$.length;$i$$192$$++) {
      if(!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$192$$]]) {
        return
      }
    }
    this.$_checkBasemaps$ = [];
    this._super()
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if($basemap$$) {
      var $locale$$23$$ = $oj$$12$$.$Config$.$getLocale$(), $basemap$$ = $basemap$$.charAt(0).toUpperCase() + $basemap$$.slice(1), $areaLayers_pointDataLayers$$ = this.options.areaLayers;
      if($areaLayers_pointDataLayers$$) {
        for(var $i$$193$$ = 0;$i$$193$$ < $areaLayers_pointDataLayers$$.length;$i$$193$$++) {
          var $layer$$ = $areaLayers_pointDataLayers$$[$i$$193$$].layer;
          $layer$$ && ($layer$$ = $layer$$.charAt(0).toUpperCase() + $layer$$.slice(1), this.$_loadBasemapHelper$($basemap$$, $layer$$, $locale$$23$$))
        }
      }
      ($areaLayers_pointDataLayers$$ = this.options.pointDataLayers) && 0 < $areaLayers_pointDataLayers$$.length && this.$_loadBasemapHelper$($basemap$$, "Cities", $locale$$23$$)
    }
  }, $_loadBasemapHelper$:function($basemap$$1$$, $layer$$1$$, $locale$$24$$) {
    var $relativeUrl$$ = "resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap" + $basemap$$1$$ + $layer$$1$$ + ".js", $resolvedUrl$$1$$ = $oj$$12$$.$Config$.$getResourceUrl$($relativeUrl$$), $loadedBasemaps$$ = this.$_loadedBasemaps$;
    if(!$loadedBasemaps$$[$relativeUrl$$]) {
      this.$_checkBasemaps$.push($relativeUrl$$);
      var $thisRef$$1$$ = this;
      $$$$12$$.getScript($resolvedUrl$$1$$, function() {
        $loadedBasemaps$$[$relativeUrl$$] = !0;
        $thisRef$$1$$.$_render$()
      });
      -1 === $locale$$24$$.indexOf("en") && this.$_loadResourceBundle$("resources/internal-deps/dvt/thematicMap/resourceBundles/" + ($basemap$$1$$ + $layer$$1$$ + "Bundle"))
    }
  }, $_handleEvent$:function($event$$132_selection$$2$$) {
    var $selectedItems$$1$$, $i$$194$$, $selectedItem$$1$$;
    if(($event$$132_selection$$2$$ && $event$$132_selection$$2$$.getType ? $event$$132_selection$$2$$.getType() : null) === DvtSelectionEvent.TYPE) {
      $selectedItems$$1$$ = [];
      $event$$132_selection$$2$$ = $event$$132_selection$$2$$.getSelection();
      for($i$$194$$ = 0;$i$$194$$ < $event$$132_selection$$2$$.length;$i$$194$$++) {
        $selectedItem$$1$$ = {id:$event$$132_selection$$2$$[$i$$194$$], dataLayerId:null}, $selectedItems$$1$$.push($selectedItem$$1$$)
      }
      this._trigger("select", null, {items:$selectedItems$$1$$})
    }else {
      this._super($event$$132_selection$$2$$)
    }
  }, getNodeBySubId:function($locator$$8$$) {
    this._super($locator$$8$$)
  }, $getArea$:function($dataLayerId$$1$$, $id$$20$$) {
    var $auto$$ = this.$_component$.getAutomation();
    return new $oj$$12$$.$ThematicMapArea$($auto$$.getData($dataLayerId$$1$$, "area", $id$$20$$))
  }, $getMarker$:function($dataLayerId$$2$$, $id$$21$$) {
    var $auto$$1$$ = this.$_component$.getAutomation();
    return new $oj$$12$$.$ThematicMapMarker$($auto$$1$$.getData($dataLayerId$$2$$, "marker", $id$$21$$))
  }})
});
