define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGraphSelectableArc$$ = function $$DvtGraphSelectableArc$$$($context$$667$$, $cx$$45$$, $cy$$46$$, $rx$$36$$, $ry$$32$$, $sa$$14$$, $ae$$9$$, $clos$$2$$, $id$$276$$) {
  this.Init($context$$667$$, $cx$$45$$, $cy$$46$$, $rx$$36$$, $ry$$32$$, $sa$$14$$, $ae$$9$$, $clos$$2$$, $id$$276$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectableArc$$, D.$DvtArc$$, "DvtGraphSelectableArc");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectableArc$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$668$$, $cx$$46$$, $cy$$47$$, $rx$$37$$, $ry$$33$$, $sa$$15$$, $ae$$10$$, $clos$$3$$, $id$$277$$) {
  D.$DvtGraphSelectableArc$$.$superclass$.Init.call(this, $context$$668$$, $cx$$46$$, $cy$$47$$, $rx$$37$$, $ry$$33$$, $sa$$15$$, $ae$$10$$, $clos$$3$$, $id$$277$$);
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
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$12$$) {
  this.$_bHover$ != $bOver$$12$$ && (this.$_bHover$ = $bOver$$12$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$3$$) {
  this.$_bSelected$ != $bSel$$3$$ && (this.$_bSelected$ = $bSel$$3$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$12$$, $innerColor$$9$$, $outerColor$$9$$) {
  this.$_dataColor$ = $dataColor$$12$$;
  this.$_innerColor$ = $innerColor$$9$$;
  this.$_outerColor$ = $outerColor$$9$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePath$$ = function $$DvtGraphSelectablePath$$$($context$$663$$, $cmds$$22$$, $id$$272$$) {
  this.Init($context$$663$$, $cmds$$22$$, $id$$272$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePath$$, D.$DvtPath$$, "DvtGraphSelectablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$664$$, $cmds$$23$$, $id$$273$$) {
  D.$DvtGraphSelectablePath$$.$superclass$.Init.call(this, $context$$664$$, $cmds$$23$$, $id$$273$$);
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
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$10$$) {
  this.$_bHover$ != $bOver$$10$$ && (this.$_bHover$ = $bOver$$10$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$1$$) {
  this.$_bSelected$ != $bSel$$1$$ && (this.$_bSelected$ = $bSel$$1$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$10$$, $innerColor$$7$$, $outerColor$$7$$) {
  this.$_dataColor$ = $dataColor$$10$$;
  this.$_innerColor$ = $innerColor$$7$$;
  this.$_outerColor$ = $outerColor$$7$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePolygon$$ = function $$DvtGraphSelectablePolygon$$$($color$$80$$, $context$$665$$, $arPoints$$29$$, $id$$274$$) {
  this.Init($color$$80$$, $context$$665$$, $arPoints$$29$$, $id$$274$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePolygon$$, D.$DvtPolygon$$, "DvtGraphSelectablePolygon");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePolygon$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$666$$, $arPoints$$30$$, $id$$275$$) {
  D.$DvtGraphSelectablePolygon$$.$superclass$.Init.call(this, $context$$666$$, $arPoints$$30$$, $id$$275$$);
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
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$11$$) {
  this.$_bHover$ != $bOver$$11$$ && (this.$_bHover$ = $bOver$$11$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$2$$) {
  this.$_bSelected$ != $bSel$$2$$ && (this.$_bSelected$ = $bSel$$2$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$11$$, $innerColor$$8$$, $outerColor$$8$$) {
  this.$_dataColor$ = $dataColor$$11$$;
  this.$_innerColor$ = $innerColor$$8$$;
  this.$_outerColor$ = $outerColor$$8$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartBar$$ = function $$DvtChartBar$$$($context$$526$$, $bHoriz$$, $bStacked$$, $axisCoord$$, $baselineCoord$$, $endCoord$$2$$, $x1$$26$$, $x2$$23$$) {
  this.Init($context$$526$$);
  this.$_bHoriz$ = $bHoriz$$;
  this.$_bStacked$ = $bStacked$$;
  this.$_axisCoord$ = $axisCoord$$;
  this.$_setBarCoords$($baselineCoord$$, $endCoord$$2$$, $x1$$26$$, $x2$$23$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartBar$$, D.$DvtPolygon$$, "DvtChartBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$41$$, $stroke$$69$$, $dataColor$$3$$, $innerColor$$2$$, $outerColor$$2$$) {
  this.$_fill$ = $fill$$41$$;
  this.$_stroke$ = $stroke$$69$$;
  this.$_hoverColor$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$3$$);
  this.$_innerColor$ = $innerColor$$2$$;
  this.$_outerColor$ = $outerColor$$2$$;
  this.$setFill$($fill$$41$$);
  $stroke$$69$$ && this.$setStroke$($stroke$$69$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_hoverColor$, this.$isSelected$() ? this.$_innerColor$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$11$$) {
  this.$IsSelected$ != $selected$$11$$ && (this.$IsSelected$ = $selected$$11$$, this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : D.$JSCompiler_alias_NULL$$))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$23$$, $indicator$$) {
  this.$_setBarCoords$($params$$23$$[0], $params$$23$$[1], $params$$23$$[2], $params$$23$$[3]);
  if($indicator$$) {
    var $indicatorPosition_x$$inline_4985$$, $widthCoord$$inline_4984_y$$inline_4986$$ = (this.$_x1$ + this.$_x2$) / 2, $lengthCoord$$inline_4988_midLength$$inline_4987$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + 8 : this.$_endCoord$ - 8;
    $indicatorPosition_x$$inline_4985$$ = this.$_bHoriz$ ? $lengthCoord$$inline_4988_midLength$$inline_4987$$ : $widthCoord$$inline_4984_y$$inline_4986$$;
    $widthCoord$$inline_4984_y$$inline_4986$$ = this.$_bHoriz$ ? $widthCoord$$inline_4984_y$$inline_4986$$ : $lengthCoord$$inline_4988_midLength$$inline_4987$$;
    $indicatorPosition_x$$inline_4985$$ = new D.$DvtPoint$$($indicatorPosition_x$$inline_4985$$, $widthCoord$$inline_4984_y$$inline_4986$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$, $indicatorPosition_x$$inline_4985$$.x, $indicatorPosition_x$$inline_4985$$.y);
    $indicator$$.getParent().$addChild$($indicator$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$65_nodePlayable$$) {
  var $endState$$3$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
  $duration$$65_nodePlayable$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$65_nodePlayable$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$65_nodePlayable$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$3$$);
  return $duration$$65_nodePlayable$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$66_nodePlayable$$1$$) {
  var $endState$$4$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$66_nodePlayable$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$66_nodePlayable$$1$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$66_nodePlayable$$1$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$4$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$66_nodePlayable$$1$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$66_nodePlayable$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$67_nodePlayable$$2$$) {
  this.$setAlpha$(0);
  $duration$$67_nodePlayable$$2$$ = this.$getDisplayAnimation$($duration$$67_nodePlayable$$2$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$67_nodePlayable$$2$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$67_nodePlayable$$2$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$1$$, $endCoord$$3$$, $x1$$27$$, $x2$$24$$) {
  this.$_baselineCoord$ = $baselineCoord$$1$$;
  this.$_endCoord$ = $endCoord$$3$$;
  this.$_x1$ = $x1$$27$$;
  this.$_x2$ = $x2$$24$$;
  this.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this));
  this.$_outerChild$ && this.$_outerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 2));
  this.$_innerChild$ && this.$_innerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 3.5))
};
D.$JSCompiler_StaticMethods__createPointsArray$$ = function $$JSCompiler_StaticMethods__createPointsArray$$$($JSCompiler_StaticMethods__createPointsArray$self$$, $inset$$) {
  var $baselineCoord$$2$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_baselineCoord$, $endCoord$$4$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_endCoord$, $x1$$28$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x1$, $x2$$25$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x2$;
  if(0 < $inset$$) {
    if(window.Math.abs($x1$$28$$ - $x2$$25$$) < 2 * $inset$$ || window.Math.abs($baselineCoord$$2$$ - $endCoord$$4$$) < 2 * $inset$$) {
      return[]
    }
    $x1$$28$$ += $inset$$;
    $x2$$25$$ -= $inset$$;
    $endCoord$$4$$ < $baselineCoord$$2$$ ? ($baselineCoord$$2$$ -= $inset$$, $endCoord$$4$$ += $inset$$) : ($baselineCoord$$2$$ += $inset$$, $endCoord$$4$$ -= $inset$$)
  }
  return $JSCompiler_StaticMethods__createPointsArray$self$$.$_bHoriz$ ? [$endCoord$$4$$, $x1$$28$$, $endCoord$$4$$, $x2$$25$$, $baselineCoord$$2$$, $x2$$25$$, $baselineCoord$$2$$, $x1$$28$$] : [$x1$$28$$, $endCoord$$4$$, $x2$$25$$, $endCoord$$4$$, $x2$$25$$, $baselineCoord$$2$$, $x1$$28$$, $baselineCoord$$2$$]
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
  var $x$$250$$ = window.Math.min(this.$_x2$, this.$_x1$), $y$$221$$ = window.Math.min(this.$_endCoord$, this.$_baselineCoord$), $w$$69$$ = window.Math.abs(this.$_x2$ - this.$_x1$), $h$$68$$ = window.Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
  return this.$_bHoriz$ ? new D.$DvtRectangle$$($y$$221$$, $x$$250$$, $h$$68$$, $w$$69$$) : new D.$DvtRectangle$$($x$$250$$, $y$$221$$, $w$$69$$, $h$$68$$)
};
D.$DvtChartBar$$.prototype.$getDimensionsSelf$ = function $$DvtChartBar$$$$$getDimensionsSelf$$($targetCoordinateSpace$$28$$) {
  return(0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$getBoundingBox$(), $targetCoordinateSpace$$28$$)
};
D.$DvtChartLineMarker$$ = function $$DvtChartLineMarker$$$($context$$525$$, $type$$164$$, $x$$248$$, $y$$219$$, $size$$25$$) {
  this.Init($context$$525$$, $type$$164$$, D.$JSCompiler_alias_NULL$$, $x$$248$$, $y$$219$$, $size$$25$$, $size$$25$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineMarker$$, D.$DvtMarker$$, "DvtChartLineMarker");
D.$DvtChartLineMarker$_SELECTED_FILL$$ = new D.$DvtSolidFill$$("#FFFFFF");
D.$DvtChartLineMarker$_SELECTED_STROKE$$ = new D.$DvtSolidStroke$$("#5A5A5A", 1, 1.5);
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$2$$) {
  this.$_dataColor$ = $dataColor$$2$$;
  this.$_hoverStroke$ = new D.$DvtSolidStroke$$($dataColor$$2$$, 1, 1.5)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$setStroke$(this.$_hoverStroke$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$setStroke$(this.$isSelected$() ? D.$DvtChartLineMarker$_SELECTED_STROKE$$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$10$$) {
  this.$IsSelected$ != $selected$$10$$ && (this.$IsSelected$ = $selected$$10$$, this.$isSelected$() ? (this.$setFill$(D.$DvtChartLineMarker$_SELECTED_FILL$$), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$DvtChartLineMarker$_SELECTED_STROKE$$)) : ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$JSCompiler_alias_NULL$$)))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartPolarBar$$ = function $$DvtChartPolarBar$$$($context$$527$$, $axisCoord$$1$$, $baselineCoord$$3$$, $endCoord$$5$$, $x1$$29$$, $x2$$26$$, $availSpace$$39$$) {
  this.Init($context$$527$$);
  this.$_axisCoord$ = $axisCoord$$1$$;
  this.$_availSpace$ = $availSpace$$39$$.clone();
  this.$_bbox$ = D.$JSCompiler_alias_NULL$$;
  this.$_setBarCoords$($baselineCoord$$3$$, $endCoord$$5$$, $x1$$29$$, $x2$$26$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartPolarBar$$, D.$DvtGraphSelectablePath$$, "DvtChartPolarBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartPolarBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$42$$, $stroke$$71$$, $dataColor$$4$$, $innerColor$$4$$, $outerColor$$4$$) {
  this.$setFill$($fill$$42$$);
  this.$setStroke$($stroke$$71$$);
  this.$setDataColor$($dataColor$$4$$, $innerColor$$4$$, $outerColor$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$26$$) {
  this.$_setBarCoords$($params$$26$$[0], $params$$26$$[1], $params$$26$$[2], $params$$26$$[3])
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$68_nodePlayable$$3$$) {
  var $endState$$6$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
  $duration$$68_nodePlayable$$3$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$68_nodePlayable$$3$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$68_nodePlayable$$3$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$6$$);
  return $duration$$68_nodePlayable$$3$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$69_nodePlayable$$4$$) {
  var $endState$$7$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$69_nodePlayable$$4$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$69_nodePlayable$$4$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$69_nodePlayable$$4$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$7$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$69_nodePlayable$$4$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$69_nodePlayable$$4$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$70_nodePlayable$$5$$) {
  this.$setAlpha$(0);
  var $endState$$8$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
  $duration$$70_nodePlayable$$5$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$70_nodePlayable$$5$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$70_nodePlayable$$5$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$8$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$70_nodePlayable$$5$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$70_nodePlayable$$5$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$4$$, $endCoord$$6$$, $x1$$30$$, $x2$$27$$) {
  var $inner1_maxY$$5$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$4$$, $x1$$30$$, this.$_availSpace$), $inner2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$4$$, $x2$$27$$, this.$_availSpace$), $outer1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$6$$, $x1$$30$$, this.$_availSpace$), $outer2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$6$$, $x2$$27$$, this.$_availSpace$), $cmds$$19_minX$$8$$ = window.DvtPathUtils.moveTo($inner1_maxY$$5$$.x, 
  $inner1_maxY$$5$$.y) + window.DvtPathUtils.arcTo($baselineCoord$$4$$, $baselineCoord$$4$$, $x2$$27$$ - $x1$$30$$, 1, $inner2$$.x, $inner2$$.y) + window.DvtPathUtils.lineTo($outer2$$.x, $outer2$$.y) + window.DvtPathUtils.arcTo($endCoord$$6$$, $endCoord$$6$$, $x2$$27$$ - $x1$$30$$, 0, $outer1$$.x, $outer1$$.y) + window.DvtPathUtils.lineTo($inner1_maxY$$5$$.x, $inner1_maxY$$5$$.y) + window.DvtPathUtils.closePath();
  this.$setCmds$($cmds$$19_minX$$8$$);
  var $cmds$$19_minX$$8$$ = window.Math.min($inner1_maxY$$5$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $maxX$$5$$ = window.Math.max($inner1_maxY$$5$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $minY$$8$$ = window.Math.min($inner1_maxY$$5$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y), $inner1_maxY$$5$$ = window.Math.max($inner1_maxY$$5$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y);
  this.$_bbox$ = new D.$DvtRectangle$$($cmds$$19_minX$$8$$, $minY$$8$$, $maxX$$5$$ - $cmds$$19_minX$$8$$, $inner1_maxY$$5$$ - $minY$$8$$);
  this.$_baselineCoord$ = $baselineCoord$$4$$;
  this.$_endCoord$ = $endCoord$$6$$;
  this.$_x1$ = $x1$$30$$;
  this.$_x2$ = $x2$$27$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = (0,D.$JSCompiler_get$$)("$_bbox$");
D.$DvtFunnelSlice$$ = function $$DvtFunnelSlice$$$($chart$$3$$, $seriesIndex$$3$$, $numDrawnSeries$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$7$$) {
  this.Init($chart$$3$$, $seriesIndex$$3$$, $numDrawnSeries$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelSlice$$, D.$DvtPath$$, "DvtFunnelSlice");
D.$DvtFunnelSlice$$.prototype.Init = function $$DvtFunnelSlice$$$$Init$($chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$, $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$, $barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$, $backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$, 
$funnelHeight$$1_shapeForSelection$$inline_5090$$, $startPercent$$1$$, $valuePercent$$1$$, $fillPercent$$1$$, $gap$$8$$) {
  D.$DvtFunnelSlice$$.$superclass$.Init.call(this, $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$.$_context$);
  this.$_chart$ = $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$;
  this.$_seriesIndex$ = $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$;
  this.$_numDrawnSeries$ = $barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$;
  this.$_funnelWidth$ = $backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$;
  this.$_funnelHeight$ = $funnelHeight$$1_shapeForSelection$$inline_5090$$;
  this.$_startPercent$ = $startPercent$$1$$;
  this.$_valuePercent$ = $valuePercent$$1$$;
  this.$_fillPercent$ = $fillPercent$$1$$;
  this.$_gap$ = $gap$$8$$;
  $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$_dataColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
  this.$_backgroundColor$ = $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$.$getOptions$().styleDefaults.backgroundColor;
  this.$_backgroundColor$ || (this.$_backgroundColor$ = D.$DvtFunnelSlice$_BACKGROUND_COLOR$$);
  this.$setCmds$($JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.slice);
  $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.bar && (this.$_bar$ = new D.$DvtPath$$(this.$_context$, $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  $backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$ = $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.sliceBounds;
  $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$);
  $barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
  $backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$, D.$JSCompiler_alias_TRUE$$);
  this.$_bar$ ? (this.$setFill$($backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$), this.$_bar$.$setFill$($chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$)) : this.$setFill$($chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$);
  this.$setSolidStroke$($barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$ != D.$JSCompiler_alias_NULL$$ ? $barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$ : "#FFFFFF");
  this.$OriginalStroke$ = this.$getStroke$();
  this.$_chart$.$isSelectionSupported$() && ($chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$(this.$_dataColor$), $barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$ = 
  D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $funnelHeight$$1_shapeForSelection$$inline_5090$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $funnelHeight$$1_shapeForSelection$$inline_5090$$.$setHoverStroke$(new D.$DvtSolidStroke$$($chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$, 1, 2)), $funnelHeight$$1_shapeForSelection$$inline_5090$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$, 
  1, 1.5), new D.$DvtSolidStroke$$($backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$, 1, 4.5)), $funnelHeight$$1_shapeForSelection$$inline_5090$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$, 1, 1.5), new D.$DvtSolidStroke$$($chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$, 
  1, 4.5)), this.setCursor("pointer"));
  a: {
    $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$ = $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.sliceBounds;
    $barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$ = $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.barBounds;
    if($JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$)) {
      if($JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$ = new D.$DvtOutputText$$(this.$_context$, $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$, 0, 0), D.$DvtTextUtils$$.$fitText$($JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$, $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$.$h$, $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$.$w$, 
      this, 3)) {
        $backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$ = $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.$measureDimensions$();
        $barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0) != D.$JSCompiler_alias_NULL$$ ? "#0000000" : (0,D.$JSCompiler_StaticMethods_containsPoint$$)($barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$, $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$.x, 
        $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$.y + ($chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$.$h$ - $backgroundFill$$inline_5086_funnelWidth$$1_outerColor$$inline_5089_sliceBounds$$inline_5083_textDim$$inline_5097$$.$w$) / 2) ? D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_dataColor$) : D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_backgroundColor$);
        $barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$ = [new D.$DvtCSSStyle$$("color: " + $barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$ + ";"), this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle, new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)];
        $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($barBounds$$inline_5094_innerColor$$inline_5088_labelColor$$inline_5098_labelStyleArray$$inline_5099_numDrawnSeries$$1_sliceBorder$$inline_5085$$));
        $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $chart$$4_hoverColor$$inline_5087_sliceBounds$$inline_5093_sliceFill$$inline_5084$$));
        $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.$alignCenter$();
        $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$.$alignMiddle$();
        break a
      }
    }
    $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$ = D.$JSCompiler_alias_VOID$$
  }
  this.$_label$ = $JSCompiler_inline_result$$467_cmds$$17_label$$inline_5096_labelString$$inline_5095_seriesIndex$$4$$;
  this.$_label$ != D.$JSCompiler_alias_NULL$$ && (this.$_label$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$addChild$(this.$_label$))
};
D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ = D.$DvtMath$$.$degreesToRads$(31);
D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ = D.$DvtMath$$.$degreesToRads$(29);
D.$DvtFunnelSlice$_FUNNEL_RATIO$$ = 6 / 22;
D.$DvtFunnelSlice$_BACKGROUND_COLOR$$ = "#EDEDED";
D.$JSCompiler_StaticMethods__getPath$$ = function $$JSCompiler_StaticMethods__getPath$$$($JSCompiler_StaticMethods__getPath$self_alpha$$36$$) {
  var $is3D_rx$$27$$ = "on" == $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $isBiDi$$8$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_context$), $gapCount_ry$$27$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_chart$), $ar$$34_offset$$25$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_numDrawnSeries$ + 
  1) * $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_gap$;
  if($is3D_rx$$27$$) {
    var $is3D_rx$$27$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - $gapCount_ry$$27$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$27$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$), $ratio$$8$$ = 0.12 * ($JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelHeight$), 
    $delta$$14_pathCommands$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_startPercent$), $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_valuePercent$), $c1$$2_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelHeight$ + $gapCount_ry$$27$$, 
    $c2$$2$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelHeight$ - $gapCount_ry$$27$$, $arcDir1$$ = 1, $arcDir2$$ = 0;
    $isBiDi$$8$$ ? ($ar$$34_offset$$25$$ = [$is3D_rx$$27$$ * window.Math.sin($delta$$14_pathCommands$$) + $ar$$34_offset$$25$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$27$$ * window.Math.cos($delta$$14_pathCommands$$), $is3D_rx$$27$$ * window.Math.sin($barCommands_gamma$$) + $ar$$34_offset$$25$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$27$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$27$$ * window.Math.sin($barCommands_gamma$$) + $ar$$34_offset$$25$$, $c2$$2$$ + $gapCount_ry$$27$$ * window.Math.cos($barCommands_gamma$$), 
    $is3D_rx$$27$$ * window.Math.sin($delta$$14_pathCommands$$) + $ar$$34_offset$$25$$, $c2$$2$$ + $gapCount_ry$$27$$ * window.Math.cos($delta$$14_pathCommands$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$34_offset$$25$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - $ar$$34_offset$$25$$ - $is3D_rx$$27$$ * window.Math.sin($delta$$14_pathCommands$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$27$$ * window.Math.cos($delta$$14_pathCommands$$), $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - 
    $ar$$34_offset$$25$$ - $is3D_rx$$27$$ * window.Math.sin($barCommands_gamma$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$27$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - $ar$$34_offset$$25$$ - $is3D_rx$$27$$ * window.Math.sin($barCommands_gamma$$), $c2$$2$$ + $gapCount_ry$$27$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - $ar$$34_offset$$25$$ - $is3D_rx$$27$$ * window.Math.sin($delta$$14_pathCommands$$), 
    $c2$$2$$ + $gapCount_ry$$27$$ * window.Math.cos($delta$$14_pathCommands$$)];
    $delta$$14_pathCommands$$ = window.DvtPathUtils.moveTo($ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[1]);
    $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$;
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($ratio$$8$$ * ($ar$$34_offset$$25$$[1] - $ar$$34_offset$$25$$[7]) / 2, ($ar$$34_offset$$25$$[1] - $ar$$34_offset$$25$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$34_offset$$25$$[6], $ar$$34_offset$$25$$[7]);
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($ratio$$8$$ * ($ar$$34_offset$$25$$[1] - $ar$$34_offset$$25$$[7]) / 2, ($ar$$34_offset$$25$$[1] - $ar$$34_offset$$25$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[1]);
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$27$$, $gapCount_ry$$27$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$34_offset$$25$$[2], $ar$$34_offset$$25$$[3]);
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($ratio$$8$$ * ($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]) / 2, ($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]) / 2, window.Math.PI, $arcDir2$$, $ar$$34_offset$$25$$[4], $ar$$34_offset$$25$$[5]);
    $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$27$$, $gapCount_ry$$27$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$34_offset$$25$$[6], $ar$$34_offset$$25$$[7]);
    $c1$$2_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[2]), $ar$$34_offset$$25$$[5], window.Math.abs($ar$$34_offset$$25$$[0] - $ar$$34_offset$$25$$[2]), window.Math.abs($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]));
    if($JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$) {
      var $barBounds_percent$$4$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_fillPercent$, 1), 0);
      $JSCompiler_StaticMethods__getPath$self_alpha$$36$$ = $isBiDi$$8$$ ? -$barBounds_percent$$4$$ * window.Math.PI : $barBounds_percent$$4$$ * window.Math.PI;
      $barCommands_gamma$$ = window.DvtPathUtils.moveTo($ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[1]);
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$27$$, $gapCount_ry$$27$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$34_offset$$25$$[2], $ar$$34_offset$$25$$[3]);
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($ratio$$8$$ * ($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]) / 2, ($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$36$$, $arcDir2$$, $ar$$34_offset$$25$$[2] + $ratio$$8$$ * ($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$36$$), ($ar$$34_offset$$25$$[5] + $ar$$34_offset$$25$$[3]) / 2 + ($ar$$34_offset$$25$$[3] - 
      $ar$$34_offset$$25$$[5]) / 2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$36$$));
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$27$$, $gapCount_ry$$27$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$34_offset$$25$$[6] + $ratio$$8$$ * ($ar$$34_offset$$25$$[1] - $ar$$34_offset$$25$$[7]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$36$$), ($ar$$34_offset$$25$$[7] + $ar$$34_offset$$25$$[1]) / 2 + ($ar$$34_offset$$25$$[1] - $ar$$34_offset$$25$$[7]) / 2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$36$$));
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($ratio$$8$$ * ($ar$$34_offset$$25$$[1] - $ar$$34_offset$$25$$[7]) / 2, ($ar$$34_offset$$25$$[1] - $ar$$34_offset$$25$$[7]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$36$$, $arcDir1$$, $ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[1]);
      $barBounds_percent$$4$$ = new D.$DvtRectangle$$(window.Math.min($ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[2]), $ar$$34_offset$$25$$[5] + window.Math.abs($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]) * (1 - $barBounds_percent$$4$$), window.Math.abs($ar$$34_offset$$25$$[0] - $ar$$34_offset$$25$$[2]), window.Math.abs($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]) * $barBounds_percent$$4$$)
    }
  }else {
    $is3D_rx$$27$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - $gapCount_ry$$27$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$27$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $delta$$14_pathCommands$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_startPercent$), 
    $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_valuePercent$), $c1$$2_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelHeight$ + $gapCount_ry$$27$$, $c2$$2$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelHeight$ - $gapCount_ry$$27$$, 
    $arcDir1$$ = 1, $arcDir2$$ = 0, $isBiDi$$8$$ ? ($ar$$34_offset$$25$$ = [$is3D_rx$$27$$ * window.Math.sin($delta$$14_pathCommands$$) + $ar$$34_offset$$25$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$27$$ * window.Math.cos($delta$$14_pathCommands$$), $is3D_rx$$27$$ * window.Math.sin($barCommands_gamma$$) + $ar$$34_offset$$25$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$27$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$27$$ * window.Math.sin($barCommands_gamma$$) + $ar$$34_offset$$25$$, $c2$$2$$ + $gapCount_ry$$27$$ * 
    window.Math.cos($barCommands_gamma$$), $is3D_rx$$27$$ * window.Math.sin($delta$$14_pathCommands$$) + $ar$$34_offset$$25$$, $c2$$2$$ + $gapCount_ry$$27$$ * window.Math.cos($delta$$14_pathCommands$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$34_offset$$25$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - $ar$$34_offset$$25$$ - $is3D_rx$$27$$ * window.Math.sin($delta$$14_pathCommands$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$27$$ * window.Math.cos($delta$$14_pathCommands$$), 
    $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - $ar$$34_offset$$25$$ - $is3D_rx$$27$$ * window.Math.sin($barCommands_gamma$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$27$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - $ar$$34_offset$$25$$ - $is3D_rx$$27$$ * window.Math.sin($barCommands_gamma$$), $c2$$2$$ + $gapCount_ry$$27$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_funnelWidth$ - 
    $ar$$34_offset$$25$$ - $is3D_rx$$27$$ * window.Math.sin($delta$$14_pathCommands$$), $c2$$2$$ + $gapCount_ry$$27$$ * window.Math.cos($delta$$14_pathCommands$$)], $delta$$14_pathCommands$$ = window.DvtPathUtils.moveTo($ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[1]), $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$, $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$27$$, $gapCount_ry$$27$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$34_offset$$25$$[2], $ar$$34_offset$$25$$[3]), 
    $delta$$14_pathCommands$$ += window.DvtPathUtils.lineTo($ar$$34_offset$$25$$[4], $ar$$34_offset$$25$$[5]), $delta$$14_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$27$$, $gapCount_ry$$27$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$34_offset$$25$$[6], $ar$$34_offset$$25$$[7]), $delta$$14_pathCommands$$ += window.DvtPathUtils.closePath(), $c1$$2_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[2]), $ar$$34_offset$$25$$[5], 
    window.Math.abs($ar$$34_offset$$25$$[0] - $ar$$34_offset$$25$$[2]), window.Math.abs($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5])), $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ && ($barBounds_percent$$4$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_fillPercent$, 1), 0), $barCommands_gamma$$ = window.DvtPathUtils.moveTo($ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[1]), $barCommands_gamma$$ += 
    window.DvtPathUtils.arcTo($is3D_rx$$27$$, $gapCount_ry$$27$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$34_offset$$25$$[2], $ar$$34_offset$$25$$[3]), $barCommands_gamma$$ += window.DvtPathUtils.lineTo($ar$$34_offset$$25$$[4], $ar$$34_offset$$25$$[3] + $barBounds_percent$$4$$ * ($ar$$34_offset$$25$$[5] - $ar$$34_offset$$25$$[3])), $barCommands_gamma$$ = 0.95 < $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_fillPercent$ ? $barCommands_gamma$$ + window.DvtPathUtils.arcTo($is3D_rx$$27$$, 
    $gapCount_ry$$27$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$34_offset$$25$$[6], $ar$$34_offset$$25$$[1] + $barBounds_percent$$4$$ * ($ar$$34_offset$$25$$[7] - $ar$$34_offset$$25$$[1])) : 0.05 > $JSCompiler_StaticMethods__getPath$self_alpha$$36$$.$_fillPercent$ ? $barCommands_gamma$$ + window.DvtPathUtils.arcTo($is3D_rx$$27$$, $gapCount_ry$$27$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir2$$, $ar$$34_offset$$25$$[6], $ar$$34_offset$$25$$[1] + $barBounds_percent$$4$$ * ($ar$$34_offset$$25$$[7] - 
    $ar$$34_offset$$25$$[1])) : $barCommands_gamma$$ + window.DvtPathUtils.lineTo($ar$$34_offset$$25$$[6], $ar$$34_offset$$25$$[1] + $barBounds_percent$$4$$ * ($ar$$34_offset$$25$$[7] - $ar$$34_offset$$25$$[1])), $barCommands_gamma$$ += window.DvtPathUtils.closePath(), $barBounds_percent$$4$$ = new D.$DvtRectangle$$(window.Math.min($ar$$34_offset$$25$$[0], $ar$$34_offset$$25$$[2]), $ar$$34_offset$$25$$[5] + window.Math.abs($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]) * (1 - $barBounds_percent$$4$$), 
    window.Math.abs($ar$$34_offset$$25$$[0] - $ar$$34_offset$$25$$[2]), window.Math.abs($ar$$34_offset$$25$$[3] - $ar$$34_offset$$25$$[5]) * $barBounds_percent$$4$$))
  }
  return{slice:$delta$$14_pathCommands$$, bar:$barCommands_gamma$$, sliceBounds:$c1$$2_sliceBounds$$, barBounds:$barCommands_gamma$$ ? $barBounds_percent$$4$$ : $c1$$2_sliceBounds$$}
};
D.$JSCompiler_StaticMethods__getSliceLabelPosition$$ = function $$JSCompiler_StaticMethods__getSliceLabelPosition$$$($JSCompiler_StaticMethods__getSliceLabelPosition$self$$, $sliceBounds$$2$$) {
  var $displacement$$ = "on" == $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? 0.12 * ($sliceBounds$$2$$.$h$ * $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelHeight$) / 2 : 0, $rotationMatrix$$ = new D.$DvtMatrix$$;
  D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_context$) ? ($rotationMatrix$$.rotate(window.Math.PI / 2), $rotationMatrix$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 - $displacement$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2)) : ($rotationMatrix$$.rotate(3 * window.Math.PI / 2), $rotationMatrix$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 + $displacement$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2));
  return $rotationMatrix$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtFunnelSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$()]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$35_cmds$$18$$) {
  this.$_startPercent$ = $ar$$35_cmds$$18$$[0];
  this.$_valuePercent$ = $ar$$35_cmds$$18$$[1];
  this.$_fillPercent$ = this.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ ? $ar$$35_cmds$$18$$[2] : D.$JSCompiler_alias_NULL$$;
  this.$setAlpha$($ar$$35_cmds$$18$$[3]);
  $ar$$35_cmds$$18$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$setCmds$($ar$$35_cmds$$18$$.slice);
  $ar$$35_cmds$$18$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($ar$$35_cmds$$18$$.bar);
  this.$_label$ && this.$_label$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $ar$$35_cmds$$18$$.sliceBounds))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$13$$) {
  if(this.$_bar$ != D.$JSCompiler_alias_NULL$$) {
    if(this.$IsSelected$ == $selected$$13$$) {
      return
    }
    this.$IsSelected$ = $selected$$13$$;
    this.$_bar$.$setSelected$($selected$$13$$)
  }else {
    D.$DvtFunnelSlice$$.$superclass$.$setSelected$.call(this, $selected$$13$$)
  }
  var $dims$$29$$ = this.$getDimensions$(), $shapeForSelection$$1$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $w$$70$$ = $dims$$29$$.$w$;
  $selected$$13$$ ? ($shapeForSelection$$1$$.$setScaleX$(($w$$70$$ - 3) / $w$$70$$), $shapeForSelection$$1$$.$setTranslateX$(window.Math.ceil(1.5) + 3 / $w$$70$$ * $dims$$29$$.x)) : ($shapeForSelection$$1$$.$setScaleX$(1), $shapeForSelection$$1$$.$setTranslateX$(0))
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
D.$DvtPieChart$$ = function $$DvtPieChart$$$($chart$$1$$, $availSpace$$37$$, $callback$$105$$, $callbackObj$$79$$) {
  this.Init($chart$$1$$, $availSpace$$37$$, $callback$$105$$, $callbackObj$$79$$)
};
D.$DvtPieChart$_THREED_TILT$$ = 0.59;
D.$DvtObj$$.$createSubclass$(D.$DvtPieChart$$, D.$DvtContainer$$, "DvtPieChart");
D.$DvtPieChart$$.prototype.Init = function $$DvtPieChart$$$$Init$($chart$$2$$, $availSpace$$38$$) {
  D.$DvtPieChart$$.$superclass$.Init.call(this, $chart$$2$$.$_context$);
  this.$chart$ = $chart$$2$$;
  this.$_options$ = $chart$$2$$.$getOptions$();
  this.$_frame$ = $availSpace$$38$$.clone();
  $chart$$2$$.$pieChart$ = this;
  this.$_labelPosition$ = this.$_options$.styleDefaults.sliceLabelPosition;
  "auto" == this.$_labelPosition$ && (this.$_labelPosition$ = "outside");
  this.$_center$ = new D.$DvtPoint$$($availSpace$$38$$.x + window.Math.floor($availSpace$$38$$.$w$ / 2), $availSpace$$38$$.y + window.Math.floor($availSpace$$38$$.$h$ / 2));
  var $radiusScale_slices$$inline_5016$$ = "outside" == this.$_labelPosition$ ? 0.38 : 0.45;
  this.$_radiusY$ = this.$_radiusX$ = window.Math.floor(window.Math.min($availSpace$$38$$.$w$, $availSpace$$38$$.$h$) * $radiusScale_slices$$inline_5016$$);
  this.$_depth$ = 0;
  this.$_anchorOffset$ = 90;
  (0,D.$JSCompiler_StaticMethods_is3D$$)(this) && (this.$_depth$ = 0.1 * $availSpace$$38$$.$h$, this.$_center$.y -= window.Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= D.$DvtPieChart$_THREED_TILT$$);
  for(var $radiusScale_slices$$inline_5016$$ = [], $seriesIndex$$inline_5019_slice$$inline_5017$$, $seriesIndices$$inline_5018$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$(this.$chart$), $otherValue$$inline_5020$$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$chart$), $i$$inline_5021$$ = 0;$i$$inline_5021$$ < $seriesIndices$$inline_5018$$.length;$i$$inline_5021$$++) {
    $seriesIndex$$inline_5019_slice$$inline_5017$$ = $seriesIndices$$inline_5018$$[$i$$inline_5021$$], D.$DvtChartStyleUtils$$.$isSeriesRendered$(this.$chart$, $seriesIndex$$inline_5019_slice$$inline_5017$$) && ($seriesIndex$$inline_5019_slice$$inline_5017$$ = new D.$DvtPieSlice$$(this, $seriesIndex$$inline_5019_slice$$inline_5017$$), 0 >= $seriesIndex$$inline_5019_slice$$inline_5017$$.getValue() || $radiusScale_slices$$inline_5016$$.push($seriesIndex$$inline_5019_slice$$inline_5017$$))
  }
  0 < $otherValue$$inline_5020$$ && $radiusScale_slices$$inline_5016$$.push(new D.$DvtPieSlice$$(this));
  D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && $radiusScale_slices$$inline_5016$$.reverse();
  this.$_slices$ = $radiusScale_slices$$inline_5016$$;
  this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtPieChart$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$DvtPieChart$$.prototype.$processEvent$ = function $$DvtPieChart$$$$$processEvent$$($bHide$$inline_5026_event$$396$$) {
  var $objs$$inline_5024_type$$165$$ = $bHide$$inline_5026_event$$396$$.$getType$();
  if($objs$$inline_5024_type$$165$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $objs$$inline_5024_type$$165$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    if($objs$$inline_5024_type$$165$$ = this.$_slices$, $bHide$$inline_5026_event$$396$$ && $objs$$inline_5024_type$$165$$) {
      var $category$$inline_5025$$ = $bHide$$inline_5026_event$$396$$.$_category$;
      $bHide$$inline_5026_event$$396$$ = $bHide$$inline_5026_event$$396$$.$getType$() === D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$;
      for(var $i$$inline_5027$$ = 0;$i$$inline_5027$$ < $objs$$inline_5024_type$$165$$.length;$i$$inline_5027$$++) {
        var $displayables$$inline_9582_obj$$inline_5028$$ = $objs$$inline_5024_type$$165$$[$i$$inline_5027$$];
        if($displayables$$inline_9582_obj$$inline_5028$$ && $displayables$$inline_9582_obj$$inline_5028$$.$getCategories$ && 0 <= D.$DvtArrayUtils$$.$getIndex$($displayables$$inline_9582_obj$$inline_5028$$.$getCategories$(), $category$$inline_5025$$)) {
          var $displayables$$inline_5029$$ = $displayables$$inline_9582_obj$$inline_5028$$.$getDisplayables$($displayables$$inline_5029$$), $displayables$$inline_9582_obj$$inline_5028$$ = $displayables$$inline_5029$$, $bVisible$$inline_9583$$ = !$bHide$$inline_5026_event$$396$$;
          if($displayables$$inline_9582_obj$$inline_5028$$) {
            for(var $i$$inline_9584$$ = 0;$i$$inline_9584$$ < $displayables$$inline_9582_obj$$inline_5028$$.length;$i$$inline_9584$$++) {
              $displayables$$inline_9582_obj$$inline_5028$$[$i$$inline_9584$$].$setVisible$($bVisible$$inline_9583$$)
            }
          }
        }
      }
    }
  }else {
    ("categoryRollOver" == $objs$$inline_5024_type$$165$$ || "categoryRollOut" == $objs$$inline_5024_type$$165$$) && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($bHide$$inline_5026_event$$396$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$highlight$ = function $$DvtPieChart$$$$$highlight$$($categories$$5$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$5$$, this.$_slices$)
};
(0,D.$goog$exportSymbol$$)("DvtPieChart.prototype.highlight", D.$DvtPieChart$$.prototype.$highlight$);
D.$DvtPieChart$$.prototype.$render$ = function $$DvtPieChart$$$$$render$$() {
  var $handler$$inline_5074_shadow$$6$$;
  this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$)), this.$addChild$(this.$_shapesContainer$), !(0,D.$JSCompiler_StaticMethods_is3D$$)(this) && "skyros" == this.$getSkin$() && ($handler$$inline_5074_shadow$$6$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(78, 87, 101, 0.45), 4, 7, 7, 54, 2, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)));
  var $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = this.$_slices$, $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = this.$_anchorOffset$, $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$, $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$, 
  $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ = 0, $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ = $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ ? $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$.length : 0;
  360 < $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ && ($anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ -= 360);
  0 > $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ && ($anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ += 360);
  var $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ = $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ = 0;
  0 < $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ && ($accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ = $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$[0].$_pieChart$.$getTotalValue$());
  for($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$ < $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$;$JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$++) {
    $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$ = $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$[$JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$], window.value = $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$.getValue(), $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ = 
    0 == $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ ? 0 : 100 * (window.Math.abs(window.value) / $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$), $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ *= 3.6, $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ -= 
    $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$, 0 > $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ && ($anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ += 360), $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$.$setAngleStart$($anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$), 
    $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$.$setAngleExtent$($angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$), $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$.$getAngleStart$()
  }
  for($i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = 0;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ < this.$_slices$.length;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$ = this.$_slices$[$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$];
    $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_bFillerSlice$ ? "color" : D.$DvtChartStyleUtils$$.$getSeriesEffect$($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_chart$);
    $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$getFillColor$();
    $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$getFillPattern$();
    $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$ = $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = D.$JSCompiler_alias_VOID$$;
    if("pattern" == $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ || $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ != D.$JSCompiler_alias_NULL$$) {
      $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = new D.$DvtPatternFill$$($accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$, $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$)
    }else {
      if("gradient" == $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$) {
        var $arRatios$$inline_5052_skin$$inline_5047$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_pieChart$.$getSkin$(), $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ = "skyros" == $arRatios$$inline_5052_skin$$inline_5047$$ ? 297 : 270, $arBounds$$inline_5053_style$$inline_5049$$ = !(0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_pieChart$) ? 
        "2D" : "3D", $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$), $arBounds$$inline_5053_style$$inline_5049$$, $arRatios$$inline_5052_skin$$inline_5047$$), $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ = 
        D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$), $arBounds$$inline_5053_style$$inline_5049$$), $arRatios$$inline_5052_skin$$inline_5047$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($arBounds$$inline_5053_style$$inline_5049$$, $arRatios$$inline_5052_skin$$inline_5047$$), $arBounds$$inline_5053_style$$inline_5049$$ = [window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_pieChart$.$getCenter$().x - 
        $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_radiusX$), window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_pieChart$.$getCenter$().y - $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_radiusY$), window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_radiusX$), 
        window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_radiusY$)], $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = new D.$DvtLinearGradientFill$$($accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$, $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$, 
        $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$, $arRatios$$inline_5052_skin$$inline_5047$$, $arBounds$$inline_5053_style$$inline_5049$$)
      }else {
        $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = new D.$DvtSolidFill$$($angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$), $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$ = new D.$DvtSolidFill$$(D.$DvtColorUtils$$.$getDarker$($angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$, 
        0.6))
      }
    }
    $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_topSurface$ = D.$DvtPieRenderUtils$$.$createTopSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$, $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$);
    if((0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_pieChart$) && (0 < $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_pieChart$.$getDepth$() || $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_radiusX$ != $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$radiusY$)) {
      $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ = ($accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ = "gradient" == $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ || "pattern" == $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$) ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$, D.$DvtPieRenderUtils$$.$SIDE$) : $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$, $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$ = $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$, D.$DvtPieRenderUtils$$.$CRUST$) : $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$, $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_leftSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$, 
      D.$DvtPieRenderUtils$$.$SURFACE_LEFT$, $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$), $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_rightSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$, D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$, 
      $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$), $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.$_crustSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$, D.$DvtPieRenderUtils$$.$SURFACE_CRUST$, $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$)
    }
  }
  $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ = this.$_slices$;
  $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$ = [];
  $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$ = $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ ? $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$.length : 0;
  for(var $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = -1, $accumAngleThreshold$$inline_5071_selectedIds$$inline_5076_sliceSpanBeforeNoon$$inline_5067$$, $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = 0;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ < $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$++) {
    if($angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ = $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$[$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$], $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ = 
    $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$.$getAngleStart$(), $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ = $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$.$getAngleExtent$(), 
    $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ = $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ + $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$, 360 < $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ && 
    ($angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ -= 360), 0 > $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ && ($angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ += 360), 
    90 == $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ || 90 > $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ && 90 < $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$) {
      $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$;
      $accumAngleThreshold$$inline_5071_selectedIds$$inline_5076_sliceSpanBeforeNoon$$inline_5067$$ = $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ - 90;
      break
    }
  }
  $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$ = [];
  for($i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ < $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$++) {
    $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$.push($accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$[$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$])
  }
  for($i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = 0;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ < $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$++) {
    $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$.push($accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$[$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$])
  }
  $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ = 0;
  $accumAngleThreshold$$inline_5071_selectedIds$$inline_5076_sliceSpanBeforeNoon$$inline_5067$$ = 180 + $accumAngleThreshold$$inline_5071_selectedIds$$inline_5076_sliceSpanBeforeNoon$$inline_5067$$;
  for($i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = 0;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ < $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$++) {
    if($angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ = $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$[$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$]) {
      if($accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ + $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$.$getAngleExtent$() > $accumAngleThreshold$$inline_5071_selectedIds$$inline_5076_sliceSpanBeforeNoon$$inline_5067$$) {
        $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$ = $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$;
        break
      }
      $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.push($angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$);
      $accumAngle$$inline_5069_dataTotal$$inline_5039_grAngle$$inline_5048_pattern$$inline_5044_slices$$inline_5058_useGradientFill$$inline_5054$$ += $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$.$getAngleExtent$()
    }
  }
  for($i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = $crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$ - 1;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ >= $anchorOffset$$inline_5032_angle$$inline_5035_arColors$$inline_5050_lastSliceIndexToProcess$$inline_5070_rotateIdx$$inline_5063_topFill$$inline_5045$$;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$--) {
    ($angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ = $angleStart$$inline_5064_arAlphas$$inline_5051_arc$$inline_5036_color$$inline_5043_percentage$$inline_5038_rotatedSlices$$inline_5068$$[$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$]) && $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.push($angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$)
  }
  this.$_duringDisplayAnim$ || D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$(this);
  for($i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = 0;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ < $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$.length;$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$[$i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$].$render$(this.$_duringDisplayAnim$)
  }
  D.$DvtAgent$$.$isPlatformWebkit$() || $handler$$inline_5074_shadow$$6$$ && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shapesContainer$, $handler$$inline_5074_shadow$$6$$);
  if($handler$$inline_5074_shadow$$6$$ = this.$chart$.$getSelectionHandler$()) {
    $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = D.$DvtChartDataUtils$$.$getInitialSelection$(this.$chart$);
    $accumAngleThreshold$$inline_5071_selectedIds$$inline_5076_sliceSpanBeforeNoon$$inline_5067$$ = [];
    for($JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$ < $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$.length;$JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$++) {
      for($crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$ = 0;$crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$ < this.$_slices$.length;$crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$++) {
        ($angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$ = this.$_slices$[$crustFill$$inline_5056_j$$inline_5078_lateralFill$$inline_5046_nSlices$$inline_5061_slice$$inline_5034$$].getId()) && ($i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$[$JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$].id && 
        $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$.getId() == $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$[$JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$].id || $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$.$getSeries$() == 
        $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$[$JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$].series && $angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$.$getGroup$() == $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$[$JSCompiler_StaticMethods_preRender$self$$inline_5041_i$$inline_5033_i$$inline_5077_zOrderedSlices$$inline_5059$$].group) && 
        $accumAngleThreshold$$inline_5071_selectedIds$$inline_5076_sliceSpanBeforeNoon$$inline_5067$$.push($angleExtent$$inline_5065_fillType$$inline_5042_nSlices$$inline_5037_peerId$$inline_5079_sideFill$$inline_5055_slice$$inline_5062_sliceSpanEnd$$inline_5066$$)
      }
    }
    D.$DvtPieChartUtils$$.$isOtherSliceSelected$(this.$chart$, $i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$) && ($i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$chart$), $accumAngleThreshold$$inline_5071_selectedIds$$inline_5076_sliceSpanBeforeNoon$$inline_5067$$.push($i$$462_i$$inline_5060_otherPeerId$$inline_5080_selected$$inline_5075_slices$$inline_5031$$));
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$inline_5074_shadow$$6$$, $accumAngleThreshold$$inline_5071_selectedIds$$inline_5076_sliceSpanBeforeNoon$$inline_5067$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$getTotalValue$ = function $$DvtPieChart$$$$$getTotalValue$$() {
  for(var $total$$ = 0, $i$$463$$ = 0;$i$$463$$ < this.$_slices$.length;$i$$463$$++) {
    var $sliceValue$$ = this.$_slices$[$i$$463$$].getValue();
    0 <= $sliceValue$$ && ($total$$ += $sliceValue$$)
  }
  return $total$$
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
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$22$$, $oldPie$$) {
  var $anim$$25_sliceAnim_sliceHandler$$ = new D.$DvtDataAnimationHandler$$(this.$_context$, this);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim$$25_sliceAnim_sliceHandler$$, $oldPie$$.$_slices$, this.$_slices$);
  var $anim$$25_sliceAnim_sliceHandler$$ = $anim$$25_sliceAnim_sliceHandler$$.$getAnimation$(), $renderAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($renderAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$25_sliceAnim_sliceHandler$$ = new D.$DvtParallelPlayable$$(this.$_context$, $anim$$25_sliceAnim_sliceHandler$$, $renderAnim$$1$$);
  $anim$$25_sliceAnim_sliceHandler$$.$setOnEnd$(this.$_setAnimationParams$, this);
  $handler$$22$$.add($anim$$25_sliceAnim_sliceHandler$$, 0);
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
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($slice$$6$$) {
  var $par$$ = $slice$$6$$.$_pieChart$.$_shapesContainer$;
  if($par$$) {
    var $parentChildCount$$1$$ = $par$$.$getNumChildren$();
    1 < $parentChildCount$$1$$ - this.$_numFrontObjs$ && ($par$$.removeChild($slice$$6$$.$_topSurface$[0]), $par$$.$addChildAt$($slice$$6$$.$_topSurface$[0], $parentChildCount$$1$$ - this.$_numFrontObjs$ - 1))
  }
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($slice$$7$$) {
  var $len$$39_par$$1$$ = this.$_slices$.length, $counter$$1_newIndex$$5$$ = 0;
  for(window.i = 0;window.i < $len$$39_par$$1$$;window.i++) {
    this.$_slices$[window.i].$isSelected$() && $counter$$1_newIndex$$5$$++
  }
  this.$_numSelectedObjsInFront$ = $counter$$1_newIndex$$5$$;
  if($len$$39_par$$1$$ = $slice$$7$$.$_pieChart$.$_shapesContainer$) {
    $counter$$1_newIndex$$5$$ = $len$$39_par$$1$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $counter$$1_newIndex$$5$$ && ($len$$39_par$$1$$.removeChild($slice$$7$$.$_topSurface$[0]), $len$$39_par$$1$$.$addChildAt$($slice$$7$$.$_topSurface$[0], $counter$$1_newIndex$$5$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$getLabelPosition$ = (0,D.$JSCompiler_get$$)("$_labelPosition$");
D.$JSCompiler_prototypeAlias$$.$getSkin$ = function $$JSCompiler_prototypeAlias$$$$getSkin$$() {
  return this.$_options$.skin
};
D.$DvtPieSlice$$ = function $$DvtPieSlice$$$($pieChart$$, $seriesIndex$$) {
  this.Init($pieChart$$, $seriesIndex$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieSlice$$, D.$DvtObj$$, "DvtPieSlice");
D.$DvtPieSlice$$.prototype.Init = function $$DvtPieSlice$$$$Init$($pieChart$$1$$, $seriesIndex$$1$$) {
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
  var $dataItem$$1_options$$66$$ = this.$_chart$.$getOptions$();
  $seriesIndex$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($dataItem$$1_options$$66$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$1$$, 0), this.$_value$ = D.$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$1$$, 0), this.$_explode$ = D.$DvtPieChartUtils$$.$getSliceExplode$(this.$_chart$, $seriesIndex$$1$$), this.$_fillColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$1$$), this.$_fillPattern$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, $seriesIndex$$1$$, 
  0), this.$_strokeColor$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$1$$), this.$_customLabel$ = $dataItem$$1_options$$66$$.label, this.$_seriesLabel$ = D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$1$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getDatatip$(D.$JSCompiler_alias_NULL$$, this.$_chart$, $seriesIndex$$1$$, 0), this.$_action$ = $dataItem$$1_options$$66$$.action, this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($dataItem$$1_options$$66$$._id), 
  this.$_id$ = D.$DvtPieChartUtils$$.$getSliceId$(this.$_chart$, $seriesIndex$$1$$), this.$_seriesIndex$ = $seriesIndex$$1$$) : (this.$_value$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $dataItem$$1_options$$66$$.styleDefaults.otherColor, this.$_fillPattern$ = D.$JSCompiler_alias_NULL$$, this.$_strokeColor$ = $dataItem$$1_options$$66$$.styleDefaults.borderColor, this.$_customLabel$ = D.$JSCompiler_alias_NULL$$, this.$_seriesLabel$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_chart$.$Bundle$, 
  "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$), this.$_action$ = D.$JSCompiler_alias_NULL$$, this.$_showPopupBehaviors$ = D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$_chart$))
};
D.$DvtPieSlice$$.prototype.$render$ = function $$DvtPieSlice$$$$$render$$($duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$) {
  var $explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$ = this.$_topSurface$, $leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$ = this.$_leftSurface$, $oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$ = this.$_rightSurface$, $crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$ = this.$_crustSurface$, $angleStart$$inline_4996$$ = this.$_angleStart$, $angleExtent$$inline_4997$$ = this.$_angleExtent$, $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$ = 
  [];
  $leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$ && ($oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$ && $crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$) && (270 >= $angleStart$$inline_4996$$ && 270 < $angleStart$$inline_4996$$ + $angleExtent$$inline_4997$$ ? ($feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$), $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$), 
  $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$)) : 270 < $angleStart$$inline_4996$$ || 90 >= $angleStart$$inline_4996$$ + $angleExtent$$inline_4997$$ ? ($feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$), $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$), 
  $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$)) : ($feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$), $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$), $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$)));
  $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.push($explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$);
  $leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$ = $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$.length;
  for($explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$ = 0;$explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$ < $leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$;$explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$++) {
    $oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$ = $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$[$explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$];
    window.shapeCount = $oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$.length;
    for($crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$ = 0;$crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$ < window.shapeCount;$crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$++) {
      this.$_pieChart$.$_shapesContainer$.$addChild$($oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$[$crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$]), $oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$[$crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$].$render$ && $oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$[$crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$].$render$()
    }
  }
  this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), D.$DvtPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), "outside" == this.$_pieChart$.$getLabelPosition$() && ($duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_hasFeeler$ && ($duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$ = 
  (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerStart$, this.$_outsideFeelerMid$), $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$), this.$_feelerRad$ = $duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$, this.$_feelerHoriz$ = $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$)));
  0 != this.$_explode$ ? ($duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$ = (360 - (this.$_angleStart$ + this.$_angleExtent$ / 2)) * D.$DvtMath$$.$RADS_PER_DEGREE$, $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)(this.$_pieChart$) ? D.$DvtPieChart$_THREED_TILT$$ : 1, $explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$ = 
  this.$_explode$ * this.$_pieChart$.$_radiusX$ * (0.5 / 0.45 - 1), this.$_explodeOffsetX$ = window.Math.cos($duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$) * $explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$, this.$_explodeOffsetY$ = window.Math.sin($duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$) * $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$ * 
  $explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$, D.$DvtAgent$$.$isPlatformWebkit$() && (this.$_explodeOffsetX$ = window.Math.round(this.$_explodeOffsetX$), this.$_explodeOffsetY$ = window.Math.round(this.$_explodeOffsetY$))) : this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_topSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_topSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_rightSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_rightSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_leftSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_leftSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_crustSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_crustSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_hasFeeler$ && ($duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$ = this.$_outsideFeelerStart$.x, $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$ = this.$_outsideFeelerStart$.y, $explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$ = $duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$ + this.$_explodeOffsetX$, 
  $leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$ = $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$ + this.$_explodeOffsetY$, this.$_feelerRad$.$setX1$($explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$), this.$_feelerRad$.$setY1$($leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$), $oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$ = this.$_outsideFeelerMid$.x, $crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$ = 
  this.$_outsideFeelerMid$.y, 0 < $oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$ - $duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$ != 0 < $oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$ - $explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$ ? (this.$_feelerRad$.$setX2$($explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$), this.$_feelerHoriz$.$setX1$($explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$)) : 
  (this.$_feelerRad$.$setX2$($oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$), this.$_feelerHoriz$.$setX1$($oldMidX$$inline_5012_rightSurface$$inline_4994_shapeArray$$)), 0 < $crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$ - $feelerHoriz$$inline_5002_oldStartY$$inline_5009_sortedSurfaces$$inline_4998_tilt$$inline_5006$$ != 0 < $crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$ - $leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$ ? (this.$_feelerRad$.$setY2$($leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$), 
  this.$_feelerHoriz$.$setY1$($leftSurface$$inline_4993_len$$37_newStartY$$inline_5011$$)) : (this.$_feelerRad$.$setY2$($crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$), this.$_feelerHoriz$.$setY1$($crustSurface$$inline_4995_j$$51_oldMidY$$inline_5013$$)));
  this.$_sliceLabel$ && !this.$_hasFeeler$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_sliceLabel$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  if(this.$_action$) {
    $duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$ = this.$getDisplayables$();
    for($explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$ = 0;$explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$ < $duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$.length;$explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$++) {
      $duringDisplayAnim_feelerRad$$inline_5001_oldStartX$$inline_5008_radian$$inline_5005_sliceDisplayables$$[$explodeOffset$$inline_5007_i$$457_newStartX$$inline_5010_topSurface$$inline_4992$$].setCursor("pointer")
    }
  }
};
D.$JSCompiler_StaticMethods__feelerFromPts$$ = function $$JSCompiler_StaticMethods__feelerFromPts$$$($JSCompiler_StaticMethods__feelerFromPts$self$$, $feeler$$4_pt1$$, $color$$47_pt2_stroke$$70$$) {
  $feeler$$4_pt1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$_context$, $feeler$$4_pt1$$.x, $feeler$$4_pt1$$.y, $color$$47_pt2_stroke$$70$$.x, $color$$47_pt2_stroke$$70$$.y);
  $color$$47_pt2_stroke$$70$$ = $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor;
  $color$$47_pt2_stroke$$70$$ = new D.$DvtSolidStroke$$($color$$47_pt2_stroke$$70$$);
  $feeler$$4_pt1$$.$setStroke$($color$$47_pt2_stroke$$70$$);
  $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$addChild$($feeler$$4_pt1$$);
  return $feeler$$4_pt1$$
};
D.$DvtPieSlice$_translateShapes$$ = function $$DvtPieSlice$_translateShapes$$$($shapes$$7$$, $tx$$12$$, $ty$$12$$) {
  if($shapes$$7$$) {
    for(var $len$$38$$ = $shapes$$7$$.length, $i$$458$$ = 0;$i$$458$$ < $len$$38$$;$i$$458$$++) {
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($shapes$$7$$[$i$$458$$], $tx$$12$$, $ty$$12$$)
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
  var $ar$$32$$ = [];
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$ && $ar$$32$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$ && $ar$$32$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$ && $ar$$32$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$);
  return $ar$$32$$
};
D.$DvtPieSlice$$.prototype.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$DvtPieSlice$$.prototype.getValue = (0,D.$JSCompiler_get$$)("$_value$");
D.$DvtPieSlice$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtPieSlice$$.prototype.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$DvtPieSlice$_shapeIsSelectable$$ = function $$DvtPieSlice$_shapeIsSelectable$$$($shape$$70$$) {
  return $shape$$70$$ instanceof D.$DvtGraphSelectableArc$$ || $shape$$70$$ instanceof D.$DvtGraphSelectablePolygon$$ || $shape$$70$$ instanceof D.$DvtGraphSelectablePath$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$252$$, $y$$222$$) {
  for(var $c$$29_sin$$ = this.$_pieChart$.$getCenter$(), $cos$$ = ($x$$252$$ - $c$$29_sin$$.x) / this.$_radiusX$, $c$$29_sin$$ = ($y$$222$$ - $c$$29_sin$$.y) / this.$_radiusY$, $angle$$31_containsAngle$$ = -window.Math.atan2($c$$29_sin$$, $cos$$) * (180 / window.Math.PI);$angle$$31_containsAngle$$ < this.$_angleStart$;) {
    $angle$$31_containsAngle$$ += 360
  }
  for(;360 <= $angle$$31_containsAngle$$ - this.$_angleStart$;) {
    $angle$$31_containsAngle$$ -= 360
  }
  $angle$$31_containsAngle$$ = $angle$$31_containsAngle$$ <= this.$_angleStart$ + this.$_angleExtent$;
  return 1 >= window.Math.pow($cos$$, 2) + window.Math.pow($c$$29_sin$$, 2) && $angle$$31_containsAngle$$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$24$$) {
  this.$_value$ = $params$$24$$[0];
  this.$_radiusX$ = $params$$24$$[1];
  this.$_radiusY$ = $params$$24$$[2];
  this.$_explode$ = $params$$24$$[3]
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$17$$, $oldSlice$$) {
  var $startState$$1$$ = $oldSlice$$.$GetAnimationParams$(), $endState$$5$$ = this.$GetAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($startState$$1$$, $endState$$5$$)) {
    var $anim$$21$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$21$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $endState$$5$$);
    $handler$$17$$.add($anim$$21$$, 0);
    this.$SetAnimationParams$($startState$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$18$$) {
  var $anim$$22$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$22$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
  $handler$$18$$.add($anim$$22$$, 0);
  this.$SetAnimationParams$([0, 0, 0, 0])
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$19$$, $container$$52$$) {
  var $anim$$23_newSlices$$ = $container$$52$$.$_slices$, $oldSlices_prevId$$ = this.$_pieChart$.$_slices$, $i$$459_prevIndex$$2$$ = D.$DvtArrayUtils$$.$getIndex$($oldSlices_prevId$$, this) - 1;
  if(0 <= $i$$459_prevIndex$$2$$) {
    $oldSlices_prevId$$ = $oldSlices_prevId$$[$i$$459_prevIndex$$2$$].getId();
    for($i$$459_prevIndex$$2$$ = 0;$i$$459_prevIndex$$2$$ < $anim$$23_newSlices$$.length;$i$$459_prevIndex$$2$$++) {
      if($anim$$23_newSlices$$[$i$$459_prevIndex$$2$$].getId().$equals$($oldSlices_prevId$$)) {
        $anim$$23_newSlices$$.splice($i$$459_prevIndex$$2$$ + 1, 0, this);
        break
      }
    }
  }else {
    $anim$$23_newSlices$$.splice(0, 0, this)
  }
  this.$_pieChart$ = $container$$52$$;
  $anim$$23_newSlices$$ = new D.$DvtCustomAnimation$$($container$$52$$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$23_newSlices$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, [0, 0, 0, 0]);
  $anim$$23_newSlices$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
  $handler$$19$$.add($anim$$23_newSlices$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedSlice$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedSlice$$() {
  var $slices$$ = this.$_pieChart$.$_slices$, $index$$99$$ = D.$DvtArrayUtils$$.$getIndex$($slices$$, this);
  0 <= $index$$99$$ && $slices$$.splice($index$$99$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  var $ret$$50$$ = [];
  this.$_topSurface$ && ($ret$$50$$ = $ret$$50$$.concat(this.$_topSurface$));
  this.$_leftSurface$ && ($ret$$50$$ = $ret$$50$$.concat(this.$_leftSurface$));
  this.$_rightSurface$ && ($ret$$50$$ = $ret$$50$$.concat(this.$_rightSurface$));
  this.$_crustSurface$ && ($ret$$50$$ = $ret$$50$$.concat(this.$_crustSurface$));
  this.$_sliceLabel$ && $ret$$50$$.push(this.$_sliceLabel$);
  this.$_feelerRad$ && $ret$$50$$.push(this.$_feelerRad$);
  this.$_feelerHoriz$ && $ret$$50$$.push(this.$_feelerHoriz$);
  return $ret$$50$$
};
D.$JSCompiler_StaticMethods_getPhysicalShape$$ = function $$JSCompiler_StaticMethods_getPhysicalShape$$$($JSCompiler_StaticMethods_getPhysicalShape$self$$, $obj$$257$$) {
  $obj$$257$$.$setDataColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$));
  $obj$$257$$.setCursor("pointer");
  return $obj$$257$$
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
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$91$$) {
  return $target$$91$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getFillColor$()
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[this.getId().$getSeries$()]
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$395$$) {
  if($event$$395$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $event$$395$$.keyCode && $event$$395$$.ctrlKey) {
    return this
  }
  var $slices$$1$$ = this.$_pieChart$.$_slices$, $idx$$27$$ = $slices$$1$$.indexOf(this), $next$$5$$ = D.$JSCompiler_alias_NULL$$;
  39 == $event$$395$$.keyCode ? $next$$5$$ = $idx$$27$$ < $slices$$1$$.length - 1 ? $slices$$1$$[$idx$$27$$ + 1] : $slices$$1$$[0] : 37 == $event$$395$$.keyCode && ($next$$5$$ = 0 == $idx$$27$$ ? $slices$$1$$[$slices$$1$$.length - 1] : $slices$$1$$[$idx$$27$$ - 1]);
  return $next$$5$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  var $displayables$$14$$ = this.$getDisplayables$();
  return $displayables$$14$$[0] ? $displayables$$14$$[0].$getDimensions$() : new D.$DvtRectangle$$(0, 0, 0, 0)
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
D.$DvtAnimOnDisplay$$.$createAnimation$ = function $$DvtAnimOnDisplay$$$$createAnimation$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$, $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$, $anim$$inline_5168_duration$$75_handler$$inline_5161$$) {
  $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$ = [];
  if(D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$)) {
    D.$DvtAnimOnDisplay$$.$_animBarLineArea$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$, $anim$$inline_5168_duration$$75_handler$$inline_5161$$, $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$) || D.$DvtChartTypeUtils$$.$isFunnel$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$)) {
      D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$, $anim$$inline_5168_duration$$75_handler$$inline_5161$$, $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isPie$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$) && $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$pieChart$) {
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$ = $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$pieChart$;
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_duringDisplayAnim$ = D.$JSCompiler_alias_TRUE$$;
        $anim$$inline_5168_duration$$75_handler$$inline_5161$$ = new D.$DvtDataAnimationHandler$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_context$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$);
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$ = [];
        for(var $fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$ = 0;$fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$ < $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_slices$.length;$fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$++) {
          $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$ = $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.concat((0,D.$JSCompiler_StaticMethods_getLabelAndFeeler$$)($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_slices$[$fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$]))
        }
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$ = new D.$DvtAnimFadeIn$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_context$, $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$getAnimationDuration$());
        $anim$$inline_5168_duration$$75_handler$$inline_5161$$.add($ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$, 0);
        $fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$ = $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$getTotalValue$();
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$ = new D.$DvtPieSlice$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$);
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$_value$ = $fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$;
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$_bFillerSlice$ = D.$JSCompiler_alias_TRUE$$;
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$_fillColor$ = "rgba(255,255,255,0)";
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$_strokeColor$ = "rgba(255,255,255,0)";
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$_tooltip$ = D.$JSCompiler_alias_NULL$$;
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$_id$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_slices$.push($ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$);
        $fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_context$, $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$getAnimationDuration$());
        (0,D.$JSCompiler_StaticMethods_addProp$$)($fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$.$_animator$, "typeNumberArray", $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$, $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$GetAnimationParams$, $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$SetAnimationParams$, 
        [0, 0, 0]);
        $fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$.$setOnEnd$($ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$_removeDeletedSlice$, $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$);
        $anim$$inline_5168_duration$$75_handler$$inline_5161$$.add($fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$, 0);
        for($fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$ = 0;$fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$ < $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_slices$.length - 1;$fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$++) {
          $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_slices$[$fillerAnim$$inline_5166_i$$inline_5163_value$$inline_9595$$].$animateInsert$($anim$$inline_5168_duration$$75_handler$$inline_5161$$)
        }
        $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_context$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$getAnimationDuration$());
        (0,D.$JSCompiler_StaticMethods_addProp$$)($ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_getAnimationParams$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_setAnimationParams$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_getAnimationParams$());
        $anim$$inline_5168_duration$$75_handler$$inline_5161$$.add($ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$, 0);
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_setAnimationParams$();
        $anim$$inline_5168_duration$$75_handler$$inline_5161$$ = $anim$$inline_5168_duration$$75_handler$$inline_5161$$.$getAnimation$();
        $anim$$inline_5168_duration$$75_handler$$inline_5161$$.$setOnEnd$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_restoreLabelPosition$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$);
        $anim$$inline_5168_duration$$75_handler$$inline_5161$$.play();
        return D.$JSCompiler_alias_NULL$$
      }
    }
  }
  return 0 < $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$.length ? new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_5160_chart$$65$$.$_context$, $ar$$inline_5162_arPlayables$$4_labelAnim$$inline_5164_renderAnim$$inline_5167_slice$$inline_9596_type$$170$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtAnimOnDisplay$$$$_animBarLineArea$$($chart$$66$$, $duration$$76$$, $arPlayables$$5$$) {
  var $objs$$53$$ = $chart$$66$$.$getObjects$(), $objCount$$ = $objs$$53$$ ? $objs$$53$$.length : 0, $isPolar$$3$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$66$$);
  if($objCount$$) {
    for(var $obj$$262$$, $peer$$8$$, $nodePlayable$$13$$, $i$$481$$ = 0;$i$$481$$ < $objCount$$;$i$$481$$++) {
      $peer$$8$$ = $objs$$53$$[$i$$481$$], $obj$$262$$ = $peer$$8$$.$getDisplayables$()[0], window.seriesType = $peer$$8$$.$getSeriesType$(), $nodePlayable$$13$$ = D.$JSCompiler_alias_NULL$$, $obj$$262$$ instanceof D.$DvtChartBar$$ || $obj$$262$$ instanceof D.$DvtChartPolarBar$$ ? $nodePlayable$$13$$ = $obj$$262$$.$getDisplayAnimation$($duration$$76$$) : $obj$$262$$ instanceof D.$DvtPolygonalShape$$ ? $isPolar$$3$$ ? $nodePlayable$$13$$ = D.$DvtAnimOnDisplay$$.$_getPolarLineAreaPlayable$($chart$$66$$, 
      $obj$$262$$, $duration$$76$$) : "line" == window.seriesType ? $nodePlayable$$13$$ = D.$DvtAnimOnDisplay$$.$_getLinePlayable$($chart$$66$$, $obj$$262$$, $duration$$76$$) : "area" == window.seriesType && ($nodePlayable$$13$$ = D.$DvtAnimOnDisplay$$.$_getAreaPlayable$($chart$$66$$, $obj$$262$$, $duration$$76$$)) : "on" == $peer$$8$$.$getSeriesItem$().markerDisplayed && ($nodePlayable$$13$$ = new D.$DvtAnimFadeIn$$($chart$$66$$.$_context$, $obj$$262$$, $duration$$76$$ - 0.8, 0.8)), $nodePlayable$$13$$ && 
      $arPlayables$$5$$.push($nodePlayable$$13$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtAnimOnDisplay$$$$_animBubbleScatterFunnel$$($chart$$67$$, $duration$$77$$, $arPlayables$$6$$) {
  var $objs$$54$$ = $chart$$67$$.$getObjects$(), $objCount$$1$$ = $objs$$54$$ ? $objs$$54$$.length : 0, $chartType$$2$$ = $chart$$67$$.$getType$();
  if($objCount$$1$$) {
    for(var $obj$$263_peer$$9$$, $nodePlayable$$14$$, $i$$482$$ = 0;$i$$482$$ < $objCount$$1$$;$i$$482$$++) {
      $obj$$263_peer$$9$$ = $objs$$54$$[$i$$482$$], $obj$$263_peer$$9$$ = $obj$$263_peer$$9$$.$getDisplayables$()[0], $obj$$263_peer$$9$$ instanceof D.$DvtMarker$$ ? $nodePlayable$$14$$ = "bubble" === $chartType$$2$$ ? D.$DvtAnimOnDisplay$$.$_getBubblePlayable$($chart$$67$$, $obj$$263_peer$$9$$, $duration$$77$$) : D.$DvtAnimOnDisplay$$.$_getScatterPlayable$($chart$$67$$, $obj$$263_peer$$9$$, $duration$$77$$) : $obj$$263_peer$$9$$ instanceof D.$DvtFunnelSlice$$ && ($nodePlayable$$14$$ = D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$($chart$$67$$, 
      $obj$$263_peer$$9$$, $duration$$77$$)), $nodePlayable$$14$$ && $arPlayables$$6$$.push($nodePlayable$$14$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtAnimOnDisplay$$$$_getAreaPlayable$$($chart$$68_nodePlayable$$15$$, $area$$23$$, $duration$$78$$) {
  var $arPoints$$22$$ = $area$$23$$.$getPoints$(), $endState$$13$$ = $arPoints$$22$$.slice(0), $len$$40$$ = $arPoints$$22$$.length, $isHoriz$$9_j$$57$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$68_nodePlayable$$15$$);
  if(4 >= $len$$40$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $base$$4$$ = $isHoriz$$9_j$$57$$ ? $arPoints$$22$$[$len$$40$$ - 2] : $arPoints$$22$$[$len$$40$$ - 1], $len$$40$$ = $len$$40$$ - 4, $isHoriz$$9_j$$57$$ = $isHoriz$$9_j$$57$$ ? 0 : 1;$isHoriz$$9_j$$57$$ < $len$$40$$;$isHoriz$$9_j$$57$$ += 2) {
    $arPoints$$22$$[$isHoriz$$9_j$$57$$] = $base$$4$$
  }
  $area$$23$$.$setPoints$($arPoints$$22$$);
  $chart$$68_nodePlayable$$15$$ = new D.$DvtCustomAnimation$$($chart$$68_nodePlayable$$15$$.$_context$, $area$$23$$, $duration$$78$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$68_nodePlayable$$15$$.$_animator$, "typeNumberArray", $area$$23$$, $area$$23$$.$getPoints$, $area$$23$$.$setPoints$, $endState$$13$$);
  return $chart$$68_nodePlayable$$15$$
};
D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtAnimOnDisplay$$$$_getFunnelPlayable$$($chart$$69_nodePlayable$$16$$, $slice$$10$$, $duration$$79$$) {
  var $arPoints$$23$$ = $slice$$10$$.$getAnimationParams$(), $endState$$14$$ = $arPoints$$23$$.slice(0);
  $arPoints$$23$$[0] = 0;
  $arPoints$$23$$[2] = 0;
  $slice$$10$$.$setAnimationParams$($arPoints$$23$$);
  $chart$$69_nodePlayable$$16$$ = new D.$DvtCustomAnimation$$($chart$$69_nodePlayable$$16$$.$_context$, $slice$$10$$, $duration$$79$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$69_nodePlayable$$16$$.$_animator$, "typeNumberArray", $slice$$10$$, $slice$$10$$.$getAnimationParams$, $slice$$10$$.$setAnimationParams$, $endState$$14$$);
  return $chart$$69_nodePlayable$$16$$
};
D.$DvtAnimOnDisplay$$.$_getBubblePlayable$ = function $$DvtAnimOnDisplay$$$$_getBubblePlayable$$($chart$$70_context$$539$$, $marker$$26_p3$$2$$, $duration$$80$$) {
  $chart$$70_context$$539$$ = $chart$$70_context$$539$$.$_context$;
  var $endScale_p1$$3$$ = new D.$DvtPoint$$($marker$$26_p3$$2$$.$getScaleX$(), $marker$$26_p3$$2$$.$getScaleY$());
  $marker$$26_p3$$2$$.$setScale$(1, 1);
  var $endScale_p1$$3$$ = new D.$DvtAnimScaleBy$$($chart$$70_context$$539$$, $marker$$26_p3$$2$$, $endScale_p1$$3$$, $duration$$80$$), $p2$$3$$ = new D.$DvtAnimFadeIn$$($chart$$70_context$$539$$, $marker$$26_p3$$2$$, $duration$$80$$), $size$$28$$ = $marker$$26_p3$$2$$.$getSize$(), $matrix$$10$$ = $marker$$26_p3$$2$$.$getMatrix$().clone();
  $matrix$$10$$.translate($size$$28$$ / 2, $size$$28$$ / 2);
  $marker$$26_p3$$2$$.$setMatrix$($matrix$$10$$);
  $marker$$26_p3$$2$$ = new D.$DvtAnimMoveBy$$($chart$$70_context$$539$$, $marker$$26_p3$$2$$, new D.$DvtPoint$$(-$size$$28$$ / 2, -$size$$28$$ / 2), $duration$$80$$);
  return new D.$DvtParallelPlayable$$($chart$$70_context$$539$$, [$endScale_p1$$3$$, $p2$$3$$, $marker$$26_p3$$2$$])
};
D.$DvtAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtAnimOnDisplay$$$$_getLinePlayable$$($chart$$71_nodePlayable$$17$$, $line$$9$$, $duration$$81$$) {
  var $arPoints$$24$$ = $line$$9$$.$getPoints$(), $endState$$15$$ = $arPoints$$24$$.slice(0);
  D.$DvtAnimOnDisplay$$.$_getMeanPoints$($arPoints$$24$$, D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$71_nodePlayable$$17$$));
  $line$$9$$.$setPoints$($arPoints$$24$$);
  $chart$$71_nodePlayable$$17$$ = new D.$DvtCustomAnimation$$($chart$$71_nodePlayable$$17$$.$_context$, $line$$9$$, $duration$$81$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$71_nodePlayable$$17$$.$_animator$, "typeNumberArray", $line$$9$$, $line$$9$$.$getPoints$, $line$$9$$.$setPoints$, $endState$$15$$);
  return $chart$$71_nodePlayable$$17$$
};
D.$DvtAnimOnDisplay$$.$_getPolarLineAreaPlayable$ = function $$DvtAnimOnDisplay$$$$_getPolarLineAreaPlayable$$($chart$$72_nodePlayable$$18$$, $shape$$79$$, $duration$$82$$) {
  var $arPoints$$25$$ = $shape$$79$$.$getPoints$(), $endState$$16$$ = $arPoints$$25$$.slice(0), $space$$4$$ = $chart$$72_nodePlayable$$18$$.$_plotAreaSpace$;
  for(window.j = 0;window.j < $arPoints$$25$$.length;window.j += 2) {
    $arPoints$$25$$[window.j] = $space$$4$$.$w$ / 2, $arPoints$$25$$[window.j + 1] = $space$$4$$.$h$ / 2
  }
  $shape$$79$$.$setPoints$($arPoints$$25$$);
  $chart$$72_nodePlayable$$18$$ = new D.$DvtCustomAnimation$$($chart$$72_nodePlayable$$18$$.$_context$, $shape$$79$$, $duration$$82$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$72_nodePlayable$$18$$.$_animator$, "typeNumberArray", $shape$$79$$, $shape$$79$$.$getPoints$, $shape$$79$$.$setPoints$, $endState$$16$$);
  return $chart$$72_nodePlayable$$18$$
};
D.$DvtAnimOnDisplay$$.$_getScatterPlayable$ = function $$DvtAnimOnDisplay$$$$_getScatterPlayable$$($chart$$73$$, $marker$$27$$, $duration$$83$$) {
  return new D.$DvtAnimPopIn$$($chart$$73$$.$_context$, $marker$$27$$, D.$JSCompiler_alias_TRUE$$, $duration$$83$$)
};
D.$DvtAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtAnimOnDisplay$$$$_getMeanPoints$$($arPoints$$26$$, $isHoriz$$10$$) {
  var $mean$$ = 0, $min$$4$$ = window.Number.MAX_VALUE, $max$$4$$ = window.Number.MIN_VALUE, $len$$41$$ = $arPoints$$26$$.length, $i$$483$$;
  for($i$$483$$ = $isHoriz$$10$$ ? 0 : 1;$i$$483$$ < $len$$41$$;$i$$483$$ += 2) {
    var $v$$11$$ = $arPoints$$26$$[$i$$483$$];
    $v$$11$$ < $min$$4$$ && ($min$$4$$ = $v$$11$$);
    $v$$11$$ > $max$$4$$ && ($max$$4$$ = $v$$11$$);
    $mean$$ += $v$$11$$
  }
  4 < $len$$41$$ ? ($mean$$ = $mean$$ - $min$$4$$ - $max$$4$$, $mean$$ /= ($len$$41$$ - 4) / 2) : $mean$$ /= $len$$41$$ / 2;
  for($i$$483$$ = $isHoriz$$10$$ ? 0 : 1;$i$$483$$ < $len$$41$$;$i$$483$$ += 2) {
    $arPoints$$26$$[$i$$483$$] = $mean$$
  }
};
D.$DvtAnimOnDC$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDC$$, D.$DvtObj$$, "DvtAnimOnDC");
D.$DvtAnimOnDC$$.$createAnimation$ = function $$DvtAnimOnDC$$$$createAnimation$$($handler$$36_oldChart$$4$$, $newChart$$3$$, $arOldList_type$$171$$, $duration$$84$$, $delContainer$$3$$) {
  if(!D.$DvtAnimOnDC$$.$_canAnimate$($handler$$36_oldChart$$4$$, $newChart$$3$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ctx$$ = $newChart$$3$$.$_context$;
  $arOldList_type$$171$$ = [];
  var $arNewList$$ = [];
  "pie" == $newChart$$3$$.$getType$() ? ($arOldList_type$$171$$.push($handler$$36_oldChart$$4$$.$pieChart$), $arNewList$$.push($newChart$$3$$.$pieChart$)) : D.$DvtAnimOnDC$$.$_buildAnimLists$($arOldList_type$$171$$, $handler$$36_oldChart$$4$$, $arNewList$$, $newChart$$3$$, $duration$$84$$);
  var $playable$$19$$;
  $handler$$36_oldChart$$4$$ = new D.$DvtDataAnimationHandler$$($ctx$$, $delContainer$$3$$);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$36_oldChart$$4$$, $arOldList_type$$171$$, $arNewList$$);
  0 < $handler$$36_oldChart$$4$$.$_playables$.length && ($playable$$19$$ = $handler$$36_oldChart$$4$$.$getAnimation$());
  return $playable$$19$$
};
D.$DvtAnimOnDC$$.$_buildAnimLists$ = function $$DvtAnimOnDC$$$$_buildAnimLists$$($arOldList$$1_i$$485$$, $oldChart$$5$$, $arNewList$$1$$, $newChart$$4$$, $duration$$85$$) {
  var $j$$58$$, $ar$$37$$ = $oldChart$$5$$.$peers$, $aOut$$ = $arOldList$$1_i$$485$$, $peer$$10$$, $obj$$264$$, $dch$$, $chartType$$3$$ = $oldChart$$5$$.type;
  for($arOldList$$1_i$$485$$ = 0;2 > $arOldList$$1_i$$485$$;$arOldList$$1_i$$485$$++) {
    for($j$$58$$ = 0;$j$$58$$ < $ar$$37$$.length;$j$$58$$++) {
      $peer$$10$$ = $ar$$37$$[$j$$58$$], $obj$$264$$ = $peer$$10$$.$getDisplayables$()[0], $dch$$ = D.$JSCompiler_alias_NULL$$, $obj$$264$$ instanceof D.$DvtFunnelSlice$$ ? $dch$$ = new D.$DvtDCFunnelSlice$$($peer$$10$$, $duration$$85$$) : $obj$$264$$ instanceof D.$DvtChartBar$$ || $obj$$264$$ instanceof D.$DvtChartPolarBar$$ ? $dch$$ = new D.$DvtDCChart2DBar$$($peer$$10$$, $duration$$85$$) : $obj$$264$$ instanceof D.$DvtPolygonalShape$$ ? $dch$$ = new D.$DvtDCChartLineArea$$($peer$$10$$, $duration$$85$$) : 
      $obj$$264$$ instanceof D.$DvtMarker$$ && ("scatter" === $chartType$$3$$ || "bubble" === $chartType$$3$$ || (1 == $arOldList$$1_i$$485$$ ? "on" == $peer$$10$$.$getSeriesItem$().markerDisplayed : "on" == D.$DvtChartDataUtils$$.$getSeriesItem$($oldChart$$5$$, $peer$$10$$.$getSeriesIndex$()).markerDisplayed)) && ($dch$$ = new D.$DvtDCChartMarker$$($peer$$10$$, $duration$$85$$)), $dch$$ && ($aOut$$.push($dch$$), $dch$$.$_oldChart$ = $oldChart$$5$$)
    }
    $aOut$$ = $arNewList$$1$$;
    $ar$$37$$ = $newChart$$4$$.$getObjects$()
  }
};
D.$DvtAnimOnDC$$.$_canAnimate$ = function $$DvtAnimOnDC$$$$_canAnimate$$($oldChart$$6$$, $newChart$$5$$) {
  var $oldType$$ = $oldChart$$6$$.type, $newType$$1$$ = $newChart$$5$$.$getType$();
  return $oldType$$ !== $newType$$1$$ ? D.$JSCompiler_alias_FALSE$$ : "pie" == $oldChart$$6$$.type && (!$oldChart$$6$$ || !$newChart$$5$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtDCChartAbstract$$ = function $$DvtDCChartAbstract$$$($peer$$11$$, $duration$$86$$) {
  this.Init($peer$$11$$, $duration$$86$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartAbstract$$, D.$DvtObj$$, "DvtDCChartAbstract");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartAbstract$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_animId$");
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$12$$, $duration$$87$$) {
  this.$_peer$ = $peer$$12$$;
  this.$_duration$ = $duration$$87$$;
  this.$_shape$ = $peer$$12$$.$getDisplayables$()[0];
  this.$_animId$ = $peer$$12$$.$getSeries$() + "/" + $peer$$12$$.$getGroup$()
};
D.$DvtDCChart2DBar$$ = function $$DvtDCChart2DBar$$$($peer$$5$$, $duration$$72$$) {
  this.Init($peer$$5$$, $duration$$72$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChart2DBar$$, D.$DvtDCChartAbstract$$, "DvtDCChart2DBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChart2DBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$6$$, $duration$$73$$) {
  D.$DvtDCChart2DBar$$.$superclass$.Init.call(this, $peer$$6$$, $duration$$73$$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bHoriz$ = D.$DvtChartTypeUtils$$.$isHorizontal$($peer$$6$$.$_chart$)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$30$$) {
  var $playable$$17$$ = this.$_shape$.$getInsertAnimation$(this.$_duration$);
  $handler$$30$$.add($playable$$17$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$31$$, $delContainer$$1$$) {
  $delContainer$$1$$.$addChild$(this.$_shape$);
  var $playable$$18$$ = this.$_shape$.$getDeleteAnimation$(this.$_duration$);
  $handler$$31$$.add($playable$$18$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$32$$, $oldDC$$2$$) {
  var $nodePlayable$$9_startState$$2$$ = $oldDC$$2$$.$_getAnimationParams$(), $endState$$9$$ = this.$_getAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($nodePlayable$$9_startState$$2$$, $endState$$9$$)) {
    var $oldChart$$1$$ = this.$_oldChart$, $newChart$$ = this.$_peer$.$_chart$, $newSIdx$$1$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$1$$ = $oldDC$$2$$.$_peer$.$getSeriesIndex$(), $newGIdx$$1$$ = this.$_peer$.$getGroupIndex$(), $oldGIdx$$1$$ = $oldDC$$2$$.$_peer$.$getGroupIndex$();
    "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$) && this.$_makeDirPointer$($nodePlayable$$9_startState$$2$$, $oldChart$$1$$, $oldSIdx$$1$$, $oldGIdx$$1$$, $newChart$$, $newSIdx$$1$$, $newGIdx$$1$$);
    this.$_setAnimationParams$($nodePlayable$$9_startState$$2$$);
    $nodePlayable$$9_startState$$2$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_duration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$9_startState$$2$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endState$$9$$);
    this.$_indicator$ && $nodePlayable$$9_startState$$2$$.$setOnEnd$(this.$_onEndAnimation$, this);
    $handler$$32$$.add($nodePlayable$$9_startState$$2$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return this.$_shape$.$getAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$36$$) {
  this.$_shape$.$setAnimationParams$($ar$$36$$, this.$_indicator$)
};
D.$JSCompiler_prototypeAlias$$.$_makeDirPointer$ = function $$JSCompiler_prototypeAlias$$$$_makeDirPointer$$($bDown_dirptr_startState$$3_uiDirection$$, $oldChart$$2$$, $oldSIdx$$2$$, $oldGIdx$$2$$, $newChart$$1$$, $newSIdx$$2$$, $newGIdx$$2$$) {
  D.$DvtChartTypeUtils$$.$isPolar$($oldChart$$2$$) || ($bDown_dirptr_startState$$3_uiDirection$$ = D.$DvtDCChartUtils$$.$getDirection$($oldChart$$2$$, $oldSIdx$$2$$, $oldGIdx$$2$$, $newChart$$1$$, $newSIdx$$2$$, $newGIdx$$2$$), $bDown_dirptr_startState$$3_uiDirection$$ !== D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ && (window.fc = ($bDown_dirptr_startState$$3_uiDirection$$ = $bDown_dirptr_startState$$3_uiDirection$$ === D.$DvtDCChartUtils$$.$DIR_DOWN$) ? D.$DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$1$$) : 
  D.$DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$1$$), $bDown_dirptr_startState$$3_uiDirection$$ = D.$DvtDCChartUtils$$.$drawDirectionPointer$(this.$_shape$.$_context$, $bDown_dirptr_startState$$3_uiDirection$$, this.$_bHoriz$, window.fc), $newChart$$1$$.$getPlotArea$().$addChild$($bDown_dirptr_startState$$3_uiDirection$$), this.$_indicator$ = $bDown_dirptr_startState$$3_uiDirection$$))
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_indicator$.getParent().removeChild(this.$_indicator$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtDCChartLineArea$$ = function $$DvtDCChartLineArea$$$($peer$$13$$, $duration$$88$$) {
  this.Init($peer$$13$$, $duration$$88$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartLineArea$$, D.$DvtDCChartAbstract$$, "DvtDCChartLineArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$40$$, $oldDC$$4$$) {
  var $iPTLen_startState$$7$$ = $oldDC$$4$$.$_getAnimationParams$(), $endState$$17$$ = this.$_getAnimationParams$();
  this.$_finalState$ = D.$JSCompiler_alias_NULL$$;
  if(!D.$DvtArrayUtils$$.$equals$($iPTLen_startState$$7$$, $endState$$17$$)) {
    var $i$$486_oldChart$$7$$ = this.$_oldChart$, $newChart$$6_nodePlayable$$19$$ = this.$_peer$.$_chart$, $arOldGroups_iConsec$$ = D.$DvtChartDataUtils$$.$getGroups$($i$$486_oldChart$$7$$), $arNewGroups_bFinalGroup_pt1x$$ = D.$DvtChartDataUtils$$.$getGroups$($newChart$$6_nodePlayable$$19$$), $oldGroupLen_pt1y$$ = $arOldGroups_iConsec$$.length, $newGroupLen_pt2x_xInc$$ = $arNewGroups_bFinalGroup_pt1x$$.length, $arCompare_arDeletes$$ = D.$DvtDCChartUtils$$.$compareGroups$($arOldGroups_iConsec$$, $arNewGroups_bFinalGroup_pt1x$$), 
    $aptsOld_arUpdates$$ = $arCompare_arDeletes$$[0], $arInserts_n$$27_pt2y$$ = $arCompare_arDeletes$$[1], $arCompare_arDeletes$$ = $arCompare_arDeletes$$[2], $bInsertDelete_ix$$ = 0 < $arInserts_n$$27_pt2y$$.length || 0 < $arCompare_arDeletes$$.length, $arPointType$$ = [], $iPT_yInc$$ = 0, $arOldPt$$ = D.$JSCompiler_alias_NULL$$, $arNewPt$$ = D.$JSCompiler_alias_NULL$$;
    $bInsertDelete_ix$$ && ($arOldPt$$ = [], $arNewPt$$ = []);
    this.$_arDirection$ = this.$_arPointers$ = D.$JSCompiler_alias_NULL$$;
    "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$6_nodePlayable$$19$$) && 0 < $aptsOld_arUpdates$$.length && (this.$_arPointers$ = [], this.$_arDirection$ = []);
    for(var $aptsOld_arUpdates$$ = $oldDC$$4$$.$_getAnimationParams$(), $aptsNew$$ = this.$_getAnimationParams$(), $aptsOldLen$$ = $aptsOld_arUpdates$$.length, $aptsNewLen$$ = $aptsNew$$.length, $newSIdx$$4$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$4$$ = $oldDC$$4$$.$_peer$.$getSeriesIndex$(), $ixOld$$ = 0, $ixNew$$ = 0, $ixOldPts$$ = 0, $ixNewPts$$ = 0;$ixOld$$ < $oldGroupLen_pt1y$$ || $ixNew$$ < $newGroupLen_pt2x_xInc$$;) {
      if($ixOld$$ < $oldGroupLen_pt1y$$ && $ixNew$$ < $newGroupLen_pt2x_xInc$$ && $ixOldPts$$ < $aptsOldLen$$ && $ixNewPts$$ < $aptsNewLen$$) {
        if($arOldGroups_iConsec$$[$ixOld$$] === $arNewGroups_bFinalGroup_pt1x$$[$ixNew$$]) {
          $arPointType$$[$iPT_yInc$$] = D.$DvtDCChartUtils$$.$UPDATE$;
          var $xPos$$2$$ = $aptsOld_arUpdates$$[$ixOldPts$$++], $yPos$$2$$ = $aptsOld_arUpdates$$[$ixOldPts$$++];
          this.$_arPointers$ != D.$JSCompiler_alias_NULL$$ && this.$_makeDirPointer$($xPos$$2$$, $yPos$$2$$, $i$$486_oldChart$$7$$, $oldSIdx$$4$$, $ixOld$$, $newChart$$6_nodePlayable$$19$$, $newSIdx$$4$$, $ixNew$$, $iPT_yInc$$);
          $ixOld$$++;
          $ixNew$$++;
          $iPT_yInc$$++;
          $bInsertDelete_ix$$ && ($arOldPt$$.push($xPos$$2$$), $arOldPt$$.push($yPos$$2$$), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]))
        }else {
          -1 < D.$DvtArrayUtils$$.$getIndex$($arCompare_arDeletes$$, $arOldGroups_iConsec$$[$ixOld$$]) ? ($arPointType$$[$iPT_yInc$$] = D.$DvtDCChartUtils$$.$DELETE$, $arOldPt$$.push($aptsOld_arUpdates$$[$ixOldPts$$++]), $arOldPt$$.push($aptsOld_arUpdates$$[$ixOldPts$$++]), $arNewPt$$.push(0), $arNewPt$$.push(0), $ixOld$$++, this.$_arPointers$ != D.$JSCompiler_alias_NULL$$ && (this.$_arPointers$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$, this.$_arDirection$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$), 
          $iPT_yInc$$++) : -1 < D.$DvtArrayUtils$$.$getIndex$($arInserts_n$$27_pt2y$$, $arNewGroups_bFinalGroup_pt1x$$[$ixNew$$]) ? ($arPointType$$[$iPT_yInc$$] = D.$DvtDCChartUtils$$.$INSERT$, $arOldPt$$.push(0), $arOldPt$$.push(0), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]), $arNewPt$$.push($aptsNew$$[$ixNewPts$$++]), $ixNew$$++, this.$_arPointers$ != D.$JSCompiler_alias_NULL$$ && (this.$_arPointers$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$, this.$_arDirection$[$iPT_yInc$$] = D.$JSCompiler_alias_NULL$$), 
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
    if($bInsertDelete_ix$$) {
      $iPT_yInc$$ = $newGroupLen_pt2x_xInc$$ = $arInserts_n$$27_pt2y$$ = $newGroupLen_pt2x_xInc$$ = $oldGroupLen_pt1y$$ = $arNewGroups_bFinalGroup_pt1x$$ = 0;
      $iPTLen_startState$$7$$ = $arPointType$$.length;
      for($i$$486_oldChart$$7$$ = 0;$i$$486_oldChart$$7$$ < $iPTLen_startState$$7$$;$i$$486_oldChart$$7$$++) {
        if($arPointType$$[$i$$486_oldChart$$7$$] != D.$DvtDCChartUtils$$.$UPDATE$) {
          $arInserts_n$$27_pt2y$$ = $arPointType$$[$i$$486_oldChart$$7$$];
          $arOldGroups_iConsec$$ = 1;
          for($bInsertDelete_ix$$ = $i$$486_oldChart$$7$$ + 1;$bInsertDelete_ix$$ < $iPTLen_startState$$7$$ && $arPointType$$[$bInsertDelete_ix$$] == $arInserts_n$$27_pt2y$$;$bInsertDelete_ix$$++) {
            $arOldGroups_iConsec$$++
          }
          $arNewGroups_bFinalGroup_pt1x$$ = $bInsertDelete_ix$$ === $iPTLen_startState$$7$$;
          if(0 === $i$$486_oldChart$$7$$) {
            if($arInserts_n$$27_pt2y$$ === D.$DvtDCChartUtils$$.$INSERT$) {
              $arInserts_n$$27_pt2y$$ = 2 * ($i$$486_oldChart$$7$$ + $arOldGroups_iConsec$$);
              $arNewGroups_bFinalGroup_pt1x$$ = $arOldPt$$[$arInserts_n$$27_pt2y$$];
              $oldGroupLen_pt1y$$ = $arOldPt$$[$arInserts_n$$27_pt2y$$ + 1];
              for($bInsertDelete_ix$$ = 0;$bInsertDelete_ix$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$++) {
                0 < $bInsertDelete_ix$$ && $i$$486_oldChart$$7$$++, $arInserts_n$$27_pt2y$$ = 2 * $i$$486_oldChart$$7$$, $arOldPt$$[$arInserts_n$$27_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arOldPt$$[$arInserts_n$$27_pt2y$$] = $oldGroupLen_pt1y$$
              }
            }else {
              $arInserts_n$$27_pt2y$$ = 2 * ($i$$486_oldChart$$7$$ + $arOldGroups_iConsec$$);
              $arNewGroups_bFinalGroup_pt1x$$ = $arNewPt$$[$arInserts_n$$27_pt2y$$];
              $oldGroupLen_pt1y$$ = $arNewPt$$[$arInserts_n$$27_pt2y$$ + 1];
              for($bInsertDelete_ix$$ = 0;$bInsertDelete_ix$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$++) {
                0 < $bInsertDelete_ix$$ && $i$$486_oldChart$$7$$++, $arInserts_n$$27_pt2y$$ = 2 * $i$$486_oldChart$$7$$, $arNewPt$$[$arInserts_n$$27_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arNewPt$$[$arInserts_n$$27_pt2y$$] = $oldGroupLen_pt1y$$
              }
            }
          }else {
            if($i$$486_oldChart$$7$$ === $iPTLen_startState$$7$$ - 1 || $arNewGroups_bFinalGroup_pt1x$$) {
              if($arInserts_n$$27_pt2y$$ === D.$DvtDCChartUtils$$.$INSERT$) {
                $arInserts_n$$27_pt2y$$ = 2 * ($i$$486_oldChart$$7$$ - 1), $arNewGroups_bFinalGroup_pt1x$$ = $arOldPt$$[$arInserts_n$$27_pt2y$$], $oldGroupLen_pt1y$$ = $arOldPt$$[$arInserts_n$$27_pt2y$$ + 1], $arInserts_n$$27_pt2y$$ = 2 * $i$$486_oldChart$$7$$, $arOldPt$$[$arInserts_n$$27_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arOldPt$$[$arInserts_n$$27_pt2y$$] = $oldGroupLen_pt1y$$
              }else {
                $arInserts_n$$27_pt2y$$ = 2 * ($i$$486_oldChart$$7$$ - 1);
                $arNewGroups_bFinalGroup_pt1x$$ = $arNewPt$$[$arInserts_n$$27_pt2y$$];
                $oldGroupLen_pt1y$$ = $arNewPt$$[$arInserts_n$$27_pt2y$$ + 1];
                for($bInsertDelete_ix$$ = 0;$bInsertDelete_ix$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$++) {
                  0 < $bInsertDelete_ix$$ && $i$$486_oldChart$$7$$++, $arInserts_n$$27_pt2y$$ = 2 * $i$$486_oldChart$$7$$, $arNewPt$$[$arInserts_n$$27_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arNewPt$$[$arInserts_n$$27_pt2y$$] = $oldGroupLen_pt1y$$
                }
              }
            }else {
              if($arInserts_n$$27_pt2y$$ === D.$DvtDCChartUtils$$.$INSERT$) {
                $bInsertDelete_ix$$ = 2 * ($i$$486_oldChart$$7$$ - 1);
                $arNewGroups_bFinalGroup_pt1x$$ = $arOldPt$$[$bInsertDelete_ix$$++];
                $oldGroupLen_pt1y$$ = $arOldPt$$[$bInsertDelete_ix$$];
                $bInsertDelete_ix$$ = 2 * ($i$$486_oldChart$$7$$ + $arOldGroups_iConsec$$);
                $newGroupLen_pt2x_xInc$$ = $arOldPt$$[$bInsertDelete_ix$$++];
                $arInserts_n$$27_pt2y$$ = $arOldPt$$[$bInsertDelete_ix$$];
                $newGroupLen_pt2x_xInc$$ = ($newGroupLen_pt2x_xInc$$ - $arNewGroups_bFinalGroup_pt1x$$) / ($arOldGroups_iConsec$$ + 1);
                $iPT_yInc$$ = ($arInserts_n$$27_pt2y$$ - $oldGroupLen_pt1y$$) / ($arOldGroups_iConsec$$ + 1);
                for($bInsertDelete_ix$$ = 0;$bInsertDelete_ix$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$++) {
                  0 < $bInsertDelete_ix$$ && $i$$486_oldChart$$7$$++, $arInserts_n$$27_pt2y$$ = 2 * $i$$486_oldChart$$7$$, $arNewGroups_bFinalGroup_pt1x$$ += $newGroupLen_pt2x_xInc$$, $oldGroupLen_pt1y$$ += $iPT_yInc$$, $arOldPt$$[$arInserts_n$$27_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arOldPt$$[$arInserts_n$$27_pt2y$$] = $oldGroupLen_pt1y$$
                }
              }else {
                $bInsertDelete_ix$$ = 2 * ($i$$486_oldChart$$7$$ - 1);
                $arNewGroups_bFinalGroup_pt1x$$ = $arNewPt$$[$bInsertDelete_ix$$++];
                $oldGroupLen_pt1y$$ = $arNewPt$$[$bInsertDelete_ix$$];
                $bInsertDelete_ix$$ = 2 * ($i$$486_oldChart$$7$$ + $arOldGroups_iConsec$$);
                $newGroupLen_pt2x_xInc$$ = $arNewPt$$[$bInsertDelete_ix$$++];
                $arInserts_n$$27_pt2y$$ = $arNewPt$$[$bInsertDelete_ix$$];
                $newGroupLen_pt2x_xInc$$ = ($newGroupLen_pt2x_xInc$$ - $arNewGroups_bFinalGroup_pt1x$$) / ($arOldGroups_iConsec$$ + 1);
                $iPT_yInc$$ = ($arInserts_n$$27_pt2y$$ - $oldGroupLen_pt1y$$) / ($arOldGroups_iConsec$$ + 1);
                for($bInsertDelete_ix$$ = 0;$bInsertDelete_ix$$ < $arOldGroups_iConsec$$;$bInsertDelete_ix$$++) {
                  0 < $bInsertDelete_ix$$ && $i$$486_oldChart$$7$$++, $arInserts_n$$27_pt2y$$ = 2 * $i$$486_oldChart$$7$$, $arNewGroups_bFinalGroup_pt1x$$ += $newGroupLen_pt2x_xInc$$, $oldGroupLen_pt1y$$ += $iPT_yInc$$, $arNewPt$$[$arInserts_n$$27_pt2y$$++] = $arNewGroups_bFinalGroup_pt1x$$, $arNewPt$$[$arInserts_n$$27_pt2y$$] = $oldGroupLen_pt1y$$
                }
              }
            }
          }
        }
      }
      $newChart$$6_nodePlayable$$19$$.$getType$();
      "area" === this.$_peer$.$getSeriesType$() && ($ixOldPts$$ = $aptsOld_arUpdates$$.length - 4, $ixNewPts$$ = $aptsNew$$.length - 4, $arOldPt$$.push($aptsOld_arUpdates$$[$ixOldPts$$]), $arOldPt$$.push($aptsOld_arUpdates$$[++$ixOldPts$$]), $arOldPt$$.push($aptsOld_arUpdates$$[++$ixOldPts$$]), $arOldPt$$.push($aptsOld_arUpdates$$[++$ixOldPts$$]), $arNewPt$$.push($aptsNew$$[$ixNewPts$$]), $arNewPt$$.push($aptsNew$$[++$ixNewPts$$]), $arNewPt$$.push($aptsNew$$[++$ixNewPts$$]), $arNewPt$$.push($aptsNew$$[++$ixNewPts$$]));
      $iPTLen_startState$$7$$ = $arOldPt$$;
      0 < $arCompare_arDeletes$$.length && (this.$_finalState$ = $endState$$17$$);
      $endState$$17$$ = $arNewPt$$
    }
    this.$_setAnimationParams$($iPTLen_startState$$7$$);
    $newChart$$6_nodePlayable$$19$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_duration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($newChart$$6_nodePlayable$$19$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endState$$17$$);
    $newChart$$6_nodePlayable$$19$$.$setOnEnd$(this.$_onEndAnimation$, this);
    $handler$$40$$.add($newChart$$6_nodePlayable$$19$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_finalState$ && this.$_shape$.$setPoints$(this.$_finalState$);
  if(this.$_arPointers$ !== D.$JSCompiler_alias_NULL$$) {
    for(var $arPointers$$ = this.$_arPointers$, $len$$42$$ = $arPointers$$.length, $plot$$ = this.$_peer$.$_chart$.$getPlotArea$(), $ptr$$, $i$$487$$ = 0;$i$$487$$ < $len$$42$$;$i$$487$$++) {
      ($ptr$$ = $arPointers$$[$i$$487$$]) && $plot$$.removeChild($ptr$$)
    }
    this.$_arDirections$ = this.$_arPointers$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$41$$) {
  var $nodePlayable$$20$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$_context$, this.$_shape$, this.$_duration$);
  $handler$$41$$.add($nodePlayable$$20$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$42$$, $delContainer$$5$$) {
  var $context$$541_nodePlayable$$21$$ = this.$_shape$.$_context$;
  if(this.$_shape$ instanceof D.$DvtPolygon$$ && "area" == this.$_peer$.$getSeriesType$()) {
    var $areaContainer$$1$$ = this.$_peer$.$_chart$.$_areaContainer$;
    this.$_deletedAreas$ = this.$_shape$.getParent().getParent();
    $areaContainer$$1$$.$addChild$(this.$_deletedAreas$);
    $context$$541_nodePlayable$$21$$ = new D.$DvtAnimFadeOut$$($context$$541_nodePlayable$$21$$, this.$_deletedAreas$, this.$_duration$);
    $context$$541_nodePlayable$$21$$.$setOnEnd$(this.$_removeDeletedAreas$, this)
  }else {
    $delContainer$$5$$.$addChild$(this.$_shape$), $context$$541_nodePlayable$$21$$ = new D.$DvtAnimFadeOut$$($context$$541_nodePlayable$$21$$, this.$_shape$, this.$_duration$)
  }
  $handler$$42$$.add($context$$541_nodePlayable$$21$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedAreas$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedAreas$$() {
  this.$_peer$.$_chart$.$_areaContainer$.removeChild(this.$_deletedAreas$)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return this.$_shape$.$getPoints$()
};
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$14$$, $duration$$89$$) {
  D.$DvtDCChartLineArea$$.$superclass$.Init.call(this, $peer$$14$$, $duration$$89$$);
  this.$_animId$ = $peer$$14$$.$getSeries$()
};
D.$JSCompiler_prototypeAlias$$.$_makeDirPointer$ = function $$JSCompiler_prototypeAlias$$$$_makeDirPointer$$($dirptr$$1_xPos$$3$$, $chart$$75_isHoriz$$11_yPos$$3$$, $bDown$$2_oldChart$$8$$, $fc$$10_iDirection_oldSIdx$$5$$, $oldGIdx$$4$$, $newChart$$7$$, $newSIdx$$5$$, $newGIdx$$4$$, $iPT$$1$$) {
  $chart$$75_isHoriz$$11_yPos$$3$$ = this.$_peer$.$_chart$;
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$75_isHoriz$$11_yPos$$3$$) || ($dirptr$$1_xPos$$3$$ = D.$JSCompiler_alias_NULL$$, $chart$$75_isHoriz$$11_yPos$$3$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$75_isHoriz$$11_yPos$$3$$), $fc$$10_iDirection_oldSIdx$$5$$ = D.$DvtDCChartUtils$$.$getDirection$($bDown$$2_oldChart$$8$$, $fc$$10_iDirection_oldSIdx$$5$$, $oldGIdx$$4$$, $newChart$$7$$, $newSIdx$$5$$, $newGIdx$$4$$), $bDown$$2_oldChart$$8$$ = $fc$$10_iDirection_oldSIdx$$5$$ == D.$DvtDCChartUtils$$.$DIR_DOWN$, 
  $fc$$10_iDirection_oldSIdx$$5$$ !== D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ && ($fc$$10_iDirection_oldSIdx$$5$$ = $bDown$$2_oldChart$$8$$ ? D.$DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$7$$) : D.$DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$7$$), $dirptr$$1_xPos$$3$$ = D.$DvtDCChartUtils$$.$drawDirectionPointer$(this.$_shape$.$_context$, $bDown$$2_oldChart$$8$$, $chart$$75_isHoriz$$11_yPos$$3$$, $fc$$10_iDirection_oldSIdx$$5$$), $newChart$$7$$.$getPlotArea$().$addChild$($dirptr$$1_xPos$$3$$)), 
  this.$_arPointers$[$iPT$$1$$] = $dirptr$$1_xPos$$3$$, this.$_arDirection$[$iPT$$1$$] = $bDown$$2_oldChart$$8$$)
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$38$$) {
  this.$_shape$.$setPoints$($ar$$38$$);
  if(this.$_arPointers$ !== D.$JSCompiler_alias_NULL$$) {
    var $chart$$76_ptr$$1$$, $offset$$27$$;
    $chart$$76_ptr$$1$$ = this.$_peer$.$_chart$;
    for(var $isHoriz$$12$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$76_ptr$$1$$), $isRTL$$8$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$76_ptr$$1$$.$_context$), $plotArea$$1$$ = $chart$$76_ptr$$1$$.$getPlotArea$(), $len$$43$$ = this.$_arPointers$.length, $i$$488$$ = 0;$i$$488$$ < $len$$43$$;$i$$488$$++) {
      if($chart$$76_ptr$$1$$ = this.$_arPointers$[$i$$488$$]) {
        $plotArea$$1$$.removeChild($chart$$76_ptr$$1$$), $offset$$27$$ = this.$_arDirection$[$i$$488$$] ? 12 : -12, $chart$$76_ptr$$1$$.$setTranslateX$($ar$$38$$[2 * $i$$488$$] + ($isHoriz$$12$$ ? $offset$$27$$ : 0) * ($isRTL$$8$$ ? 1 : -1)), $chart$$76_ptr$$1$$.$setTranslateY$($ar$$38$$[2 * $i$$488$$ + 1] + ($isHoriz$$12$$ ? 0 : $offset$$27$$)), $plotArea$$1$$.$addChild$($chart$$76_ptr$$1$$)
      }
    }
  }
};
D.$DvtDCChartMarker$$ = function $$DvtDCChartMarker$$$($peer$$4$$, $duration$$71$$) {
  this.Init($peer$$4$$, $duration$$71$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartMarker$$, D.$DvtDCChartAbstract$$, "DvtDCChartMarker");
D.$DvtDCChartMarker$$.prototype.$animateUpdate$ = function $$DvtDCChartMarker$$$$$animateUpdate$$($handler$$27$$, $oldDC$$) {
  var $oldObj$$2$$ = $oldDC$$.$_shape$, $newObj$$2$$ = this.$_shape$, $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$ = $newObj$$2$$.$getMatrix$(), $alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$ = new D.$DvtMatrix$$;
  $alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$.translate(-$newObj$$2$$.$getX$(), -$newObj$$2$$.$getY$());
  $alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$.scale($oldObj$$2$$.getWidth() / $newObj$$2$$.getWidth(), $oldObj$$2$$.getHeight() / $newObj$$2$$.getHeight());
  $alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$.translate($oldObj$$2$$.$getX$(), $oldObj$$2$$.$getY$());
  if(!$bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$.$equals$($alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$)) {
    var $nodePlayable$$6$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_duration$);
    this.$_shape$.$setMatrix$($alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$6$$.$_animator$, "typeMatrix", this.$_shape$, this.$_shape$.$getMatrix$, this.$_shape$.$setMatrix$, $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$);
    $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$ = D.$JSCompiler_alias_FALSE$$;
    if($oldDC$$) {
      var $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$ = $oldDC$$.$_peer$.$getSeriesIndex$(), $alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$ = $oldDC$$.$_peer$.$getGroupIndex$(), $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$ = this.$_peer$.$getSeriesIndex$(), $newGIdx$$inline_5152$$ = this.$_peer$.$getGroupIndex$(), $oldData$$inline_5153$$ = $oldDC$$.$_oldChart$.$getOptions$(), $newData$$inline_5154$$ = this.$_peer$.$_chart$.$getOptions$(), $oldY$$inline_5155$$ = $oldData$$inline_5153$$.series[$bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$].items[$alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$].y, 
      $oldZ$$inline_5156$$ = $oldData$$inline_5153$$.series[$bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$].items[$alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$].z, $newY$$inline_5157$$ = $newData$$inline_5154$$.series[$fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$].items[$newGIdx$$inline_5152$$].y, $newZ$$inline_5158$$ = $newData$$inline_5154$$.series[$fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$].items[$newGIdx$$inline_5152$$].z, $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$ = 
      $newData$$inline_5154$$.series[$fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$].items[$newGIdx$$inline_5152$$].x !== $oldData$$inline_5153$$.series[$bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$].items[$alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$].x || $newY$$inline_5157$$ !== $oldY$$inline_5155$$ || $newZ$$inline_5158$$ !== $oldZ$$inline_5156$$
    }
    $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$ && "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$(this.$_peer$.$_chart$) && ($bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$ = $oldDC$$.$_shape$, "scatter" === $oldDC$$.$_peer$.$_chart$.$getType$() ? ($alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$ = "#FFFF2B", $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$ = 0.7) : ($alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$ = "#D5D500", $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$ = 
    0.4), $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$ = new D.$DvtSolidFill$$($alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$, $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$), $alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$ = this.$_shape$.$getAlpha$(), this.$_shape$.$setAlpha$(0), $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$.$setFill$($fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$), this.$_peer$.$_chart$.$getPlotArea$().$addChild$($bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$), 
    $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$ = new D.$DvtMatrix$$, $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$.translate(-$oldObj$$2$$.$getX$(), -$oldObj$$2$$.$getY$()), $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$.scale($newObj$$2$$.getWidth() / $oldObj$$2$$.getWidth(), $newObj$$2$$.getHeight() / $oldObj$$2$$.getHeight()), $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$.translate($newObj$$2$$.$getX$(), $newObj$$2$$.$getY$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$6$$.$_animator$, 
    "typeNumber", this.$_shape$, this.$_shape$.$getAlpha$, this.$_shape$.$setAlpha$, $alpha$$37_fc$$8_oldGIdx$$inline_5150_startMatrix$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$6$$.$_animator$, "typeMatrix", $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$, $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$.$getMatrix$, $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$.$setMatrix$, $fa$$4_fill$$47_newSIdx$$inline_5151_overlayEndMatrix$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$6$$.$_animator$, 
    "typeNumber", $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$, $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$.$getAlpha$, $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$.$setAlpha$, 0), this.$_overlay$ = $bRet$$inline_5148_endMatrix_oldSIdx$$inline_5149_overlay$$, $nodePlayable$$6$$.$setOnEnd$(this.$_onEndAnimation$, this));
    $handler$$27$$.add($nodePlayable$$6$$, 0)
  }
};
D.$DvtDCChartMarker$$.prototype.$animateInsert$ = function $$DvtDCChartMarker$$$$$animateInsert$$($handler$$28$$) {
  var $nodePlayable$$7$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$_context$, this.$_shape$, this.$_duration$);
  $handler$$28$$.add($nodePlayable$$7$$, 0)
};
D.$DvtDCChartMarker$$.prototype.$animateDelete$ = function $$DvtDCChartMarker$$$$$animateDelete$$($handler$$29$$, $delContainer$$) {
  $delContainer$$.$addChild$(this.$_shape$);
  var $nodePlayable$$8$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$_context$, this.$_shape$, this.$_duration$);
  $handler$$29$$.add($nodePlayable$$8$$, 0)
};
D.$DvtDCChartMarker$$.prototype.$_onEndAnimation$ = function $$DvtDCChartMarker$$$$$_onEndAnimation$$() {
  this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtDCChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartUtils$$, D.$DvtObj$$, "DvtDCChartUtils");
D.$DvtDCChartUtils$$.$DIR_UP$ = 0;
D.$DvtDCChartUtils$$.$DIR_DOWN$ = 1;
D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ = 2;
D.$DvtDCChartUtils$$.$UPDATE$ = 0;
D.$DvtDCChartUtils$$.$DELETE$ = 1;
D.$DvtDCChartUtils$$.$INSERT$ = 2;
D.$DvtDCChartUtils$$.$getDirection$ = function $$DvtDCChartUtils$$$$getDirection$$($oldChart$$3_oldValue$$2$$, $oldSIdx$$3$$, $oldGIdx$$3$$, $newChart$$2_newValue$$1$$, $newSIdx$$3$$, $newGIdx$$3$$) {
  $oldChart$$3_oldValue$$2$$ = D.$DvtChartDataUtils$$.getValue($oldChart$$3_oldValue$$2$$, $oldSIdx$$3$$, $oldGIdx$$3$$);
  $newChart$$2_newValue$$1$$ = D.$DvtChartDataUtils$$.getValue($newChart$$2_newValue$$1$$, $newSIdx$$3$$, $newGIdx$$3$$);
  return $newChart$$2_newValue$$1$$ > $oldChart$$3_oldValue$$2$$ ? D.$DvtDCChartUtils$$.$DIR_UP$ : $newChart$$2_newValue$$1$$ < $oldChart$$3_oldValue$$2$$ ? D.$DvtDCChartUtils$$.$DIR_DOWN$ : D.$DvtDCChartUtils$$.$DIR_NOCHANGE$
};
D.$DvtDCChartUtils$$.$compareGroups$ = function $$DvtDCChartUtils$$$$compareGroups$$($oldList$$1$$, $newList$$1$$) {
  var $updates$$ = [], $inserts$$ = [], $deletes$$ = [], $i$$484_oldLen$$ = $oldList$$1$$.length;
  $newList$$1$$ = $newList$$1$$.slice(0);
  if($oldList$$1$$) {
    for(var $oldIndex$$3$$ = 0;$oldIndex$$3$$ < $i$$484_oldLen$$;$oldIndex$$3$$++) {
      for(var $oldItem$$1$$ = $oldList$$1$$[$oldIndex$$3$$], $bMatchFound$$1$$ = D.$JSCompiler_alias_FALSE$$, $newIndex$$6$$ = 0;$newIndex$$6$$ < $newList$$1$$.length;$newIndex$$6$$++) {
        if($oldItem$$1$$ === $newList$$1$$[$newIndex$$6$$]) {
          $newList$$1$$.splice($newIndex$$6$$, 1);
          $inserts$$ = $inserts$$.concat($newList$$1$$.splice(0, $newIndex$$6$$));
          $bMatchFound$$1$$ = D.$JSCompiler_alias_TRUE$$;
          $updates$$.push($oldItem$$1$$);
          break
        }
      }
      $bMatchFound$$1$$ || $deletes$$.push($oldItem$$1$$)
    }
  }
  for($i$$484_oldLen$$ = 0;$i$$484_oldLen$$ < $newList$$1$$.length;$i$$484_oldLen$$++) {
    $newList$$1$$[$i$$484_oldLen$$] && $inserts$$.push($newList$$1$$[$i$$484_oldLen$$])
  }
  return[$updates$$, $inserts$$, $deletes$$]
};
D.$DvtDCChartUtils$$.$drawDirectionPointer$ = function $$DvtDCChartUtils$$$$drawDirectionPointer$$($context$$540_ret$$52$$, $bDown$$1_ptrCmds$$, $bHoriz$$4$$, $fc$$9$$) {
  $bDown$$1_ptrCmds$$ = $bHoriz$$4$$ ? (D.$DvtAgent$$.$isRightToLeft$($context$$540_ret$$52$$) ? !$bDown$$1_ptrCmds$$ : $bDown$$1_ptrCmds$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $bDown$$1_ptrCmds$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
  $context$$540_ret$$52$$ = new D.$DvtPath$$($context$$540_ret$$52$$, $bDown$$1_ptrCmds$$);
  $context$$540_ret$$52$$.$setSolidFill$($fc$$9$$);
  return $context$$540_ret$$52$$
};
D.$DvtDCFunnelSlice$$ = function $$DvtDCFunnelSlice$$$($peer$$7$$, $duration$$74$$) {
  this.Init($peer$$7$$, $duration$$74$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCFunnelSlice$$, D.$DvtDCChartAbstract$$, "DvtDCFunnelSlice");
D.$DvtDCFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtDCFunnelSlice$$$$$animateUpdate$$($handler$$33$$, $oldDC$$3$$) {
  var $obj$$259$$ = this.$_shape$, $nodePlayable$$10_startState$$4$$ = $oldDC$$3$$.$_shape$.$getAnimationParams$(), $endState$$10$$ = $obj$$259$$.$getAnimationParams$();
  D.$DvtArrayUtils$$.$equals$($nodePlayable$$10_startState$$4$$, $endState$$10$$) || ($obj$$259$$.$setAnimationParams$($nodePlayable$$10_startState$$4$$), $nodePlayable$$10_startState$$4$$ = new D.$DvtCustomAnimation$$($obj$$259$$.$_context$, this, this.$_duration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$10_startState$$4$$.$_animator$, "typeNumberArray", $obj$$259$$, $obj$$259$$.$getAnimationParams$, $obj$$259$$.$setAnimationParams$, $endState$$10$$), this.$_indicator$ && $nodePlayable$$10_startState$$4$$.$setOnEnd$(this.$_onEndAnimation$, 
  this), $handler$$33$$.add($nodePlayable$$10_startState$$4$$, 0))
};
D.$DvtDCFunnelSlice$$.prototype.$animateInsert$ = function $$DvtDCFunnelSlice$$$$$animateInsert$$($handler$$34$$) {
  var $obj$$260$$ = this.$_shape$, $endState$$11$$ = $obj$$260$$.$getAnimationParams$(), $nodePlayable$$11_startState$$5$$ = $endState$$11$$.slice(0);
  $nodePlayable$$11_startState$$5$$[0] += $nodePlayable$$11_startState$$5$$[1] / 2;
  $nodePlayable$$11_startState$$5$$[1] = 0;
  $nodePlayable$$11_startState$$5$$[3] = 0;
  $obj$$260$$.$setAnimationParams$($nodePlayable$$11_startState$$5$$);
  $nodePlayable$$11_startState$$5$$ = new D.$DvtCustomAnimation$$($obj$$260$$.$_context$, this, this.$_duration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$11_startState$$5$$.$_animator$, "typeNumberArray", $obj$$260$$, $obj$$260$$.$getAnimationParams$, $obj$$260$$.$setAnimationParams$, $endState$$11$$);
  $handler$$34$$.add($nodePlayable$$11_startState$$5$$, 0)
};
D.$DvtDCFunnelSlice$$.prototype.$animateDelete$ = function $$DvtDCFunnelSlice$$$$$animateDelete$$($handler$$35$$, $delContainer$$2$$) {
  var $obj$$261$$ = this.$_shape$;
  $delContainer$$2$$.$addChild$($obj$$261$$);
  var $nodePlayable$$12_startState$$6$$ = $obj$$261$$.$getAnimationParams$(), $endState$$12$$ = $nodePlayable$$12_startState$$6$$.slice(0);
  $endState$$12$$[0] += $nodePlayable$$12_startState$$6$$[1] / 2;
  $endState$$12$$[1] = 0;
  $endState$$12$$[3] = 0;
  $nodePlayable$$12_startState$$6$$ = new D.$DvtCustomAnimation$$($obj$$261$$.$_context$, this, this.$_duration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$12_startState$$6$$.$_animator$, "typeNumberArray", $obj$$261$$, $obj$$261$$.$getAnimationParams$, $obj$$261$$.$setAnimationParams$, $endState$$12$$);
  $handler$$35$$.add($nodePlayable$$12_startState$$6$$, 0)
};
D.$DvtChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtChart", D.$DvtChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChart$$, D.$DvtBaseComponent$$, "DvtChart");
D.$DvtChart$newInstance$$ = function $$DvtChart$newInstance$$$($context$$293$$, $callback$$50$$, $callbackObj$$26$$) {
  return new D.$DvtChartImpl$$($context$$293$$, $callback$$50$$, $callbackObj$$26$$)
};
D.$DvtChart$$.newInstance = D.$DvtChart$newInstance$$;
D.$DvtChart$$.getDefaults = function $$DvtChart$$$getDefaults$($skin$$8$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtChartDefaults$$, $skin$$8$$)
};
D.$DvtChart$$.prototype.Init = function $$DvtChart$$$$Init$($context$$294$$, $callback$$51$$, $callbackObj$$27$$) {
  D.$DvtChart$$.$superclass$.Init.call(this, $context$$294$$, $callback$$51$$, $callbackObj$$27$$);
  this.$Bundle$ = new D.$DvtChartBundle$$;
  this.$Defaults$ = new D.$DvtChartDefaults$$;
  this.$EventManager$ = new D.$DvtChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  D.$DvtAgent$$.$isTouchDevice$() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("chart1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$SetOptions$ = function $$DvtChart$$$$$SetOptions$$($handler$$inline_2077_options$$17$$) {
  $handler$$inline_2077_options$$17$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($handler$$inline_2077_options$$17$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), D.$DvtChartDataUtils$$.$processDataObject$(this), "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) ? ($handler$$inline_2077_options$$17$$ = new D.$DvtChartSeriesRolloverHandler$$(this, this.$EventManager$), this.$EventManager$.$_seriesRolloverHandler$ = 
  $handler$$inline_2077_options$$17$$) : this.$EventManager$.$_seriesRolloverHandler$ = D.$JSCompiler_alias_NULL$$, D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtChart$$.prototype.$render$ = function $$DvtChart$$$$$render$$($options$$18_paSpace$$, $container$$14_width$$38$$, $animationDuration_height$$31$$) {
  var $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this), $oldChart$$ = D.$JSCompiler_alias_NULL$$;
  this.$Options$ && "none" !== $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$ && ($oldChart$$ = {type:this.$getType$(), options:this.$Options$, $peers$:this.$getObjects$().slice(0), $getOptions$:(0,D.$JSCompiler_get$$)("options"), $pieChart$:this.$pieChart$});
  this.$__cleanUp$();
  this.$SetOptions$($options$$18_paSpace$$);
  !(0,window.isNaN)($container$$14_width$$38$$) && !(0,window.isNaN)($animationDuration_height$$31$$) && (this.$Width$ = $container$$14_width$$38$$, this.$Height$ = $animationDuration_height$$31$$);
  $container$$14_width$$38$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($container$$14_width$$38$$);
  D.$DvtChartRenderer$$.$render$(this, $container$$14_width$$38$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$_animation$ && this.$_animation$.stop();
  var $animationOnDisplay$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
  $animationDuration_height$$31$$ = D.$DvtChartStyleUtils$$.$getAnimationDuration$(this);
  var $bounds$$34$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$), $bBlackBoxUpdate$$1$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$ && $options$$18_paSpace$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$, this.$_container$, $container$$14_width$$38$$, $bounds$$34$$, $animationDuration_height$$31$$)) ? $bBlackBoxUpdate$$1$$ = D.$JSCompiler_alias_TRUE$$ : ($options$$18_paSpace$$ = this.$_plotAreaSpace$, this.$_delContainer$ = 
  D.$DvtPlotAreaRenderer$$.$createClippedGroup$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, $options$$18_paSpace$$.$w$, $options$$18_paSpace$$.$h$)), this.$_animation$ = D.$DvtAnimOnDC$$.$createAnimation$($oldChart$$, this, $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$, $animationDuration_height$$31$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.$addChild$(this.$_delContainer$) : 
  this.$getPlotArea$().$addChild$(this.$_delContainer$)))) : "none" !== $animationOnDisplay$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, $animationOnDisplay$$, $container$$14_width$$38$$, $bounds$$34$$, $animationDuration_height$$31$$), this.$_animation$ || (this.$_animation$ = D.$DvtAnimOnDisplay$$.$createAnimation$(this, $animationOnDisplay$$, $animationDuration_height$$31$$)));
  this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
  $bBlackBoxUpdate$$1$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = D.$JSCompiler_alias_NULL$$);
  this.$_container$ = $container$$14_width$$38$$;
  (D.$DvtChartTypeUtils$$.$isPie$(this) || D.$DvtChartTypeUtils$$.$isFunnel$(this) || D.$DvtChartTypeUtils$$.$isPolar$(this) ? 0 : "on" === this.$Options$.dataCursor || "auto" === this.$Options$.dataCursor && D.$DvtAgent$$.$isTouchDevice$() && (D.$DvtChartTypeUtils$$.$isLine$(this) || D.$DvtChartTypeUtils$$.$isArea$(this))) ? (this.$DataCursor$ = D.$DvtChartTypeUtils$$.$isHorizontal$(this) ? new D.$DvtDataCursor$$(this.$_context$, D.$JSCompiler_alias_TRUE$$) : new D.$DvtDataCursor$$(this.$_context$, 
  D.$JSCompiler_alias_FALSE$$), $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$ = this.$Options$.dataCursorBehavior, "auto" == $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$ && ($animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$ = D.$DvtChartTypeUtils$$.$isLine$(this) || D.$DvtChartTypeUtils$$.$isArea$(this) ? "smooth" : "snap"), "snap" == $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$ ? this.$DataCursor$.$_behavior$ = "SNAP" : "smooth" == 
  $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$ && (this.$DataCursor$.$_behavior$ = "SMOOTH"), this.$addChild$(this.$DataCursor$), $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$ = new D.$DvtChartDCEH$$(this), this.$EventManager$.$_dataCursorHandler$ = $animationOnDataChange_dataCursorBehavior_handler$$inline_2089$$) : this.$EventManager$.$_dataCursorHandler$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.render = D.$DvtChart$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtChart$$.$superclass$.$destroy$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$DataCursor$ && (this.removeChild(this.$DataCursor$), this.$DataCursor$ = D.$JSCompiler_alias_NULL$$);
  var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_2098$$ = this.$EventManager$;
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_2098$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_2098$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_2098$$.$_dataCursorHandler$)
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.removeChild(this.$_delContainer$) : this.$getPlotArea$().removeChild(this.$_delContainer$));
  this.$_animation$ = this.$_delContainer$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$4$$) {
  return new D.$DvtChartKeyboardHandler$$($manager$$4$$, this)
};
D.$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new D.$DvtChartAutomation$$(this)
};
D.$DvtChart$$.prototype.getAutomation = D.$DvtChart$$.prototype.$getAutomation$;
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
D.$DvtChartSelectionEvent$$ = function $$DvtChartSelectionEvent$$$($selection$$3$$, $xMin$$1$$, $xMax$$1$$, $startGroup$$1$$, $endGroup$$1$$, $yMin$$1$$, $yMax$$1$$, $y2Min$$, $y2Max$$) {
  D.$DvtChartSelectionEvent$$.$superclass$.Init.call(this, $selection$$3$$);
  this.$_xMin$ = $xMin$$1$$;
  this.$_xMax$ = $xMax$$1$$;
  this.$_startGroup$ = $startGroup$$1$$;
  this.$_endGroup$ = $endGroup$$1$$;
  this.$_yMin$ = $yMin$$1$$;
  this.$_yMax$ = $yMax$$1$$;
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
D.$DvtChartViewportChangeEvent$$ = function $$DvtChartViewportChangeEvent$$$($xMin$$, $xMax$$, $startGroup$$, $endGroup$$, $yMin$$, $yMax$$) {
  D.$DvtChartViewportChangeEvent$$.$superclass$.Init.call(this, "viewportChange");
  this.$_xMin$ = $xMin$$;
  this.$_xMax$ = $xMax$$;
  this.$_startGroup$ = $startGroup$$;
  this.$_endGroup$ = $endGroup$$;
  this.$_yMin$ = $yMin$$;
  this.$_yMax$ = $yMax$$
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
D.$DvtChartImpl$$ = function $$DvtChartImpl$$$($context$$547$$, $callback$$110$$, $callbackObj$$84$$) {
  this.Init($context$$547$$, $callback$$110$$, $callbackObj$$84$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartImpl$$, D.$DvtChart$$, "DvtChartImpl");
D.$DvtChartImpl$$.prototype.Init = function $$DvtChartImpl$$$$Init$($context$$548$$, $callback$$111$$, $callbackObj$$85$$) {
  D.$DvtChartImpl$$.$superclass$.Init.call(this, $context$$548$$, $callback$$111$$, $callbackObj$$85$$);
  this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_peers$ = [];
  this.$_seriesStyleArray$ = [];
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtChartImpl$$.prototype.$SetOptions$ = function $$DvtChartImpl$$$$$SetOptions$$($options$$93_popupBehaviors_selectionMode$$2$$) {
  D.$DvtChartImpl$$.$superclass$.$SetOptions$.call(this, $options$$93_popupBehaviors_selectionMode$$2$$);
  $options$$93_popupBehaviors_selectionMode$$2$$ = this.$Options$.selection;
  this.$_selectionHandler$ = "single" == $options$$93_popupBehaviors_selectionMode$$2$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$93_popupBehaviors_selectionMode$$2$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  if($options$$93_popupBehaviors_selectionMode$$2$$ = this.$Options$._spb) {
    this.$_popupBehaviors$ = {};
    for(var $stampId$$ in $options$$93_popupBehaviors_selectionMode$$2$$) {
      for(var $popupBehaviorArray$$ = $options$$93_popupBehaviors_selectionMode$$2$$[$stampId$$], $i$$489$$ = 0;$i$$489$$ < $popupBehaviorArray$$.length;$i$$489$$++) {
        this.$_popupBehaviors$[$stampId$$] || (this.$_popupBehaviors$[$stampId$$] = []);
        var $popupBehavior$$ = $popupBehaviorArray$$[$i$$489$$];
        this.$_popupBehaviors$[$stampId$$].push(new D.$DvtShowPopupBehavior$$($popupBehavior$$.popupId, $popupBehavior$$.triggerType, $popupBehavior$$.alignId, $popupBehavior$$.align))
      }
    }
  }
};
D.$DvtChart$$.prototype.filter = function $$DvtChart$$$$filter$($category$$9$$, $type$$172$$) {
  D.$DvtChartEventUtils$$.$setVisibility$(this, $category$$9$$, "out" == $type$$172$$ ? "hidden" : "visible");
  this.$render$(this.$Options$)
};
D.$DvtChart$$.prototype.filter = D.$DvtChart$$.prototype.filter;
D.$DvtChart$$.prototype.$highlight$ = function $$DvtChart$$$$$highlight$$($categories$$7$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$7$$, this.$getObjects$());
  this.$legend$ && this.$legend$.$highlight$($categories$$7$$);
  this.$pieChart$ && this.$pieChart$.$highlight$($categories$$7$$)
};
D.$DvtChart$$.prototype.highlight = D.$DvtChart$$.prototype.$highlight$;
D.$DvtChartImpl$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$DvtChartImpl$$.prototype.$processEvent$ = function $$DvtChartImpl$$$$$processEvent$$($event$$401$$, $source$$14$$) {
  var $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ = $event$$401$$.$getType$();
  if($actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    this.filter($event$$401$$.$_category$, $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ ? "out" : "in")
  }else {
    if("categoryRollOver" == $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ || "categoryRollOut" == $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$) {
      "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) && ((0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$401$$, this.$getObjects$()), this.$_distributeToChildren$($event$$401$$, $source$$14$$))
    }else {
      if("selection" == $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$) {
        $event$$401$$ = this.$_processSelectionEvent$($event$$401$$)
      }else {
        if("dvtPanZoom" == $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$) {
          var $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$ = $event$$401$$, $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ = $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$getSubtype$(), $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ = "dvtPanEndEvent" == $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ || 
          "dvtZoomEvent" == $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ || "dvtPinchEndEvent" == $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$, $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ = "dvtPanStartEvent" == $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ || 
          "dvtPinchStartEvent" == $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$;
          D.$DvtAgent$$.$isTouchDevice$() && ($actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ && this.$_panZoomTarget$ != this.$_plotArea$) && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
          D.$DvtChartEventUtils$$.$isLiveScroll$(this) ? ($bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$dxMin$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$dxMax$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$dyMin$, 
          $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$dyMax$), $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ || (this.$setViewport$($bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$, $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, 
          $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$))) : ($bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$dxMinTotal$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$dxMaxTotal$, 
          $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$dyMinTotal$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$dyMaxTotal$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$), $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ && this.$setViewport$($bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$, 
          $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$));
          $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ ? (D.$DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = D.$JSCompiler_alias_NULL$$), $event$$401$$ = D.$DvtChartTypeUtils$$.$isBLAC$(this) ? new D.$DvtChartViewportChangeEvent$$($bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$xMin$, 
          $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$xMax$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$startGroup$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$($bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$xMin$, 
          $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$yMin$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.$yMax$)) : $event$$401$$ = D.$JSCompiler_alias_NULL$$
        }else {
          if("dvtMarquee" == $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$) {
            $event$$401$$ = (0,D.$JSCompiler_StaticMethods__processMarqueeEvent$$)(this, $event$$401$$)
          }else {
            if("overview" == $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$) {
              if($actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ = $event$$401$$.$getSubType$(), "dropCallback" != $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$) {
                $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ = $event$$401$$.$getParamValue$("newStartTime");
                $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$ = $event$$401$$.$getParamValue$("newEndTime");
                $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ = "scrollTime" == $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ || "scrollEnd" == $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ || "rangeChange" == $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$;
                if(D.$DvtChartEventUtils$$.$isLiveScroll$(this) || $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$) {
                  $source$$14$$ == this.$yScrollbar$ ? this.$setViewport$({$yMin$:$actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$, $yMax$:$bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$}, $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$) : this.$setViewport$({$xMin$:$actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$, 
                  $xMax$:$bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$}, $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$)
                }
                $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ ? $source$$14$$ == this.$yScrollbar$ ? $event$$401$$ = new D.$DvtChartViewportChangeEvent$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$) : 
                ($actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$(this.$xAxis$, $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$), $event$$401$$ = new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$, 
                $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$, $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$.$startGroup$, $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : $event$$401$$ = D.$JSCompiler_alias_NULL$$
              }else {
                $event$$401$$ = D.$JSCompiler_alias_VOID$$
              }
            }else {
              "showPopup" == $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ ? ($actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ = $event$$401$$, "mouseHover" != $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$.triggerType && (this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) && ($bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$ = 
              D.$DvtChartEventUtils$$.$processIds$(this, (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$getSelectionHandler$())), $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ = new D.$DvtShowPopupEvent$$($actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$.$_showPopupBehavior$, $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$.$_launcherBounds$, $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$.$_launcherId$), 
              (0,D.$JSCompiler_StaticMethods_addParam$$)($actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$, "clientRowKey", $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$)), $event$$401$$ = $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$) : $event$$401$$ instanceof D.$DvtComponentUIEvent$$ && ($event$$401$$ = (0,D.$JSCompiler_StaticMethods__processComponentUIEvent$$)(this, $event$$401$$, 
              $source$$14$$))
            }
          }
        }
      }
    }
  }
  if($event$$401$$ instanceof D.$DvtChartSelectionEvent$$) {
    var $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$ = this.$getOptions$(), $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ = $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.selectedItems, $newItems_removedSet$$ = D.$DvtChartDataUtils$$.$getCurrentSelection$(this);
    $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$.selectedItems = $newItems_removedSet$$;
    var $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ = $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ ? $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$ : [], $newItems_removedSet$$ = $newItems_removedSet$$ ? $newItems_removedSet$$ : [], $newIndex$$7_oldIndex$$4$$, $oldItemId_oldSet$$ = {};
    for($newIndex$$7_oldIndex$$4$$ = 0;$newIndex$$7_oldIndex$$4$$ < $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$.length;$newIndex$$7_oldIndex$$4$$++) {
      $oldItemId_oldSet$$[$actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$[$newIndex$$7_oldIndex$$4$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$ = {};
    for($newIndex$$7_oldIndex$$4$$ = 0;$newIndex$$7_oldIndex$$4$$ < $newItems_removedSet$$.length;$newIndex$$7_oldIndex$$4$$++) {
      $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$[$newItems_removedSet$$[$newIndex$$7_oldIndex$$4$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$ = {};
    for($newIndex$$7_oldIndex$$4$$ = 0;$newIndex$$7_oldIndex$$4$$ < $newItems_removedSet$$.length;$newIndex$$7_oldIndex$$4$$++) {
      var $newItemId$$ = $newItems_removedSet$$[$newIndex$$7_oldIndex$$4$$].id;
      $oldItemId_oldSet$$[$newItemId$$] || ($actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$[$newItemId$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $newItems_removedSet$$ = {};
    for($newIndex$$7_oldIndex$$4$$ = 0;$newIndex$$7_oldIndex$$4$$ < $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$.length;$newIndex$$7_oldIndex$$4$$++) {
      $oldItemId_oldSet$$ = $actionDone$$inline_5190_event$$inline_5204_oldItems_start$$inline_5198_type$$173$$[$newIndex$$7_oldIndex$$4$$].id, $bounds$$inline_5192_end$$inline_5199_event$$inline_5188_newSet_options$$94_selection$$inline_5205$$[$oldItemId_oldSet$$] || ($newItems_removedSet$$[$oldItemId_oldSet$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $event$$401$$.addedSet = $actionDone$$inline_5200_actionStart$$inline_5191_addedSet_startEndGroup$$inline_5201_subtype$$inline_5189_subtype$$inline_5197$$;
    $event$$401$$.removedSet = $newItems_removedSet$$
  }
  $event$$401$$ && this.$__dispatchEvent$($event$$401$$)
};
D.$DvtChartImpl$$.prototype.$_processSelectionEvent$ = function $$DvtChartImpl$$$$$_processSelectionEvent$$($event$$402_selection$$9$$) {
  $event$$402_selection$$9$$ = D.$DvtChartEventUtils$$.$processIds$(this, $event$$402_selection$$9$$.getSelection());
  if(this.$overview$) {
    var $ovChart$$ = this.$overview$.$_chart$;
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($ovChart$$.$getSelectionHandler$(), $event$$402_selection$$9$$, $ovChart$$.$getObjects$())
  }
  return new D.$DvtChartSelectionEvent$$($event$$402_selection$$9$$)
};
D.$JSCompiler_StaticMethods__processMarqueeEvent$$ = function $$JSCompiler_StaticMethods__processMarqueeEvent$$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$404$$) {
  var $selection$$10_subtype$$8$$ = $event$$404$$.$getSubtype$(), $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$EventManager$;
  D.$DvtChartEventUtils$$.$adjustBounds$($event$$404$$);
  if("select" == $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$_dragMode$) {
    $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$ = $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$getSelectionHandler$();
    if("dvtMarqueeStartEvent" == $selection$$10_subtype$$8$$) {
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$ = $event$$404$$.ctrlKey ? (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$) : []
    }else {
      var $targets$$5$$ = D.$DvtChartEventUtils$$.$getBoundedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$404$$);
      (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$getObjects$());
      for(var $target$$inline_5210$$, $i$$inline_5211$$ = 0;$i$$inline_5211$$ < $targets$$5$$.length;$i$$inline_5211$$++) {
        $target$$inline_5210$$ = $targets$$5$$[$i$$inline_5211$$], (!$target$$inline_5210$$ || !$target$$inline_5210$$.$isUnrelatedToSelection$) && (0,D.$JSCompiler_StaticMethods__addToSelection$$)($bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$, $target$$inline_5210$$, D.$JSCompiler_alias_TRUE$$)
      }
    }
    if("dvtMarqueeEndEvent" == $selection$$10_subtype$$8$$) {
      return $selection$$10_subtype$$8$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$), $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$ && ($bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$.$_chart$, (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$getSelectionHandler$(), $selection$$10_subtype$$8$$, 
      $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$getObjects$())), $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$404$$, D.$JSCompiler_alias_FALSE$$), new D.$DvtChartSelectionEvent$$($selection$$10_subtype$$8$$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$xMin$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$xMax$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$startGroup$, 
      $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$endGroup$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$yMin$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$yMax$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$y2Min$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$y2Max$)
    }
  }else {
    if("zoom" == $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$_dragMode$) {
      if("dvtMarqueeEndEvent" != $selection$$10_subtype$$8$$) {
        return D.$JSCompiler_alias_NULL$$
      }
      $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$404$$, D.$JSCompiler_alias_TRUE$$);
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$setViewport$($bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$, D.$JSCompiler_alias_TRUE$$);
      (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$);
      D.$DvtChartRenderer$$.$_setEventHandlers$($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
      return D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__processMarqueeEvent$self$$) ? new D.$DvtChartViewportChangeEvent$$($bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$xMin$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$xMax$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$startGroup$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$($bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$xMin$, 
      $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$yMin$, $bounds$$82_em$$3_ovChart$$1_selectionHandler$$12$$.$yMax$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processComponentUIEvent$$ = function $$JSCompiler_StaticMethods__processComponentUIEvent$$$($JSCompiler_StaticMethods__processComponentUIEvent$self$$, $event$$407$$, $source$$16$$) {
  var $params$$29$$ = $event$$407$$.params, $chartObjType$$ = $params$$29$$.type;
  return $source$$16$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$legend$ ? ($chartObjType$$ == D.$DvtLegendConstants$$.$LEGEND_ITEM$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_ITEM$ : $chartObjType$$ == D.$DvtLegendConstants$$.$TITLE$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_TITLE$ : $chartObjType$$ == D.$DvtLegendConstants$$.$BACKGROUND$ && ($chartObjType$$ = D.$DvtChartConstants$$.$LEGEND$), new D.$DvtComponentUIEvent$$($event$$407$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, 
  D.$JSCompiler_alias_NULL$$, $params$$29$$.id))) : $source$$16$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$xAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$407$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$29$$.id))) : 
  $source$$16$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$yAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$407$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$29$$.id))) : $source$$16$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$y2Axis$ ? 
  ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$407$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$29$$.id))) : $event$$407$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartImpl$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_distributeToChildren$ = function $$JSCompiler_prototypeAlias$$$$_distributeToChildren$$($event$$408$$, $source$$17$$) {
  this.$legend$ && this.$legend$ != $source$$17$$ && this.$legend$.$processEvent$($event$$408$$, $source$$17$$);
  this.$pieChart$ && this.$pieChart$ != $source$$17$$ && this.$pieChart$.$processEvent$($event$$408$$, $source$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  D.$DvtChartImpl$$.$superclass$.$__cleanUp$.call(this);
  this.$_peers$.length = 0;
  this.$yScrollbar$ = this.$xScrollbar$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)(this);
  this.$dragButtons$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__cleanUpAxisAndPlotArea$ = function $$JSCompiler_prototypeAlias$$$$__cleanUpAxisAndPlotArea$$() {
  var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5213$$ = this.$EventManager$;
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5213$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5213$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5213$$.$_dataCursorHandler$);
  this.$_peers$.length = 0;
  this.$_container$.removeChild(this.$xAxis$);
  this.$_container$.removeChild(this.$yAxis$);
  this.$_container$.removeChild(this.$y2Axis$);
  this.$_plotArea$ == this.$_panZoomTarget$ ? this.$_plotArea$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : this.$_container$.removeChild(this.$_plotArea$)
};
D.$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$15$$) {
  this.$_peers$.push($peer$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$JSCompiler_prototypeAlias$$.$getOptions$ = function $$JSCompiler_prototypeAlias$$$$getOptions$$() {
  this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  return this.$Options$
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getPlotArea$ = (0,D.$JSCompiler_get$$)("$_plotArea$");
D.$JSCompiler_prototypeAlias$$.$getType$ = function $$JSCompiler_prototypeAlias$$$$getType$$() {
  return this.$getOptions$().type
};
D.$JSCompiler_prototypeAlias$$.$getGapRatio$ = function $$JSCompiler_prototypeAlias$$$$getGapRatio$$() {
  var $options$$95_wRatio$$1$$ = this.$getOptions$();
  if($options$$95_wRatio$$1$$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($options$$95_wRatio$$1$$.layout.gapRatio)) {
    return $options$$95_wRatio$$1$$.layout.gapRatio
  }
  var $options$$95_wRatio$$1$$ = window.Math.min(this.$Width$ / 400, 1), $hRatio$$1$$ = window.Math.min(this.$Height$ / 300, 1);
  return window.Math.min($options$$95_wRatio$$1$$, $hRatio$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$1$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$1$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($detObj$$) {
  var $par$$2$$ = $detObj$$.getParent();
  if($par$$2$$) {
    var $parentChildCount$$3$$ = $par$$2$$.$getNumChildren$();
    1 < $parentChildCount$$3$$ - this.$_numFrontObjs$ && ($par$$2$$.removeChild($detObj$$), $par$$2$$.$addChildAt$($detObj$$, $parentChildCount$$3$$ - this.$_numFrontObjs$ - 1))
  }
  (!$detObj$$.$isSelected$() || !$detObj$$.$isHoverEffectShown$()) && this.$_numSelectedObjsInFront$++
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($detObj$$1$$) {
  0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
  var $par$$3$$ = $detObj$$1$$.getParent();
  if($par$$3$$) {
    var $newIndex$$9$$ = $par$$3$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
    0 <= $newIndex$$9$$ && ($par$$3$$.removeChild($detObj$$1$$), $par$$3$$.$addChildAt$($detObj$$1$$, $newIndex$$9$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$setViewport$ = function $$JSCompiler_prototypeAlias$$$$setViewport$$($bounds$$83$$, $actionDone$$2$$) {
  D.$DvtChartTypeUtils$$.$isScrollSupported$(this) && ($bounds$$83$$.$xMax$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMax = $bounds$$83$$.$xMax$), $bounds$$83$$.$xMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMin = $bounds$$83$$.$xMin$), D.$DvtChartTypeUtils$$.$isBLAC$(this) ? (this.$Options$.xAxis.viewportStartGroup = D.$JSCompiler_alias_NULL$$, this.$Options$.xAxis.viewportEndGroup = D.$JSCompiler_alias_NULL$$) : ($bounds$$83$$.$yMax$ != D.$JSCompiler_alias_NULL$$ && 
  (this.$Options$.yAxis.viewportMax = $bounds$$83$$.$yMax$), $bounds$$83$$.$yMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.yAxis.viewportMin = $bounds$$83$$.$yMin$)), this.$Options$._duringAnimation = !$actionDone$$2$$, D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$(this, this.$_container$))
};
D.$JSCompiler_StaticMethods_setScrollbarViewport$$ = function $$JSCompiler_StaticMethods_setScrollbarViewport$$$($JSCompiler_StaticMethods_setScrollbarViewport$self$$, $bounds$$84$$) {
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$.$setViewportRange$($bounds$$84$$.$xMin$, $bounds$$84$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$.$setViewportRange$($bounds$$84$$.$xMin$, $bounds$$84$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$.$setViewportRange$($bounds$$84$$.$yMin$, $bounds$$84$$.$yMax$)
};
D.$DvtChartImpl$$.prototype.$getRadius$ = (0,D.$JSCompiler_get$$)("$_radius$");
D.$JSCompiler_StaticMethods_hideDragButtons$$ = function $$JSCompiler_StaticMethods_hideDragButtons$$$($JSCompiler_StaticMethods_hideDragButtons$self$$) {
  $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$DvtChartAutomation$$ = function $$DvtChartAutomation$$$($dvtComponent$$3$$) {
  this.$_chart$ = $dvtComponent$$3$$;
  this.$_options$ = this.$_chart$.$getOptions$();
  this.$_legend$ = this.$_chart$.legend;
  this.$_axis$ = this.$_chart$.$xAxis$;
  this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : D.$JSCompiler_alias_NULL$$;
  this.$_axisAutomation$ = this.$_axis$ ? this.$_axis$.$getAutomation$() : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtChartAutomation", D.$DvtChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartAutomation$$, D.$DvtAutomation$$, "DvtChartAutomation");
D.$DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$) {
  if($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$.$isDescendantOf$(this.$_legend$)) {
    $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$);
    a: {
      if($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ = (0,D.$JSCompiler_StaticMethods__getLegendItem$$)(this.$_legendAutomation$, this.$_legend$.$__getOptions$(), $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$)) {
        for(var $groupIndex$$11_logicalObj$$11_s$$inline_5312$$ = 0;$groupIndex$$11_logicalObj$$11_s$$inline_5312$$ < this.$_options$.series.length;$groupIndex$$11_logicalObj$$11_s$$inline_5312$$++) {
          if(this.$_options$.series[$groupIndex$$11_logicalObj$$11_s$$inline_5312$$].name == $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$.text) {
            $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ = "series[" + $groupIndex$$11_logicalObj$$11_s$$inline_5312$$ + "]";
            break a
          }
        }
      }
      $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ = D.$JSCompiler_alias_NULL$$
    }
    return $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$
  }
  if($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$.$isDescendantOf$(this.$_axis$)) {
    return $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ = this.$_axisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$), ($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ = $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$.substring($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$.indexOf("[") + 
    1, $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$.indexOf("]"))) ? "group[" + $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ + "]" : D.$JSCompiler_alias_NULL$$
  }
  if("pie" == this.$_options$.type) {
    if($groupIndex$$11_logicalObj$$11_s$$inline_5312$$ = $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$.$_logicalObjects$[0].logicalObject) {
      return"dataItem[" + $groupIndex$$11_logicalObj$$11_s$$inline_5312$$.$getSeriesIndex$() + "]"
    }
  }else {
    if($groupIndex$$11_logicalObj$$11_s$$inline_5312$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_chart$.$getEventManager$(), $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$), $groupIndex$$11_logicalObj$$11_s$$inline_5312$$ instanceof D.$DvtChartObjPeer$$) {
      $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ = $groupIndex$$11_logicalObj$$11_s$$inline_5312$$.$getSeriesIndex$();
      $groupIndex$$11_logicalObj$$11_s$$inline_5312$$ = $groupIndex$$11_logicalObj$$11_s$$inline_5312$$.$getGroupIndex$();
      if($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ != D.$JSCompiler_alias_NULL$$ && 0 <= $groupIndex$$11_logicalObj$$11_s$$inline_5312$$ && "funnel" != this.$_options$.type) {
        return"dataItem[" + $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ + "][" + $groupIndex$$11_logicalObj$$11_s$$inline_5312$$ + "]"
      }
      if($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ != D.$JSCompiler_alias_NULL$$ && $groupIndex$$11_logicalObj$$11_s$$inline_5312$$ == D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ && "funnel" == this.$_options$.type) {
        return"dataItem[" + $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ + "]"
      }
      if($JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ != D.$JSCompiler_alias_NULL$$ && ($groupIndex$$11_logicalObj$$11_s$$inline_5312$$ == D.$JSCompiler_alias_NULL$$ || 0 > $groupIndex$$11_logicalObj$$11_s$$inline_5312$$)) {
        return"series[" + $JSCompiler_inline_result$$319_axisSubId_displayable$$54_index$$inline_5315_legendItem$$inline_5311_legendSubId_seriesIndex$$24$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($secondIndex$$inline_5323_subId$$9$$) {
  var $firstIndex$$2_logicalObj$$12_openParen1$$ = $secondIndex$$inline_5323_subId$$9$$.indexOf("["), $closeParen1_i$$inline_5325_openParen2$$ = $secondIndex$$inline_5323_subId$$9$$.indexOf("]");
  if(0 < $firstIndex$$2_logicalObj$$12_openParen1$$ && 0 < $closeParen1_i$$inline_5325_openParen2$$) {
    var $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$ = $secondIndex$$inline_5323_subId$$9$$.substring(0, $firstIndex$$2_logicalObj$$12_openParen1$$);
    if("group" == $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$) {
      return this.$_axisAutomation$.$getDomElementForSubId$($secondIndex$$inline_5323_subId$$9$$)
    }
    if("series" == $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$) {
      return $secondIndex$$inline_5323_subId$$9$$ = "item" + (0,D.$JSCompiler_StaticMethods__getIndicesFromSeries$$)(this.$_legendAutomation$, this.$_options$.series[$secondIndex$$inline_5323_subId$$9$$.substring($secondIndex$$inline_5323_subId$$9$$.indexOf("[") + 1, $secondIndex$$inline_5323_subId$$9$$.indexOf("]"))], this.$_legend$.$__getOptions$()), this.$_legendAutomation$.$getDomElementForSubId$($secondIndex$$inline_5323_subId$$9$$)
    }
    $firstIndex$$2_logicalObj$$12_openParen1$$ = $secondIndex$$inline_5323_subId$$9$$.substring($firstIndex$$2_logicalObj$$12_openParen1$$ + 1, $closeParen1_i$$inline_5325_openParen2$$);
    if("pie" == this.$_options$.type) {
      a: {
        $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$ = this.$_chart$.$pieChart$;
        if(0 <= $firstIndex$$2_logicalObj$$12_openParen1$$ && $firstIndex$$2_logicalObj$$12_openParen1$$ < $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$.$_slices$.length && ($JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$ = $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$.$_slices$[$firstIndex$$2_logicalObj$$12_openParen1$$].$_topSurface$) && 
        0 < $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$.length) {
          $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$ = $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$[0];
          break a
        }
        $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$ = D.$JSCompiler_alias_NULL$$
      }
      if($JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$) {
        return $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$.$getElem$()
      }
    }
    if("funnel" == this.$_options$.type) {
      var $peers$$inline_5324_secondIndex$$ = D.$DvtFunnelRenderer$$.$_GROUP_INDEX$
    }else {
      $secondIndex$$inline_5323_subId$$9$$ = $secondIndex$$inline_5323_subId$$9$$.substring($closeParen1_i$$inline_5325_openParen2$$ + 1), $closeParen1_i$$inline_5325_openParen2$$ = $secondIndex$$inline_5323_subId$$9$$.indexOf("["), $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$ = $secondIndex$$inline_5323_subId$$9$$.indexOf("]"), 0 <= $closeParen1_i$$inline_5325_openParen2$$ && 0 <= $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$ && 
      ($peers$$inline_5324_secondIndex$$ = $secondIndex$$inline_5323_subId$$9$$.substring($closeParen1_i$$inline_5325_openParen2$$ + 1, $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$))
    }
    a: {
      $secondIndex$$inline_5323_subId$$9$$ = $peers$$inline_5324_secondIndex$$;
      $peers$$inline_5324_secondIndex$$ = this.$_chart$.$getObjects$();
      for($closeParen1_i$$inline_5325_openParen2$$ = 0;$closeParen1_i$$inline_5325_openParen2$$ < $peers$$inline_5324_secondIndex$$.length;$closeParen1_i$$inline_5325_openParen2$$++) {
        var $JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$ = $peers$$inline_5324_secondIndex$$[$closeParen1_i$$inline_5325_openParen2$$].$getSeriesIndex$(), $groupIndex$$inline_5327$$ = $peers$$inline_5324_secondIndex$$[$closeParen1_i$$inline_5325_openParen2$$].$getGroupIndex$();
        if($JSCompiler_StaticMethods__getSliceDisplayable$self$$inline_5317_closeParen2_objType_pieSlice_seriesIndex$$inline_5326_topSurface$$inline_5319$$ == $firstIndex$$2_logicalObj$$12_openParen1$$ && $groupIndex$$inline_5327$$ == $secondIndex$$inline_5323_subId$$9$$) {
          $firstIndex$$2_logicalObj$$12_openParen1$$ = $peers$$inline_5324_secondIndex$$[$closeParen1_i$$inline_5325_openParen2$$];
          break a
        }
      }
      $firstIndex$$2_logicalObj$$12_openParen1$$ = D.$JSCompiler_alias_NULL$$
    }
    if($firstIndex$$2_logicalObj$$12_openParen1$$) {
      return $firstIndex$$2_logicalObj$$12_openParen1$$.$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getDomElementForSubId = D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($firstIndex$$4$$, $secondIndex$$2$$) {
  if("pie" == this.$_options$.type || "funnel" == this.$_options$.type) {
    $secondIndex$$2$$ = 0
  }
  var $dataItem$$9$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $firstIndex$$4$$, $secondIndex$$2$$);
  return{borderColor:D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $firstIndex$$4$$, $secondIndex$$2$$), color:D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $firstIndex$$4$$, $secondIndex$$2$$), label:D.$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $firstIndex$$4$$, $secondIndex$$2$$), targetValue:D.$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $firstIndex$$4$$), tooltip:D.$DvtChartTooltipUtils$$.$getDatatip$(D.$JSCompiler_alias_NULL$$, this.$_chart$, $firstIndex$$4$$, $secondIndex$$2$$), 
  value:D.$DvtChartDataUtils$$.getValue(this.$_chart$, $firstIndex$$4$$, $secondIndex$$2$$), x:D.$DvtChartDataUtils$$.$getXValue$(this.$_chart$, $firstIndex$$4$$, $secondIndex$$2$$), y:$dataItem$$9$$ ? $dataItem$$9$$.y : D.$JSCompiler_alias_NULL$$, z:$dataItem$$9$$ ? $dataItem$$9$$.z : D.$JSCompiler_alias_NULL$$, group:D.$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $secondIndex$$2$$), series:D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $firstIndex$$4$$), selected:D.$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, 
  $firstIndex$$4$$, $secondIndex$$2$$)}
};
D.$DvtChartAutomation$$.prototype.getDataItem = D.$DvtChartAutomation$$.prototype.$getDataItem$;
D.$DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($groupIndex$$13$$) {
  return this.$_options$.groups[$groupIndex$$13$$]
};
D.$DvtChartAutomation$$.prototype.getGroup = D.$DvtChartAutomation$$.prototype.$getGroup$;
D.$DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($seriesIndex$$27$$) {
  return this.$_options$.series[$seriesIndex$$27$$].name
};
D.$DvtChartAutomation$$.prototype.getSeries = D.$DvtChartAutomation$$.prototype.$getSeries$;
D.$DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
  return this.$_options$.groups.length
};
D.$DvtChartAutomation$$.prototype.getGroupCount = D.$DvtChartAutomation$$.prototype.$getGroupCount$;
D.$DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
  return this.$_options$.series.length
};
D.$DvtChartAutomation$$.prototype.getSeriesCount = D.$DvtChartAutomation$$.prototype.$getSeriesCount$;
D.$DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
  return this.$_options$.title.text
};
D.$DvtChartAutomation$$.prototype.getTitle = D.$DvtChartAutomation$$.prototype.$getTitle$;
D.$DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
  var $legendSpace$$1$$ = this.$_legend$.$_bounds$, $point$$39$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_chart$, new D.$DvtPoint$$($legendSpace$$1$$.x, $legendSpace$$1$$.y));
  return{bounds:{x:$point$$39$$.x, y:$point$$39$$.y, width:$legendSpace$$1$$.$w$, height:$legendSpace$$1$$.$h$}, title:this.$_legend$.$__getOptions$().title}
};
D.$DvtChartAutomation$$.prototype.getLegend = D.$DvtChartAutomation$$.prototype.$getLegend$;
D.$DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
  var $plotAreaSpace$$ = this.$_chart$.$_plotAreaSpace$;
  return{bounds:{x:$plotAreaSpace$$.x, y:$plotAreaSpace$$.y, width:$plotAreaSpace$$.$w$, height:$plotAreaSpace$$.$h$}}
};
D.$DvtChartAutomation$$.prototype.getPlotArea = D.$DvtChartAutomation$$.prototype.$getPlotArea$;
D.$DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
  if(this.$_chart$.$xAxis$) {
    var $xAxisSpace$$ = this.$_chart$.$xAxis$.$_bounds$;
    return{bounds:{x:$xAxisSpace$$.x, y:$xAxisSpace$$.y, width:$xAxisSpace$$.$w$, height:$xAxisSpace$$.$h$}, title:this.$_options$.xAxis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getXAxis = D.$DvtChartAutomation$$.prototype.$getXAxis$;
D.$DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
  if(this.$_chart$.$yAxis$) {
    var $yAxisSpace$$ = this.$_chart$.$yAxis$.$_bounds$;
    return{bounds:{x:$yAxisSpace$$.x, y:$yAxisSpace$$.y, width:$yAxisSpace$$.$w$, height:$yAxisSpace$$.$h$}, title:this.$_options$.yAxis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getYAxis = D.$DvtChartAutomation$$.prototype.$getYAxis$;
D.$DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
  if(this.$_chart$.$y2Axis$) {
    var $y2AxisSpace$$ = this.$_chart$.$y2Axis$.$_bounds$;
    return{bounds:{x:$y2AxisSpace$$.x, y:$y2AxisSpace$$.y, width:$y2AxisSpace$$.$w$, height:$y2AxisSpace$$.$h$}, title:this.$_options$.y2Axis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getY2Axis = D.$DvtChartAutomation$$.prototype.$getY2Axis$;
D.$DvtChartAxis$$ = function $$DvtChartAxis$$$($context$$543$$, $callback$$109$$, $callbackObj$$83$$) {
  this.Init($context$$543$$, $callback$$109$$, $callbackObj$$83$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxis$$, D.$DvtAxis$$, "DvtChartAxis");
D.$DvtChartAxis$$.prototype.$getOptions$ = function $$DvtChartAxis$$$$$getOptions$$() {
  return this.$Info$.$Options$
};
D.$JSCompiler_StaticMethods_axisToPlotArea$$ = function $$JSCompiler_StaticMethods_axisToPlotArea$$$($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$53$$, $coord$$1$$, $bRoundResult$$) {
  if("tangential" == $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$53$$.$getOptions$().position) {
    return $coord$$1$$
  }
  if($coord$$1$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$53$$ = $coord$$1$$ - (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$53$$);
  return $bRoundResult$$ === D.$JSCompiler_alias_FALSE$$ ? $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$53$$ : window.Math.round($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$53$$)
};
D.$JSCompiler_StaticMethods_plotAreaToAxis$$ = function $$JSCompiler_StaticMethods_plotAreaToAxis$$$($JSCompiler_StaticMethods_plotAreaToAxis$self$$, $coord$$2$$) {
  if("tangential" == $JSCompiler_StaticMethods_plotAreaToAxis$self$$.$getOptions$().position) {
    return $coord$$2$$
  }
  if($coord$$2$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ret$$54$$ = $coord$$2$$ + (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_plotAreaToAxis$self$$);
  return window.Math.round($ret$$54$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$82$$, $bRoundResult$$2$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getCoordAt$($value$$82$$), $bRoundResult$$2$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$4$$) {
  return this.$Info$ ? this.$Info$.$getBoundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$4$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$83$$, $bRoundResult$$3$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBoundedCoordAt$($value$$83$$), $bRoundResult$$3$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$5$$) {
  return this.$Info$ ? this.$Info$.$getUnboundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$5$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$84$$, $bRoundResult$$4$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getUnboundedCoordAt$($value$$84$$), $bRoundResult$$4$$) : D.$JSCompiler_alias_NULL$$
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
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$544$$) {
  return this.$Info$ ? this.$Info$.$getAxisLine$($context$$544$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$545$$) {
  return this.$Info$ ? this.$Info$.$getMajorGridLines$($context$$545$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$546$$) {
  return this.$Info$ ? this.$Info$.$getMinorGridLines$($context$$546$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMajorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$13$$) {
  this.$Info$ && this.$Info$.$setMajorTickCount$($count$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMinorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$14$$) {
  this.$Info$ && this.$Info$.$setMinorTickCount$($count$$14$$)
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
D.$DvtChartBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtChartBundle$$$$$GetDefaultStringForKey$$($key$$74$$) {
  return D.$DvtChartBundle$$._defaults[$key$$74$$]
};
D.$DvtChartBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtChartBundle");
D.$DvtChartEventManager$$ = function $$DvtChartEventManager$$$($chart$$86$$) {
  D.$DvtChartEventManager$$.$superclass$.Init.call(this, $chart$$86$$.$_context$, $chart$$86$$.$processEvent$, $chart$$86$$);
  this.$_chart$ = $chart$$86$$;
  this.$_dragMode$ = D.$JSCompiler_alias_NULL$$;
  this.$_dragButtonsVisible$ = D.$DvtAgent$$.$isTouchDevice$();
  this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$_seriesRolloverHandler$ = this.$selectButton$ = this.$zoomButton$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventManager$$, D.$DvtEventManager$$, "DvtChartEventManager");
D.$DvtChartEventManager$getUIEventParams$$ = function $$DvtChartEventManager$getUIEventParams$$$($type$$174$$, $id$$197$$, $series$$12$$) {
  return{type:$type$$174$$, id:$id$$197$$, series:$series$$12$$, group:D.$JSCompiler_alias_VOID$$}
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$52$$) {
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  D.$DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$52$$);
  D.$DvtAgent$$.$isTouchDevice$() || (D.$DvtAgent$$.$isPlatformGecko$() ? $displayable$$52$$.$addEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$52$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$53$$) {
  D.$DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$53$$);
  D.$DvtAgent$$.$isTouchDevice$() || (D.$DvtAgent$$.$isPlatformGecko$() ? $displayable$$53$$.$removeEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$53$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$175$$, $logicalObj$$10$$) {
  if($logicalObj$$10$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$10$$.$getParams$() != D.$JSCompiler_alias_NULL$$) {
    $logicalObj$$10$$.$getParams$()
  }else {
    if($logicalObj$$10$$ instanceof D.$DvtPieSlice$$) {
      var $sliceId$$ = $logicalObj$$10$$.getId();
      $sliceId$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ || ($sliceId$$.getId(), $sliceId$$.$getSeries$(), $sliceId$$.$getGroup$())
    }else {
      $logicalObj$$10$$ instanceof D.$DvtChartObjPeer$$ && (0 <= $logicalObj$$10$$.$getSeriesIndex$() && 0 <= $logicalObj$$10$$.$getGroupIndex$() || $logicalObj$$10$$.$getSeriesIndex$(), $logicalObj$$10$$.$getSeries$(), $logicalObj$$10$$.$getGroup$())
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$getLogicalObject$$($target$$93$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $target$$93$$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$12$$, $pageY$$12$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$12$$ - this.$_stageAbsolutePosition$.x, $pageY$$12$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_StaticMethods__getDragHandler$$ = function $$JSCompiler_StaticMethods__getDragHandler$$$($JSCompiler_StaticMethods__getDragHandler$self$$) {
  return"pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$ : "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeZoomHandler$ : "select" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeSelectHandler$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($JSCompiler_temp$$267_event$$411$$) {
  if(D.$DvtAgent$$.$isTouchDevice$()) {
    var $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$ = $JSCompiler_temp$$267_event$$411$$.touches, $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$, $dataCursorOn$$inline_5246_relPos$$inline_5254$$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$;
    1 == $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$.length ? ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) ? ($chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$ = this.$_getRelativePosition$($chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$[0].pageX, $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$[0].pageY), 
    $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$processDragStart$($chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$[0].pageX, 
    $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$[0].pageY, $JSCompiler_temp$$267_event$$411$$.target, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $JSCompiler_temp$$267_event$$411$$.target)), $dataCursorOn$$inline_5246_relPos$$inline_5254$$ = D.$JSCompiler_alias_TRUE$$) : 2 == $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$.length && (this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && 
    (this.$endDrag$(), $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$ = this.$_getRelativePosition$($chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$[0].pageX, $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$[0].pageY), $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$ = this.$_getRelativePosition$($chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$[1].pageX, 
    $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$[1].pageY), $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_pinchOn$ ? $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_origPt1$ = 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_container$.$stageToLocal$($chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$), $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_origPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_container$.$stageToLocal$($chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$), 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_lastPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_lastPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_origPt2$, !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_bounds$, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_origPt1$.x, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_origPt1$.y) || !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_bounds$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_origPt2$.x, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_origPt2$.y) ? $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$_pinchOn$ = D.$JSCompiler_alias_TRUE$$, $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$ = new D.$DvtPanZoomEvent$$("dvtPinchStartEvent", 0, 
    0, 0, 0, 0, 0, 0, 0))));
    $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$), this.$_context$.$getTooltipManager$().$hideTooltip$());
    $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$ || $dataCursorOn$$inline_5246_relPos$$inline_5254$$ ? ($JSCompiler_temp$$267_event$$411$$.preventDefault(), $JSCompiler_temp$$267_event$$411$$.stopPropagation(), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_temp$$267_event$$411$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$267_event$$411$$ = D.$JSCompiler_alias_FALSE$$
  }else {
    $dataCursorOn$$inline_5246_relPos$$inline_5254$$ = this.$_getRelativePosition$($JSCompiler_temp$$267_event$$411$$.pageX, $JSCompiler_temp$$267_event$$411$$.pageY);
    $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $JSCompiler_temp$$267_event$$411$$));
    if((!$JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$isSelectable$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_9624_dragHandler$$inline_5247_obj$$inline_5257$$.$isSelectable$()) && 0 == $JSCompiler_temp$$267_event$$411$$.button && $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$) {
      ($chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$ = $chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$.$processDragStart$($dataCursorOn$$inline_5246_relPos$$inline_5254$$, $JSCompiler_temp$$267_event$$411$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$), this.$_chart$.setCursor($chartEvent$$inline_5245_dragHandler$$inline_5255_relPos1$$inline_5249$$.getCursor($dataCursorOn$$inline_5246_relPos$$inline_5254$$)), 
      (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
    }
    $chartEvent$$inline_5256_relPos$$inline_5248_relPos2$$inline_5250_touches$$inline_5244$$ ? (this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$), $JSCompiler_temp$$267_event$$411$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$267_event$$411$$ = D.$JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_temp$$267_event$$411$$
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$412$$) {
  if(D.$DvtAgent$$.$isTouchDevice$()) {
    var $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$ = $event$$412$$.touches, $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$, $dataCursorOn$$inline_5263_relPos$$inline_5271$$;
    if(1 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.length) {
      var $dragHandler$$inline_5264_newPt2$$inline_9634_relPos2$$inline_5267$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
      $dragHandler$$inline_5264_newPt2$$inline_9634_relPos2$$inline_5267$$ ? ($JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$[0].pageY), 
      $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$ = $dragHandler$$inline_5264_newPt2$$inline_9634_relPos2$$inline_5267$$.$processDragMove$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$[0].pageX, 
      $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$[0].pageY, $event$$412$$.target, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$412$$.target)), $dataCursorOn$$inline_5263_relPos$$inline_5271$$ = D.$JSCompiler_alias_TRUE$$)
    }else {
      if(2 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.length && this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
        if($chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$[0].pageY), $dragHandler$$inline_5264_newPt2$$inline_9634_relPos2$$inline_5267$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$[1].pageX, 
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$[1].pageY), $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.$_pinchOn$) {
          $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.$_container$.$stageToLocal$($chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$);
          var $dragHandler$$inline_5264_newPt2$$inline_9634_relPos2$$inline_5267$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.$_container$.$stageToLocal$($dragHandler$$inline_5264_newPt2$$inline_9634_relPos2$$inline_5267$$), $deltas$$inline_9635$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$, 
          $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$, $dragHandler$$inline_5264_newPt2$$inline_9634_relPos2$$inline_5267$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.$_lastPt2$), $totalDeltas$$inline_9636$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$, 
          $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$, $dragHandler$$inline_5264_newPt2$$inline_9634_relPos2$$inline_5267$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.$_origPt2$);
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.$_lastPt1$ = $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$;
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$.$_lastPt2$ = $dragHandler$$inline_5264_newPt2$$inline_9634_relPos2$$inline_5267$$;
          $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$ = new D.$DvtPanZoomEvent$$("dvtPinchMoveEvent", $deltas$$inline_9635$$.$dxMin$, $deltas$$inline_9635$$.$dxMax$, $deltas$$inline_9635$$.$dyMin$, $deltas$$inline_9635$$.$dyMax$, $totalDeltas$$inline_9636$$.$dxMin$, $totalDeltas$$inline_9636$$.$dxMax$, $totalDeltas$$inline_9636$$.$dyMin$, $totalDeltas$$inline_9636$$.$dyMax$)
        }else {
          $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$ = D.$JSCompiler_alias_NULL$$
        }
      }
    }
    ($chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$ || $dataCursorOn$$inline_5263_relPos$$inline_5271$$) && $event$$412$$.preventDefault();
    $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$), this.$_context$.$getTooltipManager$().$hideTooltip$())
  }else {
    $dataCursorOn$$inline_5263_relPos$$inline_5271$$ = this.$_getRelativePosition$($event$$412$$.pageX, $event$$412$$.pageY);
    if($chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      if($JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$ = $chartEvent$$inline_5262_dragHandler$$inline_5272_newPt1$$inline_9633_relPos1$$inline_5266$$.$processDragMove$($dataCursorOn$$inline_5263_relPos$$inline_5271$$, $event$$412$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
      }
    }
    $JSCompiler_StaticMethods_processPinchMove$self$$inline_9630_chartEvent$$inline_5273_relPos$$inline_5265_touches$$inline_5261$$ && $event$$412$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($axisSpace$$inline_5285_chartEvent$$inline_5284_event$$413$$) {
  if(D.$DvtAgent$$.$isTouchDevice$()) {
    var $chartEvent1$$inline_5277_relPos$$inline_5282$$ = this.$endDrag$(), $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$;
    if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$ = this.$_panZoomHandler$;
      if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.$_pinchOn$) {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.$_pinchOn$ = D.$JSCompiler_alias_FALSE$$;
        var $totalDeltas$$inline_9639$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.$_lastPt2$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.$_origPt1$, 
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.$_origPt2$);
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.$_lastPt1$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.$_lastPt2$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$ = new D.$DvtPanZoomEvent$$("dvtPinchEndEvent", 0, 0, 0, 0, $totalDeltas$$inline_9639$$.$dxMin$, $totalDeltas$$inline_9639$$.$dxMax$, $totalDeltas$$inline_9639$$.$dyMin$, $totalDeltas$$inline_9639$$.$dyMax$)
      }else {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$ && this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$)
    }
    if($chartEvent1$$inline_5277_relPos$$inline_5282$$ || $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$) {
      $axisSpace$$inline_5285_chartEvent$$inline_5284_event$$413$$.preventDefault(), this.$_context$.$getTooltipManager$().$hideTooltip$()
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_TRUE$$)
  }else {
    $chartEvent1$$inline_5277_relPos$$inline_5282$$ = this.$_getRelativePosition$($axisSpace$$inline_5285_chartEvent$$inline_5284_event$$413$$.pageX, $axisSpace$$inline_5285_chartEvent$$inline_5284_event$$413$$.pageY);
    if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      if($axisSpace$$inline_5285_chartEvent$$inline_5284_event$$413$$ = $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.$processDragEnd$($chartEvent1$$inline_5277_relPos$$inline_5282$$, $axisSpace$$inline_5285_chartEvent$$inline_5284_event$$413$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $axisSpace$$inline_5285_chartEvent$$inline_5284_event$$413$$), (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)(this)
      }
      this.$_chart$.setCursor($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9638_chartEvent2$$inline_5278_dragHandler$$inline_5283$$.getCursor($chartEvent1$$inline_5277_relPos$$inline_5282$$));
      ($axisSpace$$inline_5285_chartEvent$$inline_5284_event$$413$$ = this.$_chart$.$_axisSpace$) && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($axisSpace$$inline_5285_chartEvent$$inline_5284_event$$413$$, $chartEvent1$$inline_5277_relPos$$inline_5282$$.x, $chartEvent1$$inline_5277_relPos$$inline_5282$$.y))
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$417_relPos$$22$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$417_relPos$$22$$);
  this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$417_relPos$$22$$) instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$) : (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$417_relPos$$22$$.pageX, $event$$417_relPos$$22$$.pageY, $event$$417_relPos$$22$$.target));
  var $dragHandler$$3$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
  $event$$417_relPos$$22$$ = this.$_getRelativePosition$($event$$417_relPos$$22$$.pageX, $event$$417_relPos$$22$$.pageY);
  $dragHandler$$3$$ && this.$_chart$.setCursor($dragHandler$$3$$.getCursor($event$$417_relPos$$22$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$418_obj$$266$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$418_obj$$266$$);
  ($event$$418_obj$$266$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$418_obj$$266$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOver$($event$$418_obj$$266$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$419_obj$$267$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$419_obj$$267$$);
  var $relPos$$23$$ = this.$_getRelativePosition$($event$$419_obj$$267$$.pageX, $event$$419_obj$$267$$.pageY), $JSCompiler_StaticMethods_processOut$self$$inline_5291_axisSpace$$1$$ = this.$_chart$.$_axisSpace$;
  $JSCompiler_StaticMethods_processOut$self$$inline_5291_axisSpace$$1$$ && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_5291_axisSpace$$1$$, $relPos$$23$$.x, $relPos$$23$$.y));
  this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processOut$self$$inline_5291_axisSpace$$1$$ = this.$_dataCursorHandler$, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_5291_axisSpace$$1$$.$getPlotRect$(), $relPos$$23$$.x, $relPos$$23$$.y) || (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processOut$self$$inline_5291_axisSpace$$1$$));
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
  ($event$$419_obj$$267$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$419_obj$$267$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOut$($event$$419_obj$$267$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$420$$) {
  if(D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    var $delta$$15_delta$$inline_5296$$ = $event$$420$$.wheelDelta != D.$JSCompiler_alias_NULL$$ ? $event$$420$$.wheelDelta : 0, $deltaXMin$$inline_5298_relPos$$24$$ = this.$_getRelativePosition$($event$$420$$.pageX, $event$$420$$.pageY);
    if(this.$_panZoomHandler$) {
      var $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$;
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$ = this.$_panZoomHandler$;
      var $startPt$$inline_5297$$ = $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$.$_container$.$stageToLocal$($deltaXMin$$inline_5298_relPos$$24$$);
      if((0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$.$_bounds$, $startPt$$inline_5297$$.x, $startPt$$inline_5297$$.y)) {
        var $delta$$15_delta$$inline_5296$$ = $delta$$15_delta$$inline_5296$$ * $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$.$_zoomRate$, $deltaXMin$$inline_5298_relPos$$24$$ = $delta$$15_delta$$inline_5296$$ * ($startPt$$inline_5297$$.x - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$.$_bounds$.x), $deltaXMax$$inline_5299$$ = -$delta$$15_delta$$inline_5296$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$.$_bounds$.x + 
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$.$_bounds$.$w$ - $startPt$$inline_5297$$.x), $deltaYMin$$inline_5300$$ = $delta$$15_delta$$inline_5296$$ * ($startPt$$inline_5297$$.y - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$.$_bounds$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$ = -$delta$$15_delta$$inline_5296$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$.$_bounds$.y + $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$.$_bounds$.$h$ - $startPt$$inline_5297$$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$ = new D.$DvtPanZoomEvent$$("dvtZoomEvent", $deltaXMin$$inline_5298_relPos$$24$$, $deltaXMax$$inline_5299$$, $deltaYMin$$inline_5300$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$, $deltaXMin$$inline_5298_relPos$$24$$, $deltaXMax$$inline_5299$$, $deltaYMin$$inline_5300$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$)
      }else {
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$ && ($event$$420$$.preventDefault(), $event$$420$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5294_deltaYMax$$inline_5301_panZoomEvent$$), this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$420$$.pageX, $event$$420$$.pageY, $event$$420$$.target))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$421_pos$$36$$) {
  var $obj$$268$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$421_pos$$36$$.target);
  $event$$421_pos$$36$$ = this.$_getRelativePosition$($event$$421_pos$$36$$.pageX, $event$$421_pos$$36$$.pageY);
  this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($event$$421_pos$$36$$, $obj$$268$$);
  $obj$$268$$ && $obj$$268$$.$getAction$ && $obj$$268$$.$_action$ && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$268$$.$_action$, $obj$$268$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($dlo$$6_event$$422$$) {
  var $touch$$48$$ = $dlo$$6_event$$422$$.$touch$, $pos$$37$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$48$$.pageX, $touch$$48$$.pageY);
  $dlo$$6_event$$422$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$6_event$$422$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$48$$.identifier, !$dlo$$6_event$$422$$ ? D.$JSCompiler_alias_TRUE$$ : this.$IsTooltipShowableInternal$ && this.$IsTooltipShowableInternal$($dlo$$6_event$$422$$, $pos$$37$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverMoveInternal$$($dlo$$7_event$$423$$) {
  var $touch$$49$$ = $dlo$$7_event$$423$$.$touch$, $pos$$38$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$49$$.pageX, $touch$$49$$.pageY);
  $dlo$$7_event$$423$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$7_event$$423$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$49$$.identifier, !$dlo$$7_event$$423$$ ? D.$JSCompiler_alias_TRUE$$ : this.$IsTooltipShowableInternal$ && this.$IsTooltipShowableInternal$($dlo$$7_event$$423$$, $pos$$38$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($dlo$$8_event$$424$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$8_event$$424$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$8_event$$424$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$8_event$$424$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($dlo$$9_event$$425$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$9_event$$425$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$9_event$$425$$.target), this.$_seriesRolloverHandler$.$processMouseOver$($dlo$$9_event$$425$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($dlo$$10_event$$426$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$10_event$$426$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$10_event$$426$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$10_event$$426$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$47_obj$$269$$) {
  D.$DvtChartEventManager$$.$superclass$.$HandleTouchClickInternal$.call(this, $evt$$47_obj$$269$$);
  ($evt$$47_obj$$269$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$47_obj$$269$$.target)) && $evt$$47_obj$$269$$.$getAction$ && $evt$$47_obj$$269$$.$_action$ && this.$FireEvent$(new D.$DvtActionEvent$$("action", $evt$$47_obj$$269$$.$_action$, $evt$$47_obj$$269$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$() {
  var $dragHandler$$6$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this), $chartEvent$$5$$;
  $dragHandler$$6$$ && ($chartEvent$$5$$ = $dragHandler$$6$$.$processDragEnd$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$);
  $chartEvent$$5$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  return $chartEvent$$5$$
};
D.$JSCompiler_prototypeAlias$$.$IsTooltipShowableInternal$ = function $$JSCompiler_prototypeAlias$$$$IsTooltipShowableInternal$$($obj$$270$$) {
  return this.$_dataCursorHandler$ ? $obj$$270$$ instanceof D.$DvtChartObjPeer$$ ? D.$JSCompiler_alias_FALSE$$ : !this.$_dataCursorHandler$.$_dataCursorShown$ : D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$hideTooltip$ = function $$JSCompiler_prototypeAlias$$$$hideTooltip$$() {
  (!this.$_dataCursorHandler$ || !this.$_dataCursorHandler$.$_dataCursorShown$) && D.$DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipsEnabled$ = function $$JSCompiler_prototypeAlias$$$$getTooltipsEnabled$$() {
  return this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$_dataCursorShown$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$cancelMarquee$ = function $$JSCompiler_prototypeAlias$$$$cancelMarquee$$($event$$430$$) {
  "zoom" == this.$_dragMode$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $event$$430$$.preventDefault() : "select" == this.$_dragMode$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$()
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
D.$JSCompiler_StaticMethods_setDragButtonsVisible$$ = function $$JSCompiler_StaticMethods_setDragButtonsVisible$$$($JSCompiler_StaticMethods_setDragButtonsVisible$self$$, $visible$$3$$) {
  if($visible$$3$$ && !$JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$) {
    var $JSCompiler_StaticMethods_showDragButtons$self$$inline_5307$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$;
    $JSCompiler_StaticMethods_showDragButtons$self$$inline_5307$$.$dragButtons$ && $JSCompiler_StaticMethods_showDragButtons$self$$inline_5307$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_TRUE$$
  }else {
    !$visible$$3$$ && $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ && ((0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$), $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods_autoToggleZoomButton$$ = function $$JSCompiler_StaticMethods_autoToggleZoomButton$$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$) {
  !D.$DvtAgent$$.$isTouchDevice$() && $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$ && ((0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$xAxis$) && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$yAxis$) ? "pan" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, 
  D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()) : "zoom" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()))
};
D.$DvtChartKeyboardHandler$$ = function $$DvtChartKeyboardHandler$$$($manager$$12$$, $chart$$63$$) {
  this.Init($manager$$12$$, $chart$$63$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtChartKeyboardHandler");
D.$DvtChartKeyboardHandler$$.prototype.Init = function $$DvtChartKeyboardHandler$$$$Init$($manager$$13$$, $chart$$64$$) {
  D.$DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $manager$$13$$);
  this.$_chart$ = $chart$$64$$
};
D.$DvtChartKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtChartKeyboardHandler$$$$$isSelectionEvent$$($event$$398$$) {
  return this.$isNavigationEvent$($event$$398$$) && !$event$$398$$.ctrlKey
};
D.$DvtChartKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtChartKeyboardHandler$$$$$isMultiSelectEvent$$($event$$399$$) {
  return 32 == $event$$399$$.keyCode && $event$$399$$.ctrlKey
};
D.$DvtChartKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtChartKeyboardHandler$$$$$processKeyDown$$($event$$400_navigables$$4$$) {
  var $currentNavigable$$6_keyCode$$16$$ = $event$$400_navigables$$4$$.keyCode;
  if(9 == $currentNavigable$$6_keyCode$$16$$) {
    var $currentNavigable$$6_keyCode$$16$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this.$_eventManager$), $next$$6$$ = D.$JSCompiler_alias_NULL$$;
    $event$$400_navigables$$4$$.preventDefault();
    $currentNavigable$$6_keyCode$$16$$ ? $next$$6$$ = $currentNavigable$$6_keyCode$$16$$ : ($event$$400_navigables$$4$$ = D.$DvtChartTypeUtils$$.$isPie$(this.$_chart$) ? this.$_chart$.$pieChart$.$_slices$ : this.$_chart$.$getObjects$(), $next$$6$$ = D.$DvtChartKeyboardHandler$$.$superclass$.$getDefaultNavigable$.call(this, $event$$400_navigables$$4$$));
    $next$$6$$ && this.$_eventManager$.$setFocus$($next$$6$$);
    return $next$$6$$
  }
  27 == $currentNavigable$$6_keyCode$$16$$ && this.$_eventManager$.$cancelMarquee$($event$$400_navigables$$4$$);
  return D.$DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$400_navigables$$4$$)
};
D.$DvtSeriesRolloverHandler$$ = function $$DvtSeriesRolloverHandler$$$($chart$$235$$) {
  this.Init($chart$$235$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSeriesRolloverHandler$$, D.$DvtObj$$, "DvtSeriesRolloverHandler");
D.$DvtSeriesRolloverHandler$$.prototype.Init = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOver$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOver$$($obj$$343$$) {
  this.$ProcessEvent$($obj$$343$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOut$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOut$$($obj$$344$$) {
  this.$ProcessEvent$($obj$$344$$, D.$JSCompiler_alias_FALSE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$ProcessEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartSeriesRolloverHandler$$ = function $$DvtChartSeriesRolloverHandler$$$($chart$$5$$, $handler$$25$$) {
  this.Init($chart$$5$$, $handler$$25$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesRolloverHandler$$, D.$DvtSeriesRolloverHandler$$, "DvtChartSeriesRolloverHandler");
D.$DvtChartSeriesRolloverHandler$$.prototype.Init = function $$DvtChartSeriesRolloverHandler$$$$Init$($chart$$6$$, $handler$$26$$) {
  D.$DvtChartSeriesRolloverHandler$$.$superclass$.Init.call(this);
  this.$_chart$ = $chart$$6$$;
  this.$EventHandler$ = $handler$$26$$
};
D.$DvtChartSeriesRolloverHandler$$.prototype.$ProcessEvent$ = function $$DvtChartSeriesRolloverHandler$$$$$ProcessEvent$$($obj$$258$$, $bOver$$1$$) {
  this.$_rolloverHandled$ = D.$JSCompiler_alias_FALSE$$;
  if($obj$$258$$) {
    var $rolloverContainer$$ = this.$_chart$, $eventType$$23$$ = $bOver$$1$$ ? "categoryRollOver" : "categoryRollOut", $categories$$6$$ = $obj$$258$$.$getCategories$ ? $obj$$258$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
    $categories$$6$$ && 0 < $categories$$6$$.length && (this.$EventHandler$.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($eventType$$23$$, $categories$$6$$), $rolloverContainer$$), this.$_rolloverHandled$ = D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtChartOverview$$ = function $$DvtChartOverview$$$($context$$542$$, $callback$$108$$, $callbackObj$$82$$, $id$$193$$, $oldChart$$9$$) {
  this.Init($context$$542$$, $callback$$108$$, $callbackObj$$82$$);
  this.$_chart$ = $oldChart$$9$$;
  this.$_id$ = $id$$193$$ + "_overview"
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartOverview$$, D.$DvtOverview$$, "DvtChartOverview");
D.$DvtChartOverview$$.prototype.$createBackground$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartOverview$$.prototype.$render$ = function $$DvtChartOverview$$$$$render$$($options$$92$$, $width$$102$$, $glassPane$$inline_5177_height$$83$$) {
  $options$$92$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$options$$92$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
  $options$$92$$.animationOnClick = "off";
  var $options$$inline_5174$$ = $options$$92$$.chart;
  this.$_chartContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_chartContainer$);
  window.optionsOverride = {zoomAndScroll:"off", legend:{rendered:"off"}, xAxis:{viewportMin:D.$JSCompiler_alias_NULL$$, viewportMax:D.$JSCompiler_alias_NULL$$, viewportStartGroup:D.$JSCompiler_alias_NULL$$, viewportEndGroup:D.$JSCompiler_alias_NULL$$, axisLine:{rendered:"off"}, title:D.$JSCompiler_alias_NULL$$}, yAxis:{rendered:"off"}, y2Axis:{rendered:"off"}, title:{text:D.$JSCompiler_alias_NULL$$}, subtitle:{text:D.$JSCompiler_alias_NULL$$}, footnote:{text:D.$JSCompiler_alias_NULL$$}, titleSeparator:{rendered:"off"}, 
  layout:{outerGapWidth:0, outerGapHeight:0}, _isOverview:D.$JSCompiler_alias_TRUE$$};
  $options$$inline_5174$$ = D.$DvtJSONUtils$$.$merge$(window.optionsOverride, $options$$inline_5174$$);
  "disabled" == $options$$inline_5174$$.timeAxisType && ($options$$inline_5174$$.xAxis.tickLabel.rendered = "off");
  this.$_chart$ || (this.$_chart$ = (0,D.$DvtChart$newInstance$$)(this.$_context$), this.$_chart$.setId(this.$_id$));
  this.$_chartContainer$.$addChild$(this.$_chart$);
  this.$_chart$.$render$($options$$inline_5174$$, $width$$102$$, $glassPane$$inline_5177_height$$83$$);
  $glassPane$$inline_5177_height$$83$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$102$$, $glassPane$$inline_5177_height$$83$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($glassPane$$inline_5177_height$$83$$);
  this.$_chartContainer$.$addChild$($glassPane$$inline_5177_height$$83$$);
  D.$DvtChartOverview$$.$superclass$.$render$.call(this, $options$$92$$, $width$$102$$, this.$_chart$.$_plotAreaSpace$.$h$)
};
D.$DvtChartOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtChartObjPeer$$ = function $$DvtChartObjPeer$$$($chart$$79$$, $displayables$$15$$, $seriesIndex$$18$$, $groupIndex$$5$$, $dataPos$$2$$) {
  this.Init($chart$$79$$, $displayables$$15$$, $seriesIndex$$18$$, $groupIndex$$5$$, $dataPos$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartObjPeer$$, D.$DvtObj$$, "DvtChartObjPeer");
D.$DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$, $displayables$$16$$, $index$$103_seriesIndex$$19$$, $groupIndex$$6$$, $dataPos$$3_seriesItem$$1$$) {
  this.$_chart$ = $ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$;
  this.$_displayables$ = $displayables$$16$$;
  this.$_group$ = this.$_series$ = D.$JSCompiler_alias_NULL$$;
  this.$_dataPos$ = $dataPos$$3_seriesItem$$1$$;
  this.$_seriesIndex$ = (0,window.isNaN)($index$$103_seriesIndex$$19$$) ? -1 : $index$$103_seriesIndex$$19$$;
  0 <= this.$_seriesIndex$ && (this.$_series$ = D.$DvtChartDataUtils$$.$getSeries$($ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$, this.$_seriesIndex$));
  this.$_groupIndex$ = (0,window.isNaN)($groupIndex$$6$$) ? -1 : $groupIndex$$6$$;
  0 <= this.$_groupIndex$ && (this.$_group$ = D.$DvtChartDataUtils$$.$getGroup$($ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$, this.$_groupIndex$));
  if($dataPos$$3_seriesItem$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$, $index$$103_seriesIndex$$19$$)) {
    this.$_action$ = $dataPos$$3_seriesItem$$1$$.action, this.$_stampId$ = $dataPos$$3_seriesItem$$1$$._id
  }
  this.$_categories$ = this.$_series$ != D.$JSCompiler_alias_NULL$$ ? [this.$_series$] : [];
  if($ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$ = D.$DvtChartDataUtils$$.$getDataItem$($ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$, $index$$103_seriesIndex$$19$$, $groupIndex$$6$$)) {
    $ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$.categories && (this.$_categories$ = this.$_categories$.concat($ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$.categories)), this.$_dataItemId$ = $ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$.id, this.$_action$ = $ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$.action, this.$_stampId$ = $ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$._id
  }
  if(this.$_action$) {
    for($ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$ = 0;$ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$ < this.$_displayables$.length;$ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$++) {
      this.$_displayables$[$ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$].setCursor("pointer")
    }
  }
  if(!D.$DvtAgent$$.$deferAriaCreation$()) {
    $ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$ = this.$getDatatip$(D.$JSCompiler_alias_NULL$$);
    for($index$$103_seriesIndex$$19$$ = 0;$index$$103_seriesIndex$$19$$ < $displayables$$16$$.length;$index$$103_seriesIndex$$19$$++) {
      (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($displayables$$16$$[$index$$103_seriesIndex$$19$$], "img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayables$$16$$[$index$$103_seriesIndex$$19$$], "label", $ariaLabel$$1_chart$$80_dataItem$$7_i$$491$$)
    }
  }
  this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartObjPeer$associate$$ = function $$DvtChartObjPeer$associate$$$($displayable$$51$$, $chart$$81$$, $identObj$$1_seriesIndex$$20$$, $groupIndex$$7$$, $dataPos$$4$$) {
  $displayable$$51$$ && ($identObj$$1_seriesIndex$$20$$ = new D.$DvtChartObjPeer$$($chart$$81$$, [$displayable$$51$$], $identObj$$1_seriesIndex$$20$$, $groupIndex$$7$$, $dataPos$$4$$), $chart$$81$$.$registerObject$($identObj$$1_seriesIndex$$20$$), $chart$$81$$.$getEventManager$().$associate$($displayable$$51$$, $identObj$$1_seriesIndex$$20$$))
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
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$92$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($target$$92$$, this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
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
  for(var $i$$492$$ = 0;$i$$492$$ < this.$_displayables$.length;$i$$492$$++) {
    this.$_displayables$[$i$$492$$].$setSelected$ && this.$_displayables$[$i$$492$$].$setSelected$($bSelected$$6$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$493$$ = 0;$i$$493$$ < this.$_displayables$.length;$i$$493$$++) {
    this.$_displayables$[$i$$493$$].$showHoverEffect$ && this.$_displayables$[$i$$493$$].$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$494$$ = 0;$i$$494$$ < this.$_displayables$.length;$i$$494$$++) {
    this.$_displayables$[$i$$494$$].$hideHoverEffect$ && this.$_displayables$[$i$$494$$].$hideHoverEffect$()
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
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($chart$$inline_5218_event$$409_next$$7$$) {
  var $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$;
  $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ = $chart$$inline_5218_event$$409_next$$7$$.keyCode;
  if($chart$$inline_5218_event$$409_next$$7$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ && $chart$$inline_5218_event$$409_next$$7$$.ctrlKey) {
    return this
  }
  $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ = this.$_chart$;
  for(var $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$.$getObjects$(), $navigables$$5_seriesIndex$$inline_5220$$ = [], $i$$495_seriesCount$$inline_5222$$ = 0;$i$$495_seriesCount$$inline_5222$$ < $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$.length;$i$$495_seriesCount$$inline_5222$$++) {
    (0,D.$JSCompiler_StaticMethods_isNavigable$$)($chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$[$i$$495_seriesCount$$inline_5222$$]) && $navigables$$5_seriesIndex$$inline_5220$$.push($chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$[$i$$495_seriesCount$$inline_5222$$])
  }
  if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$)) {
    $chart$$inline_5218_event$$409_next$$7$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $chart$$inline_5218_event$$409_next$$7$$, $navigables$$5_seriesIndex$$inline_5220$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isArea$($chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$) || D.$DvtChartTypeUtils$$.$isLine$($chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$) || D.$DvtChartTypeUtils$$.$isStacked$($chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$)) {
      a: {
        $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $chart$$inline_5218_event$$409_next$$7$$.keyCode;
        $chart$$inline_5218_event$$409_next$$7$$ = this.$_chart$;
        var $context$$inline_5219_isRTL$$inline_5228$$ = $chart$$inline_5218_event$$409_next$$7$$.$_context$, $navigables$$5_seriesIndex$$inline_5220$$ = this.$getSeriesIndex$();
        $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ = this.$getGroupIndex$();
        var $i$$495_seriesCount$$inline_5222$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_5218_event$$409_next$$7$$), $groupCount$$inline_5223$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$inline_5218_event$$409_next$$7$$), $nextUpSeriesIndex$$inline_5224_seriesCount$$inline_9603$$;
        $nextUpSeriesIndex$$inline_5224_seriesCount$$inline_9603$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_5218_event$$409_next$$7$$);
        for(var $currentValue$$inline_9604_currentValue$$inline_9614_nextDownSeriesIndex$$inline_5225$$ = D.$DvtChartDataUtils$$.getValue($chart$$inline_5218_event$$409_next$$7$$, $navigables$$5_seriesIndex$$inline_5220$$, $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$), $nextValue$$inline_9605_nextValue$$inline_9615$$ = D.$JSCompiler_alias_NULL$$, $nextSeriesIndex$$inline_9606_nextSeriesIndex$$inline_9616$$ = D.$JSCompiler_alias_NULL$$, $i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$ = 
        0;$i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$ < $nextUpSeriesIndex$$inline_5224_seriesCount$$inline_9603$$;$i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$++) {
          var $itemValue$$inline_9608_itemValue$$inline_9618$$ = D.$DvtChartDataUtils$$.getValue($chart$$inline_5218_event$$409_next$$7$$, $i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$, $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$);
          if($itemValue$$inline_9608_itemValue$$inline_9618$$ > $currentValue$$inline_9604_currentValue$$inline_9614_nextDownSeriesIndex$$inline_5225$$ || $itemValue$$inline_9608_itemValue$$inline_9618$$ == $currentValue$$inline_9604_currentValue$$inline_9614_nextDownSeriesIndex$$inline_5225$$ && $i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$ > $navigables$$5_seriesIndex$$inline_5220$$) {
            if($nextValue$$inline_9605_nextValue$$inline_9615$$ !== D.$JSCompiler_alias_NULL$$ && $itemValue$$inline_9608_itemValue$$inline_9618$$ < $nextValue$$inline_9605_nextValue$$inline_9615$$ || $nextValue$$inline_9605_nextValue$$inline_9615$$ == D.$JSCompiler_alias_NULL$$) {
              $nextValue$$inline_9605_nextValue$$inline_9615$$ = $itemValue$$inline_9608_itemValue$$inline_9618$$, $nextSeriesIndex$$inline_9606_nextSeriesIndex$$inline_9616$$ = $i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$
            }
          }
        }
        $nextUpSeriesIndex$$inline_5224_seriesCount$$inline_9603$$ = $nextSeriesIndex$$inline_9606_nextSeriesIndex$$inline_9616$$;
        $i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_5218_event$$409_next$$7$$);
        $currentValue$$inline_9604_currentValue$$inline_9614_nextDownSeriesIndex$$inline_5225$$ = D.$DvtChartDataUtils$$.getValue($chart$$inline_5218_event$$409_next$$7$$, $navigables$$5_seriesIndex$$inline_5220$$, $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$);
        $nextSeriesIndex$$inline_9606_nextSeriesIndex$$inline_9616$$ = $nextValue$$inline_9605_nextValue$$inline_9615$$ = D.$JSCompiler_alias_NULL$$;
        for($i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$ -= 1;0 <= $i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$;$i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$--) {
          if($itemValue$$inline_9608_itemValue$$inline_9618$$ = D.$DvtChartDataUtils$$.getValue($chart$$inline_5218_event$$409_next$$7$$, $i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$, $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$), $itemValue$$inline_9608_itemValue$$inline_9618$$ < $currentValue$$inline_9604_currentValue$$inline_9614_nextDownSeriesIndex$$inline_5225$$ || $itemValue$$inline_9608_itemValue$$inline_9618$$ == $currentValue$$inline_9604_currentValue$$inline_9614_nextDownSeriesIndex$$inline_5225$$ && 
          $i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$ < $navigables$$5_seriesIndex$$inline_5220$$) {
            if($nextValue$$inline_9605_nextValue$$inline_9615$$ !== D.$JSCompiler_alias_NULL$$ && $itemValue$$inline_9608_itemValue$$inline_9618$$ > $nextValue$$inline_9605_nextValue$$inline_9615$$ || $nextValue$$inline_9605_nextValue$$inline_9615$$ == D.$JSCompiler_alias_NULL$$) {
              $nextValue$$inline_9605_nextValue$$inline_9615$$ = $itemValue$$inline_9608_itemValue$$inline_9618$$, $nextSeriesIndex$$inline_9606_nextSeriesIndex$$inline_9616$$ = $i$$inline_9607_i$$inline_9617_seriesCount$$inline_9613$$
            }
          }
        }
        $currentValue$$inline_9604_currentValue$$inline_9614_nextDownSeriesIndex$$inline_5225$$ = $nextSeriesIndex$$inline_9606_nextSeriesIndex$$inline_9616$$;
        $context$$inline_5219_isRTL$$inline_5228$$ = D.$DvtAgent$$.$isRightToLeft$($context$$inline_5219_isRTL$$inline_5228$$);
        if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$inline_5218_event$$409_next$$7$$) && 40 == $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ && 0 < $navigables$$5_seriesIndex$$inline_5220$$) {
          $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $navigables$$5_seriesIndex$$inline_5220$$ - 1
        }else {
          if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$inline_5218_event$$409_next$$7$$) && 38 == $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ && $navigables$$5_seriesIndex$$inline_5220$$ < $i$$495_seriesCount$$inline_5222$$ - 1) {
            $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $navigables$$5_seriesIndex$$inline_5220$$ + 1
          }else {
            if(!D.$DvtChartTypeUtils$$.$isStacked$($chart$$inline_5218_event$$409_next$$7$$) && 38 == $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ && $nextUpSeriesIndex$$inline_5224_seriesCount$$inline_9603$$ != D.$JSCompiler_alias_NULL$$) {
              $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $nextUpSeriesIndex$$inline_5224_seriesCount$$inline_9603$$
            }else {
              if(!D.$DvtChartTypeUtils$$.$isStacked$($chart$$inline_5218_event$$409_next$$7$$) && 40 == $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ && $currentValue$$inline_9604_currentValue$$inline_9614_nextDownSeriesIndex$$inline_5225$$ != D.$JSCompiler_alias_NULL$$) {
                $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $currentValue$$inline_9604_currentValue$$inline_9614_nextDownSeriesIndex$$inline_5225$$
              }else {
                if(39 == $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ && $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ < $groupCount$$inline_5223$$ - 1 && !$context$$inline_5219_isRTL$$inline_5228$$) {
                  $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $navigables$$5_seriesIndex$$inline_5220$$, $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ += 1
                }else {
                  if(37 == $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ && 0 < $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ && !$context$$inline_5219_isRTL$$inline_5228$$) {
                    $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $navigables$$5_seriesIndex$$inline_5220$$, $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ -= 1
                  }else {
                    if(39 == $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ && 0 < $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ && $context$$inline_5219_isRTL$$inline_5228$$) {
                      $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $navigables$$5_seriesIndex$$inline_5220$$, $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ -= 1
                    }else {
                      if(37 == $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ && $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ < $groupCount$$inline_5223$$ - 1 && $context$$inline_5219_isRTL$$inline_5228$$) {
                        $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ = $navigables$$5_seriesIndex$$inline_5220$$, $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$ += 1
                      }else {
                        $chart$$inline_5218_event$$409_next$$7$$ = this;
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
          for(window.i = 0;window.i < $chart$$inline_5218_event$$409_next$$7$$.$_peers$.length;window.i++) {
            if($chart$$inline_5218_event$$409_next$$7$$.$_peers$[window.i].$getSeriesIndex$() == $chartObjs_keyCode$$inline_5217_nextSeriesIndex$$inline_5226_seriesIndex$$inline_9621$$ && $chart$$inline_5218_event$$409_next$$7$$.$_peers$[window.i].$getGroupIndex$() == $chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$) {
              $chart$$inline_5218_event$$409_next$$7$$ = $chart$$inline_5218_event$$409_next$$7$$.$_peers$[window.i];
              break b
            }
          }
          $chart$$inline_5218_event$$409_next$$7$$ = D.$JSCompiler_alias_NULL$$
        }
      }
    }else {
      if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$82_groupIndex$$inline_5221_groupIndex$$inline_9622_keyCode$$17_nextGroupIndex$$inline_5227$$) && (38 == $chart$$inline_5218_event$$409_next$$7$$.keyCode || 40 == $chart$$inline_5218_event$$409_next$$7$$.keyCode)) {
        $chart$$inline_5218_event$$409_next$$7$$.clone(), $chart$$inline_5218_event$$409_next$$7$$.keyCode -= 1
      }
      $chart$$inline_5218_event$$409_next$$7$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $chart$$inline_5218_event$$409_next$$7$$, $navigables$$5_seriesIndex$$inline_5220$$)
    }
  }
  return $chart$$inline_5218_event$$409_next$$7$$
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
D.$DvtChartDataItem$$ = function $$DvtChartDataItem$$$($id$$195$$, $series$$10$$, $group$$7$$) {
  this.Init($id$$195$$, $series$$10$$, $group$$7$$)
};
(0,D.$goog$exportSymbol$$)("DvtChartDataItem", D.$DvtChartDataItem$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataItem$$, D.$DvtObj$$, "DvtChartDataItem");
D.$DvtChartDataItem$$.prototype.Init = function $$DvtChartDataItem$$$$Init$($id$$196$$, $series$$11$$, $group$$8$$) {
  this.$_id$ = $id$$196$$;
  this.$_series$ = $series$$11$$;
  this.$_group$ = $group$$8$$
};
D.$DvtChartDataItem$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtChartDataItem$$.prototype.getId = D.$DvtChartDataItem$$.prototype.getId;
D.$DvtChartDataItem$$.prototype.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$DvtChartDataItem$$.prototype.getSeries = D.$DvtChartDataItem$$.prototype.$getSeries$;
D.$DvtChartDataItem$$.prototype.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$DvtChartDataItem$$.prototype.getGroup = D.$DvtChartDataItem$$.prototype.$getGroup$;
D.$DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($dataItem$$8$$) {
  return $dataItem$$8$$ instanceof D.$DvtChartDataItem$$ ? this.$_group$ === $dataItem$$8$$.$getGroup$() && this.$_series$ === $dataItem$$8$$.$getSeries$() : D.$JSCompiler_alias_FALSE$$
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
outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendMaxSize:0.3, legendGap:10, axisMaxSize:0.33, tickLabelGapHeight:5, tickLabelGapWidth:7}, _resources:{}};
D.$DvtChartDefaults$getGapSize$$ = function $$DvtChartDefaults$getGapSize$$$($chart$$77$$, $defaultSize$$2$$) {
  return window.Math.ceil($defaultSize$$2$$ * $chart$$77$$.$getGapRatio$())
};
D.$DvtChartAxisUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisUtils$$, D.$DvtObj$$, "DvtChartAxisUtils");
D.$DvtChartAxisUtils$$.$_BAR_AXIS_OFFSET$ = 0.5;
D.$DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($chart$$149$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$149$$) ? "tangential" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$149$$) ? D.$DvtAgent$$.$isRightToLeft$($chart$$149$$.$_context$) ? "right" : "left" : "bottom"
};
D.$DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($chart$$150$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$150$$) ? "radial" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$150$$) ? "bottom" : D.$DvtAgent$$.$isRightToLeft$($chart$$150$$.$_context$) ? "right" : "left"
};
D.$DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($chart$$151$$) {
  return D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$151$$) ? "top" : D.$DvtAgent$$.$isRightToLeft$($chart$$151$$.$_context$) ? "left" : "right"
};
D.$DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($chart$$152$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$152$$) ? "disabled" != $chart$$152$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($chart$$153$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$153$$) ? "disabled" == $chart$$153$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$getBarAxisOffset$ = function $$DvtChartAxisUtils$$$$getBarAxisOffset$$($chart$$154$$) {
  var $bLineOrArea$$ = D.$DvtChartTypeUtils$$.$isLine$($chart$$154$$) || D.$DvtChartTypeUtils$$.$isArea$($chart$$154$$);
  return D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$154$$) || $bLineOrArea$$ && 1 == D.$DvtChartDataUtils$$.$getGroupCount$($chart$$154$$) ? D.$DvtChartAxisUtils$$.$_BAR_AXIS_OFFSET$ : 0
};
D.$DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($chart$$155$$) {
  return!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$155$$) || D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$155$$) ? D.$JSCompiler_alias_FALSE$$ : "polygon" == $chart$$155$$.$getOptions$().polarGridShape
};
D.$DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($chart$$156$$, $type$$176$$) {
  if("y" == $type$$176$$ && D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$156$$) || "y2" == $type$$176$$ && !D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$156$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $axisOptions$$4_options$$117$$ = $chart$$156$$.$getOptions$(), $axisOptions$$4_options$$117$$ = "x" == $type$$176$$ ? $axisOptions$$4_options$$117$$.xAxis : "y" == $type$$176$$ ? $axisOptions$$4_options$$117$$.yAxis : $axisOptions$$4_options$$117$$.y2Axis;
  return"off" == $axisOptions$$4_options$$117$$.rendered || "off" == $axisOptions$$4_options$$117$$.tickLabel.rendered && !$axisOptions$$4_options$$117$$.title ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataUtils$$, D.$DvtObj$$, "DvtChartDataUtils");
D.$DvtChartDataUtils$$.$_TYPE_LABEL$ = "label";
D.$DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($chart$$203$$) {
  var $options$$125_seriesCount$$22$$ = $chart$$203$$.$getOptions$();
  if(!$options$$125_seriesCount$$22$$ || !$options$$125_seriesCount$$22$$.series || 1 > $options$$125_seriesCount$$22$$.series.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $options$$125_seriesCount$$22$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$203$$), $i$$521$$ = 0;$i$$521$$ < $options$$125_seriesCount$$22$$;$i$$521$$++) {
    var $seriesItem$$18$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$203$$, $i$$521$$);
    if($seriesItem$$18$$ && $seriesItem$$18$$.items && 1 <= $seriesItem$$18$$.items.length) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($chart$$204$$, $seriesIndex$$63$$) {
  var $dataItems$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$204$$, $seriesIndex$$63$$).items;
  if($dataItems$$) {
    for(var $i$$522$$ = 0;$i$$522$$ < $dataItems$$.length;$i$$522$$++) {
      if($dataItems$$[$i$$522$$] != D.$JSCompiler_alias_NULL$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($chart$$205$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$205$$)) {
    for(var $maxGroups$$ = 0, $arSeriesStyle_options$$126$$ = $chart$$205$$.$_seriesStyleArray$, $bundle$$4_seriesCount$$23$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$205$$), $group$$12_i$$523$$ = 0;$group$$12_i$$523$$ < $bundle$$4_seriesCount$$23$$;$group$$12_i$$523$$++) {
      var $series$$20_seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$205$$, $group$$12_i$$523$$);
      $series$$20_seriesItem$$20$$ != D.$JSCompiler_alias_NULL$$ && 0 > D.$DvtArrayUtils$$.$getIndex$($arSeriesStyle_options$$126$$, $series$$20_seriesItem$$20$$) && $arSeriesStyle_options$$126$$.push($series$$20_seriesItem$$20$$);
      if(($series$$20_seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$205$$, $group$$12_i$$523$$)) && $series$$20_seriesItem$$20$$.items && $series$$20_seriesItem$$20$$.items.length > $maxGroups$$) {
        $maxGroups$$ = $series$$20_seriesItem$$20$$.items.length
      }
      D.$DvtChartTypeUtils$$.$isFunnel$($chart$$205$$) && ($series$$20_seriesItem$$20$$.displayInLegend = "off")
    }
    $arSeriesStyle_options$$126$$ = $chart$$205$$.$getOptions$();
    $arSeriesStyle_options$$126$$.groups || ($arSeriesStyle_options$$126$$.groups = []);
    for($bundle$$4_seriesCount$$23$$ = $chart$$205$$.$Bundle$;$arSeriesStyle_options$$126$$.groups.length < $maxGroups$$;) {
      $group$$12_i$$523$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_seriesCount$$23$$, "DEFAULT_GROUP_NAME", $arSeriesStyle_options$$126$$.groups.length + 1), $arSeriesStyle_options$$126$$.groups.push($group$$12_i$$523$$)
    }
    D.$DvtChartTypeUtils$$.$isFunnel$($chart$$205$$) && ($arSeriesStyle_options$$126$$.styleDefaults.groupTooltipType = "none")
  }
};
D.$DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($chart$$206$$) {
  return $chart$$206$$.$getOptions$().series.length
};
D.$DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($chart$$207$$, $seriesIndex$$64$$) {
  var $seriesItem$$21$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$207$$, $seriesIndex$$64$$);
  return $seriesItem$$21$$ ? $seriesItem$$21$$.id ? $seriesItem$$21$$.id : $seriesItem$$21$$.name || "" == $seriesItem$$21$$.name ? $seriesItem$$21$$.name : (0,window.String)($seriesIndex$$64$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($chart$$208$$, $seriesIndex$$65$$) {
  var $seriesItem$$22$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$208$$, $seriesIndex$$65$$);
  return $seriesItem$$22$$ && ($seriesItem$$22$$.name || "" == $seriesItem$$22$$.name) ? $seriesItem$$22$$.name : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($chart$$209$$, $series$$21$$) {
  for(var $numSeries$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$209$$), $seriesIndex$$66$$ = 0;$seriesIndex$$66$$ < $numSeries$$;$seriesIndex$$66$$++) {
    if(D.$DvtChartDataUtils$$.$getSeries$($chart$$209$$, $seriesIndex$$66$$) == $series$$21$$) {
      return $seriesIndex$$66$$
    }
  }
  return-1
};
D.$DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($chart$$210$$, $series$$22$$) {
  return $series$$22$$ ? D.$DvtArrayUtils$$.$getIndex$($chart$$210$$.$_seriesStyleArray$, $series$$22$$) : D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$210$$, $series$$22$$)
};
D.$DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($chart$$211$$, $seriesIndex$$67$$) {
  if((0,window.isNaN)($seriesIndex$$67$$) || $seriesIndex$$67$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $options$$127$$ = $chart$$211$$.$getOptions$();
  if($options$$127$$.series && $options$$127$$.series.length > $seriesIndex$$67$$) {
    return $options$$127$$.series[$seriesIndex$$67$$]
  }
};
D.$DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($chart$$212_seriesItem$$23$$, $seriesIndex$$68$$, $groupIndex$$32$$) {
  if((0,window.isNaN)($groupIndex$$32$$) || $groupIndex$$32$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($chart$$212_seriesItem$$23$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$212_seriesItem$$23$$, $seriesIndex$$68$$)) && $chart$$212_seriesItem$$23$$.items && 0 <= $groupIndex$$32$$ && $chart$$212_seriesItem$$23$$.items.length > $groupIndex$$32$$) {
    return $chart$$212_seriesItem$$23$$.items[$groupIndex$$32$$]
  }
};
D.$DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($chart$$213$$) {
  return $chart$$213$$.$getOptions$().groups.length
};
D.$DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($chart$$214$$, $groupIndex$$33$$) {
  var $group$$13_groupItems$$ = $chart$$214$$.$getOptions$().groups;
  return 0 <= $groupIndex$$33$$ && $groupIndex$$33$$ < $group$$13_groupItems$$.length && ($group$$13_groupItems$$ = $group$$13_groupItems$$[$groupIndex$$33$$]) ? $group$$13_groupItems$$.id ? $group$$13_groupItems$$.id : $group$$13_groupItems$$.name || "" == $group$$13_groupItems$$.name ? $group$$13_groupItems$$.name : $group$$13_groupItems$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($chart$$215$$, $group$$14$$) {
  return D.$DvtChartDataUtils$$.$getGroups$($chart$$215$$).indexOf($group$$14$$)
};
D.$DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($chart$$216$$, $groupIndex$$34$$) {
  var $group$$15_groupItems$$1$$ = $chart$$216$$.$getOptions$().groups;
  return 0 <= $groupIndex$$34$$ && $groupIndex$$34$$ < $group$$15_groupItems$$1$$.length && ($group$$15_groupItems$$1$$ = $group$$15_groupItems$$1$$[$groupIndex$$34$$]) ? $group$$15_groupItems$$1$$.name ? $group$$15_groupItems$$1$$.name : $group$$15_groupItems$$1$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($chart$$217$$) {
  for(var $groupCount$$2$$ = $chart$$217$$.$getOptions$().groups.length, $groups$$1$$ = [], $groupIndex$$35$$ = 0;$groupIndex$$35$$ < $groupCount$$2$$;$groupIndex$$35$$++) {
    $groups$$1$$.push(D.$DvtChartDataUtils$$.$getGroup$($chart$$217$$, $groupIndex$$35$$))
  }
  return $groups$$1$$
};
D.$DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($chart$$218_dataItem$$24$$, $seriesIndex$$69$$, $groupIndex$$36$$) {
  $chart$$218_dataItem$$24$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$218_dataItem$$24$$, $seriesIndex$$69$$, $groupIndex$$36$$);
  if($chart$$218_dataItem$$24$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,window.isNaN)($chart$$218_dataItem$$24$$)) {
      if($chart$$218_dataItem$$24$$.value != D.$JSCompiler_alias_NULL$$) {
        return $chart$$218_dataItem$$24$$.value
      }
      if($chart$$218_dataItem$$24$$.y != D.$JSCompiler_alias_NULL$$) {
        return $chart$$218_dataItem$$24$$.y
      }
    }else {
      return $chart$$218_dataItem$$24$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($chart$$219$$, $seriesIndex$$70$$, $groupIndex$$37$$, $bIncludeHiddenSeries$$) {
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$219$$)) {
    for(var $bCombo$$ = D.$DvtChartTypeUtils$$.$isCombo$($chart$$219$$), $seriesType$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$219$$, $seriesIndex$$70$$), $bAssignedToY2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$219$$, $seriesIndex$$70$$), $total$$1$$ = 0, $i$$524$$ = 0;$i$$524$$ <= $seriesIndex$$70$$;$i$$524$$++) {
      if(($bIncludeHiddenSeries$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$219$$, $i$$524$$)) && !($bCombo$$ && $seriesType$$2$$ != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$219$$, $i$$524$$)) && $bAssignedToY2$$ == D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$219$$, $i$$524$$)) {
        var $groupValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$219$$, $i$$524$$, $groupIndex$$37$$), $total$$1$$ = $total$$1$$ + ($groupValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($groupValue$$) ? 0 : $groupValue$$)
      }
    }
    return $total$$1$$
  }
  return D.$DvtChartDataUtils$$.getValue($chart$$219$$, $seriesIndex$$70$$, $groupIndex$$37$$)
};
D.$DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($chart$$220$$, $dataItem$$25_seriesIndex$$71_xVal$$, $groupIndex$$38$$) {
  if(D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$220$$)) {
    return $groupIndex$$38$$
  }
  $dataItem$$25_seriesIndex$$71_xVal$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$220$$, $dataItem$$25_seriesIndex$$71_xVal$$, $groupIndex$$38$$);
  if($dataItem$$25_seriesIndex$$71_xVal$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $dataItem$$25_seriesIndex$$71_xVal$$ = $dataItem$$25_seriesIndex$$71_xVal$$.x;
  return(0,window.isNaN)($dataItem$$25_seriesIndex$$71_xVal$$) ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$220$$, $groupIndex$$38$$) : $dataItem$$25_seriesIndex$$71_xVal$$
};
D.$DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($chart$$221$$, $seriesIndex$$72$$) {
  var $dataItem$$26$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$221$$, $seriesIndex$$72$$, 0);
  return!(0,window.isNaN)($dataItem$$26$$) || $dataItem$$26$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $dataItem$$26$$.targetValue
};
D.$DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($chart$$222_minMax$$1$$, $seriesIndex$$73_xVal$$1$$, $groupIndex$$39$$) {
  $seriesIndex$$73_xVal$$1$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$222_minMax$$1$$, $seriesIndex$$73_xVal$$1$$, $groupIndex$$39$$);
  if((0,window.isNaN)($seriesIndex$$73_xVal$$1$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$222_minMax$$1$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$222_minMax$$1$$);
  return $chart$$222_minMax$$1$$.min != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$73_xVal$$1$$ < $chart$$222_minMax$$1$$.min || $chart$$222_minMax$$1$$.max != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$73_xVal$$1$$ > $chart$$222_minMax$$1$$.max ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($x1$$33$$, $y1$$26$$, $x2$$30$$, $y2$$23$$, $X$$) {
  return $y1$$26$$ + ($y2$$23$$ - $y1$$26$$) * ($X$$ - $x1$$33$$) / ($x2$$30$$ - $x1$$33$$)
};
D.$DvtChartDataUtils$$.$getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$getViewportEdgeYValues$$($chart$$223$$, $seriesIndex$$74$$) {
  var $seriesData$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$223$$, $seriesIndex$$74$$).items;
  if(!$seriesData$$) {
    return{min:D.$JSCompiler_alias_NULL$$, max:D.$JSCompiler_alias_NULL$$}
  }
  for(var $bIncludeHiddenSeries$$1$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$223$$), $max$$10_minMax$$2$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$223$$), $min$$10$$ = $max$$10_minMax$$2$$.min, $max$$10_minMax$$2$$ = $max$$10_minMax$$2$$.max, $x$$257$$, $y$$227$$, $prevX$$4$$, $prevY$$4$$, $yMin$$3$$, $yMax$$3$$, $groupIndex$$40$$ = 0;$groupIndex$$40$$ < $seriesData$$.length;$groupIndex$$40$$++) {
    if($bIncludeHiddenSeries$$1$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$223$$, $seriesIndex$$74$$, $groupIndex$$40$$)) {
      $x$$257$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$223$$, $seriesIndex$$74$$, $groupIndex$$40$$), $y$$227$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$223$$, $seriesIndex$$74$$, $groupIndex$$40$$, $bIncludeHiddenSeries$$1$$), $prevX$$4$$ != D.$JSCompiler_alias_NULL$$ && ($min$$10$$ != D.$JSCompiler_alias_NULL$$ && ($min$$10$$ > $prevX$$4$$ && $min$$10$$ < $x$$257$$) && ($yMin$$3$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$4$$, $prevY$$4$$, $x$$257$$, $y$$227$$, $min$$10$$)), 
      $max$$10_minMax$$2$$ != D.$JSCompiler_alias_NULL$$ && ($max$$10_minMax$$2$$ > $prevX$$4$$ && $max$$10_minMax$$2$$ < $x$$257$$) && ($yMax$$3$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$4$$, $prevY$$4$$, $x$$257$$, $y$$227$$, $max$$10_minMax$$2$$))), $prevX$$4$$ = $x$$257$$, $prevY$$4$$ = $y$$227$$
    }
  }
  return{min:$yMin$$3$$, max:$yMax$$3$$}
};
D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$ = function $$DvtChartDataUtils$$$$_getXAxisViewportMinMax$$($chart$$224$$) {
  var $options$$128$$ = $chart$$224$$.$getOptions$().xAxis, $isGroupAxis$$ = D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$224$$), $min$$11$$ = D.$JSCompiler_alias_NULL$$, $min$$11$$ = $options$$128$$.viewportMin != D.$JSCompiler_alias_NULL$$ ? $options$$128$$.viewportMin : $options$$128$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$224$$, $options$$128$$.viewportStartGroup) : $options$$128$$.viewportStartGroup : $options$$128$$.min, 
  $max$$11$$ = D.$JSCompiler_alias_NULL$$, $max$$11$$ = $options$$128$$.viewportMax != D.$JSCompiler_alias_NULL$$ ? $options$$128$$.viewportMax : $options$$128$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$224$$, $options$$128$$.viewportEndGroup) : $options$$128$$.viewportEndGroup : $options$$128$$.max;
  return{min:$min$$11$$, max:$max$$11$$}
};
D.$DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($chart$$225$$, $type$$182$$, $limitToViewport$$) {
  var $isY2Value$$ = "y2" == $type$$182$$;
  $isY2Value$$ && ($type$$182$$ = "y");
  var $isYValue$$ = "y" == $type$$182$$;
  if(!$isYValue$$ || !D.$DvtChartTypeUtils$$.$isBLAC$($chart$$225$$)) {
    $limitToViewport$$ = D.$JSCompiler_alias_FALSE$$
  }
  for(var $bIncludeHiddenSeries$$2$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$225$$), $isBubble$$ = "bubble" == $chart$$225$$.$getType$(), $maxValue$$10$$ = -window.Infinity, $minValue$$9$$ = window.Infinity, $options$$129$$ = $chart$$225$$.$getOptions$(), $seriesCount$$24$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$225$$), $seriesIndex$$75$$ = 0;$seriesIndex$$75$$ < $seriesCount$$24$$;$seriesIndex$$75$$++) {
    var $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$225$$, $seriesIndex$$75$$);
    if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$225$$, $seriesIndex$$75$$)) {
      var $groupIndex$$41_i$$525_isY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$225$$, $seriesIndex$$75$$);
      if(!($isYValue$$ && $isY2Value$$ != $groupIndex$$41_i$$525_isY2Series$$) && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.items)) {
        for($groupIndex$$41_i$$525_isY2Series$$ = 0;$groupIndex$$41_i$$525_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.length;$groupIndex$$41_i$$525_isY2Series$$++) {
          if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$225$$, $seriesIndex$$75$$, $groupIndex$$41_i$$525_isY2Series$$)) {
            "object" != typeof $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$41_i$$525_isY2Series$$] && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$41_i$$525_isY2Series$$] = {y:$edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$41_i$$525_isY2Series$$]});
            var $data$$43_items$$7$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$41_i$$525_isY2Series$$], $timeAxisGroupLabel_value$$90$$;
            $isYValue$$ ? $timeAxisGroupLabel_value$$90$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$225$$, $seriesIndex$$75$$, $groupIndex$$41_i$$525_isY2Series$$, $bIncludeHiddenSeries$$2$$) : $data$$43_items$$7$$ != D.$JSCompiler_alias_NULL$$ && ($options$$129$$.timeAxisType && ("enabled" == $options$$129$$.timeAxisType && $data$$43_items$$7$$.x == D.$JSCompiler_alias_NULL$$) && ($timeAxisGroupLabel_value$$90$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$225$$, $groupIndex$$41_i$$525_isY2Series$$), 
            (0,window.isNaN)($timeAxisGroupLabel_value$$90$$) || ($data$$43_items$$7$$.x = $timeAxisGroupLabel_value$$90$$)), $timeAxisGroupLabel_value$$90$$ = $data$$43_items$$7$$[$type$$182$$]);
            if((!$limitToViewport$$ || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$225$$, $seriesIndex$$75$$, $groupIndex$$41_i$$525_isY2Series$$)) && !(0,window.isNaN)($timeAxisGroupLabel_value$$90$$)) {
              var $j$$66_radius$$9$$ = 0;
              $isBubble$$ && $data$$43_items$$7$$.markerSize && ($isYValue$$ ? $j$$66_radius$$9$$ = $data$$43_items$$7$$._yAxisRadius : "x" == $type$$182$$ && ($j$$66_radius$$9$$ = $data$$43_items$$7$$._xAxisRadius));
              $maxValue$$10$$ = window.Math.max($maxValue$$10$$, $timeAxisGroupLabel_value$$90$$ + $j$$66_radius$$9$$);
              $minValue$$9$$ = window.Math.min($minValue$$9$$, $timeAxisGroupLabel_value$$90$$ - $j$$66_radius$$9$$)
            }
          }
        }
        $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$JSCompiler_alias_NULL$$;
        "x" == $type$$182$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$225$$) : "y" == $type$$182$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$225$$) : "y2" == $type$$182$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$225$$));
        if($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ != D.$JSCompiler_alias_NULL$$) {
          for($groupIndex$$41_i$$525_isY2Series$$ = 0;$groupIndex$$41_i$$525_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.length;$groupIndex$$41_i$$525_isY2Series$$++) {
            if($data$$43_items$$7$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$41_i$$525_isY2Series$$].items, $data$$43_items$$7$$ != D.$JSCompiler_alias_NULL$$) {
              for($j$$66_radius$$9$$ = 0;$j$$66_radius$$9$$ < $data$$43_items$$7$$.length;$j$$66_radius$$9$$++) {
                if($data$$43_items$$7$$[$j$$66_radius$$9$$] != D.$JSCompiler_alias_NULL$$) {
                  var $min$$12$$ = $data$$43_items$$7$$[$j$$66_radius$$9$$].min, $max$$12$$ = $data$$43_items$$7$$[$j$$66_radius$$9$$].max, $val$$76$$ = (0,window.isNaN)($data$$43_items$$7$$[$j$$66_radius$$9$$]) ? $data$$43_items$$7$$[$j$$66_radius$$9$$].value : $data$$43_items$$7$$[$j$$66_radius$$9$$];
                  $min$$12$$ != D.$JSCompiler_alias_NULL$$ && ($minValue$$9$$ = window.Math.min($minValue$$9$$, $min$$12$$), $maxValue$$10$$ = window.Math.max($maxValue$$10$$, $min$$12$$));
                  $max$$12$$ != D.$JSCompiler_alias_NULL$$ && ($minValue$$9$$ = window.Math.min($minValue$$9$$, $max$$12$$), $maxValue$$10$$ = window.Math.max($maxValue$$10$$, $max$$12$$));
                  $val$$76$$ != D.$JSCompiler_alias_NULL$$ && ($minValue$$9$$ = window.Math.min($minValue$$9$$, $val$$76$$), $maxValue$$10$$ = window.Math.max($maxValue$$10$$, $val$$76$$))
                }
              }
            }
          }
        }
        $limitToViewport$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getViewportEdgeYValues$($chart$$225$$, $seriesIndex$$75$$), $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.min != D.$JSCompiler_alias_NULL$$ && ($minValue$$9$$ = window.Math.min($minValue$$9$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.min), $maxValue$$10$$ = window.Math.max($maxValue$$10$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.min)), $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.max != 
        D.$JSCompiler_alias_NULL$$ && ($minValue$$9$$ = window.Math.min($minValue$$9$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.max), $maxValue$$10$$ = window.Math.max($maxValue$$10$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.max)))
      }
    }
  }
  return{min:$minValue$$9$$, max:$maxValue$$10$$}
};
D.$DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($chart$$226$$, $seriesIndex$$76$$) {
  var $seriesItem$$26$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$226$$, $seriesIndex$$76$$);
  return $seriesItem$$26$$ && "on" == $seriesItem$$26$$.assignedToY2 && D.$DvtChartTypeUtils$$.$isDualY$($chart$$226$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasMixedFrequency$ = function $$DvtChartDataUtils$$$$hasMixedFrequency$$($chart$$227$$) {
  return"mixedFrequency" == $chart$$227$$.$getOptions$().timeAxisType
};
D.$DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($chart$$228_peers$$3$$) {
  var $selection$$13$$ = $chart$$228_peers$$3$$.$getOptions$().selectedItems;
  $selection$$13$$ || ($selection$$13$$ = []);
  $chart$$228_peers$$3$$ = $chart$$228_peers$$3$$.$getObjects$();
  for(var $i$$526$$ = 0;$i$$526$$ < $selection$$13$$.length;$i$$526$$++) {
    var $id$$199$$ = $selection$$13$$[$i$$526$$].id;
    if($id$$199$$ && (!$selection$$13$$[$i$$526$$].series || !$selection$$13$$[$i$$526$$].group)) {
      for(var $j$$67$$ = 0;$j$$67$$ < $chart$$228_peers$$3$$.length;$j$$67$$++) {
        var $peer$$19$$ = $chart$$228_peers$$3$$[$j$$67$$];
        if($id$$199$$ == $peer$$19$$.$_dataItemId$) {
          $selection$$13$$[$i$$526$$].series = $peer$$19$$.$getSeries$();
          $selection$$13$$[$i$$526$$].group = $peer$$19$$.$getGroup$();
          break
        }
      }
    }
  }
  return $selection$$13$$
};
D.$DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($chart$$229_handler$$49_selectedIds$$7$$) {
  var $selection$$14$$ = [];
  if($chart$$229_handler$$49_selectedIds$$7$$ = $chart$$229_handler$$49_selectedIds$$7$$.$getSelectionHandler$()) {
    $chart$$229_handler$$49_selectedIds$$7$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($chart$$229_handler$$49_selectedIds$$7$$);
    for(var $i$$527$$ = 0;$i$$527$$ < $chart$$229_handler$$49_selectedIds$$7$$.length;$i$$527$$++) {
      var $selectedId$$1$$ = $chart$$229_handler$$49_selectedIds$$7$$[$i$$527$$];
      $selection$$14$$.push({series:$selectedId$$1$$.$getSeries$(), group:$selectedId$$1$$.$getGroup$(), id:$selectedId$$1$$.getId()})
    }
  }
  return $selection$$14$$
};
D.$DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($chart$$230_group$$16$$, $series$$23_seriesIndex$$77$$, $groupIndex$$42_i$$528$$) {
  var $handler$$50_selectedIds$$8$$ = $chart$$230_group$$16$$.$getSelectionHandler$();
  $series$$23_seriesIndex$$77$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$230_group$$16$$, $series$$23_seriesIndex$$77$$);
  $chart$$230_group$$16$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$230_group$$16$$, $groupIndex$$42_i$$528$$);
  if($handler$$50_selectedIds$$8$$ && $series$$23_seriesIndex$$77$$ != D.$JSCompiler_alias_NULL$$ && $chart$$230_group$$16$$ != D.$JSCompiler_alias_NULL$$) {
    $handler$$50_selectedIds$$8$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($handler$$50_selectedIds$$8$$);
    for($groupIndex$$42_i$$528$$ = 0;$groupIndex$$42_i$$528$$ < $handler$$50_selectedIds$$8$$.length;$groupIndex$$42_i$$528$$++) {
      var $selectedId$$2$$ = $handler$$50_selectedIds$$8$$[$groupIndex$$42_i$$528$$];
      if($selectedId$$2$$.$getSeries$() == $series$$23_seriesIndex$$77$$ && $selectedId$$2$$.$getGroup$() == $chart$$230_group$$16$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($axis$$34_chart$$231$$, $seriesIndex$$78$$, $groupIndex$$43_label$$35$$) {
  var $dataItem$$27_options$$130$$ = D.$DvtChartDataUtils$$.$getDataItem$($axis$$34_chart$$231$$, $seriesIndex$$78$$, $groupIndex$$43_label$$35$$);
  if($dataItem$$27_options$$130$$.label) {
    $groupIndex$$43_label$$35$$ = (0,window.parseFloat)($dataItem$$27_options$$130$$.label);
    if((0,window.isNaN)($groupIndex$$43_label$$35$$)) {
      return $dataItem$$27_options$$130$$.label
    }
    var $dataItem$$27_options$$130$$ = $axis$$34_chart$$231$$.$getOptions$(), $min$$13$$, $max$$13$$;
    if($axis$$34_chart$$231$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($axis$$34_chart$$231$$, $seriesIndex$$78$$) && $axis$$34_chart$$231$$.$y2Axis$ ? $axis$$34_chart$$231$$.$y2Axis$ : $axis$$34_chart$$231$$.$yAxis$) {
      $min$$13$$ = $axis$$34_chart$$231$$.$getGlobalMin$(), $max$$13$$ = $axis$$34_chart$$231$$.$getGlobalMax$(), window.majorIncrement = $axis$$34_chart$$231$$.$getMajorIncrement$()
    }
    return $groupIndex$$43_label$$35$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($dataItem$$27_options$$130$$.valueFormats, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $groupIndex$$43_label$$35$$, $min$$13$$, $max$$13$$, window.majorIncrement)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartEventUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventUtils$$, D.$DvtObj$$, "DvtChartEventUtils");
D.$DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($chart$$135$$) {
  return $chart$$135$$.$getOptions$().hideAndShowBehavior
};
D.$DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($chart$$136$$) {
  return $chart$$136$$.$getOptions$().hoverBehavior
};
D.$DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($chart$$137_options$$115$$, $category$$12$$, $visibility$$3$$) {
  var $hiddenCategories$$1_i$$508_seriesItem$$15$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$137_options$$115$$, D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$137_options$$115$$, $category$$12$$));
  if($category$$12$$ == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ && D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$137_options$$115$$) !== $visibility$$3$$) {
    D.$DvtPieChartUtils$$.$setOtherSliceVisibility$($chart$$137_options$$115$$, $visibility$$3$$)
  }else {
    if($hiddenCategories$$1_i$$508_seriesItem$$15$$ && $hiddenCategories$$1_i$$508_seriesItem$$15$$.visibility !== $visibility$$3$$) {
      $hiddenCategories$$1_i$$508_seriesItem$$15$$.visibility = $visibility$$3$$
    }else {
      if(!D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$137_options$$115$$)) {
        return D.$JSCompiler_alias_FALSE$$
      }
      $hiddenCategories$$1_i$$508_seriesItem$$15$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$137_options$$115$$);
      "hidden" == $visibility$$3$$ ? $hiddenCategories$$1_i$$508_seriesItem$$15$$.push($category$$12$$) : $hiddenCategories$$1_i$$508_seriesItem$$15$$.splice(D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$1_i$$508_seriesItem$$15$$, $category$$12$$), 1);
      if(($chart$$137_options$$115$$ = $chart$$137_options$$115$$.$getOptions$()) && $chart$$137_options$$115$$.legend && $chart$$137_options$$115$$.legend.sections) {
        for($hiddenCategories$$1_i$$508_seriesItem$$15$$ = 0;$hiddenCategories$$1_i$$508_seriesItem$$15$$ < $chart$$137_options$$115$$.legend.sections.length;$hiddenCategories$$1_i$$508_seriesItem$$15$$++) {
          var $dataSection$$2$$ = $chart$$137_options$$115$$.legend.sections[$hiddenCategories$$1_i$$508_seriesItem$$15$$];
          if($dataSection$$2$$ && $dataSection$$2$$.items) {
            for(var $j$$61$$ = 0;$j$$61$$ < $dataSection$$2$$.items.length;$j$$61$$++) {
              $dataSection$$2$$.items[$j$$61$$].id == $category$$12$$ && ($dataSection$$2$$.items[$j$$61$$].categoryVisibility = $visibility$$3$$)
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($chart$$138$$) {
  return"off" != $chart$$138$$.$getOptions$().zoomAndScroll
};
D.$DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($chart$$139_zs$$) {
  $chart$$139_zs$$ = $chart$$139_zs$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$139_zs$$ || "delayed" == $chart$$139_zs$$
};
D.$DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($chart$$140_zs$$1$$) {
  $chart$$140_zs$$1$$ = $chart$$140_zs$$1$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$140_zs$$1$$ || "liveScrollOnly" == $chart$$140_zs$$1$$
};
D.$DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($chart$$141_zs$$2$$) {
  $chart$$141_zs$$2$$ = $chart$$141_zs$$2$$.$getOptions$().zoomAndScroll;
  return"delayed" == $chart$$141_zs$$2$$ || "delayedScrollOnly" == $chart$$141_zs$$2$$
};
D.$DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($chart$$142$$, $selection$$12$$) {
  for(var $ret$$55$$ = [], $i$$509$$ = 0;$i$$509$$ < $selection$$12$$.length;$i$$509$$++) {
    var $item$$32_otherItems$$ = $selection$$12$$[$i$$509$$];
    $item$$32_otherItems$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($item$$32_otherItems$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$142$$), $ret$$55$$ = $ret$$55$$.concat($item$$32_otherItems$$)) : $ret$$55$$.push($item$$32_otherItems$$)
  }
  return $ret$$55$$
};
D.$DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($event$$434$$) {
  $event$$434$$.x != D.$JSCompiler_alias_NULL$$ && ($event$$434$$.x -= 1);
  $event$$434$$.$w$ != D.$JSCompiler_alias_NULL$$ && ($event$$434$$.$w$ += 2);
  $event$$434$$.y != D.$JSCompiler_alias_NULL$$ && ($event$$434$$.y -= 1);
  $event$$434$$.$h$ != D.$JSCompiler_alias_NULL$$ && ($event$$434$$.$h$ += 2)
};
D.$DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($chart$$143$$, $event$$435$$) {
  for(var $peers$$1$$ = $chart$$143$$.$getObjects$(), $boundedPeers$$ = [], $i$$510$$ = 0;$i$$510$$ < $peers$$1$$.length;$i$$510$$++) {
    var $peer$$17$$ = $peers$$1$$[$i$$510$$], $dataPos$$5$$ = $peer$$17$$.$_dataPos$;
    if($dataPos$$5$$) {
      var $dataPos$$5$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($chart$$143$$.$getPlotArea$(), $dataPos$$5$$), $withinY$$ = $event$$435$$.y == D.$JSCompiler_alias_NULL$$ || $dataPos$$5$$.y >= $event$$435$$.y && $dataPos$$5$$.y <= $event$$435$$.y + $event$$435$$.$h$;
      ($event$$435$$.x == D.$JSCompiler_alias_NULL$$ || $dataPos$$5$$.x >= $event$$435$$.x && $dataPos$$5$$.x <= $event$$435$$.x + $event$$435$$.$w$) && $withinY$$ && $boundedPeers$$.push($peer$$17$$)
    }
  }
  return $boundedPeers$$
};
D.$DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($chart$$144$$, $event$$436_maxPt_xMinMax$$, $limitExtent$$) {
  var $plotArea$$3_yMinMax$$ = $chart$$144$$.$getPlotArea$(), $coords$$8_minPt$$ = $plotArea$$3_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($event$$436_maxPt_xMinMax$$.x, $event$$436_maxPt_xMinMax$$.y));
  $event$$436_maxPt_xMinMax$$ = $plotArea$$3_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($event$$436_maxPt_xMinMax$$.x + $event$$436_maxPt_xMinMax$$.$w$, $event$$436_maxPt_xMinMax$$.y + $event$$436_maxPt_xMinMax$$.$h$));
  $coords$$8_minPt$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$144$$, $coords$$8_minPt$$.x, $event$$436_maxPt_xMinMax$$.x, $coords$$8_minPt$$.y, $event$$436_maxPt_xMinMax$$.y);
  $event$$436_maxPt_xMinMax$$ = {};
  var $plotArea$$3_yMinMax$$ = {}, $y2MinMax$$ = {}, $startEndGroup$$1$$ = {};
  $chart$$144$$.$xAxis$ && ($event$$436_maxPt_xMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$144$$.$xAxis$, $coords$$8_minPt$$.$xMin$, $coords$$8_minPt$$.$xMax$, $limitExtent$$), $startEndGroup$$1$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$144$$.$xAxis$, $event$$436_maxPt_xMinMax$$.min, $event$$436_maxPt_xMinMax$$.max));
  $chart$$144$$.$yAxis$ && ($plotArea$$3_yMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$144$$.$yAxis$, $coords$$8_minPt$$.$yMin$, $coords$$8_minPt$$.$yMax$, $limitExtent$$));
  $chart$$144$$.$y2Axis$ && ($y2MinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$144$$.$y2Axis$, $coords$$8_minPt$$.$yMin$, $coords$$8_minPt$$.$yMax$, $limitExtent$$));
  return{$xMin$:$event$$436_maxPt_xMinMax$$.min, $xMax$:$event$$436_maxPt_xMinMax$$.max, $yMin$:$plotArea$$3_yMinMax$$.min, $yMax$:$plotArea$$3_yMinMax$$.max, $y2Min$:$y2MinMax$$.min, $y2Max$:$y2MinMax$$.max, $startGroup$:$startEndGroup$$1$$.$startGroup$, $endGroup$:$startEndGroup$$1$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($axis$$30$$, $center$$10_min$$5_minCoord$$1$$, $max$$5_maxCoord$$1$$, $limitExtent$$1_minExtent$$) {
  $center$$10_min$$5_minCoord$$1$$ = $axis$$30$$.$getUnboundedValueAt$($center$$10_min$$5_minCoord$$1$$);
  $max$$5_maxCoord$$1$$ = $axis$$30$$.$getUnboundedValueAt$($max$$5_maxCoord$$1$$);
  return $limitExtent$$1_minExtent$$ ? ($limitExtent$$1_minExtent$$ = $axis$$30$$.$getMinimumExtent$(), $max$$5_maxCoord$$1$$ - $center$$10_min$$5_minCoord$$1$$ < $limitExtent$$1_minExtent$$ && ($center$$10_min$$5_minCoord$$1$$ = ($max$$5_maxCoord$$1$$ + $center$$10_min$$5_minCoord$$1$$) / 2, $max$$5_maxCoord$$1$$ = $center$$10_min$$5_minCoord$$1$$ + $limitExtent$$1_minExtent$$ / 2, $center$$10_min$$5_minCoord$$1$$ -= $limitExtent$$1_minExtent$$ / 2), D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$30$$, 
  $center$$10_min$$5_minCoord$$1$$, $max$$5_maxCoord$$1$$)) : {min:$center$$10_min$$5_minCoord$$1$$, max:$max$$5_maxCoord$$1$$}
};
D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($chart$$145$$, $deltas$$1_xMinDelta$$, $xMaxDelta_xMinMax$$1$$, $yMinDelta_yMinMax$$1$$, $y2MinMax$$1_yMaxDelta$$) {
  $deltas$$1_xMinDelta$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$145$$, $deltas$$1_xMinDelta$$, $xMaxDelta_xMinMax$$1$$, $yMinDelta_yMinMax$$1$$, $y2MinMax$$1_yMaxDelta$$);
  $xMaxDelta_xMinMax$$1$$ = {};
  $yMinDelta_yMinMax$$1$$ = {};
  $y2MinMax$$1_yMaxDelta$$ = {};
  var $startEndGroup$$2$$ = {};
  $chart$$145$$.$xAxis$ && ($xMaxDelta_xMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$145$$.$xAxis$, $deltas$$1_xMinDelta$$.$xMin$, $deltas$$1_xMinDelta$$.$xMax$), $startEndGroup$$2$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$145$$.$xAxis$, $xMaxDelta_xMinMax$$1$$.min, $xMaxDelta_xMinMax$$1$$.max));
  $chart$$145$$.$yAxis$ && ($yMinDelta_yMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$145$$.$yAxis$, $deltas$$1_xMinDelta$$.$yMin$, $deltas$$1_xMinDelta$$.$yMax$));
  $chart$$145$$.$y2Axis$ && ($y2MinMax$$1_yMaxDelta$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$145$$.$y2Axis$, $deltas$$1_xMinDelta$$.$yMin$, $deltas$$1_xMinDelta$$.$yMax$));
  return{$xMin$:$xMaxDelta_xMinMax$$1$$.min, $xMax$:$xMaxDelta_xMinMax$$1$$.max, $yMin$:$yMinDelta_yMinMax$$1$$.min, $yMax$:$yMinDelta_yMinMax$$1$$.max, $y2Min$:$y2MinMax$$1_yMaxDelta$$.min, $y2Max$:$y2MinMax$$1_yMaxDelta$$.max, $startGroup$:$startEndGroup$$2$$.$startGroup$, $endGroup$:$startEndGroup$$2$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($axis$$31$$, $minDelta$$, $maxDelta$$) {
  var $min$$6$$ = $axis$$31$$.$getViewportMin$(), $max$$6$$ = $axis$$31$$.$getViewportMax$();
  if($maxDelta$$ == $minDelta$$ && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($axis$$31$$)) {
    return{min:$min$$6$$, max:$max$$6$$}
  }
  var $minDeltaVal$$ = $axis$$31$$.$getUnboundedValueAt$($minDelta$$) - $axis$$31$$.$getUnboundedValueAt$(0), $maxDeltaVal$$ = $axis$$31$$.$getUnboundedValueAt$($maxDelta$$) - $axis$$31$$.$getUnboundedValueAt$(0), $weight$$ = 1;
  $minDelta$$ != $maxDelta$$ && $max$$6$$ + $maxDeltaVal$$ - ($min$$6$$ + $minDeltaVal$$) < $axis$$31$$.$getMinimumExtent$() && ($weight$$ = ($max$$6$$ - $min$$6$$ - $axis$$31$$.$getMinimumExtent$()) / ($minDeltaVal$$ - $maxDeltaVal$$));
  return D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$31$$, $min$$6$$ + $minDeltaVal$$ * $weight$$, $max$$6$$ + $maxDeltaVal$$ * $weight$$)
};
D.$DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($chart$$146$$, $xMin$$2$$, $xMax$$2$$, $yMin$$2$$, $yMax$$2$$) {
  var $axisCoord$$3$$ = {}, $isRTL$$10$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$146$$.$_context$);
  D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$146$$) ? ($axisCoord$$3$$.$xMin$ = $yMin$$2$$, $axisCoord$$3$$.$xMax$ = $yMax$$2$$, $axisCoord$$3$$.$yMin$ = $isRTL$$10$$ ? $xMax$$2$$ : $xMin$$2$$, $axisCoord$$3$$.$yMin$ = $isRTL$$10$$ ? $xMin$$2$$ : $xMax$$2$$) : ($axisCoord$$3$$.$xMin$ = $isRTL$$10$$ ? $xMax$$2$$ : $xMin$$2$$, $axisCoord$$3$$.$xMax$ = $isRTL$$10$$ ? $xMin$$2$$ : $xMax$$2$$, $axisCoord$$3$$.$yMin$ = $yMax$$2$$, $axisCoord$$3$$.$yMax$ = $yMin$$2$$);
  return $axisCoord$$3$$
};
D.$DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($axis$$32_globalMax$$, $min$$7$$, $max$$7$$) {
  var $globalMin$$ = $axis$$32_globalMax$$.$getGlobalMin$();
  $axis$$32_globalMax$$ = $axis$$32_globalMax$$.$getGlobalMax$();
  $max$$7$$ - $min$$7$$ >= $axis$$32_globalMax$$ - $globalMin$$ ? ($min$$7$$ = $globalMin$$, $max$$7$$ = $axis$$32_globalMax$$) : $min$$7$$ < $globalMin$$ ? ($max$$7$$ += $globalMin$$ - $min$$7$$, $min$$7$$ = $globalMin$$) : $max$$7$$ > $axis$$32_globalMax$$ && ($min$$7$$ -= $max$$7$$ - $axis$$32_globalMax$$, $max$$7$$ = $axis$$32_globalMax$$);
  return{min:$min$$7$$, max:$max$$7$$}
};
D.$DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($axis$$33$$, $min$$8_startIdx$$, $endIdx_max$$8$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$33$$) && ($min$$8_startIdx$$ = window.Math.ceil($min$$8_startIdx$$), $endIdx_max$$8$$ = window.Math.floor($endIdx_max$$8$$), $endIdx_max$$8$$ >= $min$$8_startIdx$$) ? {$startGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$33$$) ? $axis$$33$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$33$$.$Info$, $min$$8_startIdx$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$, $endGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$33$$) ? 
  $axis$$33$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$33$$.$Info$, $endIdx_max$$8$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$} : {$startGroup$:D.$JSCompiler_alias_NULL$$, $endGroup$:D.$JSCompiler_alias_NULL$$}
};
D.$DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($chart$$147$$, $selected$$17$$) {
  var $handler$$48$$ = $chart$$147$$.$getSelectionHandler$();
  if($handler$$48$$) {
    for(var $peers$$2$$ = $chart$$147$$.$getObjects$(), $selectedIds$$6$$ = [], $i$$511$$ = 0;$i$$511$$ < $selected$$17$$.length;$i$$511$$++) {
      for(var $j$$62$$ = 0;$j$$62$$ < $peers$$2$$.length;$j$$62$$++) {
        var $peer$$18$$ = $peers$$2$$[$j$$62$$];
        $peer$$18$$.$getSeries$() === $selected$$17$$[$i$$511$$].series && $peer$$18$$.$getGroup$() === $selected$$17$$[$i$$511$$].group && $selectedIds$$6$$.push($peer$$18$$.getId())
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$48$$, $selectedIds$$6$$, $peers$$2$$)
  }
};
D.$DvtChartRefObjUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRefObjUtils$$, D.$DvtObj$$, "DvtChartRefObjUtils");
D.$DvtChartRefObjUtils$$.$getObjects$ = function $$DvtChartRefObjUtils$$$$getObjects$$($chart$$131_y2$$21$$) {
  var $x$$255$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$131_y2$$21$$), $y$$225$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$131_y2$$21$$);
  $chart$$131_y2$$21$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$131_y2$$21$$);
  return $x$$255$$.concat($y$$225$$, $chart$$131_y2$$21$$)
};
D.$DvtChartRefObjUtils$$.$getXAxisObjects$ = function $$DvtChartRefObjUtils$$$$getXAxisObjects$$($chart$$132_options$$112$$) {
  return($chart$$132_options$$112$$ = $chart$$132_options$$112$$.$getOptions$()) && $chart$$132_options$$112$$.xAxis && $chart$$132_options$$112$$.xAxis.referenceObjects ? $chart$$132_options$$112$$.xAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getYAxisObjects$ = function $$DvtChartRefObjUtils$$$$getYAxisObjects$$($chart$$133_options$$113$$) {
  return($chart$$133_options$$113$$ = $chart$$133_options$$113$$.$getOptions$()) && $chart$$133_options$$113$$.yAxis && $chart$$133_options$$113$$.yAxis.referenceObjects ? $chart$$133_options$$113$$.yAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getY2AxisObjects$ = function $$DvtChartRefObjUtils$$$$getY2AxisObjects$$($chart$$134_options$$114$$) {
  return($chart$$134_options$$114$$ = $chart$$134_options$$114$$.$getOptions$()) && $chart$$134_options$$114$$.y2Axis && $chart$$134_options$$114$$.y2Axis.referenceObjects ? $chart$$134_options$$114$$.y2Axis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($refObj$$4$$) {
  return"area" == $refObj$$4$$.type ? "area" : "line"
};
D.$DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($refObj$$5$$) {
  return"front" == $refObj$$5$$.location ? "front" : "back"
};
D.$DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($refObj$$6$$) {
  return $refObj$$6$$.color ? $refObj$$6$$.color : "#333333"
};
D.$DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($refObj$$7$$) {
  return $refObj$$7$$.lineWidth ? $refObj$$7$$.lineWidth : 1
};
D.$DvtChartSeriesEffectUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesEffectUtils$$, D.$DvtObj$$, "DvtChartSeriesEffectUtils");
D.$DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($chart$$198_colors$$4$$, $pattern$$14_seriesIndex$$59$$, $groupIndex$$30_seriesEffect$$, $angle$$37_bHoriz$$5$$, $barWidth$$5$$) {
  var $color$$52_stops$$2$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$198_colors$$4$$, $pattern$$14_seriesIndex$$59$$, $groupIndex$$30_seriesEffect$$);
  $pattern$$14_seriesIndex$$59$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$198_colors$$4$$, $pattern$$14_seriesIndex$$59$$, $groupIndex$$30_seriesEffect$$);
  $groupIndex$$30_seriesEffect$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$198_colors$$4$$);
  return $pattern$$14_seriesIndex$$59$$ ? new D.$DvtPatternFill$$($pattern$$14_seriesIndex$$59$$, $color$$52_stops$$2$$) : "gradient" == $groupIndex$$30_seriesEffect$$ && 3 < $barWidth$$5$$ ? ($angle$$37_bHoriz$$5$$ = $angle$$37_bHoriz$$5$$ ? 270 : 0, D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$198_colors$$4$$) ? ($chart$$198_colors$$4$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$52_stops$$2$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$52_stops$$2$$, -0.04, -0.05)], $color$$52_stops$$2$$ = 
  [0, 1]) : ($chart$$198_colors$$4$$ = [D.$DvtColorUtils$$.$getPastel$($color$$52_stops$$2$$, 0.15), D.$DvtColorUtils$$.$getPastel$($color$$52_stops$$2$$, 0.45), D.$DvtColorUtils$$.$getPastel$($color$$52_stops$$2$$, 0.25), $color$$52_stops$$2$$, D.$DvtColorUtils$$.$getPastel$($color$$52_stops$$2$$, 0.15), D.$DvtColorUtils$$.$getDarker$($color$$52_stops$$2$$, 0.9)], $color$$52_stops$$2$$ = [0, 0.15, 0.3, 0.65, 0.85, 1]), new D.$DvtLinearGradientFill$$($angle$$37_bHoriz$$5$$, $chart$$198_colors$$4$$, 
  D.$JSCompiler_alias_NULL$$, $color$$52_stops$$2$$)) : new D.$DvtSolidFill$$($color$$52_stops$$2$$)
};
D.$DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($chart$$199$$, $seriesIndex$$60$$) {
  var $color$$53_colors$$5$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$199$$, $seriesIndex$$60$$), $pattern$$15_stops$$3$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$199$$, $seriesIndex$$60$$), $seriesEffect$$1$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$199$$);
  return $pattern$$15_stops$$3$$ ? new D.$DvtPatternFill$$($pattern$$15_stops$$3$$, $color$$53_colors$$5$$) : "gradient" == $seriesEffect$$1$$ ? (D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$199$$) ? ($color$$53_colors$$5$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$53_colors$$5$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$53_colors$$5$$, -0.04, -0.05)], $pattern$$15_stops$$3$$ = [0, 1]) : ($color$$53_colors$$5$$ = D.$DvtChartTypeUtils$$.$isSpark$($chart$$199$$) ? [D.$DvtColorUtils$$.$getDarker$($color$$53_colors$$5$$, 
  0.5), $color$$53_colors$$5$$, D.$DvtColorUtils$$.$getPastel$($color$$53_colors$$5$$, 0.5)] : [D.$DvtColorUtils$$.$getPastel$($color$$53_colors$$5$$, 0.5), $color$$53_colors$$5$$, D.$DvtColorUtils$$.$getDarker$($color$$53_colors$$5$$, 0.7)], $pattern$$15_stops$$3$$ = [0, 0.5, 1]), new D.$DvtLinearGradientFill$$(270, $color$$53_colors$$5$$, D.$JSCompiler_alias_NULL$$, $pattern$$15_stops$$3$$)) : new D.$DvtSolidFill$$($color$$53_colors$$5$$)
};
D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($chart$$200_linearColors_radialColors$$, $seriesIndex$$61$$, $groupIndex$$31$$) {
  var $color$$54$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$200_linearColors_radialColors$$, $seriesIndex$$61$$, $groupIndex$$31$$), $pattern$$16$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$200_linearColors_radialColors$$, $seriesIndex$$61$$, $groupIndex$$31$$);
  if("bubble" == $chart$$200_linearColors_radialColors$$.$getType$()) {
    var $seriesEffect$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$200_linearColors_radialColors$$);
    if($pattern$$16$$) {
      return new D.$DvtPatternFill$$($pattern$$16$$, $color$$54$$)
    }
    if("gradient" == $seriesEffect$$2$$) {
      if(D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$200_linearColors_radialColors$$)) {
        return window.colors = [D.$DvtColorUtils$$.$adjustHSL$($color$$54$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$54$$, -0.04, -0.05)], window.stops = [0, 1], new D.$DvtLinearGradientFill$$(270, window.colors, D.$JSCompiler_alias_NULL$$, window.stops)
      }
      if("human" == D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$200_linearColors_radialColors$$, $seriesIndex$$61$$, $groupIndex$$31$$)) {
        return $chart$$200_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$54$$, 0.2), D.$DvtColorUtils$$.$getPastel$($color$$54$$, 0.1), $color$$54$$, D.$DvtColorUtils$$.$getDarker$($color$$54$$, 0.8)], new D.$DvtLinearGradientFill$$(315, $chart$$200_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.3, 0.7, 1])
      }
      $chart$$200_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$54$$, 0.15), $color$$54$$, D.$DvtColorUtils$$.$getDarker$($color$$54$$, 0.9), D.$DvtColorUtils$$.$getDarker$($color$$54$$, 0.8)];
      return new D.$DvtRadialGradientFill$$($chart$$200_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.5, 0.75, 1])
    }
  }
  return new D.$DvtSolidFill$$($color$$54$$)
};
D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($chart$$201_colors$$6$$, $pattern$$17_seriesIndex$$62$$, $color$$55_stops$$4$$, $dimensions$$2_fill$$51$$, $bBackground$$) {
  $pattern$$17_seriesIndex$$62$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$201_colors$$6$$, $pattern$$17_seriesIndex$$62$$, 0);
  var $seriesEffect$$3$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$201_colors$$6$$);
  return $pattern$$17_seriesIndex$$62$$ && !$bBackground$$ ? ($dimensions$$2_fill$$51$$ = new D.$DvtPatternFill$$($pattern$$17_seriesIndex$$62$$, $color$$55_stops$$4$$), "vertical" == $chart$$201_colors$$6$$.$getOptions$().orientation && (D.$DvtAgent$$.$isRightToLeft$($chart$$201_colors$$6$$.$_context$) ? $dimensions$$2_fill$$51$$.$setMatrix$(new D.$DvtMatrix$$(0, -1, 1, 0)) : $dimensions$$2_fill$$51$$.$setMatrix$(new D.$DvtMatrix$$(0, 1, -1, 0))), $dimensions$$2_fill$$51$$) : "gradient" == $seriesEffect$$3$$ ? 
  ("on" == $chart$$201_colors$$6$$.$getOptions$().styleDefaults.threeDEffect ? ($chart$$201_colors$$6$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$55_stops$$4$$, 0, -0.1), D.$DvtColorUtils$$.$adjustHSL$($color$$55_stops$$4$$, 0, 0.12), $color$$55_stops$$4$$], $color$$55_stops$$4$$ = [0, 0.65, 1]) : ($chart$$201_colors$$6$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$55_stops$$4$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$55_stops$$4$$, -0.04, -0.05)], $color$$55_stops$$4$$ = [0, 1]), new D.$DvtLinearGradientFill$$(90, 
  $chart$$201_colors$$6$$, D.$JSCompiler_alias_NULL$$, $color$$55_stops$$4$$, [$dimensions$$2_fill$$51$$.x, $dimensions$$2_fill$$51$$.y, $dimensions$$2_fill$$51$$.$w$, $dimensions$$2_fill$$51$$.$h$])) : new D.$DvtSolidFill$$($color$$55_stops$$4$$)
};
D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($chart$$202$$) {
  return"skyros" != $chart$$202$$.$getOptions$().skin
};
D.$DvtChartStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartStyleUtils$$, D.$DvtObj$$, "DvtChartStyleUtils");
D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
D.$DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($chart$$100$$, $seriesIndex$$36$$) {
  if(D.$DvtChartTypeUtils$$.$isBar$($chart$$100$$)) {
    return"bar"
  }
  if(D.$DvtChartTypeUtils$$.$isLine$($chart$$100$$)) {
    return"line"
  }
  if(D.$DvtChartTypeUtils$$.$isArea$($chart$$100$$)) {
    return"area"
  }
  if(D.$DvtChartTypeUtils$$.$isCombo$($chart$$100$$)) {
    var $series$$16_seriesItem$$4_seriesType$$1_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$100$$, $seriesIndex$$36$$), $series$$16_seriesItem$$4_seriesType$$1_typeIndex$$ = $series$$16_seriesItem$$4_seriesType$$1_typeIndex$$ ? $series$$16_seriesItem$$4_seriesType$$1_typeIndex$$.type : D.$JSCompiler_alias_NULL$$;
    return!$series$$16_seriesItem$$4_seriesType$$1_typeIndex$$ || "auto" == $series$$16_seriesItem$$4_seriesType$$1_typeIndex$$ ? ($series$$16_seriesItem$$4_seriesType$$1_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$100$$, $seriesIndex$$36$$), $series$$16_seriesItem$$4_seriesType$$1_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$100$$, $series$$16_seriesItem$$4_seriesType$$1_typeIndex$$) % D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$series$$16_seriesItem$$4_seriesType$$1_typeIndex$$]) : 
    $series$$16_seriesItem$$4_seriesType$$1_typeIndex$$
  }
  return"auto"
};
D.$DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($chart$$101$$) {
  return $chart$$101$$.$getOptions$().styleDefaults.seriesEffect
};
D.$DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($chart$$102_colorIndex$$, $series$$17_seriesIndex$$37$$, $dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$) {
  if(($dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$102_colorIndex$$, $series$$17_seriesIndex$$37$$, $dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$)) && $dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$.color || ($dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$102_colorIndex$$, $series$$17_seriesIndex$$37$$)) && $dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$.color) {
    return $dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$.color
  }
  $dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$ = $chart$$102_colorIndex$$.$getOptions$();
  var $defaultColors$$ = $dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$.styleDefaults.colors;
  $series$$17_seriesIndex$$37$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$102_colorIndex$$, $series$$17_seriesIndex$$37$$);
  $chart$$102_colorIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$102_colorIndex$$, $series$$17_seriesIndex$$37$$) % $defaultColors$$.length;
  return $dataItem$$11_groupIndex$$14_options$$98_seriesItem$$5$$.styleDefaults.colors[$chart$$102_colorIndex$$]
};
D.$DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($chart$$103_patternIndex$$, $series$$18_seriesIndex$$38$$, $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$) {
  if(D.$DvtChartTypeUtils$$.$isLine$($chart$$103_patternIndex$$) || D.$DvtChartTypeUtils$$.$isScatter$($chart$$103_patternIndex$$) || "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$103_patternIndex$$, $series$$18_seriesIndex$$38$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$103_patternIndex$$, $series$$18_seriesIndex$$38$$, $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$)) && $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$.pattern && "auto" != $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$.pattern || ($dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$103_patternIndex$$, $series$$18_seriesIndex$$38$$)) && 
  $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$.pattern && "auto" != $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$.pattern) {
    return $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$.pattern
  }
  if("pattern" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$103_patternIndex$$)) {
    $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$ = $chart$$103_patternIndex$$.$getOptions$();
    var $defaultPatterns$$ = $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$.styleDefaults.patterns;
    $series$$18_seriesIndex$$38$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$103_patternIndex$$, $series$$18_seriesIndex$$38$$);
    $chart$$103_patternIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$103_patternIndex$$, $series$$18_seriesIndex$$38$$) % $defaultPatterns$$.length;
    return $dataItem$$12_groupIndex$$15_options$$99_seriesItem$$6$$.styleDefaults.patterns[$chart$$103_patternIndex$$]
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($chart$$104_markerColor$$, $seriesIndex$$39$$, $groupIndex$$16$$) {
  var $dataItem$$13_options$$100_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$104_markerColor$$, $seriesIndex$$39$$, $groupIndex$$16$$);
  if($dataItem$$13_options$$100_seriesItem$$7$$ && $dataItem$$13_options$$100_seriesItem$$7$$.borderColor || ($dataItem$$13_options$$100_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$104_markerColor$$, $seriesIndex$$39$$)) && $dataItem$$13_options$$100_seriesItem$$7$$.borderColor) {
    return $dataItem$$13_options$$100_seriesItem$$7$$.borderColor
  }
  $dataItem$$13_options$$100_seriesItem$$7$$ = $chart$$104_markerColor$$.$getOptions$();
  return"undefined" != typeof $dataItem$$13_options$$100_seriesItem$$7$$.styleDefaults.borderColor ? $dataItem$$13_options$$100_seriesItem$$7$$.styleDefaults.borderColor : "bubble" == $chart$$104_markerColor$$.$getType$() && "alta" == $chart$$104_markerColor$$.$getOptions$().skin && "gradient" != D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$104_markerColor$$) ? ($chart$$104_markerColor$$ = this.$getMarkerColor$($chart$$104_markerColor$$, $seriesIndex$$39$$, $groupIndex$$16$$), D.$DvtColorUtils$$.$adjustHSL$($chart$$104_markerColor$$, 
  0.15, -0.25)) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($chart$$105$$, $seriesIndex$$40$$, $groupIndex$$17$$) {
  var $dataItem$$14_defaultMarkerColor_seriesItem$$8$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$105$$, $seriesIndex$$40$$, $groupIndex$$17$$);
  return $dataItem$$14_defaultMarkerColor_seriesItem$$8$$ && $dataItem$$14_defaultMarkerColor_seriesItem$$8$$.color ? $dataItem$$14_defaultMarkerColor_seriesItem$$8$$.color : ($dataItem$$14_defaultMarkerColor_seriesItem$$8$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$105$$, $seriesIndex$$40$$)) && $dataItem$$14_defaultMarkerColor_seriesItem$$8$$.markerColor ? $dataItem$$14_defaultMarkerColor_seriesItem$$8$$.markerColor : ($dataItem$$14_defaultMarkerColor_seriesItem$$8$$ = $chart$$105$$.$getOptions$().styleDefaults.markerColor) ? 
  $dataItem$$14_defaultMarkerColor_seriesItem$$8$$ : D.$DvtChartStyleUtils$$.$getColor$($chart$$105$$, $seriesIndex$$40$$, $groupIndex$$17$$)
};
D.$DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($chart$$106_styleIndex$$3$$, $series$$19_seriesIndex$$41$$, $dataItem$$15_groupIndex$$18$$) {
  var $options$$102_shapeRamp$$ = $chart$$106_styleIndex$$3$$.$getOptions$(), $shape$$80$$ = $options$$102_shapeRamp$$.styleDefaults.markerShape, $seriesItem$$9$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$106_styleIndex$$3$$, $series$$19_seriesIndex$$41$$);
  $seriesItem$$9$$ && $seriesItem$$9$$.markerShape && ($shape$$80$$ = $seriesItem$$9$$.markerShape);
  ($dataItem$$15_groupIndex$$18$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$106_styleIndex$$3$$, $series$$19_seriesIndex$$41$$, $dataItem$$15_groupIndex$$18$$)) && $dataItem$$15_groupIndex$$18$$.markerShape && ($shape$$80$$ = $dataItem$$15_groupIndex$$18$$.markerShape);
  "auto" == $shape$$80$$ && ("bubble" == $chart$$106_styleIndex$$3$$.$getType$() ? $shape$$80$$ = "circle" : ($series$$19_seriesIndex$$41$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$106_styleIndex$$3$$, $series$$19_seriesIndex$$41$$), $chart$$106_styleIndex$$3$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$106_styleIndex$$3$$, $series$$19_seriesIndex$$41$$), $options$$102_shapeRamp$$ = $options$$102_shapeRamp$$.styleDefaults.shapes, $shape$$80$$ = $options$$102_shapeRamp$$[$chart$$106_styleIndex$$3$$ % 
  $options$$102_shapeRamp$$.length]));
  return $shape$$80$$
};
D.$DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($chart$$107_options$$103$$, $seriesIndex$$42_seriesItem$$10$$, $dataItem$$16_groupIndex$$19_markerSize$$4$$) {
  $dataItem$$16_groupIndex$$19_markerSize$$4$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$107_options$$103$$, $seriesIndex$$42_seriesItem$$10$$, $dataItem$$16_groupIndex$$19_markerSize$$4$$);
  $seriesIndex$$42_seriesItem$$10$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$107_options$$103$$, $seriesIndex$$42_seriesItem$$10$$);
  $chart$$107_options$$103$$ = $chart$$107_options$$103$$.$getOptions$();
  $dataItem$$16_groupIndex$$19_markerSize$$4$$ = $dataItem$$16_groupIndex$$19_markerSize$$4$$ && $dataItem$$16_groupIndex$$19_markerSize$$4$$.markerSize ? $dataItem$$16_groupIndex$$19_markerSize$$4$$.markerSize : $seriesIndex$$42_seriesItem$$10$$ && $seriesIndex$$42_seriesItem$$10$$.markerSize ? $seriesIndex$$42_seriesItem$$10$$.markerSize : $chart$$107_options$$103$$.styleDefaults.markerSize;
  $chart$$107_options$$103$$._isOverview && ($dataItem$$16_groupIndex$$19_markerSize$$4$$ = window.Math.ceil(0.6 * $dataItem$$16_groupIndex$$19_markerSize$$4$$));
  return $dataItem$$16_groupIndex$$19_markerSize$$4$$
};
D.$DvtChartStyleUtils$$.$getMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$getMarkerDisplayed$$($chart$$108$$, $seriesIndex$$43_seriesItem$$11$$, $dataItem$$17_groupIndex$$20$$) {
  var $chartType$$5$$ = $chart$$108$$.$getType$();
  return"scatter" == $chartType$$5$$ || "bubble" == $chartType$$5$$ ? "on" : ($dataItem$$17_groupIndex$$20$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$108$$, $seriesIndex$$43_seriesItem$$11$$, $dataItem$$17_groupIndex$$20$$)) && ("on" === $dataItem$$17_groupIndex$$20$$.markerDisplayed || "off" === $dataItem$$17_groupIndex$$20$$.markerDisplayed) ? $dataItem$$17_groupIndex$$20$$.markerDisplayed : ($seriesIndex$$43_seriesItem$$11$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$108$$, $seriesIndex$$43_seriesItem$$11$$)) && 
  ("on" === $seriesIndex$$43_seriesItem$$11$$.markerDisplayed || "off" === $seriesIndex$$43_seriesItem$$11$$.markerDisplayed) ? $seriesIndex$$43_seriesItem$$11$$.markerDisplayed : $chart$$108$$.$getOptions$().styleDefaults.markerDisplayed
};
D.$DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($chart$$109$$, $seriesIndex$$44$$) {
  var $lineWidth$$4_seriesItem$$12$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$109$$, $seriesIndex$$44$$), $options$$105$$ = $chart$$109$$.$getOptions$(), $lineWidth$$4_seriesItem$$12$$ = $lineWidth$$4_seriesItem$$12$$ && $lineWidth$$4_seriesItem$$12$$.lineWidth ? $lineWidth$$4_seriesItem$$12$$.lineWidth : $options$$105$$.styleDefaults.lineWidth;
  $options$$105$$._isOverview && ($lineWidth$$4_seriesItem$$12$$ = window.Math.ceil(0.6 * $lineWidth$$4_seriesItem$$12$$));
  return $lineWidth$$4_seriesItem$$12$$
};
D.$DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($chart$$110$$, $seriesIndex$$45$$) {
  var $seriesItem$$13$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$110$$, $seriesIndex$$45$$);
  return $seriesItem$$13$$ && $seriesItem$$13$$.lineStyle ? $seriesItem$$13$$.lineStyle : $chart$$110$$.$getOptions$().styleDefaults.lineStyle
};
D.$DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($chart$$111$$) {
  return $chart$$111$$.$getOptions$().__sparkBarSpacing
};
D.$DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($chart$$112$$, $barCount_barSeriesCount$$1$$, $axis$$29_barWidth$$2$$) {
  var $maxBarWidth_options$$108$$ = $chart$$112$$.$getOptions$(), $isPolar$$4$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$112$$);
  $barCount_barSeriesCount$$1$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$112$$) ? D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$112$$) ? 2 : 1 : $barCount_barSeriesCount$$1$$;
  var $barGapRatio$$ = $maxBarWidth_options$$108$$.styleDefaults.barGapRatio;
  "string" == typeof $barGapRatio$$ && "%" == $barGapRatio$$.slice(-1) && ($barGapRatio$$ = (0,window.Number)($barGapRatio$$.slice(0, -1)) / 100);
  $barGapRatio$$ == D.$JSCompiler_alias_NULL$$ && ($barGapRatio$$ = $isPolar$$4$$ ? 1 == $barCount_barSeriesCount$$1$$ || D.$DvtChartTypeUtils$$.$isStacked$($chart$$112$$) ? 0 : 0.25 : 1 == $barCount_barSeriesCount$$1$$ ? 0.625 : 0.25);
  $axis$$29_barWidth$$2$$ = $axis$$29_barWidth$$2$$.$getGroupWidth$() * (1 - $barGapRatio$$) / $barCount_barSeriesCount$$1$$;
  $maxBarWidth_options$$108$$ = $maxBarWidth_options$$108$$.styleDefaults.maxBarWidth;
  $maxBarWidth_options$$108$$ != D.$JSCompiler_alias_NULL$$ && !$isPolar$$4$$ && ($axis$$29_barWidth$$2$$ = window.Math.min($axis$$29_barWidth$$2$$, $maxBarWidth_options$$108$$));
  "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$112$$) && ($axis$$29_barWidth$$2$$ = window.Math.max(window.Math.floor($axis$$29_barWidth$$2$$), 1));
  return $axis$$29_barWidth$$2$$
};
D.$DvtChartStyleUtils$$.$getBarOffset$ = function $$DvtChartStyleUtils$$$$getBarOffset$$($chart$$113$$, $barWidth$$3$$, $barSeriesCount$$2_offset$$28$$) {
  $barSeriesCount$$2_offset$$28$$ = -($barWidth$$3$$ * $barSeriesCount$$2_offset$$28$$ / 2);
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$113$$) || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$113$$)) {
    $barSeriesCount$$2_offset$$28$$ = D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$113$$) ? D.$DvtAgent$$.$isRightToLeft$($chart$$113$$.$_context$) ? 0 : -$barWidth$$3$$ : -$barWidth$$3$$ / 2
  }
  return $barSeriesCount$$2_offset$$28$$
};
D.$DvtChartStyleUtils$$.$getY2BarOffset$ = function $$DvtChartStyleUtils$$$$getY2BarOffset$$($chart$$114$$, $barWidth$$4$$) {
  return D.$DvtChartTypeUtils$$.$isStacked$($chart$$114$$) ? D.$DvtAgent$$.$isRightToLeft$($chart$$114$$.$_context$) ? -$barWidth$$4$$ : $barWidth$$4$$ : 0
};
D.$DvtChartStyleUtils$$.$getVisibility$ = function $$DvtChartStyleUtils$$$$getVisibility$$($chart$$115$$, $seriesIndex$$46$$) {
  var $seriesItem$$14$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$115$$, $seriesIndex$$46$$);
  return $seriesItem$$14$$ && $seriesItem$$14$$.visibility ? $seriesItem$$14$$.visibility : "visible"
};
D.$DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($chart$$116$$, $seriesIndex$$47$$) {
  return"hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$116$$, $seriesIndex$$47$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($chart$$117_dataItem$$18$$, $i$$504_seriesIndex$$48$$, $groupIndex$$21$$) {
  if("hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$117_dataItem$$18$$, $i$$504_seriesIndex$$48$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $hiddenCategories$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$117_dataItem$$18$$);
  $chart$$117_dataItem$$18$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$117_dataItem$$18$$, $i$$504_seriesIndex$$48$$, $groupIndex$$21$$);
  if(0 < $hiddenCategories$$.length && $chart$$117_dataItem$$18$$ && $chart$$117_dataItem$$18$$.categories) {
    for($i$$504_seriesIndex$$48$$ = 0;$i$$504_seriesIndex$$48$$ < $chart$$117_dataItem$$18$$.categories.length;$i$$504_seriesIndex$$48$$++) {
      if(0 <= D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$, $chart$$117_dataItem$$18$$.categories[$i$$504_seriesIndex$$48$$])) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($chart$$118$$) {
  return $chart$$118$$.$getOptions$().animationOnDisplay
};
D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($chart$$119$$) {
  return $chart$$119$$.$getOptions$().animationOnDataChange
};
D.$DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($chart$$120$$) {
  return $chart$$120$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
D.$DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($chart$$121$$) {
  return $chart$$121$$.$getOptions$().styleDefaults.animationIndicators
};
D.$DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($chart$$122$$) {
  return $chart$$122$$.$getOptions$().styleDefaults.animationUpColor
};
D.$DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($chart$$123$$) {
  return $chart$$123$$.$getOptions$().styleDefaults.animationDownColor
};
D.$DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($chart$$124_options$$109$$) {
  $chart$$124_options$$109$$ = $chart$$124_options$$109$$.$getOptions$();
  $chart$$124_options$$109$$._hiddenCategories || ($chart$$124_options$$109$$._hiddenCategories = []);
  return $chart$$124_options$$109$$._hiddenCategories
};
D.$DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($chart$$125$$) {
  return $chart$$125$$.$getOptions$().styleDefaults.selectedInnerColor
};
D.$DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($chart$$126$$) {
  return $chart$$126$$.$getOptions$().styleDefaults.selectedOuterColor
};
D.$DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($chart$$127$$, $seriesIndex$$49$$, $groupIndex$$22$$, $dataColor$$8_labelColor$$1$$, $position$$41$$) {
  var $labelStyleArray$$1$$ = [];
  $dataColor$$8_labelColor$$1$$ && ("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$127$$, $seriesIndex$$49$$) || D.$DvtChartTypeUtils$$.$isBubble$($chart$$127$$)) && ("center" == $position$$41$$ || "inBottom" == $position$$41$$ || "inTop" == $position$$41$$ || "inRight" == $position$$41$$ || "inLeft" == $position$$41$$) ? ($dataColor$$8_labelColor$$1$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$127$$, $seriesIndex$$49$$, $groupIndex$$22$$) != D.$JSCompiler_alias_NULL$$ ? "#000000" : 
  D.$DvtColorUtils$$.$getContrastingTextColor$($dataColor$$8_labelColor$$1$$), $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $dataColor$$8_labelColor$$1$$ + ";"))) : $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: #333333;"));
  $labelStyleArray$$1$$.push($chart$$127$$.$getOptions$().styleDefaults.dataLabelStyle);
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$($chart$$127$$, $seriesIndex$$49$$, $groupIndex$$22$$).labelStyle));
  return(0,D.$DvtCSSStyle$mergeStyles$$)($labelStyleArray$$1$$)
};
D.$DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($chart$$128$$, $bNegative_seriesIndex$$50$$, $groupIndex$$23$$) {
  var $position$$42$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$128$$, $bNegative_seriesIndex$$50$$, $groupIndex$$23$$).labelPosition;
  $position$$42$$ || ($position$$42$$ = $chart$$128$$.$getOptions$().styleDefaults.dataLabelPosition);
  var $bBidi$$1$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$128$$.$_context$);
  if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$128$$, $bNegative_seriesIndex$$50$$)) {
    if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$128$$)) {
      return"center"
    }
    if("insideBarEdge" != $position$$42$$ && "center" != $position$$42$$) {
      if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$128$$)) {
        return"center"
      }
      "outsideBarEdge" != $position$$42$$ && ($position$$42$$ = "insideBarEdge")
    }
    $bNegative_seriesIndex$$50$$ = 0 > D.$DvtChartDataUtils$$.getValue($chart$$128$$, $bNegative_seriesIndex$$50$$, $groupIndex$$23$$);
    return"outsideBarEdge" == $position$$42$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$128$$) ? !$bNegative_seriesIndex$$50$$ && !$bBidi$$1$$ || $bNegative_seriesIndex$$50$$ && $bBidi$$1$$ ? "right" : "left" : $bNegative_seriesIndex$$50$$ ? "below" : "above" : "insideBarEdge" == $position$$42$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$128$$) ? !$bNegative_seriesIndex$$50$$ && !$bBidi$$1$$ || $bNegative_seriesIndex$$50$$ && $bBidi$$1$$ ? "inRight" : "inLeft" : $bNegative_seriesIndex$$50$$ ? 
    "inBottom" : "inTop" : "center"
  }
  if("belowMarker" == $position$$42$$) {
    return"below"
  }
  if("aboveMarker" == $position$$42$$) {
    return"above"
  }
  if("afterMarker" != $position$$42$$ && "beforeMarker" != $position$$42$$ && "center" != $position$$42$$) {
    if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$128$$)) {
      return"center"
    }
    $position$$42$$ = "afterMarker"
  }
  return!$bBidi$$1$$ && "afterMarker" == $position$$42$$ || $bBidi$$1$$ && "beforeMarker" == $position$$42$$ ? "right" : !$bBidi$$1$$ && "beforeMarker" == $position$$42$$ || $bBidi$$1$$ && "afterMarker" == $position$$42$$ ? "left" : "center"
};
D.$DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($chart$$129$$) {
  var $options$$110$$ = $chart$$129$$.$getOptions$();
  return D.$DvtChartTypeUtils$$.$isOverviewSupported$($chart$$129$$) && "off" != $options$$110$$.overview.rendered
};
D.$DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($chart$$130$$) {
  var $defaultRatio_options$$111$$ = $chart$$130$$.$getOptions$(), $height$$84$$ = $defaultRatio_options$$111$$.overview.height;
  if($height$$84$$ != D.$JSCompiler_alias_NULL$$ && ("string" == typeof $height$$84$$ && ($height$$84$$ = "%" == $height$$84$$.slice(-1) ? $chart$$130$$.getHeight() * (0,window.Number)($height$$84$$.slice(0, -1)) / 100 : "px" == $height$$84$$.slice(-2) ? (0,window.Number)($height$$84$$.slice(0, -2)) : (0,window.Number)($height$$84$$)), !(0,window.isNaN)($height$$84$$) && 0 < $height$$84$$)) {
    return $height$$84$$
  }
  $defaultRatio_options$$111$$ = "disabled" == $defaultRatio_options$$111$$.timeAxisType ? 0.2 : 0.25;
  return $chart$$130$$.getHeight() * $defaultRatio_options$$111$$
};
D.$DvtChartTextUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTextUtils$$, D.$DvtObj$$, "DvtChartTextUtils");
D.$DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($eventManager$$26$$, $container$$92$$, $text$$72_textString$$11$$, $cssStyle$$34$$, $x$$256$$, $y$$226$$, $width$$103$$, $height$$85$$, $params$$31$$) {
  $text$$72_textString$$11$$ = new D.$DvtOutputText$$($container$$92$$.$_context$, $text$$72_textString$$11$$, $x$$256$$, $y$$226$$);
  $text$$72_textString$$11$$.$setCSSStyle$($cssStyle$$34$$);
  return D.$DvtTextUtils$$.$fitText$($text$$72_textString$$11$$, $width$$103$$, $height$$85$$, $container$$92$$) ? ($eventManager$$26$$.$associate$($text$$72_textString$$11$$, new D.$DvtSimpleObjPeer$$($text$$72_textString$$11$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$31$$)), $text$$72_textString$$11$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($chart$$148_options$$116$$) {
  $chart$$148_options$$116$$ = $chart$$148_options$$116$$.$getOptions$();
  return $chart$$148_options$$116$$.title.text || $chart$$148_options$$116$$.subtitle.text || $chart$$148_options$$116$$.footnote.text
};
D.$DvtChartTooltipUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTooltipUtils$$, D.$DvtObj$$, "DvtChartTooltipUtils");
D.$DvtChartTooltipUtils$$.$_TYPE_X$ = "x";
D.$DvtChartTooltipUtils$$.$_TYPE_Y$ = "y";
D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ = "y2";
D.$DvtChartTooltipUtils$$.$_TYPE_Z$ = "z";
D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$ = "value";
D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$ = "targetValue";
D.$DvtChartTooltipUtils$$.$hasDatatips$ = function $$DvtChartTooltipUtils$$$$hasDatatips$$($chart$$157_options$$118$$) {
  $chart$$157_options$$118$$ = $chart$$157_options$$118$$.$getOptions$();
  return"none" == $chart$$157_options$$118$$.styleDefaults.seriesTooltipType && "none" == $chart$$157_options$$118$$.styleDefaults.groupTooltipType && "none" == $chart$$157_options$$118$$.styleDefaults.valueTooltipType ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($chart$$158$$, $seriesIndex$$51$$, $groupIndex$$24$$) {
  return D.$DvtChartStyleUtils$$.$getColor$($chart$$158$$, $seriesIndex$$51$$, $groupIndex$$24$$)
};
D.$DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($arTooltip_dataItem$$19_target$$94$$, $chart$$159$$, $seriesIndex$$52$$, $groupIndex$$25$$) {
  if(0 > $seriesIndex$$52$$ || 0 > $groupIndex$$25$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($arTooltip_dataItem$$19_target$$94$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$159$$, $seriesIndex$$52$$, $groupIndex$$25$$)) && $arTooltip_dataItem$$19_target$$94$$.shortDesc) {
    return $arTooltip_dataItem$$19_target$$94$$.shortDesc
  }
  $arTooltip_dataItem$$19_target$$94$$ = [];
  D.$DvtChartTooltipUtils$$.$_addSeriesStrings$($arTooltip_dataItem$$19_target$$94$$, $chart$$159$$, $seriesIndex$$52$$);
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip_dataItem$$19_target$$94$$, $chart$$159$$, $seriesIndex$$52$$, $groupIndex$$25$$);
  D.$DvtChartTooltipUtils$$.$_addValueStrings$($arTooltip_dataItem$$19_target$$94$$, $chart$$159$$, $seriesIndex$$52$$, $groupIndex$$25$$);
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip_dataItem$$19_target$$94$$)
};
D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($chart$$160$$, $otherValue$$2$$) {
  var $arTooltip$$1$$ = [], $options$$119_val$$74$$ = $chart$$160$$.$getOptions$(), $bundle_labelValue$$ = $chart$$160$$.$Bundle$;
  if("none" != $options$$119_val$$74$$.styleDefaults.seriesTooltipType) {
    var $otherStr$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle_labelValue$$, "LABEL_OTHER", D.$JSCompiler_alias_NULL$$);
    $arTooltip$$1$$.push($otherStr$$)
  }
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip$$1$$, $chart$$160$$, 0, 0);
  "none" != $options$$119_val$$74$$.styleDefaults.valueTooltipType && ($options$$119_val$$74$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$119_val$$74$$.valueFormats, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $otherValue$$2$$), $bundle_labelValue$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle_labelValue$$, "LABEL_VALUE", $options$$119_val$$74$$), $arTooltip$$1$$.push($bundle_labelValue$$));
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip$$1$$)
};
D.$DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($refObj$$8$$) {
  if($refObj$$8$$.shortDesc) {
    return $refObj$$8$$.shortDesc
  }
};
D.$DvtChartTooltipUtils$$.$_addSeriesStrings$ = function $$DvtChartTooltipUtils$$$$_addSeriesStrings$$($arTooltip$$2$$, $chart$$162_labelSeries$$, $seriesIndex$$53_seriesLabel$$2$$) {
  if("none" != $chart$$162_labelSeries$$.$getOptions$().styleDefaults.seriesTooltipType) {
    var $bundle$$1$$ = $chart$$162_labelSeries$$.$Bundle$;
    if($seriesIndex$$53_seriesLabel$$2$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$162_labelSeries$$, $seriesIndex$$53_seriesLabel$$2$$)) {
      "funnel" == $chart$$162_labelSeries$$.$getType$() ? $arTooltip$$2$$.push($seriesIndex$$53_seriesLabel$$2$$) : ($chart$$162_labelSeries$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$1$$, "LABEL_SERIES", $seriesIndex$$53_seriesLabel$$2$$), $arTooltip$$2$$.push($chart$$162_labelSeries$$))
    }
  }
};
D.$DvtChartTooltipUtils$$.$_addGroupStrings$ = function $$DvtChartTooltipUtils$$$$_addGroupStrings$$($arTooltip$$3$$, $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$, $bundle$$2_labelGroup_seriesIndex$$54$$, $groupIndex$$28$$) {
  var $options$$121$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$.$getOptions$(), $dataItem$$20$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$, $bundle$$2_labelGroup_seriesIndex$$54$$, $groupIndex$$28$$);
  "none" == $options$$121$$.styleDefaults.groupTooltipType || D.$DvtChartTypeUtils$$.$isPie$($JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$) || ($bundle$$2_labelGroup_seriesIndex$$54$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$.$Bundle$, $options$$121$$.timeAxisType && "disabled" != $options$$121$$.timeAxisType ? ($JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$ = 
  $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$.$xAxis$.$Info$, $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)($JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$, new window.Date($dataItem$$20$$.x + $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$.$_timeZoneOffset$), 
  D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$[1] != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$[0] + " " + $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$[1] : 
  $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$[0]) : $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$, $groupIndex$$28$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$ && 
  ($bundle$$2_labelGroup_seriesIndex$$54$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$2_labelGroup_seriesIndex$$54$$, "LABEL_GROUP", $JSCompiler_StaticMethods_formatLabel$self$$inline_5377_JSCompiler_temp$$303_chart$$163_groupLabel$$1_twoLabels$$inline_5379$$), $arTooltip$$3$$.push($bundle$$2_labelGroup_seriesIndex$$54$$)))
};
D.$DvtChartTooltipUtils$$.$_addValueStrings$ = function $$DvtChartTooltipUtils$$$$_addValueStrings$$($arTooltip$$4$$, $chart$$164_target$$95_type$$177_zValue$$, $labelY_seriesIndex$$55_y1Value$$, $groupIndex$$29_labelX_xValue$$3$$) {
  var $options$$122_valueFormats$$1$$ = $chart$$164_target$$95_type$$177_zValue$$.$getOptions$();
  if("none" != $options$$122_valueFormats$$1$$.styleDefaults.valueTooltipType) {
    var $bundle$$3_labelValue2_labelZ$$ = $chart$$164_target$$95_type$$177_zValue$$.$Bundle$, $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$164_target$$95_type$$177_zValue$$, $labelY_seriesIndex$$55_y1Value$$, $groupIndex$$29_labelX_xValue$$3$$), $options$$122_valueFormats$$1$$ = $options$$122_valueFormats$$1$$.valueFormats;
    if("scatter" == $chart$$164_target$$95_type$$177_zValue$$.$getType$() || "bubble" == $chart$$164_target$$95_type$$177_zValue$$.$getType$()) {
      $groupIndex$$29_labelX_xValue$$3$$ = $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$.x, $labelY_seriesIndex$$55_y1Value$$ = $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$.y, $groupIndex$$29_labelX_xValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$122_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_X$, $groupIndex$$29_labelX_xValue$$3$$), $labelY_seriesIndex$$55_y1Value$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$122_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_Y$, 
      $labelY_seriesIndex$$55_y1Value$$), $groupIndex$$29_labelX_xValue$$3$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_labelValue2_labelZ$$, "LABEL_X", $groupIndex$$29_labelX_xValue$$3$$), $labelY_seriesIndex$$55_y1Value$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_labelValue2_labelZ$$, "LABEL_Y", $labelY_seriesIndex$$55_y1Value$$), $arTooltip$$4$$.push($groupIndex$$29_labelX_xValue$$3$$), $arTooltip$$4$$.push($labelY_seriesIndex$$55_y1Value$$), "bubble" == 
      $chart$$164_target$$95_type$$177_zValue$$.$getType$() && ($chart$$164_target$$95_type$$177_zValue$$ = $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$.z, $chart$$164_target$$95_type$$177_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$122_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_Z$, $chart$$164_target$$95_type$$177_zValue$$), $bundle$$3_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_labelValue2_labelZ$$, "LABEL_Z", $chart$$164_target$$95_type$$177_zValue$$), 
      $arTooltip$$4$$.push($bundle$$3_labelValue2_labelZ$$))
    }else {
      if("pie" == $chart$$164_target$$95_type$$177_zValue$$.$getType$()) {
        $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$164_target$$95_type$$177_zValue$$, $labelY_seriesIndex$$55_y1Value$$, $groupIndex$$29_labelX_xValue$$3$$), $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$122_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$), $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_labelValue2_labelZ$$, 
        "LABEL_VALUE", $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$), $arTooltip$$4$$.push($dataItem$$21_labelValue$$1_val$$75_yValue$$3$$)
      }else {
        if("funnel" == $chart$$164_target$$95_type$$177_zValue$$.$getType$()) {
          if($dataItem$$21_labelValue$$1_val$$75_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$164_target$$95_type$$177_zValue$$, $labelY_seriesIndex$$55_y1Value$$, $groupIndex$$29_labelX_xValue$$3$$), $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$122_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$), $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_labelValue2_labelZ$$, 
          "LABEL_VALUE", $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$), $arTooltip$$4$$.push($dataItem$$21_labelValue$$1_val$$75_yValue$$3$$), $chart$$164_target$$95_type$$177_zValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$164_target$$95_type$$177_zValue$$, $labelY_seriesIndex$$55_y1Value$$)) {
            $chart$$164_target$$95_type$$177_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$122_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$, $chart$$164_target$$95_type$$177_zValue$$), $bundle$$3_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_labelValue2_labelZ$$, "LABEL_TARGET_VALUE", $chart$$164_target$$95_type$$177_zValue$$), $arTooltip$$4$$.push($bundle$$3_labelValue2_labelZ$$)
          }
        }else {
          $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$164_target$$95_type$$177_zValue$$, $labelY_seriesIndex$$55_y1Value$$, $groupIndex$$29_labelX_xValue$$3$$), $chart$$164_target$$95_type$$177_zValue$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$164_target$$95_type$$177_zValue$$, $labelY_seriesIndex$$55_y1Value$$) ? D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ : D.$DvtChartTooltipUtils$$.$_TYPE_Y$, $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$122_valueFormats$$1$$, 
          $chart$$164_target$$95_type$$177_zValue$$, $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$), $bundle$$3_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_labelValue2_labelZ$$, "LABEL_VALUE", $dataItem$$21_labelValue$$1_val$$75_yValue$$3$$), $arTooltip$$4$$.push($bundle$$3_labelValue2_labelZ$$)
        }
      }
    }
  }
};
D.$DvtChartTooltipUtils$$.$_convertLinesToString$ = function $$DvtChartTooltipUtils$$$$_convertLinesToString$$($arTooltip$$5$$) {
  for(var $ret$$56$$ = "", $i$$512$$ = 0;$i$$512$$ < $arTooltip$$5$$.length;$i$$512$$++) {
    0 < $ret$$56$$.length && ($ret$$56$$ += "\n"), $ret$$56$$ += $arTooltip$$5$$[$i$$512$$]
  }
  return $ret$$56$$
};
D.$DvtChartTooltipUtils$$.$_formatValue$ = function $$DvtChartTooltipUtils$$$$_formatValue$$($formatter_valueFormats$$2$$, $type$$178$$, $value$$88$$, $min$$9$$, $max$$9$$, $majorIncrement$$1$$) {
  var $scaling$$ = "auto", $autoPrecision$$ = "on", $converter$$1$$;
  if($formatter_valueFormats$$2$$) {
    for(var $i$$513$$ = 0;$i$$513$$ < $formatter_valueFormats$$2$$.length;$i$$513$$++) {
      if($formatter_valueFormats$$2$$[$i$$513$$].type == $type$$178$$) {
        $formatter_valueFormats$$2$$[$i$$513$$].scaling && ($scaling$$ = $formatter_valueFormats$$2$$[$i$$513$$].scaling);
        $formatter_valueFormats$$2$$[$i$$513$$].autoPrecision && ($autoPrecision$$ = $formatter_valueFormats$$2$$[$i$$513$$].autoPrecision);
        $formatter_valueFormats$$2$$[$i$$513$$].converter && ($converter$$1$$ = $formatter_valueFormats$$2$$[$i$$513$$].converter);
        break
      }
    }
  }
  $formatter_valueFormats$$2$$ = new D.$DvtLinearScaleAxisValueFormatter$$($min$$9$$ != D.$JSCompiler_alias_NULL$$ ? $min$$9$$ : $value$$88$$, $max$$9$$ != D.$JSCompiler_alias_NULL$$ ? $max$$9$$ : $value$$88$$, $majorIncrement$$1$$ != D.$JSCompiler_alias_NULL$$ ? $majorIncrement$$1$$ : 0, $scaling$$, $autoPrecision$$);
  return $converter$$1$$ && ($converter$$1$$.getAsString || $converter$$1$$.format) ? $formatter_valueFormats$$2$$.$format$($value$$88$$, $converter$$1$$) : $formatter_valueFormats$$2$$.$format$($value$$88$$)
};
D.$DvtChartTypeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTypeUtils$$, D.$DvtObj$$, "DvtChartTypeUtils");
D.$DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($chart$$165$$) {
  return $chart$$165$$.$getOptions$().__spark
};
D.$DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($chart$$166$$) {
  return"combo" == $chart$$166$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($chart$$167$$) {
  return!D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$167$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$167$$)
};
D.$DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($chart$$168$$) {
  return"horizontal" == $chart$$168$$.$getOptions$().orientation && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$168$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$168$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$168$$))
};
D.$DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($chart$$169$$) {
  return"polar" == $chart$$169$$.$getOptions$().coordinateSystem
};
D.$DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($chart$$170$$) {
  return"on" != $chart$$170$$.$getOptions$().stack || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$170$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$170$$)
};
D.$DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($chart$$171$$) {
  return"bar" == $chart$$171$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($chart$$172$$) {
  return"line" == $chart$$172$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($chart$$173$$) {
  return"area" == $chart$$173$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($chart$$174$$) {
  return"scatter" == $chart$$174$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($chart$$175$$) {
  return"bubble" == $chart$$175$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($chart$$176$$) {
  return"pie" == $chart$$176$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($chart$$177$$) {
  return"funnel" == $chart$$177$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($chart$$178$$) {
  return!D.$DvtChartTypeUtils$$.$hasAxes$($chart$$178$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$178$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$178$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($chart$$179_type$$179$$) {
  $chart$$179_type$$179$$ = $chart$$179_type$$179$$.$getType$();
  return"bar" == $chart$$179_type$$179$$ || "line" == $chart$$179_type$$179$$ || "area" == $chart$$179_type$$179$$ || "combo" == $chart$$179_type$$179$$
};
D.$DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($chart$$180_type$$180$$) {
  $chart$$180_type$$180$$ = $chart$$180_type$$180$$.$getType$();
  return"scatter" == $chart$$180_type$$180$$ || "bubble" == $chart$$180_type$$180$$
};
D.$DvtChartTypeUtils$$.$isTimeAxisSupported$ = function $$DvtChartTypeUtils$$$$isTimeAxisSupported$$($chart$$181$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$181$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$181$$)
};
D.$DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($chart$$182$$) {
  return!D.$DvtChartTypeUtils$$.$isPie$($chart$$182$$) && !D.$DvtChartTypeUtils$$.$isFunnel$($chart$$182$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$182$$)
};
D.$DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($chart$$183$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$183$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$183$$)
};
D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($chart$$184$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$184$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$184$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$184$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$184$$)
};
D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($chart$$185$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$185$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$185$$) && D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$185$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$185$$)
};
D.$DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($chart$$186$$) {
  return!("pie" == $chart$$186$$.$getType$() || "funnel" == $chart$$186$$.$getType$())
};
D.$DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($chart$$187$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$187$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $seriesCount$$17$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$187$$);
  if(0 == $seriesCount$$17$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$514$$ = 0;$i$$514$$ < $seriesCount$$17$$;$i$$514$$++) {
    if(!D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$187$$, $i$$514$$)) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($chart$$188$$, $type$$181$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$188$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$18$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$188$$), $i$$515$$ = 0;$i$$515$$ < $seriesCount$$18$$;$i$$515$$++) {
    if(!($type$$181$$ && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$188$$, $i$$515$$) != $type$$181$$) && D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$188$$, $i$$515$$)) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($chart$$189$$) {
  return D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$189$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($chart$$190$$) {
  if(D.$DvtChartTypeUtils$$.$isBar$($chart$$190$$)) {
    return D.$JSCompiler_alias_TRUE$$
  }
  if(D.$DvtChartTypeUtils$$.$isCombo$($chart$$190$$)) {
    for(var $seriesCount$$19$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$190$$), $seriesIndex$$56$$ = 0;$seriesIndex$$56$$ < $seriesCount$$19$$;$seriesIndex$$56$$++) {
      if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$190$$, $seriesIndex$$56$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$190$$, $seriesIndex$$56$$)) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($chart$$191$$) {
  window.options = $chart$$191$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$191$$) || "off" != window.options.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$191$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$191$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$191$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($chart$$192$$) {
  window.options = $chart$$192$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$192$$) || "off" != window.options.legend.rendered || "off" != window.options.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$192$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$192$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($chart$$193$$) {
  window.options = $chart$$193$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$193$$) || "off" != window.options.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$193$$, "x") || "off" != window.options.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$193$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($chart$$194$$) {
  window.options = $chart$$194$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$194$$) || "off" != window.options.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$194$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$194$$, "y") || "off" != window.options.plotArea.rendered ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartMarkerUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartMarkerUtils$$, D.$DvtObj$$, "DvtChartMarkerUtils");
D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$ = 5;
D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ = 0.125;
D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ = 0.2;
D.$DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($chart$$195$$, $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$, $height$$86_seriesCount$$20$$) {
  var $minMax_xAxisValueRange_xMinMax$$2$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$195$$, "z"), $minValue$$6$$ = $minMax_xAxisValueRange_xMinMax$$2$$.min, $maxValue$$7_valueRange$$ = $minMax_xAxisValueRange_xMinMax$$2$$.max, $axisHeight$$1_options$$124$$ = $chart$$195$$.$getOptions$(), $minMax_xAxisValueRange_xMinMax$$2$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$195$$, "x"), $xAxisMin_yAxisValueRange_yMinMax$$2$$ = $axisHeight$$1_options$$124$$.xAxis.min ? $axisHeight$$1_options$$124$$.xAxis.min : 
  window.Math.min(0, $minMax_xAxisValueRange_xMinMax$$2$$.min), $minMax_xAxisValueRange_xMinMax$$2$$ = ($axisHeight$$1_options$$124$$.xAxis.max ? $axisHeight$$1_options$$124$$.xAxis.max : window.Math.max(0, $minMax_xAxisValueRange_xMinMax$$2$$.max)) - $xAxisMin_yAxisValueRange_yMinMax$$2$$, $xAxisMin_yAxisValueRange_yMinMax$$2$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$195$$, "y"), $axisWidth_yAxisMin$$ = $axisHeight$$1_options$$124$$.yAxis.min ? $axisHeight$$1_options$$124$$.yAxis.min : 
  window.Math.min(0, $xAxisMin_yAxisValueRange_yMinMax$$2$$.min), $xAxisMin_yAxisValueRange_yMinMax$$2$$ = ($axisHeight$$1_options$$124$$.yAxis.max ? $axisHeight$$1_options$$124$$.yAxis.max : window.Math.max(0, $xAxisMin_yAxisValueRange_yMinMax$$2$$.max)) - $axisWidth_yAxisMin$$;
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$195$$) ? ($axisWidth_yAxisMin$$ = window.Infinity, $axisHeight$$1_options$$124$$ = $chart$$195$$.$getRadius$()) : ($axisWidth_yAxisMin$$ = (1 - $axisHeight$$1_options$$124$$.layout.axisMaxSize) * $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$, $axisHeight$$1_options$$124$$ = (1 - $axisHeight$$1_options$$124$$.layout.axisMaxSize) * $height$$86_seriesCount$$20$$);
  var $minArea$$ = window.Math.PI * window.Math.pow(D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$, 2);
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$ = D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ * window.Math.min($areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$, $height$$86_seriesCount$$20$$);
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$ = window.Math.PI * window.Math.pow($areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$, 2);
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$($chart$$195$$, $minArea$$, $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$, $minValue$$6$$, $maxValue$$7_valueRange$$);
  $minArea$$ = $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$.minArea;
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$ = $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$.maxArea;
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$($minArea$$, $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$, $minValue$$6$$, $maxValue$$7_valueRange$$);
  $minArea$$ = $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$.minArea;
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$ = $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$.maxArea;
  $maxValue$$7_valueRange$$ -= $minValue$$6$$;
  $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$ -= $minArea$$;
  $height$$86_seriesCount$$20$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$195$$);
  for(var $seriesIndex$$57$$ = 0;$seriesIndex$$57$$ < $height$$86_seriesCount$$20$$;$seriesIndex$$57$$++) {
    for(var $seriesItem$$16$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$195$$, $seriesIndex$$57$$), $numGroups$$1$$ = $seriesItem$$16$$.items ? $seriesItem$$16$$.items.length : 0, $j$$64$$ = 0;$j$$64$$ < $numGroups$$1$$;$j$$64$$++) {
      var $dataItem$$22$$ = $seriesItem$$16$$.items[$j$$64$$];
      $dataItem$$22$$ && $dataItem$$22$$.z && (1 === $height$$86_seriesCount$$20$$ && 1 === $numGroups$$1$$ ? ($dataItem$$22$$.markerSize = D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ * window.Math.min($axisWidth_yAxisMin$$, $axisHeight$$1_options$$124$$), $minMax_xAxisValueRange_xMinMax$$2$$ = 0 === $minMax_xAxisValueRange_xMinMax$$2$$ ? 100 : $minMax_xAxisValueRange_xMinMax$$2$$, $xAxisMin_yAxisValueRange_yMinMax$$2$$ = 0 === $xAxisMin_yAxisValueRange_yMinMax$$2$$ ? 100 : $xAxisMin_yAxisValueRange_yMinMax$$2$$) : 
      $dataItem$$22$$.markerSize = 2 * window.Math.sqrt(($minArea$$ + ($dataItem$$22$$.z - $minValue$$6$$) / $maxValue$$7_valueRange$$ * $areaRange_maxArea_maxRadius$$1_minMaxArea_width$$104$$) / window.Math.PI), $dataItem$$22$$._xAxisRadius = 0.5 * ($dataItem$$22$$.markerSize / $axisWidth_yAxisMin$$) * $minMax_xAxisValueRange_xMinMax$$2$$, $dataItem$$22$$._yAxisRadius = 0.5 * ($dataItem$$22$$.markerSize / $axisHeight$$1_options$$124$$) * $xAxisMin_yAxisValueRange_yMinMax$$2$$)
    }
  }
};
D.$DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($markers$$9$$) {
  $markers$$9$$.sort(D.$DvtChartMarkerUtils$$.$_compareSize$)
};
D.$DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($a$$52$$, $b$$43$$) {
  var $aSize$$ = $a$$52$$.$getSize$(), $bSize$$ = $b$$43$$.$getSize$();
  return $aSize$$ > $bSize$$ ? -1 : $aSize$$ < $bSize$$ ? 1 : 0
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForCount$$($avgRelSize_chart$$196_s2$$, $minArea$$1$$, $maxArea$$1$$, $minValue$$7_s1_t1$$, $maxValue$$8_t2$$) {
  for(var $bubbleCount$$ = 0, $sizeTotal$$ = 0, $seriesCount$$21$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($avgRelSize_chart$$196_s2$$), $seriesIndex$$58$$ = 0;$seriesIndex$$58$$ < $seriesCount$$21$$;$seriesIndex$$58$$++) {
    for(var $seriesItem$$17$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($avgRelSize_chart$$196_s2$$, $seriesIndex$$58$$), $numDataItems$$ = $seriesItem$$17$$.items.length, $j$$65$$ = 0;$j$$65$$ < $numDataItems$$;$j$$65$$++) {
      var $dataItem$$23$$ = $seriesItem$$17$$.items[$seriesIndex$$58$$];
      $dataItem$$23$$ && $dataItem$$23$$.z && ($bubbleCount$$++, $sizeTotal$$ += $dataItem$$23$$.z)
    }
  }
  $avgRelSize_chart$$196_s2$$ = ($sizeTotal$$ / $bubbleCount$$ - $minValue$$7_s1_t1$$) / ($maxValue$$8_t2$$ - $minValue$$7_s1_t1$$);
  $minValue$$7_s1_t1$$ = 15 + window.Math.floor(30 * (1 - $avgRelSize_chart$$196_s2$$));
  $maxValue$$8_t2$$ = 30 + window.Math.floor(150 * (1 - $avgRelSize_chart$$196_s2$$));
  $bubbleCount$$ >= $maxValue$$8_t2$$ ? $maxArea$$1$$ = $minArea$$1$$ + 0.15 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ >= $minValue$$7_s1_t1$$ && ($maxArea$$1$$ -= 0.85 / ($maxValue$$8_t2$$ - $minValue$$7_s1_t1$$) * ($bubbleCount$$ - $minValue$$7_s1_t1$$) * ($maxArea$$1$$ - $minArea$$1$$));
  $minValue$$7_s1_t1$$ = 5 + window.Math.floor(15 * (1 - $avgRelSize_chart$$196_s2$$));
  $avgRelSize_chart$$196_s2$$ = 30 + window.Math.floor(70 * (1 - $avgRelSize_chart$$196_s2$$));
  $bubbleCount$$ < $minValue$$7_s1_t1$$ ? $minArea$$1$$ += 0.005 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ < $avgRelSize_chart$$196_s2$$ && ($minArea$$1$$ += (0.005 - 0.005 / ($avgRelSize_chart$$196_s2$$ - $minValue$$7_s1_t1$$) * ($bubbleCount$$ - $minValue$$7_s1_t1$$)) * ($maxArea$$1$$ - $minArea$$1$$));
  return{minArea:$minArea$$1$$, maxArea:$maxArea$$1$$}
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForDataRange$$($minArea$$2$$, $maxArea$$2$$, $buffer$$10_minValue$$8$$, $maxValue$$9$$) {
  if(0 != $maxValue$$9$$ - $buffer$$10_minValue$$8$$) {
    var $bubbleRatio$$ = $maxArea$$2$$ / $minArea$$2$$, $dataRatio$$ = $bubbleRatio$$;
    0 < $maxValue$$9$$ && 0 < $buffer$$10_minValue$$8$$ ? $dataRatio$$ = $maxValue$$9$$ / $buffer$$10_minValue$$8$$ : 0 > $buffer$$10_minValue$$8$$ && 0 > $maxValue$$9$$ && ($dataRatio$$ = $buffer$$10_minValue$$8$$ / $maxValue$$9$$);
    $dataRatio$$ < $bubbleRatio$$ && ($buffer$$10_minValue$$8$$ = $maxArea$$2$$ / $dataRatio$$ - $minArea$$2$$, 0 < $buffer$$10_minValue$$8$$ && ($minArea$$2$$ += $buffer$$10_minValue$$8$$))
  }else {
    $minArea$$2$$ = $maxArea$$2$$
  }
  return{minArea:$minArea$$2$$, maxArea:$maxArea$$2$$}
};
D.$DvtPieChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChartUtils$$, D.$DvtObj$$, "DvtPieChartUtils");
D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
D.$DvtPieChartUtils$$.$getSliceId$ = function $$DvtPieChartUtils$$$$getSliceId$$($chart$$87$$, $seriesIndex$$28$$) {
  var $dataItem$$10_id$$198$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$87$$, $seriesIndex$$28$$, 0), $dataItem$$10_id$$198$$ = $dataItem$$10_id$$198$$ ? $dataItem$$10_id$$198$$.id : D.$JSCompiler_alias_NULL$$, $series$$15$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$87$$, $seriesIndex$$28$$), $group$$10$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$87$$, 0);
  return new D.$DvtChartDataItem$$($dataItem$$10_id$$198$$, $series$$15$$, $group$$10$$)
};
D.$DvtPieChartUtils$$.$getOtherSliceId$ = function $$DvtPieChartUtils$$$$getOtherSliceId$$($chart$$88_group$$11$$) {
  $chart$$88_group$$11$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$88_group$$11$$, 0);
  return new D.$DvtChartDataItem$$(D.$JSCompiler_alias_NULL$$, D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, $chart$$88_group$$11$$)
};
D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$ = function $$DvtPieChartUtils$$$$getRenderedSeriesIndices$$($chart$$89$$) {
  return D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$89$$).$rendered$
};
D.$DvtPieChartUtils$$.$hasOtherSeries$ = function $$DvtPieChartUtils$$$$hasOtherSeries$$($chart$$90$$) {
  return 0 < D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$90$$).$other$.length
};
D.$DvtPieChartUtils$$.$getOtherValue$ = function $$DvtPieChartUtils$$$$getOtherValue$$($chart$$91$$) {
  for(var $otherSeries$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$91$$).$other$, $otherValue$$1$$ = 0, $i$$499$$ = 0;$i$$499$$ < $otherSeries$$.length;$i$$499$$++) {
    var $seriesIndex$$29_value$$85$$ = $otherSeries$$[$i$$499$$];
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$91$$, $seriesIndex$$29_value$$85$$) && ($seriesIndex$$29_value$$85$$ = D.$DvtChartDataUtils$$.getValue($chart$$91$$, $seriesIndex$$29_value$$85$$, 0), 0 < $seriesIndex$$29_value$$85$$ && ($otherValue$$1$$ += $seriesIndex$$29_value$$85$$))
  }
  return $otherValue$$1$$
};
D.$DvtPieChartUtils$$.$getOtherSliceIds$ = function $$DvtPieChartUtils$$$$getOtherSliceIds$$($chart$$92$$) {
  for(var $otherSeries$$1$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$92$$).$other$, $seriesIds$$ = [], $i$$500$$ = 0;$i$$500$$ < $otherSeries$$1$$.length;$i$$500$$++) {
    $seriesIds$$.push(D.$DvtPieChartUtils$$.$getSliceId$($chart$$92$$, $otherSeries$$1$$[$i$$500$$]))
  }
  return $seriesIds$$
};
D.$DvtPieChartUtils$$.$getOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$getOtherSliceVisibility$$($chart$$93$$) {
  for(var $otherSeries$$2$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$93$$).$other$, $i$$501$$ = 0;$i$$501$$ < $otherSeries$$2$$.length;$i$$501$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$93$$, $otherSeries$$2$$[$i$$501$$])) {
      return"visible"
    }
  }
  return"hidden"
};
D.$DvtPieChartUtils$$.$setOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$setOtherSliceVisibility$$($chart$$94$$, $visibility$$2$$) {
  for(var $otherSeries$$3$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$94$$).$other$, $i$$502$$ = 0;$i$$502$$ < $otherSeries$$3$$.length;$i$$502$$++) {
    D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$94$$, $otherSeries$$3$$[$i$$502$$]).visibility = $visibility$$2$$
  }
};
D.$DvtPieChartUtils$$.$isOtherSliceSelected$ = function $$DvtPieChartUtils$$$$isOtherSliceSelected$$($chart$$95$$, $selected$$16$$) {
  for(var $otherIds$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$95$$), $j$$60$$ = 0;$j$$60$$ < $otherIds$$.length;$j$$60$$++) {
    for(var $sliceId$$1$$ = $otherIds$$[$j$$60$$], $sliceSelected$$ = D.$JSCompiler_alias_FALSE$$, $i$$503$$ = 0;$i$$503$$ < $selected$$16$$.length;$i$$503$$++) {
      if($selected$$16$$[$i$$503$$].id && $sliceId$$1$$.getId() === $selected$$16$$[$i$$503$$].id || $sliceId$$1$$.$getSeries$() === $selected$$16$$[$i$$503$$].series && $sliceId$$1$$.$getGroup$() === $selected$$16$$[$i$$503$$].group) {
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
D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$ = function $$DvtPieChartUtils$$$$_getSeriesIndicesArrays$$($chart$$96$$) {
  for(var $renderedSeries$$ = [], $otherSeries$$4$$ = [], $seriesCount$$15$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$96$$), $options$$96$$ = $chart$$96$$.$getOptions$(), $otherThreshold$$ = $options$$96$$.otherThreshold * D.$DvtPieChartUtils$$.$getTotalValue$($chart$$96$$), $seriesIndex$$33$$ = 0;$seriesIndex$$33$$ < $seriesCount$$15$$;$seriesIndex$$33$$++) {
    var $value$$86$$ = D.$DvtChartDataUtils$$.getValue($chart$$96$$, $seriesIndex$$33$$, 0);
    0 < $otherThreshold$$ && $value$$86$$ < $otherThreshold$$ ? $otherSeries$$4$$.push($seriesIndex$$33$$) : $renderedSeries$$.push($seriesIndex$$33$$)
  }
  "on" == $options$$96$$.sorting && $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$4$$) {
    return D.$DvtChartDataUtils$$.getValue($chart$$96$$, $otherSeries$$4$$, 0) - D.$DvtChartDataUtils$$.getValue($chart$$96$$, $renderedSeries$$, 0)
  });
  return{$rendered$:$renderedSeries$$, $other$:$otherSeries$$4$$}
};
D.$DvtPieChartUtils$$.$getTotalValue$ = function $$DvtPieChartUtils$$$$getTotalValue$$($chart$$97$$) {
  for(var $seriesCount$$16$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$97$$), $totalValue$$1$$ = 0, $seriesIndex$$34$$ = 0;$seriesIndex$$34$$ < $seriesCount$$16$$;$seriesIndex$$34$$++) {
    var $value$$87$$ = D.$DvtChartDataUtils$$.getValue($chart$$97$$, $seriesIndex$$34$$, 0);
    0 < $value$$87$$ && ($totalValue$$1$$ += $value$$87$$)
  }
  return $totalValue$$1$$
};
D.$DvtPieChartUtils$$.$getSliceExplode$ = function $$DvtPieChartUtils$$$$getSliceExplode$$($chart$$98$$, $seriesIndex$$35$$) {
  var $seriesItem$$3$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$98$$, $seriesIndex$$35$$);
  return $seriesItem$$3$$ && $seriesItem$$3$$.pieSliceExplode ? $seriesItem$$3$$.pieSliceExplode : 0
};
D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtPieChartUtils$$$$getOtherSliceShowPopupBehaviors$$($chart$$99$$) {
  var $firstDataItemSeriesIndex_otherSliceIds_stampId$$2$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$99$$);
  if($firstDataItemSeriesIndex_otherSliceIds_stampId$$2$$ && 1 <= $firstDataItemSeriesIndex_otherSliceIds_stampId$$2$$.length) {
    return $firstDataItemSeriesIndex_otherSliceIds_stampId$$2$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$99$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$2$$[0].$getSeries$()), $firstDataItemSeriesIndex_otherSliceIds_stampId$$2$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$99$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$2$$, 0)._id, $chart$$99$$.$getShowPopupBehaviors$($firstDataItemSeriesIndex_otherSliceIds_stampId$$2$$)
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
D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtPieRenderUtils$$$$reflectAngleOverYAxis$$($angle$$33_radian$$1$$, $cx$$35$$, $cy$$36$$, $rx$$28$$, $ry$$28$$) {
  $angle$$33_radian$$1$$ = D.$DvtMath$$.$degreesToRads$(360 - $angle$$33_radian$$1$$);
  return{x:$cx$$35$$ + window.Math.cos($angle$$33_radian$$1$$) * $rx$$28$$, y:$cy$$36$$ + window.Math.sin($angle$$33_radian$$1$$) * $ry$$28$$}
};
D.$DvtPieRenderUtils$$.$getGradientColors$ = function $$DvtPieRenderUtils$$$$getGradientColors$$($baseColor_c3$$, $arColors$$20_style$$85$$, $c$$30_skin$$14$$) {
  if($c$$30_skin$$14$$ && "skyros" != $c$$30_skin$$14$$) {
    if($arColors$$20_style$$85$$ == D.$DvtPieRenderUtils$$.$TWOD$ || $arColors$$20_style$$85$$ == D.$DvtPieRenderUtils$$.$THREED$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.09, 0.04)]
    }
    if($arColors$$20_style$$85$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, 0, -0.14)]
    }
    if($arColors$$20_style$$85$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.1, 0.06), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05)]
    }
  }else {
    if($arColors$$20_style$$85$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
      return $arColors$$20_style$$85$$ = [], $arColors$$20_style$$85$$[0] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.1)), $arColors$$20_style$$85$$[1] = $arColors$$20_style$$85$$[0], $arColors$$20_style$$85$$[2] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.9)), $arColors$$20_style$$85$$
    }
    if($arColors$$20_style$$85$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
      return["#FFFFFF", "#000000", "#000000"]
    }
    $c$$30_skin$$14$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.88));
    var $c1$$3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.05)), $c2$$3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.15));
    $baseColor_c3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.35));
    if($arColors$$20_style$$85$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[$c$$30_skin$$14$$, $c2$$3$$, $baseColor_c3$$, $c$$30_skin$$14$$]
    }
    if("SIDE" == $arColors$$20_style$$85$$) {
      return[$c$$30_skin$$14$$, $baseColor_c3$$]
    }
    if("3D" == $arColors$$20_style$$85$$) {
      return[$baseColor_c3$$, $c2$$3$$, $c$$30_skin$$14$$, $c1$$3$$, $baseColor_c3$$]
    }
  }
};
D.$DvtPieRenderUtils$$.$getGradientAlphas$ = function $$DvtPieRenderUtils$$$$getGradientAlphas$$($baseAlpha$$, $style$$86$$) {
  var $alpha$$38$$ = $baseAlpha$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($baseAlpha$$) || 0 == $baseAlpha$$ ? 1 : $baseAlpha$$;
  if($style$$86$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[$alpha$$38$$, $alpha$$38$$, $alpha$$38$$]
  }
  if($style$$86$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[$alpha$$38$$ / 1.59375, $alpha$$38$$ / 5.3125, $alpha$$38$$ / 2.65625]
  }
  if($style$$86$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[$alpha$$38$$, $alpha$$38$$, $alpha$$38$$, $alpha$$38$$, $alpha$$38$$]
  }
  if($style$$86$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[$alpha$$38$$, $alpha$$38$$, $alpha$$38$$, $alpha$$38$$]
  }
  if($style$$86$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[$alpha$$38$$, $alpha$$38$$]
  }
};
D.$DvtPieRenderUtils$$.$getGradientRatios$ = function $$DvtPieRenderUtils$$$$getGradientRatios$$($style$$87$$, $skin$$15$$) {
  if($skin$$15$$ && "skyros" != $skin$$15$$) {
    return[0, 1]
  }
  if($style$$87$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[0.2, 0.5, 1]
  }
  if($style$$87$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[0, 0.5, 1]
  }
  if($style$$87$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[0, 0.29, 0.55, 0.84, 1]
  }
  if($style$$87$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[0, 0.43, 0.91, 1]
  }
  if($style$$87$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[0, 1]
  }
};
D.$DvtPieRenderUtils$$.$createTopSurface$ = function $$DvtPieRenderUtils$$$$createTopSurface$$($slice$$11$$, $fill$$48$$) {
  var $edge_pieChart$$4$$ = $slice$$11$$.$_pieChart$, $context$$550_shapes$$10_wedge$$ = $edge_pieChart$$4$$.$_context$, $ariaLabel$$2_pieCenter$$ = $edge_pieChart$$4$$.$getCenter$(), $sliceClosureType$$ = "PIE";
  360 == $slice$$11$$.$getAngleExtent$() && ($sliceClosureType$$ = "OPEN");
  $context$$550_shapes$$10_wedge$$ = new D.$DvtGraphSelectableArc$$($context$$550_shapes$$10_wedge$$, $ariaLabel$$2_pieCenter$$.x, $ariaLabel$$2_pieCenter$$.y, $slice$$11$$.$_radiusX$, $slice$$11$$.$_radiusY$, $slice$$11$$.$getAngleStart$(), $slice$$11$$.$getAngleExtent$(), $sliceClosureType$$);
  $context$$550_shapes$$10_wedge$$.$setDataColor$($slice$$11$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($edge_pieChart$$4$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($edge_pieChart$$4$$.$chart$));
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$550_shapes$$10_wedge$$, $slice$$11$$.$_explodeOffsetX$, $slice$$11$$.$_explodeOffsetY$);
  $context$$550_shapes$$10_wedge$$.$setFill$($fill$$48$$);
  $slice$$11$$.$getStrokeColor$() && $context$$550_shapes$$10_wedge$$.$setSolidStroke$($slice$$11$$.$getStrokeColor$());
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($context$$550_shapes$$10_wedge$$, "img");
  $ariaLabel$$2_pieCenter$$ = $slice$$11$$.$getTooltip$();
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($context$$550_shapes$$10_wedge$$, "label", $ariaLabel$$2_pieCenter$$);
  $context$$550_shapes$$10_wedge$$ = [$context$$550_shapes$$10_wedge$$];
  if(!$slice$$11$$.$getStrokeColor$() && "skyros" == $edge_pieChart$$4$$.$getSkin$() && (0,D.$JSCompiler_StaticMethods_is3D$$)($edge_pieChart$$4$$) && 0 < $edge_pieChart$$4$$.$getDepth$() && "gradient" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($edge_pieChart$$4$$.$chart$) && (180 <= $slice$$11$$.$getAngleStart$() || 180 <= $slice$$11$$.$getAngleStart$() + $slice$$11$$.$getAngleExtent$() || 360 == $slice$$11$$.$getAngleExtent$())) {
    $edge_pieChart$$4$$ = D.$DvtPieRenderUtils$$.$_createGradientPieBorder$($slice$$11$$, $fill$$48$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($edge_pieChart$$4$$, $slice$$11$$.$_explodeOffsetX$, $slice$$11$$.$_explodeOffsetY$), $context$$550_shapes$$10_wedge$$.push($edge_pieChart$$4$$)
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$11$$, $context$$550_shapes$$10_wedge$$);
  return $context$$550_shapes$$10_wedge$$
};
D.$DvtPieRenderUtils$$.$associate$ = function $$DvtPieRenderUtils$$$$associate$$($slice$$12$$, $displayables$$17$$) {
  if($displayables$$17$$) {
    for(var $i$$505$$ = 0;$i$$505$$ < $displayables$$17$$.length;$i$$505$$++) {
      $slice$$12$$.$_pieChart$.$chart$.$getEventManager$().$associate$($displayables$$17$$[$i$$505$$], $slice$$12$$)
    }
  }
};
D.$DvtPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtPieRenderUtils$$$$_createGradientPieBorder$$($slice$$13$$, $topFill$$1$$) {
  var $angExtent_arRatios$$3_diff$$11_style$$88$$ = D.$DvtPieRenderUtils$$.$BORDER$, $arColors$$21_gradBorder$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$3_diff$$11_style$$88$$), $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$3_diff$$11_style$$88$$), $angExtent_arRatios$$3_diff$$11_style$$88$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($angExtent_arRatios$$3_diff$$11_style$$88$$), 
  $arBounds$$13_pieChart$$5$$ = $topFill$$1$$.$getBounds$();
  window.grAngle = 120;
  $arColors$$21_gradBorder$$ = new D.$DvtLinearGradientStroke$$(window.grAngle, $arColors$$21_gradBorder$$, $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$3_diff$$11_style$$88$$, $arBounds$$13_pieChart$$5$$);
  $arColors$$21_gradBorder$$.$setWidth$(1);
  $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$ = $slice$$13$$.$getAngleStart$();
  $angExtent_arRatios$$3_diff$$11_style$$88$$ = 180 > $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$ ? 180 - $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$ : 0;
  $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$ = 0 < $angExtent_arRatios$$3_diff$$11_style$$88$$ ? 180 : $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$;
  $angExtent_arRatios$$3_diff$$11_style$$88$$ = $slice$$13$$.$getAngleExtent$() - $angExtent_arRatios$$3_diff$$11_style$$88$$;
  360 < $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$ + $angExtent_arRatios$$3_diff$$11_style$$88$$ && ($angExtent_arRatios$$3_diff$$11_style$$88$$ = 360 - $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$);
  var $arBounds$$13_pieChart$$5$$ = $slice$$13$$.$_pieChart$, $pieCenter$$1$$ = $arBounds$$13_pieChart$$5$$.$getCenter$(), $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$ = new D.$DvtArc$$($arBounds$$13_pieChart$$5$$.$_context$, $pieCenter$$1$$.x, $pieCenter$$1$$.y, $arBounds$$13_pieChart$$5$$.$_radiusX$, $arBounds$$13_pieChart$$5$$.$_radiusY$, $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$3_diff$$11_style$$88$$, "OPEN");
  $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$.$setStroke$($arColors$$21_gradBorder$$);
  return $angStart_arAlphas$$21_edge$$1_sliceAngleStart$$
};
D.$DvtPieRenderUtils$$.$createLateralSurface$ = function $$DvtPieRenderUtils$$$$createLateralSurface$$($slice$$14$$, $pathType$$, $fill$$49$$) {
  if(0 == $slice$$14$$.$getAngleExtent$()) {
    return[]
  }
  var $shapes$$11$$ = [];
  if(0 < D.$DvtColorUtils$$.$getAlpha$($slice$$14$$.$getFillColor$())) {
    if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
      $shapes$$11$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$14$$, $pathType$$, D.$JSCompiler_alias_NULL$$, $fill$$49$$))
    }else {
      if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_CRUST$) {
        for(var $pathCommands$$1$$ = D.$DvtPieRenderUtils$$.$_createCrustPathCommands$($slice$$14$$), $len$$44$$ = $pathCommands$$1$$.length, $i$$506$$ = 0;$i$$506$$ < $len$$44$$;$i$$506$$++) {
          $shapes$$11$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$14$$, $pathType$$, $pathCommands$$1$$[$i$$506$$], $fill$$49$$))
        }
      }
    }
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$14$$, $shapes$$11$$);
  return $shapes$$11$$
};
D.$DvtPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtPieRenderUtils$$$$generateLateralGradientFill$$($slice$$15$$, $objType$$1$$) {
  var $pieChart$$6$$ = $slice$$15$$.$_pieChart$, $skin$$16$$ = $pieChart$$6$$.$getSkin$(), $yOffset$$7$$ = $objType$$1$$ == D.$DvtPieRenderUtils$$.$CRUST$ ? $pieChart$$6$$.$getDepth$() : 0, $angle$$34$$ = "skyros" == $skin$$16$$ ? 0 : 270, $arColors$$22$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($slice$$15$$.$getFillColor$()), $objType$$1$$, $skin$$16$$), $arAlphas$$22$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($slice$$15$$.$getFillColor$()), 
  $objType$$1$$), $arRatios$$4$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($objType$$1$$, $skin$$16$$), $arBounds$$14$$ = D.$JSCompiler_alias_NULL$$;
  "skyros" == $skin$$16$$ && ($arBounds$$14$$ = [window.Math.floor($pieChart$$6$$.$getCenter$().x - $pieChart$$6$$.$_radiusX$), window.Math.floor($pieChart$$6$$.$getCenter$().y - $pieChart$$6$$.$_radiusY$) + $yOffset$$7$$, window.Math.ceil(2 * $pieChart$$6$$.$_radiusX$), window.Math.ceil(2 * $pieChart$$6$$.$_radiusY$)]);
  return new D.$DvtLinearGradientFill$$($angle$$34$$, $arColors$$22$$, $arAlphas$$22$$, $arRatios$$4$$, $arBounds$$14$$)
};
D.$DvtPieRenderUtils$$.$_generateLateralShape$ = function $$DvtPieRenderUtils$$$$_generateLateralShape$$($slice$$16$$, $pathType$$1_pointArray_pt$$8$$, $pathCommand_points$$43_xCenter$$, $fill$$50$$) {
  var $pie$$ = $slice$$16$$.$_pieChart$, $context$$551_path$$45_polygon$$3$$ = $pie$$.$_context$;
  if($pathType$$1_pointArray_pt$$8$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$1_pointArray_pt$$8$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
    var $angle$$35$$ = $slice$$16$$.$getAngleStart$(), $arc$$4$$ = $slice$$16$$.$getAngleExtent$();
    $pathCommand_points$$43_xCenter$$ = $pie$$.$getCenter$().x;
    var $i$$507_yCenter$$ = $pie$$.$getCenter$().y, $xRadius$$ = $slice$$16$$.$_radiusX$, $yRadius$$ = $slice$$16$$.$_radiusY$, $depth$$9$$ = $pie$$.$getDepth$();
    $pathType$$1_pointArray_pt$$8$$ = $pathType$$1_pointArray_pt$$8$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ ? D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$35$$ + $arc$$4$$, $pathCommand_points$$43_xCenter$$, $i$$507_yCenter$$, $xRadius$$, $yRadius$$) : D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$35$$, $pathCommand_points$$43_xCenter$$, $i$$507_yCenter$$, $xRadius$$, $yRadius$$);
    $pathType$$1_pointArray_pt$$8$$ = D.$DvtPieRenderUtils$$.$_generateInnerPoints$($pathCommand_points$$43_xCenter$$, $i$$507_yCenter$$, $pathType$$1_pointArray_pt$$8$$.x, $pathType$$1_pointArray_pt$$8$$.y, $depth$$9$$);
    $pathCommand_points$$43_xCenter$$ = [];
    for($i$$507_yCenter$$ = 0;$i$$507_yCenter$$ < $pathType$$1_pointArray_pt$$8$$.length;$i$$507_yCenter$$++) {
      $pathCommand_points$$43_xCenter$$.push($pathType$$1_pointArray_pt$$8$$[$i$$507_yCenter$$].x, $pathType$$1_pointArray_pt$$8$$[$i$$507_yCenter$$].y)
    }
    $context$$551_path$$45_polygon$$3$$ = new D.$DvtGraphSelectablePolygon$$($context$$551_path$$45_polygon$$3$$, $pathCommand_points$$43_xCenter$$);
    $context$$551_path$$45_polygon$$3$$.$setDataColor$($slice$$16$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$.$chart$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$551_path$$45_polygon$$3$$, $slice$$16$$.$_explodeOffsetX$, $slice$$16$$.$_explodeOffsetY$);
    $context$$551_path$$45_polygon$$3$$.$setFill$($fill$$50$$);
    $slice$$16$$.$getStrokeColor$() && $context$$551_path$$45_polygon$$3$$.$setSolidStroke$($slice$$16$$.$getStrokeColor$());
    return $context$$551_path$$45_polygon$$3$$
  }
  return $pathCommand_points$$43_xCenter$$ ? ($context$$551_path$$45_polygon$$3$$ = new D.$DvtGraphSelectablePath$$($context$$551_path$$45_polygon$$3$$, D.$JSCompiler_alias_NULL$$), $context$$551_path$$45_polygon$$3$$.$setDataColor$($slice$$16$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$.$chart$)), $context$$551_path$$45_polygon$$3$$.$setCmds$($pathCommand_points$$43_xCenter$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$551_path$$45_polygon$$3$$, 
  $slice$$16$$.$_explodeOffsetX$, $slice$$16$$.$_explodeOffsetY$), $context$$551_path$$45_polygon$$3$$.$setFill$($fill$$50$$), $slice$$16$$.$getStrokeColor$() && $context$$551_path$$45_polygon$$3$$.$setSolidStroke$($slice$$16$$.$getStrokeColor$()), $context$$551_path$$45_polygon$$3$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtPieRenderUtils$$$$_createCrustPathCommands$$($slice$$17_yRadius$$1$$) {
  var $angle$$36$$ = $slice$$17_yRadius$$1$$.$getAngleStart$(), $arc$$5$$ = $slice$$17_yRadius$$1$$.$getAngleExtent$(), $angleEnd$$ = $angle$$36$$ + $arc$$5$$, $depth$$10_pie$$1$$ = $slice$$17_yRadius$$1$$.$_pieChart$, $xCenter$$1$$ = $depth$$10_pie$$1$$.$getCenter$().x, $yCenter$$1$$ = $depth$$10_pie$$1$$.$getCenter$().y, $xRadius$$1$$ = $slice$$17_yRadius$$1$$.$_radiusX$;
  $slice$$17_yRadius$$1$$ = $slice$$17_yRadius$$1$$.$_radiusY$;
  var $depth$$10_pie$$1$$ = $depth$$10_pie$$1$$.$getDepth$(), $arOuterPath$$ = [];
  180 > $angle$$36$$ && 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$10_pie$$1$$, $angle$$36$$, 180 - $angle$$36$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$10_pie$$1$$, 360, $angleEnd$$ - 360)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, 
  $slice$$17_yRadius$$1$$, $depth$$10_pie$$1$$, 180, 180))) : 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$10_pie$$1$$, $angle$$36$$, 360 - $angle$$36$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$10_pie$$1$$, 360, $angleEnd$$ - 360))) : 180 > $angle$$36$$ && 180 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, 
  $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$10_pie$$1$$, $angle$$36$$, 180 - $angle$$36$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$10_pie$$1$$, 180, $angleEnd$$ - 180))) : $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$10_pie$$1$$, $angle$$36$$, $arc$$5$$));
  return $arOuterPath$$
};
D.$DvtPieRenderUtils$$.$_makeOuterPath$ = function $$DvtPieRenderUtils$$$$_makeOuterPath$$($cx$$36_endPointTopX$$, $cy$$37_endPointTopY$$, $rx$$29$$, $ry$$29$$, $depth$$11$$, $startAngle$$9_startPointTop$$, $angleExtent$$7_angleExtentRads$$) {
  $angleExtent$$7_angleExtentRads$$ = D.$DvtMath$$.$degreesToRads$($angleExtent$$7_angleExtentRads$$);
  var $endAngleRads_pathCommands$$2$$ = -(D.$DvtMath$$.$degreesToRads$($startAngle$$9_startPointTop$$) + $angleExtent$$7_angleExtentRads$$);
  $cy$$37_endPointTopY$$ -= 1;
  $startAngle$$9_startPointTop$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($startAngle$$9_startPointTop$$, $cx$$36_endPointTopX$$, $cy$$37_endPointTopY$$, $rx$$29$$, $ry$$29$$);
  $cx$$36_endPointTopX$$ += window.Math.cos($endAngleRads_pathCommands$$2$$) * $rx$$29$$;
  $cy$$37_endPointTopY$$ += window.Math.sin($endAngleRads_pathCommands$$2$$) * $ry$$29$$;
  $endAngleRads_pathCommands$$2$$ = window.DvtPathUtils.moveTo($startAngle$$9_startPointTop$$.x, $startAngle$$9_startPointTop$$.y);
  $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.arcTo($rx$$29$$, $ry$$29$$, $angleExtent$$7_angleExtentRads$$, 0, $cx$$36_endPointTopX$$, $cy$$37_endPointTopY$$);
  $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.lineTo($cx$$36_endPointTopX$$, $cy$$37_endPointTopY$$ + $depth$$11$$);
  $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.arcTo($rx$$29$$, $ry$$29$$, $angleExtent$$7_angleExtentRads$$, 1, $startAngle$$9_startPointTop$$.x, $startAngle$$9_startPointTop$$.y + $depth$$11$$);
  return $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.lineTo($startAngle$$9_startPointTop$$.x, $startAngle$$9_startPointTop$$.y)
};
D.$DvtPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtPieRenderUtils$$$$_generateInnerPoints$$($cx$$37$$, $cy$$38$$, $xpos$$, $ypos$$, $tilt$$1$$) {
  var $pointArray$$1$$ = [];
  $pointArray$$1$$.push({x:$cx$$37$$, y:$cy$$38$$});
  $pointArray$$1$$.push({x:$xpos$$, y:$ypos$$});
  $pointArray$$1$$.push({x:$xpos$$, y:$ypos$$ + $tilt$$1$$});
  $pointArray$$1$$.push({x:$cx$$37$$, y:$cy$$38$$ + $tilt$$1$$});
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
D.$JSCompiler_StaticMethods_boundY$$ = function $$JSCompiler_StaticMethods_boundY$$$($JSCompiler_StaticMethods_boundY$self$$, $y$$228$$) {
  $y$$228$$ = window.Math.max($y$$228$$, $JSCompiler_StaticMethods_boundY$self$$.$_minY$);
  return $y$$228$$ = window.Math.min($y$$228$$, $JSCompiler_StaticMethods_boundY$self$$.$_maxY$)
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
D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$layoutLabelsAndFeelers$$($pie$$2$$) {
  var $labelPosition$$2$$ = $pie$$2$$.$getLabelPosition$();
  "none" != $labelPosition$$2$$ && ("inside" == $labelPosition$$2$$ ? D.$DvtPieLabelUtils$$.$_layoutInsideLabels$($pie$$2$$) : D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($pie$$2$$))
};
D.$DvtPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtPieLabelUtils$$$$_layoutInsideLabels$$($pie$$3$$) {
  if($pie$$3$$ != D.$JSCompiler_alias_NULL$$) {
    var $slices$$5$$ = $pie$$3$$.$_slices$, $n$$28$$ = $slices$$5$$.length;
    if(0 < $n$$28$$) {
      for(window.i = 0;window.i < $n$$28$$;window.i++) {
        var $slice$$18$$ = $slices$$5$$[window.i], $estimatedDims$$2_midAngle_midPt$$1$$;
        $estimatedDims$$2_midAngle_midPt$$1$$ = $slice$$18$$.$getAngleStart$() + $slice$$18$$.$getAngleExtent$() / 2;
        var $center$$11_x1$$32$$ = $pie$$3$$.$getCenter$(), $posX$$3_usableSpace$$ = 0, $posY$$3_stage$$18_y2$$22$$ = 0, $sliceLabel$$1$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$18$$, D.$JSCompiler_alias_TRUE$$);
        1 == $n$$28$$ ? ($posX$$3_usableSpace$$ = $center$$11_x1$$32$$.x, $posY$$3_stage$$18_y2$$22$$ = $center$$11_x1$$32$$.y) : ($estimatedDims$$2_midAngle_midPt$$1$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($estimatedDims$$2_midAngle_midPt$$1$$, $center$$11_x1$$32$$.x, $center$$11_x1$$32$$.y, 0.66 * $pie$$3$$.$_radiusX$, 0.66 * $pie$$3$$.$_radiusY$), $posX$$3_usableSpace$$ = $estimatedDims$$2_midAngle_midPt$$1$$.x, $posY$$3_stage$$18_y2$$22$$ = $estimatedDims$$2_midAngle_midPt$$1$$.y);
        $sliceLabel$$1$$.$setX$($posX$$3_usableSpace$$);
        $sliceLabel$$1$$.$setY$($posY$$3_stage$$18_y2$$22$$);
        $sliceLabel$$1$$.$alignMiddle$();
        $sliceLabel$$1$$.$alignCenter$();
        $estimatedDims$$2_midAngle_midPt$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($sliceLabel$$1$$);
        for(var $x2$$29$$ = $center$$11_x1$$32$$ = $posX$$3_usableSpace$$, $y1$$25$$ = $posY$$3_stage$$18_y2$$22$$ - $estimatedDims$$2_midAngle_midPt$$1$$.$h$ / 2, $posY$$3_stage$$18_y2$$22$$ = $posY$$3_stage$$18_y2$$22$$ + $estimatedDims$$2_midAngle_midPt$$1$$.$h$ / 2;$slice$$18$$.contains($center$$11_x1$$32$$, $y1$$25$$) && $slice$$18$$.contains($center$$11_x1$$32$$, $posY$$3_stage$$18_y2$$22$$);) {
          $center$$11_x1$$32$$--
        }
        for(;$slice$$18$$.contains($x2$$29$$, $y1$$25$$) && $slice$$18$$.contains($x2$$29$$, $posY$$3_stage$$18_y2$$22$$);) {
          $x2$$29$$++
        }
        $center$$11_x1$$32$$ += 3;
        $x2$$29$$ -= 3;
        $posX$$3_usableSpace$$ = 2 * window.Math.min($posX$$3_usableSpace$$ - $center$$11_x1$$32$$, $x2$$29$$ - $posX$$3_usableSpace$$);
        $posX$$3_usableSpace$$ < $estimatedDims$$2_midAngle_midPt$$1$$.$w$ && ($sliceLabel$$1$$.$setX$(($center$$11_x1$$32$$ + $x2$$29$$) / 2), $posX$$3_usableSpace$$ = $x2$$29$$ - $center$$11_x1$$32$$);
        $posY$$3_stage$$18_y2$$22$$ = $slice$$18$$.$_pieChart$.$_context$.$_stage$;
        D.$DvtTextUtils$$.$fitText$($sliceLabel$$1$$, $posX$$3_usableSpace$$, $estimatedDims$$2_midAngle_midPt$$1$$.$h$, $posY$$3_stage$$18_y2$$22$$) && ($posY$$3_stage$$18_y2$$22$$.removeChild($sliceLabel$$1$$), $slice$$18$$.$setSliceLabel$($sliceLabel$$1$$))
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($pie$$4$$) {
  if($pie$$4$$ != D.$JSCompiler_alias_NULL$$) {
    var $leftLabels$$ = [], $alabels_rightLabels$$ = [], $alabels_rightLabels$$ = D.$DvtPieLabelUtils$$.$_generateInitialLayout$($pie$$4$$), $leftLabels$$ = $alabels_rightLabels$$[0], $alabels_rightLabels$$ = $alabels_rightLabels$$[1], $leftColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$4$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $rightColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$4$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
    $leftColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && $rightColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$4$$, $leftLabels$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    $leftColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && $rightColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$4$$, $alabels_rightLabels$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$4$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$4$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$)
  }
};
D.$DvtPieLabelUtils$$.$_createLabel$ = function $$DvtPieLabelUtils$$$$_createLabel$$($slice$$19$$, $noWrap$$3$$) {
  var $backgroundColor$$25_labelStr$$1_pieChart$$7$$ = $slice$$19$$.$_pieChart$;
  if("none" == $backgroundColor$$25_labelStr$$1_pieChart$$7$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $context$$552_sliceLabel$$2$$ = $backgroundColor$$25_labelStr$$1_pieChart$$7$$.$_context$, $context$$552_sliceLabel$$2$$ = $noWrap$$3$$ ? new D.$DvtOutputText$$($context$$552_sliceLabel$$2$$) : new D.$DvtMultilineText$$($context$$552_sliceLabel$$2$$), $defaultColor_sd$$ = $backgroundColor$$25_labelStr$$1_pieChart$$7$$.$getOptions$().styleDefaults, $style$$89$$ = $defaultColor_sd$$.sliceLabelStyle;
  if($style$$89$$) {
    var $styleStr$$ = $style$$89$$.toString();
    -1 == $styleStr$$.indexOf("color") && ($defaultColor_sd$$ = $defaultColor_sd$$._defaultSliceLabelColor, "inside" == $backgroundColor$$25_labelStr$$1_pieChart$$7$$.$getLabelPosition$() && ($backgroundColor$$25_labelStr$$1_pieChart$$7$$ = $slice$$19$$.$getFillColor$(), $defaultColor_sd$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($backgroundColor$$25_labelStr$$1_pieChart$$7$$)), $style$$89$$ = new D.$DvtCSSStyle$$($styleStr$$ + ("color: " + $defaultColor_sd$$ + ";")))
  }
  D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$($style$$89$$, $context$$552_sliceLabel$$2$$);
  $backgroundColor$$25_labelStr$$1_pieChart$$7$$ = D.$DvtPieLabelUtils$$.$_generateSliceLabelString$($slice$$19$$);
  $context$$552_sliceLabel$$2$$.$setTextString$($backgroundColor$$25_labelStr$$1_pieChart$$7$$);
  $slice$$19$$.$_sliceLabelString$ = $backgroundColor$$25_labelStr$$1_pieChart$$7$$;
  return $context$$552_sliceLabel$$2$$
};
D.$DvtPieLabelUtils$$.$_generateSliceLabelString$ = function $$DvtPieLabelUtils$$$$_generateSliceLabelString$$($labelType$$5_slice$$20$$) {
  var $pieChart$$8$$ = $labelType$$5_slice$$20$$.$_pieChart$;
  if("none" == $pieChart$$8$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $customLabel_svalue$$ = $labelType$$5_slice$$20$$.$_customLabel$;
  if($customLabel_svalue$$ != D.$JSCompiler_alias_NULL$$) {
    return $customLabel_svalue$$
  }
  var $dataTotal$$1_percentage$$1_s$$86_spercent$$ = "", $stext_value$$89$$ = $customLabel_svalue$$ = "", $dataTotal$$1_percentage$$1_s$$86_spercent$$ = "", $stext_value$$89$$ = $labelType$$5_slice$$20$$.getValue(), $valueFormats$$3$$ = $labelType$$5_slice$$20$$.$_chart$.$getOptions$().valueFormats, $dataTotal$$1_percentage$$1_s$$86_spercent$$ = 0, $dataTotal$$1_percentage$$1_s$$86_spercent$$ = $pieChart$$8$$.$getTotalValue$(), $dataTotal$$1_percentage$$1_s$$86_spercent$$ = 0 == $dataTotal$$1_percentage$$1_s$$86_spercent$$ ? 
  0 : 100 * (window.Math.abs($stext_value$$89$$) / $dataTotal$$1_percentage$$1_s$$86_spercent$$);
  if($valueFormats$$3$$) {
    $dataTotal$$1_percentage$$1_s$$86_spercent$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($valueFormats$$3$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $labelType$$5_slice$$20$$.getValue() / 100)
  }else {
    $dataTotal$$1_percentage$$1_s$$86_spercent$$ = $dataTotal$$1_percentage$$1_s$$86_spercent$$.toString();
    if(5 < $dataTotal$$1_percentage$$1_s$$86_spercent$$.length) {
      $dataTotal$$1_percentage$$1_s$$86_spercent$$ = $dataTotal$$1_percentage$$1_s$$86_spercent$$.slice(0, 5)
    }else {
      for(0 > $dataTotal$$1_percentage$$1_s$$86_spercent$$.indexOf(".", 0) && 4 > $dataTotal$$1_percentage$$1_s$$86_spercent$$.length && ($dataTotal$$1_percentage$$1_s$$86_spercent$$ += ".");5 > $dataTotal$$1_percentage$$1_s$$86_spercent$$.length;) {
        $dataTotal$$1_percentage$$1_s$$86_spercent$$ += "0"
      }
    }
    $dataTotal$$1_percentage$$1_s$$86_spercent$$ += "%"
  }
  (0,window.isNaN)($stext_value$$89$$) || ($customLabel_svalue$$ = $valueFormats$$3$$ ? D.$DvtChartTooltipUtils$$.$_formatValue$($valueFormats$$3$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $labelType$$5_slice$$20$$.getValue()) : $stext_value$$89$$.toString());
  $stext_value$$89$$ = $labelType$$5_slice$$20$$.$getSeriesLabel$();
  $labelType$$5_slice$$20$$ = $pieChart$$8$$.$getOptions$().styleDefaults.sliceLabelType;
  return"percent" == $labelType$$5_slice$$20$$ ? $dataTotal$$1_percentage$$1_s$$86_spercent$$ : "number" == $labelType$$5_slice$$20$$ ? $customLabel_svalue$$ : "text" == $labelType$$5_slice$$20$$ ? $stext_value$$89$$ : "textAndPercent" == $labelType$$5_slice$$20$$ ? $stext_value$$89$$ + ", " + $dataTotal$$1_percentage$$1_s$$86_spercent$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$ = function $$DvtPieLabelUtils$$$$_setFontPropsOnLabel$$($style$$90$$, $sliceLabel$$3$$) {
  $sliceLabel$$3$$ == D.$JSCompiler_alias_NULL$$ || $style$$90$$ == D.$JSCompiler_alias_NULL$$ || $sliceLabel$$3$$.$setCSSStyle$($style$$90$$)
};
D.$DvtPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtPieLabelUtils$$$$_refineInitialLayout$$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$18$$) {
  if($labelInfoArray$$ && 0 < $labelInfoArray$$.length) {
    var $lastY$$1$$ = $pie$$5$$.$_frame$.y, $collisionTop$$ = D.$JSCompiler_alias_FALSE$$, $collisionCentral$$ = D.$JSCompiler_alias_FALSE$$, $collisionBottom$$ = D.$JSCompiler_alias_FALSE$$, $labelBottom$$ = 0, $collide_labelInfo$$4$$, $bottomQuarter$$ = D.$JSCompiler_alias_FALSE$$, $prevBottomQuarter$$ = $bottomQuarter$$;
    $collide_labelInfo$$4$$ = D.$JSCompiler_alias_FALSE$$;
    $isLeftSideLabels_side$$18$$ = $isLeftSideLabels_side$$18$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
    for(var $i$$516$$ = 0;$i$$516$$ < $labelInfoArray$$.length;$i$$516$$++) {
      $collide_labelInfo$$4$$ = $labelInfoArray$$[$i$$516$$], $prevBottomQuarter$$ = $bottomQuarter$$, 90 < $collide_labelInfo$$4$$.$getPosition$() && ($bottomQuarter$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ = $collide_labelInfo$$4$$.$getY$() + $collide_labelInfo$$4$$.getHeight(), ($collide_labelInfo$$4$$ = $lastY$$1$$ - $collide_labelInfo$$4$$.$getY$() > D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$) && ($bottomQuarter$$ ? $bottomQuarter$$ && !$prevBottomQuarter$$ ? $collisionCentral$$ = D.$JSCompiler_alias_TRUE$$ : 
      $collisionBottom$$ = D.$JSCompiler_alias_TRUE$$ : $collisionTop$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ > $lastY$$1$$ && ($lastY$$1$$ = $labelBottom$$)
    }
    return $collisionTop$$ && $collisionBottom$$ || $collisionCentral$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$18$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_ALL_COLLISION$) : $collisionTop$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$18$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : $collisionBottom$$ ? 
    (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$18$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : D.$DvtPieLabelUtils$$.$_NO_COLLISION$
  }
};
D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_setLabelsAndFeelers$$($pie$$6$$, $alabels$$1$$, $i$$517_side$$19$$) {
  if(!($alabels$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 >= $alabels$$1$$.length)) {
    var $excessLength_slice$$21$$, $sliceLabel$$4$$, $labelInfo$$5$$, $isLeftSide$$ = $i$$517_side$$19$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $excessWidth$$1$$ = window.Infinity;
    for($i$$517_side$$19$$ = 0;$i$$517_side$$19$$ < $alabels$$1$$.length;$i$$517_side$$19$$++) {
      $labelInfo$$5$$ = $alabels$$1$$[$i$$517_side$$19$$], $excessLength_slice$$21$$ = $labelInfo$$5$$.$_slice$, $labelInfo$$5$$.$_hasFeeler$ ? ($excessLength_slice$$21$$ = D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$5$$, $excessLength_slice$$21$$, $isLeftSide$$), $excessWidth$$1$$ = window.Math.min($excessWidth$$1$$, $excessLength_slice$$21$$)) : (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$21$$)
    }
    for($i$$517_side$$19$$ = 0;$i$$517_side$$19$$ < $alabels$$1$$.length;$i$$517_side$$19$$++) {
      $labelInfo$$5$$ = $alabels$$1$$[$i$$517_side$$19$$];
      $excessLength_slice$$21$$ = $labelInfo$$5$$.$_slice$;
      $sliceLabel$$4$$ = $labelInfo$$5$$.$_sliceLabel$;
      $labelInfo$$5$$.$_hasFeeler$ && ($isLeftSide$$ ? $labelInfo$$5$$.$setX$($labelInfo$$5$$.$getX$() + $excessWidth$$1$$) : $labelInfo$$5$$.$setX$($labelInfo$$5$$.$getX$() - $excessWidth$$1$$), D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$5$$, $excessLength_slice$$21$$, $isLeftSide$$), $sliceLabel$$4$$.$setMaxLines$(1));
      $sliceLabel$$4$$.$setY$($labelInfo$$5$$.$getY$());
      $sliceLabel$$4$$.$setX$($labelInfo$$5$$.$getX$());
      var $frame$$1$$ = $pie$$6$$.$_frame$;
      $labelInfo$$5$$.$getY$() < $frame$$1$$.y || $labelInfo$$5$$.$getY$() + $labelInfo$$5$$.getHeight() > $frame$$1$$.y + $frame$$1$$.$h$ ? ($excessLength_slice$$21$$.$setSliceLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$21$$)) : (D.$DvtPieLabelUtils$$.$_truncateSliceLabel$($pie$$6$$, $excessLength_slice$$21$$, $labelInfo$$5$$, $isLeftSide$$), $excessLength_slice$$21$$.$setSliceLabel$($sliceLabel$$4$$))
    }
  }
};
D.$DvtPieLabelUtils$$.$_calculateFeeler$ = function $$DvtPieLabelUtils$$$$_calculateFeeler$$($labelInfo$$6_pa$$1$$, $slice$$22$$, $isLeft$$) {
  var $pieChart$$9_radFeelerAngle$$ = $slice$$22$$.$_pieChart$, $endPt$$1_targetX$$ = $labelInfo$$6_pa$$1$$.$getX$(), $horizOffset_targetY$$1_tilt$$2$$ = $labelInfo$$6_pa$$1$$.$getY$() + $labelInfo$$6_pa$$1$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $minHorizLength$$ = D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $pieChart$$9_radFeelerAngle$$.$_radiusX$, $midPt$$2_midX$$2$$;
  $isLeft$$ ? ($endPt$$1_targetX$$ += D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$2$$ = $endPt$$1_targetX$$ + $minHorizLength$$) : ($endPt$$1_targetX$$ -= D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$2$$ = $endPt$$1_targetX$$ - $minHorizLength$$);
  if("outside" == $pieChart$$9_radFeelerAngle$$.$getLabelPosition$()) {
    var $ma_startPt$$2$$ = {x:0, y:0};
    $midPt$$2_midX$$2$$ = {x:$midPt$$2_midX$$2$$, y:$horizOffset_targetY$$1_tilt$$2$$};
    $endPt$$1_targetX$$ = {x:$endPt$$1_targetX$$, y:$horizOffset_targetY$$1_tilt$$2$$};
    $ma_startPt$$2$$ = $labelInfo$$6_pa$$1$$.$getAngle$();
    $horizOffset_targetY$$1_tilt$$2$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma_startPt$$2$$, $pieChart$$9_radFeelerAngle$$.$getDepth$());
    $ma_startPt$$2$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma_startPt$$2$$, $pieChart$$9_radFeelerAngle$$.$getCenter$().x, $pieChart$$9_radFeelerAngle$$.$getCenter$().y + $horizOffset_targetY$$1_tilt$$2$$, $pieChart$$9_radFeelerAngle$$.$_radiusX$, $pieChart$$9_radFeelerAngle$$.$_radiusY$);
    $labelInfo$$6_pa$$1$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$6_pa$$1$$.$getPosition$());
    $pieChart$$9_radFeelerAngle$$ = window.Math.abs(window.Math.atan2($midPt$$2_midX$$2$$.x - $ma_startPt$$2$$.x, $ma_startPt$$2$$.y - $midPt$$2_midX$$2$$.y));
    $horizOffset_targetY$$1_tilt$$2$$ = ($ma_startPt$$2$$.y - $midPt$$2_midX$$2$$.y) * window.Math.tan($labelInfo$$6_pa$$1$$);
    if($labelInfo$$6_pa$$1$$ > window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ > window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ < $labelInfo$$6_pa$$1$$ || $labelInfo$$6_pa$$1$$ < window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ < window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ > $labelInfo$$6_pa$$1$$) {
      $midPt$$2_midX$$2$$.x = $isLeft$$ ? $ma_startPt$$2$$.x - $horizOffset_targetY$$1_tilt$$2$$ : $ma_startPt$$2$$.x + $horizOffset_targetY$$1_tilt$$2$$
    }
    $slice$$22$$.$_outsideFeelerStart$ = $ma_startPt$$2$$;
    $slice$$22$$.$_outsideFeelerMid$ = $midPt$$2_midX$$2$$;
    $slice$$22$$.$_outsideFeelerEnd$ = $endPt$$1_targetX$$;
    $slice$$22$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$;
    return window.Math.abs($endPt$$1_targetX$$.x - $midPt$$2_midX$$2$$.x) - $minHorizLength$$
  }
  return 0
};
D.$DvtPieLabelUtils$$.$_adjustForDepth$ = function $$DvtPieLabelUtils$$$$_adjustForDepth$$($ma$$1$$, $pieDepth$$) {
  var $depth$$12$$ = 0;
  189 < $ma$$1$$ && 351 > $ma$$1$$ && ($depth$$12$$ = $pieDepth$$);
  return $depth$$12$$
};
D.$DvtPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtPieLabelUtils$$$$_getMiddleLabel$$($alabels$$2$$) {
  for(var $bestAngle$$ = 91, $bestIndex$$ = -1, $i$$518$$ = 0;$i$$518$$ < $alabels$$2$$.length;$i$$518$$++) {
    window.pa = $alabels$$2$$[$i$$518$$].$getPosition$(), window.Math.abs(window.pa - 90) < $bestAngle$$ && ($bestAngle$$ = window.Math.abs(window.pa - 90), $bestIndex$$ = $i$$518$$)
  }
  return $bestIndex$$
};
D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtPieLabelUtils$$$$_setOptimalLabelPosition$$($optimalY_pie$$7$$, $labelInfo$$7$$, $heightFromCenter_vertX$$) {
  $labelInfo$$7$$.$setX$($heightFromCenter_vertX$$);
  $heightFromCenter_vertX$$ = $optimalY_pie$$7$$.$_radiusY$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$) * window.Math.cos(D.$DvtMath$$.$degreesToRads$($labelInfo$$7$$.$getPosition$()));
  var $tilt$$3$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($labelInfo$$7$$.$getAngle$(), $optimalY_pie$$7$$.$getDepth$());
  $optimalY_pie$$7$$ = $optimalY_pie$$7$$.$getCenter$().y - $heightFromCenter_vertX$$ - $labelInfo$$7$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $tilt$$3$$;
  $labelInfo$$7$$.$setY$((0,D.$JSCompiler_StaticMethods_boundY$$)($labelInfo$$7$$, $optimalY_pie$$7$$))
};
D.$DvtPieLabelUtils$$.$_columnLabels$ = function $$DvtPieLabelUtils$$$$_columnLabels$$($pie$$8$$, $alabels$$3$$, $i$$519_isLeft$$2_startLabel$$, $isTop_labelInfo$$8$$, $isBottom$$) {
  var $frame$$2_vertX$$1$$ = $pie$$8$$.$_frame$, $minY$$9_startIndex$$1$$ = $frame$$2_vertX$$1$$.y, $highestY_isStartAtTop_maxY$$6$$ = $frame$$2_vertX$$1$$.y + $frame$$2_vertX$$1$$.$h$, $frame$$2_vertX$$1$$ = $pie$$8$$.$getCenter$().x, $lowestY_minFeelerDist$$ = $pie$$8$$.$_radiusX$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$), $frame$$2_vertX$$1$$ = $i$$519_isLeft$$2_startLabel$$ ? $frame$$2_vertX$$1$$ - $lowestY_minFeelerDist$$ : $frame$$2_vertX$$1$$ + 
  $lowestY_minFeelerDist$$;
  for($i$$519_isLeft$$2_startLabel$$ = 0;$i$$519_isLeft$$2_startLabel$$ < $alabels$$3$$.length;$i$$519_isLeft$$2_startLabel$$++) {
    $alabels$$3$$[$i$$519_isLeft$$2_startLabel$$].$_minY$ = $minY$$9_startIndex$$1$$, $minY$$9_startIndex$$1$$ += $alabels$$3$$[$i$$519_isLeft$$2_startLabel$$].getHeight()
  }
  for($i$$519_isLeft$$2_startLabel$$ = $alabels$$3$$.length - 1;0 <= $i$$519_isLeft$$2_startLabel$$;$i$$519_isLeft$$2_startLabel$$--) {
    $highestY_isStartAtTop_maxY$$6$$ -= $alabels$$3$$[$i$$519_isLeft$$2_startLabel$$].getHeight(), $alabels$$3$$[$i$$519_isLeft$$2_startLabel$$].$_maxY$ = $highestY_isStartAtTop_maxY$$6$$
  }
  if($alabels$$3$$[0].$_minY$ >= $alabels$$3$$[0].$_maxY$) {
    for($i$$519_isLeft$$2_startLabel$$ = 0;$i$$519_isLeft$$2_startLabel$$ < $alabels$$3$$.length;$i$$519_isLeft$$2_startLabel$$++) {
      $isTop_labelInfo$$8$$ = $alabels$$3$$[$i$$519_isLeft$$2_startLabel$$], $isTop_labelInfo$$8$$.$setX$($frame$$2_vertX$$1$$), $isTop_labelInfo$$8$$.$setY$(($isTop_labelInfo$$8$$.$_minY$ + $isTop_labelInfo$$8$$.$_maxY$) / 2), $isTop_labelInfo$$8$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
  }else {
    $minY$$9_startIndex$$1$$ = D.$DvtPieLabelUtils$$.$_getMiddleLabel$($alabels$$3$$);
    $i$$519_isLeft$$2_startLabel$$ = $alabels$$3$$[$minY$$9_startIndex$$1$$];
    $highestY_isStartAtTop_maxY$$6$$ = 90 >= $i$$519_isLeft$$2_startLabel$$.$getPosition$();
    $isTop_labelInfo$$8$$ && !$isBottom$$ && $i$$519_isLeft$$2_startLabel$$.$_minY$ + $i$$519_isLeft$$2_startLabel$$.getHeight() > $pie$$8$$.$getCenter$().y && ($isBottom$$ = D.$JSCompiler_alias_TRUE$$);
    $isBottom$$ && !$isTop_labelInfo$$8$$ && $i$$519_isLeft$$2_startLabel$$.$_maxY$ < $pie$$8$$.$getCenter$().y && ($isTop_labelInfo$$8$$ = D.$JSCompiler_alias_TRUE$$);
    if($isTop_labelInfo$$8$$ && $highestY_isStartAtTop_maxY$$6$$ || $isBottom$$ && !$highestY_isStartAtTop_maxY$$6$$) {
      D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $i$$519_isLeft$$2_startLabel$$, $frame$$2_vertX$$1$$), $i$$519_isLeft$$2_startLabel$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
    var $highestY_isStartAtTop_maxY$$6$$ = $i$$519_isLeft$$2_startLabel$$.$getY$(), $lowestY_minFeelerDist$$ = $i$$519_isLeft$$2_startLabel$$.$getY$() + $i$$519_isLeft$$2_startLabel$$.getHeight(), $optimalY$$1$$, $labelHeight$$;
    if($isTop_labelInfo$$8$$) {
      for($i$$519_isLeft$$2_startLabel$$ = $minY$$9_startIndex$$1$$ - 1;0 <= $i$$519_isLeft$$2_startLabel$$;$i$$519_isLeft$$2_startLabel$$--) {
        $isTop_labelInfo$$8$$ = $alabels$$3$$[$i$$519_isLeft$$2_startLabel$$], $labelHeight$$ = $isTop_labelInfo$$8$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $isTop_labelInfo$$8$$, $frame$$2_vertX$$1$$), $isTop_labelInfo$$8$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$8$$.$getY$(), $highestY_isStartAtTop_maxY$$6$$ = $optimalY$$1$$ + $labelHeight$$ < $highestY_isStartAtTop_maxY$$6$$ ? $optimalY$$1$$ : $highestY_isStartAtTop_maxY$$6$$ - 
        $labelHeight$$, $isTop_labelInfo$$8$$.$setY$($highestY_isStartAtTop_maxY$$6$$)
      }
    }
    if($isBottom$$) {
      for($i$$519_isLeft$$2_startLabel$$ = $minY$$9_startIndex$$1$$ + 1;$i$$519_isLeft$$2_startLabel$$ < $alabels$$3$$.length;$i$$519_isLeft$$2_startLabel$$++) {
        $isTop_labelInfo$$8$$ = $alabels$$3$$[$i$$519_isLeft$$2_startLabel$$], $labelHeight$$ = $isTop_labelInfo$$8$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $isTop_labelInfo$$8$$, $frame$$2_vertX$$1$$), $isTop_labelInfo$$8$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$8$$.$getY$(), $lowestY_minFeelerDist$$ = $optimalY$$1$$ > $lowestY_minFeelerDist$$ ? $optimalY$$1$$ + $labelHeight$$ : $lowestY_minFeelerDist$$ + $labelHeight$$, $isTop_labelInfo$$8$$.$setY$($lowestY_minFeelerDist$$ - 
        $labelHeight$$)
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtPieLabelUtils$$$$_truncateSliceLabel$$($pie$$9_tmDimPt$$, $frame$$3_slice$$23$$, $labelInfo$$9$$, $isLeft$$3$$) {
  var $sliceLabel$$5$$ = $labelInfo$$9$$.$_sliceLabel$, $style$$91$$ = $sliceLabel$$5$$.$getCSSStyle$(), $maxLabelWidth$$1_numChildren$$10$$ = 0, $maxLabelWidth$$1_numChildren$$10$$ = $pie$$9_tmDimPt$$.$getNumChildren$(), $removeTextArea$$ = D.$JSCompiler_alias_FALSE$$;
  $pie$$9_tmDimPt$$.contains($sliceLabel$$5$$) || ($pie$$9_tmDimPt$$.$addChild$($sliceLabel$$5$$), $removeTextArea$$ = D.$JSCompiler_alias_TRUE$$);
  $sliceLabel$$5$$.$setCSSStyle$($style$$91$$);
  $sliceLabel$$5$$.$setTextString$($frame$$3_slice$$23$$.$_sliceLabelString$);
  $removeTextArea$$ && $pie$$9_tmDimPt$$.$removeChildAt$($maxLabelWidth$$1_numChildren$$10$$);
  $frame$$3_slice$$23$$ = $pie$$9_tmDimPt$$.$_frame$;
  $maxLabelWidth$$1_numChildren$$10$$ = $isLeft$$3$$ ? $labelInfo$$9$$.$getX$() - $frame$$3_slice$$23$$.x : $frame$$3_slice$$23$$.x + $frame$$3_slice$$23$$.$w$ - $labelInfo$$9$$.$getX$();
  $pie$$9_tmDimPt$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$9_tmDimPt$$, $sliceLabel$$5$$, $maxLabelWidth$$1_numChildren$$10$$, $labelInfo$$9$$.$_initialNumLines$);
  $labelInfo$$9$$.$setWidth$($pie$$9_tmDimPt$$.x);
  $labelInfo$$9$$.getHeight() != $pie$$9_tmDimPt$$.y && $labelInfo$$9$$.$setHeight$($pie$$9_tmDimPt$$.y)
};
D.$DvtPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtPieLabelUtils$$$$_generateInitialLayout$$($pie$$10$$) {
  var $arArrays$$ = (0,window.Array)(2), $leftLabels$$1$$ = [], $rightLabels$$1$$ = [], $dist$$1_labelPt$$, $maxLabelWidth$$2_tmDimPt$$1$$, $ma$$2$$ = 0, $pa$$2_tilt$$4$$ = 0, $i$$520$$, $s_label$$, $slices$$6$$ = $pie$$10$$.$_slices$, $n$$29$$ = $slices$$6$$.length, $frame$$4$$ = $pie$$10$$.$_frame$;
  if(0 < $n$$29$$) {
    for($i$$520$$ = 0;$i$$520$$ < $n$$29$$;$i$$520$$++) {
      window.slice = $slices$$6$$[$i$$520$$], $s_label$$ = D.$DvtPieLabelUtils$$.$_createLabel$(window.slice), $ma$$2$$ = window.slice.$getAngleStart$() + window.slice.$getAngleExtent$() / 2, 360 < $ma$$2$$ && ($ma$$2$$ -= 360), 0 > $ma$$2$$ && ($ma$$2$$ += 360), $dist$$1_labelPt$$ = 1 + D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $dist$$1_labelPt$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma$$2$$, $pie$$10$$.$getCenter$().x, $pie$$10$$.$getCenter$().y, $pie$$10$$.$_radiusX$ * $dist$$1_labelPt$$, 
      $pie$$10$$.$_radiusY$ * $dist$$1_labelPt$$), $maxLabelWidth$$2_tmDimPt$$1$$ = 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? $dist$$1_labelPt$$.x - $frame$$4$$.x : $frame$$4$$.x + $frame$$4$$.$w$ - $dist$$1_labelPt$$.x, $maxLabelWidth$$2_tmDimPt$$1$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$10$$, $s_label$$, $maxLabelWidth$$2_tmDimPt$$1$$, D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$), 165 > $ma$$2$$ && 15 < $ma$$2$$ ? $dist$$1_labelPt$$.y -= 1 * $maxLabelWidth$$2_tmDimPt$$1$$.y : 15 > $ma$$2$$ || 
      345 < $ma$$2$$ ? ($dist$$1_labelPt$$.y -= 0.5 * $maxLabelWidth$$2_tmDimPt$$1$$.y, $dist$$1_labelPt$$.x += 0.2 * $maxLabelWidth$$2_tmDimPt$$1$$.y) : 165 < $ma$$2$$ && 195 > $ma$$2$$ && ($dist$$1_labelPt$$.y -= 0.5 * $maxLabelWidth$$2_tmDimPt$$1$$.y, $dist$$1_labelPt$$.x -= 0.2 * $maxLabelWidth$$2_tmDimPt$$1$$.y), $pa$$2_tilt$$4$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma$$2$$, $pie$$10$$.$getDepth$()), $dist$$1_labelPt$$.y += $pa$$2_tilt$$4$$, 1 == $n$$29$$ && ($dist$$1_labelPt$$.x -= $maxLabelWidth$$2_tmDimPt$$1$$.x / 
      2), $dist$$1_labelPt$$.y < $frame$$4$$.y && ($dist$$1_labelPt$$.y = $frame$$4$$.y), $dist$$1_labelPt$$.y + $maxLabelWidth$$2_tmDimPt$$1$$.y > $frame$$4$$.y + $frame$$4$$.$h$ && ($dist$$1_labelPt$$.y = $frame$$4$$.y + $frame$$4$$.$h$ - $maxLabelWidth$$2_tmDimPt$$1$$.y), 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? ($s_label$$.$alignRight$(), $pa$$2_tilt$$4$$ = $ma$$2$$ - 90, D.$DvtPieLabelUtils$$.$_createLabelInfo$($s_label$$, $ma$$2$$, $pa$$2_tilt$$4$$, $maxLabelWidth$$2_tmDimPt$$1$$, $dist$$1_labelPt$$, 
      $leftLabels$$1$$)) : ($pa$$2_tilt$$4$$ = 90 >= $ma$$2$$ ? window.Math.abs(90 - $ma$$2$$) : 180 - ($ma$$2$$ - 270), D.$DvtPieLabelUtils$$.$_createLabelInfo$($s_label$$, $ma$$2$$, $pa$$2_tilt$$4$$, $maxLabelWidth$$2_tmDimPt$$1$$, $dist$$1_labelPt$$, $rightLabels$$1$$))
    }
  }
  $arArrays$$[0] = $leftLabels$$1$$;
  $arArrays$$[1] = $rightLabels$$1$$;
  return $arArrays$$
};
D.$DvtPieLabelUtils$$.$_createLabelInfo$ = function $$DvtPieLabelUtils$$$$_createLabelInfo$$($sliceLabel$$6$$, $ma$$3$$, $pa$$3$$, $tmDimPt$$2$$, $labelPt$$1$$, $labelInfoArray$$1$$) {
  for(var $slice$$24$$ = window.slice, $insertPos$$ = -1, $labelInfo$$10$$, $j$$63$$ = 0;$j$$63$$ < $labelInfoArray$$1$$.length;$j$$63$$++) {
    if($labelInfo$$10$$ = $labelInfoArray$$1$$[$j$$63$$], $labelInfo$$10$$.$getPosition$() > $pa$$3$$) {
      $insertPos$$ = $j$$63$$;
      break
    }
  }
  -1 == $insertPos$$ && ($insertPos$$ = $labelInfoArray$$1$$.length);
  $labelInfo$$10$$ = new D.$DvtPieLabelInfo$$;
  $labelInfo$$10$$.$setPosition$($pa$$3$$);
  $labelInfo$$10$$.$setAngle$($ma$$3$$);
  $labelInfo$$10$$.$setSliceLabel$($sliceLabel$$6$$);
  $labelInfo$$10$$.$_slice$ = $slice$$24$$;
  $labelInfo$$10$$.$setWidth$($tmDimPt$$2$$.x);
  $labelInfo$$10$$.$setHeight$($tmDimPt$$2$$.y);
  $labelInfo$$10$$.$setX$($labelPt$$1$$.x);
  $labelInfo$$10$$.$setY$($labelPt$$1$$.y);
  $labelInfoArray$$1$$.splice($insertPos$$, 0, $labelInfo$$10$$)
};
D.$DvtPieLabelUtils$$.$_getTextDimension$ = function $$DvtPieLabelUtils$$$$_getTextDimension$$($pieChart$$10$$, $sliceLabel$$7$$, $dimensions$$1_maxWidth$$24$$, $maxLines$$3$$) {
  $sliceLabel$$7$$.$setMaxLines$($maxLines$$3$$);
  D.$DvtTextUtils$$.$fitText$($sliceLabel$$7$$, $dimensions$$1_maxWidth$$24$$, window.Infinity, $pieChart$$10$$);
  $pieChart$$10$$.$addChild$($sliceLabel$$7$$);
  $dimensions$$1_maxWidth$$24$$ = $sliceLabel$$7$$.$getDimensions$();
  $pieChart$$10$$.removeChild($sliceLabel$$7$$);
  return{x:$dimensions$$1_maxWidth$$24$$.$w$, y:$dimensions$$1_maxWidth$$24$$.$h$}
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
D.$DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($chart$$7$$, $container$$54$$, $availSpace$$40$$) {
  D.$DvtChartRenderer$$.$_renderBackground$($chart$$7$$, $container$$54$$, $availSpace$$40$$);
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$7$$)) {
    D.$DvtChartRenderer$$.$_addOuterGaps$($chart$$7$$, $availSpace$$40$$);
    D.$DvtChartRenderer$$.$_renderTitles$($chart$$7$$, $container$$54$$, $availSpace$$40$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$40$$);
    D.$DvtChartLegendRenderer$$.$render$($chart$$7$$, $container$$54$$, $availSpace$$40$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$40$$);
    var $horizSbDim$$ = D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$($chart$$7$$, $container$$54$$, $availSpace$$40$$), $vertSbDim$$ = D.$DvtChartRenderer$$.$_prerenderVertScrollbar$($chart$$7$$, $container$$54$$, $availSpace$$40$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$40$$);
    var $space$$inline_5102_space$$inline_5105$$ = $availSpace$$40$$.clone();
    $chart$$7$$.$_axisSpace$ = $space$$inline_5102_space$$inline_5105$$;
    $chart$$7$$.$_radius$ = window.Math.min(0.9 * $space$$inline_5102_space$$inline_5105$$.$h$, 0.8 * $space$$inline_5102_space$$inline_5105$$.$w$) / 2;
    D.$DvtChartAxisRenderer$$.$render$($chart$$7$$, $container$$54$$, $availSpace$$40$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$40$$);
    $space$$inline_5102_space$$inline_5105$$ = $availSpace$$40$$.clone();
    $chart$$7$$.$_plotAreaSpace$ = $space$$inline_5102_space$$inline_5105$$;
    D.$DvtChartRenderer$$.$_setEventHandlers$($chart$$7$$);
    D.$DvtChartRenderer$$.$_renderScrollbars$($chart$$7$$, $horizSbDim$$, $vertSbDim$$);
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$7$$, $container$$54$$, $availSpace$$40$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$7$$) && $container$$54$$.$addChild$($chart$$7$$.$yAxis$);
    D.$DvtChartRenderer$$.$_renderDragButtons$($chart$$7$$)
  }else {
    D.$DvtChartRenderer$$.$renderEmptyText$($chart$$7$$, $container$$54$$, $availSpace$$40$$)
  }
};
D.$DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($chart$$8$$) {
  var $options$$68$$ = $chart$$8$$.$getOptions$(), $em$$ = $chart$$8$$.$getEventManager$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$8$$) && !$options$$68$$._isOverview) {
    var $chartBounds$$ = new D.$DvtRectangle$$(0, 0, $chart$$8$$.getWidth(), $chart$$8$$.getHeight()), $plotAreaBounds$$ = $chart$$8$$.$_plotAreaSpace$, $axisBounds_vertAxisBounds$$ = $chart$$8$$.$_axisSpace$, $horizAxisBounds$$ = new D.$DvtRectangle$$($plotAreaBounds$$.x, $axisBounds_vertAxisBounds$$.y, $plotAreaBounds$$.$w$, $axisBounds_vertAxisBounds$$.$h$), $axisBounds_vertAxisBounds$$ = new D.$DvtRectangle$$($axisBounds_vertAxisBounds$$.x, $plotAreaBounds$$.y, $axisBounds_vertAxisBounds$$.$w$, 
    $plotAreaBounds$$.$h$), $marqueeFill$$ = new D.$DvtSolidFill$$($options$$68$$.styleDefaults.marqueeColor), $marqueeStroke$$ = new D.$DvtSolidStroke$$($options$$68$$.styleDefaults.marqueeBorderColor), $marqueeHandler_panZoomHandler_zoomRate$$2$$;
    if(D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$8$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$8$$)) {
      $marqueeHandler_panZoomHandler_zoomRate$$2$$ = D.$DvtChartEventUtils$$.$isDelayedScroll$($chart$$8$$) ? D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$;
      $marqueeHandler_panZoomHandler_zoomRate$$2$$ = new D.$DvtPanZoomHandler$$($chart$$8$$, $plotAreaBounds$$, $chartBounds$$, $marqueeHandler_panZoomHandler_zoomRate$$2$$);
      var $panUpCursor$$inline_5108$$ = $options$$68$$._resources.panCursorUp, $panDownCursor$$inline_5109$$ = $options$$68$$._resources.panCursorDown;
      D.$DvtAgent$$.$isPlatformIE$() || ($panUpCursor$$inline_5108$$ && ($marqueeHandler_panZoomHandler_zoomRate$$2$$.$_panUpCursor$ = "url(" + $panUpCursor$$inline_5108$$ + ") 8 8, auto"), $panDownCursor$$inline_5109$$ && ($marqueeHandler_panZoomHandler_zoomRate$$2$$.$_panDownCursor$ = "url(" + $panDownCursor$$inline_5109$$ + ") 8 8, auto"));
      $em$$.$_panZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$2$$;
      D.$DvtChartEventUtils$$.$isZoomable$($chart$$8$$) && ($marqueeHandler_panZoomHandler_zoomRate$$2$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$8$$) ? new D.$DvtMarqueeHandler$$($chart$$8$$, $plotAreaBounds$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_NULL$$, $axisBounds_vertAxisBounds$$) : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$8$$) ? new D.$DvtMarqueeHandler$$($chart$$8$$, $plotAreaBounds$$, $chartBounds$$, 
      $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, $horizAxisBounds$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtMarqueeHandler$$($chart$$8$$, $plotAreaBounds$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$.$_marqueeZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$2$$)
    }
    "multiple" == $options$$68$$.selection && ($marqueeHandler_panZoomHandler_zoomRate$$2$$ = new D.$DvtMarqueeHandler$$($chart$$8$$, $plotAreaBounds$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$.$_marqueeSelectHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$2$$)
  }
};
D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($chart$$9$$, $container$$55$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$9$$)) {
    var $availSpace$$41$$ = $chart$$9$$.$_axisSpace$.clone(), $selectionHandler$$11$$ = $chart$$9$$.$getSelectionHandler$();
    if($selectionHandler$$11$$) {
      var $selectedIds$$5$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($selectionHandler$$11$$)
    }
    $chart$$9$$.$__cleanUpAxisAndPlotArea$();
    D.$DvtChartAxisRenderer$$.$render$($chart$$9$$, $container$$55$$, $availSpace$$41$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$41$$);
    var $space$$inline_5121$$ = $availSpace$$41$$.clone();
    $chart$$9$$.$_plotAreaSpace$ = $space$$inline_5121$$;
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$9$$, $container$$55$$, $availSpace$$41$$);
    $selectionHandler$$11$$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($selectionHandler$$11$$, $selectedIds$$5$$, $chart$$9$$.$getObjects$());
    (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($chart$$9$$.$getEventManager$());
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$9$$)
  }
};
D.$DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($chart$$10$$, $container$$56$$, $availSpace$$42_rect$$30$$) {
  var $options$$69$$ = $chart$$10$$.$getOptions$();
  $availSpace$$42_rect$$30$$ = new D.$DvtRect$$($chart$$10$$.$_context$, $availSpace$$42_rect$$30$$.x, $availSpace$$42_rect$$30$$.y, $availSpace$$42_rect$$30$$.$w$, $availSpace$$42_rect$$30$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$42_rect$$30$$);
  $container$$56$$.$addChild$($availSpace$$42_rect$$30$$);
  $chart$$10$$.$getEventManager$().$associate$($availSpace$$42_rect$$30$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$BACKGROUND$)));
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($availSpace$$42_rect$$30$$, "img");
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($availSpace$$42_rect$$30$$, "label", $options$$69$$.shortDesc)
};
D.$DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($chart$$11$$, $availSpace$$43$$) {
  var $gapHeight$$1_options$$70$$ = $chart$$11$$.$getOptions$(), $gapWidth$$1$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$11$$, $gapHeight$$1_options$$70$$.layout.outerGapWidth), $gapHeight$$1_options$$70$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$11$$, $gapHeight$$1_options$$70$$.layout.outerGapHeight);
  if(D.$DvtChartTypeUtils$$.$isStandalonePlotArea$($chart$$11$$) || D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$11$$) || D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$11$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$11$$)) {
    $gapWidth$$1$$ = window.Math.min($gapWidth$$1$$, 1), $gapHeight$$1_options$$70$$ = window.Math.min($gapHeight$$1_options$$70$$, 1)
  }
  $availSpace$$43$$.x += $gapWidth$$1$$;
  $availSpace$$43$$.$w$ -= 2 * $gapWidth$$1$$;
  $availSpace$$43$$.y += $gapHeight$$1_options$$70$$;
  $availSpace$$43$$.$h$ -= 2 * $gapHeight$$1_options$$70$$
};
D.$DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($chart$$12$$, $container$$57_footnoteObj$$, $availSpace$$44$$) {
  var $options$$71$$ = $chart$$12$$.$getOptions$();
  if($options$$71$$.title.text) {
    var $lowerSepObj_titleGapBelow_titleObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$12$$.$getEventManager$(), $container$$57_footnoteObj$$, $options$$71$$.title.text, $options$$71$$.title.style, $availSpace$$44$$.x, $availSpace$$44$$.y, $availSpace$$44$$.$w$, $availSpace$$44$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$TITLE$)), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$, $titleDims$$1$$;
    $lowerSepObj_titleGapBelow_titleObj$$ ? ($titleDims$$1$$ = $lowerSepObj_titleGapBelow_titleObj$$.$getDimensions$(), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = $titleDims$$1$$.$h$) : ($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = 0, $titleDims$$1$$ = new D.$DvtRectangle$$(0, 0, 0, 0));
    if($options$$71$$.subtitle.text) {
      var $subtitleObj$$ = new D.$DvtOutputText$$($chart$$12$$.$_context$, $options$$71$$.subtitle.text, $availSpace$$44$$.x, $availSpace$$44$$.y);
      $subtitleObj$$.$setCSSStyle$($options$$71$$.subtitle.style);
      $container$$57_footnoteObj$$.$addChild$($subtitleObj$$);
      var $subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), $titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$12$$, $options$$71$$.layout.titleSubtitleGapWidth), $titleSpace$$ = $titleDims$$1$$.$w$ + $titleSubtitleGap$$ + $subtitleDims$$.$w$;
      $titleSpace$$ > $availSpace$$44$$.$w$ ? ($titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$12$$, $options$$71$$.layout.titleSubtitleGapHeight), $subtitleObj$$.$setY$($availSpace$$44$$.y + $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + $titleSubtitleGap$$), $container$$57_footnoteObj$$.removeChild($subtitleObj$$), D.$DvtTextUtils$$.$fitText$($subtitleObj$$, $availSpace$$44$$.$w$, $availSpace$$44$$.$h$, $chart$$12$$) && ($subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), 
      $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ += $subtitleDims$$.$h$ + $titleSubtitleGap$$, D.$DvtAgent$$.$isRightToLeft$($chart$$12$$.$_context$) && ($subtitleObj$$ && $subtitleObj$$.$setX$($availSpace$$44$$.$w$ - $subtitleDims$$.$w$), $lowerSepObj_titleGapBelow_titleObj$$ && $lowerSepObj_titleGapBelow_titleObj$$.$setX$($availSpace$$44$$.$w$ - $titleDims$$1$$.$w$)))) : ($subtitleObj$$.$setY$($titleDims$$1$$.$h$ - $subtitleDims$$.$h$ + $availSpace$$44$$.y), (0,D.$DvtLayoutUtils$align$$)($availSpace$$44$$, 
      $options$$71$$.title.hAlign, $lowerSepObj_titleGapBelow_titleObj$$, $titleSpace$$), D.$DvtAgent$$.$isRightToLeft$($chart$$12$$.$_context$) ? ($subtitleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$()), $lowerSepObj_titleGapBelow_titleObj$$ && $lowerSepObj_titleGapBelow_titleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $subtitleDims$$.$w$ + $titleSubtitleGap$$)) : $subtitleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $titleSpace$$ - $subtitleDims$$.$w$));
      (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($subtitleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
      $chart$$12$$.$getEventManager$().$associate$($subtitleObj$$, new D.$DvtSimpleObjPeer$$($subtitleObj$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$SUBTITLE$)))
    }else {
      (0,D.$DvtLayoutUtils$align$$)($availSpace$$44$$, $options$$71$$.title.hAlign, $lowerSepObj_titleGapBelow_titleObj$$, $titleDims$$1$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($lowerSepObj_titleGapBelow_titleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
    $lowerSepObj_titleGapBelow_titleObj$$ = "on" == $options$$71$$.titleSeparator.rendered ? $options$$71$$.layout.titleSeparatorGap : $options$$71$$.layout.titlePlotAreaGap;
    $availSpace$$44$$.y += $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$12$$, $lowerSepObj_titleGapBelow_titleObj$$);
    $availSpace$$44$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$12$$, $lowerSepObj_titleGapBelow_titleObj$$);
    "on" == $options$$71$$.titleSeparator.rendered && ($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = new D.$DvtLine$$($chart$$12$$.$_context$, $availSpace$$44$$.x, $availSpace$$44$$.y, $availSpace$$44$$.x + $availSpace$$44$$.$w$, $availSpace$$44$$.y), $lowerSepObj_titleGapBelow_titleObj$$ = new D.$DvtLine$$($chart$$12$$.$_context$, $availSpace$$44$$.x, $availSpace$$44$$.y + 1, $availSpace$$44$$.x + $availSpace$$44$$.$w$, $availSpace$$44$$.y + 1), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$setSolidStroke$($options$$71$$.titleSeparator.upperColor), 
    $lowerSepObj_titleGapBelow_titleObj$$.$setSolidStroke$($options$$71$$.titleSeparator.lowerColor), $container$$57_footnoteObj$$.$addChild$($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$), $container$$57_footnoteObj$$.$addChild$($lowerSepObj_titleGapBelow_titleObj$$), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = 2 + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$12$$, $options$$71$$.layout.titlePlotAreaGap), $availSpace$$44$$.y += $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$, 
    $availSpace$$44$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$)
  }
  if($options$$71$$.footnote.text) {
    if($container$$57_footnoteObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$12$$.$getEventManager$(), $container$$57_footnoteObj$$, $options$$71$$.footnote.text, $options$$71$$.footnote.style, $availSpace$$44$$.x, 0, $availSpace$$44$$.$w$, $availSpace$$44$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$FOOTNOTE$))) {
      $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = $container$$57_footnoteObj$$.$getDimensions$(), $container$$57_footnoteObj$$.$setY$($availSpace$$44$$.y + $availSpace$$44$$.$h$ - $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$h$), $availSpace$$44$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$h$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$12$$, $options$$71$$.layout.footnoteGap), (0,D.$DvtLayoutUtils$align$$)($availSpace$$44$$, $options$$71$$.footnote.hAlign, 
      $container$$57_footnoteObj$$, $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$57_footnoteObj$$, "hidden", D.$JSCompiler_alias_NULL$$)
  }
};
D.$DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($chart$$13$$, $container$$58$$, $availSpace$$45$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$13$$)) {
    var $pieChart$$3_plotArea$$ = new D.$DvtContainer$$($chart$$13$$.$_context$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($pieChart$$3_plotArea$$, $availSpace$$45$$.x, $availSpace$$45$$.y);
    $container$$58$$.$addChild$($pieChart$$3_plotArea$$);
    $chart$$13$$.$_plotArea$ = $pieChart$$3_plotArea$$;
    D.$DvtPlotAreaRenderer$$.$render$($chart$$13$$, $pieChart$$3_plotArea$$, new D.$DvtRectangle$$(0, 0, $availSpace$$45$$.$w$, $availSpace$$45$$.$h$))
  }else {
    D.$DvtChartTypeUtils$$.$isPie$($chart$$13$$) ? ($pieChart$$3_plotArea$$ = new D.$DvtPieChart$$($chart$$13$$, $availSpace$$45$$), 0 < $pieChart$$3_plotArea$$.$_slices$.length ? ($container$$58$$.$addChild$($pieChart$$3_plotArea$$), $pieChart$$3_plotArea$$.$render$()) : D.$DvtChartRenderer$$.$renderEmptyText$($chart$$13$$, $container$$58$$, $availSpace$$45$$)) : D.$DvtChartTypeUtils$$.$isFunnel$($chart$$13$$) && D.$DvtFunnelRenderer$$.$render$($chart$$13$$, $container$$58$$, $availSpace$$45$$)
  }
  $availSpace$$45$$.$w$ = 0;
  $availSpace$$45$$.$h$ = 0
};
D.$DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($chart$$14$$, $container$$59$$, $availSpace$$46$$) {
  var $options$$72$$ = $chart$$14$$.$getOptions$(), $emptyTextStr_text$$71$$ = $options$$72$$.emptyText;
  $emptyTextStr_text$$71$$ || ($emptyTextStr_text$$71$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$14$$.$Bundle$, "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$));
  $emptyTextStr_text$$71$$ = new D.$DvtOutputText$$($chart$$14$$.$_context$, $emptyTextStr_text$$71$$, $availSpace$$46$$.x + $availSpace$$46$$.$w$ / 2, $availSpace$$46$$.y + $availSpace$$46$$.$h$ / 2);
  $emptyTextStr_text$$71$$.$setCSSStyle$($options$$72$$.title.style);
  $emptyTextStr_text$$71$$.$alignCenter$();
  $emptyTextStr_text$$71$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($emptyTextStr_text$$71$$, $availSpace$$46$$.$w$ - 2 * D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, window.Infinity, $container$$59$$, 0) && ($emptyTextStr_text$$71$$.$isTruncated$() && $chart$$14$$.$getEventManager$().$associate$($emptyTextStr_text$$71$$, new D.$DvtSimpleObjPeer$$($emptyTextStr_text$$71$$.$_untruncatedTextString$)), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($emptyTextStr_text$$71$$, "hidden", D.$JSCompiler_alias_NULL$$))
};
D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($chart$$15$$, $container$$60$$, $availSpace$$47$$) {
  var $width$$98$$ = $availSpace$$47$$.$w$, $height$$79$$ = 0;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$15$$) && D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$($chart$$15$$)) {
    if(D.$DvtChartStyleUtils$$.$isOverviewRendered$($chart$$15$$)) {
      var $height$$79$$ = D.$DvtChartStyleUtils$$.$getOverviewHeight$($chart$$15$$), $oldOverviewChart$$ = $chart$$15$$.$overview$ ? $chart$$15$$.$overview$.$_chart$ : D.$JSCompiler_alias_NULL$$;
      $chart$$15$$.$overview$ = new D.$DvtChartOverview$$($chart$$15$$.$_context$, $chart$$15$$.$processEvent$, $chart$$15$$, $chart$$15$$.getId(), $oldOverviewChart$$);
      $container$$60$$.$addChild$($chart$$15$$.$overview$);
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$47$$, "bottom", $chart$$15$$.$overview$, $width$$98$$, $height$$79$$, 10)
    }else {
      $height$$79$$ = $chart$$15$$.$getOptions$().styleDefaults._scrollbarHeight, $chart$$15$$.$xScrollbar$ = new D.$DvtSimpleScrollbar$$($chart$$15$$.$_context$, $chart$$15$$.$processEvent$, $chart$$15$$), $container$$60$$.$addChild$($chart$$15$$.$xScrollbar$), (0,D.$DvtLayoutUtils$position$$)($availSpace$$47$$, "bottom", $chart$$15$$.$xScrollbar$, $width$$98$$, $height$$79$$, 8)
    }
  }
  return new D.$DvtDimension$$($width$$98$$, $height$$79$$)
};
D.$DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($chart$$16$$, $container$$61$$, $availSpace$$48$$) {
  var $width$$99$$ = 0, $height$$80$$ = $availSpace$$48$$.$h$;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$16$$) && D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$($chart$$16$$)) {
    var $width$$99$$ = $chart$$16$$.$getOptions$().styleDefaults._scrollbarHeight, $scrollbar$$2$$ = new D.$DvtSimpleScrollbar$$($chart$$16$$.$_context$, $chart$$16$$.$processEvent$, $chart$$16$$);
    $container$$61$$.$addChild$($scrollbar$$2$$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$48$$, D.$DvtAgent$$.$isRightToLeft$($chart$$16$$.$_context$) ? "right" : "left", $scrollbar$$2$$, $width$$99$$, $height$$80$$, 8);
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$16$$) ? $chart$$16$$.$xScrollbar$ = $scrollbar$$2$$ : $chart$$16$$.$yScrollbar$ = $scrollbar$$2$$
  }
  return new D.$DvtDimension$$($width$$99$$, $height$$80$$)
};
D.$DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($chart$$17$$, $horizScrollbarDim$$, $ovOptions_vertScrollbarDim$$) {
  var $options$$73$$ = $chart$$17$$.$getOptions$(), $sbOptions$$ = {color:$options$$73$$.styleDefaults._scrollbarHandleColor, backgroundColor:$options$$73$$.styleDefaults._scrollbarTrackColor}, $plotAreaDim$$ = $chart$$17$$.$_plotAreaSpace$, $hitAreaSize$$ = D.$DvtAgent$$.$isTouchDevice$() ? 8 : 4;
  if($chart$$17$$.$xScrollbar$) {
    $sbOptions$$.min = $chart$$17$$.$xAxis$.$getGlobalMin$();
    $sbOptions$$.max = $chart$$17$$.$xAxis$.$getGlobalMax$();
    if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$17$$)) {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_FALSE$$, $chart$$17$$.$xScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$17$$.$xScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$)
    }else {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_TRUE$$;
      $sbOptions$$.isReversed = D.$DvtAgent$$.$isRightToLeft$($chart$$17$$.$_context$);
      $chart$$17$$.$xScrollbar$.$setTranslateX$($plotAreaDim$$.x);
      $chart$$17$$.$xScrollbar$.$render$($sbOptions$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$);
      var $hitArea$$ = new D.$DvtRect$$($chart$$17$$.$_context$, 0, -$hitAreaSize$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$ + 2 * $hitAreaSize$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$);
      $chart$$17$$.$xScrollbar$.$addChild$($hitArea$$)
    }
    $chart$$17$$.$xScrollbar$.$setViewportRange$($chart$$17$$.$xAxis$.$getViewportMin$(), $chart$$17$$.$xAxis$.$getViewportMax$())
  }
  $chart$$17$$.$yScrollbar$ && ($sbOptions$$.min = $chart$$17$$.$yAxis$.$getGlobalMin$(), $sbOptions$$.max = $chart$$17$$.$yAxis$.$getGlobalMax$(), $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_TRUE$$, $chart$$17$$.$yScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$17$$.$yScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$), $chart$$17$$.$yScrollbar$.$setViewportRange$($chart$$17$$.$yAxis$.$getViewportMin$(), 
  $chart$$17$$.$yAxis$.$getViewportMax$()), $hitArea$$ = new D.$DvtRect$$($chart$$17$$.$_context$, -$hitAreaSize$$, 0, $ovOptions_vertScrollbarDim$$.$w$ + 2 * $hitAreaSize$$, $plotAreaDim$$.$h$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$), $chart$$17$$.$yScrollbar$.$addChild$($hitArea$$));
  $chart$$17$$.$overview$ && ($ovOptions_vertScrollbarDim$$ = {startTime:$chart$$17$$.$xAxis$.$getGlobalMin$(), endTime:$chart$$17$$.$xAxis$.$getGlobalMax$(), viewportStartTime:$chart$$17$$.$xAxis$.$getViewportMin$(), viewportEndTime:$chart$$17$$.$xAxis$.$getViewportMax$(), minimumWindowSize:$chart$$17$$.$xAxis$.$getMinimumExtent$(), chart:D.$DvtJSONUtils$$.clone($options$$73$$)}, D.$DvtChartEventUtils$$.$isZoomable$($chart$$17$$) || ($ovOptions_vertScrollbarDim$$.featuresOff = "zoom"), $chart$$17$$.$overview$.$setTranslateX$($plotAreaDim$$.x), 
  $chart$$17$$.$overview$.$render$($ovOptions_vertScrollbarDim$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$), $chart$$17$$.$overview$.$setViewportRange$($chart$$17$$.$xAxis$.$getViewportMin$(), $chart$$17$$.$xAxis$.$getViewportMax$()))
};
D.$DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($chart$$18$$) {
  var $options$$74_position$$28_tooltip$$34$$ = $chart$$18$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$18$$) && !$options$$74_position$$28_tooltip$$34$$._isOverview) {
    var $isTouch$$1$$ = D.$DvtAgent$$.$isTouchDevice$(), $isScrollable$$ = D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$18$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$18$$), $em$$1$$ = $chart$$18$$.$getEventManager$();
    $chart$$18$$.$dragButtons$ = new D.$DvtContainer$$($chart$$18$$.$_context$);
    var $resources$$23$$ = $options$$74_position$$28_tooltip$$34$$._resources;
    if("multiple" == $options$$74_position$$28_tooltip$$34$$.selection && ($isTouch$$1$$ || $isScrollable$$)) {
      $options$$74_position$$28_tooltip$$34$$ = $isScrollable$$ && ($isTouch$$1$$ || D.$DvtChartEventUtils$$.$isZoomable$($chart$$18$$)) ? "end" : "solo", $em$$1$$.$selectButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$18$$, $chart$$18$$.$dragButtons$, $resources$$23$$.selectUp, $resources$$23$$.selectDown, $em$$1$$.$onSelectButtonClick$, $em$$1$$, $options$$74_position$$28_tooltip$$34$$), $options$$74_position$$28_tooltip$$34$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$18$$.$Bundle$, 
      "MARQUEE_SELECT"), $em$$1$$.$associate$($em$$1$$.$selectButton$, new D.$DvtSimpleObjPeer$$($options$$74_position$$28_tooltip$$34$$))
    }
    $isScrollable$$ && ($options$$74_position$$28_tooltip$$34$$ = $em$$1$$.$selectButton$ == D.$JSCompiler_alias_NULL$$ ? "solo" : "start", $isTouch$$1$$ ? ($em$$1$$.$panButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$18$$, $chart$$18$$.$dragButtons$, $resources$$23$$.panUp, $resources$$23$$.panDown, $em$$1$$.$onPanButtonClick$, $em$$1$$, $options$$74_position$$28_tooltip$$34$$), $options$$74_position$$28_tooltip$$34$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$18$$.$Bundle$, 
    "PAN"), $em$$1$$.$associate$($em$$1$$.$panButton$, new D.$DvtSimpleObjPeer$$($options$$74_position$$28_tooltip$$34$$))) : D.$DvtChartEventUtils$$.$isZoomable$($chart$$18$$) && ($em$$1$$.$zoomButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$18$$, $chart$$18$$.$dragButtons$, $resources$$23$$.zoomUp, $resources$$23$$.zoomDown, $em$$1$$.$onZoomButtonClick$, $em$$1$$, $options$$74_position$$28_tooltip$$34$$), $options$$74_position$$28_tooltip$$34$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$18$$.$Bundle$, 
    "MARQUEE_ZOOM"), $em$$1$$.$associate$($em$$1$$.$zoomButton$, new D.$DvtSimpleObjPeer$$($options$$74_position$$28_tooltip$$34$$))));
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$18$$);
    (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$1$$, D.$JSCompiler_alias_NULL$$);
    0 < $chart$$18$$.$dragButtons$.$getNumChildren$() && ($chart$$18$$.$addChild$($chart$$18$$.$dragButtons$), $isTouch$$1$$ ? $isScrollable$$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($em$$1$$.$panButton$, D.$JSCompiler_alias_TRUE$$), $em$$1$$.$onPanButtonClick$()) : (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($chart$$18$$), $chart$$18$$.$dragButtons$.setCursor("default"))
  }
};
D.$DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($chart$$19_transX$$4$$, $button$$56$$, $availSpace$$49$$) {
  D.$DvtAgent$$.$isRightToLeft$($chart$$19_transX$$4$$.$_context$) ? ($chart$$19_transX$$4$$ = $availSpace$$49$$.x + D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $availSpace$$49$$.x += D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$) : $chart$$19_transX$$4$$ = $availSpace$$49$$.x + $availSpace$$49$$.$w$ - D.$DvtChartRenderer$$.$_BUTTON_SIZE$ - D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  $availSpace$$49$$.$w$ -= D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$56$$, $chart$$19_transX$$4$$, $availSpace$$49$$.y + D.$DvtChartRenderer$$.$_BUTTON_PADDING$)
};
D.$DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($chart$$20$$) {
  var $availSpace$$50$$ = $chart$$20$$.$_plotAreaSpace$.clone();
  $availSpace$$50$$.x += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$50$$.$w$ -= 2 * D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$50$$.y += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  var $em$$2$$ = $chart$$20$$.$getEventManager$();
  $em$$2$$.$selectButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$20$$, $em$$2$$.$selectButton$, $availSpace$$50$$);
  $em$$2$$.$panButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$20$$, $em$$2$$.$panButton$, $availSpace$$50$$);
  $em$$2$$.$zoomButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$20$$, $em$$2$$.$zoomButton$, $availSpace$$50$$)
};
D.$DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($context$$528$$, $position$$29$$) {
  var $background$$8_blcr$$1_cmd$$8$$ = 2, $trcr$$1$$ = 2, $isR2L_pos$$35$$ = D.$DvtAgent$$.$isRightToLeft$($context$$528$$);
  "start" == $position$$29$$ ? $isR2L_pos$$35$$ ? $background$$8_blcr$$1_cmd$$8$$ = 0 : $trcr$$1$$ = 0 : "end" == $position$$29$$ && ($isR2L_pos$$35$$ ? $trcr$$1$$ = 0 : $background$$8_blcr$$1_cmd$$8$$ = 0);
  var $isR2L_pos$$35$$ = -D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $size$$26$$ = D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $background$$8_blcr$$1_cmd$$8$$ = window.DvtPathUtils.$roundedRectangle$($isR2L_pos$$35$$, $isR2L_pos$$35$$, $size$$26$$, $size$$26$$, $background$$8_blcr$$1_cmd$$8$$, $trcr$$1$$, $trcr$$1$$, $background$$8_blcr$$1_cmd$$8$$), $background$$8_blcr$$1_cmd$$8$$ = new D.$DvtPath$$($context$$528$$, $background$$8_blcr$$1_cmd$$8$$);
  1 < D.$DvtAgent$$.$getDevicePixelRatio$() ? ($background$$8_blcr$$1_cmd$$8$$.$setSolidStroke$("#D8DEE3", 1, 1), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$8_blcr$$1_cmd$$8$$)) : $background$$8_blcr$$1_cmd$$8$$.$setSolidStroke$("#B8BDC1", 1, 1);
  return $background$$8_blcr$$1_cmd$$8$$
};
D.$DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($chart$$21_context$$529$$, $container$$63_isR2L$$1$$, $overDownState$$1_upSrc$$, $button$$57_downSrc$$, $callback$$107_enabled$$inline_5128_hitPadding$$, $callbackObj$$81$$, $hitArea$$1_position$$30$$) {
  $chart$$21_context$$529$$ = $chart$$21_context$$529$$.$_context$;
  var $upState$$12$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$21_context$$529$$, $hitArea$$1_position$$30$$);
  $upState$$12$$.$setSolidFill$("#FFFFFF", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $upState$$12$$.$addChild$(new D.$DvtImage$$($chart$$21_context$$529$$, $overDownState$$1_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $overState$$9$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$21_context$$529$$, $hitArea$$1_position$$30$$);
  $overState$$9$$.$setSolidFill$("#E2E3E4", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overState$$9$$.$addChild$(new D.$DvtImage$$($chart$$21_context$$529$$, $overDownState$$1_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $downState$$9$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$21_context$$529$$, $hitArea$$1_position$$30$$);
  $downState$$9$$.$setFill$(new D.$DvtLinearGradientFill$$(90, ["#0527CE", "#0586F0"], [D.$DvtChartRenderer$$.$_BUTTON_OPACITY$, D.$DvtChartRenderer$$.$_BUTTON_OPACITY$]));
  $downState$$9$$.$addChild$(new D.$DvtImage$$($chart$$21_context$$529$$, $button$$57_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $overDownState$$1_upSrc$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$21_context$$529$$, $hitArea$$1_position$$30$$);
  $overDownState$$1_upSrc$$.$setSolidFill$("#0586F0", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overDownState$$1_upSrc$$.$addChild$(new D.$DvtImage$$($chart$$21_context$$529$$, $button$$57_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $button$$57_downSrc$$ = new D.$DvtButton$$($chart$$21_context$$529$$, $upState$$12$$, $overState$$9$$, $downState$$9$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $callback$$107_enabled$$inline_5128_hitPadding$$, $callbackObj$$81$$);
  if(!$button$$57_downSrc$$.$overDownState$ || $button$$57_downSrc$$.$overDownState$ == $overDownState$$1_upSrc$$) {
    $callback$$107_enabled$$inline_5128_hitPadding$$ = D.$JSCompiler_alias_FALSE$$, $button$$57_downSrc$$.$overDownState$ && ($callback$$107_enabled$$inline_5128_hitPadding$$ = (0,D.$JSCompiler_StaticMethods__isButtonEnabled$$)($button$$57_downSrc$$.$overDownState$), $button$$57_downSrc$$.removeChild($button$$57_downSrc$$.$overDownState$)), $overDownState$$1_upSrc$$ && $button$$57_downSrc$$.$addChild$($overDownState$$1_upSrc$$), $button$$57_downSrc$$.$overDownState$ = $overDownState$$1_upSrc$$, (0,D.$JSCompiler_StaticMethods__enableButton$$)($button$$57_downSrc$$.$overDownState$, 
    $callback$$107_enabled$$inline_5128_hitPadding$$)
  }
  $button$$57_downSrc$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $container$$63_isR2L$$1$$.$addChild$($button$$57_downSrc$$);
  $button$$57_downSrc$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, function($chart$$21_context$$529$$) {
    $chart$$21_context$$529$$.stopPropagation()
  });
  D.$DvtAgent$$.$isTouchDevice$() && ($container$$63_isR2L$$1$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$21_context$$529$$), $callback$$107_enabled$$inline_5128_hitPadding$$ = 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $hitArea$$1_position$$30$$ = "solo" == $hitArea$$1_position$$30$$ ? new D.$DvtRect$$($chart$$21_context$$529$$, -$callback$$107_enabled$$inline_5128_hitPadding$$, -$callback$$107_enabled$$inline_5128_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$107_enabled$$inline_5128_hitPadding$$, 
  D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$107_enabled$$inline_5128_hitPadding$$) : "start" == $hitArea$$1_position$$30$$ && !$container$$63_isR2L$$1$$ || "end" == $hitArea$$1_position$$30$$ && $container$$63_isR2L$$1$$ ? new D.$DvtRect$$($chart$$21_context$$529$$, -$callback$$107_enabled$$inline_5128_hitPadding$$, -$callback$$107_enabled$$inline_5128_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$107_enabled$$inline_5128_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 
  2 * $callback$$107_enabled$$inline_5128_hitPadding$$) : new D.$DvtRect$$($chart$$21_context$$529$$, -0.5 * $callback$$107_enabled$$inline_5128_hitPadding$$, -$callback$$107_enabled$$inline_5128_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$107_enabled$$inline_5128_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$107_enabled$$inline_5128_hitPadding$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$1_position$$30$$), $button$$57_downSrc$$.$addChild$($hitArea$$1_position$$30$$));
  return $button$$57_downSrc$$
};
D.$DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($availSpace$$51$$) {
  $availSpace$$51$$.x = window.Math.round($availSpace$$51$$.x);
  $availSpace$$51$$.y = window.Math.round($availSpace$$51$$.y);
  $availSpace$$51$$.$w$ = window.Math.round($availSpace$$51$$.$w$);
  $availSpace$$51$$.$h$ = window.Math.round($availSpace$$51$$.$h$)
};
D.$DvtChartAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisRenderer$$, D.$DvtObj$$, "DvtChartAxisRenderer");
D.$DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($chart$$22$$, $container$$64_xAxisInfo$$, $availSpace$$52$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$22$$)) {
    var $options$$75$$ = $chart$$22$$.$getOptions$(), $isHorizGraph_leftOverflow$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$22$$), $isVertGraph_yAxisInfo$$ = D.$DvtChartTypeUtils$$.$isVertical$($chart$$22$$), $isPolarGraph_rightOverflow$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$22$$), $isR2L$$2$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$22$$.$_context$), $newWidth_numGroups$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$22$$), $totalAvailSpace$$ = $availSpace$$52$$.clone(), $axisGap_y2AxisInfo$$ = 
    $options$$75$$.layout.verticalAxisGap;
    if(D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$22$$)) {
      $isHorizGraph_leftOverflow$$ && ($axisGap_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$22$$, "x"), $availSpace$$52$$.y += $axisGap_y2AxisInfo$$, $availSpace$$52$$.$h$ -= 2 * $axisGap_y2AxisInfo$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$22$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$22$$)) {
        $isVertGraph_yAxisInfo$$ && ($axisGap_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$22$$, D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$22$$) ? "y" : "y2"), $availSpace$$52$$.y += $axisGap_y2AxisInfo$$, $availSpace$$52$$.$h$ -= 2 * $axisGap_y2AxisInfo$$)
      }else {
        if($isHorizGraph_leftOverflow$$ && D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$22$$, "x") && !D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$22$$, "y2") || $isVertGraph_yAxisInfo$$ && (D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$22$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$22$$, "y2"))) {
          $axisGap_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$22$$, $isHorizGraph_leftOverflow$$ ? "x" : "y"), $availSpace$$52$$.y += $axisGap_y2AxisInfo$$, $availSpace$$52$$.$h$ -= $axisGap_y2AxisInfo$$
        }
      }
    }
    "bubble" == $chart$$22$$.$getType$() && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$22$$, $availSpace$$52$$.$w$, $availSpace$$52$$.$h$);
    $isVertGraph_yAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createYAxis$($chart$$22$$, $container$$64_xAxisInfo$$, $availSpace$$52$$);
    $axisGap_y2AxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createY2Axis$($chart$$22$$, $container$$64_xAxisInfo$$, $availSpace$$52$$);
    D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$52$$, $isVertGraph_yAxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$22$$, "y"));
    D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$52$$, $axisGap_y2AxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$22$$, "y2"));
    "bubble" == $chart$$22$$.$getType$() && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$22$$, $availSpace$$52$$.$w$, $availSpace$$52$$.$h$);
    "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$22$$) && D.$DvtChartTypeUtils$$.$isBar$($chart$$22$$) && $availSpace$$52$$.$w$ > $newWidth_numGroups$$ && ($newWidth_numGroups$$ *= window.Math.floor($availSpace$$52$$.$w$ / $newWidth_numGroups$$), $availSpace$$52$$.x += ($availSpace$$52$$.$w$ - $newWidth_numGroups$$) / 2, $availSpace$$52$$.$w$ = $newWidth_numGroups$$);
    $container$$64_xAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createXAxis$($chart$$22$$, $container$$64_xAxisInfo$$, $availSpace$$52$$, $totalAvailSpace$$);
    $isPolarGraph_rightOverflow$$ ? ($container$$64_xAxisInfo$$.axis.$setTranslateX$($availSpace$$52$$.x), $container$$64_xAxisInfo$$.axis.$setTranslateY$($availSpace$$52$$.y), $container$$64_xAxisInfo$$.axis.$render$($container$$64_xAxisInfo$$.options, $availSpace$$52$$.$w$, $availSpace$$52$$.$h$)) : ($container$$64_xAxisInfo$$.axis.$render$($container$$64_xAxisInfo$$.options, $container$$64_xAxisInfo$$.$dim$.$w$, $container$$64_xAxisInfo$$.$dim$.$h$), D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$52$$, 
    $container$$64_xAxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$22$$, "x")));
    $isPolarGraph_rightOverflow$$ && $isVertGraph_yAxisInfo$$ ? ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($availSpace$$52$$.x), $isVertGraph_yAxisInfo$$.axis.$setTranslateY$($availSpace$$52$$.y), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, $availSpace$$52$$.$w$, $availSpace$$52$$.$h$)) : $isHorizGraph_leftOverflow$$ ? ($isVertGraph_yAxisInfo$$ && ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($availSpace$$52$$.x), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, 
    $availSpace$$52$$.$w$, $isVertGraph_yAxisInfo$$.$dim$.$h$)), $axisGap_y2AxisInfo$$ && ($isVertGraph_yAxisInfo$$ && this.$_alignYAxes$($isVertGraph_yAxisInfo$$.axis, $axisGap_y2AxisInfo$$.axis, $options$$75$$, $axisGap_y2AxisInfo$$.options), $axisGap_y2AxisInfo$$.axis.$setTranslateX$($availSpace$$52$$.x), $axisGap_y2AxisInfo$$.axis.$render$($axisGap_y2AxisInfo$$.options, $availSpace$$52$$.$w$, $axisGap_y2AxisInfo$$.$dim$.$h$)), $isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($isVertGraph_yAxisInfo$$.axis), 
    $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($isVertGraph_yAxisInfo$$.axis), $availSpace$$52$$.x += $isHorizGraph_leftOverflow$$, $availSpace$$52$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$) : ($isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($container$$64_xAxisInfo$$.axis), $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($container$$64_xAxisInfo$$.axis), $availSpace$$52$$.x += 
    $isHorizGraph_leftOverflow$$, $availSpace$$52$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$, $isVertGraph_yAxisInfo$$ && ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($isVertGraph_yAxisInfo$$.axis.$getTranslateX$() + ($isR2L$$2$$ ? -$isPolarGraph_rightOverflow$$ : $isHorizGraph_leftOverflow$$)), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, $isVertGraph_yAxisInfo$$.$dim$.$w$, $availSpace$$52$$.$h$)), $axisGap_y2AxisInfo$$ && ($isVertGraph_yAxisInfo$$ && 
    this.$_alignYAxes$($isVertGraph_yAxisInfo$$.axis, $axisGap_y2AxisInfo$$.axis, $options$$75$$, $axisGap_y2AxisInfo$$.options), $axisGap_y2AxisInfo$$.axis.$setTranslateX$($axisGap_y2AxisInfo$$.axis.$getTranslateX$() + ($isR2L$$2$$ ? $isHorizGraph_leftOverflow$$ : -$isPolarGraph_rightOverflow$$)), $axisGap_y2AxisInfo$$.axis.$render$($axisGap_y2AxisInfo$$.options, $axisGap_y2AxisInfo$$.$dim$.$w$, $availSpace$$52$$.$h$)));
    $chart$$22$$.$xAxis$ && ($chart$$22$$.$xAxis$.$destroy$(), $chart$$22$$.removeChild($chart$$22$$.$xAxis$));
    $chart$$22$$.$yAxis$ && ($chart$$22$$.$yAxis$.$destroy$(), $chart$$22$$.removeChild($chart$$22$$.$yAxis$));
    $chart$$22$$.$y2Axis$ && ($chart$$22$$.$y2Axis$.$destroy$(), $chart$$22$$.removeChild($chart$$22$$.$y2Axis$));
    $chart$$22$$.$xAxis$ = $container$$64_xAxisInfo$$.axis;
    $chart$$22$$.$yAxis$ = $isVertGraph_yAxisInfo$$ ? $isVertGraph_yAxisInfo$$.axis : D.$JSCompiler_alias_NULL$$;
    $chart$$22$$.$y2Axis$ = $axisGap_y2AxisInfo$$ ? $axisGap_y2AxisInfo$$.axis : D.$JSCompiler_alias_NULL$$
  }
};
D.$DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($chart$$23$$, $container$$65_maxWidth$$20$$, $availSpace$$53_isR2L$$3_maxHeight$$15$$, $axis$$20_totalAvailSpace$$1$$) {
  var $actualSize$$1_options$$76$$ = $chart$$23$$.$getOptions$(), $position$$31$$ = D.$DvtChartAxisUtils$$.$getXAxisPosition$($chart$$23$$), $isStandalone$$ = D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$23$$), $axisOptions$$ = D.$DvtJSONUtils$$.clone($actualSize$$1_options$$76$$.xAxis);
  $axisOptions$$.skin = $actualSize$$1_options$$76$$.skin;
  $axisOptions$$.layout.gapRatio = $chart$$23$$.$getGapRatio$();
  $axisOptions$$.position = $position$$31$$;
  $axisOptions$$.isStandalone = $isStandalone$$;
  $axisOptions$$.baselineScaling = $actualSize$$1_options$$76$$.xAxis.baselineScaling;
  $axisOptions$$.title = $actualSize$$1_options$$76$$.xAxis ? $actualSize$$1_options$$76$$.xAxis.title : D.$JSCompiler_alias_NULL$$;
  $axisOptions$$.groups = $actualSize$$1_options$$76$$.groups;
  $axisOptions$$.timeAxisType = $actualSize$$1_options$$76$$.timeAxisType && D.$DvtChartTypeUtils$$.$isTimeAxisSupported$($chart$$23$$) ? $actualSize$$1_options$$76$$.timeAxisType : "disabled";
  $axisOptions$$.zoomAndScroll = $actualSize$$1_options$$76$$.zoomAndScroll;
  $axisOptions$$._isOverview = $actualSize$$1_options$$76$$._isOverview;
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$23$$) && ($axisOptions$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$23$$) ? "polygon" : "circle", $axisOptions$$._radius = $chart$$23$$.$getRadius$(), $axisOptions$$._numGroups = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$23$$), $axisOptions$$.axisLine = D.$DvtJSONUtils$$.clone($actualSize$$1_options$$76$$.yAxis.axisLine));
  if(!D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$23$$)) {
    var $axisOffset_dataValues_isHoriz$$5$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$23$$, "x");
    $axisOptions$$.dataMin = $axisOptions$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$.dataMin : $axisOffset_dataValues_isHoriz$$5$$.min;
    $axisOptions$$.dataMax = $axisOptions$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$.dataMax : $axisOffset_dataValues_isHoriz$$5$$.max
  }
  "tangential" == $position$$31$$ && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$23$$) ? D.$DvtChartTypeUtils$$.$isBar$($chart$$23$$) ? ($axisOptions$$.startGroupOffset = 0.5, $axisOptions$$.endGroupOffset = 0.5) : $axisOptions$$.endGroupOffset = 1 : ($axisOffset_dataValues_isHoriz$$5$$ = D.$DvtChartAxisUtils$$.$getBarAxisOffset$($chart$$23$$), $axisOptions$$.startGroupOffset = $axisOffset_dataValues_isHoriz$$5$$, $axisOptions$$.endGroupOffset = $axisOffset_dataValues_isHoriz$$5$$);
  $axisOffset_dataValues_isHoriz$$5$$ = "top" == $position$$31$$ || "bottom" == $position$$31$$;
  $axisOptions$$.leftBuffer = $axisOffset_dataValues_isHoriz$$5$$ ? $availSpace$$53_isR2L$$3_maxHeight$$15$$.x - $axis$$20_totalAvailSpace$$1$$.x : 0;
  $axisOptions$$.rightBuffer = $axisOffset_dataValues_isHoriz$$5$$ ? $axis$$20_totalAvailSpace$$1$$.$w$ + $axis$$20_totalAvailSpace$$1$$.x - ($availSpace$$53_isR2L$$3_maxHeight$$15$$.$w$ + $availSpace$$53_isR2L$$3_maxHeight$$15$$.x) : 0;
  $axisOptions$$._renderGridAtLabels = !D.$DvtChartTypeUtils$$.$isBar$($chart$$23$$) || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$23$$);
  $axis$$20_totalAvailSpace$$1$$ = new D.$DvtChartAxis$$($chart$$23$$.$_context$, $chart$$23$$.$processEvent$, $chart$$23$$);
  $container$$65_maxWidth$$20$$.$addChild$($axis$$20_totalAvailSpace$$1$$);
  var $tickLabelGap$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$23$$, "x");
  $container$$65_maxWidth$$20$$ = $axisOffset_dataValues_isHoriz$$5$$ ? $availSpace$$53_isR2L$$3_maxHeight$$15$$.$w$ : $isStandalone$$ ? $availSpace$$53_isR2L$$3_maxHeight$$15$$.$w$ - $tickLabelGap$$ : $actualSize$$1_options$$76$$.layout.axisMaxSize * $availSpace$$53_isR2L$$3_maxHeight$$15$$.$w$;
  $availSpace$$53_isR2L$$3_maxHeight$$15$$ = $axisOffset_dataValues_isHoriz$$5$$ ? $isStandalone$$ ? $availSpace$$53_isR2L$$3_maxHeight$$15$$.$h$ - $tickLabelGap$$ : $actualSize$$1_options$$76$$.layout.axisMaxSize * $availSpace$$53_isR2L$$3_maxHeight$$15$$.$h$ : $availSpace$$53_isR2L$$3_maxHeight$$15$$.$h$;
  "tangential" == $position$$31$$ ? $actualSize$$1_options$$76$$ = new D.$DvtDimension$$(0, 0) : $actualSize$$1_options$$76$$._duringAnimation ? $axisOffset_dataValues_isHoriz$$5$$ ? ($actualSize$$1_options$$76$$ = new D.$DvtDimension$$($container$$65_maxWidth$$20$$, $chart$$23$$.$xAxis$.getHeight()), $availSpace$$53_isR2L$$3_maxHeight$$15$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$23$$.$_context$), $axisOptions$$._startOverflow = $availSpace$$53_isR2L$$3_maxHeight$$15$$ ? (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$23$$.$xAxis$) : 
  (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$23$$.$xAxis$), $axisOptions$$._endOverflow = $availSpace$$53_isR2L$$3_maxHeight$$15$$ ? (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$23$$.$xAxis$) : (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$23$$.$xAxis$)) : $actualSize$$1_options$$76$$ = new D.$DvtDimension$$($chart$$23$$.$xAxis$.getWidth(), $availSpace$$53_isR2L$$3_maxHeight$$15$$) : $actualSize$$1_options$$76$$ = $axis$$20_totalAvailSpace$$1$$.$getPreferredSize$($axisOptions$$, 
  $container$$65_maxWidth$$20$$, $availSpace$$53_isR2L$$3_maxHeight$$15$$);
  return{axis:$axis$$20_totalAvailSpace$$1$$, options:$axisOptions$$, position:$position$$31$$, $dim$:$actualSize$$1_options$$76$$}
};
D.$DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($actualSize$$2_chart$$24$$, $container$$66_maxWidth$$21$$, $availSpace$$54_maxHeight$$16$$) {
  var $options$$77$$ = $actualSize$$2_chart$$24$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2DataOnly$($actualSize$$2_chart$$24$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $position$$32$$ = D.$DvtChartAxisUtils$$.$getYAxisPosition$($actualSize$$2_chart$$24$$), $isHoriz$$6$$ = "top" == $position$$32$$ || "bottom" == $position$$32$$, $isStandalone$$1$$ = D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($actualSize$$2_chart$$24$$), $axisOptions$$1$$ = D.$DvtJSONUtils$$.clone($options$$77$$.yAxis);
  $axisOptions$$1$$.skin = $options$$77$$.skin;
  $axisOptions$$1$$.layout.gapRatio = $actualSize$$2_chart$$24$$.$getGapRatio$();
  $axisOptions$$1$$.position = $position$$32$$;
  $axisOptions$$1$$.isStandalone = $isStandalone$$1$$;
  $axisOptions$$1$$.baselineScaling = $options$$77$$.yAxis.baselineScaling;
  var $axis$$21_dataValues$$1_isR2L$$4$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($actualSize$$2_chart$$24$$, "y", D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$2_chart$$24$$));
  $axisOptions$$1$$.dataMin = $axisOptions$$1$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$1$$.dataMin : $axis$$21_dataValues$$1_isR2L$$4$$.min;
  $axisOptions$$1$$.dataMax = $axisOptions$$1$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$1$$.dataMax : $axis$$21_dataValues$$1_isR2L$$4$$.max;
  $axisOptions$$1$$.title = $options$$77$$.yAxis ? $options$$77$$.yAxis.title : D.$JSCompiler_alias_NULL$$;
  $axisOptions$$1$$.timeAxisType = "disabled";
  $axisOptions$$1$$.zoomAndScroll = $options$$77$$.zoomAndScroll;
  D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$2_chart$$24$$) && ($axisOptions$$1$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($actualSize$$2_chart$$24$$) ? "polygon" : "circle", $axisOptions$$1$$._radius = $actualSize$$2_chart$$24$$.$getRadius$(), $axisOptions$$1$$._numGroups = D.$DvtChartDataUtils$$.$getGroupCount$($actualSize$$2_chart$$24$$), $axisOptions$$1$$.axisLine = D.$DvtJSONUtils$$.clone($options$$77$$.xAxis.axisLine));
  $axisOptions$$1$$._useBaselineColor = D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$2_chart$$24$$);
  D.$DvtChartEventUtils$$.$isLiveScroll$($actualSize$$2_chart$$24$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$2_chart$$24$$) && !D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$2_chart$$24$$)) && ($axisOptions$$1$$._continuousExtent = "on");
  $isStandalone$$1$$ ? ($axisOptions$$1$$.leftBuffer = 0, $axisOptions$$1$$.rightBuffer = 0) : ($axis$$21_dataValues$$1_isR2L$$4$$ = D.$DvtAgent$$.$isRightToLeft$($actualSize$$2_chart$$24$$.$_context$), $axisOptions$$1$$.leftBuffer = $axis$$21_dataValues$$1_isR2L$$4$$ ? 0 : 10, $axisOptions$$1$$.rightBuffer = $axis$$21_dataValues$$1_isR2L$$4$$ ? 10 : 0);
  $axisOptions$$1$$._alwaysAlignRight = D.$JSCompiler_alias_TRUE$$;
  $axis$$21_dataValues$$1_isR2L$$4$$ = new D.$DvtChartAxis$$($actualSize$$2_chart$$24$$.$_context$, $actualSize$$2_chart$$24$$.$processEvent$, $actualSize$$2_chart$$24$$);
  $container$$66_maxWidth$$21$$.$addChild$($axis$$21_dataValues$$1_isR2L$$4$$);
  var $tickLabelGap$$1$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($actualSize$$2_chart$$24$$, "x");
  $container$$66_maxWidth$$21$$ = $isHoriz$$6$$ ? $availSpace$$54_maxHeight$$16$$.$w$ : $isStandalone$$1$$ ? $availSpace$$54_maxHeight$$16$$.$w$ - $tickLabelGap$$1$$ : $options$$77$$.layout.axisMaxSize * $availSpace$$54_maxHeight$$16$$.$w$;
  $availSpace$$54_maxHeight$$16$$ = $isHoriz$$6$$ ? $isStandalone$$1$$ ? $availSpace$$54_maxHeight$$16$$.$h$ - $tickLabelGap$$1$$ : $options$$77$$.layout.axisMaxSize * $availSpace$$54_maxHeight$$16$$.$h$ : $availSpace$$54_maxHeight$$16$$.$h$;
  $actualSize$$2_chart$$24$$ = "radial" == $position$$32$$ ? new D.$DvtDimension$$(0, 0) : $options$$77$$._duringAnimation ? $isHoriz$$6$$ ? new D.$DvtDimension$$($container$$66_maxWidth$$21$$, $actualSize$$2_chart$$24$$.$yAxis$.getHeight()) : new D.$DvtDimension$$($actualSize$$2_chart$$24$$.$yAxis$.getWidth(), $availSpace$$54_maxHeight$$16$$) : $axis$$21_dataValues$$1_isR2L$$4$$.$getPreferredSize$($axisOptions$$1$$, $container$$66_maxWidth$$21$$, $availSpace$$54_maxHeight$$16$$);
  $options$$77$$.yAxis.min = $axisOptions$$1$$.min;
  $options$$77$$.yAxis.max = $axisOptions$$1$$.max;
  return{axis:$axis$$21_dataValues$$1_isR2L$$4$$, options:$axisOptions$$1$$, position:$position$$32$$, $dim$:$actualSize$$2_chart$$24$$}
};
D.$DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($actualSize$$3_chart$$25$$, $container$$67_maxWidth$$22$$, $availSpace$$55_maxHeight$$17$$) {
  var $options$$78$$ = $actualSize$$3_chart$$25$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2Data$($actualSize$$3_chart$$25$$)) {
    var $position$$33$$ = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($actualSize$$3_chart$$25$$), $isHoriz$$7$$ = "top" == $position$$33$$ || "bottom" == $position$$33$$, $isStandalone$$2$$ = D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($actualSize$$3_chart$$25$$), $axisOptions$$2$$ = D.$DvtJSONUtils$$.clone($options$$78$$.y2Axis);
    $axisOptions$$2$$.skin = $options$$78$$.skin;
    $axisOptions$$2$$.layout.gapRatio = $actualSize$$3_chart$$25$$.$getGapRatio$();
    $axisOptions$$2$$.position = $position$$33$$;
    $axisOptions$$2$$.isStandalone = $isStandalone$$2$$;
    $axisOptions$$2$$.baselineScaling = $options$$78$$.y2Axis.baselineScaling;
    var $axis$$22_dataValues$$2_isR2L$$5$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($actualSize$$3_chart$$25$$, "y2", D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$3_chart$$25$$));
    $axisOptions$$2$$.dataMin = $axisOptions$$2$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$2$$.dataMin : $axis$$22_dataValues$$2_isR2L$$5$$.min;
    $axisOptions$$2$$.dataMax = $axisOptions$$2$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$2$$.dataMax : $axis$$22_dataValues$$2_isR2L$$5$$.max;
    $axisOptions$$2$$.title = $options$$78$$.y2Axis ? $options$$78$$.y2Axis.title : D.$JSCompiler_alias_NULL$$;
    $axisOptions$$2$$.timeAxisType = "disabled";
    $axisOptions$$2$$.zoomAndScroll = $options$$78$$.zoomAndScroll;
    D.$DvtChartEventUtils$$.$isLiveScroll$($actualSize$$3_chart$$25$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$3_chart$$25$$) && !D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$3_chart$$25$$)) && ($axisOptions$$2$$._continuousExtent = "on");
    $isStandalone$$2$$ ? ($axisOptions$$2$$.leftBuffer = 0, $axisOptions$$2$$.rightBuffer = 0) : ($axis$$22_dataValues$$2_isR2L$$5$$ = D.$DvtAgent$$.$isRightToLeft$($actualSize$$3_chart$$25$$.$_context$), $axisOptions$$2$$.leftBuffer = $axis$$22_dataValues$$2_isR2L$$5$$ ? 0 : 10, $axisOptions$$2$$.rightBuffer = $axis$$22_dataValues$$2_isR2L$$5$$ ? 10 : 0);
    $axisOptions$$2$$._alwaysAlignRight = D.$JSCompiler_alias_TRUE$$;
    $axis$$22_dataValues$$2_isR2L$$5$$ = new D.$DvtChartAxis$$($actualSize$$3_chart$$25$$.$_context$, $actualSize$$3_chart$$25$$.$processEvent$, $actualSize$$3_chart$$25$$);
    $container$$67_maxWidth$$22$$.$addChild$($axis$$22_dataValues$$2_isR2L$$5$$);
    var $tickLabelGap$$2$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($actualSize$$3_chart$$25$$, "x");
    $container$$67_maxWidth$$22$$ = $isHoriz$$7$$ ? $availSpace$$55_maxHeight$$17$$.$w$ : $isStandalone$$2$$ ? $availSpace$$55_maxHeight$$17$$.$w$ - $tickLabelGap$$2$$ : $options$$78$$.layout.axisMaxSize * $availSpace$$55_maxHeight$$17$$.$w$;
    $availSpace$$55_maxHeight$$17$$ = $isHoriz$$7$$ ? $isStandalone$$2$$ ? $availSpace$$55_maxHeight$$17$$.$h$ - $tickLabelGap$$2$$ : $options$$78$$.layout.axisMaxSize * $availSpace$$55_maxHeight$$17$$.$h$ : $availSpace$$55_maxHeight$$17$$.$h$;
    $actualSize$$3_chart$$25$$ = $options$$78$$._duringAnimation ? $isHoriz$$7$$ ? new D.$DvtDimension$$($container$$67_maxWidth$$22$$, $actualSize$$3_chart$$25$$.$y2Axis$.getHeight()) : new D.$DvtDimension$$($actualSize$$3_chart$$25$$.$y2Axis$.getWidth(), $availSpace$$55_maxHeight$$17$$) : $axis$$22_dataValues$$2_isR2L$$5$$.$getPreferredSize$($axisOptions$$2$$, $container$$67_maxWidth$$22$$, $availSpace$$55_maxHeight$$17$$);
    $options$$78$$.y2Axis.min = $axisOptions$$2$$.min;
    $options$$78$$.y2Axis.max = $axisOptions$$2$$.max;
    return{axis:$axis$$22_dataValues$$2_isR2L$$5$$, options:$axisOptions$$2$$, position:$position$$33$$, $dim$:$actualSize$$3_chart$$25$$}
  }
};
D.$DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($minorTickCount_yAxis$$, $y2Axis$$, $options$$79$$, $y2AxisOptions$$) {
  var $majorTickCount$$ = $minorTickCount_yAxis$$.$getMajorTickCount$();
  $minorTickCount_yAxis$$ = $minorTickCount_yAxis$$.$getMinorTickCount$();
  "on" == $options$$79$$.y2Axis.alignTickMarks && $options$$79$$.y2Axis.step == D.$JSCompiler_alias_NULL$$ && ($y2Axis$$.$setMajorTickCount$($majorTickCount$$), $y2Axis$$.$setMinorTickCount$($minorTickCount_yAxis$$), $y2AxisOptions$$.step = $y2Axis$$.$getMajorIncrement$(), $y2AxisOptions$$.minorStep = $y2Axis$$.$getMinorIncrement$())
};
D.$DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($availSpace$$56_bounds$$79$$, $axisInfo$$1_shiftedPos$$, $gap$$9$$) {
  if($axisInfo$$1_shiftedPos$$) {
    if($axisInfo$$1_shiftedPos$$.options.isStandalone) {
      var $excessHeight$$ = $availSpace$$56_bounds$$79$$.$h$ - $axisInfo$$1_shiftedPos$$.$dim$.$h$ - $gap$$9$$, $excessWidth$$ = $availSpace$$56_bounds$$79$$.$w$ - $axisInfo$$1_shiftedPos$$.$dim$.$w$ - $gap$$9$$;
      "top" == $axisInfo$$1_shiftedPos$$.position ? ($availSpace$$56_bounds$$79$$.y += $excessHeight$$, $availSpace$$56_bounds$$79$$.$h$ -= $excessHeight$$) : "bottom" == $axisInfo$$1_shiftedPos$$.position ? $availSpace$$56_bounds$$79$$.$h$ -= $excessHeight$$ : "left" == $axisInfo$$1_shiftedPos$$.position ? ($availSpace$$56_bounds$$79$$.x += $excessWidth$$, $availSpace$$56_bounds$$79$$.$w$ -= $excessWidth$$) : "right" == $axisInfo$$1_shiftedPos$$.position && ($availSpace$$56_bounds$$79$$.$w$ -= $excessWidth$$)
    }
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$56_bounds$$79$$, $axisInfo$$1_shiftedPos$$.position, $axisInfo$$1_shiftedPos$$.axis, $axisInfo$$1_shiftedPos$$.$dim$.$w$, $axisInfo$$1_shiftedPos$$.$dim$.$h$, $gap$$9$$);
    if($availSpace$$56_bounds$$79$$ = $axisInfo$$1_shiftedPos$$.axis.$_bounds$) {
      $axisInfo$$1_shiftedPos$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($axisInfo$$1_shiftedPos$$.axis, new D.$DvtPoint$$($availSpace$$56_bounds$$79$$.x, $availSpace$$56_bounds$$79$$.y)), $availSpace$$56_bounds$$79$$.x = $axisInfo$$1_shiftedPos$$.x, $availSpace$$56_bounds$$79$$.y = $axisInfo$$1_shiftedPos$$.y
    }
  }
};
D.$DvtChartAxisRenderer$$.$_getTickLabelGap$ = function $$DvtChartAxisRenderer$$$$_getTickLabelGap$$($chart$$26$$, $type$$166$$) {
  var $gapHeight$$2_options$$80$$ = $chart$$26$$.$getOptions$(), $isHorizGraph$$1$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$26$$), $scalingFactor$$ = D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$26$$, $type$$166$$), $gapWidth$$2$$ = $gapHeight$$2_options$$80$$.layout.tickLabelGapWidth * $scalingFactor$$, $gapHeight$$2_options$$80$$ = $gapHeight$$2_options$$80$$.layout.tickLabelGapHeight * $scalingFactor$$;
  return"x" == $type$$166$$ ? D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$26$$, "x") ? $isHorizGraph$$1$$ ? $gapWidth$$2$$ : $gapHeight$$2_options$$80$$ : 0 : "y" == $type$$166$$ ? D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$26$$, "y") ? $isHorizGraph$$1$$ ? $gapHeight$$2_options$$80$$ : $gapWidth$$2$$ : 0 : D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$26$$, "y2") ? $isHorizGraph$$1$$ ? $gapHeight$$2_options$$80$$ : $gapWidth$$2$$ : 0
};
D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$ = function $$DvtChartAxisRenderer$$$$_getGapScalingFactor$$($chart$$27$$, $type$$167$$) {
  var $options$$81$$ = $chart$$27$$.$getOptions$(), $tickLabelStyle$$ = ("x" == $type$$167$$ ? $options$$81$$.xAxis : "y" == $type$$167$$ ? $options$$81$$.yAxis : $options$$81$$.y2Axis).tickLabel.style;
  $tickLabelStyle$$ instanceof D.$DvtCSSStyle$$ || ($tickLabelStyle$$ = new D.$DvtCSSStyle$$($tickLabelStyle$$));
  (0,D.$JSCompiler_StaticMethods_mergeUnder$$)($tickLabelStyle$$, (0,D.$DvtAxis$getDefaults$$)($options$$81$$.skin).tickLabel.style);
  return(0,window.parseInt)($tickLabelStyle$$.$getStyle$("font-size")) / 11
};
D.$DvtChartLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLegendRenderer$$, D.$DvtObj$$, "DvtChartLegendRenderer");
D.$DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($chart$$57$$, $container$$89$$, $availSpace$$79_bounds$$80$$) {
  var $gap$$10_options$$89$$ = $chart$$57$$.$getOptions$(), $position$$40_shiftedPos$$1$$ = $gap$$10_options$$89$$.legend.position, $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ = $gap$$10_options$$89$$.legend.scrolling;
  if("on" == $gap$$10_options$$89$$.legend.rendered) {
    var $legendOptions$$6$$ = D.$DvtJSONUtils$$.clone($gap$$10_options$$89$$.legend);
    delete $legendOptions$$6$$.position;
    $legendOptions$$6$$.skin = $gap$$10_options$$89$$.skin;
    $legendOptions$$6$$.layout.gapRatio = $chart$$57$$.$getGapRatio$();
    $legendOptions$$6$$.hideAndShowBehavior = D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$57$$);
    $legendOptions$$6$$.hoverBehavior = D.$DvtChartEventUtils$$.$getHoverBehavior$($chart$$57$$);
    D.$DvtChartLegendRenderer$$.$_addLegendData$($chart$$57$$, $legendOptions$$6$$);
    if(0 != $legendOptions$$6$$.sections.length) {
      var $legend$$29$$ = (0,D.$DvtLegend$newInstance$$)($chart$$57$$.$_context$, $chart$$57$$.$processEvent$, $chart$$57$$);
      $chart$$57$$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$29$$.setId($chart$$57$$.getId() + "legend");
      $container$$89$$.$addChild$($legend$$29$$);
      "auto" == $position$$40_shiftedPos$$1$$ && "asNeeded" !== $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ ? $position$$40_shiftedPos$$1$$ = $availSpace$$79_bounds$$80$$.$w$ >= $availSpace$$79_bounds$$80$$.$h$ ? "end" : "bottom" : "auto" == $position$$40_shiftedPos$$1$$ && "asNeeded" == $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ && ($position$$40_shiftedPos$$1$$ = "end");
      $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ = D.$DvtAgent$$.$isRightToLeft$($chart$$57$$.$_context$);
      "start" == $position$$40_shiftedPos$$1$$ ? $position$$40_shiftedPos$$1$$ = $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ ? "right" : "left" : "end" == $position$$40_shiftedPos$$1$$ && ($position$$40_shiftedPos$$1$$ = $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ ? "left" : "right");
      $legendOptions$$6$$.orientation = "left" == $position$$40_shiftedPos$$1$$ || "right" == $position$$40_shiftedPos$$1$$ ? "vertical" : "horizontal";
      $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ = "top" == $position$$40_shiftedPos$$1$$ || "bottom" == $position$$40_shiftedPos$$1$$;
      $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ = $legend$$29$$.$getPreferredSize$($legendOptions$$6$$, $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ ? $availSpace$$79_bounds$$80$$.$w$ : $gap$$10_options$$89$$.layout.legendMaxSize * $availSpace$$79_bounds$$80$$.$w$, $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$ ? $gap$$10_options$$89$$.layout.legendMaxSize * $availSpace$$79_bounds$$80$$.$h$ : $availSpace$$79_bounds$$80$$.$h$);
      $legend$$29$$.$render$($legendOptions$$6$$, $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$.$w$, $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$.$h$);
      $gap$$10_options$$89$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$57$$, $gap$$10_options$$89$$.layout.legendGap);
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$79_bounds$$80$$, $position$$40_shiftedPos$$1$$, $legend$$29$$, $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$.$w$, $actualSize$$4_isHoriz$$8_isRTL$$7_scrolling$$1$$.$h$, $gap$$10_options$$89$$);
      $availSpace$$79_bounds$$80$$ = $legend$$29$$.$_bounds$;
      $position$$40_shiftedPos$$1$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($legend$$29$$, new D.$DvtPoint$$($availSpace$$79_bounds$$80$$.x, $availSpace$$79_bounds$$80$$.y));
      $availSpace$$79_bounds$$80$$.x = $position$$40_shiftedPos$$1$$.x;
      $availSpace$$79_bounds$$80$$.y = $position$$40_shiftedPos$$1$$.y;
      $chart$$57$$.legend && ($chart$$57$$.legend.$destroy$(), $container$$89$$.removeChild($chart$$57$$.legend));
      $chart$$57$$.legend = $legend$$29$$
    }
  }
};
D.$DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($chart$$58$$, $legendOptions$$7$$) {
  var $chartOptions$$2$$ = $chart$$58$$.$getOptions$();
  $legendOptions$$7$$.title = $chartOptions$$2$$.legend ? $chartOptions$$2$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$7$$.sections = [];
  var $refObjItems_seriesItems$$2$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItems$($chart$$58$$);
  0 < $refObjItems_seriesItems$$2$$.length && $legendOptions$$7$$.sections.push({items:$refObjItems_seriesItems$$2$$});
  D.$DvtChartLegendRenderer$$.$_addLegendSections$($chart$$58$$, $legendOptions$$7$$.sections);
  $refObjItems_seriesItems$$2$$ = D.$DvtChartLegendRenderer$$.$_getRefObjItems$($chart$$58$$);
  0 < $refObjItems_seriesItems$$2$$.length && $legendOptions$$7$$.sections.push({items:$refObjItems_seriesItems$$2$$, title:$chartOptions$$2$$.legend ? $chartOptions$$2$$.legend.referenceObjectTitle : D.$JSCompiler_alias_NULL$$});
  return $legendOptions$$7$$
};
D.$DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($chart$$59$$) {
  var $ret$$51$$ = [], $legendItem$$1$$;
  if("pie" == $chart$$59$$.$getType$()) {
    for(var $seriesCount$$11_seriesIndices$$1$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$($chart$$59$$), $seriesIndex$$15$$, $i$$478$$ = 0;$i$$478$$ < $seriesCount$$11_seriesIndices$$1$$.length;$i$$478$$++) {
      $seriesIndex$$15$$ = $seriesCount$$11_seriesIndices$$1$$[$i$$478$$], ($legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$59$$, $seriesIndex$$15$$)) && $ret$$51$$.push($legendItem$$1$$)
    }
    D.$DvtPieChartUtils$$.$hasOtherSeries$($chart$$59$$) && ($legendItem$$1$$ = {id:D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, text:(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$59$$.$Bundle$, "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), categoryVisibility:D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$59$$), type:"marker", color:$chart$$59$$.$getOptions$().styleDefaults.otherColor, borderColor:$chart$$59$$.$getOptions$().styleDefaults.borderColor}, $ret$$51$$.push($legendItem$$1$$))
  }else {
    $seriesCount$$11_seriesIndices$$1$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$59$$);
    for($seriesIndex$$15$$ = 0;$seriesIndex$$15$$ < $seriesCount$$11_seriesIndices$$1$$;$seriesIndex$$15$$++) {
      ($legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$59$$, $seriesIndex$$15$$)) && $ret$$51$$.push($legendItem$$1$$)
    }
  }
  D.$DvtChartTypeUtils$$.$isStacked$($chart$$59$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$59$$) && $ret$$51$$.reverse();
  return $ret$$51$$
};
D.$DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($chart$$60$$, $seriesIndex$$16$$) {
  var $seriesItem$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$60$$, $seriesIndex$$16$$), $chartType$$ = $chart$$60$$.$getType$();
  if(!$seriesItem$$ || "off" == $seriesItem$$.displayInLegend || "on" != $seriesItem$$.displayInLegend && !D.$DvtChartDataUtils$$.$hasSeriesData$($chart$$60$$, $seriesIndex$$16$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $legendItem$$2_seriesLabel$$1$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$60$$, $seriesIndex$$16$$);
  if(!$legendItem$$2_seriesLabel$$1$$ || 0 >= $legendItem$$2_seriesLabel$$1$$.trim().length) {
    return D.$JSCompiler_alias_NULL$$
  }
  $legendItem$$2_seriesLabel$$1$$ = {id:D.$DvtChartDataUtils$$.$getSeries$($chart$$60$$, $seriesIndex$$16$$), text:$legendItem$$2_seriesLabel$$1$$, categoryVisibility:$seriesItem$$.visibility};
  "line" == $chartType$$ ? ($legendItem$$2_seriesLabel$$1$$.lineStyle = D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$60$$, $seriesIndex$$16$$), $legendItem$$2_seriesLabel$$1$$.lineWidth = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$60$$, $seriesIndex$$16$$), "on" == D.$DvtChartStyleUtils$$.$getMarkerDisplayed$($chart$$60$$, $seriesIndex$$16$$) ? ($legendItem$$2_seriesLabel$$1$$.type = "lineWithMarker", $legendItem$$2_seriesLabel$$1$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$60$$, 
  $seriesIndex$$16$$), $legendItem$$2_seriesLabel$$1$$.markerColor = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$60$$, $seriesIndex$$16$$)) : $legendItem$$2_seriesLabel$$1$$.type = "line") : "scatter" == $chartType$$ || "bubble" == $chartType$$ ? ($legendItem$$2_seriesLabel$$1$$.type = "marker", $legendItem$$2_seriesLabel$$1$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$60$$, $seriesIndex$$16$$)) : $legendItem$$2_seriesLabel$$1$$.type = "marker";
  $legendItem$$2_seriesLabel$$1$$.color = D.$DvtChartStyleUtils$$.$getColor$($chart$$60$$, $seriesIndex$$16$$);
  $legendItem$$2_seriesLabel$$1$$.borderColor = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$60$$, $seriesIndex$$16$$);
  $legendItem$$2_seriesLabel$$1$$.pattern = D.$DvtChartStyleUtils$$.$getPattern$($chart$$60$$, $seriesIndex$$16$$);
  "bubble" == $chartType$$ && ($legendItem$$2_seriesLabel$$1$$._borderWidth = 0.5);
  $legendItem$$2_seriesLabel$$1$$.action = $seriesItem$$.action;
  $legendItem$$2_seriesLabel$$1$$._spb = $chart$$60$$.$getShowPopupBehaviors$($seriesItem$$._id);
  return $legendItem$$2_seriesLabel$$1$$
};
D.$DvtChartLegendRenderer$$.$_addLegendSections$ = function $$DvtChartLegendRenderer$$$$_addLegendSections$$($chart$$61$$, $sections$$3$$) {
  var $options$$90$$ = $chart$$61$$.$getOptions$();
  if($options$$90$$ && $options$$90$$.legend && $options$$90$$.legend.sections) {
    for(var $i$$479$$ = 0;$i$$479$$ < $options$$90$$.legend.sections.length;$i$$479$$++) {
      var $dataSection$$1$$ = $options$$90$$.legend.sections[$i$$479$$];
      $dataSection$$1$$ && $dataSection$$1$$.items && $sections$$3$$.push({title:$dataSection$$1$$.title, items:$dataSection$$1$$.items})
    }
  }
};
D.$DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($chart$$62_refObjs$$) {
  $chart$$62_refObjs$$ = D.$DvtChartRefObjUtils$$.$getObjects$($chart$$62_refObjs$$);
  if(0 >= $chart$$62_refObjs$$.length) {
    return[]
  }
  for(var $items$$6$$ = [], $i$$480$$ = 0;$i$$480$$ < $chart$$62_refObjs$$.length;$i$$480$$++) {
    var $refObj$$3$$ = $chart$$62_refObjs$$[$i$$480$$];
    if($refObj$$3$$ && "on" == $refObj$$3$$.displayInLegend && $refObj$$3$$.text) {
      var $type$$169$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$3$$);
      $items$$6$$.push({type:"area" == $type$$169$$ ? "square" : "line", text:$refObj$$3$$.text, color:D.$DvtChartRefObjUtils$$.$getColor$($refObj$$3$$), lineStyle:$refObj$$3$$.lineStyle, lineWidth:D.$DvtChartRefObjUtils$$.$getLineWidth$($refObj$$3$$)})
    }
  }
  return $items$$6$$
};
D.$DvtPlotAreaRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPlotAreaRenderer$$, D.$DvtObj$$, "DvtPlotAreaRenderer");
D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
D.$DvtPlotAreaRenderer$$.$render$ = function $$DvtPlotAreaRenderer$$$$render$$($chart$$38$$, $container$$74$$, $availSpace$$60$$) {
  "off" == $chart$$38$$.$getOptions$().plotArea.rendered ? D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$38$$, $container$$74$$, $availSpace$$60$$) : ($chart$$38$$.$_currentMarkers$ = [], $chart$$38$$.$_currentAreas$ = [], D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$($chart$$38$$, $container$$74$$, $availSpace$$60$$), D.$DvtPlotAreaRenderer$$.$_renderGridLines$($chart$$38$$, $container$$74$$, $availSpace$$60$$), D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$38$$, $container$$74$$, 
  $availSpace$$60$$), D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$($chart$$38$$, $container$$74$$, $availSpace$$60$$))
};
D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderBackgroundObjects$$($chart$$39$$, $container$$75$$, $availSpace$$61$$) {
  var $areaContainer_options$$83$$ = $chart$$39$$.$getOptions$(), $background$$9_cx$$33_points$$38$$, $context$$533$$ = $chart$$39$$.$_context$;
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$39$$)) {
    $background$$9_cx$$33_points$$38$$ = $availSpace$$61$$.x + $availSpace$$61$$.$w$ / 2;
    var $cy$$34$$ = $availSpace$$61$$.y + $availSpace$$61$$.$h$ / 2;
    D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$39$$) ? ($background$$9_cx$$33_points$$38$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($background$$9_cx$$33_points$$38$$, $cy$$34$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$39$$), $chart$$39$$.$getRadius$()), $background$$9_cx$$33_points$$38$$ = new D.$DvtPolygon$$($context$$533$$, $background$$9_cx$$33_points$$38$$)) : $background$$9_cx$$33_points$$38$$ = new D.$DvtCircle$$($context$$533$$, $background$$9_cx$$33_points$$38$$, $cy$$34$$, 
    $chart$$39$$.$getRadius$())
  }else {
    $background$$9_cx$$33_points$$38$$ = new D.$DvtRect$$($context$$533$$, $availSpace$$61$$.x, $availSpace$$61$$.y, $availSpace$$61$$.$w$, $availSpace$$61$$.$h$)
  }
  $areaContainer_options$$83$$.plotArea.backgroundColor ? $background$$9_cx$$33_points$$38$$.$setSolidFill$($areaContainer_options$$83$$.plotArea.backgroundColor) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$9_cx$$33_points$$38$$);
  $container$$75$$.$addChild$($background$$9_cx$$33_points$$38$$);
  $chart$$39$$.$getEventManager$().$associate$($background$$9_cx$$33_points$$38$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$PLOT_AREA$)));
  if($areaContainer_options$$83$$.xAxis.referenceObjects || $areaContainer_options$$83$$.yAxis.referenceObjects || $areaContainer_options$$83$$.y2Axis.referenceObjects) {
    window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$39$$, $container$$75$$, $availSpace$$61$$), D.$DvtRefObjRenderer$$.$renderBackgroundObjects$($chart$$39$$, $availSpace$$61$$)
  }
  if(D.$DvtChartTypeUtils$$.$isArea$($chart$$39$$) || D.$DvtChartTypeUtils$$.$isCombo$($chart$$39$$)) {
    $areaContainer_options$$83$$ = new D.$DvtContainer$$($context$$533$$), $container$$75$$.$addChild$($areaContainer_options$$83$$), D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$39$$, $areaContainer_options$$83$$, $availSpace$$61$$), $chart$$39$$.$_areaContainer$ = $areaContainer_options$$83$$
  }
};
D.$DvtPlotAreaRenderer$$.$_renderGridLines$ = function $$DvtPlotAreaRenderer$$$$_renderGridLines$$($chart$$40$$, $container$$76$$, $availSpace$$62$$) {
  var $context$$534$$ = $container$$76$$.$_context$, $options$$84_renderY2Axis$$ = $chart$$40$$.$getOptions$(), $renderXAxis$$ = $chart$$40$$.$xAxis$ && "off" != $options$$84_renderY2Axis$$.xAxis.rendered, $renderYAxis$$ = $chart$$40$$.$yAxis$ && "off" != $options$$84_renderY2Axis$$.yAxis.rendered, $options$$84_renderY2Axis$$ = $chart$$40$$.$y2Axis$ && "off" != $options$$84_renderY2Axis$$.y2Axis.rendered;
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$76$$, $availSpace$$62$$, $chart$$40$$.$xAxis$, $chart$$40$$.$xAxis$.$getMinorGridLines$($context$$534$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$76$$, $availSpace$$62$$, $chart$$40$$.$yAxis$, $chart$$40$$.$yAxis$.$getMinorGridLines$($context$$534$$));
  $options$$84_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$76$$, $availSpace$$62$$, $chart$$40$$.$y2Axis$, $chart$$40$$.$y2Axis$.$getMinorGridLines$($context$$534$$));
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$76$$, $availSpace$$62$$, $chart$$40$$.$xAxis$, $chart$$40$$.$xAxis$.$getMajorGridLines$($context$$534$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$76$$, $availSpace$$62$$, $chart$$40$$.$yAxis$, $chart$$40$$.$yAxis$.$getMajorGridLines$($context$$534$$));
  $options$$84_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$76$$, $availSpace$$62$$, $chart$$40$$.$y2Axis$, $chart$$40$$.$y2Axis$.$getMajorGridLines$($context$$534$$))
};
D.$DvtPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtPlotAreaRenderer$$$$_renderAxisLines$$($chart$$41$$, $container$$77$$, $availSpace$$63$$) {
  var $options$$85_renderY2Axis$$1$$ = $chart$$41$$.$getOptions$(), $renderXAxis$$1$$ = $chart$$41$$.$xAxis$ && "off" != $options$$85_renderY2Axis$$1$$.xAxis.rendered, $renderYAxis$$1$$ = $chart$$41$$.$yAxis$ && "off" != $options$$85_renderY2Axis$$1$$.yAxis.rendered, $options$$85_renderY2Axis$$1$$ = $chart$$41$$.$y2Axis$ && "off" != $options$$85_renderY2Axis$$1$$.y2Axis.rendered, $isPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$41$$);
  $renderXAxis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$77$$, $availSpace$$63$$, $isPolar$$ ? $chart$$41$$.$yAxis$ : $chart$$41$$.$xAxis$);
  $renderYAxis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$77$$, $availSpace$$63$$, $isPolar$$ ? $chart$$41$$.$xAxis$ : $chart$$41$$.$yAxis$);
  $options$$85_renderY2Axis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$77$$, $availSpace$$63$$, $chart$$41$$.$y2Axis$)
};
D.$DvtPlotAreaRenderer$$.$_positionGridLines$ = function $$DvtPlotAreaRenderer$$$$_positionGridLines$$($container$$78$$, $availSpace$$64$$, $axis$$27$$, $gridlines$$) {
  for(var $position$$36$$ = $axis$$27$$.$getPosition$(), $i$$469$$ = 0;$i$$469$$ < $gridlines$$.length;$i$$469$$++) {
    var $gridline$$ = $gridlines$$[$i$$469$$];
    $container$$78$$.$addChild$($gridline$$);
    "radial" == $position$$36$$ || "tangential" == $position$$36$$ ? ($gridline$$.$setTranslateX$($availSpace$$64$$.x + $availSpace$$64$$.$w$ / 2), $gridline$$.$setTranslateY$($availSpace$$64$$.y + $availSpace$$64$$.$h$ / 2)) : "top" == $position$$36$$ || "bottom" == $position$$36$$ ? ($gridline$$.$setY1$($availSpace$$64$$.y), $gridline$$.$setY2$($availSpace$$64$$.y + $availSpace$$64$$.$h$), $gridline$$.$setX1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$27$$, $gridline$$.$getX1$())), 
    $gridline$$.$setX2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$27$$, $gridline$$.$getX2$()))) : ($gridline$$.$setX1$($availSpace$$64$$.x), $gridline$$.$setX2$($availSpace$$64$$.x + $availSpace$$64$$.$w$), $gridline$$.$setY1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$27$$, $gridline$$.$getY1$())), $gridline$$.$setY2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$27$$, $gridline$$.$getY2$())))
  }
};
D.$DvtPlotAreaRenderer$$.$_positionAxisLine$ = function $$DvtPlotAreaRenderer$$$$_positionAxisLine$$($container$$79_position$$37$$, $availSpace$$65$$, $axis$$28$$) {
  var $axisLine$$ = $axis$$28$$.$getAxisLine$($container$$79_position$$37$$.$_context$);
  $axisLine$$ && ($container$$79_position$$37$$.$addChild$($axisLine$$), $container$$79_position$$37$$ = $axis$$28$$.$getPosition$(), "radial" == $container$$79_position$$37$$ || "tangential" == $container$$79_position$$37$$ ? ($axisLine$$.$setTranslateX$($availSpace$$65$$.x + $availSpace$$65$$.$w$ / 2), $axisLine$$.$setTranslateY$($availSpace$$65$$.y + $availSpace$$65$$.$h$ / 2)) : "top" == $container$$79_position$$37$$ ? ($axisLine$$.$setX1$($availSpace$$65$$.x), $axisLine$$.$setX2$($availSpace$$65$$.x + 
  $availSpace$$65$$.$w$), $axisLine$$.$setY1$($availSpace$$65$$.y), $axisLine$$.$setY2$($availSpace$$65$$.y)) : "bottom" == $container$$79_position$$37$$ ? ($axisLine$$.$setX1$($availSpace$$65$$.x), $axisLine$$.$setX2$($availSpace$$65$$.x + $availSpace$$65$$.$w$), $axisLine$$.$setY1$($availSpace$$65$$.y + $availSpace$$65$$.$h$), $axisLine$$.$setY2$($availSpace$$65$$.y + $availSpace$$65$$.$h$)) : "left" == $container$$79_position$$37$$ ? ($axisLine$$.$setX1$($availSpace$$65$$.x), $axisLine$$.$setX2$($availSpace$$65$$.x), 
  $axisLine$$.$setY1$($availSpace$$65$$.y), $axisLine$$.$setY2$($availSpace$$65$$.y + $availSpace$$65$$.$h$)) : "right" == $container$$79_position$$37$$ && ($axisLine$$.$setX1$($availSpace$$65$$.x + $availSpace$$65$$.$w$), $axisLine$$.$setX2$($availSpace$$65$$.x + $availSpace$$65$$.$w$), $axisLine$$.$setY1$($availSpace$$65$$.y), $axisLine$$.$setY2$($availSpace$$65$$.y + $availSpace$$65$$.$h$)))
};
D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderForegroundObjects$$($chart$$42$$, $container$$80_selected$$15$$, $availSpace$$66$$) {
  window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$42$$, $container$$80_selected$$15$$, $availSpace$$66$$);
  D.$DvtChartTypeUtils$$.$isBar$($chart$$42$$) ? D.$DvtPlotAreaRenderer$$.$_renderBars$($chart$$42$$, $availSpace$$66$$) : D.$DvtChartTypeUtils$$.$isLine$($chart$$42$$) ? D.$DvtPlotAreaRenderer$$.$_renderLines$($chart$$42$$, $container$$80_selected$$15$$, $availSpace$$66$$) : D.$DvtChartTypeUtils$$.$isCombo$($chart$$42$$) ? (D.$DvtPlotAreaRenderer$$.$_renderBars$($chart$$42$$, $availSpace$$66$$), D.$DvtPlotAreaRenderer$$.$_renderLines$($chart$$42$$, $container$$80_selected$$15$$, $availSpace$$66$$)) : 
  D.$DvtChartTypeUtils$$.$isScatter$($chart$$42$$) ? D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$42$$, $container$$80_selected$$15$$, $availSpace$$66$$) : D.$DvtChartTypeUtils$$.$isBubble$($chart$$42$$) && D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$42$$, window.clipGroup, $availSpace$$66$$);
  var $options$$86$$ = $chart$$42$$.$getOptions$();
  if($options$$86$$.xAxis.referenceObjects || $options$$86$$.yAxis.referenceObjects || $options$$86$$.y2Axis.referenceObjects) {
    window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$42$$, $container$$80_selected$$15$$, $availSpace$$66$$), D.$DvtRefObjRenderer$$.$renderForegroundObjects$($chart$$42$$, $availSpace$$66$$)
  }
  $container$$80_selected$$15$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$42$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$42$$, $container$$80_selected$$15$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtPlotAreaRenderer$$$$_renderDataLabel$$($chart$$43_size$$27$$, $container$$81$$, $dataItemBounds$$, $seriesIndex$$6$$, $groupIndex_style$$84_textDim$$6$$, $dataColor$$5$$) {
  if(!$chart$$43_size$$27$$.$getOptions$()._isOverview) {
    var $label$$34_labelString$$1$$ = D.$DvtChartDataUtils$$.$getDataLabel$($chart$$43_size$$27$$, $seriesIndex$$6$$, $groupIndex_style$$84_textDim$$6$$);
    if($label$$34_labelString$$1$$) {
      $label$$34_labelString$$1$$ = new D.$DvtOutputText$$($chart$$43_size$$27$$.$_context$, $label$$34_labelString$$1$$, 0, 0);
      $label$$34_labelString$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      var $position$$38$$ = D.$DvtChartStyleUtils$$.$getDataLabelPosition$($chart$$43_size$$27$$, $seriesIndex$$6$$, $groupIndex_style$$84_textDim$$6$$);
      $groupIndex_style$$84_textDim$$6$$ = D.$DvtChartStyleUtils$$.$getDataLabelStyle$($chart$$43_size$$27$$, $seriesIndex$$6$$, $groupIndex_style$$84_textDim$$6$$, $dataColor$$5$$, $position$$38$$);
      $label$$34_labelString$$1$$.$setCSSStyle$($groupIndex_style$$84_textDim$$6$$);
      $label$$34_labelString$$1$$.$setY$($dataItemBounds$$.y + $dataItemBounds$$.$h$ / 2);
      $label$$34_labelString$$1$$.$setX$($dataItemBounds$$.x + $dataItemBounds$$.$w$ / 2);
      $label$$34_labelString$$1$$.$alignCenter$();
      $label$$34_labelString$$1$$.$alignMiddle$();
      $groupIndex_style$$84_textDim$$6$$ = $label$$34_labelString$$1$$.$measureDimensions$();
      if("center" == $position$$38$$ || "inBottom" == $position$$38$$ || "inTop" == $position$$38$$ || "inRight" == $position$$38$$ || "inLeft" == $position$$38$$) {
        if($dataItemBounds$$.x += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2, $dataItemBounds$$.y += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2, $dataItemBounds$$.$h$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $dataItemBounds$$.$w$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$43_size$$27$$, $seriesIndex$$6$$)) {
          if($groupIndex_style$$84_textDim$$6$$.$w$ > $dataItemBounds$$.$w$ || $groupIndex_style$$84_textDim$$6$$.$h$ > $dataItemBounds$$.$h$) {
            return
          }
          "inRight" == $position$$38$$ ? $label$$34_labelString$$1$$.$setX$($dataItemBounds$$.x + $dataItemBounds$$.$w$ - $groupIndex_style$$84_textDim$$6$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inLeft" == $position$$38$$ ? $label$$34_labelString$$1$$.$setX$($dataItemBounds$$.x + $groupIndex_style$$84_textDim$$6$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inTop" == $position$$38$$ ? $label$$34_labelString$$1$$.$setY$($dataItemBounds$$.y + $groupIndex_style$$84_textDim$$6$$.$h$ / 
          2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $position$$38$$ && $label$$34_labelString$$1$$.$setY$($dataItemBounds$$.y + $dataItemBounds$$.$h$ - $groupIndex_style$$84_textDim$$6$$.$h$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
        }else {
          if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$43_size$$27$$) && ($chart$$43_size$$27$$ = $label$$34_labelString$$1$$.$getOptimalFontSize$($dataItemBounds$$), $label$$34_labelString$$1$$.$setFontSize$($chart$$43_size$$27$$), !D.$DvtTextUtils$$.$fitText$($label$$34_labelString$$1$$, $dataItemBounds$$.$w$, $dataItemBounds$$.$h$, $container$$81$$, D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
            return
          }
        }
      }else {
        "right" == $position$$38$$ ? $label$$34_labelString$$1$$.$setX$($dataItemBounds$$.x + $dataItemBounds$$.$w$ + $groupIndex_style$$84_textDim$$6$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "left" == $position$$38$$ ? $label$$34_labelString$$1$$.$setX$($dataItemBounds$$.x - $groupIndex_style$$84_textDim$$6$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "above" == $position$$38$$ ? $label$$34_labelString$$1$$.$setY$($dataItemBounds$$.y - $groupIndex_style$$84_textDim$$6$$.$h$ / 
        2) : "below" == $position$$38$$ && $label$$34_labelString$$1$$.$setY$($dataItemBounds$$.y + $dataItemBounds$$.$h$ + $groupIndex_style$$84_textDim$$6$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
      }
      $container$$81$$.$addChild$($label$$34_labelString$$1$$)
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$ = function $$DvtPlotAreaRenderer$$$$_renderLabelForDataMarker$$($chart$$44$$, $container$$82$$, $marker$$24$$) {
  var $logicalObject$$8$$ = $chart$$44$$.$getEventManager$().$getLogicalObject$($marker$$24$$), $markerBounds$$ = new D.$DvtRectangle$$($marker$$24$$.$getX$(), $marker$$24$$.$getY$(), $marker$$24$$.getWidth(), $marker$$24$$.getHeight());
  D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$44$$, $container$$82$$, $markerBounds$$, $logicalObject$$8$$.$getSeriesIndex$(), $logicalObject$$8$$.$getGroupIndex$(), $marker$$24$$.$_dataColor$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkers$$($chart$$45$$, $container$$83$$, $availSpace$$67_numMarkers$$) {
  for(var $markers$$5$$ = [], $i$$470_seriesCount$$7$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$45$$), $seriesIndex$$7$$ = 0;$seriesIndex$$7$$ < $i$$470_seriesCount$$7$$;$seriesIndex$$7$$++) {
    var $seriesMarkers$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$45$$, $seriesIndex$$7$$, $availSpace$$67_numMarkers$$), $markers$$5$$ = $markers$$5$$.concat($seriesMarkers$$)
  }
  D.$DvtChartMarkerUtils$$.$sortMarkers$($markers$$5$$);
  $availSpace$$67_numMarkers$$ = $markers$$5$$.length;
  for($i$$470_seriesCount$$7$$ = 0;$i$$470_seriesCount$$7$$ < $availSpace$$67_numMarkers$$;$i$$470_seriesCount$$7$$++) {
    $container$$83$$.$addChild$($markers$$5$$[$i$$470_seriesCount$$7$$]), D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$($chart$$45$$, $container$$83$$, $markers$$5$$[$i$$470_seriesCount$$7$$])
  }
  $chart$$45$$.$_currentMarkers$.push($markers$$5$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkersForSeries$$($chart$$46$$, $container$$84$$, $markers$$6_seriesIndex$$8$$, $availSpace$$68_numMarkers$$1$$) {
  $markers$$6_seriesIndex$$8$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$46$$, $markers$$6_seriesIndex$$8$$, $availSpace$$68_numMarkers$$1$$);
  $availSpace$$68_numMarkers$$1$$ = $markers$$6_seriesIndex$$8$$.length;
  for(var $i$$471$$ = 0;$i$$471$$ < $availSpace$$68_numMarkers$$1$$;$i$$471$$++) {
    $container$$84$$.$addChild$($markers$$6_seriesIndex$$8$$[$i$$471$$]), D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$($chart$$46$$, $container$$84$$, $markers$$6_seriesIndex$$8$$[$i$$471$$])
  }
  $chart$$46$$.$_currentMarkers$.push($markers$$6_seriesIndex$$8$$)
};
D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_getMarkersForSeries$$($chart$$47$$, $seriesIndex$$9$$, $availSpace$$69$$) {
  if(!D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$47$$, $seriesIndex$$9$$)) {
    return[]
  }
  var $isTouchDevice$$ = D.$DvtAgent$$.$isTouchDevice$(), $context$$535$$ = $chart$$47$$.$_context$, $xAxis$$ = $chart$$47$$.$xAxis$, $yAxis$$1$$ = $chart$$47$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$47$$, $seriesIndex$$9$$) && ($yAxis$$1$$ = $chart$$47$$.$y2Axis$);
  for(var $options$$87$$ = $chart$$47$$.$getOptions$(), $bHasDatatips$$ = D.$DvtChartTooltipUtils$$.$hasDatatips$($chart$$47$$), $bBubbleChart$$ = D.$DvtChartTypeUtils$$.$isBubble$($chart$$47$$), $isPolar$$1$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$47$$), $markers$$7$$ = [], $groupIndex$$1$$ = 0;$groupIndex$$1$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$47$$);$groupIndex$$1$$++) {
    var $dataValue_hitArea$$2_xCoord$$3_xValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$);
    if(!($dataValue_hitArea$$2_xCoord$$3_xValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue_hitArea$$2_xCoord$$3_xValue$$)) && !("multiple" != $options$$87$$.selection && D.$DvtChartDataUtils$$.$getDataItem$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$)._filtered) && D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$)) {
      var $dataValue_hitArea$$2_xCoord$$3_xValue$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$), $cartesian$$1_yCoord$$2_yValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$);
      if($bBubbleChart$$) {
        if($isPolar$$1$$ && $cartesian$$1_yCoord$$2_yValue$$ < $yAxis$$1$$.$getViewportMin$()) {
          continue
        }
        $dataValue_hitArea$$2_xCoord$$3_xValue$$ = $isPolar$$1$$ ? $xAxis$$.$getCoordAt$($dataValue_hitArea$$2_xCoord$$3_xValue$$) : $xAxis$$.$getUnboundedCoordAt$($dataValue_hitArea$$2_xCoord$$3_xValue$$);
        $cartesian$$1_yCoord$$2_yValue$$ = $yAxis$$1$$.$getUnboundedCoordAt$($cartesian$$1_yCoord$$2_yValue$$)
      }else {
        $dataValue_hitArea$$2_xCoord$$3_xValue$$ = $xAxis$$.$getCoordAt$($dataValue_hitArea$$2_xCoord$$3_xValue$$), $cartesian$$1_yCoord$$2_yValue$$ = $yAxis$$1$$.$getCoordAt$($cartesian$$1_yCoord$$2_yValue$$)
      }
      if(!($dataValue_hitArea$$2_xCoord$$3_xValue$$ == D.$JSCompiler_alias_NULL$$ || $cartesian$$1_yCoord$$2_yValue$$ == D.$JSCompiler_alias_NULL$$)) {
        if($isPolar$$1$$) {
          $cartesian$$1_yCoord$$2_yValue$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian$$1_yCoord$$2_yValue$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$, $availSpace$$69$$), $dataValue_hitArea$$2_xCoord$$3_xValue$$ = $cartesian$$1_yCoord$$2_yValue$$.x, $cartesian$$1_yCoord$$2_yValue$$ = $cartesian$$1_yCoord$$2_yValue$$.y
        }else {
          if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$47$$)) {
            var $bMarkerDisplayed_temp$$1$$ = $dataValue_hitArea$$2_xCoord$$3_xValue$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$ = $cartesian$$1_yCoord$$2_yValue$$, $cartesian$$1_yCoord$$2_yValue$$ = $bMarkerDisplayed_temp$$1$$
          }
        }
        $bMarkerDisplayed_temp$$1$$ = "on" == D.$DvtChartStyleUtils$$.$getMarkerDisplayed$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$);
        if(!$bMarkerDisplayed_temp$$1$$) {
          var $lastIndex$$2_prevValue_shape$$77$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$47$$) - 1, $dataPos_nextIndex_nextValue$$ = $isPolar$$1$$ && 0 < $lastIndex$$2_prevValue_shape$$77$$ && $groupIndex$$1$$ == $lastIndex$$2_prevValue_shape$$77$$ ? 0 : $groupIndex$$1$$ + 1, $lastIndex$$2_prevValue_shape$$77$$ = D.$DvtChartDataUtils$$.getValue($chart$$47$$, $seriesIndex$$9$$, $isPolar$$1$$ && 0 < $lastIndex$$2_prevValue_shape$$77$$ && 0 == $groupIndex$$1$$ ? $lastIndex$$2_prevValue_shape$$77$$ : 
          $groupIndex$$1$$ - 1), $dataPos_nextIndex_nextValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$47$$, $seriesIndex$$9$$, $dataPos_nextIndex_nextValue$$);
          if(($lastIndex$$2_prevValue_shape$$77$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($lastIndex$$2_prevValue_shape$$77$$)) && ($dataPos_nextIndex_nextValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataPos_nextIndex_nextValue$$)) && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$47$$)) {
            $bMarkerDisplayed_temp$$1$$ = D.$JSCompiler_alias_TRUE$$
          }
        }
        if(!$options$$87$$._duringAnimation || $bMarkerDisplayed_temp$$1$$ || D.$DvtChartDataUtils$$.$isDataSelected$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$)) {
          var $dataPos_nextIndex_nextValue$$ = new D.$DvtPoint$$($dataValue_hitArea$$2_xCoord$$3_xValue$$, $cartesian$$1_yCoord$$2_yValue$$), $lastIndex$$2_prevValue_shape$$77$$ = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$), $borderColor$$41$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$), $borderWidth$$4$$ = $bBubbleChart$$ ? 0.5 : 1, $markerSize$$3$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$47$$, 
          $seriesIndex$$9$$, $groupIndex$$1$$), $halfMarkerSize_marker$$25$$ = $markerSize$$3$$ / 2;
          window.xCoordMinHalf = $dataValue_hitArea$$2_xCoord$$3_xValue$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2;
          window.yCoordMinHalf = $cartesian$$1_yCoord$$2_yValue$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2;
          var $dataValue_hitArea$$2_xCoord$$3_xValue$$ = $dataValue_hitArea$$2_xCoord$$3_xValue$$ - $halfMarkerSize_marker$$25$$, $cartesian$$1_yCoord$$2_yValue$$ = $cartesian$$1_yCoord$$2_yValue$$ - $halfMarkerSize_marker$$25$$, $halfMarkerSize_marker$$25$$ = D.$JSCompiler_alias_NULL$$, $dataColor$$6$$ = $bMarkerDisplayed_temp$$1$$ ? D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$) : D.$DvtChartStyleUtils$$.$getColor$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$), 
          $hoverColor$$2$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$6$$), $innerColor$$5$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$47$$), $outerColor$$5$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$47$$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$47$$) : $dataColor$$6$$;
          $bMarkerDisplayed_temp$$1$$ ? ($halfMarkerSize_marker$$25$$ = new D.$DvtMarker$$($context$$535$$, $lastIndex$$2_prevValue_shape$$77$$, "alta", $dataValue_hitArea$$2_xCoord$$3_xValue$$, $cartesian$$1_yCoord$$2_yValue$$, $markerSize$$3$$, $markerSize$$3$$), $chart$$47$$.$isSelectionSupported$() && $halfMarkerSize_marker$$25$$.setCursor("pointer"), $halfMarkerSize_marker$$25$$.$setFill$(D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$)), $borderColor$$41$$ && 
          $halfMarkerSize_marker$$25$$.$setSolidStroke$($borderColor$$41$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$4$$), $halfMarkerSize_marker$$25$$.$setDataColor$($dataColor$$6$$), $halfMarkerSize_marker$$25$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$2$$, 1, 2)), $halfMarkerSize_marker$$25$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$5$$, 1, 1.5), new D.$DvtSolidStroke$$($outerColor$$5$$, 1, 4.5)), $halfMarkerSize_marker$$25$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$5$$, 
          1, 1.5), new D.$DvtSolidStroke$$($hoverColor$$2$$, 1, 4.5)), $isTouchDevice$$ && $markerSize$$3$$ < D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && ($dataValue_hitArea$$2_xCoord$$3_xValue$$ = new D.$DvtRect$$($context$$535$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$, $cartesian$$1_yCoord$$2_yValue$$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea$$2_xCoord$$3_xValue$$), 
          $halfMarkerSize_marker$$25$$.$addChild$($dataValue_hitArea$$2_xCoord$$3_xValue$$))) : ($chart$$47$$.$isSelectionSupported$() ? ($halfMarkerSize_marker$$25$$ = new D.$DvtChartLineMarker$$($context$$535$$, $lastIndex$$2_prevValue_shape$$77$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$, $cartesian$$1_yCoord$$2_yValue$$, $markerSize$$3$$), $halfMarkerSize_marker$$25$$.setCursor("pointer"), $isTouchDevice$$ && ($dataValue_hitArea$$2_xCoord$$3_xValue$$ = new D.$DvtRect$$($context$$535$$, window.xCoordMinHalf, 
          window.yCoordMinHalf, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea$$2_xCoord$$3_xValue$$), $halfMarkerSize_marker$$25$$.$addChild$($dataValue_hitArea$$2_xCoord$$3_xValue$$))) : ($isTouchDevice$$ && ($dataValue_hitArea$$2_xCoord$$3_xValue$$ = window.xCoordMinHalf, $cartesian$$1_yCoord$$2_yValue$$ = window.yCoordMinHalf, $markerSize$$3$$ = D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), 
          $bHasDatatips$$ && ($halfMarkerSize_marker$$25$$ = new D.$DvtMarker$$($context$$535$$, "square", D.$JSCompiler_alias_NULL$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$, $cartesian$$1_yCoord$$2_yValue$$, $markerSize$$3$$, $markerSize$$3$$))), $halfMarkerSize_marker$$25$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($halfMarkerSize_marker$$25$$), $halfMarkerSize_marker$$25$$.$setDataColor$($dataColor$$6$$, $innerColor$$5$$, $outerColor$$5$$)));
          $halfMarkerSize_marker$$25$$ != D.$JSCompiler_alias_NULL$$ && ($markers$$7$$.push($halfMarkerSize_marker$$25$$), (0,D.$DvtChartObjPeer$associate$$)($halfMarkerSize_marker$$25$$, $chart$$47$$, $seriesIndex$$9$$, $groupIndex$$1$$, $dataPos_nextIndex_nextValue$$))
        }
      }
    }
  }
  return $markers$$7$$
};
D.$DvtPlotAreaRenderer$$.$_renderBars$ = function $$DvtPlotAreaRenderer$$$$_renderBars$$($chart$$48$$, $availSpace$$70$$) {
  for(var $container$$85$$ = window.clipGroup, $context$$536$$ = $chart$$48$$.$_context$, $options$$88$$ = $chart$$48$$.$getOptions$(), $xAxis$$1$$ = $chart$$48$$.$xAxis$, $bHoriz$$3$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$48$$), $bPolar$$2$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$48$$), $bStacked$$1$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$48$$), $bPixelSpacing$$ = "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$48$$), $barSeries$$ = [], $groupCount_seriesCount$$8$$ = 
  D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$48$$), $seriesIndex$$10$$ = 0;$seriesIndex$$10$$ < $groupCount_seriesCount$$8$$;$seriesIndex$$10$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$48$$, $seriesIndex$$10$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$48$$, $seriesIndex$$10$$) && $barSeries$$.push($seriesIndex$$10$$)
  }
  D.$DvtAgent$$.$isRightToLeft$($context$$536$$) && (!$bStacked$$1$$ && !$bHoriz$$3$$) && $barSeries$$.reverse();
  for(var $groupCount_seriesCount$$8$$ = $options$$88$$.groups ? $options$$88$$.groups.length : 0, $barSeriesCount$$ = $barSeries$$.length, $barWidth$$1$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$48$$, $barSeriesCount$$, $xAxis$$1$$), $offset$$26$$ = D.$DvtChartStyleUtils$$.$getBarOffset$($chart$$48$$, $barWidth$$1$$, $barSeriesCount$$), $y2Offset$$ = D.$DvtChartStyleUtils$$.$getY2BarOffset$($chart$$48$$, $barWidth$$1$$), $barSeriesIndex$$ = 0;$barSeriesIndex$$ < $barSeriesCount$$;$barSeriesIndex$$++) {
    for(var $seriesIndex$$10$$ = $barSeries$$[$barSeriesIndex$$], $bY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$48$$, $seriesIndex$$10$$), $yAxis$$2$$ = $bY2Series$$ ? $chart$$48$$.$y2Axis$ : $chart$$48$$.$yAxis$, $groupIndex$$2$$ = 0;$groupIndex$$2$$ < $groupCount_seriesCount$$8$$;$groupIndex$$2$$++) {
      var $dataItem$$5_markers$$8_parentContainer$$2$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$48$$, $seriesIndex$$10$$, $groupIndex$$2$$), $shape$$78_xValue$$1_yCoord$$3$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$48$$, $seriesIndex$$10$$, $groupIndex$$2$$), $bInvisible_fill$$44_yValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$48$$, $seriesIndex$$10$$, $groupIndex$$2$$), $dataPos$$1_totalYValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$48$$, $seriesIndex$$10$$, $groupIndex$$2$$);
      if(!($bInvisible_fill$$44_yValue$$1$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($bInvisible_fill$$44_yValue$$1$$))) {
        var $innerColor$$6_x1$$31_xCoord$$4$$ = $xAxis$$1$$.$getUnboundedCoordAt$($shape$$78_xValue$$1_yCoord$$3$$, D.$JSCompiler_alias_FALSE$$), $shape$$78_xValue$$1_yCoord$$3$$ = $yAxis$$2$$.$getBoundedCoordAt$($dataPos$$1_totalYValue$$), $axisCoord$$2_stroke$$74$$ = $yAxis$$2$$.$getBaselineCoord$(), $baseCoord_borderColor$$42_dataColor$$7$$ = $bStacked$$1$$ ? $yAxis$$2$$.$getBoundedCoordAt$($dataPos$$1_totalYValue$$ - $bInvisible_fill$$44_yValue$$1$$) : $axisCoord$$2_stroke$$74$$;
        if(!($shape$$78_xValue$$1_yCoord$$3$$ == $baseCoord_borderColor$$42_dataColor$$7$$ && $yAxis$$2$$.$getCoordAt$($dataPos$$1_totalYValue$$) === D.$JSCompiler_alias_NULL$$)) {
          $bInvisible_fill$$44_yValue$$1$$ = D.$JSCompiler_alias_FALSE$$;
          1 > window.Math.abs($shape$$78_xValue$$1_yCoord$$3$$ - $baseCoord_borderColor$$42_dataColor$$7$$) && ($bInvisible_fill$$44_yValue$$1$$ = D.$JSCompiler_alias_TRUE$$, $shape$$78_xValue$$1_yCoord$$3$$ > $baseCoord_borderColor$$42_dataColor$$7$$ ? $shape$$78_xValue$$1_yCoord$$3$$ = $baseCoord_borderColor$$42_dataColor$$7$$ + 3 : $shape$$78_xValue$$1_yCoord$$3$$ <= $baseCoord_borderColor$$42_dataColor$$7$$ && ($shape$$78_xValue$$1_yCoord$$3$$ = $baseCoord_borderColor$$42_dataColor$$7$$ - 3));
          var $innerColor$$6_x1$$31_xCoord$$4$$ = $bY2Series$$ ? $innerColor$$6_x1$$31_xCoord$$4$$ + $offset$$26$$ + $y2Offset$$ : $innerColor$$6_x1$$31_xCoord$$4$$ + $offset$$26$$, $outerColor$$6_x2$$28$$ = $innerColor$$6_x1$$31_xCoord$$4$$ + $barWidth$$1$$, $dataPos$$1_totalYValue$$ = $bPolar$$2$$ ? D.$DvtPlotAreaRenderer$$.$polarToCartesian$($shape$$78_xValue$$1_yCoord$$3$$, ($innerColor$$6_x1$$31_xCoord$$4$$ + $outerColor$$6_x2$$28$$) / 2, $availSpace$$70$$) : $bHoriz$$3$$ ? new D.$DvtPoint$$($shape$$78_xValue$$1_yCoord$$3$$, 
          ($innerColor$$6_x1$$31_xCoord$$4$$ + $outerColor$$6_x2$$28$$) / 2) : new D.$DvtPoint$$(($innerColor$$6_x1$$31_xCoord$$4$$ + $outerColor$$6_x2$$28$$) / 2, $shape$$78_xValue$$1_yCoord$$3$$), $shape$$78_xValue$$1_yCoord$$3$$ = $bPolar$$2$$ ? new D.$DvtChartPolarBar$$($context$$536$$, $axisCoord$$2_stroke$$74$$, $baseCoord_borderColor$$42_dataColor$$7$$, $shape$$78_xValue$$1_yCoord$$3$$, $innerColor$$6_x1$$31_xCoord$$4$$, $outerColor$$6_x2$$28$$, $availSpace$$70$$) : new D.$DvtChartBar$$($context$$536$$, 
          $bHoriz$$3$$, $bStacked$$1$$, $axisCoord$$2_stroke$$74$$, $baseCoord_borderColor$$42_dataColor$$7$$, $shape$$78_xValue$$1_yCoord$$3$$, $innerColor$$6_x1$$31_xCoord$$4$$, $outerColor$$6_x2$$28$$);
          $container$$85$$.$addChild$($shape$$78_xValue$$1_yCoord$$3$$);
          $chart$$48$$.$isSelectionSupported$() && $shape$$78_xValue$$1_yCoord$$3$$.setCursor("pointer");
          $axisCoord$$2_stroke$$74$$ = D.$JSCompiler_alias_NULL$$;
          $bInvisible_fill$$44_yValue$$1$$ ? $bInvisible_fill$$44_yValue$$1$$ = (0,D.$DvtSolidFill$invisibleFill$$)() : ($bInvisible_fill$$44_yValue$$1$$ = D.$DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$48$$, $seriesIndex$$10$$, $groupIndex$$2$$, $bHoriz$$3$$, $barWidth$$1$$), ($baseCoord_borderColor$$42_dataColor$$7$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$48$$, $seriesIndex$$10$$, $groupIndex$$2$$)) && ($axisCoord$$2_stroke$$74$$ = new D.$DvtSolidStroke$$($baseCoord_borderColor$$42_dataColor$$7$$)));
          $baseCoord_borderColor$$42_dataColor$$7$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$48$$, $seriesIndex$$10$$, $groupIndex$$2$$);
          $innerColor$$6_x1$$31_xCoord$$4$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$48$$);
          $outerColor$$6_x2$$28$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$48$$);
          $shape$$78_xValue$$1_yCoord$$3$$.$setStyleProperties$($bInvisible_fill$$44_yValue$$1$$, $axisCoord$$2_stroke$$74$$, $baseCoord_borderColor$$42_dataColor$$7$$, $innerColor$$6_x1$$31_xCoord$$4$$, $outerColor$$6_x2$$28$$);
          $bPixelSpacing$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($shape$$78_xValue$$1_yCoord$$3$$);
          $dataItem$$5_markers$$8_parentContainer$$2$$ = "outsideBarEdge" == ($dataItem$$5_markers$$8_parentContainer$$2$$.labelPosition ? $dataItem$$5_markers$$8_parentContainer$$2$$.labelPosition : $options$$88$$.styleDefaults.dataLabelPosition) && !D.$DvtChartTypeUtils$$.$isStacked$($chart$$48$$) ? $container$$85$$ : $shape$$78_xValue$$1_yCoord$$3$$;
          D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$48$$, $dataItem$$5_markers$$8_parentContainer$$2$$, $shape$$78_xValue$$1_yCoord$$3$$.$getBoundingBox$(), $seriesIndex$$10$$, $groupIndex$$2$$, D.$DvtChartStyleUtils$$.$getColor$($chart$$48$$, $seriesIndex$$10$$, $groupIndex$$2$$));
          (0,D.$DvtChartObjPeer$associate$$)($shape$$78_xValue$$1_yCoord$$3$$, $chart$$48$$, $seriesIndex$$10$$, $groupIndex$$2$$, $dataPos$$1_totalYValue$$);
          $dataItem$$5_markers$$8_parentContainer$$2$$ = [];
          $dataItem$$5_markers$$8_parentContainer$$2$$.push($shape$$78_xValue$$1_yCoord$$3$$);
          $chart$$48$$.$_currentMarkers$.push($dataItem$$5_markers$$8_parentContainer$$2$$)
        }
      }
    }
    !$bStacked$$1$$ && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$48$$) && ($offset$$26$$ += $barWidth$$1$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLines$ = function $$DvtPlotAreaRenderer$$$$_renderLines$$($chart$$49$$, $container$$86$$, $availSpace$$71$$) {
  for(var $clipGroup$$1$$ = window.clipGroup, $lineSeries$$ = [], $lineIndex$$1_seriesCount$$9$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$49$$), $seriesIndex$$11$$ = 0;$seriesIndex$$11$$ < $lineIndex$$1_seriesCount$$9$$;$seriesIndex$$11$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$49$$, $seriesIndex$$11$$) && "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$49$$, $seriesIndex$$11$$) && $lineSeries$$.push($seriesIndex$$11$$)
  }
  for($lineIndex$$1_seriesCount$$9$$ = 0;$lineIndex$$1_seriesCount$$9$$ < $lineSeries$$.length;$lineIndex$$1_seriesCount$$9$$++) {
    var $seriesIndex$$11$$ = $lineSeries$$[$lineIndex$$1_seriesCount$$9$$], $color$$51_i$$472_stroke$$75$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$49$$, $seriesIndex$$11$$), $lineWidth$$3$$ = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$49$$, $seriesIndex$$11$$), $coords$$2_lineStyle$$5_lines$$3$$ = (0,D.$DvtStroke$convertTypeString$$)(D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$49$$, $seriesIndex$$11$$)), $color$$51_i$$472_stroke$$75$$ = new D.$DvtSolidStroke$$($color$$51_i$$472_stroke$$75$$, 
    1, $lineWidth$$3$$);
    $color$$51_i$$472_stroke$$75$$.$setStyle$($coords$$2_lineStyle$$5_lines$$3$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$49$$) || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$49$$, $seriesIndex$$11$$);
    $coords$$2_lineStyle$$5_lines$$3$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$49$$, $seriesIndex$$11$$);
    $coords$$2_lineStyle$$5_lines$$3$$ = D.$DvtPlotAreaRenderer$$.$getLinesFromCoords$($chart$$49$$, $coords$$2_lineStyle$$5_lines$$3$$, $color$$51_i$$472_stroke$$75$$, $availSpace$$71$$);
    for($color$$51_i$$472_stroke$$75$$ = 0;$color$$51_i$$472_stroke$$75$$ < $coords$$2_lineStyle$$5_lines$$3$$.length;$color$$51_i$$472_stroke$$75$$++) {
      $clipGroup$$1$$.$addChild$($coords$$2_lineStyle$$5_lines$$3$$[$color$$51_i$$472_stroke$$75$$]), (0,D.$DvtChartObjPeer$associate$$)($coords$$2_lineStyle$$5_lines$$3$$[$color$$51_i$$472_stroke$$75$$], $chart$$49$$, $seriesIndex$$11$$)
    }
  }
  for($lineIndex$$1_seriesCount$$9$$ = 0;$lineIndex$$1_seriesCount$$9$$ < $lineSeries$$.length;$lineIndex$$1_seriesCount$$9$$++) {
    D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$49$$, $container$$86$$, $lineSeries$$[$lineIndex$$1_seriesCount$$9$$], $availSpace$$71$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderAreas$ = function $$DvtPlotAreaRenderer$$$$_renderAreas$$($chart$$50$$, $container$$87$$, $availSpace$$72$$) {
  for(var $bStacked$$2$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$50$$), $areaSeries$$ = [], $group$$6_seriesCount$$10$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$50$$), $seriesIndex$$12$$ = 0;$seriesIndex$$12$$ < $group$$6_seriesCount$$10$$;$seriesIndex$$12$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$50$$, $seriesIndex$$12$$) && "area" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$50$$, $seriesIndex$$12$$) && $areaSeries$$.push($seriesIndex$$12$$)
  }
  $bStacked$$2$$ && $areaSeries$$.reverse();
  for(var $group$$6_seriesCount$$10$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$50$$, $container$$87$$, $availSpace$$72$$), $areaIndex$$1$$ = 0;$areaIndex$$1$$ < $areaSeries$$.length;$areaIndex$$1$$++) {
    $seriesIndex$$12$$ = $areaSeries$$[$areaIndex$$1$$];
    D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$50$$, $seriesIndex$$12$$);
    for(var $areas$$10_baselineCoord$$5$$ = $chart$$50$$.$yAxis$ ? $chart$$50$$.$yAxis$.$getBaselineCoord$() : $chart$$50$$.$y2Axis$.$getBaselineCoord$(), $coords$$3_i$$473$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$50$$, $seriesIndex$$12$$), $fill$$45$$ = D.$DvtChartSeriesEffectUtils$$.$getAreaFill$($chart$$50$$, $seriesIndex$$12$$), $borderColor$$43_stroke$$76$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$50$$, $seriesIndex$$12$$), $borderColor$$43_stroke$$76$$ = $borderColor$$43_stroke$$76$$ ? 
    new D.$DvtSolidStroke$$($borderColor$$43_stroke$$76$$) : D.$JSCompiler_alias_NULL$$, $areas$$10_baselineCoord$$5$$ = D.$DvtPlotAreaRenderer$$.$getAreasFromCoords$($chart$$50$$, $coords$$3_i$$473$$, $fill$$45$$, $borderColor$$43_stroke$$76$$, $areas$$10_baselineCoord$$5$$, $availSpace$$72$$), $coords$$3_i$$473$$ = 0;$coords$$3_i$$473$$ < $areas$$10_baselineCoord$$5$$.length;$coords$$3_i$$473$$++) {
      $group$$6_seriesCount$$10$$.$addChild$($areas$$10_baselineCoord$$5$$[$coords$$3_i$$473$$]), $chart$$50$$.$_currentAreas$.push($areas$$10_baselineCoord$$5$$[$coords$$3_i$$473$$]), (0,D.$DvtChartObjPeer$associate$$)($areas$$10_baselineCoord$$5$$[$coords$$3_i$$473$$], $chart$$50$$, $seriesIndex$$12$$)
    }
    $bStacked$$2$$ || (D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$50$$, $container$$87$$, $seriesIndex$$12$$, $availSpace$$72$$), $areaIndex$$1$$ + 1 < $areaSeries$$.length && ($group$$6_seriesCount$$10$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$50$$, $container$$87$$, $availSpace$$72$$)))
  }
  if($bStacked$$2$$) {
    for($areaIndex$$1$$ = 0;$areaIndex$$1$$ < $areaSeries$$.length;$areaIndex$$1$$++) {
      D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$50$$, $container$$87$$, $areaSeries$$[$areaIndex$$1$$], $availSpace$$72$$)
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtPlotAreaRenderer$$$$_filterPointsForSeries$$($chart$$51$$, $seriesIndex$$13$$) {
  var $maxNumPts_setSize$$ = $chart$$51$$.$_plotAreaSpace$.$w$, $seriesItems$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$51$$, $seriesIndex$$13$$).items, $maxNumPts_setSize$$ = window.Math.round(2 * ($seriesItems$$1$$.length / (($chart$$51$$.$xAxis$.$getDataMax$() - $chart$$51$$.$xAxis$.$getDataMin$()) / ($chart$$51$$.$xAxis$.$getViewportMax$() - $chart$$51$$.$xAxis$.$getViewportMin$()))) / $maxNumPts_setSize$$);
  if(2 >= $maxNumPts_setSize$$) {
    for(var $i$$474$$ = 0;$i$$474$$ < $seriesItems$$1$$.length;$i$$474$$++) {
      ($dataItem$$6$$ = $seriesItems$$1$$[$i$$474$$]) && ($dataItem$$6$$._filtered = D.$JSCompiler_alias_FALSE$$)
    }
  }else {
    for(var $maxIndex$$, $maxValue$$6$$, $minIndex$$, $minValue$$5$$, $dataItem$$6$$, $dataValue$$1$$, $i$$474$$ = 0;$i$$474$$ < $seriesItems$$1$$.length;$i$$474$$ += $maxNumPts_setSize$$) {
      $maxIndex$$ = -1;
      $maxValue$$6$$ = -window.Infinity;
      $minIndex$$ = -1;
      $minValue$$5$$ = window.Infinity;
      for(var $j$$56$$ = $i$$474$$;$j$$56$$ < window.Math.min($i$$474$$ + $maxNumPts_setSize$$, $seriesItems$$1$$.length);$j$$56$$++) {
        $dataValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$51$$, $seriesIndex$$13$$, $j$$56$$), $dataItem$$6$$ = $seriesItems$$1$$[$j$$56$$], $dataValue$$1$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$6$$ == D.$JSCompiler_alias_NULL$$ || ($dataValue$$1$$ > $maxValue$$6$$ && ($maxIndex$$ = $j$$56$$, $maxValue$$6$$ = $dataValue$$1$$), $dataValue$$1$$ < $minValue$$5$$ && ($minIndex$$ = $j$$56$$, $minValue$$5$$ = $dataValue$$1$$), $dataItem$$6$$._filtered = D.$JSCompiler_alias_TRUE$$)
      }
      for($j$$56$$ = $i$$474$$;$j$$56$$ < window.Math.min($i$$474$$ + $maxNumPts_setSize$$, $seriesItems$$1$$.length);$j$$56$$++) {
        if($dataItem$$6$$ = $seriesItems$$1$$[$j$$56$$], $dataItem$$6$$ != D.$JSCompiler_alias_NULL$$ && ($j$$56$$ == $maxIndex$$ || $j$$56$$ == $minIndex$$)) {
          $dataItem$$6$$._filtered = D.$JSCompiler_alias_FALSE$$
        }
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtPlotAreaRenderer$$$$_getCoordsForSeries$$($chart$$52$$, $seriesIndex$$14$$) {
  var $xAxis$$2$$ = $chart$$52$$.$xAxis$, $yAxis$$3$$ = $chart$$52$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$52$$, $seriesIndex$$14$$) && ($yAxis$$3$$ = $chart$$52$$.$y2Axis$);
  for(var $coords$$4$$ = [], $groupIndex$$3$$ = 0;$groupIndex$$3$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$52$$);$groupIndex$$3$$++) {
    var $dataValue$$2_yCoord$$4_yValue$$2$$ = D.$DvtChartDataUtils$$.getValue($chart$$52$$, $seriesIndex$$14$$, $groupIndex$$3$$);
    if($dataValue$$2_yCoord$$4_yValue$$2$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue$$2_yCoord$$4_yValue$$2$$)) {
      $coords$$4$$.push(D.$JSCompiler_alias_NULL$$)
    }else {
      if(!D.$DvtChartDataUtils$$.$getDataItem$($chart$$52$$, $seriesIndex$$14$$, $groupIndex$$3$$)._filtered) {
        var $xCoord$$5_xValue$$2$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$52$$, $seriesIndex$$14$$, $groupIndex$$3$$), $dataValue$$2_yCoord$$4_yValue$$2$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$52$$, $seriesIndex$$14$$, $groupIndex$$3$$);
        D.$DvtChartTypeUtils$$.$isPolar$($chart$$52$$) && ($dataValue$$2_yCoord$$4_yValue$$2$$ = window.Math.max($dataValue$$2_yCoord$$4_yValue$$2$$, $yAxis$$3$$.$getViewportMin$()));
        $xCoord$$5_xValue$$2$$ = $xAxis$$2$$.$getUnboundedCoordAt$($xCoord$$5_xValue$$2$$);
        $dataValue$$2_yCoord$$4_yValue$$2$$ = $yAxis$$3$$.$getUnboundedCoordAt$($dataValue$$2_yCoord$$4_yValue$$2$$);
        $coords$$4$$.push(new D.$DvtPoint$$($xCoord$$5_xValue$$2$$, $dataValue$$2_yCoord$$4_yValue$$2$$))
      }
    }
  }
  return $coords$$4$$
};
D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$ = function $$DvtPlotAreaRenderer$$$$getPointsFromCoords$$($chart$$53_lastPoints$$, $coords$$5$$, $availSpace$$74$$) {
  var $isPolar$$2$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$53_lastPoints$$), $pointsArrays$$1$$ = [], $points$$39$$ = [];
  $pointsArrays$$1$$.push($points$$39$$);
  for(var $cartesian$$2_xCoord$$6$$, $yCoord$$5$$, $i$$475$$ = 0;$i$$475$$ < $coords$$5$$.length;$i$$475$$++) {
    $coords$$5$$[$i$$475$$] == D.$JSCompiler_alias_NULL$$ ? D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$53_lastPoints$$) || ($points$$39$$ = [], $pointsArrays$$1$$.push($points$$39$$)) : ($cartesian$$2_xCoord$$6$$ = $coords$$5$$[$i$$475$$].x, $yCoord$$5$$ = $coords$$5$$[$i$$475$$].y, $isPolar$$2$$ ? ($cartesian$$2_xCoord$$6$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($yCoord$$5$$, $cartesian$$2_xCoord$$6$$, $availSpace$$74$$), $points$$39$$.push($cartesian$$2_xCoord$$6$$.x, $cartesian$$2_xCoord$$6$$.y)) : 
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$53_lastPoints$$) ? $points$$39$$.push($yCoord$$5$$, $cartesian$$2_xCoord$$6$$) : $points$$39$$.push($cartesian$$2_xCoord$$6$$, $yCoord$$5$$))
  }
  $isPolar$$2$$ && 1 < $pointsArrays$$1$$.length && ($chart$$53_lastPoints$$ = $pointsArrays$$1$$.pop(), $pointsArrays$$1$$[0] = $chart$$53_lastPoints$$.concat($pointsArrays$$1$$[0]));
  return $pointsArrays$$1$$
};
D.$DvtPlotAreaRenderer$$.$getLinesFromCoords$ = function $$DvtPlotAreaRenderer$$$$getLinesFromCoords$$($chart$$54$$, $coords$$6_pointsArrays$$2$$, $stroke$$77$$, $availSpace$$75_lines$$4$$) {
  var $context$$537$$ = $chart$$54$$.$_context$;
  $coords$$6_pointsArrays$$2$$ = D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$($chart$$54$$, $coords$$6_pointsArrays$$2$$, $availSpace$$75_lines$$4$$);
  $availSpace$$75_lines$$4$$ = [];
  for(var $i$$476$$ = 0;$i$$476$$ < $coords$$6_pointsArrays$$2$$.length;$i$$476$$++) {
    var $line$$8_points$$40$$ = $coords$$6_pointsArrays$$2$$[$i$$476$$];
    $line$$8_points$$40$$ && 1 < $line$$8_points$$40$$.length && (D.$DvtChartTypeUtils$$.$isPolar$($chart$$54$$) && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$54$$) && $line$$8_points$$40$$.length == 2 * D.$DvtChartDataUtils$$.$getGroupCount$($chart$$54$$) ? ($line$$8_points$$40$$ = new D.$DvtPolygon$$($context$$537$$, $line$$8_points$$40$$), $line$$8_points$$40$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $line$$8_points$$40$$ = new D.$DvtPolyline$$($context$$537$$, $line$$8_points$$40$$), $line$$8_points$$40$$.$setStroke$($stroke$$77$$), 
    $availSpace$$75_lines$$4$$.push($line$$8_points$$40$$))
  }
  return $availSpace$$75_lines$$4$$
};
D.$DvtPlotAreaRenderer$$.$getAreasFromCoords$ = function $$DvtPlotAreaRenderer$$$$getAreasFromCoords$$($chart$$55$$, $coords$$7_pointsArrays$$3$$, $fill$$46$$, $stroke$$78$$, $baselineCoord$$6$$, $availSpace$$76$$) {
  var $context$$538$$ = $chart$$55$$.$_context$;
  $coords$$7_pointsArrays$$3$$ = D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$($chart$$55$$, $coords$$7_pointsArrays$$3$$, $availSpace$$76$$);
  for(var $areas$$11$$ = [], $i$$477$$ = 0;$i$$477$$ < $coords$$7_pointsArrays$$3$$.length;$i$$477$$++) {
    var $points$$41_polygon$$2$$ = $coords$$7_pointsArrays$$3$$[$i$$477$$];
    $points$$41_polygon$$2$$ && 2 < $points$$41_polygon$$2$$.length && (D.$DvtChartTypeUtils$$.$isPolar$($chart$$55$$) ? $points$$41_polygon$$2$$.length < 2 * D.$DvtChartDataUtils$$.$getGroupCount$($chart$$55$$) && $points$$41_polygon$$2$$.push($availSpace$$76$$.x + $availSpace$$76$$.$w$ / 2, $availSpace$$76$$.y + $availSpace$$76$$.$h$ / 2) : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$55$$) ? ($points$$41_polygon$$2$$.push($baselineCoord$$6$$, $points$$41_polygon$$2$$[$points$$41_polygon$$2$$.length - 
    1]), $points$$41_polygon$$2$$.push($baselineCoord$$6$$, $points$$41_polygon$$2$$[1])) : ($points$$41_polygon$$2$$.push($points$$41_polygon$$2$$[$points$$41_polygon$$2$$.length - 2], $baselineCoord$$6$$), $points$$41_polygon$$2$$.push($points$$41_polygon$$2$$[0], $baselineCoord$$6$$)), $points$$41_polygon$$2$$ = new D.$DvtPolygon$$($context$$538$$, $points$$41_polygon$$2$$), $points$$41_polygon$$2$$.$setFill$($fill$$46$$), $stroke$$78$$ && $points$$41_polygon$$2$$.$setStroke$($stroke$$78$$), $areas$$11$$.push($points$$41_polygon$$2$$))
  }
  return $areas$$11$$
};
D.$DvtPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtPlotAreaRenderer$$$$createClippedGroup$$($chart$$56_obj$$inline_5138_r$$inline_5143$$, $clip$$2_container$$88$$, $availSpace$$77_cy$$35$$) {
  var $clipGroup$$2$$ = new D.$DvtContainer$$($clip$$2_container$$88$$.$_context$);
  $clip$$2_container$$88$$.$addChild$($clipGroup$$2$$);
  $clip$$2_container$$88$$ = new D.$DvtClipPath$$($chart$$56_obj$$inline_5138_r$$inline_5143$$.getId());
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$56_obj$$inline_5138_r$$inline_5143$$)) {
    var $cx$$34_points$$42$$ = $availSpace$$77_cy$$35$$.x + $availSpace$$77_cy$$35$$.$w$ / 2;
    $availSpace$$77_cy$$35$$ = $availSpace$$77_cy$$35$$.y + $availSpace$$77_cy$$35$$.$h$ / 2;
    if(D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$56_obj$$inline_5138_r$$inline_5143$$)) {
      $cx$$34_points$$42$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($cx$$34_points$$42$$, $availSpace$$77_cy$$35$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$56_obj$$inline_5138_r$$inline_5143$$), $chart$$56_obj$$inline_5138_r$$inline_5143$$.$getRadius$()), $chart$$56_obj$$inline_5138_r$$inline_5143$$ = {type:3}, $chart$$56_obj$$inline_5138_r$$inline_5143$$.$points$ = $cx$$34_points$$42$$, $chart$$56_obj$$inline_5138_r$$inline_5143$$ && $clip$$2_container$$88$$.$_regions$.push($chart$$56_obj$$inline_5138_r$$inline_5143$$)
    }else {
      $chart$$56_obj$$inline_5138_r$$inline_5143$$ = $chart$$56_obj$$inline_5138_r$$inline_5143$$.$getRadius$();
      var $obj$$inline_5144$$ = {type:5};
      $obj$$inline_5144$$.$cx$ = $cx$$34_points$$42$$;
      $obj$$inline_5144$$.$cy$ = $availSpace$$77_cy$$35$$;
      $obj$$inline_5144$$.$r$ = $chart$$56_obj$$inline_5138_r$$inline_5143$$;
      $obj$$inline_5144$$ && $clip$$2_container$$88$$.$_regions$.push($obj$$inline_5144$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clip$$2_container$$88$$, $availSpace$$77_cy$$35$$.x, $availSpace$$77_cy$$35$$.y, $availSpace$$77_cy$$35$$.$w$, $availSpace$$77_cy$$35$$.$h$)
  }
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($clipGroup$$2$$, $clip$$2_container$$88$$);
  return $clipGroup$$2$$
};
D.$DvtPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtPlotAreaRenderer$$$$polarToCartesian$$($r$$67$$, $theta$$2$$, $availSpace$$78$$) {
  window.x = $availSpace$$78$$.x + $availSpace$$78$$.$w$ / 2 + $r$$67$$ * window.Math.sin($theta$$2$$);
  window.y = $availSpace$$78$$.y + $availSpace$$78$$.$h$ / 2 - $r$$67$$ * window.Math.cos($theta$$2$$);
  return new D.$DvtPoint$$(window.x, window.y)
};
D.$DvtFunnelRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelRenderer$$, D.$DvtObj$$, "DvtFunnelRenderer");
D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 60;
D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ = 1 / 360;
D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = 0.25;
D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ = 0;
D.$DvtFunnelRenderer$$.$render$ = function $$DvtFunnelRenderer$$$$render$$($chart$$28$$, $container$$68_selected$$14$$, $availSpace$$57$$) {
  var $funnelContainer$$ = new D.$DvtContainer$$($chart$$28$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($funnelContainer$$, $availSpace$$57$$.x, $availSpace$$57$$.y);
  $container$$68_selected$$14$$.$addChild$($funnelContainer$$);
  $chart$$28$$.$_funnelContainer$ = $funnelContainer$$;
  var $bbox$$8$$;
  if("horizontal" == $chart$$28$$.$getOptions$().orientation) {
    $bbox$$8$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$57$$.$w$, $availSpace$$57$$.$h$)
  }else {
    var $rotationMatrix$$1$$ = new D.$DvtMatrix$$;
    D.$DvtAgent$$.$isRightToLeft$($chart$$28$$.$_context$) ? ($rotationMatrix$$1$$.translate($availSpace$$57$$.y - $availSpace$$57$$.$h$ / 2, $availSpace$$57$$.y - $availSpace$$57$$.$w$ / 2), $rotationMatrix$$1$$.rotate(-window.Math.PI / 2), $rotationMatrix$$1$$.translate($availSpace$$57$$.x + $availSpace$$57$$.$w$ / 2, $availSpace$$57$$.x + $availSpace$$57$$.$h$ / 2)) : ($rotationMatrix$$1$$.translate(-$availSpace$$57$$.$h$ / 2, -$availSpace$$57$$.$w$ / 2), $rotationMatrix$$1$$.rotate(window.Math.PI / 
    2), $rotationMatrix$$1$$.translate($availSpace$$57$$.$w$ / 2, $availSpace$$57$$.y + $availSpace$$57$$.$h$ / 2));
    $bbox$$8$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$57$$.$h$, $availSpace$$57$$.$w$);
    $funnelContainer$$.$setMatrix$($rotationMatrix$$1$$)
  }
  D.$DvtFunnelRenderer$$.$_renderFunnelSlices$($chart$$28$$, $funnelContainer$$, $bbox$$8$$) || D.$DvtChartRenderer$$.$renderEmptyText$($chart$$28$$, $container$$68_selected$$14$$, $availSpace$$57$$);
  $container$$68_selected$$14$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$28$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$28$$, $container$$68_selected$$14$$)
};
D.$DvtFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtFunnelRenderer$$$$_renderFunnelSlices$$($chart$$29$$, $container$$69$$, $availSpace$$58$$) {
  for(var $options$$82_totalValue$$ = $chart$$29$$.$getOptions$(), $seriesCount$$6_slice$$9_targetValue$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$29$$), $gapSize$$ = "on" == $options$$82_totalValue$$.styleDefaults.threeDEffect ? D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ * $availSpace$$58$$.$w$ : D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ * $availSpace$$58$$.$w$, $gapSize$$ = "on" == $options$$82_totalValue$$.styleDefaults.funnelSliceGaps ? window.Math.min(D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * 
  $availSpace$$58$$.$w$ / ($seriesCount$$6_slice$$9_targetValue$$ - 1), $gapSize$$) : D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ * $availSpace$$58$$.$w$, $numDrawnSeries$$2$$ = $options$$82_totalValue$$ = 0, $cumulativeValue$$ = 0, $seriesIndex$$5$$ = 0;$seriesIndex$$5$$ < $seriesCount$$6_slice$$9_targetValue$$;$seriesIndex$$5$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$29$$, $seriesIndex$$5$$)) {
      var $value$$79$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$29$$, $seriesIndex$$5$$);
      $value$$79$$ == D.$JSCompiler_alias_NULL$$ && ($value$$79$$ = D.$DvtChartDataUtils$$.getValue($chart$$29$$, $seriesIndex$$5$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$));
      0 >= $value$$79$$ || ($options$$82_totalValue$$ += $value$$79$$)
    }
  }
  if(0 == $options$$82_totalValue$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for($seriesIndex$$5$$ = $seriesCount$$6_slice$$9_targetValue$$ - 1;0 <= $seriesIndex$$5$$;$seriesIndex$$5$$--) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$29$$, $seriesIndex$$5$$) && ($value$$79$$ = D.$DvtChartDataUtils$$.getValue($chart$$29$$, $seriesIndex$$5$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$), $seriesCount$$6_slice$$9_targetValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$29$$, $seriesIndex$$5$$), 0 >= $value$$79$$ && $seriesCount$$6_slice$$9_targetValue$$ == D.$JSCompiler_alias_NULL$$ || $seriesCount$$6_slice$$9_targetValue$$ != D.$JSCompiler_alias_NULL$$ && 0 >= $seriesCount$$6_slice$$9_targetValue$$ || 
    ($seriesCount$$6_slice$$9_targetValue$$ != D.$JSCompiler_alias_NULL$$ ? ($cumulativeValue$$ += $seriesCount$$6_slice$$9_targetValue$$ / $options$$82_totalValue$$, $seriesCount$$6_slice$$9_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$29$$, $seriesIndex$$5$$, $numDrawnSeries$$2$$, $availSpace$$58$$.$w$, $availSpace$$58$$.$h$, 1 - $cumulativeValue$$, $seriesCount$$6_slice$$9_targetValue$$ / $options$$82_totalValue$$, $value$$79$$ / $seriesCount$$6_slice$$9_targetValue$$, $gapSize$$)) : ($cumulativeValue$$ += 
    $value$$79$$ / $options$$82_totalValue$$, $seriesCount$$6_slice$$9_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$29$$, $seriesIndex$$5$$, $numDrawnSeries$$2$$, $availSpace$$58$$.$w$, $availSpace$$58$$.$h$, 1 - $cumulativeValue$$, $value$$79$$ / $options$$82_totalValue$$, D.$JSCompiler_alias_NULL$$, $gapSize$$)), $numDrawnSeries$$2$$++, $container$$69$$.$addChild$($seriesCount$$6_slice$$9_targetValue$$), (0,D.$DvtChartObjPeer$associate$$)($seriesCount$$6_slice$$9_targetValue$$, $chart$$29$$, 
    $seriesIndex$$5$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$)))
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtRefObjRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRefObjRenderer$$, D.$DvtObj$$, "DvtRefObjRenderer");
D.$DvtRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtRefObjRenderer$$$$renderBackgroundObjects$$($chart$$30$$, $plotAreaBounds$$2$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$30$$, $plotAreaBounds$$2$$, "back")
};
D.$DvtRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtRefObjRenderer$$$$renderForegroundObjects$$($chart$$31$$, $plotAreaBounds$$3$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$31$$, $plotAreaBounds$$3$$, "front")
};
D.$DvtRefObjRenderer$$.$_renderObjects$ = function $$DvtRefObjRenderer$$$$_renderObjects$$($chart$$32$$, $plotAreaBounds$$4$$, $location$$21$$) {
  var $container$$72$$ = window.clipGroup;
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$32$$, $container$$72$$, $plotAreaBounds$$4$$, $location$$21$$, $chart$$32$$.$xAxis$, D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$32$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$32$$, $container$$72$$, $plotAreaBounds$$4$$, $location$$21$$, $chart$$32$$.$yAxis$, D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$32$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$32$$, $container$$72$$, $plotAreaBounds$$4$$, $location$$21$$, $chart$$32$$.$y2Axis$, D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$32$$))
};
D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtRefObjRenderer$$$$_renderObjectsForAxis$$($chart$$33$$, $container$$73$$, $plotAreaBounds$$5$$, $location$$22$$, $axis$$23$$, $objects$$1$$) {
  if($objects$$1$$ && $axis$$23$$) {
    for(var $i$$467$$ = 0;$i$$467$$ < $objects$$1$$.length;$i$$467$$++) {
      var $refObj_tooltip$$35$$ = $objects$$1$$[$i$$467$$];
      if($refObj_tooltip$$35$$ && D.$DvtChartRefObjUtils$$.$getLocation$($refObj_tooltip$$35$$) == $location$$22$$) {
        var $shape$$74$$, $type$$168$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj_tooltip$$35$$);
        "area" == $type$$168$$ ? $shape$$74$$ = D.$DvtRefObjRenderer$$.$_createReferenceArea$($refObj_tooltip$$35$$, $chart$$33$$, $plotAreaBounds$$5$$, $axis$$23$$) : "line" == $type$$168$$ && ($shape$$74$$ = D.$DvtRefObjRenderer$$.$_createReferenceLine$($refObj_tooltip$$35$$, $chart$$33$$, $plotAreaBounds$$5$$, $axis$$23$$));
        $shape$$74$$ != D.$JSCompiler_alias_NULL$$ && ($refObj_tooltip$$35$$ = D.$DvtChartTooltipUtils$$.$getRefObjTooltip$($refObj_tooltip$$35$$), $chart$$33$$.$getEventManager$().$associate$($shape$$74$$, new D.$DvtSimpleObjPeer$$($refObj_tooltip$$35$$)), $container$$73$$.$addChild$($shape$$74$$), (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($shape$$74$$, "img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($shape$$74$$, "label", $refObj_tooltip$$35$$))
      }
    }
  }
};
D.$DvtRefObjRenderer$$.$_createReferenceArea$ = function $$DvtRefObjRenderer$$$$_createReferenceArea$$($cy$$32_lowCoords_refObj$$1$$, $chart$$34_outerPoints_radius$$8$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$, $axis$$24_highCoord$$) {
  var $context$$530_shape$$75$$ = $chart$$34_outerPoints_radius$$8$$.$_context$, $areas$$8_color$$49_position$$34$$ = $axis$$24_highCoord$$.$getPosition$(), $bHoriz$$1_cx$$31_highCoords$$ = "top" == $areas$$8_color$$49_position$$34$$ || "bottom" == $areas$$8_color$$49_position$$34$$, $bRadial_pLow_pointIndex$$ = "radial" == $areas$$8_color$$49_position$$34$$, $areas$$8_color$$49_position$$34$$ = D.$DvtChartRefObjUtils$$.$getColor$($cy$$32_lowCoords_refObj$$1$$);
  if($cy$$32_lowCoords_refObj$$1$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$24_highCoord$$ == $chart$$34_outerPoints_radius$$8$$.$yAxis$) {
    var $items$$3_lowCoord$$ = $cy$$32_lowCoords_refObj$$1$$.items, $bHoriz$$1_cx$$31_highCoords$$ = [];
    $cy$$32_lowCoords_refObj$$1$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($chart$$34_outerPoints_radius$$8$$.$xAxis$)) {
      for(;$items$$3_lowCoord$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$34_outerPoints_radius$$8$$);) {
        $items$$3_lowCoord$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    for($bRadial_pLow_pointIndex$$ = 0;$bRadial_pLow_pointIndex$$ < $items$$3_lowCoord$$.length;$bRadial_pLow_pointIndex$$++) {
      var $dataItem$$2_hCoord$$ = $items$$3_lowCoord$$[$bRadial_pLow_pointIndex$$];
      if($dataItem$$2_hCoord$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$2_hCoord$$.min == D.$JSCompiler_alias_NULL$$ || $dataItem$$2_hCoord$$.max == D.$JSCompiler_alias_NULL$$) {
        $bHoriz$$1_cx$$31_highCoords$$.push(D.$JSCompiler_alias_NULL$$), $cy$$32_lowCoords_refObj$$1$$.push(D.$JSCompiler_alias_NULL$$)
      }else {
        var $lCoord$$ = $axis$$24_highCoord$$.$getUnboundedCoordAt$($dataItem$$2_hCoord$$.min), $dataItem$$2_hCoord$$ = $axis$$24_highCoord$$.$getUnboundedCoordAt$($dataItem$$2_hCoord$$.max), $xCoord$$1$$ = $chart$$34_outerPoints_radius$$8$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($items$$3_lowCoord$$, $bRadial_pLow_pointIndex$$));
        $bHoriz$$1_cx$$31_highCoords$$.push(new D.$DvtPoint$$($xCoord$$1$$, $dataItem$$2_hCoord$$));
        $cy$$32_lowCoords_refObj$$1$$.push(new D.$DvtPoint$$($xCoord$$1$$, $lCoord$$))
      }
    }
    $areas$$8_color$$49_position$$34$$ = D.$DvtRefObjRenderer$$.$getRangeAreasFromCoords$($chart$$34_outerPoints_radius$$8$$, $bHoriz$$1_cx$$31_highCoords$$, $cy$$32_lowCoords_refObj$$1$$, new D.$DvtSolidFill$$($areas$$8_color$$49_position$$34$$), $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$);
    $context$$530_shape$$75$$ = new D.$DvtContainer$$($context$$530_shape$$75$$);
    for($cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$ = 0;$cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$ < $areas$$8_color$$49_position$$34$$.length;$cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$++) {
      $context$$530_shape$$75$$.$addChild$($areas$$8_color$$49_position$$34$$[$cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$])
    }
  }else {
    if($cy$$32_lowCoords_refObj$$1$$.min == D.$JSCompiler_alias_NULL$$ || -window.Infinity == $cy$$32_lowCoords_refObj$$1$$.min) {
      $cy$$32_lowCoords_refObj$$1$$.min = $axis$$24_highCoord$$.$getGlobalMin$()
    }
    if($cy$$32_lowCoords_refObj$$1$$.max == D.$JSCompiler_alias_NULL$$ || window.Infinity == $cy$$32_lowCoords_refObj$$1$$.max) {
      $cy$$32_lowCoords_refObj$$1$$.max = $axis$$24_highCoord$$.$getGlobalMax$()
    }
    $items$$3_lowCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$34_outerPoints_radius$$8$$, $axis$$24_highCoord$$, $cy$$32_lowCoords_refObj$$1$$.min);
    $axis$$24_highCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$34_outerPoints_radius$$8$$, $axis$$24_highCoord$$, $cy$$32_lowCoords_refObj$$1$$.max);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$34_outerPoints_radius$$8$$) ? ($bHoriz$$1_cx$$31_highCoords$$ = $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.x + $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.$w$ / 2, $cy$$32_lowCoords_refObj$$1$$ = $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.y + $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.$h$ / 2, $bRadial_pLow_pointIndex$$ ? D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$34_outerPoints_radius$$8$$) ? 
    ($cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$34_outerPoints_radius$$8$$), $chart$$34_outerPoints_radius$$8$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$1_cx$$31_highCoords$$, $cy$$32_lowCoords_refObj$$1$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$, $axis$$24_highCoord$$, 1), $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$1_cx$$31_highCoords$$, 
    $cy$$32_lowCoords_refObj$$1$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$, $items$$3_lowCoord$$, 0), $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$ = window.DvtPathUtils.$polyline$($chart$$34_outerPoints_radius$$8$$) + window.DvtPathUtils.$polyline$($cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$) + window.DvtPathUtils.closePath()) : $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$ = window.DvtPathUtils.moveTo($bHoriz$$1_cx$$31_highCoords$$, 
    $cy$$32_lowCoords_refObj$$1$$ - $axis$$24_highCoord$$) + window.DvtPathUtils.arcTo($axis$$24_highCoord$$, $axis$$24_highCoord$$, window.Math.PI, 1, $bHoriz$$1_cx$$31_highCoords$$, $cy$$32_lowCoords_refObj$$1$$ + $axis$$24_highCoord$$) + window.DvtPathUtils.arcTo($axis$$24_highCoord$$, $axis$$24_highCoord$$, window.Math.PI, 1, $bHoriz$$1_cx$$31_highCoords$$, $cy$$32_lowCoords_refObj$$1$$ - $axis$$24_highCoord$$) + window.DvtPathUtils.moveTo($bHoriz$$1_cx$$31_highCoords$$, $cy$$32_lowCoords_refObj$$1$$ - 
    $items$$3_lowCoord$$) + window.DvtPathUtils.arcTo($items$$3_lowCoord$$, $items$$3_lowCoord$$, window.Math.PI, 0, $bHoriz$$1_cx$$31_highCoords$$, $cy$$32_lowCoords_refObj$$1$$ + $items$$3_lowCoord$$) + window.DvtPathUtils.arcTo($items$$3_lowCoord$$, $items$$3_lowCoord$$, window.Math.PI, 0, $bHoriz$$1_cx$$31_highCoords$$, $cy$$32_lowCoords_refObj$$1$$ - $items$$3_lowCoord$$) + window.DvtPathUtils.closePath() : ($chart$$34_outerPoints_radius$$8$$ = $chart$$34_outerPoints_radius$$8$$.$getRadius$(), 
    $bRadial_pLow_pointIndex$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$34_outerPoints_radius$$8$$, $items$$3_lowCoord$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$), $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$34_outerPoints_radius$$8$$, $axis$$24_highCoord$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$), $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$ = window.DvtPathUtils.moveTo($bHoriz$$1_cx$$31_highCoords$$, 
    $cy$$32_lowCoords_refObj$$1$$) + window.DvtPathUtils.lineTo($bRadial_pLow_pointIndex$$.x, $bRadial_pLow_pointIndex$$.y) + window.DvtPathUtils.arcTo($chart$$34_outerPoints_radius$$8$$, $chart$$34_outerPoints_radius$$8$$, $axis$$24_highCoord$$ - $items$$3_lowCoord$$, 1, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.x, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.y) + window.DvtPathUtils.lineTo($cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.x, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.y) + 
    window.DvtPathUtils.closePath()), $context$$530_shape$$75$$ = new D.$DvtPath$$($context$$530_shape$$75$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$)) : $context$$530_shape$$75$$ = new D.$DvtPolygon$$($context$$530_shape$$75$$, $bHoriz$$1_cx$$31_highCoords$$ ? [$items$$3_lowCoord$$, 0, $axis$$24_highCoord$$, 0, $axis$$24_highCoord$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.$h$, $items$$3_lowCoord$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.$h$] : 
    [0, $items$$3_lowCoord$$, 0, $axis$$24_highCoord$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.$w$, $axis$$24_highCoord$$, $cmds$$20_innerPoints_j$$53_nSides_pHigh_plotAreaBounds$$6$$.$w$, $items$$3_lowCoord$$]);
    $context$$530_shape$$75$$.$setSolidFill$($areas$$8_color$$49_position$$34$$)
  }
  return $context$$530_shape$$75$$
};
D.$DvtRefObjRenderer$$.$_createReferenceLine$ = function $$DvtRefObjRenderer$$$$_createReferenceLine$$($cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$, $cartesian_chart$$35_shape$$76$$, $lines$$2_plotAreaBounds$$7$$, $axis$$25_cx$$32$$) {
  var $j$$54_lineWidth$$2_position$$35_stroke$$72$$ = $axis$$25_cx$$32$$.$getPosition$(), $bHoriz$$2_items$$4$$ = "top" == $j$$54_lineWidth$$2_position$$35_stroke$$72$$ || "bottom" == $j$$54_lineWidth$$2_position$$35_stroke$$72$$, $bRadial$$1_coords$$1_points$$36$$ = "radial" == $j$$54_lineWidth$$2_position$$35_stroke$$72$$, $bTangential_pointIndex$$1$$ = "tangential" == $j$$54_lineWidth$$2_position$$35_stroke$$72$$, $j$$54_lineWidth$$2_position$$35_stroke$$72$$ = D.$DvtChartRefObjUtils$$.$getLineWidth$($cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$), 
  $color$$50_context$$531$$ = D.$DvtChartRefObjUtils$$.$getColor$($cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$), $j$$54_lineWidth$$2_position$$35_stroke$$72$$ = new D.$DvtSolidStroke$$($color$$50_context$$531$$, 1, $j$$54_lineWidth$$2_position$$35_stroke$$72$$);
  $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$.lineStyle && $j$$54_lineWidth$$2_position$$35_stroke$$72$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$.lineStyle));
  $color$$50_context$$531$$ = $cartesian_chart$$35_shape$$76$$.$_context$;
  if($cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$25_cx$$32$$ == $cartesian_chart$$35_shape$$76$$.$yAxis$) {
    $bHoriz$$2_items$$4$$ = $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$.items;
    $bRadial$$1_coords$$1_points$$36$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($cartesian_chart$$35_shape$$76$$.$xAxis$)) {
      for(;$bHoriz$$2_items$$4$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($cartesian_chart$$35_shape$$76$$);) {
        $bHoriz$$2_items$$4$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    $bRadial$$1_coords$$1_points$$36$$ = [];
    for($bTangential_pointIndex$$1$$ = 0;$bTangential_pointIndex$$1$$ < $bHoriz$$2_items$$4$$.length;$bTangential_pointIndex$$1$$++) {
      $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$ = $bHoriz$$2_items$$4$$[$bTangential_pointIndex$$1$$];
      var $lineCoord_value$$80_xCoord$$2$$ = D.$JSCompiler_alias_NULL$$;
      $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,window.isNaN)($cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$) ? $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$.value != D.$JSCompiler_alias_NULL$$ && ($lineCoord_value$$80_xCoord$$2$$ = $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$.value) : $lineCoord_value$$80_xCoord$$2$$ = $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$);
      $lineCoord_value$$80_xCoord$$2$$ == D.$JSCompiler_alias_NULL$$ ? $bRadial$$1_coords$$1_points$$36$$.push(D.$JSCompiler_alias_NULL$$) : ($cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$ = $axis$$25_cx$$32$$.$getUnboundedCoordAt$($lineCoord_value$$80_xCoord$$2$$), $lineCoord_value$$80_xCoord$$2$$ = $cartesian_chart$$35_shape$$76$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($bHoriz$$2_items$$4$$, $bTangential_pointIndex$$1$$)), $bRadial$$1_coords$$1_points$$36$$.push(new D.$DvtPoint$$($lineCoord_value$$80_xCoord$$2$$, 
      $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$)))
    }
    $lines$$2_plotAreaBounds$$7$$ = D.$DvtPlotAreaRenderer$$.$getLinesFromCoords$($cartesian_chart$$35_shape$$76$$, $bRadial$$1_coords$$1_points$$36$$, $j$$54_lineWidth$$2_position$$35_stroke$$72$$, $lines$$2_plotAreaBounds$$7$$);
    $cartesian_chart$$35_shape$$76$$ = new D.$DvtContainer$$($color$$50_context$$531$$);
    for($j$$54_lineWidth$$2_position$$35_stroke$$72$$ = 0;$j$$54_lineWidth$$2_position$$35_stroke$$72$$ < $lines$$2_plotAreaBounds$$7$$.length;$j$$54_lineWidth$$2_position$$35_stroke$$72$$++) {
      $cartesian_chart$$35_shape$$76$$.$addChild$($lines$$2_plotAreaBounds$$7$$[$j$$54_lineWidth$$2_position$$35_stroke$$72$$])
    }
  }else {
    if($cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$.value) {
      $lineCoord_value$$80_xCoord$$2$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($cartesian_chart$$35_shape$$76$$, $axis$$25_cx$$32$$, $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$.value);
      if($lineCoord_value$$80_xCoord$$2$$ === D.$JSCompiler_alias_NULL$$) {
        return D.$JSCompiler_alias_NULL$$
      }
      $axis$$25_cx$$32$$ = $lines$$2_plotAreaBounds$$7$$.x + $lines$$2_plotAreaBounds$$7$$.$w$ / 2;
      $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$ = $lines$$2_plotAreaBounds$$7$$.y + $lines$$2_plotAreaBounds$$7$$.$h$ / 2;
      $bRadial$$1_coords$$1_points$$36$$ ? (D.$DvtChartAxisUtils$$.$isGridPolygonal$($cartesian_chart$$35_shape$$76$$) ? ($bRadial$$1_coords$$1_points$$36$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($axis$$25_cx$$32$$, $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$, D.$DvtChartDataUtils$$.$getGroupCount$($cartesian_chart$$35_shape$$76$$), $lineCoord_value$$80_xCoord$$2$$), $cartesian_chart$$35_shape$$76$$ = new D.$DvtPolygon$$($color$$50_context$$531$$, $bRadial$$1_coords$$1_points$$36$$)) : $cartesian_chart$$35_shape$$76$$ = 
      new D.$DvtCircle$$($color$$50_context$$531$$, $axis$$25_cx$$32$$, $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$, $lineCoord_value$$80_xCoord$$2$$), $cartesian_chart$$35_shape$$76$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $bTangential_pointIndex$$1$$ ? ($cartesian_chart$$35_shape$$76$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian_chart$$35_shape$$76$$.$getRadius$(), $lineCoord_value$$80_xCoord$$2$$, $lines$$2_plotAreaBounds$$7$$), $cartesian_chart$$35_shape$$76$$ = new D.$DvtLine$$($color$$50_context$$531$$, 
      $axis$$25_cx$$32$$, $cy$$33_dataItem$$3_refObj$$2_yCoord$$1$$, $cartesian_chart$$35_shape$$76$$.x, $cartesian_chart$$35_shape$$76$$.y)) : ($cartesian_chart$$35_shape$$76$$ = $bHoriz$$2_items$$4$$ ? new D.$DvtLine$$($color$$50_context$$531$$, $lineCoord_value$$80_xCoord$$2$$, 0, $lineCoord_value$$80_xCoord$$2$$, $lines$$2_plotAreaBounds$$7$$.$h$) : new D.$DvtLine$$($color$$50_context$$531$$, 0, $lineCoord_value$$80_xCoord$$2$$, $lines$$2_plotAreaBounds$$7$$.$w$, $lineCoord_value$$80_xCoord$$2$$), 
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cartesian_chart$$35_shape$$76$$));
      $cartesian_chart$$35_shape$$76$$.$setStroke$($j$$54_lineWidth$$2_position$$35_stroke$$72$$)
    }else {
      return D.$JSCompiler_alias_NULL$$
    }
  }
  return $cartesian_chart$$35_shape$$76$$
};
D.$DvtRefObjRenderer$$.$getRangeAreasFromCoords$ = function $$DvtRefObjRenderer$$$$getRangeAreasFromCoords$$($chart$$36$$, $highArrays_highCoords$$1$$, $lowArrays_lowCoords$$1$$, $fill$$43$$, $areas$$9_availSpace$$59$$) {
  var $context$$532$$ = $chart$$36$$.$_context$;
  $highArrays_highCoords$$1$$ = D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$($chart$$36$$, $highArrays_highCoords$$1$$, $areas$$9_availSpace$$59$$);
  $lowArrays_lowCoords$$1$$ = D.$DvtPlotAreaRenderer$$.$getPointsFromCoords$($chart$$36$$, $lowArrays_lowCoords$$1$$, $areas$$9_availSpace$$59$$);
  if($highArrays_highCoords$$1$$.length == $lowArrays_lowCoords$$1$$.length) {
    $areas$$9_availSpace$$59$$ = [];
    for(var $i$$468$$ = 0;$i$$468$$ < $highArrays_highCoords$$1$$.length;$i$$468$$++) {
      var $highArray_points$$37_polygon$$1$$ = $highArrays_highCoords$$1$$[$i$$468$$], $j$$55_lowArray$$ = $lowArrays_lowCoords$$1$$[$i$$468$$];
      if(!(2 > $highArray_points$$37_polygon$$1$$.length)) {
        D.$DvtChartTypeUtils$$.$isPolar$($chart$$36$$) && (D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$36$$) && $highArray_points$$37_polygon$$1$$.length == 2 * D.$DvtChartDataUtils$$.$getGroupCount$($chart$$36$$)) && ($highArray_points$$37_polygon$$1$$.push($highArray_points$$37_polygon$$1$$[0], $highArray_points$$37_polygon$$1$$[1]), $j$$55_lowArray$$.push($j$$55_lowArray$$[0], $j$$55_lowArray$$[1]));
        $highArray_points$$37_polygon$$1$$ = $highArray_points$$37_polygon$$1$$.slice(0);
        for($j$$55_lowArray$$ = 0;$j$$55_lowArray$$ < $lowArrays_lowCoords$$1$$[$i$$468$$].length;$j$$55_lowArray$$ += 2) {
          $highArray_points$$37_polygon$$1$$.unshift($lowArrays_lowCoords$$1$$[$i$$468$$][$j$$55_lowArray$$], $lowArrays_lowCoords$$1$$[$i$$468$$][$j$$55_lowArray$$ + 1])
        }
        $highArray_points$$37_polygon$$1$$ = new D.$DvtPolygon$$($context$$532$$, $highArray_points$$37_polygon$$1$$);
        $highArray_points$$37_polygon$$1$$.$setFill$($fill$$43$$);
        $areas$$9_availSpace$$59$$.push($highArray_points$$37_polygon$$1$$)
      }
    }
    return $areas$$9_availSpace$$59$$
  }
};
D.$DvtRefObjRenderer$$.$_getXValue$ = function $$DvtRefObjRenderer$$$$_getXValue$$($items$$5$$, $index$$100$$) {
  var $dataItem$$4$$ = $items$$5$$[$index$$100$$];
  return(0,window.isNaN)($dataItem$$4$$.x) ? $index$$100$$ : $dataItem$$4$$.x
};
D.$DvtRefObjRenderer$$.$_getAxisCoord$ = function $$DvtRefObjRenderer$$$$_getAxisCoord$$($chart$$37_index$$101$$, $axis$$26$$, $value$$81$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$26$$) && ($chart$$37_index$$101$$ = D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$37_index$$101$$, $value$$81$$), 0 <= $chart$$37_index$$101$$) ? $axis$$26$$.$getUnboundedCoordAt$($chart$$37_index$$101$$) : !(0,window.isNaN)($value$$81$$) ? $axis$$26$$.$getUnboundedCoordAt$($value$$81$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataCursor$$ = function $$DvtDataCursor$$$($context$$659$$, $bHoriz$$6$$) {
  this.Init($context$$659$$, $bHoriz$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataCursor$$, D.$DvtContainer$$, "DvtDataCursor");
D.$DvtDataCursor$$.prototype.Init = function $$DvtDataCursor$$$$Init$($context$$660$$, $bHoriz$$7$$) {
  D.$DvtDataCursor$$.$superclass$.Init.call(this, $context$$660$$);
  this.$_bHoriz$ = $bHoriz$$7$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $bHoriz$$7$$ ? (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 2, "dcLine"), this.$_cursorLineRect$.$setTranslateY$(-1)) : (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 2, 0, "dcLine"), this.$_cursorLineRect$.$setTranslateX$(-1));
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
D.$DvtDataCursor$$.prototype.$render$ = function $$DvtDataCursor$$$$$render$$($plotAreaBounds$$9$$, $dataX_isChrome$$, $cursorHeight_dataY$$, $lineCoord$$1$$, $startX$$6_text$$89_tooltipBounds$$1$$, $dataColor$$9$$) {
  var $bHoriz$$8$$ = this.$isHorizontal$(), $bRtl$$1$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$), $stagePageCoords$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$), $tooltipManager$$9$$ = this.$_context$.$getTooltipManager$("_dvtDataCursor");
  $tooltipManager$$9$$.$showDatatip$($dataX_isChrome$$ + $stagePageCoords$$.x, $cursorHeight_dataY$$ + $stagePageCoords$$.y, $startX$$6_text$$89_tooltipBounds$$1$$, $dataColor$$9$$, D.$JSCompiler_alias_FALSE$$);
  $startX$$6_text$$89_tooltipBounds$$1$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$9$$);
  var $tooltipX$$1$$, $tooltipY$$1$$;
  $bHoriz$$8$$ ? ($tooltipX$$1$$ = $bRtl$$1$$ ? $plotAreaBounds$$9$$.x - 0.75 * $startX$$6_text$$89_tooltipBounds$$1$$.$w$ : $plotAreaBounds$$9$$.x + $plotAreaBounds$$9$$.$w$ - $startX$$6_text$$89_tooltipBounds$$1$$.$w$ / 4, $tooltipY$$1$$ = $lineCoord$$1$$ - $startX$$6_text$$89_tooltipBounds$$1$$.$h$ / 2, !$bRtl$$1$$ && 16 > $tooltipX$$1$$ - $dataX_isChrome$$ ? $tooltipX$$1$$ = $dataX_isChrome$$ + 16 : $bRtl$$1$$ && 16 > $dataX_isChrome$$ - ($tooltipX$$1$$ + $startX$$6_text$$89_tooltipBounds$$1$$.$w$) && 
  ($tooltipX$$1$$ = $dataX_isChrome$$ - 16 - $startX$$6_text$$89_tooltipBounds$$1$$.$w$)) : ($tooltipX$$1$$ = $lineCoord$$1$$ - $startX$$6_text$$89_tooltipBounds$$1$$.$w$ / 2, $tooltipY$$1$$ = $plotAreaBounds$$9$$.y - 0.75 * $startX$$6_text$$89_tooltipBounds$$1$$.$h$, 16 > $cursorHeight_dataY$$ - ($tooltipY$$1$$ + $startX$$6_text$$89_tooltipBounds$$1$$.$h$) && ($tooltipY$$1$$ = $cursorHeight_dataY$$ - 16 - $startX$$6_text$$89_tooltipBounds$$1$$.$h$));
  (0,D.$JSCompiler_StaticMethods_positionTip$$)($tooltipManager$$9$$, $tooltipX$$1$$ + $stagePageCoords$$.x, $tooltipY$$1$$ + $stagePageCoords$$.y);
  $startX$$6_text$$89_tooltipBounds$$1$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$9$$);
  $tooltipX$$1$$ = $startX$$6_text$$89_tooltipBounds$$1$$.x - $stagePageCoords$$.x;
  $tooltipY$$1$$ = $startX$$6_text$$89_tooltipBounds$$1$$.y - $stagePageCoords$$.y;
  this.$_markerInnerCircle$.$setSolidFill$($dataColor$$9$$);
  $bHoriz$$8$$ ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $plotAreaBounds$$9$$.x, $lineCoord$$1$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $plotAreaBounds$$9$$.x, $cursorHeight_dataY$$ - $lineCoord$$1$$), this.$_cursorLineRect$.$setWidth$(window.Math.max($tooltipX$$1$$ + 1 - $plotAreaBounds$$9$$.x, 0)), $bRtl$$1$$ && ($startX$$6_text$$89_tooltipBounds$$1$$ = $tooltipX$$1$$ + $startX$$6_text$$89_tooltipBounds$$1$$.$w$ + 1 - $plotAreaBounds$$9$$.x, 
  this.$_cursorLineRect$.$setX$($startX$$6_text$$89_tooltipBounds$$1$$), this.$_cursorLineRect$.$setWidth$(window.Math.max($plotAreaBounds$$9$$.$w$ - $startX$$6_text$$89_tooltipBounds$$1$$, 0)))) : ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $lineCoord$$1$$, $plotAreaBounds$$9$$.y + 1), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $lineCoord$$1$$, $cursorHeight_dataY$$ - $plotAreaBounds$$9$$.y), $dataX_isChrome$$ = D.$DvtAgent$$.$isBrowserChrome$(), 
  $cursorHeight_dataY$$ = $plotAreaBounds$$9$$.y + $plotAreaBounds$$9$$.$h$ - $tooltipY$$1$$ - $startX$$6_text$$89_tooltipBounds$$1$$.$h$ + ($dataX_isChrome$$ ? 4 : 0), this.$_cursorLineRect$.$setTranslateY$($tooltipY$$1$$ + $startX$$6_text$$89_tooltipBounds$$1$$.$h$ - ($plotAreaBounds$$9$$.y + ($dataX_isChrome$$ ? 4 : 1))), this.$_cursorLineRect$.$setHeight$(window.Math.max($cursorHeight_dataY$$, 0)));
  D.$DvtAgent$$.$workaroundFirefoxRepaint$(this.$_marker$)
};
D.$DvtDataCursor$$.prototype.$isHorizontal$ = (0,D.$JSCompiler_get$$)("$_bHoriz$");
D.$DvtDCEH$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtDCEH$$, D.$DvtObj$$, "DvtDCEH");
D.$DvtDCEH$$.prototype.$_Init$ = function $$DvtDCEH$$$$$_Init$$($context$$662$$, $dataCursor$$1$$) {
  this.$_context$ = $context$$662$$;
  this.$_isNumericMainAxis$ = this.$_useAllInGroup$ = this.$_horizontal$ = this.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataCursor$ = $dataCursor$$1$$;
  this.$_threeDHorizontalOffset$ = 0
};
D.$JSCompiler_StaticMethods_processMove$$ = function $$JSCompiler_StaticMethods_processMove$$$($JSCompiler_StaticMethods_processMove$self$$, $dataCursor$$inline_7857_pageX$$17_pos$$72$$, $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$, $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$, $blockEventsRect_logicalObj$$16$$) {
  if($closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$) {
    $dataCursor$$inline_7857_pageX$$17_pos$$72$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_processMove$self$$.$_context$, $dataCursor$$inline_7857_pageX$$17_pos$$72$$, $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$);
    $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$ = $dataCursor$$inline_7857_pageX$$17_pos$$72$$.x;
    var $dcY$$inline_7861_y$$268$$ = $dataCursor$$inline_7857_pageX$$17_pos$$72$$.y;
    if($blockEventsRect_logicalObj$$16$$ = $JSCompiler_StaticMethods_processMove$self$$.$getActionablePlotRect$($dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$, $dcY$$inline_7861_y$$268$$, $blockEventsRect_logicalObj$$16$$)) {
      $dataCursor$$inline_7857_pageX$$17_pos$$72$$ = $JSCompiler_StaticMethods_processMove$self$$.$_dataCursor$;
      var $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$;
      var $centerPoint$$inline_7859_horizontal$$inline_10529$$ = $JSCompiler_StaticMethods_processMove$self$$.$_horizontal$;
      $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$ = $JSCompiler_StaticMethods_processMove$self$$.$_useAllInGroup$;
      var $closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$ = $JSCompiler_StaticMethods_processMove$self$$.$_isNumericMainAxis$, $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$ = [];
      if($closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$ = $JSCompiler_StaticMethods_processMove$self$$.$findMatches$($dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$, $dcY$$inline_7861_y$$268$$, $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$, $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$, $blockEventsRect_logicalObj$$16$$)) {
        $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$ = $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$
      }else {
        $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$ = 1E7;
        for(var $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$ = [], $diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$ = 0;$diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$ < $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$.length;$diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$++) {
          var $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$ = $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$[$diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$], $diffValue$$inline_10977_match$$inline_10540$$ = window.Math.abs((($centerPoint$$inline_7859_horizontal$$inline_10529$$ ? $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.x) + 
          ($centerPoint$$inline_7859_horizontal$$inline_10529$$ ? $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.y + $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.$w$)) / 
          2 - ($centerPoint$$inline_7859_horizontal$$inline_10529$$ ? $dcY$$inline_7861_y$$268$$ : $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$));
          $diffValue$$inline_10977_match$$inline_10540$$ <= $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$ && ($diffValue$$inline_10977_match$$inline_10540$$ < $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$ && ($closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$ = []), $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$.push($closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$), 
          $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$ = $diffValue$$inline_10977_match$$inline_10540$$)
        }
        $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$ = $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$;
        if(!$closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$) {
          $closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$ = 1E6;
          $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$ = -1E6;
          $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$ = D.$JSCompiler_alias_NULL$$;
          for($diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$ = 0;$diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$ < $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$.length;$diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$++) {
            $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$ = $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$[$diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$], $closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$ = window.Math.min($closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$, $centerPoint$$inline_7859_horizontal$$inline_10529$$ ? 
            $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.x), $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$ = window.Math.max($closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$, $centerPoint$$inline_7859_horizontal$$inline_10529$$ ? 
            $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.y + $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$matchRegion$.$w$), $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$ = 
            $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$.$gidx$
          }
          for($diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$ = 0;$diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$ < $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$.length;$diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$++) {
            var $diffValue$$inline_10977_match$$inline_10540$$ = $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$[$diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$], $itemGroup$$inline_10541_midPoint$$inline_10542$$ = $diffValue$$inline_10977_match$$inline_10540$$.$gidx$;
            $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$ ? $closestFirstDirectionMatch$$inline_10539_closestGroup$$inline_10537_matchObj$$inline_10976$$ == $itemGroup$$inline_10541_midPoint$$inline_10542$$ && $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$.push($diffValue$$inline_10977_match$$inline_10540$$) : ($itemGroup$$inline_10541_midPoint$$inline_10542$$ = (($centerPoint$$inline_7859_horizontal$$inline_10529$$ ? 
            $diffValue$$inline_10977_match$$inline_10540$$.$matchRegion$.y : $diffValue$$inline_10977_match$$inline_10540$$.$matchRegion$.x) + ($centerPoint$$inline_7859_horizontal$$inline_10529$$ ? $diffValue$$inline_10977_match$$inline_10540$$.$matchRegion$.y + $diffValue$$inline_10977_match$$inline_10540$$.$matchRegion$.$h$ : $diffValue$$inline_10977_match$$inline_10540$$.$matchRegion$.x + $diffValue$$inline_10977_match$$inline_10540$$.$matchRegion$.$w$)) / 2, $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$ >= 
            $itemGroup$$inline_10541_midPoint$$inline_10542$$ && $closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$ <= $itemGroup$$inline_10541_midPoint$$inline_10542$$ && $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$.push($diffValue$$inline_10977_match$$inline_10540$$))
          }
        }
        $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$ = D.$JSCompiler_alias_NULL$$;
        $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$ = 1E8;
        for($closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$ = 0;$closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$ < $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$.length;$closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$++) {
          $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$ = $closestFirstDirectionMatches$$inline_10534_immediateMatch$$inline_10533_minDiff$$inline_10973_targetObj$$31$$[$closestLowerBound$$inline_10535_i$$inline_10985_isNumericMainAxis$$inline_10531$$], $diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$ = window.Math.abs((($centerPoint$$inline_7859_horizontal$$inline_10529$$ ? $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$.$matchRegion$.x : 
          $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$.$matchRegion$.y) + ($centerPoint$$inline_7859_horizontal$$inline_10529$$ ? $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$.$matchRegion$.x + $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$.$matchRegion$.$w$ : $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$.$matchRegion$.y + 
          $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$.$matchRegion$.$h$)) / 2 - ($centerPoint$$inline_7859_horizontal$$inline_10529$$ ? $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$ : $dcY$$inline_7861_y$$268$$)), $diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$ < $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$ && ($matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$ = 
          $diffValue$$inline_10987_i$$inline_10538_i$$inline_10975$$, $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$ = $closestFirstDirectionMatches$$inline_10974_closestHigherBound$$inline_10536_match$$inline_10986$$)
        }
      }
      $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$) : ($centerPoint$$inline_7859_horizontal$$inline_10529$$ = D.$DvtGeomUtils$$.$getCenterPoint$($closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$.$matchRegion$), "SNAP" == ($dataCursor$$inline_7857_pageX$$17_pos$$72$$.$_behavior$ ? 
      $dataCursor$$inline_7857_pageX$$17_pos$$72$$.$_behavior$ : "AUTO") && ($dataCursor$$inline_7857_pageX$$17_pos$$72$$.$isHorizontal$() ? $dcY$$inline_7861_y$$268$$ = window.Math.min(window.Math.max($centerPoint$$inline_7859_horizontal$$inline_10529$$.y, $blockEventsRect_logicalObj$$16$$.y), $blockEventsRect_logicalObj$$16$$.y + $blockEventsRect_logicalObj$$16$$.$h$) : $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$ = window.Math.min(window.Math.max($centerPoint$$inline_7859_horizontal$$inline_10529$$.x, 
      $blockEventsRect_logicalObj$$16$$.x), $blockEventsRect_logicalObj$$16$$.x + $blockEventsRect_logicalObj$$16$$.$w$)), $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$ && ($matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$ = $blockEventsRect_logicalObj$$16$$.x + $blockEventsRect_logicalObj$$16$$.$w$ - $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$, $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$ > 
      $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$ && ($dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$ = $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$)), $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$ = $JSCompiler_StaticMethods_processMove$self$$.$getTooltipText$($closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$), 
      !$matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$ || "" == $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$ ? $dataCursor$$inline_7857_pageX$$17_pos$$72$$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : ($dataCursor$$inline_7857_pageX$$17_pos$$72$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$ = $JSCompiler_StaticMethods_processMove$self$$.$getSeriesColor$($closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$.$sidx$, 
      $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$.$gidx$), $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$ = $dataCursor$$inline_7857_pageX$$17_pos$$72$$.$isHorizontal$() ? $dcY$$inline_7861_y$$268$$ : $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$, $dataCursor$$inline_7857_pageX$$17_pos$$72$$.$render$($blockEventsRect_logicalObj$$16$$, $centerPoint$$inline_7859_horizontal$$inline_10529$$.x, $centerPoint$$inline_7859_horizontal$$inline_10529$$.y, 
      $dcX$$inline_7860_lineCoord$$inline_7865_pageY$$17_x$$299$$, $matches$$inline_10532_minDiff$$inline_10984_tooltipText$$inline_7863_xExtent$$inline_7862$$, $closestMatch$$inline_10983_closestMatch$$inline_7858_seriesColor$$inline_7864_useAllInGroup$$inline_10530$$), $JSCompiler_StaticMethods_processMove$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_TRUE$$))
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
D.$DvtChartDCEH$$ = function $$DvtChartDCEH$$$($chart$$232$$) {
  this.$_Init$($chart$$232$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDCEH$$, D.$DvtDCEH$$, "DvtChartDCEH");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartDCEH$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_Init$ = function $$JSCompiler_prototypeAlias$$$$_Init$$($chart$$233$$) {
  D.$DvtChartDCEH$$.$superclass$.$_Init$.call(this, $chart$$233$$.$_context$, $chart$$233$$.$DataCursor$);
  this.$_Chart$ = $chart$$233$$;
  this.$_horizontal$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$233$$);
  this.$_useAllInGroup$ = D.$DvtChartTypeUtils$$.$isArea$($chart$$233$$) || D.$DvtChartTypeUtils$$.$isLine$($chart$$233$$);
  this.$_isNumericMainAxis$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$233$$);
  this.$_isStockChart$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isArea$ = D.$DvtChartTypeUtils$$.$isArea$($chart$$233$$)
};
D.$JSCompiler_prototypeAlias$$.$getPlotRect$ = function $$JSCompiler_prototypeAlias$$$$getPlotRect$$() {
  return this.$_Chart$.$_plotAreaSpace$
};
D.$JSCompiler_prototypeAlias$$.$getActionablePlotRect$ = function $$JSCompiler_prototypeAlias$$$$getActionablePlotRect$$($x$$259$$, $y$$230$$) {
  var $plotRect$$ = this.$getPlotRect$();
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)($plotRect$$, $x$$259$$, $y$$230$$) ? $plotRect$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$findMatches$ = function $$JSCompiler_prototypeAlias$$$$findMatches$$($chart$$234_x$$260$$, $stage$$19_y$$231$$, $eventManager$$27_targetObj$$27$$, $matches$$9$$) {
  $chart$$234_x$$260$$ = this.$_Chart$;
  $stage$$19_y$$231$$ = $chart$$234_x$$260$$.$_context$.$_stage$;
  $eventManager$$27_targetObj$$27$$ = $chart$$234_x$$260$$.$getEventManager$();
  if(!$chart$$234_x$$260$$.$_currentMarkers$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$529$$ = 0;$i$$529$$ < $chart$$234_x$$260$$.$_currentMarkers$.length;$i$$529$$++) {
    for(var $markers$$10$$ = $chart$$234_x$$260$$.$_currentMarkers$[$i$$529$$], $numMarkers$$2$$ = $markers$$10$$.length, $idx$$28$$ = 0;$idx$$28$$ < $numMarkers$$2$$;$idx$$28$$++) {
      var $item$$33_match$$1$$ = $markers$$10$$[$idx$$28$$], $logicalObject$$9$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($eventManager$$27_targetObj$$27$$, $item$$33_match$$1$$), $dims$$30$$ = $item$$33_match$$1$$.$getDimensionsSelf$ ? $item$$33_match$$1$$.$getDimensionsSelf$($stage$$19_y$$231$$) : $item$$33_match$$1$$.$getDimensions$($stage$$19_y$$231$$), $item$$33_match$$1$$ = {$obj$:$item$$33_match$$1$$, $matchRegion$:$dims$$30$$, $gidx$:$logicalObject$$9$$.$getGroupIndex$(), $sidx$:$logicalObject$$9$$.$getSeriesIndex$(), 
      $marker$:D.$JSCompiler_alias_NULL$$};
      $matches$$9$$.push($item$$33_match$$1$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeriesColor$ = function $$JSCompiler_prototypeAlias$$$$getSeriesColor$$($seriesIndex$$79$$, $groupIndex$$44$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_Chart$, $seriesIndex$$79$$, $groupIndex$$44$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipText$ = function $$JSCompiler_prototypeAlias$$$$getTooltipText$$($closestMatch$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($closestMatch$$.$obj$, this.$_Chart$, $closestMatch$$.$sidx$, $closestMatch$$.$gidx$)
};
D.$DvtSparkChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSparkChart", D.$DvtSparkChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChart$$, D.$DvtBaseComponent$$, "DvtSparkChart");
D.$DvtSparkChart$$.newInstance = function $$DvtSparkChart$$$newInstance$($context$$291$$, $callback$$48$$, $callbackObj$$24$$) {
  var $sparkChart$$ = new D.$DvtSparkChart$$;
  $sparkChart$$.Init($context$$291$$, $callback$$48$$, $callbackObj$$24$$);
  return $sparkChart$$
};
D.$DvtSparkChart$$.getDefaults = function $$DvtSparkChart$$$getDefaults$($skin$$7$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSparkChartDefaults$$, $skin$$7$$)
};
D.$DvtSparkChart$$.prototype.Init = function $$DvtSparkChart$$$$Init$($context$$292$$, $callback$$49$$, $callbackObj$$25$$) {
  D.$DvtSparkChart$$.$superclass$.Init.call(this, $context$$292$$, $callback$$49$$, $callbackObj$$25$$);
  this.$Defaults$ = new D.$DvtSparkChartDefaults$$;
  this.$_eventHandler$ = new D.$DvtEventManager$$($context$$292$$);
  this.$_eventHandler$.$addListeners$(this);
  this.$_chart$ = (0,D.$DvtChart$newInstance$$)($context$$292$$);
  this.$addChild$(this.$_chart$);
  this.$_tooltipMask$ = new D.$DvtRect$$($context$$292$$);
  this.$addChild$(this.$_tooltipMask$);
  this.setId("sparkChart1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$DvtSparkChart$$.prototype.$SetOptions$ = function $$DvtSparkChart$$$$$SetOptions$$($options$$15$$) {
  $options$$15$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$15$$), D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtSparkChart$$.prototype.setId = function $$DvtSparkChart$$$$setId$($id$$100$$) {
  D.$DvtSparkChart$$.$superclass$.setId.call(this, $id$$100$$);
  this.$_chart$ && this.$_chart$.setId($id$$100$$ + "chart")
};
D.$DvtSparkChart$$.prototype.$render$ = function $$DvtSparkChart$$$$$render$$($options$$16_tooltip$$12$$, $width$$37$$, $height$$30$$) {
  this.$SetOptions$($options$$16_tooltip$$12$$);
  !(0,window.isNaN)($width$$37$$) && !(0,window.isNaN)($height$$30$$) && (this.$Width$ = $width$$37$$, this.$Height$ = $height$$30$$);
  D.$DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
  $options$$16_tooltip$$12$$ = this.$Options$.shortDesc;
  this.$_tooltipMask$.$setWidth$(this.$Width$);
  this.$_tooltipMask$.$setHeight$(this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_tooltipMask$);
  $options$$16_tooltip$$12$$ && this.$_eventHandler$.$associate$(this.$_tooltipMask$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$16_tooltip$$12$$, this.$Options$.color));
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this, "img");
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this, "label", $options$$16_tooltip$$12$$)
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
D.$DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($items$$1_spark$$, $width$$66$$, $height$$59$$) {
  var $chart$$ = $items$$1_spark$$.$_chart$, $chartOptions$$ = D.$DvtSparkChartRenderer$$.$_convertOptionsObj$($items$$1_spark$$), $markerGap$$2_options$$52$$ = $items$$1_spark$$.$__getOptions$();
  if("area" == $markerGap$$2_options$$52$$.type || "line" == $markerGap$$2_options$$52$$.type) {
    $items$$1_spark$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$1_spark$$);
    var $hasMarkers$$ = D.$JSCompiler_alias_FALSE$$;
    if($markerGap$$2_options$$52$$.firstColor || $markerGap$$2_options$$52$$.lastColor || $markerGap$$2_options$$52$$.highColor || $markerGap$$2_options$$52$$.lowColor) {
      $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$
    }else {
      for(var $i$$354$$ = 0;$i$$354$$ < $items$$1_spark$$.length;$i$$354$$++) {
        if($items$$1_spark$$[$i$$354$$] && "on" == $items$$1_spark$$[$i$$354$$].markerDisplayed) {
          $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $hasMarkers$$ && 0 < $items$$1_spark$$.length && ($markerGap$$2_options$$52$$ = $markerGap$$2_options$$52$$.markerSize / 2, $width$$66$$ -= 2 * $markerGap$$2_options$$52$$, $height$$59$$ -= 2 * $markerGap$$2_options$$52$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($chart$$, $markerGap$$2_options$$52$$, $markerGap$$2_options$$52$$))
  }
  $chart$$.$render$($chartOptions$$, $width$$66$$, $height$$59$$)
};
D.$DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($options$$53_spark$$1$$) {
  return($options$$53_spark$$1$$ = $options$$53_spark$$1$$.$__getOptions$()) && $options$$53_spark$$1$$.items ? $options$$53_spark$$1$$.items : []
};
D.$DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($items$$2_spark$$2$$) {
  var $options$$54$$ = $items$$2_spark$$2$$.$__getOptions$(), $chartOptions$$1$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}}, $bFloatingBar$$ = "floatingBar" == $options$$54$$.type, $barSpacing_chartItems$$ = [], $floatItems$$ = [], $highIndex$$ = -1, $lowIndex$$ = -1, $highValue$$ = -window.Infinity, $lowValue$$ = window.Infinity;
  $items$$2_spark$$2$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$2_spark$$2$$);
  for(var $i$$355$$ = 0;$i$$355$$ < $items$$2_spark$$2$$.length;$i$$355$$++) {
    var $floatValue$$1_item$$20$$ = $items$$2_spark$$2$$[$i$$355$$], $chartItem$$ = {};
    $floatValue$$1_item$$20$$ instanceof window.Object ? ($chartItem$$.y = $floatValue$$1_item$$20$$.value, $floatValue$$1_item$$20$$.date && ($chartItem$$.x = $floatValue$$1_item$$20$$.date, $chartOptions$$1$$.timeAxisType = "enabled"), "on" == $floatValue$$1_item$$20$$.markerDisplayed && ($chartItem$$.markerDisplayed = "on"), $floatValue$$1_item$$20$$.color && ($chartItem$$.color = $floatValue$$1_item$$20$$.color), $floatValue$$1_item$$20$$.borderColor && ($chartItem$$.borderColor = $floatValue$$1_item$$20$$.borderColor), 
    $floatValue$$1_item$$20$$.markerShape && ($chartItem$$.markerShape = $floatValue$$1_item$$20$$.markerShape), $floatValue$$1_item$$20$$.markerSize && ($chartItem$$.markerSize = $floatValue$$1_item$$20$$.markerSize), $bFloatingBar$$ && ($floatValue$$1_item$$20$$ = $floatValue$$1_item$$20$$.floatValue, (0,window.isNaN)($floatValue$$1_item$$20$$) && ($floatValue$$1_item$$20$$ = 0), $floatItems$$.push($floatValue$$1_item$$20$$))) : ($chartItem$$.y = $floatValue$$1_item$$20$$, $bFloatingBar$$ && $floatItems$$.push(0));
    $barSpacing_chartItems$$.push($chartItem$$);
    $highValue$$ < $chartItem$$.y && ($highValue$$ = $chartItem$$.y, $highIndex$$ = $i$$355$$);
    $lowValue$$ > $chartItem$$.y && ($lowValue$$ = $chartItem$$.y, $lowIndex$$ = $i$$355$$)
  }
  $options$$54$$.highColor && 0 <= $highIndex$$ && ($barSpacing_chartItems$$[$highIndex$$].markerDisplayed = "on", $barSpacing_chartItems$$[$highIndex$$].color || ($barSpacing_chartItems$$[$highIndex$$].color = $options$$54$$.highColor));
  $options$$54$$.lowColor && 0 <= $lowIndex$$ && ($barSpacing_chartItems$$[$lowIndex$$].markerDisplayed = "on", $barSpacing_chartItems$$[$lowIndex$$].color || ($barSpacing_chartItems$$[$lowIndex$$].color = $options$$54$$.lowColor));
  $options$$54$$.firstColor && 0 < $barSpacing_chartItems$$.length && ($barSpacing_chartItems$$[0].markerDisplayed = "on", $barSpacing_chartItems$$[0].color || ($barSpacing_chartItems$$[0].color = $options$$54$$.firstColor));
  $options$$54$$.lastColor && 0 < $barSpacing_chartItems$$.length && ($barSpacing_chartItems$$[$barSpacing_chartItems$$.length - 1].markerDisplayed = "on", $barSpacing_chartItems$$[$barSpacing_chartItems$$.length - 1].color || ($barSpacing_chartItems$$[$barSpacing_chartItems$$.length - 1].color = $options$$54$$.lastColor));
  $chartOptions$$1$$.series = [{items:$barSpacing_chartItems$$}];
  $bFloatingBar$$ && $chartOptions$$1$$.series.splice(0, 0, {items:$floatItems$$, color:"rgba(0, 0, 0, 0)"});
  $options$$54$$.referenceObjects && ($chartOptions$$1$$.yAxis.referenceObjects = $options$$54$$.referenceObjects);
  $chartOptions$$1$$.__spark = D.$JSCompiler_alias_TRUE$$;
  $barSpacing_chartItems$$ = $options$$54$$.barSpacing;
  "auto" == $barSpacing_chartItems$$ && ($barSpacing_chartItems$$ = 1 < D.$DvtAgent$$.$getDevicePixelRatio$() ? "subpixel" : "pixel");
  $chartOptions$$1$$.__sparkBarSpacing = $barSpacing_chartItems$$;
  $chartOptions$$1$$.type = $options$$54$$.type;
  $chartOptions$$1$$.animationOnDataChange = $options$$54$$.animationOnDataChange;
  $chartOptions$$1$$.animationOnDisplay = $options$$54$$.animationOnDisplay;
  $chartOptions$$1$$.emptyText = $options$$54$$.emptyText;
  $chartOptions$$1$$.styleDefaults.colors = [$options$$54$$.color];
  $chartOptions$$1$$.styleDefaults.animationDuration = $options$$54$$.animationDuration;
  $chartOptions$$1$$.styleDefaults.animationIndicators = "none";
  $chartOptions$$1$$.styleDefaults.lineWidth = $options$$54$$.lineWidth;
  $chartOptions$$1$$.styleDefaults.lineStyle = $options$$54$$.lineStyle;
  $chartOptions$$1$$.styleDefaults.markerSize = $options$$54$$.markerSize;
  $chartOptions$$1$$.styleDefaults.markerShape = $options$$54$$.markerShape;
  $chartOptions$$1$$.styleDefaults.barGapRatio = $options$$54$$.barGapRatio;
  $chartOptions$$1$$.styleDefaults.seriesTooltipType = "none";
  $chartOptions$$1$$.styleDefaults.groupTooltipType = "none";
  $chartOptions$$1$$.styleDefaults.valueTooltipType = "none";
  $chartOptions$$1$$.xAxis.rendered = "off";
  $chartOptions$$1$$.yAxis.baselineScaling = $options$$54$$.baselineScaling;
  $chartOptions$$1$$.yAxis.rendered = "off";
  $bFloatingBar$$ && ($chartOptions$$1$$.type = "bar", $chartOptions$$1$$.stack = "on");
  $chartOptions$$1$$.styleDefaults.seriesEffect = "none" == $options$$54$$.visualEffects || "area" != $options$$54$$.type ? "color" : "gradient";
  $chartOptions$$1$$.layout = {gapRatio:0};
  $chartOptions$$1$$.legend = {rendered:"off"};
  $chartOptions$$1$$.title = $chartOptions$$1$$.title ? $chartOptions$$1$$.title : {};
  $chartOptions$$1$$.title.style = "font-size: 12px; color: #404259;";
  return $chartOptions$$1$$
};
});