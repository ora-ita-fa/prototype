define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAxis$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtAxis", D.$DvtAxis$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxis$$, D.$DvtBaseComponent$$, "DvtAxis");
D.$DvtAxis$$.newInstance = function $$DvtAxis$$$newInstance$($context$$385$$, $callback$$79$$, $callbackObj$$52$$) {
  var $axis$$18$$ = new D.$DvtAxis$$;
  $axis$$18$$.Init($context$$385$$, $callback$$79$$, $callbackObj$$52$$);
  return $axis$$18$$
};
D.$DvtAxis$getDefaults$$ = function $$DvtAxis$getDefaults$$$($skin$$12$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtAxisDefaults$$, $skin$$12$$)
};
D.$DvtAxis$$.getDefaults = D.$DvtAxis$getDefaults$$;
D.$DvtAxis$$.prototype.Init = function $$DvtAxis$$$$Init$($context$$386$$, $callback$$80$$, $callbackObj$$53$$) {
  D.$DvtAxis$$.$superclass$.Init.call(this, $context$$386$$, $callback$$80$$, $callbackObj$$53$$);
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
D.$DvtAxis$$.prototype.$render$ = function $$DvtAxis$$$$$render$$($options$$33$$, $width$$55$$, $height$$49$$, $x$$180$$, $y$$152$$) {
  this.$SetOptions$($options$$33$$);
  this.$Width$ = $width$$55$$;
  this.$Height$ = $height$$49$$;
  this.$removeChildren$();
  $x$$180$$ || ($x$$180$$ = 0);
  $y$$152$$ || ($y$$152$$ = 0);
  D.$DvtAxisRenderer$$.$render$(this, new D.$DvtRectangle$$($x$$180$$, $y$$152$$, $width$$55$$, $height$$49$$))
};
D.$DvtAxis$$.prototype.render = D.$DvtAxis$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$277$$, $source$$11$$) {
  this === $source$$11$$ && this.$__dispatchEvent$($event$$277$$)
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
    for(var $g$$25$$ = 0;$g$$25$$ < this.$_options$.groups.length;$g$$25$$++) {
      if(this.$_options$.groups[$g$$25$$] == $displayable$$76_group$$30_logicalObj$$18$$) {
        return"item[" + $g$$25$$ + "]"
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
  var $options$$238$$ = $axis$$36$$.$__getOptions$(), $axisInfo$$3$$ = (0,D.$DvtAxisInfo$newInstance$$)($axis$$36$$.$_context$, $options$$238$$, $availSpace$$109$$);
  $axis$$36$$.$Info$ = $axisInfo$$3$$;
  "off" != $options$$238$$.rendered && ($axis$$36$$.$__setBounds$($availSpace$$109$$.clone()), D.$DvtAxisRenderer$$.$_renderTitle$($axis$$36$$, $axisInfo$$3$$, $availSpace$$109$$), D.$DvtAxisRenderer$$.$_renderLabels$($axis$$36$$, $axisInfo$$3$$, $availSpace$$109$$))
};
D.$DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($axis$$37_title$$11$$, $axisInfo$$4_position$$49$$, $availSpace$$110$$) {
  var $gap$$23_options$$239$$ = $axis$$37_title$$11$$.$__getOptions$();
  if($gap$$23_options$$239$$.title && ($axisInfo$$4_position$$49$$ = $gap$$23_options$$239$$.position, !("radial" == $axisInfo$$4_position$$49$$ || "tangential" == $axisInfo$$4_position$$49$$))) {
    if($gap$$23_options$$239$$.isLayout && "bottom" == $axisInfo$$4_position$$49$$ && ($axisInfo$$4_position$$49$$ = "top"), $axis$$37_title$$11$$ = "top" == $axisInfo$$4_position$$49$$ || "bottom" == $axisInfo$$4_position$$49$$ ? D.$DvtAxisRenderer$$.$_createText$($axis$$37_title$$11$$.$__getEventManager$(), $axis$$37_title$$11$$, $gap$$23_options$$239$$.title, $gap$$23_options$$239$$.titleStyle, $availSpace$$110$$.$w$, $availSpace$$110$$.$h$) : D.$DvtAxisRenderer$$.$_createText$($axis$$37_title$$11$$.$__getEventManager$(), 
    $axis$$37_title$$11$$, $gap$$23_options$$239$$.title, $gap$$23_options$$239$$.titleStyle, $availSpace$$110$$.$h$, $availSpace$$110$$.$w$)) {
      var $titleDims$$2$$ = $axis$$37_title$$11$$.$measureDimensions$(), $gap$$23_options$$239$$ = window.Math.ceil($gap$$23_options$$239$$.layout.titleGap * $gap$$23_options$$239$$.layout.gapRatio);
      "top" == $axisInfo$$4_position$$49$$ ? ($axis$$37_title$$11$$.$setX$($availSpace$$110$$.x + $availSpace$$110$$.$w$ / 2 - $titleDims$$2$$.$w$ / 2), $axis$$37_title$$11$$.$setY$($availSpace$$110$$.y), $availSpace$$110$$.y += $titleDims$$2$$.$h$ + $gap$$23_options$$239$$, $availSpace$$110$$.$h$ -= $titleDims$$2$$.$h$ + $gap$$23_options$$239$$) : "bottom" == $axisInfo$$4_position$$49$$ ? ($axis$$37_title$$11$$.$setX$($availSpace$$110$$.x + $availSpace$$110$$.$w$ / 2 - $titleDims$$2$$.$w$ / 2), 
      $axis$$37_title$$11$$.$setY$($availSpace$$110$$.y + $availSpace$$110$$.$h$ - $titleDims$$2$$.$h$), $availSpace$$110$$.$h$ -= $titleDims$$2$$.$h$ + $gap$$23_options$$239$$) : "left" == $axisInfo$$4_position$$49$$ ? ($axis$$37_title$$11$$.$setRotation$(3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($axis$$37_title$$11$$, $availSpace$$110$$.x, $availSpace$$110$$.y + $availSpace$$110$$.$h$ / 2 + $titleDims$$2$$.$w$ / 2), $availSpace$$110$$.x += $titleDims$$2$$.$h$ + $gap$$23_options$$239$$, 
      $availSpace$$110$$.$w$ -= $titleDims$$2$$.$h$ + $gap$$23_options$$239$$) : "right" == $axisInfo$$4_position$$49$$ && ($axis$$37_title$$11$$.$setRotation$(3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($axis$$37_title$$11$$, $availSpace$$110$$.x + $availSpace$$110$$.$w$ - $titleDims$$2$$.$h$, $availSpace$$110$$.y + $availSpace$$110$$.$h$ / 2 + $titleDims$$2$$.$w$ / 2), $availSpace$$110$$.$w$ -= $titleDims$$2$$.$h$ + $gap$$23_options$$239$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($axis$$38$$, $axisInfo$$5$$, $availSpace$$111$$) {
  var $options$$240_position$$50$$ = $axis$$38$$.$__getOptions$();
  "on" == $options$$240_position$$50$$.tickLabel.rendered && ($options$$240_position$$50$$ = $options$$240_position$$50$$.position, "top" == $options$$240_position$$50$$ || "bottom" == $options$$240_position$$50$$ ? D.$DvtAxisRenderer$$.$_renderLabelsHoriz$($axis$$38$$, $axisInfo$$5$$, $availSpace$$111$$) : "tangential" == $options$$240_position$$50$$ ? D.$DvtAxisRenderer$$.$_renderLabelsTangent$($axis$$38$$, $axisInfo$$5$$, $availSpace$$111$$) : D.$DvtAxisRenderer$$.$_renderLabelsVert$($axis$$38$$, 
  $axisInfo$$5$$, $availSpace$$111$$))
};
D.$DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($axis$$39$$, $axisInfo$$6_lv2Labels$$, $availSpace$$112$$) {
  for(var $labels$$18$$ = $axisInfo$$6_lv2Labels$$.$getLabels$($axis$$39$$.$_context$), $isLayout$$1_offset$$37$$ = $axis$$39$$.$__getOptions$().isLayout, $maxLv1Height$$ = 0, $isRTL$$26$$ = D.$DvtAgent$$.$isRightToLeft$($axis$$39$$.$_context$), $i$$809$$ = 0;$i$$809$$ < $labels$$18$$.length;$i$$809$$++) {
    var $label$$74$$ = $labels$$18$$[$i$$809$$];
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
    for($i$$809$$ = 0;$i$$809$$ < $axisInfo$$6_lv2Labels$$.length;$i$$809$$++) {
      $label$$74$$ = $axisInfo$$6_lv2Labels$$[$i$$809$$], $label$$74$$ != D.$JSCompiler_alias_NULL$$ && ($axis$$39$$.$__getEventManager$().$associate$($label$$74$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$74$$.$getTextString$()})), $labels$$18$$[$i$$809$$] != D.$JSCompiler_alias_NULL$$ && ($isLayout$$1_offset$$37$$ = $labels$$18$$[$i$$809$$].$measureDimensions$().$w$ / 2), $isRTL$$26$$ ? 
      $label$$74$$.$setX$($label$$74$$.$getX$() + $isLayout$$1_offset$$37$$) : $label$$74$$.$setX$($label$$74$$.$getX$() - $isLayout$$1_offset$$37$$), $label$$74$$.$alignTop$(), $label$$74$$.$setY$($availSpace$$112$$.y + $maxLv1Height$$), $axis$$39$$.$addChild$($label$$74$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($axis$$40$$, $axisInfo$$7$$, $availSpace$$113$$) {
  var $i$$810_isRTL$$27_options$$241$$ = $axis$$40$$.$__getOptions$(), $isLayout$$2$$ = $i$$810_isRTL$$27_options$$241$$.isLayout, $alwaysAlignRight_formatLabelVert$$ = $i$$810_isRTL$$27_options$$241$$._alwaysAlignRight, $position$$51$$ = $i$$810_isRTL$$27_options$$241$$.position, $i$$810_isRTL$$27_options$$241$$ = D.$DvtAgent$$.$isRightToLeft$($axis$$40$$.$_context$), $isAlignLeft$$ = "radial" == $position$$51$$ && $i$$810_isRTL$$27_options$$241$$ || $isLayout$$2$$ && "left" == $position$$51$$ || 
  !$alwaysAlignRight_formatLabelVert$$ && !$isLayout$$2$$ && "right" == $position$$51$$, $labelX$$5$$;
  "radial" == $position$$51$$ ? ($labelX$$5$$ = $availSpace$$113$$.x + $availSpace$$113$$.$w$ / 2, $labelX$$5$$ += D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ * ($i$$810_isRTL$$27_options$$241$$ ? 1 : -1)) : $labelX$$5$$ = $isAlignLeft$$ ? $availSpace$$113$$.x : $availSpace$$113$$.x + $availSpace$$113$$.$w$;
  for(var $alwaysAlignRight_formatLabelVert$$ = function $$alwaysAlignRight_formatLabelVert$$$($i$$810_isRTL$$27_options$$241$$) {
    !$isLayout$$2$$ && $axis$$40$$.$_labelTruncationNeeded$ && ($i$$810_isRTL$$27_options$$241$$ = D.$DvtTextUtils$$.$fitText$($i$$810_isRTL$$27_options$$241$$, $availSpace$$113$$.$w$, $availSpace$$113$$.$h$, $axis$$40$$) ? $i$$810_isRTL$$27_options$$241$$ : D.$JSCompiler_alias_NULL$$);
    if($i$$810_isRTL$$27_options$$241$$) {
      $axis$$40$$.$__getEventManager$().$associate$($i$$810_isRTL$$27_options$$241$$, new D.$DvtSimpleObjPeer$$($i$$810_isRTL$$27_options$$241$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$i$$810_isRTL$$27_options$$241$$.$getTextString$()}));
      $i$$810_isRTL$$27_options$$241$$.$setX$($labelX$$5$$);
      $isAlignLeft$$ ? $i$$810_isRTL$$27_options$$241$$.$alignLeft$() : $i$$810_isRTL$$27_options$$241$$.$alignRight$();
      if("radial" == $position$$51$$) {
        var $alwaysAlignRight_formatLabelVert$$ = $i$$810_isRTL$$27_options$$241$$.$getY$();
        $i$$810_isRTL$$27_options$$241$$.$setY$($availSpace$$113$$.y + $availSpace$$113$$.$h$ / 2 - $alwaysAlignRight_formatLabelVert$$);
        var $labels$$19_lv2Labels$$1$$ = $i$$810_isRTL$$27_options$$241$$.$getDimensions$(), $label$$75$$ = 0.15 * $labels$$19_lv2Labels$$1$$.$h$, $alwaysAlignRight_formatLabelVert$$ = $alwaysAlignRight_formatLabelVert$$ + $labels$$19_lv2Labels$$1$$.$h$ / 2 > $axisInfo$$7$$.$getEndCoord$() && "circle" == $axis$$40$$.$__getOptions$().polarGridShape ? 1 : 0.3, $labels$$19_lv2Labels$$1$$ = window.DvtPathUtils.$roundedRectangle$($labels$$19_lv2Labels$$1$$.x - $label$$75$$, $labels$$19_lv2Labels$$1$$.y, 
        $labels$$19_lv2Labels$$1$$.$w$ + 2 * $label$$75$$, $labels$$19_lv2Labels$$1$$.$h$, 2, 2, 2, 2), $labels$$19_lv2Labels$$1$$ = new D.$DvtPath$$($axis$$40$$.$_context$, $labels$$19_lv2Labels$$1$$);
        $labels$$19_lv2Labels$$1$$.$setSolidFill$("#FFFFFF", $alwaysAlignRight_formatLabelVert$$);
        $axis$$40$$.$addChild$($labels$$19_lv2Labels$$1$$)
      }
      $axis$$40$$.$addChild$($i$$810_isRTL$$27_options$$241$$)
    }
  }, $labels$$19_lv2Labels$$1$$ = $axisInfo$$7$$.$getLabels$($axis$$40$$.$_context$), $i$$810_isRTL$$27_options$$241$$ = 0;$i$$810_isRTL$$27_options$$241$$ < $labels$$19_lv2Labels$$1$$.length;$i$$810_isRTL$$27_options$$241$$++) {
    var $label$$75$$ = $labels$$19_lv2Labels$$1$$[$i$$810_isRTL$$27_options$$241$$];
    $label$$75$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$75$$)
  }
  $labels$$19_lv2Labels$$1$$ = $axisInfo$$7$$.$getLabels$($axis$$40$$.$_context$, 1);
  if($labels$$19_lv2Labels$$1$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$810_isRTL$$27_options$$241$$ = 0;$i$$810_isRTL$$27_options$$241$$ < $labels$$19_lv2Labels$$1$$.length;$i$$810_isRTL$$27_options$$241$$++) {
      $label$$75$$ = $labels$$19_lv2Labels$$1$$[$i$$810_isRTL$$27_options$$241$$], $label$$75$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$75$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($axis$$41$$, $axisInfo$$8_labels$$20$$, $availSpace$$114$$) {
  $axisInfo$$8_labels$$20$$ = $axisInfo$$8_labels$$20$$.$getLabels$($axis$$41$$.$_context$);
  for(var $i$$811$$ = 0;$i$$811$$ < $axisInfo$$8_labels$$20$$.length;$i$$811$$++) {
    var $label$$77$$ = $axisInfo$$8_labels$$20$$[$i$$811$$];
    if($label$$77$$ != D.$JSCompiler_alias_NULL$$) {
      var $textBefore$$ = $label$$77$$.$getTextString$();
      $axis$$41$$.$__getEventManager$().$associate$($label$$77$$, new D.$DvtSimpleObjPeer$$($label$$77$$.$isTruncated$() ? $textBefore$$ : D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$textBefore$$}));
      $label$$77$$.$setTranslateX$($availSpace$$114$$.x + $availSpace$$114$$.$w$ / 2);
      $label$$77$$.$setTranslateY$($availSpace$$114$$.y + $availSpace$$114$$.$h$ / 2);
      $axis$$41$$.$addChild$($label$$77$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($eventManager$$33$$, $container$$162$$, $text$$100_textString$$12$$, $cssStyle$$38$$, $width$$156$$, $height$$136$$) {
  var $params$$54$$ = {type:D.$DvtAxisConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$};
  $text$$100_textString$$12$$ = new D.$DvtOutputText$$($container$$162$$.$_context$, $text$$100_textString$$12$$, 0, 0);
  $text$$100_textString$$12$$.$setCSSStyle$($cssStyle$$38$$);
  return D.$DvtTextUtils$$.$fitText$($text$$100_textString$$12$$, $width$$156$$, $height$$136$$, $container$$162$$) ? ($eventManager$$33$$.$associate$($text$$100_textString$$12$$, new D.$DvtSimpleObjPeer$$($text$$100_textString$$12$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$54$$)), $text$$100_textString$$12$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisInfo$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAxisInfo$$, D.$DvtObj$$, "DvtAxisInfo");
D.$DvtAxisInfo$newInstance$$ = function $$DvtAxisInfo$newInstance$$$($context$$684$$, $options$$231$$, $availSpace$$103$$) {
  return $options$$231$$.timeAxisType && "disabled" != $options$$231$$.timeAxisType ? new D.$DvtTimeAxisInfo$$($context$$684$$, $options$$231$$, $availSpace$$103$$) : (0,window.isNaN)($options$$231$$.dataMin) && (0,window.isNaN)($options$$231$$.dataMax) ? new D.$DvtGroupAxisInfo$$($context$$684$$, $options$$231$$, $availSpace$$103$$) : new D.$DvtDataAxisInfo$$($context$$684$$, $options$$231$$, $availSpace$$103$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$685$$, $options$$232$$, $availSpace$$104$$) {
  this.$_context$ = $context$$685$$;
  this.$Position$ = $options$$232$$.position;
  this.$_radius$ = $options$$232$$._radius;
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$104$$.x, this.$EndCoord$ = $availSpace$$104$$.x + $availSpace$$104$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$104$$.y, this.$EndCoord$ = $availSpace$$104$$.y + $availSpace$$104$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && (D.$DvtAgent$$.$isRightToLeft$($context$$685$$) ? 
  (this.$StartCoord$ = 2 * window.Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * window.Math.PI));
  this.$MinViewportExtent$ = this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = D.$JSCompiler_alias_NULL$$;
  this.$EndOverflow$ = this.$StartOverflow$ = 0;
  $options$$232$$.leftBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$232$$.leftBuffer = window.Infinity);
  $options$$232$$.rightBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$232$$.rightBuffer = window.Infinity);
  this.$Options$ = $options$$232$$
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
D.$JSCompiler_prototypeAlias$$.$CreateLabel$ = function $$JSCompiler_prototypeAlias$$$$CreateLabel$$($context$$690_text$$95$$, $label$$70$$, $coord$$14$$) {
  if("tangential" == this.$Position$) {
    var $vTol$$ = 16 / 180 * window.Math.PI, $hTol$$ = 1 / 180 * window.Math.PI, $dist$$2$$ = this.$_radius$ + 5;
    if($coord$$14$$ < $hTol$$ || $coord$$14$$ > 2 * window.Math.PI - $hTol$$) {
      $dist$$2$$ += 5
    }
    $context$$690_text$$95$$ = new D.$DvtOutputText$$($context$$690_text$$95$$, $label$$70$$, $dist$$2$$ * window.Math.sin($coord$$14$$), -$dist$$2$$ * window.Math.cos($coord$$14$$));
    $coord$$14$$ < $hTol$$ || window.Math.abs($coord$$14$$ - window.Math.PI) < $hTol$$ || $coord$$14$$ > 2 * window.Math.PI - $hTol$$ ? $context$$690_text$$95$$.$alignCenter$() : $coord$$14$$ < window.Math.PI ? $context$$690_text$$95$$.$alignLeft$() : $context$$690_text$$95$$.$alignRight$();
    window.Math.abs($coord$$14$$ - window.Math.PI / 2) < $vTol$$ || window.Math.abs($coord$$14$$ - 3 * window.Math.PI / 2) < $vTol$$ ? $context$$690_text$$95$$.$alignMiddle$() : $coord$$14$$ < window.Math.PI / 2 || $coord$$14$$ > 3 * window.Math.PI / 2 ? $context$$690_text$$95$$.$alignBottom$() : $context$$690_text$$95$$.$alignTop$()
  }else {
    $context$$690_text$$95$$ = new D.$DvtOutputText$$($context$$690_text$$95$$, $label$$70$$, $coord$$14$$, $coord$$14$$), $context$$690_text$$95$$.$alignMiddle$(), $context$$690_text$$95$$.$alignCenter$()
  }
  $context$$690_text$$95$$.$setCSSStyle$(this.$Options$.tickLabel.style);
  return $context$$690_text$$95$$
};
D.$JSCompiler_StaticMethods_CreateGridLine$$ = function $$JSCompiler_StaticMethods_CreateGridLine$$$($JSCompiler_StaticMethods_CreateGridLine$self$$, $context$$691_line$$16$$, $stroke$$111$$, $coord$$15_points$$73$$) {
  var $usePixelHinting$$ = !D.$DvtAgent$$.$isTouchDevice$() || 1 < D.$DvtAgent$$.$getDevicePixelRatio$();
  "radial" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ("polygon" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$.polarGridShape ? ($coord$$15_points$$73$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$(0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$._numGroups, $coord$$15_points$$73$$), $context$$691_line$$16$$ = new D.$DvtPolygon$$($context$$691_line$$16$$, $coord$$15_points$$73$$)) : $context$$691_line$$16$$ = new D.$DvtCircle$$($context$$691_line$$16$$, 
  0, 0, $coord$$15_points$$73$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$691_line$$16$$)) : "tangential" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ($context$$691_line$$16$$ = new D.$DvtLine$$($context$$691_line$$16$$, 0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.sin($coord$$15_points$$73$$), -$JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.cos($coord$$15_points$$73$$)), 0.01 > $coord$$15_points$$73$$ % 
  window.Math.PI / 2 && $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$691_line$$16$$)) : ($context$$691_line$$16$$ = new D.$DvtLine$$($context$$691_line$$16$$, $coord$$15_points$$73$$, $coord$$15_points$$73$$, $coord$$15_points$$73$$, $coord$$15_points$$73$$), $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$691_line$$16$$));
  $context$$691_line$$16$$.$setStroke$($stroke$$111$$);
  $context$$691_line$$16$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$691_line$$16$$
};
D.$JSCompiler_StaticMethods_IsOverlapping$$ = function $$JSCompiler_StaticMethods_IsOverlapping$$$($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$, $labelDims$$4$$, $skippedLabels$$) {
  if(!$labelDims$$4$$ || 0 >= $labelDims$$4$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $fontSize$$13_isVert$$2$$ = (0,window.parseInt)($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$Options$.tickLabel.style.$getStyle$("font-size")), $gap$$19_gapHoriz$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ instanceof D.$DvtDataAxisInfo$$ ? 0.55 * $fontSize$$13_isVert$$2$$ : 0.3 * $fontSize$$13_isVert$$2$$, $gapVert_pointB1$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ instanceof D.$DvtDataAxisInfo$$ ? 0.35 * $fontSize$$13_isVert$$2$$ : 0.1 * $fontSize$$13_isVert$$2$$, 
  $gap$$19_gapHoriz$$ = ($fontSize$$13_isVert$$2$$ = "left" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$Position$ || "right" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$Position$ || "radial" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$Position$) || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$isLabelRotated$() ? $gapVert_pointB1$$ : $gap$$19_gapHoriz$$;
  $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$.$_context$);
  for(var $pointA1$$, $pointA2$$, $pointB2$$, $j$$108$$ = 0;$j$$108$$ < $labelDims$$4$$.length;$j$$108$$ += $skippedLabels$$ + 1) {
    if($labelDims$$4$$[$j$$108$$] != D.$JSCompiler_alias_NULL$$) {
      if($pointA1$$ == D.$JSCompiler_alias_NULL$$ || $pointA2$$ == D.$JSCompiler_alias_NULL$$) {
        $fontSize$$13_isVert$$2$$ ? ($pointA1$$ = $labelDims$$4$$[$j$$108$$].y, $pointA2$$ = $labelDims$$4$$[$j$$108$$].y + $labelDims$$4$$[$j$$108$$].$h$) : ($pointA1$$ = $labelDims$$4$$[$j$$108$$].x, $pointA2$$ = $labelDims$$4$$[$j$$108$$].x + $labelDims$$4$$[$j$$108$$].$w$)
      }else {
        if($fontSize$$13_isVert$$2$$) {
          if($gapVert_pointB1$$ = $labelDims$$4$$[$j$$108$$].y, $pointB2$$ = $labelDims$$4$$[$j$$108$$].y + $labelDims$$4$$[$j$$108$$].$h$, $gapVert_pointB1$$ >= $pointA1$$ && $gapVert_pointB1$$ - $gap$$19_gapHoriz$$ < $pointA2$$ || $gapVert_pointB1$$ < $pointA1$$ && $pointB2$$ + $gap$$19_gapHoriz$$ > $pointA1$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }else {
          if($gapVert_pointB1$$ = $labelDims$$4$$[$j$$108$$].x, $pointB2$$ = $labelDims$$4$$[$j$$108$$].x + $labelDims$$4$$[$j$$108$$].$w$, !$JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ && $gapVert_pointB1$$ - $gap$$19_gapHoriz$$ < $pointA2$$ || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$24$$ && $pointB2$$ + $gap$$19_gapHoriz$$ > $pointA1$$) {
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
  for(var $labelDims$$6$$ = [], $i$$798$$ = 0;$i$$798$$ < $labels$$12$$.length;$i$$798$$++) {
    var $dims$$62_text$$96$$ = $labels$$12$$[$i$$798$$];
    $dims$$62_text$$96$$ == D.$JSCompiler_alias_NULL$$ ? $labelDims$$6$$.push(D.$JSCompiler_alias_NULL$$) : ($dims$$62_text$$96$$ = $dims$$62_text$$96$$.$measureDimensions$($container$$157$$), $labelDims$$6$$.push($dims$$62_text$$96$$))
  }
  return $labelDims$$6$$
};
D.$JSCompiler_StaticMethods_GuessLabelDims$$ = function $$JSCompiler_StaticMethods_GuessLabelDims$$$($JSCompiler_StaticMethods_GuessLabelDims$self$$, $labels$$13$$, $container$$158$$, $fudgeFactor$$) {
  var $labelDims$$7$$ = [];
  "undefined" == typeof $fudgeFactor$$ && ($fudgeFactor$$ = 1);
  for(var $i$$799$$ = 0;$i$$799$$ < $labels$$13$$.length;$i$$799$$++) {
    var $dims$$63_text$$97$$ = $labels$$13$$[$i$$799$$];
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
D.$DvtDataAxisInfo$$ = function $$DvtDataAxisInfo$$$($context$$699$$, $options$$236$$, $availSpace$$107$$) {
  this.Init($context$$699$$, $options$$236$$, $availSpace$$107$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataAxisInfo$$, D.$DvtAxisInfo$$, "DvtDataAxisInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$700_zeroBaseline$$inline_8036$$, $continuousExtent$$inline_8037_options$$237$$, $availSpace$$108_scaleUnit$$inline_8038$$) {
  D.$DvtDataAxisInfo$$.$superclass$.Init.call(this, $context$$700_zeroBaseline$$inline_8036$$, $continuousExtent$$inline_8037_options$$237$$, $availSpace$$108_scaleUnit$$inline_8038$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? ("off" != $continuousExtent$$inline_8037_options$$237$$.tickLabel.rendered && "off" != $continuousExtent$$inline_8037_options$$237$$.rendered && (this.$StartOverflow$ = window.Math.max(10 - $continuousExtent$$inline_8037_options$$237$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $continuousExtent$$inline_8037_options$$237$$.rightBuffer, 0)), D.$DvtAgent$$.$isRightToLeft$($context$$700_zeroBaseline$$inline_8036$$) ? (this.$_minCoord$ = 
  this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
  this.$GlobalMin$ = $continuousExtent$$inline_8037_options$$237$$.min;
  this.$GlobalMax$ = $continuousExtent$$inline_8037_options$$237$$.max;
  this.$MinValue$ = $continuousExtent$$inline_8037_options$$237$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $continuousExtent$$inline_8037_options$$237$$.viewportMin;
  this.$MaxValue$ = $continuousExtent$$inline_8037_options$$237$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $continuousExtent$$inline_8037_options$$237$$.viewportMax;
  this.$_majorIncrement$ = $continuousExtent$$inline_8037_options$$237$$.step;
  this.$_minorIncrement$ = $continuousExtent$$inline_8037_options$$237$$.minorStep;
  this.$_minMajorIncrement$ = $continuousExtent$$inline_8037_options$$237$$.minStep;
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $continuousExtent$$inline_8037_options$$237$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $continuousExtent$$inline_8037_options$$237$$.tickLabel.converter);
  this.$DataMin$ = $continuousExtent$$inline_8037_options$$237$$.dataMin;
  this.$DataMax$ = $continuousExtent$$inline_8037_options$$237$$.dataMax;
  $context$$700_zeroBaseline$$inline_8036$$ = "zero" == this.$Options$.baselineScaling;
  $continuousExtent$$inline_8037_options$$237$$ = "on" == this.$Options$._continuousExtent;
  $context$$700_zeroBaseline$$inline_8036$$ && (this.$DataMin$ = window.Math.min(0, this.$DataMin$), this.$DataMax$ = window.Math.max(0, this.$DataMax$));
  $availSpace$$108_scaleUnit$$inline_8038$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$GlobalMin$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : this.$DataMin$, this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : this.$DataMax$);
  this.$DataMin$ == this.$DataMax$ && (this.$DataMin$ -= 3 * $availSpace$$108_scaleUnit$$inline_8038$$, this.$DataMax$ += 2 * $availSpace$$108_scaleUnit$$inline_8038$$);
  if(this.$GlobalMin$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$700_zeroBaseline$$inline_8036$$ && 0 <= this.$DataMin$) {
      this.$GlobalMin$ = 0
    }else {
      if($continuousExtent$$inline_8037_options$$237$$) {
        this.$GlobalMin$ = this.$DataMin$ - 0.1 * (this.$DataMax$ - this.$DataMin$), 0 <= this.$DataMin$ && (this.$GlobalMin$ = window.Math.max(this.$GlobalMin$, 0))
      }else {
        if(!$context$$700_zeroBaseline$$inline_8036$$ && this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$) {
          for(this.$GlobalMin$ = this.$GlobalMax$;this.$GlobalMin$ > this.$DataMin$;) {
            this.$GlobalMin$ -= $availSpace$$108_scaleUnit$$inline_8038$$
          }
        }else {
          this.$GlobalMin$ = window.Math.floor(this.$DataMin$ / $availSpace$$108_scaleUnit$$inline_8038$$) * $availSpace$$108_scaleUnit$$inline_8038$$
        }
      }
    }
  }
  if(this.$GlobalMax$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$700_zeroBaseline$$inline_8036$$ && 0 >= this.$DataMax$) {
      this.$GlobalMax$ = 0
    }else {
      if($continuousExtent$$inline_8037_options$$237$$) {
        this.$GlobalMax$ = this.$DataMax$ + 0.1 * (this.$DataMax$ - this.$DataMin$), 0 >= this.$DataMax$ && (this.$GlobalMax$ = window.Math.min(this.$GlobalMax$, 0))
      }else {
        if($context$$700_zeroBaseline$$inline_8036$$) {
          this.$GlobalMax$ = (window.Math.floor(this.$DataMax$ / $availSpace$$108_scaleUnit$$inline_8038$$) + 1) * $availSpace$$108_scaleUnit$$inline_8038$$
        }else {
          for(this.$GlobalMax$ = this.$GlobalMin$;this.$GlobalMax$ <= this.$DataMax$;) {
            this.$GlobalMax$ += $availSpace$$108_scaleUnit$$inline_8038$$
          }
        }
      }
    }
  }
  this.$GlobalMax$ == this.$GlobalMin$ && (this.$GlobalMax$ = 100, this.$GlobalMin$ = 0, $availSpace$$108_scaleUnit$$inline_8038$$ = (this.$GlobalMax$ - this.$GlobalMin$) / 10);
  this.$MinValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
  this.$MaxValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
  if(this.$MinValue$ != this.$GlobalMin$ || this.$MaxValue$ != this.$GlobalMax$) {
    $availSpace$$108_scaleUnit$$inline_8038$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$MinValue$, this.$MaxValue$)
  }
  this.$_majorIncrement$ = this.$_majorIncrement$ ? this.$_majorIncrement$ : $availSpace$$108_scaleUnit$$inline_8038$$;
  this.$_minMajorIncrement$ != D.$JSCompiler_alias_NULL$$ && this.$_majorIncrement$ < this.$_minMajorIncrement$ && (this.$_majorIncrement$ = this.$_minMajorIncrement$);
  this.$_majorTickCount$ = (this.$MaxValue$ - this.$getMinLabel$()) / this.$_majorIncrement$;
  this.$_minorIncrement$ != D.$JSCompiler_alias_NULL$$ && 2 <= this.$_majorIncrement$ / this.$_minorIncrement$ ? this.$_minorTickCount$ = this.$_majorIncrement$ / this.$_minorIncrement$ : (this.$_minorTickCount$ = 2, this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$)
};
D.$JSCompiler_prototypeAlias$$.$getMinLabel$ = function $$JSCompiler_prototypeAlias$$$$getMinLabel$$() {
  return"zero" == this.$Options$.baselineScaling || "on" == this.$Options$._continuousExtent && this.$Options$.min == D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(this.$MinValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : window.Math.ceil((this.$MinValue$ - this.$GlobalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$GlobalMin$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$701$$, $levelIdx$$3$$) {
  if($levelIdx$$3$$ && 0 < $levelIdx$$3$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $labels$$17$$ = [], $container$$161_labelDims$$10$$ = [], $container$$161_labelDims$$10$$ = $context$$701$$.$_stage$, $isTangential$$ = "tangential" == this.$Position$;
  this.$Options$.tickLabel && this.$Options$.tickLabel.scaling && (this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$(this.$MinValue$, this.$MaxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on"));
  for(var $i$$806$$ = 0;$i$$806$$ <= this.$_majorTickCount$;$i$$806$$++) {
    var $coord$$20_value$$139$$ = $i$$806$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if(!($isTangential$$ && $coord$$20_value$$139$$ == this.$MaxValue$)) {
      var $label$$73_text$$99$$ = this.$_formatValue$($coord$$20_value$$139$$), $coord$$20_value$$139$$ = this.$getUnboundedCoordAt$($coord$$20_value$$139$$), $label$$73_text$$99$$ = this.$CreateLabel$($context$$701$$, $label$$73_text$$99$$, $coord$$20_value$$139$$);
      $labels$$17$$.push($label$$73_text$$99$$)
    }
  }
  $isTangential$$ || ($container$$161_labelDims$$10$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$17$$, $container$$161_labelDims$$10$$), $labels$$17$$ = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$17$$, $container$$161_labelDims$$10$$));
  return $labels$$17$$
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$702$$) {
  var $axisLineOptions$$2_axisLineStroke$$2$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$2_axisLineStroke$$2$$.rendered ? ($axisLineOptions$$2_axisLineStroke$$2$$ = new D.$DvtSolidStroke$$($axisLineOptions$$2_axisLineStroke$$2$$.lineColor, 1, $axisLineOptions$$2_axisLineStroke$$2$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$702$$, $axisLineOptions$$2_axisLineStroke$$2$$, this.$_maxCoord$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$703$$) {
  var $gridlines$$4$$ = [], $coord$$21_value$$140$$, $line$$17_stroke$$112$$, $baselineStroke_majorTickOptions$$2$$ = this.$Options$.majorTick;
  if("off" == $baselineStroke_majorTickOptions$$2$$.rendered) {
    return $gridlines$$4$$
  }
  var $majorTickStroke$$2$$ = new D.$DvtSolidStroke$$($baselineStroke_majorTickOptions$$2$$.lineColor, 1, $baselineStroke_majorTickOptions$$2$$.lineWidth);
  $baselineStroke_majorTickOptions$$2$$.lineStyle && $majorTickStroke$$2$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($baselineStroke_majorTickOptions$$2$$.lineStyle));
  $baselineStroke_majorTickOptions$$2$$ = $majorTickStroke$$2$$.clone();
  if(this.$Options$._useBaselineColor) {
    var $baselineColor_i$$807$$ = D.$DvtColorUtils$$.$setAlpha$(this.$Options$.axisLine.lineColor, 0.75);
    $baselineStroke_majorTickOptions$$2$$.$setColor$($baselineColor_i$$807$$)
  }
  for($baselineColor_i$$807$$ = 0;$baselineColor_i$$807$$ <= this.$_majorTickCount$;$baselineColor_i$$807$$++) {
    $coord$$21_value$$140$$ = $baselineColor_i$$807$$ * this.$_majorIncrement$ + this.$getMinLabel$(), "tangential" == this.$Position$ && $coord$$21_value$$140$$ == this.$MaxValue$ || ($line$$17_stroke$$112$$ = 0 == $coord$$21_value$$140$$ ? $baselineStroke_majorTickOptions$$2$$ : $majorTickStroke$$2$$, $coord$$21_value$$140$$ = this.$getUnboundedCoordAt$($coord$$21_value$$140$$), $line$$17_stroke$$112$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$703$$, $line$$17_stroke$$112$$, 
    $coord$$21_value$$140$$), $gridlines$$4$$.push($line$$17_stroke$$112$$))
  }
  return $gridlines$$4$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$704$$) {
  var $gridlines$$5$$ = [], $coord$$22_line$$18_minorValue$$, $i$$808_minorTickOptions$$1$$ = this.$Options$.minorTick;
  if("on" != $i$$808_minorTickOptions$$1$$.rendered) {
    return $gridlines$$5$$
  }
  var $minorTickStroke$$1$$ = new D.$DvtSolidStroke$$($i$$808_minorTickOptions$$1$$.lineColor, 1, $i$$808_minorTickOptions$$1$$.lineWidth);
  $i$$808_minorTickOptions$$1$$.lineStyle && $minorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$808_minorTickOptions$$1$$.lineStyle));
  for($i$$808_minorTickOptions$$1$$ = -1;$i$$808_minorTickOptions$$1$$ <= this.$_majorTickCount$;$i$$808_minorTickOptions$$1$$++) {
    for(var $value$$141$$ = $i$$808_minorTickOptions$$1$$ * this.$_majorIncrement$ + this.$getMinLabel$(), $j$$114$$ = 1;$j$$114$$ < this.$_minorTickCount$;$j$$114$$++) {
      $coord$$22_line$$18_minorValue$$ = $value$$141$$ + $j$$114$$ * this.$_minorIncrement$;
      if($coord$$22_line$$18_minorValue$$ > this.$MaxValue$) {
        break
      }
      $coord$$22_line$$18_minorValue$$ < this.$MinValue$ || ($coord$$22_line$$18_minorValue$$ = this.$getUnboundedCoordAt$($coord$$22_line$$18_minorValue$$), $coord$$22_line$$18_minorValue$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$704$$, $minorTickStroke$$1$$, $coord$$22_line$$18_minorValue$$), $gridlines$$5$$.push($coord$$22_line$$18_minorValue$$))
    }
  }
  return $gridlines$$5$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$142$$) {
  return $value$$142$$ < this.$MinValue$ || $value$$142$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$142$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$24$$) {
  var $minCoord$$7$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$7$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$24$$ < $minCoord$$7$$ ? $coord$$24$$ = $minCoord$$7$$ : $coord$$24$$ > $maxCoord$$7$$ && ($coord$$24$$ = $maxCoord$$7$$);
  return this.$getUnboundedValueAt$($coord$$24$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$143$$) {
  $value$$143$$ < this.$MinValue$ ? $value$$143$$ = this.$MinValue$ : $value$$143$$ > this.$MaxValue$ && ($value$$143$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$143$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$25$$) {
  return this.$MinValue$ + ($coord$$25$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$144$$) {
  return this.$_minCoord$ + ($value$$144$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  var $baseline$$9$$ = 0;
  0 > this.$MaxValue$ ? $baseline$$9$$ = this.$MaxValue$ : 0 < this.$MinValue$ && ($baseline$$9$$ = this.$MinValue$);
  return this.$getCoordAt$($baseline$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$_formatValue$ = function $$JSCompiler_prototypeAlias$$$$_formatValue$$($value$$145$$) {
  if(this.$_converter$ && (this.$_converter$.getAsString || this.$_converter$.format)) {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$145$$, this.$_converter$)
    }
    if(this.$_converter$.getAsString) {
      return this.$_converter$.getAsString($value$$145$$)
    }
    if(this.$_converter$.format) {
      return this.$_converter$.format($value$$145$$)
    }
  }else {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$145$$)
    }
    var $decimals_t$$43$$ = window.Math.log(this.$_majorIncrement$) / window.Math.log(10), $decimals_t$$43$$ = window.Math.max(window.Math.ceil(-$decimals_t$$43$$), 0);
    return $value$$145$$.toFixed($decimals_t$$43$$)
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
D.$DvtGroupAxisInfo$$ = function $$DvtGroupAxisInfo$$$($context$$679$$, $options$$229$$, $availSpace$$101$$) {
  this.Init($context$$679$$, $options$$229$$, $availSpace$$101$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGroupAxisInfo$$, D.$DvtAxisInfo$$, "DvtGroupAxisInfo");
D.$DvtGroupAxisInfo$$.prototype.Init = function $$DvtGroupAxisInfo$$$$Init$($context$$680_isRTL$$20$$, $options$$230$$, $availSpace$$102_endOffset$$1_temp$$3$$) {
  D.$DvtGroupAxisInfo$$.$superclass$.Init.call(this, $context$$680_isRTL$$20$$, $options$$230$$, $availSpace$$102_endOffset$$1_temp$$3$$);
  $context$$680_isRTL$$20$$ = D.$DvtAgent$$.$isRightToLeft$($context$$680_isRTL$$20$$);
  if(("top" == this.$Position$ || "bottom" == this.$Position$) && $context$$680_isRTL$$20$$) {
    $availSpace$$102_endOffset$$1_temp$$3$$ = this.$StartCoord$, this.$StartCoord$ = this.$EndCoord$, this.$EndCoord$ = $availSpace$$102_endOffset$$1_temp$$3$$
  }
  this.$_groups$ = $options$$230$$.groups;
  $availSpace$$102_endOffset$$1_temp$$3$$ = 0 < $options$$230$$.endGroupOffset ? (0,window.Number)($options$$230$$.endGroupOffset) : 0;
  var $startOffset$$ = 0 < $options$$230$$.startGroupOffset ? (0,window.Number)($options$$230$$.startGroupOffset) : 0;
  this.$DataMin$ = 0;
  this.$DataMax$ = this.$_groups$.length - 1;
  this.$GlobalMin$ = $options$$230$$.min == D.$JSCompiler_alias_NULL$$ ? this.$DataMin$ - $startOffset$$ : $options$$230$$.min;
  this.$GlobalMax$ = $options$$230$$.max == D.$JSCompiler_alias_NULL$$ ? this.$DataMax$ + $availSpace$$102_endOffset$$1_temp$$3$$ : $options$$230$$.max;
  this.$MinValue$ = $options$$230$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $options$$230$$.viewportMin;
  this.$MaxValue$ = $options$$230$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $options$$230$$.viewportMax;
  var $startIndex$$3$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$230$$.viewportStartGroup), $endIndex$$4$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$230$$.viewportEndGroup);
  -1 != $startIndex$$3$$ && (this.$MinValue$ = $startIndex$$3$$ - $startOffset$$);
  -1 != $endIndex$$4$$ && (this.$MaxValue$ = $endIndex$$4$$ + $availSpace$$102_endOffset$$1_temp$$3$$);
  this.$_startBuffer$ = $context$$680_isRTL$$20$$ ? $options$$230$$.rightBuffer : $options$$230$$.leftBuffer;
  this.$_endBuffer$ = $context$$680_isRTL$$20$$ ? $options$$230$$.leftBuffer : $options$$230$$.rightBuffer;
  this.$_isLabelRotated$ = D.$JSCompiler_alias_FALSE$$;
  this.$_renderGridAtLabels$ = $options$$230$$._renderGridAtLabels
};
D.$JSCompiler_StaticMethods__rotateLabels$$ = function $$JSCompiler_StaticMethods__rotateLabels$$$($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$8$$, $container$$155_labelDims$$2$$, $overflow$$2_text$$92$$) {
  var $x$$315$$, $isRTL$$21$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__rotateLabels$self$$.$_context$);
  $JSCompiler_StaticMethods__rotateLabels$self$$.$_isLabelRotated$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__setOverflow$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $overflow$$2_text$$92$$, $overflow$$2_text$$92$$, $labels$$8$$);
  for(var $i$$791$$ = 0;$i$$791$$ < $labels$$8$$.length;$i$$791$$++) {
    $overflow$$2_text$$92$$ = $labels$$8$$[$i$$791$$], $overflow$$2_text$$92$$ != D.$JSCompiler_alias_NULL$$ && ($x$$315$$ = $overflow$$2_text$$92$$.$getX$(), $overflow$$2_text$$92$$.$setX$(0), $overflow$$2_text$$92$$.$setY$(0), $isRTL$$21$$ ? $overflow$$2_text$$92$$.$setRotation$(window.Math.PI / 2) : $overflow$$2_text$$92$$.$setRotation$(3 * window.Math.PI / 2), $overflow$$2_text$$92$$.$setTranslateX$($x$$315$$))
  }
  $container$$155_labelDims$$2$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$8$$, $container$$155_labelDims$$2$$);
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$8$$, $container$$155_labelDims$$2$$)
};
D.$DvtGroupAxisInfo$$.prototype.$isLabelRotated$ = (0,D.$JSCompiler_get$$)("$_isLabelRotated$");
D.$JSCompiler_StaticMethods__setOverflow$$ = function $$JSCompiler_StaticMethods__setOverflow$$$($JSCompiler_StaticMethods__setOverflow$self$$, $startOverflow$$, $endOverflow$$, $labels$$9$$) {
  $startOverflow$$ = window.Math.max($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_startBuffer$, 0);
  $endOverflow$$ = window.Math.max($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_endBuffer$, 0);
  var $i$$792_isRTL$$22$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods__setOverflow$self$$.$_context$);
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartCoord$ += ($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$) * ($i$$792_isRTL$$22$$ ? -1 : 1);
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndCoord$ -= ($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$) * ($i$$792_isRTL$$22$$ ? -1 : 1);
  for($i$$792_isRTL$$22$$ = 0;$i$$792_isRTL$$22$$ < $labels$$9$$.length;$i$$792_isRTL$$22$$++) {
    var $text$$93$$ = $labels$$9$$[$i$$792_isRTL$$22$$];
    $text$$93$$ && $text$$93$$.$setX$($JSCompiler_StaticMethods__setOverflow$self$$.$getCoordAt$($i$$792_isRTL$$22$$))
  }
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$ = $startOverflow$$;
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$ = $endOverflow$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$681$$, $levelIdx$$) {
  if($levelIdx$$ && 0 < $levelIdx$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $labels$$10$$ = [], $container$$156$$ = $context$$681$$.$_stage$, $isHoriz$$15$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = D.$DvtAgent$$.$isRightToLeft$($context$$681$$), $firstLabelDim_numLabels$$1$$ = this.$_groups$.length, $firstLabel_maxLabelDims$$1_startOverflow$$1$$, $lastLabel_lastLabelDim_text$$94$$, $i$$793$$ = 0;$i$$793$$ < $firstLabelDim_numLabels$$1$$;$i$$793$$++) {
    var $label$$67$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)(this, $i$$793$$), $coord$$6$$ = this.$getCoordAt$($i$$793$$);
    $coord$$6$$ != D.$JSCompiler_alias_NULL$$ ? ($lastLabel_lastLabelDim_text$$94$$ = this.$CreateLabel$($context$$681$$, $label$$67$$, $coord$$6$$), $labels$$10$$.push($lastLabel_lastLabelDim_text$$94$$), $firstLabel_maxLabelDims$$1_startOverflow$$1$$ || ($firstLabel_maxLabelDims$$1_startOverflow$$1$$ = $lastLabel_lastLabelDim_text$$94$$)) : $labels$$10$$.push(D.$JSCompiler_alias_NULL$$)
  }
  if("tangential" == this.$Position$) {
    return $labels$$10$$
  }
  $firstLabelDim_numLabels$$1$$ = $firstLabel_maxLabelDims$$1_startOverflow$$1$$.$measureDimensions$();
  $isHoriz$$15$$ && (this.$Options$._startOverflow != D.$JSCompiler_alias_NULL$$ && this.$Options$._endOverflow != D.$JSCompiler_alias_NULL$$ ? ($firstLabel_maxLabelDims$$1_startOverflow$$1$$ = this.$Options$._startOverflow, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = this.$Options$._endOverflow) : ($lastLabel_lastLabelDim_text$$94$$ = $lastLabel_lastLabelDim_text$$94$$.$measureDimensions$(), $firstLabel_maxLabelDims$$1_startOverflow$$1$$ = $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ ? 
  $firstLabelDim_numLabels$$1$$.$w$ + $firstLabelDim_numLabels$$1$$.x - this.$StartCoord$ : this.$StartCoord$ - $firstLabelDim_numLabels$$1$$.x, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ ? this.$EndCoord$ - $lastLabel_lastLabelDim_text$$94$$.x : $lastLabel_lastLabelDim_text$$94$$.$w$ + $lastLabel_lastLabelDim_text$$94$$.x - this.$EndCoord$), ($firstLabel_maxLabelDims$$1_startOverflow$$1$$ > this.$_startBuffer$ || $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ > 
  this.$_endBuffer$) && (0,D.$JSCompiler_StaticMethods__setOverflow$$)(this, $firstLabel_maxLabelDims$$1_startOverflow$$1$$, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$, $labels$$10$$));
  $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = [];
  $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$10$$, $container$$156$$, 0.3);
  $firstLabel_maxLabelDims$$1_startOverflow$$1$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$10$$, $container$$156$$);
  if(!(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $firstLabel_maxLabelDims$$1_startOverflow$$1$$, 0)) {
    return $labels$$10$$
  }
  if($isHoriz$$15$$) {
    if("auto" == this.$Options$.tickLabel.rotation) {
      if((0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$, 0)) {
        return(0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$10$$, $container$$156$$, $firstLabelDim_numLabels$$1$$.$h$ / 2)
      }
      $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$10$$, $container$$156$$);
      return(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$, 0) ? (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$10$$, $container$$156$$, $firstLabelDim_numLabels$$1$$.$h$ / 2) : $labels$$10$$
    }
    $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$10$$, $container$$156$$);
    return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$10$$, $endOverflow$$1_isRTL$$23_labelDims$$3_minLabelDims$$1$$)
  }
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$10$$, $firstLabel_maxLabelDims$$1_startOverflow$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$682$$) {
  var $axisLineOptions_axisLineStroke$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions_axisLineStroke$$.rendered ? ($axisLineOptions_axisLineStroke$$ = new D.$DvtSolidStroke$$($axisLineOptions_axisLineStroke$$.lineColor, 1, $axisLineOptions_axisLineStroke$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$682$$, $axisLineOptions_axisLineStroke$$, 0)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$683$$) {
  var $gridlines$$1$$ = [], $coord$$7_line$$15$$, $majorTickOptions_numGroups$$2_rendered$$4$$ = this.$Options$.majorTick, $majorTickStroke$$ = new D.$DvtSolidStroke$$($majorTickOptions_numGroups$$2_rendered$$4$$.lineColor, 1, $majorTickOptions_numGroups$$2_rendered$$4$$.lineWidth);
  $majorTickOptions_numGroups$$2_rendered$$4$$.lineStyle && $majorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($majorTickOptions_numGroups$$2_rendered$$4$$.lineStyle));
  $majorTickOptions_numGroups$$2_rendered$$4$$ = $majorTickOptions_numGroups$$2_rendered$$4$$.rendered;
  if("on" == $majorTickOptions_numGroups$$2_rendered$$4$$ || "auto" == $majorTickOptions_numGroups$$2_rendered$$4$$ && "tangential" == this.$Position$) {
    for(var $majorTickOptions_numGroups$$2_rendered$$4$$ = this.$_groups$.length, $i$$794$$ = 0;$i$$794$$ < $majorTickOptions_numGroups$$2_rendered$$4$$;$i$$794$$++) {
      if(this.$_renderGridAtLabels$) {
        $coord$$7_line$$15$$ = this.$getCoordAt$($i$$794$$)
      }else {
        if(this.$getCoordAt$($i$$794$$ + 0.5)) {
          $coord$$7_line$$15$$ = this.$getCoordAt$($i$$794$$ + 0.5)
        }else {
          continue
        }
      }
      $coord$$7_line$$15$$ != D.$JSCompiler_alias_NULL$$ && ($coord$$7_line$$15$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$683$$, $majorTickStroke$$, $coord$$7_line$$15$$), $gridlines$$1$$.push($coord$$7_line$$15$$))
    }
  }
  return $gridlines$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$126$$) {
  return $value$$126$$ < this.$MinValue$ || $value$$126$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$126$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$9$$) {
  var $minCoord$$3$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$3$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  $coord$$9$$ < $minCoord$$3$$ ? $coord$$9$$ = $minCoord$$3$$ : $coord$$9$$ > $maxCoord$$3$$ && ($coord$$9$$ = $maxCoord$$3$$);
  return this.$getUnboundedValueAt$($coord$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$127$$) {
  $value$$127$$ < this.$MinValue$ ? $value$$127$$ = this.$MinValue$ : $value$$127$$ >= this.$MaxValue$ && ($value$$127$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$127$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$10$$) {
  return this.$MinValue$ + ($coord$$10$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$128$$) {
  return this.$StartCoord$ + ($value$$128$$ - this.$MinValue$) * ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
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
  for(var $index$$143$$ = -1, $i$$795$$ = 0;$i$$795$$ < $JSCompiler_StaticMethods_getIndexByLabel$self$$.$_groups$.length;$i$$795$$++) {
    if($label$$69$$ == (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($JSCompiler_StaticMethods_getIndexByLabel$self$$, $i$$795$$)) {
      $index$$143$$ = $i$$795$$;
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
D.$DvtLinearScaleAxisValueFormatter$$.prototype.Init = function $$DvtLinearScaleAxisValueFormatter$$$$Init$($minValue$$16_scaleFactorDiff$$inline_7996$$, $maxValue$$18$$, $tickStep$$1$$, $i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$, $autoPrecision$$5$$) {
  this.$_scales$ = {};
  this.$_scalesOrder$ = [];
  this.$_factorToScaleMapping$ = {};
  var $createScale$$inline_7976_useAutoPrecision$$inline_7994$$ = function $$createScale$$inline_7976_useAutoPrecision$$inline_7994$$$($minValue$$16_scaleFactorDiff$$inline_7996$$, $maxValue$$18$$, $tickStep$$1$$) {
    var $i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$;
    this.$_bundle$ && $tickStep$$1$$ && ($i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_bundle$, $tickStep$$1$$, D.$JSCompiler_alias_NULL$$));
    $tickStep$$1$$ = {$scaleFactor$:$maxValue$$18$$, $localizedSuffix$:$i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$};
    this.$_scales$[$minValue$$16_scaleFactorDiff$$inline_7996$$] = $tickStep$$1$$;
    this.$_scalesOrder$.push($tickStep$$1$$);
    this.$_factorToScaleMapping$[$maxValue$$18$$] = $tickStep$$1$$
  };
  $createScale$$inline_7976_useAutoPrecision$$inline_7994$$.call(this, "none", 0);
  $createScale$$inline_7976_useAutoPrecision$$inline_7994$$.call(this, "thousand", 3, "SCALING_SUFFIX_THOUSAND");
  $createScale$$inline_7976_useAutoPrecision$$inline_7994$$.call(this, "million", 6, "SCALING_SUFFIX_MILLION");
  $createScale$$inline_7976_useAutoPrecision$$inline_7994$$.call(this, "billion", 9, "SCALING_SUFFIX_BILLION");
  $createScale$$inline_7976_useAutoPrecision$$inline_7994$$.call(this, "trillion", 12, "SCALING_SUFFIX_TRILLION");
  $createScale$$inline_7976_useAutoPrecision$$inline_7994$$.call(this, "quadrillion", 15, "SCALING_SUFFIX_QUADRILLION");
  this.$_scalesOrder$.sort(function($minValue$$16_scaleFactorDiff$$inline_7996$$, $maxValue$$18$$) {
    return $minValue$$16_scaleFactorDiff$$inline_7996$$.$scaleFactor$ < $maxValue$$18$$.$scaleFactor$ ? -1 : $minValue$$16_scaleFactorDiff$$inline_7996$$.$scaleFactor$ > $maxValue$$18$$.$scaleFactor$ ? 1 : 0
  });
  var $absMax$$inline_7995_findScale$$inline_7991_value$$inline_10606$$ = D.$JSCompiler_alias_FALSE$$, $decimalPlaces$$inline_7992$$, $scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$, $createScale$$inline_7976_useAutoPrecision$$inline_7994$$ = D.$JSCompiler_alias_FALSE$$;
  "off" !== $autoPrecision$$5$$ && ($createScale$$inline_7976_useAutoPrecision$$inline_7994$$ = D.$JSCompiler_alias_TRUE$$);
  $i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$ || ($i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$ = "auto");
  if($i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$ = this.$_scales$[$i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$]) {
    $scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$ = $i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$.$scaleFactor$
  }
  "number" !== typeof $scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$ && ($absMax$$inline_7995_findScale$$inline_7991_value$$inline_10606$$ = D.$JSCompiler_alias_TRUE$$);
  if($absMax$$inline_7995_findScale$$inline_7991_value$$inline_10606$$) {
    if($absMax$$inline_7995_findScale$$inline_7991_value$$inline_10606$$ = window.Math.max(window.Math.abs($minValue$$16_scaleFactorDiff$$inline_7996$$), window.Math.abs($maxValue$$18$$)), $absMax$$inline_7995_findScale$$inline_7991_value$$inline_10606$$ = (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($absMax$$inline_7995_findScale$$inline_7991_value$$inline_10606$$), $scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$ = 0, $absMax$$inline_7995_findScale$$inline_7991_value$$inline_10606$$ <= 
    this.$_scalesOrder$[0].$scaleFactor$) {
      $scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$ = this.$_scalesOrder$[0].$scaleFactor$
    }else {
      if($absMax$$inline_7995_findScale$$inline_7991_value$$inline_10606$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$
      }else {
        for($i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$ = this.$_scalesOrder$.length - 1;0 <= $i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$;$i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$--) {
          if(this.$_scalesOrder$[$i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$].$scaleFactor$ <= $absMax$$inline_7995_findScale$$inline_7991_value$$inline_10606$$) {
            $scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$ = this.$_scalesOrder$[$i$$inline_10608_scale$$63_scale$$inline_10603_scaleName$$inline_10601$$].$scaleFactor$;
            break
          }
        }
      }
    }
  }
  $createScale$$inline_7976_useAutoPrecision$$inline_7994$$ === D.$JSCompiler_alias_TRUE$$ && (0 == $tickStep$$1$$ && $minValue$$16_scaleFactorDiff$$inline_7996$$ == $maxValue$$18$$ ? ($minValue$$16_scaleFactorDiff$$inline_7996$$ = $scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($maxValue$$18$$), $decimalPlaces$$inline_7992$$ = 0 >= $minValue$$16_scaleFactorDiff$$inline_7996$$ ? 3 + $minValue$$16_scaleFactorDiff$$inline_7996$$ : 
  window.Math.max($minValue$$16_scaleFactorDiff$$inline_7996$$, 4)) : $decimalPlaces$$inline_7992$$ = window.Math.max($scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($tickStep$$1$$), 0));
  this.$_useAutoPrecision$ = $createScale$$inline_7976_useAutoPrecision$$inline_7994$$;
  this.$_scaleFactor$ = $scaleFactor$$inline_10602_scaleFactor$$inline_10607_scaleFactor$$inline_7993$$;
  this.$_decimalPlaces$ = $decimalPlaces$$inline_7992$$
};
D.$DvtLinearScaleAxisValueFormatter$$.prototype.$format$ = function $$DvtLinearScaleAxisValueFormatter$$$$$format$$($value$$130$$, $converter$$5$$) {
  var $formatted$$inline_8000_parsed$$ = (0,window.parseFloat)($value$$130$$);
  if((0,window.isNaN)($formatted$$inline_8000_parsed$$)) {
    return $value$$130$$
  }
  var $i$$797_suffix$$3$$;
  if(0 < this.$_scaleFactor$) {
    for($i$$797_suffix$$3$$ = 0;$i$$797_suffix$$3$$ < this.$_scaleFactor$;$i$$797_suffix$$3$$++) {
      $formatted$$inline_8000_parsed$$ /= 10
    }
    $i$$797_suffix$$3$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$
  }
  if($converter$$5$$ && $converter$$5$$.getAsString) {
    $formatted$$inline_8000_parsed$$ = $converter$$5$$.getAsString($formatted$$inline_8000_parsed$$)
  }else {
    if($converter$$5$$ && $converter$$5$$.format) {
      $formatted$$inline_8000_parsed$$ = $converter$$5$$.format($formatted$$inline_8000_parsed$$)
    }else {
      if(this.$_useAutoPrecision$ && !(0,window.isNaN)((0,window.parseFloat)($formatted$$inline_8000_parsed$$)) && ($formatted$$inline_8000_parsed$$ = (0,window.parseFloat)((new window.Number($formatted$$inline_8000_parsed$$)).toFixed(this.$_decimalPlaces$)), $formatted$$inline_8000_parsed$$ = "" + $formatted$$inline_8000_parsed$$, 0 < this.$_decimalPlaces$)) {
        -1 == $formatted$$inline_8000_parsed$$.indexOf(".") && ($formatted$$inline_8000_parsed$$ += ".");
        for(var $existingPlacesCount$$inline_8001$$ = $formatted$$inline_8000_parsed$$.substring($formatted$$inline_8000_parsed$$.indexOf(".") + 1).length;$existingPlacesCount$$inline_8001$$ < this.$_decimalPlaces$;) {
          $formatted$$inline_8000_parsed$$ += "0", $existingPlacesCount$$inline_8001$$++
        }
      }
    }
  }
  "string" === typeof $i$$797_suffix$$3$$ && ($formatted$$inline_8000_parsed$$ += $i$$797_suffix$$3$$);
  return $formatted$$inline_8000_parsed$$
};
D.$JSCompiler_StaticMethods__getPowerOfTen$$ = function $$JSCompiler_StaticMethods__getPowerOfTen$$$($value$$132$$) {
  $value$$132$$ = 0 <= $value$$132$$ ? $value$$132$$ : -$value$$132$$;
  var $power$$1$$ = 0;
  if(1E-15 > $value$$132$$) {
    return 0
  }
  if(window.Infinity == $value$$132$$) {
    return window.Number.MAX_VALUE
  }
  if(10 <= $value$$132$$) {
    for(;10 <= $value$$132$$;) {
      $power$$1$$ += 1, $value$$132$$ /= 10
    }
  }else {
    if(1 > $value$$132$$) {
      for(;1 > $value$$132$$;) {
        $power$$1$$ -= 1, $value$$132$$ *= 10
      }
    }
  }
  return $power$$1$$
};
D.$DvtTimeAxisInfo$$ = function $$DvtTimeAxisInfo$$$($context$$692$$, $options$$234$$, $availSpace$$105$$) {
  this.Init($context$$692$$, $options$$234$$, $availSpace$$105$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeAxisInfo$$, D.$DvtAxisInfo$$, "DvtTimeAxisInfo");
D.$DvtTimeAxisInfo$TIME_MONTH$$ = 864E5 * (365 / 12);
D.$DvtTimeAxisInfo$$.prototype.Init = function $$DvtTimeAxisInfo$$$$Init$($bundle$$8_context$$693_endOffset$$2$$, $options$$235$$, $availSpace$$106_startOffset$$1$$) {
  D.$DvtTimeAxisInfo$$.$superclass$.Init.call(this, $bundle$$8_context$$693_endOffset$$2$$, $options$$235$$, $availSpace$$106_startOffset$$1$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (!$options$$235$$._isOverview && "on" == $options$$235$$.tickLabel.rendered && (this.$StartOverflow$ = window.Math.max(10 - $options$$235$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $options$$235$$.rightBuffer, 0)), D.$DvtAgent$$.$isRightToLeft$($bundle$$8_context$$693_endOffset$$2$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = 
  this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$);
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $options$$235$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $options$$235$$.tickLabel.converter);
  this.$_groups$ = $options$$235$$.groups;
  this.$DataMin$ = $options$$235$$.dataMin;
  this.$DataMax$ = $options$$235$$.dataMax;
  this.$_averageInterval$ = 0 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0;
  $bundle$$8_context$$693_endOffset$$2$$ = 0 < $options$$235$$.endGroupOffset ? $options$$235$$.endGroupOffset * this.$_averageInterval$ : 0;
  $availSpace$$106_startOffset$$1$$ = 0 < $options$$235$$.startGroupOffset ? $options$$235$$.startGroupOffset * this.$_averageInterval$ : 0;
  this.$GlobalMin$ = $options$$235$$.min != D.$JSCompiler_alias_NULL$$ ? $options$$235$$.min : this.$DataMin$ - $availSpace$$106_startOffset$$1$$;
  this.$GlobalMax$ = $options$$235$$.max != D.$JSCompiler_alias_NULL$$ ? $options$$235$$.max : this.$DataMax$ + $bundle$$8_context$$693_endOffset$$2$$;
  this.$MinValue$ = $options$$235$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $options$$235$$.viewportMin;
  this.$MaxValue$ = $options$$235$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $options$$235$$.viewportMax;
  $options$$235$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = $options$$235$$.viewportStartGroup - $availSpace$$106_startOffset$$1$$);
  $options$$235$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $options$$235$$.viewportEndGroup + $bundle$$8_context$$693_endOffset$$2$$);
  this.$_timeZoneOffset$ = 0;
  this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
  this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$;
  this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$;
  $bundle$$8_context$$693_endOffset$$2$$ = new D.$DvtUtilBundle$$;
  this.$_timeAxisResources$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, "MONTH_SHORT_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, "MONTH_SHORT_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, "MONTH_SHORT_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, 
  "MONTH_SHORT_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, "MONTH_SHORT_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, "MONTH_SHORT_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, "MONTH_SHORT_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, 
  "MONTH_SHORT_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, "MONTH_SHORT_SEPTEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, "MONTH_SHORT_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, "MONTH_SHORT_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_context$$693_endOffset$$2$$, 
  "MONTH_SHORT_DECEMBER", D.$JSCompiler_alias_NULL$$)];
  this.$_renderGridAtLabels$ = $options$$235$$._renderGridAtLabels
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
  for(var $i$$800$$ = 0;$i$$800$$ < $dayChar_dmyOrder$$.length;$i$$800$$++) {
    $showDay$$ && "D" == $dayChar_dmyOrder$$[$i$$800$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $date$$15_dayStr$$ + " " : $showMonth$$ && "M" == $dayChar_dmyOrder$$[$i$$800$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $monthStr$$ + " " : $showYear$$ && "Y" == $dayChar_dmyOrder$$[$i$$800$$] && ($JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $yearStr$$ + " ")
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
D.$DvtTimeAxisInfo$$.prototype.$getLabels$ = function $$DvtTimeAxisInfo$$$$$getLabels$$($context$$695$$, $levelIdx$$2$$) {
  if($levelIdx$$2$$ && 1 < $levelIdx$$2$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(!this.$_level1Labels$) {
    var $labels1$$inline_8005$$ = [], $labels2$$inline_8006$$ = [], $coords1$$inline_8007$$ = [], $coords2$$inline_8008$$ = [], $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ = D.$JSCompiler_alias_NULL$$, $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = 0, $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ = 0, $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ = 
    $context$$695$$.$_stage$, $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = D.$DvtAgent$$.$isRightToLeft$($context$$695$$), $isVert$$inline_8014_labels1$$inline_10634$$ = "left" == this.$Position$ || "right" == this.$Position$, $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$ = "off" != this.$Options$.zoomAndScroll;
    if($j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$) {
      var $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ = D.$JSCompiler_alias_TRUE$$
    }
    var $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ = 0;
    $isVert$$inline_8014_labels1$$inline_10634$$ && D.$DvtAgent$$.$isBrowserChrome$() && ($gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ = 0.2 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")));
    var $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$ = [], $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = 0;
    if("mixedFrequency" == this.$Options$.timeAxisType) {
      for(var $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$ = this.$MinValue$, $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = 31536E6 <= this.$_averageInterval$ ? 31536E6 : this.$_averageInterval$ >= D.$DvtTimeAxisInfo$TIME_MONTH$$ ? D.$DvtTimeAxisInfo$TIME_MONTH$$ : 864E5 <= this.$_averageInterval$ ? 864E5 : 36E5 <= this.$_averageInterval$ ? 36E5 : 6E4 <= this.$_averageInterval$ ? 
      6E4 : 1E3;$date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$ <= this.$MaxValue$;) {
        $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$.push($date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$), $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$ += $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$
      }
      $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = window.Math.floor(this.$_averageInterval$ / $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$) - 1
    }else {
      $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$ = this.$_groups$
    }
    for(var $i$$inline_8022_pointA1$$inline_10627$$ = 0;$i$$inline_8022_pointA1$$inline_10627$$ < $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$.length;$i$$inline_8022_pointA1$$inline_10627$$++) {
      var $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$ = $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$[$i$$inline_8022_pointA1$$inline_10627$$], $coord$$inline_8023_pointA2$$inline_10628$$ = this.$getCoordAt$($date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$);
      if($coord$$inline_8023_pointA2$$inline_10628$$ != D.$JSCompiler_alias_NULL$$) {
        var $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$ = new window.Date($date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$ + this.$_timeZoneOffset$), $j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$, $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$), $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ = 
        $j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$[0], $j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$ = $j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$[1];
        $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ != D.$JSCompiler_alias_NULL$$ ? ($j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$ != D.$JSCompiler_alias_NULL$$ ? $labels1$$inline_8005$$.push(this.$CreateLabel$($context$$695$$, $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$, $coord$$inline_8023_pointA2$$inline_10628$$ + $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$)) : 
        $labels1$$inline_8005$$.push(this.$CreateLabel$($context$$695$$, $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$, $coord$$inline_8023_pointA2$$inline_10628$$)), $coords1$$inline_8007$$.push($coord$$inline_8023_pointA2$$inline_10628$$)) : ($labels1$$inline_8005$$.push(D.$JSCompiler_alias_NULL$$), $coords1$$inline_8007$$.push(D.$JSCompiler_alias_NULL$$));
        $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$ && $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ && ($coord$$inline_8023_pointA2$$inline_10628$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$inline_8023_pointA2$$inline_10628$$, $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ = D.$JSCompiler_alias_FALSE$$);
        $j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$ != D.$JSCompiler_alias_NULL$$ ? ($label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ = D.$JSCompiler_alias_NULL$$, $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ = $j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$ != D.$JSCompiler_alias_NULL$$ ? this.$CreateLabel$($context$$695$$, $j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$, $coord$$inline_8023_pointA2$$inline_10628$$ - 
        $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$) : this.$CreateLabel$($context$$695$$, $j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$, $coord$$inline_8023_pointA2$$inline_10628$$), $coords2$$inline_8008$$.push($coord$$inline_8023_pointA2$$inline_10628$$), $isVert$$inline_8014_labels1$$inline_10634$$ || ($count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ ? 
        $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$.$alignRight$() : $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$.$alignLeft$()), $labels2$$inline_8006$$.push($label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$), this.$_isOneLevel$ = D.$JSCompiler_alias_FALSE$$) : ($labels2$$inline_8006$$.push(D.$JSCompiler_alias_NULL$$), $coords2$$inline_8008$$.push(D.$JSCompiler_alias_NULL$$));
        $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ = $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$
      }
    }
    $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ = $labels1$$inline_8005$$;
    $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels1$$inline_8005$$, $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$);
    $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$ = $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$;
    $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = [];
    for($bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = 0;$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ < $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$.length;$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$++) {
      $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$[$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$] != D.$JSCompiler_alias_NULL$$ && $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$.push($gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$[$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$])
    }
    $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ = $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$;
    for($bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$, $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$);$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$;) {
      $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$++, $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$, 
      $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$)
    }
    $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$.length;
    if(0 < $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$) {
      for($bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$ = 0;$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ < $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$.length;$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$++) {
        $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$[$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$] != D.$JSCompiler_alias_NULL$$ && (0 != $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$ % ($gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ + 
        1) && ($first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$[$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$] = D.$JSCompiler_alias_NULL$$, $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$--), $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$++)
      }
    }
    $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$;
    $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ = $labels2$$inline_8006$$;
    $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels2$$inline_8006$$, $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$);
    if(!$c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ || 0 >= $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$.length) {
      $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ = D.$JSCompiler_alias_FALSE$$
    }else {
      $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ = ($count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = "left" == this.$Position$ || "right" == this.$Position$) ? this.$Options$.layout.verticalAxisGap : this.$Options$.layout.horizontalAxisGap;
      $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$ = 0;
      if($c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[0] != D.$JSCompiler_alias_NULL$$) {
        $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ ? ($i$$inline_8022_pointA1$$inline_10627$$ = $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[0].y, $coord$$inline_8023_pointA2$$inline_10628$$ = $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[0].y + $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[0].$h$) : 
        ($i$$inline_8022_pointA1$$inline_10627$$ = $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[0].x, $coord$$inline_8023_pointA2$$inline_10628$$ = $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[0].x + $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[0].$w$);
        $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$++;
        for($j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$ = 1;$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$ < $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$.length;$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$++) {
          $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$] != D.$JSCompiler_alias_NULL$$ && ($count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ ? ($label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ = $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$].y, 
          $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$ = $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$].y + $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$].$h$) : ($label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ = $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$].x, 
          $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$ = $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$].x + $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$[$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$].$w$), ($label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ >= $i$$inline_8022_pointA1$$inline_10627$$ && 
          $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ - $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ < $coord$$inline_8023_pointA2$$inline_10628$$ || $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$ < $i$$inline_8022_pointA1$$inline_10627$$ && $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$ + $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ > 
          $i$$inline_8022_pointA1$$inline_10627$$) && ($first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$[$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$] = D.$JSCompiler_alias_NULL$$), $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$[$j$$inline_10631_label2$$inline_8027_twoLabels$$inline_8025$$] != D.$JSCompiler_alias_NULL$$ && ($i$$inline_8022_pointA1$$inline_10627$$ = $label1$$inline_8026_pointB1$$inline_10629_prevDate$$inline_8009_text$$inline_8028$$, 
          $coord$$inline_8023_pointA2$$inline_10628$$ = $date$$inline_8024_pointB2$$inline_10630_time$$inline_8020$$, $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$++))
        }
      }
      $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ = $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$
    }
    if(!$j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$) {
      if($bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ <= 1.5 * $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ && 1 < $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$) {
        $labels1$$inline_8005$$ = $labels2$$inline_8006$$;
        $labels2$$inline_8006$$ = D.$JSCompiler_alias_NULL$$;
        for($j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$ = 0;$j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$ < $labels1$$inline_8005$$.length;$j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$++) {
          $labels1$$inline_8005$$[$j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$] != D.$JSCompiler_alias_NULL$$ && $labels1$$inline_8005$$[$j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$].$alignCenter$()
        }
      }else {
        2 > $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ && ($labels2$$inline_8006$$ = D.$JSCompiler_alias_NULL$$)
      }
    }
    2 > $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ && (this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$);
    if($isVert$$inline_8014_labels1$$inline_10634$$ && $labels2$$inline_8006$$ != D.$JSCompiler_alias_NULL$$) {
      for(var $isVert$$inline_8014_labels1$$inline_10634$$ = $labels1$$inline_8005$$, $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$ = $labels2$$inline_8006$$, $gap$$inline_10636$$ = 0.1 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")), $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$ = function $$c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$$($context$$695$$, 
      $levelIdx$$2$$) {
        return $levelIdx$$2$$.y >= $context$$695$$.y && $levelIdx$$2$$.y - $gap$$inline_10636$$ < $context$$695$$.y + $context$$695$$.$h$ || $levelIdx$$2$$.y < $context$$695$$.y && $levelIdx$$2$$.y + $levelIdx$$2$$.$h$ + $gap$$inline_10636$$ > $context$$695$$.y ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
      }, $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = D.$JSCompiler_alias_NULL$$, $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = D.$JSCompiler_alias_FALSE$$, $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ = 0;$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ < 
      $isVert$$inline_8014_labels1$$inline_10634$$.length;$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$++) {
        if($isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$] && $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$]) {
          if($isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$].$alignTop$(), $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$].$alignBottom$(), $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ && $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$($bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$, 
          $isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$].$measureDimensions$())) {
            $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            if($isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ + 1] && $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$($isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$].$measureDimensions$(), $isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ + 
            1].$measureDimensions$())) {
              $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = D.$JSCompiler_alias_TRUE$$;
              break
            }else {
              $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$].$measureDimensions$()
            }
          }
        }else {
          if($isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$] || $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$]) {
            if($gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ = $isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$] ? $isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$] : $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$], 
            $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ && $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$($bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$, $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$.$measureDimensions$())) {
              $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = D.$JSCompiler_alias_TRUE$$;
              break
            }else {
              $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$.$measureDimensions$()
            }
          }
        }
      }
      if($count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$) {
        $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ = $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = D.$JSCompiler_alias_NULL$$;
        for($first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ = 0;$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$ < $isVert$$inline_8014_labels1$$inline_10634$$.length;$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$++) {
          $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$] ? ($isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$] = D.$JSCompiler_alias_NULL$$, $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$].$alignMiddle$(), $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$ = 
          $j$$inline_8029_labels2$$inline_10635_scrollable$$inline_8015$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$].$measureDimensions$(), $count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ && $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$($count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$, 
          $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$) && ($isVert$$inline_8014_labels1$$inline_10634$$[$bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$] = D.$JSCompiler_alias_NULL$$), $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ = $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$) : 
          $isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$] && ($count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$ = $isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$].$measureDimensions$(), $gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$ && 
          $c2$$inline_8011_container$$inline_8012_isOverlapping$$inline_10637_labelDims$$inline_10623$$($gap$$inline_10625_label$$inline_10641_labelDims$$inline_10612_lastLv2Dims$$inline_10644_levelsGap$$inline_8017_skippedLabels$$inline_10616$$, $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$) ? $isVert$$inline_8014_labels1$$inline_10634$$[$first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$] = D.$JSCompiler_alias_NULL$$ : 
          ($count$$inline_10618_isRTL$$inline_8013_isVert$$inline_10624_lastLv1Dims$$inline_10643_overlapping$$inline_10639_shortLabelDims$$inline_10614$$ = $count$$inline_10626_dims$$inline_10645_minSkip$$inline_10613_n$$inline_10619_times$$inline_8018$$, $bOverlaps$$inline_10617_c1$$inline_8010_interval$$inline_8021_j$$inline_10615_lastDims$$inline_10638_lastLv1Idx$$inline_10642_minSkip$$inline_8019$$ = $first$$inline_8016_i$$inline_10640_labels$$inline_10611_labels$$inline_10622$$))
        }
      }
    }
    this.$_level1Labels$ = $labels1$$inline_8005$$;
    this.$_level2Labels$ = $labels2$$inline_8006$$;
    this.$_level1Coords$ = $coords1$$inline_8007$$;
    this.$_level2Coords$ = $coords2$$inline_8008$$
  }
  return 1 == $levelIdx$$2$$ ? this.$_level2Labels$ : this.$_level1Labels$
};
D.$DvtTimeAxisInfo$$.prototype.$getAxisLine$ = function $$DvtTimeAxisInfo$$$$$getAxisLine$$($context$$696$$) {
  var $axisLineOptions$$1_axisLineStroke$$1$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$1_axisLineStroke$$1$$.rendered ? ($axisLineOptions$$1_axisLineStroke$$1$$ = new D.$DvtSolidStroke$$($axisLineOptions$$1_axisLineStroke$$1$$.lineColor, 1, $axisLineOptions$$1_axisLineStroke$$1$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$696$$, $axisLineOptions$$1_axisLineStroke$$1$$, 10)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getGridLineShift$$ = function $$JSCompiler_StaticMethods__getGridLineShift$$$($JSCompiler_StaticMethods__getGridLineShift$self$$, $i$$803$$) {
  if($JSCompiler_StaticMethods__getGridLineShift$self$$.$_renderGridAtLabels$) {
    return 0
  }
  for(var $curr$$1$$ = $JSCompiler_StaticMethods__getGridLineShift$self$$.$_level1Coords$[$i$$803$$], $prev$$ = D.$JSCompiler_alias_NULL$$, $j$$113$$ = $i$$803$$ - 1;0 <= $j$$113$$;$j$$113$$--) {
    if($JSCompiler_StaticMethods__getGridLineShift$self$$.$_level1Coords$[$j$$113$$] != D.$JSCompiler_alias_NULL$$) {
      $prev$$ = $JSCompiler_StaticMethods__getGridLineShift$self$$.$_level1Coords$[$j$$113$$];
      break
    }
  }
  return $prev$$ == D.$JSCompiler_alias_NULL$$ ? window.Infinity : ($curr$$1$$ - $prev$$) / 2
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$697$$) {
  var $gridlines$$2_majorTickOptions$$1$$ = this.$Options$.majorTick;
  if("on" != $gridlines$$2_majorTickOptions$$1$$.rendered) {
    return[]
  }
  var $coords$$18$$ = [];
  if(this.$_isOneLevel$) {
    for(var $i$$804$$ = 0;$i$$804$$ < this.$_level1Coords$.length;$i$$804$$++) {
      this.$_level1Coords$[$i$$804$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$804$$] != D.$JSCompiler_alias_NULL$$ && $coords$$18$$.push(this.$_level1Coords$[$i$$804$$] - (0,D.$JSCompiler_StaticMethods__getGridLineShift$$)(this, $i$$804$$))
    }
  }else {
    for($i$$804$$ = 1;$i$$804$$ < this.$_level2Coords$.length;$i$$804$$++) {
      this.$_level2Coords$[$i$$804$$] != D.$JSCompiler_alias_NULL$$ && $coords$$18$$.push(this.$_level2Coords$[$i$$804$$] - (0,D.$JSCompiler_StaticMethods__getGridLineShift$$)(this, $i$$804$$))
    }
  }
  var $majorTickStroke$$1$$ = new D.$DvtSolidStroke$$($gridlines$$2_majorTickOptions$$1$$.lineColor, 1, $gridlines$$2_majorTickOptions$$1$$.lineWidth);
  $gridlines$$2_majorTickOptions$$1$$.lineStyle && $majorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$2_majorTickOptions$$1$$.lineStyle));
  $gridlines$$2_majorTickOptions$$1$$ = [];
  for($i$$804$$ = 0;$i$$804$$ < $coords$$18$$.length;$i$$804$$++) {
    $coords$$18$$[$i$$804$$] >= this.$_minCoord$ && $coords$$18$$[$i$$804$$] <= this.$_maxCoord$ && $gridlines$$2_majorTickOptions$$1$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$697$$, $majorTickStroke$$1$$, $coords$$18$$[$i$$804$$]))
  }
  return $gridlines$$2_majorTickOptions$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$698$$) {
  var $gridlines$$3_minorTickOptions$$ = this.$Options$.minorTick;
  if("on" != $gridlines$$3_minorTickOptions$$.rendered || this.$_isOneLevel$) {
    return[]
  }
  for(var $coords$$19$$ = [], $i$$805$$ = 0;$i$$805$$ < this.$_level1Coords$.length;$i$$805$$++) {
    this.$_level1Coords$[$i$$805$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$805$$] != D.$JSCompiler_alias_NULL$$ && $coords$$19$$.push(this.$_level1Coords$[$i$$805$$] - (0,D.$JSCompiler_StaticMethods__getGridLineShift$$)(this, $i$$805$$))
  }
  var $minorTickStroke$$ = new D.$DvtSolidStroke$$($gridlines$$3_minorTickOptions$$.lineColor, 1, $gridlines$$3_minorTickOptions$$.lineWidth);
  $gridlines$$3_minorTickOptions$$.lineStyle && $minorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$3_minorTickOptions$$.lineStyle));
  $gridlines$$3_minorTickOptions$$ = [];
  for($i$$805$$ = 0;$i$$805$$ < $coords$$19$$.length;$i$$805$$++) {
    $coords$$19$$[$i$$805$$] >= this.$_minCoord$ && $coords$$19$$[$i$$805$$] <= this.$_maxCoord$ && $gridlines$$3_minorTickOptions$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$698$$, $minorTickStroke$$, $coords$$19$$[$i$$805$$]))
  }
  return $gridlines$$3_minorTickOptions$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$136$$) {
  return $value$$136$$ < this.$MinValue$ || $value$$136$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$136$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$18$$) {
  var $minCoord$$5$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$5$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$18$$ < $minCoord$$5$$ ? $coord$$18$$ = $minCoord$$5$$ : $coord$$18$$ > $maxCoord$$5$$ && ($coord$$18$$ = $maxCoord$$5$$);
  return this.$getUnboundedValueAt$($coord$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$137$$) {
  $value$$137$$ < this.$MinValue$ ? $value$$137$$ = this.$MinValue$ : $value$$137$$ > this.$MaxValue$ && ($value$$137$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$137$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$19$$) {
  return this.$MinValue$ + ($coord$$19$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$138$$) {
  return this.$_minCoord$ + ($value$$138$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
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