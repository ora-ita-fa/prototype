define(['./DvtToolkit', './DvtAxis'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtGauge", D.$DvtGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGauge$$, D.$DvtBaseComponent$$, "DvtGauge");
D.$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$8$$, $callback$$27$$, $callbackObj$$4$$, $bStaticRendering$$2$$) {
  D.$DvtGauge$$.$superclass$.Init.call(this, $context$$8$$, $callback$$27$$, $callbackObj$$4$$);
  this.$Bundle$ = new D.$DvtGaugeBundle$$;
  $bStaticRendering$$2$$ || (this.$_eventHandler$ = this.$CreateEventHandler$(), this.$_eventHandler$.$addListeners$(this), this.setId("gauge1000" + window.Math.floor(1E9 * window.Math.random())), this.$_editingOverlay$ = new D.$DvtRect$$($context$$8$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_editingOverlay$), this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$5$$) {
  this.$Options$ = $options$$5$$;
  D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_523_options$$6$$, $oldShapes_width$$14$$, $container$$2_height$$14$$) {
  $bBlackBoxUpdate$$inline_523_options$$6$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_523_options$$6$$) : this.$Options$ || this.$SetOptions$(D.$JSCompiler_alias_NULL$$);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort(D.$DvtGauge$_thresholdComparator$$));
  !(0,window.isNaN)($oldShapes_width$$14$$) && !(0,window.isNaN)($container$$2_height$$14$$) && (this.$Width$ = $oldShapes_width$$14$$, this.$Height$ = $container$$2_height$$14$$);
  $oldShapes_width$$14$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$2_height$$14$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChildAt$($container$$2_height$$14$$, 0);
  this.$Render$($container$$2_height$$14$$, this.$Width$, this.$Height$);
  var $bData$$inline_519_newObjs$$inline_8164$$ = $bBlackBoxUpdate$$inline_523_options$$6$$ != D.$JSCompiler_alias_NULL$$, $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$ = this.$Width$, $context$$inline_528_endState$$inline_8170_height$$inline_522$$ = this.$Height$;
  this.$_animation$ && this.$_animation$.stop();
  $bBlackBoxUpdate$$inline_523_options$$6$$ = D.$JSCompiler_alias_FALSE$$;
  var $animatedObjs$$inline_8166_animationOnDataChange$$inline_524$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDataChange, $animationOnDisplay$$inline_525_i$$inline_8167$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDisplay, $animationDuration$$inline_526$$ = this.$__getOptions$().animationDuration / 1E3;
  if($animationOnDisplay$$inline_525_i$$inline_8167$$ || $animatedObjs$$inline_8166_animationOnDataChange$$inline_524$$) {
    $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$ = new D.$DvtRectangle$$(0, 0, $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$, $context$$inline_528_endState$$inline_8170_height$$inline_522$$);
    $context$$inline_528_endState$$inline_8170_height$$inline_522$$ = this.$_context$;
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_525_i$$inline_8167$$) {
      this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$inline_528_endState$$inline_8170_height$$inline_522$$, $animationOnDisplay$$inline_525_i$$inline_8167$$, $container$$2_height$$14$$, $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$, $animationDuration$$inline_526$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_525_i$$inline_8167$$, $animationDuration$$inline_526$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_8166_animationOnDataChange$$inline_524$$ && $bData$$inline_519_newObjs$$inline_8164$$) {
        if(this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$inline_528_endState$$inline_8170_height$$inline_522$$, $animatedObjs$$inline_8166_animationOnDataChange$$inline_524$$, this.$_container$, $container$$2_height$$14$$, $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$, $animationDuration$$inline_526$$)) {
          $bBlackBoxUpdate$$inline_523_options$$6$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          $bData$$inline_519_newObjs$$inline_8164$$ = this.$__shapes$;
          $animatedObjs$$inline_8166_animationOnDataChange$$inline_524$$ = [];
          for($animationOnDisplay$$inline_525_i$$inline_8167$$ = 0;$animationOnDisplay$$inline_525_i$$inline_8167$$ < $oldShapes_width$$14$$.length;$animationOnDisplay$$inline_525_i$$inline_8167$$++) {
            var $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$ = $bData$$inline_519_newObjs$$inline_8164$$[$animationOnDisplay$$inline_525_i$$inline_8167$$], $animation$$inline_8171_startState$$inline_8169$$ = $oldShapes_width$$14$$[$animationOnDisplay$$inline_525_i$$inline_8167$$].$getAnimationParams$(), $context$$inline_528_endState$$inline_8170_height$$inline_522$$ = $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$.$getAnimationParams$();
            $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$.$setAnimationParams$($animation$$inline_8171_startState$$inline_8169$$);
            $animation$$inline_8171_startState$$inline_8169$$ = new D.$DvtCustomAnimation$$(this.$_context$, $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$, $animationDuration$$inline_526$$);
            (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$inline_8171_startState$$inline_8169$$.$_animator$, "typeNumberArray", $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$, $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$.$getAnimationParams$, $bounds$$inline_527_newObj$$inline_8168_width$$inline_521$$.$setAnimationParams$, $context$$inline_528_endState$$inline_8170_height$$inline_522$$);
            $animatedObjs$$inline_8166_animationOnDataChange$$inline_524$$.push($animation$$inline_8171_startState$$inline_8169$$)
          }
          this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$inline_8166_animationOnDataChange$$inline_524$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_523_options$$6$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_523_options$$6$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$2_height$$14$$
  }
  this.$_editingOverlay$ && (this.$Options$.readOnly === D.$JSCompiler_alias_FALSE$$ && D.$DvtAgent$$.$isTouchDevice$() ? (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$)) : (this.$_editingOverlay$.$setWidth$(0), this.$_editingOverlay$.$setHeight$(0)));
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($container$$2_height$$14$$);
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$2_height$$14$$, "label", this.$Options$.shortDesc)
};
D.$DvtGauge$$.prototype.render = D.$DvtGauge$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$61$$, $y$$40$$) {
  this.$_bEditing$ = D.$JSCompiler_alias_TRUE$$;
  this.$_oldValue$ = this.$Options$.value;
  this.$__processValueChangeMove$($x$$61$$, $y$$40$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$62$$, $y$$41$$) {
  this.$Options$.value = D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$62$$, $y$$41$$));
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$63$$, $y$$42$$) {
  this.$__processValueChangeMove$($x$$63$$, $y$$42$$);
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$CreateEventHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateEventHandler$$() {
  return new D.$DvtGaugeEventManager$$(this)
};
D.$DvtGauge$_thresholdComparator$$ = function $$DvtGauge$_thresholdComparator$$$($a$$16$$, $b$$) {
  return $a$$16$$.max && $b$$.max ? window.Math.abs($a$$16$$.max) - window.Math.abs($b$$.max) : $a$$16$$.max ? -window.Infinity : window.Infinity
};
D.$DvtGaugeBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeBundle$$, D.$DvtBundle$$, "DvtGaugeBundle");
D.$DvtGaugeBundle$$._defaults = {EMPTY_TEXT:"No data to display"};
D.$DvtGaugeBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtGaugeBundle$$$$$GetDefaultStringForKey$$($key$$69$$) {
  return D.$DvtGaugeBundle$$._defaults[$key$$69$$]
};
D.$DvtGaugeBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtGaugeBundle");
D.$DvtGaugeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtGaugeDefaults");
D.$DvtGaugeDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtGaugeDefaults$VERSION_1$$ = {skin:"skyros", min:0, max:100, color:"#313842", borderColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:D.$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:1E3, readOnly:"true", metricLabel:{rendered:"off", scaling:"auto", style:new D.$DvtCSSStyle$$, textType:"number"}, __layout:{outerGap:1, labelGap:3}};
D.$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap$$1_ret$$33$$) {
  $defaultsMap$$1_ret$$33$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$33$$.skyros, D.$DvtGaugeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$33$$.alta, D.$DvtGaugeDefaults$SKIN_ALTA$$)};
  D.$DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$1_ret$$33$$)
};
D.$DvtGaugeDefaults$isSkyrosSkin$$ = function $$DvtGaugeDefaults$isSkyrosSkin$$$($gauge$$24$$) {
  return"skyros" == $gauge$$24$$.$__getOptions$().skin
};
D.$DvtGaugeDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDataUtils$$, D.$DvtObj$$, "DvtGaugeDataUtils");
D.$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge$$8_options$$39$$) {
  $gauge$$8_options$$39$$ = $gauge$$8_options$$39$$.$__getOptions$();
  return!$gauge$$8_options$$39$$ || (0,window.isNaN)($gauge$$8_options$$39$$.value) || $gauge$$8_options$$39$$.value === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$9_value$$75$$) {
  var $options$$40_thresholds$$1$$ = $gauge$$9_value$$75$$.$__getOptions$();
  $gauge$$9_value$$75$$ = $options$$40_thresholds$$1$$.value;
  $options$$40_thresholds$$1$$ = $options$$40_thresholds$$1$$.thresholds;
  if(!$options$$40_thresholds$$1$$) {
    return-1
  }
  for(var $i$$287$$ = 0;$i$$287$$ < $options$$40_thresholds$$1$$.length;$i$$287$$++) {
    if($gauge$$9_value$$75$$ <= $options$$40_thresholds$$1$$[$i$$287$$].max) {
      return $i$$287$$
    }
  }
  return $options$$40_thresholds$$1$$.length - 1
};
D.$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$10$$, $index$$85$$) {
  var $thresholds$$2$$ = $gauge$$10$$.$__getOptions$().thresholds;
  return $thresholds$$2$$ && 0 <= $index$$85$$ && $index$$85$$ < $thresholds$$2$$.length ? $thresholds$$2$$[$index$$85$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$11$$, $index$$86$$) {
  var $referenceObjects$$ = $gauge$$11$$.$__getOptions$().referenceLines;
  return $referenceObjects$$ && 0 <= $index$$86$$ && $index$$86$$ < $referenceObjects$$.length ? $referenceObjects$$[$index$$86$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeEventManager$$ = function $$DvtGaugeEventManager$$$($gauge$$36$$) {
  this.Init($gauge$$36$$.$_context$, $gauge$$36$$.$__dispatchEvent$, $gauge$$36$$);
  this.$_gauge$ = $gauge$$36$$;
  this.$isEditing$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeEventManager$$, D.$DvtEventManager$$, "DvtGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords_event$$284$$) {
  this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords_event$$284$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords_event$$284$$.pageX, $coords_event$$284$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords_event$$284$$.x, $coords_event$$284$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords_event$$284$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$1_event$$285$$) {
  this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$1_event$$285$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$1_event$$285$$.pageX, $coords$$1_event$$285$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$1_event$$285$$.x, $coords$$1_event$$285$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$1_event$$285$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$286$$) {
  if(this.$isEditing$) {
    var $coords$$2$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$286$$.pageX, $event$$286$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$2$$.x, $coords$$2$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$isEditing$) && D.$DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$286$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$287$$) {
  if(D.$DvtTouchEvent$$.$TOUCHSTART$ === $event$$287$$.type && this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$;
    var $coords$$3$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$287$$.touches[0].pageX, $event$$287$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$3$$.x, $coords$$3$$.y);
    $event$$287$$.preventDefault()
  }else {
    D.$DvtTouchEvent$$.$TOUCHMOVE$ === $event$$287$$.type && this.$isEditing$ ? ($coords$$3$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$287$$.touches[0].pageX, $event$$287$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$3$$.x, $coords$$3$$.y), $event$$287$$.preventDefault()) : D.$DvtTouchEvent$$.$TOUCHEND$ === $event$$287$$.type && this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$3$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, 
    $event$$287$$.changedTouches[0].pageX, $event$$287$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$3$$.x, $coords$$3$$.y), $event$$287$$.preventDefault()) : D.$DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$287$$)
  }
};
D.$JSCompiler_StaticMethods_GetRelativePosition$$ = function $$JSCompiler_StaticMethods_GetRelativePosition$$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$9_stageCoords$$, $pageY$$9$$) {
  $pageX$$9_stageCoords$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativePosition$self$$.$_context$, $pageX$$9_stageCoords$$, $pageY$$9$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$9_stageCoords$$)
};
D.$DvtGaugeStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeStyleUtils$$, D.$DvtObj$$, "DvtGaugeStyleUtils");
D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$4$$) {
  var $options$$36$$ = $gauge$$4$$.$__getOptions$(), $thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$4$$), $threshold$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$4$$, $thresholdIndex$$);
  return $threshold$$ && (!($gauge$$4$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$4$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$36$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$4$$, $threshold$$, $thresholdIndex$$) : $options$$36$$.color
};
D.$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$5$$) {
  var $options$$37$$ = $gauge$$5$$.$__getOptions$(), $threshold$$1$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$5$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$5$$));
  return $threshold$$1$$ && $threshold$$1$$.borderColor && (!($gauge$$5$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$5$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$37$$.thresholdDisplay) ? $threshold$$1$$.borderColor : $options$$37$$.borderColor
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$6$$) {
  var $options$$38$$ = $gauge$$6$$.$__getOptions$(), $thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$6$$), $threshold$$2$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$6$$, $thresholdIndex$$2$$);
  return $threshold$$2$$ && (!($gauge$$6$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$6$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" != $options$$38$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$6$$, $threshold$$2$$, $thresholdIndex$$2$$) : $options$$38$$.plotArea.color
};
D.$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$7$$, $threshold$$3$$, $thresholdIndex$$3$$) {
  if($threshold$$3$$.color) {
    return $threshold$$3$$.color
  }
  if($thresholdIndex$$3$$ < D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$.length) {
    return(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$7$$) ? D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$3$$] : D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$3$$]
  }
};
D.$DvtGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeRenderer$$, D.$DvtObj$$, "DvtGaugeRenderer");
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$ = 2;
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$ = 1;
D.$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$40$$, $container$$56$$, $availSpace$$23_label$$10$$) {
  var $options$$54$$ = $gauge$$40$$.$__getOptions$(), $emptyTextStr$$ = $options$$54$$.emptyText;
  $emptyTextStr$$ || ($emptyTextStr$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($gauge$$40$$.$Bundle$, "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$));
  var $width$$62$$ = $availSpace$$23_label$$10$$.$w$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, $height$$56$$ = $availSpace$$23_label$$10$$.$h$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$;
  $availSpace$$23_label$$10$$ = new D.$DvtOutputText$$($gauge$$40$$.$_context$, $emptyTextStr$$, $availSpace$$23_label$$10$$.x + $availSpace$$23_label$$10$$.$w$ / 2, $availSpace$$23_label$$10$$.y + $availSpace$$23_label$$10$$.$h$ / 2);
  $options$$54$$.metricLabel.style.$getStyle$("font-size") || $options$$54$$.metricLabel.style.$setStyle$("font-size", "13px");
  $availSpace$$23_label$$10$$.$setCSSStyle$($options$$54$$.metricLabel.style);
  $availSpace$$23_label$$10$$.$alignCenter$();
  $availSpace$$23_label$$10$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($availSpace$$23_label$$10$$, $width$$62$$, $height$$56$$, $container$$56$$) && $availSpace$$23_label$$10$$.$isTruncated$() && $gauge$$40$$.$__getEventManager$().$associate$($availSpace$$23_label$$10$$, new D.$DvtSimpleObjPeer$$($emptyTextStr$$))
};
D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$77$$, $gauge$$41$$) {
  var $options$$55$$ = $gauge$$41$$.$__getOptions$(), $isPercent$$1$$ = "percent" == $options$$55$$.metricLabel.textType;
  $isPercent$$1$$ && ($value$$77$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$55$$, $options$$55$$.min, $value$$77$$));
  var $converter$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$55$$.metricLabel.rendered && $options$$55$$.metricLabel.converter && ($converter$$ = $options$$55$$.metricLabel.converter);
  var $scaling$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$55$$.metricLabel.rendered && $options$$55$$.metricLabel.scaling && ($scaling$$ = $options$$55$$.metricLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$77$$, $gauge$$41$$, $converter$$, $scaling$$, $options$$55$$.metricLabel.autoPrecision ? $options$$55$$.metricLabel.autoPrecision : "on", $isPercent$$1$$)
};
D.$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$78$$, $gauge$$42$$) {
  var $options$$56$$ = $gauge$$42$$.$__getOptions$(), $isPercent$$2$$ = "percent" == $options$$56$$.tickLabel.textType;
  $isPercent$$2$$ && ($value$$78$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$56$$, $options$$56$$.min, $value$$78$$));
  var $converter$$1$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$56$$.tickLabel.rendered && $options$$56$$.tickLabel.converter && ($converter$$1$$ = $options$$56$$.tickLabel.converter);
  var $scaling$$1$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$56$$.tickLabel.rendered && $options$$56$$.tickLabel.scaling && ($scaling$$1$$ = $options$$56$$.tickLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$78$$, $gauge$$42$$, $converter$$1$$, $scaling$$1$$, $options$$56$$.tickLabel.autoPrecision ? $options$$56$$.tickLabel.autoPrecision : "on", $isPercent$$2$$)
};
D.$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($value$$79$$, $gauge$$43_minValue$$5_output$$, $converter$$2$$, $formatter_scaling$$2$$, $autoPrecision$$2$$, $isPercent$$3$$) {
  var $maxValue$$6_options$$57$$ = $gauge$$43_minValue$$5_output$$.$__getOptions$();
  $gauge$$43_minValue$$5_output$$ = $value$$79$$;
  $gauge$$43_minValue$$5_output$$ = $maxValue$$6_options$$57$$.min;
  var $maxValue$$6_options$$57$$ = $maxValue$$6_options$$57$$.max, $difference$$ = $maxValue$$6_options$$57$$ - $gauge$$43_minValue$$5_output$$, $increment$$1$$ = D.$JSCompiler_alias_NULL$$;
  (0,window.isNaN)($difference$$) || ($increment$$1$$ = $difference$$ / (1E3 > $difference$$ ? 100 : 1E3));
  $formatter_scaling$$2$$ = new D.$DvtLinearScaleAxisValueFormatter$$($gauge$$43_minValue$$5_output$$, $maxValue$$6_options$$57$$, $increment$$1$$, $formatter_scaling$$2$$, $autoPrecision$$2$$);
  if($converter$$2$$ && $converter$$2$$.getAsString) {
    $gauge$$43_minValue$$5_output$$ = $formatter_scaling$$2$$.$format$($value$$79$$, $converter$$2$$)
  }else {
    if($converter$$2$$ && $converter$$2$$.format) {
      return $formatter_scaling$$2$$.$format$($value$$79$$, $converter$$2$$)
    }
    $gauge$$43_minValue$$5_output$$ = $formatter_scaling$$2$$.$format$($value$$79$$)
  }
  return $isPercent$$3$$ ? (0,window.String)($gauge$$43_minValue$$5_output$$) + "%" : $gauge$$43_minValue$$5_output$$
};
D.$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$58_percentFill$$, $min$$4$$, $value$$80$$) {
  $options$$58_percentFill$$ = ($value$$80$$ - $min$$4$$) / ($options$$58_percentFill$$.max - $options$$58_percentFill$$.min);
  return $options$$58_percentFill$$ = window.Math.min(window.Math.max(0, $options$$58_percentFill$$), 1)
};
D.$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$44$$, $container$$57$$, $bounds$$73$$, $color$$38$$) {
  var $i$$292_options$$59$$ = $gauge$$44$$.$__getOptions$();
  if("on" == $i$$292_options$$59$$.metricLabel.rendered) {
    var $labelString$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$292_options$$59$$.value, $gauge$$44$$), $labelWidth$$2$$ = $bounds$$73$$.$w$, $labelHeight$$1$$ = $bounds$$73$$.$h$, $label$$11$$ = new D.$DvtOutputText$$($gauge$$44$$.$_context$, $labelString$$2$$, $bounds$$73$$.x + $bounds$$73$$.$w$ / 2, $bounds$$73$$.y + $bounds$$73$$.$h$ / 2);
    $label$$11$$.$setCSSStyle$($i$$292_options$$59$$.metricLabel.style);
    var $longestLabel$$2_size$$20$$ = $i$$292_options$$59$$.metricLabel.style.$getStyle$("font-size");
    if(!$i$$292_options$$59$$.metricLabel.style.$getStyle$("font-size")) {
      var $longestLabel$$2_size$$20$$ = window.Math.max($i$$292_options$$59$$.max.toString().length, $i$$292_options$$59$$.min.toString().length, $labelString$$2$$.length), $maxString$$2$$ = "";
      "percent" == $i$$292_options$$59$$.metricLabel.textType && ($longestLabel$$2_size$$20$$ = window.Math.max(3, $labelString$$2$$.length), $maxString$$2$$ += "%");
      for($i$$292_options$$59$$ = 0;$i$$292_options$$59$$ < $longestLabel$$2_size$$20$$;$i$$292_options$$59$$++) {
        $maxString$$2$$ += "0"
      }
      $label$$11$$.$setTextString$($maxString$$2$$);
      $longestLabel$$2_size$$20$$ = $label$$11$$.$getOptimalFontSize$($bounds$$73$$);
      $label$$11$$.$setTextString$($labelString$$2$$);
      $label$$11$$.$setFontSize$($longestLabel$$2_size$$20$$)
    }
    $label$$11$$.$alignMiddle$();
    $label$$11$$.$alignCenter$();
    $color$$38$$ != D.$JSCompiler_alias_NULL$$ && $label$$11$$.$setSolidFill$($color$$38$$);
    D.$DvtTextUtils$$.$fitText$($label$$11$$, $labelWidth$$2$$, $labelHeight$$1$$, $container$$57$$) && $label$$11$$.$isTruncated$() && $gauge$$44$$.$__getEventManager$().$associate$($label$$11$$, new D.$DvtSimpleObjPeer$$($labelString$$2$$))
  }
};
D.$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$60$$, $value$$81$$) {
  var $step$$ = (0,window.Number)($options$$60$$.step);
  if($step$$ && 0 < $step$$) {
    var $stepNum$$ = ($value$$81$$ - $options$$60$$.min) / $step$$;
    return 0.5 < $stepNum$$ ? window.Math.max(window.Math.min($options$$60$$.max, window.Math.ceil($stepNum$$) * $step$$ + $options$$60$$.min), $options$$60$$.min) : $options$$60$$.min
  }
  return $value$$81$$
};
D.$DvtLedGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLedGauge", D.$DvtLedGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLedGauge$$, D.$DvtGauge$$, "DvtLedGauge");
D.$DvtLedGauge$newInstance$$ = function $$DvtLedGauge$newInstance$$$($context$$4$$, $callback$$23$$, $callbackObj$$, $bStaticRendering$$) {
  var $gauge$$ = new D.$DvtLedGauge$$;
  $gauge$$.Init($context$$4$$, $callback$$23$$, $callbackObj$$, $bStaticRendering$$);
  return $gauge$$
};
D.$DvtLedGauge$$.newInstance = D.$DvtLedGauge$newInstance$$;
D.$DvtLedGauge$$.prototype.Init = function $$DvtLedGauge$$$$Init$($context$$5$$, $callback$$24$$, $callbackObj$$1$$, $bStaticRendering$$1$$) {
  D.$DvtLedGauge$$.$superclass$.Init.call(this, $context$$5$$, $callback$$24$$, $callbackObj$$1$$, $bStaticRendering$$1$$);
  this.$Defaults$ = new D.$DvtLedGaugeDefaults$$
};
D.$DvtLedGauge$$.prototype.$SetOptions$ = function $$DvtLedGauge$$$$$SetOptions$$($options$$3$$) {
  D.$DvtLedGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$3$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = D.$JSCompiler_alias_TRUE$$
};
D.$DvtLedGauge$$.prototype.$Render$ = function $$DvtLedGauge$$$$$Render$$($container$$, $width$$12$$, $height$$12$$) {
  D.$DvtLedGaugeRenderer$$.$render$(this, $container$$, $width$$12$$, $height$$12$$)
};
D.$DvtLedGaugeDefaults$$ = function $$DvtLedGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtLedGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtLedGaugeDefaults");
D.$DvtLedGaugeDefaults$VERSION_1$$ = {type:"circle"};
D.$DvtLedGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeRenderer$$, D.$DvtObj$$, "DvtLedGaugeRenderer");
D.$DvtLedGaugeRenderer$$.$__RECTANGLE_CORNER_RADIUS$ = 1 / 6;
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M8,86.6Q0,86.6,3.46,78.6L46,6.93Q50,0,54,6.93L96.54,78.6Q100,86.6,92,86.6Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = "M0,86.6L50,0L100,86.6Z";
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = "M0,86.6L50,0L100,86.6Z";
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M50,95L71,95Q74.414,94.414,75,91L75,60L92,60Q98.5,59.1,95,54L52,12Q50,11,48,12L5,54Q1.5,59.1,8,60L25,60L25,91Q25.586,94.414,29,95Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = "M75,98L75,58L97.5,58L50,11L2.5,58L25,58L25,98Z";
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = "M75,98L75,58L97.5,58L50,11L2.5,58L25,58L25,98Z";
D.$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$25$$, $container$$45$$, $bounds$$62_width$$60$$, $height$$54_labelColor$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$25$$)) {
    var $options$$46$$ = $gauge$$25$$.$__getOptions$(), $outerGap$$1$$ = $options$$46$$.__layout.outerGap, $size$$19$$ = $options$$46$$ && (0 <= $options$$46$$.size || 1 > $options$$46$$.size) ? window.Math.sqrt($options$$46$$.size) : 1;
    $bounds$$62_width$$60$$ = new D.$DvtRectangle$$($outerGap$$1$$ + ($bounds$$62_width$$60$$ - 2 * $outerGap$$1$$) * (1 - $size$$19$$) / 2, $outerGap$$1$$ + ($height$$54_labelColor$$ - 2 * $outerGap$$1$$) * (1 - $size$$19$$) / 2, ($bounds$$62_width$$60$$ - 2 * $outerGap$$1$$) * $size$$19$$, ($height$$54_labelColor$$ - 2 * $outerGap$$1$$) * $size$$19$$);
    D.$DvtLedGaugeRenderer$$.$_renderShape$($gauge$$25$$, $container$$45$$, $bounds$$62_width$$60$$);
    D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$25$$, $container$$45$$, $bounds$$62_width$$60$$);
    "on" == $options$$46$$.metricLabel.rendered && ($options$$46$$.metricLabel.style.$getStyle$("color") != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$25$$, $container$$45$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$25$$, $bounds$$62_width$$60$$)) : ($height$$54_labelColor$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$25$$), $height$$54_labelColor$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($height$$54_labelColor$$), $options$$46$$.metricLabel.style.$setStyle$("color", 
    $height$$54_labelColor$$), D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$25$$, $container$$45$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$25$$, $bounds$$62_width$$60$$), $height$$54_labelColor$$)))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$25$$, $container$$45$$, new D.$DvtRectangle$$(0, 0, $bounds$$62_width$$60$$, $height$$54_labelColor$$))
  }
};
D.$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$26$$, $container$$46$$, $bounds$$63$$) {
  var $context$$398_shape$$59$$ = $gauge$$26$$.$_context$, $options$$47_tooltip$$18$$ = $gauge$$26$$.$__getOptions$(), $type$$152$$ = $options$$47_tooltip$$18$$.type, $color$$36$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$26$$), $borderColor$$21$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$26$$), $cmds$$18_cx$$24_rotation$$2$$ = $bounds$$63$$.x + $bounds$$63$$.$w$ / 2, $cy$$25_scale$$13$$ = $bounds$$63$$.y + $bounds$$63$$.$h$ / 2, $r$$50$$ = window.Math.min($bounds$$63$$.$w$, $bounds$$63$$.$h$) / 
  2, $arColors$$15_isSkyros$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$26$$);
  "rectangle" == $type$$152$$ ? $context$$398_shape$$59$$ = new D.$DvtRect$$($context$$398_shape$$59$$, $bounds$$63$$.x, $bounds$$63$$.y, $bounds$$63$$.$w$, $bounds$$63$$.$h$) : "diamond" == $type$$152$$ ? $context$$398_shape$$59$$ = new D.$DvtPolygon$$($context$$398_shape$$59$$, [$cmds$$18_cx$$24_rotation$$2$$ - $r$$50$$, $cy$$25_scale$$13$$, $cmds$$18_cx$$24_rotation$$2$$, $cy$$25_scale$$13$$ - $r$$50$$, $cmds$$18_cx$$24_rotation$$2$$ + $r$$50$$, $cy$$25_scale$$13$$, $cmds$$18_cx$$24_rotation$$2$$, 
  $cy$$25_scale$$13$$ + $r$$50$$]) : "triangle" == $type$$152$$ ? ($cmds$$18_cx$$24_rotation$$2$$ = $arColors$$15_isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$, $context$$398_shape$$59$$ = new D.$DvtPath$$($context$$398_shape$$59$$, $cmds$$18_cx$$24_rotation$$2$$)) : "star" == $type$$152$$ ? ($cmds$$18_cx$$24_rotation$$2$$ = $arColors$$15_isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$, 
  $cy$$25_scale$$13$$ = window.Math.min($bounds$$63$$.$w$ / 100, $bounds$$63$$.$h$ / 100), $cmds$$18_cx$$24_rotation$$2$$ = D.$DvtPolygonUtils$$.scale($cmds$$18_cx$$24_rotation$$2$$, $cy$$25_scale$$13$$, $cy$$25_scale$$13$$), $cmds$$18_cx$$24_rotation$$2$$ = D.$DvtPolygonUtils$$.translate($cmds$$18_cx$$24_rotation$$2$$, $bounds$$63$$.x + $bounds$$63$$.$w$ / 2, $bounds$$63$$.y + $bounds$$63$$.$h$ / 2), $context$$398_shape$$59$$ = new D.$DvtPolygon$$($context$$398_shape$$59$$, $cmds$$18_cx$$24_rotation$$2$$)) : 
  "arrow" == $type$$152$$ ? ($cmds$$18_cx$$24_rotation$$2$$ = $arColors$$15_isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$, $context$$398_shape$$59$$ = new D.$DvtPath$$($context$$398_shape$$59$$, $cmds$$18_cx$$24_rotation$$2$$)) : $context$$398_shape$$59$$ = new D.$DvtCircle$$($context$$398_shape$$59$$, $cmds$$18_cx$$24_rotation$$2$$, $cy$$25_scale$$13$$, $r$$50$$);
  $arColors$$15_isSkyros$$ || "none" == $options$$47_tooltip$$18$$.visualEffects ? $context$$398_shape$$59$$.$setSolidFill$($color$$36$$) : ($arColors$$15_isSkyros$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$36$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$36$$, -0.04, -0.05)], $cmds$$18_cx$$24_rotation$$2$$ = $options$$47_tooltip$$18$$ && 0 == $options$$47_tooltip$$18$$.rotation % 90 ? $options$$47_tooltip$$18$$.rotation : 0, $context$$398_shape$$59$$.$setFill$(new D.$DvtLinearGradientFill$$("arrow" == 
  $type$$152$$ || "star" == $type$$152$$ || "triangle" == $type$$152$$ ? 360 - $cmds$$18_cx$$24_rotation$$2$$ : 270, $arColors$$15_isSkyros$$, [1, 1], [0, 1])));
  $borderColor$$21$$ && $context$$398_shape$$59$$.$setSolidStroke$($borderColor$$21$$);
  ($options$$47_tooltip$$18$$ = $options$$47_tooltip$$18$$.shortDesc) && $gauge$$26$$.$__getEventManager$().$associate$($context$$398_shape$$59$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$47_tooltip$$18$$, $color$$36$$));
  $context$$398_shape$$59$$ = D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$($gauge$$26$$, $container$$46$$, $context$$398_shape$$59$$, $bounds$$63$$);
  $container$$46$$.$addChild$($context$$398_shape$$59$$)
};
D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$ = function $$DvtLedGaugeRenderer$$$$_scaleAndRotate$$($gauge$$27_scaleGroup_tx$$10$$, $container$$47_stroke$$30$$, $shape$$60$$, $bounds$$64_ty$$10$$) {
  var $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$ = $gauge$$27_scaleGroup_tx$$10$$.$__getOptions$(), $dims$$23_rotationMatrix_s$$47_type$$153$$ = $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$.type;
  if("triangle" == $dims$$23_rotationMatrix_s$$47_type$$153$$ || "arrow" == $dims$$23_rotationMatrix_s$$47_type$$153$$) {
    var $translateGroup$$ = new D.$DvtContainer$$($gauge$$27_scaleGroup_tx$$10$$.$_context$);
    $gauge$$27_scaleGroup_tx$$10$$ = new D.$DvtContainer$$($gauge$$27_scaleGroup_tx$$10$$.$_context$);
    $container$$47_stroke$$30$$.$addChild$($translateGroup$$);
    $translateGroup$$.$addChild$($gauge$$27_scaleGroup_tx$$10$$);
    $gauge$$27_scaleGroup_tx$$10$$.$addChild$($shape$$60$$);
    $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$ = $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$ && 0 == $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$.rotation % 90 ? $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$.rotation : 0;
    $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$ = "star" == $dims$$23_rotationMatrix_s$$47_type$$153$$ ? 0 : $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$;
    $dims$$23_rotationMatrix_s$$47_type$$153$$ = new D.$DvtMatrix$$;
    $dims$$23_rotationMatrix_s$$47_type$$153$$.rotate(window.Math.PI * (90 - $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$) / 180);
    $shape$$60$$.$setMatrix$($dims$$23_rotationMatrix_s$$47_type$$153$$);
    $dims$$23_rotationMatrix_s$$47_type$$153$$ = $gauge$$27_scaleGroup_tx$$10$$.$getDimensions$();
    $dims$$23_rotationMatrix_s$$47_type$$153$$ = window.Math.min($bounds$$64_ty$$10$$.$w$ / $dims$$23_rotationMatrix_s$$47_type$$153$$.$w$, $bounds$$64_ty$$10$$.$h$ / $dims$$23_rotationMatrix_s$$47_type$$153$$.$h$);
    $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$ = new D.$DvtMatrix$$;
    $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$.scale($dims$$23_rotationMatrix_s$$47_type$$153$$, $dims$$23_rotationMatrix_s$$47_type$$153$$);
    $gauge$$27_scaleGroup_tx$$10$$.$setMatrix$($groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$);
    $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$ = $translateGroup$$.$getDimensions$();
    $gauge$$27_scaleGroup_tx$$10$$ = $bounds$$64_ty$$10$$.x + $bounds$$64_ty$$10$$.$w$ / 2 - ($groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$.x + $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$.$w$ / 2);
    $bounds$$64_ty$$10$$ = $bounds$$64_ty$$10$$.y + $bounds$$64_ty$$10$$.$h$ / 2 - ($groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$.y + $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$.$h$ / 2);
    $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$ = new D.$DvtMatrix$$;
    $groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$.translate($gauge$$27_scaleGroup_tx$$10$$, $bounds$$64_ty$$10$$);
    $translateGroup$$.$setMatrix$($groupDims_matrix$$11_options$$48_rotation$$3_scaleMatrix$$);
    $container$$47_stroke$$30$$.removeChild($translateGroup$$);
    if($container$$47_stroke$$30$$ = $shape$$60$$.$getStroke$()) {
      $container$$47_stroke$$30$$ = $container$$47_stroke$$30$$.clone(), $container$$47_stroke$$30$$.$setWidth$($container$$47_stroke$$30$$.getWidth() / $dims$$23_rotationMatrix_s$$47_type$$153$$), $shape$$60$$.$setStroke$($container$$47_stroke$$30$$)
    }
    return $translateGroup$$
  }
  return $shape$$60$$
};
D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$28$$, $container$$48$$, $bounds$$65$$) {
  var $options$$49$$ = $gauge$$28$$.$__getOptions$(), $type$$154$$ = $options$$49$$.type;
  "none" != $options$$49$$.visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$28$$) && ("rectangle" == $type$$154$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$28$$, $container$$48$$, $bounds$$65$$) : "diamond" == $type$$154$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$28$$, $container$$48$$, $bounds$$65$$) : "triangle" == $type$$154$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$28$$, $container$$48$$, $bounds$$65$$) : "star" == $type$$154$$ ? 
  D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$($gauge$$28$$, $container$$48$$, $bounds$$65$$) : "arrow" == $type$$154$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$28$$, $container$$48$$, $bounds$$65$$) : D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$28$$, $container$$48$$, $bounds$$65$$))
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$29_overlay$$, $container$$49_gradient$$4$$, $bounds$$66_overlayBounds$$) {
  var $dx$$11$$ = 0.05 * $bounds$$66_overlayBounds$$.$w$, $dy$$14$$ = 0.05 * $bounds$$66_overlayBounds$$.$h$;
  $bounds$$66_overlayBounds$$ = new D.$DvtRectangle$$($bounds$$66_overlayBounds$$.x + $dx$$11$$, $bounds$$66_overlayBounds$$.y + $dy$$14$$, $bounds$$66_overlayBounds$$.$w$ - 2 * $dx$$11$$, $bounds$$66_overlayBounds$$.$h$ - 2 * $dy$$14$$);
  $gauge$$29_overlay$$ = new D.$DvtRect$$($gauge$$29_overlay$$.$_context$, $bounds$$66_overlayBounds$$.x, $bounds$$66_overlayBounds$$.y, $bounds$$66_overlayBounds$$.$w$, $bounds$$66_overlayBounds$$.$h$);
  $gauge$$29_overlay$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$49_gradient$$4$$.$addChild$($gauge$$29_overlay$$);
  $container$$49_gradient$$4$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$29_overlay$$.$setFill$($container$$49_gradient$$4$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$30_overlay$$1$$, $container$$50_gradient$$5$$, $bounds$$67_cx$$25$$) {
  var $cy$$26_dx$$12$$ = 0.05 * $bounds$$67_cx$$25$$.$w$, $dy$$15_overlayBounds$$1_r$$51$$ = 0.05 * $bounds$$67_cx$$25$$.$h$, $dy$$15_overlayBounds$$1_r$$51$$ = new D.$DvtRectangle$$($bounds$$67_cx$$25$$.x + $cy$$26_dx$$12$$, $bounds$$67_cx$$25$$.y + $dy$$15_overlayBounds$$1_r$$51$$, $bounds$$67_cx$$25$$.$w$ - 2 * $cy$$26_dx$$12$$, $bounds$$67_cx$$25$$.$h$ - 2 * $dy$$15_overlayBounds$$1_r$$51$$);
  $bounds$$67_cx$$25$$ = $dy$$15_overlayBounds$$1_r$$51$$.x + $dy$$15_overlayBounds$$1_r$$51$$.$w$ / 2;
  $cy$$26_dx$$12$$ = $dy$$15_overlayBounds$$1_r$$51$$.y + $dy$$15_overlayBounds$$1_r$$51$$.$h$ / 2;
  $dy$$15_overlayBounds$$1_r$$51$$ = window.Math.min($dy$$15_overlayBounds$$1_r$$51$$.$w$, $dy$$15_overlayBounds$$1_r$$51$$.$h$) / 2;
  $gauge$$30_overlay$$1$$ = new D.$DvtPolygon$$($gauge$$30_overlay$$1$$.$_context$, [$bounds$$67_cx$$25$$ - $dy$$15_overlayBounds$$1_r$$51$$, $cy$$26_dx$$12$$, $bounds$$67_cx$$25$$, $cy$$26_dx$$12$$ - $dy$$15_overlayBounds$$1_r$$51$$, $bounds$$67_cx$$25$$ + $dy$$15_overlayBounds$$1_r$$51$$, $cy$$26_dx$$12$$, $bounds$$67_cx$$25$$, $cy$$26_dx$$12$$ + $dy$$15_overlayBounds$$1_r$$51$$]);
  $gauge$$30_overlay$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$50_gradient$$5$$.$addChild$($gauge$$30_overlay$$1$$);
  $container$$50_gradient$$5$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$30_overlay$$1$$.$setFill$($container$$50_gradient$$5$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$31$$, $container$$51$$, $bounds$$68_overlayBounds$$2$$) {
  var $dx$$13_overlay$$2$$ = 0.05 * $bounds$$68_overlayBounds$$2$$.$w$, $dy$$16_gradient$$6_options$$50$$ = 0.05 * $bounds$$68_overlayBounds$$2$$.$h$;
  $bounds$$68_overlayBounds$$2$$ = new D.$DvtRectangle$$($bounds$$68_overlayBounds$$2$$.x + $dx$$13_overlay$$2$$, $bounds$$68_overlayBounds$$2$$.y + $dy$$16_gradient$$6_options$$50$$, $bounds$$68_overlayBounds$$2$$.$w$ - 2 * $dx$$13_overlay$$2$$, $bounds$$68_overlayBounds$$2$$.$h$ - 2 * $dy$$16_gradient$$6_options$$50$$);
  $dx$$13_overlay$$2$$ = new D.$DvtPath$$($gauge$$31$$.$_context$, D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$);
  $dy$$16_gradient$$6_options$$50$$ = $gauge$$31$$.$__getOptions$();
  $dy$$16_gradient$$6_options$$50$$ = new D.$DvtLinearGradientFill$$(360 - ($dy$$16_gradient$$6_options$$50$$ && 0 == $dy$$16_gradient$$6_options$$50$$.rotation % 90 ? $dy$$16_gradient$$6_options$$50$$.rotation : 0), ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $dx$$13_overlay$$2$$.$setFill$($dy$$16_gradient$$6_options$$50$$);
  $dx$$13_overlay$$2$$ = D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$($gauge$$31$$, $container$$51$$, $dx$$13_overlay$$2$$, $bounds$$68_overlayBounds$$2$$);
  $dx$$13_overlay$$2$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$51$$.$addChild$($dx$$13_overlay$$2$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$32$$, $container$$52$$, $bounds$$69_overlayBounds$$3$$) {
  var $dx$$14_overlay$$3$$ = 0.05 * $bounds$$69_overlayBounds$$3$$.$w$, $dy$$17_gradient$$7_options$$51$$ = 0.05 * $bounds$$69_overlayBounds$$3$$.$h$;
  $bounds$$69_overlayBounds$$3$$ = new D.$DvtRectangle$$($bounds$$69_overlayBounds$$3$$.x + $dx$$14_overlay$$3$$, $bounds$$69_overlayBounds$$3$$.y + $dy$$17_gradient$$7_options$$51$$, $bounds$$69_overlayBounds$$3$$.$w$ - 2 * $dx$$14_overlay$$3$$, $bounds$$69_overlayBounds$$3$$.$h$ - 2 * $dy$$17_gradient$$7_options$$51$$);
  $dx$$14_overlay$$3$$ = new D.$DvtPath$$($gauge$$32$$.$_context$, D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$);
  $dy$$17_gradient$$7_options$$51$$ = $gauge$$32$$.$__getOptions$();
  $dy$$17_gradient$$7_options$$51$$ = new D.$DvtLinearGradientFill$$(360 - ($dy$$17_gradient$$7_options$$51$$ && 0 == $dy$$17_gradient$$7_options$$51$$.rotation % 90 ? $dy$$17_gradient$$7_options$$51$$.rotation : 0), ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $dx$$14_overlay$$3$$.$setFill$($dy$$17_gradient$$7_options$$51$$);
  $dx$$14_overlay$$3$$ = D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$($gauge$$32$$, $container$$52$$, $dx$$14_overlay$$3$$, $bounds$$69_overlayBounds$$3$$);
  $dx$$14_overlay$$3$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$52$$.$addChild$($dx$$14_overlay$$3$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayStar$$($gauge$$33$$, $container$$53$$, $bounds$$70_overlayBounds$$4$$) {
  var $dx$$15_overlay$$4$$ = 0.05 * $bounds$$70_overlayBounds$$4$$.$w$, $dy$$18_gradient$$8_gradientRotation$$3_options$$52$$ = 0.05 * $bounds$$70_overlayBounds$$4$$.$h$;
  $bounds$$70_overlayBounds$$4$$ = new D.$DvtRectangle$$($bounds$$70_overlayBounds$$4$$.x + $dx$$15_overlay$$4$$, $bounds$$70_overlayBounds$$4$$.y + $dy$$18_gradient$$8_gradientRotation$$3_options$$52$$, $bounds$$70_overlayBounds$$4$$.$w$ - 2 * $dx$$15_overlay$$4$$, $bounds$$70_overlayBounds$$4$$.$h$ - 2 * $dy$$18_gradient$$8_gradientRotation$$3_options$$52$$);
  var $dx$$15_overlay$$4$$ = new D.$DvtPath$$($gauge$$33$$.$_context$, D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$), $dy$$18_gradient$$8_gradientRotation$$3_options$$52$$ = $gauge$$33$$.$__getOptions$(), $dy$$18_gradient$$8_gradientRotation$$3_options$$52$$ = 360 - ($dy$$18_gradient$$8_gradientRotation$$3_options$$52$$ && 0 == $dy$$18_gradient$$8_gradientRotation$$3_options$$52$$.rotation % 90 ? $dy$$18_gradient$$8_gradientRotation$$3_options$$52$$.rotation : 0), $arColors$$20_color$$37$$ = 
  D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$33$$), $arColors$$20_color$$37$$ = [D.$DvtColorUtils$$.$getDarker$($arColors$$20_color$$37$$, 0.9), $arColors$$20_color$$37$$, D.$DvtColorUtils$$.$getBrighter$($arColors$$20_color$$37$$)], $dy$$18_gradient$$8_gradientRotation$$3_options$$52$$ = new D.$DvtLinearGradientFill$$($dy$$18_gradient$$8_gradientRotation$$3_options$$52$$, $arColors$$20_color$$37$$, [1, 1, 1], [0.1, 0.4, 0.8]);
  $dx$$15_overlay$$4$$.$setFill$($dy$$18_gradient$$8_gradientRotation$$3_options$$52$$);
  $dx$$15_overlay$$4$$ = D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$($gauge$$33$$, $container$$53$$, $dx$$15_overlay$$4$$, $bounds$$70_overlayBounds$$4$$);
  $dx$$15_overlay$$4$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$53$$.$addChild$($dx$$15_overlay$$4$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$34_highlight$$, $container$$54_highlightGradient$$, $bounds$$71_gradientBounds$$) {
  var $cx$$26_dx$$16$$ = 0.05 * $bounds$$71_gradientBounds$$.$w$, $cy$$27_dy$$19$$ = 0.05 * $bounds$$71_gradientBounds$$.$h$;
  $bounds$$71_gradientBounds$$ = new D.$DvtRectangle$$($bounds$$71_gradientBounds$$.x + $cx$$26_dx$$16$$, $bounds$$71_gradientBounds$$.y + $cy$$27_dy$$19$$, $bounds$$71_gradientBounds$$.$w$ - 2 * $cx$$26_dx$$16$$, $bounds$$71_gradientBounds$$.$h$ - 2 * $cy$$27_dy$$19$$);
  var $cx$$26_dx$$16$$ = $bounds$$71_gradientBounds$$.x + $bounds$$71_gradientBounds$$.$w$ / 2, $cy$$27_dy$$19$$ = $bounds$$71_gradientBounds$$.y + $bounds$$71_gradientBounds$$.$h$ / 2, $radius$$7_ry$$17$$ = window.Math.min($bounds$$71_gradientBounds$$.$w$, $bounds$$71_gradientBounds$$.$h$) / 2, $overlay$$5_rx$$17$$ = new D.$DvtCircle$$($gauge$$34_highlight$$.$_context$, $cx$$26_dx$$16$$, $cy$$27_dy$$19$$, $radius$$7_ry$$17$$);
  $overlay$$5_rx$$17$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$54_highlightGradient$$.$addChild$($overlay$$5_rx$$17$$);
  var $gradient$$9$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$26_dx$$16$$, $cy$$27_dy$$19$$ - 0.6 * $radius$$7_ry$$17$$, 1.5 * $radius$$7_ry$$17$$, [$bounds$$71_gradientBounds$$.x, $bounds$$71_gradientBounds$$.y, $bounds$$71_gradientBounds$$.$w$, $bounds$$71_gradientBounds$$.$h$]);
  $overlay$$5_rx$$17$$.$setFill$($gradient$$9$$);
  $overlay$$5_rx$$17$$ = 0.6 * $radius$$7_ry$$17$$;
  $radius$$7_ry$$17$$ *= 0.4;
  $cy$$27_dy$$19$$ -= 0.3 * $radius$$7_ry$$17$$;
  $gauge$$34_highlight$$ = new D.$DvtOval$$($gauge$$34_highlight$$.$_context$, $cx$$26_dx$$16$$, $cy$$27_dy$$19$$ - $radius$$7_ry$$17$$, $overlay$$5_rx$$17$$, $radius$$7_ry$$17$$);
  $gauge$$34_highlight$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$54_highlightGradient$$.$addChild$($gauge$$34_highlight$$);
  $container$$54_highlightGradient$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$26_dx$$16$$, $cy$$27_dy$$19$$, $overlay$$5_rx$$17$$, [$bounds$$71_gradientBounds$$.x, $bounds$$71_gradientBounds$$.y, $bounds$$71_gradientBounds$$.$w$, $bounds$$71_gradientBounds$$.$h$]);
  $gauge$$34_highlight$$.$setFill$($container$$54_highlightGradient$$)
};
D.$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$35$$, $bounds$$72$$) {
  var $options$$53_rotation$$7$$ = $gauge$$35$$.$__getOptions$(), $type$$155$$ = $options$$53_rotation$$7$$.type, $options$$53_rotation$$7$$ = 0 == $options$$53_rotation$$7$$.rotation % 90 ? $options$$53_rotation$$7$$.rotation : 0, $minDim$$ = window.Math.min($bounds$$72$$.$w$, $bounds$$72$$.$h$), $newX$$4$$ = $bounds$$72$$.x + $bounds$$72$$.$w$ / 2 - $minDim$$ / 2, $newY$$4$$ = $bounds$$72$$.y + $bounds$$72$$.$h$ / 2 - $minDim$$ / 2, $newWidth$$ = $minDim$$, $newHeight$$ = $minDim$$;
  "triangle" == $type$$155$$ ? 0 == $options$$53_rotation$$7$$ ? ($newX$$4$$ += 0.05 * $minDim$$, $newY$$4$$ += 0.2 * $minDim$$, $newWidth$$ -= 0.3 * $minDim$$, $newHeight$$ -= 0.4 * $minDim$$) : 90 == $options$$53_rotation$$7$$ ? ($newX$$4$$ += 0.2 * $minDim$$, $newY$$4$$ += 0.25 * $minDim$$, $newWidth$$ -= 0.4 * $minDim$$, $newHeight$$ -= 0.3 * $minDim$$) : 180 == $options$$53_rotation$$7$$ ? ($newX$$4$$ += 0.25 * $minDim$$, $newY$$4$$ += 0.2 * $minDim$$, $newWidth$$ -= 0.3 * $minDim$$, $newHeight$$ -= 
  0.4 * $minDim$$) : 270 == $options$$53_rotation$$7$$ && ($newX$$4$$ += 0.2 * $minDim$$, $newY$$4$$ += 0.05 * $minDim$$, $newWidth$$ -= 0.4 * $minDim$$, $newHeight$$ -= 0.3 * $minDim$$) : "arrow" == $type$$155$$ ? 0 == $options$$53_rotation$$7$$ ? ($newX$$4$$ += 0.05 * $minDim$$, $newY$$4$$ += 0.2 * $minDim$$, $newWidth$$ -= 0.28 * $minDim$$, $newHeight$$ -= 0.4 * $minDim$$) : 90 == $options$$53_rotation$$7$$ ? ($newX$$4$$ += 0.2 * $minDim$$, $newY$$4$$ += 0.2 * $minDim$$, $newWidth$$ -= 0.4 * $minDim$$, 
  $newHeight$$ -= 0.4 * $minDim$$) : 180 == $options$$53_rotation$$7$$ ? ($newX$$4$$ += 0.23 * $minDim$$, $newY$$4$$ += 0.2 * $minDim$$, $newWidth$$ -= 0.28 * $minDim$$, $newHeight$$ -= 0.4 * $minDim$$) : 270 == $options$$53_rotation$$7$$ && ($newX$$4$$ += 0.2 * $minDim$$, $newY$$4$$ += 0.2 * $minDim$$, $newWidth$$ -= 0.4 * $minDim$$, $newHeight$$ -= 0.4 * $minDim$$) : "star" == $type$$155$$ ? ($newX$$4$$ += 0.25 * $minDim$$, $newY$$4$$ += 0.25 * $minDim$$, $newWidth$$ -= 0.5 * $minDim$$, $newHeight$$ -= 
  0.4 * $minDim$$) : "diamond" == $type$$155$$ ? ($newX$$4$$ += 0.15 * $minDim$$, $newY$$4$$ += 0.15 * $minDim$$, $newWidth$$ -= 0.3 * $minDim$$, $newHeight$$ -= 0.3 * $minDim$$) : "rectangle" == $type$$155$$ ? ($newX$$4$$ += 0.1 * $minDim$$, $newY$$4$$ += 0.1 * $minDim$$, $newWidth$$ -= 0.2 * $minDim$$, $newHeight$$ -= 0.2 * $minDim$$) : "circle" == $type$$155$$ && ($newX$$4$$ += 0.15 * $minDim$$, $newY$$4$$ += 0.15 * $minDim$$, $newWidth$$ -= 0.3 * $minDim$$, $newHeight$$ -= 0.3 * $minDim$$);
  return new D.$DvtRectangle$$($newX$$4$$, $newY$$4$$, $newWidth$$, $newHeight$$)
};
D.$DvtStatusMeterGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtStatusMeterGauge", D.$DvtStatusMeterGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGauge$$, D.$DvtGauge$$, "DvtStatusMeterGauge");
D.$DvtStatusMeterGauge$$.newInstance = function $$DvtStatusMeterGauge$$$newInstance$($context$$6$$, $callback$$25$$, $callbackObj$$2$$) {
  var $gauge$$1$$ = new D.$DvtStatusMeterGauge$$;
  $gauge$$1$$.Init($context$$6$$, $callback$$25$$, $callbackObj$$2$$);
  return $gauge$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtStatusMeterGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$7$$, $callback$$26$$, $callbackObj$$3$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.Init.call(this, $context$$7$$, $callback$$26$$, $callbackObj$$3$$);
  this.$Defaults$ = new D.$DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$4$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$4$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$1$$, $width$$13$$, $height$$13$$) {
  D.$DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$1$$, $width$$13$$, $height$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$, $animatedObjs_animationType$$, $animationDuration$$) {
  $animatedObjs_animationType$$ = [];
  for(var $i$$10$$ = 0;$i$$10$$ < $objs$$.length;$i$$10$$++) {
    var $obj$$30$$ = $objs$$[$i$$10$$], $endState$$ = $obj$$30$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation ? $obj$$30$$.$setAnimationParams$([$endState$$[0], $endState$$[0], $endState$$[2], $endState$$[3]]) : $obj$$30$$.$setAnimationParams$([$endState$$[0], $endState$$[1], 0, $endState$$[3], $endState$$[4]]);
    var $animation$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$30$$, $animationDuration$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$.$_animator$, "typeNumberArray", $obj$$30$$, $obj$$30$$.$getAnimationParams$, $obj$$30$$.$setAnimationParams$, $endState$$);
    $animation$$.$_animator$.$setEasing$(function($objs$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$, 0.7)
    });
    $animatedObjs_animationType$$.push($animation$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs_animationType$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$59$$, $y$$38$$) {
  if("horizontal" == this.$Options$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$59$$)
  }
  if("circular" == this.$Options$.orientation) {
    var $angle$$3$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$38$$ - this.$Height$ / 2, $x$$59$$ - this.$Width$ / 2)) - 270, $angle$$3$$ = ($angle$$3$$ + 720) % 360;
    0 <= $angle$$3$$ && 360 >= $angle$$3$$ || ($angle$$3$$ = 360 < $angle$$3$$ ? 360 - $angle$$3$$ < $angle$$3$$ - 360 ? 0 : 360 : 0 - $angle$$3$$ < $angle$$3$$ ? 0 : 360);
    if(D.$DvtAgent$$.$isRightToLeft$(this.$_context$)) {
      for($angle$$3$$ = 360 - $angle$$3$$;0 > $angle$$3$$;) {
        $angle$$3$$ += 360
      }
    }
    var $minValue$$ = this.$Options$.min;
    return $angle$$3$$ / 360 * (this.$Options$.max - $minValue$$) + $minValue$$
  }
};
D.$DvtStatusMeterGaugeDefaults$$ = function $$DvtStatusMeterGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtStatusMeterGaugeDefaults$VERSION_1$$, alta:D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtStatusMeterGaugeDefaults");
D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$ = {color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, plotArea:{color:"#f5f6f7", borderColor:"#D6DFE6"}};
D.$DvtStatusMeterGaugeDefaults$VERSION_1$$ = {color:"#313842", indicatorSize:1, metricLabel:{style:new D.$DvtCSSStyle$$("color: #333333;")}, orientation:"horizontal", plotArea:{color:"#AAAAAA", borderColor:"#C6C6C6", rendered:"auto"}, thresholdDisplay:"onIndicator"};
D.$DvtStatusMeterGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeRenderer$$, D.$DvtObj$$, "DvtStatusMeterGaugeRenderer");
D.$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$46$$, $container$$59$$, $bounds$$75_width$$64$$, $height$$58$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$46$$)) {
    var $maxDiameter_options$$62$$ = $gauge$$46$$.$__getOptions$(), $outerGap$$3$$ = $maxDiameter_options$$62$$.__layout.outerGap;
    $bounds$$75_width$$64$$ = new D.$DvtRectangle$$($outerGap$$3$$, $outerGap$$3$$, $bounds$$75_width$$64$$ - 2 * $outerGap$$3$$, $height$$58$$ - 2 * $outerGap$$3$$);
    "horizontal" == $maxDiameter_options$$62$$.orientation ? (D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$($gauge$$46$$, $container$$59$$, $bounds$$75_width$$64$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$46$$, $container$$59$$, $bounds$$75_width$$64$$)) : "circular" == $maxDiameter_options$$62$$.orientation && ($maxDiameter_options$$62$$ = window.Math.min($bounds$$75_width$$64$$.$w$, $bounds$$75_width$$64$$.$h$), D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$46$$, $container$$59$$, 
    new D.$DvtRectangle$$($bounds$$75_width$$64$$.x + $bounds$$75_width$$64$$.$w$ / 2 - 0.325 * $maxDiameter_options$$62$$, $bounds$$75_width$$64$$.y + $bounds$$75_width$$64$$.$h$ / 2 - 0.25 * $maxDiameter_options$$62$$, 0.65 * $maxDiameter_options$$62$$, 0.5 * $maxDiameter_options$$62$$)), D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$($gauge$$46$$, $container$$59$$, $bounds$$75_width$$64$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$46$$, $container$$59$$, new D.$DvtRectangle$$(0, 0, $bounds$$75_width$$64$$, $height$$58$$))
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularShape$$($gauge$$47$$, $container$$60_tooltip$$20$$, $bounds$$76_overlayRect$$1$$) {
  var $options$$63$$ = $gauge$$47$$.$__getOptions$(), $angleExtent$$6_max$$5_percentFill$$1$$ = 0, $value$$82$$ = $options$$63$$.value, $indicatorSize_referenceLineWidth_thresholds$$3$$ = $options$$63$$.thresholds, $maxDiameter$$1_referenceLineColor_totalWidth$$ = window.Math.min($bounds$$76_overlayRect$$1$$.$w$, $bounds$$76_overlayRect$$1$$.$h$), $innerRadius_referenceObjects$$1$$ = 0.3125 * $maxDiameter$$1_referenceLineColor_totalWidth$$, $i$$294_outerRadius$$ = 0.4625 * $maxDiameter$$1_referenceLineColor_totalWidth$$, 
  $referenceLineStyle_startAngle$$11$$ = 1.5 * window.Math.PI, $angleExtent$$6_max$$5_percentFill$$1$$ = 2 * $angleExtent$$6_max$$5_percentFill$$1$$ * window.Math.PI;
  if($indicatorSize_referenceLineWidth_thresholds$$3$$ && "off" != $options$$63$$.plotArea.rendered && "all" == $options$$63$$.thresholdDisplay) {
    for(var $currentThresholdIndex$$ = 0;$currentThresholdIndex$$ < $indicatorSize_referenceLineWidth_thresholds$$3$$.length;$currentThresholdIndex$$++) {
      var $thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$47$$, $indicatorSize_referenceLineWidth_thresholds$$3$$[$currentThresholdIndex$$], $currentThresholdIndex$$), $angleExtent$$6_max$$5_percentFill$$1$$ = $indicatorSize_referenceLineWidth_thresholds$$3$$[$currentThresholdIndex$$].max ? $indicatorSize_referenceLineWidth_thresholds$$3$$[$currentThresholdIndex$$].max : $options$$63$$.max, $min$$5$$ = 0 == $currentThresholdIndex$$ ? $options$$63$$.min : $indicatorSize_referenceLineWidth_thresholds$$3$$[$currentThresholdIndex$$ - 
      1].max, $referenceLineStyle_startAngle$$11$$ = 1.5 * window.Math.PI + 2 * window.Math.PI * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$63$$, $options$$63$$.min, $min$$5$$), $angleExtent$$6_max$$5_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$63$$, $min$$5$$, $angleExtent$$6_max$$5_percentFill$$1$$), $angleExtent$$6_max$$5_percentFill$$1$$ = 2 * $angleExtent$$6_max$$5_percentFill$$1$$ * window.Math.PI;
      D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$47$$, $container$$60_tooltip$$20$$, $bounds$$76_overlayRect$$1$$, $referenceLineStyle_startAngle$$11$$, $angleExtent$$6_max$$5_percentFill$$1$$, $innerRadius_referenceObjects$$1$$, $i$$294_outerRadius$$, $thresholdColor$$, D.$JSCompiler_alias_FALSE$$)
    }
  }else {
    "off" != $options$$63$$.plotArea.rendered && (!("auto" == $options$$63$$.plotArea.rendered && "onIndicator" == $options$$63$$.thresholdDisplay) && "all" != $options$$63$$.thresholdDisplay) && ($thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$47$$), $referenceLineStyle_startAngle$$11$$ = 1.5 * window.Math.PI, $angleExtent$$6_max$$5_percentFill$$1$$ = 2 * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$47$$, $container$$60_tooltip$$20$$, $bounds$$76_overlayRect$$1$$, 
    $referenceLineStyle_startAngle$$11$$, $angleExtent$$6_max$$5_percentFill$$1$$, $innerRadius_referenceObjects$$1$$, $i$$294_outerRadius$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$))
  }
  if(($indicatorSize_referenceLineWidth_thresholds$$3$$ = $options$$63$$.indicatorSize) && 1 != $indicatorSize_referenceLineWidth_thresholds$$3$$) {
    $maxDiameter$$1_referenceLineColor_totalWidth$$ *= 0.075 * (1 - $indicatorSize_referenceLineWidth_thresholds$$3$$), $innerRadius_referenceObjects$$1$$ += $maxDiameter$$1_referenceLineColor_totalWidth$$, $i$$294_outerRadius$$ -= $maxDiameter$$1_referenceLineColor_totalWidth$$
  }
  $referenceLineStyle_startAngle$$11$$ = 1.5 * window.Math.PI;
  $angleExtent$$6_max$$5_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$63$$, $options$$63$$.min, $value$$82$$);
  $angleExtent$$6_max$$5_percentFill$$1$$ = 2 * $angleExtent$$6_max$$5_percentFill$$1$$ * window.Math.PI;
  D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$47$$, $container$$60_tooltip$$20$$, $bounds$$76_overlayRect$$1$$, $referenceLineStyle_startAngle$$11$$, $angleExtent$$6_max$$5_percentFill$$1$$, $innerRadius_referenceObjects$$1$$, $i$$294_outerRadius$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$47$$), D.$JSCompiler_alias_FALSE$$);
  if($innerRadius_referenceObjects$$1$$ = $options$$63$$.referenceLines) {
    for($i$$294_outerRadius$$ = 0;$i$$294_outerRadius$$ < $innerRadius_referenceObjects$$1$$.length;$i$$294_outerRadius$$++) {
      $maxDiameter$$1_referenceLineColor_totalWidth$$ = $innerRadius_referenceObjects$$1$$[$i$$294_outerRadius$$].color ? $innerRadius_referenceObjects$$1$$[$i$$294_outerRadius$$].color : "black", $indicatorSize_referenceLineWidth_thresholds$$3$$ = $innerRadius_referenceObjects$$1$$[$i$$294_outerRadius$$].lineWidth ? $innerRadius_referenceObjects$$1$$[$i$$294_outerRadius$$].lineWidth : 2, $referenceLineStyle_startAngle$$11$$ = $innerRadius_referenceObjects$$1$$[$i$$294_outerRadius$$].lineStyle, $value$$82$$ = 
      $innerRadius_referenceObjects$$1$$[$i$$294_outerRadius$$].value, window.angle = 1.5 * window.Math.PI + 2 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$63$$, $options$$63$$.min, $value$$82$$) * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$47$$, $container$$60_tooltip$$20$$, $bounds$$76_overlayRect$$1$$, $maxDiameter$$1_referenceLineColor_totalWidth$$, $indicatorSize_referenceLineWidth_thresholds$$3$$, $referenceLineStyle_startAngle$$11$$)
    }
  }
  $bounds$$76_overlayRect$$1$$ = new D.$DvtRect$$($gauge$$47$$.$_context$, $bounds$$76_overlayRect$$1$$.x, $bounds$$76_overlayRect$$1$$.y, $bounds$$76_overlayRect$$1$$.$w$, $bounds$$76_overlayRect$$1$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bounds$$76_overlayRect$$1$$);
  $container$$60_tooltip$$20$$.$addChild$($bounds$$76_overlayRect$$1$$);
  (($container$$60_tooltip$$20$$ = $options$$63$$.shortDesc) || $gauge$$47$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$47$$.$__getEventManager$().$associate$($bounds$$76_overlayRect$$1$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$60_tooltip$$20$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$47$$)))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$48$$, $container$$61_tooltip$$21$$, $axisArea_bounds$$77$$) {
  var $options$$64$$ = $gauge$$48$$.$__getOptions$(), $color$$39_isRTL$$8$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$48$$.$_context$), $axisInfo$$1_axisOptions$$ = {layout:{}};
  $axisInfo$$1_axisOptions$$.layout.gapRatio = 0;
  $axisInfo$$1_axisOptions$$.timeAxisType = "disabled";
  $axisInfo$$1_axisOptions$$.position = "bottom";
  $axisInfo$$1_axisOptions$$.min = $options$$64$$.min;
  $axisInfo$$1_axisOptions$$.max = $options$$64$$.max;
  $axisInfo$$1_axisOptions$$.dataMin = $options$$64$$.min;
  $axisInfo$$1_axisOptions$$.dataMax = $options$$64$$.max;
  $axisInfo$$1_axisOptions$$.tickLabel = {rendered:"off"};
  $axisInfo$$1_axisOptions$$ = (0,D.$DvtAxisInfo$newInstance$$)($gauge$$48$$.$_context$, $axisInfo$$1_axisOptions$$, $axisArea_bounds$$77$$);
  $gauge$$48$$.$__axisInfo$ = $axisInfo$$1_axisOptions$$;
  var $baseline$$8$$ = 0;
  0 > $options$$64$$.max ? $baseline$$8$$ = $options$$64$$.max : 0 < $options$$64$$.min && ($baseline$$8$$ = $options$$64$$.min);
  var $baselineCoord$$3_referenceLine_referenceLineHeight$$ = $axisInfo$$1_axisOptions$$.$getCoordAt$($baseline$$8$$);
  "off" != $options$$64$$.plotArea.rendered && !("auto" == $options$$64$$.plotArea.rendered && "onIndicator" == $options$$64$$.thresholdDisplay) && ($baselineCoord$$3_referenceLine_referenceLineHeight$$ = $axisInfo$$1_axisOptions$$.$getUnboundedCoordAt$($options$$64$$.min));
  var $endCoord$$5_shadow$$1_stroke$$31_xCoord$$ = $axisInfo$$1_axisOptions$$.$getUnboundedCoordAt$($options$$64$$.value), $endCoord$$5_shadow$$1_stroke$$31_xCoord$$ = window.Math.max($axisArea_bounds$$77$$.x, window.Math.min($axisArea_bounds$$77$$.x + $axisArea_bounds$$77$$.$w$, $endCoord$$5_shadow$$1_stroke$$31_xCoord$$)), $plotAreaEnd$$ = 0, $plotAreaEnd$$ = 0 > $options$$64$$.min && 0 > $options$$64$$.value ? $axisInfo$$1_axisOptions$$.$getUnboundedCoordAt$($options$$64$$.min) : $axisInfo$$1_axisOptions$$.$getUnboundedCoordAt$($options$$64$$.max), 
  $plotAreaEnd$$ = window.Math.max($axisArea_bounds$$77$$.x, window.Math.min($axisArea_bounds$$77$$.x + $axisArea_bounds$$77$$.$w$, $plotAreaEnd$$)), $plotY1$$ = $axisArea_bounds$$77$$.y, $plotY2$$ = $axisArea_bounds$$77$$.y + $axisArea_bounds$$77$$.$h$, $indicatorHeight_indicatorY1_yCoord$$ = $axisArea_bounds$$77$$.y + (1 - $options$$64$$.indicatorSize) / 2 * $axisArea_bounds$$77$$.$h$, $indicatorY2$$ = $axisArea_bounds$$77$$.y + $axisArea_bounds$$77$$.$h$ * (1 - (1 - $options$$64$$.indicatorSize) / 
  2), $bRender_referenceObjects$$2$$ = D.$JSCompiler_alias_TRUE$$;
  $endCoord$$5_shadow$$1_stroke$$31_xCoord$$ == $baselineCoord$$3_referenceLine_referenceLineHeight$$ && ($bRender_referenceObjects$$2$$ = D.$JSCompiler_alias_FALSE$$);
  var $borderColor$$22$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$48$$), $arColors$$22_gradient$$10_plotAreaBorderColor$$ = $options$$64$$.plotArea.borderColor, $thresholds$$4$$ = $options$$64$$.thresholds;
  if($thresholds$$4$$ && "off" != $options$$64$$.plotArea.rendered && "all" == $options$$64$$.thresholdDisplay) {
    for(var $i$$295_overlay$$6_plotAreaColor_shape$$61$$ = $thresholds$$4$$.length - 1;0 <= $i$$295_overlay$$6_plotAreaColor_shape$$61$$;$i$$295_overlay$$6_plotAreaColor_shape$$61$$--) {
      var $currentThresholdIndex$$1$$ = $i$$295_overlay$$6_plotAreaColor_shape$$61$$, $plotArea$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$48$$, $gauge$$48$$.$_context$, $baselineCoord$$3_referenceLine_referenceLineHeight$$, $plotAreaEnd$$, $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $cp$$5$$ = new D.$DvtClipPath$$("pacp" + $gauge$$48$$.getId());
      if($currentThresholdIndex$$1$$ == $thresholds$$4$$.length - 1) {
        $color$$39_isRTL$$8$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$5$$, $axisInfo$$1_axisOptions$$.$getUnboundedCoordAt$($options$$64$$.max), 0, $axisArea_bounds$$77$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$5$$, 0, 0, $axisArea_bounds$$77$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0)
      }else {
        if($color$$39_isRTL$$8$$) {
          var $thresholdMax$$ = $thresholds$$4$$[$thresholds$$4$$.length - 2 - $currentThresholdIndex$$1$$].max == D.$JSCompiler_alias_NULL$$ ? 100 : $thresholds$$4$$[$thresholds$$4$$.length - 2 - $currentThresholdIndex$$1$$].max;
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$5$$, $axisInfo$$1_axisOptions$$.$getUnboundedCoordAt$($options$$64$$.max), 0, 1 * ($options$$64$$.max - $thresholdMax$$) / window.Math.abs($baseline$$8$$ - $options$$64$$.max) * $axisArea_bounds$$77$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0)
        }else {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$5$$, 0, 0, 1 * $thresholds$$4$$[$currentThresholdIndex$$1$$].max / window.Math.abs($baseline$$8$$ - $options$$64$$.max) * $axisArea_bounds$$77$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0)
        }
      }
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($plotArea$$, $cp$$5$$);
      $color$$39_isRTL$$8$$ && ($currentThresholdIndex$$1$$ = $thresholds$$4$$.length - 1 - $i$$295_overlay$$6_plotAreaColor_shape$$61$$);
      $plotArea$$.$setSolidFill$(D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$48$$, $thresholds$$4$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $plotArea$$.$setSolidStroke$($arColors$$22_gradient$$10_plotAreaBorderColor$$);
      D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$48$$, $container$$61_tooltip$$21$$, $plotArea$$, D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$48$$, $thresholds$$4$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$))
    }
  }else {
    "off" != $options$$64$$.plotArea.rendered && (!("auto" == $options$$64$$.plotArea.rendered && "onIndicator" == $options$$64$$.thresholdDisplay) && "all" != $options$$64$$.thresholdDisplay) && ($plotArea$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$48$$, $gauge$$48$$.$_context$, $axisInfo$$1_axisOptions$$.$getUnboundedCoordAt$($options$$64$$.min), $axisInfo$$1_axisOptions$$.$getUnboundedCoordAt$($options$$64$$.max), $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $i$$295_overlay$$6_plotAreaColor_shape$$61$$ = 
    D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$48$$), $plotArea$$.$setSolidFill$($i$$295_overlay$$6_plotAreaColor_shape$$61$$), $plotArea$$.$setSolidStroke$($arColors$$22_gradient$$10_plotAreaBorderColor$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$48$$, $container$$61_tooltip$$21$$, $plotArea$$, $i$$295_overlay$$6_plotAreaColor_shape$$61$$))
  }
  $i$$295_overlay$$6_plotAreaColor_shape$$61$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$48$$, $gauge$$48$$.$_context$, $color$$39_isRTL$$8$$ ? $baselineCoord$$3_referenceLine_referenceLineHeight$$ - 0.5 : $baselineCoord$$3_referenceLine_referenceLineHeight$$ + 0.5, $color$$39_isRTL$$8$$ ? $endCoord$$5_shadow$$1_stroke$$31_xCoord$$ + 0.5 : $endCoord$$5_shadow$$1_stroke$$31_xCoord$$ - 0.5, $indicatorHeight_indicatorY1_yCoord$$ + 0.5, $indicatorY2$$ - 0.5, D.$JSCompiler_alias_TRUE$$);
  $gauge$$48$$.$__shapes$.push($i$$295_overlay$$6_plotAreaColor_shape$$61$$);
  $color$$39_isRTL$$8$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$48$$);
  !(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$48$$) && "none" != $options$$64$$.visualEffects ? ($arColors$$22_gradient$$10_plotAreaBorderColor$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$39_isRTL$$8$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$39_isRTL$$8$$, -0.04, -0.05)], $arColors$$22_gradient$$10_plotAreaBorderColor$$ = new D.$DvtLinearGradientFill$$(270, $arColors$$22_gradient$$10_plotAreaBorderColor$$, [1, 1], [0, 1]), $i$$295_overlay$$6_plotAreaColor_shape$$61$$.$setFill$($arColors$$22_gradient$$10_plotAreaBorderColor$$)) : 
  $i$$295_overlay$$6_plotAreaColor_shape$$61$$.$setSolidFill$($color$$39_isRTL$$8$$);
  $borderColor$$22$$ && $i$$295_overlay$$6_plotAreaColor_shape$$61$$.$setSolidStroke$($borderColor$$22$$);
  $bRender_referenceObjects$$2$$ && $container$$61_tooltip$$21$$.$addChild$($i$$295_overlay$$6_plotAreaColor_shape$$61$$);
  $i$$295_overlay$$6_plotAreaColor_shape$$61$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$48$$, $gauge$$48$$.$_context$, $baselineCoord$$3_referenceLine_referenceLineHeight$$, $endCoord$$5_shadow$$1_stroke$$31_xCoord$$, $indicatorHeight_indicatorY1_yCoord$$, $indicatorY2$$, D.$JSCompiler_alias_TRUE$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$48$$, $container$$61_tooltip$$21$$, $i$$295_overlay$$6_plotAreaColor_shape$$61$$, $bRender_referenceObjects$$2$$);
  if($bRender_referenceObjects$$2$$ = $options$$64$$.referenceLines) {
    for($i$$295_overlay$$6_plotAreaColor_shape$$61$$ = 0;$i$$295_overlay$$6_plotAreaColor_shape$$61$$ < $bRender_referenceObjects$$2$$.length;$i$$295_overlay$$6_plotAreaColor_shape$$61$$++) {
      $color$$39_isRTL$$8$$ = $bRender_referenceObjects$$2$$[$i$$295_overlay$$6_plotAreaColor_shape$$61$$].color ? $bRender_referenceObjects$$2$$[$i$$295_overlay$$6_plotAreaColor_shape$$61$$].color : "white", $indicatorHeight_indicatorY1_yCoord$$ = $options$$64$$.indicatorSize, $baselineCoord$$3_referenceLine_referenceLineHeight$$ = ((1 - $indicatorHeight_indicatorY1_yCoord$$) / 2 + $indicatorHeight_indicatorY1_yCoord$$) * $axisArea_bounds$$77$$.$h$, $endCoord$$5_shadow$$1_stroke$$31_xCoord$$ = $axisInfo$$1_axisOptions$$.$getUnboundedCoordAt$($bRender_referenceObjects$$2$$[$i$$295_overlay$$6_plotAreaColor_shape$$61$$].value), 
      $indicatorHeight_indicatorY1_yCoord$$ = $axisArea_bounds$$77$$.y + (1 - $indicatorHeight_indicatorY1_yCoord$$) / 4 * $axisArea_bounds$$77$$.$h$, $baselineCoord$$3_referenceLine_referenceLineHeight$$ = new D.$DvtLine$$($gauge$$48$$.$_context$, $endCoord$$5_shadow$$1_stroke$$31_xCoord$$, $indicatorHeight_indicatorY1_yCoord$$, $endCoord$$5_shadow$$1_stroke$$31_xCoord$$, $indicatorHeight_indicatorY1_yCoord$$ + $baselineCoord$$3_referenceLine_referenceLineHeight$$), $endCoord$$5_shadow$$1_stroke$$31_xCoord$$ = 
      new D.$DvtSolidStroke$$($color$$39_isRTL$$8$$, 1, $bRender_referenceObjects$$2$$[$i$$295_overlay$$6_plotAreaColor_shape$$61$$].lineWidth ? $bRender_referenceObjects$$2$$[$i$$295_overlay$$6_plotAreaColor_shape$$61$$].lineWidth : 2), $bRender_referenceObjects$$2$$[$i$$295_overlay$$6_plotAreaColor_shape$$61$$].lineStyle && $endCoord$$5_shadow$$1_stroke$$31_xCoord$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($bRender_referenceObjects$$2$$[$i$$295_overlay$$6_plotAreaColor_shape$$61$$].lineStyle)), 
      $baselineCoord$$3_referenceLine_referenceLineHeight$$.$setStroke$($endCoord$$5_shadow$$1_stroke$$31_xCoord$$), $endCoord$$5_shadow$$1_stroke$$31_xCoord$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), $container$$61_tooltip$$21$$.$addChild$($baselineCoord$$3_referenceLine_referenceLineHeight$$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)($baselineCoord$$3_referenceLine_referenceLineHeight$$, 
      $endCoord$$5_shadow$$1_stroke$$31_xCoord$$)
    }
  }
  $axisArea_bounds$$77$$ = new D.$DvtRect$$($gauge$$48$$.$_context$, $axisArea_bounds$$77$$.x, $axisArea_bounds$$77$$.y, $axisArea_bounds$$77$$.$w$, $axisArea_bounds$$77$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($axisArea_bounds$$77$$);
  $container$$61_tooltip$$21$$.$addChild$($axisArea_bounds$$77$$);
  (($container$$61_tooltip$$21$$ = $options$$64$$.shortDesc) || $options$$64$$.readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$48$$.$__getEventManager$().$associate$($axisArea_bounds$$77$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$61_tooltip$$21$$, $color$$39_isRTL$$8$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($gauge$$49$$, $context$$401$$, $baselineCoord$$4$$, $endCoord$$6$$, $y1$$21$$, $y2$$17$$, $roundCorners$$3$$) {
  return new window.DvtStatusMeterGaugeIndicator($gauge$$49$$, $context$$401$$, $baselineCoord$$4$$, $endCoord$$6$$, $y1$$21$$, $y2$$17$$, $roundCorners$$3$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$50$$, $container$$62$$, $shape$$62$$, $bRender$$1$$) {
  if("none" != $gauge$$50$$.$__getOptions$().visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$50$$)) {
    var $gradient$$11$$ = new D.$DvtLinearGradientFill$$(270, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]);
    $shape$$62$$.$setFill$($gradient$$11$$);
    $gauge$$50$$.$__shapes$.push($shape$$62$$);
    $shape$$62$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
    $bRender$$1$$ && $container$$62$$.$addChild$($shape$$62$$)
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$24_gauge$$51_gradient$$12$$, $container$$63$$, $shape$$63$$, $color$$40$$) {
  var $options$$66$$ = $arColors$$24_gauge$$51_gradient$$12$$.$__getOptions$();
  $shape$$63$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$63$$.$addChild$($shape$$63$$);
  "none" != $options$$66$$.visualEffects && ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($arColors$$24_gauge$$51_gradient$$12$$) ? ($arColors$$24_gauge$$51_gradient$$12$$ = [D.$DvtColorUtils$$.$getDarker$($color$$40$$, 0.9), $color$$40$$, D.$DvtColorUtils$$.$getBrighter$($color$$40$$)], $arColors$$24_gauge$$51_gradient$$12$$ = new D.$DvtLinearGradientFill$$(270, $arColors$$24_gauge$$51_gradient$$12$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$24_gauge$$51_gradient$$12$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$40$$, 
  -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($color$$40$$, -0.09, 0.04)], $arColors$$24_gauge$$51_gradient$$12$$ = new D.$DvtLinearGradientFill$$(270, $arColors$$24_gauge$$51_gradient$$12$$, [1, 1], [0, 1])), $shape$$63$$.$setFill$($arColors$$24_gauge$$51_gradient$$12$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabel$$($gauge$$52$$, $container$$64$$, $bounds$$78$$) {
  var $labelString$$3_options$$67$$ = $gauge$$52$$.$__getOptions$(), $isRTL$$9$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$52$$.$_context$);
  $labelString$$3_options$$67$$.metricLabel.style && !$labelString$$3_options$$67$$.metricLabel.style.$getStyle$("font-size") && $labelString$$3_options$$67$$.metricLabel.style.$setStyle$("font-size", "13px");
  if("on" == $labelString$$3_options$$67$$.metricLabel.rendered) {
    var $label$$12$$ = new D.$DvtOutputText$$($gauge$$52$$.$_context$, "");
    $label$$12$$.$setCSSStyle$($labelString$$3_options$$67$$.metricLabel.style);
    if(!(D.$DvtTextUtils$$.$guessTextDimensions$($label$$12$$).$h$ > $bounds$$78$$.$h$)) {
      var $labelGap$$ = $labelString$$3_options$$67$$.__layout.labelGap, $alignCoord_maxLabel$$1_maxValue$$8$$;
      if(0 < $labelString$$3_options$$67$$.max || "off" != $labelString$$3_options$$67$$.plotArea.rendered || !("auto" == $labelString$$3_options$$67$$.plotArea.rendered && "onIndicator" == $labelString$$3_options$$67$$.thresholdDisplay)) {
        $alignCoord_maxLabel$$1_maxValue$$8$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(0 < $labelString$$3_options$$67$$.max ? $labelString$$3_options$$67$$.max : $labelString$$3_options$$67$$.min, $gauge$$52$$);
        $alignCoord_maxLabel$$1_maxValue$$8$$ = new D.$DvtOutputText$$($gauge$$52$$.$_context$, $alignCoord_maxLabel$$1_maxValue$$8$$);
        $alignCoord_maxLabel$$1_maxValue$$8$$.$setCSSStyle$($labelString$$3_options$$67$$.metricLabel.style);
        var $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$ = $alignCoord_maxLabel$$1_maxValue$$8$$.$measureDimensions$();
        $alignCoord_maxLabel$$1_maxValue$$8$$ = $isRTL$$9$$ ? $bounds$$78$$.x + $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$w$ : $bounds$$78$$.x + $bounds$$78$$.$w$;
        window.labelSpace = $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$w$;
        $isRTL$$9$$ && ($bounds$$78$$.x += $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$w$ + $labelGap$$);
        $bounds$$78$$.$w$ -= $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$w$ + $labelGap$$
      }
      if(0 > $labelString$$3_options$$67$$.min && "on" != $labelString$$3_options$$67$$.plotArea.rendered && !("auto" == $labelString$$3_options$$67$$.plotArea.rendered && "onIndicator" == $labelString$$3_options$$67$$.thresholdDisplay)) {
        $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($labelString$$3_options$$67$$.min, $gauge$$52$$);
        $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$ = new D.$DvtOutputText$$($gauge$$52$$.$_context$, $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$);
        $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$setCSSStyle$($labelString$$3_options$$67$$.metricLabel.style);
        $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$ = $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$measureDimensions$();
        if(0 > $labelString$$3_options$$67$$.value || 0 >= $labelString$$3_options$$67$$.max) {
          $alignCoord_maxLabel$$1_maxValue$$8$$ = $isRTL$$9$$ ? $bounds$$78$$.x + $bounds$$78$$.$w$ : $bounds$$78$$.x + $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$w$, window.labelSpace = $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$w$
        }
        $isRTL$$9$$ || ($bounds$$78$$.x += $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$w$ + $labelGap$$);
        $bounds$$78$$.$w$ -= $maxLabelDims_minLabel$$1_minLabelDims_minValue$$6$$.$w$ + $labelGap$$
      }
      $labelString$$3_options$$67$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($labelString$$3_options$$67$$.value, $gauge$$52$$);
      $label$$12$$.$setTextString$($labelString$$3_options$$67$$);
      $label$$12$$.$setX$($alignCoord_maxLabel$$1_maxValue$$8$$);
      $label$$12$$.$setY$($bounds$$78$$.y + $bounds$$78$$.$h$ / 2);
      $label$$12$$.$alignMiddle$();
      $label$$12$$.$alignRight$();
      D.$DvtTextUtils$$.$fitText$($label$$12$$, window.labelSpace, $bounds$$78$$.$h$, $container$$64$$) && $label$$12$$.$isTruncated$() && $gauge$$52$$.$__getEventManager$().$associate$($label$$12$$, new D.$DvtSimpleObjPeer$$($labelString$$3_options$$67$$))
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$79$$, $radius$$9$$, $angle$$25$$) {
  return{x:window.Math.cos($angle$$25$$) * $radius$$9$$ + $bounds$$79$$.$w$ / 2 + $bounds$$79$$.x, y:window.Math.sin($angle$$25$$) * $radius$$9$$ + $bounds$$79$$.$h$ / 2 + $bounds$$79$$.y}
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$23_gauge$$53$$, $container$$65$$, $bounds$$80_shape$$64$$, $startAngle$$12$$, $angleExtent$$7$$, $innerRadius$$1$$, $outerRadius$$1$$, $color$$41$$, $isPlotArea$$) {
  var $context$$402$$ = $borderColor$$23_gauge$$53$$.$_context$;
  D.$DvtAgent$$.$isRightToLeft$($borderColor$$23_gauge$$53$$.$_context$) && ($startAngle$$12$$ = window.Math.PI - $startAngle$$12$$ - $angleExtent$$7$$, $startAngle$$12$$ = 0 < $startAngle$$12$$ ? $startAngle$$12$$ : $startAngle$$12$$ + 2 * window.Math.PI);
  $bounds$$80_shape$$64$$ = new D.$DvtStatusMeterGaugeCircularIndicator$$($context$$402$$, $bounds$$80_shape$$64$$, $startAngle$$12$$, $angleExtent$$7$$, $innerRadius$$1$$, $outerRadius$$1$$);
  $borderColor$$23_gauge$$53$$.$__shapes$.push($bounds$$80_shape$$64$$);
  $bounds$$80_shape$$64$$.$setSolidFill$($color$$41$$);
  ($borderColor$$23_gauge$$53$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$23_gauge$$53$$)) && !$isPlotArea$$ && $bounds$$80_shape$$64$$.$setSolidStroke$($borderColor$$23_gauge$$53$$);
  $container$$65$$.$addChild$($bounds$$80_shape$$64$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$54_shape$$65$$, $container$$66$$, $bounds$$81$$, $color$$42_stroke$$32$$, $lineWidth$$3$$, $lineStyle$$1$$) {
  var $angle$$26$$ = window.angle, $context$$403$$ = $gauge$$54_shape$$65$$.$_context$, $maxDiameter$$2_outerRadius$$2$$ = window.Math.min($bounds$$81$$.$w$, $bounds$$81$$.$h$), $innerRadius$$2$$ = 0.275 * $maxDiameter$$2_outerRadius$$2$$, $maxDiameter$$2_outerRadius$$2$$ = 0.5 * $maxDiameter$$2_outerRadius$$2$$;
  D.$DvtAgent$$.$isRightToLeft$($gauge$$54_shape$$65$$.$_context$) && ($angle$$26$$ = window.Math.PI - $angle$$26$$, $angle$$26$$ = 0 < $angle$$26$$ ? $angle$$26$$ : $angle$$26$$ + 2 * window.Math.PI);
  window.p1 = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$81$$, $innerRadius$$2$$, $angle$$26$$);
  window.p2 = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$81$$, $maxDiameter$$2_outerRadius$$2$$, $angle$$26$$);
  $gauge$$54_shape$$65$$ = new D.$DvtLine$$($context$$403$$, window.p1.x, window.p1.y, window.p2.x, window.p2.y);
  $color$$42_stroke$$32$$ = new D.$DvtSolidStroke$$($color$$42_stroke$$32$$, 1, $lineWidth$$3$$);
  $lineStyle$$1$$ && $color$$42_stroke$$32$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineStyle$$1$$));
  $gauge$$54_shape$$65$$.$setStroke$($color$$42_stroke$$32$$);
  $container$$66$$.$addChild$($gauge$$54_shape$$65$$)
};
window.DvtStatusMeterGaugeIndicator = function $DvtStatusMeterGaugeIndicator$($gauge$$38$$, $context$$399$$, $baselineCoord$$, $endCoord$$2$$, $y1$$18$$, $y2$$14$$, $roundCorners$$) {
  this.Init($gauge$$38$$, $context$$399$$, $baselineCoord$$, $endCoord$$2$$, $y1$$18$$, $y2$$14$$, $roundCorners$$)
};
D.$DvtObj$$.$createSubclass$(window.DvtStatusMeterGaugeIndicator, D.$DvtRect$$, "DvtStatusMeterGaugeIndicator");
window.DvtStatusMeterGaugeIndicator.$_MIN_CORNER_RADIUS$ = 2.5;
window.DvtStatusMeterGaugeIndicator.prototype.Init = function $DvtStatusMeterGaugeIndicator$$Init$($gauge$$39$$, $context$$400$$, $baselineCoord$$1$$, $endCoord$$3$$, $y1$$19$$, $y2$$15$$, $roundCorners$$1$$) {
  window.DvtStatusMeterGaugeIndicator.$superclass$.Init.call(this, $context$$400$$);
  this.$_gauge$ = $gauge$$39$$;
  this.$_roundCorners$ = $roundCorners$$1$$;
  (0,D.$JSCompiler_StaticMethods_setCoords$$)(this, $baselineCoord$$1$$, $endCoord$$3$$, $y1$$19$$, $y2$$15$$)
};
D.$JSCompiler_StaticMethods_setCoords$$ = function $$JSCompiler_StaticMethods_setCoords$$$($JSCompiler_StaticMethods_setCoords$self$$, $baselineCoord$$2_radius$$8$$, $endCoord$$4$$, $y1$$20$$, $height$$55_y2$$16$$) {
  $JSCompiler_StaticMethods_setCoords$self$$.$_baselineCoord$ = $baselineCoord$$2_radius$$8$$;
  $JSCompiler_StaticMethods_setCoords$self$$.$_endCoord$ = $endCoord$$4$$;
  $JSCompiler_StaticMethods_setCoords$self$$.$_y1$ = $y1$$20$$;
  $JSCompiler_StaticMethods_setCoords$self$$.$_y2$ = $height$$55_y2$$16$$;
  var $x$$182$$ = window.Math.min($baselineCoord$$2_radius$$8$$, $endCoord$$4$$);
  $height$$55_y2$$16$$ -= $y1$$20$$;
  (0,D.$JSCompiler_StaticMethods_setRect$$)($JSCompiler_StaticMethods_setCoords$self$$, $x$$182$$, $y1$$20$$, window.Math.abs($baselineCoord$$2_radius$$8$$ - $endCoord$$4$$), $height$$55_y2$$16$$);
  $JSCompiler_StaticMethods_setCoords$self$$.$_roundCorners$ && ($baselineCoord$$2_radius$$8$$ = $height$$55_y2$$16$$ * ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($JSCompiler_StaticMethods_setCoords$self$$.$_gauge$) ? 0.25 : 0.15), $baselineCoord$$2_radius$$8$$ >= window.DvtStatusMeterGaugeIndicator.$_MIN_CORNER_RADIUS$ && (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($JSCompiler_StaticMethods_setCoords$self$$, $baselineCoord$$2_radius$$8$$, $baselineCoord$$2_radius$$8$$))
};
window.DvtStatusMeterGaugeIndicator.prototype.$getAnimationParams$ = function $DvtStatusMeterGaugeIndicator$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_y1$, this.$_y2$]
};
window.DvtStatusMeterGaugeIndicator.prototype.$setAnimationParams$ = function $DvtStatusMeterGaugeIndicator$$$setAnimationParams$$($params$$6$$) {
  $params$$6$$ && 4 == $params$$6$$.length && (0,D.$JSCompiler_StaticMethods_setCoords$$)(this, $params$$6$$[0], $params$$6$$[1], $params$$6$$[2], $params$$6$$[3])
};
D.$DvtStatusMeterGaugeCircularIndicator$$ = function $$DvtStatusMeterGaugeCircularIndicator$$$($context$$404$$, $bounds$$82$$, $startAngle$$13$$, $angleExtent$$8$$, $innerRadius$$3$$, $outerRadius$$3$$) {
  this.Init($context$$404$$, $bounds$$82$$, $startAngle$$13$$, $angleExtent$$8$$, $innerRadius$$3$$, $outerRadius$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeCircularIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeCircularIndicator");
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$405$$, $bounds$$83$$, $startAngle$$14$$, $angleExtent$$9$$, $innerRadius$$4$$, $outerRadius$$4$$) {
  D.$DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$405$$);
  (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $bounds$$83$$, $startAngle$$14$$, $angleExtent$$9$$, $innerRadius$$4$$, $outerRadius$$4$$)
};
D.$JSCompiler_StaticMethods_setPath$$ = function $$JSCompiler_StaticMethods_setPath$$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$84_p4$$2$$, $startAngle$$15$$, $angleExtent$$10$$, $innerRadius$$5$$, $cmd$$7_outerRadius$$5$$) {
  var $p1$$3$$, $p2$$3$$, $p3$$2$$;
  $bounds$$84_p4$$2$$ && $bounds$$84_p4$$2$$ instanceof D.$DvtRectangle$$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$84_p4$$2$$ : $bounds$$84_p4$$2$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$15$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$10$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$5$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $cmd$$7_outerRadius$$5$$;
  $angleExtent$$10$$ < 2 * window.Math.PI ? ($p1$$3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$2$$, $cmd$$7_outerRadius$$5$$, $startAngle$$15$$), $p2$$3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$2$$, $cmd$$7_outerRadius$$5$$, $startAngle$$15$$ + $angleExtent$$10$$), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$2$$, $innerRadius$$5$$, $startAngle$$15$$ + $angleExtent$$10$$), $bounds$$84_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$2$$, 
  $innerRadius$$5$$, $startAngle$$15$$), $cmd$$7_outerRadius$$5$$ = window.DvtPathUtils.moveTo($p1$$3$$.x, $p1$$3$$.y) + window.DvtPathUtils.arcTo($cmd$$7_outerRadius$$5$$, $cmd$$7_outerRadius$$5$$, $angleExtent$$10$$, 1, $p2$$3$$.x, $p2$$3$$.y) + window.DvtPathUtils.lineTo($p3$$2$$.x, $p3$$2$$.y) + window.DvtPathUtils.arcTo($innerRadius$$5$$, $innerRadius$$5$$, $angleExtent$$10$$, 0, $bounds$$84_p4$$2$$.x, $bounds$$84_p4$$2$$.y) + window.DvtPathUtils.closePath()) : ($p1$$3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$2$$, 
  $cmd$$7_outerRadius$$5$$, $startAngle$$15$$), $p2$$3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$2$$, $cmd$$7_outerRadius$$5$$, $startAngle$$15$$ + $angleExtent$$10$$ / 2), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$2$$, $innerRadius$$5$$, $startAngle$$15$$), $bounds$$84_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$2$$, $innerRadius$$5$$, $startAngle$$15$$ + $angleExtent$$10$$ / 2), $cmd$$7_outerRadius$$5$$ = 
  window.DvtPathUtils.moveTo($p1$$3$$.x, $p1$$3$$.y) + window.DvtPathUtils.arcTo($cmd$$7_outerRadius$$5$$, $cmd$$7_outerRadius$$5$$, $angleExtent$$10$$ / 2, 1, $p2$$3$$.x, $p2$$3$$.y) + window.DvtPathUtils.arcTo($cmd$$7_outerRadius$$5$$, $cmd$$7_outerRadius$$5$$, $angleExtent$$10$$ / 2, 1, $p1$$3$$.x, $p1$$3$$.y), 0 < $innerRadius$$5$$ && ($cmd$$7_outerRadius$$5$$ += window.DvtPathUtils.moveTo($bounds$$84_p4$$2$$.x, $bounds$$84_p4$$2$$.y) + window.DvtPathUtils.arcTo($innerRadius$$5$$, $innerRadius$$5$$, 
  $angleExtent$$10$$ / 2, 0, $p3$$2$$.x, $p3$$2$$.y) + window.DvtPathUtils.arcTo($innerRadius$$5$$, $innerRadius$$5$$, $angleExtent$$10$$ / 2, 0, $bounds$$84_p4$$2$$.x, $bounds$$84_p4$$2$$.y)), $cmd$$7_outerRadius$$5$$ += window.DvtPathUtils.closePath());
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$($cmd$$7_outerRadius$$5$$)
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$7$$) {
  $params$$7$$ && 5 == $params$$7$$.length && (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $params$$7$$[0], $params$$7$$[1], $params$$7$$[2], $params$$7$$[3], $params$$7$$[4])
};
D.$DvtDialGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtDialGauge", D.$DvtDialGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDialGauge$$, D.$DvtGauge$$, "DvtDialGauge");
D.$DvtDialGauge$$.newInstance = function $$DvtDialGauge$$$newInstance$($context$$12$$, $callback$$30$$, $callbackObj$$7$$) {
  var $gauge$$3$$ = new D.$DvtDialGauge$$;
  $gauge$$3$$.Init($context$$12$$, $callback$$30$$, $callbackObj$$7$$);
  return $gauge$$3$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDialGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$13$$, $callback$$31$$, $callbackObj$$8$$) {
  D.$DvtDialGauge$$.$superclass$.Init.call(this, $context$$13$$, $callback$$31$$, $callbackObj$$8$$);
  this.$Defaults$ = new D.$DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$8$$) {
  D.$DvtDialGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$8$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$7$$, $width$$18$$, $height$$18$$) {
  D.$DvtDialGaugeRenderer$$.$render$(this, $container$$7$$, $width$$18$$, $height$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$2$$, $animatedObjs$$2_animationType$$3$$, $animationDuration$$4$$) {
  $animatedObjs$$2_animationType$$3$$ = [];
  for(var $i$$12$$ = 0;$i$$12$$ < $objs$$2$$.length;$i$$12$$++) {
    var $obj$$31$$ = $objs$$2$$[$i$$12$$], $endState$$2$$ = $obj$$31$$.$getAnimationParams$(), $animation$$2_startAngle$$1$$ = D.$DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$31$$.$setAngle$($animation$$2_startAngle$$1$$);
    $animation$$2_startAngle$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$31$$, $animationDuration$$4$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$2_startAngle$$1$$.$_animator$, "typeNumberArray", $obj$$31$$, $obj$$31$$.$getAnimationParams$, $obj$$31$$.$setAnimationParams$, $endState$$2$$);
    $animation$$2_startAngle$$1$$.$_animator$.$setEasing$(function($objs$$2$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$2$$, 0.7)
    });
    $animatedObjs$$2_animationType$$3$$.push($animation$$2_startAngle$$1$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$2_animationType$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$70$$, $y$$49$$) {
  var $angle$$4_ratio$$1$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$49$$ - this.$__anchorPt$.y, $x$$70$$ - this.$__anchorPt$.x));
  0 >= $angle$$4_ratio$$1$$ && ($angle$$4_ratio$$1$$ += 360);
  var $isRTL$$1_minValue$$1$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$), $angleExtent_backgroundOptions$$ = this.$__getOptions$().background, $startAngle$$2$$ = $isRTL$$1_minValue$$1$$ ? 180 + $angleExtent_backgroundOptions$$.startAngle : 360 - $angleExtent_backgroundOptions$$.startAngle, $angleExtent_backgroundOptions$$ = $angleExtent_backgroundOptions$$.angleExtent, $endAngle$$1$$ = $startAngle$$2$$ + $angleExtent_backgroundOptions$$;
  if($isRTL$$1_minValue$$1$$) {
    $endAngle$$1$$ = $startAngle$$2$$;
    for($startAngle$$2$$ -= $angleExtent_backgroundOptions$$;0 > $startAngle$$2$$;) {
      $startAngle$$2$$ += 360, $endAngle$$1$$ += 360
    }
  }
  $angle$$4_ratio$$1$$ + 360 >= $startAngle$$2$$ && $angle$$4_ratio$$1$$ + 360 <= $endAngle$$1$$ ? $angle$$4_ratio$$1$$ += 360 : $angle$$4_ratio$$1$$ >= $startAngle$$2$$ && $angle$$4_ratio$$1$$ <= $endAngle$$1$$ || ($angle$$4_ratio$$1$$ = $angle$$4_ratio$$1$$ > $endAngle$$1$$ ? $startAngle$$2$$ + 360 - $angle$$4_ratio$$1$$ < $angle$$4_ratio$$1$$ - $endAngle$$1$$ ? $startAngle$$2$$ : $endAngle$$1$$ : $startAngle$$2$$ - $angle$$4_ratio$$1$$ < $angle$$4_ratio$$1$$ + 360 - $endAngle$$1$$ ? $startAngle$$2$$ : 
  $endAngle$$1$$);
  $angle$$4_ratio$$1$$ = ($angle$$4_ratio$$1$$ - $startAngle$$2$$) / $angleExtent_backgroundOptions$$;
  $isRTL$$1_minValue$$1$$ && ($angle$$4_ratio$$1$$ = 1 - $angle$$4_ratio$$1$$);
  $isRTL$$1_minValue$$1$$ = this.$Options$.min;
  return $angle$$4_ratio$$1$$ * (this.$Options$.max - $isRTL$$1_minValue$$1$$) + $isRTL$$1_minValue$$1$$
};
D.$DvtDialGaugeDefaults$$ = function $$DvtDialGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtDialGaugeDefaults");
D.$DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtDialGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeRenderer$$, D.$DvtObj$$, "DvtDialGaugeRenderer");
D.$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$12$$, $container$$41$$, $bounds$$52_width$$57$$, $height$$51$$) {
  D.$DvtGaugeDataUtils$$.$hasData$($gauge$$12$$) ? ($bounds$$52_width$$57$$ = new D.$DvtRectangle$$(0, 0, $bounds$$52_width$$57$$, $height$$51$$), D.$DvtDialGaugeRenderer$$.$_renderShape$($gauge$$12$$, $container$$41$$, $bounds$$52_width$$57$$), D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$12$$, $container$$41$$, $bounds$$52_width$$57$$)) : D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$12$$, $container$$41$$, new D.$DvtRectangle$$(0, 0, $bounds$$52_width$$57$$, $height$$51$$))
};
D.$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$13$$, $container$$42$$, $bounds$$53_scale$$11$$) {
  var $options$$42_tooltip$$17$$ = $gauge$$13$$.$__getOptions$(), $background$$3_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_createBackground$($gauge$$13$$, $bounds$$53_scale$$11$$);
  $container$$42$$.$addChild$($background$$3_backgroundAnchor$$);
  $options$$42_tooltip$$17$$.background.majorTickCount && $options$$42_tooltip$$17$$.background.radius && D.$DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$13$$, $container$$42$$, $bounds$$53_scale$$11$$);
  var $indicator$$ = D.$DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$13$$, $bounds$$53_scale$$11$$), $translateContainer$$ = new D.$DvtContainer$$($gauge$$13$$.$_context$), $rotateContainer$$ = new D.$DvtDialGaugeIndicator$$($gauge$$13$$.$_context$);
  $container$$42$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($indicator$$);
  var $indicatorBounds_mat$$31$$ = $indicator$$.$getDimensions$(), $angleRads$$5$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$13$$, $options$$42_tooltip$$17$$.value), $background$$3_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$13$$, $bounds$$53_scale$$11$$), $indicatorAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$13$$, $indicatorBounds_mat$$31$$);
  $bounds$$53_scale$$11$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$13$$, $bounds$$53_scale$$11$$, $indicatorBounds_mat$$31$$);
  $indicatorBounds_mat$$31$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$31$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$31$$.scale($bounds$$53_scale$$11$$, $bounds$$53_scale$$11$$);
  $indicator$$.$setMatrix$($indicatorBounds_mat$$31$$);
  $rotateContainer$$.$setAngle$($angleRads$$5$$);
  $indicatorBounds_mat$$31$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$31$$.translate($background$$3_backgroundAnchor$$.x, $background$$3_backgroundAnchor$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$31$$);
  $gauge$$13$$.$__shapes$.push($rotateContainer$$);
  (($options$$42_tooltip$$17$$ = $options$$42_tooltip$$17$$.shortDesc) || $gauge$$13$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$13$$.$__getEventManager$().$associate$($container$$42$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$42_tooltip$$17$$));
  $gauge$$13$$.$__anchorPt$ = $background$$3_backgroundAnchor$$
};
D.$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$14$$, $bounds$$54$$) {
  var $backgroundOptions$$1$$ = $gauge$$14$$.$__getOptions$().background, $isRTL$$4_radiusScale$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$14$$.$_context$), $isTouchDevice_locImages_metLblBounds_width$$58$$ = D.$DvtAgent$$.$isTouchDevice$(), $shape$$57_widthRes$$ = $isTouchDevice_locImages_metLblBounds_width$$58$$ ? 2 * $bounds$$54$$.$w$ : $bounds$$54$$.$w$, $heightRes_scale$$12$$ = $isTouchDevice_locImages_metLblBounds_width$$58$$ ? 2 * $bounds$$54$$.$h$ : $bounds$$54$$.$h$, $images$$10_tx$$9$$ = 
  $backgroundOptions$$1$$.images;
  if($images$$10_tx$$9$$ && 0 < $images$$10_tx$$9$$.length) {
    var $i$$288_ty$$9$$, $refWidth$$, $refHeight$$, $isTouchDevice_locImages_metLblBounds_width$$58$$ = [];
    for($i$$288_ty$$9$$ = 0;$i$$288_ty$$9$$ < $images$$10_tx$$9$$.length;$i$$288_ty$$9$$++) {
      var $imageDims_isImageRTL_source$$12$$ = "rtl" == $images$$10_tx$$9$$[$i$$288_ty$$9$$].dir;
      $isRTL$$4_radiusScale$$ && $imageDims_isImageRTL_source$$12$$ ? $isTouchDevice_locImages_metLblBounds_width$$58$$.push($images$$10_tx$$9$$[$i$$288_ty$$9$$]) : !$isRTL$$4_radiusScale$$ && !$imageDims_isImageRTL_source$$12$$ && $isTouchDevice_locImages_metLblBounds_width$$58$$.push($images$$10_tx$$9$$[$i$$288_ty$$9$$])
    }
    $images$$10_tx$$9$$ = 0 < $isTouchDevice_locImages_metLblBounds_width$$58$$.length ? $isTouchDevice_locImages_metLblBounds_width$$58$$ : $images$$10_tx$$9$$;
    for($i$$288_ty$$9$$ = 0;$i$$288_ty$$9$$ < $images$$10_tx$$9$$.length;$i$$288_ty$$9$$++) {
      var $height$$52_image$$12$$ = $images$$10_tx$$9$$[$i$$288_ty$$9$$], $imageDims_isImageRTL_source$$12$$ = $height$$52_image$$12$$.src, $isTouchDevice_locImages_metLblBounds_width$$58$$ = $height$$52_image$$12$$.width, $height$$52_image$$12$$ = $height$$52_image$$12$$.height, $isSvg$$ = $imageDims_isImageRTL_source$$12$$ && -1 < $imageDims_isImageRTL_source$$12$$.search(".svg");
      0 == $i$$288_ty$$9$$ && ($refWidth$$ = $isTouchDevice_locImages_metLblBounds_width$$58$$, $refHeight$$ = $height$$52_image$$12$$);
      if($isSvg$$ || $isTouchDevice_locImages_metLblBounds_width$$58$$ >= $shape$$57_widthRes$$ && $height$$52_image$$12$$ >= $heightRes_scale$$12$$ || $i$$288_ty$$9$$ == $images$$10_tx$$9$$.length - 1) {
        var $shape$$57_widthRes$$ = new D.$DvtImage$$($gauge$$14$$.$_context$, $imageDims_isImageRTL_source$$12$$, 0, 0, $isTouchDevice_locImages_metLblBounds_width$$58$$, $height$$52_image$$12$$), $matrix$$10$$ = new D.$DvtMatrix$$, $heightRes_scale$$12$$ = window.Math.min($bounds$$54$$.$w$ / $isTouchDevice_locImages_metLblBounds_width$$58$$, $bounds$$54$$.$h$ / $height$$52_image$$12$$), $images$$10_tx$$9$$ = ($bounds$$54$$.$w$ - $heightRes_scale$$12$$ * $isTouchDevice_locImages_metLblBounds_width$$58$$) / 
        2;
        $i$$288_ty$$9$$ = ($bounds$$54$$.$h$ - $heightRes_scale$$12$$ * $height$$52_image$$12$$) / 2;
        $matrix$$10$$.scale($heightRes_scale$$12$$, $heightRes_scale$$12$$);
        $matrix$$10$$.translate($images$$10_tx$$9$$, $i$$288_ty$$9$$);
        $shape$$57_widthRes$$.$setMatrix$($matrix$$10$$);
        $isSvg$$ && D.$DvtAgent$$.$isPlatformWebkit$() && ($imageDims_isImageRTL_source$$12$$ = D.$DvtImageLoader$$.$loadImage$($gauge$$14$$.$_context$, $imageDims_isImageRTL_source$$12$$, D.$DvtObj$$.$createCallback$($shape$$57_widthRes$$, $shape$$57_widthRes$$.$__setDimensions$))) && $shape$$57_widthRes$$.$__setDimensions$($imageDims_isImageRTL_source$$12$$);
        $bounds$$54$$.x += $images$$10_tx$$9$$;
        $bounds$$54$$.y += $i$$288_ty$$9$$;
        $bounds$$54$$.$w$ = $heightRes_scale$$12$$ * $isTouchDevice_locImages_metLblBounds_width$$58$$;
        $bounds$$54$$.$h$ = $heightRes_scale$$12$$ * $height$$52_image$$12$$;
        !(0,window.isNaN)($backgroundOptions$$1$$.anchorX) && !(0,window.isNaN)($backgroundOptions$$1$$.anchorY) && ($backgroundOptions$$1$$._anchorX = $isRTL$$4_radiusScale$$ ? $bounds$$54$$.x + $bounds$$54$$.$w$ - $bounds$$54$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$ : $bounds$$54$$.x + $bounds$$54$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$, $backgroundOptions$$1$$._anchorY = $bounds$$54$$.y + $bounds$$54$$.$h$ * $backgroundOptions$$1$$.anchorY / $refHeight$$);
        $backgroundOptions$$1$$.metricLabelBounds && ($isTouchDevice_locImages_metLblBounds_width$$58$$ = {}, $isTouchDevice_locImages_metLblBounds_width$$58$$.width = $bounds$$54$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.width / $refWidth$$, $isTouchDevice_locImages_metLblBounds_width$$58$$.height = $bounds$$54$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.height / $refHeight$$, $isTouchDevice_locImages_metLblBounds_width$$58$$.y = $bounds$$54$$.y + $bounds$$54$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.y / 
        $refHeight$$, $isTouchDevice_locImages_metLblBounds_width$$58$$.x = $isRTL$$4_radiusScale$$ ? $bounds$$54$$.x + $bounds$$54$$.$w$ - $bounds$$54$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$ - $isTouchDevice_locImages_metLblBounds_width$$58$$.width : $bounds$$54$$.x + $bounds$$54$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$, $backgroundOptions$$1$$._metricLabelBounds = $isTouchDevice_locImages_metLblBounds_width$$58$$);
        $isRTL$$4_radiusScale$$ = window.Math.min($bounds$$54$$.$w$ / $refWidth$$, $bounds$$54$$.$h$ / $refHeight$$);
        $backgroundOptions$$1$$._radius = $backgroundOptions$$1$$.radius * $isRTL$$4_radiusScale$$;
        $backgroundOptions$$1$$._tickLabelHeight = $backgroundOptions$$1$$.tickLabelHeight * $bounds$$54$$.$h$ / $refHeight$$;
        $backgroundOptions$$1$$._tickLabelWidth = $backgroundOptions$$1$$.tickLabelWidth * $bounds$$54$$.$w$ / $refWidth$$;
        return $shape$$57_widthRes$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$15$$, $bounds$$55$$) {
  var $indicatorOptions$$ = $gauge$$15$$.$__getOptions$().indicator, $indicatorLength_source$$13$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$15$$, $bounds$$55$$), $heightRes$$1_shape$$58$$ = D.$DvtAgent$$.$isTouchDevice$() ? 2 * $indicatorLength_source$$13$$ : $indicatorLength_source$$13$$, $refWidth$$1$$, $refHeight$$1$$, $images$$11$$ = $indicatorOptions$$.images;
  if($images$$11$$ && 0 < $images$$11$$.length) {
    for(var $i$$289$$ = 0;$i$$289$$ < $images$$11$$.length;$i$$289$$++) {
      var $height$$53_image$$13$$ = $images$$11$$[$i$$289$$], $indicatorLength_source$$13$$ = $height$$53_image$$13$$.src, $width$$59$$ = $height$$53_image$$13$$.width, $height$$53_image$$13$$ = $height$$53_image$$13$$.height, $isSvg$$1$$ = $indicatorLength_source$$13$$ && -1 < $indicatorLength_source$$13$$.search(".svg");
      0 == $i$$289$$ && ($refWidth$$1$$ = $width$$59$$, $refHeight$$1$$ = $height$$53_image$$13$$);
      if($isSvg$$1$$ || $height$$53_image$$13$$ >= $heightRes$$1_shape$$58$$ || $i$$289$$ == $images$$11$$.length - 1) {
        return $heightRes$$1_shape$$58$$ = new D.$DvtImage$$($gauge$$15$$.$_context$, $indicatorLength_source$$13$$, 0, 0, $width$$59$$, $height$$53_image$$13$$), $isSvg$$1$$ && D.$DvtAgent$$.$isPlatformWebkit$() && D.$DvtImageLoader$$.$loadImage$($gauge$$15$$.$_context$, $indicatorLength_source$$13$$, D.$DvtObj$$.$createCallback$($heightRes$$1_shape$$58$$, $heightRes$$1_shape$$58$$.$__setDimensions$)) && ($heightRes$$1_shape$$58$$.$setWidth$($width$$59$$), $heightRes$$1_shape$$58$$.$setHeight$($height$$53_image$$13$$)), 
        !(0,window.isNaN)($indicatorOptions$$.anchorX) && !(0,window.isNaN)($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$59$$ / $refWidth$$1$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$53_image$$13$$ / $refHeight$$1$$), $heightRes$$1_shape$$58$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$16_startAngle$$9$$) {
  var $backgroundOptions$$2$$ = $gauge$$16_startAngle$$9$$.$__getOptions$().background;
  $gauge$$16_startAngle$$9$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$16_startAngle$$9$$.$_context$) ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle;
  return window.Math.PI * (90 - $gauge$$16_startAngle$$9$$) / 180
};
D.$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$17$$, $value$$76$$) {
  var $isRTL$$6_maxValue$$4_options$$43$$ = $gauge$$17$$.$__getOptions$(), $backgroundOptions$$3$$ = $isRTL$$6_maxValue$$4_options$$43$$.background, $minValue$$3_ratio$$9$$ = $isRTL$$6_maxValue$$4_options$$43$$.min, $isRTL$$6_maxValue$$4_options$$43$$ = $isRTL$$6_maxValue$$4_options$$43$$.max;
  $value$$76$$ = window.Math.max(window.Math.min($value$$76$$, $isRTL$$6_maxValue$$4_options$$43$$), $minValue$$3_ratio$$9$$);
  $minValue$$3_ratio$$9$$ = ($value$$76$$ - $minValue$$3_ratio$$9$$) / ($isRTL$$6_maxValue$$4_options$$43$$ - $minValue$$3_ratio$$9$$);
  $isRTL$$6_maxValue$$4_options$$43$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$17$$.$_context$);
  return window.Math.PI * (90 - (($isRTL$$6_maxValue$$4_options$$43$$ ? 180 - $backgroundOptions$$3$$.startAngle : $backgroundOptions$$3$$.startAngle) - $minValue$$3_ratio$$9$$ * ($isRTL$$6_maxValue$$4_options$$43$$ ? -$backgroundOptions$$3$$.angleExtent : $backgroundOptions$$3$$.angleExtent))) / 180
};
D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$18$$, $bounds$$56$$) {
  var $anchorY_backgroundOptions$$4$$ = $gauge$$18$$.$__getOptions$().background, $anchorX$$ = $anchorY_backgroundOptions$$4$$._anchorX, $anchorY_backgroundOptions$$4$$ = $anchorY_backgroundOptions$$4$$._anchorY;
  return!(0,window.isNaN)($anchorX$$) && !(0,window.isNaN)($anchorY_backgroundOptions$$4$$) ? new D.$DvtPoint$$($anchorX$$, $anchorY_backgroundOptions$$4$$) : new D.$DvtPoint$$($bounds$$56$$.x + $bounds$$56$$.$w$ / 2, $bounds$$56$$.y + $bounds$$56$$.$h$ / 2)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$19$$, $bounds$$57$$) {
  var $radius$$5$$ = window.Math.min($bounds$$57$$.$w$, $bounds$$57$$.$h$) / 2;
  return $gauge$$19$$.$__getOptions$().background.indicatorLength * $radius$$5$$
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$20$$, $indicatorBounds$$1$$) {
  var $anchorY$$1_indicatorOptions$$1$$ = $gauge$$20$$.$__getOptions$().indicator, $anchorX$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorX, $anchorY$$1_indicatorOptions$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorY;
  return!(0,window.isNaN)($anchorX$$1$$) && !(0,window.isNaN)($anchorY$$1_indicatorOptions$$1$$) ? new D.$DvtPoint$$($anchorX$$1$$, $anchorY$$1_indicatorOptions$$1$$) : new D.$DvtPoint$$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$21$$, $bounds$$59$$, $indicatorBounds$$2$$) {
  return D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$21$$, $bounds$$59$$) / $indicatorBounds$$2$$.$h$
};
D.$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$22$$, $container$$43$$, $bounds$$60$$) {
  var $i$$290_options$$44$$ = $gauge$$22$$.$__getOptions$();
  if("on" == $i$$290_options$$44$$.metricLabel.rendered) {
    var $labelString$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$290_options$$44$$.value, $gauge$$22$$), $cx$$22_label$$8$$ = $bounds$$60$$.x + $bounds$$60$$.$w$ / 2, $cy$$23_longestLabel_size$$18$$ = $bounds$$60$$.y + $bounds$$60$$.$h$ / 2, $labelWidth$$1$$ = $bounds$$60$$.$w$, $labelHeight$$ = $bounds$$60$$.$h$, $maxString_metricLabelBounds$$ = $i$$290_options$$44$$.background._metricLabelBounds;
    $maxString_metricLabelBounds$$ && ($cx$$22_label$$8$$ = $maxString_metricLabelBounds$$.x + $maxString_metricLabelBounds$$.width / 2, $cy$$23_longestLabel_size$$18$$ = $maxString_metricLabelBounds$$.y + $maxString_metricLabelBounds$$.height / 2, $bounds$$60$$.$w$ = $maxString_metricLabelBounds$$.width, $bounds$$60$$.$h$ = $maxString_metricLabelBounds$$.height);
    $cx$$22_label$$8$$ = new D.$DvtOutputText$$($gauge$$22$$.$_context$, $labelString$$, $cx$$22_label$$8$$, $cy$$23_longestLabel_size$$18$$);
    !$i$$290_options$$44$$.metricLabel.style.$getStyle$("color") && $i$$290_options$$44$$.background._isDark && $i$$290_options$$44$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$22_label$$8$$.$setCSSStyle$($i$$290_options$$44$$.metricLabel.style);
    $cy$$23_longestLabel_size$$18$$ = (0,window.parseInt)($i$$290_options$$44$$.metricLabel.style.$getFontSize$());
    if(!$cy$$23_longestLabel_size$$18$$) {
      $cy$$23_longestLabel_size$$18$$ = window.Math.max(D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$290_options$$44$$.max, $gauge$$22$$).length, D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$290_options$$44$$.min, $gauge$$22$$).length, $labelString$$.length);
      $maxString_metricLabelBounds$$ = "";
      "percent" == $i$$290_options$$44$$.metricLabel.textType && ($cy$$23_longestLabel_size$$18$$ = window.Math.max(3, $labelString$$.length), $maxString_metricLabelBounds$$ += "%");
      for($i$$290_options$$44$$ = 0;$i$$290_options$$44$$ < $cy$$23_longestLabel_size$$18$$;$i$$290_options$$44$$++) {
        $maxString_metricLabelBounds$$ += "0"
      }
      $cx$$22_label$$8$$.$setTextString$($maxString_metricLabelBounds$$);
      $cy$$23_longestLabel_size$$18$$ = $cx$$22_label$$8$$.$getOptimalFontSize$($bounds$$60$$);
      $cx$$22_label$$8$$.$setTextString$($labelString$$);
      $cx$$22_label$$8$$.$setFontSize$($cy$$23_longestLabel_size$$18$$)
    }
    $cx$$22_label$$8$$.$alignCenter$();
    $cx$$22_label$$8$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($cx$$22_label$$8$$, $labelWidth$$1$$, $labelHeight$$, $container$$43$$) && $cx$$22_label$$8$$.$isTruncated$() && $gauge$$22$$.$__getEventManager$().$associate$($cx$$22_label$$8$$, new D.$DvtSimpleObjPeer$$($labelString$$))
  }
};
D.$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$23$$, $container$$44$$, $bounds$$61$$) {
  var $options$$45$$ = $gauge$$23$$.$__getOptions$(), $isRTL$$7$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$23$$.$_context$);
  if($options$$45$$.background.radius && $options$$45$$.background.majorTickCount) {
    var $radius$$6$$ = $options$$45$$.background._radius, $minValue$$4$$ = $options$$45$$.min, $maxValue$$5$$ = $options$$45$$.max, $majorTickCount$$ = $options$$45$$.background.majorTickCount, $fontSize$$8_longestLabel$$1$$ = 12, $labelBounds$$ = new D.$DvtRectangle$$($cx$$23_i$$291_labelValue$$, $angleRads$$6_cy$$24$$, $bounds$$61$$.$w$, $bounds$$61$$.$h$), $maxString$$1_style$$63_x$$181$$ = $options$$45$$.metricLabel.style.$getStyle$("font-size");
    $options$$45$$.background._tickLabelHeight && !$maxString$$1_style$$63_x$$181$$ && ($labelBounds$$.$h$ = $options$$45$$.background._tickLabelHeight);
    $options$$45$$.background._tickLabelWidth && !$maxString$$1_style$$63_x$$181$$ && ($labelBounds$$.$w$ = $options$$45$$.background._tickLabelWidth);
    if(!$maxString$$1_style$$63_x$$181$$) {
      var $label$$9_labelString$$1$$ = new D.$DvtOutputText$$($gauge$$23$$.$_context$, "", $cx$$23_i$$291_labelValue$$, $angleRads$$6_cy$$24$$), $fontSize$$8_longestLabel$$1$$ = window.Math.max(D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$45$$.max, $gauge$$23$$).length, D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$45$$.min, $gauge$$23$$).length), $maxString$$1_style$$63_x$$181$$ = "";
      "percent" == $options$$45$$.tickLabel.textType && ($fontSize$$8_longestLabel$$1$$ = window.Math.max(3, D.$DvtGaugeRenderer$$.$formatTickLabelValue$(100, $gauge$$23$$).length - 1), $maxString$$1_style$$63_x$$181$$ += "%");
      for(var $cx$$23_i$$291_labelValue$$ = 0;$cx$$23_i$$291_labelValue$$ < $fontSize$$8_longestLabel$$1$$;$cx$$23_i$$291_labelValue$$++) {
        $maxString$$1_style$$63_x$$181$$ += "0"
      }
      $label$$9_labelString$$1$$.$setTextString$($maxString$$1_style$$63_x$$181$$);
      $fontSize$$8_longestLabel$$1$$ = $label$$9_labelString$$1$$.$getOptimalFontSize$($labelBounds$$)
    }
    for($maxString$$1_style$$63_x$$181$$ = 0;$maxString$$1_style$$63_x$$181$$ < $majorTickCount$$;$maxString$$1_style$$63_x$$181$$++) {
      $cx$$23_i$$291_labelValue$$ = $minValue$$4$$ + window.Math.abs($maxValue$$5$$ - $minValue$$4$$) * $maxString$$1_style$$63_x$$181$$ / ($majorTickCount$$ - 1);
      $isRTL$$7$$ && ($cx$$23_i$$291_labelValue$$ = $minValue$$4$$ + window.Math.abs($maxValue$$5$$ - $minValue$$4$$) * ($majorTickCount$$ - 1 - $maxString$$1_style$$63_x$$181$$) / ($majorTickCount$$ - 1));
      var $label$$9_labelString$$1$$ = D.$DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$23_i$$291_labelValue$$, $gauge$$23$$), $angleRads$$6_cy$$24$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$23$$, $cx$$23_i$$291_labelValue$$), $anchor$$2$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$23$$, $bounds$$61$$), $cx$$23_i$$291_labelValue$$ = $anchor$$2$$.x + $radius$$6$$ * window.Math.cos($angleRads$$6_cy$$24$$ - window.Math.PI / 2), $angleRads$$6_cy$$24$$ = $anchor$$2$$.y + 
      $radius$$6$$ * window.Math.sin($angleRads$$6_cy$$24$$ - window.Math.PI / 2), $label$$9_labelString$$1$$ = new D.$DvtOutputText$$($gauge$$23$$.$_context$, $label$$9_labelString$$1$$, $cx$$23_i$$291_labelValue$$, $angleRads$$6_cy$$24$$);
      !$options$$45$$.tickLabel.style.$getStyle$("color") && $options$$45$$.background._isDark && $options$$45$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$9_labelString$$1$$.$setCSSStyle$($options$$45$$.tickLabel.style);
      $options$$45$$.tickLabel.style.$getStyle$("font-size") || $label$$9_labelString$$1$$.$setFontSize$($fontSize$$8_longestLabel$$1$$);
      $label$$9_labelString$$1$$.$alignCenter$();
      $label$$9_labelString$$1$$.$alignMiddle$();
      D.$DvtTextUtils$$.$fitText$($label$$9_labelString$$1$$, $labelBounds$$.$w$, $labelBounds$$.$h$, $container$$44$$) && $label$$9_labelString$$1$$.$isTruncated$() && $gauge$$23$$.$__getEventManager$().$associate$($label$$9_labelString$$1$$, new D.$DvtSimpleObjPeer$$($label$$9_labelString$$1$$.$_untruncatedTextString$))
    }
  }
};
D.$DvtDialGaugeIndicator$$ = function $$DvtDialGaugeIndicator$$$($context$$406$$) {
  this.Init($context$$406$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeIndicator$$, D.$DvtContainer$$, "DvtDialGaugeIndicator");
D.$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$7$$) {
  var $mat$$32$$ = new D.$DvtMatrix$$;
  $mat$$32$$.rotate($angleRads$$7$$);
  this.$setMatrix$($mat$$32$$);
  this.$_angleRads$ = $angleRads$$7$$
};
D.$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
D.$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$8$$) {
  $params$$8$$ && 1 == $params$$8$$.length && this.$setAngle$($params$$8$$[0])
};
D.$DvtRatingGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtRatingGauge", D.$DvtRatingGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGauge$$, D.$DvtGauge$$, "DvtRatingGauge");
D.$DvtRatingGauge$$.newInstance = function $$DvtRatingGauge$$$newInstance$($context$$10$$, $callback$$28$$, $callbackObj$$5$$) {
  var $gauge$$2$$ = new D.$DvtRatingGauge$$;
  $gauge$$2$$.Init($context$$10$$, $callback$$28$$, $callbackObj$$5$$);
  return $gauge$$2$$
};
D.$DvtRatingGauge$$.prototype.Init = function $$DvtRatingGauge$$$$Init$($context$$11$$, $callback$$29$$, $callbackObj$$6$$) {
  D.$DvtRatingGauge$$.$superclass$.Init.call(this, $context$$11$$, $callback$$29$$, $callbackObj$$6$$);
  this.$Defaults$ = new D.$DvtRatingGaugeDefaults$$
};
D.$DvtRatingGauge$$.prototype.$SetOptions$ = function $$DvtRatingGauge$$$$$SetOptions$$($options$$7$$) {
  D.$DvtRatingGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$7$$))
};
D.$DvtRatingGauge$$.prototype.$Render$ = function $$DvtRatingGauge$$$$$Render$$($container$$5$$, $width$$17$$, $height$$17$$) {
  var $outerGap$$ = this.$__getOptions$().__layout.outerGap, $maxValue$$1$$ = this.$Options$.max;
  this.$_size$ = window.Math.min($height$$17$$ - 2 * $outerGap$$, ($width$$17$$ - 2 * $outerGap$$) / $maxValue$$1$$);
  this.$_bounds$ = new D.$DvtRectangle$$((this.$Width$ - this.$_size$ * $maxValue$$1$$) / 2, $outerGap$$, this.$_size$ * $maxValue$$1$$, this.$Height$ - 2 * $outerGap$$);
  D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$5$$, $width$$17$$, $height$$17$$)
};
D.$DvtRatingGauge$$.prototype.$GetValueAt$ = function $$DvtRatingGauge$$$$$GetValueAt$$($x$$64$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$(this)) {
    $x$$64$$ = window.Math.max(window.Math.min($x$$64$$, this.$_bounds$.x + this.$_bounds$.$w$), this.$_bounds$.x);
    var $val$$23$$ = 0, $val$$23$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? window.Math.max((this.$_bounds$.x + this.$_bounds$.$w$ - $x$$64$$) / this.$_size$, this.$Options$.min) : window.Math.max(($x$$64$$ - this.$_bounds$.x) / this.$_size$, this.$Options$.min);
    return D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$23$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods___processHoverEnd$$ = function $$JSCompiler_StaticMethods___processHoverEnd$$$($JSCompiler_StaticMethods___processHoverEnd$self$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverEnd$self$$, $JSCompiler_StaticMethods___processHoverEnd$self$$.$Options$.value, "render")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeStart$ = function $$DvtRatingGauge$$$$$__processValueChangeStart$$($x$$67$$, $y$$46$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, this.$GetValueAt$($x$$67$$, $y$$46$$), "hover")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeMove$ = function $$DvtRatingGauge$$$$$__processValueChangeMove$$($x$$68$$, $y$$47$$) {
  var $value$$48$$ = this.$GetValueAt$($x$$68$$, $y$$47$$);
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, $value$$48$$, "hover");
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$Options$.value, $value$$48$$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeEnd$ = function $$DvtRatingGauge$$$$$__processValueChangeEnd$$($x$$69$$, $y$$48$$) {
  var $oldValue$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$69$$, $y$$48$$);
  this.$Options$.changed = D.$JSCompiler_alias_TRUE$$;
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$));
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods___updateClipRects$$ = function $$JSCompiler_StaticMethods___updateClipRects$$$($JSCompiler_StaticMethods___updateClipRects$self$$, $selContainer_unselContainer_value$$49$$, $proc_selClip_unselClip$$, $container$$6_hoverContainer$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$6_hoverContainer$$ || ($container$$6_hoverContainer$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods___updateClipRects$self$$.$_context$);
    $selContainer_unselContainer_value$$49$$ = window.Math.max(window.Math.min($selContainer_unselContainer_value$$49$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$17_hoverClip$$ = 0, $b$$1$$ = $selContainer_unselContainer_value$$49$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $c$$ = $selContainer_unselContainer_value$$49$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$;
    "render" == $proc_selClip_unselClip$$ && ($a$$17_hoverClip$$ = $selContainer_unselContainer_value$$49$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $b$$1$$ = 0);
    $isRTL$$ ? ($selContainer_unselContainer_value$$49$$ = $container$$6_hoverContainer$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), 
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer_unselContainer_value$$49$$, $proc_selClip_unselClip$$), $selContainer_unselContainer_value$$49$$ = $container$$6_hoverContainer$$.$getChildAt$(1), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - 
    $c$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$17_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer_unselContainer_value$$49$$, $proc_selClip_unselClip$$), $container$$6_hoverContainer$$ = $container$$6_hoverContainer$$.$getChildAt$(2), $a$$17_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$17_hoverClip$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$1$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$)) : ($selContainer_unselContainer_value$$49$$ = $container$$6_hoverContainer$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $c$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer_unselContainer_value$$49$$, $proc_selClip_unselClip$$), $selContainer_unselContainer_value$$49$$ = $container$$6_hoverContainer$$.$getChildAt$(1), $proc_selClip_unselClip$$ = 
    new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$17_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer_unselContainer_value$$49$$, $proc_selClip_unselClip$$), $container$$6_hoverContainer$$ = 
    $container$$6_hoverContainer$$.$getChildAt$(2), $a$$17_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$17_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$1$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$));
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($container$$6_hoverContainer$$, $a$$17_hoverClip$$)
  }
};
D.$DvtRatingGauge$$.prototype.$CreateEventHandler$ = function $$DvtRatingGauge$$$$$CreateEventHandler$$() {
  return new D.$DvtRatingGaugeEventManager$$(this)
};
D.$DvtRatingGaugeDefaults$$ = function $$DvtRatingGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtRatingGaugeDefaults$VERSION_1$$, alta:D.$DvtRatingGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtRatingGaugeDefaults");
D.$DvtRatingGaugeDefaults$SKIN_ALTA$$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:D.$JSCompiler_alias_NULL$$}, selectedState:{shape:"star", color:"#F8C15A", borderColor:D.$JSCompiler_alias_NULL$$}, hoverState:{shape:"star", color:"#007CC8", borderColor:D.$JSCompiler_alias_NULL$$}, changedState:{shape:"star", color:"#ED2C02", borderColor:D.$JSCompiler_alias_NULL$$}};
D.$DvtRatingGaugeDefaults$VERSION_1$$ = {min:0, max:5, unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, step:1};
D.$DvtRatingGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeRenderer$$, D.$DvtObj$$, "DvtRatingGaugeRenderer");
D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$ = ["circle", "diamond", "rectangle", "star"];
D.$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$45$$, $container$$58_tooltip$$19$$, $bounds$$74_width$$63$$, $height$$57_unselectedOptions$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$45$$)) {
    var $options$$61$$ = $gauge$$45$$.$__getOptions$(), $outerGap$$2_selectedOptions$$ = $options$$61$$.__layout.outerGap, $maxValue$$7_overlayRect$$ = $options$$61$$.max, $size$$21$$ = window.Math.min($height$$57_unselectedOptions$$ - 2 * $outerGap$$2_selectedOptions$$, ($bounds$$74_width$$63$$ - 2 * $outerGap$$2_selectedOptions$$) / $maxValue$$7_overlayRect$$);
    $bounds$$74_width$$63$$ = new D.$DvtRectangle$$(($bounds$$74_width$$63$$ - $size$$21$$ * $maxValue$$7_overlayRect$$) / 2, $outerGap$$2_selectedOptions$$, $size$$21$$ * $maxValue$$7_overlayRect$$, $height$$57_unselectedOptions$$ - 2 * $outerGap$$2_selectedOptions$$);
    $height$$57_unselectedOptions$$ = {value:0, type:$options$$61$$.unselectedState.shape, color:$options$$61$$.unselectedState.color, borderColor:$options$$61$$.unselectedState.borderColor, visualEffects:$options$$61$$.visualEffects};
    var $outerGap$$2_selectedOptions$$ = {value:0, type:$options$$61$$.selectedState.shape, color:$options$$61$$.selectedState.color, borderColor:$options$$61$$.selectedState.borderColor, visualEffects:$options$$61$$.visualEffects}, $changedOptions$$ = {value:0, type:$options$$61$$.changedState.shape, color:$options$$61$$.changedState.color, borderColor:$options$$61$$.changedState.borderColor, visualEffects:$options$$61$$.visualEffects}, $hoverOptions$$ = {value:0, type:$options$$61$$.hoverState.shape, 
    color:$options$$61$$.hoverState.color, borderColor:$options$$61$$.hoverState.borderColor, visualEffects:$options$$61$$.visualEffects};
    "dot" == $options$$61$$.unselectedState.shape && ($height$$57_unselectedOptions$$.type = "circle", $height$$57_unselectedOptions$$.visualEffects = "none", $height$$57_unselectedOptions$$.size = 0.05);
    var $unselContainer$$1$$ = new D.$DvtContainer$$($gauge$$45$$.$_context$);
    $container$$58_tooltip$$19$$.$addChild$($unselContainer$$1$$);
    var $selContainer$$1$$ = new D.$DvtContainer$$($gauge$$45$$.$_context$);
    $container$$58_tooltip$$19$$.$addChild$($selContainer$$1$$);
    var $hoverContainer$$1$$ = new D.$DvtContainer$$($gauge$$45$$.$_context$);
    $container$$58_tooltip$$19$$.$addChild$($hoverContainer$$1$$);
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($gauge$$45$$, $options$$61$$.value, "render", $container$$58_tooltip$$19$$);
    for(var $i$$293$$ = 0;$i$$293$$ < $maxValue$$7_overlayRect$$;$i$$293$$++) {
      if("none" != $options$$61$$.unselectedState.shape) {
        var $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$45$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
        $unselContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$74_width$$63$$.x + $i$$293$$ * $size$$21$$, $bounds$$74_width$$63$$.y + $bounds$$74_width$$63$$.$h$ / 2 - $size$$21$$ / 2);
        -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $height$$57_unselectedOptions$$.type) && ($height$$57_unselectedOptions$$.type = "star");
        $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($height$$57_unselectedOptions$$, $size$$21$$, $size$$21$$)
      }
      $options$$61$$.changed ? ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$45$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$74_width$$63$$.x + $i$$293$$ * $size$$21$$, $bounds$$74_width$$63$$.y + $bounds$$74_width$$63$$.$h$ / 
      2 - $size$$21$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedOptions$$.type) && ($changedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedOptions$$, $size$$21$$, $size$$21$$)) : ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$45$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), 
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$74_width$$63$$.x + $i$$293$$ * $size$$21$$, $bounds$$74_width$$63$$.y + $bounds$$74_width$$63$$.$h$ / 2 - $size$$21$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $outerGap$$2_selectedOptions$$.type) && ($outerGap$$2_selectedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($outerGap$$2_selectedOptions$$, $size$$21$$, 
      $size$$21$$));
      $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$45$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $hoverContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$74_width$$63$$.x + $i$$293$$ * $size$$21$$, $bounds$$74_width$$63$$.y + $bounds$$74_width$$63$$.$h$ / 2 - $size$$21$$ / 2);
      -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $hoverOptions$$.type) && ($hoverOptions$$.type = "star");
      $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($hoverOptions$$, $size$$21$$, $size$$21$$)
    }
    $maxValue$$7_overlayRect$$ = new D.$DvtRect$$($gauge$$45$$.$_context$, $bounds$$74_width$$63$$.x, $bounds$$74_width$$63$$.y, $bounds$$74_width$$63$$.$w$, $bounds$$74_width$$63$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($maxValue$$7_overlayRect$$);
    $container$$58_tooltip$$19$$.$addChild$($maxValue$$7_overlayRect$$);
    ($container$$58_tooltip$$19$$ = $options$$61$$.shortDesc) && $gauge$$45$$.$__getEventManager$().$associate$($maxValue$$7_overlayRect$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$58_tooltip$$19$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$45$$, $container$$58_tooltip$$19$$, new D.$DvtRectangle$$(0, 0, $bounds$$74_width$$63$$, $height$$57_unselectedOptions$$))
  }
};
D.$DvtRatingGaugeEventManager$$ = function $$DvtRatingGaugeEventManager$$$($gauge$$37$$) {
  this.Init($gauge$$37$$.$_context$, $gauge$$37$$.$__dispatchEvent$, $gauge$$37$$);
  this.$_gauge$ = $gauge$$37$$;
  this.$_bValueChanged$ = this.$isEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isIE$ = D.$DvtAgent$$.$isPlatformIE$();
  this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeEventManager$$, D.$DvtGaugeEventManager$$, "DvtRatingGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$288$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ && !this.$_bValueChanged$) {
    var $coords$$4$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$288$$.pageX, $event$$288$$.pageY), $JSCompiler_StaticMethods___processHoverStart$self$$inline_3165$$ = this.$_gauge$;
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverStart$self$$inline_3165$$, $JSCompiler_StaticMethods___processHoverStart$self$$inline_3165$$.$GetValueAt$($coords$$4$$.x, $coords$$4$$.y), "hover");
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$288$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$289$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    if(this.$_isIE$ && this.$_bValueChanged$ && this.$_stopAutoMouseOut$) {
      this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$;
      return
    }
    (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$289$$.pageX, $event$$289$$.pageY);
    (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$);
    this.$_bValueChanged$ = D.$JSCompiler_alias_FALSE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$289$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$6_event$$290$$) {
  this.$_bValueChanged$ || (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$6_event$$290$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$6_event$$290$$.pageX, $coords$$6_event$$290$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$6_event$$290$$.x, $coords$$6_event$$290$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$6_event$$290$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$7_event$$291$$) {
  this.$isEditing$ && (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$7_event$$291$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$7_event$$291$$.pageX, $coords$$7_event$$291$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$7_event$$291$$.x, $coords$$7_event$$291$$.y), (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$), this.$_bValueChanged$ = D.$JSCompiler_alias_TRUE$$, 
  this.$_isIE$ && (this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_TRUE$$)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$7_event$$291$$))
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
});