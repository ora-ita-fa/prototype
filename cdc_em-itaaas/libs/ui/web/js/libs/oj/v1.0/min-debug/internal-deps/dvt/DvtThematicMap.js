define(['./DvtToolkit', './DvtPanZoomCanvas', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAmxThematicMap$$ = function $$DvtAmxThematicMap$$$($context$$26$$, $callback$$43$$, $callbackObj$$20$$) {
  this.Init($context$$26$$, $callback$$43$$, $callbackObj$$20$$)
};
(0,D.$goog$exportSymbol$$)("DvtAmxThematicMap", D.$DvtAmxThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAmxThematicMap$$, D.$DvtContainer$$, "DvtAmxThematicMap");
D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$ = 10;
D.$DvtAmxThematicMap$$.prototype.Init = function $$DvtAmxThematicMap$$$$Init$($context$$27$$, $callback$$44$$, $callbackObj$$21$$) {
  D.$DvtAmxThematicMap$$.$superclass$.Init.call(this, $context$$27$$);
  this.$_tmap$ = new D.$DvtThematicMap$$($context$$27$$, $callback$$44$$, $callbackObj$$21$$);
  this.$_tmapContainer$ = new D.$DvtContainer$$($context$$27$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtAmxThematicMap$$.newInstance = function $$DvtAmxThematicMap$$$newInstance$($context$$28$$, $callback$$45$$, $callbackObj$$22$$) {
  return new D.$DvtAmxThematicMap$$($context$$28$$, $callback$$45$$, $callbackObj$$22$$)
};
D.$DvtAmxThematicMap$$.newInstance = D.$DvtAmxThematicMap$$.newInstance;
D.$DvtAmxThematicMap$$.prototype.$render$ = function $$DvtAmxThematicMap$$$$$render$$($options$$13$$, $availSpace$$4_width$$22$$, $height$$22$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$13$$);
  this.$_width$ = $availSpace$$4_width$$22$$;
  this.$_height$ = $height$$22$$;
  $availSpace$$4_width$$22$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$4_width$$22$$, $height$$22$$);
  this.$_renderLegend$(this, $availSpace$$4_width$$22$$);
  this.$_tmap$.$render$($options$$13$$, $availSpace$$4_width$$22$$.$w$, $availSpace$$4_width$$22$$.$h$)
};
D.$DvtAmxThematicMap$$.prototype.render = D.$DvtAmxThematicMap$$.prototype.$render$;
D.$DvtAmxThematicMap$$.prototype.$_renderLegend$ = function $$DvtAmxThematicMap$$$$$_renderLegend$$($container$$11$$, $availSpace$$5$$) {
  this.$_legend$ && ($container$$11$$.removeChild(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  var $availLegendSpace$$ = new D.$DvtRectangle$$(D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$5$$.$w$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$5$$.$h$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$), $gap$$1_options$$14$$ = this.$Options$, $position_rendered$$ = $gap$$1_options$$14$$.legend.rendered, $actualSize_isHoriz_isRTL$$2_scrolling$$ = $gap$$1_options$$14$$.legend.scrolling, $legendOptions$$ = D.$DvtJSONUtils$$.clone($gap$$1_options$$14$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$);
  if($position_rendered$$ && !($legendOptions$$.$sections$ && 0 == $legendOptions$$.$sections$.length)) {
    $position_rendered$$ = $gap$$1_options$$14$$.legend.position;
    delete $legendOptions$$.position;
    $legendOptions$$.layout.gapRatio = this.$getGapRatio$();
    $legendOptions$$.hideAndShowBehavior = "none";
    $legendOptions$$.rolloverBehavior = "none";
    $legendOptions$$.scrolling = $gap$$1_options$$14$$.legend.scrolling;
    var $legend$$ = (0,D.$DvtLegend$newInstance$$)(this.$_tmap$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
    this.$_tmap$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$.setId(this.$_tmap$.getId() + "legend");
    $container$$11$$.$addChild$($legend$$);
    "auto" == $position_rendered$$ && "asNeeded" !== $actualSize_isHoriz_isRTL$$2_scrolling$$ ? $position_rendered$$ = "bottom" : "auto" == $position_rendered$$ && "asNeeded" == $actualSize_isHoriz_isRTL$$2_scrolling$$ && ($position_rendered$$ = "end");
    $actualSize_isHoriz_isRTL$$2_scrolling$$ = D.$DvtAgent$$.$isRightToLeft$($container$$11$$.$_context$);
    "start" == $position_rendered$$ ? $position_rendered$$ = $actualSize_isHoriz_isRTL$$2_scrolling$$ ? "right" : "left" : "end" == $position_rendered$$ && ($position_rendered$$ = $actualSize_isHoriz_isRTL$$2_scrolling$$ ? "left" : "right");
    $legendOptions$$.orientation = "left" == $position_rendered$$ || "right" == $position_rendered$$ ? "vertical" : "horizontal";
    $actualSize_isHoriz_isRTL$$2_scrolling$$ = "top" == $position_rendered$$ || "bottom" == $position_rendered$$;
    $actualSize_isHoriz_isRTL$$2_scrolling$$ = $legend$$.$getPreferredSize$($legendOptions$$, $actualSize_isHoriz_isRTL$$2_scrolling$$ ? $availLegendSpace$$.$w$ : $gap$$1_options$$14$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize_isHoriz_isRTL$$2_scrolling$$ ? $gap$$1_options$$14$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize_isHoriz_isRTL$$2_scrolling$$.$w$ && 0 < $actualSize_isHoriz_isRTL$$2_scrolling$$.$h$) {
      switch($legend$$.$render$($legendOptions$$, $actualSize_isHoriz_isRTL$$2_scrolling$$.$w$, $actualSize_isHoriz_isRTL$$2_scrolling$$.$h$), this.$_legend$ = $legend$$, $gap$$1_options$$14$$ = window.Math.ceil($gap$$1_options$$14$$.layout.legendGap * this.$getGapRatio$()), (0,D.$DvtLayoutUtils$position$$)($availLegendSpace$$, $position_rendered$$, $legend$$, $actualSize_isHoriz_isRTL$$2_scrolling$$.$w$, $actualSize_isHoriz_isRTL$$2_scrolling$$.$h$, $gap$$1_options$$14$$), $position_rendered$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize_isHoriz_isRTL$$2_scrolling$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$5$$.$h$ -= $actualSize_isHoriz_isRTL$$2_scrolling$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize_isHoriz_isRTL$$2_scrolling$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$5$$.$w$ -= $actualSize_isHoriz_isRTL$$2_scrolling$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$
      }
    }
  }
};
D.$DvtAmxThematicMap$$.prototype.$getGapRatio$ = function $$DvtAmxThematicMap$$$$$getGapRatio$$() {
  if(this.$Options$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)(this.$Options$.layout.gapRatio)) {
    return this.$Options$.layout.gapRatio
  }
  var $wRatio$$ = window.Math.min(this.$_width$ / 400, 1), $hRatio$$ = window.Math.min(this.$_height$ / 300, 1);
  return window.Math.min($wRatio$$, $hRatio$$)
};
D.$DvtAmxThematicMap$$.prototype.$_addLegendData$ = function $$DvtAmxThematicMap$$$$$_addLegendData$$($data$$21$$, $legendOptions$$1$$) {
  $legendOptions$$1$$.title = $data$$21$$.legend ? $data$$21$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$1$$.sections = [];
  if($data$$21$$ && $data$$21$$.legend && $data$$21$$.legend.sections) {
    for(var $i$$22$$ = 0;$i$$22$$ < $data$$21$$.legend.sections.length;$i$$22$$++) {
      var $dataSection$$ = $data$$21$$.legend.sections[$i$$22$$];
      $dataSection$$ && $legendOptions$$1$$.sections.push({title:$dataSection$$.title, items:$dataSection$$.items, sections:$dataSection$$.sections})
    }
  }
  return $legendOptions$$1$$
};
D.$DvtThematicMap$$ = function $$DvtThematicMap$$$($context$$29$$, $callback$$46$$, $callbackObj$$23$$) {
  this.Init($context$$29$$, $callback$$46$$, $callbackObj$$23$$)
};
(0,D.$goog$exportSymbol$$)("DvtThematicMap", D.$DvtThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMap$$, D.$DvtAbstractPanZoomComponent$$, "DvtThematicMap");
D.$DvtThematicMap$$.prototype.Init = function $$DvtThematicMap$$$$Init$($context$$30$$, $callback$$47$$, $callbackObj$$24$$) {
  D.$DvtThematicMap$$.$superclass$.Init.call(this, $context$$30$$);
  this.$_callback$ = $callback$$47$$;
  this.$_callbackObj$ = $callbackObj$$24$$;
  (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this);
  this.$_layers$ = [];
  this.$_drillAnimFadeOutObjs$ = [];
  this.$_legendButtonImages$ = this.$_legendXml$ = this.$_legendPanel$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_bBaseMapChanged$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drilledRowKeys$ = [];
  this.$_initDrilled$ = {};
  this.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drillDataLayer$ = {};
  this.$_childToParent$ = {};
  this.$_drilled$ = [];
  this.$_areaLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_labelLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_initialZooming$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$;
  this.$_maxZoomFactor$ = 6;
  this.$_isMarkerZoomBehaviorFixed$ = D.$JSCompiler_alias_TRUE$$;
  this.$_selectedAreas$ = {};
  this.$_displayedControls$ = 16777215;
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtThematicMap$$.newInstance = function $$DvtThematicMap$$$newInstance$($context$$31$$, $callback$$48$$, $callbackObj$$25$$) {
  return new D.$DvtThematicMap$$($context$$31$$, $callback$$48$$, $callbackObj$$25$$)
};
D.$DvtThematicMap$$.prototype.$SetOptions$ = function $$DvtThematicMap$$$$$SetOptions$$($options$$15$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$15$$);
  D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  this.$Options$.skin || (this.$Options$.skin = "alta")
};
D.$DvtThematicMap$$.prototype.$render$ = function $$DvtThematicMap$$$$$render$$($options$$16$$, $width$$23$$, $height$$23$$) {
  $options$$16$$ && "object" == typeof $options$$16$$ && this.$SetOptions$($options$$16$$);
  D.$DvtThematicMap$$.$superclass$.$render$.call(this, $options$$16$$, $width$$23$$, $height$$23$$)
};
D.$DvtThematicMap$$.prototype.render = D.$DvtThematicMap$$.prototype.$render$;
D.$JSCompiler_StaticMethods_getLayer$$ = function $$JSCompiler_StaticMethods_getLayer$$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$) {
  for(var $i$$23$$ = 0;$i$$23$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$23$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$23$$].$LayerName$ == $layerName$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$23$$]
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($attr$$3$$) {
  this.$_animationDuration$ = (0,window.parseFloat)($attr$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = function $$JSCompiler_prototypeAlias$$$$setFeaturesOff$$($attr$$5_controls$$) {
  this.$_featuresOff$ = (0,window.parseInt)($attr$$5_controls$$);
  D.$DvtThematicMap$$.$superclass$.$setFeaturesOff$.call(this, this.$_featuresOff$);
  $attr$$5_controls$$ = this.$_displayedControls$;
  if(1 == this.$_featuresOff$ || 3 == this.$_featuresOff$ || 5 == this.$_featuresOff$ || 7 == this.$_featuresOff$) {
    $attr$$5_controls$$ &= -17, this.$_panning$ = D.$JSCompiler_alias_FALSE$$
  }
  if(2 == this.$_featuresOff$ || 3 == this.$_featuresOff$ || 6 == this.$_featuresOff$ || 7 == this.$_featuresOff$) {
    $attr$$5_controls$$ &= -4098, this.$_zooming$ = D.$JSCompiler_alias_FALSE$$
  }
  if(4 == this.$_featuresOff$ || 5 == this.$_featuresOff$ || 6 == this.$_featuresOff$ || 7 == this.$_featuresOff$) {
    $attr$$5_controls$$ &= -257
  }
  this.$_displayedControls$ = $attr$$5_controls$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = function $$JSCompiler_prototypeAlias$$$$setDrillMode$$($attr$$10$$) {
  this.$_drillMode$ = $attr$$10$$;
  this.$_eventHandler$.$setDrillMode$($attr$$10$$)
};
D.$JSCompiler_prototypeAlias$$.$loadXml$ = function $$JSCompiler_prototypeAlias$$$$loadXml$$($xmlString$$6$$, $eventType$$5$$, $paramKeys$$, $paramValues$$) {
  this.$Options$ ? (new D.$DvtThematicMapJsonParser$$(this)).parse(this.$Options$) : $xmlString$$6$$ == D.$JSCompiler_alias_NULL$$ || 0 == $xmlString$$6$$.length || D.$DvtThematicMap$$.$superclass$.$loadXml$.call(this, $xmlString$$6$$, $eventType$$5$$, $paramKeys$$, $paramValues$$)
};
D.$JSCompiler_prototypeAlias$$.$LoadXmlInitial$ = function $$JSCompiler_prototypeAlias$$$$LoadXmlInitial$$($eventType$$6$$, $rootXmlNode$$) {
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$;
  this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendButtonImages$ = this.$_legendXml$ = this.$_legend$ = this.$_legendPanel$ = D.$JSCompiler_alias_NULL$$, this.$setFeaturesOff$(0), this.$_displayedControls$ = 16777215, this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$, this.$_oldPzc$ = this.$_pzc$, this.$_areaLayers$ = 
  new D.$DvtContainer$$(this.$_context$), this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$_context$), this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$_context$), this.$_labelLayers$ = new D.$DvtContainer$$(this.$_context$), (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this));
  this.$_eventHandler$.$hideTooltip$();
  this.$GetXmlDomParser$().$loadXmlInitial$($rootXmlNode$$)
};
D.$JSCompiler_StaticMethods__createHandlers$$ = function $$JSCompiler_StaticMethods__createHandlers$$$($JSCompiler_StaticMethods__createHandlers$self$$) {
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$ = new D.$DvtThematicMapEventManager$$($JSCompiler_StaticMethods__createHandlers$self$$.$_context$, $JSCompiler_StaticMethods__createHandlers$self$$.$__dispatchEvent$, $JSCompiler_StaticMethods__createHandlers$self$$);
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$addListeners$($JSCompiler_StaticMethods__createHandlers$self$$);
  D.$DvtAgent$$.$isTouchDevice$() ? $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = new D.$DvtThematicMapKeyboardHandler$$($JSCompiler_StaticMethods__createHandlers$self$$, $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)($JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$, $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleLegendResize$ = function $$JSCompiler_prototypeAlias$$$$HandleLegendResize$$($event$$5_x$$78$$) {
  D.$DvtAgent$$.$isRightToLeft$(this.$_context$) || ($event$$5_x$$78$$ = this.$_width$ - 5 - $event$$5_x$$78$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$5_x$$78$$))
};
D.$JSCompiler_prototypeAlias$$.$_renderLegend$ = function $$JSCompiler_prototypeAlias$$$$_renderLegend$$() {
  if(this.$_legendXml$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$ = "true" == this.$_legendXml$.$getAttr$("disclosed"), $isFixed$$ = "fixed" == this.$_legendXml$.$getAttr$("display") || D.$DvtAgent$$.$isEnvironmentBatik$();
    if(!$isFixed$$ || $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$) {
      var $expandTooltip_maxWidth$$1_overState$$ = this.$_legendXml$.$getAttr$("maxWidth"), $collapseTooltip_downState_maxHeight$$1_percentIndex$$ = $expandTooltip_maxWidth$$1_overState$$.indexOf("%"), $expandTooltip_maxWidth$$1_overState$$ = -1 != $collapseTooltip_downState_maxHeight$$1_percentIndex$$ ? (0,window.parseFloat)($expandTooltip_maxWidth$$1_overState$$.substring(0, $collapseTooltip_downState_maxHeight$$1_percentIndex$$)) / 100 * this.$_width$ : (0,window.parseFloat)($expandTooltip_maxWidth$$1_overState$$), 
      $collapseTooltip_downState_maxHeight$$1_percentIndex$$ = this.$_height$ - 10;
      if("alta" == this.$_skinName$) {
        this.$_legendPanel$ = new D.$DvtPanelDrawer$$(this.$_context$, D.$JSCompiler_alias_NULL$$, this, "pd"), this.$_legendPanel$.$addEvtListener$("dvtPanelDrawerEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setMaxWidth$($expandTooltip_maxWidth$$1_overState$$), this.$_legendPanel$.$setMaxHeight$($collapseTooltip_downState_maxHeight$$1_percentIndex$$), this.$_legendPanel$.$_isFixed$ = $isFixed$$, D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? (this.$_legendPanel$.$_discloseDirection$ = 
        "right", this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.$_width$)
      }else {
        this.$_legendPanel$ = new D.$DvtCollapsiblePanel$$(this.$_context$, $expandTooltip_maxWidth$$1_overState$$, $collapseTooltip_downState_maxHeight$$1_percentIndex$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$, this.$_legendButtonImages$, this.$getControlPanelStyleMap$(), $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$, $isFixed$$);
        this.$_legendPanel$.$addEvtListener$("dvtCollapsiblePanelEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this);
        this.$_legendPanel$.$addEvtListener$("dvtResizeEvent", this.$HandleLegendResize$, D.$JSCompiler_alias_FALSE$$, this);
        var $expandTooltip_maxWidth$$1_overState$$ = this.$_legendXml$.$getAttr$("expandTooltip"), $collapseTooltip_downState_maxHeight$$1_percentIndex$$ = this.$_legendXml$.$getAttr$("collapseTooltip"), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? "col_northwest" : "col_northeast", $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$ = 
        this.$_legendPanel$;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$.$_expandTooltip$ = $expandTooltip_maxWidth$$1_overState$$;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$.$_collapseTooltip$ = $collapseTooltip_downState_maxHeight$$1_percentIndex$$
      }
      this.$_legend$ = new D.DvtCommonLegend(this.$_context$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$(), this.$_legendButtonImages$, this.$_legendStyleMap$);
      this.$_legend$.$setXML$(this.$_legendXml$);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      this.$_legend$.$render$();
      var $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$;
      if("alta" == this.$_skinName$) {
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$ = this.$_legend$.$getDimensions$();
        (0,D.$JSCompiler_StaticMethods_setMaxContainerHeight$$)(this.$_legendPanel$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$.$h$);
        this.removeChild(this.$_legend$);
        var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendEna, 0, 0, 24, 24), $expandTooltip_maxWidth$$1_overState$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendOvr, 0, 0, 24, 24), $collapseTooltip_downState_maxHeight$$1_percentIndex$$ = new D.$DvtImage$$(this.$_context$, 
        (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendDwn, 0, 0, 24, 24), $tip$$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendTip;
        (0,D.$JSCompiler_StaticMethods_addPanel$$)(this.$_legendPanel$, this.$_legend$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$, $expandTooltip_maxWidth$$1_overState$$, $collapseTooltip_downState_maxHeight$$1_percentIndex$$, $tip$$, "legend");
        this.$_legendPanel$.$renderComponent$();
        $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$ && this.$_legendPanel$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$ = this.$_legendPanel$, $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$ = this.$_legend$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_scrollableContainer$.$addChild$($disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$), $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$.$addEvtListener$("dvtResizeEvent", 
        $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$HandleResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$ = $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_scrollableContainer$.$getDimensions$(), $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$ = 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$.$w$ + 10, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$.$h$ + 10, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_height$ = 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_width$ = $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_background$ ? ($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$, 
        $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$)), $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$ = "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseDir$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonFrame$ && $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$ && $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_width$)) : ($disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_context$, 
        (0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$, $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$)), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$ = 
        $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_styleMap$.borderAlpha, $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$.$setSolidFill$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_bgColor$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_bgAlpha$), $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$.$setSolidStroke$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_borderColor$, 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_1080_alpha$$inline_8177_dim_dims$$inline_1086_height$$inline_1088_legendCollapseDir_upState$$), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_background$ = $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$addChildAt$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_background$, 
        0), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_isFixed$ || ($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonFrame$ = D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_context$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonFrame$.$setAlpha$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_styleMap$.borderAlpha), 
        $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonFrame$), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseExpandButton$ = $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_context$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonImages$, 
        25, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_context$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonFrame$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseExpandButton$), 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseDir$ || ($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonFrame$.$setTranslateY$(25), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonFrame$.$setRotation$(-window.Math.PI)), D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_context$) && 
        $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_width$), D.$DvtAgent$$.$isTouchDevice$() ? $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$) : 
        ($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$OnButtonHoverOver$, 
        D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$)))), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$_collapse$ && 
        (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? 5 : this.$_width$ - 5 - $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$w$ - 
        $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.x, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_legendPanel$, $disclosed_object$$inline_1085_rect$$inline_8176_west$$inline_1089_width$$inline_1087_x$$79$$, 5), $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$w$ += 5
      }
      if(this.$_isFixedLegend$ = $isFixed$$) {
        $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$ || ($JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $JSCompiler_StaticMethods_addContent$self$$inline_1084_legendPanelDim$$.$w$
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$InitComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$InitComponentInternal$$() {
  D.$DvtThematicMap$$.$superclass$.$InitComponentInternal$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$RenderComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$RenderComponentInternal$$() {
  D.$DvtThematicMap$$.$superclass$.$RenderComponentInternal$.call(this);
  var $pzcContainer$$ = new D.$DvtContainer$$(this.$_context$), $cpContainer$$ = new D.$DvtContainer$$(this.$_context$);
  this.$_pzc$.$addChild$($pzcContainer$$);
  this.$_pzc$.$_contentPane$.$addChild$($cpContainer$$);
  this.$_render$($pzcContainer$$, $cpContainer$$);
  if(this.$_topLayer$) {
    (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
    (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
    var $bounds$$11$$ = new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$_animationOnDisplay$, this.$_pzc$, $bounds$$11$$, this.$_animationDuration$))
    }else {
      var $anim$$1$$ = D.$JSCompiler_alias_NULL$$;
      if(this.$_bBaseMapChanged$ && !this.$_bRenderNullXml$) {
        $anim$$1$$ = this.$_animationOnMapChange$
      }else {
        if(this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$1$$ = this.$_topLayer$.$getAnimation$(), !$anim$$1$$)) {
          var $dataLayers$$ = this.$_topLayer$.$DataLayers$, $i$$24$$;
          for($i$$24$$ in $dataLayers$$) {
            if($dataLayers$$[$i$$24$$].$getAnimation$()) {
              $anim$$1$$ = $dataLayers$$[$i$$24$$].$getAnimation$();
              break
            }
          }
        }
      }
      $anim$$1$$ && D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$1$$) ? (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, $anim$$1$$, this.$_oldPzc$, this.$_pzc$, $bounds$$11$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$) : this.$_pzc$.$_contentPane$.removeChild(this.$_cpContainer$)
    }
    this.$_animation$ && (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$removeListeners$(this), this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play());
    this.$_pzcContainer$ = $pzcContainer$$;
    this.$_cpContainer$ = $cpContainer$$;
    this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
    this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_prototypeAlias$$.$_render$ = function $$JSCompiler_prototypeAlias$$$$_render$$($pzcContainer$$1$$, $cpContainer$$1$$) {
  this.$_renderLegend$();
  $cpContainer$$1$$.$addChild$(this.$_areaLayers$);
  $cpContainer$$1$$.$addChild$(this.$_dataAreaLayers$);
  this.$_isMarkerZoomBehaviorFixed$ ? $pzcContainer$$1$$.$addChild$(this.$_dataPointLayers$) : $cpContainer$$1$$.$addChild$(this.$_dataPointLayers$);
  $pzcContainer$$1$$.$addChild$(this.$_labelLayers$);
  var $fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = D.$JSCompiler_alias_FALSE$$;
  for(var $i$$25_mapDim$$inline_8183$$ = 0;$i$$25_mapDim$$inline_8183$$ < this.$_layers$.length;$i$$25_mapDim$$inline_8183$$++) {
    var $layer$$2_pzcDim$$inline_8184$$ = this.$_layers$[$i$$25_mapDim$$inline_8183$$];
    if(!this.$_topLayerRendered$ && $layer$$2_pzcDim$$inline_8184$$ instanceof D.$DvtMapAreaLayer$$ || !($layer$$2_pzcDim$$inline_8184$$ instanceof D.$DvtMapAreaLayer$$)) {
      $layer$$2_pzcDim$$inline_8184$$.$render$($fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$), !this.$_topLayerRendered$ && $layer$$2_pzcDim$$inline_8184$$ instanceof D.$DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = D.$JSCompiler_alias_TRUE$$, this.$_topLayer$ = $layer$$2_pzcDim$$inline_8184$$)
    }
  }
  this.$_topLayer$ && ($fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 0 == $fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$.length && ($fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), this.$_keyboardHandler$ && ($fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$ = 
  $fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, $fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$), this.$_pzc$.$setMinZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$setMaxZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$_bZoomingEnabled$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$, 
  !this.$_bBaseMapChanged$ && !this.$_bRenderNullXml$ && this.$_initialZoom$ != D.$JSCompiler_alias_NULL$$ ? (this.$_pzc$.$zoomTo$(this.$_initialZoom$), this.$_pzc$.$panTo$(this.$_initialCenterX$, this.$_initialCenterY$)) : this.$_initialZooming$ ? (0,D.$JSCompiler_StaticMethods__zoomData$$)(this) : this.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, this.$_topLayer$.$getLayerDim$()), (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)(this), $fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$ = 
  this.$_pzc$.$_zoomToFitPadding$, $i$$25_mapDim$$inline_8183$$ = this.$_topLayer$.$getLayerDim$(), $layer$$2_pzcDim$$inline_8184$$ = this.$_pzc$.$getSize$(), $layer$$2_pzcDim$$inline_8184$$.$w$ = this.$_isFixedLegend$ ? $layer$$2_pzcDim$$inline_8184$$.$w$ - this.$_legendWidth$ : $layer$$2_pzcDim$$inline_8184$$.$w$, $fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$ = window.Math.min(($layer$$2_pzcDim$$inline_8184$$.$w$ - 2 * $fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$) / 
  $i$$25_mapDim$$inline_8183$$.$w$, ($layer$$2_pzcDim$$inline_8184$$.$h$ - 2 * $fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$) / $i$$25_mapDim$$inline_8183$$.$h$), this.$_pzc$.$setMinZoom$($fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$), this.$_pzc$.$setMaxZoom$($fittedZoom$$inline_1101_navigable$$inline_1092_navigables_pzcMatrix_zoomPadding$$inline_8182$$ * (this.$_zooming$ ? this.$_maxZoomFactor$ : 
  1)), this.$_pzc$.$_bZoomingEnabled$ = this.$_zooming$, this.$_pzc$.$_bPanningEnabled$ = this.$_panning$)
};
D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$ = function $$JSCompiler_StaticMethods_OnUpdateLayerEnd$$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) {
  (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZooming$ ? (0,D.$JSCompiler_StaticMethods__zoomData$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) : $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZoom$ == D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$getLayerDim$())
};
D.$DvtThematicMap$$.prototype.$setResources$ = function $$DvtThematicMap$$$$$setResources$$($childNodes_resources$$) {
  $childNodes_resources$$ = $childNodes_resources$$.$getChildNodes$();
  for(var $i$$26$$ = 0;$i$$26$$ < $childNodes_resources$$.length;$i$$26$$++) {
    var $arAttrs_node$$17$$ = $childNodes_resources$$[$i$$26$$], $j$$3_nodeName$$ = $arAttrs_node$$17$$.getName();
    if("controlPanelResources" == $j$$3_nodeName$$) {
      D.$DvtThematicMap$$.$superclass$.$setButtonImages$.call(this, $arAttrs_node$$17$$)
    }else {
      if("legendResources" == $j$$3_nodeName$$) {
        this.$_legendButtonImages$ = $arAttrs_node$$17$$
      }else {
        if("panelDrawerResources" == $j$$3_nodeName$$) {
          $arAttrs_node$$17$$ = $arAttrs_node$$17$$.getAttributes();
          for($j$$3_nodeName$$ = 0;$j$$3_nodeName$$ < $arAttrs_node$$17$$.length;$j$$3_nodeName$$++) {
            var $pair$$ = $arAttrs_node$$17$$[$j$$3_nodeName$$];
            (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this)[$pair$$.name] = $pair$$.value
          }
        }
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$setRolloverBehavior$ = (0,D.$JSCompiler_set$$)("$_rolloverBehavior$");
D.$DvtThematicMap$$.prototype.$GetXmlDomParser$ = function $$DvtThematicMap$$$$$GetXmlDomParser$$() {
  return new D.$DvtThematicMapParser$$(this)
};
D.$JSCompiler_StaticMethods__transformContainers$$ = function $$JSCompiler_StaticMethods__transformContainers$$$($JSCompiler_StaticMethods__transformContainers$self$$, $pzcMatrix$$1$$) {
  var $mat$$ = new D.$DvtMatrix$$;
  $mat$$.translate($pzcMatrix$$1$$.$_tx$, $pzcMatrix$$1$$.$_ty$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_isMarkerZoomBehaviorFixed$ && $JSCompiler_StaticMethods__transformContainers$self$$.$_dataPointLayers$.$setMatrix$($mat$$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_labelLayers$.$setMatrix$($mat$$)
};
D.$DvtThematicMap$$.prototype.$HandleControlPanelEvent$ = function $$DvtThematicMap$$$$$HandleControlPanelEvent$$($event$$6$$) {
  D.$DvtThematicMap$$.$superclass$.$HandleControlPanelEvent$.call(this, $event$$6$$);
  var $spEvent$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$, "controlPanelBehavior", "show" == $event$$6$$.$getSubType$() ? "initExpanded" : "initCollapsed");
  this.$__dispatchEvent$($spEvent$$)
};
D.$DvtThematicMap$$.prototype.$HandleLegendEvent$ = function $$DvtThematicMap$$$$$HandleLegendEvent$$($event$$7$$) {
  var $spEvent$$1$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$1$$, D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$, "show" == $event$$7$$.$getSubType$());
  this.$__dispatchEvent$($spEvent$$1$$)
};
D.$JSCompiler_StaticMethods__updateAnimator$$ = function $$JSCompiler_StaticMethods__updateAnimator$$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator$$2_event$$8$$, $bRecenterObjs_transMat$$) {
  if($animator$$2_event$$8$$ = $animator$$2_event$$8$$.$_animator$) {
    var $contentPane$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$1$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$2_event$$8$$, $contentPane$$, $contentPane$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_event$$8$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$1$$));
    $bRecenterObjs_transMat$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $mat$$1$$.$_tx$, $mat$$1$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_event$$8$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_event$$8$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandleZoomEvent$ = function $$DvtThematicMap$$$$$HandleZoomEvent$$($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$) {
  switch($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panning$) {
        var $i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$ = $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$_newZoom$;
        $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$ = this.$_pzc$.$getSize$();
        $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$ = new D.$DvtRectangle$$($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$, $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$, $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$.$w$ - 2 * $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$, $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$.$h$ - 2 * $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$);
        var $legendAdjust$$inline_1143_mapDim$$inline_1138$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_1144_zoomedMapX$$inline_1139$$ = $legendAdjust$$inline_1143_mapDim$$inline_1138$$.x * $i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$, $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$ = $legendAdjust$$inline_1143_mapDim$$inline_1138$$.y * $i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$, $zoomedMapW$$inline_1141$$ = $legendAdjust$$inline_1143_mapDim$$inline_1138$$.$w$ * 
        $i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$, $i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$ = $legendAdjust$$inline_1143_mapDim$$inline_1138$$.$h$ * $i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$;
        $zoomedMapW$$inline_1141$$ > $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$w$ ? (this.$_pzc$.$_minPanX$ = $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.x + $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$w$ - ($minMaxX$$inline_1144_zoomedMapX$$inline_1139$$ + $zoomedMapW$$inline_1141$$), this.$_pzc$.$_maxPanX$ = $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.x - 
        $minMaxX$$inline_1144_zoomedMapX$$inline_1139$$) : ($legendAdjust$$inline_1143_mapDim$$inline_1138$$ = 0, this.$_isFixedLegend$ && (D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? $legendAdjust$$inline_1143_mapDim$$inline_1138$$ = this.$_isZoomingToFit$ ? 2 * -this.$_legendWidth$ : -this.$_legendWidth$ : this.$_isZoomingToFit$ || ($legendAdjust$$inline_1143_mapDim$$inline_1138$$ = this.$_legendWidth$)), $minMaxX$$inline_1144_zoomedMapX$$inline_1139$$ = ($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.x + 
        $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$w$ - $legendAdjust$$inline_1143_mapDim$$inline_1138$$) / 2 - ($minMaxX$$inline_1144_zoomedMapX$$inline_1139$$ + $zoomedMapW$$inline_1141$$ / 2), this.$_pzc$.$_minPanX$ = $minMaxX$$inline_1144_zoomedMapX$$inline_1139$$, this.$_pzc$.$_maxPanX$ = $minMaxX$$inline_1144_zoomedMapX$$inline_1139$$);
        $i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$ > $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$h$ ? (this.$_pzc$.$_minPanY$ = $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.y + $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$h$ - ($pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$ + $i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$), this.$_pzc$.$_maxPanY$ = $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.y - 
        $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$) : ($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$ = ($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.y + $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$h$) / 2 - ($pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$ + $i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$ / 2), this.$_pzc$.$_minPanY$ = $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$, 
        this.$_pzc$.$_maxPanY$ = $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$)
      }
      break;
    case "zooming":
    ;
    case "elasticAnimBegin":
      (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomed":
      if($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$_newZoom$ != D.$JSCompiler_alias_NULL$$) {
        $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$, "panX", $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$.$_tx$);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$, "panY", $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$.$_ty$);
        $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
        D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$);
        (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$);
        for($i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$ = 0;$i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$ < this.$_layers$.length;$i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$++) {
          this.$_layers$[$i$$27_zoom$$inline_1134_zoomedMapH$$inline_1142$$].$HandleZoomEvent$($event$$9_minMaxY$$inline_1145_padding$$inline_1135_viewportDim$$inline_1137$$, $pzcDim$$inline_1136_pzcMatrix$$2_zoomedMapY$$inline_1140$$)
        }
      }
      break;
    case "zoomAndCenter":
      (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this);
      break;
    case "zoomToFitBegin":
      this.$_isZoomingToFit$ = D.$JSCompiler_alias_TRUE$$;
      this.$_isFixedLegend$ && this.$_pzc$.$setSize$(this.$_width$ - this.$_legendWidth$, this.$_height$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomToFitEnd":
      this.$_isZoomingToFit$ = D.$JSCompiler_alias_FALSE$$, this.$_isFixedLegend$ && this.$_pzc$.$setSize$(this.$_width$, this.$_height$, D.$JSCompiler_alias_TRUE$$), D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, new D.$DvtZoomEvent$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandlePanEvent$ = function $$DvtThematicMap$$$$$HandlePanEvent$$($event$$10_i$$28_stroke$$1$$) {
  var $subType$$2$$ = $event$$10_i$$28_stroke$$1$$.$getSubType$();
  if("elasticAnimBegin" == $subType$$2$$) {
    (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$10_i$$28_stroke$$1$$, D.$JSCompiler_alias_FALSE$$)
  }else {
    if("panned" == $subType$$2$$ && $event$$10_i$$28_stroke$$1$$.$_newX$ != D.$JSCompiler_alias_NULL$$) {
      var $pzcMatrix$$3_styleMap$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$10_i$$28_stroke$$1$$, "zoom", this.$_pzc$.$getZoom$());
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$10_i$$28_stroke$$1$$, "panX", $pzcMatrix$$3_styleMap$$.$_tx$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$10_i$$28_stroke$$1$$, "panY", $pzcMatrix$$3_styleMap$$.$_ty$);
      $event$$10_i$$28_stroke$$1$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
      D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$10_i$$28_stroke$$1$$);
      (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcMatrix$$3_styleMap$$);
      for($event$$10_i$$28_stroke$$1$$ = 0;$event$$10_i$$28_stroke$$1$$ < this.$_layers$.length;$event$$10_i$$28_stroke$$1$$++) {
        this.$_layers$[$event$$10_i$$28_stroke$$1$$].$HandlePanEvent$($pzcMatrix$$3_styleMap$$)
      }
    }
  }
  this.$_legendPanel$ && ("alta" == this.$_skinName$ ? "dragPanBegin" === $subType$$2$$ ? this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$) : "dragPanEnd" === $subType$$2$$ && this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$) : ($pzcMatrix$$3_styleMap$$ = this.$getControlPanelStyleMap$(), $event$$10_i$$28_stroke$$1$$ = this.$_legendPanel$.$_background$.$getStroke$().clone(), "dragPanBegin" === $subType$$2$$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$3_styleMap$$.backgroundDragAlpha), 
  $event$$10_i$$28_stroke$$1$$.$setAlpha$($pzcMatrix$$3_styleMap$$.borderDragAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$10_i$$28_stroke$$1$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$3_styleMap$$.borderDragAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)) : "dragPanEnd" === $subType$$2$$ && (this.$_legend$.$setAlpha$(1), $event$$10_i$$28_stroke$$1$$.$setAlpha$($pzcMatrix$$3_styleMap$$.borderAlpha), 
  this.$_legendPanel$.$_background$.$setStroke$($event$$10_i$$28_stroke$$1$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$3_styleMap$$.borderAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$))))
};
D.$DvtThematicMap$$.prototype.$CreatePanZoomCanvas$ = function $$DvtThematicMap$$$$$CreatePanZoomCanvas$$($ww$$2$$, $hh$$1$$) {
  if("none" == this.$_drillMode$ && (7 == this.$_featuresOff$ || !this.$_zooming$ && "alta" == this.$_skinName$)) {
    this.$_controlPanelBehavior$ = "hidden"
  }
  this.$_pzc$ = D.$DvtThematicMap$$.$superclass$.$CreatePanZoomCanvas$.call(this, $ww$$2$$, $hh$$1$$);
  if("hidden" != this.$_controlPanelBehavior$ && "none" != this.$_drillMode$) {
    var $callbacks$$3_controlPanel$$ = [D.$DvtObj$$.$createCallback$(this, this.$drillUp$), D.$DvtObj$$.$createCallback$(this, this.$drillDown$), D.$DvtObj$$.$createCallback$(this, this.$resetMap$)], $callbacks$$3_controlPanel$$ = new D.$DvtThematicMapControlPanel$$(this.$_context$, this.$_drillMode$, this.$_buttonImages$, $callbacks$$3_controlPanel$$, this.$_pzc$, this.$_panZoomResources$, this.$_displayedControls$, this);
    (0,D.$JSCompiler_StaticMethods_setControlPanel$$)(this.$_pzc$, $callbacks$$3_controlPanel$$)
  }
  return this.$_eventHandler$.$_pzc$ = this.$_pzc$
};
D.$JSCompiler_StaticMethods__processInitialDrilled$$ = function $$JSCompiler_StaticMethods__processInitialDrilled$$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_TRUE$$;
  for(var $i$$29$$ = 0;$i$$29$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$29$$++) {
    var $layerName$$2$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$29$$].$LayerName$;
    $layerName$$2$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$2$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$2$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$2$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$2$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$resetMap$ = function $$DvtThematicMap$$$$$resetMap$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $animator$$inline_1154_removeObjs$$ = [], $addObjs$$ = [], $i$$30_j$$4$$ = this.$_layers$.length - 1;-1 < $i$$30_j$$4$$;$i$$30_j$$4$$--) {
    this.$_layers$[$i$$30_j$$4$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$30_j$$4$$].reset($addObjs$$) : this.$_layers$[$i$$30_j$$4$$].reset($animator$$inline_1154_removeObjs$$)
  }
  for($i$$30_j$$4$$ = 0;$i$$30_j$$4$$ < $animator$$inline_1154_removeObjs$$.length;$i$$30_j$$4$$++) {
    if($animator$$inline_1154_removeObjs$$[$i$$30_j$$4$$]) {
      var $parent$$4$$ = $animator$$inline_1154_removeObjs$$[$i$$30_j$$4$$].getParent();
      $parent$$4$$ && $parent$$4$$.removeChild($animator$$inline_1154_removeObjs$$[$i$$30_j$$4$$])
    }
  }
  for($i$$30_j$$4$$ = 0;$i$$30_j$$4$$ < $addObjs$$.length;$i$$30_j$$4$$++) {
    $addObjs$$[$i$$30_j$$4$$] && $addObjs$$[$i$$30_j$$4$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_1154_removeObjs$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_1154_removeObjs$$);
  $animator$$inline_1154_removeObjs$$.play();
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ((0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods__zoomData$$ = function $$JSCompiler_StaticMethods__zoomData$$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$12$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$2$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$2$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$2$$.$_d$;
    $pointBounds$$.x /= $mat$$2$$.$_a$;
    $pointBounds$$.y /= $mat$$2$$.$_d$
  }
  $areaBounds_bounds$$12$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($areaBounds_bounds$$12$$, $pointBounds$$);
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__zoomData$self$$);
  D.$DvtAgent$$.$isEnvironmentBrowser$() && ($JSCompiler_StaticMethods__zoomData$self$$.$_animation$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__zoomData$self$$.$_context$, 0.3));
  0 < $areaBounds_bounds$$12$$.$w$ && 0 < $areaBounds_bounds$$12$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $areaBounds_bounds$$12$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $JSCompiler_StaticMethods__zoomData$self$$.$_animation$ && $JSCompiler_StaticMethods__zoomData$self$$.$_animation$.play()
};
D.$DvtThematicMap$$.prototype.$_zoomToFitBounds$ = function $$DvtThematicMap$$$$$_zoomToFitBounds$$($bounds$$13$$) {
  var $animator$$3$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$3$$, $bounds$$13$$);
  $animator$$3$$.play()
};
D.$JSCompiler_StaticMethods_fitSelectedRegions$$ = function $$JSCompiler_StaticMethods_fitSelectedRegions$$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer_selection$$2_selectionHandler$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer_selection$$2_selectionHandler$$ && ($dataLayer_selection$$2_selectionHandler$$ = $dataLayer_selection$$2_selectionHandler$$.$_selectionHandler$)) {
      for(var $dataLayer_selection$$2_selectionHandler$$ = $dataLayer_selection$$2_selectionHandler$$.getSelection(), $i$$31$$ = 0;$i$$31$$ < $dataLayer_selection$$2_selectionHandler$$.length;$i$$31$$++) {
        $dataLayer_selection$$2_selectionHandler$$[$i$$31$$] = $dataLayer_selection$$2_selectionHandler$$[$i$$31$$].$getDisplayable$()
      }
      if(0 < $dataLayer_selection$$2_selectionHandler$$.length) {
        for(var $bounds$$14$$ = $dataLayer_selection$$2_selectionHandler$$[0].$getDimensions$(), $i$$31$$ = 1;$i$$31$$ < $dataLayer_selection$$2_selectionHandler$$.length;$i$$31$$++) {
          $bounds$$14$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$14$$, $dataLayer_selection$$2_selectionHandler$$[$i$$31$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$14$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getDrillParentLayer$$ = function $$JSCompiler_StaticMethods_getDrillParentLayer$$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $layerName$$3$$) {
  var $parentLayerName$$ = D.$DvtBaseMapManager$$.$getParentLayerName$($JSCompiler_StaticMethods_getDrillParentLayer$self$$.$_mapName$, $layerName$$3$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $parentLayerName$$)
};
D.$JSCompiler_StaticMethods_getDrillChildLayer$$ = function $$JSCompiler_StaticMethods_getDrillChildLayer$$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $layerName$$4$$) {
  var $childLayerName$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($JSCompiler_StaticMethods_getDrillChildLayer$self$$.$_mapName$, $layerName$$4$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $childLayerName$$)
};
D.$JSCompiler_StaticMethods_getNavigableAreas$$ = function $$JSCompiler_StaticMethods_getNavigableAreas$$$($JSCompiler_StaticMethods_getNavigableAreas$self$$) {
  var $disclosed$$1$$ = [];
  if($JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$) {
    for(var $i$$32$$ = 0;$i$$32$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$32$$++) {
      var $dataLayers$$1$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$32$$].$DataLayers$, $id$$14$$;
      for($id$$14$$ in $dataLayers$$1$$) {
        $disclosed$$1$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$32$$].$LayerName$ ? $disclosed$$1$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$)($dataLayers$$1$$[$id$$14$$])) : $disclosed$$1$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$)($dataLayers$$1$$[$id$$14$$]))
      }
    }
  }
  return $disclosed$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableObjects$$ = function $$JSCompiler_StaticMethods_getNavigableObjects$$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$33$$ = 0;$i$$33$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$33$$++) {
      var $dataLayers$$2$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$33$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$33$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$33$$] instanceof D.$DvtMapAreaLayer$$)) {
        for(var $id$$15$$ in $dataLayers$$2$$) {
          $navigable$$ = $navigable$$.concat($dataLayers$$2$$[$id$$15$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$
};
D.$DvtThematicMap$$.prototype.$_setCenteredObjsMatrix$ = function $$DvtThematicMap$$$$$_setCenteredObjsMatrix$$($matrix$$3$$) {
  this.$_currentAnimMatrix$ = $matrix$$3$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$3$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this), $i$$34_j$$5$$ = 0;$i$$34_j$$5$$ < $numLabelLayers_objs$$3$$.length;$i$$34_j$$5$$++) {
      $numLabelLayers_objs$$3$$[$i$$34_j$$5$$].$HandleZoomEvent$($matrix$$3$$)
    }
    $numLabelLayers_objs$$3$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$34_j$$5$$ = 0;$i$$34_j$$5$$ < $numLabelLayers_objs$$3$$;$i$$34_j$$5$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$34_j$$5$$), $numLabels$$ = $labelLayer$$.$getNumChildren$(), $k$$ = 0;$k$$ < $numLabels$$;$k$$++) {
        var $label$$2$$ = $labelLayer$$.$getChildAt$($k$$);
        $label$$2$$ instanceof D.$DvtMapLabel$$ && $label$$2$$.update($matrix$$3$$)
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$_getCenteredObjsMatrix$ = (0,D.$JSCompiler_get$$)("$_currentAnimMatrix$");
D.$DvtThematicMap$$.prototype.$drillDown$ = function $$DvtThematicMap$$$$$drillDown$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  var $childLayer$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$ = [];
  if($childLayer$$) {
    this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
    var $selectedAreas$$ = this.$_selectedAreas$[this.$_clickedLayerName$];
    !this.$_processingInitDrilled$ && "single" == this.$_drillMode$ && (this.$_drilled$.pop(), $parentLayer$$.reset($fadeInObjs$$, $selectedAreas$$), $childLayer$$.reset(this.$_drillAnimFadeOutObjs$));
    for(var $newSelectedAreas$$ = [], $i$$35$$ = 0;$i$$35$$ < $selectedAreas$$.length;$i$$35$$++) {
      var $parentArea$$ = $selectedAreas$$[$i$$35$$], $JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$ = (0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$, $parentArea$$);
      $newSelectedAreas$$.push($JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$[0]);
      for(var $areaName$$inline_1157_j$$6$$ = 0;$areaName$$inline_1157_j$$6$$ < $JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.length;$areaName$$inline_1157_j$$6$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$[$areaName$$inline_1157_j$$6$$]] = $selectedAreas$$[$i$$35$$]
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$, $fadeInObjs$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$ = $parentLayer$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_1157_j$$6$$ = $parentArea$$, $fadeOutObjs$$inline_1158$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$ = 0;$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$ < $JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.$_areaObjs$.length;$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$].$AreaId$ == $areaName$$inline_1157_j$$6$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$].$setDrilled$(D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.$_drilled$.push($areaName$$inline_1157_j$$6$$);
            $fadeOutObjs$$inline_1158$$.push($JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$].$getDisplayable$());
            if($i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$ = $JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$].$getLabel$()) {
              $fadeOutObjs$$inline_1158$$.push($i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$), ($i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$ = $i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$.$_leaderLine$) && $fadeOutObjs$$inline_1158$$.push($i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$)
            }
            break
          }
        }
        for($i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$ = 0;$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$ < $JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.$_dataObjs$.length;$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$].$AreaId$ == $areaName$$inline_1157_j$$6$$) {
            $fadeOutObjs$$inline_1158$$.push($JSCompiler_StaticMethods_drill$self$$inline_1156_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_1159_label$$inline_1160_leaderLine$$inline_1161$$].$getDisplayable$());
            break
          }
        }
      }
      this.$_drilled$.push($parentArea$$)
    }
    (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$, D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, $childLayer$$.$LayerName$);
    this.$_clickedLayerName$ = $childLayer$$.$LayerName$;
    this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$
  }
};
D.$DvtThematicMap$$.prototype.$drillUp$ = function $$DvtThematicMap$$$$$drillUp$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $childLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$1$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$36$$ = 0;$i$$36$$ < $selectedAreas$$1$$.length;$i$$36$$++) {
    var $index$$48_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$1$$[$i$$36$$]];
    $newSelectedAreas$$1$$.push($index$$48_parentArea$$1$$);
    if(-1 != D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$48_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$1$$, $index$$48_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_1163$$ = $parentLayer$$1$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$1$$.$LayerName$]), $areaName$$inline_1164$$ = $index$$48_parentArea$$1$$, $fadeInObjs$$inline_1165$$ = $fadeInObjs$$1$$, $i$$inline_1166_label$$inline_1168$$ = 0;$i$$inline_1166_label$$inline_1168$$ < $JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_areaObjs$.length;$i$$inline_1166_label$$inline_1168$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_areaObjs$[$i$$inline_1166_label$$inline_1168$$].$AreaId$ == $areaName$$inline_1164$$) {
          $JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_drilled$.splice(D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_drilled$, $areaName$$inline_1164$$), 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_areaObjs$[$i$$inline_1166_label$$inline_1168$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$inline_1167$$ = $JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_areaObjs$[$i$$inline_1166_label$$inline_1168$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_dataAreaLayer$.$addChild$($displayable$$inline_1167$$);
          $fadeInObjs$$inline_1165$$.push($displayable$$inline_1167$$);
          if($i$$inline_1166_label$$inline_1168$$ = $JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_areaObjs$[$i$$inline_1166_label$$inline_1168$$].$getLabel$()) {
            $i$$inline_1166_label$$inline_1168$$.update($JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_pzcMatrix$), $fadeInObjs$$inline_1165$$.push($i$$inline_1166_label$$inline_1168$$), $fadeInObjs$$inline_1165$$.push($i$$inline_1166_label$$inline_1168$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_1166_label$$inline_1168$$ = 0;$i$$inline_1166_label$$inline_1168$$ < $JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_dataObjs$.length;$i$$inline_1166_label$$inline_1168$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_dataObjs$[$i$$inline_1166_label$$inline_1168$$].$AreaId$ == $areaName$$inline_1164$$) {
          $displayable$$inline_1167$$ = $JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_dataObjs$[$i$$inline_1166_label$$inline_1168$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_1163$$.$_dataPointLayer$.$addChild$($displayable$$inline_1167$$);
          $fadeInObjs$$inline_1165$$.push($displayable$$inline_1167$$);
          break
        }
      }
      $index$$48_parentArea$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$48_parentArea$$1$$);
      -1 != $index$$48_parentArea$$1$$ && this.$_drilled$.splice($index$$48_parentArea$$1$$, 1)
    }
  }
  (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$1$$, D.$JSCompiler_alias_TRUE$$);
  this.$_clickedLayerName$ = $parentLayer$$1$$.$LayerName$;
  this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
  this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$1$$;
  (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$)
};
D.$JSCompiler_StaticMethods__stopAnimation$$ = function $$JSCompiler_StaticMethods__stopAnimation$$$($JSCompiler_StaticMethods__stopAnimation$self$$) {
  $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ && ($JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__handleDrillAnimations$$ = function $$JSCompiler_StaticMethods__handleDrillAnimations$$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$1$$, $newObjs$$1$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_drillZoomToFit$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$5$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, 0.3);
    D.$DvtAgent$$.$isEnvironmentBrowser$() || ($animator$$5$$ = D.$JSCompiler_alias_NULL$$);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$5$$) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$5$$ && $animator$$5$$.play()
  }
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$, $oldObjs$$1$$, $newObjs$$1$$, D.$JSCompiler_alias_NULL$$, 0.5);
  D.$DvtAgent$$.$isEnvironmentBrowser$() || ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play()) : (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
};
D.$DvtThematicMap$$.prototype.$__dispatchEvent$ = function $$DvtThematicMap$$$$$__dispatchEvent$$($event$$11$$) {
  var $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$ = $event$$11$$.$getType$();
  if("selection" == $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$11$$.getSelection();
      for(var $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$8016$$ = this.$_clickedLayerName$, $selectedObjs$$inline_8211$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_8212$$ = [], $areaObjs$$inline_8213$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_8214$$ = 0;$i$$inline_8214$$ < $selectedObjs$$inline_8211$$.length;$i$$inline_8214$$++) {
        for(var $j$$inline_8215$$ = 0;$j$$inline_8215$$ < $areaObjs$$inline_8213$$.length;$j$$inline_8215$$++) {
          if($areaObjs$$inline_8213$$[$j$$inline_8215$$].getId() == $selectedObjs$$inline_8211$$[$i$$inline_8214$$]) {
            $selectedAreas$$inline_8212$$.push($areaObjs$$inline_8213$$[$j$$inline_8215$$].$AreaId$);
            break
          }
        }
      }
      $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$[$JSCompiler_temp_const$$8016$$] = $selectedAreas$$inline_8212$$;
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$11$$, "clientId", this.$_clickedDataLayerId$);
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof D.$DvtMarker$$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, D.$JSCompiler_alias_NULL$$), this.$_zoomToFitObject$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$ == D.$DvtMapDrillEvent$$.$TYPE$ ? ((0,D.$JSCompiler_StaticMethods_addParam$$)($event$$11$$, "clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$ = $event$$11$$.$_drillType$, $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$ == D.$DvtMapDrillEvent$$.$DRILL_UP$ && 
    this.$drillUp$(), $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$ == D.$DvtMapDrillEvent$$.$DRILL_DOWN$ ? this.$drillDown$() : $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$ == D.$DvtMapDrillEvent$$.$RESET$ && this.$resetMap$(), $event$$11$$.$setDisclosed$(this.$_drilledRowKeys$)) : ("showPopup" == $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$ || "hidePopup" == $JSCompiler_temp_const$$8017_drillType$$inline_1175_type$$64$$) && (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$11$$, 
    "clientId", this.$_eventClientId$)
  }
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$11$$)
};
D.$JSCompiler_StaticMethods__updateDrillButton$$ = function $$JSCompiler_StaticMethods__updateDrillButton$$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$6$$) {
  if($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$ && $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$ && "none" != $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$) {
    var $childLayer$$2$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$6$$), $parentLayer$$2$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$6$$);
    $childLayer$$2$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$);
    $parentLayer$$2$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtThematicMap$$.prototype.$destroy$ = function $$DvtThematicMap$$$$$destroy$$() {
  D.$DvtThematicMap$$.$superclass$.$destroy$.call(this);
  this.$_eventHandler$ && (this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtThematicMap$$.prototype.$OnAnimationEnd$ = function $$DvtThematicMap$$$$$OnAnimationEnd$$() {
  this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
  this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
D.$DvtThematicMap$$.prototype.$OnDrillAnimationEnd$ = function $$DvtThematicMap$$$$$OnDrillAnimationEnd$$() {
  (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)(this);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$ = function $$JSCompiler_StaticMethods__cleanUpDrilledObjects$$$($JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$) {
  if(0 < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length) {
    for(var $i$$37$$ = 0;$i$$37$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$37$$++) {
      var $obj$$34$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$37$$];
      if($obj$$34$$) {
        if($obj$$34$$ instanceof D.$DvtMapLabel$$) {
          $obj$$34$$.reset()
        }else {
          if($obj$$34$$.$isDrilled$ && $obj$$34$$.$isDrilled$()) {
            $obj$$34$$.$setAlpha$(0)
          }else {
            var $parent$$5$$ = $obj$$34$$.getParent();
            $parent$$5$$ && $parent$$5$$.removeChild($obj$$34$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
};
D.$DvtThematicMap$$.prototype.$_rolloverCallback$ = function $$DvtThematicMap$$$$$_rolloverCallback$$($event$$14$$) {
  this.$_fireRolloverEvent$("mouseover" == $event$$14$$.$_mouseState$ ? "categoryRollOver" : "categoryRollOut", $event$$14$$.$getHideAttributes$())
};
D.$DvtThematicMap$$.prototype.$_fireRolloverEvent$ = function $$DvtThematicMap$$$$$_fireRolloverEvent$$($type$$66$$, $category$$3$$) {
  var $rolloverEvent$$ = new D.$DvtCategoryRolloverEvent$$($type$$66$$, $category$$3$$), $objects$$ = [], $layerId_legendItems$$;
  for($layerId_legendItems$$ in this.$_areas$) {
    for(var $key$$26_wrapper$$ in this.$_areas$[$layerId_legendItems$$]) {
      $objects$$.push(this.$_areas$[$layerId_legendItems$$][$key$$26_wrapper$$])
    }
  }
  for($layerId_legendItems$$ in this.$_markers$) {
    for($key$$26_wrapper$$ in this.$_markers$[$layerId_legendItems$$]) {
      $objects$$.push(this.$_markers$[$layerId_legendItems$$][$key$$26_wrapper$$])
    }
  }
  $layerId_legendItems$$ = this.$_legend$.$_hideAttrsLookUp$;
  for(var $legendCategory$$ in $layerId_legendItems$$) {
    $key$$26_wrapper$$ = new D.$DvtThematicMapCategoryWrapper$$($layerId_legendItems$$[$legendCategory$$].$getContentShape$(), $legendCategory$$), $objects$$.push($key$$26_wrapper$$)
  }
  (0,D.$DvtCategoryRolloverHandler$processEvent$$)($rolloverEvent$$, $objects$$, 0.1)
};
D.$DvtThematicMap$$.prototype.$getAutomation$ = function $$DvtThematicMap$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtThematicMapAutomation$$(this));
  return this.$Automation$
};
D.$DvtThematicMap$$.prototype.getAutomation = D.$DvtThematicMap$$.prototype.$getAutomation$;
D.$DvtThematicMapDefaults$$ = function $$DvtThematicMapDefaults$$$() {
  this.Init({fusion:D.$DvtThematicMapDefaults$DEFAULT$$, skyros:D.$DvtThematicMapDefaults$SKIN_SKYROS$$, alta:D.$DvtThematicMapDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtThematicMapDefaults");
D.$DvtThematicMapDefaults$DEFAULT$$ = {skin:D.$JSCompiler_alias_NULL$$, animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"off", initialZooming:"none", maintainDrill:"off", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", zooming:"none", styleDefaults:{areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", dataAreaDefaults:{borderColor:"#FFFFFF", drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", 
hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:"0.5px", color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:0.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:D.$JSCompiler_alias_TRUE$$, layout:{gapRatio:1}}, layout:{gapRatio:D.$JSCompiler_alias_NULL$$, 
legendMaxSize:0.3, legendGap:10}};
D.$DvtThematicMapDefaults$SKIN_SKYROS$$ = {styleDefaults:{backgroundColor:"#FFFFFF"}};
D.$DvtThematicMapDefaults$SKIN_ALTA$$ = {skin:"alta", styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", backgroundColor:"#FFFFFF", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}};
D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selection:"none"};
D.$JSCompiler_StaticMethods__getCurrentDragSource$$ = function $$JSCompiler_StaticMethods__getCurrentDragSource$$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$484$$ = 0;$i$$484$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$484$$++) {
    var $dataLayers$$4$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$484$$].$DataLayers$, $id$$221$$;
    for($id$$221$$ in $dataLayers$$4$$) {
      var $dragSource$$3$$ = $dataLayers$$4$$[$id$$221$$].$_dragSource$;
      if($dragSource$$3$$ && $dragSource$$3$$.$_dragCandidate$) {
        return $dragSource$$3$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMap$$.prototype.$isDragAvailable$ = function $$DvtThematicMap$$$$$isDragAvailable$$($dragSource$$4_mouseX$$46$$, $mouseY$$46$$, $clientIds$$17$$) {
  this.$_dragAllowed$ = D.$JSCompiler_alias_FALSE$$;
  return($dragSource$$4_mouseX$$46$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this)) ? $dragSource$$4_mouseX$$46$$.$isDragAvailable$($clientIds$$17$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$getDragTransferable$ = function $$DvtThematicMap$$$$$getDragTransferable$$($mouseX$$47$$, $mouseY$$47$$) {
  var $dragSource$$5$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$5$$ ? $dragSource$$5$$.$getDragTransferable$($mouseX$$47$$, $mouseY$$47$$) : D.$JSCompiler_alias_NULL$$
};

D.$DvtThematicMapDropTarget$$ = function $$DvtThematicMapDropTarget$$$($areaLayer$$1$$, $basemap$$6$$) {
  this.$_areaLayer$ = $areaLayer$$1$$;
  this.$_basemap$ = $basemap$$6$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDropTarget$$, D.$DvtDropTarget$$, "DvtThematicMapDropTarget");
D.$DvtThematicMapAutomation$$ = (0,D.$JSCompiler_set$$)("$_tmap$");
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapAutomation$$, D.$DvtAutomation$$, "DvtThematicMapAutomation");
D.$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($displayable$$40_logicalObj$$10$$) {
  $displayable$$40_logicalObj$$10$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_tmap$.$_eventHandler$, $displayable$$40_logicalObj$$10$$);
  var $JSCompiler_temp$$416_id$$inline_5381$$;
  if($displayable$$40_logicalObj$$10$$ && ($displayable$$40_logicalObj$$10$$ instanceof D.$DvtMapDataArea$$ || $displayable$$40_logicalObj$$10$$ instanceof D.$DvtMapDataMarker$$)) {
    a: {
      for(var $layers$$inline_5378$$ = this.$_tmap$.$_layers$, $i$$inline_5379$$ = 0;$i$$inline_5379$$ < $layers$$inline_5378$$.length;$i$$inline_5379$$++) {
        var $dataLayers$$inline_5380$$ = $layers$$inline_5378$$[$i$$inline_5379$$].$DataLayers$;
        for($JSCompiler_temp$$416_id$$inline_5381$$ in $dataLayers$$inline_5380$$) {
          if($displayable$$40_logicalObj$$10$$ instanceof D.$DvtMapDataArea$$) {
            for(var $areas$$inline_5382_markers$$inline_5384$$ = $dataLayers$$inline_5380$$[$JSCompiler_temp$$416_id$$inline_5381$$].$_areaObjs$, $k$$inline_5383$$ = 0;$k$$inline_5383$$ < $areas$$inline_5382_markers$$inline_5384$$.length;$k$$inline_5383$$++) {
              if($areas$$inline_5382_markers$$inline_5384$$[$k$$inline_5383$$] === $displayable$$40_logicalObj$$10$$) {
                $JSCompiler_temp$$416_id$$inline_5381$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$416_id$$inline_5381$$) + ":area[" + $displayable$$40_logicalObj$$10$$.getId() + "]";
                break a
              }
            }
          }else {
            if($displayable$$40_logicalObj$$10$$ instanceof D.$DvtMapDataMarker$$) {
              $areas$$inline_5382_markers$$inline_5384$$ = $dataLayers$$inline_5380$$[$JSCompiler_temp$$416_id$$inline_5381$$].$_dataObjs$;
              for($k$$inline_5383$$ = 0;$k$$inline_5383$$ < $areas$$inline_5382_markers$$inline_5384$$.length;$k$$inline_5383$$++) {
                if($areas$$inline_5382_markers$$inline_5384$$[$k$$inline_5383$$] === $displayable$$40_logicalObj$$10$$) {
                  $JSCompiler_temp$$416_id$$inline_5381$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$416_id$$inline_5381$$) + ":marker[" + $displayable$$40_logicalObj$$10$$.getId() + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_temp$$416_id$$inline_5381$$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp$$416_id$$inline_5381$$ = D.$JSCompiler_alias_NULL$$
  }
  return $JSCompiler_temp$$416_id$$inline_5381$$
};
D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$) {
  var $colonIdx$$1$$ = $JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$.indexOf(":"), $parenIdx$$ = $JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$.indexOf("[");
  $JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$ = 0 < $colonIdx$$1$$ && 0 < $parenIdx$$ ? ($JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$.substring(0, $colonIdx$$1$$), $JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$.substring($colonIdx$$1$$ + 1, $parenIdx$$), $JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$.substring($parenIdx$$ + 1, $JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$.length - 
  1))) ? $JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$379_dataObj$$inline_5390_subId$$11$$
};
D.$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($data$$50_dataLayerId$$2$$, $dataObj$$8_dataObjType$$1_label$$32$$, $dataObjId$$1$$) {
  return($dataObj$$8_dataObjType$$1_label$$32$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $data$$50_dataLayerId$$2$$, $dataObj$$8_dataObjType$$1_label$$32$$, $dataObjId$$1$$)) ? ($data$$50_dataLayerId$$2$$ = {}, $data$$50_dataLayerId$$2$$.color = $dataObj$$8_dataObjType$$1_label$$32$$.$getDatatipColor$(), $data$$50_dataLayerId$$2$$.tooltip = $dataObj$$8_dataObjType$$1_label$$32$$.$getDatatip$(), $dataObj$$8_dataObjType$$1_label$$32$$ = $dataObj$$8_dataObjType$$1_label$$32$$.$getLabel$(), 
  $data$$50_dataLayerId$$2$$.label = $dataObj$$8_dataObjType$$1_label$$32$$ ? $dataObj$$8_dataObjType$$1_label$$32$$.$getTextString$() : D.$JSCompiler_alias_NULL$$, $data$$50_dataLayerId$$2$$) : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtThematicMapAutomation.prototype.getData", D.$DvtThematicMapAutomation$$.prototype.getData);
D.$JSCompiler_StaticMethods__getDataObject$$ = function $$JSCompiler_StaticMethods__getDataObject$$$($JSCompiler_StaticMethods__getDataObject$self_layers$$2$$, $dataLayerId$$4$$, $dataObjType$$3$$, $dataObjId$$3$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$.$_tmap$.$_layers$;
  for(var $i$$486$$ = 0;$i$$486$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$.length;$i$$486$$++) {
    var $dataLayers$$6$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$[$i$$486$$].$DataLayers$, $id$$223$$;
    for($id$$223$$ in $dataLayers$$6$$) {
      if((0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($id$$223$$) == $dataLayerId$$4$$) {
        if("area" == $dataObjType$$3$$) {
          for(var $areas$$2_markers$$1$$ = $dataLayers$$6$$[$id$$223$$].$_areaObjs$, $k$$8$$ = 0;$k$$8$$ < $areas$$2_markers$$1$$.length;$k$$8$$++) {
            if($areas$$2_markers$$1$$[$k$$8$$].getId() === $dataObjId$$3$$) {
              return $areas$$2_markers$$1$$[$k$$8$$]
            }
          }
        }else {
          if("marker" == $dataObjType$$3$$) {
            $areas$$2_markers$$1$$ = $dataLayers$$6$$[$id$$223$$].$_dataObjs$;
            for($k$$8$$ = 0;$k$$8$$ < $areas$$2_markers$$1$$.length;$k$$8$$++) {
              if($areas$$2_markers$$1$$[$k$$8$$].getId() === $dataObjId$$3$$) {
                return $areas$$2_markers$$1$$[$k$$8$$]
              }
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getDataLayerId$$ = function $$JSCompiler_StaticMethods__getDataLayerId$$$($dataLayerId$$5$$) {
  var $colonIdx$$2$$ = $dataLayerId$$5$$.lastIndexOf(":");
  return 0 < $colonIdx$$2$$ ? $dataLayerId$$5$$.substring($colonIdx$$2$$ + 1) : $dataLayerId$$5$$
};
D.$DvtDrillablePath$$ = function $$DvtDrillablePath$$$($context$$531$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$531$$, $bSupportsVectorEffects$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDrillablePath$$, D.$DvtPath$$, "DvtDrillablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDrillablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$532$$, $bSupportsVectorEffects$$5$$) {
  D.$DvtDrillablePath$$.$superclass$.Init.call(this, $context$$532$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = D.$JSCompiler_alias_NULL$$;
  this.$_isDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = (0,D.$JSCompiler_get$$)("$_isDrilled$");
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$3_parent$$79$$) {
  this.$_isDrilled$ != $drilled$$3_parent$$79$$ && (this.$_isDrilled$ = $drilled$$3_parent$$79$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedInnerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedOuterShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
  $drilled$$3_parent$$79$$ = this.getParent(), $drilled$$3_parent$$79$$.$addChild$(this.$_disclosedOuterShape$), $drilled$$3_parent$$79$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)) : 
  (this.$isHoverEffectShown$() && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$setAlpha$(1)))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$16$$) {
  this.$IsSelected$ != $selected$$16$$ && ($selected$$16$$ && (this.$isHoverEffectShown$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4))), D.$DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$16$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : this.$HoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 2);
  D.$DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$CreateSelectedHoverStrokes$ = function $$JSCompiler_prototypeAlias$$$$CreateSelectedHoverStrokes$$() {
  this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.clone(), this.$SelectedHoverInnerStroke$.$setWidth$(2), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.clone(), this.$SelectedHoverOuterStroke$.$setWidth$(6), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() && (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4));
  D.$DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setHoverStroke$$($innerStroke$$3$$, $outerStroke$$3$$) {
  D.$DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $innerStroke$$3$$, $outerStroke$$3$$);
  this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && (this.$HoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$HoverOuterStroke$ && (this.$HoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedStroke$$($innerStroke$$4$$, $outerStroke$$4$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $innerStroke$$4$$, $outerStroke$$4$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && (this.$SelectedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedOuterStroke$ && (this.$SelectedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedHoverStroke$$($innerStroke$$5$$, $outerStroke$$5$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $innerStroke$$5$$, $outerStroke$$5$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedHoverOuterStroke$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_StaticMethods_setDisclosedStroke$$ = function $$JSCompiler_StaticMethods_setDisclosedStroke$$$($JSCompiler_StaticMethods_setDisclosedStroke$self$$, $innerStroke$$6$$, $outerStroke$$6$$) {
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedInnerStroke$ = $innerStroke$$6$$;
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedInnerStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedOuterStroke$ = $outerStroke$$6$$;
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedOuterStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__updateStrokeZoomWidth$$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$77$$, $fixedWidth$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$68$$ = $shape$$77$$.$getStroke$();
    $stroke$$68$$ && ($stroke$$68$$ = $stroke$$68$$.clone(), $stroke$$68$$.$setWidth$($fixedWidth$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$77$$.$setStroke$($stroke$$68$$))
  }
};
D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$69$$, $fixedWidth$$1$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$69$$ = $adjustedStroke_stroke$$69$$.clone(), $adjustedStroke_stroke$$69$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$69$$
};
D.$JSCompiler_StaticMethods_handleZoomEvent$$ = function $$JSCompiler_StaticMethods_handleZoomEvent$$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$17$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$17$$.$_a$;
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isDrilled$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedInnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedOuterShape$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isSelected$() ? 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isHoverEffectShown$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 6)) : ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 1), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isHoverEffectShown$() ? (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2) : (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$, 1)
};
D.$DvtBaseMapManager$$ = this.DvtBaseMapManager;
D.$DvtBaseMapManager$$ ? (D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = D.$DvtBaseMapManager$$._UNPROCESSED_MAPS, D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$ = D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) : D.$DvtBaseMapManager$$ = {$_UNPROCESSED_MAPS$:[[], [], []], $_UNPROCESSED_PARENT_UPDATES$:[[], [], []]};
"undefined" != typeof D.DVT_ADVANCED_CLOSURE && ((0,D.$goog$exportSymbol$$)("DvtBaseMapManager", D.$DvtBaseMapManager$$), D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$, D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseMapManager$$, D.$DvtObj$$, "DvtBaseMapManager");
D.$DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
D.$DvtBaseMapManager$$.$TYPE_PATH$ = 1;
D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
D.$DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
D.$DvtBaseMapManager$$.$TYPE_DIM$ = 4;
D.$DvtBaseMapManager$$.$_INDEX$ = "__index";
D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
D.$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$, $layerName$$7$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$4$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$][$layerName$$7$$];
  return $dimAr_layer$$4$$ && ($dimAr_layer$$4$$ = $dimAr_layer$$4$$[D.$DvtBaseMapManager$$.$TYPE_DIM$]) ? new D.$DvtRectangle$$($dimAr_layer$$4$$[0], $dimAr_layer$$4$$[1], $dimAr_layer$$4$$[2], $dimAr_layer$$4$$[3]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$1$$, $layerName$$8$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$5$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$8$$];
  return $layer$$5$$ ? $layer$$5$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$2$$, $layerName$$9$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$6$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$9$$];
  return $layer$$6$$ ? $layer$$6$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$3_layer$$7$$, $layerName$$10$$, $areaId$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$3_layer$$7$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3_layer$$7$$][$layerName$$10$$];
  var $labels$$3$$;
  $baseMapName$$3_layer$$7$$ && ($labels$$3$$ = $baseMapName$$3_layer$$7$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$3$$ && $labels$$3$$[$areaId$$] ? $labels$$3$$[$areaId$$][1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$4$$, $city$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap_cityLayer_coords$$9$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4$$];
  if($basemap_cityLayer_coords$$9$$ && ($basemap_cityLayer_coords$$9$$ = $basemap_cityLayer_coords$$9$$.cities)) {
    if($basemap_cityLayer_coords$$9$$ = $basemap_cityLayer_coords$$9$$[D.$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new D.$DvtPoint$$($basemap_cityLayer_coords$$9$$[0], $basemap_cityLayer_coords$$9$$[1])
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($baseMapName$$5$$, $city$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$1_cityLabel_cityLayer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$5$$];
  if($basemap$$1_cityLabel_cityLayer$$1$$ && ($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$.cities)) {
    if($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$city$$1$$]) {
      return $basemap$$1_cityLabel_cityLayer$$1$$[1]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath$$2_baseMapName$$6_path$$13$$, $layerName$$11$$, $areaId$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$2_labelInfo$$2_layer$$8$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$13$$];
  if($basemap$$2_labelInfo$$2_layer$$8$$ && ($basemap$$2_labelInfo$$2_layer$$8$$ = $basemap$$2_labelInfo$$2_layer$$8$$[$layerName$$11$$])) {
    if(($basemap$$2_labelInfo$$2_layer$$8$$ = $basemap$$2_labelInfo$$2_layer$$8$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$2_labelInfo$$2_layer$$8$$[$areaId$$1$$]) {
      return(0,D.$DvtRectangle$create$$)($basemap$$2_labelInfo$$2_layer$$8$$[$areaId$$1$$][0]).$getCenter$()
    }
    $arPath$$2_baseMapName$$6_path$$13$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$13$$][$layerName$$11$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$1$$];
    if(!$arPath$$2_baseMapName$$6_path$$13$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $arPath$$2_baseMapName$$6_path$$13$$ = window.DvtPathUtils.$createPathArray$($arPath$$2_baseMapName$$6_path$$13$$);
    return window.DvtPathUtils.$getDimensions$($arPath$$2_baseMapName$$6_path$$13$$).$getCenter$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$7$$, $layerName$$12$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$9$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][$layerName$$12$$];
  return $layer$$9$$ ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][D.$DvtBaseMapManager$$.$_INDEX$][$layer$$9$$.__index + 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$8$$, $layerName$$13$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$13$$] ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][D.$DvtBaseMapManager$$.$_INDEX$][D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$13$$].__index - 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$9$$, $layerName$$14$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$14$$][D.$DvtBaseMapManager$$.$TYPE_PATH$]
};
D.$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$10$$, $layerName$$15$$, $area$$2$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$15$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$area$$2$$]
};
D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$11$$, $layerName$$16$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName$$1_children$$21$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$11$$, $layerName$$16$$);
  return $childLayerName$$1_children$$21$$ && ($childLayerName$$1_children$$21$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$childLayerName$$1_children$$21$$][D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName$$1_children$$21$$ : []
};
D.$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$12$$, $index$$118$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][D.$DvtBaseMapManager$$.$_INDEX$][$index$$118$$]
};
D.$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$13_layerMetadata$$, $layerName$$17$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$119$$, $dim$$73$$) {
  var $basemapMetadata$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = [], D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$13_layerMetadata$$ = $basemapMetadata$$[$layerName$$17$$];
  $baseMapName$$13_layerMetadata$$ || ($baseMapName$$13_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$17$$] = $baseMapName$$13_layerMetadata$$, $index$$119$$ != D.$JSCompiler_alias_NULL$$ && ($basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$][$index$$119$$] = $layerName$$17$$));
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$73$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = $index$$119$$
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerBaseMapLayer", D.$DvtBaseMapManager$$.$registerBaseMapLayer$);
D.$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$14_layerMetadata$$1$$, $layerName$$18$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$18$$];
  $baseMapName$$14_layerMetadata$$1$$ || ($baseMapName$$14_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$18$$] = $baseMapName$$14_layerMetadata$$1$$);
  ($baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$18$$]) && ($baseMapName$$14_layerMetadata$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerResourceBundle", D.$DvtBaseMapManager$$.$registerResourceBundle$);
D.$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$15_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$19$$, $labelMetadata$$2$$) {
  if($baseMapName$$15_basemapMetadata$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$19$$ = $baseMapName$$15_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$19$$]) {
      for(var $prop$$16$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$19$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$16$$] = $labelMetadata$$2$$[$prop$$16$$]
      }
    }
  }
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.updateResourceBundle", D.$DvtBaseMapManager$$.$updateResourceBundle$);
D.$DvtBaseMapManager$$.$loadUnprocessedMaps$ = function $$DvtBaseMapManager$$$$loadUnprocessedMaps$$($unprocessedMaps$$, $hierarchyUpdates$$) {
  D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = $unprocessedMaps$$;
  D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$ = $hierarchyUpdates$$;
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$()
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.loadUnprocessedMaps", D.$DvtBaseMapManager$$.$loadUnprocessedMaps$);
D.$DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
  var $i$$469_index$$120$$, $args$$6$$;
  if(D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$) {
    for($i$$469_index$$120$$ = 0;$i$$469_index$$120$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[0].length;$i$$469_index$$120$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[0][$i$$469_index$$120$$], D.$DvtBaseMapManager$$.$registerBaseMapLayer$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2], $args$$6$$[3], $args$$6$$[4], $args$$6$$[5], $args$$6$$[6], $args$$6$$[7])
    }
    for($i$$469_index$$120$$ = 0;$i$$469_index$$120$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[1].length;$i$$469_index$$120$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[1][$i$$469_index$$120$$], D.$DvtBaseMapManager$$.$registerResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    for($i$$469_index$$120$$ = 0;$i$$469_index$$120$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[2].length;$i$$469_index$$120$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[2][$i$$469_index$$120$$], D.$DvtBaseMapManager$$.$updateResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = D.$JSCompiler_alias_NULL$$
  }
  if(D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$) {
    for($i$$469_index$$120$$ = 0;$i$$469_index$$120$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$[0].length;$i$$469_index$$120$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$[0][$i$$469_index$$120$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$6$$[1], $layerName$$20_lowerLayer$$ = $args$$6$$[2], $basemapMetadata$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$6$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$6$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$469_index$$120$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$469_index$$120$$, 0, $layerName$$20_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$20_lowerLayer$$][D.$DvtBaseMapManager$$.$_INDEX$] = $i$$469_index$$120$$;
          for($i$$469_index$$120$$ += 1;$i$$469_index$$120$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$469_index$$120$$++) {
            ($layerName$$20_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$469_index$$120$$]]) && $layerName$$20_lowerLayer$$[D.$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$6$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
  }
};
D.$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$20$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$) {
  if(0 < $zoomFactor$$) {
    $basemapW_scale$$20$$ = 1 / (window.Math.min($pathAr_viewportW$$ / $basemapW_scale$$20$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$);
    if(1 >= $basemapW_scale$$20$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$14$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$14$$], (0,window.isNaN)($pathAr_viewportW$$) && ($pathAr_viewportW$$ = window.DvtPathUtils.$createPathArray$($paths$$[$path$$14$$])), $basemapH_simplifiedPaths$$[$path$$14$$] = window.DvtPathUtils.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$20$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
D.$DvtThematicMapCategoryWrapper$$ = function $$DvtThematicMapCategoryWrapper$$$($displayable$$44$$, $category$$10$$) {
  this.Init($displayable$$44$$, $category$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapCategoryWrapper$$, D.$DvtObj$$, "DvtThematicMapCategoryWrapper");
D.$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$45$$, $category$$11$$) {
  this.$_displayable$ = $displayable$$45$$;
  this.$_category$ = $category$$11$$
};
D.$DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = (0,D.$JSCompiler_get$$)("$_category$");
D.$DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$DvtMapDrillEvent$$ = function $$DvtMapDrillEvent$$$($drillType$$1$$) {
  this.Init(D.$DvtMapDrillEvent$$.$TYPE$);
  this.$_drillType$ = $drillType$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapDrillEvent");
D.$DvtMapDrillEvent$$.$TYPE$ = "drill";
D.$DvtMapDrillEvent$$.$DRILL_UP$ = 0;
D.$DvtMapDrillEvent$$.$DRILL_DOWN$ = 1;
D.$DvtMapDrillEvent$$.$RESET$ = 2;
D.$DvtMapDrillEvent$$.prototype.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_disclosed$");
D.$DvtMapActionEvent$$ = function $$DvtMapActionEvent$$$($clientId$$8$$, $rowKey$$4$$, $action$$6$$) {
  this.Init("action");
  this.$_clientId$ = $clientId$$8$$;
  this.$_rowKey$ = $rowKey$$4$$;
  this.$_action$ = $action$$6$$
};
(0,D.$goog$exportSymbol$$)("DvtMapActionEvent", D.$DvtMapActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtMapActionEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapActionEvent");
D.$DvtMapActionEvent$$.TYPE = "action";
D.$DvtMapActionEvent$$.prototype.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$DvtMapActionEvent$$.prototype.getClientId = D.$DvtMapActionEvent$$.prototype.$getClientId$;
D.$DvtMapActionEvent$$.prototype.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$DvtMapActionEvent$$.prototype.getRowKey = D.$DvtMapActionEvent$$.prototype.$getRowKey$;
D.$DvtMapActionEvent$$.prototype.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$DvtMapActionEvent$$.prototype.getAction = D.$DvtMapActionEvent$$.prototype.$getAction$;
D.$DvtMapLabel$$ = function $$DvtMapLabel$$$($context$$508$$, $label$$28$$, $labelInfo$$, $labelDisplay$$3$$, $parentContainer$$, $bSupportsVectorEffects$$) {
  this.Init($context$$508$$, $label$$28$$, $labelInfo$$, $labelDisplay$$3$$, $parentContainer$$, $bSupportsVectorEffects$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLabel$$, D.$DvtOutputText$$, "DvtMapLabel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLabel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$509$$, $i$$466_label$$29$$, $labelInfo$$1$$, $labelDisplay$$4_line$$5_polyline$$, $parentContainer$$1_stroke$$62$$, $bSupportsVectorEffects$$1$$) {
  D.$DvtMapLabel$$.$superclass$.Init.call(this, $context$$509$$, $i$$466_label$$29$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelDisplay$ = $labelDisplay$$4_line$$5_polyline$$;
  this.$_parentContainer$ = $parentContainer$$1_stroke$$62$$;
  if($labelInfo$$1$$ && (this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelInfo$$1$$[0])), 1 < $labelInfo$$1$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$466_label$$29$$ = 1;$i$$466_label$$29$$ < $labelInfo$$1$$.length;$i$$466_label$$29$$++) {
      $labelDisplay$$4_line$$5_polyline$$ = $labelInfo$$1$$[$i$$466_label$$29$$], this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelDisplay$$4_line$$5_polyline$$[0])), $labelDisplay$$4_line$$5_polyline$$ = new D.$DvtPolyline$$($context$$509$$, $labelDisplay$$4_line$$5_polyline$$[1]), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($labelDisplay$$4_line$$5_polyline$$), $parentContainer$$1_stroke$$62$$ = new D.$DvtSolidStroke$$("#000000"), this.$_bSupportsVectorEffects$ && ($parentContainer$$1_stroke$$62$$.$_bFixedWidth$ = 
      D.$JSCompiler_alias_TRUE$$), $labelDisplay$$4_line$$5_polyline$$.$setStroke$($parentContainer$$1_stroke$$62$$), this.$_leaderLines$.push($labelDisplay$$4_line$$5_polyline$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$5_zoom$$9$$) {
  $pzcMatrix$$5_zoom$$9$$ = $pzcMatrix$$5_zoom$$9$$.$_a$;
  for(var $mat$$45_state$$38_stroke$$63$$ = -1, $center$$3_estimatedDims$$2$$ = D.$DvtTextUtils$$.$guessTextDimensions$(this), $labelBox_remove_style$$73$$ = D.$JSCompiler_alias_FALSE$$, $i$$467_leaderLinePoints$$ = 0;$i$$467_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$467_leaderLinePoints$$++) {
    var $numPoints$$2_zoomW$$ = this.$_boundRectangle$[$i$$467_leaderLinePoints$$].$w$ * $pzcMatrix$$5_zoom$$9$$;
    if($center$$3_estimatedDims$$2$$.$w$ <= $numPoints$$2_zoomW$$) {
      $mat$$45_state$$38_stroke$$63$$ = $i$$467_leaderLinePoints$$;
      break
    }else {
      if(this.getParent() || ($labelBox_remove_style$$73$$ = D.$JSCompiler_alias_TRUE$$, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints$$2_zoomW$$) {
        $mat$$45_state$$38_stroke$$63$$ = $i$$467_leaderLinePoints$$;
        break
      }
    }
  }
  -1 == $mat$$45_state$$38_stroke$$63$$ && "on" == this.$_labelDisplay$ && ($mat$$45_state$$38_stroke$$63$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat$$45_state$$38_stroke$$63$$ ? (-1 == $mat$$45_state$$38_stroke$$63$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$3_estimatedDims$$2$$ = this.$_boundRectangle$[$mat$$45_state$$38_stroke$$63$$].$getCenter$(), this.$setCenter$($center$$3_estimatedDims$$2$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$, 0 < $mat$$45_state$$38_stroke$$63$$ ? (this.$_leaderLine$ = 
  this.$_leaderLines$[$mat$$45_state$$38_stroke$$63$$ - 1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$73$$ = this.$getCSSStyle$(), $labelBox_remove_style$$73$$.$setStyle$("color", "#000000"), this.$setCSSStyle$($labelBox_remove_style$$73$$), $labelBox_remove_style$$73$$ = this.$_boundRectangle$[$mat$$45_state$$38_stroke$$63$$], $i$$467_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints$$2_zoomW$$ = $i$$467_leaderLinePoints$$.length, $labelBox_remove_style$$73$$.x > 
  $i$$467_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$73$$.x, $center$$3_estimatedDims$$2$$.y))) : $labelBox_remove_style$$73$$.y > $i$$467_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$3_estimatedDims$$2$$.x, $labelBox_remove_style$$73$$.y))) : $labelBox_remove_style$$73$$.x + $labelBox_remove_style$$73$$.$w$ < 
  $i$$467_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$73$$.x + $labelBox_remove_style$$73$$.$w$, $center$$3_estimatedDims$$2$$.y))) : $labelBox_remove_style$$73$$.y + $labelBox_remove_style$$73$$.$h$ < $i$$467_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$3_estimatedDims$$2$$.x, $labelBox_remove_style$$73$$.y + 
  $labelBox_remove_style$$73$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), $labelBox_remove_style$$73$$ = this.$getCSSStyle$(), $labelBox_remove_style$$73$$.$setStyle$("color", this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$73$$)))), this.$_currentState$ = $mat$$45_state$$38_stroke$$63$$) : -1 == $mat$$45_state$$38_stroke$$63$$ && $labelBox_remove_style$$73$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat$$45_state$$38_stroke$$63$$ = new D.$DvtMatrix$$, $mat$$45_state$$38_stroke$$63$$.translate($pzcMatrix$$5_zoom$$9$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$5_zoom$$9$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat$$45_state$$38_stroke$$63$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new D.$DvtMatrix$$($pzcMatrix$$5_zoom$$9$$, 0, 0, $pzcMatrix$$5_zoom$$9$$)), this.$_bSupportsVectorEffects$ || ($mat$$45_state$$38_stroke$$63$$ = 
  this.$_leaderLine$.$getStroke$().clone(), $mat$$45_state$$38_stroke$$63$$.$setWidth$(1 / $pzcMatrix$$5_zoom$$9$$), this.$_leaderLine$.$setStroke$($mat$$45_state$$38_stroke$$63$$))))
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$8$$) {
  this.$_center$ = $p$$8$$;
  this.$setX$($p$$8$$.x);
  this.$setY$($p$$8$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$27$$) {
  D.$DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$27$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$27$$.$getStyle$("color"))
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtMapDataObject$$ = function $$DvtMapDataObject$$$($context$$512$$, $dataLayer$$6$$, $rowKey$$7$$, $clientId$$11$$, $regionId$$4$$) {
  this.Init($context$$512$$, $dataLayer$$6$$, $rowKey$$7$$, $clientId$$11$$, $regionId$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataObject$$, D.$DvtContainer$$, "DvtMapDataObject");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataObject$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$513$$, $dataLayer$$7$$, $rowKey$$8$$, $clientId$$12$$, $regionId$$5$$) {
  D.$DvtMapDataObject$$.$superclass$.Init.call(this, $context$$513$$, D.$JSCompiler_alias_NULL$$, $clientId$$12$$);
  this.$_categories$ = [];
  this.$Shape$ = D.$JSCompiler_alias_NULL$$;
  this.$_id$ = $rowKey$$8$$;
  this.$_clientId$ = $clientId$$12$$;
  this.$AreaId$ = $regionId$$5$$;
  this.$_selectionLayer$ = D.$JSCompiler_alias_NULL$$;
  this.$_datatipColor$ = "#000000";
  this.Zoom = 1;
  this.$_hasAction$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataLayer$ = $dataLayer$$7$$
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$5$$) {
  (this.$Shape$ = $disp$$5$$) && (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$Shape$)
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = (0,D.$JSCompiler_set$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$Shape$");
D.$JSCompiler_prototypeAlias$$.$setLabel$ = (0,D.$JSCompiler_set$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$setLabelPosition$ = (0,D.$JSCompiler_set$$)("$LabelPos$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$7$$) {
  D.$DvtMapDataObject$$.$superclass$.$setVisible$.call(this, $bVisible$$7$$);
  this.$Label$ && this.$Label$.$setVisible$($bVisible$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$Shape$]
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_datatipColor$");
D.$JSCompiler_prototypeAlias$$.$setDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$setDatatipColor$$($color$$55$$) {
  this.$_datatipColor$ = $color$$55$$;
  this.$Shape$ && this.$Shape$.$setDataColor$ && this.$Shape$.$setDataColor$($color$$55$$)
};
D.$JSCompiler_prototypeAlias$$.$setDatatip$ = function $$JSCompiler_prototypeAlias$$$$setDatatip$$($datatip$$3$$) {
  this.$_datatip$ = $datatip$$3$$;
  this.$Shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$Shape$, "label", $datatip$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$Shape$.$isSelectable$()
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$Shape$.$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ || this.$HideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$16$$) {
  for(var $parentId$$18$$ = this.$_dataLayer$.$getClientId$(), $i$$470$$ = 0;$i$$470$$ < $clientIds$$16$$.length && $clientIds$$16$$[$i$$470$$] != $parentId$$18$$;$i$$470$$++) {
  }
  return $parentId$$18$$
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = (0,D.$JSCompiler_get$$)("$_dataLayer$");
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$441$$) {
  return $event$$441$$.type == D.$DvtMouseEvent$CLICK$$ ? this : 32 == $event$$441$$.keyCode && $event$$441$$.ctrlKey ? this : (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$441$$, this.$GetNavigables$())
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return this.$Shape$ && this.$Shape$.getParent() ? this.$Shape$.$getDimensions$() : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$8$$) {
  this.$Shape$.getParent() && (this.Zoom = $pzcMatrix$$8$$.$_a$, this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$recenter$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapDataArea$$ = function $$DvtMapDataArea$$$($context$$510$$, $dataLayer$$4$$, $rowKey$$5$$, $clientId$$9$$, $regionId$$2$$) {
  this.Init($context$$510$$, $dataLayer$$4$$, $rowKey$$5$$, $clientId$$9$$, $regionId$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataArea$$, D.$DvtMapDataObject$$, "DvtMapDataArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$511$$, $dataLayer$$5$$, $rowKey$$6$$, $clientId$$10$$, $regionId$$3$$) {
  D.$DvtMapDataArea$$.$superclass$.Init.call(this, $context$$511$$, $dataLayer$$5$$, $rowKey$$6$$, $clientId$$10$$, $regionId$$3$$);
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$4$$) {
  D.$DvtMapDataArea$$.$superclass$.$setDisplayable$.call(this, $disp$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$15$$) {
  $selected$$15$$ && !this.$_isHoverEffectShowing$ && this.$_dataAreaLayer$.$addChild$(this.$Shape$);
  this.$Shape$.$setSelected$($selected$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_dataAreaLayer$.$addChild$(this.$Shape$);
  this.$Shape$.$showHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Shape$) : this.$_dataAreaLayer$.$addChildAt$(this.$Shape$, 0);
  this.$Shape$.$hideHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = function $$JSCompiler_prototypeAlias$$$$isDrilled$$() {
  return this.$Shape$.$isDrilled$()
};
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$2$$) {
  (this.$_isDrilled$ = $drilled$$2$$) ? this.$_dataAreaLayer$.$addChild$(this.$Shape$) : this.$_dataAreaLayer$.$addChildAt$(this.$Shape$, 0);
  this.$Shape$.$setDrilled$($drilled$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$6$$) {
  this.$Shape$.getParent() && (D.$DvtMapDataArea$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$6$$), (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)(this.$Shape$, $pzcMatrix$$6$$), this.$isDrilled$() || this.$PositionLabel$($pzcMatrix$$6$$))
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = function $$JSCompiler_prototypeAlias$$$$PositionLabel$$($pzcMatrix$$7$$) {
  this.$Label$ && this.$Label$.update($pzcMatrix$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$getDataLayer$().$_tmap$)
};
D.$DvtMapDataMarker$$ = function $$DvtMapDataMarker$$$($context$$534$$, $dataLayer$$22$$, $rowKey$$9$$, $clientId$$29$$, $regionId$$8$$) {
  this.Init($context$$534$$, $dataLayer$$22$$, $rowKey$$9$$, $clientId$$29$$, $regionId$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataMarker$$, D.$DvtMapDataObject$$, "DvtMapDataMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$535$$, $dataLayer$$23$$, $rowKey$$10$$, $clientId$$30$$, $regionId$$9$$) {
  D.$DvtMapDataMarker$$.$superclass$.Init.call(this, $context$$535$$, $dataLayer$$23$$, $rowKey$$10$$, $clientId$$30$$, $regionId$$9$$);
  this.$InitCanvasZoom$ = 1;
  this.$_size$ = 0
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$17$$) {
  this.$Shape$.$setSelected$($selected$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$Shape$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$Shape$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = function $$JSCompiler_prototypeAlias$$$$PositionLabel$$() {
  if(this.$Label$) {
    this.$Label$.$alignCenter$();
    var $x$$244$$ = (this.$Shape$.$getX$() + (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) / 2) * this.Zoom, $markerY_y$$212$$ = this.$Shape$.$getY$() * this.Zoom, $markerH$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$), $markerType$$1$$ = this.$Shape$.$getType$();
    "top" == this.$LabelPos$ ? ($markerY_y$$212$$ -= 4, this.$Label$.$alignBottom$()) : "bottom" == this.$LabelPos$ ? ($markerY_y$$212$$ += $markerH$$, this.$Label$.$alignTop$()) : ($markerY_y$$212$$ = "triangleUp" == $markerType$$1$$ ? $markerY_y$$212$$ + 2 * $markerH$$ / 3 : "triangleDown" == $markerType$$1$$ ? $markerY_y$$212$$ + $markerH$$ / 3 : $markerY_y$$212$$ + $markerH$$ / 2, this.$Label$.$alignMiddle$());
    this.$Label$.$setX$($x$$244$$);
    this.$Label$.$setY$($markerY_y$$212$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $parent$$80$$ = this.$Shape$.getParent(), $height$$80_rotation$$11$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$);
  (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) != D.$JSCompiler_alias_NULL$$ && ($height$$80_rotation$$11$$ != D.$JSCompiler_alias_NULL$$ && $parent$$80$$) && ($height$$80_rotation$$11$$ = this.$Shape$.$getRotation$(), this.$Label$ && this.$Shape$.$getRotation$() ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)($parent$$80$$, this.$Center$.x * this.Zoom - this.$Center$.x, this.$Center$.y * this.Zoom - this.$Center$.y), D.$DvtAgent$$.$workaroundFirefoxRepaint$($parent$$80$$)) : 
  ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, this.$Center$.x * this.Zoom - (this.$Center$.x * window.Math.cos($height$$80_rotation$$11$$) - this.$Center$.y * window.Math.sin($height$$80_rotation$$11$$)), this.$Center$.y * this.Zoom - (this.$Center$.x * window.Math.sin($height$$80_rotation$$11$$) + this.$Center$.y * window.Math.cos($height$$80_rotation$$11$$))), D.$DvtAgent$$.$workaroundFirefoxRepaint$(this.$Shape$)))
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapDataImage$$ = function $$DvtMapDataImage$$$($context$$506$$, $dataLayer$$2$$, $rowKey$$2$$, $clientId$$6$$, $regionId$$) {
  this.Init($context$$506$$, $dataLayer$$2$$, $rowKey$$2$$, $clientId$$6$$, $regionId$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataImage$$, D.$DvtMapDataObject$$, "DvtMapDataImage");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataImage$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$507$$, $dataLayer$$3$$, $rowKey$$3$$, $clientId$$7$$, $regionId$$1$$) {
  D.$DvtMapDataImage$$.$superclass$.Init.call(this, $context$$507$$, $dataLayer$$3$$, $rowKey$$3$$, $clientId$$7$$, $regionId$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$onImageLoaded$ = function $$JSCompiler_prototypeAlias$$$$onImageLoaded$$($image$$16$$) {
  $image$$16$$ && ($image$$16$$.width && $image$$16$$.height) && (this.$Shape$.getWidth() || this.$Shape$.$setWidth$($image$$16$$.width), this.$Shape$.getHeight() || this.$Shape$.$setHeight$($image$$16$$.height), this.$setSize$($image$$16$$.width * $image$$16$$.height), this.$Shape$.$setX$(this.$Center$.x - $image$$16$$.width / 2), this.$Shape$.$setY$(this.$Center$.y - $image$$16$$.height / 2), this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $curCenterX$$1_width$$83$$ = this.$Shape$.getWidth(), $curCenterY$$1_height$$77$$ = this.$Shape$.getHeight();
  $curCenterX$$1_width$$83$$ != D.$JSCompiler_alias_NULL$$ && ($curCenterY$$1_height$$77$$ != D.$JSCompiler_alias_NULL$$ && this.$Shape$.getParent()) && ($curCenterX$$1_width$$83$$ = this.$Shape$.$getX$() + $curCenterX$$1_width$$83$$ / 2, $curCenterY$$1_height$$77$$ = this.$Shape$.$getY$() + $curCenterY$$1_height$$77$$ / 2, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, $curCenterX$$1_width$$83$$ * this.Zoom - this.$Center$.x, $curCenterY$$1_height$$77$$ * this.Zoom - this.$Center$.y))
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapArea$$ = function $$DvtMapArea$$$($context$$529$$, $dvtShape$$, $areaName$$1$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$529$$, $dvtShape$$, $areaName$$1$$, $bSupportsVectorEffects$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapArea$$, D.$DvtContainer$$, "DvtMapArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$530_stroke$$66$$, $dvtShape$$1$$, $areaName$$2$$, $bSupportsVectorEffects$$3$$) {
  D.$DvtMapArea$$.$superclass$.Init.call(this, $context$$530_stroke$$66$$);
  this.$_isSelected$ = this.$_bSelectable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaName$ = $areaName$$2$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$;
  if($context$$530_stroke$$66$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$530_stroke$$66$$.getWidth()
  }
  this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$_shape$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$setTooltip$ = function $$JSCompiler_prototypeAlias$$$$setTooltip$$($tooltip$$30$$) {
  this.$_tooltip$ = $tooltip$$30$$;
  this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", $tooltip$$30$$)
};
D.$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getStroke$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$67$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setStroke$($stroke$$67$$)
};
D.$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$36$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setFill$($fill$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getFill$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof D.$DvtPath$$ ? this.$_shape$.$getCmds$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$21$$) {
  this.$_shape$ instanceof D.$DvtPath$$ && this.$_shape$.$setCmds$($cmds$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$21$$) {
  this.$_shape$ instanceof D.$DvtImage$$ && this.$_shape$.$setSrc$($src$$21$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$224$$, $y$$194$$) {
  var $dims$$51$$ = this.$getDimensions$();
  return $x$$224$$ >= $dims$$51$$.x && $x$$224$$ <= $dims$$51$$.x + $dims$$51$$.$w$ && $y$$194$$ >= $dims$$51$$.y && $y$$194$$ <= $dims$$51$$.y + $dims$$51$$.$h$
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$12$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().clone();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$12$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
D.$DvtMapLayer$$ = function $$DvtMapLayer$$$($tmap$$6$$, $eventHandler$$2$$) {
  this.Init($tmap$$6$$, $eventHandler$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLayer$$, D.$DvtObj$$, "DvtMapLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$7$$, $eventHandler$$3$$) {
  this.$_tmap$ = $tmap$$7$$;
  this.$LayerName$ = "cities";
  this.$ClientId$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$ = $eventHandler$$3$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new D.$DvtMatrix$$
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$19$$, $pzcMatrix$$13$$) {
  this.$_animation$ && (this.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  this.$PzcMatrix$ = $pzcMatrix$$13$$;
  this.$_oldDataLayer$ = this.$getDataLayer$($dataLayer$$19$$.$getClientId$());
  this.$DataLayers$[$dataLayer$$19$$.$getClientId$()] = $dataLayer$$19$$;
  $dataLayer$$19$$.$render$(this.$PzcMatrix$);
  $dataLayer$$19$$.$HandleZoomEvent$(new D.$DvtZoomEvent$$("zoomed"), this.$PzcMatrix$);
  if(this.$_oldDataLayer$) {
    var $anim$$28_oldContainers$$ = $dataLayer$$19$$.$getAnimation$(), $animDur$$2$$ = $dataLayer$$19$$.$getAnimationDuration$();
    if(D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$28_oldContainers$$)) {
      for(var $anim1_bounds1$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$), $bounds2_oldNonScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)(this.$_oldDataLayer$), $anim2_i$$492$$ = 0;$anim2_i$$492$$ < $bounds2_oldNonScaledContainers$$.length;$anim2_i$$492$$++) {
        var $rect$$25$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$);
        $rect$$25$$.$setFill$(D.$JSCompiler_alias_NULL$$);
        $bounds2_oldNonScaledContainers$$[$anim2_i$$492$$].$addChild$($rect$$25$$)
      }
      for(var $newNonScaledContainers_oldScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$19$$), $anim2_i$$492$$ = 0;$anim2_i$$492$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_i$$492$$++) {
        $rect$$25$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$), $rect$$25$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_i$$492$$].$addChild$($rect$$25$$)
      }
      $anim1_bounds1$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$_context$, $anim$$28_oldContainers$$, $bounds2_oldNonScaledContainers$$, $newNonScaledContainers_oldScaledContainers$$, $anim1_bounds1$$, $animDur$$2$$);
      $bounds2_oldNonScaledContainers$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$);
      $newNonScaledContainers_oldScaledContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$];
      for($anim2_i$$492$$ = 0;$anim2_i$$492$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_i$$492$$++) {
        $rect$$25$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$), $rect$$25$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_i$$492$$].$addChild$($rect$$25$$)
      }
      for(var $newScaledContainers$$ = [$dataLayer$$19$$.$_dataAreaLayer$], $anim2_i$$492$$ = 0;$anim2_i$$492$$ < $newScaledContainers$$.length;$anim2_i$$492$$++) {
        $rect$$25$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$), $rect$$25$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newScaledContainers$$[$anim2_i$$492$$].$addChild$($rect$$25$$)
      }
      $anim2_i$$492$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$_context$, $anim$$28_oldContainers$$, $newNonScaledContainers_oldScaledContainers$$, $newScaledContainers$$, $bounds2_oldNonScaledContainers$$, $animDur$$2$$);
      this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_tmap$.$_context$, [$anim1_bounds1$$, $anim2_i$$492$$])
    }else {
      $anim$$28_oldContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$];
      for($anim2_i$$492$$ = 0;$anim2_i$$492$$ < $anim$$28_oldContainers$$.length;$anim2_i$$492$$++) {
        $anim$$28_oldContainers$$[$anim2_i$$492$$].getParent().removeChild($anim$$28_oldContainers$$[$anim2_i$$492$$])
      }
      this.$PostDataLayerUpdate$()
    }
    if(this.$_animation$) {
      this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
      var $thisRef$$32$$ = this;
      this.$_animation$.$setOnEnd$(function() {
        $thisRef$$32$$.$OnAnimationEnd$($dataLayer$$19$$)
      }, this);
      this.$PreDataLayerUpdate$();
      this.$_animation$.play()
    }
  }else {
    this.$PostDataLayerUpdate$(), (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$24$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$24$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$ClientId$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$14$$) {
  this.$PzcMatrix$ = $pzcMatrix$$14$$;
  for(var $id$$224$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$224$$].$render$($pzcMatrix$$14$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$) {
  for(var $id$$225$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$225$$].reset($fadeOutContainer$$, $doNotResetAreas$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$453$$, $pzcMatrix$$15$$) {
  this.$PzcMatrix$ = $pzcMatrix$$15$$;
  for(var $id$$226$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$226$$].$HandleZoomEvent$($event$$453$$, $pzcMatrix$$15$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$16$$) {
  this.$PzcMatrix$ = $pzcMatrix$$16$$;
  for(var $id$$227$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$227$$].$HandlePanEvent$($pzcMatrix$$16$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$20_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $newNonScaledContainers$$1_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $i$$493$$ = 0;$i$$493$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$493$$++) {
      var $parent$$78$$ = $newNonScaledContainers$$1_oldContainers$$1$$[$i$$493$$].getParent();
      $parent$$78$$ && $parent$$78$$.removeChild($newNonScaledContainers$$1_oldContainers$$1$$[$i$$493$$])
    }
  }
  $newNonScaledContainers$$1_oldContainers$$1$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$20_newScaledContainers$$1$$);
  for($i$$493$$ = 0;$i$$493$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$493$$++) {
    $newNonScaledContainers$$1_oldContainers$$1$$[$i$$493$$].$removeChildAt$($newNonScaledContainers$$1_oldContainers$$1$$[$i$$493$$].$getNumChildren$() - 1)
  }
  $dataLayer$$20_newScaledContainers$$1$$ = [$dataLayer$$20_newScaledContainers$$1$$.$_dataAreaLayer$];
  for($i$$493$$ = 0;$i$$493$$ < $dataLayer$$20_newScaledContainers$$1$$.length;$i$$493$$++) {
    $dataLayer$$20_newScaledContainers$$1$$[$i$$493$$].$removeChildAt$($dataLayer$$20_newScaledContainers$$1$$[$i$$493$$].$getNumChildren$() - 1)
  }
  this.$PostDataLayerUpdate$();
  (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$);
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
D.$DvtMapAreaLayer$$ = function $$DvtMapAreaLayer$$$($tmap$$12$$, $layerName$$31$$, $clientId$$27$$, $labelDisplay$$10$$, $labelType$$3$$, $eventHandler$$6$$) {
  this.Init($tmap$$12$$, $layerName$$31$$, $clientId$$27$$, $labelDisplay$$10$$, $labelType$$3$$, $eventHandler$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaLayer$$, D.$DvtMapLayer$$, "DvtMapAreaLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$13$$, $layerName$$32$$, $clientId$$28$$, $labelDisplay$$11$$, $labelType$$4$$, $eventHandler$$7$$) {
  D.$DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$13$$, $eventHandler$$7$$);
  this.$_labelDisplay$ = $labelDisplay$$11$$;
  this.$LayerName$ = $layerName$$32$$;
  this.$ClientId$ = $clientId$$28$$;
  this.$_labelType$ = $labelType$$4$$;
  this.$_areaLabels$ = {};
  this.$Areas$ = {};
  this.$AreaShapes$ = {};
  this.$_labelInfo$ = this.$AreaNames$ = D.$JSCompiler_alias_NULL$$;
  this.$_disclosed$ = [];
  this.$_renderArea$ = {};
  this.$_renderLabel$ = {};
  this.$_renderedLabels$ = {};
  this.$AreaContainer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$LabelContainer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  this.$_dropTarget$ = new D.$DvtThematicMapDropTarget$$(this, this.$_tmap$.$_mapName$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_StaticMethods_setAreaNames$$ = function $$JSCompiler_StaticMethods_setAreaNames$$$($JSCompiler_StaticMethods_setAreaNames$self$$, $values$$6$$) {
  $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$ = $values$$6$$;
  for(var $area$$7$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$7$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$7$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($area$$10$$) {
  return!this.$_labelInfo$ ? D.$JSCompiler_alias_NULL$$ : this.$_labelInfo$[$area$$10$$]
};
D.$JSCompiler_StaticMethods_getChildrenForArea$$ = function $$JSCompiler_StaticMethods_getChildrenForArea$$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$11$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$11$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$11$$].split(",") : []
};
D.$DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = (0,D.$JSCompiler_get$$)("$_labelDisplay$");
D.$JSCompiler_StaticMethods_setIsolatedArea$$ = function $$JSCompiler_StaticMethods_setIsolatedArea$$$($JSCompiler_StaticMethods_setIsolatedArea$self$$, $isolatedArea$$) {
  $JSCompiler_StaticMethods_setIsolatedArea$self$$.$_isolatedArea$ = $isolatedArea$$;
  $JSCompiler_StaticMethods_setIsolatedArea$self$$.$_layerDim$ = D.$JSCompiler_alias_NULL$$;
  for(var $area$$14$$ in $JSCompiler_StaticMethods_setIsolatedArea$self$$.$AreaShapes$) {
    $area$$14$$ != $isolatedArea$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$.$_renderArea$[$area$$14$$] = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
  this.$_layerDim$ || (this.$_isolatedArea$ ? this.$_layerDim$ = window.DvtPathUtils.$getDimensions$(window.DvtPathUtils.$createPathArray$(D.$DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$))) : ("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), this.$_layerDim$ || (this.$_layerDim$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)(this.$AreaContainer$.$getDimensions$(), 
  this.$_tmap$.$_dataAreaLayers$.$getDimensions$()))));
  return this.$_layerDim$
};
D.$JSCompiler_StaticMethods__createAreaAndLabel$$ = function $$JSCompiler_StaticMethods__createAreaAndLabel$$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$15$$, $bForceUpdateArea_label$$41_labelText$$3_mapArea$$) {
  var $areaDim$$1_areaShape$$2$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$15$$];
  if($areaDim$$1_areaShape$$2$$ && (($bForceUpdateArea_label$$41_labelText$$3_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$15$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$15$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$15$$] || ($bForceUpdateArea_label$$41_labelText$$3_mapArea$$ = new D.$DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim$$1_areaShape$$2$$, 
  $area$$15$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$15$$] = $bForceUpdateArea_label$$41_labelText$$3_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim$$1_areaShape$$2$$, $bForceUpdateArea_label$$41_labelText$$3_mapArea$$), $bForceUpdateArea_label$$41_labelText$$3_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$15$$] ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$15$$][1] : D.$JSCompiler_alias_NULL$$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$15$$] && ($bForceUpdateArea_label$$41_labelText$$3_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$15$$], !$bForceUpdateArea_label$$41_labelText$$3_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && ($bForceUpdateArea_label$$41_labelText$$3_mapArea$$ = "short" == $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$15$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$15$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$15$$] ? $bForceUpdateArea_label$$41_labelText$$3_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$41_labelText$$3_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$15$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim$$1_areaShape$$2$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim$$1_areaShape$$2$$), $bForceUpdateArea_label$$41_labelText$$3_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$41_labelText$$3_mapArea$$, 
    [[$areaDim$$1_areaShape$$2$$.x, $areaDim$$1_areaShape$$2$$.y, $areaDim$$1_areaShape$$2$$.$w$, $areaDim$$1_areaShape$$2$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$15$$] = $bForceUpdateArea_label$$41_labelText$$3_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && 
    $bForceUpdateArea_label$$41_labelText$$3_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
};
D.$JSCompiler_StaticMethods__addAreaAndLabel$$ = function $$JSCompiler_StaticMethods__addAreaAndLabel$$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$16$$, $fadeInObjs$$4$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$16$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$16$$]);
    var $label$$42$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$16$$];
    $label$$42$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$16$$] ? $label$$42$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$42$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$16$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$16$$]);
    $fadeInObjs$$4$$ && ($fadeInObjs$$4$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$16$$]), $label$$42$$ && ($fadeInObjs$$4$$.push($label$$42$$), $fadeInObjs$$4$$.push($label$$42$$.$_leaderLine$)))
  }
};
D.$DvtMapAreaLayer$$.prototype.$updateAreaShape$ = function $$DvtMapAreaLayer$$$$$updateAreaShape$$($area$$17$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_FALSE$$;
    var $cmd$$12_layerDim$$;
    this.$_paths$ = ($cmd$$12_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? D.$DvtBaseMapManager$$.$simplifyAreaPaths$(D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$12_layerDim$$.$w$, $cmd$$12_layerDim$$.$h$, this.$_tmap$.$_width$, this.$_tmap$.$_height$, this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$12_layerDim$$ = this.$_paths$[$area$$17$$];
  this.$AreaShapes$[$area$$17$$] && $cmd$$12_layerDim$$ ? this.$AreaShapes$[$area$$17$$].$setCmds$($cmd$$12_layerDim$$) : delete this.$AreaShapes$[$area$$17$$]
};
D.$JSCompiler_StaticMethods_resetRenderedAreas$$ = function $$JSCompiler_StaticMethods_resetRenderedAreas$$$($JSCompiler_StaticMethods_resetRenderedAreas$self$$) {
  for(var $area$$18$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$_renderArea$[$area$$18$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$_renderLabel$[$area$$18$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$21$$, $pzcMatrix$$22$$, $topLayerName$$2$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dataLayer$$21$$, $pzcMatrix$$22$$, $topLayerName$$2$$);
  if($topLayerName$$2$$ == this.$LayerName$) {
    for(var $area$$19$$ in this.$AreaShapes$) {
      (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$19$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$19$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$19$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$23$$) {
  this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_TRUE$$;
  for(var $area$$20$$ in this.$AreaShapes$) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$20$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$20$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$20$$)
  }
  D.$DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$23$$)
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PreDataLayerUpdate$$() {
  for(var $area$$21$$ in this.$_renderArea$) {
    this.$_renderArea$[$area$$21$$] || ((0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$21$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$21$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$22$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$22$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$22$$]);
      var $label$$43_leaderLine$$2$$ = this.$_areaLabels$[$area$$22$$];
      $label$$43_leaderLine$$2$$ && (this.$_renderedLabels$[$area$$22$$] = D.$JSCompiler_alias_FALSE$$, this.$LabelContainer$.removeChild($label$$43_leaderLine$$2$$), ($label$$43_leaderLine$$2$$ = $label$$43_leaderLine$$2$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$43_leaderLine$$2$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$7$$, $fadeInObjs$$6$$) {
  for(var $i$$inline_5578$$ = 0;$i$$inline_5578$$ < $areas$$7$$.length;$i$$inline_5578$$++) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $areas$$7$$[$i$$inline_5578$$], D.$JSCompiler_alias_FALSE$$), this.$_renderArea$[$areas$$7$$[$i$$inline_5578$$]] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $areas$$7$$[$i$$inline_5578$$], $fadeInObjs$$6$$)
  }
  for(var $id$$230$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$230$$].$discloseAreas$($areas$$7$$, $fadeInObjs$$6$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$8$$, $fadeOutObjs$$3$$) {
  for(var $childAreaLayer_id$$231$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$231$$].$undiscloseAreas$($areas$$8$$, $fadeOutObjs$$3$$)
  }
  $childAreaLayer_id$$231$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this.$_tmap$, this.$LayerName$);
  for(var $i$$508$$ = 0;$i$$508$$ < $areas$$8$$.length;$i$$508$$++) {
    var $areaName$$5$$ = $areas$$8$$[$i$$508$$];
    if(this.$Areas$[$areaName$$5$$]) {
      var $idx$$28$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areaName$$5$$);
      -1 !== $idx$$28$$ && (this.$_disclosed$.splice($idx$$28$$, 1), $fadeOutObjs$$3$$.push(this.$Areas$[$areaName$$5$$]))
    }
    $childAreaLayer_id$$231$$ && $childAreaLayer_id$$231$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)(this, $areaName$$5$$), $fadeOutObjs$$3$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$2$$) {
  D.$DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$4$$, $doNotResetAreas$$2$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$4$$), this.$_disclosed$ = [])
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$459$$, $pzcMatrix$$24$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$459$$, $pzcMatrix$$24$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$23$$ in this.$Areas$) {
      this.$Areas$[$area$$23$$].$HandleZoomEvent$($pzcMatrix$$24$$)
    }
  }
  for($area$$23$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$23$$]) {
      var $label$$44$$ = this.$_areaLabels$[$area$$23$$];
      $label$$44$$ && $label$$44$$.update($pzcMatrix$$24$$)
    }
  }
};
D.$DvtMapCustomAreaLayer$$ = function $$DvtMapCustomAreaLayer$$$($tmap$$2$$, $layerName$$27$$, $clientId$$16$$, $labelDisplay$$7$$, $labelType$$1$$, $eventHandler$$) {
  this.Init($tmap$$2$$, $layerName$$27$$, $clientId$$16$$, $labelDisplay$$7$$, $labelType$$1$$, $eventHandler$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapCustomAreaLayer$$, D.$DvtMapAreaLayer$$, "DvtMapCustomAreaLayer");
D.$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$3$$, $layerName$$28$$, $clientId$$17$$, $labelDisplay$$8$$, $labelType$$2$$, $eventHandler$$1$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$3$$, $layerName$$28$$, $clientId$$17$$, $labelDisplay$$8$$, $labelType$$2$$, $eventHandler$$1$$)
};
D.$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new D.$DvtRectangle$$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$ = function $$JSCompiler_StaticMethods__selectImageBasedOnResolution$$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$23$$) {
  var $widthRes$$1$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$23$$.$_tmap$.$_width$, $heightRes$$2$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$23$$.$_tmap$.$_height$;
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$23$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$23$$.$_areaLayerImages$;
  for(var $i$$481$$ = 0;$i$$481$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$23$$.length;$i$$481$$++) {
    var $height$$79_image$$19$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$23$$[$i$$481$$], $source$$19$$ = $height$$79_image$$19$$.source, $width$$85$$ = $height$$79_image$$19$$.width, $height$$79_image$$19$$ = $height$$79_image$$19$$.height;
    if($source$$19$$ && -1 < $source$$19$$.search(".svg") || $width$$85$$ >= $widthRes$$1$$ && $height$$79_image$$19$$ >= $heightRes$$2$$ || $i$$481$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$23$$.length - 1) {
      return $source$$19$$
    }
  }
};
D.$JSCompiler_StaticMethods_setAreaLayerImage$$ = function $$JSCompiler_StaticMethods_setAreaLayerImage$$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$, $images$$24$$) {
  var $refWidth$$2_shape$$76$$ = D.$JSCompiler_alias_NULL$$, $isRTL$$12$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_tmap$.$_context$);
  if($images$$24$$ && 0 < $images$$24$$.length) {
    var $refWidth$$2_shape$$76$$ = $images$$24$$[0].width, $refHeight$$2$$ = $images$$24$$[0].height;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_layerWidth$ = $refWidth$$2_shape$$76$$;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_layerHeight$ = $refHeight$$2$$;
    for(var $locImages$$1$$ = [], $i$$482$$ = 0;$i$$482$$ < $images$$24$$.length;$i$$482$$++) {
      $isRTL$$12$$ && "rtl" == $images$$24$$[$i$$482$$].dir ? $locImages$$1$$.push($images$$24$$[$i$$482$$]) : !$isRTL$$12$$ && "ltr" == $images$$24$$[$i$$482$$].dir && $locImages$$1$$.push($images$$24$$[$i$$482$$])
    }
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_areaLayerImages$ = 0 < $locImages$$1$$.length ? $locImages$$1$$ : $images$$24$$;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_imageSrc$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$);
    $refWidth$$2_shape$$76$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_tmap$.$_context$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_imageSrc$, 0, 0, $refWidth$$2_shape$$76$$, $refHeight$$2$$)
  }
  $refWidth$$2_shape$$76$$ && ((0,D.$JSCompiler_StaticMethods_setAreaNames$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$, {image:[D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$AreaShapes$ = {image:$refWidth$$2_shape$$76$$})
};
D.$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$443$$, $pzcMatrix$$11$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$443$$, $pzcMatrix$$11$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$[window.areaName].$setSrc$(this.$_imageSrc$))
  }
};
D.$DvtMapDataLayer$$ = function $$DvtMapDataLayer$$$($tmap$$8$$, $parentLayer$$4$$, $clientId$$25$$, $eventHandler$$4$$) {
  this.Init($tmap$$8$$, $parentLayer$$4$$, $clientId$$25$$, $eventHandler$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataLayer$$, D.$DvtObj$$, "DvtMapDataLayer");
D.$DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($tmap$$9$$, $parentLayer$$5$$, $clientId$$26$$, $eventHandler$$5$$) {
  this.$_tmap$ = $tmap$$9$$;
  this.$_clientId$ = $clientId$$26$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_eventHandler$ = $eventHandler$$5$$;
  this.$_dragSource$ = new D.$DvtDragSource$$($tmap$$9$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_dataAreaLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataPointLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataLabelLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$5$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
D.$JSCompiler_StaticMethods_getNonScaledContainers$$ = function $$JSCompiler_StaticMethods_getNonScaledContainers$$$($JSCompiler_StaticMethods_getNonScaledContainers$self$$) {
  var $containers$$1$$ = [$JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataLabelLayer$];
  $JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$1$$.push($JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataPointLayer$);
  return $containers$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableAreaObjects$$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$3$$ = [], $i$$495$$ = 0;$i$$495$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$495$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$495$$].$isDrilled$() || $navigables$$3$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$495$$])
  }
  return $navigables$$3$$
};
D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$4$$ = [], $i$$496$$ = 0;$i$$496$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$496$$++) {
    for(var $j$$49$$ = 0;$j$$49$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$49$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$496$$].$AreaId$ == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$49$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$496$$].$isDrilled$() || $navigables$$4$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$496$$]))
    }
  }
  return $navigables$$4$$
};
D.$JSCompiler_StaticMethods_addAreaObject$$ = function $$JSCompiler_StaticMethods_addAreaObject$$$($JSCompiler_StaticMethods_addAreaObject$self$$, $obj$$286$$) {
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_areaObjs$.push($obj$$286$$);
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_eventHandler$.$associate$($obj$$286$$.$getDisplayable$(), $obj$$286$$);
  $obj$$286$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaLayer$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($mode$$10$$) {
  if(this.$_selectionMode$ = $mode$$10$$) {
    this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_selectionMode$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderAreaAndLabel$$ = function $$JSCompiler_StaticMethods__renderAreaAndLabel$$$($JSCompiler_StaticMethods__renderAreaAndLabel$self$$, $areaIndex$$) {
  var $JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$;
  $JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$];
  var $areaDim_displayable$$47_displayable$$inline_5553$$ = $JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$.$getDisplayable$(), $pathToCopy$$inline_5554$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$.$AreaId$];
  $pathToCopy$$inline_5554$$ ? ($areaDim_displayable$$47_displayable$$inline_5553$$.$setCmds$($pathToCopy$$inline_5554$$.$getCmds$()), $JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$ = D.$JSCompiler_alias_TRUE$$) : ($JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$), -1 !== $JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$ && 
  $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$, 1), $JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$ = D.$JSCompiler_alias_FALSE$$);
  if($JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$) {
    $areaDim_displayable$$47_displayable$$inline_5553$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim_displayable$$47_displayable$$inline_5553$$);
    if($JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$.$_boundRectangle$.length || ($areaDim_displayable$$47_displayable$$inline_5553$$ = $areaDim_displayable$$47_displayable$$inline_5553$$.$getDimensions$(), $JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$.$_boundRectangle$.push($areaDim_displayable$$47_displayable$$inline_5553$$)), $JSCompiler_inline_result$$320_areaObj$$inline_5552_idx$$inline_9496_label$$34$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$18$$) {
  this.$_bFixPatterns$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pzcMatrix$ = $pzcMatrix$$18$$;
  var $areaLabelsToRemove$$ = {};
  this.$_dataObjs$.sort(function compare($pzcMatrix$$18$$, $areaLabelsToRemove$$) {
    return $pzcMatrix$$18$$.$getSize$() < $areaLabelsToRemove$$.$getSize$() ? 1 : $pzcMatrix$$18$$.$getSize$() > $areaLabelsToRemove$$.$getSize$() ? -1 : 0
  });
  for(var $i$$497$$ = 0;$i$$497$$ < this.$_dataObjs$.length;$i$$497$$++) {
    var $dataObj$$16_regionId$$6$$ = this.$_dataObjs$[$i$$497$$], $displayable$$48$$ = $dataObj$$16_regionId$$6$$.$getDisplayable$(), $label$$35$$ = $dataObj$$16_regionId$$6$$.$getLabel$();
    if($label$$35$$) {
      if($displayable$$48$$.$getRotation$()) {
        var $container$$79$$ = new D.$DvtContainer$$($displayable$$48$$.$_context$);
        this.$_dataPointLayer$.$addChild$($container$$79$$);
        $container$$79$$.$addChild$($displayable$$48$$);
        $container$$79$$.$addChild$($label$$35$$)
      }else {
        this.$_dataPointLayer$.$addChild$($displayable$$48$$), $displayable$$48$$.$addChild$($label$$35$$)
      }
      $dataObj$$16_regionId$$6$$.$PositionLabel$($pzcMatrix$$18$$)
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$48$$)
    }
    ($dataObj$$16_regionId$$6$$ = $dataObj$$16_regionId$$6$$.$AreaId$) && ($areaLabelsToRemove$$[$dataObj$$16_regionId$$6$$] = D.$JSCompiler_alias_TRUE$$)
  }
  for($i$$497$$ = 0;$i$$497$$ < this.$_areaObjs$.length;$i$$497$$++) {
    $areaLabelsToRemove$$[this.$_areaObjs$[$i$$497$$].$AreaId$] && this.$_areaObjs$[$i$$497$$].$setLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$497$$) || $i$$497$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$4$$, $fadeInObjs$$2$$, $pzcMatrix$$19_regionId$$7$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$19_regionId$$7$$;
  for(var $drilledAreas$$ = [], $j$$50$$ = 0;$j$$50$$ < $areas$$4$$.length;$j$$50$$++) {
    for(var $i$$498_label$$36_leaderLine$$ = 0;$i$$498_label$$36_leaderLine$$ < this.$_areaObjs$.length;$i$$498_label$$36_leaderLine$$++) {
      if(this.$_areaObjs$[$i$$498_label$$36_leaderLine$$].$AreaId$ == $areas$$4$$[$j$$50$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$498_label$$36_leaderLine$$].$AreaId$);
        (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$498_label$$36_leaderLine$$);
        var $displayable$$49$$ = this.$_areaObjs$[$i$$498_label$$36_leaderLine$$].$getDisplayable$();
        $fadeInObjs$$2$$.push($displayable$$49$$);
        (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)($displayable$$49$$, $pzcMatrix$$19_regionId$$7$$);
        if($i$$498_label$$36_leaderLine$$ = this.$_areaObjs$[$i$$498_label$$36_leaderLine$$].$getLabel$()) {
          $fadeInObjs$$2$$.push($i$$498_label$$36_leaderLine$$), ($i$$498_label$$36_leaderLine$$ = $i$$498_label$$36_leaderLine$$.$_leaderLine$) && $fadeInObjs$$2$$.push($i$$498_label$$36_leaderLine$$)
        }
        break
      }
    }
  }
  for($i$$498_label$$36_leaderLine$$ = 0;$i$$498_label$$36_leaderLine$$ < this.$_dataObjs$.length;$i$$498_label$$36_leaderLine$$++) {
    for($j$$50$$ = 0;$j$$50$$ < $areas$$4$$.length;$j$$50$$++) {
      $pzcMatrix$$19_regionId$$7$$ = this.$_dataObjs$[$i$$498_label$$36_leaderLine$$].$AreaId$, $displayable$$49$$ = this.$_dataObjs$[$i$$498_label$$36_leaderLine$$].$getDisplayable$(), $pzcMatrix$$19_regionId$$7$$ != D.$JSCompiler_alias_NULL$$ ? $pzcMatrix$$19_regionId$$7$$ == $areas$$4$$[$j$$50$$] && (this.$_dataPointLayer$.$addChild$($displayable$$49$$), $fadeInObjs$$2$$.push($displayable$$49$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$49$$), $fadeInObjs$$2$$.push($displayable$$49$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$5$$, $fadeOutObjs$$) {
  for(var $j$$51$$ = 0;$j$$51$$ < $areas$$5$$.length;$j$$51$$++) {
    for(var $i$$499_label$$37$$ = 0;$i$$499_label$$37$$ < this.$_areaObjs$.length;$i$$499_label$$37$$++) {
      if(this.$_areaObjs$[$i$$499_label$$37$$].$AreaId$ == $areas$$5$$[$j$$51$$]) {
        this.$_areaObjs$[$i$$499_label$$37$$].$isDrilled$() && this.$_areaObjs$[$i$$499_label$$37$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
        this.$_areaObjs$[$i$$499_label$$37$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$499_label$$37$$]);
        var $idx$$26$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areas$$5$$[$j$$51$$]);
        if(-1 < $idx$$26$$ && (this.$_disclosed$.splice($idx$$26$$, 1), $fadeOutObjs$$.push(this.$_areaObjs$[$i$$499_label$$37$$].$getDisplayable$()), $i$$499_label$$37$$ = this.$_areaObjs$[$i$$499_label$$37$$].$getLabel$())) {
          $fadeOutObjs$$.push($i$$499_label$$37$$), $fadeOutObjs$$.push($i$$499_label$$37$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$2$$, $doNotResetAreas$$1$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$52_selectedObjs$$1$$ = this.$_selectionHandler$.getSelection(), $i$$502_label$$40$$ = 0;$i$$502_label$$40$$ < $j$$52_selectedObjs$$1$$.length;$i$$502_label$$40$$++) {
      (!$doNotResetAreas$$1$$ || $doNotResetAreas$$1$$ && -1 == D.$DvtArrayUtils$$.$getIndex$($doNotResetAreas$$1$$, $j$$52_selectedObjs$$1$$[$i$$502_label$$40$$].$AreaId$)) && this.$_selectionHandler$.$removeFromSelection$($j$$52_selectedObjs$$1$$[$i$$502_label$$40$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$52_selectedObjs$$1$$ = 0;$j$$52_selectedObjs$$1$$ < this.$_drilled$.length;$j$$52_selectedObjs$$1$$++) {
      for($i$$502_label$$40$$ = 0;$i$$502_label$$40$$ < this.$_areaObjs$.length;$i$$502_label$$40$$++) {
        if(this.$_areaObjs$[$i$$502_label$$40$$].$AreaId$ == this.$_drilled$[$j$$52_selectedObjs$$1$$]) {
          this.$_areaObjs$[$i$$502_label$$40$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$51$$ = this.$_areaObjs$[$i$$502_label$$40$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$51$$);
          $fadeOutObjs$$2$$.push($displayable$$51$$);
          if($i$$502_label$$40$$ = this.$_areaObjs$[$i$$502_label$$40$$].$getLabel$()) {
            $i$$502_label$$40$$.update(this.$_pzcMatrix$), $fadeOutObjs$$2$$.push($i$$502_label$$40$$), $fadeOutObjs$$2$$.push($i$$502_label$$40$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$502_label$$40$$ = 0;$i$$502_label$$40$$ < this.$_dataObjs$.length;$i$$502_label$$40$$++) {
        if(this.$_dataObjs$[$i$$502_label$$40$$].$AreaId$ == this.$_drilled$[$j$$52_selectedObjs$$1$$]) {
          $displayable$$51$$ = this.$_dataObjs$[$i$$502_label$$40$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$51$$);
          $fadeOutObjs$$2$$.push($displayable$$51$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$454$$, $pzcMatrix$$20$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$20$$;
  var $i$$503_zoom$$12$$ = $pzcMatrix$$20$$.$_a$, $areaObjs$$1_dataObjs_j$$53_type$$184$$ = $event$$454$$.$getSubType$();
  if(this.$_bFixPatterns$ && "zoomed" == $areaObjs$$1_dataObjs_j$$53_type$$184$$) {
    this.$_bFixPatterns$ = D.$JSCompiler_alias_FALSE$$;
    for($areaObjs$$1_dataObjs_j$$53_type$$184$$ = 0;$areaObjs$$1_dataObjs_j$$53_type$$184$$ < this.$_areaObjs$.length;$areaObjs$$1_dataObjs_j$$53_type$$184$$++) {
      var $displayable$$52$$ = this.$_areaObjs$[$areaObjs$$1_dataObjs_j$$53_type$$184$$].$getDisplayable$(), $fill$$38$$ = $displayable$$52$$.$_ptFill$;
      if($fill$$38$$) {
        var $scaledFill$$ = new D.$DvtPatternFill$$;
        $fill$$38$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new D.$DvtMatrix$$(1 / $i$$503_zoom$$12$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1 / $i$$503_zoom$$12$$));
        $displayable$$52$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs$$1_dataObjs_j$$53_type$$184$$ = this.$_areaObjs$;
  for($i$$503_zoom$$12$$ = 0;$i$$503_zoom$$12$$ < $areaObjs$$1_dataObjs_j$$53_type$$184$$.length;$i$$503_zoom$$12$$++) {
    $areaObjs$$1_dataObjs_j$$53_type$$184$$[$i$$503_zoom$$12$$].$HandleZoomEvent$($pzcMatrix$$20$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs$$1_dataObjs_j$$53_type$$184$$ = this.$_dataObjs$;
    for($i$$503_zoom$$12$$ = 0;$i$$503_zoom$$12$$ < $areaObjs$$1_dataObjs_j$$53_type$$184$$.length;$i$$503_zoom$$12$$++) {
      $areaObjs$$1_dataObjs_j$$53_type$$184$$[$i$$503_zoom$$12$$].$HandleZoomEvent$($pzcMatrix$$20$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_set$$)("$_pzcMatrix$");
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && ((0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$288_rowKeys$$2$$) {
  if(this.$_selectionHandler$) {
    $obj$$288_rowKeys$$2$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$288_rowKeys$$2$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$($obj$$288_rowKeys$$2$$));
    $obj$$288_rowKeys$$2$$ = [];
    for(var $selection$$11$$ = this.$_selectionHandler$.getSelection(), $i$$504$$ = 0;$i$$504$$ < $selection$$11$$.length;$i$$504$$++) {
      $obj$$288_rowKeys$$2$$.push($selection$$11$$[$i$$504$$].getId())
    }
    return $obj$$288_rowKeys$$2$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$13$$ = [], $selection$$12$$ = this.$_selectionHandler$.getSelection(), $i$$505$$ = 0;$i$$505$$ < $selection$$12$$.length;$i$$505$$++) {
    $displayables$$13$$.push($selection$$12$$[$i$$505$$].$getDisplayable$())
  }
  return $displayables$$13$$
};
D.$DvtThematicMapKeyboardHandler$$ = function $$DvtThematicMapKeyboardHandler$$$($tmap$$10$$, $manager$$11$$) {
  this.Init($tmap$$10$$, $manager$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtThematicMapKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$11$$, $manager$$12$$) {
  D.$DvtThematicMapKeyboardHandler$$.$superclass$.Init($tmap$$11$$, $manager$$12$$);
  this.$_tmap$ = $tmap$$11$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$455$$) {
  return this.$isNavigationEvent$($event$$455$$) && !$event$$455$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$456$$) {
  var $focusObj$$1_keyCode$$23$$ = $event$$456$$.keyCode;
  if(221 == $focusObj$$1_keyCode$$23$$) {
    var $focusObj$$1_keyCode$$23$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this.$_eventManager$), $navigables$$5$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$);
    $focusObj$$1_keyCode$$23$$ instanceof D.$DvtMapDataArea$$ && 0 < $navigables$$5$$.length && ($focusObj$$1_keyCode$$23$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$1_keyCode$$23$$, $event$$456$$, $navigables$$5$$));
    this.$_eventManager$.$setFocus$($focusObj$$1_keyCode$$23$$);
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$1_keyCode$$23$$)
  }else {
    219 == $focusObj$$1_keyCode$$23$$ ? ($focusObj$$1_keyCode$$23$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this.$_eventManager$), $navigables$$5$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$), !($focusObj$$1_keyCode$$23$$ instanceof D.$DvtMapDataArea$$) && 0 < $navigables$$5$$.length && ($focusObj$$1_keyCode$$23$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$1_keyCode$$23$$, $event$$456$$, $navigables$$5$$)), this.$_eventManager$.$setFocus$($focusObj$$1_keyCode$$23$$), 
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$1_keyCode$$23$$)) : ($focusObj$$1_keyCode$$23$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$456$$), this.$isNavigationEvent$($event$$456$$) && !$event$$456$$.ctrlKey && (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$1_keyCode$$23$$))
  }
  return $focusObj$$1_keyCode$$23$$
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$457$$) {
  return 32 == $event$$457$$.keyCode && $event$$457$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$458_keyCode$$24$$) {
  var $isNavigable$$1$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$458_keyCode$$24$$);
  if(!$isNavigable$$1$$ && ($event$$458_keyCode$$24$$ = $event$$458_keyCode$$24$$.keyCode, 219 == $event$$458_keyCode$$24$$ || 221 == $event$$458_keyCode$$24$$)) {
    $isNavigable$$1$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$1$$
};
D.$DvtThematicMapEventManager$$ = function $$DvtThematicMapEventManager$$$($context$$523$$, $callback$$112$$, $callbackObj$$83$$) {
  this.Init($context$$523$$, $callback$$112$$, $callbackObj$$83$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapEventManager$$, D.$DvtEventManager$$, "DvtThematicMapEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$524$$, $callback$$113$$, $callbackObj$$84$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$524$$, $callback$$113$$, $callbackObj$$84$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$84$$;
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$8$$) {
  if($logicalObj$$8$$ && $logicalObj$$8$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$8$$.$getDataLayer$().$getClientId$()]
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$, $handler$$18$$) {
  this.$_selectionHandlers$[$dataLayerId$$] = $handler$$18$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = (0,D.$JSCompiler_set$$)("$_drillMode$");
D.$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$19$$, $obj$$276$$) {
  var $selectionHandler$$10$$ = this.$_selectionHandlers$[$clientId$$19$$];
  $selectionHandler$$10$$ && $selectionHandler$$10$$.$removeFromSelection$($obj$$276$$)
};
D.$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$20_selectionHandler$$11$$) {
  ($clientId$$20_selectionHandler$$11$$ = this.$_selectionHandlers$[$clientId$$20_selectionHandler$$11$$]) && $clientId$$20_selectionHandler$$11$$.$clearSelection$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$444$$) {
  var $obj$$277$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$444$$.target);
  $obj$$277$$ && ($obj$$277$$.$getShowPopupBehaviors$ && $obj$$277$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$277$$.$getDataLayer$().$getClientId$());
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$444$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$445$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$445$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$446$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$446$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$447$$) {
  if(!this.$_bDragged$) {
    var $obj$$278$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$447$$.target);
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$278$$);
    if(!$obj$$278$$ || !$obj$$278$$.$isSelectable$ || !$obj$$278$$.$isSelectable$()) {
      for(var $clientId$$21$$ in this.$_selectionHandlers$) {
        if(this.$_selectionHandlers$[$clientId$$21$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$447$$.ctrlKey)) {
          var $selectionEvent$$1$$ = new D.$DvtSelectionEvent$$([]);
          (0,D.$JSCompiler_StaticMethods_addParam$$)($selectionEvent$$1$$, "clientId", $clientId$$21$$);
          this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$1$$)
        }
      }
    }
    D.$DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$447$$);
    this.$_handleClick$($obj$$278$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$279$$) {
  if($obj$$279$$ instanceof D.$DvtMapDataObject$$) {
    if($obj$$279$$.$_hasAction$) {
      var $actionEvent$$ = new D.$DvtMapActionEvent$$($obj$$279$$.$getClientId$(), $obj$$279$$.getId(), $obj$$279$$.$_action$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$, "clientId", $obj$$279$$.$getDataLayer$().$getClientId$());
      this.$hideTooltip$();
      this.$_callback$.call(this.$_callbackObj$, $actionEvent$$)
    }else {
      $obj$$279$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$279$$.$getDataLayer$().$getClientId$())
    }
  }
};
D.$JSCompiler_StaticMethods_SetClickInfo$$ = function $$JSCompiler_StaticMethods_SetClickInfo$$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$280$$) {
  var $clientId$$22$$ = D.$JSCompiler_alias_NULL$$, $dataLayer$$10_mapLayer$$ = D.$JSCompiler_alias_NULL$$, $area$$5$$ = D.$JSCompiler_alias_NULL$$;
  $obj$$280$$ && ($obj$$280$$ instanceof D.$DvtMapDataObject$$ ? $area$$5$$ = $obj$$280$$.$getDisplayable$() : $obj$$280$$ instanceof D.$DvtMapArea$$ && ($area$$5$$ = $obj$$280$$), $obj$$280$$.$getDataLayer$ && ($dataLayer$$10_mapLayer$$ = $obj$$280$$.$getDataLayer$(), $clientId$$22$$ = $dataLayer$$10_mapLayer$$.$getClientId$(), $dataLayer$$10_mapLayer$$ = $dataLayer$$10_mapLayer$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_5365$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_5365$$.$_clickedLayerName$ = $dataLayer$$10_mapLayer$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_5365$$.$_clickedDataLayerId$ = $clientId$$22$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_5365$$.$_clickedObject$ = $area$$5$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($drillEvent_event$$448_obj$$281$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.$OnDblClick$.call(this, $drillEvent_event$$448_obj$$281$$);
  $drillEvent_event$$448_obj$$281$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent_event$$448_obj$$281$$.target);
  this.$getSelectionHandler$($drillEvent_event$$448_obj$$281$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$448_obj$$281$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$448_obj$$281$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$449$$) {
  var $eventConsumed$$6$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$ = $event$$449$$.keyCode;
  if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$) && $event$$449$$.ctrlKey && $event$$449$$.shiftKey) {
    this.$_tmap$.$resetMap$(), $event$$449$$.preventDefault()
  }else {
    if(220 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$) {
      ($JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$ = this.$_tmap$.$_legendPanel$) && ($JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$ instanceof D.$DvtCollapsiblePanel$$ ? (0,D.$JSCompiler_StaticMethods_setCollapsed$$)($JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$, !$JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$.isCollapsed()) : 
      $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$ instanceof D.$DvtPanelDrawer$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$.$isDisclosed$())), $event$$449$$.preventDefault()
    }else {
      if(13 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$) {
        $event$$449$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $event$$449$$.preventDefault()
      }else {
        if(32 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$ && $event$$449$$.ctrlKey) {
          $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$), (0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$, D.$JSCompiler_alias_TRUE$$), $event$$449$$.preventDefault()
        }else {
          if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$) && $event$$449$$.ctrlKey) {
            var $focusObj_toFit$$inline_5371$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this);
            $event$$449$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$ = this.$_tmap$, $focusObj_toFit$$inline_5371$$ = $focusObj_toFit$$inline_5371$$.$getDisplayable$(), $focusObj_toFit$$inline_5371$$ || ($focusObj_toFit$$inline_5371$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$.$_zoomToFitObject$), $focusObj_toFit$$inline_5371$$ || ($focusObj_toFit$$inline_5371$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$.$_clickedObject$), 
            $JSCompiler_StaticMethods_fitRegion$self$$inline_5370_keyCode$$22_legendPanel_logicalObj$$9$$.$_zoomToFitBounds$($focusObj_toFit$$inline_5371$$.$getDimensions$())) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this.$_tmap$);
            $event$$449$$.preventDefault()
          }else {
            $eventConsumed$$6$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$449$$)
          }
        }
      }
    }
  }
  return $eventConsumed$$6$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$450$$) {
  var $obj$$282$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$450$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$282$$);
  if(!$obj$$282$$ || $obj$$282$$.$isClearSelection$) {
    for(var $clientId$$23$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$23$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$450$$.ctrlKey)) {
        for(var $selectedObjs_selectionEvent$$2$$ = this.$_selectionHandlers$[$clientId$$23$$].getSelection(), $selectedIds$$4$$ = [], $i$$483$$ = 0;$i$$483$$ < $selectedObjs_selectionEvent$$2$$.length;$i$$483$$++) {
          $selectedIds$$4$$.push($selectedObjs_selectionEvent$$2$$[$i$$483$$].getId())
        }
        $selectedObjs_selectionEvent$$2$$ = new D.$DvtSelectionEvent$$($selectedIds$$4$$);
        this.$_callback$.call(this.$_callbackObj$, $selectedObjs_selectionEvent$$2$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$450$$);
  this.$_handleClick$($obj$$282$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$451_obj$$283$$) {
  if(($event$$451_obj$$283$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$451_obj$$283$$.target)) && $event$$451_obj$$283$$.$getShowPopupBehaviors$ && $event$$451_obj$$283$$.$getDataLayer$) {
    this.$_tmap$.$_eventClientId$ = $event$$451_obj$$283$$.$getDataLayer$().$getClientId$()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($drillEvent$$1_event$$452$$) {
  var $obj$$284$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent$$1_event$$452$$.target);
  $obj$$284$$ && (this.$getSelectionHandler$($obj$$284$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && ((0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $obj$$284$$, $drillEvent$$1_event$$452$$.ctrlKey), $drillEvent$$1_event$$452$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$452$$))
};
D.$DvtThematicMapParser$$ = function $$DvtThematicMapParser$$$($tmap$$) {
  this.Init($tmap$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapParser$$, D.$DvtObj$$, "DvtThematicMapParser");
D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$ = "inlineStyle";
D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$ = "animationOnMapChange";
D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$ = "animationOnMapChange";
D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$ = "inlineStyle";
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$1$$) {
  this.$_tmap$ = $tmap$$1$$;
  this.$_customMarkerDefs$ = {};
  this.$_areaDiscloseStyle$ = this.$_areaSelectStyle$ = this.$_areaHoverStyle$ = this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = D.$DvtAgent$$.$isTouchDevice$()
};
D.$JSCompiler_prototypeAlias$$.$loadXmlInitial$ = function $$JSCompiler_prototypeAlias$$$$loadXmlInitial$$($childNodes$$31_rootXmlNode$$6$$) {
  $childNodes$$31_rootXmlNode$$6$$ = $childNodes$$31_rootXmlNode$$6$$.$getChildNodes$();
  for(var $node$$204$$, $nodeName$$8$$, $i$$471$$ = 0;$i$$471$$ < $childNodes$$31_rootXmlNode$$6$$.length;$i$$471$$++) {
    $node$$204$$ = $childNodes$$31_rootXmlNode$$6$$[$i$$471$$], $nodeName$$8$$ = $node$$204$$.getName(), "mapProperties" == $nodeName$$8$$ ? this.$ParseMapProperties$($node$$204$$) : "customLayer" == $nodeName$$8$$ ? this.$ParseCustomRegionLayer$($node$$204$$) : "layers" == $nodeName$$8$$ ? this.$ParseDataLayers$($node$$204$$) : "legend" == $nodeName$$8$$ && this.$ParseLegend$($node$$204$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseMapProperties$ = function $$JSCompiler_prototypeAlias$$$$ParseMapProperties$$($childNodes$$32_xmlNode$$56$$) {
  var $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$;
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("source")) {
    this.$_isCustomBasemap$ = D.$JSCompiler_alias_TRUE$$
  }
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("baseMapName")) {
    var $JSCompiler_StaticMethods_setMapName$self$$inline_9356_i$$472$$ = this.$_tmap$;
    $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = this.$_isCustomBasemap$ ? "$" + $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ : $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$;
    $JSCompiler_StaticMethods_setMapName$self$$inline_9356_i$$472$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9356_i$$472$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_9356_i$$472$$.$_mapName$ != $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$;
    $JSCompiler_StaticMethods_setMapName$self$$inline_9356_i$$472$$.$_mapName$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$
  }
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("animationOnDisplay")) {
    this.$_tmap$.$_animationOnDisplay$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$
  }
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$)) {
    this.$_tmap$.$_animationOnMapChange$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$
  }
  ($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("animationDuration")) && this.$_tmap$.$setAnimationDuration$($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$);
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("displayTooltips")) {
    this.$_tmap$.$_displayTooltips$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$
  }
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("dropTargetStyle")) {
    this.$_areaDropSiteStyle$ = new D.$DvtCSSStyle$$($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$)
  }
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("controlPanelBehavior")) {
    this.$_tmap$.$_controlPanelBehavior$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$
  }
  ($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("featuresOff")) && this.$_tmap$.$setFeaturesOff$($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$);
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("centerX")) {
    this.$_tmap$.$_initialCenterX$ = (0,window.parseFloat)($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$)
  }
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("centerY")) {
    this.$_tmap$.$_initialCenterY$ = (0,window.parseFloat)($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$)
  }
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("curZoom")) {
    this.$_tmap$.$_initialZoom$ = (0,window.parseFloat)($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$)
  }
  if(($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("animationOnDrill")) && "alphaFade" == $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$) {
    this.$_tmap$.$_animationOnDrill$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$
  }
  ($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("drillMode")) && this.$_tmap$.$setDrillMode$($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$);
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("drillZoomToFit")) {
    this.$_tmap$.$_drillZoomToFit$ = "true" == $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$
  }
  $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("initialZooming");
  "auto" == $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ && (this.$_tmap$.$_initialZooming$ = D.$JSCompiler_alias_TRUE$$);
  $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("zooming");
  "none" == $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ && (this.$_tmap$.$_zooming$ = D.$JSCompiler_alias_FALSE$$);
  $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("panning");
  "none" == $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ && (this.$_tmap$.$_panning$ = D.$JSCompiler_alias_FALSE$$);
  $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = (0,window.parseFloat)($childNodes$$32_xmlNode$$56$$.$getAttr$("maxZoom"));
  (0,window.isNaN)($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$) || (this.$_tmap$.$_maxZoomFactor$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$);
  if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$.$getAttr$("markerZoomBehavior")) {
    this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$
  }
  (0,D.$JSCompiler_StaticMethods_parseComponentAttrs$$)(this.$_tmap$, $childNodes$$32_xmlNode$$56$$);
  $childNodes$$32_xmlNode$$56$$ = $childNodes$$32_xmlNode$$56$$.$getChildNodes$();
  for(var $attr$$28_baseMapName$$inline_5203_nodeName$$9$$, $JSCompiler_StaticMethods_setMapName$self$$inline_9356_i$$472$$ = 0;$JSCompiler_StaticMethods_setMapName$self$$inline_9356_i$$472$$ < $childNodes$$32_xmlNode$$56$$.length;$JSCompiler_StaticMethods_setMapName$self$$inline_9356_i$$472$$++) {
    if($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $childNodes$$32_xmlNode$$56$$[$JSCompiler_StaticMethods_setMapName$self$$inline_9356_i$$472$$], $attr$$28_baseMapName$$inline_5203_nodeName$$9$$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$.getName(), "resources" == $attr$$28_baseMapName$$inline_5203_nodeName$$9$$) {
      this.$ParseResources$($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$)
    }else {
      if("mapHierarchy" == $attr$$28_baseMapName$$inline_5203_nodeName$$9$$) {
        $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$.$getChildNodes$();
        $attr$$28_baseMapName$$inline_5203_nodeName$$9$$ = this.$_tmap$.$_mapName$;
        for(var $children$$inline_9408_layerName$$inline_5204$$ = D.$JSCompiler_alias_VOID$$, $labelDisplay$$inline_5205_layer$$inline_5208$$ = D.$JSCompiler_alias_VOID$$, $clientId$$inline_5206_shapes$$inline_9402$$ = D.$JSCompiler_alias_VOID$$, $labelType$$inline_5207$$ = D.$JSCompiler_alias_VOID$$, $labelDisplay$$inline_5205_layer$$inline_5208$$ = D.$JSCompiler_alias_VOID$$, $i$$inline_5209$$ = 0;$i$$inline_5209$$ < $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$.length;$i$$inline_5209$$++) {
          var $animDur$$inline_5213_node$$inline_5210$$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$[$i$$inline_5209$$];
          if("pointLayer" != $animDur$$inline_5213_node$$inline_5210$$.getName()) {
            var $children$$inline_9408_layerName$$inline_5204$$ = $animDur$$inline_5213_node$$inline_5210$$.$getAttr$("layerName"), $labelDisplay$$inline_5205_layer$$inline_5208$$ = $animDur$$inline_5213_node$$inline_5210$$.$getAttr$("labelDisplay"), $clientId$$inline_5206_shapes$$inline_9402$$ = $animDur$$inline_5213_node$$inline_5210$$.$getAttr$("clientId"), $labelType$$inline_5207$$ = $animDur$$inline_5213_node$$inline_5210$$.$getAttr$("labelType"), $areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$ = 
            $animDur$$inline_5213_node$$inline_5210$$.$getAttr$("areaStyle");
            $areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$ && this.$_areaLayerStyle$.$merge$(new D.$DvtCSSStyle$$($areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$));
            ($areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$ = $animDur$$inline_5213_node$$inline_5210$$.$getAttr$("labelStyle")) && this.$_areaLayerStyle$.$merge$(new D.$DvtCSSStyle$$($areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$));
            this.$_isCustomBasemap$ ? $labelDisplay$$inline_5205_layer$$inline_5208$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_9408_layerName$$inline_5204$$, $clientId$$inline_5206_shapes$$inline_9402$$, $labelDisplay$$inline_5205_layer$$inline_5208$$, $labelType$$inline_5207$$, this.$_tmap$.$_eventHandler$) : ($labelDisplay$$inline_5205_layer$$inline_5208$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_9408_layerName$$inline_5204$$, $clientId$$inline_5206_shapes$$inline_9402$$, 
            $labelDisplay$$inline_5205_layer$$inline_5208$$, $labelType$$inline_5207$$, this.$_tmap$.$_eventHandler$), $areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$ = D.$DvtBaseMapManager$$.$getAreaNames$($attr$$28_baseMapName$$inline_5203_nodeName$$9$$, $children$$inline_9408_layerName$$inline_5204$$), $clientId$$inline_5206_shapes$$inline_9402$$ = this.$_createPathShapes$($areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$), $labelDisplay$$inline_5205_layer$$inline_5208$$.$AreaShapes$ = 
            $clientId$$inline_5206_shapes$$inline_9402$$, (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($labelDisplay$$inline_5205_layer$$inline_5208$$, $areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$), $areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$28_baseMapName$$inline_5203_nodeName$$9$$, $children$$inline_9408_layerName$$inline_5204$$), $labelDisplay$$inline_5205_layer$$inline_5208$$.$_labelInfo$ = $areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$, 
            $children$$inline_9408_layerName$$inline_5204$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_9408_layerName$$inline_5204$$), $labelDisplay$$inline_5205_layer$$inline_5208$$.$_children$ = $children$$inline_9408_layerName$$inline_5204$$, $labelDisplay$$inline_5205_layer$$inline_5208$$.$_areaHoverStyle$ = this.$_areaHoverStyle$, $labelDisplay$$inline_5205_layer$$inline_5208$$.$_areaSelectStyle$ = this.$_areaSelectStyle$, $labelDisplay$$inline_5205_layer$$inline_5208$$.$_areaDiscloseStyle$ = 
            this.$_areaDiscloseStyle$);
            $labelDisplay$$inline_5205_layer$$inline_5208$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
            $labelDisplay$$inline_5205_layer$$inline_5208$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
            if($areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$ = $animDur$$inline_5213_node$$inline_5210$$.$getAttr$("animationOnLayerChange")) {
              ($animDur$$inline_5213_node$$inline_5210$$ = $animDur$$inline_5213_node$$inline_5210$$.$getAttr$("animationDuration")) && ($animDur$$inline_5213_node$$inline_5210$$ = (0,window.parseFloat)($animDur$$inline_5213_node$$inline_5210$$));
              if(!$animDur$$inline_5213_node$$inline_5210$$ || (0,window.isNaN)($animDur$$inline_5213_node$$inline_5210$$)) {
                $animDur$$inline_5213_node$$inline_5210$$ = 1
              }
              $labelDisplay$$inline_5205_layer$$inline_5208$$.$setAnimation$($areaNames$$inline_5212_attr$$inline_5211_values$$inline_9405$$);
              $labelDisplay$$inline_5205_layer$$inline_5208$$.$setAnimationDuration$($animDur$$inline_5213_node$$inline_5210$$)
            }
            $labelDisplay$$inline_5205_layer$$inline_5208$$ && this.$_tmap$.$_layers$.push($labelDisplay$$inline_5205_layer$$inline_5208$$)
          }
        }
      }else {
        if("panZoomCanvasProperties" == $attr$$28_baseMapName$$inline_5203_nodeName$$9$$) {
          this.$_tmap$.$_panZoomResources$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$
        }else {
          if("regionLayer" == $attr$$28_baseMapName$$inline_5203_nodeName$$9$$) {
            if($attr$$28_baseMapName$$inline_5203_nodeName$$9$$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
              this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($attr$$28_baseMapName$$inline_5203_nodeName$$9$$)
            }
            if($attr$$28_baseMapName$$inline_5203_nodeName$$9$$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$.$getAttr$("hoverStyle")) {
              this.$_areaHoverStyle$ = new D.$DvtCSSStyle$$($attr$$28_baseMapName$$inline_5203_nodeName$$9$$)
            }
            if($attr$$28_baseMapName$$inline_5203_nodeName$$9$$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$.$getAttr$("selectStyle")) {
              this.$_areaSelectStyle$ = new D.$DvtCSSStyle$$($attr$$28_baseMapName$$inline_5203_nodeName$$9$$)
            }
            if($attr$$28_baseMapName$$inline_5203_nodeName$$9$$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$.$getAttr$("disclosedStyle")) {
              this.$_areaDiscloseStyle$ = new D.$DvtCSSStyle$$($attr$$28_baseMapName$$inline_5203_nodeName$$9$$)
            }
          }else {
            "markerStyle" == $attr$$28_baseMapName$$inline_5203_nodeName$$9$$ ? ($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$ = new D.$DvtCSSStyle$$($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)), this.$_tmap$.$_markerStyle$ = $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$) : "basemap" == $attr$$28_baseMapName$$inline_5203_nodeName$$9$$ && 
            this.$_tmap$.$_mapName$ == "$" + $attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$.$getAttr$("id") && this.$ParseCustomBasemap$($attr$$inline_5198_attr$$inline_9357_layerNodes$$inline_5202_node$$205_style$$inline_5219$$)
          }
        }
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseDataLayers$ = function $$JSCompiler_prototypeAlias$$$$ParseDataLayers$$($i$$473_legend$$9_xmlNode$$57$$, $pzcMatrix$$10$$, $topLayerName$$) {
  var $layers$$ = $i$$473_legend$$9_xmlNode$$57$$.getElementsByTagName("layer");
  $i$$473_legend$$9_xmlNode$$57$$ = $i$$473_legend$$9_xmlNode$$57$$.getElementsByTagName("legend");
  $pzcMatrix$$10$$ && ($i$$473_legend$$9_xmlNode$$57$$ && $i$$473_legend$$9_xmlNode$$57$$[0]) && this.$ParseLegend$($i$$473_legend$$9_xmlNode$$57$$[0]);
  for($i$$473_legend$$9_xmlNode$$57$$ = 0;$i$$473_legend$$9_xmlNode$$57$$ < $layers$$.length;$i$$473_legend$$9_xmlNode$$57$$++) {
    var $clientId$$13_dataLayer$$8$$ = $layers$$[$i$$473_legend$$9_xmlNode$$57$$].$getAttr$("clientId"), $id$$219$$ = $layers$$[$i$$473_legend$$9_xmlNode$$57$$].$getAttr$("id"), $layer$$11_parentLayerName$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $id$$219$$);
    $layer$$11_parentLayerName$$1$$ ? $layer$$11_parentLayerName$$1$$ instanceof D.$DvtMapAreaLayer$$ && (0,D.$JSCompiler_StaticMethods_resetRenderedAreas$$)($layer$$11_parentLayerName$$1$$) : ($layer$$11_parentLayerName$$1$$ = $layers$$[$i$$473_legend$$9_xmlNode$$57$$].$getAttr$("showWith")) ? $layer$$11_parentLayerName$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $layer$$11_parentLayerName$$1$$) : ($layer$$11_parentLayerName$$1$$ = new D.$DvtMapLayer$$(this.$_tmap$, this.$_tmap$.$_eventHandler$), 
    this.$_tmap$.$_layers$.push($layer$$11_parentLayerName$$1$$));
    var $clientId$$13_dataLayer$$8$$ = new D.$DvtMapDataLayer$$(this.$_tmap$, $layer$$11_parentLayerName$$1$$, $clientId$$13_dataLayer$$8$$, this.$_tmap$.$_eventHandler$), $animOnDataChange_isolatedRowKey_selectionMode$$3$$ = $layers$$[$i$$473_legend$$9_xmlNode$$57$$].$getAttr$("selectionMode");
    "single" == $animOnDataChange_isolatedRowKey_selectionMode$$3$$ ? $clientId$$13_dataLayer$$8$$.$setSelectionMode$("s") : "multiple" == $animOnDataChange_isolatedRowKey_selectionMode$$3$$ && $clientId$$13_dataLayer$$8$$.$setSelectionMode$("m");
    if($animOnDataChange_isolatedRowKey_selectionMode$$3$$ = $layers$$[$i$$473_legend$$9_xmlNode$$57$$].$getAttr$("animationDataChange")) {
      var $animDur_initSelections$$ = $layers$$[$i$$473_legend$$9_xmlNode$$57$$].$getAttr$("animationDuration");
      $animDur_initSelections$$ && ($animDur_initSelections$$ = (0,window.parseFloat)($animDur_initSelections$$));
      if(!$animDur_initSelections$$ || (0,window.isNaN)($animDur_initSelections$$)) {
        $animDur_initSelections$$ = 1
      }
      $clientId$$13_dataLayer$$8$$.$setAnimation$($animOnDataChange_isolatedRowKey_selectionMode$$3$$);
      $clientId$$13_dataLayer$$8$$.$setAnimationDuration$($animDur_initSelections$$)
    }
    $animOnDataChange_isolatedRowKey_selectionMode$$3$$ = D.$JSCompiler_alias_NULL$$;
    $layer$$11_parentLayerName$$1$$ instanceof D.$DvtMapAreaLayer$$ && ($animOnDataChange_isolatedRowKey_selectionMode$$3$$ = $layers$$[$i$$473_legend$$9_xmlNode$$57$$].$getAttr$("isolatedRowKey"));
    for(var $animDur_initSelections$$ = [], $initDrilled$$ = [], $styles$$13$$ = this.$_parseStyles$($layers$$[$i$$473_legend$$9_xmlNode$$57$$].getElementsByTagName("styles")), $data$$49$$ = $layers$$[$i$$473_legend$$9_xmlNode$$57$$].getElementsByTagName("row"), $spb$$5$$ = this.$_parseShowPopupBehavior$($layers$$[$i$$473_legend$$9_xmlNode$$57$$], $styles$$13$$), $j$$46$$ = 0;$j$$46$$ < $data$$49$$.length;$j$$46$$++) {
      var $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ = $data$$49$$[$j$$46$$].$getAttr$("styleId");
      a: {
        var $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ = $layer$$11_parentLayerName$$1$$, $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$ = $clientId$$13_dataLayer$$8$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5257_layerName$$inline_5227$$ = $id$$219$$, $datatip$$inline_5254_node$$inline_5228$$ = $data$$49$$[$j$$46$$], $context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$ = $styles$$13$$[$areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$], 
        $initSelections$$inline_5230_labelText$$inline_5246$$ = $animDur_initSelections$$, $initDrilled$$inline_5231_labelDisplay$$inline_5247$$ = $initDrilled$$, $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$ = $animOnDataChange_isolatedRowKey_selectionMode$$3$$, $context$$inline_5233$$ = this.$_tmap$.$_context$, $id$$inline_5234_labelInfo$$inline_5248$$ = $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("rowKey"), 
        $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$ = $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("clientId"), $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ = $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("id"), $dataObj$$inline_5237$$ = D.$JSCompiler_alias_VOID$$, $styleType$$inline_5238$$ = $context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$.getName();
        if("colorStyles" == $styleType$$inline_5238$$) {
          if($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$) {
            if($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$ != $id$$inline_5234_labelInfo$$inline_5248$$) {
              $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ = D.$JSCompiler_alias_NULL$$;
              break a
            }
            this.$_isolatedArea$ = $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$
          }
          $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$.$_renderArea$[$areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$] = D.$JSCompiler_alias_FALSE$$;
          $dataObj$$inline_5237$$ = new D.$DvtMapDataArea$$($context$$inline_5233$$, $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$, $id$$inline_5234_labelInfo$$inline_5248$$, $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$, $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$);
          this.$_parseMapArea$($context$$inline_5233$$, $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$, $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$, $datatip$$inline_5254_node$$inline_5228$$, $dataObj$$inline_5237$$)
        }else {
          if("graduatedSymbol" == $styleType$$inline_5238$$) {
            $dataObj$$inline_5237$$ = new D.$DvtMapDataMarker$$($context$$inline_5233$$, $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$, $id$$inline_5234_labelInfo$$inline_5248$$, $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$, $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$), this.$_parseMapMarker$($context$$inline_5233$$, $context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5257_layerName$$inline_5227$$, 
            $datatip$$inline_5254_node$$inline_5228$$, $dataObj$$inline_5237$$)
          }else {
            if("image" == $styleType$$inline_5238$$) {
              var $dataObj$$inline_5237$$ = new D.$DvtMapDataImage$$($context$$inline_5233$$, $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$, $id$$inline_5234_labelInfo$$inline_5248$$, $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$, $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$), $context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$ = $context$$inline_5233$$, $center$$inline_9442_layerName$$inline_9437$$ = 
              $JSCompiler_StaticMethods_addDataObject$self$$inline_5257_layerName$$inline_5227$$, $cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$ = $datatip$$inline_5254_node$$inline_5228$$, $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$ = $dataObj$$inline_5237$$, $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$ = $cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$.$getAttr$("url"), 
              $image$$inline_9441$$ = D.$JSCompiler_alias_NULL$$;
              if($center$$inline_9442_layerName$$inline_9437$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $center$$inline_9442_layerName$$inline_9437$$, $cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$, "cities" != $center$$inline_9442_layerName$$inline_9437$$)) {
                $image$$inline_9441$$ = new D.$DvtImage$$($context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$, $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$);
                $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$.$setCenter$($center$$inline_9442_layerName$$inline_9437$$);
                $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$.$setDisplayable$($image$$inline_9441$$);
                var $width$$inline_9443$$ = D.$JSCompiler_alias_VOID$$, $height$$inline_9444$$ = D.$JSCompiler_alias_VOID$$;
                if($cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$ = $cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
                  $cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$ = new D.$DvtCSSStyle$$($cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$), ($width$$inline_9443$$ = $cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$.$getStyle$("width").substring(0, $cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$.$getStyle$("width").indexOf("px"))) && $image$$inline_9441$$.$setWidth$($width$$inline_9443$$), ($height$$inline_9444$$ = $cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$.$getStyle$("height").substring(0, 
                  $cssStyle$$inline_9446_inlineStyle$$inline_9445_node$$inline_9438$$.$getStyle$("height").indexOf("px"))) && $image$$inline_9441$$.$setHeight$($height$$inline_9444$$), $width$$inline_9443$$ != D.$JSCompiler_alias_NULL$$ && $height$$inline_9444$$ != D.$JSCompiler_alias_NULL$$ && ($image$$inline_9441$$.$setX$($center$$inline_9442_layerName$$inline_9437$$.x - $width$$inline_9443$$ / 2), $image$$inline_9441$$.$setY$($center$$inline_9442_layerName$$inline_9437$$.y - $height$$inline_9444$$ / 
                  2), $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$.$setSize$($width$$inline_9443$$ * $height$$inline_9444$$))
                }
                (!$width$$inline_9443$$ || !$height$$inline_9444$$) && D.$DvtImageLoader$$.$loadImage$($context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$, $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$, D.$DvtObj$$.$createCallback$($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$, $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$.$onImageLoaded$))
              }
            }
          }
        }
        if($context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$ = $dataObj$$inline_5237$$.$getDisplayable$()) {
          if($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$ = (0,window.parseInt)($datatip$$inline_5254_node$$inline_5228$$.$getAttr$("rotation"))) {
            $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$ = $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$ * window.Math.PI / 180, $context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$.$setRotation$($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$), 
            $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$ = $dataObj$$inline_5237$$.$getCenter$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$, $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$.x - ($center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$.x * window.Math.cos($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$) - 
            $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$.y * window.Math.sin($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$)), $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$.y - ($center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$.x * window.Math.sin($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$) + 
            $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$.y * window.Math.cos($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$)))
          }
          $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ && $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ instanceof D.$DvtMapAreaLayer$$ && ($displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$.$_renderLabel$[$areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$] = D.$JSCompiler_alias_FALSE$$);
          $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$ = "true" == $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("hasAction");
          if($dataObj$$inline_5237$$.$_hasAction$ = $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$) {
            $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$ = $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("action"), $dataObj$$inline_5237$$.$_action$ = $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$
          }
          if($action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$ = $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("destination")) {
            $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$ = [], $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$.destination = $action$$inline_9456_dataObj$$inline_9439_destination$$inline_5244_hasAction$$inline_5243_isolatedRowKey$$inline_5232_radianRot$$inline_5241_rotation$$inline_5240$$, $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$.targetFrame = "_blank", $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$.focusable = 
            D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_setHyperlink$$)($context$$inline_9436_displayable$$inline_5239_style$$inline_5229$$, $center$$inline_5242_clientId$$inline_5235_linkObj$$inline_5245_source$$inline_9440$$)
          }
          "true" == $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("selected") && $initSelections$$inline_5230_labelText$$inline_5246$$.push($id$$inline_5234_labelInfo$$inline_5248$$);
          "true" == $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("drilled") && ($initDrilled$$inline_5231_labelDisplay$$inline_5247$$.push($datatip$$inline_5254_node$$inline_5228$$.$getAttr$("id")), this.$_tmap$.$_drilledRowKeys$.push($id$$inline_5234_labelInfo$$inline_5248$$));
          $initSelections$$inline_5230_labelText$$inline_5246$$ = $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("label");
          $initDrilled$$inline_5231_labelDisplay$$inline_5247$$ = "off";
          $initSelections$$inline_5230_labelText$$inline_5246$$ ? $initDrilled$$inline_5231_labelDisplay$$inline_5247$$ = "on" : "colorStyles" == $styleType$$inline_5238$$ && ($initDrilled$$inline_5231_labelDisplay$$inline_5247$$ = $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$.$getLabelDisplay$());
          !$initSelections$$inline_5230_labelText$$inline_5246$$ && ($areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ && "off" != $initDrilled$$inline_5231_labelDisplay$$inline_5247$$) && ($initSelections$$inline_5230_labelText$$inline_5246$$ = "long" == $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$.$_labelType$ ? $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$.$AreaNames$[$areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$][1] : 
          $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$.$AreaNames$[$areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$][0]);
          if($initSelections$$inline_5230_labelText$$inline_5246$$) {
            $id$$inline_5234_labelInfo$$inline_5248$$ = D.$JSCompiler_alias_VOID$$;
            $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$.$getLabelInfoForArea$ && ($id$$inline_5234_labelInfo$$inline_5248$$ = $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$.$getLabelInfoForArea$($areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$));
            var $label$$inline_5249$$ = D.$JSCompiler_alias_VOID$$, $label$$inline_5249$$ = $id$$inline_5234_labelInfo$$inline_5248$$ ? new D.$DvtMapLabel$$($context$$inline_5233$$, $initSelections$$inline_5230_labelText$$inline_5246$$, $id$$inline_5234_labelInfo$$inline_5248$$, $initDrilled$$inline_5231_labelDisplay$$inline_5247$$, $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : "colorStyles" != $styleType$$inline_5238$$ ? 
            new D.$DvtOutputText$$($context$$inline_5233$$, $initSelections$$inline_5230_labelText$$inline_5246$$, 0, 0) : new D.$DvtMapLabel$$($context$$inline_5233$$, $initSelections$$inline_5230_labelText$$inline_5246$$, D.$JSCompiler_alias_NULL$$, $initDrilled$$inline_5231_labelDisplay$$inline_5247$$, $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$);
            ($cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$ = $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("labelPosition")) && $dataObj$$inline_5237$$.$setLabelPosition$($cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$);
            $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$ = new D.$DvtCSSStyle$$;
            "colorStyles" == $styleType$$inline_5238$$ ? $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$.$merge$($displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$.$_layerCSSStyle$) : "graduatedSymbol" == $styleType$$inline_5238$$ && $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$.$merge$(this.$_tmap$.$_markerStyle$);
            ($displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ = $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("labelStyle")) && $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$.$merge$(new D.$DvtCSSStyle$$($displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$));
            $label$$inline_5249$$ instanceof D.$DvtMapLabel$$ && ($cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$.$getStyle$("color") || $cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($dataObj$$inline_5237$$.$getDatatipColor$())));
            $label$$inline_5249$$.$setCSSStyle$($cssTextStyle$$inline_5251_dataLayer$$inline_5226_labelPosition$$inline_5250$$)
          }
          $dataObj$$inline_5237$$.$setLabel$($label$$inline_5249$$);
          $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ = this.$_tmap$.$_displayTooltips$;
          "none" != $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ && ($datatip$$inline_5254_node$$inline_5228$$ = $datatip$$inline_5254_node$$inline_5228$$.$getAttr$("shortDesc"), "auto" == $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ && ($displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ = D.$JSCompiler_alias_VOID$$, $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ && 
          ($displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ = "cities" == $JSCompiler_StaticMethods_addDataObject$self$$inline_5257_layerName$$inline_5227$$ || this.$_isCustomBasemap$ ? D.$DvtBaseMapManager$$.$getCityLabel$(this.$_tmap$.$_mapName$, $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$(this.$_tmap$.$_mapName$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5257_layerName$$inline_5227$$, 
          $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$)), $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ && ($datatip$$inline_5254_node$$inline_5228$$ = $datatip$$inline_5254_node$$inline_5228$$ ? $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$ + ": " + $datatip$$inline_5254_node$$inline_5228$$ : $displayTooltips$$inline_5253_layer$$inline_5225_preDatatip$$inline_5255_textStyle$$inline_5252$$)), 
          $datatip$$inline_5254_node$$inline_5228$$ && $dataObj$$inline_5237$$.$setDatatip$($datatip$$inline_5254_node$$inline_5228$$));
          $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ = $dataObj$$inline_5237$$
        }else {
          $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ = D.$JSCompiler_alias_NULL$$
        }
      }
      $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ && ($areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$.$getDisplayable$().$setSelectable$($clientId$$13_dataLayer$$8$$.$isSelectable$() && !($areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ instanceof D.$DvtMapDataImage$$)), 0 < $spb$$5$$.length && $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$.$setShowPopupBehaviors$($spb$$5$$), $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$ instanceof D.$DvtMapDataArea$$ ? 
      (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($clientId$$13_dataLayer$$8$$, $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$) : ($JSCompiler_StaticMethods_addDataObject$self$$inline_5257_layerName$$inline_5227$$ = $clientId$$13_dataLayer$$8$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5257_layerName$$inline_5227$$.$_dataObjs$.push($areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$), $JSCompiler_StaticMethods_addDataObject$self$$inline_5257_layerName$$inline_5227$$.$_eventHandler$.$associate$($areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$.$getDisplayable$(), 
      $areaId$$inline_5236_dataObj$$2_obj$$inline_5258_styleId$$)))
    }
    $animOnDataChange_isolatedRowKey_selectionMode$$3$$ && this.$_isolatedArea$ && ($clientId$$13_dataLayer$$8$$.$_isolatedAreaRowKey$ = $animOnDataChange_isolatedRowKey_selectionMode$$3$$, (0,D.$JSCompiler_StaticMethods_setIsolatedArea$$)($layer$$11_parentLayerName$$1$$, this.$_isolatedArea$));
    $clientId$$13_dataLayer$$8$$.$isSelectable$() && 0 < $animDur_initSelections$$.length && ($clientId$$13_dataLayer$$8$$.$_initSelections$ = $animDur_initSelections$$);
    0 < $initDrilled$$.length && (this.$_tmap$.$_initDrilled$[$layer$$11_parentLayerName$$1$$.$LayerName$] = [$clientId$$13_dataLayer$$8$$.$getClientId$(), $initDrilled$$]);
    $pzcMatrix$$10$$ || $layer$$11_parentLayerName$$1$$.$getDataLayer$($clientId$$13_dataLayer$$8$$.$getClientId$()) ? $layer$$11_parentLayerName$$1$$.$updateDataLayer$($clientId$$13_dataLayer$$8$$, $pzcMatrix$$10$$, $topLayerName$$) : $layer$$11_parentLayerName$$1$$.$DataLayers$[$clientId$$13_dataLayer$$8$$.$getClientId$()] = $clientId$$13_dataLayer$$8$$
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseLegend$ = function $$JSCompiler_prototypeAlias$$$$ParseLegend$$($xmlNode$$58$$) {
  this.$_tmap$.$_legendXml$ = $xmlNode$$58$$
};
D.$JSCompiler_prototypeAlias$$.$ParseResources$ = function $$JSCompiler_prototypeAlias$$$$ParseResources$$($xmlNode$$59$$) {
  this.$_tmap$.$setResources$($xmlNode$$59$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseCustomBasemap$ = function $$JSCompiler_prototypeAlias$$$$ParseCustomBasemap$$($childNodes$$33_xmlNode$$61$$) {
  $childNodes$$33_xmlNode$$61$$ = $childNodes$$33_xmlNode$$61$$.$getChildNodes$();
  for(var $node$$207$$, $nodeName$$11$$, $i$$475$$ = 0;$i$$475$$ < $childNodes$$33_xmlNode$$61$$.length;$i$$475$$++) {
    $node$$207$$ = $childNodes$$33_xmlNode$$61$$[$i$$475$$], $nodeName$$11$$ = $node$$207$$.getName(), "layer" == $nodeName$$11$$ ? this.$_parseCustomLayer$($node$$207$$) : "points" == $nodeName$$11$$ && this.$_parseCustomPoints$($node$$207$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomLayer$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomLayer$$($layerName$$22_xmlNode$$62$$) {
  var $childNodes$$34$$ = $layerName$$22_xmlNode$$62$$.$getChildNodes$();
  $layerName$$22_xmlNode$$62$$ = $layerName$$22_xmlNode$$62$$.$getAttr$("id");
  for(var $dir$$4_node$$208$$, $image$$17_nodeName$$12$$, $images$$22$$ = [], $i$$476$$ = 0;$i$$476$$ < $childNodes$$34$$.length;$i$$476$$++) {
    if($dir$$4_node$$208$$ = $childNodes$$34$$[$i$$476$$], $image$$17_nodeName$$12$$ = $dir$$4_node$$208$$.getName(), "image" == $image$$17_nodeName$$12$$) {
      $image$$17_nodeName$$12$$ = {};
      $image$$17_nodeName$$12$$.source = $dir$$4_node$$208$$.$getAttr$("source");
      $image$$17_nodeName$$12$$.width = $dir$$4_node$$208$$.$getAttr$("width");
      $image$$17_nodeName$$12$$.height = $dir$$4_node$$208$$.$getAttr$("height");
      var $bidi$$4$$ = $dir$$4_node$$208$$.$getAttr$("bidi");
      $dir$$4_node$$208$$ = $dir$$4_node$$208$$.$getAttr$("dir");
      $image$$17_nodeName$$12$$.dir = "true" == $bidi$$4$$ || "rtl" == $dir$$4_node$$208$$ ? "rtl" : "ltr";
      $images$$22$$.push($image$$17_nodeName$$12$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_setAreaLayerImage$$)((0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $layerName$$22_xmlNode$$62$$), $images$$22$$)
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomPoints$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomPoints$$($childNodes$$35_xmlNode$$63$$) {
  $childNodes$$35_xmlNode$$63$$ = $childNodes$$35_xmlNode$$63$$.$getChildNodes$();
  for(var $node$$209$$, $nodeName$$13$$, $points$$56$$ = {}, $labels$$4$$ = {}, $i$$477$$ = 0;$i$$477$$ < $childNodes$$35_xmlNode$$63$$.length;$i$$477$$++) {
    $node$$209$$ = $childNodes$$35_xmlNode$$63$$[$i$$477$$], $nodeName$$13$$ = $node$$209$$.getName(), "point" == $nodeName$$13$$ && ($points$$56$$[$node$$209$$.$getAttr$("name")] = [$node$$209$$.$getAttr$("x"), $node$$209$$.$getAttr$("y")], $labels$$4$$[$node$$209$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $node$$209$$.$getAttr$("longLabel")])
  }
  D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $labels$$4$$, $points$$56$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$_createPathShapes$ = function $$JSCompiler_prototypeAlias$$$$_createPathShapes$$($areaNames$$1$$) {
  var $shapes$$5$$ = {}, $context$$514$$ = this.$_tmap$.$_context$, $area$$3$$;
  for($area$$3$$ in $areaNames$$1$$) {
    $shapes$$5$$[$area$$3$$] = new D.$DvtPath$$($context$$514$$), (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "colorStyles", this.$_areaLayerStyle$, $shapes$$5$$[$area$$3$$])
  }
  return $shapes$$5$$
};
D.$JSCompiler_prototypeAlias$$.$_parseStyles$ = function $$JSCompiler_prototypeAlias$$$$_parseStyles$$($node$$210_styleNodes$$) {
  var $styles$$14$$ = {};
  if($node$$210_styleNodes$$ && 0 < $node$$210_styleNodes$$.length) {
    $node$$210_styleNodes$$ = $node$$210_styleNodes$$[0].$getChildNodes$();
    for(var $i$$478$$ = 0;$i$$478$$ < $node$$210_styleNodes$$.length;$i$$478$$++) {
      var $styleId$$1$$ = $node$$210_styleNodes$$[$i$$478$$].$getAttr$("id");
      $styles$$14$$[$styleId$$1$$] = $node$$210_styleNodes$$[$i$$478$$]
    }
  }
  return $styles$$14$$
};
D.$JSCompiler_prototypeAlias$$.$_parseShowPopupBehavior$ = function $$JSCompiler_prototypeAlias$$$$_parseShowPopupBehavior$$($node$$211$$, $styles$$15$$) {
  for(var $spbNodes$$ = $node$$211$$.getElementsByTagName("spb"), $spbs$$3$$ = [], $i$$479$$ = 0;$i$$479$$ < $spbNodes$$.length;$i$$479$$++) {
    var $alignId$$6$$ = $spbNodes$$[$i$$479$$].$getAttr$("alignId"), $popup$$ = (0,D.$DvtShowPopupBehavior$newInstance$$)($spbNodes$$[$i$$479$$]), $styleId$$2$$;
    for($styleId$$2$$ in $styles$$15$$) {
      if($alignId$$6$$ == $styleId$$2$$) {
        $popup$$ = new D.$DvtShowPopupBehavior$$($popup$$.$getPopupId$(), $popup$$.$getTriggerType$(), D.$JSCompiler_alias_NULL$$, $popup$$.$getAlign$());
        break
      }
    }
    $spbs$$3$$.push($popup$$)
  }
  return $spbs$$3$$
};
D.$JSCompiler_StaticMethods__parseCenter$$ = function $$JSCompiler_StaticMethods__parseCenter$$$($JSCompiler_StaticMethods__parseCenter$self_mapName$$, $layerName$$24_x$$221$$, $node$$213_y$$191$$, $isAreaMarker$$) {
  $JSCompiler_StaticMethods__parseCenter$self_mapName$$ = $JSCompiler_StaticMethods__parseCenter$self_mapName$$.$_tmap$.$_mapName$;
  var $areaId$$3$$ = $node$$213_y$$191$$.$getAttr$("id");
  if($areaId$$3$$) {
    return $isAreaMarker$$ ? D.$DvtBaseMapManager$$.$getAreaCenter$($JSCompiler_StaticMethods__parseCenter$self_mapName$$, $layerName$$24_x$$221$$, $areaId$$3$$) : D.$DvtBaseMapManager$$.$getCityCoordinates$($JSCompiler_StaticMethods__parseCenter$self_mapName$$, $areaId$$3$$)
  }
  $layerName$$24_x$$221$$ = (0,window.parseFloat)($node$$213_y$$191$$.$getAttr$("x"));
  $node$$213_y$$191$$ = (0,window.parseFloat)($node$$213_y$$191$$.$getAttr$("y"));
  return new D.$DvtPoint$$($layerName$$24_x$$221$$, $node$$213_y$$191$$)
};
D.$DvtThematicMapParser$$.prototype.$_parseMapArea$ = function $$DvtThematicMapParser$$$$$_parseMapArea$$($context$$517_path$$15$$, $areaId$$4_cssStyle$$29$$, $dis$$7_hs_layer$$14$$, $discloseStyle_dos_node$$215$$, $dataObj$$5$$) {
  if($dis$$7_hs_layer$$14$$.$AreaShapes$[$areaId$$4_cssStyle$$29$$]) {
    $areaId$$4_cssStyle$$29$$ = new D.$DvtCSSStyle$$($discloseStyle_dos_node$$215$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$));
    $context$$517_path$$15$$ = new D.$DvtDrillablePath$$($context$$517_path$$15$$, this.$_tmap$.$_bSupportsVectorEffects$);
    var $selectStyle_sos$$1$$ = $dis$$7_hs_layer$$14$$.$_areaSelectStyle$;
    $discloseStyle_dos_node$$215$$ = $dis$$7_hs_layer$$14$$.$_areaDiscloseStyle$;
    $dis$$7_hs_layer$$14$$ = new D.$DvtSolidStroke$$($dis$$7_hs_layer$$14$$.$_areaHoverStyle$.$getStyle$("border-color"), 1, 2);
    var $sis$$2$$ = new D.$DvtSolidStroke$$($selectStyle_sos$$1$$.$getStyle$("-tr-inner-color"), 1, 1), $selectStyle_sos$$1$$ = new D.$DvtSolidStroke$$($selectStyle_sos$$1$$.$getStyle$("-tr-outer-color"), 1, 4);
    $context$$517_path$$15$$.$setHoverStroke$($dis$$7_hs_layer$$14$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($sis$$2$$, $selectStyle_sos$$1$$);
    $discloseStyle_dos_node$$215$$ && ($dis$$7_hs_layer$$14$$ = new D.$DvtSolidStroke$$($discloseStyle_dos_node$$215$$.$getStyle$("-tr-inner-color"), 1, 2), $discloseStyle_dos_node$$215$$ = new D.$DvtSolidStroke$$($discloseStyle_dos_node$$215$$.$getStyle$("-tr-outer-color"), 1, 4), (0,D.$JSCompiler_StaticMethods_setDisclosedStroke$$)($context$$517_path$$15$$, $dis$$7_hs_layer$$14$$, $discloseStyle_dos_node$$215$$));
    $dataObj$$5$$.$setDisplayable$($context$$517_path$$15$$);
    (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "colorStyles", $areaId$$4_cssStyle$$29$$, $context$$517_path$$15$$, $dataObj$$5$$)
  }
};
D.$DvtThematicMapParser$$.prototype.$_parseMapMarker$ = function $$DvtThematicMapParser$$$$$_parseMapMarker$$($context$$518_cssStyle$$30_inlineStyle$$7$$, $markerDefs_style$$75_sx$$19$$, $center$$7_layerName$$26$$, $node$$216$$, $dataObj$$6$$) {
  var $imgSrc$$3_marker$$9_shapeType$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($center$$7_layerName$$26$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $center$$7_layerName$$26$$, $node$$216$$, "cities" != $center$$7_layerName$$26$$)) {
    if($imgSrc$$3_marker$$9_shapeType$$1$$ = $node$$216$$.$getAttr$("source")) {
      $imgSrc$$3_marker$$9_shapeType$$1$$ = [$imgSrc$$3_marker$$9_shapeType$$1$$, $node$$216$$.$getAttr$("sourceSelected"), $node$$216$$.$getAttr$("sourceHover"), $node$$216$$.$getAttr$("sourceHoverSelected")]
    }else {
      if(($imgSrc$$3_marker$$9_shapeType$$1$$ = $node$$216$$.$getAttr$("shapeType")) || ($imgSrc$$3_marker$$9_shapeType$$1$$ = "c"), !(0,D.$DvtMarker$isBuiltInShape$$)($imgSrc$$3_marker$$9_shapeType$$1$$)) {
        $markerDefs_style$$75_sx$$19$$ = $markerDefs_style$$75_sx$$19$$.getElementsByTagName("markerDef");
        for(var $i$$480_sy$$19$$ = 0;$i$$480_sy$$19$$ < $markerDefs_style$$75_sx$$19$$.length;$i$$480_sy$$19$$++) {
          !this.$_customMarkerDefs$[$imgSrc$$3_marker$$9_shapeType$$1$$] && $markerDefs_style$$75_sx$$19$$[$i$$480_sy$$19$$].$getAttr$("id") == $imgSrc$$3_marker$$9_shapeType$$1$$ && (this.$_customMarkerDefs$[$imgSrc$$3_marker$$9_shapeType$$1$$] = D.$DvtMarkerUtils$$.$createMarkerDef$($context$$518_cssStyle$$30_inlineStyle$$7$$, $markerDefs_style$$75_sx$$19$$[$i$$480_sy$$19$$]))
        }
      }
    }
    $markerDefs_style$$75_sx$$19$$ = $node$$216$$.$getAttr$("scaleX");
    $markerDefs_style$$75_sx$$19$$ = (0,window.isNaN)($markerDefs_style$$75_sx$$19$$) ? 1 : (0,window.parseFloat)($markerDefs_style$$75_sx$$19$$);
    var $i$$480_sy$$19$$ = $node$$216$$.$getAttr$("scaleY"), $i$$480_sy$$19$$ = (0,window.isNaN)($i$$480_sy$$19$$) ? 1 : (0,window.parseFloat)($i$$480_sy$$19$$), $w$$66$$ = $node$$216$$.$getAttr$("width"), $h$$65$$ = $node$$216$$.$getAttr$("height"), $w$$66$$ = !$w$$66$$ || (0,window.isNaN)($w$$66$$) ? 8 : (0,window.parseInt)($w$$66$$), $h$$65$$ = !$h$$65$$ || (0,window.isNaN)($h$$65$$) ? 8 : (0,window.parseInt)($h$$65$$), $imgSrc$$3_marker$$9_shapeType$$1$$ = new D.$DvtMarker$$($context$$518_cssStyle$$30_inlineStyle$$7$$, 
    $imgSrc$$3_marker$$9_shapeType$$1$$, this.$_tmap$.$_skinName$, $center$$7_layerName$$26$$.x - $w$$66$$ * $markerDefs_style$$75_sx$$19$$ / 2, $center$$7_layerName$$26$$.y - $h$$65$$ * $i$$480_sy$$19$$ / 2, $w$$66$$, $h$$65$$, D.$JSCompiler_alias_NULL$$, $markerDefs_style$$75_sx$$19$$, $i$$480_sy$$19$$);
    $dataObj$$6$$.$setCenter$($center$$7_layerName$$26$$);
    $dataObj$$6$$.$setDisplayable$($imgSrc$$3_marker$$9_shapeType$$1$$);
    $dataObj$$6$$.$setSize$($w$$66$$ * $markerDefs_style$$75_sx$$19$$ * $h$$65$$ * $i$$480_sy$$19$$);
    if($context$$518_cssStyle$$30_inlineStyle$$7$$ = $node$$216$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
      $context$$518_cssStyle$$30_inlineStyle$$7$$ = new D.$DvtCSSStyle$$($context$$518_cssStyle$$30_inlineStyle$$7$$), (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "graduatedSymbol", $context$$518_cssStyle$$30_inlineStyle$$7$$, $imgSrc$$3_marker$$9_shapeType$$1$$, $dataObj$$6$$)
    }
  }
};
D.$JSCompiler_StaticMethods__parseDataObjectFill$$ = function $$JSCompiler_StaticMethods__parseDataObjectFill$$$($JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5354$$, $markerStyle_styleType$$1$$, $cssStyle$$31_stroke$$64_strokeWidth$$11$$, $displayable$$39$$, $dataObj$$7_strokeColor$$5$$) {
  $cssStyle$$31_stroke$$64_strokeWidth$$11$$ || ($cssStyle$$31_stroke$$64_strokeWidth$$11$$ = {});
  var $pattern$$6$$ = $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("pattern"), $patternColor$$ = $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("pattern-color"), $backgroundColor$$10$$ = $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("background-color"), $borderColor$$28_gradient$$14$$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5354$$.$_isMobile$ || "alta" == $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5354$$.$_tmap$.$_skinName$ ? 
  D.$JSCompiler_alias_FALSE$$ : $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("gradient");
  $backgroundColor$$10$$ && $dataObj$$7_strokeColor$$5$$ ? $dataObj$$7_strokeColor$$5$$.$_categories$.push($backgroundColor$$10$$) : $patternColor$$ && $dataObj$$7_strokeColor$$5$$ && $dataObj$$7_strokeColor$$5$$.$_categories$.push($patternColor$$);
  var $opacity$$4$$;
  $opacity$$4$$ = $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("opacity") ? (0,window.parseFloat)($cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("opacity")) : 1;
  $dataObj$$7_strokeColor$$5$$ && $dataObj$$7_strokeColor$$5$$.$setDatatipColor$($backgroundColor$$10$$ ? $backgroundColor$$10$$ : $patternColor$$);
  if("graduatedSymbol" == $markerStyle_styleType$$1$$ && (0,D.$DvtMarker$isBuiltInShape$$)($displayable$$39$$.$getType$())) {
    $markerStyle_styleType$$1$$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5354$$.$_tmap$.$_markerStyle$;
    if("none" != ($cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("border-style") ? $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("border-style") : $markerStyle_styleType$$1$$.$getStyle$("border-style"))) {
      $dataObj$$7_strokeColor$$5$$ = $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("border-color") ? $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("border-color") : $markerStyle_styleType$$1$$.$getStyle$("border-color"), ($cssStyle$$31_stroke$$64_strokeWidth$$11$$ = $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("border-width") ? $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("border-width") : $markerStyle_styleType$$1$$.$getStyle$("border-width")) && ($cssStyle$$31_stroke$$64_strokeWidth$$11$$ = 
      (0,window.parseFloat)($cssStyle$$31_stroke$$64_strokeWidth$$11$$.substring(0, $cssStyle$$31_stroke$$64_strokeWidth$$11$$.indexOf("px")))), $cssStyle$$31_stroke$$64_strokeWidth$$11$$ = new D.$DvtSolidStroke$$($dataObj$$7_strokeColor$$5$$, 1, $cssStyle$$31_stroke$$64_strokeWidth$$11$$), $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5354$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($cssStyle$$31_stroke$$64_strokeWidth$$11$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$39$$.$setStroke$($cssStyle$$31_stroke$$64_strokeWidth$$11$$)
    }
    "true" == $borderColor$$28_gradient$$14$$ && $backgroundColor$$10$$ ? $displayable$$39$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$10$$, $displayable$$39$$, $opacity$$4$$)) : $pattern$$6$$ ? $displayable$$39$$.$setFill$(new D.$DvtPatternFill$$($pattern$$6$$, $patternColor$$, $backgroundColor$$10$$)) : $backgroundColor$$10$$ ? $displayable$$39$$.$setSolidFill$($backgroundColor$$10$$, $opacity$$4$$) : $displayable$$39$$.$setSolidFill$($markerStyle_styleType$$1$$.$getStyle$("background-color"), 
    $opacity$$4$$)
  }else {
    if("colorStyles" == $markerStyle_styleType$$1$$) {
      if(($borderColor$$28_gradient$$14$$ = $cssStyle$$31_stroke$$64_strokeWidth$$11$$.$getStyle$("border-color")) && "transparent" != $borderColor$$28_gradient$$14$$) {
        $cssStyle$$31_stroke$$64_strokeWidth$$11$$ = new D.$DvtSolidStroke$$($borderColor$$28_gradient$$14$$), $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5354$$.$_tmap$.$_bSupportsVectorEffects$ && ($cssStyle$$31_stroke$$64_strokeWidth$$11$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$39$$.$setStroke$($cssStyle$$31_stroke$$64_strokeWidth$$11$$)
      }
      $pattern$$6$$ ? ($JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5354$$ = new D.$DvtPatternFill$$($pattern$$6$$, $patternColor$$, $backgroundColor$$10$$), $displayable$$39$$.$_ptFill$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5354$$) : $backgroundColor$$10$$ && "transparent" != $backgroundColor$$10$$ ? $displayable$$39$$.$setSolidFill$($backgroundColor$$10$$, $opacity$$4$$) : $displayable$$39$$.$setFill$(D.$JSCompiler_alias_NULL$$)
    }
  }
};
D.$DvtThematicMapJsonParser$$ = function $$DvtThematicMapJsonParser$$$($tmap$$4$$) {
  this.Init($tmap$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapJsonParser$$, D.$DvtObj$$, "DvtThematicMapJsonParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapJsonParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$5$$) {
  this.$_tmap$ = $tmap$$5$$;
  this.$_isCustomBasemap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = D.$DvtAgent$$.$isTouchDevice$();
  this.$_customAreaLayerImages$ = {}
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$81$$) {
  $options$$81$$.skin = "alta";
  this.$ParseMapProperties$($options$$81$$);
  var $areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$ = $options$$81$$.styleDefaults;
  this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$.areaStyle + $areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$.labelStyle);
  var $basemap$$inline_5397_cssStyle$$inline_9468$$ = new D.$DvtCSSStyle$$("fill-type:solid;background-color:" + $areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$.backgroundColor);
  this.$_tmap$.$_compCSSStyle$ = $basemap$$inline_5397_cssStyle$$inline_9468$$;
  this.$_tmap$.$_styleDefaults$ = $areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$;
  this.$_isCustomBasemap$ && ($areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$ = (new D.$DvtXmlParser$$).parse($options$$81$$.sourceXml)) && this.$ParseCustomBasemap$($areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$);
  for(var $areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$ = $options$$81$$.areaLayers, $basemap$$inline_5397_cssStyle$$inline_9468$$ = this.$_tmap$.$_mapName$, $i$$inline_5398$$ = 0;$i$$inline_5398$$ < $areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$.length;$i$$inline_5398$$++) {
    var $areaLayer$$inline_5399$$ = D.$DvtJSONUtils$$.$merge$($areaLayers$$inline_5396_styles$$inline_5393_xmlNode$$66$$[$i$$inline_5398$$], D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), $children$$inline_9480_layer$$inline_5400$$ = $areaLayer$$inline_5399$$.layer;
    if($children$$inline_9480_layer$$inline_5400$$) {
      var $mapLayer$$inline_5401$$;
      $areaLayer$$inline_5399$$.areaStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_5399$$.areaStyle);
      if(this.$_isCustomBasemap$) {
        $mapLayer$$inline_5401$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_9480_layer$$inline_5400$$, D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_5399$$.labelDisplay, $areaLayer$$inline_5399$$.labelType, this.$_tmap$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setAreaLayerImage$$)($mapLayer$$inline_5401$$, this.$_customAreaLayerImages$[$children$$inline_9480_layer$$inline_5400$$])
      }else {
        $mapLayer$$inline_5401$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_9480_layer$$inline_5400$$, D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_5399$$.labelDisplay, $areaLayer$$inline_5399$$.labelType, this.$_tmap$.$_eventHandler$);
        var $areaNames$$inline_5402_values$$inline_9477$$ = D.$DvtBaseMapManager$$.$getAreaNames$($basemap$$inline_5397_cssStyle$$inline_9468$$, $children$$inline_9480_layer$$inline_5400$$), $shapes$$inline_9474$$ = this.$_createPathShapes$($areaNames$$inline_5402_values$$inline_9477$$);
        $mapLayer$$inline_5401$$.$AreaShapes$ = $shapes$$inline_9474$$;
        (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($mapLayer$$inline_5401$$, $areaNames$$inline_5402_values$$inline_9477$$);
        $areaNames$$inline_5402_values$$inline_9477$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($basemap$$inline_5397_cssStyle$$inline_9468$$, $children$$inline_9480_layer$$inline_5400$$);
        $mapLayer$$inline_5401$$.$_labelInfo$ = $areaNames$$inline_5402_values$$inline_9477$$;
        $children$$inline_9480_layer$$inline_5400$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_9480_layer$$inline_5400$$);
        $mapLayer$$inline_5401$$.$_children$ = $children$$inline_9480_layer$$inline_5400$$
      }
      $mapLayer$$inline_5401$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $mapLayer$$inline_5401$$.$setAnimation$("auto" == $areaLayer$$inline_5399$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_5399$$.animationOnLayerChange);
      $mapLayer$$inline_5401$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($mapLayer$$inline_5401$$);
      $areaLayer$$inline_5399$$.areaDataLayer && this.$ParseDataLayers$([$areaLayer$$inline_5399$$.areaDataLayer], $mapLayer$$inline_5401$$, D.$JSCompiler_alias_TRUE$$);
      $areaLayer$$inline_5399$$.pointDataLayers && this.$ParseDataLayers$($areaLayer$$inline_5399$$.pointDataLayers, $mapLayer$$inline_5401$$, D.$JSCompiler_alias_FALSE$$)
    }
  }
  this.$ParseDataLayers$($options$$81$$.pointDataLayers, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseMapProperties$ = function $$JSCompiler_prototypeAlias$$$$ParseMapProperties$$($options$$82$$) {
  this.$_tmap$.$setAnimationDuration$($options$$82$$.animationDuration / 1E3);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$82$$.animationOnDisplay ? "alphaFade" : $options$$82$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$82$$.animationOnMapChange ? "alphaFade" : $options$$82$$.animationOnMapChange;
  this.$_isCustomBasemap$ = $options$$82$$.source != D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$ = this.$_tmap$, $attr$$inline_9489$$ = this.$_isCustomBasemap$ ? "$" + $options$$82$$.basemap : $options$$82$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$.$_mapName$ != $attr$$inline_9489$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$.$_mapName$ = $attr$$inline_9489$$;
  this.$_tmap$.$_controlPanelBehavior$ = $options$$82$$.controlPanelBehavior;
  this.$_tmap$.$setDrillMode$("none");
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$82$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$82$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$82$$.panning;
  $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$ = $options$$82$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$ = "shortDescOnly" : "labelAndShortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$ && ($JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9488_tooltipDisplay$$;
  this.$_tmap$.$_zooming$ = "auto" == $options$$82$$.zooming
};
D.$JSCompiler_prototypeAlias$$.$ParseDataLayers$ = function $$JSCompiler_prototypeAlias$$$$ParseDataLayers$$($dataLayers$$7$$, $parentLayer$$3$$, $isAreaDataLayer$$) {
  if($dataLayers$$7$$) {
    for(var $i$$488$$ = 0;$i$$488$$ < $dataLayers$$7$$.length;$i$$488$$++) {
      var $dataLayerOptions_initSelections$$2$$ = D.$DvtJSONUtils$$.$merge$($dataLayers$$7$$[$i$$488$$], D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      $parentLayer$$3$$ ? $parentLayer$$3$$ instanceof D.$DvtMapAreaLayer$$ && (0,D.$JSCompiler_StaticMethods_resetRenderedAreas$$)($parentLayer$$3$$) : ($parentLayer$$3$$ = new D.$DvtMapLayer$$(this.$_tmap$, this.$_tmap$.$_eventHandler$), this.$_tmap$.$_layers$.push($parentLayer$$3$$));
      var $dataLayer$$12$$ = new D.$DvtMapDataLayer$$(this.$_tmap$, $parentLayer$$3$$, $dataLayerOptions_initSelections$$2$$.id, this.$_tmap$.$_eventHandler$), $initDisclosed_selectionMode$$4$$ = $dataLayerOptions_initSelections$$2$$.selection;
      "single" == $initDisclosed_selectionMode$$4$$ ? $dataLayer$$12$$.$setSelectionMode$("s") : "multiple" == $initDisclosed_selectionMode$$4$$ && $dataLayer$$12$$.$setSelectionMode$("m");
      $dataLayer$$12$$.$setAnimation$("auto" == $dataLayerOptions_initSelections$$2$$.animationOnDataChange ? "alphaFade" : $dataLayerOptions_initSelections$$2$$.animationOnDataChange);
      $dataLayer$$12$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      var $isolatedRowKey$$2$$ = D.$JSCompiler_alias_NULL$$;
      $parentLayer$$3$$ instanceof D.$DvtMapAreaLayer$$ && ($isolatedRowKey$$2$$ = $dataLayerOptions_initSelections$$2$$.isolatedItem);
      var $disclosedItems_markers$$2$$ = $dataLayerOptions_initSelections$$2$$.disclosedItems, $initDisclosed_selectionMode$$4$$ = [], $isolatedAreaId$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$ = $dataLayerOptions_initSelections$$2$$.areas;
      if($JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$) {
        for(var $j$$47$$ = 0;$j$$47$$ < $JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$.length;$j$$47$$++) {
          var $areaId$$5_dataObj$$10_obj$$inline_5441$$ = $JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$[$j$$47$$].location;
          if($isolatedRowKey$$2$$) {
            if($isolatedRowKey$$2$$ != $JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$[$j$$47$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$5_dataObj$$10_obj$$inline_5441$$
            }
          }
          $disclosedItems_markers$$2$$ && -1 != $disclosedItems_markers$$2$$.indexOf($JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$[$j$$47$$].id) && $initDisclosed_selectionMode$$4$$.push($areaId$$5_dataObj$$10_obj$$inline_5441$$);
          if($areaId$$5_dataObj$$10_obj$$inline_5441$$ = this.$_parseMapArea$($parentLayer$$3$$, $dataLayer$$12$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$[$j$$47$$])) {
            if($dataLayer$$12$$.$isSelectable$()) {
              var $displayable$$41$$ = $areaId$$5_dataObj$$10_obj$$inline_5441$$.$getDisplayable$();
              $displayable$$41$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)
            }
            (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($dataLayer$$12$$, $areaId$$5_dataObj$$10_obj$$inline_5441$$)
          }
        }
      }
      if($disclosedItems_markers$$2$$ = $dataLayerOptions_initSelections$$2$$.markers) {
        for($j$$47$$ = 0;$j$$47$$ < $disclosedItems_markers$$2$$.length;$j$$47$$++) {
          $areaId$$5_dataObj$$10_obj$$inline_5441$$ = $disclosedItems_markers$$2$$[$j$$47$$].location;
          if($isAreaDataLayer$$ && $isolatedRowKey$$2$$) {
            if($isolatedRowKey$$2$$ != $disclosedItems_markers$$2$$[$j$$47$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$5_dataObj$$10_obj$$inline_5441$$
            }
          }
          if($areaId$$5_dataObj$$10_obj$$inline_5441$$ = this.$_parseMapMarker$($parentLayer$$3$$, $dataLayer$$12$$, $disclosedItems_markers$$2$$[$j$$47$$], $isAreaDataLayer$$)) {
            $dataLayer$$12$$.$isSelectable$() && ($displayable$$41$$ = $areaId$$5_dataObj$$10_obj$$inline_5441$$.$getDisplayable$(), $displayable$$41$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), $JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$ = $dataLayer$$12$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$.$_dataObjs$.push($areaId$$5_dataObj$$10_obj$$inline_5441$$), $JSCompiler_StaticMethods_addDataObject$self$$inline_5440_areas$$3$$.$_eventHandler$.$associate$($areaId$$5_dataObj$$10_obj$$inline_5441$$.$getDisplayable$(), 
            $areaId$$5_dataObj$$10_obj$$inline_5441$$)
          }
        }
      }
      $isolatedAreaId$$ && ($dataLayer$$12$$.$_isolatedAreaRowKey$ = $isolatedRowKey$$2$$, (0,D.$JSCompiler_StaticMethods_setIsolatedArea$$)($parentLayer$$3$$, $isolatedAreaId$$));
      if(($dataLayerOptions_initSelections$$2$$ = $dataLayerOptions_initSelections$$2$$.selectedItems) && 0 < $dataLayerOptions_initSelections$$2$$.length) {
        $dataLayer$$12$$.$_initSelections$ = $dataLayerOptions_initSelections$$2$$
      }
      $initDisclosed_selectionMode$$4$$ && 0 < $initDisclosed_selectionMode$$4$$.length && (this.$_tmap$.$_initDrilled$[$parentLayer$$3$$.$LayerName$] = [$dataLayer$$12$$.$getClientId$(), $initDisclosed_selectionMode$$4$$]);
      $parentLayer$$3$$.$DataLayers$[$dataLayer$$12$$.$getClientId$()] = $dataLayer$$12$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseCustomBasemap$ = function $$JSCompiler_prototypeAlias$$$$ParseCustomBasemap$$($childNodes$$36_xmlNode$$67$$) {
  $childNodes$$36_xmlNode$$67$$ = $childNodes$$36_xmlNode$$67$$.$getChildNodes$();
  for(var $node$$217$$, $nodeName$$14$$, $i$$489$$ = 0;$i$$489$$ < $childNodes$$36_xmlNode$$67$$.length;$i$$489$$++) {
    $node$$217$$ = $childNodes$$36_xmlNode$$67$$[$i$$489$$], $nodeName$$14$$ = $node$$217$$.getName(), "layer" == $nodeName$$14$$ ? this.$_parseCustomLayer$($node$$217$$) : "points" == $nodeName$$14$$ && this.$_parseCustomPoints$($node$$217$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomLayer$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomLayer$$($layerName$$29_xmlNode$$68$$) {
  var $childNodes$$37$$ = $layerName$$29_xmlNode$$68$$.$getChildNodes$();
  $layerName$$29_xmlNode$$68$$ = $layerName$$29_xmlNode$$68$$.$getAttr$("id");
  for(var $dir$$5_node$$218$$, $image$$20_nodeName$$15$$, $images$$25$$ = [], $i$$490$$ = 0;$i$$490$$ < $childNodes$$37$$.length;$i$$490$$++) {
    if($dir$$5_node$$218$$ = $childNodes$$37$$[$i$$490$$], $image$$20_nodeName$$15$$ = $dir$$5_node$$218$$.getName(), "image" == $image$$20_nodeName$$15$$) {
      $image$$20_nodeName$$15$$ = {};
      $image$$20_nodeName$$15$$.source = $dir$$5_node$$218$$.$getAttr$("source");
      $image$$20_nodeName$$15$$.width = $dir$$5_node$$218$$.$getAttr$("width");
      $image$$20_nodeName$$15$$.height = $dir$$5_node$$218$$.$getAttr$("height");
      var $bidi$$5$$ = $dir$$5_node$$218$$.$getAttr$("bidi");
      $dir$$5_node$$218$$ = $dir$$5_node$$218$$.$getAttr$("dir");
      $image$$20_nodeName$$15$$.dir = "true" == $bidi$$5$$ || "rtl" == $dir$$5_node$$218$$ ? "rtl" : "ltr";
      $images$$25$$.push($image$$20_nodeName$$15$$)
    }
  }
  this.$_customAreaLayerImages$[$layerName$$29_xmlNode$$68$$] = $images$$25$$
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomPoints$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomPoints$$($childNodes$$38_xmlNode$$69$$) {
  $childNodes$$38_xmlNode$$69$$ = $childNodes$$38_xmlNode$$69$$.$getChildNodes$();
  for(var $node$$219$$, $nodeName$$16$$, $points$$57$$ = {}, $labels$$5$$ = {}, $i$$491$$ = 0;$i$$491$$ < $childNodes$$38_xmlNode$$69$$.length;$i$$491$$++) {
    $node$$219$$ = $childNodes$$38_xmlNode$$69$$[$i$$491$$], $nodeName$$16$$ = $node$$219$$.getName(), "point" == $nodeName$$16$$ && ($points$$57$$[$node$$219$$.$getAttr$("name")] = [$node$$219$$.$getAttr$("x"), $node$$219$$.$getAttr$("y")], $labels$$5$$[$node$$219$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $node$$219$$.$getAttr$("longLabel")])
  }
  D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $labels$$5$$, $points$$57$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$_createPathShapes$ = function $$JSCompiler_prototypeAlias$$$$_createPathShapes$$($areaNames$$3$$) {
  var $shapes$$6$$ = {}, $context$$525$$ = this.$_tmap$.$_context$, $area$$6$$;
  for($area$$6$$ in $areaNames$$3$$) {
    $shapes$$6$$[$area$$6$$] = new D.$DvtPath$$($context$$525$$), (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)(this, this.$_areaLayerStyle$, $shapes$$6$$[$area$$6$$])
  }
  return $shapes$$6$$
};
D.$JSCompiler_prototypeAlias$$.$_parseMapArea$ = function $$JSCompiler_prototypeAlias$$$$_parseMapArea$$($layer$$16$$, $dataLayer$$13$$, $data$$51$$) {
  var $areaId$$6_dataObj$$11$$ = $data$$51$$.location;
  if($layer$$16$$.$AreaShapes$[$areaId$$6_dataObj$$11$$] && $data$$51$$.color) {
    $layer$$16$$.$_renderArea$[$areaId$$6_dataObj$$11$$] = D.$JSCompiler_alias_FALSE$$;
    var $context$$526$$ = this.$_tmap$.$_context$, $path$$16$$ = new D.$DvtDrillablePath$$($context$$526$$, this.$_tmap$.$_bSupportsVectorEffects$);
    $data$$51$$ = D.$DvtJSONUtils$$.$merge$($data$$51$$, this.$_tmap$.$_styleDefaults$.dataAreaDefaults);
    $data$$51$$.labelStyle || ($data$$51$$.labelStyle = this.$_tmap$.$_styleDefaults$.labelStyle);
    var $dis$$8_hs$$1$$ = new D.$DvtSolidStroke$$($data$$51$$.hoverColor, 1, 2), $dos$$1_sis$$3$$ = new D.$DvtSolidStroke$$($data$$51$$.selectedInnerColor, 1, 1), $sos$$2$$ = new D.$DvtSolidStroke$$($data$$51$$.selectedOuterColor, 1, 4);
    $path$$16$$.$setHoverStroke$($dis$$8_hs$$1$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($dos$$1_sis$$3$$, $sos$$2$$);
    $dis$$8_hs$$1$$ = new D.$DvtSolidStroke$$($data$$51$$.drilledInnerColor, 1, 2);
    $dos$$1_sis$$3$$ = new D.$DvtSolidStroke$$($data$$51$$.drilledOuterColor, 1, 4);
    (0,D.$JSCompiler_StaticMethods_setDisclosedStroke$$)($path$$16$$, $dis$$8_hs$$1$$, $dos$$1_sis$$3$$);
    $areaId$$6_dataObj$$11$$ = new D.$DvtMapDataArea$$($context$$526$$, $dataLayer$$13$$, $data$$51$$.id, $data$$51$$.clientId, $areaId$$6_dataObj$$11$$);
    $areaId$$6_dataObj$$11$$.$setDisplayable$($path$$16$$);
    (0,D.$JSCompiler_StaticMethods__parseCommonData$$)(this, $layer$$16$$, $dataLayer$$13$$, $data$$51$$, $path$$16$$, $areaId$$6_dataObj$$11$$, D.$JSCompiler_alias_TRUE$$);
    return $areaId$$6_dataObj$$11$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_parseMapMarker$ = function $$JSCompiler_prototypeAlias$$$$_parseMapMarker$$($layer$$17$$, $dataLayer$$14$$, $data$$52$$, $isParentAreaDataLayer$$) {
  var $center$$8_data$$inline_5468_rotation$$9$$;
  $center$$8_data$$inline_5468_rotation$$9$$ = $data$$52$$;
  var $context$$527_mapName$$inline_5470_radianRot$$1$$ = this.$_tmap$.$_mapName$, $areaId$$inline_5471_imgSrc$$4_shapeType$$2$$ = $center$$8_data$$inline_5468_rotation$$9$$.location;
  $center$$8_data$$inline_5468_rotation$$9$$ = $areaId$$inline_5471_imgSrc$$4_shapeType$$2$$ ? $isParentAreaDataLayer$$ ? D.$DvtBaseMapManager$$.$getAreaCenter$($context$$527_mapName$$inline_5470_radianRot$$1$$, $layer$$17$$.$LayerName$, $areaId$$inline_5471_imgSrc$$4_shapeType$$2$$) : D.$DvtBaseMapManager$$.$getCityCoordinates$($context$$527_mapName$$inline_5470_radianRot$$1$$, $areaId$$inline_5471_imgSrc$$4_shapeType$$2$$) : D.$DvtThematicMapProjections$$.$project$($center$$8_data$$inline_5468_rotation$$9$$.x, 
  $center$$8_data$$inline_5468_rotation$$9$$.y, this.$_tmap$.$_mapName$);
  if(!$center$$8_data$$inline_5468_rotation$$9$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $context$$527_mapName$$inline_5470_radianRot$$1$$ = this.$_tmap$.$_context$;
  window.dataObj = new D.$DvtMapDataMarker$$($context$$527_mapName$$inline_5470_radianRot$$1$$, $dataLayer$$14$$, $data$$52$$.id, $data$$52$$.clientId, $data$$52$$.location);
  window.dataObj.$setCenter$($center$$8_data$$inline_5468_rotation$$9$$);
  $data$$52$$ = D.$DvtJSONUtils$$.$merge$($data$$52$$, this.$_tmap$.$_styleDefaults$.dataMarkerDefaults);
  ($areaId$$inline_5471_imgSrc$$4_shapeType$$2$$ = $data$$52$$.source) ? $areaId$$inline_5471_imgSrc$$4_shapeType$$2$$ = [$areaId$$inline_5471_imgSrc$$4_shapeType$$2$$, $data$$52$$.sourceSelected, $data$$52$$.sourceHover, $data$$52$$.sourceHoverSelected] : ($areaId$$inline_5471_imgSrc$$4_shapeType$$2$$ = $data$$52$$.shape) || ($areaId$$inline_5471_imgSrc$$4_shapeType$$2$$ = "c");
  var $sx$$20$$ = $data$$52$$.scaleX;
  (0,window.isNaN)($sx$$20$$) && ($sx$$20$$ = 1);
  var $sy$$20$$ = $data$$52$$.scaleY;
  (0,window.isNaN)($sy$$20$$) && ($sy$$20$$ = 1);
  var $w$$67$$ = $data$$52$$.width, $h$$66$$ = $data$$52$$.height;
  if(!$w$$67$$ || (0,window.isNaN)($w$$67$$)) {
    $w$$67$$ = 8
  }
  if(!$h$$66$$ || (0,window.isNaN)($h$$66$$)) {
    $h$$66$$ = 8
  }
  window.marker = new D.$DvtMarker$$($context$$527_mapName$$inline_5470_radianRot$$1$$, $areaId$$inline_5471_imgSrc$$4_shapeType$$2$$, "alta", $center$$8_data$$inline_5468_rotation$$9$$.x - $w$$67$$ * $sx$$20$$ / 2, $center$$8_data$$inline_5468_rotation$$9$$.y - $h$$66$$ * $sy$$20$$ / 2, $w$$67$$, $h$$66$$, D.$JSCompiler_alias_NULL$$, $sx$$20$$, $sy$$20$$);
  window.dataObj.$setDisplayable$(window.marker);
  window.dataObj.$setSize$($w$$67$$ * $sx$$20$$ * $h$$66$$ * $sy$$20$$);
  window.dataObj.$setLabelPosition$($data$$52$$.labelPosition);
  if($center$$8_data$$inline_5468_rotation$$9$$ = $data$$52$$.rotation) {
    $context$$527_mapName$$inline_5470_radianRot$$1$$ = $center$$8_data$$inline_5468_rotation$$9$$ * window.Math.PI / 180, window.marker.$setRotation$($context$$527_mapName$$inline_5470_radianRot$$1$$), $center$$8_data$$inline_5468_rotation$$9$$ = window.dataObj.$getCenter$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(window.marker, $center$$8_data$$inline_5468_rotation$$9$$.x - ($center$$8_data$$inline_5468_rotation$$9$$.x * window.Math.cos($context$$527_mapName$$inline_5470_radianRot$$1$$) - 
    $center$$8_data$$inline_5468_rotation$$9$$.y * window.Math.sin($context$$527_mapName$$inline_5470_radianRot$$1$$)), $center$$8_data$$inline_5468_rotation$$9$$.y - ($center$$8_data$$inline_5468_rotation$$9$$.x * window.Math.sin($context$$527_mapName$$inline_5470_radianRot$$1$$) + $center$$8_data$$inline_5468_rotation$$9$$.y * window.Math.cos($context$$527_mapName$$inline_5470_radianRot$$1$$)))
  }
  (0,D.$JSCompiler_StaticMethods__parseCommonData$$)(this, $layer$$17$$, $dataLayer$$14$$, $data$$52$$, window.marker, window.dataObj, $isParentAreaDataLayer$$);
  return window.dataObj
};
D.$JSCompiler_StaticMethods__parseCommonData$$ = function $$JSCompiler_StaticMethods__parseCommonData$$$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$, $layer$$18$$, $dataLayer$$15$$, $data$$53$$, $areaId$$inline_5499_displayable$$42$$, $dataObj$$12$$, $isParentAreaDataLayer$$1$$) {
  var $areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$ = $data$$53$$.location;
  $isParentAreaDataLayer$$1$$ && "auto" == $layer$$18$$.$getLabelDisplay$() && ($layer$$18$$.$_renderLabel$[$areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$] = D.$JSCompiler_alias_FALSE$$);
  $data$$53$$.action && ($dataObj$$12$$.$_hasAction$ = D.$JSCompiler_alias_TRUE$$, $dataObj$$12$$.$_action$ = $data$$53$$.action);
  if($areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$ = $data$$53$$.destination) {
    var $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$ = [];
    $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$.destination = $areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$;
    $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$.targetFrame = "_blank";
    $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$.focusable = D.$JSCompiler_alias_TRUE$$;
    (0,D.$JSCompiler_StaticMethods_setHyperlink$$)($areaId$$inline_5499_displayable$$42$$, $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$)
  }
  $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$.$_tmap$.$_displayTooltips$;
  if("none" != $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$) {
    $areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$ = $data$$53$$.shortDesc;
    if("auto" == $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$) {
      var $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$;
      ($areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$ = $data$$53$$.location) && ($cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$ = !$isParentAreaDataLayer$$1$$ || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$.$_isCustomBasemap$ ? D.$DvtBaseMapManager$$.$getCityLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$.$_tmap$.$_mapName$, $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$.$_tmap$.$_mapName$, 
      $layer$$18$$.$LayerName$, $areaId$$inline_5491_displayTooltips$$inline_5488_linkObj$$3$$));
      $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$ && ($areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$ = $areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$ ? $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$ + ": " + $areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$ : $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$)
    }
    $areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$ && $dataObj$$12$$.$setDatatip$($areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$)
  }
  $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$ = new D.$DvtCSSStyle$$;
  $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$.$setStyle$("background-color", $data$$53$$.color);
  $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$.$setStyle$("pattern", $data$$53$$.pattern);
  $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$.$setStyle$("border-color", $data$$53$$.borderColor);
  $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$.$setStyle$("border-style", $data$$53$$.borderStyle);
  $data$$53$$.borderWidth && $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$.$setStyle$("border-width", $data$$53$$.borderWidth);
  $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$.$setStyle$("opacity", $data$$53$$.opacity);
  (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$, $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$, $areaId$$inline_5499_displayable$$42$$, $dataObj$$12$$);
  $areaId$$inline_5499_displayable$$42$$ = $data$$53$$.location;
  $areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$ = ($cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$ = $data$$53$$.label) ? "on" : "off";
  $isParentAreaDataLayer$$1$$ && ($areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$ = $layer$$18$$.$getLabelDisplay$());
  !$cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$ && ($dataObj$$12$$ instanceof D.$DvtMapDataArea$$ && "off" != $areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$) && ($cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$ = "long" == $layer$$18$$.$_labelType$ ? $layer$$18$$.$AreaNames$[$areaId$$inline_5499_displayable$$42$$][1] : $layer$$18$$.$AreaNames$[$areaId$$inline_5499_displayable$$42$$][0]);
  if($cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$) {
    var $context$$inline_5502_label$$inline_5503$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$.$_tmap$.$_context$, $context$$inline_5502_label$$inline_5503$$ = $dataObj$$12$$ instanceof D.$DvtMapDataMarker$$ ? new D.$DvtOutputText$$($context$$inline_5502_label$$inline_5503$$, $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$, 0, 0) : new D.$DvtMapLabel$$($context$$inline_5502_label$$inline_5503$$, $cssStyle$$32_labelText$$inline_5500_preDatatip$$inline_5490$$, 
    $layer$$18$$.$getLabelInfoForArea$ ? $layer$$18$$.$getLabelInfoForArea$($areaId$$inline_5499_displayable$$42$$) : D.$JSCompiler_alias_NULL$$, $areaId$$8_datatip$$inline_5489_destination$$6_labelDisplay$$inline_5501$$, $dataLayer$$15$$.$_dataLabelLayer$, $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$.$_tmap$.$_bSupportsVectorEffects$);
    $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$ = new D.$DvtCSSStyle$$($data$$53$$.labelStyle);
    $context$$inline_5502_label$$inline_5503$$ instanceof D.$DvtMapLabel$$ && ($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$.$getStyle$("color") || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($dataObj$$12$$.$getDatatipColor$())));
    $context$$inline_5502_label$$inline_5503$$.$setCSSStyle$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5504$$)
  }
  $dataObj$$12$$.$setLabel$($context$$inline_5502_label$$inline_5503$$)
};
D.$JSCompiler_StaticMethods__styleDisplayable$$ = function $$JSCompiler_StaticMethods__styleDisplayable$$$($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5513$$, $borderColor$$29_cssStyle$$33$$, $displayable$$43$$, $dataObj$$15_stroke$$65$$) {
  $borderColor$$29_cssStyle$$33$$ || ($borderColor$$29_cssStyle$$33$$ = {});
  var $pattern$$7$$ = $borderColor$$29_cssStyle$$33$$.$getStyle$("pattern"), $backgroundColor$$11$$ = $borderColor$$29_cssStyle$$33$$.$getStyle$("background-color");
  $dataObj$$15_stroke$$65$$ && $dataObj$$15_stroke$$65$$.$setDatatipColor$($backgroundColor$$11$$);
  if($displayable$$43$$ instanceof D.$DvtMarker$$ && (0,D.$DvtMarker$isBuiltInShape$$)($displayable$$43$$.$getType$())) {
    "none" != $borderColor$$29_cssStyle$$33$$.$getStyle$("border-style") && ($dataObj$$15_stroke$$65$$ = new D.$DvtSolidStroke$$($borderColor$$29_cssStyle$$33$$.$getStyle$("border-color"), 1, $borderColor$$29_cssStyle$$33$$.$getStyle$("border-width")), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5513$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($dataObj$$15_stroke$$65$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$43$$.$setStroke$($dataObj$$15_stroke$$65$$));
    var $opacity$$5$$ = $borderColor$$29_cssStyle$$33$$.$getStyle$("opacity");
    "true" == D.$JSCompiler_alias_FALSE$$ && $backgroundColor$$11$$ ? $displayable$$43$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$11$$, $displayable$$43$$, $opacity$$5$$)) : $pattern$$7$$ ? $displayable$$43$$.$setFill$(new D.$DvtPatternFill$$($pattern$$7$$, $backgroundColor$$11$$, "#FFFFFF")) : $backgroundColor$$11$$ ? $displayable$$43$$.$setSolidFill$($backgroundColor$$11$$, $opacity$$5$$) : $displayable$$43$$.$setSolidFill$($borderColor$$29_cssStyle$$33$$.$getStyle$("background-color"), 
    $opacity$$5$$)
  }else {
    if($displayable$$43$$ instanceof D.$DvtPath$$) {
      if(($borderColor$$29_cssStyle$$33$$ = $borderColor$$29_cssStyle$$33$$.$getStyle$("border-color")) && "transparent" != $borderColor$$29_cssStyle$$33$$) {
        $dataObj$$15_stroke$$65$$ = new D.$DvtSolidStroke$$($borderColor$$29_cssStyle$$33$$), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5513$$.$_tmap$.$_bSupportsVectorEffects$ && ($dataObj$$15_stroke$$65$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$43$$.$setStroke$($dataObj$$15_stroke$$65$$)
      }
      $pattern$$7$$ ? ($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5513$$ = new D.$DvtPatternFill$$($pattern$$7$$, $backgroundColor$$11$$, "#FFFFFF"), $displayable$$43$$.$_ptFill$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5513$$) : "transparent" != $backgroundColor$$11$$ ? $displayable$$43$$.$setSolidFill$($backgroundColor$$11$$, $opacity$$5$$) : $displayable$$43$$.$setFill$(D.$JSCompiler_alias_NULL$$)
    }
  }
};
D.$DvtThematicMapProjections$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapProjections$$, D.$DvtObj$$, "DvtThematicMapProjections");
D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new D.$DvtRectangle$$(0, 0, 800, 500);
D.$DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new D.$DvtRectangle$$(500, 200, 200, 200);
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new D.$DvtRectangle$$(163, -49, 17, 17);
D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new D.$DvtRectangle$$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new D.$DvtRectangle$$(-0.8436866097568272, -0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new D.$DvtRectangle$$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new D.$DvtRectangle$$(-0.47944476148667076, -0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154469465354344, -0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new D.$DvtRectangle$$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new D.$DvtRectangle$$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new D.$DvtRectangle$$(-171.9, -62.6, 349.8, 150.8);
D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new D.$DvtRectangle$$(172, 51, 8, 3);
D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new D.$DvtRectangle$$(-180, 51, 51, 21);
D.$DvtThematicMapProjections$$.$_HAWAII_RECT$ = new D.$DvtRectangle$$(-178.5, 18.9, 35, 11);
D.$DvtThematicMapProjections$$.$_USA_RECT$ = new D.$DvtRectangle$$(-124.8, 24.4, 58, 25.5);
D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new D.$DvtRectangle$$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new D.$DvtRectangle$$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
D.$DvtThematicMapProjections$$.$_USA_BOUNDS$ = new D.$DvtRectangle$$(-2386803.25, -1183550.5, 4514111, 2908402);
D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new D.$DvtRectangle$$(165, 400, 100, 100);
D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new D.$DvtRectangle$$(-75, 350, 240, 150);
D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.99, 0.0943], [0.9822, 0.1258], [0.973, 0.1572], [0.96, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.835, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];
D.$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$225$$, $y$$195$$, $basemap$$4$$) {
  var $point$$45$$;
  switch($basemap$$4$$) {
    case "africa":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$225$$, $y$$195$$));
      break;
    case "asia":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$225$$, $y$$195$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$225$$, $y$$195$$);
      break;
    case "europe":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$225$$, $y$$195$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$225$$, $y$$195$$));
      break;
    case "southAmerica":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$225$$, $y$$195$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$225$$, $y$$195$$));
      break;
    case "emea":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$225$$, $y$$195$$));
      break;
    case "latinAmerica":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$225$$, $y$$195$$));
      break;
    case "usaAndCanada":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$225$$, $y$$195$$));
      break;
    case "worldRegions":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$225$$, $y$$195$$);
      break;
    case "usa":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getUSAProjection$($x$$225$$, $y$$195$$);
      break;
    case "world":
      $point$$45$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$225$$, $y$$195$$)
  }
  return $point$$45$$ ? new D.$DvtPoint$$(10 * $point$$45$$.x, 10 * $point$$45$$.y) : new D.$DvtPoint$$($x$$225$$, $y$$195$$)
};
D.$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$226$$, $y$$196$$) {
  var $viewPortTransform$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$, $x$$226$$, $y$$196$$) || (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$, $x$$226$$, $y$$196$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$226$$, $y$$196$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_RECT$, $x$$226$$, $y$$196$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, new D.$DvtPoint$$($x$$226$$, $y$$196$$))) : 
  (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_USA_RECT$, $x$$226$$, $y$$196$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, D.$DvtThematicMapProjections$$.$_getOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $x$$226$$, $y$$196$$))) : new D.$DvtPoint$$($x$$226$$, 
  $y$$196$$)
};
D.$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$227$$, $y$$197$$) {
  var $viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$1$$, D.$DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$227$$, $y$$197$$))
};
D.$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$228$$, $y$$198$$) {
  var $viewPortTransform$$2$$;
  $viewPortTransform$$2$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $x$$228$$, $y$$198$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$2$$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$228$$, $y$$198$$))
};
D.$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$46$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new D.$DvtMatrix$$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds_viewPortTransform$$3$$, $point$$46$$)
};
D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c$$19_sP1$$, $n$$11_sP2$$, $theta$$1_x$$229$$, $rho_y$$199$$) {
  $lambda0_lonOfOrigin$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c$$19_sP1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$19_sP1$$);
  $n$$11_sP2$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$11_sP2$$);
  $n$$11_sP2$$ = 0.5 * (window.Math.sin($c$$19_sP1$$) + window.Math.sin($n$$11_sP2$$));
  $c$$19_sP1$$ = window.Math.pow(window.Math.cos($c$$19_sP1$$), 2) + 2 * $n$$11_sP2$$ * window.Math.sin($c$$19_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c$$19_sP1$$ - 2 * $n$$11_sP2$$ * window.Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = window.Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$11_sP2$$;
  $theta$$1_x$$229$$ = $n$$11_sP2$$ * (D.$DvtThematicMapProjections$$.$toRadians$($theta$$1_x$$229$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$199$$ = $c$$19_sP1$$ - 2 * $n$$11_sP2$$ * window.Math.sin(D.$DvtThematicMapProjections$$.$toRadians$($rho_y$$199$$));
  $rho_y$$199$$ = window.Math.sqrt($rho_y$$199$$) / $n$$11_sP2$$;
  return new D.$DvtPoint$$($rho_y$$199$$ * window.Math.sin($theta$$1_x$$229$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$199$$ * window.Math.cos($theta$$1_x$$229$$))
};
D.$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$230$$, $y$$200$$) {
  var $pY$$1$$ = window.Math.log(window.Math.tan(0.25 * window.Math.PI + 0.5 * D.$DvtThematicMapProjections$$.$toRadians$($y$$200$$)));
  return new D.$DvtPoint$$($x$$230$$, D.$DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
D.$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$9_centerY$$5$$, $radX$$1_x$$231$$, $radY$$1_y$$201$$) {
  $radX$$1_x$$231$$ = D.$DvtThematicMapProjections$$.$toRadians$($radX$$1_x$$231$$);
  $radY$$1_y$$201$$ = D.$DvtThematicMapProjections$$.$toRadians$($radY$$1_y$$201$$);
  var $centerX$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$9_centerY$$5$$.x);
  $center$$9_centerY$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$9_centerY$$5$$.y);
  return new D.$DvtPoint$$(window.Math.cos($radY$$1_y$$201$$) * window.Math.sin($radX$$1_x$$231$$ - $centerX$$5$$) * D.$DvtThematicMapProjections$$.$_RADIUS$, (window.Math.cos($center$$9_centerY$$5$$) * window.Math.sin($radY$$1_y$$201$$) - window.Math.sin($center$$9_centerY$$5$$) * window.Math.cos($radY$$1_y$$201$$) * window.Math.cos($radX$$1_x$$231$$ - $centerX$$5$$)) * D.$DvtThematicMapProjections$$.$_RADIUS$)
};
D.$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$232$$, $y$$202$$) {
  var $newY$$7_ycriteria$$ = window.Math.floor(window.Math.abs($y$$202$$) / 5);
  $newY$$7_ycriteria$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY$$7_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (window.Math.abs($y$$202$$) - 5 * $newY$$7_ycriteria$$) / 5, $newX$$6$$ = $x$$232$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$7_ycriteria$$][0] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$7_ycriteria$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$7_ycriteria$$][0])), $newY$$7_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$7_ycriteria$$][1] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$7_ycriteria$$ + 
  1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$7_ycriteria$$][1]);
  0 > $y$$202$$ && ($newY$$7_ycriteria$$ *= -1);
  return new D.$DvtPoint$$($newX$$6$$, 180 * $newY$$7_ycriteria$$)
};
D.$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$16$$, $point$$47$$) {
  return new D.$DvtPoint$$($point$$47$$.x * $matrix$$16$$.$_a$ + $matrix$$16$$.$_tx$, $point$$47$$.y * $matrix$$16$$.$_d$ + $matrix$$16$$.$_ty$)
};
D.$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new D.$DvtMatrix$$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
D.$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$494$$ = $deviceView$$.x, $d6_j$$48$$ = $deviceView$$.y, $d$$7$$ = $mapBound$$.$w$, $d1$$ = $mapBound$$.$h$, $d2_d3$$ = 0, $d2_d3$$ = $deviceView$$.$w$ / $d$$7$$, $d4$$ = $deviceView$$.$h$ / $d1$$, $d2_d3$$ = $d2_d3$$ <= $d4$$ ? $d2_d3$$ : $d4$$, $d5_i$$494$$ = $d5_i$$494$$ - $mapBound$$.x * $d2_d3$$, $d6_j$$48$$ = $d6_j$$48$$ + $mapBound$$.y * $d2_d3$$, $d5_i$$494$$ = $d5_i$$494$$ + ($deviceView$$.$w$ - $d$$7$$ * $d2_d3$$) / 2, $d6_j$$48$$ = $d6_j$$48$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - 
  $d1$$ * $d2_d3$$) / 2);
  return new D.$DvtMatrix$$($d2_d3$$, 0, 0, -$d2_d3$$, $d5_i$$494$$, $d6_j$$48$$)
};
D.$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$233$$) {
  return $x$$233$$ * (window.Math.PI / 180)
};
D.$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$234$$) {
  return $x$$234$$ * (180 / window.Math.PI)
};
D.$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$235$$, $y$$203$$, $basemap$$5$$) {
  var $point$$48$$;
  $x$$235$$ /= 10;
  $y$$203$$ /= 10;
  switch($basemap$$5$$) {
    case "africa":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new D.$DvtPoint$$($x$$235$$, $y$$203$$));
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$48$$.x, $point$$48$$.y);
      break;
    case "asia":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new D.$DvtPoint$$($x$$235$$, $y$$203$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$48$$.x, $point$$48$$.y);
      break;
    case "australia":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$235$$, $y$$203$$);
      break;
    case "europe":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new D.$DvtPoint$$($x$$235$$, $y$$203$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$48$$.x, $point$$48$$.y);
      break;
    case "northAmerica":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$235$$, $y$$203$$));
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$48$$.x, $point$$48$$.y);
      break;
    case "southAmerica":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$235$$, $y$$203$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, new D.$DvtPoint$$($x$$235$$, $y$$203$$));
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$48$$.x, $point$$48$$.y);
      break;
    case "emea":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new D.$DvtPoint$$($x$$235$$, $y$$203$$));
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$48$$.x, $point$$48$$.y);
      break;
    case "latinAmerica":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$235$$, $y$$203$$));
      break;
    case "usaAndCanada":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new D.$DvtPoint$$($x$$235$$, $y$$203$$));
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$48$$.x, $point$$48$$.y);
      break;
    case "worldRegions":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$235$$, $y$$203$$);
      break;
    case "usa":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$235$$, $y$$203$$);
      break;
    case "world":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$235$$, $y$$203$$)
  }
  return $point$$48$$ ? $point$$48$$ : new D.$DvtPoint$$($x$$235$$, $y$$203$$)
};
D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$236$$, $y$$204$$) {
  var $point$$49_viewPortTransform$$4$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$, $x$$236$$, $y$$204$$) ? ($point$$49_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$49_viewPortTransform$$4$$.$invert$(), $point$$49_viewPortTransform$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$49_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$236$$, 
  $y$$204$$)), D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$49_viewPortTransform$$4$$.x, $point$$49_viewPortTransform$$4$$.y)) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$, $x$$236$$, $y$$204$$) ? ($point$$49_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$49_viewPortTransform$$4$$.$invert$(), 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$49_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$236$$, $y$$204$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $x$$236$$, $y$$204$$) ? ($point$$49_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$49_viewPortTransform$$4$$.$invert$(), $point$$49_viewPortTransform$$4$$ = 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$49_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$236$$, $y$$204$$)), D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $point$$49_viewPortTransform$$4$$.x, $point$$49_viewPortTransform$$4$$.y)) : new D.$DvtPoint$$($x$$236$$, $y$$204$$)
};
D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$237$$, $y$$205$$) {
  var $point$$50_viewPortTransform$$5$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$50_viewPortTransform$$5$$.$invert$();
  $point$$50_viewPortTransform$$5$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$50_viewPortTransform$$5$$, new D.$DvtPoint$$($x$$237$$, $y$$205$$));
  return D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$50_viewPortTransform$$5$$.x, $point$$50_viewPortTransform$$5$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$238$$, $y$$206$$) {
  var $point$$51_viewPortTransform$$6$$;
  $point$$51_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$, $x$$238$$, $y$$206$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$51_viewPortTransform$$6$$.$invert$();
  $point$$51_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$51_viewPortTransform$$6$$, new D.$DvtPoint$$($x$$238$$, $y$$206$$));
  return D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$51_viewPortTransform$$6$$.x, $point$$51_viewPortTransform$$6$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$52$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new D.$DvtMatrix$$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds$$1_viewPortTransform$$7$$, $point$$52$$)
};
D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0$$1_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$21_sP1$$1$$, $n$$12_sP2$$1$$, $x$$239$$, $y$$207$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0$$1_phi0$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0$$1_phi0$$1$$);
  $c$$21_sP1$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$21_sP1$$1$$);
  $n$$12_sP2$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$12_sP2$$1$$);
  $n$$12_sP2$$1$$ = 0.5 * (window.Math.sin($c$$21_sP1$$1$$) + window.Math.sin($n$$12_sP2$$1$$));
  $c$$21_sP1$$1$$ = window.Math.pow(window.Math.cos($c$$21_sP1$$1$$), 2) + 2 * $n$$12_sP2$$1$$ * window.Math.sin($c$$21_sP1$$1$$);
  $latOfOrigin$$1_p0$$1_phi0$$1$$ = $c$$21_sP1$$1$$ - 2 * $n$$12_sP2$$1$$ * window.Math.sin($latOfOrigin$$1_p0$$1_phi0$$1$$);
  $latOfOrigin$$1_p0$$1_phi0$$1$$ = window.Math.sqrt($latOfOrigin$$1_p0$$1_phi0$$1$$) / $n$$12_sP2$$1$$;
  var $p$$9$$ = window.Math.sqrt($x$$239$$ * $x$$239$$ + ($latOfOrigin$$1_p0$$1_phi0$$1$$ - $y$$207$$) * ($latOfOrigin$$1_p0$$1_phi0$$1$$ - $y$$207$$));
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + window.Math.atan($x$$239$$ / ($latOfOrigin$$1_p0$$1_phi0$$1$$ - $y$$207$$)) / $n$$12_sP2$$1$$), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(($c$$21_sP1$$1$$ - $p$$9$$ * $p$$9$$ * $n$$12_sP2$$1$$ * $n$$12_sP2$$1$$) / (2 * $n$$12_sP2$$1$$))))
};
D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$240$$, $y$$208$$) {
  return new D.$DvtPoint$$($x$$240$$, D.$DvtThematicMapProjections$$.$toDegrees$(2 * window.Math.atan(window.Math.exp(D.$DvtThematicMapProjections$$.$toRadians$($y$$208$$))) - 0.5 * window.Math.PI))
};
D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$10$$, $radX$$2_x$$241$$, $radY$$2_y$$209$$) {
  $radX$$2_x$$241$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$2_y$$209$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$6$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$10$$.y), $p$$10$$ = window.Math.sqrt($radX$$2_x$$241$$ * $radX$$2_x$$241$$ + $radY$$2_y$$209$$ * $radY$$2_y$$209$$), $c$$22$$ = window.Math.asin($p$$10$$);
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$(D.$DvtThematicMapProjections$$.$toRadians$($center$$10$$.x) + window.Math.atan($radX$$2_x$$241$$ * window.Math.sin($c$$22$$) / ($p$$10$$ * window.Math.cos($centerY$$6$$) * window.Math.cos($c$$22$$) - $radY$$2_y$$209$$ * window.Math.sin($centerY$$6$$) * window.Math.sin($c$$22$$)))), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(window.Math.cos($c$$22$$) * window.Math.sin($centerY$$6$$) + $radY$$2_y$$209$$ * window.Math.sin($c$$22$$) * 
  window.Math.cos($centerY$$6$$) / $p$$10$$)))
};
D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$242$$, $y$$210$$) {
  var $criteria$$1_originalX$$ = window.Math.floor(window.Math.abs($y$$210$$) / 5);
  $criteria$$1_originalX$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$1_originalX$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (window.Math.abs($y$$210$$ / 180) - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]) / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$1_originalX$$, $criteria$$1_originalX$$ = $x$$242$$ / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0] + 
  $yInterval$$1$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0]));
  0 > $y$$210$$ && ($originalY$$ *= -1);
  return new D.$DvtPoint$$($criteria$$1_originalX$$, $originalY$$)
};
D.$DvtMapControlButton$$ = function $$DvtMapControlButton$$$($context$$519$$, $button$$53$$, $mapCallback$$3$$, $panZoomCanvas$$21$$, $btype$$3$$, $resources$$31$$, $eventManager$$27$$) {
  this.Init($context$$519$$, $button$$53$$, $mapCallback$$3$$, $panZoomCanvas$$21$$, $btype$$3$$, $resources$$31$$, $eventManager$$27$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapControlButton$$, D.$DvtBasePanZoomControl$$, "DvtMapControlButton");
D.$DvtMapControlButton$$.prototype.Init = function $$DvtMapControlButton$$$$Init$($JSCompiler_temp$$8023_context$$520_proxy$$13$$, $button$$54$$, $mapCallback$$4$$, $panZoomCanvas$$22$$, $btype$$4$$, $resources$$32$$, $eventManager$$28$$) {
  D.$DvtMapControlButton$$.$superclass$.Init.call(this, $JSCompiler_temp$$8023_context$$520_proxy$$13$$, $panZoomCanvas$$22$$, $resources$$32$$);
  this.$_btype$ = $btype$$4$$;
  this.$_button$ = $button$$54$$;
  this.$_eventManager$ = $eventManager$$28$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_button$, this.$HandleOnClick$, this);
  this.$_button$.setCursor("pointer");
  $JSCompiler_temp$$8023_context$$520_proxy$$13$$ = 0 == this.$_btype$ ? this.$getResources$().$_controlPanelDrillUpTooltip$ : 1 == this.$_btype$ ? this.$getResources$().$_controlPanelDrillDownTooltip$ : 2 == this.$_btype$ ? this.$getResources$().$_controlPanelResetTooltip$ : D.$JSCompiler_alias_NULL$$;
  $JSCompiler_temp$$8023_context$$520_proxy$$13$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$8023_context$$520_proxy$$13$$);
  this.$_eventManager$.$associate$(this.$_button$, $JSCompiler_temp$$8023_context$$520_proxy$$13$$);
  this.$addChild$(this.$_button$);
  this.$_mapCallback$ = $mapCallback$$4$$;
  this.$_isEnabled$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtMapControlButton$$.prototype.$setEnabled$ = function $$DvtMapControlButton$$$$$setEnabled$$($enabled$$23$$) {
  this.$setAlpha$($enabled$$23$$ ? 1 : 0.4);
  this.$_button$.setCursor($enabled$$23$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_isEnabled$ = $enabled$$23$$;
  this.$_button$.$setEnabled$($enabled$$23$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_button$)
};
D.$DvtMapControlButton$$.prototype.$HandleOnClick$ = function $$DvtMapControlButton$$$$$HandleOnClick$$($event$$442$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$442$$);
  this.$_isEnabled$ && this.$_mapCallback$ && this.$_mapCallback$()
};
D.$DvtThematicMapControlPanel$$ = function $$DvtThematicMapControlPanel$$$($context$$521$$, $drillMode$$, $buttonImages$$5$$, $callbacks$$4$$, $canvas$$2$$, $resources$$33$$, $controls$$5$$, $view$$26$$) {
  this.Init($context$$521$$, $drillMode$$, $buttonImages$$5$$, $callbacks$$4$$, $canvas$$2$$, $resources$$33$$, $controls$$5$$, $view$$26$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanel$$, D.$DvtPanZoomControlPanel$$, "DvtThematicMapControlPanel");
D.$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$522$$, $drillMode$$1$$, $buttonImages$$6$$, $callbacks$$5$$, $canvas$$3$$, $resources$$34$$, $controls$$6$$, $view$$27$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$522$$, $canvas$$3$$, $buttonImages$$6$$, $resources$$34$$, $controls$$6$$, $view$$27$$);
  this.$setResources$(new D.$DvtThematicMapControlPanelResources$$($resources$$34$$));
  this.$_drillMode$ = $drillMode$$1$$;
  this.$_buttonImages$ = $buttonImages$$6$$;
  this.$_drillUpCallback$ = $callbacks$$5$$[0];
  this.$_drillDownCallback$ = $callbacks$$5$$[1];
  this.$_resetCallback$ = $callbacks$$5$$[2];
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = D.$JSCompiler_alias_NULL$$;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $view$$27$$.$getControlPanelStyleMap$()
};
D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillDownButton$$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$.$setEnabled$($enable$$)
};
D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillUpButton$$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$1$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$1$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$.$setEnabled$($enable$$1$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$setResources$ = function $$DvtThematicMapControlPanel$$$$$setResources$$($resources$$35$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.$setResources$.call(this, $resources$$35$$);
  this.$_drillDownButton$ && this.$_drillDownButton$.$setResources$($resources$$35$$);
  this.$_drillUpButton$ && this.$_drillUpButton$.$setResources$($resources$$35$$);
  this.$_resetButton$ && this.$_resetButton$.$setResources$($resources$$35$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$1$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0);
    this.$_resetButton$ = D.$DvtButtonLAFUtils$$.$createResetButton$(this.$_context$, this.$_resetCallback$, this.$_panZoomCanvas$, this.$getResources$(), this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    $contentSprite$$1$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = D.$DvtButtonLAFUtils$$.$createDrillDownButton$(this.$_context$, this.$_drillDownCallback$, this.$_panZoomCanvas$, this.$getResources$(), this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = D.$DvtButtonLAFUtils$$.$createDrillUpButton$(this.$_context$, this.$_drillUpCallback$, this.$_panZoomCanvas$, this.$getResources$(), this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillUpButton$)
  }
};
D.$DvtThematicMapControlPanelResources$$ = function $$DvtThematicMapControlPanelResources$$$($parent$$75$$) {
  this.Init($parent$$75$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanelResources$$, D.$DvtPanZoomControlPanelResources$$, "DvtThematicMapControlPanelResources");
D.$DvtThematicMapControlPanelResources$$.prototype.Init = function $$DvtThematicMapControlPanelResources$$$$Init$($parent$$76$$) {
  D.$DvtThematicMapControlPanelResources$$.$superclass$.Init.call(this, $parent$$76$$);
  $parent$$76$$ ? (this.$_controlPanelDrillUpTooltip$ = $parent$$76$$.$getAttr$("pdu"), this.$_controlPanelDrillDownTooltip$ = $parent$$76$$.$getAttr$("pdd"), this.$_controlPanelResetTooltip$ = $parent$$76$$.$getAttr$("res")) : (this.$_controlPanelDrillUpTooltip$ = "Show Control Panel (/)", this.$_controlPanelDrillDownTooltip$ = "Hide (/)", this.$_controlPanelResetTooltip$ = "Zoom and Center (Ctrl+Alt+0)")
};
});