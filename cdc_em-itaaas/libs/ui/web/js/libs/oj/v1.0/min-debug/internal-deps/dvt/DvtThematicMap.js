define(['./DvtToolkit', './DvtPanZoomCanvas', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAmxThematicMap$$ = function $$DvtAmxThematicMap$$$($context$$4$$, $callback$$23$$, $callbackObj$$) {
  this.Init($context$$4$$, $callback$$23$$, $callbackObj$$)
};
(0,D.$goog$exportSymbol$$)("DvtAmxThematicMap", D.$DvtAmxThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAmxThematicMap$$, D.$DvtContainer$$, "DvtAmxThematicMap");
D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$ = 10;
D.$DvtAmxThematicMap$$.prototype.Init = function $$DvtAmxThematicMap$$$$Init$($context$$5$$, $callback$$24$$, $callbackObj$$1$$) {
  D.$DvtAmxThematicMap$$.$superclass$.Init.call(this, $context$$5$$);
  this.$_tmap$ = new D.$DvtThematicMap$$($context$$5$$, $callback$$24$$, $callbackObj$$1$$);
  this.$_tmapContainer$ = new D.$DvtContainer$$($context$$5$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtAmxThematicMap$$.newInstance = function $$DvtAmxThematicMap$$$newInstance$($context$$6$$, $callback$$25$$, $callbackObj$$2$$) {
  return new D.$DvtAmxThematicMap$$($context$$6$$, $callback$$25$$, $callbackObj$$2$$)
};
D.$DvtAmxThematicMap$$.newInstance = D.$DvtAmxThematicMap$$.newInstance;
D.$DvtAmxThematicMap$$.prototype.$render$ = function $$DvtAmxThematicMap$$$$$render$$($options$$4$$, $availSpace_width$$12$$, $height$$11$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$4$$);
  this.$_width$ = $availSpace_width$$12$$;
  this.$_height$ = $height$$11$$;
  $availSpace_width$$12$$ = new D.$DvtRectangle$$(0, 0, $availSpace_width$$12$$, $height$$11$$);
  this.$_renderLegend$(this, $availSpace_width$$12$$);
  this.$_tmap$.$render$($options$$4$$, $availSpace_width$$12$$.$w$, $availSpace_width$$12$$.$h$)
};
D.$DvtAmxThematicMap$$.prototype.render = D.$DvtAmxThematicMap$$.prototype.$render$;
D.$DvtAmxThematicMap$$.prototype.$_renderLegend$ = function $$DvtAmxThematicMap$$$$$_renderLegend$$($container$$, $availSpace$$1$$) {
  this.$_legend$ && ($container$$.removeChild(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  var $availLegendSpace$$ = new D.$DvtRectangle$$(D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$1$$.$w$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$1$$.$h$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$), $gap_options$$5$$ = this.$Options$, $position_rendered$$ = $gap_options$$5$$.legend.rendered, $actualSize_isHoriz_isRTL_scrolling$$ = $gap_options$$5$$.legend.scrolling, $legendOptions$$ = D.$DvtJSONUtils$$.clone($gap_options$$5$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$);
  if($position_rendered$$ && !($legendOptions$$.$sections$ && 0 == $legendOptions$$.$sections$.length)) {
    $position_rendered$$ = $gap_options$$5$$.legend.position;
    delete $legendOptions$$.position;
    $legendOptions$$.layout.gapRatio = this.$getGapRatio$();
    $legendOptions$$.hideAndShowBehavior = "none";
    $legendOptions$$.rolloverBehavior = "none";
    $legendOptions$$.scrolling = $gap_options$$5$$.legend.scrolling;
    var $legend$$ = (0,D.$DvtLegend$newInstance$$)(this.$_tmap$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
    this.$_tmap$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$.setId(this.$_tmap$.getId() + "legend");
    $container$$.$addChild$($legend$$);
    "auto" == $position_rendered$$ && "asNeeded" !== $actualSize_isHoriz_isRTL_scrolling$$ ? $position_rendered$$ = "bottom" : "auto" == $position_rendered$$ && "asNeeded" == $actualSize_isHoriz_isRTL_scrolling$$ && ($position_rendered$$ = "end");
    $actualSize_isHoriz_isRTL_scrolling$$ = D.$DvtAgent$$.$isRightToLeft$($container$$.$_context$);
    "start" == $position_rendered$$ ? $position_rendered$$ = $actualSize_isHoriz_isRTL_scrolling$$ ? "right" : "left" : "end" == $position_rendered$$ && ($position_rendered$$ = $actualSize_isHoriz_isRTL_scrolling$$ ? "left" : "right");
    $legendOptions$$.orientation = "left" == $position_rendered$$ || "right" == $position_rendered$$ ? "vertical" : "horizontal";
    $actualSize_isHoriz_isRTL_scrolling$$ = "top" == $position_rendered$$ || "bottom" == $position_rendered$$;
    $actualSize_isHoriz_isRTL_scrolling$$ = $legend$$.$getPreferredSize$($legendOptions$$, $actualSize_isHoriz_isRTL_scrolling$$ ? $availLegendSpace$$.$w$ : $gap_options$$5$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize_isHoriz_isRTL_scrolling$$ ? $gap_options$$5$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize_isHoriz_isRTL_scrolling$$.$w$ && 0 < $actualSize_isHoriz_isRTL_scrolling$$.$h$) {
      switch($legend$$.$render$($legendOptions$$, $actualSize_isHoriz_isRTL_scrolling$$.$w$, $actualSize_isHoriz_isRTL_scrolling$$.$h$), this.$_legend$ = $legend$$, $gap_options$$5$$ = window.Math.ceil($gap_options$$5$$.layout.legendGap * this.$getGapRatio$()), (0,D.$DvtLayoutUtils$position$$)($availLegendSpace$$, $position_rendered$$, $legend$$, $actualSize_isHoriz_isRTL_scrolling$$.$w$, $actualSize_isHoriz_isRTL_scrolling$$.$h$, $gap_options$$5$$), $position_rendered$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize_isHoriz_isRTL_scrolling$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$1$$.$h$ -= $actualSize_isHoriz_isRTL_scrolling$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize_isHoriz_isRTL_scrolling$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$1$$.$w$ -= $actualSize_isHoriz_isRTL_scrolling$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$
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
    for(var $i$$10$$ = 0;$i$$10$$ < $data$$21$$.legend.sections.length;$i$$10$$++) {
      var $dataSection$$ = $data$$21$$.legend.sections[$i$$10$$];
      $dataSection$$ && $legendOptions$$1$$.sections.push({title:$dataSection$$.title, items:$dataSection$$.items, sections:$dataSection$$.sections})
    }
  }
  return $legendOptions$$1$$
};
D.$DvtThematicMap$$ = function $$DvtThematicMap$$$($context$$7$$, $callback$$26$$, $callbackObj$$3$$) {
  this.Init($context$$7$$, $callback$$26$$, $callbackObj$$3$$)
};
(0,D.$goog$exportSymbol$$)("DvtThematicMap", D.$DvtThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMap$$, D.$DvtAbstractPanZoomComponent$$, "DvtThematicMap");
D.$DvtThematicMap$$.prototype.Init = function $$DvtThematicMap$$$$Init$($context$$8$$, $callback$$27$$, $callbackObj$$4$$) {
  D.$DvtThematicMap$$.$superclass$.Init.call(this, $context$$8$$);
  this.$_callback$ = $callback$$27$$;
  this.$_callbackObj$ = $callbackObj$$4$$;
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
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$;
  this.$Bundle$ = new D.$DvtSubcomponentBundle$$
};
D.$DvtThematicMap$$.newInstance = function $$DvtThematicMap$$$newInstance$($context$$9$$, $callback$$28$$, $callbackObj$$5$$) {
  return new D.$DvtThematicMap$$($context$$9$$, $callback$$28$$, $callbackObj$$5$$)
};
D.$DvtThematicMap$$.prototype.$SetOptions$ = function $$DvtThematicMap$$$$$SetOptions$$($options$$6$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$6$$);
  D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  this.$Options$.skin || (this.$Options$.skin = "alta")
};
D.$DvtThematicMap$$.prototype.$render$ = function $$DvtThematicMap$$$$$render$$($options$$7$$, $width$$13$$, $height$$12$$) {
  $options$$7$$ && "object" == typeof $options$$7$$ && this.$SetOptions$($options$$7$$);
  D.$DvtThematicMap$$.$superclass$.$render$.call(this, $options$$7$$, $width$$13$$, $height$$12$$)
};
D.$DvtThematicMap$$.prototype.render = D.$DvtThematicMap$$.prototype.$render$;
D.$JSCompiler_StaticMethods_getLayer$$ = function $$JSCompiler_StaticMethods_getLayer$$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$) {
  for(var $i$$11$$ = 0;$i$$11$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$11$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$11$$].$LayerName$ == $layerName$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$11$$]
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
D.$JSCompiler_prototypeAlias$$.$loadXml$ = function $$JSCompiler_prototypeAlias$$$$loadXml$$($xmlString$$2$$, $eventType$$4$$, $paramKeys$$, $paramValues$$) {
  "object" == typeof $xmlString$$2$$ && this.$Options$ ? (new D.$DvtThematicMapJsonParser$$(this)).parse(this.$Options$) : $xmlString$$2$$ == D.$JSCompiler_alias_NULL$$ || 0 == $xmlString$$2$$.length || D.$DvtThematicMap$$.$superclass$.$loadXml$.call(this, $xmlString$$2$$, $eventType$$4$$, $paramKeys$$, $paramValues$$)
};
D.$JSCompiler_prototypeAlias$$.$LoadXmlInitial$ = function $$JSCompiler_prototypeAlias$$$$LoadXmlInitial$$($eventType$$5$$, $rootXmlNode$$) {
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
D.$JSCompiler_prototypeAlias$$.$HandleLegendResize$ = function $$JSCompiler_prototypeAlias$$$$HandleLegendResize$$($event$$4_x$$59$$) {
  D.$DvtAgent$$.$isRightToLeft$(this.$_context$) || ($event$$4_x$$59$$ = this.$_width$ - 5 - $event$$4_x$$59$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$4_x$$59$$))
};
D.$JSCompiler_prototypeAlias$$.$_renderLegend$ = function $$JSCompiler_prototypeAlias$$$$_renderLegend$$() {
  if(this.$_legendXml$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$ = "true" == this.$_legendXml$.$getAttr$("disclosed"), $isFixed$$ = "fixed" == this.$_legendXml$.$getAttr$("display") || D.$DvtAgent$$.$isEnvironmentBatik$();
    if(!$isFixed$$ || $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$) {
      var $expandTooltip_maxWidth$$1_overState$$ = this.$_legendXml$.$getAttr$("maxWidth"), $collapseTooltip_downState_maxHeight$$1_percentIndex$$ = $expandTooltip_maxWidth$$1_overState$$.indexOf("%"), $expandTooltip_maxWidth$$1_overState$$ = -1 != $collapseTooltip_downState_maxHeight$$1_percentIndex$$ ? (0,window.parseFloat)($expandTooltip_maxWidth$$1_overState$$.substring(0, $collapseTooltip_downState_maxHeight$$1_percentIndex$$)) / 100 * this.$_width$ : (0,window.parseFloat)($expandTooltip_maxWidth$$1_overState$$), 
      $collapseTooltip_downState_maxHeight$$1_percentIndex$$ = this.$_height$ - 10;
      if("alta" == this.$_skinName$) {
        this.$_legendPanel$ = new D.$DvtPanelDrawer$$(this.$_context$, D.$JSCompiler_alias_NULL$$, this, "pd"), this.$_legendPanel$.$addEvtListener$("dvtPanelDrawerEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setMaxWidth$($expandTooltip_maxWidth$$1_overState$$), this.$_legendPanel$.$setMaxHeight$($collapseTooltip_downState_maxHeight$$1_percentIndex$$), this.$_legendPanel$.$_isFixed$ = $isFixed$$, D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? (this.$_legendPanel$.$_discloseDirection$ = 
        "right", this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.$_width$)
      }else {
        this.$_legendPanel$ = new D.$DvtCollapsiblePanel$$(this.$_context$, $expandTooltip_maxWidth$$1_overState$$, $collapseTooltip_downState_maxHeight$$1_percentIndex$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$getControlPanelStyleMap$(), $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$, 
        $isFixed$$);
        this.$_legendPanel$.$addEvtListener$("dvtCollapsiblePanelEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this);
        this.$_legendPanel$.$addEvtListener$("dvtResizeEvent", this.$HandleLegendResize$, D.$JSCompiler_alias_FALSE$$, this);
        var $expandTooltip_maxWidth$$1_overState$$ = this.$_legendXml$.$getAttr$("expandTooltip"), $collapseTooltip_downState_maxHeight$$1_percentIndex$$ = this.$_legendXml$.$getAttr$("collapseTooltip"), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? "col_northwest" : "col_northeast", $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$ = 
        this.$_legendPanel$;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$.$_expandTooltip$ = $expandTooltip_maxWidth$$1_overState$$;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$.$_collapseTooltip$ = $collapseTooltip_downState_maxHeight$$1_percentIndex$$
      }
      this.$_legend$ = new D.DvtCommonLegend(this.$_context$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$_legendStyleMap$);
      this.$_legend$.$setXML$(this.$_legendXml$);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      this.$_legend$.$render$();
      var $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$;
      if("alta" == this.$_skinName$) {
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$ = this.$_legend$.$getDimensions$();
        (0,D.$JSCompiler_StaticMethods_setMaxContainerHeight$$)(this.$_legendPanel$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$.$h$);
        this.removeChild(this.$_legend$);
        var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendEna, 0, 0, 24, 24), $expandTooltip_maxWidth$$1_overState$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendOvr, 0, 0, 24, 24), $collapseTooltip_downState_maxHeight$$1_percentIndex$$ = new D.$DvtImage$$(this.$_context$, 
        (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendDwn, 0, 0, 24, 24), $tip$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "LEGEND");
        (0,D.$JSCompiler_StaticMethods_addPanel$$)(this.$_legendPanel$, this.$_legend$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$, $expandTooltip_maxWidth$$1_overState$$, $collapseTooltip_downState_maxHeight$$1_percentIndex$$, $tip$$, "legend");
        this.$_legendPanel$.$renderComponent$();
        $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$ && this.$_legendPanel$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$ = this.$_legendPanel$, $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$ = this.$_legend$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_scrollableContainer$.$addChild$($disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$), $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$.$addEvtListener$("dvtResizeEvent", 
        $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$HandleResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$ = $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_scrollableContainer$.$getDimensions$(), $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$ = 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$.$w$ + 10, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$.$h$ + 10, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_height$ = 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_width$ = $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_background$ ? ($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$, 
        $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$)), $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$ = "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseDir$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonFrame$ && $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$ && $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_width$)) : ($disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_context$, 
        (0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$, $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$)), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$ = 
        $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_styleMap$.borderAlpha, $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$.$setSolidFill$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_bgColor$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_bgAlpha$), $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$.$setSolidStroke$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_borderColor$, 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_588_alpha$$inline_8727_dim_dims$$inline_594_height$$inline_596_legendCollapseDir_upState$$), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_background$ = $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$addChildAt$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_background$, 
        0), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_isFixed$ || ($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonFrame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_context$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonFrame$.$setAlpha$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_styleMap$.borderAlpha), 
        $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonFrame$), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseExpandButton$ = $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_context$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonImages$, 
        25, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_context$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonFrame$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseExpandButton$), 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseDir$ || ($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonFrame$.$setTranslateY$(25), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonFrame$.$setRotation$(-window.Math.PI)), D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_context$) && 
        $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_width$), D.$DvtAgent$$.$isTouchDevice$() ? $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$) : 
        ($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$OnButtonHoverOver$, 
        D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$)))), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$_collapse$ && 
        (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? 5 : this.$_width$ - 5 - $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$w$ - 
        $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.x, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_legendPanel$, $disclosed_object$$inline_593_rect$$inline_8726_west$$inline_597_width$$inline_595_x$$60$$, 5), $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$w$ += 5
      }
      if(this.$_isFixedLegend$ = $isFixed$$) {
        $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$ || ($JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $JSCompiler_StaticMethods_addContent$self$$inline_592_legendPanelDim$$.$w$
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
    var $bounds$$ = new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$_animationOnDisplay$, this.$_pzc$, $bounds$$, this.$_animationDuration$))
    }else {
      var $anim$$ = D.$JSCompiler_alias_NULL$$;
      if(this.$_bBaseMapChanged$ && !this.$_bRenderNullXml$) {
        $anim$$ = this.$_animationOnMapChange$
      }else {
        if(this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$ = this.$_topLayer$.$getAnimation$(), !$anim$$)) {
          var $dataLayers$$ = this.$_topLayer$.$DataLayers$, $i$$12$$;
          for($i$$12$$ in $dataLayers$$) {
            if($dataLayers$$[$i$$12$$].$getAnimation$()) {
              $anim$$ = $dataLayers$$[$i$$12$$].$getAnimation$();
              break
            }
          }
        }
      }
      $anim$$ && D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$) ? (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, $anim$$, this.$_oldPzc$, this.$_pzc$, $bounds$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$) : this.$_pzc$.$_contentPane$.removeChild(this.$_cpContainer$)
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
  var $fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = D.$JSCompiler_alias_FALSE$$;
  for(var $i$$13_mapDim$$inline_8733$$ = 0;$i$$13_mapDim$$inline_8733$$ < this.$_layers$.length;$i$$13_mapDim$$inline_8733$$++) {
    var $layer$$2_pzcDim$$inline_8734$$ = this.$_layers$[$i$$13_mapDim$$inline_8733$$];
    if(!this.$_topLayerRendered$ && $layer$$2_pzcDim$$inline_8734$$ instanceof D.$DvtMapAreaLayer$$ || !($layer$$2_pzcDim$$inline_8734$$ instanceof D.$DvtMapAreaLayer$$)) {
      $layer$$2_pzcDim$$inline_8734$$.$render$($fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$), !this.$_topLayerRendered$ && $layer$$2_pzcDim$$inline_8734$$ instanceof D.$DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = D.$JSCompiler_alias_TRUE$$, this.$_topLayer$ = $layer$$2_pzcDim$$inline_8734$$)
    }
  }
  this.$_topLayer$ && ($fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 0 == $fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$.length && ($fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), this.$_keyboardHandler$ && ($fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$ = 
  $fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, $fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$), this.$_pzc$.$setMinZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$setMaxZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$_bZoomingEnabled$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$, 
  !this.$_bBaseMapChanged$ && !this.$_bRenderNullXml$ && this.$_initialZoom$ != D.$JSCompiler_alias_NULL$$ ? (this.$_pzc$.$zoomTo$(this.$_initialZoom$), this.$_pzc$.$panTo$(this.$_initialCenterX$, this.$_initialCenterY$)) : this.$_initialZooming$ ? (0,D.$JSCompiler_StaticMethods__zoomData$$)(this) : this.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, this.$_topLayer$.$getLayerDim$()), (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)(this), $fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$ = 
  this.$_pzc$.$_zoomToFitPadding$, $i$$13_mapDim$$inline_8733$$ = this.$_topLayer$.$getLayerDim$(), $layer$$2_pzcDim$$inline_8734$$ = this.$_pzc$.$getSize$(), $layer$$2_pzcDim$$inline_8734$$.$w$ = this.$_isFixedLegend$ ? $layer$$2_pzcDim$$inline_8734$$.$w$ - this.$_legendWidth$ : $layer$$2_pzcDim$$inline_8734$$.$w$, $fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$ = window.Math.min(($layer$$2_pzcDim$$inline_8734$$.$w$ - 2 * $fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$) / 
  $i$$13_mapDim$$inline_8733$$.$w$, ($layer$$2_pzcDim$$inline_8734$$.$h$ - 2 * $fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$) / $i$$13_mapDim$$inline_8733$$.$h$), this.$_pzc$.$setMinZoom$($fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$), this.$_pzc$.$setMaxZoom$($fittedZoom$$inline_609_navigable$$inline_600_navigables_pzcMatrix_zoomPadding$$inline_8732$$ * (this.$_zooming$ ? this.$_maxZoomFactor$ : 1)), 
  this.$_pzc$.$_bZoomingEnabled$ = this.$_zooming$, this.$_pzc$.$_bPanningEnabled$ = this.$_panning$)
};
D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$ = function $$JSCompiler_StaticMethods_OnUpdateLayerEnd$$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) {
  (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZooming$ ? (0,D.$JSCompiler_StaticMethods__zoomData$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) : $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZoom$ == D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$getLayerDim$())
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
D.$DvtThematicMap$$.prototype.$HandleControlPanelEvent$ = function $$DvtThematicMap$$$$$HandleControlPanelEvent$$($event$$5$$) {
  D.$DvtThematicMap$$.$superclass$.$HandleControlPanelEvent$.call(this, $event$$5$$);
  var $spEvent$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$, "controlPanelBehavior", "show" == $event$$5$$.$getSubType$() ? "initExpanded" : "initCollapsed");
  this.$__dispatchEvent$($spEvent$$)
};
D.$DvtThematicMap$$.prototype.$HandleLegendEvent$ = function $$DvtThematicMap$$$$$HandleLegendEvent$$($event$$6$$) {
  var $spEvent$$1$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$1$$, D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$, "show" == $event$$6$$.$getSubType$());
  this.$__dispatchEvent$($spEvent$$1$$)
};
D.$JSCompiler_StaticMethods__updateAnimator$$ = function $$JSCompiler_StaticMethods__updateAnimator$$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator_event$$7$$, $bRecenterObjs_transMat$$) {
  if($animator_event$$7$$ = $animator_event$$7$$.$_animator$) {
    var $contentPane$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$1$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator_event$$7$$, $contentPane$$, $contentPane$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator_event$$7$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$1$$));
    $bRecenterObjs_transMat$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $mat$$1$$.$_tx$, $mat$$1$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator_event$$7$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator_event$$7$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandleZoomEvent$ = function $$DvtThematicMap$$$$$HandleZoomEvent$$($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$) {
  switch($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panning$) {
        var $i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$ = $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$_newZoom$;
        $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$ = this.$_pzc$.$getSize$();
        $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$ = new D.$DvtRectangle$$($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$, $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$, $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$.$w$ - 2 * $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$, $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$.$h$ - 2 * $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$);
        var $legendAdjust$$inline_651_mapDim$$inline_646$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_652_zoomedMapX$$inline_647$$ = $legendAdjust$$inline_651_mapDim$$inline_646$$.x * $i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$, $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$ = $legendAdjust$$inline_651_mapDim$$inline_646$$.y * $i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$, $zoomedMapW$$inline_649$$ = $legendAdjust$$inline_651_mapDim$$inline_646$$.$w$ * $i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$, 
        $i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$ = $legendAdjust$$inline_651_mapDim$$inline_646$$.$h$ * $i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$;
        $zoomedMapW$$inline_649$$ > $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$w$ ? (this.$_pzc$.$_minPanX$ = $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.x + $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$w$ - ($minMaxX$$inline_652_zoomedMapX$$inline_647$$ + $zoomedMapW$$inline_649$$), this.$_pzc$.$_maxPanX$ = $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.x - $minMaxX$$inline_652_zoomedMapX$$inline_647$$) : 
        ($legendAdjust$$inline_651_mapDim$$inline_646$$ = 0, this.$_isFixedLegend$ && (D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? $legendAdjust$$inline_651_mapDim$$inline_646$$ = this.$_isZoomingToFit$ ? 2 * -this.$_legendWidth$ : -this.$_legendWidth$ : this.$_isZoomingToFit$ || ($legendAdjust$$inline_651_mapDim$$inline_646$$ = this.$_legendWidth$)), $minMaxX$$inline_652_zoomedMapX$$inline_647$$ = ($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.x + $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$w$ - 
        $legendAdjust$$inline_651_mapDim$$inline_646$$) / 2 - ($minMaxX$$inline_652_zoomedMapX$$inline_647$$ + $zoomedMapW$$inline_649$$ / 2), this.$_pzc$.$_minPanX$ = $minMaxX$$inline_652_zoomedMapX$$inline_647$$, this.$_pzc$.$_maxPanX$ = $minMaxX$$inline_652_zoomedMapX$$inline_647$$);
        $i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$ > $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$h$ ? (this.$_pzc$.$_minPanY$ = $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.y + $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$h$ - ($pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$ + $i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$), this.$_pzc$.$_maxPanY$ = $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.y - 
        $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$) : ($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$ = ($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.y + $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$h$) / 2 - ($pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$ + $i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$ / 2), this.$_pzc$.$_minPanY$ = $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$, 
        this.$_pzc$.$_maxPanY$ = $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$)
      }
      break;
    case "zooming":
    ;
    case "elasticAnimBegin":
      (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomed":
      if($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$_newZoom$ != D.$JSCompiler_alias_NULL$$) {
        $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$, "panX", $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$.$_tx$);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$, "panY", $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$.$_ty$);
        $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
        D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$);
        (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$);
        for($i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$ = 0;$i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$ < this.$_layers$.length;$i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$++) {
          this.$_layers$[$i$$14_zoom$$inline_642_zoomedMapH$$inline_650$$].$HandleZoomEvent$($event$$8_minMaxY$$inline_653_padding$$inline_643_viewportDim$$inline_645$$, $pzcDim$$inline_644_pzcMatrix$$2_zoomedMapY$$inline_648$$)
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
D.$DvtThematicMap$$.prototype.$HandlePanEvent$ = function $$DvtThematicMap$$$$$HandlePanEvent$$($event$$9_i$$15_stroke$$) {
  var $subType$$ = $event$$9_i$$15_stroke$$.$getSubType$();
  if("elasticAnimBegin" == $subType$$) {
    (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$9_i$$15_stroke$$, D.$JSCompiler_alias_FALSE$$)
  }else {
    if("panned" == $subType$$ && $event$$9_i$$15_stroke$$.$_newX$ != D.$JSCompiler_alias_NULL$$) {
      var $pzcMatrix$$3_styleMap$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$9_i$$15_stroke$$, "zoom", this.$_pzc$.$getZoom$());
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$9_i$$15_stroke$$, "panX", $pzcMatrix$$3_styleMap$$.$_tx$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$9_i$$15_stroke$$, "panY", $pzcMatrix$$3_styleMap$$.$_ty$);
      $event$$9_i$$15_stroke$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
      D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$9_i$$15_stroke$$);
      (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcMatrix$$3_styleMap$$);
      for($event$$9_i$$15_stroke$$ = 0;$event$$9_i$$15_stroke$$ < this.$_layers$.length;$event$$9_i$$15_stroke$$++) {
        this.$_layers$[$event$$9_i$$15_stroke$$].$HandlePanEvent$($pzcMatrix$$3_styleMap$$)
      }
    }
  }
  this.$_legendPanel$ && ("alta" == this.$_skinName$ ? "dragPanBegin" === $subType$$ ? this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$) : "dragPanEnd" === $subType$$ && this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$) : ($pzcMatrix$$3_styleMap$$ = this.$getControlPanelStyleMap$(), $event$$9_i$$15_stroke$$ = this.$_legendPanel$.$_background$.$getStroke$().clone(), "dragPanBegin" === $subType$$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$3_styleMap$$.backgroundDragAlpha), 
  $event$$9_i$$15_stroke$$.$setAlpha$($pzcMatrix$$3_styleMap$$.borderDragAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$9_i$$15_stroke$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$3_styleMap$$.borderDragAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)) : "dragPanEnd" === $subType$$ && (this.$_legend$.$setAlpha$(1), $event$$9_i$$15_stroke$$.$setAlpha$($pzcMatrix$$3_styleMap$$.borderAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$9_i$$15_stroke$$), 
  this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$3_styleMap$$.borderAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$))))
};
D.$DvtThematicMap$$.prototype.$CreatePanZoomCanvas$ = function $$DvtThematicMap$$$$$CreatePanZoomCanvas$$($ww$$1$$, $hh$$1$$) {
  if("none" == this.$_drillMode$ && (7 == this.$_featuresOff$ || !this.$_zooming$ && "alta" == this.$_skinName$)) {
    this.$_controlPanelBehavior$ = "hidden"
  }
  this.$_pzc$ = D.$DvtThematicMap$$.$superclass$.$CreatePanZoomCanvas$.call(this, $ww$$1$$, $hh$$1$$);
  if("hidden" != this.$_controlPanelBehavior$ && "none" != this.$_drillMode$) {
    var $callbacks$$3_controlPanel$$ = [D.$DvtObj$$.$createCallback$(this, this.$drillUp$), D.$DvtObj$$.$createCallback$(this, this.$drillDown$), D.$DvtObj$$.$createCallback$(this, this.$resetMap$)], $callbacks$$3_controlPanel$$ = new D.$DvtThematicMapControlPanel$$(this.$_context$, this.$_drillMode$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), $callbacks$$3_controlPanel$$, this.$_pzc$, this.$Bundle$, this.$_displayedControls$, this);
    (0,D.$JSCompiler_StaticMethods_setControlPanel$$)(this.$_pzc$, $callbacks$$3_controlPanel$$)
  }
  return this.$_eventHandler$.$_pzc$ = this.$_pzc$
};
D.$JSCompiler_StaticMethods__processInitialDrilled$$ = function $$JSCompiler_StaticMethods__processInitialDrilled$$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_TRUE$$;
  for(var $i$$16$$ = 0;$i$$16$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$16$$++) {
    var $layerName$$2$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$16$$].$LayerName$;
    $layerName$$2$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$2$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$2$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$2$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$2$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$resetMap$ = function $$DvtThematicMap$$$$$resetMap$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $animator$$inline_662_removeObjs$$ = [], $addObjs$$ = [], $i$$17_j$$3$$ = this.$_layers$.length - 1;-1 < $i$$17_j$$3$$;$i$$17_j$$3$$--) {
    this.$_layers$[$i$$17_j$$3$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$17_j$$3$$].reset($addObjs$$) : this.$_layers$[$i$$17_j$$3$$].reset($animator$$inline_662_removeObjs$$)
  }
  for($i$$17_j$$3$$ = 0;$i$$17_j$$3$$ < $animator$$inline_662_removeObjs$$.length;$i$$17_j$$3$$++) {
    if($animator$$inline_662_removeObjs$$[$i$$17_j$$3$$]) {
      var $parent$$2$$ = $animator$$inline_662_removeObjs$$[$i$$17_j$$3$$].getParent();
      $parent$$2$$ && $parent$$2$$.removeChild($animator$$inline_662_removeObjs$$[$i$$17_j$$3$$])
    }
  }
  for($i$$17_j$$3$$ = 0;$i$$17_j$$3$$ < $addObjs$$.length;$i$$17_j$$3$$++) {
    $addObjs$$[$i$$17_j$$3$$] && $addObjs$$[$i$$17_j$$3$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_662_removeObjs$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_662_removeObjs$$);
  $animator$$inline_662_removeObjs$$.play();
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ((0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods__zoomData$$ = function $$JSCompiler_StaticMethods__zoomData$$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$1$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$2$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$2$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$2$$.$_d$;
    $pointBounds$$.x /= $mat$$2$$.$_a$;
    $pointBounds$$.y /= $mat$$2$$.$_d$
  }
  $areaBounds_bounds$$1$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($areaBounds_bounds$$1$$, $pointBounds$$);
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__zoomData$self$$);
  D.$DvtAgent$$.$isEnvironmentBrowser$() && ($JSCompiler_StaticMethods__zoomData$self$$.$_animation$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__zoomData$self$$.$_context$, 0.3));
  0 < $areaBounds_bounds$$1$$.$w$ && 0 < $areaBounds_bounds$$1$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $areaBounds_bounds$$1$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $JSCompiler_StaticMethods__zoomData$self$$.$_animation$ && $JSCompiler_StaticMethods__zoomData$self$$.$_animation$.play()
};
D.$DvtThematicMap$$.prototype.$_zoomToFitBounds$ = function $$DvtThematicMap$$$$$_zoomToFitBounds$$($bounds$$2$$) {
  var $animator$$1$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$1$$, $bounds$$2$$);
  $animator$$1$$.play()
};
D.$JSCompiler_StaticMethods_fitSelectedRegions$$ = function $$JSCompiler_StaticMethods_fitSelectedRegions$$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer_selection_selectionHandler$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer_selection_selectionHandler$$ && ($dataLayer_selection_selectionHandler$$ = $dataLayer_selection_selectionHandler$$.$_selectionHandler$)) {
      for(var $dataLayer_selection_selectionHandler$$ = $dataLayer_selection_selectionHandler$$.getSelection(), $i$$18$$ = 0;$i$$18$$ < $dataLayer_selection_selectionHandler$$.length;$i$$18$$++) {
        $dataLayer_selection_selectionHandler$$[$i$$18$$] = $dataLayer_selection_selectionHandler$$[$i$$18$$].$getDisplayable$()
      }
      if(0 < $dataLayer_selection_selectionHandler$$.length) {
        for(var $bounds$$3$$ = $dataLayer_selection_selectionHandler$$[0].$getDimensions$(), $i$$18$$ = 1;$i$$18$$ < $dataLayer_selection_selectionHandler$$.length;$i$$18$$++) {
          $bounds$$3$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$3$$, $dataLayer_selection_selectionHandler$$[$i$$18$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$3$$)
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
    for(var $i$$19$$ = 0;$i$$19$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$19$$++) {
      var $dataLayers$$1$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$19$$].$DataLayers$, $id$$2$$;
      for($id$$2$$ in $dataLayers$$1$$) {
        $disclosed$$1$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$19$$].$LayerName$ ? $disclosed$$1$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$)($dataLayers$$1$$[$id$$2$$])) : $disclosed$$1$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$)($dataLayers$$1$$[$id$$2$$]))
      }
    }
  }
  return $disclosed$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableObjects$$ = function $$JSCompiler_StaticMethods_getNavigableObjects$$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$20$$ = 0;$i$$20$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$20$$++) {
      var $dataLayers$$2$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$20$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$20$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$20$$] instanceof D.$DvtMapAreaLayer$$)) {
        for(var $id$$3$$ in $dataLayers$$2$$) {
          $navigable$$ = $navigable$$.concat($dataLayers$$2$$[$id$$3$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$
};
D.$DvtThematicMap$$.prototype.$_setCenteredObjsMatrix$ = function $$DvtThematicMap$$$$$_setCenteredObjsMatrix$$($matrix$$3$$) {
  this.$_currentAnimMatrix$ = $matrix$$3$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this), $i$$21_j$$4$$ = 0;$i$$21_j$$4$$ < $numLabelLayers_objs$$.length;$i$$21_j$$4$$++) {
      $numLabelLayers_objs$$[$i$$21_j$$4$$].$HandleZoomEvent$($matrix$$3$$)
    }
    $numLabelLayers_objs$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$21_j$$4$$ = 0;$i$$21_j$$4$$ < $numLabelLayers_objs$$;$i$$21_j$$4$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$21_j$$4$$), $numLabels$$ = $labelLayer$$.$getNumChildren$(), $k$$ = 0;$k$$ < $numLabels$$;$k$$++) {
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
    for(var $newSelectedAreas$$ = [], $i$$22$$ = 0;$i$$22$$ < $selectedAreas$$.length;$i$$22$$++) {
      var $parentArea$$ = $selectedAreas$$[$i$$22$$], $JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$ = (0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$, $parentArea$$);
      $newSelectedAreas$$.push($JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$[0]);
      for(var $areaName$$inline_665_j$$5$$ = 0;$areaName$$inline_665_j$$5$$ < $JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.length;$areaName$$inline_665_j$$5$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$[$areaName$$inline_665_j$$5$$]] = $selectedAreas$$[$i$$22$$]
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$, $fadeInObjs$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$ = $parentLayer$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_665_j$$5$$ = $parentArea$$, $fadeOutObjs$$inline_666$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_667_label$$inline_668_leaderLine$$inline_669$$ = 0;$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$ < $JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.$_areaObjs$.length;$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$].$AreaId$ == $areaName$$inline_665_j$$5$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$].$setDrilled$(D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.$_drilled$.push($areaName$$inline_665_j$$5$$);
            $fadeOutObjs$$inline_666$$.push($JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$].$getDisplayable$());
            if($i$$inline_667_label$$inline_668_leaderLine$$inline_669$$ = $JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$].$getLabel$()) {
              $fadeOutObjs$$inline_666$$.push($i$$inline_667_label$$inline_668_leaderLine$$inline_669$$), ($i$$inline_667_label$$inline_668_leaderLine$$inline_669$$ = $i$$inline_667_label$$inline_668_leaderLine$$inline_669$$.$_leaderLine$) && $fadeOutObjs$$inline_666$$.push($i$$inline_667_label$$inline_668_leaderLine$$inline_669$$)
            }
            break
          }
        }
        for($i$$inline_667_label$$inline_668_leaderLine$$inline_669$$ = 0;$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$ < $JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.$_dataObjs$.length;$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$].$AreaId$ == $areaName$$inline_665_j$$5$$) {
            $fadeOutObjs$$inline_666$$.push($JSCompiler_StaticMethods_drill$self$$inline_664_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_667_label$$inline_668_leaderLine$$inline_669$$].$getDisplayable$());
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
  for(var $childLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$1$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$23$$ = 0;$i$$23$$ < $selectedAreas$$1$$.length;$i$$23$$++) {
    var $index$$45_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$1$$[$i$$23$$]];
    $newSelectedAreas$$1$$.push($index$$45_parentArea$$1$$);
    if(-1 != D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$45_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$1$$, $index$$45_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_671$$ = $parentLayer$$1$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$1$$.$LayerName$]), $areaName$$inline_672$$ = $index$$45_parentArea$$1$$, $fadeInObjs$$inline_673$$ = $fadeInObjs$$1$$, $i$$inline_674_label$$inline_676$$ = 0;$i$$inline_674_label$$inline_676$$ < $JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_areaObjs$.length;$i$$inline_674_label$$inline_676$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_areaObjs$[$i$$inline_674_label$$inline_676$$].$AreaId$ == $areaName$$inline_672$$) {
          $JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_drilled$.splice(D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_drilled$, $areaName$$inline_672$$), 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_areaObjs$[$i$$inline_674_label$$inline_676$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$inline_675$$ = $JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_areaObjs$[$i$$inline_674_label$$inline_676$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_dataAreaLayer$.$addChild$($displayable$$inline_675$$);
          $fadeInObjs$$inline_673$$.push($displayable$$inline_675$$);
          if($i$$inline_674_label$$inline_676$$ = $JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_areaObjs$[$i$$inline_674_label$$inline_676$$].$getLabel$()) {
            $i$$inline_674_label$$inline_676$$.update($JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_pzcMatrix$), $fadeInObjs$$inline_673$$.push($i$$inline_674_label$$inline_676$$), $fadeInObjs$$inline_673$$.push($i$$inline_674_label$$inline_676$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_674_label$$inline_676$$ = 0;$i$$inline_674_label$$inline_676$$ < $JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_dataObjs$.length;$i$$inline_674_label$$inline_676$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_dataObjs$[$i$$inline_674_label$$inline_676$$].$AreaId$ == $areaName$$inline_672$$) {
          $displayable$$inline_675$$ = $JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_dataObjs$[$i$$inline_674_label$$inline_676$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_671$$.$_dataPointLayer$.$addChild$($displayable$$inline_675$$);
          $fadeInObjs$$inline_673$$.push($displayable$$inline_675$$);
          break
        }
      }
      $index$$45_parentArea$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$45_parentArea$$1$$);
      -1 != $index$$45_parentArea$$1$$ && this.$_drilled$.splice($index$$45_parentArea$$1$$, 1)
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
D.$JSCompiler_StaticMethods__handleDrillAnimations$$ = function $$JSCompiler_StaticMethods__handleDrillAnimations$$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$, $newObjs$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_drillZoomToFit$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$3$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, 0.3);
    D.$DvtAgent$$.$isEnvironmentBrowser$() || ($animator$$3$$ = D.$JSCompiler_alias_NULL$$);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$3$$) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$3$$ && $animator$$3$$.play()
  }
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$, $oldObjs$$, $newObjs$$, D.$JSCompiler_alias_NULL$$, 0.5);
  D.$DvtAgent$$.$isEnvironmentBrowser$() || ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play()) : (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
};
D.$DvtThematicMap$$.prototype.$__dispatchEvent$ = function $$DvtThematicMap$$$$$__dispatchEvent$$($event$$10$$) {
  var $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$ = $event$$10$$.$getType$();
  if("selection" == $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$10$$.getSelection();
      for(var $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$8585$$ = this.$_clickedLayerName$, $selectedObjs$$inline_8761$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_8762$$ = [], $areaObjs$$inline_8763$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_8764$$ = 0;$i$$inline_8764$$ < $selectedObjs$$inline_8761$$.length;$i$$inline_8764$$++) {
        for(var $j$$inline_8765$$ = 0;$j$$inline_8765$$ < $areaObjs$$inline_8763$$.length;$j$$inline_8765$$++) {
          if($areaObjs$$inline_8763$$[$j$$inline_8765$$].getId() == $selectedObjs$$inline_8761$$[$i$$inline_8764$$]) {
            $selectedAreas$$inline_8762$$.push($areaObjs$$inline_8763$$[$j$$inline_8765$$].$AreaId$);
            break
          }
        }
      }
      $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$[$JSCompiler_temp_const$$8585$$] = $selectedAreas$$inline_8762$$;
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$10$$, "clientId", this.$_clickedDataLayerId$);
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof D.$DvtMarker$$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, D.$JSCompiler_alias_NULL$$), this.$_zoomToFitObject$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$ == D.$DvtMapDrillEvent$$.$TYPE$ ? ((0,D.$JSCompiler_StaticMethods_addParam$$)($event$$10$$, "clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$ = $event$$10$$.$_drillType$, $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$ == D.$DvtMapDrillEvent$$.$DRILL_UP$ && 
    this.$drillUp$(), $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$ == D.$DvtMapDrillEvent$$.$DRILL_DOWN$ ? this.$drillDown$() : $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$ == D.$DvtMapDrillEvent$$.$RESET$ && this.$resetMap$(), $event$$10$$.$setDisclosed$(this.$_drilledRowKeys$)) : ("showPopup" == $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$ || "hidePopup" == $JSCompiler_temp_const$$8586_drillType$$inline_683_type$$59$$) && (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$10$$, 
    "clientId", this.$_eventClientId$)
  }
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$10$$)
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
    for(var $i$$24$$ = 0;$i$$24$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$24$$++) {
      var $obj$$29$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$24$$];
      if($obj$$29$$) {
        if($obj$$29$$ instanceof D.$DvtMapLabel$$) {
          $obj$$29$$.reset()
        }else {
          if($obj$$29$$.$isDrilled$ && $obj$$29$$.$isDrilled$()) {
            $obj$$29$$.$setAlpha$(0)
          }else {
            var $parent$$3$$ = $obj$$29$$.getParent();
            $parent$$3$$ && $parent$$3$$.removeChild($obj$$29$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
};
D.$DvtThematicMap$$.prototype.$_rolloverCallback$ = function $$DvtThematicMap$$$$$_rolloverCallback$$($event$$13$$) {
  this.$_fireRolloverEvent$("mouseover" == $event$$13$$.$_mouseState$ ? "categoryRollOver" : "categoryRollOut", $event$$13$$.$getHideAttributes$())
};
D.$DvtThematicMap$$.prototype.$_fireRolloverEvent$ = function $$DvtThematicMap$$$$$_fireRolloverEvent$$($type$$61$$, $category$$1$$) {
  var $rolloverEvent$$ = new D.$DvtCategoryRolloverEvent$$($type$$61$$, $category$$1$$), $objects$$ = [], $layerId_legendItems$$;
  for($layerId_legendItems$$ in this.$_areas$) {
    for(var $key$$25_wrapper$$ in this.$_areas$[$layerId_legendItems$$]) {
      $objects$$.push(this.$_areas$[$layerId_legendItems$$][$key$$25_wrapper$$])
    }
  }
  for($layerId_legendItems$$ in this.$_markers$) {
    for($key$$25_wrapper$$ in this.$_markers$[$layerId_legendItems$$]) {
      $objects$$.push(this.$_markers$[$layerId_legendItems$$][$key$$25_wrapper$$])
    }
  }
  $layerId_legendItems$$ = this.$_legend$.$_hideAttrsLookUp$;
  for(var $legendCategory$$ in $layerId_legendItems$$) {
    $key$$25_wrapper$$ = new D.$DvtThematicMapCategoryWrapper$$($layerId_legendItems$$[$legendCategory$$].$getContentShape$(), $legendCategory$$), $objects$$.push($key$$25_wrapper$$)
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
legendMaxSize:0.3, legendGap:10}, resources:{images:{}, translations:{}}};
D.$DvtThematicMapDefaults$SKIN_SKYROS$$ = {styleDefaults:{backgroundColor:"#FFFFFF"}};
D.$DvtThematicMapDefaults$SKIN_ALTA$$ = {skin:"alta", styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", backgroundColor:"#FFFFFF", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}};
D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selection:"none"};
D.$JSCompiler_StaticMethods__getCurrentDragSource$$ = function $$JSCompiler_StaticMethods__getCurrentDragSource$$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$296$$ = 0;$i$$296$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$296$$++) {
    var $dataLayers$$4$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$296$$].$DataLayers$, $id$$154$$;
    for($id$$154$$ in $dataLayers$$4$$) {
      var $dragSource$$1$$ = $dataLayers$$4$$[$id$$154$$].$_dragSource$;
      if($dragSource$$1$$ && $dragSource$$1$$.$_dragCandidate$) {
        return $dragSource$$1$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMap$$.prototype.$isDragAvailable$ = function $$DvtThematicMap$$$$$isDragAvailable$$($dragSource$$2_mouseX$$28$$, $mouseY$$28$$, $clientIds$$10$$) {
  this.$_dragAllowed$ = D.$JSCompiler_alias_FALSE$$;
  return($dragSource$$2_mouseX$$28$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this)) ? $dragSource$$2_mouseX$$28$$.$isDragAvailable$($clientIds$$10$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$getDragTransferable$ = function $$DvtThematicMap$$$$$getDragTransferable$$($mouseX$$29$$, $mouseY$$29$$) {
  var $dragSource$$3$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$3$$ ? $dragSource$$3$$.$getDragTransferable$($mouseX$$29$$, $mouseY$$29$$) : D.$JSCompiler_alias_NULL$$
};

D.$DvtThematicMapDropTarget$$ = function $$DvtThematicMapDropTarget$$$($areaLayer$$, $basemap$$3$$) {
  this.$_areaLayer$ = $areaLayer$$;
  this.$_basemap$ = $basemap$$3$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDropTarget$$, D.$DvtDropTarget$$, "DvtThematicMapDropTarget");
D.$DvtThematicMapAutomation$$ = (0,D.$JSCompiler_set$$)("$_tmap$");
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapAutomation$$, D.$DvtAutomation$$, "DvtThematicMapAutomation");
D.$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($displayable$$31_logicalObj$$7$$) {
  $displayable$$31_logicalObj$$7$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_tmap$.$_eventHandler$, $displayable$$31_logicalObj$$7$$);
  var $JSCompiler_temp$$456_id$$inline_3442$$;
  if($displayable$$31_logicalObj$$7$$ && ($displayable$$31_logicalObj$$7$$ instanceof D.$DvtMapDataArea$$ || $displayable$$31_logicalObj$$7$$ instanceof D.$DvtMapDataMarker$$)) {
    a: {
      for(var $layers$$inline_3439$$ = this.$_tmap$.$_layers$, $i$$inline_3440$$ = 0;$i$$inline_3440$$ < $layers$$inline_3439$$.length;$i$$inline_3440$$++) {
        var $dataLayers$$inline_3441$$ = $layers$$inline_3439$$[$i$$inline_3440$$].$DataLayers$;
        for($JSCompiler_temp$$456_id$$inline_3442$$ in $dataLayers$$inline_3441$$) {
          if($displayable$$31_logicalObj$$7$$ instanceof D.$DvtMapDataArea$$) {
            for(var $areas$$inline_3443_markers$$inline_3445$$ = $dataLayers$$inline_3441$$[$JSCompiler_temp$$456_id$$inline_3442$$].$_areaObjs$, $k$$inline_3444$$ = 0;$k$$inline_3444$$ < $areas$$inline_3443_markers$$inline_3445$$.length;$k$$inline_3444$$++) {
              if($areas$$inline_3443_markers$$inline_3445$$[$k$$inline_3444$$] === $displayable$$31_logicalObj$$7$$) {
                $JSCompiler_temp$$456_id$$inline_3442$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$456_id$$inline_3442$$) + ":area[" + $displayable$$31_logicalObj$$7$$.getId() + "]";
                break a
              }
            }
          }else {
            if($displayable$$31_logicalObj$$7$$ instanceof D.$DvtMapDataMarker$$) {
              $areas$$inline_3443_markers$$inline_3445$$ = $dataLayers$$inline_3441$$[$JSCompiler_temp$$456_id$$inline_3442$$].$_dataObjs$;
              for($k$$inline_3444$$ = 0;$k$$inline_3444$$ < $areas$$inline_3443_markers$$inline_3445$$.length;$k$$inline_3444$$++) {
                if($areas$$inline_3443_markers$$inline_3445$$[$k$$inline_3444$$] === $displayable$$31_logicalObj$$7$$) {
                  $JSCompiler_temp$$456_id$$inline_3442$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$456_id$$inline_3442$$) + ":marker[" + $displayable$$31_logicalObj$$7$$.getId() + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_temp$$456_id$$inline_3442$$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp$$456_id$$inline_3442$$ = D.$JSCompiler_alias_NULL$$
  }
  return $JSCompiler_temp$$456_id$$inline_3442$$
};
D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$) {
  var $colonIdx$$ = $JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$.indexOf(":"), $parenIdx$$ = $JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$.indexOf("[");
  $JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$ = 0 < $colonIdx$$ && 0 < $parenIdx$$ ? ($JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$.substring(0, $colonIdx$$), $JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$.substring($colonIdx$$ + 1, $parenIdx$$), $JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$.substring($parenIdx$$ + 1, $JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$.length - 
  1))) ? $JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$415_dataObj$$inline_3451_subId$$1$$
};
D.$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($data$$27_dataLayerId$$2$$, $dataObj$$8_dataObjType$$1_label$$16$$, $dataObjId$$1$$) {
  return($dataObj$$8_dataObjType$$1_label$$16$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $data$$27_dataLayerId$$2$$, $dataObj$$8_dataObjType$$1_label$$16$$, $dataObjId$$1$$)) ? ($data$$27_dataLayerId$$2$$ = {}, $data$$27_dataLayerId$$2$$.color = $dataObj$$8_dataObjType$$1_label$$16$$.$getDatatipColor$(), $data$$27_dataLayerId$$2$$.tooltip = $dataObj$$8_dataObjType$$1_label$$16$$.$getDatatip$(), $dataObj$$8_dataObjType$$1_label$$16$$ = $dataObj$$8_dataObjType$$1_label$$16$$.$getLabel$(), 
  $data$$27_dataLayerId$$2$$.label = $dataObj$$8_dataObjType$$1_label$$16$$ ? $dataObj$$8_dataObjType$$1_label$$16$$.$getTextString$() : D.$JSCompiler_alias_NULL$$, $data$$27_dataLayerId$$2$$) : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtThematicMapAutomation.prototype.getData", D.$DvtThematicMapAutomation$$.prototype.getData);
D.$JSCompiler_StaticMethods__getDataObject$$ = function $$JSCompiler_StaticMethods__getDataObject$$$($JSCompiler_StaticMethods__getDataObject$self_layers$$2$$, $dataLayerId$$4$$, $dataObjType$$3$$, $dataObjId$$3$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$.$_tmap$.$_layers$;
  for(var $i$$312$$ = 0;$i$$312$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$.length;$i$$312$$++) {
    var $dataLayers$$6$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$[$i$$312$$].$DataLayers$, $id$$163$$;
    for($id$$163$$ in $dataLayers$$6$$) {
      if((0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($id$$163$$) == $dataLayerId$$4$$) {
        if("area" == $dataObjType$$3$$) {
          for(var $areas$$4_markers$$1$$ = $dataLayers$$6$$[$id$$163$$].$_areaObjs$, $k$$7$$ = 0;$k$$7$$ < $areas$$4_markers$$1$$.length;$k$$7$$++) {
            if($areas$$4_markers$$1$$[$k$$7$$].getId() === $dataObjId$$3$$) {
              return $areas$$4_markers$$1$$[$k$$7$$]
            }
          }
        }else {
          if("marker" == $dataObjType$$3$$) {
            $areas$$4_markers$$1$$ = $dataLayers$$6$$[$id$$163$$].$_dataObjs$;
            for($k$$7$$ = 0;$k$$7$$ < $areas$$4_markers$$1$$.length;$k$$7$$++) {
              if($areas$$4_markers$$1$$[$k$$7$$].getId() === $dataObjId$$3$$) {
                return $areas$$4_markers$$1$$[$k$$7$$]
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
  var $colonIdx$$1$$ = $dataLayerId$$5$$.lastIndexOf(":");
  return 0 < $colonIdx$$1$$ ? $dataLayerId$$5$$.substring($colonIdx$$1$$ + 1) : $dataLayerId$$5$$
};
D.$DvtDrillablePath$$ = function $$DvtDrillablePath$$$($context$$417$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$417$$, $bSupportsVectorEffects$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDrillablePath$$, D.$DvtPath$$, "DvtDrillablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDrillablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$418$$, $bSupportsVectorEffects$$3$$) {
  D.$DvtDrillablePath$$.$superclass$.Init.call(this, $context$$418$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = D.$JSCompiler_alias_NULL$$;
  this.$_isDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = (0,D.$JSCompiler_get$$)("$_isDrilled$");
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$3_parent$$48$$) {
  this.$_isDrilled$ != $drilled$$3_parent$$48$$ && (this.$_isDrilled$ = $drilled$$3_parent$$48$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedInnerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedOuterShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
  $drilled$$3_parent$$48$$ = this.getParent(), $drilled$$3_parent$$48$$.$addChild$(this.$_disclosedOuterShape$), $drilled$$3_parent$$48$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$) : (this.$isHoverEffectShown$() && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$setAlpha$(1)))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$7$$) {
  this.$IsSelected$ != $selected$$7$$ && ($selected$$7$$ && (this.$isHoverEffectShown$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4))), D.$DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$7$$))
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
D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__updateStrokeZoomWidth$$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$59$$, $fixedWidth$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$36$$ = $shape$$59$$.$getStroke$();
    $stroke$$36$$ && ($stroke$$36$$ = $stroke$$36$$.clone(), $stroke$$36$$.$setWidth$($fixedWidth$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$59$$.$setStroke$($stroke$$36$$))
  }
};
D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$37$$, $fixedWidth$$1$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$37$$ = $adjustedStroke_stroke$$37$$.clone(), $adjustedStroke_stroke$$37$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$37$$
};
D.$JSCompiler_StaticMethods_handleZoomEvent$$ = function $$JSCompiler_StaticMethods_handleZoomEvent$$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$20$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$20$$.$_a$;
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
D.$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$, $layerName$$9$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$][$layerName$$9$$];
  return $dimAr_layer$$3$$ && ($dimAr_layer$$3$$ = $dimAr_layer$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$]) ? new D.$DvtRectangle$$($dimAr_layer$$3$$[0], $dimAr_layer$$3$$[1], $dimAr_layer$$3$$[2], $dimAr_layer$$3$$[3]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$1$$, $layerName$$10$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$4$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$10$$];
  return $layer$$4$$ ? $layer$$4$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$2$$, $layerName$$11$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$5$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$11$$];
  return $layer$$5$$ ? $layer$$5$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$3_layer$$6$$, $layerName$$12$$, $areaId$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$3_layer$$6$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3_layer$$6$$][$layerName$$12$$];
  var $labels$$3$$;
  $baseMapName$$3_layer$$6$$ && ($labels$$3$$ = $baseMapName$$3_layer$$6$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$3$$ && $labels$$3$$[$areaId$$] ? $labels$$3$$[$areaId$$][1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$4$$, $city$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap_cityLayer_coords$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4$$];
  if($basemap_cityLayer_coords$$ && ($basemap_cityLayer_coords$$ = $basemap_cityLayer_coords$$.cities)) {
    if($basemap_cityLayer_coords$$ = $basemap_cityLayer_coords$$[D.$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new D.$DvtPoint$$($basemap_cityLayer_coords$$[0], $basemap_cityLayer_coords$$[1])
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
D.$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath_baseMapName$$6_path$$12$$, $layerName$$13$$, $areaId$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$2_labelInfo_layer$$7$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath_baseMapName$$6_path$$12$$];
  if($basemap$$2_labelInfo_layer$$7$$ && ($basemap$$2_labelInfo_layer$$7$$ = $basemap$$2_labelInfo_layer$$7$$[$layerName$$13$$])) {
    if(($basemap$$2_labelInfo_layer$$7$$ = $basemap$$2_labelInfo_layer$$7$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$2_labelInfo_layer$$7$$[$areaId$$1$$]) {
      return(0,D.$DvtRectangle$create$$)($basemap$$2_labelInfo_layer$$7$$[$areaId$$1$$][0]).$getCenter$()
    }
    $arPath_baseMapName$$6_path$$12$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath_baseMapName$$6_path$$12$$][$layerName$$13$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$1$$];
    if(!$arPath_baseMapName$$6_path$$12$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $arPath_baseMapName$$6_path$$12$$ = window.DvtPathUtils.$createPathArray$($arPath_baseMapName$$6_path$$12$$);
    return window.DvtPathUtils.$getDimensions$($arPath_baseMapName$$6_path$$12$$).$getCenter$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$7$$, $layerName$$14$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$8$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][$layerName$$14$$];
  return $layer$$8$$ ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][D.$DvtBaseMapManager$$.$_INDEX$][$layer$$8$$.__index + 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$8$$, $layerName$$15$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$15$$] ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][D.$DvtBaseMapManager$$.$_INDEX$][D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$15$$].__index - 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$9$$, $layerName$$16$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$16$$][D.$DvtBaseMapManager$$.$TYPE_PATH$]
};
D.$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$10$$, $layerName$$17$$, $area$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$17$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$area$$1$$]
};
D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$11$$, $layerName$$18$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName$$1_children$$13$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$11$$, $layerName$$18$$);
  return $childLayerName$$1_children$$13$$ && ($childLayerName$$1_children$$13$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$childLayerName$$1_children$$13$$][D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName$$1_children$$13$$ : []
};
D.$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$12$$, $index$$86$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][D.$DvtBaseMapManager$$.$_INDEX$][$index$$86$$]
};
D.$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$13_layerMetadata$$, $layerName$$19$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$87$$, $dim$$65$$) {
  var $basemapMetadata$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = [], D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$13_layerMetadata$$ = $basemapMetadata$$[$layerName$$19$$];
  $baseMapName$$13_layerMetadata$$ || ($baseMapName$$13_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$19$$] = $baseMapName$$13_layerMetadata$$, $index$$87$$ != D.$JSCompiler_alias_NULL$$ && ($basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$][$index$$87$$] = $layerName$$19$$));
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$65$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = $index$$87$$
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerBaseMapLayer", D.$DvtBaseMapManager$$.$registerBaseMapLayer$);
D.$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$14_layerMetadata$$1$$, $layerName$$20$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$20$$];
  $baseMapName$$14_layerMetadata$$1$$ || ($baseMapName$$14_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$20$$] = $baseMapName$$14_layerMetadata$$1$$);
  ($baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$20$$]) && ($baseMapName$$14_layerMetadata$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerResourceBundle", D.$DvtBaseMapManager$$.$registerResourceBundle$);
D.$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$15_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$21$$, $labelMetadata$$2$$) {
  if($baseMapName$$15_basemapMetadata$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$21$$ = $baseMapName$$15_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$21$$]) {
      for(var $prop$$11$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$21$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$11$$] = $labelMetadata$$2$$[$prop$$11$$]
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
  var $i$$290_index$$88$$, $args$$6$$;
  if(D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$) {
    for($i$$290_index$$88$$ = 0;$i$$290_index$$88$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[0].length;$i$$290_index$$88$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[0][$i$$290_index$$88$$], D.$DvtBaseMapManager$$.$registerBaseMapLayer$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2], $args$$6$$[3], $args$$6$$[4], $args$$6$$[5], $args$$6$$[6], $args$$6$$[7])
    }
    for($i$$290_index$$88$$ = 0;$i$$290_index$$88$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[1].length;$i$$290_index$$88$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[1][$i$$290_index$$88$$], D.$DvtBaseMapManager$$.$registerResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    for($i$$290_index$$88$$ = 0;$i$$290_index$$88$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[2].length;$i$$290_index$$88$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[2][$i$$290_index$$88$$], D.$DvtBaseMapManager$$.$updateResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = D.$JSCompiler_alias_NULL$$
  }
  if(D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$) {
    for($i$$290_index$$88$$ = 0;$i$$290_index$$88$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$[0].length;$i$$290_index$$88$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$[0][$i$$290_index$$88$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$6$$[1], $layerName$$22_lowerLayer$$ = $args$$6$$[2], $basemapMetadata$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$6$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$6$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$290_index$$88$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$290_index$$88$$, 0, $layerName$$22_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$22_lowerLayer$$][D.$DvtBaseMapManager$$.$_INDEX$] = $i$$290_index$$88$$;
          for($i$$290_index$$88$$ += 1;$i$$290_index$$88$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$290_index$$88$$++) {
            ($layerName$$22_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$290_index$$88$$]]) && $layerName$$22_lowerLayer$$[D.$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$6$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
  }
};
D.$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$11$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$) {
  if(0 < $zoomFactor$$) {
    $basemapW_scale$$11$$ = 1 / (window.Math.min($pathAr_viewportW$$ / $basemapW_scale$$11$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$);
    if(1 >= $basemapW_scale$$11$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$13$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$13$$], (0,window.isNaN)($pathAr_viewportW$$) && ($pathAr_viewportW$$ = window.DvtPathUtils.$createPathArray$($paths$$[$path$$13$$])), $basemapH_simplifiedPaths$$[$path$$13$$] = window.DvtPathUtils.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$11$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
D.$DvtThematicMapCategoryWrapper$$ = function $$DvtThematicMapCategoryWrapper$$$($displayable$$26$$, $category$$6$$) {
  this.Init($displayable$$26$$, $category$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapCategoryWrapper$$, D.$DvtObj$$, "DvtThematicMapCategoryWrapper");
D.$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$27$$, $category$$7$$) {
  this.$_displayable$ = $displayable$$27$$;
  this.$_category$ = $category$$7$$
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
D.$DvtMapActionEvent$$ = function $$DvtMapActionEvent$$$($clientId$$32$$, $rowKey$$10$$, $action$$1$$) {
  this.Init("action");
  this.$_clientId$ = $clientId$$32$$;
  this.$_rowKey$ = $rowKey$$10$$;
  this.$_action$ = $action$$1$$
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
D.$DvtMapLabel$$ = function $$DvtMapLabel$$$($context$$394$$, $label$$9$$, $labelInfo$$1$$, $labelDisplay$$3$$, $parentContainer$$, $bSupportsVectorEffects$$) {
  this.Init($context$$394$$, $label$$9$$, $labelInfo$$1$$, $labelDisplay$$3$$, $parentContainer$$, $bSupportsVectorEffects$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLabel$$, D.$DvtOutputText$$, "DvtMapLabel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLabel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$395$$, $i$$291_label$$10$$, $labelInfo$$2$$, $labelDisplay$$4_line$$5_polyline$$, $parentContainer$$1_stroke$$32$$, $bSupportsVectorEffects$$1$$) {
  D.$DvtMapLabel$$.$superclass$.Init.call(this, $context$$395$$, $i$$291_label$$10$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelDisplay$ = $labelDisplay$$4_line$$5_polyline$$;
  this.$_parentContainer$ = $parentContainer$$1_stroke$$32$$;
  if($labelInfo$$2$$ && (this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelInfo$$2$$[0])), 1 < $labelInfo$$2$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$291_label$$10$$ = 1;$i$$291_label$$10$$ < $labelInfo$$2$$.length;$i$$291_label$$10$$++) {
      $labelDisplay$$4_line$$5_polyline$$ = $labelInfo$$2$$[$i$$291_label$$10$$], this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelDisplay$$4_line$$5_polyline$$[0])), $labelDisplay$$4_line$$5_polyline$$ = new D.$DvtPolyline$$($context$$395$$, $labelDisplay$$4_line$$5_polyline$$[1]), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($labelDisplay$$4_line$$5_polyline$$), $parentContainer$$1_stroke$$32$$ = new D.$DvtSolidStroke$$("#000000"), this.$_bSupportsVectorEffects$ && ($parentContainer$$1_stroke$$32$$.$_bFixedWidth$ = 
      D.$JSCompiler_alias_TRUE$$), $labelDisplay$$4_line$$5_polyline$$.$setStroke$($parentContainer$$1_stroke$$32$$), this.$_leaderLines$.push($labelDisplay$$4_line$$5_polyline$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$8_zoom$$2$$) {
  $pzcMatrix$$8_zoom$$2$$ = $pzcMatrix$$8_zoom$$2$$.$_a$;
  for(var $mat$$31_state$$23_stroke$$33$$ = -1, $center$$2_estimatedDims$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$(this), $labelBox_remove_style$$63$$ = D.$JSCompiler_alias_FALSE$$, $i$$292_leaderLinePoints$$ = 0;$i$$292_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$292_leaderLinePoints$$++) {
    var $numPoints_zoomW$$ = this.$_boundRectangle$[$i$$292_leaderLinePoints$$].$w$ * $pzcMatrix$$8_zoom$$2$$;
    if($center$$2_estimatedDims$$1$$.$w$ <= $numPoints_zoomW$$) {
      $mat$$31_state$$23_stroke$$33$$ = $i$$292_leaderLinePoints$$;
      break
    }else {
      if(this.getParent() || ($labelBox_remove_style$$63$$ = D.$JSCompiler_alias_TRUE$$, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints_zoomW$$) {
        $mat$$31_state$$23_stroke$$33$$ = $i$$292_leaderLinePoints$$;
        break
      }
    }
  }
  -1 == $mat$$31_state$$23_stroke$$33$$ && "on" == this.$_labelDisplay$ && ($mat$$31_state$$23_stroke$$33$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat$$31_state$$23_stroke$$33$$ ? (-1 == $mat$$31_state$$23_stroke$$33$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$2_estimatedDims$$1$$ = this.$_boundRectangle$[$mat$$31_state$$23_stroke$$33$$].$getCenter$(), this.$setCenter$($center$$2_estimatedDims$$1$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$, 0 < $mat$$31_state$$23_stroke$$33$$ ? (this.$_leaderLine$ = 
  this.$_leaderLines$[$mat$$31_state$$23_stroke$$33$$ - 1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$63$$ = this.$getCSSStyle$(), $labelBox_remove_style$$63$$.$setStyle$("color", "#000000"), this.$setCSSStyle$($labelBox_remove_style$$63$$), $labelBox_remove_style$$63$$ = this.$_boundRectangle$[$mat$$31_state$$23_stroke$$33$$], $i$$292_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints_zoomW$$ = $i$$292_leaderLinePoints$$.length, $labelBox_remove_style$$63$$.x > 
  $i$$292_leaderLinePoints$$[$numPoints_zoomW$$ - 2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$63$$.x, $center$$2_estimatedDims$$1$$.y))) : $labelBox_remove_style$$63$$.y > $i$$292_leaderLinePoints$$[$numPoints_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$2_estimatedDims$$1$$.x, $labelBox_remove_style$$63$$.y))) : $labelBox_remove_style$$63$$.x + $labelBox_remove_style$$63$$.$w$ < 
  $i$$292_leaderLinePoints$$[$numPoints_zoomW$$ - 2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$63$$.x + $labelBox_remove_style$$63$$.$w$, $center$$2_estimatedDims$$1$$.y))) : $labelBox_remove_style$$63$$.y + $labelBox_remove_style$$63$$.$h$ < $i$$292_leaderLinePoints$$[$numPoints_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$2_estimatedDims$$1$$.x, $labelBox_remove_style$$63$$.y + 
  $labelBox_remove_style$$63$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), $labelBox_remove_style$$63$$ = this.$getCSSStyle$(), $labelBox_remove_style$$63$$.$setStyle$("color", this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$63$$)))), this.$_currentState$ = $mat$$31_state$$23_stroke$$33$$) : -1 == $mat$$31_state$$23_stroke$$33$$ && $labelBox_remove_style$$63$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat$$31_state$$23_stroke$$33$$ = new D.$DvtMatrix$$, $mat$$31_state$$23_stroke$$33$$.translate($pzcMatrix$$8_zoom$$2$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$8_zoom$$2$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat$$31_state$$23_stroke$$33$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new D.$DvtMatrix$$($pzcMatrix$$8_zoom$$2$$, 0, 0, $pzcMatrix$$8_zoom$$2$$)), this.$_bSupportsVectorEffects$ || ($mat$$31_state$$23_stroke$$33$$ = 
  this.$_leaderLine$.$getStroke$().clone(), $mat$$31_state$$23_stroke$$33$$.$setWidth$(1 / $pzcMatrix$$8_zoom$$2$$), this.$_leaderLine$.$setStroke$($mat$$31_state$$23_stroke$$33$$))))
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$8$$) {
  this.$_center$ = $p$$8$$;
  this.$setX$($p$$8$$.x);
  this.$setY$($p$$8$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$24$$) {
  D.$DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$24$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$24$$.$getStyle$("color"))
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtMapDataObject$$ = function $$DvtMapDataObject$$$($context$$392$$, $dataLayer$$2$$, $rowKey$$, $clientId$$8$$, $regionId$$) {
  this.Init($context$$392$$, $dataLayer$$2$$, $rowKey$$, $clientId$$8$$, $regionId$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataObject$$, D.$DvtContainer$$, "DvtMapDataObject");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataObject$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$393$$, $dataLayer$$3$$, $rowKey$$1$$, $clientId$$9$$, $regionId$$1$$) {
  D.$DvtMapDataObject$$.$superclass$.Init.call(this, $context$$393$$, D.$JSCompiler_alias_NULL$$, $clientId$$9$$);
  this.$_categories$ = [];
  this.$Shape$ = D.$JSCompiler_alias_NULL$$;
  this.$_id$ = $rowKey$$1$$;
  this.$_clientId$ = $clientId$$9$$;
  this.$AreaId$ = $regionId$$1$$;
  this.$_selectionLayer$ = D.$JSCompiler_alias_NULL$$;
  this.$_datatipColor$ = "#000000";
  this.Zoom = 1;
  this.$_hasAction$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataLayer$ = $dataLayer$$3$$;
  this.$Bundle$ = $dataLayer$$3$$.$_tmap$.$Bundle$
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$3$$) {
  (this.$Shape$ = $disp$$3$$) && (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$Shape$, "img")
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = (0,D.$JSCompiler_set$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$Shape$");
D.$JSCompiler_prototypeAlias$$.$setLabel$ = (0,D.$JSCompiler_set$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$setLabelPosition$ = (0,D.$JSCompiler_set$$)("$LabelPos$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$2$$) {
  D.$DvtMapDataObject$$.$superclass$.$setVisible$.call(this, $bVisible$$2$$);
  this.$Label$ && this.$Label$.$setVisible$($bVisible$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$Shape$]
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_datatipColor$");
D.$JSCompiler_prototypeAlias$$.$setDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$setDatatipColor$$($color$$37$$) {
  this.$_datatipColor$ = $color$$37$$;
  this.$Shape$ && this.$Shape$.$setDataColor$ && this.$Shape$.$setDataColor$($color$$37$$)
};
D.$JSCompiler_prototypeAlias$$.$setDatatip$ = function $$JSCompiler_prototypeAlias$$$$setDatatip$$($datatip$$3$$) {
  this.$_datatip$ = $datatip$$3$$;
  this.$Shape$ && ($datatip$$3$$ && this.$isSelectable$() ? (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$Shape$, "label", $datatip$$3$$ + ". " + (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED")) : (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$Shape$, "label", $datatip$$3$$))
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
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$8$$) {
  for(var $parentId$$ = this.$_dataLayer$.$getClientId$(), $i$$289$$ = 0;$i$$289$$ < $clientIds$$8$$.length && $clientIds$$8$$[$i$$289$$] != $parentId$$;$i$$289$$++) {
  }
  return $parentId$$
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = (0,D.$JSCompiler_get$$)("$_dataLayer$");
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$281$$) {
  return $event$$281$$.type == D.$DvtMouseEvent$CLICK$$ ? this : 32 == $event$$281$$.keyCode && $event$$281$$.ctrlKey ? this : (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$281$$, this.$GetNavigables$())
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
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$6$$) {
  this.$Shape$.getParent() && (this.Zoom = $pzcMatrix$$6$$.$_a$, this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$recenter$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$DvtMapDataArea$$ = function $$DvtMapDataArea$$$($context$$415$$, $dataLayer$$18$$, $rowKey$$8$$, $clientId$$28$$, $regionId$$8$$) {
  this.Init($context$$415$$, $dataLayer$$18$$, $rowKey$$8$$, $clientId$$28$$, $regionId$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataArea$$, D.$DvtMapDataObject$$, "DvtMapDataArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$416$$, $dataLayer$$19$$, $rowKey$$9$$, $clientId$$29$$, $regionId$$9$$) {
  D.$DvtMapDataArea$$.$superclass$.Init.call(this, $context$$416$$, $dataLayer$$19$$, $rowKey$$9$$, $clientId$$29$$, $regionId$$9$$);
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$4$$) {
  D.$DvtMapDataArea$$.$superclass$.$setDisplayable$.call(this, $disp$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$6$$) {
  $selected$$6$$ && !this.$_isHoverEffectShowing$ && this.$_dataAreaLayer$.$addChild$(this.$Shape$);
  this.$Shape$.$setSelected$($selected$$6$$);
  this.$getDatatip$() && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$Shape$, "label", this.$getDatatip$() + ". " + (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, $selected$$6$$ ? "STATE_SELECTED" : "STATE_UNSELECTED"))
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
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$18$$) {
  this.$Shape$.getParent() && (D.$DvtMapDataArea$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$18$$), (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)(this.$Shape$, $pzcMatrix$$18$$), this.$isDrilled$() || this.$PositionLabel$($pzcMatrix$$18$$))
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = function $$JSCompiler_prototypeAlias$$$$PositionLabel$$($pzcMatrix$$19$$) {
  this.$Label$ && this.$Label$.update($pzcMatrix$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$getDataLayer$().$_tmap$)
};
D.$DvtMapDataMarker$$ = function $$DvtMapDataMarker$$$($context$$406$$, $dataLayer$$12$$, $rowKey$$6$$, $clientId$$21$$, $regionId$$6$$) {
  this.Init($context$$406$$, $dataLayer$$12$$, $rowKey$$6$$, $clientId$$21$$, $regionId$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataMarker$$, D.$DvtMapDataObject$$, "DvtMapDataMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$407$$, $dataLayer$$13$$, $rowKey$$7$$, $clientId$$22$$, $regionId$$7$$) {
  D.$DvtMapDataMarker$$.$superclass$.Init.call(this, $context$$407$$, $dataLayer$$13$$, $rowKey$$7$$, $clientId$$22$$, $regionId$$7$$);
  this.$InitCanvasZoom$ = 1;
  this.$_size$ = 0
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$5$$) {
  this.$Shape$.$setSelected$($selected$$5$$);
  this.$getDatatip$() && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$Shape$, "label", this.$getDatatip$() + ". " + (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, $selected$$5$$ ? "STATE_SELECTED" : "STATE_UNSELECTED"))
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
    var $x$$182$$ = (this.$Shape$.$getX$() + (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) / 2) * this.Zoom, $markerY_y$$154$$ = this.$Shape$.$getY$() * this.Zoom, $markerH$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$), $markerType$$1$$ = this.$Shape$.$getType$();
    "top" == this.$LabelPos$ ? ($markerY_y$$154$$ -= 4, this.$Label$.$alignBottom$()) : "bottom" == this.$LabelPos$ ? ($markerY_y$$154$$ += $markerH$$, this.$Label$.$alignTop$()) : ($markerY_y$$154$$ = "triangleUp" == $markerType$$1$$ ? $markerY_y$$154$$ + 2 * $markerH$$ / 3 : "triangleDown" == $markerType$$1$$ ? $markerY_y$$154$$ + $markerH$$ / 3 : $markerY_y$$154$$ + $markerH$$ / 2, this.$Label$.$alignMiddle$());
    this.$Label$.$setX$($x$$182$$);
    this.$Label$.$setY$($markerY_y$$154$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $parent$$47$$ = this.$Shape$.getParent(), $height$$53_rotation$$2$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$);
  (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) != D.$JSCompiler_alias_NULL$$ && ($height$$53_rotation$$2$$ != D.$JSCompiler_alias_NULL$$ && $parent$$47$$) && ($height$$53_rotation$$2$$ = this.$Shape$.$getRotation$(), this.$Label$ && this.$Shape$.$getRotation$() ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)($parent$$47$$, this.$Center$.x * this.Zoom - this.$Center$.x, this.$Center$.y * this.Zoom - this.$Center$.y), D.$DvtAgent$$.$workaroundFirefoxRepaint$($parent$$47$$)) : ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, 
  this.$Center$.x * this.Zoom - (this.$Center$.x * window.Math.cos($height$$53_rotation$$2$$) - this.$Center$.y * window.Math.sin($height$$53_rotation$$2$$)), this.$Center$.y * this.Zoom - (this.$Center$.x * window.Math.sin($height$$53_rotation$$2$$) + this.$Center$.y * window.Math.cos($height$$53_rotation$$2$$))), D.$DvtAgent$$.$workaroundFirefoxRepaint$(this.$Shape$)))
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapDataImage$$ = function $$DvtMapDataImage$$$($context$$396$$, $dataLayer$$4$$, $rowKey$$2$$, $clientId$$10$$, $regionId$$2$$) {
  this.Init($context$$396$$, $dataLayer$$4$$, $rowKey$$2$$, $clientId$$10$$, $regionId$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataImage$$, D.$DvtMapDataObject$$, "DvtMapDataImage");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataImage$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$397$$, $dataLayer$$5$$, $rowKey$$3$$, $clientId$$11$$, $regionId$$3$$) {
  D.$DvtMapDataImage$$.$superclass$.Init.call(this, $context$$397$$, $dataLayer$$5$$, $rowKey$$3$$, $clientId$$11$$, $regionId$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$onImageLoaded$ = function $$JSCompiler_prototypeAlias$$$$onImageLoaded$$($image$$13$$) {
  $image$$13$$ && ($image$$13$$.width && $image$$13$$.height) && (this.$Shape$.getWidth() || this.$Shape$.$setWidth$($image$$13$$.width), this.$Shape$.getHeight() || this.$Shape$.$setHeight$($image$$13$$.height), this.$setSize$($image$$13$$.width * $image$$13$$.height), this.$Shape$.$setX$(this.$Center$.x - $image$$13$$.width / 2), this.$Shape$.$setY$(this.$Center$.y - $image$$13$$.height / 2), this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $curCenterX$$1_width$$58$$ = this.$Shape$.getWidth(), $curCenterY$$1_height$$51$$ = this.$Shape$.getHeight();
  $curCenterX$$1_width$$58$$ != D.$JSCompiler_alias_NULL$$ && ($curCenterY$$1_height$$51$$ != D.$JSCompiler_alias_NULL$$ && this.$Shape$.getParent()) && ($curCenterX$$1_width$$58$$ = this.$Shape$.$getX$() + $curCenterX$$1_width$$58$$ / 2, $curCenterY$$1_height$$51$$ = this.$Shape$.$getY$() + $curCenterY$$1_height$$51$$ / 2, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, $curCenterX$$1_width$$58$$ * this.Zoom - this.$Center$.x, $curCenterY$$1_height$$51$$ * this.Zoom - this.$Center$.y))
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapDataComponent$$ = function $$DvtMapDataComponent$$$($context$$400$$, $dataLayer$$10$$, $rowKey$$4$$, $clientId$$19$$, $regionId$$4$$) {
  this.Init($context$$400$$, $dataLayer$$10$$, $rowKey$$4$$, $clientId$$19$$, $regionId$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataComponent$$, D.$DvtMapDataObject$$, "DvtMapDataComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$401$$, $dataLayer$$11$$, $rowKey$$5$$, $clientId$$20$$, $regionId$$5$$) {
  D.$DvtMapDataComponent$$.$superclass$.Init.call(this, $context$$401$$, $dataLayer$$11$$, $rowKey$$5$$, $clientId$$20$$, $regionId$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  if(this.$Shape$.getParent()) {
    var $curCenterY$$2$$ = this.$_y$ + this.$_height$ / 2;
    this.$Shape$.$setTranslateX$(this.$_x$ + (this.$_x$ + this.$_width$ / 2) * this.Zoom - this.$Center$.x);
    this.$Shape$.$setTranslateY$(this.$_y$ + $curCenterY$$2$$ * this.Zoom - this.$Center$.y)
  }
};
D.$DvtMapDataImage$$.prototype.$getSize$ = function $$DvtMapDataImage$$$$$getSize$$() {
  return this.$_width$ * this.$_height$
};
D.$DvtMapArea$$ = function $$DvtMapArea$$$($context$$423$$, $dvtShape$$, $areaName$$4$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$423$$, $dvtShape$$, $areaName$$4$$, $bSupportsVectorEffects$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapArea$$, D.$DvtContainer$$, "DvtMapArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$424_stroke$$39$$, $dvtShape$$1$$, $areaName$$5$$, $bSupportsVectorEffects$$5$$) {
  D.$DvtMapArea$$.$superclass$.Init.call(this, $context$$424_stroke$$39$$);
  this.$_isSelected$ = this.$_bSelectable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaName$ = $areaName$$5$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$;
  if($context$$424_stroke$$39$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$424_stroke$$39$$.getWidth()
  }
  this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$_shape$, "img")
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$setTooltip$ = (0,D.$JSCompiler_set$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getStroke$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$40$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setStroke$($stroke$$40$$)
};
D.$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$22$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setFill$($fill$$22$$)
};
D.$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getFill$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof D.$DvtPath$$ ? this.$_shape$.$getCmds$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$16$$) {
  this.$_shape$ instanceof D.$DvtPath$$ && this.$_shape$.$setCmds$($cmds$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$20$$) {
  this.$_shape$ instanceof D.$DvtImage$$ && this.$_shape$.$setSrc$($src$$20$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$187$$, $y$$159$$) {
  var $dims$$24$$ = this.$getDimensions$();
  return $x$$187$$ >= $dims$$24$$.x && $x$$187$$ <= $dims$$24$$.x + $dims$$24$$.$w$ && $y$$159$$ >= $dims$$24$$.y && $y$$159$$ <= $dims$$24$$.y + $dims$$24$$.$h$
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$25$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().clone();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$25$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
D.$DvtMapLayer$$ = function $$DvtMapLayer$$$($tmap$$4$$, $eventHandler$$2$$) {
  this.Init($tmap$$4$$, $eventHandler$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLayer$$, D.$DvtObj$$, "DvtMapLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$5$$, $eventHandler$$3$$) {
  this.$_tmap$ = $tmap$$5$$;
  this.$LayerName$ = "cities";
  this.$ClientId$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$ = $eventHandler$$3$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new D.$DvtMatrix$$
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$7$$, $pzcMatrix$$9$$) {
  this.$_animation$ && (this.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  this.$PzcMatrix$ = $pzcMatrix$$9$$;
  this.$_oldDataLayer$ = this.$getDataLayer$($dataLayer$$7$$.$getClientId$());
  this.$DataLayers$[$dataLayer$$7$$.$getClientId$()] = $dataLayer$$7$$;
  $dataLayer$$7$$.$render$(this.$PzcMatrix$);
  $dataLayer$$7$$.$HandleZoomEvent$(new D.$DvtZoomEvent$$("zoomed"), this.$PzcMatrix$);
  if(this.$_oldDataLayer$) {
    var $anim$$15_oldContainers$$ = $dataLayer$$7$$.$getAnimation$(), $animDur$$ = $dataLayer$$7$$.$getAnimationDuration$();
    if(D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$15_oldContainers$$)) {
      for(var $anim1_bounds1$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$), $bounds2_oldNonScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)(this.$_oldDataLayer$), $anim2_i$$293$$ = 0;$anim2_i$$293$$ < $bounds2_oldNonScaledContainers$$.length;$anim2_i$$293$$++) {
        var $rect$$16$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$);
        $rect$$16$$.$setFill$(D.$JSCompiler_alias_NULL$$);
        $bounds2_oldNonScaledContainers$$[$anim2_i$$293$$].$addChild$($rect$$16$$)
      }
      for(var $newNonScaledContainers_oldScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$7$$), $anim2_i$$293$$ = 0;$anim2_i$$293$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_i$$293$$++) {
        $rect$$16$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$), $rect$$16$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_i$$293$$].$addChild$($rect$$16$$)
      }
      $anim1_bounds1$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$_context$, $anim$$15_oldContainers$$, $bounds2_oldNonScaledContainers$$, $newNonScaledContainers_oldScaledContainers$$, $anim1_bounds1$$, $animDur$$);
      $bounds2_oldNonScaledContainers$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$);
      $newNonScaledContainers_oldScaledContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$];
      for($anim2_i$$293$$ = 0;$anim2_i$$293$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_i$$293$$++) {
        $rect$$16$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$), $rect$$16$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_i$$293$$].$addChild$($rect$$16$$)
      }
      for(var $newScaledContainers$$ = [$dataLayer$$7$$.$_dataAreaLayer$], $anim2_i$$293$$ = 0;$anim2_i$$293$$ < $newScaledContainers$$.length;$anim2_i$$293$$++) {
        $rect$$16$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$), $rect$$16$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newScaledContainers$$[$anim2_i$$293$$].$addChild$($rect$$16$$)
      }
      $anim2_i$$293$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$_context$, $anim$$15_oldContainers$$, $newNonScaledContainers_oldScaledContainers$$, $newScaledContainers$$, $bounds2_oldNonScaledContainers$$, $animDur$$);
      this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_tmap$.$_context$, [$anim1_bounds1$$, $anim2_i$$293$$])
    }else {
      $anim$$15_oldContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$];
      for($anim2_i$$293$$ = 0;$anim2_i$$293$$ < $anim$$15_oldContainers$$.length;$anim2_i$$293$$++) {
        $anim$$15_oldContainers$$[$anim2_i$$293$$].getParent().removeChild($anim$$15_oldContainers$$[$anim2_i$$293$$])
      }
      this.$PostDataLayerUpdate$()
    }
    if(this.$_animation$) {
      this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
      var $thisRef$$11$$ = this;
      this.$_animation$.$setOnEnd$(function() {
        $thisRef$$11$$.$OnAnimationEnd$($dataLayer$$7$$)
      }, this);
      this.$PreDataLayerUpdate$();
      this.$_animation$.play()
    }
  }else {
    this.$PostDataLayerUpdate$(), (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$12$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$12$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$ClientId$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$10$$) {
  this.$PzcMatrix$ = $pzcMatrix$$10$$;
  for(var $id$$150$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$150$$].$render$($pzcMatrix$$10$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$) {
  for(var $id$$151$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$151$$].reset($fadeOutContainer$$, $doNotResetAreas$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$282$$, $pzcMatrix$$11$$) {
  this.$PzcMatrix$ = $pzcMatrix$$11$$;
  for(var $id$$152$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$152$$].$HandleZoomEvent$($event$$282$$, $pzcMatrix$$11$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$12$$) {
  this.$PzcMatrix$ = $pzcMatrix$$12$$;
  for(var $id$$153$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$153$$].$HandlePanEvent$($pzcMatrix$$12$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$8_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $newNonScaledContainers$$1_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $i$$294$$ = 0;$i$$294$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$294$$++) {
      var $parent$$46$$ = $newNonScaledContainers$$1_oldContainers$$1$$[$i$$294$$].getParent();
      $parent$$46$$ && $parent$$46$$.removeChild($newNonScaledContainers$$1_oldContainers$$1$$[$i$$294$$])
    }
  }
  $newNonScaledContainers$$1_oldContainers$$1$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$8_newScaledContainers$$1$$);
  for($i$$294$$ = 0;$i$$294$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$294$$++) {
    $newNonScaledContainers$$1_oldContainers$$1$$[$i$$294$$].$removeChildAt$($newNonScaledContainers$$1_oldContainers$$1$$[$i$$294$$].$getNumChildren$() - 1)
  }
  $dataLayer$$8_newScaledContainers$$1$$ = [$dataLayer$$8_newScaledContainers$$1$$.$_dataAreaLayer$];
  for($i$$294$$ = 0;$i$$294$$ < $dataLayer$$8_newScaledContainers$$1$$.length;$i$$294$$++) {
    $dataLayer$$8_newScaledContainers$$1$$[$i$$294$$].$removeChildAt$($dataLayer$$8_newScaledContainers$$1$$[$i$$294$$].$getNumChildren$() - 1)
  }
  this.$PostDataLayerUpdate$();
  (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$);
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
D.$DvtMapAreaLayer$$ = function $$DvtMapAreaLayer$$$($tmap$$7$$, $layerName$$23$$, $clientId$$23$$, $labelDisplay$$5$$, $labelType$$2$$, $eventHandler$$4$$) {
  this.Init($tmap$$7$$, $layerName$$23$$, $clientId$$23$$, $labelDisplay$$5$$, $labelType$$2$$, $eventHandler$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaLayer$$, D.$DvtMapLayer$$, "DvtMapAreaLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$8$$, $layerName$$24$$, $clientId$$24$$, $labelDisplay$$6$$, $labelType$$3$$, $eventHandler$$5$$) {
  D.$DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$8$$, $eventHandler$$5$$);
  this.$_labelDisplay$ = $labelDisplay$$6$$;
  this.$LayerName$ = $layerName$$24$$;
  this.$ClientId$ = $clientId$$24$$;
  this.$_labelType$ = $labelType$$3$$;
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
  for(var $area$$3$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$3$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$3$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($area$$6$$) {
  return!this.$_labelInfo$ ? D.$JSCompiler_alias_NULL$$ : this.$_labelInfo$[$area$$6$$]
};
D.$JSCompiler_StaticMethods_getChildrenForArea$$ = function $$JSCompiler_StaticMethods_getChildrenForArea$$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$7$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$7$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$7$$].split(",") : []
};
D.$DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = (0,D.$JSCompiler_get$$)("$_labelDisplay$");
D.$JSCompiler_StaticMethods_setIsolatedArea$$ = function $$JSCompiler_StaticMethods_setIsolatedArea$$$($JSCompiler_StaticMethods_setIsolatedArea$self$$, $isolatedArea$$) {
  $JSCompiler_StaticMethods_setIsolatedArea$self$$.$_isolatedArea$ = $isolatedArea$$;
  $JSCompiler_StaticMethods_setIsolatedArea$self$$.$_layerDim$ = D.$JSCompiler_alias_NULL$$;
  for(var $area$$10$$ in $JSCompiler_StaticMethods_setIsolatedArea$self$$.$AreaShapes$) {
    $area$$10$$ != $isolatedArea$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$.$_renderArea$[$area$$10$$] = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
  if(!this.$_layerDim$) {
    if(this.$_isolatedArea$) {
      this.$_layerDim$ = window.DvtPathUtils.$getDimensions$(window.DvtPathUtils.$createPathArray$(D.$DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)))
    }else {
      if("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
        var $dim$$66$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)(this.$AreaContainer$.$getDimensions$(), this.$_tmap$.$_dataAreaLayers$.$getDimensions$());
        0 < $dim$$66$$.$w$ && 0 < $dim$$66$$.$h$ && (this.$_layerDim$ = $dim$$66$$)
      }
    }
  }
  return this.$_layerDim$
};
D.$JSCompiler_StaticMethods__createAreaAndLabel$$ = function $$JSCompiler_StaticMethods__createAreaAndLabel$$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$11$$, $bForceUpdateArea_label$$11_labelText_mapArea$$) {
  var $areaDim_areaShape$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$11$$];
  if($areaDim_areaShape$$ && (($bForceUpdateArea_label$$11_labelText_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$11$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$11$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$11$$] || ($bForceUpdateArea_label$$11_labelText_mapArea$$ = new D.$DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim_areaShape$$, $area$$11$$, 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$11$$] = $bForceUpdateArea_label$$11_labelText_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim_areaShape$$, $bForceUpdateArea_label$$11_labelText_mapArea$$), $bForceUpdateArea_label$$11_labelText_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$11$$] ? 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$11$$][1] : D.$JSCompiler_alias_NULL$$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$11$$] && ($bForceUpdateArea_label$$11_labelText_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$11$$], !$bForceUpdateArea_label$$11_labelText_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && 
  ($bForceUpdateArea_label$$11_labelText_mapArea$$ = "short" == $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$11$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$11$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$11$$] ? $bForceUpdateArea_label$$11_labelText_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$11_labelText_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$11$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim_areaShape$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim_areaShape$$), $bForceUpdateArea_label$$11_labelText_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$11_labelText_mapArea$$, [[$areaDim_areaShape$$.x, $areaDim_areaShape$$.y, 
    $areaDim_areaShape$$.$w$, $areaDim_areaShape$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$11$$] = $bForceUpdateArea_label$$11_labelText_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && $bForceUpdateArea_label$$11_labelText_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
};
D.$JSCompiler_StaticMethods__addAreaAndLabel$$ = function $$JSCompiler_StaticMethods__addAreaAndLabel$$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$12$$, $fadeInObjs$$2$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$12$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$12$$]);
    var $label$$12$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$12$$];
    $label$$12$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$12$$] ? $label$$12$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$12$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$12$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$12$$]);
    $fadeInObjs$$2$$ && ($fadeInObjs$$2$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$12$$]), $label$$12$$ && ($fadeInObjs$$2$$.push($label$$12$$), $fadeInObjs$$2$$.push($label$$12$$.$_leaderLine$)))
  }
};
D.$DvtMapAreaLayer$$.prototype.$updateAreaShape$ = function $$DvtMapAreaLayer$$$$$updateAreaShape$$($area$$13$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_FALSE$$;
    var $cmd$$7_layerDim$$;
    this.$_paths$ = ($cmd$$7_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? D.$DvtBaseMapManager$$.$simplifyAreaPaths$(D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$7_layerDim$$.$w$, $cmd$$7_layerDim$$.$h$, this.$_tmap$.$_width$, this.$_tmap$.$_height$, this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$7_layerDim$$ = this.$_paths$[$area$$13$$];
  this.$AreaShapes$[$area$$13$$] && $cmd$$7_layerDim$$ ? this.$AreaShapes$[$area$$13$$].$setCmds$($cmd$$7_layerDim$$) : delete this.$AreaShapes$[$area$$13$$]
};
D.$JSCompiler_StaticMethods_resetRenderedAreas$$ = function $$JSCompiler_StaticMethods_resetRenderedAreas$$$($JSCompiler_StaticMethods_resetRenderedAreas$self$$) {
  for(var $area$$14$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$_renderArea$[$area$$14$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$_renderLabel$[$area$$14$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$15$$, $pzcMatrix$$14$$, $topLayerName$$1$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dataLayer$$15$$, $pzcMatrix$$14$$, $topLayerName$$1$$);
  if($topLayerName$$1$$ == this.$LayerName$) {
    for(var $area$$15$$ in this.$AreaShapes$) {
      (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$15$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$15$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$15$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$15$$) {
  this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_TRUE$$;
  for(var $area$$16$$ in this.$AreaShapes$) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$16$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$16$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$16$$)
  }
  D.$DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PreDataLayerUpdate$$() {
  for(var $area$$17$$ in this.$_renderArea$) {
    this.$_renderArea$[$area$$17$$] || ((0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$17$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$17$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$18$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$18$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$18$$]);
      var $label$$13_leaderLine$$ = this.$_areaLabels$[$area$$18$$];
      $label$$13_leaderLine$$ && (this.$_renderedLabels$[$area$$18$$] = D.$JSCompiler_alias_FALSE$$, this.$LabelContainer$.removeChild($label$$13_leaderLine$$), ($label$$13_leaderLine$$ = $label$$13_leaderLine$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$13_leaderLine$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$1$$, $fadeInObjs$$4$$) {
  for(var $i$$inline_3273$$ = 0;$i$$inline_3273$$ < $areas$$1$$.length;$i$$inline_3273$$++) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_3273$$], D.$JSCompiler_alias_FALSE$$), this.$_renderArea$[$areas$$1$$[$i$$inline_3273$$]] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_3273$$], $fadeInObjs$$4$$)
  }
  for(var $id$$157$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$157$$].$discloseAreas$($areas$$1$$, $fadeInObjs$$4$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$2$$, $fadeOutObjs$$) {
  for(var $childAreaLayer_id$$158$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$158$$].$undiscloseAreas$($areas$$2$$, $fadeOutObjs$$)
  }
  $childAreaLayer_id$$158$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this.$_tmap$, this.$LayerName$);
  for(var $i$$298$$ = 0;$i$$298$$ < $areas$$2$$.length;$i$$298$$++) {
    var $areaName$$1$$ = $areas$$2$$[$i$$298$$];
    if(this.$Areas$[$areaName$$1$$]) {
      var $idx$$23$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areaName$$1$$);
      -1 !== $idx$$23$$ && (this.$_disclosed$.splice($idx$$23$$, 1), $fadeOutObjs$$.push(this.$Areas$[$areaName$$1$$]))
    }
    $childAreaLayer_id$$158$$ && $childAreaLayer_id$$158$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)(this, $areaName$$1$$), $fadeOutObjs$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$1$$, $doNotResetAreas$$1$$) {
  D.$DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$1$$, $doNotResetAreas$$1$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$1$$), this.$_disclosed$ = [])
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$293$$, $pzcMatrix$$16$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$293$$, $pzcMatrix$$16$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$19$$ in this.$Areas$) {
      this.$Areas$[$area$$19$$].$HandleZoomEvent$($pzcMatrix$$16$$)
    }
  }
  for($area$$19$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$19$$]) {
      var $label$$14$$ = this.$_areaLabels$[$area$$19$$];
      $label$$14$$ && $label$$14$$.update($pzcMatrix$$16$$)
    }
  }
};
D.$DvtMapCustomAreaLayer$$ = function $$DvtMapCustomAreaLayer$$$($tmap$$2$$, $layerName$$7$$, $clientId$$6$$, $labelDisplay$$1$$, $labelType$$, $eventHandler$$) {
  this.Init($tmap$$2$$, $layerName$$7$$, $clientId$$6$$, $labelDisplay$$1$$, $labelType$$, $eventHandler$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapCustomAreaLayer$$, D.$DvtMapAreaLayer$$, "DvtMapCustomAreaLayer");
D.$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$3$$, $layerName$$8$$, $clientId$$7$$, $labelDisplay$$2$$, $labelType$$1$$, $eventHandler$$1$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$3$$, $layerName$$8$$, $clientId$$7$$, $labelDisplay$$2$$, $labelType$$1$$, $eventHandler$$1$$)
};
D.$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new D.$DvtRectangle$$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$ = function $$JSCompiler_StaticMethods__selectImageBasedOnResolution$$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$) {
  var $widthRes$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.$_tmap$.$_width$, $heightRes$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.$_tmap$.$_height$;
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.$_areaLayerImages$;
  for(var $i$$287$$ = 0;$i$$287$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.length;$i$$287$$++) {
    var $height$$50_image$$12$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$[$i$$287$$], $source$$12$$ = $height$$50_image$$12$$.source, $width$$57$$ = $height$$50_image$$12$$.width, $height$$50_image$$12$$ = $height$$50_image$$12$$.height;
    if($source$$12$$ && -1 < $source$$12$$.search(".svg") || $width$$57$$ >= $widthRes$$ && $height$$50_image$$12$$ >= $heightRes$$ || $i$$287$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.length - 1) {
      return $source$$12$$
    }
  }
};
D.$JSCompiler_StaticMethods_setAreaLayerImage$$ = function $$JSCompiler_StaticMethods_setAreaLayerImage$$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$, $images$$11$$) {
  var $refWidth_shape$$58$$ = D.$JSCompiler_alias_NULL$$, $isRTL$$4$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_tmap$.$_context$);
  if($images$$11$$ && 0 < $images$$11$$.length) {
    var $refWidth_shape$$58$$ = $images$$11$$[0].width, $refHeight$$ = $images$$11$$[0].height;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_layerWidth$ = $refWidth_shape$$58$$;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_layerHeight$ = $refHeight$$;
    for(var $locImages$$ = [], $i$$288$$ = 0;$i$$288$$ < $images$$11$$.length;$i$$288$$++) {
      $isRTL$$4$$ && "rtl" == $images$$11$$[$i$$288$$].dir ? $locImages$$.push($images$$11$$[$i$$288$$]) : !$isRTL$$4$$ && "ltr" == $images$$11$$[$i$$288$$].dir && $locImages$$.push($images$$11$$[$i$$288$$])
    }
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_areaLayerImages$ = 0 < $locImages$$.length ? $locImages$$ : $images$$11$$;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_imageSrc$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$);
    $refWidth_shape$$58$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_tmap$.$_context$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_imageSrc$, 0, 0, $refWidth_shape$$58$$, $refHeight$$)
  }
  $refWidth_shape$$58$$ && ((0,D.$JSCompiler_StaticMethods_setAreaNames$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$, {image:[D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$AreaShapes$ = {image:$refWidth_shape$$58$$})
};
D.$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$280$$, $pzcMatrix$$5$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$280$$, $pzcMatrix$$5$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$[window.areaName].$setSrc$(this.$_imageSrc$))
  }
};
D.$DvtMapDataLayer$$ = function $$DvtMapDataLayer$$$($tmap$$11$$, $parentLayer$$3$$, $clientId$$30$$, $eventHandler$$6$$) {
  this.Init($tmap$$11$$, $parentLayer$$3$$, $clientId$$30$$, $eventHandler$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataLayer$$, D.$DvtObj$$, "DvtMapDataLayer");
D.$DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($tmap$$12$$, $parentLayer$$4$$, $clientId$$31$$, $eventHandler$$7$$) {
  this.$_tmap$ = $tmap$$12$$;
  this.$_clientId$ = $clientId$$31$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_eventHandler$ = $eventHandler$$7$$;
  this.$_dragSource$ = new D.$DvtDragSource$$($tmap$$12$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_dataAreaLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataPointLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataLabelLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$4$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
D.$JSCompiler_StaticMethods_getNonScaledContainers$$ = function $$JSCompiler_StaticMethods_getNonScaledContainers$$$($JSCompiler_StaticMethods_getNonScaledContainers$self$$) {
  var $containers$$1$$ = [$JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataLabelLayer$];
  $JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$1$$.push($JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataPointLayer$);
  return $containers$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableAreaObjects$$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$2$$ = [], $i$$313$$ = 0;$i$$313$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$313$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$313$$].$isDrilled$() || $navigables$$2$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$313$$])
  }
  return $navigables$$2$$
};
D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$3$$ = [], $i$$314$$ = 0;$i$$314$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$314$$++) {
    for(var $j$$26$$ = 0;$j$$26$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$26$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$314$$].$AreaId$ == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$26$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$314$$].$isDrilled$() || $navigables$$3$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$314$$]))
    }
  }
  return $navigables$$3$$
};
D.$JSCompiler_StaticMethods_addAreaObject$$ = function $$JSCompiler_StaticMethods_addAreaObject$$$($JSCompiler_StaticMethods_addAreaObject$self$$, $obj$$228$$) {
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_areaObjs$.push($obj$$228$$);
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_eventHandler$.$associate$($obj$$228$$.$getDisplayable$(), $obj$$228$$);
  $obj$$228$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaLayer$
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
  var $JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$;
  $JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$];
  var $areaDim$$1_displayable$$33_displayable$$inline_3488$$ = $JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$.$getDisplayable$(), $pathToCopy$$inline_3489$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$.$AreaId$];
  $pathToCopy$$inline_3489$$ ? ($areaDim$$1_displayable$$33_displayable$$inline_3488$$.$setCmds$($pathToCopy$$inline_3489$$.$getCmds$()), $JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$ = D.$JSCompiler_alias_TRUE$$) : ($JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$), -1 !== $JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$ && 
  $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$, 1), $JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$ = D.$JSCompiler_alias_FALSE$$);
  if($JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$) {
    $areaDim$$1_displayable$$33_displayable$$inline_3488$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim$$1_displayable$$33_displayable$$inline_3488$$);
    if($JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$.$_boundRectangle$.length || ($areaDim$$1_displayable$$33_displayable$$inline_3488$$ = $areaDim$$1_displayable$$33_displayable$$inline_3488$$.$getDimensions$(), $JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$.$_boundRectangle$.push($areaDim$$1_displayable$$33_displayable$$inline_3488$$)), $JSCompiler_inline_result$$355_areaObj$$inline_3487_idx$$inline_9332_label$$17$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$21$$) {
  this.$_bFixPatterns$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pzcMatrix$ = $pzcMatrix$$21$$;
  var $areaLabelsToRemove$$ = {};
  this.$_dataObjs$.sort(function compare($pzcMatrix$$21$$, $areaLabelsToRemove$$) {
    return $pzcMatrix$$21$$.$getSize$() < $areaLabelsToRemove$$.$getSize$() ? 1 : $pzcMatrix$$21$$.$getSize$() > $areaLabelsToRemove$$.$getSize$() ? -1 : 0
  });
  for(var $i$$315$$ = 0;$i$$315$$ < this.$_dataObjs$.length;$i$$315$$++) {
    var $dataObj$$10_regionId$$10$$ = this.$_dataObjs$[$i$$315$$], $displayable$$34$$ = $dataObj$$10_regionId$$10$$.$getDisplayable$(), $json$$3_label$$18$$ = $dataObj$$10_regionId$$10$$.$getLabel$();
    if($json$$3_label$$18$$) {
      if($displayable$$34$$.$getRotation$()) {
        var $container$$41$$ = new D.$DvtContainer$$($displayable$$34$$.$_context$);
        this.$_dataPointLayer$.$addChild$($container$$41$$);
        $container$$41$$.$addChild$($displayable$$34$$);
        $container$$41$$.$addChild$($json$$3_label$$18$$)
      }else {
        this.$_dataPointLayer$.$addChild$($displayable$$34$$), $displayable$$34$$.$addChild$($json$$3_label$$18$$)
      }
      $dataObj$$10_regionId$$10$$.$PositionLabel$($pzcMatrix$$21$$)
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$34$$)
    }
    if($dataObj$$10_regionId$$10$$ instanceof D.$DvtMapDataComponent$$) {
      if($json$$3_label$$18$$ = $dataObj$$10_regionId$$10$$.$_json$) {
        $displayable$$34$$.$render$(window.JSON.parse($json$$3_label$$18$$), $dataObj$$10_regionId$$10$$.getWidth(), $dataObj$$10_regionId$$10$$.getHeight())
      }else {
        continue
      }
    }
    ($dataObj$$10_regionId$$10$$ = $dataObj$$10_regionId$$10$$.$AreaId$) && ($areaLabelsToRemove$$[$dataObj$$10_regionId$$10$$] = D.$JSCompiler_alias_TRUE$$)
  }
  for($i$$315$$ = 0;$i$$315$$ < this.$_areaObjs$.length;$i$$315$$++) {
    $areaLabelsToRemove$$[this.$_areaObjs$[$i$$315$$].$AreaId$] && this.$_areaObjs$[$i$$315$$].$setLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$315$$) || $i$$315$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$5$$, $fadeInObjs$$5$$, $pzcMatrix$$22_regionId$$11$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$22_regionId$$11$$;
  for(var $drilledAreas$$ = [], $j$$27$$ = 0;$j$$27$$ < $areas$$5$$.length;$j$$27$$++) {
    for(var $i$$316_label$$19_leaderLine$$1$$ = 0;$i$$316_label$$19_leaderLine$$1$$ < this.$_areaObjs$.length;$i$$316_label$$19_leaderLine$$1$$++) {
      if(this.$_areaObjs$[$i$$316_label$$19_leaderLine$$1$$].$AreaId$ == $areas$$5$$[$j$$27$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$316_label$$19_leaderLine$$1$$].$AreaId$);
        (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$316_label$$19_leaderLine$$1$$);
        var $displayable$$35$$ = this.$_areaObjs$[$i$$316_label$$19_leaderLine$$1$$].$getDisplayable$();
        $fadeInObjs$$5$$.push($displayable$$35$$);
        (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)($displayable$$35$$, $pzcMatrix$$22_regionId$$11$$);
        if($i$$316_label$$19_leaderLine$$1$$ = this.$_areaObjs$[$i$$316_label$$19_leaderLine$$1$$].$getLabel$()) {
          $fadeInObjs$$5$$.push($i$$316_label$$19_leaderLine$$1$$), ($i$$316_label$$19_leaderLine$$1$$ = $i$$316_label$$19_leaderLine$$1$$.$_leaderLine$) && $fadeInObjs$$5$$.push($i$$316_label$$19_leaderLine$$1$$)
        }
        break
      }
    }
  }
  for($i$$316_label$$19_leaderLine$$1$$ = 0;$i$$316_label$$19_leaderLine$$1$$ < this.$_dataObjs$.length;$i$$316_label$$19_leaderLine$$1$$++) {
    for($j$$27$$ = 0;$j$$27$$ < $areas$$5$$.length;$j$$27$$++) {
      $pzcMatrix$$22_regionId$$11$$ = this.$_dataObjs$[$i$$316_label$$19_leaderLine$$1$$].$AreaId$, $displayable$$35$$ = this.$_dataObjs$[$i$$316_label$$19_leaderLine$$1$$].$getDisplayable$(), $pzcMatrix$$22_regionId$$11$$ != D.$JSCompiler_alias_NULL$$ ? $pzcMatrix$$22_regionId$$11$$ == $areas$$5$$[$j$$27$$] && (this.$_dataPointLayer$.$addChild$($displayable$$35$$), $fadeInObjs$$5$$.push($displayable$$35$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$35$$), $fadeInObjs$$5$$.push($displayable$$35$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$6$$, $fadeOutObjs$$2$$) {
  for(var $j$$28$$ = 0;$j$$28$$ < $areas$$6$$.length;$j$$28$$++) {
    for(var $i$$317_label$$20$$ = 0;$i$$317_label$$20$$ < this.$_areaObjs$.length;$i$$317_label$$20$$++) {
      if(this.$_areaObjs$[$i$$317_label$$20$$].$AreaId$ == $areas$$6$$[$j$$28$$]) {
        this.$_areaObjs$[$i$$317_label$$20$$].$isDrilled$() && this.$_areaObjs$[$i$$317_label$$20$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
        this.$_areaObjs$[$i$$317_label$$20$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$317_label$$20$$]);
        var $idx$$25$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areas$$6$$[$j$$28$$]);
        if(-1 < $idx$$25$$ && (this.$_disclosed$.splice($idx$$25$$, 1), $fadeOutObjs$$2$$.push(this.$_areaObjs$[$i$$317_label$$20$$].$getDisplayable$()), $i$$317_label$$20$$ = this.$_areaObjs$[$i$$317_label$$20$$].$getLabel$())) {
          $fadeOutObjs$$2$$.push($i$$317_label$$20$$), $fadeOutObjs$$2$$.push($i$$317_label$$20$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$2$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$29_selectedObjs$$1$$ = this.$_selectionHandler$.getSelection(), $i$$320_label$$23$$ = 0;$i$$320_label$$23$$ < $j$$29_selectedObjs$$1$$.length;$i$$320_label$$23$$++) {
      (!$doNotResetAreas$$2$$ || $doNotResetAreas$$2$$ && -1 == D.$DvtArrayUtils$$.$getIndex$($doNotResetAreas$$2$$, $j$$29_selectedObjs$$1$$[$i$$320_label$$23$$].$AreaId$)) && this.$_selectionHandler$.$removeFromSelection$($j$$29_selectedObjs$$1$$[$i$$320_label$$23$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$29_selectedObjs$$1$$ = 0;$j$$29_selectedObjs$$1$$ < this.$_drilled$.length;$j$$29_selectedObjs$$1$$++) {
      for($i$$320_label$$23$$ = 0;$i$$320_label$$23$$ < this.$_areaObjs$.length;$i$$320_label$$23$$++) {
        if(this.$_areaObjs$[$i$$320_label$$23$$].$AreaId$ == this.$_drilled$[$j$$29_selectedObjs$$1$$]) {
          this.$_areaObjs$[$i$$320_label$$23$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$37$$ = this.$_areaObjs$[$i$$320_label$$23$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$37$$);
          $fadeOutObjs$$4$$.push($displayable$$37$$);
          if($i$$320_label$$23$$ = this.$_areaObjs$[$i$$320_label$$23$$].$getLabel$()) {
            $i$$320_label$$23$$.update(this.$_pzcMatrix$), $fadeOutObjs$$4$$.push($i$$320_label$$23$$), $fadeOutObjs$$4$$.push($i$$320_label$$23$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$320_label$$23$$ = 0;$i$$320_label$$23$$ < this.$_dataObjs$.length;$i$$320_label$$23$$++) {
        if(this.$_dataObjs$[$i$$320_label$$23$$].$AreaId$ == this.$_drilled$[$j$$29_selectedObjs$$1$$]) {
          $displayable$$37$$ = this.$_dataObjs$[$i$$320_label$$23$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$37$$);
          $fadeOutObjs$$4$$.push($displayable$$37$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$294$$, $pzcMatrix$$23$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$23$$;
  var $i$$321_zoom$$5$$ = $pzcMatrix$$23$$.$_a$, $areaObjs$$1_dataObjs_j$$30_type$$153$$ = $event$$294$$.$getSubType$();
  if(this.$_bFixPatterns$ && "zoomed" == $areaObjs$$1_dataObjs_j$$30_type$$153$$) {
    this.$_bFixPatterns$ = D.$JSCompiler_alias_FALSE$$;
    for($areaObjs$$1_dataObjs_j$$30_type$$153$$ = 0;$areaObjs$$1_dataObjs_j$$30_type$$153$$ < this.$_areaObjs$.length;$areaObjs$$1_dataObjs_j$$30_type$$153$$++) {
      var $displayable$$38$$ = this.$_areaObjs$[$areaObjs$$1_dataObjs_j$$30_type$$153$$].$getDisplayable$(), $fill$$21$$ = $displayable$$38$$.$_ptFill$;
      if($fill$$21$$) {
        var $scaledFill$$ = new D.$DvtPatternFill$$;
        $fill$$21$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new D.$DvtMatrix$$(1 / $i$$321_zoom$$5$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1 / $i$$321_zoom$$5$$));
        $displayable$$38$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs$$1_dataObjs_j$$30_type$$153$$ = this.$_areaObjs$;
  for($i$$321_zoom$$5$$ = 0;$i$$321_zoom$$5$$ < $areaObjs$$1_dataObjs_j$$30_type$$153$$.length;$i$$321_zoom$$5$$++) {
    $areaObjs$$1_dataObjs_j$$30_type$$153$$[$i$$321_zoom$$5$$].$HandleZoomEvent$($pzcMatrix$$23$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs$$1_dataObjs_j$$30_type$$153$$ = this.$_dataObjs$;
    for($i$$321_zoom$$5$$ = 0;$i$$321_zoom$$5$$ < $areaObjs$$1_dataObjs_j$$30_type$$153$$.length;$i$$321_zoom$$5$$++) {
      $areaObjs$$1_dataObjs_j$$30_type$$153$$[$i$$321_zoom$$5$$].$HandleZoomEvent$($pzcMatrix$$23$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_set$$)("$_pzcMatrix$");
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && ((0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$230_rowKeys$$1$$) {
  if(this.$_selectionHandler$) {
    $obj$$230_rowKeys$$1$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$230_rowKeys$$1$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$($obj$$230_rowKeys$$1$$));
    $obj$$230_rowKeys$$1$$ = [];
    for(var $selection$$6$$ = this.$_selectionHandler$.getSelection(), $i$$322$$ = 0;$i$$322$$ < $selection$$6$$.length;$i$$322$$++) {
      $obj$$230_rowKeys$$1$$.push($selection$$6$$[$i$$322$$].getId())
    }
    return $obj$$230_rowKeys$$1$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$9$$ = [], $selection$$7$$ = this.$_selectionHandler$.getSelection(), $i$$323$$ = 0;$i$$323$$ < $selection$$7$$.length;$i$$323$$++) {
    $displayables$$9$$.push($selection$$7$$[$i$$323$$].$getDisplayable$())
  }
  return $displayables$$9$$
};
D.$DvtThematicMapKeyboardHandler$$ = function $$DvtThematicMapKeyboardHandler$$$($tmap$$, $manager$$8$$) {
  this.Init($tmap$$, $manager$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtThematicMapKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$1$$, $manager$$9$$) {
  D.$DvtThematicMapKeyboardHandler$$.$superclass$.Init($tmap$$1$$, $manager$$9$$);
  this.$_tmap$ = $tmap$$1$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$276$$) {
  return this.$isNavigationEvent$($event$$276$$) && !$event$$276$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$277$$) {
  var $focusObj_keyCode$$11$$ = $event$$277$$.keyCode;
  if(221 == $focusObj_keyCode$$11$$) {
    var $focusObj_keyCode$$11$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this.$_eventManager$), $navigables$$1$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$);
    $focusObj_keyCode$$11$$ instanceof D.$DvtMapDataArea$$ && 0 < $navigables$$1$$.length && ($focusObj_keyCode$$11$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj_keyCode$$11$$, $event$$277$$, $navigables$$1$$));
    this.$_eventManager$.$setFocus$($focusObj_keyCode$$11$$);
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj_keyCode$$11$$)
  }else {
    219 == $focusObj_keyCode$$11$$ ? ($focusObj_keyCode$$11$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this.$_eventManager$), $navigables$$1$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$), !($focusObj_keyCode$$11$$ instanceof D.$DvtMapDataArea$$) && 0 < $navigables$$1$$.length && ($focusObj_keyCode$$11$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj_keyCode$$11$$, $event$$277$$, $navigables$$1$$)), this.$_eventManager$.$setFocus$($focusObj_keyCode$$11$$), 
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj_keyCode$$11$$)) : ($focusObj_keyCode$$11$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$277$$), this.$isNavigationEvent$($event$$277$$) && !$event$$277$$.ctrlKey && (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj_keyCode$$11$$))
  }
  return $focusObj_keyCode$$11$$
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$278$$) {
  return 32 == $event$$278$$.keyCode && $event$$278$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$279_keyCode$$12$$) {
  var $isNavigable$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$279_keyCode$$12$$);
  if(!$isNavigable$$ && ($event$$279_keyCode$$12$$ = $event$$279_keyCode$$12$$.keyCode, 219 == $event$$279_keyCode$$12$$ || 221 == $event$$279_keyCode$$12$$)) {
    $isNavigable$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$
};
D.$DvtThematicMapEventManager$$ = function $$DvtThematicMapEventManager$$$($context$$398$$, $callback$$85$$, $callbackObj$$58$$) {
  this.Init($context$$398$$, $callback$$85$$, $callbackObj$$58$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapEventManager$$, D.$DvtEventManager$$, "DvtThematicMapEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$399$$, $callback$$86$$, $callbackObj$$59$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$399$$, $callback$$86$$, $callbackObj$$59$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$59$$;
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$5$$) {
  if($logicalObj$$5$$ && $logicalObj$$5$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$5$$.$getDataLayer$().$getClientId$()]
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$, $handler$$16$$) {
  this.$_selectionHandlers$[$dataLayerId$$] = $handler$$16$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = (0,D.$JSCompiler_set$$)("$_drillMode$");
D.$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$14$$, $obj$$214$$) {
  var $selectionHandler$$9$$ = this.$_selectionHandlers$[$clientId$$14$$];
  $selectionHandler$$9$$ && $selectionHandler$$9$$.$removeFromSelection$($obj$$214$$)
};
D.$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$15_selectionHandler$$10$$) {
  ($clientId$$15_selectionHandler$$10$$ = this.$_selectionHandlers$[$clientId$$15_selectionHandler$$10$$]) && $clientId$$15_selectionHandler$$10$$.$clearSelection$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$283$$) {
  var $obj$$215$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$283$$.target);
  $obj$$215$$ && ($obj$$215$$.$getShowPopupBehaviors$ && $obj$$215$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$215$$.$getDataLayer$().$getClientId$());
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$283$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$284$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$284$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$285$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$285$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$286$$) {
  if(!this.$_bDragged$) {
    var $obj$$216$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$286$$.target);
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$216$$);
    if(!$obj$$216$$ || !$obj$$216$$.$isSelectable$ || !$obj$$216$$.$isSelectable$()) {
      for(var $clientId$$16$$ in this.$_selectionHandlers$) {
        if(this.$_selectionHandlers$[$clientId$$16$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$286$$.ctrlKey)) {
          var $selectionEvent$$1$$ = new D.$DvtSelectionEvent$$([]);
          (0,D.$JSCompiler_StaticMethods_addParam$$)($selectionEvent$$1$$, "clientId", $clientId$$16$$);
          this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$1$$)
        }
      }
    }
    D.$DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$286$$);
    this.$_handleClick$($obj$$216$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$217$$) {
  $obj$$217$$ instanceof D.$DvtMapDataObject$$ && ($obj$$217$$.$_hasAction$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $obj$$217$$) : $obj$$217$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$217$$.$getDataLayer$().$getClientId$()))
};
D.$JSCompiler_StaticMethods_HandleAction$$ = function $$JSCompiler_StaticMethods_HandleAction$$$($JSCompiler_StaticMethods_HandleAction$self$$, $obj$$218$$) {
  var $actionEvent$$ = new D.$DvtMapActionEvent$$($obj$$218$$.$getClientId$(), $obj$$218$$.getId(), $obj$$218$$.$_action$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$, "clientId", $obj$$218$$.$getDataLayer$().$getClientId$());
  $JSCompiler_StaticMethods_HandleAction$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_HandleAction$self$$.$_callback$.call($JSCompiler_StaticMethods_HandleAction$self$$.$_callbackObj$, $actionEvent$$)
};
D.$JSCompiler_StaticMethods_SetClickInfo$$ = function $$JSCompiler_StaticMethods_SetClickInfo$$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$219$$) {
  var $clientId$$17$$ = D.$JSCompiler_alias_NULL$$, $dataLayer$$9_mapLayer$$ = D.$JSCompiler_alias_NULL$$, $area$$2$$ = D.$JSCompiler_alias_NULL$$;
  $obj$$219$$ && ($obj$$219$$ instanceof D.$DvtMapDataObject$$ ? $area$$2$$ = $obj$$219$$.$getDisplayable$() : $obj$$219$$ instanceof D.$DvtMapArea$$ && ($area$$2$$ = $obj$$219$$), $obj$$219$$.$getDataLayer$ && ($dataLayer$$9_mapLayer$$ = $obj$$219$$.$getDataLayer$(), $clientId$$17$$ = $dataLayer$$9_mapLayer$$.$getClientId$(), $dataLayer$$9_mapLayer$$ = $dataLayer$$9_mapLayer$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_3243$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_3243$$.$_clickedLayerName$ = $dataLayer$$9_mapLayer$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_3243$$.$_clickedDataLayerId$ = $clientId$$17$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_3243$$.$_clickedObject$ = $area$$2$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($drillEvent_event$$287_obj$$220$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.$OnDblClick$.call(this, $drillEvent_event$$287_obj$$220$$);
  $drillEvent_event$$287_obj$$220$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent_event$$287_obj$$220$$.target);
  this.$getSelectionHandler$($drillEvent_event$$287_obj$$220$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$287_obj$$220$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$287_obj$$220$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$288$$) {
  var $eventConsumed$$1$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ = $event$$288$$.keyCode;
  if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$) && $event$$288$$.ctrlKey && $event$$288$$.shiftKey) {
    this.$_tmap$.$resetMap$(), $event$$288$$.preventDefault()
  }else {
    if(220 == $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$) {
      ($JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ = this.$_tmap$.$_legendPanel$) && ($JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ instanceof D.$DvtCollapsiblePanel$$ ? (0,D.$JSCompiler_StaticMethods_setCollapsed$$)($JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$, !$JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$.isCollapsed()) : 
      $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ instanceof D.$DvtPanelDrawer$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$.$isDisclosed$())), $event$$288$$.preventDefault()
    }else {
      if(13 == $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$) {
        $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this), $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ instanceof D.$DvtMapDataObject$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$.$_hasAction$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$) : 
        ($event$$288$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $event$$288$$.preventDefault())
      }else {
        if(32 == $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ && $event$$288$$.ctrlKey) {
          $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$), (0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$, D.$JSCompiler_alias_TRUE$$), $event$$288$$.preventDefault()
        }else {
          if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$) && $event$$288$$.ctrlKey) {
            var $focusObj$$1_toFit$$inline_3249$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this);
            $event$$288$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$ = this.$_tmap$, $focusObj$$1_toFit$$inline_3249$$ = $focusObj$$1_toFit$$inline_3249$$.$getDisplayable$(), $focusObj$$1_toFit$$inline_3249$$ || ($focusObj$$1_toFit$$inline_3249$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$.$_zoomToFitObject$), $focusObj$$1_toFit$$inline_3249$$ || ($focusObj$$1_toFit$$inline_3249$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$.$_clickedObject$), 
            $JSCompiler_StaticMethods_fitRegion$self$$inline_3248_keyCode$$13_legendPanel_logicalObj$$6$$.$_zoomToFitBounds$($focusObj$$1_toFit$$inline_3249$$.$getDimensions$())) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this.$_tmap$);
            $event$$288$$.preventDefault()
          }else {
            $eventConsumed$$1$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$288$$)
          }
        }
      }
    }
  }
  return $eventConsumed$$1$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$289$$) {
  var $obj$$221$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$289$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$221$$);
  if(!$obj$$221$$ || $obj$$221$$.$isClearSelection$) {
    for(var $clientId$$18$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$18$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$289$$.ctrlKey)) {
        for(var $selectedObjs_selectionEvent$$2$$ = this.$_selectionHandlers$[$clientId$$18$$].getSelection(), $selectedIds$$3$$ = [], $i$$295$$ = 0;$i$$295$$ < $selectedObjs_selectionEvent$$2$$.length;$i$$295$$++) {
          $selectedIds$$3$$.push($selectedObjs_selectionEvent$$2$$[$i$$295$$].getId())
        }
        $selectedObjs_selectionEvent$$2$$ = new D.$DvtSelectionEvent$$($selectedIds$$3$$);
        this.$_callback$.call(this.$_callbackObj$, $selectedObjs_selectionEvent$$2$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$289$$);
  this.$_handleClick$($obj$$221$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$290_obj$$222$$) {
  if(($event$$290_obj$$222$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$290_obj$$222$$.target)) && $event$$290_obj$$222$$.$getShowPopupBehaviors$ && $event$$290_obj$$222$$.$getDataLayer$) {
    this.$_tmap$.$_eventClientId$ = $event$$290_obj$$222$$.$getDataLayer$().$getClientId$()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($drillEvent$$1_event$$291$$) {
  var $obj$$223$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent$$1_event$$291$$.target);
  $obj$$223$$ && (this.$getSelectionHandler$($obj$$223$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && ((0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $obj$$223$$, $drillEvent$$1_event$$291$$.ctrlKey), $drillEvent$$1_event$$291$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$291$$))
};
D.$DvtThematicMapParser$$ = function $$DvtThematicMapParser$$$($tmap$$9$$) {
  this.Init($tmap$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapParser$$, D.$DvtObj$$, "DvtThematicMapParser");
D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$ = "inlineStyle";
D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$ = "animationOnMapChange";
D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$ = "animationOnMapChange";
D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$ = "inlineStyle";
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$10$$) {
  this.$_tmap$ = $tmap$$10$$;
  this.$_customMarkerDefs$ = {};
  this.$_areaDiscloseStyle$ = this.$_areaSelectStyle$ = this.$_areaHoverStyle$ = this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = D.$DvtAgent$$.$isTouchDevice$()
};
D.$JSCompiler_prototypeAlias$$.$loadXmlInitial$ = function $$JSCompiler_prototypeAlias$$$$loadXmlInitial$$($childNodes$$10_rootXmlNode$$2$$) {
  $childNodes$$10_rootXmlNode$$2$$ = $childNodes$$10_rootXmlNode$$2$$.$getChildNodes$();
  for(var $childNodes$$inline_3276_node$$46$$, $i$$inline_3277_nodeName$$1$$, $i$$300$$ = 0;$i$$300$$ < $childNodes$$10_rootXmlNode$$2$$.length;$i$$300$$++) {
    if($childNodes$$inline_3276_node$$46$$ = $childNodes$$10_rootXmlNode$$2$$[$i$$300$$], $i$$inline_3277_nodeName$$1$$ = $childNodes$$inline_3276_node$$46$$.getName(), "mapProperties" == $i$$inline_3277_nodeName$$1$$) {
      this.$ParseMapProperties$($childNodes$$inline_3276_node$$46$$)
    }else {
      if("customLayer" == $i$$inline_3277_nodeName$$1$$) {
        this.$ParseCustomRegionLayer$($childNodes$$inline_3276_node$$46$$)
      }else {
        if("layers" == $i$$inline_3277_nodeName$$1$$) {
          this.$ParseDataLayers$($childNodes$$inline_3276_node$$46$$)
        }else {
          if("legend" == $i$$inline_3277_nodeName$$1$$) {
            this.$ParseLegend$($childNodes$$inline_3276_node$$46$$)
          }else {
            if("childResources" == $i$$inline_3277_nodeName$$1$$) {
              $childNodes$$inline_3276_node$$46$$ = $childNodes$$inline_3276_node$$46$$.$getChildNodes$();
              for($i$$inline_3277_nodeName$$1$$ = 0;$i$$inline_3277_nodeName$$1$$ < $childNodes$$inline_3276_node$$46$$.length;$i$$inline_3277_nodeName$$1$$++) {
                var $resourceBundle$$inline_3278$$ = $childNodes$$inline_3276_node$$46$$[$i$$inline_3277_nodeName$$1$$].getTextContent();
                $resourceBundle$$inline_3278$$ && (0,D.$DvtBundle$addLocalizedStrings$$)(window.JSON.parse($resourceBundle$$inline_3278$$))
              }
            }
          }
        }
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseMapProperties$ = function $$JSCompiler_prototypeAlias$$$$ParseMapProperties$$($childNodes$$12_xmlNode$$8$$) {
  var $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$;
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("source")) {
    this.$_isCustomBasemap$ = D.$JSCompiler_alias_TRUE$$
  }
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("baseMapName")) {
    var $JSCompiler_StaticMethods_setMapName$self$$inline_9215_i$$302$$ = this.$_tmap$;
    $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = this.$_isCustomBasemap$ ? "$" + $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ : $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$;
    $JSCompiler_StaticMethods_setMapName$self$$inline_9215_i$$302$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9215_i$$302$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_9215_i$$302$$.$_mapName$ != $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$;
    $JSCompiler_StaticMethods_setMapName$self$$inline_9215_i$$302$$.$_mapName$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$
  }
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("animationOnDisplay")) {
    this.$_tmap$.$_animationOnDisplay$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$
  }
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$)) {
    this.$_tmap$.$_animationOnMapChange$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$
  }
  ($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("animationDuration")) && this.$_tmap$.$setAnimationDuration$($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$);
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("displayTooltips")) {
    this.$_tmap$.$_displayTooltips$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$
  }
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("dropTargetStyle")) {
    this.$_areaDropSiteStyle$ = new D.$DvtCSSStyle$$($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$)
  }
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("controlPanelBehavior")) {
    this.$_tmap$.$_controlPanelBehavior$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$
  }
  ($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("featuresOff")) && this.$_tmap$.$setFeaturesOff$($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$);
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("centerX")) {
    this.$_tmap$.$_initialCenterX$ = (0,window.parseFloat)($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$)
  }
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("centerY")) {
    this.$_tmap$.$_initialCenterY$ = (0,window.parseFloat)($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$)
  }
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("curZoom")) {
    this.$_tmap$.$_initialZoom$ = (0,window.parseFloat)($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$)
  }
  if(($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("animationOnDrill")) && "alphaFade" == $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$) {
    this.$_tmap$.$_animationOnDrill$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$
  }
  ($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("drillMode")) && this.$_tmap$.$setDrillMode$($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$);
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("drillZoomToFit")) {
    this.$_tmap$.$_drillZoomToFit$ = "true" == $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$
  }
  $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("initialZooming");
  "auto" == $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ && (this.$_tmap$.$_initialZooming$ = D.$JSCompiler_alias_TRUE$$);
  $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("zooming");
  "none" == $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ && (this.$_tmap$.$_zooming$ = D.$JSCompiler_alias_FALSE$$);
  $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("panning");
  "none" == $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ && (this.$_tmap$.$_panning$ = D.$JSCompiler_alias_FALSE$$);
  $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = (0,window.parseFloat)($childNodes$$12_xmlNode$$8$$.$getAttr$("maxZoom"));
  (0,window.isNaN)($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$) || (this.$_tmap$.$_maxZoomFactor$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$);
  if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$.$getAttr$("markerZoomBehavior")) {
    this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$
  }
  (0,D.$JSCompiler_StaticMethods_parseComponentAttrs$$)(this.$_tmap$, $childNodes$$12_xmlNode$$8$$);
  $childNodes$$12_xmlNode$$8$$ = $childNodes$$12_xmlNode$$8$$.$getChildNodes$();
  for(var $attr$$23_baseMapName$$inline_3287_nodeName$$2$$, $JSCompiler_StaticMethods_setMapName$self$$inline_9215_i$$302$$ = 0;$JSCompiler_StaticMethods_setMapName$self$$inline_9215_i$$302$$ < $childNodes$$12_xmlNode$$8$$.length;$JSCompiler_StaticMethods_setMapName$self$$inline_9215_i$$302$$++) {
    if($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $childNodes$$12_xmlNode$$8$$[$JSCompiler_StaticMethods_setMapName$self$$inline_9215_i$$302$$], $attr$$23_baseMapName$$inline_3287_nodeName$$2$$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$.getName(), "mapHierarchy" == $attr$$23_baseMapName$$inline_3287_nodeName$$2$$) {
      $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$.$getChildNodes$();
      $attr$$23_baseMapName$$inline_3287_nodeName$$2$$ = this.$_tmap$.$_mapName$;
      for(var $children$$inline_9267_layerName$$inline_3288$$ = D.$JSCompiler_alias_VOID$$, $labelDisplay$$inline_3289_layer$$inline_3292$$ = D.$JSCompiler_alias_VOID$$, $clientId$$inline_3290_shapes$$inline_9261$$ = D.$JSCompiler_alias_VOID$$, $labelType$$inline_3291$$ = D.$JSCompiler_alias_VOID$$, $labelDisplay$$inline_3289_layer$$inline_3292$$ = D.$JSCompiler_alias_VOID$$, $i$$inline_3293$$ = 0;$i$$inline_3293$$ < $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$.length;$i$$inline_3293$$++) {
        var $animDur$$inline_3297_node$$inline_3294$$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$[$i$$inline_3293$$];
        if("pointLayer" != $animDur$$inline_3297_node$$inline_3294$$.getName()) {
          var $children$$inline_9267_layerName$$inline_3288$$ = $animDur$$inline_3297_node$$inline_3294$$.$getAttr$("layerName"), $labelDisplay$$inline_3289_layer$$inline_3292$$ = $animDur$$inline_3297_node$$inline_3294$$.$getAttr$("labelDisplay"), $clientId$$inline_3290_shapes$$inline_9261$$ = $animDur$$inline_3297_node$$inline_3294$$.$getAttr$("clientId"), $labelType$$inline_3291$$ = $animDur$$inline_3297_node$$inline_3294$$.$getAttr$("labelType"), $areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$ = 
          $animDur$$inline_3297_node$$inline_3294$$.$getAttr$("areaStyle");
          $areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$ && this.$_areaLayerStyle$.$merge$(new D.$DvtCSSStyle$$($areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$));
          ($areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$ = $animDur$$inline_3297_node$$inline_3294$$.$getAttr$("labelStyle")) && this.$_areaLayerStyle$.$merge$(new D.$DvtCSSStyle$$($areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$));
          this.$_isCustomBasemap$ ? $labelDisplay$$inline_3289_layer$$inline_3292$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_9267_layerName$$inline_3288$$, $clientId$$inline_3290_shapes$$inline_9261$$, $labelDisplay$$inline_3289_layer$$inline_3292$$, $labelType$$inline_3291$$, this.$_tmap$.$_eventHandler$) : ($labelDisplay$$inline_3289_layer$$inline_3292$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_9267_layerName$$inline_3288$$, $clientId$$inline_3290_shapes$$inline_9261$$, 
          $labelDisplay$$inline_3289_layer$$inline_3292$$, $labelType$$inline_3291$$, this.$_tmap$.$_eventHandler$), $areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$ = D.$DvtBaseMapManager$$.$getAreaNames$($attr$$23_baseMapName$$inline_3287_nodeName$$2$$, $children$$inline_9267_layerName$$inline_3288$$), $clientId$$inline_3290_shapes$$inline_9261$$ = this.$_createPathShapes$($areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$), $labelDisplay$$inline_3289_layer$$inline_3292$$.$AreaShapes$ = 
          $clientId$$inline_3290_shapes$$inline_9261$$, (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($labelDisplay$$inline_3289_layer$$inline_3292$$, $areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$), $areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$23_baseMapName$$inline_3287_nodeName$$2$$, $children$$inline_9267_layerName$$inline_3288$$), $labelDisplay$$inline_3289_layer$$inline_3292$$.$_labelInfo$ = $areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$, 
          $children$$inline_9267_layerName$$inline_3288$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_9267_layerName$$inline_3288$$), $labelDisplay$$inline_3289_layer$$inline_3292$$.$_children$ = $children$$inline_9267_layerName$$inline_3288$$, $labelDisplay$$inline_3289_layer$$inline_3292$$.$_areaHoverStyle$ = this.$_areaHoverStyle$, $labelDisplay$$inline_3289_layer$$inline_3292$$.$_areaSelectStyle$ = this.$_areaSelectStyle$, $labelDisplay$$inline_3289_layer$$inline_3292$$.$_areaDiscloseStyle$ = 
          this.$_areaDiscloseStyle$);
          $labelDisplay$$inline_3289_layer$$inline_3292$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
          $labelDisplay$$inline_3289_layer$$inline_3292$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
          if($areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$ = $animDur$$inline_3297_node$$inline_3294$$.$getAttr$("animationOnLayerChange")) {
            ($animDur$$inline_3297_node$$inline_3294$$ = $animDur$$inline_3297_node$$inline_3294$$.$getAttr$("animationDuration")) && ($animDur$$inline_3297_node$$inline_3294$$ = (0,window.parseFloat)($animDur$$inline_3297_node$$inline_3294$$));
            if(!$animDur$$inline_3297_node$$inline_3294$$ || (0,window.isNaN)($animDur$$inline_3297_node$$inline_3294$$)) {
              $animDur$$inline_3297_node$$inline_3294$$ = 1
            }
            $labelDisplay$$inline_3289_layer$$inline_3292$$.$setAnimation$($areaNames$$inline_3296_attr$$inline_3295_values$$inline_9264$$);
            $labelDisplay$$inline_3289_layer$$inline_3292$$.$setAnimationDuration$($animDur$$inline_3297_node$$inline_3294$$)
          }
          $labelDisplay$$inline_3289_layer$$inline_3292$$ && this.$_tmap$.$_layers$.push($labelDisplay$$inline_3289_layer$$inline_3292$$)
        }
      }
    }else {
      if("regionLayer" == $attr$$23_baseMapName$$inline_3287_nodeName$$2$$) {
        if($attr$$23_baseMapName$$inline_3287_nodeName$$2$$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
          this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($attr$$23_baseMapName$$inline_3287_nodeName$$2$$)
        }
        if($attr$$23_baseMapName$$inline_3287_nodeName$$2$$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$.$getAttr$("hoverStyle")) {
          this.$_areaHoverStyle$ = new D.$DvtCSSStyle$$($attr$$23_baseMapName$$inline_3287_nodeName$$2$$)
        }
        if($attr$$23_baseMapName$$inline_3287_nodeName$$2$$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$.$getAttr$("selectStyle")) {
          this.$_areaSelectStyle$ = new D.$DvtCSSStyle$$($attr$$23_baseMapName$$inline_3287_nodeName$$2$$)
        }
        if($attr$$23_baseMapName$$inline_3287_nodeName$$2$$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$.$getAttr$("disclosedStyle")) {
          this.$_areaDiscloseStyle$ = new D.$DvtCSSStyle$$($attr$$23_baseMapName$$inline_3287_nodeName$$2$$)
        }
      }else {
        "markerStyle" == $attr$$23_baseMapName$$inline_3287_nodeName$$2$$ ? ($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$ = new D.$DvtCSSStyle$$($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)), this.$_tmap$.$_markerStyle$ = $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$) : "basemap" == $attr$$23_baseMapName$$inline_3287_nodeName$$2$$ && 
        this.$_tmap$.$_mapName$ == "$" + $attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$.$getAttr$("id") && this.$ParseCustomBasemap$($attr$$inline_3282_attr$$inline_9216_layerNodes$$inline_3286_node$$47_style$$inline_3300$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseDataLayers$ = function $$JSCompiler_prototypeAlias$$$$ParseDataLayers$$($i$$303_legend$$9_xmlNode$$9$$, $pzcMatrix$$17$$, $topLayerName$$2$$) {
  var $layers$$ = $i$$303_legend$$9_xmlNode$$9$$.getElementsByTagName("layer");
  $i$$303_legend$$9_xmlNode$$9$$ = $i$$303_legend$$9_xmlNode$$9$$.getElementsByTagName("legend");
  $pzcMatrix$$17$$ && ($i$$303_legend$$9_xmlNode$$9$$ && $i$$303_legend$$9_xmlNode$$9$$[0]) && this.$ParseLegend$($i$$303_legend$$9_xmlNode$$9$$[0]);
  for($i$$303_legend$$9_xmlNode$$9$$ = 0;$i$$303_legend$$9_xmlNode$$9$$ < $layers$$.length;$i$$303_legend$$9_xmlNode$$9$$++) {
    var $clientId$$25_dataLayer$$16$$ = $layers$$[$i$$303_legend$$9_xmlNode$$9$$].$getAttr$("clientId"), $id$$160$$ = $layers$$[$i$$303_legend$$9_xmlNode$$9$$].$getAttr$("id"), $layer$$10_parentLayerName$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $id$$160$$);
    $layer$$10_parentLayerName$$1$$ ? $layer$$10_parentLayerName$$1$$ instanceof D.$DvtMapAreaLayer$$ && (0,D.$JSCompiler_StaticMethods_resetRenderedAreas$$)($layer$$10_parentLayerName$$1$$) : ($layer$$10_parentLayerName$$1$$ = $layers$$[$i$$303_legend$$9_xmlNode$$9$$].$getAttr$("showWith")) ? $layer$$10_parentLayerName$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $layer$$10_parentLayerName$$1$$) : ($layer$$10_parentLayerName$$1$$ = new D.$DvtMapLayer$$(this.$_tmap$, this.$_tmap$.$_eventHandler$), 
    this.$_tmap$.$_layers$.push($layer$$10_parentLayerName$$1$$));
    var $clientId$$25_dataLayer$$16$$ = new D.$DvtMapDataLayer$$(this.$_tmap$, $layer$$10_parentLayerName$$1$$, $clientId$$25_dataLayer$$16$$, this.$_tmap$.$_eventHandler$), $animOnDataChange_isolatedRowKey_selectionMode$$ = $layers$$[$i$$303_legend$$9_xmlNode$$9$$].$getAttr$("selectionMode");
    "single" == $animOnDataChange_isolatedRowKey_selectionMode$$ ? $clientId$$25_dataLayer$$16$$.$setSelectionMode$("s") : "multiple" == $animOnDataChange_isolatedRowKey_selectionMode$$ && $clientId$$25_dataLayer$$16$$.$setSelectionMode$("m");
    if($animOnDataChange_isolatedRowKey_selectionMode$$ = $layers$$[$i$$303_legend$$9_xmlNode$$9$$].$getAttr$("animationDataChange")) {
      var $animDur$$2_initSelections$$ = $layers$$[$i$$303_legend$$9_xmlNode$$9$$].$getAttr$("animationDuration");
      $animDur$$2_initSelections$$ && ($animDur$$2_initSelections$$ = (0,window.parseFloat)($animDur$$2_initSelections$$));
      if(!$animDur$$2_initSelections$$ || (0,window.isNaN)($animDur$$2_initSelections$$)) {
        $animDur$$2_initSelections$$ = 1
      }
      $clientId$$25_dataLayer$$16$$.$setAnimation$($animOnDataChange_isolatedRowKey_selectionMode$$);
      $clientId$$25_dataLayer$$16$$.$setAnimationDuration$($animDur$$2_initSelections$$)
    }
    $animOnDataChange_isolatedRowKey_selectionMode$$ = D.$JSCompiler_alias_NULL$$;
    $layer$$10_parentLayerName$$1$$ instanceof D.$DvtMapAreaLayer$$ && ($animOnDataChange_isolatedRowKey_selectionMode$$ = $layers$$[$i$$303_legend$$9_xmlNode$$9$$].$getAttr$("isolatedRowKey"));
    for(var $animDur$$2_initSelections$$ = [], $initDrilled$$ = [], $styles$$1$$ = this.$_parseStyles$($layers$$[$i$$303_legend$$9_xmlNode$$9$$].getElementsByTagName("styles")), $data$$26$$ = $layers$$[$i$$303_legend$$9_xmlNode$$9$$].getElementsByTagName("row"), $spb$$1$$ = this.$_parseShowPopupBehavior$($layers$$[$i$$303_legend$$9_xmlNode$$9$$], $styles$$1$$), $j$$25$$ = 0;$j$$25$$ < $data$$26$$.length;$j$$25$$++) {
      var $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$ = $data$$26$$[$j$$25$$].$getAttr$("styleId"), $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$;
      a: {
        var $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ = $layer$$10_parentLayerName$$1$$, $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$ = $clientId$$25_dataLayer$$16$$;
        $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$ = $id$$160$$;
        var $datatip$$inline_3335_node$$inline_3309$$ = $data$$26$$[$j$$25$$], $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$ = $styles$$1$$[$JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$], $initSelections$$inline_3311_labelText$$inline_3327$$ = $animDur$$2_initSelections$$, $initDrilled$$inline_3312_labelDisplay$$inline_3328$$ = $initDrilled$$, $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ = 
        $animOnDataChange_isolatedRowKey_selectionMode$$, $context$$inline_3314$$ = this.$_tmap$.$_context$, $id$$inline_3315_labelInfo$$inline_3329$$ = $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("rowKey"), $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$ = $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("clientId"), $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$ = $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("id"), 
        $dataObj$$inline_3318$$ = D.$JSCompiler_alias_VOID$$, $styleType$$inline_3319$$ = $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$.getName();
        if("colorStyles" == $styleType$$inline_3319$$) {
          if($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$) {
            if($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ != $id$$inline_3315_labelInfo$$inline_3329$$) {
              $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$ = D.$JSCompiler_alias_NULL$$;
              break a
            }
            this.$_isolatedArea$ = $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$
          }
          $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$.$_renderArea$[$JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$] = D.$JSCompiler_alias_FALSE$$;
          $dataObj$$inline_3318$$ = new D.$DvtMapDataArea$$($context$$inline_3314$$, $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$, $id$$inline_3315_labelInfo$$inline_3329$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$);
          this.$_parseMapArea$($context$$inline_3314$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$, $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$, $datatip$$inline_3335_node$$inline_3309$$, $dataObj$$inline_3318$$)
        }else {
          if("graduatedSymbol" == $styleType$$inline_3319$$) {
            $dataObj$$inline_3318$$ = new D.$DvtMapDataMarker$$($context$$inline_3314$$, $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$, $id$$inline_3315_labelInfo$$inline_3329$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$), this.$_parseMapMarker$($context$$inline_3314$$, $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$, 
            $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$, $datatip$$inline_3335_node$$inline_3309$$, $dataObj$$inline_3318$$)
          }else {
            if("image" == $styleType$$inline_3319$$) {
              var $dataObj$$inline_3318$$ = new D.$DvtMapDataImage$$($context$$inline_3314$$, $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$, $id$$inline_3315_labelInfo$$inline_3329$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$), $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$ = 
              $context$$inline_3314$$, $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ = $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$, $cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$ = $datatip$$inline_3335_node$$inline_3309$$, $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ = 
              $dataObj$$inline_3318$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$ = $cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$.$getAttr$("url"), $context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$ = D.$JSCompiler_alias_NULL$$;
              if($center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$, $cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$, "cities" != $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$)) {
                $context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$ = new D.$DvtImage$$($context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$);
                $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$.$setCenter$($center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$);
                $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$.$setDisplayable$($context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$);
                var $width$$inline_9299$$ = D.$JSCompiler_alias_VOID$$, $height$$inline_9300$$ = D.$JSCompiler_alias_VOID$$;
                if($cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$ = $cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
                  $cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$ = new D.$DvtCSSStyle$$($cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$), ($width$$inline_9299$$ = $cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$.$getStyle$("width").substring(0, $cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$.$getStyle$("width").indexOf("px"))) && $context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$.$setWidth$($width$$inline_9299$$), 
                  ($height$$inline_9300$$ = $cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$.$getStyle$("height").substring(0, $cssStyle$$inline_9302_inlineStyle$$inline_9301_node$$inline_9294$$.$getStyle$("height").indexOf("px"))) && $context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$.$setHeight$($height$$inline_9300$$), $width$$inline_9299$$ != D.$JSCompiler_alias_NULL$$ && $height$$inline_9300$$ != D.$JSCompiler_alias_NULL$$ && ($context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$.$setX$($center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$.x - 
                  $width$$inline_9299$$ / 2), $context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$.$setY$($center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$.y - $height$$inline_9300$$ / 2), $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$.$setSize$($width$$inline_9299$$ * 
                  $height$$inline_9300$$))
                }
                (!$width$$inline_9299$$ || !$height$$inline_9300$$) && D.$DvtImageLoader$$.$loadImage$($context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$, D.$DvtObj$$.$createCallback$($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$, 
                $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$.$onImageLoaded$))
              }
            }else {
              if($dataObj$$inline_3318$$ = new D.$DvtMapDataComponent$$($context$$inline_3314$$, $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$, $id$$inline_3315_labelInfo$$inline_3329$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$), $context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$ = 
              $context$$inline_3314$$, $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ = $datatip$$inline_3335_node$$inline_3309$$, $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$ = $dataObj$$inline_3318$$, $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ = 
              $styleType$$inline_3319$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$, $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$, "cities" != $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$)) {
                "statusMeterGauge" == $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ ? window.gauge = (0,D.$DvtStatusMeterGauge$newInstance$$)($context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : "ledGauge" == $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ ? window.gauge = (0,D.$DvtLedGauge$newInstance$$)($context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$, 
                D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : "dialGauge" == $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ ? window.gauge = (0,D.$DvtDialGauge$newInstance$$)($context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : "ratingGauge" == $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ && 
                (window.gauge = (0,D.$DvtRatingGauge$newInstance$$)($context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$));
                $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$.$setCenter$($center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$);
                $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$.$setDisplayable$(window.gauge);
                $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ = $context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$ = D.$JSCompiler_alias_VOID$$;
                if($context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$ = $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
                  $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ = new D.$DvtCSSStyle$$($context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$), $context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$ = $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$.width ? (0,window.parseInt)($center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$.width.substring(0, 
                  $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$.width.indexOf("px"))) : 50, $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$.$setWidth$($context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$), $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ = $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$.height ? 
                  (0,window.parseInt)($center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$.height.substring(0, $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$.height.indexOf("px"))) : 50, $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$.$setHeight$($center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$), 
                  $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$.$setX$($center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.x - $context$$inline_9305_image$$inline_9297_inlineStyle$$inline_9313_width$$inline_9311$$ / 2), $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$.$setY$($center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.y - 
                  $center$$inline_9298_cssStyle$$inline_9314_gaugeType$$inline_9309_height$$inline_9312_layerName$$inline_9293$$ / 2)
                }
                if($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ = $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$.$getAttr$("json")) {
                  $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$.$_json$ = $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$
                }
              }
            }
          }
        }
        if($context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$ = $dataObj$$inline_3318$$.$getDisplayable$()) {
          if($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ = (0,window.parseInt)($datatip$$inline_3335_node$$inline_3309$$.$getAttr$("rotation"))) {
            $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ = $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ * window.Math.PI / 180, $context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$.$setRotation$($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$), 
            $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$ = $dataObj$$inline_3318$$.$getCenter$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.x - ($center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.x * 
            window.Math.cos($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$) - $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.y * window.Math.sin($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$)), 
            $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.y - ($center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.x * window.Math.sin($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$) + $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.y * 
            window.Math.cos($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$)))
          }
          $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$ && $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ instanceof D.$DvtMapAreaLayer$$ && ($displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$.$_renderLabel$[$JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$] = D.$JSCompiler_alias_FALSE$$);
          $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ = "true" == $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("hasAction");
          if($dataObj$$inline_3318$$.$_hasAction$ = $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$) {
            $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ = $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("action"), $dataObj$$inline_3318$$.$_action$ = $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$
          }
          if($action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$ = $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("destination")) {
            $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$ = [], $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.destination = $action$$inline_9325_dataObj$$inline_9295_destination$$inline_3325_hasAction$$inline_3324_isolatedRowKey$$inline_3313_json$$inline_9315_node$$inline_9307_radianRot$$inline_3322_rotation$$inline_3321$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.targetFrame = 
            "_blank", $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$.focusable = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_setHyperlink$$)($context$$inline_9292_dataObj$$inline_9308_displayable$$inline_3320_style$$inline_3310$$, $center$$inline_3323_center$$inline_9310_clientId$$inline_3316_linkObj$$inline_3326_source$$inline_9296$$)
          }
          "true" == $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("selected") && $initSelections$$inline_3311_labelText$$inline_3327$$.push($id$$inline_3315_labelInfo$$inline_3329$$);
          "true" == $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("drilled") && ($initDrilled$$inline_3312_labelDisplay$$inline_3328$$.push($datatip$$inline_3335_node$$inline_3309$$.$getAttr$("id")), this.$_tmap$.$_drilledRowKeys$.push($id$$inline_3315_labelInfo$$inline_3329$$));
          $initSelections$$inline_3311_labelText$$inline_3327$$ = $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("label");
          $initDrilled$$inline_3312_labelDisplay$$inline_3328$$ = "off";
          $initSelections$$inline_3311_labelText$$inline_3327$$ ? $initDrilled$$inline_3312_labelDisplay$$inline_3328$$ = "on" : "colorStyles" == $styleType$$inline_3319$$ && ($initDrilled$$inline_3312_labelDisplay$$inline_3328$$ = $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$.$getLabelDisplay$());
          !$initSelections$$inline_3311_labelText$$inline_3327$$ && ($JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$ && "off" != $initDrilled$$inline_3312_labelDisplay$$inline_3328$$) && ($initSelections$$inline_3311_labelText$$inline_3327$$ = "long" == $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$.$_labelType$ ? $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$.$AreaNames$[$JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$][1] : 
          $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$.$AreaNames$[$JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$][0]);
          if($initSelections$$inline_3311_labelText$$inline_3327$$) {
            $id$$inline_3315_labelInfo$$inline_3329$$ = D.$JSCompiler_alias_VOID$$;
            $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$.$getLabelInfoForArea$ && ($id$$inline_3315_labelInfo$$inline_3329$$ = $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$.$getLabelInfoForArea$($JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$));
            var $label$$inline_3330$$ = D.$JSCompiler_alias_VOID$$, $label$$inline_3330$$ = $id$$inline_3315_labelInfo$$inline_3329$$ ? new D.$DvtMapLabel$$($context$$inline_3314$$, $initSelections$$inline_3311_labelText$$inline_3327$$, $id$$inline_3315_labelInfo$$inline_3329$$, $initDrilled$$inline_3312_labelDisplay$$inline_3328$$, $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : "colorStyles" != $styleType$$inline_3319$$ ? 
            new D.$DvtOutputText$$($context$$inline_3314$$, $initSelections$$inline_3311_labelText$$inline_3327$$, 0, 0) : new D.$DvtMapLabel$$($context$$inline_3314$$, $initSelections$$inline_3311_labelText$$inline_3327$$, D.$JSCompiler_alias_NULL$$, $initDrilled$$inline_3312_labelDisplay$$inline_3328$$, $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$);
            ($cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$ = $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("labelPosition")) && $dataObj$$inline_3318$$.$setLabelPosition$($cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$);
            $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$ = new D.$DvtCSSStyle$$;
            "colorStyles" == $styleType$$inline_3319$$ ? $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$.$merge$($displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$.$_layerCSSStyle$) : "graduatedSymbol" == $styleType$$inline_3319$$ && $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$.$merge$(this.$_tmap$.$_markerStyle$);
            ($displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ = $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("labelStyle")) && $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$.$merge$(new D.$DvtCSSStyle$$($displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$));
            $label$$inline_3330$$ instanceof D.$DvtMapLabel$$ && ($cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$.$getStyle$("color") || $cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($dataObj$$inline_3318$$.$getDatatipColor$())));
            $label$$inline_3330$$.$setCSSStyle$($cssTextStyle$$inline_3332_dataLayer$$inline_3307_labelPosition$$inline_3331$$)
          }
          $dataObj$$inline_3318$$.$setLabel$($label$$inline_3330$$);
          $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ = this.$_tmap$.$_displayTooltips$;
          "none" != $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ && ($datatip$$inline_3335_node$$inline_3309$$ = $datatip$$inline_3335_node$$inline_3309$$.$getAttr$("shortDesc"), "auto" == $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ && ($displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$ && 
          ($displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ = "cities" == $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$ || this.$_isCustomBasemap$ ? D.$DvtBaseMapManager$$.$getCityLabel$(this.$_tmap$.$_mapName$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$(this.$_tmap$.$_mapName$, $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$)), 
          $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ && ($datatip$$inline_3335_node$$inline_3309$$ = $datatip$$inline_3335_node$$inline_3309$$ ? $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$ + ": " + $datatip$$inline_3335_node$$inline_3309$$ : $displayTooltips$$inline_3334_layer$$inline_3306_preDatatip$$inline_3336_textStyle$$inline_3333$$)), $datatip$$inline_3335_node$$inline_3309$$ && $dataObj$$inline_3318$$.$setDatatip$($datatip$$inline_3335_node$$inline_3309$$));
          $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$ = $dataObj$$inline_3318$$
        }else {
          $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$ = D.$JSCompiler_alias_NULL$$
        }
      }
      $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$ && ($JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$ = $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$.$getDisplayable$(), $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$.$setSelectable$ && $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$.$setSelectable$($clientId$$25_dataLayer$$16$$.$isSelectable$() && 
      !($dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$ instanceof D.$DvtMapDataImage$$)), 0 < $spb$$1$$.length && $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$.$setShowPopupBehaviors$($spb$$1$$), $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$ instanceof D.$DvtMapDataArea$$ ? (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($clientId$$25_dataLayer$$16$$, $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$) : ($JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$ = 
      $clientId$$25_dataLayer$$16$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$.$_dataObjs$.push($dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$), $JSCompiler_StaticMethods_addDataObject$self$$inline_3338_areaId$$inline_3317_displayable$$28_styleId$$.$_eventHandler$.$associate$($dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$.$getDisplayable$(), $dataObj$$1_layerName$$inline_3308_obj$$inline_3339$$)))
    }
    $animOnDataChange_isolatedRowKey_selectionMode$$ && this.$_isolatedArea$ && ($clientId$$25_dataLayer$$16$$.$_isolatedAreaRowKey$ = $animOnDataChange_isolatedRowKey_selectionMode$$, (0,D.$JSCompiler_StaticMethods_setIsolatedArea$$)($layer$$10_parentLayerName$$1$$, this.$_isolatedArea$));
    $clientId$$25_dataLayer$$16$$.$isSelectable$() && 0 < $animDur$$2_initSelections$$.length && ($clientId$$25_dataLayer$$16$$.$_initSelections$ = $animDur$$2_initSelections$$);
    0 < $initDrilled$$.length && (this.$_tmap$.$_initDrilled$[$layer$$10_parentLayerName$$1$$.$LayerName$] = [$clientId$$25_dataLayer$$16$$.$getClientId$(), $initDrilled$$]);
    $pzcMatrix$$17$$ || $layer$$10_parentLayerName$$1$$.$getDataLayer$($clientId$$25_dataLayer$$16$$.$getClientId$()) ? $layer$$10_parentLayerName$$1$$.$updateDataLayer$($clientId$$25_dataLayer$$16$$, $pzcMatrix$$17$$, $topLayerName$$2$$) : $layer$$10_parentLayerName$$1$$.$DataLayers$[$clientId$$25_dataLayer$$16$$.$getClientId$()] = $clientId$$25_dataLayer$$16$$
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseLegend$ = function $$JSCompiler_prototypeAlias$$$$ParseLegend$$($xmlNode$$10$$) {
  this.$_tmap$.$_legendXml$ = $xmlNode$$10$$
};
D.$JSCompiler_prototypeAlias$$.$ParseCustomBasemap$ = function $$JSCompiler_prototypeAlias$$$$ParseCustomBasemap$$($childNodes$$13_xmlNode$$12$$) {
  $childNodes$$13_xmlNode$$12$$ = $childNodes$$13_xmlNode$$12$$.$getChildNodes$();
  for(var $node$$49$$, $nodeName$$4$$, $i$$305$$ = 0;$i$$305$$ < $childNodes$$13_xmlNode$$12$$.length;$i$$305$$++) {
    $node$$49$$ = $childNodes$$13_xmlNode$$12$$[$i$$305$$], $nodeName$$4$$ = $node$$49$$.getName(), "layer" == $nodeName$$4$$ ? this.$_parseCustomLayer$($node$$49$$) : "points" == $nodeName$$4$$ && this.$_parseCustomPoints$($node$$49$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomLayer$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomLayer$$($layerName$$26_xmlNode$$13$$) {
  var $childNodes$$14$$ = $layerName$$26_xmlNode$$13$$.$getChildNodes$();
  $layerName$$26_xmlNode$$13$$ = $layerName$$26_xmlNode$$13$$.$getAttr$("id");
  for(var $dir$$4_node$$50$$, $image$$14_nodeName$$5$$, $images$$12$$ = [], $i$$306$$ = 0;$i$$306$$ < $childNodes$$14$$.length;$i$$306$$++) {
    if($dir$$4_node$$50$$ = $childNodes$$14$$[$i$$306$$], $image$$14_nodeName$$5$$ = $dir$$4_node$$50$$.getName(), "image" == $image$$14_nodeName$$5$$) {
      $image$$14_nodeName$$5$$ = {};
      $image$$14_nodeName$$5$$.source = $dir$$4_node$$50$$.$getAttr$("source");
      $image$$14_nodeName$$5$$.width = $dir$$4_node$$50$$.$getAttr$("width");
      $image$$14_nodeName$$5$$.height = $dir$$4_node$$50$$.$getAttr$("height");
      var $bidi$$3$$ = $dir$$4_node$$50$$.$getAttr$("bidi");
      $dir$$4_node$$50$$ = $dir$$4_node$$50$$.$getAttr$("dir");
      $image$$14_nodeName$$5$$.dir = "true" == $bidi$$3$$ || "rtl" == $dir$$4_node$$50$$ ? "rtl" : "ltr";
      $images$$12$$.push($image$$14_nodeName$$5$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_setAreaLayerImage$$)((0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $layerName$$26_xmlNode$$13$$), $images$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomPoints$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomPoints$$($childNodes$$15_xmlNode$$14$$) {
  $childNodes$$15_xmlNode$$14$$ = $childNodes$$15_xmlNode$$14$$.$getChildNodes$();
  for(var $node$$51$$, $nodeName$$6$$, $points$$31$$ = {}, $labels$$4$$ = {}, $i$$307$$ = 0;$i$$307$$ < $childNodes$$15_xmlNode$$14$$.length;$i$$307$$++) {
    $node$$51$$ = $childNodes$$15_xmlNode$$14$$[$i$$307$$], $nodeName$$6$$ = $node$$51$$.getName(), "point" == $nodeName$$6$$ && ($points$$31$$[$node$$51$$.$getAttr$("name")] = [$node$$51$$.$getAttr$("x"), $node$$51$$.$getAttr$("y")], $labels$$4$$[$node$$51$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $node$$51$$.$getAttr$("longLabel")])
  }
  D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $labels$$4$$, $points$$31$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$_createPathShapes$ = function $$JSCompiler_prototypeAlias$$$$_createPathShapes$$($areaNames$$1$$) {
  var $shapes$$5$$ = {}, $context$$409$$ = this.$_tmap$.$_context$, $area$$20$$;
  for($area$$20$$ in $areaNames$$1$$) {
    $shapes$$5$$[$area$$20$$] = new D.$DvtPath$$($context$$409$$), (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "colorStyles", this.$_areaLayerStyle$, $shapes$$5$$[$area$$20$$])
  }
  return $shapes$$5$$
};
D.$JSCompiler_prototypeAlias$$.$_parseStyles$ = function $$JSCompiler_prototypeAlias$$$$_parseStyles$$($node$$52_styleNodes$$) {
  var $styles$$2$$ = {};
  if($node$$52_styleNodes$$ && 0 < $node$$52_styleNodes$$.length) {
    $node$$52_styleNodes$$ = $node$$52_styleNodes$$[0].$getChildNodes$();
    for(var $i$$308$$ = 0;$i$$308$$ < $node$$52_styleNodes$$.length;$i$$308$$++) {
      var $styleId$$1$$ = $node$$52_styleNodes$$[$i$$308$$].$getAttr$("id");
      $styles$$2$$[$styleId$$1$$] = $node$$52_styleNodes$$[$i$$308$$]
    }
  }
  return $styles$$2$$
};
D.$JSCompiler_prototypeAlias$$.$_parseShowPopupBehavior$ = function $$JSCompiler_prototypeAlias$$$$_parseShowPopupBehavior$$($node$$53$$, $styles$$3$$) {
  for(var $spbNodes$$ = $node$$53$$.getElementsByTagName("spb"), $spbs$$1$$ = [], $i$$309$$ = 0;$i$$309$$ < $spbNodes$$.length;$i$$309$$++) {
    var $alignId$$4$$ = $spbNodes$$[$i$$309$$].$getAttr$("alignId"), $popup$$ = (0,D.$DvtShowPopupBehavior$newInstance$$)($spbNodes$$[$i$$309$$]), $styleId$$2$$;
    for($styleId$$2$$ in $styles$$3$$) {
      if($alignId$$4$$ == $styleId$$2$$) {
        $popup$$ = new D.$DvtShowPopupBehavior$$($popup$$.$getPopupId$(), $popup$$.$getTriggerType$(), D.$JSCompiler_alias_NULL$$, $popup$$.$getAlign$());
        break
      }
    }
    $spbs$$1$$.push($popup$$)
  }
  return $spbs$$1$$
};
D.$JSCompiler_StaticMethods__parseCenter$$ = function $$JSCompiler_StaticMethods__parseCenter$$$($JSCompiler_StaticMethods__parseCenter$self_mapName$$, $layerName$$28_x$$184$$, $node$$55_y$$156$$, $isAreaMarker$$) {
  $JSCompiler_StaticMethods__parseCenter$self_mapName$$ = $JSCompiler_StaticMethods__parseCenter$self_mapName$$.$_tmap$.$_mapName$;
  var $areaId$$3$$ = $node$$55_y$$156$$.$getAttr$("id");
  if($areaId$$3$$) {
    return $isAreaMarker$$ ? D.$DvtBaseMapManager$$.$getAreaCenter$($JSCompiler_StaticMethods__parseCenter$self_mapName$$, $layerName$$28_x$$184$$, $areaId$$3$$) : D.$DvtBaseMapManager$$.$getCityCoordinates$($JSCompiler_StaticMethods__parseCenter$self_mapName$$, $areaId$$3$$)
  }
  $layerName$$28_x$$184$$ = (0,window.parseFloat)($node$$55_y$$156$$.$getAttr$("x"));
  $node$$55_y$$156$$ = (0,window.parseFloat)($node$$55_y$$156$$.$getAttr$("y"));
  return new D.$DvtPoint$$($layerName$$28_x$$184$$, $node$$55_y$$156$$)
};
D.$DvtThematicMapParser$$.prototype.$_parseMapArea$ = function $$DvtThematicMapParser$$$$$_parseMapArea$$($context$$413_path$$14$$, $areaId$$4_cssStyle$$27$$, $dis$$7_hs_layer$$13$$, $discloseStyle_dos_node$$58$$, $dataObj$$5$$) {
  if($dis$$7_hs_layer$$13$$.$AreaShapes$[$areaId$$4_cssStyle$$27$$]) {
    $areaId$$4_cssStyle$$27$$ = new D.$DvtCSSStyle$$($discloseStyle_dos_node$$58$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$));
    $context$$413_path$$14$$ = new D.$DvtDrillablePath$$($context$$413_path$$14$$, this.$_tmap$.$_bSupportsVectorEffects$);
    var $selectStyle_sos$$ = $dis$$7_hs_layer$$13$$.$_areaSelectStyle$;
    $discloseStyle_dos_node$$58$$ = $dis$$7_hs_layer$$13$$.$_areaDiscloseStyle$;
    $dis$$7_hs_layer$$13$$ = new D.$DvtSolidStroke$$($dis$$7_hs_layer$$13$$.$_areaHoverStyle$.$getStyle$("border-color"), 1, 2);
    var $sis$$1$$ = new D.$DvtSolidStroke$$($selectStyle_sos$$.$getStyle$("-tr-inner-color"), 1, 1), $selectStyle_sos$$ = new D.$DvtSolidStroke$$($selectStyle_sos$$.$getStyle$("-tr-outer-color"), 1, 4);
    $context$$413_path$$14$$.$setHoverStroke$($dis$$7_hs_layer$$13$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($sis$$1$$, $selectStyle_sos$$);
    $discloseStyle_dos_node$$58$$ && ($dis$$7_hs_layer$$13$$ = new D.$DvtSolidStroke$$($discloseStyle_dos_node$$58$$.$getStyle$("-tr-inner-color"), 1, 2), $discloseStyle_dos_node$$58$$ = new D.$DvtSolidStroke$$($discloseStyle_dos_node$$58$$.$getStyle$("-tr-outer-color"), 1, 4), (0,D.$JSCompiler_StaticMethods_setDisclosedStroke$$)($context$$413_path$$14$$, $dis$$7_hs_layer$$13$$, $discloseStyle_dos_node$$58$$));
    $dataObj$$5$$.$setDisplayable$($context$$413_path$$14$$);
    (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "colorStyles", $areaId$$4_cssStyle$$27$$, $context$$413_path$$14$$, $dataObj$$5$$)
  }
};
D.$DvtThematicMapParser$$.prototype.$_parseMapMarker$ = function $$DvtThematicMapParser$$$$$_parseMapMarker$$($context$$414_cssStyle$$28_inlineStyle$$5$$, $markerDefs_style$$70_sx$$14$$, $center$$6_layerName$$31$$, $node$$59$$, $dataObj$$6$$) {
  var $imgSrc$$3_marker$$9_shapeType$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($center$$6_layerName$$31$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $center$$6_layerName$$31$$, $node$$59$$, "cities" != $center$$6_layerName$$31$$)) {
    if($imgSrc$$3_marker$$9_shapeType$$1$$ = $node$$59$$.$getAttr$("source")) {
      $imgSrc$$3_marker$$9_shapeType$$1$$ = [$imgSrc$$3_marker$$9_shapeType$$1$$, $node$$59$$.$getAttr$("sourceSelected"), $node$$59$$.$getAttr$("sourceHover"), $node$$59$$.$getAttr$("sourceHoverSelected")]
    }else {
      if(($imgSrc$$3_marker$$9_shapeType$$1$$ = $node$$59$$.$getAttr$("shapeType")) || ($imgSrc$$3_marker$$9_shapeType$$1$$ = "c"), !(0,D.$DvtMarker$isBuiltInShape$$)($imgSrc$$3_marker$$9_shapeType$$1$$)) {
        $markerDefs_style$$70_sx$$14$$ = $markerDefs_style$$70_sx$$14$$.getElementsByTagName("markerDef");
        for(var $i$$310_sy$$14$$ = 0;$i$$310_sy$$14$$ < $markerDefs_style$$70_sx$$14$$.length;$i$$310_sy$$14$$++) {
          !this.$_customMarkerDefs$[$imgSrc$$3_marker$$9_shapeType$$1$$] && $markerDefs_style$$70_sx$$14$$[$i$$310_sy$$14$$].$getAttr$("id") == $imgSrc$$3_marker$$9_shapeType$$1$$ && (this.$_customMarkerDefs$[$imgSrc$$3_marker$$9_shapeType$$1$$] = D.$DvtMarkerUtils$$.$createMarkerDef$($context$$414_cssStyle$$28_inlineStyle$$5$$, $markerDefs_style$$70_sx$$14$$[$i$$310_sy$$14$$]))
        }
      }
    }
    $markerDefs_style$$70_sx$$14$$ = $node$$59$$.$getAttr$("scaleX");
    $markerDefs_style$$70_sx$$14$$ = (0,window.isNaN)($markerDefs_style$$70_sx$$14$$) ? 1 : (0,window.parseFloat)($markerDefs_style$$70_sx$$14$$);
    var $i$$310_sy$$14$$ = $node$$59$$.$getAttr$("scaleY"), $i$$310_sy$$14$$ = (0,window.isNaN)($i$$310_sy$$14$$) ? 1 : (0,window.parseFloat)($i$$310_sy$$14$$), $w$$59$$ = $node$$59$$.$getAttr$("width"), $h$$60$$ = $node$$59$$.$getAttr$("height"), $w$$59$$ = !$w$$59$$ || (0,window.isNaN)($w$$59$$) ? 8 : (0,window.parseInt)($w$$59$$), $h$$60$$ = !$h$$60$$ || (0,window.isNaN)($h$$60$$) ? 8 : (0,window.parseInt)($h$$60$$), $imgSrc$$3_marker$$9_shapeType$$1$$ = new D.$DvtMarker$$($context$$414_cssStyle$$28_inlineStyle$$5$$, 
    $imgSrc$$3_marker$$9_shapeType$$1$$, this.$_tmap$.$_skinName$, $center$$6_layerName$$31$$.x - $w$$59$$ * $markerDefs_style$$70_sx$$14$$ / 2, $center$$6_layerName$$31$$.y - $h$$60$$ * $i$$310_sy$$14$$ / 2, $w$$59$$, $h$$60$$, D.$JSCompiler_alias_NULL$$, $markerDefs_style$$70_sx$$14$$, $i$$310_sy$$14$$);
    $dataObj$$6$$.$setCenter$($center$$6_layerName$$31$$);
    $dataObj$$6$$.$setDisplayable$($imgSrc$$3_marker$$9_shapeType$$1$$);
    $dataObj$$6$$.$setSize$($w$$59$$ * $markerDefs_style$$70_sx$$14$$ * $h$$60$$ * $i$$310_sy$$14$$);
    if($context$$414_cssStyle$$28_inlineStyle$$5$$ = $node$$59$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
      $context$$414_cssStyle$$28_inlineStyle$$5$$ = new D.$DvtCSSStyle$$($context$$414_cssStyle$$28_inlineStyle$$5$$), (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "graduatedSymbol", $context$$414_cssStyle$$28_inlineStyle$$5$$, $imgSrc$$3_marker$$9_shapeType$$1$$, $dataObj$$6$$)
    }
  }
};
D.$JSCompiler_StaticMethods__parseDataObjectFill$$ = function $$JSCompiler_StaticMethods__parseDataObjectFill$$$($JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_3435$$, $markerStyle_styleType$$1$$, $cssStyle$$29_stroke$$35_strokeWidth$$6$$, $displayable$$30$$, $dataObj$$7_strokeStyle$$) {
  $cssStyle$$29_stroke$$35_strokeWidth$$6$$ || ($cssStyle$$29_stroke$$35_strokeWidth$$6$$ = {});
  var $pattern$$7$$ = $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("pattern"), $patternColor$$ = $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("pattern-color"), $backgroundColor$$10$$ = $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("background-color"), $borderColor$$22_gradient$$4$$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_3435$$.$_isMobile$ || "alta" == $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_3435$$.$_tmap$.$_skinName$ ? D.$JSCompiler_alias_FALSE$$ : 
  $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("gradient");
  $backgroundColor$$10$$ && $dataObj$$7_strokeStyle$$ ? $dataObj$$7_strokeStyle$$.$_categories$.push($backgroundColor$$10$$) : $patternColor$$ && $dataObj$$7_strokeStyle$$ && $dataObj$$7_strokeStyle$$.$_categories$.push($patternColor$$);
  var $opacity$$5$$;
  $opacity$$5$$ = $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("opacity") ? (0,window.parseFloat)($cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("opacity")) : 1;
  $dataObj$$7_strokeStyle$$ && $dataObj$$7_strokeStyle$$.$setDatatipColor$($backgroundColor$$10$$ ? $backgroundColor$$10$$ : $patternColor$$);
  if("graduatedSymbol" == $markerStyle_styleType$$1$$ && (0,D.$DvtMarker$isBuiltInShape$$)($displayable$$30$$.$getType$())) {
    $markerStyle_styleType$$1$$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_3435$$.$_tmap$.$_markerStyle$;
    $dataObj$$7_strokeStyle$$ = $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("border-style") ? $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("border-style") : $markerStyle_styleType$$1$$.$getStyle$("border-style");
    if("none" != $dataObj$$7_strokeStyle$$) {
      var $strokeColor$$1$$ = $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("border-color") ? $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("border-color") : $markerStyle_styleType$$1$$.$getStyle$("border-color");
      ($cssStyle$$29_stroke$$35_strokeWidth$$6$$ = $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("border-width") ? $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("border-width") : $markerStyle_styleType$$1$$.$getStyle$("border-width")) && ($cssStyle$$29_stroke$$35_strokeWidth$$6$$ = (0,window.parseFloat)($cssStyle$$29_stroke$$35_strokeWidth$$6$$.substring(0, $cssStyle$$29_stroke$$35_strokeWidth$$6$$.indexOf("px"))));
      $cssStyle$$29_stroke$$35_strokeWidth$$6$$ = new D.$DvtSolidStroke$$($strokeColor$$1$$, 1, $cssStyle$$29_stroke$$35_strokeWidth$$6$$);
      $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($dataObj$$7_strokeStyle$$));
      $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_3435$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($cssStyle$$29_stroke$$35_strokeWidth$$6$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
      $displayable$$30$$.$setStroke$($cssStyle$$29_stroke$$35_strokeWidth$$6$$)
    }
    "true" == $borderColor$$22_gradient$$4$$ && $backgroundColor$$10$$ ? $displayable$$30$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$10$$, $displayable$$30$$, $opacity$$5$$)) : $pattern$$7$$ ? $displayable$$30$$.$setFill$(new D.$DvtPatternFill$$($pattern$$7$$, $patternColor$$, $backgroundColor$$10$$)) : $backgroundColor$$10$$ ? $displayable$$30$$.$setSolidFill$($backgroundColor$$10$$, $opacity$$5$$) : $displayable$$30$$.$setSolidFill$($markerStyle_styleType$$1$$.$getStyle$("background-color"), 
    $opacity$$5$$)
  }else {
    if("colorStyles" == $markerStyle_styleType$$1$$) {
      if(($borderColor$$22_gradient$$4$$ = $cssStyle$$29_stroke$$35_strokeWidth$$6$$.$getStyle$("border-color")) && "transparent" != $borderColor$$22_gradient$$4$$) {
        $cssStyle$$29_stroke$$35_strokeWidth$$6$$ = new D.$DvtSolidStroke$$($borderColor$$22_gradient$$4$$), $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_3435$$.$_tmap$.$_bSupportsVectorEffects$ && ($cssStyle$$29_stroke$$35_strokeWidth$$6$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$30$$.$setStroke$($cssStyle$$29_stroke$$35_strokeWidth$$6$$)
      }
      $pattern$$7$$ ? ($JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_3435$$ = new D.$DvtPatternFill$$($pattern$$7$$, $patternColor$$, $backgroundColor$$10$$), $displayable$$30$$.$_ptFill$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_3435$$) : $backgroundColor$$10$$ && "transparent" != $backgroundColor$$10$$ ? $displayable$$30$$.$setSolidFill$($backgroundColor$$10$$, $opacity$$5$$) : $displayable$$30$$.$setFill$(D.$JSCompiler_alias_NULL$$)
    }
  }
};
D.$DvtThematicMapJsonParser$$ = function $$DvtThematicMapJsonParser$$$($tmap$$13$$) {
  this.Init($tmap$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapJsonParser$$, D.$DvtObj$$, "DvtThematicMapJsonParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapJsonParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$14$$) {
  this.$_tmap$ = $tmap$$14$$;
  this.$_isCustomBasemap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = D.$DvtAgent$$.$isTouchDevice$();
  this.$_customAreaLayerImages$ = {}
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$37$$) {
  $options$$37$$.skin = "alta";
  this.$ParseMapProperties$($options$$37$$);
  var $areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$ = $options$$37$$.styleDefaults;
  this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$.areaStyle + $areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$.labelStyle);
  var $basemap$$inline_3499_cssStyle$$inline_9335$$ = new D.$DvtCSSStyle$$("fill-type:solid;background-color:" + $areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$.backgroundColor);
  this.$_tmap$.$_compCSSStyle$ = $basemap$$inline_3499_cssStyle$$inline_9335$$;
  this.$_tmap$.$_styleDefaults$ = $areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$;
  this.$_isCustomBasemap$ && ($areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$ = (new D.$DvtXmlParser$$).parse($options$$37$$.sourceXml)) && this.$ParseCustomBasemap$($areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$);
  for(var $areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$ = $options$$37$$.areaLayers, $basemap$$inline_3499_cssStyle$$inline_9335$$ = this.$_tmap$.$_mapName$, $i$$inline_3500$$ = 0;$i$$inline_3500$$ < $areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$.length;$i$$inline_3500$$++) {
    var $areaLayer$$inline_3501$$ = D.$DvtJSONUtils$$.$merge$($areaLayers$$inline_3498_styles$$inline_3495_xmlNode$$16$$[$i$$inline_3500$$], D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), $children$$inline_9347_layer$$inline_3502$$ = $areaLayer$$inline_3501$$.layer;
    if($children$$inline_9347_layer$$inline_3502$$) {
      var $mapLayer$$inline_3503$$;
      $areaLayer$$inline_3501$$.areaStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_3501$$.areaStyle);
      if(this.$_isCustomBasemap$) {
        $mapLayer$$inline_3503$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_9347_layer$$inline_3502$$, D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_3501$$.labelDisplay, $areaLayer$$inline_3501$$.labelType, this.$_tmap$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setAreaLayerImage$$)($mapLayer$$inline_3503$$, this.$_customAreaLayerImages$[$children$$inline_9347_layer$$inline_3502$$])
      }else {
        $mapLayer$$inline_3503$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_9347_layer$$inline_3502$$, D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_3501$$.labelDisplay, $areaLayer$$inline_3501$$.labelType, this.$_tmap$.$_eventHandler$);
        var $areaNames$$inline_3504_values$$inline_9344$$ = D.$DvtBaseMapManager$$.$getAreaNames$($basemap$$inline_3499_cssStyle$$inline_9335$$, $children$$inline_9347_layer$$inline_3502$$), $shapes$$inline_9341$$ = this.$_createPathShapes$($areaNames$$inline_3504_values$$inline_9344$$);
        $mapLayer$$inline_3503$$.$AreaShapes$ = $shapes$$inline_9341$$;
        (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($mapLayer$$inline_3503$$, $areaNames$$inline_3504_values$$inline_9344$$);
        $areaNames$$inline_3504_values$$inline_9344$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($basemap$$inline_3499_cssStyle$$inline_9335$$, $children$$inline_9347_layer$$inline_3502$$);
        $mapLayer$$inline_3503$$.$_labelInfo$ = $areaNames$$inline_3504_values$$inline_9344$$;
        $children$$inline_9347_layer$$inline_3502$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_9347_layer$$inline_3502$$);
        $mapLayer$$inline_3503$$.$_children$ = $children$$inline_9347_layer$$inline_3502$$
      }
      $mapLayer$$inline_3503$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $mapLayer$$inline_3503$$.$setAnimation$("auto" == $areaLayer$$inline_3501$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_3501$$.animationOnLayerChange);
      $mapLayer$$inline_3503$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($mapLayer$$inline_3503$$);
      $areaLayer$$inline_3501$$.areaDataLayer && this.$ParseDataLayers$([$areaLayer$$inline_3501$$.areaDataLayer], $mapLayer$$inline_3503$$, D.$JSCompiler_alias_TRUE$$);
      $areaLayer$$inline_3501$$.pointDataLayers && this.$ParseDataLayers$($areaLayer$$inline_3501$$.pointDataLayers, $mapLayer$$inline_3503$$, D.$JSCompiler_alias_FALSE$$)
    }
  }
  this.$ParseDataLayers$($options$$37$$.pointDataLayers, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseMapProperties$ = function $$JSCompiler_prototypeAlias$$$$ParseMapProperties$$($options$$38$$) {
  this.$_tmap$.$setAnimationDuration$($options$$38$$.animationDuration / 1E3);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$38$$.animationOnDisplay ? "alphaFade" : $options$$38$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$38$$.animationOnMapChange ? "alphaFade" : $options$$38$$.animationOnMapChange;
  this.$_isCustomBasemap$ = $options$$38$$.source != D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$ = this.$_tmap$, $attr$$inline_9356$$ = this.$_isCustomBasemap$ ? "$" + $options$$38$$.basemap : $options$$38$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$.$_mapName$ != $attr$$inline_9356$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$.$_mapName$ = $attr$$inline_9356$$;
  this.$_tmap$.$_controlPanelBehavior$ = $options$$38$$.controlPanelBehavior;
  this.$_tmap$.$setDrillMode$("none");
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$38$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$38$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$38$$.panning;
  $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$ = $options$$38$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$ = "shortDescOnly" : "labelAndShortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$ && ($JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9355_tooltipDisplay$$;
  this.$_tmap$.$_zooming$ = "auto" == $options$$38$$.zooming
};
D.$JSCompiler_prototypeAlias$$.$ParseDataLayers$ = function $$JSCompiler_prototypeAlias$$$$ParseDataLayers$$($dataLayers$$7$$, $parentLayer$$5$$, $isAreaDataLayer$$) {
  if($dataLayers$$7$$) {
    for(var $i$$326$$ = 0;$i$$326$$ < $dataLayers$$7$$.length;$i$$326$$++) {
      var $dataLayerOptions_initSelections$$2$$ = D.$DvtJSONUtils$$.$merge$($dataLayers$$7$$[$i$$326$$], D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      $parentLayer$$5$$ ? $parentLayer$$5$$ instanceof D.$DvtMapAreaLayer$$ && (0,D.$JSCompiler_StaticMethods_resetRenderedAreas$$)($parentLayer$$5$$) : ($parentLayer$$5$$ = new D.$DvtMapLayer$$(this.$_tmap$, this.$_tmap$.$_eventHandler$), this.$_tmap$.$_layers$.push($parentLayer$$5$$));
      var $dataLayer$$20$$ = new D.$DvtMapDataLayer$$(this.$_tmap$, $parentLayer$$5$$, $dataLayerOptions_initSelections$$2$$.id, this.$_tmap$.$_eventHandler$), $initDisclosed_selectionMode$$1$$ = $dataLayerOptions_initSelections$$2$$.selection;
      "single" == $initDisclosed_selectionMode$$1$$ ? $dataLayer$$20$$.$setSelectionMode$("s") : "multiple" == $initDisclosed_selectionMode$$1$$ && $dataLayer$$20$$.$setSelectionMode$("m");
      $dataLayer$$20$$.$setAnimation$("auto" == $dataLayerOptions_initSelections$$2$$.animationOnDataChange ? "alphaFade" : $dataLayerOptions_initSelections$$2$$.animationOnDataChange);
      $dataLayer$$20$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      var $isolatedRowKey$$2$$ = D.$JSCompiler_alias_NULL$$;
      $parentLayer$$5$$ instanceof D.$DvtMapAreaLayer$$ && ($isolatedRowKey$$2$$ = $dataLayerOptions_initSelections$$2$$.isolatedItem);
      var $disclosedItems_markers$$2$$ = $dataLayerOptions_initSelections$$2$$.disclosedItems, $initDisclosed_selectionMode$$1$$ = [], $isolatedAreaId$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$ = $dataLayerOptions_initSelections$$2$$.areas;
      if($JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$) {
        for(var $j$$32$$ = 0;$j$$32$$ < $JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$.length;$j$$32$$++) {
          var $areaId$$5_dataObj$$11_obj$$inline_3543$$ = $JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$[$j$$32$$].location;
          if($isolatedRowKey$$2$$) {
            if($isolatedRowKey$$2$$ != $JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$[$j$$32$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$5_dataObj$$11_obj$$inline_3543$$
            }
          }
          $disclosedItems_markers$$2$$ && -1 != $disclosedItems_markers$$2$$.indexOf($JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$[$j$$32$$].id) && $initDisclosed_selectionMode$$1$$.push($areaId$$5_dataObj$$11_obj$$inline_3543$$);
          if($areaId$$5_dataObj$$11_obj$$inline_3543$$ = this.$_parseMapArea$($parentLayer$$5$$, $dataLayer$$20$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$[$j$$32$$])) {
            if($dataLayer$$20$$.$isSelectable$()) {
              var $displayable$$39$$ = $areaId$$5_dataObj$$11_obj$$inline_3543$$.$getDisplayable$();
              $displayable$$39$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)
            }
            (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($dataLayer$$20$$, $areaId$$5_dataObj$$11_obj$$inline_3543$$)
          }
        }
      }
      if($disclosedItems_markers$$2$$ = $dataLayerOptions_initSelections$$2$$.markers) {
        for($j$$32$$ = 0;$j$$32$$ < $disclosedItems_markers$$2$$.length;$j$$32$$++) {
          $areaId$$5_dataObj$$11_obj$$inline_3543$$ = $disclosedItems_markers$$2$$[$j$$32$$].location;
          if($isAreaDataLayer$$ && $isolatedRowKey$$2$$) {
            if($isolatedRowKey$$2$$ != $disclosedItems_markers$$2$$[$j$$32$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$5_dataObj$$11_obj$$inline_3543$$
            }
          }
          if($areaId$$5_dataObj$$11_obj$$inline_3543$$ = this.$_parseMapMarker$($parentLayer$$5$$, $dataLayer$$20$$, $disclosedItems_markers$$2$$[$j$$32$$], $isAreaDataLayer$$)) {
            $dataLayer$$20$$.$isSelectable$() && ($displayable$$39$$ = $areaId$$5_dataObj$$11_obj$$inline_3543$$.$getDisplayable$(), $displayable$$39$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), $JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$ = $dataLayer$$20$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$.$_dataObjs$.push($areaId$$5_dataObj$$11_obj$$inline_3543$$), $JSCompiler_StaticMethods_addDataObject$self$$inline_3542_areas$$7$$.$_eventHandler$.$associate$($areaId$$5_dataObj$$11_obj$$inline_3543$$.$getDisplayable$(), 
            $areaId$$5_dataObj$$11_obj$$inline_3543$$)
          }
        }
      }
      $isolatedAreaId$$ && ($dataLayer$$20$$.$_isolatedAreaRowKey$ = $isolatedRowKey$$2$$, (0,D.$JSCompiler_StaticMethods_setIsolatedArea$$)($parentLayer$$5$$, $isolatedAreaId$$));
      if(($dataLayerOptions_initSelections$$2$$ = $dataLayerOptions_initSelections$$2$$.selectedItems) && 0 < $dataLayerOptions_initSelections$$2$$.length) {
        $dataLayer$$20$$.$_initSelections$ = $dataLayerOptions_initSelections$$2$$
      }
      $initDisclosed_selectionMode$$1$$ && 0 < $initDisclosed_selectionMode$$1$$.length && (this.$_tmap$.$_initDrilled$[$parentLayer$$5$$.$LayerName$] = [$dataLayer$$20$$.$getClientId$(), $initDisclosed_selectionMode$$1$$]);
      $parentLayer$$5$$.$DataLayers$[$dataLayer$$20$$.$getClientId$()] = $dataLayer$$20$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseCustomBasemap$ = function $$JSCompiler_prototypeAlias$$$$ParseCustomBasemap$$($childNodes$$16_xmlNode$$17$$) {
  $childNodes$$16_xmlNode$$17$$ = $childNodes$$16_xmlNode$$17$$.$getChildNodes$();
  for(var $node$$60$$, $nodeName$$7$$, $i$$327$$ = 0;$i$$327$$ < $childNodes$$16_xmlNode$$17$$.length;$i$$327$$++) {
    $node$$60$$ = $childNodes$$16_xmlNode$$17$$[$i$$327$$], $nodeName$$7$$ = $node$$60$$.getName(), "layer" == $nodeName$$7$$ ? this.$_parseCustomLayer$($node$$60$$) : "points" == $nodeName$$7$$ && this.$_parseCustomPoints$($node$$60$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomLayer$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomLayer$$($layerName$$32_xmlNode$$18$$) {
  var $childNodes$$17$$ = $layerName$$32_xmlNode$$18$$.$getChildNodes$();
  $layerName$$32_xmlNode$$18$$ = $layerName$$32_xmlNode$$18$$.$getAttr$("id");
  for(var $dir$$5_node$$61$$, $image$$16_nodeName$$8$$, $images$$13$$ = [], $i$$328$$ = 0;$i$$328$$ < $childNodes$$17$$.length;$i$$328$$++) {
    if($dir$$5_node$$61$$ = $childNodes$$17$$[$i$$328$$], $image$$16_nodeName$$8$$ = $dir$$5_node$$61$$.getName(), "image" == $image$$16_nodeName$$8$$) {
      $image$$16_nodeName$$8$$ = {};
      $image$$16_nodeName$$8$$.source = $dir$$5_node$$61$$.$getAttr$("source");
      $image$$16_nodeName$$8$$.width = $dir$$5_node$$61$$.$getAttr$("width");
      $image$$16_nodeName$$8$$.height = $dir$$5_node$$61$$.$getAttr$("height");
      var $bidi$$4$$ = $dir$$5_node$$61$$.$getAttr$("bidi");
      $dir$$5_node$$61$$ = $dir$$5_node$$61$$.$getAttr$("dir");
      $image$$16_nodeName$$8$$.dir = "true" == $bidi$$4$$ || "rtl" == $dir$$5_node$$61$$ ? "rtl" : "ltr";
      $images$$13$$.push($image$$16_nodeName$$8$$)
    }
  }
  this.$_customAreaLayerImages$[$layerName$$32_xmlNode$$18$$] = $images$$13$$
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomPoints$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomPoints$$($childNodes$$18_xmlNode$$19$$) {
  $childNodes$$18_xmlNode$$19$$ = $childNodes$$18_xmlNode$$19$$.$getChildNodes$();
  for(var $node$$62$$, $nodeName$$9$$, $points$$32$$ = {}, $labels$$5$$ = {}, $i$$329$$ = 0;$i$$329$$ < $childNodes$$18_xmlNode$$19$$.length;$i$$329$$++) {
    $node$$62$$ = $childNodes$$18_xmlNode$$19$$[$i$$329$$], $nodeName$$9$$ = $node$$62$$.getName(), "point" == $nodeName$$9$$ && ($points$$32$$[$node$$62$$.$getAttr$("name")] = [$node$$62$$.$getAttr$("x"), $node$$62$$.$getAttr$("y")], $labels$$5$$[$node$$62$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $node$$62$$.$getAttr$("longLabel")])
  }
  D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $labels$$5$$, $points$$32$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$_createPathShapes$ = function $$JSCompiler_prototypeAlias$$$$_createPathShapes$$($areaNames$$3$$) {
  var $shapes$$6$$ = {}, $context$$419$$ = this.$_tmap$.$_context$, $area$$21$$;
  for($area$$21$$ in $areaNames$$3$$) {
    $shapes$$6$$[$area$$21$$] = new D.$DvtPath$$($context$$419$$), (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)(this, this.$_areaLayerStyle$, $shapes$$6$$[$area$$21$$])
  }
  return $shapes$$6$$
};
D.$JSCompiler_prototypeAlias$$.$_parseMapArea$ = function $$JSCompiler_prototypeAlias$$$$_parseMapArea$$($layer$$16$$, $dataLayer$$21$$, $data$$28$$) {
  var $areaId$$6_dataObj$$12$$ = $data$$28$$.location;
  if($layer$$16$$.$AreaShapes$[$areaId$$6_dataObj$$12$$] && $data$$28$$.color) {
    $layer$$16$$.$_renderArea$[$areaId$$6_dataObj$$12$$] = D.$JSCompiler_alias_FALSE$$;
    var $context$$420$$ = this.$_tmap$.$_context$, $path$$15$$ = new D.$DvtDrillablePath$$($context$$420$$, this.$_tmap$.$_bSupportsVectorEffects$);
    $data$$28$$ = D.$DvtJSONUtils$$.$merge$($data$$28$$, this.$_tmap$.$_styleDefaults$.dataAreaDefaults);
    $data$$28$$.labelStyle || ($data$$28$$.labelStyle = this.$_tmap$.$_styleDefaults$.labelStyle);
    var $dis$$8_hs$$1$$ = new D.$DvtSolidStroke$$($data$$28$$.hoverColor, 1, 2), $dos$$1_sis$$2$$ = new D.$DvtSolidStroke$$($data$$28$$.selectedInnerColor, 1, 1), $sos$$1$$ = new D.$DvtSolidStroke$$($data$$28$$.selectedOuterColor, 1, 4);
    $path$$15$$.$setHoverStroke$($dis$$8_hs$$1$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($dos$$1_sis$$2$$, $sos$$1$$);
    $dis$$8_hs$$1$$ = new D.$DvtSolidStroke$$($data$$28$$.drilledInnerColor, 1, 2);
    $dos$$1_sis$$2$$ = new D.$DvtSolidStroke$$($data$$28$$.drilledOuterColor, 1, 4);
    (0,D.$JSCompiler_StaticMethods_setDisclosedStroke$$)($path$$15$$, $dis$$8_hs$$1$$, $dos$$1_sis$$2$$);
    $areaId$$6_dataObj$$12$$ = new D.$DvtMapDataArea$$($context$$420$$, $dataLayer$$21$$, $data$$28$$.id, $data$$28$$.clientId, $areaId$$6_dataObj$$12$$);
    $areaId$$6_dataObj$$12$$.$setDisplayable$($path$$15$$);
    (0,D.$JSCompiler_StaticMethods__parseCommonData$$)(this, $layer$$16$$, $dataLayer$$21$$, $data$$28$$, $path$$15$$, $areaId$$6_dataObj$$12$$, D.$JSCompiler_alias_TRUE$$);
    return $areaId$$6_dataObj$$12$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_parseMapMarker$ = function $$JSCompiler_prototypeAlias$$$$_parseMapMarker$$($layer$$17$$, $dataLayer$$22$$, $data$$29$$, $isParentAreaDataLayer$$) {
  var $center$$7_data$$inline_3570_rotation$$5$$;
  $center$$7_data$$inline_3570_rotation$$5$$ = $data$$29$$;
  var $context$$421_mapName$$inline_3572_radianRot$$1$$ = this.$_tmap$.$_mapName$, $areaId$$inline_3573_imgSrc$$4_shapeType$$2$$ = $center$$7_data$$inline_3570_rotation$$5$$.location;
  $center$$7_data$$inline_3570_rotation$$5$$ = $areaId$$inline_3573_imgSrc$$4_shapeType$$2$$ ? $isParentAreaDataLayer$$ ? D.$DvtBaseMapManager$$.$getAreaCenter$($context$$421_mapName$$inline_3572_radianRot$$1$$, $layer$$17$$.$LayerName$, $areaId$$inline_3573_imgSrc$$4_shapeType$$2$$) : D.$DvtBaseMapManager$$.$getCityCoordinates$($context$$421_mapName$$inline_3572_radianRot$$1$$, $areaId$$inline_3573_imgSrc$$4_shapeType$$2$$) : D.$DvtThematicMapProjections$$.$project$($center$$7_data$$inline_3570_rotation$$5$$.x, 
  $center$$7_data$$inline_3570_rotation$$5$$.y, this.$_tmap$.$_mapName$);
  if(!$center$$7_data$$inline_3570_rotation$$5$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $context$$421_mapName$$inline_3572_radianRot$$1$$ = this.$_tmap$.$_context$;
  window.dataObj = new D.$DvtMapDataMarker$$($context$$421_mapName$$inline_3572_radianRot$$1$$, $dataLayer$$22$$, $data$$29$$.id, $data$$29$$.clientId, $data$$29$$.location);
  window.dataObj.$setCenter$($center$$7_data$$inline_3570_rotation$$5$$);
  $data$$29$$ = D.$DvtJSONUtils$$.$merge$($data$$29$$, this.$_tmap$.$_styleDefaults$.dataMarkerDefaults);
  ($areaId$$inline_3573_imgSrc$$4_shapeType$$2$$ = $data$$29$$.source) ? $areaId$$inline_3573_imgSrc$$4_shapeType$$2$$ = [$areaId$$inline_3573_imgSrc$$4_shapeType$$2$$, $data$$29$$.sourceSelected, $data$$29$$.sourceHover, $data$$29$$.sourceHoverSelected] : ($areaId$$inline_3573_imgSrc$$4_shapeType$$2$$ = $data$$29$$.shape) || ($areaId$$inline_3573_imgSrc$$4_shapeType$$2$$ = "c");
  var $sx$$15$$ = $data$$29$$.scaleX;
  (0,window.isNaN)($sx$$15$$) && ($sx$$15$$ = 1);
  var $sy$$15$$ = $data$$29$$.scaleY;
  (0,window.isNaN)($sy$$15$$) && ($sy$$15$$ = 1);
  var $w$$60$$ = $data$$29$$.width, $h$$61$$ = $data$$29$$.height;
  if(!$w$$60$$ || (0,window.isNaN)($w$$60$$)) {
    $w$$60$$ = 8
  }
  if(!$h$$61$$ || (0,window.isNaN)($h$$61$$)) {
    $h$$61$$ = 8
  }
  window.marker = new D.$DvtMarker$$($context$$421_mapName$$inline_3572_radianRot$$1$$, $areaId$$inline_3573_imgSrc$$4_shapeType$$2$$, "alta", $center$$7_data$$inline_3570_rotation$$5$$.x - $w$$60$$ * $sx$$15$$ / 2, $center$$7_data$$inline_3570_rotation$$5$$.y - $h$$61$$ * $sy$$15$$ / 2, $w$$60$$, $h$$61$$, D.$JSCompiler_alias_NULL$$, $sx$$15$$, $sy$$15$$);
  window.dataObj.$setDisplayable$(window.marker);
  window.dataObj.$setSize$($w$$60$$ * $sx$$15$$ * $h$$61$$ * $sy$$15$$);
  window.dataObj.$setLabelPosition$($data$$29$$.labelPosition);
  if($center$$7_data$$inline_3570_rotation$$5$$ = $data$$29$$.rotation) {
    $context$$421_mapName$$inline_3572_radianRot$$1$$ = $center$$7_data$$inline_3570_rotation$$5$$ * window.Math.PI / 180, window.marker.$setRotation$($context$$421_mapName$$inline_3572_radianRot$$1$$), $center$$7_data$$inline_3570_rotation$$5$$ = window.dataObj.$getCenter$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(window.marker, $center$$7_data$$inline_3570_rotation$$5$$.x - ($center$$7_data$$inline_3570_rotation$$5$$.x * window.Math.cos($context$$421_mapName$$inline_3572_radianRot$$1$$) - 
    $center$$7_data$$inline_3570_rotation$$5$$.y * window.Math.sin($context$$421_mapName$$inline_3572_radianRot$$1$$)), $center$$7_data$$inline_3570_rotation$$5$$.y - ($center$$7_data$$inline_3570_rotation$$5$$.x * window.Math.sin($context$$421_mapName$$inline_3572_radianRot$$1$$) + $center$$7_data$$inline_3570_rotation$$5$$.y * window.Math.cos($context$$421_mapName$$inline_3572_radianRot$$1$$)))
  }
  (0,D.$JSCompiler_StaticMethods__parseCommonData$$)(this, $layer$$17$$, $dataLayer$$22$$, $data$$29$$, window.marker, window.dataObj, $isParentAreaDataLayer$$);
  return window.dataObj
};
D.$JSCompiler_StaticMethods__parseCommonData$$ = function $$JSCompiler_StaticMethods__parseCommonData$$$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$, $layer$$18$$, $dataLayer$$23$$, $data$$30$$, $areaId$$inline_3601_displayable$$40$$, $dataObj$$13$$, $isParentAreaDataLayer$$1$$) {
  var $areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$ = $data$$30$$.location;
  $isParentAreaDataLayer$$1$$ && "auto" == $layer$$18$$.$getLabelDisplay$() && ($layer$$18$$.$_renderLabel$[$areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$] = D.$JSCompiler_alias_FALSE$$);
  $data$$30$$.action && ($dataObj$$13$$.$_hasAction$ = D.$JSCompiler_alias_TRUE$$, $dataObj$$13$$.$_action$ = $data$$30$$.action);
  if($areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$ = $data$$30$$.destination) {
    var $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$ = [];
    $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$.destination = $areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$;
    $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$.targetFrame = "_blank";
    $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$.focusable = D.$JSCompiler_alias_TRUE$$;
    (0,D.$JSCompiler_StaticMethods_setHyperlink$$)($areaId$$inline_3601_displayable$$40$$, $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$)
  }
  $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$.$_tmap$.$_displayTooltips$;
  if("none" != $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$) {
    $areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$ = $data$$30$$.shortDesc;
    if("auto" == $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$) {
      var $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$;
      ($areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$ = $data$$30$$.location) && ($cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$ = !$isParentAreaDataLayer$$1$$ || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$.$_isCustomBasemap$ ? D.$DvtBaseMapManager$$.$getCityLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$.$_tmap$.$_mapName$, $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$.$_tmap$.$_mapName$, 
      $layer$$18$$.$LayerName$, $areaId$$inline_3593_displayTooltips$$inline_3590_linkObj$$3$$));
      $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$ && ($areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$ = $areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$ ? $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$ + ": " + $areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$ : $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$)
    }
    $areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$ && $dataObj$$13$$.$setDatatip$($areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$)
  }
  $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$ = new D.$DvtCSSStyle$$;
  $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$.$setStyle$("background-color", $data$$30$$.color);
  $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$.$setStyle$("pattern", $data$$30$$.pattern);
  $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$.$setStyle$("border-color", $data$$30$$.borderColor);
  $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$.$setStyle$("border-style", $data$$30$$.borderStyle);
  $data$$30$$.borderWidth && $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$.$setStyle$("border-width", $data$$30$$.borderWidth);
  $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$.$setStyle$("opacity", $data$$30$$.opacity);
  (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$, $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$, $areaId$$inline_3601_displayable$$40$$, $dataObj$$13$$);
  $areaId$$inline_3601_displayable$$40$$ = $data$$30$$.location;
  $areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$ = ($cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$ = $data$$30$$.label) ? "on" : "off";
  $isParentAreaDataLayer$$1$$ && ($areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$ = $layer$$18$$.$getLabelDisplay$());
  !$cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$ && ($dataObj$$13$$ instanceof D.$DvtMapDataArea$$ && "off" != $areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$) && ($cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$ = "long" == $layer$$18$$.$_labelType$ ? $layer$$18$$.$AreaNames$[$areaId$$inline_3601_displayable$$40$$][1] : $layer$$18$$.$AreaNames$[$areaId$$inline_3601_displayable$$40$$][0]);
  if($cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$) {
    var $context$$inline_3604_label$$inline_3605$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$.$_tmap$.$_context$, $context$$inline_3604_label$$inline_3605$$ = $dataObj$$13$$ instanceof D.$DvtMapDataMarker$$ ? new D.$DvtOutputText$$($context$$inline_3604_label$$inline_3605$$, $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$, 0, 0) : new D.$DvtMapLabel$$($context$$inline_3604_label$$inline_3605$$, $cssStyle$$30_labelText$$inline_3602_preDatatip$$inline_3592$$, 
    $layer$$18$$.$getLabelInfoForArea$ ? $layer$$18$$.$getLabelInfoForArea$($areaId$$inline_3601_displayable$$40$$) : D.$JSCompiler_alias_NULL$$, $areaId$$8_datatip$$inline_3591_destination$$5_labelDisplay$$inline_3603$$, $dataLayer$$23$$.$_dataLabelLayer$, $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$.$_tmap$.$_bSupportsVectorEffects$);
    $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$ = new D.$DvtCSSStyle$$($data$$30$$.labelStyle);
    $context$$inline_3604_label$$inline_3605$$ instanceof D.$DvtMapLabel$$ && ($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$.$getStyle$("color") || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($dataObj$$13$$.$getDatatipColor$())));
    $context$$inline_3604_label$$inline_3605$$.$setCSSStyle$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_3606$$)
  }
  $dataObj$$13$$.$setLabel$($context$$inline_3604_label$$inline_3605$$)
};
D.$JSCompiler_StaticMethods__styleDisplayable$$ = function $$JSCompiler_StaticMethods__styleDisplayable$$$($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_3615$$, $borderColor$$23_cssStyle$$31$$, $displayable$$41$$, $dataObj$$16_stroke$$38$$) {
  $borderColor$$23_cssStyle$$31$$ || ($borderColor$$23_cssStyle$$31$$ = {});
  var $pattern$$8$$ = $borderColor$$23_cssStyle$$31$$.$getStyle$("pattern"), $backgroundColor$$11$$ = $borderColor$$23_cssStyle$$31$$.$getStyle$("background-color");
  $dataObj$$16_stroke$$38$$ && $dataObj$$16_stroke$$38$$.$setDatatipColor$($backgroundColor$$11$$);
  if($displayable$$41$$ instanceof D.$DvtMarker$$ && (0,D.$DvtMarker$isBuiltInShape$$)($displayable$$41$$.$getType$())) {
    "none" != $borderColor$$23_cssStyle$$31$$.$getStyle$("border-style") && ($dataObj$$16_stroke$$38$$ = new D.$DvtSolidStroke$$($borderColor$$23_cssStyle$$31$$.$getStyle$("border-color"), 1, $borderColor$$23_cssStyle$$31$$.$getStyle$("border-width")), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_3615$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($dataObj$$16_stroke$$38$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $dataObj$$16_stroke$$38$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($borderColor$$23_cssStyle$$31$$.$getStyle$("border-style"))), 
    $displayable$$41$$.$setStroke$($dataObj$$16_stroke$$38$$));
    var $opacity$$6$$ = $borderColor$$23_cssStyle$$31$$.$getStyle$("opacity");
    "true" == D.$JSCompiler_alias_FALSE$$ && $backgroundColor$$11$$ ? $displayable$$41$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$11$$, $displayable$$41$$, $opacity$$6$$)) : $pattern$$8$$ ? $displayable$$41$$.$setFill$(new D.$DvtPatternFill$$($pattern$$8$$, $backgroundColor$$11$$, "#FFFFFF")) : $backgroundColor$$11$$ ? $displayable$$41$$.$setSolidFill$($backgroundColor$$11$$, $opacity$$6$$) : $displayable$$41$$.$setSolidFill$($borderColor$$23_cssStyle$$31$$.$getStyle$("background-color"), 
    $opacity$$6$$)
  }else {
    if($displayable$$41$$ instanceof D.$DvtPath$$) {
      if(($borderColor$$23_cssStyle$$31$$ = $borderColor$$23_cssStyle$$31$$.$getStyle$("border-color")) && "transparent" != $borderColor$$23_cssStyle$$31$$) {
        $dataObj$$16_stroke$$38$$ = new D.$DvtSolidStroke$$($borderColor$$23_cssStyle$$31$$), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_3615$$.$_tmap$.$_bSupportsVectorEffects$ && ($dataObj$$16_stroke$$38$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$41$$.$setStroke$($dataObj$$16_stroke$$38$$)
      }
      $pattern$$8$$ ? ($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_3615$$ = new D.$DvtPatternFill$$($pattern$$8$$, $backgroundColor$$11$$, "#FFFFFF"), $displayable$$41$$.$_ptFill$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_3615$$) : "transparent" != $backgroundColor$$11$$ ? $displayable$$41$$.$setSolidFill$($backgroundColor$$11$$, $opacity$$6$$) : $displayable$$41$$.$setFill$(D.$JSCompiler_alias_NULL$$)
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
D.$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$188$$, $y$$160$$, $basemap$$5$$) {
  var $point$$30$$;
  switch($basemap$$5$$) {
    case "africa":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$188$$, $y$$160$$));
      break;
    case "asia":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$188$$, $y$$160$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$188$$, $y$$160$$);
      break;
    case "europe":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$188$$, $y$$160$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$188$$, $y$$160$$));
      break;
    case "southAmerica":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$188$$, $y$$160$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$188$$, $y$$160$$));
      break;
    case "emea":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$188$$, $y$$160$$));
      break;
    case "latinAmerica":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$188$$, $y$$160$$));
      break;
    case "usaAndCanada":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$188$$, $y$$160$$));
      break;
    case "worldRegions":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$188$$, $y$$160$$);
      break;
    case "usa":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getUSAProjection$($x$$188$$, $y$$160$$);
      break;
    case "world":
      $point$$30$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$188$$, $y$$160$$)
  }
  return $point$$30$$ ? new D.$DvtPoint$$(10 * $point$$30$$.x, 10 * $point$$30$$.y) : new D.$DvtPoint$$($x$$188$$, $y$$160$$)
};
D.$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$189$$, $y$$161$$) {
  var $viewPortTransform$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$, $x$$189$$, $y$$161$$) || (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$, $x$$189$$, $y$$161$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$189$$, $y$$161$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_RECT$, $x$$189$$, $y$$161$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, new D.$DvtPoint$$($x$$189$$, $y$$161$$))) : 
  (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_USA_RECT$, $x$$189$$, $y$$161$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, D.$DvtThematicMapProjections$$.$_getOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $x$$189$$, $y$$161$$))) : new D.$DvtPoint$$($x$$189$$, 
  $y$$161$$)
};
D.$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$190$$, $y$$162$$) {
  var $viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$1$$, D.$DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$190$$, $y$$162$$))
};
D.$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$191$$, $y$$163$$) {
  var $viewPortTransform$$2$$;
  $viewPortTransform$$2$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $x$$191$$, $y$$163$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$2$$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$191$$, $y$$163$$))
};
D.$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$31$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new D.$DvtMatrix$$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds_viewPortTransform$$3$$, $point$$31$$)
};
D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c$$15_sP1$$, $n$$8_sP2$$, $theta$$1_x$$192$$, $rho_y$$164$$) {
  $lambda0_lonOfOrigin$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c$$15_sP1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$15_sP1$$);
  $n$$8_sP2$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$8_sP2$$);
  $n$$8_sP2$$ = 0.5 * (window.Math.sin($c$$15_sP1$$) + window.Math.sin($n$$8_sP2$$));
  $c$$15_sP1$$ = window.Math.pow(window.Math.cos($c$$15_sP1$$), 2) + 2 * $n$$8_sP2$$ * window.Math.sin($c$$15_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c$$15_sP1$$ - 2 * $n$$8_sP2$$ * window.Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = window.Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$8_sP2$$;
  $theta$$1_x$$192$$ = $n$$8_sP2$$ * (D.$DvtThematicMapProjections$$.$toRadians$($theta$$1_x$$192$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$164$$ = $c$$15_sP1$$ - 2 * $n$$8_sP2$$ * window.Math.sin(D.$DvtThematicMapProjections$$.$toRadians$($rho_y$$164$$));
  $rho_y$$164$$ = window.Math.sqrt($rho_y$$164$$) / $n$$8_sP2$$;
  return new D.$DvtPoint$$($rho_y$$164$$ * window.Math.sin($theta$$1_x$$192$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$164$$ * window.Math.cos($theta$$1_x$$192$$))
};
D.$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$193$$, $y$$165$$) {
  var $pY$$1$$ = window.Math.log(window.Math.tan(0.25 * window.Math.PI + 0.5 * D.$DvtThematicMapProjections$$.$toRadians$($y$$165$$)));
  return new D.$DvtPoint$$($x$$193$$, D.$DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
D.$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$8_centerY$$5$$, $radX$$1_x$$194$$, $radY$$1_y$$166$$) {
  $radX$$1_x$$194$$ = D.$DvtThematicMapProjections$$.$toRadians$($radX$$1_x$$194$$);
  $radY$$1_y$$166$$ = D.$DvtThematicMapProjections$$.$toRadians$($radY$$1_y$$166$$);
  var $centerX$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$8_centerY$$5$$.x);
  $center$$8_centerY$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$8_centerY$$5$$.y);
  return new D.$DvtPoint$$(window.Math.cos($radY$$1_y$$166$$) * window.Math.sin($radX$$1_x$$194$$ - $centerX$$5$$) * D.$DvtThematicMapProjections$$.$_RADIUS$, (window.Math.cos($center$$8_centerY$$5$$) * window.Math.sin($radY$$1_y$$166$$) - window.Math.sin($center$$8_centerY$$5$$) * window.Math.cos($radY$$1_y$$166$$) * window.Math.cos($radX$$1_x$$194$$ - $centerX$$5$$)) * D.$DvtThematicMapProjections$$.$_RADIUS$)
};
D.$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$195$$, $y$$167$$) {
  var $newY$$4_ycriteria$$ = window.Math.floor(window.Math.abs($y$$167$$) / 5);
  $newY$$4_ycriteria$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY$$4_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (window.Math.abs($y$$167$$) - 5 * $newY$$4_ycriteria$$) / 5, $newX$$4$$ = $x$$195$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$4_ycriteria$$][0] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$4_ycriteria$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$4_ycriteria$$][0])), $newY$$4_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$4_ycriteria$$][1] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$4_ycriteria$$ + 
  1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$4_ycriteria$$][1]);
  0 > $y$$167$$ && ($newY$$4_ycriteria$$ *= -1);
  return new D.$DvtPoint$$($newX$$4$$, 180 * $newY$$4_ycriteria$$)
};
D.$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$9$$, $point$$32$$) {
  return new D.$DvtPoint$$($point$$32$$.x * $matrix$$9$$.$_a$ + $matrix$$9$$.$_tx$, $point$$32$$.y * $matrix$$9$$.$_d$ + $matrix$$9$$.$_ty$)
};
D.$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new D.$DvtMatrix$$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
D.$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$330$$ = $deviceView$$.x, $d6_j$$33$$ = $deviceView$$.y, $d$$4$$ = $mapBound$$.$w$, $d1$$ = $mapBound$$.$h$, $d2_d3$$ = 0, $d2_d3$$ = $deviceView$$.$w$ / $d$$4$$, $d4$$ = $deviceView$$.$h$ / $d1$$, $d2_d3$$ = $d2_d3$$ <= $d4$$ ? $d2_d3$$ : $d4$$, $d5_i$$330$$ = $d5_i$$330$$ - $mapBound$$.x * $d2_d3$$, $d6_j$$33$$ = $d6_j$$33$$ + $mapBound$$.y * $d2_d3$$, $d5_i$$330$$ = $d5_i$$330$$ + ($deviceView$$.$w$ - $d$$4$$ * $d2_d3$$) / 2, $d6_j$$33$$ = $d6_j$$33$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - 
  $d1$$ * $d2_d3$$) / 2);
  return new D.$DvtMatrix$$($d2_d3$$, 0, 0, -$d2_d3$$, $d5_i$$330$$, $d6_j$$33$$)
};
D.$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$196$$) {
  return $x$$196$$ * (window.Math.PI / 180)
};
D.$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$197$$) {
  return $x$$197$$ * (180 / window.Math.PI)
};
D.$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$198$$, $y$$168$$, $basemap$$6$$) {
  var $point$$33$$;
  $x$$198$$ /= 10;
  $y$$168$$ /= 10;
  switch($basemap$$6$$) {
    case "africa":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new D.$DvtPoint$$($x$$198$$, $y$$168$$));
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$33$$.x, $point$$33$$.y);
      break;
    case "asia":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new D.$DvtPoint$$($x$$198$$, $y$$168$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$33$$.x, $point$$33$$.y);
      break;
    case "australia":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$198$$, $y$$168$$);
      break;
    case "europe":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new D.$DvtPoint$$($x$$198$$, $y$$168$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$33$$.x, $point$$33$$.y);
      break;
    case "northAmerica":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$198$$, $y$$168$$));
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$33$$.x, $point$$33$$.y);
      break;
    case "southAmerica":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$198$$, $y$$168$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, new D.$DvtPoint$$($x$$198$$, $y$$168$$));
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$33$$.x, $point$$33$$.y);
      break;
    case "emea":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new D.$DvtPoint$$($x$$198$$, $y$$168$$));
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$33$$.x, $point$$33$$.y);
      break;
    case "latinAmerica":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$198$$, $y$$168$$));
      break;
    case "usaAndCanada":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new D.$DvtPoint$$($x$$198$$, $y$$168$$));
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$33$$.x, $point$$33$$.y);
      break;
    case "worldRegions":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$198$$, $y$$168$$);
      break;
    case "usa":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$198$$, $y$$168$$);
      break;
    case "world":
      $point$$33$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$198$$, $y$$168$$)
  }
  return $point$$33$$ ? $point$$33$$ : new D.$DvtPoint$$($x$$198$$, $y$$168$$)
};
D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$199$$, $y$$169$$) {
  var $point$$34_viewPortTransform$$4$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$, $x$$199$$, $y$$169$$) ? ($point$$34_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$34_viewPortTransform$$4$$.$invert$(), $point$$34_viewPortTransform$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$34_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$199$$, 
  $y$$169$$)), D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$34_viewPortTransform$$4$$.x, $point$$34_viewPortTransform$$4$$.y)) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$, $x$$199$$, $y$$169$$) ? ($point$$34_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$34_viewPortTransform$$4$$.$invert$(), 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$34_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$199$$, $y$$169$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $x$$199$$, $y$$169$$) ? ($point$$34_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$34_viewPortTransform$$4$$.$invert$(), $point$$34_viewPortTransform$$4$$ = 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$34_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$199$$, $y$$169$$)), D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $point$$34_viewPortTransform$$4$$.x, $point$$34_viewPortTransform$$4$$.y)) : new D.$DvtPoint$$($x$$199$$, $y$$169$$)
};
D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$200$$, $y$$170$$) {
  var $point$$35_viewPortTransform$$5$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$35_viewPortTransform$$5$$.$invert$();
  $point$$35_viewPortTransform$$5$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$35_viewPortTransform$$5$$, new D.$DvtPoint$$($x$$200$$, $y$$170$$));
  return D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$35_viewPortTransform$$5$$.x, $point$$35_viewPortTransform$$5$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$201$$, $y$$171$$) {
  var $point$$36_viewPortTransform$$6$$;
  $point$$36_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$, $x$$201$$, $y$$171$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$36_viewPortTransform$$6$$.$invert$();
  $point$$36_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$36_viewPortTransform$$6$$, new D.$DvtPoint$$($x$$201$$, $y$$171$$));
  return D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$36_viewPortTransform$$6$$.x, $point$$36_viewPortTransform$$6$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$37$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new D.$DvtMatrix$$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds$$1_viewPortTransform$$7$$, $point$$37$$)
};
D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$17_sP1$$1$$, $n$$9_sP2$$1$$, $x$$202$$, $y$$172$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0_phi0$$1$$);
  $c$$17_sP1$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$17_sP1$$1$$);
  $n$$9_sP2$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$9_sP2$$1$$);
  $n$$9_sP2$$1$$ = 0.5 * (window.Math.sin($c$$17_sP1$$1$$) + window.Math.sin($n$$9_sP2$$1$$));
  $c$$17_sP1$$1$$ = window.Math.pow(window.Math.cos($c$$17_sP1$$1$$), 2) + 2 * $n$$9_sP2$$1$$ * window.Math.sin($c$$17_sP1$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = $c$$17_sP1$$1$$ - 2 * $n$$9_sP2$$1$$ * window.Math.sin($latOfOrigin$$1_p0_phi0$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = window.Math.sqrt($latOfOrigin$$1_p0_phi0$$1$$) / $n$$9_sP2$$1$$;
  var $p$$9$$ = window.Math.sqrt($x$$202$$ * $x$$202$$ + ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$172$$) * ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$172$$));
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + window.Math.atan($x$$202$$ / ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$172$$)) / $n$$9_sP2$$1$$), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(($c$$17_sP1$$1$$ - $p$$9$$ * $p$$9$$ * $n$$9_sP2$$1$$ * $n$$9_sP2$$1$$) / (2 * $n$$9_sP2$$1$$))))
};
D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$203$$, $y$$173$$) {
  return new D.$DvtPoint$$($x$$203$$, D.$DvtThematicMapProjections$$.$toDegrees$(2 * window.Math.atan(window.Math.exp(D.$DvtThematicMapProjections$$.$toRadians$($y$$173$$))) - 0.5 * window.Math.PI))
};
D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$9$$, $radX$$2_x$$204$$, $radY$$2_y$$174$$) {
  $radX$$2_x$$204$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$2_y$$174$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$6$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$9$$.y), $p$$10$$ = window.Math.sqrt($radX$$2_x$$204$$ * $radX$$2_x$$204$$ + $radY$$2_y$$174$$ * $radY$$2_y$$174$$), $c$$18$$ = window.Math.asin($p$$10$$);
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$(D.$DvtThematicMapProjections$$.$toRadians$($center$$9$$.x) + window.Math.atan($radX$$2_x$$204$$ * window.Math.sin($c$$18$$) / ($p$$10$$ * window.Math.cos($centerY$$6$$) * window.Math.cos($c$$18$$) - $radY$$2_y$$174$$ * window.Math.sin($centerY$$6$$) * window.Math.sin($c$$18$$)))), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(window.Math.cos($c$$18$$) * window.Math.sin($centerY$$6$$) + $radY$$2_y$$174$$ * window.Math.sin($c$$18$$) * 
  window.Math.cos($centerY$$6$$) / $p$$10$$)))
};
D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$205$$, $y$$175$$) {
  var $criteria$$1_originalX$$ = window.Math.floor(window.Math.abs($y$$175$$) / 5);
  $criteria$$1_originalX$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$1_originalX$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (window.Math.abs($y$$175$$ / 180) - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]) / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$1_originalX$$, $criteria$$1_originalX$$ = $x$$205$$ / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0] + 
  $yInterval$$1$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0]));
  0 > $y$$175$$ && ($originalY$$ *= -1);
  return new D.$DvtPoint$$($criteria$$1_originalX$$, $originalY$$)
};
D.$DvtMapControlButton$$ = function $$DvtMapControlButton$$$($context$$402$$, $button$$23$$, $mapCallback$$3$$, $panZoomCanvas$$17$$, $btype$$3$$, $resources$$19$$, $eventManager$$24$$) {
  this.Init($context$$402$$, $button$$23$$, $mapCallback$$3$$, $panZoomCanvas$$17$$, $btype$$3$$, $resources$$19$$, $eventManager$$24$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapControlButton$$, D.$DvtBaseControl$$, "DvtMapControlButton");
D.$DvtMapControlButton$$.prototype.Init = function $$DvtMapControlButton$$$$Init$($context$$403_proxy$$7$$, $button$$24$$, $mapCallback$$4$$, $panZoomCanvas$$18$$, $btype$$4$$, $resources$$20$$, $eventManager$$25$$) {
  D.$DvtMapControlButton$$.$superclass$.Init.call(this, $context$$403_proxy$$7$$, $panZoomCanvas$$18$$, $resources$$20$$);
  this.$_btype$ = $btype$$4$$;
  this.$_button$ = $button$$24$$;
  this.$_eventManager$ = $eventManager$$25$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_button$, this.$HandleOnClick$, this);
  this.$_button$.setCursor("pointer");
  $context$$403_proxy$$7$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 0 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_DRILLUP") : 1 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_DRILLDOWN") : 2 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, 
  "CONTROL_PANEL_RESET") : D.$JSCompiler_alias_NULL$$);
  this.$_eventManager$.$associate$(this.$_button$, $context$$403_proxy$$7$$);
  this.$addChild$(this.$_button$);
  this.$_mapCallback$ = $mapCallback$$4$$;
  this.$_isEnabled$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtMapControlButton$$.prototype.$setEnabled$ = function $$DvtMapControlButton$$$$$setEnabled$$($enabled$$16$$) {
  this.$setAlpha$($enabled$$16$$ ? 1 : 0.4);
  this.$_button$.setCursor($enabled$$16$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_isEnabled$ = $enabled$$16$$;
  this.$_button$.$setEnabled$($enabled$$16$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_button$)
};
D.$DvtMapControlButton$$.prototype.$HandleOnClick$ = function $$DvtMapControlButton$$$$$HandleOnClick$$($event$$292$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$292$$);
  this.$_isEnabled$ && this.$_mapCallback$ && this.$_mapCallback$()
};
D.$DvtThematicMapControlPanel$$ = function $$DvtThematicMapControlPanel$$$($context$$404$$, $drillMode$$, $buttonImages$$4$$, $callbacks$$4$$, $canvas$$2$$, $resources$$21$$, $controls$$5$$, $view$$11$$) {
  this.Init($context$$404$$, $drillMode$$, $buttonImages$$4$$, $callbacks$$4$$, $canvas$$2$$, $resources$$21$$, $controls$$5$$, $view$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanel$$, D.$DvtControlPanel$$, "DvtThematicMapControlPanel");
D.$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$405$$, $drillMode$$1$$, $buttonImages$$5$$, $callbacks$$5$$, $canvas$$3$$, $resources$$22$$, $controls$$6$$, $view$$12$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$405$$, $canvas$$3$$, $buttonImages$$5$$, $resources$$22$$, $controls$$6$$, $view$$12$$);
  this.$_drillMode$ = $drillMode$$1$$;
  this.$_buttonImages$ = $buttonImages$$5$$;
  this.$_drillUpCallback$ = $callbacks$$5$$[0];
  this.$_drillDownCallback$ = $callbacks$$5$$[1];
  this.$_resetCallback$ = $callbacks$$5$$[2];
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = D.$JSCompiler_alias_NULL$$;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $view$$12$$.$getControlPanelStyleMap$()
};
D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillDownButton$$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$.$setEnabled$($enable$$)
};
D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillUpButton$$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$1$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$1$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$.$setEnabled$($enable$$1$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$1$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0);
    this.$_resetButton$ = D.$DvtButtonLAFUtils$$.$createResetButton$(this.$_context$, this.$_resetCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    $contentSprite$$1$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = D.$DvtButtonLAFUtils$$.$createDrillDownButton$(this.$_context$, this.$_drillDownCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = D.$DvtButtonLAFUtils$$.$createDrillUpButton$(this.$_context$, this.$_drillUpCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillUpButton$)
  }
};
});