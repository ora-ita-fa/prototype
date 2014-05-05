define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtChart"], function($oj$$26$$, $$$$26$$) {
  $oj$$26$$.$ChartAxis$ = $JSCompiler_set$$("$_data$");
  $goog$exportPath_$$("ChartAxis", $oj$$26$$.$ChartAxis$, $oj$$26$$);
  $oj$$26$$.$ChartAxis$.prototype.getTitle = function $$oj$$26$$$$ChartAxis$$$getTitle$() {
    return this.$_data$ ? this.$_data$.title : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartAxis.prototype.getTitle", {getTitle:$oj$$26$$.$ChartAxis$.prototype.getTitle});
  $oj$$26$$.$ChartAxis$.prototype.$getBounds$ = function $$oj$$26$$$$ChartAxis$$$$getBounds$$() {
    return this.$_data$ ? this.$_data$.bounds : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartAxis.prototype.getBounds", {$getBounds$:$oj$$26$$.$ChartAxis$.prototype.$getBounds$});
  $oj$$26$$.$__registerWidget$("oj.ojChart", $$$$26$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, select:null, viewportChange:null}, $_CreateComponent$:function($context$$48$$, $callback$$99$$, $callbackObj$$8$$) {
    return DvtChart.newInstance($context$$48$$, $callback$$99$$, $callbackObj$$8$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$.push("oj-chart");
    return $styleClasses$$11$$
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$["oj-chart-footnote"] = {path:"footnote/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-chart-subtitle"] = {path:"subtitle/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-chart-title"] = {path:"title/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-chart-xaxis-tick-label"] = {path:"xAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-chart-xaxis-title"] = {path:"xAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-chart-yaxis-tick-label"] = {path:"yAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-chart-yaxis-title"] = {path:"yAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-chart-y2axis-tick-label"] = {path:"y2Axis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-chart-y2axis-title"] = {path:"y2Axis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-legend"] = {path:"legend/textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-legend-title"] = {path:"legend/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-chart-pan-icon"] = {path:"_resources/panUp", property:"CSS_URL"};
    $styleClasses$$12$$["oj-chart-pan-icon oj-active"] = {path:"_resources/panDown", property:"CSS_URL"};
    $styleClasses$$12$$["oj-chart-select-icon"] = {path:"_resources/selectUp", property:"CSS_URL"};
    $styleClasses$$12$$["oj-chart-select-icon oj-active"] = {path:"_resources/selectDown", property:"CSS_URL"};
    $styleClasses$$12$$["oj-chart-zoom-icon"] = {path:"_resources/zoomUp", property:"CSS_URL"};
    $styleClasses$$12$$["oj-chart-zoom-icon oj-active"] = {path:"_resources/zoomDown", property:"CSS_URL"};
    return $styleClasses$$12$$
  }, $_GetTranslationMap$:function() {
    var $superMap$$3$$ = this._super(), $selfMap$$3$$ = {"DvtChartBundle.DEFAULT_GROUP_NAME":this.$_GetTranslatedResource$("labelDefaultGroupName", ["groupName"]), "DvtChartBundle.EMPTY_TEXT":this.$_GetTranslatedResource$("msgNoData"), "DvtChartBundle.LABEL_SERIES":this.$_GetTranslatedResource$("labelSeries", ["seriesName"]), "DvtChartBundle.LABEL_GROUP":this.$_GetTranslatedResource$("labelGroup", ["groupName"]), "DvtChartBundle.LABEL_VALUE":this.$_GetTranslatedResource$("labelValue", ["value"]), 
    "DvtChartBundle.LABEL_TARGET_VALUE":this.$_GetTranslatedResource$("labelTargetValue", ["targetValue"]), "DvtChartBundle.LABEL_X":this.$_GetTranslatedResource$("labelX", ["x"]), "DvtChartBundle.LABEL_Y":this.$_GetTranslatedResource$("labelY", ["y"]), "DvtChartBundle.LABEL_Z":this.$_GetTranslatedResource$("labelZ", ["z"]), "DvtChartBundle.LABEL_LOW":this.$_GetTranslatedResource$("labelLow", ["low"]), "DvtChartBundle.LABEL_HIGH":this.$_GetTranslatedResource$("labelHigh", ["high"]), "DvtChartBundle.LABEL_OTHER":this.$_GetTranslatedResource$("labelOther"), 
    "DvtChartBundle.PAN":this.$_GetTranslatedResource$("tooltipPan"), "DvtChartBundle.MARQUEE_SELECT":this.$_GetTranslatedResource$("tooltipSelect"), "DvtChartBundle.MARQUEE_ZOOM":this.$_GetTranslatedResource$("tooltipZoom")};
    $selfMap$$3$$["DvtChartBundle.EMPTY_TEXT"] = $oj$$26$$.$Translations$.$getResource$("oj-dvtBaseComponent.msgNoData");
    var $ret$$36$$ = {}, $key$$93$$;
    for($key$$93$$ in $superMap$$3$$) {
      $ret$$36$$[$key$$93$$] = $superMap$$3$$[$key$$93$$]
    }
    for($key$$93$$ in $selfMap$$3$$) {
      $ret$$36$$[$key$$93$$] = $selfMap$$3$$[$key$$93$$]
    }
    return $ret$$36$$
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
  }, getNodeBySubId:function($locator$$19$$) {
    return this._super($locator$$19$$)
  }, getSubIdByNode:function($node$$57$$) {
    return this._super($node$$57$$)
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle()
  }, getGroup:function($groupIndex$$) {
    return this.$_component$.getAutomation().getGroup($groupIndex$$)
  }, getSeries:function($seriesIndex$$) {
    return this.$_component$.getAutomation().getSeries($seriesIndex$$)
  }, getGroupCount:function() {
    return this.$_component$.getAutomation().getGroupCount()
  }, getSeriesCount:function() {
    return this.$_component$.getAutomation().getSeriesCount()
  }, getDataItem:function($seriesIndex$$1$$, $groupIndex$$1$$) {
    var $auto$$7$$ = this.$_component$.getAutomation();
    return new $oj$$26$$.$ChartDataItem$($auto$$7$$.getDataItem($seriesIndex$$1$$, $groupIndex$$1$$))
  }, getLegend:function() {
    var $auto$$8$$ = this.$_component$.getAutomation();
    return new $oj$$26$$.$ChartLegend$($auto$$8$$.getLegend())
  }, getPlotArea:function() {
    var $auto$$9$$ = this.$_component$.getAutomation();
    return new $oj$$26$$.$ChartPlotArea$($auto$$9$$.getPlotArea())
  }, getXAxis:function() {
    var $auto$$10$$ = this.$_component$.getAutomation();
    return new $oj$$26$$.$ChartAxis$($auto$$10$$.getXAxis())
  }, getYAxis:function() {
    var $auto$$11$$ = this.$_component$.getAutomation();
    return new $oj$$26$$.$ChartAxis$($auto$$11$$.getYAxis())
  }, getY2Axis:function() {
    var $auto$$12$$ = this.$_component$.getAutomation();
    return new $oj$$26$$.$ChartAxis$($auto$$12$$.getY2Axis())
  }});
  $oj$$26$$.$ChartPlotArea$ = $JSCompiler_set$$("$_data$");
  $goog$exportPath_$$("ChartPlotArea", $oj$$26$$.$ChartPlotArea$, $oj$$26$$);
  $oj$$26$$.$ChartPlotArea$.prototype.$getBounds$ = function $$oj$$26$$$$ChartPlotArea$$$$getBounds$$() {
    return this.$_data$ ? this.$_data$.bounds : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartPlotArea.prototype.getBounds", {$getBounds$:$oj$$26$$.$ChartPlotArea$.prototype.$getBounds$});
  $oj$$26$$.$ChartLegend$ = $JSCompiler_set$$("$_data$");
  $goog$exportPath_$$("ChartLegend", $oj$$26$$.$ChartLegend$, $oj$$26$$);
  $oj$$26$$.$ChartLegend$.prototype.getTitle = function $$oj$$26$$$$ChartLegend$$$getTitle$() {
    return this.$_data$ ? this.$_data$.title : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartLegend.prototype.getTitle", {getTitle:$oj$$26$$.$ChartLegend$.prototype.getTitle});
  $oj$$26$$.$ChartLegend$.prototype.$getBounds$ = function $$oj$$26$$$$ChartLegend$$$$getBounds$$() {
    return this.$_data$ ? this.$_data$.bounds : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartLegend.prototype.getBounds", {$getBounds$:$oj$$26$$.$ChartLegend$.prototype.$getBounds$});
  $oj$$26$$.$__registerWidget$("oj.ojSparkChart", $$$$26$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", $_CreateComponent$:function($context$$49$$, $callback$$100$$, $callbackObj$$9$$) {
    return DvtSparkChart.newInstance($context$$49$$, $callback$$100$$, $callbackObj$$9$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$.push("oj-sparkchart");
    return $styleClasses$$13$$
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$26$$.$ChartDataItem$ = $JSCompiler_set$$("$_data$");
  $goog$exportPath_$$("ChartDataItem", $oj$$26$$.$ChartDataItem$, $oj$$26$$);
  $oj$$26$$.$ChartDataItem$.prototype.getGroup = function $$oj$$26$$$$ChartDataItem$$$getGroup$() {
    return this.$_data$ ? this.$_data$.group : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getGroup", {getGroup:$oj$$26$$.$ChartDataItem$.prototype.getGroup});
  $oj$$26$$.$ChartDataItem$.prototype.getSeries = function $$oj$$26$$$$ChartDataItem$$$getSeries$() {
    return this.$_data$ ? this.$_data$.series : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getSeries", {getSeries:$oj$$26$$.$ChartDataItem$.prototype.getSeries});
  $oj$$26$$.$ChartDataItem$.prototype.$getBorderColor$ = function $$oj$$26$$$$ChartDataItem$$$$getBorderColor$$() {
    return this.$_data$ ? this.$_data$.borderColor : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getBorderColor", {$getBorderColor$:$oj$$26$$.$ChartDataItem$.prototype.$getBorderColor$});
  $oj$$26$$.$ChartDataItem$.prototype.$getColor$ = function $$oj$$26$$$$ChartDataItem$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getColor", {$getColor$:$oj$$26$$.$ChartDataItem$.prototype.$getColor$});
  $oj$$26$$.$ChartDataItem$.prototype.$getLabel$ = function $$oj$$26$$$$ChartDataItem$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getLabel", {$getLabel$:$oj$$26$$.$ChartDataItem$.prototype.$getLabel$});
  $oj$$26$$.$ChartDataItem$.prototype.$getValue$ = function $$oj$$26$$$$ChartDataItem$$$$getValue$$() {
    return this.$_data$ ? this.$_data$.value : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getValue", {$getValue$:$oj$$26$$.$ChartDataItem$.prototype.$getValue$});
  $oj$$26$$.$ChartDataItem$.prototype.$getTargetValue$ = function $$oj$$26$$$$ChartDataItem$$$$getTargetValue$$() {
    return this.$_data$ ? this.$_data$.targetValue : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getTargetValue", {$getTargetValue$:$oj$$26$$.$ChartDataItem$.prototype.$getTargetValue$});
  $oj$$26$$.$ChartDataItem$.prototype.$getTooltip$ = function $$oj$$26$$$$ChartDataItem$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getTooltip", {$getTooltip$:$oj$$26$$.$ChartDataItem$.prototype.$getTooltip$});
  $oj$$26$$.$ChartDataItem$.prototype.$getX$ = function $$oj$$26$$$$ChartDataItem$$$$getX$$() {
    return this.$_data$ ? this.$_data$.x : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getX", {$getX$:$oj$$26$$.$ChartDataItem$.prototype.$getX$});
  $oj$$26$$.$ChartDataItem$.prototype.$getY$ = function $$oj$$26$$$$ChartDataItem$$$$getY$$() {
    return this.$_data$ ? this.$_data$.y : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getY", {$getY$:$oj$$26$$.$ChartDataItem$.prototype.$getY$});
  $oj$$26$$.$ChartDataItem$.prototype.$getZ$ = function $$oj$$26$$$$ChartDataItem$$$$getZ$$() {
    return this.$_data$ ? this.$_data$.z : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getZ", {$getZ$:$oj$$26$$.$ChartDataItem$.prototype.$getZ$});
  $oj$$26$$.$ChartDataItem$.prototype.$getSelected$ = function $$oj$$26$$$$ChartDataItem$$$$getSelected$$() {
    return this.$_data$ ? this.$_data$.selected : null
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getSelected", {$getSelected$:$oj$$26$$.$ChartDataItem$.prototype.$getSelected$})
});
