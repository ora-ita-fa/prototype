define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTimeUtils$$ = {$supportsTouch$:function() {
  return D.$DvtAgent$$.$isTouchDevice$()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$1_startTime$$1$$, $endTime$$1$$, $number$$2_time$$12$$, $width$$124$$) {
  $number$$2_time$$12$$ = ($number$$2_time$$12$$ - $denominator$$1_startTime$$1$$) * $width$$124$$;
  $denominator$$1_startTime$$1$$ = $endTime$$1$$ - $denominator$$1_startTime$$1$$;
  return 0 == $number$$2_time$$12$$ || 0 == $denominator$$1_startTime$$1$$ ? 0 : $number$$2_time$$12$$ / $denominator$$1_startTime$$1$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$2$$, $endTime$$2_number$$3$$, $pos$$68$$, $width$$125$$) {
  $endTime$$2_number$$3$$ = $pos$$68$$ * ($endTime$$2_number$$3$$ - $startTime$$2$$);
  return 0 == $endTime$$2_number$$3$$ || 0 == $width$$125$$ ? $startTime$$2$$ : $endTime$$2_number$$3$$ / $width$$125$$ + $startTime$$2$$
};
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$671$$, $callback$$136$$, $callbackObj$$105$$) {
  this.Init($context$$671$$, $callback$$136$$, $callbackObj$$105$$)
};
(0,D.$goog$exportSymbol$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$672$$, $callback$$137$$, $callbackObj$$106$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$672$$);
  this.$_callback$ = $callback$$137$$;
  this.$_callbackObj$ = $callbackObj$$106$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$) {
    D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, 
    this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandleMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleMouseUp$, D.$JSCompiler_alias_FALSE$$, 
    this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandleMouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$23$$, $end$$16$$) {
  var $viewportStart$$ = this.$getDatePosition$($start$$23$$), $slidingWindow_viewportEnd$$ = this.$getDatePosition$($end$$16$$);
  if(!($viewportStart$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this))) {
    var $size$$31$$ = window.Math.max($slidingWindow_viewportEnd$$ - $viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this));
    0 < $size$$31$$ && (0 <= $viewportStart$$ && $slidingWindow_viewportEnd$$ <= this.$Width$) && ($slidingWindow_viewportEnd$$ = this.$getChildAt$(1), (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow_viewportEnd$$, $size$$31$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this))
  }
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : -1 != $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$.indexOf("zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$) {
  if($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ == D.$JSCompiler_alias_NULL$$) {
    var $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = this.$_start$, $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = this.$_end$, $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = 
    this.$getChildAt$(1), $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$);
    $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ != D.$JSCompiler_alias_NULL$$ && 0 != $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ && (this.$_renderStart$ = D.$DvtTimeUtils$$.$getPositionDate$($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, 
    $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$, $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$, this.$Width$));
    this.$removeChildren$()
  }
  $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ != D.$JSCompiler_alias_NULL$$ && $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$ != D.$JSCompiler_alias_NULL$$ && (this.$Width$ = $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, this.$Height$ = $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$);
  $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ && ($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = this.$Parse$($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$), 
  this.$_applyParsedProperties$($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$));
  $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$;
  this.$createBackground$($arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$);
  if($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$) {
    $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = ($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = this.$isVertical$()) ? new D.$DvtRect$$(this.$_context$, 
    0, 0, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, 0, "window") : new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "window");
    $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_6983_rightGrippy$$inline_6992$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$) {
        var $handleX$$inline_6985_handleY$$inline_6993$$ = ($arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ - 36) / 2, $leftHandle$$inline_6994_leftHandleCmds$$inline_6986$$ = window.DvtPathUtils.moveTo($handleX$$inline_6985_handleY$$inline_6993$$, 0) + window.DvtPathUtils.$quadTo$($handleX$$inline_6985_handleY$$inline_6993$$ + 3, 6, $handleX$$inline_6985_handleY$$inline_6993$$ + 8, 8) + window.DvtPathUtils.lineTo($handleX$$inline_6985_handleY$$inline_6993$$ + 
        28, 8) + window.DvtPathUtils.$quadTo$($handleX$$inline_6985_handleY$$inline_6993$$ + 33, 6, $handleX$$inline_6985_handleY$$inline_6993$$ + 36, 0);
        window.DvtPathUtils.closePath();
        var $rightHandle$$inline_6995_rightHandleCmds$$inline_6987$$ = window.DvtPathUtils.moveTo($handleX$$inline_6985_handleY$$inline_6993$$, 0) + window.DvtPathUtils.$quadTo$($handleX$$inline_6985_handleY$$inline_6993$$ + 3, -6, $handleX$$inline_6985_handleY$$inline_6993$$ + 8, -8) + window.DvtPathUtils.lineTo($handleX$$inline_6985_handleY$$inline_6993$$ + 28, -8) + window.DvtPathUtils.$quadTo$($handleX$$inline_6985_handleY$$inline_6993$$ + 33, -6, $handleX$$inline_6985_handleY$$inline_6993$$ + 
        36, 0);
        window.DvtPathUtils.closePath();
        var $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $handleSize$$inline_6983_rightGrippy$$inline_6992$$, "lhb"), $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ = 
        new D.$DvtRect$$(this.$_context$, 0, 0, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $handleSize$$inline_6983_rightGrippy$$inline_6992$$, "rhb"), $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $handleSize$$inline_6983_rightGrippy$$inline_6992$$), $handleSize$$inline_6983_rightGrippy$$inline_6992$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, 
          $handleSize$$inline_6983_rightGrippy$$inline_6992$$)
        }else {
          $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_6985_handleY$$inline_6993$$), $handleSize$$inline_6983_rightGrippy$$inline_6992$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_6985_handleY$$inline_6993$$)
        }
      }else {
        $handleX$$inline_6985_handleY$$inline_6993$$ = ($bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$ - 36) / 2, $leftHandle$$inline_6994_leftHandleCmds$$inline_6986$$ = window.DvtPathUtils.moveTo(0, $handleX$$inline_6985_handleY$$inline_6993$$) + window.DvtPathUtils.$quadTo$(6, $handleX$$inline_6985_handleY$$inline_6993$$ + 3, 8, $handleX$$inline_6985_handleY$$inline_6993$$ + 8) + window.DvtPathUtils.lineTo(8, $handleX$$inline_6985_handleY$$inline_6993$$ + 
        28) + window.DvtPathUtils.$quadTo$(6, $handleX$$inline_6985_handleY$$inline_6993$$ + 33, 0, $handleX$$inline_6985_handleY$$inline_6993$$ + 36), window.DvtPathUtils.closePath(), $rightHandle$$inline_6995_rightHandleCmds$$inline_6987$$ = window.DvtPathUtils.moveTo(0, $handleX$$inline_6985_handleY$$inline_6993$$) + window.DvtPathUtils.$quadTo$(-6, $handleX$$inline_6985_handleY$$inline_6993$$ + 3, -8, $handleX$$inline_6985_handleY$$inline_6993$$ + 8) + window.DvtPathUtils.lineTo(-8, $handleX$$inline_6985_handleY$$inline_6993$$ + 
        28) + window.DvtPathUtils.$quadTo$(-6, $handleX$$inline_6985_handleY$$inline_6993$$ + 33, 0, $handleX$$inline_6985_handleY$$inline_6993$$ + 36), window.DvtPathUtils.closePath(), $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = new D.$DvtRect$$(this.$_context$, 0 - $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
        0, $handleSize$$inline_6983_rightGrippy$$inline_6992$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "lhb"), $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ = new D.$DvtRect$$(this.$_context$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
        0, $handleSize$$inline_6983_rightGrippy$$inline_6992$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "rhb"), $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$ = "col-resize", this.$_handleBackgroundImage$ ? ($leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $handleSize$$inline_6983_rightGrippy$$inline_6992$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$), 
        $handleSize$$inline_6983_rightGrippy$$inline_6992$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $handleSize$$inline_6983_rightGrippy$$inline_6992$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$)) : ($leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_6985_handleY$$inline_6993$$), $handleSize$$inline_6983_rightGrippy$$inline_6992$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, 
        $handleX$$inline_6985_handleY$$inline_6993$$))
      }
      $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$);
      $leftHandle$$inline_6994_leftHandleCmds$$inline_6986$$ = new D.$DvtPath$$(this.$_context$, $leftHandle$$inline_6994_leftHandleCmds$$inline_6986$$, "lh");
      $rightHandle$$inline_6995_rightHandleCmds$$inline_6987$$ = new D.$DvtPath$$(this.$_context$, $rightHandle$$inline_6995_rightHandleCmds$$inline_6987$$, "rh");
      $leftHandle$$inline_6994_leftHandleCmds$$inline_6986$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_6994_leftHandleCmds$$inline_6986$$.$setSolidStroke$(this.$_handleFillColor$);
      $rightHandle$$inline_6995_rightHandleCmds$$inline_6987$$.$setSolidFill$(this.$_handleFillColor$);
      $rightHandle$$inline_6995_rightHandleCmds$$inline_6987$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_6994_leftHandleCmds$$inline_6986$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($rightHandle$$inline_6995_rightHandleCmds$$inline_6987$$));
      $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$.setCursor($cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$);
      $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$.setCursor($cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$);
      $leftHandle$$inline_6994_leftHandleCmds$$inline_6986$$.setCursor($cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$);
      $rightHandle$$inline_6995_rightHandleCmds$$inline_6987$$.setCursor($cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$);
      $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$.setCursor($cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$);
      $handleSize$$inline_6983_rightGrippy$$inline_6992$$.setCursor($cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$);
      $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$addChild$($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$);
      $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$addChild$($leftHandle$$inline_6994_leftHandleCmds$$inline_6986$$);
      $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$addChild$($leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$);
      $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$addChild$($end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$);
      $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$addChild$($rightHandle$$inline_6995_rightHandleCmds$$inline_6987$$);
      $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$addChild$($handleSize$$inline_6983_rightGrippy$$inline_6992$$)
    }
    $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.setCursor("move");
    this.$addChild$($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$);
    $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ ? new D.$DvtLine$$(this.$_context$, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ - 
    this.$getTimeAxisWidth$(), 0, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ - this.$getTimeAxisWidth$(), $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "tab") : "above" == this.$_overviewPosition$ ? new D.$DvtLine$$(this.$_context$, 0, this.$getTimeAxisHeight$(), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, this.$getTimeAxisHeight$(), 
    "tab") : new D.$DvtLine$$(this.$_context$, 0, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$ - this.$getTimeAxisHeight$(), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$ - this.$getTimeAxisHeight$(), "tab");
    $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$);
    this.$addChild$($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$);
    this.$isLeftAndRightFilterRendered$() && ($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ ? ($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = new D.$DvtRect$$(this.$_context$, 
    0, 0, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, 0, "lbg"), $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, 0, "rbg")) : ($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "lbg"), $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "rbg")), $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$setSolidFill$(this.$_leftFilterPanelColor$, 
    this.$_leftFilterPanelAlpha$), this.$addChild$($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$), $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), 
    this.$addChild$($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$), D.$DvtTimeUtils$$.$supportsTouch$() && $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), 
    $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ ? ($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = new D.$DvtRect$$(this.$_context$, 0, 
    0, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, "lbgrh"), $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, "rbgrh")) : ($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "lbgrh"), $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "rbgrh")), $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$.$setSolidFill$(this.$_leftFilterPanelColor$, 
    0), this.$addChild$($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$), $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$.$setSolidFill$(this.$_rightFilterPanelColor$, 
    0), this.$addChild$($actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$)))
  }
  this.$updateTimeAxis$($arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$);
  if(this.$_formattedTimeRanges$ != D.$JSCompiler_alias_NULL$$) {
    for($actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = 0;$actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ < this.$_formattedTimeRanges$.length;$actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$++) {
      $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = this.$_formattedTimeRanges$[$actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$], $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = 
      $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$ = 
      (0,window.parseInt)($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$.$getAttr$("rs"), 10), $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ = (0,window.parseInt)($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$.$getAttr$("re"), 
      10), $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$.$getAttr$("c"), $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$ != D.$JSCompiler_alias_NULL$$ && $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ != 
      D.$JSCompiler_alias_NULL$$ && ($cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$ = this.$getDatePosition$($leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$), $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ = this.$getDatePosition$($end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$) - 
      $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$, this.$isRTL$() && ($leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$ = $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$ - $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$ - $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$), $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = 
      this.$isVertical$() ? new D.$DvtRect$$(this.$_context$, 0, $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ - this.$getTimeAxisWidth$(), $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$, 
      "ftr") : new D.$DvtRect$$(this.$_context$, $leftGrippy$$inline_6991_rangeStart$$inline_9900_rangeStart_pos$$inline_9904$$, "above" == this.$_overviewPosition$ ? this.$getTimeAxisHeight$() : 0, $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$, $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ - 
      this.$getTimeAxisHeight$(), "ftr"), $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ != D.$JSCompiler_alias_NULL$$ && $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$.$setSolidFill$($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$, 
      0.4), $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$.setCursor("move"), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$), 
      this.$addChild$($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$))
    }
  }
  this.$_currentTime$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = 
  new D.$DvtLine$$(this.$_context$, 0, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ - $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$), 
  $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = new D.$DvtLine$$(this.$_context$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  0, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "ocd")), $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$), this.$addChild$($actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$));
  this.$parseDataXML$($arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$);
  $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ && ($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = 
  $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$getY$(), $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$getY$() + 
  $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.getHeight() - 1, this.$isFlashEnvironment$() || D.$DvtAgent$$.$isPlatformWebkit$() ? ($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = 
  0, $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$ = $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ - 1) : ($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = 1, $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$ = $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$), 
  $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = new D.$DvtLine$$(this.$_context$, 0, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, 
  $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, "lh"), $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = new D.$DvtLine$$(this.$_context$, 0, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, "rh"), $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ = 
  new D.$DvtLine$$(this.$_context$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, 0, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, 
  "ltb"), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, "rtb"), $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$ = new D.$DvtLine$$(this.$_context$, $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$, 
  $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, "bb"), $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = 
  new D.$DvtLine$$(this.$_context$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, 
  $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, "tb")) : ($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = 1, this.$isFlashEnvironment$() && ($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = 
  0), $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$ - 1, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = 
  $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$getX$(), $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$ = $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$getX$() + 
  $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.getWidth() - 1, $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, 
  $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  "lh"), $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = new D.$DvtLine$$(this.$_context$, $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  "rh"), $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ = new D.$DvtLine$$(this.$_context$, 0, window.Math.max(0, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ - 1), $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ + 
  1, window.Math.max(0, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ - 1), "ltb"), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ = new D.$DvtLine$$(this.$_context$, $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$ - 1, window.Math.max(0, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ - 
  1), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, window.Math.max(0, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ - 1), "rtb"), $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, 
  $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  "bb"), $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, 
  $cursor$$inline_6990_right$$inline_7022_size$$inline_9903$$, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$), "none" != this.$_windowBorderLeftStyle$ && $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$), "none" != this.$_windowBorderRightStyle$ && $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$.$setSolidStroke$(this.$_borderTopColor$), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$), 
  this.$addChild$($arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$), "none" != this.$_windowBorderTopStyle$ && $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$), this.$isFlashEnvironment$() && ($arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ = this.$isVertical$() ? window.DvtPathUtils.moveTo(6, 0) + window.DvtPathUtils.lineTo(0, 5) + window.DvtPathUtils.lineTo(5, 5) + window.DvtPathUtils.lineTo(5, 17) + 
  window.DvtPathUtils.lineTo(0, 17) + window.DvtPathUtils.lineTo(6, 22) + window.DvtPathUtils.lineTo(12, 17) + window.DvtPathUtils.lineTo(7, 17) + window.DvtPathUtils.lineTo(7, 5) + window.DvtPathUtils.lineTo(12, 5) + window.DvtPathUtils.closePath() : window.DvtPathUtils.moveTo(5, 0) + window.DvtPathUtils.lineTo(0, 6) + window.DvtPathUtils.lineTo(5, 12) + window.DvtPathUtils.lineTo(5, 7) + window.DvtPathUtils.lineTo(17, 7) + window.DvtPathUtils.lineTo(17, 12) + window.DvtPathUtils.lineTo(22, 6) + 
  window.DvtPathUtils.lineTo(17, 0) + window.DvtPathUtils.lineTo(17, 4) + window.DvtPathUtils.lineTo(5, 4) + window.DvtPathUtils.lineTo(5, 0) + window.DvtPathUtils.closePath(), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ = new D.$DvtPath$$(this.$_context$, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, "arr"), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$.$setSolidFill$("#ffffff"), 
  $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$.$setSolidStroke$("#000000"), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$addChild$($arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$), this.$_resizeArrow$ = $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$), 
  $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = this.$isVertical$(), $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$ = this.$getChildAt$(1), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = 
  $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ ? this.$Height$ : this.$Width$, $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = this.$_width$, $color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$ = 
  this.$_start$, $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = this.$_renderStart$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$, $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$, 0, $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$), 
  $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$ = D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_9902_elem$$inline_9897_leftHandleBackground$$inline_6988_rightBackground$$inline_6998_rightHandle$$inline_7024_slidingWindow$$1_start$$inline_7040$$, $end$$inline_7041_leftTopBar$$inline_7025_rangeEnd$$inline_9901_rangeWidth$$inline_9905_rightHandleBackground$$inline_6989_slidingWindowPos$$, 
  $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, $end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$), $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = 
  this.$getDatePosition$($day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$), $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = window.Math.min($actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  this.$getDatePosition$($end$$17_height$$inline_9899_leftBackground$$inline_6997_leftHandle$$inline_7023_rangeEndTime$$inline_7044_slidingWindow$$inline_6982_slidingWindow$$inline_7018_timeAxisTopBar$$inline_6996_timelineWidth$$inline_7039$$)), $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = this.$getDatePosition$($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$), 
  $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ -= $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, 
  $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ - $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ - $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$) : 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$), 
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$ = this.$_width$, $interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$ = this.$_start$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$ = 
  this.$_end$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  1, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$), $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, 
  2, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$), $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, 
  $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$, $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$), 
  this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$345_props$$14_renderStart$$inline_7042_renderStartPos$$inline_7047_start$$inline_9911_top$$inline_7019_topBar$$inline_7028_vertical$$inline_7035$$, $actualSize$$inline_7038_bottom$$inline_7020_end$$inline_9912_handleStart$$inline_6984_i$$inline_7007_line$$inline_7013_newWidth$$inline_7048_rangeEndPos$$inline_7046_rightBackgroundResizeHandle$$inline_7000_time_pos$$inline_7012$$, $arrow$$inline_7032_arrowCmds$$inline_7031_day2$$inline_9914_rightTopBar$$inline_7026_size$$inline_7037_width$$110$$, 
  $bottomBar$$inline_7027_height$$101_timelineWidth$$inline_9910_window$$inline_7036$$) - $day1$$inline_9913_displayable$$inline_9906_left$$inline_7021_leftBackgroundResizeHandle$$inline_6999_pos1$$inline_9915_rangeStartPos$$inline_7045_rangeStartTime$$inline_7043_start$$24_vertical$$inline_6981_width$$inline_9898$$);
  this.$_initialFocusTime$ != D.$JSCompiler_alias_NULL$$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && this.$longScrollToPos$(this.$_initPos$)
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$347$$) {
  return this.$getParser$($obj$$347$$).parse($obj$$347$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$15$$) {
  this.$_start$ = $props$$15$$.start;
  this.$_end$ = $props$$15$$.end;
  this.$_width$ = $props$$15$$.width;
  this.$_renderStart$ = $props$$15$$.$renderStart$;
  this.$_currentTime$ = $props$$15$$.currentTime;
  this.$_initialFocusTime$ = $props$$15$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$15$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$15$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$15$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$15$$.orientation;
  this.$_overviewPosition$ = $props$$15$$.$overviewPosition$;
  this.$_isRtl$ = $props$$15$$.$isRtl$;
  $props$$15$$.$featuresOff$ != D.$JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $props$$15$$.$featuresOff$.split(" "));
  $props$$15$$.$minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ && 0 < $props$$15$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$15$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$15$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$15$$.$timeAxisInfo$;
  $props$$15$$.$timeAxisInfo$ != D.$JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$15$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$15$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$15$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$15$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$15$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$15$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$15$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$15$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$15$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$15$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$15$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$15$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$15$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$15$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$15$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$15$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$15$$.$handleWidth$;
  this.$_handleHeight$ = $props$$15$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$15$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$15$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$15$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$15$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$15$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$15$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$15$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$15$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$15$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$6$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$6$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$57$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$57$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
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
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$) {
  var $id$$271$$ = $drawable$$.getId();
  return"lh" == $id$$271$$ || "rh" == $id$$271$$ || "lhb" == $id$$271$$ || "rhb" == $id$$271$$ || "grpy" == $id$$271$$ || "lbgrh" == $id$$271$$ || "rbgrh" == $id$$271$$ || $drawable$$.getParent() != D.$JSCompiler_alias_NULL$$ && "grpy" == $drawable$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$) {
    var $width$$111$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$111$$) && $width$$111$$ < this.$Width$ ? $width$$111$$ : 40
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
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$608$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$608$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$608$$.targetTouches.length ? $event$$608$$.targetTouches[0].pageX : D.$JSCompiler_alias_NULL$$ : $event$$608$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$609$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$609$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$609$$.targetTouches.length ? $event$$609$$.targetTouches[0].pageY : D.$JSCompiler_alias_NULL$$ : $event$$609$$.pageY
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
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$13$$, $pos1$$1$$, $pos2$$1$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$1$$ && $line$$13$$.$setY1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$13$$.$setY2$($pos2$$1$$)) : (-1 != $pos1$$1$$ && $line$$13$$.$setX1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$13$$.$setX2$($pos2$$1$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$14$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$14$$.$getY1$() : $line$$14$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$610_target$$111$$) {
  $event$$610_target$$111$$ = $event$$610_target$$111$$.target;
  if($event$$610_target$$111$$ != D.$JSCompiler_alias_NULL$$) {
    var $id$$272$$ = $event$$610_target$$111$$.getId();
    if($id$$272$$ == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    if("_border" == $id$$272$$.substr($id$$272$$.length - 7)) {
      return this.$getChildAfter$($event$$610_target$$111$$)
    }
    if("tick" != $id$$272$$.substr(0, 4) && "ltb" != $id$$272$$ && "rtb" != $id$$272$$ && "bb" != $id$$272$$ && "tab" != $id$$272$$) {
      return $event$$610_target$$111$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$1$$) {
  return"window" == $drawable$$1$$.getId() || "ftr" == $drawable$$1$$.getId() || "sta" == $drawable$$1$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$1$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$112$$, $height$$103$$) {
  var $background$$10$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$112$$, $height$$103$$, "bg");
  $background$$10$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$10$$);
  this.$addChild$($background$$10$$);
  return $background$$10$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self$$, $width$$114$$, $height$$105$$) {
  return new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self$$.$_context$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleBackgroundImage$, ($width$$114$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$) / 2, ($height$$105$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$, "grpy")
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, "grpy"), $color$$83$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$2$$ = 8 + $handlePos$$, $starty$$1$$ = 3, $i$$737$$ = 0;9 > $i$$737$$;$i$$737$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$ + 2 * $i$$737$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$737$$ + 1, $starty$$1$$, "dot1" + $i$$737$$);
      $dot$$.$setSolidStroke$($color$$83$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$ + 1 + 2 * $i$$737$$, $starty$$1$$, $startx$$2$$ + 1 + 2 * $i$$737$$ + 1, $starty$$1$$, "dot2" + $i$$737$$);
      $dot$$.$setSolidStroke$($color$$83$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$ + 2 * $i$$737$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$737$$ + 1, $starty$$1$$, "dot3" + $i$$737$$);
      $dot$$.$setSolidStroke$($color$$83$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot4");
    $dot$$.$setSolidStroke$($color$$83$$);
    $grippy$$.$addChild$($dot$$);
    $starty$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot5")
  }else {
    $startx$$2$$ = 3;
    $starty$$1$$ = 8 + $handlePos$$;
    for($i$$737$$ = 0;9 > $i$$737$$;$i$$737$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$, $starty$$1$$ + 2 * $i$$737$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$737$$ + 1, "dot1" + $i$$737$$), $dot$$.$setSolidStroke$($color$$83$$), $grippy$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$737$$, $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$737$$ + 1, "dot2" + $i$$737$$), $dot$$.$setSolidStroke$($color$$83$$), 
      $grippy$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$, $starty$$1$$ + 2 * $i$$737$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$737$$ + 1, "dot3" + $i$$737$$), $dot$$.$setSolidStroke$($color$$83$$), $grippy$$.$addChild$($dot$$), $startx$$2$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$83$$);
    $grippy$$.$addChild$($dot$$);
    $startx$$2$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$83$$);
  $grippy$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$);
  return $grippy$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$47$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$47$$.getHeight() : $rect$$47$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$4$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$4$$.$getTranslateY$() : $slidingWindow$$4$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$, $pos$$59$$) {
  $pos$$59$$ = window.Math.max(0, $pos$$59$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$5$$.$setTranslateY$($pos$$59$$) : $rightStart_slidingWindow$$5$$.$setTranslateX$($pos$$59$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$59$$);
    $rightStart_slidingWindow$$5$$ = $pos$$59$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$5$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$5$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    D.$JSCompiler_alias_NULL$$).$setX$($pos$$59$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$5$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$, $size$$34$$) {
  $size$$34$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$34$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$ = $size$$34$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$34$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$7$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$) : $rightGrippy$$1_slidingWindow$$7$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$) + $size$$34$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$7$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$34$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$.$setTranslateY$($size$$34$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateY$($size$$34$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$34$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_7056$$.$setTranslateX$($size$$34$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateX$($size$$34$$ - 10)))
};
D.$DvtOverview$$.prototype.$updateTimeAxis$ = function $$DvtOverview$$$$$updateTimeAxis$$($width$$117$$, $height$$108$$) {
  if(this.$_ticks$ != D.$JSCompiler_alias_NULL$$) {
    this.$isVertical$();
    for(var $size$$35$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $i$$738$$ = 0;$i$$738$$ < this.$_ticks$.length;$i$$738$$++) {
      var $child$$81_label$$78$$ = this.$_ticks$[$i$$738$$], $time$$6_time_pos$$ = (0,window.parseInt)($child$$81_label$$78$$.$getAttr$("time"), 10), $time$$6_time_pos$$ = this.$getDatePosition$($time$$6_time_pos$$), $child$$81_label$$78$$ = $child$$81_label$$78$$.$getAttr$("label"), $maxWidth$$25_next_time$$ = 0;
      $i$$738$$ + 1 < this.$_ticks$.length ? ($maxWidth$$25_next_time$$ = (0,window.parseInt)(this.$_ticks$[$i$$738$$ + 1].$getAttr$("time"), 10), $maxWidth$$25_next_time$$ = this.$getDatePosition$($maxWidth$$25_next_time$$) - $time$$6_time_pos$$) : $maxWidth$$25_next_time$$ = $size$$35$$ - $time$$6_time_pos$$;
      this.$isRTL$() && ($time$$6_time_pos$$ = $size$$35$$ - $time$$6_time_pos$$);
      this.$addTick$($time$$6_time_pos$$, $width$$117$$, $height$$108$$, "tick" + $i$$738$$);
      this.$addLabel$($time$$6_time_pos$$, $child$$81_label$$78$$, $width$$117$$, $height$$108$$, $maxWidth$$25_next_time$$, "label" + $i$$738$$)
    }
  }
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$15_pos$$60$$, $stroke$$104_width$$118$$, $height$$109$$, $id$$273$$) {
  $line$$15_pos$$60$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$_context$, 0, $line$$15_pos$$60$$, $stroke$$104_width$$118$$, $line$$15_pos$$60$$, $id$$273$$) : new D.$DvtLine$$(this.$_context$, $line$$15_pos$$60$$, 0, $line$$15_pos$$60$$, $height$$109$$, $id$$273$$);
  $stroke$$104_width$$118$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$104_width$$118$$.$setStyle$(1, 3);
  $line$$15_pos$$60$$.$setStroke$($stroke$$104_width$$118$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$15_pos$$60$$);
  this.$addChild$($line$$15_pos$$60$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($label$$79_pos$$61$$, $text$$103$$, $width$$119_y$$262$$, $height$$110$$, $maxWidth$$26$$, $id$$274$$) {
  this.$isVertical$() ? $label$$79_pos$$61$$ = new D.$DvtOutputText$$(this.$_context$, $text$$103$$, 4, $label$$79_pos$$61$$, $id$$274$$) : ($width$$119_y$$262$$ = "above" == this.$_overviewPosition$ ? 2 : $height$$110$$ - this.$getTimeAxisHeight$() + 2, $label$$79_pos$$61$$ = new D.$DvtOutputText$$(this.$_context$, $text$$103$$, $label$$79_pos$$61$$ + 5, $width$$119_y$$262$$, $id$$274$$));
  $label$$79_pos$$61$$.$setCSSStyle$(new D.$DvtCSSStyle$$("font-weight:bold"));
  D.$DvtTextUtils$$.$fitText$($label$$79_pos$$61$$, $maxWidth$$26$$, window.Infinity, this);
  $label$$79_pos$$61$$.$_rawText$ = $label$$79_pos$$61$$.$_untruncatedTextString$
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$1$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(5);
  if($newLeft$$1$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    1)), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$131_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$);
    $newLeft$$1$$ = window.Math.max($animator$$131_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$1$$));
    $animator$$131_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_context$, 0.5, 0, D.$DvtEasing$linear$$) : D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $posGetter$$, $posSetter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$1$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $newLeft$$1$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : D.$JSCompiler_alias_NULL$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$1$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$131_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    $animator$$131_minPos$$ != D.$JSCompiler_alias_NULL$$ && $animator$$131_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$132$$, $obj$$348$$, $getter$$5$$, $setter$$3$$, $value$$136$$) {
  $animator$$132$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132$$, "typeNumber", $obj$$348$$, $getter$$5$$, $setter$$3$$, $value$$136$$) : $setter$$3$$.call($obj$$348$$, $value$$136$$)
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtOverview$$$$$HandleShapeMouseOver$$($event$$611_relPos$$56$$) {
  var $drawable$$2$$ = this.$_findDrawable$($event$$611_relPos$$56$$);
  if($drawable$$2$$ && !("bg" == $drawable$$2$$.getId() || "ocd" == $drawable$$2$$.getId())) {
    if("label" == $drawable$$2$$.getId().substr(0, 5) && $drawable$$2$$ instanceof D.$DvtOutputText$$) {
      $drawable$$2$$.$isTruncated$() && this.$_context$.$getTooltipManager$().$showDatatip$($event$$611_relPos$$56$$.pageX, $event$$611_relPos$$56$$.pageY, $drawable$$2$$.$_rawText$, "#000000")
    }else {
      if(this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$) && ($event$$611_relPos$$56$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$611_relPos$$56$$.pageX, $event$$611_relPos$$56$$.pageY), $event$$611_relPos$$56$$ = this.$stageToLocal$($event$$611_relPos$$56$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$611_relPos$$56$$.x + 6, $event$$611_relPos$$56$$.y - 
      10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$611_relPos$$56$$.x - 6, $event$$611_relPos$$56$$.y - 20), this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_TRUE$$)), "window" == $drawable$$2$$.getId() || "ftr" == $drawable$$2$$.getId() || "arr" == $drawable$$2$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$2$$
      }
    }
  }
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtOverview$$$$$HandleShapeMouseOut$$($drawable$$3_event$$612$$) {
  this.$_moveDrawable$ == D.$JSCompiler_alias_NULL$$ && this.setCursor("default");
  $drawable$$3_event$$612$$ = this.$_findDrawable$($drawable$$3_event$$612$$);
  if($drawable$$3_event$$612$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$3_event$$612$$) && this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $drawable$$3_event$$612$$
  }
};
D.$DvtOverview$$.prototype.$HandleShapeClick$ = function $$DvtOverview$$$$$HandleShapeClick$$($event$$613_newEndTime_relPos$$57_slidingWindow$$9$$, $newPos$$1_pageX$$13$$, $evt$$73_pageY$$13_pos$$62$$) {
  $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$.stopPropagation();
  var $drawable$$4_newStartTime_size$$37$$ = this.$_findDrawable$($event$$613_newEndTime_relPos$$57_slidingWindow$$9$$);
  if($drawable$$4_newStartTime_size$$37$$ && !("window" == $drawable$$4_newStartTime_size$$37$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$4_newStartTime_size$$37$$))) {
    if("bg" == $drawable$$4_newStartTime_size$$37$$.getId() || "label" == $drawable$$4_newStartTime_size$$37$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$37$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$37$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$37$$.getId()) {
      $newPos$$1_pageX$$13$$ == D.$JSCompiler_alias_VOID$$ && ($newPos$$1_pageX$$13$$ = $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$.pageX);
      $evt$$73_pageY$$13_pos$$62$$ == D.$JSCompiler_alias_VOID$$ && ($evt$$73_pageY$$13_pos$$62$$ = $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$.pageY);
      $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $newPos$$1_pageX$$13$$, $evt$$73_pageY$$13_pos$$62$$);
      $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$stageToLocal$($event$$613_newEndTime_relPos$$57_slidingWindow$$9$$);
      this.$isVertical$() ? ($evt$$73_pageY$$13_pos$$62$$ = $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$.y, $drawable$$4_newStartTime_size$$37$$ = this.$Height$) : ($evt$$73_pageY$$13_pos$$62$$ = $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$.x, $drawable$$4_newStartTime_size$$37$$ = this.$Width$);
      $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$getChildAt$(1);
      $newPos$$1_pageX$$13$$ = $evt$$73_pageY$$13_pos$$62$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$1_pageX$$13$$);
      this.$isRTL$() && ($evt$$73_pageY$$13_pos$$62$$ = this.$Width$ - $evt$$73_pageY$$13_pos$$62$$);
      var $time$$7$$ = this.$getPositionDate$($evt$$73_pageY$$13_pos$$62$$);
      $evt$$73_pageY$$13_pos$$62$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$73_pageY$$13_pos$$62$$.setTime($time$$7$$);
      $newPos$$1_pageX$$13$$ = window.Math.max(0, window.Math.min($newPos$$1_pageX$$13$$, $drawable$$4_newStartTime_size$$37$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$)));
      $drawable$$4_newStartTime_size$$37$$ = this.$getPositionDate$($newPos$$1_pageX$$13$$);
      $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$getPositionDate$($newPos$$1_pageX$$13$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$73_pageY$$13_pos$$62$$, $drawable$$4_newStartTime_size$$37$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$73_pageY$$13_pos$$62$$, $event$$613_newEndTime_relPos$$57_slidingWindow$$9$$);
      this.dispatchEvent($evt$$73_pageY$$13_pos$$62$$)
    }else {
      return $drawable$$4_newStartTime_size$$37$$
    }
  }
};
D.$DvtOverview$$.prototype.$HandleMouseDown$ = function $$DvtOverview$$$$$HandleMouseDown$$($event$$614$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$614$$)
};
D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$ = function $$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$$($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$, $event$$615$$) {
  $event$$615$$.stopPropagation();
  var $drawable$$5_evt$$74$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_findDrawable$($event$$615$$);
  if($drawable$$5_evt$$74$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$5_evt$$74$$)) {
    if("ftr" == $drawable$$5_evt$$74$$.getId() || "sta" == $drawable$$5_evt$$74$$.getId()) {
      $drawable$$5_evt$$74$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1)
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initX$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$615$$);
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initY$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$615$$);
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$5_evt$$74$$)) {
      var $cursor$$inline_7059_slidingWindow$$10$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ = $cursor$$inline_7059_slidingWindow$$10$$.$getX$();
      $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ + $cursor$$inline_7059_slidingWindow$$10$$.getWidth();
      "grpy" == $drawable$$5_evt$$74$$.getParent().getId() && ($drawable$$5_evt$$74$$ = $drawable$$5_evt$$74$$.getParent());
      var $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ = $drawable$$5_evt$$74$$.getId();
      "grpy" == $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ && ($drawable$$5_evt$$74$$ = $cursor$$inline_7059_slidingWindow$$10$$.$getChildBefore$($drawable$$5_evt$$74$$), $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ = $drawable$$5_evt$$74$$.getId());
      if("lh" == $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ || "rh" == $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$) {
        $drawable$$5_evt$$74$$ = $cursor$$inline_7059_slidingWindow$$10$$.$getChildBefore$($drawable$$5_evt$$74$$), $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ = $drawable$$5_evt$$74$$.getId()
      }
      "lbgrh" == $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ && ($drawable$$5_evt$$74$$ = $cursor$$inline_7059_slidingWindow$$10$$.$getChildAt$(0));
      "rbgrh" == $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ && ($drawable$$5_evt$$74$$ = $cursor$$inline_7059_slidingWindow$$10$$.$getChildAt$($cursor$$inline_7059_slidingWindow$$10$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isVertical$() ? ($drawable$$5_evt$$74$$.$setY$(-20), $drawable$$5_evt$$74$$.$setHeight$(2 * ($drawable$$5_evt$$74$$.getHeight() + 20))) : ($drawable$$5_evt$$74$$.$setX$(-20), $drawable$$5_evt$$74$$.$setWidth$(2 * ($drawable$$5_evt$$74$$.getWidth() + 20))));
      $cursor$$inline_7059_slidingWindow$$10$$ = $drawable$$5_evt$$74$$.getCursor();
      $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ != D.$JSCompiler_alias_NULL$$ && $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$.setCursor($cursor$$inline_7059_slidingWindow$$10$$);
      if($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isLeftAndRightFilterRendered$()) {
        var $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$), $rightBackground$$inline_7062$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$);
        $drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7062$$ != D.$JSCompiler_alias_NULL$$ && ($drawableId_leftBackground$$inline_7061_slidingWindow$$inline_7060$$.setCursor($cursor$$inline_7059_slidingWindow$$10$$), $rightBackground$$inline_7062$$.setCursor($cursor$$inline_7059_slidingWindow$$10$$))
      }
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_moveDrawable$ = $drawable$$5_evt$$74$$;
    $drawable$$5_evt$$74$$ = new D.$DvtOverviewEvent$$("dropCallback");
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.dispatchEvent($drawable$$5_evt$$74$$)
  }
};
D.$DvtOverview$$.prototype.$HandleMouseUp$ = function $$DvtOverview$$$$$HandleMouseUp$$($event$$616$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$616$$)
};
D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$ = function $$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$$($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$, $event$$617$$) {
  $event$$617$$ != D.$JSCompiler_alias_NULL$$ && $event$$617$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$) {
    if("window" == $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.getId()) {
      $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishWindowDrag$(0, 0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$)) {
        $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isVertical$() ? ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setY$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setX$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_7066_slidingWindow$$inline_7065$$ = $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$getChildAt$(1);
        $leftBackground$$inline_7066_slidingWindow$$inline_7065$$ != D.$JSCompiler_alias_NULL$$ && $leftBackground$$inline_7066_slidingWindow$$inline_7065$$.setCursor("move");
        if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_7066_slidingWindow$$inline_7065$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$), $rightBackground$$inline_7067$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$);
          $leftBackground$$inline_7066_slidingWindow$$inline_7065$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7067$$ != D.$JSCompiler_alias_NULL$$ && ($leftBackground$$inline_7066_slidingWindow$$inline_7065$$.setCursor("default"), $rightBackground$$inline_7067$$.setCursor("default"))
        }
      }
    }
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_initX$ = -1
  }
};
D.$DvtOverview$$.prototype.$HandleMouseMove$ = function $$DvtOverview$$$$$HandleMouseMove$$($event$$618$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$618$$)
};
D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$ = function $$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$$($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, $event$$619$$) {
  $event$$619$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && -1 != $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$) {
    var $pageX$$14$$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$619$$), $pageY$$14$$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$619$$), $diffX$$8$$ = $pageX$$14$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$, $diffY$$9$$ = $pageY$$14$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$ = $pageX$$14$$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$ = $pageY$$14$$;
    "window" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleWindowDragPositioning$(0, $diffX$$8$$, $diffY$$9$$) : "lh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "lhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, 
    $event$$619$$, $diffX$$8$$, $diffY$$9$$, D.$JSCompiler_alias_TRUE$$) : ("rh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "rhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId()) && $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleRightHandleDragPositioning$($event$$619$$, $diffX$$8$$, $diffY$$9$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$620$$) {
  var $target$$112$$ = $event$$620$$.targetTouches[0];
  this.$_touchStartX$ = $target$$112$$.pageX;
  this.$_touchStartY$ = $target$$112$$.pageY;
  2 == $event$$620$$.targetTouches.length ? ($event$$620$$.preventDefault(), $target$$112$$ = $event$$620$$.targetTouches[1], this.$_touchStartX2$ = $target$$112$$.pageX, this.$_touchStartY2$ = $target$$112$$.pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$) : (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$620$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$621$$) {
  $event$$621$$.preventDefault();
  if(this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$) {
    if(50 > this.$_counter$) {
      this.$_counter$++
    }else {
      var $target$$113$$ = $event$$621$$.targetTouches[1];
      this.$handleRightHandleDragPositioning$(D.$JSCompiler_alias_NULL$$, $target$$113$$.pageX - this.$_touchStartX2$, 0);
      this.$_touchStartX2$ = $target$$113$$.pageX;
      this.$_counter$ = 0
    }
  }else {
    $target$$113$$ = $event$$621$$.targetTouches[0];
    if(this.$_touchStartX$ != $target$$113$$.pageX || this.$_touchStartY$ != $target$$113$$.pageY) {
      this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
    }
    (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$621$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$622$$) {
  this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : (this.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)(this.$_moveDrawable$) && this.$_moveDrawable$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$), (0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$622$$), this.$_touchStartX$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY$ != 
  D.$JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($event$$622$$, this.$_touchStartX$, this.$_touchStartY$));
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$623$$) {
  var $delta$$16_keyCode$$31$$ = $event$$623$$.keyCode;
  if(37 === $delta$$16_keyCode$$31$$ || 39 === $delta$$16_keyCode$$31$$) {
    $delta$$16_keyCode$$31$$ = 37 === $delta$$16_keyCode$$31$$ ? -1 : 1, ($event$$623$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$623$$, $delta$$16_keyCode$$31$$, $delta$$16_keyCode$$31$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$624$$) {
  var $delta$$17_keyCode$$32$$ = $event$$624$$.keyCode;
  if(37 === $delta$$17_keyCode$$32$$ || 39 === $delta$$17_keyCode$$32$$) {
    $delta$$17_keyCode$$32$$ = 37 === $delta$$17_keyCode$$32$$ ? -1 : 1, ($event$$624$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $event$$624$$, $delta$$17_keyCode$$32$$, $delta$$17_keyCode$$32$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$longScrollToPos$ = function $$JSCompiler_prototypeAlias$$$$longScrollToPos$$($actualAmount$$1_pos$$63$$) {
  $actualAmount$$1_pos$$63$$ /= this.$_increment$;
  this.$isRTL$() && ($actualAmount$$1_pos$$63$$ = 0 - $actualAmount$$1_pos$$63$$);
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$1_pos$$63$$)
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$625$$, $deltaX$$12$$, $deltaY$$11$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$12$$, $deltaY$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($event$$626$$, $deltaX$$13$$, $deltaY$$12$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$13$$, $deltaY$$12$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$75_type$$209$$, $delta$$18_deltaX$$14$$, $deltaY$$13$$) {
  var $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$66$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$38$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$18_deltaX$$14$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$13$$ : $delta$$18_deltaX$$14$$;
  $pos$$66$$ + $delta$$18_deltaX$$14$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$38$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -2 : -1) : $pos$$66$$ + $newStartTime$$1_scrollTo_size$$38$$ + $delta$$18_deltaX$$14$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$38$$), $newStartTime$$1_scrollTo_size$$38$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $pos$$66$$ + $delta$$18_deltaX$$14$$), $newStartTime$$1_scrollTo_size$$38$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$38$$ - 
  $pos$$66$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$66$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$75_type$$209$$ = new D.$DvtOverviewEvent$$($evt$$75_type$$209$$);
  $evt$$75_type$$209$$.$setPosition$($newStartTime$$1_scrollTo_size$$38$$);
  $newStartTime$$1_scrollTo_size$$38$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$66$$);
  $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$66$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$75_type$$209$$, $newStartTime$$1_scrollTo_size$$38$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$75_type$$209$$, $newEndTime$$1_slidingWindow$$17$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$75_type$$209$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$628$$, $deltaX$$16$$, $deltaY$$15$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$628$$, $deltaX$$16$$, $deltaY$$15$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $event$$629_newSize$$1_relPos$$58_time$$9$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$, $delta$$19_deltaY$$16$$, $isLeft$$4_newStartTime$$2$$) {
  var $evt$$76_size$$39$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$19_deltaY$$16$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$19_deltaY$$16$$ : $deltaX$$17_newEndTime$$2_slidingWindow$$18$$;
  if(0 != $delta$$19_deltaY$$16$$) {
    $deltaX$$17_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$);
    if($isLeft$$4_newStartTime$$2$$) {
      if($windowSize$$ - $delta$$19_deltaY$$16$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$19_deltaY$$16$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $event$$629_newSize$$1_relPos$$58_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$629_newSize$$1_relPos$$58_time$$9$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$629_newSize$$1_relPos$$58_time$$9$$)).y : (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, 
      (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$629_newSize$$1_relPos$$58_time$$9$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$629_newSize$$1_relPos$$58_time$$9$$)).x;
      $event$$629_newSize$$1_relPos$$58_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($event$$629_newSize$$1_relPos$$58_time$$9$$);
      if(0 < $delta$$19_deltaY$$16$$ && $event$$629_newSize$$1_relPos$$58_time$$9$$ <= $windowPos$$ || 0 > $delta$$19_deltaY$$16$$ && $event$$629_newSize$$1_relPos$$58_time$$9$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$, $windowPos$$ + $delta$$19_deltaY$$16$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ - $delta$$19_deltaY$$16$$)
    }else {
      if($windowSize$$ + $delta$$19_deltaY$$16$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$19_deltaY$$16$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $event$$629_newSize$$1_relPos$$58_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$629_newSize$$1_relPos$$58_time$$9$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$629_newSize$$1_relPos$$58_time$$9$$)).y : (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, 
      (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$629_newSize$$1_relPos$$58_time$$9$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$629_newSize$$1_relPos$$58_time$$9$$)).x;
      $event$$629_newSize$$1_relPos$$58_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($event$$629_newSize$$1_relPos$$58_time$$9$$);
      if(0 < $delta$$19_deltaY$$16$$ && $event$$629_newSize$$1_relPos$$58_time$$9$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$19_deltaY$$16$$ && $event$$629_newSize$$1_relPos$$58_time$$9$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ + $delta$$19_deltaY$$16$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $event$$629_newSize$$1_relPos$$58_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$));
    $event$$629_newSize$$1_relPos$$58_time$$9$$ = $evt$$76_size$$39$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($event$$629_newSize$$1_relPos$$58_time$$9$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRangeChangingSupported$() && ($evt$$76_size$$39$$ = new D.$DvtOverviewEvent$$("rangeChanging"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$76_size$$39$$, "newSize", $event$$629_newSize$$1_relPos$$58_time$$9$$), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$76_size$$39$$, "endHandle", !$isLeft$$4_newStartTime$$2$$), $isLeft$$4_newStartTime$$2$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$76_size$$39$$, "expand", 
    0 > $delta$$19_deltaY$$16$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$76_size$$39$$, "expand", 0 < $delta$$19_deltaY$$16$$), $isLeft$$4_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$)), $deltaX$$17_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$17_newEndTime$$2_slidingWindow$$18$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$)), (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$76_size$$39$$, $isLeft$$4_newStartTime$$2$$), (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$76_size$$39$$, $deltaX$$17_newEndTime$$2_slidingWindow$$18$$), $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$76_size$$39$$))
  }
};
D.$DvtOverview$$.prototype.$isRangeChangingSupported$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$2_start$$31$$ = this.$_start$, $end$$24_oldStartTime$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$40$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$3_slidingWindow$$19$$ = this.$getChildAt$(1), $newStartTime$$3_time$$10$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newSize$$2_start$$31$$ = $oldEndTime_size$$40$$ * ($end$$24_oldStartTime$$ - $newSize$$2_start$$31$$) / 
  ($newStartTime$$3_time$$10$$ - $newSize$$2_start$$31$$), $end$$24_oldStartTime$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$40$$ = this.$getPositionDate$(this.$_oldEndPos$), $newStartTime$$3_time$$10$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + 
  (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $evt$$77$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$77$$, "oldSize", $oldSize$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$77$$, "newSize", $newSize$$2_start$$31$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$77$$, "oldStartTime", $end$$24_oldStartTime$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$77$$, "oldEndTime", $oldEndTime_size$$40$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$77$$, $newStartTime$$3_time$$10$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$77$$, $newEndTime$$3_slidingWindow$$19$$);
  this.dispatchEvent($evt$$77$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $slidingWindow$$20$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $leftHandle$$3$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  1)), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$20$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$20$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$20$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, 
  $slidingWindow$$20$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$20$$) + 1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$) - 1, -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$631$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$631$$)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$66$$) {
  this.Init($view$$66$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$88$$) {
  return this.$ParseRootAttributes$($data$$88$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$229$$) {
  var $ret$$114$$ = {};
  $ret$$114$$.$animationOnClick$ = $options$$229$$.animationOnClick;
  $options$$229$$.startTime != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.start = $options$$229$$.startTime);
  $options$$229$$.endTime != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.end = $options$$229$$.endTime);
  $ret$$114$$.start == D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.start = (new window.Date).getTime());
  if($ret$$114$$.end == D.$JSCompiler_alias_NULL$$ || $ret$$114$$.end <= $ret$$114$$.start) {
    $ret$$114$$.end = $ret$$114$$.start + 864E5
  }
  $options$$229$$.currentTime != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.currentTime = $options$$229$$.currentTime);
  $options$$229$$.initialFocusTime != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$initialFocusTime$ = $options$$229$$.initialFocusTime);
  $ret$$114$$.orientation = "horizontal";
  $options$$229$$.orientation != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.orientation = $options$$229$$.orientation);
  $ret$$114$$.$featuresOff$ = $options$$229$$.featuresOff;
  $ret$$114$$.$minimumWindowSize$ = $options$$229$$.minimumWindowSize;
  $ret$$114$$.$leftMargin$ = $options$$229$$.leftMargin;
  $ret$$114$$.$rightMargin$ = $options$$229$$.rightMargin;
  if($options$$229$$.viewportEndTime != D.$JSCompiler_alias_NULL$$) {
    var $viewportEndTime$$ = $options$$229$$.viewportEndTime, $viewportStartTime$$ = $ret$$114$$.start;
    $options$$229$$.viewportStartTime != D.$JSCompiler_alias_NULL$$ && $options$$229$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$229$$.viewportStartTime);
    $ret$$114$$.width = $options$$229$$.viewportEndPos != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$114$$.start, $ret$$114$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$229$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$114$$.start, $ret$$114$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$114$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$114$$.$renderStart$ = $ret$$114$$.start
  }
  0 == $ret$$114$$.width && ($ret$$114$$.width = 1E3);
  $ret$$114$$.$overviewPosition$ = "below";
  $ret$$114$$.$selectionMode$ = "none";
  $ret$$114$$.$isRtl$ = D.$DvtAgent$$.$isRightToLeft$(this.$_view$.$_context$).toString();
  $options$$229$$.rtl != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$isRtl$ = $options$$229$$.rtl.toString());
  $ret$$114$$.$handleFillColor$ = "#FFFFFF";
  $ret$$114$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$114$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$114$$.$windowBackgroundAlpha$ = 1;
  $ret$$114$$.$windowBorderTopStyle$ = "solid";
  $ret$$114$$.$windowBorderRightStyle$ = "solid";
  $ret$$114$$.$windowBorderBottomStyle$ = "solid";
  $ret$$114$$.$windowBorderLeftStyle$ = "solid";
  $ret$$114$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$114$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$114$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$114$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$114$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$114$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$114$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$114$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$114$$.$timeAxisBarOpacity$ = 1;
  $ret$$114$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$114$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$114$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$114$$.$rightFilterPanelAlpha$ = 0.7;
  $options$$229$$.style != D.$JSCompiler_alias_NULL$$ && ($options$$229$$.style.handleFillColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$handleFillColor$ = $options$$229$$.style.handleFillColor), $options$$229$$.style.handleTextureColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$handleTextureColor$ = $options$$229$$.style.handleTextureColor), $options$$229$$.style.handleBackgroundImage != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$handleBackgroundImage$ = $options$$229$$.style.handleBackgroundImage), 
  $options$$229$$.style.handleWidth != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$handleWidth$ = $options$$229$$.style.handleWidth), $options$$229$$.style.handleHeight != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$handleHeight$ = $options$$229$$.style.handleHeight), $options$$229$$.style.windowBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$windowBackgroundColor$ = $options$$229$$.style.windowBackgroundColor), $options$$229$$.style.windowBackgroundAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$114$$.$windowBackgroundAlpha$ = $options$$229$$.style.windowBackgroundAlpha), $options$$229$$.style.windowBorderTopStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$windowBorderTopStyle$ = $options$$229$$.style.windowBorderTopStyle), $options$$229$$.style.windowBorderRightStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$windowBorderRightStyle$ = $options$$229$$.style.windowBorderRightStyle), $options$$229$$.style.windowBorderBottomStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$windowBorderBottomStyle$ = 
  $options$$229$$.style.windowBorderBottomStyle), $options$$229$$.style.windowBorderLeftStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$windowBorderLeftStyle$ = $options$$229$$.style.windowBorderLeftStyle), $options$$229$$.style.windowBorderTopColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$windowBorderTopColor$ = $options$$229$$.style.windowBorderTopColor), $options$$229$$.style.windowBorderRightColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$windowBorderRightColor$ = $options$$229$$.style.windowBorderRightColor), 
  $options$$229$$.style.windowBorderBottomColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$windowBorderBottomColor$ = $options$$229$$.style.windowBorderBottomColor), $options$$229$$.style.windowBorderLeftColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$windowBorderLeftColor$ = $options$$229$$.style.windowBorderLeftColor), $options$$229$$.style.overviewBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$overviewBackgroundColor$ = $options$$229$$.style.overviewBackgroundColor), $options$$229$$.style.currentTimeIndicatorColor != 
  D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$currentTimeIndicatorColor$ = $options$$229$$.style.currentTimeIndicatorColor), $options$$229$$.style.timeIndicatorColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$timeIndicatorColor$ = $options$$229$$.style.timeIndicatorColor), $options$$229$$.style.leftFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$leftFilterPanelColor$ = $options$$229$$.style.leftFilterPanelColor), $options$$229$$.style.leftFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$114$$.$leftFilterPanelAlpha$ = $options$$229$$.style.leftFilterPanelAlpha), $options$$229$$.style.rightFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$rightFilterPanelColor$ = $options$$229$$.style.rightFilterPanelColor), $options$$229$$.style.rightFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && ($ret$$114$$.$rightFilterPanelAlpha$ = $options$$229$$.style.rightFilterPanelAlpha));
  return $ret$$114$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$1_startTime$$, $endTime$$, $denominator_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$1_startTime$$ = $viewportEndPos$$ * ($endTime$$ - $number$$1_startTime$$);
  $denominator_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator_viewportStartTime$$1$$;
  return 0 == $number$$1_startTime$$ || 0 == $denominator_viewportStartTime$$1$$ ? 0 : $number$$1_startTime$$ / $denominator_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$210$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$210$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$11$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$11$$)
};
D.$DvtOverviewEvent$$.prototype.getTime = function $$DvtOverviewEvent$$$$getTime$() {
  return this.$getParamValue$("time")
};
D.$JSCompiler_StaticMethods_setNewStartTime$$ = function $$JSCompiler_StaticMethods_setNewStartTime$$$($JSCompiler_StaticMethods_setNewStartTime$self$$, $newStartTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewStartTime$self$$, "newStartTime", $newStartTime$$4$$)
};
D.$JSCompiler_StaticMethods_setNewEndTime$$ = function $$JSCompiler_StaticMethods_setNewEndTime$$$($JSCompiler_StaticMethods_setNewEndTime$self$$, $newEndTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewEndTime$self$$, "newEndTime", $newEndTime$$4$$)
};
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$67$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$67$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
});