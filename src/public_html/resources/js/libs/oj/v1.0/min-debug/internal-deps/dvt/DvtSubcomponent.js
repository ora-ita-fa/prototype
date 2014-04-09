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
D.$DvtDiscreteAttrGroups$$.prototype.add = function $$DvtDiscreteAttrGroups$$$$add$($group$$, $groupLabel$$, $params$$1$$) {
  this.$_results$.push({group:$group$$, $groupLabel$:$groupLabel$$, $params$:$params$$1$$})
};
D.$DvtDiscreteAttrGroups$$.prototype.get = function $$DvtDiscreteAttrGroups$$$$get$($group$$1$$) {
  if(window.value === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$62$$ = 0;$i$$62$$ < this.$_results$.length;$i$$62$$++) {
    if(this.$_results$[$i$$62$$].group == $group$$1$$) {
      return this.$_results$[$i$$62$$].$params$
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
D.$DvtContinuousAttrGroups$$.prototype.get = function $$DvtContinuousAttrGroups$$$$get$($index$$55_ratio$$4_value$$51$$) {
  if((0,window.isNaN)($index$$55_ratio$$4_value$$51$$) || $index$$55_ratio$$4_value$$51$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $index$$55_ratio$$4_value$$51$$ = ($index$$55_ratio$$4_value$$51$$ - this.$_minValue$) / this.$_range$;
  $index$$55_ratio$$4_value$$51$$ = window.Math.max(window.Math.min($index$$55_ratio$$4_value$$51$$, 1), 0);
  $index$$55_ratio$$4_value$$51$$ *= this.$_ramp$.length - 1;
  return $index$$55_ratio$$4_value$$51$$ === window.Math.round($index$$55_ratio$$4_value$$51$$) ? this.$_ramp$[$index$$55_ratio$$4_value$$51$$] : D.$DvtColorUtils$$.$interpolateColor$(this.$_ramp$[window.Math.floor($index$$55_ratio$$4_value$$51$$)], this.$_ramp$[window.Math.ceil($index$$55_ratio$$4_value$$51$$)], $index$$55_ratio$$4_value$$51$$ - window.Math.floor($index$$55_ratio$$4_value$$51$$))
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
D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$ = function $$DvtLegendAttrGroupsRenderer$$$$renderAttrGroups$$($context$$557$$, $eventManager$$36$$, $container$$86$$, $availWidth$$14$$, $availHeight$$10$$, $attrGroups$$9$$, $styles$$20$$) {
  var $colorContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  $attrGroups$$9$$ && ($attrGroups$$9$$ instanceof D.$DvtContinuousAttrGroups$$ ? $colorContainer$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$($context$$557$$, $eventManager$$36$$, $container$$86$$, $availWidth$$14$$, $attrGroups$$9$$, $styles$$20$$) : $attrGroups$$9$$ instanceof D.$DvtDiscreteAttrGroups$$ && ($colorContainer$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$($context$$557$$, $container$$86$$, $availWidth$$14$$, $availHeight$$10$$, $attrGroups$$9$$, 
  $styles$$20$$)));
  return $colorContainer$$1$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsContinuous$$($context$$558_maxLabel$$3$$, $eventManager$$37$$, $container$$87_minLabelStr$$, $availWidth$$15$$, $attrGroups$$10_maxLabelStr$$, $maxLabelWidth$$2_minLabelWidth_styles$$21$$) {
  var $isRTL$$14$$ = D.$DvtAgent$$.$isRightToLeft$($context$$558_maxLabel$$3$$), $labelY$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, $colorContainer$$2$$ = new D.$DvtContainer$$($context$$558_maxLabel$$3$$);
  $container$$87_minLabelStr$$.$addChild$($colorContainer$$2$$);
  $container$$87_minLabelStr$$ = $attrGroups$$10_maxLabelStr$$.$getMinLabel$();
  var $minLabel$$3$$ = new D.$DvtOutputText$$($context$$558_maxLabel$$3$$, $container$$87_minLabelStr$$, 0, $labelY$$1$$);
  $minLabel$$3$$.$setCSSStyle$($maxLabelWidth$$2_minLabelWidth_styles$$21$$.$labelStyle$);
  $minLabel$$3$$.$alignMiddle$();
  $colorContainer$$2$$.$addChild$($minLabel$$3$$);
  var $gradientRect$$ = new D.$DvtRect$$($context$$558_maxLabel$$3$$, 0, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$2$$ = $isRTL$$14$$ ? $attrGroups$$10_maxLabelStr$$.$_ramp$.slice(0).slice().reverse() : $attrGroups$$10_maxLabelStr$$.$_ramp$.slice(0);
  $gradientRect$$.$setFill$(new D.$DvtLinearGradientFill$$(0, $gradientWidth_ramp$$2$$));
  $maxLabelWidth$$2_minLabelWidth_styles$$21$$.borderColor && $gradientRect$$.$setSolidStroke$($maxLabelWidth$$2_minLabelWidth_styles$$21$$.borderColor);
  $colorContainer$$2$$.$addChild$($gradientRect$$);
  $gradientWidth_ramp$$2$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$;
  $attrGroups$$10_maxLabelStr$$ = $attrGroups$$10_maxLabelStr$$.$_maxLabel$;
  $context$$558_maxLabel$$3$$ = new D.$DvtOutputText$$($context$$558_maxLabel$$3$$, $attrGroups$$10_maxLabelStr$$, 0, $labelY$$1$$);
  $context$$558_maxLabel$$3$$.$setCSSStyle$($maxLabelWidth$$2_minLabelWidth_styles$$21$$.$labelStyle$);
  $context$$558_maxLabel$$3$$.$alignMiddle$();
  $colorContainer$$2$$.$addChild$($context$$558_maxLabel$$3$$);
  $isRTL$$14$$ ? ($maxLabelWidth$$2_minLabelWidth_styles$$21$$ = $context$$558_maxLabel$$3$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($maxLabelWidth$$2_minLabelWidth_styles$$21$$), $minLabel$$3$$.$setX$($maxLabelWidth$$2_minLabelWidth_styles$$21$$ + $gradientWidth_ramp$$2$$)) : ($maxLabelWidth$$2_minLabelWidth_styles$$21$$ = $minLabel$$3$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, 
  $gradientRect$$.$setTranslateX$($maxLabelWidth$$2_minLabelWidth_styles$$21$$), $context$$558_maxLabel$$3$$.$setX$($maxLabelWidth$$2_minLabelWidth_styles$$21$$ + $gradientWidth_ramp$$2$$));
  $eventManager$$37$$.$associate$($gradientRect$$, new D.$DvtSimpleObjPeer$$($container$$87_minLabelStr$$ + " - " + $attrGroups$$10_maxLabelStr$$));
  $colorContainer$$2$$.$getDimensions$().$w$ > $availWidth$$15$$ && ($colorContainer$$2$$.removeChild($minLabel$$3$$), $colorContainer$$2$$.removeChild($context$$558_maxLabel$$3$$), $gradientRect$$.$setTranslateX$(0));
  return $colorContainer$$2$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsDiscrete$$($context$$559_rect$$28$$, $container$$88_preferredDims$$, $actualDims_availWidth$$16$$, $availHeight$$12$$, $attrGroups$$11_mappings$$, $component$$11_styles$$22$$) {
  var $items$$12_legendOptions$$2$$ = [];
  $attrGroups$$11_mappings$$ = $attrGroups$$11_mappings$$.$_results$.slice(0);
  for(var $i$$536$$ = 0;$i$$536$$ < $attrGroups$$11_mappings$$.length;$i$$536$$++) {
    var $mapping$$5$$ = $attrGroups$$11_mappings$$[$i$$536$$];
    $items$$12_legendOptions$$2$$.push({text:$mapping$$5$$.$groupLabel$, color:$mapping$$5$$.$params$.color, pattern:$mapping$$5$$.$params$.pattern, borderColor:$component$$11_styles$$22$$.borderColor})
  }
  $items$$12_legendOptions$$2$$ = {sections:[{items:$items$$12_legendOptions$$2$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$component$$11_styles$$22$$.$labelStyle$.toString()};
  $component$$11_styles$$22$$ = (0,D.$DvtLegend$newInstance$$)($context$$559_rect$$28$$);
  $component$$11_styles$$22$$.setId(D.$JSCompiler_alias_NULL$$);
  $container$$88_preferredDims$$.$addChild$($component$$11_styles$$22$$);
  $container$$88_preferredDims$$ = $component$$11_styles$$22$$.$getPreferredSize$($items$$12_legendOptions$$2$$, $actualDims_availWidth$$16$$, $availHeight$$12$$ * D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$);
  $component$$11_styles$$22$$.$render$($items$$12_legendOptions$$2$$, $actualDims_availWidth$$16$$, $container$$88_preferredDims$$.$h$);
  $actualDims_availWidth$$16$$ = $component$$11_styles$$22$$.$getDimensions$();
  $context$$559_rect$$28$$ = new D.$DvtRect$$($context$$559_rect$$28$$, 0, 0, $actualDims_availWidth$$16$$.$w$, $container$$88_preferredDims$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$559_rect$$28$$);
  $component$$11_styles$$22$$.$addChildAt$($context$$559_rect$$28$$, 0);
  return $component$$11_styles$$22$$
};
D.$DvtBreadcrumbsDrillEvent$$ = function $$DvtBreadcrumbsDrillEvent$$$($id$$42$$) {
  this.Init("breadcrumbsDrill");
  this.$_id$ = $id$$42$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtBreadcrumbsDrillEvent");
D.$DvtBreadcrumbsDrillEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbs$$ = function $$DvtBreadcrumbs$$$($context$$131$$, $callback$$55$$, $callbackObj$$31$$, $options$$17$$) {
  this.Init($context$$131$$, $callback$$55$$, $callbackObj$$31$$, $options$$17$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbs$$, D.$DvtContainer$$, "DvtBreadcrumbs");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBreadcrumbs$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$132$$, $callback$$56$$, $callbackObj$$32$$, $options$$18$$) {
  D.$DvtBreadcrumbs$$.$superclass$.Init.call(this, $context$$132$$);
  this.$setOptions$($options$$18$$);
  this.$_eventHandler$ = new D.$DvtBreadcrumbsEventManager$$(this, $context$$132$$, $callback$$56$$, $callbackObj$$32$$);
  this.$_eventHandler$.$addListeners$(this);
  this.setId("breadcrumbs1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_curCrumbIdx$ = -1;
  this.$_crumbs$ = this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setOptions$ = function $$JSCompiler_prototypeAlias$$$$setOptions$$($options$$19$$) {
  this.$_options$ = D.$DvtBreadcrumbsDefaults$$.$calcOptions$($options$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($data$$22$$, $width$$33$$) {
  this.$_data$ = $data$$22$$ ? D.$DvtJSONUtils$$.clone($data$$22$$) : this.$_data$;
  this.$removeChildren$();
  this.$_crumbs$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtBreadcrumbsRenderer$$.$render$(this, this, $width$$33$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.$handleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$handleKeyboardEvent$$($event$$85$$) {
  var $eventConsumed$$ = D.$JSCompiler_alias_TRUE$$, $keyCode_mouseEvent_prevCrumbIdx$$ = $event$$85$$.keyCode;
  if(9 == $keyCode_mouseEvent_prevCrumbIdx$$) {
    var $curIndex$$inline_1459$$ = $keyCode_mouseEvent_prevCrumbIdx$$ = this.$_curCrumbIdx$;
    this.$_curCrumbIdx$ = !$event$$85$$.shiftKey ? 0 > $curIndex$$inline_1459$$ || $curIndex$$inline_1459$$ >= this.$_data$.$items$.length - 1 ? 0 : ++$curIndex$$inline_1459$$ : 0 > $curIndex$$inline_1459$$ || $curIndex$$inline_1459$$ >= this.$_data$.$items$.length - 1 ? this.$_data$.$items$.length - 2 : --$curIndex$$inline_1459$$;
    this.$_updateKeyboardFocusEffect$($keyCode_mouseEvent_prevCrumbIdx$$, this.$_curCrumbIdx$);
    if(0 > this.$_curCrumbIdx$ || this.$_curCrumbIdx$ == this.$_data$.$items$.length - 1) {
      $eventConsumed$$ = D.$JSCompiler_alias_FALSE$$
    }
  }else {
    13 == $keyCode_mouseEvent_prevCrumbIdx$$ && ($keyCode_mouseEvent_prevCrumbIdx$$ = D.$DvtSvgEventFactory$$.$generateMouseEventFromKeyboardEvent$($event$$85$$, this.$_eventHandler$.$_context$, 0, 0), $keyCode_mouseEvent_prevCrumbIdx$$.target = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this, this.$_curCrumbIdx$), this.$_eventHandler$.$OnClick$($keyCode_mouseEvent_prevCrumbIdx$$))
  }
  $eventConsumed$$ && $event$$85$$.preventDefault();
  return $eventConsumed$$
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  var $prevCrumbIdx$$1$$ = this.$_curCrumbIdx$;
  this.$_curCrumbIdx$ = -1;
  this.$_updateKeyboardFocusEffect$($prevCrumbIdx$$1$$, this.$_curCrumbIdx$)
};
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$($prevIdx$$, $nextIdx$$) {
  var $prevKeyboardFocusRect$$ = this.$_keyboardFocusRect$, $context$$133_nextKeyboardFocusRect$$ = D.$JSCompiler_alias_NULL$$, $matrix$$4_nextCrumbObj$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this, $nextIdx$$);
  if($matrix$$4_nextCrumbObj$$) {
    var $bounds$$19_peer$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $matrix$$4_nextCrumbObj$$);
    $bounds$$19_peer$$ && $bounds$$19_peer$$.$isDrillable$ && $bounds$$19_peer$$.$_bDrillable$ ? ($context$$133_nextKeyboardFocusRect$$ = this.$_context$, $bounds$$19_peer$$ = $matrix$$4_nextCrumbObj$$.$getDimensions$(), $matrix$$4_nextCrumbObj$$ = $matrix$$4_nextCrumbObj$$.$getMatrix$(), this.$_keyboardFocusRect$ = $context$$133_nextKeyboardFocusRect$$ = new D.$DvtKeyboardFocusEffect$$($context$$133_nextKeyboardFocusRect$$, this, $bounds$$19_peer$$, $matrix$$4_nextCrumbObj$$)) : this.$_keyboardFocusRect$ = 
    D.$JSCompiler_alias_NULL$$
  }
  $prevKeyboardFocusRect$$ && $prevKeyboardFocusRect$$.$hide$();
  $context$$133_nextKeyboardFocusRect$$ && $context$$133_nextKeyboardFocusRect$$.show()
};
D.$JSCompiler_StaticMethods_getCrumb$$ = function $$JSCompiler_StaticMethods_getCrumb$$$($JSCompiler_StaticMethods_getCrumb$self$$, $crumbIdx$$) {
  var $crumbs$$ = $JSCompiler_StaticMethods_getCrumb$self$$.$_crumbs$;
  return 0 > $crumbIdx$$ || !$crumbs$$ || $crumbIdx$$ >= $crumbs$$.length ? D.$JSCompiler_alias_NULL$$ : $crumbs$$[$crumbIdx$$]
};
D.$DvtBreadcrumbsDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDefaults$$, D.$DvtObj$$, "DvtBreadcrumbsDefaults");
D.$DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:"font-size: 11px; color: #003286;", disabledLabelStyle:"font-size: 11px;", $__labelGap$:2, $__labelSeparator$:"\x3e"};
D.$DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($userOptions$$7$$) {
  var $defaults$$6$$ = D.$DvtBreadcrumbsDefaults$$.$_getDefaults$($userOptions$$7$$);
  return $userOptions$$7$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$7$$, $defaults$$6$$) : $defaults$$6$$
};
D.$DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
  return D.$DvtJSONUtils$$.clone(D.$DvtBreadcrumbsDefaults$$.$VERSION_1$)
};
D.$DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($options$$98$$, $defaultSize$$1$$) {
  return window.Math.ceil($defaultSize$$1$$ * $options$$98$$.layout.gapRatio)
};
D.$DvtBreadcrumbsEventManager$$ = function $$DvtBreadcrumbsEventManager$$$($breadcrumbs$$6$$, $context$$556$$, $callback$$119$$, $callbackObj$$90$$) {
  this.Init($context$$556$$, $callback$$119$$, $callbackObj$$90$$);
  this.$_breadcrumbs$ = $breadcrumbs$$6$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsEventManager$$, D.$DvtEventManager$$, "DvtBreadcrumbsEventManager");
D.$DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($event$$509_obj$$313$$) {
  D.$DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $event$$509_obj$$313$$);
  $event$$509_obj$$313$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$509_obj$$313$$.target);
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, $event$$509_obj$$313$$)
};
D.$DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($event$$510_obj$$314$$) {
  $event$$510_obj$$314$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$510_obj$$314$$.target);
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, $event$$510_obj$$314$$)
};
D.$JSCompiler_StaticMethods__processBreadcrumbs$$ = function $$JSCompiler_StaticMethods__processBreadcrumbs$$$($JSCompiler_StaticMethods__processBreadcrumbs$self$$, $obj$$315$$) {
  if($obj$$315$$ && $obj$$315$$ instanceof D.$DvtBreadcrumbsPeer$$ && $obj$$315$$.$_bDrillable$) {
    var $event$$511$$ = new D.$DvtBreadcrumbsDrillEvent$$($obj$$315$$.getId());
    $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$FireEvent$($event$$511$$, $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$_breadcrumbs$)
  }
};
D.$DvtBreadcrumbsPeer$$ = function $$DvtBreadcrumbsPeer$$$($id$$241$$, $tooltip$$34$$) {
  this.Init($tooltip$$34$$);
  this.$_id$ = $id$$241$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsPeer$$, D.$DvtSimpleObjPeer$$, "DvtBreadcrumbsPeer");
D.$DvtBreadcrumbsPeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBreadcrumbsRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtBreadcrumbsRenderer");
D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
D.$DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($breadcrumbs$$2$$, $container$$83$$, $width$$90$$) {
  for(var $context$$553$$ = $breadcrumbs$$2$$.$_context$, $dataItems$$1$$ = ($breadcrumbs$$2$$.$_data$ ? $breadcrumbs$$2$$.$_data$ : {}).$items$ ? ($breadcrumbs$$2$$.$_data$ ? $breadcrumbs$$2$$.$_data$ : {}).$items$ : [], $options$$93$$ = $breadcrumbs$$2$$.$__getOptions$(), $eventManager$$33$$ = $breadcrumbs$$2$$.$__getEventManager$(), $labels$$6$$ = [], $peers$$ = [], $i$$533$$ = 0;$i$$533$$ < $dataItems$$1$$.length;$i$$533$$++) {
    var $dataItem$$1_peer$$4$$ = $dataItems$$1$$[$i$$533$$];
    if($dataItem$$1_peer$$4$$) {
      var $label$$47$$ = D.$DvtBreadcrumbsRenderer$$.$_createLabel$($context$$553$$, $dataItem$$1_peer$$4$$.text ? $dataItem$$1_peer$$4$$.text : "", $options$$93$$, $i$$533$$ < $dataItems$$1$$.length - 1);
      $labels$$6$$.push($label$$47$$);
      $dataItem$$1_peer$$4$$ = new D.$DvtBreadcrumbsPeer$$($dataItem$$1_peer$$4$$.id);
      $eventManager$$33$$.$associate$($label$$47$$, $dataItem$$1_peer$$4$$);
      $peers$$.push($dataItem$$1_peer$$4$$);
      $i$$533$$ < $dataItems$$1$$.length - 1 && ($label$$47$$.setCursor("pointer"), $dataItem$$1_peer$$4$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$))
    }
  }
  $breadcrumbs$$2$$.$_crumbs$ = $labels$$6$$;
  D.$DvtAgent$$.$isRightToLeft$($context$$553$$) ? D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($breadcrumbs$$2$$, $container$$83$$, $width$$90$$, $labels$$6$$, $peers$$) : D.$DvtBreadcrumbsRenderer$$.$_positionLabels$($breadcrumbs$$2$$, $container$$83$$, $width$$90$$, $labels$$6$$, $peers$$)
};
D.$DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($context$$554_state$$43$$, $dvtText_text$$78$$, $cssStyle$$35$$) {
  $dvtText_text$$78$$ = new D.$DvtOutputText$$($context$$554_state$$43$$, $dvtText_text$$78$$, 0, 0);
  $dvtText_text$$78$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $dvtText_text$$78$$.$setCSSStyle$($cssStyle$$35$$);
  var $padTop$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$35$$, "padding-top"), $padRight$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$35$$, "padding-right"), $padBottom$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$35$$, "padding-bottom"), $padLeft$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$35$$, "padding-left"), $labelDims$$2$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$554_state$$43$$, $dvtText_text$$78$$);
  $context$$554_state$$43$$ = new D.$DvtRect$$($context$$554_state$$43$$, 0, 0, $labelDims$$2$$.$w$ + $padLeft$$ + $padRight$$, $labelDims$$2$$.$h$ + $padTop$$ + $padBottom$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$554_state$$43$$);
  $context$$554_state$$43$$.$setCSSStyle$($cssStyle$$35$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dvtText_text$$78$$, $padLeft$$, $padTop$$);
  $context$$554_state$$43$$.$addChild$($dvtText_text$$78$$);
  return $context$$554_state$$43$$
};
D.$DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($context$$555_label$$48$$, $dwn$$17_textStr$$7$$, $dwnCss_options$$94$$, $bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$) {
  if($bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$ && ($dwnCss_options$$94$$.$labelStyleOver$ || $dwnCss_options$$94$$.$labelStyleDown$)) {
    var $ena$$19_enaCss$$ = new D.$DvtCSSStyle$$($dwnCss_options$$94$$.$labelStyle$);
    $bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$ = new D.$DvtCSSStyle$$($dwnCss_options$$94$$.$labelStyleOver$);
    $dwnCss_options$$94$$ = new D.$DvtCSSStyle$$($dwnCss_options$$94$$.$labelStyleDown$);
    $ena$$19_enaCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$555_label$$48$$, $dwn$$17_textStr$$7$$, $ena$$19_enaCss$$);
    $bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$555_label$$48$$, $dwn$$17_textStr$$7$$, $bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$);
    $dwn$$17_textStr$$7$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$555_label$$48$$, $dwn$$17_textStr$$7$$, $dwnCss_options$$94$$);
    $context$$555_label$$48$$ = new D.$DvtButton$$($context$$555_label$$48$$, $ena$$19_enaCss$$, $bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$, $dwn$$17_textStr$$7$$)
  }else {
    $bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$ = new D.$DvtCSSStyle$$($bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$ ? $dwnCss_options$$94$$.$labelStyle$ : $dwnCss_options$$94$$.$disabledLabelStyle$), (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$, "padding-left") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$, "padding-right") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$, 
    "padding-top") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$, "padding-bottom") ? $context$$555_label$$48$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$555_label$$48$$, $dwn$$17_textStr$$7$$, $bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$) : ($context$$555_label$$48$$ = new D.$DvtOutputText$$($context$$555_label$$48$$, $dwn$$17_textStr$$7$$, 0, 0), $context$$555_label$$48$$.$setCSSStyle$($bEnabled$$4_cssStyle$$36_ovr$$17_ovrCss$$))
  }
  return $context$$555_label$$48$$
};
D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($label$$49_text$$79$$) {
  if($label$$49_text$$79$$ instanceof D.$DvtButton$$) {
    return $label$$49_text$$79$$ = $label$$49_text$$79$$.$upState$.$getChildAt$(0), $label$$49_text$$79$$.$getTextString$()
  }
  $label$$49_text$$79$$ instanceof D.$DvtRect$$ && ($label$$49_text$$79$$ = $label$$49_text$$79$$.$getChildAt$(0));
  return $label$$49_text$$79$$.$getTextString$()
};
D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($label$$50$$, $maxWidth$$16$$) {
  if($label$$50$$ instanceof D.$DvtButton$$) {
    var $text$$80$$ = $label$$50$$.$upState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$80$$, window.Math.max($maxWidth$$16$$ - $text$$80$$.$getTranslateX$(), 0), window.Infinity, $text$$80$$.getParent());
    $text$$80$$ = $label$$50$$.$overState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$80$$, window.Math.max($maxWidth$$16$$ - $text$$80$$.$getTranslateX$(), 0), window.Infinity, $text$$80$$.getParent());
    $text$$80$$ = $label$$50$$.$downState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$80$$, window.Math.max($maxWidth$$16$$ - $text$$80$$.$getTranslateX$(), 0), window.Infinity, $text$$80$$.getParent())
  }else {
    $label$$50$$ instanceof D.$DvtRect$$ ? ($text$$80$$ = $label$$50$$.$getChildAt$(0), D.$DvtTextUtils$$.$fitText$($text$$80$$, window.Math.max($maxWidth$$16$$ - $text$$80$$.$getTranslateX$(), 0), window.Infinity, $text$$80$$.getParent())) : D.$DvtTextUtils$$.$fitText$($label$$50$$, $maxWidth$$16$$, window.Infinity, $label$$50$$.getParent())
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($breadcrumbs$$3_labelString$$4$$, $container$$84$$, $availWidth$$12$$, $labels$$7$$, $peers$$1$$) {
  for(var $options$$95$$ = $breadcrumbs$$3_labelString$$4$$.$__getOptions$(), $eventManager$$34$$ = $breadcrumbs$$3_labelString$$4$$.$__getEventManager$(), $arDims$$ = [], $maxHeight$$14$$ = 0, $i$$534$$ = 0;$i$$534$$ < $labels$$7$$.length;$i$$534$$++) {
    $container$$84$$.$addChild$($labels$$7$$[$i$$534$$]);
    var $dims$$53_separator$$2$$ = $labels$$7$$[$i$$534$$].$getDimensions$();
    $arDims$$[$i$$534$$] = $dims$$53_separator$$2$$;
    $maxHeight$$14$$ = window.Math.max($dims$$53_separator$$2$$.$h$, $maxHeight$$14$$);
    $container$$84$$.removeChild($labels$$7$$[$i$$534$$])
  }
  for(var $x$$250$$ = 0, $i$$534$$ = 0;$i$$534$$ < $labels$$7$$.length;$i$$534$$++) {
    $container$$84$$.$addChild$($labels$$7$$[$i$$534$$]);
    $dims$$53_separator$$2$$ = $arDims$$[$i$$534$$];
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($labels$$7$$[$i$$534$$], $x$$250$$, 0.5 * ($maxHeight$$14$$ - $dims$$53_separator$$2$$.$h$));
    if(D.$DvtAgent$$.$isTouchDevice$()) {
      var $rect$$26_sepDims_separatorWidth$$ = new D.$DvtRect$$($container$$84$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$53_separator$$2$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$53_separator$$2$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$26_sepDims_separatorWidth$$);
      $labels$$7$$[$i$$534$$].$addChild$($rect$$26_sepDims_separatorWidth$$);
      $i$$534$$ < $peers$$1$$.length && $eventManager$$34$$.$associate$($rect$$26_sepDims_separatorWidth$$, $peers$$1$$[$i$$534$$])
    }
    if($x$$250$$ + $dims$$53_separator$$2$$.$w$ > $availWidth$$12$$) {
      $breadcrumbs$$3_labelString$$4$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$7$$[$i$$534$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$7$$[$i$$534$$], $availWidth$$12$$ - $x$$250$$);
      $i$$534$$ < $peers$$1$$.length ? $peers$$1$$[$i$$534$$].$setTooltip$($breadcrumbs$$3_labelString$$4$$) : $eventManager$$34$$.$associate$($labels$$7$$[$i$$534$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$3_labelString$$4$$));
      break
    }else {
      $x$$250$$ += $dims$$53_separator$$2$$.$w$ + $options$$95$$.$__labelGap$
    }
    if($i$$534$$ < $labels$$7$$.length - 1) {
      $dims$$53_separator$$2$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$3_labelString$$4$$);
      $container$$84$$.$addChild$($dims$$53_separator$$2$$);
      $rect$$26_sepDims_separatorWidth$$ = $dims$$53_separator$$2$$.$getDimensions$();
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dims$$53_separator$$2$$, $x$$250$$, 0.5 * ($maxHeight$$14$$ - $rect$$26_sepDims_separatorWidth$$.$h$));
      $rect$$26_sepDims_separatorWidth$$ = $rect$$26_sepDims_separatorWidth$$.$w$;
      if($x$$250$$ + $rect$$26_sepDims_separatorWidth$$ > $availWidth$$12$$) {
        $container$$84$$.removeChild($dims$$53_separator$$2$$);
        break
      }
      $x$$250$$ += $rect$$26_sepDims_separatorWidth$$ + $options$$95$$.$__labelGap$
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($breadcrumbs$$4_labelString$$5$$, $container$$85$$, $availWidth$$13_x$$251$$, $labels$$8$$, $peers$$2$$) {
  for(var $options$$96$$ = $breadcrumbs$$4_labelString$$5$$.$__getOptions$(), $eventManager$$35$$ = $breadcrumbs$$4_labelString$$5$$.$__getEventManager$(), $i$$535$$ = 0;$i$$535$$ < $labels$$8$$.length;$i$$535$$++) {
    $container$$85$$.$addChild$($labels$$8$$[$i$$535$$]);
    var $dims$$54_separator$$3$$ = $labels$$8$$[$i$$535$$].$getDimensions$();
    if(D.$DvtAgent$$.$isTouchDevice$()) {
      var $rect$$27_separatorWidth$$1$$ = new D.$DvtRect$$($container$$85$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$54_separator$$3$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$54_separator$$3$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$27_separatorWidth$$1$$);
      $labels$$8$$[$i$$535$$].$addChild$($rect$$27_separatorWidth$$1$$);
      $i$$535$$ < $peers$$2$$.length && $eventManager$$35$$.$associate$($rect$$27_separatorWidth$$1$$, $peers$$2$$[$i$$535$$])
    }
    if(0 > $availWidth$$13_x$$251$$ - $dims$$54_separator$$3$$.$w$) {
      $breadcrumbs$$4_labelString$$5$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$8$$[$i$$535$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$8$$[$i$$535$$], $availWidth$$13_x$$251$$);
      $labels$$8$$[$i$$535$$].$setTranslateX$(0);
      $i$$535$$ < $peers$$2$$.length ? $peers$$2$$[$i$$535$$].$setTooltip$($breadcrumbs$$4_labelString$$5$$) : $eventManager$$35$$.$associate$($labels$$8$$[$i$$535$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$4_labelString$$5$$));
      break
    }else {
      $labels$$8$$[$i$$535$$].$setTranslateX$($availWidth$$13_x$$251$$ - $dims$$54_separator$$3$$.$w$), $availWidth$$13_x$$251$$ -= $dims$$54_separator$$3$$.$w$ + $options$$96$$.$__labelGap$
    }
    if($i$$535$$ < $labels$$8$$.length - 1) {
      if($dims$$54_separator$$3$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$4_labelString$$5$$), $container$$85$$.$addChild$($dims$$54_separator$$3$$), $rect$$27_separatorWidth$$1$$ = $dims$$54_separator$$3$$.$getDimensions$().$w$, 0 > $availWidth$$13_x$$251$$ - $rect$$27_separatorWidth$$1$$) {
        $container$$85$$.removeChild($dims$$54_separator$$3$$);
        break
      }else {
        $dims$$54_separator$$3$$.$setTranslateX$($availWidth$$13_x$$251$$ - $rect$$27_separatorWidth$$1$$), $availWidth$$13_x$$251$$ -= $rect$$27_separatorWidth$$1$$ + $options$$96$$.$__labelGap$
      }
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($breadcrumbs$$5_label$$51$$) {
  var $options$$97$$ = $breadcrumbs$$5_label$$51$$.$__getOptions$();
  $breadcrumbs$$5_label$$51$$ = new D.$DvtOutputText$$($breadcrumbs$$5_label$$51$$.$_context$, $options$$97$$.$__labelSeparator$, 0, 0);
  $breadcrumbs$$5_label$$51$$.$setCSSStyle$(new D.$DvtCSSStyle$$($options$$97$$.$labelStyle$));
  return $breadcrumbs$$5_label$$51$$
};
D.$DvtPanelDrawerEvent$$ = function $$DvtPanelDrawerEvent$$$($subtype$$5$$, $activePanel$$) {
  this.Init("dvtPanelDrawerEvent");
  this.$_subtype$ = $subtype$$5$$;
  this.$_activePanel$ = $activePanel$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEvent$$, D.$DvtBaseComponentEvent$$, "DvtPanelDrawerEvent");
D.$DvtPanelDrawerEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtPanelDrawer$$ = function $$DvtPanelDrawer$$$($context$$127$$, $callback$$53$$, $callbackObj$$29$$, $sid$$) {
  this.Init($context$$127$$, $callback$$53$$, $callbackObj$$29$$, $sid$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawer$$, D.$DvtContainer$$, "DvtPanelDrawer");
D.$DvtPanelDrawer$$.prototype.Init = function $$DvtPanelDrawer$$$$Init$($context$$128$$, $callback$$54$$, $callbackObj$$30$$, $sid$$1$$) {
  D.$DvtPanelDrawer$$.$superclass$.Init.call(this, $context$$128$$, D.$JSCompiler_alias_NULL$$, "panelDrawer" + $sid$$1$$);
  this.$_sid$ = $sid$$1$$;
  this.$_eventManager$ = new D.$DvtPanelDrawerEventManager$$($context$$128$$, $callback$$54$$, $callbackObj$$30$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtPanelDrawer$$);
  this.$_eventManager$.$associate$(this, this);
  this.$_callback$ = $callback$$54$$;
  this.$_callbackObj$ = $callbackObj$$30$$;
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
  $callbackObj$$30$$ && (this.$_styleMap$ = $callbackObj$$30$$.$getControlPanelStyleMap$());
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", "#bbc7d0");
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 2));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", "#ffffff");
  this.$_bgInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-color-inactive", "#dee4e7");
  this.$_borderInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-border-color-inactive", "#c1cede");
  this.$_bDeferPanelVisibility$ = D.$JSCompiler_alias_FALSE$$;
  this.$_scrollEnabled$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods_addPanel$$ = function $$JSCompiler_StaticMethods_addPanel$$$($JSCompiler_StaticMethods_addPanel$self$$, $panel$$, $upState$$1$$, $overState$$1$$, $downState$$1$$, $tooltip$$10$$, $id$$31$$) {
  $JSCompiler_StaticMethods_addPanel$self$$.$_panels$[$id$$31$$] = {panel:$panel$$, iconUp:$upState$$1$$, iconOver:$overState$$1$$, iconDown:$downState$$1$$, tooltip:$tooltip$$10$$};
  $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.push($id$$31$$);
  $JSCompiler_StaticMethods_addPanel$self$$.$_minHeight$ = 15 + 42 * $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.length
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$JSCompiler_prototypeAlias$$.$getMaxWidth$ = (0,D.$JSCompiler_get$$)("$_maxWidth$");
D.$JSCompiler_prototypeAlias$$.$getMaxContentWidth$ = function $$JSCompiler_prototypeAlias$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 41
};
D.$JSCompiler_prototypeAlias$$.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$JSCompiler_prototypeAlias$$.$getMaxHeight$ = (0,D.$JSCompiler_get$$)("$_maxHeight$");
D.$JSCompiler_prototypeAlias$$.$getMaxContentHeight$ = function $$JSCompiler_prototypeAlias$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 41
};
D.$JSCompiler_StaticMethods_GetPanel$$ = function $$JSCompiler_StaticMethods_GetPanel$$$($JSCompiler_StaticMethods_GetPanel$self$$, $id$$32$$) {
  return $JSCompiler_StaticMethods_GetPanel$self$$.$_panels$[$id$$32$$].panel
};
D.$JSCompiler_StaticMethods_setDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_setDisplayedPanelId$$$($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$36$$, $bImmediate$$, $onEnd$$) {
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$ = $id$$36$$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$isDisclosed$() && ($JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$36$$, $bImmediate$$, $onEnd$$));
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_getDisplayedPanelId$$$($JSCompiler_StaticMethods_getDisplayedPanelId$self$$) {
  var $panelId$$ = $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_displayedPanelId$;
  return!$panelId$$ && 0 < $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$.length ? $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$[0] : $panelId$$
};
D.$DvtPanelDrawer$$.prototype.$setDisclosed$ = function $$DvtPanelDrawer$$$$$setDisclosed$$($bDisclosed$$3_destX$$inline_1411$$, $anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, $onEnd$$1$$) {
  if(!this.$_bTransition$) {
    this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
    var $oldDisclosed$$ = this.$_bDisclosed$;
    this.$_bDisclosed$ = $bDisclosed$$3_destX$$inline_1411$$;
    if($oldDisclosed$$ != $bDisclosed$$3_destX$$inline_1411$$) {
      if($bDisclosed$$3_destX$$inline_1411$$) {
        var $panel$$inline_1410$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $panel$$inline_1410$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_1410$$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
        (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $bDisclosed$$3_destX$$inline_1411$$ = -(0.8 * this.$_expandedContent$.getWidth());
        "right" == this.$_discloseDirection$ && ($bDisclosed$$3_destX$$inline_1411$$ = -$bDisclosed$$3_destX$$inline_1411$$, this.$_expandedContent$.$setX$((0.8 - 1) * this.$_expandedContent$.getWidth()));
        if($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$) {
          this.$_contentPane$.$setTranslateX$($bDisclosed$$3_destX$$inline_1411$$), $panel$$inline_1410$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_1410$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $onEnd$$1$$ && $onEnd$$1$$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          if($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$ = new D.$DvtAnimator$$(this.$_context$, 0.25), $anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$.$setEasing$(D.$DvtEasing$backOut$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $bDisclosed$$3_destX$$inline_1411$$), $panel$$inline_1410$$ && this.$_bDeferPanelVisibility$ ? 
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, function() {
            $panel$$inline_1410$$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
            $onEnd$$1$$ && $onEnd$$1$$()
          }) : $onEnd$$1$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, $onEnd$$1$$), $anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$) {
            var $thisRef$$inline_1413$$ = this;
            (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, function() {
              $thisRef$$inline_1413$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
            });
            $anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$.play()
          }
        }
        this.$ChangeTabsState$()
      }else {
        if($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$) {
          this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $onEnd$$1$$ && $onEnd$$1$$(), this.$ChangeTabsState$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          $anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
          $anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$.$setEasing$(D.$DvtEasing$backIn$$);
          (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, this.$RemoveExpandedContent$, this);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, this.$ChangeTabsState$, this);
          $onEnd$$1$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, $onEnd$$1$$);
          var $thisRef$$inline_1419$$ = this;
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$, function() {
            $thisRef$$inline_1419$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
          });
          $anim$$inline_1412_anim$$inline_1418_bImmediate$$1$$.play()
        }
      }
    }
  }
};
D.$DvtPanelDrawer$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_bDisclosed$");
D.$DvtPanelDrawer$$.prototype.$renderComponent$ = function $$DvtPanelDrawer$$$$$renderComponent$$() {
  this.$_contentPane$ || (this.$_contentPane$ = new D.$DvtContainer$$(this.$_context$, "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new D.$DvtContainer$$(this.$_context$, "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
  if(!this.$_isFixed$) {
    var $currX$$inline_1422$$ = -42;
    "right" == this.$_discloseDirection$ && ($currX$$inline_1422$$ = 0);
    var $currY$$inline_1423$$ = 15;
    if("top" == this.$_dockSide$) {
      for(var $i$$inline_1424$$ = 0;$i$$inline_1424$$ < this.$_panelOrder$.length;$i$$inline_1424$$++) {
        var $panelId$$inline_1425_tab$$inline_1426$$ = this.$_panelOrder$[$i$$inline_1424$$], $panelId$$inline_1425_tab$$inline_1426$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_1425_tab$$inline_1426$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_1425_tab$$inline_1426$$, $currX$$inline_1422$$, $currY$$inline_1423$$);
        $currY$$inline_1423$$ += 42
      }
    }else {
      if("bottom" == this.$_dockSide$) {
        $currY$$inline_1423$$ = -57;
        for($i$$inline_1424$$ = this.$_panelOrder$.length - 1;0 <= $i$$inline_1424$$;$i$$inline_1424$$--) {
          $panelId$$inline_1425_tab$$inline_1426$$ = this.$_panelOrder$[$i$$inline_1424$$], $panelId$$inline_1425_tab$$inline_1426$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_1425_tab$$inline_1426$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_1425_tab$$inline_1426$$, $currX$$inline_1422$$, $currY$$inline_1423$$), $currY$$inline_1423$$ -= 42
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_RenderTab$$ = function $$JSCompiler_StaticMethods_RenderTab$$$($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$2$$) {
  var $closedPath_downState$$2$$, $arPoints$$inline_1429_tab$$1$$;
  switch($JSCompiler_StaticMethods_RenderTab$self$$.$_discloseDirection$) {
    case "right":
      $arPoints$$inline_1429_tab$$1$$ = ["M", 0, 0, "L", 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 1, 42, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 42, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 1, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 0, 42];
      break;
    default:
      $arPoints$$inline_1429_tab$$1$$ = ["M", 42, 0, "L", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 0, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 42, 42]
  }
  $closedPath_downState$$2$$ = $arPoints$$inline_1429_tab$$1$$;
  $arPoints$$inline_1429_tab$$1$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$2$$, "pdcp_tab_" + $panelId$$2$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($arPoints$$inline_1429_tab$$1$$);
  $arPoints$$inline_1429_tab$$1$$.setCursor("pointer");
  $JSCompiler_StaticMethods_RenderTab$self$$.$_contentPane$.$addChildAt$($arPoints$$inline_1429_tab$$1$$, 0);
  $arPoints$$inline_1429_tab$$1$$.$setSolidFill$($JSCompiler_StaticMethods_RenderTab$self$$.$_bgInactiveColor$, $JSCompiler_StaticMethods_RenderTab$self$$.$_bgAlpha$);
  $arPoints$$inline_1429_tab$$1$$.$setSolidStroke$($JSCompiler_StaticMethods_RenderTab$self$$.$_borderInactiveColor$, 1, 1);
  var $panelObj$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$2$$], $icon_upState$$2$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$2$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($icon_upState$$2$$);
  $arPoints$$inline_1429_tab$$1$$.$addChild$($panelObj$$.iconUp);
  var $iconDims$$ = $panelObj$$.iconUp.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconUp, 0.5 * (42 - ($iconDims$$.x + $iconDims$$.$w$)), 0.5 * (42 - ($iconDims$$.y + $iconDims$$.$h$)));
  $icon_upState$$2$$.$addChild$($panelObj$$.iconUp);
  var $overState$$2$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$2$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$2$$);
  $arPoints$$inline_1429_tab$$1$$.$addChild$($panelObj$$.iconOver);
  $iconDims$$ = $panelObj$$.iconOver.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconOver, 0.5 * (42 - ($iconDims$$.x + $iconDims$$.$w$)), 0.5 * (42 - ($iconDims$$.y + $iconDims$$.$h$)));
  $overState$$2$$.$addChild$($panelObj$$.iconOver);
  $closedPath_downState$$2$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$2$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($closedPath_downState$$2$$);
  $arPoints$$inline_1429_tab$$1$$.$addChild$($panelObj$$.iconDown);
  $iconDims$$ = $panelObj$$.iconDown.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconDown, 0.5 * (42 - ($iconDims$$.x + $iconDims$$.$w$)), 0.5 * (42 - ($iconDims$$.y + $iconDims$$.$h$)));
  $closedPath_downState$$2$$.$addChild$($panelObj$$.iconDown);
  $icon_upState$$2$$ = new D.$DvtButton$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $icon_upState$$2$$, $overState$$2$$, $closedPath_downState$$2$$);
  $icon_upState$$2$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $icon_upState$$2$$.setCursor("pointer");
  $panelObj$$.icon = $icon_upState$$2$$;
  $arPoints$$inline_1429_tab$$1$$.$addChild$($icon_upState$$2$$);
  $iconDims$$ = $icon_upState$$2$$.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($icon_upState$$2$$, 0.5 * (42 - ($iconDims$$.x + $iconDims$$.$w$)), 0.5 * (42 - ($iconDims$$.y + $iconDims$$.$h$)));
  $JSCompiler_StaticMethods_RenderTab$self$$.$_tabs$[$panelId$$2$$] = $arPoints$$inline_1429_tab$$1$$;
  $JSCompiler_StaticMethods_RenderTab$self$$.$_eventManager$.$associate$($arPoints$$inline_1429_tab$$1$$, {$HandleClick$:function() {
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)($JSCompiler_StaticMethods_RenderTab$self$$);
    $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$ = $panelId$$2$$;
    var $closedPath_downState$$2$$ = function $$closedPath_downState$$2$$$() {
      var $panelId$$2$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_context$.$getTooltipManager$();
      $panelId$$2$$ && $panelId$$2$$.$hideTooltip$()
    };
    $JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ == $panelId$$2$$ ? $JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$2$$) : ($JSCompiler_StaticMethods_RenderTab$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$2$$, D.$JSCompiler_alias_FALSE$$)) : ($JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, 
    D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$2$$), $JSCompiler_StaticMethods_RenderTab$self$$.$ApplyAlphasRollover$());
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_RenderTab$self$$.$FireListener$(new D.$DvtPanelDrawerEvent$$($JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? "show" : "hide", $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$))
  }, $getTooltip$:function() {
    return $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$2$$].tooltip
  }});
  $JSCompiler_StaticMethods_RenderTab$self$$.$addAccessibilityAttributes$($arPoints$$inline_1429_tab$$1$$, $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$2$$].tooltip);
  return $arPoints$$inline_1429_tab$$1$$
};
D.$JSCompiler_StaticMethods_ChangePanels$$ = function $$JSCompiler_StaticMethods_ChangePanels$$$($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$4$$, $bImmediate$$2_oldPanel$$, $onEnd$$2$$) {
  var $anim$$2$$ = D.$JSCompiler_alias_NULL$$;
  $bImmediate$$2_oldPanel$$ || ($anim$$2$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_ChangePanels$self$$.$_context$, 0.25));
  $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$ && ($bImmediate$$2_oldPanel$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$)) && $JSCompiler_StaticMethods_ChangePanels$self$$.$_expandedContentPanel$.removeChild($bImmediate$$2_oldPanel$$);
  (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$4$$, $anim$$2$$);
  $anim$$2$$ ? ($JSCompiler_StaticMethods_ChangePanels$self$$.$ApplyAlphasRollover$(), $onEnd$$2$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$2$$, $onEnd$$2$$), $anim$$2$$.play()) : $onEnd$$2$$ && $onEnd$$2$$()
};
D.$DvtPanelDrawer$$.prototype.$RemoveExpandedContent$ = function $$DvtPanelDrawer$$$$$RemoveExpandedContent$$() {
  this.$_expandedContent$ && (this.$_contentClipPath$ = D.$JSCompiler_alias_NULL$$, this.$_expandedContentPanel$.$removeChildren$(), (0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_activeContent$), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_DisplayPanel$$ = function $$JSCompiler_StaticMethods_DisplayPanel$$$($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$37$$, $anim$$5$$) {
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ = new D.$DvtRect$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, 1, 1, "pdcp_expandedContent"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_activeContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$setSolidFill$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgColor$, 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgAlpha$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$ = new D.$DvtScrollableContainer$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ == window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ - 20, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ == window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ - 20, 10, "pdcp_expandedContentPanel" + $JSCompiler_StaticMethods_DisplayPanel$self$$.$_sid$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_scrollEnabled$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_horizScrollEnabled$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_vertScrollEnabled$ = D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setSkinName$("alta"), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_styleMap$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_styleMap$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$, 10, 10));
  var $panel$$2$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$37$$);
  if($panel$$2$$) {
    $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$addChild$($panel$$2$$);
    $anim$$5$$ && $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bDeferPanelVisibility$ && ($panel$$2$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$DvtPlayable$appendOnEnd$$)($anim$$5$$, function() {
      $panel$$2$$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }));
    if($JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$) {
      var $ecw$$inline_1449_oldPanel$$1$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$);
      $ecw$$inline_1449_oldPanel$$1$$ && $ecw$$inline_1449_oldPanel$$1$$.$removeEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
    }
    $panel$$2$$.$addEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
  }
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setFill$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 
  1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$));
  var $ech$$inline_1450$$ = $ecw$$inline_1449_oldPanel$$1$$ = 20, $xx$$inline_1451$$ = 0, $dims$$inline_1453_yy$$inline_1452$$ = 0;
  (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$37$$) && ($dims$$inline_1453_yy$$inline_1452$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$getDimensions$(), $ecw$$inline_1449_oldPanel$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $dims$$inline_1453_yy$$inline_1452$$.$w$), $ech$$inline_1450$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, 
  $dims$$inline_1453_yy$$inline_1452$$.$h$), $xx$$inline_1451$$ = $dims$$inline_1453_yy$$inline_1452$$.x, $dims$$inline_1453_yy$$inline_1452$$ = $dims$$inline_1453_yy$$inline_1452$$.y);
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$37$$, $anim$$5$$, $ecw$$inline_1449_oldPanel$$1$$, $ech$$inline_1450$$, $xx$$inline_1451$$, $dims$$inline_1453_yy$$inline_1452$$)
};
D.$DvtPanelDrawer$$.prototype.$HandlePanelResize$ = function $$DvtPanelDrawer$$$$$HandlePanelResize$$($event$$82_yy$$15$$) {
  var $anim$$6$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  this.$_expandedContentPanel$.refresh();
  var $ecw_resizeWidth$$1$$ = $event$$82_yy$$15$$.getWidth(), $ech_resizeHeight$$1$$ = $event$$82_yy$$15$$.getHeight(), $sbPadding_xx$$15$$ = this.$_expandedContentPanel$.$_sbWidth$ + 10;
  this.$_expandedContentPanel$.$_hsb$ != D.$JSCompiler_alias_NULL$$ && ($ech_resizeHeight$$1$$ += $sbPadding_xx$$15$$);
  this.$_expandedContentPanel$.$_vsb$ != D.$JSCompiler_alias_NULL$$ && ($ecw_resizeWidth$$1$$ += $sbPadding_xx$$15$$);
  $ecw_resizeWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)(this, $ecw_resizeWidth$$1$$);
  $ech_resizeHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)(this, $ech_resizeHeight$$1$$);
  $sbPadding_xx$$15$$ = $event$$82_yy$$15$$.$getX$() ? $event$$82_yy$$15$$.$getX$() : 0;
  $event$$82_yy$$15$$ = $event$$82_yy$$15$$.$getY$() ? $event$$82_yy$$15$$.$getY$() : 0;
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $anim$$6$$, $ecw_resizeWidth$$1$$, $ech_resizeHeight$$1$$, $sbPadding_xx$$15$$, $event$$82_yy$$15$$);
  $anim$$6$$.play()
};
D.$JSCompiler_StaticMethods__refreshPanelSize$$ = function $$JSCompiler_StaticMethods__refreshPanelSize$$$($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$39$$, $anim$$8$$, $ecw$$2_firstTab_lastTab$$, $ech$$2$$, $expandedContentWidth_tab$$2_xx$$17$$, $yy$$17$$) {
  var $panel$$4$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$39$$);
  $anim$$8$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $panel$$4$$, $panel$$4$$.$getTranslateX$, $panel$$4$$.$setTranslateX$, -$expandedContentWidth_tab$$2_xx$$17$$) : $panel$$4$$.$setTranslateX$(-$expandedContentWidth_tab$$2_xx$$17$$);
  $anim$$8$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $panel$$4$$, $panel$$4$$.$getTranslateY$, $panel$$4$$.$setTranslateY$, -$yy$$17$$) : $panel$$4$$.$setTranslateY$(-$yy$$17$$);
  var $clipRect$$ = new D.$DvtRectangle$$(10, 10, $ecw$$2_firstTab_lastTab$$ - 20, $ech$$2$$ - 20);
  $expandedContentWidth_tab$$2_xx$$17$$ = 1.25 * $ecw$$2_firstTab_lastTab$$;
  $anim$$8$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getWidth, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$, $expandedContentWidth_tab$$2_xx$$17$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getHeight, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$, $ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_bDeferPanelVisibility$ ? (0,D.$DvtPlayable$appendOnEnd$$)($anim$$8$$, function() {
    $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$)
  }) : (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeRectangle", $JSCompiler_StaticMethods__refreshPanelSize$self$$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_getContentClipPath$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$, $clipRect$$), "left" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$) : "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, 
  "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$, 
  $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$, -$ech$$2$$))) : ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$($expandedContentWidth_tab$$2_xx$$17$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$($ech$$2$$), "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$(-$ecw$$2_firstTab_lastTab$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$($ecw$$2_firstTab_lastTab$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$($ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$(-$ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$($ech$$2$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$($ech$$2$$)), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$));
  $expandedContentWidth_tab$$2_xx$$17$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$edgeX_id$$39$$];
  var $borderPath$$;
  $edgeX_id$$39$$ = $ecw$$2_firstTab_lastTab$$;
  "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($edgeX_id$$39$$ = -$ecw$$2_firstTab_lastTab$$);
  "top" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ ? $expandedContentWidth_tab$$2_xx$$17$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$17$$.$getTranslateY$(), "M", 0, $expandedContentWidth_tab$$2_xx$$17$$.$getTranslateY$() + 42], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$.length - 
  1]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42, "L", 0, $ech$$2$$, "L", 1.25 * $edgeX_id$$39$$, $ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, $ech$$2$$, "L", $edgeX_id$$39$$, $ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)) : 
  "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($expandedContentWidth_tab$$2_xx$$17$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$17$$.$getTranslateY$() + 42, "M", 0, $expandedContentWidth_tab$$2_xx$$17$$.$getTranslateY$()], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[0]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$()), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $edgeX_id$$39$$ *= 1.25, $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$(), "L", 0, -$ech$$2$$, "L", $edgeX_id$$39$$, -$ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, -$ech$$2$$, "L", $edgeX_id$$39$$, -$ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)));
  $anim$$8$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8$$, "typePath", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getCommands$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$, $borderPath$$) : $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$($borderPath$$)
};
D.$DvtPanelDrawer$$.prototype.$_setContentClipPath$ = function $$DvtPanelDrawer$$$$$_setContentClipPath$$($rect$$2$$) {
  if(this.$_expandedContentPanel$ && $rect$$2$$) {
    var $clipPath$$ = new D.$DvtClipPath$$("pdcp" + this.$_sid$);
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$, $rect$$2$$.x, $rect$$2$$.y, $rect$$2$$.$w$, $rect$$2$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_expandedContentPanel$, $clipPath$$)
  }
  this.$_contentClipPath$ = $rect$$2$$
};
D.$DvtPanelDrawer$$.prototype.$_getContentClipPath$ = (0,D.$JSCompiler_get$$)("$_contentClipPath$");
D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$ = function $$JSCompiler_StaticMethods_GetExpandedContentWidth$$$($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$, $preferredWidth$$) {
  var $ww$$23$$ = $preferredWidth$$ + 20;
  if(($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) && $ww$$23$$ < $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) {
    $ww$$23$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$
  }
  $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && $ww$$23$$ > $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && ($ww$$23$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$);
  return $ww$$23$$
};
D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$ = function $$JSCompiler_StaticMethods_GetExpandedContentHeight$$$($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$, $preferredHeight$$) {
  var $hh$$20$$ = $preferredHeight$$ + 20;
  if(($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) && $hh$$20$$ < $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) {
    $hh$$20$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$
  }
  $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && $hh$$20$$ > $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && ($hh$$20$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$);
  return $hh$$20$$
};
D.$JSCompiler_StaticMethods_ApplyFillAlpha$$ = function $$JSCompiler_StaticMethods_ApplyFillAlpha$$$($JSCompiler_StaticMethods_ApplyFillAlpha$self$$, $alpha$$7$$) {
  if($JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$) {
    var $fill$$6$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$getFill$().clone();
    $fill$$6$$.$setAlpha$($alpha$$7$$);
    $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$setFill$($fill$$6$$)
  }
  for(var $panelId$$5$$ in $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$) {
    var $tab$$3$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$[$panelId$$5$$];
    $tab$$3$$ && ($fill$$6$$ = $tab$$3$$.$getFill$().clone(), $fill$$6$$.$setAlpha$($alpha$$7$$), $tab$$3$$.$setFill$($fill$$6$$))
  }
};
D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$ = function $$JSCompiler_StaticMethods_ApplyStrokeAlpha$$$($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$) {
  if($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$) {
    var $stroke$$7$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$getStroke$().clone();
    $stroke$$7$$.$setAlpha$(1);
    $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$setStroke$($stroke$$7$$)
  }
  $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$ && ($stroke$$7$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$getStroke$().clone(), $stroke$$7$$.$setAlpha$(1), $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$setStroke$($stroke$$7$$));
  for(var $panelId$$6$$ in $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$) {
    var $tab$$4$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$[$panelId$$6$$];
    $tab$$4$$ && ($stroke$$7$$ = $tab$$4$$.$getStroke$().clone(), $stroke$$7$$.$setAlpha$(1), $tab$$4$$.$setStroke$($stroke$$7$$))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$deEmphasizeStart$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeStart$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$7$$ in this.$_tabs$) {
    var $icon$$1$$ = this.$_panels$[$panelId$$7$$].icon;
    $icon$$1$$ && $icon$$1$$.$setAlpha$(1)
  }
};
D.$JSCompiler_prototypeAlias$$.$deEmphasizeEnd$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeEnd$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$8$$ in this.$_tabs$) {
    var $icon$$2$$ = this.$_panels$[$panelId$$8$$].icon;
    $icon$$2$$ && $icon$$2$$.$setAlpha$(1)
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
    if($tab$$5$$) {
      var $bActivePanel_stroke$$8$$ = $tab$$5$$.$getStroke$().clone();
      $panelId$$9$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this) && this.$isDisclosed$() ? ($tab$$5$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $bActivePanel_stroke$$8$$.$setColor$(this.$_borderColor$)) : ($tab$$5$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $bActivePanel_stroke$$8$$.$setColor$(this.$_borderInactiveColor$));
      $tab$$5$$.$setStroke$($bActivePanel_stroke$$8$$)
    }
    var $bActivePanel_stroke$$8$$ = this.$isDisclosed$() && $panelId$$9$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $icon$$3$$ = this.$_panels$[$panelId$$9$$].icon;
    $icon$$3$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($icon$$3$$, $bActivePanel_stroke$$8$$);
    $bActivePanel_stroke$$8$$ ? this.$_activeContent$.$addChild$($tab$$5$$) : this.$_contentPane$.$addChildAt$($tab$$5$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$addAccessibilityAttributes$$($obj$$41$$, $desc$$) {
  $obj$$41$$ && $desc$$ && ((0,D.$JSCompiler_StaticMethods_setDesc$$)($obj$$41$$, $desc$$), (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($obj$$41$$), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($obj$$41$$, "label", $desc$$))
};
D.$JSCompiler_StaticMethods_setMaxContainerHeight$$ = function $$JSCompiler_StaticMethods_setMaxContainerHeight$$$($JSCompiler_StaticMethods_setMaxContainerHeight$self$$, $height$$33$$) {
  if(!$JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ || $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ < $height$$33$$) {
    $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ = $height$$33$$
  }
};
D.$DvtPanelDrawer$$.prototype.$getDimensions$ = function $$DvtPanelDrawer$$$$$getDimensions$$($dim$$15_targetCoordinateSpace$$) {
  $dim$$15_targetCoordinateSpace$$ = D.$DvtPanelDrawer$$.$superclass$.$getDimensions$.call(this, $dim$$15_targetCoordinateSpace$$);
  $dim$$15_targetCoordinateSpace$$.$w$ /= 1.25;
  return $dim$$15_targetCoordinateSpace$$
};
D.$DvtPanelDrawerEventManager$$ = function $$DvtPanelDrawerEventManager$$$($context$$550$$, $callback$$118$$, $callbackObj$$89$$) {
  this.Init($context$$550$$, $callback$$118$$, $callbackObj$$89$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEventManager$$, D.$DvtEventManager$$, "DvtPanelDrawerEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawerEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$502$$) {
  var $obj$$308$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$502$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $event$$502$$);
  $obj$$308$$ && ($obj$$308$$.$HandleClick$ && $obj$$308$$.$HandleClick$($event$$502$$), $event$$502$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$503$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$503$$);
  var $obj$$309$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$503$$));
  $obj$$309$$ && ($obj$$309$$.$isDoubleClickable$ && ($obj$$309$$.$isDoubleClickable$() && $obj$$309$$.$HandleDblClick$) && $obj$$309$$.$HandleDblClick$($event$$503$$), $event$$503$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$504$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$504$$);
  var $obj$$310$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$504$$));
  $obj$$310$$ && $obj$$310$$.$HandleRollOver$ && $obj$$310$$.$HandleRollOver$($event$$504$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$505$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$505$$);
  var $obj$$311$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$505$$));
  $obj$$311$$ && $obj$$311$$.$HandleRollOut$ && $obj$$311$$.$HandleRollOut$($event$$505$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$506$$) {
  var $obj$$312$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$506$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$506$$);
  $obj$$312$$ && ($obj$$312$$.$HandleClick$ && $obj$$312$$.$HandleClick$($event$$506$$), $event$$506$$.stopPropagation())
};
D.$DvtAccordion$$ = function $$DvtAccordion$$$($context$$134$$, $w$$14$$, $h$$16$$, $eventManager$$16$$, $images$$8$$, $styleMap$$45$$) {
  this.Init($context$$134$$, $w$$14$$, $h$$16$$, $eventManager$$16$$, $images$$8$$, $styleMap$$45$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordion$$, D.$DvtContainer$$, "DvtAccordion");
D.$DvtAccordion$$.prototype.Init = function $$DvtAccordion$$$$Init$($context$$135$$, $w$$15$$, $h$$17$$, $eventManager$$17$$, $images$$9$$, $styleMap$$46$$) {
  D.$DvtAccordion$$.$superclass$.Init.call(this, $context$$135$$, D.$JSCompiler_alias_NULL$$, $w$$15$$, $h$$17$$);
  this.$_images$ = $images$$9$$;
  this.$_styleMap$ = (new D.$DvtAccordionDefaults$$).$calcOptions$($styleMap$$46$$);
  this.$_sections$ = {};
  this.$_sectionOrder$ = [];
  this.$_ww$ = $w$$15$$;
  this.$_hh$ = $h$$17$$;
  this.$_bExpandMany$ = this.$_bCollapseAll$ = D.$JSCompiler_alias_FALSE$$;
  this.$_eventManager$ = $eventManager$$17$$;
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this)
};
D.$JSCompiler_StaticMethods_addSection$$ = function $$JSCompiler_StaticMethods_addSection$$$($JSCompiler_StaticMethods_addSection$self$$, $accordionSection_title$$7$$, $sectionContent$$, $isActive$$, $id$$43$$) {
  $id$$43$$ || ($id$$43$$ = "accordion_" + $accordionSection_title$$7$$.replace(/ /g, "_") + window.Math.floor(1E9 * window.Math.random()));
  $accordionSection_title$$7$$ = new D.$DvtAccordionSection$$($JSCompiler_StaticMethods_addSection$self$$.$_context$, $sectionContent$$, $accordionSection_title$$7$$, $isActive$$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_addSection$self$$, $JSCompiler_StaticMethods_addSection$self$$.$_eventManager$, $id$$43$$, $JSCompiler_StaticMethods_addSection$self$$.$_images$, $JSCompiler_StaticMethods_addSection$self$$.$_styleMap$);
  $JSCompiler_StaticMethods_addSection$self$$.$_sections$[$id$$43$$] = $accordionSection_title$$7$$;
  $JSCompiler_StaticMethods_addSection$self$$.$_sectionOrder$.push($id$$43$$);
  $JSCompiler_StaticMethods_addSection$self$$.$addChild$($accordionSection_title$$7$$)
};
D.$DvtAccordion$$.prototype.$render$ = function $$DvtAccordion$$$$$render$$() {
  for(var $maxSectionWidth$$ = this.$getMaxWidth$(), $bHasActive$$ = D.$JSCompiler_alias_FALSE$$, $i$$63$$ = 0;$i$$63$$ < this.$_sectionOrder$.length;$i$$63$$++) {
    var $section$$2$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$63$$);
    $section$$2$$.$render$($maxSectionWidth$$);
    $bHasActive$$ && !this.$_bExpandMany$ && $section$$2$$.setActive(D.$JSCompiler_alias_FALSE$$);
    $section$$2$$.$_isActive$ && $section$$2$$.$_isCollapsible$ && ($bHasActive$$ = D.$JSCompiler_alias_TRUE$$)
  }
  !$bHasActive$$ && 0 < this.$_sectionOrder$.length && (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, 0).setActive(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$DvtAccordion$$.prototype.$Update$ = function $$DvtAccordion$$$$$Update$$($activeSection_activeSectionId$$) {
  $activeSection_activeSectionId$$ = this.$_sections$[$activeSection_activeSectionId$$];
  var $JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$ = $activeSection_activeSectionId$$.$_isActive$;
  if($JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$) {
    if($JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$) {
      if($activeSection_activeSectionId$$.$_isCollapsible$) {
        if(this.$_bCollapseAll$) {
          $JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          for(var $expandedSectionCounter$$inline_1472$$ = 0, $i$$inline_1473$$ = 0;$i$$inline_1473$$ < this.$_sectionOrder$.length;$i$$inline_1473$$++) {
            $JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$inline_1473$$), $JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$.$_isActive$ && $expandedSectionCounter$$inline_1472$$++
          }
          $JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$ = 1 < $expandedSectionCounter$$inline_1472$$
        }
      }else {
        $JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$ = D.$JSCompiler_alias_FALSE$$
      }
    }
    $JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$ && $activeSection_activeSectionId$$.setActive(D.$JSCompiler_alias_FALSE$$)
  }else {
    if(!this.$_bExpandMany$) {
      for($JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$ = 0;$JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$ < this.$_sectionOrder$.length;$JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$++) {
        (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $JSCompiler_temp$$283_currActiveState_i$$64_section$$inline_1471$$).setActive(D.$JSCompiler_alias_FALSE$$)
      }
    }
    $activeSection_activeSectionId$$.setActive(D.$JSCompiler_alias_TRUE$$)
  }
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$DvtAccordion$$.prototype.$getMaxWidth$ = function $$DvtAccordion$$$$$getMaxWidth$$() {
  if(!this.$_maxSectionWidth$) {
    for(var $maxSectionWidth$$1$$ = 0, $paddingX$$ = this.$_styleMap$.paddingX, $i$$65$$ = 0;$i$$65$$ < this.$_sectionOrder$.length;$i$$65$$++) {
      var $secWidth_section$$3$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$65$$), $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$ = $secWidth_section$$3$$;
      if(!$JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$_titleDim$) {
        var $dim$$inline_1477_text$$inline_1476$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$_context$, $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$_title$);
        $dim$$inline_1477_text$$inline_1476$$.$setCSSStyle$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$_titleStyle$);
        if($dim$$inline_1477_text$$inline_1476$$ = $dim$$inline_1477_text$$inline_1476$$.$measureDimensions$()) {
          $dim$$inline_1477_text$$inline_1476$$.$w$ = $dim$$inline_1477_text$$inline_1476$$.$w$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$_imageWidth$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$_textPadding$
        }
        $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$_titleDim$ = $dim$$inline_1477_text$$inline_1476$$
      }
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$_titleDim$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$w$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_1475_dim$$17$$.$w$);
      $secWidth_section$$3$$ = $secWidth_section$$3$$.$getContentDimensions$().$w$ + 2 * $paddingX$$;
      $secWidth_section$$3$$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $secWidth_section$$3$$)
    }
    $maxSectionWidth$$1$$ > this.$_ww$ && ($maxSectionWidth$$1$$ = this.$_ww$);
    this.$_maxSectionWidth$ = $maxSectionWidth$$1$$
  }
  return this.$_maxSectionWidth$
};
D.$DvtAccordion$$.prototype.$getMaxHeight$ = function $$DvtAccordion$$$$$getMaxHeight$$() {
  if(!this.$_maxHeight$) {
    for(var $maxCollapsibleSectionHeight$$ = 0, $maxFixedSectionHeight$$ = 0, $i$$66$$ = 0;$i$$66$$ < this.$_sectionOrder$.length;$i$$66$$++) {
      var $section$$4$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$66$$), $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$ = $section$$4$$, $dim$$inline_1480$$ = D.$JSCompiler_alias_NULL$$;
      0 > $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$getChildIndex$($JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$_sectionContent$) ? ($JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$addChild$($JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$_sectionContent$), $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$_sectionContent$.$setTranslateX$($JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$_paddingX$), 
      $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$_sectionContent$.$setTranslateY$($JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$_headerHeight$ + $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$_paddingY$), $dim$$inline_1480$$ = $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$getDimensions$(), $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.removeChild($JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$_sectionContent$)) : 
      $dim$$inline_1480$$ = $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$.$getDimensions$();
      $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$ = $dim$$inline_1480$$.$h$;
      if($section$$4$$.$_isCollapsible$ && $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$ > $maxCollapsibleSectionHeight$$) {
        $maxCollapsibleSectionHeight$$ = $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$
      }else {
        if(!$section$$4$$.$_isCollapsible$ || this.$_bExpandMany$) {
          $maxFixedSectionHeight$$ += $JSCompiler_StaticMethods_getMaxDimensions$self$$inline_1479_sectionHeight$$
        }
      }
    }
    this.$_maxHeight$ = $maxCollapsibleSectionHeight$$ + $maxFixedSectionHeight$$
  }
  return this.$_maxHeight$
};
D.$JSCompiler_StaticMethods_getSectionByIndex$$ = function $$JSCompiler_StaticMethods_getSectionByIndex$$$($JSCompiler_StaticMethods_getSectionByIndex$self$$, $index$$56$$) {
  return 0 <= $index$$56$$ && $index$$56$$ < $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$.length ? $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sections$[$JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$[$index$$56$$]] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__drawSections$$ = function $$JSCompiler_StaticMethods__drawSections$$$($JSCompiler_StaticMethods__drawSections$self$$) {
  for(var $currY$$7$$ = 0, $i$$68$$ = 0;$i$$68$$ < $JSCompiler_StaticMethods__drawSections$self$$.$_sectionOrder$.length;$i$$68$$++) {
    var $section$$6$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods__drawSections$self$$, $i$$68$$);
    $section$$6$$.$setTranslateY$($currY$$7$$);
    $section$$6$$.$_isActive$ ? ($section$$6$$.expand(), $currY$$7$$ += $section$$6$$.$getDimensions$().$h$, $currY$$7$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.paddingY) : ($section$$6$$.collapse(), $currY$$7$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.sectionHeader.headerHeight)
  }
  $JSCompiler_StaticMethods__drawSections$self$$.$FireListener$(new D.$DvtResizeEvent$$($JSCompiler_StaticMethods__drawSections$self$$.$getMaxWidth$(), $currY$$7$$, 0, 0))
};
D.$DvtAccordionSection$$ = function $$DvtAccordionSection$$$($context$$551$$, $section$$10$$, $title$$9$$, $isActive$$2$$, $isCollapsible$$1$$, $parent$$85$$, $eventManager$$31$$, $id$$239$$, $images$$26$$, $styleMap$$95$$) {
  this.Init($context$$551$$, $section$$10$$, $title$$9$$, $isActive$$2$$, $isCollapsible$$1$$, $parent$$85$$, $eventManager$$31$$, $id$$239$$, $images$$26$$, $styleMap$$95$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionSection$$, D.$DvtContainer$$, "DvtAccordionSection");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAccordionSection$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$552$$, $section$$11$$, $title$$10$$, $isActive$$3$$, $isCollapsible$$2$$, $parent$$86$$, $eventManager$$32$$, $id$$240$$, $images$$27$$, $styleMap$$96$$) {
  D.$DvtAccordionSection$$.$superclass$.Init.call(this, $context$$552$$, D.$JSCompiler_alias_NULL$$, $id$$240$$);
  this.$_parent$ = $parent$$86$$;
  this.$_images$ = $images$$27$$;
  this.$_title$ = $title$$10$$;
  this.$_id$ = $id$$240$$;
  this.$_sectionContent$ = $section$$11$$;
  this.$_collapsedBtn$ = this.$_expandedBtn$ = D.$JSCompiler_alias_NULL$$;
  this.$_isActive$ = (this.$_isCollapsible$ = $isCollapsible$$2$$) ? $isActive$$3$$ : D.$JSCompiler_alias_TRUE$$;
  this.$_eventManager$ = $eventManager$$32$$;
  this.$_styleMap$ = $styleMap$$96$$;
  this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
  this.$_paddingX$ = this.$_styleMap$.paddingX;
  this.$_paddingY$ = this.$_styleMap$.paddingY;
  this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
  this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
  this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
  this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.setActive = (0,D.$JSCompiler_set$$)("$_isActive$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  var $dim$$74$$ = D.$JSCompiler_alias_NULL$$;
  0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $dim$$74$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $dim$$74$$ = this.$_sectionContent$.$getDimensions$();
  return $dim$$74$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($base$$inline_5764_proxy$$inline_5763_width$$88$$) {
  var $height$$inline_5761_text$$inline_5765$$ = this.$_headerHeight$;
  if(this.$_isCollapsible$) {
    window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionExpEna"), this.$_title$, $base$$inline_5764_proxy$$inline_5763_width$$88$$, $height$$inline_5761_text$$inline_5765$$);
    window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionExpOvr"), this.$_title$, $base$$inline_5764_proxy$$inline_5763_width$$88$$, $height$$inline_5761_text$$inline_5765$$);
    window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionExpDwn"), this.$_title$, $base$$inline_5764_proxy$$inline_5763_width$$88$$, $height$$inline_5761_text$$inline_5765$$);
    this.$_expandedBtn$ = new D.$DvtButton$$(this.$_context$, window.ena, window.ovr, window.dwn);
    window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionColEna"), this.$_title$, $base$$inline_5764_proxy$$inline_5763_width$$88$$, $height$$inline_5761_text$$inline_5765$$);
    window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionColOvr"), this.$_title$, $base$$inline_5764_proxy$$inline_5763_width$$88$$, $height$$inline_5761_text$$inline_5765$$);
    window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionColDwn"), this.$_title$, $base$$inline_5764_proxy$$inline_5763_width$$88$$, $height$$inline_5761_text$$inline_5765$$);
    this.$_collapsedBtn$ = new D.$DvtButton$$(this.$_context$, window.ena, window.ovr, window.dwn);
    var $thisRef$$inline_5762$$ = this;
    $base$$inline_5764_proxy$$inline_5763_width$$88$$ = {$HandleClick$:function $$base$$inline_5764_proxy$$inline_5763_width$$88$$$$HandleClick$$() {
      $thisRef$$inline_5762$$.$_parent$.$Update$($thisRef$$inline_5762$$.getId())
    }};
    this.$_eventManager$.$associate$(this.$_expandedBtn$, $base$$inline_5764_proxy$$inline_5763_width$$88$$);
    this.$_eventManager$.$associate$(this.$_collapsedBtn$, $base$$inline_5764_proxy$$inline_5763_width$$88$$)
  }else {
    $base$$inline_5764_proxy$$inline_5763_width$$88$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)(this, 3, $base$$inline_5764_proxy$$inline_5763_width$$88$$, $height$$inline_5761_text$$inline_5765$$), $height$$inline_5761_text$$inline_5765$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)(this, this.$_title$), this.$_header$ = new D.$DvtContainer$$(this.$_context$), this.$_header$.$addChild$($base$$inline_5764_proxy$$inline_5763_width$$88$$), this.$_header$.$addChild$($height$$inline_5761_text$$inline_5765$$)
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
D.$JSCompiler_StaticMethods__createHeaderState$$ = function $$JSCompiler_StaticMethods__createHeaderState$$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$, $base$$5_state$$40$$, $buttonState$$5_uri$$22$$, $label$$45_text$$76$$, $ww$$95$$, $hh$$85_image$$21$$) {
  var $imageWidth$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$.$_imageWidth$, $imageHeight$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$.$_imageHeight$, $imageOffsetY$$ = ($JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$.$_headerHeight$ - $imageHeight$$) / 2;
  $base$$5_state$$40$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$, $base$$5_state$$40$$, $ww$$95$$, $hh$$85_image$$21$$);
  $label$$45_text$$76$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$, $label$$45_text$$76$$);
  $hh$$85_image$$21$$ = D.$JSCompiler_alias_NULL$$;
  $buttonState$$5_uri$$22$$ && ($hh$$85_image$$21$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$.$_context$, $buttonState$$5_uri$$22$$, 0, $imageOffsetY$$, $imageWidth$$, $imageHeight$$));
  $buttonState$$5_uri$$22$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$.$_context$);
  $buttonState$$5_uri$$22$$.$addChild$($base$$5_state$$40$$);
  $hh$$85_image$$21$$ && $buttonState$$5_uri$$22$$.$addChild$($hh$$85_image$$21$$);
  $buttonState$$5_uri$$22$$.$addChild$($label$$45_text$$76$$);
  D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$.$_context$) ? ($JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$ = $label$$45_text$$76$$.$measureDimensions$(), $label$$45_text$$76$$.$setTranslateX$($ww$$95$$ - $JSCompiler_StaticMethods__createHeaderState$self_dim$$78$$.$w$ - $imageWidth$$), $hh$$85_image$$21$$ && $hh$$85_image$$21$$.$setTranslateX$($ww$$95$$ - $imageWidth$$)) : $label$$45_text$$76$$.$setTranslateX$($imageWidth$$);
  return $buttonState$$5_uri$$22$$
};
D.$JSCompiler_StaticMethods__createButtonText$$ = function $$JSCompiler_StaticMethods__createButtonText$$$($JSCompiler_StaticMethods__createButtonText$self$$, $label$$46$$) {
  var $text$$77$$ = D.$JSCompiler_alias_NULL$$;
  if($label$$46$$) {
    $text$$77$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods__createButtonText$self$$.$_context$, $label$$46$$);
    $text$$77$$.$setCSSStyle$($JSCompiler_StaticMethods__createButtonText$self$$.$_titleStyle$);
    var $dim$$79$$ = $text$$77$$.$measureDimensions$();
    $dim$$79$$.$w$ = $dim$$79$$.$w$ + $JSCompiler_StaticMethods__createButtonText$self$$.$_imageWidth$ + $JSCompiler_StaticMethods__createButtonText$self$$.$_textPadding$;
    if(!$JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$w$ < $dim$$79$$.$w$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$h$ < $dim$$79$$.$h$) {
      $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ = $dim$$79$$
    }
    $text$$77$$.$setTranslateY$(($JSCompiler_StaticMethods__createButtonText$self$$.$_headerHeight$ - $dim$$79$$.$h$) / 2)
  }
  return $text$$77$$
};
D.$JSCompiler_StaticMethods__createButtonBase$$ = function $$JSCompiler_StaticMethods__createButtonBase$$$($JSCompiler_StaticMethods__createButtonBase$self_base$$6$$, $state$$42$$, $ww$$96$$, $hh$$86$$) {
  var $style$$81$$ = D.$JSCompiler_alias_NULL$$;
  switch($state$$42$$) {
    case 1:
      $style$$81$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$6$$.$_styleMap$.sectionHeader.styleOvr;
      break;
    case 2:
      $style$$81$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$6$$.$_styleMap$.sectionHeader.styleDwn;
      break;
    case 3:
      $style$$81$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$6$$.$_styleMap$.sectionHeader.styleDis;
      break;
    default:
      $style$$81$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$6$$.$_styleMap$.sectionHeader.styleEna
  }
  $JSCompiler_StaticMethods__createButtonBase$self_base$$6$$ = new D.$DvtRect$$($JSCompiler_StaticMethods__createButtonBase$self_base$$6$$.$_context$, 0, 0, $ww$$96$$, $hh$$86$$);
  $JSCompiler_StaticMethods__createButtonBase$self_base$$6$$.$setStroke$((0,D.$DvtAccordionSection$_getStroke$$)($style$$81$$));
  $JSCompiler_StaticMethods__createButtonBase$self_base$$6$$.$setFill$((0,D.$DvtAccordionSection$_getFill$$)($style$$81$$));
  return $JSCompiler_StaticMethods__createButtonBase$self_base$$6$$
};
D.$DvtAccordionSection$_getFill$$ = function $$DvtAccordionSection$_getFill$$$($angle$$38_gradObj$$6_style$$82$$) {
  var $arColors$$27_color$$61$$ = $angle$$38_gradObj$$6_style$$82$$.$getStyle$("background-color");
  $angle$$38_gradObj$$6_style$$82$$ = (0,D.$JSCompiler_StaticMethods_getBackgroundImage$$)($angle$$38_gradObj$$6_style$$82$$);
  var $arAlphas$$26_fill$$41$$ = D.$JSCompiler_alias_NULL$$;
  if($angle$$38_gradObj$$6_style$$82$$ && $angle$$38_gradObj$$6_style$$82$$ instanceof D.$DvtCSSGradient$$) {
    var $arColors$$27_color$$61$$ = $angle$$38_gradObj$$6_style$$82$$.$_arColors$, $arAlphas$$26_fill$$41$$ = $angle$$38_gradObj$$6_style$$82$$.$_arAlphas$, $arStops$$24$$ = $angle$$38_gradObj$$6_style$$82$$.$_arRatios$;
    $angle$$38_gradObj$$6_style$$82$$ = $angle$$38_gradObj$$6_style$$82$$.$getAngle$();
    $arAlphas$$26_fill$$41$$ = new D.$DvtLinearGradientFill$$($angle$$38_gradObj$$6_style$$82$$, $arColors$$27_color$$61$$, $arAlphas$$26_fill$$41$$, $arStops$$24$$)
  }else {
    $arColors$$27_color$$61$$ && ($arAlphas$$26_fill$$41$$ = new D.$DvtSolidFill$$($arColors$$27_color$$61$$, 1))
  }
  return $arAlphas$$26_fill$$41$$
};
D.$DvtAccordionSection$_getStroke$$ = function $$DvtAccordionSection$_getStroke$$$($color$$62_style$$83$$) {
  $color$$62_style$$83$$ = $color$$62_style$$83$$.$getStyle$("border-color");
  return new D.$DvtSolidStroke$$($color$$62_style$$83$$, 1, 1)
};
D.$DvtAccordionDefaults$$ = function $$DvtAccordionDefaults$$$() {
  this.Init({skyros:D.$DvtAccordionDefaults$VERSION_1$$, alta:D.$DvtAccordionDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAccordionDefaults");
D.$DvtAccordionDefaults$VERSION_1$$ = {skin:"alta", sectionHeader:{styleEna:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), 
styleDis:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:15, paddingY:15};
D.$DvtAccordionDefaults$SKIN_ALTA$$ = {};
D.$DvtTrain$$ = function $$DvtTrain$$$($context$$125$$, $eventManager$$13$$, $labels$$, $buttonStyles$$, $id$$29$$) {
  this.Init($context$$125$$, $eventManager$$13$$, $labels$$, $buttonStyles$$, $id$$29$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTrain$$, D.$DvtContainer$$, "DvtTrain");
D.$DvtTrain$$.prototype.Init = function $$DvtTrain$$$$Init$($context$$126$$, $eventManager$$14$$, $labels$$1$$, $buttonStyles$$1$$, $id$$30$$) {
  D.$DvtTrain$$.$superclass$.Init.call(this, $context$$126$$, D.$JSCompiler_alias_NULL$$, $id$$30$$);
  this.$_tooltipManager$ = $context$$126$$.$getTooltipManager$();
  this.$_labels$ = $labels$$1$$;
  this.$_buttonStyles$ = $buttonStyles$$1$$;
  this.$_count$ = $labels$$1$$.length;
  this.$_buttons$ = (0,window.Array)(this.$_count$);
  this.$_selectedIndex$ = 0;
  this.$RenderSelf$($eventManager$$14$$)
};
D.$DvtTrain$$.prototype.$setSelectedIndex$ = function $$DvtTrain$$$$$setSelectedIndex$$($index$$53$$) {
  0 <= $index$$53$$ && $index$$53$$ < this.$_count$ && (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, this.$_selectedIndex$, $index$$53$$)
};
D.$DvtTrain$$.prototype.$HandleClick$ = function $$DvtTrain$$$$$HandleClick$$($event$$79_selIndex$$2$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$79_selIndex$$2$$);
  for(var $event$$inline_1387_i$$59$$ = 0;$event$$inline_1387_i$$59$$ < this.$_buttons$.length;$event$$inline_1387_i$$59$$++) {
    if($event$$79_selIndex$$2$$.target.getParent() === this.$_buttons$[$event$$inline_1387_i$$59$$]) {
      $event$$79_selIndex$$2$$ = this.$_selectedIndex$;
      (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, $event$$79_selIndex$$2$$, $event$$inline_1387_i$$59$$);
      $event$$79_selIndex$$2$$ != $event$$inline_1387_i$$59$$ && ($event$$inline_1387_i$$59$$ = new D.$DvtTrainEvent$$(this.$_selectedIndex$), this.$FireListener$($event$$inline_1387_i$$59$$, D.$JSCompiler_alias_FALSE$$));
      break
    }
  }
};
D.$JSCompiler_StaticMethods_SelectedIndexChanged$$ = function $$JSCompiler_StaticMethods_SelectedIndexChanged$$$($JSCompiler_StaticMethods_SelectedIndexChanged$self$$, $button$$9_oldIndex$$, $newIndex$$1$$) {
  $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_selectedIndex$ = $newIndex$$1$$;
  if($button$$9_oldIndex$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$button$$9_oldIndex$$]) {
    $button$$9_oldIndex$$.$overState$ && $button$$9_oldIndex$$.$overState$.setCursor("pointer"), $button$$9_oldIndex$$.$downState$ && $button$$9_oldIndex$$.$downState$.setCursor("pointer"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$9_oldIndex$$, D.$JSCompiler_alias_FALSE$$)
  }
  if($button$$9_oldIndex$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$newIndex$$1$$]) {
    $button$$9_oldIndex$$.$overState$ && $button$$9_oldIndex$$.$overState$.setCursor("default"), $button$$9_oldIndex$$.$downState$ && $button$$9_oldIndex$$.$downState$.setCursor("default"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$9_oldIndex$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtTrain$$.prototype.$RenderSelf$ = function $$DvtTrain$$$$$RenderSelf$$($eventManager$$15$$) {
  var $bBiDi$$4$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$), $buttonSize_buttonStyle$$inline_1390$$;
  if(!this.$_buttonSize$) {
    if(this.$_buttonStyles$ && ($buttonSize_buttonStyle$$inline_1390$$ = this.$_buttonStyles$[0])) {
      this.$_buttonSize$ = (0,D.$DvtCSSStyle$toNumber$$)($buttonSize_buttonStyle$$inline_1390$$.getWidth())
    }
    this.$_buttonSize$ || (this.$_buttonSize$ = 8)
  }
  $buttonSize_buttonStyle$$inline_1390$$ = this.$_buttonSize$;
  for(var $i$$60$$ = 0;$i$$60$$ < this.$_count$;$i$$60$$++) {
    var $button$$10$$, $button$$inline_1393_j$$8$$ = $button$$10$$ = this.$CreateButton$($buttonSize_buttonStyle$$inline_1390$$, $i$$60$$ == this.$_selectedIndex$, this.$_labels$[$i$$60$$]);
    $button$$inline_1393_j$$8$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    D.$DvtAgent$$.$isTouchDevice$() || $button$$inline_1393_j$$8$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    $button$$inline_1393_j$$8$$ = $i$$60$$;
    $bBiDi$$4$$ && ($button$$inline_1393_j$$8$$ = this.$_count$ - 1 - $i$$60$$);
    $eventManager$$15$$ && $eventManager$$15$$.$associate$($button$$10$$, $button$$10$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$10$$, $button$$inline_1393_j$$8$$ * $buttonSize_buttonStyle$$inline_1390$$ + 3 * ($button$$inline_1393_j$$8$$ + 1), 1);
    this.$addChild$($button$$10$$);
    this.$_buttons$[$i$$60$$] = $button$$10$$
  }
};
D.$DvtTrain$$.prototype.$CreateButtonState$ = function $$DvtTrain$$$$$CreateButtonState$$($url$$23$$, $buttonSize$$2$$) {
  return new D.$DvtImage$$(this.$_context$, $url$$23$$, 0, 0, $buttonSize$$2$$, $buttonSize$$2$$)
};
D.$JSCompiler_StaticMethods_MakeButtonState$$ = function $$JSCompiler_StaticMethods_MakeButtonState$$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$, $buttonSize$$3$$, $state$$17$$, $bSelected$$2$$) {
  var $bdColor$$inline_1399_style$$3_url$$24$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$_buttonStyles$ ? $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$_buttonStyles$[$state$$17$$] : D.$JSCompiler_alias_NULL$$;
  if($bdColor$$inline_1399_style$$3_url$$24$$ = $bdColor$$inline_1399_style$$3_url$$24$$ ? $bdColor$$inline_1399_style$$3_url$$24$$.$getStyle$("content") : D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$CreateButtonState$($bdColor$$inline_1399_style$$3_url$$24$$, $buttonSize$$3$$)
  }else {
    var $buttonStyle$$inline_1398$$, $bgColor$$inline_1400$$, $offset$$inline_1401$$;
    2 == $state$$17$$ ? ($offset$$inline_1401$$ = 0, $bgColor$$inline_1400$$ = "#61bde3", $bdColor$$inline_1399_style$$3_url$$24$$ = "#0066ff", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$_buttonStyles$ && ($buttonStyle$$inline_1398$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$_buttonStyles$[2])) : ($offset$$inline_1401$$ = 1, $bgColor$$inline_1400$$ = "#c0cbd5", $bdColor$$inline_1399_style$$3_url$$24$$ = 
    "#5d7891", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$_buttonStyles$ && ($buttonStyle$$inline_1398$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$_buttonStyles$[0]));
    $buttonStyle$$inline_1398$$ && ($buttonStyle$$inline_1398$$.$getStyle$("border-color") && ($bdColor$$inline_1399_style$$3_url$$24$$ = $buttonStyle$$inline_1398$$.$getStyle$("border-color")), $buttonStyle$$inline_1398$$.$getStyle$("background-color") && ($bgColor$$inline_1400$$ = $buttonStyle$$inline_1398$$.$getStyle$("background-color")));
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$_context$, $offset$$inline_1401$$, $offset$$inline_1401$$, $buttonSize$$3$$ - 2 * $offset$$inline_1401$$, $buttonSize$$3$$ - 2 * $offset$$inline_1401$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$setSolidFill$($bgColor$$inline_1400$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.$setSolidStroke$($bdColor$$inline_1399_style$$3_url$$24$$)
  }
  $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$.setCursor(0 == $state$$17$$ || $bSelected$$2$$ ? "default" : "pointer");
  return $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$355_shape$$19_shape$$inline_1402$$
};
D.$DvtTrain$$.prototype.$CreateButton$ = function $$DvtTrain$$$$$CreateButton$$($button$$13_buttonSize$$4$$, $bSelected$$3$$, $tooltip$$9$$) {
  $button$$13_buttonSize$$4$$ = new D.$DvtButton$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$13_buttonSize$$4$$, 0, $bSelected$$3$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$13_buttonSize$$4$$, 1, $bSelected$$3$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$13_buttonSize$$4$$, 2, $bSelected$$3$$), D.$JSCompiler_alias_NULL$$);
  $button$$13_buttonSize$$4$$.$setTooltip$($tooltip$$9$$);
  $button$$13_buttonSize$$4$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $bSelected$$3$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$13_buttonSize$$4$$, $bSelected$$3$$);
  return $button$$13_buttonSize$$4$$
};
D.$DvtTrainEvent$$ = function $$DvtTrainEvent$$$($index$$54$$) {
  this.Init("dvtTrain");
  this.type = this.$getType$();
  this.$_index$ = $index$$54$$
};
(0,D.$goog$exportSymbol$$)("DvtTrainEvent", D.$DvtTrainEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTrainEvent$$, D.$DvtBaseComponentEvent$$, "DvtTrainEvent");
D.$DvtTrainEvent$$.TYPE = "dvtTrain";
D.$DvtTrainEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtTrainEvent$$.prototype.getIndex = D.$DvtTrainEvent$$.prototype.$getIndex$;
D.DvtOverviewWindow = function $DvtOverviewWindow$($context$$129$$, $id$$40$$, $x$$90$$, $y$$67$$, $ww$$24$$, $hh$$21$$) {
  this.Init($context$$129$$, $id$$40$$, $x$$90$$, $y$$67$$, $ww$$24$$, $hh$$21$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtOverviewWindow, D.$DvtContainer$$, "DvtOverviewWindow");
D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
D.DvtOverviewWindow.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$130$$, $id$$41$$, $x$$91$$, $y$$68$$, $ww$$25$$, $hh$$22$$) {
  D.DvtOverviewWindow.$superclass$.Init.call(this, $context$$130$$, D.$JSCompiler_alias_NULL$$, $id$$41$$);
  this.$_x$ = $x$$91$$;
  this.$_y$ = $y$$68$$;
  this.$_ww$ = $ww$$25$$;
  this.$_hh$ = $hh$$22$$;
  this.$_skinStyle$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  this.$_md$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panEnable$ = D.$JSCompiler_alias_TRUE$$;
  this.$_overview$ && (D.$DvtAgent$$.$isTouchDevice$() ? (this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, D.$JSCompiler_alias_NULL$$));
  this.$removeChildren$();
  this.$_overview$ = this.$_viewport$ = D.$JSCompiler_alias_NULL$$;
  var $bgColor$$4_clipPath$$1$$ = new D.$DvtClipPath$$(this.getId());
  (0,D.$JSCompiler_StaticMethods_addRect$$)($bgColor$$4_clipPath$$1$$, 0, 0, this.$_ww$, this.$_hh$);
  this.$_overview$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, $bgColor$$4_clipPath$$1$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_overview$);
  this.$addChild$(this.$_overview$);
  this.$_viewport$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
  $bgColor$$4_clipPath$$1$$ = this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$);
  this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$), D.$JSCompiler_alias_NULL$$, 2);
  this.$_viewport$.$setSolidFill$($bgColor$$4_clipPath$$1$$);
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
D.$JSCompiler_StaticMethods_setViewportDimensions$$ = function $$JSCompiler_StaticMethods_setViewportDimensions$$$($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$16_vx$$, $animator$$14$$) {
  var $topLeft_vh$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$16_vx$$.x, $dim$$16_vx$$.y, $animator$$14$$), $bottomRight$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$16_vx$$.x + $dim$$16_vx$$.$w$, $dim$$16_vx$$.y + $dim$$16_vx$$.$h$, $animator$$14$$);
  $dim$$16_vx$$ = $topLeft_vh$$.x;
  var $vy$$ = $topLeft_vh$$.y, $vw$$ = $bottomRight$$.x - $topLeft_vh$$.x, $topLeft_vh$$ = $bottomRight$$.y - $topLeft_vh$$.y;
  $animator$$14$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$14$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getX$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$, $dim$$16_vx$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$14$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getY$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$, $vy$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$14$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getWidth, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$, $vw$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$14$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getHeight, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$, $topLeft_vh$$)) : ($JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$($dim$$16_vx$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$($vy$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$($vw$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$($topLeft_vh$$))
};
D.$JSCompiler_StaticMethods_getViewportDimensions$$ = function $$JSCompiler_StaticMethods_getViewportDimensions$$$($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$) {
  var $topLeft$$1$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.$getX$(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.$getY$());
  $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.$getX$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.getWidth(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.$getY$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.$_viewport$.getHeight());
  return new D.$DvtRectangle$$($topLeft$$1$$.x, $topLeft$$1$$.y, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.x - $topLeft$$1$$.x, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$1$$.y - $topLeft$$1$$.y)
};
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.$_mouseDown$ = function $$JSCompiler_prototypeAlias$$$$_mouseDown$$($evt$$24_viewportEvent$$) {
  if(!this.$_md$ && this.$_panEnable$) {
    this.$_md$ = D.$JSCompiler_alias_TRUE$$;
    var $offset$$20$$ = this.$_getRelativePosition$($evt$$24_viewportEvent$$);
    $evt$$24_viewportEvent$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$20$$), $evt$$24_viewportEvent$$);
    this.$FireListener$($evt$$24_viewportEvent$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseMove$ = function $$JSCompiler_prototypeAlias$$$$_mouseMove$$($evt$$25_viewportEvent$$1$$) {
  if(this.$_md$ && this.$_panEnable$) {
    var $offset$$21$$ = this.$_getRelativePosition$($evt$$25_viewportEvent$$1$$);
    $evt$$25_viewportEvent$$1$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$21$$), $evt$$25_viewportEvent$$1$$);
    this.$FireListener$($evt$$25_viewportEvent$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseUp$ = function $$JSCompiler_prototypeAlias$$$$_mouseUp$$() {
  this.$_md$ && this.$_panEnable$ && (this.$_md$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$_mouseOut$ = function $$JSCompiler_prototypeAlias$$$$_mouseOut$$() {
  this.$_mouseUp$()
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($evt$$28_touches$$2$$) {
  var $pageX$$1$$, $pageY$$1$$;
  D.$DvtAgent$$.$isTouchDevice$() ? ($evt$$28_touches$$2$$ = $evt$$28_touches$$2$$.touches, 0 < $evt$$28_touches$$2$$.length && ($pageX$$1$$ = $evt$$28_touches$$2$$[0].pageX, $pageY$$1$$ = $evt$$28_touches$$2$$[0].pageY)) : ($pageX$$1$$ = $evt$$28_touches$$2$$.pageX, $pageY$$1$$ = $evt$$28_touches$$2$$.pageY);
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $pageX$$1$$, $pageY$$1$$)
};
D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$ = function $$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$$($JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$, $vx$$1$$, $vy$$1$$) {
  var $tx$$1$$ = 0, $ty$$1$$ = 0, $sx$$1$$ = 1, $sy$$1$$ = 1;
  $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$ && ($tx$$1$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateX$(), $ty$$1$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateY$(), $sx$$1$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleX$(), $sy$$1$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$(($vx$$1$$ - $tx$$1$$) / $sx$$1$$, ($vy$$1$$ - $ty$$1$$) / $sy$$1$$)
};
D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$ = function $$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$$($JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$, $cx$$1$$, $cy$$1$$, $animator$$15$$) {
  var $tx$$2$$ = 0, $ty$$2$$ = 0, $sx$$2$$ = 1, $sy$$2$$ = 1;
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$ && ($tx$$2$$ = $animator$$15$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$15$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$(), $ty$$2$$ = $animator$$15$$ ? 
  (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$15$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$(), $sx$$2$$ = $animator$$15$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$15$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$(), $sy$$2$$ = $animator$$15$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$15$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$, D.$JSCompiler_alias_TRUE$$) : 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$($cx$$1$$ * $sx$$2$$ + $tx$$2$$, $cy$$1$$ * $sy$$2$$ + $ty$$2$$)
};
D.DvtOverviewWindow.prototype.$getSkinStyle$ = (0,D.$JSCompiler_get$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$setSkinStyle$ = (0,D.$JSCompiler_set$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$getSkinStyleAttr$ = function $DvtOverviewWindow$$$getSkinStyleAttr$$($attr$$15$$) {
  return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$attr$$15$$] ? this.$_skinStyle$[$attr$$15$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$ = function $$JSCompiler_StaticMethods__getCenteredViewportDimensions$$$($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $pos$$7$$) {
  var $overviewStart_topLeft$$2$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_overview$, new D.$DvtPoint$$(0, 0)), $bottomRight$$2_viewportDims$$ = $JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_viewport$.$getDimensions$(), $centeredViewportX$$ = $pos$$7$$.x - $overviewStart_topLeft$$2$$.x - $bottomRight$$2_viewportDims$$.$w$ / 2, $centeredViewportY$$ = $pos$$7$$.y - $overviewStart_topLeft$$2$$.y - $bottomRight$$2_viewportDims$$.$h$ / 
  2, $overviewStart_topLeft$$2$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$, $centeredViewportY$$), $bottomRight$$2_viewportDims$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$ + $bottomRight$$2_viewportDims$$.$w$, $centeredViewportY$$ + $bottomRight$$2_viewportDims$$.$h$);
  return new D.$DvtRectangle$$($overviewStart_topLeft$$2$$.x, $overviewStart_topLeft$$2$$.y, $bottomRight$$2_viewportDims$$.x - $overviewStart_topLeft$$2$$.x, $bottomRight$$2_viewportDims$$.y - $overviewStart_topLeft$$2$$.y)
};
D.DvtOverviewWindow.prototype.$SetViewportRectangle$ = function $DvtOverviewWindow$$$SetViewportRectangle$$($rect$$3$$) {
  this.$_viewport$.$setX$($rect$$3$$.x);
  this.$_viewport$.$setY$($rect$$3$$.y);
  this.$_viewport$.$setWidth$($rect$$3$$.$w$);
  this.$_viewport$.$setHeight$($rect$$3$$.$h$)
};
D.DvtOverviewWindow.prototype.$GetViewportRectangle$ = function $DvtOverviewWindow$$$GetViewportRectangle$$() {
  return new D.$DvtRectangle$$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight())
};
D.DvtOverviewWindow.prototype.$getDimensions$ = function $DvtOverviewWindow$$$getDimensions$$($targetCoordinateSpace$$1$$) {
  var $bounds$$18$$ = new D.$DvtRectangle$$(0, 0, this.$_ww$, this.$_hh$);
  return!$targetCoordinateSpace$$1$$ || $targetCoordinateSpace$$1$$ === this ? $bounds$$18$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$18$$, $targetCoordinateSpace$$1$$)
};
});