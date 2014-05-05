define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreemap$$ = function $$DvtBaseTreemap$$$($context$$295$$, $callback$$52$$, $callbackObj$$28$$) {
  this.Init($context$$295$$, $callback$$52$$, $callbackObj$$28$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemap$$, D.$DvtBaseTreeView$$, "DvtBaseTreemap");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreemap$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$296$$, $callback$$53$$, $callbackObj$$29$$) {
  D.$DvtBaseTreemap$$.$superclass$.Init.call(this, $context$$296$$, $callback$$53$$, $callbackObj$$29$$);
  this.$Defaults$ = new D.$DvtTreemapDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$7$$) {
  return(new D.$DvtTreemapParser$$(this)).parse($xmlString$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($isolateRowKey$$inline_2140_props$$2$$) {
  D.$DvtBaseTreemap$$.$superclass$.$ApplyParsedProperties$.call(this, $isolateRowKey$$inline_2140_props$$2$$);
  this.$_layout$ = $isolateRowKey$$inline_2140_props$$2$$.$layout$;
  this.$_groupGaps$ = $isolateRowKey$$inline_2140_props$$2$$.$groupGaps$;
  this.$_layout$ && (this.$_layout$.$Sorting$ = this.$Sorting$);
  this.$_isolatedNodes$ = [];
  if(($isolateRowKey$$inline_2140_props$$2$$ = $isolateRowKey$$inline_2140_props$$2$$.$isolateRowKey$) && this.$_root$) {
    var $allNodes$$inline_2141$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this.$_root$);
    $allNodes$$inline_2141$$.push(this.$_root$);
    for(var $i$$inline_2142$$ = 0;$i$$inline_2142$$ < $allNodes$$inline_2141$$.length;$i$$inline_2142$$++) {
      if($allNodes$$inline_2141$$[$i$$inline_2142$$].getId() == $isolateRowKey$$inline_2140_props$$2$$) {
        this.$_isolatedNodes$.push($allNodes$$inline_2141$$[$i$$inline_2142$$]);
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$17$$) {
  var $bufferSpace_gap$$4_numIsolated$$ = window.Math.max(window.Math.ceil(7 * window.Math.min($availSpace$$17$$.$w$, $availSpace$$17$$.$h$) / 400), 2);
  $availSpace$$17$$.x += $bufferSpace_gap$$4_numIsolated$$;
  $availSpace$$17$$.y += $bufferSpace_gap$$4_numIsolated$$;
  $availSpace$$17$$.$w$ -= 2 * $bufferSpace_gap$$4_numIsolated$$;
  $availSpace$$17$$.$h$ -= 2 * $bufferSpace_gap$$4_numIsolated$$;
  $bufferSpace_gap$$4_numIsolated$$ = this.$_layout$.$getGapSize$(this, 1);
  $availSpace$$17$$.x += $bufferSpace_gap$$4_numIsolated$$;
  $availSpace$$17$$.$w$ -= 2 * $bufferSpace_gap$$4_numIsolated$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$17$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$17$$);
  $availSpace$$17$$.x -= $bufferSpace_gap$$4_numIsolated$$;
  $availSpace$$17$$.$w$ += 2 * $bufferSpace_gap$$4_numIsolated$$;
  $bufferSpace_gap$$4_numIsolated$$ = this.$_isolatedNodes$.length;
  if(0 < $bufferSpace_gap$$4_numIsolated$$ && this.$_isolateRestoreLayout$) {
    this.$_layout$.$layout$(this, this.$_isolatedNodes$[$bufferSpace_gap$$4_numIsolated$$ - 1], $availSpace$$17$$.x, $availSpace$$17$$.y, $availSpace$$17$$.$w$, $availSpace$$17$$.$h$, D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $availSpace$$17$$.x, $availSpace$$17$$.y, $availSpace$$17$$.$w$, $availSpace$$17$$.$h$, D.$JSCompiler_alias_FALSE$$);
    for(var $i$$214$$ = 0;$i$$214$$ < $bufferSpace_gap$$4_numIsolated$$;$i$$214$$++) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$i$$214$$], $availSpace$$17$$.x, $availSpace$$17$$.y, $availSpace$$17$$.$w$, $availSpace$$17$$.$h$, D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$15_i$$215$$) {
  this.$RenderBackground$($container$$15_i$$215$$, "background-color:#EBEFF5;border-color:#DBE0EA;border-width:2px");
  this.$_breadcrumbs$ && $container$$15_i$$215$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$15_i$$215$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_groupTextLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$15_i$$215$$.$addChild$(this.$_groupTextLayer$);
    this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($container$$15_i$$215$$) : this.$_root$.$hasChildren$() ? this.$_root$.$renderChildren$($container$$15_i$$215$$) : this.$_root$.$render$($container$$15_i$$215$$);
    this.$_isolatedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$15_i$$215$$.$addChild$(this.$_isolatedLayer$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$15_i$$215$$.$addChild$(this.$_selectedLayer$);
    $container$$15_i$$215$$.$addChild$(this.$_groupTextLayer$);
    this.$_hoverEffect$ = new D.$DvtPolyline$$(this.$_context$, []);
    this.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
    this.$_hoverEffect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_hoverEffect$);
    $container$$15_i$$215$$.$addChild$(this.$_hoverEffect$);
    for($container$$15_i$$215$$ = 0;$container$$15_i$$215$$ < this.$_isolatedNodes$.length;$container$$15_i$$215$$++) {
      var $displayable$$21$$ = this.$_isolatedNodes$[$container$$15_i$$215$$].$getDisplayable$();
      this.$_isolatedLayer$.$addChild$($displayable$$21$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$15_i$$215$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
  D.$DvtBaseTreemap$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$216$$ = 0;$i$$216$$ < $selectedNodes$$.length;$i$$216$$++) {
    if(0 < this.$_isolatedNodes$.length) {
      var $lastIsolated$$1$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
      ($selectedNodes$$[$i$$216$$] == $lastIsolated$$1$$ || $selectedNodes$$[$i$$216$$].$isDescendantOf$($lastIsolated$$1$$)) && $selectedNodes$$[$i$$216$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }else {
      $selectedNodes$$[$i$$216$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$5$$) {
  return new D.$DvtTreemapKeyboardHandler$$($manager$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$8$$, $context$$297$$, $callback$$54$$, $callbackObj$$30$$) {
  return new D.$DvtTreemapEventManager$$($view$$8$$, $context$$297$$, $callback$$54$$, $callbackObj$$30$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$6$$) {
  var $isolatedRootNode$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this);
  return $isolatedRootNode$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($isolatedRootNode$$)) : $root$$6$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($root$$6$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($rect$$12$$) {
  for(var $newIndex$$1$$ = 0, $numChildren$$3$$ = this.$_selectedLayer$.$getNumChildren$(), $i$$217$$ = 0;$i$$217$$ < $numChildren$$3$$;$i$$217$$++) {
    var $child$$20$$ = this.$_selectedLayer$.$getChildAt$($i$$217$$);
    $rect$$12$$.zIndex > $child$$20$$.zIndex && ($newIndex$$1$$ = $i$$217$$ + 1)
  }
  $newIndex$$1$$ < $numChildren$$3$$ ? this.$_selectedLayer$.$addChildAt$($rect$$12$$, $newIndex$$1$$) : this.$_selectedLayer$.$addChild$($rect$$12$$)
};
D.$JSCompiler_StaticMethods___getLastIsolatedNode$$ = function $$JSCompiler_StaticMethods___getLastIsolatedNode$$$($JSCompiler_StaticMethods___getLastIsolatedNode$self$$) {
  return $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$ && 0 < $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$[$JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length - 1] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderIsolateRestore$$ = function $$JSCompiler_StaticMethods__renderIsolateRestore$$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$, $node$$12$$) {
  if($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$AnimationOnDataChange$) {
    for(var $playables$$inline_2154_selectedNodes$$1$$ = $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$.getSelection() : [], $descendants$$inline_2155_i$$218$$ = 0;$descendants$$inline_2155_i$$218$$ < $playables$$inline_2154_selectedNodes$$1$$.length;$descendants$$inline_2155_i$$218$$++) {
      $playables$$inline_2154_selectedNodes$$1$$[$descendants$$inline_2155_i$$218$$].$setSelected$(D.$JSCompiler_alias_FALSE$$)
    }
    for(var $playables$$inline_2154_selectedNodes$$1$$ = [(0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($node$$12$$)], $descendants$$inline_2155_i$$218$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($node$$12$$), $i$$inline_2156$$ = 0;$i$$inline_2156$$ < $descendants$$inline_2155_i$$218$$.length;$i$$inline_2156$$++) {
      $playables$$inline_2154_selectedNodes$$1$$.push((0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($descendants$$inline_2155_i$$218$$[$i$$inline_2156$$]))
    }
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_context$, $playables$$inline_2154_selectedNodes$$1$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.play()
  }else {
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$render$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Width$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Height$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$JSCompiler_StaticMethods___getDefaultNavigable$$ = function $$JSCompiler_StaticMethods___getDefaultNavigable$$$($JSCompiler_StaticMethods___getDefaultNavigable$self$$, $navigableItems$$2$$) {
  var $keyboardHandler$$ = $JSCompiler_StaticMethods___getDefaultNavigable$self$$.$_eventHandler$.$KeyboardHandler$;
  return $keyboardHandler$$ ? $keyboardHandler$$.$getDefaultNavigable$($navigableItems$$2$$) : $navigableItems$$2$$ && 0 < $navigableItems$$2$$.length ? $navigableItems$$2$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemap$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtTreemap", D.$DvtTreemap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemap$$, D.$DvtBaseTreemap$$, "DvtTreemap");
D.$DvtTreemap$$.newInstance = function $$DvtTreemap$$$newInstance$($context$$298$$, $callback$$55$$, $callbackObj$$31$$) {
  var $component$$2$$ = new D.$DvtTreemap$$;
  $component$$2$$.Init($context$$298$$, $callback$$55$$, $callbackObj$$31$$);
  return $component$$2$$
};
D.$DvtTreemap$$.getDefaults = function $$DvtTreemap$$$getDefaults$($skin$$9$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtTreemapDefaults$$, $skin$$9$$)
};
D.$DvtTreemap$$.prototype.$render$ = function $$DvtTreemap$$$$$render$$($options$$19_xmlString$$8$$, $width$$39$$, $height$$32$$, $bSkipXml$$) {
  $options$$19_xmlString$$8$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$19_xmlString$$8$$), D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$19_xmlString$$8$$ = $bSkipXml$$ ? D.$JSCompiler_alias_NULL$$ : (new D.$DvtTreemapJsonUtils$$(this.$_context$)).$toXml$(this.$Options$);
  D.$DvtTreemap$$.$superclass$.$render$.call(this, $options$$19_xmlString$$8$$, $width$$39$$, $height$$32$$)
};
D.$DvtTreemap$$.prototype.render = D.$DvtTreemap$$.prototype.$render$;
D.$DvtTreemapParser$$ = function $$DvtTreemapParser$$$($treemap$$) {
  this.Init($treemap$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapParser$$, D.$DvtBaseTreeParser$$, "DvtTreemapParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = function $$JSCompiler_prototypeAlias$$$$CreateNode$$($treeView$$, $props$$19$$, $templates$$) {
  return new D.$DvtTreemapNode$$($treeView$$, $props$$19$$, $templates$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$41$$) {
  var $ret$$57$$ = D.$DvtTreemapParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$41$$), $layoutStr$$ = $xmlNode$$41$$.$getAttr$("layout");
  $ret$$57$$.$layout$ = "h" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_TRUE$$) : "v" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_FALSE$$) : new D.$DvtSquarifyingLayout$$;
  $ret$$57$$.$groupGaps$ = $xmlNode$$41$$.$getAttr$("gg");
  $ret$$57$$.$groupGaps$ || ($ret$$57$$.$groupGaps$ = "o");
  $ret$$57$$.$isolateRowKey$ = $xmlNode$$41$$.$getAttr$("irk");
  this.$_isolateRowKey$ = $ret$$57$$.$isolateRowKey$;
  return $ret$$57$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($headerLabelStyle_xmlNode$$42$$) {
  var $ret$$58$$ = D.$DvtTreemapParser$$.$superclass$.$ParseNodeAttributes$.call(this, $headerLabelStyle_xmlNode$$42$$);
  $ret$$58$$.$groupLabelDisplay$ = $headerLabelStyle_xmlNode$$42$$.$getAttr$("gld");
  $ret$$58$$.$labelHalign$ = $headerLabelStyle_xmlNode$$42$$.$getAttr$("ha");
  $ret$$58$$.$labelValign$ = $headerLabelStyle_xmlNode$$42$$.$getAttr$("va");
  $ret$$58$$.$isolate$ = $headerLabelStyle_xmlNode$$42$$.$getAttr$("hi");
  $ret$$58$$.$headerUseNodeColor$ = $headerLabelStyle_xmlNode$$42$$.$getAttr$("unc");
  $ret$$58$$.$headerHalign$ = $headerLabelStyle_xmlNode$$42$$.$getAttr$("hha");
  if($headerLabelStyle_xmlNode$$42$$ = $headerLabelStyle_xmlNode$$42$$.$getAttr$("hls")) {
    $ret$$58$$.$headerLabelStyle$ = new D.$DvtCSSStyle$$($headerLabelStyle_xmlNode$$42$$)
  }
  this.$_isolateRowKey$ == $ret$$58$$.id && ($ret$$58$$.$isIsolated$ = D.$JSCompiler_alias_TRUE$$);
  return $ret$$58$$
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalNodeStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalNodeStyles$$($nodeStyle$$, $nodeHoverStyle$$, $nodeSelectedStyle$$, $styles$$5$$) {
  $styles$$5$$.NODE_HOVER_COLOR = $nodeHoverStyle$$.$getStyle$("border-color");
  $styles$$5$$.NODE_SELECTED_OUTER_COLOR = $nodeSelectedStyle$$.$getStyle$("-tr-outer-color");
  $styles$$5$$.NODE_SELECTED_INNER_COLOR = $nodeSelectedStyle$$.$getStyle$("-tr-inner-color")
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalStyles$$($xmlNode$$43$$, $styles$$6$$) {
  var $nodeHeaderDrillStyle_nodeHeaderStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$43$$.$getAttr$("nodeHeader"));
  $styles$$6$$.HEADER_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$6$$.HEADER_BACKGROUND_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  var $nodeHeaderHoverStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$43$$.$getAttr$("nodeHeader-hover")));
  $styles$$6$$.HEADER_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderHoverStyle$$;
  $styles$$6$$.HEADER_BACKGROUND_HOVER_STYLE = $nodeHeaderHoverStyle$$;
  var $nodeHeaderSelectedStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$43$$.$getAttr$("nodeHeader-selected")));
  $styles$$6$$.HEADER_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderSelectedStyle$$;
  $styles$$6$$.HEADER_BACKGROUND_SELECTED_STYLE = $nodeHeaderSelectedStyle$$;
  $nodeHeaderDrillStyle_nodeHeaderStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$43$$.$getAttr$("nodeHeaderDrill")));
  $styles$$6$$.HEADER_DRILL_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$6$$.HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$43$$.$getAttr$("nodeHeaderDrill-hover")));
  $styles$$6$$.HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$43$$.$getAttr$("nodeHeaderDrill-selected")));
  $styles$$6$$.HEADER_HOVER_OUTER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-outer-color");
  $styles$$6$$.HEADER_HOVER_INNER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-inner-color");
  $styles$$6$$.HEADER_SELECTED_OUTER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-outer-color");
  $styles$$6$$.HEADER_SELECTED_INNER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-inner-color")
};
D.$DvtTreemapNode$$ = function $$DvtTreemapNode$$$($treemap$$1$$, $props$$20$$, $templates$$1$$) {
  this.Init($treemap$$1$$, $props$$20$$, $templates$$1$$);
  this.$_labelDisplay$ = $props$$20$$.$labelDisplay$ ? $props$$20$$.$labelDisplay$ : "n";
  this.$_groupLabelDisplay$ = $props$$20$$.$groupLabelDisplay$ ? $props$$20$$.$groupLabelDisplay$ : "h";
  this.$_labelHalign$ = $props$$20$$.$labelHalign$ ? $props$$20$$.$labelHalign$ : "c";
  this.$_labelValign$ = $props$$20$$.$labelValign$ ? $props$$20$$.$labelValign$ : "c";
  this.$_headerHalign$ = $props$$20$$.$headerHalign$ ? $props$$20$$.$headerHalign$ : "s";
  this.$_headerLabelStyle$ = $props$$20$$.$headerLabelStyle$;
  this.$_headerUseNodeColor$ = "on" == $props$$20$$.$headerUseNodeColor$;
  this.$_isolate$ = $props$$20$$.$isolate$ ? $props$$20$$.$isolate$ : "on";
  this.$_isIsolated$ = $props$$20$$.$isIsolated$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapNode$$, D.$DvtBaseTreeNode$$, "DvtTreemapNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$) {
  if(this.$_hasLayout$) {
    this.$_shape$ = this.$_createShapeNode$();
    $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$.$addChild$(this.$_shape$);
    var $afRoot$$6_template$$1$$;
    this.$hasChildren$() ? (this.$_childNodeGroup$ = new D.$DvtContainer$$(this.$_view$.$_context$), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $afRoot$$6_template$$1$$ = this.$_template$;
    if($afRoot$$6_template$$1$$) {
      var $afContext$$6$$ = this.$_view$.$_afContext$;
      $afContext$$6$$.$_elContext$ = this.$_elAttributes$;
      var $aw$$3$$ = this.$_width$ - 8 - 2, $ah$$3$$ = this.$_height$ - 4 - 2;
      0 < $aw$$3$$ && 0 < $ah$$3$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$6$$, $aw$$3$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$6$$, $ah$$3$$), $afContext$$6$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$6_template$$1$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$6$$, $afRoot$$6_template$$1$$, this.$_shape$), D.$DvtAgent$$.$isRightToLeft$($container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$.$_context$) ? 
      ($container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$ = $afRoot$$6_template$$1$$.$getDimensions$(), $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$ = this.$_x$ + this.$_width$ - 4 - 1 - $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$.$w$) : $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$ = this.$_x$ + 4 + 1, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$6_template$$1$$, $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$, 
      this.$_y$ + 2 + 1))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_pattern$ && "h" != this.$_textStyle$) && ($container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$.x, $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$.y, $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$.$w$, 
      $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_shape$.$addChild$(this.$_textBackground$), $container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$ = this.$_text$, "n" == this.$_textStyle$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$) : this.$_shape$.$addChild$($container$$93_dim$$79_dims$$31_text$$inline_5428_transX$$5$$))
    }
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$_shape$, "img");
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$_datatip$)
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($parentNode$$12_selected$$18_x$$266$$) {
  if("off" != this.$Selectable$ && (D.$DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $parentNode$$12_selected$$18_x$$266$$), this.$_shape$)) {
    if(this.$isSelected$()) {
      $parentNode$$12_selected$$18_x$$266$$ = this.$_x$;
      var $y$$237$$ = this.$_y$ + 1, $w$$75$$ = this.$_width$ - 1, $h$$69$$ = this.$_height$ - 1;
      D.$DvtAgent$$.$isPlatformWebkit$() && ($y$$237$$ -= 1);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$);
      this.$_selectionInner$ = this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$;
      this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$12_selected$$18_x$$266$$, $y$$237$$, $w$$75$$, $h$$69$$);
      this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$);
      this.$_shape$.$addChild$(this.$_selectionOuter$);
      this.$_selectionInner$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$12_selected$$18_x$$266$$ + 1, $y$$237$$ + 1, $w$$75$$ - 2, $h$$69$$ - 2);
      this.$_selectionInner$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionInner$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionInner$);
      this.$_shape$.$addChild$(this.$_selectionInner$);
      "h" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE") : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#9CACC9;", "HEADER_BACKGROUND_SELECTED_STYLE"), this.$_text$ && (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_SELECTED_DEFAULT_STYLE", 
      "#003D5B")), this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), 1), this.$_selectionInner$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "HEADER_SELECTED_INNER_COLOR_STYLE"), 1)) : (this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "NODE_SELECTED_OUTER_COLOR"), 1), this.$_selectionInner$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, 
      "#FFFFFF", "NODE_SELECTED_INNER_COLOR"), 1), D.$DvtAgent$$.$isBrowserSafari$() || (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shape$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$), this.$_selectionInner$ = D.$JSCompiler_alias_NULL$$, "h" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE") : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", 
      "HEADER_BACKGROUND_STYLE"), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003286") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B"))), this.$_selectionOuter$ && (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, 
      "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1") : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$))) : ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_shape$), this.$_selectionOuter$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), ($parentNode$$12_selected$$18_x$$266$$ = this.$_parent$) && $parentNode$$12_selected$$18_x$$266$$.$_childNodeGroup$ && 
      $parentNode$$12_selected$$18_x$$266$$.$_childNodeGroup$.$addChild$(this.$_shape$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $isolatedNode_points$$44$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$);
    if(!($isolatedNode_points$$44$$ != D.$JSCompiler_alias_NULL$$ && $isolatedNode_points$$44$$ != this && !this.$isDescendantOf$($isolatedNode_points$$44$$))) {
      var $isolatedNode_points$$44$$ = [], $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$, $w$$76_x2$$31$$, $h$$70_y2$$24$$;
      "h" == this.$_textStyle$ ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE"), this.$_selectionOuter$ || ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$ = this.$_x$, $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$ = this.$_y$ + 1, $w$$76_x2$$31$$ = this.$_width$ - 1, $h$$70_y2$$24$$ = this.$_height$ - 1, D.$DvtAgent$$.$isPlatformWebkit$() && ($stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$ -= 
      1), this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$, $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$, $w$$76_x2$$31$$, $h$$70_y2$$24$$), this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$isSelected$() ? 
      this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$) : this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1"), $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$ = this.$_x$ + 1.5 + 1, $w$$76_x2$$31$$ = this.$_x$ + this.$_width$ - 
      1.5 - 1, $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$ = this.$_y$ + this.$_titleBarHeight$, $h$$70_y2$$24$$ = this.$_y$ + this.$_height$ - 1.5 - 1, $isolatedNode_points$$44$$.push($w$$76_x2$$31$$, $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$, $w$$76_x2$$31$$, $h$$70_y2$$24$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$, $h$$70_y2$$24$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$, $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$), 
      $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$ = new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#C4DCFF", "HEADER_HOVER_INNER_COLOR_STYLE"), 0.8, 3), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE", "#000000") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_HOVER_DEFAULT_STYLE", "#000000"))) : ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$ = 
      this.$_x$ + 1, $w$$76_x2$$31$$ = this.$_x$ + this.$_width$ - 1, $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$ = this.$_y$ + 1, $h$$70_y2$$24$$ = this.$_y$ + this.$_height$ - 1, $isolatedNode_points$$44$$.push(this.$_x$, $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$, $w$$76_x2$$31$$, $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$, $w$$76_x2$$31$$, $h$$70_y2$$24$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$, $h$$70_y2$$24$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$, 
      $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$), $stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$ = new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR"), 1, 2));
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$ = this.$_view$;
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$.$_hoverEffect$.$setPoints$($isolatedNode_points$$44$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$.$_hoverEffect$.$setStroke$($stroke$$79_stroke$$inline_5432_y$$238_y1$$27$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5430_x$$267_x1$$34$$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && ("h" == this.$_textStyle$ && (this.$isSelected$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#9CACC9;", "HEADER_BACKGROUND_SELECTED_STYLE"), this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, 
  this.$_text$, "HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B"))) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_selectionOuter$ && (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), 
  this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B")))), this.$_view$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$isIsolateEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIsolateEnabled$$() {
  return"on" == this.$_isolate$ && "h" == this.$_textStyle$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$12$$) {
  return!$behavior$$12$$ || !$behavior$$12$$.$getAlign$() ? D.$DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $behavior$$12$$) : new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$438_lastChild$$1_next$$8$$) {
  var $keyCode$$20_navigables$$6_parent$$58$$;
  if($event$$438_lastChild$$1_next$$8$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $event$$438_lastChild$$1_next$$8$$)
  }
  $keyCode$$20_navigables$$6_parent$$58$$ = $event$$438_lastChild$$1_next$$8$$.keyCode;
  if(32 == $keyCode$$20_navigables$$6_parent$$58$$ && $event$$438_lastChild$$1_next$$8$$.ctrlKey) {
    return this
  }
  if(38 == $keyCode$$20_navigables$$6_parent$$58$$ && $event$$438_lastChild$$1_next$$8$$.altKey || 221 == $keyCode$$20_navigables$$6_parent$$58$$) {
    ($keyCode$$20_navigables$$6_parent$$58$$ = this.$_parent$) && $keyCode$$20_navigables$$6_parent$$58$$.getId() != this.$_view$.$_root$.getId() ? ($event$$438_lastChild$$1_next$$8$$ = $keyCode$$20_navigables$$6_parent$$58$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($keyCode$$20_navigables$$6_parent$$58$$)) : $event$$438_lastChild$$1_next$$8$$ = this
  }else {
    if(40 == $keyCode$$20_navigables$$6_parent$$58$$ && $event$$438_lastChild$$1_next$$8$$.altKey || 219 == $keyCode$$20_navigables$$6_parent$$58$$) {
      $event$$438_lastChild$$1_next$$8$$ = ($event$$438_lastChild$$1_next$$8$$ = this.$_lastVisitedChild$) ? $event$$438_lastChild$$1_next$$8$$ : this.$hasChildren$() ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this.$_view$, this.$getChildNodes$()) : this
    }else {
      var $root$$13$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$), $depth$$13$$ = 0;
      if($root$$13$$) {
        if(this == $root$$13$$) {
          $depth$$13$$ = 0
        }else {
          $keyCode$$20_navigables$$6_parent$$58$$ = this.$_parent$;
          for($depth$$13$$ = 1;$root$$13$$ != $keyCode$$20_navigables$$6_parent$$58$$;) {
            $depth$$13$$++, $keyCode$$20_navigables$$6_parent$$58$$ = $keyCode$$20_navigables$$6_parent$$58$$.$_parent$
          }
        }
      }else {
        for($root$$13$$ = this;$root$$13$$.$_parent$;) {
          $root$$13$$ = $root$$13$$.$_parent$
        }
        $depth$$13$$ = (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this)
      }
      $keyCode$$20_navigables$$6_parent$$58$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$13$$, $depth$$13$$);
      $event$$438_lastChild$$1_next$$8$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$438_lastChild$$1_next$$8$$, $keyCode$$20_navigables$$6_parent$$58$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$438_lastChild$$1_next$$8$$);
  return $event$$438_lastChild$$1_next$$8$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($headerLabelHeight_text$$73_x$$268_xx$$59$$, $y$$239_yy$$58$$, $width$$111_ww$$94$$, $height$$93_hh$$80$$) {
  if(!(0 >= $width$$111_ww$$94$$ || 0 >= $height$$93_hh$$80$$)) {
    this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$;
    this.$_oldState$ = this.$GetAnimationParams$();
    this.$_x$ = $headerLabelHeight_text$$73_x$$268_xx$$59$$;
    this.$_y$ = $y$$239_yy$$58$$;
    this.$_width$ = $width$$111_ww$$94$$ ? $width$$111_ww$$94$$ : 0;
    this.$_height$ = $height$$93_hh$$80$$ ? $height$$93_hh$$80$$ : 0;
    this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
    this.$_textStr$ || (this.$_textStyle$ = "o");
    if("h" == this.$_textStyle$) {
      this.$_titleBarHeight$ = 15;
      $headerLabelHeight_text$$73_x$$268_xx$$59$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
      $headerLabelHeight_text$$73_x$$268_xx$$59$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $headerLabelHeight_text$$73_x$$268_xx$$59$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B");
      $headerLabelHeight_text$$73_x$$268_xx$$59$$ = D.$DvtTextUtils$$.$guessTextDimensions$($headerLabelHeight_text$$73_x$$268_xx$$59$$).$h$;
      this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, $headerLabelHeight_text$$73_x$$268_xx$$59$$);
      this.$isIsolateEnabled$() && (this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, 15));
      $headerLabelHeight_text$$73_x$$268_xx$$59$$ = this.$_x$;
      $y$$239_yy$$58$$ = this.$_y$ + this.$_titleBarHeight$;
      $width$$111_ww$$94$$ = this.$_width$;
      $height$$93_hh$$80$$ = this.$_height$ - this.$_titleBarHeight$;
      if(0 <= $width$$111_ww$$94$$ && 0 <= $height$$93_hh$$80$$) {
        return new D.$DvtRectangle$$($headerLabelHeight_text$$73_x$$268_xx$$59$$, $y$$239_yy$$58$$, $width$$111_ww$$94$$, $height$$93_hh$$80$$)
      }
      this.$_textStyle$ = D.$JSCompiler_alias_NULL$$
    }
    return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  }
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$270$$, $y$$241$$) {
  return $x$$270$$ >= this.$_x$ && $x$$270$$ <= this.$_x$ + this.$_width$ && $y$$241$$ >= this.$_y$ && $y$$241$$ <= this.$_y$ + this.$_height$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$71$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$19$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$46$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $r$$71$$, $g$$19$$, $b$$46$$, this.$hasChildren$() ? 0 : window.Math.random()]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$32$$) {
  this.$setLayoutParams$($params$$32$$[0], $params$$32$$[1], $params$$32$$[2], $params$$32$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$32$$[4]), window.Math.round($params$$32$$[5]), window.Math.round($params$$32$$[6]));
  this.$_shape$ && ((0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_shape$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && (0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_innerShape$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), ("h" != this.$_textStyle$ || this.$_headerUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, 
  this.$_fillShape$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_topLeftShape$), this.$_topLeftShape$ = this.$_fillShape$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), this.$_template$ ? ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_contentRoot$), this.$_contentRoot$ = D.$JSCompiler_alias_NULL$$) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_textBackground$), this.$_textBackground$ = 
  D.$JSCompiler_alias_NULL$$, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), this.$_text$ = this.$_createTextNode$(this.$_shape$)))
};
D.$JSCompiler_StaticMethods__getIsolateAnimation$$ = function $$JSCompiler_StaticMethods__getIsolateAnimation$$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$) {
  if($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$) {
    var $playable$$20$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_view$.$_context$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$, 0.3);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$20$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods__getIsolateAnimation$self$$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$());
    $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$);
    return $playable$$20$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemapNode$$.prototype.$animateUpdate$ = function $$DvtTreemapNode$$$$$animateUpdate$$($handler$$51$$, $oldNode$$3$$) {
  return 0 == (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this) || $oldNode$$3$$.$_hasLayout$ && 0 < $oldNode$$3$$.$_width$ && 0 < $oldNode$$3$$.$_height$ ? D.$DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $handler$$51$$, $oldNode$$3$$) : this.$animateInsert$($handler$$51$$)
};
D.$DvtTreemapNode$$.prototype.$_createShapeNode$ = function $$DvtTreemapNode$$$$$_createShapeNode$$() {
  var $context$$556$$ = this.$_view$.$_context$, $shape$$82$$;
  if("h" == this.$_textStyle$) {
    $shape$$82$$ = new D.$DvtRect$$($context$$556$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new D.$DvtRect$$($context$$556$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, $shape$$82$$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_innerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$82$$.$addChild$(this.$_innerShape$), 
    this.$_isIsolated$ && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, $shape$$82$$))
  }else {
    var $fill$$52$$ = this.$GetFill$();
    $shape$$82$$ = new D.$DvtRect$$($context$$556$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
    if((1E3 > this.$_view$.$_nodeCount$ || !D.$DvtAgent$$.$isTouchDevice$()) && 2 <= this.$_width$ && 2 <= this.$_height$) {
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), 0.3);
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), 0.3);
      this.$_pattern$ && new D.$DvtSolidStroke$$(this.$_color$, 0.15);
      var $fillColor$$6_minDim$$ = this.$getColor$(), $topLeftColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), $topLeftColor$$ = D.$DvtColorUtils$$.$interpolateColor$($topLeftColor$$, $fillColor$$6_minDim$$, 0.7), $bottomRightColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), $bottomRightColor$$ = D.$DvtColorUtils$$.$interpolateColor$($bottomRightColor$$, $fillColor$$6_minDim$$, 
      0.7), $fillColor$$6_minDim$$ = window.Math.min(this.$_width$, this.$_height$);
      4 <= $fillColor$$6_minDim$$ ? ($shape$$82$$.$setSolidFill$($bottomRightColor$$), this.$_topLeftShape$ = new D.$DvtRect$$($context$$556$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($topLeftColor$$), this.$_topLeftShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$82$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new D.$DvtRect$$($context$$556$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), this.$_fillShape$.$setFill$($fill$$52$$), 
      this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$82$$.$addChild$(this.$_fillShape$)) : 2 <= $fillColor$$6_minDim$$ ? ($shape$$82$$.$setSolidFill$($bottomRightColor$$), this.$_fillShape$ = new D.$DvtRect$$($context$$556$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($fill$$52$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$82$$.$addChild$(this.$_fillShape$)) : $shape$$82$$.$setFill$($fill$$52$$)
    }else {
      $shape$$82$$.$setFill$($fill$$52$$)
    }
  }
  this.$_view$.$__getEventManager$().$associate$($shape$$82$$, this);
  this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$ && "off" != this.$Selectable$ ? $shape$$82$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$) : $shape$$82$$.setCursor("default");
  $shape$$82$$.zIndex = this.$_zIndex$;
  return $shape$$82$$
};
D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__createIsolateRestoreButton$$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $container$$94$$) {
  if("h" != $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_textStyle$ || !$JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$isIsolateEnabled$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$ = D.$JSCompiler_alias_NULL$$, $transX$$6_x1$$35$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$, $x2$$32$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_width$ - 1, $rect$$31_tooltip$$36_y1$$28$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 1, 
  $y2$$25$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_titleBarHeight$;
  if(12 < $x2$$32$$ - $transX$$6_x1$$35$$ - 2) {
    if($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$) {
      var $JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_5441_upState$$inline_5449$$ = new D.$DvtImage$$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, 
      $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$.restoreUp, 0, 0, 12, 12), $overState$$inline_5442_overState$$inline_5450$$ = new D.$DvtImage$$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$.restoreOver, 0, 0, 12, 12), $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$.restoreDown, 0, 0, 12, 12);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_5441_upState$$inline_5449$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_5442_overState$$inline_5450$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$);
      $JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$ = new D.$DvtButton$$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, $upState$$inline_5441_upState$$inline_5449$$, $overState$$inline_5442_overState$$inline_5450$$, $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$);
      $JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__restoreNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }else {
      $JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_5441_upState$$inline_5449$$ = new D.$DvtImage$$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, 
      $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$.maximizeUp, 0, 0, 12, 12), $overState$$inline_5442_overState$$inline_5450$$ = new D.$DvtImage$$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$.maximizeOver, 0, 0, 12, 12), $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$.maximizeDown, 0, 0, 12, 12), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_5441_upState$$inline_5449$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_5442_overState$$inline_5450$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$), 
      $JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$ = new D.$DvtButton$$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, $upState$$inline_5441_upState$$inline_5449$$, $overState$$inline_5442_overState$$inline_5450$$, $downState$$inline_5443_downState$$inline_5451_resources$$inline_5440_resources$$inline_5448$$), $JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
      $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__isolateNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }
    $transX$$6_x1$$35$$ = D.$DvtAgent$$.$isRightToLeft$($container$$94$$.$_context$) ? $transX$$6_x1$$35$$ + 1 : $x2$$32$$ - 12 - 1;
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, $transX$$6_x1$$35$$, ($y2$$25$$ + $rect$$31_tooltip$$36_y1$$28$$ - 12) / 2);
    $container$$94$$.$addChild$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$);
    D.$DvtAgent$$.$isTouchDevice$() && ($rect$$31_tooltip$$36_y1$$28$$ = new D.$DvtRect$$($container$$94$$.$_context$, -2, -2, 16, 16), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$31_tooltip$$36_y1$$28$$), $JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$.$addChild$($rect$$31_tooltip$$36_y1$$28$$));
    "true" == $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.alta ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$) : ($rect$$31_tooltip$$36_y1$$28$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$ ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.restore : 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.isolate, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$, new D.$DvtBaseTreePeer$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.getId(), $rect$$31_tooltip$$36_y1$$28$$)))
  }
  return $JSCompiler_temp$$410_button$$58_button$$inline_5444_button$$inline_5452_context$$inline_5439_context$$inline_5447$$
};
D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__removeIsolateRestoreButton$$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$) {
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$), $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtTreemapNode$$.prototype.$_createTextNode$ = function $$DvtTreemapNode$$$$$_createTextNode$$($container$$95$$) {
  var $chromeAdjustment_isRTL$$11_peer$$20$$ = D.$DvtAgent$$.$isRightToLeft$($container$$95$$.$_context$);
  if(!this.$_textStr$ || !$container$$95$$ || !this.$_textStyle$ || "o" == this.$_textStyle$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $availHeight$$5$$ = this.$_height$;
  if((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) > $availHeight$$5$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $hAlign$$4$$ = "n" == this.$_textStyle$ ? this.$_labelHalign$ : this.$_headerHalign$;
  $chromeAdjustment_isRTL$$11_peer$$20$$ && ("s" == $hAlign$$4$$ ? $hAlign$$4$$ = "e" : "e" == $hAlign$$4$$ && ($hAlign$$4$$ = "s"));
  var $availWidth$$5$$ = this.$_width$ - 6, $isolateWidth$$ = 0;
  this.$isIsolateEnabled$() && ($isolateWidth$$ = 13, $availWidth$$5$$ = "c" == $hAlign$$4$$ ? $availWidth$$5$$ - 2 * $isolateWidth$$ : $availWidth$$5$$ - $isolateWidth$$);
  if(0 >= $availWidth$$5$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $text$$74$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
  $text$$74$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
  "s" == $hAlign$$4$$ ? ($chromeAdjustment_isRTL$$11_peer$$20$$ ? $text$$74$$.$setX$(this.$_x$ + 4 + $isolateWidth$$) : $text$$74$$.$setX$(this.$_x$ + 4), $text$$74$$.$alignLeft$()) : "c" == $hAlign$$4$$ ? ($text$$74$$.$setX$(this.$_x$ + this.$_width$ / 2), $text$$74$$.$alignCenter$()) : "e" == $hAlign$$4$$ && ($chromeAdjustment_isRTL$$11_peer$$20$$ ? $text$$74$$.$setX$(this.$_x$ + this.$_width$ - 4) : $text$$74$$.$setX$(this.$_x$ + this.$_width$ - 4 - $isolateWidth$$), $text$$74$$.$alignRight$());
  "n" == this.$_textStyle$ ? ($availHeight$$5$$ = this.$_height$ - 4, "t" == this.$_labelValign$ ? ($text$$74$$.$setY$(this.$_y$ + 2), $text$$74$$.$alignTop$()) : "c" == this.$_labelValign$ ? ($text$$74$$.$setY$(this.$_y$ + this.$_height$ / 2), $text$$74$$.$alignMiddle$()) : "b" == this.$_labelValign$ && ($text$$74$$.$setY$(this.$_y$ + this.$_height$ - 2), $text$$74$$.$alignBottom$()), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $text$$74$$)) : "h" == this.$_textStyle$ && ($chromeAdjustment_isRTL$$11_peer$$20$$ = 
  D.$DvtAgent$$.$isPlatformWebkit$() ? 1 : 0, $text$$74$$.$setY$(this.$_y$ + 1 + this.$_titleBarHeight$ / 2 + $chromeAdjustment_isRTL$$11_peer$$20$$), $text$$74$$.$alignMiddle$(), (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$74$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B"));
  if($text$$74$$ != D.$JSCompiler_alias_NULL$$) {
    return"h" == this.$_textStyle$ && this.$isDrillReplaceEnabled$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$74$$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286"), $text$$74$$.setCursor("pointer"), $chromeAdjustment_isRTL$$11_peer$$20$$ = new D.$DvtBaseTreePeer$$(this, this.getId(), D.$JSCompiler_alias_NULL$$, this.$getDatatip$(), this.$getDatatipColor$()), $chromeAdjustment_isRTL$$11_peer$$20$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__getEventManager$().$associate$($text$$74$$, 
    $chromeAdjustment_isRTL$$11_peer$$20$$)) : $text$$74$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), D.$DvtTextUtils$$.$fitText$($text$$74$$, $availWidth$$5$$, $availHeight$$5$$, $container$$95$$) ? $text$$74$$ : D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderStyle$$$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$7$$, $shape$$83$$, $innerShape$$, $backgroundColor$$26_defaultStyle$$4$$, $styleDef$$) {
  var $borderColor$$44_style$$92$$ = new D.$DvtCSSStyle$$($backgroundColor$$26_defaultStyle$$4$$);
  $borderColor$$44_style$$92$$.$merge$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$7$$.$_view$.$_styles$[$styleDef$$]);
  $backgroundColor$$26_defaultStyle$$4$$ = $borderColor$$44_style$$92$$.$getStyle$("background-color");
  $borderColor$$44_style$$92$$ = $borderColor$$44_style$$92$$.$getStyle$("border-color");
  $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$7$$.$_headerUseNodeColor$ && "HEADER_BACKGROUND_STYLE" == $styleDef$$ ? ($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$7$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$7$$.$getColor$(), $innerShape$$.$setSolidFill$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$7$$), $borderColor$$44_style$$92$$ = D.$DvtColorUtils$$.$interpolateColor$($borderColor$$44_style$$92$$, $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$7$$, 
  0.5), $shape$$83$$.$setSolidFill$($borderColor$$44_style$$92$$)) : ($shape$$83$$.$setSolidFill$($borderColor$$44_style$$92$$), $innerShape$$.$setSolidFill$($backgroundColor$$26_defaultStyle$$4$$))
};
D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$, $text$$75$$, $styleDef$$1$$, $defaultFillColor_textStyle$$9$$) {
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerUseNodeColor$ && "HEADER_TEXT_DEFAULT_STYLE" == $styleDef$$1$$ ? $text$$75$$.$setSolidFill$((0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$)) : $text$$75$$.$setSolidFill$($defaultFillColor_textStyle$$9$$);
  $defaultFillColor_textStyle$$9$$ = [];
  1 >= (0,D.$JSCompiler_StaticMethods_GetDepth$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$) && $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$hasChildren$() && $defaultFillColor_textStyle$$9$$.push(new D.$DvtCSSStyle$$("font-weight:bold;"));
  $defaultFillColor_textStyle$$9$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_view$.$_styles$[$styleDef$$1$$]);
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$ && $defaultFillColor_textStyle$$9$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$);
  $text$$75$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($defaultFillColor_textStyle$$9$$))
};
D.$DvtTreemapNode$$.prototype.$handleMouseOver$ = function $$DvtTreemapNode$$$$$handleMouseOver$$() {
  this.$_isolateButton$ || (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$));
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtTreemapNode$$.prototype.$handleMouseOut$ = function $$DvtTreemapNode$$$$$handleMouseOut$$() {
  this.$_isIsolated$ !== D.$JSCompiler_alias_TRUE$$ && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods__removeChildShape$$ = function $$JSCompiler_StaticMethods__removeChildShape$$$($JSCompiler_StaticMethods__removeChildShape$self$$, $childShape$$) {
  $childShape$$ && $JSCompiler_StaticMethods__removeChildShape$self$$.$_shape$.removeChild($childShape$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__isolateNode$ = function $$JSCompiler_prototypeAlias$$$$__isolateNode$$() {
  this.$_isIsolated$ = D.$JSCompiler_alias_TRUE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___isolate$self$$inline_5454$$ = this.$_view$, $currentNavigable$$inline_5456_displayable$$inline_5457$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)($JSCompiler_StaticMethods___isolate$self$$inline_5454$$.$__getEventManager$());
  $currentNavigable$$inline_5456_displayable$$inline_5457$$ && $currentNavigable$$inline_5456_displayable$$inline_5457$$.$hideKeyboardFocusEffect$();
  $JSCompiler_StaticMethods___isolate$self$$inline_5454$$.$_isolatedNodes$.push(this);
  $JSCompiler_StaticMethods___isolate$self$$inline_5454$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$(this.getId()));
  $JSCompiler_StaticMethods___isolate$self$$inline_5454$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___isolate$self$$inline_5454$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___isolate$self$$inline_5454$$.$Width$, $JSCompiler_StaticMethods___isolate$self$$inline_5454$$.$Height$));
  $JSCompiler_StaticMethods___isolate$self$$inline_5454$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  $currentNavigable$$inline_5456_displayable$$inline_5457$$ = this.$getDisplayable$();
  $JSCompiler_StaticMethods___isolate$self$$inline_5454$$.$_isolatedLayer$.$addChild$($currentNavigable$$inline_5456_displayable$$inline_5457$$);
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___isolate$self$$inline_5454$$, this);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$__restoreNode$ = function $$JSCompiler_prototypeAlias$$$$__restoreNode$$() {
  this.$_isIsolated$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___restore$self$$inline_5459$$ = this.$_view$, $restoreNode$$inline_5460$$ = $JSCompiler_StaticMethods___restore$self$$inline_5459$$.$_isolatedNodes$.pop(), $currentNavigable$$inline_5461_id$$inline_9650$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)($JSCompiler_StaticMethods___restore$self$$inline_5459$$.$__getEventManager$());
  $currentNavigable$$inline_5461_id$$inline_9650$$ && $currentNavigable$$inline_5461_id$$inline_9650$$.$hideKeyboardFocusEffect$();
  $currentNavigable$$inline_5461_id$$inline_9650$$ = $restoreNode$$inline_5460$$.getId();
  $JSCompiler_StaticMethods___restore$self$$inline_5459$$.$_navigableIdToFocus$ = $currentNavigable$$inline_5461_id$$inline_9650$$;
  $JSCompiler_StaticMethods___restore$self$$inline_5459$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$);
  $JSCompiler_StaticMethods___restore$self$$inline_5459$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___restore$self$$inline_5459$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___restore$self$$inline_5459$$.$Width$, $JSCompiler_StaticMethods___restore$self$$inline_5459$$.$Height$));
  $JSCompiler_StaticMethods___restore$self$$inline_5459$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___restore$self$$inline_5459$$, $restoreNode$$inline_5460$$);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$96$$, $x$$271$$, $y$$242$$) {
  return $target$$96$$ && $target$$96$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $target$$96$$, $x$$271$$, $y$$242$$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$($target$$97$$) {
  return $target$$97$$ && $target$$97$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $target$$97$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($target$$98$$) {
  return $target$$98$$ && $target$$98$$ instanceof D.$DvtButton$$ ? this.$_isIsolated$ ? this.$_view$.$_resources$.restore : this.$_view$.$_resources$.isolate : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreemapLayout$$ = function $$DvtBaseTreemapLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemapLayout$$, D.$DvtObj$$, "DvtBaseTreemapLayout");
D.$DvtBaseTreemapLayout$$.prototype.Init = function $$DvtBaseTreemapLayout$$$$Init$() {
  this.$_zIndex$ = 0
};
D.$DvtBaseTreemapLayout$$.prototype.$layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_setNodeBounds$$ = function $$JSCompiler_StaticMethods_setNodeBounds$$$($JSCompiler_StaticMethods_setNodeBounds$self_gap$$11$$, $availBounds$$2_node$$110$$, $x$$273$$, $y$$244$$, $width$$113$$, $height$$95$$, $isRoot$$4_xx$$60$$) {
  $availBounds$$2_node$$110$$.$_zIndex$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$11$$.$_zIndex$;
  $JSCompiler_StaticMethods_setNodeBounds$self_gap$$11$$.$_zIndex$++;
  if(!$isRoot$$4_xx$$60$$ || !$availBounds$$2_node$$110$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_setNodeBounds$self_gap$$11$$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$11$$.$getGapSize$($availBounds$$2_node$$110$$.$_view$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)($availBounds$$2_node$$110$$));
    $isRoot$$4_xx$$60$$ = window.Math.round($x$$273$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$11$$);
    var $yy$$59$$ = window.Math.round($y$$244$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$11$$);
    if($availBounds$$2_node$$110$$ = $availBounds$$2_node$$110$$.$setLayoutParams$($isRoot$$4_xx$$60$$, $yy$$59$$, window.Math.round($x$$273$$ + $width$$113$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$11$$) - $isRoot$$4_xx$$60$$, window.Math.round($y$$244$$ + $height$$95$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$11$$) - $yy$$59$$)) {
      return $availBounds$$2_node$$110$$
    }
  }
  return new D.$DvtRectangle$$($x$$273$$, $y$$244$$, $width$$113$$, $height$$95$$)
};
D.$DvtBaseTreemapLayout$$.prototype.$getGapSize$ = function $$DvtBaseTreemapLayout$$$$$getGapSize$$($view$$59$$, $depth$$14$$) {
  var $groupGaps$$1$$ = $view$$59$$.$_groupGaps$;
  return"o" == $groupGaps$$1$$ ? 1 == $depth$$14$$ && 2 <= $view$$59$$.$_maxDepth$ ? 3 : 0 : "a" == $groupGaps$$1$$ ? $depth$$14$$ < $view$$59$$.$_maxDepth$ ? 3 : 0 : 0
};
D.$DvtSquarifyingLayout$$ = function $$DvtSquarifyingLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtSquarifyingLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSquarifyingLayout");
D.$DvtSquarifyingLayout$$.prototype.$layout$ = function $$DvtSquarifyingLayout$$$$$layout$$($view$$56$$, $root$$12$$, $x$$263$$, $y$$234$$, $width$$108$$, $height$$90$$, $bShowRoot$$1$$) {
  this.$_layout$($root$$12$$, $x$$263$$, $y$$234$$, $width$$108$$, $height$$90$$, $bShowRoot$$1$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSquarifyingLayout$$.prototype.$_layout$ = function $$DvtSquarifyingLayout$$$$$_layout$$($children$$17_node$$108$$, $availBounds$$1_x$$264$$, $children$$inline_5400_w$$71_y$$235$$, $i$$inline_5403_width$$109$$, $area$$inline_5401_factor$$inline_5404_height$$91$$, $child$$inline_5405_isRoot$$3_total$$inline_5402$$) {
  $availBounds$$1_x$$264$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$17_node$$108$$, $availBounds$$1_x$$264$$, $children$$inline_5400_w$$71_y$$235$$, $i$$inline_5403_width$$109$$, $area$$inline_5401_factor$$inline_5404_height$$91$$, $child$$inline_5405_isRoot$$3_total$$inline_5402$$);
  $children$$17_node$$108$$ = $children$$17_node$$108$$.$getChildNodes$();
  if($children$$17_node$$108$$ != D.$JSCompiler_alias_NULL$$ && 0 < $children$$17_node$$108$$.length) {
    $children$$inline_5400_w$$71_y$$235$$ = $children$$17_node$$108$$;
    $area$$inline_5401_factor$$inline_5404_height$$91$$ = $availBounds$$1_x$$264$$.$w$ * $availBounds$$1_x$$264$$.$h$;
    for($i$$inline_5403_width$$109$$ = $i$$inline_5403_width$$109$$ = $child$$inline_5405_isRoot$$3_total$$inline_5402$$ = 0;$i$$inline_5403_width$$109$$ < $children$$inline_5400_w$$71_y$$235$$.length;$i$$inline_5403_width$$109$$++) {
      $child$$inline_5405_isRoot$$3_total$$inline_5402$$ += 0 < $children$$inline_5400_w$$71_y$$235$$[$i$$inline_5403_width$$109$$].$getSize$() ? $children$$inline_5400_w$$71_y$$235$$[$i$$inline_5403_width$$109$$].$getSize$() : 0
    }
    $area$$inline_5401_factor$$inline_5404_height$$91$$ = 0 == $area$$inline_5401_factor$$inline_5404_height$$91$$ ? 0 : $area$$inline_5401_factor$$inline_5404_height$$91$$ / $child$$inline_5405_isRoot$$3_total$$inline_5402$$;
    for($i$$inline_5403_width$$109$$ = 0;$i$$inline_5403_width$$109$$ < $children$$inline_5400_w$$71_y$$235$$.length;$i$$inline_5403_width$$109$$++) {
      $child$$inline_5405_isRoot$$3_total$$inline_5402$$ = $children$$inline_5400_w$$71_y$$235$$[$i$$inline_5403_width$$109$$], $child$$inline_5405_isRoot$$3_total$$inline_5402$$.$__pxSize$ = $child$$inline_5405_isRoot$$3_total$$inline_5402$$.$getSize$() * $area$$inline_5401_factor$$inline_5404_height$$91$$
    }
    $children$$17_node$$108$$ = $children$$17_node$$108$$.slice(0).sort(function($children$$17_node$$108$$, $availBounds$$1_x$$264$$) {
      return $children$$17_node$$108$$.$getSize$() - $availBounds$$1_x$$264$$.$getSize$()
    });
    $children$$inline_5400_w$$71_y$$235$$ = window.Math.min($availBounds$$1_x$$264$$.$w$, $availBounds$$1_x$$264$$.$h$);
    (0,D.$JSCompiler_StaticMethods__squarify$$)(this, $children$$17_node$$108$$, $children$$inline_5400_w$$71_y$$235$$, new D.$DvtRectangle$$($availBounds$$1_x$$264$$.x, $availBounds$$1_x$$264$$.y, $availBounds$$1_x$$264$$.$w$, $availBounds$$1_x$$264$$.$h$))
  }
};
D.$JSCompiler_StaticMethods__squarify$$ = function $$JSCompiler_StaticMethods__squarify$$$($JSCompiler_StaticMethods__squarify$self$$, $children$$19$$, $w$$72$$, $r$$69$$) {
  var $row$$ = [], $worst$$ = window.Infinity;
  if($children$$19$$ == D.$JSCompiler_alias_NULL$$ || 0 == $children$$19$$.length) {
    (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$72$$, $r$$69$$)
  }else {
    for(;0 < $children$$19$$.length;) {
      var $c$$31$$ = $children$$19$$.pop();
      if(0 > $c$$31$$.$__pxSize$) {
        (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$72$$, $r$$69$$);
        break
      }
      $row$$.push($c$$31$$);
      var $min$$inline_5410_newWorst$$, $areas$$inline_5407_s2$$inline_5413$$ = $row$$, $w$$inline_5408_w2$$inline_5414$$ = $w$$72$$, $total$$inline_5409$$ = 0;
      $min$$inline_5410_newWorst$$ = window.Infinity;
      for(var $max$$inline_5411$$ = -window.Infinity, $i$$inline_5412$$ = 0;$i$$inline_5412$$ < $areas$$inline_5407_s2$$inline_5413$$.length;$i$$inline_5412$$++) {
        $total$$inline_5409$$ += $areas$$inline_5407_s2$$inline_5413$$[$i$$inline_5412$$].$__pxSize$, $min$$inline_5410_newWorst$$ = window.Math.min($min$$inline_5410_newWorst$$, $areas$$inline_5407_s2$$inline_5413$$[$i$$inline_5412$$].$__pxSize$), $max$$inline_5411$$ = window.Math.max($max$$inline_5411$$, $areas$$inline_5407_s2$$inline_5413$$[$i$$inline_5412$$].$__pxSize$)
      }
      $areas$$inline_5407_s2$$inline_5413$$ = $total$$inline_5409$$ * $total$$inline_5409$$;
      $w$$inline_5408_w2$$inline_5414$$ *= $w$$inline_5408_w2$$inline_5414$$;
      $min$$inline_5410_newWorst$$ = window.Math.max($w$$inline_5408_w2$$inline_5414$$ * $max$$inline_5411$$ / $areas$$inline_5407_s2$$inline_5413$$, $areas$$inline_5407_s2$$inline_5413$$ / ($w$$inline_5408_w2$$inline_5414$$ * $min$$inline_5410_newWorst$$));
      if($min$$inline_5410_newWorst$$ > $worst$$) {
        $children$$19$$.push($c$$31$$);
        $row$$.pop();
        $r$$69$$ = (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$72$$, $r$$69$$);
        (0,D.$JSCompiler_StaticMethods__squarify$$)($JSCompiler_StaticMethods__squarify$self$$, $children$$19$$, window.Math.min($r$$69$$.$w$, $r$$69$$.$h$), $r$$69$$);
        break
      }else {
        if(0 == $children$$19$$.length) {
          (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$72$$, $r$$69$$);
          break
        }else {
          $worst$$ = $min$$inline_5410_newWorst$$
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods__layoutRow$$ = function $$JSCompiler_StaticMethods__layoutRow$$$($JSCompiler_StaticMethods__layoutRow$self$$, $row$$1$$, $w$$74_width$$110$$, $r$$70$$) {
  var $height$$92_total$$5$$ = 0, $i$$533$$;
  for($i$$533$$ = 0;$i$$533$$ < $row$$1$$.length;$i$$533$$++) {
    $height$$92_total$$5$$ += $row$$1$$[$i$$533$$].$__pxSize$
  }
  var $x$$265$$ = $r$$70$$.x, $y$$236$$ = $r$$70$$.y;
  if($w$$74_width$$110$$ == $r$$70$$.$w$) {
    $height$$92_total$$5$$ = 0 == $w$$74_width$$110$$ ? 0 : $height$$92_total$$5$$ / $w$$74_width$$110$$;
    for($i$$533$$ = 0;$i$$533$$ < $row$$1$$.length;$i$$533$$++) {
      $w$$74_width$$110$$ = $row$$1$$[$i$$533$$].$__pxSize$ / $height$$92_total$$5$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$1$$[$i$$533$$], $x$$265$$, $y$$236$$, $w$$74_width$$110$$, $height$$92_total$$5$$, D.$JSCompiler_alias_FALSE$$), $x$$265$$ += $w$$74_width$$110$$
    }
    return new D.$DvtRectangle$$($r$$70$$.x, $r$$70$$.y + $height$$92_total$$5$$, $r$$70$$.$w$, $r$$70$$.$h$ - $height$$92_total$$5$$)
  }
  $w$$74_width$$110$$ = 0 == $w$$74_width$$110$$ ? 0 : $height$$92_total$$5$$ / $w$$74_width$$110$$;
  for($i$$533$$ = 0;$i$$533$$ < $row$$1$$.length;$i$$533$$++) {
    $height$$92_total$$5$$ = $row$$1$$[$i$$533$$].$__pxSize$ / $w$$74_width$$110$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$1$$[$i$$533$$], $x$$265$$, $y$$236$$, $w$$74_width$$110$$, $height$$92_total$$5$$, D.$JSCompiler_alias_FALSE$$), $y$$236$$ += $height$$92_total$$5$$
  }
  return new D.$DvtRectangle$$($r$$70$$.x + $w$$74_width$$110$$, $r$$70$$.y, $r$$70$$.$w$ - $w$$74_width$$110$$, $r$$70$$.$h$)
};
D.$DvtSliceAndDiceLayout$$ = function $$DvtSliceAndDiceLayout$$$($isHoriz$$13$$) {
  this.Init();
  this.$_isHoriz$ = $isHoriz$$13$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSliceAndDiceLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSliceAndDiceLayout");
D.$DvtSliceAndDiceLayout$$.prototype.$layout$ = function $$DvtSliceAndDiceLayout$$$$$layout$$($view$$54$$, $root$$11$$, $x$$261$$, $y$$232$$, $width$$106$$, $height$$88$$, $bShowRoot$$) {
  this.$_layout$(this.$_isHoriz$, $view$$54$$, $root$$11$$, $x$$261$$, $y$$232$$, $width$$106$$, $height$$88$$, $bShowRoot$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSliceAndDiceLayout$$.prototype.$_layout$ = function $$DvtSliceAndDiceLayout$$$$$_layout$$($isHoriz$$14$$, $view$$55$$, $children$$16_node$$107$$, $availBounds_x$$262$$, $childX_y$$233$$, $childY_width$$107$$, $childWidth_height$$89$$, $childHeight_isRoot$$1$$) {
  $availBounds_x$$262$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$16_node$$107$$, $availBounds_x$$262$$, $childX_y$$233$$, $childY_width$$107$$, $childWidth_height$$89$$, $childHeight_isRoot$$1$$);
  $children$$16_node$$107$$ = $children$$16_node$$107$$.$getChildNodes$();
  if($children$$16_node$$107$$ != D.$JSCompiler_alias_NULL$$) {
    $childX_y$$233$$ = $availBounds_x$$262$$.x;
    $childY_width$$107$$ = $availBounds_x$$262$$.y;
    $childWidth_height$$89$$ = $availBounds_x$$262$$.$w$;
    $childHeight_isRoot$$1$$ = $availBounds_x$$262$$.$h$;
    var $total$$2$$ = 0, $i$$530$$;
    for($i$$530$$ = 0;$i$$530$$ < $children$$16_node$$107$$.length;$i$$530$$++) {
      $total$$2$$ += 0 < $children$$16_node$$107$$[$i$$530$$].$getSize$() ? $children$$16_node$$107$$[$i$$530$$].$getSize$() : 0
    }
    "on" == this.$Sorting$ && ($children$$16_node$$107$$ = $children$$16_node$$107$$.slice(0), $children$$16_node$$107$$.sort(function($isHoriz$$14$$, $view$$55$$) {
      return $view$$55$$.$getSize$() - $isHoriz$$14$$.$getSize$()
    }));
    $isHoriz$$14$$ && D.$DvtAgent$$.$isRightToLeft$($view$$55$$.$_context$) && ($children$$16_node$$107$$ = $children$$16_node$$107$$.slice(0).reverse());
    for($i$$530$$ = 0;$i$$530$$ < $children$$16_node$$107$$.length;$i$$530$$++) {
      var $child$$59$$ = $children$$16_node$$107$$[$i$$530$$];
      if(!(0 >= $child$$59$$.$getSize$())) {
        var $sizeRatio$$ = $child$$59$$.$getSize$() / $total$$2$$;
        $isHoriz$$14$$ ? $childWidth_height$$89$$ = $availBounds_x$$262$$.$w$ * $sizeRatio$$ : $childHeight_isRoot$$1$$ = $availBounds_x$$262$$.$h$ * $sizeRatio$$;
        this.$_layout$(!$isHoriz$$14$$, $view$$55$$, $child$$59$$, $childX_y$$233$$, $childY_width$$107$$, $childWidth_height$$89$$, $childHeight_isRoot$$1$$, D.$JSCompiler_alias_FALSE$$);
        $isHoriz$$14$$ ? $childX_y$$233$$ += $childWidth_height$$89$$ : $childY_width$$107$$ += $childHeight_isRoot$$1$$
      }
    }
  }
};
D.$DvtTreemapIsolateEvent$$ = function $$DvtTreemapIsolateEvent$$$($id$$200$$) {
  this.Init("treemapIsolate");
  this.$_id$ = $id$$200$$ ? $id$$200$$ : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtTreemapIsolateEvent", D.$DvtTreemapIsolateEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapIsolateEvent$$, D.$DvtBaseComponentEvent$$, "DvtTreemapIsolateEvent");
D.$DvtTreemapIsolateEvent$$.TYPE = "treemapIsolate";
D.$DvtTreemapIsolateEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtTreemapIsolateEvent$$.prototype.getId = D.$DvtTreemapIsolateEvent$$.prototype.getId;
D.$DvtTreemapKeyboardHandler$$ = function $$DvtTreemapKeyboardHandler$$$($manager$$14$$) {
  this.Init($manager$$14$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapKeyboardHandler$$, D.$DvtBaseTreeKeyboardHandler$$, "DvtTreemapKeyboardHandler");
D.$DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($event$$439_keyCode$$21$$) {
  var $isNavigable$$1$$ = D.$DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$439_keyCode$$21$$);
  if(!$isNavigable$$1$$ && ($event$$439_keyCode$$21$$ = $event$$439_keyCode$$21$$.keyCode, 219 == $event$$439_keyCode$$21$$ || 221 == $event$$439_keyCode$$21$$)) {
    $isNavigable$$1$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$1$$
};
D.$DvtTreemapEventManager$$ = function $$DvtTreemapEventManager$$$($view$$57$$, $context$$555$$, $callback$$112$$, $callbackObj$$86$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$57$$, $context$$555$$, $callback$$112$$, $callbackObj$$86$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtTreemapEventManager");
D.$DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($event$$437$$) {
  var $eventConsumed$$2$$ = D.$JSCompiler_alias_TRUE$$;
  if(13 == $event$$437$$.keyCode && $event$$437$$.ctrlKey) {
    var $node$$109$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this);
    $node$$109$$.$isIsolateEnabled$() && ($node$$109$$.$_isIsolated$ ? $node$$109$$.$__restoreNode$() : $node$$109$$.$__isolateNode$());
    $event$$437$$.preventDefault()
  }else {
    $eventConsumed$$2$$ = D.$DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$437$$)
  }
  return $eventConsumed$$2$$
};
D.$DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtTreemapBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapBundle$$, D.$DvtBundle$$, "DvtTreemapBundle");
D.$DvtTreemapBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtTreemapBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtTreemapBundle$$$$$GetDefaultStringForKey$$($key$$75$$) {
  return D.$DvtTreemapBundle$$._defaults[$key$$75$$]
};
D.$DvtTreemapBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtTreemapBundle");
D.$DvtTreemapDefaults$$ = function $$DvtTreemapDefaults$$$() {
  this.Init({skyros:D.$DvtTreemapDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtTreemapDefaults");
D.$DvtTreemapDefaults$VERSION_1$$ = {nodeDefaults:{header:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")}}};
D.$DvtTreemapJsonUtils$$ = (0,D.$JSCompiler_set$$)("$_context$");
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapJsonUtils$$, D.$DvtBaseTreeJsonUtils$$, "DvtTreemapJsonUtils");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapJsonUtils$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)("treemap");
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay$$3_options$$131$$) {
  var $ret$$59$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay$$3_options$$131$$), $ret$$59$$ = $ret$$59$$ + this.$WriteAttr$("irk", $animationOnDisplay$$3_options$$131$$.isolatedNode), $groupGaps_layout$$22$$ = $animationOnDisplay$$3_options$$131$$.groupGaps;
  "all" == $groupGaps_layout$$22$$ ? $ret$$59$$ += this.$WriteAttr$("gg", "a") : "none" == $groupGaps_layout$$22$$ && ($ret$$59$$ += this.$WriteAttr$("gg", "n"));
  $groupGaps_layout$$22$$ = $animationOnDisplay$$3_options$$131$$.layout;
  "sliceAndDiceHorizontal" == $groupGaps_layout$$22$$ ? $ret$$59$$ += this.$WriteAttr$("layout", "h") : "sliceAndDiceVertical" == $groupGaps_layout$$22$$ && ($ret$$59$$ += this.$WriteAttr$("layout", "v"));
  $animationOnDisplay$$3_options$$131$$ = $animationOnDisplay$$3_options$$131$$.animationOnDisplay;
  return $ret$$59$$ = "auto" == $animationOnDisplay$$3_options$$131$$ ? $ret$$59$$ + this.$WriteAttr$("adi", "alphaFade") : $ret$$59$$ + this.$WriteAttr$("adi", $animationOnDisplay$$3_options$$131$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$132$$, $nodeData$$8$$) {
  var $ret$$60$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$132$$, $nodeData$$8$$);
  if("off" == ($nodeData$$8$$.labelDisplay ? $nodeData$$8$$.labelDisplay : $options$$132$$.nodeDefaults.labelDisplay)) {
    $ret$$60$$ += this.$WriteAttr$("ld", "o")
  }
  var $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$8$$.groupLabelDisplay ? $nodeData$$8$$.groupLabelDisplay : $options$$132$$.nodeDefaults.groupLabelDisplay;
  "node" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ ? $ret$$60$$ += this.$WriteAttr$("gld", "n") : "off" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && ($ret$$60$$ += this.$WriteAttr$("gld", "o"));
  $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$8$$.labelHalign ? $nodeData$$8$$.labelHalign : $options$$132$$.nodeDefaults.labelHalign;
  "start" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ ? $ret$$60$$ += this.$WriteAttr$("ha", "s") : "end" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && ($ret$$60$$ += this.$WriteAttr$("ha", "e"));
  $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$8$$.labelValign ? $nodeData$$8$$.labelValign : $options$$132$$.nodeDefaults.labelValign;
  "top" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ ? $ret$$60$$ += this.$WriteAttr$("va", "t") : "bottom" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && ($ret$$60$$ += this.$WriteAttr$("va", "b"));
  var $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$8$$.header, $ret$$60$$ = $ret$$60$$ + this.$WriteAttr$("hls", $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelStyle ? $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelStyle : $options$$132$$.nodeDefaults.header.labelStyle), $headerHalign$$ = $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelHalign ? 
  $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelHalign : $options$$132$$.nodeDefaults.header.labelHalign;
  "center" == $headerHalign$$ ? $ret$$60$$ += this.$WriteAttr$("hha", "c") : "end" == $headerHalign$$ && ($ret$$60$$ += this.$WriteAttr$("hha", "e"));
  if("off" == ($groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.isolate ? $groupLabelDisplay_header$$2_labelHalign_labelValign$$.isolate : $options$$132$$.nodeDefaults.header.isolate)) {
    $ret$$60$$ += this.$WriteAttr$("hi", "off")
  }
  if("on" == ($groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.useNodeColor ? $groupLabelDisplay_header$$2_labelHalign_labelValign$$.useNodeColor : $options$$132$$.nodeDefaults.header.useNodeColor)) {
    $ret$$60$$ += this.$WriteAttr$("unc", "on")
  }
  return $ret$$60$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$133_resources$$24$$) {
  var $ret$$61$$, $bRtl_bundle$$5$$ = new D.$DvtTreemapBundle$$;
  $ret$$61$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl_bundle$$5$$, "SIZE"));
  $ret$$61$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl_bundle$$5$$, "COLOR"));
  $options$$133_resources$$24$$ = $options$$133_resources$$24$$._resources;
  $bRtl_bundle$$5$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$);
  $ret$$61$$ += this.$WriteAttr$("maximizeUp", $bRtl_bundle$$5$$ && $options$$133_resources$$24$$.isolateRtl ? $options$$133_resources$$24$$.isolateRtl : $options$$133_resources$$24$$.isolate);
  $ret$$61$$ += this.$WriteAttr$("maximizeDown", $bRtl_bundle$$5$$ && $options$$133_resources$$24$$.isolateDownRtl ? $options$$133_resources$$24$$.isolateDownRtl : $options$$133_resources$$24$$.isolateDown);
  $ret$$61$$ += this.$WriteAttr$("maximizeOver", $bRtl_bundle$$5$$ && $options$$133_resources$$24$$.isolateOverRtl ? $options$$133_resources$$24$$.isolateOverRtl : $options$$133_resources$$24$$.isolateOver);
  $ret$$61$$ += this.$WriteAttr$("restoreUp", $bRtl_bundle$$5$$ && $options$$133_resources$$24$$.restoreRtl ? $options$$133_resources$$24$$.restoreRtl : $options$$133_resources$$24$$.restore);
  $ret$$61$$ += this.$WriteAttr$("restoreDown", $bRtl_bundle$$5$$ && $options$$133_resources$$24$$.restoreDownRtl ? $options$$133_resources$$24$$.restoreDownRtl : $options$$133_resources$$24$$.restoreDown);
  $ret$$61$$ += this.$WriteAttr$("restoreOver", $bRtl_bundle$$5$$ && $options$$133_resources$$24$$.restoreOverRtl ? $options$$133_resources$$24$$.restoreOverRtl : $options$$133_resources$$24$$.restoreOver);
  $ret$$61$$ += this.$WriteAttr$("alta", "true");
  return $ret$$61$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($nodeHeaderSelectedOuterColor_options$$134$$) {
  var $ret$$62$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $nodeHeaderSelectedOuterColor_options$$134$$), $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$134$$.animationUpdateColor;
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ && ($ret$$62$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.hoverColor) && ($ret$$62$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.selectedInnerColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.selectedOuterColor;
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-inner-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-outer-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$62$$ += this.$WriteAttr$("node-selected", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.header.backgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.header.borderColor;
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "border-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$62$$ += this.$WriteAttr$("nodeHeader", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.header.hoverBackgroundColor, $nodeHeaderHoverInnerColor$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.header.hoverInnerColor, $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = 
  $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.header.hoverOuterColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "background-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "") + 
  ($nodeHeaderHoverInnerColor$$ ? "-tr-inner-color:" + $nodeHeaderHoverInnerColor$$ + ";" : "");
  ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ += $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-outer-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ : 
  "") && ($ret$$62$$ += this.$WriteAttr$("nodeHeader-hover", $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$));
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.header.selectedBackgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.header.selectedInnerColor;
  $nodeHeaderSelectedOuterColor_options$$134$$ = $nodeHeaderSelectedOuterColor_options$$134$$.nodeDefaults.header.selectedOuterColor;
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-inner-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "");
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ += $nodeHeaderSelectedOuterColor_options$$134$$ ? "-tr-outer-color:" + $nodeHeaderSelectedOuterColor_options$$134$$ : "") && ($ret$$62$$ += this.$WriteAttr$("nodeHeader-selected", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  return $ret$$62$$ + "/\x3e\n"
};
});