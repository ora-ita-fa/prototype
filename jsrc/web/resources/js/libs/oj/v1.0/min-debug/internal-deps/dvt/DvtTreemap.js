define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreemap$$ = function $$DvtBaseTreemap$$$($context$$14$$, $callback$$33$$, $callbackObj$$10$$) {
  this.Init($context$$14$$, $callback$$33$$, $callbackObj$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemap$$, D.$DvtBaseTreeView$$, "DvtBaseTreemap");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreemap$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$15$$, $callback$$34$$, $callbackObj$$11$$) {
  D.$DvtBaseTreemap$$.$superclass$.Init.call(this, $context$$15$$, $callback$$34$$, $callbackObj$$11$$);
  this.$Defaults$ = new D.$DvtTreemapDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$2$$) {
  return(new D.$DvtTreemapParser$$(this)).parse($xmlString$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($isolateRowKey$$inline_766_props$$1$$) {
  D.$DvtBaseTreemap$$.$superclass$.$ApplyParsedProperties$.call(this, $isolateRowKey$$inline_766_props$$1$$);
  this.$_layout$ = $isolateRowKey$$inline_766_props$$1$$.$layout$;
  this.$_groupGaps$ = $isolateRowKey$$inline_766_props$$1$$.$groupGaps$;
  this.$_layout$ && (this.$_layout$.$Sorting$ = this.$Sorting$);
  this.$_isolatedNodes$ = [];
  if(($isolateRowKey$$inline_766_props$$1$$ = $isolateRowKey$$inline_766_props$$1$$.$isolateRowKey$) && this.$_root$) {
    var $allNodes$$inline_767$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this.$_root$);
    $allNodes$$inline_767$$.push(this.$_root$);
    for(var $i$$inline_768$$ = 0;$i$$inline_768$$ < $allNodes$$inline_767$$.length;$i$$inline_768$$++) {
      if($allNodes$$inline_767$$[$i$$inline_768$$].getId() == $isolateRowKey$$inline_766_props$$1$$) {
        this.$_isolatedNodes$.push($allNodes$$inline_767$$[$i$$inline_768$$]);
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$) {
  var $bufferSpace_gap_numIsolated$$ = window.Math.max(window.Math.ceil(7 * window.Math.min($availSpace$$.$w$, $availSpace$$.$h$) / 400), 2);
  $availSpace$$.x += $bufferSpace_gap_numIsolated$$;
  $availSpace$$.y += $bufferSpace_gap_numIsolated$$;
  $availSpace$$.$w$ -= 2 * $bufferSpace_gap_numIsolated$$;
  $availSpace$$.$h$ -= 2 * $bufferSpace_gap_numIsolated$$;
  $bufferSpace_gap_numIsolated$$ = this.$_layout$.$getGapSize$(this, 1);
  $availSpace$$.x += $bufferSpace_gap_numIsolated$$;
  $availSpace$$.$w$ -= 2 * $bufferSpace_gap_numIsolated$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$);
  $availSpace$$.x -= $bufferSpace_gap_numIsolated$$;
  $availSpace$$.$w$ += 2 * $bufferSpace_gap_numIsolated$$;
  $bufferSpace_gap_numIsolated$$ = this.$_isolatedNodes$.length;
  if(0 < $bufferSpace_gap_numIsolated$$ && this.$_isolateRestoreLayout$) {
    this.$_layout$.$layout$(this, this.$_isolatedNodes$[$bufferSpace_gap_numIsolated$$ - 1], $availSpace$$.x, $availSpace$$.y, $availSpace$$.$w$, $availSpace$$.$h$, D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $availSpace$$.x, $availSpace$$.y, $availSpace$$.$w$, $availSpace$$.$h$, D.$JSCompiler_alias_FALSE$$);
    for(var $i$$14$$ = 0;$i$$14$$ < $bufferSpace_gap_numIsolated$$;$i$$14$$++) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$i$$14$$], $availSpace$$.x, $availSpace$$.y, $availSpace$$.$w$, $availSpace$$.$h$, D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$8_i$$15$$) {
  this.$RenderBackground$($container$$8_i$$15$$, "background-color:#EBEFF5;border-color:#DBE0EA;border-width:2px");
  this.$_breadcrumbs$ && $container$$8_i$$15$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$8_i$$15$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_groupTextLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$8_i$$15$$.$addChild$(this.$_groupTextLayer$);
    this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($container$$8_i$$15$$) : this.$_root$.$hasChildren$() ? this.$_root$.$renderChildren$($container$$8_i$$15$$) : this.$_root$.$render$($container$$8_i$$15$$);
    this.$_isolatedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$8_i$$15$$.$addChild$(this.$_isolatedLayer$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$8_i$$15$$.$addChild$(this.$_selectedLayer$);
    $container$$8_i$$15$$.$addChild$(this.$_groupTextLayer$);
    this.$_hoverEffect$ = new D.$DvtPolyline$$(this.$_context$, []);
    this.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
    this.$_hoverEffect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_hoverEffect$);
    $container$$8_i$$15$$.$addChild$(this.$_hoverEffect$);
    for($container$$8_i$$15$$ = 0;$container$$8_i$$15$$ < this.$_isolatedNodes$.length;$container$$8_i$$15$$++) {
      var $displayable$$ = this.$_isolatedNodes$[$container$$8_i$$15$$].$getDisplayable$();
      this.$_isolatedLayer$.$addChild$($displayable$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$8_i$$15$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
  D.$DvtBaseTreemap$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$16$$ = 0;$i$$16$$ < $selectedNodes$$.length;$i$$16$$++) {
    if(0 < this.$_isolatedNodes$.length) {
      var $lastIsolated$$1$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
      ($selectedNodes$$[$i$$16$$] == $lastIsolated$$1$$ || (0,D.$JSCompiler_StaticMethods_isDescendantOf$$)($selectedNodes$$[$i$$16$$], $lastIsolated$$1$$)) && $selectedNodes$$[$i$$16$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }else {
      $selectedNodes$$[$i$$16$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$) {
  return new D.$DvtTreemapKeyboardHandler$$($manager$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$3$$, $context$$16$$, $callback$$35$$, $callbackObj$$12$$) {
  return new D.$DvtTreemapEventManager$$($view$$3$$, $context$$16$$, $callback$$35$$, $callbackObj$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$) {
  var $isolatedRootNode$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this);
  return $isolatedRootNode$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($isolatedRootNode$$)) : $root$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($root$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($rect$$) {
  for(var $newIndex$$ = 0, $numChildren$$ = this.$_selectedLayer$.$getNumChildren$(), $i$$17$$ = 0;$i$$17$$ < $numChildren$$;$i$$17$$++) {
    var $child$$2$$ = this.$_selectedLayer$.$getChildAt$($i$$17$$);
    $rect$$.zIndex > $child$$2$$.zIndex && ($newIndex$$ = $i$$17$$ + 1)
  }
  $newIndex$$ < $numChildren$$ ? this.$_selectedLayer$.$addChildAt$($rect$$, $newIndex$$) : this.$_selectedLayer$.$addChild$($rect$$)
};
D.$JSCompiler_StaticMethods___getLastIsolatedNode$$ = function $$JSCompiler_StaticMethods___getLastIsolatedNode$$$($JSCompiler_StaticMethods___getLastIsolatedNode$self$$) {
  return $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$ && 0 < $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$[$JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length - 1] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderIsolateRestore$$ = function $$JSCompiler_StaticMethods__renderIsolateRestore$$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$, $node$$5$$) {
  if($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$AnimationOnDataChange$) {
    for(var $playables$$inline_780_selectedNodes$$1$$ = $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$.getSelection() : [], $descendants$$inline_781_i$$18$$ = 0;$descendants$$inline_781_i$$18$$ < $playables$$inline_780_selectedNodes$$1$$.length;$descendants$$inline_781_i$$18$$++) {
      $playables$$inline_780_selectedNodes$$1$$[$descendants$$inline_781_i$$18$$].$setSelected$(D.$JSCompiler_alias_FALSE$$)
    }
    for(var $playables$$inline_780_selectedNodes$$1$$ = [(0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($node$$5$$)], $descendants$$inline_781_i$$18$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($node$$5$$), $i$$inline_782$$ = 0;$i$$inline_782$$ < $descendants$$inline_781_i$$18$$.length;$i$$inline_782$$++) {
      $playables$$inline_780_selectedNodes$$1$$.push((0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($descendants$$inline_781_i$$18$$[$i$$inline_782$$]))
    }
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_context$, $playables$$inline_780_selectedNodes$$1$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.play()
  }else {
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$render$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Width$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Height$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$JSCompiler_StaticMethods___getDefaultNavigable$$ = function $$JSCompiler_StaticMethods___getDefaultNavigable$$$($JSCompiler_StaticMethods___getDefaultNavigable$self$$, $navigableItems$$) {
  var $keyboardHandler$$ = $JSCompiler_StaticMethods___getDefaultNavigable$self$$.$_eventHandler$.$KeyboardHandler$;
  return $keyboardHandler$$ ? $keyboardHandler$$.$getDefaultNavigable$($navigableItems$$) : $navigableItems$$ && 0 < $navigableItems$$.length ? $navigableItems$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemap$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtTreemap", D.$DvtTreemap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemap$$, D.$DvtBaseTreemap$$, "DvtTreemap");
D.$DvtTreemap$$.newInstance = function $$DvtTreemap$$$newInstance$($context$$17$$, $callback$$36$$, $callbackObj$$13$$) {
  var $component$$1$$ = new D.$DvtTreemap$$;
  $component$$1$$.Init($context$$17$$, $callback$$36$$, $callbackObj$$13$$);
  return $component$$1$$
};
D.$DvtTreemap$$.getDefaults = function $$DvtTreemap$$$getDefaults$($skin$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtTreemapDefaults$$, $skin$$)
};
D.$DvtTreemap$$.prototype.$render$ = function $$DvtTreemap$$$$$render$$($options$$9_xmlString$$3$$, $width$$19$$, $height$$19$$, $bSkipXml$$) {
  $options$$9_xmlString$$3$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$9_xmlString$$3$$), D.$DvtAgent$$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$9_xmlString$$3$$ = $bSkipXml$$ ? D.$JSCompiler_alias_NULL$$ : (new D.$DvtTreemapJsonUtils$$(this.$_context$)).$toXml$(this.$Options$);
  D.$DvtTreemap$$.$superclass$.$render$.call(this, $options$$9_xmlString$$3$$, $width$$19$$, $height$$19$$)
};
D.$DvtTreemap$$.prototype.render = D.$DvtTreemap$$.prototype.$render$;
D.$DvtTreemapParser$$ = function $$DvtTreemapParser$$$($treemap$$) {
  this.Init($treemap$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapParser$$, D.$DvtBaseTreeParser$$, "DvtTreemapParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = function $$JSCompiler_prototypeAlias$$$$CreateNode$$($treeView$$, $props$$6$$, $templates$$) {
  return new D.$DvtTreemapNode$$($treeView$$, $props$$6$$, $templates$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$7$$) {
  var $ret$$34$$ = D.$DvtTreemapParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$7$$), $layoutStr$$ = $xmlNode$$7$$.$getAttr$("layout");
  $ret$$34$$.$layout$ = "h" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_TRUE$$) : "v" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_FALSE$$) : new D.$DvtSquarifyingLayout$$;
  $ret$$34$$.$groupGaps$ = $xmlNode$$7$$.$getAttr$("gg");
  $ret$$34$$.$groupGaps$ || ($ret$$34$$.$groupGaps$ = "o");
  $ret$$34$$.$isolateRowKey$ = $xmlNode$$7$$.$getAttr$("irk");
  this.$_isolateRowKey$ = $ret$$34$$.$isolateRowKey$;
  return $ret$$34$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($headerLabelStyle_xmlNode$$8$$) {
  var $ret$$35$$ = D.$DvtTreemapParser$$.$superclass$.$ParseNodeAttributes$.call(this, $headerLabelStyle_xmlNode$$8$$);
  $ret$$35$$.$groupLabelDisplay$ = $headerLabelStyle_xmlNode$$8$$.$getAttr$("gld");
  $ret$$35$$.$labelHalign$ = $headerLabelStyle_xmlNode$$8$$.$getAttr$("ha");
  $ret$$35$$.$labelValign$ = $headerLabelStyle_xmlNode$$8$$.$getAttr$("va");
  $ret$$35$$.$isolate$ = $headerLabelStyle_xmlNode$$8$$.$getAttr$("hi");
  $ret$$35$$.$headerUseNodeColor$ = $headerLabelStyle_xmlNode$$8$$.$getAttr$("unc");
  $ret$$35$$.$headerHalign$ = $headerLabelStyle_xmlNode$$8$$.$getAttr$("hha");
  if($headerLabelStyle_xmlNode$$8$$ = $headerLabelStyle_xmlNode$$8$$.$getAttr$("hls")) {
    $ret$$35$$.$headerLabelStyle$ = new D.$DvtCSSStyle$$($headerLabelStyle_xmlNode$$8$$)
  }
  this.$_isolateRowKey$ == $ret$$35$$.id && ($ret$$35$$.$isIsolated$ = D.$JSCompiler_alias_TRUE$$);
  return $ret$$35$$
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalNodeStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalNodeStyles$$($nodeStyle$$, $nodeHoverStyle$$, $nodeSelectedStyle$$, $styles$$1$$) {
  $styles$$1$$.NODE_HOVER_COLOR = $nodeHoverStyle$$.$getStyle$("border-color");
  $styles$$1$$.NODE_SELECTED_OUTER_COLOR = $nodeSelectedStyle$$.$getStyle$("-tr-outer-color");
  $styles$$1$$.NODE_SELECTED_INNER_COLOR = $nodeSelectedStyle$$.$getStyle$("-tr-inner-color")
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalStyles$$($xmlNode$$9$$, $styles$$2$$) {
  var $nodeHeaderDrillStyle_nodeHeaderStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$9$$.$getAttr$("nodeHeader"));
  $styles$$2$$.HEADER_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$2$$.HEADER_BACKGROUND_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  var $nodeHeaderHoverStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$9$$.$getAttr$("nodeHeader-hover")));
  $styles$$2$$.HEADER_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderHoverStyle$$;
  $styles$$2$$.HEADER_BACKGROUND_HOVER_STYLE = $nodeHeaderHoverStyle$$;
  var $nodeHeaderSelectedStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$9$$.$getAttr$("nodeHeader-selected")));
  $styles$$2$$.HEADER_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderSelectedStyle$$;
  $styles$$2$$.HEADER_BACKGROUND_SELECTED_STYLE = $nodeHeaderSelectedStyle$$;
  $nodeHeaderDrillStyle_nodeHeaderStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$9$$.$getAttr$("nodeHeaderDrill")));
  $styles$$2$$.HEADER_DRILL_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$2$$.HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$9$$.$getAttr$("nodeHeaderDrill-hover")));
  $styles$$2$$.HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$9$$.$getAttr$("nodeHeaderDrill-selected")));
  $styles$$2$$.HEADER_HOVER_OUTER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-outer-color");
  $styles$$2$$.HEADER_HOVER_INNER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-inner-color");
  $styles$$2$$.HEADER_SELECTED_OUTER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-outer-color");
  $styles$$2$$.HEADER_SELECTED_INNER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-inner-color")
};
D.$DvtTreemapNode$$ = function $$DvtTreemapNode$$$($treemap$$1$$, $props$$7$$, $templates$$1$$) {
  this.Init($treemap$$1$$, $props$$7$$, $templates$$1$$);
  this.$_labelDisplay$ = $props$$7$$.$labelDisplay$ ? $props$$7$$.$labelDisplay$ : "n";
  this.$_groupLabelDisplay$ = $props$$7$$.$groupLabelDisplay$ ? $props$$7$$.$groupLabelDisplay$ : "h";
  this.$_labelHalign$ = $props$$7$$.$labelHalign$ ? $props$$7$$.$labelHalign$ : "c";
  this.$_labelValign$ = $props$$7$$.$labelValign$ ? $props$$7$$.$labelValign$ : "c";
  this.$_headerHalign$ = $props$$7$$.$headerHalign$ ? $props$$7$$.$headerHalign$ : "s";
  this.$_headerLabelStyle$ = $props$$7$$.$headerLabelStyle$;
  this.$_headerUseNodeColor$ = "on" == $props$$7$$.$headerUseNodeColor$;
  this.$_isolate$ = $props$$7$$.$isolate$ ? $props$$7$$.$isolate$ : "on";
  this.$_isIsolated$ = $props$$7$$.$isIsolated$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapNode$$, D.$DvtBaseTreeNode$$, "DvtTreemapNode");
D.$DvtTreemapNode$$.prototype.$render$ = function $$DvtTreemapNode$$$$$render$$($container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$) {
  if(this.$_hasLayout$) {
    this.$_shape$ = this.$_createShapeNode$();
    $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$.$addChild$(this.$_shape$);
    var $afRoot$$6_template$$;
    this.$hasChildren$() ? (this.$_childNodeGroup$ = new D.$DvtContainer$$(this.$_view$.$_context$), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $afRoot$$6_template$$ = this.$_template$;
    if($afRoot$$6_template$$) {
      var $afContext$$2$$ = this.$_view$.$_afContext$;
      $afContext$$2$$.$_elContext$ = this.$_elAttributes$;
      var $aw$$1$$ = this.$_width$ - 8 - 2, $ah$$3$$ = this.$_height$ - 4 - 2;
      0 < $aw$$1$$ && 0 < $ah$$3$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$2$$, $aw$$1$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$2$$, $ah$$3$$), $afContext$$2$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$6_template$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$2$$, $afRoot$$6_template$$, this.$_shape$), D.$DvtAgent$$.$isRightToLeft$($container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$.$_context$) ? 
      ($container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$ = $afRoot$$6_template$$.$getDimensions$(), $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$ = this.$_x$ + this.$_width$ - 4 - 1 - $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$.$w$) : $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$ = this.$_x$ + 4 + 1, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$6_template$$, $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$, this.$_y$ + 
      2 + 1))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_pattern$ && "h" != this.$_textStyle$) && ($container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$.x, $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$.y, $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$.$w$, 
      $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_shape$.$addChild$(this.$_textBackground$), $container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$ = this.$_text$, "n" == this.$_textStyle$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$) : this.$_shape$.$addChild$($container$$67_dim$$64_dims$$24_text$$inline_3211_transX$$3$$))
    }
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$_shape$);
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$_datatip$)
  }
};
D.$DvtTreemapNode$$.prototype.$setSelected$ = function $$DvtTreemapNode$$$$$setSelected$$($parentNode$$2_selected$$6_x$$190$$) {
  if("off" != this.$Selectable$ && (D.$DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $parentNode$$2_selected$$6_x$$190$$), this.$_shape$)) {
    if(this.$isSelected$()) {
      $parentNode$$2_selected$$6_x$$190$$ = this.$_x$;
      var $y$$160$$ = this.$_y$ + 1, $w$$57$$ = this.$_width$ - 1, $h$$60$$ = this.$_height$ - 1;
      D.$DvtAgent$$.$isPlatformWebkit$() && ($y$$160$$ -= 1);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$);
      this.$_selectionInner$ = this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$;
      this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$2_selected$$6_x$$190$$, $y$$160$$, $w$$57$$, $h$$60$$);
      this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$);
      this.$_shape$.$addChild$(this.$_selectionOuter$);
      this.$_selectionInner$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$2_selected$$6_x$$190$$ + 1, $y$$160$$ + 1, $w$$57$$ - 2, $h$$60$$ - 2);
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
      "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1") : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$))) : ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_shape$), this.$_selectionOuter$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), ($parentNode$$2_selected$$6_x$$190$$ = this.$_parent$) && $parentNode$$2_selected$$6_x$$190$$.$_childNodeGroup$ && 
      $parentNode$$2_selected$$6_x$$190$$.$_childNodeGroup$.$addChild$(this.$_shape$))
    }
  }
};
D.$DvtTreemapNode$$.prototype.$showHoverEffect$ = function $$DvtTreemapNode$$$$$showHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $isolatedNode_points$$31$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$);
    if(!($isolatedNode_points$$31$$ != D.$JSCompiler_alias_NULL$$ && $isolatedNode_points$$31$$ != this && !(0,D.$JSCompiler_StaticMethods_isDescendantOf$$)(this, $isolatedNode_points$$31$$))) {
      var $isolatedNode_points$$31$$ = [], $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$, $w$$58_x2$$18$$, $h$$61_y2$$18$$;
      "h" == this.$_textStyle$ ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE"), this.$_selectionOuter$ || ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$ = this.$_x$, $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$ = this.$_y$ + 1, $w$$58_x2$$18$$ = this.$_width$ - 1, $h$$61_y2$$18$$ = this.$_height$ - 1, D.$DvtAgent$$.$isPlatformWebkit$() && ($stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$ -= 
      1), this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$, $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$, $w$$58_x2$$18$$, $h$$61_y2$$18$$), this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$isSelected$() ? 
      this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$) : this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1"), $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$ = this.$_x$ + 1.5 + 1, $w$$58_x2$$18$$ = this.$_x$ + this.$_width$ - 
      1.5 - 1, $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$ = this.$_y$ + this.$_titleBarHeight$, $h$$61_y2$$18$$ = this.$_y$ + this.$_height$ - 1.5 - 1, $isolatedNode_points$$31$$.push($w$$58_x2$$18$$, $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$, $w$$58_x2$$18$$, $h$$61_y2$$18$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$, $h$$61_y2$$18$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$, $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$), 
      $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$ = new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#C4DCFF", "HEADER_HOVER_INNER_COLOR_STYLE"), 0.8, 3), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE", "#000000") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_HOVER_DEFAULT_STYLE", "#000000"))) : ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$ = 
      this.$_x$ + 1, $w$$58_x2$$18$$ = this.$_x$ + this.$_width$ - 1, $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$ = this.$_y$ + 1, $h$$61_y2$$18$$ = this.$_y$ + this.$_height$ - 1, $isolatedNode_points$$31$$.push(this.$_x$, $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$, $w$$58_x2$$18$$, $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$, $w$$58_x2$$18$$, $h$$61_y2$$18$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$, $h$$61_y2$$18$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$, 
      $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$), $stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$ = new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR"), 1, 2));
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$ = this.$_view$;
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$.$_hoverEffect$.$setPoints$($isolatedNode_points$$31$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$.$_hoverEffect$.$setStroke$($stroke$$33_stroke$$inline_3215_y$$161_y1$$22$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_3213_x$$191_x1$$22$$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$DvtTreemapNode$$.prototype.$hideHoverEffect$ = function $$DvtTreemapNode$$$$$hideHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && ("h" == this.$_textStyle$ && (this.$isSelected$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#9CACC9;", "HEADER_BACKGROUND_SELECTED_STYLE"), this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, 
  this.$_text$, "HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B"))) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_selectionOuter$ && (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), 
  this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B")))), this.$_view$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods_isIsolateEnabled$$ = function $$JSCompiler_StaticMethods_isIsolateEnabled$$$($JSCompiler_StaticMethods_isIsolateEnabled$self$$) {
  return"on" == $JSCompiler_StaticMethods_isIsolateEnabled$self$$.$_isolate$ && "h" == $JSCompiler_StaticMethods_isIsolateEnabled$self$$.$_textStyle$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$10$$) {
  return!$behavior$$10$$ || !$behavior$$10$$.$getAlign$() ? D.$DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $behavior$$10$$) : new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$293_lastChild_next$$1$$) {
  var $keyCode$$12_navigables$$1_parent$$43$$;
  if($event$$293_lastChild_next$$1$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $event$$293_lastChild_next$$1$$)
  }
  $keyCode$$12_navigables$$1_parent$$43$$ = $event$$293_lastChild_next$$1$$.keyCode;
  if(32 == $keyCode$$12_navigables$$1_parent$$43$$ && $event$$293_lastChild_next$$1$$.ctrlKey) {
    return this
  }
  if(38 == $keyCode$$12_navigables$$1_parent$$43$$ && $event$$293_lastChild_next$$1$$.altKey || 221 == $keyCode$$12_navigables$$1_parent$$43$$) {
    ($keyCode$$12_navigables$$1_parent$$43$$ = this.$_parent$) && $keyCode$$12_navigables$$1_parent$$43$$.getId() != this.$_view$.$_root$.getId() ? ($event$$293_lastChild_next$$1$$ = $keyCode$$12_navigables$$1_parent$$43$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($keyCode$$12_navigables$$1_parent$$43$$)) : $event$$293_lastChild_next$$1$$ = this
  }else {
    if(40 == $keyCode$$12_navigables$$1_parent$$43$$ && $event$$293_lastChild_next$$1$$.altKey || 219 == $keyCode$$12_navigables$$1_parent$$43$$) {
      $event$$293_lastChild_next$$1$$ = ($event$$293_lastChild_next$$1$$ = this.$_lastVisitedChild$) ? $event$$293_lastChild_next$$1$$ : this.$hasChildren$() ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this.$_view$, this.$getChildNodes$()) : this
    }else {
      var $root$$10$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$), $depth$$3$$ = 0;
      if($root$$10$$) {
        if(this == $root$$10$$) {
          $depth$$3$$ = 0
        }else {
          $keyCode$$12_navigables$$1_parent$$43$$ = this.$_parent$;
          for($depth$$3$$ = 1;$root$$10$$ != $keyCode$$12_navigables$$1_parent$$43$$;) {
            $depth$$3$$++, $keyCode$$12_navigables$$1_parent$$43$$ = $keyCode$$12_navigables$$1_parent$$43$$.$_parent$
          }
        }
      }else {
        for($root$$10$$ = this;$root$$10$$.$_parent$;) {
          $root$$10$$ = $root$$10$$.$_parent$
        }
        $depth$$3$$ = (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this)
      }
      $keyCode$$12_navigables$$1_parent$$43$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$10$$, $depth$$3$$);
      $event$$293_lastChild_next$$1$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$293_lastChild_next$$1$$, $keyCode$$12_navigables$$1_parent$$43$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$293_lastChild_next$$1$$);
  return $event$$293_lastChild_next$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($headerLabelHeight_text$$57_x$$192_xx$$44$$, $y$$162_yy$$43$$, $width$$72_ww$$55$$, $height$$66_hh$$48$$) {
  if(!(0 >= $width$$72_ww$$55$$ || 0 >= $height$$66_hh$$48$$)) {
    this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$;
    this.$_oldState$ = this.$GetAnimationParams$();
    this.$_x$ = $headerLabelHeight_text$$57_x$$192_xx$$44$$;
    this.$_y$ = $y$$162_yy$$43$$;
    this.$_width$ = $width$$72_ww$$55$$ ? $width$$72_ww$$55$$ : 0;
    this.$_height$ = $height$$66_hh$$48$$ ? $height$$66_hh$$48$$ : 0;
    this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
    this.$_textStr$ || (this.$_textStyle$ = "o");
    if("h" == this.$_textStyle$) {
      this.$_titleBarHeight$ = 15;
      $headerLabelHeight_text$$57_x$$192_xx$$44$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
      $headerLabelHeight_text$$57_x$$192_xx$$44$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $headerLabelHeight_text$$57_x$$192_xx$$44$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B");
      $headerLabelHeight_text$$57_x$$192_xx$$44$$ = D.$DvtTextUtils$$.$guessTextDimensions$($headerLabelHeight_text$$57_x$$192_xx$$44$$).$h$;
      this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, $headerLabelHeight_text$$57_x$$192_xx$$44$$);
      (0,D.$JSCompiler_StaticMethods_isIsolateEnabled$$)(this) && (this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, 15));
      $headerLabelHeight_text$$57_x$$192_xx$$44$$ = this.$_x$;
      $y$$162_yy$$43$$ = this.$_y$ + this.$_titleBarHeight$;
      $width$$72_ww$$55$$ = this.$_width$;
      $height$$66_hh$$48$$ = this.$_height$ - this.$_titleBarHeight$;
      if(0 <= $width$$72_ww$$55$$ && 0 <= $height$$66_hh$$48$$) {
        return new D.$DvtRectangle$$($headerLabelHeight_text$$57_x$$192_xx$$44$$, $y$$162_yy$$43$$, $width$$72_ww$$55$$, $height$$66_hh$$48$$)
      }
      this.$_textStyle$ = D.$JSCompiler_alias_NULL$$
    }
    return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  }
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$194$$, $y$$164$$) {
  return $x$$194$$ >= this.$_x$ && $x$$194$$ <= this.$_x$ + this.$_width$ && $y$$164$$ >= this.$_y$ && $y$$164$$ <= this.$_y$ + this.$_height$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$53$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$20$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$29$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $r$$53$$, $g$$20$$, $b$$29$$, this.$hasChildren$() ? 0 : window.Math.random()]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$9$$) {
  this.$setLayoutParams$($params$$9$$[0], $params$$9$$[1], $params$$9$$[2], $params$$9$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$9$$[4]), window.Math.round($params$$9$$[5]), window.Math.round($params$$9$$[6]));
  this.$_shape$ && ((0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_shape$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && (0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_innerShape$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), ("h" != this.$_textStyle$ || this.$_headerUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, 
  this.$_fillShape$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_topLeftShape$), this.$_topLeftShape$ = this.$_fillShape$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), this.$_template$ ? ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_contentRoot$), this.$_contentRoot$ = D.$JSCompiler_alias_NULL$$) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_textBackground$), this.$_textBackground$ = 
  D.$JSCompiler_alias_NULL$$, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), this.$_text$ = this.$_createTextNode$(this.$_shape$)))
};
D.$JSCompiler_StaticMethods__getIsolateAnimation$$ = function $$JSCompiler_StaticMethods__getIsolateAnimation$$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$) {
  if($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$) {
    var $playable$$17$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_view$.$_context$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$, 0.3);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$17$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods__getIsolateAnimation$self$$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$());
    $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$);
    return $playable$$17$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemapNode$$.prototype.$animateUpdate$ = function $$DvtTreemapNode$$$$$animateUpdate$$($handler$$16$$, $oldNode$$2$$) {
  return 0 == (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this) || $oldNode$$2$$.$_hasLayout$ && 0 < $oldNode$$2$$.$_width$ && 0 < $oldNode$$2$$.$_height$ ? D.$DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $handler$$16$$, $oldNode$$2$$) : this.$animateInsert$($handler$$16$$)
};
D.$DvtTreemapNode$$.prototype.$_createShapeNode$ = function $$DvtTreemapNode$$$$$_createShapeNode$$() {
  var $context$$411$$ = this.$_view$.$_context$, $shape$$68$$;
  if("h" == this.$_textStyle$) {
    $shape$$68$$ = new D.$DvtRect$$($context$$411$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new D.$DvtRect$$($context$$411$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, $shape$$68$$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_innerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$68$$.$addChild$(this.$_innerShape$), 
    this.$_isIsolated$ && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, $shape$$68$$))
  }else {
    var $fill$$19$$ = this.$GetFill$();
    $shape$$68$$ = new D.$DvtRect$$($context$$411$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
    if((1E3 > this.$_view$.$_nodeCount$ || !D.$DvtAgent$$.$isTouchDevice$()) && 2 <= this.$_width$ && 2 <= this.$_height$) {
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), 0.3);
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), 0.3);
      this.$_pattern$ && new D.$DvtSolidStroke$$(this.$_color$, 0.15);
      var $fillColor$$5_minDim$$1$$ = this.$getColor$(), $topLeftColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), $topLeftColor$$ = D.$DvtColorUtils$$.$interpolateColor$($topLeftColor$$, $fillColor$$5_minDim$$1$$, 0.7), $bottomRightColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), $bottomRightColor$$ = D.$DvtColorUtils$$.$interpolateColor$($bottomRightColor$$, $fillColor$$5_minDim$$1$$, 
      0.7), $fillColor$$5_minDim$$1$$ = window.Math.min(this.$_width$, this.$_height$);
      4 <= $fillColor$$5_minDim$$1$$ ? ($shape$$68$$.$setSolidFill$($bottomRightColor$$), this.$_topLeftShape$ = new D.$DvtRect$$($context$$411$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($topLeftColor$$), this.$_topLeftShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$68$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new D.$DvtRect$$($context$$411$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), 
      this.$_fillShape$.$setFill$($fill$$19$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$68$$.$addChild$(this.$_fillShape$)) : 2 <= $fillColor$$5_minDim$$1$$ ? ($shape$$68$$.$setSolidFill$($bottomRightColor$$), this.$_fillShape$ = new D.$DvtRect$$($context$$411$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($fill$$19$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$68$$.$addChild$(this.$_fillShape$)) : 
      $shape$$68$$.$setFill$($fill$$19$$)
    }else {
      $shape$$68$$.$setFill$($fill$$19$$)
    }
  }
  this.$_view$.$__getEventManager$().$associate$($shape$$68$$, this);
  this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$ && "off" != this.$Selectable$ ? $shape$$68$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$) : $shape$$68$$.setCursor("default");
  $shape$$68$$.zIndex = this.$_zIndex$;
  return $shape$$68$$
};
D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__createIsolateRestoreButton$$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $container$$68$$) {
  if("h" != $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_textStyle$ || !(0,D.$JSCompiler_StaticMethods_isIsolateEnabled$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$ = D.$JSCompiler_alias_NULL$$, $transX$$4_x1$$23$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$, $x2$$19$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_width$ - 1, $rect$$15_tooltip$$22_y1$$23$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 1, 
  $y2$$19$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_titleBarHeight$;
  if(12 < $x2$$19$$ - $transX$$4_x1$$23$$ - 2) {
    if($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$) {
      var $JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_3224_upState$$inline_3232$$ = new D.$DvtImage$$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, 
      $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$.restoreUp, 0, 0, 12, 12), $overState$$inline_3225_overState$$inline_3233$$ = new D.$DvtImage$$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$.restoreOver, 0, 0, 12, 12), $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$.restoreDown, 0, 0, 12, 12);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_3224_upState$$inline_3232$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_3225_overState$$inline_3233$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$);
      $JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$ = new D.$DvtButton$$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, $upState$$inline_3224_upState$$inline_3232$$, $overState$$inline_3225_overState$$inline_3233$$, $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$);
      $JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__restoreNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }else {
      $JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_3224_upState$$inline_3232$$ = new D.$DvtImage$$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, 
      $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$.maximizeUp, 0, 0, 12, 12), $overState$$inline_3225_overState$$inline_3233$$ = new D.$DvtImage$$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$.maximizeOver, 0, 0, 12, 12), $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$.maximizeDown, 0, 0, 12, 12), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_3224_upState$$inline_3232$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_3225_overState$$inline_3233$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$), 
      $JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$ = new D.$DvtButton$$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, $upState$$inline_3224_upState$$inline_3232$$, $overState$$inline_3225_overState$$inline_3233$$, $downState$$inline_3226_downState$$inline_3234_resources$$inline_3223_resources$$inline_3231$$), $JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
      $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__isolateNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }
    $transX$$4_x1$$23$$ = D.$DvtAgent$$.$isRightToLeft$($container$$68$$.$_context$) ? $transX$$4_x1$$23$$ + 1 : $x2$$19$$ - 12 - 1;
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, $transX$$4_x1$$23$$, ($y2$$19$$ + $rect$$15_tooltip$$22_y1$$23$$ - 12) / 2);
    $container$$68$$.$addChild$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$);
    D.$DvtAgent$$.$isTouchDevice$() && ($rect$$15_tooltip$$22_y1$$23$$ = new D.$DvtRect$$($container$$68$$.$_context$, -2, -2, 16, 16), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$15_tooltip$$22_y1$$23$$), $JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$.$addChild$($rect$$15_tooltip$$22_y1$$23$$));
    "true" == $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.alta ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$) : ($rect$$15_tooltip$$22_y1$$23$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$ ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.restore : 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.isolate, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$, new D.$DvtBaseTreePeer$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.getId(), $rect$$15_tooltip$$22_y1$$23$$)))
  }
  return $JSCompiler_temp$$372_button$$24_button$$inline_3227_button$$inline_3235_context$$inline_3222_context$$inline_3230$$
};
D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__removeIsolateRestoreButton$$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$) {
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$), $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtTreemapNode$$.prototype.$_createTextNode$ = function $$DvtTreemapNode$$$$$_createTextNode$$($container$$69$$) {
  var $chromeAdjustment_isRTL$$11_peer$$3$$ = D.$DvtAgent$$.$isRightToLeft$($container$$69$$.$_context$);
  if(!this.$_textStr$ || !$container$$69$$ || !this.$_textStyle$ || "o" == this.$_textStyle$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $availHeight$$5$$ = this.$_height$;
  if((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) > $availHeight$$5$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $hAlign$$4$$ = "n" == this.$_textStyle$ ? this.$_labelHalign$ : this.$_headerHalign$;
  $chromeAdjustment_isRTL$$11_peer$$3$$ && ("s" == $hAlign$$4$$ ? $hAlign$$4$$ = "e" : "e" == $hAlign$$4$$ && ($hAlign$$4$$ = "s"));
  var $availWidth$$5$$ = this.$_width$ - 6, $isolateWidth$$ = 0;
  (0,D.$JSCompiler_StaticMethods_isIsolateEnabled$$)(this) && ($isolateWidth$$ = 13, $availWidth$$5$$ = "c" == $hAlign$$4$$ ? $availWidth$$5$$ - 2 * $isolateWidth$$ : $availWidth$$5$$ - $isolateWidth$$);
  if(0 >= $availWidth$$5$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $text$$58$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
  $text$$58$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
  "s" == $hAlign$$4$$ ? ($chromeAdjustment_isRTL$$11_peer$$3$$ ? $text$$58$$.$setX$(this.$_x$ + 4 + $isolateWidth$$) : $text$$58$$.$setX$(this.$_x$ + 4), $text$$58$$.$alignLeft$()) : "c" == $hAlign$$4$$ ? ($text$$58$$.$setX$(this.$_x$ + this.$_width$ / 2), $text$$58$$.$alignCenter$()) : "e" == $hAlign$$4$$ && ($chromeAdjustment_isRTL$$11_peer$$3$$ ? $text$$58$$.$setX$(this.$_x$ + this.$_width$ - 4) : $text$$58$$.$setX$(this.$_x$ + this.$_width$ - 4 - $isolateWidth$$), $text$$58$$.$alignRight$());
  "n" == this.$_textStyle$ ? ($availHeight$$5$$ = this.$_height$ - 4, "t" == this.$_labelValign$ ? ($text$$58$$.$setY$(this.$_y$ + 2), $text$$58$$.$alignTop$()) : "c" == this.$_labelValign$ ? ($text$$58$$.$setY$(this.$_y$ + this.$_height$ / 2), $text$$58$$.$alignMiddle$()) : "b" == this.$_labelValign$ && ($text$$58$$.$setY$(this.$_y$ + this.$_height$ - 2), $text$$58$$.$alignBottom$()), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $text$$58$$)) : "h" == this.$_textStyle$ && ($chromeAdjustment_isRTL$$11_peer$$3$$ = 
  D.$DvtAgent$$.$isPlatformWebkit$() ? 1 : 0, $text$$58$$.$setY$(this.$_y$ + 1 + this.$_titleBarHeight$ / 2 + $chromeAdjustment_isRTL$$11_peer$$3$$), $text$$58$$.$alignMiddle$(), (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$58$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B"));
  if($text$$58$$ != D.$JSCompiler_alias_NULL$$) {
    return"h" == this.$_textStyle$ && this.$isDrillReplaceEnabled$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$58$$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286"), $text$$58$$.setCursor("pointer"), $chromeAdjustment_isRTL$$11_peer$$3$$ = new D.$DvtBaseTreePeer$$(this, this.getId(), D.$JSCompiler_alias_NULL$$, this.$getDatatip$(), this.$getDatatipColor$()), $chromeAdjustment_isRTL$$11_peer$$3$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__getEventManager$().$associate$($text$$58$$, 
    $chromeAdjustment_isRTL$$11_peer$$3$$)) : $text$$58$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), D.$DvtTextUtils$$.$fitText$($text$$58$$, $availWidth$$5$$, $availHeight$$5$$, $container$$69$$) ? $text$$58$$ : D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderStyle$$$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$6$$, $shape$$69$$, $innerShape$$, $backgroundColor$$9_defaultStyle$$4$$, $styleDef$$) {
  var $borderColor$$24_style$$64$$ = new D.$DvtCSSStyle$$($backgroundColor$$9_defaultStyle$$4$$);
  $borderColor$$24_style$$64$$.$merge$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$6$$.$_view$.$_styles$[$styleDef$$]);
  $backgroundColor$$9_defaultStyle$$4$$ = $borderColor$$24_style$$64$$.$getStyle$("background-color");
  $borderColor$$24_style$$64$$ = $borderColor$$24_style$$64$$.$getStyle$("border-color");
  $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$6$$.$_headerUseNodeColor$ && "HEADER_BACKGROUND_STYLE" == $styleDef$$ ? ($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$6$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$6$$.$getColor$(), $innerShape$$.$setSolidFill$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$6$$), $borderColor$$24_style$$64$$ = D.$DvtColorUtils$$.$interpolateColor$($borderColor$$24_style$$64$$, $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$6$$, 
  0.5), $shape$$69$$.$setSolidFill$($borderColor$$24_style$$64$$)) : ($shape$$69$$.$setSolidFill$($borderColor$$24_style$$64$$), $innerShape$$.$setSolidFill$($backgroundColor$$9_defaultStyle$$4$$))
};
D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$, $text$$59$$, $styleDef$$1$$, $defaultFillColor_textStyle$$7$$) {
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerUseNodeColor$ && "HEADER_TEXT_DEFAULT_STYLE" == $styleDef$$1$$ ? $text$$59$$.$setSolidFill$((0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$)) : $text$$59$$.$setSolidFill$($defaultFillColor_textStyle$$7$$);
  $defaultFillColor_textStyle$$7$$ = [];
  1 >= (0,D.$JSCompiler_StaticMethods_GetDepth$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$) && $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$hasChildren$() && $defaultFillColor_textStyle$$7$$.push(new D.$DvtCSSStyle$$("font-weight:bold;"));
  $defaultFillColor_textStyle$$7$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_view$.$_styles$[$styleDef$$1$$]);
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$ && $defaultFillColor_textStyle$$7$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$);
  $text$$59$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($defaultFillColor_textStyle$$7$$))
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
  var $JSCompiler_StaticMethods___isolate$self$$inline_3237$$ = this.$_view$, $currentNavigable$$inline_3239_displayable$$inline_3240$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)($JSCompiler_StaticMethods___isolate$self$$inline_3237$$.$__getEventManager$());
  $currentNavigable$$inline_3239_displayable$$inline_3240$$ && $currentNavigable$$inline_3239_displayable$$inline_3240$$.$hideKeyboardFocusEffect$();
  $JSCompiler_StaticMethods___isolate$self$$inline_3237$$.$_isolatedNodes$.push(this);
  $JSCompiler_StaticMethods___isolate$self$$inline_3237$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$(this.getId()));
  $JSCompiler_StaticMethods___isolate$self$$inline_3237$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___isolate$self$$inline_3237$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___isolate$self$$inline_3237$$.$Width$, $JSCompiler_StaticMethods___isolate$self$$inline_3237$$.$Height$));
  $JSCompiler_StaticMethods___isolate$self$$inline_3237$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  $currentNavigable$$inline_3239_displayable$$inline_3240$$ = this.$getDisplayable$();
  $JSCompiler_StaticMethods___isolate$self$$inline_3237$$.$_isolatedLayer$.$addChild$($currentNavigable$$inline_3239_displayable$$inline_3240$$);
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___isolate$self$$inline_3237$$, this);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$__restoreNode$ = function $$JSCompiler_prototypeAlias$$$$__restoreNode$$() {
  this.$_isIsolated$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___restore$self$$inline_3242$$ = this.$_view$, $restoreNode$$inline_3243$$ = $JSCompiler_StaticMethods___restore$self$$inline_3242$$.$_isolatedNodes$.pop(), $currentNavigable$$inline_3244_id$$inline_8651$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)($JSCompiler_StaticMethods___restore$self$$inline_3242$$.$__getEventManager$());
  $currentNavigable$$inline_3244_id$$inline_8651$$ && $currentNavigable$$inline_3244_id$$inline_8651$$.$hideKeyboardFocusEffect$();
  $currentNavigable$$inline_3244_id$$inline_8651$$ = $restoreNode$$inline_3243$$.getId();
  $JSCompiler_StaticMethods___restore$self$$inline_3242$$.$_navigableIdToFocus$ = $currentNavigable$$inline_3244_id$$inline_8651$$;
  $JSCompiler_StaticMethods___restore$self$$inline_3242$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$);
  $JSCompiler_StaticMethods___restore$self$$inline_3242$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___restore$self$$inline_3242$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___restore$self$$inline_3242$$.$Width$, $JSCompiler_StaticMethods___restore$self$$inline_3242$$.$Height$));
  $JSCompiler_StaticMethods___restore$self$$inline_3242$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___restore$self$$inline_3242$$, $restoreNode$$inline_3243$$);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$87$$, $x$$195$$, $y$$165$$) {
  return $target$$87$$ && $target$$87$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $target$$87$$, $x$$195$$, $y$$165$$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$($target$$88$$) {
  return $target$$88$$ && $target$$88$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $target$$88$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($target$$89$$) {
  return $target$$89$$ && $target$$89$$ instanceof D.$DvtButton$$ ? this.$_isIsolated$ ? this.$_view$.$_resources$.restore : this.$_view$.$_resources$.isolate : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreemapLayout$$ = function $$DvtBaseTreemapLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemapLayout$$, D.$DvtObj$$, "DvtBaseTreemapLayout");
D.$DvtBaseTreemapLayout$$.prototype.Init = function $$DvtBaseTreemapLayout$$$$Init$() {
  this.$_zIndex$ = 0
};
D.$DvtBaseTreemapLayout$$.prototype.$layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_setNodeBounds$$ = function $$JSCompiler_StaticMethods_setNodeBounds$$$($JSCompiler_StaticMethods_setNodeBounds$self_gap$$6$$, $availBounds$$1_node$$47$$, $x$$189$$, $y$$159$$, $width$$71$$, $height$$65$$, $isRoot$$2_xx$$43$$) {
  $availBounds$$1_node$$47$$.$_zIndex$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$6$$.$_zIndex$;
  $JSCompiler_StaticMethods_setNodeBounds$self_gap$$6$$.$_zIndex$++;
  if(!$isRoot$$2_xx$$43$$ || !$availBounds$$1_node$$47$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_setNodeBounds$self_gap$$6$$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$6$$.$getGapSize$($availBounds$$1_node$$47$$.$_view$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)($availBounds$$1_node$$47$$));
    $isRoot$$2_xx$$43$$ = window.Math.round($x$$189$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$6$$);
    var $yy$$42$$ = window.Math.round($y$$159$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$6$$);
    if($availBounds$$1_node$$47$$ = $availBounds$$1_node$$47$$.$setLayoutParams$($isRoot$$2_xx$$43$$, $yy$$42$$, window.Math.round($x$$189$$ + $width$$71$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$6$$) - $isRoot$$2_xx$$43$$, window.Math.round($y$$159$$ + $height$$65$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$6$$) - $yy$$42$$)) {
      return $availBounds$$1_node$$47$$
    }
  }
  return new D.$DvtRectangle$$($x$$189$$, $y$$159$$, $width$$71$$, $height$$65$$)
};
D.$DvtBaseTreemapLayout$$.prototype.$getGapSize$ = function $$DvtBaseTreemapLayout$$$$$getGapSize$$($view$$14$$, $depth$$2$$) {
  var $groupGaps$$ = $view$$14$$.$_groupGaps$;
  return"o" == $groupGaps$$ ? 1 == $depth$$2$$ && 2 <= $view$$14$$.$_maxDepth$ ? 3 : 0 : "a" == $groupGaps$$ ? $depth$$2$$ < $view$$14$$.$_maxDepth$ ? 3 : 0 : 0
};
D.$DvtSquarifyingLayout$$ = function $$DvtSquarifyingLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtSquarifyingLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSquarifyingLayout");
D.$DvtSquarifyingLayout$$.prototype.$layout$ = function $$DvtSquarifyingLayout$$$$$layout$$($view$$15$$, $root$$11$$, $x$$196$$, $y$$166$$, $width$$73$$, $height$$67$$, $bShowRoot$$2$$) {
  this.$_layout$($root$$11$$, $x$$196$$, $y$$166$$, $width$$73$$, $height$$67$$, $bShowRoot$$2$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSquarifyingLayout$$.prototype.$_layout$ = function $$DvtSquarifyingLayout$$$$$_layout$$($children$$14_node$$48$$, $availBounds$$2_x$$197$$, $children$$inline_3246_w$$59_y$$167$$, $i$$inline_3249_width$$74$$, $area$$inline_3247_factor$$inline_3250_height$$68$$, $child$$inline_3251_isRoot$$4_total$$inline_3248$$) {
  $availBounds$$2_x$$197$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$14_node$$48$$, $availBounds$$2_x$$197$$, $children$$inline_3246_w$$59_y$$167$$, $i$$inline_3249_width$$74$$, $area$$inline_3247_factor$$inline_3250_height$$68$$, $child$$inline_3251_isRoot$$4_total$$inline_3248$$);
  $children$$14_node$$48$$ = $children$$14_node$$48$$.$getChildNodes$();
  if($children$$14_node$$48$$ != D.$JSCompiler_alias_NULL$$ && 0 < $children$$14_node$$48$$.length) {
    $children$$inline_3246_w$$59_y$$167$$ = $children$$14_node$$48$$;
    $area$$inline_3247_factor$$inline_3250_height$$68$$ = $availBounds$$2_x$$197$$.$w$ * $availBounds$$2_x$$197$$.$h$;
    for($i$$inline_3249_width$$74$$ = $i$$inline_3249_width$$74$$ = $child$$inline_3251_isRoot$$4_total$$inline_3248$$ = 0;$i$$inline_3249_width$$74$$ < $children$$inline_3246_w$$59_y$$167$$.length;$i$$inline_3249_width$$74$$++) {
      $child$$inline_3251_isRoot$$4_total$$inline_3248$$ += 0 < $children$$inline_3246_w$$59_y$$167$$[$i$$inline_3249_width$$74$$].$getSize$() ? $children$$inline_3246_w$$59_y$$167$$[$i$$inline_3249_width$$74$$].$getSize$() : 0
    }
    $area$$inline_3247_factor$$inline_3250_height$$68$$ = 0 == $area$$inline_3247_factor$$inline_3250_height$$68$$ ? 0 : $area$$inline_3247_factor$$inline_3250_height$$68$$ / $child$$inline_3251_isRoot$$4_total$$inline_3248$$;
    for($i$$inline_3249_width$$74$$ = 0;$i$$inline_3249_width$$74$$ < $children$$inline_3246_w$$59_y$$167$$.length;$i$$inline_3249_width$$74$$++) {
      $child$$inline_3251_isRoot$$4_total$$inline_3248$$ = $children$$inline_3246_w$$59_y$$167$$[$i$$inline_3249_width$$74$$], $child$$inline_3251_isRoot$$4_total$$inline_3248$$.$__pxSize$ = $child$$inline_3251_isRoot$$4_total$$inline_3248$$.$getSize$() * $area$$inline_3247_factor$$inline_3250_height$$68$$
    }
    $children$$14_node$$48$$ = $children$$14_node$$48$$.slice(0).sort(function($children$$14_node$$48$$, $availBounds$$2_x$$197$$) {
      return $children$$14_node$$48$$.$getSize$() - $availBounds$$2_x$$197$$.$getSize$()
    });
    $children$$inline_3246_w$$59_y$$167$$ = window.Math.min($availBounds$$2_x$$197$$.$w$, $availBounds$$2_x$$197$$.$h$);
    (0,D.$JSCompiler_StaticMethods__squarify$$)(this, $children$$14_node$$48$$, $children$$inline_3246_w$$59_y$$167$$, new D.$DvtRectangle$$($availBounds$$2_x$$197$$.x, $availBounds$$2_x$$197$$.y, $availBounds$$2_x$$197$$.$w$, $availBounds$$2_x$$197$$.$h$))
  }
};
D.$JSCompiler_StaticMethods__squarify$$ = function $$JSCompiler_StaticMethods__squarify$$$($JSCompiler_StaticMethods__squarify$self$$, $children$$16$$, $w$$60$$, $r$$56$$) {
  var $row$$ = [], $worst$$ = window.Infinity;
  if($children$$16$$ == D.$JSCompiler_alias_NULL$$ || 0 == $children$$16$$.length) {
    (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$60$$, $r$$56$$)
  }else {
    for(;0 < $children$$16$$.length;) {
      var $c$$15$$ = $children$$16$$.pop();
      if(0 > $c$$15$$.$__pxSize$) {
        (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$60$$, $r$$56$$);
        break
      }
      $row$$.push($c$$15$$);
      var $min$$inline_3256_newWorst$$, $areas$$inline_3253_s2$$inline_3259$$ = $row$$, $w$$inline_3254_w2$$inline_3260$$ = $w$$60$$, $total$$inline_3255$$ = 0;
      $min$$inline_3256_newWorst$$ = window.Infinity;
      for(var $max$$inline_3257$$ = -window.Infinity, $i$$inline_3258$$ = 0;$i$$inline_3258$$ < $areas$$inline_3253_s2$$inline_3259$$.length;$i$$inline_3258$$++) {
        $total$$inline_3255$$ += $areas$$inline_3253_s2$$inline_3259$$[$i$$inline_3258$$].$__pxSize$, $min$$inline_3256_newWorst$$ = window.Math.min($min$$inline_3256_newWorst$$, $areas$$inline_3253_s2$$inline_3259$$[$i$$inline_3258$$].$__pxSize$), $max$$inline_3257$$ = window.Math.max($max$$inline_3257$$, $areas$$inline_3253_s2$$inline_3259$$[$i$$inline_3258$$].$__pxSize$)
      }
      $areas$$inline_3253_s2$$inline_3259$$ = $total$$inline_3255$$ * $total$$inline_3255$$;
      $w$$inline_3254_w2$$inline_3260$$ *= $w$$inline_3254_w2$$inline_3260$$;
      $min$$inline_3256_newWorst$$ = window.Math.max($w$$inline_3254_w2$$inline_3260$$ * $max$$inline_3257$$ / $areas$$inline_3253_s2$$inline_3259$$, $areas$$inline_3253_s2$$inline_3259$$ / ($w$$inline_3254_w2$$inline_3260$$ * $min$$inline_3256_newWorst$$));
      if($min$$inline_3256_newWorst$$ > $worst$$) {
        $children$$16$$.push($c$$15$$);
        $row$$.pop();
        $r$$56$$ = (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$60$$, $r$$56$$);
        (0,D.$JSCompiler_StaticMethods__squarify$$)($JSCompiler_StaticMethods__squarify$self$$, $children$$16$$, window.Math.min($r$$56$$.$w$, $r$$56$$.$h$), $r$$56$$);
        break
      }else {
        if(0 == $children$$16$$.length) {
          (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$60$$, $r$$56$$);
          break
        }else {
          $worst$$ = $min$$inline_3256_newWorst$$
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods__layoutRow$$ = function $$JSCompiler_StaticMethods__layoutRow$$$($JSCompiler_StaticMethods__layoutRow$self$$, $row$$1$$, $w$$62_width$$75$$, $r$$57$$) {
  var $height$$69_total$$3$$ = 0, $i$$302$$;
  for($i$$302$$ = 0;$i$$302$$ < $row$$1$$.length;$i$$302$$++) {
    $height$$69_total$$3$$ += $row$$1$$[$i$$302$$].$__pxSize$
  }
  var $x$$198$$ = $r$$57$$.x, $y$$168$$ = $r$$57$$.y;
  if($w$$62_width$$75$$ == $r$$57$$.$w$) {
    $height$$69_total$$3$$ = 0 == $w$$62_width$$75$$ ? 0 : $height$$69_total$$3$$ / $w$$62_width$$75$$;
    for($i$$302$$ = 0;$i$$302$$ < $row$$1$$.length;$i$$302$$++) {
      $w$$62_width$$75$$ = $row$$1$$[$i$$302$$].$__pxSize$ / $height$$69_total$$3$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$1$$[$i$$302$$], $x$$198$$, $y$$168$$, $w$$62_width$$75$$, $height$$69_total$$3$$, D.$JSCompiler_alias_FALSE$$), $x$$198$$ += $w$$62_width$$75$$
    }
    return new D.$DvtRectangle$$($r$$57$$.x, $r$$57$$.y + $height$$69_total$$3$$, $r$$57$$.$w$, $r$$57$$.$h$ - $height$$69_total$$3$$)
  }
  $w$$62_width$$75$$ = 0 == $w$$62_width$$75$$ ? 0 : $height$$69_total$$3$$ / $w$$62_width$$75$$;
  for($i$$302$$ = 0;$i$$302$$ < $row$$1$$.length;$i$$302$$++) {
    $height$$69_total$$3$$ = $row$$1$$[$i$$302$$].$__pxSize$ / $w$$62_width$$75$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$1$$[$i$$302$$], $x$$198$$, $y$$168$$, $w$$62_width$$75$$, $height$$69_total$$3$$, D.$JSCompiler_alias_FALSE$$), $y$$168$$ += $height$$69_total$$3$$
  }
  return new D.$DvtRectangle$$($r$$57$$.x + $w$$62_width$$75$$, $r$$57$$.y, $r$$57$$.$w$ - $w$$62_width$$75$$, $r$$57$$.$h$)
};
D.$DvtSliceAndDiceLayout$$ = function $$DvtSliceAndDiceLayout$$$($isHoriz$$3$$) {
  this.Init();
  this.$_isHoriz$ = $isHoriz$$3$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSliceAndDiceLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSliceAndDiceLayout");
D.$DvtSliceAndDiceLayout$$.prototype.$layout$ = function $$DvtSliceAndDiceLayout$$$$$layout$$($view$$11$$, $root$$8$$, $x$$186$$, $y$$156$$, $width$$68$$, $height$$62$$, $bShowRoot$$) {
  this.$_layout$(this.$_isHoriz$, $view$$11$$, $root$$8$$, $x$$186$$, $y$$156$$, $width$$68$$, $height$$62$$, $bShowRoot$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSliceAndDiceLayout$$.prototype.$_layout$ = function $$DvtSliceAndDiceLayout$$$$$_layout$$($isHoriz$$4$$, $view$$12$$, $children$$13_node$$46$$, $availBounds_x$$187$$, $childX_y$$157$$, $childY_width$$69$$, $childWidth_height$$63$$, $childHeight_isRoot$$1$$) {
  $availBounds_x$$187$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$13_node$$46$$, $availBounds_x$$187$$, $childX_y$$157$$, $childY_width$$69$$, $childWidth_height$$63$$, $childHeight_isRoot$$1$$);
  $children$$13_node$$46$$ = $children$$13_node$$46$$.$getChildNodes$();
  if($children$$13_node$$46$$ != D.$JSCompiler_alias_NULL$$) {
    $childX_y$$157$$ = $availBounds_x$$187$$.x;
    $childY_width$$69$$ = $availBounds_x$$187$$.y;
    $childWidth_height$$63$$ = $availBounds_x$$187$$.$w$;
    $childHeight_isRoot$$1$$ = $availBounds_x$$187$$.$h$;
    var $total$$ = 0, $i$$297$$;
    for($i$$297$$ = 0;$i$$297$$ < $children$$13_node$$46$$.length;$i$$297$$++) {
      $total$$ += 0 < $children$$13_node$$46$$[$i$$297$$].$getSize$() ? $children$$13_node$$46$$[$i$$297$$].$getSize$() : 0
    }
    "on" == this.$Sorting$ && ($children$$13_node$$46$$ = $children$$13_node$$46$$.slice(0), $children$$13_node$$46$$.sort(function($isHoriz$$4$$, $view$$12$$) {
      return $view$$12$$.$getSize$() - $isHoriz$$4$$.$getSize$()
    }));
    $isHoriz$$4$$ && D.$DvtAgent$$.$isRightToLeft$($view$$12$$.$_context$) && ($children$$13_node$$46$$ = $children$$13_node$$46$$.slice(0).reverse());
    for($i$$297$$ = 0;$i$$297$$ < $children$$13_node$$46$$.length;$i$$297$$++) {
      var $child$$56$$ = $children$$13_node$$46$$[$i$$297$$];
      if(!(0 >= $child$$56$$.$getSize$())) {
        var $sizeRatio$$ = $child$$56$$.$getSize$() / $total$$;
        $isHoriz$$4$$ ? $childWidth_height$$63$$ = $availBounds_x$$187$$.$w$ * $sizeRatio$$ : $childHeight_isRoot$$1$$ = $availBounds_x$$187$$.$h$ * $sizeRatio$$;
        this.$_layout$(!$isHoriz$$4$$, $view$$12$$, $child$$56$$, $childX_y$$157$$, $childY_width$$69$$, $childWidth_height$$63$$, $childHeight_isRoot$$1$$, D.$JSCompiler_alias_FALSE$$);
        $isHoriz$$4$$ ? $childX_y$$157$$ += $childWidth_height$$63$$ : $childY_width$$69$$ += $childHeight_isRoot$$1$$
      }
    }
  }
};
D.$DvtTreemapIsolateEvent$$ = function $$DvtTreemapIsolateEvent$$$($id$$151$$) {
  this.Init("treemapIsolate");
  this.$_id$ = $id$$151$$ ? $id$$151$$ : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtTreemapIsolateEvent", D.$DvtTreemapIsolateEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapIsolateEvent$$, D.$DvtBaseComponentEvent$$, "DvtTreemapIsolateEvent");
D.$DvtTreemapIsolateEvent$$.TYPE = "treemapIsolate";
D.$DvtTreemapIsolateEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtTreemapIsolateEvent$$.prototype.getId = D.$DvtTreemapIsolateEvent$$.prototype.getId;
D.$DvtTreemapKeyboardHandler$$ = function $$DvtTreemapKeyboardHandler$$$($manager$$8$$) {
  this.Init($manager$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapKeyboardHandler$$, D.$DvtBaseTreeKeyboardHandler$$, "DvtTreemapKeyboardHandler");
D.$DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($event$$295_keyCode$$14$$) {
  var $isNavigable$$ = D.$DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$295_keyCode$$14$$);
  if(!$isNavigable$$ && ($event$$295_keyCode$$14$$ = $event$$295_keyCode$$14$$.keyCode, 219 == $event$$295_keyCode$$14$$ || 221 == $event$$295_keyCode$$14$$)) {
    $isNavigable$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$
};
D.$DvtTreemapEventManager$$ = function $$DvtTreemapEventManager$$$($view$$16$$, $context$$414$$, $callback$$88$$, $callbackObj$$61$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$16$$, $context$$414$$, $callback$$88$$, $callbackObj$$61$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtTreemapEventManager");
D.$DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($event$$294$$) {
  var $eventConsumed$$2$$ = D.$JSCompiler_alias_TRUE$$;
  if(13 == $event$$294$$.keyCode && $event$$294$$.ctrlKey) {
    var $node$$49$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this);
    (0,D.$JSCompiler_StaticMethods_isIsolateEnabled$$)($node$$49$$) && ($node$$49$$.$_isIsolated$ ? $node$$49$$.$__restoreNode$() : $node$$49$$.$__isolateNode$());
    $event$$294$$.preventDefault()
  }else {
    $eventConsumed$$2$$ = D.$DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$294$$)
  }
  return $eventConsumed$$2$$
};
D.$DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtTreemapBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapBundle$$, D.$DvtBundle$$, "DvtTreemapBundle");
D.$DvtTreemapBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtTreemapBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtTreemapBundle$$$$$GetDefaultStringForKey$$($key$$70$$) {
  return D.$DvtTreemapBundle$$._defaults[$key$$70$$]
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
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay$$3_options$$68$$) {
  var $ret$$36$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay$$3_options$$68$$), $ret$$36$$ = $ret$$36$$ + this.$WriteAttr$("irk", $animationOnDisplay$$3_options$$68$$.isolatedNode), $groupGaps$$1_layout$$2$$ = $animationOnDisplay$$3_options$$68$$.groupGaps;
  "all" == $groupGaps$$1_layout$$2$$ ? $ret$$36$$ += this.$WriteAttr$("gg", "a") : "none" == $groupGaps$$1_layout$$2$$ && ($ret$$36$$ += this.$WriteAttr$("gg", "n"));
  $groupGaps$$1_layout$$2$$ = $animationOnDisplay$$3_options$$68$$.layout;
  "sliceAndDiceHorizontal" == $groupGaps$$1_layout$$2$$ ? $ret$$36$$ += this.$WriteAttr$("layout", "h") : "sliceAndDiceVertical" == $groupGaps$$1_layout$$2$$ && ($ret$$36$$ += this.$WriteAttr$("layout", "v"));
  $animationOnDisplay$$3_options$$68$$ = $animationOnDisplay$$3_options$$68$$.animationOnDisplay;
  return $ret$$36$$ = "auto" == $animationOnDisplay$$3_options$$68$$ ? $ret$$36$$ + this.$WriteAttr$("adi", "alphaFade") : $ret$$36$$ + this.$WriteAttr$("adi", $animationOnDisplay$$3_options$$68$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$69$$, $nodeData$$) {
  var $ret$$37$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$69$$, $nodeData$$);
  if("off" == ($nodeData$$.labelDisplay ? $nodeData$$.labelDisplay : $options$$69$$.nodeDefaults.labelDisplay)) {
    $ret$$37$$ += this.$WriteAttr$("ld", "o")
  }
  var $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$.groupLabelDisplay ? $nodeData$$.groupLabelDisplay : $options$$69$$.nodeDefaults.groupLabelDisplay;
  "node" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ ? $ret$$37$$ += this.$WriteAttr$("gld", "n") : "off" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && ($ret$$37$$ += this.$WriteAttr$("gld", "o"));
  $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$.labelHalign ? $nodeData$$.labelHalign : $options$$69$$.nodeDefaults.labelHalign;
  "start" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ ? $ret$$37$$ += this.$WriteAttr$("ha", "s") : "end" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && ($ret$$37$$ += this.$WriteAttr$("ha", "e"));
  $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$.labelValign ? $nodeData$$.labelValign : $options$$69$$.nodeDefaults.labelValign;
  "top" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ ? $ret$$37$$ += this.$WriteAttr$("va", "t") : "bottom" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && ($ret$$37$$ += this.$WriteAttr$("va", "b"));
  var $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$.header, $ret$$37$$ = $ret$$37$$ + this.$WriteAttr$("hls", $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelStyle ? $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelStyle : $options$$69$$.nodeDefaults.header.labelStyle), $headerHalign$$ = $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelHalign ? 
  $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelHalign : $options$$69$$.nodeDefaults.header.labelHalign;
  "center" == $headerHalign$$ ? $ret$$37$$ += this.$WriteAttr$("hha", "c") : "end" == $headerHalign$$ && ($ret$$37$$ += this.$WriteAttr$("hha", "e"));
  if("off" == ($groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.isolate ? $groupLabelDisplay_header$$2_labelHalign_labelValign$$.isolate : $options$$69$$.nodeDefaults.header.isolate)) {
    $ret$$37$$ += this.$WriteAttr$("hi", "off")
  }
  if("on" == ($groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.useNodeColor ? $groupLabelDisplay_header$$2_labelHalign_labelValign$$.useNodeColor : $options$$69$$.nodeDefaults.header.useNodeColor)) {
    $ret$$37$$ += this.$WriteAttr$("unc", "on")
  }
  return $ret$$37$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$70_resources$$26$$) {
  var $ret$$38$$, $bRtl_bundle$$ = new D.$DvtTreemapBundle$$;
  $ret$$38$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl_bundle$$, "SIZE"));
  $ret$$38$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl_bundle$$, "COLOR"));
  $options$$70_resources$$26$$ = $options$$70_resources$$26$$._resources;
  $bRtl_bundle$$ = D.$DvtAgent$$.$isRightToLeft$(this.$_context$);
  $ret$$38$$ += this.$WriteAttr$("maximizeUp", $bRtl_bundle$$ && $options$$70_resources$$26$$.isolateRtl ? $options$$70_resources$$26$$.isolateRtl : $options$$70_resources$$26$$.isolate);
  $ret$$38$$ += this.$WriteAttr$("maximizeDown", $bRtl_bundle$$ && $options$$70_resources$$26$$.isolateDownRtl ? $options$$70_resources$$26$$.isolateDownRtl : $options$$70_resources$$26$$.isolateDown);
  $ret$$38$$ += this.$WriteAttr$("maximizeOver", $bRtl_bundle$$ && $options$$70_resources$$26$$.isolateOverRtl ? $options$$70_resources$$26$$.isolateOverRtl : $options$$70_resources$$26$$.isolateOver);
  $ret$$38$$ += this.$WriteAttr$("restoreUp", $bRtl_bundle$$ && $options$$70_resources$$26$$.restoreRtl ? $options$$70_resources$$26$$.restoreRtl : $options$$70_resources$$26$$.restore);
  $ret$$38$$ += this.$WriteAttr$("restoreDown", $bRtl_bundle$$ && $options$$70_resources$$26$$.restoreDownRtl ? $options$$70_resources$$26$$.restoreDownRtl : $options$$70_resources$$26$$.restoreDown);
  $ret$$38$$ += this.$WriteAttr$("restoreOver", $bRtl_bundle$$ && $options$$70_resources$$26$$.restoreOverRtl ? $options$$70_resources$$26$$.restoreOverRtl : $options$$70_resources$$26$$.restoreOver);
  $ret$$38$$ += this.$WriteAttr$("alta", "true");
  return $ret$$38$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($nodeHeaderSelectedOuterColor_options$$71$$) {
  var $ret$$39$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $nodeHeaderSelectedOuterColor_options$$71$$), $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$71$$.animationUpdateColor;
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ && ($ret$$39$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.hoverColor) && ($ret$$39$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.selectedInnerColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.selectedOuterColor;
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-inner-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-outer-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$39$$ += this.$WriteAttr$("node-selected", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.header.backgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.header.borderColor;
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "border-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$39$$ += this.$WriteAttr$("nodeHeader", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.header.hoverBackgroundColor, $nodeHeaderHoverInnerColor$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.header.hoverInnerColor, $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = 
  $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.header.hoverOuterColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "background-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "") + 
  ($nodeHeaderHoverInnerColor$$ ? "-tr-inner-color:" + $nodeHeaderHoverInnerColor$$ + ";" : "");
  ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ += $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-outer-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ : 
  "") && ($ret$$39$$ += this.$WriteAttr$("nodeHeader-hover", $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$));
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.header.selectedBackgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.header.selectedInnerColor;
  $nodeHeaderSelectedOuterColor_options$$71$$ = $nodeHeaderSelectedOuterColor_options$$71$$.nodeDefaults.header.selectedOuterColor;
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-inner-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "");
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ += $nodeHeaderSelectedOuterColor_options$$71$$ ? "-tr-outer-color:" + $nodeHeaderSelectedOuterColor_options$$71$$ : "") && ($ret$$39$$ += this.$WriteAttr$("nodeHeader-selected", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  return $ret$$39$$ + "/\x3e\n"
};
});