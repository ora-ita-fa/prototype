define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtSunburstRotationEvent$$ = function $$DvtSunburstRotationEvent$$$($startAngle$$3$$, $bComplete$$1$$) {
  this.Init($bComplete$$1$$ === D.$JSCompiler_alias_FALSE$$ ? "sunburstRotationInput" : "sunburstRotation");
  this.$_startAngle$ = $startAngle$$3$$
};
(0,D.$goog$exportSymbol$$)("DvtSunburstRotationEvent", D.$DvtSunburstRotationEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstRotationEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstRotationEvent");
D.$DvtSunburstRotationEvent$$.TYPE = "sunburstRotation";
D.$DvtSunburstRotationEvent$$.TYPE_INPUT = "sunburstRotationInput";
D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$ = (0,D.$JSCompiler_get$$)("$_startAngle$");
D.$DvtSunburstRotationEvent$$.prototype.getStartAngle = D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$;
D.$DvtBaseSunburst$$ = function $$DvtBaseSunburst$$$($context$$20$$, $callback$$37$$, $callbackObj$$14$$) {
  this.Init($context$$20$$, $callback$$37$$, $callbackObj$$14$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseSunburst$$, D.$DvtBaseTreeView$$, "DvtBaseSunburst");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseSunburst$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$21$$, $callback$$38$$, $callbackObj$$15$$) {
  D.$DvtBaseSunburst$$.$superclass$.Init.call(this, $context$$21$$, $callback$$38$$, $callbackObj$$15$$);
  this.$Defaults$ = new D.$DvtSunburstDefaults$$;
  this.$_angleExtent$ = 2 * window.Math.PI
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$4$$) {
  return(new D.$DvtSunburstParser$$(this)).parse($xmlString$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($props$$2$$) {
  D.$DvtBaseSunburst$$.$superclass$.$ApplyParsedProperties$.call(this, $props$$2$$);
  this.$_rotation$ = $props$$2$$.rotation;
  this.$_rotateCursor$ = D.$DvtAgent$$.$isPlatformIE$() ? "url(" + this.$_resources$.cursorRotate + "), auto" : "url(" + this.$_resources$.cursorRotate + ") 8 8, auto";
  this.$_startAngle$ = (360 - $props$$2$$.$startAngle$) * D.$DvtSunburstNode$TWO_PI$$ / 360;
  this.$_startAngle$ > window.Math.PI && (this.$_startAngle$ -= D.$DvtSunburstNode$TWO_PI$$)
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$2$$) {
  var $bufferSpace$$1$$ = window.Math.max(window.Math.ceil(3 * window.Math.min($availSpace$$2$$.$w$, $availSpace$$2$$.$h$) / 400), 2);
  $availSpace$$2$$.x += $bufferSpace$$1$$;
  $availSpace$$2$$.y += $bufferSpace$$1$$;
  $availSpace$$2$$.$w$ -= 2 * $bufferSpace$$1$$;
  $availSpace$$2$$.$h$ -= 2 * $bufferSpace$$1$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$2$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$2$$);
  this.$_totalRadius$ = window.Math.floor(window.Math.min($availSpace$$2$$.$w$, $availSpace$$2$$.$h$) / 2);
  this.$_root$ && D.$DvtSunburstLayout$$.$layout$(this.$_totalRadius$, this.$_root$, this.$_startAngle$, this.$_angleExtent$, this.$Sorting$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$9$$, $bounds$$7$$) {
  this.$RenderBackground$($container$$9$$, "");
  this.$_breadcrumbs$ && $container$$9$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$9$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  this.$_translatePt$ = new D.$DvtPoint$$($bounds$$7$$.x + $bounds$$7$$.$w$ / 2, $bounds$$7$$.y + $bounds$$7$$.$h$ / 2);
  if("on" == this.$_rotation$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $buffer$$8_nodeContainer_rotationShape$$ = D.$DvtAgent$$.$isTouchDevice$() ? 60 : 15, $buffer$$8_nodeContainer_rotationShape$$ = new D.$DvtCircle$$(this.$_context$, $bounds$$7$$.x + $bounds$$7$$.$w$ / 2, $bounds$$7$$.y + $bounds$$7$$.$h$ / 2, this.$_totalRadius$ + $buffer$$8_nodeContainer_rotationShape$$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($buffer$$8_nodeContainer_rotationShape$$);
    $buffer$$8_nodeContainer_rotationShape$$.setCursor(this.$_rotateCursor$);
    $container$$9$$.$addChild$($buffer$$8_nodeContainer_rotationShape$$);
    this.$__getEventManager$().$associate$($buffer$$8_nodeContainer_rotationShape$$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
  }
  $buffer$$8_nodeContainer_rotationShape$$ = new D.$DvtContainer$$(this.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buffer$$8_nodeContainer_rotationShape$$, this.$_translatePt$.x, this.$_translatePt$.y);
  $container$$9$$.$addChild$($buffer$$8_nodeContainer_rotationShape$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $nodeLayer$$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$8_nodeContainer_rotationShape$$.$addChild$($nodeLayer$$);
    this.$_root$.$render$($nodeLayer$$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$8_nodeContainer_rotationShape$$.$addChild$(this.$_selectedLayer$);
    this.$_hoverLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$8_nodeContainer_rotationShape$$.$addChild$(this.$_hoverLayer$)
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$9$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$4$$, $context$$22$$, $callback$$39$$, $callbackObj$$16$$) {
  return new D.$DvtSunburstEventManager$$($view$$4$$, $context$$22$$, $callback$$39$$, $callbackObj$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$10$$, $bounds$$8$$) {
  if("fan" === this.$AnimationOnDisplay$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_animateAngleExtent$(0);
    var $anim$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$AnimationDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$.$_animator$, "typeNumber", this, this.$_getAngleExtent$, this.$_animateAngleExtent$, 2 * window.Math.PI);
    return $anim$$
  }
  return D.$DvtBaseSunburst$$.$superclass$.$GetDisplayAnimation$.call(this, $container$$10$$, $bounds$$8$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  var $ret$$ = D.$DvtBaseSunburst$$.$superclass$.$GetDeleteContainer$.call(this);
  $ret$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($ret$$, this.$_translatePt$.x, this.$_translatePt$.y);
  return $ret$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  if(!this.$AnimationStopped$) {
    this.$_container$.$removeChildren$();
    var $availSpace$$3_selectedNodes$$2$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
    this.$Layout$($availSpace$$3_selectedNodes$$2$$);
    this.$Render$(this.$_container$, $availSpace$$3_selectedNodes$$2$$);
    for(var $availSpace$$3_selectedNodes$$2$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$21$$ = 0;$i$$21$$ < $availSpace$$3_selectedNodes$$2$$.length;$i$$21$$++) {
      $availSpace$$3_selectedNodes$$2$$[$i$$21$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
  D.$DvtBaseSunburst$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($displayable$$3$$) {
  this.$_selectedLayer$.$addChild$($displayable$$3$$);
  D.$DvtAgent$$.$isBrowserSafari$() || ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_selectedLayer$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_selectedLayer$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$))
};
D.$JSCompiler_prototypeAlias$$.$_getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$_animateAngleExtent$ = function $$JSCompiler_prototypeAlias$$$$_animateAngleExtent$$($extent$$) {
  this.$_angleExtent$ = $extent$$;
  this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this.$_root$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods___setRotationAnchor$$ = function $$JSCompiler_StaticMethods___setRotationAnchor$$$($JSCompiler_StaticMethods___setRotationAnchor$self$$, $angle$$7$$) {
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_currentAngle$ = $angle$$7$$;
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
  var $degrees$$1$$ = 360 - window.Math.round(180 * $JSCompiler_StaticMethods___endRotation$self$$.$_startAngle$ / window.Math.PI);
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$1$$, D.$JSCompiler_alias_FALSE$$));
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$1$$, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods__calcAngle$$ = function $$JSCompiler_StaticMethods__calcAngle$$$($JSCompiler_StaticMethods__calcAngle$self$$, $x$$76$$, $y$$55$$) {
  return window.Math.atan2($y$$55$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.y, $x$$76$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.x)
};
D.$DvtSunburst$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSunburst", D.$DvtSunburst$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburst$$, D.$DvtBaseSunburst$$, "DvtSunburst");
D.$DvtSunburst$$.newInstance = function $$DvtSunburst$$$newInstance$($context$$23$$, $callback$$40$$, $callbackObj$$17$$) {
  var $component$$2$$ = new D.$DvtSunburst$$;
  $component$$2$$.Init($context$$23$$, $callback$$40$$, $callbackObj$$17$$);
  return $component$$2$$
};
D.$DvtSunburst$$.getDefaults = function $$DvtSunburst$$$getDefaults$($skin$$1$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSunburstDefaults$$, $skin$$1$$)
};
D.$DvtSunburst$$.prototype.$render$ = function $$DvtSunburst$$$$$render$$($options$$10_xmlString$$5$$, $width$$20$$, $height$$20$$) {
  $options$$10_xmlString$$5$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$10_xmlString$$5$$), D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$10_xmlString$$5$$ = (new D.$DvtSunburstJsonUtils$$).$toXml$(this.$Options$);
  D.$DvtSunburst$$.$superclass$.$render$.call(this, $options$$10_xmlString$$5$$, $width$$20$$, $height$$20$$)
};
D.$DvtSunburst$$.prototype.render = D.$DvtSunburst$$.prototype.$render$;
D.$DvtSunburstParser$$ = function $$DvtSunburstParser$$$($sunburst$$1$$) {
  this.Init($sunburst$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstParser$$, D.$DvtBaseTreeParser$$, "DvtSunburstParser");
D.$DvtSunburstParser$$.prototype.$CreateNode$ = function $$DvtSunburstParser$$$$$CreateNode$$($treeView$$1$$, $props$$8$$, $templates$$3$$) {
  return new D.$DvtSunburstNode$$($treeView$$1$$, $props$$8$$, $templates$$3$$)
};
D.$DvtSunburstParser$$.prototype.$ParseRootAttributes$ = function $$DvtSunburstParser$$$$$ParseRootAttributes$$($xmlNode$$54$$) {
  var $ret$$83$$ = D.$DvtSunburstParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$54$$);
  $ret$$83$$.rotation = $xmlNode$$54$$.$getAttr$("r");
  $ret$$83$$.$startAngle$ = $xmlNode$$54$$.$getAttr$("sa");
  if($ret$$83$$.$startAngle$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($ret$$83$$.$startAngle$)) {
    $ret$$83$$.$startAngle$ = 90
  }
  return $ret$$83$$
};
D.$DvtSunburstParser$$.prototype.$ParseNodeAttributes$ = function $$DvtSunburstParser$$$$$ParseNodeAttributes$$($xmlNode$$55$$) {
  var $ret$$84$$ = D.$DvtSunburstParser$$.$superclass$.$ParseNodeAttributes$.call(this, $xmlNode$$55$$);
  $ret$$84$$.$labelHalign$ = $xmlNode$$55$$.$getAttr$("ha");
  $ret$$84$$.$radius$ = $xmlNode$$55$$.$getAttr$("r");
  return $ret$$84$$
};
D.$DvtSunburstParser$$.prototype.$ParseAdditionalNodeStyles$ = function $$DvtSunburstParser$$$$$ParseAdditionalNodeStyles$$($nodeStyle$$1$$, $nodeHoverStyle$$1$$, $nodeSelectedStyle$$1$$, $styles$$12$$) {
  $styles$$12$$.NODE_DEFAULT_COLOR_STYLE = $nodeStyle$$1$$.$getStyle$("border-color");
  $styles$$12$$.NODE_HOVER_COLOR_STYLE = $nodeHoverStyle$$1$$.$getStyle$("border-color");
  $styles$$12$$.NODE_SELECTED_INNER_COLOR_STYLE = $nodeSelectedStyle$$1$$.$getStyle$("-tr-inner-color");
  $styles$$12$$.NODE_SELECTED_OUTER_COLOR_STYLE = $nodeSelectedStyle$$1$$.$getStyle$("-tr-outer-color")
};
D.$DvtSunburstNode$$ = function $$DvtSunburstNode$$$($sunburst$$2$$, $props$$9$$, $templates$$4$$) {
  this.Init($sunburst$$2$$, $props$$9$$, $templates$$4$$);
  this.$_labelDisplay$ = $props$$9$$.$labelDisplay$ ? $props$$9$$.$labelDisplay$ : "auto";
  this.$_labelHalign$ = $props$$9$$.$labelHalign$;
  this.$_radius$ = $props$$9$$.$radius$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstNode$$, D.$DvtBaseTreeNode$$, "DvtSunburstNode");
D.$DvtSunburstNode$TWO_PI$$ = 2 * window.Math.PI;
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$74$$) {
  if(this.$_hasLayout$) {
    this.$_nodeContainer$ = $container$$74$$;
    this.$_shape$ = this.$_createShapeNode$();
    $container$$74$$.$addChild$(this.$_shape$);
    var $afRoot$$9_template$$21$$ = this.$_template$;
    if(!this.$_parent$ && (0 == this.$_innerRadius$ && this.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$) && $afRoot$$9_template$$21$$) {
      var $afContext$$28_dims$$50_sqrt2$$ = window.Math.sqrt(2), $aw$$2_matrix$$15$$ = this.$_outerRadius$ * $afContext$$28_dims$$50_sqrt2$$ - 4;
      this.$_x$ = -this.$_outerRadius$ / $afContext$$28_dims$$50_sqrt2$$ + 2;
      this.$_y$ = -this.$_outerRadius$ / $afContext$$28_dims$$50_sqrt2$$ + 2;
      $afContext$$28_dims$$50_sqrt2$$ = this.$_view$.$_afContext$;
      $afContext$$28_dims$$50_sqrt2$$.$_elContext$ = this.$_elAttributes$;
      0 < $aw$$2_matrix$$15$$ && 0 < $aw$$2_matrix$$15$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$28_dims$$50_sqrt2$$, $aw$$2_matrix$$15$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$28_dims$$50_sqrt2$$, $aw$$2_matrix$$15$$), $afContext$$28_dims$$50_sqrt2$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$9_template$$21$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$28_dims$$50_sqrt2$$, 
      $afRoot$$9_template$$21$$, this.$_shape$), $afContext$$28_dims$$50_sqrt2$$ = $afRoot$$9_template$$21$$.$getDimensions$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$9_template$$21$$, this.$_x$ + ($aw$$2_matrix$$15$$ - $afContext$$28_dims$$50_sqrt2$$.$w$) / 2, this.$_y$ + ($aw$$2_matrix$$15$$ - $afContext$$28_dims$$50_sqrt2$$.$h$) / 2))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_shape$.$addChild$(this.$_text$), this.$_pattern$ && ($afContext$$28_dims$$50_sqrt2$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $afContext$$28_dims$$50_sqrt2$$.x, $afContext$$28_dims$$50_sqrt2$$.y, $afContext$$28_dims$$50_sqrt2$$.$w$, $afContext$$28_dims$$50_sqrt2$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
      this.$_shape$.$addChild$(this.$_textBackground$), $aw$$2_matrix$$15$$ = this.$_text$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_isIdentity$$)($aw$$2_matrix$$15$$) || this.$_textBackground$.$setMatrix$($aw$$2_matrix$$15$$), this.$_shape$.$addChild$(this.$_text$)))
    }
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$_shape$);
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$_datatip$);
    this.$renderChildren$($container$$74$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$14$$) {
  "off" != this.$Selectable$ && (D.$DvtSunburstNode$$.$superclass$.$setSelected$.call(this, $selected$$14$$), this.$isSelected$() ? (this.$_shape$.$setSelected$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$)) : (this.$_shape$.$setSelected$(D.$JSCompiler_alias_FALSE$$), this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$)))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && (this.$_shape$.$showHoverEffect$(), this.$isSelected$() ? this.$_view$.$__moveToSelectedLayer$(this.$_shape$) : this.$_view$.$_hoverLayer$.$addChild$(this.$_shape$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_shape$ && (this.$_hasLayout$ && !this.$isShowingKeyboardFocusEffect$()) && (this.$_shape$.$hideHoverEffect$(), !this.$isSelected$() && this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$440_next$$3$$) {
  var $keyCode$$21_lastVisitedChild$$, $lastVisitedMidAngle_navigables$$2$$, $i$$inline_5132_idx$$24$$, $root$$14$$;
  if($event$$440_next$$3$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtSunburstNode$$.$superclass$.$getNextNavigable$.call(this, $event$$440_next$$3$$)
  }
  $keyCode$$21_lastVisitedChild$$ = $event$$440_next$$3$$.keyCode;
  if(32 == $keyCode$$21_lastVisitedChild$$ && $event$$440_next$$3$$.ctrlKey) {
    return this
  }
  for($root$$14$$ = this;$root$$14$$.$_parent$;) {
    $root$$14$$ = $root$$14$$.$_parent$
  }
  $lastVisitedMidAngle_navigables$$2$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$14$$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this));
  a: {
    for($i$$inline_5132_idx$$24$$ = 0;$i$$inline_5132_idx$$24$$ < $lastVisitedMidAngle_navigables$$2$$.length;$i$$inline_5132_idx$$24$$++) {
      if(this === $lastVisitedMidAngle_navigables$$2$$[$i$$inline_5132_idx$$24$$]) {
        break a
      }
    }
    $i$$inline_5132_idx$$24$$ = -1
  }
  var $midAngle$$ = this.$_startAngle$ + this.$_angleExtent$ / 2, $midAngle$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($midAngle$$);
  switch($keyCode$$21_lastVisitedChild$$) {
    case 38:
      if(this === $root$$14$$ || 180 < $midAngle$$) {
        if($keyCode$$21_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$2$$ = $keyCode$$21_lastVisitedChild$$.$_startAngle$ + $keyCode$$21_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$2$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$2$$), 180 < $lastVisitedMidAngle_navigables$$2$$) {
            return $keyCode$$21_lastVisitedChild$$
          }
        }
        $event$$440_next$$3$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$440_next$$3$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$440_next$$3$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 40:
      if(this === $root$$14$$ || 0 <= $midAngle$$ && 180 >= $midAngle$$) {
        if($keyCode$$21_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$2$$ = $keyCode$$21_lastVisitedChild$$.$_startAngle$ + $keyCode$$21_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$2$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$2$$), 0 <= $lastVisitedMidAngle_navigables$$2$$ && 180 >= $lastVisitedMidAngle_navigables$$2$$) {
            return $keyCode$$21_lastVisitedChild$$
          }
        }
        $event$$440_next$$3$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$440_next$$3$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$440_next$$3$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 37:
      $event$$440_next$$3$$ = 1 == $lastVisitedMidAngle_navigables$$2$$.length ? this : 0 == $i$$inline_5132_idx$$24$$ ? $lastVisitedMidAngle_navigables$$2$$[$lastVisitedMidAngle_navigables$$2$$.length - 1] : $lastVisitedMidAngle_navigables$$2$$[$i$$inline_5132_idx$$24$$ - 1];
      break;
    case 39:
      $event$$440_next$$3$$ = 1 == $lastVisitedMidAngle_navigables$$2$$.length ? this : $i$$inline_5132_idx$$24$$ == $lastVisitedMidAngle_navigables$$2$$.length - 1 ? $lastVisitedMidAngle_navigables$$2$$[0] : $lastVisitedMidAngle_navigables$$2$$[$i$$inline_5132_idx$$24$$ + 1];
      break;
    default:
      $event$$440_next$$3$$ = this
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$440_next$$3$$);
  return $event$$440_next$$3$$
};
D.$JSCompiler_StaticMethods__navigateToParent$$ = function $$JSCompiler_StaticMethods__navigateToParent$$$($JSCompiler_StaticMethods__navigateToParent$self_next$$4$$) {
  var $parent$$74$$ = $JSCompiler_StaticMethods__navigateToParent$self_next$$4$$.$_parent$;
  $parent$$74$$ && ($JSCompiler_StaticMethods__navigateToParent$self_next$$4$$ = $parent$$74$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($parent$$74$$));
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($JSCompiler_StaticMethods__navigateToParent$self_next$$4$$);
  return $JSCompiler_StaticMethods__navigateToParent$self_next$$4$$
};
D.$DvtSunburstNode$_normalizedRadToDeg$$ = function $$DvtSunburstNode$_normalizedRadToDeg$$$($deg$$1_rad$$2$$) {
  $deg$$1_rad$$2$$ = D.$DvtMath$$.$radsToDegrees$($deg$$1_rad$$2$$);
  0 > $deg$$1_rad$$2$$ ? $deg$$1_rad$$2$$ += 360 : 360 < $deg$$1_rad$$2$$ && ($deg$$1_rad$$2$$ -= 360);
  return $deg$$1_rad$$2$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  if(this.$_shape$) {
    var $bounds$$111$$ = this.$_shape$.$getDimensions$(), $point$$43$$ = new D.$DvtPoint$$($bounds$$111$$.x, $bounds$$111$$.y), $point$$43$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, $point$$43$$);
    $bounds$$111$$.x = $point$$43$$.x;
    $bounds$$111$$.y = $point$$43$$.y;
    return $bounds$$111$$
  }
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = function $$JSCompiler_prototypeAlias$$$$getContextMenuLocation$$() {
  return(0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, (0,D.$DvtSunburstNode$_calcPointOnArc$$)(0.5 * (this.$_outerRadius$ + this.$_innerRadius$), this.$_startAngle$ + this.$_angleExtent$ / 2))
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($innerRadius$$7$$, $outerRadius$$7$$, $startAngle$$19$$, $angleExtent$$13$$) {
  this.$_innerRadius$ = $innerRadius$$7$$;
  this.$_outerRadius$ = $outerRadius$$7$$;
  this.$_startAngle$ = $startAngle$$19$$;
  this.$_angleExtent$ = $angleExtent$$13$$;
  this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$GetFill$ = function $$JSCompiler_prototypeAlias$$$$GetFill$$() {
  return this.$_bArtificialRoot$ ? (0,D.$DvtSolidFill$invisibleFill$$)() : D.$DvtSunburstNode$$.$superclass$.$GetFill$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$59$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$22$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$38$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_innerRadius$, this.$_outerRadius$, this.$_startAngle$, this.$_angleExtent$, $r$$59$$, $g$$22$$, $b$$38$$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$12$$) {
  this.$setLayoutParams$($params$$12$$[0], $params$$12$$[1], $params$$12$$[2], $params$$12$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$12$$[4]), window.Math.round($params$$12$$[5]), window.Math.round($params$$12$$[6]));
  (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$17$$, $oldNode$$9$$) {
  $oldNode$$9$$.$_hasLayout$ && 0 < $oldNode$$9$$.$_angleExtent$ ? D.$DvtSunburstNode$$.$superclass$.$animateUpdate$.call(this, $handler$$17$$, $oldNode$$9$$) : this.$animateInsert$($handler$$17$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$217$$, $y$$187$$) {
  var $angle$$33$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($x$$217$$, $y$$187$$);
  return window.Math.sqrt($x$$217$$ * $x$$217$$ + $y$$187$$ * $y$$187$$) >= this.$_innerRadius$ && window.Math.sqrt($x$$217$$ * $x$$217$$ + $y$$187$$ * $y$$187$$) <= this.$_outerRadius$ && (0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $angle$$33$$)
};
D.$JSCompiler_StaticMethods_ContainsAngle$$ = function $$JSCompiler_StaticMethods_ContainsAngle$$$($JSCompiler_StaticMethods_ContainsAngle$self$$, $angle$$34$$) {
  for(;$angle$$34$$ < $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$;) {
    $angle$$34$$ += D.$DvtSunburstNode$TWO_PI$$
  }
  for(;$angle$$34$$ - $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ > D.$DvtSunburstNode$TWO_PI$$;) {
    $angle$$34$$ -= D.$DvtSunburstNode$TWO_PI$$
  }
  return $angle$$34$$ >= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ && $angle$$34$$ <= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ + $JSCompiler_StaticMethods_ContainsAngle$self$$.$_angleExtent$
};
D.$DvtSunburstNode$_calcPointOnArc$$ = function $$DvtSunburstNode$_calcPointOnArc$$$($radius$$22$$, $angle$$35$$) {
  return{x:window.Math.cos($angle$$35$$) * $radius$$22$$, y:window.Math.sin($angle$$35$$) * $radius$$22$$}
};
D.$DvtSunburstNode$_calcAngle$$ = function $$DvtSunburstNode$_calcAngle$$$($x$$219$$, $y$$189$$) {
  var $angle$$36$$ = window.Math.atan2($y$$189$$, $x$$219$$);
  0 > $angle$$36$$ ? $angle$$36$$ += D.$DvtSunburstNode$TWO_PI$$ : $angle$$36$$ > D.$DvtSunburstNode$TWO_PI$$ && ($angle$$36$$ -= D.$DvtSunburstNode$TWO_PI$$);
  return $angle$$36$$
};
D.$DvtSunburstNode$$.prototype.$_createShapeNode$ = function $$DvtSunburstNode$$$$$_createShapeNode$$() {
  if(!this.$_angleExtent$ || 0 >= this.$_angleExtent$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $cmd$$9_shape$$75$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)(this), $cmd$$9_shape$$75$$ = new D.$DvtPath$$(this.$_view$.$_context$, $cmd$$9_shape$$75$$);
  this.$_view$.$__getEventManager$().$associate$($cmd$$9_shape$$75$$, this);
  $cmd$$9_shape$$75$$.$setAlpha$(this.$getAlpha$());
  $cmd$$9_shape$$75$$.$setFill$(this.$GetFill$());
  var $selectedInnerColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_SELECTED_INNER_COLOR_STYLE"), $selectedOuterColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "NODE_SELECTED_OUTER_COLOR_STYLE"), $hoverColor$$2$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR_STYLE");
  $cmd$$9_shape$$75$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_DEFAULT_COLOR_STYLE"), 0.3));
  $cmd$$9_shape$$75$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$2$$, 1, 3));
  $cmd$$9_shape$$75$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectedInnerColor$$, 1, 1.5), new D.$DvtSolidStroke$$($selectedOuterColor$$, 1, 3.5));
  $cmd$$9_shape$$75$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$2$$, 1, 3));
  $cmd$$9_shape$$75$$.$setSelectable$(this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$ && "off" != this.$Selectable$);
  this.$_bArtificialRoot$ && ($cmd$$9_shape$$75$$.$setAlpha$(0.001), $cmd$$9_shape$$75$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  return $cmd$$9_shape$$75$$
};
D.$JSCompiler_StaticMethods__createPathCmd$$ = function $$JSCompiler_StaticMethods__createPathCmd$$$($JSCompiler_StaticMethods__createPathCmd$self$$) {
  var $cmd$$10_p1$$5$$, $p2$$5$$, $p3$$3$$, $p4$$3$$;
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ < D.$DvtSunburstNode$TWO_PI$$ ? ($cmd$$10_p1$$5$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$5$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), 
  $p3$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), $p4$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $cmd$$10_p1$$5$$ = window.DvtPathUtils.moveTo($cmd$$10_p1$$5$$.x, $cmd$$10_p1$$5$$.y) + 
  window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 1, $p2$$5$$.x, $p2$$5$$.y) + window.DvtPathUtils.lineTo($p3$$3$$.x, $p3$$3$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 
  0, $p4$$3$$.x, $p4$$3$$.y) + window.DvtPathUtils.closePath()) : ($cmd$$10_p1$$5$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$5$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), 
  $p3$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p4$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $cmd$$10_p1$$5$$ = window.DvtPathUtils.moveTo($cmd$$10_p1$$5$$.x, $cmd$$10_p1$$5$$.y) + 
  window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $p2$$5$$.x, $p2$$5$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $cmd$$10_p1$$5$$.x, $cmd$$10_p1$$5$$.y), 
  0 < $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$ && ($cmd$$10_p1$$5$$ += window.DvtPathUtils.moveTo($p4$$3$$.x, $p4$$3$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p3$$3$$.x, $p3$$3$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p4$$3$$.x, $p4$$3$$.y)), $cmd$$10_p1$$5$$ += window.DvtPathUtils.closePath());
  return $cmd$$10_p1$$5$$
};
D.$DvtSunburstNode$$.prototype.$_createTextNode$ = function $$DvtSunburstNode$$$$$_createTextNode$$($JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$) {
  if(!this.$_textStr$ || !$JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ || !this.$_labelDisplay$ || "off" == this.$_labelDisplay$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ = D.$JSCompiler_alias_FALSE$$;
  "auto" == this.$_labelDisplay$ ? $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ = !D.$DvtAgent$$.$isPlatformIE$() && D.$DvtAgent$$.$getOS$() == D.$DvtAgent$$.$WINDOWS_OS$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$ : "rotated" == this.$_labelDisplay$ && ($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ = D.$JSCompiler_alias_TRUE$$);
  if($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ && this.$_angleExtent$ < 2 * window.Math.PI) {
    var $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ = window.Math.max(this.$_innerRadius$, 10), $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$ = this.$_outerRadius$ - $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ - 6, $availHeight$$inline_5138_x1$$inline_5152$$ = 1.1 * this.$_angleExtent$ * ($angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ + 
    6);
    if(6 >= $availHeight$$inline_5138_x1$$inline_5152$$) {
      $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ = D.$JSCompiler_alias_NULL$$
    }else {
      if($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, 0, 0), $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$), D.$DvtTextUtils$$.$fitText$($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$, 
      $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$, $availHeight$$inline_5138_x1$$inline_5152$$, $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$)) {
        $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$ = ($angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ + this.$_outerRadius$) / 2;
        if("s" == this.$_labelHalign$ || "e" == this.$_labelHalign$) {
          $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$.$addChild$($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$), $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ = $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.$getDimensions$().$w$, "s" == this.$_labelHalign$ ? $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$ = 
          $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ + 4.5 + $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ / 2 : "e" == this.$_labelHalign$ && ($anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$ = $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ - 4.5 - $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ / 
          2)
        }
        $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$, this.$_startAngle$ + this.$_angleExtent$ / 2);
        $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.$alignCenter$();
        $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.$alignMiddle$();
        $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ = this.$_startAngle$ + this.$_angleExtent$ / 2;
        $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ = $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ >= D.$DvtSunburstNode$TWO_PI$$ ? $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ - D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$;
        $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ = 0 > $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ ? $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ + D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$;
        $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ > 0.5 * window.Math.PI && $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ < 1.5 * window.Math.PI && ($angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ += window.Math.PI);
        $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.$setRotation$($angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$, $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$.x, $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$.y);
        $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ = $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$
      }else {
        $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ = D.$JSCompiler_alias_NULL$$
      }
    }
  }else {
    if(0 == this.$_innerRadius$) {
      $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ = {x:0, y:0}
    }else {
      if($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)((this.$_innerRadius$ + this.$_outerRadius$) / 2, this.$_startAngle$ + this.$_angleExtent$ / 2), $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ = 3 * (0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) / 2, $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.x + 
      $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ / 2, $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.y), !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, (0,D.$DvtSunburstNode$_calcAngle$$)($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.x - $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ / 2, $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.y)) || 
      !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$)) {
        $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ = D.$JSCompiler_alias_NULL$$
      }
    }
    if($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$) {
      $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.x, $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.y, D.$JSCompiler_alias_NULL$$);
      $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$);
      $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$.$alignCenter$();
      $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$.$alignMiddle$();
      $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      for(var $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$ = D.$DvtTextUtils$$.$guessTextDimensions$($angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$), $x2$$inline_5153$$ = $availHeight$$inline_5138_x1$$inline_5152$$ = $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.x, $y1$$inline_5154$$ = $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.y - 
      $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$.$h$ / 2, $y2$$inline_5155$$ = $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.y + $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$.$h$ / 2;this.contains($availHeight$$inline_5138_x1$$inline_5152$$, $y1$$inline_5154$$) && this.contains($availHeight$$inline_5138_x1$$inline_5152$$, $y2$$inline_5155$$);) {
        $availHeight$$inline_5138_x1$$inline_5152$$--
      }
      for(;this.contains($x2$$inline_5153$$, $y1$$inline_5154$$) && this.contains($x2$$inline_5153$$, $y2$$inline_5155$$);) {
        $x2$$inline_5153$$++
      }
      $availHeight$$inline_5138_x1$$inline_5152$$ += 3;
      $x2$$inline_5153$$ -= 3;
      $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ = 2 * window.Math.min($bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.x - $availHeight$$inline_5138_x1$$inline_5152$$, $x2$$inline_5153$$ - $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$.x);
      $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ < $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$.$w$ && ($angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$.$setX$(($availHeight$$inline_5138_x1$$inline_5152$$ + $x2$$inline_5153$$) / 2), $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$ = $x2$$inline_5153$$ - $availHeight$$inline_5138_x1$$inline_5152$$);
      $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ = D.$DvtTextUtils$$.$fitText$($angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$, $bRotated_text$$inline_5139_textAnchor$$inline_5147_usableSpace$$inline_5156$$, $anchorRadius$$inline_5140_availWidth$$inline_5137_estimatedDims$$inline_5151_rightAngle$$inline_5149$$.$h$, $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$) ? 
      $angle$$inline_5143_approxWidth$$inline_5148_innerStartCoord$$inline_5136_text$$inline_5150$$ : D.$JSCompiler_alias_NULL$$
    }else {
      $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$ = D.$JSCompiler_alias_VOID$$
    }
  }
  return $JSCompiler_temp$$180_actualTextWidth$$inline_5141_container$$76_textAnchor$$inline_5142$$
};
D.$DvtSunburstNode$$.prototype.$handleMouseOver$ = function $$DvtSunburstNode$$$$$handleMouseOver$$() {
  if(!this.$_expandButton$) {
    var $JSCompiler_inline_result$$452_container$$inline_5159_tooltip$$inline_5162$$;
    $JSCompiler_inline_result$$452_container$$inline_5159_tooltip$$inline_5162$$ = this.$_shape$;
    if(!$JSCompiler_inline_result$$452_container$$inline_5159_tooltip$$inline_5162$$ || !("i" == this.$_drilling$ || "ir" == this.$_drilling$)) {
      $JSCompiler_inline_result$$452_container$$inline_5159_tooltip$$inline_5162$$ = D.$JSCompiler_alias_NULL$$
    }else {
      var $JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$;
      if(this.$_disclosed$) {
        $JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$ = this.$_view$.$_context$;
        var $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$ = this.$_view$.$_resources$, $center$$inline_5161_upState$$inline_9334_upState$$inline_9342$$ = new D.$DvtImage$$($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$, $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$.collapseUp, 0, 0, 16, 16), $overState$$inline_9335_overState$$inline_9343$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$, $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$.collapseOver, 0, 0, 16, 16), $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$ = new D.$DvtImage$$($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$, 
        $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$.collapseDown, 0, 0, 16, 16)
      }else {
        $JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$ = this.$_view$.$_context$, $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$ = this.$_view$.$_resources$, $center$$inline_5161_upState$$inline_9334_upState$$inline_9342$$ = new D.$DvtImage$$($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$, $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$.expandUp, 
        0, 0, 16, 16), $overState$$inline_9335_overState$$inline_9343$$ = new D.$DvtImage$$($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$, $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$.expandOver, 0, 0, 16, 16), $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$ = new D.$DvtImage$$($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$, 
        $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$.expandDown, 0, 0, 16, 16)
      }
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($center$$inline_5161_upState$$inline_9334_upState$$inline_9342$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_9335_overState$$inline_9343$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$);
      $JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$ = new D.$DvtButton$$($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$, $center$$inline_5161_upState$$inline_9334_upState$$inline_9342$$, $overState$$inline_9335_overState$$inline_9343$$, $downState$$inline_9336_downState$$inline_9344_resources$$inline_9333_resources$$inline_9341$$);
      $JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$expandCollapseNode$, D.$JSCompiler_alias_FALSE$$, this);
      $center$$inline_5161_upState$$inline_9334_upState$$inline_9342$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$, $center$$inline_5161_upState$$inline_9334_upState$$inline_9342$$.x - 8, $center$$inline_5161_upState$$inline_9334_upState$$inline_9342$$.y - 8);
      $JSCompiler_inline_result$$452_container$$inline_5159_tooltip$$inline_5162$$.$addChild$($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$);
      $JSCompiler_inline_result$$452_container$$inline_5159_tooltip$$inline_5162$$ = this.$_disclosed$ ? this.$_view$.$_resources$.collapse : this.$_view$.$_resources$.expand;
      this.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$, new D.$DvtBaseTreePeer$$(this, this.getId(), $JSCompiler_inline_result$$452_container$$inline_5159_tooltip$$inline_5162$$));
      $JSCompiler_inline_result$$452_container$$inline_5159_tooltip$$inline_5162$$ = $JSCompiler_temp$$8014_button$$inline_5160_button$$inline_9337_button$$inline_9345_context$$inline_9332_context$$inline_9340$$
    }
    this.$_expandButton$ = $JSCompiler_inline_result$$452_container$$inline_5159_tooltip$$inline_5162$$
  }
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtSunburstNode$$.prototype.$handleMouseOut$ = function $$DvtSunburstNode$$$$$handleMouseOut$$() {
  this.$_expandButton$ && this.$_shape$ && (this.$_shape$.removeChild(this.$_expandButton$), this.$_expandButton$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods_updateShapes$$ = function $$JSCompiler_StaticMethods_updateShapes$$$($JSCompiler_StaticMethods_updateShapes$self$$, $bRecurse$$) {
  if($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$) {
    var $children$$20_cmd$$11$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)($JSCompiler_StaticMethods_updateShapes$self$$);
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setCmds$($children$$20_cmd$$11$$);
    if($JSCompiler_StaticMethods_updateShapes$self$$.$_parent$ || !(0 == $JSCompiler_StaticMethods_updateShapes$self$$.$_innerRadius$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$)) {
      $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_text$), $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ = $JSCompiler_StaticMethods_updateShapes$self$$.$_createTextNode$($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$), $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ && ($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$), 
      $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ = D.$JSCompiler_alias_NULL$$)
    }
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setFill$($JSCompiler_StaticMethods_updateShapes$self$$.$GetFill$());
    if($bRecurse$$) {
      for(var $children$$20_cmd$$11$$ = $JSCompiler_StaticMethods_updateShapes$self$$.$getChildNodes$(), $i$$463$$ = 0;$i$$463$$ < $children$$20_cmd$$11$$.length;$i$$463$$++) {
        (0,D.$JSCompiler_StaticMethods_updateShapes$$)($children$$20_cmd$$11$$[$i$$463$$], D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$DvtSunburstNode$$.prototype.$expandCollapseNode$ = function $$DvtSunburstNode$$$$$expandCollapseNode$$() {
  this.$_disclosed$ = !this.$_disclosed$;
  var $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5164$$ = this.$_view$, $bDisclosed$$inline_5166_xmlString$$inline_9350$$ = this.$_disclosed$, $id$$inline_9348_nodeId$$inline_9351_startIndex$$inline_9352$$ = this.getId();
  $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5164$$.$_navigableIdToFocus$ = $id$$inline_9348_nodeId$$inline_9351_startIndex$$inline_9352$$;
  if($bDisclosed$$inline_5166_xmlString$$inline_9350$$) {
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5164$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstExpand", this.getId()))
  }else {
    var $bDisclosed$$inline_5166_xmlString$$inline_9350$$ = $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5164$$.$LastXml$, $id$$inline_9348_nodeId$$inline_9351_startIndex$$inline_9352$$ = this.getId(), $id$$inline_9348_nodeId$$inline_9351_startIndex$$inline_9352$$ = $bDisclosed$$inline_5166_xmlString$$inline_9350$$.indexOf('\x3cn id\x3d"' + $id$$inline_9348_nodeId$$inline_9351_startIndex$$inline_9352$$), $endIndex$$inline_9353$$ = $bDisclosed$$inline_5166_xmlString$$inline_9350$$.indexOf("\x3e", 
    $id$$inline_9348_nodeId$$inline_9351_startIndex$$inline_9352$$), $nodeString$$inline_9354$$ = $bDisclosed$$inline_5166_xmlString$$inline_9350$$.substring($id$$inline_9348_nodeId$$inline_9351_startIndex$$inline_9352$$, $endIndex$$inline_9353$$), $nodeString$$inline_9354$$ = -1 < $nodeString$$inline_9354$$.indexOf("di\x3d") ? $nodeString$$inline_9354$$.replace('di\x3d"t"', 'di\x3d"f"') : $nodeString$$inline_9354$$ + 'di\x3d"f"';
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5164$$.$render$($bDisclosed$$inline_5166_xmlString$$inline_9350$$.substring(0, $id$$inline_9348_nodeId$$inline_9351_startIndex$$inline_9352$$) + $nodeString$$inline_9354$$ + $bDisclosed$$inline_5166_xmlString$$inline_9350$$.substring($endIndex$$inline_9353$$), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5164$$.$Width$, $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5164$$.$Height$);
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5164$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstCollapse", this.getId()))
  }
};
D.$DvtSunburstNode$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_disclosed$");
D.$JSCompiler_StaticMethods___getRadius$$ = function $$JSCompiler_StaticMethods___getRadius$$$($JSCompiler_StaticMethods___getRadius$self$$) {
  return $JSCompiler_StaticMethods___getRadius$self$$.$_radius$ != D.$JSCompiler_alias_NULL$$ ? (0,window.Number)($JSCompiler_StaticMethods___getRadius$self$$.$_radius$) : $JSCompiler_StaticMethods___getRadius$self$$.$_parent$ ? 1 : $JSCompiler_StaticMethods___getRadius$self$$.$_bArtificialRoot$ ? 0.25 : $JSCompiler_StaticMethods___getRadius$self$$.$_template$ ? 1 : 0.5
};
D.$DvtSunburstLayout$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstLayout$$, D.$DvtObj$$, "DvtSunburstLayout");
D.$DvtSunburstLayout$$.$layout$ = function $$DvtSunburstLayout$$$$layout$$($totalRadius$$, $root$$13$$, $startAngle$$17$$, $angleExtent$$11$$, $sorting$$1$$) {
  var $longestRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($root$$13$$);
  D.$DvtSunburstLayout$$.$_layout$($totalRadius$$ / $longestRadius$$, $root$$13$$, $startAngle$$17$$, $angleExtent$$11$$, $sorting$$1$$, 0)
};
D.$DvtSunburstLayout$$.$_layout$ = function $$DvtSunburstLayout$$$$_layout$$($radiusPerDepth$$1$$, $i$$459_node$$200$$, $childStartAngle_startAngle$$18$$, $angleExtent$$12$$, $sorting$$2$$, $children$$18_innerRadius$$6$$) {
  var $outerRadius$$6$$ = $children$$18_innerRadius$$6$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($i$$459_node$$200$$) * $radiusPerDepth$$1$$;
  $i$$459_node$$200$$.$setLayoutParams$($children$$18_innerRadius$$6$$, $outerRadius$$6$$, $childStartAngle_startAngle$$18$$, $angleExtent$$12$$);
  $children$$18_innerRadius$$6$$ = $i$$459_node$$200$$.$getChildNodes$();
  if($children$$18_innerRadius$$6$$ != D.$JSCompiler_alias_NULL$$ && $i$$459_node$$200$$.$isDisclosed$()) {
    "on" == $sorting$$2$$ && ($children$$18_innerRadius$$6$$ = $children$$18_innerRadius$$6$$.slice(0), $children$$18_innerRadius$$6$$.sort(function($radiusPerDepth$$1$$, $i$$459_node$$200$$) {
      return $i$$459_node$$200$$.$getSize$() - $radiusPerDepth$$1$$.$getSize$()
    }));
    D.$DvtAgent$$.$isRightToLeft$($i$$459_node$$200$$.$_view$.$_context$) && ($children$$18_innerRadius$$6$$ = $children$$18_innerRadius$$6$$.slice(0).reverse());
    var $total$$7$$ = 0;
    for($i$$459_node$$200$$ = 0;$i$$459_node$$200$$ < $children$$18_innerRadius$$6$$.length;$i$$459_node$$200$$++) {
      $total$$7$$ += 0 < $children$$18_innerRadius$$6$$[$i$$459_node$$200$$].$getSize$() ? $children$$18_innerRadius$$6$$[$i$$459_node$$200$$].$getSize$() : 0
    }
    for($i$$459_node$$200$$ = 0;$i$$459_node$$200$$ < $children$$18_innerRadius$$6$$.length;$i$$459_node$$200$$++) {
      var $child$$73$$ = $children$$18_innerRadius$$6$$[$i$$459_node$$200$$];
      if(!(0 >= $child$$73$$.$getSize$())) {
        var $childAngleExtent$$ = $child$$73$$.$getSize$() / $total$$7$$ * $angleExtent$$12$$;
        D.$DvtSunburstLayout$$.$_layout$($radiusPerDepth$$1$$, $child$$73$$, $childStartAngle_startAngle$$18$$, $childAngleExtent$$, $sorting$$2$$, $outerRadius$$6$$);
        $childStartAngle_startAngle$$18$$ += $childAngleExtent$$
      }
    }
  }
};
D.$DvtSunburstLayout$$.$_calcLargestRadius$ = function $$DvtSunburstLayout$$$$_calcLargestRadius$$($node$$201$$) {
  var $maxRadius$$ = 0, $children$$19$$ = $node$$201$$.$getChildNodes$();
  if($children$$19$$ && 0 < $children$$19$$.length) {
    for(var $i$$460$$ = 0;$i$$460$$ < $children$$19$$.length;$i$$460$$++) {
      var $childRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($children$$19$$[$i$$460$$]), $maxRadius$$ = window.Math.max($maxRadius$$, $childRadius$$)
    }
    return $maxRadius$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$201$$)
  }
  return(0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$201$$)
};
D.$DvtSunburstExpandCollapseEvent$$ = function $$DvtSunburstExpandCollapseEvent$$$($type$$183$$, $id$$218$$) {
  this.Init($type$$183$$);
  this.$_id$ = $id$$218$$ ? $id$$218$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstExpandCollapseEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstExpandCollapseEvent");
D.$DvtSunburstExpandCollapseEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtSunburstEventManager$$ = function $$DvtSunburstEventManager$$$($view$$25$$, $context$$503$$, $callback$$111$$, $callbackObj$$82$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$25$$, $context$$503$$, $callback$$111$$, $callbackObj$$82$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtSunburstEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$430_relPos$$47$$) {
  var $JSCompiler_StaticMethods___startRotation$self$$inline_5108_obj$$274$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$430_relPos$$47$$.target);
  $JSCompiler_StaticMethods___startRotation$self$$inline_5108_obj$$274$$ && $JSCompiler_StaticMethods___startRotation$self$$inline_5108_obj$$274$$.getId && "_rotationShape" == $JSCompiler_StaticMethods___startRotation$self$$inline_5108_obj$$274$$.getId() && !this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_TRUE$$, $event$$430_relPos$$47$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$430_relPos$$47$$.pageX, $event$$430_relPos$$47$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_5108_obj$$274$$ = 
  this.$_view$, (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5108_obj$$274$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5108_obj$$274$$, $event$$430_relPos$$47$$.x, $event$$430_relPos$$47$$.y))) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$430_relPos$$47$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$431_relPos$$48$$) {
  if(this.$_bRotating$) {
    $event$$431_relPos$$48$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$431_relPos$$48$$.pageX, $event$$431_relPos$$48$$.pageY);
    var $JSCompiler_StaticMethods___continueRotation$self$$inline_5112$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5112$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5112$$, $event$$431_relPos$$48$$.x, $event$$431_relPos$$48$$.y))
  }else {
    D.$DvtSunburstEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$431_relPos$$48$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$432$$) {
  this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$432$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$433$$) {
  var $eventConsumed$$5$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$20_newAngle$$1$$ = $event$$433$$.keyCode, $node$$199$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this), $sunburst$$ = this.$_view$;
  ("i" == $node$$199$$.$_drilling$ || "ir" == $node$$199$$.$_drilling$) && ((0,D.$DvtKeyboardEvent$isPlus$$)($event$$433$$) && !$node$$199$$.$isDisclosed$() || (0,D.$DvtKeyboardEvent$isMinus$$)($event$$433$$) && $node$$199$$.$isDisclosed$() || $event$$433$$.ctrlKey && 13 == $keyCode$$20_newAngle$$1$$) ? ($node$$199$$.$expandCollapseNode$(), $event$$433$$.preventDefault()) : $sunburst$$ && "on" == $sunburst$$.$_rotation$ && (37 == $keyCode$$20_newAngle$$1$$ || 39 == $keyCode$$20_newAngle$$1$$) && 
  !$event$$433$$.ctrlKey && $event$$433$$.altKey && $event$$433$$.shiftKey ? ($keyCode$$20_newAngle$$1$$ = 37 == $keyCode$$20_newAngle$$1$$ ? -5 * (window.Math.PI / 180) : 5 * (window.Math.PI / 180), (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($sunburst$$, 0), (0,D.$JSCompiler_StaticMethods___rotate$$)($sunburst$$, $keyCode$$20_newAngle$$1$$), (0,D.$JSCompiler_StaticMethods___endRotation$$)($sunburst$$), $event$$433$$.preventDefault()) : $eventConsumed$$5$$ = D.$DvtSunburstEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, 
  $event$$433$$);
  return $eventConsumed$$5$$
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$434$$) {
  var $obj$$275$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$434$$.target);
  $obj$$275$$ && ($obj$$275$$.getId && "_rotationShape" == $obj$$275$$.getId()) && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$434$$, this.$RotateStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$435$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$435$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$436$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$436$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$RotateStartTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateStartTouch$$($event$$437$$, $touch$$45$$) {
  if(1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "rotateKey").length) {
    (0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$45$$.identifier, "rotateKey", D.$JSCompiler_alias_NULL$$, "rotateKey", "rotateKey", this.$RotateMoveTouch$, this.$RotateEndTouch$, this);
    (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$45$$.identifier, D.$JSCompiler_alias_FALSE$$);
    var $pos$$41$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$45$$.pageX, $touch$$45$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_5116$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5116$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5116$$, $pos$$41$$.x, $pos$$41$$.y));
    $event$$437$$.$blockTouchHold$()
  }
};
D.$JSCompiler_prototypeAlias$$.$RotateMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateMoveTouch$$($event$$438$$, $touch$$46$$) {
  var $pos$$42$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$46$$.pageX, $touch$$46$$.pageY), $JSCompiler_StaticMethods___continueRotation$self$$inline_5120$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5120$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5120$$, $pos$$42$$.x, $pos$$42$$.y));
  $event$$438$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$RotateEndTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateEndTouch$$() {
  (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)
};
D.$DvtSunburstBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstBundle$$, D.$DvtBundle$$, "DvtSunburstBundle");
D.$DvtSunburstBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtSunburstBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtSunburstBundle$$$$$GetDefaultStringForKey$$($key$$83$$) {
  return D.$DvtSunburstBundle$$._defaults[$key$$83$$]
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
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay$$4_options$$74$$) {
  var $ret$$79$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay$$4_options$$74$$), $ret$$79$$ = $ret$$79$$ + this.$WriteAttr$("r", $animationOnDisplay$$4_options$$74$$.rotation), $ret$$79$$ = $ret$$79$$ + this.$WriteAttr$("sa", ($animationOnDisplay$$4_options$$74$$.startAngle + 360) % 360);
  $animationOnDisplay$$4_options$$74$$ = $animationOnDisplay$$4_options$$74$$.animationOnDisplay;
  return $ret$$79$$ = "auto" == $animationOnDisplay$$4_options$$74$$ ? $ret$$79$$ + this.$WriteAttr$("adi", "fan") : $ret$$79$$ + this.$WriteAttr$("adi", $animationOnDisplay$$4_options$$74$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$75$$, $nodeData$$15$$) {
  var $ret$$80$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$75$$, $nodeData$$15$$), $ret$$80$$ = $ret$$80$$ + this.$WriteAttr$("ld", $nodeData$$15$$.labelDisplay ? $nodeData$$15$$.labelDisplay : $options$$75$$.nodeDefaults.labelDisplay), $labelHalign$$1_radius$$19$$ = $nodeData$$15$$.labelHalign ? $nodeData$$15$$.labelHalign : $options$$75$$.nodeDefaults.labelHalign;
  "inner" == $labelHalign$$1_radius$$19$$ ? $ret$$80$$ += this.$WriteAttr$("ha", "s") : "outer" == $labelHalign$$1_radius$$19$$ && ($ret$$80$$ += this.$WriteAttr$("ha", "e"));
  $labelHalign$$1_radius$$19$$ = $nodeData$$15$$.radius;
  $labelHalign$$1_radius$$19$$ != D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($labelHalign$$1_radius$$19$$) && ($ret$$80$$ += this.$WriteAttr$("r", $labelHalign$$1_radius$$19$$));
  return $ret$$80$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$76$$) {
  var $ret$$81$$, $bundle$$1$$ = new D.$DvtSunburstBundle$$;
  $ret$$81$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$1$$, "SIZE"));
  $ret$$81$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$1$$, "COLOR"));
  $ret$$81$$ += this.$WriteAttr$("cursorRotate", $options$$76$$._resources.rotateCursor);
  $ret$$81$$ += this.$WriteAttr$("alta", "true");
  return $ret$$81$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($options$$77_selectedColor$$) {
  var $ret$$82$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $options$$77_selectedColor$$), $animationColor$$1_borderColor$$27_hoverColor$$1$$ = $options$$77_selectedColor$$.animationUpdateColor;
  $animationColor$$1_borderColor$$27_hoverColor$$1$$ && ($ret$$82$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor$$1_borderColor$$27_hoverColor$$1$$));
  ($animationColor$$1_borderColor$$27_hoverColor$$1$$ = $options$$77_selectedColor$$.nodeDefaults.borderColor) && ($ret$$82$$ += this.$WriteAttr$("node", "border-color: " + $animationColor$$1_borderColor$$27_hoverColor$$1$$));
  ($animationColor$$1_borderColor$$27_hoverColor$$1$$ = $options$$77_selectedColor$$.nodeDefaults.hoverColor) && ($ret$$82$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor$$1_borderColor$$27_hoverColor$$1$$));
  ($options$$77_selectedColor$$ = $options$$77_selectedColor$$.nodeDefaults.selectedColor) && ($ret$$82$$ += this.$WriteAttr$("node-selected", "border-color: " + $options$$77_selectedColor$$));
  return $ret$$82$$ + "/\x3e\n"
};
});