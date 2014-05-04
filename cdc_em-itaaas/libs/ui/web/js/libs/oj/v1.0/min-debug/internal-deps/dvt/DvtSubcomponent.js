define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAttrGroups$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAttrGroups$$, D.$DvtObj$$, "DvtAttrGroups");
D.$DvtAttrGroups$$.prototype.get = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtDiscreteAttrGroups$$ = function $$DvtDiscreteAttrGroups$$$() {
  this.$_results$ = []
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiscreteAttrGroups$$, D.$DvtAttrGroups$$, "DvtDiscreteAttrGroups");
D.$DvtDiscreteAttrGroups$$.prototype.add = function $$DvtDiscreteAttrGroups$$$$add$($group$$4$$, $groupLabel$$, $params$$5$$) {
  this.$_results$.push({group:$group$$4$$, $groupLabel$:$groupLabel$$, $params$:$params$$5$$})
};
D.$DvtDiscreteAttrGroups$$.prototype.get = function $$DvtDiscreteAttrGroups$$$$get$($group$$5$$) {
  if(window.value === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$286$$ = 0;$i$$286$$ < this.$_results$.length;$i$$286$$++) {
    if(this.$_results$[$i$$286$$].group == $group$$5$$) {
      return this.$_results$[$i$$286$$].$params$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtContinuousAttrGroups$$ = function $$DvtContinuousAttrGroups$$$($minValue$$2$$, $maxValue$$3$$, $minLabel$$, $maxLabel$$, $ramp$$) {
  this.$_minValue$ = $minValue$$2$$;
  this.$_maxValue$ = $maxValue$$3$$;
  this.$_minLabel$ = $minLabel$$ ? $minLabel$$ : this.$_minValue$;
  this.$_maxLabel$ = $maxLabel$$ ? $maxLabel$$ : this.$_maxValue$;
  this.$_ramp$ = $ramp$$;
  this.$_range$ = this.$_maxValue$ - this.$_minValue$
};
D.$DvtObj$$.$createSubclass$(D.$DvtContinuousAttrGroups$$, D.$DvtAttrGroups$$, "DvtContinuousAttrGroups");
D.$DvtContinuousAttrGroups$$.prototype.get = function $$DvtContinuousAttrGroups$$$$get$($index$$85_ratio$$6_value$$76$$) {
  if((0,window.isNaN)($index$$85_ratio$$6_value$$76$$) || $index$$85_ratio$$6_value$$76$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $index$$85_ratio$$6_value$$76$$ = ($index$$85_ratio$$6_value$$76$$ - this.$_minValue$) / this.$_range$;
  $index$$85_ratio$$6_value$$76$$ = window.Math.max(window.Math.min($index$$85_ratio$$6_value$$76$$, 1), 0);
  $index$$85_ratio$$6_value$$76$$ *= this.$_ramp$.length - 1;
  return $index$$85_ratio$$6_value$$76$$ === window.Math.round($index$$85_ratio$$6_value$$76$$) ? this.$_ramp$[$index$$85_ratio$$6_value$$76$$] : D.$DvtColorUtils$$.$interpolateColor$(this.$_ramp$[window.Math.floor($index$$85_ratio$$6_value$$76$$)], this.$_ramp$[window.Math.ceil($index$$85_ratio$$6_value$$76$$)], $index$$85_ratio$$6_value$$76$$ - window.Math.floor($index$$85_ratio$$6_value$$76$$))
};
D.$DvtContinuousAttrGroups$$.prototype.$getMinLabel$ = (0,D.$JSCompiler_get$$)("$_minLabel$");
D.$DvtLegendAttrGroupsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAttrGroupsRenderer$$, D.$DvtObj$$, "DvtLegendAttrGroupsRenderer");
D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$ = 0.4;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$ = 1;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ = 50;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ = 10;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$ = 5;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_VALUE_COLOR$ = "#333333";
D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$ = function $$DvtLegendAttrGroupsRenderer$$$$renderAttrGroups$$($context$$707$$, $eventManager$$39$$, $container$$167$$, $availWidth$$14$$, $availHeight$$10$$, $attrGroups$$9$$, $styles$$21$$) {
  var $colorContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  $attrGroups$$9$$ && ($attrGroups$$9$$ instanceof D.$DvtContinuousAttrGroups$$ ? $colorContainer$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$($context$$707$$, $eventManager$$39$$, $container$$167$$, $availWidth$$14$$, $attrGroups$$9$$, $styles$$21$$) : $attrGroups$$9$$ instanceof D.$DvtDiscreteAttrGroups$$ && ($colorContainer$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$($context$$707$$, $container$$167$$, $availWidth$$14$$, $availHeight$$10$$, $attrGroups$$9$$, 
  $styles$$21$$)));
  return $colorContainer$$1$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsContinuous$$($context$$708_maxLabel$$3$$, $eventManager$$40$$, $container$$168_minLabelStr$$, $availWidth$$15$$, $attrGroups$$10_maxLabelStr$$, $maxLabelWidth$$4_minLabelWidth_styles$$22$$) {
  var $isRTL$$28$$ = D.$DvtAgent$$.$isRightToLeft$($context$$708_maxLabel$$3$$), $labelY$$4$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, $colorContainer$$2$$ = new D.$DvtContainer$$($context$$708_maxLabel$$3$$);
  $container$$168_minLabelStr$$.$addChild$($colorContainer$$2$$);
  $container$$168_minLabelStr$$ = $attrGroups$$10_maxLabelStr$$.$getMinLabel$();
  var $minLabel$$3$$ = new D.$DvtOutputText$$($context$$708_maxLabel$$3$$, $container$$168_minLabelStr$$, 0, $labelY$$4$$);
  $minLabel$$3$$.$setCSSStyle$($maxLabelWidth$$4_minLabelWidth_styles$$22$$.$labelStyle$);
  $minLabel$$3$$.$alignMiddle$();
  $colorContainer$$2$$.$addChild$($minLabel$$3$$);
  var $gradientRect$$ = new D.$DvtRect$$($context$$708_maxLabel$$3$$, 0, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$2$$ = $isRTL$$28$$ ? $attrGroups$$10_maxLabelStr$$.$_ramp$.slice(0).slice().reverse() : $attrGroups$$10_maxLabelStr$$.$_ramp$.slice(0);
  $gradientRect$$.$setFill$(new D.$DvtLinearGradientFill$$(0, $gradientWidth_ramp$$2$$));
  $maxLabelWidth$$4_minLabelWidth_styles$$22$$.borderColor && $gradientRect$$.$setSolidStroke$($maxLabelWidth$$4_minLabelWidth_styles$$22$$.borderColor);
  $colorContainer$$2$$.$addChild$($gradientRect$$);
  $gradientWidth_ramp$$2$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$;
  $attrGroups$$10_maxLabelStr$$ = $attrGroups$$10_maxLabelStr$$.$_maxLabel$;
  $context$$708_maxLabel$$3$$ = new D.$DvtOutputText$$($context$$708_maxLabel$$3$$, $attrGroups$$10_maxLabelStr$$, 0, $labelY$$4$$);
  $context$$708_maxLabel$$3$$.$setCSSStyle$($maxLabelWidth$$4_minLabelWidth_styles$$22$$.$labelStyle$);
  $context$$708_maxLabel$$3$$.$alignMiddle$();
  $colorContainer$$2$$.$addChild$($context$$708_maxLabel$$3$$);
  $isRTL$$28$$ ? ($maxLabelWidth$$4_minLabelWidth_styles$$22$$ = $context$$708_maxLabel$$3$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($maxLabelWidth$$4_minLabelWidth_styles$$22$$), $minLabel$$3$$.$setX$($maxLabelWidth$$4_minLabelWidth_styles$$22$$ + $gradientWidth_ramp$$2$$)) : ($maxLabelWidth$$4_minLabelWidth_styles$$22$$ = $minLabel$$3$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, 
  $gradientRect$$.$setTranslateX$($maxLabelWidth$$4_minLabelWidth_styles$$22$$), $context$$708_maxLabel$$3$$.$setX$($maxLabelWidth$$4_minLabelWidth_styles$$22$$ + $gradientWidth_ramp$$2$$));
  $eventManager$$40$$.$associate$($gradientRect$$, new D.$DvtSimpleObjPeer$$($container$$168_minLabelStr$$ + " - " + $attrGroups$$10_maxLabelStr$$));
  $colorContainer$$2$$.$getDimensions$().$w$ > $availWidth$$15$$ && ($colorContainer$$2$$.removeChild($minLabel$$3$$), $colorContainer$$2$$.removeChild($context$$708_maxLabel$$3$$), $gradientRect$$.$setTranslateX$(0));
  return $colorContainer$$2$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsDiscrete$$($context$$709_rect$$48$$, $container$$169_preferredDims$$, $actualDims_availWidth$$16$$, $availHeight$$12$$, $attrGroups$$11_mappings$$, $component$$17_styles$$23$$) {
  var $items$$20_legendOptions$$10$$ = [];
  $attrGroups$$11_mappings$$ = $attrGroups$$11_mappings$$.$_results$.slice(0);
  for(var $i$$811$$ = 0;$i$$811$$ < $attrGroups$$11_mappings$$.length;$i$$811$$++) {
    var $mapping$$5$$ = $attrGroups$$11_mappings$$[$i$$811$$];
    $items$$20_legendOptions$$10$$.push({text:$mapping$$5$$.$groupLabel$, color:$mapping$$5$$.$params$.color, pattern:$mapping$$5$$.$params$.pattern, borderColor:$component$$17_styles$$23$$.borderColor})
  }
  $items$$20_legendOptions$$10$$ = {sections:[{items:$items$$20_legendOptions$$10$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$component$$17_styles$$23$$.$labelStyle$.toString()};
  $component$$17_styles$$23$$ = (0,D.$DvtLegend$newInstance$$)($context$$709_rect$$48$$);
  $component$$17_styles$$23$$.setId(D.$JSCompiler_alias_NULL$$);
  $container$$169_preferredDims$$.$addChild$($component$$17_styles$$23$$);
  $container$$169_preferredDims$$ = $component$$17_styles$$23$$.$getPreferredSize$($items$$20_legendOptions$$10$$, $actualDims_availWidth$$16$$, $availHeight$$12$$ * D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$);
  $component$$17_styles$$23$$.$render$($items$$20_legendOptions$$10$$, $actualDims_availWidth$$16$$, $container$$169_preferredDims$$.$h$);
  $actualDims_availWidth$$16$$ = $component$$17_styles$$23$$.$getDimensions$();
  $context$$709_rect$$48$$ = new D.$DvtRect$$($context$$709_rect$$48$$, 0, 0, $actualDims_availWidth$$16$$.$w$, $container$$169_preferredDims$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$709_rect$$48$$);
  $component$$17_styles$$23$$.$addChildAt$($context$$709_rect$$48$$, 0);
  return $component$$17_styles$$23$$
};
D.$DvtBreadcrumbsDrillEvent$$ = function $$DvtBreadcrumbsDrillEvent$$$($id$$149$$) {
  this.Init("breadcrumbsDrill");
  this.$_id$ = $id$$149$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtBreadcrumbsDrillEvent");
D.$DvtBreadcrumbsDrillEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbs$$ = function $$DvtBreadcrumbs$$$($context$$389$$, $callback$$83$$, $callbackObj$$56$$, $options$$34$$) {
  this.Init($context$$389$$, $callback$$83$$, $callbackObj$$56$$, $options$$34$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbs$$, D.$DvtContainer$$, "DvtBreadcrumbs");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBreadcrumbs$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$390$$, $callback$$84$$, $callbackObj$$57$$, $options$$35$$) {
  D.$DvtBreadcrumbs$$.$superclass$.Init.call(this, $context$$390$$);
  this.$setOptions$($options$$35$$);
  this.$_eventHandler$ = new D.$DvtBreadcrumbsEventManager$$(this, $context$$390$$, $callback$$84$$, $callbackObj$$57$$);
  this.$_eventHandler$.$addListeners$(this);
  this.setId("breadcrumbs1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_curCrumbIdx$ = -1;
  this.$_crumbs$ = this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setOptions$ = function $$JSCompiler_prototypeAlias$$$$setOptions$$($options$$36$$) {
  this.$_options$ = D.$DvtBreadcrumbsDefaults$$.$calcOptions$($options$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($data$$25$$, $width$$56$$) {
  this.$_data$ = $data$$25$$ ? D.$DvtJSONUtils$$.clone($data$$25$$) : this.$_data$;
  this.$removeChildren$();
  this.$_crumbs$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtBreadcrumbsRenderer$$.$render$(this, this, $width$$56$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  var $prevCrumbIdx$$ = this.$_curCrumbIdx$;
  this.$_curCrumbIdx$ = -1;
  this.$_updateKeyboardFocusEffect$($prevCrumbIdx$$, this.$_curCrumbIdx$)
};
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$($prevIdx$$, $nextIdx$$) {
  var $prevKeyboardFocusRect$$ = this.$_keyboardFocusRect$, $context$$391_nextKeyboardFocusRect$$ = D.$JSCompiler_alias_NULL$$, $matrix$$8_nextCrumbObj$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this, $nextIdx$$);
  if($matrix$$8_nextCrumbObj$$) {
    var $bounds$$53_peer$$2$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $matrix$$8_nextCrumbObj$$);
    $bounds$$53_peer$$2$$ && $bounds$$53_peer$$2$$.$isDrillable$ && $bounds$$53_peer$$2$$.$_bDrillable$ ? ($context$$391_nextKeyboardFocusRect$$ = this.$_context$, $bounds$$53_peer$$2$$ = $matrix$$8_nextCrumbObj$$.$getDimensions$(), $matrix$$8_nextCrumbObj$$ = $matrix$$8_nextCrumbObj$$.$getMatrix$(), this.$_keyboardFocusRect$ = $context$$391_nextKeyboardFocusRect$$ = new D.$DvtKeyboardFocusEffect$$($context$$391_nextKeyboardFocusRect$$, this, $bounds$$53_peer$$2$$, $matrix$$8_nextCrumbObj$$)) : this.$_keyboardFocusRect$ = 
    D.$JSCompiler_alias_NULL$$
  }
  $prevKeyboardFocusRect$$ && $prevKeyboardFocusRect$$.$hide$();
  $context$$391_nextKeyboardFocusRect$$ && $context$$391_nextKeyboardFocusRect$$.show()
};
D.$JSCompiler_StaticMethods_getCrumb$$ = function $$JSCompiler_StaticMethods_getCrumb$$$($JSCompiler_StaticMethods_getCrumb$self$$, $crumbIdx$$) {
  var $crumbs$$ = $JSCompiler_StaticMethods_getCrumb$self$$.$_crumbs$;
  return 0 > $crumbIdx$$ || !$crumbs$$ || $crumbIdx$$ >= $crumbs$$.length ? D.$JSCompiler_alias_NULL$$ : $crumbs$$[$crumbIdx$$]
};
D.$DvtBreadcrumbsDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDefaults$$, D.$DvtObj$$, "DvtBreadcrumbsDefaults");
D.$DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:"font-size: 11px; color: #003286;", disabledLabelStyle:"font-size: 11px;", $__labelGap$:2, $__labelSeparator$:"\x3e"};
D.$DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($userOptions$$9$$) {
  var $defaults$$16$$ = D.$DvtBreadcrumbsDefaults$$.$_getDefaults$($userOptions$$9$$);
  return $userOptions$$9$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$9$$, $defaults$$16$$) : $defaults$$16$$
};
D.$DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
  return D.$DvtJSONUtils$$.clone(D.$DvtBreadcrumbsDefaults$$.$VERSION_1$)
};
D.$DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($options$$248$$, $defaultSize$$4$$) {
  return window.Math.ceil($defaultSize$$4$$ * $options$$248$$.layout.gapRatio)
};
D.$DvtBreadcrumbsEventManager$$ = function $$DvtBreadcrumbsEventManager$$$($breadcrumbs$$5$$, $context$$706$$, $callback$$146$$, $callbackObj$$116$$) {
  this.Init($context$$706$$, $callback$$146$$, $callbackObj$$116$$);
  this.$_breadcrumbs$ = $breadcrumbs$$5$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsEventManager$$, D.$DvtEventManager$$, "DvtBreadcrumbsEventManager");
D.$DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($event$$672$$) {
  D.$DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $event$$672$$);
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$672$$.target))
};
D.$DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($event$$673$$) {
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$673$$.target))
};
D.$JSCompiler_StaticMethods__processBreadcrumbs$$ = function $$JSCompiler_StaticMethods__processBreadcrumbs$$$($JSCompiler_StaticMethods__processBreadcrumbs$self$$, $obj$$353$$) {
  if($obj$$353$$ && $obj$$353$$ instanceof D.$DvtBreadcrumbsPeer$$ && $obj$$353$$.$_bDrillable$) {
    var $event$$674$$ = new D.$DvtBreadcrumbsDrillEvent$$($obj$$353$$.getId());
    $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$FireEvent$($event$$674$$, $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$_breadcrumbs$)
  }
};
D.$DvtBreadcrumbsEventManager$$.prototype.$handleKeyboardEvent$ = function $$DvtBreadcrumbsEventManager$$$$$handleKeyboardEvent$$($event$$675$$) {
  var $eventConsumed$$8$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$ = $event$$675$$.keyCode;
  if(9 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$) {
    var $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$ = this.$_breadcrumbs$, $prevCrumbIdx$$inline_8005$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$.$_curCrumbIdx$, $JSCompiler_inline_result$$8662_prevIndex$$inline_10560$$;
    $JSCompiler_inline_result$$8662_prevIndex$$inline_10560$$ = $prevCrumbIdx$$inline_8005$$;
    var $bForward$$inline_10561$$ = !$event$$675$$.shiftKey;
    $JSCompiler_inline_result$$8662_prevIndex$$inline_10560$$ = -1 == $JSCompiler_inline_result$$8662_prevIndex$$inline_10560$$ ? $bForward$$inline_10561$$ ? 0 : $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$.$_data$.$items$.length - 2 : $bForward$$inline_10561$$ ? $JSCompiler_inline_result$$8662_prevIndex$$inline_10560$$ == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$.$_data$.$items$.length - 2 ? -1 : ++$JSCompiler_inline_result$$8662_prevIndex$$inline_10560$$ : 
    0 == $JSCompiler_inline_result$$8662_prevIndex$$inline_10560$$ ? -1 : --$JSCompiler_inline_result$$8662_prevIndex$$inline_10560$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$.$_curCrumbIdx$ = $JSCompiler_inline_result$$8662_prevIndex$$inline_10560$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$.$_updateKeyboardFocusEffect$($prevCrumbIdx$$inline_8005$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$.$_curCrumbIdx$);
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$.$_curCrumbIdx$;
    -1 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$ ? $eventConsumed$$8$$ = D.$JSCompiler_alias_FALSE$$ : (0,D.$JSCompiler_StaticMethods_UpdateActiveElement$$)(this, (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$))
  }else {
    13 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_8003_curCrumbIdx_keyCode$$35$$ && (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, this.$_breadcrumbs$.$_curCrumbIdx$))
  }
  $eventConsumed$$8$$ && $event$$675$$.preventDefault();
  return $eventConsumed$$8$$
};
D.$DvtBreadcrumbsPeer$$ = function $$DvtBreadcrumbsPeer$$$($id$$292$$, $displayable$$77$$) {
  this.Init();
  this.$_id$ = $id$$292$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayable$ = $displayable$$77$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsPeer$$, D.$DvtSimpleObjPeer$$, "DvtBreadcrumbsPeer");
D.$DvtBreadcrumbsPeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$DvtBreadcrumbsRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtBreadcrumbsRenderer");
D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
D.$DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($breadcrumbs$$1$$, $container$$164$$, $width$$158$$) {
  for(var $context$$703$$ = $breadcrumbs$$1$$.$_context$, $dataItems$$2$$ = ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ ? ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ : [], $options$$243$$ = $breadcrumbs$$1$$.$__getOptions$(), $eventManager$$36$$ = $breadcrumbs$$1$$.$getEventManager$(), $labels$$21$$ = [], $peers$$4$$ = [], $i$$808$$ = 0;$i$$808$$ < $dataItems$$2$$.length;$i$$808$$++) {
    var $dataItem$$29_peer$$22$$ = $dataItems$$2$$[$i$$808$$];
    if($dataItem$$29_peer$$22$$) {
      var $label$$80$$ = D.$DvtBreadcrumbsRenderer$$.$_createLabel$($context$$703$$, $dataItem$$29_peer$$22$$.text ? $dataItem$$29_peer$$22$$.text : "", $options$$243$$, $i$$808$$ < $dataItems$$2$$.length - 1);
      $labels$$21$$.push($label$$80$$);
      $dataItem$$29_peer$$22$$ = new D.$DvtBreadcrumbsPeer$$($dataItem$$29_peer$$22$$.id, $label$$80$$);
      $eventManager$$36$$.$associate$($label$$80$$, $dataItem$$29_peer$$22$$);
      $peers$$4$$.push($dataItem$$29_peer$$22$$);
      $i$$808$$ < $dataItems$$2$$.length - 1 && ($label$$80$$.setCursor("pointer"), $dataItem$$29_peer$$22$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$))
    }
  }
  $breadcrumbs$$1$$.$_crumbs$ = $labels$$21$$;
  D.$DvtAgent$$.$isRightToLeft$($context$$703$$) ? D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($breadcrumbs$$1$$, $container$$164$$, $width$$158$$, $labels$$21$$, $peers$$4$$) : D.$DvtBreadcrumbsRenderer$$.$_positionLabels$($breadcrumbs$$1$$, $container$$164$$, $width$$158$$, $labels$$21$$, $peers$$4$$)
};
D.$DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($context$$704_state$$91$$, $dvtText_text$$105$$, $cssStyle$$39$$) {
  $dvtText_text$$105$$ = new D.$DvtOutputText$$($context$$704_state$$91$$, $dvtText_text$$105$$, 0, 0);
  $dvtText_text$$105$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $dvtText_text$$105$$.$setCSSStyle$($cssStyle$$39$$);
  var $padTop$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$39$$, "padding-top"), $padRight$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$39$$, "padding-right"), $padBottom$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$39$$, "padding-bottom"), $padLeft$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$39$$, "padding-left"), $labelDims$$11$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$704_state$$91$$, $dvtText_text$$105$$);
  $context$$704_state$$91$$ = new D.$DvtRect$$($context$$704_state$$91$$, 0, 0, $labelDims$$11$$.$w$ + $padLeft$$1$$ + $padRight$$1$$, $labelDims$$11$$.$h$ + $padTop$$1$$ + $padBottom$$1$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$704_state$$91$$);
  $context$$704_state$$91$$.$setCSSStyle$($cssStyle$$39$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dvtText_text$$105$$, $padLeft$$1$$, $padTop$$1$$);
  $context$$704_state$$91$$.$addChild$($dvtText_text$$105$$);
  return $context$$704_state$$91$$
};
D.$DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($context$$705_label$$81$$, $textStr$$7$$, $dwn$$17_dwnCss_options$$244$$, $bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$) {
  if($bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$ && ($dwn$$17_dwnCss_options$$244$$.$labelStyleOver$ || $dwn$$17_dwnCss_options$$244$$.$labelStyleDown$)) {
    var $ena$$21_enaCss$$ = new D.$DvtCSSStyle$$($dwn$$17_dwnCss_options$$244$$.$labelStyle$);
    $bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$ = new D.$DvtCSSStyle$$($dwn$$17_dwnCss_options$$244$$.$labelStyleOver$);
    $dwn$$17_dwnCss_options$$244$$ = new D.$DvtCSSStyle$$($dwn$$17_dwnCss_options$$244$$.$labelStyleDown$);
    $ena$$21_enaCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$705_label$$81$$, $textStr$$7$$, $ena$$21_enaCss$$);
    $bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$705_label$$81$$, $textStr$$7$$, $bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$);
    $dwn$$17_dwnCss_options$$244$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$705_label$$81$$, $textStr$$7$$, $dwn$$17_dwnCss_options$$244$$);
    $context$$705_label$$81$$ = new D.$DvtButton$$($context$$705_label$$81$$, $ena$$21_enaCss$$, $bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$, $dwn$$17_dwnCss_options$$244$$);
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($context$$705_label$$81$$, "link");
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($context$$705_label$$81$$, "label", $textStr$$7$$)
  }else {
    $bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$ = new D.$DvtCSSStyle$$($bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$ ? $dwn$$17_dwnCss_options$$244$$.$labelStyle$ : $dwn$$17_dwnCss_options$$244$$.$disabledLabelStyle$), (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$, "padding-left") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$, "padding-right") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$, 
    "padding-top") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$, "padding-bottom") ? $context$$705_label$$81$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$705_label$$81$$, $textStr$$7$$, $bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$) : ($context$$705_label$$81$$ = new D.$DvtOutputText$$($context$$705_label$$81$$, $textStr$$7$$, 0, 0), $context$$705_label$$81$$.$setCSSStyle$($bEnabled$$4_cssStyle$$40_ovr$$17_ovrCss$$))
  }
  return $context$$705_label$$81$$
};
D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($label$$82_text$$106$$) {
  if($label$$82_text$$106$$ instanceof D.$DvtButton$$) {
    return $label$$82_text$$106$$ = $label$$82_text$$106$$.$upState$.$getChildAt$(0), $label$$82_text$$106$$.$getTextString$()
  }
  $label$$82_text$$106$$ instanceof D.$DvtRect$$ && ($label$$82_text$$106$$ = $label$$82_text$$106$$.$getChildAt$(0));
  return $label$$82_text$$106$$.$getTextString$()
};
D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($label$$83$$, $maxWidth$$31$$) {
  if($label$$83$$ instanceof D.$DvtButton$$) {
    var $text$$107$$ = $label$$83$$.$upState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$107$$, window.Math.max($maxWidth$$31$$ - $text$$107$$.$getTranslateX$(), 0), window.Infinity, $text$$107$$.getParent());
    $text$$107$$ = $label$$83$$.$overState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$107$$, window.Math.max($maxWidth$$31$$ - $text$$107$$.$getTranslateX$(), 0), window.Infinity, $text$$107$$.getParent());
    $text$$107$$ = $label$$83$$.$downState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$107$$, window.Math.max($maxWidth$$31$$ - $text$$107$$.$getTranslateX$(), 0), window.Infinity, $text$$107$$.getParent())
  }else {
    $label$$83$$ instanceof D.$DvtRect$$ ? ($text$$107$$ = $label$$83$$.$getChildAt$(0), D.$DvtTextUtils$$.$fitText$($text$$107$$, window.Math.max($maxWidth$$31$$ - $text$$107$$.$getTranslateX$(), 0), window.Infinity, $text$$107$$.getParent())) : D.$DvtTextUtils$$.$fitText$($label$$83$$, $maxWidth$$31$$, window.Infinity, $label$$83$$.getParent())
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($breadcrumbs$$2_labelString$$6$$, $container$$165$$, $availWidth$$12$$, $labels$$22$$, $peers$$5$$) {
  for(var $options$$245$$ = $breadcrumbs$$2_labelString$$6$$.$__getOptions$(), $eventManager$$37$$ = $breadcrumbs$$2_labelString$$6$$.$getEventManager$(), $arDims$$ = [], $maxHeight$$22$$ = 0, $i$$809$$ = 0;$i$$809$$ < $labels$$22$$.length;$i$$809$$++) {
    $container$$165$$.$addChild$($labels$$22$$[$i$$809$$]);
    var $dims$$66_separator$$2$$ = $labels$$22$$[$i$$809$$].$getDimensions$();
    $arDims$$[$i$$809$$] = $dims$$66_separator$$2$$;
    $maxHeight$$22$$ = window.Math.max($dims$$66_separator$$2$$.$h$, $maxHeight$$22$$);
    $container$$165$$.removeChild($labels$$22$$[$i$$809$$])
  }
  for(var $x$$315$$ = 0, $i$$809$$ = 0;$i$$809$$ < $labels$$22$$.length;$i$$809$$++) {
    $container$$165$$.$addChild$($labels$$22$$[$i$$809$$]);
    $dims$$66_separator$$2$$ = $arDims$$[$i$$809$$];
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($labels$$22$$[$i$$809$$], $x$$315$$, 0.5 * ($maxHeight$$22$$ - $dims$$66_separator$$2$$.$h$));
    if(D.$DvtAgent$$.$isTouchDevice$()) {
      var $rect$$46_sepDims_separatorWidth$$ = new D.$DvtRect$$($container$$165$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$66_separator$$2$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$66_separator$$2$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$46_sepDims_separatorWidth$$);
      $labels$$22$$[$i$$809$$].$addChild$($rect$$46_sepDims_separatorWidth$$);
      $i$$809$$ < $peers$$5$$.length && $eventManager$$37$$.$associate$($rect$$46_sepDims_separatorWidth$$, $peers$$5$$[$i$$809$$])
    }
    if($x$$315$$ + $dims$$66_separator$$2$$.$w$ > $availWidth$$12$$) {
      $breadcrumbs$$2_labelString$$6$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$22$$[$i$$809$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$22$$[$i$$809$$], $availWidth$$12$$ - $x$$315$$);
      $i$$809$$ < $peers$$5$$.length ? $peers$$5$$[$i$$809$$].$setTooltip$($breadcrumbs$$2_labelString$$6$$) : $eventManager$$37$$.$associate$($labels$$22$$[$i$$809$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$2_labelString$$6$$));
      break
    }else {
      $x$$315$$ += $dims$$66_separator$$2$$.$w$ + $options$$245$$.$__labelGap$
    }
    if($i$$809$$ < $labels$$22$$.length - 1) {
      $dims$$66_separator$$2$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$2_labelString$$6$$);
      $container$$165$$.$addChild$($dims$$66_separator$$2$$);
      $rect$$46_sepDims_separatorWidth$$ = $dims$$66_separator$$2$$.$getDimensions$();
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dims$$66_separator$$2$$, $x$$315$$, 0.5 * ($maxHeight$$22$$ - $rect$$46_sepDims_separatorWidth$$.$h$));
      $rect$$46_sepDims_separatorWidth$$ = $rect$$46_sepDims_separatorWidth$$.$w$;
      if($x$$315$$ + $rect$$46_sepDims_separatorWidth$$ > $availWidth$$12$$) {
        $container$$165$$.removeChild($dims$$66_separator$$2$$);
        break
      }
      $x$$315$$ += $rect$$46_sepDims_separatorWidth$$ + $options$$245$$.$__labelGap$
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($breadcrumbs$$3_labelString$$7$$, $container$$166$$, $availWidth$$13_x$$316$$, $labels$$23$$, $peers$$6$$) {
  for(var $options$$246$$ = $breadcrumbs$$3_labelString$$7$$.$__getOptions$(), $eventManager$$38$$ = $breadcrumbs$$3_labelString$$7$$.$getEventManager$(), $i$$810$$ = 0;$i$$810$$ < $labels$$23$$.length;$i$$810$$++) {
    $container$$166$$.$addChild$($labels$$23$$[$i$$810$$]);
    var $dims$$67_separator$$3$$ = $labels$$23$$[$i$$810$$].$getDimensions$();
    if(D.$DvtAgent$$.$isTouchDevice$()) {
      var $rect$$47_separatorWidth$$1$$ = new D.$DvtRect$$($container$$166$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$67_separator$$3$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$67_separator$$3$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$47_separatorWidth$$1$$);
      $labels$$23$$[$i$$810$$].$addChild$($rect$$47_separatorWidth$$1$$);
      $i$$810$$ < $peers$$6$$.length && $eventManager$$38$$.$associate$($rect$$47_separatorWidth$$1$$, $peers$$6$$[$i$$810$$])
    }
    if(0 > $availWidth$$13_x$$316$$ - $dims$$67_separator$$3$$.$w$) {
      $breadcrumbs$$3_labelString$$7$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$23$$[$i$$810$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$23$$[$i$$810$$], $availWidth$$13_x$$316$$);
      $labels$$23$$[$i$$810$$].$setTranslateX$(0);
      $i$$810$$ < $peers$$6$$.length ? $peers$$6$$[$i$$810$$].$setTooltip$($breadcrumbs$$3_labelString$$7$$) : $eventManager$$38$$.$associate$($labels$$23$$[$i$$810$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$3_labelString$$7$$));
      break
    }else {
      $labels$$23$$[$i$$810$$].$setTranslateX$($availWidth$$13_x$$316$$ - $dims$$67_separator$$3$$.$w$), $availWidth$$13_x$$316$$ -= $dims$$67_separator$$3$$.$w$ + $options$$246$$.$__labelGap$
    }
    if($i$$810$$ < $labels$$23$$.length - 1) {
      if($dims$$67_separator$$3$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$3_labelString$$7$$), $container$$166$$.$addChild$($dims$$67_separator$$3$$), $rect$$47_separatorWidth$$1$$ = $dims$$67_separator$$3$$.$getDimensions$().$w$, 0 > $availWidth$$13_x$$316$$ - $rect$$47_separatorWidth$$1$$) {
        $container$$166$$.removeChild($dims$$67_separator$$3$$);
        break
      }else {
        $dims$$67_separator$$3$$.$setTranslateX$($availWidth$$13_x$$316$$ - $rect$$47_separatorWidth$$1$$), $availWidth$$13_x$$316$$ -= $rect$$47_separatorWidth$$1$$ + $options$$246$$.$__labelGap$
      }
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($breadcrumbs$$4_label$$84$$) {
  var $options$$247$$ = $breadcrumbs$$4_label$$84$$.$__getOptions$();
  $breadcrumbs$$4_label$$84$$ = new D.$DvtOutputText$$($breadcrumbs$$4_label$$84$$.$_context$, $options$$247$$.$__labelSeparator$, 0, 0);
  $breadcrumbs$$4_label$$84$$.$setCSSStyle$(new D.$DvtCSSStyle$$($options$$247$$.$labelStyle$));
  return $breadcrumbs$$4_label$$84$$
};
D.$DvtPanelDrawerEvent$$ = function $$DvtPanelDrawerEvent$$$($subtype$$6$$, $activePanel$$) {
  this.Init("dvtPanelDrawerEvent");
  this.$_subtype$ = $subtype$$6$$;
  this.$_activePanel$ = $activePanel$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEvent$$, D.$DvtBaseComponentEvent$$, "DvtPanelDrawerEvent");
D.$DvtPanelDrawerEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtPanelDrawer$$ = function $$DvtPanelDrawer$$$($context$$387$$, $callback$$81$$, $callbackObj$$54$$, $sid$$) {
  this.Init($context$$387$$, $callback$$81$$, $callbackObj$$54$$, $sid$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawer$$, D.$DvtContainer$$, "DvtPanelDrawer");
D.$DvtPanelDrawer$$.prototype.Init = function $$DvtPanelDrawer$$$$Init$($context$$388$$, $callback$$82$$, $callbackObj$$55$$, $sid$$1$$) {
  D.$DvtPanelDrawer$$.$superclass$.Init.call(this, $context$$388$$, D.$JSCompiler_alias_NULL$$, "panelDrawer" + $sid$$1$$);
  this.$_sid$ = $sid$$1$$;
  this.$_eventManager$ = new D.$DvtPanelDrawerEventManager$$($context$$388$$, $callback$$82$$, $callbackObj$$55$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtPanelDrawer$$);
  this.$_eventManager$.$associate$(this, this);
  this.$_callback$ = $callback$$82$$;
  this.$_callbackObj$ = $callbackObj$$55$$;
  this.$_panels$ = {};
  this.$_panelOrder$ = [];
  this.$_maxHeight$ = this.$_maxWidth$ = window.Number.MAX_VALUE;
  this.$_minWidth$ = 5;
  this.$_minHeight$ = 0;
  this.$_displayedPanelId$;
  this.$_oldDisplayedPanelId$;
  this.$_bTransition$ = this.$_bDisclosed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_contentPane$;
  this.$_activeContent$;
  this.$_expandedContent$;
  this.$_expandedContentPanel$;
  this.$_contentClipPath$;
  this.$_expandedBorder$;
  this.$_expandedBorderResizable$;
  this.$_tabs$ = {};
  this.$_discloseDirection$ = "left";
  this.$_dockSide$ = "top";
  this.$_isFixed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  $callbackObj$$55$$ && (this.$_styleMap$ = $callbackObj$$55$$.$getControlPanelStyleMap$());
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", "#bbc7d0");
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 2));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", "#ffffff");
  this.$_bgInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-color-inactive", "#dee4e7");
  this.$_borderInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-border-color-inactive", "#c1cede");
  this.$_bDeferPanelVisibility$ = D.$JSCompiler_alias_FALSE$$;
  this.$_scrollEnabled$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this);
  this.$_contentPadding$ = 10
};
D.$JSCompiler_StaticMethods_addPanel$$ = function $$JSCompiler_StaticMethods_addPanel$$$($JSCompiler_StaticMethods_addPanel$self$$, $panel$$, $upState$$6$$, $overState$$6$$, $downState$$6$$, $tooltip$$15$$, $id$$140$$) {
  $JSCompiler_StaticMethods_addPanel$self$$.$_panels$[$id$$140$$] = {panel:$panel$$, iconUp:$upState$$6$$, iconOver:$overState$$6$$, iconDown:$downState$$6$$, tooltip:$tooltip$$15$$};
  $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.push($id$$140$$);
  $JSCompiler_StaticMethods_addPanel$self$$.$_minHeight$ = 15 + 42 * $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.length
};
D.$DvtPanelDrawer$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtPanelDrawer$$.prototype.$getMaxContentWidth$ = function $$DvtPanelDrawer$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - (2 * this.$_contentPadding$ + 21)
};
D.$DvtPanelDrawer$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtPanelDrawer$$.prototype.$getMaxContentHeight$ = function $$DvtPanelDrawer$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - (2 * this.$_contentPadding$ + 21)
};
D.$JSCompiler_StaticMethods_GetPanel$$ = function $$JSCompiler_StaticMethods_GetPanel$$$($JSCompiler_StaticMethods_GetPanel$self$$, $id$$141$$) {
  return $JSCompiler_StaticMethods_GetPanel$self$$.$_panels$[$id$$141$$].panel
};
D.$JSCompiler_StaticMethods_setDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_setDisplayedPanelId$$$($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$145$$, $bImmediate$$5$$, $onEnd$$4$$) {
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$ = $id$$145$$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$isDisclosed$() && ($JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$145$$, $bImmediate$$5$$, $onEnd$$4$$));
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_getDisplayedPanelId$$$($JSCompiler_StaticMethods_getDisplayedPanelId$self$$) {
  var $panelId$$ = $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_displayedPanelId$;
  return!$panelId$$ && 0 < $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$.length ? $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$[0] : $panelId$$
};
D.$DvtPanelDrawer$$.prototype.$setDisclosed$ = function $$DvtPanelDrawer$$$$$setDisclosed$$($bDisclosed$$4_destX$$inline_3173$$, $anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, $onEnd$$5$$) {
  if(!this.$_bTransition$) {
    var $oldDisclosed$$ = this.$_bDisclosed$;
    this.$_bDisclosed$ = $bDisclosed$$4_destX$$inline_3173$$;
    if($oldDisclosed$$ != $bDisclosed$$4_destX$$inline_3173$$) {
      if(this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$, $bDisclosed$$4_destX$$inline_3173$$) {
        var $panel$$inline_3172$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $panel$$inline_3172$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_3172$$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
        (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $bDisclosed$$4_destX$$inline_3173$$ = -(0.8 * this.$_expandedContent$.getWidth());
        "right" == this.$_discloseDirection$ && ($bDisclosed$$4_destX$$inline_3173$$ = -$bDisclosed$$4_destX$$inline_3173$$, this.$_expandedContent$.$setX$((0.8 - 1) * this.$_expandedContent$.getWidth()));
        if($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$) {
          this.$_contentPane$.$setTranslateX$($bDisclosed$$4_destX$$inline_3173$$), $panel$$inline_3172$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_3172$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $onEnd$$5$$ && $onEnd$$5$$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          if($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$ = new D.$DvtAnimator$$(this.$_context$, 0.25), $anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$.$setEasing$(D.$DvtEasing$backOut$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $bDisclosed$$4_destX$$inline_3173$$), $panel$$inline_3172$$ && this.$_bDeferPanelVisibility$ ? 
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, function() {
            $panel$$inline_3172$$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
            $onEnd$$5$$ && $onEnd$$5$$()
          }) : $onEnd$$5$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, $onEnd$$5$$), $anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$) {
            var $thisRef$$inline_3175$$ = this;
            (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, function() {
              $thisRef$$inline_3175$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
            });
            $anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$.play()
          }
        }
        this.$ChangeTabsState$()
      }else {
        if($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$) {
          this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $onEnd$$5$$ && $onEnd$$5$$(), this.$ChangeTabsState$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          $anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
          $anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$.$setEasing$(D.$DvtEasing$backIn$$);
          (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, this.$RemoveExpandedContent$, this);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, this.$ChangeTabsState$, this);
          $onEnd$$5$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, $onEnd$$5$$);
          var $thisRef$$inline_3181$$ = this;
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$, function() {
            $thisRef$$inline_3181$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
          });
          $anim$$inline_3174_anim$$inline_3180_bImmediate$$6$$.play()
        }
      }
    }
  }
};
D.$DvtPanelDrawer$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_bDisclosed$");
D.$DvtPanelDrawer$$.prototype.$renderComponent$ = function $$DvtPanelDrawer$$$$$renderComponent$$() {
  this.$_contentPane$ || (this.$_contentPane$ = new D.$DvtContainer$$(this.$_context$, "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new D.$DvtContainer$$(this.$_context$, "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
  if(!this.$_isFixed$) {
    var $currX$$inline_3184$$ = -42;
    "right" == this.$_discloseDirection$ && ($currX$$inline_3184$$ = 0);
    var $currY$$inline_3185$$ = 15;
    if("top" == this.$_dockSide$) {
      for(var $i$$inline_3186$$ = 0;$i$$inline_3186$$ < this.$_panelOrder$.length;$i$$inline_3186$$++) {
        var $panelId$$inline_3187_tab$$inline_3188$$ = this.$_panelOrder$[$i$$inline_3186$$], $panelId$$inline_3187_tab$$inline_3188$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_3187_tab$$inline_3188$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_3187_tab$$inline_3188$$, $currX$$inline_3184$$, $currY$$inline_3185$$);
        $currY$$inline_3185$$ += 42
      }
    }else {
      if("bottom" == this.$_dockSide$) {
        $currY$$inline_3185$$ = -57;
        for($i$$inline_3186$$ = this.$_panelOrder$.length - 1;0 <= $i$$inline_3186$$;$i$$inline_3186$$--) {
          $panelId$$inline_3187_tab$$inline_3188$$ = this.$_panelOrder$[$i$$inline_3186$$], $panelId$$inline_3187_tab$$inline_3188$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_3187_tab$$inline_3188$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_3187_tab$$inline_3188$$, $currX$$inline_3184$$, $currY$$inline_3185$$), $currY$$inline_3185$$ -= 42
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_RenderTab$$ = function $$JSCompiler_StaticMethods_RenderTab$$$($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$2$$) {
  var $closedPath_downState$$7$$, $arPoints$$inline_3191_tab$$1$$;
  switch($JSCompiler_StaticMethods_RenderTab$self$$.$_discloseDirection$) {
    case "right":
      $arPoints$$inline_3191_tab$$1$$ = ["M", 0, 0, "L", 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 1, 42, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 42, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 1, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 0, 42];
      break;
    default:
      $arPoints$$inline_3191_tab$$1$$ = ["M", 42, 0, "L", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 0, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 42, 42]
  }
  $closedPath_downState$$7$$ = $arPoints$$inline_3191_tab$$1$$;
  $arPoints$$inline_3191_tab$$1$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$7$$, "pdcp_tab_" + $panelId$$2$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($arPoints$$inline_3191_tab$$1$$);
  $arPoints$$inline_3191_tab$$1$$.setCursor("pointer");
  $JSCompiler_StaticMethods_RenderTab$self$$.$_contentPane$.$addChildAt$($arPoints$$inline_3191_tab$$1$$, 0);
  $arPoints$$inline_3191_tab$$1$$.$setSolidFill$($JSCompiler_StaticMethods_RenderTab$self$$.$_bgInactiveColor$, $JSCompiler_StaticMethods_RenderTab$self$$.$_bgAlpha$);
  $arPoints$$inline_3191_tab$$1$$.$setSolidStroke$($JSCompiler_StaticMethods_RenderTab$self$$.$_borderInactiveColor$, 1, 1);
  var $panelObj$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$2$$], $icon$$11_upState$$7$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$7$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($icon$$11_upState$$7$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconUp, 9, 9);
  $icon$$11_upState$$7$$.$addChild$($panelObj$$.iconUp);
  var $overState$$7$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$7$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$7$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconOver, 9, 9);
  $overState$$7$$.$addChild$($panelObj$$.iconOver);
  $closedPath_downState$$7$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$7$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($closedPath_downState$$7$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconDown, 9, 9);
  $closedPath_downState$$7$$.$addChild$($panelObj$$.iconDown);
  $icon$$11_upState$$7$$ = new D.$DvtButton$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $icon$$11_upState$$7$$, $overState$$7$$, $closedPath_downState$$7$$);
  $icon$$11_upState$$7$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $icon$$11_upState$$7$$.setCursor("pointer");
  $panelObj$$.icon = $icon$$11_upState$$7$$;
  $arPoints$$inline_3191_tab$$1$$.$addChild$($icon$$11_upState$$7$$);
  $JSCompiler_StaticMethods_RenderTab$self$$.$_tabs$[$panelId$$2$$] = $arPoints$$inline_3191_tab$$1$$;
  $JSCompiler_StaticMethods_RenderTab$self$$.$_eventManager$.$associate$($arPoints$$inline_3191_tab$$1$$, {$HandleClick$:function() {
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)($JSCompiler_StaticMethods_RenderTab$self$$);
    $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$ = $panelId$$2$$;
    var $closedPath_downState$$7$$ = function $$closedPath_downState$$7$$$() {
      var $panelId$$2$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_context$.$getTooltipManager$();
      $panelId$$2$$ && $panelId$$2$$.$hideTooltip$()
    };
    $JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ == $panelId$$2$$ ? $JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$7$$) : ($JSCompiler_StaticMethods_RenderTab$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$2$$, D.$JSCompiler_alias_FALSE$$)) : ($JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, 
    D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$7$$), $JSCompiler_StaticMethods_RenderTab$self$$.$ApplyAlphasRollover$());
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_RenderTab$self$$.$FireListener$(new D.$DvtPanelDrawerEvent$$($JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? "show" : "hide", $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$))
  }, $getTooltip$:function() {
    return $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$2$$].tooltip
  }});
  $JSCompiler_StaticMethods_RenderTab$self$$.$addAccessibilityAttributes$($arPoints$$inline_3191_tab$$1$$, $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$2$$].tooltip);
  return $arPoints$$inline_3191_tab$$1$$
};
D.$JSCompiler_StaticMethods_ChangePanels$$ = function $$JSCompiler_StaticMethods_ChangePanels$$$($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$4$$, $bImmediate$$7_oldPanel$$, $onEnd$$6$$) {
  var $anim$$8$$ = D.$JSCompiler_alias_NULL$$;
  $bImmediate$$7_oldPanel$$ || ($anim$$8$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_ChangePanels$self$$.$_context$, 0.25));
  $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$ && ($bImmediate$$7_oldPanel$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$)) && $JSCompiler_StaticMethods_ChangePanels$self$$.$_expandedContentPanel$.removeChild($bImmediate$$7_oldPanel$$);
  (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$4$$, $anim$$8$$);
  $anim$$8$$ ? ($JSCompiler_StaticMethods_ChangePanels$self$$.$ApplyAlphasRollover$(), $onEnd$$6$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$8$$, $onEnd$$6$$), $anim$$8$$.play()) : $onEnd$$6$$ && $onEnd$$6$$()
};
D.$DvtPanelDrawer$$.prototype.$RemoveExpandedContent$ = function $$DvtPanelDrawer$$$$$RemoveExpandedContent$$() {
  this.$_expandedContent$ && (this.$_contentClipPath$ = D.$JSCompiler_alias_NULL$$, this.$_expandedContentPanel$.$removeChildren$(), (0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_activeContent$), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_DisplayPanel$$ = function $$JSCompiler_StaticMethods_DisplayPanel$$$($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$146$$, $anim$$11$$) {
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ = new D.$DvtRect$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, 1, 1, "pdcp_expandedContent"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_activeContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$setSolidFill$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgColor$, 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgAlpha$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$ = new D.$DvtScrollableContainer$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ == window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ - 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ == 
  window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ - 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, 10, "pdcp_expandedContentPanel" + $JSCompiler_StaticMethods_DisplayPanel$self$$.$_sid$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_scrollEnabled$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_horizScrollEnabled$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_vertScrollEnabled$ = 
  D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setSkinName$("alta"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_styleMap$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_styleMap$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setTranslateX$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setTranslateY$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$));
  var $panel$$2$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$146$$);
  if($panel$$2$$) {
    $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$addChild$($panel$$2$$);
    $anim$$11$$ && $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bDeferPanelVisibility$ && ($panel$$2$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$DvtPlayable$appendOnEnd$$)($anim$$11$$, function() {
      $panel$$2$$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }));
    if($JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$) {
      var $ecw$$inline_3211_oldPanel$$1$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$);
      $ecw$$inline_3211_oldPanel$$1$$ && $ecw$$inline_3211_oldPanel$$1$$.$removeEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
    }
    $panel$$2$$.$addEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
  }
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setFill$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 
  1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$));
  var $ecw$$inline_3211_oldPanel$$1$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $ech$$inline_3212$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $xx$$inline_3213$$ = 0, $dims$$inline_3215_yy$$inline_3214$$ = 0;
  (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$146$$) && ($dims$$inline_3215_yy$$inline_3214$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$getDimensionsWithStroke$(), $ecw$$inline_3211_oldPanel$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $dims$$inline_3215_yy$$inline_3214$$.$w$), $ech$$inline_3212$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, 
  $dims$$inline_3215_yy$$inline_3214$$.$h$), $xx$$inline_3213$$ = $dims$$inline_3215_yy$$inline_3214$$.x, $dims$$inline_3215_yy$$inline_3214$$ = $dims$$inline_3215_yy$$inline_3214$$.y);
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$146$$, $anim$$11$$, $ecw$$inline_3211_oldPanel$$1$$, $ech$$inline_3212$$, $xx$$inline_3213$$, $dims$$inline_3215_yy$$inline_3214$$)
};
D.$DvtPanelDrawer$$.prototype.$HandlePanelResize$ = function $$DvtPanelDrawer$$$$$HandlePanelResize$$($event$$273_yy$$37$$) {
  var $anim$$12$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  this.$_expandedContentPanel$.refresh();
  var $ecw_resizeWidth$$1$$ = $event$$273_yy$$37$$.getWidth(), $ech_resizeHeight$$1$$ = $event$$273_yy$$37$$.getHeight(), $sbPadding_xx$$38$$ = this.$_expandedContentPanel$.$_sbWidth$ + 10;
  this.$_expandedContentPanel$.$_hsb$ != D.$JSCompiler_alias_NULL$$ && ($ech_resizeHeight$$1$$ += $sbPadding_xx$$38$$);
  this.$_expandedContentPanel$.$_vsb$ != D.$JSCompiler_alias_NULL$$ && ($ecw_resizeWidth$$1$$ += $sbPadding_xx$$38$$);
  $ecw_resizeWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)(this, $ecw_resizeWidth$$1$$);
  $ech_resizeHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)(this, $ech_resizeHeight$$1$$);
  $sbPadding_xx$$38$$ = $event$$273_yy$$37$$.$getX$() ? $event$$273_yy$$37$$.$getX$() : 0;
  $event$$273_yy$$37$$ = $event$$273_yy$$37$$.$getY$() ? $event$$273_yy$$37$$.$getY$() : 0;
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $anim$$12$$, $ecw_resizeWidth$$1$$, $ech_resizeHeight$$1$$, $sbPadding_xx$$38$$, $event$$273_yy$$37$$);
  $anim$$12$$.play()
};
D.$JSCompiler_StaticMethods__refreshPanelSize$$ = function $$JSCompiler_StaticMethods__refreshPanelSize$$$($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$148$$, $anim$$14$$, $ecw$$2_firstTab_lastTab$$, $ech$$2$$, $expandedContentWidth_tab$$2_xx$$40$$, $yy$$39$$) {
  var $panel$$4$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$148$$);
  $anim$$14$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $panel$$4$$, $panel$$4$$.$getTranslateX$, $panel$$4$$.$setTranslateX$, -$expandedContentWidth_tab$$2_xx$$40$$) : $panel$$4$$.$setTranslateX$(-$expandedContentWidth_tab$$2_xx$$40$$);
  $anim$$14$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $panel$$4$$, $panel$$4$$.$getTranslateY$, $panel$$4$$.$setTranslateY$, -$yy$$39$$) : $panel$$4$$.$setTranslateY$(-$yy$$39$$);
  var $clipRect$$3$$ = new D.$DvtRectangle$$($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ecw$$2_firstTab_lastTab$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ech$$2$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$);
  $expandedContentWidth_tab$$2_xx$$40$$ = 1.25 * $ecw$$2_firstTab_lastTab$$;
  $anim$$14$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getWidth, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$, $expandedContentWidth_tab$$2_xx$$40$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getHeight, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$, $ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_bDeferPanelVisibility$ ? (0,D.$DvtPlayable$appendOnEnd$$)($anim$$14$$, function() {
    $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$3$$)
  }) : (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeRectangle", $JSCompiler_StaticMethods__refreshPanelSize$self$$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_getContentClipPath$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$, $clipRect$$3$$), "left" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$) : "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, 
  "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$, 
  $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$, -$ech$$2$$))) : ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$($expandedContentWidth_tab$$2_xx$$40$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$($ech$$2$$), "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$(-$ecw$$2_firstTab_lastTab$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$($ecw$$2_firstTab_lastTab$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$($ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$(-$ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$($ech$$2$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$($ech$$2$$)), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$3$$));
  $expandedContentWidth_tab$$2_xx$$40$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$edgeX_id$$148$$];
  var $borderPath$$;
  $edgeX_id$$148$$ = $ecw$$2_firstTab_lastTab$$;
  "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($edgeX_id$$148$$ = -$ecw$$2_firstTab_lastTab$$);
  "top" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ ? $expandedContentWidth_tab$$2_xx$$40$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$40$$.$getTranslateY$(), "M", 0, $expandedContentWidth_tab$$2_xx$$40$$.$getTranslateY$() + 42], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$.length - 
  1]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42, "L", 0, $ech$$2$$, "L", 1.25 * $edgeX_id$$148$$, $ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, $ech$$2$$, "L", $edgeX_id$$148$$, $ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)) : 
  "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($expandedContentWidth_tab$$2_xx$$40$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$40$$.$getTranslateY$() + 42, "M", 0, $expandedContentWidth_tab$$2_xx$$40$$.$getTranslateY$()], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[0]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$()), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $edgeX_id$$148$$ *= 1.25, $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$(), "L", 0, -$ech$$2$$, "L", $edgeX_id$$148$$, -$ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, -$ech$$2$$, "L", $edgeX_id$$148$$, -$ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)));
  $anim$$14$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$, "typePath", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getCommands$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$, $borderPath$$) : $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$($borderPath$$)
};
D.$DvtPanelDrawer$$.prototype.$_setContentClipPath$ = function $$DvtPanelDrawer$$$$$_setContentClipPath$$($rect$$15$$) {
  if(this.$_expandedContentPanel$ && $rect$$15$$) {
    var $clipPath$$4$$ = new D.$DvtClipPath$$("pdcp" + this.$_sid$);
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$4$$, $rect$$15$$.x, $rect$$15$$.y, $rect$$15$$.$w$, $rect$$15$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_expandedContentPanel$, $clipPath$$4$$)
  }
  this.$_contentClipPath$ = $rect$$15$$
};
D.$DvtPanelDrawer$$.prototype.$_getContentClipPath$ = (0,D.$JSCompiler_get$$)("$_contentClipPath$");
D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$ = function $$JSCompiler_StaticMethods_GetExpandedContentWidth$$$($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$, $preferredWidth$$) {
  var $ww$$49$$ = $preferredWidth$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) && $ww$$49$$ < $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) {
    $ww$$49$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$
  }
  $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && $ww$$49$$ > $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && ($ww$$49$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$);
  return $ww$$49$$
};
D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$ = function $$JSCompiler_StaticMethods_GetExpandedContentHeight$$$($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$, $preferredHeight$$) {
  var $hh$$45$$ = $preferredHeight$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) && $hh$$45$$ < $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) {
    $hh$$45$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$
  }
  $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && $hh$$45$$ > $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && ($hh$$45$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$);
  return $hh$$45$$
};
D.$JSCompiler_StaticMethods_ApplyFillAlpha$$ = function $$JSCompiler_StaticMethods_ApplyFillAlpha$$$($JSCompiler_StaticMethods_ApplyFillAlpha$self$$, $alpha$$26$$) {
  if($JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$) {
    var $fill$$19$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$getFill$().clone();
    $fill$$19$$.$setAlpha$($alpha$$26$$);
    $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$setFill$($fill$$19$$)
  }
  for(var $panelId$$5$$ in $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$) {
    var $tab$$3$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$[$panelId$$5$$];
    $tab$$3$$ && ($fill$$19$$ = $tab$$3$$.$getFill$().clone(), $fill$$19$$.$setAlpha$($alpha$$26$$), $tab$$3$$.$setFill$($fill$$19$$))
  }
};
D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$ = function $$JSCompiler_StaticMethods_ApplyStrokeAlpha$$$($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$) {
  if($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$) {
    var $stroke$$31$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$getStroke$().clone();
    $stroke$$31$$.$setAlpha$(1);
    $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$setStroke$($stroke$$31$$)
  }
  $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$ && ($stroke$$31$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$getStroke$().clone(), $stroke$$31$$.$setAlpha$(1), $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$setStroke$($stroke$$31$$));
  for(var $panelId$$6$$ in $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$) {
    var $tab$$4$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$[$panelId$$6$$];
    $tab$$4$$ && ($stroke$$31$$ = $tab$$4$$.$getStroke$().clone(), $stroke$$31$$.$setAlpha$(1), $tab$$4$$.$setStroke$($stroke$$31$$))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$deEmphasizeStart$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeStart$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$7$$ in this.$_tabs$) {
    var $icon$$12$$ = this.$_panels$[$panelId$$7$$].icon;
    $icon$$12$$ && $icon$$12$$.$setAlpha$(1)
  }
};
D.$JSCompiler_prototypeAlias$$.$deEmphasizeEnd$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeEnd$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$8$$ in this.$_tabs$) {
    var $icon$$13$$ = this.$_panels$[$panelId$$8$$].icon;
    $icon$$13$$ && $icon$$13$$.$setAlpha$(1)
  }
  this.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOver$$() {
  this.$ApplyAlphasRollover$()
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOut$$() {
  this.$_bFocus$ || this.$ApplyAlphasRollout$()
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollover$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollover$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1)
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollout$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollout$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$)
};
D.$JSCompiler_prototypeAlias$$.$ChangeTabsState$ = function $$JSCompiler_prototypeAlias$$$$ChangeTabsState$$() {
  for(var $panelId$$9$$ in this.$_tabs$) {
    var $tab$$5$$ = this.$_tabs$[$panelId$$9$$];
    $tab$$5$$ && ($panelId$$9$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this) && this.$isDisclosed$() ? ($tab$$5$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderColor$, 1)) : ($tab$$5$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderInactiveColor$, 1)));
    var $bActivePanel$$ = this.$isDisclosed$() && $panelId$$9$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $icon$$14$$ = this.$_panels$[$panelId$$9$$].icon;
    $icon$$14$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($icon$$14$$, $bActivePanel$$);
    $bActivePanel$$ ? this.$_activeContent$.$addChild$($tab$$5$$) : this.$_contentPane$.$addChildAt$($tab$$5$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$addAccessibilityAttributes$$($obj$$213$$, $desc$$1$$) {
  $obj$$213$$ && $desc$$1$$ && ((0,D.$JSCompiler_StaticMethods_setAriaRole$$)($obj$$213$$, "img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($obj$$213$$, "label", $desc$$1$$))
};
D.$JSCompiler_StaticMethods_setMaxContainerHeight$$ = function $$JSCompiler_StaticMethods_setMaxContainerHeight$$$($JSCompiler_StaticMethods_setMaxContainerHeight$self$$, $height$$49$$) {
  if(!$JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ || $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ < $height$$49$$) {
    $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ = $height$$49$$
  }
};
D.$DvtPanelDrawer$$.prototype.$getDimensions$ = function $$DvtPanelDrawer$$$$$getDimensions$$($dim$$63_targetCoordinateSpace$$27$$) {
  $dim$$63_targetCoordinateSpace$$27$$ = D.$DvtPanelDrawer$$.$superclass$.$getDimensions$.call(this, $dim$$63_targetCoordinateSpace$$27$$);
  $dim$$63_targetCoordinateSpace$$27$$.$w$ /= 1.25;
  return $dim$$63_targetCoordinateSpace$$27$$
};
D.$DvtPanelDrawerEventManager$$ = function $$DvtPanelDrawerEventManager$$$($context$$702$$, $callback$$145$$, $callbackObj$$115$$) {
  this.Init($context$$702$$, $callback$$145$$, $callbackObj$$115$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEventManager$$, D.$DvtEventManager$$, "DvtPanelDrawerEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawerEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$667$$) {
  var $obj$$348$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$667$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $event$$667$$);
  $obj$$348$$ && ($obj$$348$$.$HandleClick$ && $obj$$348$$.$HandleClick$($event$$667$$), $event$$667$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$668$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$668$$);
  var $obj$$349$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$668$$));
  $obj$$349$$ && ($obj$$349$$.$isDoubleClickable$ && ($obj$$349$$.$isDoubleClickable$() && $obj$$349$$.$HandleDblClick$) && $obj$$349$$.$HandleDblClick$($event$$668$$), $event$$668$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$669$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$669$$);
  var $obj$$350$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$669$$));
  $obj$$350$$ && $obj$$350$$.$HandleRollOver$ && $obj$$350$$.$HandleRollOver$($event$$669$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$670$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$670$$);
  var $obj$$351$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$670$$));
  $obj$$351$$ && $obj$$351$$.$HandleRollOut$ && $obj$$351$$.$HandleRollOut$($event$$670$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$671$$) {
  var $obj$$352$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$671$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$671$$);
  $obj$$352$$ && ($obj$$352$$.$HandleClick$ && $obj$$352$$.$HandleClick$($event$$671$$), $event$$671$$.stopPropagation())
};
D.$DvtAccordion$$ = function $$DvtAccordion$$$($context$$381$$, $id$$133$$, $w$$55$$, $h$$57$$, $eventManager$$19$$, $images$$8$$, $styleMap$$55$$) {
  this.Init($context$$381$$, $id$$133$$, $w$$55$$, $h$$57$$, $eventManager$$19$$, $images$$8$$, $styleMap$$55$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordion$$, D.$DvtContainer$$, "DvtAccordion");
D.$DvtAccordion$$.prototype.Init = function $$DvtAccordion$$$$Init$($context$$382$$, $id$$134$$, $w$$56$$, $h$$58$$, $eventManager$$20$$, $images$$9$$, $styleMap$$56$$) {
  D.$DvtAccordion$$.$superclass$.Init.call(this, $context$$382$$, D.$JSCompiler_alias_NULL$$, $id$$134$$);
  this.$_images$ = $images$$9$$;
  this.$_styleMap$ = (new D.$DvtAccordionDefaults$$).$calcOptions$($styleMap$$56$$);
  this.$_sections$ = {};
  this.$_sectionOrder$ = [];
  this.$_maxWidth$ = $w$$56$$;
  this.$_minWidth$ = 0;
  this.$_maxHeight$ = $h$$58$$;
  this.$_bExpandMany$ = this.$_bCollapseAll$ = D.$JSCompiler_alias_FALSE$$;
  this.$_eventManager$ = $eventManager$$20$$;
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this)
};
D.$JSCompiler_StaticMethods_addSection$$ = function $$JSCompiler_StaticMethods_addSection$$$($JSCompiler_StaticMethods_addSection$self$$, $accordionSection_title$$8$$, $sectionContent$$, $isActive$$, $id$$135$$) {
  $id$$135$$ || ($id$$135$$ = "accordion_" + $accordionSection_title$$8$$.replace(/ /g, "_") + window.Math.floor(1E9 * window.Math.random()));
  $accordionSection_title$$8$$ = new D.$DvtAccordionSection$$($JSCompiler_StaticMethods_addSection$self$$.$_context$, $sectionContent$$, $accordionSection_title$$8$$, $isActive$$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_addSection$self$$, $JSCompiler_StaticMethods_addSection$self$$.$_eventManager$, $id$$135$$, $JSCompiler_StaticMethods_addSection$self$$.$_images$, $JSCompiler_StaticMethods_addSection$self$$.$_styleMap$);
  $JSCompiler_StaticMethods_addSection$self$$.$_sections$[$id$$135$$] = $accordionSection_title$$8$$;
  $JSCompiler_StaticMethods_addSection$self$$.$_sectionOrder$.push($id$$135$$);
  $JSCompiler_StaticMethods_addSection$self$$.$addChild$($accordionSection_title$$8$$)
};
D.$DvtAccordion$$.prototype.$render$ = function $$DvtAccordion$$$$$render$$() {
  for(var $maxSectionWidth$$ = (0,D.$JSCompiler_StaticMethods_getMaxSectionWidth$$)(this), $bHasActive$$ = D.$JSCompiler_alias_FALSE$$, $i$$276$$ = 0;$i$$276$$ < this.$_sectionOrder$.length;$i$$276$$++) {
    var $section$$5$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$276$$);
    $section$$5$$.$render$($maxSectionWidth$$);
    $bHasActive$$ && !this.$_bExpandMany$ && $section$$5$$.setActive(D.$JSCompiler_alias_FALSE$$);
    $section$$5$$.$_isActive$ && $section$$5$$.$_isCollapsible$ && ($bHasActive$$ = D.$JSCompiler_alias_TRUE$$)
  }
  !$bHasActive$$ && (0 < this.$_sectionOrder$.length && !this.$_bCollapseAll$) && (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, 0).setActive(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$DvtAccordion$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtAccordion$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtAccordion$$.prototype.$Update$ = function $$DvtAccordion$$$$$Update$$($activeSection_activeSectionId$$) {
  $activeSection_activeSectionId$$ = this.$_sections$[$activeSection_activeSectionId$$];
  var $JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$ = $activeSection_activeSectionId$$.$_isActive$;
  if($JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$) {
    if($JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$) {
      if($activeSection_activeSectionId$$.$_isCollapsible$) {
        if(this.$_bCollapseAll$) {
          $JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          for(var $expandedSectionCounter$$inline_3133$$ = 0, $i$$inline_3134$$ = 0;$i$$inline_3134$$ < this.$_sectionOrder$.length;$i$$inline_3134$$++) {
            $JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$inline_3134$$), $JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$.$_isActive$ && $expandedSectionCounter$$inline_3133$$++
          }
          $JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$ = 1 < $expandedSectionCounter$$inline_3133$$
        }
      }else {
        $JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$ = D.$JSCompiler_alias_FALSE$$
      }
    }
    $JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$ && $activeSection_activeSectionId$$.setActive(D.$JSCompiler_alias_FALSE$$)
  }else {
    if(!this.$_bExpandMany$) {
      for($JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$ = 0;$JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$ < this.$_sectionOrder$.length;$JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$++) {
        (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $JSCompiler_temp$$308_currActiveState_i$$277_section$$inline_3132$$).setActive(D.$JSCompiler_alias_FALSE$$)
      }
    }
    $activeSection_activeSectionId$$.setActive(D.$JSCompiler_alias_TRUE$$)
  }
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$JSCompiler_StaticMethods_getMaxSectionWidth$$ = function $$JSCompiler_StaticMethods_getMaxSectionWidth$$$($JSCompiler_StaticMethods_getMaxSectionWidth$self$$) {
  if(!$JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$) {
    for(var $maxSectionWidth$$1$$ = 0, $paddingX$$ = $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_styleMap$.paddingX, $i$$278$$ = 0;$i$$278$$ < $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_sectionOrder$.length;$i$$278$$++) {
      var $secWidth_section$$6$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods_getMaxSectionWidth$self$$, $i$$278$$), $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$ = $secWidth_section$$6$$;
      if(!$JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$_titleDim$) {
        var $dim$$inline_3138_text$$inline_3137$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$_context$, $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$_title$);
        $dim$$inline_3138_text$$inline_3137$$.$setCSSStyle$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$_titleStyle$);
        if($dim$$inline_3138_text$$inline_3137$$ = $dim$$inline_3138_text$$inline_3137$$.$measureDimensions$()) {
          $dim$$inline_3138_text$$inline_3137$$.$w$ = $dim$$inline_3138_text$$inline_3137$$.$w$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$_imageWidth$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$_textPadding$
        }
        $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$_titleDim$ = $dim$$inline_3138_text$$inline_3137$$
      }
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$_titleDim$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$w$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_3136_dim$$61$$.$w$);
      $secWidth_section$$6$$ = $secWidth_section$$6$$.$getContentDimensions$().$w$ + 2 * $paddingX$$;
      $secWidth_section$$6$$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $secWidth_section$$6$$)
    }
    $maxSectionWidth$$1$$ = window.Math.min($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxWidth$);
    $maxSectionWidth$$1$$ = window.Math.max($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_minWidth$);
    $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$ = $maxSectionWidth$$1$$
  }
  return $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$
};
D.$JSCompiler_StaticMethods_getSectionByIndex$$ = function $$JSCompiler_StaticMethods_getSectionByIndex$$$($JSCompiler_StaticMethods_getSectionByIndex$self$$, $index$$82$$) {
  return 0 <= $index$$82$$ && $index$$82$$ < $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$.length ? $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sections$[$JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$[$index$$82$$]] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__drawSections$$ = function $$JSCompiler_StaticMethods__drawSections$$$($JSCompiler_StaticMethods__drawSections$self$$) {
  for(var $currY$$13_dims$$22$$ = 0, $i$$281$$ = 0;$i$$281$$ < $JSCompiler_StaticMethods__drawSections$self$$.$_sectionOrder$.length;$i$$281$$++) {
    var $section$$9$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods__drawSections$self$$, $i$$281$$);
    $section$$9$$.$setTranslateY$($currY$$13_dims$$22$$);
    $section$$9$$.$_isActive$ ? ($section$$9$$.expand(), $currY$$13_dims$$22$$ += $section$$9$$.$getDimensionsWithStroke$().$h$, $currY$$13_dims$$22$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.paddingY) : ($section$$9$$.collapse(), $currY$$13_dims$$22$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.sectionHeader.headerHeight)
  }
  $currY$$13_dims$$22$$ = $JSCompiler_StaticMethods__drawSections$self$$.$getDimensionsWithStroke$();
  $JSCompiler_StaticMethods__drawSections$self$$.$FireListener$(new D.$DvtResizeEvent$$($currY$$13_dims$$22$$.$w$, $currY$$13_dims$$22$$.$h$, 0, 0))
};
D.$DvtAccordionSection$$ = function $$DvtAccordionSection$$$($context$$700$$, $section$$16$$, $title$$12$$, $isActive$$2$$, $isCollapsible$$1$$, $parent$$93$$, $eventManager$$34$$, $id$$290$$, $images$$26$$, $styleMap$$97$$) {
  this.Init($context$$700$$, $section$$16$$, $title$$12$$, $isActive$$2$$, $isCollapsible$$1$$, $parent$$93$$, $eventManager$$34$$, $id$$290$$, $images$$26$$, $styleMap$$97$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionSection$$, D.$DvtContainer$$, "DvtAccordionSection");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAccordionSection$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$701$$, $section$$17$$, $title$$13$$, $isActive$$3$$, $isCollapsible$$2$$, $parent$$94$$, $eventManager$$35$$, $id$$291$$, $images$$27$$, $styleMap$$98$$) {
  D.$DvtAccordionSection$$.$superclass$.Init.call(this, $context$$701$$, D.$JSCompiler_alias_NULL$$, $id$$291$$);
  this.$_parent$ = $parent$$94$$;
  this.$_images$ = $images$$27$$;
  this.$_title$ = $title$$13$$;
  this.$_id$ = $id$$291$$;
  this.$_sectionContent$ = $section$$17$$;
  this.$_collapsedBtn$ = this.$_expandedBtn$ = D.$JSCompiler_alias_NULL$$;
  this.$_isActive$ = (this.$_isCollapsible$ = $isCollapsible$$2$$) ? $isActive$$3$$ : D.$JSCompiler_alias_TRUE$$;
  this.$_eventManager$ = $eventManager$$35$$;
  this.$_styleMap$ = $styleMap$$98$$;
  this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
  this.$_paddingX$ = this.$_styleMap$.paddingX;
  this.$_paddingY$ = this.$_styleMap$.paddingY;
  this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
  this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
  this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
  this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.setActive = (0,D.$JSCompiler_set$$)("$_isActive$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  var $dim$$86$$ = D.$JSCompiler_alias_NULL$$;
  0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $dim$$86$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $dim$$86$$ = this.$_sectionContent$.$getDimensions$();
  return $dim$$86$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($base$$inline_7993_proxy$$inline_7992_width$$156$$) {
  var $height$$inline_7990_text$$inline_7994$$ = this.$_headerHeight$;
  if(this.$_isCollapsible$) {
    this.$_images$.$getAttr$ ? (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionExpEna"), this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionExpOvr"), this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$), window.dwn = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionExpDwn"), this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$)) : (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionExpEna, this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionExpOvr, this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$), window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionExpDwn, this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$));
    this.$_expandedBtn$ = new D.$DvtButton$$(this.$_context$, window.ena, window.ovr, window.dwn);
    this.$_images$.$getAttr$ ? (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionColEna"), this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionColOvr"), this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$), window.dwn = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionColDwn"), this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$)) : (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionColEna, this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionColOvr, this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$), window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionColDwn, this.$_title$, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$));
    this.$_collapsedBtn$ = new D.$DvtButton$$(this.$_context$, window.ena, window.ovr, window.dwn);
    var $thisRef$$inline_7991$$ = this;
    $base$$inline_7993_proxy$$inline_7992_width$$156$$ = {$HandleClick$:function $$base$$inline_7993_proxy$$inline_7992_width$$156$$$$HandleClick$$() {
      $thisRef$$inline_7991$$.$_parent$.$Update$($thisRef$$inline_7991$$.getId())
    }};
    this.$_eventManager$.$associate$(this.$_expandedBtn$, $base$$inline_7993_proxy$$inline_7992_width$$156$$);
    this.$_eventManager$.$associate$(this.$_collapsedBtn$, $base$$inline_7993_proxy$$inline_7992_width$$156$$)
  }else {
    $base$$inline_7993_proxy$$inline_7992_width$$156$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)(this, 3, $base$$inline_7993_proxy$$inline_7992_width$$156$$, $height$$inline_7990_text$$inline_7994$$), $height$$inline_7990_text$$inline_7994$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)(this, this.$_title$), this.$_header$ = new D.$DvtContainer$$(this.$_context$), this.$_header$.$addChild$($base$$inline_7993_proxy$$inline_7992_width$$156$$), this.$_header$.$addChild$($height$$inline_7990_text$$inline_7994$$)
  }
  this.$_isCollapsible$ ? this.$_isActive$ ? (this.$addChildAt$(this.$_expandedBtn$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$)) : this.$addChild$(this.$_collapsedBtn$) : (this.$addChildAt$(this.$_header$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + 
  this.$_paddingY$))
};
D.$JSCompiler_prototypeAlias$$.collapse = function $$JSCompiler_prototypeAlias$$$collapse$() {
  this.$_isCollapsible$ && (0 <= this.$getChildIndex$(this.$_expandedBtn$) && this.removeChild(this.$_expandedBtn$), 0 <= this.$getChildIndex$(this.$_sectionContent$) && this.removeChild(this.$_sectionContent$), this.$addChild$(this.$_collapsedBtn$), this.setActive(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.expand = function $$JSCompiler_prototypeAlias$$$expand$() {
  0 <= this.$getChildIndex$(this.$_collapsedBtn$) && this.removeChild(this.$_collapsedBtn$);
  this.$addChild$(this.$_expandedBtn$);
  this.$addChild$(this.$_sectionContent$);
  this.$_sectionContent$.$setTranslateX$(this.$_paddingX$);
  this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$);
  this.setActive(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods__createHeaderState$$ = function $$JSCompiler_StaticMethods__createHeaderState$$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$, $base$$7_state$$88$$, $image$$22_uri$$20$$, $label$$78_text$$103$$, $ww$$129$$, $hh$$111$$) {
  var $imageWidth$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$.$_imageWidth$, $imageHeight$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$.$_imageHeight$, $imageOffsetY$$ = ($JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$.$_headerHeight$ - $imageHeight$$) / 2, $buttonState$$5$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$.$_context$);
  $base$$7_state$$88$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$, $base$$7_state$$88$$, $ww$$129$$, $hh$$111$$);
  $buttonState$$5$$.$addChild$($base$$7_state$$88$$);
  ($image$$22_uri$$20$$ = $image$$22_uri$$20$$ ? new D.$DvtImage$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$.$_context$, $image$$22_uri$$20$$, 0, $imageOffsetY$$, $imageWidth$$, $imageHeight$$) : D.$JSCompiler_alias_NULL$$) && $buttonState$$5$$.$addChild$($image$$22_uri$$20$$);
  $label$$78_text$$103$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$, $label$$78_text$$103$$, $ww$$129$$ - $imageWidth$$ - 0, $hh$$111$$, $buttonState$$5$$);
  D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$.$_context$) ? ($JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$ = $label$$78_text$$103$$.$measureDimensions$(), $label$$78_text$$103$$.$setTranslateX$($ww$$129$$ - $JSCompiler_StaticMethods__createHeaderState$self_dim$$90$$.$w$ - $imageWidth$$), $image$$22_uri$$20$$ && $image$$22_uri$$20$$.$setTranslateX$($ww$$129$$ - $imageWidth$$)) : $label$$78_text$$103$$.$setTranslateX$($imageWidth$$);
  return $buttonState$$5$$
};
D.$JSCompiler_StaticMethods__createButtonText$$ = function $$JSCompiler_StaticMethods__createButtonText$$$($JSCompiler_StaticMethods__createButtonText$self$$, $dims$$65_label$$79$$, $ww$$130$$, $hh$$112$$, $container$$163$$) {
  var $text$$104$$ = D.$JSCompiler_alias_NULL$$;
  if($dims$$65_label$$79$$) {
    $text$$104$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods__createButtonText$self$$.$_context$, $dims$$65_label$$79$$);
    $text$$104$$.$setCSSStyle$($JSCompiler_StaticMethods__createButtonText$self$$.$_titleStyle$);
    D.$DvtTextUtils$$.$fitText$($text$$104$$, $ww$$130$$, $hh$$112$$, $container$$163$$);
    $dims$$65_label$$79$$ = $text$$104$$.$measureDimensions$();
    if(!$JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$w$ < $dims$$65_label$$79$$.$w$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$h$ < $dims$$65_label$$79$$.$h$) {
      $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ = $dims$$65_label$$79$$
    }
    $text$$104$$.$setTranslateY$(($JSCompiler_StaticMethods__createButtonText$self$$.$_headerHeight$ - $dims$$65_label$$79$$.$h$) / 2)
  }
  return $text$$104$$
};
D.$JSCompiler_StaticMethods__createButtonBase$$ = function $$JSCompiler_StaticMethods__createButtonBase$$$($JSCompiler_StaticMethods__createButtonBase$self_base$$8$$, $state$$90$$, $ww$$131$$, $hh$$113$$) {
  var $style$$106$$ = D.$JSCompiler_alias_NULL$$;
  switch($state$$90$$) {
    case 1:
      $style$$106$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$8$$.$_styleMap$.sectionHeader.styleOvr;
      break;
    case 2:
      $style$$106$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$8$$.$_styleMap$.sectionHeader.styleDwn;
      break;
    case 3:
      $style$$106$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$8$$.$_styleMap$.sectionHeader.styleDis;
      break;
    default:
      $style$$106$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$8$$.$_styleMap$.sectionHeader.styleEna
  }
  $JSCompiler_StaticMethods__createButtonBase$self_base$$8$$ = new D.$DvtRect$$($JSCompiler_StaticMethods__createButtonBase$self_base$$8$$.$_context$, 0, 0, $ww$$131$$, $hh$$113$$);
  $JSCompiler_StaticMethods__createButtonBase$self_base$$8$$.$setStroke$((0,D.$DvtAccordionSection$_getStroke$$)($style$$106$$));
  $JSCompiler_StaticMethods__createButtonBase$self_base$$8$$.$setFill$((0,D.$DvtAccordionSection$_getFill$$)($style$$106$$));
  return $JSCompiler_StaticMethods__createButtonBase$self_base$$8$$
};
D.$DvtAccordionSection$_getFill$$ = function $$DvtAccordionSection$_getFill$$$($angle$$55_gradObj$$6_style$$107$$) {
  var $arColors$$34_color$$88$$ = $angle$$55_gradObj$$6_style$$107$$.$getStyle$("background-color");
  $angle$$55_gradObj$$6_style$$107$$ = (0,D.$JSCompiler_StaticMethods_getBackgroundImage$$)($angle$$55_gradObj$$6_style$$107$$);
  var $arAlphas$$32_fill$$70$$ = D.$JSCompiler_alias_NULL$$;
  if($angle$$55_gradObj$$6_style$$107$$ && $angle$$55_gradObj$$6_style$$107$$ instanceof D.$DvtCSSGradient$$) {
    var $arColors$$34_color$$88$$ = $angle$$55_gradObj$$6_style$$107$$.$_arColors$, $arAlphas$$32_fill$$70$$ = $angle$$55_gradObj$$6_style$$107$$.$_arAlphas$, $arStops$$27$$ = $angle$$55_gradObj$$6_style$$107$$.$_arRatios$;
    $angle$$55_gradObj$$6_style$$107$$ = $angle$$55_gradObj$$6_style$$107$$.$getAngle$();
    $arAlphas$$32_fill$$70$$ = new D.$DvtLinearGradientFill$$($angle$$55_gradObj$$6_style$$107$$, $arColors$$34_color$$88$$, $arAlphas$$32_fill$$70$$, $arStops$$27$$)
  }else {
    $arColors$$34_color$$88$$ && ($arAlphas$$32_fill$$70$$ = new D.$DvtSolidFill$$($arColors$$34_color$$88$$, 1))
  }
  return $arAlphas$$32_fill$$70$$
};
D.$DvtAccordionSection$_getStroke$$ = function $$DvtAccordionSection$_getStroke$$$($color$$89_style$$108$$) {
  $color$$89_style$$108$$ = $color$$89_style$$108$$.$getStyle$("border-color");
  return new D.$DvtSolidStroke$$($color$$89_style$$108$$, 1, 1)
};
D.$DvtAccordionDefaults$$ = function $$DvtAccordionDefaults$$$() {
  this.Init({skyros:D.$DvtAccordionDefaults$VERSION_1$$, alta:D.$DvtAccordionDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAccordionDefaults");
D.$DvtAccordionDefaults$VERSION_1$$ = {skin:"alta", sectionHeader:{styleEna:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), 
styleDis:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:0, paddingY:0};
D.$DvtAccordionDefaults$SKIN_ALTA$$ = {};
D.$DvtTrain$$ = function $$DvtTrain$$$($context$$383$$, $eventManager$$21$$, $labels$$1$$, $buttonStyles$$7$$, $id$$136$$) {
  this.Init($context$$383$$, $eventManager$$21$$, $labels$$1$$, $buttonStyles$$7$$, $id$$136$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTrain$$, D.$DvtContainer$$, "DvtTrain");
D.$DvtTrain$$.prototype.Init = function $$DvtTrain$$$$Init$($context$$384$$, $eventManager$$22$$, $labels$$2$$, $buttonStyles$$8$$, $id$$137$$) {
  D.$DvtTrain$$.$superclass$.Init.call(this, $context$$384$$, D.$JSCompiler_alias_NULL$$, $id$$137$$);
  this.$_tooltipManager$ = $context$$384$$.$getTooltipManager$();
  this.$_labels$ = $labels$$2$$;
  this.$_buttonStyles$ = $buttonStyles$$8$$;
  this.$_count$ = $labels$$2$$.length;
  this.$_buttons$ = (0,window.Array)(this.$_count$);
  this.$_selectedIndex$ = 0;
  this.$RenderSelf$($eventManager$$22$$)
};
D.$DvtTrain$$.prototype.$setSelectedIndex$ = function $$DvtTrain$$$$$setSelectedIndex$$($index$$83$$) {
  0 <= $index$$83$$ && $index$$83$$ < this.$_count$ && (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, this.$_selectedIndex$, $index$$83$$)
};
D.$DvtTrain$$.prototype.$HandleClick$ = function $$DvtTrain$$$$$HandleClick$$($event$$270_selIndex$$2$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$270_selIndex$$2$$);
  for(var $event$$inline_3144_i$$282$$ = 0;$event$$inline_3144_i$$282$$ < this.$_buttons$.length;$event$$inline_3144_i$$282$$++) {
    if($event$$270_selIndex$$2$$.target.getParent() === this.$_buttons$[$event$$inline_3144_i$$282$$]) {
      $event$$270_selIndex$$2$$ = this.$_selectedIndex$;
      (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, $event$$270_selIndex$$2$$, $event$$inline_3144_i$$282$$);
      $event$$270_selIndex$$2$$ != $event$$inline_3144_i$$282$$ && ($event$$inline_3144_i$$282$$ = new D.$DvtTrainEvent$$(this.$_selectedIndex$), this.$FireListener$($event$$inline_3144_i$$282$$, D.$JSCompiler_alias_FALSE$$));
      break
    }
  }
};
D.$JSCompiler_StaticMethods_SelectedIndexChanged$$ = function $$JSCompiler_StaticMethods_SelectedIndexChanged$$$($JSCompiler_StaticMethods_SelectedIndexChanged$self$$, $button$$18_oldIndex$$1$$, $newIndex$$3$$) {
  $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_selectedIndex$ = $newIndex$$3$$;
  if($button$$18_oldIndex$$1$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$button$$18_oldIndex$$1$$]) {
    $button$$18_oldIndex$$1$$.$overState$ && $button$$18_oldIndex$$1$$.$overState$.setCursor("pointer"), $button$$18_oldIndex$$1$$.$downState$ && $button$$18_oldIndex$$1$$.$downState$.setCursor("pointer"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$18_oldIndex$$1$$, D.$JSCompiler_alias_FALSE$$)
  }
  if($button$$18_oldIndex$$1$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$newIndex$$3$$]) {
    $button$$18_oldIndex$$1$$.$overState$ && $button$$18_oldIndex$$1$$.$overState$.setCursor("default"), $button$$18_oldIndex$$1$$.$downState$ && $button$$18_oldIndex$$1$$.$downState$.setCursor("default"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$18_oldIndex$$1$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtTrain$$.prototype.$RenderSelf$ = function $$DvtTrain$$$$$RenderSelf$$($eventManager$$23$$) {
  var $bBiDi$$4$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$), $buttonSize_buttonStyle$$inline_3147$$;
  if(!this.$_buttonSize$) {
    if(this.$_buttonStyles$ && ($buttonSize_buttonStyle$$inline_3147$$ = this.$_buttonStyles$[0])) {
      this.$_buttonSize$ = (0,D.$DvtCSSStyle$toNumber$$)($buttonSize_buttonStyle$$inline_3147$$.getWidth())
    }
    this.$_buttonSize$ || (this.$_buttonSize$ = 8)
  }
  $buttonSize_buttonStyle$$inline_3147$$ = this.$_buttonSize$;
  for(var $i$$283$$ = 0;$i$$283$$ < this.$_count$;$i$$283$$++) {
    var $button$$19$$, $button$$inline_3150_j$$24$$ = $button$$19$$ = this.$CreateButton$($buttonSize_buttonStyle$$inline_3147$$, $i$$283$$ == this.$_selectedIndex$, this.$_labels$[$i$$283$$]);
    $button$$inline_3150_j$$24$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    D.$DvtAgent$$.$isTouchDevice$() || $button$$inline_3150_j$$24$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    $button$$inline_3150_j$$24$$ = $i$$283$$;
    $bBiDi$$4$$ && ($button$$inline_3150_j$$24$$ = this.$_count$ - 1 - $i$$283$$);
    $eventManager$$23$$ && $eventManager$$23$$.$associate$($button$$19$$, $button$$19$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$19$$, $button$$inline_3150_j$$24$$ * $buttonSize_buttonStyle$$inline_3147$$ + 3 * ($button$$inline_3150_j$$24$$ + 1), 1);
    this.$addChild$($button$$19$$);
    this.$_buttons$[$i$$283$$] = $button$$19$$
  }
};
D.$DvtTrain$$.prototype.$CreateButtonState$ = function $$DvtTrain$$$$$CreateButtonState$$($url$$26$$, $buttonSize$$2$$) {
  return new D.$DvtImage$$(this.$_context$, $url$$26$$, 0, 0, $buttonSize$$2$$, $buttonSize$$2$$)
};
D.$JSCompiler_StaticMethods_MakeButtonState$$ = function $$JSCompiler_StaticMethods_MakeButtonState$$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$, $buttonSize$$3$$, $state$$22$$, $bSelected$$2$$) {
  var $bdColor$$inline_3156_style$$62_url$$27$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$_buttonStyles$ ? $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$_buttonStyles$[$state$$22$$] : D.$JSCompiler_alias_NULL$$;
  if($bdColor$$inline_3156_style$$62_url$$27$$ = $bdColor$$inline_3156_style$$62_url$$27$$ ? $bdColor$$inline_3156_style$$62_url$$27$$.$getStyle$("content") : D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$CreateButtonState$($bdColor$$inline_3156_style$$62_url$$27$$, $buttonSize$$3$$)
  }else {
    var $buttonStyle$$inline_3155$$, $bgColor$$inline_3157$$, $offset$$inline_3158$$;
    2 == $state$$22$$ ? ($offset$$inline_3158$$ = 0, $bgColor$$inline_3157$$ = "#61bde3", $bdColor$$inline_3156_style$$62_url$$27$$ = "#0066ff", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$_buttonStyles$ && ($buttonStyle$$inline_3155$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$_buttonStyles$[2])) : ($offset$$inline_3158$$ = 1, $bgColor$$inline_3157$$ = "#c0cbd5", $bdColor$$inline_3156_style$$62_url$$27$$ = 
    "#5d7891", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$_buttonStyles$ && ($buttonStyle$$inline_3155$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$_buttonStyles$[0]));
    $buttonStyle$$inline_3155$$ && ($buttonStyle$$inline_3155$$.$getStyle$("border-color") && ($bdColor$$inline_3156_style$$62_url$$27$$ = $buttonStyle$$inline_3155$$.$getStyle$("border-color")), $buttonStyle$$inline_3155$$.$getStyle$("background-color") && ($bgColor$$inline_3157$$ = $buttonStyle$$inline_3155$$.$getStyle$("background-color")));
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$_context$, $offset$$inline_3158$$, $offset$$inline_3158$$, $buttonSize$$3$$ - 2 * $offset$$inline_3158$$, $buttonSize$$3$$ - 2 * $offset$$inline_3158$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$setSolidFill$($bgColor$$inline_3157$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.$setSolidStroke$($bdColor$$inline_3156_style$$62_url$$27$$)
  }
  $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$.setCursor(0 == $state$$22$$ || $bSelected$$2$$ ? "default" : "pointer");
  return $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$391_shape$$57_shape$$inline_3159$$
};
D.$DvtTrain$$.prototype.$CreateButton$ = function $$DvtTrain$$$$$CreateButton$$($button$$22_buttonSize$$4$$, $bSelected$$3$$, $tooltip$$14$$) {
  $button$$22_buttonSize$$4$$ = new D.$DvtButton$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$22_buttonSize$$4$$, 0, $bSelected$$3$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$22_buttonSize$$4$$, 1, $bSelected$$3$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$22_buttonSize$$4$$, 2, $bSelected$$3$$), D.$JSCompiler_alias_NULL$$);
  $button$$22_buttonSize$$4$$.$setTooltip$($tooltip$$14$$);
  $button$$22_buttonSize$$4$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $bSelected$$3$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$22_buttonSize$$4$$, $bSelected$$3$$);
  return $button$$22_buttonSize$$4$$
};
D.$DvtTrainEvent$$ = function $$DvtTrainEvent$$$($index$$84$$) {
  this.Init("dvtTrain");
  this.type = this.$getType$();
  this.$_index$ = $index$$84$$
};
(0,D.$goog$exportSymbol$$)("DvtTrainEvent", D.$DvtTrainEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTrainEvent$$, D.$DvtBaseComponentEvent$$, "DvtTrainEvent");
D.$DvtTrainEvent$$.TYPE = "dvtTrain";
D.$DvtTrainEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtTrainEvent$$.prototype.getIndex = D.$DvtTrainEvent$$.prototype.$getIndex$;
D.DvtOverviewWindow = function $DvtOverviewWindow$($context$$385$$, $id$$138$$, $x$$179$$, $y$$151$$, $ww$$47$$, $hh$$43$$) {
  this.Init($context$$385$$, $id$$138$$, $x$$179$$, $y$$151$$, $ww$$47$$, $hh$$43$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtOverviewWindow, D.$DvtContainer$$, "DvtOverviewWindow");
D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
D.DvtOverviewWindow.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$386$$, $id$$139$$, $x$$180$$, $y$$152$$, $ww$$48$$, $hh$$44$$) {
  D.DvtOverviewWindow.$superclass$.Init.call(this, $context$$386$$, D.$JSCompiler_alias_NULL$$, $id$$139$$);
  this.$_x$ = $x$$180$$;
  this.$_y$ = $y$$152$$;
  this.$_ww$ = $ww$$48$$;
  this.$_hh$ = $hh$$44$$;
  this.$_skinStyle$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  this.$_md$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panEnable$ = D.$JSCompiler_alias_TRUE$$;
  this.$_overview$ && (D.$DvtAgent$$.$isTouchDevice$() ? (this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, D.$JSCompiler_alias_NULL$$));
  this.$removeChildren$();
  this.$_overview$ = this.$_viewport$ = D.$JSCompiler_alias_NULL$$;
  var $bgColor$$9_clipPath$$3$$ = new D.$DvtClipPath$$(this.getId());
  (0,D.$JSCompiler_StaticMethods_addRect$$)($bgColor$$9_clipPath$$3$$, 0, 0, this.$_ww$, this.$_hh$);
  this.$_overview$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, $bgColor$$9_clipPath$$3$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_overview$);
  this.$addChild$(this.$_overview$);
  this.$_viewport$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
  $bgColor$$9_clipPath$$3$$ = this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$);
  this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$), D.$JSCompiler_alias_NULL$$, 2);
  this.$_viewport$.$setSolidFill$($bgColor$$9_clipPath$$3$$);
  this.$_viewport$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_overview$.$addChild$(this.$_viewport$);
  D.$DvtAgent$$.$isTouchDevice$() ? (this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, 
  this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_setViewportDimensions$$ = function $$JSCompiler_StaticMethods_setViewportDimensions$$$($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$62_vx$$, $animator$$12$$) {
  var $topLeft_vh$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$62_vx$$.x, $dim$$62_vx$$.y, $animator$$12$$), $bottomRight$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$62_vx$$.x + $dim$$62_vx$$.$w$, $dim$$62_vx$$.y + $dim$$62_vx$$.$h$, $animator$$12$$);
  $dim$$62_vx$$ = $topLeft_vh$$.x;
  var $vy$$ = $topLeft_vh$$.y, $vw$$ = $bottomRight$$.x - $topLeft_vh$$.x, $topLeft_vh$$ = $bottomRight$$.y - $topLeft_vh$$.y;
  $animator$$12$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$12$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getX$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$, $dim$$62_vx$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$12$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getY$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$, $vy$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$12$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getWidth, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$, $vw$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$12$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getHeight, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$, $topLeft_vh$$)) : ($JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$($dim$$62_vx$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$($vy$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$($vw$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$($topLeft_vh$$))
};
D.$JSCompiler_StaticMethods_getViewportDimensions$$ = function $$JSCompiler_StaticMethods_getViewportDimensions$$$($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$) {
  var $topLeft$$1$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.$getX$(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.$getY$());
  $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.$getX$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.getWidth(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.$getY$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.getHeight());
  return new D.$DvtRectangle$$($topLeft$$1$$.x, $topLeft$$1$$.y, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.x - $topLeft$$1$$.x, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.y - $topLeft$$1$$.y)
};
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.$_mouseDown$ = function $$JSCompiler_prototypeAlias$$$$_mouseDown$$($evt$$34_viewportEvent$$) {
  if(!this.$_md$ && this.$_panEnable$) {
    this.$_md$ = D.$JSCompiler_alias_TRUE$$;
    var $offset$$23$$ = this.$_getRelativePosition$($evt$$34_viewportEvent$$);
    $evt$$34_viewportEvent$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$23$$), $evt$$34_viewportEvent$$);
    this.$FireListener$($evt$$34_viewportEvent$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseMove$ = function $$JSCompiler_prototypeAlias$$$$_mouseMove$$($evt$$35_viewportEvent$$1$$) {
  if(this.$_md$ && this.$_panEnable$) {
    var $offset$$24$$ = this.$_getRelativePosition$($evt$$35_viewportEvent$$1$$);
    $evt$$35_viewportEvent$$1$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$24$$), $evt$$35_viewportEvent$$1$$);
    this.$FireListener$($evt$$35_viewportEvent$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseUp$ = function $$JSCompiler_prototypeAlias$$$$_mouseUp$$() {
  this.$_md$ && this.$_panEnable$ && (this.$_md$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$_mouseOut$ = function $$JSCompiler_prototypeAlias$$$$_mouseOut$$() {
  this.$_mouseUp$()
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($evt$$38_touches$$7$$) {
  var $pageX$$8$$, $pageY$$8$$;
  D.$DvtAgent$$.$isTouchDevice$() ? ($evt$$38_touches$$7$$ = $evt$$38_touches$$7$$.touches, 0 < $evt$$38_touches$$7$$.length && ($pageX$$8$$ = $evt$$38_touches$$7$$[0].pageX, $pageY$$8$$ = $evt$$38_touches$$7$$[0].pageY)) : ($pageX$$8$$ = $evt$$38_touches$$7$$.pageX, $pageY$$8$$ = $evt$$38_touches$$7$$.pageY);
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $pageX$$8$$, $pageY$$8$$)
};
D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$ = function $$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$$($JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$, $vx$$1$$, $vy$$1$$) {
  var $tx$$7$$ = 0, $ty$$7$$ = 0, $sx$$12$$ = 1, $sy$$12$$ = 1;
  $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$ && ($tx$$7$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateX$(), $ty$$7$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateY$(), $sx$$12$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleX$(), $sy$$12$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$(($vx$$1$$ - $tx$$7$$) / $sx$$12$$, ($vy$$1$$ - $ty$$7$$) / $sy$$12$$)
};
D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$ = function $$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$$($JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$, $cx$$21$$, $cy$$22$$, $animator$$13$$) {
  var $tx$$8$$ = 0, $ty$$8$$ = 0, $sx$$13$$ = 1, $sy$$13$$ = 1;
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$ && ($tx$$8$$ = $animator$$13$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$13$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$(), $ty$$8$$ = $animator$$13$$ ? 
  (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$13$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$(), $sx$$13$$ = $animator$$13$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$13$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$(), $sy$$13$$ = $animator$$13$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$13$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$, D.$JSCompiler_alias_TRUE$$) : 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$($cx$$21$$ * $sx$$13$$ + $tx$$8$$, $cy$$22$$ * $sy$$13$$ + $ty$$8$$)
};
D.DvtOverviewWindow.prototype.$getSkinStyle$ = (0,D.$JSCompiler_get$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$setSkinStyle$ = (0,D.$JSCompiler_set$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$getSkinStyleAttr$ = function $DvtOverviewWindow$$$getSkinStyleAttr$$($attr$$22$$) {
  return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$attr$$22$$] ? this.$_skinStyle$[$attr$$22$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$ = function $$JSCompiler_StaticMethods__getCenteredViewportDimensions$$$($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $pos$$21$$) {
  var $overviewStart_topLeft$$2$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_overview$, new D.$DvtPoint$$(0, 0)), $bottomRight$$2_viewportDims$$ = $JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_viewport$.$getDimensions$(), $centeredViewportX$$ = $pos$$21$$.x - $overviewStart_topLeft$$2$$.x - $bottomRight$$2_viewportDims$$.$w$ / 2, $centeredViewportY$$ = $pos$$21$$.y - $overviewStart_topLeft$$2$$.y - $bottomRight$$2_viewportDims$$.$h$ / 
  2, $overviewStart_topLeft$$2$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$, $centeredViewportY$$), $bottomRight$$2_viewportDims$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$ + $bottomRight$$2_viewportDims$$.$w$, $centeredViewportY$$ + $bottomRight$$2_viewportDims$$.$h$);
  return new D.$DvtRectangle$$($overviewStart_topLeft$$2$$.x, $overviewStart_topLeft$$2$$.y, $bottomRight$$2_viewportDims$$.x - $overviewStart_topLeft$$2$$.x, $bottomRight$$2_viewportDims$$.y - $overviewStart_topLeft$$2$$.y)
};
D.DvtOverviewWindow.prototype.$SetViewportRectangle$ = function $DvtOverviewWindow$$$SetViewportRectangle$$($rect$$14$$) {
  this.$_viewport$.$setX$($rect$$14$$.x);
  this.$_viewport$.$setY$($rect$$14$$.y);
  this.$_viewport$.$setWidth$($rect$$14$$.$w$);
  this.$_viewport$.$setHeight$($rect$$14$$.$h$)
};
D.DvtOverviewWindow.prototype.$GetViewportRectangle$ = function $DvtOverviewWindow$$$GetViewportRectangle$$() {
  return new D.$DvtRectangle$$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight())
};
D.DvtOverviewWindow.prototype.$getDimensions$ = function $DvtOverviewWindow$$$getDimensions$$($targetCoordinateSpace$$26$$) {
  var $bounds$$52$$ = new D.$DvtRectangle$$(0, 0, this.$_ww$, this.$_hh$);
  return!$targetCoordinateSpace$$26$$ || $targetCoordinateSpace$$26$$ === this ? $bounds$$52$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$52$$, $targetCoordinateSpace$$26$$)
};
D.$DvtSubcomponentBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSubcomponentBundle$$, D.$DvtUtilBundle$$, "DvtSubcomponentBundle");
D.$DvtSubcomponentBundle$$._defaults = {CONTROL_PANEL:"Control Panel", CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center", CONTROL_PANEL_PAN:"Pan", CONTROL_PANEL_LAYOUT:"Layout", CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down", CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up", CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right", CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left", CONTROL_PANEL_LAYOUT_RADIAL:"Radial", CONTROL_PANEL_LAYOUT_TREE:"Tree", CONTROL_PANEL_LAYOUT_CIRCLE:"Circle", 
CONTROL_PANEL_SYNC:"View", CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit", CONTROL_PANEL_ZOOMIN:"Zoom In", CONTROL_PANEL_ZOOMOUT:"Zoom Out", CONTROL_PANEL_RESET:"Reset Map", CONTROL_PANEL_DRILLUP:"Drill Up", CONTROL_PANEL_DRILLDOWN:"Drill Down", LEGEND:"Legend", OVERVIEW:"Overview", PALETTE:"Palette", SEARCH:"Search", SEARCH_TEXT:"Search", SEARCH_TEXT_ALTA:"Find", SEARCH_RESULTS:"Search Results [{0}]", SEARCH_RESULTS_ALTA:"{0} Results", SEARCH_RESULTS_CLOSE:"Close", SEARCH_RESULTS_NO_DATA:"No results to display"};
D.$DvtSubcomponentBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtSubcomponentBundle$$$$$GetDefaultStringForKey$$($key$$104$$) {
  var $defaultStr$$1$$ = D.$DvtSubcomponentBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$104$$);
  return $defaultStr$$1$$ ? $defaultStr$$1$$ : D.$DvtSubcomponentBundle$$._defaults[$key$$104$$]
};
D.$DvtSubcomponentBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSubcomponentBundle");
});