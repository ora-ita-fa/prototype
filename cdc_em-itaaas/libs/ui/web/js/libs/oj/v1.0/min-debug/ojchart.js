define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtChart"], function($oj$$26$$, $$$$26$$) {
  $oj$$26$$.$__registerWidget$("oj.ojChart", $$$$26$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, select:null, viewportChange:null}, $_CreateComponent$:function($context$$48$$, $callback$$99$$, $callbackObj$$8$$) {
    return DvtChart.newInstance($context$$48$$, $callback$$99$$, $callbackObj$$8$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$.push("oj-chart");
    return $styleClasses$$12$$
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$["oj-chart-footnote"] = {path:"footnote/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-subtitle"] = {path:"subtitle/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-title"] = {path:"title/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-xaxis-tick-label"] = {path:"xAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-xaxis-title"] = {path:"xAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-yaxis-tick-label"] = {path:"yAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-yaxis-title"] = {path:"yAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-y2axis-tick-label"] = {path:"y2Axis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-y2axis-title"] = {path:"y2Axis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend"] = {path:"legend/textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend-title"] = {path:"legend/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-pan-icon"] = {path:"_resources/panUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-pan-icon oj-active"] = {path:"_resources/panDown", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-select-icon"] = {path:"_resources/selectUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-select-icon oj-active"] = {path:"_resources/selectDown", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-zoom-icon"] = {path:"_resources/zoomUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-zoom-icon oj-active"] = {path:"_resources/zoomDown", property:"CSS_URL"};
    return $styleClasses$$13$$
  }, $_GetTranslationMap$:function() {
    var $superMap$$3$$ = this._super(), $selfMap$$3$$ = {"DvtChartBundle.DEFAULT_GROUP_NAME":this.$_GetTranslatedResource$("labelDefaultGroupName", ["groupName"]), "DvtChartBundle.EMPTY_TEXT":this.$_GetTranslatedResource$("msgNoData"), "DvtChartBundle.LABEL_SERIES":this.$_GetTranslatedResource$("labelSeries", ["seriesName"]), "DvtChartBundle.LABEL_GROUP":this.$_GetTranslatedResource$("labelGroup", ["groupName"]), "DvtChartBundle.LABEL_VALUE":this.$_GetTranslatedResource$("labelValue", ["value"]), 
    "DvtChartBundle.LABEL_TARGET_VALUE":this.$_GetTranslatedResource$("labelTargetValue", ["targetValue"]), "DvtChartBundle.LABEL_X":this.$_GetTranslatedResource$("labelX", ["x"]), "DvtChartBundle.LABEL_Y":this.$_GetTranslatedResource$("labelY", ["y"]), "DvtChartBundle.LABEL_Z":this.$_GetTranslatedResource$("labelZ", ["z"]), "DvtChartBundle.LABEL_LOW":this.$_GetTranslatedResource$("labelLow", ["low"]), "DvtChartBundle.LABEL_HIGH":this.$_GetTranslatedResource$("labelHigh", ["high"]), "DvtChartBundle.LABEL_OTHER":this.$_GetTranslatedResource$("labelOther"), 
    "DvtChartBundle.PAN":this.$_GetTranslatedResource$("tooltipPan"), "DvtChartBundle.MARQUEE_SELECT":this.$_GetTranslatedResource$("tooltipSelect"), "DvtChartBundle.MARQUEE_ZOOM":this.$_GetTranslatedResource$("tooltipZoom")};
    $selfMap$$3$$["DvtChartBundle.EMPTY_TEXT"] = $oj$$26$$.$Translations$.$getResource$("oj-dvtBaseComponent.msgNoData");
    var $ret$$39$$ = {}, $key$$93$$;
    for($key$$93$$ in $superMap$$3$$) {
      $ret$$39$$[$key$$93$$] = $superMap$$3$$[$key$$93$$]
    }
    for($key$$93$$ in $selfMap$$3$$) {
      $ret$$39$$[$key$$93$$] = $selfMap$$3$$[$key$$93$$]
    }
    return $ret$$39$$
  }, $_HandleEvent$:function($event$$288_selection$$6$$) {
    var $filterType_highlightType_selectedItems$$3_type$$79$$ = $event$$288_selection$$6$$ && $event$$288_selection$$6$$.getType ? $event$$288_selection$$6$$.getType() : null;
    if($filterType_highlightType_selectedItems$$3_type$$79$$ === DvtSelectionEvent.TYPE) {
      if($event$$288_selection$$6$$ = $event$$288_selection$$6$$.getSelection()) {
        for(var $filterType_highlightType_selectedItems$$3_type$$79$$ = [], $i$$257$$ = 0;$i$$257$$ < $event$$288_selection$$6$$.length;$i$$257$$++) {
          var $selectedItem$$3$$ = {id:$event$$288_selection$$6$$[$i$$257$$].getId(), series:$event$$288_selection$$6$$[$i$$257$$].getSeries(), group:$event$$288_selection$$6$$[$i$$257$$].getGroup()};
          $filterType_highlightType_selectedItems$$3_type$$79$$.push($selectedItem$$3$$)
        }
        this._trigger("select", null, {items:$filterType_highlightType_selectedItems$$3_type$$79$$})
      }
    }else {
      $filterType_highlightType_selectedItems$$3_type$$79$$ === DvtCategoryHideShowEvent.TYPE_HIDE || $filterType_highlightType_selectedItems$$3_type$$79$$ === DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType_highlightType_selectedItems$$3_type$$79$$ = $filterType_highlightType_selectedItems$$3_type$$79$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this._trigger("categoryFilter", null, {category:$event$$288_selection$$6$$.getCategory(), type:$filterType_highlightType_selectedItems$$3_type$$79$$})) : 
      $filterType_highlightType_selectedItems$$3_type$$79$$ === DvtCategoryRolloverEvent.TYPE_OVER || $filterType_highlightType_selectedItems$$3_type$$79$$ === DvtCategoryRolloverEvent.TYPE_OUT ? ($filterType_highlightType_selectedItems$$3_type$$79$$ = $filterType_highlightType_selectedItems$$3_type$$79$$ === DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:[$event$$288_selection$$6$$.getCategory()], type:$filterType_highlightType_selectedItems$$3_type$$79$$})) : 
      this._super($event$$288_selection$$6$$)
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$1$$ = this.options._resources;
    $resources$$1$$.overviewGrippy = $oj$$26$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
    $resources$$1$$.panCursorDown = $oj$$26$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-closed.cur");
    $resources$$1$$.panCursorUp = $oj$$26$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-open.cur")
  }});
  $oj$$26$$.$__registerWidget$("oj.ojSparkChart", $$$$26$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", $_CreateComponent$:function($context$$49$$, $callback$$100$$, $callbackObj$$9$$) {
    return DvtSparkChart.newInstance($context$$49$$, $callback$$100$$, $callbackObj$$9$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$.push("oj-sparkchart");
    return $styleClasses$$14$$
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }})
});
