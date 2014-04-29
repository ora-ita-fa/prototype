define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtLegend$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLegend", D.$DvtLegend$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegend$$, D.$DvtBaseComponent$$, "DvtLegend");
D.$DvtLegend$newInstance$$ = function $$DvtLegend$newInstance$$$($context$$10$$, $callback$$29$$, $callbackObj$$6$$) {
  var $legend$$1$$ = new D.$DvtLegend$$;
  $legend$$1$$.Init($context$$10$$, $callback$$29$$, $callbackObj$$6$$);
  return $legend$$1$$
};
D.$DvtLegend$$.newInstance = D.$DvtLegend$newInstance$$;
D.$DvtLegend$$.getDefaults = function $$DvtLegend$$$getDefaults$($skin$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtLegendDefaults$$, $skin$$)
};
D.$DvtLegend$$.prototype.Init = function $$DvtLegend$$$$Init$($context$$11$$, $callback$$30$$, $callbackObj$$7$$) {
  D.$DvtLegend$$.$superclass$.Init.call(this, $context$$11$$, $callback$$30$$, $callbackObj$$7$$);
  this.setId("legend1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$Defaults$ = new D.$DvtLegendDefaults$$;
  this.$_eventManager$ = new D.$DvtLegendEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_peers$ = [];
  this.$_scrollableSections$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtLegend$$.prototype.$SetOptions$ = function $$DvtLegend$$$$$SetOptions$$($options$$8$$) {
  $options$$8$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$8$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtLegend$$.prototype.$getPreferredSize$ = function $$DvtLegend$$$$$getPreferredSize$$($dim$$1_options$$9$$, $maxWidth$$2$$, $maxHeight$$2$$) {
  this.$SetOptions$($dim$$1_options$$9$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  $dim$$1_options$$9$$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $maxWidth$$2$$, $maxHeight$$2$$));
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  return $dim$$1_options$$9$$
};
D.$DvtLegend$$.prototype.$render$ = function $$DvtLegend$$$$$render$$($options$$10$$, $width$$14$$, $height$$14$$) {
  this.$SetOptions$($options$$10$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $width$$14$$, $height$$14$$))
};
D.$DvtLegend$$.prototype.render = D.$DvtLegend$$.prototype.$render$;
D.$DvtLegend$$.prototype.$highlight$ = function $$DvtLegend$$$$$highlight$$($categories$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$, this.$_peers$)
};
D.$DvtLegend$$.prototype.highlight = D.$DvtLegend$$.prototype.$highlight$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegend$$.prototype;
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$14$$, $source$$3$$) {
  var $type$$62$$ = $event$$14$$.$getType$();
  if("categoryRollOver" == $type$$62$$ || "categoryRollOut" == $type$$62$$) {
    "dim" == this.$__getOptions$().hoverBehavior && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$14$$, this.$_peers$);
    for(var $i$$26$$ = 0;$i$$26$$ < this.$_scrollableSections$.length;$i$$26$$++) {
      for(var $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_727$$ = this.$_scrollableSections$[$i$$26$$], $category$$inline_729$$ = $event$$14$$.$_category$, $category$$inline_729$$ = $category$$inline_729$$[0] ? $category$$inline_729$$[0] : $category$$inline_729$$, $i$$inline_730$$ = 0;$i$$inline_730$$ < $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_727$$.$_peers$.length;$i$$inline_730$$++) {
        var $obj$$inline_731$$ = $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_727$$.$_peers$[$i$$inline_730$$];
        if($obj$$inline_731$$ && $obj$$inline_731$$.$getCategories$ && -1 < D.$DvtArrayUtils$$.$getIndex$($obj$$inline_731$$.$getCategories$(), $category$$inline_729$$)) {
          $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_727$$.scrollIntoView($i$$inline_730$$);
          break
        }
      }
    }
  }
  (this == $source$$3$$ || "showPopup" == $type$$62$$ || "hidePopup" == $type$$62$$) && this.$__dispatchEvent$($event$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$__registerObject$ = function $$JSCompiler_prototypeAlias$$$$__registerObject$$($peer$$) {
  this.$_peers$.push($peer$$)
};
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtLegend$$.$superclass$.$destroy$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new D.$DvtLegendAutomation$$(this)
};
D.$DvtLegend$$.prototype.getAutomation = D.$DvtLegend$$.prototype.$getAutomation$;
D.$DvtLegendConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtLegendConstants", D.$DvtLegendConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendConstants$$, D.$DvtObj$$, "DvtLegendConstants");
D.$DvtLegendConstants$$.$BACKGROUND$ = "background";
D.$DvtLegendConstants$$.BACKGROUND = D.$DvtLegendConstants$$.$BACKGROUND$;
D.$DvtLegendConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtLegendConstants$$.LEGEND_ITEM = D.$DvtLegendConstants$$.$LEGEND_ITEM$;
D.$DvtLegendConstants$$.$TITLE$ = "title";
D.$DvtLegendConstants$$.TITLE = D.$DvtLegendConstants$$.$TITLE$;
D.$DvtLegendAutomation$$ = function $$DvtLegendAutomation$$$($dvtComponent$$2$$) {
  this.$_legend$ = $dvtComponent$$2$$;
  this.$_options$ = this.$_legend$.$__getOptions$()
};
(0,D.$goog$exportSymbol$$)("DvtLegendAutomation", D.$DvtLegendAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAutomation$$, D.$DvtAutomation$$, "DvtLegendAutomation");
D.$DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($displayable$$42_indexList_item$$15_logicalObj$$8$$) {
  if(($displayable$$42_indexList_item$$15_logicalObj$$8$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_legend$.$__getEventManager$(), $displayable$$42_indexList_item$$15_logicalObj$$8$$)) && $displayable$$42_indexList_item$$15_logicalObj$$8$$ instanceof D.$DvtLegendObjPeer$$) {
    if($displayable$$42_indexList_item$$15_logicalObj$$8$$ = $displayable$$42_indexList_item$$15_logicalObj$$8$$.getData(), $displayable$$42_indexList_item$$15_logicalObj$$8$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)(this, $displayable$$42_indexList_item$$15_logicalObj$$8$$, this.$_options$)) {
      return"item" + $displayable$$42_indexList_item$$15_logicalObj$$8$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getIndicesFromItem$$ = function $$JSCompiler_StaticMethods__getIndicesFromItem$$$($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$342$$, $item$$16$$, $legendOptions$$4$$) {
  if($legendOptions$$4$$.sections && 0 < $legendOptions$$4$$.sections.length) {
    for(var $s$$51$$ = 0;$s$$51$$ < $legendOptions$$4$$.sections.length;$s$$51$$++) {
      var $itemIndex$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$342$$, $item$$16$$, $legendOptions$$4$$.sections[$s$$51$$]);
      if($itemIndex$$) {
        return"[" + $s$$51$$ + "]" + $itemIndex$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$4$$.items && 0 < $legendOptions$$4$$.items.length) {
    for($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$342$$ = 0;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$342$$ < $legendOptions$$4$$.items.length;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$342$$++) {
      if($legendOptions$$4$$.items[$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$342$$] == $item$$16$$) {
        return"[" + $JSCompiler_StaticMethods__getIndicesFromItem$self_i$$342$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods__getIndicesFromSeries$$ = function $$JSCompiler_StaticMethods__getIndicesFromSeries$$$($JSCompiler_StaticMethods__getIndicesFromSeries$self_i$$343$$, $series$$, $legendOptions$$5$$) {
  if($legendOptions$$5$$.sections && 0 < $legendOptions$$5$$.sections.length) {
    for(var $s$$52$$ = 0;$s$$52$$ < $legendOptions$$5$$.sections.length;$s$$52$$++) {
      var $itemIndex$$1$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromSeries$$)($JSCompiler_StaticMethods__getIndicesFromSeries$self_i$$343$$, $series$$, $legendOptions$$5$$.sections[$s$$52$$]);
      if($itemIndex$$1$$) {
        return"[" + $s$$52$$ + "]" + $itemIndex$$1$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$5$$.items && 0 < $legendOptions$$5$$.items.length) {
    for($JSCompiler_StaticMethods__getIndicesFromSeries$self_i$$343$$ = 0;$JSCompiler_StaticMethods__getIndicesFromSeries$self_i$$343$$ < $legendOptions$$5$$.items.length;$JSCompiler_StaticMethods__getIndicesFromSeries$self_i$$343$$++) {
      if($legendOptions$$5$$.items[$JSCompiler_StaticMethods__getIndicesFromSeries$self_i$$343$$].text == $series$$.name) {
        return"[" + $JSCompiler_StaticMethods__getIndicesFromSeries$self_i$$343$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods__getLegendItem$$ = function $$JSCompiler_StaticMethods__getLegendItem$$$($JSCompiler_StaticMethods__getLegendItem$self$$, $options$$49$$, $subId$$2$$) {
  var $index$$89_openParen$$ = $subId$$2$$.indexOf("["), $closeParen_nextCloseParen$$ = $subId$$2$$.indexOf("]");
  if(0 <= $index$$89_openParen$$ && 0 <= $closeParen_nextCloseParen$$) {
    return $index$$89_openParen$$ = $subId$$2$$.substring($index$$89_openParen$$ + 1, $closeParen_nextCloseParen$$), $subId$$2$$ = $subId$$2$$.substring($closeParen_nextCloseParen$$ + 1), $closeParen_nextCloseParen$$ = $subId$$2$$.indexOf("]"), 0 <= $subId$$2$$.indexOf("[") && 0 <= $closeParen_nextCloseParen$$ ? (0,D.$JSCompiler_StaticMethods__getLegendItem$$)($JSCompiler_StaticMethods__getLegendItem$self$$, $options$$49$$.sections[$index$$89_openParen$$], $subId$$2$$) : $options$$49$$.items[$index$$89_openParen$$]
  }
};
D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($legendItem_subId$$3$$) {
  $legendItem_subId$$3$$ = (0,D.$JSCompiler_StaticMethods__getLegendItem$$)(this, this.$_options$, $legendItem_subId$$3$$);
  for(var $legendPeers$$ = this.$_legend$.$_peers$, $i$$344$$ = 0;$i$$344$$ < $legendPeers$$.length;$i$$344$$++) {
    var $item$$17$$ = $legendPeers$$[$i$$344$$].getData();
    if($legendItem_subId$$3$$ == $item$$17$$) {
      return $legendPeers$$[$i$$344$$].$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendAutomation$$.prototype.getDomElementForSubId = D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtLegendDefaults$$ = function $$DvtLegendDefaults$$$() {
  this.Init({skyros:D.$DvtLegendDefaults$VERSION_1$$, alta:D.$DvtLegendDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtLegendDefaults");
D.$DvtLegendDefaults$SKIN_ALTA$$ = {skin:"alta", textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"), colors:D.$DvtCSSStyle$COLORS_ALTA$$};
D.$DvtLegendDefaults$VERSION_1$$ = {skin:"skyros", orientation:"vertical", position:D.$JSCompiler_alias_NULL$$, backgroundColor:D.$JSCompiler_alias_NULL$$, borderColor:D.$JSCompiler_alias_NULL$$, textStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), titleStyle:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b;"), titleHalign:"start", hideAndShowBehavior:"none", hoverBehavior:"none", scrolling:"asNeeded", colors:D.$DvtCSSStyle$COLORS_SKYROS$$, markerShape:"square", lineWidth:3, layout:{gapRatio:1, 
outerGapWidth:3, outerGapHeight:3, titleGap:3, markerSize:10, markerGap:5, rowGap:0, columnGap:8, sectionGap:6}, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtLegendDefaults$getGapSize$$ = function $$DvtLegendDefaults$getGapSize$$$($options$$50$$, $defaultSize$$1$$) {
  return window.Math.ceil($defaultSize$$1$$ * $options$$50$$.layout.gapRatio)
};
D.$DvtLegendEventManager$$ = function $$DvtLegendEventManager$$$($legend$$25$$) {
  this.Init($legend$$25$$.$_context$, $legend$$25$$.$processEvent$, $legend$$25$$);
  this.$_legend$ = $legend$$25$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendEventManager$$, D.$DvtEventManager$$, "DvtLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$155$$, $logicalObj$$9$$) {
  var $id$$inline_3698_params$$8$$ = D.$JSCompiler_alias_NULL$$;
  $logicalObj$$9$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$9$$.$getParams$() != D.$JSCompiler_alias_NULL$$ ? $id$$inline_3698_params$$8$$ = $logicalObj$$9$$.$getParams$() : $logicalObj$$9$$ instanceof D.$DvtLegendObjPeer$$ && ($id$$inline_3698_params$$8$$ = $logicalObj$$9$$.getId(), $id$$inline_3698_params$$8$$ = {type:D.$DvtLegendConstants$$.$LEGEND_ITEM$, id:$id$$inline_3698_params$$8$$});
  this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$155$$, $id$$inline_3698_params$$8$$), this.$_legend$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$304$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$304$$);
  var $action$$2_obj$$230$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$304$$.target);
  if($action$$2_obj$$230$$) {
    var $hideShow$$ = this.$_processHideShowEvent$($action$$2_obj$$230$$), $action$$2_obj$$230$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$2_obj$$230$$);
    ($hideShow$$ || $action$$2_obj$$230$$) && $event$$304$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$305$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$305$$);
  var $obj$$231$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$305$$.target);
  $obj$$231$$ && this.$_processRolloverEvent$($obj$$231$$, D.$JSCompiler_alias_TRUE$$) && $event$$305$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$306$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$306$$);
  var $obj$$232$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$306$$.target);
  $obj$$232$$ && this.$_processRolloverEvent$($obj$$232$$, D.$JSCompiler_alias_FALSE$$) && $event$$306$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$39_touchEvent$$6$$) {
  var $action$$3_obj$$233$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$39_touchEvent$$6$$.target);
  if($action$$3_obj$$233$$) {
    $evt$$39_touchEvent$$6$$ = $evt$$39_touchEvent$$6$$.$touchEvent$;
    var $hideShow$$1$$ = this.$_processHideShowEvent$($action$$3_obj$$233$$), $action$$3_obj$$233$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$3_obj$$233$$);
    ($hideShow$$1$$ || $action$$3_obj$$233$$) && $evt$$39_touchEvent$$6$$ && $evt$$39_touchEvent$$6$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$307$$) {
  var $obj$$234$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$307$$.target);
  this.$_processRolloverEvent$($obj$$234$$, D.$JSCompiler_alias_TRUE$$) && $event$$307$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$308$$) {
  var $obj$$235$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$308$$.target);
  this.$_processRolloverEvent$($obj$$235$$, D.$JSCompiler_alias_FALSE$$) && $event$$308$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$309$$) {
  var $obj$$236$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$309$$.target);
  this.$_processRolloverEvent$($obj$$236$$, D.$JSCompiler_alias_TRUE$$) && $event$$309$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($event$$310$$) {
  var $obj$$237$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$310$$.target);
  this.$_processRolloverEvent$($obj$$237$$, D.$JSCompiler_alias_FALSE$$) && $event$$310$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$_processHideShowEvent$ = function $$JSCompiler_prototypeAlias$$$$_processHideShowEvent$$($dataItem_obj$$238$$) {
  if("none" == this.$_legend$.$__getOptions$().hideAndShowBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$3_id$$166$$ = $dataItem_obj$$238$$.$getCategories$ ? $dataItem_obj$$238$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$3_id$$166$$ || 0 >= $categories$$3_id$$166$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $displayables$$10$$ = $dataItem_obj$$238$$.$getDisplayables$(), $i$$345$$ = 0;$i$$345$$ < $displayables$$10$$.length;$i$$345$$++) {
    var $displayable$$43$$ = $displayables$$10$$[$i$$345$$];
    $displayable$$43$$ instanceof D.$DvtMarker$$ && $displayable$$43$$.$setHollow$($dataItem_obj$$238$$.$getColor$())
  }
  $categories$$3_id$$166$$ = $categories$$3_id$$166$$[0];
  $dataItem_obj$$238$$ = $dataItem_obj$$238$$.getData();
  "hidden" == $dataItem_obj$$238$$.categoryVisibility ? ($dataItem_obj$$238$$.categoryVisibility = "visible", this.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$, $categories$$3_id$$166$$), this.$_legend$)) : ($dataItem_obj$$238$$.categoryVisibility = "hidden", this.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$, $categories$$3_id$$166$$), this.$_legend$));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__processActionEvent$$ = function $$JSCompiler_StaticMethods__processActionEvent$$$($JSCompiler_StaticMethods__processActionEvent$self$$, $obj$$239$$) {
  return $obj$$239$$ && $obj$$239$$.$getAction$ && $obj$$239$$.$_action$ ? ($JSCompiler_StaticMethods__processActionEvent$self$$.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$239$$.$_action$, $obj$$239$$.getId()), $JSCompiler_StaticMethods__processActionEvent$self$$.$_legend$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtLegendEventManager$$.prototype.$_processRolloverEvent$ = function $$DvtLegendEventManager$$$$$_processRolloverEvent$$($obj$$240$$, $bOver$$) {
  if("none" == this.$_legend$.$__getOptions$().hoverBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$4$$ = $obj$$240$$ && $obj$$240$$.$getCategories$ ? $obj$$240$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$4$$ || 0 >= $categories$$4$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  this.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($bOver$$ ? "categoryRollOver" : "categoryRollOut", $categories$$4$$[0]), this.$_legend$);
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtLegendObjPeer$$ = function $$DvtLegendObjPeer$$$($legend$$26$$, $displayables$$11$$, $id$$167$$, $tooltip$$20$$) {
  this.Init($legend$$26$$, $displayables$$11$$, $id$$167$$, $tooltip$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendObjPeer$$, D.$DvtObj$$, "DvtLegendObjPeer");
D.$DvtLegendObjPeer$$.prototype.Init = function $$DvtLegendObjPeer$$$$Init$($i$$346_legend$$27$$, $displayables$$12$$, $item$$18$$, $tooltip$$21$$) {
  this.$_legend$ = $i$$346_legend$$27$$;
  this.$_displayables$ = $displayables$$12$$;
  this.$_item$ = $item$$18$$;
  this.$_id$ = $item$$18$$.id ? $item$$18$$.id : $item$$18$$.text;
  this.$_action$ = $item$$18$$.action;
  this.$_spb$ = $item$$18$$._spb;
  this.$_tooltip$ = $tooltip$$21$$;
  if(this.$_action$) {
    for($i$$346_legend$$27$$ = 0;$i$$346_legend$$27$$ < this.$_displayables$.length;$i$$346_legend$$27$$++) {
      this.$_displayables$[$i$$346_legend$$27$$].setCursor("pointer")
    }
  }
};
D.$DvtLegendObjPeer$associate$$ = function $$DvtLegendObjPeer$associate$$$($displayables$$13$$, $legend$$28$$, $identObj_item$$19$$, $i$$347_tooltip$$22$$) {
  if(!$displayables$$13$$ || !$identObj_item$$19$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $identObj_item$$19$$ = new D.$DvtLegendObjPeer$$($legend$$28$$, $displayables$$13$$, $identObj_item$$19$$, $i$$347_tooltip$$22$$);
  $legend$$28$$.$__registerObject$($identObj_item$$19$$);
  for($i$$347_tooltip$$22$$ = 0;$i$$347_tooltip$$22$$ < $displayables$$13$$.length;$i$$347_tooltip$$22$$++) {
    $legend$$28$$.$__getEventManager$().$associate$($displayables$$13$$[$i$$347_tooltip$$22$$], $identObj_item$$19$$)
  }
  return $identObj_item$$19$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_item$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_item$.color
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[this.$_id$]
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_spb$");
D.$DvtLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendRenderer$$, D.$DvtObj$$, "DvtLegendRenderer");
D.$DvtLegendRenderer$$.$_DEFAULT_ITEM_WIDTH$ = 10;
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$ = 5;
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$ = 2;
D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE$ = 6;
D.$DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($legend$$10$$, $availSpace$$26$$) {
  var $options$$39$$ = $legend$$10$$.$__getOptions$(), $gapWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$39$$, $options$$39$$.layout.outerGapWidth), $gapHeight$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$39$$, $options$$39$$.layout.outerGapHeight), $legendSpace_sectionsDim$$ = new D.$DvtRectangle$$($availSpace$$26$$.x + $gapWidth$$, $availSpace$$26$$.y + $gapHeight$$, $availSpace$$26$$.$w$ - 2 * $gapWidth$$, $availSpace$$26$$.$h$ - 2 * $gapHeight$$);
  $legend$$10$$.$__setBounds$($legendSpace_sectionsDim$$.clone());
  if(0 >= $legendSpace_sectionsDim$$.$w$) {
    return new D.$DvtDimension$$(0, 0)
  }
  var $background$$4$$;
  $options$$39$$.isLayout || ($background$$4$$ = D.$DvtLegendRenderer$$.$_createBackground$($legend$$10$$, $availSpace$$26$$));
  var $isHoriz$$3_totalDim$$ = "vertical" == $options$$39$$.orientation ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$, $titleDim$$2$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$10$$, $options$$39$$.title, $legendSpace_sectionsDim$$, D.$JSCompiler_alias_NULL$$);
  $legendSpace_sectionsDim$$.y += $titleDim$$2$$.$h$;
  $legendSpace_sectionsDim$$.$h$ -= window.Math.floor($titleDim$$2$$.$h$);
  var $container$$42_rowHeight$$ = D.$DvtLegendRenderer$$.$_getRowHeight$($legend$$10$$), $bScrollable$$ = "off" !== $options$$39$$.scrolling, $legendSpace_sectionsDim$$ = $isHoriz$$3_totalDim$$ ? D.$DvtLegendRenderer$$.$_renderHorizontalSections$($legend$$10$$, $legendSpace_sectionsDim$$, $container$$42_rowHeight$$) : D.$DvtLegendRenderer$$.$_renderVerticalSections$($legend$$10$$, $legendSpace_sectionsDim$$, $container$$42_rowHeight$$, $bScrollable$$), $isHoriz$$3_totalDim$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($titleDim$$2$$, 
  $legendSpace_sectionsDim$$);
  if(0 >= $legend$$10$$.$_scrollableSections$.length) {
    for($container$$42_rowHeight$$ = new D.$DvtContainer$$($legend$$10$$.$_context$);0 < $legend$$10$$.$getNumChildren$();) {
      $container$$42_rowHeight$$.$addChild$($legend$$10$$.$getChildAt$(0))
    }
    $legend$$10$$.$addChild$($container$$42_rowHeight$$);
    $container$$42_rowHeight$$.$setTranslateX$(($availSpace$$26$$.$w$ - $isHoriz$$3_totalDim$$.$w$) / 2 - $isHoriz$$3_totalDim$$.x)
  }
  $background$$4$$ && $legend$$10$$.$addChildAt$($background$$4$$, 0);
  return $options$$39$$.isLayout ? new D.$DvtDimension$$(window.Math.max($titleDim$$2$$.$w$, $legendSpace_sectionsDim$$.$w$) + 2 * $gapWidth$$, $isHoriz$$3_totalDim$$.$h$ + 2 * $gapHeight$$) : new D.$DvtDimension$$($isHoriz$$3_totalDim$$.$w$ + 2 * $gapWidth$$, $isHoriz$$3_totalDim$$.$h$ + 2 * $gapHeight$$)
};
D.$DvtLegendRenderer$$.$_createBackground$ = function $$DvtLegendRenderer$$$$_createBackground$$($legend$$11$$, $availSpace$$27$$) {
  var $options$$40$$ = $legend$$11$$.$__getOptions$(), $rect$$17$$;
  $options$$40$$.backgroundColor && ($rect$$17$$ = $rect$$17$$ ? $rect$$17$$ : new D.$DvtRect$$($legend$$11$$.$_context$, $availSpace$$27$$.x, $availSpace$$27$$.y, $availSpace$$27$$.$w$, $availSpace$$27$$.$h$), $rect$$17$$.$setSolidFill$($options$$40$$.backgroundColor));
  $options$$40$$.borderColor && ($rect$$17$$ = $rect$$17$$ ? $rect$$17$$ : new D.$DvtRect$$($legend$$11$$.$_context$, $availSpace$$27$$.x, $availSpace$$27$$.y, $availSpace$$27$$.$w$, $availSpace$$27$$.$h$), $rect$$17$$.$setSolidStroke$($options$$40$$.borderColor), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($rect$$17$$));
  $rect$$17$$ && $legend$$11$$.$__getEventManager$().$associate$($rect$$17$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$BACKGROUND$, id:D.$JSCompiler_alias_VOID$$}));
  return $rect$$17$$
};
D.$DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($legend$$12$$, $title$$9_titleStr$$, $availSpace$$28$$, $section$$10$$) {
  var $options$$41$$ = $legend$$12$$.$__getOptions$();
  if(!$title$$9_titleStr$$) {
    return new D.$DvtRectangle$$($availSpace$$28$$.x, $availSpace$$28$$.y, 0, 0)
  }
  $title$$9_titleStr$$ = new D.$DvtOutputText$$($legend$$12$$.$_context$, $title$$9_titleStr$$, $availSpace$$28$$.x, $availSpace$$28$$.y);
  var $titleDims_titleStyle$$ = $section$$10$$ && $section$$10$$.titleStyle ? new D.$DvtCSSStyle$$($section$$10$$.titleStyle) : $options$$41$$.titleStyle;
  $title$$9_titleStr$$.$setCSSStyle$($titleDims_titleStyle$$);
  if(D.$DvtTextUtils$$.$fitText$($title$$9_titleStr$$, $availSpace$$28$$.$w$, $availSpace$$28$$.$h$, $legend$$12$$)) {
    $legend$$12$$.$__getEventManager$().$associate$($title$$9_titleStr$$, new D.$DvtSimpleObjPeer$$($title$$9_titleStr$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$}));
    var $titleDims_titleStyle$$ = $title$$9_titleStr$$.$measureDimensions$(), $gap$$6$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$41$$, $options$$41$$.layout.titleGap);
    $options$$41$$.isLayout ? $legend$$12$$.removeChild($title$$9_titleStr$$) : (0,D.$DvtLayoutUtils$align$$)($availSpace$$28$$, $section$$10$$ && $section$$10$$.titleHalign ? $section$$10$$.titleHalign : $options$$41$$.titleHalign, $title$$9_titleStr$$, $titleDims_titleStyle$$.$w$);
    $titleDims_titleStyle$$.$h$ += $gap$$6$$;
    return $titleDims_titleStyle$$
  }
  return new D.$DvtRectangle$$($availSpace$$28$$.x, $availSpace$$28$$.y, 0, 0)
};
D.$DvtLegendRenderer$$.$_getLegendSections$ = function $$DvtLegendRenderer$$$$_getLegendSections$$($section$$11$$, $sections$$2$$) {
  var $nestedSections$$ = $section$$11$$.sections;
  $sections$$2$$.push($section$$11$$);
  if($nestedSections$$) {
    for(var $i$$335$$ = 0;$i$$335$$ < $nestedSections$$.length;$i$$335$$++) {
      D.$DvtLegendRenderer$$.$_getLegendSections$($nestedSections$$[$i$$335$$], $sections$$2$$)
    }
  }
};
D.$DvtLegendRenderer$$.$_renderVerticalSections$ = function $$DvtLegendRenderer$$$$_renderVerticalSections$$($legend$$13$$, $availSpace$$29_sectionSpace$$, $rowHeight$$1$$, $bScrollable$$1$$) {
  for(var $options$$42_sectionGap$$ = $legend$$13$$.$__getOptions$(), $sectionHeights$$ = D.$DvtLegendRenderer$$.$_calcSectionHeights$($legend$$13$$, $availSpace$$29_sectionSpace$$, $rowHeight$$1$$, $bScrollable$$1$$), $legendSections$$ = [], $i$$336$$ = 0;$i$$336$$ < $options$$42_sectionGap$$.sections.length;$i$$336$$++) {
    D.$DvtLegendRenderer$$.$_getLegendSections$($options$$42_sectionGap$$.sections[$i$$336$$], $legendSections$$)
  }
  var $numSections$$ = $legendSections$$.length, $options$$42_sectionGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$42_sectionGap$$, $options$$42_sectionGap$$.layout.sectionGap);
  $availSpace$$29_sectionSpace$$ = $availSpace$$29_sectionSpace$$.clone();
  for(var $totalDim$$1$$ = D.$JSCompiler_alias_NULL$$, $sectionDim$$, $i$$336$$ = 0;$i$$336$$ < $legendSections$$.length;$i$$336$$++) {
    $availSpace$$29_sectionSpace$$.$h$ = $sectionHeights$$[$i$$336$$], $sectionDim$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$13$$, $legendSections$$[$i$$336$$], $i$$336$$, $availSpace$$29_sectionSpace$$, $rowHeight$$1$$, $bScrollable$$1$$), $i$$336$$ != $numSections$$ - 1 && $legendSections$$[$i$$336$$].items && ($availSpace$$29_sectionSpace$$.y += $sectionDim$$.$h$ + $options$$42_sectionGap$$), $totalDim$$1$$ = $totalDim$$1$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$1$$, 
    $sectionDim$$) : $sectionDim$$
  }
  return $totalDim$$1$$
};
D.$DvtLegendRenderer$$.$_renderHorizontalSections$ = function $$DvtLegendRenderer$$$$_renderHorizontalSections$$($legend$$14$$, $availSpace$$30$$, $rowHeight$$2$$) {
  for(var $options$$43_sectionSpace$$1$$ = $legend$$14$$.$__getOptions$(), $isRTL$$5$$ = D.$DvtAgent$$.$isRightToLeft$($legend$$14$$.$_context$), $legendWidth$$ = 0, $legendSections$$1$$ = [], $i$$337_j$$34$$ = 0;$i$$337_j$$34$$ < $options$$43_sectionSpace$$1$$.sections.length;$i$$337_j$$34$$++) {
    D.$DvtLegendRenderer$$.$_getLegendSections$($options$$43_sectionSpace$$1$$.sections[$i$$337_j$$34$$], $legendSections$$1$$)
  }
  for(var $numSections$$1$$ = $legendSections$$1$$.length, $totalItems$$ = 0, $i$$337_j$$34$$ = 0;$i$$337_j$$34$$ < $legendSections$$1$$.length;$i$$337_j$$34$$++) {
    $legendSections$$1$$[$i$$337_j$$34$$].items && ($totalItems$$ += $legendSections$$1$$[$i$$337_j$$34$$].items.length)
  }
  var $sectionGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$43_sectionSpace$$1$$, $options$$43_sectionSpace$$1$$.layout.sectionGap), $maxWidth$$13$$ = $availSpace$$30$$.$w$ - $sectionGap$$1$$ * ($numSections$$1$$ - 1), $sectionDim$$1_sectionItems_sectionMaxWidth$$, $totalDim$$2$$;
  if($options$$43_sectionSpace$$1$$.sections) {
    for(var $nestedSectionCounter$$ = 0, $outerSectionTitleHeight$$ = 0, $i$$337_j$$34$$ = 0;$i$$337_j$$34$$ < $numSections$$1$$;$i$$337_j$$34$$++) {
      $options$$43_sectionSpace$$1$$ = $availSpace$$30$$.clone(), ($sectionDim$$1_sectionItems_sectionMaxWidth$$ = $legendSections$$1$$[$i$$337_j$$34$$].items) ? ($sectionDim$$1_sectionItems_sectionMaxWidth$$ = window.Math.round($sectionDim$$1_sectionItems_sectionMaxWidth$$.length / $totalItems$$ * $maxWidth$$13$$), $options$$43_sectionSpace$$1$$.$w$ = $sectionDim$$1_sectionItems_sectionMaxWidth$$, $options$$43_sectionSpace$$1$$.x = $isRTL$$5$$ ? $availSpace$$30$$.x + $availSpace$$30$$.$w$ - $legendWidth$$ - 
      $options$$43_sectionSpace$$1$$.$w$ : $availSpace$$30$$.x + $legendWidth$$, 0 < $nestedSectionCounter$$ && ($options$$43_sectionSpace$$1$$.y += $outerSectionTitleHeight$$, $options$$43_sectionSpace$$1$$.$h$ -= $outerSectionTitleHeight$$), $sectionDim$$1_sectionItems_sectionMaxWidth$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$14$$, $legendSections$$1$$[$i$$337_j$$34$$], $i$$337_j$$34$$, $options$$43_sectionSpace$$1$$, $rowHeight$$2$$, D.$JSCompiler_alias_FALSE$$), 0 < $nestedSectionCounter$$ && 
      ($options$$43_sectionSpace$$1$$.$h$ += $outerSectionTitleHeight$$, $nestedSectionCounter$$--), $legendWidth$$ += $sectionDim$$1_sectionItems_sectionMaxWidth$$.$w$, $i$$337_j$$34$$ != $numSections$$1$$ - 1 && ($legendWidth$$ += $sectionGap$$1$$)) : ($options$$43_sectionSpace$$1$$.$w$ = $availSpace$$30$$.$w$ - $legendWidth$$, $options$$43_sectionSpace$$1$$.x = $isRTL$$5$$ ? $availSpace$$30$$.x : $availSpace$$30$$.x + $legendWidth$$, $sectionDim$$1_sectionItems_sectionMaxWidth$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$14$$, 
      $legendSections$$1$$[$i$$337_j$$34$$], $i$$337_j$$34$$, $options$$43_sectionSpace$$1$$, $rowHeight$$2$$, D.$JSCompiler_alias_FALSE$$), $outerSectionTitleHeight$$ = $sectionDim$$1_sectionItems_sectionMaxWidth$$.$h$, $nestedSectionCounter$$ = $legendSections$$1$$[$i$$337_j$$34$$].sections.length), $totalDim$$2$$ = $totalDim$$2$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$2$$, $sectionDim$$1_sectionItems_sectionMaxWidth$$) : $sectionDim$$1_sectionItems_sectionMaxWidth$$
    }
  }
  return $totalDim$$2$$
};
D.$DvtLegendRenderer$$.$_renderSection$ = function $$DvtLegendRenderer$$$$_renderSection$$($legend$$15$$, $section$$12$$, $i$$338_sectionIndex$$, $availSectionSpace_totalWidth$$, $rowHeight$$3$$, $bScrollable$$2_item$$10$$) {
  if($section$$12$$) {
    var $availSpace$$31$$ = $availSectionSpace_totalWidth$$.clone(), $options$$44$$ = $legend$$15$$.$__getOptions$(), $context$$431$$ = $legend$$15$$.$_context$, $initAvailY$$ = $availSpace$$31$$.y, $markerSize$$ = $options$$44$$.layout.markerSize, $markerGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$44$$, $options$$44$$.layout.markerGap), $rowGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$44$$, $options$$44$$.layout.rowGap), $colGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$44$$, 
    $options$$44$$.layout.columnGap), $titleDim$$3$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$15$$, $section$$12$$.title, $availSpace$$31$$, $section$$12$$);
    $availSpace$$31$$.y += $titleDim$$3$$.$h$;
    if($section$$12$$.items) {
      $availSpace$$31$$.$h$ -= $titleDim$$3$$.$h$;
      var $initAvailY$$ = $initAvailY$$ + $titleDim$$3$$.$h$, $legendInfo_numItems$$2$$ = D.$DvtLegendRenderer$$.$_calcSectionSpace$($legend$$15$$, $availSpace$$31$$, $rowHeight$$3$$, $section$$12$$.items, $bScrollable$$2_item$$10$$), $numCols$$ = $legendInfo_numItems$$2$$.numCols, $numRows$$ = $legendInfo_numItems$$2$$.numRows, $colWidth_itemTextWidth$$ = $legendInfo_numItems$$2$$.width;
      $availSpace$$31$$.$h$ = window.Math.ceil(window.Math.min($availSpace$$31$$.$h$, $numRows$$ * ($rowHeight$$3$$ + $rowGap$$) - $rowGap$$) + $titleDim$$3$$.$h$);
      $availSpace$$31$$.$w$ = $colWidth_itemTextWidth$$ * $numCols$$ + $colGap$$ * ($numCols$$ - 1);
      if($options$$44$$.isLayout) {
        if(1 == $numRows$$) {
          for($i$$338_sectionIndex$$ = $availSectionSpace_totalWidth$$ = 0;$i$$338_sectionIndex$$ < $section$$12$$.items.length;$i$$338_sectionIndex$$++) {
            $bScrollable$$2_item$$10$$ = $section$$12$$.items[$i$$338_sectionIndex$$], $colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$15$$, $bScrollable$$2_item$$10$$.text)), $availSectionSpace_totalWidth$$ += $colWidth_itemTextWidth$$ + $markerSize$$ + $markerGap$$ + $colGap$$
          }
          $availSpace$$31$$.$w$ = $availSectionSpace_totalWidth$$ - $colGap$$
        }
        return $availSpace$$31$$
      }
      if(0 == $numRows$$ || 0 == $numCols$$) {
        return $availSpace$$31$$
      }
      var $extraTextSpace_scrollableLegend$$ = D.$JSCompiler_alias_NULL$$, $container$$43_handle$$2$$ = $legend$$15$$, $fullLegendHeight_textSpace$$ = $numRows$$ * ($rowHeight$$3$$ + $rowGap$$) - $rowGap$$ + $titleDim$$3$$.$h$, $legendInfo_numItems$$2$$ = $section$$12$$.items.length;
      "vertical" === $options$$44$$.orientation && ($bScrollable$$2_item$$10$$ && $fullLegendHeight_textSpace$$ > $availSpace$$31$$.$h$) && ($container$$43_handle$$2$$ = D.$DvtLegendRenderer$$.$_createHandle$($legend$$15$$, $context$$431$$, $availSpace$$31$$, $i$$338_sectionIndex$$), $extraTextSpace_scrollableLegend$$ = D.$DvtLegendRenderer$$.$_createScrollableLegend$($legend$$15$$, $context$$431$$, $availSpace$$31$$, $container$$43_handle$$2$$, $fullLegendHeight_textSpace$$, $legendInfo_numItems$$2$$), 
      $legend$$15$$.$_scrollableSections$.push($extraTextSpace_scrollableLegend$$));
      var $fullLegendHeight_textSpace$$ = $colWidth_itemTextWidth$$ - $markerSize$$ - $markerGap$$, $isRTL$$6$$ = D.$DvtAgent$$.$isRightToLeft$($legend$$15$$.$_context$), $currRow$$ = 0, $currCol$$ = 1;
      if(1 == $numRows$$) {
        for($i$$338_sectionIndex$$ = $extraTextSpace_scrollableLegend$$ = 0;$i$$338_sectionIndex$$ < $legendInfo_numItems$$2$$;$i$$338_sectionIndex$$++) {
          $bScrollable$$2_item$$10$$ = $section$$12$$.items[$i$$338_sectionIndex$$], $colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$15$$, $bScrollable$$2_item$$10$$.text)), $colWidth_itemTextWidth$$ < $fullLegendHeight_textSpace$$ && ($extraTextSpace_scrollableLegend$$ += $fullLegendHeight_textSpace$$ - $colWidth_itemTextWidth$$)
        }
        for($i$$338_sectionIndex$$ = 0;$i$$338_sectionIndex$$ < $legendInfo_numItems$$2$$;$i$$338_sectionIndex$$++) {
          $bScrollable$$2_item$$10$$ = $section$$12$$.items[$i$$338_sectionIndex$$];
          var $itemRect_markerX_startX$$4$$ = $isRTL$$6$$ ? $availSpace$$31$$.x + $availSpace$$31$$.$w$ - $markerSize$$ : $availSpace$$31$$.x, $itemWidth_textX_tooltip$$19$$ = $isRTL$$6$$ ? $availSpace$$31$$.x + $availSpace$$31$$.$w$ - $markerSize$$ - $markerGap$$ : $availSpace$$31$$.x + $markerSize$$ + $markerGap$$, $marker$$10$$ = D.$DvtLegendRenderer$$.$_createLegendMarker$($legend$$15$$, $itemRect_markerX_startX$$4$$, $availSpace$$31$$.y, $rowHeight$$3$$, $markerSize$$, $bScrollable$$2_item$$10$$, 
          $i$$338_sectionIndex$$), $label$$25$$ = $bScrollable$$2_item$$10$$.text, $colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$15$$, $bScrollable$$2_item$$10$$.text)), $peer$$3_text$$57$$ = D.$JSCompiler_alias_NULL$$;
          $label$$25$$ && ($colWidth_itemTextWidth$$ < $fullLegendHeight_textSpace$$ ? $peer$$3_text$$57$$ = D.$DvtLegendRenderer$$.$_createLegendText$($legend$$15$$, $context$$431$$, $availSpace$$31$$, $fullLegendHeight_textSpace$$, $label$$25$$, $options$$44$$.textStyle) : ($peer$$3_text$$57$$ = D.$DvtLegendRenderer$$.$_createLegendText$($legend$$15$$, $context$$431$$, $availSpace$$31$$, $fullLegendHeight_textSpace$$ + $extraTextSpace_scrollableLegend$$, $label$$25$$, $options$$44$$.textStyle), 
          $peer$$3_text$$57$$ != D.$JSCompiler_alias_NULL$$ && ($colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$15$$, $peer$$3_text$$57$$.$getTextString$())), $extraTextSpace_scrollableLegend$$ -= $fullLegendHeight_textSpace$$ - $colWidth_itemTextWidth$$)), $colWidth_itemTextWidth$$ = $peer$$3_text$$57$$ != D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$15$$, $peer$$3_text$$57$$.$getTextString$())) : 0, $peer$$3_text$$57$$ && 
          ($peer$$3_text$$57$$.$setX$($itemWidth_textX_tooltip$$19$$), $peer$$3_text$$57$$.$setY$($availSpace$$31$$.y + $rowHeight$$3$$ / 2), $isRTL$$6$$ && $peer$$3_text$$57$$.$alignRight$()));
          $legend$$15$$.$addChild$($marker$$10$$);
          $colWidth_itemTextWidth$$ = $colWidth_itemTextWidth$$ + $markerSize$$ + $markerGap$$;
          $itemRect_markerX_startX$$4$$ = window.Math.min($itemRect_markerX_startX$$4$$, $itemWidth_textX_tooltip$$19$$);
          $itemWidth_textX_tooltip$$19$$ = $currCol$$ == $numCols$$ ? $colWidth_itemTextWidth$$ : $colWidth_itemTextWidth$$ + $colGap$$;
          $itemRect_markerX_startX$$4$$ = new D.$DvtRect$$($context$$431$$, $itemRect_markerX_startX$$4$$, $availSpace$$31$$.y, $itemWidth_textX_tooltip$$19$$, $rowHeight$$3$$);
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($itemRect_markerX_startX$$4$$);
          $container$$43_handle$$2$$.$addChild$($itemRect_markerX_startX$$4$$);
          $itemWidth_textX_tooltip$$19$$ = $peer$$3_text$$57$$ != D.$JSCompiler_alias_NULL$$ ? $peer$$3_text$$57$$.$_untruncatedTextString$ : D.$JSCompiler_alias_NULL$$;
          $peer$$3_text$$57$$ = (0,D.$DvtLegendObjPeer$associate$$)([$itemRect_markerX_startX$$4$$, $marker$$10$$, $peer$$3_text$$57$$], $legend$$15$$, $bScrollable$$2_item$$10$$, $itemWidth_textX_tooltip$$19$$);
          "hidden" == $bScrollable$$2_item$$10$$.categoryVisibility && $peer$$3_text$$57$$ && $marker$$10$$.$setHollow$($peer$$3_text$$57$$.$getColor$());
          $availSpace$$31$$.y += $rowHeight$$3$$ + $rowGap$$;
          $currRow$$++;
          $currRow$$ === $numRows$$ && $currCol$$ !== $numCols$$ && ($availSpace$$31$$.y = $initAvailY$$, $isRTL$$6$$ ? $availSpace$$31$$.$w$ -= $colWidth_itemTextWidth$$ + $colGap$$ : $availSpace$$31$$.x += $colWidth_itemTextWidth$$ + $colGap$$, $currRow$$ = 0, $currCol$$++)
        }
      }else {
        for($i$$338_sectionIndex$$ = 0;$i$$338_sectionIndex$$ < $legendInfo_numItems$$2$$;$i$$338_sectionIndex$$++) {
          $bScrollable$$2_item$$10$$ = $section$$12$$.items[$i$$338_sectionIndex$$];
          $itemRect_markerX_startX$$4$$ = $isRTL$$6$$ ? $availSpace$$31$$.x + $availSpace$$31$$.$w$ - $markerSize$$ : $availSpace$$31$$.x;
          $itemWidth_textX_tooltip$$19$$ = $isRTL$$6$$ ? $availSpace$$31$$.x + $availSpace$$31$$.$w$ - $markerSize$$ - $markerGap$$ : $availSpace$$31$$.x + $markerSize$$ + $markerGap$$;
          $marker$$10$$ = D.$DvtLegendRenderer$$.$_createLegendMarker$($legend$$15$$, $itemRect_markerX_startX$$4$$, $availSpace$$31$$.y, $rowHeight$$3$$, $markerSize$$, $bScrollable$$2_item$$10$$, $i$$338_sectionIndex$$);
          $label$$25$$ = $bScrollable$$2_item$$10$$.text;
          $peer$$3_text$$57$$ = D.$JSCompiler_alias_NULL$$;
          if($label$$25$$ && ($peer$$3_text$$57$$ = D.$DvtLegendRenderer$$.$_createLegendText$($container$$43_handle$$2$$, $context$$431$$, $availSpace$$31$$, $fullLegendHeight_textSpace$$, $label$$25$$, $options$$44$$.textStyle))) {
            $peer$$3_text$$57$$.$setX$($itemWidth_textX_tooltip$$19$$), $peer$$3_text$$57$$.$setY$($availSpace$$31$$.y + $rowHeight$$3$$ / 2), $isRTL$$6$$ && $peer$$3_text$$57$$.$alignRight$()
          }
          $container$$43_handle$$2$$.$addChild$($marker$$10$$);
          $itemRect_markerX_startX$$4$$ = window.Math.min($itemRect_markerX_startX$$4$$, $itemWidth_textX_tooltip$$19$$);
          $itemWidth_textX_tooltip$$19$$ = $currCol$$ == $numCols$$ ? $colWidth_itemTextWidth$$ : $colWidth_itemTextWidth$$ + $colGap$$;
          $itemRect_markerX_startX$$4$$ = new D.$DvtRect$$($context$$431$$, $itemRect_markerX_startX$$4$$, $availSpace$$31$$.y, $itemWidth_textX_tooltip$$19$$, $rowHeight$$3$$);
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($itemRect_markerX_startX$$4$$);
          $container$$43_handle$$2$$.$addChild$($itemRect_markerX_startX$$4$$);
          $itemWidth_textX_tooltip$$19$$ = $peer$$3_text$$57$$ != D.$JSCompiler_alias_NULL$$ ? $peer$$3_text$$57$$.$_untruncatedTextString$ : D.$JSCompiler_alias_NULL$$;
          $peer$$3_text$$57$$ = (0,D.$DvtLegendObjPeer$associate$$)([$itemRect_markerX_startX$$4$$, $marker$$10$$, $peer$$3_text$$57$$], $legend$$15$$, $bScrollable$$2_item$$10$$, $itemWidth_textX_tooltip$$19$$);
          $extraTextSpace_scrollableLegend$$ && $peer$$3_text$$57$$ instanceof D.$DvtLegendObjPeer$$ && $extraTextSpace_scrollableLegend$$.$__registerObject$($peer$$3_text$$57$$);
          "hidden" == $bScrollable$$2_item$$10$$.categoryVisibility && $peer$$3_text$$57$$ && $marker$$10$$.$setHollow$($peer$$3_text$$57$$.$getColor$());
          $availSpace$$31$$.y += $rowHeight$$3$$ + $rowGap$$;
          $currRow$$++;
          $currRow$$ === $numRows$$ && $currCol$$ !== $numCols$$ && ($availSpace$$31$$.y = $initAvailY$$, $isRTL$$6$$ ? $availSpace$$31$$.$w$ -= $colWidth_itemTextWidth$$ + $colGap$$ : $availSpace$$31$$.x += $colWidth_itemTextWidth$$ + $colGap$$, $currRow$$ = 0, $currCol$$++)
        }
      }
      $availSpace$$31$$.y = $initAvailY$$ + $availSpace$$31$$.$h$ - $titleDim$$3$$.height;
      return new D.$DvtRectangle$$($availSectionSpace_totalWidth$$.x, $initAvailY$$ - $titleDim$$3$$.height, $availSectionSpace_totalWidth$$.$w$, $availSpace$$31$$.$h$)
    }
    $availSpace$$31$$.$h$ = $titleDim$$3$$.$h$
  }
};
D.$DvtLegendRenderer$$.$_calcSectionHeights$ = function $$DvtLegendRenderer$$$$_calcSectionHeights$$($legend$$16$$, $availSpace$$32$$, $rowHeight$$4$$, $bScrollable$$3$$) {
  var $options$$45$$ = $legend$$16$$.$__getOptions$(), $isLayout$$ = $options$$45$$.isLayout;
  $options$$45$$.isLayout = D.$JSCompiler_alias_TRUE$$;
  for(var $legendHeight$$3$$ = 0, $legendWidth$$1$$ = 0, $legendX$$ = $availSpace$$32$$.x, $legendY$$ = $availSpace$$32$$.y, $legendSections$$2$$ = [], $i$$339$$ = 0;$i$$339$$ < $options$$45$$.sections.length;$i$$339$$++) {
    D.$DvtLegendRenderer$$.$_getLegendSections$($options$$45$$.sections[$i$$339$$], $legendSections$$2$$)
  }
  for(var $numSections$$2$$ = $legendSections$$2$$.length, $sectionGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$45$$, $options$$45$$.layout.sectionGap), $maxHeight$$10_spaceNeeded$$ = $availSpace$$32$$.$h$ - $sectionGap$$2$$ * ($numSections$$2$$ - 1), $maxWidth$$14$$ = $availSpace$$32$$.$w$, $arSectionSpace$$ = [], $equalSpace_sectionDim$$2_splitSpace$$, $i$$339$$ = 0;$i$$339$$ < $numSections$$2$$;$i$$339$$++) {
    $availSpace$$32$$.$h$ = $maxHeight$$10_spaceNeeded$$, $availSpace$$32$$.$w$ = $maxWidth$$14$$, $equalSpace_sectionDim$$2_splitSpace$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$16$$, $legendSections$$2$$[$i$$339$$], $i$$339$$, $availSpace$$32$$, $rowHeight$$4$$, $bScrollable$$3$$), $arSectionSpace$$[$i$$339$$] = $equalSpace_sectionDim$$2_splitSpace$$.$h$
  }
  window.arSectionSpaceNeeded = [];
  window.extraSpace = window.numShortSections = 0;
  $equalSpace_sectionDim$$2_splitSpace$$ = $maxHeight$$10_spaceNeeded$$ / $numSections$$2$$;
  for($i$$339$$ = 0;$i$$339$$ < $numSections$$2$$;$i$$339$$++) {
    $maxHeight$$10_spaceNeeded$$ = $arSectionSpace$$[$i$$339$$] - $equalSpace_sectionDim$$2_splitSpace$$, 0 >= $maxHeight$$10_spaceNeeded$$ ? (window.arSectionSpaceNeeded[$i$$339$$] = 0, window.extraSpace -= $maxHeight$$10_spaceNeeded$$) : ($arSectionSpace$$[$i$$339$$] = $equalSpace_sectionDim$$2_splitSpace$$, window.arSectionSpaceNeeded[$i$$339$$] = $maxHeight$$10_spaceNeeded$$, window.numShortSections++)
  }
  for(;0 < window.extraSpace && 0 < window.numShortSections;) {
    $equalSpace_sectionDim$$2_splitSpace$$ = window.extraSpace / window.numShortSections;
    for($i$$339$$ = 0;$i$$339$$ < $numSections$$2$$;$i$$339$$++) {
      0 < window.arSectionSpaceNeeded[$i$$339$$] && ($maxHeight$$10_spaceNeeded$$ = window.arSectionSpaceNeeded[$i$$339$$] - $equalSpace_sectionDim$$2_splitSpace$$, 0 >= $maxHeight$$10_spaceNeeded$$ ? ($arSectionSpace$$[$i$$339$$] += window.arSectionSpaceNeeded[$i$$339$$], window.arSectionSpaceNeeded[$i$$339$$] = 0, window.extraSpace -= $equalSpace_sectionDim$$2_splitSpace$$ + $maxHeight$$10_spaceNeeded$$, window.numShortSections--) : ($arSectionSpace$$[$i$$339$$] += $equalSpace_sectionDim$$2_splitSpace$$, 
      window.extraSpace -= $equalSpace_sectionDim$$2_splitSpace$$, window.arSectionSpaceNeeded[$i$$339$$] = $maxHeight$$10_spaceNeeded$$))
    }
  }
  $availSpace$$32$$.x = $legendX$$;
  $availSpace$$32$$.y = $legendY$$;
  $availSpace$$32$$.$w$ = $maxWidth$$14$$;
  for($i$$339$$ = 0;$i$$339$$ < $numSections$$2$$;$i$$339$$++) {
    $availSpace$$32$$.$h$ = $arSectionSpace$$[$i$$339$$], D.$DvtLegendRenderer$$.$_renderSection$($legend$$16$$, $legendSections$$2$$[$i$$339$$], $i$$339$$, $availSpace$$32$$, $rowHeight$$4$$, $bScrollable$$3$$), $availSpace$$32$$.x = $legendX$$, $legendWidth$$1$$ = window.Math.max($availSpace$$32$$.$w$, $legendWidth$$1$$), $legendHeight$$3$$ += $availSpace$$32$$.$h$, $i$$339$$ != $numSections$$2$$ - 1 && ($availSpace$$32$$.y = $availSpace$$32$$.$h$ + $legendY$$ + $sectionGap$$2$$, $legendHeight$$3$$ += 
    $sectionGap$$2$$)
  }
  $availSpace$$32$$.$w$ = $legendWidth$$1$$;
  $availSpace$$32$$.$h$ = $legendHeight$$3$$;
  $availSpace$$32$$.x = $legendX$$;
  $availSpace$$32$$.y = $legendY$$;
  $options$$45$$.isLayout = $isLayout$$;
  return $arSectionSpace$$
};
D.$DvtLegendRenderer$$.$_calcSectionSpace$ = function $$DvtLegendRenderer$$$$_calcSectionSpace$$($legend$$17_markerSize$$1$$, $availSpace$$33_colWidth$$1$$, $rowHeight$$5$$, $items$$, $bScrollable$$4_numRows$$1$$) {
  for(var $numCols$$1_options$$46$$ = $legend$$17_markerSize$$1$$.$__getOptions$(), $fullColWidth_textWidth$$1$$ = 0, $i$$340_rowGap$$1$$ = 0;$i$$340_rowGap$$1$$ < $items$$.length;$i$$340_rowGap$$1$$++) {
    var $colGap$$1_tempWidth$$ = D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$17_markerSize$$1$$, $items$$[$i$$340_rowGap$$1$$].text);
    $colGap$$1_tempWidth$$ > $fullColWidth_textWidth$$1$$ && ($fullColWidth_textWidth$$1$$ = $colGap$$1_tempWidth$$)
  }
  $legend$$17_markerSize$$1$$ = $numCols$$1_options$$46$$.layout.markerSize;
  var $markerGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($numCols$$1_options$$46$$, $numCols$$1_options$$46$$.layout.markerGap), $i$$340_rowGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($numCols$$1_options$$46$$, $numCols$$1_options$$46$$.layout.rowGap), $colGap$$1_tempWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($numCols$$1_options$$46$$, $numCols$$1_options$$46$$.layout.columnGap), $fullColWidth_textWidth$$1$$ = $numCols$$1_options$$46$$.isLayout ? window.Math.ceil($legend$$17_markerSize$$1$$ + 
  $markerGap$$1$$ + $fullColWidth_textWidth$$1$$) : $availSpace$$33_colWidth$$1$$.$w$;
  "vertical" == $numCols$$1_options$$46$$.orientation ? $bScrollable$$4_numRows$$1$$ ? ($numCols$$1_options$$46$$ = 1, $bScrollable$$4_numRows$$1$$ = $items$$.length) : ($bScrollable$$4_numRows$$1$$ = window.Math.min(window.Math.floor(($availSpace$$33_colWidth$$1$$.$h$ + $i$$340_rowGap$$1$$) / ($rowHeight$$5$$ + $i$$340_rowGap$$1$$)), $items$$.length), $numCols$$1_options$$46$$ = window.Math.ceil($items$$.length / $bScrollable$$4_numRows$$1$$)) : ($numCols$$1_options$$46$$ = window.Math.min(window.Math.floor($availSpace$$33_colWidth$$1$$.$w$ / 
  $fullColWidth_textWidth$$1$$), $items$$.length), $bScrollable$$4_numRows$$1$$ = window.Math.ceil((($fullColWidth_textWidth$$1$$ + $colGap$$1_tempWidth$$) * $items$$.length - $colGap$$1_tempWidth$$) / $availSpace$$33_colWidth$$1$$.$w$), $bScrollable$$4_numRows$$1$$ * ($rowHeight$$5$$ + $i$$340_rowGap$$1$$) - $i$$340_rowGap$$1$$ > $availSpace$$33_colWidth$$1$$.$h$ && ($bScrollable$$4_numRows$$1$$ = window.Math.floor(window.Math.ceil($availSpace$$33_colWidth$$1$$.$h$ + $i$$340_rowGap$$1$$) / ($rowHeight$$5$$ + 
  $i$$340_rowGap$$1$$)), $numCols$$1_options$$46$$ = window.Math.ceil($items$$.length / $bScrollable$$4_numRows$$1$$)));
  $availSpace$$33_colWidth$$1$$ = window.Math.min($fullColWidth_textWidth$$1$$, ($availSpace$$33_colWidth$$1$$.$w$ - $colGap$$1_tempWidth$$ * ($numCols$$1_options$$46$$ - 1)) / $numCols$$1_options$$46$$);
  return $availSpace$$33_colWidth$$1$$ < $legend$$17_markerSize$$1$$ ? {width:0, height:0, numCols:0, numRows:0} : {width:$availSpace$$33_colWidth$$1$$, numCols:$numCols$$1_options$$46$$, numRows:$bScrollable$$4_numRows$$1$$}
};
D.$DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($dims$$25_legend$$18_text$$58$$) {
  var $options$$47$$ = $dims$$25_legend$$18_text$$58$$.$__getOptions$();
  $dims$$25_legend$$18_text$$58$$ = new D.$DvtOutputText$$($dims$$25_legend$$18_text$$58$$.$_context$, "Test");
  $dims$$25_legend$$18_text$$58$$.$setCSSStyle$($options$$47$$.textStyle);
  $dims$$25_legend$$18_text$$58$$.$alignMiddle$();
  $dims$$25_legend$$18_text$$58$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$25_legend$$18_text$$58$$);
  return window.Math.ceil(window.Math.max($dims$$25_legend$$18_text$$58$$.$h$, $options$$47$$.layout.markerSize))
};
D.$DvtLegendRenderer$$.$_getTextWidth$ = function $$DvtLegendRenderer$$$$_getTextWidth$$($legend$$19$$, $label$$26$$) {
  var $options$$48$$ = $legend$$19$$.$__getOptions$(), $text$$59$$ = new D.$DvtOutputText$$($legend$$19$$.$_context$, $label$$26$$);
  $text$$59$$.$setCSSStyle$($options$$48$$.textStyle);
  return $text$$59$$.$measureDimensions$().$w$
};
D.$DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($legend$$20$$, $context$$432_text$$60$$, $availSpace$$34$$, $textSpace$$1$$, $label$$27$$, $style$$71$$) {
  $context$$432_text$$60$$ = new D.$DvtOutputText$$($context$$432_text$$60$$, $label$$27$$);
  $context$$432_text$$60$$.$alignMiddle$();
  $context$$432_text$$60$$.$setCSSStyle$($style$$71$$);
  return $context$$432_text$$60$$ = D.$DvtTextUtils$$.$fitText$($context$$432_text$$60$$, $textSpace$$1$$, $availSpace$$34$$.$h$, $legend$$20$$) ? $context$$432_text$$60$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_createLegendMarker$ = function $$DvtLegendRenderer$$$$_createLegendMarker$$($legend$$21$$, $x$$208$$, $y$$178$$, $rowHeight$$6$$, $marker$$11_markerSize$$2$$, $item$$12$$, $i$$341$$) {
  var $legendOptions$$2$$ = $legend$$21$$.$__getOptions$();
  $item$$12$$.markerShape || ($item$$12$$.markerShape = $legendOptions$$2$$.markerShape);
  if(!$item$$12$$.color) {
    var $colorRamp$$ = $legendOptions$$2$$.colors;
    $item$$12$$.color = $colorRamp$$[$i$$341$$ % $colorRamp$$.length]
  }
  $item$$12$$.lineWidth || ($item$$12$$.lineWidth = $legendOptions$$2$$.lineWidth);
  "line" == $item$$12$$.type ? ($item$$12$$.lineWidth = window.Math.min($item$$12$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$), $marker$$11_markerSize$$2$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$21$$.$_context$, $x$$208$$, $y$$178$$, $rowHeight$$6$$, $item$$12$$)) : "lineWithMarker" == $item$$12$$.type ? ($item$$12$$.lineWidth = window.Math.min($item$$12$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$), $marker$$11_markerSize$$2$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$21$$.$_context$, 
  $x$$208$$, $y$$178$$, $rowHeight$$6$$, $item$$12$$), "hidden" != $item$$12$$.categoryVisibility && $marker$$11_markerSize$$2$$.$addChild$(D.$DvtLegendRenderer$$.$_createMarker$($legend$$21$$, $x$$208$$, $y$$178$$, $rowHeight$$6$$, D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE$, $item$$12$$))) : $marker$$11_markerSize$$2$$ = D.$DvtLegendRenderer$$.$_createMarker$($legend$$21$$, $x$$208$$, $y$$178$$, $rowHeight$$6$$, $marker$$11_markerSize$$2$$, $item$$12$$);
  return $marker$$11_markerSize$$2$$
};
D.$DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($itemShape_legend$$22$$, $markerX$$1_x$$209$$, $markerY$$1_y$$179$$, $rowHeight$$7$$, $itemSize_legendMarker$$, $item$$13$$) {
  var $context$$433$$ = $itemShape_legend$$22$$.$_context$, $legendOptions$$3$$ = $itemShape_legend$$22$$.$__getOptions$();
  $itemShape_legend$$22$$ = $item$$13$$.markerShape;
  var $itemColor$$ = $item$$13$$.markerColor ? $item$$13$$.markerColor : $item$$13$$.color, $itemPattern$$ = $item$$13$$.pattern;
  $markerY$$1_y$$179$$ += ($rowHeight$$7$$ - $itemSize_legendMarker$$) / 2;
  $markerX$$1_x$$209$$ = "lineWithMarker" == $item$$13$$.type ? $markerX$$1_x$$209$$ + (D.$DvtLegendRenderer$$.$_DEFAULT_ITEM_WIDTH$ - $itemSize_legendMarker$$) / 2 : $markerX$$1_x$$209$$;
  $itemPattern$$ ? ($itemSize_legendMarker$$ = new D.$DvtMarker$$($context$$433$$, $itemShape_legend$$22$$, $legendOptions$$3$$.skin, 0, 0, $itemSize_legendMarker$$, $itemSize_legendMarker$$), $itemSize_legendMarker$$.$setFill$(new D.$DvtPatternFill$$($itemPattern$$, $itemColor$$, "#FFFFFF")), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSize_legendMarker$$, $markerX$$1_x$$209$$, $markerY$$1_y$$179$$)) : ($itemSize_legendMarker$$ = new D.$DvtMarker$$($context$$433$$, $itemShape_legend$$22$$, 
  $legendOptions$$3$$.skin, $markerX$$1_x$$209$$, $markerY$$1_y$$179$$, $itemSize_legendMarker$$, $itemSize_legendMarker$$), $itemSize_legendMarker$$.$setSolidFill$($itemColor$$));
  $item$$13$$.borderColor && $itemSize_legendMarker$$.$setSolidStroke$($item$$13$$.borderColor, D.$JSCompiler_alias_NULL$$, $item$$13$$._borderWidth ? $item$$13$$._borderWidth : 1);
  "square" == $itemShape_legend$$22$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($itemSize_legendMarker$$);
  return $itemSize_legendMarker$$
};
D.$DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($context$$434_line$$6$$, $stroke$$41_x$$210$$, $textY_y$$180$$, $rowHeight$$8$$, $item$$14_style$$72$$) {
  $textY_y$$180$$ += $rowHeight$$8$$ / 2;
  $context$$434_line$$6$$ = new D.$DvtLine$$($context$$434_line$$6$$, $stroke$$41_x$$210$$, $textY_y$$180$$, $stroke$$41_x$$210$$ + D.$DvtLegendRenderer$$.$_DEFAULT_ITEM_WIDTH$, $textY_y$$180$$);
  $stroke$$41_x$$210$$ = new D.$DvtSolidStroke$$($item$$14_style$$72$$.color, 1, $item$$14_style$$72$$.lineWidth);
  $item$$14_style$$72$$ = $item$$14_style$$72$$.lineStyle;
  "dashed" == $item$$14_style$$72$$ ? $stroke$$41_x$$210$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$14_style$$72$$), "4,2,4") : "dotted" == $item$$14_style$$72$$ && $stroke$$41_x$$210$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$14_style$$72$$), "2");
  $context$$434_line$$6$$.$setStroke$($stroke$$41_x$$210$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$434_line$$6$$);
  return $context$$434_line$$6$$
};
D.$DvtLegendRenderer$$.$_createHandle$ = function $$DvtLegendRenderer$$$$_createHandle$$($legend$$23$$, $context$$435_handle$$3$$, $availSpace$$35_clipRect$$4$$, $clipId$$2_id$$164$$) {
  var $boundRect$$2$$ = [$availSpace$$35_clipRect$$4$$.x, $availSpace$$35_clipRect$$4$$.y, $availSpace$$35_clipRect$$4$$.x + $availSpace$$35_clipRect$$4$$.$w$, $availSpace$$35_clipRect$$4$$.y + $availSpace$$35_clipRect$$4$$.$h$];
  $availSpace$$35_clipRect$$4$$ = $availSpace$$35_clipRect$$4$$.clone();
  $clipId$$2_id$$164$$ = $legend$$23$$.getId() + "_" + $clipId$$2_id$$164$$;
  $context$$435_handle$$3$$ = new D.$DvtHandle$$($context$$435_handle$$3$$, "legendHandler", $boundRect$$2$$, $availSpace$$35_clipRect$$4$$, $clipId$$2_id$$164$$);
  $legend$$23$$.$addChild$($context$$435_handle$$3$$);
  return $context$$435_handle$$3$$
};
D.$DvtLegendRenderer$$.$_createScrollableLegend$ = function $$DvtLegendRenderer$$$$_createScrollableLegend$$($legend$$24$$, $context$$436_scrollableLegend$$1$$, $availSpace$$36$$, $handle$$4$$, $legendHeight$$4$$, $numItems$$3$$) {
  $context$$436_scrollableLegend$$1$$ = new D.$DvtScrollableLegend$$($context$$436_scrollableLegend$$1$$, $availSpace$$36$$.x, $availSpace$$36$$.y, $availSpace$$36$$.$w$, $availSpace$$36$$.$h$, $legendHeight$$4$$, $handle$$4$$, $numItems$$3$$);
  $context$$436_scrollableLegend$$1$$.$setTouchManager$($legend$$24$$.$__getEventManager$().$getTouchManager$());
  $legend$$24$$.$addChild$($context$$436_scrollableLegend$$1$$);
  $handle$$4$$.$render$();
  return $context$$436_scrollableLegend$$1$$
};
});