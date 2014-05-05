define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAxis$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtAxis", D.$DvtAxis$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxis$$, D.$DvtBaseComponent$$, "DvtAxis");
D.$DvtAxis$$.newInstance = function $$DvtAxis$$$newInstance$($context$$379$$, $callback$$79$$, $callbackObj$$52$$) {
  var $axis$$18$$ = new D.$DvtAxis$$;
  $axis$$18$$.Init($context$$379$$, $callback$$79$$, $callbackObj$$52$$);
  return $axis$$18$$
};
D.$DvtAxis$getDefaults$$ = function $$DvtAxis$getDefaults$$$($skin$$12$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtAxisDefaults$$, $skin$$12$$)
};
D.$DvtAxis$$.getDefaults = D.$DvtAxis$getDefaults$$;
D.$DvtAxis$$.prototype.Init = function $$DvtAxis$$$$Init$($context$$380$$, $callback$$80$$, $callbackObj$$53$$) {
  D.$DvtAxis$$.$superclass$.Init.call(this, $context$$380$$, $callback$$80$$, $callbackObj$$53$$);
  this.$Defaults$ = new D.$DvtAxisDefaults$$;
  this.$_eventHandler$ = new D.$DvtAxisEventManager$$(this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtAxis$$.prototype.$SetOptions$ = function $$DvtAxis$$$$$SetOptions$$($options$$31$$) {
  $options$$31$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$31$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtAxis$$.prototype.$getPreferredSize$ = function $$DvtAxis$$$$$getPreferredSize$$($dims$$21_options$$32$$, $maxWidth$$11$$, $maxHeight$$8$$) {
  this.$SetOptions$($dims$$21_options$$32$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  this.$render$(D.$JSCompiler_alias_NULL$$, $maxWidth$$11$$, $maxHeight$$8$$);
  $dims$$21_options$$32$$ = this.$getDimensions$();
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  var $extraWidth_position$$22$$ = this.$__getOptions$().position;
  if("top" == $extraWidth_position$$22$$ || "bottom" == $extraWidth_position$$22$$) {
    return $dims$$21_options$$32$$.$h$ <= $maxHeight$$8$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$), new D.$DvtDimension$$($maxWidth$$11$$, window.Math.min($dims$$21_options$$32$$.$h$, $maxHeight$$8$$))
  }
  $extraWidth_position$$22$$ = 0 < $dims$$21_options$$32$$.$w$ ? window.Math.max(1, 0.1 * $dims$$21_options$$32$$.$w$) : 0;
  $dims$$21_options$$32$$.$w$ + $extraWidth_position$$22$$ <= $maxWidth$$11$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$);
  return new D.$DvtDimension$$(window.Math.min($dims$$21_options$$32$$.$w$ + $extraWidth_position$$22$$, $maxWidth$$11$$), $maxHeight$$8$$)
};
D.$DvtAxis$$.prototype.$render$ = function $$DvtAxis$$$$$render$$($options$$33$$, $width$$54$$, $height$$47$$, $x$$178$$, $y$$150$$) {
  this.$SetOptions$($options$$33$$);
  this.$Width$ = $width$$54$$;
  this.$Height$ = $height$$47$$;
  this.$removeChildren$();
  $x$$178$$ || ($x$$178$$ = 0);
  $y$$150$$ || ($y$$150$$ = 0);
  D.$DvtAxisRenderer$$.$render$(this, new D.$DvtRectangle$$($x$$178$$, $y$$150$$, $width$$54$$, $height$$47$$))
};
D.$DvtAxis$$.prototype.render = D.$DvtAxis$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$269$$, $source$$11$$) {
  this === $source$$11$$ && this.$__dispatchEvent$($event$$269$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$_eventHandler$ && (this.$_eventHandler$.$removeListeners$(this), this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtAxis$$.$superclass$.$destroy$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new D.$DvtAxisAutomation$$(this)
};
D.$DvtAxis$$.prototype.getAutomation = D.$DvtAxis$$.prototype.$getAutomation$;
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
D.$DvtAxisAutomation$$ = function $$DvtAxisAutomation$$$($dvtComponent$$5$$) {
  this.$_axis$ = $dvtComponent$$5$$;
  this.$_options$ = this.$_axis$.$__getOptions$();
  this.$_axisInfo$ = this.$_axis$.$Info$
};
(0,D.$goog$exportSymbol$$)("DvtAxisAutomation", D.$DvtAxisAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisAutomation$$, D.$DvtAutomation$$, "DvtAxisAutomation");
D.$DvtAxisAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtAxisAutomation$$$$$GetSubIdForDomElement$$($displayable$$76_group$$30_logicalObj$$18$$) {
  if(($displayable$$76_group$$30_logicalObj$$18$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_axis$.$__getEventManager$(), $displayable$$76_group$$30_logicalObj$$18$$)) && $displayable$$76_group$$30_logicalObj$$18$$ instanceof D.$DvtSimpleObjPeer$$ && this.$_options$.groups) {
    $displayable$$76_group$$30_logicalObj$$18$$ = $displayable$$76_group$$30_logicalObj$$18$$.$getParams$().id;
    for(var $g$$24$$ = 0;$g$$24$$ < this.$_options$.groups.length;$g$$24$$++) {
      if(this.$_options$.groups[$g$$24$$] == $displayable$$76_group$$30_logicalObj$$18$$) {
        return"item[" + $g$$24$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtAxisAutomation$$$$$getDomElementForSubId$$($groupIndex$$45_subId$$17$$) {
  if(this.$_axisInfo$ instanceof D.$DvtGroupAxisInfo$$) {
    var $openParen$$3$$ = $groupIndex$$45_subId$$17$$.indexOf("["), $closeParen$$3$$ = $groupIndex$$45_subId$$17$$.indexOf("]");
    if(0 < $openParen$$3$$ && 0 < $closeParen$$3$$) {
      return $groupIndex$$45_subId$$17$$ = $groupIndex$$45_subId$$17$$.substring($openParen$$3$$ + 1, $closeParen$$3$$), this.$_axisInfo$.$getLabels$(this.$_axis$.$_context$)[$groupIndex$$45_subId$$17$$].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.getDomElementForSubId = D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtAxisDefaults$$ = function $$DvtAxisDefaults$$$() {
  this.Init({skyros:D.$DvtAxisDefaults$VERSION_1$$, alta:D.$DvtAxisDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAxisDefaults");
D.$DvtAxisDefaults$SKIN_ALTA$$ = {axisLine:{lineColor:"#9E9E9E"}, majorTick:{lineColor:"rgba(196,206,215,0.4)"}, minorTick:{lineColor:"rgba(196,206,215,0.2)"}, tickLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")};
D.$DvtAxisDefaults$VERSION_1$$ = {position:D.$JSCompiler_alias_NULL$$, baselineScaling:"zero", axisLine:{lineColor:"#8A8DAC", lineWidth:1, rendered:"on"}, majorTick:{lineColor:"rgba(138,141,172,0.4)", lineWidth:1, rendered:"auto", lineStyle:"solid"}, minorTick:{lineColor:"rgba(138,141,172,0.20)", lineWidth:1, rendered:"off", lineStyle:"solid"}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), rotation:"auto", rendered:"on"}, titleStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #737373;"), 
startGroupOffset:0, endGroupOffset:0, layout:{gapRatio:1, titleGap:4, verticalAxisGap:3, horizontalAxisGap:5}, _useBaselineColor:D.$JSCompiler_alias_FALSE$$, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtAxisEventManager$$ = function $$DvtAxisEventManager$$$($axis$$35$$) {
  this.Init($axis$$35$$.$_context$, $axis$$35$$.$processEvent$, $axis$$35$$);
  this.$_axis$ = $axis$$35$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisEventManager$$, D.$DvtEventManager$$, "DvtAxisEventManager");
D.$DvtAxisEventManager$$.prototype.$FireUIEvent$ = function $$DvtAxisEventManager$$$$$FireUIEvent$$($type$$218$$, $logicalObj$$19$$) {
  $logicalObj$$19$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$19$$.$getParams$() != D.$JSCompiler_alias_NULL$$ && this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$218$$, $logicalObj$$19$$.$getParams$()), this.$_axis$)
};
D.$DvtAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisRenderer$$, D.$DvtObj$$, "DvtAxisRenderer");
D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ = 5;
D.$DvtAxisRenderer$$.$render$ = function $$DvtAxisRenderer$$$$render$$($axis$$36$$, $availSpace$$109$$) {
  var $options$$239$$ = $axis$$36$$.$__getOptions$(), $axisInfo$$3$$ = (0,D.$DvtAxisInfo$newInstance$$)($axis$$36$$.$_context$, $options$$239$$, $availSpace$$109$$);
  $axis$$36$$.$Info$ = $axisInfo$$3$$;
  "off" != $options$$239$$.rendered && ($axis$$36$$.$__setBounds$($availSpace$$109$$.clone()), D.$DvtAxisRenderer$$.$_renderTitle$($axis$$36$$, $axisInfo$$3$$, $availSpace$$109$$), D.$DvtAxisRenderer$$.$_renderLabels$($axis$$36$$, $axisInfo$$3$$, $availSpace$$109$$))
};
D.$DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($axis$$37_title$$11$$, $axisInfo$$4_position$$49$$, $availSpace$$110$$) {
  var $gap$$22_options$$240$$ = $axis$$37_title$$11$$.$__getOptions$();
  if($gap$$22_options$$240$$.title && ($axisInfo$$4_position$$49$$ = $gap$$22_options$$240$$.position, !("radial" == $axisInfo$$4_position$$49$$ || "tangential" == $axisInfo$$4_position$$49$$))) {
    if($gap$$22_options$$240$$.isLayout && "bottom" == $axisInfo$$4_position$$49$$ && ($axisInfo$$4_position$$49$$ = "top"), $axis$$37_title$$11$$ = "top" == $axisInfo$$4_position$$49$$ || "bottom" == $axisInfo$$4_position$$49$$ ? D.$DvtAxisRenderer$$.$_createText$($axis$$37_title$$11$$.$__getEventManager$(), $axis$$37_title$$11$$, $gap$$22_options$$240$$.title, $gap$$22_options$$240$$.titleStyle, $availSpace$$110$$.$w$, $availSpace$$110$$.$h$) : D.$DvtAxisRenderer$$.$_createText$($axis$$37_title$$11$$.$__getEventManager$(), 
    $axis$$37_title$$11$$, $gap$$22_options$$240$$.title, $gap$$22_options$$240$$.titleStyle, $availSpace$$110$$.$h$, $availSpace$$110$$.$w$)) {
      var $titleDims$$2$$ = $axis$$37_title$$11$$.$measureDimensions$(), $gap$$22_options$$240$$ = window.Math.ceil($gap$$22_options$$240$$.layout.titleGap * $gap$$22_options$$240$$.layout.gapRatio);
      "top" == $axisInfo$$4_position$$49$$ ? ($axis$$37_title$$11$$.$setX$($availSpace$$110$$.x + $availSpace$$110$$.$w$ / 2 - $titleDims$$2$$.$w$ / 2), $axis$$37_title$$11$$.$setY$($availSpace$$110$$.y), $availSpace$$110$$.y += $titleDims$$2$$.$h$ + $gap$$22_options$$240$$, $availSpace$$110$$.$h$ -= $titleDims$$2$$.$h$ + $gap$$22_options$$240$$) : "bottom" == $axisInfo$$4_position$$49$$ ? ($axis$$37_title$$11$$.$setX$($availSpace$$110$$.x + $availSpace$$110$$.$w$ / 2 - $titleDims$$2$$.$w$ / 2), 
      $axis$$37_title$$11$$.$setY$($availSpace$$110$$.y + $availSpace$$110$$.$h$ - $titleDims$$2$$.$h$), $availSpace$$110$$.$h$ -= $titleDims$$2$$.$h$ + $gap$$22_options$$240$$) : "left" == $axisInfo$$4_position$$49$$ ? ($axis$$37_title$$11$$.$setRotation$(3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($axis$$37_title$$11$$, $availSpace$$110$$.x, $availSpace$$110$$.y + $availSpace$$110$$.$h$ / 2 + $titleDims$$2$$.$w$ / 2), $availSpace$$110$$.x += $titleDims$$2$$.$h$ + $gap$$22_options$$240$$, 
      $availSpace$$110$$.$w$ -= $titleDims$$2$$.$h$ + $gap$$22_options$$240$$) : "right" == $axisInfo$$4_position$$49$$ && ($axis$$37_title$$11$$.$setRotation$(3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($axis$$37_title$$11$$, $availSpace$$110$$.x + $availSpace$$110$$.$w$ - $titleDims$$2$$.$h$, $availSpace$$110$$.y + $availSpace$$110$$.$h$ / 2 + $titleDims$$2$$.$w$ / 2), $availSpace$$110$$.$w$ -= $titleDims$$2$$.$h$ + $gap$$22_options$$240$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($axis$$38$$, $axisInfo$$5$$, $availSpace$$111$$) {
  var $options$$241_position$$50$$ = $axis$$38$$.$__getOptions$();
  "on" == $options$$241_position$$50$$.tickLabel.rendered && ($options$$241_position$$50$$ = $options$$241_position$$50$$.position, "top" == $options$$241_position$$50$$ || "bottom" == $options$$241_position$$50$$ ? D.$DvtAxisRenderer$$.$_renderLabelsHoriz$($axis$$38$$, $axisInfo$$5$$, $availSpace$$111$$) : "tangential" == $options$$241_position$$50$$ ? D.$DvtAxisRenderer$$.$_renderLabelsTangent$($axis$$38$$, $axisInfo$$5$$, $availSpace$$111$$) : D.$DvtAxisRenderer$$.$_renderLabelsVert$($axis$$38$$, 
  $axisInfo$$5$$, $availSpace$$111$$))
};
D.$DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($axis$$39$$, $axisInfo$$6_lv2Labels$$, $availSpace$$112$$) {
  for(var $labels$$18$$ = $axisInfo$$6_lv2Labels$$.$getLabels$($axis$$39$$.$_context$), $isLayout$$1_offset$$37$$ = $axis$$39$$.$__getOptions$().isLayout, $maxLv1Height$$ = 0, $isRTL$$26$$ = D.$DvtAgent$$.$isRightToLeft$($axis$$39$$.$_context$), $i$$805$$ = 0;$i$$805$$ < $labels$$18$$.length;$i$$805$$++) {
    var $label$$74$$ = $labels$$18$$[$i$$805$$];
    if($label$$74$$ != D.$JSCompiler_alias_NULL$$) {
      if($axisInfo$$6_lv2Labels$$.$isLabelRotated$()) {
        !$isLayout$$1_offset$$37$$ && $axis$$39$$.$_labelTruncationNeeded$ && ($label$$74$$ = D.$DvtTextUtils$$.$fitText$($label$$74$$, $availSpace$$112$$.$h$, $availSpace$$112$$.$w$, $axis$$39$$) ? $label$$74$$ : D.$JSCompiler_alias_NULL$$);
        if(!$label$$74$$) {
          continue
        }
        $isRTL$$26$$ ? $label$$74$$.$alignLeft$() : $label$$74$$.$alignRight$();
        $label$$74$$.$setTranslateY$($availSpace$$112$$.y)
      }else {
        $label$$74$$.$alignTop$(), $label$$74$$.$setY$($availSpace$$112$$.y)
      }
      $axis$$39$$.$__getEventManager$().$associate$($label$$74$$, new D.$DvtSimpleObjPeer$$($label$$74$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$74$$.$getTextString$()}));
      $axis$$39$$.$addChild$($label$$74$$);
      $maxLv1Height$$ = window.Math.max($maxLv1Height$$, D.$DvtTextUtils$$.$guessTextDimensions$($label$$74$$).$h$)
    }
  }
  $axisInfo$$6_lv2Labels$$ = $axisInfo$$6_lv2Labels$$.$getLabels$($axis$$39$$.$_context$, 1);
  $isLayout$$1_offset$$37$$ = 0;
  if($axisInfo$$6_lv2Labels$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$805$$ = 0;$i$$805$$ < $axisInfo$$6_lv2Labels$$.length;$i$$805$$++) {
      $label$$74$$ = $axisInfo$$6_lv2Labels$$[$i$$805$$], $label$$74$$ != D.$JSCompiler_alias_NULL$$ && ($axis$$39$$.$__getEventManager$().$associate$($label$$74$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$74$$.$getTextString$()})), $labels$$18$$[$i$$805$$] != D.$JSCompiler_alias_NULL$$ && ($isLayout$$1_offset$$37$$ = $labels$$18$$[$i$$805$$].$measureDimensions$().$w$ / 2), $isRTL$$26$$ ? 
      $label$$74$$.$setX$($label$$74$$.$getX$() + $isLayout$$1_offset$$37$$) : $label$$74$$.$setX$($label$$74$$.$getX$() - $isLayout$$1_offset$$37$$), $label$$74$$.$alignTop$(), $label$$74$$.$setY$($availSpace$$112$$.y + $maxLv1Height$$), $axis$$39$$.$addChild$($label$$74$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($axis$$40$$, $axisInfo$$7$$, $availSpace$$113$$) {
  var $i$$806_isRTL$$27_options$$242$$ = $axis$$40$$.$__getOptions$(), $isLayout$$2$$ = $i$$806_isRTL$$27_options$$242$$.isLayout, $alwaysAlignRight_formatLabelVert$$ = $i$$806_isRTL$$27_options$$242$$._alwaysAlignRight, $position$$51$$ = $i$$806_isRTL$$27_options$$242$$.position, $i$$806_isRTL$$27_options$$242$$ = D.$DvtAgent$$.$isRightToLeft$($axis$$40$$.$_context$), $isAlignLeft$$ = "radial" == $position$$51$$ && $i$$806_isRTL$$27_options$$242$$ || $isLayout$$2$$ && "left" == $position$$51$$ || 
  !$alwaysAlignRight_formatLabelVert$$ && !$isLayout$$2$$ && "right" == $position$$51$$, $labelX$$5$$;
  "radial" == $position$$51$$ ? ($labelX$$5$$ = $availSpace$$113$$.x + $availSpace$$113$$.$w$ / 2, $labelX$$5$$ += D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ * ($i$$806_isRTL$$27_options$$242$$ ? 1 : -1)) : $labelX$$5$$ = $isAlignLeft$$ ? $availSpace$$113$$.x : $availSpace$$113$$.x + $availSpace$$113$$.$w$;
  for(var $alwaysAlignRight_formatLabelVert$$ = function $$alwaysAlignRight_formatLabelVert$$$($i$$806_isRTL$$27_options$$242$$) {
    !$isLayout$$2$$ && $axis$$40$$.$_labelTruncationNeeded$ && ($i$$806_isRTL$$27_options$$242$$ = D.$DvtTextUtils$$.$fitText$($i$$806_isRTL$$27_options$$242$$, $availSpace$$113$$.$w$, $availSpace$$113$$.$h$, $axis$$40$$) ? $i$$806_isRTL$$27_options$$242$$ : D.$JSCompiler_alias_NULL$$);
    if($i$$806_isRTL$$27_options$$242$$) {
      $axis$$40$$.$__getEventManager$().$associate$($i$$806_isRTL$$27_options$$242$$, new D.$DvtSimpleObjPeer$$($i$$806_isRTL$$27_options$$242$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$i$$806_isRTL$$27_options$$242$$.$getTextString$()}));
      $i$$806_isRTL$$27_options$$242$$.$setX$($labelX$$5$$);
      $isAlignLeft$$ ? $i$$806_isRTL$$27_options$$242$$.$alignLeft$() : $i$$806_isRTL$$27_options$$242$$.$alignRight$();
      if("radial" == $position$$51$$) {
        var $alwaysAlignRight_formatLabelVert$$ = $i$$806_isRTL$$27_options$$242$$.$getY$();
        $i$$806_isRTL$$27_options$$242$$.$setY$($availSpace$$113$$.y + $availSpace$$113$$.$h$ / 2 - $alwaysAlignRight_formatLabelVert$$);
        var $labels$$19_lv2Labels$$1$$ = $i$$806_isRTL$$27_options$$242$$.$getDimensions$(), $label$$75$$ = 0.15 * $labels$$19_lv2Labels$$1$$.$h$, $alwaysAlignRight_formatLabelVert$$ = $alwaysAlignRight_formatLabelVert$$ + $labels$$19_lv2Labels$$1$$.$h$ / 2 > $axisInfo$$7$$.$getEndCoord$() && "circle" == $axis$$40$$.$__getOptions$().polarGridShape ? 1 : 0.3, $labels$$19_lv2Labels$$1$$ = window.DvtPathUtils.$roundedRectangle$($labels$$19_lv2Labels$$1$$.x - $label$$75$$, $labels$$19_lv2Labels$$1$$.y, 
        $labels$$19_lv2Labels$$1$$.$w$ + 2 * $label$$75$$, $labels$$19_lv2Labels$$1$$.$h$, 2, 2, 2, 2), $labels$$19_lv2Labels$$1$$ = new D.$DvtPath$$($axis$$40$$.$_context$, $labels$$19_lv2Labels$$1$$);
        $labels$$19_lv2Labels$$1$$.$setSolidFill$("#FFFFFF", $alwaysAlignRight_formatLabelVert$$);
        $axis$$40$$.$addChild$($labels$$19_lv2Labels$$1$$)
      }
      $axis$$40$$.$addChild$($i$$806_isRTL$$27_options$$242$$)
    }
  }, $labels$$19_lv2Labels$$1$$ = $axisInfo$$7$$.$getLabels$($axis$$40$$.$_context$), $i$$806_isRTL$$27_options$$242$$ = 0;$i$$806_isRTL$$27_options$$242$$ < $labels$$19_lv2Labels$$1$$.length;$i$$806_isRTL$$27_options$$242$$++) {
    var $label$$75$$ = $labels$$19_lv2Labels$$1$$[$i$$806_isRTL$$27_options$$242$$];
    $label$$75$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$75$$)
  }
  $labels$$19_lv2Labels$$1$$ = $axisInfo$$7$$.$getLabels$($axis$$40$$.$_context$, 1);
  if($labels$$19_lv2Labels$$1$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$806_isRTL$$27_options$$242$$ = 0;$i$$806_isRTL$$27_options$$242$$ < $labels$$19_lv2Labels$$1$$.length;$i$$806_isRTL$$27_options$$242$$++) {
      $label$$75$$ = $labels$$19_lv2Labels$$1$$[$i$$806_isRTL$$27_options$$242$$], $label$$75$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$75$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($axis$$41$$, $axisInfo$$8_labels$$20$$, $availSpace$$114$$) {
  $axisInfo$$8_labels$$20$$ = $axisInfo$$8_labels$$20$$.$getLabels$($axis$$41$$.$_context$);
  for(var $i$$807$$ = 0;$i$$807$$ < $axisInfo$$8_labels$$20$$.length;$i$$807$$++) {
    var $label$$77$$ = $axisInfo$$8_labels$$20$$[$i$$807$$];
    if($label$$77$$ != D.$JSCompiler_alias_NULL$$) {
      var $textBefore$$ = $label$$77$$.$getTextString$();
      $axis$$41$$.$__getEventManager$().$associate$($label$$77$$, new D.$DvtSimpleObjPeer$$($label$$77$$.$isTruncated$() ? $textBefore$$ : D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$textBefore$$}));
      $label$$77$$.$setTranslateX$($availSpace$$114$$.x + $availSpace$$114$$.$w$ / 2);
      $label$$77$$.$setTranslateY$($availSpace$$114$$.y + $availSpace$$114$$.$h$ / 2);
      $axis$$41$$.$addChild$($label$$77$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($eventManager$$33$$, $container$$162$$, $text$$100_textString$$12$$, $cssStyle$$38$$, $width$$155$$, $height$$134$$) {
  var $params$$54$$ = {type:D.$DvtAxisConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$};
  $text$$100_textString$$12$$ = new D.$DvtOutputText$$($container$$162$$.$_context$, $text$$100_textString$$12$$, 0, 0);
  $text$$100_textString$$12$$.$setCSSStyle$($cssStyle$$38$$);
  return D.$DvtTextUtils$$.$fitText$($text$$100_textString$$12$$, $width$$155$$, $height$$134$$, $container$$162$$) ? ($eventManager$$33$$.$associate$($text$$100_textString$$12$$, new D.$DvtSimpleObjPeer$$($text$$100_textString$$12$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$54$$)), $text$$100_textString$$12$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisInfo$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAxisInfo$$, D.$DvtObj$$, "DvtAxisInfo");
D.$DvtAxisInfo$newInstance$$ = function $$DvtAxisInfo$newInstance$$$($context$$679$$, $options$$232$$, $availSpace$$103$$) {
  return $options$$232$$.timeAxisType && "disabled" != $options$$232$$.timeAxisType ? new D.$DvtTimeAxisInfo$$($context$$679$$, $options$$232$$, $availSpace$$103$$) : (0,window.isNaN)($options$$232$$.dataMin) && (0,window.isNaN)($options$$232$$.dataMax) ? new D.$DvtGroupAxisInfo$$($context$$679$$, $options$$232$$, $availSpace$$103$$) : new D.$DvtDataAxisInfo$$($context$$679$$, $options$$232$$, $availSpace$$103$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$680$$, $options$$233$$, $availSpace$$104$$) {
  this.$_context$ = $context$$680$$;
  this.$Position$ = $options$$233$$.position;
  this.$_radius$ = $options$$233$$._radius;
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$104$$.x, this.$EndCoord$ = $availSpace$$104$$.x + $availSpace$$104$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$104$$.y, this.$EndCoord$ = $availSpace$$104$$.y + $availSpace$$104$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && (D.$DvtAgent$$.$isRightToLeft$($context$$680$$) ? 
  (this.$StartCoord$ = 2 * window.Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * window.Math.PI));
  this.$MinViewportExtent$ = this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = D.$JSCompiler_alias_NULL$$;
  this.$EndOverflow$ = this.$StartOverflow$ = 0;
  $options$$233$$.leftBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$233$$.leftBuffer = window.Infinity);
  $options$$233$$.rightBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$233$$.rightBuffer = window.Infinity);
  this.$Options$ = $options$$233$$
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
D.$JSCompiler_prototypeAlias$$.$CreateLabel$ = function $$JSCompiler_prototypeAlias$$$$CreateLabel$$($context$$685_text$$95$$, $label$$70$$, $coord$$14$$) {
  if("tangential" == this.$Position$) {
    var $vTol$$ = 16 / 180 * window.Math.PI, $hTol$$ = 1 / 180 * window.Math.PI, $dist$$2$$ = this.$_radius$ + 5;
    if($coord$$14$$ < $hTol$$ || $coord$$14$$ > 2 * window.Math.PI - $hTol$$) {
      $dist$$2$$ += 5
    }
    $context$$685_text$$95$$ = new D.$DvtOutputText$$($context$$685_text$$95$$, $label$$70$$, $dist$$2$$ * window.Math.sin($coord$$14$$), -$dist$$2$$ * window.Math.cos($coord$$14$$));
    $coord$$14$$ < $hTol$$ || window.Math.abs($coord$$14$$ - window.Math.PI) < $hTol$$ || $coord$$14$$ > 2 * window.Math.PI - $hTol$$ ? $context$$685_text$$95$$.$alignCenter$() : $coord$$14$$ < window.Math.PI ? $context$$685_text$$95$$.$alignLeft$() : $context$$685_text$$95$$.$alignRight$();
    window.Math.abs($coord$$14$$ - window.Math.PI / 2) < $vTol$$ || window.Math.abs($coord$$14$$ - 3 * window.Math.PI / 2) < $vTol$$ ? $context$$685_text$$95$$.$alignMiddle$() : $coord$$14$$ < window.Math.PI / 2 || $coord$$14$$ > 3 * window.Math.PI / 2 ? $context$$685_text$$95$$.$alignBottom$() : $context$$685_text$$95$$.$alignTop$()
  }else {
    $context$$685_text$$95$$ = new D.$DvtOutputText$$($context$$685_text$$95$$, $label$$70$$, $coord$$14$$, $coord$$14$$), $context$$685_text$$95$$.$alignMiddle$(), $context$$685_text$$95$$.$alignCenter$()
  }
  $context$$685_text$$95$$.$setCSSStyle$(this.$Options$.tickLabel.style);
  return $context$$685_text$$95$$
};
D.$JSCompiler_StaticMethods_CreateGridLine$$ = function $$JSCompiler_StaticMethods_CreateGridLine$$$($JSCompiler_StaticMethods_CreateGridLine$self$$, $context$$686_line$$16$$, $stroke$$111$$, $coord$$15_points$$73$$) {
  var $usePixelHinting$$ = !D.$DvtAgent$$.$isTouchDevice$() || 1 < D.$DvtAgent$$.$getDevicePixelRatio$();
  "radial" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ("polygon" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$.polarGridShape ? ($coord$$15_points$$73$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$(0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$._numGroups, $coord$$15_points$$73$$), $context$$686_line$$16$$ = new D.$DvtPolygon$$($context$$686_line$$16$$, $coord$$15_points$$73$$)) : $context$$686_line$$16$$ = new D.$DvtCircle$$($context$$686_line$$16$$, 
  0, 0, $coord$$15_points$$73$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$686_line$$16$$)) : "tangential" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ($context$$686_line$$16$$ = new D.$DvtLine$$($context$$686_line$$16$$, 0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.sin($coord$$15_points$$73$$), -$JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.cos($coord$$15_points$$73$$)), 0.01 > $coord$$15_points$$73$$ % 
  window.Math.PI / 2 && $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$686_line$$16$$)) : ($context$$686_line$$16$$ = new D.$DvtLine$$($context$$686_line$$16$$, $coord$$15_points$$73$$, $coord$$15_points$$73$$, $coord$$15_points$$73$$, $coord$$15_points$$73$$), $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$686_line$$16$$));
  $context$$686_line$$16$$.$setStroke$($stroke$$111$$);
  $context$$686_line$$16$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$686_line$$16$$
};
D.$JSCompiler_StaticMethods_IsOverlapping$$ = function $$JSCompiler_StaticMethods_IsOverlapping$$$($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$, $labelDims$$4$$, $skippedLabels$$) {
  if(!$labelDims$$4$$ || 0 >= $labelDims$$4$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $fontSize$$13_isVert$$2$$ = (0,window.parseInt)($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$Options$.tickLabel.style.$getStyle$("font-size")), $gap$$18_gapHoriz$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ instanceof D.$DvtDataAxisInfo$$ ? 0.55 * $fontSize$$13_isVert$$2$$ : 0.3 * $fontSize$$13_isVert$$2$$, $gapVert_pointB1$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ instanceof D.$DvtDataAxisInfo$$ ? 0.35 * $fontSize$$13_isVert$$2$$ : 0.1 * $fontSize$$13_isVert$$2$$, 
  $gap$$18_gapHoriz$$ = ($fontSize$$13_isVert$$2$$ = "left" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$Position$ || "right" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$Position$ || "radial" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$Position$) || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$isLabelRotated$() ? $gapVert_pointB1$$ : $gap$$18_gapHoriz$$;
  $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$_context$);
  for(var $pointA1$$, $pointA2$$, $pointB2$$, $j$$108$$ = 0;$j$$108$$ < $labelDims$$4$$.length;$j$$108$$ += $skippedLabels$$ + 1) {
    if($labelDims$$4$$[$j$$108$$] != D.$JSCompiler_alias_NULL$$) {
      if($pointA1$$ == D.$JSCompiler_alias_NULL$$ || $pointA2$$ == D.$JSCompiler_alias_NULL$$) {
        $fontSize$$13_isVert$$2$$ ? ($pointA1$$ = $labelDims$$4$$[$j$$108$$].y, $pointA2$$ = $labelDims$$4$$[$j$$108$$].y + $labelDims$$4$$[$j$$108$$].$h$) : ($pointA1$$ = $labelDims$$4$$[$j$$108$$].x, $pointA2$$ = $labelDims$$4$$[$j$$108$$].x + $labelDims$$4$$[$j$$108$$].$w$)
      }else {
        if($fontSize$$13_isVert$$2$$) {
          if($gapVert_pointB1$$ = $labelDims$$4$$[$j$$108$$].y, $pointB2$$ = $labelDims$$4$$[$j$$108$$].y + $labelDims$$4$$[$j$$108$$].$h$, $gapVert_pointB1$$ >= $pointA1$$ && $gapVert_pointB1$$ - $gap$$18_gapHoriz$$ < $pointA2$$ || $gapVert_pointB1$$ < $pointA1$$ && $pointB2$$ + $gap$$18_gapHoriz$$ > $pointA1$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }else {
          if($gapVert_pointB1$$ = $labelDims$$4$$[$j$$108$$].x, $pointB2$$ = $labelDims$$4$$[$j$$108$$].x + $labelDims$$4$$[$j$$108$$].$w$, !$JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ && $gapVert_pointB1$$ - $gap$$18_gapHoriz$$ < $pointA2$$ || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ && $pointB2$$ + $gap$$18_gapHoriz$$ > $pointA1$$) {
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
D.$JSCompiler_StaticMethods_SkipLabels$$ = function $$JSCompiler_StaticMethods_SkipLabels$$$($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $labels$$11$$, $j$$109_labelDims$$5$$) {
  for(var $skippedLabels$$1$$ = 0, $bOverlaps$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$109_labelDims$$5$$, $skippedLabels$$1$$);$bOverlaps$$;) {
    $skippedLabels$$1$$++, $bOverlaps$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$109_labelDims$$5$$, $skippedLabels$$1$$)
  }
  if(0 < $skippedLabels$$1$$) {
    $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$ = [];
    for($j$$109_labelDims$$5$$ = 0;$j$$109_labelDims$$5$$ < $labels$$11$$.length;$j$$109_labelDims$$5$$ += $skippedLabels$$1$$ + 1) {
      $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$.push($labels$$11$$[$j$$109_labelDims$$5$$])
    }
    return $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$
  }
  return $labels$$11$$
};
D.$JSCompiler_StaticMethods_GetLabelDims$$ = function $$JSCompiler_StaticMethods_GetLabelDims$$$($labels$$12$$, $container$$157$$) {
  for(var $labelDims$$6$$ = [], $i$$794$$ = 0;$i$$794$$ < $labels$$12$$.length;$i$$794$$++) {
    var $dims$$62_text$$96$$ = $labels$$12$$[$i$$794$$];
    $dims$$62_text$$96$$ == D.$JSCompiler_alias_NULL$$ ? $labelDims$$6$$.push(D.$JSCompiler_alias_NULL$$) : ($dims$$62_text$$96$$ = $dims$$62_text$$96$$.$measureDimensions$($container$$157$$), $labelDims$$6$$.push($dims$$62_text$$96$$))
  }
  return $labelDims$$6$$
};
D.$JSCompiler_StaticMethods_GuessLabelDims$$ = function $$JSCompiler_StaticMethods_GuessLabelDims$$$($JSCompiler_StaticMethods_GuessLabelDims$self$$, $labels$$13$$, $container$$158$$, $fudgeFactor$$) {
  var $labelDims$$7$$ = [];
  "undefined" == typeof $fudgeFactor$$ && ($fudgeFactor$$ = 1);
  for(var $i$$795$$ = 0;$i$$795$$ < $labels$$13$$.length;$i$$795$$++) {
    var $dims$$63_text$$97$$ = $labels$$13$$[$i$$795$$];
    if($dims$$63_text$$97$$ == D.$JSCompiler_alias_NULL$$) {
      $labelDims$$7$$.push(D.$JSCompiler_alias_NULL$$)
    }else {
      $container$$158$$.$addChild$($dims$$63_text$$97$$);
      var $estH_estimatedSize$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$63_text$$97$$), $estW$$ = $estH_estimatedSize$$.$w$ * $fudgeFactor$$, $estH_estimatedSize$$ = $estH_estimatedSize$$.$h$;
      $container$$158$$.removeChild($dims$$63_text$$97$$);
      $dims$$63_text$$97$$ = $JSCompiler_StaticMethods_GuessLabelDims$self$$.$isLabelRotated$() ? new D.$DvtRectangle$$($dims$$63_text$$97$$.$getTranslateX$() - $estH_estimatedSize$$ / 2, $dims$$63_text$$97$$.$getTranslateY$() - $estW$$ / 2, $estH_estimatedSize$$, $estW$$) : new D.$DvtRectangle$$($dims$$63_text$$97$$.$getX$() - $estW$$ / 2, $dims$$63_text$$97$$.$getY$() - $estH_estimatedSize$$ / 2, $estW$$, $estH_estimatedSize$$);
      $labelDims$$7$$.push($dims$$63_text$$97$$)
    }
  }
  return $labelDims$$7$$
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
D.$DvtDataAxisInfo$$ = function $$DvtDataAxisInfo$$$($context$$694$$, $options$$237$$, $availSpace$$107$$) {
  this.Init($context$$694$$, $options$$237$$, $availSpace$$107$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataAxisInfo$$, D.$DvtAxisInfo$$, "DvtDataAxisInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$695_zeroBaseline$$inline_7981$$, $continuousExtent$$inline_7982_options$$238$$, $availSpace$$108_scaleUnit$$inline_7983$$) {
  D.$DvtDataAxisInfo$$.$superclass$.Init.call(this, $context$$695_zeroBaseline$$inline_7981$$, $continuousExtent$$inline_7982_options$$238$$, $availSpace$$108_scaleUnit$$inline_7983$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? ("off" != $continuousExtent$$inline_7982_options$$238$$.tickLabel.rendered && "off" != $continuousExtent$$inline_7982_options$$238$$.rendered && (this.$StartOverflow$ = window.Math.max(10 - $continuousExtent$$inline_7982_options$$238$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $continuousExtent$$inline_7982_options$$238$$.rightBuffer, 0)), D.$DvtAgent$$.$isRightToLeft$($context$$695_zeroBaseline$$inline_7981$$) ? (this.$_minCoord$ = 
  this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
  this.$GlobalMin$ = $continuousExtent$$inline_7982_options$$238$$.min;
  this.$GlobalMax$ = $continuousExtent$$inline_7982_options$$238$$.max;
  this.$MinValue$ = $continuousExtent$$inline_7982_options$$238$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $continuousExtent$$inline_7982_options$$238$$.viewportMin;
  this.$MaxValue$ = $continuousExtent$$inline_7982_options$$238$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $continuousExtent$$inline_7982_options$$238$$.viewportMax;
  this.$_majorIncrement$ = $continuousExtent$$inline_7982_options$$238$$.step;
  this.$_minorIncrement$ = $continuousExtent$$inline_7982_options$$238$$.minorStep;
  this.$_minMajorIncrement$ = $continuousExtent$$inline_7982_options$$238$$.minStep;
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $continuousExtent$$inline_7982_options$$238$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $continuousExtent$$inline_7982_options$$238$$.tickLabel.converter);
  this.$DataMin$ = $continuousExtent$$inline_7982_options$$238$$.dataMin;
  this.$DataMax$ = $continuousExtent$$inline_7982_options$$238$$.dataMax;
  $context$$695_zeroBaseline$$inline_7981$$ = "zero" == this.$Options$.baselineScaling;
  $continuousExtent$$inline_7982_options$$238$$ = "on" == this.$Options$._continuousExtent;
  $context$$695_zeroBaseline$$inline_7981$$ && (this.$DataMin$ = window.Math.min(0, this.$DataMin$), this.$DataMax$ = window.Math.max(0, this.$DataMax$));
  $availSpace$$108_scaleUnit$$inline_7983$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$GlobalMin$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : this.$DataMin$, this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : this.$DataMax$);
  this.$DataMin$ == this.$DataMax$ && (this.$DataMin$ -= 3 * $availSpace$$108_scaleUnit$$inline_7983$$, this.$DataMax$ += 2 * $availSpace$$108_scaleUnit$$inline_7983$$);
  if(this.$GlobalMin$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$695_zeroBaseline$$inline_7981$$ && 0 <= this.$DataMin$) {
      this.$GlobalMin$ = 0
    }else {
      if($continuousExtent$$inline_7982_options$$238$$) {
        this.$GlobalMin$ = this.$DataMin$ - 0.1 * (this.$DataMax$ - this.$DataMin$), 0 <= this.$DataMin$ && (this.$GlobalMin$ = window.Math.max(this.$GlobalMin$, 0))
      }else {
        if(!$context$$695_zeroBaseline$$inline_7981$$ && this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$) {
          for(this.$GlobalMin$ = this.$GlobalMax$;this.$GlobalMin$ > this.$DataMin$;) {
            this.$GlobalMin$ -= $availSpace$$108_scaleUnit$$inline_7983$$
          }
        }else {
          this.$GlobalMin$ = window.Math.floor(this.$DataMin$ / $availSpace$$108_scaleUnit$$inline_7983$$) * $availSpace$$108_scaleUnit$$inline_7983$$
        }
      }
    }
  }
  if(this.$GlobalMax$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$695_zeroBaseline$$inline_7981$$ && 0 >= this.$DataMax$) {
      this.$GlobalMax$ = 0
    }else {
      if($continuousExtent$$inline_7982_options$$238$$) {
        this.$GlobalMax$ = this.$DataMax$ + 0.1 * (this.$DataMax$ - this.$DataMin$), 0 >= this.$DataMax$ && (this.$GlobalMax$ = window.Math.min(this.$GlobalMax$, 0))
      }else {
        if($context$$695_zeroBaseline$$inline_7981$$) {
          this.$GlobalMax$ = (window.Math.floor(this.$DataMax$ / $availSpace$$108_scaleUnit$$inline_7983$$) + 1) * $availSpace$$108_scaleUnit$$inline_7983$$
        }else {
          for(this.$GlobalMax$ = this.$GlobalMin$;this.$GlobalMax$ <= this.$DataMax$;) {
            this.$GlobalMax$ += $availSpace$$108_scaleUnit$$inline_7983$$
          }
        }
      }
    }
  }
  this.$GlobalMax$ == this.$GlobalMin$ && (this.$GlobalMax$ = 100, this.$GlobalMin$ = 0, $availSpace$$108_scaleUnit$$inline_7983$$ = (this.$GlobalMax$ - this.$GlobalMin$) / 10);
  this.$MinValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
  this.$MaxValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
  if(this.$MinValue$ != this.$GlobalMin$ || this.$MaxValue$ != this.$GlobalMax$) {
    $availSpace$$108_scaleUnit$$inline_7983$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$MinValue$, this.$MaxValue$)
  }
  this.$_majorIncrement$ = this.$_majorIncrement$ ? this.$_majorIncrement$ : $availSpace$$108_scaleUnit$$inline_7983$$;
  this.$_minMajorIncrement$ != D.$JSCompiler_alias_NULL$$ && this.$_majorIncrement$ < this.$_minMajorIncrement$ && (this.$_majorIncrement$ = this.$_minMajorIncrement$);
  this.$_majorTickCount$ = (this.$MaxValue$ - this.$getMinLabel$()) / this.$_majorIncrement$;
  this.$_minorIncrement$ != D.$JSCompiler_alias_NULL$$ && 2 <= this.$_majorIncrement$ / this.$_minorIncrement$ ? this.$_minorTickCount$ = this.$_majorIncrement$ / this.$_minorIncrement$ : (this.$_minorTickCount$ = 2, this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$)
};
D.$JSCompiler_prototypeAlias$$.$getMinLabel$ = function $$JSCompiler_prototypeAlias$$$$getMinLabel$$() {
  return"zero" == this.$Options$.baselineScaling || "on" == this.$Options$._continuousExtent && this.$Options$.min == D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(this.$MinValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : window.Math.ceil((this.$MinValue$ - this.$GlobalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$GlobalMin$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$696$$, $levelIdx$$3$$) {
  if($levelIdx$$3$$ && 0 < $levelIdx$$3$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $labels$$17$$ = [], $container$$161_labelDims$$10$$ = [], $container$$161_labelDims$$10$$ = $context$$696$$.$_stage$, $isTangential$$ = "tangential" == this.$Position$;
  this.$Options$.tickLabel && this.$Options$.tickLabel.scaling && (this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$(this.$MinValue$, this.$MaxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on"));
  for(var $i$$802$$ = 0;$i$$802$$ <= this.$_majorTickCount$;$i$$802$$++) {
    var $coord$$20_value$$138$$ = $i$$802$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if(!($isTangential$$ && $coord$$20_value$$138$$ == this.$MaxValue$)) {
      var $label$$73_text$$99$$ = this.$_formatValue$($coord$$20_value$$138$$), $coord$$20_value$$138$$ = this.$getUnboundedCoordAt$($coord$$20_value$$138$$), $label$$73_text$$99$$ = this.$CreateLabel$($context$$696$$, $label$$73_text$$99$$, $coord$$20_value$$138$$);
      $labels$$17$$.push($label$$73_text$$99$$)
    }
  }
  $isTangential$$ || ($container$$161_labelDims$$10$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$17$$, $container$$161_labelDims$$10$$), $labels$$17$$ = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$17$$, $container$$161_labelDims$$10$$));
  return $labels$$17$$
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$697$$) {
  var $axisLineOptions$$2_axisLineStroke$$2$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$2_axisLineStroke$$2$$.rendered ? ($axisLineOptions$$2_axisLineStroke$$2$$ = new D.$DvtSolidStroke$$($axisLineOptions$$2_axisLineStroke$$2$$.lineColor, 1, $axisLineOptions$$2_axisLineStroke$$2$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$697$$, $axisLineOptions$$2_axisLineStroke$$2$$, this.$_maxCoord$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$698$$) {
  var $gridlines$$4$$ = [], $coord$$21_value$$139$$, $line$$17_stroke$$112$$, $baselineStroke_majorTickOptions$$2$$ = this.$Options$.majorTick;
  if("off" == $baselineStroke_majorTickOptions$$2$$.rendered) {
    return $gridlines$$4$$
  }
  var $majorTickStroke$$2$$ = new D.$DvtSolidStroke$$($baselineStroke_majorTickOptions$$2$$.lineColor, 1, $baselineStroke_majorTickOptions$$2$$.lineWidth);
  $baselineStroke_majorTickOptions$$2$$.lineStyle && $majorTickStroke$$2$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($baselineStroke_majorTickOptions$$2$$.lineStyle));
  $baselineStroke_majorTickOptions$$2$$ = $majorTickStroke$$2$$.clone();
  if(this.$Options$._useBaselineColor) {
    var $baselineColor_i$$803$$ = D.$DvtColorUtils$$.$setAlpha$(this.$Options$.axisLine.lineColor, 0.75);
    $baselineStroke_majorTickOptions$$2$$.$setColor$($baselineColor_i$$803$$)
  }
  for($baselineColor_i$$803$$ = 0;$baselineColor_i$$803$$ <= this.$_majorTickCount$;$baselineColor_i$$803$$++) {
    $coord$$21_value$$139$$ = $baselineColor_i$$803$$ * this.$_majorIncrement$ + this.$getMinLabel$(), "tangential" == this.$Position$ && $coord$$21_value$$139$$ == this.$MaxValue$ || ($line$$17_stroke$$112$$ = 0 == $coord$$21_value$$139$$ ? $baselineStroke_majorTickOptions$$2$$ : $majorTickStroke$$2$$, $coord$$21_value$$139$$ = this.$getUnboundedCoordAt$($coord$$21_value$$139$$), $line$$17_stroke$$112$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$698$$, $line$$17_stroke$$112$$, 
    $coord$$21_value$$139$$), $gridlines$$4$$.push($line$$17_stroke$$112$$))
  }
  return $gridlines$$4$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$699$$) {
  var $gridlines$$5$$ = [], $coord$$22_line$$18_minorValue$$, $i$$804_minorTickOptions$$1$$ = this.$Options$.minorTick;
  if("on" != $i$$804_minorTickOptions$$1$$.rendered) {
    return $gridlines$$5$$
  }
  var $minorTickStroke$$1$$ = new D.$DvtSolidStroke$$($i$$804_minorTickOptions$$1$$.lineColor, 1, $i$$804_minorTickOptions$$1$$.lineWidth);
  $i$$804_minorTickOptions$$1$$.lineStyle && $minorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$804_minorTickOptions$$1$$.lineStyle));
  for($i$$804_minorTickOptions$$1$$ = -1;$i$$804_minorTickOptions$$1$$ <= this.$_majorTickCount$;$i$$804_minorTickOptions$$1$$++) {
    for(var $value$$140$$ = $i$$804_minorTickOptions$$1$$ * this.$_majorIncrement$ + this.$getMinLabel$(), $j$$114$$ = 1;$j$$114$$ < this.$_minorTickCount$;$j$$114$$++) {
      $coord$$22_line$$18_minorValue$$ = $value$$140$$ + $j$$114$$ * this.$_minorIncrement$;
      if($coord$$22_line$$18_minorValue$$ > this.$MaxValue$) {
        break
      }
      $coord$$22_line$$18_minorValue$$ < this.$MinValue$ || ($coord$$22_line$$18_minorValue$$ = this.$getUnboundedCoordAt$($coord$$22_line$$18_minorValue$$), $coord$$22_line$$18_minorValue$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$699$$, $minorTickStroke$$1$$, $coord$$22_line$$18_minorValue$$), $gridlines$$5$$.push($coord$$22_line$$18_minorValue$$))
    }
  }
  return $gridlines$$5$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$141$$) {
  return $value$$141$$ < this.$MinValue$ || $value$$141$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$141$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$24$$) {
  var $minCoord$$7$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$7$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$24$$ < $minCoord$$7$$ ? $coord$$24$$ = $minCoord$$7$$ : $coord$$24$$ > $maxCoord$$7$$ && ($coord$$24$$ = $maxCoord$$7$$);
  return this.$getUnboundedValueAt$($coord$$24$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$142$$) {
  $value$$142$$ < this.$MinValue$ ? $value$$142$$ = this.$MinValue$ : $value$$142$$ > this.$MaxValue$ && ($value$$142$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$142$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$25$$) {
  return this.$MinValue$ + ($coord$$25$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$143$$) {
  return this.$_minCoord$ + ($value$$143$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  var $baseline$$9$$ = 0;
  0 > this.$MaxValue$ ? $baseline$$9$$ = this.$MaxValue$ : 0 < this.$MinValue$ && ($baseline$$9$$ = this.$MinValue$);
  return this.$getCoordAt$($baseline$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$_formatValue$ = function $$JSCompiler_prototypeAlias$$$$_formatValue$$($value$$144$$) {
  if(this.$_converter$ && (this.$_converter$.getAsString || this.$_converter$.format)) {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$144$$, this.$_converter$)
    }
    if(this.$_converter$.getAsString) {
      return this.$_converter$.getAsString($value$$144$$)
    }
    if(this.$_converter$.format) {
      return this.$_converter$.format($value$$144$$)
    }
  }else {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$144$$)
    }
    var $decimals_t$$43$$ = window.Math.log(this.$_majorIncrement$) / window.Math.log(10), $decimals_t$$43$$ = window.Math.max(window.Math.ceil(-$decimals_t$$43$$), 0);
    return $value$$144$$.toFixed($decimals_t$$43$$)
  }
};
D.$JSCompiler_StaticMethods__calcAxisScale$$ = function $$JSCompiler_StaticMethods__calcAxisScale$$$($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$, $min$$19_t$$44_testVal$$, $max$$19$$) {
  if($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$) {
    return $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$
  }
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = $max$$19$$ - $min$$19_t$$44_testVal$$;
  if(0 == $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) {
    return 0 == $min$$19_t$$44_testVal$$ ? 10 : window.Math.pow(10, window.Math.floor(window.Math.log($min$$19_t$$44_testVal$$) / window.Math.LN10) - 1)
  }
  $min$$19_t$$44_testVal$$ = window.Math.log($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) / window.Math.log(10);
  $min$$19_t$$44_testVal$$ = window.Math.pow(10, window.Math.ceil($min$$19_t$$44_testVal$$) - 2);
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = window.Math.round($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ / $min$$19_t$$44_testVal$$);
  return(10 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 14 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 2 : 15 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 19 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 3 : 20 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 24 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 4 : 25 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 
  45 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 5 : 46 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 80 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 10 : 20) * $min$$19_t$$44_testVal$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_get$$)("$_majorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$27$$) {
  this.$_majorTickCount$ = $count$$27$$;
  this.$_majorIncrement$ = (this.$MaxValue$ - this.$MinValue$) / this.$_majorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_get$$)("$_minorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$28$$) {
  this.$_minorTickCount$ = $count$$28$$;
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
D.$DvtGroupAxisInfo$$ = function $$DvtGroupAxisInfo$$$($context$$673$$, $options$$230$$, $availSpace$$101$$) {
  this.Init($context$$673$$, $options$$230$$, $availSpace$$101$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGroupAxisInfo$$, D.$DvtAxisInfo$$, "DvtGroupAxisInfo");
D.$DvtGroupAxisInfo$$.prototype.Init = function $$DvtGroupAxisInfo$$$$Init$($context$$674_isRTL$$20$$, $options$$231$$, $availSpace$$102_endOffset$$1_temp$$3$$) {
  D.$DvtGroupAxisInfo$$.$superclass$.Init.call(this, $context$$674_isRTL$$20$$, $options$$231$$, $availSpace$$102_endOffset$$1_temp$$3$$);
  $context$$674_isRTL$$20$$ = D.$DvtAgent$$.$isRightToLeft$($context$$674_isRTL$$20$$);
  if(("top" == this.$Position$ || "bottom" == this.$Position$) && $context$$674_isRTL$$20$$) {
    $availSpace$$102_endOffset$$1_temp$$3$$ = this.$StartCoord$, this.$StartCoord$ = this.$EndCoord$, this.$EndCoord$ = $availSpace$$102_endOffset$$1_temp$$3$$
  }
  this.$_groups$ = $options$$231$$.groups;
  $availSpace$$102_endOffset$$1_temp$$3$$ = 0 < $options$$231$$.endGroupOffset ? (0,window.Number)($options$$231$$.endGroupOffset) : 0;
  var $startOffset$$ = 0 < $options$$231$$.startGroupOffset ? (0,window.Number)($options$$231$$.startGroupOffset) : 0;
  this.$DataMin$ = 0;
  this.$DataMax$ = this.$_groups$.length - 1;
  this.$GlobalMin$ = $options$$231$$.min == D.$JSCompiler_alias_NULL$$ ? this.$DataMin$ - $startOffset$$ : $options$$231$$.min;
  this.$GlobalMax$ = $options$$231$$.max == D.$JSCompiler_alias_NULL$$ ? this.$DataMax$ + $availSpace$$102_endOffset$$1_temp$$3$$ : $options$$231$$.max;
  this.$MinValue$ = $options$$231$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $options$$231$$.viewportMin;
  this.$MaxValue$ = $options$$231$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $options$$231$$.viewportMax;
  var $startIndex$$3$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$231$$.viewportStartGroup), $endIndex$$4$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$231$$.viewportEndGroup);
  -1 != $startIndex$$3$$ && (this.$MinValue$ = $startIndex$$3$$ - $startOffset$$);
  -1 != $endIndex$$4$$ && (this.$MaxValue$ = $endIndex$$4$$ + $availSpace$$102_endOffset$$1_temp$$3$$);
  this.$_startBuffer$ = $context$$674_isRTL$$20$$ ? $options$$231$$.rightBuffer : $options$$231$$.leftBuffer;
  this.$_endBuffer$ = $context$$674_isRTL$$20$$ ? $options$$231$$.leftBuffer : $options$$231$$.rightBuffer;
  this.$_isLabelRotated$ = D.$JSCompiler_alias_FALSE$$;
  this.$_renderGridAtLabels$ = $options$$231$$._renderGridAtLabels;
  this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__rotateLabels$$ = function $$JSCompiler_StaticMethods__rotateLabels$$$($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$8$$, $container$$155_labelDims$$2$$, $overflow$$2_text$$92$$) {
  var $x$$313$$, $isRTL$$21$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__rotateLabels$self$$.$_context$);
  $JSCompiler_StaticMethods__rotateLabels$self$$.$_isLabelRotated$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__setOverflow$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $overflow$$2_text$$92$$, $overflow$$2_text$$92$$, $labels$$8$$);
  for(var $i$$787$$ = 0;$i$$787$$ < $labels$$8$$.length;$i$$787$$++) {
    $overflow$$2_text$$92$$ = $labels$$8$$[$i$$787$$], $overflow$$2_text$$92$$ != D.$JSCompiler_alias_NULL$$ && ($x$$313$$ = $overflow$$2_text$$92$$.$getX$(), $overflow$$2_text$$92$$.$setX$(0), $overflow$$2_text$$92$$.$setY$(0), $isRTL$$21$$ ? $overflow$$2_text$$92$$.$setRotation$(window.Math.PI / 2) : $overflow$$2_text$$92$$.$setRotation$(3 * window.Math.PI / 2), $overflow$$2_text$$92$$.$setTranslateX$($x$$313$$))
  }
  $container$$155_labelDims$$2$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$8$$, $container$$155_labelDims$$2$$);
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$8$$, $container$$155_labelDims$$2$$)
};
D.$DvtGroupAxisInfo$$.prototype.$isLabelRotated$ = (0,D.$JSCompiler_get$$)("$_isLabelRotated$");
D.$JSCompiler_StaticMethods__setOverflow$$ = function $$JSCompiler_StaticMethods__setOverflow$$$($JSCompiler_StaticMethods__setOverflow$self$$, $startOverflow$$, $endOverflow$$, $labels$$9$$) {
  $startOverflow$$ = window.Math.max($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_startBuffer$, 0);
  $endOverflow$$ = window.Math.max($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_endBuffer$, 0);
  var $i$$788_isRTL$$22$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__setOverflow$self$$.$_context$);
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartCoord$ += ($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$) * ($i$$788_isRTL$$22$$ ? -1 : 1);
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndCoord$ -= ($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$) * ($i$$788_isRTL$$22$$ ? -1 : 1);
  for($i$$788_isRTL$$22$$ = 0;$i$$788_isRTL$$22$$ < $labels$$9$$.length;$i$$788_isRTL$$22$$++) {
    var $text$$93$$ = $labels$$9$$[$i$$788_isRTL$$22$$];
    $text$$93$$ && $text$$93$$.$setX$($JSCompiler_StaticMethods__setOverflow$self$$.$getCoordAt$($i$$788_isRTL$$22$$))
  }
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$ = $startOverflow$$;
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$ = $endOverflow$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$675$$, $levelIdx$$) {
  if($levelIdx$$ && 0 < $levelIdx$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_level1Labels$ || (this.$_level1Labels$ = this.$_generateLabels$($context$$675$$));
  return this.$_level1Labels$
};
D.$JSCompiler_prototypeAlias$$.$_generateLabels$ = function $$JSCompiler_prototypeAlias$$$$_generateLabels$$($context$$676_firstLabelDim$$) {
  for(var $labels$$10$$ = [], $container$$156$$ = $context$$676_firstLabelDim$$.$_stage$, $isHoriz$$15$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = D.$DvtAgent$$.$isRightToLeft$($context$$676_firstLabelDim$$), $maxLabelDims$$1_numLabels$$1_startOverflow$$1$$ = this.$_groups$.length, $firstLabel_lastLabelDim$$, $lastLabel_text$$94$$, $i$$789$$ = 0;$i$$789$$ < $maxLabelDims$$1_numLabels$$1_startOverflow$$1$$;$i$$789$$++) {
    var $label$$67$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)(this, $i$$789$$), $coord$$6$$ = this.$getCoordAt$($i$$789$$);
    $coord$$6$$ != D.$JSCompiler_alias_NULL$$ ? ($lastLabel_text$$94$$ = this.$CreateLabel$($context$$676_firstLabelDim$$, $label$$67$$, $coord$$6$$), $labels$$10$$.push($lastLabel_text$$94$$), $firstLabel_lastLabelDim$$ || ($firstLabel_lastLabelDim$$ = $lastLabel_text$$94$$)) : $labels$$10$$.push(D.$JSCompiler_alias_NULL$$)
  }
  if("tangential" == this.$Position$) {
    return $labels$$10$$
  }
  $context$$676_firstLabelDim$$ = $firstLabel_lastLabelDim$$.$measureDimensions$();
  $isHoriz$$15$$ && (this.$Options$._startOverflow != D.$JSCompiler_alias_NULL$$ && this.$Options$._endOverflow != D.$JSCompiler_alias_NULL$$ ? ($maxLabelDims$$1_numLabels$$1_startOverflow$$1$$ = this.$Options$._startOverflow, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = this.$Options$._endOverflow) : ($firstLabel_lastLabelDim$$ = $lastLabel_text$$94$$.$measureDimensions$(), $maxLabelDims$$1_numLabels$$1_startOverflow$$1$$ = $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ ? 
  $context$$676_firstLabelDim$$.$w$ + $context$$676_firstLabelDim$$.x - this.$StartCoord$ : this.$StartCoord$ - $context$$676_firstLabelDim$$.x, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ ? this.$EndCoord$ - $firstLabel_lastLabelDim$$.x : $firstLabel_lastLabelDim$$.$w$ + $firstLabel_lastLabelDim$$.x - this.$EndCoord$), ($maxLabelDims$$1_numLabels$$1_startOverflow$$1$$ > this.$_startBuffer$ || $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ > 
  this.$_endBuffer$) && (0,D.$JSCompiler_StaticMethods__setOverflow$$)(this, $maxLabelDims$$1_numLabels$$1_startOverflow$$1$$, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$, $labels$$10$$));
  $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = [];
  $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$10$$, $container$$156$$, 0.3);
  $maxLabelDims$$1_numLabels$$1_startOverflow$$1$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$10$$, $container$$156$$);
  if(!(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $maxLabelDims$$1_numLabels$$1_startOverflow$$1$$, 0)) {
    return $labels$$10$$
  }
  if($isHoriz$$15$$) {
    if("auto" == this.$Options$.tickLabel.rotation) {
      if((0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$, 0)) {
        return(0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$10$$, $container$$156$$, $context$$676_firstLabelDim$$.$h$ / 2)
      }
      $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$10$$, $container$$156$$);
      return(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$, 0) ? (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$10$$, $container$$156$$, $context$$676_firstLabelDim$$.$h$ / 2) : $labels$$10$$
    }
    $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$10$$, $container$$156$$);
    return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$10$$, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$)
  }
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$10$$, $maxLabelDims$$1_numLabels$$1_startOverflow$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$677$$) {
  var $axisLineOptions_axisLineStroke$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions_axisLineStroke$$.rendered ? ($axisLineOptions_axisLineStroke$$ = new D.$DvtSolidStroke$$($axisLineOptions_axisLineStroke$$.lineColor, 1, $axisLineOptions_axisLineStroke$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$677$$, $axisLineOptions_axisLineStroke$$, 0)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$678$$) {
  var $gridlines$$1$$ = [], $coord$$7_line$$15$$, $majorTickOptions_numGroups$$2_rendered$$4$$ = this.$Options$.majorTick, $majorTickStroke$$ = new D.$DvtSolidStroke$$($majorTickOptions_numGroups$$2_rendered$$4$$.lineColor, 1, $majorTickOptions_numGroups$$2_rendered$$4$$.lineWidth);
  $majorTickOptions_numGroups$$2_rendered$$4$$.lineStyle && $majorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($majorTickOptions_numGroups$$2_rendered$$4$$.lineStyle));
  $majorTickOptions_numGroups$$2_rendered$$4$$ = $majorTickOptions_numGroups$$2_rendered$$4$$.rendered;
  if("on" == $majorTickOptions_numGroups$$2_rendered$$4$$ || "auto" == $majorTickOptions_numGroups$$2_rendered$$4$$ && "tangential" == this.$Position$) {
    for(var $majorTickOptions_numGroups$$2_rendered$$4$$ = this.$_groups$.length, $i$$790$$ = 0;$i$$790$$ < $majorTickOptions_numGroups$$2_rendered$$4$$;$i$$790$$++) {
      if(this.$_renderGridAtLabels$) {
        $coord$$7_line$$15$$ = this.$getCoordAt$($i$$790$$)
      }else {
        if(this.$getCoordAt$($i$$790$$ + 0.5)) {
          $coord$$7_line$$15$$ = this.$getCoordAt$($i$$790$$ + 0.5)
        }else {
          continue
        }
      }
      $coord$$7_line$$15$$ != D.$JSCompiler_alias_NULL$$ && ($coord$$7_line$$15$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$678$$, $majorTickStroke$$, $coord$$7_line$$15$$), $gridlines$$1$$.push($coord$$7_line$$15$$))
    }
  }
  return $gridlines$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$125$$) {
  return $value$$125$$ < this.$MinValue$ || $value$$125$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$125$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$9$$) {
  var $minCoord$$3$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$3$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  $coord$$9$$ < $minCoord$$3$$ ? $coord$$9$$ = $minCoord$$3$$ : $coord$$9$$ > $maxCoord$$3$$ && ($coord$$9$$ = $maxCoord$$3$$);
  return this.$getUnboundedValueAt$($coord$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$126$$) {
  $value$$126$$ < this.$MinValue$ ? $value$$126$$ = this.$MinValue$ : $value$$126$$ >= this.$MaxValue$ && ($value$$126$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$126$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$10$$) {
  return this.$MinValue$ + ($coord$$10$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$127$$) {
  return this.$StartCoord$ + ($value$$127$$ - this.$MinValue$) * ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_StaticMethods_getLabelAt$$ = function $$JSCompiler_StaticMethods_getLabelAt$$$($JSCompiler_StaticMethods_getLabelAt$self$$, $index$$142$$) {
  $index$$142$$ = window.Math.round($index$$142$$);
  if(0 > $index$$142$$ || $index$$142$$ >= $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $label$$68$$ = $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$[$index$$142$$];
  $label$$68$$ && $label$$68$$.name && ($label$$68$$ = $label$$68$$.name);
  return $label$$68$$
};
D.$JSCompiler_StaticMethods_getIndexByLabel$$ = function $$JSCompiler_StaticMethods_getIndexByLabel$$$($JSCompiler_StaticMethods_getIndexByLabel$self$$, $label$$69$$) {
  if($label$$69$$ == D.$JSCompiler_alias_NULL$$) {
    return-1
  }
  for(var $index$$143$$ = -1, $i$$791$$ = 0;$i$$791$$ < $JSCompiler_StaticMethods_getIndexByLabel$self$$.$_groups$.length;$i$$791$$++) {
    if($label$$69$$ == (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($JSCompiler_StaticMethods_getIndexByLabel$self$$, $i$$791$$)) {
      $index$$143$$ = $i$$791$$;
      break
    }
  }
  return $index$$143$$
};
D.$DvtGroupAxisInfo$$.prototype.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(1);
D.$DvtLinearScaleAxisValueFormatter$$ = function $$DvtLinearScaleAxisValueFormatter$$$($minValue$$15$$, $maxValue$$17$$, $tickStep$$, $scale$$62$$, $autoPrecision$$4$$) {
  this.$_bundle$ = new D.$DvtUtilBundle$$;
  this.Init($minValue$$15$$, $maxValue$$17$$, $tickStep$$, $scale$$62$$, $autoPrecision$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLinearScaleAxisValueFormatter$$, D.$DvtAbstractAxisValueFormatter$$, "DvtLinearScaleAxisValueFormatter");
D.$DvtLinearScaleAxisValueFormatter$$.prototype.Init = function $$DvtLinearScaleAxisValueFormatter$$$$Init$($minValue$$16_scaleFactorDiff$$inline_7928$$, $maxValue$$18$$, $tickStep$$1$$, $i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$, $autoPrecision$$5$$) {
  this.$_scales$ = {};
  this.$_scalesOrder$ = [];
  this.$_factorToScaleMapping$ = {};
  var $createScale$$inline_7908_useAutoPrecision$$inline_7926$$ = function $$createScale$$inline_7908_useAutoPrecision$$inline_7926$$$($minValue$$16_scaleFactorDiff$$inline_7928$$, $maxValue$$18$$, $tickStep$$1$$) {
    var $i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$;
    this.$_bundle$ && $tickStep$$1$$ && ($i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_bundle$, $tickStep$$1$$, D.$JSCompiler_alias_NULL$$));
    $tickStep$$1$$ = {$scaleFactor$:$maxValue$$18$$, $localizedSuffix$:$i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$};
    this.$_scales$[$minValue$$16_scaleFactorDiff$$inline_7928$$] = $tickStep$$1$$;
    this.$_scalesOrder$.push($tickStep$$1$$);
    this.$_factorToScaleMapping$[$maxValue$$18$$] = $tickStep$$1$$
  };
  $createScale$$inline_7908_useAutoPrecision$$inline_7926$$.call(this, "none", 0);
  $createScale$$inline_7908_useAutoPrecision$$inline_7926$$.call(this, "thousand", 3, "SCALING_SUFFIX_THOUSAND");
  $createScale$$inline_7908_useAutoPrecision$$inline_7926$$.call(this, "million", 6, "SCALING_SUFFIX_MILLION");
  $createScale$$inline_7908_useAutoPrecision$$inline_7926$$.call(this, "billion", 9, "SCALING_SUFFIX_BILLION");
  $createScale$$inline_7908_useAutoPrecision$$inline_7926$$.call(this, "trillion", 12, "SCALING_SUFFIX_TRILLION");
  $createScale$$inline_7908_useAutoPrecision$$inline_7926$$.call(this, "quadrillion", 15, "SCALING_SUFFIX_QUADRILLION");
  this.$_scalesOrder$.sort(function($minValue$$16_scaleFactorDiff$$inline_7928$$, $maxValue$$18$$) {
    return $minValue$$16_scaleFactorDiff$$inline_7928$$.$scaleFactor$ < $maxValue$$18$$.$scaleFactor$ ? -1 : $minValue$$16_scaleFactorDiff$$inline_7928$$.$scaleFactor$ > $maxValue$$18$$.$scaleFactor$ ? 1 : 0
  });
  var $absMax$$inline_7927_findScale$$inline_7923_value$$inline_10550$$ = D.$JSCompiler_alias_FALSE$$, $decimalPlaces$$inline_7924$$, $scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$, $createScale$$inline_7908_useAutoPrecision$$inline_7926$$ = D.$JSCompiler_alias_FALSE$$;
  "off" !== $autoPrecision$$5$$ && ($createScale$$inline_7908_useAutoPrecision$$inline_7926$$ = D.$JSCompiler_alias_TRUE$$);
  $i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$ || ($i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$ = "auto");
  if($i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$ = this.$_scales$[$i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$]) {
    $scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$ = $i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$.$scaleFactor$
  }
  "number" !== typeof $scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$ && ($absMax$$inline_7927_findScale$$inline_7923_value$$inline_10550$$ = D.$JSCompiler_alias_TRUE$$);
  if($absMax$$inline_7927_findScale$$inline_7923_value$$inline_10550$$) {
    if($absMax$$inline_7927_findScale$$inline_7923_value$$inline_10550$$ = window.Math.max(window.Math.abs($minValue$$16_scaleFactorDiff$$inline_7928$$), window.Math.abs($maxValue$$18$$)), $absMax$$inline_7927_findScale$$inline_7923_value$$inline_10550$$ = (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($absMax$$inline_7927_findScale$$inline_7923_value$$inline_10550$$), $scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$ = 0, $absMax$$inline_7927_findScale$$inline_7923_value$$inline_10550$$ <= 
    this.$_scalesOrder$[0].$scaleFactor$) {
      $scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$ = this.$_scalesOrder$[0].$scaleFactor$
    }else {
      if($absMax$$inline_7927_findScale$$inline_7923_value$$inline_10550$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$
      }else {
        for($i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$ = this.$_scalesOrder$.length - 1;0 <= $i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$;$i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$--) {
          if(this.$_scalesOrder$[$i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$].$scaleFactor$ <= $absMax$$inline_7927_findScale$$inline_7923_value$$inline_10550$$) {
            $scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$ = this.$_scalesOrder$[$i$$inline_10552_scale$$63_scale$$inline_10547_scaleName$$inline_10545$$].$scaleFactor$;
            break
          }
        }
      }
    }
  }
  $createScale$$inline_7908_useAutoPrecision$$inline_7926$$ === D.$JSCompiler_alias_TRUE$$ && (0 == $tickStep$$1$$ && $minValue$$16_scaleFactorDiff$$inline_7928$$ == $maxValue$$18$$ ? ($minValue$$16_scaleFactorDiff$$inline_7928$$ = $scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($maxValue$$18$$), $decimalPlaces$$inline_7924$$ = 0 >= $minValue$$16_scaleFactorDiff$$inline_7928$$ ? 3 + $minValue$$16_scaleFactorDiff$$inline_7928$$ : 
  window.Math.max($minValue$$16_scaleFactorDiff$$inline_7928$$, 4)) : $decimalPlaces$$inline_7924$$ = window.Math.max($scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($tickStep$$1$$), 0));
  this.$_useAutoPrecision$ = $createScale$$inline_7908_useAutoPrecision$$inline_7926$$;
  this.$_scaleFactor$ = $scaleFactor$$inline_10546_scaleFactor$$inline_10551_scaleFactor$$inline_7925$$;
  this.$_decimalPlaces$ = $decimalPlaces$$inline_7924$$
};
D.$DvtLinearScaleAxisValueFormatter$$.prototype.$format$ = function $$DvtLinearScaleAxisValueFormatter$$$$$format$$($value$$129$$, $converter$$5$$) {
  var $formatted$$inline_7932_parsed$$ = (0,window.parseFloat)($value$$129$$);
  if((0,window.isNaN)($formatted$$inline_7932_parsed$$)) {
    return $value$$129$$
  }
  var $i$$793_suffix$$3$$;
  if(0 < this.$_scaleFactor$) {
    for($i$$793_suffix$$3$$ = 0;$i$$793_suffix$$3$$ < this.$_scaleFactor$;$i$$793_suffix$$3$$++) {
      $formatted$$inline_7932_parsed$$ /= 10
    }
    $i$$793_suffix$$3$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$
  }
  if($converter$$5$$ && $converter$$5$$.getAsString) {
    $formatted$$inline_7932_parsed$$ = $converter$$5$$.getAsString($formatted$$inline_7932_parsed$$)
  }else {
    if($converter$$5$$ && $converter$$5$$.format) {
      $formatted$$inline_7932_parsed$$ = $converter$$5$$.format($formatted$$inline_7932_parsed$$)
    }else {
      if(this.$_useAutoPrecision$ && !(0,window.isNaN)((0,window.parseFloat)($formatted$$inline_7932_parsed$$)) && ($formatted$$inline_7932_parsed$$ = (0,window.parseFloat)((new window.Number($formatted$$inline_7932_parsed$$)).toFixed(this.$_decimalPlaces$)), $formatted$$inline_7932_parsed$$ = "" + $formatted$$inline_7932_parsed$$, 0 < this.$_decimalPlaces$)) {
        -1 == $formatted$$inline_7932_parsed$$.indexOf(".") && ($formatted$$inline_7932_parsed$$ += ".");
        for(var $existingPlacesCount$$inline_7933$$ = $formatted$$inline_7932_parsed$$.substring($formatted$$inline_7932_parsed$$.indexOf(".") + 1).length;$existingPlacesCount$$inline_7933$$ < this.$_decimalPlaces$;) {
          $formatted$$inline_7932_parsed$$ += "0", $existingPlacesCount$$inline_7933$$++
        }
      }
    }
  }
  "string" === typeof $i$$793_suffix$$3$$ && ($formatted$$inline_7932_parsed$$ += $i$$793_suffix$$3$$);
  return $formatted$$inline_7932_parsed$$
};
D.$JSCompiler_StaticMethods__getPowerOfTen$$ = function $$JSCompiler_StaticMethods__getPowerOfTen$$$($value$$131$$) {
  $value$$131$$ = 0 <= $value$$131$$ ? $value$$131$$ : -$value$$131$$;
  var $power$$1$$ = 0;
  if(1E-15 > $value$$131$$) {
    return 0
  }
  if(window.Infinity == $value$$131$$) {
    return window.Number.MAX_VALUE
  }
  if(10 <= $value$$131$$) {
    for(;10 <= $value$$131$$;) {
      $power$$1$$ += 1, $value$$131$$ /= 10
    }
  }else {
    if(1 > $value$$131$$) {
      for(;1 > $value$$131$$;) {
        $power$$1$$ -= 1, $value$$131$$ *= 10
      }
    }
  }
  return $power$$1$$
};
D.$DvtTimeAxisInfo$$ = function $$DvtTimeAxisInfo$$$($context$$687$$, $options$$235$$, $availSpace$$105$$) {
  this.Init($context$$687$$, $options$$235$$, $availSpace$$105$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeAxisInfo$$, D.$DvtAxisInfo$$, "DvtTimeAxisInfo");
D.$DvtTimeAxisInfo$TIME_MONTH$$ = 864E5 * (365 / 12);
D.$DvtTimeAxisInfo$$.prototype.Init = function $$DvtTimeAxisInfo$$$$Init$($bundle$$8_context$$688_endOffset$$2$$, $options$$236$$, $availSpace$$106_startOffset$$1$$) {
  D.$DvtTimeAxisInfo$$.$superclass$.Init.call(this, $bundle$$8_context$$688_endOffset$$2$$, $options$$236$$, $availSpace$$106_startOffset$$1$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (!$options$$236$$._isOverview && "on" == $options$$236$$.tickLabel.rendered && (this.$StartOverflow$ = window.Math.max(10 - $options$$236$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $options$$236$$.rightBuffer, 0)), D.$DvtAgent$$.$isRightToLeft$($bundle$$8_context$$688_endOffset$$2$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = 
  this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$);
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $options$$236$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $options$$236$$.tickLabel.converter);
  this.$_groups$ = $options$$236$$.groups;
  this.$DataMin$ = $options$$236$$.dataMin;
  this.$DataMax$ = $options$$236$$.dataMax;
  this.$_averageInterval$ = 0 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0;
  $bundle$$8_context$$688_endOffset$$2$$ = 0 < $options$$236$$.endGroupOffset ? $options$$236$$.endGroupOffset * this.$_averageInterval$ : 0;
  $availSpace$$106_startOffset$$1$$ = 0 < $options$$236$$.startGroupOffset ? $options$$236$$.startGroupOffset * this.$_averageInterval$ : 0;
  this.$GlobalMin$ = $options$$236$$.min != D.$JSCompiler_alias_NULL$$ ? $options$$236$$.min : this.$DataMin$ - $availSpace$$106_startOffset$$1$$;
  this.$GlobalMax$ = $options$$236$$.max != D.$JSCompiler_alias_NULL$$ ? $options$$236$$.max : this.$DataMax$ + $bundle$$8_context$$688_endOffset$$2$$;
  this.$MinValue$ = $options$$236$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $options$$236$$.viewportMin;
  this.$MaxValue$ = $options$$236$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $options$$236$$.viewportMax;
  $options$$236$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = $options$$236$$.viewportStartGroup - $availSpace$$106_startOffset$$1$$);
  $options$$236$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $options$$236$$.viewportEndGroup + $bundle$$8_context$$688_endOffset$$2$$);
  this.$_timeZoneOffset$ = 0;
  this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
  this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$;
  this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$;
  $bundle$$8_context$$688_endOffset$$2$$ = new D.$DvtUtilBundle$$;
  this.$_timeAxisResources$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, "MONTH_SHORT_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, "MONTH_SHORT_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, "MONTH_SHORT_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, 
  "MONTH_SHORT_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, "MONTH_SHORT_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, "MONTH_SHORT_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, "MONTH_SHORT_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, 
  "MONTH_SHORT_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, "MONTH_SHORT_SEPTEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, "MONTH_SHORT_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, "MONTH_SHORT_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$688_endOffset$$2$$, 
  "MONTH_SHORT_DECEMBER", D.$JSCompiler_alias_NULL$$)];
  this.$_renderGridAtLabels$ = $options$$236$$._renderGridAtLabels
};
D.$JSCompiler_StaticMethods__formatAxisLabel$$ = function $$JSCompiler_StaticMethods__formatAxisLabel$$$($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, $prevDate$$) {
  var $label1$$ = D.$JSCompiler_alias_NULL$$, $label2$$ = D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString) {
    $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString($date$$14$$)
  }else {
    if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format) {
      $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format($date$$14$$)
    }else {
      if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_averageInterval$) {
        $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_averageInterval$) {
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getMonth() != $date$$14$$.getMonth()) {
            $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
          }
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$14$$.getYear()) {
            $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
          }
        }else {
          if(24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 864E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_averageInterval$) {
            if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getDate() != $date$$14$$.getDate()) {
              $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)
            }
            $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$14$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$.getMonth() != $date$$14$$.getMonth() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_FALSE$$, 
            D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$))
          }else {
            if(36E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 6E4 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_averageInterval$) {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getHours() != $date$$14$$.getHours() || $prevDate$$.getMinutes() != $date$$14$$.getMinutes()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_FALSE$$)
              }
            }else {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getSeconds() != $date$$14$$.getSeconds()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_TRUE$$)
              }
            }
            $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getMonth() != $date$$14$$.getMonth() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$) : $prevDate$$.getDate() != $date$$14$$.getDate() && ($label2$$ = "left" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$ || "right" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$ ? 
            (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$) : (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$14$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$))
          }
        }
      }
    }
  }
  return[$label1$$, $label2$$]
};
D.$JSCompiler_StaticMethods__formatDate$$ = function $$JSCompiler_StaticMethods__formatDate$$$($JSCompiler_StaticMethods__formatDate$self_dateStr$$, $date$$15_dayStr$$, $showDay$$, $showMonth$$, $showYear$$) {
  var $yearStr$$ = $date$$15_dayStr$$.getFullYear(), $monthStr$$;
  $monthStr$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 12 <= $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[$date$$15_dayStr$$.getMonth()] : $date$$15_dayStr$$.toString().split(" ")[1];
  $date$$15_dayStr$$ = $date$$15_dayStr$$.getDate();
  if($JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 17 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length) {
    var $dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[17], $yearStr$$ = $yearStr$$ + $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[16];
    $date$$15_dayStr$$ += $dayChar_dmyOrder$$
  }
  $dayChar_dmyOrder$$ = "DMY";
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 15 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length && ($dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[15]);
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$ = "";
  for(var $i$$796$$ = 0;$i$$796$$ < $dayChar_dmyOrder$$.length;$i$$796$$++) {
    $showDay$$ && "D" == $dayChar_dmyOrder$$[$i$$796$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $date$$15_dayStr$$ + " " : $showMonth$$ && "M" == $dayChar_dmyOrder$$[$i$$796$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $monthStr$$ + " " : $showYear$$ && "Y" == $dayChar_dmyOrder$$[$i$$796$$] && ($JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $yearStr$$ + " ")
  }
  return 0 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.slice(0, $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length - 1) : $JSCompiler_StaticMethods__formatDate$self_dateStr$$
};
D.$JSCompiler_StaticMethods__formatTime$$ = function $$JSCompiler_StaticMethods__formatTime$$$($JSCompiler_StaticMethods__formatTime$self_b12HFormat$$, $date$$16_secs$$, $showSecond$$) {
  var $hours_timeLabel$$ = $date$$16_secs$$.getHours(), $mins$$ = $date$$16_secs$$.getMinutes();
  $date$$16_secs$$ = $date$$16_secs$$.getSeconds();
  var $am$$ = "", $pm$$1$$ = "", $ampmBefore$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ != D.$JSCompiler_alias_NULL$$ && 14 < $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ && ($am$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[window.DvtTimeAxis.$AM_INDEX$], $pm$$1$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[window.DvtTimeAxis.$PM_INDEX$], $ampmBefore$$ = "t" == $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[14]);
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ = "" != $am$$ && "" != $pm$$1$$;
  var $ampm$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ && ($ampm$$ = $pm$$1$$, 12 < $hours_timeLabel$$ ? ($hours_timeLabel$$ -= 12, $ampm$$ = $pm$$1$$) : 0 == $hours_timeLabel$$ ? ($ampm$$ = $am$$, $hours_timeLabel$$ = 12) : 12 > $hours_timeLabel$$ && ($ampm$$ = $am$$));
  $hours_timeLabel$$ = (10 > $hours_timeLabel$$ ? "0" + $hours_timeLabel$$ : "" + $hours_timeLabel$$) + ":" + (10 > $mins$$ ? "0" + $mins$$ : "" + $mins$$);
  $showSecond$$ && ($hours_timeLabel$$ += ":" + (10 > $date$$16_secs$$ ? "0" + $date$$16_secs$$ : "" + $date$$16_secs$$));
  return $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ ? $ampmBefore$$ ? $ampm$$ + " " + $hours_timeLabel$$ : $hours_timeLabel$$ + " " + $ampm$$ : $hours_timeLabel$$
};
D.$DvtTimeAxisInfo$$.prototype.$_generateLabels$ = function $$DvtTimeAxisInfo$$$$$_generateLabels$$($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$) {
  var $labels1$$ = [], $labels2$$ = [], $coords1$$ = [], $coords2$$ = [], $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$ = D.$JSCompiler_alias_NULL$$, $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = 0, $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ = 0, $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ = $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$.$_stage$, 
  $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ = D.$DvtAgent$$.$isRightToLeft$($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$), $isVert$$3_labels1$$inline_7959$$ = "left" == this.$Position$ || "right" == this.$Position$, $j$$110_labels2$$inline_7960_scrollable$$ = "off" != this.$Options$.zoomAndScroll;
  if($j$$110_labels2$$inline_7960_scrollable$$) {
    var $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = D.$JSCompiler_alias_TRUE$$
  }
  var $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$ = 0;
  $isVert$$3_labels1$$inline_7959$$ && D.$DvtAgent$$.$isBrowserChrome$() && ($count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$ = 0.2 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")));
  var $pointA1$$inline_7952_times$$ = [], $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = 0;
  if("mixedFrequency" == this.$Options$.timeAxisType) {
    for(var $date$$17_j$$inline_7956_time$$13$$ = this.$MinValue$, $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = 31536E6 <= this.$_averageInterval$ ? 31536E6 : this.$_averageInterval$ >= D.$DvtTimeAxisInfo$TIME_MONTH$$ ? D.$DvtTimeAxisInfo$TIME_MONTH$$ : 864E5 <= this.$_averageInterval$ ? 864E5 : 36E5 <= this.$_averageInterval$ ? 36E5 : 6E4 <= this.$_averageInterval$ ? 6E4 : 1E3;$date$$17_j$$inline_7956_time$$13$$ <= 
    this.$MaxValue$;) {
      $pointA1$$inline_7952_times$$.push($date$$17_j$$inline_7956_time$$13$$), $date$$17_j$$inline_7956_time$$13$$ += $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$
    }
    $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = window.Math.floor(this.$_averageInterval$ / $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$) - 1
  }else {
    $pointA1$$inline_7952_times$$ = this.$_groups$
  }
  for(var $i$$797_pointA2$$inline_7953$$ = 0;$i$$797_pointA2$$inline_7953$$ < $pointA1$$inline_7952_times$$.length;$i$$797_pointA2$$inline_7953$$++) {
    var $date$$17_j$$inline_7956_time$$13$$ = $pointA1$$inline_7952_times$$[$i$$797_pointA2$$inline_7953$$], $coord$$16_pointB1$$inline_7954$$ = this.$getCoordAt$($date$$17_j$$inline_7956_time$$13$$);
    if($coord$$16_pointB1$$inline_7954$$ != D.$JSCompiler_alias_NULL$$) {
      var $date$$17_j$$inline_7956_time$$13$$ = new window.Date($date$$17_j$$inline_7956_time$$13$$ + this.$_timeZoneOffset$), $label2$$1_twoLabels$$1$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, $date$$17_j$$inline_7956_time$$13$$, $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$), $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$ = $label2$$1_twoLabels$$1$$[0], $label2$$1_twoLabels$$1$$ = $label2$$1_twoLabels$$1$$[1];
      $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$ != D.$JSCompiler_alias_NULL$$ ? ($label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? $labels1$$.push(this.$CreateLabel$($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$, $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$, $coord$$16_pointB1$$inline_7954$$ + $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$)) : $labels1$$.push(this.$CreateLabel$($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$, 
      $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$, $coord$$16_pointB1$$inline_7954$$)), $coords1$$.push($coord$$16_pointB1$$inline_7954$$)) : ($labels1$$.push(D.$JSCompiler_alias_NULL$$), $coords1$$.push(D.$JSCompiler_alias_NULL$$));
      $j$$110_labels2$$inline_7960_scrollable$$ && $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ && ($coord$$16_pointB1$$inline_7954$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$16_pointB1$$inline_7954$$, $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = D.$JSCompiler_alias_FALSE$$);
      $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$ = D.$JSCompiler_alias_NULL$$, $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$ = $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? this.$CreateLabel$($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$, $label2$$1_twoLabels$$1$$, $coord$$16_pointB1$$inline_7954$$ - $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$) : 
      this.$CreateLabel$($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$, $label2$$1_twoLabels$$1$$, $coord$$16_pointB1$$inline_7954$$), $coords2$$.push($coord$$16_pointB1$$inline_7954$$), $isVert$$3_labels1$$inline_7959$$ || ($gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ ? $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$.$alignRight$() : $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$.$alignLeft$()), 
      $labels2$$.push($label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$), this.$_isOneLevel$ = D.$JSCompiler_alias_FALSE$$) : ($labels2$$.push(D.$JSCompiler_alias_NULL$$), $coords2$$.push(D.$JSCompiler_alias_NULL$$));
      $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$ = $date$$17_j$$inline_7956_time$$13$$
    }
  }
  $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$ = $labels1$$;
  $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels1$$, $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$);
  $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$ = $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$;
  $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = [];
  for($bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = 0;$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ < $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$.length;$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$++) {
    $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$[$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$] != D.$JSCompiler_alias_NULL$$ && $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$.push($gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$[$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$])
  }
  $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ = $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$;
  for($bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$, $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$);$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$;) {
    $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$++, $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$, $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$)
  }
  $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$.length;
  if(0 < $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$) {
    for($bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$ = 0;$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ < $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$.length;$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$++) {
      $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$[$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$] != D.$JSCompiler_alias_NULL$$ && (0 != $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$ % ($gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ + 1) && ($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$[$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$] = 
      D.$JSCompiler_alias_NULL$$, $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$--), $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$++)
    }
  }
  $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$ = $labels2$$;
  $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels2$$, $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$);
  if(!$c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ || 0 >= $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$.length) {
    $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ = D.$JSCompiler_alias_FALSE$$
  }else {
    $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ = ($bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = "left" == this.$Position$ || "right" == this.$Position$) ? this.$Options$.layout.verticalAxisGap : this.$Options$.layout.horizontalAxisGap;
    $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$ = 0;
    if($c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[0] != D.$JSCompiler_alias_NULL$$) {
      $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ ? ($pointA1$$inline_7952_times$$ = $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[0].y, $i$$797_pointA2$$inline_7953$$ = $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[0].y + $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[0].$h$) : ($pointA1$$inline_7952_times$$ = $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[0].x, 
      $i$$797_pointA2$$inline_7953$$ = $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[0].x + $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[0].$w$);
      $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$++;
      for($date$$17_j$$inline_7956_time$$13$$ = 1;$date$$17_j$$inline_7956_time$$13$$ < $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$.length;$date$$17_j$$inline_7956_time$$13$$++) {
        $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[$date$$17_j$$inline_7956_time$$13$$] != D.$JSCompiler_alias_NULL$$ && ($bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ ? ($coord$$16_pointB1$$inline_7954$$ = $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[$date$$17_j$$inline_7956_time$$13$$].y, $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$ = $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[$date$$17_j$$inline_7956_time$$13$$].y + 
        $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[$date$$17_j$$inline_7956_time$$13$$].$h$) : ($coord$$16_pointB1$$inline_7954$$ = $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[$date$$17_j$$inline_7956_time$$13$$].x, $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$ = $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[$date$$17_j$$inline_7956_time$$13$$].x + $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$[$date$$17_j$$inline_7956_time$$13$$].$w$), 
        ($coord$$16_pointB1$$inline_7954$$ >= $pointA1$$inline_7952_times$$ && $coord$$16_pointB1$$inline_7954$$ - $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ < $i$$797_pointA2$$inline_7953$$ || $coord$$16_pointB1$$inline_7954$$ < $pointA1$$inline_7952_times$$ && $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$ + $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ > 
        $pointA1$$inline_7952_times$$) && ($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$[$date$$17_j$$inline_7956_time$$13$$] = D.$JSCompiler_alias_NULL$$), $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$[$date$$17_j$$inline_7956_time$$13$$] != D.$JSCompiler_alias_NULL$$ && ($pointA1$$inline_7952_times$$ = $coord$$16_pointB1$$inline_7954$$, $i$$797_pointA2$$inline_7953$$ = $label1$$1_pointB2$$inline_7955_prevDate$$1_text$$98$$, $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$++))
      }
    }
    $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ = $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$
  }
  if(!$j$$110_labels2$$inline_7960_scrollable$$) {
    if($c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ <= 1.5 * $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ && 1 < $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$) {
      $labels1$$ = $labels2$$;
      $labels2$$ = D.$JSCompiler_alias_NULL$$;
      for($j$$110_labels2$$inline_7960_scrollable$$ = 0;$j$$110_labels2$$inline_7960_scrollable$$ < $labels1$$.length;$j$$110_labels2$$inline_7960_scrollable$$++) {
        $labels1$$[$j$$110_labels2$$inline_7960_scrollable$$] != D.$JSCompiler_alias_NULL$$ && $labels1$$[$j$$110_labels2$$inline_7960_scrollable$$].$alignCenter$()
      }
    }else {
      2 > $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ && ($labels2$$ = D.$JSCompiler_alias_NULL$$)
    }
  }
  2 > $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ && (this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$);
  if($isVert$$3_labels1$$inline_7959$$ && $labels2$$ != D.$JSCompiler_alias_NULL$$) {
    var $isVert$$3_labels1$$inline_7959$$ = $labels1$$, $j$$110_labels2$$inline_7960_scrollable$$ = $labels2$$, $gap$$inline_7962$$ = 0.1 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")), $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$ = function $$c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$$($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$, $labels1$$) {
      return $labels1$$.y >= $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$.y && $labels1$$.y - $gap$$inline_7962$$ < $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$.y + $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$.$h$ || $labels1$$.y < $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$.y && $labels1$$.y + $labels1$$.$h$ + $gap$$inline_7962$$ > $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$.y ? 
      D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
    }, $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = D.$JSCompiler_alias_NULL$$, $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = D.$JSCompiler_alias_FALSE$$;
    for($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$ = 0;$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$ < $isVert$$3_labels1$$inline_7959$$.length;$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$++) {
      if($isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$] && $j$$110_labels2$$inline_7960_scrollable$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$]) {
        if($isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$].$alignTop$(), $j$$110_labels2$$inline_7960_scrollable$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$].$alignBottom$(), $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ && $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$($bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$, 
        $isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$].$measureDimensions$())) {
          $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }else {
          if($isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$ + 1] && $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$($isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$].$measureDimensions$(), $isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$ + 1].$measureDimensions$())) {
            $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = $j$$110_labels2$$inline_7960_scrollable$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$].$measureDimensions$()
          }
        }
      }else {
        if($isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$] || $j$$110_labels2$$inline_7960_scrollable$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$]) {
          if($gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ = $isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$] ? $isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$] : $j$$110_labels2$$inline_7960_scrollable$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$], $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ && 
          $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$($bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$, $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$.$measureDimensions$())) {
            $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$.$measureDimensions$()
          }
        }
      }
    }
    if($c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$) {
      $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ = $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = D.$JSCompiler_alias_NULL$$;
      for($context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$ = 0;$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$ < $isVert$$3_labels1$$inline_7959$$.length;$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$++) {
        $j$$110_labels2$$inline_7960_scrollable$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$] ? ($isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$] = D.$JSCompiler_alias_NULL$$, $j$$110_labels2$$inline_7960_scrollable$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$].$alignMiddle$(), $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$ = $j$$110_labels2$$inline_7960_scrollable$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$].$measureDimensions$(), 
        $c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ && $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$($c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$, $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$) && ($isVert$$3_labels1$$inline_7959$$[$bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$] = 
        D.$JSCompiler_alias_NULL$$), $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ = $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$) : $isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$] && ($count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$ = $isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$].$measureDimensions$(), 
        $gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$ && $c2$$4_container$$159_isOverlapping$$inline_7963_labelDims$$inline_7948$$($gap$$inline_7950_isRTL$$25_label$$inline_7967_labelDims$$inline_7937_lastLv2Dims$$inline_7970_skippedLabels$$inline_7941$$, $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$) ? $isVert$$3_labels1$$inline_7959$$[$context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$] = 
        D.$JSCompiler_alias_NULL$$ : ($c1$$4_count$$inline_7943_interval$$5_lastLv1Dims$$inline_7969_minSkip_overlapping$$inline_7965_shortLabelDims$$inline_7939$$ = $count$$inline_7951_dims$$inline_7971_levelsGap_minSkip$$inline_7938_n$$inline_7944$$, $bOverlaps$$inline_7942_first$$2_isVert$$inline_7949_j$$inline_7940_lastDims$$inline_7964_lastLv1Idx$$inline_7968$$ = $context$$689_i$$inline_7966_labels$$inline_7936_labels$$inline_7947$$))
      }
    }
  }
  this.$_level1Labels$ = $labels1$$;
  this.$_level2Labels$ = $labels2$$;
  this.$_level1Coords$ = $coords1$$;
  this.$_level2Coords$ = $coords2$$
};
D.$DvtTimeAxisInfo$$.prototype.$getLabels$ = function $$DvtTimeAxisInfo$$$$$getLabels$$($context$$690$$, $levelIdx$$2$$) {
  if($levelIdx$$2$$ && 1 < $levelIdx$$2$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_level1Labels$ || this.$_generateLabels$($context$$690$$);
  return 1 == $levelIdx$$2$$ ? this.$_level2Labels$ : this.$_level1Labels$
};
D.$DvtTimeAxisInfo$$.prototype.$getAxisLine$ = function $$DvtTimeAxisInfo$$$$$getAxisLine$$($context$$691$$) {
  var $axisLineOptions$$1_axisLineStroke$$1$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$1_axisLineStroke$$1$$.rendered ? ($axisLineOptions$$1_axisLineStroke$$1$$ = new D.$DvtSolidStroke$$($axisLineOptions$$1_axisLineStroke$$1$$.lineColor, 1, $axisLineOptions$$1_axisLineStroke$$1$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$691$$, $axisLineOptions$$1_axisLineStroke$$1$$, 10)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getGridLineShift$$ = function $$JSCompiler_StaticMethods__getGridLineShift$$$($JSCompiler_StaticMethods__getGridLineShift$self$$, $i$$799$$) {
  if($JSCompiler_StaticMethods__getGridLineShift$self$$.$_renderGridAtLabels$) {
    return 0
  }
  for(var $curr$$1$$ = $JSCompiler_StaticMethods__getGridLineShift$self$$.$_level1Coords$[$i$$799$$], $prev$$ = D.$JSCompiler_alias_NULL$$, $j$$113$$ = $i$$799$$ - 1;0 <= $j$$113$$;$j$$113$$--) {
    if($JSCompiler_StaticMethods__getGridLineShift$self$$.$_level1Coords$[$j$$113$$] != D.$JSCompiler_alias_NULL$$) {
      $prev$$ = $JSCompiler_StaticMethods__getGridLineShift$self$$.$_level1Coords$[$j$$113$$];
      break
    }
  }
  return $prev$$ == D.$JSCompiler_alias_NULL$$ ? window.Infinity : ($curr$$1$$ - $prev$$) / 2
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$692$$) {
  var $gridlines$$2_majorTickOptions$$1$$ = this.$Options$.majorTick;
  if("on" != $gridlines$$2_majorTickOptions$$1$$.rendered) {
    return[]
  }
  var $coords$$18$$ = [];
  if(this.$_isOneLevel$) {
    for(var $i$$800$$ = 0;$i$$800$$ < this.$_level1Coords$.length;$i$$800$$++) {
      this.$_level1Coords$[$i$$800$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$800$$] != D.$JSCompiler_alias_NULL$$ && $coords$$18$$.push(this.$_level1Coords$[$i$$800$$] - (0,D.$JSCompiler_StaticMethods__getGridLineShift$$)(this, $i$$800$$))
    }
  }else {
    for($i$$800$$ = 1;$i$$800$$ < this.$_level2Coords$.length;$i$$800$$++) {
      this.$_level2Coords$[$i$$800$$] != D.$JSCompiler_alias_NULL$$ && $coords$$18$$.push(this.$_level2Coords$[$i$$800$$] - (0,D.$JSCompiler_StaticMethods__getGridLineShift$$)(this, $i$$800$$))
    }
  }
  var $majorTickStroke$$1$$ = new D.$DvtSolidStroke$$($gridlines$$2_majorTickOptions$$1$$.lineColor, 1, $gridlines$$2_majorTickOptions$$1$$.lineWidth);
  $gridlines$$2_majorTickOptions$$1$$.lineStyle && $majorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$2_majorTickOptions$$1$$.lineStyle));
  $gridlines$$2_majorTickOptions$$1$$ = [];
  for($i$$800$$ = 0;$i$$800$$ < $coords$$18$$.length;$i$$800$$++) {
    $coords$$18$$[$i$$800$$] >= this.$_minCoord$ && $coords$$18$$[$i$$800$$] <= this.$_maxCoord$ && $gridlines$$2_majorTickOptions$$1$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$692$$, $majorTickStroke$$1$$, $coords$$18$$[$i$$800$$]))
  }
  return $gridlines$$2_majorTickOptions$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$693$$) {
  var $gridlines$$3_minorTickOptions$$ = this.$Options$.minorTick;
  if("on" != $gridlines$$3_minorTickOptions$$.rendered || this.$_isOneLevel$) {
    return[]
  }
  for(var $coords$$19$$ = [], $i$$801$$ = 0;$i$$801$$ < this.$_level1Coords$.length;$i$$801$$++) {
    this.$_level1Coords$[$i$$801$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$801$$] != D.$JSCompiler_alias_NULL$$ && $coords$$19$$.push(this.$_level1Coords$[$i$$801$$] - (0,D.$JSCompiler_StaticMethods__getGridLineShift$$)(this, $i$$801$$))
  }
  var $minorTickStroke$$ = new D.$DvtSolidStroke$$($gridlines$$3_minorTickOptions$$.lineColor, 1, $gridlines$$3_minorTickOptions$$.lineWidth);
  $gridlines$$3_minorTickOptions$$.lineStyle && $minorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$3_minorTickOptions$$.lineStyle));
  $gridlines$$3_minorTickOptions$$ = [];
  for($i$$801$$ = 0;$i$$801$$ < $coords$$19$$.length;$i$$801$$++) {
    $coords$$19$$[$i$$801$$] >= this.$_minCoord$ && $coords$$19$$[$i$$801$$] <= this.$_maxCoord$ && $gridlines$$3_minorTickOptions$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$693$$, $minorTickStroke$$, $coords$$19$$[$i$$801$$]))
  }
  return $gridlines$$3_minorTickOptions$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$135$$) {
  return $value$$135$$ < this.$MinValue$ || $value$$135$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$135$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$18$$) {
  var $minCoord$$5$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$5$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$18$$ < $minCoord$$5$$ ? $coord$$18$$ = $minCoord$$5$$ : $coord$$18$$ > $maxCoord$$5$$ && ($coord$$18$$ = $maxCoord$$5$$);
  return this.$getUnboundedValueAt$($coord$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$136$$) {
  $value$$136$$ < this.$MinValue$ ? $value$$136$$ = this.$MinValue$ : $value$$136$$ > this.$MaxValue$ && ($value$$136$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$136$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$19$$) {
  return this.$MinValue$ + ($coord$$19$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$137$$) {
  return this.$_minCoord$ + ($value$$137$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
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