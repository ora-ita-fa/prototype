define(['./DvtToolkit', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreeView$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeView$$, D.$DvtBaseComponent$$, "DvtBaseTreeView");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$32$$, $callback$$49$$, $callbackObj$$26$$) {
  D.$DvtBaseTreeView$$.$superclass$.Init.call(this, $context$$32$$, $callback$$49$$, $callbackObj$$26$$);
  this.$_eventHandler$ = this.$CreateEventManager$(this, $context$$32$$, this.$__dispatchEvent$, this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$32$$);
  this.$_dropTarget$ = new D.$DvtBaseTreeDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_Automation$ = new D.$DvtTreeAutomation$$(this);
  this.$LastXml$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFocus$ = D.$JSCompiler_alias_FALSE$$;
  this.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($xmlString$$8$$, $container$$12_props$$3_width$$24$$, $availSpace$$6_bBlackBoxUpdate$$2_height$$24$$) {
  this.$Width$ = $container$$12_props$$3_width$$24$$;
  this.$Height$ = $availSpace$$6_bBlackBoxUpdate$$2_height$$24$$;
  this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
  this.$Animation$ && !$xmlString$$8$$ && ($xmlString$$8$$ = this.$LastXml$);
  $xmlString$$8$$ && (this.$LastXml$ = $xmlString$$8$$);
  $xmlString$$8$$ && ($container$$12_props$$3_width$$24$$ = this.$Parse$($xmlString$$8$$), this.$ApplyParsedProperties$($container$$12_props$$3_width$$24$$));
  $availSpace$$6_bBlackBoxUpdate$$2_height$$24$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$Layout$($availSpace$$6_bBlackBoxUpdate$$2_height$$24$$);
  $container$$12_props$$3_width$$24$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($container$$12_props$$3_width$$24$$);
  this.$_templates$ && (this.$_afContext$ = new D.$DvtAfContext$$(this.$_context$, this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = D.$JSCompiler_alias_TRUE$$);
  this.$Render$($container$$12_props$$3_width$$24$$, $availSpace$$6_bBlackBoxUpdate$$2_height$$24$$);
  this.$Animation$ && (this.$AnimationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$Animation$.stop());
  var $ah_bounds$$15$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $availSpace$$6_bBlackBoxUpdate$$2_height$$24$$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_container$) {
    if(this.$AnimationOnDataChange$ && $xmlString$$8$$) {
      if(D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDataChange$)) {
        this.$Animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, this.$AnimationOnDataChange$, this.$_container$, $container$$12_props$$3_width$$24$$, $ah_bounds$$15$$, this.$AnimationDuration$), $availSpace$$6_bBlackBoxUpdate$$2_height$$24$$ = D.$JSCompiler_alias_TRUE$$
      }else {
        if(this.$_oldRoot$) {
          this.$_deleteContainer$ = this.$GetDeleteContainer$();
          this.$addChild$(this.$_deleteContainer$);
          var $ah_bounds$$15$$ = new D.$DvtBaseTreeAnimationHandler$$(this.$_context$, this.$_deleteContainer$), $oldRoot$$inline_1185$$ = this.$_oldRoot$, $newRoot$$inline_1186$$ = this.$_root$, $oldAncestors$$inline_1187_oldList$$inline_1189$$ = this.$_oldAncestors$, $newAncestors$$inline_1188_newList$$inline_1190$$ = this.$_ancestors$;
          $ah_bounds$$15$$.$_bDrill$ = D.$JSCompiler_alias_FALSE$$;
          $ah_bounds$$15$$.$_oldRoot$ = $oldRoot$$inline_1185$$;
          $ah_bounds$$15$$.$_oldAncestors$ = $oldAncestors$$inline_1187_oldList$$inline_1189$$;
          (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($newAncestors$$inline_1188_newList$$inline_1190$$, $oldRoot$$inline_1185$$) || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($oldAncestors$$inline_1187_oldList$$inline_1189$$, $newRoot$$inline_1186$$) ? ($ah_bounds$$15$$.$_bDrill$ = D.$JSCompiler_alias_TRUE$$, $oldAncestors$$inline_1187_oldList$$inline_1189$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($oldRoot$$inline_1185$$), $newAncestors$$inline_1188_newList$$inline_1190$$ = 
          (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($newRoot$$inline_1186$$), $oldAncestors$$inline_1187_oldList$$inline_1189$$.push($oldRoot$$inline_1185$$), $newAncestors$$inline_1188_newList$$inline_1190$$.push($newRoot$$inline_1186$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah_bounds$$15$$, $oldAncestors$$inline_1187_oldList$$inline_1189$$, $newAncestors$$inline_1188_newList$$inline_1190$$)) : (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah_bounds$$15$$, [$oldRoot$$inline_1185$$], 
          [$newRoot$$inline_1186$$]);
          this.$Animation$ = $ah_bounds$$15$$.$getAnimation$()
        }
      }
    }
  }else {
    this.$Animation$ = this.$GetDisplayAnimation$($container$$12_props$$3_width$$24$$, $ah_bounds$$15$$)
  }
  this.$_oldAncestors$ = this.$_oldRoot$ = D.$JSCompiler_alias_NULL$$;
  this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
  $availSpace$$6_bBlackBoxUpdate$$2_height$$24$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$12_props$$3_width$$24$$;
  $xmlString$$8$$ ? (this.$_processInitialSelections$(), (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, !this.$Animation$)) : this.$ReselectNodes$()
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$Layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$RenderBackground$ = function $$JSCompiler_prototypeAlias$$$$RenderBackground$$($container$$14$$) {
  var $background$$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$Width$, this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$);
  $container$$14$$.$addChild$($background$$)
};
D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$ = function $$JSCompiler_StaticMethods_LayoutBreadcrumbs$$$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$8$$) {
  if($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$.length) {
    var $rootLabel$$ = $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$ ? $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$.$getLabel$() : D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$);
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$DvtTreeBreadcrumbsRenderer$$.$render$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$8$$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$, $rootLabel$$);
    (0,D.$JSCompiler_StaticMethods_addComponentKeyboardHandlerAt$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$)
  }else {
    (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$), $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_LayoutLegend$$ = function $$JSCompiler_StaticMethods_LayoutLegend$$$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$9$$) {
  var $attrGroups$$ = D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$ && $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$) {
    for(var $i$$39$$ = 0;$i$$39$$ < $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$.length;$i$$39$$++) {
      var $agDef$$ = $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$[$i$$39$$];
      if($agDef$$.id == $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$) {
        $attrGroups$$ = $agDef$$.$attrGroups$;
        break
      }
    }
  }
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$ || $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$ || $attrGroups$$) {
    $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$9$$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendSize, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendColor, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$, $attrGroups$$)
  }
};
D.$JSCompiler_StaticMethods_RenderEmptyText$$ = function $$JSCompiler_StaticMethods_RenderEmptyText$$$($JSCompiler_StaticMethods_RenderEmptyText$self$$, $container$$17$$) {
  if($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$) {
    var $text$$10$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_context$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ / 2, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ / 2);
    $text$$10$$.$alignCenter$();
    $text$$10$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($text$$10$$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$);
    $container$$17$$.$addChild$($text$$10$$)
  }
};
D.$JSCompiler_StaticMethods_HasValidData$$ = function $$JSCompiler_StaticMethods_HasValidData$$$($JSCompiler_StaticMethods_HasValidData$self$$) {
  return $JSCompiler_StaticMethods_HasValidData$self$$.$_root$ && 0 < $JSCompiler_StaticMethods_HasValidData$self$$.$_root$.$getSize$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$18$$, $bounds$$17$$) {
  return D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDisplay$) ? D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$AnimationOnDisplay$, $container$$18$$, $bounds$$17$$, this.$AnimationDuration$) : D.$JSCompiler_alias_NULL$$
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
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$1$$) {
  return new D.$DvtBaseTreeKeyboardHandler$$($manager$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$5$$, $context$$33$$, $callback$$50$$, $callbackObj$$27$$) {
  return new D.$DvtBaseTreeEventManager$$($view$$5$$, $context$$33$$, $callback$$50$$, $callbackObj$$27$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = (0,D.$JSCompiler_identityFn$$)();
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$DvtBaseTreeView$_calcMaxDepth$$ = function $$DvtBaseTreeView$_calcMaxDepth$$$($node$$18$$, $depth$$1$$) {
  var $maxDepth$$ = $depth$$1$$, $children$$3$$ = $node$$18$$.$getChildNodes$();
  if($children$$3$$) {
    for(var $i$$40$$ = 0;$i$$40$$ < $children$$3$$.length;$i$$40$$++) {
      var $childDepth$$ = (0,D.$DvtBaseTreeView$_calcMaxDepth$$)($children$$3$$[$i$$40$$], $depth$$1$$ + 1), $maxDepth$$ = window.Math.max($maxDepth$$, $childDepth$$)
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
  for(var $selectedNodes$$3$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$41$$ = 0;$i$$41$$ < $selectedNodes$$3$$.length;$i$$41$$++) {
    $selectedNodes$$3$$[$i$$41$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtBaseTreeView$$.prototype.$_processInitialSelections$ = function $$DvtBaseTreeView$$$$$_processInitialSelections$$() {
  if(this.$_selectionHandler$ && this.$_initialSelection$) {
    var $targets$$ = [];
    (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)(this, this.$_root$, $targets$$);
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initialSelection$, $targets$$);
    this.$_initialSelection$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods__processInitialFocus$$ = function $$JSCompiler_StaticMethods__processInitialFocus$$$($JSCompiler_StaticMethods__processInitialFocus$self$$, $applyVisualEffects$$) {
  var $initialFocus$$ = D.$JSCompiler_alias_NULL$$, $id$$17$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$;
  $id$$17$$ && ($initialFocus$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$, $id$$17$$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && ($JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$);
  $initialFocus$$ || ($initialFocus$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$GetInitialFocusedItem$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && $JSCompiler_StaticMethods__processInitialFocus$self$$.$setFocused$($JSCompiler_StaticMethods__processInitialFocus$self$$.$isFocused$())
};
D.$DvtBaseTreeView$$.prototype.$setFocused$ = function $$DvtBaseTreeView$$$$$setFocused$$($isFocused$$) {
  this.$_hasFocus$ = $isFocused$$;
  this.$_eventHandler$.$setFocused$($isFocused$$)
};
D.$DvtBaseTreeView$$.prototype.$isFocused$ = (0,D.$JSCompiler_get$$)("$_hasFocus$");
D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$ = function $$JSCompiler_StaticMethods__addSelectableObjectsToArray$$$($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$4_node$$19$$, $ret$$1$$) {
  if($children$$4_node$$19$$ && ($ret$$1$$.push($children$$4_node$$19$$), $children$$4_node$$19$$ = $children$$4_node$$19$$.$getChildNodes$())) {
    for(var $i$$42$$ = 0;$i$$42$$ < $children$$4_node$$19$$.length;$i$$42$$++) {
      (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$4_node$$19$$[$i$$42$$], $ret$$1$$)
    }
  }
};
D.$DvtBaseTreeView$$.prototype.$__isDragAvailable$ = function $$DvtBaseTreeView$$$$$__isDragAvailable$$($clientIds$$) {
  return this.$_selectionHandler$ ? $clientIds$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragTransferable$ = function $$DvtBaseTreeView$$$$$__getDragTransferable$$($node$$20_rowKeys$$) {
  $node$$20_rowKeys$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$20_rowKeys$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$());
  $node$$20_rowKeys$$ = [];
  for(var $selection$$3$$ = this.$_selectionHandler$.getSelection(), $i$$43$$ = 0;$i$$43$$ < $selection$$3$$.length;$i$$43$$++) {
    $node$$20_rowKeys$$.push($selection$$3$$[$i$$43$$].getId())
  }
  return $node$$20_rowKeys$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragFeedback$ = function $$DvtBaseTreeView$$$$$__getDragFeedback$$() {
  for(var $displayables$$ = [], $selection$$4$$ = this.$_selectionHandler$.getSelection(), $i$$44$$ = 0;$i$$44$$ < $selection$$4$$.length;$i$$44$$++) {
    $displayables$$.push($selection$$4$$[$i$$44$$].$__getDisplayable$())
  }
  return $displayables$$
};
D.$DvtBaseTreeView$$.prototype.$__processBreadcrumbsEvent$ = function $$DvtBaseTreeView$$$$$__processBreadcrumbsEvent$$($event$$15$$) {
  $event$$15$$ instanceof D.$DvtBreadcrumbsDrillEvent$$ ? (0,D.$JSCompiler_StaticMethods___drill$$)(this, $event$$15$$.getId(), D.$JSCompiler_alias_FALSE$$) : this.$__dispatchEvent$($event$$15$$)
};
D.$JSCompiler_StaticMethods___drill$$ = function $$JSCompiler_StaticMethods___drill$$$($JSCompiler_StaticMethods___drill$self$$, $id$$18$$, $bDrillUp$$) {
  $bDrillUp$$ && $JSCompiler_StaticMethods___drill$self$$.$_root$ && $id$$18$$ == $JSCompiler_StaticMethods___drill$self$$.$_root$.getId() && $JSCompiler_StaticMethods___drill$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods___drill$self$$.$_ancestors$.length ? ($JSCompiler_StaticMethods___drill$self$$.$_navigableIdToFocus$ = $id$$18$$, $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($JSCompiler_StaticMethods___drill$self$$.$_ancestors$[0].id))) : $bDrillUp$$ || 
  $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($id$$18$$));
  $JSCompiler_StaticMethods___drill$self$$.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$DvtBaseTreeView$$.prototype.$getAutomation$ = (0,D.$JSCompiler_get$$)("$_Automation$");
D.$DvtBaseTreeView$$.prototype.$getLogicalObject$ = function $$DvtBaseTreeView$$$$$getLogicalObject$$($target$$41$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $target$$41$$)
};
D.$DvtBaseTreeView$$.prototype.$isDragAvailable$ = function $$DvtBaseTreeView$$$$$isDragAvailable$$($mouseX$$4$$, $mouseY$$4$$, $clientIds$$2$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$2$$)
};
D.$DvtBaseTreeView$$.prototype.$getDragTransferable$ = function $$DvtBaseTreeView$$$$$getDragTransferable$$($mouseX$$5$$, $mouseY$$5$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$5$$, $mouseY$$5$$)
};

D.$DvtBaseTreeAnimationHandler$$ = function $$DvtBaseTreeAnimationHandler$$$($context$$540$$, $deleteContainer$$3$$) {
  this.Init($context$$540$$, $deleteContainer$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtBaseTreeAnimationHandler");
D.$DvtBaseTreeAnimationHandler$_isAncestor$$ = function $$DvtBaseTreeAnimationHandler$_isAncestor$$$($ancestors$$7$$, $node$$226$$) {
  if(!$node$$226$$ || !$ancestors$$7$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$523$$ = 0;$i$$523$$ < $ancestors$$7$$.length;$i$$523$$++) {
    if($ancestors$$7$$[$i$$523$$].id == $node$$226$$.getId()) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtBaseTreeDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDropTarget$$, D.$DvtDropTarget$$, "DvtBaseTreeDropTarget");
D.$DvtBaseTreeEventManager$$ = function $$DvtBaseTreeEventManager$$$($view$$28$$, $context$$538$$, $callback$$114$$, $callbackObj$$85$$) {
  this.Init($context$$538$$, $callback$$114$$, $callbackObj$$85$$);
  this.$_view$ = $view$$28$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeEventManager$$, D.$DvtEventManager$$, "DvtBaseTreeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$460_shiftKey$$inline_5590$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$460_shiftKey$$inline_5590$$);
  var $obj$$292$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$460_shiftKey$$inline_5590$$.target);
  $obj$$292$$ && ($event$$460_shiftKey$$inline_5590$$ = $event$$460_shiftKey$$inline_5590$$.shiftKey, $obj$$292$$.$isDrillReplaceEnabled$ && $obj$$292$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $obj$$292$$.getId(), $event$$460_shiftKey$$inline_5590$$))
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$461_obj$$293$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnClick$.call(this, $event$$461_obj$$293$$);
  $event$$461_obj$$293$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$461_obj$$293$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$461_obj$$293$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$462_obj$$294$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$462_obj$$294$$);
  ($event$$462_obj$$294$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$462_obj$$294$$.target)) && $event$$462_obj$$294$$.$handleMouseOver$ && $event$$462_obj$$294$$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$463_relatedObj$$1$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$463_relatedObj$$1$$);
  var $obj$$295$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$463_relatedObj$$1$$.target);
  $obj$$295$$ && $obj$$295$$.$handleMouseOut$ && ($event$$463_relatedObj$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$463_relatedObj$$1$$.relatedTarget), ($event$$463_relatedObj$$1$$ && $event$$463_relatedObj$$1$$.getId ? $event$$463_relatedObj$$1$$.getId() : D.$JSCompiler_alias_NULL$$) != $obj$$295$$.getId() && $obj$$295$$.$handleMouseOut$())
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$464$$) {
  var $eventConsumed$$7_obj$$296$$ = D.$JSCompiler_alias_FALSE$$, $eventConsumed$$7_obj$$296$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this);
  13 == $event$$464$$.keyCode && !$event$$464$$.ctrlKey ? ($eventConsumed$$7_obj$$296$$ = (0,D.$JSCompiler_StaticMethods_getFocus$$)(this), $eventConsumed$$7_obj$$296$$.$isDrillReplaceEnabled$ && $eventConsumed$$7_obj$$296$$.$isDrillReplaceEnabled$() && ($event$$464$$.shiftKey && ($eventConsumed$$7_obj$$296$$ = this.$_view$.$_root$), (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $eventConsumed$$7_obj$$296$$.getId(), $event$$464$$.shiftKey)), $event$$464$$.preventDefault(), $eventConsumed$$7_obj$$296$$ = 
  D.$JSCompiler_alias_TRUE$$) : $eventConsumed$$7_obj$$296$$ = D.$DvtBaseTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$464$$);
  return $eventConsumed$$7_obj$$296$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$465_obj$$297$$) {
  $event$$465_obj$$297$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$465_obj$$297$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$465_obj$$297$$);
  this.$_currentHoverItem$ && this.$_currentHoverItem$ != $event$$465_obj$$297$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = D.$JSCompiler_alias_NULL$$);
  $event$$465_obj$$297$$ && $event$$465_obj$$297$$ instanceof D.$DvtBaseTreeNode$$ && this.$_currentHoverItem$ != $event$$465_obj$$297$$ && (this.$_currentHoverItem$ = $event$$465_obj$$297$$, $event$$465_obj$$297$$.$handleMouseOver$())
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($event$$466_obj$$298$$) {
  ($event$$466_obj$$298$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$466_obj$$298$$.target)) && $event$$466_obj$$298$$.$isDrillReplaceEnabled$ && $event$$466_obj$$298$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $event$$466_obj$$298$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__processNodeLabel$$ = function $$JSCompiler_StaticMethods__processNodeLabel$$$($JSCompiler_StaticMethods__processNodeLabel$self$$, $obj$$299$$) {
  $obj$$299$$ && ($obj$$299$$ instanceof D.$DvtBaseTreePeer$$ && $obj$$299$$.$_bDrillable$) && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processNodeLabel$self$$.$_view$, $obj$$299$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$DvtBaseTreeParser$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeParser$$, D.$DvtObj$$, "DvtBaseTreeParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($treeView$$8$$) {
  this.$_view$ = $treeView$$8$$;
  this.$_parser$ = new D.$DvtXmlParser$$;
  this.$_minAGColor$ = window.Infinity;
  this.$_maxAGColor$ = -window.Infinity
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$95_xmlString$$15$$) {
  var $childNodes$$39_rootNode$$2$$ = this.$_parser$.parse($ret$$95_xmlString$$15$$);
  $ret$$95_xmlString$$15$$ = this.$ParseRootAttributes$($childNodes$$39_rootNode$$2$$);
  var $childNodes$$39_rootNode$$2$$ = $childNodes$$39_rootNode$$2$$.$getChildNodes$(), $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$;
  $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes$$39_rootNode$$2$$, "f");
  var $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$ = $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$.length;
  if(0 < $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$) {
    for(var $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$, $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$, $attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ = {}, $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$ = 
    0;$childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$ < $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$;$childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$++) {
      $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$ = $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$[$childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$], $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$ = 
      $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$getAttr$("name"), $attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$[$ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$] = D.$DvtAfComponentFactory$$.$parseXml$($JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$)
    }
    $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ = $attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$
  }else {
    $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ = D.$JSCompiler_alias_NULL$$
  }
  $ret$$95_xmlString$$15$$.$templates$ = $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$;
  this.$_nodeCount$ = 0;
  $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes$$39_rootNode$$2$$, "n");
  $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$ = [];
  for($JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ = 0;$JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ < $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.length;$JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$++) {
    ($ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$ = this.$_parseDataNode$($JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$[$JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$], $ret$$95_xmlString$$15$$.$templates$)) && $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.push($ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$)
  }
  $ret$$95_xmlString$$15$$.$nodeCount$ = this.$_nodeCount$;
  if(1 == $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.length) {
    $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ = $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$[0]
  }else {
    $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ = this.$_view$;
    for($ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$ = $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$ = 0;$ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$ < $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.length;$ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$++) {
      $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$ += $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$[$ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$].$getSize$()
    }
    $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ = this.$CreateNode$($JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$, {size:$JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$, $bArtificialRoot$:D.$JSCompiler_alias_TRUE$$, $disclosed$:D.$JSCompiler_alias_TRUE$$});
    (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$, $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$)
  }
  $ret$$95_xmlString$$15$$.root = $JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$;
  for($JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ = 0;$JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$ < $childNodes$$39_rootNode$$2$$.length;$JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$++) {
    if($attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$ = $childNodes$$39_rootNode$$2$$[$JSCompiler_inline_result$$219_JSCompiler_temp$$247_artificialRoot$$inline_5619_i$$524_template$$inline_5607_treeView$$inline_5615$$], $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$ = $ret$$95_xmlString$$15$$, $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$) {
      if($ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$ = $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.getName(), "spb" == $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$) {
        $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$ = this.$_parseShowPopupBehavior$($attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$, $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$), $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$showPopupBehaviors$ || 
        ($JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$showPopupBehaviors$ = []), $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$showPopupBehaviors$.push($attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$)
      }else {
        if("menus" == $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$) {
          $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$contextMenuHandler$ || ($JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$contextMenuHandler$ = new D.$DvtContextMenuHandler$$(this.$_view$.$_context$)), $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$contextMenuHandler$.add($attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$)
        }else {
          if("ag" == $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$) {
            $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$ = $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$;
            $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$ = $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$;
            $attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ = D.$JSCompiler_alias_VOID$$;
            $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$ = $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.$getAttr$("id");
            $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$ = $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.$getAttr$("T");
            if("continuous" == $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.$getAttr$("t")) {
              var $attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ = $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.$getAttr$("minValue"), $i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$ = $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.$getAttr$("maxValue"), $group$$inline_9519_minLabel$$inline_9513$$ = $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.$getAttr$("minLabel"), 
              $groupLabel$$inline_9520_maxLabel$$inline_9514$$ = $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.$getAttr$("maxLabel"), $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$ = $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.$getAttr$("ramp").split(";");
              $attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ == D.$JSCompiler_alias_NULL$$ && ($attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ = this.$_minAGColor$);
              $i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$ == D.$JSCompiler_alias_NULL$$ && ($i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$ = this.$_maxAGColor$);
              $attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ = new D.$DvtContinuousAttrGroups$$($attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$, $i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$, $group$$inline_9519_minLabel$$inline_9513$$, $groupLabel$$inline_9520_maxLabel$$inline_9514$$, $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$)
            }else {
              $attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ = new D.$DvtDiscreteAttrGroups$$;
              $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$ = $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.$getChildNodes$();
              for($i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$ = 0;$i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$ < $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$.length;$i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$++) {
                var $child$$inline_9518_params$$inline_9521$$ = $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$[$i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$];
                $child$$inline_9518_params$$inline_9521$$ && ($group$$inline_9519_minLabel$$inline_9513$$ = $child$$inline_9518_params$$inline_9521$$.$getAttr$("g"), $groupLabel$$inline_9520_maxLabel$$inline_9514$$ = $child$$inline_9518_params$$inline_9521$$.$getAttr$("l"), $child$$inline_9518_params$$inline_9521$$ = {color:$child$$inline_9518_params$$inline_9521$$.$getAttr$("c"), pattern:$child$$inline_9518_params$$inline_9521$$.$getAttr$("p")}, $attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$.add($group$$inline_9519_minLabel$$inline_9513$$, 
                $groupLabel$$inline_9520_maxLabel$$inline_9514$$, $child$$inline_9518_params$$inline_9521$$))
              }
            }
            $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.$attrGroups$ || ($attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.$attrGroups$ = []);
            $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.$attrGroups$.push({$attrGroups$:$attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$, $templateId$:$ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$, id:$JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$})
          }else {
            if("styles" == $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$) {
              $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$styles$ = this.$_parseStyles$($attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$, $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$)
            }else {
              if("a" == $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$) {
                $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$ = [];
                $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$ = $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.$getChildNodes$();
                for($attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ = 0;$attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ < $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.length;$attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$++) {
                  $childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$ = $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$[$attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$].$getAttr$("id"), $i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$ = $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$[$attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$].$getAttr$("l"), 
                  $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$.push({id:$childNodes$$inline_9516_i$$inline_5612_id$$inline_9527_ramp$$inline_9515_xmlNode$$inline_9506$$, text:$i$$inline_9517_maxValue$$inline_9512_text$$inline_9528$$})
                }
                $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$ancestors$ = $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$
              }else {
                if("resources" == $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$) {
                  $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$ = {};
                  $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$ = $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.getAttributes();
                  for($attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ = 0;$attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$ < $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$.length;$attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$++) {
                    $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$[$attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$[$attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$].name] = $attrs$$inline_9532_childNodes$$inline_9525_count$$inline_5608_ret$$inline_9507_rootNodes_showPopupBehavior$$inline_5625_xmlNode$$inline_5622$$[$attrGroups$$inline_9508_i$$inline_9526_i$$inline_9533_minValue$$inline_9511_templateMap$$inline_5611$$].value
                  }
                  $JSCompiler_temp_const$$8042_JSCompiler_temp_const$$8130_id$$inline_9509_ret$$inline_5623_size$$inline_5617_temp$$inline_5609_xmlDataNodes$$.$resources$ = $ancestors$$inline_9524_i$$inline_5618_name$$inline_5624_resources$$inline_9531_root$$17_tempName$$inline_5610_templateId$$inline_9510$$
                }
              }
            }
          }
        }
      }
    }
  }
  this.$_applyParsedProperties$($ret$$95_xmlString$$15$$.root, $ret$$95_xmlString$$15$$);
  return $ret$$95_xmlString$$15$$
};
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$70$$) {
  var $ret$$96$$ = {}, $duration$$64_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$70$$.$getAttr$("sel");
  $ret$$96$$.$nodeSelection$ = "none" == $duration$$64_nodeSelectionStr_selectedIdsStr$$ ? D.$JSCompiler_alias_NULL$$ : "single" == $duration$$64_nodeSelectionStr_selectedIdsStr$$ ? "s" : "m";
  $ret$$96$$.$sorting$ = $xmlNode$$70$$.$getAttr$("sort");
  if($duration$$64_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$70$$.$getAttr$("selIds")) {
    $ret$$96$$.$selectedIds$ = $duration$$64_nodeSelectionStr_selectedIdsStr$$.split(",")
  }
  $ret$$96$$.$emptyText$ = $xmlNode$$70$$.$getAttr$("emptyText");
  $ret$$96$$.$legendSource$ = $xmlNode$$70$$.$getAttr$("ls");
  $ret$$96$$.$sizeValueStr$ = $xmlNode$$70$$.$getAttr$("sv");
  $ret$$96$$.$colorValueStr$ = $xmlNode$$70$$.$getAttr$("cv");
  if($duration$$64_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$70$$.$getAttr$("adu")) {
    $ret$$96$$.$animationDuration$ = $duration$$64_nodeSelectionStr_selectedIdsStr$$ / 1E3
  }
  $ret$$96$$.$animationOnDataChange$ = $xmlNode$$70$$.$getAttr$("adc");
  $ret$$96$$.$animationOnDisplay$ = $xmlNode$$70$$.$getAttr$("adi");
  return $ret$$96$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($labelStyle$$11_xmlNode$$71$$) {
  var $ret$$97$$ = {};
  $ret$$97$$.$templateId$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("T");
  $ret$$97$$.$menuId$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("M");
  $ret$$97$$.$agColor$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("ag");
  $ret$$97$$.id = $labelStyle$$11_xmlNode$$71$$.$getAttr$("id");
  $ret$$97$$.size = (0,window.Number)($labelStyle$$11_xmlNode$$71$$.$getAttr$("s"));
  $ret$$97$$.color = $labelStyle$$11_xmlNode$$71$$.$getAttr$("c");
  $ret$$97$$.pattern = $labelStyle$$11_xmlNode$$71$$.$getAttr$("p");
  $ret$$97$$.label = $labelStyle$$11_xmlNode$$71$$.$getAttr$("l");
  $ret$$97$$.$tooltip$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("tt");
  $ret$$97$$.$labelDisplay$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("ld");
  $ret$$97$$.$drilling$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("d");
  $ret$$97$$.$indexInParent$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("iip");
  $ret$$97$$.$disclosed$ = "t" == $labelStyle$$11_xmlNode$$71$$.$getAttr$("di") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  $ret$$97$$.$selectable$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("nsel");
  var $tn$$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("tn");
  $tn$$ && ($ret$$97$$.$templateName$ = $tn$$);
  if($labelStyle$$11_xmlNode$$71$$ = $labelStyle$$11_xmlNode$$71$$.$getAttr$("ls")) {
    $ret$$97$$.$labelStyle$ = new D.$DvtCSSStyle$$($labelStyle$$11_xmlNode$$71$$)
  }
  $ret$$97$$.$agColor$ != D.$JSCompiler_alias_NULL$$ && (this.$_maxAGColor$ = window.Math.max(this.$_maxAGColor$, $ret$$97$$.$agColor$), this.$_minAGColor$ = window.Math.min(this.$_minAGColor$, $ret$$97$$.$agColor$));
  return $ret$$97$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$72$$, $templates$$6$$) {
  if(!$xmlNode$$72$$ || "n" != $xmlNode$$72$$.getName()) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_nodeCount$++;
  var $props$$13_treeNode$$ = this.$ParseNodeAttributes$($xmlNode$$72$$), $props$$13_treeNode$$ = this.$CreateNode$(this.$_view$, $props$$13_treeNode$$, $templates$$6$$);
  (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($props$$13_treeNode$$, this.$_parseChildren$($xmlNode$$72$$, $props$$13_treeNode$$, $templates$$6$$));
  return $props$$13_treeNode$$
};
D.$JSCompiler_prototypeAlias$$.$_parseChildren$ = function $$JSCompiler_prototypeAlias$$$$_parseChildren$$($childNodes$$40_xmlNode$$73$$, $treeNode$$1$$, $templates$$7$$) {
  var $treeNodes$$ = [];
  $childNodes$$40_xmlNode$$73$$ = $childNodes$$40_xmlNode$$73$$.$getChildNodes$();
  for(var $i$$526$$ = 0;$i$$526$$ < $childNodes$$40_xmlNode$$73$$.length;$i$$526$$++) {
    var $child$$78$$ = $childNodes$$40_xmlNode$$73$$[$i$$526$$];
    $child$$78$$ && ("el" == $child$$78$$.getName() ? $templates$$7$$ && $treeNode$$1$$.$SetElAttributes$ && $treeNode$$1$$.$SetElAttributes$((0,D.$DvtPropMap$toELContext$$)($child$$78$$)) : $treeNode$$1$$.$isDisclosed$() && $treeNodes$$.push(this.$_parseDataNode$($child$$78$$, $templates$$7$$)))
  }
  return $treeNodes$$
};
D.$JSCompiler_prototypeAlias$$.$_parseShowPopupBehavior$ = function $$JSCompiler_prototypeAlias$$$$_parseShowPopupBehavior$$($xmlNode$$75$$, $ret$$99$$) {
  var $showPopupBehavior$$2$$ = (0,D.$DvtShowPopupBehavior$newInstance$$)($xmlNode$$75$$), $templateId$$3$$ = $xmlNode$$75$$.$getAttr$("T");
  $ret$$99$$.$spb$ || ($ret$$99$$.$spb$ = {});
  $ret$$99$$.$spb$[$templateId$$3$$] || ($ret$$99$$.$spb$[$templateId$$3$$] = []);
  $ret$$99$$.$spb$[$templateId$$3$$].push($showPopupBehavior$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($node$$229$$, $ret$$101$$) {
  if($node$$229$$) {
    var $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5630_children$$28_templateId$$5$$ = $node$$229$$.$_templateId$;
    if($ret$$101$$.$spb$) {
      var $agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$ = $ret$$101$$.$spb$[$JSCompiler_StaticMethods_processAttrGroups$self$$inline_5630_children$$28_templateId$$5$$];
      $agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$ && $node$$229$$.$setShowPopupBehaviors$($agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$)
    }
    if($ret$$101$$.$attrGroups$) {
      for(var $i$$528$$ = 0;$i$$528$$ < $ret$$101$$.$attrGroups$.length;$i$$528$$++) {
        if($agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$ = $ret$$101$$.$attrGroups$[$i$$528$$], $agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$.$templateId$ == $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5630_children$$28_templateId$$5$$) {
          if($agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$.$attrGroups$ instanceof D.$DvtContinuousAttrGroups$$ && ($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5630_children$$28_templateId$$5$$ = $node$$229$$, $agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$ = $agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$.$attrGroups$.get($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5630_children$$28_templateId$$5$$.$_agColor$))) {
            $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5630_children$$28_templateId$$5$$.$_color$ = $agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$
          }
          break
        }
      }
    }
    if($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5630_children$$28_templateId$$5$$ = $node$$229$$.$getChildNodes$()) {
      for($agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$ = 0;$agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$ < $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5630_children$$28_templateId$$5$$.length;$agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$++) {
        this.$_applyParsedProperties$($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5630_children$$28_templateId$$5$$[$agDef$$1_behaviors$$15_childIndex$$9_color$$inline_5632$$], $ret$$101$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods__getChildNodesByName$$ = function $$JSCompiler_StaticMethods__getChildNodesByName$$$($childNodes$$42$$, $name$$101$$) {
  for(var $nodes$$12$$ = [], $i$$529$$ = 0;$i$$529$$ < $childNodes$$42$$.length;$i$$529$$++) {
    var $child$$80$$ = $childNodes$$42$$[$i$$529$$];
    $child$$80$$ && $child$$80$$.getName() == $name$$101$$ && $nodes$$12$$.push($child$$80$$)
  }
  return $nodes$$12$$
};
D.$DvtBaseTreeParser$$.prototype.$_parseStyles$ = function $$DvtBaseTreeParser$$$$$_parseStyles$$($xmlNode$$77$$, $ret$$102$$) {
  var $styles$$17$$ = {}, $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$77$$.$getAttr$("top"));
  $styles$$17$$.BACKGROUND_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$;
  $styles$$17$$.ANIMATION_UPDATE_COLOR_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$.$getStyle$("-tr-animation-update-color");
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$77$$.$getAttr$("node"));
  $styles$$17$$.LABEL_TEXT_DEFAULT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$;
  var $nodeHoverStyle$$2$$ = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$77$$.$getAttr$("node-hover"))), $nodeSelectedStyle$$2$$ = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$77$$.$getAttr$("node-selected")));
  $ret$$102$$.$dropSiteFillColor$ = $xmlNode$$77$$.$getAttr$("dsf");
  $ret$$102$$.$dropSiteBorderColor$ = $xmlNode$$77$$.$getAttr$("dsb");
  $ret$$102$$.$dropSiteOpacity$ = $xmlNode$$77$$.$getAttr$("dso");
  this.$ParseAdditionalNodeStyles$($attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$, $nodeHoverStyle$$2$$, $nodeSelectedStyle$$2$$, $styles$$17$$);
  this.$ParseAdditionalStyles$($xmlNode$$77$$, $styles$$17$$);
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$77$$.$getAttr$("rootText"));
  $styles$$17$$.TEXT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$77$$.$getAttr$("attrType"));
  $styles$$17$$.ATTRIBUTE_TYPE_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$77$$.$getAttr$("attrValue"));
  $styles$$17$$.ATTRIBUTE_VALUE_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$77$$.$getAttr$("drillText"));
  $styles$$17$$.DRILL_TEXT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$77$$.$getAttr$("currentText"));
  $styles$$17$$.CURRENT_TEXT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$2_textStyle$$12_topStyle$$;
  return $styles$$17$$
};
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalNodeStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeNode$$, D.$DvtObj$$, "DvtBaseTreeNode");
D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$ = new D.$DvtShadow$$("#000000", 2, 5, 5, 45, 0.5);
D.$DvtBaseTreeNode$$.prototype.Init = function $$DvtBaseTreeNode$$$$Init$($treeView$$7$$, $props$$10$$, $templates$$5$$) {
  this.$_view$ = $treeView$$7$$;
  this.$_templateId$ = $props$$10$$.$templateId$;
  this.$_menuId$ = $props$$10$$.$menuId$;
  this.$_agColor$ = $props$$10$$.$agColor$;
  this.$_id$ = $props$$10$$.id;
  this.$_size$ = $props$$10$$.size;
  this.$_color$ = $props$$10$$.color ? $props$$10$$.color : "#000000";
  this.$_pattern$ = $props$$10$$.pattern;
  this.$_textStr$ = $props$$10$$.label;
  this.$_datatip$ = $props$$10$$.$tooltip$;
  this.$_labelStyle$ = $props$$10$$.$labelStyle$;
  this.$_drilling$ = $props$$10$$.$drilling$;
  this.$_disclosed$ = $props$$10$$.$disclosed$;
  this.$_indexInParent$ = $props$$10$$.$indexInParent$;
  this.$_bArtificialRoot$ = $props$$10$$.$bArtificialRoot$;
  this.$_alpha$ = 1;
  this.$_lastVisitedChild$ = D.$JSCompiler_alias_NULL$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_templates$ = $templates$$5$$;
  $props$$10$$.$templateName$ ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, $props$$10$$.$templateName$) : $templates$$5$$ && $templates$$5$$.content ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content") : $templates$$5$$ && $templates$$5$$.rootContent && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "rootContent");
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$;
  this.$Selectable$ = $props$$10$$.$selectable$
};
D.$JSCompiler_StaticMethods_setChildNodes$$ = function $$JSCompiler_StaticMethods_setChildNodes$$$($JSCompiler_StaticMethods_setChildNodes$self$$, $children$$24$$) {
  if($children$$24$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$515$$ = 0;$i$$515$$ < $children$$24$$.length;$i$$515$$++) {
      $children$$24$$[$i$$515$$].$_parent$ = $JSCompiler_StaticMethods_setChildNodes$self$$
    }
  }
  $JSCompiler_StaticMethods_setChildNodes$self$$.$_children$ = $children$$24$$
};
D.$DvtBaseTreeNode$$.prototype.$getChildNodes$ = (0,D.$JSCompiler_get$$)("$_children$");
D.$JSCompiler_StaticMethods_getDescendantNodes$$ = function $$JSCompiler_StaticMethods_getDescendantNodes$$$($JSCompiler_StaticMethods_getDescendantNodes$self$$) {
  var $descendants$$4$$ = [], $childDescendants$$, $child$$74$$;
  if(!$JSCompiler_StaticMethods_getDescendantNodes$self$$.$hasChildren$()) {
    return $descendants$$4$$
  }
  for(var $i$$516$$ = 0;$i$$516$$ < $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$.length;$i$$516$$++) {
    $child$$74$$ = $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$[$i$$516$$], $childDescendants$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($child$$74$$), $descendants$$4$$.push($child$$74$$), $descendants$$4$$ = $descendants$$4$$.concat($childDescendants$$)
  }
  return $descendants$$4$$
};
D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$ = function $$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$$($JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$) {
  var $parent$$81$$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$.$_parent$;
  $parent$$81$$ && ($parent$$81$$.$_lastVisitedChild$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$)
};
D.$JSCompiler_StaticMethods_isDescendantOf$$ = function $$JSCompiler_StaticMethods_isDescendantOf$$$($JSCompiler_StaticMethods_isDescendantOf$self$$, $node$$222$$) {
  return!$node$$222$$ || !$JSCompiler_StaticMethods_isDescendantOf$self$$.$_parent$ ? D.$JSCompiler_alias_FALSE$$ : $JSCompiler_StaticMethods_isDescendantOf$self$$.$_parent$ == $node$$222$$ ? D.$JSCompiler_alias_TRUE$$ : (0,D.$JSCompiler_StaticMethods_isDescendantOf$$)($JSCompiler_StaticMethods_isDescendantOf$self$$.$_parent$, $node$$222$$)
};
D.$JSCompiler_StaticMethods_GetNodesAtDepth$$ = function $$JSCompiler_StaticMethods_GetNodesAtDepth$$$($JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$25$$, $child$$75_root$$15$$, $depth$$8$$) {
  var $returnArray$$ = [];
  if(0 > $depth$$8$$) {
    return $returnArray$$
  }
  if(0 == $depth$$8$$) {
    return[$JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$25$$]
  }
  if($child$$75_root$$15$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$25$$ = $child$$75_root$$15$$.$getChildNodes$();
    for(var $i$$517$$ = 0;$i$$517$$ < $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$25$$.length;$i$$517$$++) {
      $child$$75_root$$15$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$25$$[$i$$517$$], $returnArray$$ = $returnArray$$.concat((0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)($child$$75_root$$15$$, $child$$75_root$$15$$, $depth$$8$$ - 1))
    }
  }
  return $returnArray$$
};
D.$JSCompiler_StaticMethods_getLeafNodes$$ = function $$JSCompiler_StaticMethods_getLeafNodes$$$($JSCompiler_StaticMethods_getLeafNodes$self$$) {
  var $leafNodes$$ = [], $child$$76_childLeafNodes$$;
  if(!$JSCompiler_StaticMethods_getLeafNodes$self$$.$hasChildren$()) {
    return[$JSCompiler_StaticMethods_getLeafNodes$self$$]
  }
  for(var $i$$518$$ = 0;$i$$518$$ < $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$.length;$i$$518$$++) {
    $child$$76_childLeafNodes$$ = $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$[$i$$518$$], $child$$76_childLeafNodes$$ = (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($child$$76_childLeafNodes$$), $leafNodes$$ = $leafNodes$$.concat($child$$76_childLeafNodes$$)
  }
  return $leafNodes$$
};
D.$DvtBaseTreeNode$getNodeById$$ = function $$DvtBaseTreeNode$getNodeById$$$($root$$16$$, $id$$234$$) {
  if($root$$16$$.getId() == $id$$234$$) {
    return $root$$16$$
  }
  for(var $child$$77_node$$223$$ = D.$JSCompiler_alias_NULL$$, $children$$26$$ = $root$$16$$.$getChildNodes$(), $length$$21$$ = $children$$26$$.length, $child$$77_node$$223$$ = D.$JSCompiler_alias_NULL$$, $i$$519$$ = 0;$i$$519$$ < $length$$21$$;$i$$519$$++) {
    if($child$$77_node$$223$$ = $children$$26$$[$i$$519$$], $child$$77_node$$223$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($child$$77_node$$223$$, $id$$234$$)) {
      return $child$$77_node$$223$$
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
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$36$$) {
  this.$_alpha$ = $alpha$$36$$;
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
D.$JSCompiler_prototypeAlias$$.$renderChildren$ = function $$JSCompiler_prototypeAlias$$$$renderChildren$$($container$$81$$) {
  var $children$$27$$ = this.$getChildNodes$();
  if($children$$27$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$520$$ = 0;$i$$520$$ < $children$$27$$.length;$i$$520$$++) {
      $children$$27$$[$i$$520$$].$render$($container$$81$$)
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
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$19$$) {
  return this.$_view$.$__isDragAvailable$($clientIds$$19$$)
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
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$19$$, $oldNode$$10$$) {
  $handler$$19$$.$_bDrill$ || (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$19$$, $oldNode$$10$$.$getChildNodes$(), this.$getChildNodes$());
  var $animationUpdateColor_startState$$1$$ = $oldNode$$10$$.$GetAnimationParams$(), $bSizeChanged_endState$$3$$ = this.$GetAnimationParams$(), $bColorChanged_nodePlayable$$;
  if(!D.$DvtArrayUtils$$.$equals$($animationUpdateColor_startState$$1$$, $bSizeChanged_endState$$3$$) && ($bColorChanged_nodePlayable$$ = new D.$DvtCustomAnimation$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($bColorChanged_nodePlayable$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $bSizeChanged_endState$$3$$), $handler$$19$$.add($bColorChanged_nodePlayable$$, 1), $bSizeChanged_endState$$3$$ = 
  this.$_size$ != $oldNode$$10$$.$_size$, $bColorChanged_nodePlayable$$ = D.$DvtColorUtils$$.$getRGBA$(this.$_color$) != D.$DvtColorUtils$$.$getRGBA$($oldNode$$10$$.$_color$), this.$SetAnimationParams$($animationUpdateColor_startState$$1$$), ($animationUpdateColor_startState$$1$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, D.$JSCompiler_alias_NULL$$, "ANIMATION_UPDATE_COLOR_STYLE")) && ($bSizeChanged_endState$$3$$ || $bColorChanged_nodePlayable$$))) {
    this.$_color$ = $animationUpdateColor_startState$$1$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$20$$) {
  if(!$handler$$20$$.$_bDrill$ || !$handler$$20$$.$_bDrill$ || !($handler$$20$$.$_oldRoot$.getId() == this.getId() || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($handler$$20$$.$_oldAncestors$, this))) {
    this.$setAlpha$(0);
    var $anim$$29_i$$521$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
    $handler$$20$$.add($anim$$29_i$$521$$, 2);
    for($anim$$29_i$$521$$ = 0;$anim$$29_i$$521$$ < this.$_children$.length;$anim$$29_i$$521$$++) {
      this.$_children$[$anim$$29_i$$521$$].$animateInsert$($handler$$20$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$21$$, $container$$82$$) {
  $container$$82$$.$addChild$(this.$_shape$);
  var $anim$$30_i$$522$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
  $handler$$21$$.add($anim$$30_i$$522$$, 0);
  if(!$handler$$21$$.$_bDrill$) {
    for($anim$$30_i$$522$$ = 0;$anim$$30_i$$522$$ < this.$_children$.length;$anim$$30_i$$522$$++) {
      this.$_children$[$anim$$30_i$$522$$].$animateDelete$($handler$$21$$, $container$$82$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return this.$_children$ != D.$JSCompiler_alias_NULL$$ && 0 < this.$_children$.length
};
D.$JSCompiler_StaticMethods_GetDepth$$ = function $$JSCompiler_StaticMethods_GetDepth$$$($JSCompiler_StaticMethods_GetDepth$self_parent$$82$$) {
  var $depth$$9$$ = 0;
  for($JSCompiler_StaticMethods_GetDepth$self_parent$$82$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$82$$.$_parent$;$JSCompiler_StaticMethods_GetDepth$self_parent$$82$$;) {
    $depth$$9$$++, $JSCompiler_StaticMethods_GetDepth$self_parent$$82$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$82$$.$_parent$
  }
  return $depth$$9$$
};
D.$DvtBaseTreeNode$$.prototype.$GetFill$ = function $$DvtBaseTreeNode$$$$$GetFill$$() {
  return this.$_pattern$ ? new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$) : new D.$DvtSolidFill$$(this.$_color$)
};
D.$DvtBaseTreeNode$GetNodeTextColor$$ = function $$DvtBaseTreeNode$GetNodeTextColor$$$($node$$224_r$$61$$) {
  if($node$$224_r$$61$$.$_pattern$) {
    return"#000000"
  }
  var $b$$42_color$$57$$ = $node$$224_r$$61$$.$_color$;
  $node$$224_r$$61$$ = D.$DvtColorUtils$$.$getRed$($b$$42_color$$57$$);
  var $g$$24$$ = D.$DvtColorUtils$$.$getGreen$($b$$42_color$$57$$), $b$$42_color$$57$$ = D.$DvtColorUtils$$.$getBlue$($b$$42_color$$57$$);
  return 128 <= (299 * $node$$224_r$$61$$ + 587 * $g$$24$$ + 114 * $b$$42_color$$57$$) / 1E3 ? "#000000" : "#FFFFFF"
};
D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyLabelTextStyle$$$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$, $text$$72$$) {
  var $defaultFillColor$$1_textStyle$$10$$ = (0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$);
  $text$$72$$.$setSolidFill$($defaultFillColor$$1_textStyle$$10$$);
  $defaultFillColor$$1_textStyle$$10$$ = [];
  $defaultFillColor$$1_textStyle$$10$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE);
  $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$ && $defaultFillColor$$1_textStyle$$10$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$);
  $text$$72$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($defaultFillColor$$1_textStyle$$10$$))
};
D.$JSCompiler_StaticMethods_getResolvedColor$$ = function $$JSCompiler_StaticMethods_getResolvedColor$$$($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$, $color$$58_defaultColor$$, $styleColorKey$$) {
  ($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$.$_view$.$_styles$[$styleColorKey$$]) && ($color$$58_defaultColor$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$);
  return $color$$58_defaultColor$$
};
D.$JSCompiler_StaticMethods_GetTextSize$$ = function $$JSCompiler_StaticMethods_GetTextSize$$$($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$9$$) {
  var $size$$25$$ = 11;
  ($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$9$$ = $JSCompiler_StaticMethods_GetTextSize$self_fontSize$$9$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE.$getFontSize$()) && ($size$$25$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$9$$));
  return $size$$25$$
};
D.$DvtBaseTreeNode$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$DvtBaseTreeNode$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_textStr$");
D.$DvtBaseTreeNode$$.prototype.$SetElAttributes$ = function $$DvtBaseTreeNode$$$$$SetElAttributes$$($elAttrs$$2$$) {
  $elAttrs$$2$$ && !this.$_template$ && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content");
  this.$_elAttributes$ = $elAttrs$$2$$
};
D.$JSCompiler_StaticMethods__setTemplate$$ = function $$JSCompiler_StaticMethods__setTemplate$$$($JSCompiler_StaticMethods__setTemplate$self$$, $tempName$$) {
  $tempName$$ && ($JSCompiler_StaticMethods__setTemplate$self$$.$_template$ = $JSCompiler_StaticMethods__setTemplate$self$$.$_templates$[$tempName$$])
};
D.$DvtBaseTreeNode$$.prototype.$isDoubleClickable$ = function $$DvtBaseTreeNode$$$$$isDoubleClickable$$() {
  return this.$isDrillReplaceEnabled$()
};
D.$DvtBaseTreePeer$$ = function $$DvtBaseTreePeer$$$($node$$220$$, $id$$233$$, $tooltip$$33$$, $datatip$$6$$, $datatipColor$$3$$) {
  this.Init($tooltip$$33$$, $datatip$$6$$, $datatipColor$$3$$);
  this.$_node$ = $node$$220$$;
  this.$_id$ = $id$$233$$;
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
D.$DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($treeView$$4$$, $availSpace$$25$$, $ancestors$$6_dataItems$$, $dims$$52_height$$81_rootLabel$$1$$) {
  var $breadcrumbs$$1_context$$539$$ = $treeView$$4$$.$_context$, $enabledStyle$$1_enabledStyleArray$$ = [];
  $enabledStyle$$1_enabledStyleArray$$.push($treeView$$4$$.$_styles$.TEXT_STYLE);
  $enabledStyle$$1_enabledStyleArray$$.push(new D.$DvtCSSStyle$$(D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
  $enabledStyle$$1_enabledStyleArray$$.push($treeView$$4$$.$_styles$.DRILL_TEXT_STYLE);
  var $enabledStyle$$1_enabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($enabledStyle$$1_enabledStyleArray$$).toString(), $enabledStyleOver$$ = $enabledStyle$$1_enabledStyleArray$$ + "text-decoration: underline;", $disabledStyle_disabledStyleArray$$ = [];
  $disabledStyle_disabledStyleArray$$.push($treeView$$4$$.$_styles$.TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$.push($treeView$$4$$.$_styles$.CURRENT_TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($disabledStyle_disabledStyleArray$$).toString();
  $breadcrumbs$$1_context$$539$$ = new D.$DvtBreadcrumbs$$($breadcrumbs$$1_context$$539$$, $treeView$$4$$.$__processBreadcrumbsEvent$, $treeView$$4$$, {$labelStyle$:$enabledStyle$$1_enabledStyleArray$$, $labelStyleOver$:$enabledStyleOver$$, $labelStyleDown$:$enabledStyleOver$$, $disabledLabelStyle$:$disabledStyle_disabledStyleArray$$});
  $treeView$$4$$.$addChild$($breadcrumbs$$1_context$$539$$);
  $ancestors$$6_dataItems$$ = $ancestors$$6_dataItems$$.slice(0).reverse();
  $ancestors$$6_dataItems$$.push({text:$dims$$52_height$$81_rootLabel$$1$$});
  $breadcrumbs$$1_context$$539$$.$render$({items:$ancestors$$6_dataItems$$}, $availSpace$$25$$.$w$);
  $dims$$52_height$$81_rootLabel$$1$$ = $breadcrumbs$$1_context$$539$$.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($breadcrumbs$$1_context$$539$$, $availSpace$$25$$.x, $availSpace$$25$$.y);
  $dims$$52_height$$81_rootLabel$$1$$ = $dims$$52_height$$81_rootLabel$$1$$.$h$ + D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
  $availSpace$$25$$.y += $dims$$52_height$$81_rootLabel$$1$$;
  $availSpace$$25$$.$h$ -= $dims$$52_height$$81_rootLabel$$1$$;
  $treeView$$4$$.removeChild($breadcrumbs$$1_context$$539$$);
  return $breadcrumbs$$1_context$$539$$
};
D.$DvtTreeLegendRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeLegendRenderer$$, D.$DvtObj$$, "DvtTreeLegendRenderer");
D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
D.$DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
D.$DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($treeView$$2$$, $availSpace$$24$$, $colorSpace_sizeStr$$, $colorStr$$1$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$4_legendDims$$) {
  var $context$$536$$ = $treeView$$2$$.$_context$, $eventManager$$29_labelSpace$$1$$ = $treeView$$2$$.$__getEventManager$(), $legend$$10$$ = new D.$DvtContainer$$($context$$536$$);
  $treeView$$2$$.$addChild$($legend$$10$$);
  var $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$536$$, $treeView$$2$$, $legend$$10$$, $availSpace$$24$$.$w$, $colorSpace_sizeStr$$, $colorStr$$1$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$4_legendDims$$), $borderColor$$30_colorContainer$$ = $treeView$$2$$.$_resources$.alta ? D.$JSCompiler_alias_NULL$$ : "#000000", $legendStyleArray_legendStyles$$ = [];
  $legendStyleArray_legendStyles$$.push($treeView$$2$$.$_styles$.TEXT_STYLE);
  var $legendStyleArray_legendStyles$$ = {borderColor:$borderColor$$30_colorContainer$$, $labelStyle$:(0,D.$DvtCSSStyle$mergeStyles$$)($legendStyleArray_legendStyles$$)}, $borderColor$$30_colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$536$$, $eventManager$$29_labelSpace$$1$$, $legend$$10$$, $availSpace$$24$$.$w$, $availSpace$$24$$.$h$, $attrGroups$$4_legendDims$$, $legendStyleArray_legendStyles$$), $labelDims$$1$$ = $labelContainer$$ ? $labelContainer$$.$getDimensions$() : 
  D.$JSCompiler_alias_NULL$$, $colorDims$$ = $borderColor$$30_colorContainer$$ ? $borderColor$$30_colorContainer$$.$getDimensions$() : D.$JSCompiler_alias_NULL$$;
  if($labelContainer$$ && !$borderColor$$30_colorContainer$$) {
    $labelContainer$$.$setTranslateX$($availSpace$$24$$.y + ($availSpace$$24$$.$w$ - $labelDims$$1$$.$w$) / 2)
  }else {
    if($borderColor$$30_colorContainer$$ && !$labelContainer$$) {
      $borderColor$$30_colorContainer$$.$setTranslateX$($availSpace$$24$$.y + ($availSpace$$24$$.$w$ - $colorDims$$.$w$) / 2)
    }else {
      if($borderColor$$30_colorContainer$$ && $labelContainer$$) {
        var $availWidth$$10$$ = $availSpace$$24$$.$w$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
        $labelDims$$1$$.$w$ + $colorDims$$.$w$ > $availWidth$$10$$ && ($labelDims$$1$$.$w$ > $availWidth$$10$$ / 2 && $colorDims$$.$w$ > $availWidth$$10$$ / 2 ? ($legend$$10$$.removeChild($labelContainer$$), $legend$$10$$.removeChild($borderColor$$30_colorContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$536$$, $treeView$$2$$, $legend$$10$$, $availWidth$$10$$ / 2, $colorSpace_sizeStr$$, $colorStr$$1$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$4_legendDims$$), 
        $borderColor$$30_colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$536$$, $eventManager$$29_labelSpace$$1$$, $legend$$10$$, $availWidth$$10$$ / 2, $availSpace$$24$$.$h$, $attrGroups$$4_legendDims$$, $legendStyleArray_legendStyles$$)) : $labelDims$$1$$.$w$ > $colorDims$$.$w$ ? ($eventManager$$29_labelSpace$$1$$ = $availWidth$$10$$ - $colorDims$$.$w$, $legend$$10$$.removeChild($labelContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$536$$, 
        $treeView$$2$$, $legend$$10$$, $eventManager$$29_labelSpace$$1$$, $colorSpace_sizeStr$$, $colorStr$$1$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$4_legendDims$$)) : ($colorSpace_sizeStr$$ = $availWidth$$10$$ - $labelDims$$1$$.$w$, $legend$$10$$.removeChild($borderColor$$30_colorContainer$$), $borderColor$$30_colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$536$$, $eventManager$$29_labelSpace$$1$$, $legend$$10$$, $colorSpace_sizeStr$$, $availSpace$$24$$.$h$, 
        $attrGroups$$4_legendDims$$, $legendStyleArray_legendStyles$$)), $labelDims$$1$$ = $labelContainer$$.$getDimensions$(), $colorDims$$ = $borderColor$$30_colorContainer$$.$getDimensions$());
        D.$DvtAgent$$.$isRightToLeft$($context$$536$$) ? ($borderColor$$30_colorContainer$$.$setTranslateX$($availSpace$$24$$.x), $labelContainer$$.$setTranslateX$($availSpace$$24$$.x + $availSpace$$24$$.$w$ - $labelDims$$1$$.$w$)) : ($labelContainer$$.$setTranslateX$($availSpace$$24$$.x), $borderColor$$30_colorContainer$$.$setTranslateX$($availSpace$$24$$.x + $availSpace$$24$$.$w$ - $colorDims$$.$w$))
      }
    }
  }
  $attrGroups$$4_legendDims$$ = $legend$$10$$.$getDimensions$();
  $legend$$10$$.$setTranslateY$($availSpace$$24$$.y + $availSpace$$24$$.$h$ - $attrGroups$$4_legendDims$$.$h$);
  $availSpace$$24$$.$h$ -= $attrGroups$$4_legendDims$$.$h$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
  $treeView$$2$$.removeChild($legend$$10$$);
  return $legend$$10$$
};
D.$DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($context$$537_widthPerSection$$, $sizeWidth_treeView$$3$$, $attrTypeStyle_legend$$11$$, $availWidth$$11_x$$245$$, $colorWidth_sizeStr$$1$$, $colorStr$$2$$, $sizeValueStr$$1$$, $colorValueStr$$1$$) {
  var $isRTL$$13$$ = D.$DvtAgent$$.$isRightToLeft$($context$$537_widthPerSection$$), $eventManager$$30$$ = $sizeWidth_treeView$$3$$.$__getEventManager$(), $labelContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($sizeValueStr$$1$$ || $colorValueStr$$1$$) {
    $labelContainer$$1$$ = new D.$DvtContainer$$($context$$537_widthPerSection$$);
    $attrTypeStyle_legend$$11$$.$addChild$($labelContainer$$1$$);
    var $attrValueStyle_textStyle$$9$$ = [];
    $attrValueStyle_textStyle$$9$$.push($sizeWidth_treeView$$3$$.$_styles$.TEXT_STYLE);
    $attrValueStyle_textStyle$$9$$.push($sizeWidth_treeView$$3$$.$_styles$.ATTRIBUTE_TYPE_STYLE);
    $attrTypeStyle_legend$$11$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle_textStyle$$9$$);
    $attrValueStyle_textStyle$$9$$ = [];
    $attrValueStyle_textStyle$$9$$.push($sizeWidth_treeView$$3$$.$_styles$.TEXT_STYLE);
    $attrValueStyle_textStyle$$9$$.push($sizeWidth_treeView$$3$$.$_styles$.ATTRIBUTE_VALUE_STYLE);
    var $attrValueStyle_textStyle$$9$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle_textStyle$$9$$), $sizeLabel$$, $sizeValueLabel$$, $sizeLabelWidth$$, $sizeValueLabelWidth$$;
    $sizeWidth_treeView$$3$$ = 0;
    $sizeValueStr$$1$$ && ($sizeLabel$$ = new D.$DvtOutputText$$($context$$537_widthPerSection$$, $colorWidth_sizeStr$$1$$, 0, 0), $sizeLabel$$.$setCSSStyle$($attrTypeStyle_legend$$11$$), $labelContainer$$1$$.$addChild$($sizeLabel$$), $sizeLabelWidth$$ = $sizeLabel$$.$measureDimensions$().$w$, $sizeValueLabel$$ = new D.$DvtOutputText$$($context$$537_widthPerSection$$, $sizeValueStr$$1$$, 0, 0), $sizeValueLabel$$.$setCSSStyle$($attrValueStyle_textStyle$$9$$), $labelContainer$$1$$.$addChild$($sizeValueLabel$$), 
    $sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $sizeWidth_treeView$$3$$ = $sizeLabelWidth$$ + $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    var $colorLabel$$, $colorValueLabel$$, $colorLabelWidth$$, $colorValueLabelWidth$$;
    $colorWidth_sizeStr$$1$$ = 0;
    $colorValueStr$$1$$ && ($colorLabel$$ = new D.$DvtOutputText$$($context$$537_widthPerSection$$, $colorStr$$2$$, 0, 0), $colorLabel$$.$setCSSStyle$($attrTypeStyle_legend$$11$$), $labelContainer$$1$$.$addChild$($colorLabel$$), $colorLabelWidth$$ = $colorLabel$$.$measureDimensions$().$w$, $colorValueLabel$$ = new D.$DvtOutputText$$($context$$537_widthPerSection$$, $colorValueStr$$1$$, 0, 0), $colorValueLabel$$.$setCSSStyle$($attrValueStyle_textStyle$$9$$), $labelContainer$$1$$.$addChild$($colorValueLabel$$), 
    $colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $colorWidth_sizeStr$$1$$ = $colorLabelWidth$$ + $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    $availWidth$$11_x$$245$$ -= D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
    $sizeWidth_treeView$$3$$ + $colorWidth_sizeStr$$1$$ > $availWidth$$11_x$$245$$ && ($context$$537_widthPerSection$$ = $availWidth$$11_x$$245$$ / 2, $sizeWidth_treeView$$3$$ > $context$$537_widthPerSection$$ && $colorWidth_sizeStr$$1$$ > $context$$537_widthPerSection$$ ? (D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $context$$537_widthPerSection$$ - $sizeLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$30$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0), D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $context$$537_widthPerSection$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = 
    $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$30$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0)) : $sizeWidth_treeView$$3$$ > $colorWidth_sizeStr$$1$$ ? D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $availWidth$$11_x$$245$$ - $colorWidth_sizeStr$$1$$ - $sizeLabelWidth$$ - 
    D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $eventManager$$30$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0) : D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $availWidth$$11_x$$245$$ - 
    $sizeWidth_treeView$$3$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$30$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0));
    $availWidth$$11_x$$245$$ = 0;
    $isRTL$$13$$ ? ($colorValueLabel$$ && ($colorValueLabel$$.$setX$($availWidth$$11_x$$245$$), $availWidth$$11_x$$245$$ += $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorLabel$$.$setX$($availWidth$$11_x$$245$$), $availWidth$$11_x$$245$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $sizeValueLabel$$ && ($sizeValueLabel$$.$setX$($availWidth$$11_x$$245$$), $availWidth$$11_x$$245$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $sizeLabel$$.$setX$($availWidth$$11_x$$245$$))) : ($sizeValueLabel$$ && ($sizeLabel$$.$setX$($availWidth$$11_x$$245$$), $availWidth$$11_x$$245$$ += $sizeLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $sizeValueLabel$$.$setX$($availWidth$$11_x$$245$$), $availWidth$$11_x$$245$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $colorValueLabel$$ && ($colorLabel$$.$setX$($availWidth$$11_x$$245$$), $availWidth$$11_x$$245$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $colorValueLabel$$.$setX$($availWidth$$11_x$$245$$)))
  }
  return $labelContainer$$1$$
};
D.$DvtBaseTreeKeyboardHandler$$ = function $$DvtBaseTreeKeyboardHandler$$$($manager$$13$$) {
  this.Init($manager$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtBaseTreeKeyboardHandler");
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isSelectionEvent$$($event$$470$$) {
  return this.$isNavigationEvent$($event$$470$$) && !$event$$470$$.ctrlKey
};
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isMultiSelectEvent$$($event$$471$$) {
  return 32 == $event$$471$$.keyCode && $event$$471$$.ctrlKey
};
D.$DvtBaseTreeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtBaseTreeDefaults");
D.$DvtBaseTreeDefaults$VERSION_1$$ = {skin:"skyros", emptyText:"No data to display", nodeDefaults:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{_attributeTypeTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"), _attributeValueTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;")}, 
_resources:{}};
D.$DvtBaseTreeDefaults$$.prototype.Init = function $$DvtBaseTreeDefaults$$$$Init$($defaultsMap$$2_ret$$94$$) {
  $defaultsMap$$2_ret$$94$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$94$$.skyros, D.$DvtBaseTreeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$94$$.alta, {})};
  D.$DvtBaseTreeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$2_ret$$94$$)
};
D.$DvtBaseTreeJsonUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeJsonUtils$$, D.$DvtObj$$, "DvtBaseTreeJsonUtils");
D.$DvtBaseTreeJsonUtils$$.prototype.$toXml$ = function $$DvtBaseTreeJsonUtils$$$$$toXml$$($JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$) {
  var $JSCompiler_temp_const$$176_ret$$86_ret$$inline_5582$$;
  $JSCompiler_temp_const$$176_ret$$86_ret$$inline_5582$$ = "\x3c" + this.$GetComponentName$();
  $JSCompiler_temp_const$$176_ret$$86_ret$$inline_5582$$ += this.$WriteComponentAttributes$($JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$);
  $JSCompiler_temp_const$$176_ret$$86_ret$$inline_5582$$ += "\x3e\n";
  if($JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ && $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$.nodes) {
    for(var $JSCompiler_temp_const$$8027_nodes$$10_ret$$inline_5586$$ = $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$.nodes, $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$ = 0;$attrGroups$$inline_9500_groups$$inline_9502_i$$509$$ < $JSCompiler_temp_const$$8027_nodes$$10_ret$$inline_5586$$.length;$attrGroups$$inline_9500_groups$$inline_9502_i$$509$$++) {
      $JSCompiler_temp_const$$176_ret$$86_ret$$inline_5582$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)(this, $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$, $JSCompiler_temp_const$$8027_nodes$$10_ret$$inline_5586$$[$attrGroups$$inline_9500_groups$$inline_9502_i$$509$$])
    }
  }
  $JSCompiler_temp_const$$8027_nodes$$10_ret$$inline_5586$$ = "\x3ca/\x3e\n" + this.$WriteResourcesElement$($JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$);
  $JSCompiler_temp_const$$8027_nodes$$10_ret$$inline_5586$$ += this.$WriteStyleElement$($JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$);
  if($attrGroups$$inline_9500_groups$$inline_9502_i$$509$$ = $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$.attributeGroups ? $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$) {
    if($JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ = '\x3cag id\x3d"' + $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$.id + '"', "continuous" == $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$.attributeType) {
      $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("t", "continuous"), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("ramp", $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$.colors.join(";")), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("minValue", $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$.min), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("maxValue", 
      $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$.max), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("minLabel", $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$.minLabel), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("maxLabel", $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$.maxLabel), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += "/\x3e"
    }else {
      $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += "\x3e\n";
      for(var $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$ = $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$.groups, $i$$inline_9503$$ = 0;$i$$inline_9503$$ < $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$.length;$i$$inline_9503$$++) {
        $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += "\x3ci", $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("g", $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$[$i$$inline_9503$$].id), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("l", $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$[$i$$inline_9503$$].label), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("c", 
        $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$[$i$$inline_9503$$].color), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += this.$WriteAttr$("p", $attrGroups$$inline_9500_groups$$inline_9502_i$$509$$[$i$$inline_9503$$].pattern), $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += "/\x3e\n"
      }
      $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ += "\x3c/ag\x3e\n"
    }
  }else {
    $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ = ""
  }
  $JSCompiler_temp_const$$8027_nodes$$10_ret$$inline_5586$$ = $JSCompiler_temp_const$$8027_nodes$$10_ret$$inline_5586$$ + $JSCompiler_inline_result$$8028_options$$83_ret$$inline_9501$$ + ("\x3c/" + this.$GetComponentName$() + "\x3e");
  return $JSCompiler_temp_const$$176_ret$$86_ret$$inline_5582$$ += $JSCompiler_temp_const$$8027_nodes$$10_ret$$inline_5586$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteAttr$ = function $$DvtBaseTreeJsonUtils$$$$$WriteAttr$$($attrName$$4$$, $value$$98$$) {
  return $value$$98$$ != D.$JSCompiler_alias_NULL$$ ? " " + $attrName$$4$$ + '\x3d"' + $value$$98$$ + '"' : ""
};
D.$DvtBaseTreeJsonUtils$$.prototype.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteComponentAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteComponentAttributes$$($options$$85$$) {
  var $ret$$88$$;
  $ret$$88$$ = "" + this.$WriteAttr$("sv", $options$$85$$.sizeLabel);
  $ret$$88$$ += this.$WriteAttr$("cv", $options$$85$$.colorLabel);
  var $attrGroups$$6_selectedNodes$$4$$ = $options$$85$$.attributeGroups ? $options$$85$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$;
  $attrGroups$$6_selectedNodes$$4$$ && ($ret$$88$$ += this.$WriteAttr$("ls", $attrGroups$$6_selectedNodes$$4$$.id));
  for(var $attrGroups$$6_selectedNodes$$4$$ = $options$$85$$.selectedNodes ? $options$$85$$.selectedNodes : [], $selectedNodeStr$$ = "", $i$$510$$ = 0;$i$$510$$ < $attrGroups$$6_selectedNodes$$4$$.length;$i$$510$$++) {
    0 < $selectedNodeStr$$.length && ($selectedNodeStr$$ += ","), $selectedNodeStr$$ += $attrGroups$$6_selectedNodes$$4$$[$i$$510$$]
  }
  0 < $selectedNodeStr$$.length && ($ret$$88$$ += this.$WriteAttr$("selIds", $selectedNodeStr$$));
  $ret$$88$$ += this.$WriteAttr$("adu", $options$$85$$.animationDuration);
  $ret$$88$$ += this.$WriteAttr$("adc", $options$$85$$.animationOnDataChange);
  $ret$$88$$ += this.$WriteAttr$("emptyText", $options$$85$$.emptyText);
  $ret$$88$$ += this.$WriteAttr$("sel", $options$$85$$.selection);
  return $ret$$88$$ += this.$WriteAttr$("sort", $options$$85$$.sorting)
};
D.$JSCompiler_StaticMethods_WriteNodeElement$$ = function $$JSCompiler_StaticMethods_WriteNodeElement$$$($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$87$$, $nodeData$$16_nodes$$11$$) {
  var $ret$$90$$;
  $ret$$90$$ = "\x3cn" + $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteNodeAttributes$($options$$87$$, $nodeData$$16_nodes$$11$$);
  if($nodeData$$16_nodes$$11$$ && $nodeData$$16_nodes$$11$$.nodes && 0 < $nodeData$$16_nodes$$11$$.nodes.length) {
    $ret$$90$$ += $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteAttr$("di", "t");
    $ret$$90$$ += "\x3e\n";
    $nodeData$$16_nodes$$11$$ = $nodeData$$16_nodes$$11$$.nodes;
    for(var $i$$511$$ = 0;$i$$511$$ < $nodeData$$16_nodes$$11$$.length;$i$$511$$++) {
      $ret$$90$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$87$$, $nodeData$$16_nodes$$11$$[$i$$511$$])
    }
    $ret$$90$$ += "\x3c/n\x3e\n"
  }else {
    $ret$$90$$ += "/\x3e\n"
  }
  return $ret$$90$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteNodeAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteNodeAttributes$$($options$$88$$, $nodeData$$17$$) {
  var $ret$$91$$;
  $ret$$91$$ = "" + this.$WriteAttr$("id", $nodeData$$17$$.id);
  $ret$$91$$ += this.$WriteAttr$("s", $nodeData$$17$$.value);
  $ret$$91$$ += this.$WriteAttr$("c", $nodeData$$17$$.color);
  $ret$$91$$ += this.$WriteAttr$("l", $nodeData$$17$$.label);
  $ret$$91$$ += this.$WriteAttr$("p", $nodeData$$17$$.pattern);
  $ret$$91$$ += this.$WriteAttr$("tt", $nodeData$$17$$.shortDesc ? $nodeData$$17$$.shortDesc : $nodeData$$17$$.tooltip);
  $ret$$91$$ += this.$WriteAttr$("ls", $nodeData$$17$$.labelStyle ? $nodeData$$17$$.labelStyle : $options$$88$$.nodeDefaults.labelStyle);
  var $drilling$$ = $nodeData$$17$$.drilling ? $nodeData$$17$$.drilling : $options$$88$$.nodeDefaults.drilling;
  "insert" == $drilling$$ ? $ret$$91$$ += this.$WriteAttr$("d", "i") : "replace" == $drilling$$ ? $ret$$91$$ += this.$WriteAttr$("d", "r") : "insertAndReplace" == $drilling$$ && ($ret$$91$$ += this.$WriteAttr$("d", "ir"));
  return $ret$$91$$ += this.$WriteAttr$("nsel", $nodeData$$17$$.selectable ? $nodeData$$17$$.selectable : "auto")
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteResourcesElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteStyleElement$ = function $$DvtBaseTreeJsonUtils$$$$$WriteStyleElement$$($options$$91$$) {
  var $ret$$93$$;
  $ret$$93$$ = "\x3cstyles " + this.$WriteAttr$("attrType", $options$$91$$.styleDefaults._attributeTypeTextStyle);
  return $ret$$93$$ += this.$WriteAttr$("attrValue", $options$$91$$.styleDefaults._attributeValueTextStyle)
};
D.$DvtTreeAutomation$$ = function $$DvtTreeAutomation$$$($treeView$$5$$) {
  this.$_Init$($treeView$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreeAutomation$$, D.$DvtObj$$, "DvtTreeAutomation");
D.$DvtTreeAutomation$$.prototype.$_Init$ = (0,D.$JSCompiler_set$$)("$_treeView$");
D.$DvtTreeAutomation$$.prototype.click = function $$DvtTreeAutomation$$$$click$($subId$$12$$) {
  this.$processSubId$($subId$$12$$, 0)
};
D.$DvtTreeAutomation$$.prototype.$processSubId$ = function $$DvtTreeAutomation$$$$$processSubId$$($subId$$13$$, $event$$468$$) {
  $event$$468$$ === D.$JSCompiler_alias_VOID$$ && ($event$$468$$ = -1);
  if($subId$$13$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $str$$17$$;
  if(-1 != $event$$468$$) {
    if(0 == $event$$468$$) {
      var $foundNode_subIdArray$$ = (0,D.$DvtTreeAutomation$_convertSubIdToArray$$)($subId$$13$$);
      $foundNode_subIdArray$$ && "node" == $foundNode_subIdArray$$[0] && ($foundNode_subIdArray$$ = (0,D.$DvtTreeAutomation$_FindNode$$)(this.$_treeView$.$_root$, $foundNode_subIdArray$$, 1)) && (0,D.$JSCompiler_StaticMethods_dispatchDisplayableEvent$$)($foundNode_subIdArray$$.$getDisplayable$(), D.$DvtMouseEvent$CLICK$$)
    }
  }else {
    if(($foundNode_subIdArray$$ = (0,D.$DvtTreeAutomation$_convertSubIdToArray$$)($subId$$13$$)) && "node" == $foundNode_subIdArray$$[0]) {
      var $lastIndex$$ = $foundNode_subIdArray$$.length - 1, $subSubId$$ = $foundNode_subIdArray$$[$lastIndex$$];
      0 <= $subSubId$$.indexOf("#") && ($foundNode_subIdArray$$[$lastIndex$$] = D.$JSCompiler_alias_NULL$$, ($foundNode_subIdArray$$ = (0,D.$DvtTreeAutomation$_FindNode$$)(this.$_treeView$.$_root$, $foundNode_subIdArray$$, 1)) && ("#label" == $subSubId$$ ? $str$$17$$ = $foundNode_subIdArray$$.$getLabel$() : "#size" == $subSubId$$ ? $str$$17$$ = $foundNode_subIdArray$$.$getSize$() : "#color" == $subSubId$$ ? $str$$17$$ = $foundNode_subIdArray$$.$getColor$() : "#tooltip" == $subSubId$$ && ($str$$17$$ = 
      $foundNode_subIdArray$$.$getDatatip$())))
    }
  }
  return $str$$17$$
};
D.$DvtTreeAutomation$_FindNode$$ = function $$DvtTreeAutomation$_FindNode$$$($children$$23_node$$221$$, $path$$17$$, $pathArrayIndex$$) {
  var $foundNode$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($children$$23_node$$221$$.$_indexInParent$ == $path$$17$$[$pathArrayIndex$$]) {
    if($path$$17$$[$pathArrayIndex$$ + 1] == D.$JSCompiler_alias_NULL$$) {
      $foundNode$$1$$ = $children$$23_node$$221$$
    }else {
      if($children$$23_node$$221$$ = $children$$23_node$$221$$.$getChildNodes$()) {
        for(var $i$$513$$ = 0;$i$$513$$ < $children$$23_node$$221$$.length && !($foundNode$$1$$ = (0,D.$DvtTreeAutomation$_FindNode$$)($children$$23_node$$221$$[$i$$513$$], $path$$17$$, $pathArrayIndex$$ + 1));$i$$513$$++) {
        }
      }
    }
  }
  return $foundNode$$1$$
};
D.$DvtTreeAutomation$_convertSubIdToArray$$ = function $$DvtTreeAutomation$_convertSubIdToArray$$$($array$$25_subId$$14$$) {
  $array$$25_subId$$14$$ = $array$$25_subId$$14$$.split("[");
  var $sRet$$inline_5597_subSubId$$1$$;
  $sRet$$inline_5597_subSubId$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($array$$25_subId$$14$$ && 0 <= $array$$25_subId$$14$$.length) {
    var $len$$21_target$$inline_5598$$ = $array$$25_subId$$14$$.length - 1, $elem$$inline_5599_i$$514$$ = $array$$25_subId$$14$$[$len$$21_target$$inline_5598$$], $elem$$35_sepIdx$$inline_5600_tempId$$ = $elem$$inline_5599_i$$514$$.indexOf("#");
    0 < $elem$$35_sepIdx$$inline_5600_tempId$$ && ($array$$25_subId$$14$$[$len$$21_target$$inline_5598$$] = $elem$$inline_5599_i$$514$$.substr(0, $elem$$35_sepIdx$$inline_5600_tempId$$), $sRet$$inline_5597_subSubId$$1$$ = $elem$$inline_5599_i$$514$$.substr($elem$$35_sepIdx$$inline_5600_tempId$$))
  }
  $len$$21_target$$inline_5598$$ = $array$$25_subId$$14$$.length;
  for($elem$$inline_5599_i$$514$$ = 1;$elem$$inline_5599_i$$514$$ < $len$$21_target$$inline_5598$$;$elem$$inline_5599_i$$514$$++) {
    $elem$$35_sepIdx$$inline_5600_tempId$$ = $array$$25_subId$$14$$[$elem$$inline_5599_i$$514$$], $elem$$35_sepIdx$$inline_5600_tempId$$ = $elem$$35_sepIdx$$inline_5600_tempId$$.substr(0, $elem$$35_sepIdx$$inline_5600_tempId$$.length - 1), window.tempIdAsNumber = (0,window.parseFloat)($elem$$35_sepIdx$$inline_5600_tempId$$), $elem$$35_sepIdx$$inline_5600_tempId$$ = (0,window.isNaN)(window.tempIdAsNumber) ? $elem$$35_sepIdx$$inline_5600_tempId$$ : window.tempIdAsNumber, $array$$25_subId$$14$$[$elem$$inline_5599_i$$514$$] = 
    $elem$$35_sepIdx$$inline_5600_tempId$$
  }
  $sRet$$inline_5597_subSubId$$1$$ && ($array$$25_subId$$14$$[$len$$21_target$$inline_5598$$] = $sRet$$inline_5597_subSubId$$1$$);
  return $array$$25_subId$$14$$
};
});