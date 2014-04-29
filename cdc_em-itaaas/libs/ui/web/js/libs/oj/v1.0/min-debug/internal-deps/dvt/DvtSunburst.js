define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtSunburstRotationEvent$$ = function $$DvtSunburstRotationEvent$$$($startAngle$$4$$, $bComplete$$1$$) {
  this.Init($bComplete$$1$$ === D.$JSCompiler_alias_FALSE$$ ? "sunburstRotationInput" : "sunburstRotation");
  this.$_startAngle$ = $startAngle$$4$$
};
(0,D.$goog$exportSymbol$$)("DvtSunburstRotationEvent", D.$DvtSunburstRotationEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstRotationEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstRotationEvent");
D.$DvtSunburstRotationEvent$$.TYPE = "sunburstRotation";
D.$DvtSunburstRotationEvent$$.TYPE_INPUT = "sunburstRotationInput";
D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$ = (0,D.$JSCompiler_get$$)("$_startAngle$");
D.$DvtSunburstRotationEvent$$.prototype.getStartAngle = D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$;
D.$DvtBaseSunburst$$ = function $$DvtBaseSunburst$$$($context$$377$$, $callback$$73$$, $callbackObj$$46$$) {
  this.Init($context$$377$$, $callback$$73$$, $callbackObj$$46$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseSunburst$$, D.$DvtBaseTreeView$$, "DvtBaseSunburst");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseSunburst$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$378$$, $callback$$74$$, $callbackObj$$47$$) {
  D.$DvtBaseSunburst$$.$superclass$.Init.call(this, $context$$378$$, $callback$$74$$, $callbackObj$$47$$);
  this.$Defaults$ = new D.$DvtSunburstDefaults$$;
  this.$_angleExtent$ = 2 * window.Math.PI
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$11$$) {
  return(new D.$DvtSunburstParser$$(this)).parse($xmlString$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($props$$5$$) {
  D.$DvtBaseSunburst$$.$superclass$.$ApplyParsedProperties$.call(this, $props$$5$$);
  this.$_rotation$ = $props$$5$$.rotation;
  this.$_rotateCursor$ = D.$DvtAgent$$.$isPlatformIE$() ? "url(" + this.$_resources$.cursorRotate + "), auto" : "url(" + this.$_resources$.cursorRotate + ") 8 8, auto";
  this.$_startAngle$ = (360 - $props$$5$$.$startAngle$) * D.$DvtSunburstNode$TWO_PI$$ / 360;
  this.$_startAngle$ > window.Math.PI && (this.$_startAngle$ -= D.$DvtSunburstNode$TWO_PI$$)
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$23$$) {
  var $bufferSpace$$1$$ = window.Math.max(window.Math.ceil(3 * window.Math.min($availSpace$$23$$.$w$, $availSpace$$23$$.$h$) / 400), 2);
  $availSpace$$23$$.x += $bufferSpace$$1$$;
  $availSpace$$23$$.y += $bufferSpace$$1$$;
  $availSpace$$23$$.$w$ -= 2 * $bufferSpace$$1$$;
  $availSpace$$23$$.$h$ -= 2 * $bufferSpace$$1$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$23$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$23$$);
  this.$_totalRadius$ = window.Math.floor(window.Math.min($availSpace$$23$$.$w$, $availSpace$$23$$.$h$) / 2);
  this.$_root$ && D.$DvtSunburstLayout$$.$layout$(this.$_totalRadius$, this.$_root$, this.$_startAngle$, this.$_angleExtent$, this.$Sorting$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$38$$, $bounds$$42$$) {
  this.$RenderBackground$($container$$38$$, "");
  this.$_breadcrumbs$ && $container$$38$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$38$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  this.$_translatePt$ = new D.$DvtPoint$$($bounds$$42$$.x + $bounds$$42$$.$w$ / 2, $bounds$$42$$.y + $bounds$$42$$.$h$ / 2);
  if("on" == this.$_rotation$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $buffer$$9_nodeContainer_rotationShape$$ = D.$DvtAgent$$.$isTouchDevice$() ? 60 : 15, $buffer$$9_nodeContainer_rotationShape$$ = new D.$DvtCircle$$(this.$_context$, $bounds$$42$$.x + $bounds$$42$$.$w$ / 2, $bounds$$42$$.y + $bounds$$42$$.$h$ / 2, this.$_totalRadius$ + $buffer$$9_nodeContainer_rotationShape$$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($buffer$$9_nodeContainer_rotationShape$$);
    $buffer$$9_nodeContainer_rotationShape$$.setCursor(this.$_rotateCursor$);
    $container$$38$$.$addChild$($buffer$$9_nodeContainer_rotationShape$$);
    this.$__getEventManager$().$associate$($buffer$$9_nodeContainer_rotationShape$$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
  }
  $buffer$$9_nodeContainer_rotationShape$$ = new D.$DvtContainer$$(this.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buffer$$9_nodeContainer_rotationShape$$, this.$_translatePt$.x, this.$_translatePt$.y);
  $container$$38$$.$addChild$($buffer$$9_nodeContainer_rotationShape$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $nodeLayer$$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$9_nodeContainer_rotationShape$$.$addChild$($nodeLayer$$);
    this.$_root$.$render$($nodeLayer$$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$9_nodeContainer_rotationShape$$.$addChild$(this.$_selectedLayer$);
    this.$_hoverLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$9_nodeContainer_rotationShape$$.$addChild$(this.$_hoverLayer$)
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$38$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$10$$, $context$$379$$, $callback$$75$$, $callbackObj$$48$$) {
  return new D.$DvtSunburstEventManager$$($view$$10$$, $context$$379$$, $callback$$75$$, $callbackObj$$48$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$39$$, $bounds$$43$$) {
  if("fan" === this.$AnimationOnDisplay$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_animateAngleExtent$(0);
    var $anim$$7$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$AnimationDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$7$$.$_animator$, "typeNumber", this, this.$_getAngleExtent$, this.$_animateAngleExtent$, 2 * window.Math.PI);
    return $anim$$7$$
  }
  return D.$DvtBaseSunburst$$.$superclass$.$GetDisplayAnimation$.call(this, $container$$39$$, $bounds$$43$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  var $ret$$32$$ = D.$DvtBaseSunburst$$.$superclass$.$GetDeleteContainer$.call(this);
  $ret$$32$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($ret$$32$$, this.$_translatePt$.x, this.$_translatePt$.y);
  return $ret$$32$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  if(!this.$AnimationStopped$) {
    this.$_container$.$removeChildren$();
    var $availSpace$$24_selectedNodes$$3$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
    this.$Layout$($availSpace$$24_selectedNodes$$3$$);
    this.$Render$(this.$_container$, $availSpace$$24_selectedNodes$$3$$);
    for(var $availSpace$$24_selectedNodes$$3$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$278$$ = 0;$i$$278$$ < $availSpace$$24_selectedNodes$$3$$.length;$i$$278$$++) {
      $availSpace$$24_selectedNodes$$3$$[$i$$278$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
  this.$_angleExtent$ < 2 * window.Math.PI && this.$_animateAngleExtent$(2 * window.Math.PI);
  D.$DvtBaseSunburst$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($displayable$$25$$) {
  this.$_selectedLayer$.$addChild$($displayable$$25$$);
  D.$DvtAgent$$.$isBrowserSafari$() || ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_selectedLayer$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_selectedLayer$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$))
};
D.$JSCompiler_prototypeAlias$$.$_getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$_animateAngleExtent$ = function $$JSCompiler_prototypeAlias$$$$_animateAngleExtent$$($extent$$) {
  this.$_angleExtent$ = $extent$$;
  this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this.$_root$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods___setRotationAnchor$$ = function $$JSCompiler_StaticMethods___setRotationAnchor$$$($JSCompiler_StaticMethods___setRotationAnchor$self$$, $angle$$22$$) {
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_currentAngle$ = $angle$$22$$;
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$ = new D.$DvtRect$$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Width$, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$.setCursor($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotateCursor$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$addChild$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$__getEventManager$().$associate$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
};
D.$JSCompiler_StaticMethods___rotate$$ = function $$JSCompiler_StaticMethods___rotate$$$($JSCompiler_StaticMethods___rotate$self$$, $newAngle$$) {
  var $change$$ = $newAngle$$ - $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$;
  $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$ = $newAngle$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += $change$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ < -window.Math.PI ? $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += 2 * window.Math.PI : $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ > window.Math.PI && ($JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ -= 2 * window.Math.PI);
  $JSCompiler_StaticMethods___rotate$self$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___rotate$self$$.$Width$, $JSCompiler_StaticMethods___rotate$self$$.$Height$));
  $JSCompiler_StaticMethods___rotate$self$$.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)($JSCompiler_StaticMethods___rotate$self$$.$_root$, D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods___rotate$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$(360 - window.Math.round(180 * $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ / window.Math.PI), D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods___endRotation$$ = function $$JSCompiler_StaticMethods___endRotation$$$($JSCompiler_StaticMethods___endRotation$self$$) {
  $JSCompiler_StaticMethods___endRotation$self$$.$_currentAngle$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods___endRotation$self$$.removeChild($JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$ = D.$JSCompiler_alias_NULL$$;
  var $degrees$$3$$ = 360 - window.Math.round(180 * $JSCompiler_StaticMethods___endRotation$self$$.$_startAngle$ / window.Math.PI);
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$3$$, D.$JSCompiler_alias_FALSE$$));
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$3$$, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods__calcAngle$$ = function $$JSCompiler_StaticMethods__calcAngle$$$($JSCompiler_StaticMethods__calcAngle$self$$, $x$$174$$, $y$$146$$) {
  return window.Math.atan2($y$$146$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.y, $x$$174$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.x)
};
D.$DvtSunburst$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSunburst", D.$DvtSunburst$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburst$$, D.$DvtBaseSunburst$$, "DvtSunburst");
D.$DvtSunburst$$.newInstance = function $$DvtSunburst$$$newInstance$($context$$380$$, $callback$$76$$, $callbackObj$$49$$) {
  var $component$$3$$ = new D.$DvtSunburst$$;
  $component$$3$$.Init($context$$380$$, $callback$$76$$, $callbackObj$$49$$);
  return $component$$3$$
};
D.$DvtSunburst$$.getDefaults = function $$DvtSunburst$$$getDefaults$($skin$$10$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSunburstDefaults$$, $skin$$10$$)
};
D.$DvtSunburst$$.prototype.$render$ = function $$DvtSunburst$$$$$render$$($options$$28_xmlString$$12$$, $width$$53$$, $height$$47$$) {
  $options$$28_xmlString$$12$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$28_xmlString$$12$$), D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$28_xmlString$$12$$ = (new D.$DvtSunburstJsonUtils$$).$toXml$(this.$Options$);
  D.$DvtSunburst$$.$superclass$.$render$.call(this, $options$$28_xmlString$$12$$, $width$$53$$, $height$$47$$)
};
D.$DvtSunburst$$.prototype.render = D.$DvtSunburst$$.prototype.$render$;
D.$DvtSunburstParser$$ = function $$DvtSunburstParser$$$($sunburst$$) {
  this.Init($sunburst$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstParser$$, D.$DvtBaseTreeParser$$, "DvtSunburstParser");
D.$DvtSunburstParser$$.prototype.$CreateNode$ = function $$DvtSunburstParser$$$$$CreateNode$$($treeView$$10$$, $props$$27$$, $templates$$5$$) {
  return new D.$DvtSunburstNode$$($treeView$$10$$, $props$$27$$, $templates$$5$$)
};
D.$DvtSunburstParser$$.prototype.$ParseRootAttributes$ = function $$DvtSunburstParser$$$$$ParseRootAttributes$$($xmlNode$$57$$) {
  var $ret$$84$$ = D.$DvtSunburstParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$57$$);
  $ret$$84$$.rotation = $xmlNode$$57$$.$getAttr$("r");
  $ret$$84$$.$startAngle$ = $xmlNode$$57$$.$getAttr$("sa");
  if($ret$$84$$.$startAngle$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($ret$$84$$.$startAngle$)) {
    $ret$$84$$.$startAngle$ = 90
  }
  return $ret$$84$$
};
D.$DvtSunburstParser$$.prototype.$ParseNodeAttributes$ = function $$DvtSunburstParser$$$$$ParseNodeAttributes$$($xmlNode$$58$$) {
  var $ret$$85$$ = D.$DvtSunburstParser$$.$superclass$.$ParseNodeAttributes$.call(this, $xmlNode$$58$$);
  $ret$$85$$.$labelHalign$ = $xmlNode$$58$$.$getAttr$("ha");
  $ret$$85$$.$radius$ = $xmlNode$$58$$.$getAttr$("r");
  return $ret$$85$$
};
D.$DvtSunburstParser$$.prototype.$ParseAdditionalNodeStyles$ = function $$DvtSunburstParser$$$$$ParseAdditionalNodeStyles$$($nodeStyle$$3$$, $nodeHoverStyle$$3$$, $nodeSelectedStyle$$3$$, $styles$$10$$) {
  $styles$$10$$.NODE_DEFAULT_COLOR_STYLE = $nodeStyle$$3$$.$getStyle$("border-color");
  $styles$$10$$.NODE_HOVER_COLOR_STYLE = $nodeHoverStyle$$3$$.$getStyle$("border-color");
  $styles$$10$$.NODE_SELECTED_INNER_COLOR_STYLE = $nodeSelectedStyle$$3$$.$getStyle$("-tr-inner-color");
  $styles$$10$$.NODE_SELECTED_OUTER_COLOR_STYLE = $nodeSelectedStyle$$3$$.$getStyle$("-tr-outer-color")
};
D.$DvtSunburstNode$$ = function $$DvtSunburstNode$$$($sunburst$$2$$, $props$$28$$, $templates$$6$$) {
  this.Init($sunburst$$2$$, $props$$28$$, $templates$$6$$);
  this.$_labelDisplay$ = $props$$28$$.$labelDisplay$ ? $props$$28$$.$labelDisplay$ : "auto";
  this.$_labelHalign$ = $props$$28$$.$labelHalign$;
  this.$_radius$ = $props$$28$$.$radius$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstNode$$, D.$DvtBaseTreeNode$$, "DvtSunburstNode");
D.$DvtSunburstNode$TWO_PI$$ = 2 * window.Math.PI;
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$125$$) {
  if(this.$_hasLayout$) {
    this.$_nodeContainer$ = $container$$125$$;
    this.$_shape$ = this.$_createShapeNode$();
    $container$$125$$.$addChild$(this.$_shape$);
    var $afRoot$$7_template$$4$$ = this.$_template$;
    if(!this.$_parent$ && (0 == this.$_innerRadius$ && this.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$) && $afRoot$$7_template$$4$$) {
      var $afContext$$7_dims$$34_sqrt2$$ = window.Math.sqrt(2), $aw$$4_matrix$$13$$ = this.$_outerRadius$ * $afContext$$7_dims$$34_sqrt2$$ - 4;
      this.$_x$ = -this.$_outerRadius$ / $afContext$$7_dims$$34_sqrt2$$ + 2;
      this.$_y$ = -this.$_outerRadius$ / $afContext$$7_dims$$34_sqrt2$$ + 2;
      $afContext$$7_dims$$34_sqrt2$$ = this.$_view$.$_afContext$;
      $afContext$$7_dims$$34_sqrt2$$.$_elContext$ = this.$_elAttributes$;
      0 < $aw$$4_matrix$$13$$ && 0 < $aw$$4_matrix$$13$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$7_dims$$34_sqrt2$$, $aw$$4_matrix$$13$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$7_dims$$34_sqrt2$$, $aw$$4_matrix$$13$$), $afContext$$7_dims$$34_sqrt2$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$7_template$$4$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$7_dims$$34_sqrt2$$, $afRoot$$7_template$$4$$, 
      this.$_shape$), $afContext$$7_dims$$34_sqrt2$$ = $afRoot$$7_template$$4$$.$getDimensions$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$7_template$$4$$, this.$_x$ + ($aw$$4_matrix$$13$$ - $afContext$$7_dims$$34_sqrt2$$.$w$) / 2, this.$_y$ + ($aw$$4_matrix$$13$$ - $afContext$$7_dims$$34_sqrt2$$.$h$) / 2))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_shape$.$addChild$(this.$_text$), this.$_pattern$ && ($afContext$$7_dims$$34_sqrt2$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $afContext$$7_dims$$34_sqrt2$$.x, $afContext$$7_dims$$34_sqrt2$$.y, $afContext$$7_dims$$34_sqrt2$$.$w$, $afContext$$7_dims$$34_sqrt2$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
      this.$_shape$.$addChild$(this.$_textBackground$), $aw$$4_matrix$$13$$ = this.$_text$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_isIdentity$$)($aw$$4_matrix$$13$$) || this.$_textBackground$.$setMatrix$($aw$$4_matrix$$13$$), this.$_shape$.$addChild$(this.$_text$)))
    }
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$_shape$);
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$_datatip$);
    this.$renderChildren$($container$$125$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$23$$) {
  "off" != this.$Selectable$ && (D.$DvtSunburstNode$$.$superclass$.$setSelected$.call(this, $selected$$23$$), this.$isSelected$() ? (this.$_shape$.$setSelected$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$)) : (this.$_shape$.$setSelected$(D.$JSCompiler_alias_FALSE$$), this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$)))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && (this.$_shape$.$showHoverEffect$(), this.$isSelected$() ? this.$_view$.$__moveToSelectedLayer$(this.$_shape$) : this.$_view$.$_hoverLayer$.$addChild$(this.$_shape$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_shape$ && (this.$_hasLayout$ && !this.$isShowingKeyboardFocusEffect$()) && (this.$_shape$.$hideHoverEffect$(), !this.$isSelected$() && this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$510_next$$9$$) {
  var $keyCode$$27_lastVisitedChild$$, $lastVisitedMidAngle_navigables$$7$$, $i$$inline_5772_idx$$32$$, $root$$19$$;
  if($event$$510_next$$9$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtSunburstNode$$.$superclass$.$getNextNavigable$.call(this, $event$$510_next$$9$$)
  }
  $keyCode$$27_lastVisitedChild$$ = $event$$510_next$$9$$.keyCode;
  if(32 == $keyCode$$27_lastVisitedChild$$ && $event$$510_next$$9$$.ctrlKey) {
    return this
  }
  for($root$$19$$ = this;$root$$19$$.$_parent$;) {
    $root$$19$$ = $root$$19$$.$_parent$
  }
  $lastVisitedMidAngle_navigables$$7$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$19$$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this));
  a: {
    for($i$$inline_5772_idx$$32$$ = 0;$i$$inline_5772_idx$$32$$ < $lastVisitedMidAngle_navigables$$7$$.length;$i$$inline_5772_idx$$32$$++) {
      if(this === $lastVisitedMidAngle_navigables$$7$$[$i$$inline_5772_idx$$32$$]) {
        break a
      }
    }
    $i$$inline_5772_idx$$32$$ = -1
  }
  var $midAngle$$1$$ = this.$_startAngle$ + this.$_angleExtent$ / 2, $midAngle$$1$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($midAngle$$1$$);
  switch($keyCode$$27_lastVisitedChild$$) {
    case 38:
      if(this === $root$$19$$ || 180 < $midAngle$$1$$) {
        if($keyCode$$27_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$7$$ = $keyCode$$27_lastVisitedChild$$.$_startAngle$ + $keyCode$$27_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$7$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$7$$), 180 < $lastVisitedMidAngle_navigables$$7$$) {
            return $keyCode$$27_lastVisitedChild$$
          }
        }
        $event$$510_next$$9$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$510_next$$9$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$510_next$$9$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 40:
      if(this === $root$$19$$ || 0 <= $midAngle$$1$$ && 180 >= $midAngle$$1$$) {
        if($keyCode$$27_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$7$$ = $keyCode$$27_lastVisitedChild$$.$_startAngle$ + $keyCode$$27_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$7$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$7$$), 0 <= $lastVisitedMidAngle_navigables$$7$$ && 180 >= $lastVisitedMidAngle_navigables$$7$$) {
            return $keyCode$$27_lastVisitedChild$$
          }
        }
        $event$$510_next$$9$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$510_next$$9$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$510_next$$9$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 37:
      $event$$510_next$$9$$ = 1 == $lastVisitedMidAngle_navigables$$7$$.length ? this : 0 == $i$$inline_5772_idx$$32$$ ? $lastVisitedMidAngle_navigables$$7$$[$lastVisitedMidAngle_navigables$$7$$.length - 1] : $lastVisitedMidAngle_navigables$$7$$[$i$$inline_5772_idx$$32$$ - 1];
      break;
    case 39:
      $event$$510_next$$9$$ = 1 == $lastVisitedMidAngle_navigables$$7$$.length ? this : $i$$inline_5772_idx$$32$$ == $lastVisitedMidAngle_navigables$$7$$.length - 1 ? $lastVisitedMidAngle_navigables$$7$$[0] : $lastVisitedMidAngle_navigables$$7$$[$i$$inline_5772_idx$$32$$ + 1];
      break;
    default:
      $event$$510_next$$9$$ = this
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$510_next$$9$$);
  return $event$$510_next$$9$$
};
D.$JSCompiler_StaticMethods__navigateToParent$$ = function $$JSCompiler_StaticMethods__navigateToParent$$$($JSCompiler_StaticMethods__navigateToParent$self_next$$10$$) {
  var $parent$$65$$ = $JSCompiler_StaticMethods__navigateToParent$self_next$$10$$.$_parent$;
  $parent$$65$$ && ($JSCompiler_StaticMethods__navigateToParent$self_next$$10$$ = $parent$$65$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($parent$$65$$));
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($JSCompiler_StaticMethods__navigateToParent$self_next$$10$$);
  return $JSCompiler_StaticMethods__navigateToParent$self_next$$10$$
};
D.$DvtSunburstNode$_normalizedRadToDeg$$ = function $$DvtSunburstNode$_normalizedRadToDeg$$$($deg$$1_rad$$2$$) {
  $deg$$1_rad$$2$$ = D.$DvtMath$$.$radsToDegrees$($deg$$1_rad$$2$$);
  0 > $deg$$1_rad$$2$$ ? $deg$$1_rad$$2$$ += 360 : 360 < $deg$$1_rad$$2$$ && ($deg$$1_rad$$2$$ -= 360);
  return $deg$$1_rad$$2$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  if(this.$_shape$) {
    var $bounds$$119$$ = this.$_shape$.$getDimensions$(), $point$$48$$ = new D.$DvtPoint$$($bounds$$119$$.x, $bounds$$119$$.y), $point$$48$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, $point$$48$$);
    $bounds$$119$$.x = $point$$48$$.x;
    $bounds$$119$$.y = $point$$48$$.y;
    return $bounds$$119$$
  }
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = function $$JSCompiler_prototypeAlias$$$$getContextMenuLocation$$() {
  return(0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, (0,D.$DvtSunburstNode$_calcPointOnArc$$)(0.5 * (this.$_outerRadius$ + this.$_innerRadius$), this.$_startAngle$ + this.$_angleExtent$ / 2))
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($innerRadius$$7$$, $outerRadius$$7$$, $startAngle$$20$$, $angleExtent$$16$$) {
  this.$_innerRadius$ = $innerRadius$$7$$;
  this.$_outerRadius$ = $outerRadius$$7$$;
  this.$_startAngle$ = $startAngle$$20$$;
  this.$_angleExtent$ = $angleExtent$$16$$;
  this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$GetFill$ = function $$JSCompiler_prototypeAlias$$$$GetFill$$() {
  return this.$_bArtificialRoot$ ? (0,D.$DvtSolidFill$invisibleFill$$)() : D.$DvtSunburstNode$$.$superclass$.$GetFill$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$77$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$23$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$50$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_innerRadius$, this.$_outerRadius$, this.$_startAngle$, this.$_angleExtent$, $r$$77$$, $g$$23$$, $b$$50$$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$46$$) {
  this.$setLayoutParams$($params$$46$$[0], $params$$46$$[1], $params$$46$$[2], $params$$46$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$46$$[4]), window.Math.round($params$$46$$[5]), window.Math.round($params$$46$$[6]));
  (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$55$$, $oldNode$$5$$) {
  $oldNode$$5$$.$_hasLayout$ && 0 < $oldNode$$5$$.$_angleExtent$ ? D.$DvtSunburstNode$$.$superclass$.$animateUpdate$.call(this, $handler$$55$$, $oldNode$$5$$) : this.$animateInsert$($handler$$55$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$287$$, $y$$256$$) {
  var $angle$$42$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($x$$287$$, $y$$256$$);
  return window.Math.sqrt($x$$287$$ * $x$$287$$ + $y$$256$$ * $y$$256$$) >= this.$_innerRadius$ && window.Math.sqrt($x$$287$$ * $x$$287$$ + $y$$256$$ * $y$$256$$) <= this.$_outerRadius$ && (0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $angle$$42$$)
};
D.$JSCompiler_StaticMethods_ContainsAngle$$ = function $$JSCompiler_StaticMethods_ContainsAngle$$$($JSCompiler_StaticMethods_ContainsAngle$self$$, $angle$$43$$) {
  for(;$angle$$43$$ < $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$;) {
    $angle$$43$$ += D.$DvtSunburstNode$TWO_PI$$
  }
  for(;$angle$$43$$ - $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ > D.$DvtSunburstNode$TWO_PI$$;) {
    $angle$$43$$ -= D.$DvtSunburstNode$TWO_PI$$
  }
  return $angle$$43$$ >= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ && $angle$$43$$ <= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ + $JSCompiler_StaticMethods_ContainsAngle$self$$.$_angleExtent$
};
D.$DvtSunburstNode$_calcPointOnArc$$ = function $$DvtSunburstNode$_calcPointOnArc$$$($radius$$20$$, $angle$$44$$) {
  return{x:window.Math.cos($angle$$44$$) * $radius$$20$$, y:window.Math.sin($angle$$44$$) * $radius$$20$$}
};
D.$DvtSunburstNode$_calcAngle$$ = function $$DvtSunburstNode$_calcAngle$$$($x$$289$$, $y$$258$$) {
  var $angle$$45$$ = window.Math.atan2($y$$258$$, $x$$289$$);
  0 > $angle$$45$$ ? $angle$$45$$ += D.$DvtSunburstNode$TWO_PI$$ : $angle$$45$$ > D.$DvtSunburstNode$TWO_PI$$ && ($angle$$45$$ -= D.$DvtSunburstNode$TWO_PI$$);
  return $angle$$45$$
};
D.$DvtSunburstNode$$.prototype.$_createShapeNode$ = function $$DvtSunburstNode$$$$$_createShapeNode$$() {
  if(!this.$_angleExtent$ || 0 >= this.$_angleExtent$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $cmd$$10_shape$$95$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)(this), $cmd$$10_shape$$95$$ = new D.$DvtPath$$(this.$_view$.$_context$, $cmd$$10_shape$$95$$);
  this.$_view$.$__getEventManager$().$associate$($cmd$$10_shape$$95$$, this);
  $cmd$$10_shape$$95$$.$setAlpha$(this.$getAlpha$());
  $cmd$$10_shape$$95$$.$setFill$(this.$GetFill$());
  var $selectedInnerColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_SELECTED_INNER_COLOR_STYLE"), $selectedOuterColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "NODE_SELECTED_OUTER_COLOR_STYLE"), $hoverColor$$4$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR_STYLE");
  $cmd$$10_shape$$95$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_DEFAULT_COLOR_STYLE"), 0.3));
  $cmd$$10_shape$$95$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$4$$, 1, 3));
  $cmd$$10_shape$$95$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectedInnerColor$$, 1, 1.5), new D.$DvtSolidStroke$$($selectedOuterColor$$, 1, 3.5));
  $cmd$$10_shape$$95$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$4$$, 1, 3));
  $cmd$$10_shape$$95$$.$setSelectable$(this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$ && "off" != this.$Selectable$);
  this.$_bArtificialRoot$ && ($cmd$$10_shape$$95$$.$setAlpha$(0.001), $cmd$$10_shape$$95$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  return $cmd$$10_shape$$95$$
};
D.$JSCompiler_StaticMethods__createPathCmd$$ = function $$JSCompiler_StaticMethods__createPathCmd$$$($JSCompiler_StaticMethods__createPathCmd$self$$) {
  var $cmd$$11_p1$$6$$, $p2$$6$$, $p3$$4$$, $p4$$3$$;
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ < D.$DvtSunburstNode$TWO_PI$$ ? ($cmd$$11_p1$$6$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$6$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), 
  $p3$$4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), $p4$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $cmd$$11_p1$$6$$ = window.DvtPathUtils.moveTo($cmd$$11_p1$$6$$.x, $cmd$$11_p1$$6$$.y) + 
  window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 1, $p2$$6$$.x, $p2$$6$$.y) + window.DvtPathUtils.lineTo($p3$$4$$.x, $p3$$4$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 
  0, $p4$$3$$.x, $p4$$3$$.y) + window.DvtPathUtils.closePath()) : ($cmd$$11_p1$$6$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$6$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), 
  $p3$$4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p4$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $cmd$$11_p1$$6$$ = window.DvtPathUtils.moveTo($cmd$$11_p1$$6$$.x, $cmd$$11_p1$$6$$.y) + 
  window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $p2$$6$$.x, $p2$$6$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $cmd$$11_p1$$6$$.x, $cmd$$11_p1$$6$$.y), 
  0 < $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$ && ($cmd$$11_p1$$6$$ += window.DvtPathUtils.moveTo($p4$$3$$.x, $p4$$3$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p3$$4$$.x, $p3$$4$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p4$$3$$.x, $p4$$3$$.y)), $cmd$$11_p1$$6$$ += window.DvtPathUtils.closePath());
  return $cmd$$11_p1$$6$$
};
D.$DvtSunburstNode$$.prototype.$_createTextNode$ = function $$DvtSunburstNode$$$$$_createTextNode$$($JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$) {
  if(!this.$_textStr$ || !$JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ || !this.$_labelDisplay$ || "off" == this.$_labelDisplay$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ = D.$JSCompiler_alias_FALSE$$;
  "auto" == this.$_labelDisplay$ ? $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ = !D.$DvtAgent$$.$isPlatformIE$() && D.$DvtAgent$$.$getOS$() == D.$DvtAgent$$.$WINDOWS_OS$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$ : "rotated" == this.$_labelDisplay$ && ($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ = D.$JSCompiler_alias_TRUE$$);
  if($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ && this.$_angleExtent$ < 2 * window.Math.PI) {
    var $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ = window.Math.max(this.$_innerRadius$, 10), $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$ = this.$_outerRadius$ - $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ - 6, $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$ = 1.1 * this.$_angleExtent$ * ($angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ + 
    6);
    if(6 >= $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$) {
      $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ = D.$JSCompiler_alias_NULL$$
    }else {
      if($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, 0, 0), $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$), D.$DvtTextUtils$$.$fitText$($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$, 
      $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$, $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$, $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$)) {
        $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$ = ($angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ + this.$_outerRadius$) / 2;
        if("s" == this.$_labelHalign$ || "e" == this.$_labelHalign$) {
          $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$.$addChild$($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$), $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ = $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.$getDimensions$().$w$, "s" == this.$_labelHalign$ ? $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$ = $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ + 
          4.5 + $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ / 2 : "e" == this.$_labelHalign$ && ($anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$ = $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ + $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$ - 4.5 - $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ / 2)
        }
        $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$, this.$_startAngle$ + this.$_angleExtent$ / 2);
        $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.$alignCenter$();
        $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.$alignMiddle$();
        $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ = this.$_startAngle$ + this.$_angleExtent$ / 2;
        $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ = $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ >= D.$DvtSunburstNode$TWO_PI$$ ? $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ - D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$;
        $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ = 0 > $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ ? $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ + D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$;
        $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ > 0.5 * window.Math.PI && $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ < 1.5 * window.Math.PI && ($angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ += window.Math.PI);
        $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.$setRotation$($angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$, $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$.x, $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$.y);
        $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ = $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$
      }else {
        $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ = D.$JSCompiler_alias_NULL$$
      }
    }
  }else {
    if(0 == this.$_innerRadius$) {
      $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ = {x:0, y:0}
    }else {
      if($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)((this.$_innerRadius$ + this.$_outerRadius$) / 2, this.$_startAngle$ + this.$_angleExtent$ / 2), $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ = 3 * (0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) / 2, $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.x + 
      $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ / 2, $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.y), !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, (0,D.$DvtSunburstNode$_calcAngle$$)($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.x - $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ / 2, $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.y)) || 
      !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$)) {
        $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ = D.$JSCompiler_alias_NULL$$
      }
    }
    if($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$) {
      $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.x, $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.y, D.$JSCompiler_alias_NULL$$);
      $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$);
      $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$.$alignCenter$();
      $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$.$alignMiddle$();
      $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      for(var $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$ = D.$DvtTextUtils$$.$guessTextDimensions$($angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$), $x2$$inline_5793$$ = $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$ = $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.x, $y1$$inline_5794$$ = $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.y - 
      $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$.$h$ / 2, $y2$$inline_5795$$ = $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.y + $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$.$h$ / 2;this.contains($anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$, $y1$$inline_5794$$) && this.contains($anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$, $y2$$inline_5795$$);) {
        $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$--
      }
      for(;this.contains($x2$$inline_5793$$, $y1$$inline_5794$$) && this.contains($x2$$inline_5793$$, $y2$$inline_5795$$);) {
        $x2$$inline_5793$$++
      }
      $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$ += 3;
      $x2$$inline_5793$$ -= 3;
      $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ = 2 * window.Math.min($bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.x - $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$, $x2$$inline_5793$$ - $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$.x);
      $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ < $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$.$w$ && ($angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$.$setX$(($anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$ + $x2$$inline_5793$$) / 2), $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$ = $x2$$inline_5793$$ - $anchorRadius$$inline_5780_availHeight$$inline_5778_x1$$inline_5792$$);
      $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ = D.$DvtTextUtils$$.$fitText$($angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$, $bRotated_text$$inline_5779_textAnchor$$inline_5787_usableSpace$$inline_5796$$, $availWidth$$inline_5777_estimatedDims$$inline_5791_rightAngle$$inline_5789$$.$h$, $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$) ? $angle$$inline_5783_approxWidth$$inline_5788_innerStartCoord$$inline_5776_text$$inline_5790$$ : 
      D.$JSCompiler_alias_NULL$$
    }else {
      $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$ = D.$JSCompiler_alias_VOID$$
    }
  }
  return $JSCompiler_temp$$208_actualTextWidth$$inline_5781_container$$127_textAnchor$$inline_5782$$
};
D.$DvtSunburstNode$$.prototype.$handleMouseOver$ = function $$DvtSunburstNode$$$$$handleMouseOver$$() {
  if(!this.$_expandButton$) {
    var $JSCompiler_inline_result$$517_container$$inline_5799_tooltip$$inline_5802$$;
    $JSCompiler_inline_result$$517_container$$inline_5799_tooltip$$inline_5802$$ = this.$_shape$;
    if(!$JSCompiler_inline_result$$517_container$$inline_5799_tooltip$$inline_5802$$ || !("i" == this.$_drilling$ || "ir" == this.$_drilling$)) {
      $JSCompiler_inline_result$$517_container$$inline_5799_tooltip$$inline_5802$$ = D.$JSCompiler_alias_NULL$$
    }else {
      var $JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$;
      if(this.$_disclosed$) {
        $JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$ = this.$_view$.$_context$;
        var $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$ = this.$_view$.$_resources$, $center$$inline_5801_upState$$inline_9789_upState$$inline_9797$$ = new D.$DvtImage$$($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$, $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$.collapseUp, 0, 0, 16, 16), $overState$$inline_9790_overState$$inline_9798$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$, $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$.collapseOver, 0, 0, 16, 16), $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$ = new D.$DvtImage$$($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$, 
        $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$.collapseDown, 0, 0, 16, 16)
      }else {
        $JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$ = this.$_view$.$_context$, $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$ = this.$_view$.$_resources$, $center$$inline_5801_upState$$inline_9789_upState$$inline_9797$$ = new D.$DvtImage$$($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$, $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$.expandUp, 
        0, 0, 16, 16), $overState$$inline_9790_overState$$inline_9798$$ = new D.$DvtImage$$($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$, $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$.expandOver, 0, 0, 16, 16), $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$ = new D.$DvtImage$$($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$, 
        $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$.expandDown, 0, 0, 16, 16)
      }
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($center$$inline_5801_upState$$inline_9789_upState$$inline_9797$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_9790_overState$$inline_9798$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$);
      $JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$ = new D.$DvtButton$$($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$, $center$$inline_5801_upState$$inline_9789_upState$$inline_9797$$, $overState$$inline_9790_overState$$inline_9798$$, $downState$$inline_9791_downState$$inline_9799_resources$$inline_9788_resources$$inline_9796$$);
      $JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$expandCollapseNode$, D.$JSCompiler_alias_FALSE$$, this);
      $center$$inline_5801_upState$$inline_9789_upState$$inline_9797$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$, $center$$inline_5801_upState$$inline_9789_upState$$inline_9797$$.x - 8, $center$$inline_5801_upState$$inline_9789_upState$$inline_9797$$.y - 8);
      $JSCompiler_inline_result$$517_container$$inline_5799_tooltip$$inline_5802$$.$addChild$($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$);
      $JSCompiler_inline_result$$517_container$$inline_5799_tooltip$$inline_5802$$ = this.$_disclosed$ ? this.$_view$.$_resources$.collapse : this.$_view$.$_resources$.expand;
      this.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$, new D.$DvtBaseTreePeer$$(this, this.getId(), $JSCompiler_inline_result$$517_container$$inline_5799_tooltip$$inline_5802$$));
      $JSCompiler_inline_result$$517_container$$inline_5799_tooltip$$inline_5802$$ = $JSCompiler_temp$$8628_button$$inline_5800_button$$inline_9792_button$$inline_9800_context$$inline_9787_context$$inline_9795$$
    }
    this.$_expandButton$ = $JSCompiler_inline_result$$517_container$$inline_5799_tooltip$$inline_5802$$
  }
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtSunburstNode$$.prototype.$handleMouseOut$ = function $$DvtSunburstNode$$$$$handleMouseOut$$() {
  this.$_expandButton$ && this.$_shape$ && (this.$_shape$.removeChild(this.$_expandButton$), this.$_expandButton$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods_updateShapes$$ = function $$JSCompiler_StaticMethods_updateShapes$$$($JSCompiler_StaticMethods_updateShapes$self$$, $bRecurse$$) {
  if($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$) {
    var $children$$28_cmd$$12$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)($JSCompiler_StaticMethods_updateShapes$self$$);
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setCmds$($children$$28_cmd$$12$$);
    if($JSCompiler_StaticMethods_updateShapes$self$$.$_parent$ || !(0 == $JSCompiler_StaticMethods_updateShapes$self$$.$_innerRadius$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$)) {
      $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_text$), $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ = $JSCompiler_StaticMethods_updateShapes$self$$.$_createTextNode$($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$), $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ && ($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$), 
      $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ = D.$JSCompiler_alias_NULL$$)
    }
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setFill$($JSCompiler_StaticMethods_updateShapes$self$$.$GetFill$());
    if($bRecurse$$) {
      for(var $children$$28_cmd$$12$$ = $JSCompiler_StaticMethods_updateShapes$self$$.$getChildNodes$(), $i$$589$$ = 0;$i$$589$$ < $children$$28_cmd$$12$$.length;$i$$589$$++) {
        (0,D.$JSCompiler_StaticMethods_updateShapes$$)($children$$28_cmd$$12$$[$i$$589$$], D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$DvtSunburstNode$$.prototype.$expandCollapseNode$ = function $$DvtSunburstNode$$$$$expandCollapseNode$$() {
  this.$_disclosed$ = !this.$_disclosed$;
  var $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5804$$ = this.$_view$, $bDisclosed$$inline_5806_xmlString$$inline_9805$$ = this.$_disclosed$, $id$$inline_9803_nodeId$$inline_9806_startIndex$$inline_9807$$ = this.getId();
  $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5804$$.$_navigableIdToFocus$ = $id$$inline_9803_nodeId$$inline_9806_startIndex$$inline_9807$$;
  if($bDisclosed$$inline_5806_xmlString$$inline_9805$$) {
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5804$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstExpand", this.getId()))
  }else {
    var $bDisclosed$$inline_5806_xmlString$$inline_9805$$ = $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5804$$.$LastXml$, $id$$inline_9803_nodeId$$inline_9806_startIndex$$inline_9807$$ = this.getId(), $id$$inline_9803_nodeId$$inline_9806_startIndex$$inline_9807$$ = $bDisclosed$$inline_5806_xmlString$$inline_9805$$.indexOf('\x3cn id\x3d"' + $id$$inline_9803_nodeId$$inline_9806_startIndex$$inline_9807$$), $endIndex$$inline_9808$$ = $bDisclosed$$inline_5806_xmlString$$inline_9805$$.indexOf("\x3e", 
    $id$$inline_9803_nodeId$$inline_9806_startIndex$$inline_9807$$), $nodeString$$inline_9809$$ = $bDisclosed$$inline_5806_xmlString$$inline_9805$$.substring($id$$inline_9803_nodeId$$inline_9806_startIndex$$inline_9807$$, $endIndex$$inline_9808$$), $nodeString$$inline_9809$$ = -1 < $nodeString$$inline_9809$$.indexOf("di\x3d") ? $nodeString$$inline_9809$$.replace('di\x3d"t"', 'di\x3d"f"') : $nodeString$$inline_9809$$ + 'di\x3d"f"';
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5804$$.$render$($bDisclosed$$inline_5806_xmlString$$inline_9805$$.substring(0, $id$$inline_9803_nodeId$$inline_9806_startIndex$$inline_9807$$) + $nodeString$$inline_9809$$ + $bDisclosed$$inline_5806_xmlString$$inline_9805$$.substring($endIndex$$inline_9808$$), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5804$$.$Width$, $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5804$$.$Height$);
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5804$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstCollapse", this.getId()))
  }
};
D.$DvtSunburstNode$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_disclosed$");
D.$JSCompiler_StaticMethods___getRadius$$ = function $$JSCompiler_StaticMethods___getRadius$$$($JSCompiler_StaticMethods___getRadius$self$$) {
  return $JSCompiler_StaticMethods___getRadius$self$$.$_radius$ != D.$JSCompiler_alias_NULL$$ ? (0,window.Number)($JSCompiler_StaticMethods___getRadius$self$$.$_radius$) : $JSCompiler_StaticMethods___getRadius$self$$.$_parent$ ? 1 : $JSCompiler_StaticMethods___getRadius$self$$.$_bArtificialRoot$ ? 0.25 : $JSCompiler_StaticMethods___getRadius$self$$.$_template$ ? 1 : 0.5
};
D.$DvtSunburstLayout$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstLayout$$, D.$DvtObj$$, "DvtSunburstLayout");
D.$DvtSunburstLayout$$.$layout$ = function $$DvtSunburstLayout$$$$layout$$($totalRadius$$, $root$$18$$, $startAngle$$18$$, $angleExtent$$14$$, $sorting$$1$$) {
  var $longestRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($root$$18$$);
  D.$DvtSunburstLayout$$.$_layout$($totalRadius$$ / $longestRadius$$, $root$$18$$, $startAngle$$18$$, $angleExtent$$14$$, $sorting$$1$$, 0)
};
D.$DvtSunburstLayout$$.$_layout$ = function $$DvtSunburstLayout$$$$_layout$$($radiusPerDepth$$1$$, $i$$585_node$$122$$, $childStartAngle_startAngle$$19$$, $angleExtent$$15$$, $sorting$$2$$, $children$$26_innerRadius$$6$$) {
  var $outerRadius$$6$$ = $children$$26_innerRadius$$6$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($i$$585_node$$122$$) * $radiusPerDepth$$1$$;
  $i$$585_node$$122$$.$setLayoutParams$($children$$26_innerRadius$$6$$, $outerRadius$$6$$, $childStartAngle_startAngle$$19$$, $angleExtent$$15$$);
  $children$$26_innerRadius$$6$$ = $i$$585_node$$122$$.$getChildNodes$();
  if($children$$26_innerRadius$$6$$ != D.$JSCompiler_alias_NULL$$ && $i$$585_node$$122$$.$isDisclosed$()) {
    "on" == $sorting$$2$$ && ($children$$26_innerRadius$$6$$ = $children$$26_innerRadius$$6$$.slice(0), $children$$26_innerRadius$$6$$.sort(function($radiusPerDepth$$1$$, $i$$585_node$$122$$) {
      return $i$$585_node$$122$$.$getSize$() - $radiusPerDepth$$1$$.$getSize$()
    }));
    D.$DvtAgent$$.$isRightToLeft$($i$$585_node$$122$$.$_view$.$_context$) && ($children$$26_innerRadius$$6$$ = $children$$26_innerRadius$$6$$.slice(0).reverse());
    var $total$$6$$ = 0;
    for($i$$585_node$$122$$ = 0;$i$$585_node$$122$$ < $children$$26_innerRadius$$6$$.length;$i$$585_node$$122$$++) {
      $total$$6$$ += 0 < $children$$26_innerRadius$$6$$[$i$$585_node$$122$$].$getSize$() ? $children$$26_innerRadius$$6$$[$i$$585_node$$122$$].$getSize$() : 0
    }
    for($i$$585_node$$122$$ = 0;$i$$585_node$$122$$ < $children$$26_innerRadius$$6$$.length;$i$$585_node$$122$$++) {
      var $child$$69$$ = $children$$26_innerRadius$$6$$[$i$$585_node$$122$$];
      if(!(0 >= $child$$69$$.$getSize$())) {
        var $childAngleExtent$$ = $child$$69$$.$getSize$() / $total$$6$$ * $angleExtent$$15$$;
        D.$DvtSunburstLayout$$.$_layout$($radiusPerDepth$$1$$, $child$$69$$, $childStartAngle_startAngle$$19$$, $childAngleExtent$$, $sorting$$2$$, $outerRadius$$6$$);
        $childStartAngle_startAngle$$19$$ += $childAngleExtent$$
      }
    }
  }
};
D.$DvtSunburstLayout$$.$_calcLargestRadius$ = function $$DvtSunburstLayout$$$$_calcLargestRadius$$($node$$123$$) {
  var $maxRadius$$2$$ = 0, $children$$27$$ = $node$$123$$.$getChildNodes$();
  if($children$$27$$ && 0 < $children$$27$$.length) {
    for(var $i$$586$$ = 0;$i$$586$$ < $children$$27$$.length;$i$$586$$++) {
      var $childRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($children$$27$$[$i$$586$$]), $maxRadius$$2$$ = window.Math.max($maxRadius$$2$$, $childRadius$$)
    }
    return $maxRadius$$2$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$123$$)
  }
  return(0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$123$$)
};
D.$DvtSunburstExpandCollapseEvent$$ = function $$DvtSunburstExpandCollapseEvent$$$($type$$189$$, $id$$209$$) {
  this.Init($type$$189$$);
  this.$_id$ = $id$$209$$ ? $id$$209$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstExpandCollapseEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstExpandCollapseEvent");
D.$DvtSunburstExpandCollapseEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtSunburstEventManager$$ = function $$DvtSunburstEventManager$$$($view$$64$$, $context$$585$$, $callback$$120$$, $callbackObj$$92$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$64$$, $context$$585$$, $callback$$120$$, $callbackObj$$92$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtSunburstEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$500_relPos$$30$$) {
  var $JSCompiler_StaticMethods___startRotation$self$$inline_5748_obj$$283$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$500_relPos$$30$$.target);
  $JSCompiler_StaticMethods___startRotation$self$$inline_5748_obj$$283$$ && $JSCompiler_StaticMethods___startRotation$self$$inline_5748_obj$$283$$.getId && "_rotationShape" == $JSCompiler_StaticMethods___startRotation$self$$inline_5748_obj$$283$$.getId() && !this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_TRUE$$, $event$$500_relPos$$30$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$500_relPos$$30$$.pageX, $event$$500_relPos$$30$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_5748_obj$$283$$ = 
  this.$_view$, (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5748_obj$$283$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5748_obj$$283$$, $event$$500_relPos$$30$$.x, $event$$500_relPos$$30$$.y))) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$500_relPos$$30$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$501_relPos$$31$$) {
  if(this.$_bRotating$) {
    $event$$501_relPos$$31$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$501_relPos$$31$$.pageX, $event$$501_relPos$$31$$.pageY);
    var $JSCompiler_StaticMethods___continueRotation$self$$inline_5752$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5752$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5752$$, $event$$501_relPos$$31$$.x, $event$$501_relPos$$31$$.y))
  }else {
    D.$DvtSunburstEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$501_relPos$$31$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$502$$) {
  this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$502$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$503$$) {
  var $eventConsumed$$5$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$26_newAngle$$1$$ = $event$$503$$.keyCode, $node$$121$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this), $sunburst$$1$$ = this.$_view$;
  ("i" == $node$$121$$.$_drilling$ || "ir" == $node$$121$$.$_drilling$) && ((0,D.$DvtKeyboardEvent$isPlus$$)($event$$503$$) && !$node$$121$$.$isDisclosed$() || (0,D.$DvtKeyboardEvent$isMinus$$)($event$$503$$) && $node$$121$$.$isDisclosed$() || $event$$503$$.ctrlKey && 13 == $keyCode$$26_newAngle$$1$$) ? ($node$$121$$.$expandCollapseNode$(), $event$$503$$.preventDefault()) : $sunburst$$1$$ && "on" == $sunburst$$1$$.$_rotation$ && (37 == $keyCode$$26_newAngle$$1$$ || 39 == $keyCode$$26_newAngle$$1$$) && 
  !$event$$503$$.ctrlKey && $event$$503$$.altKey && $event$$503$$.shiftKey ? ($keyCode$$26_newAngle$$1$$ = 37 == $keyCode$$26_newAngle$$1$$ ? -5 * (window.Math.PI / 180) : 5 * (window.Math.PI / 180), (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($sunburst$$1$$, 0), (0,D.$JSCompiler_StaticMethods___rotate$$)($sunburst$$1$$, $keyCode$$26_newAngle$$1$$), (0,D.$JSCompiler_StaticMethods___endRotation$$)($sunburst$$1$$), $event$$503$$.preventDefault()) : $eventConsumed$$5$$ = D.$DvtSunburstEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, 
  $event$$503$$);
  return $eventConsumed$$5$$
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$504$$) {
  var $obj$$284$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$504$$.target);
  $obj$$284$$ && ($obj$$284$$.getId && "_rotationShape" == $obj$$284$$.getId()) && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$504$$, this.$RotateStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$505$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$505$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$506$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$506$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$RotateStartTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateStartTouch$$($event$$507$$, $touch$$50$$) {
  if(1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "rotateKey").length) {
    (0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$50$$.identifier, "rotateKey", D.$JSCompiler_alias_NULL$$, "rotateKey", "rotateKey", this.$RotateMoveTouch$, this.$RotateEndTouch$, this);
    (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$50$$.identifier, D.$JSCompiler_alias_FALSE$$);
    var $pos$$53$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$50$$.pageX, $touch$$50$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_5756$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5756$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5756$$, $pos$$53$$.x, $pos$$53$$.y));
    $event$$507$$.$blockTouchHold$()
  }
};
D.$JSCompiler_prototypeAlias$$.$RotateMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateMoveTouch$$($event$$508$$, $touch$$51$$) {
  var $pos$$54$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$51$$.pageX, $touch$$51$$.pageY), $JSCompiler_StaticMethods___continueRotation$self$$inline_5760$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5760$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5760$$, $pos$$54$$.x, $pos$$54$$.y));
  $event$$508$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$RotateEndTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateEndTouch$$() {
  (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)
};
D.$DvtSunburstBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstBundle$$, D.$DvtBundle$$, "DvtSunburstBundle");
D.$DvtSunburstBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtSunburstBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtSunburstBundle$$$$$GetDefaultStringForKey$$($key$$77$$) {
  return D.$DvtSunburstBundle$$._defaults[$key$$77$$]
};
D.$DvtSunburstBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSunburstBundle");
D.$DvtSunburstDefaults$$ = function $$DvtSunburstDefaults$$$() {
  this.Init({skyros:D.$DvtSunburstDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtSunburstDefaults");
D.$DvtSunburstDefaults$VERSION_1$$ = {rotation:"on"};
D.$DvtSunburstJsonUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstJsonUtils$$, D.$DvtBaseTreeJsonUtils$$, "DvtSunburstJsonUtils");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstJsonUtils$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)("sunburst");
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay$$5_options$$183$$) {
  var $ret$$86$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay$$5_options$$183$$), $ret$$86$$ = $ret$$86$$ + this.$WriteAttr$("r", $animationOnDisplay$$5_options$$183$$.rotation), $ret$$86$$ = $ret$$86$$ + this.$WriteAttr$("sa", ($animationOnDisplay$$5_options$$183$$.startAngle + 360) % 360);
  $animationOnDisplay$$5_options$$183$$ = $animationOnDisplay$$5_options$$183$$.animationOnDisplay;
  return $ret$$86$$ = "auto" == $animationOnDisplay$$5_options$$183$$ ? $ret$$86$$ + this.$WriteAttr$("adi", "fan") : $ret$$86$$ + this.$WriteAttr$("adi", $animationOnDisplay$$5_options$$183$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$184$$, $nodeData$$11$$) {
  var $ret$$87$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$184$$, $nodeData$$11$$), $ret$$87$$ = $ret$$87$$ + this.$WriteAttr$("ld", $nodeData$$11$$.labelDisplay ? $nodeData$$11$$.labelDisplay : $options$$184$$.nodeDefaults.labelDisplay), $labelHalign$$1_radius$$17$$ = $nodeData$$11$$.labelHalign ? $nodeData$$11$$.labelHalign : $options$$184$$.nodeDefaults.labelHalign;
  "inner" == $labelHalign$$1_radius$$17$$ ? $ret$$87$$ += this.$WriteAttr$("ha", "s") : "outer" == $labelHalign$$1_radius$$17$$ && ($ret$$87$$ += this.$WriteAttr$("ha", "e"));
  $labelHalign$$1_radius$$17$$ = $nodeData$$11$$.radius;
  $labelHalign$$1_radius$$17$$ != D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($labelHalign$$1_radius$$17$$) && ($ret$$87$$ += this.$WriteAttr$("r", $labelHalign$$1_radius$$17$$));
  return $ret$$87$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$185$$) {
  var $ret$$88$$, $bundle$$6$$ = new D.$DvtSunburstBundle$$;
  $ret$$88$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6$$, "SIZE"));
  $ret$$88$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6$$, "COLOR"));
  $ret$$88$$ += this.$WriteAttr$("cursorRotate", $options$$185$$._resources.rotateCursor);
  $ret$$88$$ += this.$WriteAttr$("alta", "true");
  return $ret$$88$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($options$$186_selectedColor$$) {
  var $ret$$89$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $options$$186_selectedColor$$), $animationColor$$1_borderColor$$49_hoverColor$$3$$ = $options$$186_selectedColor$$.animationUpdateColor;
  $animationColor$$1_borderColor$$49_hoverColor$$3$$ && ($ret$$89$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor$$1_borderColor$$49_hoverColor$$3$$));
  ($animationColor$$1_borderColor$$49_hoverColor$$3$$ = $options$$186_selectedColor$$.nodeDefaults.borderColor) && ($ret$$89$$ += this.$WriteAttr$("node", "border-color: " + $animationColor$$1_borderColor$$49_hoverColor$$3$$));
  ($animationColor$$1_borderColor$$49_hoverColor$$3$$ = $options$$186_selectedColor$$.nodeDefaults.hoverColor) && ($ret$$89$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor$$1_borderColor$$49_hoverColor$$3$$));
  ($options$$186_selectedColor$$ = $options$$186_selectedColor$$.nodeDefaults.selectedColor) && ($ret$$89$$ += this.$WriteAttr$("node-selected", "border-color: " + $options$$186_selectedColor$$));
  return $ret$$89$$ + "/\x3e\n"
};
});