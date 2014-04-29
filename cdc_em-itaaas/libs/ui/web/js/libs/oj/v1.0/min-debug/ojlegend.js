define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtLegend"], function($oj$$38$$, $$$$36$$) {
  $oj$$38$$.$__registerWidget$("oj.ojLegend", $$$$36$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null}, $_CreateComponent$:function($context$$50$$, $callback$$104$$, $callbackObj$$10$$) {
    return DvtLegend.newInstance($context$$50$$, $callback$$104$$, $callbackObj$$10$$)
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$["oj-legend"] = {path:"textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-legendTitle"] = {path:"titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-legendSectionTitle"] = {path:"_sectionTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$15$$
  }, $_HandleEvent$:function($event$$342$$) {
    var $filterType$$1_highlightType$$1_type$$82$$ = $event$$342$$ && $event$$342$$.getType ? $event$$342$$.getType() : null;
    $filterType$$1_highlightType$$1_type$$82$$ === DvtCategoryHideShowEvent.TYPE_HIDE || $filterType$$1_highlightType$$1_type$$82$$ === DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType$$1_highlightType$$1_type$$82$$ = $filterType$$1_highlightType$$1_type$$82$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this._trigger("categoryFilter", null, {category:$event$$342$$.getCategory(), type:$filterType$$1_highlightType$$1_type$$82$$})) : $filterType$$1_highlightType$$1_type$$82$$ === DvtCategoryRolloverEvent.TYPE_OVER || 
    $filterType$$1_highlightType$$1_type$$82$$ === DvtCategoryRolloverEvent.TYPE_OUT ? ($filterType$$1_highlightType$$1_type$$82$$ = $filterType$$1_highlightType$$1_type$$82$$ === DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:[$event$$342$$.getCategory()], type:$filterType$$1_highlightType$$1_type$$82$$})) : this._super($event$$342$$)
  }})
});
