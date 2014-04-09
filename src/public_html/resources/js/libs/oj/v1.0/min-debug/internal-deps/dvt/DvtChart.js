define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGraphSelectableArc$$ = function $$DvtGraphSelectableArc$$$($context$$422$$, $cx$$27$$, $cy$$28$$, $rx$$18$$, $ry$$18$$, $sa$$6$$, $ae$$4$$, $clos$$, $id$$154$$) {
  this.Init($context$$422$$, $cx$$27$$, $cy$$28$$, $rx$$18$$, $ry$$18$$, $sa$$6$$, $ae$$4$$, $clos$$, $id$$154$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectableArc$$, D.$DvtArc$$, "DvtGraphSelectableArc");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectableArc$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$423$$, $cx$$28$$, $cy$$29$$, $rx$$19$$, $ry$$19$$, $sa$$7$$, $ae$$5$$, $clos$$1$$, $id$$155$$) {
  D.$DvtGraphSelectableArc$$.$superclass$.Init.call(this, $context$$423$$, $cx$$28$$, $cy$$29$$, $rx$$19$$, $ry$$19$$, $sa$$7$$, $ae$$5$$, $clos$$1$$, $id$$155$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$2$$) {
  this.$_bHover$ != $bOver$$2$$ && (this.$_bHover$ = $bOver$$2$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$2$$) {
  this.$_bSelected$ != $bSel$$2$$ && (this.$_bSelected$ = $bSel$$2$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$4$$, $innerColor$$3$$, $outerColor$$3$$) {
  this.$_dataColor$ = $dataColor$$4$$;
  this.$_innerColor$ = $innerColor$$3$$;
  this.$_outerColor$ = $outerColor$$3$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePath$$ = function $$DvtGraphSelectablePath$$$($context$$424$$, $cmds$$19$$, $id$$156$$) {
  this.Init($context$$424$$, $cmds$$19$$, $id$$156$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePath$$, D.$DvtPath$$, "DvtGraphSelectablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$425$$, $cmds$$20$$, $id$$157$$) {
  D.$DvtGraphSelectablePath$$.$superclass$.Init.call(this, $context$$425$$, $cmds$$20$$, $id$$157$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$3$$) {
  this.$_bHover$ != $bOver$$3$$ && (this.$_bHover$ = $bOver$$3$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$3$$) {
  this.$_bSelected$ != $bSel$$3$$ && (this.$_bSelected$ = $bSel$$3$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$5$$, $innerColor$$4$$, $outerColor$$4$$) {
  this.$_dataColor$ = $dataColor$$5$$;
  this.$_innerColor$ = $innerColor$$4$$;
  this.$_outerColor$ = $outerColor$$4$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePolygon$$ = function $$DvtGraphSelectablePolygon$$$($color$$43$$, $context$$420$$, $arPoints$$22$$, $id$$152$$) {
  this.Init($color$$43$$, $context$$420$$, $arPoints$$22$$, $id$$152$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePolygon$$, D.$DvtPolygon$$, "DvtGraphSelectablePolygon");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePolygon$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$421$$, $arPoints$$23$$, $id$$153$$) {
  D.$DvtGraphSelectablePolygon$$.$superclass$.Init.call(this, $context$$421$$, $arPoints$$23$$, $id$$153$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$1$$) {
  this.$_bHover$ != $bOver$$1$$ && (this.$_bHover$ = $bOver$$1$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$1$$) {
  this.$_bSelected$ != $bSel$$1$$ && (this.$_bSelected$ = $bSel$$1$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$3$$, $innerColor$$2$$, $outerColor$$2$$) {
  this.$_dataColor$ = $dataColor$$3$$;
  this.$_innerColor$ = $innerColor$$2$$;
  this.$_outerColor$ = $outerColor$$2$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartBar$$ = function $$DvtChartBar$$$($context$$599$$, $bHoriz$$3$$, $bStacked$$, $axisCoord$$, $baselineCoord$$5$$, $endCoord$$7$$, $x1$$27$$, $x2$$23$$) {
  this.Init($context$$599$$);
  this.$_bHoriz$ = $bHoriz$$3$$;
  this.$_bStacked$ = $bStacked$$;
  this.$_axisCoord$ = $axisCoord$$;
  this.$_setBarCoords$($baselineCoord$$5$$, $endCoord$$7$$, $x1$$27$$, $x2$$23$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartBar$$, D.$DvtPolygon$$, "DvtChartBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$43$$, $stroke$$74$$, $dataColor$$7$$, $innerColor$$6$$, $outerColor$$6$$) {
  this.$_fill$ = $fill$$43$$;
  this.$_stroke$ = $stroke$$74$$;
  this.$_hoverColor$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$7$$);
  this.$_innerColor$ = $innerColor$$6$$;
  this.$_outerColor$ = $outerColor$$6$$;
  this.$setFill$($fill$$43$$);
  $stroke$$74$$ && this.$setStroke$($stroke$$74$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_hoverColor$, this.$isSelected$() ? this.$_innerColor$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$27$$) {
  this.$IsSelected$ != $selected$$27$$ && (this.$IsSelected$ = $selected$$27$$, this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : D.$JSCompiler_alias_NULL$$))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$34$$, $indicator$$7$$) {
  this.$_setBarCoords$($params$$34$$[0], $params$$34$$[1], $params$$34$$[2], $params$$34$$[3]);
  if($indicator$$7$$) {
    var $indicatorPosition_x$$inline_6003$$, $widthCoord$$inline_6002_y$$inline_6004$$ = (this.$_x1$ + this.$_x2$) / 2, $lengthCoord$$inline_6006_midLength$$inline_6005$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + 8 : this.$_endCoord$ - 8;
    $indicatorPosition_x$$inline_6003$$ = this.$_bHoriz$ ? $lengthCoord$$inline_6006_midLength$$inline_6005$$ : $widthCoord$$inline_6002_y$$inline_6004$$;
    $widthCoord$$inline_6002_y$$inline_6004$$ = this.$_bHoriz$ ? $widthCoord$$inline_6002_y$$inline_6004$$ : $lengthCoord$$inline_6006_midLength$$inline_6005$$;
    $indicatorPosition_x$$inline_6003$$ = new D.$DvtPoint$$($indicatorPosition_x$$inline_6003$$, $widthCoord$$inline_6002_y$$inline_6004$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$7$$, $indicatorPosition_x$$inline_6003$$.x, $indicatorPosition_x$$inline_6003$$.y);
    $indicator$$7$$.getParent().$addChild$($indicator$$7$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$65_nodePlayable$$1$$) {
  var $endState$$4$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
  $duration$$65_nodePlayable$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$65_nodePlayable$$1$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$65_nodePlayable$$1$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$4$$);
  return $duration$$65_nodePlayable$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$66_nodePlayable$$2$$) {
  var $endState$$5$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$66_nodePlayable$$2$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$66_nodePlayable$$2$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$66_nodePlayable$$2$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$5$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$66_nodePlayable$$2$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$66_nodePlayable$$2$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$67_nodePlayable$$3$$) {
  this.$setAlpha$(0);
  $duration$$67_nodePlayable$$3$$ = this.$getDisplayAnimation$($duration$$67_nodePlayable$$3$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$67_nodePlayable$$3$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$67_nodePlayable$$3$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$6$$, $endCoord$$8$$, $x1$$28$$, $x2$$24$$) {
  this.$_baselineCoord$ = $baselineCoord$$6$$;
  this.$_endCoord$ = $endCoord$$8$$;
  this.$_x1$ = $x1$$28$$;
  this.$_x2$ = $x2$$24$$;
  this.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this));
  this.$_outerChild$ && this.$_outerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 2));
  this.$_innerChild$ && this.$_innerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 3.5))
};
D.$JSCompiler_StaticMethods__createPointsArray$$ = function $$JSCompiler_StaticMethods__createPointsArray$$$($JSCompiler_StaticMethods__createPointsArray$self$$, $inset$$) {
  var $baselineCoord$$7$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_baselineCoord$, $endCoord$$9$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_endCoord$, $x1$$29$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x1$, $x2$$25$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x2$;
  if(0 < $inset$$) {
    if(window.Math.abs($x1$$29$$ - $x2$$25$$) < 2 * $inset$$ || window.Math.abs($baselineCoord$$7$$ - $endCoord$$9$$) < 2 * $inset$$) {
      return[]
    }
    $x1$$29$$ += $inset$$;
    $x2$$25$$ -= $inset$$;
    $endCoord$$9$$ < $baselineCoord$$7$$ ? ($baselineCoord$$7$$ -= $inset$$, $endCoord$$9$$ += $inset$$) : ($baselineCoord$$7$$ += $inset$$, $endCoord$$9$$ -= $inset$$)
  }
  return $JSCompiler_StaticMethods__createPointsArray$self$$.$_bHoriz$ ? [$endCoord$$9$$, $x1$$29$$, $endCoord$$9$$, $x2$$25$$, $baselineCoord$$7$$, $x2$$25$$, $baselineCoord$$7$$, $x1$$29$$] : [$x1$$29$$, $endCoord$$9$$, $x2$$25$$, $endCoord$$9$$, $x2$$25$$, $baselineCoord$$7$$, $x1$$29$$, $baselineCoord$$7$$]
};
D.$JSCompiler_StaticMethods__showNestedBorders$$ = function $$JSCompiler_StaticMethods__showNestedBorders$$$($JSCompiler_StaticMethods__showNestedBorders$self$$, $outerBorderColor$$, $innerBorderColor$$) {
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$ || ($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$ = new D.$DvtPolygon$$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_context$, (0,D.$JSCompiler_StaticMethods__createPointsArray$$)($JSCompiler_StaticMethods__showNestedBorders$self$$, 2)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$addChild$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$ = new D.$DvtPolygon$$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_context$, (0,D.$JSCompiler_StaticMethods__createPointsArray$$)($JSCompiler_StaticMethods__showNestedBorders$self$$, 3.5)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$addChild$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$));
  $innerBorderColor$$ ? ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setSolidFill$($outerBorderColor$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setSolidFill$($innerBorderColor$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$)) : ($outerBorderColor$$ ? ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setSolidFill$($outerBorderColor$$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$)) : ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_stroke$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$)), 
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$))
};
D.$DvtChartBar$$.prototype.$getBoundingBox$ = function $$DvtChartBar$$$$$getBoundingBox$$() {
  var $x$$266$$ = window.Math.min(this.$_x2$, this.$_x1$), $y$$230$$ = window.Math.min(this.$_endCoord$, this.$_baselineCoord$), $w$$70$$ = window.Math.abs(this.$_x2$ - this.$_x1$), $h$$68$$ = window.Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
  return this.$_bHoriz$ ? new D.$DvtRectangle$$($y$$230$$, $x$$266$$, $h$$68$$, $w$$70$$) : new D.$DvtRectangle$$($x$$266$$, $y$$230$$, $w$$70$$, $h$$68$$)
};
D.$DvtChartBar$$.prototype.$getDimensionsSelf$ = function $$DvtChartBar$$$$$getDimensionsSelf$$($targetCoordinateSpace$$30$$) {
  return(0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$getBoundingBox$(), $targetCoordinateSpace$$30$$)
};
D.$DvtChartLineMarker$$ = function $$DvtChartLineMarker$$$($context$$598$$, $type$$194$$, $x$$264$$, $y$$228$$, $size$$27$$) {
  this.Init($context$$598$$, $type$$194$$, D.$JSCompiler_alias_NULL$$, $x$$264$$, $y$$228$$, $size$$27$$, $size$$27$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineMarker$$, D.$DvtMarker$$, "DvtChartLineMarker");
D.$DvtChartLineMarker$_SELECTED_FILL$$ = new D.$DvtSolidFill$$("#FFFFFF");
D.$DvtChartLineMarker$_SELECTED_STROKE$$ = new D.$DvtSolidStroke$$("#5A5A5A", 1, 1.5);
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$6$$) {
  this.$_dataColor$ = $dataColor$$6$$;
  this.$_hoverStroke$ = new D.$DvtSolidStroke$$($dataColor$$6$$, 1, 1.5)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$setStroke$(this.$_hoverStroke$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$setStroke$(this.$isSelected$() ? D.$DvtChartLineMarker$_SELECTED_STROKE$$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$26$$) {
  this.$IsSelected$ != $selected$$26$$ && (this.$IsSelected$ = $selected$$26$$, this.$isSelected$() ? (this.$setFill$(D.$DvtChartLineMarker$_SELECTED_FILL$$), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$DvtChartLineMarker$_SELECTED_STROKE$$)) : ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$JSCompiler_alias_NULL$$)))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartPolarBar$$ = function $$DvtChartPolarBar$$$($context$$600$$, $axisCoord$$1$$, $baselineCoord$$8$$, $endCoord$$10$$, $x1$$30$$, $x2$$26$$, $availSpace$$71$$) {
  this.Init($context$$600$$);
  this.$_axisCoord$ = $axisCoord$$1$$;
  this.$_availSpace$ = $availSpace$$71$$.clone();
  this.$_bbox$ = D.$JSCompiler_alias_NULL$$;
  this.$_setBarCoords$($baselineCoord$$8$$, $endCoord$$10$$, $x1$$30$$, $x2$$26$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartPolarBar$$, D.$DvtGraphSelectablePath$$, "DvtChartPolarBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartPolarBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$44$$, $stroke$$75$$, $dataColor$$8$$, $innerColor$$7$$, $outerColor$$7$$) {
  this.$setFill$($fill$$44$$);
  this.$setStroke$($stroke$$75$$);
  this.$setDataColor$($dataColor$$8$$, $innerColor$$7$$, $outerColor$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$35$$) {
  this.$_setBarCoords$($params$$35$$[0], $params$$35$$[1], $params$$35$$[2], $params$$35$$[3])
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$68_nodePlayable$$4$$) {
  var $endState$$6$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
  $duration$$68_nodePlayable$$4$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$68_nodePlayable$$4$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$68_nodePlayable$$4$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$6$$);
  return $duration$$68_nodePlayable$$4$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$69_nodePlayable$$5$$) {
  var $endState$$7$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$69_nodePlayable$$5$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$69_nodePlayable$$5$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$69_nodePlayable$$5$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$7$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$69_nodePlayable$$5$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$69_nodePlayable$$5$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$70_nodePlayable$$6$$) {
  this.$setAlpha$(0);
  var $endState$$8$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
  $duration$$70_nodePlayable$$6$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$70_nodePlayable$$6$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$70_nodePlayable$$6$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$8$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$70_nodePlayable$$6$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$70_nodePlayable$$6$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$9$$, $endCoord$$11$$, $x1$$31$$, $x2$$27$$) {
  var $inner1_maxY$$14$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$9$$, $x1$$31$$, this.$_availSpace$), $inner2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$9$$, $x2$$27$$, this.$_availSpace$), $outer1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$11$$, $x1$$31$$, this.$_availSpace$), $outer2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$11$$, $x2$$27$$, this.$_availSpace$), $cmds$$24_minX$$17$$ = window.DvtPathUtils.moveTo($inner1_maxY$$14$$.x, 
  $inner1_maxY$$14$$.y) + window.DvtPathUtils.arcTo($baselineCoord$$9$$, $baselineCoord$$9$$, $x2$$27$$ - $x1$$31$$, 1, $inner2$$.x, $inner2$$.y) + window.DvtPathUtils.lineTo($outer2$$.x, $outer2$$.y) + window.DvtPathUtils.arcTo($endCoord$$11$$, $endCoord$$11$$, $x2$$27$$ - $x1$$31$$, 0, $outer1$$.x, $outer1$$.y) + window.DvtPathUtils.lineTo($inner1_maxY$$14$$.x, $inner1_maxY$$14$$.y) + window.DvtPathUtils.closePath();
  this.$setCmds$($cmds$$24_minX$$17$$);
  var $cmds$$24_minX$$17$$ = window.Math.min($inner1_maxY$$14$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $maxX$$14$$ = window.Math.max($inner1_maxY$$14$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $minY$$17$$ = window.Math.min($inner1_maxY$$14$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y), $inner1_maxY$$14$$ = window.Math.max($inner1_maxY$$14$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y);
  this.$_bbox$ = new D.$DvtRectangle$$($cmds$$24_minX$$17$$, $minY$$17$$, $maxX$$14$$ - $cmds$$24_minX$$17$$, $inner1_maxY$$14$$ - $minY$$17$$);
  this.$_baselineCoord$ = $baselineCoord$$9$$;
  this.$_endCoord$ = $endCoord$$11$$;
  this.$_x1$ = $x1$$31$$;
  this.$_x2$ = $x2$$27$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = (0,D.$JSCompiler_get$$)("$_bbox$");
D.$DvtFunnelSlice$$ = function $$DvtFunnelSlice$$$($chart$$4$$, $seriesIndex$$2$$, $numDrawnSeries$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$18$$) {
  this.Init($chart$$4$$, $seriesIndex$$2$$, $numDrawnSeries$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$18$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelSlice$$, D.$DvtPath$$, "DvtFunnelSlice");
D.$DvtFunnelSlice$$.prototype.Init = function $$DvtFunnelSlice$$$$Init$($chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$, $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$, $barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$, $backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$, 
$funnelHeight$$1_shapeForSelection$$inline_5990$$, $startPercent$$1$$, $valuePercent$$1$$, $fillPercent$$1$$, $gap$$19$$) {
  D.$DvtFunnelSlice$$.$superclass$.Init.call(this, $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$.$_context$);
  this.$_chart$ = $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$;
  this.$_seriesIndex$ = $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$;
  this.$_numDrawnSeries$ = $barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$;
  this.$_funnelWidth$ = $backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$;
  this.$_funnelHeight$ = $funnelHeight$$1_shapeForSelection$$inline_5990$$;
  this.$_startPercent$ = $startPercent$$1$$;
  this.$_valuePercent$ = $valuePercent$$1$$;
  this.$_fillPercent$ = $fillPercent$$1$$;
  this.$_gap$ = $gap$$19$$;
  $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$_dataColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
  this.$_backgroundColor$ = $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$.$getOptions$().styleDefaults.backgroundColor;
  this.$_backgroundColor$ || (this.$_backgroundColor$ = D.$DvtFunnelSlice$_BACKGROUND_COLOR$$);
  this.$setCmds$($JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.slice);
  $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.bar && (this.$_bar$ = new D.$DvtPath$$(this.$_context$, $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  $backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$ = $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.sliceBounds;
  $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$);
  $barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
  $backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$, D.$JSCompiler_alias_TRUE$$);
  this.$_bar$ ? (this.$setFill$($backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$), this.$_bar$.$setFill$($chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$)) : this.$setFill$($chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$);
  this.$setSolidStroke$($barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$ != D.$JSCompiler_alias_NULL$$ ? $barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$ : "#FFFFFF");
  this.$OriginalStroke$ = this.$getStroke$();
  this.$_chart$.$isSelectionSupported$() && ($chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$(this.$_dataColor$), $barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$ = 
  D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $funnelHeight$$1_shapeForSelection$$inline_5990$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $funnelHeight$$1_shapeForSelection$$inline_5990$$.$setHoverStroke$(new D.$DvtSolidStroke$$($chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$, 1, 2)), $funnelHeight$$1_shapeForSelection$$inline_5990$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$, 
  1, 1.5), new D.$DvtSolidStroke$$($backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$, 1, 4.5)), $funnelHeight$$1_shapeForSelection$$inline_5990$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$, 1, 1.5), new D.$DvtSolidStroke$$($chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$, 
  1, 4.5)), this.setCursor("pointer"));
  a: {
    $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$ = $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.sliceBounds;
    $barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$ = $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.barBounds;
    if($JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$)) {
      if($JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$ = new D.$DvtOutputText$$(this.$_context$, $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$, 0, 0), D.$DvtTextUtils$$.$fitText$($JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$, $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$.$h$, $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$.$w$, 
      this, 3)) {
        $backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$ = $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.$measureDimensions$();
        $barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0) != D.$JSCompiler_alias_NULL$$ ? "#0000000" : (0,D.$JSCompiler_StaticMethods_containsPoint$$)($barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$, $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$.x, 
        $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$.y + ($chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$.$h$ - $backgroundFill$$inline_5986_funnelWidth$$1_outerColor$$inline_5989_sliceBounds$$inline_5983_textDim$$inline_5997$$.$w$) / 2) ? D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_dataColor$) : D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_backgroundColor$);
        $barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$ = [new D.$DvtCSSStyle$$("color: " + $barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$ + ";"), this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle, new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)];
        $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($barBounds$$inline_5994_innerColor$$inline_5988_labelColor$$inline_5998_labelStyleArray$$inline_5999_numDrawnSeries$$1_sliceBorder$$inline_5985$$));
        $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $chart$$5_hoverColor$$inline_5987_sliceBounds$$inline_5993_sliceFill$$inline_5984$$));
        $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.$alignCenter$();
        $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$.$alignMiddle$();
        break a
      }
    }
    $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$ = D.$JSCompiler_alias_VOID$$
  }
  this.$_label$ = $JSCompiler_inline_result$$424_cmds$$22_label$$inline_5996_labelString$$inline_5995_seriesIndex$$3$$;
  this.$_label$ != D.$JSCompiler_alias_NULL$$ && (this.$_label$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$addChild$(this.$_label$))
};
D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ = D.$DvtMath$$.$degreesToRads$(31);
D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ = D.$DvtMath$$.$degreesToRads$(29);
D.$DvtFunnelSlice$_FUNNEL_RATIO$$ = 6 / 22;
D.$DvtFunnelSlice$_BACKGROUND_COLOR$$ = "#EDEDED";
D.$JSCompiler_StaticMethods__getPath$$ = function $$JSCompiler_StaticMethods__getPath$$$($JSCompiler_StaticMethods__getPath$self_alpha$$40$$) {
  var $is3D_rx$$25$$ = "on" == $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $isBiDi$$6$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_context$), $gapCount_ry$$21$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_chart$), $ar$$23_offset$$28$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_numDrawnSeries$ + 
  1) * $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_gap$;
  if($is3D_rx$$25$$) {
    var $is3D_rx$$25$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - $gapCount_ry$$21$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$21$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$), $ratio$$15$$ = 0.12 * ($JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelHeight$), 
    $delta$$14_pathCommands$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_startPercent$), $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_valuePercent$), $c1$$2_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelHeight$ + $gapCount_ry$$21$$, 
    $c2$$2$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelHeight$ - $gapCount_ry$$21$$, $arcDir1$$ = 1, $arcDir2$$ = 0;
    $isBiDi$$6$$ ? ($ar$$23_offset$$28$$ = [$is3D_rx$$25$$ * window.Math.sin($delta$$14_pathCommands$$) + $ar$$23_offset$$28$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$21$$ * window.Math.cos($delta$$14_pathCommands$$), $is3D_rx$$25$$ * window.Math.sin($barCommands_gamma$$) + $ar$$23_offset$$28$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$21$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$25$$ * window.Math.sin($barCommands_gamma$$) + $ar$$23_offset$$28$$, $c2$$2$$ + $gapCount_ry$$21$$ * window.Math.cos($barCommands_gamma$$), 
    $is3D_rx$$25$$ * window.Math.sin($delta$$14_pathCommands$$) + $ar$$23_offset$$28$$, $c2$$2$$ + $gapCount_ry$$21$$ * window.Math.cos($delta$$14_pathCommands$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$23_offset$$28$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - $ar$$23_offset$$28$$ - $is3D_rx$$25$$ * window.Math.sin($delta$$14_pathCommands$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$21$$ * window.Math.cos($delta$$14_pathCommands$$), $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - 
    $ar$$23_offset$$28$$ - $is3D_rx$$25$$ * window.Math.sin($barCommands_gamma$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$21$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - $ar$$23_offset$$28$$ - $is3D_rx$$25$$ * window.Math.sin($barCommands_gamma$$), $c2$$2$$ + $gapCount_ry$$21$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - $ar$$23_offset$$28$$ - $is3D_rx$$25$$ * window.Math.sin($delta$$14_pathCommands$$), 
    $c2$$2$$ + $gapCount_ry$$21$$ * window.Math.cos($delta$$14_pathCommands$$)];
    $delta$$14_pathCommands$$ = window.DvtPathUtils.moveTo($ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[1]);
    $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$;
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($ratio$$15$$ * ($ar$$23_offset$$28$$[1] - $ar$$23_offset$$28$$[7]) / 2, ($ar$$23_offset$$28$$[1] - $ar$$23_offset$$28$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$23_offset$$28$$[6], $ar$$23_offset$$28$$[7]);
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($ratio$$15$$ * ($ar$$23_offset$$28$$[1] - $ar$$23_offset$$28$$[7]) / 2, ($ar$$23_offset$$28$$[1] - $ar$$23_offset$$28$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[1]);
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$25$$, $gapCount_ry$$21$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$23_offset$$28$$[2], $ar$$23_offset$$28$$[3]);
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($ratio$$15$$ * ($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]) / 2, ($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]) / 2, window.Math.PI, $arcDir2$$, $ar$$23_offset$$28$$[4], $ar$$23_offset$$28$$[5]);
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$25$$, $gapCount_ry$$21$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$23_offset$$28$$[6], $ar$$23_offset$$28$$[7]);
    $c1$$2_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[2]), $ar$$23_offset$$28$$[5], window.Math.abs($ar$$23_offset$$28$$[0] - $ar$$23_offset$$28$$[2]), window.Math.abs($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]));
    if($JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$) {
      var $barBounds_percent$$4$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_fillPercent$, 1), 0);
      $JSCompiler_StaticMethods__getPath$self_alpha$$40$$ = $isBiDi$$6$$ ? -$barBounds_percent$$4$$ * window.Math.PI : $barBounds_percent$$4$$ * window.Math.PI;
      $barCommands_gamma$$ = window.DvtPathUtils.moveTo($ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[1]);
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$25$$, $gapCount_ry$$21$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$23_offset$$28$$[2], $ar$$23_offset$$28$$[3]);
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($ratio$$15$$ * ($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]) / 2, ($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$40$$, $arcDir2$$, $ar$$23_offset$$28$$[2] + $ratio$$15$$ * ($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$40$$), ($ar$$23_offset$$28$$[5] + $ar$$23_offset$$28$$[3]) / 2 + ($ar$$23_offset$$28$$[3] - 
      $ar$$23_offset$$28$$[5]) / 2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$40$$));
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$25$$, $gapCount_ry$$21$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$23_offset$$28$$[6] + $ratio$$15$$ * ($ar$$23_offset$$28$$[1] - $ar$$23_offset$$28$$[7]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$40$$), ($ar$$23_offset$$28$$[7] + $ar$$23_offset$$28$$[1]) / 2 + ($ar$$23_offset$$28$$[1] - $ar$$23_offset$$28$$[7]) / 2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$40$$));
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($ratio$$15$$ * ($ar$$23_offset$$28$$[1] - $ar$$23_offset$$28$$[7]) / 2, ($ar$$23_offset$$28$$[1] - $ar$$23_offset$$28$$[7]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$40$$, $arcDir1$$, $ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[1]);
      $barBounds_percent$$4$$ = new D.$DvtRectangle$$(window.Math.min($ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[2]), $ar$$23_offset$$28$$[5] + window.Math.abs($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]) * (1 - $barBounds_percent$$4$$), window.Math.abs($ar$$23_offset$$28$$[0] - $ar$$23_offset$$28$$[2]), window.Math.abs($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]) * $barBounds_percent$$4$$)
    }
  }else {
    $is3D_rx$$25$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - $gapCount_ry$$21$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$21$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $delta$$14_pathCommands$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_startPercent$), 
    $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_valuePercent$), $c1$$2_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelHeight$ + $gapCount_ry$$21$$, $c2$$2$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelHeight$ - $gapCount_ry$$21$$, 
    $arcDir1$$ = 1, $arcDir2$$ = 0, $isBiDi$$6$$ ? ($ar$$23_offset$$28$$ = [$is3D_rx$$25$$ * window.Math.sin($delta$$14_pathCommands$$) + $ar$$23_offset$$28$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$21$$ * window.Math.cos($delta$$14_pathCommands$$), $is3D_rx$$25$$ * window.Math.sin($barCommands_gamma$$) + $ar$$23_offset$$28$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$21$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$25$$ * window.Math.sin($barCommands_gamma$$) + $ar$$23_offset$$28$$, $c2$$2$$ + $gapCount_ry$$21$$ * 
    window.Math.cos($barCommands_gamma$$), $is3D_rx$$25$$ * window.Math.sin($delta$$14_pathCommands$$) + $ar$$23_offset$$28$$, $c2$$2$$ + $gapCount_ry$$21$$ * window.Math.cos($delta$$14_pathCommands$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$23_offset$$28$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - $ar$$23_offset$$28$$ - $is3D_rx$$25$$ * window.Math.sin($delta$$14_pathCommands$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$21$$ * window.Math.cos($delta$$14_pathCommands$$), 
    $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - $ar$$23_offset$$28$$ - $is3D_rx$$25$$ * window.Math.sin($barCommands_gamma$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$21$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - $ar$$23_offset$$28$$ - $is3D_rx$$25$$ * window.Math.sin($barCommands_gamma$$), $c2$$2$$ + $gapCount_ry$$21$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_funnelWidth$ - 
    $ar$$23_offset$$28$$ - $is3D_rx$$25$$ * window.Math.sin($delta$$14_pathCommands$$), $c2$$2$$ + $gapCount_ry$$21$$ * window.Math.cos($delta$$14_pathCommands$$)], $delta$$14_pathCommands$$ = window.DvtPathUtils.moveTo($ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[1]), $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$, $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$25$$, $gapCount_ry$$21$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$23_offset$$28$$[2], $ar$$23_offset$$28$$[3]), 
    $delta$$14_pathCommands$$ += window.DvtPathUtils.lineTo($ar$$23_offset$$28$$[4], $ar$$23_offset$$28$$[5]), $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$25$$, $gapCount_ry$$21$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$23_offset$$28$$[6], $ar$$23_offset$$28$$[7]), $delta$$14_pathCommands$$ += window.DvtPathUtils.closePath(), $c1$$2_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[2]), $ar$$23_offset$$28$$[5], 
    window.Math.abs($ar$$23_offset$$28$$[0] - $ar$$23_offset$$28$$[2]), window.Math.abs($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5])), $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ && ($barBounds_percent$$4$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_fillPercent$, 1), 0), $barCommands_gamma$$ = window.DvtPathUtils.moveTo($ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[1]), $barCommands_gamma$$ += 
    window.DvtPathUtils.arcTo($is3D_rx$$25$$, $gapCount_ry$$21$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$23_offset$$28$$[2], $ar$$23_offset$$28$$[3]), $barCommands_gamma$$ += window.DvtPathUtils.lineTo($ar$$23_offset$$28$$[4], $ar$$23_offset$$28$$[3] + $barBounds_percent$$4$$ * ($ar$$23_offset$$28$$[5] - $ar$$23_offset$$28$$[3])), $barCommands_gamma$$ = 0.95 < $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_fillPercent$ ? $barCommands_gamma$$ + window.DvtPathUtils.arcTo($is3D_rx$$25$$, 
    $gapCount_ry$$21$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$23_offset$$28$$[6], $ar$$23_offset$$28$$[1] + $barBounds_percent$$4$$ * ($ar$$23_offset$$28$$[7] - $ar$$23_offset$$28$$[1])) : 0.05 > $JSCompiler_StaticMethods__getPath$self_alpha$$40$$.$_fillPercent$ ? $barCommands_gamma$$ + window.DvtPathUtils.arcTo($is3D_rx$$25$$, $gapCount_ry$$21$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir2$$, $ar$$23_offset$$28$$[6], $ar$$23_offset$$28$$[1] + $barBounds_percent$$4$$ * ($ar$$23_offset$$28$$[7] - 
    $ar$$23_offset$$28$$[1])) : $barCommands_gamma$$ + window.DvtPathUtils.lineTo($ar$$23_offset$$28$$[6], $ar$$23_offset$$28$$[1] + $barBounds_percent$$4$$ * ($ar$$23_offset$$28$$[7] - $ar$$23_offset$$28$$[1])), $barCommands_gamma$$ += window.DvtPathUtils.closePath(), $barBounds_percent$$4$$ = new D.$DvtRectangle$$(window.Math.min($ar$$23_offset$$28$$[0], $ar$$23_offset$$28$$[2]), $ar$$23_offset$$28$$[5] + window.Math.abs($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]) * (1 - $barBounds_percent$$4$$), 
    window.Math.abs($ar$$23_offset$$28$$[0] - $ar$$23_offset$$28$$[2]), window.Math.abs($ar$$23_offset$$28$$[3] - $ar$$23_offset$$28$$[5]) * $barBounds_percent$$4$$))
  }
  return{slice:$delta$$14_pathCommands$$, bar:$barCommands_gamma$$, sliceBounds:$c1$$2_sliceBounds$$, barBounds:$barCommands_gamma$$ ? $barBounds_percent$$4$$ : $c1$$2_sliceBounds$$}
};
D.$JSCompiler_StaticMethods__getSliceLabelPosition$$ = function $$JSCompiler_StaticMethods__getSliceLabelPosition$$$($JSCompiler_StaticMethods__getSliceLabelPosition$self$$, $sliceBounds$$2$$) {
  var $displacement$$1$$ = "on" == $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? 0.12 * ($sliceBounds$$2$$.$h$ * $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelHeight$) / 2 : 0, $rotationMatrix$$1$$ = new D.$DvtMatrix$$;
  D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_context$) ? ($rotationMatrix$$1$$.rotate(window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 - $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2)) : ($rotationMatrix$$1$$.rotate(3 * window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 + $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 
  2));
  return $rotationMatrix$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtFunnelSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$()]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$24_cmds$$23$$) {
  this.$_startPercent$ = $ar$$24_cmds$$23$$[0];
  this.$_valuePercent$ = $ar$$24_cmds$$23$$[1];
  this.$_fillPercent$ = $ar$$24_cmds$$23$$[2];
  this.$setAlpha$($ar$$24_cmds$$23$$[3]);
  $ar$$24_cmds$$23$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$setCmds$($ar$$24_cmds$$23$$.slice);
  $ar$$24_cmds$$23$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($ar$$24_cmds$$23$$.bar);
  this.$_label$ && this.$_label$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $ar$$24_cmds$$23$$.sliceBounds))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$25$$) {
  if(this.$_bar$ != D.$JSCompiler_alias_NULL$$) {
    if(this.$IsSelected$ == $selected$$25$$) {
      return
    }
    this.$IsSelected$ = $selected$$25$$;
    this.$_bar$.$setSelected$($selected$$25$$)
  }else {
    D.$DvtFunnelSlice$$.$superclass$.$setSelected$.call(this, $selected$$25$$)
  }
  var $dims$$61$$ = this.$getDimensions$(), $shapeForSelection$$1$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $w$$69$$ = $dims$$61$$.$w$;
  $selected$$25$$ ? ($shapeForSelection$$1$$.$setScaleX$(($w$$69$$ - 3) / $w$$69$$), $shapeForSelection$$1$$.$setTranslateX$(window.Math.ceil(1.5) + 3 / $w$$69$$ * $dims$$61$$.x)) : ($shapeForSelection$$1$$.$setScaleX$(1), $shapeForSelection$$1$$.$setTranslateX$(0))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$showHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$hideHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$copyShape$ = function $$JSCompiler_prototypeAlias$$$$copyShape$$() {
  return new D.$DvtFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$)
};
D.$DvtPieChart$$ = function $$DvtPieChart$$$($chart$$2$$, $availSpace$$69$$, $callback$$126$$, $callbackObj$$95$$) {
  this.Init($chart$$2$$, $availSpace$$69$$, $callback$$126$$, $callbackObj$$95$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChart$$, D.$DvtContainer$$, "DvtPieChart");
D.$DvtPieChart$$.prototype.Init = function $$DvtPieChart$$$$Init$($chart$$3$$, $availSpace$$70$$) {
  D.$DvtPieChart$$.$superclass$.Init.call(this, $chart$$3$$.$_context$);
  this.$chart$ = $chart$$3$$;
  this.$_options$ = $chart$$3$$.$getOptions$();
  this.$_frame$ = $availSpace$$70$$.clone();
  $chart$$3$$.$pieChart$ = this;
  this.$_labelPosition$ = this.$_options$.styleDefaults.sliceLabelPosition;
  "auto" == this.$_labelPosition$ && (this.$_labelPosition$ = "outside");
  this.$_center$ = new D.$DvtPoint$$($availSpace$$70$$.x + window.Math.floor($availSpace$$70$$.$w$ / 2), $availSpace$$70$$.y + window.Math.floor($availSpace$$70$$.$h$ / 2));
  var $radiusScale$$1_slices$$inline_5916$$ = "outside" == this.$_labelPosition$ ? 0.38 : 0.45;
  this.$_radiusY$ = this.$_radiusX$ = window.Math.floor(window.Math.min($availSpace$$70$$.$w$, $availSpace$$70$$.$h$) * $radiusScale$$1_slices$$inline_5916$$);
  this.$_depth$ = 0;
  this.$_anchorOffset$ = 90;
  (0,D.$JSCompiler_StaticMethods_is3D$$)(this) && (this.$_depth$ = 0.1 * $availSpace$$70$$.$h$, this.$_center$.y -= window.Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= 0.59);
  for(var $radiusScale$$1_slices$$inline_5916$$ = [], $seriesIndex$$inline_5919_slice$$inline_5917$$, $seriesIndices$$inline_5918$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$(this.$chart$), $otherValue$$inline_5920$$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$chart$), $i$$inline_5921$$ = 0;$i$$inline_5921$$ < $seriesIndices$$inline_5918$$.length;$i$$inline_5921$$++) {
    $seriesIndex$$inline_5919_slice$$inline_5917$$ = $seriesIndices$$inline_5918$$[$i$$inline_5921$$], D.$DvtChartStyleUtils$$.$isSeriesRendered$(this.$chart$, $seriesIndex$$inline_5919_slice$$inline_5917$$) && ($seriesIndex$$inline_5919_slice$$inline_5917$$ = new D.$DvtPieSlice$$(this, $seriesIndex$$inline_5919_slice$$inline_5917$$), 0 >= $seriesIndex$$inline_5919_slice$$inline_5917$$.getValue() || $radiusScale$$1_slices$$inline_5916$$.push($seriesIndex$$inline_5919_slice$$inline_5917$$))
  }
  0 < $otherValue$$inline_5920$$ && $radiusScale$$1_slices$$inline_5916$$.push(new D.$DvtPieSlice$$(this));
  D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && $radiusScale$$1_slices$$inline_5916$$.reverse();
  this.$_slices$ = $radiusScale$$1_slices$$inline_5916$$;
  this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtPieChart$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$DvtPieChart$$.prototype.$processEvent$ = function $$DvtPieChart$$$$$processEvent$$($bHide$$inline_5926_event$$545$$) {
  var $objs$$inline_5924_type$$193$$ = $bHide$$inline_5926_event$$545$$.$getType$();
  if($objs$$inline_5924_type$$193$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $objs$$inline_5924_type$$193$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    if($objs$$inline_5924_type$$193$$ = this.$_slices$, $bHide$$inline_5926_event$$545$$ && $objs$$inline_5924_type$$193$$) {
      var $category$$inline_5925$$ = $bHide$$inline_5926_event$$545$$.$_category$;
      $bHide$$inline_5926_event$$545$$ = $bHide$$inline_5926_event$$545$$.$getType$() === D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$;
      for(var $i$$inline_5927$$ = 0;$i$$inline_5927$$ < $objs$$inline_5924_type$$193$$.length;$i$$inline_5927$$++) {
        var $displayables$$inline_9599_obj$$inline_5928$$ = $objs$$inline_5924_type$$193$$[$i$$inline_5927$$];
        if($displayables$$inline_9599_obj$$inline_5928$$ && $displayables$$inline_9599_obj$$inline_5928$$.$getCategories$ && 0 <= D.$DvtArrayUtils$$.$getIndex$($displayables$$inline_9599_obj$$inline_5928$$.$getCategories$(), $category$$inline_5925$$)) {
          var $displayables$$inline_5929$$ = $displayables$$inline_9599_obj$$inline_5928$$.$getDisplayables$($displayables$$inline_5929$$), $displayables$$inline_9599_obj$$inline_5928$$ = $displayables$$inline_5929$$, $bVisible$$inline_9600$$ = !$bHide$$inline_5926_event$$545$$;
          if($displayables$$inline_9599_obj$$inline_5928$$) {
            for(var $i$$inline_9601$$ = 0;$i$$inline_9601$$ < $displayables$$inline_9599_obj$$inline_5928$$.length;$i$$inline_9601$$++) {
              $displayables$$inline_9599_obj$$inline_5928$$[$i$$inline_9601$$].$setVisible$($bVisible$$inline_9600$$)
            }
          }
        }
      }
    }
  }else {
    ("categoryRollOver" == $objs$$inline_5924_type$$193$$ || "categoryRollOut" == $objs$$inline_5924_type$$193$$) && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($bHide$$inline_5926_event$$545$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$highlight$ = function $$DvtPieChart$$$$$highlight$$($categories$$10$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$10$$, this.$_slices$)
};
(0,D.$goog$exportSymbol$$)("DvtPieChart.prototype.highlight", D.$DvtPieChart$$.prototype.$highlight$);
D.$DvtPieChart$$.prototype.$render$ = function $$DvtPieChart$$$$$render$$() {
  var $handler$$inline_5974_shadow$$3$$;
  this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$)), this.$addChild$(this.$_shapesContainer$), !(0,D.$JSCompiler_StaticMethods_is3D$$)(this) && "skyros" == this.$getSkin$() && ($handler$$inline_5974_shadow$$3$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(78, 87, 101, 0.45), 4, 7, 7, 54, 2, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)));
  var $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = this.$_slices$, $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = this.$_anchorOffset$, $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$, $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$, 
  $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ = 0, $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ = $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ ? $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$.length : 0;
  360 < $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ && ($anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ -= 360);
  0 > $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ && ($anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ += 360);
  var $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ = $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ = 0;
  0 < $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ && ($accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ = $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$[0].$_pieChart$.$getTotalValue$());
  for($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$ < $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$;$JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$++) {
    $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$ = $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$[$JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$], window.value = $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$.getValue(), $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ = 
    0 == $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ ? 0 : 100 * (window.Math.abs(window.value) / $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$), $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ *= 3.6, $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ -= 
    $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$, 0 > $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ && ($anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ += 360), $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$.$setAngleStart$($anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$), 
    $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$.$setAngleExtent$($angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$), $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$.$getAngleStart$()
  }
  for($i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = 0;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ < this.$_slices$.length;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$ = this.$_slices$[$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$];
    $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_bFillerSlice$ ? "color" : D.$DvtChartStyleUtils$$.$getSeriesEffect$($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_chart$);
    $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$getFillColor$();
    $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$getFillPattern$();
    $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$ = $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = D.$JSCompiler_alias_VOID$$;
    if("pattern" == $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ || $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ != D.$JSCompiler_alias_NULL$$) {
      $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = new D.$DvtPatternFill$$($accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$, $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$)
    }else {
      if("gradient" == $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$) {
        var $arRatios$$inline_5952_skin$$inline_5947$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_pieChart$.$getSkin$(), $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ = "skyros" == $arRatios$$inline_5952_skin$$inline_5947$$ ? 297 : 270, $arBounds$$inline_5953_style$$inline_5949$$ = !(0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_pieChart$) ? 
        "2D" : "3D", $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$), $arBounds$$inline_5953_style$$inline_5949$$, $arRatios$$inline_5952_skin$$inline_5947$$), $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ = 
        D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$), $arBounds$$inline_5953_style$$inline_5949$$), $arRatios$$inline_5952_skin$$inline_5947$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($arBounds$$inline_5953_style$$inline_5949$$, $arRatios$$inline_5952_skin$$inline_5947$$), $arBounds$$inline_5953_style$$inline_5949$$ = [window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_pieChart$.$getCenter$().x - 
        $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_radiusX$), window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_pieChart$.$getCenter$().y - $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_radiusY$), window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_radiusX$), 
        window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_radiusY$)], $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = new D.$DvtLinearGradientFill$$($accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$, $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$, 
        $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$, $arRatios$$inline_5952_skin$$inline_5947$$, $arBounds$$inline_5953_style$$inline_5949$$)
      }else {
        $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = new D.$DvtSolidFill$$($angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$), $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$ = new D.$DvtSolidFill$$(D.$DvtColorUtils$$.$getDarker$($angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$, 
        0.6))
      }
    }
    $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_topSurface$ = D.$DvtPieRenderUtils$$.$createTopSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$, $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$);
    if((0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_pieChart$) && (0 < $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_pieChart$.$getDepth$() || $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_radiusX$ != $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$radiusY$)) {
      $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ = ($accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ = "gradient" == $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ || "pattern" == $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$) ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$, D.$DvtPieRenderUtils$$.$SIDE$) : $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$, $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$ = $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$, D.$DvtPieRenderUtils$$.$CRUST$) : $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$, $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_leftSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$, 
      D.$DvtPieRenderUtils$$.$SURFACE_LEFT$, $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$), $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_rightSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$, D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$, 
      $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$), $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.$_crustSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$, D.$DvtPieRenderUtils$$.$SURFACE_CRUST$, $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$)
    }
  }
  $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ = this.$_slices$;
  $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$ = [];
  $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$ = $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ ? $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$.length : 0;
  for(var $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = -1, $accumAngleThreshold$$inline_5971_selectedIds$$inline_5976_sliceSpanBeforeNoon$$inline_5967$$, $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = 0;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ < $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$++) {
    if($angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ = $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$[$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$], $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ = 
    $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$.$getAngleStart$(), $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ = $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$.$getAngleExtent$(), 
    $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ = $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ + $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$, 360 < $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ && 
    ($angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ -= 360), 0 > $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ && ($angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ += 360), 
    90 == $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ || 90 > $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ && 90 < $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$) {
      $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$;
      $accumAngleThreshold$$inline_5971_selectedIds$$inline_5976_sliceSpanBeforeNoon$$inline_5967$$ = $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ - 90;
      break
    }
  }
  $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$ = [];
  for($i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ < $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$++) {
    $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$.push($accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$[$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$])
  }
  for($i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = 0;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ < $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$++) {
    $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$.push($accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$[$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$])
  }
  $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ = 0;
  $accumAngleThreshold$$inline_5971_selectedIds$$inline_5976_sliceSpanBeforeNoon$$inline_5967$$ = 180 + $accumAngleThreshold$$inline_5971_selectedIds$$inline_5976_sliceSpanBeforeNoon$$inline_5967$$;
  for($i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = 0;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ < $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$++) {
    if($angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ = $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$[$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$]) {
      if($accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ + $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$.$getAngleExtent$() > $accumAngleThreshold$$inline_5971_selectedIds$$inline_5976_sliceSpanBeforeNoon$$inline_5967$$) {
        $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$ = $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$;
        break
      }
      $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.push($angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$);
      $accumAngle$$inline_5969_dataTotal$$inline_5939_grAngle$$inline_5948_pattern$$inline_5944_slices$$inline_5958_useGradientFill$$inline_5954$$ += $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$.$getAngleExtent$()
    }
  }
  for($i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = $crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$ - 1;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ >= $anchorOffset$$inline_5932_angle$$inline_5935_arColors$$inline_5950_lastSliceIndexToProcess$$inline_5970_rotateIdx$$inline_5963_topFill$$inline_5945$$;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$--) {
    ($angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ = $angleStart$$inline_5964_arAlphas$$inline_5951_arc$$inline_5936_color$$inline_5943_percentage$$inline_5938_rotatedSlices$$inline_5968$$[$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$]) && $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.push($angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$)
  }
  this.$_duringDisplayAnim$ || D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$(this);
  for($i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = 0;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ < $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$.length;$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$[$i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$].$render$(this.$_duringDisplayAnim$)
  }
  D.$DvtAgent$$.$isPlatformWebkit$() || $handler$$inline_5974_shadow$$3$$ && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shapesContainer$, $handler$$inline_5974_shadow$$3$$);
  if($handler$$inline_5974_shadow$$3$$ = this.$chart$.$getSelectionHandler$()) {
    $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = D.$DvtChartDataUtils$$.$getInitialSelection$(this.$chart$);
    $accumAngleThreshold$$inline_5971_selectedIds$$inline_5976_sliceSpanBeforeNoon$$inline_5967$$ = [];
    for($JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$ < $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$.length;$JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$++) {
      for($crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$ = 0;$crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$ < this.$_slices$.length;$crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$++) {
        ($angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$ = this.$_slices$[$crustFill$$inline_5956_j$$inline_5978_lateralFill$$inline_5946_nSlices$$inline_5961_slice$$inline_5934$$].getId()) && ($i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$[$JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$].id && 
        $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$.getId() == $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$[$JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$].id || $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$.$getSeries$() == 
        $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$[$JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$].series && $angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$.$getGroup$() == $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$[$JSCompiler_StaticMethods_preRender$self$$inline_5941_i$$inline_5933_i$$inline_5977_zOrderedSlices$$inline_5959$$].group) && 
        $accumAngleThreshold$$inline_5971_selectedIds$$inline_5976_sliceSpanBeforeNoon$$inline_5967$$.push($angleExtent$$inline_5965_fillType$$inline_5942_nSlices$$inline_5937_peerId$$inline_5979_sideFill$$inline_5955_slice$$inline_5962_sliceSpanEnd$$inline_5966$$)
      }
    }
    D.$DvtPieChartUtils$$.$isOtherSliceSelected$(this.$chart$, $i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$) && ($i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$chart$), $accumAngleThreshold$$inline_5971_selectedIds$$inline_5976_sliceSpanBeforeNoon$$inline_5967$$.push($i$$604_i$$inline_5960_otherPeerId$$inline_5980_selected$$inline_5975_slices$$inline_5931$$));
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$inline_5974_shadow$$3$$, $accumAngleThreshold$$inline_5971_selectedIds$$inline_5976_sliceSpanBeforeNoon$$inline_5967$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$getTotalValue$ = function $$DvtPieChart$$$$$getTotalValue$$() {
  for(var $total$$9$$ = 0, $i$$605$$ = 0;$i$$605$$ < this.$_slices$.length;$i$$605$$++) {
    var $sliceValue$$ = this.$_slices$[$i$$605$$].getValue();
    0 <= $sliceValue$$ && ($total$$9$$ += $sliceValue$$)
  }
  return $total$$9$$
};
D.$JSCompiler_StaticMethods_is3D$$ = function $$JSCompiler_StaticMethods_is3D$$$($JSCompiler_StaticMethods_is3D$self$$) {
  return"on" == $JSCompiler_StaticMethods_is3D$self$$.$_options$.styleDefaults.threeDEffect
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return D.$DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$)
};
D.$JSCompiler_prototypeAlias$$.$_restoreLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$_restoreLabelPosition$$() {
  this.$_duringDisplayAnim$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$getDepth$ = (0,D.$JSCompiler_get$$)("$_depth$");
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$24$$, $oldPie$$) {
  var $anim$$32_sliceAnim_sliceHandler$$ = new D.$DvtDataAnimationHandler$$(this.$_context$, this);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim$$32_sliceAnim_sliceHandler$$, $oldPie$$.$_slices$, this.$_slices$);
  var $anim$$32_sliceAnim_sliceHandler$$ = $anim$$32_sliceAnim_sliceHandler$$.$getAnimation$(), $renderAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($renderAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$32_sliceAnim_sliceHandler$$ = new D.$DvtParallelPlayable$$(this.$_context$, $anim$$32_sliceAnim_sliceHandler$$, $renderAnim$$1$$);
  $anim$$32_sliceAnim_sliceHandler$$.$setOnEnd$(this.$_setAnimationParams$, this);
  $handler$$24$$.add($anim$$32_sliceAnim_sliceHandler$$, 0);
  this.$_setAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[1]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$() {
  this.$removeChildren$();
  this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
  this.$_shapesContainer$ = D.$JSCompiler_alias_NULL$$;
  this.$render$()
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($slice$$4$$) {
  var $par$$3$$ = $slice$$4$$.$_pieChart$.$_shapesContainer$;
  if($par$$3$$) {
    var $parentChildCount$$2$$ = $par$$3$$.$getNumChildren$();
    1 < $parentChildCount$$2$$ - this.$_numFrontObjs$ && ($par$$3$$.removeChild($slice$$4$$.$_topSurface$[0]), $par$$3$$.$addChildAt$($slice$$4$$.$_topSurface$[0], $parentChildCount$$2$$ - this.$_numFrontObjs$ - 1))
  }
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($slice$$5$$) {
  var $len$$22_par$$4$$ = this.$_slices$.length, $counter_newIndex$$8$$ = 0;
  for(window.i = 0;window.i < $len$$22_par$$4$$;window.i++) {
    this.$_slices$[window.i].$isSelected$() && $counter_newIndex$$8$$++
  }
  this.$_numSelectedObjsInFront$ = $counter_newIndex$$8$$;
  if($len$$22_par$$4$$ = $slice$$5$$.$_pieChart$.$_shapesContainer$) {
    $counter_newIndex$$8$$ = $len$$22_par$$4$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $counter_newIndex$$8$$ && ($len$$22_par$$4$$.removeChild($slice$$5$$.$_topSurface$[0]), $len$$22_par$$4$$.$addChildAt$($slice$$5$$.$_topSurface$[0], $counter_newIndex$$8$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$getLabelPosition$ = (0,D.$JSCompiler_get$$)("$_labelPosition$");
D.$JSCompiler_prototypeAlias$$.$getSkin$ = function $$JSCompiler_prototypeAlias$$$$getSkin$$() {
  return this.$_options$.skin
};
D.$DvtPieSlice$$ = function $$DvtPieSlice$$$($pieChart$$, $seriesIndex$$4$$) {
  this.Init($pieChart$$, $seriesIndex$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieSlice$$, D.$DvtObj$$, "DvtPieSlice");
D.$DvtPieSlice$$.prototype.Init = function $$DvtPieSlice$$$$Init$($pieChart$$1$$, $seriesIndex$$5$$) {
  this.$_pieChart$ = $pieChart$$1$$;
  this.$_chart$ = $pieChart$$1$$.$chart$;
  this.$_angleExtent$ = this.$_angleStart$ = 0;
  this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = D.$JSCompiler_alias_NULL$$;
  this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_sliceLabelString$ = this.$_sliceLabelPosition$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = D.$JSCompiler_alias_NULL$$;
  this.$_selecting$ = this.$_selected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
  this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
  var $dataItem$$4_options$$170$$ = this.$_chart$.$getOptions$();
  $seriesIndex$$5$$ != D.$JSCompiler_alias_NULL$$ ? ($dataItem$$4_options$$170$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$5$$, 0), this.$_value$ = D.$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$5$$, 0), this.$_explode$ = D.$DvtPieChartUtils$$.$getSliceExplode$(this.$_chart$, $seriesIndex$$5$$), this.$_fillColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$5$$), this.$_fillPattern$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, 
  $seriesIndex$$5$$, 0), this.$_strokeColor$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$5$$), this.$_customLabel$ = $dataItem$$4_options$$170$$.label, this.$_seriesLabel$ = D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$5$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getDatatip$(D.$JSCompiler_alias_NULL$$, this.$_chart$, $seriesIndex$$5$$, 0), this.$_action$ = $dataItem$$4_options$$170$$.action, this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($dataItem$$4_options$$170$$._id), 
  this.$_id$ = D.$DvtPieChartUtils$$.$getSliceId$(this.$_chart$, $seriesIndex$$5$$)) : (this.$_value$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $dataItem$$4_options$$170$$.styleDefaults.otherColor, this.$_fillPattern$ = D.$JSCompiler_alias_NULL$$, this.$_strokeColor$ = $dataItem$$4_options$$170$$.styleDefaults.borderColor, this.$_customLabel$ = D.$JSCompiler_alias_NULL$$, this.$_seriesLabel$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_chart$.$Bundle$, 
  "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$), this.$_action$ = D.$JSCompiler_alias_NULL$$, this.$_showPopupBehaviors$ = D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$_chart$))
};
D.$DvtPieSlice$$.prototype.$render$ = function $$DvtPieSlice$$$$$render$$($duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$) {
  var $explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$ = this.$_topSurface$, $leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$ = this.$_leftSurface$, $oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$ = this.$_rightSurface$, $crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$ = this.$_crustSurface$, $angleStart$$inline_6014$$ = this.$_angleStart$, $angleExtent$$inline_6015$$ = this.$_angleExtent$, $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$ = 
  [];
  $leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$ && ($oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$ && $crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$) && (270 >= $angleStart$$inline_6014$$ && 270 < $angleStart$$inline_6014$$ + $angleExtent$$inline_6015$$ ? ($feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$), $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$), 
  $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$)) : 270 < $angleStart$$inline_6014$$ || 90 >= $angleStart$$inline_6014$$ + $angleExtent$$inline_6015$$ ? ($feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$), $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$), 
  $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$)) : ($feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$), $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$), $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$)));
  $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.push($explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$);
  $leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$ = $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$.length;
  for($explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$ = 0;$explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$ < $leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$;$explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$++) {
    $oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$ = $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$[$explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$];
    window.shapeCount = $oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$.length;
    for($crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$ = 0;$crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$ < window.shapeCount;$crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$++) {
      this.$_pieChart$.$_shapesContainer$.$addChild$($oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$[$crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$]), $oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$[$crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$].$render$ && $oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$[$crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$].$render$()
    }
  }
  this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), D.$DvtPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), "outside" == this.$_pieChart$.$getLabelPosition$() && ($duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_hasFeeler$ && ($duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$ = 
  (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerStart$, this.$_outsideFeelerMid$), $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$), this.$_feelerRad$ = $duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$, this.$_feelerHoriz$ = $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$)));
  0 != this.$_explode$ ? ($duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$ = (360 - (this.$_angleStart$ + this.$_angleExtent$ / 2)) * D.$DvtMath$$.$RADS_PER_DEGREE$, $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)(this.$_pieChart$) ? 0.59 : 1, $explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$ = this.$_explode$ * this.$_pieChart$.$_radiusX$ * 
  (0.5 / 0.45 - 1), this.$_explodeOffsetX$ = window.Math.cos($duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$) * $explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$, this.$_explodeOffsetY$ = window.Math.sin($duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$) * $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$ * 
  $explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$, D.$DvtAgent$$.$isPlatformWebkit$() && (this.$_explodeOffsetX$ = window.Math.round(this.$_explodeOffsetX$), this.$_explodeOffsetY$ = window.Math.round(this.$_explodeOffsetY$))) : this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_topSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_topSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_rightSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_rightSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_leftSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_leftSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_crustSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_crustSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_hasFeeler$ && ($duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$ = this.$_outsideFeelerStart$.x, $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$ = this.$_outsideFeelerStart$.y, $explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$ = $duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$ + this.$_explodeOffsetX$, 
  $leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$ = $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$ + this.$_explodeOffsetY$, this.$_feelerRad$.$setX1$($explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$), this.$_feelerRad$.$setY1$($leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$), $oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$ = this.$_outsideFeelerMid$.x, $crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$ = 
  this.$_outsideFeelerMid$.y, 0 < $oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$ - $duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$ != 0 < $oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$ - $explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$ ? (this.$_feelerRad$.$setX2$($explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$), this.$_feelerHoriz$.$setX1$($explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$)) : 
  (this.$_feelerRad$.$setX2$($oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$), this.$_feelerHoriz$.$setX1$($oldMidX$$inline_6030_rightSurface$$inline_6012_shapeArray$$)), 0 < $crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$ - $feelerHoriz$$inline_6020_oldStartY$$inline_6027_sortedSurfaces$$inline_6016_tilt$$inline_6024$$ != 0 < $crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$ - $leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$ ? (this.$_feelerRad$.$setY2$($leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$), 
  this.$_feelerHoriz$.$setY1$($leftSurface$$inline_6011_len$$23_newStartY$$inline_6029$$)) : (this.$_feelerRad$.$setY2$($crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$), this.$_feelerHoriz$.$setY1$($crustSurface$$inline_6013_j$$78_oldMidY$$inline_6031$$)));
  this.$_sliceLabel$ && !this.$_hasFeeler$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_sliceLabel$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  if(this.$_action$) {
    $duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$ = this.$getDisplayables$();
    for($explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$ = 0;$explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$ < $duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$.length;$explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$++) {
      $duringDisplayAnim_feelerRad$$inline_6019_oldStartX$$inline_6026_radian$$inline_6023_sliceDisplayables$$[$explodeOffset$$inline_6025_i$$609_newStartX$$inline_6028_topSurface$$inline_6010$$].setCursor("pointer")
    }
  }
};
D.$JSCompiler_StaticMethods__feelerFromPts$$ = function $$JSCompiler_StaticMethods__feelerFromPts$$$($JSCompiler_StaticMethods__feelerFromPts$self$$, $feeler_pt1$$, $color$$70_pt2_stroke$$76$$) {
  $feeler_pt1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$_context$, $feeler_pt1$$.x, $feeler_pt1$$.y, $color$$70_pt2_stroke$$76$$.x, $color$$70_pt2_stroke$$76$$.y);
  $color$$70_pt2_stroke$$76$$ = $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor;
  $color$$70_pt2_stroke$$76$$ = new D.$DvtSolidStroke$$($color$$70_pt2_stroke$$76$$);
  $feeler_pt1$$.$setStroke$($color$$70_pt2_stroke$$76$$);
  $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$addChild$($feeler_pt1$$);
  return $feeler_pt1$$
};
D.$DvtPieSlice$_translateShapes$$ = function $$DvtPieSlice$_translateShapes$$$($shapes$$10$$, $tx$$29$$, $ty$$29$$) {
  if($shapes$$10$$) {
    for(var $len$$24$$ = $shapes$$10$$.length, $i$$610$$ = 0;$i$$610$$ < $len$$24$$;$i$$610$$++) {
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($shapes$$10$$[$i$$610$$], $tx$$29$$, $ty$$29$$)
    }
  }
};
D.$DvtPieSlice$$.prototype.$getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$DvtPieSlice$$.prototype.$setAngleExtent$ = (0,D.$JSCompiler_set$$)("$_angleExtent$");
D.$DvtPieSlice$$.prototype.$getAngleStart$ = (0,D.$JSCompiler_get$$)("$_angleStart$");
D.$DvtPieSlice$$.prototype.$setAngleStart$ = (0,D.$JSCompiler_set$$)("$_angleStart$");
D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$ = function $$JSCompiler_StaticMethods_setNoOutsideFeeler$$$($JSCompiler_StaticMethods_setNoOutsideFeeler$self$$) {
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerStart$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerMid$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerEnd$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_getLabelAndFeeler$$ = function $$JSCompiler_StaticMethods_getLabelAndFeeler$$$($JSCompiler_StaticMethods_getLabelAndFeeler$self$$) {
  var $ar$$25$$ = [];
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$ && $ar$$25$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$ && $ar$$25$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$ && $ar$$25$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$);
  return $ar$$25$$
};
D.$DvtPieSlice$$.prototype.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$DvtPieSlice$$.prototype.getValue = (0,D.$JSCompiler_get$$)("$_value$");
D.$DvtPieSlice$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtPieSlice$_shapeIsSelectable$$ = function $$DvtPieSlice$_shapeIsSelectable$$$($shape$$79$$) {
  return $shape$$79$$ instanceof D.$DvtGraphSelectableArc$$ || $shape$$79$$ instanceof D.$DvtGraphSelectablePolygon$$ || $shape$$79$$ instanceof D.$DvtGraphSelectablePath$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$268$$, $y$$231$$) {
  for(var $c$$30_sin$$ = this.$_pieChart$.$getCenter$(), $cos$$ = ($x$$268$$ - $c$$30_sin$$.x) / this.$_radiusX$, $c$$30_sin$$ = ($y$$231$$ - $c$$30_sin$$.y) / this.$_radiusY$, $angle$$43_containsAngle$$ = -window.Math.atan2($c$$30_sin$$, $cos$$) * (180 / window.Math.PI);$angle$$43_containsAngle$$ < this.$_angleStart$;) {
    $angle$$43_containsAngle$$ += 360
  }
  for(;360 <= $angle$$43_containsAngle$$ - this.$_angleStart$;) {
    $angle$$43_containsAngle$$ -= 360
  }
  $angle$$43_containsAngle$$ = $angle$$43_containsAngle$$ <= this.$_angleStart$ + this.$_angleExtent$;
  return 1 >= window.Math.pow($cos$$, 2) + window.Math.pow($c$$30_sin$$, 2) && $angle$$43_containsAngle$$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$36$$) {
  this.$_value$ = $params$$36$$[0];
  this.$_radiusX$ = $params$$36$$[1];
  this.$_radiusY$ = $params$$36$$[2];
  this.$_explode$ = $params$$36$$[3]
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$27$$, $oldSlice$$) {
  var $startState$$2$$ = $oldSlice$$.$GetAnimationParams$(), $endState$$9$$ = this.$GetAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($startState$$2$$, $endState$$9$$)) {
    var $anim$$33$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $endState$$9$$);
    $handler$$27$$.add($anim$$33$$, 0);
    this.$SetAnimationParams$($startState$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$28$$) {
  var $anim$$34$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$34$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
  $handler$$28$$.add($anim$$34$$, 0);
  this.$SetAnimationParams$([0, 0, 0, 0])
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$29$$, $container$$118$$) {
  var $anim$$35_newSlices$$ = $container$$118$$.$_slices$, $oldSlices_prevId$$ = this.$_pieChart$.$_slices$, $i$$611_prevIndex$$1$$ = D.$DvtArrayUtils$$.$getIndex$($oldSlices_prevId$$, this) - 1;
  if(0 <= $i$$611_prevIndex$$1$$) {
    $oldSlices_prevId$$ = $oldSlices_prevId$$[$i$$611_prevIndex$$1$$].getId();
    for($i$$611_prevIndex$$1$$ = 0;$i$$611_prevIndex$$1$$ < $anim$$35_newSlices$$.length;$i$$611_prevIndex$$1$$++) {
      if($anim$$35_newSlices$$[$i$$611_prevIndex$$1$$].getId().$equals$($oldSlices_prevId$$)) {
        $anim$$35_newSlices$$.splice($i$$611_prevIndex$$1$$ + 1, 0, this);
        break
      }
    }
  }else {
    $anim$$35_newSlices$$.splice(0, 0, this)
  }
  this.$_pieChart$ = $container$$118$$;
  $anim$$35_newSlices$$ = new D.$DvtCustomAnimation$$($container$$118$$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$35_newSlices$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, [0, 0, 0, 0]);
  $anim$$35_newSlices$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
  $handler$$29$$.add($anim$$35_newSlices$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedSlice$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedSlice$$() {
  var $slices$$3$$ = this.$_pieChart$.$_slices$, $index$$125$$ = D.$DvtArrayUtils$$.$getIndex$($slices$$3$$, this);
  0 <= $index$$125$$ && $slices$$3$$.splice($index$$125$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  var $ret$$104$$ = [];
  this.$_topSurface$ && ($ret$$104$$ = $ret$$104$$.concat(this.$_topSurface$));
  this.$_leftSurface$ && ($ret$$104$$ = $ret$$104$$.concat(this.$_leftSurface$));
  this.$_rightSurface$ && ($ret$$104$$ = $ret$$104$$.concat(this.$_rightSurface$));
  this.$_crustSurface$ && ($ret$$104$$ = $ret$$104$$.concat(this.$_crustSurface$));
  this.$_sliceLabel$ && $ret$$104$$.push(this.$_sliceLabel$);
  this.$_feelerRad$ && $ret$$104$$.push(this.$_feelerRad$);
  this.$_feelerHoriz$ && $ret$$104$$.push(this.$_feelerHoriz$);
  return $ret$$104$$
};
D.$JSCompiler_StaticMethods_getPhysicalShape$$ = function $$JSCompiler_StaticMethods_getPhysicalShape$$$($JSCompiler_StaticMethods_getPhysicalShape$self$$, $obj$$327$$) {
  $obj$$327$$.$setDataColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$));
  $obj$$327$$.setCursor("pointer");
  return $obj$$327$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$5$$) {
  (this.$_selected$ = $bSelected$$5$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  var $shapeArr$$ = this.$getDisplayables$();
  for(window.i = 0;window.i < $shapeArr$$.length;window.i++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$[window.i]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$[window.i]).$setSelected$($bSelected$$5$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pieChart$.$bringToFrontOfSelection$(this);
  var $shapeArr$$1$$ = this.$getDisplayables$();
  for(window.i = 0;window.i < $shapeArr$$1$$.length;window.i++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$1$$[window.i]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$1$$[window.i]).$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_FALSE$$;
  this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  var $shapeArr$$2$$ = this.$getDisplayables$();
  for(window.i = 0;window.i < $shapeArr$$2$$.length;window.i++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$2$$[window.i]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$2$$[window.i]).$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$106$$) {
  return $target$$106$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getFillColor$()
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[this.getId().$getSeries$()]
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$546$$) {
  if($event$$546$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $event$$546$$.keyCode && $event$$546$$.ctrlKey) {
    return this
  }
  var $slices$$4$$ = this.$_pieChart$.$_slices$, $idx$$32$$ = $slices$$4$$.indexOf(this), $next$$6$$ = D.$JSCompiler_alias_NULL$$;
  39 == $event$$546$$.keyCode ? $next$$6$$ = $idx$$32$$ < $slices$$4$$.length - 1 ? $slices$$4$$[$idx$$32$$ + 1] : $slices$$4$$[0] : 37 == $event$$546$$.keyCode && ($next$$6$$ = 0 == $idx$$32$$ ? $slices$$4$$[$slices$$4$$.length - 1] : $slices$$4$$[$idx$$32$$ - 1]);
  return $next$$6$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  var $displayables$$22$$ = this.$getDisplayables$();
  return $displayables$$22$$[0] ? $displayables$$22$$[0].$getDimensions$() : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getSeriesLabel$ = (0,D.$JSCompiler_get$$)("$_seriesLabel$");
D.$JSCompiler_prototypeAlias$$.$getFillColor$ = (0,D.$JSCompiler_get$$)("$_fillColor$");
D.$JSCompiler_prototypeAlias$$.$getFillPattern$ = (0,D.$JSCompiler_get$$)("$_fillPattern$");
D.$JSCompiler_prototypeAlias$$.$getStrokeColor$ = (0,D.$JSCompiler_get$$)("$_strokeColor$");
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtAnimOnDisplay$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDisplay$$, D.$DvtObj$$, "DvtAnimOnDisplay");
D.$DvtAnimOnDisplay$$.$createAnimation$ = function $$DvtAnimOnDisplay$$$$createAnimation$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$, $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$, $anim$$inline_6088_duration$$75_handler$$inline_6081$$) {
  $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$ = [];
  if(D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$)) {
    D.$DvtAnimOnDisplay$$.$_animBarLineArea$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$, $anim$$inline_6088_duration$$75_handler$$inline_6081$$, $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$) || D.$DvtChartTypeUtils$$.$isFunnel$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$)) {
      D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$, $anim$$inline_6088_duration$$75_handler$$inline_6081$$, $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isPie$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$) && $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$pieChart$) {
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$ = $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$pieChart$;
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_duringDisplayAnim$ = D.$JSCompiler_alias_TRUE$$;
        $anim$$inline_6088_duration$$75_handler$$inline_6081$$ = new D.$DvtDataAnimationHandler$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_context$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$);
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$ = [];
        for(var $fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$ = 0;$fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$ < $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_slices$.length;$fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$++) {
          $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$ = $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.concat((0,D.$JSCompiler_StaticMethods_getLabelAndFeeler$$)($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_slices$[$fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$]))
        }
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$ = new D.$DvtAnimFadeIn$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_context$, $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$getAnimationDuration$());
        $anim$$inline_6088_duration$$75_handler$$inline_6081$$.add($ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$, 0);
        $fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$ = $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$getTotalValue$();
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$ = new D.$DvtPieSlice$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$);
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$_value$ = $fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$;
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$_bFillerSlice$ = D.$JSCompiler_alias_TRUE$$;
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$_fillColor$ = "rgba(255,255,255,0)";
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$_strokeColor$ = "rgba(255,255,255,0)";
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$_tooltip$ = D.$JSCompiler_alias_NULL$$;
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$_id$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_slices$.push($ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$);
        $fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_context$, $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$getAnimationDuration$());
        (0,D.$JSCompiler_StaticMethods_addProp$$)($fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$.$_animator$, "typeNumberArray", $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$, $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$GetAnimationParams$, $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$SetAnimationParams$, 
        [0, 0, 0]);
        $fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$.$setOnEnd$($ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$_removeDeletedSlice$, $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$);
        $anim$$inline_6088_duration$$75_handler$$inline_6081$$.add($fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$, 0);
        for($fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$ = 0;$fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$ < $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_slices$.length - 1;$fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$++) {
          $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_slices$[$fillerAnim$$inline_6086_i$$inline_6083_value$$inline_9636$$].$animateInsert$($anim$$inline_6088_duration$$75_handler$$inline_6081$$)
        }
        $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_context$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$getAnimationDuration$());
        (0,D.$JSCompiler_StaticMethods_addProp$$)($ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_getAnimationParams$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_setAnimationParams$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_getAnimationParams$());
        $anim$$inline_6088_duration$$75_handler$$inline_6081$$.add($ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$, 0);
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_setAnimationParams$();
        $anim$$inline_6088_duration$$75_handler$$inline_6081$$ = $anim$$inline_6088_duration$$75_handler$$inline_6081$$.$getAnimation$();
        $anim$$inline_6088_duration$$75_handler$$inline_6081$$.$setOnEnd$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_restoreLabelPosition$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$);
        $anim$$inline_6088_duration$$75_handler$$inline_6081$$.play();
        return D.$JSCompiler_alias_NULL$$
      }
    }
  }
  return 0 < $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$.length ? new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_6080_chart$$161$$.$_context$, $ar$$inline_6082_arPlayables$$4_labelAnim$$inline_6084_renderAnim$$inline_6087_slice$$inline_9637_type$$202$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtAnimOnDisplay$$$$_animBarLineArea$$($chart$$162$$, $duration$$76$$, $arPlayables$$5$$) {
  var $objs$$55$$ = $chart$$162$$.$getObjects$(), $objCount$$ = $objs$$55$$ ? $objs$$55$$.length : 0, $isPolar$$1$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$162$$);
  if($objCount$$) {
    for(var $obj$$329$$, $peer$$15$$, $nodePlayable$$7$$, $i$$652$$ = 0;$i$$652$$ < $objCount$$;$i$$652$$++) {
      $peer$$15$$ = $objs$$55$$[$i$$652$$], $obj$$329$$ = $peer$$15$$.$getDisplayables$()[0], window.seriesType = $peer$$15$$.$getSeriesType$(), $nodePlayable$$7$$ = D.$JSCompiler_alias_NULL$$, $obj$$329$$ instanceof D.$DvtChartBar$$ || $obj$$329$$ instanceof D.$DvtChartPolarBar$$ ? $nodePlayable$$7$$ = $obj$$329$$.$getDisplayAnimation$($duration$$76$$) : $obj$$329$$ instanceof D.$DvtPolygonalShape$$ ? $isPolar$$1$$ ? $nodePlayable$$7$$ = D.$DvtAnimOnDisplay$$.$_getPolarLineAreaPlayable$($chart$$162$$, 
      $obj$$329$$, $duration$$76$$) : "line" == window.seriesType ? $nodePlayable$$7$$ = D.$DvtAnimOnDisplay$$.$_getLinePlayable$($chart$$162$$, $obj$$329$$, $duration$$76$$) : "area" == window.seriesType && ($nodePlayable$$7$$ = D.$DvtAnimOnDisplay$$.$_getAreaPlayable$($chart$$162$$, $obj$$329$$, $duration$$76$$)) : "on" == $peer$$15$$.$getSeriesItem$().markerDisplayed && ($nodePlayable$$7$$ = new D.$DvtAnimFadeIn$$($chart$$162$$.$_context$, $obj$$329$$, $duration$$76$$ - 0.8, 0.8)), $nodePlayable$$7$$ && 
      $arPlayables$$5$$.push($nodePlayable$$7$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtAnimOnDisplay$$$$_animBubbleScatterFunnel$$($chart$$163$$, $duration$$77$$, $arPlayables$$6$$) {
  var $objs$$56$$ = $chart$$163$$.$getObjects$(), $objCount$$1$$ = $objs$$56$$ ? $objs$$56$$.length : 0, $chartType$$2$$ = $chart$$163$$.$getType$();
  if($objCount$$1$$) {
    for(var $obj$$330_peer$$16$$, $nodePlayable$$8$$, $i$$653$$ = 0;$i$$653$$ < $objCount$$1$$;$i$$653$$++) {
      $obj$$330_peer$$16$$ = $objs$$56$$[$i$$653$$], $obj$$330_peer$$16$$ = $obj$$330_peer$$16$$.$getDisplayables$()[0], $obj$$330_peer$$16$$ instanceof D.$DvtMarker$$ ? $nodePlayable$$8$$ = "bubble" === $chartType$$2$$ ? D.$DvtAnimOnDisplay$$.$_getBubblePlayable$($chart$$163$$, $obj$$330_peer$$16$$, $duration$$77$$) : D.$DvtAnimOnDisplay$$.$_getScatterPlayable$($chart$$163$$, $obj$$330_peer$$16$$, $duration$$77$$) : $obj$$330_peer$$16$$ instanceof D.$DvtFunnelSlice$$ && ($nodePlayable$$8$$ = D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$($chart$$163$$, 
      $obj$$330_peer$$16$$, $duration$$77$$)), $nodePlayable$$8$$ && $arPlayables$$6$$.push($nodePlayable$$8$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtAnimOnDisplay$$$$_getAreaPlayable$$($chart$$164_nodePlayable$$9$$, $area$$25$$, $duration$$78$$) {
  var $arPoints$$26$$ = $area$$25$$.$getPoints$(), $endState$$10$$ = $arPoints$$26$$.slice(0), $len$$26$$ = $arPoints$$26$$.length, $isHoriz$$8_j$$88$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$164_nodePlayable$$9$$);
  if(4 >= $len$$26$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $base$$7$$ = $isHoriz$$8_j$$88$$ ? $arPoints$$26$$[$len$$26$$ - 2] : $arPoints$$26$$[$len$$26$$ - 1], $len$$26$$ = $len$$26$$ - 4, $isHoriz$$8_j$$88$$ = $isHoriz$$8_j$$88$$ ? 0 : 1;$isHoriz$$8_j$$88$$ < $len$$26$$;$isHoriz$$8_j$$88$$ += 2) {
    $arPoints$$26$$[$isHoriz$$8_j$$88$$] = $base$$7$$
  }
  $area$$25$$.$setPoints$($arPoints$$26$$);
  $chart$$164_nodePlayable$$9$$ = new D.$DvtCustomAnimation$$($chart$$164_nodePlayable$$9$$.$_context$, $area$$25$$, $duration$$78$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$164_nodePlayable$$9$$.$_animator$, "typeNumberArray", $area$$25$$, $area$$25$$.$getPoints$, $area$$25$$.$setPoints$, $endState$$10$$);
  return $chart$$164_nodePlayable$$9$$
};
D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtAnimOnDisplay$$$$_getFunnelPlayable$$($chart$$165_nodePlayable$$10$$, $slice$$24$$, $duration$$79$$) {
  var $arPoints$$27$$ = $slice$$24$$.$getAnimationParams$(), $endState$$11$$ = $arPoints$$27$$.slice(0);
  $arPoints$$27$$[0] = 0;
  $arPoints$$27$$[2] = 0;
  $slice$$24$$.$setAnimationParams$($arPoints$$27$$);
  $chart$$165_nodePlayable$$10$$ = new D.$DvtCustomAnimation$$($chart$$165_nodePlayable$$10$$.$_context$, $slice$$24$$, $duration$$79$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$165_nodePlayable$$10$$.$_animator$, "typeNumberArray", $slice$$24$$, $slice$$24$$.$getAnimationParams$, $slice$$24$$.$setAnimationParams$, $endState$$11$$);
  return $chart$$165_nodePlayable$$10$$
};
D.$DvtAnimOnDisplay$$.$_getBubblePlayable$ = function $$DvtAnimOnDisplay$$$$_getBubblePlayable$$($chart$$166_context$$612$$, $marker$$15_p3$$4$$, $duration$$80$$) {
  $chart$$166_context$$612$$ = $chart$$166_context$$612$$.$_context$;
  var $endScale_p1$$6$$ = new D.$DvtPoint$$($marker$$15_p3$$4$$.$getScaleX$(), $marker$$15_p3$$4$$.$getScaleY$());
  $marker$$15_p3$$4$$.$setScale$(1, 1);
  var $endScale_p1$$6$$ = new D.$DvtAnimScaleBy$$($chart$$166_context$$612$$, $marker$$15_p3$$4$$, $endScale_p1$$6$$, $duration$$80$$), $p2$$6$$ = new D.$DvtAnimFadeIn$$($chart$$166_context$$612$$, $marker$$15_p3$$4$$, $duration$$80$$), $size$$28$$ = $marker$$15_p3$$4$$.$getSize$(), $matrix$$20$$ = $marker$$15_p3$$4$$.$getMatrix$().clone();
  $matrix$$20$$.translate($size$$28$$ / 2, $size$$28$$ / 2);
  $marker$$15_p3$$4$$.$setMatrix$($matrix$$20$$);
  $marker$$15_p3$$4$$ = new D.$DvtAnimMoveBy$$($chart$$166_context$$612$$, $marker$$15_p3$$4$$, new D.$DvtPoint$$(-$size$$28$$ / 2, -$size$$28$$ / 2), $duration$$80$$);
  return new D.$DvtParallelPlayable$$($chart$$166_context$$612$$, [$endScale_p1$$6$$, $p2$$6$$, $marker$$15_p3$$4$$])
};
D.$DvtAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtAnimOnDisplay$$$$_getLinePlayable$$($chart$$167_nodePlayable$$11$$, $line$$11$$, $duration$$81$$) {
  var $arPoints$$28$$ = $line$$11$$.$getPoints$(), $endState$$12$$ = $arPoints$$28$$.slice(0);
  D.$DvtAnimOnDisplay$$.$_getMeanPoints$($arPoints$$28$$, D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$167_nodePlayable$$11$$));
  $line$$11$$.$setPoints$($arPoints$$28$$);
  $chart$$167_nodePlayable$$11$$ = new D.$DvtCustomAnimation$$($chart$$167_nodePlayable$$11$$.$_context$, $line$$11$$, $duration$$81$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$167_nodePlayable$$11$$.$_animator$, "typeNumberArray", $line$$11$$, $line$$11$$.$getPoints$, $line$$11$$.$setPoints$, $endState$$12$$);
  return $chart$$167_nodePlayable$$11$$
};
D.$DvtAnimOnDisplay$$.$_getPolarLineAreaPlayable$ = function $$DvtAnimOnDisplay$$$$_getPolarLineAreaPlayable$$($chart$$168_nodePlayable$$12$$, $shape$$85$$, $duration$$82$$) {
  var $arPoints$$29$$ = $shape$$85$$.$getPoints$(), $endState$$13$$ = $arPoints$$29$$.slice(0), $space$$6$$ = $chart$$168_nodePlayable$$12$$.$_plotAreaSpace$;
  for(window.j = 0;window.j < $arPoints$$29$$.length;window.j += 2) {
    $arPoints$$29$$[window.j] = $space$$6$$.$w$ / 2, $arPoints$$29$$[window.j + 1] = $space$$6$$.$h$ / 2
  }
  $shape$$85$$.$setPoints$($arPoints$$29$$);
  $chart$$168_nodePlayable$$12$$ = new D.$DvtCustomAnimation$$($chart$$168_nodePlayable$$12$$.$_context$, $shape$$85$$, $duration$$82$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$168_nodePlayable$$12$$.$_animator$, "typeNumberArray", $shape$$85$$, $shape$$85$$.$getPoints$, $shape$$85$$.$setPoints$, $endState$$13$$);
  return $chart$$168_nodePlayable$$12$$
};
D.$DvtAnimOnDisplay$$.$_getScatterPlayable$ = function $$DvtAnimOnDisplay$$$$_getScatterPlayable$$($chart$$169$$, $marker$$16$$, $duration$$83$$) {
  return new D.$DvtAnimPopIn$$($chart$$169$$.$_context$, $marker$$16$$, D.$JSCompiler_alias_TRUE$$, $duration$$83$$)
};
D.$DvtAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtAnimOnDisplay$$$$_getMeanPoints$$($arPoints$$30$$, $isHoriz$$9$$) {
  var $mean$$ = 0, $min$$19$$ = window.Number.MAX_VALUE, $max$$19$$ = window.Number.MIN_VALUE, $len$$27$$ = $arPoints$$30$$.length, $i$$654$$;
  for($i$$654$$ = $isHoriz$$9$$ ? 0 : 1;$i$$654$$ < $len$$27$$;$i$$654$$ += 2) {
    var $v$$4$$ = $arPoints$$30$$[$i$$654$$];
    $v$$4$$ < $min$$19$$ && ($min$$19$$ = $v$$4$$);
    $v$$4$$ > $max$$19$$ && ($max$$19$$ = $v$$4$$);
    $mean$$ += $v$$4$$
  }
  4 < $len$$27$$ ? ($mean$$ = $mean$$ - $min$$19$$ - $max$$19$$, $mean$$ /= ($len$$27$$ - 4) / 2) : $mean$$ /= $len$$27$$ / 2;
  for($i$$654$$ = $isHoriz$$9$$ ? 0 : 1;$i$$654$$ < $len$$27$$;$i$$654$$ += 2) {
    $arPoints$$30$$[$i$$654$$] = $mean$$
  }
};
D.$DvtAnimOnDC$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDC$$, D.$DvtObj$$, "DvtAnimOnDC");
D.$DvtAnimOnDC$$.$createAnimation$ = function $$DvtAnimOnDC$$$$createAnimation$$($handler$$33_oldChart$$2$$, $newChart$$, $arOldList_type$$201$$, $duration$$71$$, $delContainer$$) {
  if(!D.$DvtAnimOnDC$$.$_canAnimate$($handler$$33_oldChart$$2$$, $newChart$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ctx$$1$$ = $newChart$$.$_context$;
  $arOldList_type$$201$$ = [];
  var $arNewList$$ = [];
  "pie" == $newChart$$.$getType$() ? ($arOldList_type$$201$$.push($handler$$33_oldChart$$2$$.$pieChart$), $arNewList$$.push($newChart$$.$pieChart$)) : D.$DvtAnimOnDC$$.$_buildAnimLists$($arOldList_type$$201$$, $handler$$33_oldChart$$2$$, $arNewList$$, $newChart$$, $duration$$71$$);
  var $playable$$37$$;
  $handler$$33_oldChart$$2$$ = new D.$DvtDataAnimationHandler$$($ctx$$1$$, $delContainer$$);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$33_oldChart$$2$$, $arOldList_type$$201$$, $arNewList$$);
  0 < $handler$$33_oldChart$$2$$.$_playables$.length && ($playable$$37$$ = $handler$$33_oldChart$$2$$.$getAnimation$());
  return $playable$$37$$
};
D.$DvtAnimOnDC$$.$_buildAnimLists$ = function $$DvtAnimOnDC$$$$_buildAnimLists$$($arOldList$$1_i$$650$$, $oldChart$$3$$, $arNewList$$1$$, $newChart$$1$$, $duration$$72$$) {
  var $j$$87$$, $ar$$26$$ = $oldChart$$3$$.$peers$, $aOut$$ = $arOldList$$1_i$$650$$, $peer$$12$$, $obj$$328$$, $dch$$, $chartType$$1$$ = $oldChart$$3$$.type;
  for($arOldList$$1_i$$650$$ = 0;2 > $arOldList$$1_i$$650$$;$arOldList$$1_i$$650$$++) {
    for($j$$87$$ = 0;$j$$87$$ < $ar$$26$$.length;$j$$87$$++) {
      $peer$$12$$ = $ar$$26$$[$j$$87$$], $obj$$328$$ = $peer$$12$$.$getDisplayables$()[0], $dch$$ = D.$JSCompiler_alias_NULL$$, $obj$$328$$ instanceof D.$DvtFunnelSlice$$ ? $dch$$ = new D.$DvtDCFunnelSlice$$($peer$$12$$, $duration$$72$$) : $obj$$328$$ instanceof D.$DvtChartBar$$ || $obj$$328$$ instanceof D.$DvtChartPolarBar$$ ? $dch$$ = new D.$DvtDCChart2DBar$$($peer$$12$$, $duration$$72$$) : $obj$$328$$ instanceof D.$DvtPolygonalShape$$ ? $dch$$ = new D.$DvtDCChartLineArea$$($peer$$12$$, $duration$$72$$) : 
      $obj$$328$$ instanceof D.$DvtMarker$$ && ("scatter" === $chartType$$1$$ || "bubble" === $chartType$$1$$ || (1 == $arOldList$$1_i$$650$$ ? "on" == $peer$$12$$.$getSeriesItem$().markerDisplayed : "on" == D.$DvtChartDataUtils$$.$getSeriesItem$($oldChart$$3$$, $peer$$12$$.$getSeriesIndex$()).markerDisplayed)) && ($dch$$ = new D.$DvtDCChartMarker$$($peer$$12$$, $duration$$72$$)), $dch$$ && ($aOut$$.push($dch$$), $dch$$.$_oldChart$ = $oldChart$$3$$)
    }
    $aOut$$ = $arNewList$$1$$;
    $ar$$26$$ = $newChart$$1$$.$getObjects$()
  }
};
D.$DvtAnimOnDC$$.$_canAnimate$ = function $$DvtAnimOnDC$$$$_canAnimate$$($oldChart$$4$$, $newChart$$2$$) {
  var $oldType$$ = $oldChart$$4$$.type, $newType$$ = $newChart$$2$$.$getType$();
  return $oldType$$ !== $newType$$ ? D.$JSCompiler_alias_FALSE$$ : "pie" == $oldChart$$4$$.type && (!$oldChart$$4$$ || !$newChart$$2$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtDCChartAbstract$$ = function $$DvtDCChartAbstract$$$($peer$$13$$, $duration$$73$$) {
  this.Init($peer$$13$$, $duration$$73$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartAbstract$$, D.$DvtObj$$, "DvtDCChartAbstract");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartAbstract$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_animId$");
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$14$$, $duration$$74$$) {
  this.$_peer$ = $peer$$14$$;
  this.$_duration$ = $duration$$74$$;
  this.$_shape$ = $peer$$14$$.$getDisplayables$()[0];
  this.$_animId$ = $peer$$14$$.$getSeries$() + "/" + $peer$$14$$.$getGroup$()
};
D.$DvtDCChart2DBar$$ = function $$DvtDCChart2DBar$$$($peer$$20$$, $duration$$87$$) {
  this.Init($peer$$20$$, $duration$$87$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChart2DBar$$, D.$DvtDCChartAbstract$$, "DvtDCChart2DBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChart2DBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$21$$, $duration$$88$$) {
  D.$DvtDCChart2DBar$$.$superclass$.Init.call(this, $peer$$21$$, $duration$$88$$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bHoriz$ = D.$DvtChartTypeUtils$$.$isHorizontal$($peer$$21$$.$_chart$)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$43$$) {
  var $playable$$38$$ = this.$_shape$.$getInsertAnimation$(this.$_duration$);
  $handler$$43$$.add($playable$$38$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$44$$, $delContainer$$4$$) {
  $delContainer$$4$$.$addChild$(this.$_shape$);
  var $playable$$39$$ = this.$_shape$.$getDeleteAnimation$(this.$_duration$);
  $handler$$44$$.add($playable$$39$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$45$$, $oldDC$$2$$) {
  var $nodePlayable$$19_startState$$7$$ = $oldDC$$2$$.$_getAnimationParams$(), $endState$$18$$ = this.$_getAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($nodePlayable$$19_startState$$7$$, $endState$$18$$)) {
    var $oldChart$$8$$ = this.$_oldChart$, $newChart$$6$$ = this.$_peer$.$_chart$, $newSIdx$$3$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$3$$ = $oldDC$$2$$.$_peer$.$getSeriesIndex$(), $newGIdx$$2$$ = this.$_peer$.$getGroupIndex$(), $oldGIdx$$2$$ = $oldDC$$2$$.$_peer$.$getGroupIndex$();
    "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$6$$) && this.$_makeDirPointer$($nodePlayable$$19_startState$$7$$, $oldChart$$8$$, $oldSIdx$$3$$, $oldGIdx$$2$$, $newChart$$6$$, $newSIdx$$3$$, $newGIdx$$2$$);
    this.$_setAnimationParams$($nodePlayable$$19_startState$$7$$);
    $nodePlayable$$19_startState$$7$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_duration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$19_startState$$7$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endState$$18$$);
    this.$_indicator$ && $nodePlayable$$19_startState$$7$$.$setOnEnd$(this.$_onEndAnimation$, this);
    $handler$$45$$.add($nodePlayable$$19_startState$$7$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return this.$_shape$.$getAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$28$$) {
  this.$_shape$.$setAnimationParams$($ar$$28$$, this.$_indicator$)
};
D.$JSCompiler_prototypeAlias$$.$_makeDirPointer$ = function $$JSCompiler_prototypeAlias$$$$_makeDirPointer$$($bDown$$2_dirptr$$1_startState$$8_uiDirection$$, $oldChart$$9$$, $oldSIdx$$4$$, $oldGIdx$$3$$, $newChart$$7$$, $newSIdx$$4$$, $newGIdx$$3$$) {
  D.$DvtChartTypeUtils$$.$isPolar$($oldChart$$9$$) || ($bDown$$2_dirptr$$1_startState$$8_uiDirection$$ = D.$DvtDCChartUtils$$.$getDirection$($oldChart$$9$$, $oldSIdx$$4$$, $oldGIdx$$3$$, $newChart$$7$$, $newSIdx$$4$$, $newGIdx$$3$$), $bDown$$2_dirptr$$1_startState$$8_uiDirection$$ !== D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ && (window.fc = ($bDown$$2_dirptr$$1_startState$$8_uiDirection$$ = $bDown$$2_dirptr$$1_startState$$8_uiDirection$$ === D.$DvtDCChartUtils$$.$DIR_DOWN$) ? D.$DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$7$$) : 
  D.$DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$7$$), $bDown$$2_dirptr$$1_startState$$8_uiDirection$$ = D.$DvtDCChartUtils$$.$drawDirectionPointer$(this.$_shape$.$_context$, $bDown$$2_dirptr$$1_startState$$8_uiDirection$$, this.$_bHoriz$, window.fc), $newChart$$7$$.$_plotArea$.$addChild$($bDown$$2_dirptr$$1_startState$$8_uiDirection$$), this.$_indicator$ = $bDown$$2_dirptr$$1_startState$$8_uiDirection$$))
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_indicator$.getParent().removeChild(this.$_indicator$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtDCChartLineArea$$ = function $$DvtDCChartLineArea$$$($peer$$18$$, $duration$$85$$) {
  this.Init($peer$$18$$, $duration$$85$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartLineArea$$, D.$DvtDCChartAbstract$$, "DvtDCChartLineArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$40$$, $oldDC$$1$$) {
  var $iPTLen_startState$$6$$ = $oldDC$$1$$.$_getAnimationParams$(), $endState$$17$$ = this.$_getAnimationParams$();
  this.$_finalState$ = D.$JSCompiler_alias_NULL$$;
  if(!D.$DvtArrayUtils$$.$equals$($iPTLen_startState$$6$$, $endState$$17$$)) {
    var $i$$655_oldChart$$6$$ = this.$_oldChart$, $newChart$$4_nodePlayable$$16$$ = this.$_peer$.$_chart$, $arOldGroups_iConsec$$ = D.$DvtChartDataUtils$$.$getGroups$($i$$655_oldChart$$6$$), $arNewGroups_bFinalGroup_pt1x$$ = D.$DvtChartDataUtils$$.$getGroups$($newChart$$4_nodePlayable$$16$$), $oldGroupLen_pt1y$$ = $arOldGroups_iConsec$$.length, $newGroupLen_pt2x_xInc$$ = $arNewGroups_bFinalGroup_pt1x$$.length, $arCompare_arDeletes$$ = D.$DvtDCChartUtils$$.$compareGroups$($arOldGroups_iConsec$$, $arNewGroups_bFinalGroup_pt1x$$), 
    $aptsOld_arUpdates$$ = $arCompare_arDeletes$$[0], $arInserts_n$$34_pt2y$$ = $arCompare_arDeletes$$[1], $arCompare_arDeletes$$ = $arCompare_arDeletes$$[2], $bInsertDelete_ix$$1$$ = 0 < $arInserts_n$$34_pt2y$$.length || 0 < $arCompare_arDeletes$$.length, $arPointType$$ = [], $iPT_yInc$$ = 0, $arOldPt$$ = D.$JSCompiler_alias_NULL$$, $arNewPt$$ = D.$JSCompiler_alias_NULL$$;
    $bInsertDelete_ix$$1$$ && ($arOldPt$$ = [], $arNewPt$$ = []);
    this.$_arDirection$ = this.$_arPointers$ = D.$JSCompiler_alias_NULL$$;
    "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$4_nodePlayable$$16$$) && 0 < $aptsOld_arUpdates$$.length && (this.$_arPointers$ = [], this.$_arDirection$ = []);
    for(var $aptsOld_arUpdates$$ = $oldDC$$1$$.$_getAnimationParams$(), $aptsNew$$ = this.$_getAnimationParams$(), $aptsOldLen$$ = $aptsOld_arUpdates$$.length, $aptsNewLen$$ = $aptsNew$$.length, $newSIdx$$1$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$1$$ = $oldDC$$1$$.$_peer$.$getSeriesIndex$(), $ixOld$$ = 0, $ixNew$$ = 0, $ixOldPts$$ = 0, $ixNewPts$$ = 0;$ixOld$$ < $oldGroupLen_pt1y$$ || $ixNew$$ < $newGroupLen_pt2x_xInc$$;) {
      if($ixOld$$ < $oldGroupLen_pt1y$$ && $ixNew$$ < $newGroupLen_pt2x_xInc$$ && $ixOldPts$$ < $aptsOldLen$$ && $ixNewPts$$ < $aptsNewLen$$) {
        if($arOldGroups_iConsec$$[$ixOld$$] === $arNewGroups_bFinalGroup_pt1x$$[$ixNew$$]) {
          $arPointType$$[$iPT_yInc$$] = D.$DvtDCChartUtils$$.$UPDATE$;
          var $xPos$$3$$ = $aptsOld_arUpdates$$[$ixOldPts$$++], $yPos$$4$$ = $aptsOld_arUpdates$$[$ixOldPts$$++];
          this.$_arPointers$ != D.$JSCompiler_alias_NULL$$ && this.$_makeDirPointer$($xPos$$3$$, $yPos$$4$$, $i$$655_oldChart$$6$$, $oldSIdx$$1$$, $ixOld$$, $newChart$$4_nodePlayable$$16$$, $newSIdx$$1$$, $ixNew$$, $iPT_yInc$$);
          $ixOld$$++;
          $ixNew$$++;
          $iPT_yInc$$++;
          $bInsertDelete_ix$$1$$ && ($arOldPt$$.push($xPos$$3$$), $arOldPt$$.push($yPos$$4$$), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]))
        }else {
          -1 < D.$DvtArrayUtils$$.$getIndex$($arCompare_arDeletes$$, $arOldGroups_iConsec$$[$ixOld$$]) ? ($arPointType$$[$iPT_yInc$$] = D.$DvtDCChartUtils$$.$DELETE$, $arOldPt$$.push($aptsOld_arUpdates$$[$ixOldPts$$++]), $arOldPt$$.push($aptsOld_arUpdates$$[$ixOldPts$$++]), $arNewPt$$.push(0), $arNewPt$$.push(0), $ixOld$$++, this.$_arPointers$ != D.$JSCompiler_alias_NULL$$ && (this.$_arPointers$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$, this.$_arDirection$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$), 
          $iPT_yInc$$++) : -1 < D.$DvtArrayUtils$$.$getIndex$($arInserts_n$$34_pt2y$$, $arNewGroups_bFinalGroup_pt1x$$[$ixNew$$]) ? ($arPointType$$[$iPT_yInc$$] = D.$DvtDCChartUtils$$.$INSERT$, $arOldPt$$.push(0), $arOldPt$$.push(0), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]), $ixNew$$++, this.$_arPointers$ != D.$JSCompiler_alias_NULL$$ && (this.$_arPointers$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$, this.$_arDirection$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$), 
          $iPT_yInc$$++) : ($ixOld$$++, $ixNew$$++)
        }
      }else {
        if($ixOld$$ < $oldGroupLen_pt1y$$ && $ixOldPts$$ < $aptsOldLen$$) {
          for(;$ixOld$$ < $oldGroupLen_pt1y$$ && $ixOldPts$$ < $aptsOldLen$$;) {
            $arPointType$$[$iPT_yInc$$] = D.$DvtDCChartUtils$$.$DELETE$ = 1, $arOldPt$$.push($aptsOld_arUpdates$$[$ixOldPts$$++]), $arOldPt$$.push($aptsOld_arUpdates$$[$ixOldPts$$++]), $arNewPt$$.push(0), $arNewPt$$.push(0), $ixOld$$++, this.$_arPointers$ != D.$JSCompiler_alias_NULL$$ && (this.$_arPointers$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$, this.$_arDirection$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$), $iPT_yInc$$++
          }
        }else {
          for(;$ixNew$$ < $newGroupLen_pt2x_xInc$$ && $ixNewPts$$ < $aptsNewLen$$;) {
            $arPointType$$[$iPT_yInc$$] = D.$DvtDCChartUtils$$.$INSERT$, $arOldPt$$.push(0), $arOldPt$$.push(0), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]), $ixNew$$++, this.$_arPointers$ != D.$JSCompiler_alias_NULL$$ && (this.$_arPointers$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$, this.$_arDirection$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$), $iPT_yInc$$++
          }
        }
        break
      }
    }
    if($bInsertDelete_ix$$1$$) {
      $iPT_yInc$$ = $newGroupLen_pt2x_xInc$$ = $arInserts_n$$34_pt2y$$ = $newGroupLen_pt2x_xInc$$ = $oldGroupLen_pt1y$$ = $arNewGroups_bFinalGroup_pt1x$$ = 0;
      $iPTLen_startState$$6$$ = $arPointType$$.length;
      for($i$$655_oldChart$$6$$ = 0;$i$$655_oldChart$$6$$ < $iPTLen_startState$$6$$;$i$$655_oldChart$$6$$++) {
        if($arPointType$$[$i$$655_oldChart$$6$$] != D.$DvtDCChartUtils$$.$UPDATE$) {
          $arInserts_n$$34_pt2y$$ = $arPointType$$[$i$$655_oldChart$$6$$];
          $arOldGroups_iConsec$$ = 1;
          for($bInsertDelete_ix$$1$$ = $i$$655_oldChart$$6$$ + 1;$bInsertDelete_ix$$1$$ < $iPTLen_startState$$6$$ && $arPointType$$[$bInsertDelete_ix$$1$$] == $arInserts_n$$34_pt2y$$;$bInsertDelete_ix$$1$$++) {
            $arOldGroups_iConsec$$++
          }
          $arNewGroups_bFinalGroup_pt1x$$ = $bInsertDelete_ix$$1$$ === $iPTLen_startState$$6$$;
          if(0 === $i$$655_oldChart$$6$$) {
            if($arInserts_n$$34_pt2y$$ === D.$DvtDCChartUtils$$.$INSERT$) {
              $arInserts_n$$34_pt2y$$ = 2 * ($i$$655_oldChart$$6$$ + $arOldGroups_iConsec$$);
              $arNewGroups_bFinalGroup_pt1x$$ = $arOldPt$$[$arInserts_n$$34_pt2y$$];
              $oldGroupLen_pt1y$$ = $arOldPt$$[$arInserts_n$$34_pt2y$$ + 1];
              for($bInsertDelete_ix$$1$$ = 0;$bInsertDelete_ix$$1$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$1$$++) {
                0 < $bInsertDelete_ix$$1$$ && $i$$655_oldChart$$6$$++, $arInserts_n$$34_pt2y$$ = 2 * $i$$655_oldChart$$6$$, $arOldPt$$[$arInserts_n$$34_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arOldPt$$[$arInserts_n$$34_pt2y$$] = $oldGroupLen_pt1y$$
              }
            }else {
              $arInserts_n$$34_pt2y$$ = 2 * ($i$$655_oldChart$$6$$ + $arOldGroups_iConsec$$);
              $arNewGroups_bFinalGroup_pt1x$$ = $arNewPt$$[$arInserts_n$$34_pt2y$$];
              $oldGroupLen_pt1y$$ = $arNewPt$$[$arInserts_n$$34_pt2y$$ + 1];
              for($bInsertDelete_ix$$1$$ = 0;$bInsertDelete_ix$$1$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$1$$++) {
                0 < $bInsertDelete_ix$$1$$ && $i$$655_oldChart$$6$$++, $arInserts_n$$34_pt2y$$ = 2 * $i$$655_oldChart$$6$$, $arNewPt$$[$arInserts_n$$34_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arNewPt$$[$arInserts_n$$34_pt2y$$] = $oldGroupLen_pt1y$$
              }
            }
          }else {
            if($i$$655_oldChart$$6$$ === $iPTLen_startState$$6$$ - 1 || $arNewGroups_bFinalGroup_pt1x$$) {
              if($arInserts_n$$34_pt2y$$ === D.$DvtDCChartUtils$$.$INSERT$) {
                $arInserts_n$$34_pt2y$$ = 2 * ($i$$655_oldChart$$6$$ - 1), $arNewGroups_bFinalGroup_pt1x$$ = $arOldPt$$[$arInserts_n$$34_pt2y$$], $oldGroupLen_pt1y$$ = $arOldPt$$[$arInserts_n$$34_pt2y$$ + 1], $arInserts_n$$34_pt2y$$ = 2 * $i$$655_oldChart$$6$$, $arOldPt$$[$arInserts_n$$34_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arOldPt$$[$arInserts_n$$34_pt2y$$] = $oldGroupLen_pt1y$$
              }else {
                $arInserts_n$$34_pt2y$$ = 2 * ($i$$655_oldChart$$6$$ - 1);
                $arNewGroups_bFinalGroup_pt1x$$ = $arNewPt$$[$arInserts_n$$34_pt2y$$];
                $oldGroupLen_pt1y$$ = $arNewPt$$[$arInserts_n$$34_pt2y$$ + 1];
                for($bInsertDelete_ix$$1$$ = 0;$bInsertDelete_ix$$1$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$1$$++) {
                  0 < $bInsertDelete_ix$$1$$ && $i$$655_oldChart$$6$$++, $arInserts_n$$34_pt2y$$ = 2 * $i$$655_oldChart$$6$$, $arNewPt$$[$arInserts_n$$34_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arNewPt$$[$arInserts_n$$34_pt2y$$] = $oldGroupLen_pt1y$$
                }
              }
            }else {
              if($arInserts_n$$34_pt2y$$ === D.$DvtDCChartUtils$$.$INSERT$) {
                $bInsertDelete_ix$$1$$ = 2 * ($i$$655_oldChart$$6$$ - 1);
                $arNewGroups_bFinalGroup_pt1x$$ = $arOldPt$$[$bInsertDelete_ix$$1$$++];
                $oldGroupLen_pt1y$$ = $arOldPt$$[$bInsertDelete_ix$$1$$];
                $bInsertDelete_ix$$1$$ = 2 * ($i$$655_oldChart$$6$$ + $arOldGroups_iConsec$$);
                $newGroupLen_pt2x_xInc$$ = $arOldPt$$[$bInsertDelete_ix$$1$$++];
                $arInserts_n$$34_pt2y$$ = $arOldPt$$[$bInsertDelete_ix$$1$$];
                $newGroupLen_pt2x_xInc$$ = ($newGroupLen_pt2x_xInc$$ - $arNewGroups_bFinalGroup_pt1x$$) / ($arOldGroups_iConsec$$ + 1);
                $iPT_yInc$$ = ($arInserts_n$$34_pt2y$$ - $oldGroupLen_pt1y$$) / ($arOldGroups_iConsec$$ + 1);
                for($bInsertDelete_ix$$1$$ = 0;$bInsertDelete_ix$$1$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$1$$++) {
                  0 < $bInsertDelete_ix$$1$$ && $i$$655_oldChart$$6$$++, $arInserts_n$$34_pt2y$$ = 2 * $i$$655_oldChart$$6$$, $arNewGroups_bFinalGroup_pt1x$$ += $newGroupLen_pt2x_xInc$$, $oldGroupLen_pt1y$$ += $iPT_yInc$$, $arOldPt$$[$arInserts_n$$34_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arOldPt$$[$arInserts_n$$34_pt2y$$] = $oldGroupLen_pt1y$$
                }
              }else {
                $bInsertDelete_ix$$1$$ = 2 * ($i$$655_oldChart$$6$$ - 1);
                $arNewGroups_bFinalGroup_pt1x$$ = $arNewPt$$[$bInsertDelete_ix$$1$$++];
                $oldGroupLen_pt1y$$ = $arNewPt$$[$bInsertDelete_ix$$1$$];
                $bInsertDelete_ix$$1$$ = 2 * ($i$$655_oldChart$$6$$ + $arOldGroups_iConsec$$);
                $newGroupLen_pt2x_xInc$$ = $arNewPt$$[$bInsertDelete_ix$$1$$++];
                $arInserts_n$$34_pt2y$$ = $arNewPt$$[$bInsertDelete_ix$$1$$];
                $newGroupLen_pt2x_xInc$$ = ($newGroupLen_pt2x_xInc$$ - $arNewGroups_bFinalGroup_pt1x$$) / ($arOldGroups_iConsec$$ + 1);
                $iPT_yInc$$ = ($arInserts_n$$34_pt2y$$ - $oldGroupLen_pt1y$$) / ($arOldGroups_iConsec$$ + 1);
                for($bInsertDelete_ix$$1$$ = 0;$bInsertDelete_ix$$1$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$1$$++) {
                  0 < $bInsertDelete_ix$$1$$ && $i$$655_oldChart$$6$$++, $arInserts_n$$34_pt2y$$ = 2 * $i$$655_oldChart$$6$$, $arNewGroups_bFinalGroup_pt1x$$ += $newGroupLen_pt2x_xInc$$, $oldGroupLen_pt1y$$ += $iPT_yInc$$, $arNewPt$$[$arInserts_n$$34_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arNewPt$$[$arInserts_n$$34_pt2y$$] = $oldGroupLen_pt1y$$
                }
              }
            }
          }
        }
      }
      $newChart$$4_nodePlayable$$16$$.$getType$();
      "area" === this.$_peer$.$getSeriesType$() && ($ixOldPts$$ = $aptsOld_arUpdates$$.length - 4, $ixNewPts$$ = $aptsNew$$.length - 4, $arOldPt$$.push($aptsOld_arUpdates$$[$ixOldPts$$]), $arOldPt$$.push($aptsOld_arUpdates$$[++$ixOldPts$$]), $arOldPt$$.push($aptsOld_arUpdates$$[++$ixOldPts$$]), $arOldPt$$.push($aptsOld_arUpdates$$[++$ixOldPts$$]), $arNewPt$$.push($aptsNew$$[$ixNewPts$$]), $arNewPt$$.push($aptsNew$$[++$ixNewPts$$]), $arNewPt$$.push($aptsNew$$[++$ixNewPts$$]), $arNewPt$$.push($aptsNew$$[++$ixNewPts$$]));
      $iPTLen_startState$$6$$ = $arOldPt$$;
      0 < $arCompare_arDeletes$$.length && (this.$_finalState$ = $endState$$17$$);
      $endState$$17$$ = $arNewPt$$
    }
    this.$_setAnimationParams$($iPTLen_startState$$6$$);
    $newChart$$4_nodePlayable$$16$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_duration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($newChart$$4_nodePlayable$$16$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endState$$17$$);
    $newChart$$4_nodePlayable$$16$$.$setOnEnd$(this.$_onEndAnimation$, this);
    $handler$$40$$.add($newChart$$4_nodePlayable$$16$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_finalState$ && this.$_shape$.$setPoints$(this.$_finalState$);
  if(this.$_arPointers$ !== D.$JSCompiler_alias_NULL$$) {
    for(var $arPointers$$ = this.$_arPointers$, $len$$28$$ = $arPointers$$.length, $plot$$1$$ = this.$_peer$.$_chart$.$_plotArea$, $ptr$$, $i$$656$$ = 0;$i$$656$$ < $len$$28$$;$i$$656$$++) {
      ($ptr$$ = $arPointers$$[$i$$656$$]) && $plot$$1$$.removeChild($ptr$$)
    }
    this.$_arDirections$ = this.$_arPointers$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$41$$) {
  var $nodePlayable$$17$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$_context$, this.$_shape$, this.$_duration$);
  $handler$$41$$.add($nodePlayable$$17$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$42$$, $delContainer$$3$$) {
  var $context$$613_nodePlayable$$18$$ = this.$_shape$.$_context$;
  if(this.$_shape$ instanceof D.$DvtPolygon$$ && "area" == this.$_peer$.$getSeriesType$()) {
    var $areaContainer$$ = this.$_peer$.$_chart$.$_areaContainer$;
    this.$_deletedAreas$ = this.$_shape$.getParent().getParent();
    $areaContainer$$.$addChild$(this.$_deletedAreas$);
    $context$$613_nodePlayable$$18$$ = new D.$DvtAnimFadeOut$$($context$$613_nodePlayable$$18$$, this.$_deletedAreas$, this.$_duration$);
    $context$$613_nodePlayable$$18$$.$setOnEnd$(this.$_removeDeletedAreas$, this)
  }else {
    $delContainer$$3$$.$addChild$(this.$_shape$), $context$$613_nodePlayable$$18$$ = new D.$DvtAnimFadeOut$$($context$$613_nodePlayable$$18$$, this.$_shape$, this.$_duration$)
  }
  $handler$$42$$.add($context$$613_nodePlayable$$18$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedAreas$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedAreas$$() {
  this.$_peer$.$_chart$.$_areaContainer$.removeChild(this.$_deletedAreas$)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return this.$_shape$.$getPoints$()
};
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$19$$, $duration$$86$$) {
  D.$DvtDCChartLineArea$$.$superclass$.Init.call(this, $peer$$19$$, $duration$$86$$);
  this.$_animId$ = $peer$$19$$.$getSeries$()
};
D.$JSCompiler_prototypeAlias$$.$_makeDirPointer$ = function $$JSCompiler_prototypeAlias$$$$_makeDirPointer$$($dirptr_xPos$$4$$, $chart$$170_isHoriz$$10_yPos$$5$$, $bDown$$1_oldChart$$7$$, $fc$$9_iDirection_oldSIdx$$2$$, $oldGIdx$$1$$, $newChart$$5$$, $newSIdx$$2$$, $newGIdx$$1$$, $iPT$$1$$) {
  $chart$$170_isHoriz$$10_yPos$$5$$ = this.$_peer$.$_chart$;
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$170_isHoriz$$10_yPos$$5$$) || ($dirptr_xPos$$4$$ = D.$JSCompiler_alias_NULL$$, $chart$$170_isHoriz$$10_yPos$$5$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$170_isHoriz$$10_yPos$$5$$), $fc$$9_iDirection_oldSIdx$$2$$ = D.$DvtDCChartUtils$$.$getDirection$($bDown$$1_oldChart$$7$$, $fc$$9_iDirection_oldSIdx$$2$$, $oldGIdx$$1$$, $newChart$$5$$, $newSIdx$$2$$, $newGIdx$$1$$), $bDown$$1_oldChart$$7$$ = $fc$$9_iDirection_oldSIdx$$2$$ == D.$DvtDCChartUtils$$.$DIR_DOWN$, 
  $fc$$9_iDirection_oldSIdx$$2$$ !== D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ && ($fc$$9_iDirection_oldSIdx$$2$$ = $bDown$$1_oldChart$$7$$ ? D.$DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$5$$) : D.$DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$5$$), $dirptr_xPos$$4$$ = D.$DvtDCChartUtils$$.$drawDirectionPointer$(this.$_shape$.$_context$, $bDown$$1_oldChart$$7$$, $chart$$170_isHoriz$$10_yPos$$5$$, $fc$$9_iDirection_oldSIdx$$2$$), $newChart$$5$$.$_plotArea$.$addChild$($dirptr_xPos$$4$$)), 
  this.$_arPointers$[$iPT$$1$$] = $dirptr_xPos$$4$$, this.$_arDirection$[$iPT$$1$$] = $bDown$$1_oldChart$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$27$$) {
  this.$_shape$.$setPoints$($ar$$27$$);
  if(this.$_arPointers$ !== D.$JSCompiler_alias_NULL$$) {
    var $chart$$171_ptr$$1$$, $offset$$31$$;
    $chart$$171_ptr$$1$$ = this.$_peer$.$_chart$;
    for(var $isHoriz$$11$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$171_ptr$$1$$), $isRTL$$27$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$171_ptr$$1$$.$_context$), $plotArea$$2$$ = $chart$$171_ptr$$1$$.$_plotArea$, $len$$29$$ = this.$_arPointers$.length, $i$$657$$ = 0;$i$$657$$ < $len$$29$$;$i$$657$$++) {
      if($chart$$171_ptr$$1$$ = this.$_arPointers$[$i$$657$$]) {
        $plotArea$$2$$.removeChild($chart$$171_ptr$$1$$), $offset$$31$$ = this.$_arDirection$[$i$$657$$] ? 12 : -12, $chart$$171_ptr$$1$$.$setTranslateX$($ar$$27$$[2 * $i$$657$$] + ($isHoriz$$11$$ ? $offset$$31$$ : 0) * ($isRTL$$27$$ ? 1 : -1)), $chart$$171_ptr$$1$$.$setTranslateY$($ar$$27$$[2 * $i$$657$$ + 1] + ($isHoriz$$11$$ ? 0 : $offset$$31$$)), $plotArea$$2$$.$addChild$($chart$$171_ptr$$1$$)
      }
    }
  }
};
D.$DvtDCChartMarker$$ = function $$DvtDCChartMarker$$$($peer$$22$$, $duration$$89$$) {
  this.Init($peer$$22$$, $duration$$89$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartMarker$$, D.$DvtDCChartAbstract$$, "DvtDCChartMarker");
D.$DvtDCChartMarker$$.prototype.$animateUpdate$ = function $$DvtDCChartMarker$$$$$animateUpdate$$($handler$$46$$, $oldDC$$3$$) {
  var $oldObj$$2$$ = $oldDC$$3$$.$_shape$, $newObj$$2$$ = this.$_shape$, $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$ = $newObj$$2$$.$getMatrix$(), $alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$ = new D.$DvtMatrix$$;
  $alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$.translate(-$newObj$$2$$.$getX$(), -$newObj$$2$$.$getY$());
  $alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$.scale($oldObj$$2$$.getWidth() / $newObj$$2$$.getWidth(), $oldObj$$2$$.getHeight() / $newObj$$2$$.getHeight());
  $alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$.translate($oldObj$$2$$.$getX$(), $oldObj$$2$$.$getY$());
  if(!$bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$.$equals$($alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$)) {
    var $nodePlayable$$20$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_duration$);
    this.$_shape$.$setMatrix$($alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$20$$.$_animator$, "typeMatrix", this.$_shape$, this.$_shape$.$getMatrix$, this.$_shape$.$setMatrix$, $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$);
    $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$ = D.$JSCompiler_alias_FALSE$$;
    if($oldDC$$3$$) {
      var $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$ = $oldDC$$3$$.$_peer$.$getSeriesIndex$(), $alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$ = $oldDC$$3$$.$_peer$.$getGroupIndex$(), $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$ = this.$_peer$.$getSeriesIndex$(), $newGIdx$$inline_6096$$ = this.$_peer$.$getGroupIndex$(), $oldData$$inline_6097$$ = $oldDC$$3$$.$_oldChart$.$getOptions$(), $newData$$inline_6098$$ = this.$_peer$.$_chart$.$getOptions$(), $oldY$$inline_6099$$ = 
      $oldData$$inline_6097$$.series[$bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$].items[$alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$].y, $oldZ$$inline_6100$$ = $oldData$$inline_6097$$.series[$bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$].items[$alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$].z, $newY$$inline_6101$$ = $newData$$inline_6098$$.series[$fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$].items[$newGIdx$$inline_6096$$].y, $newZ$$inline_6102$$ = 
      $newData$$inline_6098$$.series[$fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$].items[$newGIdx$$inline_6096$$].z, $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$ = $newData$$inline_6098$$.series[$fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$].items[$newGIdx$$inline_6096$$].x !== $oldData$$inline_6097$$.series[$bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$].items[$alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$].x || $newY$$inline_6101$$ !== 
      $oldY$$inline_6099$$ || $newZ$$inline_6102$$ !== $oldZ$$inline_6100$$
    }
    $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$ && "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$(this.$_peer$.$_chart$) && ($bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$ = $oldDC$$3$$.$_shape$, "scatter" === $oldDC$$3$$.$_peer$.$_chart$.$getType$() ? ($alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$ = "#FFFF2B", $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$ = 0.7) : ($alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$ = "#D5D500", 
    $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$ = 0.4), $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$ = new D.$DvtSolidFill$$($alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$, $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$), $alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$ = this.$_shape$.$getAlpha$(), this.$_shape$.$setAlpha$(0), $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$.$setFill$($fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$), 
    this.$_peer$.$_chart$.$_plotArea$.$addChild$($bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$), $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$ = new D.$DvtMatrix$$, $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$.translate(-$oldObj$$2$$.$getX$(), -$oldObj$$2$$.$getY$()), $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$.scale($newObj$$2$$.getWidth() / $oldObj$$2$$.getWidth(), $newObj$$2$$.getHeight() / $oldObj$$2$$.getHeight()), $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$.translate($newObj$$2$$.$getX$(), 
    $newObj$$2$$.$getY$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$20$$.$_animator$, "typeNumber", this.$_shape$, this.$_shape$.$getAlpha$, this.$_shape$.$setAlpha$, $alpha$$42_fc$$10_oldGIdx$$inline_6094_startMatrix$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$20$$.$_animator$, "typeMatrix", $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$, $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$.$getMatrix$, $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$.$setMatrix$, 
    $fa$$4_fill$$48_newSIdx$$inline_6095_overlayEndMatrix$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$20$$.$_animator$, "typeNumber", $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$, $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$.$getAlpha$, $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$.$setAlpha$, 0), this.$_overlay$ = $bRet$$inline_6092_endMatrix_oldSIdx$$inline_6093_overlay$$14$$, $nodePlayable$$20$$.$setOnEnd$(this.$_onEndAnimation$, 
    this));
    $handler$$46$$.add($nodePlayable$$20$$, 0)
  }
};
D.$DvtDCChartMarker$$.prototype.$animateInsert$ = function $$DvtDCChartMarker$$$$$animateInsert$$($handler$$47$$) {
  var $nodePlayable$$21$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$_context$, this.$_shape$, this.$_duration$);
  $handler$$47$$.add($nodePlayable$$21$$, 0)
};
D.$DvtDCChartMarker$$.prototype.$animateDelete$ = function $$DvtDCChartMarker$$$$$animateDelete$$($handler$$48$$, $delContainer$$5$$) {
  $delContainer$$5$$.$addChild$(this.$_shape$);
  var $nodePlayable$$22$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$_context$, this.$_shape$, this.$_duration$);
  $handler$$48$$.add($nodePlayable$$22$$, 0)
};
D.$DvtDCChartMarker$$.prototype.$_onEndAnimation$ = function $$DvtDCChartMarker$$$$$_onEndAnimation$$() {
  this.$_overlay$ && (this.$_peer$.$_chart$.$_plotArea$.removeChild(this.$_overlay$), this.$_overlay$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtDCChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartUtils$$, D.$DvtObj$$, "DvtDCChartUtils");
D.$DvtDCChartUtils$$.$DIR_UP$ = 0;
D.$DvtDCChartUtils$$.$DIR_DOWN$ = 1;
D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ = 2;
D.$DvtDCChartUtils$$.$UPDATE$ = 0;
D.$DvtDCChartUtils$$.$DELETE$ = 1;
D.$DvtDCChartUtils$$.$INSERT$ = 2;
D.$DvtDCChartUtils$$.$getDirection$ = function $$DvtDCChartUtils$$$$getDirection$$($oldChart$$5_oldValue$$2$$, $oldSIdx$$, $oldGIdx$$, $newChart$$3_newValue$$1$$, $newSIdx$$, $newGIdx$$) {
  $oldChart$$5_oldValue$$2$$ = D.$DvtChartDataUtils$$.getValue($oldChart$$5_oldValue$$2$$, $oldSIdx$$, $oldGIdx$$);
  $newChart$$3_newValue$$1$$ = D.$DvtChartDataUtils$$.getValue($newChart$$3_newValue$$1$$, $newSIdx$$, $newGIdx$$);
  return $newChart$$3_newValue$$1$$ > $oldChart$$5_oldValue$$2$$ ? D.$DvtDCChartUtils$$.$DIR_UP$ : $newChart$$3_newValue$$1$$ < $oldChart$$5_oldValue$$2$$ ? D.$DvtDCChartUtils$$.$DIR_DOWN$ : D.$DvtDCChartUtils$$.$DIR_NOCHANGE$
};
D.$DvtDCChartUtils$$.$compareGroups$ = function $$DvtDCChartUtils$$$$compareGroups$$($oldList$$2$$, $newList$$2$$) {
  var $updates$$ = [], $inserts$$ = [], $deletes$$ = [], $i$$651_oldLen$$ = $oldList$$2$$.length;
  $newList$$2$$ = $newList$$2$$.slice(0);
  if($oldList$$2$$) {
    for(var $oldIndex$$4$$ = 0;$oldIndex$$4$$ < $i$$651_oldLen$$;$oldIndex$$4$$++) {
      for(var $oldItem$$1$$ = $oldList$$2$$[$oldIndex$$4$$], $bMatchFound$$1$$ = D.$JSCompiler_alias_FALSE$$, $newIndex$$9$$ = 0;$newIndex$$9$$ < $newList$$2$$.length;$newIndex$$9$$++) {
        if($oldItem$$1$$ === $newList$$2$$[$newIndex$$9$$]) {
          $newList$$2$$.splice($newIndex$$9$$, 1);
          $inserts$$ = $inserts$$.concat($newList$$2$$.splice(0, $newIndex$$9$$));
          $bMatchFound$$1$$ = D.$JSCompiler_alias_TRUE$$;
          $updates$$.push($oldItem$$1$$);
          break
        }
      }
      $bMatchFound$$1$$ || $deletes$$.push($oldItem$$1$$)
    }
  }
  for($i$$651_oldLen$$ = 0;$i$$651_oldLen$$ < $newList$$2$$.length;$i$$651_oldLen$$++) {
    $newList$$2$$[$i$$651_oldLen$$] && $inserts$$.push($newList$$2$$[$i$$651_oldLen$$])
  }
  return[$updates$$, $inserts$$, $deletes$$]
};
D.$DvtDCChartUtils$$.$drawDirectionPointer$ = function $$DvtDCChartUtils$$$$drawDirectionPointer$$($context$$611_ret$$109$$, $bDown_ptrCmds$$, $bHoriz$$5$$, $fc$$8$$) {
  $bDown_ptrCmds$$ = $bHoriz$$5$$ ? (D.$DvtAgent$$.$isRightToLeft$($context$$611_ret$$109$$) ? !$bDown_ptrCmds$$ : $bDown_ptrCmds$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $bDown_ptrCmds$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
  $context$$611_ret$$109$$ = new D.$DvtPath$$($context$$611_ret$$109$$, $bDown_ptrCmds$$);
  $context$$611_ret$$109$$.$setSolidFill$($fc$$8$$);
  return $context$$611_ret$$109$$
};
D.$DvtDCFunnelSlice$$ = function $$DvtDCFunnelSlice$$$($peer$$17$$, $duration$$84$$) {
  this.Init($peer$$17$$, $duration$$84$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCFunnelSlice$$, D.$DvtDCChartAbstract$$, "DvtDCFunnelSlice");
D.$DvtDCFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtDCFunnelSlice$$$$$animateUpdate$$($handler$$37$$, $oldDC$$) {
  var $obj$$331$$ = this.$_shape$, $nodePlayable$$13_startState$$3$$ = $oldDC$$.$_shape$.$getAnimationParams$(), $endState$$14$$ = $obj$$331$$.$getAnimationParams$();
  D.$DvtArrayUtils$$.$equals$($nodePlayable$$13_startState$$3$$, $endState$$14$$) || ($obj$$331$$.$setAnimationParams$($nodePlayable$$13_startState$$3$$), $nodePlayable$$13_startState$$3$$ = new D.$DvtCustomAnimation$$($obj$$331$$.$_context$, this, this.$_duration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$13_startState$$3$$.$_animator$, "typeNumberArray", $obj$$331$$, $obj$$331$$.$getAnimationParams$, $obj$$331$$.$setAnimationParams$, $endState$$14$$), this.$_indicator$ && $nodePlayable$$13_startState$$3$$.$setOnEnd$(this.$_onEndAnimation$, 
  this), $handler$$37$$.add($nodePlayable$$13_startState$$3$$, 0))
};
D.$DvtDCFunnelSlice$$.prototype.$animateInsert$ = function $$DvtDCFunnelSlice$$$$$animateInsert$$($handler$$38$$) {
  var $obj$$332$$ = this.$_shape$, $endState$$15$$ = $obj$$332$$.$getAnimationParams$(), $nodePlayable$$14_startState$$4$$ = $endState$$15$$.slice(0);
  $nodePlayable$$14_startState$$4$$[0] += $nodePlayable$$14_startState$$4$$[1] / 2;
  $nodePlayable$$14_startState$$4$$[1] = 0;
  $nodePlayable$$14_startState$$4$$[3] = 0;
  $obj$$332$$.$setAnimationParams$($nodePlayable$$14_startState$$4$$);
  $nodePlayable$$14_startState$$4$$ = new D.$DvtCustomAnimation$$($obj$$332$$.$_context$, this, this.$_duration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$14_startState$$4$$.$_animator$, "typeNumberArray", $obj$$332$$, $obj$$332$$.$getAnimationParams$, $obj$$332$$.$setAnimationParams$, $endState$$15$$);
  $handler$$38$$.add($nodePlayable$$14_startState$$4$$, 0)
};
D.$DvtDCFunnelSlice$$.prototype.$animateDelete$ = function $$DvtDCFunnelSlice$$$$$animateDelete$$($handler$$39$$, $delContainer$$2$$) {
  var $obj$$333$$ = this.$_shape$;
  $delContainer$$2$$.$addChild$($obj$$333$$);
  var $nodePlayable$$15_startState$$5$$ = $obj$$333$$.$getAnimationParams$(), $endState$$16$$ = $nodePlayable$$15_startState$$5$$.slice(0);
  $endState$$16$$[0] += $nodePlayable$$15_startState$$5$$[1] / 2;
  $endState$$16$$[1] = 0;
  $endState$$16$$[3] = 0;
  $nodePlayable$$15_startState$$5$$ = new D.$DvtCustomAnimation$$($obj$$333$$.$_context$, this, this.$_duration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$15_startState$$5$$.$_animator$, "typeNumberArray", $obj$$333$$, $obj$$333$$.$getAnimationParams$, $obj$$333$$.$setAnimationParams$, $endState$$16$$);
  $handler$$39$$.add($nodePlayable$$15_startState$$5$$, 0)
};
D.$DvtChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtChart", D.$DvtChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChart$$, D.$DvtBaseComponent$$, "DvtChart");
D.$DvtChart$newInstance$$ = function $$DvtChart$newInstance$$$($context$$142$$, $callback$$66$$, $callbackObj$$42$$) {
  return new D.$DvtChartImpl$$($context$$142$$, $callback$$66$$, $callbackObj$$42$$)
};
D.$DvtChart$$.newInstance = D.$DvtChart$newInstance$$;
D.$DvtChart$$.getDefaults = function $$DvtChart$$$getDefaults$($skin$$6$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtChartDefaults$$, $skin$$6$$)
};
D.$DvtChart$$.prototype.Init = function $$DvtChart$$$$Init$($context$$143$$, $callback$$67$$, $callbackObj$$43$$) {
  D.$DvtChart$$.$superclass$.Init.call(this, $context$$143$$, $callback$$67$$, $callbackObj$$43$$);
  this.$Bundle$ = new D.$DvtChartBundle$$;
  this.$Defaults$ = new D.$DvtChartDefaults$$;
  this.$EventManager$ = new D.$DvtChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  D.$DvtAgent$$.$isTouchDevice$() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("chart1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$SetOptions$ = function $$DvtChart$$$$$SetOptions$$($handler$$inline_1681_options$$30$$) {
  $handler$$inline_1681_options$$30$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($handler$$inline_1681_options$$30$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), D.$DvtChartDataUtils$$.$processDataObject$(this), "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) ? ($handler$$inline_1681_options$$30$$ = new D.$DvtChartSeriesRolloverHandler$$(this, this.$EventManager$), this.$EventManager$.$_seriesRolloverHandler$ = 
  $handler$$inline_1681_options$$30$$) : this.$EventManager$.$_seriesRolloverHandler$ = D.$JSCompiler_alias_NULL$$, D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtChart$$.prototype.$render$ = function $$DvtChart$$$$$render$$($options$$31_paSpace$$, $container$$21_width$$38$$, $animationDuration$$6_height$$38$$) {
  var $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this), $oldChart$$ = D.$JSCompiler_alias_NULL$$;
  this.$Options$ && "none" !== $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$ && ($oldChart$$ = {type:this.$getType$(), options:this.$Options$, $peers$:this.$getObjects$().slice(0), $getOptions$:(0,D.$JSCompiler_get$$)("options"), $pieChart$:this.$pieChart$});
  this.$__cleanUp$();
  this.$SetOptions$($options$$31_paSpace$$);
  !(0,window.isNaN)($container$$21_width$$38$$) && !(0,window.isNaN)($animationDuration$$6_height$$38$$) && (this.$Width$ = $container$$21_width$$38$$, this.$Height$ = $animationDuration$$6_height$$38$$);
  D.$DvtAgent$$.$isTouchDevice$() && this.$EventManager$.$setTouchRegionBounds$(new D.$DvtRectangle$$(0, 0, (0,window.parseInt)($container$$21_width$$38$$), (0,window.parseInt)($animationDuration$$6_height$$38$$)));
  $container$$21_width$$38$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($container$$21_width$$38$$);
  D.$DvtChartRenderer$$.$render$(this, $container$$21_width$$38$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$_animation$ && (this.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.stop());
  var $animationOnDisplay$$2$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
  $animationDuration$$6_height$$38$$ = D.$DvtChartStyleUtils$$.$getAnimationDuration$(this);
  var $bounds$$21$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$), $bBlackBoxUpdate$$4$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$ && $options$$31_paSpace$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$, this.$_container$, $container$$21_width$$38$$, $bounds$$21$$, $animationDuration$$6_height$$38$$)) ? $bBlackBoxUpdate$$4$$ = D.$JSCompiler_alias_TRUE$$ : ($options$$31_paSpace$$ = this.$_plotAreaSpace$, this.$_delContainer$ = 
  D.$DvtPlotAreaRenderer$$.$createClippedGroup$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, $options$$31_paSpace$$.$w$, $options$$31_paSpace$$.$h$)), this.$_animation$ = D.$DvtAnimOnDC$$.$createAnimation$($oldChart$$, this, $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$, $animationDuration$$6_height$$38$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.$addChild$(this.$_delContainer$) : 
  this.$_plotArea$.$addChild$(this.$_delContainer$)))) : "none" !== $animationOnDisplay$$2$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, $animationOnDisplay$$2$$, $container$$21_width$$38$$, $bounds$$21$$, $animationDuration$$6_height$$38$$), this.$_animation$ || (this.$_animation$ = D.$DvtAnimOnDisplay$$.$createAnimation$(this, $animationOnDisplay$$2$$, $animationDuration$$6_height$$38$$)));
  this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
  $bBlackBoxUpdate$$4$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$21_width$$38$$;
  (D.$DvtChartTypeUtils$$.$isPie$(this) || D.$DvtChartTypeUtils$$.$isFunnel$(this) || D.$DvtChartTypeUtils$$.$isPolar$(this) ? 0 : "on" === this.$Options$.dataCursor || "auto" === this.$Options$.dataCursor && D.$DvtAgent$$.$isTouchDevice$() && (D.$DvtChartTypeUtils$$.$isLine$(this) || D.$DvtChartTypeUtils$$.$isArea$(this))) ? (this.$DataCursor$ = D.$DvtChartTypeUtils$$.$isHorizontal$(this) ? new D.$DvtDataCursor$$(this.$_context$, D.$JSCompiler_alias_TRUE$$) : new D.$DvtDataCursor$$(this.$_context$, 
  D.$JSCompiler_alias_FALSE$$), $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$ = this.$Options$.dataCursorBehavior, "auto" == $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$ && ($animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$ = D.$DvtChartTypeUtils$$.$isLine$(this) || D.$DvtChartTypeUtils$$.$isArea$(this) ? "smooth" : "snap"), "snap" == $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$ ? this.$DataCursor$.$_behavior$ = 
  "SNAP" : "smooth" == $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$ && (this.$DataCursor$.$_behavior$ = "SMOOTH"), this.$addChild$(this.$DataCursor$), $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$ = new D.$DvtChartDCEH$$(this), this.$EventManager$.$_dataCursorHandler$ = $animationOnDataChange$$2_dataCursorBehavior_handler$$inline_1693$$) : this.$EventManager$.$_dataCursorHandler$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.render = D.$DvtChart$$.prototype.$render$;
D.$DvtChart$$.prototype.$__cleanUp$ = function $$DvtChart$$$$$__cleanUp$$() {
  this.$DataCursor$ && (this.removeChild(this.$DataCursor$), this.$DataCursor$ = D.$JSCompiler_alias_NULL$$);
  var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_1702$$ = this.$EventManager$;
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_1702$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_1702$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_1702$$.$_dataCursorHandler$)
};
D.$DvtChart$$.prototype.$_onAnimationEnd$ = function $$DvtChart$$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.removeChild(this.$_delContainer$) : this.$_plotArea$.removeChild(this.$_delContainer$));
  this.$_delContainer$ = D.$JSCompiler_alias_NULL$$;
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$CreateKeyboardHandler$ = function $$DvtChart$$$$$CreateKeyboardHandler$$($manager$$3$$) {
  return new D.$DvtChartKeyboardHandler$$($manager$$3$$, this)
};
D.$DvtChartConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtChartConstants", D.$DvtChartConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartConstants$$, D.$DvtObj$$, "DvtChartConstants");
D.$DvtChartConstants$$.$BACKGROUND$ = "background";
D.$DvtChartConstants$$.BACKGROUND = D.$DvtChartConstants$$.$BACKGROUND$;
D.$DvtChartConstants$$.$DATA_ITEM$ = "dataItem";
D.$DvtChartConstants$$.DATA_ITEM = D.$DvtChartConstants$$.$DATA_ITEM$;
D.$DvtChartConstants$$.$DATA_ITEM_OTHER$ = "dataItemOther";
D.$DvtChartConstants$$.DATA_ITEM_OTHER = D.$DvtChartConstants$$.$DATA_ITEM_OTHER$;
D.$DvtChartConstants$$.$FOOTNOTE$ = "footnote";
D.$DvtChartConstants$$.FOOTNOTE = D.$DvtChartConstants$$.$FOOTNOTE$;
D.$DvtChartConstants$$.$LEGEND$ = "legend";
D.$DvtChartConstants$$.LEGEND = D.$DvtChartConstants$$.$LEGEND$;
D.$DvtChartConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtChartConstants$$.LEGEND_ITEM = D.$DvtChartConstants$$.$LEGEND_ITEM$;
D.$DvtChartConstants$$.$LEGEND_TITLE$ = "legendTitle";
D.$DvtChartConstants$$.LEGEND_TITLE = D.$DvtChartConstants$$.$LEGEND_TITLE$;
D.$DvtChartConstants$$.$PLOT_AREA$ = "plotArea";
D.$DvtChartConstants$$.PLOT_AREA = D.$DvtChartConstants$$.$PLOT_AREA$;
D.$DvtChartConstants$$.$SERIES$ = "series";
D.$DvtChartConstants$$.SERIES = D.$DvtChartConstants$$.$SERIES$;
D.$DvtChartConstants$$.$SUBTITLE$ = "subtitle";
D.$DvtChartConstants$$.SUBTITLE = D.$DvtChartConstants$$.$SUBTITLE$;
D.$DvtChartConstants$$.$TITLE$ = "title";
D.$DvtChartConstants$$.TITLE = D.$DvtChartConstants$$.$TITLE$;
D.$DvtChartConstants$$.$X_AXIS_LABEL$ = "xAxisLabel";
D.$DvtChartConstants$$.X_AXIS_LABEL = D.$DvtChartConstants$$.$X_AXIS_LABEL$;
D.$DvtChartConstants$$.$X_AXIS_TITLE$ = "xAxisTitle";
D.$DvtChartConstants$$.X_AXIS_TITLE = D.$DvtChartConstants$$.$X_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y_AXIS_LABEL$ = "yAxisLabel";
D.$DvtChartConstants$$.Y_AXIS_LABEL = D.$DvtChartConstants$$.$Y_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y_AXIS_TITLE$ = "yAxisTitle";
D.$DvtChartConstants$$.Y_AXIS_TITLE = D.$DvtChartConstants$$.$Y_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ = "y2AxisLabel";
D.$DvtChartConstants$$.Y2_AXIS_LABEL = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y2_AXIS_TITLE$ = "y2AxisTitle";
D.$DvtChartConstants$$.Y2_AXIS_TITLE = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$;
D.$DvtChartSelectionEvent$$ = function $$DvtChartSelectionEvent$$$($selection$$5$$, $xMin$$, $xMax$$, $startGroup$$, $endGroup$$, $yMin$$, $yMax$$, $y2Min$$, $y2Max$$) {
  D.$DvtChartSelectionEvent$$.$superclass$.Init.call(this, $selection$$5$$);
  this.$_xMin$ = $xMin$$;
  this.$_xMax$ = $xMax$$;
  this.$_startGroup$ = $startGroup$$;
  this.$_endGroup$ = $endGroup$$;
  this.$_yMin$ = $yMin$$;
  this.$_yMax$ = $yMax$$;
  this.$_y2Min$ = $y2Min$$;
  this.$_y2Max$ = $y2Max$$;
  this.$removedSet$ = this.$addedSet$ = D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtChartSelectionEvent", D.$DvtChartSelectionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartSelectionEvent$$, D.$DvtSelectionEvent$$, "DvtChartSelectionEvent");
D.$DvtChartSelectionEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartSelectionEvent$$.prototype.getXMin = D.$DvtChartSelectionEvent$$.prototype.$getXMin$;
D.$DvtChartSelectionEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartSelectionEvent$$.prototype.getXMax = D.$DvtChartSelectionEvent$$.prototype.$getXMax$;
D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartSelectionEvent$$.prototype.getStartGroup = D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartSelectionEvent$$.prototype.getEndGroup = D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartSelectionEvent$$.prototype.getYMin = D.$DvtChartSelectionEvent$$.prototype.$getYMin$;
D.$DvtChartSelectionEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartSelectionEvent$$.prototype.getYMax = D.$DvtChartSelectionEvent$$.prototype.$getYMax$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Min$ = (0,D.$JSCompiler_get$$)("$_y2Min$");
D.$DvtChartSelectionEvent$$.prototype.getY2Min = D.$DvtChartSelectionEvent$$.prototype.$getY2Min$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Max$ = (0,D.$JSCompiler_get$$)("$_y2Max$");
D.$DvtChartSelectionEvent$$.prototype.getY2Max = D.$DvtChartSelectionEvent$$.prototype.$getY2Max$;
D.$DvtChartViewportChangeEvent$$ = function $$DvtChartViewportChangeEvent$$$($xMin$$1$$, $xMax$$1$$, $startGroup$$1$$, $endGroup$$1$$, $yMin$$1$$, $yMax$$1$$) {
  D.$DvtChartViewportChangeEvent$$.$superclass$.Init.call(this, "viewportChange");
  this.$_xMin$ = $xMin$$1$$;
  this.$_xMax$ = $xMax$$1$$;
  this.$_startGroup$ = $startGroup$$1$$;
  this.$_endGroup$ = $endGroup$$1$$;
  this.$_yMin$ = $yMin$$1$$;
  this.$_yMax$ = $yMax$$1$$
};
(0,D.$goog$exportSymbol$$)("DvtChartViewportChangeEvent", D.$DvtChartViewportChangeEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartViewportChangeEvent$$, D.$DvtBaseComponentEvent$$, "DvtChartViewportChangeEvent");
D.$DvtChartViewportChangeEvent$$.TYPE = "viewportChange";
D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMin = D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMax = D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$;
D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getStartGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getEndGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMin = D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMax = D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$;
D.$DvtChartImpl$$ = function $$DvtChartImpl$$$($context$$596$$, $callback$$124$$, $callbackObj$$93$$) {
  this.Init($context$$596$$, $callback$$124$$, $callbackObj$$93$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartImpl$$, D.$DvtChart$$, "DvtChartImpl");
D.$DvtChartImpl$$.prototype.Init = function $$DvtChartImpl$$$$Init$($context$$597$$, $callback$$125$$, $callbackObj$$94$$) {
  D.$DvtChartImpl$$.$superclass$.Init.call(this, $context$$597$$, $callback$$125$$, $callbackObj$$94$$);
  this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_peers$ = [];
  this.$_seriesStyleArray$ = [];
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtChartImpl$$.prototype.$SetOptions$ = function $$DvtChartImpl$$$$$SetOptions$$($options$$166_popupBehaviors_selectionMode$$9$$) {
  D.$DvtChartImpl$$.$superclass$.$SetOptions$.call(this, $options$$166_popupBehaviors_selectionMode$$9$$);
  $options$$166_popupBehaviors_selectionMode$$9$$ = this.$Options$.selection;
  this.$_selectionHandler$ = "single" == $options$$166_popupBehaviors_selectionMode$$9$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$166_popupBehaviors_selectionMode$$9$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  if($options$$166_popupBehaviors_selectionMode$$9$$ = this.$Options$._spb) {
    this.$_popupBehaviors$ = {};
    for(var $stampId$$6$$ in $options$$166_popupBehaviors_selectionMode$$9$$) {
      for(var $popupBehaviorArray$$ = $options$$166_popupBehaviors_selectionMode$$9$$[$stampId$$6$$], $i$$600$$ = 0;$i$$600$$ < $popupBehaviorArray$$.length;$i$$600$$++) {
        this.$_popupBehaviors$[$stampId$$6$$] || (this.$_popupBehaviors$[$stampId$$6$$] = []);
        var $popupBehavior$$ = $popupBehaviorArray$$[$i$$600$$];
        this.$_popupBehaviors$[$stampId$$6$$].push(new D.$DvtShowPopupBehavior$$($popupBehavior$$.popupId, $popupBehavior$$.triggerType, $popupBehavior$$.alignId, $popupBehavior$$.align))
      }
    }
  }
};
D.$DvtChart$$.prototype.filter = function $$DvtChart$$$$filter$($category$$16$$, $type$$191$$) {
  D.$DvtChartEventUtils$$.$setVisibility$(this, $category$$16$$, "out" == $type$$191$$ ? "hidden" : "visible");
  this.$render$(this.$Options$)
};
D.$DvtChart$$.prototype.filter = D.$DvtChart$$.prototype.filter;
D.$DvtChart$$.prototype.$highlight$ = function $$DvtChart$$$$$highlight$$($categories$$9$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$9$$, this.$getObjects$());
  this.$legend$ && this.$legend$.$highlight$($categories$$9$$);
  this.$pieChart$ && this.$pieChart$.$highlight$($categories$$9$$)
};
D.$DvtChart$$.prototype.highlight = D.$DvtChart$$.prototype.$highlight$;
D.$DvtChartImpl$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$DvtChartImpl$$.prototype.$processEvent$ = function $$DvtChartImpl$$$$$processEvent$$($event$$537$$, $source$$24$$) {
  var $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ = $event$$537$$.$getType$();
  if($actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    this.filter($event$$537$$.$_category$, $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ ? "out" : "in")
  }else {
    if("categoryRollOver" == $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ || "categoryRollOut" == $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$) {
      "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) && ((0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$537$$, this.$getObjects$()), this.$_distributeToChildren$($event$$537$$, $source$$24$$))
    }else {
      if("selection" == $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$) {
        $event$$537$$ = this.$_processSelectionEvent$($event$$537$$)
      }else {
        if("dvtPanZoom" == $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$) {
          var $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$ = $event$$537$$, $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ = $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$getSubtype$(), $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ = "dvtPanEndEvent" == $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ || 
          "dvtZoomEvent" == $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ || "dvtPinchEndEvent" == $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$, $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ = "dvtPanStartEvent" == $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ || 
          "dvtPinchStartEvent" == $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$;
          D.$DvtAgent$$.$isTouchDevice$() && ($actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ && this.$_panZoomTarget$ != this.$_plotArea$) && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
          D.$DvtChartEventUtils$$.$isLiveScroll$(this) ? ($bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$dxMin$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$dxMax$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$dyMin$, 
          $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$dyMax$), $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ || (this.$setViewport$($bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$, $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, 
          $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$))) : ($bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$dxMinTotal$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$dxMaxTotal$, 
          $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$dyMinTotal$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$dyMaxTotal$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$), $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ && this.$setViewport$($bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$, 
          $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$));
          $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ ? (D.$DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = D.$JSCompiler_alias_NULL$$), $event$$537$$ = D.$DvtChartTypeUtils$$.$isBLAC$(this) ? new D.$DvtChartViewportChangeEvent$$($bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$xMin$, 
          $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$xMax$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$startGroup$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$($bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$xMin$, 
          $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$yMin$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.$yMax$)) : $event$$537$$ = D.$JSCompiler_alias_NULL$$
        }else {
          if("dvtMarquee" == $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$) {
            $event$$537$$ = (0,D.$JSCompiler_StaticMethods__processMarqueeEvent$$)(this, $event$$537$$)
          }else {
            if("overview" == $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$) {
              if($actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ = $event$$537$$.$getSubType$(), "dropCallback" != $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$) {
                $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ = $event$$537$$.$getParamValue$("newStartTime");
                $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$ = $event$$537$$.$getParamValue$("newEndTime");
                $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ = "scrollTime" == $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ || "scrollEnd" == $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ || "rangeChange" == $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$;
                if(D.$DvtChartEventUtils$$.$isLiveScroll$(this) || $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$) {
                  $source$$24$$ == this.$yScrollbar$ ? this.$setViewport$({$yMin$:$actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$, $yMax$:$bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$}, $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$) : this.$setViewport$({$xMin$:$actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$, 
                  $xMax$:$bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$}, $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$)
                }
                $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ ? $source$$24$$ == this.$yScrollbar$ ? $event$$537$$ = new D.$DvtChartViewportChangeEvent$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$) : 
                ($actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$(this.$xAxis$, $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$), $event$$537$$ = new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$, 
                $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$, $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$.$startGroup$, $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : $event$$537$$ = D.$JSCompiler_alias_NULL$$
              }else {
                $event$$537$$ = D.$JSCompiler_alias_VOID$$
              }
            }else {
              "showPopup" == $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ ? ($actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ = $event$$537$$, "mouseHover" != $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$.triggerType && (this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) && ($bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$ = 
              D.$DvtChartEventUtils$$.$processIds$(this, (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$getSelectionHandler$())), $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ = new D.$DvtShowPopupEvent$$($actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$.$_showPopupBehavior$, $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$.$_launcherBounds$, $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$.$_launcherId$), 
              (0,D.$JSCompiler_StaticMethods_addParam$$)($actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$, "clientRowKey", $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$)), $event$$537$$ = $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$) : $event$$537$$ instanceof D.$DvtComponentUIEvent$$ && ($event$$537$$ = (0,D.$JSCompiler_StaticMethods__processComponentUIEvent$$)(this, 
              $event$$537$$, $source$$24$$))
            }
          }
        }
      }
    }
  }
  if($event$$537$$ instanceof D.$DvtChartSelectionEvent$$) {
    var $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$ = this.$getOptions$(), $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ = $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.selectedItems, $newItems_removedSet$$ = D.$DvtChartDataUtils$$.$getCurrentSelection$(this);
    $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$.selectedItems = $newItems_removedSet$$;
    var $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ = $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ ? $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$ : [], $newItems_removedSet$$ = $newItems_removedSet$$ ? $newItems_removedSet$$ : [], $newIndex$$4_oldIndex$$2$$, $oldItemId_oldSet$$ = {};
    for($newIndex$$4_oldIndex$$2$$ = 0;$newIndex$$4_oldIndex$$2$$ < $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$.length;$newIndex$$4_oldIndex$$2$$++) {
      $oldItemId_oldSet$$[$actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$[$newIndex$$4_oldIndex$$2$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$ = {};
    for($newIndex$$4_oldIndex$$2$$ = 0;$newIndex$$4_oldIndex$$2$$ < $newItems_removedSet$$.length;$newIndex$$4_oldIndex$$2$$++) {
      $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$[$newItems_removedSet$$[$newIndex$$4_oldIndex$$2$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$ = {};
    for($newIndex$$4_oldIndex$$2$$ = 0;$newIndex$$4_oldIndex$$2$$ < $newItems_removedSet$$.length;$newIndex$$4_oldIndex$$2$$++) {
      var $newItemId$$ = $newItems_removedSet$$[$newIndex$$4_oldIndex$$2$$].id;
      $oldItemId_oldSet$$[$newItemId$$] || ($actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$[$newItemId$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $newItems_removedSet$$ = {};
    for($newIndex$$4_oldIndex$$2$$ = 0;$newIndex$$4_oldIndex$$2$$ < $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$.length;$newIndex$$4_oldIndex$$2$$++) {
      $oldItemId_oldSet$$ = $actionDone$$inline_5878_event$$inline_5892_oldItems_start$$inline_5886_type$$192$$[$newIndex$$4_oldIndex$$2$$].id, $bounds$$inline_5880_end$$inline_5887_event$$inline_5876_newSet_options$$167_selection$$inline_5893$$[$oldItemId_oldSet$$] || ($newItems_removedSet$$[$oldItemId_oldSet$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $event$$537$$.addedSet = $actionDone$$inline_5888_actionStart$$inline_5879_addedSet_startEndGroup$$inline_5889_subtype$$inline_5877_subtype$$inline_5885$$;
    $event$$537$$.removedSet = $newItems_removedSet$$
  }
  $event$$537$$ && this.$__dispatchEvent$($event$$537$$)
};
D.$DvtChartImpl$$.prototype.$_processSelectionEvent$ = function $$DvtChartImpl$$$$$_processSelectionEvent$$($event$$538_selection$$20$$) {
  $event$$538_selection$$20$$ = D.$DvtChartEventUtils$$.$processIds$(this, $event$$538_selection$$20$$.getSelection());
  if(this.$overview$) {
    var $ovChart$$ = this.$overview$.$_chart$;
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($ovChart$$.$getSelectionHandler$(), $event$$538_selection$$20$$, $ovChart$$.$getObjects$())
  }
  return new D.$DvtChartSelectionEvent$$($event$$538_selection$$20$$)
};
D.$JSCompiler_StaticMethods__processMarqueeEvent$$ = function $$JSCompiler_StaticMethods__processMarqueeEvent$$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$540$$) {
  var $selection$$21_subtype$$11$$ = $event$$540$$.$getSubtype$(), $bounds$$119_em_ovChart$$1_selectionHandler$$12$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$EventManager$;
  D.$DvtChartEventUtils$$.$adjustBounds$($event$$540$$);
  if("select" == $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$_dragMode$) {
    $bounds$$119_em_ovChart$$1_selectionHandler$$12$$ = $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$getSelectionHandler$();
    if("dvtMarqueeStartEvent" == $selection$$21_subtype$$11$$) {
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$ = $event$$540$$.ctrlKey ? (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($bounds$$119_em_ovChart$$1_selectionHandler$$12$$) : []
    }else {
      var $targets$$7$$ = D.$DvtChartEventUtils$$.$getBoundedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$540$$);
      (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($bounds$$119_em_ovChart$$1_selectionHandler$$12$$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$getObjects$());
      for(var $target$$inline_5898$$, $i$$inline_5899$$ = 0;$i$$inline_5899$$ < $targets$$7$$.length;$i$$inline_5899$$++) {
        $target$$inline_5898$$ = $targets$$7$$[$i$$inline_5899$$], (!$target$$inline_5898$$ || !$target$$inline_5898$$.$isUnrelatedToSelection$) && (0,D.$JSCompiler_StaticMethods__addToSelection$$)($bounds$$119_em_ovChart$$1_selectionHandler$$12$$, $target$$inline_5898$$, D.$JSCompiler_alias_TRUE$$)
      }
    }
    if("dvtMarqueeEndEvent" == $selection$$21_subtype$$11$$) {
      return $selection$$21_subtype$$11$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($bounds$$119_em_ovChart$$1_selectionHandler$$12$$), $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$ && ($bounds$$119_em_ovChart$$1_selectionHandler$$12$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$.$_chart$, (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$getSelectionHandler$(), $selection$$21_subtype$$11$$, 
      $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$getObjects$())), $bounds$$119_em_ovChart$$1_selectionHandler$$12$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$540$$, D.$JSCompiler_alias_FALSE$$), new D.$DvtChartSelectionEvent$$($selection$$21_subtype$$11$$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$xMin$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$xMax$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$startGroup$, 
      $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$endGroup$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$yMin$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$yMax$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$y2Min$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$y2Max$)
    }
  }else {
    if("zoom" == $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$_dragMode$) {
      if("dvtMarqueeEndEvent" != $selection$$21_subtype$$11$$) {
        return D.$JSCompiler_alias_NULL$$
      }
      $bounds$$119_em_ovChart$$1_selectionHandler$$12$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$540$$, D.$JSCompiler_alias_TRUE$$);
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$setViewport$($bounds$$119_em_ovChart$$1_selectionHandler$$12$$, D.$JSCompiler_alias_TRUE$$);
      (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$);
      D.$DvtChartRenderer$$.$_setEventHandlers$($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
      return D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__processMarqueeEvent$self$$) ? new D.$DvtChartViewportChangeEvent$$($bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$xMin$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$xMax$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$startGroup$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$($bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$xMin$, 
      $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$yMin$, $bounds$$119_em_ovChart$$1_selectionHandler$$12$$.$yMax$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processComponentUIEvent$$ = function $$JSCompiler_StaticMethods__processComponentUIEvent$$$($JSCompiler_StaticMethods__processComponentUIEvent$self$$, $event$$543$$, $source$$26$$) {
  var $params$$32$$ = $event$$543$$.params, $chartObjType$$ = $params$$32$$.type;
  return $source$$26$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$legend$ ? ($chartObjType$$ == D.$DvtLegendConstants$$.$LEGEND_ITEM$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_ITEM$ : $chartObjType$$ == D.$DvtLegendConstants$$.$TITLE$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_TITLE$ : $chartObjType$$ == D.$DvtLegendConstants$$.$BACKGROUND$ && ($chartObjType$$ = D.$DvtChartConstants$$.$LEGEND$), new D.$DvtComponentUIEvent$$($event$$543$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, 
  D.$JSCompiler_alias_NULL$$, $params$$32$$.id))) : $source$$26$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$xAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$543$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$32$$.id))) : 
  $source$$26$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$yAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$543$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$32$$.id))) : $source$$26$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$y2Axis$ ? 
  ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$543$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$32$$.id))) : $event$$543$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartImpl$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_distributeToChildren$ = function $$JSCompiler_prototypeAlias$$$$_distributeToChildren$$($event$$544$$, $source$$27$$) {
  this.$legend$ && this.$legend$ != $source$$27$$ && this.$legend$.$processEvent$($event$$544$$, $source$$27$$);
  this.$pieChart$ && this.$pieChart$ != $source$$27$$ && this.$pieChart$.$processEvent$($event$$544$$, $source$$27$$)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  D.$DvtChartImpl$$.$superclass$.$__cleanUp$.call(this);
  this.$_peers$.length = 0;
  this.$yScrollbar$ = this.$xScrollbar$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)(this);
  this.$dragButtons$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__cleanUpAxisAndPlotArea$ = function $$JSCompiler_prototypeAlias$$$$__cleanUpAxisAndPlotArea$$() {
  var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5901$$ = this.$EventManager$;
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5901$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5901$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5901$$.$_dataCursorHandler$);
  this.$_peers$.length = 0;
  this.$_container$.removeChild(this.$xAxis$);
  this.$_container$.removeChild(this.$yAxis$);
  this.$_container$.removeChild(this.$y2Axis$);
  this.$_plotArea$ == this.$_panZoomTarget$ ? this.$_plotArea$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : this.$_container$.removeChild(this.$_plotArea$)
};
D.$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$7$$) {
  this.$_peers$.push($peer$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$JSCompiler_prototypeAlias$$.$getOptions$ = function $$JSCompiler_prototypeAlias$$$$getOptions$$() {
  this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  return this.$Options$
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getType$ = function $$JSCompiler_prototypeAlias$$$$getType$$() {
  return this.$getOptions$().type
};
D.$JSCompiler_prototypeAlias$$.$getGapRatio$ = function $$JSCompiler_prototypeAlias$$$$getGapRatio$$() {
  var $options$$168_wRatio$$1$$ = this.$getOptions$();
  if($options$$168_wRatio$$1$$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($options$$168_wRatio$$1$$.layout.gapRatio)) {
    return $options$$168_wRatio$$1$$.layout.gapRatio
  }
  var $options$$168_wRatio$$1$$ = window.Math.min(this.$Width$ / 400, 1), $hRatio$$1$$ = window.Math.min(this.$Height$ / 300, 1);
  return window.Math.min($options$$168_wRatio$$1$$, $hRatio$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$7$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$7$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($detObj$$) {
  var $par$$1$$ = $detObj$$.getParent();
  if($par$$1$$) {
    var $parentChildCount$$ = $par$$1$$.$getNumChildren$();
    1 < $parentChildCount$$ - this.$_numFrontObjs$ && ($par$$1$$.removeChild($detObj$$), $par$$1$$.$addChildAt$($detObj$$, $parentChildCount$$ - this.$_numFrontObjs$ - 1))
  }
  (!$detObj$$.$isSelected$() || !$detObj$$.$isHoverEffectShown$()) && this.$_numSelectedObjsInFront$++
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($detObj$$1$$) {
  0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
  var $par$$2$$ = $detObj$$1$$.getParent();
  if($par$$2$$) {
    var $newIndex$$6$$ = $par$$2$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
    0 <= $newIndex$$6$$ && ($par$$2$$.removeChild($detObj$$1$$), $par$$2$$.$addChildAt$($detObj$$1$$, $newIndex$$6$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$setViewport$ = function $$JSCompiler_prototypeAlias$$$$setViewport$$($bounds$$120$$, $actionDone$$2$$) {
  D.$DvtChartTypeUtils$$.$isScrollSupported$(this) && ($bounds$$120$$.$xMax$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMax = $bounds$$120$$.$xMax$), $bounds$$120$$.$xMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMin = $bounds$$120$$.$xMin$), D.$DvtChartTypeUtils$$.$isBLAC$(this) ? (this.$Options$.xAxis.viewportStartGroup = D.$JSCompiler_alias_NULL$$, this.$Options$.xAxis.viewportEndGroup = D.$JSCompiler_alias_NULL$$) : ($bounds$$120$$.$yMax$ != D.$JSCompiler_alias_NULL$$ && 
  (this.$Options$.yAxis.viewportMax = $bounds$$120$$.$yMax$), $bounds$$120$$.$yMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.yAxis.viewportMin = $bounds$$120$$.$yMin$)), this.$Options$._duringAnimation = !$actionDone$$2$$, D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$(this, this.$_container$))
};
D.$JSCompiler_StaticMethods_setScrollbarViewport$$ = function $$JSCompiler_StaticMethods_setScrollbarViewport$$$($JSCompiler_StaticMethods_setScrollbarViewport$self$$, $bounds$$121$$) {
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$.$setViewportRange$($bounds$$121$$.$xMin$, $bounds$$121$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$.$setViewportRange$($bounds$$121$$.$xMin$, $bounds$$121$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$.$setViewportRange$($bounds$$121$$.$yMin$, $bounds$$121$$.$yMax$)
};
D.$DvtChartImpl$$.prototype.$getRadius$ = (0,D.$JSCompiler_get$$)("$_radius$");
D.$JSCompiler_StaticMethods_hideDragButtons$$ = function $$JSCompiler_StaticMethods_hideDragButtons$$$($JSCompiler_StaticMethods_hideDragButtons$self$$) {
  $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$DvtChartAxis$$ = function $$DvtChartAxis$$$($context$$606$$, $callback$$129$$, $callbackObj$$98$$) {
  this.Init($context$$606$$, $callback$$129$$, $callbackObj$$98$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxis$$, D.$DvtAxis$$, "DvtChartAxis");
D.$DvtChartAxis$$.prototype.$getOptions$ = function $$DvtChartAxis$$$$$getOptions$$() {
  return this.$Info$.$Options$
};
D.$JSCompiler_StaticMethods_axisToPlotArea$$ = function $$JSCompiler_StaticMethods_axisToPlotArea$$$($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$107$$, $coord$$21$$, $bRoundResult$$) {
  if("tangential" == $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$107$$.$getOptions$().position) {
    return $coord$$21$$
  }
  if($coord$$21$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$107$$ = $coord$$21$$ - (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$107$$);
  return $bRoundResult$$ === D.$JSCompiler_alias_FALSE$$ ? $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$107$$ : window.Math.round($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$107$$)
};
D.$JSCompiler_StaticMethods_plotAreaToAxis$$ = function $$JSCompiler_StaticMethods_plotAreaToAxis$$$($JSCompiler_StaticMethods_plotAreaToAxis$self$$, $coord$$22$$) {
  if("tangential" == $JSCompiler_StaticMethods_plotAreaToAxis$self$$.$getOptions$().position) {
    return $coord$$22$$
  }
  if($coord$$22$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ret$$108$$ = $coord$$22$$ + (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_plotAreaToAxis$self$$);
  return window.Math.round($ret$$108$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$129$$, $bRoundResult$$2$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getCoordAt$($value$$129$$), $bRoundResult$$2$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$24$$) {
  return this.$Info$ ? this.$Info$.$getBoundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$24$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$130$$, $bRoundResult$$3$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBoundedCoordAt$($value$$130$$), $bRoundResult$$3$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$25$$) {
  return this.$Info$ ? this.$Info$.$getUnboundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$25$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$131$$, $bRoundResult$$4$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getUnboundedCoordAt$($value$$131$$), $bRoundResult$$4$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBaselineCoord$()) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getPosition$ = function $$JSCompiler_prototypeAlias$$$$getPosition$$() {
  return this.$__getOptions$().position
};
D.$JSCompiler_StaticMethods_isGroupAxis$$ = function $$JSCompiler_StaticMethods_isGroupAxis$$$($JSCompiler_StaticMethods_isGroupAxis$self$$) {
  return $JSCompiler_StaticMethods_isGroupAxis$self$$.$Info$ instanceof D.$DvtGroupAxisInfo$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)(this) ? window.Math.abs(this.$getUnboundedCoordAt$(1) - this.$getUnboundedCoordAt$(0)) : this.$Info$ instanceof D.$DvtTimeAxisInfo$$ ? this.$Info$.$getGroupWidth$() : 0
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$607$$) {
  return this.$Info$ ? this.$Info$.$getAxisLine$($context$$607$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$608$$) {
  return this.$Info$ ? this.$Info$.$getMajorGridLines$($context$$608$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$609$$) {
  return this.$Info$ ? this.$Info$.$getMinorGridLines$($context$$609$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMajorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$20$$) {
  this.$Info$ && this.$Info$.$setMajorTickCount$($count$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMinorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$21$$) {
  this.$Info$ && this.$Info$.$setMinorTickCount$($count$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMajorIncrement$$() {
  return this.$Info$ ? this.$Info$.$getMajorIncrement$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMinorIncrement$$() {
  return this.$Info$ ? this.$Info$.$getMinorIncrement$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getGlobalMin$ = function $$JSCompiler_prototypeAlias$$$$getGlobalMin$$() {
  return this.$Info$ ? this.$Info$.$getGlobalMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getGlobalMax$ = function $$JSCompiler_prototypeAlias$$$$getGlobalMax$$() {
  return this.$Info$ ? this.$Info$.$getGlobalMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getViewportMin$ = function $$JSCompiler_prototypeAlias$$$$getViewportMin$$() {
  return this.$Info$ ? this.$Info$.$getViewportMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getViewportMax$ = function $$JSCompiler_prototypeAlias$$$$getViewportMax$$() {
  return this.$Info$ ? this.$Info$.$getViewportMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataMin$ = function $$JSCompiler_prototypeAlias$$$$getDataMin$$() {
  return this.$Info$ ? this.$Info$.$getDataMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataMax$ = function $$JSCompiler_prototypeAlias$$$$getDataMax$$() {
  return this.$Info$ ? this.$Info$.$getDataMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return this.$Info$ ? this.$Info$.$getMinimumExtent$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isFullViewport$$ = function $$JSCompiler_StaticMethods_isFullViewport$$$($JSCompiler_StaticMethods_isFullViewport$self$$) {
  return $JSCompiler_StaticMethods_isFullViewport$self$$.$getViewportMin$() == $JSCompiler_StaticMethods_isFullViewport$self$$.$getGlobalMin$() && $JSCompiler_StaticMethods_isFullViewport$self$$.$getViewportMax$() == $JSCompiler_StaticMethods_isFullViewport$self$$.$getGlobalMax$()
};
D.$JSCompiler_StaticMethods_getLeftOverflow$$ = function $$JSCompiler_StaticMethods_getLeftOverflow$$$($JSCompiler_StaticMethods_getLeftOverflow$self$$) {
  return D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_getLeftOverflow$self$$.$_context$) ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getEndOverflow$() : D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getStartOverflow$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightOverflow$$ = function $$JSCompiler_StaticMethods_getRightOverflow$$$($JSCompiler_StaticMethods_getRightOverflow$self$$) {
  return D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_getRightOverflow$self$$.$_context$) ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getStartOverflow$() : D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getEndOverflow$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtChartBundle$$, D.$DvtBundle$$, "DvtChartBundle");
D.$DvtChartBundle$$._defaults = {EMPTY_TEXT:"No data to display", DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series: {0}", LABEL_GROUP:"Group: {0}", LABEL_VALUE:"Value: {0}", LABEL_TARGET_VALUE:"Target: {0}", LABEL_X:"X: {0}", LABEL_Y:"Y: {0}", LABEL_Z:"Z: {0}", LABEL_LOW:"Low: {0}", LABEL_HIGH:"High: {0}", LABEL_OTHER:"Other", PAN:"Pan", MARQUEE_SELECT:"Marquee select", MARQUEE_ZOOM:"Marquee zoom"};
D.$DvtChartBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtChartBundle$$$$$GetDefaultStringForKey$$($key$$89$$) {
  return D.$DvtChartBundle$$._defaults[$key$$89$$]
};
D.$DvtChartBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtChartBundle");
D.$DvtChartEventManager$$ = function $$DvtChartEventManager$$$($chart$$226$$) {
  D.$DvtChartEventManager$$.$superclass$.Init.call(this, $chart$$226$$.$_context$, $chart$$226$$.$processEvent$, $chart$$226$$);
  this.$_chart$ = $chart$$226$$;
  this.$_dragMode$ = D.$JSCompiler_alias_NULL$$;
  this.$_dragButtonsVisible$ = D.$DvtAgent$$.$isTouchDevice$();
  this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$_seriesRolloverHandler$ = this.$selectButton$ = this.$zoomButton$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventManager$$, D.$DvtEventManager$$, "DvtChartEventManager");
D.$DvtChartEventManager$getUIEventParams$$ = function $$DvtChartEventManager$getUIEventParams$$$($type$$205$$, $id$$263$$, $series$$13$$) {
  return{type:$type$$205$$, id:$id$$263$$, series:$series$$13$$, group:D.$JSCompiler_alias_VOID$$}
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$63$$) {
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  D.$DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$63$$);
  D.$DvtAgent$$.$isTouchDevice$() || (D.$DvtAgent$$.$isPlatformGecko$() ? $displayable$$63$$.$addEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$63$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$64$$) {
  D.$DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$64$$);
  D.$DvtAgent$$.$isTouchDevice$() || (D.$DvtAgent$$.$isPlatformGecko$() ? $displayable$$64$$.$removeEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$64$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$206$$, $logicalObj$$15$$) {
  if($logicalObj$$15$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$15$$.$getParams$() != D.$JSCompiler_alias_NULL$$) {
    $logicalObj$$15$$.$getParams$()
  }else {
    if($logicalObj$$15$$ instanceof D.$DvtPieSlice$$) {
      var $sliceId$$1$$ = $logicalObj$$15$$.getId();
      $sliceId$$1$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ || ($sliceId$$1$$.getId(), $sliceId$$1$$.$getSeries$(), $sliceId$$1$$.$getGroup$())
    }else {
      $logicalObj$$15$$ instanceof D.$DvtChartObjPeer$$ && (0 <= $logicalObj$$15$$.$getSeriesIndex$() && 0 <= $logicalObj$$15$$.$getGroupIndex$() || $logicalObj$$15$$.$getSeriesIndex$(), $logicalObj$$15$$.$getSeries$(), $logicalObj$$15$$.$getGroup$())
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$getLogicalObject$$($target$$110$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $target$$110$$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$12$$, $pageY$$12$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$12$$ - this.$_stageAbsolutePosition$.x, $pageY$$12$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_StaticMethods__getDragHandler$$ = function $$JSCompiler_StaticMethods__getDragHandler$$$($JSCompiler_StaticMethods__getDragHandler$self$$) {
  return"pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$ : "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeZoomHandler$ : "select" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeSelectHandler$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($JSCompiler_temp$$242_event$$556$$) {
  if(D.$DvtAgent$$.$isTouchDevice$()) {
    var $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$ = $JSCompiler_temp$$242_event$$556$$.touches, $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$, $dataCursorOn$$inline_6153_relPos$$inline_6161$$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$;
    1 == $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$.length ? ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) ? ($chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$ = this.$_getRelativePosition$($chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$[0].pageX, $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$[0].pageY), 
    $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$processDragStart$($chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$[0].pageX, 
    $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$[0].pageY, $JSCompiler_temp$$242_event$$556$$.target, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $JSCompiler_temp$$242_event$$556$$.target)), $dataCursorOn$$inline_6153_relPos$$inline_6161$$ = D.$JSCompiler_alias_TRUE$$) : 2 == $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$.length && this.$_panZoomHandler$ && (this.$endDrag$(), $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$ = 
    this.$_getRelativePosition$($chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$[0].pageX, $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$[0].pageY), $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$ = this.$_getRelativePosition$($chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$[1].pageX, $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$[1].pageY), 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_pinchOn$ ? $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_origPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_container$.$stageToLocal$($chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$), 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_origPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_container$.$stageToLocal$($chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$), $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_lastPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_origPt1$, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_lastPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_origPt2$, !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_bounds$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_origPt1$.x, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_origPt1$.y) || !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_bounds$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_origPt2$.x, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_origPt2$.y) ? 
    $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$_pinchOn$ = D.$JSCompiler_alias_TRUE$$, $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$ = new D.$DvtPanZoomEvent$$("dvtPinchStartEvent", 0, 0, 0, 0, 0, 0, 0, 0))));
    if($chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$ || $dataCursorOn$$inline_6153_relPos$$inline_6161$$) {
      $JSCompiler_temp$$242_event$$556$$.preventDefault(), $JSCompiler_temp$$242_event$$556$$.stopPropagation(), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
    }
    $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$ ? (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$), this.$_context$.$getTooltipManager$().$hideTooltip$(), $JSCompiler_temp$$242_event$$556$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$242_event$$556$$ = D.$JSCompiler_alias_FALSE$$
  }else {
    $dataCursorOn$$inline_6153_relPos$$inline_6161$$ = this.$_getRelativePosition$($JSCompiler_temp$$242_event$$556$$.pageX, $JSCompiler_temp$$242_event$$556$$.pageY);
    $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $JSCompiler_temp$$242_event$$556$$));
    if((!$JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$isSelectable$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_9647_dragHandler$$inline_6154_obj$$inline_6164$$.$isSelectable$()) && 0 == $JSCompiler_temp$$242_event$$556$$.button && $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$) {
      ($chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$ = $chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$.$processDragStart$($dataCursorOn$$inline_6153_relPos$$inline_6161$$, $JSCompiler_temp$$242_event$$556$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$), this.$_chart$.setCursor($chartEvent$$inline_6152_dragHandler$$inline_6162_relPos1$$inline_6156$$.getCursor($dataCursorOn$$inline_6153_relPos$$inline_6161$$)), 
      (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
    }
    $chartEvent$$inline_6163_relPos$$inline_6155_relPos2$$inline_6157_touches$$inline_6151$$ ? (this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$), $JSCompiler_temp$$242_event$$556$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$242_event$$556$$ = D.$JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_temp$$242_event$$556$$
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$557$$) {
  if(D.$DvtAgent$$.$isTouchDevice$()) {
    var $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$ = $event$$557$$.touches, $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$, $dataCursorOn$$inline_6170_relPos$$inline_6178$$;
    if(1 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.length) {
      var $axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
      $axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$ ? ($JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$[0].pageY), 
      $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$ = $axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$.$processDragMove$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$[0].pageX, 
      $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$[0].pageY, $event$$557$$.target, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$557$$.target)), $dataCursorOn$$inline_6170_relPos$$inline_6178$$ = D.$JSCompiler_alias_TRUE$$)
    }else {
      if(2 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.length && this.$_panZoomHandler$) {
        if($chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$[0].pageY), $axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$ = 
        this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$[1].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$[1].pageY), $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.$_pinchOn$) {
          $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.$_container$.$stageToLocal$($chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$);
          var $axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.$_container$.$stageToLocal$($axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$), $deltas$$inline_9658$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$, 
          $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$, $axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.$_lastPt2$), $totalDeltas$$inline_9659$$ = 
          (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$, $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$, $axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.$_origPt1$, 
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.$_origPt2$);
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.$_lastPt1$ = $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$;
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$.$_lastPt2$ = $axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$;
          $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$ = new D.$DvtPanZoomEvent$$("dvtPinchMoveEvent", $deltas$$inline_9658$$.$dxMin$, $deltas$$inline_9658$$.$dxMax$, $deltas$$inline_9658$$.$dyMin$, $deltas$$inline_9658$$.$dyMax$, $totalDeltas$$inline_9659$$.$dxMin$, $totalDeltas$$inline_9659$$.$dxMax$, $totalDeltas$$inline_9659$$.$dyMin$, $totalDeltas$$inline_9659$$.$dyMax$)
        }else {
          $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$ = D.$JSCompiler_alias_NULL$$
        }
      }
    }
    if($chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$ || $dataCursorOn$$inline_6170_relPos$$inline_6178$$) {
      $event$$557$$.preventDefault(), $event$$557$$.stopPropagation()
    }
    $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$), this.$_context$.$getTooltipManager$().$hideTooltip$())
  }else {
    $dataCursorOn$$inline_6170_relPos$$inline_6178$$ = this.$_getRelativePosition$($event$$557$$.pageX, $event$$557$$.pageY);
    if($chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      ($JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$ = $chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$.$processDragMove$($dataCursorOn$$inline_6170_relPos$$inline_6178$$, $event$$557$$.ctrlKey)) ? (this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, 
      D.$JSCompiler_alias_FALSE$$)) : ($axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$ = this.$_chart$.$_axisSpace$) && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($axisSpace$$inline_6181_dragHandler$$inline_6171_newPt2$$inline_9657_relPos2$$inline_6174$$, $dataCursorOn$$inline_6170_relPos$$inline_6178$$.x, $dataCursorOn$$inline_6170_relPos$$inline_6178$$.y)), this.$_chart$.setCursor($chartEvent$$inline_6169_dragHandler$$inline_6179_newPt1$$inline_9656_relPos1$$inline_6173$$.getCursor($dataCursorOn$$inline_6170_relPos$$inline_6178$$))
    }
    $JSCompiler_StaticMethods_processPinchMove$self$$inline_9653_chartEvent$$inline_6180_relPos$$inline_6172_touches$$inline_6168$$ || this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$557$$) instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$) : (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$557$$.pageX, $event$$557$$.pageY, $event$$557$$.target))
  }
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($chartEvent$$inline_6192_event$$558$$) {
  if(D.$DvtAgent$$.$isTouchDevice$()) {
    var $chartEvent1$$inline_6185_relPos$$inline_6190$$ = this.$endDrag$(), $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$;
    if(this.$_panZoomHandler$) {
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$ = this.$_panZoomHandler$;
      if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.$_pinchOn$) {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.$_pinchOn$ = D.$JSCompiler_alias_FALSE$$;
        var $totalDeltas$$inline_9664$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.$_lastPt2$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.$_origPt1$, 
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.$_origPt2$);
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.$_lastPt1$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.$_lastPt2$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$ = new D.$DvtPanZoomEvent$$("dvtPinchEndEvent", 0, 0, 0, 0, $totalDeltas$$inline_9664$$.$dxMin$, $totalDeltas$$inline_9664$$.$dxMax$, $totalDeltas$$inline_9664$$.$dyMin$, $totalDeltas$$inline_9664$$.$dyMax$)
      }else {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$ && this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$)
    }
    if($chartEvent1$$inline_6185_relPos$$inline_6190$$ || $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$) {
      $chartEvent$$inline_6192_event$$558$$.preventDefault(), $chartEvent$$inline_6192_event$$558$$.stopPropagation(), this.$_context$.$getTooltipManager$().$hideTooltip$()
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_TRUE$$)
  }else {
    $chartEvent1$$inline_6185_relPos$$inline_6190$$ = this.$_getRelativePosition$($chartEvent$$inline_6192_event$$558$$.pageX, $chartEvent$$inline_6192_event$$558$$.pageY);
    if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      if($chartEvent$$inline_6192_event$$558$$ = $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.$processDragEnd$($chartEvent1$$inline_6185_relPos$$inline_6190$$, $chartEvent$$inline_6192_event$$558$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_6192_event$$558$$), (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)(this)
      }
      this.$_chart$.setCursor($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9663_chartEvent2$$inline_6186_dragHandler$$inline_6191$$.getCursor($chartEvent1$$inline_6185_relPos$$inline_6190$$))
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$562_obj$$336$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$562_obj$$336$$);
  ($event$$562_obj$$336$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$562_obj$$336$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOver$($event$$562_obj$$336$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$563_obj$$337$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$563_obj$$337$$);
  var $relPos$$52$$ = this.$_getRelativePosition$($event$$563_obj$$337$$.pageX, $event$$563_obj$$337$$.pageY), $JSCompiler_StaticMethods_processOut$self$$inline_6198_axisSpace$$1$$ = this.$_chart$.$_axisSpace$;
  $JSCompiler_StaticMethods_processOut$self$$inline_6198_axisSpace$$1$$ && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_6198_axisSpace$$1$$, $relPos$$52$$.x, $relPos$$52$$.y));
  this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processOut$self$$inline_6198_axisSpace$$1$$ = this.$_dataCursorHandler$, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_6198_axisSpace$$1$$.$getPlotRect$(), $relPos$$52$$.x, $relPos$$52$$.y) || (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processOut$self$$inline_6198_axisSpace$$1$$));
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
  ($event$$563_obj$$337$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$563_obj$$337$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOut$($event$$563_obj$$337$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$564$$) {
  if(D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    var $delta$$15_delta$$inline_6203$$ = $event$$564$$.wheelDelta != D.$JSCompiler_alias_NULL$$ ? $event$$564$$.wheelDelta : 0, $deltaXMin$$inline_6205_relPos$$53$$ = this.$_getRelativePosition$($event$$564$$.pageX, $event$$564$$.pageY);
    if(this.$_panZoomHandler$) {
      var $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$;
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$ = this.$_panZoomHandler$;
      var $startPt$$inline_6204$$ = $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$.$_container$.$stageToLocal$($deltaXMin$$inline_6205_relPos$$53$$);
      if((0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$.$_bounds$, $startPt$$inline_6204$$.x, $startPt$$inline_6204$$.y)) {
        var $delta$$15_delta$$inline_6203$$ = $delta$$15_delta$$inline_6203$$ * $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$.$_zoomRate$, $deltaXMin$$inline_6205_relPos$$53$$ = $delta$$15_delta$$inline_6203$$ * ($startPt$$inline_6204$$.x - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$.$_bounds$.x), $deltaXMax$$inline_6206$$ = -$delta$$15_delta$$inline_6203$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$.$_bounds$.x + 
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$.$_bounds$.$w$ - $startPt$$inline_6204$$.x), $deltaYMin$$inline_6207$$ = $delta$$15_delta$$inline_6203$$ * ($startPt$$inline_6204$$.y - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$.$_bounds$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$ = -$delta$$15_delta$$inline_6203$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$.$_bounds$.y + $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$.$_bounds$.$h$ - $startPt$$inline_6204$$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$ = new D.$DvtPanZoomEvent$$("dvtZoomEvent", $deltaXMin$$inline_6205_relPos$$53$$, $deltaXMax$$inline_6206$$, $deltaYMin$$inline_6207$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$, $deltaXMin$$inline_6205_relPos$$53$$, $deltaXMax$$inline_6206$$, $deltaYMin$$inline_6207$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$)
      }else {
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$ && ($event$$564$$.preventDefault(), $event$$564$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_6201_deltaYMax$$inline_6208_panZoomEvent$$), this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$564$$.pageX, $event$$564$$.pageY, $event$$564$$.target))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$565_pos$$47$$) {
  var $obj$$338$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$565_pos$$47$$.target);
  $event$$565_pos$$47$$ = this.$_getRelativePosition$($event$$565_pos$$47$$.pageX, $event$$565_pos$$47$$.pageY);
  this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($event$$565_pos$$47$$, $obj$$338$$);
  $obj$$338$$ && $obj$$338$$.$getAction$ && $obj$$338$$.$_action$ && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$338$$.$_action$, $obj$$338$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($dlo$$6_event$$566$$) {
  var $touch$$54$$ = $dlo$$6_event$$566$$.$touch$, $pos$$48$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$54$$.pageX, $touch$$54$$.pageY);
  $dlo$$6_event$$566$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$6_event$$566$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$54$$.identifier, !$dlo$$6_event$$566$$ ? D.$JSCompiler_alias_TRUE$$ : this.$IsTooltipShowableInternal$ && this.$IsTooltipShowableInternal$($dlo$$6_event$$566$$, $pos$$48$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverMoveInternal$$($dlo$$7_event$$567$$) {
  var $touch$$55$$ = $dlo$$7_event$$567$$.$touch$, $pos$$49$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$55$$.pageX, $touch$$55$$.pageY);
  $dlo$$7_event$$567$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$7_event$$567$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$55$$.identifier, !$dlo$$7_event$$567$$ ? D.$JSCompiler_alias_TRUE$$ : this.$IsTooltipShowableInternal$ && this.$IsTooltipShowableInternal$($dlo$$7_event$$567$$, $pos$$49$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($dlo$$8_event$$568$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$8_event$$568$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$8_event$$568$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$8_event$$568$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($dlo$$9_event$$569$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$9_event$$569$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$9_event$$569$$.target), this.$_seriesRolloverHandler$.$processMouseOver$($dlo$$9_event$$569$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($dlo$$10_event$$570$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$10_event$$570$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$10_event$$570$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$10_event$$570$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$68_obj$$339$$) {
  D.$DvtChartEventManager$$.$superclass$.$HandleTouchClickInternal$.call(this, $evt$$68_obj$$339$$);
  ($evt$$68_obj$$339$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$68_obj$$339$$.target)) && $evt$$68_obj$$339$$.$getAction$ && $evt$$68_obj$$339$$.$_action$ && this.$FireEvent$(new D.$DvtActionEvent$$("action", $evt$$68_obj$$339$$.$_action$, $evt$$68_obj$$339$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$() {
  var $dragHandler$$5$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this), $chartEvent$$5$$;
  $dragHandler$$5$$ && ($chartEvent$$5$$ = $dragHandler$$5$$.$processDragEnd$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$);
  $chartEvent$$5$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  return $chartEvent$$5$$
};
D.$JSCompiler_prototypeAlias$$.$IsTooltipShowableInternal$ = function $$JSCompiler_prototypeAlias$$$$IsTooltipShowableInternal$$($obj$$340$$) {
  return this.$_dataCursorHandler$ ? $obj$$340$$ instanceof D.$DvtChartObjPeer$$ ? D.$JSCompiler_alias_FALSE$$ : !this.$_dataCursorHandler$.$_dataCursorShown$ : D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$hideTooltip$ = function $$JSCompiler_prototypeAlias$$$$hideTooltip$$() {
  (!this.$_dataCursorHandler$ || !this.$_dataCursorHandler$.$_dataCursorShown$) && D.$DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipsEnabled$ = function $$JSCompiler_prototypeAlias$$$$getTooltipsEnabled$$() {
  return this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$_dataCursorShown$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$cancelMarquee$ = function $$JSCompiler_prototypeAlias$$$$cancelMarquee$$($event$$574$$) {
  "zoom" == this.$_dragMode$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $event$$574$$.preventDefault() : "select" == this.$_dragMode$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$()
};
D.$JSCompiler_StaticMethods_setDragMode$$ = function $$JSCompiler_StaticMethods_setDragMode$$$($JSCompiler_StaticMethods_setDragMode$self$$, $dragMode$$) {
  $JSCompiler_StaticMethods_setDragMode$self$$.$_dragMode$ = $dragMode$$ == D.$JSCompiler_alias_NULL$$ ? D.$DvtAgent$$.$isTouchDevice$() ? "tooltip" : D.$DvtChartEventUtils$$.$isScrollable$($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$) ? "pan" : "multiple" == $JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$getOptions$().selection ? "select" : D.$JSCompiler_alias_NULL$$ : $dragMode$$;
  (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$xAxis$) && (!$JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$ || (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$)) && (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($JSCompiler_StaticMethods_setDragMode$self$$)
};
D.$DvtChartEventManager$$.prototype.$onZoomButtonClick$ = function $$DvtChartEventManager$$$$$onZoomButtonClick$$() {
  this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "zoom")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onPanButtonClick$ = function $$DvtChartEventManager$$$$$onPanButtonClick$$() {
  this.$panButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "pan")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onSelectButtonClick$ = function $$DvtChartEventManager$$$$$onSelectButtonClick$$() {
  this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$zoomButton$, D.$JSCompiler_alias_FALSE$$), this.$panButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$panButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "select")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_setDragButtonsVisible$$ = function $$JSCompiler_StaticMethods_setDragButtonsVisible$$$($JSCompiler_StaticMethods_setDragButtonsVisible$self$$, $visible$$4$$) {
  if($visible$$4$$ && !$JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$) {
    var $JSCompiler_StaticMethods_showDragButtons$self$$inline_6214$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$;
    $JSCompiler_StaticMethods_showDragButtons$self$$inline_6214$$.$dragButtons$ && $JSCompiler_StaticMethods_showDragButtons$self$$inline_6214$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_TRUE$$
  }else {
    !$visible$$4$$ && $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ && ((0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$), $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods_autoToggleZoomButton$$ = function $$JSCompiler_StaticMethods_autoToggleZoomButton$$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$) {
  !D.$DvtAgent$$.$isTouchDevice$() && $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$ && ((0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$xAxis$) && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$yAxis$) ? "pan" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, 
  D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$(), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.setCursor("crosshair")) : "zoom" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$(), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.setCursor($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_panZoomHandler$.getCursor())))
};
D.$DvtChartKeyboardHandler$$ = function $$DvtChartKeyboardHandler$$$($manager$$16$$, $chart$$158$$) {
  this.Init($manager$$16$$, $chart$$158$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtChartKeyboardHandler");
D.$DvtChartKeyboardHandler$$.prototype.Init = function $$DvtChartKeyboardHandler$$$$Init$($manager$$17$$, $chart$$159$$) {
  D.$DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $manager$$17$$);
  this.$_chart$ = $chart$$159$$
};
D.$DvtChartKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtChartKeyboardHandler$$$$$isSelectionEvent$$($event$$552$$) {
  return this.$isNavigationEvent$($event$$552$$) && !$event$$552$$.ctrlKey
};
D.$DvtChartKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtChartKeyboardHandler$$$$$isMultiSelectEvent$$($event$$553$$) {
  return 32 == $event$$553$$.keyCode && $event$$553$$.ctrlKey
};
D.$DvtChartKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtChartKeyboardHandler$$$$$processKeyDown$$($event$$554_navigables$$7$$) {
  var $currentNavigable$$7_keyCode$$29$$ = $event$$554_navigables$$7$$.keyCode;
  if(9 == $currentNavigable$$7_keyCode$$29$$) {
    var $currentNavigable$$7_keyCode$$29$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this.$_eventManager$), $next$$8$$ = D.$JSCompiler_alias_NULL$$;
    $event$$554_navigables$$7$$.preventDefault();
    $currentNavigable$$7_keyCode$$29$$ ? $next$$8$$ = $currentNavigable$$7_keyCode$$29$$ : ($event$$554_navigables$$7$$ = D.$DvtChartTypeUtils$$.$isPie$(this.$_chart$) ? this.$_chart$.$pieChart$.$_slices$ : this.$_chart$.$getObjects$(), $next$$8$$ = D.$DvtChartKeyboardHandler$$.$superclass$.$getDefaultNavigable$.call(this, $event$$554_navigables$$7$$));
    $next$$8$$ && this.$_eventManager$.$setFocus$($next$$8$$);
    return $next$$8$$
  }
  27 == $currentNavigable$$7_keyCode$$29$$ && this.$_eventManager$.$cancelMarquee$($event$$554_navigables$$7$$);
  return D.$DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$554_navigables$$7$$)
};
D.$DvtSeriesRolloverHandler$$ = function $$DvtSeriesRolloverHandler$$$($chart$$) {
  this.Init($chart$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSeriesRolloverHandler$$, D.$DvtObj$$, "DvtSeriesRolloverHandler");
D.$DvtSeriesRolloverHandler$$.prototype.Init = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOver$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOver$$($obj$$214$$) {
  this.$ProcessEvent$($obj$$214$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOut$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOut$$($obj$$215$$) {
  this.$ProcessEvent$($obj$$215$$, D.$JSCompiler_alias_FALSE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$ProcessEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartSeriesRolloverHandler$$ = function $$DvtChartSeriesRolloverHandler$$$($chart$$172$$, $handler$$49$$) {
  this.Init($chart$$172$$, $handler$$49$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesRolloverHandler$$, D.$DvtSeriesRolloverHandler$$, "DvtChartSeriesRolloverHandler");
D.$DvtChartSeriesRolloverHandler$$.prototype.Init = function $$DvtChartSeriesRolloverHandler$$$$Init$($chart$$173$$, $handler$$50$$) {
  D.$DvtChartSeriesRolloverHandler$$.$superclass$.Init.call(this);
  this.$_chart$ = $chart$$173$$;
  this.$EventHandler$ = $handler$$50$$
};
D.$DvtChartSeriesRolloverHandler$$.prototype.$ProcessEvent$ = function $$DvtChartSeriesRolloverHandler$$$$$ProcessEvent$$($obj$$334$$, $bOver$$12$$) {
  this.$_rolloverHandled$ = D.$JSCompiler_alias_FALSE$$;
  if($obj$$334$$) {
    var $rolloverContainer$$ = this.$_chart$, $eventType$$23$$ = $bOver$$12$$ ? "categoryRollOver" : "categoryRollOut", $categories$$11$$ = $obj$$334$$.$getCategories$ ? $obj$$334$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
    $categories$$11$$ && 0 < $categories$$11$$.length && (this.$EventHandler$.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($eventType$$23$$, $categories$$11$$), $rolloverContainer$$), this.$_rolloverHandled$ = D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtChartOverview$$ = function $$DvtChartOverview$$$($context$$604$$, $callback$$128$$, $callbackObj$$97$$, $id$$262$$, $oldChart$$1$$) {
  this.Init($context$$604$$, $callback$$128$$, $callbackObj$$97$$);
  this.$_chart$ = $oldChart$$1$$;
  this.$_id$ = $id$$262$$ + "_overview"
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartOverview$$, D.$DvtOverview$$, "DvtChartOverview");
D.$DvtChartOverview$$.prototype.$createBackground$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartOverview$$.prototype.$render$ = function $$DvtChartOverview$$$$$render$$($options$$208$$, $width$$103$$, $glassPane$$inline_6060_height$$96$$) {
  $options$$208$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$options$$208$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
  $options$$208$$.animationOnClick = "off";
  var $options$$inline_6057$$ = $options$$208$$.chart;
  this.$_chartContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_chartContainer$);
  window.optionsOverride = {zoomAndScroll:"off", legend:{rendered:"off"}, xAxis:{viewportMin:D.$JSCompiler_alias_NULL$$, viewportMax:D.$JSCompiler_alias_NULL$$, viewportStartGroup:D.$JSCompiler_alias_NULL$$, viewportEndGroup:D.$JSCompiler_alias_NULL$$, axisLine:{rendered:"off"}, title:D.$JSCompiler_alias_NULL$$}, yAxis:{axisLine:{rendered:"off"}, tickLabel:{rendered:"off"}, majorTick:{rendered:"off"}, minorTick:{rendered:"off"}, title:D.$JSCompiler_alias_NULL$$}, y2Axis:{axisLine:{rendered:"off"}, 
  tickLabel:{rendered:"off"}, majorTick:{rendered:"off"}, minorTick:{rendered:"off"}, title:D.$JSCompiler_alias_NULL$$}, title:{text:D.$JSCompiler_alias_NULL$$}, subtitle:{text:D.$JSCompiler_alias_NULL$$}, footnote:{text:D.$JSCompiler_alias_NULL$$}, titleSeparator:{rendered:"off"}, layout:{outerGapWidth:0, outerGapHeight:0, tickLabelGapWidth:0}, _isOverview:D.$JSCompiler_alias_TRUE$$};
  $options$$inline_6057$$ = D.$DvtJSONUtils$$.$merge$(window.optionsOverride, $options$$inline_6057$$);
  "disabled" == $options$$inline_6057$$.timeAxisType && ($options$$inline_6057$$.xAxis.tickLabel.rendered = "off");
  this.$_chart$ || (this.$_chart$ = (0,D.$DvtChart$newInstance$$)(this.$_context$), this.$_chart$.setId(this.$_id$));
  this.$_chartContainer$.$addChild$(this.$_chart$);
  this.$_chart$.$render$($options$$inline_6057$$, $width$$103$$, $glassPane$$inline_6060_height$$96$$);
  $glassPane$$inline_6060_height$$96$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$103$$, $glassPane$$inline_6060_height$$96$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($glassPane$$inline_6060_height$$96$$);
  this.$_chartContainer$.$addChild$($glassPane$$inline_6060_height$$96$$);
  D.$DvtChartOverview$$.$superclass$.$render$.call(this, $options$$208$$, $width$$103$$, this.$_chart$.$_plotAreaSpace$.$h$)
};
D.$DvtChartOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtChartObjPeer$$ = function $$DvtChartObjPeer$$$($chart$$148$$, $displayables$$24$$, $seriesIndex$$57$$, $groupIndex$$31$$, $dataPos$$1$$) {
  this.Init($chart$$148$$, $displayables$$24$$, $seriesIndex$$57$$, $groupIndex$$31$$, $dataPos$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartObjPeer$$, D.$DvtObj$$, "DvtChartObjPeer");
D.$DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$, $displayables$$25$$, $index$$127_seriesIndex$$58$$, $groupIndex$$32$$, $dataPos$$2_seriesItem$$25$$) {
  this.$_chart$ = $ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$;
  this.$_displayables$ = $displayables$$25$$;
  this.$_group$ = this.$_series$ = D.$JSCompiler_alias_NULL$$;
  this.$_dataPos$ = $dataPos$$2_seriesItem$$25$$;
  this.$_seriesIndex$ = (0,window.isNaN)($index$$127_seriesIndex$$58$$) ? -1 : $index$$127_seriesIndex$$58$$;
  0 <= this.$_seriesIndex$ && (this.$_series$ = D.$DvtChartDataUtils$$.$getSeries$($ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$, this.$_seriesIndex$));
  this.$_groupIndex$ = (0,window.isNaN)($groupIndex$$32$$) ? -1 : $groupIndex$$32$$;
  0 <= this.$_groupIndex$ && (this.$_group$ = D.$DvtChartDataUtils$$.$getGroup$($ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$, this.$_groupIndex$));
  if($dataPos$$2_seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$, $index$$127_seriesIndex$$58$$)) {
    this.$_action$ = $dataPos$$2_seriesItem$$25$$.action, this.$_stampId$ = $dataPos$$2_seriesItem$$25$$._id
  }
  this.$_categories$ = this.$_series$ != D.$JSCompiler_alias_NULL$$ ? [this.$_series$] : [];
  if($ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$ = D.$DvtChartDataUtils$$.$getDataItem$($ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$, $index$$127_seriesIndex$$58$$, $groupIndex$$32$$)) {
    $ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$.categories && (this.$_categories$ = this.$_categories$.concat($ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$.categories)), this.$_dataItemId$ = $ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$.id, this.$_action$ = $ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$.action, this.$_stampId$ = $ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$._id
  }
  if(this.$_action$) {
    for($ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$ = 0;$ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$ < this.$_displayables$.length;$ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$++) {
      this.$_displayables$[$ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$].setCursor("pointer")
    }
  }
  if(!D.$DvtAgent$$.$deferAriaCreation$()) {
    $ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$ = this.$getDatatip$(D.$JSCompiler_alias_NULL$$);
    for($index$$127_seriesIndex$$58$$ = 0;$index$$127_seriesIndex$$58$$ < $displayables$$25$$.length;$index$$127_seriesIndex$$58$$++) {
      (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($displayables$$25$$[$index$$127_seriesIndex$$58$$]), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayables$$25$$[$index$$127_seriesIndex$$58$$], "label", $ariaLabel$$2_chart$$149_dataItem$$23_i$$642$$)
    }
  }
  this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartObjPeer$associate$$ = function $$DvtChartObjPeer$associate$$$($displayable$$62$$, $chart$$150$$, $identObj$$1_seriesIndex$$59$$, $groupIndex$$33$$, $dataPos$$3$$) {
  $displayable$$62$$ && ($identObj$$1_seriesIndex$$59$$ = new D.$DvtChartObjPeer$$($chart$$150$$, [$displayable$$62$$], $identObj$$1_seriesIndex$$59$$, $groupIndex$$33$$, $dataPos$$3$$), $chart$$150$$.$registerObject$($identObj$$1_seriesIndex$$59$$), $chart$$150$$.$getEventManager$().$associate$($displayable$$62$$, $identObj$$1_seriesIndex$$59$$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_series$ != D.$JSCompiler_alias_NULL$$ && this.$_group$ != D.$JSCompiler_alias_NULL$$ ? new D.$DvtChartDataItem$$(this.$_dataItemId$, this.$_series$, this.$_group$) : this.$_series$ != D.$JSCompiler_alias_NULL$$ ? this.$_series$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getGroupIndex$ = (0,D.$JSCompiler_get$$)("$_groupIndex$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getChart$ = (0,D.$JSCompiler_get$$)("$_chart$");
D.$JSCompiler_prototypeAlias$$.$getSeriesType$ = function $$JSCompiler_prototypeAlias$$$$getSeriesType$$() {
  return D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesItem$ = function $$JSCompiler_prototypeAlias$$$$getSeriesItem$$() {
  return D.$DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$109$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($target$$109$$, this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_chart$.$isSelectionSupported$() && this.$_series$ != D.$JSCompiler_alias_NULL$$ && this.$_group$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$6$$) {
  this.$_isSelected$ = $bSelected$$6$$;
  for(var $i$$643$$ = 0;$i$$643$$ < this.$_displayables$.length;$i$$643$$++) {
    this.$_displayables$[$i$$643$$].$setSelected$ && this.$_displayables$[$i$$643$$].$setSelected$($bSelected$$6$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$644$$ = 0;$i$$644$$ < this.$_displayables$.length;$i$$644$$++) {
    this.$_displayables$[$i$$644$$].$showHoverEffect$ && this.$_displayables$[$i$$644$$].$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$645$$ = 0;$i$$645$$ < this.$_displayables$.length;$i$$645$$++) {
    this.$_displayables$[$i$$645$$].$hideHoverEffect$ && this.$_displayables$[$i$$645$$].$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return this.$getDatatip$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($chart$$inline_6065_event$$550_next$$7$$) {
  var $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$;
  $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ = $chart$$inline_6065_event$$550_next$$7$$.keyCode;
  if($chart$$inline_6065_event$$550_next$$7$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ && $chart$$inline_6065_event$$550_next$$7$$.ctrlKey) {
    return this
  }
  $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ = this.$_chart$;
  for(var $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$.$getObjects$(), $navigables$$6_seriesIndex$$inline_6067$$ = [], $i$$646_seriesCount$$inline_6069$$ = 0;$i$$646_seriesCount$$inline_6069$$ < $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$.length;$i$$646_seriesCount$$inline_6069$$++) {
    (0,D.$JSCompiler_StaticMethods_isNavigable$$)($chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$[$i$$646_seriesCount$$inline_6069$$]) && $navigables$$6_seriesIndex$$inline_6067$$.push($chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$[$i$$646_seriesCount$$inline_6069$$])
  }
  if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$)) {
    $chart$$inline_6065_event$$550_next$$7$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $chart$$inline_6065_event$$550_next$$7$$, $navigables$$6_seriesIndex$$inline_6067$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isArea$($chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$) || D.$DvtChartTypeUtils$$.$isLine$($chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$) || D.$DvtChartTypeUtils$$.$isStacked$($chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$)) {
      a: {
        $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $chart$$inline_6065_event$$550_next$$7$$.keyCode;
        $chart$$inline_6065_event$$550_next$$7$$ = this.$_chart$;
        var $context$$inline_6066_isRTL$$inline_6075$$ = $chart$$inline_6065_event$$550_next$$7$$.$_context$, $navigables$$6_seriesIndex$$inline_6067$$ = this.$getSeriesIndex$();
        $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ = this.$getGroupIndex$();
        var $i$$646_seriesCount$$inline_6069$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_6065_event$$550_next$$7$$), $groupCount$$inline_6070$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$inline_6065_event$$550_next$$7$$), $nextUpSeriesIndex$$inline_6071_seriesCount$$inline_9614$$;
        $nextUpSeriesIndex$$inline_6071_seriesCount$$inline_9614$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_6065_event$$550_next$$7$$);
        for(var $currentValue$$inline_9615_currentValue$$inline_9625_nextDownSeriesIndex$$inline_6072$$ = D.$DvtChartDataUtils$$.getValue($chart$$inline_6065_event$$550_next$$7$$, $navigables$$6_seriesIndex$$inline_6067$$, $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$), $nextValue$$inline_9616_nextValue$$inline_9626$$ = D.$JSCompiler_alias_NULL$$, $nextSeriesIndex$$inline_9617_nextSeriesIndex$$inline_9627$$ = D.$JSCompiler_alias_NULL$$, $i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$ = 
        0;$i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$ < $nextUpSeriesIndex$$inline_6071_seriesCount$$inline_9614$$;$i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$++) {
          var $itemValue$$inline_9619_itemValue$$inline_9629$$ = D.$DvtChartDataUtils$$.getValue($chart$$inline_6065_event$$550_next$$7$$, $i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$, $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$);
          if($itemValue$$inline_9619_itemValue$$inline_9629$$ > $currentValue$$inline_9615_currentValue$$inline_9625_nextDownSeriesIndex$$inline_6072$$ || $itemValue$$inline_9619_itemValue$$inline_9629$$ == $currentValue$$inline_9615_currentValue$$inline_9625_nextDownSeriesIndex$$inline_6072$$ && $i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$ > $navigables$$6_seriesIndex$$inline_6067$$) {
            if($nextValue$$inline_9616_nextValue$$inline_9626$$ !== D.$JSCompiler_alias_NULL$$ && $itemValue$$inline_9619_itemValue$$inline_9629$$ < $nextValue$$inline_9616_nextValue$$inline_9626$$ || $nextValue$$inline_9616_nextValue$$inline_9626$$ == D.$JSCompiler_alias_NULL$$) {
              $nextValue$$inline_9616_nextValue$$inline_9626$$ = $itemValue$$inline_9619_itemValue$$inline_9629$$, $nextSeriesIndex$$inline_9617_nextSeriesIndex$$inline_9627$$ = $i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$
            }
          }
        }
        $nextUpSeriesIndex$$inline_6071_seriesCount$$inline_9614$$ = $nextSeriesIndex$$inline_9617_nextSeriesIndex$$inline_9627$$;
        $i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_6065_event$$550_next$$7$$);
        $currentValue$$inline_9615_currentValue$$inline_9625_nextDownSeriesIndex$$inline_6072$$ = D.$DvtChartDataUtils$$.getValue($chart$$inline_6065_event$$550_next$$7$$, $navigables$$6_seriesIndex$$inline_6067$$, $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$);
        $nextSeriesIndex$$inline_9617_nextSeriesIndex$$inline_9627$$ = $nextValue$$inline_9616_nextValue$$inline_9626$$ = D.$JSCompiler_alias_NULL$$;
        for($i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$ -= 1;0 <= $i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$;$i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$--) {
          if($itemValue$$inline_9619_itemValue$$inline_9629$$ = D.$DvtChartDataUtils$$.getValue($chart$$inline_6065_event$$550_next$$7$$, $i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$, $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$), $itemValue$$inline_9619_itemValue$$inline_9629$$ < $currentValue$$inline_9615_currentValue$$inline_9625_nextDownSeriesIndex$$inline_6072$$ || $itemValue$$inline_9619_itemValue$$inline_9629$$ == $currentValue$$inline_9615_currentValue$$inline_9625_nextDownSeriesIndex$$inline_6072$$ && 
          $i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$ < $navigables$$6_seriesIndex$$inline_6067$$) {
            if($nextValue$$inline_9616_nextValue$$inline_9626$$ !== D.$JSCompiler_alias_NULL$$ && $itemValue$$inline_9619_itemValue$$inline_9629$$ > $nextValue$$inline_9616_nextValue$$inline_9626$$ || $nextValue$$inline_9616_nextValue$$inline_9626$$ == D.$JSCompiler_alias_NULL$$) {
              $nextValue$$inline_9616_nextValue$$inline_9626$$ = $itemValue$$inline_9619_itemValue$$inline_9629$$, $nextSeriesIndex$$inline_9617_nextSeriesIndex$$inline_9627$$ = $i$$inline_9618_i$$inline_9628_seriesCount$$inline_9624$$
            }
          }
        }
        $currentValue$$inline_9615_currentValue$$inline_9625_nextDownSeriesIndex$$inline_6072$$ = $nextSeriesIndex$$inline_9617_nextSeriesIndex$$inline_9627$$;
        $context$$inline_6066_isRTL$$inline_6075$$ = D.$DvtAgent$$.$isRightToLeft$($context$$inline_6066_isRTL$$inline_6075$$);
        if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$inline_6065_event$$550_next$$7$$) && 40 == $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ && 0 < $navigables$$6_seriesIndex$$inline_6067$$) {
          $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $navigables$$6_seriesIndex$$inline_6067$$ - 1
        }else {
          if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$inline_6065_event$$550_next$$7$$) && 38 == $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ && $navigables$$6_seriesIndex$$inline_6067$$ < $i$$646_seriesCount$$inline_6069$$ - 1) {
            $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $navigables$$6_seriesIndex$$inline_6067$$ + 1
          }else {
            if(!D.$DvtChartTypeUtils$$.$isStacked$($chart$$inline_6065_event$$550_next$$7$$) && 38 == $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ && $nextUpSeriesIndex$$inline_6071_seriesCount$$inline_9614$$ != D.$JSCompiler_alias_NULL$$) {
              $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $nextUpSeriesIndex$$inline_6071_seriesCount$$inline_9614$$
            }else {
              if(!D.$DvtChartTypeUtils$$.$isStacked$($chart$$inline_6065_event$$550_next$$7$$) && 40 == $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ && $currentValue$$inline_9615_currentValue$$inline_9625_nextDownSeriesIndex$$inline_6072$$ != D.$JSCompiler_alias_NULL$$) {
                $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $currentValue$$inline_9615_currentValue$$inline_9625_nextDownSeriesIndex$$inline_6072$$
              }else {
                if(39 == $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ && $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ < $groupCount$$inline_6070$$ - 1 && !$context$$inline_6066_isRTL$$inline_6075$$) {
                  $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $navigables$$6_seriesIndex$$inline_6067$$, $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ += 1
                }else {
                  if(37 == $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ && 0 < $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ && !$context$$inline_6066_isRTL$$inline_6075$$) {
                    $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $navigables$$6_seriesIndex$$inline_6067$$, $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ -= 1
                  }else {
                    if(39 == $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ && 0 < $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ && $context$$inline_6066_isRTL$$inline_6075$$) {
                      $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $navigables$$6_seriesIndex$$inline_6067$$, $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ -= 1
                    }else {
                      if(37 == $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ && $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ < $groupCount$$inline_6070$$ - 1 && $context$$inline_6066_isRTL$$inline_6075$$) {
                        $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ = $navigables$$6_seriesIndex$$inline_6067$$, $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$ += 1
                      }else {
                        $chart$$inline_6065_event$$550_next$$7$$ = this;
                        break a
                      }
                    }
                  }
                }
              }
            }
          }
        }
        b: {
          for(window.i = 0;window.i < $chart$$inline_6065_event$$550_next$$7$$.$_peers$.length;window.i++) {
            if($chart$$inline_6065_event$$550_next$$7$$.$_peers$[window.i].$getSeriesIndex$() == $chartObjs_keyCode$$inline_6064_nextSeriesIndex$$inline_6073_seriesIndex$$inline_9632$$ && $chart$$inline_6065_event$$550_next$$7$$.$_peers$[window.i].$getGroupIndex$() == $chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$) {
              $chart$$inline_6065_event$$550_next$$7$$ = $chart$$inline_6065_event$$550_next$$7$$.$_peers$[window.i];
              break b
            }
          }
          $chart$$inline_6065_event$$550_next$$7$$ = D.$JSCompiler_alias_NULL$$
        }
      }
    }else {
      if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$151_groupIndex$$inline_6068_groupIndex$$inline_9633_keyCode$$27_nextGroupIndex$$inline_6074$$) && (38 == $chart$$inline_6065_event$$550_next$$7$$.keyCode || 40 == $chart$$inline_6065_event$$550_next$$7$$.keyCode)) {
        $chart$$inline_6065_event$$550_next$$7$$.clone(), $chart$$inline_6065_event$$550_next$$7$$.keyCode -= 1
      }
      $chart$$inline_6065_event$$550_next$$7$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $chart$$inline_6065_event$$550_next$$7$$, $navigables$$6_seriesIndex$$inline_6067$$)
    }
  }
  return $chart$$inline_6065_event$$550_next$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$() : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  (0,D.$JSCompiler_StaticMethods_isNavigable$$)(this) && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$, this.$showHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  (0,D.$JSCompiler_StaticMethods_isNavigable$$)(this) && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_StaticMethods_isNavigable$$ = function $$JSCompiler_StaticMethods_isNavigable$$$($JSCompiler_StaticMethods_isNavigable$self$$) {
  return-1 != $JSCompiler_StaticMethods_isNavigable$self$$.$getGroupIndex$() && -1 != $JSCompiler_StaticMethods_isNavigable$self$$.$getSeriesIndex$()
};
D.$DvtChartDataItem$$ = function $$DvtChartDataItem$$$($id$$257$$, $series$$1$$, $group$$19$$) {
  this.Init($id$$257$$, $series$$1$$, $group$$19$$)
};
(0,D.$goog$exportSymbol$$)("DvtChartDataItem", D.$DvtChartDataItem$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataItem$$, D.$DvtObj$$, "DvtChartDataItem");
D.$DvtChartDataItem$$.prototype.Init = function $$DvtChartDataItem$$$$Init$($id$$258$$, $series$$2$$, $group$$20$$) {
  this.$_id$ = $id$$258$$;
  this.$_series$ = $series$$2$$;
  this.$_group$ = $group$$20$$
};
D.$DvtChartDataItem$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtChartDataItem$$.prototype.getId = D.$DvtChartDataItem$$.prototype.getId;
D.$DvtChartDataItem$$.prototype.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$DvtChartDataItem$$.prototype.getSeries = D.$DvtChartDataItem$$.prototype.$getSeries$;
D.$DvtChartDataItem$$.prototype.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$DvtChartDataItem$$.prototype.getGroup = D.$DvtChartDataItem$$.prototype.$getGroup$;
D.$DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($dataItem$$3$$) {
  return $dataItem$$3$$ instanceof D.$DvtChartDataItem$$ ? this.$_group$ === $dataItem$$3$$.$getGroup$() && this.$_series$ === $dataItem$$3$$.$getSeries$() : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDefaults$$ = function $$DvtChartDefaults$$$() {
  this.Init({skyros:D.$DvtChartDefaults$VERSION_1$$, alta:D.$DvtChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtChartDefaults");
D.$DvtChartDefaults$SKIN_ALTA$$ = {skin:"alta", title:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;")}, subtitle:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #252525;")}, footnote:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{seriesEffect:"color", colors:D.$DvtCSSStyle$COLORS_ALTA$$, sliceLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), 
dataLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtChartDefaults$VERSION_1$$ = {skin:"skyros", emptyText:D.$JSCompiler_alias_NULL$$, type:"bar", stack:"off", orientation:"vertical", polarGridShape:"circle", selection:"none", hideAndShowBehavior:"none", zoomAndScroll:"off", hoverBehavior:"none", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", timeAxisType:"disabled", __sparkBarSpacing:"subpixel", __spark:D.$JSCompiler_alias_FALSE$$, dataCursor:"auto", dataCursorBehavior:"auto", title:{style:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b; font-weight: bold"), 
hAlign:"start"}, subtitle:{style:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b;")}, footnote:{style:new D.$DvtCSSStyle$$("font-size: 10px; color: #333333;"), hAlign:"start"}, titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, xAxis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, layout:{gapRatio:1}}, yAxis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, 
minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, layout:{gapRatio:1}}, y2Axis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, layout:{gapRatio:1}, alignTickMarks:"on"}, plotArea:{backgroundColor:D.$JSCompiler_alias_NULL$$}, legend:{position:"auto", rendered:"on", layout:{gapRatio:1}}, overview:{rendered:"off"}, styleDefaults:{colors:D.$DvtCSSStyle$COLORS_SKYROS$$, patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), 
shapes:"square circle diamond plus triangleDown triangleUp".split(" "), seriesEffect:"gradient", threeDEffect:"off", groupTooltipType:"auto", seriesTooltipType:"auto", valueTooltipType:"auto", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineWidth:3, lineStyle:"solid", markerDisplayed:"off", markerColor:D.$JSCompiler_alias_NULL$$, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", marqueeBorderColor:"rgba(0,0,0,0.2)", 
pieFeelerColor:"#BAC5D6", selectedInnerColor:"#ffffff", selectedOuterColor:"#5a5a5a", sliceLabelPosition:"auto", sliceLabelStyle:new D.$DvtCSSStyle$$("font-size: 11px;"), sliceLabelType:"percent", otherColor:"#4b4b4b", dataLabelStyle:new D.$DvtCSSStyle$$("font-size: 11px;"), dataLabelPosition:"auto", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, _scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E"}, layout:{gapRatio:D.$JSCompiler_alias_NULL$$, 
outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisTopGap:6, legendMaxSize:0.3, legendGap:10, axisMaxSize:0.33, tickLabelGapHeight:5, tickLabelGapWidth:7}, _resources:{}};
D.$DvtChartDefaults$getGapSize$$ = function $$DvtChartDefaults$getGapSize$$$($chart$$6$$, $defaultSize$$4$$) {
  return window.Math.ceil($defaultSize$$4$$ * $chart$$6$$.$getGapRatio$())
};
D.$DvtChartAxisUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisUtils$$, D.$DvtObj$$, "DvtChartAxisUtils");
D.$DvtChartAxisUtils$$.$_BAR_AXIS_OFFSET$ = 0.5;
D.$DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($chart$$16$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$16$$) ? "tangential" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$16$$) ? D.$DvtAgent$$.$isRightToLeft$($chart$$16$$.$_context$) ? "right" : "left" : "bottom"
};
D.$DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($chart$$17$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$17$$) ? "radial" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$17$$) ? "bottom" : D.$DvtAgent$$.$isRightToLeft$($chart$$17$$.$_context$) ? "right" : "left"
};
D.$DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($chart$$18$$) {
  return D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$18$$) ? "top" : D.$DvtAgent$$.$isRightToLeft$($chart$$18$$.$_context$) ? "left" : "right"
};
D.$DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($chart$$19$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$19$$) ? "disabled" != $chart$$19$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($chart$$20$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$20$$) ? "disabled" == $chart$$20$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$getBarAxisOffset$ = function $$DvtChartAxisUtils$$$$getBarAxisOffset$$($chart$$21$$) {
  var $bLineOrArea$$ = D.$DvtChartTypeUtils$$.$isLine$($chart$$21$$) || D.$DvtChartTypeUtils$$.$isArea$($chart$$21$$);
  return D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$21$$) || $bLineOrArea$$ && 1 == D.$DvtChartDataUtils$$.$getGroupCount$($chart$$21$$) ? D.$DvtChartAxisUtils$$.$_BAR_AXIS_OFFSET$ : 0
};
D.$DvtChartAxisUtils$$.$areYAxisLabelsRendered$ = function $$DvtChartAxisUtils$$$$areYAxisLabelsRendered$$($chart$$22_options$$176$$) {
  $chart$$22_options$$176$$ = $chart$$22_options$$176$$.$getOptions$().yAxis;
  return"off" == $chart$$22_options$$176$$.rendered || $chart$$22_options$$176$$.tickLabel && $chart$$22_options$$176$$.tickLabel.rendered && "on" != $chart$$22_options$$176$$.tickLabel.rendered ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($chart$$23$$) {
  return!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$23$$) || D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$23$$) ? D.$JSCompiler_alias_FALSE$$ : "polygon" == $chart$$23$$.$getOptions$().polarGridShape
};
D.$DvtChartDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataUtils$$, D.$DvtObj$$, "DvtChartDataUtils");
D.$DvtChartDataUtils$$.$_TYPE_LABEL$ = "label";
D.$DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($chart$$27$$) {
  var $options$$178_seriesCount$$2$$ = $chart$$27$$.$getOptions$();
  if(!$options$$178_seriesCount$$2$$ || !$options$$178_seriesCount$$2$$.series || 1 > $options$$178_seriesCount$$2$$.series.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $options$$178_seriesCount$$2$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$27$$), $i$$619$$ = 0;$i$$619$$ < $options$$178_seriesCount$$2$$;$i$$619$$++) {
    var $seriesItem$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$27$$, $i$$619$$);
    if($seriesItem$$2$$ && $seriesItem$$2$$.items && 1 <= $seriesItem$$2$$.items.length) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($chart$$28$$, $seriesIndex$$13$$) {
  var $dataItems$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$28$$, $seriesIndex$$13$$).items;
  if($dataItems$$2$$) {
    for(var $i$$620$$ = 0;$i$$620$$ < $dataItems$$2$$.length;$i$$620$$++) {
      if($dataItems$$2$$[$i$$620$$] != D.$JSCompiler_alias_NULL$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($chart$$29$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$29$$)) {
    for(var $maxGroups$$ = 0, $arSeriesStyle_options$$179$$ = $chart$$29$$.$_seriesStyleArray$, $bundle$$9_seriesCount$$3$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$29$$), $group$$21_i$$621$$ = 0;$group$$21_i$$621$$ < $bundle$$9_seriesCount$$3$$;$group$$21_i$$621$$++) {
      var $series$$3_seriesItem$$4$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$29$$, $group$$21_i$$621$$);
      $series$$3_seriesItem$$4$$ != D.$JSCompiler_alias_NULL$$ && 0 > D.$DvtArrayUtils$$.$getIndex$($arSeriesStyle_options$$179$$, $series$$3_seriesItem$$4$$) && $arSeriesStyle_options$$179$$.push($series$$3_seriesItem$$4$$);
      if(($series$$3_seriesItem$$4$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$29$$, $group$$21_i$$621$$)) && $series$$3_seriesItem$$4$$.items && $series$$3_seriesItem$$4$$.items.length > $maxGroups$$) {
        $maxGroups$$ = $series$$3_seriesItem$$4$$.items.length
      }
      D.$DvtChartTypeUtils$$.$isFunnel$($chart$$29$$) && ($series$$3_seriesItem$$4$$.displayInLegend = "off")
    }
    $arSeriesStyle_options$$179$$ = $chart$$29$$.$getOptions$();
    $arSeriesStyle_options$$179$$.groups || ($arSeriesStyle_options$$179$$.groups = []);
    for($bundle$$9_seriesCount$$3$$ = $chart$$29$$.$Bundle$;$arSeriesStyle_options$$179$$.groups.length < $maxGroups$$;) {
      $group$$21_i$$621$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$9_seriesCount$$3$$, "DEFAULT_GROUP_NAME", $arSeriesStyle_options$$179$$.groups.length + 1), $arSeriesStyle_options$$179$$.groups.push($group$$21_i$$621$$)
    }
    D.$DvtChartTypeUtils$$.$isFunnel$($chart$$29$$) && ($arSeriesStyle_options$$179$$.styleDefaults.groupTooltipType = "none")
  }
};
D.$DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($chart$$30$$) {
  return $chart$$30$$.$getOptions$().series.length
};
D.$DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($chart$$31$$, $seriesIndex$$14$$) {
  var $seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$31$$, $seriesIndex$$14$$);
  return $seriesItem$$5$$ ? $seriesItem$$5$$.id ? $seriesItem$$5$$.id : $seriesItem$$5$$.name || "" == $seriesItem$$5$$.name ? $seriesItem$$5$$.name : (0,window.String)($seriesIndex$$14$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($chart$$32$$, $seriesIndex$$15$$) {
  var $seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$32$$, $seriesIndex$$15$$);
  return $seriesItem$$6$$ && ($seriesItem$$6$$.name || "" == $seriesItem$$6$$.name) ? $seriesItem$$6$$.name : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($chart$$33$$, $series$$4$$) {
  for(var $numSeries$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$33$$), $seriesIndex$$16$$ = 0;$seriesIndex$$16$$ < $numSeries$$;$seriesIndex$$16$$++) {
    if(D.$DvtChartDataUtils$$.$getSeries$($chart$$33$$, $seriesIndex$$16$$) == $series$$4$$) {
      return $seriesIndex$$16$$
    }
  }
  return-1
};
D.$DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($chart$$34$$, $series$$5$$) {
  return $series$$5$$ ? D.$DvtArrayUtils$$.$getIndex$($chart$$34$$.$_seriesStyleArray$, $series$$5$$) : D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$34$$, $series$$5$$)
};
D.$DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($chart$$35$$, $seriesIndex$$17$$) {
  if((0,window.isNaN)($seriesIndex$$17$$) || $seriesIndex$$17$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $options$$180$$ = $chart$$35$$.$getOptions$();
  if($options$$180$$.series && $options$$180$$.series.length > $seriesIndex$$17$$) {
    return $options$$180$$.series[$seriesIndex$$17$$]
  }
};
D.$DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($chart$$36_seriesItem$$7$$, $seriesIndex$$18$$, $groupIndex$$7$$) {
  if((0,window.isNaN)($groupIndex$$7$$) || $groupIndex$$7$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($chart$$36_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$36_seriesItem$$7$$, $seriesIndex$$18$$)) && $chart$$36_seriesItem$$7$$.items && 0 <= $groupIndex$$7$$ && $chart$$36_seriesItem$$7$$.items.length > $groupIndex$$7$$) {
    return $chart$$36_seriesItem$$7$$.items[$groupIndex$$7$$]
  }
};
D.$DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($chart$$37$$) {
  return $chart$$37$$.$getOptions$().groups.length
};
D.$DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($chart$$38$$, $groupIndex$$8$$) {
  var $group$$22_groupItems$$ = $chart$$38$$.$getOptions$().groups;
  return 0 <= $groupIndex$$8$$ && $groupIndex$$8$$ < $group$$22_groupItems$$.length && ($group$$22_groupItems$$ = $group$$22_groupItems$$[$groupIndex$$8$$]) ? $group$$22_groupItems$$.id ? $group$$22_groupItems$$.id : $group$$22_groupItems$$.name || "" == $group$$22_groupItems$$.name ? $group$$22_groupItems$$.name : $group$$22_groupItems$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($chart$$39$$, $group$$23$$) {
  return D.$DvtChartDataUtils$$.$getGroups$($chart$$39$$).indexOf($group$$23$$)
};
D.$DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($chart$$40$$, $groupIndex$$9$$) {
  var $group$$24_groupItems$$1$$ = $chart$$40$$.$getOptions$().groups;
  return 0 <= $groupIndex$$9$$ && $groupIndex$$9$$ < $group$$24_groupItems$$1$$.length && ($group$$24_groupItems$$1$$ = $group$$24_groupItems$$1$$[$groupIndex$$9$$]) ? $group$$24_groupItems$$1$$.name ? $group$$24_groupItems$$1$$.name : $group$$24_groupItems$$1$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($chart$$41$$) {
  for(var $groupCount$$ = $chart$$41$$.$getOptions$().groups.length, $groups$$11$$ = [], $groupIndex$$10$$ = 0;$groupIndex$$10$$ < $groupCount$$;$groupIndex$$10$$++) {
    $groups$$11$$.push(D.$DvtChartDataUtils$$.$getGroup$($chart$$41$$, $groupIndex$$10$$))
  }
  return $groups$$11$$
};
D.$DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($chart$$42_dataItem$$10$$, $seriesIndex$$19$$, $groupIndex$$11$$) {
  $chart$$42_dataItem$$10$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$42_dataItem$$10$$, $seriesIndex$$19$$, $groupIndex$$11$$);
  if($chart$$42_dataItem$$10$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,window.isNaN)($chart$$42_dataItem$$10$$)) {
      if($chart$$42_dataItem$$10$$.value != D.$JSCompiler_alias_NULL$$) {
        return $chart$$42_dataItem$$10$$.value
      }
      if($chart$$42_dataItem$$10$$.y != D.$JSCompiler_alias_NULL$$) {
        return $chart$$42_dataItem$$10$$.y
      }
    }else {
      return $chart$$42_dataItem$$10$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($chart$$43$$, $seriesIndex$$20$$, $groupIndex$$12$$, $bIncludeHiddenSeries$$) {
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$43$$)) {
    for(var $bCombo$$ = D.$DvtChartTypeUtils$$.$isCombo$($chart$$43$$), $seriesType$$1$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$43$$, $seriesIndex$$20$$), $bAssignedToY2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$43$$, $seriesIndex$$20$$), $total$$10$$ = 0, $i$$622$$ = 0;$i$$622$$ <= $seriesIndex$$20$$;$i$$622$$++) {
      if(($bIncludeHiddenSeries$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$43$$, $i$$622$$)) && !($bCombo$$ && $seriesType$$1$$ != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$43$$, $i$$622$$)) && $bAssignedToY2$$ == D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$43$$, $i$$622$$)) {
        var $groupValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$43$$, $i$$622$$, $groupIndex$$12$$), $total$$10$$ = $total$$10$$ + ($groupValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($groupValue$$) ? 0 : $groupValue$$)
      }
    }
    return $total$$10$$
  }
  return D.$DvtChartDataUtils$$.getValue($chart$$43$$, $seriesIndex$$20$$, $groupIndex$$12$$)
};
D.$DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($chart$$44$$, $dataItem$$11_seriesIndex$$21_xVal$$, $groupIndex$$13$$) {
  if(D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$44$$)) {
    return $groupIndex$$13$$
  }
  $dataItem$$11_seriesIndex$$21_xVal$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$44$$, $dataItem$$11_seriesIndex$$21_xVal$$, $groupIndex$$13$$);
  if($dataItem$$11_seriesIndex$$21_xVal$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $dataItem$$11_seriesIndex$$21_xVal$$ = $dataItem$$11_seriesIndex$$21_xVal$$.x;
  return(0,window.isNaN)($dataItem$$11_seriesIndex$$21_xVal$$) ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$44$$, $groupIndex$$13$$) : $dataItem$$11_seriesIndex$$21_xVal$$
};
D.$DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($chart$$45$$, $seriesIndex$$22$$) {
  var $dataItem$$12$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$45$$, $seriesIndex$$22$$, 0);
  return!(0,window.isNaN)($dataItem$$12$$) || $dataItem$$12$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $dataItem$$12$$.targetValue
};
D.$DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($chart$$46_minMax$$1$$, $seriesIndex$$23_xVal$$1$$, $groupIndex$$14$$) {
  $seriesIndex$$23_xVal$$1$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$46_minMax$$1$$, $seriesIndex$$23_xVal$$1$$, $groupIndex$$14$$);
  if((0,window.isNaN)($seriesIndex$$23_xVal$$1$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$46_minMax$$1$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$46_minMax$$1$$);
  return $chart$$46_minMax$$1$$.min != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$23_xVal$$1$$ < $chart$$46_minMax$$1$$.min || $chart$$46_minMax$$1$$.max != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$23_xVal$$1$$ > $chart$$46_minMax$$1$$.max ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($x1$$33$$, $y1$$29$$, $x2$$29$$, $y2$$25$$, $X$$) {
  return $y1$$29$$ + ($y2$$25$$ - $y1$$29$$) * ($X$$ - $x1$$33$$) / ($x2$$29$$ - $x1$$33$$)
};
D.$DvtChartDataUtils$$.$getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$getViewportEdgeYValues$$($chart$$47$$, $seriesIndex$$24$$) {
  var $seriesData$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$47$$, $seriesIndex$$24$$).items;
  if(!$seriesData$$) {
    return{min:D.$JSCompiler_alias_NULL$$, max:D.$JSCompiler_alias_NULL$$}
  }
  for(var $bIncludeHiddenSeries$$1$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$47$$), $max$$11_minMax$$2$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$47$$), $min$$11$$ = $max$$11_minMax$$2$$.min, $max$$11_minMax$$2$$ = $max$$11_minMax$$2$$.max, $x$$271$$, $y$$234$$, $prevX$$2$$, $prevY$$2$$, $yMin$$2$$, $yMax$$2$$, $groupIndex$$15$$ = 0;$groupIndex$$15$$ < $seriesData$$.length;$groupIndex$$15$$++) {
    if($bIncludeHiddenSeries$$1$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$47$$, $seriesIndex$$24$$, $groupIndex$$15$$)) {
      $x$$271$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$47$$, $seriesIndex$$24$$, $groupIndex$$15$$), $y$$234$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$47$$, $seriesIndex$$24$$, $groupIndex$$15$$, $bIncludeHiddenSeries$$1$$), $prevX$$2$$ != D.$JSCompiler_alias_NULL$$ && ($min$$11$$ != D.$JSCompiler_alias_NULL$$ && ($min$$11$$ > $prevX$$2$$ && $min$$11$$ < $x$$271$$) && ($yMin$$2$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$2$$, $prevY$$2$$, $x$$271$$, $y$$234$$, $min$$11$$)), 
      $max$$11_minMax$$2$$ != D.$JSCompiler_alias_NULL$$ && ($max$$11_minMax$$2$$ > $prevX$$2$$ && $max$$11_minMax$$2$$ < $x$$271$$) && ($yMax$$2$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$2$$, $prevY$$2$$, $x$$271$$, $y$$234$$, $max$$11_minMax$$2$$))), $prevX$$2$$ = $x$$271$$, $prevY$$2$$ = $y$$234$$
    }
  }
  return{min:$yMin$$2$$, max:$yMax$$2$$}
};
D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$ = function $$DvtChartDataUtils$$$$_getXAxisViewportMinMax$$($chart$$48$$) {
  var $options$$181$$ = $chart$$48$$.$getOptions$().xAxis, $isGroupAxis$$ = D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$48$$), $min$$12$$ = D.$JSCompiler_alias_NULL$$, $min$$12$$ = $options$$181$$.viewportMin != D.$JSCompiler_alias_NULL$$ ? $options$$181$$.viewportMin : $options$$181$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$48$$, $options$$181$$.viewportStartGroup) : $options$$181$$.viewportStartGroup : $options$$181$$.min, 
  $max$$12$$ = D.$JSCompiler_alias_NULL$$, $max$$12$$ = $options$$181$$.viewportMax != D.$JSCompiler_alias_NULL$$ ? $options$$181$$.viewportMax : $options$$181$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$48$$, $options$$181$$.viewportEndGroup) : $options$$181$$.viewportEndGroup : $options$$181$$.max;
  return{min:$min$$12$$, max:$max$$12$$}
};
D.$DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($chart$$49$$, $type$$197$$, $limitToViewport$$) {
  var $isY2Value$$ = "y2" == $type$$197$$;
  $isY2Value$$ && ($type$$197$$ = "y");
  var $isYValue$$ = "y" == $type$$197$$;
  if(!$isYValue$$ || !D.$DvtChartTypeUtils$$.$isBLAC$($chart$$49$$)) {
    $limitToViewport$$ = D.$JSCompiler_alias_FALSE$$
  }
  for(var $bIncludeHiddenSeries$$2$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$49$$), $isBubble$$ = "bubble" == $chart$$49$$.$getType$(), $maxValue$$16$$ = -window.Infinity, $minValue$$14$$ = window.Infinity, $options$$182$$ = $chart$$49$$.$getOptions$(), $seriesCount$$4$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$49$$), $seriesIndex$$25$$ = 0;$seriesIndex$$25$$ < $seriesCount$$4$$;$seriesIndex$$25$$++) {
    var $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$49$$, $seriesIndex$$25$$);
    if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$49$$, $seriesIndex$$25$$)) {
      var $groupIndex$$16_i$$623_isY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$49$$, $seriesIndex$$25$$);
      if(!($isYValue$$ && $isY2Value$$ != $groupIndex$$16_i$$623_isY2Series$$) && ($edgeValues_refObjects_seriesData$$1_seriesItem$$9$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$.items)) {
        for($groupIndex$$16_i$$623_isY2Series$$ = 0;$groupIndex$$16_i$$623_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$.length;$groupIndex$$16_i$$623_isY2Series$$++) {
          if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$49$$, $seriesIndex$$25$$, $groupIndex$$16_i$$623_isY2Series$$)) {
            "object" != typeof $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$[$groupIndex$$16_i$$623_isY2Series$$] && ($edgeValues_refObjects_seriesData$$1_seriesItem$$9$$[$groupIndex$$16_i$$623_isY2Series$$] = {y:$edgeValues_refObjects_seriesData$$1_seriesItem$$9$$[$groupIndex$$16_i$$623_isY2Series$$]});
            var $data$$83_items$$15$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$[$groupIndex$$16_i$$623_isY2Series$$], $timeAxisGroupLabel_value$$125$$;
            $isYValue$$ ? $timeAxisGroupLabel_value$$125$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$49$$, $seriesIndex$$25$$, $groupIndex$$16_i$$623_isY2Series$$, $bIncludeHiddenSeries$$2$$) : $data$$83_items$$15$$ != D.$JSCompiler_alias_NULL$$ && ($options$$182$$.timeAxisType && ("enabled" == $options$$182$$.timeAxisType && $data$$83_items$$15$$.x == D.$JSCompiler_alias_NULL$$) && ($timeAxisGroupLabel_value$$125$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$49$$, $groupIndex$$16_i$$623_isY2Series$$), 
            (0,window.isNaN)($timeAxisGroupLabel_value$$125$$) || ($data$$83_items$$15$$.x = $timeAxisGroupLabel_value$$125$$)), $timeAxisGroupLabel_value$$125$$ = $data$$83_items$$15$$[$type$$197$$]);
            if((!$limitToViewport$$ || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$49$$, $seriesIndex$$25$$, $groupIndex$$16_i$$623_isY2Series$$)) && !(0,window.isNaN)($timeAxisGroupLabel_value$$125$$)) {
              var $j$$82_radius$$23$$ = 0;
              $isBubble$$ && $data$$83_items$$15$$.markerSize && ($isYValue$$ ? $j$$82_radius$$23$$ = $data$$83_items$$15$$._yAxisRadius : "x" == $type$$197$$ && ($j$$82_radius$$23$$ = $data$$83_items$$15$$._xAxisRadius));
              $maxValue$$16$$ = window.Math.max($maxValue$$16$$, $timeAxisGroupLabel_value$$125$$ + $j$$82_radius$$23$$);
              $minValue$$14$$ = window.Math.min($minValue$$14$$, $timeAxisGroupLabel_value$$125$$ - $j$$82_radius$$23$$)
            }
          }
        }
        $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$ = D.$JSCompiler_alias_NULL$$;
        "x" == $type$$197$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$49$$) : "y" == $type$$197$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$49$$) : "y2" == $type$$197$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$9$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$49$$));
        if($edgeValues_refObjects_seriesData$$1_seriesItem$$9$$ != D.$JSCompiler_alias_NULL$$) {
          for($groupIndex$$16_i$$623_isY2Series$$ = 0;$groupIndex$$16_i$$623_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$.length;$groupIndex$$16_i$$623_isY2Series$$++) {
            if($data$$83_items$$15$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$[$groupIndex$$16_i$$623_isY2Series$$].items, $data$$83_items$$15$$ != D.$JSCompiler_alias_NULL$$) {
              for($j$$82_radius$$23$$ = 0;$j$$82_radius$$23$$ < $data$$83_items$$15$$.length;$j$$82_radius$$23$$++) {
                if($data$$83_items$$15$$[$j$$82_radius$$23$$] != D.$JSCompiler_alias_NULL$$) {
                  var $min$$13$$ = $data$$83_items$$15$$[$j$$82_radius$$23$$].min, $max$$13$$ = $data$$83_items$$15$$[$j$$82_radius$$23$$].max, $val$$78$$ = (0,window.isNaN)($data$$83_items$$15$$[$j$$82_radius$$23$$]) ? $data$$83_items$$15$$[$j$$82_radius$$23$$].value : $data$$83_items$$15$$[$j$$82_radius$$23$$];
                  $min$$13$$ != D.$JSCompiler_alias_NULL$$ && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $min$$13$$), $maxValue$$16$$ = window.Math.max($maxValue$$16$$, $min$$13$$));
                  $max$$13$$ != D.$JSCompiler_alias_NULL$$ && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $max$$13$$), $maxValue$$16$$ = window.Math.max($maxValue$$16$$, $max$$13$$));
                  $val$$78$$ != D.$JSCompiler_alias_NULL$$ && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $val$$78$$), $maxValue$$16$$ = window.Math.max($maxValue$$16$$, $val$$78$$))
                }
              }
            }
          }
        }
        $limitToViewport$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$9$$ = D.$DvtChartDataUtils$$.$getViewportEdgeYValues$($chart$$49$$, $seriesIndex$$25$$), $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$.min != D.$JSCompiler_alias_NULL$$ && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$.min), $maxValue$$16$$ = window.Math.max($maxValue$$16$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$.min)), $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$.max != 
        D.$JSCompiler_alias_NULL$$ && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$.max), $maxValue$$16$$ = window.Math.max($maxValue$$16$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$9$$.max)))
      }
    }
  }
  return{min:$minValue$$14$$, max:$maxValue$$16$$}
};
D.$DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($chart$$50$$, $seriesIndex$$26$$) {
  var $seriesItem$$10$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$50$$, $seriesIndex$$26$$);
  return $seriesItem$$10$$ && "on" == $seriesItem$$10$$.assignedToY2 && D.$DvtChartTypeUtils$$.$isDualY$($chart$$50$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasMixedFrequency$ = function $$DvtChartDataUtils$$$$hasMixedFrequency$$($chart$$51$$) {
  return"mixedFrequency" == $chart$$51$$.$getOptions$().timeAxisType
};
D.$DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($chart$$52_peers$$3$$) {
  var $selection$$23$$ = $chart$$52_peers$$3$$.$getOptions$().selectedItems;
  $selection$$23$$ || ($selection$$23$$ = []);
  $chart$$52_peers$$3$$ = $chart$$52_peers$$3$$.$getObjects$();
  for(var $i$$624$$ = 0;$i$$624$$ < $selection$$23$$.length;$i$$624$$++) {
    var $id$$260$$ = $selection$$23$$[$i$$624$$].id;
    if($id$$260$$ && (!$selection$$23$$[$i$$624$$].series || !$selection$$23$$[$i$$624$$].group)) {
      for(var $j$$83$$ = 0;$j$$83$$ < $chart$$52_peers$$3$$.length;$j$$83$$++) {
        var $peer$$9$$ = $chart$$52_peers$$3$$[$j$$83$$];
        if($id$$260$$ == $peer$$9$$.$_dataItemId$) {
          $selection$$23$$[$i$$624$$].series = $peer$$9$$.$getSeries$();
          $selection$$23$$[$i$$624$$].group = $peer$$9$$.$getGroup$();
          break
        }
      }
    }
  }
  return $selection$$23$$
};
D.$DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($chart$$53_handler$$30_selectedIds$$7$$) {
  var $selection$$24$$ = [];
  if($chart$$53_handler$$30_selectedIds$$7$$ = $chart$$53_handler$$30_selectedIds$$7$$.$getSelectionHandler$()) {
    $chart$$53_handler$$30_selectedIds$$7$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($chart$$53_handler$$30_selectedIds$$7$$);
    for(var $i$$625$$ = 0;$i$$625$$ < $chart$$53_handler$$30_selectedIds$$7$$.length;$i$$625$$++) {
      var $selectedId$$2$$ = $chart$$53_handler$$30_selectedIds$$7$$[$i$$625$$];
      $selection$$24$$.push({series:$selectedId$$2$$.$getSeries$(), group:$selectedId$$2$$.$getGroup$(), id:$selectedId$$2$$.getId()})
    }
  }
  return $selection$$24$$
};
D.$DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($chart$$54_group$$25$$, $series$$6_seriesIndex$$27$$, $groupIndex$$17_i$$626$$) {
  var $handler$$31_selectedIds$$8$$ = $chart$$54_group$$25$$.$getSelectionHandler$();
  $series$$6_seriesIndex$$27$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$54_group$$25$$, $series$$6_seriesIndex$$27$$);
  $chart$$54_group$$25$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$54_group$$25$$, $groupIndex$$17_i$$626$$);
  if($handler$$31_selectedIds$$8$$ && $series$$6_seriesIndex$$27$$ != D.$JSCompiler_alias_NULL$$ && $chart$$54_group$$25$$ != D.$JSCompiler_alias_NULL$$) {
    $handler$$31_selectedIds$$8$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($handler$$31_selectedIds$$8$$);
    for($groupIndex$$17_i$$626$$ = 0;$groupIndex$$17_i$$626$$ < $handler$$31_selectedIds$$8$$.length;$groupIndex$$17_i$$626$$++) {
      var $selectedId$$3$$ = $handler$$31_selectedIds$$8$$[$groupIndex$$17_i$$626$$];
      if($selectedId$$3$$.$getSeries$() == $series$$6_seriesIndex$$27$$ && $selectedId$$3$$.$getGroup$() == $chart$$54_group$$25$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($axis$$26_chart$$55$$, $seriesIndex$$28$$, $groupIndex$$18_label$$74$$) {
  var $dataItem$$13_options$$183$$ = D.$DvtChartDataUtils$$.$getDataItem$($axis$$26_chart$$55$$, $seriesIndex$$28$$, $groupIndex$$18_label$$74$$);
  if($dataItem$$13_options$$183$$.label) {
    $groupIndex$$18_label$$74$$ = (0,window.parseFloat)($dataItem$$13_options$$183$$.label);
    if((0,window.isNaN)($groupIndex$$18_label$$74$$)) {
      return $dataItem$$13_options$$183$$.label
    }
    var $dataItem$$13_options$$183$$ = $axis$$26_chart$$55$$.$getOptions$(), $min$$14$$, $max$$14$$;
    if($axis$$26_chart$$55$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($axis$$26_chart$$55$$, $seriesIndex$$28$$) && $axis$$26_chart$$55$$.$y2Axis$ ? $axis$$26_chart$$55$$.$y2Axis$ : $axis$$26_chart$$55$$.$yAxis$) {
      $min$$14$$ = $axis$$26_chart$$55$$.$getGlobalMin$(), $max$$14$$ = $axis$$26_chart$$55$$.$getGlobalMax$(), window.majorIncrement = $axis$$26_chart$$55$$.$getMajorIncrement$()
    }
    return $groupIndex$$18_label$$74$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($dataItem$$13_options$$183$$.valueFormats, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $groupIndex$$18_label$$74$$, $min$$14$$, $max$$14$$, window.majorIncrement)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartEventUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventUtils$$, D.$DvtObj$$, "DvtChartEventUtils");
D.$DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($chart$$56$$) {
  return $chart$$56$$.$getOptions$().hideAndShowBehavior
};
D.$DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($chart$$57$$) {
  return $chart$$57$$.$getOptions$().hoverBehavior
};
D.$DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($chart$$58_options$$184$$, $category$$17$$, $visibility$$2$$) {
  var $hiddenCategories$$3_i$$627_seriesItem$$11$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$58_options$$184$$, D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$58_options$$184$$, $category$$17$$));
  if($category$$17$$ == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ && D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$58_options$$184$$) !== $visibility$$2$$) {
    D.$DvtPieChartUtils$$.$setOtherSliceVisibility$($chart$$58_options$$184$$, $visibility$$2$$)
  }else {
    if($hiddenCategories$$3_i$$627_seriesItem$$11$$ && $hiddenCategories$$3_i$$627_seriesItem$$11$$.visibility !== $visibility$$2$$) {
      $hiddenCategories$$3_i$$627_seriesItem$$11$$.visibility = $visibility$$2$$
    }else {
      if(!D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$58_options$$184$$)) {
        return D.$JSCompiler_alias_FALSE$$
      }
      $hiddenCategories$$3_i$$627_seriesItem$$11$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$58_options$$184$$);
      "hidden" == $visibility$$2$$ ? $hiddenCategories$$3_i$$627_seriesItem$$11$$.push($category$$17$$) : $hiddenCategories$$3_i$$627_seriesItem$$11$$.splice(D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$3_i$$627_seriesItem$$11$$, $category$$17$$), 1);
      if(($chart$$58_options$$184$$ = $chart$$58_options$$184$$.$getOptions$()) && $chart$$58_options$$184$$.legend && $chart$$58_options$$184$$.legend.sections) {
        for($hiddenCategories$$3_i$$627_seriesItem$$11$$ = 0;$hiddenCategories$$3_i$$627_seriesItem$$11$$ < $chart$$58_options$$184$$.legend.sections.length;$hiddenCategories$$3_i$$627_seriesItem$$11$$++) {
          var $dataSection$$1$$ = $chart$$58_options$$184$$.legend.sections[$hiddenCategories$$3_i$$627_seriesItem$$11$$];
          if($dataSection$$1$$ && $dataSection$$1$$.items) {
            for(var $j$$84$$ = 0;$j$$84$$ < $dataSection$$1$$.items.length;$j$$84$$++) {
              $dataSection$$1$$.items[$j$$84$$].id == $category$$17$$ && ($dataSection$$1$$.items[$j$$84$$].categoryVisibility = $visibility$$2$$)
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($chart$$59$$) {
  return"off" != $chart$$59$$.$getOptions$().zoomAndScroll
};
D.$DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($chart$$60_zs$$) {
  $chart$$60_zs$$ = $chart$$60_zs$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$60_zs$$ || "delayed" == $chart$$60_zs$$
};
D.$DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($chart$$61_zs$$1$$) {
  $chart$$61_zs$$1$$ = $chart$$61_zs$$1$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$61_zs$$1$$ || "liveScrollOnly" == $chart$$61_zs$$1$$
};
D.$DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($chart$$62_zs$$2$$) {
  $chart$$62_zs$$2$$ = $chart$$62_zs$$2$$.$getOptions$().zoomAndScroll;
  return"delayed" == $chart$$62_zs$$2$$ || "delayedScrollOnly" == $chart$$62_zs$$2$$
};
D.$DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($chart$$63$$, $selection$$25$$) {
  for(var $ret$$106$$ = [], $i$$628$$ = 0;$i$$628$$ < $selection$$25$$.length;$i$$628$$++) {
    var $item$$28_otherItems$$ = $selection$$25$$[$i$$628$$];
    $item$$28_otherItems$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($item$$28_otherItems$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$63$$), $ret$$106$$ = $ret$$106$$.concat($item$$28_otherItems$$)) : $ret$$106$$.push($item$$28_otherItems$$)
  }
  return $ret$$106$$
};
D.$DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($event$$547$$) {
  $event$$547$$.x != D.$JSCompiler_alias_NULL$$ && ($event$$547$$.x -= 1);
  $event$$547$$.$w$ != D.$JSCompiler_alias_NULL$$ && ($event$$547$$.$w$ += 2);
  $event$$547$$.y != D.$JSCompiler_alias_NULL$$ && ($event$$547$$.y -= 1);
  $event$$547$$.$h$ != D.$JSCompiler_alias_NULL$$ && ($event$$547$$.$h$ += 2)
};
D.$DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($chart$$64$$, $event$$548$$) {
  for(var $peers$$4$$ = $chart$$64$$.$getObjects$(), $boundedPeers$$ = [], $i$$629$$ = 0;$i$$629$$ < $peers$$4$$.length;$i$$629$$++) {
    var $peer$$10$$ = $peers$$4$$[$i$$629$$], $dataPos$$ = $peer$$10$$.$_dataPos$;
    if($dataPos$$) {
      var $dataPos$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($chart$$64$$.$_plotArea$, $dataPos$$), $withinY$$ = $event$$548$$.y == D.$JSCompiler_alias_NULL$$ || $dataPos$$.y >= $event$$548$$.y && $dataPos$$.y <= $event$$548$$.y + $event$$548$$.$h$;
      ($event$$548$$.x == D.$JSCompiler_alias_NULL$$ || $dataPos$$.x >= $event$$548$$.x && $dataPos$$.x <= $event$$548$$.x + $event$$548$$.$w$) && $withinY$$ && $boundedPeers$$.push($peer$$10$$)
    }
  }
  return $boundedPeers$$
};
D.$DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($chart$$65$$, $event$$549_maxPt_xMinMax$$1$$, $limitExtent$$) {
  var $plotArea$$1_yMinMax$$1$$ = $chart$$65$$.$_plotArea$, $coords$$12_minPt$$ = $plotArea$$1_yMinMax$$1$$.$stageToLocal$(new D.$DvtPoint$$($event$$549_maxPt_xMinMax$$1$$.x, $event$$549_maxPt_xMinMax$$1$$.y));
  $event$$549_maxPt_xMinMax$$1$$ = $plotArea$$1_yMinMax$$1$$.$stageToLocal$(new D.$DvtPoint$$($event$$549_maxPt_xMinMax$$1$$.x + $event$$549_maxPt_xMinMax$$1$$.$w$, $event$$549_maxPt_xMinMax$$1$$.y + $event$$549_maxPt_xMinMax$$1$$.$h$));
  $coords$$12_minPt$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$65$$, $coords$$12_minPt$$.x, $event$$549_maxPt_xMinMax$$1$$.x, $coords$$12_minPt$$.y, $event$$549_maxPt_xMinMax$$1$$.y);
  $event$$549_maxPt_xMinMax$$1$$ = {};
  var $plotArea$$1_yMinMax$$1$$ = {}, $y2MinMax$$ = {}, $startEndGroup$$1$$ = {};
  $chart$$65$$.$xAxis$ && ($event$$549_maxPt_xMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$65$$.$xAxis$, $coords$$12_minPt$$.$xMin$, $coords$$12_minPt$$.$xMax$, $limitExtent$$), $startEndGroup$$1$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$65$$.$xAxis$, $event$$549_maxPt_xMinMax$$1$$.min, $event$$549_maxPt_xMinMax$$1$$.max));
  $chart$$65$$.$yAxis$ && ($plotArea$$1_yMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$65$$.$yAxis$, $coords$$12_minPt$$.$yMin$, $coords$$12_minPt$$.$yMax$, $limitExtent$$));
  $chart$$65$$.$y2Axis$ && ($y2MinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$65$$.$y2Axis$, $coords$$12_minPt$$.$yMin$, $coords$$12_minPt$$.$yMax$, $limitExtent$$));
  return{$xMin$:$event$$549_maxPt_xMinMax$$1$$.min, $xMax$:$event$$549_maxPt_xMinMax$$1$$.max, $yMin$:$plotArea$$1_yMinMax$$1$$.min, $yMax$:$plotArea$$1_yMinMax$$1$$.max, $y2Min$:$y2MinMax$$.min, $y2Max$:$y2MinMax$$.max, $startGroup$:$startEndGroup$$1$$.$startGroup$, $endGroup$:$startEndGroup$$1$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($axis$$27$$, $center$$16_min$$15_minCoord$$7$$, $max$$15_maxCoord$$7$$, $limitExtent$$1_minExtent$$) {
  $center$$16_min$$15_minCoord$$7$$ = $axis$$27$$.$getUnboundedValueAt$($center$$16_min$$15_minCoord$$7$$);
  $max$$15_maxCoord$$7$$ = $axis$$27$$.$getUnboundedValueAt$($max$$15_maxCoord$$7$$);
  return $limitExtent$$1_minExtent$$ ? ($limitExtent$$1_minExtent$$ = $axis$$27$$.$getMinimumExtent$(), $max$$15_maxCoord$$7$$ - $center$$16_min$$15_minCoord$$7$$ < $limitExtent$$1_minExtent$$ && ($center$$16_min$$15_minCoord$$7$$ = ($max$$15_maxCoord$$7$$ + $center$$16_min$$15_minCoord$$7$$) / 2, $max$$15_maxCoord$$7$$ = $center$$16_min$$15_minCoord$$7$$ + $limitExtent$$1_minExtent$$ / 2, $center$$16_min$$15_minCoord$$7$$ -= $limitExtent$$1_minExtent$$ / 2), D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$27$$, 
  $center$$16_min$$15_minCoord$$7$$, $max$$15_maxCoord$$7$$)) : {min:$center$$16_min$$15_minCoord$$7$$, max:$max$$15_maxCoord$$7$$}
};
D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($chart$$66$$, $deltas$$1_xMinDelta$$, $xMaxDelta_xMinMax$$2$$, $yMinDelta_yMinMax$$2$$, $y2MinMax$$1_yMaxDelta$$) {
  $deltas$$1_xMinDelta$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$66$$, $deltas$$1_xMinDelta$$, $xMaxDelta_xMinMax$$2$$, $yMinDelta_yMinMax$$2$$, $y2MinMax$$1_yMaxDelta$$);
  $xMaxDelta_xMinMax$$2$$ = {};
  $yMinDelta_yMinMax$$2$$ = {};
  $y2MinMax$$1_yMaxDelta$$ = {};
  var $startEndGroup$$2$$ = {};
  $chart$$66$$.$xAxis$ && ($xMaxDelta_xMinMax$$2$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$66$$.$xAxis$, $deltas$$1_xMinDelta$$.$xMin$, $deltas$$1_xMinDelta$$.$xMax$), $startEndGroup$$2$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$66$$.$xAxis$, $xMaxDelta_xMinMax$$2$$.min, $xMaxDelta_xMinMax$$2$$.max));
  $chart$$66$$.$yAxis$ && ($yMinDelta_yMinMax$$2$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$66$$.$yAxis$, $deltas$$1_xMinDelta$$.$yMin$, $deltas$$1_xMinDelta$$.$yMax$));
  $chart$$66$$.$y2Axis$ && ($y2MinMax$$1_yMaxDelta$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$66$$.$y2Axis$, $deltas$$1_xMinDelta$$.$yMin$, $deltas$$1_xMinDelta$$.$yMax$));
  return{$xMin$:$xMaxDelta_xMinMax$$2$$.min, $xMax$:$xMaxDelta_xMinMax$$2$$.max, $yMin$:$yMinDelta_yMinMax$$2$$.min, $yMax$:$yMinDelta_yMinMax$$2$$.max, $y2Min$:$y2MinMax$$1_yMaxDelta$$.min, $y2Max$:$y2MinMax$$1_yMaxDelta$$.max, $startGroup$:$startEndGroup$$2$$.$startGroup$, $endGroup$:$startEndGroup$$2$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($axis$$28$$, $minDelta$$, $maxDelta$$) {
  var $min$$16$$ = $axis$$28$$.$getViewportMin$(), $max$$16$$ = $axis$$28$$.$getViewportMax$();
  if($maxDelta$$ == $minDelta$$ && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($axis$$28$$)) {
    return{min:$min$$16$$, max:$max$$16$$}
  }
  var $minDeltaVal$$ = $axis$$28$$.$getUnboundedValueAt$($minDelta$$) - $axis$$28$$.$getUnboundedValueAt$(0), $maxDeltaVal$$ = $axis$$28$$.$getUnboundedValueAt$($maxDelta$$) - $axis$$28$$.$getUnboundedValueAt$(0), $weight$$ = 1;
  $minDelta$$ != $maxDelta$$ && $max$$16$$ + $maxDeltaVal$$ - ($min$$16$$ + $minDeltaVal$$) < $axis$$28$$.$getMinimumExtent$() && ($weight$$ = ($max$$16$$ - $min$$16$$ - $axis$$28$$.$getMinimumExtent$()) / ($minDeltaVal$$ - $maxDeltaVal$$));
  return D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$28$$, $min$$16$$ + $minDeltaVal$$ * $weight$$, $max$$16$$ + $maxDeltaVal$$ * $weight$$)
};
D.$DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($chart$$67$$, $xMin$$2$$, $xMax$$2$$, $yMin$$3$$, $yMax$$3$$) {
  var $axisCoord$$2$$ = {}, $isRTL$$25$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$67$$.$_context$);
  D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$67$$) ? ($axisCoord$$2$$.$xMin$ = $yMin$$3$$, $axisCoord$$2$$.$xMax$ = $yMax$$3$$, $axisCoord$$2$$.$yMin$ = $isRTL$$25$$ ? $xMax$$2$$ : $xMin$$2$$, $axisCoord$$2$$.$yMin$ = $isRTL$$25$$ ? $xMin$$2$$ : $xMax$$2$$) : ($axisCoord$$2$$.$xMin$ = $isRTL$$25$$ ? $xMax$$2$$ : $xMin$$2$$, $axisCoord$$2$$.$xMax$ = $isRTL$$25$$ ? $xMin$$2$$ : $xMax$$2$$, $axisCoord$$2$$.$yMin$ = $yMax$$3$$, $axisCoord$$2$$.$yMax$ = $yMin$$3$$);
  return $axisCoord$$2$$
};
D.$DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($axis$$29_globalMax$$, $min$$17$$, $max$$17$$) {
  var $globalMin$$ = $axis$$29_globalMax$$.$getGlobalMin$();
  $axis$$29_globalMax$$ = $axis$$29_globalMax$$.$getGlobalMax$();
  $max$$17$$ - $min$$17$$ >= $axis$$29_globalMax$$ - $globalMin$$ ? ($min$$17$$ = $globalMin$$, $max$$17$$ = $axis$$29_globalMax$$) : $min$$17$$ < $globalMin$$ ? ($max$$17$$ += $globalMin$$ - $min$$17$$, $min$$17$$ = $globalMin$$) : $max$$17$$ > $axis$$29_globalMax$$ && ($min$$17$$ -= $max$$17$$ - $axis$$29_globalMax$$, $max$$17$$ = $axis$$29_globalMax$$);
  return{min:$min$$17$$, max:$max$$17$$}
};
D.$DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($axis$$30$$, $min$$18_startIdx$$, $endIdx_max$$18$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$30$$) && ($min$$18_startIdx$$ = window.Math.ceil($min$$18_startIdx$$), $endIdx_max$$18$$ = window.Math.floor($endIdx_max$$18$$), $endIdx_max$$18$$ >= $min$$18_startIdx$$) ? {$startGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$30$$) ? $axis$$30$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$30$$.$Info$, $min$$18_startIdx$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$, $endGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$30$$) ? 
  $axis$$30$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$30$$.$Info$, $endIdx_max$$18$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$} : {$startGroup$:D.$JSCompiler_alias_NULL$$, $endGroup$:D.$JSCompiler_alias_NULL$$}
};
D.$DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($chart$$68$$, $selected$$28$$) {
  var $handler$$32$$ = $chart$$68$$.$getSelectionHandler$();
  if($handler$$32$$) {
    for(var $peers$$5$$ = $chart$$68$$.$getObjects$(), $selectedIds$$9$$ = [], $i$$630$$ = 0;$i$$630$$ < $selected$$28$$.length;$i$$630$$++) {
      for(var $j$$85$$ = 0;$j$$85$$ < $peers$$5$$.length;$j$$85$$++) {
        var $peer$$11$$ = $peers$$5$$[$j$$85$$];
        $peer$$11$$.$getSeries$() === $selected$$28$$[$i$$630$$].series && $peer$$11$$.$getGroup$() === $selected$$28$$[$i$$630$$].group && $selectedIds$$9$$.push($peer$$11$$.getId())
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$32$$, $selectedIds$$9$$, $peers$$5$$)
  }
};
D.$DvtChartRefObjUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRefObjUtils$$, D.$DvtObj$$, "DvtChartRefObjUtils");
D.$DvtChartRefObjUtils$$.$getObjects$ = function $$DvtChartRefObjUtils$$$$getObjects$$($chart$$139_y2$$26$$) {
  var $x$$273$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$139_y2$$26$$), $y$$237$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$139_y2$$26$$);
  $chart$$139_y2$$26$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$139_y2$$26$$);
  return $x$$273$$.concat($y$$237$$, $chart$$139_y2$$26$$)
};
D.$DvtChartRefObjUtils$$.$getXAxisObjects$ = function $$DvtChartRefObjUtils$$$$getXAxisObjects$$($chart$$140_options$$204$$) {
  return($chart$$140_options$$204$$ = $chart$$140_options$$204$$.$getOptions$()) && $chart$$140_options$$204$$.xAxis && $chart$$140_options$$204$$.xAxis.referenceObjects ? $chart$$140_options$$204$$.xAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getYAxisObjects$ = function $$DvtChartRefObjUtils$$$$getYAxisObjects$$($chart$$141_options$$205$$) {
  return($chart$$141_options$$205$$ = $chart$$141_options$$205$$.$getOptions$()) && $chart$$141_options$$205$$.yAxis && $chart$$141_options$$205$$.yAxis.referenceObjects ? $chart$$141_options$$205$$.yAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getY2AxisObjects$ = function $$DvtChartRefObjUtils$$$$getY2AxisObjects$$($chart$$142_options$$206$$) {
  return($chart$$142_options$$206$$ = $chart$$142_options$$206$$.$getOptions$()) && $chart$$142_options$$206$$.y2Axis && $chart$$142_options$$206$$.y2Axis.referenceObjects ? $chart$$142_options$$206$$.y2Axis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($refObj$$2$$) {
  return"area" == $refObj$$2$$.type ? "area" : "line"
};
D.$DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($refObj$$3$$) {
  return"front" == $refObj$$3$$.location ? "front" : "back"
};
D.$DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($refObj$$4$$) {
  return $refObj$$4$$.color ? $refObj$$4$$.color : "#333333"
};
D.$DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($refObj$$5$$) {
  return $refObj$$5$$.lineWidth ? $refObj$$5$$.lineWidth : 1
};
D.$DvtChartSeriesEffectUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesEffectUtils$$, D.$DvtObj$$, "DvtChartSeriesEffectUtils");
D.$DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($chart$$143_colors$$2$$, $pattern$$9_seriesIndex$$53$$, $groupIndex$$29_seriesEffect$$, $angle$$49_bHoriz$$4$$, $barWidth$$4$$) {
  var $color$$72_stops$$2$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$143_colors$$2$$, $pattern$$9_seriesIndex$$53$$, $groupIndex$$29_seriesEffect$$);
  $pattern$$9_seriesIndex$$53$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$143_colors$$2$$, $pattern$$9_seriesIndex$$53$$, $groupIndex$$29_seriesEffect$$);
  $groupIndex$$29_seriesEffect$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$143_colors$$2$$);
  return $pattern$$9_seriesIndex$$53$$ ? new D.$DvtPatternFill$$($pattern$$9_seriesIndex$$53$$, $color$$72_stops$$2$$) : "gradient" == $groupIndex$$29_seriesEffect$$ && 3 < $barWidth$$4$$ ? ($angle$$49_bHoriz$$4$$ = $angle$$49_bHoriz$$4$$ ? 270 : 0, D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$143_colors$$2$$) ? ($chart$$143_colors$$2$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$72_stops$$2$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$72_stops$$2$$, -0.04, -0.05)], $color$$72_stops$$2$$ = 
  [0, 1]) : ($chart$$143_colors$$2$$ = [D.$DvtColorUtils$$.$getPastel$($color$$72_stops$$2$$, 0.15), D.$DvtColorUtils$$.$getPastel$($color$$72_stops$$2$$, 0.45), D.$DvtColorUtils$$.$getPastel$($color$$72_stops$$2$$, 0.25), $color$$72_stops$$2$$, D.$DvtColorUtils$$.$getPastel$($color$$72_stops$$2$$, 0.15), D.$DvtColorUtils$$.$getDarker$($color$$72_stops$$2$$, 0.9)], $color$$72_stops$$2$$ = [0, 0.15, 0.3, 0.65, 0.85, 1]), new D.$DvtLinearGradientFill$$($angle$$49_bHoriz$$4$$, $chart$$143_colors$$2$$, 
  D.$JSCompiler_alias_NULL$$, $color$$72_stops$$2$$)) : new D.$DvtSolidFill$$($color$$72_stops$$2$$)
};
D.$DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($chart$$144$$, $seriesIndex$$54$$) {
  var $color$$73_colors$$3$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$144$$, $seriesIndex$$54$$), $pattern$$10_stops$$3$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$144$$, $seriesIndex$$54$$), $seriesEffect$$1$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$144$$);
  return $pattern$$10_stops$$3$$ ? new D.$DvtPatternFill$$($pattern$$10_stops$$3$$, $color$$73_colors$$3$$) : "gradient" == $seriesEffect$$1$$ ? (D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$144$$) ? ($color$$73_colors$$3$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$73_colors$$3$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$73_colors$$3$$, -0.04, -0.05)], $pattern$$10_stops$$3$$ = [0, 1]) : ($color$$73_colors$$3$$ = D.$DvtChartTypeUtils$$.$isSpark$($chart$$144$$) ? [D.$DvtColorUtils$$.$getDarker$($color$$73_colors$$3$$, 
  0.5), $color$$73_colors$$3$$, D.$DvtColorUtils$$.$getPastel$($color$$73_colors$$3$$, 0.5)] : [D.$DvtColorUtils$$.$getPastel$($color$$73_colors$$3$$, 0.5), $color$$73_colors$$3$$, D.$DvtColorUtils$$.$getDarker$($color$$73_colors$$3$$, 0.7)], $pattern$$10_stops$$3$$ = [0, 0.5, 1]), new D.$DvtLinearGradientFill$$(270, $color$$73_colors$$3$$, D.$JSCompiler_alias_NULL$$, $pattern$$10_stops$$3$$)) : new D.$DvtSolidFill$$($color$$73_colors$$3$$)
};
D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($chart$$145_linearColors_radialColors$$, $seriesIndex$$55$$, $groupIndex$$30$$) {
  var $color$$74$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$145_linearColors_radialColors$$, $seriesIndex$$55$$, $groupIndex$$30$$), $pattern$$11$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$145_linearColors_radialColors$$, $seriesIndex$$55$$, $groupIndex$$30$$);
  if("bubble" == $chart$$145_linearColors_radialColors$$.$getType$()) {
    var $seriesEffect$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$145_linearColors_radialColors$$);
    if($pattern$$11$$) {
      return new D.$DvtPatternFill$$($pattern$$11$$, $color$$74$$)
    }
    if("gradient" == $seriesEffect$$2$$) {
      if(D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$145_linearColors_radialColors$$)) {
        return window.colors = [D.$DvtColorUtils$$.$adjustHSL$($color$$74$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$74$$, -0.04, -0.05)], window.stops = [0, 1], new D.$DvtLinearGradientFill$$(270, window.colors, D.$JSCompiler_alias_NULL$$, window.stops)
      }
      if("human" == D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$145_linearColors_radialColors$$, $seriesIndex$$55$$, $groupIndex$$30$$)) {
        return $chart$$145_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$74$$, 0.2), D.$DvtColorUtils$$.$getPastel$($color$$74$$, 0.1), $color$$74$$, D.$DvtColorUtils$$.$getDarker$($color$$74$$, 0.8)], new D.$DvtLinearGradientFill$$(315, $chart$$145_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.3, 0.7, 1])
      }
      $chart$$145_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$74$$, 0.15), $color$$74$$, D.$DvtColorUtils$$.$getDarker$($color$$74$$, 0.9), D.$DvtColorUtils$$.$getDarker$($color$$74$$, 0.8)];
      return new D.$DvtRadialGradientFill$$($chart$$145_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.5, 0.75, 1])
    }
  }
  return new D.$DvtSolidFill$$($color$$74$$)
};
D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($chart$$146_colors$$4$$, $pattern$$12_seriesIndex$$56$$, $color$$75_stops$$4$$, $dimensions$$3$$, $bBackground$$) {
  $pattern$$12_seriesIndex$$56$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$146_colors$$4$$, $pattern$$12_seriesIndex$$56$$, 0);
  var $seriesEffect$$3$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$146_colors$$4$$);
  return $pattern$$12_seriesIndex$$56$$ && !$bBackground$$ ? new D.$DvtPatternFill$$($pattern$$12_seriesIndex$$56$$, $color$$75_stops$$4$$) : "gradient" == $seriesEffect$$3$$ ? ("on" == $chart$$146_colors$$4$$.$getOptions$().styleDefaults.threeDEffect ? ($chart$$146_colors$$4$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$75_stops$$4$$, 0, -0.1), D.$DvtColorUtils$$.$adjustHSL$($color$$75_stops$$4$$, 0, 0.12), $color$$75_stops$$4$$], $color$$75_stops$$4$$ = [0, 0.65, 1]) : ($chart$$146_colors$$4$$ = 
  [D.$DvtColorUtils$$.$adjustHSL$($color$$75_stops$$4$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$75_stops$$4$$, -0.04, -0.05)], $color$$75_stops$$4$$ = [0, 1]), new D.$DvtLinearGradientFill$$(90, $chart$$146_colors$$4$$, D.$JSCompiler_alias_NULL$$, $color$$75_stops$$4$$, [$dimensions$$3$$.x, $dimensions$$3$$.y, $dimensions$$3$$.$w$, $dimensions$$3$$.$h$])) : new D.$DvtSolidFill$$($color$$75_stops$$4$$)
};
D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($chart$$147$$) {
  return"skyros" != $chart$$147$$.$getOptions$().skin
};
D.$DvtChartStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartStyleUtils$$, D.$DvtObj$$, "DvtChartStyleUtils");
D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
D.$DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($chart$$108$$, $seriesIndex$$38$$) {
  if(D.$DvtChartTypeUtils$$.$isBar$($chart$$108$$)) {
    return"bar"
  }
  if(D.$DvtChartTypeUtils$$.$isLine$($chart$$108$$)) {
    return"line"
  }
  if(D.$DvtChartTypeUtils$$.$isArea$($chart$$108$$)) {
    return"area"
  }
  if(D.$DvtChartTypeUtils$$.$isCombo$($chart$$108$$)) {
    var $series$$8_seriesItem$$14_seriesType$$2_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$108$$, $seriesIndex$$38$$), $series$$8_seriesItem$$14_seriesType$$2_typeIndex$$ = $series$$8_seriesItem$$14_seriesType$$2_typeIndex$$ ? $series$$8_seriesItem$$14_seriesType$$2_typeIndex$$.type : D.$JSCompiler_alias_NULL$$;
    return!$series$$8_seriesItem$$14_seriesType$$2_typeIndex$$ || "auto" == $series$$8_seriesItem$$14_seriesType$$2_typeIndex$$ ? ($series$$8_seriesItem$$14_seriesType$$2_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$108$$, $seriesIndex$$38$$), $series$$8_seriesItem$$14_seriesType$$2_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$108$$, $series$$8_seriesItem$$14_seriesType$$2_typeIndex$$) % D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$series$$8_seriesItem$$14_seriesType$$2_typeIndex$$]) : 
    $series$$8_seriesItem$$14_seriesType$$2_typeIndex$$
  }
  return"auto"
};
D.$DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($chart$$109$$) {
  return $chart$$109$$.$getOptions$().styleDefaults.seriesEffect
};
D.$DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($chart$$110_colorIndex$$, $series$$9_seriesIndex$$39$$, $dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$) {
  if(($dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$110_colorIndex$$, $series$$9_seriesIndex$$39$$, $dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$)) && $dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$.color || ($dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$110_colorIndex$$, $series$$9_seriesIndex$$39$$)) && $dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$.color) {
    return $dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$.color
  }
  $dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$ = $chart$$110_colorIndex$$.$getOptions$();
  var $defaultColors$$ = $dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$.styleDefaults.colors;
  $series$$9_seriesIndex$$39$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$110_colorIndex$$, $series$$9_seriesIndex$$39$$);
  $chart$$110_colorIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$110_colorIndex$$, $series$$9_seriesIndex$$39$$) % $defaultColors$$.length;
  return $dataItem$$15_groupIndex$$19_options$$190_seriesItem$$15$$.styleDefaults.colors[$chart$$110_colorIndex$$]
};
D.$DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($chart$$111_patternIndex$$, $series$$10_seriesIndex$$40$$, $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$) {
  if(D.$DvtChartTypeUtils$$.$isLine$($chart$$111_patternIndex$$) || D.$DvtChartTypeUtils$$.$isScatter$($chart$$111_patternIndex$$) || "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$111_patternIndex$$, $series$$10_seriesIndex$$40$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$111_patternIndex$$, $series$$10_seriesIndex$$40$$, $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$)) && $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$.pattern && "auto" != $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$.pattern || ($dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$111_patternIndex$$, 
  $series$$10_seriesIndex$$40$$)) && $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$.pattern && "auto" != $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$.pattern) {
    return $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$.pattern
  }
  if("pattern" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$111_patternIndex$$)) {
    $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$ = $chart$$111_patternIndex$$.$getOptions$();
    var $defaultPatterns$$ = $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$.styleDefaults.patterns;
    $series$$10_seriesIndex$$40$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$111_patternIndex$$, $series$$10_seriesIndex$$40$$);
    $chart$$111_patternIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$111_patternIndex$$, $series$$10_seriesIndex$$40$$) % $defaultPatterns$$.length;
    return $dataItem$$16_groupIndex$$20_options$$191_seriesItem$$16$$.styleDefaults.patterns[$chart$$111_patternIndex$$]
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($chart$$112_markerColor$$, $seriesIndex$$41$$, $groupIndex$$21$$) {
  var $dataItem$$17_options$$192_seriesItem$$17$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$112_markerColor$$, $seriesIndex$$41$$, $groupIndex$$21$$);
  if($dataItem$$17_options$$192_seriesItem$$17$$ && $dataItem$$17_options$$192_seriesItem$$17$$.borderColor || ($dataItem$$17_options$$192_seriesItem$$17$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$112_markerColor$$, $seriesIndex$$41$$)) && $dataItem$$17_options$$192_seriesItem$$17$$.borderColor) {
    return $dataItem$$17_options$$192_seriesItem$$17$$.borderColor
  }
  $dataItem$$17_options$$192_seriesItem$$17$$ = $chart$$112_markerColor$$.$getOptions$();
  return"undefined" != typeof $dataItem$$17_options$$192_seriesItem$$17$$.styleDefaults.borderColor ? $dataItem$$17_options$$192_seriesItem$$17$$.styleDefaults.borderColor : "bubble" == $chart$$112_markerColor$$.$getType$() && "alta" == $chart$$112_markerColor$$.$getOptions$().skin && "gradient" != D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$112_markerColor$$) ? ($chart$$112_markerColor$$ = this.$getMarkerColor$($chart$$112_markerColor$$, $seriesIndex$$41$$, $groupIndex$$21$$), D.$DvtColorUtils$$.$adjustHSL$($chart$$112_markerColor$$, 
  0.15, -0.25)) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($chart$$113$$, $seriesIndex$$42$$, $groupIndex$$22$$) {
  var $dataItem$$18_defaultMarkerColor_seriesItem$$18$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$113$$, $seriesIndex$$42$$, $groupIndex$$22$$);
  return $dataItem$$18_defaultMarkerColor_seriesItem$$18$$ && $dataItem$$18_defaultMarkerColor_seriesItem$$18$$.color ? $dataItem$$18_defaultMarkerColor_seriesItem$$18$$.color : ($dataItem$$18_defaultMarkerColor_seriesItem$$18$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$113$$, $seriesIndex$$42$$)) && $dataItem$$18_defaultMarkerColor_seriesItem$$18$$.markerColor ? $dataItem$$18_defaultMarkerColor_seriesItem$$18$$.markerColor : ($dataItem$$18_defaultMarkerColor_seriesItem$$18$$ = $chart$$113$$.$getOptions$().styleDefaults.markerColor) ? 
  $dataItem$$18_defaultMarkerColor_seriesItem$$18$$ : D.$DvtChartStyleUtils$$.$getColor$($chart$$113$$, $seriesIndex$$42$$, $groupIndex$$22$$)
};
D.$DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($chart$$114_styleIndex$$3$$, $series$$11_seriesIndex$$43$$, $dataItem$$19_groupIndex$$23$$) {
  var $options$$194_shapeRamp$$ = $chart$$114_styleIndex$$3$$.$getOptions$(), $shape$$83$$ = $options$$194_shapeRamp$$.styleDefaults.markerShape, $seriesItem$$19$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$114_styleIndex$$3$$, $series$$11_seriesIndex$$43$$);
  $seriesItem$$19$$ && $seriesItem$$19$$.markerShape && ($shape$$83$$ = $seriesItem$$19$$.markerShape);
  ($dataItem$$19_groupIndex$$23$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$114_styleIndex$$3$$, $series$$11_seriesIndex$$43$$, $dataItem$$19_groupIndex$$23$$)) && $dataItem$$19_groupIndex$$23$$.markerShape && ($shape$$83$$ = $dataItem$$19_groupIndex$$23$$.markerShape);
  "auto" == $shape$$83$$ && ("bubble" == $chart$$114_styleIndex$$3$$.$getType$() ? $shape$$83$$ = "circle" : ($series$$11_seriesIndex$$43$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$114_styleIndex$$3$$, $series$$11_seriesIndex$$43$$), $chart$$114_styleIndex$$3$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$114_styleIndex$$3$$, $series$$11_seriesIndex$$43$$), $options$$194_shapeRamp$$ = $options$$194_shapeRamp$$.styleDefaults.shapes, $shape$$83$$ = $options$$194_shapeRamp$$[$chart$$114_styleIndex$$3$$ % 
  $options$$194_shapeRamp$$.length]));
  return $shape$$83$$
};
D.$DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($chart$$115_options$$195$$, $seriesIndex$$44_seriesItem$$20$$, $dataItem$$20_groupIndex$$24_markerSize$$3$$) {
  $dataItem$$20_groupIndex$$24_markerSize$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$115_options$$195$$, $seriesIndex$$44_seriesItem$$20$$, $dataItem$$20_groupIndex$$24_markerSize$$3$$);
  $seriesIndex$$44_seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$115_options$$195$$, $seriesIndex$$44_seriesItem$$20$$);
  $chart$$115_options$$195$$ = $chart$$115_options$$195$$.$getOptions$();
  $dataItem$$20_groupIndex$$24_markerSize$$3$$ = $dataItem$$20_groupIndex$$24_markerSize$$3$$ && $dataItem$$20_groupIndex$$24_markerSize$$3$$.markerSize ? $dataItem$$20_groupIndex$$24_markerSize$$3$$.markerSize : $seriesIndex$$44_seriesItem$$20$$ && $seriesIndex$$44_seriesItem$$20$$.markerSize ? $seriesIndex$$44_seriesItem$$20$$.markerSize : $chart$$115_options$$195$$.styleDefaults.markerSize;
  $chart$$115_options$$195$$._isOverview && ($dataItem$$20_groupIndex$$24_markerSize$$3$$ = window.Math.ceil(0.6 * $dataItem$$20_groupIndex$$24_markerSize$$3$$));
  return $dataItem$$20_groupIndex$$24_markerSize$$3$$
};
D.$DvtChartStyleUtils$$.$getMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$getMarkerDisplayed$$($chart$$116$$, $seriesIndex$$45_seriesItem$$21$$, $dataItem$$21_groupIndex$$25$$) {
  var $chartType$$ = $chart$$116$$.$getType$();
  return"scatter" == $chartType$$ || "bubble" == $chartType$$ ? "on" : ($dataItem$$21_groupIndex$$25$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$116$$, $seriesIndex$$45_seriesItem$$21$$, $dataItem$$21_groupIndex$$25$$)) && ("on" === $dataItem$$21_groupIndex$$25$$.markerDisplayed || "off" === $dataItem$$21_groupIndex$$25$$.markerDisplayed) ? $dataItem$$21_groupIndex$$25$$.markerDisplayed : ($seriesIndex$$45_seriesItem$$21$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$116$$, $seriesIndex$$45_seriesItem$$21$$)) && 
  ("on" === $seriesIndex$$45_seriesItem$$21$$.markerDisplayed || "off" === $seriesIndex$$45_seriesItem$$21$$.markerDisplayed) ? $seriesIndex$$45_seriesItem$$21$$.markerDisplayed : $chart$$116$$.$getOptions$().styleDefaults.markerDisplayed
};
D.$DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($chart$$117$$, $seriesIndex$$46$$) {
  var $lineWidth$$4_seriesItem$$22$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$117$$, $seriesIndex$$46$$), $options$$197$$ = $chart$$117$$.$getOptions$(), $lineWidth$$4_seriesItem$$22$$ = $lineWidth$$4_seriesItem$$22$$ && $lineWidth$$4_seriesItem$$22$$.lineWidth ? $lineWidth$$4_seriesItem$$22$$.lineWidth : $options$$197$$.styleDefaults.lineWidth;
  $options$$197$$._isOverview && ($lineWidth$$4_seriesItem$$22$$ = window.Math.ceil(0.6 * $lineWidth$$4_seriesItem$$22$$));
  return $lineWidth$$4_seriesItem$$22$$
};
D.$DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($chart$$118$$, $seriesIndex$$47$$) {
  var $seriesItem$$23$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$118$$, $seriesIndex$$47$$);
  return $seriesItem$$23$$ && $seriesItem$$23$$.lineStyle ? $seriesItem$$23$$.lineStyle : $chart$$118$$.$getOptions$().styleDefaults.lineStyle
};
D.$DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($chart$$119$$) {
  return $chart$$119$$.$getOptions$().__sparkBarSpacing
};
D.$DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($chart$$120$$, $barCount_barSeriesCount$$, $axis$$31_barWidth$$1$$) {
  var $maxBarWidth_options$$200$$ = $chart$$120$$.$getOptions$(), $isPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$120$$);
  $barCount_barSeriesCount$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$120$$) ? D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$120$$) ? 2 : 1 : $barCount_barSeriesCount$$;
  var $barGapRatio$$ = $maxBarWidth_options$$200$$.styleDefaults.barGapRatio;
  "string" == typeof $barGapRatio$$ && "%" == $barGapRatio$$.slice(-1) && ($barGapRatio$$ = (0,window.Number)($barGapRatio$$.slice(0, -1)) / 100);
  $barGapRatio$$ == D.$JSCompiler_alias_NULL$$ && ($barGapRatio$$ = $isPolar$$ ? 1 == $barCount_barSeriesCount$$ || D.$DvtChartTypeUtils$$.$isStacked$($chart$$120$$) ? 0 : 0.25 : 1 == $barCount_barSeriesCount$$ ? 0.625 : 0.25);
  $axis$$31_barWidth$$1$$ = $axis$$31_barWidth$$1$$.$getGroupWidth$() * (1 - $barGapRatio$$) / $barCount_barSeriesCount$$;
  $maxBarWidth_options$$200$$ = $maxBarWidth_options$$200$$.styleDefaults.maxBarWidth;
  $maxBarWidth_options$$200$$ != D.$JSCompiler_alias_NULL$$ && !$isPolar$$ && ($axis$$31_barWidth$$1$$ = window.Math.min($axis$$31_barWidth$$1$$, $maxBarWidth_options$$200$$));
  "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$120$$) && ($axis$$31_barWidth$$1$$ = window.Math.max(window.Math.floor($axis$$31_barWidth$$1$$), 1));
  return $axis$$31_barWidth$$1$$
};
D.$DvtChartStyleUtils$$.$getBarOffset$ = function $$DvtChartStyleUtils$$$$getBarOffset$$($chart$$121$$, $barWidth$$2$$, $barSeriesCount$$1_offset$$30$$) {
  $barSeriesCount$$1_offset$$30$$ = -($barWidth$$2$$ * $barSeriesCount$$1_offset$$30$$ / 2);
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$121$$) || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$121$$)) {
    $barSeriesCount$$1_offset$$30$$ = D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$121$$) ? D.$DvtAgent$$.$isRightToLeft$($chart$$121$$.$_context$) ? 0 : -$barWidth$$2$$ : -$barWidth$$2$$ / 2
  }
  return $barSeriesCount$$1_offset$$30$$
};
D.$DvtChartStyleUtils$$.$getY2BarOffset$ = function $$DvtChartStyleUtils$$$$getY2BarOffset$$($chart$$122$$, $barWidth$$3$$) {
  return D.$DvtChartTypeUtils$$.$isStacked$($chart$$122$$) ? D.$DvtAgent$$.$isRightToLeft$($chart$$122$$.$_context$) ? -$barWidth$$3$$ : $barWidth$$3$$ : 0
};
D.$DvtChartStyleUtils$$.$getVisibility$ = function $$DvtChartStyleUtils$$$$getVisibility$$($chart$$123$$, $seriesIndex$$48$$) {
  var $seriesItem$$24$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$123$$, $seriesIndex$$48$$);
  return $seriesItem$$24$$ && $seriesItem$$24$$.visibility ? $seriesItem$$24$$.visibility : "visible"
};
D.$DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($chart$$124$$, $seriesIndex$$49$$) {
  return"hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$124$$, $seriesIndex$$49$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($chart$$125_dataItem$$22$$, $i$$638_seriesIndex$$50$$, $groupIndex$$26$$) {
  if("hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$125_dataItem$$22$$, $i$$638_seriesIndex$$50$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $hiddenCategories$$4$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$125_dataItem$$22$$);
  $chart$$125_dataItem$$22$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$125_dataItem$$22$$, $i$$638_seriesIndex$$50$$, $groupIndex$$26$$);
  if(0 < $hiddenCategories$$4$$.length && $chart$$125_dataItem$$22$$ && $chart$$125_dataItem$$22$$.categories) {
    for($i$$638_seriesIndex$$50$$ = 0;$i$$638_seriesIndex$$50$$ < $chart$$125_dataItem$$22$$.categories.length;$i$$638_seriesIndex$$50$$++) {
      if(0 <= D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$4$$, $chart$$125_dataItem$$22$$.categories[$i$$638_seriesIndex$$50$$])) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($chart$$126$$) {
  return $chart$$126$$.$getOptions$().animationOnDisplay
};
D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($chart$$127$$) {
  return $chart$$127$$.$getOptions$().animationOnDataChange
};
D.$DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($chart$$128$$) {
  return $chart$$128$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
D.$DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($chart$$129$$) {
  return $chart$$129$$.$getOptions$().styleDefaults.animationIndicators
};
D.$DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($chart$$130$$) {
  return $chart$$130$$.$getOptions$().styleDefaults.animationUpColor
};
D.$DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($chart$$131$$) {
  return $chart$$131$$.$getOptions$().styleDefaults.animationDownColor
};
D.$DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($chart$$132_options$$201$$) {
  $chart$$132_options$$201$$ = $chart$$132_options$$201$$.$getOptions$();
  $chart$$132_options$$201$$._hiddenCategories || ($chart$$132_options$$201$$._hiddenCategories = []);
  return $chart$$132_options$$201$$._hiddenCategories
};
D.$DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($chart$$133$$) {
  return $chart$$133$$.$getOptions$().styleDefaults.selectedInnerColor
};
D.$DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($chart$$134$$) {
  return $chart$$134$$.$getOptions$().styleDefaults.selectedOuterColor
};
D.$DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($chart$$135$$, $seriesIndex$$51$$, $groupIndex$$27$$, $dataColor$$9_labelColor$$2$$, $position$$31$$) {
  var $labelStyleArray$$1$$ = [];
  $dataColor$$9_labelColor$$2$$ && ("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$135$$, $seriesIndex$$51$$) || D.$DvtChartTypeUtils$$.$isBubble$($chart$$135$$)) && ("center" == $position$$31$$ || "inBottom" == $position$$31$$ || "inTop" == $position$$31$$ || "inRight" == $position$$31$$ || "inLeft" == $position$$31$$) ? ($dataColor$$9_labelColor$$2$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$135$$, $seriesIndex$$51$$, $groupIndex$$27$$) != D.$JSCompiler_alias_NULL$$ ? "#000000" : 
  D.$DvtColorUtils$$.$getContrastingTextColor$($dataColor$$9_labelColor$$2$$), $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $dataColor$$9_labelColor$$2$$ + ";"))) : $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: #333333;"));
  $labelStyleArray$$1$$.push($chart$$135$$.$getOptions$().styleDefaults.dataLabelStyle);
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$($chart$$135$$, $seriesIndex$$51$$, $groupIndex$$27$$).labelStyle));
  return(0,D.$DvtCSSStyle$mergeStyles$$)($labelStyleArray$$1$$)
};
D.$DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($chart$$136$$, $bNegative_seriesIndex$$52$$, $groupIndex$$28$$) {
  var $position$$32$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$136$$, $bNegative_seriesIndex$$52$$, $groupIndex$$28$$).labelPosition;
  $position$$32$$ || ($position$$32$$ = $chart$$136$$.$getOptions$().styleDefaults.dataLabelPosition);
  var $bBidi$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$136$$.$_context$);
  if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$136$$, $bNegative_seriesIndex$$52$$)) {
    if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$136$$)) {
      return"center"
    }
    if("insideBarEdge" != $position$$32$$ && "outsideBarEdge" != $position$$32$$ && "center" != $position$$32$$) {
      if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$136$$)) {
        return"center"
      }
      $position$$32$$ = "insideBarEdge"
    }
    $bNegative_seriesIndex$$52$$ = 0 > D.$DvtChartDataUtils$$.getValue($chart$$136$$, $bNegative_seriesIndex$$52$$, $groupIndex$$28$$);
    return"outsideBarEdge" == $position$$32$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$136$$) ? !$bNegative_seriesIndex$$52$$ && !$bBidi$$ || $bNegative_seriesIndex$$52$$ && $bBidi$$ ? "right" : "left" : $bNegative_seriesIndex$$52$$ ? "below" : "above" : "insideBarEdge" == $position$$32$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$136$$) ? !$bNegative_seriesIndex$$52$$ && !$bBidi$$ || $bNegative_seriesIndex$$52$$ && $bBidi$$ ? "inRight" : "inLeft" : $bNegative_seriesIndex$$52$$ ? "inBottom" : 
    "inTop" : "center"
  }
  if("belowMarker" == $position$$32$$) {
    return"below"
  }
  if("aboveMarker" == $position$$32$$) {
    return"above"
  }
  if("afterMarker" != $position$$32$$ && "beforeMarker" != $position$$32$$ && "center" != $position$$32$$) {
    if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$136$$)) {
      return"center"
    }
    $position$$32$$ = "afterMarker"
  }
  return!$bBidi$$ && "afterMarker" == $position$$32$$ || $bBidi$$ && "beforeMarker" == $position$$32$$ ? "right" : !$bBidi$$ && "beforeMarker" == $position$$32$$ || $bBidi$$ && "afterMarker" == $position$$32$$ ? "left" : "center"
};
D.$DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($chart$$137$$) {
  var $options$$202$$ = $chart$$137$$.$getOptions$();
  return D.$DvtChartTypeUtils$$.$isOverviewSupported$($chart$$137$$) && "off" != $options$$202$$.overview.rendered
};
D.$DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($chart$$138$$) {
  var $defaultRatio_options$$203$$ = $chart$$138$$.$getOptions$(), $height$$92$$ = $defaultRatio_options$$203$$.overview.height;
  if($height$$92$$ != D.$JSCompiler_alias_NULL$$ && ("string" == typeof $height$$92$$ && ($height$$92$$ = "%" == $height$$92$$.slice(-1) ? $chart$$138$$.getHeight() * (0,window.Number)($height$$92$$.slice(0, -1)) / 100 : "px" == $height$$92$$.slice(-2) ? (0,window.Number)($height$$92$$.slice(0, -2)) : (0,window.Number)($height$$92$$)), !(0,window.isNaN)($height$$92$$) && 0 < $height$$92$$)) {
    return $height$$92$$
  }
  $defaultRatio_options$$203$$ = "disabled" == $defaultRatio_options$$203$$.timeAxisType ? 0.2 : 0.25;
  return $chart$$138$$.getHeight() * $defaultRatio_options$$203$$
};
D.$DvtChartTextUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTextUtils$$, D.$DvtObj$$, "DvtChartTextUtils");
D.$DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($eventManager$$40$$, $container$$119$$, $text$$96_textString$$12$$, $cssStyle$$38$$, $x$$270$$, $y$$233$$, $width$$98$$, $height$$90$$, $params$$37$$) {
  $text$$96_textString$$12$$ = new D.$DvtOutputText$$($container$$119$$.$_context$, $text$$96_textString$$12$$, $x$$270$$, $y$$233$$);
  $text$$96_textString$$12$$.$setCSSStyle$($cssStyle$$38$$);
  return D.$DvtTextUtils$$.$fitText$($text$$96_textString$$12$$, $width$$98$$, $height$$90$$, $container$$119$$) ? ($eventManager$$40$$.$associate$($text$$96_textString$$12$$, new D.$DvtSimpleObjPeer$$($text$$96_textString$$12$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$37$$)), $text$$96_textString$$12$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartTooltipUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTooltipUtils$$, D.$DvtObj$$, "DvtChartTooltipUtils");
D.$DvtChartTooltipUtils$$.$_TYPE_X$ = "x";
D.$DvtChartTooltipUtils$$.$_TYPE_Y$ = "y";
D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ = "y2";
D.$DvtChartTooltipUtils$$.$_TYPE_Z$ = "z";
D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$ = "value";
D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$ = "targetValue";
D.$DvtChartTooltipUtils$$.$hasDatatips$ = function $$DvtChartTooltipUtils$$$$hasDatatips$$($chart$$8_options$$171$$) {
  $chart$$8_options$$171$$ = $chart$$8_options$$171$$.$getOptions$();
  return"none" == $chart$$8_options$$171$$.styleDefaults.seriesTooltipType && "none" == $chart$$8_options$$171$$.styleDefaults.groupTooltipType && "none" == $chart$$8_options$$171$$.styleDefaults.valueTooltipType ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($chart$$9$$, $seriesIndex$$6$$, $groupIndex$$1$$) {
  return D.$DvtChartStyleUtils$$.$getColor$($chart$$9$$, $seriesIndex$$6$$, $groupIndex$$1$$)
};
D.$DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($arTooltip_dataItem$$5_target$$107$$, $chart$$10$$, $seriesIndex$$7$$, $groupIndex$$2$$) {
  if(0 > $seriesIndex$$7$$ || 0 > $groupIndex$$2$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($arTooltip_dataItem$$5_target$$107$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$10$$, $seriesIndex$$7$$, $groupIndex$$2$$)) && $arTooltip_dataItem$$5_target$$107$$.shortDesc) {
    return $arTooltip_dataItem$$5_target$$107$$.shortDesc
  }
  $arTooltip_dataItem$$5_target$$107$$ = [];
  D.$DvtChartTooltipUtils$$.$_addSeriesStrings$($arTooltip_dataItem$$5_target$$107$$, $chart$$10$$, $seriesIndex$$7$$);
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip_dataItem$$5_target$$107$$, $chart$$10$$, $seriesIndex$$7$$, $groupIndex$$2$$);
  D.$DvtChartTooltipUtils$$.$_addValueStrings$($arTooltip_dataItem$$5_target$$107$$, $chart$$10$$, $seriesIndex$$7$$, $groupIndex$$2$$);
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip_dataItem$$5_target$$107$$)
};
D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($chart$$11$$, $otherValue$$1$$) {
  var $arTooltip$$1$$ = [], $options$$172_val$$76$$ = $chart$$11$$.$getOptions$(), $bundle$$5_labelValue$$1$$ = $chart$$11$$.$Bundle$;
  if("none" != $options$$172_val$$76$$.styleDefaults.seriesTooltipType) {
    var $otherStr$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$5_labelValue$$1$$, "LABEL_OTHER", D.$JSCompiler_alias_NULL$$);
    $arTooltip$$1$$.push($otherStr$$)
  }
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip$$1$$, $chart$$11$$, 0, 0);
  "none" != $options$$172_val$$76$$.styleDefaults.valueTooltipType && ($options$$172_val$$76$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$172_val$$76$$.valueFormats, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $otherValue$$1$$), $bundle$$5_labelValue$$1$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$5_labelValue$$1$$, "LABEL_VALUE", $options$$172_val$$76$$), $arTooltip$$1$$.push($bundle$$5_labelValue$$1$$));
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip$$1$$)
};
D.$DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($refObj$$) {
  if($refObj$$.shortDesc) {
    return $refObj$$.shortDesc
  }
};
D.$DvtChartTooltipUtils$$.$_addSeriesStrings$ = function $$DvtChartTooltipUtils$$$$_addSeriesStrings$$($arTooltip$$2$$, $chart$$13_labelSeries$$, $seriesIndex$$8_seriesLabel$$) {
  if("none" != $chart$$13_labelSeries$$.$getOptions$().styleDefaults.seriesTooltipType) {
    var $bundle$$6$$ = $chart$$13_labelSeries$$.$Bundle$;
    if($seriesIndex$$8_seriesLabel$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$13_labelSeries$$, $seriesIndex$$8_seriesLabel$$)) {
      "funnel" == $chart$$13_labelSeries$$.$getType$() ? $arTooltip$$2$$.push($seriesIndex$$8_seriesLabel$$) : ($chart$$13_labelSeries$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6$$, "LABEL_SERIES", $seriesIndex$$8_seriesLabel$$), $arTooltip$$2$$.push($chart$$13_labelSeries$$))
    }
  }
};
D.$DvtChartTooltipUtils$$.$_addGroupStrings$ = function $$DvtChartTooltipUtils$$$$_addGroupStrings$$($arTooltip$$3$$, $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$, $bundle$$7_labelGroup_seriesIndex$$9$$, $groupIndex$$5$$) {
  var $options$$174$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$.$getOptions$(), $dataItem$$6$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$, $bundle$$7_labelGroup_seriesIndex$$9$$, $groupIndex$$5$$);
  "none" == $options$$174$$.styleDefaults.groupTooltipType || D.$DvtChartTypeUtils$$.$isPie$($JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$) || ($bundle$$7_labelGroup_seriesIndex$$9$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$.$Bundle$, $options$$174$$.timeAxisType && "disabled" != $options$$174$$.timeAxisType ? ($JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$ = 
  $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$.$xAxis$.$Info$, $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)($JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$, new window.Date($dataItem$$6$$.x + $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$.$_timeZoneOffset$), 
  D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$[1] != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$[0] + " " + $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$[1] : 
  $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$[0]) : $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$, $groupIndex$$5$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$ && 
  ($bundle$$7_labelGroup_seriesIndex$$9$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$7_labelGroup_seriesIndex$$9$$, "LABEL_GROUP", $JSCompiler_StaticMethods_formatLabel$self$$inline_6033_JSCompiler_temp$$277_chart$$14_groupLabel$$2_twoLabels$$inline_6035$$), $arTooltip$$3$$.push($bundle$$7_labelGroup_seriesIndex$$9$$)))
};
D.$DvtChartTooltipUtils$$.$_addValueStrings$ = function $$DvtChartTooltipUtils$$$$_addValueStrings$$($arTooltip$$4$$, $chart$$15_target$$108_type$$195_zValue$$, $labelY$$4_seriesIndex$$10_y1Value$$, $groupIndex$$6_labelX$$5_xValue$$) {
  var $options$$175_valueFormats$$1$$ = $chart$$15_target$$108_type$$195_zValue$$.$getOptions$();
  if("none" != $options$$175_valueFormats$$1$$.styleDefaults.valueTooltipType) {
    var $bundle$$8_labelValue2_labelZ$$ = $chart$$15_target$$108_type$$195_zValue$$.$Bundle$, $dataItem$$7_labelValue$$2_val$$77_yValue$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$15_target$$108_type$$195_zValue$$, $labelY$$4_seriesIndex$$10_y1Value$$, $groupIndex$$6_labelX$$5_xValue$$), $options$$175_valueFormats$$1$$ = $options$$175_valueFormats$$1$$.valueFormats;
    if("scatter" == $chart$$15_target$$108_type$$195_zValue$$.$getType$() || "bubble" == $chart$$15_target$$108_type$$195_zValue$$.$getType$()) {
      $groupIndex$$6_labelX$$5_xValue$$ = $dataItem$$7_labelValue$$2_val$$77_yValue$$.x, $labelY$$4_seriesIndex$$10_y1Value$$ = $dataItem$$7_labelValue$$2_val$$77_yValue$$.y, $groupIndex$$6_labelX$$5_xValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$175_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_X$, $groupIndex$$6_labelX$$5_xValue$$), $labelY$$4_seriesIndex$$10_y1Value$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$175_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_Y$, 
      $labelY$$4_seriesIndex$$10_y1Value$$), $groupIndex$$6_labelX$$5_xValue$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_X", $groupIndex$$6_labelX$$5_xValue$$), $labelY$$4_seriesIndex$$10_y1Value$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_Y", $labelY$$4_seriesIndex$$10_y1Value$$), $arTooltip$$4$$.push($groupIndex$$6_labelX$$5_xValue$$), $arTooltip$$4$$.push($labelY$$4_seriesIndex$$10_y1Value$$), 
      "bubble" == $chart$$15_target$$108_type$$195_zValue$$.$getType$() && ($chart$$15_target$$108_type$$195_zValue$$ = $dataItem$$7_labelValue$$2_val$$77_yValue$$.z, $chart$$15_target$$108_type$$195_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$175_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_Z$, $chart$$15_target$$108_type$$195_zValue$$), $bundle$$8_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_Z", $chart$$15_target$$108_type$$195_zValue$$), 
      $arTooltip$$4$$.push($bundle$$8_labelValue2_labelZ$$))
    }else {
      if("pie" == $chart$$15_target$$108_type$$195_zValue$$.$getType$()) {
        $dataItem$$7_labelValue$$2_val$$77_yValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$15_target$$108_type$$195_zValue$$, $labelY$$4_seriesIndex$$10_y1Value$$, $groupIndex$$6_labelX$$5_xValue$$), $dataItem$$7_labelValue$$2_val$$77_yValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$175_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$7_labelValue$$2_val$$77_yValue$$), $dataItem$$7_labelValue$$2_val$$77_yValue$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, 
        "LABEL_VALUE", $dataItem$$7_labelValue$$2_val$$77_yValue$$), $arTooltip$$4$$.push($dataItem$$7_labelValue$$2_val$$77_yValue$$)
      }else {
        if("funnel" == $chart$$15_target$$108_type$$195_zValue$$.$getType$()) {
          if($dataItem$$7_labelValue$$2_val$$77_yValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$15_target$$108_type$$195_zValue$$, $labelY$$4_seriesIndex$$10_y1Value$$, $groupIndex$$6_labelX$$5_xValue$$), $dataItem$$7_labelValue$$2_val$$77_yValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$175_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$7_labelValue$$2_val$$77_yValue$$), $dataItem$$7_labelValue$$2_val$$77_yValue$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, 
          "LABEL_VALUE", $dataItem$$7_labelValue$$2_val$$77_yValue$$), $arTooltip$$4$$.push($dataItem$$7_labelValue$$2_val$$77_yValue$$), $chart$$15_target$$108_type$$195_zValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$15_target$$108_type$$195_zValue$$, $labelY$$4_seriesIndex$$10_y1Value$$)) {
            $chart$$15_target$$108_type$$195_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$175_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$, $chart$$15_target$$108_type$$195_zValue$$), $bundle$$8_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_TARGET_VALUE", $chart$$15_target$$108_type$$195_zValue$$), $arTooltip$$4$$.push($bundle$$8_labelValue2_labelZ$$)
          }
        }else {
          $dataItem$$7_labelValue$$2_val$$77_yValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$15_target$$108_type$$195_zValue$$, $labelY$$4_seriesIndex$$10_y1Value$$, $groupIndex$$6_labelX$$5_xValue$$), $chart$$15_target$$108_type$$195_zValue$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$15_target$$108_type$$195_zValue$$, $labelY$$4_seriesIndex$$10_y1Value$$) ? D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ : D.$DvtChartTooltipUtils$$.$_TYPE_Y$, $dataItem$$7_labelValue$$2_val$$77_yValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$175_valueFormats$$1$$, 
          $chart$$15_target$$108_type$$195_zValue$$, $dataItem$$7_labelValue$$2_val$$77_yValue$$), $bundle$$8_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_VALUE", $dataItem$$7_labelValue$$2_val$$77_yValue$$), $arTooltip$$4$$.push($bundle$$8_labelValue2_labelZ$$)
        }
      }
    }
  }
};
D.$DvtChartTooltipUtils$$.$_convertLinesToString$ = function $$DvtChartTooltipUtils$$$$_convertLinesToString$$($arTooltip$$5$$) {
  for(var $ret$$105$$ = "", $i$$612$$ = 0;$i$$612$$ < $arTooltip$$5$$.length;$i$$612$$++) {
    0 < $ret$$105$$.length && ($ret$$105$$ += "\n"), $ret$$105$$ += $arTooltip$$5$$[$i$$612$$]
  }
  return $ret$$105$$
};
D.$DvtChartTooltipUtils$$.$_formatValue$ = function $$DvtChartTooltipUtils$$$$_formatValue$$($formatter$$1_valueFormats$$2$$, $type$$196$$, $value$$123$$, $min$$10$$, $max$$10$$, $majorIncrement$$1$$) {
  var $scaling$$3$$ = "auto", $autoPrecision$$7$$ = "on", $converter$$4$$;
  if($formatter$$1_valueFormats$$2$$) {
    for(var $i$$613$$ = 0;$i$$613$$ < $formatter$$1_valueFormats$$2$$.length;$i$$613$$++) {
      if($formatter$$1_valueFormats$$2$$[$i$$613$$].type == $type$$196$$) {
        $formatter$$1_valueFormats$$2$$[$i$$613$$].scaling && ($scaling$$3$$ = $formatter$$1_valueFormats$$2$$[$i$$613$$].scaling);
        $formatter$$1_valueFormats$$2$$[$i$$613$$].autoPrecision && ($autoPrecision$$7$$ = $formatter$$1_valueFormats$$2$$[$i$$613$$].autoPrecision);
        $formatter$$1_valueFormats$$2$$[$i$$613$$].converter && ($converter$$4$$ = $formatter$$1_valueFormats$$2$$[$i$$613$$].converter);
        break
      }
    }
  }
  $formatter$$1_valueFormats$$2$$ = new D.$DvtLinearScaleAxisValueFormatter$$($min$$10$$ != D.$JSCompiler_alias_NULL$$ ? $min$$10$$ : $value$$123$$, $max$$10$$ != D.$JSCompiler_alias_NULL$$ ? $max$$10$$ : $value$$123$$, $majorIncrement$$1$$ != D.$JSCompiler_alias_NULL$$ ? $majorIncrement$$1$$ : 0, $scaling$$3$$, $autoPrecision$$7$$);
  return $converter$$4$$ && ($converter$$4$$.getAsString || $converter$$4$$.format) ? $formatter$$1_valueFormats$$2$$.$format$($value$$123$$, $converter$$4$$) : $formatter$$1_valueFormats$$2$$.$format$($value$$123$$)
};
D.$DvtChartTypeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTypeUtils$$, D.$DvtObj$$, "DvtChartTypeUtils");
D.$DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($chart$$82$$) {
  return $chart$$82$$.$getOptions$().__spark
};
D.$DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($chart$$83$$) {
  return"combo" == $chart$$83$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($chart$$84$$) {
  return!D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$84$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$84$$)
};
D.$DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($chart$$85$$) {
  return"horizontal" == $chart$$85$$.$getOptions$().orientation && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$85$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$85$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$85$$))
};
D.$DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($chart$$86$$) {
  return"polar" == $chart$$86$$.$getOptions$().coordinateSystem
};
D.$DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($chart$$87$$) {
  return"on" != $chart$$87$$.$getOptions$().stack || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$87$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$87$$)
};
D.$DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($chart$$88$$) {
  return"bar" == $chart$$88$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($chart$$89$$) {
  return"line" == $chart$$89$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($chart$$90$$) {
  return"area" == $chart$$90$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($chart$$91$$) {
  return"scatter" == $chart$$91$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($chart$$92$$) {
  return"bubble" == $chart$$92$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($chart$$93$$) {
  return"pie" == $chart$$93$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($chart$$94$$) {
  return"funnel" == $chart$$94$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($chart$$95$$) {
  return!D.$DvtChartTypeUtils$$.$hasAxes$($chart$$95$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$95$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$95$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($chart$$96_type$$198$$) {
  $chart$$96_type$$198$$ = $chart$$96_type$$198$$.$getType$();
  return"bar" == $chart$$96_type$$198$$ || "line" == $chart$$96_type$$198$$ || "area" == $chart$$96_type$$198$$ || "combo" == $chart$$96_type$$198$$
};
D.$DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($chart$$97_type$$199$$) {
  $chart$$97_type$$199$$ = $chart$$97_type$$199$$.$getType$();
  return"scatter" == $chart$$97_type$$199$$ || "bubble" == $chart$$97_type$$199$$
};
D.$DvtChartTypeUtils$$.$isTimeAxisSupported$ = function $$DvtChartTypeUtils$$$$isTimeAxisSupported$$($chart$$98$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$98$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$98$$)
};
D.$DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($chart$$99$$) {
  return!D.$DvtChartTypeUtils$$.$isPie$($chart$$99$$) && !D.$DvtChartTypeUtils$$.$isFunnel$($chart$$99$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$99$$)
};
D.$DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($chart$$100$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$100$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$100$$)
};
D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($chart$$101$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$101$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$101$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$101$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$101$$)
};
D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($chart$$102$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$102$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$102$$) && D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$102$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$102$$)
};
D.$DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($chart$$103$$) {
  return!("pie" == $chart$$103$$.$getType$() || "funnel" == $chart$$103$$.$getType$())
};
D.$DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($chart$$104$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$104$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$104$$.$getOptions$();
  var $seriesCount$$7$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$104$$);
  if(0 == $seriesCount$$7$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$636$$ = 0;$i$$636$$ < $seriesCount$$7$$;$i$$636$$++) {
    if(!D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$104$$, $i$$636$$)) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($chart$$105$$, $type$$200$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$105$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$105$$.$getOptions$();
  for(var $seriesCount$$8$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$105$$), $i$$637$$ = 0;$i$$637$$ < $seriesCount$$8$$;$i$$637$$++) {
    if(!($type$$200$$ && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$105$$, $i$$637$$) != $type$$200$$) && D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$105$$, $i$$637$$)) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($chart$$106$$) {
  return D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$106$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($chart$$107$$) {
  if(D.$DvtChartTypeUtils$$.$isBar$($chart$$107$$)) {
    return D.$JSCompiler_alias_TRUE$$
  }
  if(D.$DvtChartTypeUtils$$.$isCombo$($chart$$107$$)) {
    for(var $seriesCount$$9$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$107$$), $seriesIndex$$37$$ = 0;$seriesIndex$$37$$ < $seriesCount$$9$$;$seriesIndex$$37$$++) {
      if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$107$$, $seriesIndex$$37$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$107$$, $seriesIndex$$37$$)) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartMarkerUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartMarkerUtils$$, D.$DvtObj$$, "DvtChartMarkerUtils");
D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$ = 5;
D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ = 0.125;
D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ = 0.2;
D.$DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($chart$$24$$, $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$, $height$$91_seriesCount$$) {
  var $minMax_xAxisValueRange_xMinMax$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$24$$, "z"), $minValue$$11$$ = $minMax_xAxisValueRange_xMinMax$$.min, $maxValue$$13_valueRange$$ = $minMax_xAxisValueRange_xMinMax$$.max, $axisHeight_options$$177$$ = $chart$$24$$.$getOptions$(), $minMax_xAxisValueRange_xMinMax$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$24$$, "x"), $xAxisMin_yAxisValueRange_yMinMax$$ = $axisHeight_options$$177$$.xAxis.min ? $axisHeight_options$$177$$.xAxis.min : window.Math.min(0, 
  $minMax_xAxisValueRange_xMinMax$$.min), $minMax_xAxisValueRange_xMinMax$$ = ($axisHeight_options$$177$$.xAxis.max ? $axisHeight_options$$177$$.xAxis.max : window.Math.max(0, $minMax_xAxisValueRange_xMinMax$$.max)) - $xAxisMin_yAxisValueRange_yMinMax$$, $xAxisMin_yAxisValueRange_yMinMax$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$24$$, "y"), $axisWidth_yAxisMin$$ = $axisHeight_options$$177$$.yAxis.min ? $axisHeight_options$$177$$.yAxis.min : window.Math.min(0, $xAxisMin_yAxisValueRange_yMinMax$$.min), 
  $xAxisMin_yAxisValueRange_yMinMax$$ = ($axisHeight_options$$177$$.yAxis.max ? $axisHeight_options$$177$$.yAxis.max : window.Math.max(0, $xAxisMin_yAxisValueRange_yMinMax$$.max)) - $axisWidth_yAxisMin$$;
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$24$$) ? ($axisWidth_yAxisMin$$ = window.Infinity, $axisHeight_options$$177$$ = $chart$$24$$.$getRadius$()) : ($axisWidth_yAxisMin$$ = (1 - $axisHeight_options$$177$$.layout.axisMaxSize) * $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$, $axisHeight_options$$177$$ = (1 - $axisHeight_options$$177$$.layout.axisMaxSize) * $height$$91_seriesCount$$);
  var $minArea$$ = window.Math.PI * window.Math.pow(D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$, 2);
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$ = D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ * window.Math.min($areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$, $height$$91_seriesCount$$);
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$ = window.Math.PI * window.Math.pow($areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$, 2);
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$($chart$$24$$, $minArea$$, $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$, $minValue$$11$$, $maxValue$$13_valueRange$$);
  $minArea$$ = $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$.minArea;
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$ = $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$.maxArea;
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$($minArea$$, $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$, $minValue$$11$$, $maxValue$$13_valueRange$$);
  $minArea$$ = $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$.minArea;
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$ = $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$.maxArea;
  $maxValue$$13_valueRange$$ -= $minValue$$11$$;
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$ -= $minArea$$;
  $height$$91_seriesCount$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$24$$);
  for(var $seriesIndex$$11$$ = 0;$seriesIndex$$11$$ < $height$$91_seriesCount$$;$seriesIndex$$11$$++) {
    for(var $seriesItem$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$24$$, $seriesIndex$$11$$), $numGroups$$1$$ = $seriesItem$$.items ? $seriesItem$$.items.length : 0, $j$$80$$ = 0;$j$$80$$ < $numGroups$$1$$;$j$$80$$++) {
      var $dataItem$$8$$ = $seriesItem$$.items[$j$$80$$];
      $dataItem$$8$$ && $dataItem$$8$$.z && (1 === $height$$91_seriesCount$$ && 1 === $numGroups$$1$$ ? ($dataItem$$8$$.markerSize = D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ * window.Math.min($axisWidth_yAxisMin$$, $axisHeight_options$$177$$), $minMax_xAxisValueRange_xMinMax$$ = 0 === $minMax_xAxisValueRange_xMinMax$$ ? 100 : $minMax_xAxisValueRange_xMinMax$$, $xAxisMin_yAxisValueRange_yMinMax$$ = 0 === $xAxisMin_yAxisValueRange_yMinMax$$ ? 100 : $xAxisMin_yAxisValueRange_yMinMax$$) : 
      $dataItem$$8$$.markerSize = 2 * window.Math.sqrt(($minArea$$ + ($dataItem$$8$$.z - $minValue$$11$$) / $maxValue$$13_valueRange$$ * $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$99$$) / window.Math.PI), $dataItem$$8$$._xAxisRadius = 0.5 * ($dataItem$$8$$.markerSize / $axisWidth_yAxisMin$$) * $minMax_xAxisValueRange_xMinMax$$, $dataItem$$8$$._yAxisRadius = 0.5 * ($dataItem$$8$$.markerSize / $axisHeight_options$$177$$) * $xAxisMin_yAxisValueRange_yMinMax$$)
    }
  }
};
D.$DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($markers$$3$$) {
  $markers$$3$$.sort(D.$DvtChartMarkerUtils$$.$_compareSize$)
};
D.$DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($a$$52$$, $b$$50$$) {
  var $aSize$$ = $a$$52$$.$getSize$(), $bSize$$ = $b$$50$$.$getSize$();
  return $aSize$$ > $bSize$$ ? -1 : $aSize$$ < $bSize$$ ? 1 : 0
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForCount$$($avgRelSize_chart$$25_s2$$2$$, $minArea$$1$$, $maxArea$$1$$, $minValue$$12_s1_t1$$, $maxValue$$14_t2$$) {
  for(var $bubbleCount$$ = 0, $sizeTotal$$ = 0, $seriesCount$$1$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($avgRelSize_chart$$25_s2$$2$$), $seriesIndex$$12$$ = 0;$seriesIndex$$12$$ < $seriesCount$$1$$;$seriesIndex$$12$$++) {
    for(var $seriesItem$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($avgRelSize_chart$$25_s2$$2$$, $seriesIndex$$12$$), $numDataItems$$ = $seriesItem$$1$$.items.length, $j$$81$$ = 0;$j$$81$$ < $numDataItems$$;$j$$81$$++) {
      var $dataItem$$9$$ = $seriesItem$$1$$.items[$seriesIndex$$12$$];
      $dataItem$$9$$ && $dataItem$$9$$.z && ($bubbleCount$$++, $sizeTotal$$ += $dataItem$$9$$.z)
    }
  }
  $avgRelSize_chart$$25_s2$$2$$ = ($sizeTotal$$ / $bubbleCount$$ - $minValue$$12_s1_t1$$) / ($maxValue$$14_t2$$ - $minValue$$12_s1_t1$$);
  $minValue$$12_s1_t1$$ = 15 + window.Math.floor(30 * (1 - $avgRelSize_chart$$25_s2$$2$$));
  $maxValue$$14_t2$$ = 30 + window.Math.floor(150 * (1 - $avgRelSize_chart$$25_s2$$2$$));
  $bubbleCount$$ >= $maxValue$$14_t2$$ ? $maxArea$$1$$ = $minArea$$1$$ + 0.15 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ >= $minValue$$12_s1_t1$$ && ($maxArea$$1$$ -= 0.85 / ($maxValue$$14_t2$$ - $minValue$$12_s1_t1$$) * ($bubbleCount$$ - $minValue$$12_s1_t1$$) * ($maxArea$$1$$ - $minArea$$1$$));
  $minValue$$12_s1_t1$$ = 5 + window.Math.floor(15 * (1 - $avgRelSize_chart$$25_s2$$2$$));
  $avgRelSize_chart$$25_s2$$2$$ = 30 + window.Math.floor(70 * (1 - $avgRelSize_chart$$25_s2$$2$$));
  $bubbleCount$$ < $minValue$$12_s1_t1$$ ? $minArea$$1$$ += 0.005 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ < $avgRelSize_chart$$25_s2$$2$$ && ($minArea$$1$$ += (0.005 - 0.005 / ($avgRelSize_chart$$25_s2$$2$$ - $minValue$$12_s1_t1$$) * ($bubbleCount$$ - $minValue$$12_s1_t1$$)) * ($maxArea$$1$$ - $minArea$$1$$));
  return{minArea:$minArea$$1$$, maxArea:$maxArea$$1$$}
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForDataRange$$($minArea$$2$$, $maxArea$$2$$, $buffer$$10_minValue$$13$$, $maxValue$$15$$) {
  if(0 != $maxValue$$15$$ - $buffer$$10_minValue$$13$$) {
    var $bubbleRatio$$ = $maxArea$$2$$ / $minArea$$2$$, $dataRatio$$ = $bubbleRatio$$;
    0 < $maxValue$$15$$ && 0 < $buffer$$10_minValue$$13$$ ? $dataRatio$$ = $maxValue$$15$$ / $buffer$$10_minValue$$13$$ : 0 > $buffer$$10_minValue$$13$$ && 0 > $maxValue$$15$$ && ($dataRatio$$ = $buffer$$10_minValue$$13$$ / $maxValue$$15$$);
    $dataRatio$$ < $bubbleRatio$$ && ($buffer$$10_minValue$$13$$ = $maxArea$$2$$ / $dataRatio$$ - $minArea$$2$$, 0 < $buffer$$10_minValue$$13$$ && ($minArea$$2$$ += $buffer$$10_minValue$$13$$))
  }else {
    $minArea$$2$$ = $maxArea$$2$$
  }
  return{minArea:$minArea$$2$$, maxArea:$maxArea$$2$$}
};
D.$DvtPieChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChartUtils$$, D.$DvtObj$$, "DvtPieChartUtils");
D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
D.$DvtPieChartUtils$$.$getSliceId$ = function $$DvtPieChartUtils$$$$getSliceId$$($chart$$69$$, $seriesIndex$$29$$) {
  var $dataItem$$14_id$$261$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$69$$, $seriesIndex$$29$$, 0), $dataItem$$14_id$$261$$ = $dataItem$$14_id$$261$$ ? $dataItem$$14_id$$261$$.id : D.$JSCompiler_alias_NULL$$, $series$$7$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$69$$, $seriesIndex$$29$$), $group$$26$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$69$$, 0);
  return new D.$DvtChartDataItem$$($dataItem$$14_id$$261$$, $series$$7$$, $group$$26$$)
};
D.$DvtPieChartUtils$$.$getOtherSliceId$ = function $$DvtPieChartUtils$$$$getOtherSliceId$$($chart$$70_group$$27$$) {
  $chart$$70_group$$27$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$70_group$$27$$, 0);
  return new D.$DvtChartDataItem$$(D.$JSCompiler_alias_NULL$$, D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, $chart$$70_group$$27$$)
};
D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$ = function $$DvtPieChartUtils$$$$getRenderedSeriesIndices$$($chart$$71$$) {
  return D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$71$$).$rendered$
};
D.$DvtPieChartUtils$$.$hasOtherSeries$ = function $$DvtPieChartUtils$$$$hasOtherSeries$$($chart$$72$$) {
  return 0 < D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$72$$).$other$.length
};
D.$DvtPieChartUtils$$.$getOtherValue$ = function $$DvtPieChartUtils$$$$getOtherValue$$($chart$$73$$) {
  for(var $otherSeries$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$73$$).$other$, $otherValue$$2$$ = 0, $i$$631$$ = 0;$i$$631$$ < $otherSeries$$.length;$i$$631$$++) {
    var $seriesIndex$$30_value$$126$$ = $otherSeries$$[$i$$631$$];
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$73$$, $seriesIndex$$30_value$$126$$) && ($seriesIndex$$30_value$$126$$ = D.$DvtChartDataUtils$$.getValue($chart$$73$$, $seriesIndex$$30_value$$126$$, 0), 0 < $seriesIndex$$30_value$$126$$ && ($otherValue$$2$$ += $seriesIndex$$30_value$$126$$))
  }
  return $otherValue$$2$$
};
D.$DvtPieChartUtils$$.$getOtherSliceIds$ = function $$DvtPieChartUtils$$$$getOtherSliceIds$$($chart$$74$$) {
  for(var $otherSeries$$1$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$74$$).$other$, $seriesIds$$ = [], $i$$632$$ = 0;$i$$632$$ < $otherSeries$$1$$.length;$i$$632$$++) {
    $seriesIds$$.push(D.$DvtPieChartUtils$$.$getSliceId$($chart$$74$$, $otherSeries$$1$$[$i$$632$$]))
  }
  return $seriesIds$$
};
D.$DvtPieChartUtils$$.$getOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$getOtherSliceVisibility$$($chart$$75$$) {
  for(var $otherSeries$$2$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$75$$).$other$, $i$$633$$ = 0;$i$$633$$ < $otherSeries$$2$$.length;$i$$633$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$75$$, $otherSeries$$2$$[$i$$633$$])) {
      return"visible"
    }
  }
  return"hidden"
};
D.$DvtPieChartUtils$$.$setOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$setOtherSliceVisibility$$($chart$$76$$, $visibility$$3$$) {
  for(var $otherSeries$$3$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$76$$).$other$, $i$$634$$ = 0;$i$$634$$ < $otherSeries$$3$$.length;$i$$634$$++) {
    D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$76$$, $otherSeries$$3$$[$i$$634$$]).visibility = $visibility$$3$$
  }
};
D.$DvtPieChartUtils$$.$isOtherSliceSelected$ = function $$DvtPieChartUtils$$$$isOtherSliceSelected$$($chart$$77$$, $selected$$29$$) {
  for(var $otherIds$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$77$$), $j$$86$$ = 0;$j$$86$$ < $otherIds$$.length;$j$$86$$++) {
    for(var $sliceId$$ = $otherIds$$[$j$$86$$], $sliceSelected$$ = D.$JSCompiler_alias_FALSE$$, $i$$635$$ = 0;$i$$635$$ < $selected$$29$$.length;$i$$635$$++) {
      if($selected$$29$$[$i$$635$$].id && $sliceId$$.getId() === $selected$$29$$[$i$$635$$].id || $sliceId$$.$getSeries$() === $selected$$29$$[$i$$635$$].series && $sliceId$$.$getGroup$() === $selected$$29$$[$i$$635$$].group) {
        $sliceSelected$$ = D.$JSCompiler_alias_TRUE$$;
        break
      }
    }
    if(!$sliceSelected$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$ = function $$DvtPieChartUtils$$$$_getSeriesIndicesArrays$$($chart$$78$$) {
  for(var $renderedSeries$$ = [], $otherSeries$$4$$ = [], $seriesCount$$5$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$78$$), $options$$185$$ = $chart$$78$$.$getOptions$(), $otherThreshold$$ = $options$$185$$.otherThreshold * D.$DvtPieChartUtils$$.$getTotalValue$($chart$$78$$), $seriesIndex$$34$$ = 0;$seriesIndex$$34$$ < $seriesCount$$5$$;$seriesIndex$$34$$++) {
    var $value$$127$$ = D.$DvtChartDataUtils$$.getValue($chart$$78$$, $seriesIndex$$34$$, 0);
    0 < $otherThreshold$$ && $value$$127$$ < $otherThreshold$$ ? $otherSeries$$4$$.push($seriesIndex$$34$$) : $renderedSeries$$.push($seriesIndex$$34$$)
  }
  "on" == $options$$185$$.sorting && $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$4$$) {
    return D.$DvtChartDataUtils$$.getValue($chart$$78$$, $otherSeries$$4$$, 0) - D.$DvtChartDataUtils$$.getValue($chart$$78$$, $renderedSeries$$, 0)
  });
  return{$rendered$:$renderedSeries$$, $other$:$otherSeries$$4$$}
};
D.$DvtPieChartUtils$$.$getTotalValue$ = function $$DvtPieChartUtils$$$$getTotalValue$$($chart$$79$$) {
  for(var $seriesCount$$6$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$79$$), $totalValue$$ = 0, $seriesIndex$$35$$ = 0;$seriesIndex$$35$$ < $seriesCount$$6$$;$seriesIndex$$35$$++) {
    var $value$$128$$ = D.$DvtChartDataUtils$$.getValue($chart$$79$$, $seriesIndex$$35$$, 0);
    0 < $value$$128$$ && ($totalValue$$ += $value$$128$$)
  }
  return $totalValue$$
};
D.$DvtPieChartUtils$$.$getSliceExplode$ = function $$DvtPieChartUtils$$$$getSliceExplode$$($chart$$80$$, $seriesIndex$$36$$) {
  var $seriesItem$$13$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$80$$, $seriesIndex$$36$$);
  return $seriesItem$$13$$ && $seriesItem$$13$$.pieSliceExplode ? $seriesItem$$13$$.pieSliceExplode : 0
};
D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtPieChartUtils$$$$getOtherSliceShowPopupBehaviors$$($chart$$81$$) {
  var $firstDataItemSeriesIndex_otherSliceIds_stampId$$8$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$81$$);
  if($firstDataItemSeriesIndex_otherSliceIds_stampId$$8$$ && 1 <= $firstDataItemSeriesIndex_otherSliceIds_stampId$$8$$.length) {
    return $firstDataItemSeriesIndex_otherSliceIds_stampId$$8$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$81$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$8$$[0].$getSeries$()), $firstDataItemSeriesIndex_otherSliceIds_stampId$$8$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$81$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$8$$, 0)._id, $chart$$81$$.$getShowPopupBehaviors$($firstDataItemSeriesIndex_otherSliceIds_stampId$$8$$)
  }
};
D.$DvtPieRenderUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieRenderUtils$$, D.$DvtObj$$, "DvtPieRenderUtils");
D.$DvtPieRenderUtils$$.$TWOD$ = "2D";
D.$DvtPieRenderUtils$$.$THREED$ = "3D";
D.$DvtPieRenderUtils$$.$CRUST$ = "CRUST";
D.$DvtPieRenderUtils$$.$SIDE$ = "SIDE";
D.$DvtPieRenderUtils$$.$BORDER$ = "BORDER";
D.$DvtPieRenderUtils$$.$SURFACE_CRUST$ = 0;
D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ = 1;
D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
D.$DvtPieRenderUtils$$.$SURFACE_TOP$ = 3;
D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtPieRenderUtils$$$$reflectAngleOverYAxis$$($angle$$45_radian$$1$$, $cx$$32$$, $cy$$33$$, $rx$$26$$, $ry$$22$$) {
  $angle$$45_radian$$1$$ = D.$DvtMath$$.$degreesToRads$(360 - $angle$$45_radian$$1$$);
  return{x:$cx$$32$$ + window.Math.cos($angle$$45_radian$$1$$) * $rx$$26$$, y:$cy$$33$$ + window.Math.sin($angle$$45_radian$$1$$) * $ry$$22$$}
};
D.$DvtPieRenderUtils$$.$getGradientColors$ = function $$DvtPieRenderUtils$$$$getGradientColors$$($baseColor_c3$$, $arColors$$29_style$$94$$, $c$$31_skin$$14$$) {
  if($c$$31_skin$$14$$ && "skyros" != $c$$31_skin$$14$$) {
    if($arColors$$29_style$$94$$ == D.$DvtPieRenderUtils$$.$TWOD$ || $arColors$$29_style$$94$$ == D.$DvtPieRenderUtils$$.$THREED$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.09, 0.04)]
    }
    if($arColors$$29_style$$94$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, 0, -0.14)]
    }
    if($arColors$$29_style$$94$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.1, 0.06), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05)]
    }
  }else {
    if($arColors$$29_style$$94$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
      return $arColors$$29_style$$94$$ = [], $arColors$$29_style$$94$$[0] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.1)), $arColors$$29_style$$94$$[1] = $arColors$$29_style$$94$$[0], $arColors$$29_style$$94$$[2] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.9)), $arColors$$29_style$$94$$
    }
    if($arColors$$29_style$$94$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
      return["#FFFFFF", "#000000", "#000000"]
    }
    $c$$31_skin$$14$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.88));
    var $c1$$3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.05)), $c2$$3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.15));
    $baseColor_c3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.35));
    if($arColors$$29_style$$94$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[$c$$31_skin$$14$$, $c2$$3$$, $baseColor_c3$$, $c$$31_skin$$14$$]
    }
    if("SIDE" == $arColors$$29_style$$94$$) {
      return[$c$$31_skin$$14$$, $baseColor_c3$$]
    }
    if("3D" == $arColors$$29_style$$94$$) {
      return[$baseColor_c3$$, $c2$$3$$, $c$$31_skin$$14$$, $c1$$3$$, $baseColor_c3$$]
    }
  }
};
D.$DvtPieRenderUtils$$.$getGradientAlphas$ = function $$DvtPieRenderUtils$$$$getGradientAlphas$$($baseAlpha$$, $style$$95$$) {
  var $alpha$$41$$ = $baseAlpha$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($baseAlpha$$) || 0 == $baseAlpha$$ ? 1 : $baseAlpha$$;
  if($style$$95$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[$alpha$$41$$, $alpha$$41$$, $alpha$$41$$]
  }
  if($style$$95$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[$alpha$$41$$ / 1.59375, $alpha$$41$$ / 5.3125, $alpha$$41$$ / 2.65625]
  }
  if($style$$95$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[$alpha$$41$$, $alpha$$41$$, $alpha$$41$$, $alpha$$41$$, $alpha$$41$$]
  }
  if($style$$95$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[$alpha$$41$$, $alpha$$41$$, $alpha$$41$$, $alpha$$41$$]
  }
  if($style$$95$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[$alpha$$41$$, $alpha$$41$$]
  }
};
D.$DvtPieRenderUtils$$.$getGradientRatios$ = function $$DvtPieRenderUtils$$$$getGradientRatios$$($style$$96$$, $skin$$15$$) {
  if($skin$$15$$ && "skyros" != $skin$$15$$) {
    return[0, 1]
  }
  if($style$$96$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[0.2, 0.5, 1]
  }
  if($style$$96$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[0, 0.5, 1]
  }
  if($style$$96$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[0, 0.29, 0.55, 0.84, 1]
  }
  if($style$$96$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[0, 0.43, 0.91, 1]
  }
  if($style$$96$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[0, 1]
  }
};
D.$DvtPieRenderUtils$$.$createTopSurface$ = function $$DvtPieRenderUtils$$$$createTopSurface$$($slice$$17$$, $fill$$45$$) {
  var $edge_pieChart$$7$$ = $slice$$17$$.$_pieChart$, $context$$602_shapes$$11_wedge$$ = $edge_pieChart$$7$$.$_context$, $ariaLabel$$1_pieCenter$$ = $edge_pieChart$$7$$.$getCenter$(), $sliceClosureType$$ = "PIE";
  360 == $slice$$17$$.$getAngleExtent$() && ($sliceClosureType$$ = "OPEN");
  $context$$602_shapes$$11_wedge$$ = new D.$DvtGraphSelectableArc$$($context$$602_shapes$$11_wedge$$, $ariaLabel$$1_pieCenter$$.x, $ariaLabel$$1_pieCenter$$.y, $slice$$17$$.$_radiusX$, $slice$$17$$.$_radiusY$, $slice$$17$$.$getAngleStart$(), $slice$$17$$.$getAngleExtent$(), $sliceClosureType$$);
  $context$$602_shapes$$11_wedge$$.$setDataColor$($slice$$17$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($edge_pieChart$$7$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($edge_pieChart$$7$$.$chart$));
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$602_shapes$$11_wedge$$, $slice$$17$$.$_explodeOffsetX$, $slice$$17$$.$_explodeOffsetY$);
  $context$$602_shapes$$11_wedge$$.$setFill$($fill$$45$$);
  $slice$$17$$.$getStrokeColor$() && $context$$602_shapes$$11_wedge$$.$setSolidStroke$($slice$$17$$.$getStrokeColor$());
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($context$$602_shapes$$11_wedge$$);
  $ariaLabel$$1_pieCenter$$ = $slice$$17$$.$getTooltip$();
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($context$$602_shapes$$11_wedge$$, "label", $ariaLabel$$1_pieCenter$$);
  $context$$602_shapes$$11_wedge$$ = [$context$$602_shapes$$11_wedge$$];
  if(!$slice$$17$$.$getStrokeColor$() && "skyros" == $edge_pieChart$$7$$.$getSkin$() && (0,D.$JSCompiler_StaticMethods_is3D$$)($edge_pieChart$$7$$) && 0 < $edge_pieChart$$7$$.$getDepth$() && "gradient" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($edge_pieChart$$7$$.$chart$) && (180 <= $slice$$17$$.$getAngleStart$() || 180 <= $slice$$17$$.$getAngleStart$() + $slice$$17$$.$getAngleExtent$() || 360 == $slice$$17$$.$getAngleExtent$())) {
    $edge_pieChart$$7$$ = D.$DvtPieRenderUtils$$.$_createGradientPieBorder$($slice$$17$$, $fill$$45$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($edge_pieChart$$7$$, $slice$$17$$.$_explodeOffsetX$, $slice$$17$$.$_explodeOffsetY$), $context$$602_shapes$$11_wedge$$.push($edge_pieChart$$7$$)
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$17$$, $context$$602_shapes$$11_wedge$$);
  return $context$$602_shapes$$11_wedge$$
};
D.$DvtPieRenderUtils$$.$associate$ = function $$DvtPieRenderUtils$$$$associate$$($slice$$18$$, $displayables$$23$$) {
  if($displayables$$23$$) {
    for(var $i$$639$$ = 0;$i$$639$$ < $displayables$$23$$.length;$i$$639$$++) {
      $slice$$18$$.$_pieChart$.$chart$.$getEventManager$().$associate$($displayables$$23$$[$i$$639$$], $slice$$18$$)
    }
  }
};
D.$DvtPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtPieRenderUtils$$$$_createGradientPieBorder$$($slice$$19$$, $topFill$$1$$) {
  var $angExtent_arRatios$$3_diff$$13_style$$97$$ = D.$DvtPieRenderUtils$$.$BORDER$, $arColors$$30_gradBorder$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$3_diff$$13_style$$97$$), $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$3_diff$$13_style$$97$$), $angExtent_arRatios$$3_diff$$13_style$$97$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($angExtent_arRatios$$3_diff$$13_style$$97$$), 
  $arBounds$$12_pieChart$$8$$ = $topFill$$1$$.$getBounds$();
  window.grAngle = 120;
  $arColors$$30_gradBorder$$ = new D.$DvtLinearGradientStroke$$(window.grAngle, $arColors$$30_gradBorder$$, $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$3_diff$$13_style$$97$$, $arBounds$$12_pieChart$$8$$);
  $arColors$$30_gradBorder$$.$setWidth$(1);
  $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$ = $slice$$19$$.$getAngleStart$();
  $angExtent_arRatios$$3_diff$$13_style$$97$$ = 180 > $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$ ? 180 - $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$ : 0;
  $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$ = 0 < $angExtent_arRatios$$3_diff$$13_style$$97$$ ? 180 : $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$;
  $angExtent_arRatios$$3_diff$$13_style$$97$$ = $slice$$19$$.$getAngleExtent$() - $angExtent_arRatios$$3_diff$$13_style$$97$$;
  360 < $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$ + $angExtent_arRatios$$3_diff$$13_style$$97$$ && ($angExtent_arRatios$$3_diff$$13_style$$97$$ = 360 - $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$);
  var $arBounds$$12_pieChart$$8$$ = $slice$$19$$.$_pieChart$, $pieCenter$$1$$ = $arBounds$$12_pieChart$$8$$.$getCenter$(), $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$ = new D.$DvtArc$$($arBounds$$12_pieChart$$8$$.$_context$, $pieCenter$$1$$.x, $pieCenter$$1$$.y, $arBounds$$12_pieChart$$8$$.$_radiusX$, $arBounds$$12_pieChart$$8$$.$_radiusY$, $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$3_diff$$13_style$$97$$, "OPEN");
  $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$.$setStroke$($arColors$$30_gradBorder$$);
  return $angStart_arAlphas$$28_edge$$1_sliceAngleStart$$
};
D.$DvtPieRenderUtils$$.$createLateralSurface$ = function $$DvtPieRenderUtils$$$$createLateralSurface$$($slice$$20$$, $pathType$$, $fill$$46$$) {
  if(0 == $slice$$20$$.$getAngleExtent$()) {
    return[]
  }
  var $shapes$$12$$ = [];
  if(0 < D.$DvtColorUtils$$.$getAlpha$($slice$$20$$.$getFillColor$())) {
    if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
      $shapes$$12$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$20$$, $pathType$$, D.$JSCompiler_alias_NULL$$, $fill$$46$$))
    }else {
      if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_CRUST$) {
        for(var $pathCommands$$1$$ = D.$DvtPieRenderUtils$$.$_createCrustPathCommands$($slice$$20$$), $len$$25$$ = $pathCommands$$1$$.length, $i$$640$$ = 0;$i$$640$$ < $len$$25$$;$i$$640$$++) {
          $shapes$$12$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$20$$, $pathType$$, $pathCommands$$1$$[$i$$640$$], $fill$$46$$))
        }
      }
    }
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$20$$, $shapes$$12$$);
  return $shapes$$12$$
};
D.$DvtPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtPieRenderUtils$$$$generateLateralGradientFill$$($slice$$21$$, $objType$$) {
  var $pieChart$$9$$ = $slice$$21$$.$_pieChart$, $skin$$16$$ = $pieChart$$9$$.$getSkin$(), $yOffset$$8$$ = $objType$$ == D.$DvtPieRenderUtils$$.$CRUST$ ? $pieChart$$9$$.$getDepth$() : 0, $angle$$46$$ = "skyros" == $skin$$16$$ ? 0 : 270, $arColors$$31$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($slice$$21$$.$getFillColor$()), $objType$$, $skin$$16$$), $arAlphas$$29$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($slice$$21$$.$getFillColor$()), 
  $objType$$), $arRatios$$4$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($objType$$, $skin$$16$$), $arBounds$$13$$ = D.$JSCompiler_alias_NULL$$;
  "skyros" == $skin$$16$$ && ($arBounds$$13$$ = [window.Math.floor($pieChart$$9$$.$getCenter$().x - $pieChart$$9$$.$_radiusX$), window.Math.floor($pieChart$$9$$.$getCenter$().y - $pieChart$$9$$.$_radiusY$) + $yOffset$$8$$, window.Math.ceil(2 * $pieChart$$9$$.$_radiusX$), window.Math.ceil(2 * $pieChart$$9$$.$_radiusY$)]);
  return new D.$DvtLinearGradientFill$$($angle$$46$$, $arColors$$31$$, $arAlphas$$29$$, $arRatios$$4$$, $arBounds$$13$$)
};
D.$DvtPieRenderUtils$$.$_generateLateralShape$ = function $$DvtPieRenderUtils$$$$_generateLateralShape$$($slice$$22$$, $pathType$$1_pointArray_pt$$2$$, $pathCommand_points$$64_xCenter$$, $fill$$47$$) {
  var $pie$$9$$ = $slice$$22$$.$_pieChart$, $context$$603_path$$18_polygon$$1$$ = $pie$$9$$.$_context$;
  if($pathType$$1_pointArray_pt$$2$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$1_pointArray_pt$$2$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
    var $angle$$47$$ = $slice$$22$$.$getAngleStart$(), $arc$$2$$ = $slice$$22$$.$getAngleExtent$();
    $pathCommand_points$$64_xCenter$$ = $pie$$9$$.$getCenter$().x;
    var $i$$641_yCenter$$ = $pie$$9$$.$getCenter$().y, $xRadius$$ = $slice$$22$$.$_radiusX$, $yRadius$$ = $slice$$22$$.$_radiusY$, $depth$$11$$ = $pie$$9$$.$getDepth$();
    $pathType$$1_pointArray_pt$$2$$ = $pathType$$1_pointArray_pt$$2$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ ? D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$47$$ + $arc$$2$$, $pathCommand_points$$64_xCenter$$, $i$$641_yCenter$$, $xRadius$$, $yRadius$$) : D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$47$$, $pathCommand_points$$64_xCenter$$, $i$$641_yCenter$$, $xRadius$$, $yRadius$$);
    $pathType$$1_pointArray_pt$$2$$ = D.$DvtPieRenderUtils$$.$_generateInnerPoints$($pathCommand_points$$64_xCenter$$, $i$$641_yCenter$$, $pathType$$1_pointArray_pt$$2$$.x, $pathType$$1_pointArray_pt$$2$$.y, $depth$$11$$);
    $pathCommand_points$$64_xCenter$$ = [];
    for($i$$641_yCenter$$ = 0;$i$$641_yCenter$$ < $pathType$$1_pointArray_pt$$2$$.length;$i$$641_yCenter$$++) {
      $pathCommand_points$$64_xCenter$$.push($pathType$$1_pointArray_pt$$2$$[$i$$641_yCenter$$].x, $pathType$$1_pointArray_pt$$2$$[$i$$641_yCenter$$].y)
    }
    $context$$603_path$$18_polygon$$1$$ = new D.$DvtGraphSelectablePolygon$$($context$$603_path$$18_polygon$$1$$, $pathCommand_points$$64_xCenter$$);
    $context$$603_path$$18_polygon$$1$$.$setDataColor$($slice$$22$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$9$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$9$$.$chart$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$603_path$$18_polygon$$1$$, $slice$$22$$.$_explodeOffsetX$, $slice$$22$$.$_explodeOffsetY$);
    $context$$603_path$$18_polygon$$1$$.$setFill$($fill$$47$$);
    $slice$$22$$.$getStrokeColor$() && $context$$603_path$$18_polygon$$1$$.$setSolidStroke$($slice$$22$$.$getStrokeColor$());
    return $context$$603_path$$18_polygon$$1$$
  }
  return $pathCommand_points$$64_xCenter$$ ? ($context$$603_path$$18_polygon$$1$$ = new D.$DvtGraphSelectablePath$$($context$$603_path$$18_polygon$$1$$, D.$JSCompiler_alias_NULL$$), $context$$603_path$$18_polygon$$1$$.$setDataColor$($slice$$22$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$9$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$9$$.$chart$)), $context$$603_path$$18_polygon$$1$$.$setCmds$($pathCommand_points$$64_xCenter$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$603_path$$18_polygon$$1$$, 
  $slice$$22$$.$_explodeOffsetX$, $slice$$22$$.$_explodeOffsetY$), $context$$603_path$$18_polygon$$1$$.$setFill$($fill$$47$$), $slice$$22$$.$getStrokeColor$() && $context$$603_path$$18_polygon$$1$$.$setSolidStroke$($slice$$22$$.$getStrokeColor$()), $context$$603_path$$18_polygon$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtPieRenderUtils$$$$_createCrustPathCommands$$($slice$$23_yRadius$$1$$) {
  var $angle$$48$$ = $slice$$23_yRadius$$1$$.$getAngleStart$(), $arc$$3$$ = $slice$$23_yRadius$$1$$.$getAngleExtent$(), $angleEnd$$ = $angle$$48$$ + $arc$$3$$, $depth$$12_pie$$10$$ = $slice$$23_yRadius$$1$$.$_pieChart$, $xCenter$$1$$ = $depth$$12_pie$$10$$.$getCenter$().x, $yCenter$$1$$ = $depth$$12_pie$$10$$.$getCenter$().y, $xRadius$$1$$ = $slice$$23_yRadius$$1$$.$_radiusX$;
  $slice$$23_yRadius$$1$$ = $slice$$23_yRadius$$1$$.$_radiusY$;
  var $depth$$12_pie$$10$$ = $depth$$12_pie$$10$$.$getDepth$(), $arOuterPath$$ = [];
  180 > $angle$$48$$ && 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$23_yRadius$$1$$, $depth$$12_pie$$10$$, $angle$$48$$, 180 - $angle$$48$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$23_yRadius$$1$$, $depth$$12_pie$$10$$, 360, $angleEnd$$ - 360)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, 
  $xRadius$$1$$, $slice$$23_yRadius$$1$$, $depth$$12_pie$$10$$, 180, 180))) : 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$23_yRadius$$1$$, $depth$$12_pie$$10$$, $angle$$48$$, 360 - $angle$$48$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$23_yRadius$$1$$, $depth$$12_pie$$10$$, 360, $angleEnd$$ - 360))) : 180 > $angle$$48$$ && 180 < $angleEnd$$ ? 
  ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$23_yRadius$$1$$, $depth$$12_pie$$10$$, $angle$$48$$, 180 - $angle$$48$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$23_yRadius$$1$$, $depth$$12_pie$$10$$, 180, $angleEnd$$ - 180))) : $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$23_yRadius$$1$$, 
  $depth$$12_pie$$10$$, $angle$$48$$, $arc$$3$$));
  return $arOuterPath$$
};
D.$DvtPieRenderUtils$$.$_makeOuterPath$ = function $$DvtPieRenderUtils$$$$_makeOuterPath$$($cx$$33_endPointTopX$$, $cy$$34_endPointTopY$$, $rx$$27$$, $ry$$23$$, $depth$$13$$, $startAngle$$20_startPointTop$$, $angleExtent$$16_angleExtentRads$$) {
  $angleExtent$$16_angleExtentRads$$ = D.$DvtMath$$.$degreesToRads$($angleExtent$$16_angleExtentRads$$);
  var $endAngleRads_pathCommands$$2$$ = -(D.$DvtMath$$.$degreesToRads$($startAngle$$20_startPointTop$$) + $angleExtent$$16_angleExtentRads$$);
  $cy$$34_endPointTopY$$ -= 1;
  $startAngle$$20_startPointTop$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($startAngle$$20_startPointTop$$, $cx$$33_endPointTopX$$, $cy$$34_endPointTopY$$, $rx$$27$$, $ry$$23$$);
  $cx$$33_endPointTopX$$ += window.Math.cos($endAngleRads_pathCommands$$2$$) * $rx$$27$$;
  $cy$$34_endPointTopY$$ += window.Math.sin($endAngleRads_pathCommands$$2$$) * $ry$$23$$;
  $endAngleRads_pathCommands$$2$$ = window.DvtPathUtils.moveTo($startAngle$$20_startPointTop$$.x, $startAngle$$20_startPointTop$$.y);
  $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.arcTo($rx$$27$$, $ry$$23$$, $angleExtent$$16_angleExtentRads$$, 0, $cx$$33_endPointTopX$$, $cy$$34_endPointTopY$$);
  $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.lineTo($cx$$33_endPointTopX$$, $cy$$34_endPointTopY$$ + $depth$$13$$);
  $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.arcTo($rx$$27$$, $ry$$23$$, $angleExtent$$16_angleExtentRads$$, 1, $startAngle$$20_startPointTop$$.x, $startAngle$$20_startPointTop$$.y + $depth$$13$$);
  return $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.lineTo($startAngle$$20_startPointTop$$.x, $startAngle$$20_startPointTop$$.y)
};
D.$DvtPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtPieRenderUtils$$$$_generateInnerPoints$$($cx$$34$$, $cy$$35$$, $xpos$$, $ypos$$, $tilt$$4$$) {
  var $pointArray$$1$$ = [];
  $pointArray$$1$$.push({x:$cx$$34$$, y:$cy$$35$$});
  $pointArray$$1$$.push({x:$xpos$$, y:$ypos$$});
  $pointArray$$1$$.push({x:$xpos$$, y:$ypos$$ + $tilt$$4$$});
  $pointArray$$1$$.push({x:$cx$$34$$, y:$cy$$35$$ + $tilt$$4$$});
  return $pointArray$$1$$
};
D.$DvtPieLabelInfo$$ = function $$DvtPieLabelInfo$$$() {
  this.$_slice$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_minY$ = this.$_maxY$ = -1
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelInfo$$, D.$DvtObj$$, "DvtPieLabelInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAngle$ = (0,D.$JSCompiler_get$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.$setAngle$ = (0,D.$JSCompiler_set$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$getMaxY$ = (0,D.$JSCompiler_get$$)("$_maxY$");
D.$JSCompiler_prototypeAlias$$.$getMinY$ = (0,D.$JSCompiler_get$$)("$_minY$");
D.$JSCompiler_StaticMethods_boundY$$ = function $$JSCompiler_StaticMethods_boundY$$$($JSCompiler_StaticMethods_boundY$self$$, $y$$235$$) {
  $y$$235$$ = window.Math.max($y$$235$$, $JSCompiler_StaticMethods_boundY$self$$.$_minY$);
  return $y$$235$$ = window.Math.min($y$$235$$, $JSCompiler_StaticMethods_boundY$self$$.$_maxY$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getPosition$ = (0,D.$JSCompiler_get$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setPosition$ = (0,D.$JSCompiler_set$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtPieLabelUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelUtils$$, D.$DvtObj$$, "DvtPieLabelUtils");
D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 0.04;
D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = 0.5;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
D.$DvtPieLabelUtils$$.$_NO_COLLISION$ = 0;
D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ = 1;
D.$DvtPieLabelUtils$$.$_ALL_COLLISION$ = 2;
D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$layoutLabelsAndFeelers$$($pie$$) {
  var $labelPosition$$2$$ = $pie$$.$getLabelPosition$();
  "none" != $labelPosition$$2$$ && ("inside" == $labelPosition$$2$$ ? D.$DvtPieLabelUtils$$.$_layoutInsideLabels$($pie$$) : D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($pie$$))
};
D.$DvtPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtPieLabelUtils$$$$_layoutInsideLabels$$($pie$$1$$) {
  if($pie$$1$$ != D.$JSCompiler_alias_NULL$$) {
    var $slices$$5$$ = $pie$$1$$.$_slices$, $n$$32$$ = $slices$$5$$.length;
    if(0 < $n$$32$$) {
      for(window.i = 0;window.i < $n$$32$$;window.i++) {
        var $slice$$9$$ = $slices$$5$$[window.i], $estimatedDims$$3_midAngle$$1_midPt$$1$$;
        $estimatedDims$$3_midAngle$$1_midPt$$1$$ = $slice$$9$$.$getAngleStart$() + $slice$$9$$.$getAngleExtent$() / 2;
        var $center$$15_x1$$32$$ = $pie$$1$$.$getCenter$(), $posX$$2_usableSpace$$1$$ = 0, $posY$$1_stage$$14_y2$$24$$ = 0, $sliceLabel$$1$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$9$$, D.$JSCompiler_alias_TRUE$$);
        1 == $n$$32$$ ? ($posX$$2_usableSpace$$1$$ = $center$$15_x1$$32$$.x, $posY$$1_stage$$14_y2$$24$$ = $center$$15_x1$$32$$.y) : ($estimatedDims$$3_midAngle$$1_midPt$$1$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($estimatedDims$$3_midAngle$$1_midPt$$1$$, $center$$15_x1$$32$$.x, $center$$15_x1$$32$$.y, 0.66 * $pie$$1$$.$_radiusX$, 0.66 * $pie$$1$$.$_radiusY$), $posX$$2_usableSpace$$1$$ = $estimatedDims$$3_midAngle$$1_midPt$$1$$.x, $posY$$1_stage$$14_y2$$24$$ = $estimatedDims$$3_midAngle$$1_midPt$$1$$.y);
        $sliceLabel$$1$$.$setX$($posX$$2_usableSpace$$1$$);
        $sliceLabel$$1$$.$setY$($posY$$1_stage$$14_y2$$24$$);
        $sliceLabel$$1$$.$alignMiddle$();
        $sliceLabel$$1$$.$alignCenter$();
        $estimatedDims$$3_midAngle$$1_midPt$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($sliceLabel$$1$$);
        for(var $x2$$28$$ = $center$$15_x1$$32$$ = $posX$$2_usableSpace$$1$$, $y1$$28$$ = $posY$$1_stage$$14_y2$$24$$ - $estimatedDims$$3_midAngle$$1_midPt$$1$$.$h$ / 2, $posY$$1_stage$$14_y2$$24$$ = $posY$$1_stage$$14_y2$$24$$ + $estimatedDims$$3_midAngle$$1_midPt$$1$$.$h$ / 2;$slice$$9$$.contains($center$$15_x1$$32$$, $y1$$28$$) && $slice$$9$$.contains($center$$15_x1$$32$$, $posY$$1_stage$$14_y2$$24$$);) {
          $center$$15_x1$$32$$--
        }
        for(;$slice$$9$$.contains($x2$$28$$, $y1$$28$$) && $slice$$9$$.contains($x2$$28$$, $posY$$1_stage$$14_y2$$24$$);) {
          $x2$$28$$++
        }
        $center$$15_x1$$32$$ += 3;
        $x2$$28$$ -= 3;
        $posX$$2_usableSpace$$1$$ = 2 * window.Math.min($posX$$2_usableSpace$$1$$ - $center$$15_x1$$32$$, $x2$$28$$ - $posX$$2_usableSpace$$1$$);
        $posX$$2_usableSpace$$1$$ < $estimatedDims$$3_midAngle$$1_midPt$$1$$.$w$ && ($sliceLabel$$1$$.$setX$(($center$$15_x1$$32$$ + $x2$$28$$) / 2), $posX$$2_usableSpace$$1$$ = $x2$$28$$ - $center$$15_x1$$32$$);
        $posY$$1_stage$$14_y2$$24$$ = $slice$$9$$.$_pieChart$.$_context$.$_stage$;
        D.$DvtTextUtils$$.$fitText$($sliceLabel$$1$$, $posX$$2_usableSpace$$1$$, $estimatedDims$$3_midAngle$$1_midPt$$1$$.$h$, $posY$$1_stage$$14_y2$$24$$) && ($posY$$1_stage$$14_y2$$24$$.removeChild($sliceLabel$$1$$), $slice$$9$$.$setSliceLabel$($sliceLabel$$1$$))
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($pie$$2$$) {
  if($pie$$2$$ != D.$JSCompiler_alias_NULL$$) {
    var $leftLabels$$ = [], $alabels_rightLabels$$ = [], $alabels_rightLabels$$ = D.$DvtPieLabelUtils$$.$_generateInitialLayout$($pie$$2$$), $leftLabels$$ = $alabels_rightLabels$$[0], $alabels_rightLabels$$ = $alabels_rightLabels$$[1], $leftColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$2$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $rightColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$2$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
    $leftColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && $rightColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$2$$, $leftLabels$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    $leftColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && $rightColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$2$$, $alabels_rightLabels$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$2$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$2$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$)
  }
};
D.$DvtPieLabelUtils$$.$_createLabel$ = function $$DvtPieLabelUtils$$$$_createLabel$$($slice$$10$$, $noWrap$$4$$) {
  var $backgroundColor$$12_labelStr$$1_pieChart$$3$$ = $slice$$10$$.$_pieChart$;
  if("none" == $backgroundColor$$12_labelStr$$1_pieChart$$3$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $context$$601_sliceLabel$$2$$ = $backgroundColor$$12_labelStr$$1_pieChart$$3$$.$_context$, $context$$601_sliceLabel$$2$$ = $noWrap$$4$$ ? new D.$DvtOutputText$$($context$$601_sliceLabel$$2$$) : new D.$DvtMultilineText$$($context$$601_sliceLabel$$2$$), $defaultColor$$1_sd$$ = $backgroundColor$$12_labelStr$$1_pieChart$$3$$.$getOptions$().styleDefaults, $style$$91$$ = $defaultColor$$1_sd$$.sliceLabelStyle;
  if($style$$91$$) {
    var $styleStr$$ = $style$$91$$.toString();
    -1 == $styleStr$$.indexOf("color") && ($defaultColor$$1_sd$$ = $defaultColor$$1_sd$$._defaultSliceLabelColor, "inside" == $backgroundColor$$12_labelStr$$1_pieChart$$3$$.$getLabelPosition$() && ($backgroundColor$$12_labelStr$$1_pieChart$$3$$ = $slice$$10$$.$getFillColor$(), $defaultColor$$1_sd$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($backgroundColor$$12_labelStr$$1_pieChart$$3$$)), $style$$91$$ = new D.$DvtCSSStyle$$($styleStr$$ + ("color: " + $defaultColor$$1_sd$$ + ";")))
  }
  D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$($style$$91$$, $context$$601_sliceLabel$$2$$);
  $backgroundColor$$12_labelStr$$1_pieChart$$3$$ = D.$DvtPieLabelUtils$$.$_generateSliceLabelString$($slice$$10$$);
  $context$$601_sliceLabel$$2$$.$setTextString$($backgroundColor$$12_labelStr$$1_pieChart$$3$$);
  $slice$$10$$.$_sliceLabelString$ = $backgroundColor$$12_labelStr$$1_pieChart$$3$$;
  return $context$$601_sliceLabel$$2$$
};
D.$DvtPieLabelUtils$$.$_generateSliceLabelString$ = function $$DvtPieLabelUtils$$$$_generateSliceLabelString$$($labelType$$5_slice$$11$$) {
  var $pieChart$$4$$ = $labelType$$5_slice$$11$$.$_pieChart$;
  if("none" == $pieChart$$4$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $customLabel_svalue$$ = $labelType$$5_slice$$11$$.$_customLabel$;
  if($customLabel_svalue$$ != D.$JSCompiler_alias_NULL$$) {
    return $customLabel_svalue$$
  }
  var $dataTotal$$1_percentage$$1_s$$116_spercent$$ = "", $stext_value$$124$$ = $customLabel_svalue$$ = "", $dataTotal$$1_percentage$$1_s$$116_spercent$$ = "", $stext_value$$124$$ = $labelType$$5_slice$$11$$.getValue(), $valueFormats$$3$$ = $labelType$$5_slice$$11$$.$_chart$.$getOptions$().valueFormats, $dataTotal$$1_percentage$$1_s$$116_spercent$$ = 0, $dataTotal$$1_percentage$$1_s$$116_spercent$$ = $pieChart$$4$$.$getTotalValue$(), $dataTotal$$1_percentage$$1_s$$116_spercent$$ = 0 == $dataTotal$$1_percentage$$1_s$$116_spercent$$ ? 
  0 : 100 * (window.Math.abs($stext_value$$124$$) / $dataTotal$$1_percentage$$1_s$$116_spercent$$);
  if($valueFormats$$3$$) {
    $dataTotal$$1_percentage$$1_s$$116_spercent$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($valueFormats$$3$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $labelType$$5_slice$$11$$.getValue() / 100)
  }else {
    $dataTotal$$1_percentage$$1_s$$116_spercent$$ = $dataTotal$$1_percentage$$1_s$$116_spercent$$.toString();
    if(5 < $dataTotal$$1_percentage$$1_s$$116_spercent$$.length) {
      $dataTotal$$1_percentage$$1_s$$116_spercent$$ = $dataTotal$$1_percentage$$1_s$$116_spercent$$.slice(0, 5)
    }else {
      for(0 > $dataTotal$$1_percentage$$1_s$$116_spercent$$.indexOf(".", 0) && 4 > $dataTotal$$1_percentage$$1_s$$116_spercent$$.length && ($dataTotal$$1_percentage$$1_s$$116_spercent$$ += ".");5 > $dataTotal$$1_percentage$$1_s$$116_spercent$$.length;) {
        $dataTotal$$1_percentage$$1_s$$116_spercent$$ += "0"
      }
    }
    $dataTotal$$1_percentage$$1_s$$116_spercent$$ += "%"
  }
  (0,window.isNaN)($stext_value$$124$$) || ($customLabel_svalue$$ = $valueFormats$$3$$ ? D.$DvtChartTooltipUtils$$.$_formatValue$($valueFormats$$3$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $labelType$$5_slice$$11$$.getValue()) : $stext_value$$124$$.toString());
  $stext_value$$124$$ = $labelType$$5_slice$$11$$.$getSeriesLabel$();
  $labelType$$5_slice$$11$$ = $pieChart$$4$$.$getOptions$().styleDefaults.sliceLabelType;
  return"percent" == $labelType$$5_slice$$11$$ ? $dataTotal$$1_percentage$$1_s$$116_spercent$$ : "number" == $labelType$$5_slice$$11$$ ? $customLabel_svalue$$ : "text" == $labelType$$5_slice$$11$$ ? $stext_value$$124$$ : "textAndPercent" == $labelType$$5_slice$$11$$ ? $stext_value$$124$$ + ", " + $dataTotal$$1_percentage$$1_s$$116_spercent$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$ = function $$DvtPieLabelUtils$$$$_setFontPropsOnLabel$$($style$$92$$, $sliceLabel$$3$$) {
  $sliceLabel$$3$$ == D.$JSCompiler_alias_NULL$$ || $style$$92$$ == D.$JSCompiler_alias_NULL$$ || $sliceLabel$$3$$.$setCSSStyle$($style$$92$$)
};
D.$DvtPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtPieLabelUtils$$$$_refineInitialLayout$$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$5$$) {
  if($labelInfoArray$$ && 0 < $labelInfoArray$$.length) {
    var $lastY$$1$$ = $pie$$3$$.$_frame$.y, $collisionTop$$ = D.$JSCompiler_alias_FALSE$$, $collisionCentral$$ = D.$JSCompiler_alias_FALSE$$, $collisionBottom$$ = D.$JSCompiler_alias_FALSE$$, $labelBottom$$ = 0, $collide_labelInfo$$4$$, $bottomQuarter$$ = D.$JSCompiler_alias_FALSE$$, $prevBottomQuarter$$ = $bottomQuarter$$;
    $collide_labelInfo$$4$$ = D.$JSCompiler_alias_FALSE$$;
    $isLeftSideLabels_side$$5$$ = $isLeftSideLabels_side$$5$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
    for(var $i$$614$$ = 0;$i$$614$$ < $labelInfoArray$$.length;$i$$614$$++) {
      $collide_labelInfo$$4$$ = $labelInfoArray$$[$i$$614$$], $prevBottomQuarter$$ = $bottomQuarter$$, 90 < $collide_labelInfo$$4$$.$getPosition$() && ($bottomQuarter$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ = $collide_labelInfo$$4$$.$getY$() + $collide_labelInfo$$4$$.getHeight(), ($collide_labelInfo$$4$$ = $lastY$$1$$ - $collide_labelInfo$$4$$.$getY$() > D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$) && ($bottomQuarter$$ ? $bottomQuarter$$ && !$prevBottomQuarter$$ ? $collisionCentral$$ = D.$JSCompiler_alias_TRUE$$ : 
      $collisionBottom$$ = D.$JSCompiler_alias_TRUE$$ : $collisionTop$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ > $lastY$$1$$ && ($lastY$$1$$ = $labelBottom$$)
    }
    return $collisionTop$$ && $collisionBottom$$ || $collisionCentral$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$5$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_ALL_COLLISION$) : $collisionTop$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$5$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : $collisionBottom$$ ? 
    (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$5$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : D.$DvtPieLabelUtils$$.$_NO_COLLISION$
  }
};
D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_setLabelsAndFeelers$$($pie$$4$$, $alabels$$1$$, $i$$615_side$$6$$) {
  if(!($alabels$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 >= $alabels$$1$$.length)) {
    var $excessLength_slice$$12$$, $sliceLabel$$4$$, $labelInfo$$5$$, $isLeftSide$$ = $i$$615_side$$6$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $excessWidth$$ = window.Infinity;
    for($i$$615_side$$6$$ = 0;$i$$615_side$$6$$ < $alabels$$1$$.length;$i$$615_side$$6$$++) {
      $labelInfo$$5$$ = $alabels$$1$$[$i$$615_side$$6$$], $excessLength_slice$$12$$ = $labelInfo$$5$$.$_slice$, $labelInfo$$5$$.$_hasFeeler$ ? ($excessLength_slice$$12$$ = D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$5$$, $excessLength_slice$$12$$, $isLeftSide$$), $excessWidth$$ = window.Math.min($excessWidth$$, $excessLength_slice$$12$$)) : (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$12$$)
    }
    for($i$$615_side$$6$$ = 0;$i$$615_side$$6$$ < $alabels$$1$$.length;$i$$615_side$$6$$++) {
      $labelInfo$$5$$ = $alabels$$1$$[$i$$615_side$$6$$];
      $excessLength_slice$$12$$ = $labelInfo$$5$$.$_slice$;
      $sliceLabel$$4$$ = $labelInfo$$5$$.$_sliceLabel$;
      $labelInfo$$5$$.$_hasFeeler$ && ($isLeftSide$$ ? $labelInfo$$5$$.$setX$($labelInfo$$5$$.$getX$() + $excessWidth$$) : $labelInfo$$5$$.$setX$($labelInfo$$5$$.$getX$() - $excessWidth$$), D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$5$$, $excessLength_slice$$12$$, $isLeftSide$$), $sliceLabel$$4$$.$setMaxLines$(1));
      $sliceLabel$$4$$.$setY$($labelInfo$$5$$.$getY$());
      $sliceLabel$$4$$.$setX$($labelInfo$$5$$.$getX$());
      var $frame$$2$$ = $pie$$4$$.$_frame$;
      $labelInfo$$5$$.$getY$() < $frame$$2$$.y || $labelInfo$$5$$.$getY$() + $labelInfo$$5$$.getHeight() > $frame$$2$$.y + $frame$$2$$.$h$ ? ($excessLength_slice$$12$$.$setSliceLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$12$$)) : (D.$DvtPieLabelUtils$$.$_truncateSliceLabel$($pie$$4$$, $excessLength_slice$$12$$, $labelInfo$$5$$, $isLeftSide$$), $excessLength_slice$$12$$.$setSliceLabel$($sliceLabel$$4$$))
    }
  }
};
D.$DvtPieLabelUtils$$.$_calculateFeeler$ = function $$DvtPieLabelUtils$$$$_calculateFeeler$$($labelInfo$$6_pa$$1$$, $slice$$13$$, $isLeft$$) {
  var $pieChart$$5_radFeelerAngle$$ = $slice$$13$$.$_pieChart$, $endPt$$1_targetX$$ = $labelInfo$$6_pa$$1$$.$getX$(), $horizOffset_targetY$$1_tilt$$1$$ = $labelInfo$$6_pa$$1$$.$getY$() + $labelInfo$$6_pa$$1$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $minHorizLength$$ = D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $pieChart$$5_radFeelerAngle$$.$_radiusX$, $midPt$$2_midX$$;
  $isLeft$$ ? ($endPt$$1_targetX$$ += D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ + $minHorizLength$$) : ($endPt$$1_targetX$$ -= D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ - $minHorizLength$$);
  if("outside" == $pieChart$$5_radFeelerAngle$$.$getLabelPosition$()) {
    var $ma_startPt$$2$$ = {x:0, y:0};
    $midPt$$2_midX$$ = {x:$midPt$$2_midX$$, y:$horizOffset_targetY$$1_tilt$$1$$};
    $endPt$$1_targetX$$ = {x:$endPt$$1_targetX$$, y:$horizOffset_targetY$$1_tilt$$1$$};
    $ma_startPt$$2$$ = $labelInfo$$6_pa$$1$$.$getAngle$();
    $horizOffset_targetY$$1_tilt$$1$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma_startPt$$2$$, $pieChart$$5_radFeelerAngle$$.$getDepth$());
    $ma_startPt$$2$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma_startPt$$2$$, $pieChart$$5_radFeelerAngle$$.$getCenter$().x, $pieChart$$5_radFeelerAngle$$.$getCenter$().y + $horizOffset_targetY$$1_tilt$$1$$, $pieChart$$5_radFeelerAngle$$.$_radiusX$, $pieChart$$5_radFeelerAngle$$.$_radiusY$);
    $labelInfo$$6_pa$$1$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$6_pa$$1$$.$getPosition$());
    $pieChart$$5_radFeelerAngle$$ = window.Math.abs(window.Math.atan2($midPt$$2_midX$$.x - $ma_startPt$$2$$.x, $ma_startPt$$2$$.y - $midPt$$2_midX$$.y));
    $horizOffset_targetY$$1_tilt$$1$$ = ($ma_startPt$$2$$.y - $midPt$$2_midX$$.y) * window.Math.tan($labelInfo$$6_pa$$1$$);
    if($labelInfo$$6_pa$$1$$ > window.Math.PI / 2 && $pieChart$$5_radFeelerAngle$$ > window.Math.PI / 2 && $pieChart$$5_radFeelerAngle$$ < $labelInfo$$6_pa$$1$$ || $labelInfo$$6_pa$$1$$ < window.Math.PI / 2 && $pieChart$$5_radFeelerAngle$$ < window.Math.PI / 2 && $pieChart$$5_radFeelerAngle$$ > $labelInfo$$6_pa$$1$$) {
      $midPt$$2_midX$$.x = $isLeft$$ ? $ma_startPt$$2$$.x - $horizOffset_targetY$$1_tilt$$1$$ : $ma_startPt$$2$$.x + $horizOffset_targetY$$1_tilt$$1$$
    }
    $slice$$13$$.$_outsideFeelerStart$ = $ma_startPt$$2$$;
    $slice$$13$$.$_outsideFeelerMid$ = $midPt$$2_midX$$;
    $slice$$13$$.$_outsideFeelerEnd$ = $endPt$$1_targetX$$;
    $slice$$13$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$;
    return window.Math.abs($endPt$$1_targetX$$.x - $midPt$$2_midX$$.x) - $minHorizLength$$
  }
  return 0
};
D.$DvtPieLabelUtils$$.$_adjustForDepth$ = function $$DvtPieLabelUtils$$$$_adjustForDepth$$($ma$$1$$, $pieDepth$$) {
  var $depth$$10$$ = 0;
  189 < $ma$$1$$ && 351 > $ma$$1$$ && ($depth$$10$$ = $pieDepth$$);
  return $depth$$10$$
};
D.$DvtPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtPieLabelUtils$$$$_getMiddleLabel$$($alabels$$2$$) {
  for(var $bestAngle$$ = 91, $bestIndex$$ = -1, $i$$616$$ = 0;$i$$616$$ < $alabels$$2$$.length;$i$$616$$++) {
    window.pa = $alabels$$2$$[$i$$616$$].$getPosition$(), window.Math.abs(window.pa - 90) < $bestAngle$$ && ($bestAngle$$ = window.Math.abs(window.pa - 90), $bestIndex$$ = $i$$616$$)
  }
  return $bestIndex$$
};
D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtPieLabelUtils$$$$_setOptimalLabelPosition$$($optimalY_pie$$5$$, $labelInfo$$7$$, $heightFromCenter_vertX$$) {
  $labelInfo$$7$$.$setX$($heightFromCenter_vertX$$);
  $heightFromCenter_vertX$$ = $optimalY_pie$$5$$.$_radiusY$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$) * window.Math.cos(D.$DvtMath$$.$degreesToRads$($labelInfo$$7$$.$getPosition$()));
  var $tilt$$2$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($labelInfo$$7$$.$getAngle$(), $optimalY_pie$$5$$.$getDepth$());
  $optimalY_pie$$5$$ = $optimalY_pie$$5$$.$getCenter$().y - $heightFromCenter_vertX$$ - $labelInfo$$7$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $tilt$$2$$;
  $labelInfo$$7$$.$setY$((0,D.$JSCompiler_StaticMethods_boundY$$)($labelInfo$$7$$, $optimalY_pie$$5$$))
};
D.$DvtPieLabelUtils$$.$_columnLabels$ = function $$DvtPieLabelUtils$$$$_columnLabels$$($pie$$6$$, $alabels$$3$$, $i$$617_isLeft$$2_startLabel$$, $isTop_labelInfo$$8$$, $isBottom$$) {
  var $frame$$3_vertX$$1$$ = $pie$$6$$.$_frame$, $minY$$18_startIndex$$3$$ = $frame$$3_vertX$$1$$.y, $highestY_isStartAtTop_maxY$$15$$ = $frame$$3_vertX$$1$$.y + $frame$$3_vertX$$1$$.$h$, $frame$$3_vertX$$1$$ = $pie$$6$$.$getCenter$().x, $lowestY_minFeelerDist$$ = $pie$$6$$.$_radiusX$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$), $frame$$3_vertX$$1$$ = $i$$617_isLeft$$2_startLabel$$ ? $frame$$3_vertX$$1$$ - $lowestY_minFeelerDist$$ : $frame$$3_vertX$$1$$ + 
  $lowestY_minFeelerDist$$;
  for($i$$617_isLeft$$2_startLabel$$ = 0;$i$$617_isLeft$$2_startLabel$$ < $alabels$$3$$.length;$i$$617_isLeft$$2_startLabel$$++) {
    $alabels$$3$$[$i$$617_isLeft$$2_startLabel$$].$_minY$ = $minY$$18_startIndex$$3$$, $minY$$18_startIndex$$3$$ += $alabels$$3$$[$i$$617_isLeft$$2_startLabel$$].getHeight()
  }
  for($i$$617_isLeft$$2_startLabel$$ = $alabels$$3$$.length - 1;0 <= $i$$617_isLeft$$2_startLabel$$;$i$$617_isLeft$$2_startLabel$$--) {
    $highestY_isStartAtTop_maxY$$15$$ -= $alabels$$3$$[$i$$617_isLeft$$2_startLabel$$].getHeight(), $alabels$$3$$[$i$$617_isLeft$$2_startLabel$$].$_maxY$ = $highestY_isStartAtTop_maxY$$15$$
  }
  if($alabels$$3$$[0].$_minY$ >= $alabels$$3$$[0].$_maxY$) {
    for($i$$617_isLeft$$2_startLabel$$ = 0;$i$$617_isLeft$$2_startLabel$$ < $alabels$$3$$.length;$i$$617_isLeft$$2_startLabel$$++) {
      $isTop_labelInfo$$8$$ = $alabels$$3$$[$i$$617_isLeft$$2_startLabel$$], $isTop_labelInfo$$8$$.$setX$($frame$$3_vertX$$1$$), $isTop_labelInfo$$8$$.$setY$(($isTop_labelInfo$$8$$.$_minY$ + $isTop_labelInfo$$8$$.$_maxY$) / 2), $isTop_labelInfo$$8$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
  }else {
    $minY$$18_startIndex$$3$$ = D.$DvtPieLabelUtils$$.$_getMiddleLabel$($alabels$$3$$);
    $i$$617_isLeft$$2_startLabel$$ = $alabels$$3$$[$minY$$18_startIndex$$3$$];
    $highestY_isStartAtTop_maxY$$15$$ = 90 >= $i$$617_isLeft$$2_startLabel$$.$getPosition$();
    $isTop_labelInfo$$8$$ && !$isBottom$$ && $i$$617_isLeft$$2_startLabel$$.$_minY$ + $i$$617_isLeft$$2_startLabel$$.getHeight() > $pie$$6$$.$getCenter$().y && ($isBottom$$ = D.$JSCompiler_alias_TRUE$$);
    $isBottom$$ && !$isTop_labelInfo$$8$$ && $i$$617_isLeft$$2_startLabel$$.$_maxY$ < $pie$$6$$.$getCenter$().y && ($isTop_labelInfo$$8$$ = D.$JSCompiler_alias_TRUE$$);
    if($isTop_labelInfo$$8$$ && $highestY_isStartAtTop_maxY$$15$$ || $isBottom$$ && !$highestY_isStartAtTop_maxY$$15$$) {
      D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$6$$, $i$$617_isLeft$$2_startLabel$$, $frame$$3_vertX$$1$$), $i$$617_isLeft$$2_startLabel$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
    var $highestY_isStartAtTop_maxY$$15$$ = $i$$617_isLeft$$2_startLabel$$.$getY$(), $lowestY_minFeelerDist$$ = $i$$617_isLeft$$2_startLabel$$.$getY$() + $i$$617_isLeft$$2_startLabel$$.getHeight(), $optimalY$$1$$, $labelHeight$$6$$;
    if($isTop_labelInfo$$8$$) {
      for($i$$617_isLeft$$2_startLabel$$ = $minY$$18_startIndex$$3$$ - 1;0 <= $i$$617_isLeft$$2_startLabel$$;$i$$617_isLeft$$2_startLabel$$--) {
        $isTop_labelInfo$$8$$ = $alabels$$3$$[$i$$617_isLeft$$2_startLabel$$], $labelHeight$$6$$ = $isTop_labelInfo$$8$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$6$$, $isTop_labelInfo$$8$$, $frame$$3_vertX$$1$$), $isTop_labelInfo$$8$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$8$$.$getY$(), $highestY_isStartAtTop_maxY$$15$$ = $optimalY$$1$$ + $labelHeight$$6$$ < $highestY_isStartAtTop_maxY$$15$$ ? $optimalY$$1$$ : $highestY_isStartAtTop_maxY$$15$$ - 
        $labelHeight$$6$$, $isTop_labelInfo$$8$$.$setY$($highestY_isStartAtTop_maxY$$15$$)
      }
    }
    if($isBottom$$) {
      for($i$$617_isLeft$$2_startLabel$$ = $minY$$18_startIndex$$3$$ + 1;$i$$617_isLeft$$2_startLabel$$ < $alabels$$3$$.length;$i$$617_isLeft$$2_startLabel$$++) {
        $isTop_labelInfo$$8$$ = $alabels$$3$$[$i$$617_isLeft$$2_startLabel$$], $labelHeight$$6$$ = $isTop_labelInfo$$8$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$6$$, $isTop_labelInfo$$8$$, $frame$$3_vertX$$1$$), $isTop_labelInfo$$8$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$8$$.$getY$(), $lowestY_minFeelerDist$$ = $optimalY$$1$$ > $lowestY_minFeelerDist$$ ? $optimalY$$1$$ + $labelHeight$$6$$ : $lowestY_minFeelerDist$$ + $labelHeight$$6$$, 
        $isTop_labelInfo$$8$$.$setY$($lowestY_minFeelerDist$$ - $labelHeight$$6$$)
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtPieLabelUtils$$$$_truncateSliceLabel$$($pie$$7_tmDimPt$$, $frame$$4_slice$$14$$, $labelInfo$$9$$, $isLeft$$3$$) {
  var $sliceLabel$$5$$ = $labelInfo$$9$$.$_sliceLabel$, $style$$93$$ = $sliceLabel$$5$$.$getCSSStyle$(), $maxLabelWidth$$3_numChildren$$16$$ = 0, $maxLabelWidth$$3_numChildren$$16$$ = $pie$$7_tmDimPt$$.$getNumChildren$(), $removeTextArea$$ = D.$JSCompiler_alias_FALSE$$;
  $pie$$7_tmDimPt$$.contains($sliceLabel$$5$$) || ($pie$$7_tmDimPt$$.$addChild$($sliceLabel$$5$$), $removeTextArea$$ = D.$JSCompiler_alias_TRUE$$);
  $sliceLabel$$5$$.$setCSSStyle$($style$$93$$);
  $sliceLabel$$5$$.$setTextString$($frame$$4_slice$$14$$.$_sliceLabelString$);
  $removeTextArea$$ && $pie$$7_tmDimPt$$.$removeChildAt$($maxLabelWidth$$3_numChildren$$16$$);
  $frame$$4_slice$$14$$ = $pie$$7_tmDimPt$$.$_frame$;
  $maxLabelWidth$$3_numChildren$$16$$ = $isLeft$$3$$ ? $labelInfo$$9$$.$getX$() - $frame$$4_slice$$14$$.x : $frame$$4_slice$$14$$.x + $frame$$4_slice$$14$$.$w$ - $labelInfo$$9$$.$getX$();
  $pie$$7_tmDimPt$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$7_tmDimPt$$, $sliceLabel$$5$$, $maxLabelWidth$$3_numChildren$$16$$, $labelInfo$$9$$.$_initialNumLines$);
  $labelInfo$$9$$.$setWidth$($pie$$7_tmDimPt$$.x);
  $labelInfo$$9$$.getHeight() != $pie$$7_tmDimPt$$.y && $labelInfo$$9$$.$setHeight$($pie$$7_tmDimPt$$.y)
};
D.$DvtPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtPieLabelUtils$$$$_generateInitialLayout$$($pie$$8$$) {
  var $arArrays$$ = (0,window.Array)(2), $leftLabels$$1$$ = [], $rightLabels$$1$$ = [], $dist$$2_labelPt$$, $maxLabelWidth$$4_tmDimPt$$1$$, $ma$$2$$ = 0, $pa$$2_tilt$$3$$ = 0, $i$$618$$, $s_label$$, $slices$$6$$ = $pie$$8$$.$_slices$, $n$$33$$ = $slices$$6$$.length, $frame$$5$$ = $pie$$8$$.$_frame$;
  if(0 < $n$$33$$) {
    for($i$$618$$ = 0;$i$$618$$ < $n$$33$$;$i$$618$$++) {
      window.slice = $slices$$6$$[$i$$618$$], $s_label$$ = D.$DvtPieLabelUtils$$.$_createLabel$(window.slice), $ma$$2$$ = window.slice.$getAngleStart$() + window.slice.$getAngleExtent$() / 2, 360 < $ma$$2$$ && ($ma$$2$$ -= 360), 0 > $ma$$2$$ && ($ma$$2$$ += 360), $dist$$2_labelPt$$ = 1 + D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $dist$$2_labelPt$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma$$2$$, $pie$$8$$.$getCenter$().x, $pie$$8$$.$getCenter$().y, $pie$$8$$.$_radiusX$ * $dist$$2_labelPt$$, 
      $pie$$8$$.$_radiusY$ * $dist$$2_labelPt$$), $maxLabelWidth$$4_tmDimPt$$1$$ = 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? $dist$$2_labelPt$$.x - $frame$$5$$.x : $frame$$5$$.x + $frame$$5$$.$w$ - $dist$$2_labelPt$$.x, $maxLabelWidth$$4_tmDimPt$$1$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$8$$, $s_label$$, $maxLabelWidth$$4_tmDimPt$$1$$, D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$), 165 > $ma$$2$$ && 15 < $ma$$2$$ ? $dist$$2_labelPt$$.y -= 1 * $maxLabelWidth$$4_tmDimPt$$1$$.y : 15 > $ma$$2$$ || 
      345 < $ma$$2$$ ? ($dist$$2_labelPt$$.y -= 0.5 * $maxLabelWidth$$4_tmDimPt$$1$$.y, $dist$$2_labelPt$$.x += 0.2 * $maxLabelWidth$$4_tmDimPt$$1$$.y) : 165 < $ma$$2$$ && 195 > $ma$$2$$ && ($dist$$2_labelPt$$.y -= 0.5 * $maxLabelWidth$$4_tmDimPt$$1$$.y, $dist$$2_labelPt$$.x -= 0.2 * $maxLabelWidth$$4_tmDimPt$$1$$.y), $pa$$2_tilt$$3$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma$$2$$, $pie$$8$$.$getDepth$()), $dist$$2_labelPt$$.y += $pa$$2_tilt$$3$$, 1 == $n$$33$$ && ($dist$$2_labelPt$$.x -= $maxLabelWidth$$4_tmDimPt$$1$$.x / 
      2), $dist$$2_labelPt$$.y < $frame$$5$$.y && ($dist$$2_labelPt$$.y = $frame$$5$$.y), $dist$$2_labelPt$$.y + $maxLabelWidth$$4_tmDimPt$$1$$.y > $frame$$5$$.y + $frame$$5$$.$h$ && ($dist$$2_labelPt$$.y = $frame$$5$$.y + $frame$$5$$.$h$ - $maxLabelWidth$$4_tmDimPt$$1$$.y), 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? ($s_label$$.$alignRight$(), $pa$$2_tilt$$3$$ = $ma$$2$$ - 90, D.$DvtPieLabelUtils$$.$_createLabelInfo$($s_label$$, $ma$$2$$, $pa$$2_tilt$$3$$, $maxLabelWidth$$4_tmDimPt$$1$$, $dist$$2_labelPt$$, 
      $leftLabels$$1$$)) : ($pa$$2_tilt$$3$$ = 90 >= $ma$$2$$ ? window.Math.abs(90 - $ma$$2$$) : 180 - ($ma$$2$$ - 270), D.$DvtPieLabelUtils$$.$_createLabelInfo$($s_label$$, $ma$$2$$, $pa$$2_tilt$$3$$, $maxLabelWidth$$4_tmDimPt$$1$$, $dist$$2_labelPt$$, $rightLabels$$1$$))
    }
  }
  $arArrays$$[0] = $leftLabels$$1$$;
  $arArrays$$[1] = $rightLabels$$1$$;
  return $arArrays$$
};
D.$DvtPieLabelUtils$$.$_createLabelInfo$ = function $$DvtPieLabelUtils$$$$_createLabelInfo$$($sliceLabel$$6$$, $ma$$3$$, $pa$$3$$, $tmDimPt$$2$$, $labelPt$$1$$, $labelInfoArray$$1$$) {
  for(var $slice$$15$$ = window.slice, $insertPos$$ = -1, $labelInfo$$10$$, $j$$79$$ = 0;$j$$79$$ < $labelInfoArray$$1$$.length;$j$$79$$++) {
    if($labelInfo$$10$$ = $labelInfoArray$$1$$[$j$$79$$], $labelInfo$$10$$.$getPosition$() > $pa$$3$$) {
      $insertPos$$ = $j$$79$$;
      break
    }
  }
  -1 == $insertPos$$ && ($insertPos$$ = $labelInfoArray$$1$$.length);
  $labelInfo$$10$$ = new D.$DvtPieLabelInfo$$;
  $labelInfo$$10$$.$setPosition$($pa$$3$$);
  $labelInfo$$10$$.$setAngle$($ma$$3$$);
  $labelInfo$$10$$.$setSliceLabel$($sliceLabel$$6$$);
  $labelInfo$$10$$.$_slice$ = $slice$$15$$;
  $labelInfo$$10$$.$setWidth$($tmDimPt$$2$$.x);
  $labelInfo$$10$$.$setHeight$($tmDimPt$$2$$.y);
  $labelInfo$$10$$.$setX$($labelPt$$1$$.x);
  $labelInfo$$10$$.$setY$($labelPt$$1$$.y);
  $labelInfoArray$$1$$.splice($insertPos$$, 0, $labelInfo$$10$$)
};
D.$DvtPieLabelUtils$$.$_getTextDimension$ = function $$DvtPieLabelUtils$$$$_getTextDimension$$($pieChart$$6$$, $sliceLabel$$7$$, $dimensions$$2_maxWidth$$19$$, $maxLines$$3$$) {
  $sliceLabel$$7$$.$setMaxLines$($maxLines$$3$$);
  D.$DvtTextUtils$$.$fitText$($sliceLabel$$7$$, $dimensions$$2_maxWidth$$19$$, window.Infinity, $pieChart$$6$$);
  $pieChart$$6$$.$addChild$($sliceLabel$$7$$);
  $dimensions$$2_maxWidth$$19$$ = $sliceLabel$$7$$.$getDimensions$();
  $pieChart$$6$$.removeChild($sliceLabel$$7$$);
  return{x:$dimensions$$2_maxWidth$$19$$.$w$, y:$dimensions$$2_maxWidth$$19$$.$h$}
};
D.$DvtChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRenderer$$, D.$DvtObj$$, "DvtChartRenderer");
D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$ = 2;
D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$ = 1;
D.$DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
D.$DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
D.$DvtChartRenderer$$.$_BUTTON_OPACITY$ = 0.8;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = 0.05;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = 0.2;
D.$DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($chart$$206$$, $container$$139$$, $availSpace$$92$$) {
  D.$DvtChartRenderer$$.$_renderBackground$($chart$$206$$, $container$$139$$, $availSpace$$92$$);
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$206$$)) {
    D.$DvtChartRenderer$$.$_renderTitles$($chart$$206$$, $container$$139$$, $availSpace$$92$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$92$$);
    D.$DvtChartLegendRenderer$$.$render$($chart$$206$$, $container$$139$$, $availSpace$$92$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$92$$);
    var $horizSbDim$$ = D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$($chart$$206$$, $container$$139$$, $availSpace$$92$$), $vertSbDim$$ = D.$DvtChartRenderer$$.$_prerenderVertScrollbar$($chart$$206$$, $container$$139$$, $availSpace$$92$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$92$$);
    var $space$$inline_6118_space$$inline_6121$$ = $availSpace$$92$$.clone();
    $chart$$206$$.$_axisSpace$ = $space$$inline_6118_space$$inline_6121$$;
    $chart$$206$$.$_radius$ = window.Math.min(0.9 * $space$$inline_6118_space$$inline_6121$$.$h$, 0.8 * $space$$inline_6118_space$$inline_6121$$.$w$) / 2;
    D.$DvtChartAxisRenderer$$.$render$($chart$$206$$, $container$$139$$, $availSpace$$92$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$92$$);
    $space$$inline_6118_space$$inline_6121$$ = $availSpace$$92$$.clone();
    $chart$$206$$.$_plotAreaSpace$ = $space$$inline_6118_space$$inline_6121$$;
    D.$DvtChartRenderer$$.$_setEventHandlers$($chart$$206$$);
    D.$DvtChartRenderer$$.$_renderScrollbars$($chart$$206$$, $horizSbDim$$, $vertSbDim$$);
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$206$$, $container$$139$$, $availSpace$$92$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$206$$) && $container$$139$$.$addChild$($chart$$206$$.$yAxis$);
    D.$DvtChartRenderer$$.$_renderDragButtons$($chart$$206$$)
  }else {
    D.$DvtChartRenderer$$.$renderEmptyText$($chart$$206$$, $container$$139$$, $availSpace$$92$$)
  }
};
D.$DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($chart$$207$$) {
  var $options$$216$$ = $chart$$207$$.$getOptions$(), $em$$1$$ = $chart$$207$$.$getEventManager$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$207$$) && !$options$$216$$._isOverview) {
    var $chartBounds$$ = new D.$DvtRectangle$$(0, 0, $chart$$207$$.getWidth(), $chart$$207$$.getHeight()), $plotAreaBounds$$7$$ = $chart$$207$$.$_plotAreaSpace$, $axisBounds_vertAxisBounds$$ = $chart$$207$$.$_axisSpace$, $horizAxisBounds$$ = new D.$DvtRectangle$$($plotAreaBounds$$7$$.x, $axisBounds_vertAxisBounds$$.y, $plotAreaBounds$$7$$.$w$, $axisBounds_vertAxisBounds$$.$h$), $axisBounds_vertAxisBounds$$ = new D.$DvtRectangle$$($axisBounds_vertAxisBounds$$.x, $plotAreaBounds$$7$$.y, $axisBounds_vertAxisBounds$$.$w$, 
    $plotAreaBounds$$7$$.$h$), $marqueeFill$$ = new D.$DvtSolidFill$$($options$$216$$.styleDefaults.marqueeColor), $marqueeStroke$$ = new D.$DvtSolidStroke$$($options$$216$$.styleDefaults.marqueeBorderColor), $marqueeHandler_panZoomHandler_zoomRate$$2$$;
    if(D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$207$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$207$$)) {
      $marqueeHandler_panZoomHandler_zoomRate$$2$$ = D.$DvtChartEventUtils$$.$isDelayedScroll$($chart$$207$$) ? D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$;
      $marqueeHandler_panZoomHandler_zoomRate$$2$$ = new D.$DvtPanZoomHandler$$($chart$$207$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeHandler_panZoomHandler_zoomRate$$2$$);
      var $panUpCursor$$inline_6124$$ = $options$$216$$._resources.panCursorUp, $panDownCursor$$inline_6125$$ = $options$$216$$._resources.panCursorDown;
      D.$DvtAgent$$.$isPlatformIE$() || ($panUpCursor$$inline_6124$$ && ($marqueeHandler_panZoomHandler_zoomRate$$2$$.$_panUpCursor$ = "url(" + $panUpCursor$$inline_6124$$ + ") 8 8, auto"), $panDownCursor$$inline_6125$$ && ($marqueeHandler_panZoomHandler_zoomRate$$2$$.$_panDownCursor$ = "url(" + $panDownCursor$$inline_6125$$ + ") 8 8, auto"));
      $em$$1$$.$_panZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$2$$;
      D.$DvtChartEventUtils$$.$isZoomable$($chart$$207$$) && ($marqueeHandler_panZoomHandler_zoomRate$$2$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$207$$) ? new D.$DvtMarqueeHandler$$($chart$$207$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_NULL$$, $axisBounds_vertAxisBounds$$) : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$207$$) ? new D.$DvtMarqueeHandler$$($chart$$207$$, $plotAreaBounds$$7$$, 
      $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, $horizAxisBounds$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtMarqueeHandler$$($chart$$207$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$1$$.$_marqueeZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$2$$)
    }
    "multiple" == $options$$216$$.selection && ($marqueeHandler_panZoomHandler_zoomRate$$2$$ = new D.$DvtMarqueeHandler$$($chart$$207$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$1$$.$_marqueeSelectHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$2$$)
  }
};
D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($chart$$208$$, $container$$140$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$208$$)) {
    var $availSpace$$93$$ = $chart$$208$$.$_axisSpace$.clone(), $selectionHandler$$13$$ = $chart$$208$$.$getSelectionHandler$();
    if($selectionHandler$$13$$) {
      var $selectedIds$$10$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($selectionHandler$$13$$)
    }
    $chart$$208$$.$__cleanUpAxisAndPlotArea$();
    D.$DvtChartAxisRenderer$$.$render$($chart$$208$$, $container$$140$$, $availSpace$$93$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$93$$);
    var $space$$inline_6137$$ = $availSpace$$93$$.clone();
    $chart$$208$$.$_plotAreaSpace$ = $space$$inline_6137$$;
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$208$$, $container$$140$$, $availSpace$$93$$);
    $selectionHandler$$13$$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($selectionHandler$$13$$, $selectedIds$$10$$, $chart$$208$$.$getObjects$());
    (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($chart$$208$$.$getEventManager$());
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$208$$)
  }
};
D.$DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($chart$$209$$, $container$$141$$, $availSpace$$94_rect$$32$$) {
  var $options$$217$$ = $chart$$209$$.$getOptions$();
  $availSpace$$94_rect$$32$$ = new D.$DvtRect$$($chart$$209$$.$_context$, $availSpace$$94_rect$$32$$.x, $availSpace$$94_rect$$32$$.y, $availSpace$$94_rect$$32$$.$w$, $availSpace$$94_rect$$32$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$94_rect$$32$$);
  $container$$141$$.$addChild$($availSpace$$94_rect$$32$$);
  $chart$$209$$.$getEventManager$().$associate$($availSpace$$94_rect$$32$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$BACKGROUND$)));
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($availSpace$$94_rect$$32$$);
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($availSpace$$94_rect$$32$$, "label", $options$$217$$.shortDesc)
};
D.$DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($chart$$210$$, $container$$142_footnoteObj$$, $availSpace$$95$$) {
  var $options$$218$$ = $chart$$210$$.$getOptions$(), $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$210$$, $options$$218$$.layout.outerGapWidth), $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$210$$, $options$$218$$.layout.outerGapHeight);
  $availSpace$$95$$.x += $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$;
  $availSpace$$95$$.$w$ -= 2 * $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$;
  $availSpace$$95$$.y += $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$;
  $availSpace$$95$$.$h$ -= 2 * $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$;
  if($options$$218$$.title.text) {
    var $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$210$$.$getEventManager$(), $container$$142_footnoteObj$$, $options$$218$$.title.text, $options$$218$$.title.style, $availSpace$$95$$.x, $availSpace$$95$$.y, $availSpace$$95$$.$w$, $availSpace$$95$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$TITLE$)), $titleDims$$2$$;
    $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$ ? ($titleDims$$2$$ = $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$.$getDimensions$(), $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ = $titleDims$$2$$.$h$) : ($footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ = 0, $titleDims$$2$$ = new D.$DvtRectangle$$(0, 0, 0, 0));
    if($options$$218$$.subtitle.text) {
      var $subtitleObj$$ = new D.$DvtOutputText$$($chart$$210$$.$_context$, $options$$218$$.subtitle.text, $availSpace$$95$$.x, $availSpace$$95$$.y);
      $subtitleObj$$.$setCSSStyle$($options$$218$$.subtitle.style);
      $container$$142_footnoteObj$$.$addChild$($subtitleObj$$);
      var $subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), $titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$210$$, $options$$218$$.layout.titleSubtitleGapWidth), $titleSpace$$ = $titleDims$$2$$.$w$ + $titleSubtitleGap$$ + $subtitleDims$$.$w$;
      $titleSpace$$ > $availSpace$$95$$.$w$ ? ($titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$210$$, $options$$218$$.layout.titleSubtitleGapHeight), $subtitleObj$$.$setY$($availSpace$$95$$.y + $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ + $titleSubtitleGap$$), $container$$142_footnoteObj$$.removeChild($subtitleObj$$), D.$DvtTextUtils$$.$fitText$($subtitleObj$$, $availSpace$$95$$.$w$, $availSpace$$95$$.$h$, $chart$$210$$) && ($subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), 
      $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ += $subtitleDims$$.$h$ + $titleSubtitleGap$$, D.$DvtAgent$$.$isRightToLeft$($chart$$210$$.$_context$) && ($subtitleObj$$ && $subtitleObj$$.$setX$($availSpace$$95$$.$w$ - $subtitleDims$$.$w$), $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$ && $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$.$setX$($availSpace$$95$$.$w$ - $titleDims$$2$$.$w$)))) : ($subtitleObj$$.$setY$($titleDims$$2$$.$h$ - $subtitleDims$$.$h$ + $availSpace$$95$$.y), 
      (0,D.$DvtLayoutUtils$align$$)($availSpace$$95$$, $options$$218$$.title.hAlign, $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$, $titleSpace$$), D.$DvtAgent$$.$isRightToLeft$($chart$$210$$.$_context$) ? ($subtitleObj$$.$setX$($gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$.$getX$()), $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$ && $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$.$setX$($gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $subtitleDims$$.$w$ + $titleSubtitleGap$$)) : 
      $subtitleObj$$.$setX$($gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $titleSpace$$ - $subtitleDims$$.$w$));
      (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($subtitleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
      $chart$$210$$.$getEventManager$().$associate$($subtitleObj$$, new D.$DvtSimpleObjPeer$$($subtitleObj$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$SUBTITLE$)))
    }else {
      (0,D.$DvtLayoutUtils$align$$)($availSpace$$95$$, $options$$218$$.title.hAlign, $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$, $titleDims$$2$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
    $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$ = "on" == $options$$218$$.titleSeparator.rendered ? $options$$218$$.layout.titleSeparatorGap : $options$$218$$.layout.titlePlotAreaGap;
    $availSpace$$95$$.y += $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$210$$, $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$);
    $availSpace$$95$$.$h$ -= $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$210$$, $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$);
    "on" == $options$$218$$.titleSeparator.rendered && ($footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ = new D.$DvtLine$$($chart$$210$$.$_context$, $availSpace$$95$$.x, $availSpace$$95$$.y, $availSpace$$95$$.x + $availSpace$$95$$.$w$, $availSpace$$95$$.y), $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$ = new D.$DvtLine$$($chart$$210$$.$_context$, $availSpace$$95$$.x, $availSpace$$95$$.y + 1, $availSpace$$95$$.x + $availSpace$$95$$.$w$, $availSpace$$95$$.y + 1), $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$.$setSolidStroke$($options$$218$$.titleSeparator.upperColor), 
    $gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$.$setSolidStroke$($options$$218$$.titleSeparator.lowerColor), $container$$142_footnoteObj$$.$addChild$($footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$), $container$$142_footnoteObj$$.$addChild$($gapHeight$$1_lowerSepObj_titleGapBelow_titleObj$$), $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ = 2 + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$210$$, $options$$218$$.layout.titlePlotAreaGap), $availSpace$$95$$.y += 
    $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$, $availSpace$$95$$.$h$ -= $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$)
  }
  if($options$$218$$.footnote.text) {
    if($container$$142_footnoteObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$210$$.$getEventManager$(), $container$$142_footnoteObj$$, $options$$218$$.footnote.text, $options$$218$$.footnote.style, $availSpace$$95$$.x, 0, $availSpace$$95$$.$w$, $availSpace$$95$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$FOOTNOTE$))) {
      $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$ = $container$$142_footnoteObj$$.$getDimensions$(), $container$$142_footnoteObj$$.$setY$($availSpace$$95$$.y + $availSpace$$95$$.$h$ - $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$.$h$), $availSpace$$95$$.$h$ -= $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$.$h$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$210$$, $options$$218$$.layout.footnoteGap), (0,D.$DvtLayoutUtils$align$$)($availSpace$$95$$, 
      $options$$218$$.footnote.hAlign, $container$$142_footnoteObj$$, $footnoteDims_gapWidth$$1_titleHeight_titleSepHeight_upperSepObj$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$142_footnoteObj$$, "hidden", D.$JSCompiler_alias_NULL$$)
  }
};
D.$DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($chart$$211$$, $container$$143$$, $availSpace$$96$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$211$$)) {
    var $pieChart$$10_plotArea$$3$$ = new D.$DvtContainer$$($chart$$211$$.$_context$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($pieChart$$10_plotArea$$3$$, $availSpace$$96$$.x, $availSpace$$96$$.y);
    $container$$143$$.$addChild$($pieChart$$10_plotArea$$3$$);
    $chart$$211$$.$_plotArea$ = $pieChart$$10_plotArea$$3$$;
    D.$DvtPlotAreaRenderer$$.$render$($chart$$211$$, $pieChart$$10_plotArea$$3$$, new D.$DvtRectangle$$(0, 0, $availSpace$$96$$.$w$, $availSpace$$96$$.$h$))
  }else {
    D.$DvtChartTypeUtils$$.$isPie$($chart$$211$$) ? ($pieChart$$10_plotArea$$3$$ = new D.$DvtPieChart$$($chart$$211$$, $availSpace$$96$$), 0 < $pieChart$$10_plotArea$$3$$.$_slices$.length ? ($container$$143$$.$addChild$($pieChart$$10_plotArea$$3$$), $pieChart$$10_plotArea$$3$$.$render$()) : D.$DvtChartRenderer$$.$renderEmptyText$($chart$$211$$, $container$$143$$, $availSpace$$96$$)) : D.$DvtChartTypeUtils$$.$isFunnel$($chart$$211$$) && D.$DvtFunnelRenderer$$.$render$($chart$$211$$, $container$$143$$, 
    $availSpace$$96$$)
  }
  $availSpace$$96$$.$w$ = 0;
  $availSpace$$96$$.$h$ = 0
};
D.$DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($chart$$212$$, $container$$144$$, $availSpace$$97$$) {
  var $options$$219$$ = $chart$$212$$.$getOptions$(), $emptyTextStr$$1_text$$97$$ = $options$$219$$.emptyText;
  $emptyTextStr$$1_text$$97$$ || ($emptyTextStr$$1_text$$97$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$212$$.$Bundle$, "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$));
  $emptyTextStr$$1_text$$97$$ = new D.$DvtOutputText$$($chart$$212$$.$_context$, $emptyTextStr$$1_text$$97$$, $availSpace$$97$$.x + $availSpace$$97$$.$w$ / 2, $availSpace$$97$$.y + $availSpace$$97$$.$h$ / 2);
  $emptyTextStr$$1_text$$97$$.$setCSSStyle$($options$$219$$.title.style);
  $emptyTextStr$$1_text$$97$$.$alignCenter$();
  $emptyTextStr$$1_text$$97$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($emptyTextStr$$1_text$$97$$, $availSpace$$97$$.$w$ - 2 * D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, window.Infinity, $container$$144$$, 0) && ($emptyTextStr$$1_text$$97$$.$isTruncated$() && $chart$$212$$.$getEventManager$().$associate$($emptyTextStr$$1_text$$97$$, new D.$DvtSimpleObjPeer$$($emptyTextStr$$1_text$$97$$.$_untruncatedTextString$)), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($emptyTextStr$$1_text$$97$$, "hidden", D.$JSCompiler_alias_NULL$$))
};
D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($chart$$213$$, $container$$145$$, $availSpace$$98$$) {
  var $width$$104$$ = $availSpace$$98$$.$w$, $height$$97$$ = 0;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$213$$) && D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$($chart$$213$$)) {
    if(D.$DvtChartStyleUtils$$.$isOverviewRendered$($chart$$213$$)) {
      var $height$$97$$ = D.$DvtChartStyleUtils$$.$getOverviewHeight$($chart$$213$$), $oldOverviewChart$$ = $chart$$213$$.$overview$ ? $chart$$213$$.$overview$.$_chart$ : D.$JSCompiler_alias_NULL$$;
      $chart$$213$$.$overview$ = new D.$DvtChartOverview$$($chart$$213$$.$_context$, $chart$$213$$.$processEvent$, $chart$$213$$, $chart$$213$$.getId(), $oldOverviewChart$$);
      $container$$145$$.$addChild$($chart$$213$$.$overview$);
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$98$$, "bottom", $chart$$213$$.$overview$, $width$$104$$, $height$$97$$, 10)
    }else {
      $height$$97$$ = $chart$$213$$.$getOptions$().styleDefaults._scrollbarHeight, $chart$$213$$.$xScrollbar$ = new D.$DvtSimpleScrollbar$$($chart$$213$$.$_context$, $chart$$213$$.$processEvent$, $chart$$213$$), $container$$145$$.$addChild$($chart$$213$$.$xScrollbar$), (0,D.$DvtLayoutUtils$position$$)($availSpace$$98$$, "bottom", $chart$$213$$.$xScrollbar$, $width$$104$$, $height$$97$$, 8)
    }
  }
  return new D.$DvtDimension$$($width$$104$$, $height$$97$$)
};
D.$DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($chart$$214$$, $container$$146$$, $availSpace$$99$$) {
  var $width$$105$$ = 0, $height$$98$$ = $availSpace$$99$$.$h$;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$214$$) && D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$($chart$$214$$)) {
    var $width$$105$$ = $chart$$214$$.$getOptions$().styleDefaults._scrollbarHeight, $scrollbar$$2$$ = new D.$DvtSimpleScrollbar$$($chart$$214$$.$_context$, $chart$$214$$.$processEvent$, $chart$$214$$);
    $container$$146$$.$addChild$($scrollbar$$2$$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$99$$, D.$DvtAgent$$.$isRightToLeft$($chart$$214$$.$_context$) ? "right" : "left", $scrollbar$$2$$, $width$$105$$, $height$$98$$, 8);
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$214$$) ? $chart$$214$$.$xScrollbar$ = $scrollbar$$2$$ : $chart$$214$$.$yScrollbar$ = $scrollbar$$2$$
  }
  return new D.$DvtDimension$$($width$$105$$, $height$$98$$)
};
D.$DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($chart$$215$$, $horizScrollbarDim$$, $ovOptions_vertScrollbarDim$$) {
  var $options$$220$$ = $chart$$215$$.$getOptions$(), $sbOptions$$ = {color:$options$$220$$.styleDefaults._scrollbarHandleColor, backgroundColor:$options$$220$$.styleDefaults._scrollbarTrackColor}, $plotAreaDim$$ = $chart$$215$$.$_plotAreaSpace$, $hitAreaSize$$ = D.$DvtAgent$$.$isTouchDevice$() ? 8 : 4;
  if($chart$$215$$.$xScrollbar$) {
    $sbOptions$$.min = $chart$$215$$.$xAxis$.$getGlobalMin$();
    $sbOptions$$.max = $chart$$215$$.$xAxis$.$getGlobalMax$();
    if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$215$$)) {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_FALSE$$, $chart$$215$$.$xScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$215$$.$xScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$)
    }else {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_TRUE$$;
      $sbOptions$$.isReversed = D.$DvtAgent$$.$isRightToLeft$($chart$$215$$.$_context$);
      $chart$$215$$.$xScrollbar$.$setTranslateX$($plotAreaDim$$.x);
      $chart$$215$$.$xScrollbar$.$render$($sbOptions$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$);
      var $hitArea$$1$$ = new D.$DvtRect$$($chart$$215$$.$_context$, 0, -$hitAreaSize$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$ + 2 * $hitAreaSize$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$1$$);
      $chart$$215$$.$xScrollbar$.$addChild$($hitArea$$1$$)
    }
    $chart$$215$$.$xScrollbar$.$setViewportRange$($chart$$215$$.$xAxis$.$getViewportMin$(), $chart$$215$$.$xAxis$.$getViewportMax$())
  }
  $chart$$215$$.$yScrollbar$ && ($sbOptions$$.min = $chart$$215$$.$yAxis$.$getGlobalMin$(), $sbOptions$$.max = $chart$$215$$.$yAxis$.$getGlobalMax$(), $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_TRUE$$, $chart$$215$$.$yScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$215$$.$yScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$), $chart$$215$$.$yScrollbar$.$setViewportRange$($chart$$215$$.$yAxis$.$getViewportMin$(), 
  $chart$$215$$.$yAxis$.$getViewportMax$()), $hitArea$$1$$ = new D.$DvtRect$$($chart$$215$$.$_context$, -$hitAreaSize$$, 0, $ovOptions_vertScrollbarDim$$.$w$ + 2 * $hitAreaSize$$, $plotAreaDim$$.$h$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$1$$), $chart$$215$$.$yScrollbar$.$addChild$($hitArea$$1$$));
  $chart$$215$$.$overview$ && ($ovOptions_vertScrollbarDim$$ = {startTime:$chart$$215$$.$xAxis$.$getGlobalMin$(), endTime:$chart$$215$$.$xAxis$.$getGlobalMax$(), viewportStartTime:$chart$$215$$.$xAxis$.$getViewportMin$(), viewportEndTime:$chart$$215$$.$xAxis$.$getViewportMax$(), minimumWindowSize:$chart$$215$$.$xAxis$.$getMinimumExtent$(), chart:D.$DvtJSONUtils$$.clone($options$$220$$)}, D.$DvtChartEventUtils$$.$isZoomable$($chart$$215$$) || ($ovOptions_vertScrollbarDim$$.featuresOff = "zoom"), $chart$$215$$.$overview$.$setTranslateX$($plotAreaDim$$.x), 
  $chart$$215$$.$overview$.$render$($ovOptions_vertScrollbarDim$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$), $chart$$215$$.$overview$.$setViewportRange$($chart$$215$$.$xAxis$.$getViewportMin$(), $chart$$215$$.$xAxis$.$getViewportMax$()))
};
D.$DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($chart$$216$$) {
  var $options$$221_position$$41_tooltip$$45$$ = $chart$$216$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$216$$) && !$options$$221_position$$41_tooltip$$45$$._isOverview) {
    var $isTouch$$ = D.$DvtAgent$$.$isTouchDevice$(), $isScrollable$$ = D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$216$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$216$$), $em$$2$$ = $chart$$216$$.$getEventManager$();
    $chart$$216$$.$dragButtons$ = new D.$DvtContainer$$($chart$$216$$.$_context$);
    var $resources$$39$$ = $options$$221_position$$41_tooltip$$45$$._resources;
    if("multiple" == $options$$221_position$$41_tooltip$$45$$.selection && ($isTouch$$ || $isScrollable$$)) {
      $options$$221_position$$41_tooltip$$45$$ = $isScrollable$$ && ($isTouch$$ || D.$DvtChartEventUtils$$.$isZoomable$($chart$$216$$)) ? "end" : "solo", $em$$2$$.$selectButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$216$$, $chart$$216$$.$dragButtons$, $resources$$39$$.selectUp, $resources$$39$$.selectDown, $em$$2$$.$onSelectButtonClick$, $em$$2$$, $options$$221_position$$41_tooltip$$45$$), $options$$221_position$$41_tooltip$$45$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$216$$.$Bundle$, 
      "MARQUEE_SELECT"), $em$$2$$.$associate$($em$$2$$.$selectButton$, new D.$DvtSimpleObjPeer$$($options$$221_position$$41_tooltip$$45$$))
    }
    $isScrollable$$ && ($options$$221_position$$41_tooltip$$45$$ = $em$$2$$.$selectButton$ == D.$JSCompiler_alias_NULL$$ ? "solo" : "start", $isTouch$$ ? ($em$$2$$.$panButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$216$$, $chart$$216$$.$dragButtons$, $resources$$39$$.panUp, $resources$$39$$.panDown, $em$$2$$.$onPanButtonClick$, $em$$2$$, $options$$221_position$$41_tooltip$$45$$), $options$$221_position$$41_tooltip$$45$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$216$$.$Bundle$, 
    "PAN"), $em$$2$$.$associate$($em$$2$$.$panButton$, new D.$DvtSimpleObjPeer$$($options$$221_position$$41_tooltip$$45$$))) : D.$DvtChartEventUtils$$.$isZoomable$($chart$$216$$) && ($em$$2$$.$zoomButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$216$$, $chart$$216$$.$dragButtons$, $resources$$39$$.zoomUp, $resources$$39$$.zoomDown, $em$$2$$.$onZoomButtonClick$, $em$$2$$, $options$$221_position$$41_tooltip$$45$$), $options$$221_position$$41_tooltip$$45$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$216$$.$Bundle$, 
    "MARQUEE_ZOOM"), $em$$2$$.$associate$($em$$2$$.$zoomButton$, new D.$DvtSimpleObjPeer$$($options$$221_position$$41_tooltip$$45$$))));
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$216$$);
    (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, D.$JSCompiler_alias_NULL$$);
    0 < $chart$$216$$.$dragButtons$.$getNumChildren$() && ($chart$$216$$.$addChild$($chart$$216$$.$dragButtons$), $isTouch$$ ? $isScrollable$$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($em$$2$$.$panButton$, D.$JSCompiler_alias_TRUE$$), $em$$2$$.$onPanButtonClick$()) : (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($chart$$216$$), $chart$$216$$.$dragButtons$.setCursor("default"))
  }
};
D.$DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($chart$$217_transX$$9$$, $button$$55$$, $availSpace$$100$$) {
  D.$DvtAgent$$.$isRightToLeft$($chart$$217_transX$$9$$.$_context$) ? ($chart$$217_transX$$9$$ = $availSpace$$100$$.x + D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $availSpace$$100$$.x += D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$) : $chart$$217_transX$$9$$ = $availSpace$$100$$.x + $availSpace$$100$$.$w$ - D.$DvtChartRenderer$$.$_BUTTON_SIZE$ - D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  $availSpace$$100$$.$w$ -= D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$55$$, $chart$$217_transX$$9$$, $availSpace$$100$$.y + D.$DvtChartRenderer$$.$_BUTTON_PADDING$)
};
D.$DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($chart$$218$$) {
  var $availSpace$$101$$ = $chart$$218$$.$_plotAreaSpace$.clone();
  $availSpace$$101$$.x += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$101$$.$w$ -= 2 * D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$101$$.y += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  var $em$$3$$ = $chart$$218$$.$getEventManager$();
  $em$$3$$.$selectButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$218$$, $em$$3$$.$selectButton$, $availSpace$$101$$);
  $em$$3$$.$panButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$218$$, $em$$3$$.$panButton$, $availSpace$$101$$);
  $em$$3$$.$zoomButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$218$$, $em$$3$$.$zoomButton$, $availSpace$$101$$)
};
D.$DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($context$$623$$, $position$$42$$) {
  var $background$$9_blcr$$1_cmd$$14$$ = 2, $trcr$$1$$ = 2, $isR2L_pos$$46$$ = D.$DvtAgent$$.$isRightToLeft$($context$$623$$);
  "start" == $position$$42$$ ? $isR2L_pos$$46$$ ? $background$$9_blcr$$1_cmd$$14$$ = 0 : $trcr$$1$$ = 0 : "end" == $position$$42$$ && ($isR2L_pos$$46$$ ? $trcr$$1$$ = 0 : $background$$9_blcr$$1_cmd$$14$$ = 0);
  var $isR2L_pos$$46$$ = -D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $size$$30$$ = D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $background$$9_blcr$$1_cmd$$14$$ = window.DvtPathUtils.$roundedRectangle$($isR2L_pos$$46$$, $isR2L_pos$$46$$, $size$$30$$, $size$$30$$, $background$$9_blcr$$1_cmd$$14$$, $trcr$$1$$, $trcr$$1$$, $background$$9_blcr$$1_cmd$$14$$), $background$$9_blcr$$1_cmd$$14$$ = new D.$DvtPath$$($context$$623$$, $background$$9_blcr$$1_cmd$$14$$);
  1 < D.$DvtAgent$$.$getDevicePixelRatio$() ? ($background$$9_blcr$$1_cmd$$14$$.$setSolidStroke$("#D8DEE3", 1, 1), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$9_blcr$$1_cmd$$14$$)) : $background$$9_blcr$$1_cmd$$14$$.$setSolidStroke$("#B8BDC1", 1, 1);
  return $background$$9_blcr$$1_cmd$$14$$
};
D.$DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($chart$$219_context$$624$$, $container$$148_isR2L$$1$$, $overDownState$$1_upSrc$$, $button$$56_downSrc$$, $callback$$130_enabled$$inline_6144_hitPadding$$, $callbackObj$$99$$, $hitArea$$2_position$$43$$) {
  $chart$$219_context$$624$$ = $chart$$219_context$$624$$.$_context$;
  var $upState$$17$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$219_context$$624$$, $hitArea$$2_position$$43$$);
  $upState$$17$$.$setSolidFill$("#FFFFFF", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $upState$$17$$.$addChild$(new D.$DvtImage$$($chart$$219_context$$624$$, $overDownState$$1_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $overState$$17$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$219_context$$624$$, $hitArea$$2_position$$43$$);
  $overState$$17$$.$setSolidFill$("#E2E3E4", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overState$$17$$.$addChild$(new D.$DvtImage$$($chart$$219_context$$624$$, $overDownState$$1_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $downState$$17$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$219_context$$624$$, $hitArea$$2_position$$43$$);
  $downState$$17$$.$setFill$(new D.$DvtLinearGradientFill$$(90, ["#0527CE", "#0586F0"], [D.$DvtChartRenderer$$.$_BUTTON_OPACITY$, D.$DvtChartRenderer$$.$_BUTTON_OPACITY$]));
  $downState$$17$$.$addChild$(new D.$DvtImage$$($chart$$219_context$$624$$, $button$$56_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $overDownState$$1_upSrc$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$219_context$$624$$, $hitArea$$2_position$$43$$);
  $overDownState$$1_upSrc$$.$setSolidFill$("#0586F0", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overDownState$$1_upSrc$$.$addChild$(new D.$DvtImage$$($chart$$219_context$$624$$, $button$$56_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $button$$56_downSrc$$ = new D.$DvtButton$$($chart$$219_context$$624$$, $upState$$17$$, $overState$$17$$, $downState$$17$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $callback$$130_enabled$$inline_6144_hitPadding$$, $callbackObj$$99$$);
  if(!$button$$56_downSrc$$.$overDownState$ || $button$$56_downSrc$$.$overDownState$ == $overDownState$$1_upSrc$$) {
    $callback$$130_enabled$$inline_6144_hitPadding$$ = D.$JSCompiler_alias_FALSE$$, $button$$56_downSrc$$.$overDownState$ && ($callback$$130_enabled$$inline_6144_hitPadding$$ = (0,D.$JSCompiler_StaticMethods__isButtonEnabled$$)($button$$56_downSrc$$.$overDownState$), $button$$56_downSrc$$.removeChild($button$$56_downSrc$$.$overDownState$)), $overDownState$$1_upSrc$$ && $button$$56_downSrc$$.$addChild$($overDownState$$1_upSrc$$), $button$$56_downSrc$$.$overDownState$ = $overDownState$$1_upSrc$$, (0,D.$JSCompiler_StaticMethods__enableButton$$)($button$$56_downSrc$$.$overDownState$, 
    $callback$$130_enabled$$inline_6144_hitPadding$$)
  }
  $button$$56_downSrc$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $container$$148_isR2L$$1$$.$addChild$($button$$56_downSrc$$);
  $button$$56_downSrc$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, function($chart$$219_context$$624$$) {
    $chart$$219_context$$624$$.stopPropagation()
  }, D.$JSCompiler_alias_FALSE$$, this);
  D.$DvtAgent$$.$isTouchDevice$() && ($container$$148_isR2L$$1$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$219_context$$624$$), $callback$$130_enabled$$inline_6144_hitPadding$$ = 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $hitArea$$2_position$$43$$ = "solo" == $hitArea$$2_position$$43$$ ? new D.$DvtRect$$($chart$$219_context$$624$$, -$callback$$130_enabled$$inline_6144_hitPadding$$, -$callback$$130_enabled$$inline_6144_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$130_enabled$$inline_6144_hitPadding$$, 
  D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$130_enabled$$inline_6144_hitPadding$$) : "start" == $hitArea$$2_position$$43$$ && !$container$$148_isR2L$$1$$ || "end" == $hitArea$$2_position$$43$$ && $container$$148_isR2L$$1$$ ? new D.$DvtRect$$($chart$$219_context$$624$$, -$callback$$130_enabled$$inline_6144_hitPadding$$, -$callback$$130_enabled$$inline_6144_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$130_enabled$$inline_6144_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 
  2 * $callback$$130_enabled$$inline_6144_hitPadding$$) : new D.$DvtRect$$($chart$$219_context$$624$$, -0.5 * $callback$$130_enabled$$inline_6144_hitPadding$$, -$callback$$130_enabled$$inline_6144_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$130_enabled$$inline_6144_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$130_enabled$$inline_6144_hitPadding$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$2_position$$43$$), $button$$56_downSrc$$.$addChild$($hitArea$$2_position$$43$$));
  return $button$$56_downSrc$$
};
D.$DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($availSpace$$102$$) {
  $availSpace$$102$$.x = window.Math.round($availSpace$$102$$.x);
  $availSpace$$102$$.y = window.Math.round($availSpace$$102$$.y);
  $availSpace$$102$$.$w$ = window.Math.round($availSpace$$102$$.$w$);
  $availSpace$$102$$.$h$ = window.Math.round($availSpace$$102$$.$h$)
};
D.$DvtChartAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisRenderer$$, D.$DvtObj$$, "DvtChartAxisRenderer");
D.$DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($chart$$220$$, $container$$149_xAxisInfo$$, $availSpace$$103$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$220$$)) {
    var $options$$222$$ = $chart$$220$$.$getOptions$(), $isHorizGraph_leftOverflow$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$220$$), $isPolarGraph_rightOverflow$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$220$$), $isR2L$$2$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$220$$.$_context$), $numGroups$$2$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$220$$), $totalAvailSpace$$ = $availSpace$$103$$.clone(), $topGap_xGap$$ = $options$$222$$.layout.verticalAxisTopGap;
    D.$DvtChartTypeUtils$$.$isVertical$($chart$$220$$) && D.$DvtChartAxisUtils$$.$areYAxisLabelsRendered$($chart$$220$$) && ($availSpace$$103$$.y += $topGap_xGap$$, $availSpace$$103$$.$h$ -= $topGap_xGap$$);
    "bubble" == $chart$$220$$.$getType$() && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$220$$, $availSpace$$103$$.$w$, $availSpace$$103$$.$h$);
    var $gapWidth$$2_yAxisInfo$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$220$$, $options$$222$$.layout.tickLabelGapWidth), $gapHeight$$2_y2AxisInfo$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$220$$, $options$$222$$.layout.tickLabelGapHeight), $topGap_xGap$$ = $isHorizGraph_leftOverflow$$ ? $gapWidth$$2_yAxisInfo$$ : $gapHeight$$2_y2AxisInfo$$, $newWidth$$2_yGap$$ = $isHorizGraph_leftOverflow$$ ? $gapHeight$$2_y2AxisInfo$$ : $gapWidth$$2_yAxisInfo$$, $gapWidth$$2_yAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createYAxis$($chart$$220$$, 
    $container$$149_xAxisInfo$$, $availSpace$$103$$), $gapHeight$$2_y2AxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createY2Axis$($chart$$220$$, $container$$149_xAxisInfo$$, $availSpace$$103$$);
    $gapWidth$$2_yAxisInfo$$ && (0,D.$DvtLayoutUtils$position$$)($availSpace$$103$$, $gapWidth$$2_yAxisInfo$$.position, $gapWidth$$2_yAxisInfo$$.axis, $gapWidth$$2_yAxisInfo$$.width, $gapWidth$$2_yAxisInfo$$.height, $newWidth$$2_yGap$$);
    $gapHeight$$2_y2AxisInfo$$ && (0,D.$DvtLayoutUtils$position$$)($availSpace$$103$$, $gapHeight$$2_y2AxisInfo$$.position, $gapHeight$$2_y2AxisInfo$$.axis, $gapHeight$$2_y2AxisInfo$$.width, $gapHeight$$2_y2AxisInfo$$.height, $newWidth$$2_yGap$$);
    "bubble" == $chart$$220$$.$getType$() && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$220$$, $availSpace$$103$$.$w$, $availSpace$$103$$.$h$);
    "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$220$$) && D.$DvtChartTypeUtils$$.$isBar$($chart$$220$$) && $availSpace$$103$$.$w$ > $numGroups$$2$$ && ($newWidth$$2_yGap$$ = window.Math.floor($availSpace$$103$$.$w$ / $numGroups$$2$$) * $numGroups$$2$$, $availSpace$$103$$.x += ($availSpace$$103$$.$w$ - $newWidth$$2_yGap$$) / 2, $availSpace$$103$$.$w$ = $newWidth$$2_yGap$$);
    $container$$149_xAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createXAxis$($chart$$220$$, $container$$149_xAxisInfo$$, $availSpace$$103$$, $totalAvailSpace$$);
    $isPolarGraph_rightOverflow$$ ? ($container$$149_xAxisInfo$$.axis.$setTranslateX$($availSpace$$103$$.x), $container$$149_xAxisInfo$$.axis.$setTranslateY$($availSpace$$103$$.y), $container$$149_xAxisInfo$$.axis.$render$($container$$149_xAxisInfo$$.options, $availSpace$$103$$.$w$, $availSpace$$103$$.$h$)) : ($container$$149_xAxisInfo$$.axis.$render$($container$$149_xAxisInfo$$.options, $container$$149_xAxisInfo$$.width, $container$$149_xAxisInfo$$.height), (0,D.$DvtLayoutUtils$position$$)($availSpace$$103$$, 
    $container$$149_xAxisInfo$$.position, $container$$149_xAxisInfo$$.axis, $container$$149_xAxisInfo$$.width, $container$$149_xAxisInfo$$.height, $topGap_xGap$$));
    $isPolarGraph_rightOverflow$$ && $gapWidth$$2_yAxisInfo$$ ? ($gapWidth$$2_yAxisInfo$$.axis.$setTranslateX$($availSpace$$103$$.x), $gapWidth$$2_yAxisInfo$$.axis.$setTranslateY$($availSpace$$103$$.y), $gapWidth$$2_yAxisInfo$$.options._numGroups = $numGroups$$2$$, $gapWidth$$2_yAxisInfo$$.axis.$render$($gapWidth$$2_yAxisInfo$$.options, $availSpace$$103$$.$w$, $availSpace$$103$$.$h$)) : $isHorizGraph_leftOverflow$$ ? ($gapWidth$$2_yAxisInfo$$ && ($gapWidth$$2_yAxisInfo$$.axis.$setTranslateX$($availSpace$$103$$.x), 
    $gapWidth$$2_yAxisInfo$$.axis.$render$($gapWidth$$2_yAxisInfo$$.options, $availSpace$$103$$.$w$, $gapWidth$$2_yAxisInfo$$.height)), $gapHeight$$2_y2AxisInfo$$ && ($gapWidth$$2_yAxisInfo$$ && this.$_alignYAxes$($gapWidth$$2_yAxisInfo$$.axis, $gapHeight$$2_y2AxisInfo$$.axis, $options$$222$$, $gapHeight$$2_y2AxisInfo$$.options), $gapHeight$$2_y2AxisInfo$$.axis.$setTranslateX$($availSpace$$103$$.x), $gapHeight$$2_y2AxisInfo$$.axis.$render$($gapHeight$$2_y2AxisInfo$$.options, $availSpace$$103$$.$w$, 
    $gapHeight$$2_y2AxisInfo$$.height)), $isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($gapWidth$$2_yAxisInfo$$.axis), $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($gapWidth$$2_yAxisInfo$$.axis), $availSpace$$103$$.x += $isHorizGraph_leftOverflow$$, $availSpace$$103$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$) : ($isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($container$$149_xAxisInfo$$.axis), 
    $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($container$$149_xAxisInfo$$.axis), $availSpace$$103$$.x += $isHorizGraph_leftOverflow$$, $availSpace$$103$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$, $gapWidth$$2_yAxisInfo$$ && ($gapWidth$$2_yAxisInfo$$.axis.$setTranslateX$($gapWidth$$2_yAxisInfo$$.axis.$getTranslateX$() + ($isR2L$$2$$ ? -$isPolarGraph_rightOverflow$$ : $isHorizGraph_leftOverflow$$)), $gapWidth$$2_yAxisInfo$$.axis.$render$($gapWidth$$2_yAxisInfo$$.options, 
    $gapWidth$$2_yAxisInfo$$.width, $availSpace$$103$$.$h$)), $gapHeight$$2_y2AxisInfo$$ && ($gapWidth$$2_yAxisInfo$$ && this.$_alignYAxes$($gapWidth$$2_yAxisInfo$$.axis, $gapHeight$$2_y2AxisInfo$$.axis, $options$$222$$, $gapHeight$$2_y2AxisInfo$$.options), $gapHeight$$2_y2AxisInfo$$.axis.$setTranslateX$($gapHeight$$2_y2AxisInfo$$.axis.$getTranslateX$() + ($isR2L$$2$$ ? $isHorizGraph_leftOverflow$$ : -$isPolarGraph_rightOverflow$$)), $gapHeight$$2_y2AxisInfo$$.axis.$render$($gapHeight$$2_y2AxisInfo$$.options, 
    $gapHeight$$2_y2AxisInfo$$.width, $availSpace$$103$$.$h$)));
    $chart$$220$$.$xAxis$ = $container$$149_xAxisInfo$$.axis;
    $chart$$220$$.$yAxis$ = $gapWidth$$2_yAxisInfo$$ ? $gapWidth$$2_yAxisInfo$$.axis : D.$JSCompiler_alias_NULL$$;
    $chart$$220$$.$y2Axis$ = $gapHeight$$2_y2AxisInfo$$ ? $gapHeight$$2_y2AxisInfo$$.axis : D.$JSCompiler_alias_NULL$$
  }
};
D.$DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($chart$$221$$, $container$$150_maxWidth$$22$$, $availSpace$$104_isR2L$$3_maxHeight$$17$$, $axis$$38_totalAvailSpace$$1$$) {
  var $actualSize$$2_options$$223$$ = $chart$$221$$.$getOptions$(), $position$$44$$ = D.$DvtChartAxisUtils$$.$getXAxisPosition$($chart$$221$$), $axisOptions$$1$$ = D.$DvtJSONUtils$$.clone($actualSize$$2_options$$223$$.xAxis);
  $axisOptions$$1$$.skin = $actualSize$$2_options$$223$$.skin;
  $axisOptions$$1$$.layout.gapRatio = $chart$$221$$.$getGapRatio$();
  $axisOptions$$1$$.position = $position$$44$$;
  $axisOptions$$1$$.baselineScaling = $actualSize$$2_options$$223$$.xAxis.baselineScaling;
  $axisOptions$$1$$.title = $actualSize$$2_options$$223$$.xAxis ? $actualSize$$2_options$$223$$.xAxis.title : D.$JSCompiler_alias_NULL$$;
  $axisOptions$$1$$.groups = $actualSize$$2_options$$223$$.groups;
  $axisOptions$$1$$.timeAxisType = $actualSize$$2_options$$223$$.timeAxisType && D.$DvtChartTypeUtils$$.$isTimeAxisSupported$($chart$$221$$) ? $actualSize$$2_options$$223$$.timeAxisType : "disabled";
  $axisOptions$$1$$.zoomAndScroll = $actualSize$$2_options$$223$$.zoomAndScroll;
  $axisOptions$$1$$._isOverview = $actualSize$$2_options$$223$$._isOverview;
  $axisOptions$$1$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$221$$) ? "polygon" : "circle";
  $axisOptions$$1$$._radius = $chart$$221$$.$getRadius$();
  if(!D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$221$$)) {
    var $axisOffset_dataValues_isHoriz$$13$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$221$$, "x");
    $axisOptions$$1$$.dataMin = $axisOptions$$1$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$1$$.dataMin : $axisOffset_dataValues_isHoriz$$13$$.min;
    $axisOptions$$1$$.dataMax = $axisOptions$$1$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$1$$.dataMax : $axisOffset_dataValues_isHoriz$$13$$.max
  }
  "tangential" == $position$$44$$ && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$221$$) ? D.$DvtChartTypeUtils$$.$isBar$($chart$$221$$) ? ($axisOptions$$1$$.startGroupOffset = 0.5, $axisOptions$$1$$.endGroupOffset = 0.5) : $axisOptions$$1$$.endGroupOffset = 1 : ($axisOffset_dataValues_isHoriz$$13$$ = D.$DvtChartAxisUtils$$.$getBarAxisOffset$($chart$$221$$), $axisOptions$$1$$.startGroupOffset = $axisOffset_dataValues_isHoriz$$13$$, $axisOptions$$1$$.endGroupOffset = $axisOffset_dataValues_isHoriz$$13$$);
  $axisOffset_dataValues_isHoriz$$13$$ = "top" == $position$$44$$ || "bottom" == $position$$44$$;
  $axisOptions$$1$$.leftBuffer = $axisOffset_dataValues_isHoriz$$13$$ ? $availSpace$$104_isR2L$$3_maxHeight$$17$$.x - $axis$$38_totalAvailSpace$$1$$.x : 0;
  $axisOptions$$1$$.rightBuffer = $axisOffset_dataValues_isHoriz$$13$$ ? $axis$$38_totalAvailSpace$$1$$.$w$ + $axis$$38_totalAvailSpace$$1$$.x - ($availSpace$$104_isR2L$$3_maxHeight$$17$$.$w$ + $availSpace$$104_isR2L$$3_maxHeight$$17$$.x) : 0;
  $axisOptions$$1$$._renderGridAtLabels = !D.$DvtChartTypeUtils$$.$isBar$($chart$$221$$) || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$221$$);
  $axis$$38_totalAvailSpace$$1$$ = new D.$DvtChartAxis$$($chart$$221$$.$_context$, $chart$$221$$.$processEvent$, $chart$$221$$);
  $container$$150_maxWidth$$22$$.$addChild$($axis$$38_totalAvailSpace$$1$$);
  $container$$150_maxWidth$$22$$ = $axisOffset_dataValues_isHoriz$$13$$ ? $availSpace$$104_isR2L$$3_maxHeight$$17$$.$w$ : $actualSize$$2_options$$223$$.layout.axisMaxSize * $availSpace$$104_isR2L$$3_maxHeight$$17$$.$w$;
  $availSpace$$104_isR2L$$3_maxHeight$$17$$ = $axisOffset_dataValues_isHoriz$$13$$ ? $actualSize$$2_options$$223$$.layout.axisMaxSize * $availSpace$$104_isR2L$$3_maxHeight$$17$$.$h$ : $availSpace$$104_isR2L$$3_maxHeight$$17$$.$h$;
  "tangential" == $position$$44$$ ? $actualSize$$2_options$$223$$ = new D.$DvtDimension$$(0, 0) : $actualSize$$2_options$$223$$._duringAnimation ? $axisOffset_dataValues_isHoriz$$13$$ ? ($actualSize$$2_options$$223$$ = new D.$DvtDimension$$($container$$150_maxWidth$$22$$, $chart$$221$$.$xAxis$.getHeight()), $availSpace$$104_isR2L$$3_maxHeight$$17$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$221$$.$_context$), $axisOptions$$1$$._startOverflow = $availSpace$$104_isR2L$$3_maxHeight$$17$$ ? (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$221$$.$xAxis$) : 
  (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$221$$.$xAxis$), $axisOptions$$1$$._endOverflow = $availSpace$$104_isR2L$$3_maxHeight$$17$$ ? (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$221$$.$xAxis$) : (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$221$$.$xAxis$)) : $actualSize$$2_options$$223$$ = new D.$DvtDimension$$($chart$$221$$.$xAxis$.getWidth(), $availSpace$$104_isR2L$$3_maxHeight$$17$$) : $actualSize$$2_options$$223$$ = $axis$$38_totalAvailSpace$$1$$.$getPreferredSize$($axisOptions$$1$$, 
  $container$$150_maxWidth$$22$$, $availSpace$$104_isR2L$$3_maxHeight$$17$$);
  return{axis:$axis$$38_totalAvailSpace$$1$$, options:$axisOptions$$1$$, position:$position$$44$$, width:$actualSize$$2_options$$223$$.$w$, height:$actualSize$$2_options$$223$$.$h$}
};
D.$DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($actualSize$$3_chart$$222$$, $container$$151_maxWidth$$23$$, $availSpace$$105_maxHeight$$18$$) {
  var $options$$224$$ = $actualSize$$3_chart$$222$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2DataOnly$($actualSize$$3_chart$$222$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $position$$45$$ = D.$DvtChartAxisUtils$$.$getYAxisPosition$($actualSize$$3_chart$$222$$), $isHoriz$$14$$ = "top" == $position$$45$$ || "bottom" == $position$$45$$, $axisOptions$$2$$ = D.$DvtJSONUtils$$.clone($options$$224$$.yAxis);
  $axisOptions$$2$$.skin = $options$$224$$.skin;
  $axisOptions$$2$$.layout.gapRatio = $actualSize$$3_chart$$222$$.$getGapRatio$();
  $axisOptions$$2$$.position = $position$$45$$;
  $axisOptions$$2$$.baselineScaling = $options$$224$$.yAxis.baselineScaling;
  var $axis$$39_dataValues$$1_isR2L$$4$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($actualSize$$3_chart$$222$$, "y", D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$3_chart$$222$$));
  $axisOptions$$2$$.dataMin = $axisOptions$$2$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$2$$.dataMin : $axis$$39_dataValues$$1_isR2L$$4$$.min;
  $axisOptions$$2$$.dataMax = $axisOptions$$2$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$2$$.dataMax : $axis$$39_dataValues$$1_isR2L$$4$$.max;
  $axisOptions$$2$$.title = $options$$224$$.yAxis ? $options$$224$$.yAxis.title : D.$JSCompiler_alias_NULL$$;
  $axisOptions$$2$$.timeAxisType = "disabled";
  $axisOptions$$2$$.zoomAndScroll = $options$$224$$.zoomAndScroll;
  $axisOptions$$2$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($actualSize$$3_chart$$222$$) ? "polygon" : "circle";
  $axisOptions$$2$$._radius = $actualSize$$3_chart$$222$$.$getRadius$();
  $axisOptions$$2$$._useBaselineColor = D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$3_chart$$222$$);
  D.$DvtChartEventUtils$$.$isLiveScroll$($actualSize$$3_chart$$222$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$3_chart$$222$$) && !D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$3_chart$$222$$)) && ($axisOptions$$2$$._continuousExtent = "on");
  $axis$$39_dataValues$$1_isR2L$$4$$ = D.$DvtAgent$$.$isRightToLeft$($actualSize$$3_chart$$222$$.$_context$);
  $axisOptions$$2$$.leftBuffer = $axis$$39_dataValues$$1_isR2L$$4$$ ? 0 : 10;
  $axisOptions$$2$$.rightBuffer = $axis$$39_dataValues$$1_isR2L$$4$$ ? 10 : 0;
  $axis$$39_dataValues$$1_isR2L$$4$$ = new D.$DvtChartAxis$$($actualSize$$3_chart$$222$$.$_context$, $actualSize$$3_chart$$222$$.$processEvent$, $actualSize$$3_chart$$222$$);
  $container$$151_maxWidth$$23$$.$addChild$($axis$$39_dataValues$$1_isR2L$$4$$);
  $container$$151_maxWidth$$23$$ = $isHoriz$$14$$ ? $availSpace$$105_maxHeight$$18$$.$w$ : $options$$224$$.layout.axisMaxSize * $availSpace$$105_maxHeight$$18$$.$w$;
  $availSpace$$105_maxHeight$$18$$ = $isHoriz$$14$$ ? $options$$224$$.layout.axisMaxSize * $availSpace$$105_maxHeight$$18$$.$h$ : $availSpace$$105_maxHeight$$18$$.$h$;
  $actualSize$$3_chart$$222$$ = "radial" == $position$$45$$ ? new D.$DvtDimension$$(0, 0) : $options$$224$$._duringAnimation ? $isHoriz$$14$$ ? new D.$DvtDimension$$($container$$151_maxWidth$$23$$, $actualSize$$3_chart$$222$$.$yAxis$.getHeight()) : new D.$DvtDimension$$($actualSize$$3_chart$$222$$.$yAxis$.getWidth(), $availSpace$$105_maxHeight$$18$$) : $axis$$39_dataValues$$1_isR2L$$4$$.$getPreferredSize$($axisOptions$$2$$, $container$$151_maxWidth$$23$$, $availSpace$$105_maxHeight$$18$$);
  $options$$224$$.yAxis.min = $axisOptions$$2$$.min;
  $options$$224$$.yAxis.max = $axisOptions$$2$$.max;
  return{axis:$axis$$39_dataValues$$1_isR2L$$4$$, options:$axisOptions$$2$$, position:$position$$45$$, width:$actualSize$$3_chart$$222$$.$w$, height:$actualSize$$3_chart$$222$$.$h$}
};
D.$DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($actualSize$$4_chart$$223$$, $container$$152_isHoriz$$15$$, $availSpace$$106_maxHeight$$19$$) {
  var $options$$225$$ = $actualSize$$4_chart$$223$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2Data$($actualSize$$4_chart$$223$$)) {
    var $position$$46$$ = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($actualSize$$4_chart$$223$$), $axisOptions$$3$$ = D.$DvtJSONUtils$$.clone($options$$225$$.y2Axis);
    $axisOptions$$3$$.skin = $options$$225$$.skin;
    $axisOptions$$3$$.layout.gapRatio = $actualSize$$4_chart$$223$$.$getGapRatio$();
    $axisOptions$$3$$.position = $position$$46$$;
    $axisOptions$$3$$.baselineScaling = $options$$225$$.y2Axis.baselineScaling;
    var $axis$$40_dataValues$$2_isR2L$$5$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($actualSize$$4_chart$$223$$, "y2", D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$4_chart$$223$$));
    $axisOptions$$3$$.dataMin = $axisOptions$$3$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$3$$.dataMin : $axis$$40_dataValues$$2_isR2L$$5$$.min;
    $axisOptions$$3$$.dataMax = $axisOptions$$3$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$3$$.dataMax : $axis$$40_dataValues$$2_isR2L$$5$$.max;
    $axisOptions$$3$$.title = $options$$225$$.y2Axis ? $options$$225$$.y2Axis.title : D.$JSCompiler_alias_NULL$$;
    $axisOptions$$3$$.timeAxisType = "disabled";
    $axisOptions$$3$$.zoomAndScroll = $options$$225$$.zoomAndScroll;
    D.$DvtChartEventUtils$$.$isLiveScroll$($actualSize$$4_chart$$223$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$4_chart$$223$$) && !D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$4_chart$$223$$)) && ($axisOptions$$3$$._continuousExtent = "on");
    $axis$$40_dataValues$$2_isR2L$$5$$ = D.$DvtAgent$$.$isRightToLeft$($actualSize$$4_chart$$223$$.$_context$);
    $axisOptions$$3$$.leftBuffer = $axis$$40_dataValues$$2_isR2L$$5$$ ? 0 : 10;
    $axisOptions$$3$$.rightBuffer = $axis$$40_dataValues$$2_isR2L$$5$$ ? 10 : 0;
    $axis$$40_dataValues$$2_isR2L$$5$$ = new D.$DvtChartAxis$$($actualSize$$4_chart$$223$$.$_context$, $actualSize$$4_chart$$223$$.$processEvent$, $actualSize$$4_chart$$223$$);
    $container$$152_isHoriz$$15$$.$addChild$($axis$$40_dataValues$$2_isR2L$$5$$);
    var $maxWidth$$24$$ = ($container$$152_isHoriz$$15$$ = "top" == $position$$46$$ || "bottom" == $position$$46$$) ? $availSpace$$106_maxHeight$$19$$.$w$ : $options$$225$$.layout.axisMaxSize * $availSpace$$106_maxHeight$$19$$.$w$;
    $availSpace$$106_maxHeight$$19$$ = $container$$152_isHoriz$$15$$ ? $options$$225$$.layout.axisMaxSize * $availSpace$$106_maxHeight$$19$$.$h$ : $availSpace$$106_maxHeight$$19$$.$h$;
    $actualSize$$4_chart$$223$$ = $options$$225$$._duringAnimation ? $container$$152_isHoriz$$15$$ ? new D.$DvtDimension$$($maxWidth$$24$$, $actualSize$$4_chart$$223$$.$y2Axis$.getHeight()) : new D.$DvtDimension$$($actualSize$$4_chart$$223$$.$y2Axis$.getWidth(), $availSpace$$106_maxHeight$$19$$) : $axis$$40_dataValues$$2_isR2L$$5$$.$getPreferredSize$($axisOptions$$3$$, $maxWidth$$24$$, $availSpace$$106_maxHeight$$19$$);
    $options$$225$$.y2Axis.min = $axisOptions$$3$$.min;
    $options$$225$$.y2Axis.max = $axisOptions$$3$$.max;
    return{axis:$axis$$40_dataValues$$2_isR2L$$5$$, options:$axisOptions$$3$$, position:$position$$46$$, width:$actualSize$$4_chart$$223$$.$w$, height:$actualSize$$4_chart$$223$$.$h$}
  }
};
D.$DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($minorTickCount_yAxis$$3$$, $y2Axis$$, $options$$226$$, $y2AxisOptions$$) {
  var $majorTickCount$$1$$ = $minorTickCount_yAxis$$3$$.$getMajorTickCount$();
  $minorTickCount_yAxis$$3$$ = $minorTickCount_yAxis$$3$$.$getMinorTickCount$();
  "on" == $options$$226$$.y2Axis.alignTickMarks && $options$$226$$.y2Axis.step == D.$JSCompiler_alias_NULL$$ && ($y2Axis$$.$setMajorTickCount$($majorTickCount$$1$$), $y2Axis$$.$setMinorTickCount$($minorTickCount_yAxis$$3$$), $y2AxisOptions$$.step = $y2Axis$$.$getMajorIncrement$(), $y2AxisOptions$$.minorStep = $y2Axis$$.$getMinorIncrement$())
};
D.$DvtChartLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLegendRenderer$$, D.$DvtObj$$, "DvtChartLegendRenderer");
D.$DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($chart$$174$$, $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$, $availSpace$$72$$) {
  var $gap$$20_options$$209$$ = $chart$$174$$.$getOptions$(), $position$$34$$ = $gap$$20_options$$209$$.legend.position, $scrolling$$1$$ = $gap$$20_options$$209$$.legend.scrolling;
  if("on" == $gap$$20_options$$209$$.legend.rendered) {
    var $legendOptions$$5$$ = D.$DvtJSONUtils$$.clone($gap$$20_options$$209$$.legend);
    delete $legendOptions$$5$$.position;
    $legendOptions$$5$$.skin = $gap$$20_options$$209$$.skin;
    $legendOptions$$5$$.layout.gapRatio = $chart$$174$$.$getGapRatio$();
    $legendOptions$$5$$.hideAndShowBehavior = D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$174$$);
    $legendOptions$$5$$.hoverBehavior = D.$DvtChartEventUtils$$.$getHoverBehavior$($chart$$174$$);
    D.$DvtChartLegendRenderer$$.$_addLegendData$($chart$$174$$, $legendOptions$$5$$);
    if(0 != $legendOptions$$5$$.sections.length) {
      var $legend$$33$$ = (0,D.$DvtLegend$newInstance$$)($chart$$174$$.$_context$, $chart$$174$$.$processEvent$, $chart$$174$$);
      $chart$$174$$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$33$$.setId($chart$$174$$.getId() + "legend");
      $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$.$addChild$($legend$$33$$);
      "auto" == $position$$34$$ && "asNeeded" !== $scrolling$$1$$ ? $position$$34$$ = $availSpace$$72$$.$w$ >= $availSpace$$72$$.$h$ ? "end" : "bottom" : "auto" == $position$$34$$ && "asNeeded" == $scrolling$$1$$ && ($position$$34$$ = "end");
      $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$174$$.$_context$);
      "start" == $position$$34$$ ? $position$$34$$ = $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$ ? "right" : "left" : "end" == $position$$34$$ && ($position$$34$$ = $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$ ? "left" : "right");
      $legendOptions$$5$$.orientation = "left" == $position$$34$$ || "right" == $position$$34$$ ? "vertical" : "horizontal";
      $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$ = "top" == $position$$34$$ || "bottom" == $position$$34$$;
      $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$ = $legend$$33$$.$getPreferredSize$($legendOptions$$5$$, $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$ ? $availSpace$$72$$.$w$ : $gap$$20_options$$209$$.layout.legendMaxSize * $availSpace$$72$$.$w$, $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$ ? $gap$$20_options$$209$$.layout.legendMaxSize * $availSpace$$72$$.$h$ : $availSpace$$72$$.$h$);
      $legend$$33$$.$render$($legendOptions$$5$$, $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$.$w$, $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$.$h$);
      $gap$$20_options$$209$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$174$$, $gap$$20_options$$209$$.layout.legendGap);
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$72$$, $position$$34$$, $legend$$33$$, $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$.$w$, $actualSize$$1_container$$120_isHoriz$$12_isRTL$$28$$.$h$, $gap$$20_options$$209$$);
      $chart$$174$$.legend = $legend$$33$$
    }
  }
};
D.$DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($chart$$175$$, $legendOptions$$6$$) {
  var $chartOptions$$2$$ = $chart$$175$$.$getOptions$();
  $legendOptions$$6$$.title = $chartOptions$$2$$.legend ? $chartOptions$$2$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$6$$.sections = [];
  var $refObjItems_seriesItems$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItems$($chart$$175$$);
  0 < $refObjItems_seriesItems$$.length && $legendOptions$$6$$.sections.push({items:$refObjItems_seriesItems$$});
  D.$DvtChartLegendRenderer$$.$_addLegendSections$($chart$$175$$, $legendOptions$$6$$.sections);
  $refObjItems_seriesItems$$ = D.$DvtChartLegendRenderer$$.$_getRefObjItems$($chart$$175$$);
  0 < $refObjItems_seriesItems$$.length && $legendOptions$$6$$.sections.push({items:$refObjItems_seriesItems$$, title:$chartOptions$$2$$.legend ? $chartOptions$$2$$.legend.referenceObjectTitle : D.$JSCompiler_alias_NULL$$});
  return $legendOptions$$6$$
};
D.$DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($chart$$176$$) {
  var $ret$$110$$ = [], $legendItem$$1$$;
  if("pie" == $chart$$176$$.$getType$()) {
    for(var $seriesCount$$13_seriesIndices$$1$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$($chart$$176$$), $seriesIndex$$64$$, $i$$658$$ = 0;$i$$658$$ < $seriesCount$$13_seriesIndices$$1$$.length;$i$$658$$++) {
      $seriesIndex$$64$$ = $seriesCount$$13_seriesIndices$$1$$[$i$$658$$], ($legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$176$$, $seriesIndex$$64$$)) && $ret$$110$$.push($legendItem$$1$$)
    }
    D.$DvtPieChartUtils$$.$hasOtherSeries$($chart$$176$$) && ($legendItem$$1$$ = {id:D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, text:(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$176$$.$Bundle$, "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), categoryVisibility:D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$176$$), type:"marker", color:$chart$$176$$.$getOptions$().styleDefaults.otherColor, borderColor:$chart$$176$$.$getOptions$().styleDefaults.borderColor}, $ret$$110$$.push($legendItem$$1$$))
  }else {
    $seriesCount$$13_seriesIndices$$1$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$176$$);
    for($seriesIndex$$64$$ = 0;$seriesIndex$$64$$ < $seriesCount$$13_seriesIndices$$1$$;$seriesIndex$$64$$++) {
      ($legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$176$$, $seriesIndex$$64$$)) && $ret$$110$$.push($legendItem$$1$$)
    }
  }
  D.$DvtChartTypeUtils$$.$isStacked$($chart$$176$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$176$$) && $ret$$110$$.reverse();
  return $ret$$110$$
};
D.$DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($chart$$177$$, $seriesIndex$$65$$) {
  var $seriesItem$$26$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$177$$, $seriesIndex$$65$$);
  if(!$seriesItem$$26$$ || "off" == $seriesItem$$26$$.displayInLegend || "on" != $seriesItem$$26$$.displayInLegend && !D.$DvtChartDataUtils$$.$hasSeriesData$($chart$$177$$, $seriesIndex$$65$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $legendItem$$2_seriesLabel$$1$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$177$$, $seriesIndex$$65$$);
  if(!$legendItem$$2_seriesLabel$$1$$ || 0 >= $legendItem$$2_seriesLabel$$1$$.trim().length) {
    return D.$JSCompiler_alias_NULL$$
  }
  $legendItem$$2_seriesLabel$$1$$ = {id:D.$DvtChartDataUtils$$.$getSeries$($chart$$177$$, $seriesIndex$$65$$), text:$legendItem$$2_seriesLabel$$1$$, categoryVisibility:$seriesItem$$26$$.visibility};
  "line" == $chart$$177$$.$getType$() ? ($legendItem$$2_seriesLabel$$1$$.lineStyle = D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$177$$, $seriesIndex$$65$$), $legendItem$$2_seriesLabel$$1$$.lineWidth = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$177$$, $seriesIndex$$65$$), "on" == D.$DvtChartStyleUtils$$.$getMarkerDisplayed$($chart$$177$$, $seriesIndex$$65$$) ? ($legendItem$$2_seriesLabel$$1$$.type = "lineWithMarker", $legendItem$$2_seriesLabel$$1$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$177$$, 
  $seriesIndex$$65$$), $legendItem$$2_seriesLabel$$1$$.markerColor = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$177$$, $seriesIndex$$65$$)) : $legendItem$$2_seriesLabel$$1$$.type = "line") : "scatter" == $chart$$177$$.$getType$() || "bubble" == $chart$$177$$.$getType$() ? ($legendItem$$2_seriesLabel$$1$$.type = "marker", $legendItem$$2_seriesLabel$$1$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$177$$, $seriesIndex$$65$$)) : $legendItem$$2_seriesLabel$$1$$.type = "marker";
  $legendItem$$2_seriesLabel$$1$$.color = D.$DvtChartStyleUtils$$.$getColor$($chart$$177$$, $seriesIndex$$65$$);
  $legendItem$$2_seriesLabel$$1$$.borderColor = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$177$$, $seriesIndex$$65$$);
  $legendItem$$2_seriesLabel$$1$$.pattern = D.$DvtChartStyleUtils$$.$getPattern$($chart$$177$$, $seriesIndex$$65$$);
  $legendItem$$2_seriesLabel$$1$$.action = $seriesItem$$26$$.action;
  $legendItem$$2_seriesLabel$$1$$._spb = $chart$$177$$.$getShowPopupBehaviors$($seriesItem$$26$$._id);
  return $legendItem$$2_seriesLabel$$1$$
};
D.$DvtChartLegendRenderer$$.$_addLegendSections$ = function $$DvtChartLegendRenderer$$$$_addLegendSections$$($chart$$178$$, $sections$$2$$) {
  var $options$$210$$ = $chart$$178$$.$getOptions$();
  if($options$$210$$ && $options$$210$$.legend && $options$$210$$.legend.sections) {
    for(var $i$$659$$ = 0;$i$$659$$ < $options$$210$$.legend.sections.length;$i$$659$$++) {
      var $dataSection$$2$$ = $options$$210$$.legend.sections[$i$$659$$];
      $dataSection$$2$$ && $dataSection$$2$$.items && $sections$$2$$.push({title:$dataSection$$2$$.title, items:$dataSection$$2$$.items})
    }
  }
};
D.$DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($chart$$179_refObjs$$) {
  $chart$$179_refObjs$$ = D.$DvtChartRefObjUtils$$.$getObjects$($chart$$179_refObjs$$);
  if(0 >= $chart$$179_refObjs$$.length) {
    return[]
  }
  for(var $items$$16$$ = [], $i$$660$$ = 0;$i$$660$$ < $chart$$179_refObjs$$.length;$i$$660$$++) {
    var $refObj$$6$$ = $chart$$179_refObjs$$[$i$$660$$];
    if($refObj$$6$$ && "on" == $refObj$$6$$.displayInLegend && $refObj$$6$$.text) {
      var $type$$203$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$6$$);
      $items$$16$$.push({type:"area" == $type$$203$$ ? "square" : "line", text:$refObj$$6$$.text, color:D.$DvtChartRefObjUtils$$.$getColor$($refObj$$6$$), lineStyle:$refObj$$6$$.lineStyle, lineWidth:D.$DvtChartRefObjUtils$$.$getLineWidth$($refObj$$6$$)})
    }
  }
  return $items$$16$$
};
D.$DvtPlotAreaRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPlotAreaRenderer$$, D.$DvtObj$$, "DvtPlotAreaRenderer");
D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
D.$DvtPlotAreaRenderer$$.$render$ = function $$DvtPlotAreaRenderer$$$$render$$($chart$$188$$, $container$$125$$, $availSpace$$74$$) {
  $chart$$188$$.$_currentMarkers$ = [];
  $chart$$188$$.$_currentAreas$ = [];
  D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$($chart$$188$$, $container$$125$$, $availSpace$$74$$);
  D.$DvtPlotAreaRenderer$$.$_renderGridLines$($chart$$188$$, $container$$125$$, $availSpace$$74$$);
  D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$($chart$$188$$, $container$$125$$, $availSpace$$74$$)
};
D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderBackgroundObjects$$($chart$$189$$, $container$$126$$, $availSpace$$75$$) {
  var $areaContainer$$1_options$$211$$ = $chart$$189$$.$getOptions$(), $background$$8_cx$$37_points$$68$$, $context$$617$$ = $chart$$189$$.$_context$;
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$189$$)) {
    $background$$8_cx$$37_points$$68$$ = $availSpace$$75$$.x + $availSpace$$75$$.$w$ / 2;
    var $cy$$38$$ = $availSpace$$75$$.y + $availSpace$$75$$.$h$ / 2;
    D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$189$$) ? ($background$$8_cx$$37_points$$68$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($background$$8_cx$$37_points$$68$$, $cy$$38$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$189$$), $chart$$189$$.$getRadius$()), $background$$8_cx$$37_points$$68$$ = new D.$DvtPolygon$$($context$$617$$, $background$$8_cx$$37_points$$68$$)) : $background$$8_cx$$37_points$$68$$ = new D.$DvtCircle$$($context$$617$$, $background$$8_cx$$37_points$$68$$, 
    $cy$$38$$, $chart$$189$$.$getRadius$())
  }else {
    $background$$8_cx$$37_points$$68$$ = new D.$DvtRect$$($context$$617$$, $availSpace$$75$$.x, $availSpace$$75$$.y, $availSpace$$75$$.$w$, $availSpace$$75$$.$h$)
  }
  $areaContainer$$1_options$$211$$.plotArea.backgroundColor ? $background$$8_cx$$37_points$$68$$.$setSolidFill$($areaContainer$$1_options$$211$$.plotArea.backgroundColor) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$8_cx$$37_points$$68$$);
  $container$$126$$.$addChild$($background$$8_cx$$37_points$$68$$);
  $chart$$189$$.$getEventManager$().$associate$($background$$8_cx$$37_points$$68$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$PLOT_AREA$)));
  if($areaContainer$$1_options$$211$$.xAxis.referenceObjects || $areaContainer$$1_options$$211$$.yAxis.referenceObjects || $areaContainer$$1_options$$211$$.y2Axis.referenceObjects) {
    window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$189$$, $container$$126$$, $availSpace$$75$$), D.$DvtRefObjRenderer$$.$renderBackgroundObjects$($chart$$189$$, $availSpace$$75$$)
  }
  if(D.$DvtChartTypeUtils$$.$isArea$($chart$$189$$) || D.$DvtChartTypeUtils$$.$isCombo$($chart$$189$$)) {
    $areaContainer$$1_options$$211$$ = new D.$DvtContainer$$($context$$617$$), $container$$126$$.$addChild$($areaContainer$$1_options$$211$$), D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$189$$, $areaContainer$$1_options$$211$$, $availSpace$$75$$), $chart$$189$$.$_areaContainer$ = $areaContainer$$1_options$$211$$
  }
};
D.$DvtPlotAreaRenderer$$.$_renderGridLines$ = function $$DvtPlotAreaRenderer$$$$_renderGridLines$$($chart$$190$$, $container$$127$$, $availSpace$$76$$) {
  var $context$$618$$ = $container$$127$$.$_context$, $options$$212_renderY2Axis$$ = $chart$$190$$.$getOptions$(), $renderXAxis$$ = $chart$$190$$.$xAxis$ && "off" != $options$$212_renderY2Axis$$.xAxis.rendered, $renderYAxis$$ = $chart$$190$$.$yAxis$ && "off" != $options$$212_renderY2Axis$$.yAxis.rendered, $options$$212_renderY2Axis$$ = $chart$$190$$.$y2Axis$ && "off" != $options$$212_renderY2Axis$$.y2Axis.rendered;
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$127$$, $availSpace$$76$$, $chart$$190$$.$xAxis$, $chart$$190$$.$xAxis$.$getMinorGridLines$($context$$618$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$127$$, $availSpace$$76$$, $chart$$190$$.$yAxis$, $chart$$190$$.$yAxis$.$getMinorGridLines$($context$$618$$));
  $options$$212_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$127$$, $availSpace$$76$$, $chart$$190$$.$y2Axis$, $chart$$190$$.$y2Axis$.$getMinorGridLines$($context$$618$$));
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$127$$, $availSpace$$76$$, $chart$$190$$.$xAxis$, $chart$$190$$.$xAxis$.$getMajorGridLines$($context$$618$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$127$$, $availSpace$$76$$, $chart$$190$$.$yAxis$, $chart$$190$$.$yAxis$.$getMajorGridLines$($context$$618$$));
  $options$$212_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$127$$, $availSpace$$76$$, $chart$$190$$.$y2Axis$, $chart$$190$$.$y2Axis$.$getMajorGridLines$($context$$618$$));
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$127$$, $availSpace$$76$$, $chart$$190$$.$xAxis$);
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$127$$, $availSpace$$76$$, $chart$$190$$.$yAxis$);
  $options$$212_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$127$$, $availSpace$$76$$, $chart$$190$$.$y2Axis$)
};
D.$DvtPlotAreaRenderer$$.$_positionGridLines$ = function $$DvtPlotAreaRenderer$$$$_positionGridLines$$($container$$128$$, $availSpace$$77$$, $axis$$36$$, $gridlines$$5$$) {
  for(var $position$$37$$ = $axis$$36$$.$getPosition$(), $i$$663$$ = 0;$i$$663$$ < $gridlines$$5$$.length;$i$$663$$++) {
    var $gridline$$ = $gridlines$$5$$[$i$$663$$];
    $container$$128$$.$addChild$($gridline$$);
    "radial" == $position$$37$$ || "tangential" == $position$$37$$ ? ($gridline$$.$setTranslateX$($availSpace$$77$$.x + $availSpace$$77$$.$w$ / 2), $gridline$$.$setTranslateY$($availSpace$$77$$.y + $availSpace$$77$$.$h$ / 2)) : "top" == $position$$37$$ || "bottom" == $position$$37$$ ? ($gridline$$.$setY1$($availSpace$$77$$.y), $gridline$$.$setY2$($availSpace$$77$$.y + $availSpace$$77$$.$h$), $gridline$$.$setX1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$36$$, $gridline$$.$getX1$())), 
    $gridline$$.$setX2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$36$$, $gridline$$.$getX2$()))) : ($gridline$$.$setX1$($availSpace$$77$$.x), $gridline$$.$setX2$($availSpace$$77$$.x + $availSpace$$77$$.$w$), $gridline$$.$setY1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$36$$, $gridline$$.$getY1$())), $gridline$$.$setY2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$36$$, $gridline$$.$getY2$())))
  }
};
D.$DvtPlotAreaRenderer$$.$_positionAxisLine$ = function $$DvtPlotAreaRenderer$$$$_positionAxisLine$$($container$$129_position$$38$$, $availSpace$$78$$, $axis$$37$$) {
  var $axisLine$$ = $axis$$37$$.$getAxisLine$($container$$129_position$$38$$.$_context$);
  $axisLine$$ && ($container$$129_position$$38$$.$addChild$($axisLine$$), $container$$129_position$$38$$ = $axis$$37$$.$getPosition$(), "radial" == $container$$129_position$$38$$ || "tangential" == $container$$129_position$$38$$ ? ($axisLine$$.$setTranslateX$($availSpace$$78$$.x + $availSpace$$78$$.$w$ / 2), $axisLine$$.$setTranslateY$($availSpace$$78$$.y + $availSpace$$78$$.$h$ / 2)) : "top" == $container$$129_position$$38$$ ? ($axisLine$$.$setX1$($availSpace$$78$$.x), $axisLine$$.$setX2$($availSpace$$78$$.x + 
  $availSpace$$78$$.$w$), $axisLine$$.$setY1$($availSpace$$78$$.y), $axisLine$$.$setY2$($availSpace$$78$$.y)) : "bottom" == $container$$129_position$$38$$ ? ($axisLine$$.$setX1$($availSpace$$78$$.x), $axisLine$$.$setX2$($availSpace$$78$$.x + $availSpace$$78$$.$w$), $axisLine$$.$setY1$($availSpace$$78$$.y + $availSpace$$78$$.$h$), $axisLine$$.$setY2$($availSpace$$78$$.y + $availSpace$$78$$.$h$)) : "left" == $container$$129_position$$38$$ ? ($axisLine$$.$setX1$($availSpace$$78$$.x), $axisLine$$.$setX2$($availSpace$$78$$.x), 
  $axisLine$$.$setY1$($availSpace$$78$$.y), $axisLine$$.$setY2$($availSpace$$78$$.y + $availSpace$$78$$.$h$)) : "right" == $container$$129_position$$38$$ && ($axisLine$$.$setX1$($availSpace$$78$$.x + $availSpace$$78$$.$w$), $axisLine$$.$setX2$($availSpace$$78$$.x + $availSpace$$78$$.$w$), $axisLine$$.$setY1$($availSpace$$78$$.y), $axisLine$$.$setY2$($availSpace$$78$$.y + $availSpace$$78$$.$h$)))
};
D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderForegroundObjects$$($chart$$191$$, $container$$130_selected$$30$$, $availSpace$$79$$) {
  window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$191$$, $container$$130_selected$$30$$, $availSpace$$79$$);
  D.$DvtChartTypeUtils$$.$isBar$($chart$$191$$) ? D.$DvtPlotAreaRenderer$$.$_renderBars$($chart$$191$$, $availSpace$$79$$) : D.$DvtChartTypeUtils$$.$isLine$($chart$$191$$) ? D.$DvtPlotAreaRenderer$$.$_renderLines$($chart$$191$$, $container$$130_selected$$30$$, $availSpace$$79$$) : D.$DvtChartTypeUtils$$.$isCombo$($chart$$191$$) ? (D.$DvtPlotAreaRenderer$$.$_renderBars$($chart$$191$$, $availSpace$$79$$), D.$DvtPlotAreaRenderer$$.$_renderLines$($chart$$191$$, $container$$130_selected$$30$$, $availSpace$$79$$)) : 
  D.$DvtChartTypeUtils$$.$isScatter$($chart$$191$$) ? D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$191$$, $container$$130_selected$$30$$, $availSpace$$79$$) : D.$DvtChartTypeUtils$$.$isBubble$($chart$$191$$) && D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$191$$, window.clipGroup, $availSpace$$79$$);
  var $options$$213$$ = $chart$$191$$.$getOptions$();
  if($options$$213$$.xAxis.referenceObjects || $options$$213$$.yAxis.referenceObjects || $options$$213$$.y2Axis.referenceObjects) {
    window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$191$$, $container$$130_selected$$30$$, $availSpace$$79$$), D.$DvtRefObjRenderer$$.$renderForegroundObjects$($chart$$191$$, $availSpace$$79$$)
  }
  $container$$130_selected$$30$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$191$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$191$$, $container$$130_selected$$30$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtPlotAreaRenderer$$$$_renderDataLabel$$($chart$$192_size$$29$$, $container$$131$$, $dataItemBounds$$, $seriesIndex$$66$$, $groupIndex$$38_style$$98_textDim$$6$$, $dataColor$$10$$) {
  if(!$chart$$192_size$$29$$.$getOptions$()._isOverview) {
    var $label$$76_labelString$$7$$ = D.$DvtChartDataUtils$$.$getDataLabel$($chart$$192_size$$29$$, $seriesIndex$$66$$, $groupIndex$$38_style$$98_textDim$$6$$);
    if($label$$76_labelString$$7$$) {
      $label$$76_labelString$$7$$ = new D.$DvtOutputText$$($chart$$192_size$$29$$.$_context$, $label$$76_labelString$$7$$, 0, 0);
      $label$$76_labelString$$7$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      var $position$$39$$ = D.$DvtChartStyleUtils$$.$getDataLabelPosition$($chart$$192_size$$29$$, $seriesIndex$$66$$, $groupIndex$$38_style$$98_textDim$$6$$);
      $groupIndex$$38_style$$98_textDim$$6$$ = D.$DvtChartStyleUtils$$.$getDataLabelStyle$($chart$$192_size$$29$$, $seriesIndex$$66$$, $groupIndex$$38_style$$98_textDim$$6$$, $dataColor$$10$$, $position$$39$$);
      $label$$76_labelString$$7$$.$setCSSStyle$($groupIndex$$38_style$$98_textDim$$6$$);
      $label$$76_labelString$$7$$.$setY$($dataItemBounds$$.y + $dataItemBounds$$.$h$ / 2);
      $label$$76_labelString$$7$$.$setX$($dataItemBounds$$.x + $dataItemBounds$$.$w$ / 2);
      $label$$76_labelString$$7$$.$alignCenter$();
      $label$$76_labelString$$7$$.$alignMiddle$();
      $groupIndex$$38_style$$98_textDim$$6$$ = $label$$76_labelString$$7$$.$measureDimensions$();
      if("center" == $position$$39$$ || "inBottom" == $position$$39$$ || "inTop" == $position$$39$$ || "inRight" == $position$$39$$ || "inLeft" == $position$$39$$) {
        if($dataItemBounds$$.x += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2, $dataItemBounds$$.y += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2, $dataItemBounds$$.$h$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $dataItemBounds$$.$w$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$192_size$$29$$, $seriesIndex$$66$$)) {
          if($groupIndex$$38_style$$98_textDim$$6$$.$w$ > $dataItemBounds$$.$w$ || $groupIndex$$38_style$$98_textDim$$6$$.$h$ > $dataItemBounds$$.$h$) {
            return
          }
          "inRight" == $position$$39$$ ? $label$$76_labelString$$7$$.$setX$($dataItemBounds$$.x + $dataItemBounds$$.$w$ - $groupIndex$$38_style$$98_textDim$$6$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inLeft" == $position$$39$$ ? $label$$76_labelString$$7$$.$setX$($dataItemBounds$$.x + $groupIndex$$38_style$$98_textDim$$6$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inTop" == $position$$39$$ ? $label$$76_labelString$$7$$.$setY$($dataItemBounds$$.y + $groupIndex$$38_style$$98_textDim$$6$$.$h$ / 
          2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $position$$39$$ && $label$$76_labelString$$7$$.$setY$($dataItemBounds$$.y + $dataItemBounds$$.$h$ - $groupIndex$$38_style$$98_textDim$$6$$.$h$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
        }else {
          if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$192_size$$29$$) && ($chart$$192_size$$29$$ = $label$$76_labelString$$7$$.$getOptimalFontSize$($dataItemBounds$$), $label$$76_labelString$$7$$.$setFontSize$($chart$$192_size$$29$$), !D.$DvtTextUtils$$.$fitText$($label$$76_labelString$$7$$, $dataItemBounds$$.$w$, $dataItemBounds$$.$h$, $container$$131$$, D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
            return
          }
        }
      }else {
        "right" == $position$$39$$ ? $label$$76_labelString$$7$$.$setX$($dataItemBounds$$.x + $dataItemBounds$$.$w$ + $groupIndex$$38_style$$98_textDim$$6$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "left" == $position$$39$$ ? $label$$76_labelString$$7$$.$setX$($dataItemBounds$$.x - $groupIndex$$38_style$$98_textDim$$6$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "above" == $position$$39$$ ? $label$$76_labelString$$7$$.$setY$($dataItemBounds$$.y - $groupIndex$$38_style$$98_textDim$$6$$.$h$ / 
        2) : "below" == $position$$39$$ && $label$$76_labelString$$7$$.$setY$($dataItemBounds$$.y + $dataItemBounds$$.$h$ + $groupIndex$$38_style$$98_textDim$$6$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
      }
      $container$$131$$.$addChild$($label$$76_labelString$$7$$)
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$ = function $$DvtPlotAreaRenderer$$$$_renderLabelForDataMarker$$($chart$$193$$, $container$$132$$, $marker$$17$$) {
  var $logicalObject$$11$$ = $chart$$193$$.$getEventManager$().$getLogicalObject$($marker$$17$$), $markerBounds$$ = new D.$DvtRectangle$$($marker$$17$$.$getX$(), $marker$$17$$.$getY$(), $marker$$17$$.getWidth(), $marker$$17$$.getHeight());
  D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$193$$, $container$$132$$, $markerBounds$$, $logicalObject$$11$$.$getSeriesIndex$(), $logicalObject$$11$$.$getGroupIndex$(), $marker$$17$$.$_dataColor$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkers$$($chart$$194$$, $container$$133$$, $availSpace$$80_numMarkers$$1$$) {
  for(var $markers$$5$$ = [], $i$$664_seriesCount$$14$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$194$$), $seriesIndex$$67$$ = 0;$seriesIndex$$67$$ < $i$$664_seriesCount$$14$$;$seriesIndex$$67$$++) {
    var $seriesMarkers$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$194$$, $seriesIndex$$67$$, $availSpace$$80_numMarkers$$1$$), $markers$$5$$ = $markers$$5$$.concat($seriesMarkers$$)
  }
  D.$DvtChartMarkerUtils$$.$sortMarkers$($markers$$5$$);
  $availSpace$$80_numMarkers$$1$$ = $markers$$5$$.length;
  for($i$$664_seriesCount$$14$$ = 0;$i$$664_seriesCount$$14$$ < $availSpace$$80_numMarkers$$1$$;$i$$664_seriesCount$$14$$++) {
    $container$$133$$.$addChild$($markers$$5$$[$i$$664_seriesCount$$14$$]), this.$_renderLabelForDataMarker$($chart$$194$$, $container$$133$$, $markers$$5$$[$i$$664_seriesCount$$14$$])
  }
  $chart$$194$$.$_currentMarkers$.push($markers$$5$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkersForSeries$$($chart$$195$$, $container$$134$$, $markers$$6_seriesIndex$$68$$, $availSpace$$81_numMarkers$$2$$) {
  $markers$$6_seriesIndex$$68$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$195$$, $markers$$6_seriesIndex$$68$$, $availSpace$$81_numMarkers$$2$$);
  $availSpace$$81_numMarkers$$2$$ = $markers$$6_seriesIndex$$68$$.length;
  for(var $i$$665$$ = 0;$i$$665$$ < $availSpace$$81_numMarkers$$2$$;$i$$665$$++) {
    $container$$134$$.$addChild$($markers$$6_seriesIndex$$68$$[$i$$665$$]), this.$_renderLabelForDataMarker$($chart$$195$$, $container$$134$$, $markers$$6_seriesIndex$$68$$[$i$$665$$])
  }
  $chart$$195$$.$_currentMarkers$.push($markers$$6_seriesIndex$$68$$)
};
D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_getMarkersForSeries$$($chart$$196$$, $seriesIndex$$69$$, $availSpace$$82$$) {
  if(!D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$196$$, $seriesIndex$$69$$)) {
    return[]
  }
  var $isTouchDevice$$1$$ = D.$DvtAgent$$.$isTouchDevice$(), $context$$619$$ = $chart$$196$$.$_context$, $xAxis$$1$$ = $chart$$196$$.$xAxis$, $yAxis$$ = $chart$$196$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$196$$, $seriesIndex$$69$$) && ($yAxis$$ = $chart$$196$$.$y2Axis$);
  for(var $options$$214$$ = $chart$$196$$.$getOptions$(), $bHasDatatips$$ = D.$DvtChartTooltipUtils$$.$hasDatatips$($chart$$196$$), $bBubbleChart$$ = D.$DvtChartTypeUtils$$.$isBubble$($chart$$196$$), $isPolar$$2$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$196$$), $markers$$7$$ = [], $groupIndex$$39$$ = 0;$groupIndex$$39$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$196$$);$groupIndex$$39$$++) {
    var $dataValue_hitArea_xCoord$$3_xValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$);
    if(!($dataValue_hitArea_xCoord$$3_xValue$$1$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue_hitArea_xCoord$$3_xValue$$1$$)) && !("multiple" != $options$$214$$.selection && D.$DvtChartDataUtils$$.$getDataItem$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$)._filtered) && D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$)) {
      var $dataValue_hitArea_xCoord$$3_xValue$$1$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$), $cartesian$$1_yCoord$$2_yValue$$1$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$);
      if($bBubbleChart$$) {
        if($isPolar$$2$$ && $cartesian$$1_yCoord$$2_yValue$$1$$ < $yAxis$$.$getViewportMin$()) {
          continue
        }
        $dataValue_hitArea_xCoord$$3_xValue$$1$$ = $isPolar$$2$$ ? $xAxis$$1$$.$getCoordAt$($dataValue_hitArea_xCoord$$3_xValue$$1$$) : $xAxis$$1$$.$getUnboundedCoordAt$($dataValue_hitArea_xCoord$$3_xValue$$1$$);
        $cartesian$$1_yCoord$$2_yValue$$1$$ = $yAxis$$.$getUnboundedCoordAt$($cartesian$$1_yCoord$$2_yValue$$1$$)
      }else {
        $dataValue_hitArea_xCoord$$3_xValue$$1$$ = $xAxis$$1$$.$getCoordAt$($dataValue_hitArea_xCoord$$3_xValue$$1$$), $cartesian$$1_yCoord$$2_yValue$$1$$ = $yAxis$$.$getCoordAt$($cartesian$$1_yCoord$$2_yValue$$1$$)
      }
      if(!($dataValue_hitArea_xCoord$$3_xValue$$1$$ == D.$JSCompiler_alias_NULL$$ || $cartesian$$1_yCoord$$2_yValue$$1$$ == D.$JSCompiler_alias_NULL$$)) {
        if($isPolar$$2$$) {
          $cartesian$$1_yCoord$$2_yValue$$1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian$$1_yCoord$$2_yValue$$1$$, $dataValue_hitArea_xCoord$$3_xValue$$1$$, $availSpace$$82$$), $dataValue_hitArea_xCoord$$3_xValue$$1$$ = $cartesian$$1_yCoord$$2_yValue$$1$$.x, $cartesian$$1_yCoord$$2_yValue$$1$$ = $cartesian$$1_yCoord$$2_yValue$$1$$.y
        }else {
          if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$196$$)) {
            var $bMarkerDisplayed$$1_temp$$2$$ = $dataValue_hitArea_xCoord$$3_xValue$$1$$, $dataValue_hitArea_xCoord$$3_xValue$$1$$ = $cartesian$$1_yCoord$$2_yValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$ = $bMarkerDisplayed$$1_temp$$2$$
          }
        }
        $bMarkerDisplayed$$1_temp$$2$$ = "on" == D.$DvtChartStyleUtils$$.$getMarkerDisplayed$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$);
        if(!$bMarkerDisplayed$$1_temp$$2$$) {
          var $lastIndex$$1_prevValue_shape$$89$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$196$$) - 1, $dataPos$$4_nextIndex$$1_nextValue$$2$$ = $isPolar$$2$$ && 0 < $lastIndex$$1_prevValue_shape$$89$$ && $groupIndex$$39$$ == $lastIndex$$1_prevValue_shape$$89$$ ? 0 : $groupIndex$$39$$ + 1, $lastIndex$$1_prevValue_shape$$89$$ = D.$DvtChartDataUtils$$.getValue($chart$$196$$, $seriesIndex$$69$$, $isPolar$$2$$ && 0 < $lastIndex$$1_prevValue_shape$$89$$ && 0 == $groupIndex$$39$$ ? $lastIndex$$1_prevValue_shape$$89$$ : 
          $groupIndex$$39$$ - 1), $dataPos$$4_nextIndex$$1_nextValue$$2$$ = D.$DvtChartDataUtils$$.getValue($chart$$196$$, $seriesIndex$$69$$, $dataPos$$4_nextIndex$$1_nextValue$$2$$);
          if(($lastIndex$$1_prevValue_shape$$89$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($lastIndex$$1_prevValue_shape$$89$$)) && ($dataPos$$4_nextIndex$$1_nextValue$$2$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataPos$$4_nextIndex$$1_nextValue$$2$$)) && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$196$$)) {
            $bMarkerDisplayed$$1_temp$$2$$ = D.$JSCompiler_alias_TRUE$$
          }
        }
        if(!$options$$214$$._duringAnimation || $bMarkerDisplayed$$1_temp$$2$$ || D.$DvtChartDataUtils$$.$isDataSelected$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$)) {
          var $dataPos$$4_nextIndex$$1_nextValue$$2$$ = new D.$DvtPoint$$($dataValue_hitArea_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$), $lastIndex$$1_prevValue_shape$$89$$ = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$), $borderColor$$34$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$), $borderWidth$$2$$ = $bBubbleChart$$ ? 0.5 : 1, $markerSize$$4$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$196$$, 
          $seriesIndex$$69$$, $groupIndex$$39$$), $halfMarkerSize_marker$$18$$ = $markerSize$$4$$ / 2;
          window.xCoordMinHalf = $dataValue_hitArea_xCoord$$3_xValue$$1$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2;
          window.yCoordMinHalf = $cartesian$$1_yCoord$$2_yValue$$1$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2;
          var $dataValue_hitArea_xCoord$$3_xValue$$1$$ = $dataValue_hitArea_xCoord$$3_xValue$$1$$ - $halfMarkerSize_marker$$18$$, $cartesian$$1_yCoord$$2_yValue$$1$$ = $cartesian$$1_yCoord$$2_yValue$$1$$ - $halfMarkerSize_marker$$18$$, $halfMarkerSize_marker$$18$$ = D.$JSCompiler_alias_NULL$$, $dataColor$$11$$ = $bMarkerDisplayed$$1_temp$$2$$ ? D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$) : D.$DvtChartStyleUtils$$.$getColor$($chart$$196$$, $seriesIndex$$69$$, 
          $groupIndex$$39$$), $hoverColor$$6$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$11$$), $innerColor$$8$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$196$$), $outerColor$$8$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$196$$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$196$$) : $dataColor$$11$$;
          $bMarkerDisplayed$$1_temp$$2$$ ? ($halfMarkerSize_marker$$18$$ = new D.$DvtMarker$$($context$$619$$, $lastIndex$$1_prevValue_shape$$89$$, "alta", $dataValue_hitArea_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$, $markerSize$$4$$, $markerSize$$4$$), $chart$$196$$.$isSelectionSupported$() && $halfMarkerSize_marker$$18$$.setCursor("pointer"), $halfMarkerSize_marker$$18$$.$setFill$(D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$)), 
          $borderColor$$34$$ && $halfMarkerSize_marker$$18$$.$setSolidStroke$($borderColor$$34$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$2$$), $halfMarkerSize_marker$$18$$.$setDataColor$($dataColor$$11$$), $halfMarkerSize_marker$$18$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$6$$, 1, 2)), $halfMarkerSize_marker$$18$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$8$$, 1, 1.5), new D.$DvtSolidStroke$$($outerColor$$8$$, 1, 4.5)), $halfMarkerSize_marker$$18$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$8$$, 
          1, 1.5), new D.$DvtSolidStroke$$($hoverColor$$6$$, 1, 4.5)), $isTouchDevice$$1$$ && $markerSize$$4$$ < D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && ($dataValue_hitArea_xCoord$$3_xValue$$1$$ = new D.$DvtRect$$($context$$619$$, $dataValue_hitArea_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea_xCoord$$3_xValue$$1$$), 
          $halfMarkerSize_marker$$18$$.$addChild$($dataValue_hitArea_xCoord$$3_xValue$$1$$))) : ($chart$$196$$.$isSelectionSupported$() ? ($halfMarkerSize_marker$$18$$ = new D.$DvtChartLineMarker$$($context$$619$$, $lastIndex$$1_prevValue_shape$$89$$, $dataValue_hitArea_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$, $markerSize$$4$$), $halfMarkerSize_marker$$18$$.setCursor("pointer"), $isTouchDevice$$1$$ && ($dataValue_hitArea_xCoord$$3_xValue$$1$$ = new D.$DvtRect$$($context$$619$$, 
          window.xCoordMinHalf, window.yCoordMinHalf, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea_xCoord$$3_xValue$$1$$), $halfMarkerSize_marker$$18$$.$addChild$($dataValue_hitArea_xCoord$$3_xValue$$1$$))) : ($isTouchDevice$$1$$ && ($dataValue_hitArea_xCoord$$3_xValue$$1$$ = window.xCoordMinHalf, $cartesian$$1_yCoord$$2_yValue$$1$$ = window.yCoordMinHalf, $markerSize$$4$$ = 
          D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), $bHasDatatips$$ && ($halfMarkerSize_marker$$18$$ = new D.$DvtMarker$$($context$$619$$, "square", D.$JSCompiler_alias_NULL$$, $dataValue_hitArea_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$, $markerSize$$4$$, $markerSize$$4$$))), $halfMarkerSize_marker$$18$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($halfMarkerSize_marker$$18$$), $halfMarkerSize_marker$$18$$.$setDataColor$($dataColor$$11$$, 
          $innerColor$$8$$, $outerColor$$8$$)));
          $halfMarkerSize_marker$$18$$ != D.$JSCompiler_alias_NULL$$ && ($markers$$7$$.push($halfMarkerSize_marker$$18$$), (0,D.$DvtChartObjPeer$associate$$)($halfMarkerSize_marker$$18$$, $chart$$196$$, $seriesIndex$$69$$, $groupIndex$$39$$, $dataPos$$4_nextIndex$$1_nextValue$$2$$))
        }
      }
    }
  }
  return $markers$$7$$
};
D.$DvtPlotAreaRenderer$$.$_renderBars$ = function $$DvtPlotAreaRenderer$$$$_renderBars$$($chart$$197$$, $availSpace$$83$$) {
  for(var $container$$135$$ = window.clipGroup, $context$$620$$ = $chart$$197$$.$_context$, $options$$215$$ = $chart$$197$$.$getOptions$(), $xAxis$$2$$ = $chart$$197$$.$xAxis$, $bHoriz$$8$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$197$$), $bPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$197$$), $bStacked$$1$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$197$$), $bPixelSpacing$$ = "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$197$$), $barSeries$$ = [], $groupCount$$2_seriesCount$$15$$ = 
  D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$197$$), $seriesIndex$$70$$ = 0;$seriesIndex$$70$$ < $groupCount$$2_seriesCount$$15$$;$seriesIndex$$70$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$197$$, $seriesIndex$$70$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$197$$, $seriesIndex$$70$$) && $barSeries$$.push($seriesIndex$$70$$)
  }
  D.$DvtAgent$$.$isRightToLeft$($context$$620$$) && (!$bStacked$$1$$ && !$bHoriz$$8$$) && $barSeries$$.reverse();
  for(var $groupCount$$2_seriesCount$$15$$ = $options$$215$$.groups ? $options$$215$$.groups.length : 0, $barSeriesCount$$2$$ = $barSeries$$.length, $barWidth$$5$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$197$$, $barSeriesCount$$2$$, $xAxis$$2$$), $offset$$32$$ = D.$DvtChartStyleUtils$$.$getBarOffset$($chart$$197$$, $barWidth$$5$$, $barSeriesCount$$2$$), $y2Offset$$ = D.$DvtChartStyleUtils$$.$getY2BarOffset$($chart$$197$$, $barWidth$$5$$), $barSeriesIndex$$ = 0;$barSeriesIndex$$ < $barSeriesCount$$2$$;$barSeriesIndex$$++) {
    for(var $seriesIndex$$70$$ = $barSeries$$[$barSeriesIndex$$], $bY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$197$$, $seriesIndex$$70$$), $yAxis$$1$$ = $bY2Series$$ ? $chart$$197$$.$y2Axis$ : $chart$$197$$.$yAxis$, $groupIndex$$40$$ = 0;$groupIndex$$40$$ < $groupCount$$2_seriesCount$$15$$;$groupIndex$$40$$++) {
      var $dataItem$$27_markers$$8$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$197$$, $seriesIndex$$70$$, $groupIndex$$40$$), $shape$$90_xValue$$2_yCoord$$3$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$197$$, $seriesIndex$$70$$, $groupIndex$$40$$), $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ = D.$DvtChartDataUtils$$.getValue($chart$$197$$, $seriesIndex$$70$$, $groupIndex$$40$$), $dataPos$$5_totalYValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$197$$, $seriesIndex$$70$$, 
      $groupIndex$$40$$);
      if(!($baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$))) {
        var $outerColor$$9_x1$$34_xCoord$$4$$ = $xAxis$$2$$.$getUnboundedCoordAt$($shape$$90_xValue$$2_yCoord$$3$$, D.$JSCompiler_alias_FALSE$$), $shape$$90_xValue$$2_yCoord$$3$$ = $yAxis$$1$$.$getBoundedCoordAt$($dataPos$$5_totalYValue$$), $axisCoord$$3_fill$$50$$ = $yAxis$$1$$.$getBaselineCoord$(), $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ = $bStacked$$1$$ ? $yAxis$$1$$.$getBoundedCoordAt$($dataPos$$5_totalYValue$$ - $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$) : $axisCoord$$3_fill$$50$$;
        if(!($shape$$90_xValue$$2_yCoord$$3$$ == $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ && $yAxis$$1$$.$getCoordAt$($dataPos$$5_totalYValue$$) === D.$JSCompiler_alias_NULL$$)) {
          var $bInvisible_innerColor$$9$$ = D.$JSCompiler_alias_FALSE$$;
          1 > window.Math.abs($shape$$90_xValue$$2_yCoord$$3$$ - $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$) && ($bInvisible_innerColor$$9$$ = D.$JSCompiler_alias_TRUE$$, $shape$$90_xValue$$2_yCoord$$3$$ > $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ ? $shape$$90_xValue$$2_yCoord$$3$$ = $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ + 3 : $shape$$90_xValue$$2_yCoord$$3$$ <= $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ && ($shape$$90_xValue$$2_yCoord$$3$$ = $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ - 
          3));
          var $outerColor$$9_x1$$34_xCoord$$4$$ = $bY2Series$$ ? $outerColor$$9_x1$$34_xCoord$$4$$ + $offset$$32$$ + $y2Offset$$ : $outerColor$$9_x1$$34_xCoord$$4$$ + $offset$$32$$, $x2$$30$$ = $outerColor$$9_x1$$34_xCoord$$4$$ + $barWidth$$5$$, $dataPos$$5_totalYValue$$ = $bPolar$$ ? D.$DvtPlotAreaRenderer$$.$polarToCartesian$($shape$$90_xValue$$2_yCoord$$3$$, ($outerColor$$9_x1$$34_xCoord$$4$$ + $x2$$30$$) / 2, $availSpace$$83$$) : $bHoriz$$8$$ ? new D.$DvtPoint$$($shape$$90_xValue$$2_yCoord$$3$$, 
          ($outerColor$$9_x1$$34_xCoord$$4$$ + $x2$$30$$) / 2) : new D.$DvtPoint$$(($outerColor$$9_x1$$34_xCoord$$4$$ + $x2$$30$$) / 2, $shape$$90_xValue$$2_yCoord$$3$$), $shape$$90_xValue$$2_yCoord$$3$$ = $bPolar$$ ? new D.$DvtChartPolarBar$$($context$$620$$, $axisCoord$$3_fill$$50$$, $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$, $shape$$90_xValue$$2_yCoord$$3$$, $outerColor$$9_x1$$34_xCoord$$4$$, $x2$$30$$, $availSpace$$83$$) : new D.$DvtChartBar$$($context$$620$$, $bHoriz$$8$$, $bStacked$$1$$, 
          $axisCoord$$3_fill$$50$$, $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$, $shape$$90_xValue$$2_yCoord$$3$$, $outerColor$$9_x1$$34_xCoord$$4$$, $x2$$30$$);
          $container$$135$$.$addChild$($shape$$90_xValue$$2_yCoord$$3$$);
          $chart$$197$$.$isSelectionSupported$() && $shape$$90_xValue$$2_yCoord$$3$$.setCursor("pointer");
          var $stroke$$79$$;
          $bInvisible_innerColor$$9$$ ? $axisCoord$$3_fill$$50$$ = (0,D.$DvtSolidFill$invisibleFill$$)() : ($axisCoord$$3_fill$$50$$ = D.$DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$197$$, $seriesIndex$$70$$, $groupIndex$$40$$, $bHoriz$$8$$, $barWidth$$5$$), ($baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$197$$, $seriesIndex$$70$$, $groupIndex$$40$$)) && ($stroke$$79$$ = new D.$DvtSolidStroke$$($baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$)));
          $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$197$$, $seriesIndex$$70$$, $groupIndex$$40$$);
          $bInvisible_innerColor$$9$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$197$$);
          $outerColor$$9_x1$$34_xCoord$$4$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$197$$);
          $shape$$90_xValue$$2_yCoord$$3$$.$setStyleProperties$($axisCoord$$3_fill$$50$$, $stroke$$79$$, $baseCoord_borderColor$$35_dataColor$$12_yValue$$2$$, $bInvisible_innerColor$$9$$, $outerColor$$9_x1$$34_xCoord$$4$$);
          $bPixelSpacing$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($shape$$90_xValue$$2_yCoord$$3$$);
          D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$197$$, "outsideBarEdge" == ($dataItem$$27_markers$$8$$.labelPosition ? $dataItem$$27_markers$$8$$.labelPosition : $options$$215$$.styleDefaults.dataLabelPosition) ? $container$$135$$ : $shape$$90_xValue$$2_yCoord$$3$$, $shape$$90_xValue$$2_yCoord$$3$$.$getBoundingBox$(), $seriesIndex$$70$$, $groupIndex$$40$$, D.$DvtChartStyleUtils$$.$getColor$($chart$$197$$, $seriesIndex$$70$$, $groupIndex$$40$$));
          (0,D.$DvtChartObjPeer$associate$$)($shape$$90_xValue$$2_yCoord$$3$$, $chart$$197$$, $seriesIndex$$70$$, $groupIndex$$40$$, $dataPos$$5_totalYValue$$);
          $dataItem$$27_markers$$8$$ = [];
          $dataItem$$27_markers$$8$$.push($shape$$90_xValue$$2_yCoord$$3$$);
          $chart$$197$$.$_currentMarkers$.push($dataItem$$27_markers$$8$$)
        }
      }
    }
    !$bStacked$$1$$ && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$197$$) && ($offset$$32$$ += $barWidth$$5$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLines$ = function $$DvtPlotAreaRenderer$$$$_renderLines$$($chart$$198$$, $container$$136$$, $availSpace$$84$$) {
  for(var $clipGroup$$1$$ = window.clipGroup, $lineSeries$$ = [], $lineIndex$$1_seriesCount$$16$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$198$$), $seriesIndex$$71$$ = 0;$seriesIndex$$71$$ < $lineIndex$$1_seriesCount$$16$$;$seriesIndex$$71$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$198$$, $seriesIndex$$71$$) && "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$198$$, $seriesIndex$$71$$) && $lineSeries$$.push($seriesIndex$$71$$)
  }
  for($lineIndex$$1_seriesCount$$16$$ = 0;$lineIndex$$1_seriesCount$$16$$ < $lineSeries$$.length;$lineIndex$$1_seriesCount$$16$$++) {
    var $seriesIndex$$71$$ = $lineSeries$$[$lineIndex$$1_seriesCount$$16$$], $color$$78_i$$666_stroke$$80$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$198$$, $seriesIndex$$71$$), $lineWidth$$6$$ = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$198$$, $seriesIndex$$71$$), $coords$$14_lineStyle$$2_lines$$3$$ = (0,D.$DvtStroke$convertTypeString$$)(D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$198$$, $seriesIndex$$71$$)), $color$$78_i$$666_stroke$$80$$ = new D.$DvtSolidStroke$$($color$$78_i$$666_stroke$$80$$, 
    1, $lineWidth$$6$$);
    $color$$78_i$$666_stroke$$80$$.$setStyle$($coords$$14_lineStyle$$2_lines$$3$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$198$$) || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$198$$, $seriesIndex$$71$$);
    $coords$$14_lineStyle$$2_lines$$3$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$198$$, $seriesIndex$$71$$);
    $coords$$14_lineStyle$$2_lines$$3$$ = D.$DvtPlotAreaRenderer$$.$getLinesFromCoords$($chart$$198$$, $coords$$14_lineStyle$$2_lines$$3$$, $color$$78_i$$666_stroke$$80$$, $availSpace$$84$$);
    for($color$$78_i$$666_stroke$$80$$ = 0;$color$$78_i$$666_stroke$$80$$ < $coords$$14_lineStyle$$2_lines$$3$$.length;$color$$78_i$$666_stroke$$80$$++) {
      $clipGroup$$1$$.$addChild$($coords$$14_lineStyle$$2_lines$$3$$[$color$$78_i$$666_stroke$$80$$]), (0,D.$DvtChartObjPeer$associate$$)($coords$$14_lineStyle$$2_lines$$3$$[$color$$78_i$$666_stroke$$80$$], $chart$$198$$, $seriesIndex$$71$$)
    }
  }
  for($lineIndex$$1_seriesCount$$16$$ = 0;$lineIndex$$1_seriesCount$$16$$ < $lineSeries$$.length;$lineIndex$$1_seriesCount$$16$$++) {
    D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$198$$, $container$$136$$, $lineSeries$$[$lineIndex$$1_seriesCount$$16$$], $availSpace$$84$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderAreas$ = function $$DvtPlotAreaRenderer$$$$_renderAreas$$($chart$$199$$, $container$$137$$, $availSpace$$85$$) {
  for(var $bStacked$$2$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$199$$), $areaSeries$$ = [], $group$$28_seriesCount$$17$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$199$$), $seriesIndex$$72$$ = 0;$seriesIndex$$72$$ < $group$$28_seriesCount$$17$$;$seriesIndex$$72$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$199$$, $seriesIndex$$72$$) && "area" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$199$$, $seriesIndex$$72$$) && $areaSeries$$.push($seriesIndex$$72$$)
  }
  $bStacked$$2$$ && $areaSeries$$.reverse();
  for(var $group$$28_seriesCount$$17$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$199$$, $container$$137$$, $availSpace$$85$$), $areaIndex$$1$$ = 0;$areaIndex$$1$$ < $areaSeries$$.length;$areaIndex$$1$$++) {
    $seriesIndex$$72$$ = $areaSeries$$[$areaIndex$$1$$];
    D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$199$$, $seriesIndex$$72$$);
    for(var $areas$$11_baselineCoord$$10$$ = $chart$$199$$.$yAxis$ ? $chart$$199$$.$yAxis$.$getBaselineCoord$() : $chart$$199$$.$y2Axis$.$getBaselineCoord$(), $coords$$15_i$$667$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$199$$, $seriesIndex$$72$$), $fill$$51$$ = D.$DvtChartSeriesEffectUtils$$.$getAreaFill$($chart$$199$$, $seriesIndex$$72$$), $borderColor$$36_stroke$$81$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$199$$, $seriesIndex$$72$$), $borderColor$$36_stroke$$81$$ = 
    $borderColor$$36_stroke$$81$$ ? new D.$DvtSolidStroke$$($borderColor$$36_stroke$$81$$) : D.$JSCompiler_alias_NULL$$, $areas$$11_baselineCoord$$10$$ = D.$DvtPlotAreaRenderer$$.$getAreasFromCoords$($chart$$199$$, $coords$$15_i$$667$$, $fill$$51$$, $borderColor$$36_stroke$$81$$, $areas$$11_baselineCoord$$10$$, $availSpace$$85$$), $coords$$15_i$$667$$ = 0;$coords$$15_i$$667$$ < $areas$$11_baselineCoord$$10$$.length;$coords$$15_i$$667$$++) {
      $group$$28_seriesCount$$17$$.$addChild$($areas$$11_baselineCoord$$10$$[$coords$$15_i$$667$$]), $chart$$199$$.$_currentAreas$.push($areas$$11_baselineCoord$$10$$[$coords$$15_i$$667$$]), (0,D.$DvtChartObjPeer$associate$$)($areas$$11_baselineCoord$$10$$[$coords$$15_i$$667$$], $chart$$199$$, $seriesIndex$$72$$)
    }
    $bStacked$$2$$ || (D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$199$$, $container$$137$$, $seriesIndex$$72$$, $availSpace$$85$$), $areaIndex$$1$$ + 1 < $areaSeries$$.length && ($group$$28_seriesCount$$17$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$199$$, $container$$137$$, $availSpace$$85$$)))
  }
  if($bStacked$$2$$) {
    for($areaIndex$$1$$ = 0;$areaIndex$$1$$ < $areaSeries$$.length;$areaIndex$$1$$++) {
      D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$199$$, $container$$137$$, $areaSeries$$[$areaIndex$$1$$], $availSpace$$85$$)
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtPlotAreaRenderer$$$$_filterPointsForSeries$$($chart$$200$$, $seriesIndex$$73$$) {
  var $maxNumPts_setSize$$ = $chart$$200$$.$_plotAreaSpace$.$w$, $seriesItems$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$200$$, $seriesIndex$$73$$).items, $maxNumPts_setSize$$ = window.Math.round(2 * ($seriesItems$$1$$.length / (($chart$$200$$.$xAxis$.$getDataMax$() - $chart$$200$$.$xAxis$.$getDataMin$()) / ($chart$$200$$.$xAxis$.$getViewportMax$() - $chart$$200$$.$xAxis$.$getViewportMin$()))) / $maxNumPts_setSize$$);
  if(2 >= $maxNumPts_setSize$$) {
    for(var $i$$668$$ = 0;$i$$668$$ < $seriesItems$$1$$.length;$i$$668$$++) {
      ($dataItem$$28$$ = $seriesItems$$1$$[$i$$668$$]) && ($dataItem$$28$$._filtered = D.$JSCompiler_alias_FALSE$$)
    }
  }else {
    for(var $maxIndex$$, $maxValue$$17$$, $minIndex$$, $minValue$$15$$, $dataItem$$28$$, $dataValue$$1$$, $i$$668$$ = 0;$i$$668$$ < $seriesItems$$1$$.length;$i$$668$$ += $maxNumPts_setSize$$) {
      $maxIndex$$ = -1;
      $maxValue$$17$$ = -window.Infinity;
      $minIndex$$ = -1;
      $minValue$$15$$ = window.Infinity;
      for(var $j$$92$$ = $i$$668$$;$j$$92$$ < window.Math.min($i$$668$$ + $maxNumPts_setSize$$, $seriesItems$$1$$.length);$j$$92$$++) {
        $dataValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$200$$, $seriesIndex$$73$$, $j$$92$$), $dataItem$$28$$ = $seriesItems$$1$$[$j$$92$$], $dataValue$$1$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$28$$ == D.$JSCompiler_alias_NULL$$ || ($dataValue$$1$$ > $maxValue$$17$$ && ($maxIndex$$ = $j$$92$$, $maxValue$$17$$ = $dataValue$$1$$), $dataValue$$1$$ < $minValue$$15$$ && ($minIndex$$ = $j$$92$$, $minValue$$15$$ = $dataValue$$1$$), $dataItem$$28$$._filtered = D.$JSCompiler_alias_TRUE$$)
      }
      for($j$$92$$ = $i$$668$$;$j$$92$$ < window.Math.min($i$$668$$ + $maxNumPts_setSize$$, $seriesItems$$1$$.length);$j$$92$$++) {
        if($dataItem$$28$$ = $seriesItems$$1$$[$j$$92$$], $dataItem$$28$$ != D.$JSCompiler_alias_NULL$$ && ($j$$92$$ == $maxIndex$$ || $j$$92$$ == $minIndex$$)) {
          $dataItem$$28$$._filtered = D.$JSCompiler_alias_FALSE$$
        }
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtPlotAreaRenderer$$$$_getCoordsForSeries$$($chart$$201$$, $seriesIndex$$74$$) {
  var $xAxis$$3$$ = $chart$$201$$.$xAxis$, $yAxis$$2$$ = $chart$$201$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$201$$, $seriesIndex$$74$$) && ($yAxis$$2$$ = $chart$$201$$.$y2Axis$);
  for(var $coords$$16$$ = [], $groupIndex$$41$$ = 0;$groupIndex$$41$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$201$$);$groupIndex$$41$$++) {
    var $dataValue$$2_yCoord$$4_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$201$$, $seriesIndex$$74$$, $groupIndex$$41$$);
    if($dataValue$$2_yCoord$$4_yValue$$3$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue$$2_yCoord$$4_yValue$$3$$)) {
      $coords$$16$$.push(D.$JSCompiler_alias_NULL$$)
    }else {
      if(!D.$DvtChartDataUtils$$.$getDataItem$($chart$$201$$, $seriesIndex$$74$$, $groupIndex$$41$$)._filtered) {
        var $xCoord$$5_xValue$$3$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$201$$, $seriesIndex$$74$$, $groupIndex$$41$$), $dataValue$$2_yCoord$$4_yValue$$3$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$201$$, $seriesIndex$$74$$, $groupIndex$$41$$);
        D.$DvtChartTypeUtils$$.$isPolar$($chart$$201$$) && ($dataValue$$2_yCoord$$4_yValue$$3$$ = window.Math.max($dataValue$$2_yCoord$$4_yValue$$3$$, $yAxis$$2$$.$getViewportMin$()));
        $xCoord$$5_xValue$$3$$ = $xAxis$$3$$.$getUnboundedCoordAt$($xCoord$$5_xValue$$3$$);
        $dataValue$$2_yCoord$$4_yValue$$3$$ = $yAxis$$2$$.$getUnboundedCoordAt$($dataValue$$2_yCoord$$4_yValue$$3$$);
        $coords$$16$$.push(new D.$DvtPoint$$($xCoord$$5_xValue$$3$$, $dataValue$$2_yCoord$$4_yValue$$3$$))
      }
    }
  }
  return $coords$$16$$
};
D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$ = function $$DvtPlotAreaRenderer$$$$getPointsFromCoords$$($chart$$202_lastPoints$$, $coords$$17$$, $availSpace$$87$$) {
  var $isPolar$$3$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$202_lastPoints$$), $pointsArrays$$1$$ = [], $points$$69$$ = [];
  $pointsArrays$$1$$.push($points$$69$$);
  for(var $cartesian$$2_xCoord$$6$$, $yCoord$$5$$, $i$$669$$ = 0;$i$$669$$ < $coords$$17$$.length;$i$$669$$++) {
    $coords$$17$$[$i$$669$$] == D.$JSCompiler_alias_NULL$$ ? D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$202_lastPoints$$) || ($points$$69$$ = [], $pointsArrays$$1$$.push($points$$69$$)) : ($cartesian$$2_xCoord$$6$$ = $coords$$17$$[$i$$669$$].x, $yCoord$$5$$ = $coords$$17$$[$i$$669$$].y, $isPolar$$3$$ ? ($cartesian$$2_xCoord$$6$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($yCoord$$5$$, $cartesian$$2_xCoord$$6$$, $availSpace$$87$$), $points$$69$$.push($cartesian$$2_xCoord$$6$$.x, $cartesian$$2_xCoord$$6$$.y)) : 
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$202_lastPoints$$) ? $points$$69$$.push($yCoord$$5$$, $cartesian$$2_xCoord$$6$$) : $points$$69$$.push($cartesian$$2_xCoord$$6$$, $yCoord$$5$$))
  }
  $isPolar$$3$$ && 1 < $pointsArrays$$1$$.length && ($chart$$202_lastPoints$$ = $pointsArrays$$1$$.pop(), $pointsArrays$$1$$[0] = $chart$$202_lastPoints$$.concat($pointsArrays$$1$$[0]));
  return $pointsArrays$$1$$
};
D.$DvtPlotAreaRenderer$$.$getLinesFromCoords$ = function $$DvtPlotAreaRenderer$$$$getLinesFromCoords$$($chart$$203$$, $coords$$18_pointsArrays$$2$$, $stroke$$82$$, $availSpace$$88_lines$$4$$) {
  var $context$$621$$ = $chart$$203$$.$_context$;
  $coords$$18_pointsArrays$$2$$ = D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$($chart$$203$$, $coords$$18_pointsArrays$$2$$, $availSpace$$88_lines$$4$$);
  $availSpace$$88_lines$$4$$ = [];
  for(var $i$$670$$ = 0;$i$$670$$ < $coords$$18_pointsArrays$$2$$.length;$i$$670$$++) {
    var $line$$12_points$$70$$ = $coords$$18_pointsArrays$$2$$[$i$$670$$];
    $line$$12_points$$70$$ && 1 < $line$$12_points$$70$$.length && (D.$DvtChartTypeUtils$$.$isPolar$($chart$$203$$) && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$203$$) && $line$$12_points$$70$$.length == 2 * D.$DvtChartDataUtils$$.$getGroupCount$($chart$$203$$) ? ($line$$12_points$$70$$ = new D.$DvtPolygon$$($context$$621$$, $line$$12_points$$70$$), $line$$12_points$$70$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $line$$12_points$$70$$ = new D.$DvtPolyline$$($context$$621$$, $line$$12_points$$70$$), 
    $line$$12_points$$70$$.$setStroke$($stroke$$82$$), $availSpace$$88_lines$$4$$.push($line$$12_points$$70$$))
  }
  return $availSpace$$88_lines$$4$$
};
D.$DvtPlotAreaRenderer$$.$getAreasFromCoords$ = function $$DvtPlotAreaRenderer$$$$getAreasFromCoords$$($chart$$204$$, $coords$$19_pointsArrays$$3$$, $fill$$52$$, $stroke$$83$$, $baselineCoord$$11$$, $availSpace$$89$$) {
  var $context$$622$$ = $chart$$204$$.$_context$;
  $coords$$19_pointsArrays$$3$$ = D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$($chart$$204$$, $coords$$19_pointsArrays$$3$$, $availSpace$$89$$);
  for(var $areas$$12$$ = [], $i$$671$$ = 0;$i$$671$$ < $coords$$19_pointsArrays$$3$$.length;$i$$671$$++) {
    var $points$$71_polygon$$3$$ = $coords$$19_pointsArrays$$3$$[$i$$671$$];
    $points$$71_polygon$$3$$ && 2 < $points$$71_polygon$$3$$.length && (D.$DvtChartTypeUtils$$.$isPolar$($chart$$204$$) ? $points$$71_polygon$$3$$.length < 2 * D.$DvtChartDataUtils$$.$getGroupCount$($chart$$204$$) && $points$$71_polygon$$3$$.push($availSpace$$89$$.x + $availSpace$$89$$.$w$ / 2, $availSpace$$89$$.y + $availSpace$$89$$.$h$ / 2) : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$204$$) ? ($points$$71_polygon$$3$$.push($baselineCoord$$11$$, $points$$71_polygon$$3$$[$points$$71_polygon$$3$$.length - 
    1]), $points$$71_polygon$$3$$.push($baselineCoord$$11$$, $points$$71_polygon$$3$$[1])) : ($points$$71_polygon$$3$$.push($points$$71_polygon$$3$$[$points$$71_polygon$$3$$.length - 2], $baselineCoord$$11$$), $points$$71_polygon$$3$$.push($points$$71_polygon$$3$$[0], $baselineCoord$$11$$)), $points$$71_polygon$$3$$ = new D.$DvtPolygon$$($context$$622$$, $points$$71_polygon$$3$$), $points$$71_polygon$$3$$.$setFill$($fill$$52$$), $stroke$$83$$ && $points$$71_polygon$$3$$.$setStroke$($stroke$$83$$), 
    $areas$$12$$.push($points$$71_polygon$$3$$))
  }
  return $areas$$12$$
};
D.$DvtPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtPlotAreaRenderer$$$$createClippedGroup$$($chart$$205_obj$$inline_6109_r$$inline_6114$$, $clip$$2_container$$138$$, $availSpace$$90_cy$$39$$) {
  var $clipGroup$$2$$ = new D.$DvtContainer$$($clip$$2_container$$138$$.$_context$);
  $clip$$2_container$$138$$.$addChild$($clipGroup$$2$$);
  $clip$$2_container$$138$$ = new D.$DvtClipPath$$($chart$$205_obj$$inline_6109_r$$inline_6114$$.getId());
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$205_obj$$inline_6109_r$$inline_6114$$)) {
    var $cx$$38_points$$72$$ = $availSpace$$90_cy$$39$$.x + $availSpace$$90_cy$$39$$.$w$ / 2;
    $availSpace$$90_cy$$39$$ = $availSpace$$90_cy$$39$$.y + $availSpace$$90_cy$$39$$.$h$ / 2;
    if(D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$205_obj$$inline_6109_r$$inline_6114$$)) {
      $cx$$38_points$$72$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($cx$$38_points$$72$$, $availSpace$$90_cy$$39$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$205_obj$$inline_6109_r$$inline_6114$$), $chart$$205_obj$$inline_6109_r$$inline_6114$$.$getRadius$()), $chart$$205_obj$$inline_6109_r$$inline_6114$$ = {type:3}, $chart$$205_obj$$inline_6109_r$$inline_6114$$.$points$ = $cx$$38_points$$72$$, $chart$$205_obj$$inline_6109_r$$inline_6114$$ && $clip$$2_container$$138$$.$_regions$.push($chart$$205_obj$$inline_6109_r$$inline_6114$$)
    }else {
      $chart$$205_obj$$inline_6109_r$$inline_6114$$ = $chart$$205_obj$$inline_6109_r$$inline_6114$$.$getRadius$();
      var $obj$$inline_6115$$ = {type:5};
      $obj$$inline_6115$$.$cx$ = $cx$$38_points$$72$$;
      $obj$$inline_6115$$.$cy$ = $availSpace$$90_cy$$39$$;
      $obj$$inline_6115$$.$r$ = $chart$$205_obj$$inline_6109_r$$inline_6114$$;
      $obj$$inline_6115$$ && $clip$$2_container$$138$$.$_regions$.push($obj$$inline_6115$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clip$$2_container$$138$$, $availSpace$$90_cy$$39$$.x, $availSpace$$90_cy$$39$$.y, $availSpace$$90_cy$$39$$.$w$, $availSpace$$90_cy$$39$$.$h$)
  }
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($clipGroup$$2$$, $clip$$2_container$$138$$);
  return $clipGroup$$2$$
};
D.$DvtPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtPlotAreaRenderer$$$$polarToCartesian$$($r$$70$$, $theta$$2$$, $availSpace$$91$$) {
  window.x = $availSpace$$91$$.x + $availSpace$$91$$.$w$ / 2 + $r$$70$$ * window.Math.sin($theta$$2$$);
  window.y = $availSpace$$91$$.y + $availSpace$$91$$.$h$ / 2 - $r$$70$$ * window.Math.cos($theta$$2$$);
  return new D.$DvtPoint$$(window.x, window.y)
};
D.$DvtFunnelRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelRenderer$$, D.$DvtObj$$, "DvtFunnelRenderer");
D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 60;
D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ = 1 / 360;
D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = 0.25;
D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ = 0;
D.$DvtFunnelRenderer$$.$render$ = function $$DvtFunnelRenderer$$$$render$$($chart$$224$$, $container$$153_selected$$31$$, $availSpace$$107$$) {
  var $funnelContainer$$ = new D.$DvtContainer$$($chart$$224$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($funnelContainer$$, $availSpace$$107$$.x, $availSpace$$107$$.y);
  $container$$153_selected$$31$$.$addChild$($funnelContainer$$);
  $chart$$224$$.$_funnelContainer$ = $funnelContainer$$;
  var $bbox$$11$$;
  if("horizontal" == $chart$$224$$.$getOptions$().orientation) {
    $bbox$$11$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$107$$.$w$, $availSpace$$107$$.$h$)
  }else {
    var $rotationMatrix$$2$$ = new D.$DvtMatrix$$;
    D.$DvtAgent$$.$isRightToLeft$($chart$$224$$.$_context$) ? ($rotationMatrix$$2$$.translate($availSpace$$107$$.y - $availSpace$$107$$.$h$ / 2, $availSpace$$107$$.y - $availSpace$$107$$.$w$ / 2), $rotationMatrix$$2$$.rotate(-window.Math.PI / 2), $rotationMatrix$$2$$.translate($availSpace$$107$$.x + $availSpace$$107$$.$w$ / 2, $availSpace$$107$$.x + $availSpace$$107$$.$h$ / 2)) : ($rotationMatrix$$2$$.translate(-$availSpace$$107$$.$h$ / 2, -$availSpace$$107$$.$w$ / 2), $rotationMatrix$$2$$.rotate(window.Math.PI / 
    2), $rotationMatrix$$2$$.translate($availSpace$$107$$.$w$ / 2, $availSpace$$107$$.y + $availSpace$$107$$.$h$ / 2));
    $bbox$$11$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$107$$.$h$, $availSpace$$107$$.$w$);
    $funnelContainer$$.$setMatrix$($rotationMatrix$$2$$)
  }
  D.$DvtFunnelRenderer$$.$_renderFunnelSlices$($chart$$224$$, $funnelContainer$$, $bbox$$11$$) || D.$DvtChartRenderer$$.$renderEmptyText$($chart$$224$$, $container$$153_selected$$31$$, $availSpace$$107$$);
  $container$$153_selected$$31$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$224$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$224$$, $container$$153_selected$$31$$)
};
D.$DvtFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtFunnelRenderer$$$$_renderFunnelSlices$$($chart$$225$$, $container$$154$$, $availSpace$$108$$) {
  for(var $options$$227_totalValue$$1$$ = $chart$$225$$.$getOptions$(), $seriesCount$$18_slice$$25_targetValue$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$225$$), $gapSize$$ = "on" == $options$$227_totalValue$$1$$.styleDefaults.threeDEffect ? D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ * $availSpace$$108$$.$w$ : D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ * $availSpace$$108$$.$w$, $gapSize$$ = "on" == $options$$227_totalValue$$1$$.styleDefaults.funnelSliceGaps ? window.Math.min(D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * 
  $availSpace$$108$$.$w$ / ($seriesCount$$18_slice$$25_targetValue$$ - 1), $gapSize$$) : D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ * $availSpace$$108$$.$w$, $numDrawnSeries$$2$$ = $options$$227_totalValue$$1$$ = 0, $cumulativeValue$$ = 0, $seriesIndex$$75$$ = 0;$seriesIndex$$75$$ < $seriesCount$$18_slice$$25_targetValue$$;$seriesIndex$$75$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$225$$, $seriesIndex$$75$$)) {
      var $value$$134$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$225$$, $seriesIndex$$75$$);
      $value$$134$$ == D.$JSCompiler_alias_NULL$$ && ($value$$134$$ = D.$DvtChartDataUtils$$.getValue($chart$$225$$, $seriesIndex$$75$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$));
      0 >= $value$$134$$ || ($options$$227_totalValue$$1$$ += $value$$134$$)
    }
  }
  if(0 == $options$$227_totalValue$$1$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for($seriesIndex$$75$$ = $seriesCount$$18_slice$$25_targetValue$$ - 1;0 <= $seriesIndex$$75$$;$seriesIndex$$75$$--) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$225$$, $seriesIndex$$75$$) && ($value$$134$$ = D.$DvtChartDataUtils$$.getValue($chart$$225$$, $seriesIndex$$75$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$), $seriesCount$$18_slice$$25_targetValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$225$$, $seriesIndex$$75$$), 0 >= $value$$134$$ && $seriesCount$$18_slice$$25_targetValue$$ == D.$JSCompiler_alias_NULL$$ || $seriesCount$$18_slice$$25_targetValue$$ != D.$JSCompiler_alias_NULL$$ && 0 >= 
    $seriesCount$$18_slice$$25_targetValue$$ || ($seriesCount$$18_slice$$25_targetValue$$ != D.$JSCompiler_alias_NULL$$ ? ($cumulativeValue$$ += $seriesCount$$18_slice$$25_targetValue$$ / $options$$227_totalValue$$1$$, $seriesCount$$18_slice$$25_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$225$$, $seriesIndex$$75$$, $numDrawnSeries$$2$$, $availSpace$$108$$.$w$, $availSpace$$108$$.$h$, 1 - $cumulativeValue$$, $seriesCount$$18_slice$$25_targetValue$$ / $options$$227_totalValue$$1$$, $value$$134$$ / 
    $seriesCount$$18_slice$$25_targetValue$$, $gapSize$$)) : ($cumulativeValue$$ += $value$$134$$ / $options$$227_totalValue$$1$$, $seriesCount$$18_slice$$25_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$225$$, $seriesIndex$$75$$, $numDrawnSeries$$2$$, $availSpace$$108$$.$w$, $availSpace$$108$$.$h$, 1 - $cumulativeValue$$, $value$$134$$ / $options$$227_totalValue$$1$$, D.$JSCompiler_alias_NULL$$, $gapSize$$)), $numDrawnSeries$$2$$++, $container$$154$$.$addChild$($seriesCount$$18_slice$$25_targetValue$$), 
    (0,D.$DvtChartObjPeer$associate$$)($seriesCount$$18_slice$$25_targetValue$$, $chart$$225$$, $seriesIndex$$75$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$)))
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtRefObjRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRefObjRenderer$$, D.$DvtObj$$, "DvtRefObjRenderer");
D.$DvtRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtRefObjRenderer$$$$renderBackgroundObjects$$($chart$$180$$, $plotAreaBounds$$1$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$180$$, $plotAreaBounds$$1$$, "back")
};
D.$DvtRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtRefObjRenderer$$$$renderForegroundObjects$$($chart$$181$$, $plotAreaBounds$$2$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$181$$, $plotAreaBounds$$2$$, "front")
};
D.$DvtRefObjRenderer$$.$_renderObjects$ = function $$DvtRefObjRenderer$$$$_renderObjects$$($chart$$182$$, $plotAreaBounds$$3$$, $location$$22$$) {
  var $container$$123$$ = window.clipGroup;
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$182$$, $container$$123$$, $plotAreaBounds$$3$$, $location$$22$$, $chart$$182$$.$xAxis$, D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$182$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$182$$, $container$$123$$, $plotAreaBounds$$3$$, $location$$22$$, $chart$$182$$.$yAxis$, D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$182$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$182$$, $container$$123$$, $plotAreaBounds$$3$$, $location$$22$$, $chart$$182$$.$y2Axis$, D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$182$$))
};
D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtRefObjRenderer$$$$_renderObjectsForAxis$$($chart$$183$$, $container$$124$$, $plotAreaBounds$$4$$, $location$$23$$, $axis$$32$$, $objects$$5$$) {
  if($objects$$5$$ && $axis$$32$$) {
    for(var $i$$661$$ = 0;$i$$661$$ < $objects$$5$$.length;$i$$661$$++) {
      var $refObj$$7_tooltip$$44$$ = $objects$$5$$[$i$$661$$];
      if($refObj$$7_tooltip$$44$$ && D.$DvtChartRefObjUtils$$.$getLocation$($refObj$$7_tooltip$$44$$) == $location$$23$$) {
        var $shape$$86$$, $type$$204$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$7_tooltip$$44$$);
        "area" == $type$$204$$ ? $shape$$86$$ = D.$DvtRefObjRenderer$$.$_createReferenceArea$($refObj$$7_tooltip$$44$$, $chart$$183$$, $plotAreaBounds$$4$$, $axis$$32$$) : "line" == $type$$204$$ && ($shape$$86$$ = D.$DvtRefObjRenderer$$.$_createReferenceLine$($refObj$$7_tooltip$$44$$, $chart$$183$$, $plotAreaBounds$$4$$, $axis$$32$$));
        $shape$$86$$ != D.$JSCompiler_alias_NULL$$ && ($refObj$$7_tooltip$$44$$ = D.$DvtChartTooltipUtils$$.$getRefObjTooltip$($refObj$$7_tooltip$$44$$), $chart$$183$$.$getEventManager$().$associate$($shape$$86$$, new D.$DvtSimpleObjPeer$$($refObj$$7_tooltip$$44$$)), $container$$124$$.$addChild$($shape$$86$$), (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($shape$$86$$), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($shape$$86$$, "label", $refObj$$7_tooltip$$44$$))
      }
    }
  }
};
D.$DvtRefObjRenderer$$.$_createReferenceArea$ = function $$DvtRefObjRenderer$$$$_createReferenceArea$$($cy$$36_lowCoords_refObj$$8$$, $chart$$184_outerPoints_radius$$24$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$, $axis$$33_highCoord$$) {
  var $context$$614_shape$$87$$ = $chart$$184_outerPoints_radius$$24$$.$_context$, $areas$$9_color$$76_position$$35$$ = $axis$$33_highCoord$$.$getPosition$(), $bHoriz$$6_cx$$35_highCoords$$ = "top" == $areas$$9_color$$76_position$$35$$ || "bottom" == $areas$$9_color$$76_position$$35$$, $bRadial_pLow_pointIndex$$ = "radial" == $areas$$9_color$$76_position$$35$$, $areas$$9_color$$76_position$$35$$ = D.$DvtChartRefObjUtils$$.$getColor$($cy$$36_lowCoords_refObj$$8$$);
  if($cy$$36_lowCoords_refObj$$8$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$33_highCoord$$ == $chart$$184_outerPoints_radius$$24$$.$yAxis$) {
    var $items$$17_lowCoord$$ = $cy$$36_lowCoords_refObj$$8$$.items, $bHoriz$$6_cx$$35_highCoords$$ = [];
    $cy$$36_lowCoords_refObj$$8$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($chart$$184_outerPoints_radius$$24$$.$xAxis$)) {
      for(;$items$$17_lowCoord$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$184_outerPoints_radius$$24$$);) {
        $items$$17_lowCoord$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    for($bRadial_pLow_pointIndex$$ = 0;$bRadial_pLow_pointIndex$$ < $items$$17_lowCoord$$.length;$bRadial_pLow_pointIndex$$++) {
      var $dataItem$$24_hCoord$$ = $items$$17_lowCoord$$[$bRadial_pLow_pointIndex$$];
      if($dataItem$$24_hCoord$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$24_hCoord$$.min == D.$JSCompiler_alias_NULL$$ || $dataItem$$24_hCoord$$.max == D.$JSCompiler_alias_NULL$$) {
        $bHoriz$$6_cx$$35_highCoords$$.push(D.$JSCompiler_alias_NULL$$), $cy$$36_lowCoords_refObj$$8$$.push(D.$JSCompiler_alias_NULL$$)
      }else {
        var $lCoord$$ = $axis$$33_highCoord$$.$getUnboundedCoordAt$($dataItem$$24_hCoord$$.min), $dataItem$$24_hCoord$$ = $axis$$33_highCoord$$.$getUnboundedCoordAt$($dataItem$$24_hCoord$$.max), $xCoord$$1$$ = $chart$$184_outerPoints_radius$$24$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($items$$17_lowCoord$$, $bRadial_pLow_pointIndex$$));
        $bHoriz$$6_cx$$35_highCoords$$.push(new D.$DvtPoint$$($xCoord$$1$$, $dataItem$$24_hCoord$$));
        $cy$$36_lowCoords_refObj$$8$$.push(new D.$DvtPoint$$($xCoord$$1$$, $lCoord$$))
      }
    }
    $areas$$9_color$$76_position$$35$$ = D.$DvtRefObjRenderer$$.$getRangeAreasFromCoords$($chart$$184_outerPoints_radius$$24$$, $bHoriz$$6_cx$$35_highCoords$$, $cy$$36_lowCoords_refObj$$8$$, new D.$DvtSolidFill$$($areas$$9_color$$76_position$$35$$), $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$);
    $context$$614_shape$$87$$ = new D.$DvtContainer$$($context$$614_shape$$87$$);
    for($cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$ = 0;$cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$ < $areas$$9_color$$76_position$$35$$.length;$cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$++) {
      $context$$614_shape$$87$$.$addChild$($areas$$9_color$$76_position$$35$$[$cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$])
    }
  }else {
    if($cy$$36_lowCoords_refObj$$8$$.min == D.$JSCompiler_alias_NULL$$ || -window.Infinity == $cy$$36_lowCoords_refObj$$8$$.min) {
      $cy$$36_lowCoords_refObj$$8$$.min = $axis$$33_highCoord$$.$getGlobalMin$()
    }
    if($cy$$36_lowCoords_refObj$$8$$.max == D.$JSCompiler_alias_NULL$$ || window.Infinity == $cy$$36_lowCoords_refObj$$8$$.max) {
      $cy$$36_lowCoords_refObj$$8$$.max = $axis$$33_highCoord$$.$getGlobalMax$()
    }
    $items$$17_lowCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$184_outerPoints_radius$$24$$, $axis$$33_highCoord$$, $cy$$36_lowCoords_refObj$$8$$.min);
    $axis$$33_highCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$184_outerPoints_radius$$24$$, $axis$$33_highCoord$$, $cy$$36_lowCoords_refObj$$8$$.max);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$184_outerPoints_radius$$24$$) ? ($bHoriz$$6_cx$$35_highCoords$$ = $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.x + $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.$w$ / 2, $cy$$36_lowCoords_refObj$$8$$ = $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.y + $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.$h$ / 2, $bRadial_pLow_pointIndex$$ ? D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$184_outerPoints_radius$$24$$) ? 
    ($cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$184_outerPoints_radius$$24$$), $chart$$184_outerPoints_radius$$24$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$6_cx$$35_highCoords$$, $cy$$36_lowCoords_refObj$$8$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$, $axis$$33_highCoord$$, 1), $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$6_cx$$35_highCoords$$, 
    $cy$$36_lowCoords_refObj$$8$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$, $items$$17_lowCoord$$, 0), $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$ = window.DvtPathUtils.$polyline$($chart$$184_outerPoints_radius$$24$$) + window.DvtPathUtils.$polyline$($cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$) + window.DvtPathUtils.closePath()) : $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$ = window.DvtPathUtils.moveTo($bHoriz$$6_cx$$35_highCoords$$, 
    $cy$$36_lowCoords_refObj$$8$$ - $axis$$33_highCoord$$) + window.DvtPathUtils.arcTo($axis$$33_highCoord$$, $axis$$33_highCoord$$, window.Math.PI, 1, $bHoriz$$6_cx$$35_highCoords$$, $cy$$36_lowCoords_refObj$$8$$ + $axis$$33_highCoord$$) + window.DvtPathUtils.arcTo($axis$$33_highCoord$$, $axis$$33_highCoord$$, window.Math.PI, 1, $bHoriz$$6_cx$$35_highCoords$$, $cy$$36_lowCoords_refObj$$8$$ - $axis$$33_highCoord$$) + window.DvtPathUtils.moveTo($bHoriz$$6_cx$$35_highCoords$$, $cy$$36_lowCoords_refObj$$8$$ - 
    $items$$17_lowCoord$$) + window.DvtPathUtils.arcTo($items$$17_lowCoord$$, $items$$17_lowCoord$$, window.Math.PI, 0, $bHoriz$$6_cx$$35_highCoords$$, $cy$$36_lowCoords_refObj$$8$$ + $items$$17_lowCoord$$) + window.DvtPathUtils.arcTo($items$$17_lowCoord$$, $items$$17_lowCoord$$, window.Math.PI, 0, $bHoriz$$6_cx$$35_highCoords$$, $cy$$36_lowCoords_refObj$$8$$ - $items$$17_lowCoord$$) + window.DvtPathUtils.closePath() : ($chart$$184_outerPoints_radius$$24$$ = $chart$$184_outerPoints_radius$$24$$.$getRadius$(), 
    $bRadial_pLow_pointIndex$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$184_outerPoints_radius$$24$$, $items$$17_lowCoord$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$), $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$184_outerPoints_radius$$24$$, $axis$$33_highCoord$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$), $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$ = window.DvtPathUtils.moveTo($bHoriz$$6_cx$$35_highCoords$$, 
    $cy$$36_lowCoords_refObj$$8$$) + window.DvtPathUtils.lineTo($bRadial_pLow_pointIndex$$.x, $bRadial_pLow_pointIndex$$.y) + window.DvtPathUtils.arcTo($chart$$184_outerPoints_radius$$24$$, $chart$$184_outerPoints_radius$$24$$, $axis$$33_highCoord$$ - $items$$17_lowCoord$$, 1, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.x, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.y) + window.DvtPathUtils.lineTo($cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.x, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.y) + 
    window.DvtPathUtils.closePath()), $context$$614_shape$$87$$ = new D.$DvtPath$$($context$$614_shape$$87$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$)) : $context$$614_shape$$87$$ = new D.$DvtPolygon$$($context$$614_shape$$87$$, $bHoriz$$6_cx$$35_highCoords$$ ? [$items$$17_lowCoord$$, 0, $axis$$33_highCoord$$, 0, $axis$$33_highCoord$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.$h$, $items$$17_lowCoord$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.$h$] : 
    [0, $items$$17_lowCoord$$, 0, $axis$$33_highCoord$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.$w$, $axis$$33_highCoord$$, $cmds$$25_innerPoints_j$$89_nSides_pHigh_plotAreaBounds$$5$$.$w$, $items$$17_lowCoord$$]);
    $context$$614_shape$$87$$.$setSolidFill$($areas$$9_color$$76_position$$35$$)
  }
  return $context$$614_shape$$87$$
};
D.$DvtRefObjRenderer$$.$_createReferenceLine$ = function $$DvtRefObjRenderer$$$$_createReferenceLine$$($cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$, $cartesian_chart$$185_shape$$88$$, $lines$$2_plotAreaBounds$$6$$, $axis$$34_cx$$36$$) {
  var $j$$90_lineWidth$$5_position$$36_stroke$$77$$ = $axis$$34_cx$$36$$.$getPosition$(), $bHoriz$$7_items$$18$$ = "top" == $j$$90_lineWidth$$5_position$$36_stroke$$77$$ || "bottom" == $j$$90_lineWidth$$5_position$$36_stroke$$77$$, $bRadial$$1_coords$$13_points$$66$$ = "radial" == $j$$90_lineWidth$$5_position$$36_stroke$$77$$, $bTangential_pointIndex$$1$$ = "tangential" == $j$$90_lineWidth$$5_position$$36_stroke$$77$$, $j$$90_lineWidth$$5_position$$36_stroke$$77$$ = D.$DvtChartRefObjUtils$$.$getLineWidth$($cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$), 
  $color$$77_context$$615$$ = D.$DvtChartRefObjUtils$$.$getColor$($cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$), $j$$90_lineWidth$$5_position$$36_stroke$$77$$ = new D.$DvtSolidStroke$$($color$$77_context$$615$$, 1, $j$$90_lineWidth$$5_position$$36_stroke$$77$$);
  $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$.lineStyle && $j$$90_lineWidth$$5_position$$36_stroke$$77$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$.lineStyle));
  $color$$77_context$$615$$ = $cartesian_chart$$185_shape$$88$$.$_context$;
  if($cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$34_cx$$36$$ == $cartesian_chart$$185_shape$$88$$.$yAxis$) {
    $bHoriz$$7_items$$18$$ = $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$.items;
    $bRadial$$1_coords$$13_points$$66$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($cartesian_chart$$185_shape$$88$$.$xAxis$)) {
      for(;$bHoriz$$7_items$$18$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($cartesian_chart$$185_shape$$88$$);) {
        $bHoriz$$7_items$$18$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    $bRadial$$1_coords$$13_points$$66$$ = [];
    for($bTangential_pointIndex$$1$$ = 0;$bTangential_pointIndex$$1$$ < $bHoriz$$7_items$$18$$.length;$bTangential_pointIndex$$1$$++) {
      $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$ = $bHoriz$$7_items$$18$$[$bTangential_pointIndex$$1$$];
      var $lineCoord$$2_value$$132_xCoord$$2$$ = D.$JSCompiler_alias_NULL$$;
      $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,window.isNaN)($cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$) ? $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$.value != D.$JSCompiler_alias_NULL$$ && ($lineCoord$$2_value$$132_xCoord$$2$$ = $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$.value) : $lineCoord$$2_value$$132_xCoord$$2$$ = $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$);
      $lineCoord$$2_value$$132_xCoord$$2$$ == D.$JSCompiler_alias_NULL$$ ? $bRadial$$1_coords$$13_points$$66$$.push(D.$JSCompiler_alias_NULL$$) : ($cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$ = $axis$$34_cx$$36$$.$getUnboundedCoordAt$($lineCoord$$2_value$$132_xCoord$$2$$), $lineCoord$$2_value$$132_xCoord$$2$$ = $cartesian_chart$$185_shape$$88$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($bHoriz$$7_items$$18$$, $bTangential_pointIndex$$1$$)), $bRadial$$1_coords$$13_points$$66$$.push(new D.$DvtPoint$$($lineCoord$$2_value$$132_xCoord$$2$$, 
      $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$)))
    }
    $lines$$2_plotAreaBounds$$6$$ = D.$DvtPlotAreaRenderer$$.$getLinesFromCoords$($cartesian_chart$$185_shape$$88$$, $bRadial$$1_coords$$13_points$$66$$, $j$$90_lineWidth$$5_position$$36_stroke$$77$$, $lines$$2_plotAreaBounds$$6$$);
    $cartesian_chart$$185_shape$$88$$ = new D.$DvtContainer$$($color$$77_context$$615$$);
    for($j$$90_lineWidth$$5_position$$36_stroke$$77$$ = 0;$j$$90_lineWidth$$5_position$$36_stroke$$77$$ < $lines$$2_plotAreaBounds$$6$$.length;$j$$90_lineWidth$$5_position$$36_stroke$$77$$++) {
      $cartesian_chart$$185_shape$$88$$.$addChild$($lines$$2_plotAreaBounds$$6$$[$j$$90_lineWidth$$5_position$$36_stroke$$77$$])
    }
  }else {
    if($cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$.value) {
      $lineCoord$$2_value$$132_xCoord$$2$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($cartesian_chart$$185_shape$$88$$, $axis$$34_cx$$36$$, $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$.value);
      if($lineCoord$$2_value$$132_xCoord$$2$$ === D.$JSCompiler_alias_NULL$$) {
        return D.$JSCompiler_alias_NULL$$
      }
      $axis$$34_cx$$36$$ = $lines$$2_plotAreaBounds$$6$$.x + $lines$$2_plotAreaBounds$$6$$.$w$ / 2;
      $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$ = $lines$$2_plotAreaBounds$$6$$.y + $lines$$2_plotAreaBounds$$6$$.$h$ / 2;
      $bRadial$$1_coords$$13_points$$66$$ ? (D.$DvtChartAxisUtils$$.$isGridPolygonal$($cartesian_chart$$185_shape$$88$$) ? ($bRadial$$1_coords$$13_points$$66$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($axis$$34_cx$$36$$, $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$, D.$DvtChartDataUtils$$.$getGroupCount$($cartesian_chart$$185_shape$$88$$), $lineCoord$$2_value$$132_xCoord$$2$$), $cartesian_chart$$185_shape$$88$$ = new D.$DvtPolygon$$($color$$77_context$$615$$, $bRadial$$1_coords$$13_points$$66$$)) : 
      $cartesian_chart$$185_shape$$88$$ = new D.$DvtCircle$$($color$$77_context$$615$$, $axis$$34_cx$$36$$, $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$, $lineCoord$$2_value$$132_xCoord$$2$$), $cartesian_chart$$185_shape$$88$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $bTangential_pointIndex$$1$$ ? ($cartesian_chart$$185_shape$$88$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian_chart$$185_shape$$88$$.$getRadius$(), $lineCoord$$2_value$$132_xCoord$$2$$, $lines$$2_plotAreaBounds$$6$$), $cartesian_chart$$185_shape$$88$$ = 
      new D.$DvtLine$$($color$$77_context$$615$$, $axis$$34_cx$$36$$, $cy$$37_dataItem$$25_refObj$$9_yCoord$$1$$, $cartesian_chart$$185_shape$$88$$.x, $cartesian_chart$$185_shape$$88$$.y)) : ($cartesian_chart$$185_shape$$88$$ = $bHoriz$$7_items$$18$$ ? new D.$DvtLine$$($color$$77_context$$615$$, $lineCoord$$2_value$$132_xCoord$$2$$, 0, $lineCoord$$2_value$$132_xCoord$$2$$, $lines$$2_plotAreaBounds$$6$$.$h$) : new D.$DvtLine$$($color$$77_context$$615$$, 0, $lineCoord$$2_value$$132_xCoord$$2$$, $lines$$2_plotAreaBounds$$6$$.$w$, 
      $lineCoord$$2_value$$132_xCoord$$2$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cartesian_chart$$185_shape$$88$$));
      $cartesian_chart$$185_shape$$88$$.$setStroke$($j$$90_lineWidth$$5_position$$36_stroke$$77$$)
    }else {
      return D.$JSCompiler_alias_NULL$$
    }
  }
  return $cartesian_chart$$185_shape$$88$$
};
D.$DvtRefObjRenderer$$.$getRangeAreasFromCoords$ = function $$DvtRefObjRenderer$$$$getRangeAreasFromCoords$$($chart$$186$$, $highArrays_highCoords$$1$$, $lowArrays_lowCoords$$1$$, $fill$$49$$, $areas$$10_availSpace$$73$$) {
  var $context$$616$$ = $chart$$186$$.$_context$;
  $highArrays_highCoords$$1$$ = D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$($chart$$186$$, $highArrays_highCoords$$1$$, $areas$$10_availSpace$$73$$);
  $lowArrays_lowCoords$$1$$ = D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$($chart$$186$$, $lowArrays_lowCoords$$1$$, $areas$$10_availSpace$$73$$);
  if($highArrays_highCoords$$1$$.length == $lowArrays_lowCoords$$1$$.length) {
    $areas$$10_availSpace$$73$$ = [];
    for(var $i$$662$$ = 0;$i$$662$$ < $highArrays_highCoords$$1$$.length;$i$$662$$++) {
      var $highArray_points$$67_polygon$$2$$ = $highArrays_highCoords$$1$$[$i$$662$$], $j$$91_lowArray$$ = $lowArrays_lowCoords$$1$$[$i$$662$$];
      if(!(2 > $highArray_points$$67_polygon$$2$$.length)) {
        D.$DvtChartTypeUtils$$.$isPolar$($chart$$186$$) && (D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$186$$) && $highArray_points$$67_polygon$$2$$.length == 2 * D.$DvtChartDataUtils$$.$getGroupCount$($chart$$186$$)) && ($highArray_points$$67_polygon$$2$$.push($highArray_points$$67_polygon$$2$$[0], $highArray_points$$67_polygon$$2$$[1]), $j$$91_lowArray$$.push($j$$91_lowArray$$[0], $j$$91_lowArray$$[1]));
        $highArray_points$$67_polygon$$2$$ = $highArray_points$$67_polygon$$2$$.slice(0);
        for($j$$91_lowArray$$ = 0;$j$$91_lowArray$$ < $lowArrays_lowCoords$$1$$[$i$$662$$].length;$j$$91_lowArray$$ += 2) {
          $highArray_points$$67_polygon$$2$$.unshift($lowArrays_lowCoords$$1$$[$i$$662$$][$j$$91_lowArray$$], $lowArrays_lowCoords$$1$$[$i$$662$$][$j$$91_lowArray$$ + 1])
        }
        $highArray_points$$67_polygon$$2$$ = new D.$DvtPolygon$$($context$$616$$, $highArray_points$$67_polygon$$2$$);
        $highArray_points$$67_polygon$$2$$.$setFill$($fill$$49$$);
        $areas$$10_availSpace$$73$$.push($highArray_points$$67_polygon$$2$$)
      }
    }
    return $areas$$10_availSpace$$73$$
  }
};
D.$DvtRefObjRenderer$$.$_getXValue$ = function $$DvtRefObjRenderer$$$$_getXValue$$($items$$19$$, $index$$129$$) {
  var $dataItem$$26$$ = $items$$19$$[$index$$129$$];
  return(0,window.isNaN)($dataItem$$26$$.x) ? $index$$129$$ : $dataItem$$26$$.x
};
D.$DvtRefObjRenderer$$.$_getAxisCoord$ = function $$DvtRefObjRenderer$$$$_getAxisCoord$$($chart$$187_index$$130$$, $axis$$35$$, $value$$133$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$35$$) && ($chart$$187_index$$130$$ = D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$187_index$$130$$, $value$$133$$), 0 <= $chart$$187_index$$130$$) ? $axis$$35$$.$getUnboundedCoordAt$($chart$$187_index$$130$$) : !(0,window.isNaN)($value$$133$$) ? $axis$$35$$.$getUnboundedCoordAt$($value$$133$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataCursor$$ = function $$DvtDataCursor$$$($context$$418$$, $bHoriz$$) {
  this.Init($context$$418$$, $bHoriz$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataCursor$$, D.$DvtContainer$$, "DvtDataCursor");
D.$DvtDataCursor$$.prototype.Init = function $$DvtDataCursor$$$$Init$($context$$419$$, $bHoriz$$1$$) {
  D.$DvtDataCursor$$.$superclass$.Init.call(this, $context$$419$$);
  this.$_bHoriz$ = $bHoriz$$1$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $bHoriz$$1$$ ? (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 2, "dcLine"), this.$_cursorLineRect$.$setTranslateY$(-1)) : (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 2, 0, "dcLine"), this.$_cursorLineRect$.$setTranslateX$(-1));
  this.$_cursorLineRect$.$setSolidFill$("#5a5a5a");
  this.$_cursorLineRect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_cursorLineRect$);
  this.$_marker$ = new D.$DvtContainer$$(this.$_context$, "dotContainer");
  this.$_marker$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_marker$);
  var $middleCircle_outerCircle$$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 16, 16);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($middleCircle_outerCircle$$, -8, -8);
  $middleCircle_outerCircle$$.$setSolidFill$("#5a5a5a");
  $middleCircle_outerCircle$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$($middleCircle_outerCircle$$);
  $middleCircle_outerCircle$$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 12, 12);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($middleCircle_outerCircle$$, -6, -6);
  $middleCircle_outerCircle$$.$setSolidFill$("white");
  $middleCircle_outerCircle$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$($middleCircle_outerCircle$$);
  this.$_markerInnerCircle$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 8, 8);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_markerInnerCircle$, -4, -4);
  this.$_markerInnerCircle$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$(this.$_markerInnerCircle$)
};
D.$DvtDataCursor$$.prototype.$render$ = function $$DvtDataCursor$$$$$render$$($plotAreaBounds$$, $dataX_isChrome$$, $cursorHeight_dataY$$, $lineCoord$$1$$, $startX$$5_text$$61_tooltipBounds$$, $dataColor$$2$$) {
  var $bHoriz$$2$$ = this.$isHorizontal$(), $bRtl$$1$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$), $stagePageCoords$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$), $tooltipManager$$4$$ = this.$_context$.$getTooltipManager$("_dvtDataCursor");
  $tooltipManager$$4$$.$showDatatip$($dataX_isChrome$$ + $stagePageCoords$$.x, $cursorHeight_dataY$$ + $stagePageCoords$$.y, $startX$$5_text$$61_tooltipBounds$$, $dataColor$$2$$, D.$JSCompiler_alias_FALSE$$);
  $startX$$5_text$$61_tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$4$$);
  var $tooltipX$$, $tooltipY$$;
  $bHoriz$$2$$ ? ($tooltipX$$ = $bRtl$$1$$ ? $plotAreaBounds$$.x - 0.75 * $startX$$5_text$$61_tooltipBounds$$.$w$ : $plotAreaBounds$$.x + $plotAreaBounds$$.$w$ - $startX$$5_text$$61_tooltipBounds$$.$w$ / 4, $tooltipY$$ = $lineCoord$$1$$ - $startX$$5_text$$61_tooltipBounds$$.$h$ / 2, !$bRtl$$1$$ && 16 > $tooltipX$$ - $dataX_isChrome$$ ? $tooltipX$$ = $dataX_isChrome$$ + 16 : $bRtl$$1$$ && 16 > $dataX_isChrome$$ - ($tooltipX$$ + $startX$$5_text$$61_tooltipBounds$$.$w$) && ($tooltipX$$ = $dataX_isChrome$$ - 
  16 - $startX$$5_text$$61_tooltipBounds$$.$w$)) : ($tooltipX$$ = $lineCoord$$1$$ - $startX$$5_text$$61_tooltipBounds$$.$w$ / 2, $tooltipY$$ = $plotAreaBounds$$.y - 0.75 * $startX$$5_text$$61_tooltipBounds$$.$h$, 16 > $cursorHeight_dataY$$ - ($tooltipY$$ + $startX$$5_text$$61_tooltipBounds$$.$h$) && ($tooltipY$$ = $cursorHeight_dataY$$ - 16 - $startX$$5_text$$61_tooltipBounds$$.$h$));
  (0,D.$JSCompiler_StaticMethods_positionTip$$)($tooltipManager$$4$$, $tooltipX$$ + $stagePageCoords$$.x, $tooltipY$$ + $stagePageCoords$$.y);
  $startX$$5_text$$61_tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$4$$);
  $tooltipX$$ = $startX$$5_text$$61_tooltipBounds$$.x - $stagePageCoords$$.x;
  $tooltipY$$ = $startX$$5_text$$61_tooltipBounds$$.y - $stagePageCoords$$.y;
  this.$_markerInnerCircle$.$setSolidFill$($dataColor$$2$$);
  $bHoriz$$2$$ ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $plotAreaBounds$$.x, $lineCoord$$1$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $plotAreaBounds$$.x, $cursorHeight_dataY$$ - $lineCoord$$1$$), this.$_cursorLineRect$.$setWidth$(window.Math.max($tooltipX$$ + 1 - $plotAreaBounds$$.x, 0)), $bRtl$$1$$ && ($startX$$5_text$$61_tooltipBounds$$ = $tooltipX$$ + $startX$$5_text$$61_tooltipBounds$$.$w$ + 1 - $plotAreaBounds$$.x, this.$_cursorLineRect$.$setX$($startX$$5_text$$61_tooltipBounds$$), 
  this.$_cursorLineRect$.$setWidth$(window.Math.max($plotAreaBounds$$.$w$ - $startX$$5_text$$61_tooltipBounds$$, 0)))) : ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $lineCoord$$1$$, $plotAreaBounds$$.y + 1), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $lineCoord$$1$$, $cursorHeight_dataY$$ - $plotAreaBounds$$.y), $dataX_isChrome$$ = D.$DvtAgent$$.$isBrowserChrome$(), $cursorHeight_dataY$$ = $plotAreaBounds$$.y + $plotAreaBounds$$.$h$ - $tooltipY$$ - 
  $startX$$5_text$$61_tooltipBounds$$.$h$ + ($dataX_isChrome$$ ? 4 : 0), this.$_cursorLineRect$.$setTranslateY$($tooltipY$$ + $startX$$5_text$$61_tooltipBounds$$.$h$ - ($plotAreaBounds$$.y + ($dataX_isChrome$$ ? 4 : 1))), this.$_cursorLineRect$.$setHeight$(window.Math.max($cursorHeight_dataY$$, 0)));
  D.$DvtAgent$$.$workaroundFirefoxRepaint$(this.$_marker$)
};
D.$DvtDataCursor$$.prototype.$isHorizontal$ = (0,D.$JSCompiler_get$$)("$_bHoriz$");
D.$DvtDCEH$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtDCEH$$, D.$DvtObj$$, "DvtDCEH");
D.$DvtDCEH$$.prototype.$_Init$ = function $$DvtDCEH$$$$$_Init$$($context$$417$$, $dataCursor$$1$$) {
  this.$_context$ = $context$$417$$;
  this.$_isNumericMainAxis$ = this.$_useAllInGroup$ = this.$_horizontal$ = this.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataCursor$ = $dataCursor$$1$$;
  this.$_threeDHorizontalOffset$ = 0
};
D.$JSCompiler_StaticMethods_processMove$$ = function $$JSCompiler_StaticMethods_processMove$$$($JSCompiler_StaticMethods_processMove$self$$, $dataCursor$$inline_3275_pageX$$10_pos$$22$$, $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$, $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$, $blockEventsRect_logicalObj$$5$$) {
  if($closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$) {
    $dataCursor$$inline_3275_pageX$$10_pos$$22$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_processMove$self$$.$_context$, $dataCursor$$inline_3275_pageX$$10_pos$$22$$, $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$);
    $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$ = $dataCursor$$inline_3275_pageX$$10_pos$$22$$.x;
    var $dcY$$inline_3279_y$$169$$ = $dataCursor$$inline_3275_pageX$$10_pos$$22$$.y;
    if($blockEventsRect_logicalObj$$5$$ = $JSCompiler_StaticMethods_processMove$self$$.$getActionablePlotRect$($dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$, $dcY$$inline_3279_y$$169$$, $blockEventsRect_logicalObj$$5$$)) {
      $dataCursor$$inline_3275_pageX$$10_pos$$22$$ = $JSCompiler_StaticMethods_processMove$self$$.$_dataCursor$;
      var $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$;
      var $centerPoint$$inline_3277_horizontal$$inline_8658$$ = $JSCompiler_StaticMethods_processMove$self$$.$_horizontal$;
      $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$ = $JSCompiler_StaticMethods_processMove$self$$.$_useAllInGroup$;
      var $closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$ = $JSCompiler_StaticMethods_processMove$self$$.$_isNumericMainAxis$, $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$ = [];
      if($closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$ = $JSCompiler_StaticMethods_processMove$self$$.$findMatches$($dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$, $dcY$$inline_3279_y$$169$$, $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$, $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$, $blockEventsRect_logicalObj$$5$$)) {
        $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$ = $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$
      }else {
        $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$ = 1E7;
        for(var $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$ = [], $diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$ = 0;$diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$ < $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$.length;$diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$++) {
          var $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$ = $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$[$diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$], $diffValue$$inline_10251_match$$inline_8669$$ = window.Math.abs((($centerPoint$$inline_3277_horizontal$$inline_8658$$ ? $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.x) + 
          ($centerPoint$$inline_3277_horizontal$$inline_8658$$ ? $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.y + $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.$w$)) / 
          2 - ($centerPoint$$inline_3277_horizontal$$inline_8658$$ ? $dcY$$inline_3279_y$$169$$ : $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$));
          $diffValue$$inline_10251_match$$inline_8669$$ <= $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$ && ($diffValue$$inline_10251_match$$inline_8669$$ < $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$ && ($closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$ = []), $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$.push($closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$), 
          $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$ = $diffValue$$inline_10251_match$$inline_8669$$)
        }
        $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$ = $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$;
        if(!$closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$) {
          $closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$ = 1E6;
          $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$ = -1E6;
          $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$ = D.$JSCompiler_alias_NULL$$;
          for($diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$ = 0;$diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$ < $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$.length;$diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$++) {
            $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$ = $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$[$diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$], $closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$ = window.Math.min($closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$, $centerPoint$$inline_3277_horizontal$$inline_8658$$ ? 
            $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.x), $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$ = window.Math.max($closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$, $centerPoint$$inline_3277_horizontal$$inline_8658$$ ? 
            $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.y + $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$matchRegion$.$w$), $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$ = 
            $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$.$gidx$
          }
          for($diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$ = 0;$diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$ < $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$.length;$diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$++) {
            var $diffValue$$inline_10251_match$$inline_8669$$ = $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$[$diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$], $itemGroup$$inline_8670_midPoint$$inline_8671$$ = $diffValue$$inline_10251_match$$inline_8669$$.$gidx$;
            $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$ ? $closestFirstDirectionMatch$$inline_8668_closestGroup$$inline_8666_matchObj$$inline_10250$$ == $itemGroup$$inline_8670_midPoint$$inline_8671$$ && $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$.push($diffValue$$inline_10251_match$$inline_8669$$) : ($itemGroup$$inline_8670_midPoint$$inline_8671$$ = (($centerPoint$$inline_3277_horizontal$$inline_8658$$ ? 
            $diffValue$$inline_10251_match$$inline_8669$$.$matchRegion$.y : $diffValue$$inline_10251_match$$inline_8669$$.$matchRegion$.x) + ($centerPoint$$inline_3277_horizontal$$inline_8658$$ ? $diffValue$$inline_10251_match$$inline_8669$$.$matchRegion$.y + $diffValue$$inline_10251_match$$inline_8669$$.$matchRegion$.$h$ : $diffValue$$inline_10251_match$$inline_8669$$.$matchRegion$.x + $diffValue$$inline_10251_match$$inline_8669$$.$matchRegion$.$w$)) / 2, $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$ >= 
            $itemGroup$$inline_8670_midPoint$$inline_8671$$ && $closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$ <= $itemGroup$$inline_8670_midPoint$$inline_8671$$ && $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$.push($diffValue$$inline_10251_match$$inline_8669$$))
          }
        }
        $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$ = D.$JSCompiler_alias_NULL$$;
        $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$ = 1E8;
        for($closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$ = 0;$closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$ < $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$.length;$closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$++) {
          $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$ = $closestFirstDirectionMatches$$inline_8663_immediateMatch$$inline_8662_minDiff$$inline_10247_targetObj$$27$$[$closestLowerBound$$inline_8664_i$$inline_10259_isNumericMainAxis$$inline_8660$$], $diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$ = window.Math.abs((($centerPoint$$inline_3277_horizontal$$inline_8658$$ ? $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$.$matchRegion$.x : 
          $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$.$matchRegion$.y) + ($centerPoint$$inline_3277_horizontal$$inline_8658$$ ? $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$.$matchRegion$.x + $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$.$matchRegion$.$w$ : $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$.$matchRegion$.y + 
          $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$.$matchRegion$.$h$)) / 2 - ($centerPoint$$inline_3277_horizontal$$inline_8658$$ ? $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$ : $dcY$$inline_3279_y$$169$$)), $diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$ < $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$ && ($matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$ = 
          $diffValue$$inline_10261_i$$inline_10249_i$$inline_8667$$, $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$ = $closestFirstDirectionMatches$$inline_10248_closestHigherBound$$inline_8665_match$$inline_10260$$)
        }
      }
      $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$) : ($centerPoint$$inline_3277_horizontal$$inline_8658$$ = D.$DvtGeomUtils$$.$getCenterPoint$($closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$.$matchRegion$), "SNAP" == ($dataCursor$$inline_3275_pageX$$10_pos$$22$$.$_behavior$ ? 
      $dataCursor$$inline_3275_pageX$$10_pos$$22$$.$_behavior$ : "AUTO") && ($dataCursor$$inline_3275_pageX$$10_pos$$22$$.$isHorizontal$() ? $dcY$$inline_3279_y$$169$$ = window.Math.min(window.Math.max($centerPoint$$inline_3277_horizontal$$inline_8658$$.y, $blockEventsRect_logicalObj$$5$$.y), $blockEventsRect_logicalObj$$5$$.y + $blockEventsRect_logicalObj$$5$$.$h$) : $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$ = window.Math.min(window.Math.max($centerPoint$$inline_3277_horizontal$$inline_8658$$.x, 
      $blockEventsRect_logicalObj$$5$$.x), $blockEventsRect_logicalObj$$5$$.x + $blockEventsRect_logicalObj$$5$$.$w$)), $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$ && ($matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$ = $blockEventsRect_logicalObj$$5$$.x + $blockEventsRect_logicalObj$$5$$.$w$ - $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$, $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$ > $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$ && 
      ($dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$ = $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$)), $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$ = $JSCompiler_StaticMethods_processMove$self$$.$getTooltipText$($closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$), !$matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$ || 
      "" == $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$ ? $dataCursor$$inline_3275_pageX$$10_pos$$22$$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : ($dataCursor$$inline_3275_pageX$$10_pos$$22$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$ = $JSCompiler_StaticMethods_processMove$self$$.$getSeriesColor$($closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$.$sidx$, 
      $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$.$gidx$), $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$ = $dataCursor$$inline_3275_pageX$$10_pos$$22$$.$isHorizontal$() ? $dcY$$inline_3279_y$$169$$ : $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$, $dataCursor$$inline_3275_pageX$$10_pos$$22$$.$render$($blockEventsRect_logicalObj$$5$$, $centerPoint$$inline_3277_horizontal$$inline_8658$$.x, $centerPoint$$inline_3277_horizontal$$inline_8658$$.y, 
      $dcX$$inline_3278_lineCoord$$inline_3283_pageY$$10_x$$199$$, $matches$$inline_8661_minDiff$$inline_10258_tooltipText$$inline_3281_xExtent$$inline_3280$$, $closestMatch$$inline_10257_closestMatch$$inline_3276_seriesColor$$inline_3282_useAllInGroup$$inline_8659$$), $JSCompiler_StaticMethods_processMove$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_TRUE$$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$)
  }
};
D.$JSCompiler_StaticMethods__removeDataCursor$$ = function $$JSCompiler_StaticMethods__removeDataCursor$$$($JSCompiler_StaticMethods__removeDataCursor$self$$) {
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$_bVisible$ && $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_context$.$getTooltipManager$("_dvtDataCursor").$hideTooltip$();
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCEH$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getActionablePlotRect$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getPlotRect$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getSeriesColor$ = (0,D.$JSCompiler_returnArg$$)("black");
D.$JSCompiler_prototypeAlias$$.$getTooltipText$ = (0,D.$JSCompiler_returnArg$$)("Base class should override");
D.$JSCompiler_prototypeAlias$$.$findMatches$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtChartDCEH$$ = function $$DvtChartDCEH$$$($chart$$155$$) {
  this.$_Init$($chart$$155$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDCEH$$, D.$DvtDCEH$$, "DvtChartDCEH");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartDCEH$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_Init$ = function $$JSCompiler_prototypeAlias$$$$_Init$$($chart$$156$$) {
  D.$DvtChartDCEH$$.$superclass$.$_Init$.call(this, $chart$$156$$.$_context$, $chart$$156$$.$DataCursor$);
  this.$_Chart$ = $chart$$156$$;
  this.$_horizontal$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$156$$);
  this.$_useAllInGroup$ = D.$DvtChartTypeUtils$$.$isArea$($chart$$156$$) || D.$DvtChartTypeUtils$$.$isLine$($chart$$156$$);
  this.$_isNumericMainAxis$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$156$$);
  this.$_isStockChart$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isArea$ = D.$DvtChartTypeUtils$$.$isArea$($chart$$156$$)
};
D.$JSCompiler_prototypeAlias$$.$getPlotRect$ = function $$JSCompiler_prototypeAlias$$$$getPlotRect$$() {
  return this.$_Chart$.$_plotAreaSpace$
};
D.$JSCompiler_prototypeAlias$$.$getActionablePlotRect$ = function $$JSCompiler_prototypeAlias$$$$getActionablePlotRect$$($x$$274$$, $y$$238$$) {
  var $plotRect$$5$$ = this.$getPlotRect$();
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)($plotRect$$5$$, $x$$274$$, $y$$238$$) ? $plotRect$$5$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$findMatches$ = function $$JSCompiler_prototypeAlias$$$$findMatches$$($chart$$157_x$$275$$, $stage$$15_y$$239$$, $eventManager$$41_targetObj$$35$$, $matches$$13$$) {
  $chart$$157_x$$275$$ = this.$_Chart$;
  $stage$$15_y$$239$$ = $chart$$157_x$$275$$.$_context$.$_stage$;
  $eventManager$$41_targetObj$$35$$ = $chart$$157_x$$275$$.$getEventManager$();
  if(!$chart$$157_x$$275$$.$_currentMarkers$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$649$$ = 0;$i$$649$$ < $chart$$157_x$$275$$.$_currentMarkers$.length;$i$$649$$++) {
    for(var $markers$$4$$ = $chart$$157_x$$275$$.$_currentMarkers$[$i$$649$$], $numMarkers$$ = $markers$$4$$.length, $idx$$33$$ = 0;$idx$$33$$ < $numMarkers$$;$idx$$33$$++) {
      var $item$$29_match$$3$$ = $markers$$4$$[$idx$$33$$], $logicalObject$$10$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($eventManager$$41_targetObj$$35$$, $item$$29_match$$3$$), $dims$$62$$ = $item$$29_match$$3$$.$getDimensionsSelf$ ? $item$$29_match$$3$$.$getDimensionsSelf$($stage$$15_y$$239$$) : $item$$29_match$$3$$.$getDimensions$($stage$$15_y$$239$$), $item$$29_match$$3$$ = {$obj$:$item$$29_match$$3$$, $matchRegion$:$dims$$62$$, $gidx$:$logicalObject$$10$$.$getGroupIndex$(), $sidx$:$logicalObject$$10$$.$getSeriesIndex$(), 
      $marker$:D.$JSCompiler_alias_NULL$$};
      $matches$$13$$.push($item$$29_match$$3$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeriesColor$ = function $$JSCompiler_prototypeAlias$$$$getSeriesColor$$($seriesIndex$$63$$, $groupIndex$$37$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_Chart$, $seriesIndex$$63$$, $groupIndex$$37$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipText$ = function $$JSCompiler_prototypeAlias$$$$getTooltipText$$($closestMatch$$3$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($closestMatch$$3$$.$obj$, this.$_Chart$, $closestMatch$$3$$.$sidx$, $closestMatch$$3$$.$gidx$)
};
D.$DvtSparkChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSparkChart", D.$DvtSparkChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChart$$, D.$DvtBaseComponent$$, "DvtSparkChart");
D.$DvtSparkChart$$.newInstance = function $$DvtSparkChart$$$newInstance$($context$$24$$, $callback$$41$$, $callbackObj$$18$$) {
  var $sparkChart$$ = new D.$DvtSparkChart$$;
  $sparkChart$$.Init($context$$24$$, $callback$$41$$, $callbackObj$$18$$);
  return $sparkChart$$
};
D.$DvtSparkChart$$.getDefaults = function $$DvtSparkChart$$$getDefaults$($skin$$2$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSparkChartDefaults$$, $skin$$2$$)
};
D.$DvtSparkChart$$.prototype.Init = function $$DvtSparkChart$$$$Init$($context$$25$$, $callback$$42$$, $callbackObj$$19$$) {
  D.$DvtSparkChart$$.$superclass$.Init.call(this, $context$$25$$, $callback$$42$$, $callbackObj$$19$$);
  this.$Defaults$ = new D.$DvtSparkChartDefaults$$;
  this.$_eventHandler$ = new D.$DvtEventManager$$($context$$25$$);
  this.$_eventHandler$.$addListeners$(this);
  this.$_chart$ = (0,D.$DvtChart$newInstance$$)($context$$25$$);
  this.$addChild$(this.$_chart$);
  this.$_tooltipMask$ = new D.$DvtRect$$($context$$25$$);
  this.$addChild$(this.$_tooltipMask$);
  this.setId("sparkChart1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$DvtSparkChart$$.prototype.$SetOptions$ = function $$DvtSparkChart$$$$$SetOptions$$($options$$11$$) {
  $options$$11$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$11$$), D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtSparkChart$$.prototype.setId = function $$DvtSparkChart$$$$setId$($id$$13$$) {
  D.$DvtSparkChart$$.$superclass$.setId.call(this, $id$$13$$);
  this.$_chart$ && this.$_chart$.setId($id$$13$$ + "chart")
};
D.$DvtSparkChart$$.prototype.$render$ = function $$DvtSparkChart$$$$$render$$($options$$12_tooltip$$1$$, $width$$21$$, $height$$21$$) {
  this.$SetOptions$($options$$12_tooltip$$1$$);
  !(0,window.isNaN)($width$$21$$) && !(0,window.isNaN)($height$$21$$) && (this.$Width$ = $width$$21$$, this.$Height$ = $height$$21$$);
  D.$DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
  $options$$12_tooltip$$1$$ = this.$Options$.shortDesc;
  this.$_tooltipMask$.$setWidth$(this.$Width$);
  this.$_tooltipMask$.$setHeight$(this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_tooltipMask$);
  $options$$12_tooltip$$1$$ && this.$_eventHandler$.$associate$(this.$_tooltipMask$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$12_tooltip$$1$$, this.$Options$.color));
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this);
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this, "label", $options$$12_tooltip$$1$$)
};
D.$DvtSparkChart$$.prototype.render = D.$DvtSparkChart$$.prototype.$render$;
D.$DvtSparkChart$$.prototype.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$DvtSparkChartDefaults$$ = function $$DvtSparkChartDefaults$$$() {
  this.Init({skyros:D.$DvtSparkChartDefaults$VERSION_1$$, alta:D.$DvtSparkChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtSparkChartDefaults");
D.$DvtSparkChartDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#267db3"};
D.$DvtSparkChartDefaults$VERSION_1$$ = {skin:"skyros", type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:D.$JSCompiler_alias_NULL$$, color:"#666699", firstColor:D.$JSCompiler_alias_NULL$$, lastColor:D.$JSCompiler_alias_NULL$$, highColor:D.$JSCompiler_alias_NULL$$, lowColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, lineStyle:"solid", markerSize:5, markerShape:"auto", barGapRatio:0.25};
D.$DvtSparkChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartRenderer$$, D.$DvtObj$$, "DvtSparkChartRenderer");
D.$DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($items$$10_spark$$, $width$$82$$, $height$$76$$) {
  var $chart$$1$$ = $items$$10_spark$$.$_chart$, $chartOptions$$ = D.$DvtSparkChartRenderer$$.$_convertOptionsObj$($items$$10_spark$$), $markerGap_options$$78$$ = $items$$10_spark$$.$__getOptions$();
  if("area" == $markerGap_options$$78$$.type || "line" == $markerGap_options$$78$$.type) {
    $items$$10_spark$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$10_spark$$);
    var $hasMarkers$$ = D.$JSCompiler_alias_FALSE$$;
    if($markerGap_options$$78$$.firstColor || $markerGap_options$$78$$.lastColor || $markerGap_options$$78$$.highColor || $markerGap_options$$78$$.lowColor) {
      $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$
    }else {
      for(var $i$$464$$ = 0;$i$$464$$ < $items$$10_spark$$.length;$i$$464$$++) {
        if($items$$10_spark$$[$i$$464$$] && "on" == $items$$10_spark$$[$i$$464$$].markerDisplayed) {
          $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $hasMarkers$$ && 0 < $items$$10_spark$$.length && ($markerGap_options$$78$$ = $markerGap_options$$78$$.markerSize / 2, $width$$82$$ -= 2 * $markerGap_options$$78$$, $height$$76$$ -= 2 * $markerGap_options$$78$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($chart$$1$$, $markerGap_options$$78$$, $markerGap_options$$78$$))
  }
  $chart$$1$$.$render$($chartOptions$$, $width$$82$$, $height$$76$$)
};
D.$DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($options$$79_spark$$1$$) {
  return($options$$79_spark$$1$$ = $options$$79_spark$$1$$.$__getOptions$()) && $options$$79_spark$$1$$.items ? $options$$79_spark$$1$$.items : []
};
D.$DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($items$$11_spark$$2$$) {
  var $options$$80$$ = $items$$11_spark$$2$$.$__getOptions$(), $chartOptions$$1$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, __layout:{}}, $bFloatingBar$$ = "floatingBar" == $options$$80$$.type, $barSpacing_chartItems$$ = [], $floatItems$$ = [], $highIndex$$ = -1, $lowIndex$$ = -1, $highValue$$ = -window.Infinity, $lowValue$$ = window.Infinity;
  $items$$11_spark$$2$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$11_spark$$2$$);
  for(var $i$$465$$ = 0;$i$$465$$ < $items$$11_spark$$2$$.length;$i$$465$$++) {
    var $floatValue$$1_item$$18$$ = $items$$11_spark$$2$$[$i$$465$$], $chartItem$$ = {};
    $floatValue$$1_item$$18$$ instanceof window.Object ? ($chartItem$$.y = $floatValue$$1_item$$18$$.value, $floatValue$$1_item$$18$$.date && ($chartItem$$.x = $floatValue$$1_item$$18$$.date, $chartOptions$$1$$.timeAxisType = "enabled"), "on" == $floatValue$$1_item$$18$$.markerDisplayed && ($chartItem$$.markerDisplayed = "on"), $floatValue$$1_item$$18$$.color && ($chartItem$$.color = $floatValue$$1_item$$18$$.color), $floatValue$$1_item$$18$$.borderColor && ($chartItem$$.borderColor = $floatValue$$1_item$$18$$.borderColor), 
    $floatValue$$1_item$$18$$.markerShape && ($chartItem$$.markerShape = $floatValue$$1_item$$18$$.markerShape), $floatValue$$1_item$$18$$.markerSize && ($chartItem$$.markerSize = $floatValue$$1_item$$18$$.markerSize), $bFloatingBar$$ && ($floatValue$$1_item$$18$$ = $floatValue$$1_item$$18$$.floatValue, (0,window.isNaN)($floatValue$$1_item$$18$$) && ($floatValue$$1_item$$18$$ = 0), $floatItems$$.push($floatValue$$1_item$$18$$))) : ($chartItem$$.y = $floatValue$$1_item$$18$$, $bFloatingBar$$ && $floatItems$$.push(0));
    $barSpacing_chartItems$$.push($chartItem$$);
    $highValue$$ < $chartItem$$.y && ($highValue$$ = $chartItem$$.y, $highIndex$$ = $i$$465$$);
    $lowValue$$ > $chartItem$$.y && ($lowValue$$ = $chartItem$$.y, $lowIndex$$ = $i$$465$$)
  }
  $options$$80$$.highColor && 0 <= $highIndex$$ && ($barSpacing_chartItems$$[$highIndex$$].markerDisplayed = "on", $barSpacing_chartItems$$[$highIndex$$].color || ($barSpacing_chartItems$$[$highIndex$$].color = $options$$80$$.highColor));
  $options$$80$$.lowColor && 0 <= $lowIndex$$ && ($barSpacing_chartItems$$[$lowIndex$$].markerDisplayed = "on", $barSpacing_chartItems$$[$lowIndex$$].color || ($barSpacing_chartItems$$[$lowIndex$$].color = $options$$80$$.lowColor));
  $options$$80$$.firstColor && 0 < $barSpacing_chartItems$$.length && ($barSpacing_chartItems$$[0].markerDisplayed = "on", $barSpacing_chartItems$$[0].color || ($barSpacing_chartItems$$[0].color = $options$$80$$.firstColor));
  $options$$80$$.lastColor && 0 < $barSpacing_chartItems$$.length && ($barSpacing_chartItems$$[$barSpacing_chartItems$$.length - 1].markerDisplayed = "on", $barSpacing_chartItems$$[$barSpacing_chartItems$$.length - 1].color || ($barSpacing_chartItems$$[$barSpacing_chartItems$$.length - 1].color = $options$$80$$.lastColor));
  $chartOptions$$1$$.series = [{items:$barSpacing_chartItems$$}];
  $bFloatingBar$$ && $chartOptions$$1$$.series.splice(0, 0, {items:$floatItems$$, color:"rgba(0, 0, 0, 0)"});
  $options$$80$$.referenceObjects && ($chartOptions$$1$$.yAxis.referenceObjects = $options$$80$$.referenceObjects);
  $chartOptions$$1$$.__spark = D.$JSCompiler_alias_TRUE$$;
  $barSpacing_chartItems$$ = $options$$80$$.barSpacing;
  "auto" == $barSpacing_chartItems$$ && ($barSpacing_chartItems$$ = 1 < D.$DvtAgent$$.$getDevicePixelRatio$() ? "subpixel" : "pixel");
  $chartOptions$$1$$.__sparkBarSpacing = $barSpacing_chartItems$$;
  $chartOptions$$1$$.type = $options$$80$$.type;
  $chartOptions$$1$$.animationOnDataChange = $options$$80$$.animationOnDataChange;
  $chartOptions$$1$$.animationOnDisplay = $options$$80$$.animationOnDisplay;
  $chartOptions$$1$$.emptyText = $options$$80$$.emptyText;
  $chartOptions$$1$$.styleDefaults.colors = [$options$$80$$.color];
  $chartOptions$$1$$.styleDefaults.animationDuration = $options$$80$$.animationDuration;
  $chartOptions$$1$$.styleDefaults.animationIndicators = "none";
  $chartOptions$$1$$.styleDefaults.lineWidth = $options$$80$$.lineWidth;
  $chartOptions$$1$$.styleDefaults.lineStyle = $options$$80$$.lineStyle;
  $chartOptions$$1$$.styleDefaults.markerSize = $options$$80$$.markerSize;
  $chartOptions$$1$$.styleDefaults.markerShape = $options$$80$$.markerShape;
  $chartOptions$$1$$.styleDefaults.barGapRatio = $options$$80$$.barGapRatio;
  $chartOptions$$1$$.styleDefaults.seriesTooltipType = "none";
  $chartOptions$$1$$.styleDefaults.groupTooltipType = "none";
  $chartOptions$$1$$.styleDefaults.valueTooltipType = "none";
  $chartOptions$$1$$.xAxis.rendered = "off";
  $chartOptions$$1$$.yAxis.baselineScaling = $options$$80$$.baselineScaling;
  $chartOptions$$1$$.yAxis.rendered = "off";
  $bFloatingBar$$ && ($chartOptions$$1$$.type = "bar", $chartOptions$$1$$.stack = "on");
  $chartOptions$$1$$.styleDefaults.seriesEffect = "none" == $options$$80$$.visualEffects || "area" != $options$$80$$.type ? "color" : "gradient";
  $chartOptions$$1$$.layout = {gapRatio:0};
  $chartOptions$$1$$.legend = {rendered:"off"};
  $chartOptions$$1$$.title = $chartOptions$$1$$.title ? $chartOptions$$1$$.title : {};
  $chartOptions$$1$$.title.style = "font-size: 12px; color: #404259;";
  return $chartOptions$$1$$
};
});