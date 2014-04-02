define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtLegend"], function($oj$$21$$, $$$$20$$) {
  $oj$$21$$.$__registerWidget$("oj.ojLegend", $$$$20$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null}, $_createComponent$:function($context$$44$$, $callback$$99$$, $callbackObj$$6$$) {
    return DvtLegend.newInstance($context$$44$$, $callback$$99$$, $callbackObj$$6$$)
  }, $_getStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$["oj-legend"] = {path:"textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-legendTitle"] = {path:"titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-legendSectionTitle"] = {path:"_sectionTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$10$$
  }, $_handleEvent$:function($event$$306$$) {
    var $filterType$$1_highlightType$$1_type$$84$$ = $event$$306$$ && $event$$306$$.getType ? $event$$306$$.getType() : null;
    $filterType$$1_highlightType$$1_type$$84$$ === DvtCategoryHideShowEvent.TYPE_HIDE || $filterType$$1_highlightType$$1_type$$84$$ === DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType$$1_highlightType$$1_type$$84$$ = $filterType$$1_highlightType$$1_type$$84$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this._trigger("categoryFilter", null, {category:$event$$306$$.getCategory(), type:$filterType$$1_highlightType$$1_type$$84$$})) : $filterType$$1_highlightType$$1_type$$84$$ === DvtCategoryRolloverEvent.TYPE_OVER || 
    $filterType$$1_highlightType$$1_type$$84$$ === DvtCategoryRolloverEvent.TYPE_OUT ? ($filterType$$1_highlightType$$1_type$$84$$ = $filterType$$1_highlightType$$1_type$$84$$ === DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:[$event$$306$$.getCategory()], type:$filterType$$1_highlightType$$1_type$$84$$})) : this._super($event$$306$$)
  }})
});
