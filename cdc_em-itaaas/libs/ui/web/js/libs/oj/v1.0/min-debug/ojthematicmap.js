define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$19$$, $$$$19$$) {
  $oj$$19$$.$__registerWidget$("oj.ojThematicMap", $$$$19$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{select:null}, $_loadedBasemaps$:[], $_checkBasemaps$:[], $_CreateComponent$:function($context$$43$$, $callback$$93$$, $callbackObj$$6$$) {
    return DvtThematicMap.newInstance($context$$43$$, $callback$$93$$, $callbackObj$$6$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$8$$ = this._super();
    $styleClasses$$8$$.push("oj-thematicmap");
    return $styleClasses$$8$$
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$9$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$9$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$9$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderStyle", property:"border-style"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}, {path:"styleDefaults/dataMarkerDefaults/borderWidth", 
    property:"border-width"}];
    return $styleClasses$$9$$
  }, $_LoadResources$:function() {
    this.$_loadBasemap$()
  }, $_Render$:function() {
    for(var $i$$215$$ = 0;$i$$215$$ < this.$_checkBasemaps$.length;$i$$215$$++) {
      if(!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$215$$]]) {
        return
      }
    }
    this.$_checkBasemaps$ = [];
    this._super()
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if($basemap$$) {
      var $locale$$23$$ = $oj$$19$$.$Config$.$getLocale$(), $basemap$$ = $basemap$$.charAt(0).toUpperCase() + $basemap$$.slice(1), $areaLayers_pointDataLayers$$ = this.options.areaLayers;
      if($areaLayers_pointDataLayers$$) {
        for(var $i$$216$$ = 0;$i$$216$$ < $areaLayers_pointDataLayers$$.length;$i$$216$$++) {
          var $layer$$ = $areaLayers_pointDataLayers$$[$i$$216$$].layer;
          $layer$$ && ($layer$$ = $layer$$.charAt(0).toUpperCase() + $layer$$.slice(1), this.$_loadBasemapHelper$($basemap$$, $layer$$, $locale$$23$$))
        }
      }
      ($areaLayers_pointDataLayers$$ = this.options.pointDataLayers) && 0 < $areaLayers_pointDataLayers$$.length && this.$_loadBasemapHelper$($basemap$$, "Cities", $locale$$23$$)
    }
  }, $_loadBasemapHelper$:function($basemap$$1$$, $layer$$1$$, $locale$$24$$) {
    var $relativeUrl$$ = "resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap" + $basemap$$1$$ + $layer$$1$$ + ".js", $resolvedUrl$$1$$ = $oj$$19$$.$Config$.$getResourceUrl$($relativeUrl$$), $loadedBasemaps$$ = this.$_loadedBasemaps$;
    if(!$loadedBasemaps$$[$relativeUrl$$]) {
      this.$_checkBasemaps$.push($relativeUrl$$);
      var $thisRef$$1$$ = this;
      $$$$19$$.getScript($resolvedUrl$$1$$, function() {
        $loadedBasemaps$$[$relativeUrl$$] = !0;
        $thisRef$$1$$.$_Render$()
      });
      -1 === $locale$$24$$.indexOf("en") && this.$_LoadResourceBundle$("resources/internal-deps/dvt/thematicMap/resourceBundles/" + ($basemap$$1$$ + $layer$$1$$ + "Bundle"))
    }
  }, $_HandleEvent$:function($event$$219_selection$$4$$) {
    var $selectedItems$$1$$, $i$$217$$, $selectedItem$$1$$;
    if(($event$$219_selection$$4$$ && $event$$219_selection$$4$$.getType ? $event$$219_selection$$4$$.getType() : null) === DvtSelectionEvent.TYPE) {
      $selectedItems$$1$$ = [];
      $event$$219_selection$$4$$ = $event$$219_selection$$4$$.getSelection();
      for($i$$217$$ = 0;$i$$217$$ < $event$$219_selection$$4$$.length;$i$$217$$++) {
        $selectedItem$$1$$ = {id:$event$$219_selection$$4$$[$i$$217$$], dataLayerId:null}, $selectedItems$$1$$.push($selectedItem$$1$$)
      }
      this._trigger("select", null, {items:$selectedItems$$1$$})
    }else {
      this._super($event$$219_selection$$4$$)
    }
  }, getNodeBySubId:function($locator$$12$$) {
    this._super($locator$$12$$)
  }, $getArea$:function($dataLayerId$$1$$, $id$$27$$) {
    var $auto$$ = this.$_component$.getAutomation();
    return new $oj$$19$$.$ThematicMapArea$($auto$$.getData($dataLayerId$$1$$, "area", $id$$27$$))
  }, $getMarker$:function($dataLayerId$$2$$, $id$$28$$) {
    var $auto$$1$$ = this.$_component$.getAutomation();
    return new $oj$$19$$.$ThematicMapMarker$($auto$$1$$.getData($dataLayerId$$2$$, "marker", $id$$28$$))
  }});
  $oj$$19$$.$ThematicMapMarker$ = $JSCompiler_set$$("$_data$");
  $goog$exportPath_$$("ThematicMapMarker", $oj$$19$$.$ThematicMapMarker$, $oj$$19$$);
  $oj$$19$$.$ThematicMapMarker$.prototype.$getColor$ = function $$oj$$19$$$$ThematicMapMarker$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getColor", {$getColor$:$oj$$19$$.$ThematicMapMarker$.prototype.$getColor$});
  $oj$$19$$.$ThematicMapMarker$.prototype.$getTooltip$ = function $$oj$$19$$$$ThematicMapMarker$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getTooltip", {$getTooltip$:$oj$$19$$.$ThematicMapMarker$.prototype.$getTooltip$});
  $oj$$19$$.$ThematicMapMarker$.prototype.$getLabel$ = function $$oj$$19$$$$ThematicMapMarker$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getLabel", {$getLabel$:$oj$$19$$.$ThematicMapMarker$.prototype.$getLabel$});
  $oj$$19$$.$ThematicMapArea$ = $JSCompiler_set$$("$_data$");
  $goog$exportPath_$$("ThematicMapArea", $oj$$19$$.$ThematicMapArea$, $oj$$19$$);
  $oj$$19$$.$ThematicMapArea$.prototype.$getColor$ = function $$oj$$19$$$$ThematicMapArea$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getColor", {$getColor$:$oj$$19$$.$ThematicMapArea$.prototype.$getColor$});
  $oj$$19$$.$ThematicMapArea$.prototype.$getTooltip$ = function $$oj$$19$$$$ThematicMapArea$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getTooltip", {$getTooltip$:$oj$$19$$.$ThematicMapArea$.prototype.$getTooltip$});
  $oj$$19$$.$ThematicMapArea$.prototype.$getLabel$ = function $$oj$$19$$$$ThematicMapArea$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getLabel", {$getLabel$:$oj$$19$$.$ThematicMapArea$.prototype.$getLabel$})
});
