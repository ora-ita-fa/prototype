define(['./DvtToolkit', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreeView$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeView$$, D.$DvtBaseComponent$$, "DvtBaseTreeView");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$309$$, $callback$$68$$, $callbackObj$$44$$) {
  D.$DvtBaseTreeView$$.$superclass$.Init.call(this, $context$$309$$, $callback$$68$$, $callbackObj$$44$$);
  this.$_eventHandler$ = this.$CreateEventManager$(this, $context$$309$$, this.$__dispatchEvent$, this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$309$$);
  this.$_dropTarget$ = new D.$DvtBaseTreeDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_Automation$ = new D.$DvtTreeAutomation$$(this);
  this.$LastXml$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFocus$ = D.$JSCompiler_alias_FALSE$$;
  this.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($xmlString$$9$$, $container$$24_props$$3_width$$48$$, $availSpace$$19_bBlackBoxUpdate$$3_height$$41$$) {
  this.$Width$ = $container$$24_props$$3_width$$48$$;
  this.$Height$ = $availSpace$$19_bBlackBoxUpdate$$3_height$$41$$;
  this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
  this.$Animation$ && !$xmlString$$9$$ && ($xmlString$$9$$ = this.$LastXml$);
  $xmlString$$9$$ && (this.$LastXml$ = $xmlString$$9$$);
  $xmlString$$9$$ && ($container$$24_props$$3_width$$48$$ = this.$Parse$($xmlString$$9$$), this.$ApplyParsedProperties$($container$$24_props$$3_width$$48$$));
  $availSpace$$19_bBlackBoxUpdate$$3_height$$41$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$Layout$($availSpace$$19_bBlackBoxUpdate$$3_height$$41$$);
  $container$$24_props$$3_width$$48$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($container$$24_props$$3_width$$48$$);
  this.$_templates$ && (this.$_afContext$ = new D.$DvtAfContext$$(this.$_context$, this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = D.$JSCompiler_alias_TRUE$$);
  this.$Render$($container$$24_props$$3_width$$48$$, $availSpace$$19_bBlackBoxUpdate$$3_height$$41$$);
  this.$Animation$ && (this.$AnimationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$Animation$.stop());
  var $ah_bounds$$37$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $availSpace$$19_bBlackBoxUpdate$$3_height$$41$$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_container$) {
    if(this.$AnimationOnDataChange$ && $xmlString$$9$$) {
      if(D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDataChange$)) {
        this.$Animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, this.$AnimationOnDataChange$, this.$_container$, $container$$24_props$$3_width$$48$$, $ah_bounds$$37$$, this.$AnimationDuration$), $availSpace$$19_bBlackBoxUpdate$$3_height$$41$$ = D.$JSCompiler_alias_TRUE$$
      }else {
        if(this.$_oldRoot$ && "auto" == this.$AnimationOnDataChange$) {
          this.$_deleteContainer$ = this.$GetDeleteContainer$();
          this.$addChild$(this.$_deleteContainer$);
          var $ah_bounds$$37$$ = new D.$DvtBaseTreeAnimationHandler$$(this.$_context$, this.$_deleteContainer$), $oldRoot$$inline_2259$$ = this.$_oldRoot$, $newRoot$$inline_2260$$ = this.$_root$, $oldAncestors$$inline_2261_oldList$$inline_2263$$ = this.$_oldAncestors$, $newAncestors$$inline_2262_newList$$inline_2264$$ = this.$_ancestors$;
          $ah_bounds$$37$$.$_bDrill$ = D.$JSCompiler_alias_FALSE$$;
          $ah_bounds$$37$$.$_oldRoot$ = $oldRoot$$inline_2259$$;
          $ah_bounds$$37$$.$_oldAncestors$ = $oldAncestors$$inline_2261_oldList$$inline_2263$$;
          (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($newAncestors$$inline_2262_newList$$inline_2264$$, $oldRoot$$inline_2259$$) || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($oldAncestors$$inline_2261_oldList$$inline_2263$$, $newRoot$$inline_2260$$) ? ($ah_bounds$$37$$.$_bDrill$ = D.$JSCompiler_alias_TRUE$$, $oldAncestors$$inline_2261_oldList$$inline_2263$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($oldRoot$$inline_2259$$), $newAncestors$$inline_2262_newList$$inline_2264$$ = 
          (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($newRoot$$inline_2260$$), $oldAncestors$$inline_2261_oldList$$inline_2263$$.push($oldRoot$$inline_2259$$), $newAncestors$$inline_2262_newList$$inline_2264$$.push($newRoot$$inline_2260$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah_bounds$$37$$, $oldAncestors$$inline_2261_oldList$$inline_2263$$, $newAncestors$$inline_2262_newList$$inline_2264$$)) : (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah_bounds$$37$$, [$oldRoot$$inline_2259$$], 
          [$newRoot$$inline_2260$$]);
          this.$Animation$ = $ah_bounds$$37$$.$getAnimation$()
        }
      }
    }
  }else {
    this.$Animation$ = this.$GetDisplayAnimation$($container$$24_props$$3_width$$48$$, $ah_bounds$$37$$)
  }
  this.$_oldAncestors$ = this.$_oldRoot$ = D.$JSCompiler_alias_NULL$$;
  this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
  $availSpace$$19_bBlackBoxUpdate$$3_height$$41$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$24_props$$3_width$$48$$;
  $xmlString$$9$$ ? (this.$_processInitialSelections$(), (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, !this.$Animation$)) : this.$ReselectNodes$()
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$Layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$RenderBackground$ = function $$JSCompiler_prototypeAlias$$$$RenderBackground$$($container$$26$$) {
  var $background$$3$$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$Width$, this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$3$$);
  $container$$26$$.$addChild$($background$$3$$)
};
D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$ = function $$JSCompiler_StaticMethods_LayoutBreadcrumbs$$$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$21$$) {
  if($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$.length) {
    var $rootLabel$$ = $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$ ? $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$.$getLabel$() : D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$());
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$DvtTreeBreadcrumbsRenderer$$.$render$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$21$$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$, $rootLabel$$);
    (0,D.$JSCompiler_StaticMethods_addComponentKeyboardHandlerAt$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$())
  }else {
    (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$), $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_LayoutLegend$$ = function $$JSCompiler_StaticMethods_LayoutLegend$$$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$22$$) {
  var $attrGroups$$ = D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$ && $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$) {
    for(var $i$$223$$ = 0;$i$$223$$ < $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$.length;$i$$223$$++) {
      var $agDef$$ = $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$[$i$$223$$];
      if($agDef$$.id == $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$) {
        $attrGroups$$ = $agDef$$.$attrGroups$;
        break
      }
    }
  }
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$ || $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$ || $attrGroups$$) {
    $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$22$$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendSize, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendColor, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$, $attrGroups$$)
  }
};
D.$JSCompiler_StaticMethods_RenderEmptyText$$ = function $$JSCompiler_StaticMethods_RenderEmptyText$$$($JSCompiler_StaticMethods_RenderEmptyText$self$$, $container$$29$$) {
  if($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$) {
    var $text$$32$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_context$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ / 2, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ / 2);
    $text$$32$$.$alignCenter$();
    $text$$32$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($text$$32$$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$);
    $container$$29$$.$addChild$($text$$32$$)
  }
};
D.$JSCompiler_StaticMethods_HasValidData$$ = function $$JSCompiler_StaticMethods_HasValidData$$$($JSCompiler_StaticMethods_HasValidData$self$$) {
  return $JSCompiler_StaticMethods_HasValidData$self$$.$_root$ && 0 < $JSCompiler_StaticMethods_HasValidData$self$$.$_root$.$getSize$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$30$$, $bounds$$39$$) {
  return D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDisplay$) ? D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$AnimationOnDisplay$, $container$$30$$, $bounds$$39$$, this.$AnimationDuration$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$AnimationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$Animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this);
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  return new D.$DvtContainer$$(this.$_context$)
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$6$$) {
  return new D.$DvtBaseTreeKeyboardHandler$$($manager$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$9$$, $context$$310$$, $callback$$69$$, $callbackObj$$45$$) {
  return new D.$DvtBaseTreeEventManager$$($view$$9$$, $context$$310$$, $callback$$69$$, $callbackObj$$45$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = (0,D.$JSCompiler_identityFn$$)();
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$DvtBaseTreeView$_calcMaxDepth$$ = function $$DvtBaseTreeView$_calcMaxDepth$$$($node$$14$$, $depth$$1$$) {
  var $maxDepth$$ = $depth$$1$$, $children$$4$$ = $node$$14$$.$getChildNodes$();
  if($children$$4$$) {
    for(var $i$$224$$ = 0;$i$$224$$ < $children$$4$$.length;$i$$224$$++) {
      var $childDepth$$ = (0,D.$DvtBaseTreeView$_calcMaxDepth$$)($children$$4$$[$i$$224$$], $depth$$1$$ + 1), $maxDepth$$ = window.Math.max($maxDepth$$, $childDepth$$)
    }
  }
  return $maxDepth$$
};
D.$DvtBaseTreeView$$.prototype.$ApplyParsedProperties$ = function $$DvtBaseTreeView$$$$$ApplyParsedProperties$$($props$$4$$) {
  this.$_oldRoot$ = this.$_root$;
  this.$_oldAncestors$ = this.$_ancestors$;
  this.$_nodeCount$ = $props$$4$$.$nodeCount$;
  this.$_resources$ = $props$$4$$.$resources$ ? $props$$4$$.$resources$ : {};
  this.$_root$ = $props$$4$$.root;
  this.$_emptyText$ = $props$$4$$.$emptyText$;
  this.$_ancestors$ = $props$$4$$.$ancestors$;
  this.$_dropSiteFill$ = new D.$DvtSolidFill$$($props$$4$$.$dropSiteFillColor$, $props$$4$$.$dropSiteOpacity$);
  this.$_dropSiteStroke$ = new D.$DvtSolidStroke$$($props$$4$$.$dropSiteBorderColor$);
  this.$AnimationOnDisplay$ = $props$$4$$.$animationOnDisplay$;
  this.$AnimationOnDataChange$ = $props$$4$$.$animationOnDataChange$;
  this.$AnimationDuration$ = $props$$4$$.$animationDuration$;
  this.$Sorting$ = $props$$4$$.$sorting$;
  this.$_styles$ = $props$$4$$.$styles$;
  this.$_nodeSelection$ = $props$$4$$.$nodeSelection$;
  $props$$4$$.$templates$ && (this.$_templates$ = $props$$4$$.$templates$);
  this.$_nodeSelection$ ? (this.$_selectionHandler$ = new D.$DvtSelectionHandler$$($props$$4$$.$nodeSelection$), this.$_initialSelection$ = $props$$4$$.$selectedIds$) : this.$_selectionHandler$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$setSelectionHandler$(this.$_selectionHandler$);
  this.$_eventHandler$.$ContextMenuHandler$ = $props$$4$$.$contextMenuHandler$;
  this.$_selectionHandler$ ? (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, this.$CreateKeyboardHandler$(this.$_eventHandler$)) : (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, D.$JSCompiler_alias_NULL$$);
  this.$_root$ && (this.$_maxDepth$ = (0,D.$DvtBaseTreeView$_calcMaxDepth$$)(this.$_root$, 0));
  this.$_attrGroups$ = $props$$4$$.$attrGroups$;
  this.$_legendSource$ = $props$$4$$.$legendSource$;
  this.$_sizeValueStr$ = $props$$4$$.$sizeValueStr$;
  this.$_colorValueStr$ = $props$$4$$.$colorValueStr$
};
D.$DvtBaseTreeView$$.prototype.$ReselectNodes$ = function $$DvtBaseTreeView$$$$$ReselectNodes$$() {
  for(var $selectedNodes$$2$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$225$$ = 0;$i$$225$$ < $selectedNodes$$2$$.length;$i$$225$$++) {
    $selectedNodes$$2$$[$i$$225$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtBaseTreeView$$.prototype.$_processInitialSelections$ = function $$DvtBaseTreeView$$$$$_processInitialSelections$$() {
  if(this.$_selectionHandler$ && this.$_initialSelection$) {
    var $targets$$3$$ = [];
    (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)(this, this.$_root$, $targets$$3$$);
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initialSelection$, $targets$$3$$);
    this.$_initialSelection$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods__processInitialFocus$$ = function $$JSCompiler_StaticMethods__processInitialFocus$$$($JSCompiler_StaticMethods__processInitialFocus$self$$, $applyVisualEffects$$) {
  var $initialFocus$$ = D.$JSCompiler_alias_NULL$$, $id$$102$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$;
  $id$$102$$ && ($initialFocus$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$, $id$$102$$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && ($JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$);
  $initialFocus$$ || ($initialFocus$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$GetInitialFocusedItem$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && $JSCompiler_StaticMethods__processInitialFocus$self$$.$setFocused$($JSCompiler_StaticMethods__processInitialFocus$self$$.$isFocused$())
};
D.$DvtBaseTreeView$$.prototype.$setFocused$ = function $$DvtBaseTreeView$$$$$setFocused$$($isFocused$$1$$) {
  this.$_hasFocus$ = $isFocused$$1$$;
  this.$_eventHandler$.$setFocused$($isFocused$$1$$)
};
D.$DvtBaseTreeView$$.prototype.$isFocused$ = (0,D.$JSCompiler_get$$)("$_hasFocus$");
D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$ = function $$JSCompiler_StaticMethods__addSelectableObjectsToArray$$$($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$5_node$$15$$, $ret$$28$$) {
  if($children$$5_node$$15$$ && ($ret$$28$$.push($children$$5_node$$15$$), $children$$5_node$$15$$ = $children$$5_node$$15$$.$getChildNodes$())) {
    for(var $i$$226$$ = 0;$i$$226$$ < $children$$5_node$$15$$.length;$i$$226$$++) {
      (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$5_node$$15$$[$i$$226$$], $ret$$28$$)
    }
  }
};
D.$DvtBaseTreeView$$.prototype.$__isDragAvailable$ = function $$DvtBaseTreeView$$$$$__isDragAvailable$$($clientIds$$3$$) {
  return this.$_selectionHandler$ ? $clientIds$$3$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragTransferable$ = function $$DvtBaseTreeView$$$$$__getDragTransferable$$($node$$16_rowKeys$$) {
  $node$$16_rowKeys$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$16_rowKeys$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$());
  $node$$16_rowKeys$$ = [];
  for(var $selection$$4$$ = this.$_selectionHandler$.getSelection(), $i$$227$$ = 0;$i$$227$$ < $selection$$4$$.length;$i$$227$$++) {
    $node$$16_rowKeys$$.push($selection$$4$$[$i$$227$$].getId())
  }
  return $node$$16_rowKeys$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragFeedback$ = function $$DvtBaseTreeView$$$$$__getDragFeedback$$() {
  for(var $displayables$$8$$ = [], $selection$$5$$ = this.$_selectionHandler$.getSelection(), $i$$228$$ = 0;$i$$228$$ < $selection$$5$$.length;$i$$228$$++) {
    $displayables$$8$$.push($selection$$5$$[$i$$228$$].$__getDisplayable$())
  }
  return $displayables$$8$$
};
D.$DvtBaseTreeView$$.prototype.$__processBreadcrumbsEvent$ = function $$DvtBaseTreeView$$$$$__processBreadcrumbsEvent$$($event$$239$$) {
  $event$$239$$ instanceof D.$DvtBreadcrumbsDrillEvent$$ && (0,D.$JSCompiler_StaticMethods___drill$$)(this, $event$$239$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods___drill$$ = function $$JSCompiler_StaticMethods___drill$$$($JSCompiler_StaticMethods___drill$self$$, $id$$103$$, $bDrillUp$$) {
  $bDrillUp$$ && $JSCompiler_StaticMethods___drill$self$$.$_root$ && $id$$103$$ == $JSCompiler_StaticMethods___drill$self$$.$_root$.getId() && $JSCompiler_StaticMethods___drill$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods___drill$self$$.$_ancestors$.length ? ($JSCompiler_StaticMethods___drill$self$$.$_navigableIdToFocus$ = $id$$103$$, $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($JSCompiler_StaticMethods___drill$self$$.$_ancestors$[0].id))) : $bDrillUp$$ || 
  $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($id$$103$$));
  $JSCompiler_StaticMethods___drill$self$$.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$DvtBaseTreeView$$.prototype.$getAutomation$ = (0,D.$JSCompiler_get$$)("$_Automation$");
D.$DvtBaseTreeView$$.prototype.$getLogicalObject$ = function $$DvtBaseTreeView$$$$$getLogicalObject$$($target$$80$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $target$$80$$)
};
D.$DvtBaseTreeView$$.prototype.$isDragAvailable$ = function $$DvtBaseTreeView$$$$$isDragAvailable$$($mouseX$$10$$, $mouseY$$10$$, $clientIds$$5$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$5$$)
};
D.$DvtBaseTreeView$$.prototype.$getDragTransferable$ = function $$DvtBaseTreeView$$$$$getDragTransferable$$($mouseX$$11$$, $mouseY$$11$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$11$$, $mouseY$$11$$)
};

D.$DvtBaseTreeAnimationHandler$$ = function $$DvtBaseTreeAnimationHandler$$$($context$$576$$, $deleteContainer$$2$$) {
  this.Init($context$$576$$, $deleteContainer$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtBaseTreeAnimationHandler");
D.$DvtBaseTreeAnimationHandler$_isAncestor$$ = function $$DvtBaseTreeAnimationHandler$_isAncestor$$$($ancestors$$, $node$$113$$) {
  if(!$node$$113$$ || !$ancestors$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$557$$ = 0;$i$$557$$ < $ancestors$$.length;$i$$557$$++) {
    if($ancestors$$[$i$$557$$].id == $node$$113$$.getId()) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtBaseTreeDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDropTarget$$, D.$DvtDropTarget$$, "DvtBaseTreeDropTarget");
D.$DvtBaseTreeEventManager$$ = function $$DvtBaseTreeEventManager$$$($view$$63$$, $context$$578$$, $callback$$119$$, $callbackObj$$91$$) {
  this.Init($context$$578$$, $callback$$119$$, $callbackObj$$91$$);
  this.$_view$ = $view$$63$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeEventManager$$, D.$DvtEventManager$$, "DvtBaseTreeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$484_shiftKey$$inline_5647$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$484_shiftKey$$inline_5647$$);
  var $obj$$275$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$484_shiftKey$$inline_5647$$.target);
  $obj$$275$$ && ($event$$484_shiftKey$$inline_5647$$ = $event$$484_shiftKey$$inline_5647$$.shiftKey, $obj$$275$$.$isDrillReplaceEnabled$ && $obj$$275$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $obj$$275$$.getId(), $event$$484_shiftKey$$inline_5647$$))
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$485_obj$$276$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnClick$.call(this, $event$$485_obj$$276$$);
  $event$$485_obj$$276$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$485_obj$$276$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$485_obj$$276$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$486_obj$$277$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$486_obj$$277$$);
  ($event$$486_obj$$277$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$486_obj$$277$$.target)) && $event$$486_obj$$277$$.$handleMouseOver$ && $event$$486_obj$$277$$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$487_relatedObj$$1$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$487_relatedObj$$1$$);
  var $obj$$278$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$487_relatedObj$$1$$.target);
  $obj$$278$$ && $obj$$278$$.$handleMouseOut$ && ($event$$487_relatedObj$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$487_relatedObj$$1$$.relatedTarget), ($event$$487_relatedObj$$1$$ && $event$$487_relatedObj$$1$$.getId ? $event$$487_relatedObj$$1$$.getId() : D.$JSCompiler_alias_NULL$$) != $obj$$278$$.getId() && $obj$$278$$.$handleMouseOut$())
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$488$$) {
  var $eventConsumed$$3_obj$$279$$ = D.$JSCompiler_alias_FALSE$$, $eventConsumed$$3_obj$$279$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this);
  13 == $event$$488$$.keyCode && !$event$$488$$.ctrlKey ? ($eventConsumed$$3_obj$$279$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this), $eventConsumed$$3_obj$$279$$.$isDrillReplaceEnabled$ && $eventConsumed$$3_obj$$279$$.$isDrillReplaceEnabled$() && ($event$$488$$.shiftKey && ($eventConsumed$$3_obj$$279$$ = this.$_view$.$_root$), (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $eventConsumed$$3_obj$$279$$.getId(), $event$$488$$.shiftKey)), $event$$488$$.preventDefault(), $eventConsumed$$3_obj$$279$$ = 
  D.$JSCompiler_alias_TRUE$$) : $eventConsumed$$3_obj$$279$$ = D.$DvtBaseTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$488$$);
  return $eventConsumed$$3_obj$$279$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$489_obj$$280$$) {
  $event$$489_obj$$280$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$489_obj$$280$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$489_obj$$280$$);
  this.$_currentHoverItem$ && this.$_currentHoverItem$ != $event$$489_obj$$280$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = D.$JSCompiler_alias_NULL$$);
  $event$$489_obj$$280$$ && $event$$489_obj$$280$$ instanceof D.$DvtBaseTreeNode$$ && this.$_currentHoverItem$ != $event$$489_obj$$280$$ && (this.$_currentHoverItem$ = $event$$489_obj$$280$$, $event$$489_obj$$280$$.$handleMouseOver$())
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($event$$490_obj$$281$$) {
  ($event$$490_obj$$281$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$490_obj$$281$$.target)) && $event$$490_obj$$281$$.$isDrillReplaceEnabled$ && $event$$490_obj$$281$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $event$$490_obj$$281$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__processNodeLabel$$ = function $$JSCompiler_StaticMethods__processNodeLabel$$$($JSCompiler_StaticMethods__processNodeLabel$self$$, $obj$$282$$) {
  $obj$$282$$ && ($obj$$282$$ instanceof D.$DvtBaseTreePeer$$ && $obj$$282$$.$_bDrillable$) && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processNodeLabel$self$$.$_view$, $obj$$282$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$DvtBaseTreeParser$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeParser$$, D.$DvtObj$$, "DvtBaseTreeParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($treeView$$7$$) {
  this.$_view$ = $treeView$$7$$;
  this.$_parser$ = new D.$DvtXmlParser$$;
  this.$_minAGColor$ = window.Infinity;
  this.$_maxAGColor$ = -window.Infinity
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$75_xmlString$$21$$) {
  var $childNodes$$21_rootNode$$4$$ = this.$_parser$.parse($ret$$75_xmlString$$21$$);
  $ret$$75_xmlString$$21$$ = this.$ParseRootAttributes$($childNodes$$21_rootNode$$4$$);
  var $childNodes$$21_rootNode$$4$$ = $childNodes$$21_rootNode$$4$$.$getChildNodes$(), $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$;
  $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes$$21_rootNode$$4$$, "f");
  var $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$ = $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$.length;
  if(0 < $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$) {
    for(var $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$, $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$, $attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ = {}, $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$ = 
    0;$childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$ < $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$;$childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$++) {
      $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$ = $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$[$childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$], $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$ = 
      $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$getAttr$("name"), $attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$[$ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$] = D.$DvtAfComponentFactory$$.$parseXml$($JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$)
    }
    $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ = $attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$
  }else {
    $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ = D.$JSCompiler_alias_NULL$$
  }
  $ret$$75_xmlString$$21$$.$templates$ = $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$;
  this.$_nodeCount$ = 0;
  $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes$$21_rootNode$$4$$, "n");
  $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$ = [];
  for($JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ = 0;$JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ < $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.length;$JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$++) {
    ($ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$ = this.$_parseDataNode$($JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$[$JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$], $ret$$75_xmlString$$21$$.$templates$)) && $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.push($ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$)
  }
  $ret$$75_xmlString$$21$$.$nodeCount$ = this.$_nodeCount$;
  if(1 == $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.length) {
    $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ = $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$[0]
  }else {
    $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ = this.$_view$;
    for($ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$ = $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$ = 0;$ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$ < $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.length;$ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$++) {
      $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$ += $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$[$ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$].$getSize$()
    }
    $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ = this.$CreateNode$($JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$, {size:$JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$, $bArtificialRoot$:D.$JSCompiler_alias_TRUE$$, $disclosed$:D.$JSCompiler_alias_TRUE$$});
    (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$, $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$)
  }
  $ret$$75_xmlString$$21$$.root = $JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$;
  for($JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ = 0;$JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$ < $childNodes$$21_rootNode$$4$$.length;$JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$++) {
    if($attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$ = $childNodes$$21_rootNode$$4$$[$JSCompiler_inline_result$$244_JSCompiler_temp$$272_artificialRoot$$inline_5675_i$$572_template$$inline_5663_treeView$$inline_5671$$], $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$ = $ret$$75_xmlString$$21$$, $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$) {
      if($ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$ = $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.getName(), "spb" == $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$) {
        $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$ = this.$_parseShowPopupBehavior$($attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$, $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$), $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$showPopupBehaviors$ || 
        ($JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$showPopupBehaviors$ = []), $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$showPopupBehaviors$.push($attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$)
      }else {
        if("menus" == $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$) {
          $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$contextMenuHandler$ || ($JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$contextMenuHandler$ = new D.$DvtContextMenuHandler$$(this.$_view$.$_context$)), $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$contextMenuHandler$.add($attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$)
        }else {
          if("ag" == $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$) {
            $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$ = $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$;
            $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$ = $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$;
            $attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ = D.$JSCompiler_alias_VOID$$;
            $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$ = $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.$getAttr$("id");
            $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$ = $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.$getAttr$("T");
            if("continuous" == $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.$getAttr$("t")) {
              var $attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ = $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.$getAttr$("minValue"), $i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$ = $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.$getAttr$("maxValue"), $group$$inline_9715_minLabel$$inline_9709$$ = $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.$getAttr$("minLabel"), 
              $groupLabel$$inline_9716_maxLabel$$inline_9710$$ = $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.$getAttr$("maxLabel"), $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$ = $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.$getAttr$("ramp").split(";");
              $attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ == D.$JSCompiler_alias_NULL$$ && ($attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ = this.$_minAGColor$);
              $i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$ == D.$JSCompiler_alias_NULL$$ && ($i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$ = this.$_maxAGColor$);
              $attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ = new D.$DvtContinuousAttrGroups$$($attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$, $i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$, $group$$inline_9715_minLabel$$inline_9709$$, $groupLabel$$inline_9716_maxLabel$$inline_9710$$, $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$)
            }else {
              $attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ = new D.$DvtDiscreteAttrGroups$$;
              $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$ = $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.$getChildNodes$();
              for($i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$ = 0;$i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$ < $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$.length;$i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$++) {
                var $child$$inline_9714_params$$inline_9717$$ = $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$[$i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$];
                $child$$inline_9714_params$$inline_9717$$ && ($group$$inline_9715_minLabel$$inline_9709$$ = $child$$inline_9714_params$$inline_9717$$.$getAttr$("g"), $groupLabel$$inline_9716_maxLabel$$inline_9710$$ = $child$$inline_9714_params$$inline_9717$$.$getAttr$("l"), $child$$inline_9714_params$$inline_9717$$ = {color:$child$$inline_9714_params$$inline_9717$$.$getAttr$("c"), pattern:$child$$inline_9714_params$$inline_9717$$.$getAttr$("p")}, $attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$.add($group$$inline_9715_minLabel$$inline_9709$$, 
                $groupLabel$$inline_9716_maxLabel$$inline_9710$$, $child$$inline_9714_params$$inline_9717$$))
              }
            }
            $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.$attrGroups$ || ($attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.$attrGroups$ = []);
            $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.$attrGroups$.push({$attrGroups$:$attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$, $templateId$:$ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$, id:$JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$})
          }else {
            if("styles" == $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$) {
              $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$styles$ = this.$_parseStyles$($attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$, $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$)
            }else {
              if("a" == $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$) {
                $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$ = [];
                $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$ = $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.$getChildNodes$();
                for($attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ = 0;$attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ < $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.length;$attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$++) {
                  $childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$ = $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$[$attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$].$getAttr$("id"), $i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$ = $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$[$attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$].$getAttr$("l"), 
                  $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$.push({id:$childNodes$$inline_9712_i$$inline_5668_id$$inline_9723_ramp$$inline_9711_xmlNode$$inline_9702$$, text:$i$$inline_9713_maxValue$$inline_9708_text$$inline_9724$$})
                }
                $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$ancestors$ = $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$
              }else {
                if("resources" == $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$) {
                  $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$ = {};
                  $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$ = $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.getAttributes();
                  for($attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ = 0;$attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$ < $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$.length;$attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$++) {
                    $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$[$attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$[$attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$].name] = $attrs$$inline_9728_childNodes$$inline_9721_count$$inline_5664_ret$$inline_9703_rootNodes$$4_showPopupBehavior$$inline_5681_xmlNode$$inline_5678$$[$attrGroups$$inline_9704_i$$inline_9722_i$$inline_9729_minValue$$inline_9707_templateMap$$inline_5667$$].value
                  }
                  $JSCompiler_temp_const$$8610_JSCompiler_temp_const$$8694_id$$inline_9705_ret$$inline_5679_size$$inline_5673_temp$$inline_5665_xmlDataNodes$$.$resources$ = $ancestors$$inline_9720_i$$inline_5674_name$$inline_5680_resources$$inline_9727_root$$17_tempName$$inline_5666_templateId$$inline_9706$$
                }
              }
            }
          }
        }
      }
    }
  }
  this.$_applyParsedProperties$($ret$$75_xmlString$$21$$.root, $ret$$75_xmlString$$21$$);
  return $ret$$75_xmlString$$21$$
};
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$44$$) {
  var $ret$$76$$ = {}, $duration$$90_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$44$$.$getAttr$("sel");
  $ret$$76$$.$nodeSelection$ = "none" == $duration$$90_nodeSelectionStr_selectedIdsStr$$ ? D.$JSCompiler_alias_NULL$$ : "single" == $duration$$90_nodeSelectionStr_selectedIdsStr$$ ? "s" : "m";
  $ret$$76$$.$sorting$ = $xmlNode$$44$$.$getAttr$("sort");
  if($duration$$90_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$44$$.$getAttr$("selIds")) {
    $ret$$76$$.$selectedIds$ = $duration$$90_nodeSelectionStr_selectedIdsStr$$.split(",")
  }
  $ret$$76$$.$emptyText$ = $xmlNode$$44$$.$getAttr$("emptyText");
  $ret$$76$$.$legendSource$ = $xmlNode$$44$$.$getAttr$("ls");
  $ret$$76$$.$sizeValueStr$ = $xmlNode$$44$$.$getAttr$("sv");
  $ret$$76$$.$colorValueStr$ = $xmlNode$$44$$.$getAttr$("cv");
  if($duration$$90_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$44$$.$getAttr$("adu")) {
    $ret$$76$$.$animationDuration$ = $duration$$90_nodeSelectionStr_selectedIdsStr$$ / 1E3
  }
  $ret$$76$$.$animationOnDataChange$ = $xmlNode$$44$$.$getAttr$("adc");
  $ret$$76$$.$animationOnDisplay$ = $xmlNode$$44$$.$getAttr$("adi");
  return $ret$$76$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($labelStyle$$16_xmlNode$$45$$) {
  var $ret$$77$$ = {};
  $ret$$77$$.$templateId$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("T");
  $ret$$77$$.$menuId$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("M");
  $ret$$77$$.$agColor$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("ag");
  $ret$$77$$.id = $labelStyle$$16_xmlNode$$45$$.$getAttr$("id");
  $ret$$77$$.size = (0,window.Number)($labelStyle$$16_xmlNode$$45$$.$getAttr$("s"));
  $ret$$77$$.color = $labelStyle$$16_xmlNode$$45$$.$getAttr$("c");
  $ret$$77$$.pattern = $labelStyle$$16_xmlNode$$45$$.$getAttr$("p");
  $ret$$77$$.label = $labelStyle$$16_xmlNode$$45$$.$getAttr$("l");
  $ret$$77$$.$tooltip$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("tt");
  $ret$$77$$.$labelDisplay$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("ld");
  $ret$$77$$.$drilling$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("d");
  $ret$$77$$.$indexInParent$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("iip");
  $ret$$77$$.$disclosed$ = "t" == $labelStyle$$16_xmlNode$$45$$.$getAttr$("di") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  $ret$$77$$.$selectable$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("nsel");
  var $tn$$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("tn");
  $tn$$ && ($ret$$77$$.$templateName$ = $tn$$);
  if($labelStyle$$16_xmlNode$$45$$ = $labelStyle$$16_xmlNode$$45$$.$getAttr$("ls")) {
    $ret$$77$$.$labelStyle$ = new D.$DvtCSSStyle$$($labelStyle$$16_xmlNode$$45$$)
  }
  $ret$$77$$.$agColor$ != D.$JSCompiler_alias_NULL$$ && (this.$_maxAGColor$ = window.Math.max(this.$_maxAGColor$, $ret$$77$$.$agColor$), this.$_minAGColor$ = window.Math.min(this.$_minAGColor$, $ret$$77$$.$agColor$));
  return $ret$$77$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$46$$, $templates$$3$$) {
  if(!$xmlNode$$46$$ || "n" != $xmlNode$$46$$.getName()) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_nodeCount$++;
  var $props$$26_treeNode$$3$$ = this.$ParseNodeAttributes$($xmlNode$$46$$), $props$$26_treeNode$$3$$ = this.$CreateNode$(this.$_view$, $props$$26_treeNode$$3$$, $templates$$3$$);
  (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($props$$26_treeNode$$3$$, this.$_parseChildren$($xmlNode$$46$$, $props$$26_treeNode$$3$$, $templates$$3$$));
  return $props$$26_treeNode$$3$$
};
D.$JSCompiler_prototypeAlias$$.$_parseChildren$ = function $$JSCompiler_prototypeAlias$$$$_parseChildren$$($childNodes$$22_xmlNode$$47$$, $treeNode$$4$$, $templates$$4$$) {
  var $treeNodes$$2$$ = [];
  $childNodes$$22_xmlNode$$47$$ = $childNodes$$22_xmlNode$$47$$.$getChildNodes$();
  for(var $i$$574$$ = 0;$i$$574$$ < $childNodes$$22_xmlNode$$47$$.length;$i$$574$$++) {
    var $child$$66$$ = $childNodes$$22_xmlNode$$47$$[$i$$574$$];
    $child$$66$$ && ("el" == $child$$66$$.getName() ? $templates$$4$$ && $treeNode$$4$$.$SetElAttributes$ && $treeNode$$4$$.$SetElAttributes$((0,D.$DvtPropMap$toELContext$$)($child$$66$$)) : $treeNode$$4$$.$isDisclosed$() && $treeNodes$$2$$.push(this.$_parseDataNode$($child$$66$$, $templates$$4$$)))
  }
  return $treeNodes$$2$$
};
D.$JSCompiler_prototypeAlias$$.$_parseShowPopupBehavior$ = function $$JSCompiler_prototypeAlias$$$$_parseShowPopupBehavior$$($xmlNode$$49$$, $ret$$79$$) {
  var $showPopupBehavior$$2$$ = (0,D.$DvtShowPopupBehavior$newInstance$$)($xmlNode$$49$$), $templateId$$ = $xmlNode$$49$$.$getAttr$("T");
  $ret$$79$$.$spb$ || ($ret$$79$$.$spb$ = {});
  $ret$$79$$.$spb$[$templateId$$] || ($ret$$79$$.$spb$[$templateId$$] = []);
  $ret$$79$$.$spb$[$templateId$$].push($showPopupBehavior$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($node$$120$$, $ret$$81$$) {
  if($node$$120$$) {
    var $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5686_children$$25_templateId$$2$$ = $node$$120$$.$_templateId$;
    if($ret$$81$$.$spb$) {
      var $agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$ = $ret$$81$$.$spb$[$JSCompiler_StaticMethods_processAttrGroups$self$$inline_5686_children$$25_templateId$$2$$];
      $agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$ && $node$$120$$.$setShowPopupBehaviors$($agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$)
    }
    if($ret$$81$$.$attrGroups$) {
      for(var $i$$576$$ = 0;$i$$576$$ < $ret$$81$$.$attrGroups$.length;$i$$576$$++) {
        if($agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$ = $ret$$81$$.$attrGroups$[$i$$576$$], $agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$.$templateId$ == $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5686_children$$25_templateId$$2$$) {
          if($agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$.$attrGroups$ instanceof D.$DvtContinuousAttrGroups$$ && ($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5686_children$$25_templateId$$2$$ = $node$$120$$, $agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$ = $agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$.$attrGroups$.get($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5686_children$$25_templateId$$2$$.$_agColor$))) {
            $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5686_children$$25_templateId$$2$$.$_color$ = $agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$
          }
          break
        }
      }
    }
    if($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5686_children$$25_templateId$$2$$ = $node$$120$$.$getChildNodes$()) {
      for($agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$ = 0;$agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$ < $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5686_children$$25_templateId$$2$$.length;$agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$++) {
        this.$_applyParsedProperties$($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5686_children$$25_templateId$$2$$[$agDef$$1_behaviors$$14_childIndex$$7_color$$inline_5688$$], $ret$$81$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods__getChildNodesByName$$ = function $$JSCompiler_StaticMethods__getChildNodesByName$$$($childNodes$$24$$, $name$$91$$) {
  for(var $nodes$$5$$ = [], $i$$577$$ = 0;$i$$577$$ < $childNodes$$24$$.length;$i$$577$$++) {
    var $child$$68$$ = $childNodes$$24$$[$i$$577$$];
    $child$$68$$ && $child$$68$$.getName() == $name$$91$$ && $nodes$$5$$.push($child$$68$$)
  }
  return $nodes$$5$$
};
D.$DvtBaseTreeParser$$.prototype.$_parseStyles$ = function $$DvtBaseTreeParser$$$$$_parseStyles$$($xmlNode$$51$$, $ret$$82$$) {
  var $styles$$7$$ = {}, $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$51$$.$getAttr$("top"));
  $styles$$7$$.BACKGROUND_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$;
  $styles$$7$$.ANIMATION_UPDATE_COLOR_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$.$getStyle$("-tr-animation-update-color");
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$51$$.$getAttr$("node"));
  $styles$$7$$.LABEL_TEXT_DEFAULT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$;
  var $nodeHoverStyle$$1$$ = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$51$$.$getAttr$("node-hover"))), $nodeSelectedStyle$$1$$ = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$51$$.$getAttr$("node-selected")));
  $ret$$82$$.$dropSiteFillColor$ = $xmlNode$$51$$.$getAttr$("dsf");
  $ret$$82$$.$dropSiteBorderColor$ = $xmlNode$$51$$.$getAttr$("dsb");
  $ret$$82$$.$dropSiteOpacity$ = $xmlNode$$51$$.$getAttr$("dso");
  this.$ParseAdditionalNodeStyles$($attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$, $nodeHoverStyle$$1$$, $nodeSelectedStyle$$1$$, $styles$$7$$);
  this.$ParseAdditionalStyles$($xmlNode$$51$$, $styles$$7$$);
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$51$$.$getAttr$("rootText"));
  $styles$$7$$.TEXT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$51$$.$getAttr$("attrType"));
  $styles$$7$$.ATTRIBUTE_TYPE_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$51$$.$getAttr$("attrValue"));
  $styles$$7$$.ATTRIBUTE_VALUE_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$51$$.$getAttr$("drillText"));
  $styles$$7$$.DRILL_TEXT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$51$$.$getAttr$("currentText"));
  $styles$$7$$.CURRENT_TEXT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$13_topStyle$$;
  return $styles$$7$$
};
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalNodeStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeNode$$, D.$DvtObj$$, "DvtBaseTreeNode");
D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$ = new D.$DvtShadow$$("#000000", 2, 5, 5, 45, 0.5);
D.$DvtBaseTreeNode$$.prototype.Init = function $$DvtBaseTreeNode$$$$Init$($treeView$$3$$, $props$$23$$, $templates$$2$$) {
  this.$_view$ = $treeView$$3$$;
  this.$_templateId$ = $props$$23$$.$templateId$;
  this.$_menuId$ = $props$$23$$.$menuId$;
  this.$_agColor$ = $props$$23$$.$agColor$;
  this.$_id$ = $props$$23$$.id;
  this.$_size$ = $props$$23$$.size;
  this.$_color$ = $props$$23$$.color ? $props$$23$$.color : "#000000";
  this.$_pattern$ = $props$$23$$.pattern;
  this.$_textStr$ = $props$$23$$.label;
  this.$_datatip$ = $props$$23$$.$tooltip$;
  this.$_labelStyle$ = $props$$23$$.$labelStyle$;
  this.$_drilling$ = $props$$23$$.$drilling$;
  this.$_disclosed$ = $props$$23$$.$disclosed$;
  this.$_indexInParent$ = $props$$23$$.$indexInParent$;
  this.$_bArtificialRoot$ = $props$$23$$.$bArtificialRoot$;
  this.$_alpha$ = 1;
  this.$_lastVisitedChild$ = D.$JSCompiler_alias_NULL$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_templates$ = $templates$$2$$;
  $props$$23$$.$templateName$ ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, $props$$23$$.$templateName$) : $templates$$2$$ && $templates$$2$$.content ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content") : $templates$$2$$ && $templates$$2$$.rootContent && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "rootContent");
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$;
  this.$Selectable$ = $props$$23$$.$selectable$
};
D.$JSCompiler_StaticMethods_setChildNodes$$ = function $$JSCompiler_StaticMethods_setChildNodes$$$($JSCompiler_StaticMethods_setChildNodes$self$$, $children$$20$$) {
  if($children$$20$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$558$$ = 0;$i$$558$$ < $children$$20$$.length;$i$$558$$++) {
      $children$$20$$[$i$$558$$].$_parent$ = $JSCompiler_StaticMethods_setChildNodes$self$$
    }
  }
  $JSCompiler_StaticMethods_setChildNodes$self$$.$_children$ = $children$$20$$
};
D.$DvtBaseTreeNode$$.prototype.$getChildNodes$ = (0,D.$JSCompiler_get$$)("$_children$");
D.$JSCompiler_StaticMethods_getDescendantNodes$$ = function $$JSCompiler_StaticMethods_getDescendantNodes$$$($JSCompiler_StaticMethods_getDescendantNodes$self$$) {
  var $descendants$$1$$ = [], $childDescendants$$, $child$$62$$;
  if(!$JSCompiler_StaticMethods_getDescendantNodes$self$$.$hasChildren$()) {
    return $descendants$$1$$
  }
  for(var $i$$559$$ = 0;$i$$559$$ < $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$.length;$i$$559$$++) {
    $child$$62$$ = $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$[$i$$559$$], $childDescendants$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($child$$62$$), $descendants$$1$$.push($child$$62$$), $descendants$$1$$ = $descendants$$1$$.concat($childDescendants$$)
  }
  return $descendants$$1$$
};
D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$ = function $$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$$($JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$) {
  var $parent$$59$$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$.$_parent$;
  $parent$$59$$ && ($parent$$59$$.$_lastVisitedChild$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$)
};
D.$DvtBaseTreeNode$$.prototype.$isDescendantOf$ = function $$DvtBaseTreeNode$$$$$isDescendantOf$$($node$$114$$) {
  return!$node$$114$$ || !this.$_parent$ ? D.$JSCompiler_alias_FALSE$$ : this.$_parent$ == $node$$114$$ ? D.$JSCompiler_alias_TRUE$$ : this.$_parent$.$isDescendantOf$($node$$114$$)
};
D.$JSCompiler_StaticMethods_GetNodesAtDepth$$ = function $$JSCompiler_StaticMethods_GetNodesAtDepth$$$($JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$21$$, $child$$63_root$$15$$, $depth$$15$$) {
  var $returnArray$$ = [];
  if(0 > $depth$$15$$) {
    return $returnArray$$
  }
  if(0 == $depth$$15$$) {
    return[$JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$21$$]
  }
  if($child$$63_root$$15$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$21$$ = $child$$63_root$$15$$.$getChildNodes$();
    for(var $i$$560$$ = 0;$i$$560$$ < $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$21$$.length;$i$$560$$++) {
      $child$$63_root$$15$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$21$$[$i$$560$$], $returnArray$$ = $returnArray$$.concat((0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)($child$$63_root$$15$$, $child$$63_root$$15$$, $depth$$15$$ - 1))
    }
  }
  return $returnArray$$
};
D.$JSCompiler_StaticMethods_getLeafNodes$$ = function $$JSCompiler_StaticMethods_getLeafNodes$$$($JSCompiler_StaticMethods_getLeafNodes$self$$) {
  var $leafNodes$$ = [], $child$$64_childLeafNodes$$;
  if(!$JSCompiler_StaticMethods_getLeafNodes$self$$.$hasChildren$()) {
    return[$JSCompiler_StaticMethods_getLeafNodes$self$$]
  }
  for(var $i$$561$$ = 0;$i$$561$$ < $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$.length;$i$$561$$++) {
    $child$$64_childLeafNodes$$ = $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$[$i$$561$$], $child$$64_childLeafNodes$$ = (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($child$$64_childLeafNodes$$), $leafNodes$$ = $leafNodes$$.concat($child$$64_childLeafNodes$$)
  }
  return $leafNodes$$
};
D.$DvtBaseTreeNode$getNodeById$$ = function $$DvtBaseTreeNode$getNodeById$$$($root$$16$$, $id$$206$$) {
  if($root$$16$$.getId() == $id$$206$$) {
    return $root$$16$$
  }
  for(var $child$$65_node$$115$$ = D.$JSCompiler_alias_NULL$$, $children$$22$$ = $root$$16$$.$getChildNodes$(), $length$$20$$ = $children$$22$$.length, $child$$65_node$$115$$ = D.$JSCompiler_alias_NULL$$, $i$$562$$ = 0;$i$$562$$ < $length$$20$$;$i$$562$$++) {
    if($child$$65_node$$115$$ = $children$$22$$[$i$$562$$], $child$$65_node$$115$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($child$$65_node$$115$$, $id$$206$$)) {
      return $child$$65_node$$115$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getAlpha$ = (0,D.$JSCompiler_get$$)("$_alpha$");
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$39$$) {
  this.$_alpha$ = $alpha$$39$$;
  this.$_shape$ && this.$_shape$.$setAlpha$(this.$_alpha$)
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_disclosed$");
D.$JSCompiler_prototypeAlias$$.$isDrillReplaceEnabled$ = function $$JSCompiler_prototypeAlias$$$$isDrillReplaceEnabled$$() {
  return"r" == this.$_drilling$ || "ir" == this.$_drilling$
};
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getContextMenuId$ = (0,D.$JSCompiler_get$$)("$_menuId$");
D.$JSCompiler_prototypeAlias$$.$render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$renderChildren$ = function $$JSCompiler_prototypeAlias$$$$renderChildren$$($container$$123$$) {
  var $children$$23$$ = this.$getChildNodes$();
  if($children$$23$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$563$$ = 0;$i$$563$$ < $children$$23$$.length;$i$$563$$++) {
      $children$$23$$[$i$$563$$].$render$($container$$123$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)(this);
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$showHoverEffect$();
  this.$handleMouseOver$ && this.$handleMouseOver$();
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$isShowingKeyboardFocusEffect$() && this.$hideHoverEffect$();
  this.$handleMouseOut$ && this.$handleMouseOut$();
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$IsHover$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = (0,D.$JSCompiler_set$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$12$$) {
  return this.$_view$.$__isDragAvailable$($clientIds$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_view$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$__getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.contains = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$52$$, $oldNode$$4$$) {
  $handler$$52$$.$_bDrill$ || (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$52$$, $oldNode$$4$$.$getChildNodes$(), this.$getChildNodes$());
  var $animationUpdateColor_startState$$8$$ = $oldNode$$4$$.$GetAnimationParams$(), $bSizeChanged_endState$$18$$ = this.$GetAnimationParams$(), $bColorChanged_nodePlayable$$22$$;
  if(!D.$DvtArrayUtils$$.$equals$($animationUpdateColor_startState$$8$$, $bSizeChanged_endState$$18$$) && ($bColorChanged_nodePlayable$$22$$ = new D.$DvtCustomAnimation$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($bColorChanged_nodePlayable$$22$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $bSizeChanged_endState$$18$$), $handler$$52$$.add($bColorChanged_nodePlayable$$22$$, 1), $bSizeChanged_endState$$18$$ = 
  this.$_size$ != $oldNode$$4$$.$_size$, $bColorChanged_nodePlayable$$22$$ = D.$DvtColorUtils$$.$getRGBA$(this.$_color$) != D.$DvtColorUtils$$.$getRGBA$($oldNode$$4$$.$_color$), this.$SetAnimationParams$($animationUpdateColor_startState$$8$$), ($animationUpdateColor_startState$$8$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, D.$JSCompiler_alias_NULL$$, "ANIMATION_UPDATE_COLOR_STYLE")) && ($bSizeChanged_endState$$18$$ || $bColorChanged_nodePlayable$$22$$))) {
    this.$_color$ = $animationUpdateColor_startState$$8$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$53$$) {
  if(!$handler$$53$$.$_bDrill$ || !$handler$$53$$.$_bDrill$ || !($handler$$53$$.$_oldRoot$.getId() == this.getId() || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($handler$$53$$.$_oldAncestors$, this))) {
    this.$setAlpha$(0);
    var $anim$$26_i$$564$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
    $handler$$53$$.add($anim$$26_i$$564$$, 2);
    for($anim$$26_i$$564$$ = 0;$anim$$26_i$$564$$ < this.$_children$.length;$anim$$26_i$$564$$++) {
      this.$_children$[$anim$$26_i$$564$$].$animateInsert$($handler$$53$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$54$$, $container$$124$$) {
  $container$$124$$.$addChild$(this.$_shape$);
  var $anim$$27_i$$565$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
  $handler$$54$$.add($anim$$27_i$$565$$, 0);
  if(!$handler$$54$$.$_bDrill$) {
    for($anim$$27_i$$565$$ = 0;$anim$$27_i$$565$$ < this.$_children$.length;$anim$$27_i$$565$$++) {
      this.$_children$[$anim$$27_i$$565$$].$animateDelete$($handler$$54$$, $container$$124$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return this.$_children$ != D.$JSCompiler_alias_NULL$$ && 0 < this.$_children$.length
};
D.$JSCompiler_StaticMethods_GetDepth$$ = function $$JSCompiler_StaticMethods_GetDepth$$$($JSCompiler_StaticMethods_GetDepth$self_parent$$60$$) {
  var $depth$$16$$ = 0;
  for($JSCompiler_StaticMethods_GetDepth$self_parent$$60$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$60$$.$_parent$;$JSCompiler_StaticMethods_GetDepth$self_parent$$60$$;) {
    $depth$$16$$++, $JSCompiler_StaticMethods_GetDepth$self_parent$$60$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$60$$.$_parent$
  }
  return $depth$$16$$
};
D.$DvtBaseTreeNode$$.prototype.$GetFill$ = function $$DvtBaseTreeNode$$$$$GetFill$$() {
  return this.$_pattern$ ? new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$) : new D.$DvtSolidFill$$(this.$_color$)
};
D.$DvtBaseTreeNode$GetNodeTextColor$$ = function $$DvtBaseTreeNode$GetNodeTextColor$$$($node$$116_r$$76$$) {
  if($node$$116_r$$76$$.$_pattern$) {
    return"#000000"
  }
  var $b$$48_color$$66$$ = $node$$116_r$$76$$.$_color$;
  $node$$116_r$$76$$ = D.$DvtColorUtils$$.$getRed$($b$$48_color$$66$$);
  var $g$$21$$ = D.$DvtColorUtils$$.$getGreen$($b$$48_color$$66$$), $b$$48_color$$66$$ = D.$DvtColorUtils$$.$getBlue$($b$$48_color$$66$$);
  return 128 <= (299 * $node$$116_r$$76$$ + 587 * $g$$21$$ + 114 * $b$$48_color$$66$$) / 1E3 ? "#000000" : "#FFFFFF"
};
D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyLabelTextStyle$$$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$, $text$$78$$) {
  var $defaultFillColor$$1_textStyle$$11$$ = (0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$);
  $text$$78$$.$setSolidFill$($defaultFillColor$$1_textStyle$$11$$);
  $defaultFillColor$$1_textStyle$$11$$ = [];
  $defaultFillColor$$1_textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE);
  $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$ && $defaultFillColor$$1_textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$);
  $text$$78$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($defaultFillColor$$1_textStyle$$11$$))
};
D.$JSCompiler_StaticMethods_getResolvedColor$$ = function $$JSCompiler_StaticMethods_getResolvedColor$$$($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$, $color$$67_defaultColor$$1$$, $styleColorKey$$) {
  ($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$.$_view$.$_styles$[$styleColorKey$$]) && ($color$$67_defaultColor$$1$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$);
  return $color$$67_defaultColor$$1$$
};
D.$JSCompiler_StaticMethods_GetTextSize$$ = function $$JSCompiler_StaticMethods_GetTextSize$$$($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$10$$) {
  var $size$$44$$ = 11;
  ($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$10$$ = $JSCompiler_StaticMethods_GetTextSize$self_fontSize$$10$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE.$getFontSize$()) && ($size$$44$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$10$$));
  return $size$$44$$
};
D.$DvtBaseTreeNode$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$DvtBaseTreeNode$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_textStr$");
D.$DvtBaseTreeNode$$.prototype.$SetElAttributes$ = function $$DvtBaseTreeNode$$$$$SetElAttributes$$($elAttrs$$1$$) {
  $elAttrs$$1$$ && !this.$_template$ && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content");
  this.$_elAttributes$ = $elAttrs$$1$$
};
D.$JSCompiler_StaticMethods__setTemplate$$ = function $$JSCompiler_StaticMethods__setTemplate$$$($JSCompiler_StaticMethods__setTemplate$self$$, $tempName$$) {
  $tempName$$ && ($JSCompiler_StaticMethods__setTemplate$self$$.$_template$ = $JSCompiler_StaticMethods__setTemplate$self$$.$_templates$[$tempName$$])
};
D.$DvtBaseTreeNode$$.prototype.$isDoubleClickable$ = function $$DvtBaseTreeNode$$$$$isDoubleClickable$$() {
  return this.$isDrillReplaceEnabled$()
};
D.$DvtBaseTreePeer$$ = function $$DvtBaseTreePeer$$$($node$$111$$, $id$$205$$, $tooltip$$45$$, $datatip$$6$$, $datatipColor$$3$$) {
  this.Init($tooltip$$45$$, $datatip$$6$$, $datatipColor$$3$$);
  this.$_node$ = $node$$111$$;
  this.$_id$ = $id$$205$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreePeer$$, D.$DvtSimpleObjPeer$$, "DvtBaseTreePeer");
D.$DvtBaseTreePeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBaseTreePeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$handleMouseOut$ = function $$DvtBaseTreePeer$$$$$handleMouseOut$$() {
  this.$_node$ && this.$_node$.$handleMouseOut$ && this.$_node$.$handleMouseOut$()
};
D.$DvtTreeBreadcrumbsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtTreeBreadcrumbsRenderer");
D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$ = 6;
D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$ = "color: #003286;";
D.$DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($treeView$$6$$, $availSpace$$82$$, $ancestors$$1_dataItems$$1$$, $dims$$33_height$$124_rootLabel$$1$$) {
  var $breadcrumbs_context$$577$$ = $treeView$$6$$.$_context$, $enabledStyle_enabledStyleArray$$ = [];
  $enabledStyle_enabledStyleArray$$.push($treeView$$6$$.$_styles$.TEXT_STYLE);
  $enabledStyle_enabledStyleArray$$.push(new D.$DvtCSSStyle$$(D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
  $enabledStyle_enabledStyleArray$$.push($treeView$$6$$.$_styles$.DRILL_TEXT_STYLE);
  var $enabledStyle_enabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($enabledStyle_enabledStyleArray$$).toString(), $enabledStyleOver$$ = $enabledStyle_enabledStyleArray$$ + "text-decoration: underline;", $disabledStyle_disabledStyleArray$$ = [];
  $disabledStyle_disabledStyleArray$$.push($treeView$$6$$.$_styles$.TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$.push($treeView$$6$$.$_styles$.CURRENT_TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($disabledStyle_disabledStyleArray$$).toString();
  $breadcrumbs_context$$577$$ = new D.$DvtBreadcrumbs$$($breadcrumbs_context$$577$$, $treeView$$6$$.$__processBreadcrumbsEvent$, $treeView$$6$$, {$labelStyle$:$enabledStyle_enabledStyleArray$$, $labelStyleOver$:$enabledStyleOver$$, $labelStyleDown$:$enabledStyleOver$$, $disabledLabelStyle$:$disabledStyle_disabledStyleArray$$});
  $treeView$$6$$.$addChild$($breadcrumbs_context$$577$$);
  $ancestors$$1_dataItems$$1$$ = $ancestors$$1_dataItems$$1$$.slice(0).reverse();
  $ancestors$$1_dataItems$$1$$.push({text:$dims$$33_height$$124_rootLabel$$1$$});
  $breadcrumbs_context$$577$$.$render$({items:$ancestors$$1_dataItems$$1$$}, $availSpace$$82$$.$w$);
  $dims$$33_height$$124_rootLabel$$1$$ = $breadcrumbs_context$$577$$.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($breadcrumbs_context$$577$$, $availSpace$$82$$.x, $availSpace$$82$$.y);
  $dims$$33_height$$124_rootLabel$$1$$ = $dims$$33_height$$124_rootLabel$$1$$.$h$ + D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
  $availSpace$$82$$.y += $dims$$33_height$$124_rootLabel$$1$$;
  $availSpace$$82$$.$h$ -= $dims$$33_height$$124_rootLabel$$1$$;
  $treeView$$6$$.removeChild($breadcrumbs_context$$577$$);
  return $breadcrumbs_context$$577$$
};
D.$DvtTreeLegendRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeLegendRenderer$$, D.$DvtObj$$, "DvtTreeLegendRenderer");
D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
D.$DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
D.$DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($treeView$$1$$, $availSpace$$81$$, $colorSpace_sizeStr$$, $colorStr$$1$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$1_legendDims$$) {
  var $context$$574$$ = $treeView$$1$$.$_context$, $eventManager$$28_labelSpace$$1$$ = $treeView$$1$$.$__getEventManager$(), $legend$$31$$ = new D.$DvtContainer$$($context$$574$$);
  $treeView$$1$$.$addChild$($legend$$31$$);
  var $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$574$$, $treeView$$1$$, $legend$$31$$, $availSpace$$81$$.$w$, $colorSpace_sizeStr$$, $colorStr$$1$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$1_legendDims$$), $borderColor$$48_colorContainer$$ = $treeView$$1$$.$_resources$.alta ? D.$JSCompiler_alias_NULL$$ : "#000000", $legendStyleArray_legendStyles$$ = [];
  $legendStyleArray_legendStyles$$.push($treeView$$1$$.$_styles$.TEXT_STYLE);
  var $legendStyleArray_legendStyles$$ = {borderColor:$borderColor$$48_colorContainer$$, $labelStyle$:(0,D.$DvtCSSStyle$mergeStyles$$)($legendStyleArray_legendStyles$$)}, $borderColor$$48_colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$574$$, $eventManager$$28_labelSpace$$1$$, $legend$$31$$, $availSpace$$81$$.$w$, $availSpace$$81$$.$h$, $attrGroups$$1_legendDims$$, $legendStyleArray_legendStyles$$), $labelDims$$ = $labelContainer$$ ? $labelContainer$$.$getDimensions$() : 
  D.$JSCompiler_alias_NULL$$, $colorDims$$ = $borderColor$$48_colorContainer$$ ? $borderColor$$48_colorContainer$$.$getDimensions$() : D.$JSCompiler_alias_NULL$$;
  if($labelContainer$$ && !$borderColor$$48_colorContainer$$) {
    $labelContainer$$.$setTranslateX$($availSpace$$81$$.y + ($availSpace$$81$$.$w$ - $labelDims$$.$w$) / 2)
  }else {
    if($borderColor$$48_colorContainer$$ && !$labelContainer$$) {
      $borderColor$$48_colorContainer$$.$setTranslateX$($availSpace$$81$$.y + ($availSpace$$81$$.$w$ - $colorDims$$.$w$) / 2)
    }else {
      if($borderColor$$48_colorContainer$$ && $labelContainer$$) {
        var $availWidth$$6$$ = $availSpace$$81$$.$w$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
        $labelDims$$.$w$ + $colorDims$$.$w$ > $availWidth$$6$$ && ($labelDims$$.$w$ > $availWidth$$6$$ / 2 && $colorDims$$.$w$ > $availWidth$$6$$ / 2 ? ($legend$$31$$.removeChild($labelContainer$$), $legend$$31$$.removeChild($borderColor$$48_colorContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$574$$, $treeView$$1$$, $legend$$31$$, $availWidth$$6$$ / 2, $colorSpace_sizeStr$$, $colorStr$$1$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$1_legendDims$$), $borderColor$$48_colorContainer$$ = 
        D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$574$$, $eventManager$$28_labelSpace$$1$$, $legend$$31$$, $availWidth$$6$$ / 2, $availSpace$$81$$.$h$, $attrGroups$$1_legendDims$$, $legendStyleArray_legendStyles$$)) : $labelDims$$.$w$ > $colorDims$$.$w$ ? ($eventManager$$28_labelSpace$$1$$ = $availWidth$$6$$ - $colorDims$$.$w$, $legend$$31$$.removeChild($labelContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$574$$, $treeView$$1$$, $legend$$31$$, 
        $eventManager$$28_labelSpace$$1$$, $colorSpace_sizeStr$$, $colorStr$$1$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$1_legendDims$$)) : ($colorSpace_sizeStr$$ = $availWidth$$6$$ - $labelDims$$.$w$, $legend$$31$$.removeChild($borderColor$$48_colorContainer$$), $borderColor$$48_colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$574$$, $eventManager$$28_labelSpace$$1$$, $legend$$31$$, $colorSpace_sizeStr$$, $availSpace$$81$$.$h$, $attrGroups$$1_legendDims$$, 
        $legendStyleArray_legendStyles$$)), $labelDims$$ = $labelContainer$$.$getDimensions$(), $colorDims$$ = $borderColor$$48_colorContainer$$.$getDimensions$());
        D.$DvtAgent$$.$isRightToLeft$($context$$574$$) ? ($borderColor$$48_colorContainer$$.$setTranslateX$($availSpace$$81$$.x), $labelContainer$$.$setTranslateX$($availSpace$$81$$.x + $availSpace$$81$$.$w$ - $labelDims$$.$w$)) : ($labelContainer$$.$setTranslateX$($availSpace$$81$$.x), $borderColor$$48_colorContainer$$.$setTranslateX$($availSpace$$81$$.x + $availSpace$$81$$.$w$ - $colorDims$$.$w$))
      }
    }
  }
  $attrGroups$$1_legendDims$$ = $legend$$31$$.$getDimensions$();
  $legend$$31$$.$setTranslateY$($availSpace$$81$$.y + $availSpace$$81$$.$h$ - $attrGroups$$1_legendDims$$.$h$);
  $availSpace$$81$$.$h$ -= $attrGroups$$1_legendDims$$.$h$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
  $treeView$$1$$.removeChild($legend$$31$$);
  return $legend$$31$$
};
D.$DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($context$$575_widthPerSection$$, $sizeWidth_treeView$$2$$, $attrTypeStyle_legend$$32$$, $availWidth$$7_x$$279$$, $colorWidth_sizeStr$$1$$, $colorStr$$2$$, $sizeValueStr$$1$$, $colorValueStr$$1$$) {
  var $isRTL$$19$$ = D.$DvtAgent$$.$isRightToLeft$($context$$575_widthPerSection$$), $eventManager$$29$$ = $sizeWidth_treeView$$2$$.$__getEventManager$(), $labelContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($sizeValueStr$$1$$ || $colorValueStr$$1$$) {
    $labelContainer$$1$$ = new D.$DvtContainer$$($context$$575_widthPerSection$$);
    $attrTypeStyle_legend$$32$$.$addChild$($labelContainer$$1$$);
    var $attrValueStyle_textStyle$$10$$ = [];
    $attrValueStyle_textStyle$$10$$.push($sizeWidth_treeView$$2$$.$_styles$.TEXT_STYLE);
    $attrValueStyle_textStyle$$10$$.push($sizeWidth_treeView$$2$$.$_styles$.ATTRIBUTE_TYPE_STYLE);
    $attrTypeStyle_legend$$32$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle_textStyle$$10$$);
    $attrValueStyle_textStyle$$10$$ = [];
    $attrValueStyle_textStyle$$10$$.push($sizeWidth_treeView$$2$$.$_styles$.TEXT_STYLE);
    $attrValueStyle_textStyle$$10$$.push($sizeWidth_treeView$$2$$.$_styles$.ATTRIBUTE_VALUE_STYLE);
    var $attrValueStyle_textStyle$$10$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle_textStyle$$10$$), $sizeLabel$$, $sizeValueLabel$$, $sizeLabelWidth$$, $sizeValueLabelWidth$$;
    $sizeWidth_treeView$$2$$ = 0;
    $sizeValueStr$$1$$ && ($sizeLabel$$ = new D.$DvtOutputText$$($context$$575_widthPerSection$$, $colorWidth_sizeStr$$1$$, 0, 0), $sizeLabel$$.$setCSSStyle$($attrTypeStyle_legend$$32$$), $labelContainer$$1$$.$addChild$($sizeLabel$$), $sizeLabelWidth$$ = $sizeLabel$$.$measureDimensions$().$w$, $sizeValueLabel$$ = new D.$DvtOutputText$$($context$$575_widthPerSection$$, $sizeValueStr$$1$$, 0, 0), $sizeValueLabel$$.$setCSSStyle$($attrValueStyle_textStyle$$10$$), $labelContainer$$1$$.$addChild$($sizeValueLabel$$), 
    $sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $sizeWidth_treeView$$2$$ = $sizeLabelWidth$$ + $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    var $colorLabel$$, $colorValueLabel$$, $colorLabelWidth$$, $colorValueLabelWidth$$;
    $colorWidth_sizeStr$$1$$ = 0;
    $colorValueStr$$1$$ && ($colorLabel$$ = new D.$DvtOutputText$$($context$$575_widthPerSection$$, $colorStr$$2$$, 0, 0), $colorLabel$$.$setCSSStyle$($attrTypeStyle_legend$$32$$), $labelContainer$$1$$.$addChild$($colorLabel$$), $colorLabelWidth$$ = $colorLabel$$.$measureDimensions$().$w$, $colorValueLabel$$ = new D.$DvtOutputText$$($context$$575_widthPerSection$$, $colorValueStr$$1$$, 0, 0), $colorValueLabel$$.$setCSSStyle$($attrValueStyle_textStyle$$10$$), $labelContainer$$1$$.$addChild$($colorValueLabel$$), 
    $colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $colorWidth_sizeStr$$1$$ = $colorLabelWidth$$ + $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    $availWidth$$7_x$$279$$ -= D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
    $sizeWidth_treeView$$2$$ + $colorWidth_sizeStr$$1$$ > $availWidth$$7_x$$279$$ && ($context$$575_widthPerSection$$ = $availWidth$$7_x$$279$$ / 2, $sizeWidth_treeView$$2$$ > $context$$575_widthPerSection$$ && $colorWidth_sizeStr$$1$$ > $context$$575_widthPerSection$$ ? (D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $context$$575_widthPerSection$$ - $sizeLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$29$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0), D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $context$$575_widthPerSection$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = 
    $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$29$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0)) : $sizeWidth_treeView$$2$$ > $colorWidth_sizeStr$$1$$ ? D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $availWidth$$7_x$$279$$ - $colorWidth_sizeStr$$1$$ - $sizeLabelWidth$$ - 
    D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $eventManager$$29$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0) : D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $availWidth$$7_x$$279$$ - 
    $sizeWidth_treeView$$2$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$29$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0));
    $availWidth$$7_x$$279$$ = 0;
    $isRTL$$19$$ ? ($colorValueLabel$$ && ($colorValueLabel$$.$setX$($availWidth$$7_x$$279$$), $availWidth$$7_x$$279$$ += $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorLabel$$.$setX$($availWidth$$7_x$$279$$), $availWidth$$7_x$$279$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $sizeValueLabel$$ && ($sizeValueLabel$$.$setX$($availWidth$$7_x$$279$$), $availWidth$$7_x$$279$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $sizeLabel$$.$setX$($availWidth$$7_x$$279$$))) : ($sizeValueLabel$$ && ($sizeLabel$$.$setX$($availWidth$$7_x$$279$$), $availWidth$$7_x$$279$$ += $sizeLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $sizeValueLabel$$.$setX$($availWidth$$7_x$$279$$), $availWidth$$7_x$$279$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $colorValueLabel$$ && ($colorLabel$$.$setX$($availWidth$$7_x$$279$$), $availWidth$$7_x$$279$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $colorValueLabel$$.$setX$($availWidth$$7_x$$279$$)))
  }
  return $labelContainer$$1$$
};
D.$DvtBaseTreeKeyboardHandler$$ = function $$DvtBaseTreeKeyboardHandler$$$($manager$$15$$) {
  this.Init($manager$$15$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtBaseTreeKeyboardHandler");
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isSelectionEvent$$($event$$480$$) {
  return this.$isNavigationEvent$($event$$480$$) && !$event$$480$$.ctrlKey
};
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isMultiSelectEvent$$($event$$481$$) {
  return 32 == $event$$481$$.keyCode && $event$$481$$.ctrlKey
};
D.$DvtBaseTreeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtBaseTreeDefaults");
D.$DvtBaseTreeDefaults$VERSION_1$$ = {skin:"skyros", emptyText:"No data to display", nodeDefaults:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{_attributeTypeTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"), _attributeValueTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;")}, 
_resources:{}};
D.$DvtBaseTreeDefaults$$.prototype.Init = function $$DvtBaseTreeDefaults$$$$Init$($defaultsMap$$2_ret$$66$$) {
  $defaultsMap$$2_ret$$66$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$66$$.skyros, D.$DvtBaseTreeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$66$$.alta, {})};
  D.$DvtBaseTreeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$2_ret$$66$$)
};
D.$DvtBaseTreeJsonUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeJsonUtils$$, D.$DvtObj$$, "DvtBaseTreeJsonUtils");
D.$DvtBaseTreeJsonUtils$$.prototype.$toXml$ = function $$DvtBaseTreeJsonUtils$$$$$toXml$$($JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$) {
  var $JSCompiler_temp_const$$199_ret$$67_ret$$inline_5655$$;
  $JSCompiler_temp_const$$199_ret$$67_ret$$inline_5655$$ = "\x3c" + this.$GetComponentName$();
  $JSCompiler_temp_const$$199_ret$$67_ret$$inline_5655$$ += this.$WriteComponentAttributes$($JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$);
  $JSCompiler_temp_const$$199_ret$$67_ret$$inline_5655$$ += "\x3e\n";
  if($JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ && $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$.nodes) {
    for(var $JSCompiler_temp_const$$8596_nodes$$3_ret$$inline_5659$$ = $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$.nodes, $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$ = 0;$attrGroups$$inline_9696_groups$$inline_9698_i$$568$$ < $JSCompiler_temp_const$$8596_nodes$$3_ret$$inline_5659$$.length;$attrGroups$$inline_9696_groups$$inline_9698_i$$568$$++) {
      $JSCompiler_temp_const$$199_ret$$67_ret$$inline_5655$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)(this, $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$, $JSCompiler_temp_const$$8596_nodes$$3_ret$$inline_5659$$[$attrGroups$$inline_9696_groups$$inline_9698_i$$568$$])
    }
  }
  $JSCompiler_temp_const$$8596_nodes$$3_ret$$inline_5659$$ = "\x3ca/\x3e\n" + this.$WriteResourcesElement$($JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$);
  $JSCompiler_temp_const$$8596_nodes$$3_ret$$inline_5659$$ += this.$WriteStyleElement$($JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$);
  if($attrGroups$$inline_9696_groups$$inline_9698_i$$568$$ = $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$.attributeGroups ? $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$) {
    if($JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ = '\x3cag id\x3d"' + $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$.id + '"', "continuous" == $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$.attributeType) {
      $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("t", "continuous"), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("ramp", $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$.colors.join(";")), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("minValue", $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$.min), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("maxValue", 
      $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$.max), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("minLabel", $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$.minLabel), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("maxLabel", $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$.maxLabel), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += "/\x3e"
    }else {
      $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += "\x3e\n";
      for(var $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$ = $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$.groups, $i$$inline_9699$$ = 0;$i$$inline_9699$$ < $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$.length;$i$$inline_9699$$++) {
        $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += "\x3ci", $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("g", $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$[$i$$inline_9699$$].id), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("l", $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$[$i$$inline_9699$$].label), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("c", 
        $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$[$i$$inline_9699$$].color), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += this.$WriteAttr$("p", $attrGroups$$inline_9696_groups$$inline_9698_i$$568$$[$i$$inline_9699$$].pattern), $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += "/\x3e\n"
      }
      $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ += "\x3c/ag\x3e\n"
    }
  }else {
    $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ = ""
  }
  $JSCompiler_temp_const$$8596_nodes$$3_ret$$inline_5659$$ = $JSCompiler_temp_const$$8596_nodes$$3_ret$$inline_5659$$ + $JSCompiler_inline_result$$8597_options$$175_ret$$inline_9697$$ + ("\x3c/" + this.$GetComponentName$() + "\x3e");
  return $JSCompiler_temp_const$$199_ret$$67_ret$$inline_5655$$ += $JSCompiler_temp_const$$8596_nodes$$3_ret$$inline_5659$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteAttr$ = function $$DvtBaseTreeJsonUtils$$$$$WriteAttr$$($attrName$$3$$, $value$$101$$) {
  return $value$$101$$ != D.$JSCompiler_alias_NULL$$ ? " " + $attrName$$3$$ + '\x3d"' + $value$$101$$ + '"' : ""
};
D.$DvtBaseTreeJsonUtils$$.prototype.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteComponentAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteComponentAttributes$$($options$$177$$) {
  var $ret$$69$$;
  $ret$$69$$ = "" + this.$WriteAttr$("sv", $options$$177$$.sizeLabel);
  $ret$$69$$ += this.$WriteAttr$("cv", $options$$177$$.colorLabel);
  var $attrGroups$$3_selectedNodes$$4$$ = $options$$177$$.attributeGroups ? $options$$177$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$;
  $attrGroups$$3_selectedNodes$$4$$ && ($ret$$69$$ += this.$WriteAttr$("ls", $attrGroups$$3_selectedNodes$$4$$.id));
  for(var $attrGroups$$3_selectedNodes$$4$$ = $options$$177$$.selectedNodes ? $options$$177$$.selectedNodes : [], $selectedNodeStr$$ = "", $i$$569$$ = 0;$i$$569$$ < $attrGroups$$3_selectedNodes$$4$$.length;$i$$569$$++) {
    0 < $selectedNodeStr$$.length && ($selectedNodeStr$$ += ","), $selectedNodeStr$$ += $attrGroups$$3_selectedNodes$$4$$[$i$$569$$]
  }
  0 < $selectedNodeStr$$.length && ($ret$$69$$ += this.$WriteAttr$("selIds", $selectedNodeStr$$));
  $ret$$69$$ += this.$WriteAttr$("adu", $options$$177$$.animationDuration);
  $ret$$69$$ += this.$WriteAttr$("adc", $options$$177$$.animationOnDataChange);
  $ret$$69$$ += this.$WriteAttr$("emptyText", $options$$177$$.emptyText);
  $ret$$69$$ += this.$WriteAttr$("sel", $options$$177$$.selection);
  return $ret$$69$$ += this.$WriteAttr$("sort", $options$$177$$.sorting)
};
D.$JSCompiler_StaticMethods_WriteNodeElement$$ = function $$JSCompiler_StaticMethods_WriteNodeElement$$$($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$179$$, $nodeData$$9_nodes$$4$$) {
  var $ret$$71$$;
  $ret$$71$$ = "\x3cn" + $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteNodeAttributes$($options$$179$$, $nodeData$$9_nodes$$4$$);
  if($nodeData$$9_nodes$$4$$ && $nodeData$$9_nodes$$4$$.nodes && 0 < $nodeData$$9_nodes$$4$$.nodes.length) {
    $ret$$71$$ += $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteAttr$("di", "t");
    $ret$$71$$ += "\x3e\n";
    $nodeData$$9_nodes$$4$$ = $nodeData$$9_nodes$$4$$.nodes;
    for(var $i$$570$$ = 0;$i$$570$$ < $nodeData$$9_nodes$$4$$.length;$i$$570$$++) {
      $ret$$71$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$179$$, $nodeData$$9_nodes$$4$$[$i$$570$$])
    }
    $ret$$71$$ += "\x3c/n\x3e\n"
  }else {
    $ret$$71$$ += "/\x3e\n"
  }
  return $ret$$71$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteNodeAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteNodeAttributes$$($options$$180$$, $nodeData$$10$$) {
  var $ret$$72$$;
  $ret$$72$$ = "" + this.$WriteAttr$("id", $nodeData$$10$$.id);
  $ret$$72$$ += this.$WriteAttr$("s", $nodeData$$10$$.value);
  $ret$$72$$ += this.$WriteAttr$("c", $nodeData$$10$$.color);
  $ret$$72$$ += this.$WriteAttr$("l", $nodeData$$10$$.label);
  $ret$$72$$ += this.$WriteAttr$("p", $nodeData$$10$$.pattern);
  $ret$$72$$ += this.$WriteAttr$("tt", $nodeData$$10$$.shortDesc ? $nodeData$$10$$.shortDesc : $nodeData$$10$$.tooltip);
  $ret$$72$$ += this.$WriteAttr$("ls", $nodeData$$10$$.labelStyle ? $nodeData$$10$$.labelStyle : $options$$180$$.nodeDefaults.labelStyle);
  var $drilling$$ = $nodeData$$10$$.drilling ? $nodeData$$10$$.drilling : $options$$180$$.nodeDefaults.drilling;
  "insert" == $drilling$$ ? $ret$$72$$ += this.$WriteAttr$("d", "i") : "replace" == $drilling$$ ? $ret$$72$$ += this.$WriteAttr$("d", "r") : "insertAndReplace" == $drilling$$ && ($ret$$72$$ += this.$WriteAttr$("d", "ir"));
  return $ret$$72$$ += this.$WriteAttr$("nsel", $nodeData$$10$$.selectable ? $nodeData$$10$$.selectable : "auto")
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteResourcesElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteStyleElement$ = function $$DvtBaseTreeJsonUtils$$$$$WriteStyleElement$$($options$$183$$) {
  var $ret$$74$$;
  $ret$$74$$ = "\x3cstyles " + this.$WriteAttr$("attrType", $options$$183$$.styleDefaults._attributeTypeTextStyle);
  return $ret$$74$$ += this.$WriteAttr$("attrValue", $options$$183$$.styleDefaults._attributeValueTextStyle)
};
D.$DvtTreeAutomation$$ = function $$DvtTreeAutomation$$$($treeView$$4$$) {
  this.$_Init$($treeView$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreeAutomation$$, D.$DvtObj$$, "DvtTreeAutomation");
D.$DvtTreeAutomation$$.prototype.$_Init$ = (0,D.$JSCompiler_set$$)("$_treeView$");
D.$DvtTreeAutomation$$.prototype.click = function $$DvtTreeAutomation$$$$click$($subId$$11$$) {
  this.$processSubId$($subId$$11$$, 0)
};
D.$DvtTreeAutomation$$.prototype.$processSubId$ = function $$DvtTreeAutomation$$$$$processSubId$$($subId$$12$$, $event$$483$$) {
  $event$$483$$ === D.$JSCompiler_alias_VOID$$ && ($event$$483$$ = -1);
  if($subId$$12$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $str$$16$$;
  if(-1 != $event$$483$$) {
    if(0 == $event$$483$$) {
      var $foundNode_subIdArray$$1$$ = (0,D.$DvtTreeAutomation$_convertSubIdToArray$$)($subId$$12$$);
      $foundNode_subIdArray$$1$$ && "node" == $foundNode_subIdArray$$1$$[0] && ($foundNode_subIdArray$$1$$ = (0,D.$DvtTreeAutomation$_FindNode$$)(this.$_treeView$.$_root$, $foundNode_subIdArray$$1$$, 1)) && (0,D.$JSCompiler_StaticMethods_dispatchDisplayableEvent$$)($foundNode_subIdArray$$1$$.$getDisplayable$(), D.$DvtMouseEvent$CLICK$$)
    }
  }else {
    if(($foundNode_subIdArray$$1$$ = (0,D.$DvtTreeAutomation$_convertSubIdToArray$$)($subId$$12$$)) && "node" == $foundNode_subIdArray$$1$$[0]) {
      var $lastIndex$$3$$ = $foundNode_subIdArray$$1$$.length - 1, $subSubId$$ = $foundNode_subIdArray$$1$$[$lastIndex$$3$$];
      0 <= $subSubId$$.indexOf("#") && ($foundNode_subIdArray$$1$$[$lastIndex$$3$$] = D.$JSCompiler_alias_NULL$$, ($foundNode_subIdArray$$1$$ = (0,D.$DvtTreeAutomation$_FindNode$$)(this.$_treeView$.$_root$, $foundNode_subIdArray$$1$$, 1)) && ("#label" == $subSubId$$ ? $str$$16$$ = $foundNode_subIdArray$$1$$.$getLabel$() : "#size" == $subSubId$$ ? $str$$16$$ = $foundNode_subIdArray$$1$$.$getSize$() : "#color" == $subSubId$$ ? $str$$16$$ = $foundNode_subIdArray$$1$$.$getColor$() : "#tooltip" == $subSubId$$ && 
      ($str$$16$$ = $foundNode_subIdArray$$1$$.$getDatatip$())))
    }
  }
  return $str$$16$$
};
D.$DvtTreeAutomation$_FindNode$$ = function $$DvtTreeAutomation$_FindNode$$$($children$$24_node$$119$$, $path$$47$$, $pathArrayIndex$$) {
  var $foundNode$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($children$$24_node$$119$$.$_indexInParent$ == $path$$47$$[$pathArrayIndex$$]) {
    if($path$$47$$[$pathArrayIndex$$ + 1] == D.$JSCompiler_alias_NULL$$) {
      $foundNode$$1$$ = $children$$24_node$$119$$
    }else {
      if($children$$24_node$$119$$ = $children$$24_node$$119$$.$getChildNodes$()) {
        for(var $i$$566$$ = 0;$i$$566$$ < $children$$24_node$$119$$.length && !($foundNode$$1$$ = (0,D.$DvtTreeAutomation$_FindNode$$)($children$$24_node$$119$$[$i$$566$$], $path$$47$$, $pathArrayIndex$$ + 1));$i$$566$$++) {
        }
      }
    }
  }
  return $foundNode$$1$$
};
D.$DvtTreeAutomation$_convertSubIdToArray$$ = function $$DvtTreeAutomation$_convertSubIdToArray$$$($array$$26_subId$$13$$) {
  $array$$26_subId$$13$$ = $array$$26_subId$$13$$.split("[");
  var $sRet$$inline_5640_subSubId$$1$$;
  $sRet$$inline_5640_subSubId$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($array$$26_subId$$13$$ && 0 <= $array$$26_subId$$13$$.length) {
    var $len$$45_target$$inline_5641$$ = $array$$26_subId$$13$$.length - 1, $elem$$inline_5642_i$$567$$ = $array$$26_subId$$13$$[$len$$45_target$$inline_5641$$], $elem$$42_sepIdx$$inline_5643_tempId$$1$$ = $elem$$inline_5642_i$$567$$.indexOf("#");
    0 < $elem$$42_sepIdx$$inline_5643_tempId$$1$$ && ($array$$26_subId$$13$$[$len$$45_target$$inline_5641$$] = $elem$$inline_5642_i$$567$$.substr(0, $elem$$42_sepIdx$$inline_5643_tempId$$1$$), $sRet$$inline_5640_subSubId$$1$$ = $elem$$inline_5642_i$$567$$.substr($elem$$42_sepIdx$$inline_5643_tempId$$1$$))
  }
  $len$$45_target$$inline_5641$$ = $array$$26_subId$$13$$.length;
  for($elem$$inline_5642_i$$567$$ = 1;$elem$$inline_5642_i$$567$$ < $len$$45_target$$inline_5641$$;$elem$$inline_5642_i$$567$$++) {
    $elem$$42_sepIdx$$inline_5643_tempId$$1$$ = $array$$26_subId$$13$$[$elem$$inline_5642_i$$567$$], $elem$$42_sepIdx$$inline_5643_tempId$$1$$ = $elem$$42_sepIdx$$inline_5643_tempId$$1$$.substr(0, $elem$$42_sepIdx$$inline_5643_tempId$$1$$.length - 1), window.tempIdAsNumber = (0,window.parseFloat)($elem$$42_sepIdx$$inline_5643_tempId$$1$$), $elem$$42_sepIdx$$inline_5643_tempId$$1$$ = (0,window.isNaN)(window.tempIdAsNumber) ? $elem$$42_sepIdx$$inline_5643_tempId$$1$$ : window.tempIdAsNumber, $array$$26_subId$$13$$[$elem$$inline_5642_i$$567$$] = 
    $elem$$42_sepIdx$$inline_5643_tempId$$1$$
  }
  $sRet$$inline_5640_subSubId$$1$$ && ($array$$26_subId$$13$$[$len$$45_target$$inline_5641$$] = $sRet$$inline_5640_subSubId$$1$$);
  return $array$$26_subId$$13$$
};
});