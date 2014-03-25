define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtComboBox$$ = function $$DvtComboBox$$$($context$$114$$, $id$$20$$, $styleMap$$43$$) {
  this.Init($context$$114$$, $id$$20$$, $styleMap$$43$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBox$$, D.$DvtContainer$$, "DvtComboBox");
D.$DvtComboBox$$.prototype.Init = function $$DvtComboBox$$$$Init$($context$$115$$, $id$$21$$, $styleMap$$44$$) {
  D.$DvtComboBox$$.$superclass$.Init.call(this, $context$$115$$, D.$JSCompiler_alias_NULL$$, $id$$21$$);
  this.$_styleMap$ = $styleMap$$44$$;
  this.$_itemButtonStates$ = [];
  this.$_items$ = [];
  this.$_tooltips$ = [];
  this.$_selectedIndex$ = 0;
  this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxItemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_dim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_tooltipManager$ = $context$$115$$.$getTooltipManager$();
  this.$_isTouchDevice$ = D.$DvtAgent$$.$isTouchDevice$();
  this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $id$$21$$ + "_cl");
  this.$addChild$(this.$_button$);
  this.$_contentArea$ = new D.$DvtContainer$$($context$$115$$);
  this.$_contentArea$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_contentArea$);
  this.$_hideDropdownTimer$ = new D.$DvtTimer$$($context$$115$$, 100, this.$HandleHideDropdownTimer$, this, 1);
  this.$_outOfFocusCheckTimer$ = new D.$DvtTimer$$($context$$115$$, 100, this.$HandleOutOfFocusCheckTimer$, this, 1);
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtComboBox$$.prototype.$setSelectedIndex$ = function $$DvtComboBox$$$$$setSelectedIndex$$($comboBoxEvent$$inline_1342_selectedIndex$$) {
  this.$_selectedIndex$ = $comboBoxEvent$$inline_1342_selectedIndex$$;
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this);
  $comboBoxEvent$$inline_1342_selectedIndex$$ = new D.$DvtComboBoxEvent$$("cbItemChange", $comboBoxEvent$$inline_1342_selectedIndex$$, this.$_event$);
  this.$_event$ = D.$JSCompiler_alias_NULL$$;
  this.$FireListener$($comboBoxEvent$$inline_1342_selectedIndex$$)
};
D.$JSCompiler_StaticMethods_createButton$$ = function $$JSCompiler_StaticMethods_createButton$$$($JSCompiler_StaticMethods_createButton$self$$, $id$$22$$) {
  var $JSCompiler_temp_const$$93_button$$8$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_1347_s$$inline_1348$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_1347_s$$inline_1348$$ = new D.$DvtRect$$($context$$inline_1346_dim$$inline_1353_s$$inline_1354$$, 0, 0, $dim$$inline_1347_s$$inline_1348$$.$w$, $dim$$inline_1347_s$$inline_1348$$.$h$, 
  $id$$22$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_1347_s$$inline_1348$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dim$$inline_1347_s$$inline_1348$$);
  $dim$$inline_1347_s$$inline_1348$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_1346_dim$$inline_1353_s$$inline_1354$$, $dim$$inline_1347_s$$inline_1348$$.getWidth(), $dim$$inline_1347_s$$inline_1348$$.getHeight()));
  var $context$$inline_1352_context$$inline_1358$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$ = new D.$DvtRect$$($context$$inline_1352_context$$inline_1358$$, 0, 0, $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$.$w$, $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$.$h$, $id$$22$$ + "_up");
  $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$, D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$]));
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($context$$inline_1346_dim$$inline_1353_s$$inline_1354$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_1352_context$$inline_1358$$, $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$.getWidth(), $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$.getHeight()));
  var $context$$inline_1352_context$$inline_1358$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_1359_s$$inline_1360$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_1359_s$$inline_1360$$ = new D.$DvtRect$$($context$$inline_1352_context$$inline_1358$$, 0, 0, $dim$$inline_1359_s$$inline_1360$$.$w$, $dim$$inline_1359_s$$inline_1360$$.$h$, $id$$22$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_1359_s$$inline_1360$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $dim$$inline_1359_s$$inline_1360$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $dim$$inline_1359_s$$inline_1360$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$, D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$]));
  $dim$$inline_1359_s$$inline_1360$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_1352_context$$inline_1358$$, $dim$$inline_1359_s$$inline_1360$$.getWidth(), $dim$$inline_1359_s$$inline_1360$$.getHeight()));
  $JSCompiler_temp_const$$93_button$$8$$ = new D.$DvtButton$$($JSCompiler_temp_const$$93_button$$8$$, $dim$$inline_1347_s$$inline_1348$$, $context$$inline_1346_dim$$inline_1353_s$$inline_1354$$, $dim$$inline_1359_s$$inline_1360$$, D.$JSCompiler_alias_NULL$$, $id$$22$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_temp_const$$93_button$$8$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$93_button$$8$$.setCursor("pointer");
  $JSCompiler_StaticMethods_createButton$self$$.$_isTouchDevice$ || $JSCompiler_temp_const$$93_button$$8$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleButtonDown$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$93_button$$8$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  return $JSCompiler_temp_const$$93_button$$8$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtComboBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($obj$$38$$, $buttonStates_itdim_tooltip$$8$$, $enaState$$1$$, $ovrState$$1$$, $dwnState$$1$$) {
  $obj$$38$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_items$.push($obj$$38$$);
  this.$_tooltips$.push($buttonStates_itdim_tooltip$$8$$);
  $buttonStates_itdim_tooltip$$8$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, $enaState$$1$$ ? $enaState$$1$$ : $obj$$38$$);
  var $maxItemDim$$ = this.$_maxItemDim$, $dim$$12$$ = this.$getDimensions$();
  $buttonStates_itdim_tooltip$$8$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $buttonStates_itdim_tooltip$$8$$.$w$, $dim$$12$$.$w$ = $buttonStates_itdim_tooltip$$8$$.$w$ + 16);
  $buttonStates_itdim_tooltip$$8$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $buttonStates_itdim_tooltip$$8$$.$h$, $dim$$12$$.$h$ = $buttonStates_itdim_tooltip$$8$$.$h$);
  this.$_maxItemDim$ = $maxItemDim$$;
  $buttonStates_itdim_tooltip$$8$$ = D.$JSCompiler_alias_NULL$$;
  $enaState$$1$$ && ($ovrState$$1$$ && $dwnState$$1$$) && ($buttonStates_itdim_tooltip$$8$$ = [], $buttonStates_itdim_tooltip$$8$$[0] = $enaState$$1$$, $buttonStates_itdim_tooltip$$8$$[1] = $ovrState$$1$$, $buttonStates_itdim_tooltip$$8$$[2] = $dwnState$$1$$);
  this.$_itemButtonStates$.push($buttonStates_itdim_tooltip$$8$$);
  this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $obj$$38$$.getId()), this.$addChildAt$(this.$_button$, 0), (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this))
};
D.$JSCompiler_prototypeAlias$$.getItem = function $$JSCompiler_prototypeAlias$$$getItem$($i$$56$$) {
  return this.$_items$[$i$$56$$]
};
D.$JSCompiler_prototypeAlias$$.$getSelectedItem$ = function $$JSCompiler_prototypeAlias$$$$getSelectedItem$$() {
  var $selIndex$$ = this.$_selectedIndex$;
  return 0 > $selIndex$$ || $selIndex$$ > this.$_items$.length - 1 ? D.$JSCompiler_alias_NULL$$ : this.$_items$[$selIndex$$]
};
D.$JSCompiler_prototypeAlias$$.$HandleExpandClick$ = function $$JSCompiler_prototypeAlias$$$$HandleExpandClick$$($context$$120_event$$73_stage$$2$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($context$$120_event$$73_stage$$2$$);
  this.$_bRemoveDropdown$ && (this.$_bRemoveDropdown$ = D.$JSCompiler_alias_FALSE$$, this.$_dropdown$ && (this.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = D.$JSCompiler_alias_NULL$$));
  $context$$120_event$$73_stage$$2$$ = this.$_context$;
  for(var $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : D.$JSCompiler_alias_NULL$$, $bgAlpha$$inline_1380_leftPadding$$inline_1366$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$, "paddingLeft", 0), $bottomPadding$$inline_1367$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$, "paddingBottom", 0), $rightPadding$$inline_1368$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$, 
  "paddingRight", 0), $interItemPadding$$inline_1369$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$, "paddingInner", 0), $currY$$inline_1370$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$, "paddingTop", 0), $context$$inline_1371$$ = this.$_context$, $dim$$inline_1372_proxy$$inline_1377$$, $itemSprite$$inline_1373$$, $item$$inline_1374$$, $bgColor$$inline_1379_content$$inline_1375_dim$$13$$ = new D.$DvtContainer$$($context$$inline_1371$$, 
  "__dd"), $i$$inline_1376$$ = 0;$i$$inline_1376$$ < this.$_items$.length;$i$$inline_1376$$++) {
    $item$$inline_1374$$ = this.$_items$[$i$$inline_1376$$], $dim$$inline_1372_proxy$$inline_1377$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_1371$$, $item$$inline_1374$$), $itemSprite$$inline_1373$$ = new D.$DvtContainer$$($context$$inline_1371$$, "__it" + $i$$inline_1376$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSprite$$inline_1373$$, $bgAlpha$$inline_1380_leftPadding$$inline_1366$$, $currY$$inline_1370$$), $itemSprite$$inline_1373$$.$addChild$($item$$inline_1374$$), 
    $item$$inline_1374$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $item$$inline_1374$$.setCursor("pointer"), $currY$$inline_1370$$ += $dim$$inline_1372_proxy$$inline_1377$$.$h$ + $interItemPadding$$inline_1369$$, this.$_eventManager$ && ($dim$$inline_1372_proxy$$inline_1377$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, this.$HandleDropdownItemClick$, this.$HandleButtonDown$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_tooltips$[$i$$inline_1376$$]), 
    this.$_eventManager$.$associate$($item$$inline_1374$$, $dim$$inline_1372_proxy$$inline_1377$$)), $bgColor$$inline_1379_content$$inline_1375_dim$$13$$.$addChild$($itemSprite$$inline_1373$$)
  }
  $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$ = D.$DvtButtonLAFUtils$$.$drawDropdownShape$($context$$inline_1371$$, this.$_maxItemDim$.$w$ + $bgAlpha$$inline_1380_leftPadding$$inline_1366$$ + $rightPadding$$inline_1368$$, $currY$$inline_1370$$ + $bottomPadding$$inline_1367$$ - $interItemPadding$$inline_1369$$, $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$);
  $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$.$addChild$($bgColor$$inline_1379_content$$inline_1375_dim$$13$$);
  $bgColor$$inline_1379_content$$inline_1375_dim$$13$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  $bgAlpha$$inline_1380_leftPadding$$inline_1366$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$), (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "borderAlpha", 1));
  $bgColor$$inline_1379_content$$inline_1375_dim$$13$$ && $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$.$setSolidFill$($bgColor$$inline_1379_content$$inline_1375_dim$$13$$, $bgAlpha$$inline_1380_leftPadding$$inline_1366$$);
  this.$_dropdown$ = $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$;
  $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$120_event$$73_stage$$2$$, this.$_dropdown$);
  this.$addChild$(this.$_dropdown$);
  $bgColor$$inline_1379_content$$inline_1375_dim$$13$$ = this.$_button$.$getDimensions$();
  $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$ = D.$DvtAgent$$.$isRightToLeft$($context$$120_event$$73_stage$$2$$) ? -$comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$.$w$ + 1 * $bgColor$$inline_1379_content$$inline_1375_dim$$13$$.$w$ / 4 : 3 * $bgColor$$inline_1379_content$$inline_1375_dim$$13$$.$w$ / 4;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_dropdown$, $comboBoxStyles$$inline_1365_dd$$inline_1378_dddim_transX$$1$$, 3 * $bgColor$$inline_1379_content$$inline_1375_dim$$13$$.$h$ / 4);
  this.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$_button$, D.$JSCompiler_alias_TRUE$$);
  this.$FireListener$(new D.$DvtComboBoxEvent$$("cbShowDropdown"));
  ($context$$120_event$$73_stage$$2$$ = $context$$120_event$$73_stage$$2$$.$_stage$) && (this.$_isTouchDevice$ ? $context$$120_event$$73_stage$$2$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this) : $context$$120_event$$73_stage$$2$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$HandleHideDropdownTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleHideDropdownTimer$$() {
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$HandleStageMouseFocusChange$ = function $$JSCompiler_prototypeAlias$$$$HandleStageMouseFocusChange$$() {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outOfFocusCheckTimer$.reset();
  this.$_outOfFocusCheckTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleOutOfFocusCheckTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleOutOfFocusCheckTimer$$() {
  this.$_dropdownItemClickEvent$ || (this.$_hideDropdownTimer$.reset(), this.$_hideDropdownTimer$.start())
};
D.$JSCompiler_prototypeAlias$$.$HandleButtonDown$ = function $$JSCompiler_prototypeAlias$$$$HandleButtonDown$$() {
  (0,D.$DvtEventManager$consumeEvent$$)()
};
D.$JSCompiler_prototypeAlias$$.$HandleDropdownItemClick$ = function $$JSCompiler_prototypeAlias$$$$HandleDropdownItemClick$$($event$$78$$) {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_TRUE$$;
  this.$_hideDropdownTimer$.stop();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$78$$);
  var $displayObject$$inline_1382_eventTarget$$;
  $displayObject$$inline_1382_eventTarget$$ = $event$$78$$.target;
  for(var $content$$1_n$$inline_1383$$, $id$$inline_1384$$;$displayObject$$inline_1382_eventTarget$$;) {
    if(($id$$inline_1384$$ = $displayObject$$inline_1382_eventTarget$$.getId()) && $displayObject$$inline_1382_eventTarget$$ instanceof D.$DvtContainer$$ && "__it" == $id$$inline_1384$$.substr(0, 4)) {
      $content$$1_n$$inline_1383$$ = $displayObject$$inline_1382_eventTarget$$;
      break
    }
    $displayObject$$inline_1382_eventTarget$$ = $displayObject$$inline_1382_eventTarget$$.getParent()
  }
  $displayObject$$inline_1382_eventTarget$$ = $content$$1_n$$inline_1383$$;
  var $index$$52$$;
  this.$_dropdown$ && $displayObject$$inline_1382_eventTarget$$ && ($content$$1_n$$inline_1383$$ = this.$_dropdown$.$getChildAt$(0)) && ($index$$52$$ = $content$$1_n$$inline_1383$$.$getChildIndex$($displayObject$$inline_1382_eventTarget$$));
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_event$ = $event$$78$$;
  this.$setSelectedIndex$($index$$52$$)
};
D.$JSCompiler_StaticMethods_HideDropdown$$ = function $$JSCompiler_StaticMethods_HideDropdown$$$($JSCompiler_StaticMethods_HideDropdown$self$$) {
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_HideDropdown$self$$.$_button$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_HideDropdown$self$$.$FireListener$(new D.$DvtComboBoxEvent$$("cbHideDropdown")), $JSCompiler_StaticMethods_HideDropdown$self$$.$_bRemoveDropdown$ = D.$JSCompiler_alias_TRUE$$);
  var $stage$$3$$ = $JSCompiler_StaticMethods_HideDropdown$self$$.$_context$.$_stage$;
  $stage$$3$$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_isTouchDevice$ ? $stage$$3$$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$) : $stage$$3$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$));
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
};
D.$DvtComboBox$$.prototype.$getDimensions$ = (0,D.$JSCompiler_get$$)("$_dim$");
D.$JSCompiler_StaticMethods_UpdateContentArea$$ = function $$JSCompiler_StaticMethods_UpdateContentArea$$$($JSCompiler_StaticMethods_UpdateContentArea$self$$) {
  var $bUseItem$$ = D.$JSCompiler_alias_TRUE$$, $buttonStates$$1_selIndex$$1$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_selectedIndex$;
  if($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$ && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$.length > $buttonStates$$1_selIndex$$1$$ && ($buttonStates$$1_selIndex$$1$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$[$buttonStates$$1_selIndex$$1$$]) && 2 < $buttonStates$$1_selIndex$$1$$.length) {
    (0,D.$JSCompiler_StaticMethods_setUpState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$1$$[0]), (0,D.$JSCompiler_StaticMethods_setOverState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$1$$[1]), (0,D.$JSCompiler_StaticMethods_setDownState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$1$$[2]), $bUseItem$$ = D.$JSCompiler_alias_FALSE$$
  }
  $bUseItem$$ && (0 < $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$getNumChildren$() && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$removeChildAt$(0), $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$addChild$($JSCompiler_StaticMethods_UpdateContentArea$self$$.$getSelectedItem$()))
};
D.$DvtComboBox$DrawArrow$$ = function $$DvtComboBox$DrawArrow$$$($context$$122_shape$$17$$, $ww$$22$$, $hh$$19$$) {
  var $aPoints$$ = [];
  $aPoints$$.push($ww$$22$$ - 12, $hh$$19$$ / 2 - 2);
  $aPoints$$.push($ww$$22$$ - 4, $hh$$19$$ / 2 - 2);
  $aPoints$$.push($ww$$22$$ - 8, $hh$$19$$ / 2 + 2);
  $aPoints$$.push($ww$$22$$ - 12, $hh$$19$$ / 2 - 2);
  $context$$122_shape$$17$$ = new D.$DvtPolygon$$($context$$122_shape$$17$$, $aPoints$$, D.$JSCompiler_alias_NULL$$);
  $context$$122_shape$$17$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$122_shape$$17$$.$setSolidFill$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$122_shape$$17$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$122_shape$$17$$
};
D.$DvtComboBox$$.prototype.$setEventManager$ = (0,D.$JSCompiler_set$$)("$_eventManager$");
D.$DropdownItemSprite$$ = function $$DropdownItemSprite$$$($context$$123$$, $x$$88$$, $y$$65$$, $w$$12$$, $h$$14$$, $id$$27$$) {
  this.Init($context$$123$$, $x$$88$$, $y$$65$$, $w$$12$$, $h$$14$$, $id$$27$$)
};
D.$DvtObj$$.$createSubclass$(D.$DropdownItemSprite$$, D.$DvtRect$$, "DropdownItemSprite");
D.$DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($context$$124$$) {
  D.$DvtRect$$.$superclass$.Init.call(this, $context$$124$$)
};
D.$DvtComboBoxEvent$$ = function $$DvtComboBoxEvent$$$($subtype$$2$$, $index$$49$$, $evt$$22$$) {
  this.Init($subtype$$2$$, $index$$49$$, $evt$$22$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBoxEvent$$, D.$DvtBaseEvent$$, "DvtComboBoxEvent");
D.$DvtComboBoxEvent$$.prototype.Init = function $$DvtComboBoxEvent$$$$Init$($subtype$$3$$, $index$$50$$, $evt$$23$$) {
  D.$DvtComboBoxEvent$$.$superclass$.Init.call(this, "comboBoxEvent");
  $index$$50$$ === D.$JSCompiler_alias_VOID$$ && ($index$$50$$ = -1);
  this.$subtype$ = $subtype$$3$$;
  this.$_index$ = $index$$50$$;
  this.$_evt$ = $evt$$23$$
};
D.$DvtComboBoxEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtBasePanZoomControl$$ = function $$DvtBasePanZoomControl$$$($context$$86$$, $panZoomCanvas$$11$$, $resources$$12$$) {
  this.Init($context$$86$$, $panZoomCanvas$$11$$, $resources$$12$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBasePanZoomControl$$, D.$DvtContainer$$, "DvtBasePanZoomControl");
D.$DvtBasePanZoomControl$$.prototype.Init = function $$DvtBasePanZoomControl$$$$Init$($context$$87$$, $panZoomCanvas$$12$$, $resources$$13$$) {
  D.$DvtBasePanZoomControl$$.$superclass$.Init.call(this, $context$$87$$);
  this.$_panZoomCanvas$ = $panZoomCanvas$$12$$;
  this.$_context$ = $context$$87$$;
  this.$_tooltipManager$ = $context$$87$$.$getTooltipManager$();
  this.$_resources$ = $resources$$13$$
};
D.$DvtBasePanZoomControl$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$DvtBasePanZoomControl$$.prototype.$setResources$ = (0,D.$JSCompiler_set$$)("$_resources$");
D.$DvtBasePanZoomControl$$.prototype.$getResources$ = function $$DvtBasePanZoomControl$$$$$getResources$$() {
  this.$_resources$ == D.$JSCompiler_alias_NULL$$ && (this.$_resources$ = new D.$DvtPanZoomControlPanelResources$$);
  return this.$_resources$
};
D.$DvtZoomInButton$$ = function $$DvtZoomInButton$$$($context$$81$$, $button$$1$$, $panZoomCanvas$$7$$, $resources$$8$$, $eventManager$$6$$) {
  this.Init($context$$81$$, $button$$1$$, $panZoomCanvas$$7$$, $resources$$8$$, $eventManager$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomInButton$$, D.$DvtBasePanZoomControl$$, "DvtZoomInButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomInButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($JSCompiler_temp_const$$389_context$$82_proxy$$, $JSCompiler_temp_const$$388_button$$2$$, $JSCompiler_temp_const$$387_panZoomCanvas$$8$$, $JSCompiler_StaticMethods_getZoomInTooltip$self$$inline_1262_resources$$9$$, $eventManager$$7$$) {
  D.$DvtZoomInButton$$.$superclass$.Init.call(this, $JSCompiler_temp_const$$389_context$$82_proxy$$, $JSCompiler_temp_const$$387_panZoomCanvas$$8$$, $JSCompiler_StaticMethods_getZoomInTooltip$self$$inline_1262_resources$$9$$);
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomInTimer$ = new D.$DvtTimer$$($JSCompiler_temp_const$$389_context$$82_proxy$$, 100, this.$HandleZoomInTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($JSCompiler_temp_const$$389_context$$82_proxy$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomInButton$ = $JSCompiler_temp_const$$388_button$$2$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomInButton$, this.$HandleZoomInClick$, this);
  this.$_eventManager$ = $eventManager$$7$$;
  $JSCompiler_temp_const$$389_context$$82_proxy$$ = this.$HandleZoomInMouseDown$;
  $JSCompiler_temp_const$$387_panZoomCanvas$$8$$ = $JSCompiler_temp_const$$388_button$$2$$ = this.$HandleZoomInMouseUp$;
  $JSCompiler_StaticMethods_getZoomInTooltip$self$$inline_1262_resources$$9$$ = this.$getResources$();
  $JSCompiler_temp_const$$389_context$$82_proxy$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, $JSCompiler_temp_const$$389_context$$82_proxy$$, $JSCompiler_temp_const$$388_button$$2$$, $JSCompiler_temp_const$$387_panZoomCanvas$$8$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getZoomInTooltip$self$$inline_1262_resources$$9$$.$_zoomInTooltip$);
  this.$_eventManager$.$associate$(this.$_zoomInButton$, $JSCompiler_temp_const$$389_context$$82_proxy$$);
  this.$addChild$(this.$_zoomInButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  if(!this.$_zoomInTimer$.$isRunning$()) {
    var $currZoom_newZoom$$1$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom_newZoom$$1$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom_newZoom$$1$$), $animator$$6$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($currZoom_newZoom$$1$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$6$$);
    $animator$$6$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseDown$$() {
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomInTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseUp$$() {
  this.$_bZoomInMouseDown$ && (this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomInTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomInTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInTimer$$() {
  var $currZoom$$1$$ = this.$_panZoomCanvas$.$getZoom$();
  this.$_panZoomCanvas$.$zoomTo$((0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$1$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$) {
  this.$_zoomInButton$.setCursor($enabled$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomInButton$.$setEnabled$($enabled$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomInButton$)
};
D.$DvtZoomOutButton$$ = function $$DvtZoomOutButton$$$($context$$111$$, $button$$6$$, $panZoomCanvas$$17$$, $resources$$22$$, $eventManager$$10$$) {
  this.Init($context$$111$$, $button$$6$$, $panZoomCanvas$$17$$, $resources$$22$$, $eventManager$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomOutButton$$, D.$DvtBasePanZoomControl$$, "DvtZoomOutButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomOutButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($JSCompiler_temp_const$$9_context$$112_proxy$$4$$, $JSCompiler_temp_const$$8_button$$7$$, $JSCompiler_temp_const$$7_panZoomCanvas$$18$$, $JSCompiler_StaticMethods_getZoomOutTooltip$self$$inline_1338_resources$$23$$, $eventManager$$11$$) {
  D.$DvtZoomOutButton$$.$superclass$.Init.call(this, $JSCompiler_temp_const$$9_context$$112_proxy$$4$$, $JSCompiler_temp_const$$7_panZoomCanvas$$18$$, $JSCompiler_StaticMethods_getZoomOutTooltip$self$$inline_1338_resources$$23$$);
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomOutTimer$ = new D.$DvtTimer$$($JSCompiler_temp_const$$9_context$$112_proxy$$4$$, 100, this.$HandleZoomOutTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($JSCompiler_temp_const$$9_context$$112_proxy$$4$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomOutButton$ = $JSCompiler_temp_const$$8_button$$7$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomOutButton$, this.$HandleZoomOutClick$, this);
  this.$_eventManager$ = $eventManager$$11$$;
  $JSCompiler_temp_const$$9_context$$112_proxy$$4$$ = this.$HandleZoomOutMouseDown$;
  $JSCompiler_temp_const$$7_panZoomCanvas$$18$$ = $JSCompiler_temp_const$$8_button$$7$$ = this.$HandleZoomOutMouseUp$;
  $JSCompiler_StaticMethods_getZoomOutTooltip$self$$inline_1338_resources$$23$$ = this.$getResources$();
  $JSCompiler_temp_const$$9_context$$112_proxy$$4$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, $JSCompiler_temp_const$$9_context$$112_proxy$$4$$, $JSCompiler_temp_const$$8_button$$7$$, $JSCompiler_temp_const$$7_panZoomCanvas$$18$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getZoomOutTooltip$self$$inline_1338_resources$$23$$.$_zoomOutTooltip$);
  this.$_eventManager$.$associate$(this.$_zoomOutButton$, $JSCompiler_temp_const$$9_context$$112_proxy$$4$$);
  this.$addChild$(this.$_zoomOutButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  if(!this.$_zoomOutTimer$.$isRunning$()) {
    var $currZoom$$4_newZoom$$3$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$4_newZoom$$3$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$4_newZoom$$3$$), $animator$$13$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($currZoom$$4_newZoom$$3$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$13$$);
    $animator$$13$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseDown$$() {
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomOutTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseUp$$() {
  this.$_bZoomOutMouseDown$ && (this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomOutTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomOutTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutTimer$$() {
  var $currZoom$$5$$ = this.$_panZoomCanvas$.$getZoom$();
  this.$_panZoomCanvas$.$zoomTo$((0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$5$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$3$$) {
  this.$_zoomOutButton$.setCursor($enabled$$3$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomOutButton$.$setEnabled$($enabled$$3$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomOutButton$)
};
D.$DvtZoomToFitButton$$ = function $$DvtZoomToFitButton$$$($context$$88$$, $button$$4$$, $panZoomCanvas$$13$$, $resources$$15$$, $eventManager$$8$$) {
  this.Init($context$$88$$, $button$$4$$, $panZoomCanvas$$13$$, $resources$$15$$, $eventManager$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomToFitButton$$, D.$DvtBasePanZoomControl$$, "DvtZoomToFitButton");
D.$DvtZoomToFitButton$$.prototype.Init = function $$DvtZoomToFitButton$$$$Init$($JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_1270_context$$89_proxy$$1$$, $button$$5$$, $panZoomCanvas$$14$$, $resources$$16$$, $eventManager$$9$$) {
  D.$DvtZoomToFitButton$$.$superclass$.Init.call(this, $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_1270_context$$89_proxy$$1$$, $panZoomCanvas$$14$$, $resources$$16$$);
  this.$_zoomToFitButton$ = $button$$5$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomToFitButton$, this.$HandleZoomToFitClick$, this);
  this.$_zoomToFitButton$.setCursor("pointer");
  this.$_eventManager$ = $eventManager$$9$$;
  $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_1270_context$$89_proxy$$1$$ = this.$getResources$();
  $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_1270_context$$89_proxy$$1$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_1270_context$$89_proxy$$1$$.$_zoomToFitTooltip$);
  this.$_eventManager$.$associate$(this.$_zoomToFitButton$, $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_1270_context$$89_proxy$$1$$);
  this.$addChild$(this.$_zoomToFitButton$)
};
D.$DvtZoomToFitButton$$.prototype.$HandleZoomToFitClick$ = function $$DvtZoomToFitButton$$$$$HandleZoomToFitClick$$() {
  var $animator$$10$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomToFit$($animator$$10$$);
  $animator$$10$$.play()
};
D.$DvtZoomSlider$$ = function $$DvtZoomSlider$$$($context$$83$$, $panZoomCanvas$$9$$, $resources$$10$$, $zoomLevels$$, $zoomLevelsTooltips$$, $minScale$$, $maxScale$$) {
  this.Init($context$$83$$, $panZoomCanvas$$9$$, $resources$$10$$, $zoomLevels$$, $zoomLevelsTooltips$$, $minScale$$, $maxScale$$)
};
D.$DvtZoomSlider$DEFAULT_ZOOM_LEVELS$$ = [0, 0.25, 0.5, 0.75, 1];
D.$DvtObj$$.$createSubclass$(D.$DvtZoomSlider$$, D.$DvtBasePanZoomControl$$, "DvtZoomSlider");
D.$DvtZoomSlider$$.prototype.Init = function $$DvtZoomSlider$$$$Init$($context$$84$$, $panZoomCanvas$$10$$, $resources$$11$$, $zoomLevels$$1$$, $zoomLevelsTooltips$$1$$, $minScale$$1$$, $maxScale$$1$$) {
  D.$DvtZoomSlider$$.$superclass$.Init.call(this, $context$$84$$, $panZoomCanvas$$10$$, $resources$$11$$);
  this.$_zoomLevels$ = D.$DvtZoomSlider$DEFAULT_ZOOM_LEVELS$$;
  this.$_bZoomSliderThumbMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$.$addEvtListener$(window.ZoomEvent.$ZOOM$, this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
  $zoomLevels$$1$$ || ($zoomLevels$$1$$ = D.$DvtZoomSlider$DEFAULT_ZOOM_LEVELS$$);
  this.$_zoomLevels$ = $zoomLevels$$1$$;
  this.$_zoomLevelsTooltips$ = $zoomLevelsTooltips$$1$$;
  $minScale$$1$$ || ($minScale$$1$$ = 0);
  $maxScale$$1$$ || ($maxScale$$1$$ = 1);
  this.$_minScale$ = $minScale$$1$$;
  this.$_maxScale$ = $maxScale$$1$$;
  this.$Render$()
};
D.$DvtZoomSlider$$.prototype.$Render$ = function $$DvtZoomSlider$$$$$Render$$() {
  this.$_zoomSliderCrosslines$ = [];
  var $s$$inline_1266_zoomLevels$$2$$ = this.$_zoomLevels$, $button$$inline_1268_context$$inline_1265_numZoomLevels$$ = 0;
  $s$$inline_1266_zoomLevels$$2$$ != D.$JSCompiler_alias_NULL$$ && ($button$$inline_1268_context$$inline_1265_numZoomLevels$$ = $s$$inline_1266_zoomLevels$$2$$.length);
  var $ww$$15_ww$$inline_1267$$ = window.ZOOM_SLIDER_WIDTH, $g$$ = window.graphics;
  $g$$.$lineStyle$(0, 0, 0);
  $g$$.$DvtPathUtils$.moveTo(0, 0);
  $g$$.$DvtPathUtils$.lineTo($ww$$15_ww$$inline_1267$$, window.ZOOM_SLIDER_HEIGHT);
  this.$_zoomSliderStartY$ = 8;
  this.$_zoomSliderEndY$ = window.height - 8;
  for(var $crossline$$1$$, $i$$52$$ = 0;$i$$52$$ < $button$$inline_1268_context$$inline_1265_numZoomLevels$$;$i$$52$$++) {
    $crossline$$1$$ = new window.Sprite, $crossline$$1$$.$buttonMode$ = D.$JSCompiler_alias_TRUE$$, $crossline$$1$$.y = this.$_zoomSliderEndY$ - ($s$$inline_1266_zoomLevels$$2$$[$i$$52$$] - this.$_minScale$) / (this.$_maxScale$ - this.$_minScale$) * (this.$_zoomSliderEndY$ - this.$_zoomSliderStartY$), (0,window.addChild)($crossline$$1$$), $g$$ = $crossline$$1$$.$graphics$, window.PanZoomDvtButtonLAFUtilsPanelLAFUtils.$drawZoomSliderCrossLine$($ww$$15_ww$$inline_1267$$), $g$$.$lineStyle$(5, 0, 0), 
    $g$$.$DvtPathUtils$.moveTo(4, 0), $g$$.$DvtPathUtils$.lineTo(4 + $ww$$15_ww$$inline_1267$$, 0), this.$_zoomSliderCrosslines$.push($crossline$$1$$), $crossline$$1$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleZoomSliderCrosslineClick$, D.$JSCompiler_alias_FALSE$$, 0, D.$JSCompiler_alias_TRUE$$)
  }
  this.$addZoomSliderCrosslinesTooltipListeners$();
  $button$$inline_1268_context$$inline_1265_numZoomLevels$$ = this.$_context$;
  $s$$inline_1266_zoomLevels$$2$$ = new D.$DvtContainer$$($button$$inline_1268_context$$inline_1265_numZoomLevels$$);
  $ww$$15_ww$$inline_1267$$ = D.$DvtStyleUtils$$.$isLocaleL2R$() ? 0 : window.ZOOM_SLIDER_WIDTH - 2;
  $button$$inline_1268_context$$inline_1265_numZoomLevels$$ = new D.$DvtButton$$($button$$inline_1268_context$$inline_1265_numZoomLevels$$, D.$DvtButtonLAFUtils$$.$createZoomSliderButtonState$($button$$inline_1268_context$$inline_1265_numZoomLevels$$, 0, $ww$$15_ww$$inline_1267$$), D.$DvtButtonLAFUtils$$.$createZoomSliderButtonState$(1, $ww$$15_ww$$inline_1267$$), D.$DvtButtonLAFUtils$$.$createZoomSliderButtonState$(2, $ww$$15_ww$$inline_1267$$));
  $s$$inline_1266_zoomLevels$$2$$.$addChild$($button$$inline_1268_context$$inline_1265_numZoomLevels$$);
  $s$$inline_1266_zoomLevels$$2$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandleZoomSliderThumbMouseDown$, D.$JSCompiler_alias_FALSE$$, this);
  $s$$inline_1266_zoomLevels$$2$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, D.$DvtEventManager$consumeEvent$$, D.$JSCompiler_alias_FALSE$$, this);
  this.$_zoomSliderThumb$ = $s$$inline_1266_zoomLevels$$2$$;
  (0,D.$JSCompiler_StaticMethods__positionZoomSliderThumb$$)(this);
  this.$addChild$(this.$_zoomSliderThumb$)
};
D.$JSCompiler_StaticMethods__positionZoomSliderThumb$$ = function $$JSCompiler_StaticMethods__positionZoomSliderThumb$$$($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$) {
  if($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_panZoomCanvas$ && $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderThumb$) {
    var $currZoom$$2_yPos$$ = $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_panZoomCanvas$.$getCurrentZoom$(), $currZoom$$2_yPos$$ = (0,window.Number)($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderEndY$) - ($currZoom$$2_yPos$$ - $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_minScale$) / ($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_maxScale$ - $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_minScale$) * (0,window.Number)($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderEndY$ - 
    $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderStartY$);
    $currZoom$$2_yPos$$ > $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderEndY$ ? $currZoom$$2_yPos$$ = $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderEndY$ : $currZoom$$2_yPos$$ < $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderStartY$ && ($currZoom$$2_yPos$$ = $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderStartY$);
    $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderThumb$.y = $currZoom$$2_yPos$$ - $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderThumb$.height / 2
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomSlider$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$39$$) {
  $event$$39$$.$getSubType$() == window.ZoomEvent.$SUBTYPE_ZOOMED$ && (0,D.$JSCompiler_StaticMethods__positionZoomSliderThumb$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomSliderCrosslineClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomSliderCrosslineClick$$($event$$41_newScale$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$41_newScale$$);
  var $animator$$8_i$$53$$, $numCrosslines$$1$$ = 0;
  this.$_zoomSliderCrosslines$ != D.$JSCompiler_alias_NULL$$ && ($numCrosslines$$1$$ = this.$_zoomSliderCrosslines$.length);
  for($animator$$8_i$$53$$ = 0;$animator$$8_i$$53$$ < $numCrosslines$$1$$ && $event$$41_newScale$$.target != this.$_zoomSliderCrosslines$[$animator$$8_i$$53$$];$animator$$8_i$$53$$++) {
  }
  $event$$41_newScale$$ = this.$_zoomLevels$[$animator$$8_i$$53$$];
  $animator$$8_i$$53$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomTo$($event$$41_newScale$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$8_i$$53$$);
  $animator$$8_i$$53$$.play()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomSliderThumbMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomSliderThumbMouseDown$$($dragBounds_event$$44$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($dragBounds_event$$44$$);
  this.$_bZoomSliderThumbMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  window.stage.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandleZoomSliderThumbMouseMove$, D.$JSCompiler_alias_FALSE$$, 0, D.$JSCompiler_alias_TRUE$$);
  window.stage.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleZoomSliderThumbMouseUp$, D.$JSCompiler_alias_FALSE$$, 0, D.$JSCompiler_alias_TRUE$$);
  $dragBounds_event$$44$$ = new window.Rectangle(this.$_zoomSliderThumb$.x, this.$_zoomSliderStartY$ - this.$_zoomSliderThumb$.height / 2, 0, this.$_zoomSliderEndY$ - this.$_zoomSliderStartY$);
  this.$_zoomSliderThumb$.$startDrag$(D.$JSCompiler_alias_FALSE$$, $dragBounds_event$$44$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomSliderThumbMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomSliderThumbMouseMove$$($event$$45$$) {
  this.$_bZoomSliderThumbMouseDown$ && $event$$45$$.$updateAfterEvent$()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomSliderThumbMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomSliderThumbMouseUp$$($event$$46_ratio$$3_relY$$1$$) {
  window.stage.$removeEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandleZoomSliderThumbMouseMove$);
  window.stage.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleZoomSliderThumbMouseUp$);
  if(this.$_bZoomSliderThumbMouseDown$) {
    (0,D.$DvtEventManager$consumeEvent$$)($event$$46_ratio$$3_relY$$1$$);
    this.$_bZoomSliderThumbMouseDown$ = D.$JSCompiler_alias_FALSE$$;
    this.$_zoomSliderThumb$.$stopDrag$();
    $event$$46_ratio$$3_relY$$1$$ = this.$_zoomSliderEndY$ - (this.$_zoomSliderThumb$.y + this.$_zoomSliderThumb$.height / 2);
    0 > $event$$46_ratio$$3_relY$$1$$ && ($event$$46_ratio$$3_relY$$1$$ = 0);
    $event$$46_ratio$$3_relY$$1$$ = this.$_minScale$ + $event$$46_ratio$$3_relY$$1$$ / (this.$_zoomSliderEndY$ - this.$_zoomSliderStartY$) * (this.$_maxScale$ - this.$_minScale$);
    var $animator$$9$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($event$$46_ratio$$3_relY$$1$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$9$$);
    $animator$$9$$.play()
  }
};
D.$DvtPanControl$$ = function $$DvtPanControl$$$($context$$99$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$15$$, $resources$$17$$, $control$$, $styleMap$$41$$) {
  this.Init($context$$99$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$15$$, $resources$$17$$, $control$$, $styleMap$$41$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanControl$$, D.$DvtBasePanZoomControl$$, "DvtPanControl");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanControl$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$100$$, $panButton$$2$$, $recenterButton$$2$$, $panZoomCanvas$$16$$, $resources$$18$$, $control$$1$$, $styleMap$$42$$) {
  D.$DvtPanControl$$.$superclass$.Init.call(this, $context$$100$$, $panZoomCanvas$$16$$, $resources$$18$$);
  this.$_panTimer$ = new D.$DvtTimer$$($context$$100$$, 50, this.$HandlePanTimer$, this);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panCenter$ = new D.$DvtPoint$$(20, 20);
  this.$_controls$ = $control$$1$$ ? $control$$1$$ : 16777215;
  $panButton$$2$$.$addChild$($recenterButton$$2$$);
  $recenterButton$$2$$ && (this.$_panCenterSprite$ = $recenterButton$$2$$, this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_panCenterSprite$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), D.$DvtAgent$$.$isTouchDevice$() || (this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, 
  this.$HandlePanCenterDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanCenterUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanCenterRollOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanCenterRollOut$, D.$JSCompiler_alias_FALSE$$, this)), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, 
  this.$HandlePanCenterMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panButton$ = $panButton$$2$$;
  this.$_panButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this);
  D.$DvtAgent$$.$isTouchDevice$() || (this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandlePanMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanMouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanRollOver$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanRollOut$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandlePanMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanButtonBackground$($context$$100$$, $styleMap$$42$$);
  this.$_panControl$.$addChild$(this.$_panButton$);
  this.$addChild$(this.$_panControl$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanClick$$($event$$50$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$50$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseDown$$($event$$51_localPoint_stagePoint$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$51_localPoint_stagePoint$$);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $event$$51_localPoint_stagePoint$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$51_localPoint_stagePoint$$);
  $event$$51_localPoint_stagePoint$$ = this.$_panButton$.$stageToLocal$($event$$51_localPoint_stagePoint$$);
  (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$51_localPoint_stagePoint$$.x, $event$$51_localPoint_stagePoint$$.y, this.$_panButton$.$downState$);
  this.$_panMousePoint$ = new D.$DvtPoint$$($event$$51_localPoint_stagePoint$$.x, $event$$51_localPoint_stagePoint$$.y);
  this.$_panTimer$.start();
  this.$_panTimerCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseUp$$($event$$52$$) {
  this.$_bPanMouseDown$ && ((0,D.$DvtEventManager$consumeEvent$$)($event$$52$$), this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
  this.$_panButton$.$_mouseOutHandler$($event$$52$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOver$$($event$$53$$) {
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  var $tooltip$$inline_1278$$ = this.$getResources$().$_panControlTooltip$;
  this.$getTooltipManager$().$showTooltip$($event$$53$$.pageX, $event$$53$$.pageY, $tooltip$$inline_1278$$, $event$$53$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOut$$($event$$54$$) {
  this.$HandlePanMouseUp$($event$$54$$);
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseMove$$($event$$55_localPoint$$1_stagePoint$$1$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$55_localPoint$$1_stagePoint$$1$$);
  $event$$55_localPoint$$1_stagePoint$$1$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$55_localPoint$$1_stagePoint$$1$$);
  $event$$55_localPoint$$1_stagePoint$$1$$ = this.$_panButton$.$stageToLocal$($event$$55_localPoint$$1_stagePoint$$1$$);
  this.$_bPanMouseDown$ ? ((0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$55_localPoint$$1_stagePoint$$1$$.x, $event$$55_localPoint$$1_stagePoint$$1$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new D.$DvtPoint$$($event$$55_localPoint$$1_stagePoint$$1$$.x, $event$$55_localPoint$$1_stagePoint$$1$$.y)) : (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$55_localPoint$$1_stagePoint$$1$$.x, $event$$55_localPoint$$1_stagePoint$$1$$.y, 
  this.$_panButton$.$overState$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanTimer$ = function $$JSCompiler_prototypeAlias$$$$HandlePanTimer$$() {
  if(this.$_bPanMouseDown$) {
    var $angleRads$$2_deltaY$$ = window.Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $deltaX$$ = window.Math.cos($angleRads$$2_deltaY$$), $angleRads$$2_deltaY$$ = window.Math.sin($angleRads$$2_deltaY$$), $factor$$1$$ = 15;
    this.$_panTimerCount$++;
    40 < this.$_panTimerCount$ && ($factor$$1$$ *= 3);
    this.$_panZoomCanvas$.$panBy$($factor$$1$$ * $deltaX$$, $factor$$1$$ * $angleRads$$2_deltaY$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterClick$$($event$$56$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$56$$);
  this.$_panZoomCanvas$.$zoomAndCenter$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterDown$$($event$$57$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$57$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterUp$$($event$$58$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$58$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOver$$($event$$59$$) {
  var $tooltip$$inline_1286$$ = this.$getResources$().$_panControlCenterTooltip$;
  this.$getTooltipManager$().$showTooltip$($event$$59$$.pageX, $event$$59$$.pageY, $tooltip$$inline_1286$$, $event$$59$$.target);
  this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$DvtEventManager$consumeEvent$$)($event$$59$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOut$$($event$$60$$) {
  this.$getTooltipManager$().$hideTooltip$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$60$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterMouseMove$$($event$$61$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$61$$)
};
D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$ = function $$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$$($JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$, $localX$$, $localY$$, $displayObj$$) {
  $displayObj$$.$setRotation$(window.Math.atan2($localY$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.y, $localX$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.x) - window.Math.PI / 4)
};
D.$DvtPanZoomControlPanelEvent$$ = function $$DvtPanZoomControlPanelEvent$$$($subtype$$4$$) {
  this.Init("dvtPZCPExpand");
  this.$_subtype$ = $subtype$$4$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtPanZoomControlPanelEvent");
D.$DvtPanZoomControlPanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtPanZoomControlPanel$$ = function $$DvtPanZoomControlPanel$$$($context$$101$$, $canvas$$, $buttonImages$$2$$, $resources$$19$$, $controls$$3$$, $view$$6$$) {
  this.Init($context$$101$$, $canvas$$, $buttonImages$$2$$, $resources$$19$$, $controls$$3$$, $view$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanel$$, D.$DvtContainer$$, "DvtPanZoomControlPanel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomControlPanel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$102_s$$6$$, $canvas$$1$$, $buttonImages$$3$$, $resources$$20$$, $controls$$4$$, $view$$7$$) {
  D.$DvtPanZoomControlPanel$$.$superclass$.Init.call(this, $context$$102_s$$6$$, D.$JSCompiler_alias_NULL$$, "_controlPanel");
  this.$_bMouseOver$ = this.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $canvas$$1$$;
  this.$_tooltipManager$ = $context$$102_s$$6$$.$getTooltipManager$();
  this.$_resources$ = new D.$DvtPanZoomControlPanelResources$$($resources$$20$$);
  this.$_controls$ = $controls$$4$$ == D.$JSCompiler_alias_NULL$$ ? 16777215 : $controls$$4$$;
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_view$ = $view$$7$$) {
    this.$_styleMap$ = this.$_view$.$getControlPanelStyleMap$(), this.$_styleMap$.centerButtonDisplayed || (this.$_controls$ &= -17, this.$_view$.$_displayedControls$ = this.$_controls$)
  }
  this.$_zoomLevels$ = D.$DvtZoomSlider$DEFAULT_ZOOM_LEVELS$$;
  this.$_zoomSliderMinScale$ = 0;
  this.$_state$ = this.$_zoomSliderMaxScale$ = 1;
  this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
  this.$_buttonImages$ = $buttonImages$$3$$;
  this.$_bgAlpha$ = this.$_styleMap$.backgroundAlpha;
  this.$_eventManager$ = new D.$DvtPanZoomControlPanelEventManager$$($context$$102_s$$6$$, D.$JSCompiler_alias_NULL$$, $view$$7$$);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtPanZoomControlPanel$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this);
  $context$$102_s$$6$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$_background$.$setAlpha$(this.$_bgAlpha$);
  this.$_frame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$addChild$($context$$102_s$$6$$);
  this.$tabChildren$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($state$$16$$) {
  this.$_state$ != $state$$16$$ && (this.$toggleExpandCollapse$(), this.$_state$ = $state$$16$$, (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$JSCompiler_prototypeAlias$$.$setResources$ = function $$JSCompiler_prototypeAlias$$$$setResources$$($resources$$21$$) {
  this.$_resources$ = $resources$$21$$;
  this.$_zoomSlider$ && this.$_zoomSlider$.$setResources$($resources$$21$$);
  this.$_zoomInButton$ && this.$_zoomInButton$.$setResources$($resources$$21$$);
  this.$_zoomOutButton$ && this.$_zoomOutButton$.$setResources$($resources$$21$$);
  this.$_zoomToFitButton$ && this.$_zoomToFitButton$.$setResources$($resources$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$getResources$ = (0,D.$JSCompiler_get$$)("$_resources$");
D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$ = function $$JSCompiler_StaticMethods_mouseDragPanningStarted$$$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.backgroundDragAlpha);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.borderDragAlpha)
};
D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$ = function $$JSCompiler_StaticMethods_mouseDragPanningEnded$$$($JSCompiler_StaticMethods_mouseDragPanningEnded$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseOver$ ? $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOver$(D.$JSCompiler_alias_NULL$$) : $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$DvtPanZoomControlPanel$$.prototype.$isSingleHorzRow$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtPanZoomControlPanel$$.prototype.$getViewPanelHeight$ = function $$DvtPanZoomControlPanel$$$$$getViewPanelHeight$$() {
  var $h$$13$$ = 0, $h$$13$$ = this.$isSingleHorzRow$() ? D.$DvtPanZoomControlPanelLAFUtils$$.$getViewPanelHalfHeight$() : D.$DvtPanZoomControlPanelLAFUtils$$.$getViewPanelHeight$();
  return window.Math.max((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $h$$13$$)
};
D.$JSCompiler_StaticMethods_RenderCollapsed$$ = function $$JSCompiler_StaticMethods_RenderCollapsed$$$($JSCompiler_StaticMethods_RenderCollapsed$self$$) {
  var $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $contentBar$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$), $hh$$18$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $bR2L$$7$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$ = D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewClosedShape$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$, $hh$$18$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$7$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$ = D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$, $hh$$18$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$7$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_collapsedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$ = D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$7$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_RenderCollapsed$self$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$.setCursor("pointer");
  $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getResources$();
  $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderCollapsed$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$.$_controlPanelExpandTooltip$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_1296_context$$103_proxy$$2$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  return $contentBar$$
};
D.$DvtPanZoomControlPanel$$.prototype.$PopulateHorzContentBar$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtPanZoomControlPanel$$.prototype.$toggleExpandCollapse$ = function $$DvtPanZoomControlPanel$$$$$toggleExpandCollapse$$() {
  this.$_bTransition$ || (2 === this.$_state$ ? this.$_doCollapse$() : 1 === this.$_state$ && this.$_doExpand$())
};
D.$DvtPanZoomControlPanel$$.prototype.$HandleExpandClick$ = function $$DvtPanZoomControlPanel$$$$$HandleExpandClick$$($event$$62$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$62$$);
  this.$_bTransition$ || (this.$_doExpand$(), this.$getTooltipManager$() && this.$getTooltipManager$().$hideTooltip$())
};
D.$DvtPanZoomControlPanel$$.prototype.$_doExpand$ = function $$DvtPanZoomControlPanel$$$$$_doExpand$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  var $context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$ = this.$_context$, $event$$inline_1326_s$$inline_1307$$ = new D.$DvtContainer$$($context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$);
  this.$_background$ = new D.$DvtContainer$$($context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$);
  this.$_frame$ = new D.$DvtContainer$$($context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$);
  $event$$inline_1326_s$$inline_1307$$.$addChild$(this.$_background$);
  $event$$inline_1326_s$$inline_1307$$.$addChild$(this.$_frame$);
  var $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ = D.$DvtAgent$$.$isRightToLeft$($context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$), $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = 0, $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$ = 
  new D.$DvtContainer$$($context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$), $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$;
  $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ = 0;
  var $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = this.$_context$, $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ = this.$isSingleHorzRow$();
  0 != (this.$_controls$ & 16) && (this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanControl$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, this.$_panZoomCanvas$, this.$getResources$(), this.$_controls$, this.$_buttonImages$, this.$_styleMap$), $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ && 
  (this.$_panControlUnderlay$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, this.$_styleMap$), this.$_panControlUnderlay2$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, 
  this.$_styleMap$), $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$addChild$(this.$_panControlUnderlay2$), $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$addChild$(this.$_panControlUnderlay$)), $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$addChild$(this.$_panControl$), $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$++);
  this.$_collapseButton$ = D.$DvtButtonLAFUtils$$.$createCollapseButton$(this.$_context$, this.$_buttonImages$, this.$getViewPanelHeight$(), this.$_styleMap$, D.$DvtAgent$$.$isRightToLeft$(this.$_context$));
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_collapseButton$, this.$HandleCollapseClick$, this);
  this.$_collapseButton$.setCursor("pointer");
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = this.$getResources$();
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$.$_controlPanelCollapseTooltip$);
  this.$_eventManager$.$associate$(this.$_collapseButton$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$);
  $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$addChild$(this.$_collapseButton$);
  this.$_additionalContent$ = new D.$DvtContainer$$(this.$_context$);
  this.$PopulateHorzContentBar$(this.$_additionalContent$);
  0 < this.$_additionalContent$.$getNumChildren$() ? ($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$addChild$(this.$_additionalContent$), $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$++) : this.$_additionalContent$ = D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = 
  this.$_context$, $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$ = D.$JSCompiler_alias_NULL$$, $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0), $backgroundHeight$$inline_8284_buttonWidth$$inline_8250$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0), $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ = this.$getViewPanelHeight$(), $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.hbar, "paddingLeft", 0), $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.hbar, "paddingInner", 0);
  $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ ? (this.$_collapseButton$.$setTranslateX$(0), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$, 
  this.$_additionalContent$ && ($backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, this.$_additionalContent$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += 
  $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_additionalContent$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, ($buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ - 
  $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$.$h$) / 2), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += window.Math.max($backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$.$w$, $backgroundHeight$$inline_8284_buttonWidth$$inline_8250$$)), this.$_panControl$ && ($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += 
  $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$, $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControl$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$), 
  this.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$), this.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay2$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, 
  $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$), $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, this.$_panControl$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += 
  $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$.$w$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$) : (this.$_panControl$ && ($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += 
  $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$, $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControl$, $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$, $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$), 
  this.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay$, $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$, $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$), this.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay2$, $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$, 
  $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$), $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, this.$_panControl$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += 
  $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$ + $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$.$w$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += 1), this.$_additionalContent$ && ($backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, 
  this.$_additionalContent$), 0 == $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ && ($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$), 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_additionalContent$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, ($buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ - $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$.$h$) / 2), 
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$.$w$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = window.Math.max($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ + 
  $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$, $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$)), this.$_collapseButton$.$setTranslateX$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$), 
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ += $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$);
  $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$;
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = D.$JSCompiler_alias_NULL$$;
  $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ = this.$_controls$ & 16 || this.$_styleMap$ && this.$_styleMap$.panelDrawerStyles && 0 == $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ ? (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingTop", 0) : 0;
  this.$isSingleHorzRow$() && 0 != (this.$_controls$ & 16) && ($bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ += D.$DvtPanZoomControlPanelLAFUtils$$.$getViewPanelHeight$() - this.$getViewPanelHeight$());
  if(0 != (this.$_controls$ & 256) || 0 != (this.$_controls$ & 4097)) {
    $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = new D.$DvtContainer$$($context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$.$setTranslateY$($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$getTranslateY$() + 
    this.$getViewPanelHeight$()), $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, 0 != (this.$_controls$ & 256) && ($buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingLeft", 0), this.$_zoomToFitButton$ = D.$DvtButtonLAFUtils$$.$createZoomToFitButton$(this.$_context$, this.$_panZoomCanvas$, this.$getResources$(), this.$_eventManager$, this.$_buttonImages$, this.$_styleMap$), 
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_zoomToFitButton$, $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$, this.$_zoomToFitButton$.$getTranslateY$() + $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$), $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$ = 
    D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, this.$_zoomToFitButton$), $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$.$addChild$(this.$_zoomToFitButton$), $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ += $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$.$h$, 
    $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ += $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$), $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, 
    $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ = D.$JSCompiler_alias_NULL$$, $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, 
    "paddingLeft", 0), 0 != (this.$_controls$ & 4097) && (this.$_zoomInButton$ = D.$DvtButtonLAFUtils$$.$createZoomInButton$(this.$_context$, this.$_panZoomCanvas$, this.$getResources$(), this.$_eventManager$, this.$_buttonImages$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_zoomInButton$, $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$, this.$_zoomInButton$.$getTranslateY$() + $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$), 
    $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, this.$_zoomInButton$), $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$.$addChild$(this.$_zoomInButton$), $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ += 
    $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$.$h$ + $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$, this.$_zoomOutButton$ = D.$DvtButtonLAFUtils$$.$createZoomOutButton$(this.$_context$, this.$_panZoomCanvas$, this.$getResources$(), this.$_eventManager$, this.$_buttonImages$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_zoomOutButton$, 
    $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$, this.$_zoomOutButton$.$getTranslateY$() + $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$), $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, this.$_zoomOutButton$), $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$.$addChild$(this.$_zoomOutButton$), 
    $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ += $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$.$h$, $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ = this.$_panZoomCanvas$.$getZoom$(), 
    $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$), $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$ = 
    (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$), this.$_zoomInButton$ && this.$_zoomInButton$.$setEnabled$($bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ != 
    $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$), this.$_zoomOutButton$ && this.$_zoomOutButton$.$setEnabled$($bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ != $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$)), 
    this.$_frame$.$addChild$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$)
  }
  var $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ = $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$, $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ = 
  this.$_context$, $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0), $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$ = ($buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) ? $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ : $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ - 
  $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$, $backgroundHeight$$inline_8284_buttonWidth$$inline_8250$$ = this.$getViewPanelHeight$(), $backgroundFrameOffsetX$$inline_8285$$ = 0, $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = 0;
  $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$ ? $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$ && 0 == $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ && ($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = 
  $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ ? -$buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$ : $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$) : ($backgroundFrameOffsetX$$inline_8285$$ = $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ ? 
  $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$ : 0, $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ ? $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$ : 0);
  if(0 < $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ || $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$) {
    $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$ = D.$JSCompiler_alias_NULL$$, $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 0)), $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$ = $buttonPaddingInner$$inline_8254_paddingSide$$inline_8269_panelDrawerStyle$$inline_8282$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$, 
    $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$, $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$, $backgroundHeight$$inline_8284_buttonWidth$$inline_8250$$, 0 < $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_BOTTOM$ : D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_LEFT$, $buttonPaddingSide$$inline_8253_dim$$inline_8262_paddingInner$$inline_8268_paddingSide$$inline_8261_panelWidth$$inline_8281_prevZoom$$inline_8272$$) : 
    D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$, $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$, $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$ - 2 * $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$, $backgroundHeight$$inline_8284_buttonWidth$$inline_8250$$ - 2 * $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$, 
    !$animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$), $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$)), $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$.$setFill$(D.$JSCompiler_alias_NULL$$), $buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$.$setTranslateX$($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$getTranslateX$() + 
    $backgroundFrameOffsetX$$inline_8285$$), $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$addChildAt$($buttonWidth$$inline_8280_r$$inline_8288_viewFrame$$inline_8287$$, 0), $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ = D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewOpenShape$($buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$, 
    $backgroundWidth$$inline_8283_dim$$inline_8248_yy$$inline_8255$$, this.$getViewPanelHeight$(), !$animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$, $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$getTranslateX$() + 
    $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$getTranslateY$()), this.$_background$.$addChild$($animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$)
  }
  this.$_frame$.$addChild$($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$);
  $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$;
  $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = this.$_context$;
  $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ = D.$DvtAgent$$.$isRightToLeft$($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$);
  $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  !this.$_additionalContent$ && 0 == (this.$_controls$ & 16) ? $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ ? ($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$setTranslateX$(0 - $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$getTranslateX$()), 
  $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$setTranslateY$(0), $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ && (D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$), 
  $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$setTranslateX$($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$getTranslateX$() - $buttonWidth$$inline_8296_context$$inline_8279_dim$$inline_8267_nextZoom$$inline_8271_paddingInner$$inline_8260_panelHeight$$inline_8252$$), $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$.$setTranslateY$(0))) : 
  $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ ? ($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$, 
  0, 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$, $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, 0)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$, 
  $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$getTranslateX$(), 0) : $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ && $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ && ($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$), $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$setTranslateX$(0), $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$.$setTranslateX$($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$.$w$ + 
  $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$.x - $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$));
  $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$;
  $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ = $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$;
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = this.$_context$;
  $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ && ($backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$.$getNumChildren$(), $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ = 
  1 < $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ || this.$_zoomToFitButton$ == D.$JSCompiler_alias_NULL$$ || 1 < $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ || 0 < $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ && 
  1 == $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ = D.$JSCompiler_alias_NULL$$, this.$_styleMap$ && this.$_styleMap$.panelDrawerStyles && ($bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$ = 
  0 < $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_TOP$ : D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_RIGHT$), $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, 
  $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$), $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ += 4, $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ = $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$ ? 
  $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$ : window.Math.max($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$.$h$, $bBiDi$$inline_8295_barWidth$$inline_8299_currY$$inline_8305_currZoom$$inline_8270_nKidHorzContentBar$$inline_8276_panelWidth$$inline_8251_vertContentBar$$inline_8258_vertContentBar$$inline_8265$$), 
  $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ += (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingBottom", 0), $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$ = D.$DvtPanZoomControlPanelLAFUtils$$.$renderEmptyZoomShape$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, 
  $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$, this.$_styleMap$, $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$, this.$getViewPanelHeight$()), $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ = 
  D.$DvtPanZoomControlPanelLAFUtils$$.$renderEmptyZoomFrame$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$, $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$, $backgroundShapeOffsetX$$inline_8286_context$$inline_8247_context$$inline_8294_cpWidth$$inline_8297_currX$$inline_1309_dimHorizontal$$inline_8298_nKidsVert$$inline_8307_roundedCorner$$inline_8308$$, 
  this.$_styleMap$, $bSingleRow$$inline_8233_collapseButtonWidth$$inline_8249_currY$$inline_1313_currY$$inline_8259_currY$$inline_8266_openside$$inline_8309$$, this.$getViewPanelHeight$()), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$, $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$.$getTranslateX$(), $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$.$getTranslateY$()), 
  this.$_background$.$addChild$($dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$), $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$.$addChildAt$($cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$, 0));
  this.$_expandedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$, $event$$inline_1326_s$$inline_1307$$);
  this.$addChild$($event$$inline_1326_s$$inline_1307$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_1316$$ = this.$getChildAt$(0), $context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$ = $oldContent$$inline_1316$$.$getDimensions$(), $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  $context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$ && 0 != $context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$.$w$ ? ($cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ = $event$$inline_1326_s$$inline_1307$$.$getDimensions$(), $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$ = new D.$DvtAnimator$$(this.$_context$, 
  0.25), $oldContent$$inline_1316$$.$setAlpha$(1), $event$$inline_1326_s$$inline_1307$$.$setAlpha$(0), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$, "typeNumber", $oldContent$$inline_1316$$, $oldContent$$inline_1316$$.$getAlpha$, $oldContent$$inline_1316$$.$setAlpha$, 0), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$, 
  "typeNumber", $event$$inline_1326_s$$inline_1307$$, $event$$inline_1326_s$$inline_1307$$.$getAlpha$, $event$$inline_1326_s$$inline_1307$$.$setAlpha$, 1), $event$$inline_1326_s$$inline_1307$$.$setScaleX$($context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$.$w$ / $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$.$w$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$, 
  "typeNumber", $event$$inline_1326_s$$inline_1307$$, $event$$inline_1326_s$$inline_1307$$.$getScaleX$, $event$$inline_1326_s$$inline_1307$$.$setScaleX$, 1), D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && ($event$$inline_1326_s$$inline_1307$$.$setTranslateX$($oldContent$$inline_1316$$.$getTranslateX$()), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = 
  $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$.$w$ + $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$.x, (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$, 
  "typeNumber", $event$$inline_1326_s$$inline_1307$$, $event$$inline_1326_s$$inline_1307$$.$getTranslateX$, $event$$inline_1326_s$$inline_1307$$.$setTranslateX$, $oldContent$$inline_1316$$.$getTranslateX$() + $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$ - $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$)), 
  $event$$inline_1326_s$$inline_1307$$.$setScaleY$($context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$.$h$ / $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$.$h$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$, "typeNumber", $event$$inline_1326_s$$inline_1307$$, 
  $event$$inline_1326_s$$inline_1307$$.$getScaleY$, $event$$inline_1326_s$$inline_1307$$.$setScaleY$, 1), $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$.$setOnEnd$(function() {
    $oldContent$$inline_1316$$.getParent().removeChild($oldContent$$inline_1316$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
    this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
  }, this), $animator$$inline_1321_bBiDi$$inline_1308_vertContentBar$$inline_8293_vertContentBar$$inline_8303_viewShape$$inline_8289$$.play()) : ($oldContent$$inline_1316$$.getParent().removeChild($oldContent$$inline_1316$$), D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? ($cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$ = (0,D.$DvtDisplayableUtils$_getDimForced$$)(this.$_context$, $event$$inline_1326_s$$inline_1307$$), 
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$ = window.Math.floor($cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$.$w$ + $cpHeight$$inline_8311_nKidHorzContentBar$$inline_1311_nKidHorzContentBar$$inline_8231_nKidHorzContentBar$$inline_8242_ndim$$inline_1320_zoomFrame$$inline_8313$$.x), 
  $context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$ = $dim$$inline_8310_horzContentBar$$inline_1310_openCloseButtonWidth$$inline_1319_zoomShape$$inline_8312$$ - $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8237_context$$inline_8232_context$$inline_8306_currX$$inline_8246_dimWidth$$inline_1322_proxy$$inline_8238_vertContentBar$$inline_1312$$) : $context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$ = 0, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($event$$inline_1326_s$$inline_1307$$, 
  $context$$inline_1306_odim$$inline_1318_transX$$inline_1323$$, 0));
  this.$_state$ = 2;
  $event$$inline_1326_s$$inline_1307$$ = new D.$DvtPanZoomControlPanelEvent$$("show");
  this.$FireListener$($event$$inline_1326_s$$inline_1307$$)
};
D.$JSCompiler_StaticMethods__applyAlphasForMouse$$ = function $$JSCompiler_StaticMethods__applyAlphasForMouse$$$($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) {
  var $bMouseOver$$1$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__applyAlphasForMouse$self$$.$_context$.$_stage$ && ($bMouseOver$$1$$ = D.$JSCompiler_alias_TRUE$$);
  $bMouseOver$$1$$ ? (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) : (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$)
};
D.$DvtPanZoomControlPanel$$.prototype.$HandleCollapseClick$ = function $$DvtPanZoomControlPanel$$$$$HandleCollapseClick$$($event$$63$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$63$$);
  this.$_bTransition$ || this.$_doCollapse$()
};
D.$DvtPanZoomControlPanel$$.prototype.$_doCollapse$ = function $$DvtPanZoomControlPanel$$$$$_doCollapse$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  var $event$$inline_1336_s$$9$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$addChild$($event$$inline_1336_s$$9$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_1329$$ = this.$getChildAt$(0), $animator$$inline_1331$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  $oldContent$$inline_1329$$.$setAlpha$(1);
  $event$$inline_1336_s$$9$$.$setAlpha$(0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1331$$, "typeNumber", $oldContent$$inline_1329$$, $oldContent$$inline_1329$$.$getAlpha$, $oldContent$$inline_1329$$.$setAlpha$, 0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1331$$, "typeNumber", $event$$inline_1336_s$$9$$, $event$$inline_1336_s$$9$$.$getAlpha$, $event$$inline_1336_s$$9$$.$setAlpha$, 1);
  var $ndim$$inline_1332$$ = this.$_collapsedDim$, $odim$$inline_1333$$ = this.$_expandedDim$;
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1331$$, "typeNumber", $oldContent$$inline_1329$$, $oldContent$$inline_1329$$.$getScaleX$, $oldContent$$inline_1329$$.$setScaleX$, $ndim$$inline_1332$$.$w$ / $odim$$inline_1333$$.$w$);
  D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1331$$, "typeNumber", $oldContent$$inline_1329$$, $oldContent$$inline_1329$$.$getTranslateX$, $oldContent$$inline_1329$$.$setTranslateX$, $event$$inline_1336_s$$9$$.$getTranslateX$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_1331$$, "typeNumber", $oldContent$$inline_1329$$, $oldContent$$inline_1329$$.$getScaleY$, $oldContent$$inline_1329$$.$setScaleY$, $ndim$$inline_1332$$.$h$ / $odim$$inline_1333$$.$h$);
  $animator$$inline_1331$$.$setOnEnd$(function() {
    $oldContent$$inline_1329$$.getParent().removeChild($oldContent$$inline_1329$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
  }, this);
  $animator$$inline_1331$$.play();
  this.$_state$ = 1;
  $event$$inline_1336_s$$9$$ = new D.$DvtPanZoomControlPanelEvent$$("hide");
  this.$FireListener$($event$$inline_1336_s$$9$$)
};
D.$DvtPanZoomControlPanel$$.prototype.$HandleRollOver$ = function $$DvtPanZoomControlPanel$$$$$HandleRollOver$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)(this)
};
D.$DvtPanZoomControlPanel$$.prototype.$HandleRollOut$ = function $$DvtPanZoomControlPanel$$$$$HandleRollOut$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)(this)
};
D.$JSCompiler_StaticMethods__applyAlphasRollover$$ = function $$JSCompiler_StaticMethods__applyAlphasRollover$$$($JSCompiler_StaticMethods__applyAlphasRollover$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.borderHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha)
};
D.$JSCompiler_StaticMethods__applyAlphasRollout$$ = function $$JSCompiler_StaticMethods__applyAlphasRollout$$$($JSCompiler_StaticMethods__applyAlphasRollout$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_styleMap$.borderAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$)
};
D.$DvtPanZoomControlPanel$$.prototype.$getDimensions$ = function $$DvtPanZoomControlPanel$$$$$getDimensions$$() {
  this.$_dim$ || (this.$_dim$ = D.$DvtPanZoomControlPanel$$.$superclass$.$getDimensions$.call(this));
  return this.$_dim$
};
D.$DvtPanZoomControlPanel$$.prototype.$renderComponent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_enableZoomInControl$$ = function $$JSCompiler_StaticMethods_enableZoomInControl$$$($JSCompiler_StaticMethods_enableZoomInControl$self$$, $enabled$$1$$) {
  $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$.$setEnabled$($enabled$$1$$)
};
D.$JSCompiler_StaticMethods_enableZoomOutControl$$ = function $$JSCompiler_StaticMethods_enableZoomOutControl$$$($JSCompiler_StaticMethods_enableZoomOutControl$self$$, $enabled$$2$$) {
  $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$.$setEnabled$($enabled$$2$$)
};
D.$DvtPanZoomControlPanelDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelDefaults$$, D.$DvtObj$$, "DvtPanZoomControlPanelDefaults");
D.$DvtPanZoomControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:D.$JSCompiler_alias_TRUE$$, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:D.$JSCompiler_alias_FALSE$$, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", 
scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
D.$DvtPanZoomControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
D.$DvtPanZoomControlPanelDefaults$$.$DEFAULT$ = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:0.5, backgroundHoverAlpha:1, backgroundDragAlpha:0.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:0.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:D.$JSCompiler_alias_TRUE$$, comboBox:{paddingTop:2, paddingBottom:6, 
paddingLeft:3, paddingRight:3, paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
D.$DvtPanZoomControlPanelDefaults$$.$calcOptions$ = function $$DvtPanZoomControlPanelDefaults$$$$calcOptions$$($userOptions$$5$$) {
  var $defaults$$4$$ = D.$DvtPanZoomControlPanelDefaults$$.$_getDefaults$($userOptions$$5$$);
  return $userOptions$$5$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$5$$, $defaults$$4$$) : $defaults$$4$$
};
D.$DvtPanZoomControlPanelDefaults$$.$_getDefaults$ = function $$DvtPanZoomControlPanelDefaults$$$$_getDefaults$$($userOptions$$6$$) {
  var $defaults$$5$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$5$$ = $userOptions$$6$$ && "skyros" === $userOptions$$6$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtPanZoomControlPanelDefaults$$.$SKIN_SKYROS$, D.$DvtPanZoomControlPanelDefaults$$.$DEFAULT$) : $userOptions$$6$$ && "alta" === $userOptions$$6$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtPanZoomControlPanelDefaults$$.$SKIN_ALTA$, D.$DvtPanZoomControlPanelDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.clone(D.$DvtPanZoomControlPanelDefaults$$.$DEFAULT$)
};
D.$DvtPanZoomControlPanelResources$$ = function $$DvtPanZoomControlPanelResources$$$($parent$$83$$) {
  this.Init($parent$$83$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelResources$$, D.$DvtObj$$, "DvtPanZoomControlPanelResources");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomControlPanelResources$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($parent$$84$$) {
  $parent$$84$$ ? (this.$_controlPanelExpandTooltip$ = $parent$$84$$.$getAttr$("cpe"), this.$_controlPanelCollapseTooltip$ = $parent$$84$$.$getAttr$("cpc"), this.$_panControlCenterTooltip$ = $parent$$84$$.$getAttr$("pcc"), this.$_panControlTooltip$ = $parent$$84$$.$getAttr$("pc"), this.$_zoomToFitTooltip$ = $parent$$84$$.$getAttr$("ztf"), this.$_zoomInTooltip$ = $parent$$84$$.$getAttr$("zi"), this.$_zoomOutTooltip$ = $parent$$84$$.$getAttr$("zo"), this.$_panelCardTooltip$ = $parent$$84$$.$getAttr$("pcs"), 
  this.$_layoutHierVertTopTooltip$ = $parent$$84$$.$getAttr$("lhvt"), this.$_layoutHierHorzLeftTooltip$ = $parent$$84$$.$getAttr$("lhhl"), this.$_layoutTreeTooltip$ = $parent$$84$$.$getAttr$("lt"), this.$_layoutRadialTooltip$ = $parent$$84$$.$getAttr$("lr"), this.$_layoutCircleTooltip$ = $parent$$84$$.$getAttr$("lc"), this.$_layoutTooltip$ = $parent$$84$$.$getAttr$("lo")) : (this.$_controlPanelExpandTooltip$ = "Show Control Panel (/)", this.$_controlPanelCollapseTooltip$ = "Hide (/)", this.$_panControlCenterTooltip$ = 
  "Zoom and Center (Ctrl+Alt+0)", this.$_panControlTooltip$ = "Pan", this.$_zoomToFitTooltip$ = "Zoom to Fit (0)", this.$_zoomInTooltip$ = "Zoom In (+)", this.$_zoomOutTooltip$ = "Zoom Out (-)", this.$_panelCardTooltip$ = "View", this.$_layoutHierVertTopTooltip$ = "Vertical, Top Down", this.$_layoutHierHorzLeftTooltip$ = "Horizontal, Left-to-Right", this.$_layoutTreeTooltip$ = "Tree", this.$_layoutRadialTooltip$ = "Radial", this.$_layoutCircleTooltip$ = "Circle", this.$_layoutTooltip$ = "Layout")
};
D.$JSCompiler_prototypeAlias$$.$getLayoutHierVertTopTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutHierVertTopTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutHierHorzLeftTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutHierHorzLeftTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutTreeTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutTreeTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutRadialTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutRadialTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutCircleTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutCircleTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutTooltip$");
D.$DvtPanZoomControlPanelEventManager$$ = function $$DvtPanZoomControlPanelEventManager$$$($context$$549$$, $callback$$117$$, $callbackObj$$88$$) {
  this.Init($context$$549$$, $callback$$117$$, $callbackObj$$88$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelEventManager$$, D.$DvtEventManager$$, "DvtPanZoomControlPanelEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomControlPanelEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$494$$) {
  var $obj$$301$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$494$$));
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$494$$);
  $obj$$301$$ && ($obj$$301$$.$HandleMouseDown$ && $obj$$301$$.$HandleMouseDown$($event$$494$$), $event$$494$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$495$$) {
  var $obj$$302$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$495$$));
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$495$$);
  $obj$$302$$ && ($obj$$302$$.$HandleMouseUp$ && $obj$$302$$.$HandleMouseUp$($event$$495$$), $event$$495$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$496$$) {
  var $obj$$303$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$496$$));
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$496$$);
  $obj$$303$$ && ($obj$$303$$.$HandleMouseOut$ && $obj$$303$$.$HandleMouseOut$($event$$496$$), $event$$496$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$497$$) {
  var $obj$$304$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$497$$));
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $event$$497$$);
  $obj$$304$$ && ($obj$$304$$.$HandleClick$ && $obj$$304$$.$HandleClick$($event$$497$$), $event$$497$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$498$$) {
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$498$$);
  var $obj$$305$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$498$$));
  $obj$$305$$ && $obj$$305$$.$HandleRollOver$ && $obj$$305$$.$HandleRollOver$($event$$498$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$499$$) {
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$499$$);
  var $obj$$306$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$499$$));
  $obj$$306$$ && $obj$$306$$.$HandleRollOut$ && $obj$$306$$.$HandleRollOut$($event$$499$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$500$$) {
  var $obj$$307$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$500$$));
  $obj$$307$$ && ($obj$$307$$.$HandleClick$ && $obj$$307$$.$HandleClick$($event$$500$$), $event$$500$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$501$$) {
  $event$$501$$.$blockTouchHold$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$501$$)
};
D.$DvtPanZoomControlPanelEventHandlerProxy$$ = function $$DvtPanZoomControlPanelEventHandlerProxy$$$($callback$$52$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$4$$) {
  this.Init($callback$$52$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelEventHandlerProxy$$, D.$DvtObj$$, "DvtPanZoomControlPanelEventHandlerProxy");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomControlPanelEventHandlerProxy$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($callbackObj$$28$$, $handleClick$$1$$, $handleMouseDown$$1$$, $handleMouseUp$$1$$, $handleMouseOut$$1$$, $handleMouseOver$$1$$, $tooltip$$5$$) {
  this.$_callbackObj$ = $callbackObj$$28$$;
  this.$_handleClick$ = $handleClick$$1$$;
  this.$_handleMouseUp$ = $handleMouseUp$$1$$;
  this.$_handleMouseDown$ = $handleMouseDown$$1$$;
  this.$_handleMouseOut$ = $handleMouseOut$$1$$;
  this.$_handleMouseOver$ = $handleMouseOver$$1$$;
  this.$_tooltip$ = $tooltip$$5$$
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$34$$) {
  this.$_handleClick$ && this.$_handleClick$.call(this.$_callbackObj$, $event$$34$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$35$$) {
  this.$_handleMouseDown$ && this.$_handleMouseDown$.call(this.$_callbackObj$, $event$$35$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseUp$$($event$$36$$) {
  this.$_handleMouseUp$ && this.$_handleMouseUp$.call(this.$_callbackObj$, $event$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$($event$$37$$) {
  this.$_handleMouseOut$ && this.$_handleMouseOut$.call(this.$_callbackObj$, $event$$37$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$($event$$38$$) {
  this.$_handleMouseOver$ && this.$_handleMouseOver$.call(this.$_callbackObj$, $event$$38$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$DvtPanZoomControlPanelLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelLAFUtils$$, D.$DvtObj$$, "DvtPanZoomControlPanelLAFUtils");
D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_TOP$ = "top";
D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_RIGHT$ = "right";
D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_LEFT$ = "left";
D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_BOTTOM$ = "bottom";
D.$DvtPanZoomControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtPanZoomControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtPanZoomControlPanelLAFUtils$$.$getViewPanelHeight$ = function $$DvtPanZoomControlPanelLAFUtils$$$$getViewPanelHeight$$() {
  return D.$DvtPanZoomControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$getViewPanelHalfHeight$ = function $$DvtPanZoomControlPanelLAFUtils$$$$getViewPanelHalfHeight$$() {
  return D.$DvtPanZoomControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewOpenShape$ = function $$DvtPanZoomControlPanelLAFUtils$$$$createEmptyViewOpenShape$$($context$$90_mc$$2$$, $nw$$, $nh$$2$$, $bL2R$$, $styleMap$$36$$) {
  $nw$$ || ($nw$$ = 86);
  $nh$$2$$ || ($nh$$2$$ = 47);
  $bL2R$$ === D.$JSCompiler_alias_VOID$$ && ($bL2R$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$11$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$36$$, "border-radius", 0));
  $context$$90_mc$$2$$ = D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($context$$90_mc$$2$$, $r$$11$$, $nw$$ - 2 * $r$$11$$, $nh$$2$$ - 2 * $r$$11$$, $bL2R$$);
  $context$$90_mc$$2$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$36$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$90_mc$$2$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelper$ = function $$DvtPanZoomControlPanelLAFUtils$$$$makeViewOpenShapeHelper$$($context$$91$$, $r$$12$$, $ww$$18$$, $hh$$14$$, $bL2R$$1$$) {
  var $x$$86$$ = $ww$$18$$ + $r$$12$$, $y$$63$$ = $hh$$14$$ + $r$$12$$, $cmds$$6$$ = window.DvtPathUtils.moveTo($x$$86$$ + $r$$12$$, $y$$63$$ + $r$$12$$), $cmds$$6$$ = $cmds$$6$$ + window.DvtPathUtils.lineTo($x$$86$$ - $ww$$18$$, $y$$63$$ + $r$$12$$), $x$$86$$ = $x$$86$$ - $ww$$18$$, $cmds$$6$$ = $cmds$$6$$ + window.DvtPathUtils.lineTo($x$$86$$ - $r$$12$$, $y$$63$$ + $r$$12$$), $cmds$$6$$ = $cmds$$6$$ + window.DvtPathUtils.lineTo($x$$86$$ - $r$$12$$, $y$$63$$ - $hh$$14$$), $y$$63$$ = $y$$63$$ - $hh$$14$$;
  $bL2R$$1$$ ? ($cmds$$6$$ += window.DvtPathUtils.$quadTo$(-$r$$12$$ + $x$$86$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$12$$ + $y$$63$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$12$$ + $x$$86$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$12$$ + $y$$63$$) + window.DvtPathUtils.$quadTo$(-D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$12$$ + $x$$86$$, -$r$$12$$ + $y$$63$$, $x$$86$$, -$r$$12$$ + $y$$63$$) + window.DvtPathUtils.lineTo($x$$86$$, -$r$$12$$ + 
  $y$$63$$), $cmds$$6$$ += window.DvtPathUtils.lineTo($x$$86$$ + $ww$$18$$ + $r$$12$$, -$r$$12$$ + $y$$63$$), $cmds$$6$$ += window.DvtPathUtils.lineTo($x$$86$$ + $ww$$18$$ + $r$$12$$, $y$$63$$ + $hh$$14$$)) : ($cmds$$6$$ += window.DvtPathUtils.lineTo($x$$86$$ - $r$$12$$, -$r$$12$$ + $y$$63$$), $cmds$$6$$ += window.DvtPathUtils.lineTo($x$$86$$ + $ww$$18$$, -$r$$12$$ + $y$$63$$), $x$$86$$ += $ww$$18$$, $cmds$$6$$ += window.DvtPathUtils.$quadTo$(D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$12$$ + 
  $x$$86$$, -$r$$12$$ + $y$$63$$, D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$12$$ + $x$$86$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$12$$ + $y$$63$$) + window.DvtPathUtils.$quadTo$($r$$12$$ + $x$$86$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$12$$ + $y$$63$$, $r$$12$$ + $x$$86$$, $y$$63$$) + window.DvtPathUtils.lineTo($x$$86$$ + $r$$12$$, $y$$63$$ + $hh$$14$$));
  $cmds$$6$$ += window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$91$$, $cmds$$6$$)
};
D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewClosedShape$ = function $$DvtPanZoomControlPanelLAFUtils$$$$createEmptyViewClosedShape$$($context$$92_mc$$3$$, $buttonHeight$$3_nh$$3$$, $styleMap$$37$$, $arPoints$$2_bR2L$$5_color$$8$$) {
  $buttonHeight$$3_nh$$3$$ || ($buttonHeight$$3_nh$$3$$ = 47);
  var $r$$13$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "border-radius", 0)), $buttonWidth$$4$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "openCloseButtonWidth", 0);
  $buttonHeight$$3_nh$$3$$ = window.Math.max($buttonHeight$$3_nh$$3$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "buttonHeight", $buttonHeight$$3_nh$$3$$));
  $arPoints$$2_bR2L$$5_color$$8$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$4$$, $buttonHeight$$3_nh$$3$$, $r$$13$$, $arPoints$$2_bR2L$$5_color$$8$$);
  $arPoints$$2_bR2L$$5_color$$8$$ = $arPoints$$2_bR2L$$5_color$$8$$.concat("Z");
  $context$$92_mc$$3$$ = new D.$DvtPath$$($context$$92_mc$$3$$, $arPoints$$2_bR2L$$5_color$$8$$, "cls_shape");
  ($arPoints$$2_bR2L$$5_color$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "tab-color-inactive", D.$JSCompiler_alias_NULL$$)) || ($arPoints$$2_bR2L$$5_color$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $context$$92_mc$$3$$.$setSolidFill$($arPoints$$2_bR2L$$5_color$$8$$);
  return $context$$92_mc$$3$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewClosedFrame$ = function $$DvtPanZoomControlPanelLAFUtils$$$$createEmptyViewClosedFrame$$($context$$93_mc$$4$$, $buttonHeight$$4_nh$$4$$, $styleMap$$38$$, $arPoints$$3_bR2L$$6$$) {
  $buttonHeight$$4_nh$$4$$ || ($buttonHeight$$4_nh$$4$$ = 47);
  var $r$$14$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$38$$, "border-radius", 0)), $buttonWidth$$5$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$38$$, "openCloseButtonWidth", 0);
  $buttonHeight$$4_nh$$4$$ = window.Math.max($buttonHeight$$4_nh$$4$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$38$$, "buttonHeight", $buttonHeight$$4_nh$$4$$));
  $arPoints$$3_bR2L$$6$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$5$$, $buttonHeight$$4_nh$$4$$, $r$$14$$, $arPoints$$3_bR2L$$6$$);
  $arPoints$$3_bR2L$$6$$ = $arPoints$$3_bR2L$$6$$.concat("Z");
  $context$$93_mc$$4$$ = new D.$DvtPath$$($context$$93_mc$$4$$, $arPoints$$3_bR2L$$6$$, "cls_shape");
  $context$$93_mc$$4$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$38$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $context$$93_mc$$4$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $context$$93_mc$$4$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$renderEmptyZoomShape$ = function $$DvtPanZoomControlPanelLAFUtils$$$$renderEmptyZoomShape$$($context$$94_mc$$5$$, $nh$$5$$, $styleMap$$39$$, $openSide$$, $openSideSize$$) {
  $nh$$5$$ || ($nh$$5$$ = 137);
  var $r$$15$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$39$$, "border-radius", 0)), $cpWidth$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$39$$, "tabSize", 0), $ww$$19$$ = $cpWidth$$ - 2 * $r$$15$$, $hh$$15$$ = $nh$$5$$ + 7 - 2 * $r$$15$$;
  $context$$94_mc$$5$$ = $openSide$$ && $openSideSize$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$94_mc$$5$$, $r$$15$$, $cpWidth$$, $nh$$5$$, $openSide$$, $openSideSize$$) : D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$94_mc$$5$$, $r$$15$$, $ww$$19$$, $hh$$15$$);
  $context$$94_mc$$5$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$39$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$94_mc$$5$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$renderEmptyZoomFrame$ = function $$DvtPanZoomControlPanelLAFUtils$$$$renderEmptyZoomFrame$$($context$$95$$, $nh$$6$$, $roundBottomRight$$, $styleMap$$40$$, $openSide$$1$$, $openSideSize$$1$$) {
  $nh$$6$$ || ($nh$$6$$ = 137);
  $roundBottomRight$$ || ($roundBottomRight$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$16$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "border-radius", 0)), $cpWidth$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "tabSize", 0), $ww$$20$$ = $cpWidth$$1$$ - 2 * $r$$16$$, $hh$$16$$ = $nh$$6$$ + 7 - 2 * $r$$16$$, $mc$$6$$ = D.$JSCompiler_alias_NULL$$, $mc$$6$$ = $openSide$$1$$ && $openSideSize$$1$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$95$$, $r$$16$$, $cpWidth$$1$$, $nh$$6$$, $openSide$$1$$, $openSideSize$$1$$) : 
  D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$95$$, $r$$16$$, $ww$$20$$, $hh$$16$$, $roundBottomRight$$);
  $mc$$6$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $mc$$6$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $mc$$6$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelper$ = function $$DvtPanZoomControlPanelLAFUtils$$$$makeZoomShapeHelper$$($context$$96$$, $r$$17$$, $ww$$21$$, $hh$$17$$, $roundBottomRight$$1$$) {
  $roundBottomRight$$1$$ || ($roundBottomRight$$1$$ = D.$JSCompiler_alias_TRUE$$);
  var $x$$87$$ = $ww$$21$$ + $r$$17$$, $y$$64$$ = $hh$$17$$, $cmds$$7$$ = window.DvtPathUtils.moveTo($x$$87$$ + $r$$17$$, $y$$64$$), $cmds$$7$$ = $roundBottomRight$$1$$ ? $cmds$$7$$ + (window.DvtPathUtils.$quadTo$($r$$17$$ + $x$$87$$, D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$17$$ + $y$$64$$, D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$17$$ + $x$$87$$, D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$17$$ + $y$$64$$) + window.DvtPathUtils.$quadTo$(D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * 
  $r$$17$$ + $x$$87$$, $r$$17$$ + $y$$64$$, $x$$87$$, $r$$17$$ + $y$$64$$) + window.DvtPathUtils.lineTo($x$$87$$, $r$$17$$ + $y$$64$$)) : $cmds$$7$$ + window.DvtPathUtils.lineTo($x$$87$$ + $r$$17$$, $y$$64$$ + $r$$17$$), $cmds$$7$$ = $cmds$$7$$ + window.DvtPathUtils.lineTo($x$$87$$ - $ww$$21$$, $r$$17$$ + $y$$64$$), $x$$87$$ = $x$$87$$ - $ww$$21$$, $cmds$$7$$ = $cmds$$7$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$17$$ + $x$$87$$, $r$$17$$ + $y$$64$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * 
  $r$$17$$ + $x$$87$$, D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$17$$ + $y$$64$$) + window.DvtPathUtils.$quadTo$(-$r$$17$$ + $x$$87$$, D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$17$$ + $y$$64$$, -$r$$17$$ + $x$$87$$, $y$$64$$) + window.DvtPathUtils.lineTo(-$r$$17$$ + $x$$87$$, $y$$64$$) + window.DvtPathUtils.lineTo(-$r$$17$$ + $x$$87$$, $y$$64$$ - $hh$$17$$)), $y$$64$$ = $y$$64$$ - $hh$$17$$, $cmds$$7$$ = $cmds$$7$$ + (window.DvtPathUtils.lineTo($x$$87$$ + $ww$$21$$ + $r$$17$$, 
  $y$$64$$) + window.DvtPathUtils.lineTo($x$$87$$ + $ww$$21$$ + $r$$17$$, $y$$64$$ + $hh$$17$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$96$$, $cmds$$7$$)
};
D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$ = function $$DvtPanZoomControlPanelLAFUtils$$$$makeZoomShapeHelperOpenSide$$($context$$97$$, $arPoints$$4_r$$18$$, $width$$29$$, $height$$29$$, $openSide$$2$$, $openSideSize$$2$$) {
  $arPoints$$4_r$$18$$ = D.$DvtPanZoomControlPanelLAFUtils$$.$GetShapePathCommands$($width$$29$$, $height$$29$$, $arPoints$$4_r$$18$$, $openSide$$2$$, $openSideSize$$2$$);
  return new D.$DvtPath$$($context$$97$$, $arPoints$$4_r$$18$$)
};
D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$ = function $$DvtPanZoomControlPanelLAFUtils$$$$makeViewOpenShapeHelperOpenSide$$($context$$98$$, $arPoints$$5_r$$19$$, $width$$30$$, $height$$30$$, $openSide$$3$$, $openSideSize$$3$$) {
  $arPoints$$5_r$$19$$ = D.$DvtPanZoomControlPanelLAFUtils$$.$GetShapePathCommands$($width$$30$$, $height$$30$$, $arPoints$$5_r$$19$$, $openSide$$3$$, $openSideSize$$3$$);
  return new D.$DvtPath$$($context$$98$$, $arPoints$$5_r$$19$$)
};
D.$DvtPanZoomControlPanelLAFUtils$$.$GetShapePathCommands$ = function $$DvtPanZoomControlPanelLAFUtils$$$$GetShapePathCommands$$($width$$31$$, $height$$31$$, $r$$20$$, $openSide$$4$$, $openSideSize$$4$$) {
  var $arPoints$$6$$, $bidi$$1$$ = D.$DvtAgent$$.$isRightToLeft$();
  $openSide$$4$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_TOP$ && !$bidi$$1$$ && ($arPoints$$6$$ = ["M", $width$$31$$, 0, "L", $width$$31$$, $height$$31$$ - $r$$20$$, "A", $r$$20$$, $r$$20$$, 0, 0, 1, $width$$31$$ - $r$$20$$, $height$$31$$, "L", 0, $height$$31$$, "L", 0, 0]);
  $openSide$$4$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_TOP$ && $bidi$$1$$ ? $arPoints$$6$$ = ["M", $width$$31$$, 0, "L", $width$$31$$, $height$$31$$, "L", $r$$20$$, $height$$31$$, "A", $r$$20$$, $r$$20$$, 0, 0, 1, 0, $height$$31$$ - $r$$20$$, "L", 0, 0] : $openSide$$4$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_RIGHT$ && !$bidi$$1$$ ? $arPoints$$6$$ = ["M", $width$$31$$, $openSideSize$$4$$, "L", $width$$31$$, $height$$31$$ - $r$$20$$, "A", $r$$20$$, $r$$20$$, 0, 0, 1, $width$$31$$ - $r$$20$$, 
  $height$$31$$, "L", 0, $height$$31$$, "L", 0, 0, "L", $width$$31$$, 0] : $openSide$$4$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_RIGHT$ && $bidi$$1$$ ? $arPoints$$6$$ = ["M", 0, 0, "L", $width$$31$$, 0, "L", $width$$31$$, $height$$31$$, "L", $r$$20$$, $height$$31$$, "A", $r$$20$$, $r$$20$$, 0, 0, 1, 0, $height$$31$$ - $r$$20$$, "L", 0, $openSideSize$$4$$] : $openSide$$4$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_LEFT$ && !$bidi$$1$$ ? $arPoints$$6$$ = ["M", 0, 0, "L", $width$$31$$ - $r$$20$$, 
  0, "A", $r$$20$$, $r$$20$$, 0, 0, 1, $width$$31$$, $r$$20$$, "L", $width$$31$$, $height$$31$$ - $r$$20$$, "A", $r$$20$$, $r$$20$$, 0, 0, 1, $width$$31$$ - $r$$20$$, $height$$31$$, "L", 0, $height$$31$$] : $openSide$$4$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_LEFT$ && $bidi$$1$$ ? $arPoints$$6$$ = ["M", $width$$31$$, $height$$31$$, "L", $r$$20$$, $height$$31$$, "A", $r$$20$$, $r$$20$$, 0, 0, 1, 0, $height$$31$$ - $r$$20$$, "L", 0, $r$$20$$, "A", $r$$20$$, $r$$20$$, 0, 0, 1, $r$$20$$, 0, "L", 
  $width$$31$$, 0] : $openSide$$4$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_BOTTOM$ && !$bidi$$1$$ ? $arPoints$$6$$ = ["M", 0, $height$$31$$, "L", 0, 0, "L", $width$$31$$ - $r$$20$$, 0, "A", $r$$20$$, $r$$20$$, 0, 0, 1, $width$$31$$, $r$$20$$, "L", $width$$31$$, $height$$31$$ - $r$$20$$, "A", $r$$20$$, $r$$20$$, 0, 0, 1, $width$$31$$ - $r$$20$$, $height$$31$$, "L", $openSideSize$$4$$, $height$$31$$] : $openSide$$4$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_BOTTOM$ && $bidi$$1$$ && ($arPoints$$6$$ = 
  ["M", $width$$31$$, $height$$31$$, "L", $width$$31$$, 0, "L", $r$$20$$, 0, "A", $r$$20$$, $r$$20$$, 0, 0, 0, 0, $r$$20$$, "L", 0, $height$$31$$ - $r$$20$$, "A", $r$$20$$, $r$$20$$, 0, 0, 0, $r$$20$$, $height$$31$$, "L", $width$$31$$ - $openSideSize$$4$$, $height$$31$$]);
  return $arPoints$$6$$
};
D.$DvtAbstractComponent$$ = function $$DvtAbstractComponent$$$($context$$543$$) {
  this.Init($context$$543$$)
};
(0,D.$goog$exportSymbol$$)("DvtAbstractComponent", D.$DvtAbstractComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractComponent$$, D.$DvtContainer$$, "DvtAbstractComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAbstractComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$544$$) {
  D.$DvtAbstractComponent$$.$superclass$.Init.call(this, $context$$544$$);
  this.$_backgroundPane$ = new D.$DvtRect$$($context$$544$$, 0, 0, 0, 0);
  this.$addChild$(this.$_backgroundPane$);
  this.$_legendStyleMap$ = this.$_controlPanelStyleMap$ = this.$_compCSSStyle$ = this.$_resourcesMap$ = D.$JSCompiler_alias_NULL$$;
  this.$_skinName$ = "";
  this.$_bRenderNullXml$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bSupportsVectorEffects$ = !D.$DvtAgent$$.$isPlatformIE$() && !(D.$DvtAgent$$.$isPlatformGecko$() && 17 >= D.$DvtAgent$$.$getVersion$())
};
D.$JSCompiler_prototypeAlias$$.$renderComponent$ = function $$JSCompiler_prototypeAlias$$$$renderComponent$$() {
  this.$InitComponentInternal$();
  this.$RenderComponentInternal$()
};
D.$JSCompiler_prototypeAlias$$.$InitComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$InitComponentInternal$$() {
  this.$_bAbsCompRendered$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$RenderComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$RenderComponentInternal$$() {
  this.$_bAbsCompRendered$ || this.$RenderBackground$();
  this.$_bAbsCompRendered$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$loadXml$ = function $$JSCompiler_prototypeAlias$$$$loadXml$$($rootXmlNode$$7_xmlString$$17$$, $eventType$$17$$, $paramKeys$$5$$, $paramValues$$5$$) {
  var $parser$$5$$ = new D.$DvtXmlParser$$;
  if($parser$$5$$ && ($rootXmlNode$$7_xmlString$$17$$ = $parser$$5$$.parse($rootXmlNode$$7_xmlString$$17$$))) {
    if("r" === $rootXmlNode$$7_xmlString$$17$$.getName() && ($rootXmlNode$$7_xmlString$$17$$ = $rootXmlNode$$7_xmlString$$17$$.getFirstChild()), $rootXmlNode$$7_xmlString$$17$$) {
      switch($eventType$$17$$) {
        default:
          this.$LoadXmlInitial$($eventType$$17$$, $rootXmlNode$$7_xmlString$$17$$, $paramKeys$$5$$, $paramValues$$5$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$LoadXmlInitial$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($xmlString$$18$$, $width$$87$$, $height$$82$$) {
  this.$_width$ = $width$$87$$;
  this.$_height$ = $height$$82$$;
  this.$_backgroundPane$.$setWidth$(this.$_width$);
  this.$_backgroundPane$.$setHeight$(this.$_height$);
  $xmlString$$18$$ ? $xmlString$$18$$ = this.$ProcessJSON$($xmlString$$18$$) : this.$_bRenderNullXml$ = D.$JSCompiler_alias_TRUE$$;
  this.$loadXml$($xmlString$$18$$);
  this.$renderComponent$();
  this.$_bRenderNullXml$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtAbstractComponent$$.prototype.render = D.$DvtAbstractComponent$$.prototype.$render$;
D.$DvtAbstractComponent$$.prototype.$RenderBackground$ = function $$DvtAbstractComponent$$$$$RenderBackground$$() {
  if(this.$_compCSSStyle$) {
    var $fill$$39_fillType$$inline_5675$$;
    var $bgColor$$inline_5676_compCSSStyle$$inline_5674$$ = this.$_compCSSStyle$;
    $bgColor$$inline_5676_compCSSStyle$$inline_5674$$ ? ($fill$$39_fillType$$inline_5675$$ = $bgColor$$inline_5676_compCSSStyle$$inline_5674$$.$getStyle$("fill-type"), ($bgColor$$inline_5676_compCSSStyle$$inline_5674$$ = $bgColor$$inline_5676_compCSSStyle$$inline_5674$$.$getStyle$("background-color")) || ($bgColor$$inline_5676_compCSSStyle$$inline_5674$$ = "#7396C8"), $fill$$39_fillType$$inline_5675$$ = "solid" == $fill$$39_fillType$$inline_5675$$ ? new D.$DvtSolidFill$$($bgColor$$inline_5676_compCSSStyle$$inline_5674$$) : 
    (0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, $bgColor$$inline_5676_compCSSStyle$$inline_5674$$)) : $fill$$39_fillType$$inline_5675$$ = D.$JSCompiler_alias_VOID$$;
    $fill$$39_fillType$$inline_5675$$ && this.$_backgroundPane$.$setFill$($fill$$39_fillType$$inline_5675$$)
  }else {
    "none" != this.$_backgroundColor$ ? ($fill$$39_fillType$$inline_5675$$ = (0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, this.$_backgroundColor$), this.$_backgroundPane$.$setFill$($fill$$39_fillType$$inline_5675$$)) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_backgroundPane$)
  }
};
D.$JSCompiler_StaticMethods__getBackgroundGradient$$ = function $$JSCompiler_StaticMethods__getBackgroundGradient$$$($JSCompiler_StaticMethods__getBackgroundGradient$self$$, $color$$60$$) {
  var $arColors$$26_newColor_rrRatio$$1$$, $arAlphas$$25_bgAlpha$$2$$ = 1;
  if($color$$60$$ && "#7396C8" != $color$$60$$) {
    $arAlphas$$25_bgAlpha$$2$$ = D.$DvtColorUtils$$.$getAlpha$($color$$60$$);
    $arColors$$26_newColor_rrRatio$$1$$ = (D.$DvtColorUtils$$.$getRed$("#AECDEA") - D.$DvtColorUtils$$.$getRed$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getRed$("#7396C8"));
    var $arStops$$23_bgRgb_ggRatio$$1$$ = (D.$DvtColorUtils$$.$getGreen$("#AECDEA") - D.$DvtColorUtils$$.$getGreen$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getGreen$("#7396C8")), $bbRatio$$1_gw$$ = (D.$DvtColorUtils$$.$getBlue$("#AECDEA") - D.$DvtColorUtils$$.$getBlue$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getBlue$("#7396C8")), $gh_rr$$2$$ = D.$DvtColorUtils$$.$getRed$($color$$60$$), $gg$$2_gx_ww$$88$$ = D.$DvtColorUtils$$.$getGreen$($color$$60$$), $bb$$3_cx$$31$$ = D.$DvtColorUtils$$.$getBlue$($color$$60$$);
    $arColors$$26_newColor_rrRatio$$1$$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($gh_rr$$2$$ + $arColors$$26_newColor_rrRatio$$1$$ * (255 - $gh_rr$$2$$)), window.Math.round($gg$$2_gx_ww$$88$$ + $arStops$$23_bgRgb_ggRatio$$1$$ * (255 - $gg$$2_gx_ww$$88$$)), window.Math.round($bb$$3_cx$$31$$ + $bbRatio$$1_gw$$ * (255 - $bb$$3_cx$$31$$)));
    $arStops$$23_bgRgb_ggRatio$$1$$ = D.$DvtColorUtils$$.$getRGB$($color$$60$$);
    $arColors$$26_newColor_rrRatio$$1$$ = ["#FFFFFF", "#FFFFFF", $arColors$$26_newColor_rrRatio$$1$$, $arStops$$23_bgRgb_ggRatio$$1$$]
  }else {
    $arColors$$26_newColor_rrRatio$$1$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
  }
  var $arAlphas$$25_bgAlpha$$2$$ = [$arAlphas$$25_bgAlpha$$2$$, $arAlphas$$25_bgAlpha$$2$$, $arAlphas$$25_bgAlpha$$2$$, $arAlphas$$25_bgAlpha$$2$$], $arStops$$23_bgRgb_ggRatio$$1$$ = [0, 45 / 255, 190 / 255, 1], $gg$$2_gx_ww$$88$$ = $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_width$, $bbRatio$$1_gw$$ = 1.7 * 1.7 * $gg$$2_gx_ww$$88$$, $gh_rr$$2$$ = 1.7 * $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_height$, $gg$$2_gx_ww$$88$$ = 0 + ($gg$$2_gx_ww$$88$$ - $bbRatio$$1_gw$$) / 
  2, $bb$$3_cx$$31$$ = $gg$$2_gx_ww$$88$$ + $bbRatio$$1_gw$$ / 2, $cy$$32$$ = -35 + $gh_rr$$2$$ / 2, $r$$62$$ = 1.5 * window.Math.min($bbRatio$$1_gw$$ / 2, $gh_rr$$2$$ / 2);
  return new D.$DvtRadialGradientFill$$($arColors$$26_newColor_rrRatio$$1$$, $arAlphas$$25_bgAlpha$$2$$, $arStops$$23_bgRgb_ggRatio$$1$$, $bb$$3_cx$$31$$, $cy$$32$$, $r$$62$$, [$gg$$2_gx_ww$$88$$, -35, $bbRatio$$1_gw$$, $gh_rr$$2$$])
};
D.$JSCompiler_StaticMethods_getResourcesMap$$ = function $$JSCompiler_StaticMethods_getResourcesMap$$$($JSCompiler_StaticMethods_getResourcesMap$self$$) {
  $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ || ($JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ = {});
  return $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$
};
D.$DvtAbstractComponent$$.prototype.$setSkinName$ = (0,D.$JSCompiler_set$$)("$_skinName$");
D.$DvtAbstractComponent$$.prototype.$getControlPanelStyleMap$ = (0,D.$JSCompiler_get$$)("$_controlPanelStyleMap$");
D.$JSCompiler_StaticMethods_parseComponentAttrs$$ = function $$JSCompiler_StaticMethods_parseComponentAttrs$$$($JSCompiler_StaticMethods_parseComponentAttrs$self$$, $xmlNode$$82$$) {
  var $compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$;
  $compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$ = (0,D.$JSCompiler_StaticMethods_parseComponentStyle$$)($xmlNode$$82$$.$getAttr$("skinStyle"), D.$JSCompiler_alias_NULL$$);
  if($compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$ = (0,D.$JSCompiler_StaticMethods_parseComponentStyle$$)($xmlNode$$82$$.$getAttr$("inlineStyle"), $compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$)) {
    $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_compCSSStyle$ = $compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$
  }
  var $cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$ = {};
  if($compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$ = $xmlNode$$82$$.$getAttr$("skin")) {
    $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$setSkinName$($compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$), $cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$.skin = $compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$
  }
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "background-color", $xmlNode$$82$$.$getAttr$("cpBackgroundColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "border-color", $xmlNode$$82$$.$getAttr$("cpBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "border-radius", $xmlNode$$82$$.$getAttr$("cpBorderRadius"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "box-shadow", $xmlNode$$82$$.$getAttr$("cpBoxShadow"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "tab-color-inactive", $xmlNode$$82$$.$getAttr$("tabBgColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "tab-border-color-inactive", $xmlNode$$82$$.$getAttr$("tabBorderColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "scrollbarBackground", $xmlNode$$82$$.$getAttr$("scrollbarBg"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "scrollbarBorderColor", $xmlNode$$82$$.$getAttr$("scrollbarBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "scrollbarHandleColor", $xmlNode$$82$$.$getAttr$("scrollbarHandleColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "scrollbarHandleActiveColor", $xmlNode$$82$$.$getAttr$("scrollbarHandleActiveColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$, "scrollbarHandleHoverColor", $xmlNode$$82$$.$getAttr$("scrollbarHandleHoverColor"));
  $cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$ = D.$DvtPanZoomControlPanelDefaults$$.$calcOptions$($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_controlPanelStyleMap$ = $cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$;
  $cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$ = {};
  $compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$ && ($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$.skin = $compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$);
  $compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$ = D.$DvtCommonLegendDefaults$$.$calcOptions$($cpStyleMap$$inline_5683_legendStyleMap$$inline_5685$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_legendStyleMap$ = $compCSSStyle$$1_skinName$$inline_5684_styleMap$$inline_9539$$
};
D.$JSCompiler_StaticMethods_parseComponentStyle$$ = function $$JSCompiler_StaticMethods_parseComponentStyle$$$($attr$$31$$, $compCSSStyle$$2$$) {
  $attr$$31$$ && ($compCSSStyle$$2$$ ? $compCSSStyle$$2$$.$merge$(new D.$DvtCSSStyle$$($attr$$31$$)) : $compCSSStyle$$2$$ = new D.$DvtCSSStyle$$($attr$$31$$));
  return $compCSSStyle$$2$$
};
D.$DvtAbstractComponent$$.prototype.$ProcessJSON$ = (0,D.$JSCompiler_identityFn$$)();
D.$DvtAbstractPanZoomComponent$$ = function $$DvtAbstractPanZoomComponent$$$($context$$547$$) {
  this.Init($context$$547$$)
};
(0,D.$goog$exportSymbol$$)("DvtAbstractPanZoomComponent", D.$DvtAbstractPanZoomComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractPanZoomComponent$$, D.$DvtAbstractComponent$$, "DvtAbstractPanZoomComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAbstractPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$548$$) {
  D.$DvtAbstractPanZoomComponent$$.$superclass$.Init.call(this, $context$$548$$);
  this.$_featuresOff$ = 0;
  this.$_controlPanelBehavior$ = "initCollapsed";
  this.$_displayedControls$ = 16777215
};
D.$JSCompiler_prototypeAlias$$.$InitComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$InitComponentInternal$$() {
  D.$DvtAbstractPanZoomComponent$$.$superclass$.$InitComponentInternal$.call(this);
  if(this.$_bRenderNullXml$) {
    this.$_panZoomCanvas$.$setSize$(this.$_width$, this.$_height$)
  }else {
    this.$_panZoomCanvas$ && (this.removeChild(this.$_panZoomCanvas$), this.$_panZoomCanvas$ = D.$JSCompiler_alias_NULL$$);
    this.$_panZoomCanvas$ = this.$CreatePanZoomCanvas$(this.$_width$, this.$_height$);
    this.$_panZoomCanvas$.$renderComponent$();
    var $controlPanel$$3$$ = this.$_panZoomCanvas$.$_controlPanel$;
    $controlPanel$$3$$ && $controlPanel$$3$$.$addEvtListener$("dvtPZCPExpand", this.$HandleControlPanelEvent$, D.$JSCompiler_alias_FALSE$$, this)
  }
  this.$SetClipRect$(this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$CreatePanZoomCanvas$ = function $$JSCompiler_prototypeAlias$$$$CreatePanZoomCanvas$$($ww$$93$$, $hh$$83$$) {
  var $JSCompiler_inline_result$$447_pzc$$13$$;
  a: {
    switch(this.$_controlPanelBehavior$) {
      case "initCollapsed":
        $JSCompiler_inline_result$$447_pzc$$13$$ = 0;
        break a;
      case "initExpanded":
        $JSCompiler_inline_result$$447_pzc$$13$$ = 1;
        break a;
      default:
        $JSCompiler_inline_result$$447_pzc$$13$$ = 2
    }
  }
  $JSCompiler_inline_result$$447_pzc$$13$$ = new D.$DvtPanZoomCanvas$$(this.$_context$, this.$_buttonImages$, $ww$$93$$, $hh$$83$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_inline_result$$447_pzc$$13$$, this.$_panZoomResources$, this.$_displayedControls$, this);
  $JSCompiler_inline_result$$447_pzc$$13$$.$addEvtListener$("dvtPan", this.$HandlePanEvent$, D.$JSCompiler_alias_FALSE$$, this);
  $JSCompiler_inline_result$$447_pzc$$13$$.$addEvtListener$("dvtZoom", this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addChildAt$($JSCompiler_inline_result$$447_pzc$$13$$, 1);
  return $JSCompiler_inline_result$$447_pzc$$13$$
};
D.$JSCompiler_prototypeAlias$$.$HandleControlPanelEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_getPanZoomCanvas$$ = function $$JSCompiler_StaticMethods_getPanZoomCanvas$$$($JSCompiler_StaticMethods_getPanZoomCanvas$self$$) {
  return $JSCompiler_StaticMethods_getPanZoomCanvas$self$$.$_panZoomCanvas$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAbstractPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$27$$, $dy$$30$$, $animator$$96$$) {
  this.$_panZoomCanvas$.$panBy$($dx$$27$$, $dy$$30$$, $animator$$96$$)
};
D.$JSCompiler_prototypeAlias$$.$panTo$ = function $$JSCompiler_prototypeAlias$$$$panTo$$($xx$$63$$, $yy$$63$$, $animator$$97$$) {
  this.$_panZoomCanvas$.$panTo$($xx$$63$$, $yy$$63$$, $animator$$97$$)
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$11$$, $xx$$64$$, $yy$$64$$, $animator$$98$$) {
  this.$_panZoomCanvas$.$zoomBy$($dz$$11$$, $xx$$64$$, $yy$$64$$, $animator$$98$$)
};
D.$JSCompiler_prototypeAlias$$.$zoomTo$ = function $$JSCompiler_prototypeAlias$$$$zoomTo$$($zz$$5$$, $xx$$65$$, $yy$$65$$, $animator$$99$$) {
  this.$_panZoomCanvas$.$zoomTo$($zz$$5$$, $xx$$65$$, $yy$$65$$, $animator$$99$$)
};
D.$JSCompiler_prototypeAlias$$.$zoomToFit$ = function $$JSCompiler_prototypeAlias$$$$zoomToFit$$($animator$$100$$) {
  this.$_panZoomCanvas$.$zoomToFit$($animator$$100$$)
};
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = (0,D.$JSCompiler_set$$)("$_featuresOff$");
D.$JSCompiler_prototypeAlias$$.$isChangeLayoutOff$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$getResources$ = (0,D.$JSCompiler_get$$)("$_resources$");
D.$JSCompiler_prototypeAlias$$.$setResources$ = (0,D.$JSCompiler_set$$)("$_resources$");
D.$JSCompiler_prototypeAlias$$.$setButtonImages$ = (0,D.$JSCompiler_set$$)("$_buttonImages$");
D.$JSCompiler_prototypeAlias$$.$isMouseWheelHandled$ = function $$JSCompiler_prototypeAlias$$$$isMouseWheelHandled$$() {
  return this.$_panZoomCanvas$.$_bZoomingEnabled$ && 0 == (this.$_featuresOff$ & 2)
};
D.$DvtAbstractPanZoomComponent$$.prototype.isMouseWheelHandled = D.$DvtAbstractPanZoomComponent$$.prototype.$isMouseWheelHandled$;
D.$DvtAbstractPanZoomComponent$$.prototype.$SetClipRect$ = function $$DvtAbstractPanZoomComponent$$$$$SetClipRect$$($ww$$94$$, $hh$$84$$) {
  var $clipPath$$10$$ = new D.$DvtClipPath$$("comp");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$10$$, this.$getTranslateX$(), this.$getTranslateY$(), $ww$$94$$, $hh$$84$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$10$$)
};
D.$DvtPanZoomCanvas$$ = function $$DvtPanZoomCanvas$$$($context$$545$$, $buttonImages$$7$$, $ww$$89$$, $hh$$79$$, $id$$237$$, $controlPanelState$$, $controlPanelResources$$, $displayedControls$$1$$, $view$$30$$) {
  this.Init($context$$545$$, $buttonImages$$7$$, $ww$$89$$, $hh$$79$$, $id$$237$$, $controlPanelState$$, $controlPanelResources$$, $displayedControls$$1$$, $view$$30$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvas$$, D.$DvtContainer$$, "DvtPanZoomCanvas");
D.$DvtPanZoomCanvas$$.prototype.Init = function $$DvtPanZoomCanvas$$$$Init$($context$$546$$, $buttonImages$$8$$, $ww$$90$$, $hh$$80$$, $id$$238$$, $controlPanelState$$1$$, $controlPanelResources$$1$$, $displayedControls$$2$$, $view$$31$$) {
  D.$DvtPanZoomCanvas$$.$superclass$.Init.call(this, $context$$546$$, D.$JSCompiler_alias_NULL$$, $id$$238$$);
  this.$_view$ = $view$$31$$;
  this.$_ww$ = $ww$$90$$;
  this.$_hh$ = $hh$$80$$;
  this.$_buttonImages$ = $buttonImages$$8$$;
  this.$_my$ = this.$_mx$ = this.$_py$ = this.$_px$ = 0;
  this.$_maxPanY$ = this.$_minPanY$ = this.$_maxPanX$ = this.$_minPanX$ = D.$JSCompiler_alias_NULL$$;
  this.$_minZoom$ = 0.1;
  this.$_maxZoom$ = 1;
  this.$_panIncrement$ = 15;
  this.$_zoomIncrement$ = 0.05;
  this.$_bTiltPanningEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomToFitPadding$ = 20;
  this.$_controlPanel$ = D.$JSCompiler_alias_NULL$$;
  this.$_controlPanelState$ = $controlPanelState$$1$$ ? $controlPanelState$$1$$ : 0;
  this.$_displayedControls$ = $displayedControls$$2$$ || 0 == $displayedControls$$2$$ ? $displayedControls$$2$$ : 16777215;
  this.$_controlPanelResources$ = $controlPanelResources$$1$$;
  this.$_bZoomToFitEnabled$ = this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  this.$_backgroundPane$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  this.$addChild$(this.$_backgroundPane$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_backgroundPane$);
  this.$_contentPane$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_contentPane$);
  this.$_contentPane$.$setMatrix$(new D.$DvtMatrix$$);
  this.$_animationDuration$ = 0.5;
  this.$_eventManager$ = new D.$DvtPanZoomCanvasEventManager$$($context$$546$$, this.$FireListener$, this);
  this.$_eventManager$.$addListeners$(this);
  this.$_clipIdSuffix$ = 1;
  this.$SetClipRect$($ww$$90$$, $hh$$80$$);
  this.$_bElasticConstraints$ = D.$JSCompiler_alias_FALSE$$;
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtPanZoomCanvas$$.prototype.$setSize$ = function $$DvtPanZoomCanvas$$$$$setSize$$($ww$$91$$, $hh$$81$$, $bAdjustSizeOnly$$) {
  this.$_ww$ = $ww$$91$$;
  this.$_hh$ = $hh$$81$$;
  $bAdjustSizeOnly$$ || (this.$_backgroundPane$.$setWidth$($ww$$91$$), this.$_backgroundPane$.$setHeight$($hh$$81$$), this.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), this.$SetClipRect$($ww$$91$$, $hh$$81$$))
};
D.$DvtPanZoomCanvas$$.prototype.$getSize$ = function $$DvtPanZoomCanvas$$$$$getSize$$() {
  return new D.$DvtDimension$$(this.$_ww$, this.$_hh$)
};
D.$DvtPanZoomCanvas$$.prototype.$SetClipRect$ = function $$DvtPanZoomCanvas$$$$$SetClipRect$$($ww$$92$$, $hh$$82$$) {
  var $clipPath$$9$$ = new D.$DvtClipPath$$("pzc");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$9$$, this.$getTranslateX$(), this.$getTranslateY$(), $ww$$92$$, $hh$$82$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$9$$)
};
D.$JSCompiler_StaticMethods_getContentPane$$ = function $$JSCompiler_StaticMethods_getContentPane$$$($JSCompiler_StaticMethods_getContentPane$self$$) {
  return $JSCompiler_StaticMethods_getContentPane$self$$.$_contentPane$
};
D.$JSCompiler_StaticMethods_getContentPaneMatrix$$ = function $$JSCompiler_StaticMethods_getContentPaneMatrix$$$($JSCompiler_StaticMethods_getContentPaneMatrix$self$$, $animator$$84$$) {
  if($animator$$84$$) {
    var $mat$$46$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$84$$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$);
    if($mat$$46$$) {
      return $mat$$46$$
    }
  }
  return $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvas$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getZoom$ = function $$JSCompiler_prototypeAlias$$$$getZoom$$($animator$$85$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$85$$).$_a$
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$22_mat$$47$$, $deltaX$$7_dy$$25_fireStartEventFunc$$, $animator$$88$$) {
  if(this.$_bPanningEnabled$) {
    var $oldX$$5$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$88$$).$_tx$, $oldY$$5$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$88$$).$_ty$, $newX$$8$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $oldX$$5$$ + $dx$$22_mat$$47$$), $newY$$9$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $oldY$$5$$ + $deltaX$$7_dy$$25_fireStartEventFunc$$);
    $deltaX$$7_dy$$25_fireStartEventFunc$$ = $newX$$8$$ - $oldX$$5$$;
    var $deltaY$$7_fireEndEventFunc$$ = $newY$$9$$ - $oldY$$5$$;
    $dx$$22_mat$$47$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$88$$ && ($dx$$22_mat$$47$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$88$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($dx$$22_mat$$47$$ = $dx$$22_mat$$47$$.clone());
    $dx$$22_mat$$47$$ || ($dx$$22_mat$$47$$ = this.$_contentPane$.$getMatrix$().clone());
    $dx$$22_mat$$47$$.translate($deltaX$$7_dy$$25_fireStartEventFunc$$, $deltaY$$7_fireEndEventFunc$$);
    var $thisRef$$33$$ = this;
    $deltaX$$7_dy$$25_fireStartEventFunc$$ = function $$deltaX$$7_dy$$25_fireStartEventFunc$$$() {
      var $dx$$22_mat$$47$$ = new D.$DvtPanEvent$$("panning", $newX$$8$$, $newY$$9$$, $oldX$$5$$, $oldY$$5$$, $animator$$88$$);
      $thisRef$$33$$.$FireListener$($dx$$22_mat$$47$$)
    };
    $deltaY$$7_fireEndEventFunc$$ = function $$deltaY$$7_fireEndEventFunc$$$() {
      var $dx$$22_mat$$47$$ = new D.$DvtPanEvent$$("panned", $newX$$8$$, $newY$$9$$, $oldX$$5$$, $oldY$$5$$, $animator$$88$$);
      $thisRef$$33$$.$FireListener$($dx$$22_mat$$47$$)
    };
    $animator$$88$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$88$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $dx$$22_mat$$47$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$88$$, $deltaX$$7_dy$$25_fireStartEventFunc$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$88$$, $deltaY$$7_fireEndEventFunc$$)) : ($deltaX$$7_dy$$25_fireStartEventFunc$$(), this.$_contentPane$.$setMatrix$($dx$$22_mat$$47$$), $deltaY$$7_fireEndEventFunc$$())
  }
};
D.$JSCompiler_prototypeAlias$$.$panTo$ = function $$JSCompiler_prototypeAlias$$$$panTo$$($dx$$23_xx$$58$$, $dy$$26_yy$$58$$, $animator$$89$$) {
  this.$_bPanningEnabled$ && ($dx$$23_xx$$58$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$89$$).$_tx$, $dy$$26_yy$$58$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$89$$).$_ty$, this.$panBy$($dx$$23_xx$$58$$, $dy$$26_yy$$58$$, $animator$$89$$))
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($currZoom$$inline_5715_dz$$6_mat$$48$$, $xx$$59$$, $yy$$59$$, $animator$$90$$) {
  if(this.$_bZoomingEnabled$) {
    !$xx$$59$$ && 0 !== $xx$$59$$ && ($xx$$59$$ = this.$_ww$ / 2);
    !$yy$$59$$ && 0 !== $yy$$59$$ && ($yy$$59$$ = this.$_hh$ / 2);
    var $oldZoom$$4$$ = this.$getZoom$($animator$$90$$), $newZoom$$7$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $oldZoom$$4$$ * $currZoom$$inline_5715_dz$$6_mat$$48$$);
    this.$_controlPanel$ && ($currZoom$$inline_5715_dz$$6_mat$$48$$ = this.$getZoom$(), $newZoom$$7$$ == this.$_minZoom$ && $newZoom$$7$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : $currZoom$$inline_5715_dz$$6_mat$$48$$ <= $newZoom$$7$$ && $newZoom$$7$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)) : $currZoom$$inline_5715_dz$$6_mat$$48$$ >= $newZoom$$7$$ && $newZoom$$7$$ == this.$_minZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)));
    if(window.Math.round(1E5 * $oldZoom$$4$$) != window.Math.round(1E5 * $newZoom$$7$$)) {
      var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$7$$ / $oldZoom$$4$$;
      $currZoom$$inline_5715_dz$$6_mat$$48$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$90$$ && ($currZoom$$inline_5715_dz$$6_mat$$48$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$90$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($currZoom$$inline_5715_dz$$6_mat$$48$$ = $currZoom$$inline_5715_dz$$6_mat$$48$$.clone());
      $currZoom$$inline_5715_dz$$6_mat$$48$$ || ($currZoom$$inline_5715_dz$$6_mat$$48$$ = this.$_contentPane$.$getMatrix$().clone());
      $currZoom$$inline_5715_dz$$6_mat$$48$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $xx$$59$$, $yy$$59$$);
      var $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_5715_dz$$6_mat$$48$$.$_tx$) - $currZoom$$inline_5715_dz$$6_mat$$48$$.$_tx$, $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_5715_dz$$6_mat$$48$$.$_ty$) - $currZoom$$inline_5715_dz$$6_mat$$48$$.$_ty$;
      (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "adjustPanConstraints", $newZoom$$7$$, $oldZoom$$4$$, $animator$$90$$, D.$JSCompiler_alias_NULL$$, $xx$$59$$, $yy$$59$$, $xDiff$$, $yDiff$$);
      $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_5715_dz$$6_mat$$48$$.$_tx$) - $currZoom$$inline_5715_dz$$6_mat$$48$$.$_tx$;
      $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_5715_dz$$6_mat$$48$$.$_ty$) - $currZoom$$inline_5715_dz$$6_mat$$48$$.$_ty$;
      $currZoom$$inline_5715_dz$$6_mat$$48$$.translate($xDiff$$, $yDiff$$);
      var $thisRef$$34$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$34$$, "zooming", $newZoom$$7$$, $oldZoom$$4$$, $animator$$90$$, D.$JSCompiler_alias_NULL$$, $xx$$59$$, $yy$$59$$, $xDiff$$, $yDiff$$)
      }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$34$$, "zoomed", $thisRef$$34$$.$getZoom$(), $oldZoom$$4$$, $animator$$90$$, D.$JSCompiler_alias_NULL$$, $xx$$59$$, $yy$$59$$, $xDiff$$, $yDiff$$)
      };
      $animator$$90$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$90$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $currZoom$$inline_5715_dz$$6_mat$$48$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$90$$, $deltaZoom_fireStartEventFunc$$1$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$90$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($currZoom$$inline_5715_dz$$6_mat$$48$$), 
      $fireEndEventFunc$$1$$())
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$zoomTo$ = function $$JSCompiler_prototypeAlias$$$$zoomTo$$($dz$$7_zz$$3$$, $xx$$60$$, $yy$$60$$, $animator$$91$$) {
  this.$_bZoomingEnabled$ && ($dz$$7_zz$$3$$ /= this.$getZoom$($animator$$91$$), this.$zoomBy$($dz$$7_zz$$3$$, $xx$$60$$, $yy$$60$$, $animator$$91$$))
};
D.$JSCompiler_prototypeAlias$$.$zoomToFit$ = function $$JSCompiler_prototypeAlias$$$$zoomToFit$$($animator$$93$$, $fitBounds$$4$$) {
  if(this.$_bZoomToFitEnabled$) {
    var $panningEnabled$$3$$ = this.$_bPanningEnabled$, $zoomingEnabled$$2$$ = this.$_bZoomingEnabled$;
    this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
    try {
      var $bounds$$114$$ = $fitBounds$$4$$;
      $bounds$$114$$ || ($bounds$$114$$ = this.$_contentPane$.$getDimensions$());
      var $bounds$$114$$ = (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomToFitCalcBounds", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$93$$, $bounds$$114$$).$_zoomToFitBounds$, $dz$$8$$ = window.Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $bounds$$114$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $bounds$$114$$.$h$), $dz$$8$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $dz$$8$$), $dx$$25$$ = this.$_ww$ / 2 - ($bounds$$114$$.x + $bounds$$114$$.$w$ / 
      2) * $dz$$8$$, $dy$$28$$ = this.$_hh$ / 2 - ($bounds$$114$$.y + $bounds$$114$$.$h$ / 2) * $dz$$8$$, $thisRef$$35$$ = this, $fireStartEventFunc$$2$$ = function $$fireStartEventFunc$$2$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$35$$, "zoomToFitBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$93$$, $bounds$$114$$)
      }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$35$$, "zoomToFitEnd", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$93$$, $bounds$$114$$)
      };
      $animator$$93$$ ? (0,D.$DvtPlayable$prependOnInit$$)($animator$$93$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
      this.$zoomTo$($dz$$8$$, 0, 0, $animator$$93$$);
      this.$panTo$($dx$$25$$, $dy$$28$$, $animator$$93$$);
      $animator$$93$$ ? (0,D.$DvtPlayable$appendOnEnd$$)($animator$$93$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
    }finally {
      this.$_bPanningEnabled$ = $panningEnabled$$3$$, this.$_bZoomingEnabled$ = $zoomingEnabled$$2$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getViewport$ = function $$JSCompiler_prototypeAlias$$$$getViewport$$() {
  var $topLeftGlobal_topLeftLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(0, 0)), $bottomRightGlobal_bottomRightLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(this.$_ww$, this.$_hh$)), $topLeftGlobal_topLeftLocal$$ = this.$_contentPane$.$stageToLocal$($topLeftGlobal_topLeftLocal$$), $bottomRightGlobal_bottomRightLocal$$ = this.$_contentPane$.$stageToLocal$($bottomRightGlobal_bottomRightLocal$$);
  return new D.$DvtRectangle$$($topLeftGlobal_topLeftLocal$$.x, $topLeftGlobal_topLeftLocal$$.y, $bottomRightGlobal_bottomRightLocal$$.x - $topLeftGlobal_topLeftLocal$$.x, $bottomRightGlobal_bottomRightLocal$$.y - $topLeftGlobal_topLeftLocal$$.y)
};
D.$JSCompiler_StaticMethods_SetElasticConstraints$$ = function $$JSCompiler_StaticMethods_SetElasticConstraints$$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $bElastic$$3$$) {
  if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticConstraints$ = $bElastic$$3$$) {
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ && ($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$isRunning$() && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.stop(), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$)
  }else {
    var $currX$$15_panEvent$$inline_5742$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$20$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_ty$, $currZoom$$8$$ = $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getZoom$();
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ = $currX$$15_panEvent$$inline_5742$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currX$$15_panEvent$$inline_5742$$) || $currY$$20$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currY$$20$$);
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ = $currZoom$$8$$ != (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currZoom$$8$$);
    if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ || $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$) {
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_context$, 0.4), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$setEasing$(D.$DvtEasing$cubicOut$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$zoomBy$(1, 0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_ww$, 
      0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_hh$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$panBy$(0, 0, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), (0,D.$DvtPlayable$appendOnEnd$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnimOnEnd$, 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && ($currX$$15_panEvent$$inline_5742$$ = new D.$DvtPanEvent$$("elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$FireListener$($currX$$15_panEvent$$inline_5742$$)), 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, "elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.play()
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$DvtPanZoomCanvas$$$$$_elasticConstraintsAnimOnEnd$$() {
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_bElasticPan$) {
    var $panEvent$$inline_5751$$ = new D.$DvtPanEvent$$("elasticAnimEnd", D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$);
    this.$FireListener$($panEvent$$inline_5751$$)
  }
  this.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "elasticAnimEnd")
};
D.$JSCompiler_StaticMethods_ConstrainPanX$$ = function $$JSCompiler_StaticMethods_ConstrainPanX$$$($JSCompiler_StaticMethods_ConstrainPanX$self$$, $xx$$61$$) {
  var $dx$$26_offsetX$$8$$ = $xx$$61$$;
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$26_offsetX$$8$$ < $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$26_offsetX$$8$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - $dx$$26_offsetX$$8$$, $dx$$26_offsetX$$8$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$26_offsetX$$8$$)) : $dx$$26_offsetX$$8$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$);
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$26_offsetX$$8$$ > $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$26_offsetX$$8$$ -= $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$, $dx$$26_offsetX$$8$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$26_offsetX$$8$$)) : $dx$$26_offsetX$$8$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$);
  return $dx$$26_offsetX$$8$$
};
D.$JSCompiler_StaticMethods_ConstrainPanY$$ = function $$JSCompiler_StaticMethods_ConstrainPanY$$$($JSCompiler_StaticMethods_ConstrainPanY$self$$, $yy$$61$$) {
  var $dy$$29_offsetY$$7$$ = $yy$$61$$;
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$29_offsetY$$7$$ < $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$29_offsetY$$7$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - $dy$$29_offsetY$$7$$, $dy$$29_offsetY$$7$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$29_offsetY$$7$$)) : $dy$$29_offsetY$$7$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$);
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$29_offsetY$$7$$ > $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$29_offsetY$$7$$ -= $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$, $dy$$29_offsetY$$7$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$29_offsetY$$7$$)) : $dy$$29_offsetY$$7$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$);
  return $dy$$29_offsetY$$7$$
};
D.$JSCompiler_StaticMethods_ConstrainZoom$$ = function $$JSCompiler_StaticMethods_ConstrainZoom$$$($JSCompiler_StaticMethods_ConstrainZoom$self$$, $zz$$4$$) {
  var $dz$$10_newZ$$ = window.Math.max(0, $zz$$4$$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && $dz$$10_newZ$$ < $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$10_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - $dz$$10_newZ$$, $dz$$10_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$10_newZ$$)) : $dz$$10_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && $dz$$10_newZ$$ > $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$10_newZ$$ -= $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$, $dz$$10_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ + window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$10_newZ$$)) : $dz$$10_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$);
  return $dz$$10_newZ$$
};
D.$DvtPanZoomCanvas$$.prototype.$renderComponent$ = function $$DvtPanZoomCanvas$$$$$renderComponent$$() {
  2 != this.$_controlPanelState$ && !this.$_controlPanel$ && (this.$_controlPanel$ = new D.$DvtPanZoomControlPanel$$(this.$_context$, this, this.$_buttonImages$, this.$_controlPanelResources$, this.$_displayedControls$, this.$_view$), this.$addChild$(this.$_controlPanel$), 0 == this.$_controlPanelState$ ? this.$_controlPanel$.$setState$(1) : 1 == this.$_controlPanelState$ && this.$_controlPanel$.$setState$(2), (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), this.$_controlPanel$.$renderComponent$())
};
D.$JSCompiler_StaticMethods_setControlPanel$$ = function $$JSCompiler_StaticMethods_setControlPanel$$$($JSCompiler_StaticMethods_setControlPanel$self$$, $controlPanel$$2$$) {
  $JSCompiler_StaticMethods_setControlPanel$self$$.$_controlPanel$ && $JSCompiler_StaticMethods_setControlPanel$self$$.removeChild($JSCompiler_StaticMethods_setControlPanel$self$$.$_controlPanel$);
  $JSCompiler_StaticMethods_setControlPanel$self$$.$_controlPanel$ = $controlPanel$$2$$;
  2 != $JSCompiler_StaticMethods_setControlPanel$self$$.$_controlPanelState$ && ($JSCompiler_StaticMethods_setControlPanel$self$$.$addChild$($JSCompiler_StaticMethods_setControlPanel$self$$.$_controlPanel$), 0 == $JSCompiler_StaticMethods_setControlPanel$self$$.$_controlPanelState$ ? $JSCompiler_StaticMethods_setControlPanel$self$$.$_controlPanel$.$setState$(1) : 1 == $JSCompiler_StaticMethods_setControlPanel$self$$.$_controlPanelState$ && $JSCompiler_StaticMethods_setControlPanel$self$$.$_controlPanel$.$setState$(2), 
  (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)($JSCompiler_StaticMethods_setControlPanel$self$$))
};
D.$JSCompiler_StaticMethods_PositionControlPanel$$ = function $$JSCompiler_StaticMethods_PositionControlPanel$$$($JSCompiler_StaticMethods_PositionControlPanel$self$$) {
  var $openCloseButtonWidth$$1_styleMap$$94$$ = $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_view$.$getControlPanelStyleMap$(), $posX$$1_transX$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth$$1_styleMap$$94$$, "paddingSide", 0), $posY$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth$$1_styleMap$$94$$, "paddingTop", 0), $openCloseButtonWidth$$1_styleMap$$94$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth$$1_styleMap$$94$$, "openCloseButtonWidth", 0), $posX$$1_transX$$8$$ = 
  D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_context$) ? $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_ww$ - $openCloseButtonWidth$$1_styleMap$$94$$ - $posX$$1_transX$$8$$ : $posX$$1_transX$$8$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_controlPanel$, $posX$$1_transX$$8$$, $posY$$)
};
D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$ = function $$JSCompiler_StaticMethods_GetRelativeMousePosition$$$($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$, $event$$490$$) {
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$.$_context$, $event$$490$$.pageX, $event$$490$$.pageY)
};
D.$JSCompiler_StaticMethods_FireZoomEvent$$ = function $$JSCompiler_StaticMethods_FireZoomEvent$$$($JSCompiler_StaticMethods_FireZoomEvent$self$$, $subType$$7_zoomEvent$$, $newZoom$$8$$, $oldZoom$$5$$, $animator$$95$$, $zoomToFitBounds$$1$$, $xx$$62$$, $yy$$62$$, $tx$$28$$, $ty$$28$$) {
  $subType$$7_zoomEvent$$ = new D.$DvtZoomEvent$$($subType$$7_zoomEvent$$, $newZoom$$8$$, $oldZoom$$5$$, $animator$$95$$, $zoomToFitBounds$$1$$, new D.$DvtPoint$$($xx$$62$$, $yy$$62$$), $tx$$28$$, $ty$$28$$);
  $JSCompiler_StaticMethods_FireZoomEvent$self$$.$FireListener$($subType$$7_zoomEvent$$);
  return $subType$$7_zoomEvent$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomAndCenter$ = function $$DvtPanZoomCanvas$$$$$zoomAndCenter$$() {
  (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomAndCenter")
};
D.$JSCompiler_StaticMethods_getNextZoomLevel$$ = function $$JSCompiler_StaticMethods_getNextZoomLevel$$$($JSCompiler_StaticMethods_getNextZoomLevel$self$$, $currZoom$$9$$) {
  var $zoomLevel$$1$$;
  $zoomLevel$$1$$ = $currZoom$$9$$ + $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$1$$ > $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$ && ($zoomLevel$$1$$ = $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$);
  return $zoomLevel$$1$$
};
D.$JSCompiler_StaticMethods_getPrevZoomLevel$$ = function $$JSCompiler_StaticMethods_getPrevZoomLevel$$$($JSCompiler_StaticMethods_getPrevZoomLevel$self$$, $currZoom$$10$$) {
  var $zoomLevel$$2$$;
  $zoomLevel$$2$$ = $currZoom$$10$$ - $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$2$$ < $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$ && ($zoomLevel$$2$$ = $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$);
  return $zoomLevel$$2$$
};
D.$DvtPanZoomCanvas$$.prototype.$setMinZoom$ = (0,D.$JSCompiler_set$$)("$_minZoom$");
D.$DvtPanZoomCanvas$$.prototype.$setMaxZoom$ = function $$DvtPanZoomCanvas$$$$$setMaxZoom$$($n$$19$$) {
  0 > $n$$19$$ && ($n$$19$$ = 1);
  this.$_maxZoom$ = $n$$19$$
};
D.$DvtPanZoomCanvas$$.prototype.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animationDuration$");
D.$DvtPanZoomCanvas$$.prototype.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$DvtPanZoomCanvasEventManager$$ = function $$DvtPanZoomCanvasEventManager$$$($context$$541$$, $callback$$115$$, $callbackObj$$86$$) {
  this.Init($context$$541$$, $callback$$115$$, $callbackObj$$86$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasEventManager$$, D.$DvtEventManager$$, "DvtPanZoomCanvasEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvasEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$542$$, $callback$$116$$, $callbackObj$$87$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.Init.call(this, $context$$542$$, $callback$$116$$, $callbackObj$$87$$);
  this.$_pzc$ = $callbackObj$$87$$;
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZooming$ = this.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMomentumPanning$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$53$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$53$$);
  D.$DvtAgent$$.$isPlatformGecko$() ? $displayable$$53$$.$addEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$53$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$472_pos$$43$$) {
  2 != $event$$472_pos$$43$$.button && ($event$$472_pos$$43$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$472_pos$$43$$), this.$_mx$ = $event$$472_pos$$43$$.x, this.$_my$ = $event$$472_pos$$43$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = D.$JSCompiler_alias_TRUE$$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$473_zz$$) {
  if(this.$_bDown$) {
    var $pos$$44_yy$$54$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$473_zz$$), $xx$$54$$ = $pos$$44_yy$$54$$.x, $pos$$44_yy$$54$$ = $pos$$44_yy$$54$$.y;
    $event$$473_zz$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$)), $event$$473_zz$$ = this.$_origZoom$ * window.Math.pow(1 + 0.01 * (this.$_py$ >= $pos$$44_yy$$54$$ ? 
    1 : -1), window.Math.abs(this.$_py$ - $pos$$44_yy$$54$$)), this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($event$$473_zz$$, this.$_px$, this.$_py$) : this.$_callbackObj$.$zoomTo$($event$$473_zz$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$54$$, $pos$$44_yy$$54$$);
    this.$_mx$ = $xx$$54$$;
    this.$_my$ = $pos$$44_yy$$54$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$() {
  this.$_bDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this);
  this.$_bZooming$ && (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$475$$) {
  if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
    (!$event$$475$$.relatedTarget || $event$$475$$.relatedTarget == D.$JSCompiler_alias_NULL$$) && this.$OnMouseUp$($event$$475$$)
  }
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$475$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$476$$) {
  var $currZoom$$7_oldZoomAnim_zz$$1$$ = this.$_callbackObj$.$getZoom$();
  this.$_zoomAnimator$ && ($currZoom$$7_oldZoomAnim_zz$$1$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $currZoom$$7_oldZoomAnim_zz$$1$$ = this.$_callbackObj$.$getZoom$($currZoom$$7_oldZoomAnim_zz$$1$$), this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$);
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  var $delta$$11_pos$$45$$ = 0;
  $event$$476$$.wheelDelta != D.$JSCompiler_alias_NULL$$ && ($delta$$11_pos$$45$$ = $event$$476$$.wheelDelta, D.$DvtAgent$$.$isPlatformGecko$() && ($delta$$11_pos$$45$$ = -$delta$$11_pos$$45$$));
  $currZoom$$7_oldZoomAnim_zz$$1$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $delta$$11_pos$$45$$ / window.Math.abs($delta$$11_pos$$45$$);
  $delta$$11_pos$$45$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$476$$);
  this.$_context$.$getDocumentUtils$().$cancelDomEvent$($event$$476$$);
  this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($currZoom$$7_oldZoomAnim_zz$$1$$, $delta$$11_pos$$45$$.x, $delta$$11_pos$$45$$.y, this.$_zoomAnimator$) : this.$_callbackObj$.$zoomTo$($currZoom$$7_oldZoomAnim_zz$$1$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
  this.$_zoomAnimator$ && ((0,D.$DvtPlayable$appendOnEnd$$)(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
};
D.$JSCompiler_prototypeAlias$$.$_clearZoomAnimator$ = function $$JSCompiler_prototypeAlias$$$$_clearZoomAnimator$$() {
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_handleMomentumStartTimer$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_handleMomentumTimer$ = function $$JSCompiler_prototypeAlias$$$$_handleMomentumTimer$$() {
  var $dy$$23_ratio$$10$$ = 1 - 0.04 * this.$_momentumIterCount$, $dy$$23_ratio$$10$$ = $dy$$23_ratio$$10$$ * $dy$$23_ratio$$10$$, $interval$$4_newX$$7$$ = this.$_momentumTimer$.$getInterval$(), $dx$$20$$ = $dy$$23_ratio$$10$$ * this.$_momentumXperMS$ * $interval$$4_newX$$7$$, $dy$$23_ratio$$10$$ = $dy$$23_ratio$$10$$ * this.$_momentumYperMS$ * $interval$$4_newX$$7$$;
  this.$_momentumDx$ += $dx$$20$$;
  this.$_momentumDy$ += $dy$$23_ratio$$10$$;
  var $interval$$4_newX$$7$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $newY$$8$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
  this.$_callbackObj$.$panTo$($interval$$4_newX$$7$$, $newY$$8$$);
  var $bStop$$ = D.$JSCompiler_alias_FALSE$$;
  if(24 <= this.$_momentumIterCount$) {
    $bStop$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    var $currX$$14$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$19$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$;
    if(window.Math.abs($currX$$14$$ - $interval$$4_newX$$7$$) > window.Math.abs($dx$$20$$) || window.Math.abs($currY$$19$$ - $newY$$8$$) > window.Math.abs($dy$$23_ratio$$10$$)) {
      $bStop$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $bStop$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$477$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$477$$, this.$ZoomStartTouch$, this);
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$477$$, this.$PanStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$478$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$478$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$478$$, "panTouch");
  $event$$478$$ && $event$$478$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$479$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$479$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$479$$, "panTouch")
};
D.$JSCompiler_prototypeAlias$$.$ZoomStartTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomStartTouch$$($event$$480$$, $touch$$48$$) {
  var $targets$$inline_5635_touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  1 >= $targets$$inline_5635_touchIds$$11$$.length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$48$$.identifier, "zoomTouch", D.$JSCompiler_alias_NULL$$, "zoomTouch", "zoomTouch", this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $touch$$48$$.pageX, this.$_my$ = $touch$$48$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, 
  this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = D.$JSCompiler_alias_NULL$$, $targets$$inline_5635_touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_5635_touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_5635_touchIds$$11$$), 
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_5635_touchIds$$11$$);
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$ZoomMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomMoveTouch$$() {
  var $targets$$inline_5650_touchIds$$12$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  if(2 == $targets$$inline_5650_touchIds$$12$$.length) {
    var $data$$58_touch1Data$$inline_5639$$;
    var $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$ = this.$TouchManager$;
    if(2 == $targets$$inline_5650_touchIds$$12$$.length) {
      if($data$$58_touch1Data$$inline_5639$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.$_touchMap$[$targets$$inline_5650_touchIds$$12$$[0]], $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.$_touchMap$[$targets$$inline_5650_touchIds$$12$$[1]], $data$$58_touch1Data$$inline_5639$$ == D.$JSCompiler_alias_NULL$$ || 
      $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$ == D.$JSCompiler_alias_NULL$$ || 0 == $data$$58_touch1Data$$inline_5639$$.$dx$ && 0 == $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.$dy$) {
        $data$$58_touch1Data$$inline_5639$$ = D.$JSCompiler_alias_NULL$$
      }else {
        var $cp$$8_dist$$inline_5643_dx$$inline_5641$$ = $data$$58_touch1Data$$inline_5639$$.pageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.pageX, $dy$$inline_5642_prevdx$$inline_5644$$ = $data$$58_touch1Data$$inline_5639$$.pageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.pageY, $cp$$8_dist$$inline_5643_dx$$inline_5641$$ = window.Math.sqrt($cp$$8_dist$$inline_5643_dx$$inline_5641$$ * $cp$$8_dist$$inline_5643_dx$$inline_5641$$ + 
        $dy$$inline_5642_prevdx$$inline_5644$$ * $dy$$inline_5642_prevdx$$inline_5644$$), $dy$$inline_5642_prevdx$$inline_5644$$ = $data$$58_touch1Data$$inline_5639$$.$prevPageX$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.$prevPageX$, $prevdy$$inline_5645$$ = $data$$58_touch1Data$$inline_5639$$.$prevPageY$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.$prevPageY$, $cx$$inline_5646$$ = ($data$$58_touch1Data$$inline_5639$$.pageX + 
        $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.pageX) / 2, $cy$$inline_5647$$ = ($data$$58_touch1Data$$inline_5639$$.pageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.pageY) / 2;
        $data$$58_touch1Data$$inline_5639$$ = {$dz$:$cp$$8_dist$$inline_5643_dx$$inline_5641$$ - window.Math.sqrt($dy$$inline_5642_prevdx$$inline_5644$$ * $dy$$inline_5642_prevdx$$inline_5644$$ + $prevdy$$inline_5645$$ * $prevdy$$inline_5645$$), $cx$:$cx$$inline_5646$$, $cy$:$cy$$inline_5647$$, $dcx$:$cx$$inline_5646$$ - ($data$$58_touch1Data$$inline_5639$$.$prevPageX$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.$prevPageX$) / 2, $dcy$:$cy$$inline_5647$$ - 
        ($data$$58_touch1Data$$inline_5639$$.$prevPageY$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$.$prevPageY$) / 2, $dist$:$cp$$8_dist$$inline_5643_dx$$inline_5641$$}
      }
    }else {
      $data$$58_touch1Data$$inline_5639$$ = D.$JSCompiler_alias_NULL$$
    }
    $data$$58_touch1Data$$inline_5639$$ && (this.$_bZooming$ || (this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$)), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), this.$_origDist$ == D.$JSCompiler_alias_NULL$$ && 
    (this.$_origDist$ = $data$$58_touch1Data$$inline_5639$$.$dist$ - $data$$58_touch1Data$$inline_5639$$.$dz$), $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$ = this.$_origZoom$ * ($data$$58_touch1Data$$inline_5639$$.$dist$ / this.$_origDist$), $cp$$8_dist$$inline_5643_dx$$inline_5641$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_pzc$.$_context$, $data$$58_touch1Data$$inline_5639$$.$cx$, $data$$58_touch1Data$$inline_5639$$.$cy$), this.$hideTooltip$(), 
    $targets$$inline_5650_touchIds$$12$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_5650_touchIds$$12$$), this.$_callbackObj$.$_currTargets$ = $targets$$inline_5650_touchIds$$12$$, this.$_callbackObj$.$zoomTo$($JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5637_touch2Data$$inline_5640_zz$$2$$, $cp$$8_dist$$inline_5643_dx$$inline_5641$$.x, $cp$$8_dist$$inline_5643_dx$$inline_5641$$.y), this.$_callbackObj$.$panBy$($data$$58_touch1Data$$inline_5639$$.$dcx$, 
    $data$$58_touch1Data$$inline_5639$$.$dcy$))
  }
};
D.$JSCompiler_prototypeAlias$$.$ZoomEndTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomEndTouch$$() {
  this.$_bZooming$ && (this.$_origDist$ = D.$JSCompiler_alias_NULL$$, this.$TouchManager$.$_blockTouchHold$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this));
  var $touchIds$$13$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_5655$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $touchIds$$13$$);
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_5655$$;
  0 == $touchIds$$13$$.length && this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("zoomEnd"))
};
D.$JSCompiler_prototypeAlias$$.$PanStartTouch$ = function $$JSCompiler_prototypeAlias$$$$PanStartTouch$$($event$$483$$, $touch$$51$$) {
  !this.$_bZooming$ && 1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$51$$.identifier, "panTouch", D.$JSCompiler_alias_NULL$$, "panTouch", "panTouch", this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $touch$$51$$.pageX, this.$_my$ = $touch$$51$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$PanMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$PanMoveTouch$$($event$$484$$, $touch$$52$$) {
  if(!this.$_bZooming$ && 1 == (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length) {
    var $xx$$55$$ = $touch$$52$$.pageX, $yy$$55$$ = $touch$$52$$.pageY;
    (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$55$$, $yy$$55$$);
    this.$_mx$ = $xx$$55$$;
    this.$_my$ = $yy$$55$$
  }
};
D.$JSCompiler_prototypeAlias$$.$PanEndTouch$ = function $$JSCompiler_prototypeAlias$$$$PanEndTouch$$() {
  !this.$_bZooming$ && this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this)
};
D.$JSCompiler_StaticMethods__handleZoomEnd$$ = function $$JSCompiler_StaticMethods__handleZoomEnd$$$($JSCompiler_StaticMethods__handleZoomEnd$self$$) {
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomEnd"));
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_bZooming$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$);
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__handlePanMove$$ = function $$JSCompiler_StaticMethods__handlePanMove$$$($JSCompiler_StaticMethods__handlePanMove$self$$, $xx$$56$$, $yy$$56$$) {
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ || ($JSCompiler_StaticMethods__handlePanMove$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanBegin")), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$), 
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$ = []));
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$.$panTo$($JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanX$ + $xx$$56$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_px$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanY$ + $yy$$56$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_py$);
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$ = $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ = (new window.Date).getTime(), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ ? ($JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.$isRunning$() && $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.stop(), 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.reset()) : $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanMove$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanMove$self$$.$_handleMomentumStartTimer$, $JSCompiler_StaticMethods__handlePanMove$self$$, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.push({$dt$:$JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ - 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$, $dx$:$xx$$56$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_mx$, $dy$:$yy$$56$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_my$}), 5 < $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.length && $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.splice(0, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.start())
};
D.$JSCompiler_StaticMethods__handlePanEnd$$ = function $$JSCompiler_StaticMethods__handlePanEnd$$$($JSCompiler_StaticMethods__handlePanEnd$self$$) {
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanEnd"));
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$);
  if($JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.$isRunning$()) {
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.stop();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.reset();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ ? $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.reset() : $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanEnd$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanEnd$self$$.$_handleMomentumTimer$, $JSCompiler_StaticMethods__handlePanEnd$self$$);
    for(var $dt$$ = 0, $dx$$21$$ = 0, $dy$$24$$ = 0, $numMoves$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;0 < $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;) {
      var $objMove$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.pop(), $dt$$ = $dt$$ + $objMove$$.$dt$, $dx$$21$$ = $dx$$21$$ + $objMove$$.$dx$, $dy$$24$$ = $dy$$24$$ + $objMove$$.$dy$
    }
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumXperMS$ = $dx$$21$$ / $dt$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumYperMS$ = $dy$$24$$ / $dt$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.setInterval(window.Math.ceil($dt$$ / $numMoves$$));
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumIterCount$ = 1;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDx$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDy$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.start()
  }else {
    (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtPanZoomCanvasKeyboardHandler$$ = function $$DvtPanZoomCanvasKeyboardHandler$$$($component$$9$$, $manager$$14$$) {
  this.Init($component$$9$$, $manager$$14$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPanZoomCanvasKeyboardHandler");
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.Init = function $$DvtPanZoomCanvasKeyboardHandler$$$$Init$($component$$10$$, $manager$$15$$) {
  D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.Init($manager$$15$$);
  this.$_component$ = $component$$10$$
};
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanZoomCanvasKeyboardHandler$$$$$processKeyDown$$($controlPanel$$1_event$$486$$) {
  var $keyCode$$26$$ = $controlPanel$$1_event$$486$$.keyCode, $canvas$$4$$ = this.$_component$.$_panZoomCanvas$;
  if(33 == $keyCode$$26$$) {
    $controlPanel$$1_event$$486$$.ctrlKey || $controlPanel$$1_event$$486$$.shiftKey ? $canvas$$4$$.$panBy$($canvas$$4$$.$_panIncrement$, 0) : $canvas$$4$$.$panBy$(0, $canvas$$4$$.$_panIncrement$)
  }else {
    if(34 == $keyCode$$26$$) {
      $controlPanel$$1_event$$486$$.ctrlKey || $controlPanel$$1_event$$486$$.shiftKey ? $canvas$$4$$.$panBy$(-$canvas$$4$$.$_panIncrement$, 0) : $canvas$$4$$.$panBy$(0, -$canvas$$4$$.$_panIncrement$)
    }else {
      if(191 == $keyCode$$26$$) {
        ($controlPanel$$1_event$$486$$ = $canvas$$4$$.$_controlPanel$) && $controlPanel$$1_event$$486$$.$toggleExpandCollapse$()
      }else {
        var $JSCompiler_temp$$357_keyCode$$inline_5658_keyCode$$inline_5661$$ = $controlPanel$$1_event$$486$$.keyCode;
        if((D.$DvtAgent$$.$isPlatformGecko$() ? 61 == $JSCompiler_temp$$357_keyCode$$inline_5658_keyCode$$inline_5661$$ && !$controlPanel$$1_event$$486$$.shiftKey : 187 == $JSCompiler_temp$$357_keyCode$$inline_5658_keyCode$$inline_5661$$ && !$controlPanel$$1_event$$486$$.shiftKey) || (0,D.$DvtKeyboardEvent$isPlus$$)($controlPanel$$1_event$$486$$)) {
          $canvas$$4$$.$zoomTo$($canvas$$4$$.$getZoom$() + $canvas$$4$$.$_zoomIncrement$)
        }else {
          if(!($JSCompiler_temp$$357_keyCode$$inline_5658_keyCode$$inline_5661$$ = (0,D.$DvtKeyboardEvent$isMinus$$)($controlPanel$$1_event$$486$$))) {
            $JSCompiler_temp$$357_keyCode$$inline_5658_keyCode$$inline_5661$$ = $controlPanel$$1_event$$486$$.keyCode, $JSCompiler_temp$$357_keyCode$$inline_5658_keyCode$$inline_5661$$ = D.$DvtAgent$$.$isPlatformGecko$() ? 173 == $JSCompiler_temp$$357_keyCode$$inline_5658_keyCode$$inline_5661$$ && $controlPanel$$1_event$$486$$.shiftKey ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : 189 == $JSCompiler_temp$$357_keyCode$$inline_5658_keyCode$$inline_5661$$ && $controlPanel$$1_event$$486$$.shiftKey ? 
            D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
          }
          if($JSCompiler_temp$$357_keyCode$$inline_5658_keyCode$$inline_5661$$) {
            $canvas$$4$$.$zoomTo$($canvas$$4$$.$getZoom$() - $canvas$$4$$.$_zoomIncrement$)
          }else {
            if((48 == $keyCode$$26$$ || 96 == $keyCode$$26$$) && !$controlPanel$$1_event$$486$$.ctrlKey && !$controlPanel$$1_event$$486$$.shiftKey) {
              $canvas$$4$$.$zoomToFit$()
            }else {
              return D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $controlPanel$$1_event$$486$$)
            }
          }
        }
      }
    }
  }
};
D.$DvtCollapsiblePanel$$ = function $$DvtCollapsiblePanel$$$($context$$79$$, $maxWidth$$2$$, $maxHeight$$2$$, $collapseDir$$, $buttonImages$$, $styleMap$$34$$, $disclosed$$5$$, $isFixed$$1$$) {
  this.Init($context$$79$$, $maxWidth$$2$$, $maxHeight$$2$$, $collapseDir$$, $buttonImages$$, $styleMap$$34$$, $disclosed$$5$$, $isFixed$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanel$$, D.$DvtContainer$$, "DvtCollapsiblePanel");
D.$DvtCollapsiblePanel$$.prototype.Init = function $$DvtCollapsiblePanel$$$$Init$($context$$80$$, $maxWidth$$3$$, $maxHeight$$3$$, $collapseDir$$1$$, $buttonImages$$1$$, $styleMap$$35$$, $disclosed$$6$$, $isFixed$$2$$) {
  D.$DvtCollapsiblePanel$$.$superclass$.Init.call(this, $context$$80$$);
  this.$_maxWidth$ = $maxWidth$$3$$;
  this.$_maxHeight$ = $maxHeight$$3$$;
  this.$_collapseDir$ = $collapseDir$$1$$ ? $collapseDir$$1$$ : "col_northeast";
  D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && ("col_northeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northwest" : "col_northwest" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northeast" : "col_southeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_southwest" : "col_southwest" == this.$_collapseDir$ && (this.$_collapseDir$ = "col_southeast"));
  this.$_buttonImages$ = $buttonImages$$1$$;
  this.$_isFixed$ = $isFixed$$2$$ ? $isFixed$$2$$ : D.$DvtAgent$$.$isEnvironmentBatik$();
  this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = D.$JSCompiler_alias_NULL$$;
  this.$_styleMap$ = $styleMap$$35$$;
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$);
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", D.$JSCompiler_alias_NULL$$));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_collapse$ = $disclosed$$6$$ !== D.$JSCompiler_alias_VOID$$ ? !$disclosed$$6$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_scrollableContainer$ = new D.$DvtScrollableContainer$$($context$$80$$, 0, 0, $maxWidth$$3$$ - 10, $maxHeight$$3$$ - 10, 3, "collapsiblePanel");
  this.$addChild$(this.$_scrollableContainer$);
  this.$_scrollableContainer$.$_horizScrollEnabled$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_scrollableContainer$, 5, 5);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$DvtCollapsiblePanel$$.prototype.$HandleResize$ = function $$DvtCollapsiblePanel$$$$$HandleResize$$() {
  this.$_scrollableContainer$.refresh();
  var $dims$$1_resizeHeight$$ = this.$_scrollableContainer$.$getDimensions$(), $resizeWidth$$ = $dims$$1_resizeHeight$$.$w$ + 10, $dims$$1_resizeHeight$$ = $dims$$1_resizeHeight$$.$h$ + 10;
  this.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)(this, $resizeWidth$$, $dims$$1_resizeHeight$$));
  var $west$$2$$ = "col_northwest" == this.$_collapseDir$ || "col_southwest" == this.$_collapseDir$;
  this.$_buttonFrame$ && $west$$2$$ && this.$_buttonFrame$.$setTranslateX$($resizeWidth$$);
  this.$FireListener$(new D.$DvtResizeEvent$$($resizeWidth$$, $dims$$1_resizeHeight$$, 0, 0))
};
D.$DvtCollapsiblePanel$$.prototype.isCollapsed = (0,D.$JSCompiler_get$$)("$_collapse$");
D.$JSCompiler_StaticMethods_setCollapsed$$ = function $$JSCompiler_StaticMethods_setCollapsed$$$($JSCompiler_StaticMethods_setCollapsed$self$$, $collapse$$1$$) {
  $JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ != $collapse$$1$$ && ($JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ = $collapse$$1$$, (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_setCollapsed$self$$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setCollapsed$self$$.$FireListener$(new D.$DvtCollapsiblePanelEvent$$($collapse$$1$$ ? "hide" : "show")))
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxWidth$ = (0,D.$JSCompiler_get$$)("$_maxWidth$");
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentWidth$ = function $$DvtCollapsiblePanel$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 27
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxHeight$ = (0,D.$JSCompiler_get$$)("$_maxHeight$");
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentHeight$ = function $$DvtCollapsiblePanel$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 27
};
D.$JSCompiler_StaticMethods__getRefPoint$$ = function $$JSCompiler_StaticMethods__getRefPoint$$$($JSCompiler_StaticMethods__getRefPoint$self$$, $point$$3$$, $isScale$$) {
  return!$JSCompiler_StaticMethods__getRefPoint$self$$.isCollapsed() ? $isScale$$ ? new D.$DvtPoint$$(1 / $point$$3$$.x, 1 / $point$$3$$.y) : new D.$DvtPoint$$(-$point$$3$$.x, -$point$$3$$.y) : $point$$3$$
};
D.$JSCompiler_StaticMethods__collapseExpand$$ = function $$JSCompiler_StaticMethods__collapseExpand$$$($JSCompiler_StaticMethods__collapseExpand$self$$, $animate$$) {
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  var $moveAnim_north_translatePoint2$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_northeast" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $west$$3$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $moveAnim2_translatePoint_translateX$$1$$ = $west$$3$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 
  $translateY$$1$$ = $moveAnim_north_translatePoint2$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$, $scaleAnim_scalePoint$$ = new D.$DvtPoint$$(1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$), $moveAnim2_translatePoint_translateX$$1$$ = new D.$DvtPoint$$($moveAnim2_translatePoint_translateX$$1$$, $translateY$$1$$), $moveAnim_north_translatePoint2$$ = new D.$DvtPoint$$($west$$3$$ ? -$JSCompiler_StaticMethods__collapseExpand$self$$.$_width$ : 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, $translateY$$1$$ - ($moveAnim_north_translatePoint2$$ ? 0 : 25));
  $animate$$ || ($JSCompiler_StaticMethods__collapseExpand$self$$.$_background$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$ && $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$.$setAlpha$(0));
  $scaleAnim_scalePoint$$ = new D.$DvtAnimScaleBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $scaleAnim_scalePoint$$, D.$JSCompiler_alias_TRUE$$), $animate$$ ? 0.25 : 1E-5);
  $moveAnim_north_translatePoint2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim_north_translatePoint2$$), $animate$$ ? 0.25 : 1E-5);
  $moveAnim2_translatePoint_translateX$$1$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim2_translatePoint_translateX$$1$$), $animate$$ ? 0.25 : 1E-5);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $scaleAnim_scalePoint$$, $moveAnim_north_translatePoint2$$, $moveAnim2_translatePoint_translateX$$1$$);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$.$getTooltipManager$().$hideTooltip$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$)), $JSCompiler_StaticMethods__collapseExpand$self$$.isCollapsed() && $JSCompiler_StaticMethods__collapseExpand$self$$.$_scrollableContainer$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__collapseExpand$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.play())
};
D.$JSCompiler_StaticMethods__getOutlinePath$$ = function $$JSCompiler_StaticMethods__getOutlinePath$$$($JSCompiler_StaticMethods__getOutlinePath$self$$, $width$$28$$, $height$$28$$) {
  var $r$$10$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_borderRadius$, $cmds$$5$$, $west$$4$$ = "col_northwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$;
  25 >= $height$$28$$ && ($height$$28$$ = 25);
  $cmds$$5$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$ ? window.DvtPathUtils.moveTo($r$$10$$, 0) : window.DvtPathUtils.moveTo(0, 0);
  $cmds$$5$$ += window.DvtPathUtils.lineTo($width$$28$$ - $r$$10$$, 0);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && $west$$4$$ ? ($cmds$$5$$ += window.DvtPathUtils.lineTo($width$$28$$, 0), $cmds$$5$$ += window.DvtPathUtils.lineTo($width$$28$$, $r$$10$$)) : $cmds$$5$$ += window.DvtPathUtils.$quadTo$($width$$28$$, 0, $width$$28$$, $r$$10$$);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$28$$ && $west$$4$$ ? $cmds$$5$$ += window.DvtPathUtils.lineTo($width$$28$$, $height$$28$$) : ($cmds$$5$$ += window.DvtPathUtils.lineTo($width$$28$$, $height$$28$$ - $r$$10$$), $cmds$$5$$ += window.DvtPathUtils.$quadTo$($width$$28$$, $height$$28$$, $width$$28$$ - $r$$10$$, $height$$28$$));
  $cmds$$5$$ += window.DvtPathUtils.lineTo($r$$10$$, $height$$28$$);
  $cmds$$5$$ = !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$28$$ && !$west$$4$$ ? $cmds$$5$$ + window.DvtPathUtils.lineTo(0, $height$$28$$) : $cmds$$5$$ + window.DvtPathUtils.$quadTo$(0, $height$$28$$, 0, $height$$28$$ - $r$$10$$);
  if($JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$) {
    $cmds$$5$$ += window.DvtPathUtils.lineTo(0, $r$$10$$), $cmds$$5$$ += window.DvtPathUtils.$quadTo$(0, 0, $r$$10$$, 0)
  }
  return $cmds$$5$$ += window.DvtPathUtils.closePath()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCollapsiblePanel$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  var $alpha$$5_stroke$$4$$ = this.$_background$.$getStroke$().clone();
  $alpha$$5_stroke$$4$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($alpha$$5_stroke$$4$$);
  var $alpha$$5_stroke$$4$$ = this.$_styleMap$[D.$DvtPanZoomControlPanel$$.$BG_ROLLOUT_ALPHA$], $fill$$3$$ = this.$_background$.$getFill$().clone();
  $fill$$3$$.$setAlpha$($alpha$$5_stroke$$4$$);
  this.$_background$.$setFill$($fill$$3$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.isCollapsed() || this.$_scrollableContainer$.$setAlpha$(1);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this);
  this.$_collapseExpandButton$ && (this.$_collapseExpandButton$ = this.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$(this.$_context$, this.$_buttonImages$, 25, this.$_styleMap$, D.$JSCompiler_alias_FALSE$$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$(this.$_context$, this.$_buttonImages$, 25, this.$_styleMap$, D.$JSCompiler_alias_FALSE$$), this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$), this.$_buttonFrame$.$removeChildAt$(0), D.$DvtAgent$$.$isTouchDevice$() ? this.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, 
  this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$OnButtonClick$ = function $$JSCompiler_prototypeAlias$$$$OnButtonClick$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$();
  (0,D.$JSCompiler_StaticMethods_setCollapsed$$)(this, !this.isCollapsed())
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOver$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOver$$($evt$$20$$) {
  var $tooltip$$3$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
  $tooltip$$3$$ != D.$JSCompiler_alias_NULL$$ && this.$_context$.$getTooltipManager$().$showTooltip$($evt$$20$$.pageX, $evt$$20$$.pageY, $tooltip$$3$$, this.$_collapseExpandButton$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOut$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOut$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$() {
  var $alpha$$6_stroke$$5$$ = this.$_background$.$getStroke$().clone();
  $alpha$$6_stroke$$5$$.$setAlpha$(this.$_styleMap$.borderHoverAlpha);
  this.$_background$.$setStroke$($alpha$$6_stroke$$5$$);
  var $alpha$$6_stroke$$5$$ = this.$_styleMap$.backgroundHoverAlpha, $fill$$4$$ = this.$_background$.$getFill$().clone();
  $fill$$4$$.$setAlpha$($alpha$$6_stroke$$5$$);
  this.$_background$.$setFill$($fill$$4$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderHoverAlpha)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$() {
  var $fill$$5_stroke$$6$$ = this.$_background$.$getStroke$().clone();
  $fill$$5_stroke$$6$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($fill$$5_stroke$$6$$);
  $fill$$5_stroke$$6$$ = this.$_background$.$getFill$().clone();
  $fill$$5_stroke$$6$$.$setAlpha$(this.$_bgAlpha$);
  this.$_background$.$setFill$($fill$$5_stroke$$6$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha)
};
D.$DvtCollapsiblePanelEvent$$ = function $$DvtCollapsiblePanelEvent$$$($subtype$$1$$) {
  this.Init("dvtCollapsiblePanelEvent");
  this.$_subtype$ = $subtype$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtCollapsiblePanelEvent");
D.$DvtCollapsiblePanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtImageLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtImageLAFUtils$$, D.$DvtObj$$, "DvtImageLAFUtils");
D.$DvtImageLAFUtils$$.$loadIcon$ = function $$DvtImageLAFUtils$$$$loadIcon$$($context$$69$$, $uri$$19$$) {
  var $image$$7$$ = new D.$DvtImage$$($context$$69$$, $uri$$19$$);
  $image$$7$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$69$$, $uri$$19$$, function($context$$69$$) {
    $context$$69$$ != D.$JSCompiler_alias_NULL$$ && ($context$$69$$.width && $context$$69$$.height) && ($image$$7$$.$setWidth$($context$$69$$.width), $image$$7$$.$setHeight$($context$$69$$.height))
  });
  return $image$$7$$
};
D.$DvtButtonLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtButtonLAFUtils$$, D.$DvtObj$$, "DvtButtonLAFUtils");
D.$DvtButtonLAFUtils$$.$EXPAND_COLLAPSE_BUTTON_IMG_OFFSET$ = -6;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_WIDTH$ = 23;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_HEIGHT$ = 21;
D.$DvtButtonLAFUtils$$.$ZOOM_BUTTON_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_WIDTH$ = 22;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtButtonLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtButtonLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtButtonLAFUtils$$.$BORDER_COLOR$ = "#7C8191";
D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$ = "#E0E1E1";
D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$ = "#F0F1F2";
D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$ = 8;
D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$ = "zoominUp";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$ = "zoominOver";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$ = "zoominDown";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$ = "zoominDisabled";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$ = "zoomtofitUp";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$ = "zoomtofitOver";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$ = "zoomtofitDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$ = "zoomoutUp";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$ = "zoomoutOver";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$ = "zoomoutDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$ = "zoomoutDisabled";
D.$DvtButtonLAFUtils$$.$_PAN_ENA$ = "pandialUp";
D.$DvtButtonLAFUtils$$.$_PAN_OVR$ = "pandialOver";
D.$DvtButtonLAFUtils$$.$_PAN_DWN$ = "pandialDown";
D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$ = "recenterUp";
D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$ = "recenterOver";
D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$ = "recenterDown";
D.$DvtButtonLAFUtils$$.$_RESET_ENA$ = "resetUp";
D.$DvtButtonLAFUtils$$.$_RESET_OVR$ = "resetOver";
D.$DvtButtonLAFUtils$$.$_RESET_DWN$ = "resetDown";
D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$ = "drillupUp";
D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$ = "drillupOver";
D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$ = "drillupDown";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$ = "drilldownUp";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$ = "drilldownOver";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$ = "drilldownDown";
D.$DvtButtonLAFUtils$$.$_MAX_ENA$ = "maxUp";
D.$DvtButtonLAFUtils$$.$_MAX_OVR$ = "maxOver";
D.$DvtButtonLAFUtils$$.$_MAX_DWN$ = "maxDown";
D.$DvtButtonLAFUtils$$.$_RESTORE_ENA$ = "restoreUp";
D.$DvtButtonLAFUtils$$.$_RESTORE_OVR$ = "restoreOver";
D.$DvtButtonLAFUtils$$.$_RESTORE_DWN$ = "restoreDown";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$ = "collapseEna";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$ = "collapseOvr";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$ = "collapseDwn";
D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$ = "expandEna";
D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$ = "expandOvr";
D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$ = "expandDwn";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$ = "quickQueryEna";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$ = "quickQueryOvr";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$ = "quickQueryDwn";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$ = "clearResultsEna";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$ = "clearResultsOvr";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$ = "clearResultsDwn";
D.$DvtButtonLAFUtils$$.$_ZOOMSLIDER_ENA$ = "";
D.$DvtButtonLAFUtils$$.$_ZOOMSLIDER_OVR$ = "";
D.$DvtButtonLAFUtils$$.$_ZOOMSLIDER_DWN$ = "";
D.$DvtButtonLAFUtils$$.$_UP$ = "Up";
D.$DvtButtonLAFUtils$$.$_OVER$ = "Over";
D.$DvtButtonLAFUtils$$.$_DOWN$ = "Down";
D.$DvtButtonLAFUtils$$.$_SEL$ = "Sel";
D.$DvtButtonLAFUtils$$.$_R2L$ = "_r";
D.$DvtButtonLAFUtils$$.$_SYNC$ = "synchronize";
D.$DvtButtonLAFUtils$$.$createPanControl$ = function $$DvtButtonLAFUtils$$$$createPanControl$$($context$$34$$, $panZoomCanvas$$, $resources$$1$$, $controls$$1$$, $imageURIs$$, $styleMap$$1$$) {
  var $panButton_panUpState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$34$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_PAN_ENA$), $styleMap$$1$$), $panDownState$$ = new D.$DvtContainer$$($context$$34$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panDownState$$, 20, 20);
  var $downImage_panOverState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$34$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_PAN_DWN$), $styleMap$$1$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, -20, -20);
  $panDownState$$.$addChild$($downImage_panOverState$$);
  $downImage_panOverState$$ = new D.$DvtContainer$$($context$$34$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, 20, 20);
  var $overImage$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$34$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_PAN_OVR$), $styleMap$$1$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($overImage$$, -20, -20);
  $downImage_panOverState$$.$addChild$($overImage$$);
  $panButton_panUpState$$ = new D.$DvtButton$$($context$$34$$, $panButton_panUpState$$, $downImage_panOverState$$, $panDownState$$);
  if(0 < ($controls$$1$$ & 16)) {
    var $recenterButton$$ = new D.$DvtButton$$($context$$34$$, D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$34$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$), $styleMap$$1$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$34$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$), $styleMap$$1$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$34$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$), $styleMap$$1$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($recenterButton$$, 9, 9)
  }
  return new D.$DvtPanControl$$($context$$34$$, $panButton_panUpState$$, $recenterButton$$, $panZoomCanvas$$, $resources$$1$$, $controls$$1$$, $styleMap$$1$$)
};
D.$DvtButtonLAFUtils$$.$createDrillUpButton$ = function $$DvtButtonLAFUtils$$$$createDrillUpButton$$($context$$35$$, $mapCallback$$, $panZoomCanvas$$1$$, $resources$$2$$, $dis_imageURIs$$1$$, $eventManager$$, $styleMap$$2$$) {
  var $ena$$1$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$35$$, 0, $dis_imageURIs$$1$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$), $styleMap$$2$$), $ovr$$1$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$35$$, 1, $dis_imageURIs$$1$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$), $styleMap$$2$$), $dwn$$1$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$35$$, 2, $dis_imageURIs$$1$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$), $styleMap$$2$$);
  $dis_imageURIs$$1$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$35$$, 0, $dis_imageURIs$$1$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$), $styleMap$$2$$);
  return new D.$DvtMapControlButton$$($context$$35$$, new D.$DvtButton$$($context$$35$$, $ena$$1$$, $ovr$$1$$, $dwn$$1$$, $dis_imageURIs$$1$$), $mapCallback$$, $panZoomCanvas$$1$$, 0, $resources$$2$$, $eventManager$$)
};
D.$DvtButtonLAFUtils$$.$createDrillDownButton$ = function $$DvtButtonLAFUtils$$$$createDrillDownButton$$($context$$36$$, $mapCallback$$1$$, $panZoomCanvas$$2$$, $resources$$3$$, $dis$$1_imageURIs$$2$$, $eventManager$$1$$, $styleMap$$3$$) {
  var $ena$$2$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$36$$, 0, $dis$$1_imageURIs$$2$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$), $styleMap$$3$$), $ovr$$2$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$36$$, 1, $dis$$1_imageURIs$$2$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$), $styleMap$$3$$), $dwn$$2$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$36$$, 2, $dis$$1_imageURIs$$2$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$), 
  $styleMap$$3$$);
  $dis$$1_imageURIs$$2$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$36$$, 0, $dis$$1_imageURIs$$2$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$), $styleMap$$3$$);
  return new D.$DvtMapControlButton$$($context$$36$$, new D.$DvtButton$$($context$$36$$, $ena$$2$$, $ovr$$2$$, $dwn$$2$$, $dis$$1_imageURIs$$2$$), $mapCallback$$1$$, $panZoomCanvas$$2$$, 1, $resources$$3$$, $eventManager$$1$$)
};
D.$DvtButtonLAFUtils$$.$createResetButton$ = function $$DvtButtonLAFUtils$$$$createResetButton$$($context$$37$$, $mapCallback$$2$$, $panZoomCanvas$$3$$, $resources$$4$$, $dis$$2_imageURIs$$3$$, $eventManager$$2$$, $styleMap$$4$$) {
  var $ena$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$37$$, 0, $dis$$2_imageURIs$$3$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RESET_ENA$), $styleMap$$4$$), $ovr$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$37$$, 1, $dis$$2_imageURIs$$3$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RESET_OVR$), $styleMap$$4$$), $dwn$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$37$$, 2, $dis$$2_imageURIs$$3$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RESET_DWN$), $styleMap$$4$$);
  $dis$$2_imageURIs$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$37$$, 0, $dis$$2_imageURIs$$3$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RESET_ENA$), $styleMap$$4$$);
  return new D.$DvtMapControlButton$$($context$$37$$, new D.$DvtButton$$($context$$37$$, $ena$$3$$, $ovr$$3$$, $dwn$$3$$, $dis$$2_imageURIs$$3$$), $mapCallback$$2$$, $panZoomCanvas$$3$$, 2, $resources$$4$$, $eventManager$$2$$)
};
D.$DvtButtonLAFUtils$$.$createZoomToFitButton$ = function $$DvtButtonLAFUtils$$$$createZoomToFitButton$$($context$$38$$, $panZoomCanvas$$4$$, $resources$$5$$, $eventManager$$3$$, $dwn$$4_imageURIs$$4$$, $styleMap$$5$$) {
  var $ena$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$38$$, 0, $dwn$$4_imageURIs$$4$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$), $styleMap$$5$$), $ovr$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$38$$, 1, $dwn$$4_imageURIs$$4$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$), $styleMap$$5$$);
  $dwn$$4_imageURIs$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$38$$, 2, $dwn$$4_imageURIs$$4$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$), $styleMap$$5$$);
  return new D.$DvtZoomToFitButton$$($context$$38$$, new D.$DvtButton$$($context$$38$$, $ena$$4$$, $ovr$$4$$, $dwn$$4_imageURIs$$4$$), $panZoomCanvas$$4$$, $resources$$5$$, $eventManager$$3$$)
};
D.$DvtButtonLAFUtils$$.$createZoomInButton$ = function $$DvtButtonLAFUtils$$$$createZoomInButton$$($context$$39$$, $panZoomCanvas$$5$$, $resources$$6$$, $eventManager$$4$$, $dis$$3_imageURIs$$5$$, $styleMap$$6$$) {
  var $ena$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$39$$, 0, $dis$$3_imageURIs$$5$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$), $styleMap$$6$$), $ovr$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$39$$, 1, $dis$$3_imageURIs$$5$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$), $styleMap$$6$$), $dwn$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$39$$, 2, $dis$$3_imageURIs$$5$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$), $styleMap$$6$$);
  $dis$$3_imageURIs$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$39$$, 3, $dis$$3_imageURIs$$5$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$), $styleMap$$6$$);
  return new D.$DvtZoomInButton$$($context$$39$$, new D.$DvtButton$$($context$$39$$, $ena$$5$$, $ovr$$5$$, $dwn$$5$$, $dis$$3_imageURIs$$5$$), $panZoomCanvas$$5$$, $resources$$6$$, $eventManager$$4$$)
};
D.$DvtButtonLAFUtils$$.$createZoomOutButton$ = function $$DvtButtonLAFUtils$$$$createZoomOutButton$$($context$$40$$, $panZoomCanvas$$6$$, $resources$$7$$, $eventManager$$5$$, $dis$$4_imageURIs$$6$$, $styleMap$$7$$) {
  var $ena$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$40$$, 0, $dis$$4_imageURIs$$6$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$), $styleMap$$7$$), $ovr$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$40$$, 1, $dis$$4_imageURIs$$6$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$), $styleMap$$7$$), $dwn$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$40$$, 2, $dis$$4_imageURIs$$6$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$), $styleMap$$7$$);
  $dis$$4_imageURIs$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$40$$, 3, $dis$$4_imageURIs$$6$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$), $styleMap$$7$$);
  return new D.$DvtZoomOutButton$$($context$$40$$, new D.$DvtButton$$($context$$40$$, $ena$$6$$, $ovr$$6$$, $dwn$$6$$, $dis$$4_imageURIs$$6$$), $panZoomCanvas$$6$$, $resources$$7$$, $eventManager$$5$$)
};
D.$DvtButtonLAFUtils$$.$createLayoutItemButtonState$ = function $$DvtButtonLAFUtils$$$$createLayoutItemButtonState$$($context$$41_image$$2$$, $attrb_bname$$, $state$$, $images_uri$$11$$, $styleMap$$8$$) {
  var $r$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$8$$, "buttonRadius", 0), $w$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$8$$, "buttonWidth", 0), $h$$7$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$8$$, "buttonWidth", 0), $shape$$2$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$41_image$$2$$, $r$$, $w$$8$$, $h$$7$$, $styleMap$$8$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$, $shape$$2$$, $w$$8$$, $h$$7$$ + 2 * $r$$, $styleMap$$8$$, D.$JSCompiler_alias_TRUE$$);
  $attrb_bname$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$41_image$$2$$, $state$$, $attrb_bname$$);
  $images_uri$$11$$ = $images_uri$$11$$.$getAttr$($attrb_bname$$);
  ($context$$41_image$$2$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$41_image$$2$$, $images_uri$$11$$, $w$$8$$, $h$$7$$)) && $shape$$2$$.$addChild$($context$$41_image$$2$$);
  return $shape$$2$$
};
D.$DvtButtonLAFUtils$$.$_getLayoutURI$ = function $$DvtButtonLAFUtils$$$$_getLayoutURI$$($context$$42$$, $state$$1$$, $attrb$$1_bname$$1$$, $bSel$$) {
  var $r2l$$ = "";
  0 == $state$$1$$ ? $state$$1$$ = D.$DvtButtonLAFUtils$$.$_UP$ : 1 == $state$$1$$ ? $state$$1$$ = D.$DvtButtonLAFUtils$$.$_OVER$ : 2 == $state$$1$$ && ($state$$1$$ = D.$DvtButtonLAFUtils$$.$_DOWN$);
  $bSel$$ && ($attrb$$1_bname$$1$$ += D.$DvtButtonLAFUtils$$.$_SEL$, D.$DvtAgent$$.$isRightToLeft$($context$$42$$) && ($r2l$$ = D.$DvtButtonLAFUtils$$.$_R2L$));
  return $attrb$$1_bname$$1$$ + ($state$$1$$ + $r2l$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardButtonState$ = function $$DvtButtonLAFUtils$$$$createPanelCardButtonState$$($context$$43$$, $state$$2$$, $styleMap$$9$$, $images$$1$$) {
  var $attrb$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$43$$, $state$$2$$, D.$DvtButtonLAFUtils$$.$_SYNC$, D.$JSCompiler_alias_TRUE$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$43$$, $state$$2$$, $images$$1$$.$getAttr$($attrb$$2$$), $styleMap$$9$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardSyncItemState$ = function $$DvtButtonLAFUtils$$$$createPanelCardSyncItemState$$($base$$1_context$$44$$, $state$$3$$, $ww$$3$$, $hh$$2$$, $styleMap$$10$$) {
  var $r$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$10$$, "buttonRadius", 0);
  $base$$1_context$$44$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($base$$1_context$$44$$, $r$$1$$, $ww$$3$$, $hh$$2$$, $styleMap$$10$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$3$$, $base$$1_context$$44$$, $ww$$3$$, $hh$$2$$ + 2 * $r$$1$$, $styleMap$$10$$, D.$JSCompiler_alias_TRUE$$);
  return $base$$1_context$$44$$
};
D.$DvtButtonLAFUtils$$.$createZoomSliderButton$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtButtonLAFUtils$$.$createControlButtonState$ = function $$DvtButtonLAFUtils$$$$createControlButtonState$$($context$$46$$, $attrb$$3_bname$$2$$, $state$$5$$, $images$$3$$, $styleMap$$11$$) {
  $attrb$$3_bname$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$46$$, $state$$5$$, $attrb$$3_bname$$2$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$46$$, $state$$5$$, $images$$3$$.$getAttr$($attrb$$3_bname$$2$$), $styleMap$$11$$)
};
D.$DvtButtonLAFUtils$$.$createExpandButton$ = function $$DvtButtonLAFUtils$$$$createExpandButton$$($context$$47$$, $dwn$$7_imageURIs$$7$$, $h$$8$$, $styleMap$$12$$, $bR2L$$1$$) {
  var $ena$$7$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$47$$, 0, $h$$8$$, $dwn$$7_imageURIs$$7$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$), $styleMap$$12$$, $bR2L$$1$$), $ovr$$7$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$47$$, 1, $h$$8$$, $dwn$$7_imageURIs$$7$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$), $styleMap$$12$$, $bR2L$$1$$);
  $dwn$$7_imageURIs$$7$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$47$$, 2, $h$$8$$, $dwn$$7_imageURIs$$7$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$), $styleMap$$12$$, $bR2L$$1$$);
  return new D.$DvtButton$$($context$$47$$, $ena$$7$$, $ovr$$7$$, $dwn$$7_imageURIs$$7$$)
};
D.$DvtButtonLAFUtils$$.$createCollapseButton$ = function $$DvtButtonLAFUtils$$$$createCollapseButton$$($context$$48$$, $dwn$$8_imageURIs$$8$$, $h$$9$$, $styleMap$$13$$, $bR2L$$2$$) {
  var $ena$$8$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$48$$, 0, $h$$9$$, $dwn$$8_imageURIs$$8$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$), $styleMap$$13$$, $bR2L$$2$$), $ovr$$8$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$48$$, 1, $h$$9$$, $dwn$$8_imageURIs$$8$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$), $styleMap$$13$$, $bR2L$$2$$);
  $dwn$$8_imageURIs$$8$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$48$$, 2, $h$$9$$, $dwn$$8_imageURIs$$8$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$), $styleMap$$13$$, $bR2L$$2$$);
  return new D.$DvtButton$$($context$$48$$, $ena$$8$$, $ovr$$8$$, $dwn$$8_imageURIs$$8$$)
};
D.$DvtButtonLAFUtils$$.$createQuickQueryButton$ = function $$DvtButtonLAFUtils$$$$createQuickQueryButton$$($context$$49$$, $imageURIs$$9$$) {
  var $ena$$9$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$49$$, $imageURIs$$9$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$)), $ovr$$9$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$49$$, $imageURIs$$9$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$)), $dwn$$9$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$49$$, $imageURIs$$9$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$));
  return new D.$DvtButton$$($context$$49$$, $ena$$9$$, $ovr$$9$$, $dwn$$9$$)
};
D.$DvtButtonLAFUtils$$.$createClearResultsButton$ = function $$DvtButtonLAFUtils$$$$createClearResultsButton$$($context$$50$$, $imageURIs$$10$$) {
  var $ena$$10$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$50$$, $imageURIs$$10$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$)), $ovr$$10$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$50$$, $imageURIs$$10$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$)), $dwn$$10$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$50$$, $imageURIs$$10$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$));
  return new D.$DvtButton$$($context$$50$$, $ena$$10$$, $ovr$$10$$, $dwn$$10$$)
};
D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$ = function $$DvtButtonLAFUtils$$$$_createButtonBaseImage$$($context$$51_image$$3$$, $base$$2_state$$6$$, $uri$$12$$, $styleMap$$14$$) {
  var $w$$9$$, $h$$10$$, $r$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$14$$, "buttonRadius", 0);
  if("undefined" === $w$$9$$ || $w$$9$$ == D.$JSCompiler_alias_NULL$$) {
    $w$$9$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$14$$, "buttonWidth", 0)
  }
  if("undefined" === $h$$10$$ || $h$$10$$ == D.$JSCompiler_alias_NULL$$) {
    $h$$10$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$14$$, "buttonWidth", 0)
  }
  $base$$2_state$$6$$ = D.$DvtButtonLAFUtils$$.$_drawBaseButton$($context$$51_image$$3$$, $base$$2_state$$6$$, $r$$2$$, $w$$9$$, $h$$10$$, $styleMap$$14$$);
  ($context$$51_image$$3$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$51_image$$3$$, $uri$$12$$, $w$$9$$, $h$$10$$)) && $base$$2_state$$6$$.$addChild$($context$$51_image$$3$$);
  return $base$$2_state$$6$$
};
D.$DvtButtonLAFUtils$$.$_loadIcon$ = function $$DvtButtonLAFUtils$$$$_loadIcon$$($context$$52$$, $uri$$13$$, $buttonWidth$$, $buttonHeight$$) {
  var $image$$4$$ = new D.$DvtImage$$($context$$52$$, $uri$$13$$);
  $image$$4$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$52$$, $uri$$13$$, function($context$$52$$) {
    $context$$52$$ != D.$JSCompiler_alias_NULL$$ && ($context$$52$$.width && $context$$52$$.height) && ($image$$4$$.$setWidth$($context$$52$$.width), $image$$4$$.$setHeight$($context$$52$$.height), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($image$$4$$, $buttonWidth$$ / 2 - $context$$52$$.width / 2, $buttonHeight$$ / 2 - $context$$52$$.height / 2))
  });
  return $image$$4$$
};
D.$DvtButtonLAFUtils$$.$_createZoomSliderButtonState$ = function $$DvtButtonLAFUtils$$$$_createZoomSliderButtonState$$($context$$53_currLoader$$, $state$$7$$, $ww$$4$$, $uri$$14$$) {
  var $mc_x$$81$$ = $ww$$4$$, $y$$58$$ = 16, $cmds$$ = window.DvtPathUtils.moveTo($mc_x$$81$$, $y$$58$$) + window.DvtPathUtils.lineTo($mc_x$$81$$ - $ww$$4$$, $y$$58$$), $mc_x$$81$$ = $mc_x$$81$$ - $ww$$4$$, $cmds$$ = $cmds$$ + window.DvtPathUtils.lineTo($mc_x$$81$$, $y$$58$$ - 16), $y$$58$$ = $y$$58$$ - 16, $cmds$$ = $cmds$$ + window.DvtPathUtils.lineTo($mc_x$$81$$ + $ww$$4$$, $y$$58$$), $cmds$$ = $cmds$$ + (window.DvtPathUtils.lineTo($mc_x$$81$$ + $ww$$4$$, $y$$58$$ + 16) + window.DvtPathUtils.closePath()), 
  $mc_x$$81$$ = new D.$DvtPath$$($context$$53_currLoader$$, $cmds$$);
  if($context$$53_currLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$53_currLoader$$, $uri$$14$$)) {
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$53_currLoader$$, -6 + window.sw, -2), $mc_x$$81$$.$addChild$($context$$53_currLoader$$)
  }
  D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$($state$$7$$, $mc_x$$81$$, $ww$$4$$);
  return $mc_x$$81$$
};
D.$DvtButtonLAFUtils$$.$_createPanButtonState$ = function $$DvtButtonLAFUtils$$$$_createPanButtonState$$($context$$54_image$$5$$, $uri$$15$$, $styleMap$$15$$) {
  var $mc$$1$$ = new D.$DvtContainer$$($context$$54_image$$5$$), $hitZone$$ = new D.$DvtCircle$$($context$$54_image$$5$$, 20, 20, 20);
  $hitZone$$.$setAlpha$(0);
  $hitZone$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$15$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $mc$$1$$.$addChild$($hitZone$$);
  ($context$$54_image$$5$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$54_image$$5$$, $uri$$15$$)) && $mc$$1$$.$addChild$($context$$54_image$$5$$);
  return $mc$$1$$
};
D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$ = function $$DvtButtonLAFUtils$$$$_createRecenterButtonState$$($context$$55_image$$6$$, $uri$$16$$, $styleMap$$16$$) {
  var $shape$$5$$ = new D.$DvtContainer$$($context$$55_image$$6$$), $hitZone$$1$$ = new D.$DvtCircle$$($context$$55_image$$6$$, 11, 11, 8);
  $hitZone$$1$$.$setAlpha$(0);
  $hitZone$$1$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$16$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $shape$$5$$.$addChild$($hitZone$$1$$);
  ($context$$55_image$$6$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$55_image$$6$$, $uri$$16$$)) && $shape$$5$$.$addChild$($context$$55_image$$6$$);
  return $shape$$5$$
};
D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$ = function $$DvtButtonLAFUtils$$$$_createCollapseExpandButtonState$$($context$$56_iconLoader$$, $sprite_state$$8$$, $nh$$, $imageW_uri$$17$$, $styleMap$$17$$, $bR2L$$3_imageH$$) {
  $nh$$ || ($nh$$ = 47);
  $sprite_state$$8$$ = D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$($context$$56_iconLoader$$, $sprite_state$$8$$, $nh$$, $styleMap$$17$$, $bR2L$$3_imageH$$);
  if($context$$56_iconLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$56_iconLoader$$, $imageW_uri$$17$$)) {
    $imageW_uri$$17$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$17$$, "imageWidth", 0), $bR2L$$3_imageH$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$17$$, "imageHeight", 0), $sprite_state$$8$$.$addChild$($context$$56_iconLoader$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$56_iconLoader$$, ((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$17$$, "openCloseButtonWidth", 0) - $imageW_uri$$17$$) / 2, ($nh$$ - $bR2L$$3_imageH$$) / 2)
  }
  return $sprite_state$$8$$
};
D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$ = function $$DvtButtonLAFUtils$$$$_createQuickQueryButtonState$$($context$$57$$, $uri$$18$$) {
  var $iconLoader$$1$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$57$$, $uri$$18$$);
  $iconLoader$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  return $iconLoader$$1$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonBackground$ = function $$DvtButtonLAFUtils$$$$createPanButtonBackground$$($context$$58$$, $styleMap$$18$$) {
  var $shape$$6$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$58$$), $bgColor$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$18$$, "background-color", D.$JSCompiler_alias_NULL$$), $borderColor$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$18$$, "border-color", D.$JSCompiler_alias_NULL$$);
  "solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$18$$, "fill-type", D.$JSCompiler_alias_NULL$$) ? ($shape$$6$$.$setSolidStroke$($borderColor$$), $shape$$6$$.$setSolidFill$($bgColor$$)) : ($shape$$6$$.$setStroke$(new D.$DvtLinearGradientStroke$$(36, ["#8D93A5", "#E0EAEB", $borderColor$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $shape$$6$$.$setFill$(new D.$DvtLinearGradientFill$$(90, [$bgColor$$, $bgColor$$, "#5A83BE", $bgColor$$], [0.9, 0.1, 0, 0.7], [0, 105 / 255, 150 / 255, 1], 
  [0, 0, 40, 40])));
  return $shape$$6$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$ = function $$DvtButtonLAFUtils$$$$createPanButtonUnderlay$$($context$$59$$, $styleMap$$19$$) {
  var $shape$$7$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$59$$), $color$$4$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$19$$, "background-color", D.$JSCompiler_alias_NULL$$);
  $shape$$7$$.$setSolidStroke$($color$$4$$);
  $shape$$7$$.$setSolidFill$($color$$4$$);
  return $shape$$7$$
};
D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$ = function $$DvtButtonLAFUtils$$$$_drawPanButtonBase$$($context$$60$$) {
  var $cmds$$1$$ = window.DvtPathUtils.moveTo(40, 20) + window.DvtPathUtils.$quadTo$(40, 20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20, 40) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(0, 
  20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20) + window.DvtPathUtils.$quadTo$(0, 20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20, 0) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(40, 
  20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20) + window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$60$$, $cmds$$1$$, "draw_pan_button")
};
D.$DvtButtonLAFUtils$$.$_setGradientBorder$ = function $$DvtButtonLAFUtils$$$$_setGradientBorder$$($shape$$8$$, $ww$$7$$, $hh$$6$$) {
  $shape$$8$$.$setSolidStroke$("#FFFFFF");
  $shape$$8$$.$setStroke$(new D.$DvtLinearGradientStroke$$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [0, 0, $ww$$7$$, $hh$$6$$], 1))
};
D.$DvtButtonLAFUtils$$.$_setButtonColors$ = function $$DvtButtonLAFUtils$$$$_setButtonColors$$($state$$10$$, $shape$$9$$, $ww$$8$$, $hh$$7$$, $styleMap$$20$$, $isDropdownItem$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$20$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    !$isDropdownItem$$ || $isDropdownItem$$ && 0 == $state$$10$$ ? (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$9$$) : (1 == $state$$10$$ || 2 == $state$$10$$) && $shape$$9$$.$setFill$(new D.$DvtSolidFill$$("#EBECED"))
  }else {
    if("skyros" == $styleMap$$20$$.skin) {
      switch($state$$10$$) {
        case 1:
          $shape$$9$$.$setFill$(new D.$DvtSolidFill$$("#FFFFFF", 0.7));
          $shape$$9$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$20$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        case 2:
          $shape$$9$$.$setFill$(new D.$DvtSolidFill$$("#B3C6DB"));
          $shape$$9$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$20$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        default:
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$9$$)
      }
    }else {
      var $fill_colors$$1$$, $fill_alphas$$1$$, $fill_ratios$$1$$;
      switch($state$$10$$) {
        case 3:
        ;
        case 0:
          $fill_colors$$1$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
          $fill_alphas$$1$$ = [0.01, 0, 0.05, 0.01];
          $fill_ratios$$1$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 1:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$9$$, $ww$$8$$, $hh$$7$$);
          $fill_colors$$1$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
          $fill_alphas$$1$$ = [0.5, 0.2, 0.1, 0.7];
          $fill_ratios$$1$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$9$$, $ww$$8$$, $hh$$7$$), $fill_colors$$1$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$1$$ = [0.1, 0.3, 0.6], $fill_ratios$$1$$ = [0, 130 / 255, 1]
      }
      $shape$$9$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$1$$, $fill_alphas$$1$$, $fill_ratios$$1$$, [0, 0, $ww$$8$$, $hh$$7$$]))
    }
  }
};
D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$ = function $$DvtButtonLAFUtils$$$$_setCloseButtonColors$$($fill$$1_state$$11$$, $shape$$10$$, $bgColor$$1_ww$$9$$, $hh$$8$$, $styleMap$$21$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$21$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$10$$)
  }else {
    var $borderColor$$1_stroke$$2$$;
    $borderColor$$1_stroke$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$21$$, "border-color", D.$JSCompiler_alias_NULL$$);
    if("solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$21$$, "fill-type", D.$JSCompiler_alias_NULL$$)) {
      $bgColor$$1_ww$$9$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$21$$, "background-color", D.$JSCompiler_alias_NULL$$);
      switch($fill$$1_state$$11$$) {
        case 0:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$21$$, "backgroundAlpha", 1);
          window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$21$$, "borderAlpha", 1);
          break;
        case 2:
        ;
        case 1:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$21$$, "backgroundHoverAlpha", 1), window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$21$$, "borderHoverAlpha", 1)
      }
      $fill$$1_state$$11$$ = new D.$DvtSolidFill$$($bgColor$$1_ww$$9$$, window.bgAlpha);
      $borderColor$$1_stroke$$2$$ = new D.$DvtSolidStroke$$($borderColor$$1_stroke$$2$$, window.strokeAlpha)
    }else {
      var $fill_colors$$2$$, $fill_alphas$$2$$, $fill_ratios$$2$$;
      switch($fill$$1_state$$11$$) {
        case 0:
          $fill_colors$$2$$ = ["#FFFFFF", "#5B868A", "#5B868A"];
          $fill_alphas$$2$$ = [0, 0.2, 0.3];
          $fill_ratios$$2$$ = [0, 130 / 255, 1];
          break;
        case 1:
          $fill_colors$$2$$ = ["#FFFFFF", "#FFFFFF", "#4671B0", "#4671B0"];
          $fill_alphas$$2$$ = [0.1, 0.2, 0.1, 0.6];
          $fill_ratios$$2$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          $fill_colors$$2$$ = ["#4671B0", "#5B868A", "#5B868A"], $fill_alphas$$2$$ = [0.5, 0.2, 0.4], $fill_ratios$$2$$ = [0, 130 / 255, 1]
      }
      $fill$$1_state$$11$$ = new D.$DvtLinearGradientFill$$(0, $fill_colors$$2$$, $fill_alphas$$2$$, $fill_ratios$$2$$, [0, 0, $bgColor$$1_ww$$9$$, $hh$$8$$]);
      $borderColor$$1_stroke$$2$$ = new D.$DvtSolidStroke$$($borderColor$$1_stroke$$2$$, 1, 0.8)
    }
    $shape$$10$$.$setStroke$($borderColor$$1_stroke$$2$$);
    $shape$$10$$.$setFill$($fill$$1_state$$11$$)
  }
};
D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$ = function $$DvtButtonLAFUtils$$$$_setSliderButtonColors$$($state$$12$$, $shape$$11$$, $ww$$10$$) {
  var $fill_colors$$3$$, $fill_alphas$$3$$, $fill_ratios$$3$$;
  switch($state$$12$$) {
    case 0:
      $shape$$11$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
      $fill_colors$$3$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
      $fill_alphas$$3$$ = [0.6, 0.3, 0.3, 0.8];
      $fill_ratios$$3$$ = [0, 125 / 255, 130 / 255, 1];
      break;
    case 1:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$11$$, $ww$$10$$, 16);
      $fill_colors$$3$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      $fill_alphas$$3$$ = [0.4, 0.3, 0.7, 1];
      $fill_ratios$$3$$ = [0, 70 / 255, 200 / 255, 1];
      break;
    case 2:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$11$$, $ww$$10$$, 16), $fill_colors$$3$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$3$$ = [0.6, 0.5, 0.8], $fill_ratios$$3$$ = [0, 130 / 255, 1]
  }
  $shape$$11$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$3$$, $fill_alphas$$3$$, $fill_ratios$$3$$, [0, 0, $ww$$10$$, 16]))
};
D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$ = function $$DvtButtonLAFUtils$$$$GetButtonPathCommands$$($buttonWidth$$2$$, $buttonHeight$$1$$, $r$$5$$, $bidi$$) {
  return $bidi$$ ? ["M", $buttonWidth$$2$$, 0, "L", $r$$5$$, 0, "A", $r$$5$$, $r$$5$$, 0, 0, 0, 0, $r$$5$$, "L", 0, $buttonHeight$$1$$ - $r$$5$$, "A", $r$$5$$, $r$$5$$, 0, 0, 0, $r$$5$$, $buttonHeight$$1$$, "L", $buttonWidth$$2$$, $buttonHeight$$1$$] : ["M", 0, 0, "L", $buttonWidth$$2$$ - $r$$5$$, 0, "A", $r$$5$$, $r$$5$$, 0, 0, 1, $buttonWidth$$2$$, $r$$5$$, "L", $buttonWidth$$2$$, $buttonHeight$$1$$ - $r$$5$$, "A", $r$$5$$, $r$$5$$, 0, 0, 1, $buttonWidth$$2$$ - $r$$5$$, $buttonHeight$$1$$, "L", 
  0, $buttonHeight$$1$$]
};
D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$ = function $$DvtButtonLAFUtils$$$$_drawOpenCloseButtonHelper$$($context$$62_shape$$12$$, $state$$13$$, $buttonHeight$$2_nh$$1$$, $styleMap$$22$$, $bR2L$$4$$) {
  $buttonHeight$$2_nh$$1$$ || ($buttonHeight$$2_nh$$1$$ = 47);
  var $r$$6$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$22$$, "border-radius", 0)), $buttonWidth$$3$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$22$$, "openCloseButtonWidth", 0);
  $buttonHeight$$2_nh$$1$$ = window.Math.max($buttonHeight$$2_nh$$1$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$22$$, "buttonHeight", $buttonHeight$$2_nh$$1$$));
  $context$$62_shape$$12$$ = new D.$DvtPath$$($context$$62_shape$$12$$, D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$3$$, $buttonHeight$$2_nh$$1$$, $r$$6$$, $bR2L$$4$$));
  D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$($state$$13$$, $context$$62_shape$$12$$, $buttonWidth$$3$$, $buttonHeight$$2_nh$$1$$, $styleMap$$22$$);
  return $context$$62_shape$$12$$
};
D.$DvtButtonLAFUtils$$.$_drawBaseButton$ = function $$DvtButtonLAFUtils$$$$_drawBaseButton$$($context$$63_shape$$13$$, $state$$14$$, $r$$7$$, $ww$$11$$, $hh$$10$$, $styleMap$$23$$) {
  $context$$63_shape$$13$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$63_shape$$13$$, $r$$7$$, $ww$$11$$, $hh$$10$$, $styleMap$$23$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$14$$, $context$$63_shape$$13$$, $ww$$11$$, $hh$$10$$ + 2 * $r$$7$$, $styleMap$$23$$);
  return $context$$63_shape$$13$$
};
D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$ = function $$DvtButtonLAFUtils$$$$_createBaseButtonShape$$($context$$64$$, $r$$8$$, $ww$$12$$, $hh$$11$$, $styleMap$$24_x$$83$$) {
  if("skyros" == $styleMap$$24_x$$83$$.skin) {
    return new D.$DvtRect$$($context$$64$$, 0, 0, $ww$$12$$, $hh$$11$$)
  }
  $ww$$12$$ -= 2 * $r$$8$$;
  $hh$$11$$ -= 2 * $r$$8$$;
  $styleMap$$24_x$$83$$ = $ww$$12$$ + $r$$8$$;
  var $y$$60$$ = $hh$$11$$ + $r$$8$$, $cmds$$2$$ = window.DvtPathUtils.moveTo($styleMap$$24_x$$83$$ + $r$$8$$, $y$$60$$) + window.DvtPathUtils.$quadTo$($r$$8$$ + $styleMap$$24_x$$83$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$8$$ + $y$$60$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$8$$ + $styleMap$$24_x$$83$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$8$$ + $y$$60$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$8$$ + $styleMap$$24_x$$83$$, $r$$8$$ + $y$$60$$, $styleMap$$24_x$$83$$, 
  $r$$8$$ + $y$$60$$) + window.DvtPathUtils.lineTo($styleMap$$24_x$$83$$, $y$$60$$ + $r$$8$$) + window.DvtPathUtils.lineTo($styleMap$$24_x$$83$$ - $ww$$12$$, $r$$8$$ + $y$$60$$);
  $styleMap$$24_x$$83$$ -= $ww$$12$$;
  $cmds$$2$$ += window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$8$$ + $styleMap$$24_x$$83$$, $r$$8$$ + $y$$60$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$8$$ + $styleMap$$24_x$$83$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$8$$ + $y$$60$$) + window.DvtPathUtils.$quadTo$(-$r$$8$$ + $styleMap$$24_x$$83$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$8$$ + $y$$60$$, -$r$$8$$ + $styleMap$$24_x$$83$$, $y$$60$$) + window.DvtPathUtils.lineTo($styleMap$$24_x$$83$$ - $r$$8$$, $y$$60$$) + window.DvtPathUtils.lineTo($styleMap$$24_x$$83$$ - 
  $r$$8$$, $y$$60$$ - $hh$$11$$);
  $y$$60$$ -= $hh$$11$$;
  $cmds$$2$$ += window.DvtPathUtils.$quadTo$(-$r$$8$$ + $styleMap$$24_x$$83$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$8$$ + $y$$60$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$8$$ + $styleMap$$24_x$$83$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$8$$ + $y$$60$$) + window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$8$$ + $styleMap$$24_x$$83$$, -$r$$8$$ + $y$$60$$, $styleMap$$24_x$$83$$, -$r$$8$$ + $y$$60$$) + window.DvtPathUtils.lineTo($styleMap$$24_x$$83$$, -$r$$8$$ + $y$$60$$) + 
  window.DvtPathUtils.lineTo($styleMap$$24_x$$83$$ + $ww$$12$$, -$r$$8$$ + $y$$60$$);
  $styleMap$$24_x$$83$$ += $ww$$12$$;
  $cmds$$2$$ += window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$8$$ + $styleMap$$24_x$$83$$, -$r$$8$$ + $y$$60$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$8$$ + $styleMap$$24_x$$83$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$8$$ + $y$$60$$) + window.DvtPathUtils.$quadTo$($r$$8$$ + $styleMap$$24_x$$83$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$8$$ + $y$$60$$, $r$$8$$ + $styleMap$$24_x$$83$$, $y$$60$$) + window.DvtPathUtils.lineTo($styleMap$$24_x$$83$$ + $r$$8$$, $y$$60$$ + $hh$$11$$) + 
  window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$64$$, $cmds$$2$$)
};
D.$DvtButtonLAFUtils$$.$drawZoomSliderCrossLine$ = function $$DvtButtonLAFUtils$$$$drawZoomSliderCrossLine$$($yy$$8$$) {
  (0,window.lineStyle)(1, "#656D81", 1, D.$JSCompiler_alias_TRUE$$);
  window.DvtPathUtils.moveTo(0, $yy$$8$$);
  window.DvtPathUtils.lineTo(window.NaN, $yy$$8$$);
  (0,window.lineStyle)(1, "#FFFFFF", 1, D.$JSCompiler_alias_TRUE$$);
  window.DvtPathUtils.moveTo(0, $yy$$8$$ + 1);
  window.DvtPathUtils.lineTo(window.NaN, $yy$$8$$ + 1)
};
D.$DvtButtonLAFUtils$$.$drawDropdownShape$ = function $$DvtButtonLAFUtils$$$$drawDropdownShape$$($context$$66$$, $ww$$14$$, $hh$$12$$, $r$$9_styleMap$$25$$) {
  $r$$9_styleMap$$25$$ = (0,D.$DvtStyleUtils$getStyle$$)($r$$9_styleMap$$25$$, "radius", 0);
  $ww$$14$$ -= 2 * $r$$9_styleMap$$25$$;
  $hh$$12$$ -= $r$$9_styleMap$$25$$;
  var $x$$84$$ = $ww$$14$$ + $r$$9_styleMap$$25$$, $y$$61$$ = $hh$$12$$, $cmds$$4$$ = window.DvtPathUtils.moveTo($x$$84$$ + $r$$9_styleMap$$25$$, $y$$61$$) + window.DvtPathUtils.$quadTo$($r$$9_styleMap$$25$$ + $x$$84$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$9_styleMap$$25$$ + $y$$61$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$9_styleMap$$25$$ + $x$$84$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$9_styleMap$$25$$ + $y$$61$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$9_styleMap$$25$$ + 
  $x$$84$$, $r$$9_styleMap$$25$$ + $y$$61$$, $x$$84$$, $r$$9_styleMap$$25$$ + $y$$61$$) + window.DvtPathUtils.lineTo($x$$84$$, $r$$9_styleMap$$25$$ + $y$$61$$) + window.DvtPathUtils.lineTo($x$$84$$ - $ww$$14$$, $r$$9_styleMap$$25$$ + $y$$61$$), $x$$84$$ = $x$$84$$ - $ww$$14$$, $cmds$$4$$ = $cmds$$4$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$9_styleMap$$25$$ + $x$$84$$, $r$$9_styleMap$$25$$ + $y$$61$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$9_styleMap$$25$$ + $x$$84$$, 
  D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$9_styleMap$$25$$ + $y$$61$$) + window.DvtPathUtils.$quadTo$(-$r$$9_styleMap$$25$$ + $x$$84$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$9_styleMap$$25$$ + $y$$61$$, -$r$$9_styleMap$$25$$ + $x$$84$$, $y$$61$$) + window.DvtPathUtils.lineTo(-$r$$9_styleMap$$25$$ + $x$$84$$, $y$$61$$) + window.DvtPathUtils.lineTo(-$r$$9_styleMap$$25$$ + $x$$84$$, $y$$61$$ - $hh$$12$$)), $y$$61$$ = $y$$61$$ - $hh$$12$$, $cmds$$4$$ = $cmds$$4$$ + (window.DvtPathUtils.lineTo($x$$84$$ + 
  $ww$$14$$ + $r$$9_styleMap$$25$$, $y$$61$$) + window.DvtPathUtils.lineTo($x$$84$$ + $ww$$14$$ + $r$$9_styleMap$$25$$, $y$$61$$ + $hh$$12$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$66$$, $cmds$$4$$)
};
D.$DvtButtonLAFUtils$$.$dropShadowFilter$ = function $$DvtButtonLAFUtils$$$$dropShadowFilter$$($context$$67$$, $t$$) {
  var $filter$$ = new window.DvtDropShadowFilter(7, 45, "#5A83BE", 0.9, 14, 14, 1, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), $filterArray$$ = [];
  $filterArray$$.push($filter$$);
  $t$$.filters = $filterArray$$
};
D.$DvtButtonLAFUtils$$.$_getDimForced$ = function $$DvtButtonLAFUtils$$$$_getDimForced$$($context$$68$$, $obj$$35$$) {
  $obj$$35$$ instanceof D.$DvtButton$$ && ($obj$$35$$ = $obj$$35$$.$getChildAt$(0));
  return(0,D.$DvtDisplayableUtils$_getDimForced$$)($context$$68$$, $obj$$35$$)
};
D.$DvtCommonLegendDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendDefaults$$, D.$DvtObj$$, "DvtCommonLegendDefaults");
D.$DvtCommonLegendDefaults$$.$SKIN_ALTA$ = {rowColGap:6, separatorGap:7, indicatorSize:16, buttonSize:12, dwn:"#0572CE", ovr:"#5D5D5D", ena:"#7E7F80", separatorColor:"#D9DFE3"};
D.$DvtCommonLegendDefaults$$.$SKIN_SKYROS$ = {dwn:"#202F48", ovr:"#184DD8", ena:"#003D5B"};
D.$DvtCommonLegendDefaults$$.$DEFAULT$ = {rowColGap:4, separatorGap:4, indicatorSize:11, buttonSize:11, dwn:"#000000", ovr:"#245EDD", ena:"#495D7C", separatorColor:"#ADB6C7"};
D.$DvtCommonLegendDefaults$$.$calcOptions$ = function $$DvtCommonLegendDefaults$$$$calcOptions$$($userOptions$$) {
  var $defaults$$1$$ = D.$DvtCommonLegendDefaults$$.$_getDefaults$($userOptions$$);
  return $userOptions$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$, $defaults$$1$$) : $defaults$$1$$
};
D.$DvtCommonLegendDefaults$$.$_getDefaults$ = function $$DvtCommonLegendDefaults$$$$_getDefaults$$($userOptions$$1$$) {
  var $defaults$$2$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$2$$ = $userOptions$$1$$ && "skyros" === $userOptions$$1$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtCommonLegendDefaults$$.$SKIN_SKYROS$, D.$DvtCommonLegendDefaults$$.$DEFAULT$) : $userOptions$$1$$ && "alta" === $userOptions$$1$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtCommonLegendDefaults$$.$SKIN_ALTA$, D.$DvtCommonLegendDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.clone(D.$DvtCommonLegendDefaults$$.$DEFAULT$)
};
D.DvtCommonLegend = function $DvtCommonLegend$($context$$70$$, $w$$10$$, $h$$11$$, $images$$4$$, $styleMap$$26$$) {
  this.Init($context$$70$$, $w$$10$$, $h$$11$$, $images$$4$$, $styleMap$$26$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtCommonLegend, D.$DvtContainer$$, "DvtCommonLegend");
D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$ = "isLegendDisclosed";
D.DvtCommonLegend.$SKIN_NAME$ = "skin";
D.$JSCompiler_prototypeAlias$$ = D.DvtCommonLegend.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$71$$, $w$$11$$, $h$$12$$, $images$$5$$, $styleMap$$27$$) {
  D.DvtCommonLegend.$superclass$.Init.call(this, $context$$71$$, D.$JSCompiler_alias_NULL$$, $w$$11$$, $h$$12$$);
  this.$_isBiDi$ = D.$DvtAgent$$.$isRightToLeft$();
  this.$_width$ = this.$_viewportWidth$ = $w$$11$$;
  this.$_height$ = $h$$12$$;
  this.$_attrLookUp$ = {};
  this.$_hideAttrsLookUp$ = {};
  this.$_associations$ = [];
  this.$_addSeparators$ = D.$JSCompiler_alias_FALSE$$;
  this.$_separators$ = [];
  this.$_rollOverEnabled$ = this.$_showHideEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_hidden$ = [];
  this.$_images$ = $images$$5$$;
  this.$_styleMap$ = $styleMap$$27$$;
  this.$_isWordWrap$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isWordWrap$ = (0,D.$JSCompiler_get$$)("$_isWordWrap$");
D.$JSCompiler_prototypeAlias$$.$setXML$ = (0,D.$JSCompiler_set$$)("$_legendNode$");
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_StaticMethods__renderLegendSection$$ = function $$JSCompiler_StaticMethods__renderLegendSection$$$($JSCompiler_StaticMethods__renderLegendSection$self$$, $childNodes$$1_legendSectionNode$$, $parent$$6$$, $availSpace$$10$$, $isBiDi$$) {
  var $section_sectionTitle$$ = $childNodes$$1_legendSectionNode$$.$getAttr$("label"), $section_sectionTitle$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, $section_sectionTitle$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$);
  $section_sectionTitle$$.$render$($parent$$6$$, $availSpace$$10$$, $isBiDi$$);
  if($childNodes$$1_legendSectionNode$$ = $childNodes$$1_legendSectionNode$$.$getChildNodes$()) {
    for(var $i$$46$$ = 0;$i$$46$$ < $childNodes$$1_legendSectionNode$$.length;$i$$46$$++) {
      var $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$ = $childNodes$$1_legendSectionNode$$[$i$$46$$], $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$;
      if("item" == $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$.getName()) {
        $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$ = $JSCompiler_StaticMethods__renderLegendSection$self$$;
        var $i$$inline_1206_prop$$inline_1203$$ = {};
        $i$$inline_1206_prop$$inline_1203$$.itemId = $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$.$getAttr$("itemId");
        $i$$inline_1206_prop$$inline_1203$$.attributeGroupId = $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$.$getAttr$("attributeGroupId");
        $i$$inline_1206_prop$$inline_1203$$.hideAttrs = $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$.$getAttr$("hideAttrs");
        $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$.$_context$, $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$, $i$$inline_1206_prop$$inline_1203$$, $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$.$_legendItemStyle$, 
        $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$.$_styleMap$);
        $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$ = $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$.$getChildNodes$();
        for($i$$inline_1206_prop$$inline_1203$$ = 0;$i$$inline_1206_prop$$inline_1203$$ < $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$.length;$i$$inline_1206_prop$$inline_1203$$++) {
          if("marker" == $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$[$i$$inline_1206_prop$$inline_1203$$].getName()) {
            var $legendRow$$inline_8217$$ = $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$, $markerNode$$inline_8218_opacity$$inline_8223$$ = $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$[$i$$inline_1206_prop$$inline_1203$$], $url$$inline_8219$$ = $markerNode$$inline_8218_opacity$$inline_8223$$.$getAttr$("url"), $shape$$inline_8220$$ = $markerNode$$inline_8218_opacity$$inline_8223$$.$getAttr$("shapeType"), $color$$inline_8221$$ = 
            $markerNode$$inline_8218_opacity$$inline_8223$$.$getAttr$("color"), $pattern$$inline_8222$$ = $markerNode$$inline_8218_opacity$$inline_8223$$.$getAttr$("pattern");
            ($markerNode$$inline_8218_opacity$$inline_8223$$ = $markerNode$$inline_8218_opacity$$inline_8223$$.$getAttr$("opacity")) && ($markerNode$$inline_8218_opacity$$inline_8223$$ = (0,window.parseFloat)($markerNode$$inline_8218_opacity$$inline_8223$$));
            $legendRow$$inline_8217$$.setMarker($url$$inline_8219$$, $shape$$inline_8220$$, $color$$inline_8221$$, $pattern$$inline_8222$$, $markerNode$$inline_8218_opacity$$inline_8223$$)
          }else {
            "text" == $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$[$i$$inline_1206_prop$$inline_1203$$].getName() && $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$.$setText$($childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$[$i$$inline_1206_prop$$inline_1203$$].$getAttr$("value"))
          }
        }
      }else {
        "text" == $childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$.getName() && ($JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$), 
        $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$.$setText$($childNode_itemChildren$$inline_1205_itemNode$$inline_1202$$.$getAttr$("value")))
      }
      $JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$ && ($JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$.$render$($section_sectionTitle$$, $availSpace$$10$$, $isBiDi$$), $section_sectionTitle$$.$addItem$($JSCompiler_StaticMethods__parseItem$self$$inline_1201_legendListItem$$1_legendListItem$$inline_1204$$))
    }
  }
  $parent$$6$$.$addChild$($section_sectionTitle$$);
  $availSpace$$10$$.y = $availSpace$$10$$.y - $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap;
  return $section_sectionTitle$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$ = function $$JSCompiler_StaticMethods__renderLegendSectionGroup$$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $childNodes$$2_legendSectionNode$$1$$, $bidiMultiplier_parent$$7$$, $availSpace$$11$$, $isBiDi$$1$$) {
  var $sectionGroup_sectionTitle$$1$$ = $childNodes$$2_legendSectionNode$$1$$.$getAttr$("label"), $disclosed$$2_i$$47$$ = "true" == $childNodes$$2_legendSectionNode$$1$$.$getAttr$("disclosed"), $childNode$$1_expandTooltip$$1_section$$1$$ = $childNodes$$2_legendSectionNode$$1$$.$getAttr$("expandTooltip"), $collapseTooltip$$1$$ = $childNodes$$2_legendSectionNode$$1$$.$getAttr$("collapseTooltip"), $sectionGroup_sectionTitle$$1$$ = new D.$DvtCommonLegendSectionGroup$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_context$, 
  $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $sectionGroup_sectionTitle$$1$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_sectionGroupTitleStyle$, $collapseTooltip$$1$$, $childNode$$1_expandTooltip$$1_section$$1$$, $disclosed$$2_i$$47$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$);
  $sectionGroup_sectionTitle$$1$$.$render$($bidiMultiplier_parent$$7$$, $availSpace$$11$$, $isBiDi$$1$$);
  $bidiMultiplier_parent$$7$$ = $isBiDi$$1$$ ? -1 : 1;
  if($childNodes$$2_legendSectionNode$$1$$ = $childNodes$$2_legendSectionNode$$1$$.$getChildNodes$()) {
    for($disclosed$$2_i$$47$$ = 0;$disclosed$$2_i$$47$$ < $childNodes$$2_legendSectionNode$$1$$.length;$disclosed$$2_i$$47$$++) {
      $childNode$$1_expandTooltip$$1_section$$1$$ = $childNodes$$2_legendSectionNode$$1$$[$disclosed$$2_i$$47$$], "section" == $childNode$$1_expandTooltip$$1_section$$1$$.getName() && ($availSpace$$11$$.x += ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$7$$, $childNode$$1_expandTooltip$$1_section$$1$$ = (0,D.$JSCompiler_StaticMethods__renderLegendSection$$)($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, 
      $childNode$$1_expandTooltip$$1_section$$1$$, $sectionGroup_sectionTitle$$1$$, $availSpace$$11$$, $isBiDi$$1$$), $availSpace$$11$$.x -= ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$7$$, $sectionGroup_sectionTitle$$1$$.$addItem$($childNode$$1_expandTooltip$$1_section$$1$$))
    }
  }
  $availSpace$$11$$.y = $availSpace$$11$$.y - $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap;
  return $sectionGroup_sectionTitle$$1$$
};
D.$JSCompiler_StaticMethods__renderSeparator$$ = function $$JSCompiler_StaticMethods__renderSeparator$$$($JSCompiler_StaticMethods__renderSeparator$self$$, $container$$19$$, $availSpace$$12$$) {
  $availSpace$$12$$.y = $availSpace$$12$$.y - $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
  var $line1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$12$$.x, $availSpace$$12$$.y, $availSpace$$12$$.x, $availSpace$$12$$.y);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line1$$);
  $line1$$.$setSolidStroke$($JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorColor);
  $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line1$$);
  var $separator$$;
  if("alta" == $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.skin) {
    $separator$$ = $line1$$
  }else {
    $availSpace$$12$$.y++;
    var $line2$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$12$$.x, $availSpace$$12$$.y, $availSpace$$12$$.x, $availSpace$$12$$.y);
    $line2$$.$setSolidStroke$("#FFFFFF");
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line2$$);
    $separator$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$);
    $separator$$.$addChild$($line1$$);
    $separator$$.$addChild$($line2$$);
    $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line2$$)
  }
  $container$$19$$.$addChild$($separator$$);
  $availSpace$$12$$.y += $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
  return $separator$$
};
D.DvtCommonLegend.prototype.update = function $DvtCommonLegend$$update$($updatedSection$$, $diff$$) {
  for(var $idx$$ = this.$_children$.indexOf($updatedSection$$), $idx$$ = $idx$$ + 1;$idx$$ < this.$_children$.length;) {
    this.$_children$[$idx$$].$setTranslateY$(this.$_children$[$idx$$].$getTranslateY$() + $diff$$), $idx$$++
  }
  this.$_dim$.$h$ += $diff$$;
  this.$FireListener$(new D.$DvtResizeEvent$$(this.$_dim$.$w$, this.$_dim$.$h$, 0, 0))
};
D.DvtCommonLegend.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.DvtCommonLegend.prototype.$render$ = function $DvtCommonLegend$$$render$$() {
  this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
  this.$_title$ = this.$_legendNode$.$getAttr$("label");
  this.$_isDisclosed$ = "true" == this.$_legendNode$.$getAttr$("disclosed");
  var $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$ = this.$_legendNode$.getElementsByTagName("style");
  if($JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$ && ($JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$ = $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$[0].$getChildNodes$())) {
    for(var $i$$49_i$$inline_1211_legendTitle_titleDim$$ = 0;$i$$49_i$$inline_1211_legendTitle_titleDim$$ < $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.length;$i$$49_i$$inline_1211_legendTitle_titleDim$$++) {
      var $childNode$$inline_1212_childNodes$$4_fitWidth$$ = $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$[$i$$49_i$$inline_1211_legendTitle_titleDim$$];
      "legend-title" == $childNode$$inline_1212_childNodes$$4_fitWidth$$.getName() ? this.$_legendTitleStyle$ = $childNode$$inline_1212_childNodes$$4_fitWidth$$.getTextContent() : "sectionGroup-title" == $childNode$$inline_1212_childNodes$$4_fitWidth$$.getName() ? this.$_sectionGroupTitleStyle$ = $childNode$$inline_1212_childNodes$$4_fitWidth$$.getTextContent() : "section-title" == $childNode$$inline_1212_childNodes$$4_fitWidth$$.getName() ? this.$_sectionTitleStyle$ = $childNode$$inline_1212_childNodes$$4_fitWidth$$.getTextContent() : 
      "legend-item" == $childNode$$inline_1212_childNodes$$4_fitWidth$$.getName() && (this.$_legendItemStyle$ = $childNode$$inline_1212_childNodes$$4_fitWidth$$.getTextContent())
    }
  }
  if($JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$ = this.$_legendNode$.$getAttr$("noWrap")) {
    this.$_isWordWrap$ = "false" == $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$
  }
  $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
  this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_legendContent$);
  if(this.$_title$ && ($i$$49_i$$inline_1211_legendTitle_titleDim$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_1212_childNodes$$4_fitWidth$$ = $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.$w$ - $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.x, 
  this.$_isBiDi$ && ($childNode$$inline_1212_childNodes$$4_fitWidth$$ = $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.$w$ - $childNode$$inline_1212_childNodes$$4_fitWidth$$), 0 < $childNode$$inline_1212_childNodes$$4_fitWidth$$ && (this.$_isBiDi$ && $i$$49_i$$inline_1211_legendTitle_titleDim$$.$alignRight$(), this.$_legendTitleStyle$ && $i$$49_i$$inline_1211_legendTitle_titleDim$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), 
  $i$$49_i$$inline_1211_legendTitle_titleDim$$.$setTextString$(this.$_title$), $i$$49_i$$inline_1211_legendTitle_titleDim$$.$setX$($JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.x), $i$$49_i$$inline_1211_legendTitle_titleDim$$.$setY$($JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.y), D.$DvtTextUtils$$.$fitText$($i$$49_i$$inline_1211_legendTitle_titleDim$$, 
  $childNode$$inline_1212_childNodes$$4_fitWidth$$, $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.$h$, this.$_legendContent$), $i$$49_i$$inline_1211_legendTitle_titleDim$$.$isTruncated$() && this.$_eventHandler$.$associate$($i$$49_i$$inline_1211_legendTitle_titleDim$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$49_i$$inline_1211_legendTitle_titleDim$$ = $i$$49_i$$inline_1211_legendTitle_titleDim$$.$getDimensions$()) && 
  0 < $i$$49_i$$inline_1211_legendTitle_titleDim$$.$h$))) {
    $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.y = $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.y + $i$$49_i$$inline_1211_legendTitle_titleDim$$.$h$ + this.$_styleMap$.rowColGap
  }
  this.$_children$ = [];
  if($childNode$$inline_1212_childNodes$$4_fitWidth$$ = this.$_legendNode$.$getChildNodes$()) {
    for($i$$49_i$$inline_1211_legendTitle_titleDim$$ = 0;$i$$49_i$$inline_1211_legendTitle_titleDim$$ < $childNode$$inline_1212_childNodes$$4_fitWidth$$.length;$i$$49_i$$inline_1211_legendTitle_titleDim$$++) {
      var $childNode$$3_separators$$ = $childNode$$inline_1212_childNodes$$4_fitWidth$$[$i$$49_i$$inline_1211_legendTitle_titleDim$$];
      if("separatorDef" == $childNode$$3_separators$$.getName() && ($childNode$$3_separators$$ = $childNode$$3_separators$$.$getChildNodes$(), 0 < $childNode$$3_separators$$.length && "separator" == $childNode$$3_separators$$[0].getName())) {
        this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
        break
      }
    }
    for($i$$49_i$$inline_1211_legendTitle_titleDim$$ = 0;$i$$49_i$$inline_1211_legendTitle_titleDim$$ < $childNode$$inline_1212_childNodes$$4_fitWidth$$.length;$i$$49_i$$inline_1211_legendTitle_titleDim$$++) {
      $childNode$$3_separators$$ = $childNode$$inline_1212_childNodes$$4_fitWidth$$[$i$$49_i$$inline_1211_legendTitle_titleDim$$], $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.x = this.$_isBiDi$ ? this.$_width$ : 0, "sectionGroup" == $childNode$$3_separators$$.getName() ? (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$49_i$$inline_1211_legendTitle_titleDim$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, 
      this.$_legendContent$, $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$)), this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$)(this, $childNode$$3_separators$$, this.$_legendContent$, $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$, this.$_isBiDi$))) : "section" == 
      $childNode$$3_separators$$.getName() && (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$49_i$$inline_1211_legendTitle_titleDim$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$)), this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSection$$)(this, $childNode$$3_separators$$, 
      this.$_legendContent$, $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$, this.$_isBiDi$)))
    }
  }
  this.$_dim$ = this.$getDimensions$();
  for($JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$ = 0;$JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$ < this.$_separators$.length;$JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$++) {
    this.$_isBiDi$ ? (this.$_dim$.x = this.$_separators$[$JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$].$getX1$() - this.$_dim$.$w$, this.$_separators$[$JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$].$setX2$(this.$_dim$.x)) : this.$_separators$[$JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$].$setX2$(this.$_dim$.$w$ + 
    this.$_separators$[$JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$].$getX1$())
  }
  this.$_eventHandler$.$addListeners$(this);
  for($i$$49_i$$inline_1211_legendTitle_titleDim$$ = 0;$i$$49_i$$inline_1211_legendTitle_titleDim$$ < this.$_associations$.length;$i$$49_i$$inline_1211_legendTitle_titleDim$$++) {
    $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$ = this.$_associations$[$i$$49_i$$inline_1211_legendTitle_titleDim$$], this.$_eventHandler$.$associate$($JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$, $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$), 
    this.$_hidden$ && -1 < D.$DvtArrayUtils$$.$getIndex$(this.$_hidden$, $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.$getAttributeGroup$() + ":" + $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.$getItemId$()) && ($JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.$_bHidden$ = 
    !$JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.$_bHidden$, $JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.$_marker$.$setHollow$($JSCompiler_StaticMethods_filterRow$self$$inline_8225_availSpace$$13_childNodes$$inline_1210_j$$7_legendRow$$2_legendStyleNode$$inline_1209_noWrap$$.$_color$))
  }
  this.$_isBiDi$ && this.$_legendContent$.$setTranslateX$(-this.$_dim$.x)
};
D.$DvtCommonLegendSectionGroup$$ = function $$DvtCommonLegendSectionGroup$$$($context$$72$$, $legend$$1$$, $sectionTitle$$2$$, $sectionTitleStyle$$, $collapseTooltip$$2$$, $expandTooltip$$2$$, $disclosed$$3$$, $styleMap$$28$$) {
  this.Init($context$$72$$, $legend$$1$$, $sectionTitle$$2$$, $sectionTitleStyle$$, $collapseTooltip$$2$$, $expandTooltip$$2$$, $disclosed$$3$$, $styleMap$$28$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSectionGroup$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSectionGroup$$.prototype.Init = function $$DvtCommonLegendSectionGroup$$$$Init$($context$$73$$, $legend$$2$$, $sectionTitle$$3$$, $sectionTitleStyle$$1$$, $collapseTooltip$$3$$, $expandTooltip$$3$$, $disclosed$$4$$, $styleMap$$29$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$73$$);
  this.$_title$ = $sectionTitle$$3$$;
  this.$_titleStyle$ = $sectionTitleStyle$$1$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$2$$;
  this.$_collapseTooltip$ = $collapseTooltip$$3$$;
  this.$_expandTooltip$ = $expandTooltip$$3$$;
  this.$_buttonState$ = $disclosed$$4$$ ? 0 : 1;
  this.$_styleMap$ = $styleMap$$29$$
};
D.$JSCompiler_StaticMethods__createButton$$ = function $$JSCompiler_StaticMethods__createButton$$$($JSCompiler_StaticMethods__createButton$self$$, $dwn$$11_images$$7$$, $x$$85$$, $y$$62$$, $width$$25$$, $height$$25$$, $buttonState_ena$$11$$) {
  switch($buttonState_ena$$11$$) {
    case 1:
      $buttonState_ena$$11$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$11_images$$7$$.$getAttr$("sectionColEna"), $x$$85$$, $y$$62$$, $width$$25$$, $height$$25$$);
      var $ovr$$11$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$11_images$$7$$.$getAttr$("sectionColOvr"), $x$$85$$, $y$$62$$, $width$$25$$, $height$$25$$);
      $dwn$$11_images$$7$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$11_images$$7$$.$getAttr$("sectionColDwn"), $x$$85$$, $y$$62$$, $width$$25$$, $height$$25$$);
      return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState_ena$$11$$, $ovr$$11$$, $dwn$$11_images$$7$$);
    default:
      return $buttonState_ena$$11$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$11_images$$7$$.$getAttr$("sectionExpEna"), $x$$85$$, $y$$62$$, $width$$25$$, $height$$25$$), $ovr$$11$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$11_images$$7$$.$getAttr$("sectionExpOvr"), $x$$85$$, $y$$62$$, $width$$25$$, $height$$25$$), $dwn$$11_images$$7$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, 
      $dwn$$11_images$$7$$.$getAttr$("sectionExpDwn"), $x$$85$$, $y$$62$$, $width$$25$$, $height$$25$$), new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState_ena$$11$$, $ovr$$11$$, $dwn$$11_images$$7$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendSectionGroup$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_handleMouseClick$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseClick$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$();
  var $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$ = D.$DvtAgent$$.$isRightToLeft$() ? -1 : 1;
  this.$_sectionHeight$ || (this.$_sectionHeight$ = this.$getDimensions$().$h$ - this.$_headerHeight$);
  0 == this.$_buttonState$ ? ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$ = this.$_button$.getParent(), $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$.removeChild(this.$_button$), this.$_button$ = this.$_collapsedBtn$, $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$, this.$_buttonY$ + 5.5, this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_FALSE$$, this.$_buttonState$ = 1, $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$ = -this.$_sectionHeight$) : ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$ = 
  this.$_button$.getParent(), $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$.removeChild(this.$_button$), this.$_button$ = this.$_expandedBtn$, $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_TRUE$$, this.$_buttonState$ = 0, $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$ = this.$_sectionHeight$);
  if(this.$_itemsVisible$) {
    for(var $i$$inline_1221$$ = 0;$i$$inline_1221$$ < this.$_items$.length;$i$$inline_1221$$++) {
      this.$addChild$(this.$_items$[$i$$inline_1221$$])
    }
  }else {
    for($i$$inline_1221$$ = 0;$i$$inline_1221$$ < this.$_items$.length;$i$$inline_1221$$++) {
      this.removeChild(this.$_items$[$i$$inline_1221$$])
    }
  }
  this.$_legend$.update(this, $bidiMultiplier$$inline_1218_diff$$inline_1219_parent$$inline_1220$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseOver$$($event$$17$$) {
  var $tooltip$$2$$;
  $tooltip$$2$$ = 0 == this.$_buttonState$ ? this.$_collapseTooltip$ : this.$_expandTooltip$;
  $tooltip$$2$$ != D.$JSCompiler_alias_NULL$$ && this.$_context$.$getTooltipManager$().$showTooltip$($event$$17$$.pageX, $event$$17$$.pageY, $tooltip$$2$$, this.$_button$, D.$JSCompiler_alias_TRUE$$);
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.ovr)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseOut$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$();
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseDown$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.dwn)
};
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$) {
  return this.$_items$.push($item$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($collapsibleHitArea_dim$$1_parent$$10$$, $availSpace$$15$$, $isBiDi$$3$$) {
  $collapsibleHitArea_dim$$1_parent$$10$$.$addChild$(this);
  $collapsibleHitArea_dim$$1_parent$$10$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($collapsibleHitArea_dim$$1_parent$$10$$);
  this.$_buttonX$ = $availSpace$$15$$.x;
  this.$_buttonY$ = $availSpace$$15$$.y;
  var $bidiMultiplier$$inline_1227_sectionTitle$$4$$ = $isBiDi$$3$$ ? -1 : 1;
  if("alta" == this.$_styleMap$.skin) {
    var $fitWidth$$1_images$$inline_1228$$ = this.$_legend$.$_images$;
    this.$_expandedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$1_images$$inline_1228$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 0);
    this.$_collapsedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$1_images$$inline_1228$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 1);
    this.$_button$ = this.$_expandedBtn$
  }else {
    this.$_button$ = new D.$DvtPolygon$$(this.$_context$, [this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_1227_sectionTitle$$4$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_1227_sectionTitle$$4$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_1227_sectionTitle$$4$$, this.$_buttonY$ + 9.5]), this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
  }
  $collapsibleHitArea_dim$$1_parent$$10$$.$addChild$(this.$_button$);
  D.$DvtAgent$$.$isTouchDevice$() ? $collapsibleHitArea_dim$$1_parent$$10$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this) : ($collapsibleHitArea_dim$$1_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this), $collapsibleHitArea_dim$$1_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$_handleMouseOver$, D.$JSCompiler_alias_FALSE$$, this), $collapsibleHitArea_dim$$1_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  this.$_handleMouseOut$, D.$JSCompiler_alias_FALSE$$, this), $collapsibleHitArea_dim$$1_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_handleMouseDown$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_buttonState$ = 0;
  $availSpace$$15$$.x += (("alta" == this.$_styleMap$.skin && $isBiDi$$3$$ ? 0 : this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap) * $bidiMultiplier$$inline_1227_sectionTitle$$4$$;
  this.$_title$ && ($bidiMultiplier$$inline_1227_sectionTitle$$4$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $fitWidth$$1_images$$inline_1228$$ = $availSpace$$15$$.$w$ - $availSpace$$15$$.x, $isBiDi$$3$$ && ($fitWidth$$1_images$$inline_1228$$ = $availSpace$$15$$.$w$ - $fitWidth$$1_images$$inline_1228$$), 0 < $fitWidth$$1_images$$inline_1228$$ && ($isBiDi$$3$$ && $bidiMultiplier$$inline_1227_sectionTitle$$4$$.$alignRight$(), 
  this.$_titleStyle$ && $bidiMultiplier$$inline_1227_sectionTitle$$4$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $bidiMultiplier$$inline_1227_sectionTitle$$4$$.$setTextString$(this.$_title$), $bidiMultiplier$$inline_1227_sectionTitle$$4$$.$setX$($availSpace$$15$$.x), $bidiMultiplier$$inline_1227_sectionTitle$$4$$.$setY$($availSpace$$15$$.y), D.$DvtTextUtils$$.$fitText$($bidiMultiplier$$inline_1227_sectionTitle$$4$$, $fitWidth$$1_images$$inline_1228$$, $availSpace$$15$$.$h$, $collapsibleHitArea_dim$$1_parent$$10$$), 
  $bidiMultiplier$$inline_1227_sectionTitle$$4$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($bidiMultiplier$$inline_1227_sectionTitle$$4$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $collapsibleHitArea_dim$$1_parent$$10$$ = $bidiMultiplier$$inline_1227_sectionTitle$$4$$.$getDimensions$(), $availSpace$$15$$.y = $availSpace$$15$$.y + window.Math.max($collapsibleHitArea_dim$$1_parent$$10$$ ? $collapsibleHitArea_dim$$1_parent$$10$$.$h$ : 0, this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap));
  $availSpace$$15$$.x += (this.$_styleMap$.buttonSize + this.$_styleMap$.rowColGap) * ($isBiDi$$3$$ ? 1 : -1);
  this.$_headerHeight$ = this.$getDimensions$().$h$
};
D.$DvtCommonLegendSection$$ = function $$DvtCommonLegendSection$$$($context$$74$$, $legend$$3$$, $sectionTitle$$5$$, $sectionTitleStyle$$2$$, $styleMap$$30$$) {
  this.Init($context$$74$$, $legend$$3$$, $sectionTitle$$5$$, $sectionTitleStyle$$2$$, $styleMap$$30$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSection$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSection$$.prototype.Init = function $$DvtCommonLegendSection$$$$Init$($context$$75$$, $legend$$4$$, $sectionTitle$$6$$, $sectionTitleStyle$$3$$, $styleMap$$31$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$75$$);
  this.$_title$ = $sectionTitle$$6$$;
  this.$_titleStyle$ = $sectionTitleStyle$$3$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$4$$;
  this.$_styleMap$ = $styleMap$$31$$
};
D.$DvtCommonLegendSection$$.prototype.$addItem$ = function $$DvtCommonLegendSection$$$$$addItem$$($item$$1$$) {
  return this.$_items$.push($item$$1$$)
};
D.$DvtCommonLegendSection$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$DvtCommonLegendSection$$.prototype.$render$ = function $$DvtCommonLegendSection$$$$$render$$($parent$$11_sectionTitle$$7$$, $availSpace$$16$$, $dim$$2_isBiDi$$4$$) {
  $parent$$11_sectionTitle$$7$$.$addChild$(this);
  if(this.$_title$) {
    $parent$$11_sectionTitle$$7$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$);
    var $fitWidth$$2$$ = $availSpace$$16$$.$w$ - $availSpace$$16$$.x;
    $dim$$2_isBiDi$$4$$ && ($fitWidth$$2$$ = $availSpace$$16$$.$w$ - $fitWidth$$2$$);
    0 < $fitWidth$$2$$ && ($dim$$2_isBiDi$$4$$ && $parent$$11_sectionTitle$$7$$.$alignRight$(), this.$_titleStyle$ && $parent$$11_sectionTitle$$7$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $parent$$11_sectionTitle$$7$$.$setTextString$(this.$_title$), $parent$$11_sectionTitle$$7$$.$setX$($availSpace$$16$$.x), $parent$$11_sectionTitle$$7$$.$setY$($availSpace$$16$$.y), D.$DvtTextUtils$$.$fitText$($parent$$11_sectionTitle$$7$$, $fitWidth$$2$$, $availSpace$$16$$.$h$, this), $parent$$11_sectionTitle$$7$$.$isTruncated$() && 
    this.$_legend$.$getEventManager$().$associate$($parent$$11_sectionTitle$$7$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $dim$$2_isBiDi$$4$$ = $parent$$11_sectionTitle$$7$$.$getDimensions$(), $availSpace$$16$$.y = $availSpace$$16$$.y + ($dim$$2_isBiDi$$4$$ ? $dim$$2_isBiDi$$4$$.$h$ : 0) + this.$_styleMap$.rowColGap)
  }
};
D.$DvtCommonLegendRow$$ = function $$DvtCommonLegendRow$$$($context$$76$$, $legend$$5$$, $prop$$5$$, $itemStyle$$, $styleMap$$32$$) {
  this.Init($context$$76$$, $legend$$5$$, $prop$$5$$, $itemStyle$$, $styleMap$$32$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendRow$$, D.$DvtContainer$$, "DvtCommonLegendRow");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendRow$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$77$$, $legend$$6$$, $prop$$6$$, $itemStyle$$1$$, $styleMap$$33$$) {
  D.$DvtCommonLegendRow$$.$superclass$.Init.call(this, $context$$77$$);
  this.$_legend$ = $legend$$6$$;
  this.$_prop$ = $prop$$6$$;
  this.$_itemStyle$ = $itemStyle$$1$$;
  this.$_bHidden$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $styleMap$$33$$
};
D.$JSCompiler_prototypeAlias$$.$getAttributeGroup$ = function $$JSCompiler_prototypeAlias$$$$getAttributeGroup$$() {
  return this.$_prop$.attributeGroupId
};
D.$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$() {
  return this.$_prop$.itemId
};
D.$JSCompiler_prototypeAlias$$.$getHideAttributes$ = function $$JSCompiler_prototypeAlias$$$$getHideAttributes$$() {
  return this.$_prop$.hideAttrs
};
D.$JSCompiler_prototypeAlias$$.$setText$ = (0,D.$JSCompiler_set$$)("$_text$");
D.$JSCompiler_prototypeAlias$$.setMarker = function $$JSCompiler_prototypeAlias$$$setMarker$($url$$22$$, $shape$$16$$, $color$$7$$, $pattern$$2$$, $opacity$$1$$) {
  this.$_url$ = $url$$22$$;
  this.$_shape$ = $shape$$16$$;
  this.$_color$ = $color$$7$$ ? $color$$7$$ : "#000000";
  this.$_pattern$ = $pattern$$2$$;
  this.$_opacity$ = $opacity$$1$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($parent$$12_rowX$$, $availSpace$$17$$, $isBiDi$$5$$) {
  if(this.$_prop$) {
    var $JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$ = this.$_legend$, $attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$ = this.$_prop$.attributeGroupId, $itemId$$inline_1232$$ = this.$_prop$.itemId;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$] == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$] = {});
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$][$itemId$$inline_1232$$] = this;
    this.$_legend$.$_associations$.push(this);
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$ = this.$_legend$;
    $attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$ = this.$_prop$.hideAttrs;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$] || ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$] = this)
  }
  $parent$$12_rowX$$.$addChild$(this);
  $parent$$12_rowX$$ = $availSpace$$17$$.x;
  $isBiDi$$5$$ && ($availSpace$$17$$.x -= this.$_styleMap$.indicatorSize);
  var $marker$$1_textDim$$;
  if(this.$_url$ || this.$_shape$ != D.$JSCompiler_alias_NULL$$) {
    $marker$$1_textDim$$ = new D.$DvtMarker$$(this.$_context$, this.$_url$ ? [this.$_url$] : this.$_shape$, this.$_styleMap$[D.DvtCommonLegend.$SKIN_NAME$], $availSpace$$17$$.x, $availSpace$$17$$.y, this.$_styleMap$.indicatorSize, this.$_styleMap$.indicatorSize), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$ = D.$DvtMarkerUtils$$.$getCustomMarkerInfo$(this.$_context$, this.$_shape$), !this.$_url$ && 
    !$JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$ && (this.$_pattern$ ? $marker$$1_textDim$$.$setFill$(new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$)) : $marker$$1_textDim$$.$setSolidFill$(this.$_color$, this.$_opacity$)), this.$addChild$($marker$$1_textDim$$), $availSpace$$17$$.x = $isBiDi$$5$$ ? $availSpace$$17$$.x - this.$_styleMap$.rowColGap : $availSpace$$17$$.x + this.$_styleMap$.indicatorSize + 
    this.$_styleMap$.rowColGap
  }
  this.$_marker$ = $marker$$1_textDim$$;
  $marker$$1_textDim$$ = new D.$DvtRectangle$$;
  this.$_text$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$ = $availSpace$$17$$.$w$ - $availSpace$$17$$.x, $isBiDi$$5$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$ = $availSpace$$17$$.$w$ - $JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$), 
  0 > $JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$ ? this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$)) : ($attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $isBiDi$$5$$ && $attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$.$alignRight$(), 
  this.$_itemStyle$ && $attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_itemStyle$)), $attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$.$setTextString$(this.$_text$), $attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$.$setX$($availSpace$$17$$.x), $attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$.$setY$($availSpace$$17$$.y), D.$DvtTextUtils$$.$fitText$($attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$, 
  $JSCompiler_StaticMethods_addAttrLookup$self$$inline_1230_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_1238_fitWidth$$3_isCustomShape$$, $availSpace$$17$$.$h$, this) ? ($marker$$1_textDim$$ = $attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$.$getDimensions$(), $attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($attributeGroupId$$inline_1231_hideAttrs$$inline_1239_text$$12$$, new D.$DvtSimpleObjPeer$$(this.$_text$))) : 
  this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$))));
  $availSpace$$17$$.y = $availSpace$$17$$.y + window.Math.max(this.$_styleMap$.indicatorSize, $marker$$1_textDim$$.$h$) + this.$_styleMap$.rowColGap;
  $availSpace$$17$$.x = $parent$$12_rowX$$
};
D.$DvtCommonLegendEventManager$$ = function $$DvtCommonLegendEventManager$$$($context$$78$$, $callback$$51$$, $legend$$7$$) {
  this.Init($context$$78$$, $callback$$51$$, $legend$$7$$);
  this.$_legend$ = $legend$$7$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendEventManager$$, D.$DvtEventManager$$, "DvtCommonLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$20$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$20$$);
  this.$_handleClick$($event$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$21$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$21$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$22$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$22$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$22$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$23$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$23$$);
  this.$_handleClick$($event$$23$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($event$$24_listItemEvent$$inline_1247$$) {
  if(this.$_legend$.$_showHideEnabled$) {
    var $obj$$36$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$24_listItemEvent$$inline_1247$$.target);
    if($obj$$36$$ instanceof D.$DvtCommonLegendRow$$) {
      var $listItemId$$inline_1245$$ = $obj$$36$$.$getItemId$(), $attributeGroupId$$inline_1246$$ = $obj$$36$$.$getAttributeGroup$();
      $obj$$36$$.$_bHidden$ = !$obj$$36$$.$_bHidden$;
      $obj$$36$$.$_marker$.$setHollow$($obj$$36$$.$_color$);
      $event$$24_listItemEvent$$inline_1247$$ = new D.$DvtListItemEvent$$($listItemId$$inline_1245$$, $attributeGroupId$$inline_1246$$, $obj$$36$$.$_bHidden$ ? "hide" : "show", $event$$24_listItemEvent$$inline_1247$$);
      this.$_legend$.$FireListener$($event$$24_listItemEvent$$inline_1247$$)
    }
  }
};
D.$JSCompiler_StaticMethods__handleRollOver$$ = function $$JSCompiler_StaticMethods__handleRollOver$$$($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$25$$) {
  if($JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_rollOverEnabled$) {
    var $obj$$37_rollOverEvent$$inline_1254$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$25$$.target);
    if($obj$$37_rollOverEvent$$inline_1254$$ instanceof D.$DvtCommonLegendRow$$) {
      var $listItemId$$inline_1252$$ = $obj$$37_rollOverEvent$$inline_1254$$.$getItemId$(), $attributeGroupId$$inline_1253$$ = $obj$$37_rollOverEvent$$inline_1254$$.$getAttributeGroup$(), $obj$$37_rollOverEvent$$inline_1254$$ = new D.$DvtLegendItemRollOverEvent$$($listItemId$$inline_1252$$, $attributeGroupId$$inline_1253$$, $obj$$37_rollOverEvent$$inline_1254$$.$getHideAttributes$(), $event$$25$$.type, $event$$25$$);
      $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$FireListener$($obj$$37_rollOverEvent$$inline_1254$$)
    }
  }
};
});