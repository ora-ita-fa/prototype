define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtChart"], function($oj$$14$$, $$$$14$$) {
  $oj$$14$$.$__registerWidget$("oj.ojChart", $$$$14$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, select:null, viewportChange:null}, $_createComponent$:function($context$$40$$, $callback$$83$$, $callbackObj$$4$$) {
    return DvtChart.newInstance($context$$40$$, $callback$$83$$, $callbackObj$$4$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$7$$ = this._super();
    $styleClasses$$7$$.push("oj-chart");
    return $styleClasses$$7$$
  }, $_getChildStyleClasses$:function() {
    var $styleClasses$$8$$ = this._super();
    $styleClasses$$8$$["oj-chart-footnote"] = {path:"footnote/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-subtitle"] = {path:"subtitle/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-title"] = {path:"title/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-xaxis-tick-label"] = {path:"xAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-xaxis-title"] = {path:"xAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-yaxis-tick-label"] = {path:"yAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-yaxis-title"] = {path:"yAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-y2axis-tick-label"] = {path:"y2Axis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-y2axis-title"] = {path:"y2Axis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-legend"] = {path:"legend/textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-legend-title"] = {path:"legend/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-pan-icon"] = {path:"_resources/panUp", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-pan-icon oj-active"] = {path:"_resources/panDown", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-select-icon"] = {path:"_resources/selectUp", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-select-icon oj-active"] = {path:"_resources/selectDown", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-zoom-icon"] = {path:"_resources/zoomUp", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-zoom-icon oj-active"] = {path:"_resources/zoomDown", property:"CSS_URL"};
    return $styleClasses$$8$$
  }, $_getTranslationMap$:function() {
    var $superMap$$2$$ = this._super(), $selfMap$$2$$ = {"oj-ojDvtCommon.msgNoData":"DvtChartBundle.EMPTY_TEXT", "oj-ojChart.labelDefaultGroupName":"DvtChartBundle.DEFAULT_GROUP_NAME", "oj-ojChart.labelSeries":"DvtChartBundle.LABEL_SERIES", "oj-ojChart.labelGroup":"DvtChartBundle.LABEL_GROUP", "oj-ojChart.labelValue":"DvtChartBundle.LABEL_VALUE", "oj-ojChart.labelTargetValue":"DvtChartBundle.LABEL_TARGET_VALUE", "oj-ojChart.labelX":"DvtChartBundle.LABEL_X", "oj-ojChart.labelY":"DvtChartBundle.LABEL_Y", 
    "oj-ojChart.labelZ":"DvtChartBundle.LABEL_Z", "oj-ojChart.labelLow":"DvtChartBundle.LABEL_LOW", "oj-ojChart.labelHigh":"DvtChartBundle.LABEL_HIGH", "oj-ojChart.labelOther":"DvtChartBundle.LABEL_OTHER", "oj-ojChart.tooltipPan":"DvtChartBundle.PAN", "oj-ojChart.tooltipSelect":"DvtChartBundle.MARQUEE_SELECT", "oj-ojChart.tooltipZoom":"DvtChartBundle.MARQUEE_ZOOM"}, $ret$$26$$ = {}, $key$$64$$;
    for($key$$64$$ in $superMap$$2$$) {
      $ret$$26$$[$key$$64$$] = $superMap$$2$$[$key$$64$$]
    }
    for($key$$64$$ in $selfMap$$2$$) {
      $ret$$26$$[$key$$64$$] = $selfMap$$2$$[$key$$64$$]
    }
    return $ret$$26$$
  }, $_handleEvent$:function($event$$122_selection$$4$$) {
    var $filterType_highlightType_selectedItems$$3_type$$78$$ = $event$$122_selection$$4$$ && $event$$122_selection$$4$$.getType ? $event$$122_selection$$4$$.getType() : null;
    if($filterType_highlightType_selectedItems$$3_type$$78$$ === DvtSelectionEvent.TYPE) {
      if($event$$122_selection$$4$$ = $event$$122_selection$$4$$.getSelection()) {
        for(var $filterType_highlightType_selectedItems$$3_type$$78$$ = [], $i$$191$$ = 0;$i$$191$$ < $event$$122_selection$$4$$.length;$i$$191$$++) {
          var $selectedItem$$3$$ = {id:$event$$122_selection$$4$$[$i$$191$$].getId(), series:$event$$122_selection$$4$$[$i$$191$$].getSeries(), group:$event$$122_selection$$4$$[$i$$191$$].getGroup()};
          $filterType_highlightType_selectedItems$$3_type$$78$$.push($selectedItem$$3$$)
        }
        this._trigger("select", null, {items:$filterType_highlightType_selectedItems$$3_type$$78$$})
      }
    }else {
      $filterType_highlightType_selectedItems$$3_type$$78$$ === DvtCategoryHideShowEvent.TYPE_HIDE || $filterType_highlightType_selectedItems$$3_type$$78$$ === DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType_highlightType_selectedItems$$3_type$$78$$ = $filterType_highlightType_selectedItems$$3_type$$78$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this._trigger("categoryFilter", null, {category:$event$$122_selection$$4$$.getCategory(), type:$filterType_highlightType_selectedItems$$3_type$$78$$})) : 
      $filterType_highlightType_selectedItems$$3_type$$78$$ === DvtCategoryRolloverEvent.TYPE_OVER || $filterType_highlightType_selectedItems$$3_type$$78$$ === DvtCategoryRolloverEvent.TYPE_OUT ? ($filterType_highlightType_selectedItems$$3_type$$78$$ = $filterType_highlightType_selectedItems$$3_type$$78$$ === DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:[$event$$122_selection$$4$$.getCategory()], type:$filterType_highlightType_selectedItems$$3_type$$78$$})) : 
      this._super($event$$122_selection$$4$$)
    }
  }, $_loadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$1$$ = this.options._resources;
    $resources$$1$$.overviewGrippy = $oj$$14$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
    $resources$$1$$.panCursorDown = $oj$$14$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-closed.cur");
    $resources$$1$$.panCursorUp = $oj$$14$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-open.cur")
  }});
  $oj$$14$$.$__registerWidget$("oj.ojSparkChart", $$$$14$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", $_createComponent$:function($context$$41$$, $callback$$84$$, $callbackObj$$5$$) {
    return DvtSparkChart.newInstance($context$$41$$, $callback$$84$$, $callbackObj$$5$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$.push("oj-sparkchart");
    return $styleClasses$$9$$
  }, $_render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }})
});
