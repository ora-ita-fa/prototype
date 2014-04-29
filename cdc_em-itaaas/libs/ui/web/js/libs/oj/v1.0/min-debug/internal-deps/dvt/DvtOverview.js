define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTimeUtils$$ = {$supportsTouch$:function $$DvtTimeUtils$$$$supportsTouch$$() {
  return D.$DvtAgent$$.$isTouchDevice$()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$2_startTime$$5$$, $endTime$$5$$, $number$$4_time$$12$$, $width$$132$$) {
  $number$$4_time$$12$$ = ($number$$4_time$$12$$ - $denominator$$2_startTime$$5$$) * $width$$132$$;
  $denominator$$2_startTime$$5$$ = $endTime$$5$$ - $denominator$$2_startTime$$5$$;
  return 0 == $number$$4_time$$12$$ || 0 == $denominator$$2_startTime$$5$$ ? 0 : $number$$4_time$$12$$ / $denominator$$2_startTime$$5$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$6$$, $endTime$$6_number$$5$$, $pos$$52$$, $width$$133$$) {
  $endTime$$6_number$$5$$ = $pos$$52$$ * ($endTime$$6_number$$5$$ - $startTime$$6$$);
  return 0 == $endTime$$6_number$$5$$ || 0 == $width$$133$$ ? $startTime$$6$$ : $endTime$$6_number$$5$$ / $width$$133$$ + $startTime$$6$$
};
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$565$$, $callback$$115$$, $callbackObj$$87$$) {
  this.Init($context$$565$$, $callback$$115$$, $callbackObj$$87$$)
};
(0,D.$goog$exportSymbol$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$566$$, $callback$$116$$, $callbackObj$$88$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$566$$);
  this.$_callback$ = $callback$$116$$;
  this.$_callbackObj$ = $callbackObj$$88$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$) {
    D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, 
    this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandleMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleMouseUp$, D.$JSCompiler_alias_FALSE$$, 
    this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandleMouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$27$$, $end$$19$$) {
  var $viewportStart$$ = this.$getDatePosition$($start$$27$$), $slidingWindow$$1_viewportEnd$$ = this.$getDatePosition$($end$$19$$);
  if(!($viewportStart$$ < this.$_leftMargin$ || $slidingWindow$$1_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this))) {
    var $size$$29$$ = window.Math.max($slidingWindow$$1_viewportEnd$$ - $viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this));
    0 < $size$$29$$ && (0 <= $viewportStart$$ && $slidingWindow$$1_viewportEnd$$ <= this.$Width$) && ($slidingWindow$$1_viewportEnd$$ = this.$getChildAt$(1), this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow$$1_viewportEnd$$, this.$Width$ - ($viewportStart$$ + $size$$29$$)) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow$$1_viewportEnd$$, $viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow$$1_viewportEnd$$, 
    $size$$29$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this))
  }
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : -1 != $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$.indexOf("zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$) {
  if($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ == D.$JSCompiler_alias_NULL$$) {
    var $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = this.$_start$, $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = this.$_end$, $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = 
    this.$getChildAt$(1), $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$);
    $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ != D.$JSCompiler_alias_NULL$$ && 0 != $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ && (this.$_renderStart$ = D.$DvtTimeUtils$$.$getPositionDate$($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, 
    $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$, $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$, this.$Width$));
    this.$removeChildren$()
  }
  $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ != D.$JSCompiler_alias_NULL$$ && $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$ != D.$JSCompiler_alias_NULL$$ && (this.$Width$ = $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, this.$Height$ = $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$);
  $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ && ($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = this.$Parse$($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$), 
  this.$_applyParsedProperties$($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$));
  $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$;
  this.$createBackground$($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$);
  if($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$) {
    $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = ($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = this.$isVertical$()) ? new D.$DvtRect$$(this.$_context$, 
    0, 0, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, 0, "window") : new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, "window");
    $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$) {
        var $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ = ($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ - 36) / 2, $leftHandle$$inline_5547_leftHandleCmds$$inline_5539$$ = window.DvtPathUtils.moveTo($handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$, 0) + window.DvtPathUtils.$quadTo$($handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 3, 
        6, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 8, 8) + window.DvtPathUtils.lineTo($handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 28, 8) + window.DvtPathUtils.$quadTo$($handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 33, 6, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 36, 0);
        window.DvtPathUtils.closePath();
        $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ = window.DvtPathUtils.moveTo($handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$, 0) + window.DvtPathUtils.$quadTo$($handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 3, -6, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 8, -8) + window.DvtPathUtils.lineTo($handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 
        28, -8) + window.DvtPathUtils.$quadTo$($handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 33, -6, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 36, 0);
        window.DvtPathUtils.closePath();
        var $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, "lhb"), $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$ = 
        new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, "rhb"), $cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $leftGrippy$$inline_5544$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, 10), $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, 
          10)
        }else {
          $leftGrippy$$inline_5544$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$), $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$)
        }
      }else {
        $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ = ($bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$ - 36) / 2, $leftHandle$$inline_5547_leftHandleCmds$$inline_5539$$ = window.DvtPathUtils.moveTo(0, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$) + window.DvtPathUtils.$quadTo$(6, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 3, 8, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 
        8) + window.DvtPathUtils.lineTo(8, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 28) + window.DvtPathUtils.$quadTo$(6, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 33, 0, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 36), window.DvtPathUtils.closePath(), $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ = 
        window.DvtPathUtils.moveTo(0, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$) + window.DvtPathUtils.$quadTo$(-6, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 3, -8, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 8) + window.DvtPathUtils.lineTo(-8, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 28) + window.DvtPathUtils.$quadTo$(-6, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 
        33, 0, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ + 36), window.DvtPathUtils.closePath(), $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = new D.$DvtRect$$(this.$_context$, 0 - $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
        0, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, "lhb"), $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$ = new D.$DvtRect$$(this.$_context$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
        0, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, "rhb"), $cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$ = "col-resize", this.$_handleBackgroundImage$ ? ($leftGrippy$$inline_5544$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$), 
        $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$)) : ($leftGrippy$$inline_5544$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$), $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, 
        $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$))
      }
      $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$);
      $leftHandle$$inline_5547_leftHandleCmds$$inline_5539$$ = new D.$DvtPath$$(this.$_context$, $leftHandle$$inline_5547_leftHandleCmds$$inline_5539$$, "lh");
      $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ = new D.$DvtPath$$(this.$_context$, $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$, "rh");
      $leftHandle$$inline_5547_leftHandleCmds$$inline_5539$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_5547_leftHandleCmds$$inline_5539$$.$setSolidStroke$(this.$_handleFillColor$);
      $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$.$setSolidFill$(this.$_handleFillColor$);
      $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_5547_leftHandleCmds$$inline_5539$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$));
      $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$.setCursor($cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$);
      $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$.setCursor($cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$);
      $leftHandle$$inline_5547_leftHandleCmds$$inline_5539$$.setCursor($cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$);
      $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$.setCursor($cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$);
      $leftGrippy$$inline_5544$$.setCursor($cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$);
      $handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$.setCursor($cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$);
      $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$addChild$($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$);
      $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$addChild$($leftHandle$$inline_5547_leftHandleCmds$$inline_5539$$);
      $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$addChild$($leftGrippy$$inline_5544$$);
      $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$addChild$($handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$);
      $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$addChild$($end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$);
      $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$addChild$($handleX$$inline_5538_handleY$$inline_5546_rightGrippy$$inline_5545$$)
    }
    $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.setCursor("move");
    this.$addChild$($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$);
    $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ ? new D.$DvtLine$$(this.$_context$, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ - 
    this.$getTimeAxisWidth$(), 0, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ - this.$getTimeAxisWidth$(), $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, "tab") : "above" == this.$_overviewPosition$ ? new D.$DvtLine$$(this.$_context$, 0, this.$getTimeAxisHeight$(), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, 
    this.$getTimeAxisHeight$(), "tab") : new D.$DvtLine$$(this.$_context$, 0, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$ - this.$getTimeAxisHeight$(), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$ - this.$getTimeAxisHeight$(), "tab");
    $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$);
    this.$addChild$($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$);
    this.$isLeftAndRightFilterRendered$() && ($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ ? ($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = new D.$DvtRect$$(this.$_context$, 
    0, 0, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, 0, "lbg"), $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, 
    0, "rbg")) : ($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, "lbg"), $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, "rbg")), $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$), 
    $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$), D.$DvtTimeUtils$$.$supportsTouch$() && $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ != 
    D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ ? ($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, "lbgrh"), $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, "rbgrh")) : ($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, "lbgrh"), $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, "rbgrh")), $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$.$setSolidFill$(this.$_leftFilterPanelColor$, 
    0), this.$addChild$($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$), $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$.$setSolidFill$(this.$_rightFilterPanelColor$, 
    0), this.$addChild$($actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$)))
  }
  this.$updateTimeAxis$($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$);
  if(this.$_formattedTimeRanges$ != D.$JSCompiler_alias_NULL$$) {
    for($actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = 0;$actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ < this.$_formattedTimeRanges$.length;$actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$++) {
      $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = this.$_formattedTimeRanges$[$actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$], $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = 
      $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, $cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$ = 
      (0,window.parseInt)($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$.$getAttr$("rs"), 10), $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ = (0,window.parseInt)($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$.$getAttr$("re"), 
      10), $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$.$getAttr$("c"), $cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$ != D.$JSCompiler_alias_NULL$$ && $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ != 
      D.$JSCompiler_alias_NULL$$ && ($handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$ = this.$getDatePosition$($cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$), $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ = 
      this.$getDatePosition$($end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$) - $cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$, this.$isRTL$() && ($cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$ = $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$ - $cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$ - 
      $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$), $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = this.$isVertical$() ? new D.$DvtRect$$(this.$_context$, 0, $cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$, 
      $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ - this.$getTimeAxisWidth$(), $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$, "ftr") : new D.$DvtRect$$(this.$_context$, $cursor$$inline_5543_rangeStart$$inline_9711_rangeStart_pos$$inline_9715$$, 
      "above" == this.$_overviewPosition$ ? this.$getTimeAxisHeight$() : 0, $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$, $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ - this.$getTimeAxisHeight$(), "ftr"), $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ != 
      D.$JSCompiler_alias_NULL$$ && $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$.$setSolidFill$($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$, 0.4), $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$.setCursor("move"), 
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$), this.$addChild$($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$))
    }
  }
  this.$_currentTime$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = 
  new D.$DvtLine$$(this.$_context$, 0, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ - $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$), 
  $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = new D.$DvtLine$$(this.$_context$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
  0, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, "ocd")), $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$), this.$addChild$($actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$));
  this.$parseDataXML$($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$);
  $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ && ($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = 
  $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$getY$(), $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$getY$() + 
  $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.getHeight() - 1, this.$isFlashEnvironment$() || D.$DvtAgent$$.$isPlatformWebkit$() ? ($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = 
  0, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$ = $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ - 1) : ($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = 1, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$ = 
  $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$), $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = new D.$DvtLine$$(this.$_context$, 0, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, 
  $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, "lh"), $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = new D.$DvtLine$$(this.$_context$, 
  0, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
  "rh"), $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, 0, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, 
  $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, "ltb"), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, 
  $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, 
  "rtb"), $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
  "bb"), $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, 
  $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, "tb")) : ($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = 
  1, this.$isFlashEnvironment$() && ($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = 0), $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$ - 
  1, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$getX$(), $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$ = 
  $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$getX$() + $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.getWidth() - 1, $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = 
  new D.$DvtLine$$(this.$_context$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, 
  $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, "lh"), $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, 
  $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
  "rh"), $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ = new D.$DvtLine$$(this.$_context$, 0, window.Math.max(0, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ - 1), $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ + 
  1, window.Math.max(0, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ - 1), "ltb"), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$ - 1, window.Math.max(0, 
  $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ - 1), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, window.Math.max(0, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ - 
  1), "rtb"), $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
  $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, "bb"), $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = 
  new D.$DvtLine$$(this.$_context$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, $handleSize$$inline_5535_right$$inline_5575_rightHandleBackground$$inline_5542_size$$inline_9714$$, 
  $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$), "none" != this.$_windowBorderLeftStyle$ && $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$), "none" != this.$_windowBorderRightStyle$ && $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$.$setSolidStroke$(this.$_borderTopColor$), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$), 
  this.$addChild$($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$), "none" != this.$_windowBorderTopStyle$ && $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$), this.$isFlashEnvironment$() && ($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ = this.$isVertical$() ? window.DvtPathUtils.moveTo(6, 0) + window.DvtPathUtils.lineTo(0, 5) + window.DvtPathUtils.lineTo(5, 5) + window.DvtPathUtils.lineTo(5, 
  17) + window.DvtPathUtils.lineTo(0, 17) + window.DvtPathUtils.lineTo(6, 22) + window.DvtPathUtils.lineTo(12, 17) + window.DvtPathUtils.lineTo(7, 17) + window.DvtPathUtils.lineTo(7, 5) + window.DvtPathUtils.lineTo(12, 5) + window.DvtPathUtils.closePath() : window.DvtPathUtils.moveTo(5, 0) + window.DvtPathUtils.lineTo(0, 6) + window.DvtPathUtils.lineTo(5, 12) + window.DvtPathUtils.lineTo(5, 7) + window.DvtPathUtils.lineTo(17, 7) + window.DvtPathUtils.lineTo(17, 12) + window.DvtPathUtils.lineTo(22, 
  6) + window.DvtPathUtils.lineTo(17, 0) + window.DvtPathUtils.lineTo(17, 4) + window.DvtPathUtils.lineTo(5, 4) + window.DvtPathUtils.lineTo(5, 0) + window.DvtPathUtils.closePath(), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ = new D.$DvtPath$$(this.$_context$, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, 
  "arr"), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$.$setSolidFill$("#ffffff"), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$.$setSolidStroke$("#000000"), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), 
  this.$addChild$($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$), this.$_resizeArrow$ = $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$), $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = this.$isVertical$(), 
  $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$ = this.$getChildAt$(1), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = 
  $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ ? this.$Height$ : this.$Width$, $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = this.$_width$, $color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$ = 
  this.$_start$, $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = this.$_renderStart$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$, $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$, 0, $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$), 
  $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$ = D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_9713_elem$$inline_9708_leftHandleBackground$$inline_5541_rightBackground$$inline_5551_rightHandle$$inline_5577_slidingWindow$$2_start$$inline_5593$$, $end$$inline_5594_leftTopBar$$inline_5578_rangeEnd$$inline_9712_rangeWidth$$inline_9716_rightHandle$$inline_5548_rightHandleCmds$$inline_5540_slidingWindowPos$$, 
  $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, $end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$), $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = 
  this.$getDatePosition$($day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$), $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = window.Math.min($actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
  this.$getDatePosition$($end$$20_height$$inline_9710_leftBackground$$inline_5550_leftHandle$$inline_5576_rangeEndTime$$inline_5597_slidingWindow$$inline_5534_slidingWindow$$inline_5571_timeAxisTopBar$$inline_5549_timelineWidth$$inline_5592$$)), $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = this.$getDatePosition$($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$), 
  $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ -= $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, 
  $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ - $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ - $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$) : 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$), 
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$ = this.$_width$, $interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$ = this.$_start$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$ = 
  this.$_end$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
  1, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$), $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, 
  2, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$), $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, 
  $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$, $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$), 
  this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$270_props$$21_renderStart$$inline_5595_renderStartPos$$inline_5600_start$$inline_9722_top$$inline_5572_topBar$$inline_5581_vertical$$inline_5588$$, $actualSize$$inline_5591_bottom$$inline_5573_end$$inline_9723_handleStart$$inline_5536_i$$inline_5560_line$$inline_5566_newWidth$$inline_5601_rangeEndPos$$inline_5599_rightBackgroundResizeHandle$$inline_5553_time_pos$$inline_5565$$, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$, 
  $bottomBar$$inline_5580_height$$101_timelineWidth$$inline_9721_window$$inline_5589$$) - $day1$$inline_9724_displayable$$inline_9717_left$$inline_5574_leftBackgroundResizeHandle$$inline_5552_pos1$$inline_9726_rangeStartPos$$inline_5598_rangeStartTime$$inline_5596_start$$28_vertical$$inline_5533_width$$inline_9709$$);
  this.$_initialFocusTime$ != D.$JSCompiler_alias_NULL$$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && ($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ = this.$_initPos$ / this.$_increment$, this.$isRTL$() && ($actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$ = 0 - $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$), 
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$inline_5605_arrow$$inline_5585_arrowCmds$$inline_5584_day2$$inline_9725_rightTopBar$$inline_5579_size$$inline_5590_width$$118$$))
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$272$$) {
  return this.$getParser$($obj$$272$$).parse($obj$$272$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$22$$) {
  this.$_start$ = $props$$22$$.start;
  this.$_end$ = $props$$22$$.end;
  this.$_width$ = $props$$22$$.width;
  this.$_renderStart$ = $props$$22$$.$renderStart$;
  this.$_currentTime$ = $props$$22$$.currentTime;
  this.$_initialFocusTime$ = $props$$22$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$22$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$22$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$22$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$22$$.orientation;
  this.$_overviewPosition$ = $props$$22$$.$overviewPosition$;
  this.$_isRtl$ = $props$$22$$.$isRtl$;
  $props$$22$$.$featuresOff$ != D.$JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $props$$22$$.$featuresOff$.split(" "));
  $props$$22$$.$minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ && 0 < $props$$22$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$22$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$22$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$22$$.$timeAxisInfo$;
  $props$$22$$.$timeAxisInfo$ != D.$JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$22$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$22$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$22$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$22$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$22$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$22$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$22$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$22$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$22$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$22$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$22$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$22$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$22$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$22$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$22$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$22$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$22$$.$handleWidth$;
  this.$_handleHeight$ = $props$$22$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$22$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$22$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$22$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$22$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$22$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$22$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$22$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$22$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$22$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$12$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$12$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$42$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$42$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return!this.$isVertical$() && "true" == this.$_isRtl$
};
D.$JSCompiler_prototypeAlias$$.$isVertical$ = function $$JSCompiler_prototypeAlias$$$$isVertical$$() {
  return"vertical" == this.$_orientation$
};
D.$JSCompiler_StaticMethods_getOverviewSize$$ = function $$JSCompiler_StaticMethods_getOverviewSize$$$($JSCompiler_StaticMethods_getOverviewSize$self$$) {
  return $JSCompiler_StaticMethods_getOverviewSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getOverviewSize$self$$.$Height$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getOverviewSize$self$$.$Width$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMaximumPosition$$ = function $$JSCompiler_StaticMethods_getMaximumPosition$$$($JSCompiler_StaticMethods_getMaximumPosition$self$$) {
  return $JSCompiler_StaticMethods_getMaximumPosition$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Height$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Width$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMinimumWindowSize$$ = function $$JSCompiler_StaticMethods_getMinimumWindowSize$$$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$) {
  return $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ : $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$, $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_end$, 
  $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$ + $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_getMinimumWindowSize$self$$)), $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$) : 10
};
D.$JSCompiler_StaticMethods_getHandleStart$$ = function $$JSCompiler_StaticMethods_getHandleStart$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? (0,D.$JSCompiler_StaticMethods_getHandleSize$$)() / 2 : 0
};
D.$JSCompiler_StaticMethods_getHandleSize$$ = function $$JSCompiler_StaticMethods_getHandleSize$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? 30 : 10
};
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$23$$) {
  var $id$$201$$ = $drawable$$23$$.getId();
  return"lh" == $id$$201$$ || "rh" == $id$$201$$ || "lhb" == $id$$201$$ || "rhb" == $id$$201$$ || "grpy" == $id$$201$$ || "lbgrh" == $id$$201$$ || "rbgrh" == $id$$201$$ || $drawable$$23$$.getParent() != D.$JSCompiler_alias_NULL$$ && "grpy" == $drawable$$23$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$) {
    var $width$$119$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$119$$) && $width$$119$$ < this.$Width$ ? $width$$119$$ : 40
  }
  return this.$_timeAxisWidth$
};
D.$DvtOverview$$.prototype.$getTimeAxisHeight$ = function $$DvtOverview$$$$$getTimeAxisHeight$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisHeight$ == D.$JSCompiler_alias_NULL$$) {
    var $height$$102$$ = (0,window.parseInt)(this.$_timeAxisInfo$.height, 10);
    this.$_timeAxisHeight$ = !(0,window.isNaN)($height$$102$$) && $height$$102$$ < this.$Height$ ? $height$$102$$ : 20
  }
  return this.$_timeAxisHeight$
};
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$455$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$455$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$455$$.targetTouches.length ? $event$$455$$.targetTouches[0].pageX : D.$JSCompiler_alias_NULL$$ : $event$$455$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$456$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$456$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$456$$.targetTouches.length ? $event$$456$$.targetTouches[0].pageY : D.$JSCompiler_alias_NULL$$ : $event$$456$$.pageY
};
D.$DvtOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_StaticMethods_getLeftBackground$$ = function $$JSCompiler_StaticMethods_getLeftBackground$$$($JSCompiler_StaticMethods_getLeftBackground$self$$) {
  return $JSCompiler_StaticMethods_getLeftBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getLeftBackground$self$$.$getChildAt$(3) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackground$$ = function $$JSCompiler_StaticMethods_getRightBackground$$$($JSCompiler_StaticMethods_getRightBackground$self$$) {
  return $JSCompiler_StaticMethods_getRightBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getRightBackground$self$$.$getChildAt$(4) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$ = function $$JSCompiler_StaticMethods_getRightBackgroundHandle$$$($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) ? $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$getChildAt$(6) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$10$$, $pos1$$1$$, $pos2$$1$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$1$$ && $line$$10$$.$setY1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$10$$.$setY2$($pos2$$1$$)) : (-1 != $pos1$$1$$ && $line$$10$$.$setX1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$10$$.$setX2$($pos2$$1$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$11$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$11$$.$getY1$() : $line$$11$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$457_target$$99$$) {
  $event$$457_target$$99$$ = $event$$457_target$$99$$.target;
  if($event$$457_target$$99$$ != D.$JSCompiler_alias_NULL$$) {
    var $id$$202$$ = $event$$457_target$$99$$.getId();
    if($id$$202$$ == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    if("_border" == $id$$202$$.substr($id$$202$$.length - 7)) {
      return this.$getChildAfter$($event$$457_target$$99$$)
    }
    if("tick" != $id$$202$$.substr(0, 4) && "ltb" != $id$$202$$ && "rtb" != $id$$202$$ && "bb" != $id$$202$$ && "tab" != $id$$202$$) {
      return $event$$457_target$$99$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$24$$) {
  return"window" == $drawable$$24$$.getId() || "ftr" == $drawable$$24$$.getId() || "sta" == $drawable$$24$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$24$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$120$$, $height$$103$$) {
  var $background$$10$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$120$$, $height$$103$$, "bg");
  $background$$10$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$10$$);
  this.$addChild$($background$$10$$);
  return $background$$10$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self$$, $width$$122$$, $height$$105$$) {
  return new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self$$.$_context$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleBackgroundImage$, ($width$$122$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$) / 2, ($height$$105$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$, "grpy")
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, "grpy"), $color$$56$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$1$$ = 8 + $handlePos$$, $starty$$ = 3, $i$$547$$ = 0;9 > $i$$547$$;$i$$547$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 2 * $i$$547$$, $starty$$, $startx$$1$$ + 2 * $i$$547$$ + 1, $starty$$, "dot1" + $i$$547$$);
      $dot$$.$setSolidStroke$($color$$56$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 1 + 2 * $i$$547$$, $starty$$, $startx$$1$$ + 1 + 2 * $i$$547$$ + 1, $starty$$, "dot2" + $i$$547$$);
      $dot$$.$setSolidStroke$($color$$56$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 2 * $i$$547$$, $starty$$, $startx$$1$$ + 2 * $i$$547$$ + 1, $starty$$, "dot3" + $i$$547$$);
      $dot$$.$setSolidStroke$($color$$56$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 18, $starty$$, $startx$$1$$ + 18 + 1, $starty$$, "dot4");
    $dot$$.$setSolidStroke$($color$$56$$);
    $grippy$$.$addChild$($dot$$);
    $starty$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 18, $starty$$, $startx$$1$$ + 18 + 1, $starty$$, "dot5")
  }else {
    $startx$$1$$ = 3;
    $starty$$ = 8 + $handlePos$$;
    for($i$$547$$ = 0;9 > $i$$547$$;$i$$547$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$ + 2 * $i$$547$$, $startx$$1$$, $starty$$ + 2 * $i$$547$$ + 1, "dot1" + $i$$547$$), $dot$$.$setSolidStroke$($color$$56$$), $grippy$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$ + 1 + 2 * $i$$547$$, $startx$$1$$, $starty$$ + 1 + 2 * $i$$547$$ + 1, "dot2" + $i$$547$$), $dot$$.$setSolidStroke$($color$$56$$), 
      $grippy$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$ + 2 * $i$$547$$, $startx$$1$$, $starty$$ + 2 * $i$$547$$ + 1, "dot3" + $i$$547$$), $dot$$.$setSolidStroke$($color$$56$$), $grippy$$.$addChild$($dot$$), $startx$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$ + 18, $startx$$1$$, $starty$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$56$$);
    $grippy$$.$addChild$($dot$$);
    $startx$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$ + 18, $startx$$1$$, $starty$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$56$$);
  $grippy$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$);
  return $grippy$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$34$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$34$$.getHeight() : $rect$$34$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$5$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$5$$.$getTranslateY$() : $slidingWindow$$5$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$6$$, $pos$$44$$) {
  $pos$$44$$ = window.Math.max(0, $pos$$44$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$6$$.$setTranslateY$($pos$$44$$) : $rightStart_slidingWindow$$6$$.$setTranslateX$($pos$$44$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$44$$);
    $rightStart_slidingWindow$$6$$ = $pos$$44$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$6$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$6$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$6$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    D.$JSCompiler_alias_NULL$$).$setX$($pos$$44$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$6$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$8$$, $size$$32$$) {
  $size$$32$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$32$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$ = $size$$32$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$32$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$8$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$) : $rightGrippy$$1_slidingWindow$$8$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$8$$) + $size$$32$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$8$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$32$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$.$setTranslateY$($size$$32$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$8$$.$setTranslateY$($size$$32$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$32$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_5613$$.$setTranslateX$($size$$32$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$8$$.$setTranslateX$($size$$32$$ - 10)))
};
D.$DvtOverview$$.prototype.$updateTimeAxis$ = function $$DvtOverview$$$$$updateTimeAxis$$($width$$125$$, $height$$108$$) {
  if(this.$_ticks$ != D.$JSCompiler_alias_NULL$$) {
    this.$isVertical$();
    for(var $size$$33$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $i$$548$$ = 0;$i$$548$$ < this.$_ticks$.length;$i$$548$$++) {
      var $child$$61_label$$37$$ = this.$_ticks$[$i$$548$$], $time$$7_time_pos$$2$$ = (0,window.parseInt)($child$$61_label$$37$$.$getAttr$("time"), 10), $time$$7_time_pos$$2$$ = this.$getDatePosition$($time$$7_time_pos$$2$$), $child$$61_label$$37$$ = $child$$61_label$$37$$.$getAttr$("label"), $maxWidth$$25_next_time$$ = 0;
      $i$$548$$ + 1 < this.$_ticks$.length ? ($maxWidth$$25_next_time$$ = (0,window.parseInt)(this.$_ticks$[$i$$548$$ + 1].$getAttr$("time"), 10), $maxWidth$$25_next_time$$ = this.$getDatePosition$($maxWidth$$25_next_time$$) - $time$$7_time_pos$$2$$) : $maxWidth$$25_next_time$$ = $size$$33$$ - $time$$7_time_pos$$2$$;
      this.$isRTL$() && ($time$$7_time_pos$$2$$ = $size$$33$$ - $time$$7_time_pos$$2$$);
      this.$addTick$($time$$7_time_pos$$2$$, $width$$125$$, $height$$108$$, "tick" + $i$$548$$);
      this.$addLabel$($time$$7_time_pos$$2$$, $child$$61_label$$37$$, $width$$125$$, $height$$108$$, $maxWidth$$25_next_time$$, "label" + $i$$548$$)
    }
  }
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$12_pos$$45$$, $stroke$$80_width$$126$$, $height$$109$$, $id$$203$$) {
  $line$$12_pos$$45$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$_context$, 0, $line$$12_pos$$45$$, $stroke$$80_width$$126$$, $line$$12_pos$$45$$, $id$$203$$) : new D.$DvtLine$$(this.$_context$, $line$$12_pos$$45$$, 0, $line$$12_pos$$45$$, $height$$109$$, $id$$203$$);
  $stroke$$80_width$$126$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$80_width$$126$$.$setStyle$(1, 3);
  $line$$12_pos$$45$$.$setStroke$($stroke$$80_width$$126$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$12_pos$$45$$);
  this.$addChild$($line$$12_pos$$45$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($label$$38_pos$$46$$, $text$$77$$, $width$$127_y$$247$$, $height$$110$$, $maxWidth$$26$$, $id$$204$$) {
  this.$isVertical$() ? $label$$38_pos$$46$$ = new D.$DvtOutputText$$(this.$_context$, $text$$77$$, 4, $label$$38_pos$$46$$, $id$$204$$) : ($width$$127_y$$247$$ = "above" == this.$_overviewPosition$ ? 2 : $height$$110$$ - this.$getTimeAxisHeight$() + 2, $label$$38_pos$$46$$ = new D.$DvtOutputText$$(this.$_context$, $text$$77$$, $label$$38_pos$$46$$ + 5, $width$$127_y$$247$$, $id$$204$$));
  $label$$38_pos$$46$$.$setCSSStyle$(new D.$DvtCSSStyle$$("font-weight:bold"));
  D.$DvtTextUtils$$.$fitText$($label$$38_pos$$46$$, $maxWidth$$26$$, window.Infinity, this);
  $label$$38_pos$$46$$.$_rawText$ = $label$$38_pos$$46$$.$_untruncatedTextString$
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$1$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(5);
  if($newLeft$$1$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    1)), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, 
      $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, 
      $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$73_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$);
    $newLeft$$1$$ = window.Math.max($animator$$73_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$1$$));
    $animator$$73_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_context$, 0.5, 0, D.$DvtEasing$linear$$) : D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $posGetter$$, $posSetter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$1$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setWidth$, $newLeft$$1$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : D.$JSCompiler_alias_NULL$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$1$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$73_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    $animator$$73_minPos$$ != D.$JSCompiler_alias_NULL$$ && $animator$$73_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$74$$, $obj$$273$$, $getter$$5$$, $setter$$3$$, $value$$91$$) {
  $animator$$74$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$74$$, "typeNumber", $obj$$273$$, $getter$$5$$, $setter$$3$$, $value$$91$$) : $setter$$3$$.call($obj$$273$$, $value$$91$$)
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtOverview$$$$$HandleShapeMouseOver$$($event$$458_relPos$$27$$) {
  var $drawable$$25$$ = this.$_findDrawable$($event$$458_relPos$$27$$);
  if($drawable$$25$$ && !("bg" == $drawable$$25$$.getId() || "ocd" == $drawable$$25$$.getId())) {
    if("label" == $drawable$$25$$.getId().substr(0, 5) && $drawable$$25$$ instanceof D.$DvtOutputText$$) {
      $drawable$$25$$.$isTruncated$() && this.$_context$.$getTooltipManager$().$showDatatip$($event$$458_relPos$$27$$.pageX, $event$$458_relPos$$27$$.pageY, $drawable$$25$$.$_rawText$, "#000000")
    }else {
      if(this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$25$$) && ($event$$458_relPos$$27$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$458_relPos$$27$$.pageX, $event$$458_relPos$$27$$.pageY), $event$$458_relPos$$27$$ = this.$stageToLocal$($event$$458_relPos$$27$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$458_relPos$$27$$.x + 6, $event$$458_relPos$$27$$.y - 
      10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$458_relPos$$27$$.x - 6, $event$$458_relPos$$27$$.y - 20), this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_TRUE$$)), "window" == $drawable$$25$$.getId() || "ftr" == $drawable$$25$$.getId() || "arr" == $drawable$$25$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$25$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$25$$
      }
    }
  }
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtOverview$$$$$HandleShapeMouseOut$$($drawable$$26_event$$459$$) {
  this.$_moveDrawable$ == D.$JSCompiler_alias_NULL$$ && this.setCursor("default");
  $drawable$$26_event$$459$$ = this.$_findDrawable$($drawable$$26_event$$459$$);
  if($drawable$$26_event$$459$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$26_event$$459$$) && this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $drawable$$26_event$$459$$
  }
};
D.$DvtOverview$$.prototype.$HandleShapeClick$ = function $$DvtOverview$$$$$HandleShapeClick$$($event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$, $newPos$$2_pageX$$13$$, $evt$$55_pageY$$13_pos$$47$$) {
  $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$.stopPropagation();
  var $drawable$$27_newStartTime$$1_size$$35$$ = this.$_findDrawable$($event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$);
  if($drawable$$27_newStartTime$$1_size$$35$$ && !("window" == $drawable$$27_newStartTime$$1_size$$35$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$27_newStartTime$$1_size$$35$$))) {
    if("bg" == $drawable$$27_newStartTime$$1_size$$35$$.getId() || "label" == $drawable$$27_newStartTime$$1_size$$35$$.getId().substr(0, 5) || "ocd" == $drawable$$27_newStartTime$$1_size$$35$$.getId() || "lbg" == $drawable$$27_newStartTime$$1_size$$35$$.getId() || "rbg" == $drawable$$27_newStartTime$$1_size$$35$$.getId()) {
      $newPos$$2_pageX$$13$$ == D.$JSCompiler_alias_VOID$$ && ($newPos$$2_pageX$$13$$ = $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$.pageX);
      $evt$$55_pageY$$13_pos$$47$$ == D.$JSCompiler_alias_VOID$$ && ($evt$$55_pageY$$13_pos$$47$$ = $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$.pageY);
      $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $newPos$$2_pageX$$13$$, $evt$$55_pageY$$13_pos$$47$$);
      $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$ = this.$stageToLocal$($event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$);
      this.$isVertical$() ? ($evt$$55_pageY$$13_pos$$47$$ = $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$.y, $drawable$$27_newStartTime$$1_size$$35$$ = this.$Height$) : ($evt$$55_pageY$$13_pos$$47$$ = $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$.x, $drawable$$27_newStartTime$$1_size$$35$$ = this.$Width$);
      $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$ = this.$getChildAt$(1);
      $newPos$$2_pageX$$13$$ = $evt$$55_pageY$$13_pos$$47$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$2_pageX$$13$$);
      this.$isRTL$() && ($evt$$55_pageY$$13_pos$$47$$ = this.$Width$ - $evt$$55_pageY$$13_pos$$47$$);
      var $time$$8$$ = this.$getPositionDate$($evt$$55_pageY$$13_pos$$47$$);
      $evt$$55_pageY$$13_pos$$47$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$55_pageY$$13_pos$$47$$.setTime($time$$8$$);
      $newPos$$2_pageX$$13$$ = window.Math.max(0, window.Math.min($newPos$$2_pageX$$13$$, $drawable$$27_newStartTime$$1_size$$35$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$)));
      this.$isRTL$() ? ($drawable$$27_newStartTime$$1_size$$35$$ = this.$getPositionDate$(this.$Width$ - ($newPos$$2_pageX$$13$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$))), $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$ = this.$getPositionDate$(this.$Width$ - $newPos$$2_pageX$$13$$)) : ($drawable$$27_newStartTime$$1_size$$35$$ = this.$getPositionDate$($newPos$$2_pageX$$13$$), $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$ = 
      this.$getPositionDate$($newPos$$2_pageX$$13$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$)));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$55_pageY$$13_pos$$47$$, $drawable$$27_newStartTime$$1_size$$35$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$55_pageY$$13_pos$$47$$, $event$$460_newEndTime$$1_relPos$$28_slidingWindow$$10$$);
      this.dispatchEvent($evt$$55_pageY$$13_pos$$47$$)
    }else {
      return $drawable$$27_newStartTime$$1_size$$35$$
    }
  }
};
D.$DvtOverview$$.prototype.$HandleMouseDown$ = function $$DvtOverview$$$$$HandleMouseDown$$($event$$461$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$461$$)
};
D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$ = function $$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$$($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$, $event$$462$$) {
  $event$$462$$.stopPropagation();
  var $drawable$$28_evt$$56$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_findDrawable$($event$$462$$);
  if($drawable$$28_evt$$56$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$28_evt$$56$$)) {
    if("ftr" == $drawable$$28_evt$$56$$.getId() || "sta" == $drawable$$28_evt$$56$$.getId()) {
      $drawable$$28_evt$$56$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1)
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initX$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$462$$);
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initY$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$462$$);
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$28_evt$$56$$)) {
      var $cursor$$inline_5616_slidingWindow$$11$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isRTL$() ? ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$Width$ - $cursor$$inline_5616_slidingWindow$$11$$.$getX$(), $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ - $cursor$$inline_5616_slidingWindow$$11$$.getWidth()) : ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ = 
      $cursor$$inline_5616_slidingWindow$$11$$.$getX$(), $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ + $cursor$$inline_5616_slidingWindow$$11$$.getWidth());
      "grpy" == $drawable$$28_evt$$56$$.getParent().getId() && ($drawable$$28_evt$$56$$ = $drawable$$28_evt$$56$$.getParent());
      var $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ = $drawable$$28_evt$$56$$.getId();
      "grpy" == $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ && ($drawable$$28_evt$$56$$ = $cursor$$inline_5616_slidingWindow$$11$$.$getChildBefore$($drawable$$28_evt$$56$$), $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ = $drawable$$28_evt$$56$$.getId());
      if("lh" == $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ || "rh" == $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$) {
        $drawable$$28_evt$$56$$ = $cursor$$inline_5616_slidingWindow$$11$$.$getChildBefore$($drawable$$28_evt$$56$$), $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ = $drawable$$28_evt$$56$$.getId()
      }
      "lbgrh" == $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ && ($drawable$$28_evt$$56$$ = $cursor$$inline_5616_slidingWindow$$11$$.$getChildAt$(0));
      "rbgrh" == $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ && ($drawable$$28_evt$$56$$ = $cursor$$inline_5616_slidingWindow$$11$$.$getChildAt$($cursor$$inline_5616_slidingWindow$$11$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isVertical$() ? ($drawable$$28_evt$$56$$.$setY$(-20), $drawable$$28_evt$$56$$.$setHeight$(2 * ($drawable$$28_evt$$56$$.getHeight() + 20))) : ($drawable$$28_evt$$56$$.$setX$(-20), $drawable$$28_evt$$56$$.$setWidth$(2 * ($drawable$$28_evt$$56$$.getWidth() + 20))));
      $cursor$$inline_5616_slidingWindow$$11$$ = $drawable$$28_evt$$56$$.getCursor();
      $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ != D.$JSCompiler_alias_NULL$$ && $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$.setCursor($cursor$$inline_5616_slidingWindow$$11$$);
      if($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isLeftAndRightFilterRendered$()) {
        var $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$), $rightBackground$$inline_5619$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$);
        $drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_5619$$ != D.$JSCompiler_alias_NULL$$ && ($drawableId$$1_leftBackground$$inline_5618_slidingWindow$$inline_5617$$.setCursor($cursor$$inline_5616_slidingWindow$$11$$), $rightBackground$$inline_5619$$.setCursor($cursor$$inline_5616_slidingWindow$$11$$))
      }
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_moveDrawable$ = $drawable$$28_evt$$56$$;
    $drawable$$28_evt$$56$$ = new D.$DvtOverviewEvent$$("dropCallback");
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.dispatchEvent($drawable$$28_evt$$56$$)
  }
};
D.$DvtOverview$$.prototype.$HandleMouseUp$ = function $$DvtOverview$$$$$HandleMouseUp$$($event$$463$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$463$$)
};
D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$ = function $$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$$($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$, $event$$464$$) {
  $event$$464$$ != D.$JSCompiler_alias_NULL$$ && $event$$464$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$) {
    if("window" == $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.getId()) {
      $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishWindowDrag$(0, 0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$)) {
        $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isVertical$() ? ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setY$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setX$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_5623_slidingWindow$$inline_5622$$ = $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$getChildAt$(1);
        $leftBackground$$inline_5623_slidingWindow$$inline_5622$$ != D.$JSCompiler_alias_NULL$$ && $leftBackground$$inline_5623_slidingWindow$$inline_5622$$.setCursor("move");
        if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_5623_slidingWindow$$inline_5622$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$), $rightBackground$$inline_5624$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$);
          $leftBackground$$inline_5623_slidingWindow$$inline_5622$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_5624$$ != D.$JSCompiler_alias_NULL$$ && ($leftBackground$$inline_5623_slidingWindow$$inline_5622$$.setCursor("default"), $rightBackground$$inline_5624$$.setCursor("default"))
        }
      }
    }
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_initX$ = -1
  }
};
D.$DvtOverview$$.prototype.$HandleMouseMove$ = function $$DvtOverview$$$$$HandleMouseMove$$($event$$465$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$465$$)
};
D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$ = function $$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$$($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, $event$$466$$) {
  $event$$466$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && -1 != $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$) {
    var $pageX$$14$$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$466$$), $pageY$$14$$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$466$$), $diffX$$5$$ = $pageX$$14$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$, $diffY$$6$$ = $pageY$$14$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$ = $pageX$$14$$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$ = $pageY$$14$$;
    "window" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleWindowDragPositioning$(0, $diffX$$5$$, $diffY$$6$$) : "lh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "lhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, 
    $event$$466$$, $diffX$$5$$, $diffY$$6$$, D.$JSCompiler_alias_TRUE$$) : ("rh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "rhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId()) && $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleRightHandleDragPositioning$($event$$466$$, $diffX$$5$$, $diffY$$6$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$467$$) {
  var $target$$100$$ = $event$$467$$.targetTouches[0];
  this.$_touchStartX$ = $target$$100$$.pageX;
  this.$_touchStartY$ = $target$$100$$.pageY;
  2 == $event$$467$$.targetTouches.length ? ($event$$467$$.preventDefault(), $target$$100$$ = $event$$467$$.targetTouches[1], this.$_touchStartX2$ = $target$$100$$.pageX, this.$_touchStartY2$ = $target$$100$$.pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$) : (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$467$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$468$$) {
  $event$$468$$.preventDefault();
  if(this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$) {
    if(50 > this.$_counter$) {
      this.$_counter$++
    }else {
      var $target$$101$$ = $event$$468$$.targetTouches[1];
      this.$handleRightHandleDragPositioning$(D.$JSCompiler_alias_NULL$$, $target$$101$$.pageX - this.$_touchStartX2$, 0);
      this.$_touchStartX2$ = $target$$101$$.pageX;
      this.$_counter$ = 0
    }
  }else {
    $target$$101$$ = $event$$468$$.targetTouches[0];
    if(this.$_touchStartX$ != $target$$101$$.pageX || this.$_touchStartY$ != $target$$101$$.pageY) {
      this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
    }
    (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$468$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$469$$) {
  this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : ((0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$469$$), this.$_touchStartX$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY$ != D.$JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($event$$469$$, this.$_touchStartX$, this.$_touchStartY$));
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$470$$) {
  var $delta$$16_keyCode$$23$$ = $event$$470$$.keyCode;
  if(37 === $delta$$16_keyCode$$23$$ || 39 === $delta$$16_keyCode$$23$$) {
    $delta$$16_keyCode$$23$$ = 37 === $delta$$16_keyCode$$23$$ ? -1 : 1, ($event$$470$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$470$$, $delta$$16_keyCode$$23$$, $delta$$16_keyCode$$23$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$471$$) {
  var $delta$$17_keyCode$$24$$ = $event$$471$$.keyCode;
  if(37 === $delta$$17_keyCode$$24$$ || 39 === $delta$$17_keyCode$$24$$) {
    $delta$$17_keyCode$$24$$ = 37 === $delta$$17_keyCode$$24$$ ? -1 : 1, ($event$$471$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $event$$471$$, $delta$$17_keyCode$$24$$, $delta$$17_keyCode$$24$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$472$$, $deltaX$$11$$, $deltaY$$10$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$11$$, $deltaY$$10$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($event$$473$$, $deltaX$$12$$, $deltaY$$11$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$12$$, $deltaY$$11$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$57_type$$184$$, $delta$$18_deltaX$$13$$, $deltaY$$12$$) {
  var $newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$51$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$2_slidingWindow$$18$$), $newStartTime$$2_scrollTo_size$$36$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$2_slidingWindow$$18$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$18_deltaX$$13$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$12$$ : $delta$$18_deltaX$$13$$;
  $pos$$51$$ + $delta$$18_deltaX$$13$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$2_slidingWindow$$18$$, $minPos$$1$$), $newStartTime$$2_scrollTo_size$$36$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -2 : -1) : $pos$$51$$ + $newStartTime$$2_scrollTo_size$$36$$ + $delta$$18_deltaX$$13$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$2_slidingWindow$$18$$, $maxPos$$1$$ - $newStartTime$$2_scrollTo_size$$36$$), $newStartTime$$2_scrollTo_size$$36$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$2_slidingWindow$$18$$, $pos$$51$$ + $delta$$18_deltaX$$13$$), $newStartTime$$2_scrollTo_size$$36$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($maxPos$$1$$ - $newStartTime$$2_scrollTo_size$$36$$ - 
  $pos$$51$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$51$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$57_type$$184$$ = new D.$DvtOverviewEvent$$($evt$$57_type$$184$$);
  $evt$$57_type$$184$$.$setPosition$($newStartTime$$2_scrollTo_size$$36$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($newStartTime$$2_scrollTo_size$$36$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - ($pos$$51$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$2_slidingWindow$$18$$))), $newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - 
  $pos$$51$$)) : ($newStartTime$$2_scrollTo_size$$36$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$51$$), $newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$51$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$2_slidingWindow$$18$$)));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$57_type$$184$$, $newStartTime$$2_scrollTo_size$$36$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$57_type$$184$$, $newEndTime$$2_slidingWindow$$18$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$57_type$$184$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$475$$, $deltaX$$15$$, $deltaY$$14$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$475$$, $deltaX$$15$$, $deltaY$$14$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$, $delta$$19_deltaY$$15$$, $isLeft$$4_newStartTime$$3$$) {
  var $evt$$58_size$$37$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$19_deltaY$$15$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$19_deltaY$$15$$ : $deltaX$$16_newEndTime$$3_slidingWindow$$19$$;
  if(0 != $delta$$19_deltaY$$15$$) {
    $deltaX$$16_newEndTime$$3_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$);
    if($isLeft$$4_newStartTime$$3$$) {
      if($windowSize$$ - $delta$$19_deltaY$$15$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$19_deltaY$$15$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$)).x;
      $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$);
      if(0 < $delta$$19_deltaY$$15$$ && $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ <= $windowPos$$ || 0 > $delta$$19_deltaY$$15$$ && $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$, $windowPos$$ + $delta$$19_deltaY$$15$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$, $windowSize$$ - $delta$$19_deltaY$$15$$)
    }else {
      if($windowSize$$ + $delta$$19_deltaY$$15$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$19_deltaY$$15$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$)).x;
      $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$);
      if(0 < $delta$$19_deltaY$$15$$ && $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$19_deltaY$$15$$ && $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$, $windowSize$$ + $delta$$19_deltaY$$15$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$));
    $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ = $evt$$58_size$$37$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRangeChangingSupported$() && ($evt$$58_size$$37$$ = new D.$DvtOverviewEvent$$("rangeChanging"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$58_size$$37$$, "newSize", $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$), $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? $isLeft$$4_newStartTime$$3$$ : 
    !$isLeft$$4_newStartTime$$3$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$58_size$$37$$, "endHandle", $endHandle$$inline_5635_event$$476_newSize$$3_relPos$$29_time$$10$$), $isLeft$$4_newStartTime$$3$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$58_size$$37$$, "expand", 0 > $delta$$19_deltaY$$15$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$58_size$$37$$, "expand", 0 < $delta$$19_deltaY$$15$$), $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? 
    ($isLeft$$4_newStartTime$$3$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$16_newEndTime$$3_slidingWindow$$19$$))), $deltaX$$16_newEndTime$$3_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$))) : ($isLeft$$4_newStartTime$$3$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$16_newEndTime$$3_slidingWindow$$19$$)), $deltaX$$16_newEndTime$$3_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$))), 
    (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$58_size$$37$$, $isLeft$$4_newStartTime$$3$$), (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$58_size$$37$$, $deltaX$$16_newEndTime$$3_slidingWindow$$19$$), $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$58_size$$37$$))
  }
};
D.$DvtOverview$$.prototype.$isRangeChangingSupported$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$4_start$$35$$ = this.$_start$, $end$$27_oldStartTime$$1$$ = this.$_end$, $oldSize$$1$$ = this.$_width$, $oldEndTime$$1_size$$38$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$4_slidingWindow$$20$$ = this.$getChildAt$(1), $newStartTime$$4_time$$11$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$4_slidingWindow$$20$$)), $newSize$$4_start$$35$$ = $oldEndTime$$1_size$$38$$ * ($end$$27_oldStartTime$$1$$ - $newSize$$4_start$$35$$) / 
  ($newStartTime$$4_time$$11$$ - $newSize$$4_start$$35$$), $end$$27_oldStartTime$$1$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime$$1_size$$38$$ = this.$getPositionDate$(this.$_oldEndPos$);
  this.$isRTL$() ? ($newStartTime$$4_time$$11$$ = this.$getPositionDate$(this.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$4_slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$4_slidingWindow$$20$$))), $newEndTime$$4_slidingWindow$$20$$ = this.$getPositionDate$(this.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$4_slidingWindow$$20$$))) : ($newStartTime$$4_time$$11$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, 
  $newEndTime$$4_slidingWindow$$20$$)), $newEndTime$$4_slidingWindow$$20$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$4_slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$4_slidingWindow$$20$$)));
  var $evt$$59$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$59$$, "oldSize", $oldSize$$1$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$59$$, "newSize", $newSize$$4_start$$35$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$59$$, "oldStartTime", $end$$27_oldStartTime$$1$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$59$$, "oldEndTime", $oldEndTime$$1_size$$38$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$59$$, $newStartTime$$4_time$$11$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$59$$, $newEndTime$$4_slidingWindow$$20$$);
  this.dispatchEvent($evt$$59$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $slidingWindow$$21$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $leftHandle$$3$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  1)), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, 
  $slidingWindow$$21$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + 1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$) - 1, -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$478$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$478$$)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$60$$) {
  this.Init($view$$60$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$50$$) {
  return this.$ParseRootAttributes$($data$$50$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$140$$) {
  var $ret$$64$$ = {};
  $ret$$64$$.$animationOnClick$ = $options$$140$$.animationOnClick;
  $options$$140$$.startTime != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.start = $options$$140$$.startTime);
  $options$$140$$.endTime != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.end = $options$$140$$.endTime);
  $ret$$64$$.start == D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.start = (new window.Date).getTime());
  if($ret$$64$$.end == D.$JSCompiler_alias_NULL$$ || $ret$$64$$.end <= $ret$$64$$.start) {
    $ret$$64$$.end = $ret$$64$$.start + 864E5
  }
  $options$$140$$.currentTime != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.currentTime = $options$$140$$.currentTime);
  $options$$140$$.initialFocusTime != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$initialFocusTime$ = $options$$140$$.initialFocusTime);
  $ret$$64$$.orientation = "horizontal";
  $options$$140$$.orientation != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.orientation = $options$$140$$.orientation);
  $ret$$64$$.$featuresOff$ = $options$$140$$.featuresOff;
  $ret$$64$$.$minimumWindowSize$ = $options$$140$$.minimumWindowSize;
  $ret$$64$$.$leftMargin$ = $options$$140$$.leftMargin;
  $ret$$64$$.$rightMargin$ = $options$$140$$.rightMargin;
  if($options$$140$$.viewportEndTime != D.$JSCompiler_alias_NULL$$) {
    var $viewportEndTime$$ = $options$$140$$.viewportEndTime, $viewportStartTime$$ = $ret$$64$$.start;
    $options$$140$$.viewportStartTime != D.$JSCompiler_alias_NULL$$ && $options$$140$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$140$$.viewportStartTime);
    $ret$$64$$.width = $options$$140$$.viewportEndPos != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$64$$.start, $ret$$64$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$140$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$64$$.start, $ret$$64$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$64$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$64$$.$renderStart$ = $ret$$64$$.start
  }
  0 == $ret$$64$$.width && ($ret$$64$$.width = 1E3);
  $ret$$64$$.$overviewPosition$ = "below";
  $ret$$64$$.$selectionMode$ = "none";
  $ret$$64$$.$isRtl$ = D.$DvtAgent$$.$isRightToLeft$(this.$_view$.$_context$).toString();
  $options$$140$$.rtl != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$isRtl$ = $options$$140$$.rtl.toString());
  $ret$$64$$.$handleFillColor$ = "#FFFFFF";
  $ret$$64$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$64$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$64$$.$windowBackgroundAlpha$ = 1;
  $ret$$64$$.$windowBorderTopStyle$ = "solid";
  $ret$$64$$.$windowBorderRightStyle$ = "solid";
  $ret$$64$$.$windowBorderBottomStyle$ = "solid";
  $ret$$64$$.$windowBorderLeftStyle$ = "solid";
  $ret$$64$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$64$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$64$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$64$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$64$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$64$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$64$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$64$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$64$$.$timeAxisBarOpacity$ = 1;
  $ret$$64$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$64$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$64$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$64$$.$rightFilterPanelAlpha$ = 0.7;
  $options$$140$$.style != D.$JSCompiler_alias_NULL$$ && ($options$$140$$.style.handleFillColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$handleFillColor$ = $options$$140$$.style.handleFillColor), $options$$140$$.style.handleTextureColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$handleTextureColor$ = $options$$140$$.style.handleTextureColor), $options$$140$$.style.handleBackgroundImage != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$handleBackgroundImage$ = $options$$140$$.style.handleBackgroundImage), 
  $options$$140$$.style.handleWidth != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$handleWidth$ = $options$$140$$.style.handleWidth), $options$$140$$.style.handleHeight != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$handleHeight$ = $options$$140$$.style.handleHeight), $options$$140$$.style.windowBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$windowBackgroundColor$ = $options$$140$$.style.windowBackgroundColor), $options$$140$$.style.windowBackgroundAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$64$$.$windowBackgroundAlpha$ = $options$$140$$.style.windowBackgroundAlpha), $options$$140$$.style.windowBorderTopStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$windowBorderTopStyle$ = $options$$140$$.style.windowBorderTopStyle), $options$$140$$.style.windowBorderRightStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$windowBorderRightStyle$ = $options$$140$$.style.windowBorderRightStyle), $options$$140$$.style.windowBorderBottomStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$windowBorderBottomStyle$ = 
  $options$$140$$.style.windowBorderBottomStyle), $options$$140$$.style.windowBorderLeftStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$windowBorderLeftStyle$ = $options$$140$$.style.windowBorderLeftStyle), $options$$140$$.style.windowBorderTopColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$windowBorderTopColor$ = $options$$140$$.style.windowBorderTopColor), $options$$140$$.style.windowBorderRightColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$windowBorderRightColor$ = $options$$140$$.style.windowBorderRightColor), 
  $options$$140$$.style.windowBorderBottomColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$windowBorderBottomColor$ = $options$$140$$.style.windowBorderBottomColor), $options$$140$$.style.windowBorderLeftColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$windowBorderLeftColor$ = $options$$140$$.style.windowBorderLeftColor), $options$$140$$.style.overviewBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$overviewBackgroundColor$ = $options$$140$$.style.overviewBackgroundColor), $options$$140$$.style.currentTimeIndicatorColor != 
  D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$currentTimeIndicatorColor$ = $options$$140$$.style.currentTimeIndicatorColor), $options$$140$$.style.timeIndicatorColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$timeIndicatorColor$ = $options$$140$$.style.timeIndicatorColor), $options$$140$$.style.leftFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$leftFilterPanelColor$ = $options$$140$$.style.leftFilterPanelColor), $options$$140$$.style.leftFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$64$$.$leftFilterPanelAlpha$ = $options$$140$$.style.leftFilterPanelAlpha), $options$$140$$.style.rightFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$rightFilterPanelColor$ = $options$$140$$.style.rightFilterPanelColor), $options$$140$$.style.rightFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && ($ret$$64$$.$rightFilterPanelAlpha$ = $options$$140$$.style.rightFilterPanelAlpha));
  return $ret$$64$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$3_startTime$$4$$, $endTime$$4$$, $denominator$$1_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$3_startTime$$4$$ = $viewportEndPos$$ * ($endTime$$4$$ - $number$$3_startTime$$4$$);
  $denominator$$1_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator$$1_viewportStartTime$$1$$;
  return 0 == $number$$3_startTime$$4$$ || 0 == $denominator$$1_viewportStartTime$$1$$ ? 0 : $number$$3_startTime$$4$$ / $denominator$$1_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$183$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$183$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$6$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$6$$)
};
D.$DvtOverviewEvent$$.prototype.getTime = function $$DvtOverviewEvent$$$$getTime$() {
  return this.$getParamValue$("time")
};
D.$JSCompiler_StaticMethods_setNewStartTime$$ = function $$JSCompiler_StaticMethods_setNewStartTime$$$($JSCompiler_StaticMethods_setNewStartTime$self$$, $newStartTime$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewStartTime$self$$, "newStartTime", $newStartTime$$)
};
D.$JSCompiler_StaticMethods_setNewEndTime$$ = function $$JSCompiler_StaticMethods_setNewEndTime$$$($JSCompiler_StaticMethods_setNewEndTime$self$$, $newEndTime$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewEndTime$self$$, "newEndTime", $newEndTime$$)
};
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$40$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$40$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
});