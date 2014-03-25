define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtLegend$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLegend", D.$DvtLegend$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegend$$, D.$DvtBaseComponent$$, "DvtLegend");
D.$DvtLegend$newInstance$$ = function $$DvtLegend$newInstance$$$($context$$136$$, $callback$$57$$, $callbackObj$$33$$) {
  var $legend$$8$$ = new D.$DvtLegend$$;
  $legend$$8$$.Init($context$$136$$, $callback$$57$$, $callbackObj$$33$$);
  return $legend$$8$$
};
D.$DvtLegend$$.newInstance = D.$DvtLegend$newInstance$$;
D.$DvtLegend$$.getDefaults = function $$DvtLegend$$$getDefaults$($skin$$3$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtLegendDefaults$$, $skin$$3$$)
};
D.$DvtLegend$$.prototype.Init = function $$DvtLegend$$$$Init$($context$$137$$, $callback$$58$$, $callbackObj$$34$$) {
  D.$DvtLegend$$.$superclass$.Init.call(this, $context$$137$$, $callback$$58$$, $callbackObj$$34$$);
  this.setId("legend1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$Defaults$ = new D.$DvtLegendDefaults$$;
  this.$_eventManager$ = new D.$DvtLegendEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_peers$ = [];
  this.$_scrollableSections$ = []
};
D.$DvtLegend$$.prototype.$SetOptions$ = function $$DvtLegend$$$$$SetOptions$$($options$$20$$) {
  $options$$20$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$20$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtLegend$$.prototype.$getPreferredSize$ = function $$DvtLegend$$$$$getPreferredSize$$($dim$$18_options$$21$$, $maxWidth$$5$$, $maxHeight$$5$$) {
  this.$SetOptions$($dim$$18_options$$21$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  $dim$$18_options$$21$$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $maxWidth$$5$$, $maxHeight$$5$$));
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  return $dim$$18_options$$21$$
};
D.$DvtLegend$$.prototype.$render$ = function $$DvtLegend$$$$$render$$($options$$22$$, $width$$34$$, $height$$34$$) {
  this.$SetOptions$($options$$22$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $width$$34$$, $height$$34$$))
};
D.$DvtLegend$$.prototype.render = D.$DvtLegend$$.prototype.$render$;
D.$DvtLegend$$.prototype.$highlight$ = function $$DvtLegend$$$$$highlight$$($categories$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$, this.$_peers$)
};
D.$DvtLegend$$.prototype.highlight = D.$DvtLegend$$.prototype.$highlight$;
D.$DvtLegend$$.prototype.$processEvent$ = function $$DvtLegend$$$$$processEvent$$($event$$86$$, $source$$3$$) {
  var $type$$67$$ = $event$$86$$.$getType$();
  if("categoryRollOver" == $type$$67$$ || "categoryRollOut" == $type$$67$$) {
    "dim" == this.$__getOptions$().hoverBehavior && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$86$$, this.$_peers$);
    for(var $i$$69$$ = 0;$i$$69$$ < this.$_scrollableSections$.length;$i$$69$$++) {
      for(var $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_1510$$ = this.$_scrollableSections$[$i$$69$$], $category$$inline_1512$$ = $event$$86$$.$_category$, $category$$inline_1512$$ = $category$$inline_1512$$[0] ? $category$$inline_1512$$[0] : $category$$inline_1512$$, $i$$inline_1513$$ = 0;$i$$inline_1513$$ < $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_1510$$.$_peers$.length;$i$$inline_1513$$++) {
        var $obj$$inline_1514$$ = $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_1510$$.$_peers$[$i$$inline_1513$$];
        if($obj$$inline_1514$$ && $obj$$inline_1514$$.$getCategories$ && -1 < D.$DvtArrayUtils$$.$getIndex$($obj$$inline_1514$$.$getCategories$(), $category$$inline_1512$$)) {
          $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_1510$$.scrollIntoView($i$$inline_1513$$);
          break
        }
      }
    }
  }
  (this == $source$$3$$ || "showPopup" == $type$$67$$ || "hidePopup" == $type$$67$$) && this.$__dispatchEvent$($event$$86$$)
};
D.$DvtLegend$$.prototype.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$DvtLegend$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtLegend$$.prototype.$__registerObject$ = function $$DvtLegend$$$$$__registerObject$$($peer$$1$$) {
  this.$_peers$.push($peer$$1$$)
};
D.$DvtLegendConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtLegendConstants", D.$DvtLegendConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendConstants$$, D.$DvtObj$$, "DvtLegendConstants");
D.$DvtLegendConstants$$.$BACKGROUND$ = "background";
D.$DvtLegendConstants$$.BACKGROUND = D.$DvtLegendConstants$$.$BACKGROUND$;
D.$DvtLegendConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtLegendConstants$$.LEGEND_ITEM = D.$DvtLegendConstants$$.$LEGEND_ITEM$;
D.$DvtLegendConstants$$.$TITLE$ = "title";
D.$DvtLegendConstants$$.TITLE = D.$DvtLegendConstants$$.$TITLE$;
D.$DvtLegendDefaults$$ = function $$DvtLegendDefaults$$$() {
  this.Init({skyros:D.$DvtLegendDefaults$VERSION_1$$, alta:D.$DvtLegendDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtLegendDefaults");
D.$DvtLegendDefaults$SKIN_ALTA$$ = {skin:"alta", textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"), colors:D.$DvtCSSStyle$COLORS_ALTA$$};
D.$DvtLegendDefaults$VERSION_1$$ = {skin:"skyros", orientation:"vertical", position:D.$JSCompiler_alias_NULL$$, backgroundColor:D.$JSCompiler_alias_NULL$$, borderColor:D.$JSCompiler_alias_NULL$$, textStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), titleStyle:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b;"), titleHalign:"start", hideAndShowBehavior:"none", hoverBehavior:"none", scrolling:"asNeeded", colors:D.$DvtCSSStyle$COLORS_SKYROS$$, markerShape:"square", lineWidth:3, layout:{gapRatio:1, 
outerGapWidth:3, outerGapHeight:3, titleGap:3, markerSize:10, markerGap:5, rowGap:0, columnGap:8, sectionGap:6}, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtLegendDefaults$getGapSize$$ = function $$DvtLegendDefaults$getGapSize$$$($options$$109$$, $defaultSize$$2$$) {
  return window.Math.ceil($defaultSize$$2$$ * $options$$109$$.layout.gapRatio)
};
D.$DvtLegendEventManager$$ = function $$DvtLegendEventManager$$$($legend$$12$$) {
  this.Init($legend$$12$$.$_context$, $legend$$12$$.$processEvent$, $legend$$12$$);
  this.$_legend$ = $legend$$12$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendEventManager$$, D.$DvtEventManager$$, "DvtLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$186$$, $logicalObj$$12$$) {
  var $id$$inline_5775_params$$15$$ = D.$JSCompiler_alias_NULL$$;
  $logicalObj$$12$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$12$$.$getParams$() != D.$JSCompiler_alias_NULL$$ ? $id$$inline_5775_params$$15$$ = $logicalObj$$12$$.$getParams$() : $logicalObj$$12$$ instanceof D.$DvtLegendObjPeer$$ && ($id$$inline_5775_params$$15$$ = $logicalObj$$12$$.getId(), $id$$inline_5775_params$$15$$ = {type:D.$DvtLegendConstants$$.$LEGEND_ITEM$, id:$id$$inline_5775_params$$15$$});
  this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$186$$, $id$$inline_5775_params$$15$$), this.$_legend$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$512$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$512$$);
  var $action$$8_obj$$316$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$512$$.target);
  if($action$$8_obj$$316$$) {
    var $hideShow$$ = this.$_processHideShowEvent$($action$$8_obj$$316$$), $action$$8_obj$$316$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$8_obj$$316$$);
    ($hideShow$$ || $action$$8_obj$$316$$) && $event$$512$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$513$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$513$$);
  var $obj$$317$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$513$$.target);
  $obj$$317$$ && this.$_processRolloverEvent$($obj$$317$$, D.$JSCompiler_alias_TRUE$$) && $event$$513$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$514$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$514$$);
  var $obj$$318$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$514$$.target);
  $obj$$318$$ && this.$_processRolloverEvent$($obj$$318$$, D.$JSCompiler_alias_FALSE$$) && $event$$514$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$60_touchEvent$$6$$) {
  var $action$$9_obj$$319$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$60_touchEvent$$6$$.target);
  if($action$$9_obj$$319$$) {
    $evt$$60_touchEvent$$6$$ = $evt$$60_touchEvent$$6$$.$touchEvent$;
    var $hideShow$$1$$ = this.$_processHideShowEvent$($action$$9_obj$$319$$), $action$$9_obj$$319$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$9_obj$$319$$);
    ($hideShow$$1$$ || $action$$9_obj$$319$$) && $evt$$60_touchEvent$$6$$ && $evt$$60_touchEvent$$6$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$515$$) {
  var $obj$$320$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$515$$.target);
  this.$_processRolloverEvent$($obj$$320$$, D.$JSCompiler_alias_TRUE$$) && $event$$515$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$516$$) {
  var $obj$$321$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$516$$.target);
  this.$_processRolloverEvent$($obj$$321$$, D.$JSCompiler_alias_FALSE$$) && $event$$516$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$517$$) {
  var $obj$$322$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$517$$.target);
  this.$_processRolloverEvent$($obj$$322$$, D.$JSCompiler_alias_TRUE$$) && $event$$517$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($event$$518$$) {
  var $obj$$323$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$518$$.target);
  this.$_processRolloverEvent$($obj$$323$$, D.$JSCompiler_alias_FALSE$$) && $event$$518$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$_processHideShowEvent$ = function $$JSCompiler_prototypeAlias$$$$_processHideShowEvent$$($dataItem$$2_obj$$324$$) {
  if("none" == this.$_legend$.$__getOptions$().hideAndShowBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$3_id$$243$$ = $dataItem$$2_obj$$324$$.$getCategories$ ? $dataItem$$2_obj$$324$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$3_id$$243$$ || 0 >= $categories$$3_id$$243$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $displayables$$14$$ = $dataItem$$2_obj$$324$$.$getDisplayables$(), $i$$537$$ = 0;$i$$537$$ < $displayables$$14$$.length;$i$$537$$++) {
    var $displayable$$54$$ = $displayables$$14$$[$i$$537$$];
    $displayable$$54$$ instanceof D.$DvtMarker$$ && $displayable$$54$$.$setHollow$($dataItem$$2_obj$$324$$.$getColor$())
  }
  $categories$$3_id$$243$$ = $categories$$3_id$$243$$[0];
  $dataItem$$2_obj$$324$$ = $dataItem$$2_obj$$324$$.getData();
  "hidden" == $dataItem$$2_obj$$324$$.categoryVisibility ? ($dataItem$$2_obj$$324$$.categoryVisibility = "visible", this.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$, $categories$$3_id$$243$$), this.$_legend$)) : ($dataItem$$2_obj$$324$$.categoryVisibility = "hidden", this.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$, $categories$$3_id$$243$$), this.$_legend$));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__processActionEvent$$ = function $$JSCompiler_StaticMethods__processActionEvent$$$($JSCompiler_StaticMethods__processActionEvent$self$$, $obj$$325$$) {
  return $obj$$325$$ && $obj$$325$$.$getAction$ && $obj$$325$$.$_action$ ? ($JSCompiler_StaticMethods__processActionEvent$self$$.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$325$$.$_action$, $obj$$325$$.getId()), $JSCompiler_StaticMethods__processActionEvent$self$$.$_legend$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtLegendEventManager$$.prototype.$_processRolloverEvent$ = function $$DvtLegendEventManager$$$$$_processRolloverEvent$$($obj$$326$$, $bOver$$11$$) {
  if("none" == this.$_legend$.$__getOptions$().hoverBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$4$$ = $obj$$326$$ && $obj$$326$$.$getCategories$ ? $obj$$326$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$4$$ || 0 >= $categories$$4$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  this.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($bOver$$11$$ ? "categoryRollOver" : "categoryRollOut", $categories$$4$$[0]), this.$_legend$);
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtLegendObjPeer$$ = function $$DvtLegendObjPeer$$$($legend$$28$$, $displayables$$15$$, $id$$245$$, $tooltip$$37$$) {
  this.Init($legend$$28$$, $displayables$$15$$, $id$$245$$, $tooltip$$37$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendObjPeer$$, D.$DvtObj$$, "DvtLegendObjPeer");
D.$DvtLegendObjPeer$$.prototype.Init = function $$DvtLegendObjPeer$$$$Init$($i$$545_legend$$29$$, $displayables$$16$$, $item$$24$$, $tooltip$$38$$) {
  this.$_legend$ = $i$$545_legend$$29$$;
  this.$_displayables$ = $displayables$$16$$;
  this.$_item$ = $item$$24$$;
  this.$_id$ = $item$$24$$.id ? $item$$24$$.id : $item$$24$$.text;
  this.$_action$ = $item$$24$$.action;
  this.$_spb$ = $item$$24$$._spb;
  this.$_tooltip$ = $tooltip$$38$$;
  if(this.$_action$) {
    for($i$$545_legend$$29$$ = 0;$i$$545_legend$$29$$ < this.$_displayables$.length;$i$$545_legend$$29$$++) {
      this.$_displayables$[$i$$545_legend$$29$$].setCursor("pointer")
    }
  }
};
D.$DvtLegendObjPeer$associate$$ = function $$DvtLegendObjPeer$associate$$$($displayables$$17$$, $legend$$30$$, $identObj_item$$25$$, $i$$546_tooltip$$39$$) {
  if(!$displayables$$17$$ || !$identObj_item$$25$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $identObj_item$$25$$ = new D.$DvtLegendObjPeer$$($legend$$30$$, $displayables$$17$$, $identObj_item$$25$$, $i$$546_tooltip$$39$$);
  $legend$$30$$.$__registerObject$($identObj_item$$25$$);
  for($i$$546_tooltip$$39$$ = 0;$i$$546_tooltip$$39$$ < $displayables$$17$$.length;$i$$546_tooltip$$39$$++) {
    $legend$$30$$.$__getEventManager$().$associate$($displayables$$17$$[$i$$546_tooltip$$39$$], $identObj_item$$25$$)
  }
  return $identObj_item$$25$$
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
D.$DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($legend$$13$$, $availSpace$$26$$) {
  var $options$$99$$ = $legend$$13$$.$__getOptions$(), $gapWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$99$$, $options$$99$$.layout.outerGapWidth), $gapHeight$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$99$$, $options$$99$$.layout.outerGapHeight), $legendSpace_sectionsDim$$ = new D.$DvtRectangle$$($availSpace$$26$$.x + $gapWidth$$, $availSpace$$26$$.y + $gapHeight$$, $availSpace$$26$$.$w$ - 2 * $gapWidth$$, $availSpace$$26$$.$h$ - 2 * $gapHeight$$);
  if(0 >= $legendSpace_sectionsDim$$.$w$) {
    return new D.$DvtDimension$$(0, 0)
  }
  var $background$$4$$;
  $options$$99$$.isLayout || ($background$$4$$ = D.$DvtLegendRenderer$$.$_createBackground$($legend$$13$$, $availSpace$$26$$));
  var $isHoriz$$5_totalDim$$ = "vertical" == $options$$99$$.orientation ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$, $titleDim$$1$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$13$$, $options$$99$$.title, $legendSpace_sectionsDim$$, D.$JSCompiler_alias_NULL$$);
  $legendSpace_sectionsDim$$.y += $titleDim$$1$$.$h$;
  $legendSpace_sectionsDim$$.$h$ -= window.Math.floor($titleDim$$1$$.$h$);
  var $container$$89_rowHeight$$ = D.$DvtLegendRenderer$$.$_getRowHeight$($legend$$13$$), $bScrollable$$ = "off" !== $options$$99$$.scrolling, $legendSpace_sectionsDim$$ = $isHoriz$$5_totalDim$$ ? D.$DvtLegendRenderer$$.$_renderHorizontalSections$($legend$$13$$, $legendSpace_sectionsDim$$, $container$$89_rowHeight$$) : D.$DvtLegendRenderer$$.$_renderVerticalSections$($legend$$13$$, $legendSpace_sectionsDim$$, $container$$89_rowHeight$$, $bScrollable$$), $isHoriz$$5_totalDim$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($titleDim$$1$$, 
  $legendSpace_sectionsDim$$);
  if(0 >= $legend$$13$$.$_scrollableSections$.length) {
    for($container$$89_rowHeight$$ = new D.$DvtContainer$$($legend$$13$$.$_context$);0 < $legend$$13$$.$getNumChildren$();) {
      $container$$89_rowHeight$$.$addChild$($legend$$13$$.$getChildAt$(0))
    }
    $legend$$13$$.$addChild$($container$$89_rowHeight$$);
    $container$$89_rowHeight$$.$setTranslateX$(($availSpace$$26$$.$w$ - $isHoriz$$5_totalDim$$.$w$) / 2 - $isHoriz$$5_totalDim$$.x)
  }
  $background$$4$$ && $legend$$13$$.$addChildAt$($background$$4$$, 0);
  return $options$$99$$.isLayout ? new D.$DvtDimension$$(window.Math.max($titleDim$$1$$.$w$, $legendSpace_sectionsDim$$.$w$) + 2 * $gapWidth$$, $isHoriz$$5_totalDim$$.$h$ + 2 * $gapHeight$$) : new D.$DvtDimension$$($isHoriz$$5_totalDim$$.$w$ + 2 * $gapWidth$$, $isHoriz$$5_totalDim$$.$h$ + 2 * $gapHeight$$)
};
D.$DvtLegendRenderer$$.$_createBackground$ = function $$DvtLegendRenderer$$$$_createBackground$$($legend$$14$$, $availSpace$$27$$) {
  var $options$$100$$ = $legend$$14$$.$__getOptions$(), $rect$$29$$;
  $options$$100$$.backgroundColor && ($rect$$29$$ = $rect$$29$$ ? $rect$$29$$ : new D.$DvtRect$$($legend$$14$$.$_context$, $availSpace$$27$$.x, $availSpace$$27$$.y, $availSpace$$27$$.$w$, $availSpace$$27$$.$h$), $rect$$29$$.$setSolidFill$($options$$100$$.backgroundColor));
  $options$$100$$.borderColor && ($rect$$29$$ = $rect$$29$$ ? $rect$$29$$ : new D.$DvtRect$$($legend$$14$$.$_context$, $availSpace$$27$$.x, $availSpace$$27$$.y, $availSpace$$27$$.$w$, $availSpace$$27$$.$h$), $rect$$29$$.$setSolidStroke$($options$$100$$.borderColor), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($rect$$29$$));
  $rect$$29$$ && $legend$$14$$.$__getEventManager$().$associate$($rect$$29$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$BACKGROUND$, id:D.$JSCompiler_alias_VOID$$}));
  return $rect$$29$$
};
D.$DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($legend$$15$$, $title$$11_titleStr$$, $availSpace$$28$$, $section$$12$$) {
  var $options$$101$$ = $legend$$15$$.$__getOptions$();
  if(!$title$$11_titleStr$$) {
    return new D.$DvtRectangle$$($availSpace$$28$$.x, $availSpace$$28$$.y, 0, 0)
  }
  $title$$11_titleStr$$ = new D.$DvtOutputText$$($legend$$15$$.$_context$, $title$$11_titleStr$$, $availSpace$$28$$.x, $availSpace$$28$$.y);
  var $titleDims_titleStyle$$ = $section$$12$$ && $section$$12$$.titleStyle ? new D.$DvtCSSStyle$$($section$$12$$.titleStyle) : $options$$101$$.titleStyle;
  $title$$11_titleStr$$.$setCSSStyle$($titleDims_titleStyle$$);
  if(D.$DvtTextUtils$$.$fitText$($title$$11_titleStr$$, $availSpace$$28$$.$w$, $availSpace$$28$$.$h$, $legend$$15$$)) {
    $legend$$15$$.$__getEventManager$().$associate$($title$$11_titleStr$$, new D.$DvtSimpleObjPeer$$($title$$11_titleStr$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$}));
    var $titleDims_titleStyle$$ = $title$$11_titleStr$$.$measureDimensions$(), $gap$$7$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$101$$, $options$$101$$.layout.titleGap);
    $options$$101$$.isLayout ? $legend$$15$$.removeChild($title$$11_titleStr$$) : (0,D.$DvtLayoutUtils$align$$)($availSpace$$28$$, $section$$12$$ && $section$$12$$.titleHalign ? $section$$12$$.titleHalign : $options$$101$$.titleHalign, $title$$11_titleStr$$, $titleDims_titleStyle$$.$w$);
    $titleDims_titleStyle$$.$h$ += $gap$$7$$;
    return $titleDims_titleStyle$$
  }
  return new D.$DvtRectangle$$($availSpace$$28$$.x, $availSpace$$28$$.y, 0, 0)
};
D.$DvtLegendRenderer$$.$_getLegendSections$ = function $$DvtLegendRenderer$$$$_getLegendSections$$($section$$13$$, $sections$$) {
  var $nestedSections$$ = $section$$13$$.sections;
  $sections$$.push($section$$13$$);
  if($nestedSections$$) {
    for(var $i$$538$$ = 0;$i$$538$$ < $nestedSections$$.length;$i$$538$$++) {
      D.$DvtLegendRenderer$$.$_getLegendSections$($nestedSections$$[$i$$538$$], $sections$$)
    }
  }
};
D.$DvtLegendRenderer$$.$_renderVerticalSections$ = function $$DvtLegendRenderer$$$$_renderVerticalSections$$($legend$$16$$, $availSpace$$29_sectionSpace$$, $rowHeight$$1$$, $bScrollable$$1$$) {
  for(var $options$$102_sectionGap$$ = $legend$$16$$.$__getOptions$(), $sectionHeights$$ = D.$DvtLegendRenderer$$.$_calcSectionHeights$($legend$$16$$, $availSpace$$29_sectionSpace$$, $rowHeight$$1$$, $bScrollable$$1$$), $legendSections$$ = [], $i$$539$$ = 0;$i$$539$$ < $options$$102_sectionGap$$.sections.length;$i$$539$$++) {
    D.$DvtLegendRenderer$$.$_getLegendSections$($options$$102_sectionGap$$.sections[$i$$539$$], $legendSections$$)
  }
  var $numSections$$ = $legendSections$$.length, $options$$102_sectionGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$102_sectionGap$$, $options$$102_sectionGap$$.layout.sectionGap);
  $availSpace$$29_sectionSpace$$ = $availSpace$$29_sectionSpace$$.clone();
  for(var $totalDim$$1$$ = D.$JSCompiler_alias_NULL$$, $sectionDim$$, $i$$539$$ = 0;$i$$539$$ < $legendSections$$.length;$i$$539$$++) {
    $availSpace$$29_sectionSpace$$.$h$ = $sectionHeights$$[$i$$539$$], $sectionDim$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$16$$, $legendSections$$[$i$$539$$], $i$$539$$, $availSpace$$29_sectionSpace$$, $rowHeight$$1$$, $bScrollable$$1$$), $i$$539$$ != $numSections$$ - 1 && $legendSections$$[$i$$539$$].items && ($availSpace$$29_sectionSpace$$.y += $sectionDim$$.$h$ + $options$$102_sectionGap$$), $totalDim$$1$$ = $totalDim$$1$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$1$$, 
    $sectionDim$$) : $sectionDim$$
  }
  return $totalDim$$1$$
};
D.$DvtLegendRenderer$$.$_renderHorizontalSections$ = function $$DvtLegendRenderer$$$$_renderHorizontalSections$$($legend$$17$$, $availSpace$$30$$, $rowHeight$$2$$) {
  for(var $options$$103_sectionSpace$$1$$ = $legend$$17$$.$__getOptions$(), $isRTL$$15$$ = D.$DvtAgent$$.$isRightToLeft$($legend$$17$$.$_context$), $legendWidth$$1$$ = 0, $legendSections$$1$$ = [], $i$$540_j$$55$$ = 0;$i$$540_j$$55$$ < $options$$103_sectionSpace$$1$$.sections.length;$i$$540_j$$55$$++) {
    D.$DvtLegendRenderer$$.$_getLegendSections$($options$$103_sectionSpace$$1$$.sections[$i$$540_j$$55$$], $legendSections$$1$$)
  }
  for(var $numSections$$1$$ = $legendSections$$1$$.length, $totalItems$$ = 0, $i$$540_j$$55$$ = 0;$i$$540_j$$55$$ < $legendSections$$1$$.length;$i$$540_j$$55$$++) {
    $legendSections$$1$$[$i$$540_j$$55$$].items && ($totalItems$$ += $legendSections$$1$$[$i$$540_j$$55$$].items.length)
  }
  var $sectionGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$103_sectionSpace$$1$$, $options$$103_sectionSpace$$1$$.layout.sectionGap), $maxWidth$$17$$ = $availSpace$$30$$.$w$ - $sectionGap$$1$$ * ($numSections$$1$$ - 1), $sectionDim$$1_sectionItems_sectionMaxWidth$$, $totalDim$$2$$;
  if($options$$103_sectionSpace$$1$$.sections) {
    for(var $nestedSectionCounter$$ = 0, $outerSectionTitleHeight$$ = 0, $i$$540_j$$55$$ = 0;$i$$540_j$$55$$ < $numSections$$1$$;$i$$540_j$$55$$++) {
      $options$$103_sectionSpace$$1$$ = $availSpace$$30$$.clone(), ($sectionDim$$1_sectionItems_sectionMaxWidth$$ = $legendSections$$1$$[$i$$540_j$$55$$].items) ? ($sectionDim$$1_sectionItems_sectionMaxWidth$$ = window.Math.round($sectionDim$$1_sectionItems_sectionMaxWidth$$.length / $totalItems$$ * $maxWidth$$17$$), $options$$103_sectionSpace$$1$$.$w$ = $sectionDim$$1_sectionItems_sectionMaxWidth$$, $options$$103_sectionSpace$$1$$.x = $isRTL$$15$$ ? $availSpace$$30$$.x + $availSpace$$30$$.$w$ - 
      $legendWidth$$1$$ - $options$$103_sectionSpace$$1$$.$w$ : $availSpace$$30$$.x + $legendWidth$$1$$, 0 < $nestedSectionCounter$$ && ($options$$103_sectionSpace$$1$$.y += $outerSectionTitleHeight$$, $options$$103_sectionSpace$$1$$.$h$ -= $outerSectionTitleHeight$$), $sectionDim$$1_sectionItems_sectionMaxWidth$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$17$$, $legendSections$$1$$[$i$$540_j$$55$$], $i$$540_j$$55$$, $options$$103_sectionSpace$$1$$, $rowHeight$$2$$, D.$JSCompiler_alias_FALSE$$), 
      0 < $nestedSectionCounter$$ && ($options$$103_sectionSpace$$1$$.$h$ += $outerSectionTitleHeight$$, $nestedSectionCounter$$--), $legendWidth$$1$$ += $sectionDim$$1_sectionItems_sectionMaxWidth$$.$w$, $i$$540_j$$55$$ != $numSections$$1$$ - 1 && ($legendWidth$$1$$ += $sectionGap$$1$$)) : ($options$$103_sectionSpace$$1$$.$w$ = $availSpace$$30$$.$w$ - $legendWidth$$1$$, $options$$103_sectionSpace$$1$$.x = $isRTL$$15$$ ? $availSpace$$30$$.x : $availSpace$$30$$.x + $legendWidth$$1$$, $sectionDim$$1_sectionItems_sectionMaxWidth$$ = 
      D.$DvtLegendRenderer$$.$_renderSection$($legend$$17$$, $legendSections$$1$$[$i$$540_j$$55$$], $i$$540_j$$55$$, $options$$103_sectionSpace$$1$$, $rowHeight$$2$$, D.$JSCompiler_alias_FALSE$$), $outerSectionTitleHeight$$ = $sectionDim$$1_sectionItems_sectionMaxWidth$$.$h$, $nestedSectionCounter$$ = $legendSections$$1$$[$i$$540_j$$55$$].sections.length), $totalDim$$2$$ = $totalDim$$2$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$2$$, $sectionDim$$1_sectionItems_sectionMaxWidth$$) : 
      $sectionDim$$1_sectionItems_sectionMaxWidth$$
    }
  }
  return $totalDim$$2$$
};
D.$DvtLegendRenderer$$.$_renderSection$ = function $$DvtLegendRenderer$$$$_renderSection$$($legend$$18$$, $section$$14$$, $i$$541_sectionIndex$$, $availSectionSpace_totalWidth$$1$$, $rowHeight$$3$$, $bScrollable$$2_item$$19$$) {
  if($section$$14$$) {
    var $availSpace$$31$$ = $availSectionSpace_totalWidth$$1$$.clone(), $options$$104$$ = $legend$$18$$.$__getOptions$(), $context$$560$$ = $legend$$18$$.$_context$, $initAvailY$$ = $availSpace$$31$$.y, $markerSize$$ = $options$$104$$.layout.markerSize, $markerGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$104$$, $options$$104$$.layout.markerGap), $rowGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$104$$, $options$$104$$.layout.rowGap), $colGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$104$$, 
    $options$$104$$.layout.columnGap), $titleDim$$2$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$18$$, $section$$14$$.title, $availSpace$$31$$, $section$$14$$);
    $availSpace$$31$$.y += $titleDim$$2$$.$h$;
    if($section$$14$$.items) {
      $availSpace$$31$$.$h$ -= $titleDim$$2$$.$h$;
      var $initAvailY$$ = $initAvailY$$ + $titleDim$$2$$.$h$, $legendInfo_numItems$$3$$ = D.$DvtLegendRenderer$$.$_calcSectionSpace$($legend$$18$$, $availSpace$$31$$, $rowHeight$$3$$, $section$$14$$.items, $bScrollable$$2_item$$19$$), $numCols$$ = $legendInfo_numItems$$3$$.numCols, $numRows$$ = $legendInfo_numItems$$3$$.numRows, $colWidth_itemTextWidth$$ = $legendInfo_numItems$$3$$.width;
      $availSpace$$31$$.$h$ = window.Math.ceil(window.Math.min($availSpace$$31$$.$h$, $numRows$$ * ($rowHeight$$3$$ + $rowGap$$) - $rowGap$$) + $titleDim$$2$$.$h$);
      $availSpace$$31$$.$w$ = $colWidth_itemTextWidth$$ * $numCols$$ + $colGap$$ * ($numCols$$ - 1);
      if($options$$104$$.isLayout) {
        if(1 == $numRows$$) {
          for($i$$541_sectionIndex$$ = $availSectionSpace_totalWidth$$1$$ = 0;$i$$541_sectionIndex$$ < $section$$14$$.items.length;$i$$541_sectionIndex$$++) {
            $bScrollable$$2_item$$19$$ = $section$$14$$.items[$i$$541_sectionIndex$$], $colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$18$$, $bScrollable$$2_item$$19$$.text)), $availSectionSpace_totalWidth$$1$$ += $colWidth_itemTextWidth$$ + $markerSize$$ + $markerGap$$1$$ + $colGap$$
          }
          $availSpace$$31$$.$w$ = $availSectionSpace_totalWidth$$1$$ - $colGap$$
        }
        return $availSpace$$31$$
      }
      if(0 == $numRows$$ || 0 == $numCols$$) {
        return $availSpace$$31$$
      }
      var $extraTextSpace_scrollableLegend$$ = D.$JSCompiler_alias_NULL$$, $container$$90_handle$$2$$ = $legend$$18$$, $fullLegendHeight_textSpace$$ = $numRows$$ * ($rowHeight$$3$$ + $rowGap$$) - $rowGap$$ + $titleDim$$2$$.$h$, $legendInfo_numItems$$3$$ = $section$$14$$.items.length;
      "vertical" === $options$$104$$.orientation && ($bScrollable$$2_item$$19$$ && $fullLegendHeight_textSpace$$ > $availSpace$$31$$.$h$) && ($container$$90_handle$$2$$ = D.$DvtLegendRenderer$$.$_createHandle$($legend$$18$$, $context$$560$$, $availSpace$$31$$, $i$$541_sectionIndex$$), $extraTextSpace_scrollableLegend$$ = D.$DvtLegendRenderer$$.$_createScrollableLegend$($legend$$18$$, $context$$560$$, $availSpace$$31$$, $container$$90_handle$$2$$, $fullLegendHeight_textSpace$$, $legendInfo_numItems$$3$$), 
      $legend$$18$$.$_scrollableSections$.push($extraTextSpace_scrollableLegend$$));
      var $fullLegendHeight_textSpace$$ = $colWidth_itemTextWidth$$ - $markerSize$$ - $markerGap$$1$$, $isRTL$$16$$ = D.$DvtAgent$$.$isRightToLeft$($legend$$18$$.$_context$), $currRow$$ = 0, $currCol$$ = 1;
      if(1 == $numRows$$) {
        for($i$$541_sectionIndex$$ = $extraTextSpace_scrollableLegend$$ = 0;$i$$541_sectionIndex$$ < $legendInfo_numItems$$3$$;$i$$541_sectionIndex$$++) {
          $bScrollable$$2_item$$19$$ = $section$$14$$.items[$i$$541_sectionIndex$$], $colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$18$$, $bScrollable$$2_item$$19$$.text)), $colWidth_itemTextWidth$$ < $fullLegendHeight_textSpace$$ && ($extraTextSpace_scrollableLegend$$ += $fullLegendHeight_textSpace$$ - $colWidth_itemTextWidth$$)
        }
        for($i$$541_sectionIndex$$ = 0;$i$$541_sectionIndex$$ < $legendInfo_numItems$$3$$;$i$$541_sectionIndex$$++) {
          $bScrollable$$2_item$$19$$ = $section$$14$$.items[$i$$541_sectionIndex$$];
          var $itemRect_markerX_startX$$6$$ = $isRTL$$16$$ ? $availSpace$$31$$.x + $availSpace$$31$$.$w$ - $markerSize$$ : $availSpace$$31$$.x, $itemWidth$$1_textX_tooltip$$36$$ = $isRTL$$16$$ ? $availSpace$$31$$.x + $availSpace$$31$$.$w$ - $markerSize$$ - $markerGap$$1$$ : $availSpace$$31$$.x + $markerSize$$ + $markerGap$$1$$, $marker$$10$$ = D.$DvtLegendRenderer$$.$_createLegendMarker$($legend$$18$$, $itemRect_markerX_startX$$6$$, $availSpace$$31$$.y, $rowHeight$$3$$, $markerSize$$, $bScrollable$$2_item$$19$$, 
          $i$$541_sectionIndex$$), $label$$52$$ = $bScrollable$$2_item$$19$$.text, $colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$18$$, $bScrollable$$2_item$$19$$.text)), $peer$$5_text$$81$$ = D.$JSCompiler_alias_NULL$$;
          $label$$52$$ && ($colWidth_itemTextWidth$$ < $fullLegendHeight_textSpace$$ ? $peer$$5_text$$81$$ = D.$DvtLegendRenderer$$.$_createLegendText$($legend$$18$$, $context$$560$$, $availSpace$$31$$, $fullLegendHeight_textSpace$$, $label$$52$$, $options$$104$$.textStyle) : ($peer$$5_text$$81$$ = D.$DvtLegendRenderer$$.$_createLegendText$($legend$$18$$, $context$$560$$, $availSpace$$31$$, $fullLegendHeight_textSpace$$ + $extraTextSpace_scrollableLegend$$, $label$$52$$, $options$$104$$.textStyle), 
          $peer$$5_text$$81$$ != D.$JSCompiler_alias_NULL$$ && ($colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$18$$, $peer$$5_text$$81$$.$getTextString$())), $extraTextSpace_scrollableLegend$$ -= $fullLegendHeight_textSpace$$ - $colWidth_itemTextWidth$$)), $colWidth_itemTextWidth$$ = $peer$$5_text$$81$$ != D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$18$$, $peer$$5_text$$81$$.$getTextString$())) : 0, $peer$$5_text$$81$$ && 
          ($peer$$5_text$$81$$.$setX$($itemWidth$$1_textX_tooltip$$36$$), $peer$$5_text$$81$$.$setY$($availSpace$$31$$.y + $rowHeight$$3$$ / 2), $isRTL$$16$$ && $peer$$5_text$$81$$.$alignRight$()));
          $legend$$18$$.$addChild$($marker$$10$$);
          $colWidth_itemTextWidth$$ = $colWidth_itemTextWidth$$ + $markerSize$$ + $markerGap$$1$$;
          $itemRect_markerX_startX$$6$$ = window.Math.min($itemRect_markerX_startX$$6$$, $itemWidth$$1_textX_tooltip$$36$$);
          $itemWidth$$1_textX_tooltip$$36$$ = $currCol$$ == $numCols$$ ? $colWidth_itemTextWidth$$ : $colWidth_itemTextWidth$$ + $colGap$$;
          $itemRect_markerX_startX$$6$$ = new D.$DvtRect$$($context$$560$$, $itemRect_markerX_startX$$6$$, $availSpace$$31$$.y, $itemWidth$$1_textX_tooltip$$36$$, $rowHeight$$3$$);
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($itemRect_markerX_startX$$6$$);
          $container$$90_handle$$2$$.$addChild$($itemRect_markerX_startX$$6$$);
          $itemWidth$$1_textX_tooltip$$36$$ = $peer$$5_text$$81$$ != D.$JSCompiler_alias_NULL$$ ? $peer$$5_text$$81$$.$_untruncatedTextString$ : D.$JSCompiler_alias_NULL$$;
          $peer$$5_text$$81$$ = (0,D.$DvtLegendObjPeer$associate$$)([$itemRect_markerX_startX$$6$$, $marker$$10$$, $peer$$5_text$$81$$], $legend$$18$$, $bScrollable$$2_item$$19$$, $itemWidth$$1_textX_tooltip$$36$$);
          "hidden" == $bScrollable$$2_item$$19$$.categoryVisibility && $peer$$5_text$$81$$ && $marker$$10$$.$setHollow$($peer$$5_text$$81$$.$getColor$());
          $availSpace$$31$$.y += $rowHeight$$3$$ + $rowGap$$;
          $currRow$$++;
          $currRow$$ === $numRows$$ && $currCol$$ !== $numCols$$ && ($availSpace$$31$$.y = $initAvailY$$, $isRTL$$16$$ ? $availSpace$$31$$.$w$ -= $colWidth_itemTextWidth$$ + $colGap$$ : $availSpace$$31$$.x += $colWidth_itemTextWidth$$ + $colGap$$, $currRow$$ = 0, $currCol$$++)
        }
      }else {
        for($i$$541_sectionIndex$$ = 0;$i$$541_sectionIndex$$ < $legendInfo_numItems$$3$$;$i$$541_sectionIndex$$++) {
          $bScrollable$$2_item$$19$$ = $section$$14$$.items[$i$$541_sectionIndex$$];
          $itemRect_markerX_startX$$6$$ = $isRTL$$16$$ ? $availSpace$$31$$.x + $availSpace$$31$$.$w$ - $markerSize$$ : $availSpace$$31$$.x;
          $itemWidth$$1_textX_tooltip$$36$$ = $isRTL$$16$$ ? $availSpace$$31$$.x + $availSpace$$31$$.$w$ - $markerSize$$ - $markerGap$$1$$ : $availSpace$$31$$.x + $markerSize$$ + $markerGap$$1$$;
          $marker$$10$$ = D.$DvtLegendRenderer$$.$_createLegendMarker$($legend$$18$$, $itemRect_markerX_startX$$6$$, $availSpace$$31$$.y, $rowHeight$$3$$, $markerSize$$, $bScrollable$$2_item$$19$$, $i$$541_sectionIndex$$);
          $label$$52$$ = $bScrollable$$2_item$$19$$.text;
          $peer$$5_text$$81$$ = D.$JSCompiler_alias_NULL$$;
          if($label$$52$$ && ($peer$$5_text$$81$$ = D.$DvtLegendRenderer$$.$_createLegendText$($container$$90_handle$$2$$, $context$$560$$, $availSpace$$31$$, $fullLegendHeight_textSpace$$, $label$$52$$, $options$$104$$.textStyle))) {
            $peer$$5_text$$81$$.$setX$($itemWidth$$1_textX_tooltip$$36$$), $peer$$5_text$$81$$.$setY$($availSpace$$31$$.y + $rowHeight$$3$$ / 2), $isRTL$$16$$ && $peer$$5_text$$81$$.$alignRight$()
          }
          $container$$90_handle$$2$$.$addChild$($marker$$10$$);
          $itemRect_markerX_startX$$6$$ = window.Math.min($itemRect_markerX_startX$$6$$, $itemWidth$$1_textX_tooltip$$36$$);
          $itemWidth$$1_textX_tooltip$$36$$ = $currCol$$ == $numCols$$ ? $colWidth_itemTextWidth$$ : $colWidth_itemTextWidth$$ + $colGap$$;
          $itemRect_markerX_startX$$6$$ = new D.$DvtRect$$($context$$560$$, $itemRect_markerX_startX$$6$$, $availSpace$$31$$.y, $itemWidth$$1_textX_tooltip$$36$$, $rowHeight$$3$$);
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($itemRect_markerX_startX$$6$$);
          $container$$90_handle$$2$$.$addChild$($itemRect_markerX_startX$$6$$);
          $itemWidth$$1_textX_tooltip$$36$$ = $peer$$5_text$$81$$ != D.$JSCompiler_alias_NULL$$ ? $peer$$5_text$$81$$.$_untruncatedTextString$ : D.$JSCompiler_alias_NULL$$;
          $peer$$5_text$$81$$ = (0,D.$DvtLegendObjPeer$associate$$)([$itemRect_markerX_startX$$6$$, $marker$$10$$, $peer$$5_text$$81$$], $legend$$18$$, $bScrollable$$2_item$$19$$, $itemWidth$$1_textX_tooltip$$36$$);
          $extraTextSpace_scrollableLegend$$ && $peer$$5_text$$81$$ instanceof D.$DvtLegendObjPeer$$ && $extraTextSpace_scrollableLegend$$.$__registerObject$($peer$$5_text$$81$$);
          "hidden" == $bScrollable$$2_item$$19$$.categoryVisibility && $peer$$5_text$$81$$ && $marker$$10$$.$setHollow$($peer$$5_text$$81$$.$getColor$());
          $availSpace$$31$$.y += $rowHeight$$3$$ + $rowGap$$;
          $currRow$$++;
          $currRow$$ === $numRows$$ && $currCol$$ !== $numCols$$ && ($availSpace$$31$$.y = $initAvailY$$, $isRTL$$16$$ ? $availSpace$$31$$.$w$ -= $colWidth_itemTextWidth$$ + $colGap$$ : $availSpace$$31$$.x += $colWidth_itemTextWidth$$ + $colGap$$, $currRow$$ = 0, $currCol$$++)
        }
      }
      $availSpace$$31$$.y = $initAvailY$$ + $availSpace$$31$$.$h$ - $titleDim$$2$$.height;
      return new D.$DvtRectangle$$($availSectionSpace_totalWidth$$1$$.x, $initAvailY$$ - $titleDim$$2$$.height, $availSectionSpace_totalWidth$$1$$.$w$, $availSpace$$31$$.$h$)
    }
    $availSpace$$31$$.$h$ = $titleDim$$2$$.$h$
  }
};
D.$DvtLegendRenderer$$.$_calcSectionHeights$ = function $$DvtLegendRenderer$$$$_calcSectionHeights$$($legend$$19$$, $availSpace$$32$$, $rowHeight$$4$$, $bScrollable$$3$$) {
  var $options$$105$$ = $legend$$19$$.$__getOptions$(), $isLayout$$ = $options$$105$$.isLayout;
  $options$$105$$.isLayout = D.$JSCompiler_alias_TRUE$$;
  for(var $legendHeight$$3$$ = 0, $legendWidth$$2$$ = 0, $legendX$$ = $availSpace$$32$$.x, $legendY$$ = $availSpace$$32$$.y, $legendSections$$2$$ = [], $i$$542$$ = 0;$i$$542$$ < $options$$105$$.sections.length;$i$$542$$++) {
    D.$DvtLegendRenderer$$.$_getLegendSections$($options$$105$$.sections[$i$$542$$], $legendSections$$2$$)
  }
  for(var $numSections$$2$$ = $legendSections$$2$$.length, $sectionGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$105$$, $options$$105$$.layout.sectionGap), $maxHeight$$15_spaceNeeded$$ = $availSpace$$32$$.$h$ - $sectionGap$$2$$ * ($numSections$$2$$ - 1), $maxWidth$$18$$ = $availSpace$$32$$.$w$, $arSectionSpace$$ = [], $equalSpace_sectionDim$$2_splitSpace$$, $i$$542$$ = 0;$i$$542$$ < $numSections$$2$$;$i$$542$$++) {
    $availSpace$$32$$.$h$ = $maxHeight$$15_spaceNeeded$$, $availSpace$$32$$.$w$ = $maxWidth$$18$$, $equalSpace_sectionDim$$2_splitSpace$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$19$$, $legendSections$$2$$[$i$$542$$], $i$$542$$, $availSpace$$32$$, $rowHeight$$4$$, $bScrollable$$3$$), $arSectionSpace$$[$i$$542$$] = $equalSpace_sectionDim$$2_splitSpace$$.$h$
  }
  window.arSectionSpaceNeeded = [];
  window.extraSpace = window.numShortSections = 0;
  $equalSpace_sectionDim$$2_splitSpace$$ = $maxHeight$$15_spaceNeeded$$ / $numSections$$2$$;
  for($i$$542$$ = 0;$i$$542$$ < $numSections$$2$$;$i$$542$$++) {
    $maxHeight$$15_spaceNeeded$$ = $arSectionSpace$$[$i$$542$$] - $equalSpace_sectionDim$$2_splitSpace$$, 0 >= $maxHeight$$15_spaceNeeded$$ ? (window.arSectionSpaceNeeded[$i$$542$$] = 0, window.extraSpace -= $maxHeight$$15_spaceNeeded$$) : ($arSectionSpace$$[$i$$542$$] = $equalSpace_sectionDim$$2_splitSpace$$, window.arSectionSpaceNeeded[$i$$542$$] = $maxHeight$$15_spaceNeeded$$, window.numShortSections++)
  }
  for(;0 < window.extraSpace && 0 < window.numShortSections;) {
    $equalSpace_sectionDim$$2_splitSpace$$ = window.extraSpace / window.numShortSections;
    for($i$$542$$ = 0;$i$$542$$ < $numSections$$2$$;$i$$542$$++) {
      0 < window.arSectionSpaceNeeded[$i$$542$$] && ($maxHeight$$15_spaceNeeded$$ = window.arSectionSpaceNeeded[$i$$542$$] - $equalSpace_sectionDim$$2_splitSpace$$, 0 >= $maxHeight$$15_spaceNeeded$$ ? ($arSectionSpace$$[$i$$542$$] += window.arSectionSpaceNeeded[$i$$542$$], window.arSectionSpaceNeeded[$i$$542$$] = 0, window.extraSpace -= $equalSpace_sectionDim$$2_splitSpace$$ + $maxHeight$$15_spaceNeeded$$, window.numShortSections--) : ($arSectionSpace$$[$i$$542$$] += $equalSpace_sectionDim$$2_splitSpace$$, 
      window.extraSpace -= $equalSpace_sectionDim$$2_splitSpace$$, window.arSectionSpaceNeeded[$i$$542$$] = $maxHeight$$15_spaceNeeded$$))
    }
  }
  $availSpace$$32$$.x = $legendX$$;
  $availSpace$$32$$.y = $legendY$$;
  $availSpace$$32$$.$w$ = $maxWidth$$18$$;
  for($i$$542$$ = 0;$i$$542$$ < $numSections$$2$$;$i$$542$$++) {
    $availSpace$$32$$.$h$ = $arSectionSpace$$[$i$$542$$], D.$DvtLegendRenderer$$.$_renderSection$($legend$$19$$, $legendSections$$2$$[$i$$542$$], $i$$542$$, $availSpace$$32$$, $rowHeight$$4$$, $bScrollable$$3$$), $availSpace$$32$$.x = $legendX$$, $legendWidth$$2$$ = window.Math.max($availSpace$$32$$.$w$, $legendWidth$$2$$), $legendHeight$$3$$ += $availSpace$$32$$.$h$, $i$$542$$ != $numSections$$2$$ - 1 && ($availSpace$$32$$.y = $availSpace$$32$$.$h$ + $legendY$$ + $sectionGap$$2$$, $legendHeight$$3$$ += 
    $sectionGap$$2$$)
  }
  $availSpace$$32$$.$w$ = $legendWidth$$2$$;
  $availSpace$$32$$.$h$ = $legendHeight$$3$$;
  $availSpace$$32$$.x = $legendX$$;
  $availSpace$$32$$.y = $legendY$$;
  $options$$105$$.isLayout = $isLayout$$;
  return $arSectionSpace$$
};
D.$DvtLegendRenderer$$.$_calcSectionSpace$ = function $$DvtLegendRenderer$$$$_calcSectionSpace$$($legend$$20_markerSize$$1$$, $availSpace$$33_colWidth$$1$$, $rowHeight$$5$$, $items$$13$$, $bScrollable$$4_numRows$$1$$) {
  for(var $numCols$$1_options$$106$$ = $legend$$20_markerSize$$1$$.$__getOptions$(), $fullColWidth_textWidth$$1$$ = 0, $i$$543_rowGap$$1$$ = 0;$i$$543_rowGap$$1$$ < $items$$13$$.length;$i$$543_rowGap$$1$$++) {
    var $colGap$$1_tempWidth$$ = D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$20_markerSize$$1$$, $items$$13$$[$i$$543_rowGap$$1$$].text);
    $colGap$$1_tempWidth$$ > $fullColWidth_textWidth$$1$$ && ($fullColWidth_textWidth$$1$$ = $colGap$$1_tempWidth$$)
  }
  $legend$$20_markerSize$$1$$ = $numCols$$1_options$$106$$.layout.markerSize;
  var $markerGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($numCols$$1_options$$106$$, $numCols$$1_options$$106$$.layout.markerGap), $i$$543_rowGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($numCols$$1_options$$106$$, $numCols$$1_options$$106$$.layout.rowGap), $colGap$$1_tempWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($numCols$$1_options$$106$$, $numCols$$1_options$$106$$.layout.columnGap), $fullColWidth_textWidth$$1$$ = $numCols$$1_options$$106$$.isLayout ? window.Math.ceil($legend$$20_markerSize$$1$$ + 
  $markerGap$$2$$ + $fullColWidth_textWidth$$1$$) : $availSpace$$33_colWidth$$1$$.$w$;
  "vertical" == $numCols$$1_options$$106$$.orientation ? $bScrollable$$4_numRows$$1$$ ? ($numCols$$1_options$$106$$ = 1, $bScrollable$$4_numRows$$1$$ = $items$$13$$.length) : ($bScrollable$$4_numRows$$1$$ = window.Math.min(window.Math.floor(($availSpace$$33_colWidth$$1$$.$h$ + $i$$543_rowGap$$1$$) / ($rowHeight$$5$$ + $i$$543_rowGap$$1$$)), $items$$13$$.length), $numCols$$1_options$$106$$ = window.Math.ceil($items$$13$$.length / $bScrollable$$4_numRows$$1$$)) : ($numCols$$1_options$$106$$ = window.Math.min(window.Math.floor($availSpace$$33_colWidth$$1$$.$w$ / 
  $fullColWidth_textWidth$$1$$), $items$$13$$.length), $bScrollable$$4_numRows$$1$$ = window.Math.ceil((($fullColWidth_textWidth$$1$$ + $colGap$$1_tempWidth$$) * $items$$13$$.length - $colGap$$1_tempWidth$$) / $availSpace$$33_colWidth$$1$$.$w$), $bScrollable$$4_numRows$$1$$ * ($rowHeight$$5$$ + $i$$543_rowGap$$1$$) - $i$$543_rowGap$$1$$ > $availSpace$$33_colWidth$$1$$.$h$ && ($bScrollable$$4_numRows$$1$$ = window.Math.floor(window.Math.ceil($availSpace$$33_colWidth$$1$$.$h$ + $i$$543_rowGap$$1$$) / 
  ($rowHeight$$5$$ + $i$$543_rowGap$$1$$)), $numCols$$1_options$$106$$ = window.Math.ceil($items$$13$$.length / $bScrollable$$4_numRows$$1$$)));
  $availSpace$$33_colWidth$$1$$ = window.Math.min($fullColWidth_textWidth$$1$$, ($availSpace$$33_colWidth$$1$$.$w$ - $colGap$$1_tempWidth$$ * ($numCols$$1_options$$106$$ - 1)) / $numCols$$1_options$$106$$);
  return $availSpace$$33_colWidth$$1$$ < $legend$$20_markerSize$$1$$ ? {width:0, height:0, numCols:0, numRows:0} : {width:$availSpace$$33_colWidth$$1$$, numCols:$numCols$$1_options$$106$$, numRows:$bScrollable$$4_numRows$$1$$}
};
D.$DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($dims$$55_legend$$21_text$$82$$) {
  var $options$$107$$ = $dims$$55_legend$$21_text$$82$$.$__getOptions$();
  $dims$$55_legend$$21_text$$82$$ = new D.$DvtOutputText$$($dims$$55_legend$$21_text$$82$$.$_context$, "Test");
  $dims$$55_legend$$21_text$$82$$.$setCSSStyle$($options$$107$$.textStyle);
  $dims$$55_legend$$21_text$$82$$.$alignMiddle$();
  $dims$$55_legend$$21_text$$82$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$55_legend$$21_text$$82$$);
  return window.Math.ceil(window.Math.max($dims$$55_legend$$21_text$$82$$.$h$, $options$$107$$.layout.markerSize))
};
D.$DvtLegendRenderer$$.$_getTextWidth$ = function $$DvtLegendRenderer$$$$_getTextWidth$$($legend$$22$$, $label$$53$$) {
  var $options$$108$$ = $legend$$22$$.$__getOptions$(), $text$$83$$ = new D.$DvtOutputText$$($legend$$22$$.$_context$, $label$$53$$);
  $text$$83$$.$setCSSStyle$($options$$108$$.textStyle);
  return $text$$83$$.$measureDimensions$().$w$
};
D.$DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($legend$$23$$, $context$$561_text$$84$$, $availSpace$$34$$, $textSpace$$1$$, $label$$54$$, $style$$84$$) {
  $context$$561_text$$84$$ = new D.$DvtOutputText$$($context$$561_text$$84$$, $label$$54$$);
  $context$$561_text$$84$$.$alignMiddle$();
  $context$$561_text$$84$$.$setCSSStyle$($style$$84$$);
  return $context$$561_text$$84$$ = D.$DvtTextUtils$$.$fitText$($context$$561_text$$84$$, $textSpace$$1$$, $availSpace$$34$$.$h$, $legend$$23$$) ? $context$$561_text$$84$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_createLegendMarker$ = function $$DvtLegendRenderer$$$$_createLegendMarker$$($legend$$24$$, $x$$252$$, $y$$217$$, $rowHeight$$6$$, $marker$$11_markerSize$$2$$, $item$$21$$, $i$$544$$) {
  var $legendOptions$$3$$ = $legend$$24$$.$__getOptions$();
  $item$$21$$.markerShape || ($item$$21$$.markerShape = $legendOptions$$3$$.markerShape);
  if(!$item$$21$$.color) {
    var $colorRamp$$ = $legendOptions$$3$$.colors;
    $item$$21$$.color = $colorRamp$$[$i$$544$$ % $colorRamp$$.length]
  }
  $item$$21$$.lineWidth || ($item$$21$$.lineWidth = $legendOptions$$3$$.lineWidth);
  "line" == $item$$21$$.type ? ($item$$21$$.lineWidth = window.Math.min($item$$21$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$), $marker$$11_markerSize$$2$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$24$$.$_context$, $x$$252$$, $y$$217$$, $rowHeight$$6$$, $item$$21$$)) : "lineWithMarker" == $item$$21$$.type ? ($item$$21$$.lineWidth = window.Math.min($item$$21$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$), $marker$$11_markerSize$$2$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$24$$.$_context$, 
  $x$$252$$, $y$$217$$, $rowHeight$$6$$, $item$$21$$), "hidden" != $item$$21$$.categoryVisibility && $marker$$11_markerSize$$2$$.$addChild$(D.$DvtLegendRenderer$$.$_createMarker$($legend$$24$$, $x$$252$$, $y$$217$$, $rowHeight$$6$$, D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE$, $item$$21$$))) : $marker$$11_markerSize$$2$$ = D.$DvtLegendRenderer$$.$_createMarker$($legend$$24$$, $x$$252$$, $y$$217$$, $rowHeight$$6$$, $marker$$11_markerSize$$2$$, $item$$21$$);
  return $marker$$11_markerSize$$2$$
};
D.$DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($itemShape_legend$$25$$, $markerX$$1_x$$253$$, $markerY$$1_y$$218$$, $rowHeight$$7$$, $itemSize_legendMarker$$, $item$$22$$) {
  var $context$$562$$ = $itemShape_legend$$25$$.$_context$, $legendOptions$$4$$ = $itemShape_legend$$25$$.$__getOptions$();
  $itemShape_legend$$25$$ = $item$$22$$.markerShape;
  var $itemColor$$ = $item$$22$$.markerColor ? $item$$22$$.markerColor : $item$$22$$.color, $itemPattern$$ = $item$$22$$.pattern;
  $markerY$$1_y$$218$$ += ($rowHeight$$7$$ - $itemSize_legendMarker$$) / 2;
  $markerX$$1_x$$253$$ = "lineWithMarker" == $item$$22$$.type ? $markerX$$1_x$$253$$ + (D.$DvtLegendRenderer$$.$_DEFAULT_ITEM_WIDTH$ - $itemSize_legendMarker$$) / 2 : $markerX$$1_x$$253$$;
  $itemPattern$$ ? ($itemSize_legendMarker$$ = new D.$DvtMarker$$($context$$562$$, $itemShape_legend$$25$$, $legendOptions$$4$$.skin, 0, 0, $itemSize_legendMarker$$, $itemSize_legendMarker$$), $itemSize_legendMarker$$.$setFill$(new D.$DvtPatternFill$$($itemPattern$$, $itemColor$$, "#FFFFFF")), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSize_legendMarker$$, $markerX$$1_x$$253$$, $markerY$$1_y$$218$$)) : ($itemSize_legendMarker$$ = new D.$DvtMarker$$($context$$562$$, $itemShape_legend$$25$$, 
  $legendOptions$$4$$.skin, $markerX$$1_x$$253$$, $markerY$$1_y$$218$$, $itemSize_legendMarker$$, $itemSize_legendMarker$$), $itemSize_legendMarker$$.$setSolidFill$($itemColor$$));
  $item$$22$$.borderColor && $itemSize_legendMarker$$.$setSolidStroke$($item$$22$$.borderColor);
  "square" == $itemShape_legend$$25$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($itemSize_legendMarker$$);
  return $itemSize_legendMarker$$
};
D.$DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($context$$563_line$$6$$, $stroke$$71_x$$254$$, $textY_y$$219$$, $rowHeight$$8$$, $item$$23_style$$85$$) {
  $textY_y$$219$$ += $rowHeight$$8$$ / 2;
  $context$$563_line$$6$$ = new D.$DvtLine$$($context$$563_line$$6$$, $stroke$$71_x$$254$$, $textY_y$$219$$, $stroke$$71_x$$254$$ + D.$DvtLegendRenderer$$.$_DEFAULT_ITEM_WIDTH$, $textY_y$$219$$);
  $stroke$$71_x$$254$$ = new D.$DvtSolidStroke$$($item$$23_style$$85$$.color, 1, $item$$23_style$$85$$.lineWidth);
  $item$$23_style$$85$$ = $item$$23_style$$85$$.lineStyle;
  "dashed" == $item$$23_style$$85$$ ? $stroke$$71_x$$254$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$23_style$$85$$), "4,2,4") : "dotted" == $item$$23_style$$85$$ && $stroke$$71_x$$254$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$23_style$$85$$), "2");
  $context$$563_line$$6$$.$setStroke$($stroke$$71_x$$254$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$563_line$$6$$);
  return $context$$563_line$$6$$
};
D.$DvtLegendRenderer$$.$_createHandle$ = function $$DvtLegendRenderer$$$$_createHandle$$($legend$$26$$, $context$$564_handle$$3$$, $availSpace$$35_clipRect$$4$$, $clipId$$3_id$$244$$) {
  var $boundRect$$2$$ = [$availSpace$$35_clipRect$$4$$.x, $availSpace$$35_clipRect$$4$$.y, $availSpace$$35_clipRect$$4$$.x + $availSpace$$35_clipRect$$4$$.$w$, $availSpace$$35_clipRect$$4$$.y + $availSpace$$35_clipRect$$4$$.$h$];
  $availSpace$$35_clipRect$$4$$ = $availSpace$$35_clipRect$$4$$.clone();
  $clipId$$3_id$$244$$ = $legend$$26$$.getId() + "_" + $clipId$$3_id$$244$$;
  $context$$564_handle$$3$$ = new D.$DvtHandle$$($context$$564_handle$$3$$, "legendHandler", $boundRect$$2$$, $availSpace$$35_clipRect$$4$$, $clipId$$3_id$$244$$);
  $legend$$26$$.$addChild$($context$$564_handle$$3$$);
  return $context$$564_handle$$3$$
};
D.$DvtLegendRenderer$$.$_createScrollableLegend$ = function $$DvtLegendRenderer$$$$_createScrollableLegend$$($legend$$27$$, $context$$565_scrollableLegend$$1$$, $availSpace$$36$$, $handle$$4$$, $legendHeight$$4$$, $numItems$$4$$) {
  $context$$565_scrollableLegend$$1$$ = new D.$DvtScrollableLegend$$($context$$565_scrollableLegend$$1$$, $availSpace$$36$$.x, $availSpace$$36$$.y, $availSpace$$36$$.$w$, $availSpace$$36$$.$h$, $legendHeight$$4$$, $handle$$4$$, $numItems$$4$$);
  $context$$565_scrollableLegend$$1$$.$setTouchManager$($legend$$27$$.$__getEventManager$().$getTouchManager$());
  $legend$$27$$.$addChild$($context$$565_scrollableLegend$$1$$);
  $handle$$4$$.$render$();
  return $context$$565_scrollableLegend$$1$$
};
});