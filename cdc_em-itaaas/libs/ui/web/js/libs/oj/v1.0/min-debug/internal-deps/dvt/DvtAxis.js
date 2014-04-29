define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAxis$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtAxis", D.$DvtAxis$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxis$$, D.$DvtBaseComponent$$, "DvtAxis");
D.$DvtAxis$$.newInstance = function $$DvtAxis$$$newInstance$($context$$140$$, $callback$$64$$, $callbackObj$$40$$) {
  var $axis$$4$$ = new D.$DvtAxis$$;
  $axis$$4$$.Init($context$$140$$, $callback$$64$$, $callbackObj$$40$$);
  return $axis$$4$$
};
D.$DvtAxis$$.getDefaults = function $$DvtAxis$$$getDefaults$($skin$$5$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtAxisDefaults$$, $skin$$5$$)
};
D.$DvtAxis$$.prototype.Init = function $$DvtAxis$$$$Init$($context$$141$$, $callback$$65$$, $callbackObj$$41$$) {
  D.$DvtAxis$$.$superclass$.Init.call(this, $context$$141$$, $callback$$65$$, $callbackObj$$41$$);
  this.$Defaults$ = new D.$DvtAxisDefaults$$;
  this.$_eventHandler$ = new D.$DvtAxisEventManager$$(this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtAxis$$.prototype.$SetOptions$ = function $$DvtAxis$$$$$SetOptions$$($options$$27$$) {
  $options$$27$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$27$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtAxis$$.prototype.$getPreferredSize$ = function $$DvtAxis$$$$$getPreferredSize$$($dims$$3_options$$28$$, $maxWidth$$6$$, $maxHeight$$6$$) {
  this.$SetOptions$($dims$$3_options$$28$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  this.$render$(D.$JSCompiler_alias_NULL$$, $maxWidth$$6$$, $maxHeight$$6$$);
  $dims$$3_options$$28$$ = this.$getDimensions$();
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  var $extraWidth_position$$1$$ = this.$__getOptions$().position;
  if("top" == $extraWidth_position$$1$$ || "bottom" == $extraWidth_position$$1$$) {
    return $dims$$3_options$$28$$.$h$ <= $maxHeight$$6$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$), new D.$DvtDimension$$($maxWidth$$6$$, window.Math.min($dims$$3_options$$28$$.$h$, $maxHeight$$6$$))
  }
  $extraWidth_position$$1$$ = window.Math.max(1, 0.1 * $dims$$3_options$$28$$.$w$);
  $dims$$3_options$$28$$.$w$ + $extraWidth_position$$1$$ <= $maxWidth$$6$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$);
  return new D.$DvtDimension$$(window.Math.min($dims$$3_options$$28$$.$w$ + $extraWidth_position$$1$$, $maxWidth$$6$$), $maxHeight$$6$$)
};
D.$DvtAxis$$.prototype.$render$ = function $$DvtAxis$$$$$render$$($options$$29$$, $width$$37$$, $height$$37$$, $x$$92$$, $y$$69$$) {
  this.$SetOptions$($options$$29$$);
  this.$Width$ = $width$$37$$;
  this.$Height$ = $height$$37$$;
  this.$removeChildren$();
  $x$$92$$ || ($x$$92$$ = 0);
  $y$$69$$ || ($y$$69$$ = 0);
  D.$DvtAxisRenderer$$.$render$(this, new D.$DvtRectangle$$($x$$92$$, $y$$69$$, $width$$37$$, $height$$37$$))
};
D.$DvtAxis$$.prototype.render = D.$DvtAxis$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$88$$, $source$$4$$) {
  this === $source$$4$$ && this.$__dispatchEvent$($event$$88$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$DvtAxisConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtAxisConstants", D.$DvtAxisConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisConstants$$, D.$DvtObj$$, "DvtAxisConstants");
D.$DvtAxisConstants$$.$TICK_LABEL$ = "tickLabel";
D.$DvtAxisConstants$$.TICK_LABEL = D.$DvtAxisConstants$$.$TICK_LABEL$;
D.$DvtAxisConstants$$.$TITLE$ = "title";
D.$DvtAxisConstants$$.TITLE = D.$DvtAxisConstants$$.$TITLE$;
D.$DvtAbstractAxisValueFormatter$$ = (0,D.$JSCompiler_set$$)("$_bundle$");
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractAxisValueFormatter$$, D.$DvtObj$$, "DvtAbstractAxisValueFormatter");
D.$DvtAbstractAxisValueFormatter$$.prototype.$format$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtAxisDefaults$$ = function $$DvtAxisDefaults$$$() {
  this.Init({skyros:D.$DvtAxisDefaults$VERSION_1$$, alta:D.$DvtAxisDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAxisDefaults");
D.$DvtAxisDefaults$SKIN_ALTA$$ = {axisLine:{lineColor:"#9E9E9E"}, majorTick:{lineColor:"rgba(196,206,215,0.4)"}, minorTick:{lineColor:"rgba(196,206,215,0.2)"}, tickLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")};
D.$DvtAxisDefaults$VERSION_1$$ = {position:D.$JSCompiler_alias_NULL$$, baselineScaling:"zero", axisLine:{lineColor:"#8A8DAC", lineWidth:1, rendered:"on"}, majorTick:{lineColor:"rgba(138,141,172,0.4)", lineWidth:1, rendered:"auto", lineStyle:"solid"}, minorTick:{lineColor:"rgba(138,141,172,0.20)", lineWidth:1, rendered:"off", lineStyle:"solid"}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), rotation:"auto", rendered:"on"}, titleStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #737373;"), 
startGroupOffset:0, endGroupOffset:0, layout:{gapRatio:1, titleGap:4, verticalAxisGap:3, horizontalAxisGap:5}, _useBaselineColor:D.$JSCompiler_alias_FALSE$$, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtAxisEventManager$$ = function $$DvtAxisEventManager$$$($axis$$25$$) {
  this.Init($axis$$25$$.$_context$, $axis$$25$$.$processEvent$, $axis$$25$$);
  this.$_axis$ = $axis$$25$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisEventManager$$, D.$DvtEventManager$$, "DvtAxisEventManager");
D.$DvtAxisEventManager$$.prototype.$FireUIEvent$ = function $$DvtAxisEventManager$$$$$FireUIEvent$$($type$$190$$, $logicalObj$$13$$) {
  $logicalObj$$13$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$13$$.$getParams$() != D.$JSCompiler_alias_NULL$$ && this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$190$$, $logicalObj$$13$$.$getParams$()), this.$_axis$)
};
D.$DvtAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisRenderer$$, D.$DvtObj$$, "DvtAxisRenderer");
D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ = 5;
D.$DvtAxisRenderer$$.$render$ = function $$DvtAxisRenderer$$$$render$$($axis$$19$$, $availSpace$$59$$) {
  var $options$$157$$ = $axis$$19$$.$__getOptions$(), $axisInfo$$2$$ = (0,D.$DvtAxisInfo$newInstance$$)($axis$$19$$.$_context$, $options$$157$$, $availSpace$$59$$);
  $axis$$19$$.$Info$ = $axisInfo$$2$$;
  "off" != $options$$157$$.rendered && (D.$DvtAxisRenderer$$.$_renderTitle$($axis$$19$$, $axisInfo$$2$$, $availSpace$$59$$), D.$DvtAxisRenderer$$.$_renderLabels$($axis$$19$$, $axisInfo$$2$$, $availSpace$$59$$))
};
D.$DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($axis$$20_title$$12$$, $axisInfo$$3_position$$28$$, $availSpace$$60$$) {
  var $gap$$13_options$$158$$ = $axis$$20_title$$12$$.$__getOptions$();
  if($gap$$13_options$$158$$.title && ($axisInfo$$3_position$$28$$ = $gap$$13_options$$158$$.position, !("radial" == $axisInfo$$3_position$$28$$ || "tangential" == $axisInfo$$3_position$$28$$))) {
    if($gap$$13_options$$158$$.isLayout && "bottom" == $axisInfo$$3_position$$28$$ && ($axisInfo$$3_position$$28$$ = "top"), $axis$$20_title$$12$$ = "top" == $axisInfo$$3_position$$28$$ || "bottom" == $axisInfo$$3_position$$28$$ ? D.$DvtAxisRenderer$$.$_createText$($axis$$20_title$$12$$.$__getEventManager$(), $axis$$20_title$$12$$, $gap$$13_options$$158$$.title, $gap$$13_options$$158$$.titleStyle, $availSpace$$60$$.$w$, $availSpace$$60$$.$h$) : D.$DvtAxisRenderer$$.$_createText$($axis$$20_title$$12$$.$__getEventManager$(), 
    $axis$$20_title$$12$$, $gap$$13_options$$158$$.title, $gap$$13_options$$158$$.titleStyle, $availSpace$$60$$.$h$, $availSpace$$60$$.$w$)) {
      var $titleDims$$1$$ = $axis$$20_title$$12$$.$measureDimensions$(), $gap$$13_options$$158$$ = window.Math.ceil($gap$$13_options$$158$$.layout.titleGap * $gap$$13_options$$158$$.layout.gapRatio);
      "top" == $axisInfo$$3_position$$28$$ ? ($axis$$20_title$$12$$.$setX$($availSpace$$60$$.x + $availSpace$$60$$.$w$ / 2 - $titleDims$$1$$.$w$ / 2), $axis$$20_title$$12$$.$setY$($availSpace$$60$$.y), $availSpace$$60$$.y += $titleDims$$1$$.$h$ + $gap$$13_options$$158$$, $availSpace$$60$$.$h$ -= $titleDims$$1$$.$h$ + $gap$$13_options$$158$$) : "bottom" == $axisInfo$$3_position$$28$$ ? ($axis$$20_title$$12$$.$setX$($availSpace$$60$$.x + $availSpace$$60$$.$w$ / 2 - $titleDims$$1$$.$w$ / 2), $axis$$20_title$$12$$.$setY$($availSpace$$60$$.y + 
      $availSpace$$60$$.$h$ - $titleDims$$1$$.$h$), $availSpace$$60$$.$h$ -= $titleDims$$1$$.$h$ + $gap$$13_options$$158$$) : "left" == $axisInfo$$3_position$$28$$ ? ($axis$$20_title$$12$$.$setRotation$(3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($axis$$20_title$$12$$, $availSpace$$60$$.x, $availSpace$$60$$.y + $availSpace$$60$$.$h$ / 2 + $titleDims$$1$$.$w$ / 2), $availSpace$$60$$.x += $titleDims$$1$$.$h$ + $gap$$13_options$$158$$, $availSpace$$60$$.$w$ -= $titleDims$$1$$.$h$ + 
      $gap$$13_options$$158$$) : "right" == $axisInfo$$3_position$$28$$ && ($axis$$20_title$$12$$.$setRotation$(3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($axis$$20_title$$12$$, $availSpace$$60$$.x + $availSpace$$60$$.$w$ - $titleDims$$1$$.$h$, $availSpace$$60$$.y + $availSpace$$60$$.$h$ / 2 + $titleDims$$1$$.$w$ / 2), $availSpace$$60$$.$w$ -= $titleDims$$1$$.$h$ + $gap$$13_options$$158$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($axis$$21$$, $axisInfo$$4$$, $availSpace$$61$$) {
  var $options$$159_position$$29$$ = $axis$$21$$.$__getOptions$();
  "on" == $options$$159_position$$29$$.tickLabel.rendered && ($options$$159_position$$29$$ = $options$$159_position$$29$$.position, "top" == $options$$159_position$$29$$ || "bottom" == $options$$159_position$$29$$ ? D.$DvtAxisRenderer$$.$_renderLabelsHoriz$($axis$$21$$, $axisInfo$$4$$, $availSpace$$61$$) : "tangential" == $options$$159_position$$29$$ ? D.$DvtAxisRenderer$$.$_renderLabelsTangent$($axis$$21$$, $axisInfo$$4$$, $availSpace$$61$$) : D.$DvtAxisRenderer$$.$_renderLabelsVert$($axis$$21$$, 
  $axisInfo$$4$$, $availSpace$$61$$))
};
D.$DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($axis$$22$$, $axisInfo$$5_lv2Labels$$, $availSpace$$62$$) {
  for(var $labels$$14$$ = $axisInfo$$5_lv2Labels$$.$getLabels$($axis$$22$$.$_context$), $isLayout$$1_offset$$27$$ = $axis$$22$$.$__getOptions$().isLayout, $maxLv1Height$$ = 0, $isRTL$$21$$ = D.$DvtAgent$$.$isRightToLeft$($axis$$22$$.$_context$), $i$$587$$ = 0;$i$$587$$ < $labels$$14$$.length;$i$$587$$++) {
    var $label$$66$$ = $labels$$14$$[$i$$587$$];
    if($label$$66$$ != D.$JSCompiler_alias_NULL$$) {
      if($axisInfo$$5_lv2Labels$$.$isLabelRotated$()) {
        !$isLayout$$1_offset$$27$$ && $axis$$22$$.$_labelTruncationNeeded$ && ($label$$66$$ = D.$DvtTextUtils$$.$fitText$($label$$66$$, $availSpace$$62$$.$h$, $availSpace$$62$$.$w$, $axis$$22$$) ? $label$$66$$ : D.$JSCompiler_alias_NULL$$);
        if(!$label$$66$$) {
          continue
        }
        $isRTL$$21$$ ? $label$$66$$.$alignLeft$() : $label$$66$$.$alignRight$();
        $label$$66$$.$setTranslateY$($availSpace$$62$$.y)
      }else {
        $label$$66$$.$alignTop$(), $label$$66$$.$setY$($availSpace$$62$$.y)
      }
      $axis$$22$$.$__getEventManager$().$associate$($label$$66$$, new D.$DvtSimpleObjPeer$$($label$$66$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$66$$.$getTextString$()}));
      $axis$$22$$.$addChild$($label$$66$$);
      $maxLv1Height$$ = window.Math.max($maxLv1Height$$, D.$DvtTextUtils$$.$guessTextDimensions$($label$$66$$).$h$)
    }
  }
  $axisInfo$$5_lv2Labels$$ = $axisInfo$$5_lv2Labels$$.$getLabels$($axis$$22$$.$_context$, 1);
  $isLayout$$1_offset$$27$$ = 0;
  if($axisInfo$$5_lv2Labels$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$587$$ = 0;$i$$587$$ < $axisInfo$$5_lv2Labels$$.length;$i$$587$$++) {
      $label$$66$$ = $axisInfo$$5_lv2Labels$$[$i$$587$$], $label$$66$$ != D.$JSCompiler_alias_NULL$$ && ($axis$$22$$.$__getEventManager$().$associate$($label$$66$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$66$$.$getTextString$()})), $labels$$14$$[$i$$587$$] != D.$JSCompiler_alias_NULL$$ && ($isLayout$$1_offset$$27$$ = $labels$$14$$[$i$$587$$].$measureDimensions$().$w$ / 2), $isRTL$$21$$ ? 
      $label$$66$$.$setX$($label$$66$$.$getX$() + $isLayout$$1_offset$$27$$) : $label$$66$$.$setX$($label$$66$$.$getX$() - $isLayout$$1_offset$$27$$), $label$$66$$.$alignTop$(), $label$$66$$.$setY$($availSpace$$62$$.y + $maxLv1Height$$), $axis$$22$$.$addChild$($label$$66$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($axis$$23$$, $axisInfo$$6$$, $availSpace$$63$$) {
  var $formatLabelVert_options$$160$$ = $axis$$23$$.$__getOptions$(), $isLayout$$2$$ = $formatLabelVert_options$$160$$.isLayout, $position$$30$$ = $formatLabelVert_options$$160$$.position, $isRTL$$22$$ = D.$DvtAgent$$.$isRightToLeft$($axis$$23$$.$_context$), $labelX$$4$$;
  "radial" == $position$$30$$ ? ($labelX$$4$$ = $availSpace$$63$$.x + $availSpace$$63$$.$w$ / 2, $labelX$$4$$ += D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ * ($isRTL$$22$$ ? 1 : -1)) : ($labelX$$4$$ = $availSpace$$63$$.x + $availSpace$$63$$.$w$, $isLayout$$2$$ && "left" == $position$$30$$ && ($labelX$$4$$ = $availSpace$$63$$.x));
  for(var $formatLabelVert_options$$160$$ = function $$formatLabelVert_options$$160$$$($formatLabelVert_options$$160$$) {
    !$isLayout$$2$$ && $axis$$23$$.$_labelTruncationNeeded$ && ($formatLabelVert_options$$160$$ = D.$DvtTextUtils$$.$fitText$($formatLabelVert_options$$160$$, $availSpace$$63$$.$w$, $availSpace$$63$$.$h$, $axis$$23$$) ? $formatLabelVert_options$$160$$ : D.$JSCompiler_alias_NULL$$);
    if($formatLabelVert_options$$160$$) {
      $axis$$23$$.$__getEventManager$().$associate$($formatLabelVert_options$$160$$, new D.$DvtSimpleObjPeer$$($formatLabelVert_options$$160$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$formatLabelVert_options$$160$$.$getTextString$()}));
      $formatLabelVert_options$$160$$.$setX$($labelX$$4$$);
      $formatLabelVert_options$$160$$.$alignRight$();
      if("radial" == $position$$30$$) {
        var $labels$$15_lv2Labels$$1$$ = $formatLabelVert_options$$160$$.$getY$();
        $formatLabelVert_options$$160$$.$setY$($availSpace$$63$$.y + $availSpace$$63$$.$h$ / 2 - $labels$$15_lv2Labels$$1$$);
        $isRTL$$22$$ && $formatLabelVert_options$$160$$.$alignLeft$();
        var $i$$588$$ = $formatLabelVert_options$$160$$.$getDimensions$(), $label$$67$$ = 0.15 * $i$$588$$.$h$, $labels$$15_lv2Labels$$1$$ = $labels$$15_lv2Labels$$1$$ + $i$$588$$.$h$ / 2 > $axisInfo$$6$$.$getEndCoord$() && "circle" == $axis$$23$$.$__getOptions$().polarGridShape ? 1 : 0.3, $i$$588$$ = window.DvtPathUtils.$roundedRectangle$($i$$588$$.x - $label$$67$$, $i$$588$$.y, $i$$588$$.$w$ + 2 * $label$$67$$, $i$$588$$.$h$, 2, 2, 2, 2), $i$$588$$ = new D.$DvtPath$$($axis$$23$$.$_context$, $i$$588$$);
        $i$$588$$.$setSolidFill$("#FFFFFF", $labels$$15_lv2Labels$$1$$);
        $axis$$23$$.$addChild$($i$$588$$)
      }
      $isLayout$$2$$ && "left" == $position$$30$$ && $formatLabelVert_options$$160$$.$alignLeft$();
      $axis$$23$$.$addChild$($formatLabelVert_options$$160$$)
    }
  }, $labels$$15_lv2Labels$$1$$ = $axisInfo$$6$$.$getLabels$($axis$$23$$.$_context$), $i$$588$$ = 0;$i$$588$$ < $labels$$15_lv2Labels$$1$$.length;$i$$588$$++) {
    var $label$$67$$ = $labels$$15_lv2Labels$$1$$[$i$$588$$];
    $label$$67$$ != D.$JSCompiler_alias_NULL$$ && $formatLabelVert_options$$160$$($label$$67$$)
  }
  $labels$$15_lv2Labels$$1$$ = $axisInfo$$6$$.$getLabels$($axis$$23$$.$_context$, 1);
  if($labels$$15_lv2Labels$$1$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$588$$ = 0;$i$$588$$ < $labels$$15_lv2Labels$$1$$.length;$i$$588$$++) {
      $label$$67$$ = $labels$$15_lv2Labels$$1$$[$i$$588$$], $label$$67$$ != D.$JSCompiler_alias_NULL$$ && $formatLabelVert_options$$160$$($label$$67$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($axis$$24$$, $axisInfo$$7_labels$$16$$, $availSpace$$64$$) {
  $axisInfo$$7_labels$$16$$ = $axisInfo$$7_labels$$16$$.$getLabels$($axis$$24$$.$_context$);
  for(var $i$$589$$ = 0;$i$$589$$ < $axisInfo$$7_labels$$16$$.length;$i$$589$$++) {
    var $label$$69$$ = $axisInfo$$7_labels$$16$$[$i$$589$$];
    if($label$$69$$ != D.$JSCompiler_alias_NULL$$) {
      var $textBefore$$ = $label$$69$$.$getTextString$();
      $axis$$24$$.$__getEventManager$().$associate$($label$$69$$, new D.$DvtSimpleObjPeer$$($label$$69$$.$isTruncated$() ? $textBefore$$ : D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$textBefore$$}));
      $label$$69$$.$setTranslateX$($availSpace$$64$$.x + $availSpace$$64$$.$w$ / 2);
      $label$$69$$.$setTranslateY$($availSpace$$64$$.y + $availSpace$$64$$.$h$ / 2);
      $axis$$24$$.$addChild$($label$$69$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($eventManager$$39$$, $container$$110$$, $text$$91_textString$$11$$, $cssStyle$$37$$, $width$$97$$, $height$$89$$) {
  var $params$$31$$ = {type:D.$DvtAxisConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$};
  $text$$91_textString$$11$$ = new D.$DvtOutputText$$($container$$110$$.$_context$, $text$$91_textString$$11$$, 0, 0);
  $text$$91_textString$$11$$.$setCSSStyle$($cssStyle$$37$$);
  return D.$DvtTextUtils$$.$fitText$($text$$91_textString$$11$$, $width$$97$$, $height$$89$$, $container$$110$$) ? ($eventManager$$39$$.$associate$($text$$91_textString$$11$$, new D.$DvtSimpleObjPeer$$($text$$91_textString$$11$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$31$$)), $text$$91_textString$$11$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisInfo$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAxisInfo$$, D.$DvtObj$$, "DvtAxisInfo");
D.$DvtAxisInfo$newInstance$$ = function $$DvtAxisInfo$newInstance$$$($context$$581$$, $options$$162$$, $availSpace$$65$$) {
  return $options$$162$$.timeAxisType && "disabled" != $options$$162$$.timeAxisType ? new D.$DvtTimeAxisInfo$$($context$$581$$, $options$$162$$, $availSpace$$65$$) : (0,window.isNaN)($options$$162$$.dataMin) && (0,window.isNaN)($options$$162$$.dataMax) ? new D.$DvtGroupAxisInfo$$($context$$581$$, $options$$162$$, $availSpace$$65$$) : new D.$DvtDataAxisInfo$$($context$$581$$, $options$$162$$, $availSpace$$65$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$582$$, $options$$163$$, $availSpace$$66$$) {
  this.$_context$ = $context$$582$$;
  this.$Position$ = $options$$163$$.position;
  this.$_radius$ = $options$$163$$._radius;
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$66$$.x, this.$EndCoord$ = $availSpace$$66$$.x + $availSpace$$66$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$66$$.y, this.$EndCoord$ = $availSpace$$66$$.y + $availSpace$$66$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && (D.$DvtAgent$$.$isRightToLeft$($context$$582$$) ? 
  (this.$StartCoord$ = 2 * window.Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * window.Math.PI));
  this.$MinViewportExtent$ = this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = D.$JSCompiler_alias_NULL$$;
  this.$EndOverflow$ = this.$StartOverflow$ = 0;
  $options$$163$$.leftBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$163$$.leftBuffer = window.Infinity);
  $options$$163$$.rightBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$163$$.rightBuffer = window.Infinity);
  this.$Options$ = $options$$163$$
};
D.$JSCompiler_prototypeAlias$$.$getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$getLabels$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$isLabelRotated$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$CreateLabel$ = function $$JSCompiler_prototypeAlias$$$$CreateLabel$$($context$$587_text$$92$$, $label$$70$$, $coord$$15$$) {
  if("tangential" == this.$Position$) {
    var $vTol$$ = 16 / 180 * window.Math.PI, $hTol$$ = 1 / 180 * window.Math.PI, $dist$$1$$ = this.$_radius$ + 5;
    if($coord$$15$$ < $hTol$$ || $coord$$15$$ > 2 * window.Math.PI - $hTol$$) {
      $dist$$1$$ += 5
    }
    $context$$587_text$$92$$ = new D.$DvtOutputText$$($context$$587_text$$92$$, $label$$70$$, $dist$$1$$ * window.Math.sin($coord$$15$$), -$dist$$1$$ * window.Math.cos($coord$$15$$));
    $coord$$15$$ < $hTol$$ || window.Math.abs($coord$$15$$ - window.Math.PI) < $hTol$$ || $coord$$15$$ > 2 * window.Math.PI - $hTol$$ ? $context$$587_text$$92$$.$alignCenter$() : $coord$$15$$ < window.Math.PI ? $context$$587_text$$92$$.$alignLeft$() : $context$$587_text$$92$$.$alignRight$();
    window.Math.abs($coord$$15$$ - window.Math.PI / 2) < $vTol$$ || window.Math.abs($coord$$15$$ - 3 * window.Math.PI / 2) < $vTol$$ ? $context$$587_text$$92$$.$alignMiddle$() : $coord$$15$$ < window.Math.PI / 2 || $coord$$15$$ > 3 * window.Math.PI / 2 ? $context$$587_text$$92$$.$alignBottom$() : $context$$587_text$$92$$.$alignTop$()
  }else {
    $context$$587_text$$92$$ = new D.$DvtOutputText$$($context$$587_text$$92$$, $label$$70$$, $coord$$15$$, $coord$$15$$), $context$$587_text$$92$$.$alignMiddle$(), $context$$587_text$$92$$.$alignCenter$()
  }
  $context$$587_text$$92$$.$setCSSStyle$(this.$Options$.tickLabel.style);
  return $context$$587_text$$92$$
};
D.$JSCompiler_StaticMethods_CreateGridLine$$ = function $$JSCompiler_StaticMethods_CreateGridLine$$$($JSCompiler_StaticMethods_CreateGridLine$self$$, $context$$588_line$$10$$, $stroke$$73$$, $coord$$16_points$$62$$) {
  var $usePixelHinting$$ = !D.$DvtAgent$$.$isTouchDevice$() || 1 < D.$DvtAgent$$.$getDevicePixelRatio$();
  "radial" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ("polygon" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$.polarGridShape ? ($coord$$16_points$$62$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$(0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$._numGroups, $coord$$16_points$$62$$), $context$$588_line$$10$$ = new D.$DvtPolygon$$($context$$588_line$$10$$, $coord$$16_points$$62$$)) : $context$$588_line$$10$$ = new D.$DvtCircle$$($context$$588_line$$10$$, 
  0, 0, $coord$$16_points$$62$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$588_line$$10$$)) : "tangential" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ($context$$588_line$$10$$ = new D.$DvtLine$$($context$$588_line$$10$$, 0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.sin($coord$$16_points$$62$$), -$JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.cos($coord$$16_points$$62$$)), 0.01 > $coord$$16_points$$62$$ % 
  window.Math.PI / 2 && $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$588_line$$10$$)) : ($context$$588_line$$10$$ = new D.$DvtLine$$($context$$588_line$$10$$, $coord$$16_points$$62$$, $coord$$16_points$$62$$, $coord$$16_points$$62$$, $coord$$16_points$$62$$), $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$588_line$$10$$));
  $context$$588_line$$10$$.$setStroke$($stroke$$73$$);
  $context$$588_line$$10$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$588_line$$10$$
};
D.$JSCompiler_StaticMethods_IsOverlapping$$ = function $$JSCompiler_StaticMethods_IsOverlapping$$$($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$, $labelDims$$6$$, $skippedLabels$$) {
  if(!$labelDims$$6$$ || 0 >= $labelDims$$6$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $fontSize$$11_isVert$$ = (0,window.parseInt)($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$.$Options$.tickLabel.style.$getStyle$("font-size")), $gap$$14_gapHoriz$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$ instanceof D.$DvtDataAxisInfo$$ ? 0.55 * $fontSize$$11_isVert$$ : 0.3 * $fontSize$$11_isVert$$, $gapVert_pointB1$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$ instanceof D.$DvtDataAxisInfo$$ ? 0.35 * $fontSize$$11_isVert$$ : 0.1 * $fontSize$$11_isVert$$, 
  $gap$$14_gapHoriz$$ = ($fontSize$$11_isVert$$ = "left" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$.$Position$ || "right" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$.$Position$ || "radial" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$.$Position$) || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$.$isLabelRotated$() ? $gapVert_pointB1$$ : $gap$$14_gapHoriz$$;
  $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$.$_context$);
  for(var $pointA1$$, $pointA2$$, $pointB2$$, $j$$70$$ = 0;$j$$70$$ < $labelDims$$6$$.length;$j$$70$$ += $skippedLabels$$ + 1) {
    if($labelDims$$6$$[$j$$70$$] != D.$JSCompiler_alias_NULL$$) {
      if($pointA1$$ == D.$JSCompiler_alias_NULL$$ || $pointA2$$ == D.$JSCompiler_alias_NULL$$) {
        $fontSize$$11_isVert$$ ? ($pointA1$$ = $labelDims$$6$$[$j$$70$$].y, $pointA2$$ = $labelDims$$6$$[$j$$70$$].y + $labelDims$$6$$[$j$$70$$].$h$) : ($pointA1$$ = $labelDims$$6$$[$j$$70$$].x, $pointA2$$ = $labelDims$$6$$[$j$$70$$].x + $labelDims$$6$$[$j$$70$$].$w$)
      }else {
        if($fontSize$$11_isVert$$) {
          if($gapVert_pointB1$$ = $labelDims$$6$$[$j$$70$$].y, $pointB2$$ = $labelDims$$6$$[$j$$70$$].y + $labelDims$$6$$[$j$$70$$].$h$, $gapVert_pointB1$$ >= $pointA1$$ && $gapVert_pointB1$$ - $gap$$14_gapHoriz$$ < $pointA2$$ || $gapVert_pointB1$$ < $pointA1$$ && $pointB2$$ + $gap$$14_gapHoriz$$ > $pointA1$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }else {
          if($gapVert_pointB1$$ = $labelDims$$6$$[$j$$70$$].x, $pointB2$$ = $labelDims$$6$$[$j$$70$$].x + $labelDims$$6$$[$j$$70$$].$w$, !$JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$ && $gapVert_pointB1$$ - $gap$$14_gapHoriz$$ < $pointA2$$ || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$23$$ && $pointB2$$ + $gap$$14_gapHoriz$$ > $pointA1$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }
        $pointA1$$ = $gapVert_pointB1$$;
        $pointA2$$ = $pointB2$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_SkipLabels$$ = function $$JSCompiler_StaticMethods_SkipLabels$$$($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $labels$$17$$, $j$$71_labelDims$$7$$) {
  for(var $skippedLabels$$1$$ = 0, $bOverlaps$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$71_labelDims$$7$$, $skippedLabels$$1$$);$bOverlaps$$;) {
    $skippedLabels$$1$$++, $bOverlaps$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$71_labelDims$$7$$, $skippedLabels$$1$$)
  }
  if(0 < $skippedLabels$$1$$) {
    $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$ = [];
    for($j$$71_labelDims$$7$$ = 0;$j$$71_labelDims$$7$$ < $labels$$17$$.length;$j$$71_labelDims$$7$$ += $skippedLabels$$1$$ + 1) {
      $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$.push($labels$$17$$[$j$$71_labelDims$$7$$])
    }
    return $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$
  }
  return $labels$$17$$
};
D.$JSCompiler_StaticMethods_GetLabelDims$$ = function $$JSCompiler_StaticMethods_GetLabelDims$$$($labels$$18$$, $container$$111$$) {
  for(var $labelDims$$8$$ = [], $i$$590$$ = 0;$i$$590$$ < $labels$$18$$.length;$i$$590$$++) {
    var $dims$$58_text$$93$$ = $labels$$18$$[$i$$590$$];
    $dims$$58_text$$93$$ == D.$JSCompiler_alias_NULL$$ ? $labelDims$$8$$.push(D.$JSCompiler_alias_NULL$$) : ($dims$$58_text$$93$$ = $dims$$58_text$$93$$.$measureDimensions$($container$$111$$), $labelDims$$8$$.push($dims$$58_text$$93$$))
  }
  return $labelDims$$8$$
};
D.$JSCompiler_StaticMethods_GuessLabelDims$$ = function $$JSCompiler_StaticMethods_GuessLabelDims$$$($JSCompiler_StaticMethods_GuessLabelDims$self$$, $labels$$19$$, $container$$112$$, $fudgeFactor$$) {
  var $labelDims$$9$$ = [];
  "undefined" == typeof $fudgeFactor$$ && ($fudgeFactor$$ = 1);
  for(var $i$$591$$ = 0;$i$$591$$ < $labels$$19$$.length;$i$$591$$++) {
    var $dims$$59_text$$94$$ = $labels$$19$$[$i$$591$$];
    if($dims$$59_text$$94$$ == D.$JSCompiler_alias_NULL$$) {
      $labelDims$$9$$.push(D.$JSCompiler_alias_NULL$$)
    }else {
      $container$$112$$.$addChild$($dims$$59_text$$94$$);
      var $estH_estimatedSize$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$59_text$$94$$), $estW$$ = $estH_estimatedSize$$.$w$ * $fudgeFactor$$, $estH_estimatedSize$$ = $estH_estimatedSize$$.$h$;
      $container$$112$$.removeChild($dims$$59_text$$94$$);
      $dims$$59_text$$94$$ = $JSCompiler_StaticMethods_GuessLabelDims$self$$.$isLabelRotated$() ? new D.$DvtRectangle$$($dims$$59_text$$94$$.$getTranslateX$() - $estH_estimatedSize$$ / 2, $dims$$59_text$$94$$.$getTranslateY$() - $estW$$ / 2, $estH_estimatedSize$$, $estW$$) : new D.$DvtRectangle$$($dims$$59_text$$94$$.$getX$() - $estW$$ / 2, $dims$$59_text$$94$$.$getY$() - $estH_estimatedSize$$ / 2, $estW$$, $estH_estimatedSize$$);
      $labelDims$$9$$.push($dims$$59_text$$94$$)
    }
  }
  return $labelDims$$9$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getGlobalMin$ = (0,D.$JSCompiler_get$$)("$GlobalMin$");
D.$JSCompiler_prototypeAlias$$.$getGlobalMax$ = (0,D.$JSCompiler_get$$)("$GlobalMax$");
D.$JSCompiler_prototypeAlias$$.$getViewportMin$ = (0,D.$JSCompiler_get$$)("$MinValue$");
D.$JSCompiler_prototypeAlias$$.$getViewportMax$ = (0,D.$JSCompiler_get$$)("$MaxValue$");
D.$JSCompiler_prototypeAlias$$.$getDataMin$ = (0,D.$JSCompiler_get$$)("$DataMin$");
D.$JSCompiler_prototypeAlias$$.$getDataMax$ = (0,D.$JSCompiler_get$$)("$DataMax$");
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$getEndCoord$ = (0,D.$JSCompiler_get$$)("$EndCoord$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = (0,D.$JSCompiler_get$$)("$StartOverflow$");
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = (0,D.$JSCompiler_get$$)("$EndOverflow$");
D.$DvtDataAxisInfo$$ = function $$DvtDataAxisInfo$$$($context$$575$$, $options$$155$$, $availSpace$$57$$) {
  this.Init($context$$575$$, $options$$155$$, $availSpace$$57$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataAxisInfo$$, D.$DvtAxisInfo$$, "DvtDataAxisInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$576_zeroBaseline$$inline_5802$$, $continuousExtent$$inline_5803_options$$156$$, $availSpace$$58_scaleUnit$$inline_5804$$) {
  D.$DvtDataAxisInfo$$.$superclass$.Init.call(this, $context$$576_zeroBaseline$$inline_5802$$, $continuousExtent$$inline_5803_options$$156$$, $availSpace$$58_scaleUnit$$inline_5804$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? ("on" == $continuousExtent$$inline_5803_options$$156$$.tickLabel.rendered && (this.$StartOverflow$ = window.Math.max(10 - $continuousExtent$$inline_5803_options$$156$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $continuousExtent$$inline_5803_options$$156$$.rightBuffer, 0)), D.$DvtAgent$$.$isRightToLeft$($context$$576_zeroBaseline$$inline_5802$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = 
  this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
  this.$GlobalMin$ = $continuousExtent$$inline_5803_options$$156$$.min;
  this.$GlobalMax$ = $continuousExtent$$inline_5803_options$$156$$.max;
  this.$MinValue$ = $continuousExtent$$inline_5803_options$$156$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $continuousExtent$$inline_5803_options$$156$$.viewportMin;
  this.$MaxValue$ = $continuousExtent$$inline_5803_options$$156$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $continuousExtent$$inline_5803_options$$156$$.viewportMax;
  this.$_majorIncrement$ = $continuousExtent$$inline_5803_options$$156$$.step;
  this.$_minorIncrement$ = $continuousExtent$$inline_5803_options$$156$$.minorStep;
  this.$_minMajorIncrement$ = $continuousExtent$$inline_5803_options$$156$$.minStep;
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $continuousExtent$$inline_5803_options$$156$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $continuousExtent$$inline_5803_options$$156$$.tickLabel.converter);
  this.$DataMin$ = $continuousExtent$$inline_5803_options$$156$$.dataMin;
  this.$DataMax$ = $continuousExtent$$inline_5803_options$$156$$.dataMax;
  $context$$576_zeroBaseline$$inline_5802$$ = "zero" == this.$Options$.baselineScaling;
  $continuousExtent$$inline_5803_options$$156$$ = "on" == this.$Options$._continuousExtent;
  $context$$576_zeroBaseline$$inline_5802$$ && (this.$DataMin$ = window.Math.min(0, this.$DataMin$), this.$DataMax$ = window.Math.max(0, this.$DataMax$));
  $availSpace$$58_scaleUnit$$inline_5804$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$GlobalMin$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : this.$DataMin$, this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : this.$DataMax$);
  this.$DataMin$ == this.$DataMax$ && (this.$DataMin$ -= 3 * $availSpace$$58_scaleUnit$$inline_5804$$, this.$DataMax$ += 2 * $availSpace$$58_scaleUnit$$inline_5804$$);
  if(this.$GlobalMin$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$576_zeroBaseline$$inline_5802$$ && 0 <= this.$DataMin$) {
      this.$GlobalMin$ = 0
    }else {
      if($continuousExtent$$inline_5803_options$$156$$) {
        this.$GlobalMin$ = this.$DataMin$ - 0.1 * (this.$DataMax$ - this.$DataMin$), 0 <= this.$DataMin$ && (this.$GlobalMin$ = window.Math.max(this.$GlobalMin$, 0))
      }else {
        if(!$context$$576_zeroBaseline$$inline_5802$$ && this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$) {
          for(this.$GlobalMin$ = this.$GlobalMax$;this.$GlobalMin$ > this.$DataMin$;) {
            this.$GlobalMin$ -= $availSpace$$58_scaleUnit$$inline_5804$$
          }
        }else {
          this.$GlobalMin$ = window.Math.floor(this.$DataMin$ / $availSpace$$58_scaleUnit$$inline_5804$$) * $availSpace$$58_scaleUnit$$inline_5804$$
        }
      }
    }
  }
  if(this.$GlobalMax$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$576_zeroBaseline$$inline_5802$$ && 0 >= this.$DataMax$) {
      this.$GlobalMax$ = 0
    }else {
      if($continuousExtent$$inline_5803_options$$156$$) {
        this.$GlobalMax$ = this.$DataMax$ + 0.1 * (this.$DataMax$ - this.$DataMin$), 0 >= this.$DataMax$ && (this.$GlobalMax$ = window.Math.min(this.$GlobalMax$, 0))
      }else {
        if($context$$576_zeroBaseline$$inline_5802$$) {
          this.$GlobalMax$ = (window.Math.floor(this.$DataMax$ / $availSpace$$58_scaleUnit$$inline_5804$$) + 1) * $availSpace$$58_scaleUnit$$inline_5804$$
        }else {
          for(this.$GlobalMax$ = this.$GlobalMin$;this.$GlobalMax$ <= this.$DataMax$;) {
            this.$GlobalMax$ += $availSpace$$58_scaleUnit$$inline_5804$$
          }
        }
      }
    }
  }
  this.$GlobalMax$ == this.$GlobalMin$ && (this.$GlobalMax$ = 100, this.$GlobalMin$ = 0, $availSpace$$58_scaleUnit$$inline_5804$$ = (this.$GlobalMax$ - this.$GlobalMin$) / 10);
  this.$MinValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
  this.$MaxValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
  if(this.$MinValue$ != this.$GlobalMin$ || this.$MaxValue$ != this.$GlobalMax$) {
    $availSpace$$58_scaleUnit$$inline_5804$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$MinValue$, this.$MaxValue$)
  }
  this.$_majorIncrement$ = this.$_majorIncrement$ ? this.$_majorIncrement$ : $availSpace$$58_scaleUnit$$inline_5804$$;
  this.$_minMajorIncrement$ != D.$JSCompiler_alias_NULL$$ && this.$_majorIncrement$ < this.$_minMajorIncrement$ && (this.$_majorIncrement$ = this.$_minMajorIncrement$);
  this.$_majorTickCount$ = (this.$MaxValue$ - this.$getMinLabel$()) / this.$_majorIncrement$;
  this.$_minorIncrement$ != D.$JSCompiler_alias_NULL$$ && 2 <= this.$_majorIncrement$ / this.$_minorIncrement$ ? this.$_minorTickCount$ = this.$_majorIncrement$ / this.$_minorIncrement$ : (this.$_minorTickCount$ = 2, this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$)
};
D.$JSCompiler_prototypeAlias$$.$getMinLabel$ = function $$JSCompiler_prototypeAlias$$$$getMinLabel$$() {
  return"zero" == this.$Options$.baselineScaling || "on" == this.$Options$._continuousExtent && this.$Options$.min == D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(this.$MinValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : window.Math.ceil((this.$MinValue$ - this.$GlobalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$GlobalMin$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$577$$, $levelIdx$$1$$) {
  if($levelIdx$$1$$ && 0 < $levelIdx$$1$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $labels$$13$$ = [], $container$$109_labelDims$$5$$ = [], $container$$109_labelDims$$5$$ = $context$$577$$.$_stage$, $isTangential$$ = "tangential" == this.$Position$;
  this.$Options$.tickLabel && this.$Options$.tickLabel.scaling && (this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$(this.$MinValue$, this.$MaxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on"));
  for(var $i$$584$$ = 0;$i$$584$$ <= this.$_majorTickCount$;$i$$584$$++) {
    var $coord$$6_value$$104$$ = $i$$584$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if(!($isTangential$$ && $coord$$6_value$$104$$ == this.$MaxValue$)) {
      var $label$$65_text$$90$$ = this.$_formatValue$($coord$$6_value$$104$$), $coord$$6_value$$104$$ = this.$getUnboundedCoordAt$($coord$$6_value$$104$$), $label$$65_text$$90$$ = this.$CreateLabel$($context$$577$$, $label$$65_text$$90$$, $coord$$6_value$$104$$);
      $labels$$13$$.push($label$$65_text$$90$$)
    }
  }
  $isTangential$$ || ($container$$109_labelDims$$5$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$13$$, $container$$109_labelDims$$5$$), $labels$$13$$ = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$13$$, $container$$109_labelDims$$5$$));
  return $labels$$13$$
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$578$$) {
  var $axisLineOptions$$1_axisLineStroke$$1$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$1_axisLineStroke$$1$$.rendered ? ($axisLineOptions$$1_axisLineStroke$$1$$ = new D.$DvtSolidStroke$$($axisLineOptions$$1_axisLineStroke$$1$$.lineColor, 1, $axisLineOptions$$1_axisLineStroke$$1$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$578$$, $axisLineOptions$$1_axisLineStroke$$1$$, this.$_maxCoord$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$579$$) {
  var $gridlines$$1$$ = [], $coord$$7_value$$105$$, $line$$8_stroke$$72$$, $baselineStroke_majorTickOptions$$1$$ = this.$Options$.majorTick;
  if("off" == $baselineStroke_majorTickOptions$$1$$.rendered) {
    return $gridlines$$1$$
  }
  var $majorTickStroke$$1$$ = new D.$DvtSolidStroke$$($baselineStroke_majorTickOptions$$1$$.lineColor, 1, $baselineStroke_majorTickOptions$$1$$.lineWidth);
  $baselineStroke_majorTickOptions$$1$$.lineStyle && $majorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($baselineStroke_majorTickOptions$$1$$.lineStyle));
  $baselineStroke_majorTickOptions$$1$$ = $majorTickStroke$$1$$.clone();
  if(this.$Options$._useBaselineColor) {
    var $baselineColor_i$$585$$ = D.$DvtColorUtils$$.$setAlpha$(this.$Options$.axisLine.lineColor, 0.75);
    $baselineStroke_majorTickOptions$$1$$.$setColor$($baselineColor_i$$585$$)
  }
  for($baselineColor_i$$585$$ = 0;$baselineColor_i$$585$$ <= this.$_majorTickCount$;$baselineColor_i$$585$$++) {
    $coord$$7_value$$105$$ = $baselineColor_i$$585$$ * this.$_majorIncrement$ + this.$getMinLabel$(), "tangential" == this.$Position$ && $coord$$7_value$$105$$ == this.$MaxValue$ || ($line$$8_stroke$$72$$ = 0 == $coord$$7_value$$105$$ ? $baselineStroke_majorTickOptions$$1$$ : $majorTickStroke$$1$$, $coord$$7_value$$105$$ = this.$getUnboundedCoordAt$($coord$$7_value$$105$$), $line$$8_stroke$$72$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$579$$, $line$$8_stroke$$72$$, $coord$$7_value$$105$$), 
    $gridlines$$1$$.push($line$$8_stroke$$72$$))
  }
  return $gridlines$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$580$$) {
  var $gridlines$$2$$ = [], $coord$$8_line$$9_minorValue$$, $i$$586_minorTickOptions$$ = this.$Options$.minorTick;
  if("on" != $i$$586_minorTickOptions$$.rendered) {
    return $gridlines$$2$$
  }
  var $minorTickStroke$$ = new D.$DvtSolidStroke$$($i$$586_minorTickOptions$$.lineColor, 1, $i$$586_minorTickOptions$$.lineWidth);
  $i$$586_minorTickOptions$$.lineStyle && $minorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$586_minorTickOptions$$.lineStyle));
  for($i$$586_minorTickOptions$$ = -1;$i$$586_minorTickOptions$$ <= this.$_majorTickCount$;$i$$586_minorTickOptions$$++) {
    for(var $value$$106$$ = $i$$586_minorTickOptions$$ * this.$_majorIncrement$ + this.$getMinLabel$(), $j$$69$$ = 1;$j$$69$$ < this.$_minorTickCount$;$j$$69$$++) {
      $coord$$8_line$$9_minorValue$$ = $value$$106$$ + $j$$69$$ * this.$_minorIncrement$;
      if($coord$$8_line$$9_minorValue$$ > this.$MaxValue$) {
        break
      }
      $coord$$8_line$$9_minorValue$$ < this.$MinValue$ || ($coord$$8_line$$9_minorValue$$ = this.$getUnboundedCoordAt$($coord$$8_line$$9_minorValue$$), $coord$$8_line$$9_minorValue$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$580$$, $minorTickStroke$$, $coord$$8_line$$9_minorValue$$), $gridlines$$2$$.push($coord$$8_line$$9_minorValue$$))
    }
  }
  return $gridlines$$2$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$107$$) {
  return $value$$107$$ < this.$MinValue$ || $value$$107$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$107$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$10$$) {
  var $minCoord$$4$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$4$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$10$$ < $minCoord$$4$$ ? $coord$$10$$ = $minCoord$$4$$ : $coord$$10$$ > $maxCoord$$4$$ && ($coord$$10$$ = $maxCoord$$4$$);
  return this.$getUnboundedValueAt$($coord$$10$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$108$$) {
  $value$$108$$ < this.$MinValue$ ? $value$$108$$ = this.$MinValue$ : $value$$108$$ > this.$MaxValue$ && ($value$$108$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$108$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$11$$) {
  return this.$MinValue$ + ($coord$$11$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$109$$) {
  return this.$_minCoord$ + ($value$$109$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  var $baseline$$9$$ = 0;
  0 > this.$MaxValue$ ? $baseline$$9$$ = this.$MaxValue$ : 0 < this.$MinValue$ && ($baseline$$9$$ = this.$MinValue$);
  return this.$getCoordAt$($baseline$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$_formatValue$ = function $$JSCompiler_prototypeAlias$$$$_formatValue$$($value$$110$$) {
  if(this.$_converter$ && (this.$_converter$.getAsString || this.$_converter$.format)) {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$110$$, this.$_converter$)
    }
    if(this.$_converter$.getAsString) {
      return this.$_converter$.getAsString($value$$110$$)
    }
    if(this.$_converter$.format) {
      return this.$_converter$.format($value$$110$$)
    }
  }else {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$110$$)
    }
    var $decimals_t$$24$$ = window.Math.log(this.$_majorIncrement$) / window.Math.log(10), $decimals_t$$24$$ = window.Math.max(window.Math.ceil(-$decimals_t$$24$$), 0);
    return $value$$110$$.toFixed($decimals_t$$24$$)
  }
};
D.$JSCompiler_StaticMethods__calcAxisScale$$ = function $$JSCompiler_StaticMethods__calcAxisScale$$$($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$, $min$$9_t$$25_testVal$$, $max$$9$$) {
  if($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$) {
    return $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$
  }
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = $max$$9$$ - $min$$9_t$$25_testVal$$;
  if(0 == $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) {
    return 0 == $min$$9_t$$25_testVal$$ ? 10 : window.Math.pow(10, window.Math.floor(window.Math.log($min$$9_t$$25_testVal$$) / window.Math.LN10) - 1)
  }
  $min$$9_t$$25_testVal$$ = window.Math.log($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) / window.Math.log(10);
  $min$$9_t$$25_testVal$$ = window.Math.pow(10, window.Math.ceil($min$$9_t$$25_testVal$$) - 2);
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = window.Math.round($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ / $min$$9_t$$25_testVal$$);
  return(10 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 14 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 2 : 15 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 19 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 3 : 20 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 24 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 4 : 25 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 
  45 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 5 : 46 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 80 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 10 : 20) * $min$$9_t$$25_testVal$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_get$$)("$_majorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$14$$) {
  this.$_majorTickCount$ = $count$$14$$;
  this.$_majorIncrement$ = (this.$MaxValue$ - this.$MinValue$) / this.$_majorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_get$$)("$_minorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$15$$) {
  this.$_minorTickCount$ = $count$$15$$;
  this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = (0,D.$JSCompiler_get$$)("$_majorIncrement$");
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = (0,D.$JSCompiler_get$$)("$_minorIncrement$");
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return(this.$GlobalMax$ - this.$GlobalMin$) / 64
};
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? this.$StartOverflow$ : this.$EndOverflow$
};
D.$DvtGroupAxisInfo$$ = function $$DvtGroupAxisInfo$$$($context$$570$$, $options$$153$$, $availSpace$$55$$) {
  this.Init($context$$570$$, $options$$153$$, $availSpace$$55$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGroupAxisInfo$$, D.$DvtAxisInfo$$, "DvtGroupAxisInfo");
D.$DvtGroupAxisInfo$$.prototype.Init = function $$DvtGroupAxisInfo$$$$Init$($context$$571_isRTL$$17$$, $options$$154$$, $availSpace$$56_endOffset$$1_temp$$1$$) {
  D.$DvtGroupAxisInfo$$.$superclass$.Init.call(this, $context$$571_isRTL$$17$$, $options$$154$$, $availSpace$$56_endOffset$$1_temp$$1$$);
  $context$$571_isRTL$$17$$ = D.$DvtAgent$$.$isRightToLeft$($context$$571_isRTL$$17$$);
  if(("top" == this.$Position$ || "bottom" == this.$Position$) && $context$$571_isRTL$$17$$) {
    $availSpace$$56_endOffset$$1_temp$$1$$ = this.$StartCoord$, this.$StartCoord$ = this.$EndCoord$, this.$EndCoord$ = $availSpace$$56_endOffset$$1_temp$$1$$
  }
  this.$_groups$ = $options$$154$$.groups;
  $availSpace$$56_endOffset$$1_temp$$1$$ = 0 < $options$$154$$.endGroupOffset ? (0,window.Number)($options$$154$$.endGroupOffset) : 0;
  var $startOffset$$ = 0 < $options$$154$$.startGroupOffset ? (0,window.Number)($options$$154$$.startGroupOffset) : 0;
  this.$DataMin$ = 0;
  this.$DataMax$ = this.$_groups$.length - 1;
  this.$GlobalMin$ = $options$$154$$.min == D.$JSCompiler_alias_NULL$$ ? this.$DataMin$ - $startOffset$$ : $options$$154$$.min;
  this.$GlobalMax$ = $options$$154$$.max == D.$JSCompiler_alias_NULL$$ ? this.$DataMax$ + $availSpace$$56_endOffset$$1_temp$$1$$ : $options$$154$$.max;
  this.$MinValue$ = $options$$154$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $options$$154$$.viewportMin;
  this.$MaxValue$ = $options$$154$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $options$$154$$.viewportMax;
  var $startIndex$$2$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$154$$.viewportStartGroup), $endIndex$$4$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$154$$.viewportEndGroup);
  -1 != $startIndex$$2$$ && (this.$MinValue$ = $startIndex$$2$$ - $startOffset$$);
  -1 != $endIndex$$4$$ && (this.$MaxValue$ = $endIndex$$4$$ + $availSpace$$56_endOffset$$1_temp$$1$$);
  this.$_startBuffer$ = $context$$571_isRTL$$17$$ ? $options$$154$$.rightBuffer : $options$$154$$.leftBuffer;
  this.$_endBuffer$ = $context$$571_isRTL$$17$$ ? $options$$154$$.leftBuffer : $options$$154$$.rightBuffer;
  this.$_isLabelRotated$ = D.$JSCompiler_alias_FALSE$$;
  this.$_renderGridAtLabels$ = $options$$154$$._renderGridAtLabels
};
D.$JSCompiler_StaticMethods__rotateLabels$$ = function $$JSCompiler_StaticMethods__rotateLabels$$$($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$10$$, $container$$107_labelDims$$3$$, $overflow$$2_text$$87$$) {
  var $x$$262$$, $isRTL$$18$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__rotateLabels$self$$.$_context$);
  $JSCompiler_StaticMethods__rotateLabels$self$$.$_isLabelRotated$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__setOverflow$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $overflow$$2_text$$87$$, $overflow$$2_text$$87$$, $labels$$10$$);
  for(var $i$$579$$ = 0;$i$$579$$ < $labels$$10$$.length;$i$$579$$++) {
    $overflow$$2_text$$87$$ = $labels$$10$$[$i$$579$$], $overflow$$2_text$$87$$ != D.$JSCompiler_alias_NULL$$ && ($x$$262$$ = $overflow$$2_text$$87$$.$getX$(), $overflow$$2_text$$87$$.$setX$(0), $overflow$$2_text$$87$$.$setY$(0), $isRTL$$18$$ ? $overflow$$2_text$$87$$.$setRotation$(window.Math.PI / 2) : $overflow$$2_text$$87$$.$setRotation$(3 * window.Math.PI / 2), $overflow$$2_text$$87$$.$setTranslateX$($x$$262$$))
  }
  $container$$107_labelDims$$3$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$10$$, $container$$107_labelDims$$3$$);
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$10$$, $container$$107_labelDims$$3$$)
};
D.$DvtGroupAxisInfo$$.prototype.$isLabelRotated$ = (0,D.$JSCompiler_get$$)("$_isLabelRotated$");
D.$JSCompiler_StaticMethods__setOverflow$$ = function $$JSCompiler_StaticMethods__setOverflow$$$($JSCompiler_StaticMethods__setOverflow$self$$, $startOverflow$$, $endOverflow$$, $labels$$11$$) {
  $startOverflow$$ = window.Math.max($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_startBuffer$, 0);
  $endOverflow$$ = window.Math.max($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_endBuffer$, 0);
  var $i$$580_isRTL$$19$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__setOverflow$self$$.$_context$);
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartCoord$ += ($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$) * ($i$$580_isRTL$$19$$ ? -1 : 1);
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndCoord$ -= ($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$) * ($i$$580_isRTL$$19$$ ? -1 : 1);
  for($i$$580_isRTL$$19$$ = 0;$i$$580_isRTL$$19$$ < $labels$$11$$.length;$i$$580_isRTL$$19$$++) {
    var $text$$88$$ = $labels$$11$$[$i$$580_isRTL$$19$$];
    $text$$88$$ && $text$$88$$.$setX$($JSCompiler_StaticMethods__setOverflow$self$$.$getCoordAt$($i$$580_isRTL$$19$$))
  }
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$ = $startOverflow$$;
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$ = $endOverflow$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$572$$, $levelIdx$$) {
  if($levelIdx$$ && 0 < $levelIdx$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $labels$$12$$ = [], $container$$108$$ = $context$$572$$.$_stage$, $isHoriz$$7$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ = D.$DvtAgent$$.$isRightToLeft$($context$$572$$), $firstLabelDim_numLabels$$1$$ = this.$_groups$.length, $firstLabel_maxLabelDims$$1_startOverflow$$1$$, $lastLabel_lastLabelDim_text$$89$$, $i$$581$$ = 0;$i$$581$$ < $firstLabelDim_numLabels$$1$$;$i$$581$$++) {
    var $label$$62$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)(this, $i$$581$$), $coord$$1$$ = this.$getCoordAt$($i$$581$$);
    $coord$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($lastLabel_lastLabelDim_text$$89$$ = this.$CreateLabel$($context$$572$$, $label$$62$$, $coord$$1$$), $labels$$12$$.push($lastLabel_lastLabelDim_text$$89$$), $firstLabel_maxLabelDims$$1_startOverflow$$1$$ || ($firstLabel_maxLabelDims$$1_startOverflow$$1$$ = $lastLabel_lastLabelDim_text$$89$$)) : $labels$$12$$.push(D.$JSCompiler_alias_NULL$$)
  }
  if("tangential" == this.$Position$) {
    return $labels$$12$$
  }
  $firstLabelDim_numLabels$$1$$ = $firstLabel_maxLabelDims$$1_startOverflow$$1$$.$measureDimensions$();
  $isHoriz$$7$$ && (this.$Options$._startOverflow != D.$JSCompiler_alias_NULL$$ && this.$Options$._endOverflow != D.$JSCompiler_alias_NULL$$ ? ($firstLabel_maxLabelDims$$1_startOverflow$$1$$ = this.$Options$._startOverflow, $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ = this.$Options$._endOverflow) : ($lastLabel_lastLabelDim_text$$89$$ = $lastLabel_lastLabelDim_text$$89$$.$measureDimensions$(), $firstLabel_maxLabelDims$$1_startOverflow$$1$$ = $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ ? 
  $firstLabelDim_numLabels$$1$$.$w$ + $firstLabelDim_numLabels$$1$$.x - this.$StartCoord$ : this.$StartCoord$ - $firstLabelDim_numLabels$$1$$.x, $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ = $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ ? this.$EndCoord$ - $lastLabel_lastLabelDim_text$$89$$.x : $lastLabel_lastLabelDim_text$$89$$.$w$ + $lastLabel_lastLabelDim_text$$89$$.x - this.$EndCoord$), ($firstLabel_maxLabelDims$$1_startOverflow$$1$$ > this.$_startBuffer$ || $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ > 
  this.$_endBuffer$) && (0,D.$JSCompiler_StaticMethods__setOverflow$$)(this, $firstLabel_maxLabelDims$$1_startOverflow$$1$$, $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$, $labels$$12$$));
  $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ = [];
  $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$12$$, $container$$108$$, 0.3);
  $firstLabel_maxLabelDims$$1_startOverflow$$1$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$12$$, $container$$108$$);
  if(!(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $firstLabel_maxLabelDims$$1_startOverflow$$1$$, 0)) {
    return $labels$$12$$
  }
  if($isHoriz$$7$$) {
    if("auto" == this.$Options$.tickLabel.rotation) {
      if((0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$, 0)) {
        return(0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$12$$, $container$$108$$, $firstLabelDim_numLabels$$1$$.$h$ / 2)
      }
      $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$12$$, $container$$108$$);
      return(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$, 0) ? (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$12$$, $container$$108$$, $firstLabelDim_numLabels$$1$$.$h$ / 2) : $labels$$12$$
    }
    $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$12$$, $container$$108$$);
    return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$12$$, $endOverflow$$1_isRTL$$20_labelDims$$4_minLabelDims$$1$$)
  }
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$12$$, $firstLabel_maxLabelDims$$1_startOverflow$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$573$$) {
  var $axisLineOptions_axisLineStroke$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions_axisLineStroke$$.rendered ? ($axisLineOptions_axisLineStroke$$ = new D.$DvtSolidStroke$$($axisLineOptions_axisLineStroke$$.lineColor, 1, $axisLineOptions_axisLineStroke$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$573$$, $axisLineOptions_axisLineStroke$$, 0)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$574$$) {
  var $gridlines$$ = [], $coord$$2_line$$7$$, $majorTickOptions_numGroups_rendered$$4$$ = this.$Options$.majorTick, $majorTickStroke$$ = new D.$DvtSolidStroke$$($majorTickOptions_numGroups_rendered$$4$$.lineColor, 1, $majorTickOptions_numGroups_rendered$$4$$.lineWidth);
  $majorTickOptions_numGroups_rendered$$4$$.lineStyle && $majorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($majorTickOptions_numGroups_rendered$$4$$.lineStyle));
  $majorTickOptions_numGroups_rendered$$4$$ = $majorTickOptions_numGroups_rendered$$4$$.rendered;
  if("on" == $majorTickOptions_numGroups_rendered$$4$$ || "auto" == $majorTickOptions_numGroups_rendered$$4$$ && "tangential" == this.$Position$) {
    for(var $majorTickOptions_numGroups_rendered$$4$$ = this.$_groups$.length, $i$$582$$ = 0;$i$$582$$ < $majorTickOptions_numGroups_rendered$$4$$;$i$$582$$++) {
      if(this.$_renderGridAtLabels$) {
        $coord$$2_line$$7$$ = this.$getCoordAt$($i$$582$$)
      }else {
        if(this.$getCoordAt$($i$$582$$ + 0.5)) {
          $coord$$2_line$$7$$ = this.$getCoordAt$($i$$582$$ + 0.5)
        }else {
          continue
        }
      }
      $coord$$2_line$$7$$ != D.$JSCompiler_alias_NULL$$ && ($coord$$2_line$$7$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$574$$, $majorTickStroke$$, $coord$$2_line$$7$$), $gridlines$$.push($coord$$2_line$$7$$))
    }
  }
  return $gridlines$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$101$$) {
  return $value$$101$$ < this.$MinValue$ || $value$$101$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$101$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$4$$) {
  var $minCoord$$2$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$2$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  $coord$$4$$ < $minCoord$$2$$ ? $coord$$4$$ = $minCoord$$2$$ : $coord$$4$$ > $maxCoord$$2$$ && ($coord$$4$$ = $maxCoord$$2$$);
  return this.$getUnboundedValueAt$($coord$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$102$$) {
  $value$$102$$ < this.$MinValue$ ? $value$$102$$ = this.$MinValue$ : $value$$102$$ >= this.$MaxValue$ && ($value$$102$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$102$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$5$$) {
  return this.$MinValue$ + ($coord$$5$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$103$$) {
  return this.$StartCoord$ + ($value$$103$$ - this.$MinValue$) * ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_StaticMethods_getLabelAt$$ = function $$JSCompiler_StaticMethods_getLabelAt$$$($JSCompiler_StaticMethods_getLabelAt$self$$, $index$$123$$) {
  $index$$123$$ = window.Math.round($index$$123$$);
  if(0 > $index$$123$$ || $index$$123$$ >= $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $label$$63$$ = $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$[$index$$123$$];
  $label$$63$$ && $label$$63$$.name && ($label$$63$$ = $label$$63$$.name);
  return $label$$63$$
};
D.$JSCompiler_StaticMethods_getIndexByLabel$$ = function $$JSCompiler_StaticMethods_getIndexByLabel$$$($JSCompiler_StaticMethods_getIndexByLabel$self$$, $label$$64$$) {
  if($label$$64$$ == D.$JSCompiler_alias_NULL$$) {
    return-1
  }
  for(var $index$$124$$ = -1, $i$$583$$ = 0;$i$$583$$ < $JSCompiler_StaticMethods_getIndexByLabel$self$$.$_groups$.length;$i$$583$$++) {
    if($label$$64$$ == (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($JSCompiler_StaticMethods_getIndexByLabel$self$$, $i$$583$$)) {
      $index$$124$$ = $i$$583$$;
      break
    }
  }
  return $index$$124$$
};
D.$DvtGroupAxisInfo$$.prototype.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(1);
D.$DvtLinearScaleAxisValueFormatter$$ = function $$DvtLinearScaleAxisValueFormatter$$$($minValue$$8$$, $maxValue$$10$$, $tickStep$$, $scale$$29$$, $autoPrecision$$4$$) {
  this.$_bundle$ = new D.$DvtUtilBundle$$;
  this.Init($minValue$$8$$, $maxValue$$10$$, $tickStep$$, $scale$$29$$, $autoPrecision$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLinearScaleAxisValueFormatter$$, D.$DvtAbstractAxisValueFormatter$$, "DvtLinearScaleAxisValueFormatter");
D.$DvtLinearScaleAxisValueFormatter$$.prototype.Init = function $$DvtLinearScaleAxisValueFormatter$$$$Init$($minValue$$9_scaleFactorDiff$$inline_5860$$, $maxValue$$11$$, $tickStep$$1$$, $i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$, $autoPrecision$$5$$) {
  this.$_scales$ = {};
  this.$_scalesOrder$ = [];
  this.$_factorToScaleMapping$ = {};
  var $createScale$$inline_5840_useAutoPrecision$$inline_5858$$ = function $$createScale$$inline_5840_useAutoPrecision$$inline_5858$$$($minValue$$9_scaleFactorDiff$$inline_5860$$, $maxValue$$11$$, $tickStep$$1$$) {
    var $i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$;
    this.$_bundle$ && $tickStep$$1$$ && ($i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_bundle$, $tickStep$$1$$, D.$JSCompiler_alias_NULL$$));
    $tickStep$$1$$ = {$scaleFactor$:$maxValue$$11$$, $localizedSuffix$:$i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$};
    this.$_scales$[$minValue$$9_scaleFactorDiff$$inline_5860$$] = $tickStep$$1$$;
    this.$_scalesOrder$.push($tickStep$$1$$);
    this.$_factorToScaleMapping$[$maxValue$$11$$] = $tickStep$$1$$
  };
  $createScale$$inline_5840_useAutoPrecision$$inline_5858$$.call(this, "none", 0);
  $createScale$$inline_5840_useAutoPrecision$$inline_5858$$.call(this, "thousand", 3, "SCALING_SUFFIX_THOUSAND");
  $createScale$$inline_5840_useAutoPrecision$$inline_5858$$.call(this, "million", 6, "SCALING_SUFFIX_MILLION");
  $createScale$$inline_5840_useAutoPrecision$$inline_5858$$.call(this, "billion", 9, "SCALING_SUFFIX_BILLION");
  $createScale$$inline_5840_useAutoPrecision$$inline_5858$$.call(this, "trillion", 12, "SCALING_SUFFIX_TRILLION");
  $createScale$$inline_5840_useAutoPrecision$$inline_5858$$.call(this, "quadrillion", 15, "SCALING_SUFFIX_QUADRILLION");
  this.$_scalesOrder$.sort(function($minValue$$9_scaleFactorDiff$$inline_5860$$, $maxValue$$11$$) {
    return $minValue$$9_scaleFactorDiff$$inline_5860$$.$scaleFactor$ < $maxValue$$11$$.$scaleFactor$ ? -1 : $minValue$$9_scaleFactorDiff$$inline_5860$$.$scaleFactor$ > $maxValue$$11$$.$scaleFactor$ ? 1 : 0
  });
  var $absMax$$inline_5859_findScale$$inline_5855_value$$inline_9593$$ = D.$JSCompiler_alias_FALSE$$, $decimalPlaces$$inline_5856$$, $scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$, $createScale$$inline_5840_useAutoPrecision$$inline_5858$$ = D.$JSCompiler_alias_FALSE$$;
  "off" !== $autoPrecision$$5$$ && ($createScale$$inline_5840_useAutoPrecision$$inline_5858$$ = D.$JSCompiler_alias_TRUE$$);
  $i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$ || ($i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$ = "auto");
  if($i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$ = this.$_scales$[$i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$]) {
    $scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$ = $i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$.$scaleFactor$
  }
  "number" !== typeof $scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$ && ($absMax$$inline_5859_findScale$$inline_5855_value$$inline_9593$$ = D.$JSCompiler_alias_TRUE$$);
  if($absMax$$inline_5859_findScale$$inline_5855_value$$inline_9593$$) {
    if($absMax$$inline_5859_findScale$$inline_5855_value$$inline_9593$$ = window.Math.max(window.Math.abs($minValue$$9_scaleFactorDiff$$inline_5860$$), window.Math.abs($maxValue$$11$$)), $absMax$$inline_5859_findScale$$inline_5855_value$$inline_9593$$ = (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($absMax$$inline_5859_findScale$$inline_5855_value$$inline_9593$$), $scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$ = 0, $absMax$$inline_5859_findScale$$inline_5855_value$$inline_9593$$ <= 
    this.$_scalesOrder$[0].$scaleFactor$) {
      $scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$ = this.$_scalesOrder$[0].$scaleFactor$
    }else {
      if($absMax$$inline_5859_findScale$$inline_5855_value$$inline_9593$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$
      }else {
        for($i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$ = this.$_scalesOrder$.length - 1;0 <= $i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$;$i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$--) {
          if(this.$_scalesOrder$[$i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$].$scaleFactor$ <= $absMax$$inline_5859_findScale$$inline_5855_value$$inline_9593$$) {
            $scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$ = this.$_scalesOrder$[$i$$inline_9595_scale$$30_scale$$inline_9590_scaleName$$inline_9588$$].$scaleFactor$;
            break
          }
        }
      }
    }
  }
  $createScale$$inline_5840_useAutoPrecision$$inline_5858$$ === D.$JSCompiler_alias_TRUE$$ && (0 == $tickStep$$1$$ && $minValue$$9_scaleFactorDiff$$inline_5860$$ == $maxValue$$11$$ ? ($minValue$$9_scaleFactorDiff$$inline_5860$$ = $scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($maxValue$$11$$), $decimalPlaces$$inline_5856$$ = 0 >= $minValue$$9_scaleFactorDiff$$inline_5860$$ ? 3 + $minValue$$9_scaleFactorDiff$$inline_5860$$ : 
  window.Math.max($minValue$$9_scaleFactorDiff$$inline_5860$$, 4)) : $decimalPlaces$$inline_5856$$ = window.Math.max($scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($tickStep$$1$$), 0));
  this.$_useAutoPrecision$ = $createScale$$inline_5840_useAutoPrecision$$inline_5858$$;
  this.$_scaleFactor$ = $scaleFactor$$inline_5857_scaleFactor$$inline_9589_scaleFactor$$inline_9594$$;
  this.$_decimalPlaces$ = $decimalPlaces$$inline_5856$$
};
D.$DvtLinearScaleAxisValueFormatter$$.prototype.$format$ = function $$DvtLinearScaleAxisValueFormatter$$$$$format$$($value$$119$$, $converter$$3$$) {
  var $formatted$$inline_5864_parsed$$ = (0,window.parseFloat)($value$$119$$);
  if((0,window.isNaN)($formatted$$inline_5864_parsed$$)) {
    return $value$$119$$
  }
  var $i$$599_suffix$$3$$;
  if(0 < this.$_scaleFactor$) {
    for($i$$599_suffix$$3$$ = 0;$i$$599_suffix$$3$$ < this.$_scaleFactor$;$i$$599_suffix$$3$$++) {
      $formatted$$inline_5864_parsed$$ /= 10
    }
    $i$$599_suffix$$3$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$
  }
  if($converter$$3$$ && $converter$$3$$.getAsString) {
    $formatted$$inline_5864_parsed$$ = $converter$$3$$.getAsString($formatted$$inline_5864_parsed$$)
  }else {
    if($converter$$3$$ && $converter$$3$$.format) {
      $formatted$$inline_5864_parsed$$ = $converter$$3$$.format($formatted$$inline_5864_parsed$$)
    }else {
      if(this.$_useAutoPrecision$ && !(0,window.isNaN)((0,window.parseFloat)($formatted$$inline_5864_parsed$$)) && ($formatted$$inline_5864_parsed$$ = (0,window.parseFloat)((new window.Number($formatted$$inline_5864_parsed$$)).toFixed(this.$_decimalPlaces$)), $formatted$$inline_5864_parsed$$ = "" + $formatted$$inline_5864_parsed$$, 0 < this.$_decimalPlaces$)) {
        -1 == $formatted$$inline_5864_parsed$$.indexOf(".") && ($formatted$$inline_5864_parsed$$ += ".");
        for(var $existingPlacesCount$$inline_5865$$ = $formatted$$inline_5864_parsed$$.substring($formatted$$inline_5864_parsed$$.indexOf(".") + 1).length;$existingPlacesCount$$inline_5865$$ < this.$_decimalPlaces$;) {
          $formatted$$inline_5864_parsed$$ += "0", $existingPlacesCount$$inline_5865$$++
        }
      }
    }
  }
  "string" === typeof $i$$599_suffix$$3$$ && ($formatted$$inline_5864_parsed$$ += $i$$599_suffix$$3$$);
  return $formatted$$inline_5864_parsed$$
};
D.$JSCompiler_StaticMethods__getPowerOfTen$$ = function $$JSCompiler_StaticMethods__getPowerOfTen$$$($value$$121$$) {
  $value$$121$$ = 0 <= $value$$121$$ ? $value$$121$$ : -$value$$121$$;
  var $power$$1$$ = 0;
  if(1E-15 > $value$$121$$) {
    return 0
  }
  if(window.Infinity == $value$$121$$) {
    return window.Number.MAX_VALUE
  }
  if(10 <= $value$$121$$) {
    for(;10 <= $value$$121$$;) {
      $power$$1$$ += 1, $value$$121$$ /= 10
    }
  }else {
    if(1 > $value$$121$$) {
      for(;1 > $value$$121$$;) {
        $power$$1$$ -= 1, $value$$121$$ *= 10
      }
    }
  }
  return $power$$1$$
};
D.$DvtTimeAxisInfo$$ = function $$DvtTimeAxisInfo$$$($context$$589$$, $options$$164$$, $availSpace$$67$$) {
  this.Init($context$$589$$, $options$$164$$, $availSpace$$67$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeAxisInfo$$, D.$DvtAxisInfo$$, "DvtTimeAxisInfo");
D.$DvtTimeAxisInfo$TIME_MONTH$$ = 864E5 * (365 / 12);
D.$DvtTimeAxisInfo$$.prototype.Init = function $$DvtTimeAxisInfo$$$$Init$($bundle$$3_context$$590_endOffset$$2$$, $options$$165$$, $availSpace$$68_startOffset$$1$$) {
  D.$DvtTimeAxisInfo$$.$superclass$.Init.call(this, $bundle$$3_context$$590_endOffset$$2$$, $options$$165$$, $availSpace$$68_startOffset$$1$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (!$options$$165$$._isOverview && "on" == $options$$165$$.tickLabel.rendered && (this.$StartOverflow$ = window.Math.max(10 - $options$$165$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $options$$165$$.rightBuffer, 0)), D.$DvtAgent$$.$isRightToLeft$($bundle$$3_context$$590_endOffset$$2$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = 
  this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$);
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $options$$165$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $options$$165$$.tickLabel.converter);
  this.$_groups$ = $options$$165$$.groups;
  this.$DataMin$ = $options$$165$$.dataMin;
  this.$DataMax$ = $options$$165$$.dataMax;
  this.$_averageInterval$ = 0 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0;
  $bundle$$3_context$$590_endOffset$$2$$ = 0 < $options$$165$$.endGroupOffset ? $options$$165$$.endGroupOffset * this.$_averageInterval$ : 0;
  $availSpace$$68_startOffset$$1$$ = 0 < $options$$165$$.startGroupOffset ? $options$$165$$.startGroupOffset * this.$_averageInterval$ : 0;
  this.$GlobalMin$ = $options$$165$$.min != D.$JSCompiler_alias_NULL$$ ? $options$$165$$.min : this.$DataMin$ - $availSpace$$68_startOffset$$1$$;
  this.$GlobalMax$ = $options$$165$$.max != D.$JSCompiler_alias_NULL$$ ? $options$$165$$.max : this.$DataMax$ + $bundle$$3_context$$590_endOffset$$2$$;
  this.$MinValue$ = $options$$165$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $options$$165$$.viewportMin;
  this.$MaxValue$ = $options$$165$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $options$$165$$.viewportMax;
  $options$$165$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = $options$$165$$.viewportStartGroup - $availSpace$$68_startOffset$$1$$);
  $options$$165$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $options$$165$$.viewportEndGroup + $bundle$$3_context$$590_endOffset$$2$$);
  this.$_timeZoneOffset$ = 0;
  this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
  this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$;
  this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$;
  $bundle$$3_context$$590_endOffset$$2$$ = new D.$DvtUtilBundle$$;
  this.$_timeAxisResources$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, "MONTH_SHORT_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, "MONTH_SHORT_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, "MONTH_SHORT_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, 
  "MONTH_SHORT_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, "MONTH_SHORT_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, "MONTH_SHORT_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, "MONTH_SHORT_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, 
  "MONTH_SHORT_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, "MONTH_SHORT_SEPTEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, "MONTH_SHORT_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, "MONTH_SHORT_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_context$$590_endOffset$$2$$, 
  "MONTH_SHORT_DECEMBER", D.$JSCompiler_alias_NULL$$)];
  this.$_renderGridAtLabels$ = $options$$165$$._renderGridAtLabels
};
D.$JSCompiler_StaticMethods__formatAxisLabel$$ = function $$JSCompiler_StaticMethods__formatAxisLabel$$$($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, $prevDate$$) {
  var $label1$$ = D.$JSCompiler_alias_NULL$$, $label2$$ = D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString) {
    $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString($date$$2$$)
  }else {
    if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format) {
      $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format($date$$2$$)
    }else {
      if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_averageInterval$) {
        $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_averageInterval$) {
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getMonth() != $date$$2$$.getMonth()) {
            $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
          }
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$2$$.getYear()) {
            $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
          }
        }else {
          if(24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 864E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_averageInterval$) {
            if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getDate() != $date$$2$$.getDate()) {
              $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)
            }
            $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$2$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$.getMonth() != $date$$2$$.getMonth() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, 
            D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$))
          }else {
            if(36E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 6E4 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_averageInterval$) {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getHours() != $date$$2$$.getHours() || $prevDate$$.getMinutes() != $date$$2$$.getMinutes()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$)
              }
            }else {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getSeconds() != $date$$2$$.getSeconds()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$)
              }
            }
            $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getMonth() != $date$$2$$.getMonth() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$) : $prevDate$$.getDate() != $date$$2$$.getDate() && ($label2$$ = "left" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$ || "right" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$ ? 
            (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$) : (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$))
          }
        }
      }
    }
  }
  return[$label1$$, $label2$$]
};
D.$JSCompiler_StaticMethods__formatDate$$ = function $$JSCompiler_StaticMethods__formatDate$$$($JSCompiler_StaticMethods__formatDate$self_dateStr$$, $date$$3_dayStr$$, $showDay$$, $showMonth$$, $showYear$$) {
  var $yearStr$$ = $date$$3_dayStr$$.getFullYear(), $monthStr$$;
  $monthStr$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 12 <= $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[$date$$3_dayStr$$.getMonth()] : $date$$3_dayStr$$.toString().split(" ")[1];
  $date$$3_dayStr$$ = $date$$3_dayStr$$.getDate();
  if($JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 17 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length) {
    var $dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[17], $yearStr$$ = $yearStr$$ + $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[16];
    $date$$3_dayStr$$ += $dayChar_dmyOrder$$
  }
  $dayChar_dmyOrder$$ = "DMY";
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 15 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length && ($dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[15]);
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$ = "";
  for(var $i$$592$$ = 0;$i$$592$$ < $dayChar_dmyOrder$$.length;$i$$592$$++) {
    $showDay$$ && "D" == $dayChar_dmyOrder$$[$i$$592$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $date$$3_dayStr$$ + " " : $showMonth$$ && "M" == $dayChar_dmyOrder$$[$i$$592$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $monthStr$$ + " " : $showYear$$ && "Y" == $dayChar_dmyOrder$$[$i$$592$$] && ($JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $yearStr$$ + " ")
  }
  return 0 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.slice(0, $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length - 1) : $JSCompiler_StaticMethods__formatDate$self_dateStr$$
};
D.$JSCompiler_StaticMethods__formatTime$$ = function $$JSCompiler_StaticMethods__formatTime$$$($JSCompiler_StaticMethods__formatTime$self_b12HFormat$$, $date$$4_secs$$, $showSecond$$) {
  var $hours_timeLabel$$ = $date$$4_secs$$.getHours(), $mins$$ = $date$$4_secs$$.getMinutes();
  $date$$4_secs$$ = $date$$4_secs$$.getSeconds();
  var $am$$ = "", $pm$$1$$ = "", $ampmBefore$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ != D.$JSCompiler_alias_NULL$$ && 14 < $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ && ($am$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[window.DvtTimeAxis.$AM_INDEX$], $pm$$1$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[window.DvtTimeAxis.$PM_INDEX$], $ampmBefore$$ = "t" == $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[14]);
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ = "" != $am$$ && "" != $pm$$1$$;
  var $ampm$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ && ($ampm$$ = $pm$$1$$, 12 < $hours_timeLabel$$ ? ($hours_timeLabel$$ -= 12, $ampm$$ = $pm$$1$$) : 0 == $hours_timeLabel$$ ? ($ampm$$ = $am$$, $hours_timeLabel$$ = 12) : 12 > $hours_timeLabel$$ && ($ampm$$ = $am$$));
  $hours_timeLabel$$ = (10 > $hours_timeLabel$$ ? "0" + $hours_timeLabel$$ : "" + $hours_timeLabel$$) + ":" + (10 > $mins$$ ? "0" + $mins$$ : "" + $mins$$);
  $showSecond$$ && ($hours_timeLabel$$ += ":" + (10 > $date$$4_secs$$ ? "0" + $date$$4_secs$$ : "" + $date$$4_secs$$));
  return $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ ? $ampmBefore$$ ? $ampm$$ + " " + $hours_timeLabel$$ : $hours_timeLabel$$ + " " + $ampm$$ : $hours_timeLabel$$
};
D.$DvtTimeAxisInfo$$.prototype.$getLabels$ = function $$DvtTimeAxisInfo$$$$$getLabels$$($context$$592$$, $levelIdx$$3$$) {
  if($levelIdx$$3$$ && 1 < $levelIdx$$3$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(!this.$_level1Labels$) {
    var $labels1$$inline_5811$$ = [], $labels2$$inline_5812$$ = [], $coords1$$inline_5813$$ = [], $coords2$$inline_5814$$ = [], $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ = D.$JSCompiler_alias_NULL$$, $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = 0, $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ = 0, $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ = 
    $context$$592$$.$_stage$, $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = D.$DvtAgent$$.$isRightToLeft$($context$$592$$), $isVert$$inline_5820_labels1$$inline_9572$$ = "left" == this.$Position$ || "right" == this.$Position$, $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$ = "off" != this.$Options$.zoomAndScroll;
    if($j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$) {
      var $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ = D.$JSCompiler_alias_TRUE$$
    }
    var $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ = 0;
    $isVert$$inline_5820_labels1$$inline_9572$$ && D.$DvtAgent$$.$isBrowserChrome$() && ($gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ = 0.2 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")));
    var $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$ = [], $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = 0;
    if("mixedFrequency" == this.$Options$.timeAxisType) {
      for(var $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$ = this.$MinValue$, $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = 31536E6 <= this.$_averageInterval$ ? 31536E6 : this.$_averageInterval$ >= D.$DvtTimeAxisInfo$TIME_MONTH$$ ? D.$DvtTimeAxisInfo$TIME_MONTH$$ : 864E5 <= this.$_averageInterval$ ? 864E5 : 36E5 <= this.$_averageInterval$ ? 36E5 : 6E4 <= this.$_averageInterval$ ? 6E4 : 
      1E3;$date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$ <= this.$MaxValue$;) {
        $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$.push($date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$), $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$ += $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$
      }
      $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = window.Math.floor(this.$_averageInterval$ / $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$) - 1
    }else {
      $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$ = this.$_groups$
    }
    for(var $i$$inline_5828_pointA1$$inline_9565$$ = 0;$i$$inline_5828_pointA1$$inline_9565$$ < $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$.length;$i$$inline_5828_pointA1$$inline_9565$$++) {
      var $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$ = $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$[$i$$inline_5828_pointA1$$inline_9565$$], $coord$$inline_5829_pointA2$$inline_9566$$ = this.$getCoordAt$($date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$);
      if($coord$$inline_5829_pointA2$$inline_9566$$ != D.$JSCompiler_alias_NULL$$) {
        var $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$ = new window.Date($date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$ + this.$_timeZoneOffset$), $j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$, $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$), $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ = 
        $j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$[0], $j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$ = $j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$[1];
        $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ != D.$JSCompiler_alias_NULL$$ ? ($j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$ != D.$JSCompiler_alias_NULL$$ ? $labels1$$inline_5811$$.push(this.$CreateLabel$($context$$592$$, $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$, $coord$$inline_5829_pointA2$$inline_9566$$ + $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$)) : 
        $labels1$$inline_5811$$.push(this.$CreateLabel$($context$$592$$, $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$, $coord$$inline_5829_pointA2$$inline_9566$$)), $coords1$$inline_5813$$.push($coord$$inline_5829_pointA2$$inline_9566$$)) : ($labels1$$inline_5811$$.push(D.$JSCompiler_alias_NULL$$), $coords1$$inline_5813$$.push(D.$JSCompiler_alias_NULL$$));
        $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$ && $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ && ($coord$$inline_5829_pointA2$$inline_9566$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$inline_5829_pointA2$$inline_9566$$, $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ = D.$JSCompiler_alias_FALSE$$);
        $j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$ != D.$JSCompiler_alias_NULL$$ ? ($label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ = D.$JSCompiler_alias_NULL$$, $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ = $j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$ != D.$JSCompiler_alias_NULL$$ ? this.$CreateLabel$($context$$592$$, $j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$, $coord$$inline_5829_pointA2$$inline_9566$$ - 
        $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$) : this.$CreateLabel$($context$$592$$, $j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$, $coord$$inline_5829_pointA2$$inline_9566$$), $coords2$$inline_5814$$.push($coord$$inline_5829_pointA2$$inline_9566$$), $isVert$$inline_5820_labels1$$inline_9572$$ || ($count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ ? 
        $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$.$alignRight$() : $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$.$alignLeft$()), $labels2$$inline_5812$$.push($label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$), this.$_isOneLevel$ = D.$JSCompiler_alias_FALSE$$) : ($labels2$$inline_5812$$.push(D.$JSCompiler_alias_NULL$$), $coords2$$inline_5814$$.push(D.$JSCompiler_alias_NULL$$));
        $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ = $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$
      }
    }
    $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ = $labels1$$inline_5811$$;
    $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels1$$inline_5811$$, $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$);
    $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$ = $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$;
    $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = [];
    for($bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = 0;$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ < $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$.length;$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$++) {
      $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$[$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$] != D.$JSCompiler_alias_NULL$$ && $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$.push($gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$[$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$])
    }
    $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ = $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$;
    for($bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$, $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$);$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$;) {
      $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$++, $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$, $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$)
    }
    $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$.length;
    if(0 < $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$) {
      for($bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$ = 0;$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ < $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$.length;$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$++) {
        $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$[$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$] != D.$JSCompiler_alias_NULL$$ && (0 != $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$ % ($gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ + 
        1) && ($first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$[$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$] = D.$JSCompiler_alias_NULL$$, $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$--), $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$++)
      }
    }
    $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$;
    $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ = $labels2$$inline_5812$$;
    $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels2$$inline_5812$$, $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$);
    if(!$c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ || 0 >= $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$.length) {
      $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ = D.$JSCompiler_alias_FALSE$$
    }else {
      $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ = ($count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = "left" == this.$Position$ || "right" == this.$Position$) ? this.$Options$.layout.verticalAxisGap : this.$Options$.layout.horizontalAxisGap;
      $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$ = 0;
      if($c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[0] != D.$JSCompiler_alias_NULL$$) {
        $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ ? ($i$$inline_5828_pointA1$$inline_9565$$ = $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[0].y, $coord$$inline_5829_pointA2$$inline_9566$$ = $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[0].y + $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[0].$h$) : 
        ($i$$inline_5828_pointA1$$inline_9565$$ = $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[0].x, $coord$$inline_5829_pointA2$$inline_9566$$ = $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[0].x + $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[0].$w$);
        $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$++;
        for($j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$ = 1;$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$ < $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$.length;$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$++) {
          $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$] != D.$JSCompiler_alias_NULL$$ && ($count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ ? ($label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ = $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$].y, 
          $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$ = $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$].y + $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$].$h$) : ($label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ = $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$].x, 
          $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$ = $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$].x + $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$[$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$].$w$), ($label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ >= $i$$inline_5828_pointA1$$inline_9565$$ && 
          $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ - $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ < $coord$$inline_5829_pointA2$$inline_9566$$ || $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$ < $i$$inline_5828_pointA1$$inline_9565$$ && $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$ + $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ > 
          $i$$inline_5828_pointA1$$inline_9565$$) && ($first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$[$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$] = D.$JSCompiler_alias_NULL$$), $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$[$j$$inline_9569_label2$$inline_5833_twoLabels$$inline_5831$$] != D.$JSCompiler_alias_NULL$$ && ($i$$inline_5828_pointA1$$inline_9565$$ = $label1$$inline_5832_pointB1$$inline_9567_prevDate$$inline_5815_text$$inline_5834$$, 
          $coord$$inline_5829_pointA2$$inline_9566$$ = $date$$inline_5830_pointB2$$inline_9568_time$$inline_5826$$, $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$++))
        }
      }
      $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ = $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$
    }
    if(!$j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$) {
      if($bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ <= 1.5 * $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ && 1 < $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$) {
        $labels1$$inline_5811$$ = $labels2$$inline_5812$$;
        $labels2$$inline_5812$$ = D.$JSCompiler_alias_NULL$$;
        for($j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$ = 0;$j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$ < $labels1$$inline_5811$$.length;$j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$++) {
          $labels1$$inline_5811$$[$j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$] != D.$JSCompiler_alias_NULL$$ && $labels1$$inline_5811$$[$j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$].$alignCenter$()
        }
      }else {
        2 > $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ && ($labels2$$inline_5812$$ = D.$JSCompiler_alias_NULL$$)
      }
    }
    2 > $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ && (this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$);
    if($isVert$$inline_5820_labels1$$inline_9572$$ && $labels2$$inline_5812$$ != D.$JSCompiler_alias_NULL$$) {
      for(var $isVert$$inline_5820_labels1$$inline_9572$$ = $labels1$$inline_5811$$, $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$ = $labels2$$inline_5812$$, $gap$$inline_9574$$ = 0.1 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")), $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$ = function $$c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$$($context$$592$$, $levelIdx$$3$$) {
        return $levelIdx$$3$$.y >= $context$$592$$.y && $levelIdx$$3$$.y - $gap$$inline_9574$$ < $context$$592$$.y + $context$$592$$.$h$ || $levelIdx$$3$$.y < $context$$592$$.y && $levelIdx$$3$$.y + $levelIdx$$3$$.$h$ + $gap$$inline_9574$$ > $context$$592$$.y ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
      }, $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = D.$JSCompiler_alias_NULL$$, $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = D.$JSCompiler_alias_FALSE$$, $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ = 0;$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ < 
      $isVert$$inline_5820_labels1$$inline_9572$$.length;$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$++) {
        if($isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$] && $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$]) {
          if($isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$].$alignTop$(), $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$].$alignBottom$(), $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ && $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$($bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$, 
          $isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$].$measureDimensions$())) {
            $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            if($isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ + 1] && $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$($isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$].$measureDimensions$(), $isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ + 
            1].$measureDimensions$())) {
              $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = D.$JSCompiler_alias_TRUE$$;
              break
            }else {
              $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$].$measureDimensions$()
            }
          }
        }else {
          if($isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$] || $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$]) {
            if($gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ = $isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$] ? $isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$] : $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$], 
            $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ && $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$($bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$, $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$.$measureDimensions$())) {
              $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = D.$JSCompiler_alias_TRUE$$;
              break
            }else {
              $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$.$measureDimensions$()
            }
          }
        }
      }
      if($count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$) {
        $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ = $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = D.$JSCompiler_alias_NULL$$;
        for($first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ = 0;$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$ < $isVert$$inline_5820_labels1$$inline_9572$$.length;$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$++) {
          $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$] ? ($isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$] = D.$JSCompiler_alias_NULL$$, $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$].$alignMiddle$(), $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$ = 
          $j$$inline_5835_labels2$$inline_9573_scrollable$$inline_5821$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$].$measureDimensions$(), $count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ && $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$($count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$, 
          $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$) && ($isVert$$inline_5820_labels1$$inline_9572$$[$bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$] = D.$JSCompiler_alias_NULL$$), $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ = $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$) : 
          $isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$] && ($count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$ = $isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$].$measureDimensions$(), $gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$ && 
          $c2$$inline_5817_container$$inline_5818_isOverlapping$$inline_9575_labelDims$$inline_9561$$($gap$$inline_9563_label$$inline_9579_labelDims$$inline_9550_lastLv2Dims$$inline_9582_levelsGap$$inline_5823_skippedLabels$$inline_9554$$, $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$) ? $isVert$$inline_5820_labels1$$inline_9572$$[$first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$] = D.$JSCompiler_alias_NULL$$ : ($count$$inline_9556_isRTL$$inline_5819_isVert$$inline_9562_lastLv1Dims$$inline_9581_overlapping$$inline_9577_shortLabelDims$$inline_9552$$ = 
          $count$$inline_9564_dims$$inline_9583_minSkip$$inline_9551_n$$inline_9557_times$$inline_5824$$, $bOverlaps$$inline_9555_c1$$inline_5816_interval$$inline_5827_j$$inline_9553_lastDims$$inline_9576_lastLv1Idx$$inline_9580_minSkip$$inline_5825$$ = $first$$inline_5822_i$$inline_9578_labels$$inline_9549_labels$$inline_9560$$))
        }
      }
    }
    this.$_level1Labels$ = $labels1$$inline_5811$$;
    this.$_level2Labels$ = $labels2$$inline_5812$$;
    this.$_level1Coords$ = $coords1$$inline_5813$$;
    this.$_level2Coords$ = $coords2$$inline_5814$$
  }
  return 1 == $levelIdx$$3$$ ? this.$_level2Labels$ : this.$_level1Labels$
};
D.$DvtTimeAxisInfo$$.prototype.$getAxisLine$ = function $$DvtTimeAxisInfo$$$$$getAxisLine$$($context$$593$$) {
  var $axisLineOptions$$2_axisLineStroke$$2$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$2_axisLineStroke$$2$$.rendered ? ($axisLineOptions$$2_axisLineStroke$$2$$ = new D.$DvtSolidStroke$$($axisLineOptions$$2_axisLineStroke$$2$$.lineColor, 1, $axisLineOptions$$2_axisLineStroke$$2$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$593$$, $axisLineOptions$$2_axisLineStroke$$2$$, 10)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getGridLineShift$$ = function $$JSCompiler_StaticMethods__getGridLineShift$$$($JSCompiler_StaticMethods__getGridLineShift$self$$, $i$$595$$) {
  if($JSCompiler_StaticMethods__getGridLineShift$self$$.$_renderGridAtLabels$) {
    return 0
  }
  for(var $curr$$ = $JSCompiler_StaticMethods__getGridLineShift$self$$.$_level1Coords$[$i$$595$$], $prev$$ = D.$JSCompiler_alias_NULL$$, $j$$75$$ = $i$$595$$ - 1;0 <= $j$$75$$;$j$$75$$--) {
    if($JSCompiler_StaticMethods__getGridLineShift$self$$.$_level1Coords$[$j$$75$$] != D.$JSCompiler_alias_NULL$$) {
      $prev$$ = $JSCompiler_StaticMethods__getGridLineShift$self$$.$_level1Coords$[$j$$75$$];
      break
    }
  }
  return $prev$$ == D.$JSCompiler_alias_NULL$$ ? window.Infinity : ($curr$$ - $prev$$) / 2
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$594$$) {
  var $gridlines$$3_majorTickOptions$$2$$ = this.$Options$.majorTick;
  if("on" != $gridlines$$3_majorTickOptions$$2$$.rendered) {
    return[]
  }
  var $coords$$10$$ = [];
  if(this.$_isOneLevel$) {
    for(var $i$$596$$ = 0;$i$$596$$ < this.$_level1Coords$.length;$i$$596$$++) {
      this.$_level1Coords$[$i$$596$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$596$$] != D.$JSCompiler_alias_NULL$$ && $coords$$10$$.push(this.$_level1Coords$[$i$$596$$] - (0,D.$JSCompiler_StaticMethods__getGridLineShift$$)(this, $i$$596$$))
    }
  }else {
    for($i$$596$$ = 1;$i$$596$$ < this.$_level2Coords$.length;$i$$596$$++) {
      this.$_level2Coords$[$i$$596$$] != D.$JSCompiler_alias_NULL$$ && $coords$$10$$.push(this.$_level2Coords$[$i$$596$$] - (0,D.$JSCompiler_StaticMethods__getGridLineShift$$)(this, $i$$596$$))
    }
  }
  var $majorTickStroke$$2$$ = new D.$DvtSolidStroke$$($gridlines$$3_majorTickOptions$$2$$.lineColor, 1, $gridlines$$3_majorTickOptions$$2$$.lineWidth);
  $gridlines$$3_majorTickOptions$$2$$.lineStyle && $majorTickStroke$$2$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$3_majorTickOptions$$2$$.lineStyle));
  $gridlines$$3_majorTickOptions$$2$$ = [];
  for($i$$596$$ = 0;$i$$596$$ < $coords$$10$$.length;$i$$596$$++) {
    $coords$$10$$[$i$$596$$] >= this.$_minCoord$ && $coords$$10$$[$i$$596$$] <= this.$_maxCoord$ && $gridlines$$3_majorTickOptions$$2$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$594$$, $majorTickStroke$$2$$, $coords$$10$$[$i$$596$$]))
  }
  return $gridlines$$3_majorTickOptions$$2$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$595$$) {
  var $gridlines$$4_minorTickOptions$$1$$ = this.$Options$.minorTick;
  if("on" != $gridlines$$4_minorTickOptions$$1$$.rendered || this.$_isOneLevel$) {
    return[]
  }
  for(var $coords$$11$$ = [], $i$$597$$ = 0;$i$$597$$ < this.$_level1Coords$.length;$i$$597$$++) {
    this.$_level1Coords$[$i$$597$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$597$$] != D.$JSCompiler_alias_NULL$$ && $coords$$11$$.push(this.$_level1Coords$[$i$$597$$] - (0,D.$JSCompiler_StaticMethods__getGridLineShift$$)(this, $i$$597$$))
  }
  var $minorTickStroke$$1$$ = new D.$DvtSolidStroke$$($gridlines$$4_minorTickOptions$$1$$.lineColor, 1, $gridlines$$4_minorTickOptions$$1$$.lineWidth);
  $gridlines$$4_minorTickOptions$$1$$.lineStyle && $minorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$4_minorTickOptions$$1$$.lineStyle));
  $gridlines$$4_minorTickOptions$$1$$ = [];
  for($i$$597$$ = 0;$i$$597$$ < $coords$$11$$.length;$i$$597$$++) {
    $coords$$11$$[$i$$597$$] >= this.$_minCoord$ && $coords$$11$$[$i$$597$$] <= this.$_maxCoord$ && $gridlines$$4_minorTickOptions$$1$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$595$$, $minorTickStroke$$1$$, $coords$$11$$[$i$$597$$]))
  }
  return $gridlines$$4_minorTickOptions$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$115$$) {
  return $value$$115$$ < this.$MinValue$ || $value$$115$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$115$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$19$$) {
  var $minCoord$$6$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$6$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$19$$ < $minCoord$$6$$ ? $coord$$19$$ = $minCoord$$6$$ : $coord$$19$$ > $maxCoord$$6$$ && ($coord$$19$$ = $maxCoord$$6$$);
  return this.$getUnboundedValueAt$($coord$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$116$$) {
  $value$$116$$ < this.$MinValue$ ? $value$$116$$ = this.$MinValue$ : $value$$116$$ > this.$MaxValue$ && ($value$$116$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$116$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$20$$) {
  return this.$MinValue$ + ($coord$$20$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$117$$) {
  return this.$_minCoord$ + ($value$$117$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return window.Math.abs(this.$getUnboundedCoordAt$(this.$MinValue$ + this.$_averageInterval$) - this.$getUnboundedCoordAt$(this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_get$$)("$_averageInterval$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? this.$StartOverflow$ : this.$EndOverflow$
};
});