define(['./DvtToolkit', './DvtAxis'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtGauge", D.$DvtGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGauge$$, D.$DvtBaseComponent$$, "DvtGauge");
D.$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$303$$, $callback$$63$$, $callbackObj$$39$$, $bStaticRendering$$2$$) {
  D.$DvtGauge$$.$superclass$.Init.call(this, $context$$303$$, $callback$$63$$, $callbackObj$$39$$);
  this.$Bundle$ = new D.$DvtGaugeBundle$$;
  $bStaticRendering$$2$$ || (this.$_eventHandler$ = this.$CreateEventHandler$(), this.$_eventHandler$.$addListeners$(this), this.setId("gauge1000" + window.Math.floor(1E9 * window.Math.random())), this.$_editingOverlay$ = new D.$DvtRect$$($context$$303$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_editingOverlay$), this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$24$$) {
  this.$Options$ = $options$$24$$;
  D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_2232_options$$25$$, $oldShapes_width$$43$$, $container$$18_height$$36$$) {
  $bBlackBoxUpdate$$inline_2232_options$$25$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_2232_options$$25$$) : this.$Options$ || this.$SetOptions$(D.$JSCompiler_alias_NULL$$);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort(D.$DvtGauge$_thresholdComparator$$));
  !(0,window.isNaN)($oldShapes_width$$43$$) && !(0,window.isNaN)($container$$18_height$$36$$) && (this.$Width$ = $oldShapes_width$$43$$, this.$Height$ = $container$$18_height$$36$$);
  $oldShapes_width$$43$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$18_height$$36$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChildAt$($container$$18_height$$36$$, 0);
  this.$Render$($container$$18_height$$36$$, this.$Width$, this.$Height$);
  var $bData$$inline_2228_newObjs$$inline_9032$$ = $bBlackBoxUpdate$$inline_2232_options$$25$$ != D.$JSCompiler_alias_NULL$$, $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$ = this.$Width$, $context$$inline_2237_endState$$inline_9038_height$$inline_2231$$ = this.$Height$;
  this.$_animation$ && this.$_animation$.stop();
  $bBlackBoxUpdate$$inline_2232_options$$25$$ = D.$JSCompiler_alias_FALSE$$;
  var $animatedObjs$$inline_9034_animationOnDataChange$$inline_2233$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDataChange, $animationOnDisplay$$inline_2234_i$$inline_9035$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDisplay, $animationDuration$$inline_2235$$ = this.$__getOptions$().animationDuration / 1E3;
  if($animationOnDisplay$$inline_2234_i$$inline_9035$$ || $animatedObjs$$inline_9034_animationOnDataChange$$inline_2233$$) {
    $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$ = new D.$DvtRectangle$$(0, 0, $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$, $context$$inline_2237_endState$$inline_9038_height$$inline_2231$$);
    $context$$inline_2237_endState$$inline_9038_height$$inline_2231$$ = this.$_context$;
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_2234_i$$inline_9035$$) {
      this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$inline_2237_endState$$inline_9038_height$$inline_2231$$, $animationOnDisplay$$inline_2234_i$$inline_9035$$, $container$$18_height$$36$$, $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$, $animationDuration$$inline_2235$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_2234_i$$inline_9035$$, $animationDuration$$inline_2235$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_9034_animationOnDataChange$$inline_2233$$ && $bData$$inline_2228_newObjs$$inline_9032$$) {
        if(this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$inline_2237_endState$$inline_9038_height$$inline_2231$$, $animatedObjs$$inline_9034_animationOnDataChange$$inline_2233$$, this.$_container$, $container$$18_height$$36$$, $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$, $animationDuration$$inline_2235$$)) {
          $bBlackBoxUpdate$$inline_2232_options$$25$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          $bData$$inline_2228_newObjs$$inline_9032$$ = this.$__shapes$;
          $animatedObjs$$inline_9034_animationOnDataChange$$inline_2233$$ = [];
          for($animationOnDisplay$$inline_2234_i$$inline_9035$$ = 0;$animationOnDisplay$$inline_2234_i$$inline_9035$$ < $oldShapes_width$$43$$.length;$animationOnDisplay$$inline_2234_i$$inline_9035$$++) {
            var $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$ = $bData$$inline_2228_newObjs$$inline_9032$$[$animationOnDisplay$$inline_2234_i$$inline_9035$$], $animation$$inline_9039_startState$$inline_9037$$ = $oldShapes_width$$43$$[$animationOnDisplay$$inline_2234_i$$inline_9035$$].$getAnimationParams$(), $context$$inline_2237_endState$$inline_9038_height$$inline_2231$$ = $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$.$getAnimationParams$();
            $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$.$setAnimationParams$($animation$$inline_9039_startState$$inline_9037$$);
            $animation$$inline_9039_startState$$inline_9037$$ = new D.$DvtCustomAnimation$$(this.$_context$, $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$, $animationDuration$$inline_2235$$);
            (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$inline_9039_startState$$inline_9037$$.$_animator$, "typeNumberArray", $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$, $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$.$getAnimationParams$, $bounds$$inline_2236_newObj$$inline_9036_width$$inline_2230$$.$setAnimationParams$, $context$$inline_2237_endState$$inline_9038_height$$inline_2231$$);
            $animatedObjs$$inline_9034_animationOnDataChange$$inline_2233$$.push($animation$$inline_9039_startState$$inline_9037$$)
          }
          this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$inline_9034_animationOnDataChange$$inline_2233$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_2232_options$$25$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_2232_options$$25$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$18_height$$36$$
  }
  this.$_editingOverlay$ && (this.$Options$.readOnly === D.$JSCompiler_alias_FALSE$$ && D.$DvtAgent$$.$isTouchDevice$() ? (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$)) : (this.$_editingOverlay$.$setWidth$(0), this.$_editingOverlay$.$setHeight$(0)));
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($container$$18_height$$36$$, "img");
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$18_height$$36$$, "label", this.$Options$.shortDesc)
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
D.$JSCompiler_prototypeAlias$$.$__getBundle$ = (0,D.$JSCompiler_get$$)("$Bundle$");
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$146$$, $y$$119$$) {
  this.$_bEditing$ = D.$JSCompiler_alias_TRUE$$;
  this.$_oldValue$ = this.$Options$.value;
  this.$__processValueChangeMove$($x$$146$$, $y$$119$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$147$$, $y$$120$$) {
  this.$Options$.value = D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$147$$, $y$$120$$));
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$148$$, $y$$121$$) {
  this.$__processValueChangeMove$($x$$148$$, $y$$121$$);
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$CreateEventHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateEventHandler$$() {
  return new D.$DvtGaugeEventManager$$(this)
};
D.$DvtGauge$_thresholdComparator$$ = function $$DvtGauge$_thresholdComparator$$$($a$$32$$, $b$$24$$) {
  return $a$$32$$.max && $b$$24$$.max ? window.Math.abs($a$$32$$.max) - window.Math.abs($b$$24$$.max) : $a$$32$$.max ? -window.Infinity : window.Infinity
};
D.$DvtGaugeBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeBundle$$, D.$DvtBundle$$, "DvtGaugeBundle");
D.$DvtGaugeBundle$$._defaults = {EMPTY_TEXT:"No data to display"};
D.$DvtGaugeBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtGaugeBundle$$$$$GetDefaultStringForKey$$($key$$76$$) {
  return D.$DvtGaugeBundle$$._defaults[$key$$76$$]
};
D.$DvtGaugeBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtGaugeBundle");
D.$DvtGaugeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtGaugeDefaults");
D.$DvtGaugeDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtGaugeDefaults$VERSION_1$$ = {skin:"skyros", min:0, max:100, color:"#313842", borderColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:D.$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"off", scaling:"auto", style:new D.$DvtCSSStyle$$, textType:"number"}, __layout:{outerGap:1, labelGap:3}};
D.$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap$$1_ret$$65$$) {
  $defaultsMap$$1_ret$$65$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$65$$.skyros, D.$DvtGaugeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$65$$.alta, D.$DvtGaugeDefaults$SKIN_ALTA$$)};
  D.$DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$1_ret$$65$$)
};
D.$DvtGaugeDefaults$isSkyrosSkin$$ = function $$DvtGaugeDefaults$isSkyrosSkin$$$($gauge$$12$$) {
  return"skyros" == $gauge$$12$$.$__getOptions$().skin
};
D.$DvtGaugeDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDataUtils$$, D.$DvtObj$$, "DvtGaugeDataUtils");
D.$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge$$22_options$$151$$) {
  $gauge$$22_options$$151$$ = $gauge$$22_options$$151$$.$__getOptions$();
  return!$gauge$$22_options$$151$$ || (0,window.isNaN)($gauge$$22_options$$151$$.value) || $gauge$$22_options$$151$$.value === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$23_value$$94$$) {
  var $options$$152_thresholds$$3$$ = $gauge$$23_value$$94$$.$__getOptions$();
  $gauge$$23_value$$94$$ = $options$$152_thresholds$$3$$.value;
  $options$$152_thresholds$$3$$ = $options$$152_thresholds$$3$$.thresholds;
  if(!$options$$152_thresholds$$3$$) {
    return-1
  }
  for(var $i$$550$$ = 0;$i$$550$$ < $options$$152_thresholds$$3$$.length;$i$$550$$++) {
    if($gauge$$23_value$$94$$ <= $options$$152_thresholds$$3$$[$i$$550$$].max) {
      return $i$$550$$
    }
  }
  return $options$$152_thresholds$$3$$.length - 1
};
D.$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$24$$, $index$$107$$) {
  var $thresholds$$4$$ = $gauge$$24$$.$__getOptions$().thresholds;
  return $thresholds$$4$$ && 0 <= $index$$107$$ && $index$$107$$ < $thresholds$$4$$.length ? $thresholds$$4$$[$index$$107$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$25$$, $index$$108$$) {
  var $referenceObjects$$2$$ = $gauge$$25$$.$__getOptions$().referenceLines;
  return $referenceObjects$$2$$ && 0 <= $index$$108$$ && $index$$108$$ < $referenceObjects$$2$$.length ? $referenceObjects$$2$$[$index$$108$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeEventManager$$ = function $$DvtGaugeEventManager$$$($gauge$$55$$) {
  this.Init($gauge$$55$$.$_context$, $gauge$$55$$.$__dispatchEvent$, $gauge$$55$$);
  this.$_gauge$ = $gauge$$55$$;
  this.$isEditing$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeEventManager$$, D.$DvtEventManager$$, "DvtGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$13_event$$475$$) {
  this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$13_event$$475$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$13_event$$475$$.pageX, $coords$$13_event$$475$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$13_event$$475$$.x, $coords$$13_event$$475$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$13_event$$475$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$14_event$$476$$) {
  this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$14_event$$476$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$14_event$$476$$.pageX, $coords$$14_event$$476$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$14_event$$476$$.x, $coords$$14_event$$476$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$14_event$$476$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$477$$) {
  if(this.$isEditing$) {
    var $coords$$15$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$477$$.pageX, $event$$477$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$15$$.x, $coords$$15$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$isEditing$) && D.$DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$477$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$478$$) {
  if(D.$DvtTouchEvent$$.$TOUCHSTART$ === $event$$478$$.type && this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$;
    var $coords$$16$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$478$$.touches[0].pageX, $event$$478$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$16$$.x, $coords$$16$$.y);
    $event$$478$$.preventDefault()
  }else {
    D.$DvtTouchEvent$$.$TOUCHMOVE$ === $event$$478$$.type && this.$isEditing$ ? ($coords$$16$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$478$$.touches[0].pageX, $event$$478$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$16$$.x, $coords$$16$$.y), $event$$478$$.preventDefault()) : D.$DvtTouchEvent$$.$TOUCHEND$ === $event$$478$$.type && this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$16$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, 
    $event$$478$$.changedTouches[0].pageX, $event$$478$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$16$$.x, $coords$$16$$.y), $event$$478$$.preventDefault()) : D.$DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$478$$)
  }
};
D.$JSCompiler_StaticMethods_GetRelativePosition$$ = function $$JSCompiler_StaticMethods_GetRelativePosition$$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$15_stageCoords$$, $pageY$$15$$) {
  $pageX$$15_stageCoords$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativePosition$self$$.$_context$, $pageX$$15_stageCoords$$, $pageY$$15$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$15_stageCoords$$)
};
D.$DvtGaugeStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeStyleUtils$$, D.$DvtObj$$, "DvtGaugeStyleUtils");
D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$8$$) {
  var $options$$142$$ = $gauge$$8$$.$__getOptions$(), $thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$8$$), $threshold$$1$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$8$$, $thresholdIndex$$);
  return $threshold$$1$$ && (!($gauge$$8$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$8$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$142$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$8$$, $threshold$$1$$, $thresholdIndex$$) : $options$$142$$.color
};
D.$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$9$$) {
  var $options$$143$$ = $gauge$$9$$.$__getOptions$(), $threshold$$2$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$9$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$9$$));
  return $threshold$$2$$ && $threshold$$2$$.borderColor && (!($gauge$$9$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$9$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$143$$.thresholdDisplay) ? $threshold$$2$$.borderColor : $options$$143$$.borderColor
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$10$$) {
  var $options$$144$$ = $gauge$$10$$.$__getOptions$(), $thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$10$$), $threshold$$3$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$10$$, $thresholdIndex$$2$$);
  return $threshold$$3$$ && (!($gauge$$10$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$10$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" != $options$$144$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$10$$, $threshold$$3$$, $thresholdIndex$$2$$) : $options$$144$$.plotArea.color
};
D.$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$11$$, $threshold$$4$$, $thresholdIndex$$3$$) {
  if($threshold$$4$$.color) {
    return $threshold$$4$$.color
  }
  if($thresholdIndex$$3$$ < D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$.length) {
    return(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$11$$) ? D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$3$$] : D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$3$$]
  }
};
D.$DvtGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeRenderer$$, D.$DvtObj$$, "DvtGaugeRenderer");
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$ = 2;
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$ = 1;
D.$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$37$$, $container$$115$$, $availSpace$$80_label$$40$$) {
  var $options$$162$$ = $gauge$$37$$.$__getOptions$(), $emptyTextStr$$1$$ = $options$$162$$.emptyText;
  $emptyTextStr$$1$$ || ($emptyTextStr$$1$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($gauge$$37$$.$__getBundle$(), "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$));
  var $width$$139$$ = $availSpace$$80_label$$40$$.$w$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, $height$$119$$ = $availSpace$$80_label$$40$$.$h$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$;
  $availSpace$$80_label$$40$$ = new D.$DvtOutputText$$($gauge$$37$$.$_context$, $emptyTextStr$$1$$, $availSpace$$80_label$$40$$.x + $availSpace$$80_label$$40$$.$w$ / 2, $availSpace$$80_label$$40$$.y + $availSpace$$80_label$$40$$.$h$ / 2);
  $options$$162$$.metricLabel.style.$getStyle$("font-size") || $options$$162$$.metricLabel.style.$setStyle$("font-size", "13px");
  $availSpace$$80_label$$40$$.$setCSSStyle$($options$$162$$.metricLabel.style);
  $availSpace$$80_label$$40$$.$alignCenter$();
  $availSpace$$80_label$$40$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($availSpace$$80_label$$40$$, $width$$139$$, $height$$119$$, $container$$115$$) && $availSpace$$80_label$$40$$.$isTruncated$() && $gauge$$37$$.$__getEventManager$().$associate$($availSpace$$80_label$$40$$, new D.$DvtSimpleObjPeer$$($emptyTextStr$$1$$))
};
D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$95$$, $gauge$$38$$) {
  var $options$$163$$ = $gauge$$38$$.$__getOptions$(), $isPercent$$1$$ = "percent" == $options$$163$$.metricLabel.textType;
  $isPercent$$1$$ && ($value$$95$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$163$$, $options$$163$$.min, $value$$95$$));
  var $converter$$2$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$163$$.metricLabel.rendered && $options$$163$$.metricLabel.converter && ($converter$$2$$ = $options$$163$$.metricLabel.converter);
  var $scaling$$1$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$163$$.metricLabel.rendered && $options$$163$$.metricLabel.scaling && ($scaling$$1$$ = $options$$163$$.metricLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$95$$, $gauge$$38$$, $converter$$2$$, $scaling$$1$$, $options$$163$$.metricLabel.autoPrecision ? $options$$163$$.metricLabel.autoPrecision : "on", $isPercent$$1$$)
};
D.$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$96$$, $gauge$$39$$) {
  var $options$$164$$ = $gauge$$39$$.$__getOptions$(), $isPercent$$2$$ = "percent" == $options$$164$$.tickLabel.textType;
  $isPercent$$2$$ && ($value$$96$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$164$$, $options$$164$$.min, $value$$96$$));
  var $converter$$3$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$164$$.tickLabel.rendered && $options$$164$$.tickLabel.converter && ($converter$$3$$ = $options$$164$$.tickLabel.converter);
  var $scaling$$2$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$164$$.tickLabel.rendered && $options$$164$$.tickLabel.scaling && ($scaling$$2$$ = $options$$164$$.tickLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$96$$, $gauge$$39$$, $converter$$3$$, $scaling$$2$$, $options$$164$$.tickLabel.autoPrecision ? $options$$164$$.tickLabel.autoPrecision : "on", $isPercent$$2$$)
};
D.$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($value$$97$$, $gauge$$40_minValue$$11_output$$, $converter$$4$$, $formatter$$1_scaling$$3$$, $autoPrecision$$3$$, $isPercent$$3$$) {
  var $maxValue$$12_options$$165$$ = $gauge$$40_minValue$$11_output$$.$__getOptions$();
  $gauge$$40_minValue$$11_output$$ = $value$$97$$;
  $gauge$$40_minValue$$11_output$$ = $maxValue$$12_options$$165$$.min;
  var $maxValue$$12_options$$165$$ = $maxValue$$12_options$$165$$.max, $difference$$ = $maxValue$$12_options$$165$$ - $gauge$$40_minValue$$11_output$$, $increment$$1$$ = D.$JSCompiler_alias_NULL$$;
  (0,window.isNaN)($difference$$) || ($increment$$1$$ = $difference$$ / (1E3 > $difference$$ ? 100 : 1E3));
  $formatter$$1_scaling$$3$$ = new D.$DvtLinearScaleAxisValueFormatter$$($gauge$$40_minValue$$11_output$$, $maxValue$$12_options$$165$$, $increment$$1$$, $formatter$$1_scaling$$3$$, $autoPrecision$$3$$);
  if($converter$$4$$ && $converter$$4$$.getAsString) {
    $gauge$$40_minValue$$11_output$$ = $formatter$$1_scaling$$3$$.$format$($value$$97$$, $converter$$4$$)
  }else {
    if($converter$$4$$ && $converter$$4$$.format) {
      return $formatter$$1_scaling$$3$$.$format$($value$$97$$, $converter$$4$$)
    }
    $gauge$$40_minValue$$11_output$$ = $formatter$$1_scaling$$3$$.$format$($value$$97$$)
  }
  return $isPercent$$3$$ ? (0,window.String)($gauge$$40_minValue$$11_output$$) + "%" : $gauge$$40_minValue$$11_output$$
};
D.$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$166_percentFill$$1$$, $min$$18$$, $value$$98$$) {
  $options$$166_percentFill$$1$$ = ($value$$98$$ - $min$$18$$) / ($options$$166_percentFill$$1$$.max - $options$$166_percentFill$$1$$.min);
  return $options$$166_percentFill$$1$$ = window.Math.min(window.Math.max(0, $options$$166_percentFill$$1$$), 1)
};
D.$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$41$$, $container$$116$$, $bounds$$107$$, $color$$64$$) {
  var $i$$551_options$$167$$ = $gauge$$41$$.$__getOptions$();
  if("on" == $i$$551_options$$167$$.metricLabel.rendered) {
    var $labelString$$3$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$551_options$$167$$.value, $gauge$$41$$), $labelWidth$$2$$ = $bounds$$107$$.$w$, $labelHeight$$1$$ = $bounds$$107$$.$h$, $label$$41$$ = new D.$DvtOutputText$$($gauge$$41$$.$_context$, $labelString$$3$$, $bounds$$107$$.x + $bounds$$107$$.$w$ / 2, $bounds$$107$$.y + $bounds$$107$$.$h$ / 2);
    $label$$41$$.$setCSSStyle$($i$$551_options$$167$$.metricLabel.style);
    var $longestLabel$$1_size$$41$$ = $i$$551_options$$167$$.metricLabel.style.$getStyle$("font-size");
    if(!$i$$551_options$$167$$.metricLabel.style.$getStyle$("font-size")) {
      var $longestLabel$$1_size$$41$$ = window.Math.max($i$$551_options$$167$$.max.toString().length, $i$$551_options$$167$$.min.toString().length, $labelString$$3$$.length), $maxString$$1$$ = "";
      "percent" == $i$$551_options$$167$$.metricLabel.textType && ($longestLabel$$1_size$$41$$ = window.Math.max(3, $labelString$$3$$.length), $maxString$$1$$ += "%");
      for($i$$551_options$$167$$ = 0;$i$$551_options$$167$$ < $longestLabel$$1_size$$41$$;$i$$551_options$$167$$++) {
        $maxString$$1$$ += "0"
      }
      $label$$41$$.$setTextString$($maxString$$1$$);
      $longestLabel$$1_size$$41$$ = $label$$41$$.$getOptimalFontSize$($bounds$$107$$);
      $label$$41$$.$setTextString$($labelString$$3$$);
      $label$$41$$.$setFontSize$($longestLabel$$1_size$$41$$)
    }
    $label$$41$$.$alignMiddle$();
    $label$$41$$.$alignCenter$();
    $color$$64$$ != D.$JSCompiler_alias_NULL$$ && $label$$41$$.$setSolidFill$($color$$64$$);
    D.$DvtTextUtils$$.$fitText$($label$$41$$, $labelWidth$$2$$, $labelHeight$$1$$, $container$$116$$) && $label$$41$$.$isTruncated$() && $gauge$$41$$.$__getEventManager$().$associate$($label$$41$$, new D.$DvtSimpleObjPeer$$($labelString$$3$$))
  }
};
D.$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$168$$, $value$$99$$) {
  var $step$$1$$ = (0,window.Number)($options$$168$$.step);
  if($step$$1$$ && 0 < $step$$1$$) {
    var $stepNum$$ = ($value$$99$$ - $options$$168$$.min) / $step$$1$$;
    return 0.5 < $stepNum$$ ? window.Math.max(window.Math.min($options$$168$$.max, window.Math.ceil($stepNum$$) * $step$$1$$ + $options$$168$$.min), $options$$168$$.min) : $options$$168$$.min
  }
  return $value$$99$$
};
D.$DvtLedGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLedGauge", D.$DvtLedGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLedGauge$$, D.$DvtGauge$$, "DvtLedGauge");
D.$DvtLedGauge$newInstance$$ = function $$DvtLedGauge$newInstance$$$($context$$299$$, $callback$$59$$, $callbackObj$$35$$, $bStaticRendering$$) {
  var $gauge$$1$$ = new D.$DvtLedGauge$$;
  $gauge$$1$$.Init($context$$299$$, $callback$$59$$, $callbackObj$$35$$, $bStaticRendering$$);
  return $gauge$$1$$
};
D.$DvtLedGauge$$.newInstance = D.$DvtLedGauge$newInstance$$;
D.$DvtLedGauge$$.prototype.Init = function $$DvtLedGauge$$$$Init$($context$$300$$, $callback$$60$$, $callbackObj$$36$$, $bStaticRendering$$1$$) {
  D.$DvtLedGauge$$.$superclass$.Init.call(this, $context$$300$$, $callback$$60$$, $callbackObj$$36$$, $bStaticRendering$$1$$);
  this.$Defaults$ = new D.$DvtLedGaugeDefaults$$
};
D.$DvtLedGauge$$.prototype.$SetOptions$ = function $$DvtLedGauge$$$$$SetOptions$$($options$$22$$) {
  D.$DvtLedGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$22$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = D.$JSCompiler_alias_TRUE$$
};
D.$DvtLedGauge$$.prototype.$Render$ = function $$DvtLedGauge$$$$$Render$$($container$$16$$, $width$$41$$, $height$$34$$) {
  D.$DvtLedGaugeRenderer$$.$render$(this, $container$$16$$, $width$$41$$, $height$$34$$)
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
D.$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$26$$, $container$$104$$, $bounds$$96_width$$138$$, $height$$118_labelColor$$2$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$26$$)) {
    var $options$$154$$ = $gauge$$26$$.$__getOptions$(), $outerGap$$2$$ = $options$$154$$.__layout.outerGap, $size$$40$$ = $options$$154$$ && (0 <= $options$$154$$.size || 1 > $options$$154$$.size) ? window.Math.sqrt($options$$154$$.size) : 1;
    $bounds$$96_width$$138$$ = new D.$DvtRectangle$$($outerGap$$2$$ + ($bounds$$96_width$$138$$ - 2 * $outerGap$$2$$) * (1 - $size$$40$$) / 2, $outerGap$$2$$ + ($height$$118_labelColor$$2$$ - 2 * $outerGap$$2$$) * (1 - $size$$40$$) / 2, ($bounds$$96_width$$138$$ - 2 * $outerGap$$2$$) * $size$$40$$, ($height$$118_labelColor$$2$$ - 2 * $outerGap$$2$$) * $size$$40$$);
    D.$DvtLedGaugeRenderer$$.$_renderShape$($gauge$$26$$, $container$$104$$, $bounds$$96_width$$138$$);
    D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$26$$, $container$$104$$, $bounds$$96_width$$138$$);
    "on" == $options$$154$$.metricLabel.rendered && ($options$$154$$.metricLabel.style.$getStyle$("color") != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$26$$, $container$$104$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$26$$, $bounds$$96_width$$138$$)) : ($height$$118_labelColor$$2$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$26$$), $height$$118_labelColor$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($height$$118_labelColor$$2$$), $options$$154$$.metricLabel.style.$setStyle$("color", 
    $height$$118_labelColor$$2$$), D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$26$$, $container$$104$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$26$$, $bounds$$96_width$$138$$), $height$$118_labelColor$$2$$)))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$26$$, $container$$104$$, new D.$DvtRectangle$$(0, 0, $bounds$$96_width$$138$$, $height$$118_labelColor$$2$$))
  }
};
D.$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$27$$, $container$$105$$, $bounds$$97$$) {
  var $context$$573_shape$$91$$ = $gauge$$27$$.$_context$, $options$$155_tooltip$$42$$ = $gauge$$27$$.$__getOptions$(), $type$$185$$ = $options$$155_tooltip$$42$$.type, $color$$62$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$27$$), $borderColor$$47$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$27$$), $cmds$$21_cx$$38_rotation$$7$$ = $bounds$$97$$.x + $bounds$$97$$.$w$ / 2, $cy$$39_scale$$47$$ = $bounds$$97$$.y + $bounds$$97$$.$h$ / 2, $r$$74$$ = window.Math.min($bounds$$97$$.$w$, $bounds$$97$$.$h$) / 
  2, $arColors$$26_isSkyros$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$27$$);
  "rectangle" == $type$$185$$ ? $context$$573_shape$$91$$ = new D.$DvtRect$$($context$$573_shape$$91$$, $bounds$$97$$.x, $bounds$$97$$.y, $bounds$$97$$.$w$, $bounds$$97$$.$h$) : "diamond" == $type$$185$$ ? $context$$573_shape$$91$$ = new D.$DvtPolygon$$($context$$573_shape$$91$$, [$cmds$$21_cx$$38_rotation$$7$$ - $r$$74$$, $cy$$39_scale$$47$$, $cmds$$21_cx$$38_rotation$$7$$, $cy$$39_scale$$47$$ - $r$$74$$, $cmds$$21_cx$$38_rotation$$7$$ + $r$$74$$, $cy$$39_scale$$47$$, $cmds$$21_cx$$38_rotation$$7$$, 
  $cy$$39_scale$$47$$ + $r$$74$$]) : "triangle" == $type$$185$$ ? ($cmds$$21_cx$$38_rotation$$7$$ = $arColors$$26_isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$, $context$$573_shape$$91$$ = new D.$DvtPath$$($context$$573_shape$$91$$, $cmds$$21_cx$$38_rotation$$7$$)) : "star" == $type$$185$$ ? ($cmds$$21_cx$$38_rotation$$7$$ = $arColors$$26_isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$, 
  $cy$$39_scale$$47$$ = window.Math.min($bounds$$97$$.$w$ / 100, $bounds$$97$$.$h$ / 100), $cmds$$21_cx$$38_rotation$$7$$ = D.$DvtPolygonUtils$$.scale($cmds$$21_cx$$38_rotation$$7$$, $cy$$39_scale$$47$$, $cy$$39_scale$$47$$), $cmds$$21_cx$$38_rotation$$7$$ = D.$DvtPolygonUtils$$.translate($cmds$$21_cx$$38_rotation$$7$$, $bounds$$97$$.x + $bounds$$97$$.$w$ / 2, $bounds$$97$$.y + $bounds$$97$$.$h$ / 2), $context$$573_shape$$91$$ = new D.$DvtPolygon$$($context$$573_shape$$91$$, $cmds$$21_cx$$38_rotation$$7$$)) : 
  "arrow" == $type$$185$$ ? ($cmds$$21_cx$$38_rotation$$7$$ = $arColors$$26_isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$, $context$$573_shape$$91$$ = new D.$DvtPath$$($context$$573_shape$$91$$, $cmds$$21_cx$$38_rotation$$7$$)) : $context$$573_shape$$91$$ = new D.$DvtCircle$$($context$$573_shape$$91$$, $cmds$$21_cx$$38_rotation$$7$$, $cy$$39_scale$$47$$, $r$$74$$);
  $arColors$$26_isSkyros$$ || "none" == $options$$155_tooltip$$42$$.visualEffects ? $context$$573_shape$$91$$.$setSolidFill$($color$$62$$) : ($arColors$$26_isSkyros$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$62$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$62$$, -0.04, -0.05)], $cmds$$21_cx$$38_rotation$$7$$ = $options$$155_tooltip$$42$$ && 0 == $options$$155_tooltip$$42$$.rotation % 90 ? $options$$155_tooltip$$42$$.rotation : 0, $context$$573_shape$$91$$.$setFill$(new D.$DvtLinearGradientFill$$("arrow" == 
  $type$$185$$ || "star" == $type$$185$$ || "triangle" == $type$$185$$ ? 360 - $cmds$$21_cx$$38_rotation$$7$$ : 270, $arColors$$26_isSkyros$$, [1, 1], [0, 1])));
  $borderColor$$47$$ && $context$$573_shape$$91$$.$setSolidStroke$($borderColor$$47$$);
  ($options$$155_tooltip$$42$$ = $options$$155_tooltip$$42$$.shortDesc) && $gauge$$27$$.$__getEventManager$().$associate$($context$$573_shape$$91$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$155_tooltip$$42$$, $color$$62$$));
  $context$$573_shape$$91$$ = D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$($gauge$$27$$, $container$$105$$, $context$$573_shape$$91$$, $bounds$$97$$);
  $container$$105$$.$addChild$($context$$573_shape$$91$$)
};
D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$ = function $$DvtLedGaugeRenderer$$$$_scaleAndRotate$$($gauge$$28_scaleGroup_tx$$13$$, $container$$106_stroke$$83$$, $shape$$92$$, $bounds$$98_ty$$13$$) {
  var $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$ = $gauge$$28_scaleGroup_tx$$13$$.$__getOptions$(), $dims$$32_rotationMatrix$$2_s$$87_type$$186$$ = $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$.type;
  if("triangle" == $dims$$32_rotationMatrix$$2_s$$87_type$$186$$ || "arrow" == $dims$$32_rotationMatrix$$2_s$$87_type$$186$$) {
    var $translateGroup$$ = new D.$DvtContainer$$($gauge$$28_scaleGroup_tx$$13$$.$_context$);
    $gauge$$28_scaleGroup_tx$$13$$ = new D.$DvtContainer$$($gauge$$28_scaleGroup_tx$$13$$.$_context$);
    $container$$106_stroke$$83$$.$addChild$($translateGroup$$);
    $translateGroup$$.$addChild$($gauge$$28_scaleGroup_tx$$13$$);
    $gauge$$28_scaleGroup_tx$$13$$.$addChild$($shape$$92$$);
    $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$ = $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$ && 0 == $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$.rotation % 90 ? $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$.rotation : 0;
    $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$ = "star" == $dims$$32_rotationMatrix$$2_s$$87_type$$186$$ ? 0 : $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$;
    $dims$$32_rotationMatrix$$2_s$$87_type$$186$$ = new D.$DvtMatrix$$;
    $dims$$32_rotationMatrix$$2_s$$87_type$$186$$.rotate(window.Math.PI * (90 - $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$) / 180);
    $shape$$92$$.$setMatrix$($dims$$32_rotationMatrix$$2_s$$87_type$$186$$);
    $dims$$32_rotationMatrix$$2_s$$87_type$$186$$ = $gauge$$28_scaleGroup_tx$$13$$.$getDimensions$();
    $dims$$32_rotationMatrix$$2_s$$87_type$$186$$ = window.Math.min($bounds$$98_ty$$13$$.$w$ / $dims$$32_rotationMatrix$$2_s$$87_type$$186$$.$w$, $bounds$$98_ty$$13$$.$h$ / $dims$$32_rotationMatrix$$2_s$$87_type$$186$$.$h$);
    $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$ = new D.$DvtMatrix$$;
    $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$.scale($dims$$32_rotationMatrix$$2_s$$87_type$$186$$, $dims$$32_rotationMatrix$$2_s$$87_type$$186$$);
    $gauge$$28_scaleGroup_tx$$13$$.$setMatrix$($groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$);
    $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$ = $translateGroup$$.$getDimensions$();
    $gauge$$28_scaleGroup_tx$$13$$ = $bounds$$98_ty$$13$$.x + $bounds$$98_ty$$13$$.$w$ / 2 - ($groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$.x + $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$.$w$ / 2);
    $bounds$$98_ty$$13$$ = $bounds$$98_ty$$13$$.y + $bounds$$98_ty$$13$$.$h$ / 2 - ($groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$.y + $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$.$h$ / 2);
    $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$ = new D.$DvtMatrix$$;
    $groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$.translate($gauge$$28_scaleGroup_tx$$13$$, $bounds$$98_ty$$13$$);
    $translateGroup$$.$setMatrix$($groupDims_matrix$$11_options$$156_rotation$$8_scaleMatrix$$);
    $container$$106_stroke$$83$$.removeChild($translateGroup$$);
    if($container$$106_stroke$$83$$ = $shape$$92$$.$getStroke$()) {
      $container$$106_stroke$$83$$ = $container$$106_stroke$$83$$.clone(), $container$$106_stroke$$83$$.$setWidth$($container$$106_stroke$$83$$.getWidth() / $dims$$32_rotationMatrix$$2_s$$87_type$$186$$), $shape$$92$$.$setStroke$($container$$106_stroke$$83$$)
    }
    return $translateGroup$$
  }
  return $shape$$92$$
};
D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$29$$, $container$$107$$, $bounds$$99$$) {
  var $options$$157$$ = $gauge$$29$$.$__getOptions$(), $type$$187$$ = $options$$157$$.type;
  "none" != $options$$157$$.visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$29$$) && ("rectangle" == $type$$187$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$29$$, $container$$107$$, $bounds$$99$$) : "diamond" == $type$$187$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$29$$, $container$$107$$, $bounds$$99$$) : "triangle" == $type$$187$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$29$$, $container$$107$$, $bounds$$99$$) : "star" == $type$$187$$ ? 
  D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$($gauge$$29$$, $container$$107$$, $bounds$$99$$) : "arrow" == $type$$187$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$29$$, $container$$107$$, $bounds$$99$$) : D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$29$$, $container$$107$$, $bounds$$99$$))
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$30_overlay$$2$$, $container$$108_gradient$$9$$, $bounds$$100_overlayBounds$$) {
  var $dx$$22$$ = 0.05 * $bounds$$100_overlayBounds$$.$w$, $dy$$25$$ = 0.05 * $bounds$$100_overlayBounds$$.$h$;
  $bounds$$100_overlayBounds$$ = new D.$DvtRectangle$$($bounds$$100_overlayBounds$$.x + $dx$$22$$, $bounds$$100_overlayBounds$$.y + $dy$$25$$, $bounds$$100_overlayBounds$$.$w$ - 2 * $dx$$22$$, $bounds$$100_overlayBounds$$.$h$ - 2 * $dy$$25$$);
  $gauge$$30_overlay$$2$$ = new D.$DvtRect$$($gauge$$30_overlay$$2$$.$_context$, $bounds$$100_overlayBounds$$.x, $bounds$$100_overlayBounds$$.y, $bounds$$100_overlayBounds$$.$w$, $bounds$$100_overlayBounds$$.$h$);
  $gauge$$30_overlay$$2$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$108_gradient$$9$$.$addChild$($gauge$$30_overlay$$2$$);
  $container$$108_gradient$$9$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$30_overlay$$2$$.$setFill$($container$$108_gradient$$9$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$31_overlay$$3$$, $container$$109_gradient$$10$$, $bounds$$101_cx$$39$$) {
  var $cy$$40_dx$$23$$ = 0.05 * $bounds$$101_cx$$39$$.$w$, $dy$$26_overlayBounds$$1_r$$75$$ = 0.05 * $bounds$$101_cx$$39$$.$h$, $dy$$26_overlayBounds$$1_r$$75$$ = new D.$DvtRectangle$$($bounds$$101_cx$$39$$.x + $cy$$40_dx$$23$$, $bounds$$101_cx$$39$$.y + $dy$$26_overlayBounds$$1_r$$75$$, $bounds$$101_cx$$39$$.$w$ - 2 * $cy$$40_dx$$23$$, $bounds$$101_cx$$39$$.$h$ - 2 * $dy$$26_overlayBounds$$1_r$$75$$);
  $bounds$$101_cx$$39$$ = $dy$$26_overlayBounds$$1_r$$75$$.x + $dy$$26_overlayBounds$$1_r$$75$$.$w$ / 2;
  $cy$$40_dx$$23$$ = $dy$$26_overlayBounds$$1_r$$75$$.y + $dy$$26_overlayBounds$$1_r$$75$$.$h$ / 2;
  $dy$$26_overlayBounds$$1_r$$75$$ = window.Math.min($dy$$26_overlayBounds$$1_r$$75$$.$w$, $dy$$26_overlayBounds$$1_r$$75$$.$h$) / 2;
  $gauge$$31_overlay$$3$$ = new D.$DvtPolygon$$($gauge$$31_overlay$$3$$.$_context$, [$bounds$$101_cx$$39$$ - $dy$$26_overlayBounds$$1_r$$75$$, $cy$$40_dx$$23$$, $bounds$$101_cx$$39$$, $cy$$40_dx$$23$$ - $dy$$26_overlayBounds$$1_r$$75$$, $bounds$$101_cx$$39$$ + $dy$$26_overlayBounds$$1_r$$75$$, $cy$$40_dx$$23$$, $bounds$$101_cx$$39$$, $cy$$40_dx$$23$$ + $dy$$26_overlayBounds$$1_r$$75$$]);
  $gauge$$31_overlay$$3$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$109_gradient$$10$$.$addChild$($gauge$$31_overlay$$3$$);
  $container$$109_gradient$$10$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$31_overlay$$3$$.$setFill$($container$$109_gradient$$10$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$32$$, $container$$110$$, $bounds$$102_overlayBounds$$2$$) {
  var $dx$$24_overlay$$4$$ = 0.05 * $bounds$$102_overlayBounds$$2$$.$w$, $dy$$27_gradient$$11_options$$158$$ = 0.05 * $bounds$$102_overlayBounds$$2$$.$h$;
  $bounds$$102_overlayBounds$$2$$ = new D.$DvtRectangle$$($bounds$$102_overlayBounds$$2$$.x + $dx$$24_overlay$$4$$, $bounds$$102_overlayBounds$$2$$.y + $dy$$27_gradient$$11_options$$158$$, $bounds$$102_overlayBounds$$2$$.$w$ - 2 * $dx$$24_overlay$$4$$, $bounds$$102_overlayBounds$$2$$.$h$ - 2 * $dy$$27_gradient$$11_options$$158$$);
  $dx$$24_overlay$$4$$ = new D.$DvtPath$$($gauge$$32$$.$_context$, D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$);
  $dy$$27_gradient$$11_options$$158$$ = $gauge$$32$$.$__getOptions$();
  $dy$$27_gradient$$11_options$$158$$ = new D.$DvtLinearGradientFill$$(360 - ($dy$$27_gradient$$11_options$$158$$ && 0 == $dy$$27_gradient$$11_options$$158$$.rotation % 90 ? $dy$$27_gradient$$11_options$$158$$.rotation : 0), ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $dx$$24_overlay$$4$$.$setFill$($dy$$27_gradient$$11_options$$158$$);
  $dx$$24_overlay$$4$$ = D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$($gauge$$32$$, $container$$110$$, $dx$$24_overlay$$4$$, $bounds$$102_overlayBounds$$2$$);
  $dx$$24_overlay$$4$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$110$$.$addChild$($dx$$24_overlay$$4$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$33$$, $container$$111$$, $bounds$$103_overlayBounds$$3$$) {
  var $dx$$25_overlay$$5$$ = 0.05 * $bounds$$103_overlayBounds$$3$$.$w$, $dy$$28_gradient$$12_options$$159$$ = 0.05 * $bounds$$103_overlayBounds$$3$$.$h$;
  $bounds$$103_overlayBounds$$3$$ = new D.$DvtRectangle$$($bounds$$103_overlayBounds$$3$$.x + $dx$$25_overlay$$5$$, $bounds$$103_overlayBounds$$3$$.y + $dy$$28_gradient$$12_options$$159$$, $bounds$$103_overlayBounds$$3$$.$w$ - 2 * $dx$$25_overlay$$5$$, $bounds$$103_overlayBounds$$3$$.$h$ - 2 * $dy$$28_gradient$$12_options$$159$$);
  $dx$$25_overlay$$5$$ = new D.$DvtPath$$($gauge$$33$$.$_context$, D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$);
  $dy$$28_gradient$$12_options$$159$$ = $gauge$$33$$.$__getOptions$();
  $dy$$28_gradient$$12_options$$159$$ = new D.$DvtLinearGradientFill$$(360 - ($dy$$28_gradient$$12_options$$159$$ && 0 == $dy$$28_gradient$$12_options$$159$$.rotation % 90 ? $dy$$28_gradient$$12_options$$159$$.rotation : 0), ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $dx$$25_overlay$$5$$.$setFill$($dy$$28_gradient$$12_options$$159$$);
  $dx$$25_overlay$$5$$ = D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$($gauge$$33$$, $container$$111$$, $dx$$25_overlay$$5$$, $bounds$$103_overlayBounds$$3$$);
  $dx$$25_overlay$$5$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$111$$.$addChild$($dx$$25_overlay$$5$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayStar$$($gauge$$34$$, $container$$112$$, $bounds$$104_overlayBounds$$4$$) {
  var $dx$$26_overlay$$6$$ = 0.05 * $bounds$$104_overlayBounds$$4$$.$w$, $dy$$29_gradient$$13_gradientRotation$$3_options$$160$$ = 0.05 * $bounds$$104_overlayBounds$$4$$.$h$;
  $bounds$$104_overlayBounds$$4$$ = new D.$DvtRectangle$$($bounds$$104_overlayBounds$$4$$.x + $dx$$26_overlay$$6$$, $bounds$$104_overlayBounds$$4$$.y + $dy$$29_gradient$$13_gradientRotation$$3_options$$160$$, $bounds$$104_overlayBounds$$4$$.$w$ - 2 * $dx$$26_overlay$$6$$, $bounds$$104_overlayBounds$$4$$.$h$ - 2 * $dy$$29_gradient$$13_gradientRotation$$3_options$$160$$);
  var $dx$$26_overlay$$6$$ = new D.$DvtPath$$($gauge$$34$$.$_context$, D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$), $dy$$29_gradient$$13_gradientRotation$$3_options$$160$$ = $gauge$$34$$.$__getOptions$(), $dy$$29_gradient$$13_gradientRotation$$3_options$$160$$ = 360 - ($dy$$29_gradient$$13_gradientRotation$$3_options$$160$$ && 0 == $dy$$29_gradient$$13_gradientRotation$$3_options$$160$$.rotation % 90 ? $dy$$29_gradient$$13_gradientRotation$$3_options$$160$$.rotation : 0), $arColors$$31_color$$63$$ = 
  D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$34$$), $arColors$$31_color$$63$$ = [D.$DvtColorUtils$$.$getDarker$($arColors$$31_color$$63$$, 0.9), $arColors$$31_color$$63$$, D.$DvtColorUtils$$.$getBrighter$($arColors$$31_color$$63$$)], $dy$$29_gradient$$13_gradientRotation$$3_options$$160$$ = new D.$DvtLinearGradientFill$$($dy$$29_gradient$$13_gradientRotation$$3_options$$160$$, $arColors$$31_color$$63$$, [1, 1, 1], [0.1, 0.4, 0.8]);
  $dx$$26_overlay$$6$$.$setFill$($dy$$29_gradient$$13_gradientRotation$$3_options$$160$$);
  $dx$$26_overlay$$6$$ = D.$DvtLedGaugeRenderer$$.$_scaleAndRotate$($gauge$$34$$, $container$$112$$, $dx$$26_overlay$$6$$, $bounds$$104_overlayBounds$$4$$);
  $dx$$26_overlay$$6$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$112$$.$addChild$($dx$$26_overlay$$6$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$35_highlight$$, $container$$113_highlightGradient$$, $bounds$$105_gradientBounds$$) {
  var $cx$$40_dx$$27$$ = 0.05 * $bounds$$105_gradientBounds$$.$w$, $cy$$41_dy$$30$$ = 0.05 * $bounds$$105_gradientBounds$$.$h$;
  $bounds$$105_gradientBounds$$ = new D.$DvtRectangle$$($bounds$$105_gradientBounds$$.x + $cx$$40_dx$$27$$, $bounds$$105_gradientBounds$$.y + $cy$$41_dy$$30$$, $bounds$$105_gradientBounds$$.$w$ - 2 * $cx$$40_dx$$27$$, $bounds$$105_gradientBounds$$.$h$ - 2 * $cy$$41_dy$$30$$);
  var $cx$$40_dx$$27$$ = $bounds$$105_gradientBounds$$.x + $bounds$$105_gradientBounds$$.$w$ / 2, $cy$$41_dy$$30$$ = $bounds$$105_gradientBounds$$.y + $bounds$$105_gradientBounds$$.$h$ / 2, $radius$$14_ry$$30$$ = window.Math.min($bounds$$105_gradientBounds$$.$w$, $bounds$$105_gradientBounds$$.$h$) / 2, $overlay$$7_rx$$30$$ = new D.$DvtCircle$$($gauge$$35_highlight$$.$_context$, $cx$$40_dx$$27$$, $cy$$41_dy$$30$$, $radius$$14_ry$$30$$);
  $overlay$$7_rx$$30$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$113_highlightGradient$$.$addChild$($overlay$$7_rx$$30$$);
  var $gradient$$14$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$40_dx$$27$$, $cy$$41_dy$$30$$ - 0.6 * $radius$$14_ry$$30$$, 1.5 * $radius$$14_ry$$30$$, [$bounds$$105_gradientBounds$$.x, $bounds$$105_gradientBounds$$.y, $bounds$$105_gradientBounds$$.$w$, $bounds$$105_gradientBounds$$.$h$]);
  $overlay$$7_rx$$30$$.$setFill$($gradient$$14$$);
  $overlay$$7_rx$$30$$ = 0.6 * $radius$$14_ry$$30$$;
  $radius$$14_ry$$30$$ *= 0.4;
  $cy$$41_dy$$30$$ -= 0.3 * $radius$$14_ry$$30$$;
  $gauge$$35_highlight$$ = new D.$DvtOval$$($gauge$$35_highlight$$.$_context$, $cx$$40_dx$$27$$, $cy$$41_dy$$30$$ - $radius$$14_ry$$30$$, $overlay$$7_rx$$30$$, $radius$$14_ry$$30$$);
  $gauge$$35_highlight$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$113_highlightGradient$$.$addChild$($gauge$$35_highlight$$);
  $container$$113_highlightGradient$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$40_dx$$27$$, $cy$$41_dy$$30$$, $overlay$$7_rx$$30$$, [$bounds$$105_gradientBounds$$.x, $bounds$$105_gradientBounds$$.y, $bounds$$105_gradientBounds$$.$w$, $bounds$$105_gradientBounds$$.$h$]);
  $gauge$$35_highlight$$.$setFill$($container$$113_highlightGradient$$)
};
D.$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$36$$, $bounds$$106$$) {
  var $options$$161_rotation$$12$$ = $gauge$$36$$.$__getOptions$(), $type$$188$$ = $options$$161_rotation$$12$$.type, $options$$161_rotation$$12$$ = 0 == $options$$161_rotation$$12$$.rotation % 90 ? $options$$161_rotation$$12$$.rotation : 0, $minDim$$1$$ = window.Math.min($bounds$$106$$.$w$, $bounds$$106$$.$h$), $newX$$11$$ = $bounds$$106$$.x + $bounds$$106$$.$w$ / 2 - $minDim$$1$$ / 2, $newY$$11$$ = $bounds$$106$$.y + $bounds$$106$$.$h$ / 2 - $minDim$$1$$ / 2, $newWidth$$3$$ = $minDim$$1$$, $newHeight$$ = 
  $minDim$$1$$;
  "triangle" == $type$$188$$ ? 0 == $options$$161_rotation$$12$$ ? ($newX$$11$$ += 0.05 * $minDim$$1$$, $newY$$11$$ += 0.2 * $minDim$$1$$, $newWidth$$3$$ -= 0.3 * $minDim$$1$$, $newHeight$$ -= 0.4 * $minDim$$1$$) : 90 == $options$$161_rotation$$12$$ ? ($newX$$11$$ += 0.2 * $minDim$$1$$, $newY$$11$$ += 0.25 * $minDim$$1$$, $newWidth$$3$$ -= 0.4 * $minDim$$1$$, $newHeight$$ -= 0.3 * $minDim$$1$$) : 180 == $options$$161_rotation$$12$$ ? ($newX$$11$$ += 0.25 * $minDim$$1$$, $newY$$11$$ += 0.2 * $minDim$$1$$, 
  $newWidth$$3$$ -= 0.3 * $minDim$$1$$, $newHeight$$ -= 0.4 * $minDim$$1$$) : 270 == $options$$161_rotation$$12$$ && ($newX$$11$$ += 0.2 * $minDim$$1$$, $newY$$11$$ += 0.05 * $minDim$$1$$, $newWidth$$3$$ -= 0.4 * $minDim$$1$$, $newHeight$$ -= 0.3 * $minDim$$1$$) : "arrow" == $type$$188$$ ? 0 == $options$$161_rotation$$12$$ ? ($newX$$11$$ += 0.05 * $minDim$$1$$, $newY$$11$$ += 0.2 * $minDim$$1$$, $newWidth$$3$$ -= 0.28 * $minDim$$1$$, $newHeight$$ -= 0.4 * $minDim$$1$$) : 90 == $options$$161_rotation$$12$$ ? 
  ($newX$$11$$ += 0.2 * $minDim$$1$$, $newY$$11$$ += 0.2 * $minDim$$1$$, $newWidth$$3$$ -= 0.4 * $minDim$$1$$, $newHeight$$ -= 0.4 * $minDim$$1$$) : 180 == $options$$161_rotation$$12$$ ? ($newX$$11$$ += 0.23 * $minDim$$1$$, $newY$$11$$ += 0.2 * $minDim$$1$$, $newWidth$$3$$ -= 0.28 * $minDim$$1$$, $newHeight$$ -= 0.4 * $minDim$$1$$) : 270 == $options$$161_rotation$$12$$ && ($newX$$11$$ += 0.2 * $minDim$$1$$, $newY$$11$$ += 0.2 * $minDim$$1$$, $newWidth$$3$$ -= 0.4 * $minDim$$1$$, $newHeight$$ -= 0.4 * 
  $minDim$$1$$) : "star" == $type$$188$$ ? ($newX$$11$$ += 0.25 * $minDim$$1$$, $newY$$11$$ += 0.25 * $minDim$$1$$, $newWidth$$3$$ -= 0.5 * $minDim$$1$$, $newHeight$$ -= 0.4 * $minDim$$1$$) : "diamond" == $type$$188$$ ? ($newX$$11$$ += 0.15 * $minDim$$1$$, $newY$$11$$ += 0.15 * $minDim$$1$$, $newWidth$$3$$ -= 0.3 * $minDim$$1$$, $newHeight$$ -= 0.3 * $minDim$$1$$) : "rectangle" == $type$$188$$ ? ($newX$$11$$ += 0.1 * $minDim$$1$$, $newY$$11$$ += 0.1 * $minDim$$1$$, $newWidth$$3$$ -= 0.2 * $minDim$$1$$, 
  $newHeight$$ -= 0.2 * $minDim$$1$$) : "circle" == $type$$188$$ && ($newX$$11$$ += 0.15 * $minDim$$1$$, $newY$$11$$ += 0.15 * $minDim$$1$$, $newWidth$$3$$ -= 0.3 * $minDim$$1$$, $newHeight$$ -= 0.3 * $minDim$$1$$);
  return new D.$DvtRectangle$$($newX$$11$$, $newY$$11$$, $newWidth$$3$$, $newHeight$$)
};
D.$DvtStatusMeterGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtStatusMeterGauge", D.$DvtStatusMeterGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGauge$$, D.$DvtGauge$$, "DvtStatusMeterGauge");
D.$DvtStatusMeterGauge$newInstance$$ = function $$DvtStatusMeterGauge$newInstance$$$($context$$301$$, $callback$$61$$, $callbackObj$$37$$) {
  var $gauge$$2$$ = new D.$DvtStatusMeterGauge$$;
  $gauge$$2$$.Init($context$$301$$, $callback$$61$$, $callbackObj$$37$$);
  return $gauge$$2$$
};
D.$DvtStatusMeterGauge$$.newInstance = D.$DvtStatusMeterGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtStatusMeterGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$302$$, $callback$$62$$, $callbackObj$$38$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.Init.call(this, $context$$302$$, $callback$$62$$, $callbackObj$$38$$);
  this.$Defaults$ = new D.$DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$23$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$23$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$17$$, $width$$42$$, $height$$35$$) {
  D.$DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$17$$, $width$$42$$, $height$$35$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$50$$, $animatedObjs_animationType$$, $animationDuration$$1$$) {
  $animatedObjs_animationType$$ = [];
  for(var $i$$220$$ = 0;$i$$220$$ < $objs$$50$$.length;$i$$220$$++) {
    var $obj$$189$$ = $objs$$50$$[$i$$220$$], $endState$$ = $obj$$189$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation || "vertical" == this.$Options$.orientation ? $obj$$189$$.$setAnimationParams$([$endState$$[0], $endState$$[0], $endState$$[2], $endState$$[3]]) : $obj$$189$$.$setAnimationParams$([$endState$$[0], $endState$$[1], 0, $endState$$[3], $endState$$[4]]);
    var $animation$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$189$$, $animationDuration$$1$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$.$_animator$, "typeNumberArray", $obj$$189$$, $obj$$189$$.$getAnimationParams$, $obj$$189$$.$setAnimationParams$, $endState$$);
    $animation$$.$_animator$.$setEasing$(function($objs$$50$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$50$$, 0.7)
    });
    $animatedObjs_animationType$$.push($animation$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs_animationType$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$144$$, $y$$117$$) {
  if("horizontal" == this.$Options$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$144$$)
  }
  if("vertical" == this.$Options$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($y$$117$$)
  }
  if("circular" == this.$Options$.orientation) {
    var $angle$$18$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$117$$ - this.$Height$ / 2, $x$$144$$ - this.$Width$ / 2)) - 270, $angle$$18$$ = ($angle$$18$$ + 720) % 360;
    0 <= $angle$$18$$ && 360 >= $angle$$18$$ || ($angle$$18$$ = 360 < $angle$$18$$ ? 360 - $angle$$18$$ < $angle$$18$$ - 360 ? 0 : 360 : 0 - $angle$$18$$ < $angle$$18$$ ? 0 : 360);
    if(D.$DvtAgent$$.$isRightToLeft$(this.$_context$)) {
      for($angle$$18$$ = 360 - $angle$$18$$;0 > $angle$$18$$;) {
        $angle$$18$$ += 360
      }
    }
    var $minValue$$ = this.$Options$.min;
    return $angle$$18$$ / 360 * (this.$Options$.max - $minValue$$) + $minValue$$
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
D.$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$13$$, $container$$96$$, $bounds$$86_width$$137$$, $height$$117$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$13$$)) {
    var $maxDiameter$$1_options$$145$$ = $gauge$$13$$.$__getOptions$(), $outerGap$$1$$ = $maxDiameter$$1_options$$145$$.__layout.outerGap;
    $bounds$$86_width$$137$$ = new D.$DvtRectangle$$($outerGap$$1$$, $outerGap$$1$$, $bounds$$86_width$$137$$ - 2 * $outerGap$$1$$, $height$$117$$ - 2 * $outerGap$$1$$);
    "horizontal" == $maxDiameter$$1_options$$145$$.orientation || "vertical" == $maxDiameter$$1_options$$145$$.orientation ? (D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$($gauge$$13$$, $container$$96$$, $bounds$$86_width$$137$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$13$$, $container$$96$$, $bounds$$86_width$$137$$)) : "circular" == $maxDiameter$$1_options$$145$$.orientation && ($maxDiameter$$1_options$$145$$ = window.Math.min($bounds$$86_width$$137$$.$w$, $bounds$$86_width$$137$$.$h$), 
    D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$13$$, $container$$96$$, new D.$DvtRectangle$$($bounds$$86_width$$137$$.x + $bounds$$86_width$$137$$.$w$ / 2 - 0.325 * $maxDiameter$$1_options$$145$$, $bounds$$86_width$$137$$.y + $bounds$$86_width$$137$$.$h$ / 2 - 0.25 * $maxDiameter$$1_options$$145$$, 0.65 * $maxDiameter$$1_options$$145$$, 0.5 * $maxDiameter$$1_options$$145$$)), D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$($gauge$$13$$, $container$$96$$, $bounds$$86_width$$137$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$13$$, $container$$96$$, new D.$DvtRectangle$$(0, 0, $bounds$$86_width$$137$$, $height$$117$$))
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularShape$$($gauge$$14$$, $container$$97_tooltip$$40$$, $bounds$$87_overlayRect$$) {
  var $options$$146$$ = $gauge$$14$$.$__getOptions$(), $angleExtent$$8_max$$17_percentFill$$ = 0, $value$$92$$ = $options$$146$$.value, $indicatorSize_referenceLineWidth_thresholds$$1$$ = $options$$146$$.thresholds, $maxDiameter$$2_referenceLineColor_totalWidth$$4$$ = window.Math.min($bounds$$87_overlayRect$$.$w$, $bounds$$87_overlayRect$$.$h$), $innerRadius_referenceObjects$$ = 0.3125 * $maxDiameter$$2_referenceLineColor_totalWidth$$4$$, $i$$547_outerRadius$$ = 0.4625 * $maxDiameter$$2_referenceLineColor_totalWidth$$4$$, 
  $referenceLineStyle_startAngle$$10$$ = 1.5 * window.Math.PI, $angleExtent$$8_max$$17_percentFill$$ = 2 * $angleExtent$$8_max$$17_percentFill$$ * window.Math.PI;
  if($indicatorSize_referenceLineWidth_thresholds$$1$$ && "off" != $options$$146$$.plotArea.rendered && "all" == $options$$146$$.thresholdDisplay) {
    for(var $currentThresholdIndex$$ = 0;$currentThresholdIndex$$ < $indicatorSize_referenceLineWidth_thresholds$$1$$.length;$currentThresholdIndex$$++) {
      var $thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$14$$, $indicatorSize_referenceLineWidth_thresholds$$1$$[$currentThresholdIndex$$], $currentThresholdIndex$$), $angleExtent$$8_max$$17_percentFill$$ = $indicatorSize_referenceLineWidth_thresholds$$1$$[$currentThresholdIndex$$].max ? $indicatorSize_referenceLineWidth_thresholds$$1$$[$currentThresholdIndex$$].max : $options$$146$$.max, $min$$17$$ = 0 == $currentThresholdIndex$$ ? $options$$146$$.min : $indicatorSize_referenceLineWidth_thresholds$$1$$[$currentThresholdIndex$$ - 
      1].max, $referenceLineStyle_startAngle$$10$$ = 1.5 * window.Math.PI + 2 * window.Math.PI * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$146$$, $options$$146$$.min, $min$$17$$), $angleExtent$$8_max$$17_percentFill$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$146$$, $min$$17$$, $angleExtent$$8_max$$17_percentFill$$), $angleExtent$$8_max$$17_percentFill$$ = 2 * $angleExtent$$8_max$$17_percentFill$$ * window.Math.PI;
      D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$14$$, $container$$97_tooltip$$40$$, $bounds$$87_overlayRect$$, $referenceLineStyle_startAngle$$10$$, $angleExtent$$8_max$$17_percentFill$$, $innerRadius_referenceObjects$$, $i$$547_outerRadius$$, $thresholdColor$$, D.$JSCompiler_alias_FALSE$$)
    }
  }else {
    "off" != $options$$146$$.plotArea.rendered && (!("auto" == $options$$146$$.plotArea.rendered && "onIndicator" == $options$$146$$.thresholdDisplay) && "all" != $options$$146$$.thresholdDisplay) && ($thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$14$$), $referenceLineStyle_startAngle$$10$$ = 1.5 * window.Math.PI, $angleExtent$$8_max$$17_percentFill$$ = 2 * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$14$$, $container$$97_tooltip$$40$$, $bounds$$87_overlayRect$$, 
    $referenceLineStyle_startAngle$$10$$, $angleExtent$$8_max$$17_percentFill$$, $innerRadius_referenceObjects$$, $i$$547_outerRadius$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$))
  }
  if(($indicatorSize_referenceLineWidth_thresholds$$1$$ = $options$$146$$.indicatorSize) && 1 != $indicatorSize_referenceLineWidth_thresholds$$1$$) {
    $maxDiameter$$2_referenceLineColor_totalWidth$$4$$ *= 0.075 * (1 - $indicatorSize_referenceLineWidth_thresholds$$1$$), $innerRadius_referenceObjects$$ += $maxDiameter$$2_referenceLineColor_totalWidth$$4$$, $i$$547_outerRadius$$ -= $maxDiameter$$2_referenceLineColor_totalWidth$$4$$
  }
  $referenceLineStyle_startAngle$$10$$ = 1.5 * window.Math.PI;
  $angleExtent$$8_max$$17_percentFill$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$146$$, $options$$146$$.min, $value$$92$$);
  $angleExtent$$8_max$$17_percentFill$$ = 2 * $angleExtent$$8_max$$17_percentFill$$ * window.Math.PI;
  D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$14$$, $container$$97_tooltip$$40$$, $bounds$$87_overlayRect$$, $referenceLineStyle_startAngle$$10$$, $angleExtent$$8_max$$17_percentFill$$, $innerRadius_referenceObjects$$, $i$$547_outerRadius$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$14$$), D.$JSCompiler_alias_FALSE$$);
  if($innerRadius_referenceObjects$$ = $options$$146$$.referenceLines) {
    for($i$$547_outerRadius$$ = 0;$i$$547_outerRadius$$ < $innerRadius_referenceObjects$$.length;$i$$547_outerRadius$$++) {
      $maxDiameter$$2_referenceLineColor_totalWidth$$4$$ = $innerRadius_referenceObjects$$[$i$$547_outerRadius$$].color ? $innerRadius_referenceObjects$$[$i$$547_outerRadius$$].color : "black", $indicatorSize_referenceLineWidth_thresholds$$1$$ = $innerRadius_referenceObjects$$[$i$$547_outerRadius$$].lineWidth ? $innerRadius_referenceObjects$$[$i$$547_outerRadius$$].lineWidth : 2, $referenceLineStyle_startAngle$$10$$ = $innerRadius_referenceObjects$$[$i$$547_outerRadius$$].lineStyle, $value$$92$$ = 
      $innerRadius_referenceObjects$$[$i$$547_outerRadius$$].value, window.angle = 1.5 * window.Math.PI + 2 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$146$$, $options$$146$$.min, $value$$92$$) * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$14$$, $container$$97_tooltip$$40$$, $bounds$$87_overlayRect$$, $maxDiameter$$2_referenceLineColor_totalWidth$$4$$, $indicatorSize_referenceLineWidth_thresholds$$1$$, $referenceLineStyle_startAngle$$10$$)
    }
  }
  $bounds$$87_overlayRect$$ = new D.$DvtRect$$($gauge$$14$$.$_context$, $bounds$$87_overlayRect$$.x, $bounds$$87_overlayRect$$.y, $bounds$$87_overlayRect$$.$w$, $bounds$$87_overlayRect$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bounds$$87_overlayRect$$);
  $container$$97_tooltip$$40$$.$addChild$($bounds$$87_overlayRect$$);
  (($container$$97_tooltip$$40$$ = $options$$146$$.shortDesc) || $gauge$$14$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$14$$.$__getEventManager$().$associate$($bounds$$87_overlayRect$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$97_tooltip$$40$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$14$$)))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$15$$, $container$$98_tooltip$$41$$, $axisArea_bounds$$88$$) {
  var $options$$147$$ = $gauge$$15$$.$__getOptions$(), $color$$58_isRTL$$12$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$15$$.$_context$), $isVert$$ = "vertical" == $options$$147$$.orientation, $axisInfo$$2_axisOptions$$5$$ = {layout:{}};
  $axisInfo$$2_axisOptions$$5$$.layout.gapRatio = 0;
  $axisInfo$$2_axisOptions$$5$$.timeAxisType = "disabled";
  $axisInfo$$2_axisOptions$$5$$.position = $isVert$$ ? "left" : "bottom";
  $axisInfo$$2_axisOptions$$5$$.min = $options$$147$$.min;
  $axisInfo$$2_axisOptions$$5$$.max = $options$$147$$.max;
  $axisInfo$$2_axisOptions$$5$$.dataMin = $options$$147$$.min;
  $axisInfo$$2_axisOptions$$5$$.dataMax = $options$$147$$.max;
  $axisInfo$$2_axisOptions$$5$$.tickLabel = {rendered:"off"};
  $axisInfo$$2_axisOptions$$5$$ = (0,D.$DvtAxisInfo$newInstance$$)($gauge$$15$$.$_context$, $axisInfo$$2_axisOptions$$5$$, $axisArea_bounds$$88$$);
  $gauge$$15$$.$__axisInfo$ = $axisInfo$$2_axisOptions$$5$$;
  var $arColors$$23_baseline$$8_gradient$$6$$ = 0;
  0 > $options$$147$$.max ? $arColors$$23_baseline$$8_gradient$$6$$ = $options$$147$$.max : 0 < $options$$147$$.min && ($arColors$$23_baseline$$8_gradient$$6$$ = $options$$147$$.min);
  var $baselineCoord$$7_gradientAngle$$1$$ = $axisInfo$$2_axisOptions$$5$$.$getCoordAt$($arColors$$23_baseline$$8_gradient$$6$$);
  "off" != $options$$147$$.plotArea.rendered && !("auto" == $options$$147$$.plotArea.rendered && "onIndicator" == $options$$147$$.thresholdDisplay) && ($baselineCoord$$7_gradientAngle$$1$$ = $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.min));
  var $endCoord$$7_i$$548_plotAreaColor_shape$$86$$ = $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.value), $endCoord$$7_i$$548_plotAreaColor_shape$$86$$ = $isVert$$ ? window.Math.max($axisArea_bounds$$88$$.y, window.Math.min($axisArea_bounds$$88$$.y + $axisArea_bounds$$88$$.$h$, $endCoord$$7_i$$548_plotAreaColor_shape$$86$$)) : window.Math.max($axisArea_bounds$$88$$.x, window.Math.min($axisArea_bounds$$88$$.x + $axisArea_bounds$$88$$.$w$, $endCoord$$7_i$$548_plotAreaColor_shape$$86$$)), 
  $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$ = 0, $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$ = 0 > $options$$147$$.min && 0 > $options$$147$$.value ? $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.min) : $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.max), $plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$, $indicatorSize$$1_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $indicatorY2_overlay$$1_referenceObjects$$1$$ = 0;
  $isVert$$ ? ($plotX1$$ = $axisArea_bounds$$88$$.x, $plotX2$$ = $axisArea_bounds$$88$$.x + $axisArea_bounds$$88$$.$w$, $plotY2$$ = $baselineCoord$$7_gradientAngle$$1$$, $plotY1$$ = window.Math.max($axisArea_bounds$$88$$.y, window.Math.min($axisArea_bounds$$88$$.y + $axisArea_bounds$$88$$.$h$, $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$)), $indicatorSize$$1_indicatorX1$$ = $axisArea_bounds$$88$$.x + (1 - $options$$147$$.indicatorSize) / 2 * $axisArea_bounds$$88$$.$w$ + 0.5, $indicatorX2$$ = 
  $axisArea_bounds$$88$$.x + $axisArea_bounds$$88$$.$w$ * (1 - (1 - $options$$147$$.indicatorSize) / 2) - 0.5, $indicatorY2_overlay$$1_referenceObjects$$1$$ = $baselineCoord$$7_gradientAngle$$1$$ - 0.5, $indicatorY1$$ = $endCoord$$7_i$$548_plotAreaColor_shape$$86$$ + 0.5) : ($plotX1$$ = $baselineCoord$$7_gradientAngle$$1$$, $plotX2$$ = window.Math.max($axisArea_bounds$$88$$.x, window.Math.min($axisArea_bounds$$88$$.x + $axisArea_bounds$$88$$.$w$, $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$)), 
  $plotY1$$ = $axisArea_bounds$$88$$.y, $plotY2$$ = $axisArea_bounds$$88$$.y + $axisArea_bounds$$88$$.$h$, $indicatorSize$$1_indicatorX1$$ = $color$$58_isRTL$$12$$ ? $baselineCoord$$7_gradientAngle$$1$$ - 0.5 : $baselineCoord$$7_gradientAngle$$1$$ + 0.5, $indicatorX2$$ = $color$$58_isRTL$$12$$ ? $endCoord$$7_i$$548_plotAreaColor_shape$$86$$ + 0.5 : $endCoord$$7_i$$548_plotAreaColor_shape$$86$$ - 0.5, $indicatorY1$$ = $axisArea_bounds$$88$$.y + (1 - $options$$147$$.indicatorSize) / 2 * $axisArea_bounds$$88$$.$h$ + 
  0.5, $indicatorY2_overlay$$1_referenceObjects$$1$$ = $axisArea_bounds$$88$$.y + $axisArea_bounds$$88$$.$h$ * (1 - (1 - $options$$147$$.indicatorSize) / 2) - 0.5);
  $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$ = D.$JSCompiler_alias_TRUE$$;
  $endCoord$$7_i$$548_plotAreaColor_shape$$86$$ == $baselineCoord$$7_gradientAngle$$1$$ && ($bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$ = D.$JSCompiler_alias_FALSE$$);
  var $borderColor$$45$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$15$$), $plotAreaBorderColor$$ = $options$$147$$.plotArea.borderColor, $thresholds$$2$$ = $options$$147$$.thresholds, $baselineCoord$$7_gradientAngle$$1$$ = $isVert$$ ? 0 : 270;
  if($thresholds$$2$$ && "off" != $options$$147$$.plotArea.rendered && "all" == $options$$147$$.thresholdDisplay) {
    for($endCoord$$7_i$$548_plotAreaColor_shape$$86$$ = $thresholds$$2$$.length - 1;0 <= $endCoord$$7_i$$548_plotAreaColor_shape$$86$$;$endCoord$$7_i$$548_plotAreaColor_shape$$86$$--) {
      var $currentThresholdIndex$$1$$ = $endCoord$$7_i$$548_plotAreaColor_shape$$86$$, $plotArea$$4$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$15$$, $gauge$$15$$.$_context$, $plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $cp$$10$$ = new D.$DvtClipPath$$("pacp" + $gauge$$15$$.getId());
      if($currentThresholdIndex$$1$$ == $thresholds$$2$$.length - 1) {
        $isVert$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$10$$, 0, 0, $axisArea_bounds$$88$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : $color$$58_isRTL$$12$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$10$$, $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.max), 0, $axisArea_bounds$$88$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$10$$, 0, 0, $axisArea_bounds$$88$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0)
      }else {
        if($isVert$$) {
          var $thresholdMax$$ = $thresholds$$2$$[$thresholds$$2$$.length - 2 - $currentThresholdIndex$$1$$].max == D.$JSCompiler_alias_NULL$$ ? 100 : $thresholds$$2$$[$thresholds$$2$$.length - 2 - $currentThresholdIndex$$1$$].max;
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$10$$, 0, $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.max), $plotX2$$ - $plotX1$$ + 2, 1 * $thresholds$$2$$[$currentThresholdIndex$$1$$].max / window.Math.abs($arColors$$23_baseline$$8_gradient$$6$$ - $options$$147$$.max) * $axisArea_bounds$$88$$.$h$, 0, 0)
        }else {
          $color$$58_isRTL$$12$$ ? ($thresholdMax$$ = $thresholds$$2$$[$thresholds$$2$$.length - 2 - $currentThresholdIndex$$1$$].max == D.$JSCompiler_alias_NULL$$ ? 100 : $thresholds$$2$$[$thresholds$$2$$.length - 2 - $currentThresholdIndex$$1$$].max, (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$10$$, 0, 0, 1 * ($options$$147$$.max - $thresholdMax$$) / window.Math.abs($arColors$$23_baseline$$8_gradient$$6$$ - $options$$147$$.max) * $axisArea_bounds$$88$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0)) : 
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$10$$, 0, 0, 1 * $thresholds$$2$$[$currentThresholdIndex$$1$$].max / window.Math.abs($arColors$$23_baseline$$8_gradient$$6$$ - $options$$147$$.max) * $axisArea_bounds$$88$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0)
        }
      }
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($plotArea$$4$$, $cp$$10$$);
      if($color$$58_isRTL$$12$$ || $isVert$$) {
        $currentThresholdIndex$$1$$ = $thresholds$$2$$.length - 1 - $endCoord$$7_i$$548_plotAreaColor_shape$$86$$
      }
      $plotArea$$4$$.$setSolidFill$(D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$15$$, $thresholds$$2$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $plotArea$$4$$.$setSolidStroke$($plotAreaBorderColor$$);
      D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$15$$, $container$$98_tooltip$$41$$, $plotArea$$4$$, D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$15$$, $thresholds$$2$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $baselineCoord$$7_gradientAngle$$1$$)
    }
  }else {
    "off" != $options$$147$$.plotArea.rendered && (!("auto" == $options$$147$$.plotArea.rendered && "onIndicator" == $options$$147$$.thresholdDisplay) && "all" != $options$$147$$.thresholdDisplay) && ($plotArea$$4$$ = $isVert$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$15$$, $gauge$$15$$.$_context$, $plotX1$$, $plotX2$$, $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.max), $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.min), D.$JSCompiler_alias_TRUE$$) : 
    D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$15$$, $gauge$$15$$.$_context$, $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.min), $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($options$$147$$.max), $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $endCoord$$7_i$$548_plotAreaColor_shape$$86$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$15$$), $plotArea$$4$$.$setSolidFill$($endCoord$$7_i$$548_plotAreaColor_shape$$86$$), $plotArea$$4$$.$setSolidStroke$($plotAreaBorderColor$$), 
    D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$15$$, $container$$98_tooltip$$41$$, $plotArea$$4$$, $endCoord$$7_i$$548_plotAreaColor_shape$$86$$, $baselineCoord$$7_gradientAngle$$1$$))
  }
  $endCoord$$7_i$$548_plotAreaColor_shape$$86$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$15$$, $gauge$$15$$.$_context$, $indicatorSize$$1_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $indicatorY2_overlay$$1_referenceObjects$$1$$, D.$JSCompiler_alias_TRUE$$);
  $gauge$$15$$.$__shapes$.push($endCoord$$7_i$$548_plotAreaColor_shape$$86$$);
  $color$$58_isRTL$$12$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$15$$);
  !(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$15$$) && "none" != $options$$147$$.visualEffects ? ($arColors$$23_baseline$$8_gradient$$6$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$58_isRTL$$12$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$58_isRTL$$12$$, -0.04, -0.05)], $arColors$$23_baseline$$8_gradient$$6$$ = new D.$DvtLinearGradientFill$$($baselineCoord$$7_gradientAngle$$1$$, $arColors$$23_baseline$$8_gradient$$6$$, [1, 1], [0, 1]), $endCoord$$7_i$$548_plotAreaColor_shape$$86$$.$setFill$($arColors$$23_baseline$$8_gradient$$6$$)) : 
  $endCoord$$7_i$$548_plotAreaColor_shape$$86$$.$setSolidFill$($color$$58_isRTL$$12$$);
  $borderColor$$45$$ && $endCoord$$7_i$$548_plotAreaColor_shape$$86$$.$setSolidStroke$($borderColor$$45$$);
  $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$ && $container$$98_tooltip$$41$$.$addChild$($endCoord$$7_i$$548_plotAreaColor_shape$$86$$);
  $indicatorY2_overlay$$1_referenceObjects$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$15$$, $gauge$$15$$.$_context$, $indicatorSize$$1_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $indicatorY2_overlay$$1_referenceObjects$$1$$, D.$JSCompiler_alias_TRUE$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$15$$, $container$$98_tooltip$$41$$, $indicatorY2_overlay$$1_referenceObjects$$1$$, $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$, $baselineCoord$$7_gradientAngle$$1$$);
  if($indicatorY2_overlay$$1_referenceObjects$$1$$ = $options$$147$$.referenceLines) {
    for($endCoord$$7_i$$548_plotAreaColor_shape$$86$$ = 0;$endCoord$$7_i$$548_plotAreaColor_shape$$86$$ < $indicatorY2_overlay$$1_referenceObjects$$1$$.length;$endCoord$$7_i$$548_plotAreaColor_shape$$86$$++) {
      $color$$58_isRTL$$12$$ = $indicatorY2_overlay$$1_referenceObjects$$1$$[$endCoord$$7_i$$548_plotAreaColor_shape$$86$$].color ? $indicatorY2_overlay$$1_referenceObjects$$1$$[$endCoord$$7_i$$548_plotAreaColor_shape$$86$$].color : "white", $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$ = $indicatorY2_overlay$$1_referenceObjects$$1$$[$endCoord$$7_i$$548_plotAreaColor_shape$$86$$].value, $indicatorSize$$1_indicatorX1$$ = $options$$147$$.indicatorSize, $isVert$$ ? (window.referenceLineSize = 
      ((1 - $indicatorSize$$1_indicatorX1$$) / 2 + $indicatorSize$$1_indicatorX1$$) * $axisArea_bounds$$88$$.$w$, window.xCoord = $axisArea_bounds$$88$$.x + (1 - $indicatorSize$$1_indicatorX1$$) / 4 * $axisArea_bounds$$88$$.$w$, window.yCoord = $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$), window.referenceLine = new D.$DvtLine$$($gauge$$15$$.$_context$, window.xCoord, window.yCoord, window.xCoord + window.referenceLineSize, window.yCoord)) : 
      (window.referenceLineSize = ((1 - $indicatorSize$$1_indicatorX1$$) / 2 + $indicatorSize$$1_indicatorX1$$) * $axisArea_bounds$$88$$.$h$, window.xCoord = $axisInfo$$2_axisOptions$$5$$.$getUnboundedCoordAt$($bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$), window.yCoord = $axisArea_bounds$$88$$.y + (1 - $indicatorSize$$1_indicatorX1$$) / 4 * $axisArea_bounds$$88$$.$h$, window.referenceLine = new D.$DvtLine$$($gauge$$15$$.$_context$, window.xCoord, window.yCoord, window.xCoord, window.yCoord + 
      window.referenceLineSize)), $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$ = new D.$DvtSolidStroke$$($color$$58_isRTL$$12$$, 1, $indicatorY2_overlay$$1_referenceObjects$$1$$[$endCoord$$7_i$$548_plotAreaColor_shape$$86$$].lineWidth ? $indicatorY2_overlay$$1_referenceObjects$$1$$[$endCoord$$7_i$$548_plotAreaColor_shape$$86$$].lineWidth : 2), $indicatorY2_overlay$$1_referenceObjects$$1$$[$endCoord$$7_i$$548_plotAreaColor_shape$$86$$].lineStyle && $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($indicatorY2_overlay$$1_referenceObjects$$1$$[$endCoord$$7_i$$548_plotAreaColor_shape$$86$$].lineStyle)), 
      window.referenceLine.$setStroke$($bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$), $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), $container$$98_tooltip$$41$$.$addChild$(window.referenceLine), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(window.referenceLine, $bRender$$2_plotAreaEnd_shadow$$7_stroke$$81_value$$93$$)
    }
  }
  $axisArea_bounds$$88$$ = new D.$DvtRect$$($gauge$$15$$.$_context$, $axisArea_bounds$$88$$.x, $axisArea_bounds$$88$$.y, $axisArea_bounds$$88$$.$w$, $axisArea_bounds$$88$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($axisArea_bounds$$88$$);
  $container$$98_tooltip$$41$$.$addChild$($axisArea_bounds$$88$$);
  (($container$$98_tooltip$$41$$ = $options$$147$$.shortDesc) || $options$$147$$.readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$15$$.$__getEventManager$().$associate$($axisArea_bounds$$88$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$98_tooltip$$41$$, $color$$58_isRTL$$12$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($gauge$$16$$, $context$$567$$, $x1$$39$$, $x2$$36$$, $y1$$32$$, $y2$$29$$, $roundCorners$$3$$) {
  return new window.DvtStatusMeterGaugeIndicator($gauge$$16$$, $context$$567$$, $x1$$39$$, $x2$$36$$, $y1$$32$$, $y2$$29$$, $roundCorners$$3$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$17$$, $container$$99$$, $shape$$87$$, $bRender$$3$$, $gradient$$7_gradientAngle$$2$$) {
  "none" != $gauge$$17$$.$__getOptions$().visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$17$$) && ($gradient$$7_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$7_gradientAngle$$2$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $shape$$87$$.$setFill$($gradient$$7_gradientAngle$$2$$), $gauge$$17$$.$__shapes$.push($shape$$87$$), $shape$$87$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $bRender$$3$$ && $container$$99$$.$addChild$($shape$$87$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$25_gauge$$18$$, $container$$100$$, $shape$$88$$, $color$$59$$, $gradient$$8_gradientAngle$$3$$) {
  var $options$$149$$ = $arColors$$25_gauge$$18$$.$__getOptions$();
  $shape$$88$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$100$$.$addChild$($shape$$88$$);
  "none" != $options$$149$$.visualEffects && ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($arColors$$25_gauge$$18$$) ? ($arColors$$25_gauge$$18$$ = [D.$DvtColorUtils$$.$getDarker$($color$$59$$, 0.9), $color$$59$$, D.$DvtColorUtils$$.$getBrighter$($color$$59$$)], $gradient$$8_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$8_gradientAngle$$3$$, $arColors$$25_gauge$$18$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$25_gauge$$18$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$59$$, -0.04, -0.05), 
  D.$DvtColorUtils$$.$adjustHSL$($color$$59$$, -0.09, 0.04)], $gradient$$8_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$8_gradientAngle$$3$$, $arColors$$25_gauge$$18$$, [1, 1], [0, 1])), $shape$$88$$.$setFill$($gradient$$8_gradientAngle$$3$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabel$$($gauge$$19$$, $container$$101$$, $bounds$$89$$) {
  var $options$$150$$ = $gauge$$19$$.$__getOptions$(), $isRTL$$13_labelBounds$$1$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$19$$.$_context$), $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ = "vertical" == $options$$150$$.orientation, $label$$39$$ = new D.$DvtOutputText$$($gauge$$19$$.$_context$, ""), $labelString$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$150$$.value, $gauge$$19$$), $labelGap$$ = $options$$150$$.__layout.labelGap;
  $label$$39$$.$setCSSStyle$($options$$150$$.metricLabel.style);
  if($isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ && "on" == $options$$150$$.metricLabel.rendered) {
    var $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$ = 0 < $options$$150$$.max ? $options$$150$$.max : $options$$150$$.min, $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$, $gauge$$19$$), $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$ = new D.$DvtOutputText$$($gauge$$19$$.$_context$, $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$);
    $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$.$setCSSStyle$($options$$150$$.metricLabel.style);
    var $isRTL$$13_labelBounds$$1$$ = new D.$DvtRectangle$$($bounds$$89$$.x, $bounds$$89$$.y + 0.8 * $bounds$$89$$.$h$, $bounds$$89$$.$w$, 0.2 * $bounds$$89$$.$h$), $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ = ($isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ = $options$$150$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$) : $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$.$getOptimalFontSize$($isRTL$$13_labelBounds$$1$$), 
    $longestLabel_maxLabelDims$$ = $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$.$measureDimensions$();
    $bounds$$89$$.$h$ -= $longestLabel_maxLabelDims$$.$h$;
    window.labelSpace = $longestLabel_maxLabelDims$$.$w$;
    $label$$39$$.$setFontSize$($isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$);
    $label$$39$$.$setTextString$($labelString$$2$$);
    $label$$39$$.$setX$($bounds$$89$$.x + $bounds$$89$$.$w$ / 2);
    $label$$39$$.$setY$($bounds$$89$$.y + $bounds$$89$$.$h$);
    $bounds$$89$$.$h$ -= $labelGap$$;
    $label$$39$$.$alignCenter$();
    D.$DvtTextUtils$$.$fitText$($label$$39$$, $bounds$$89$$.$w$, $bounds$$89$$.$h$, $container$$101$$) && $label$$39$$.$isTruncated$() && $gauge$$19$$.$__getEventManager$().$associate$($label$$39$$, new D.$DvtSimpleObjPeer$$($labelString$$2$$))
  }else {
    if(!$isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ && "on" == $options$$150$$.metricLabel.rendered) {
      var $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ = ($isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ = $options$$150$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$) : 13, $longestLabel_maxLabelDims$$ = window.Math.max($options$$150$$.max.toString().length, $options$$150$$.min.toString().length), $maxString$$ = "";
      "percent" == $options$$150$$.metricLabel.textType && ($longestLabel_maxLabelDims$$ = 3, $maxString$$ += "%");
      for(var $i$$549$$ = 0;$i$$549$$ < $longestLabel_maxLabelDims$$;$i$$549$$++) {
        $maxString$$ += "0"
      }
      $label$$39$$.$setTextString$($maxString$$);
      18 > $bounds$$89$$.$h$ && ($isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ = $label$$39$$.$getOptimalFontSize$($bounds$$89$$));
      $label$$39$$.$setFontSize$($isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$);
      if(0 < $options$$150$$.max || "off" != $options$$150$$.plotArea.rendered || !("auto" == $options$$150$$.plotArea.rendered && "onIndicator" == $options$$150$$.thresholdDisplay)) {
        $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$ = 0 < $options$$150$$.max ? $options$$150$$.max : $options$$150$$.min, $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$, $gauge$$19$$), $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$ = new D.$DvtOutputText$$($gauge$$19$$.$_context$, $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$), $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$.$setCSSStyle$($options$$150$$.metricLabel.style), 
        $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$.$setFontSize$($isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$), $longestLabel_maxLabelDims$$ = $label$$39$$.$measureDimensions$(), $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$ = $isRTL$$13_labelBounds$$1$$ ? $bounds$$89$$.x + $longestLabel_maxLabelDims$$.$w$ : $bounds$$89$$.x + $bounds$$89$$.$w$, window.labelSpace = $longestLabel_maxLabelDims$$.$w$, $isRTL$$13_labelBounds$$1$$ && ($bounds$$89$$.x += $longestLabel_maxLabelDims$$.$w$ + 
        $labelGap$$), $bounds$$89$$.$w$ -= $longestLabel_maxLabelDims$$.$w$ + $labelGap$$
      }
      if(0 > $options$$150$$.min && "on" != $options$$150$$.plotArea.rendered && !("auto" == $options$$150$$.plotArea.rendered && "onIndicator" == $options$$150$$.thresholdDisplay)) {
        $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$150$$.min, $gauge$$19$$);
        $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ = new D.$DvtOutputText$$($gauge$$19$$.$_context$, $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$);
        $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$.$setCSSStyle$($options$$150$$.metricLabel.style);
        $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$ = $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$.$measureDimensions$();
        if(0 > $options$$150$$.value || 0 >= $options$$150$$.max) {
          $alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$ = $isRTL$$13_labelBounds$$1$$ ? $bounds$$89$$.x + $bounds$$89$$.$w$ : $bounds$$89$$.x + $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$.$w$, window.labelSpace = $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$.$w$
        }
        $isRTL$$13_labelBounds$$1$$ || ($bounds$$89$$.x += $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$.$w$ + $labelGap$$);
        $bounds$$89$$.$w$ -= $isVert$$1_minLabel$$1_minLabelDims_minValue$$10_size$$39$$.$w$ + $labelGap$$
      }
      $label$$39$$.$setTextString$($labelString$$2$$);
      $label$$39$$.$setX$($alignCoord_bound$$9_maxLabel$$1_maxValue$$11$$);
      $label$$39$$.$setY$($bounds$$89$$.y + $bounds$$89$$.$h$ / 2);
      $label$$39$$.$alignMiddle$();
      $label$$39$$.$alignRight$();
      D.$DvtTextUtils$$.$fitText$($label$$39$$, window.labelSpace, $bounds$$89$$.$h$, $container$$101$$) && $label$$39$$.$isTruncated$() && $gauge$$19$$.$__getEventManager$().$associate$($label$$39$$, new D.$DvtSimpleObjPeer$$($labelString$$2$$))
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$90$$, $radius$$13$$, $angle$$40$$) {
  return{x:window.Math.cos($angle$$40$$) * $radius$$13$$ + $bounds$$90$$.$w$ / 2 + $bounds$$90$$.x, y:window.Math.sin($angle$$40$$) * $radius$$13$$ + $bounds$$90$$.$h$ / 2 + $bounds$$90$$.y}
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$46_gauge$$20$$, $container$$102$$, $bounds$$91_shape$$89$$, $startAngle$$11$$, $angleExtent$$9$$, $innerRadius$$1$$, $outerRadius$$1$$, $color$$60$$, $isPlotArea$$) {
  var $context$$568$$ = $borderColor$$46_gauge$$20$$.$_context$;
  D.$DvtAgent$$.$isRightToLeft$($borderColor$$46_gauge$$20$$.$_context$) && ($startAngle$$11$$ = window.Math.PI - $startAngle$$11$$ - $angleExtent$$9$$, $startAngle$$11$$ = 0 < $startAngle$$11$$ ? $startAngle$$11$$ : $startAngle$$11$$ + 2 * window.Math.PI);
  $bounds$$91_shape$$89$$ = new D.$DvtStatusMeterGaugeCircularIndicator$$($context$$568$$, $bounds$$91_shape$$89$$, $startAngle$$11$$, $angleExtent$$9$$, $innerRadius$$1$$, $outerRadius$$1$$);
  $borderColor$$46_gauge$$20$$.$__shapes$.push($bounds$$91_shape$$89$$);
  $bounds$$91_shape$$89$$.$setSolidFill$($color$$60$$);
  ($borderColor$$46_gauge$$20$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$46_gauge$$20$$)) && !$isPlotArea$$ && $bounds$$91_shape$$89$$.$setSolidStroke$($borderColor$$46_gauge$$20$$);
  $container$$102$$.$addChild$($bounds$$91_shape$$89$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$21_shape$$90$$, $container$$103$$, $bounds$$92$$, $color$$61_stroke$$82$$, $lineWidth$$6$$, $lineStyle$$6$$) {
  var $angle$$41$$ = window.angle, $context$$569$$ = $gauge$$21_shape$$90$$.$_context$, $maxDiameter$$3_outerRadius$$2$$ = window.Math.min($bounds$$92$$.$w$, $bounds$$92$$.$h$), $innerRadius$$2$$ = 0.275 * $maxDiameter$$3_outerRadius$$2$$, $maxDiameter$$3_outerRadius$$2$$ = 0.5 * $maxDiameter$$3_outerRadius$$2$$;
  D.$DvtAgent$$.$isRightToLeft$($gauge$$21_shape$$90$$.$_context$) && ($angle$$41$$ = window.Math.PI - $angle$$41$$, $angle$$41$$ = 0 < $angle$$41$$ ? $angle$$41$$ : $angle$$41$$ + 2 * window.Math.PI);
  window.p1 = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$92$$, $innerRadius$$2$$, $angle$$41$$);
  window.p2 = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$92$$, $maxDiameter$$3_outerRadius$$2$$, $angle$$41$$);
  $gauge$$21_shape$$90$$ = new D.$DvtLine$$($context$$569$$, window.p1.x, window.p1.y, window.p2.x, window.p2.y);
  $color$$61_stroke$$82$$ = new D.$DvtSolidStroke$$($color$$61_stroke$$82$$, 1, $lineWidth$$6$$);
  $lineStyle$$6$$ && $color$$61_stroke$$82$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineStyle$$6$$));
  $gauge$$21_shape$$90$$.$setStroke$($color$$61_stroke$$82$$);
  $container$$103$$.$addChild$($gauge$$21_shape$$90$$)
};
window.DvtStatusMeterGaugeIndicator = function $DvtStatusMeterGaugeIndicator$($gauge$$6$$, $context$$565$$, $x1$$36$$, $x2$$33$$, $y1$$29$$, $y2$$26$$, $roundCorners$$) {
  this.Init($gauge$$6$$, $context$$565$$, $x1$$36$$, $x2$$33$$, $y1$$29$$, $y2$$26$$, $roundCorners$$)
};
D.$DvtObj$$.$createSubclass$(window.DvtStatusMeterGaugeIndicator, D.$DvtRect$$, "DvtStatusMeterGaugeIndicator");
window.DvtStatusMeterGaugeIndicator.$_MIN_CORNER_RADIUS$ = 2.5;
window.DvtStatusMeterGaugeIndicator.prototype.Init = function $DvtStatusMeterGaugeIndicator$$Init$($gauge$$7$$, $context$$566$$, $x1$$37$$, $x2$$34$$, $y1$$30$$, $y2$$27$$, $roundCorners$$1$$) {
  window.DvtStatusMeterGaugeIndicator.$superclass$.Init.call(this, $context$$566$$);
  this.$_gauge$ = $gauge$$7$$;
  this.$_roundCorners$ = $roundCorners$$1$$;
  this.$_isVert$ = "vertical" == $gauge$$7$$.$__getOptions$().orientation;
  (0,D.$JSCompiler_StaticMethods_setCoords$$)(this, $x1$$37$$, $x2$$34$$, $y1$$30$$, $y2$$27$$)
};
D.$JSCompiler_StaticMethods_setCoords$$ = function $$JSCompiler_StaticMethods_setCoords$$$($JSCompiler_StaticMethods_setCoords$self$$, $width$$136_x1$$38$$, $x2$$35$$, $height$$116_y1$$31$$, $y2$$28$$) {
  $JSCompiler_StaticMethods_setCoords$self$$.$_x1$ = $width$$136_x1$$38$$;
  $JSCompiler_StaticMethods_setCoords$self$$.$_x2$ = $x2$$35$$;
  $JSCompiler_StaticMethods_setCoords$self$$.$_y1$ = $height$$116_y1$$31$$;
  $JSCompiler_StaticMethods_setCoords$self$$.$_y2$ = $y2$$28$$;
  var $radius$$12_x$$275$$ = window.Math.min($width$$136_x1$$38$$, $x2$$35$$), $y$$246$$ = window.Math.min($height$$116_y1$$31$$, $y2$$28$$);
  $width$$136_x1$$38$$ = window.Math.abs($width$$136_x1$$38$$ - $x2$$35$$);
  $height$$116_y1$$31$$ = window.Math.abs($y2$$28$$ - $height$$116_y1$$31$$);
  (0,D.$JSCompiler_StaticMethods_setRect$$)($JSCompiler_StaticMethods_setCoords$self$$, $radius$$12_x$$275$$, $y$$246$$, $width$$136_x1$$38$$, $height$$116_y1$$31$$);
  $JSCompiler_StaticMethods_setCoords$self$$.$_roundCorners$ && ($radius$$12_x$$275$$ = ($JSCompiler_StaticMethods_setCoords$self$$.$_isVert$ ? $width$$136_x1$$38$$ : $height$$116_y1$$31$$) * ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($JSCompiler_StaticMethods_setCoords$self$$.$_gauge$) ? 0.25 : 0.15), $radius$$12_x$$275$$ >= window.DvtStatusMeterGaugeIndicator.$_MIN_CORNER_RADIUS$ && (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($JSCompiler_StaticMethods_setCoords$self$$, $radius$$12_x$$275$$, 
  $radius$$12_x$$275$$))
};
window.DvtStatusMeterGaugeIndicator.prototype.$getAnimationParams$ = function $DvtStatusMeterGaugeIndicator$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
};
window.DvtStatusMeterGaugeIndicator.prototype.$setAnimationParams$ = function $DvtStatusMeterGaugeIndicator$$$setAnimationParams$$($params$$41$$) {
  $params$$41$$ && 4 == $params$$41$$.length && (0,D.$JSCompiler_StaticMethods_setCoords$$)(this, $params$$41$$[0], $params$$41$$[1], $params$$41$$[2], $params$$41$$[3])
};
D.$DvtStatusMeterGaugeCircularIndicator$$ = function $$DvtStatusMeterGaugeCircularIndicator$$$($context$$571$$, $bounds$$93$$, $startAngle$$12$$, $angleExtent$$10$$, $innerRadius$$3$$, $outerRadius$$3$$) {
  this.Init($context$$571$$, $bounds$$93$$, $startAngle$$12$$, $angleExtent$$10$$, $innerRadius$$3$$, $outerRadius$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeCircularIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeCircularIndicator");
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$572$$, $bounds$$94$$, $startAngle$$13$$, $angleExtent$$11$$, $innerRadius$$4$$, $outerRadius$$4$$) {
  D.$DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$572$$);
  (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $bounds$$94$$, $startAngle$$13$$, $angleExtent$$11$$, $innerRadius$$4$$, $outerRadius$$4$$)
};
D.$JSCompiler_StaticMethods_setPath$$ = function $$JSCompiler_StaticMethods_setPath$$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$95_p4$$2$$, $startAngle$$14$$, $angleExtent$$12$$, $innerRadius$$5$$, $cmd$$9_outerRadius$$5$$) {
  var $p1$$5$$, $p2$$5$$, $p3$$3$$;
  $bounds$$95_p4$$2$$ && $bounds$$95_p4$$2$$ instanceof D.$DvtRectangle$$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$95_p4$$2$$ : $bounds$$95_p4$$2$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$14$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$12$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$5$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $cmd$$9_outerRadius$$5$$;
  $angleExtent$$12$$ < 2 * window.Math.PI ? ($p1$$5$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$95_p4$$2$$, $cmd$$9_outerRadius$$5$$, $startAngle$$14$$), $p2$$5$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$95_p4$$2$$, $cmd$$9_outerRadius$$5$$, $startAngle$$14$$ + $angleExtent$$12$$), $p3$$3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$95_p4$$2$$, $innerRadius$$5$$, $startAngle$$14$$ + $angleExtent$$12$$), $bounds$$95_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$95_p4$$2$$, 
  $innerRadius$$5$$, $startAngle$$14$$), $cmd$$9_outerRadius$$5$$ = window.DvtPathUtils.moveTo($p1$$5$$.x, $p1$$5$$.y) + window.DvtPathUtils.arcTo($cmd$$9_outerRadius$$5$$, $cmd$$9_outerRadius$$5$$, $angleExtent$$12$$, 1, $p2$$5$$.x, $p2$$5$$.y) + window.DvtPathUtils.lineTo($p3$$3$$.x, $p3$$3$$.y) + window.DvtPathUtils.arcTo($innerRadius$$5$$, $innerRadius$$5$$, $angleExtent$$12$$, 0, $bounds$$95_p4$$2$$.x, $bounds$$95_p4$$2$$.y) + window.DvtPathUtils.closePath()) : ($p1$$5$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$95_p4$$2$$, 
  $cmd$$9_outerRadius$$5$$, $startAngle$$14$$), $p2$$5$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$95_p4$$2$$, $cmd$$9_outerRadius$$5$$, $startAngle$$14$$ + $angleExtent$$12$$ / 2), $p3$$3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$95_p4$$2$$, $innerRadius$$5$$, $startAngle$$14$$), $bounds$$95_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$95_p4$$2$$, $innerRadius$$5$$, $startAngle$$14$$ + $angleExtent$$12$$ / 2), $cmd$$9_outerRadius$$5$$ = 
  window.DvtPathUtils.moveTo($p1$$5$$.x, $p1$$5$$.y) + window.DvtPathUtils.arcTo($cmd$$9_outerRadius$$5$$, $cmd$$9_outerRadius$$5$$, $angleExtent$$12$$ / 2, 1, $p2$$5$$.x, $p2$$5$$.y) + window.DvtPathUtils.arcTo($cmd$$9_outerRadius$$5$$, $cmd$$9_outerRadius$$5$$, $angleExtent$$12$$ / 2, 1, $p1$$5$$.x, $p1$$5$$.y), 0 < $innerRadius$$5$$ && ($cmd$$9_outerRadius$$5$$ += window.DvtPathUtils.moveTo($bounds$$95_p4$$2$$.x, $bounds$$95_p4$$2$$.y) + window.DvtPathUtils.arcTo($innerRadius$$5$$, $innerRadius$$5$$, 
  $angleExtent$$12$$ / 2, 0, $p3$$3$$.x, $p3$$3$$.y) + window.DvtPathUtils.arcTo($innerRadius$$5$$, $innerRadius$$5$$, $angleExtent$$12$$ / 2, 0, $bounds$$95_p4$$2$$.x, $bounds$$95_p4$$2$$.y)), $cmd$$9_outerRadius$$5$$ += window.DvtPathUtils.closePath());
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$($cmd$$9_outerRadius$$5$$)
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$43$$) {
  $params$$43$$ && 5 == $params$$43$$.length && (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $params$$43$$[0], $params$$43$$[1], $params$$43$$[2], $params$$43$$[3], $params$$43$$[4])
};
D.$DvtDialGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtDialGauge", D.$DvtDialGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDialGauge$$, D.$DvtGauge$$, "DvtDialGauge");
D.$DvtDialGauge$newInstance$$ = function $$DvtDialGauge$newInstance$$$($context$$305$$, $callback$$64$$, $callbackObj$$40$$) {
  var $gauge$$3$$ = new D.$DvtDialGauge$$;
  $gauge$$3$$.Init($context$$305$$, $callback$$64$$, $callbackObj$$40$$);
  return $gauge$$3$$
};
D.$DvtDialGauge$$.newInstance = D.$DvtDialGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtDialGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$306$$, $callback$$65$$, $callbackObj$$41$$) {
  D.$DvtDialGauge$$.$superclass$.Init.call(this, $context$$306$$, $callback$$65$$, $callbackObj$$41$$);
  this.$Defaults$ = new D.$DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$26$$) {
  D.$DvtDialGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$26$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$21$$, $width$$46$$, $height$$39$$) {
  D.$DvtDialGaugeRenderer$$.$render$(this, $container$$21$$, $width$$46$$, $height$$39$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$52$$, $animatedObjs$$2_animationType$$3$$, $animationDuration$$5$$) {
  $animatedObjs$$2_animationType$$3$$ = [];
  for(var $i$$222$$ = 0;$i$$222$$ < $objs$$52$$.length;$i$$222$$++) {
    var $obj$$190$$ = $objs$$52$$[$i$$222$$], $endState$$2$$ = $obj$$190$$.$getAnimationParams$(), $animation$$2_startAngle$$5$$ = D.$DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$190$$.$setAngle$($animation$$2_startAngle$$5$$);
    $animation$$2_startAngle$$5$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$190$$, $animationDuration$$5$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$2_startAngle$$5$$.$_animator$, "typeNumberArray", $obj$$190$$, $obj$$190$$.$getAnimationParams$, $obj$$190$$.$setAnimationParams$, $endState$$2$$);
    $animation$$2_startAngle$$5$$.$_animator$.$setEasing$(function($objs$$52$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$52$$, 0.7)
    });
    $animatedObjs$$2_animationType$$3$$.push($animation$$2_startAngle$$5$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$2_animationType$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$149$$, $y$$122$$) {
  var $angle$$19_ratio$$5$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$122$$ - this.$__anchorPt$.y, $x$$149$$ - this.$__anchorPt$.x));
  0 >= $angle$$19_ratio$$5$$ && ($angle$$19_ratio$$5$$ += 360);
  var $isRTL$$1_minValue$$1$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$), $angleExtent$$4_backgroundOptions$$ = this.$__getOptions$().background, $startAngle$$6$$ = $isRTL$$1_minValue$$1$$ ? 180 + $angleExtent$$4_backgroundOptions$$.startAngle : 360 - $angleExtent$$4_backgroundOptions$$.startAngle, $angleExtent$$4_backgroundOptions$$ = $angleExtent$$4_backgroundOptions$$.angleExtent, $endAngle$$1$$ = $startAngle$$6$$ + $angleExtent$$4_backgroundOptions$$;
  if($isRTL$$1_minValue$$1$$) {
    $endAngle$$1$$ = $startAngle$$6$$;
    for($startAngle$$6$$ -= $angleExtent$$4_backgroundOptions$$;0 > $startAngle$$6$$;) {
      $startAngle$$6$$ += 360, $endAngle$$1$$ += 360
    }
  }
  $angle$$19_ratio$$5$$ + 360 >= $startAngle$$6$$ && $angle$$19_ratio$$5$$ + 360 <= $endAngle$$1$$ ? $angle$$19_ratio$$5$$ += 360 : $angle$$19_ratio$$5$$ >= $startAngle$$6$$ && $angle$$19_ratio$$5$$ <= $endAngle$$1$$ || ($angle$$19_ratio$$5$$ = $angle$$19_ratio$$5$$ > $endAngle$$1$$ ? $startAngle$$6$$ + 360 - $angle$$19_ratio$$5$$ < $angle$$19_ratio$$5$$ - $endAngle$$1$$ ? $startAngle$$6$$ : $endAngle$$1$$ : $startAngle$$6$$ - $angle$$19_ratio$$5$$ < $angle$$19_ratio$$5$$ + 360 - $endAngle$$1$$ ? 
  $startAngle$$6$$ : $endAngle$$1$$);
  $angle$$19_ratio$$5$$ = ($angle$$19_ratio$$5$$ - $startAngle$$6$$) / $angleExtent$$4_backgroundOptions$$;
  $isRTL$$1_minValue$$1$$ && ($angle$$19_ratio$$5$$ = 1 - $angle$$19_ratio$$5$$);
  $isRTL$$1_minValue$$1$$ = this.$Options$.min;
  return $angle$$19_ratio$$5$$ * (this.$Options$.max - $isRTL$$1_minValue$$1$$) + $isRTL$$1_minValue$$1$$
};
D.$DvtDialGaugeDefaults$$ = function $$DvtDialGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtDialGaugeDefaults");
D.$DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtDialGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeRenderer$$, D.$DvtObj$$, "DvtDialGaugeRenderer");
D.$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$43$$, $container$$118$$, $bounds$$109_width$$141$$, $height$$121$$) {
  D.$DvtGaugeDataUtils$$.$hasData$($gauge$$43$$) ? ($bounds$$109_width$$141$$ = new D.$DvtRectangle$$(0, 0, $bounds$$109_width$$141$$, $height$$121$$), D.$DvtDialGaugeRenderer$$.$_renderShape$($gauge$$43$$, $container$$118$$, $bounds$$109_width$$141$$), D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$43$$, $container$$118$$, $bounds$$109_width$$141$$)) : D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$43$$, $container$$118$$, new D.$DvtRectangle$$(0, 0, $bounds$$109_width$$141$$, $height$$121$$))
};
D.$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$44$$, $container$$119$$, $bounds$$110_scale$$48$$) {
  var $options$$170_tooltip$$44$$ = $gauge$$44$$.$__getOptions$(), $background$$11_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_createBackground$($gauge$$44$$, $bounds$$110_scale$$48$$);
  $container$$119$$.$addChild$($background$$11_backgroundAnchor$$);
  $options$$170_tooltip$$44$$.background.majorTickCount && $options$$170_tooltip$$44$$.background.radius && D.$DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$44$$, $container$$119$$, $bounds$$110_scale$$48$$);
  var $indicator$$2$$ = D.$DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$44$$, $bounds$$110_scale$$48$$), $translateContainer$$ = new D.$DvtContainer$$($gauge$$44$$.$_context$), $rotateContainer$$ = new D.$DvtDialGaugeIndicator$$($gauge$$44$$.$_context$);
  $container$$119$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($indicator$$2$$);
  var $indicatorBounds_mat$$42$$ = $indicator$$2$$.$getDimensions$(), $angleRads$$8$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$44$$, $options$$170_tooltip$$44$$.value), $background$$11_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$44$$, $bounds$$110_scale$$48$$), $indicatorAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$44$$, $indicatorBounds_mat$$42$$);
  $bounds$$110_scale$$48$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$44$$, $bounds$$110_scale$$48$$, $indicatorBounds_mat$$42$$);
  $indicatorBounds_mat$$42$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$42$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$42$$.scale($bounds$$110_scale$$48$$, $bounds$$110_scale$$48$$);
  $indicator$$2$$.$setMatrix$($indicatorBounds_mat$$42$$);
  $rotateContainer$$.$setAngle$($angleRads$$8$$);
  $indicatorBounds_mat$$42$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$42$$.translate($background$$11_backgroundAnchor$$.x, $background$$11_backgroundAnchor$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$42$$);
  $gauge$$44$$.$__shapes$.push($rotateContainer$$);
  (($options$$170_tooltip$$44$$ = $options$$170_tooltip$$44$$.shortDesc) || $gauge$$44$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$44$$.$__getEventManager$().$associate$($container$$119$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$170_tooltip$$44$$));
  $gauge$$44$$.$__anchorPt$ = $background$$11_backgroundAnchor$$
};
D.$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$45$$, $bounds$$111$$) {
  var $backgroundOptions$$1$$ = $gauge$$45$$.$__getOptions$().background, $isRTL$$15_radiusScale$$1$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$45$$.$_context$), $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$ = D.$DvtAgent$$.$isTouchDevice$(), $shape$$93_widthRes$$1$$ = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$ ? 2 * $bounds$$111$$.$w$ : $bounds$$111$$.$w$, $heightRes$$1_scale$$49$$ = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$ ? 2 * $bounds$$111$$.$h$ : $bounds$$111$$.$h$, 
  $images$$14_tx$$14$$ = $backgroundOptions$$1$$.images;
  if($images$$14_tx$$14$$ && 0 < $images$$14_tx$$14$$.length) {
    var $i$$553_ty$$14$$, $refWidth$$1$$, $refHeight$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$ = [];
    for($i$$553_ty$$14$$ = 0;$i$$553_ty$$14$$ < $images$$14_tx$$14$$.length;$i$$553_ty$$14$$++) {
      var $imageDims_isImageRTL_source$$20$$ = "rtl" == $images$$14_tx$$14$$[$i$$553_ty$$14$$].dir;
      $isRTL$$15_radiusScale$$1$$ && $imageDims_isImageRTL_source$$20$$ ? $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$.push($images$$14_tx$$14$$[$i$$553_ty$$14$$]) : !$isRTL$$15_radiusScale$$1$$ && !$imageDims_isImageRTL_source$$20$$ && $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$.push($images$$14_tx$$14$$[$i$$553_ty$$14$$])
    }
    $images$$14_tx$$14$$ = 0 < $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$.length ? $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$ : $images$$14_tx$$14$$;
    for($i$$553_ty$$14$$ = 0;$i$$553_ty$$14$$ < $images$$14_tx$$14$$.length;$i$$553_ty$$14$$++) {
      var $height$$122_image$$18$$ = $images$$14_tx$$14$$[$i$$553_ty$$14$$], $imageDims_isImageRTL_source$$20$$ = $height$$122_image$$18$$.src, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$ = $height$$122_image$$18$$.width, $height$$122_image$$18$$ = $height$$122_image$$18$$.height, $isSvg$$1$$ = $imageDims_isImageRTL_source$$20$$ && -1 < $imageDims_isImageRTL_source$$20$$.search(".svg");
      0 == $i$$553_ty$$14$$ && ($refWidth$$1$$ = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$, $refHeight$$1$$ = $height$$122_image$$18$$);
      if($isSvg$$1$$ || $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$ >= $shape$$93_widthRes$$1$$ && $height$$122_image$$18$$ >= $heightRes$$1_scale$$49$$ || $i$$553_ty$$14$$ == $images$$14_tx$$14$$.length - 1) {
        var $shape$$93_widthRes$$1$$ = new D.$DvtImage$$($gauge$$45$$.$_context$, $imageDims_isImageRTL_source$$20$$, 0, 0, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$, $height$$122_image$$18$$), $matrix$$12$$ = new D.$DvtMatrix$$, $heightRes$$1_scale$$49$$ = window.Math.min($bounds$$111$$.$w$ / $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$, $bounds$$111$$.$h$ / $height$$122_image$$18$$), $images$$14_tx$$14$$ = ($bounds$$111$$.$w$ - $heightRes$$1_scale$$49$$ * $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$) / 
        2;
        $i$$553_ty$$14$$ = ($bounds$$111$$.$h$ - $heightRes$$1_scale$$49$$ * $height$$122_image$$18$$) / 2;
        $matrix$$12$$.scale($heightRes$$1_scale$$49$$, $heightRes$$1_scale$$49$$);
        $matrix$$12$$.translate($images$$14_tx$$14$$, $i$$553_ty$$14$$);
        $shape$$93_widthRes$$1$$.$setMatrix$($matrix$$12$$);
        $isSvg$$1$$ && D.$DvtAgent$$.$isPlatformWebkit$() && ($imageDims_isImageRTL_source$$20$$ = D.$DvtImageLoader$$.$loadImage$($gauge$$45$$.$_context$, $imageDims_isImageRTL_source$$20$$, D.$DvtObj$$.$createCallback$($shape$$93_widthRes$$1$$, $shape$$93_widthRes$$1$$.$__setDimensions$))) && $shape$$93_widthRes$$1$$.$__setDimensions$($imageDims_isImageRTL_source$$20$$);
        $bounds$$111$$.x += $images$$14_tx$$14$$;
        $bounds$$111$$.y += $i$$553_ty$$14$$;
        $bounds$$111$$.$w$ = $heightRes$$1_scale$$49$$ * $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$;
        $bounds$$111$$.$h$ = $heightRes$$1_scale$$49$$ * $height$$122_image$$18$$;
        !(0,window.isNaN)($backgroundOptions$$1$$.anchorX) && !(0,window.isNaN)($backgroundOptions$$1$$.anchorY) && ($backgroundOptions$$1$$._anchorX = $isRTL$$15_radiusScale$$1$$ ? $bounds$$111$$.x + $bounds$$111$$.$w$ - $bounds$$111$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$1$$ : $bounds$$111$$.x + $bounds$$111$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$1$$, $backgroundOptions$$1$$._anchorY = $bounds$$111$$.y + $bounds$$111$$.$h$ * $backgroundOptions$$1$$.anchorY / $refHeight$$1$$);
        $backgroundOptions$$1$$.metricLabelBounds && ($isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$ = {}, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$.width = $bounds$$111$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.width / $refWidth$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$.height = $bounds$$111$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.height / $refHeight$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$.y = $bounds$$111$$.y + 
        $bounds$$111$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.y / $refHeight$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$.x = $isRTL$$15_radiusScale$$1$$ ? $bounds$$111$$.x + $bounds$$111$$.$w$ - $bounds$$111$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$1$$ - $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$.width : $bounds$$111$$.x + $bounds$$111$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$1$$, $backgroundOptions$$1$$._metricLabelBounds = 
        $isTouchDevice$$1_locImages$$1_metLblBounds_width$$142$$);
        $isRTL$$15_radiusScale$$1$$ = window.Math.min($bounds$$111$$.$w$ / $refWidth$$1$$, $bounds$$111$$.$h$ / $refHeight$$1$$);
        $backgroundOptions$$1$$._radius = $backgroundOptions$$1$$.radius * $isRTL$$15_radiusScale$$1$$;
        $backgroundOptions$$1$$._tickLabelHeight = $backgroundOptions$$1$$.tickLabelHeight * $bounds$$111$$.$h$ / $refHeight$$1$$;
        $backgroundOptions$$1$$._tickLabelWidth = $backgroundOptions$$1$$.tickLabelWidth * $bounds$$111$$.$w$ / $refWidth$$1$$;
        return $shape$$93_widthRes$$1$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$46$$, $bounds$$112$$) {
  var $indicatorOptions$$ = $gauge$$46$$.$__getOptions$().indicator, $indicatorLength_source$$21$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$46$$, $bounds$$112$$), $heightRes$$2_shape$$94$$ = D.$DvtAgent$$.$isTouchDevice$() ? 2 * $indicatorLength_source$$21$$ : $indicatorLength_source$$21$$, $refWidth$$2$$, $refHeight$$2$$, $images$$15$$ = $indicatorOptions$$.images;
  if($images$$15$$ && 0 < $images$$15$$.length) {
    for(var $i$$554$$ = 0;$i$$554$$ < $images$$15$$.length;$i$$554$$++) {
      var $height$$123_image$$19$$ = $images$$15$$[$i$$554$$], $indicatorLength_source$$21$$ = $height$$123_image$$19$$.src, $width$$143$$ = $height$$123_image$$19$$.width, $height$$123_image$$19$$ = $height$$123_image$$19$$.height, $isSvg$$2$$ = $indicatorLength_source$$21$$ && -1 < $indicatorLength_source$$21$$.search(".svg");
      0 == $i$$554$$ && ($refWidth$$2$$ = $width$$143$$, $refHeight$$2$$ = $height$$123_image$$19$$);
      if($isSvg$$2$$ || $height$$123_image$$19$$ >= $heightRes$$2_shape$$94$$ || $i$$554$$ == $images$$15$$.length - 1) {
        return $heightRes$$2_shape$$94$$ = new D.$DvtImage$$($gauge$$46$$.$_context$, $indicatorLength_source$$21$$, 0, 0, $width$$143$$, $height$$123_image$$19$$), $isSvg$$2$$ && D.$DvtAgent$$.$isPlatformWebkit$() && D.$DvtImageLoader$$.$loadImage$($gauge$$46$$.$_context$, $indicatorLength_source$$21$$, D.$DvtObj$$.$createCallback$($heightRes$$2_shape$$94$$, $heightRes$$2_shape$$94$$.$__setDimensions$)) && ($heightRes$$2_shape$$94$$.$setWidth$($width$$143$$), $heightRes$$2_shape$$94$$.$setHeight$($height$$123_image$$19$$)), 
        !(0,window.isNaN)($indicatorOptions$$.anchorX) && !(0,window.isNaN)($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$143$$ / $refWidth$$2$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$123_image$$19$$ / $refHeight$$2$$), $heightRes$$2_shape$$94$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$47_startAngle$$15$$) {
  var $backgroundOptions$$2$$ = $gauge$$47_startAngle$$15$$.$__getOptions$().background;
  $gauge$$47_startAngle$$15$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$47_startAngle$$15$$.$_context$) ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle;
  return window.Math.PI * (90 - $gauge$$47_startAngle$$15$$) / 180
};
D.$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$48$$, $value$$100$$) {
  var $isRTL$$17_maxValue$$14_options$$171$$ = $gauge$$48$$.$__getOptions$(), $backgroundOptions$$3$$ = $isRTL$$17_maxValue$$14_options$$171$$.background, $minValue$$12_ratio$$9$$ = $isRTL$$17_maxValue$$14_options$$171$$.min, $isRTL$$17_maxValue$$14_options$$171$$ = $isRTL$$17_maxValue$$14_options$$171$$.max;
  $value$$100$$ = window.Math.max(window.Math.min($value$$100$$, $isRTL$$17_maxValue$$14_options$$171$$), $minValue$$12_ratio$$9$$);
  $minValue$$12_ratio$$9$$ = ($value$$100$$ - $minValue$$12_ratio$$9$$) / ($isRTL$$17_maxValue$$14_options$$171$$ - $minValue$$12_ratio$$9$$);
  $isRTL$$17_maxValue$$14_options$$171$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$48$$.$_context$);
  return window.Math.PI * (90 - (($isRTL$$17_maxValue$$14_options$$171$$ ? 180 - $backgroundOptions$$3$$.startAngle : $backgroundOptions$$3$$.startAngle) - $minValue$$12_ratio$$9$$ * ($isRTL$$17_maxValue$$14_options$$171$$ ? -$backgroundOptions$$3$$.angleExtent : $backgroundOptions$$3$$.angleExtent))) / 180
};
D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$49$$, $bounds$$113$$) {
  var $anchorY$$2_backgroundOptions$$4$$ = $gauge$$49$$.$__getOptions$().background, $anchorX$$2$$ = $anchorY$$2_backgroundOptions$$4$$._anchorX, $anchorY$$2_backgroundOptions$$4$$ = $anchorY$$2_backgroundOptions$$4$$._anchorY;
  return!(0,window.isNaN)($anchorX$$2$$) && !(0,window.isNaN)($anchorY$$2_backgroundOptions$$4$$) ? new D.$DvtPoint$$($anchorX$$2$$, $anchorY$$2_backgroundOptions$$4$$) : new D.$DvtPoint$$($bounds$$113$$.x + $bounds$$113$$.$w$ / 2, $bounds$$113$$.y + $bounds$$113$$.$h$ / 2)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$50$$, $bounds$$114$$) {
  var $radius$$15$$ = window.Math.min($bounds$$114$$.$w$, $bounds$$114$$.$h$) / 2;
  return $gauge$$50$$.$__getOptions$().background.indicatorLength * $radius$$15$$
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$51$$, $indicatorBounds$$1$$) {
  var $anchorY$$3_indicatorOptions$$1$$ = $gauge$$51$$.$__getOptions$().indicator, $anchorX$$3$$ = $anchorY$$3_indicatorOptions$$1$$._anchorX, $anchorY$$3_indicatorOptions$$1$$ = $anchorY$$3_indicatorOptions$$1$$._anchorY;
  return!(0,window.isNaN)($anchorX$$3$$) && !(0,window.isNaN)($anchorY$$3_indicatorOptions$$1$$) ? new D.$DvtPoint$$($anchorX$$3$$, $anchorY$$3_indicatorOptions$$1$$) : new D.$DvtPoint$$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$52$$, $bounds$$116$$, $indicatorBounds$$2$$) {
  return D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$52$$, $bounds$$116$$) / $indicatorBounds$$2$$.$h$
};
D.$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$53$$, $container$$120$$, $bounds$$117$$) {
  var $i$$555_options$$172$$ = $gauge$$53$$.$__getOptions$();
  if("on" == $i$$555_options$$172$$.metricLabel.rendered) {
    var $labelString$$4$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$555_options$$172$$.value, $gauge$$53$$), $cx$$41_label$$42$$ = $bounds$$117$$.x + $bounds$$117$$.$w$ / 2, $cy$$42_longestLabel$$2_size$$43$$ = $bounds$$117$$.y + $bounds$$117$$.$h$ / 2, $labelWidth$$3$$ = $bounds$$117$$.$w$, $labelHeight$$2$$ = $bounds$$117$$.$h$, $maxString$$2_metricLabelBounds$$ = $i$$555_options$$172$$.background._metricLabelBounds;
    $maxString$$2_metricLabelBounds$$ && ($cx$$41_label$$42$$ = $maxString$$2_metricLabelBounds$$.x + $maxString$$2_metricLabelBounds$$.width / 2, $cy$$42_longestLabel$$2_size$$43$$ = $maxString$$2_metricLabelBounds$$.y + $maxString$$2_metricLabelBounds$$.height / 2, $bounds$$117$$.$w$ = $maxString$$2_metricLabelBounds$$.width, $bounds$$117$$.$h$ = $maxString$$2_metricLabelBounds$$.height);
    $cx$$41_label$$42$$ = new D.$DvtOutputText$$($gauge$$53$$.$_context$, $labelString$$4$$, $cx$$41_label$$42$$, $cy$$42_longestLabel$$2_size$$43$$);
    !$i$$555_options$$172$$.metricLabel.style.$getStyle$("color") && $i$$555_options$$172$$.background._isDark && $i$$555_options$$172$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$41_label$$42$$.$setCSSStyle$($i$$555_options$$172$$.metricLabel.style);
    $cy$$42_longestLabel$$2_size$$43$$ = (0,window.parseInt)($i$$555_options$$172$$.metricLabel.style.$getFontSize$());
    if(!$cy$$42_longestLabel$$2_size$$43$$) {
      $cy$$42_longestLabel$$2_size$$43$$ = window.Math.max(D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$555_options$$172$$.max, $gauge$$53$$).length, D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$555_options$$172$$.min, $gauge$$53$$).length, $labelString$$4$$.length);
      $maxString$$2_metricLabelBounds$$ = "";
      "percent" == $i$$555_options$$172$$.metricLabel.textType && ($cy$$42_longestLabel$$2_size$$43$$ = window.Math.max(3, $labelString$$4$$.length), $maxString$$2_metricLabelBounds$$ += "%");
      for($i$$555_options$$172$$ = 0;$i$$555_options$$172$$ < $cy$$42_longestLabel$$2_size$$43$$;$i$$555_options$$172$$++) {
        $maxString$$2_metricLabelBounds$$ += "0"
      }
      $cx$$41_label$$42$$.$setTextString$($maxString$$2_metricLabelBounds$$);
      $cy$$42_longestLabel$$2_size$$43$$ = $cx$$41_label$$42$$.$getOptimalFontSize$($bounds$$117$$);
      $cx$$41_label$$42$$.$setTextString$($labelString$$4$$);
      $cx$$41_label$$42$$.$setFontSize$($cy$$42_longestLabel$$2_size$$43$$)
    }
    $cx$$41_label$$42$$.$alignCenter$();
    $cx$$41_label$$42$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($cx$$41_label$$42$$, $labelWidth$$3$$, $labelHeight$$2$$, $container$$120$$) && $cx$$41_label$$42$$.$isTruncated$() && $gauge$$53$$.$__getEventManager$().$associate$($cx$$41_label$$42$$, new D.$DvtSimpleObjPeer$$($labelString$$4$$))
  }
};
D.$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$54$$, $container$$121$$, $bounds$$118$$) {
  var $options$$173$$ = $gauge$$54$$.$__getOptions$(), $isRTL$$18$$ = D.$DvtAgent$$.$isRightToLeft$($gauge$$54$$.$_context$);
  if($options$$173$$.background.radius && $options$$173$$.background.majorTickCount) {
    var $radius$$16$$ = $options$$173$$.background._radius, $minValue$$13$$ = $options$$173$$.min, $maxValue$$15$$ = $options$$173$$.max, $majorTickCount$$1$$ = $options$$173$$.background.majorTickCount, $fontSize$$9_longestLabel$$3$$ = 12, $labelBounds$$2$$ = new D.$DvtRectangle$$($cx$$42_i$$556_labelValue$$2$$, $angleRads$$9_cy$$43$$, $bounds$$118$$.$w$, $bounds$$118$$.$h$), $maxString$$3_style$$93_x$$278$$ = $options$$173$$.metricLabel.style.$getStyle$("font-size");
    $options$$173$$.background._tickLabelHeight && !$maxString$$3_style$$93_x$$278$$ && ($labelBounds$$2$$.$h$ = $options$$173$$.background._tickLabelHeight);
    $options$$173$$.background._tickLabelWidth && !$maxString$$3_style$$93_x$$278$$ && ($labelBounds$$2$$.$w$ = $options$$173$$.background._tickLabelWidth);
    if(!$maxString$$3_style$$93_x$$278$$) {
      var $label$$43_labelString$$5$$ = new D.$DvtOutputText$$($gauge$$54$$.$_context$, "", $cx$$42_i$$556_labelValue$$2$$, $angleRads$$9_cy$$43$$), $fontSize$$9_longestLabel$$3$$ = window.Math.max(D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$173$$.max, $gauge$$54$$).length, D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$173$$.min, $gauge$$54$$).length), $maxString$$3_style$$93_x$$278$$ = "";
      "percent" == $options$$173$$.tickLabel.textType && ($fontSize$$9_longestLabel$$3$$ = window.Math.max(3, D.$DvtGaugeRenderer$$.$formatTickLabelValue$(100, $gauge$$54$$).length - 1), $maxString$$3_style$$93_x$$278$$ += "%");
      for(var $cx$$42_i$$556_labelValue$$2$$ = 0;$cx$$42_i$$556_labelValue$$2$$ < $fontSize$$9_longestLabel$$3$$;$cx$$42_i$$556_labelValue$$2$$++) {
        $maxString$$3_style$$93_x$$278$$ += "0"
      }
      $label$$43_labelString$$5$$.$setTextString$($maxString$$3_style$$93_x$$278$$);
      $fontSize$$9_longestLabel$$3$$ = $label$$43_labelString$$5$$.$getOptimalFontSize$($labelBounds$$2$$)
    }
    for($maxString$$3_style$$93_x$$278$$ = 0;$maxString$$3_style$$93_x$$278$$ < $majorTickCount$$1$$;$maxString$$3_style$$93_x$$278$$++) {
      $cx$$42_i$$556_labelValue$$2$$ = $minValue$$13$$ + window.Math.abs($maxValue$$15$$ - $minValue$$13$$) * $maxString$$3_style$$93_x$$278$$ / ($majorTickCount$$1$$ - 1);
      $isRTL$$18$$ && ($cx$$42_i$$556_labelValue$$2$$ = $minValue$$13$$ + window.Math.abs($maxValue$$15$$ - $minValue$$13$$) * ($majorTickCount$$1$$ - 1 - $maxString$$3_style$$93_x$$278$$) / ($majorTickCount$$1$$ - 1));
      var $label$$43_labelString$$5$$ = D.$DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$42_i$$556_labelValue$$2$$, $gauge$$54$$), $angleRads$$9_cy$$43$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$54$$, $cx$$42_i$$556_labelValue$$2$$), $anchor$$3$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$54$$, $bounds$$118$$), $cx$$42_i$$556_labelValue$$2$$ = $anchor$$3$$.x + $radius$$16$$ * window.Math.cos($angleRads$$9_cy$$43$$ - window.Math.PI / 2), $angleRads$$9_cy$$43$$ = $anchor$$3$$.y + 
      $radius$$16$$ * window.Math.sin($angleRads$$9_cy$$43$$ - window.Math.PI / 2), $label$$43_labelString$$5$$ = new D.$DvtOutputText$$($gauge$$54$$.$_context$, $label$$43_labelString$$5$$, $cx$$42_i$$556_labelValue$$2$$, $angleRads$$9_cy$$43$$);
      !$options$$173$$.tickLabel.style.$getStyle$("color") && $options$$173$$.background._isDark && $options$$173$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$43_labelString$$5$$.$setCSSStyle$($options$$173$$.tickLabel.style);
      $options$$173$$.tickLabel.style.$getStyle$("font-size") || $label$$43_labelString$$5$$.$setFontSize$($fontSize$$9_longestLabel$$3$$);
      $label$$43_labelString$$5$$.$alignCenter$();
      $label$$43_labelString$$5$$.$alignMiddle$();
      D.$DvtTextUtils$$.$fitText$($label$$43_labelString$$5$$, $labelBounds$$2$$.$w$, $labelBounds$$2$$.$h$, $container$$121$$) && $label$$43_labelString$$5$$.$isTruncated$() && $gauge$$54$$.$__getEventManager$().$associate$($label$$43_labelString$$5$$, new D.$DvtSimpleObjPeer$$($label$$43_labelString$$5$$.$_untruncatedTextString$))
    }
  }
};
D.$DvtDialGaugeIndicator$$ = function $$DvtDialGaugeIndicator$$$($context$$570$$) {
  this.Init($context$$570$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeIndicator$$, D.$DvtContainer$$, "DvtDialGaugeIndicator");
D.$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$7$$) {
  var $mat$$41$$ = new D.$DvtMatrix$$;
  $mat$$41$$.rotate($angleRads$$7$$);
  this.$setMatrix$($mat$$41$$);
  this.$_angleRads$ = $angleRads$$7$$
};
D.$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
D.$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$42$$) {
  $params$$42$$ && 1 == $params$$42$$.length && this.$setAngle$($params$$42$$[0])
};
D.$DvtRatingGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtRatingGauge", D.$DvtRatingGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGauge$$, D.$DvtGauge$$, "DvtRatingGauge");
D.$DvtRatingGauge$newInstance$$ = function $$DvtRatingGauge$newInstance$$$($context$$307$$, $callback$$66$$, $callbackObj$$42$$) {
  var $gauge$$4$$ = new D.$DvtRatingGauge$$;
  $gauge$$4$$.Init($context$$307$$, $callback$$66$$, $callbackObj$$42$$);
  return $gauge$$4$$
};
D.$DvtRatingGauge$$.newInstance = D.$DvtRatingGauge$newInstance$$;
D.$DvtRatingGauge$$.prototype.Init = function $$DvtRatingGauge$$$$Init$($context$$308$$, $callback$$67$$, $callbackObj$$43$$) {
  D.$DvtRatingGauge$$.$superclass$.Init.call(this, $context$$308$$, $callback$$67$$, $callbackObj$$43$$);
  this.$Defaults$ = new D.$DvtRatingGaugeDefaults$$
};
D.$DvtRatingGauge$$.prototype.$SetOptions$ = function $$DvtRatingGauge$$$$$SetOptions$$($options$$27$$) {
  D.$DvtRatingGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$27$$))
};
D.$DvtRatingGauge$$.prototype.$Render$ = function $$DvtRatingGauge$$$$$Render$$($container$$22$$, $width$$47$$, $height$$40$$) {
  var $outerGap$$ = this.$__getOptions$().__layout.outerGap, $maxValue$$2$$ = this.$Options$.max;
  this.$_size$ = window.Math.min($height$$40$$ - 2 * $outerGap$$, ($width$$47$$ - 2 * $outerGap$$) / $maxValue$$2$$);
  this.$_bounds$ = new D.$DvtRectangle$$((this.$Width$ - this.$_size$ * $maxValue$$2$$) / 2, $outerGap$$, this.$_size$ * $maxValue$$2$$, this.$Height$ - 2 * $outerGap$$);
  D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$22$$, $width$$47$$, $height$$40$$)
};
D.$DvtRatingGauge$$.prototype.$GetValueAt$ = function $$DvtRatingGauge$$$$$GetValueAt$$($x$$150$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$(this)) {
    $x$$150$$ = window.Math.max(window.Math.min($x$$150$$, this.$_bounds$.x + this.$_bounds$.$w$), this.$_bounds$.x);
    var $val$$67$$ = 0, $val$$67$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? window.Math.max((this.$_bounds$.x + this.$_bounds$.$w$ - $x$$150$$) / this.$_size$, this.$Options$.min) : window.Math.max(($x$$150$$ - this.$_bounds$.x) / this.$_size$, this.$Options$.min);
    return D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$67$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods___processHoverEnd$$ = function $$JSCompiler_StaticMethods___processHoverEnd$$$($JSCompiler_StaticMethods___processHoverEnd$self$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverEnd$self$$, $JSCompiler_StaticMethods___processHoverEnd$self$$.$Options$.value, "render")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeStart$ = function $$DvtRatingGauge$$$$$__processValueChangeStart$$($x$$153$$, $y$$126$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, this.$GetValueAt$($x$$153$$, $y$$126$$), "hover")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeMove$ = function $$DvtRatingGauge$$$$$__processValueChangeMove$$($x$$154$$, $y$$127$$) {
  var $value$$64$$ = this.$GetValueAt$($x$$154$$, $y$$127$$);
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, $value$$64$$, "hover");
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$Options$.value, $value$$64$$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeEnd$ = function $$DvtRatingGauge$$$$$__processValueChangeEnd$$($x$$155$$, $y$$128$$) {
  var $oldValue$$1$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$155$$, $y$$128$$);
  this.$Options$.changed = D.$JSCompiler_alias_TRUE$$;
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$1$$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$));
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$1$$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods___updateClipRects$$ = function $$JSCompiler_StaticMethods___updateClipRects$$$($JSCompiler_StaticMethods___updateClipRects$self$$, $selContainer_unselContainer_value$$65$$, $proc_selClip_unselClip$$, $container$$23_hoverContainer$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$23_hoverContainer$$ || ($container$$23_hoverContainer$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$2$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods___updateClipRects$self$$.$_context$);
    $selContainer_unselContainer_value$$65$$ = window.Math.max(window.Math.min($selContainer_unselContainer_value$$65$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$33_hoverClip$$ = 0, $b$$25$$ = $selContainer_unselContainer_value$$65$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $c$$14$$ = $selContainer_unselContainer_value$$65$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$;
    "render" == $proc_selClip_unselClip$$ && ($a$$33_hoverClip$$ = $selContainer_unselContainer_value$$65$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $b$$25$$ = 0);
    $isRTL$$2$$ ? ($selContainer_unselContainer_value$$65$$ = $container$$23_hoverContainer$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$14$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer_unselContainer_value$$65$$, $proc_selClip_unselClip$$), $selContainer_unselContainer_value$$65$$ = $container$$23_hoverContainer$$.$getChildAt$(1), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$14$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$33_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer_unselContainer_value$$65$$, $proc_selClip_unselClip$$), $container$$23_hoverContainer$$ = $container$$23_hoverContainer$$.$getChildAt$(2), $a$$33_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$33_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$14$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$25$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$)) : ($selContainer_unselContainer_value$$65$$ = $container$$23_hoverContainer$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $c$$14$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$14$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer_unselContainer_value$$65$$, 
    $proc_selClip_unselClip$$), $selContainer_unselContainer_value$$65$$ = $container$$23_hoverContainer$$.$getChildAt$(1), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$33_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), 
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer_unselContainer_value$$65$$, $proc_selClip_unselClip$$), $container$$23_hoverContainer$$ = $container$$23_hoverContainer$$.$getChildAt$(2), $a$$33_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$33_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, 
    $b$$25$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$));
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($container$$23_hoverContainer$$, $a$$33_hoverClip$$)
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
D.$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$42$$, $container$$117_tooltip$$43$$, $bounds$$108_width$$140$$, $height$$120_unselectedOptions$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$42$$)) {
    var $options$$169$$ = $gauge$$42$$.$__getOptions$(), $outerGap$$3_selectedOptions$$ = $options$$169$$.__layout.outerGap, $maxValue$$13_overlayRect$$1$$ = $options$$169$$.max, $size$$42$$ = window.Math.min($height$$120_unselectedOptions$$ - 2 * $outerGap$$3_selectedOptions$$, ($bounds$$108_width$$140$$ - 2 * $outerGap$$3_selectedOptions$$) / $maxValue$$13_overlayRect$$1$$);
    $bounds$$108_width$$140$$ = new D.$DvtRectangle$$(($bounds$$108_width$$140$$ - $size$$42$$ * $maxValue$$13_overlayRect$$1$$) / 2, $outerGap$$3_selectedOptions$$, $size$$42$$ * $maxValue$$13_overlayRect$$1$$, $height$$120_unselectedOptions$$ - 2 * $outerGap$$3_selectedOptions$$);
    $height$$120_unselectedOptions$$ = {value:0, type:$options$$169$$.unselectedState.shape, color:$options$$169$$.unselectedState.color, borderColor:$options$$169$$.unselectedState.borderColor, visualEffects:$options$$169$$.visualEffects};
    var $outerGap$$3_selectedOptions$$ = {value:0, type:$options$$169$$.selectedState.shape, color:$options$$169$$.selectedState.color, borderColor:$options$$169$$.selectedState.borderColor, visualEffects:$options$$169$$.visualEffects}, $changedOptions$$ = {value:0, type:$options$$169$$.changedState.shape, color:$options$$169$$.changedState.color, borderColor:$options$$169$$.changedState.borderColor, visualEffects:$options$$169$$.visualEffects}, $hoverOptions$$ = {value:0, type:$options$$169$$.hoverState.shape, 
    color:$options$$169$$.hoverState.color, borderColor:$options$$169$$.hoverState.borderColor, visualEffects:$options$$169$$.visualEffects};
    "dot" == $options$$169$$.unselectedState.shape && ($height$$120_unselectedOptions$$.type = "circle", $height$$120_unselectedOptions$$.visualEffects = "none", $height$$120_unselectedOptions$$.size = 0.05);
    var $unselContainer$$1$$ = new D.$DvtContainer$$($gauge$$42$$.$_context$);
    $container$$117_tooltip$$43$$.$addChild$($unselContainer$$1$$);
    var $selContainer$$1$$ = new D.$DvtContainer$$($gauge$$42$$.$_context$);
    $container$$117_tooltip$$43$$.$addChild$($selContainer$$1$$);
    var $hoverContainer$$1$$ = new D.$DvtContainer$$($gauge$$42$$.$_context$);
    $container$$117_tooltip$$43$$.$addChild$($hoverContainer$$1$$);
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($gauge$$42$$, $options$$169$$.value, "render", $container$$117_tooltip$$43$$);
    for(var $i$$552$$ = 0;$i$$552$$ < $maxValue$$13_overlayRect$$1$$;$i$$552$$++) {
      if("none" != $options$$169$$.unselectedState.shape) {
        var $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$42$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
        $unselContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$108_width$$140$$.x + $i$$552$$ * $size$$42$$, $bounds$$108_width$$140$$.y + $bounds$$108_width$$140$$.$h$ / 2 - $size$$42$$ / 2);
        -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $height$$120_unselectedOptions$$.type) && ($height$$120_unselectedOptions$$.type = "star");
        $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($height$$120_unselectedOptions$$, $size$$42$$, $size$$42$$)
      }
      $options$$169$$.changed ? ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$42$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$108_width$$140$$.x + $i$$552$$ * $size$$42$$, $bounds$$108_width$$140$$.y + $bounds$$108_width$$140$$.$h$ / 
      2 - $size$$42$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedOptions$$.type) && ($changedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedOptions$$, $size$$42$$, $size$$42$$)) : ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$42$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), 
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$108_width$$140$$.x + $i$$552$$ * $size$$42$$, $bounds$$108_width$$140$$.y + $bounds$$108_width$$140$$.$h$ / 2 - $size$$42$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $outerGap$$3_selectedOptions$$.type) && ($outerGap$$3_selectedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($outerGap$$3_selectedOptions$$, 
      $size$$42$$, $size$$42$$));
      $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$42$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $hoverContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$108_width$$140$$.x + $i$$552$$ * $size$$42$$, $bounds$$108_width$$140$$.y + $bounds$$108_width$$140$$.$h$ / 2 - $size$$42$$ / 2);
      -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $hoverOptions$$.type) && ($hoverOptions$$.type = "star");
      $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($hoverOptions$$, $size$$42$$, $size$$42$$)
    }
    $maxValue$$13_overlayRect$$1$$ = new D.$DvtRect$$($gauge$$42$$.$_context$, $bounds$$108_width$$140$$.x, $bounds$$108_width$$140$$.y, $bounds$$108_width$$140$$.$w$, $bounds$$108_width$$140$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($maxValue$$13_overlayRect$$1$$);
    $container$$117_tooltip$$43$$.$addChild$($maxValue$$13_overlayRect$$1$$);
    ($container$$117_tooltip$$43$$ = $options$$169$$.shortDesc) && $gauge$$42$$.$__getEventManager$().$associate$($maxValue$$13_overlayRect$$1$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$117_tooltip$$43$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$42$$, $container$$117_tooltip$$43$$, new D.$DvtRectangle$$(0, 0, $bounds$$108_width$$140$$, $height$$120_unselectedOptions$$))
  }
};
D.$DvtRatingGaugeEventManager$$ = function $$DvtRatingGaugeEventManager$$$($gauge$$5$$) {
  this.Init($gauge$$5$$.$_context$, $gauge$$5$$.$__dispatchEvent$, $gauge$$5$$);
  this.$_gauge$ = $gauge$$5$$;
  this.$_bValueChanged$ = this.$isEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isIE$ = D.$DvtAgent$$.$isPlatformIE$();
  this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeEventManager$$, D.$DvtGaugeEventManager$$, "DvtRatingGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$471$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ && !this.$_bValueChanged$) {
    var $coords$$9$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$471$$.pageX, $event$$471$$.pageY), $JSCompiler_StaticMethods___processHoverStart$self$$inline_5632$$ = this.$_gauge$;
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverStart$self$$inline_5632$$, $JSCompiler_StaticMethods___processHoverStart$self$$inline_5632$$.$GetValueAt$($coords$$9$$.x, $coords$$9$$.y), "hover");
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$471$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$472$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    if(this.$_isIE$ && this.$_bValueChanged$ && this.$_stopAutoMouseOut$) {
      this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$;
      return
    }
    (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$472$$.pageX, $event$$472$$.pageY);
    (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$);
    this.$_bValueChanged$ = D.$JSCompiler_alias_FALSE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$472$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$11_event$$473$$) {
  this.$_bValueChanged$ || (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$11_event$$473$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$11_event$$473$$.pageX, $coords$$11_event$$473$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$11_event$$473$$.x, $coords$$11_event$$473$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$11_event$$473$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$12_event$$474$$) {
  this.$isEditing$ && (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$12_event$$474$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$12_event$$474$$.pageX, $coords$$12_event$$474$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$12_event$$474$$.x, $coords$$12_event$$474$$.y), (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$), this.$_bValueChanged$ = D.$JSCompiler_alias_TRUE$$, 
  this.$_isIE$ && (this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_TRUE$$)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$12_event$$474$$))
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
});