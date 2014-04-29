define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtComboBox$$ = function $$DvtComboBox$$$($context$$51$$, $id$$5$$, $styleMap$$16$$) {
  this.Init($context$$51$$, $id$$5$$, $styleMap$$16$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBox$$, D.$DvtContainer$$, "DvtComboBox");
D.$DvtComboBox$$.prototype.Init = function $$DvtComboBox$$$$Init$($context$$52$$, $id$$6$$, $styleMap$$17$$) {
  D.$DvtComboBox$$.$superclass$.Init.call(this, $context$$52$$, D.$JSCompiler_alias_NULL$$, $id$$6$$);
  this.$_styleMap$ = $styleMap$$17$$;
  this.$_itemButtonStates$ = [];
  this.$_items$ = [];
  this.$_tooltips$ = [];
  this.$_selectedIndex$ = 0;
  this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxItemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_dim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_tooltipManager$ = $context$$52$$.$getTooltipManager$();
  this.$_isTouchDevice$ = D.$DvtAgent$$.$isTouchDevice$();
  this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $id$$6$$ + "_cl");
  this.$addChild$(this.$_button$);
  this.$_contentArea$ = new D.$DvtContainer$$($context$$52$$);
  this.$_contentArea$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_contentArea$);
  this.$_hideDropdownTimer$ = new D.$DvtTimer$$($context$$52$$, 100, this.$HandleHideDropdownTimer$, this, 1);
  this.$_outOfFocusCheckTimer$ = new D.$DvtTimer$$($context$$52$$, 100, this.$HandleOutOfFocusCheckTimer$, this, 1);
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtComboBox$$.prototype.$setSelectedIndex$ = function $$DvtComboBox$$$$$setSelectedIndex$$($comboBoxEvent$$inline_919_selectedIndex$$) {
  this.$_selectedIndex$ = $comboBoxEvent$$inline_919_selectedIndex$$;
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this);
  $comboBoxEvent$$inline_919_selectedIndex$$ = new D.$DvtComboBoxEvent$$("cbItemChange", $comboBoxEvent$$inline_919_selectedIndex$$, this.$_event$);
  this.$_event$ = D.$JSCompiler_alias_NULL$$;
  this.$FireListener$($comboBoxEvent$$inline_919_selectedIndex$$)
};
D.$JSCompiler_StaticMethods_createButton$$ = function $$JSCompiler_StaticMethods_createButton$$$($JSCompiler_StaticMethods_createButton$self$$, $id$$7$$) {
  var $JSCompiler_temp_const$$117_button$$7$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_923_dim$$inline_930_s$$inline_931$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_924_s$$inline_925$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_924_s$$inline_925$$ = new D.$DvtRect$$($context$$inline_923_dim$$inline_930_s$$inline_931$$, 0, 0, $dim$$inline_924_s$$inline_925$$.$w$, $dim$$inline_924_s$$inline_925$$.$h$, 
  $id$$7$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_924_s$$inline_925$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dim$$inline_924_s$$inline_925$$);
  $dim$$inline_924_s$$inline_925$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_923_dim$$inline_930_s$$inline_931$$, $dim$$inline_924_s$$inline_925$$.getWidth(), $dim$$inline_924_s$$inline_925$$.getHeight()));
  var $context$$inline_929_context$$inline_935$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_923_dim$$inline_930_s$$inline_931$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $context$$inline_923_dim$$inline_930_s$$inline_931$$ = new D.$DvtRect$$($context$$inline_929_context$$inline_935$$, 0, 0, $context$$inline_923_dim$$inline_930_s$$inline_931$$.$w$, $context$$inline_923_dim$$inline_930_s$$inline_931$$.$h$, $id$$7$$ + "_up");
  $context$$inline_923_dim$$inline_930_s$$inline_931$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$inline_923_dim$$inline_930_s$$inline_931$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$, D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$]));
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($context$$inline_923_dim$$inline_930_s$$inline_931$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $context$$inline_923_dim$$inline_930_s$$inline_931$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_929_context$$inline_935$$, $context$$inline_923_dim$$inline_930_s$$inline_931$$.getWidth(), $context$$inline_923_dim$$inline_930_s$$inline_931$$.getHeight()));
  var $context$$inline_929_context$$inline_935$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_936_s$$inline_937$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_936_s$$inline_937$$ = new D.$DvtRect$$($context$$inline_929_context$$inline_935$$, 0, 0, $dim$$inline_936_s$$inline_937$$.$w$, $dim$$inline_936_s$$inline_937$$.$h$, $id$$7$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_936_s$$inline_937$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $dim$$inline_936_s$$inline_937$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $dim$$inline_936_s$$inline_937$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$, D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$]));
  $dim$$inline_936_s$$inline_937$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_929_context$$inline_935$$, $dim$$inline_936_s$$inline_937$$.getWidth(), $dim$$inline_936_s$$inline_937$$.getHeight()));
  $JSCompiler_temp_const$$117_button$$7$$ = new D.$DvtButton$$($JSCompiler_temp_const$$117_button$$7$$, $dim$$inline_924_s$$inline_925$$, $context$$inline_923_dim$$inline_930_s$$inline_931$$, $dim$$inline_936_s$$inline_937$$, D.$JSCompiler_alias_NULL$$, $id$$7$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_temp_const$$117_button$$7$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$117_button$$7$$.setCursor("pointer");
  $JSCompiler_StaticMethods_createButton$self$$.$_isTouchDevice$ || $JSCompiler_temp_const$$117_button$$7$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleButtonDown$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$117_button$$7$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  return $JSCompiler_temp_const$$117_button$$7$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtComboBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($obj$$32$$, $buttonStates_itdim_tooltip$$5$$, $enaState$$1$$, $ovrState$$1$$, $dwnState$$1$$) {
  $obj$$32$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_items$.push($obj$$32$$);
  this.$_tooltips$.push($buttonStates_itdim_tooltip$$5$$);
  $buttonStates_itdim_tooltip$$5$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, $enaState$$1$$ ? $enaState$$1$$ : $obj$$32$$);
  var $maxItemDim$$ = this.$_maxItemDim$, $dim$$13$$ = this.$getDimensions$();
  $buttonStates_itdim_tooltip$$5$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $buttonStates_itdim_tooltip$$5$$.$w$, $dim$$13$$.$w$ = $buttonStates_itdim_tooltip$$5$$.$w$ + 16);
  $buttonStates_itdim_tooltip$$5$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $buttonStates_itdim_tooltip$$5$$.$h$, $dim$$13$$.$h$ = $buttonStates_itdim_tooltip$$5$$.$h$);
  this.$_maxItemDim$ = $maxItemDim$$;
  $buttonStates_itdim_tooltip$$5$$ = D.$JSCompiler_alias_NULL$$;
  $enaState$$1$$ && ($ovrState$$1$$ && $dwnState$$1$$) && ($buttonStates_itdim_tooltip$$5$$ = [], $buttonStates_itdim_tooltip$$5$$[0] = $enaState$$1$$, $buttonStates_itdim_tooltip$$5$$[1] = $ovrState$$1$$, $buttonStates_itdim_tooltip$$5$$[2] = $dwnState$$1$$);
  this.$_itemButtonStates$.push($buttonStates_itdim_tooltip$$5$$);
  this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $obj$$32$$.getId()), this.$addChildAt$(this.$_button$, 0), (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this))
};
D.$JSCompiler_prototypeAlias$$.getItem = function $$JSCompiler_prototypeAlias$$$getItem$($i$$41$$) {
  return this.$_items$[$i$$41$$]
};
D.$JSCompiler_prototypeAlias$$.$getSelectedItem$ = function $$JSCompiler_prototypeAlias$$$$getSelectedItem$$() {
  var $selIndex$$ = this.$_selectedIndex$;
  return 0 > $selIndex$$ || $selIndex$$ > this.$_items$.length - 1 ? D.$JSCompiler_alias_NULL$$ : this.$_items$[$selIndex$$]
};
D.$JSCompiler_prototypeAlias$$.$HandleExpandClick$ = function $$JSCompiler_prototypeAlias$$$$HandleExpandClick$$($context$$57_event$$64_stage$$2$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($context$$57_event$$64_stage$$2$$);
  this.$_bRemoveDropdown$ && (this.$_bRemoveDropdown$ = D.$JSCompiler_alias_FALSE$$, this.$_dropdown$ && (this.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = D.$JSCompiler_alias_NULL$$));
  $context$$57_event$$64_stage$$2$$ = this.$_context$;
  for(var $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : D.$JSCompiler_alias_NULL$$, $bgAlpha$$inline_957_leftPadding$$inline_943$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$, "paddingLeft", 0), $bottomPadding$$inline_944$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$, "paddingBottom", 0), $rightPadding$$inline_945$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$, 
  "paddingRight", 0), $interItemPadding$$inline_946$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$, "paddingInner", 0), $currY$$inline_947$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$, "paddingTop", 0), $context$$inline_948$$ = this.$_context$, $dim$$inline_949_proxy$$inline_954$$, $itemSprite$$inline_950$$, $item$$inline_951$$, $bgColor$$inline_956_content$$inline_952_dim$$14$$ = new D.$DvtContainer$$($context$$inline_948$$, 
  "__dd"), $i$$inline_953$$ = 0;$i$$inline_953$$ < this.$_items$.length;$i$$inline_953$$++) {
    $item$$inline_951$$ = this.$_items$[$i$$inline_953$$], $dim$$inline_949_proxy$$inline_954$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_948$$, $item$$inline_951$$), $itemSprite$$inline_950$$ = new D.$DvtContainer$$($context$$inline_948$$, "__it" + $i$$inline_953$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSprite$$inline_950$$, $bgAlpha$$inline_957_leftPadding$$inline_943$$, $currY$$inline_947$$), $itemSprite$$inline_950$$.$addChild$($item$$inline_951$$), $item$$inline_951$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), 
    $item$$inline_951$$.setCursor("pointer"), $currY$$inline_947$$ += $dim$$inline_949_proxy$$inline_954$$.$h$ + $interItemPadding$$inline_946$$, this.$_eventManager$ && ($dim$$inline_949_proxy$$inline_954$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, this.$HandleDropdownItemClick$, this.$HandleButtonDown$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_tooltips$[$i$$inline_953$$]), this.$_eventManager$.$associate$($item$$inline_951$$, $dim$$inline_949_proxy$$inline_954$$)), 
    $bgColor$$inline_956_content$$inline_952_dim$$14$$.$addChild$($itemSprite$$inline_950$$)
  }
  $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$ = D.$DvtButtonLAFUtils$$.$drawDropdownShape$($context$$inline_948$$, this.$_maxItemDim$.$w$ + $bgAlpha$$inline_957_leftPadding$$inline_943$$ + $rightPadding$$inline_945$$, $currY$$inline_947$$ + $bottomPadding$$inline_944$$ - $interItemPadding$$inline_946$$, $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$);
  $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$.$addChild$($bgColor$$inline_956_content$$inline_952_dim$$14$$);
  $bgColor$$inline_956_content$$inline_952_dim$$14$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  $bgAlpha$$inline_957_leftPadding$$inline_943$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$), (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "borderAlpha", 1));
  $bgColor$$inline_956_content$$inline_952_dim$$14$$ && $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$.$setSolidFill$($bgColor$$inline_956_content$$inline_952_dim$$14$$, $bgAlpha$$inline_957_leftPadding$$inline_943$$);
  this.$_dropdown$ = $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$;
  $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$57_event$$64_stage$$2$$, this.$_dropdown$);
  this.$addChild$(this.$_dropdown$);
  $bgColor$$inline_956_content$$inline_952_dim$$14$$ = this.$_button$.$getDimensions$();
  $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$ = D.$DvtAgent$$.$isRightToLeft$($context$$57_event$$64_stage$$2$$) ? -$comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$.$w$ + 1 * $bgColor$$inline_956_content$$inline_952_dim$$14$$.$w$ / 4 : 3 * $bgColor$$inline_956_content$$inline_952_dim$$14$$.$w$ / 4;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_dropdown$, $comboBoxStyles$$inline_942_dd$$inline_955_dddim_transX$$1$$, 3 * $bgColor$$inline_956_content$$inline_952_dim$$14$$.$h$ / 4);
  this.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$_button$, D.$JSCompiler_alias_TRUE$$);
  this.$FireListener$(new D.$DvtComboBoxEvent$$("cbShowDropdown"));
  ($context$$57_event$$64_stage$$2$$ = $context$$57_event$$64_stage$$2$$.$_stage$) && (this.$_isTouchDevice$ ? $context$$57_event$$64_stage$$2$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this) : $context$$57_event$$64_stage$$2$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this))
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
D.$JSCompiler_prototypeAlias$$.$HandleDropdownItemClick$ = function $$JSCompiler_prototypeAlias$$$$HandleDropdownItemClick$$($event$$69$$) {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_TRUE$$;
  this.$_hideDropdownTimer$.stop();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$69$$);
  var $displayObject$$inline_959_eventTarget$$;
  $displayObject$$inline_959_eventTarget$$ = $event$$69$$.target;
  for(var $content$$1_n$$inline_960$$, $id$$inline_961$$;$displayObject$$inline_959_eventTarget$$;) {
    if(($id$$inline_961$$ = $displayObject$$inline_959_eventTarget$$.getId()) && $displayObject$$inline_959_eventTarget$$ instanceof D.$DvtContainer$$ && "__it" == $id$$inline_961$$.substr(0, 4)) {
      $content$$1_n$$inline_960$$ = $displayObject$$inline_959_eventTarget$$;
      break
    }
    $displayObject$$inline_959_eventTarget$$ = $displayObject$$inline_959_eventTarget$$.getParent()
  }
  $displayObject$$inline_959_eventTarget$$ = $content$$1_n$$inline_960$$;
  var $index$$47$$;
  this.$_dropdown$ && $displayObject$$inline_959_eventTarget$$ && ($content$$1_n$$inline_960$$ = this.$_dropdown$.$getChildAt$(0)) && ($index$$47$$ = $content$$1_n$$inline_960$$.$getChildIndex$($displayObject$$inline_959_eventTarget$$));
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_event$ = $event$$69$$;
  this.$setSelectedIndex$($index$$47$$)
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
D.$DvtComboBox$DrawArrow$$ = function $$DvtComboBox$DrawArrow$$$($context$$59_shape$$3$$, $ww$$9$$, $hh$$8$$) {
  var $aPoints$$ = [];
  $aPoints$$.push($ww$$9$$ - 12, $hh$$8$$ / 2 - 2);
  $aPoints$$.push($ww$$9$$ - 4, $hh$$8$$ / 2 - 2);
  $aPoints$$.push($ww$$9$$ - 8, $hh$$8$$ / 2 + 2);
  $aPoints$$.push($ww$$9$$ - 12, $hh$$8$$ / 2 - 2);
  $context$$59_shape$$3$$ = new D.$DvtPolygon$$($context$$59_shape$$3$$, $aPoints$$, D.$JSCompiler_alias_NULL$$);
  $context$$59_shape$$3$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$59_shape$$3$$.$setSolidFill$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$59_shape$$3$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$59_shape$$3$$
};
D.$DvtComboBox$$.prototype.$setEventManager$ = (0,D.$JSCompiler_set$$)("$_eventManager$");
D.$DropdownItemSprite$$ = function $$DropdownItemSprite$$$($context$$60$$, $x$$65$$, $y$$42$$, $w$$8$$, $h$$8$$, $id$$12$$) {
  this.Init($context$$60$$, $x$$65$$, $y$$42$$, $w$$8$$, $h$$8$$, $id$$12$$)
};
D.$DvtObj$$.$createSubclass$(D.$DropdownItemSprite$$, D.$DvtRect$$, "DropdownItemSprite");
D.$DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($context$$61$$) {
  D.$DvtRect$$.$superclass$.Init.call(this, $context$$61$$)
};
D.$DvtComboBoxEvent$$ = function $$DvtComboBoxEvent$$$($subtype$$1$$, $index$$48$$, $evt$$19$$) {
  this.Init($subtype$$1$$, $index$$48$$, $evt$$19$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBoxEvent$$, D.$DvtBaseEvent$$, "DvtComboBoxEvent");
D.$DvtComboBoxEvent$$.prototype.Init = function $$DvtComboBoxEvent$$$$Init$($subtype$$2$$, $index$$49$$, $evt$$20$$) {
  D.$DvtComboBoxEvent$$.$superclass$.Init.call(this, "comboBoxEvent");
  $index$$49$$ === D.$JSCompiler_alias_VOID$$ && ($index$$49$$ = -1);
  this.$subtype$ = $subtype$$2$$;
  this.$_index$ = $index$$49$$;
  this.$_evt$ = $evt$$20$$
};
D.$DvtComboBoxEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtBasePanZoomControl$$ = function $$DvtBasePanZoomControl$$$($context$$34$$, $panZoomCanvas$$2$$, $resources$$5$$) {
  this.Init($context$$34$$, $panZoomCanvas$$2$$, $resources$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBasePanZoomControl$$, D.$DvtContainer$$, "DvtBasePanZoomControl");
D.$DvtBasePanZoomControl$$.prototype.Init = function $$DvtBasePanZoomControl$$$$Init$($context$$35$$, $panZoomCanvas$$3$$, $resources$$6$$) {
  D.$DvtBasePanZoomControl$$.$superclass$.Init.call(this, $context$$35$$);
  this.$_panZoomCanvas$ = $panZoomCanvas$$3$$;
  this.$_context$ = $context$$35$$;
  this.$_tooltipManager$ = $context$$35$$.$getTooltipManager$();
  this.$_resources$ = $resources$$6$$
};
D.$DvtBasePanZoomControl$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$DvtBasePanZoomControl$$.prototype.$setResources$ = (0,D.$JSCompiler_set$$)("$_resources$");
D.$DvtBasePanZoomControl$$.prototype.$getResources$ = function $$DvtBasePanZoomControl$$$$$getResources$$() {
  this.$_resources$ == D.$JSCompiler_alias_NULL$$ && (this.$_resources$ = new D.$DvtPanZoomControlPanelResources$$);
  return this.$_resources$
};
D.$DvtZoomInButton$$ = function $$DvtZoomInButton$$$($context$$47$$, $button$$5$$, $panZoomCanvas$$6$$, $resources$$10$$, $eventManager$$2$$) {
  this.Init($context$$47$$, $button$$5$$, $panZoomCanvas$$6$$, $resources$$10$$, $eventManager$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomInButton$$, D.$DvtBasePanZoomControl$$, "DvtZoomInButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomInButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($JSCompiler_temp_const$$438_context$$48_proxy$$3$$, $JSCompiler_temp_const$$437_button$$6$$, $JSCompiler_temp_const$$436_panZoomCanvas$$7$$, $JSCompiler_StaticMethods_getZoomInTooltip$self$$inline_897_resources$$11$$, $eventManager$$3$$) {
  D.$DvtZoomInButton$$.$superclass$.Init.call(this, $JSCompiler_temp_const$$438_context$$48_proxy$$3$$, $JSCompiler_temp_const$$436_panZoomCanvas$$7$$, $JSCompiler_StaticMethods_getZoomInTooltip$self$$inline_897_resources$$11$$);
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomInTimer$ = new D.$DvtTimer$$($JSCompiler_temp_const$$438_context$$48_proxy$$3$$, 100, this.$HandleZoomInTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($JSCompiler_temp_const$$438_context$$48_proxy$$3$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomInButton$ = $JSCompiler_temp_const$$437_button$$6$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomInButton$, this.$HandleZoomInClick$, this);
  this.$_eventManager$ = $eventManager$$3$$;
  $JSCompiler_temp_const$$438_context$$48_proxy$$3$$ = this.$HandleZoomInMouseDown$;
  $JSCompiler_temp_const$$436_panZoomCanvas$$7$$ = $JSCompiler_temp_const$$437_button$$6$$ = this.$HandleZoomInMouseUp$;
  $JSCompiler_StaticMethods_getZoomInTooltip$self$$inline_897_resources$$11$$ = this.$getResources$();
  $JSCompiler_temp_const$$438_context$$48_proxy$$3$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, $JSCompiler_temp_const$$438_context$$48_proxy$$3$$, $JSCompiler_temp_const$$437_button$$6$$, $JSCompiler_temp_const$$436_panZoomCanvas$$7$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getZoomInTooltip$self$$inline_897_resources$$11$$.$_zoomInTooltip$);
  this.$_eventManager$.$associate$(this.$_zoomInButton$, $JSCompiler_temp_const$$438_context$$48_proxy$$3$$);
  this.$addChild$(this.$_zoomInButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  if(!this.$_zoomInTimer$.$isRunning$()) {
    var $currZoom$$2_newZoom$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$2_newZoom$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$2_newZoom$$), $animator$$10$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($currZoom$$2_newZoom$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$10$$);
    $animator$$10$$.play()
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
  var $currZoom$$3$$ = this.$_panZoomCanvas$.$getZoom$();
  this.$_panZoomCanvas$.$zoomTo$((0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$3$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$2$$) {
  this.$_zoomInButton$.setCursor($enabled$$2$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomInButton$.$setEnabled$($enabled$$2$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomInButton$)
};
D.$DvtZoomOutButton$$ = function $$DvtZoomOutButton$$$($context$$62$$, $button$$8$$, $panZoomCanvas$$10$$, $resources$$14$$, $eventManager$$5$$) {
  this.Init($context$$62$$, $button$$8$$, $panZoomCanvas$$10$$, $resources$$14$$, $eventManager$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomOutButton$$, D.$DvtBasePanZoomControl$$, "DvtZoomOutButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomOutButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($JSCompiler_temp_const$$10_context$$63_proxy$$5$$, $JSCompiler_temp_const$$9_button$$9$$, $JSCompiler_temp_const$$8_panZoomCanvas$$11$$, $JSCompiler_StaticMethods_getZoomOutTooltip$self$$inline_963_resources$$15$$, $eventManager$$6$$) {
  D.$DvtZoomOutButton$$.$superclass$.Init.call(this, $JSCompiler_temp_const$$10_context$$63_proxy$$5$$, $JSCompiler_temp_const$$8_panZoomCanvas$$11$$, $JSCompiler_StaticMethods_getZoomOutTooltip$self$$inline_963_resources$$15$$);
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomOutTimer$ = new D.$DvtTimer$$($JSCompiler_temp_const$$10_context$$63_proxy$$5$$, 100, this.$HandleZoomOutTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($JSCompiler_temp_const$$10_context$$63_proxy$$5$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomOutButton$ = $JSCompiler_temp_const$$9_button$$9$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomOutButton$, this.$HandleZoomOutClick$, this);
  this.$_eventManager$ = $eventManager$$6$$;
  $JSCompiler_temp_const$$10_context$$63_proxy$$5$$ = this.$HandleZoomOutMouseDown$;
  $JSCompiler_temp_const$$8_panZoomCanvas$$11$$ = $JSCompiler_temp_const$$9_button$$9$$ = this.$HandleZoomOutMouseUp$;
  $JSCompiler_StaticMethods_getZoomOutTooltip$self$$inline_963_resources$$15$$ = this.$getResources$();
  $JSCompiler_temp_const$$10_context$$63_proxy$$5$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, $JSCompiler_temp_const$$10_context$$63_proxy$$5$$, $JSCompiler_temp_const$$9_button$$9$$, $JSCompiler_temp_const$$8_panZoomCanvas$$11$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getZoomOutTooltip$self$$inline_963_resources$$15$$.$_zoomOutTooltip$);
  this.$_eventManager$.$associate$(this.$_zoomOutButton$, $JSCompiler_temp_const$$10_context$$63_proxy$$5$$);
  this.$addChild$(this.$_zoomOutButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  if(!this.$_zoomOutTimer$.$isRunning$()) {
    var $currZoom$$4_newZoom$$2$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$4_newZoom$$2$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$4_newZoom$$2$$), $animator$$11$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($currZoom$$4_newZoom$$2$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$11$$);
    $animator$$11$$.play()
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
D.$DvtZoomToFitButton$$ = function $$DvtZoomToFitButton$$$($context$$45$$, $button$$3$$, $panZoomCanvas$$4$$, $resources$$8$$, $eventManager$$) {
  this.Init($context$$45$$, $button$$3$$, $panZoomCanvas$$4$$, $resources$$8$$, $eventManager$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomToFitButton$$, D.$DvtBasePanZoomControl$$, "DvtZoomToFitButton");
D.$DvtZoomToFitButton$$.prototype.Init = function $$DvtZoomToFitButton$$$$Init$($JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_895_context$$46_proxy$$2$$, $button$$4$$, $panZoomCanvas$$5$$, $resources$$9$$, $eventManager$$1$$) {
  D.$DvtZoomToFitButton$$.$superclass$.Init.call(this, $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_895_context$$46_proxy$$2$$, $panZoomCanvas$$5$$, $resources$$9$$);
  this.$_zoomToFitButton$ = $button$$4$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomToFitButton$, this.$HandleZoomToFitClick$, this);
  this.$_zoomToFitButton$.setCursor("pointer");
  this.$_eventManager$ = $eventManager$$1$$;
  $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_895_context$$46_proxy$$2$$ = this.$getResources$();
  $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_895_context$$46_proxy$$2$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_895_context$$46_proxy$$2$$.$_zoomToFitTooltip$);
  this.$_eventManager$.$associate$(this.$_zoomToFitButton$, $JSCompiler_StaticMethods_getZoomToFitTooltip$self$$inline_895_context$$46_proxy$$2$$);
  this.$addChild$(this.$_zoomToFitButton$)
};
D.$DvtZoomToFitButton$$.prototype.$HandleZoomToFitClick$ = function $$DvtZoomToFitButton$$$$$HandleZoomToFitClick$$() {
  var $animator$$9$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomToFit$($animator$$9$$);
  $animator$$9$$.play()
};
D.$DvtZoomSlider$$ = function $$DvtZoomSlider$$$($context$$31$$, $panZoomCanvas$$, $resources$$3$$, $zoomLevels$$1$$, $zoomLevelsTooltips$$1$$, $minScale$$1$$, $maxScale$$1$$) {
  this.Init($context$$31$$, $panZoomCanvas$$, $resources$$3$$, $zoomLevels$$1$$, $zoomLevelsTooltips$$1$$, $minScale$$1$$, $maxScale$$1$$)
};
D.$DvtZoomSlider$DEFAULT_ZOOM_LEVELS$$ = [0, 0.25, 0.5, 0.75, 1];
D.$DvtObj$$.$createSubclass$(D.$DvtZoomSlider$$, D.$DvtBasePanZoomControl$$, "DvtZoomSlider");
D.$DvtZoomSlider$$.prototype.Init = function $$DvtZoomSlider$$$$Init$($context$$32$$, $panZoomCanvas$$1$$, $resources$$4$$, $zoomLevels$$2$$, $zoomLevelsTooltips$$2$$, $minScale$$2$$, $maxScale$$2$$) {
  D.$DvtZoomSlider$$.$superclass$.Init.call(this, $context$$32$$, $panZoomCanvas$$1$$, $resources$$4$$);
  this.$_zoomLevels$ = D.$DvtZoomSlider$DEFAULT_ZOOM_LEVELS$$;
  this.$_bZoomSliderThumbMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$.$addEvtListener$(window.ZoomEvent.$ZOOM$, this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
  $zoomLevels$$2$$ || ($zoomLevels$$2$$ = D.$DvtZoomSlider$DEFAULT_ZOOM_LEVELS$$);
  this.$_zoomLevels$ = $zoomLevels$$2$$;
  this.$_zoomLevelsTooltips$ = $zoomLevelsTooltips$$2$$;
  $minScale$$2$$ || ($minScale$$2$$ = 0);
  $maxScale$$2$$ || ($maxScale$$2$$ = 1);
  this.$_minScale$ = $minScale$$2$$;
  this.$_maxScale$ = $maxScale$$2$$;
  this.$Render$()
};
D.$DvtZoomSlider$$.prototype.$Render$ = function $$DvtZoomSlider$$$$$Render$$() {
  this.$_zoomSliderCrosslines$ = [];
  var $s$$inline_891_zoomLevels$$3$$ = this.$_zoomLevels$, $button$$inline_893_context$$inline_890_numZoomLevels$$ = 0;
  $s$$inline_891_zoomLevels$$3$$ != D.$JSCompiler_alias_NULL$$ && ($button$$inline_893_context$$inline_890_numZoomLevels$$ = $s$$inline_891_zoomLevels$$3$$.length);
  var $ww$$2_ww$$inline_892$$ = window.ZOOM_SLIDER_WIDTH, $g$$ = window.graphics;
  $g$$.$lineStyle$(0, 0, 0);
  $g$$.$DvtPathUtils$.moveTo(0, 0);
  $g$$.$DvtPathUtils$.lineTo($ww$$2_ww$$inline_892$$, window.ZOOM_SLIDER_HEIGHT);
  this.$_zoomSliderStartY$ = 8;
  this.$_zoomSliderEndY$ = window.height - 8;
  for(var $crossline$$1$$, $i$$38$$ = 0;$i$$38$$ < $button$$inline_893_context$$inline_890_numZoomLevels$$;$i$$38$$++) {
    $crossline$$1$$ = new window.Sprite, $crossline$$1$$.$buttonMode$ = D.$JSCompiler_alias_TRUE$$, $crossline$$1$$.y = this.$_zoomSliderEndY$ - ($s$$inline_891_zoomLevels$$3$$[$i$$38$$] - this.$_minScale$) / (this.$_maxScale$ - this.$_minScale$) * (this.$_zoomSliderEndY$ - this.$_zoomSliderStartY$), (0,window.addChild)($crossline$$1$$), $g$$ = $crossline$$1$$.$graphics$, window.PanZoomDvtButtonLAFUtilsPanelLAFUtils.$drawZoomSliderCrossLine$($ww$$2_ww$$inline_892$$), $g$$.$lineStyle$(5, 0, 0), $g$$.$DvtPathUtils$.moveTo(4, 
    0), $g$$.$DvtPathUtils$.lineTo(4 + $ww$$2_ww$$inline_892$$, 0), this.$_zoomSliderCrosslines$.push($crossline$$1$$), $crossline$$1$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleZoomSliderCrosslineClick$, D.$JSCompiler_alias_FALSE$$, 0, D.$JSCompiler_alias_TRUE$$)
  }
  this.$addZoomSliderCrosslinesTooltipListeners$();
  $button$$inline_893_context$$inline_890_numZoomLevels$$ = this.$_context$;
  $s$$inline_891_zoomLevels$$3$$ = new D.$DvtContainer$$($button$$inline_893_context$$inline_890_numZoomLevels$$);
  $ww$$2_ww$$inline_892$$ = D.$DvtStyleUtils$$.$isLocaleL2R$() ? 0 : window.ZOOM_SLIDER_WIDTH - 2;
  $button$$inline_893_context$$inline_890_numZoomLevels$$ = new D.$DvtButton$$($button$$inline_893_context$$inline_890_numZoomLevels$$, D.$DvtButtonLAFUtils$$.$createZoomSliderButtonState$($button$$inline_893_context$$inline_890_numZoomLevels$$, 0, $ww$$2_ww$$inline_892$$), D.$DvtButtonLAFUtils$$.$createZoomSliderButtonState$(1, $ww$$2_ww$$inline_892$$), D.$DvtButtonLAFUtils$$.$createZoomSliderButtonState$(2, $ww$$2_ww$$inline_892$$));
  $s$$inline_891_zoomLevels$$3$$.$addChild$($button$$inline_893_context$$inline_890_numZoomLevels$$);
  $s$$inline_891_zoomLevels$$3$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandleZoomSliderThumbMouseDown$, D.$JSCompiler_alias_FALSE$$, this);
  $s$$inline_891_zoomLevels$$3$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, D.$DvtEventManager$consumeEvent$$, D.$JSCompiler_alias_FALSE$$, this);
  this.$_zoomSliderThumb$ = $s$$inline_891_zoomLevels$$3$$;
  (0,D.$JSCompiler_StaticMethods__positionZoomSliderThumb$$)(this);
  this.$addChild$(this.$_zoomSliderThumb$)
};
D.$JSCompiler_StaticMethods__positionZoomSliderThumb$$ = function $$JSCompiler_StaticMethods__positionZoomSliderThumb$$$($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$) {
  if($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_panZoomCanvas$ && $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderThumb$) {
    var $currZoom$$1_yPos$$ = $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_panZoomCanvas$.$getCurrentZoom$(), $currZoom$$1_yPos$$ = (0,window.Number)($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderEndY$) - ($currZoom$$1_yPos$$ - $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_minScale$) / ($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_maxScale$ - $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_minScale$) * (0,window.Number)($JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderEndY$ - 
    $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderStartY$);
    $currZoom$$1_yPos$$ > $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderEndY$ ? $currZoom$$1_yPos$$ = $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderEndY$ : $currZoom$$1_yPos$$ < $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderStartY$ && ($currZoom$$1_yPos$$ = $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderStartY$);
    $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderThumb$.y = $currZoom$$1_yPos$$ - $JSCompiler_StaticMethods__positionZoomSliderThumb$self$$.$_zoomSliderThumb$.height / 2
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomSlider$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$31$$) {
  $event$$31$$.$getSubType$() == window.ZoomEvent.$SUBTYPE_ZOOMED$ && (0,D.$JSCompiler_StaticMethods__positionZoomSliderThumb$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomSliderCrosslineClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomSliderCrosslineClick$$($event$$33_newScale$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$33_newScale$$);
  var $animator$$7_i$$39$$, $numCrosslines$$1$$ = 0;
  this.$_zoomSliderCrosslines$ != D.$JSCompiler_alias_NULL$$ && ($numCrosslines$$1$$ = this.$_zoomSliderCrosslines$.length);
  for($animator$$7_i$$39$$ = 0;$animator$$7_i$$39$$ < $numCrosslines$$1$$ && $event$$33_newScale$$.target != this.$_zoomSliderCrosslines$[$animator$$7_i$$39$$];$animator$$7_i$$39$$++) {
  }
  $event$$33_newScale$$ = this.$_zoomLevels$[$animator$$7_i$$39$$];
  $animator$$7_i$$39$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomTo$($event$$33_newScale$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$7_i$$39$$);
  $animator$$7_i$$39$$.play()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomSliderThumbMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomSliderThumbMouseDown$$($dragBounds_event$$36$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($dragBounds_event$$36$$);
  this.$_bZoomSliderThumbMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  window.stage.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandleZoomSliderThumbMouseMove$, D.$JSCompiler_alias_FALSE$$, 0, D.$JSCompiler_alias_TRUE$$);
  window.stage.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleZoomSliderThumbMouseUp$, D.$JSCompiler_alias_FALSE$$, 0, D.$JSCompiler_alias_TRUE$$);
  $dragBounds_event$$36$$ = new window.Rectangle(this.$_zoomSliderThumb$.x, this.$_zoomSliderStartY$ - this.$_zoomSliderThumb$.height / 2, 0, this.$_zoomSliderEndY$ - this.$_zoomSliderStartY$);
  this.$_zoomSliderThumb$.$startDrag$(D.$JSCompiler_alias_FALSE$$, $dragBounds_event$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomSliderThumbMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomSliderThumbMouseMove$$($event$$37$$) {
  this.$_bZoomSliderThumbMouseDown$ && $event$$37$$.$updateAfterEvent$()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomSliderThumbMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomSliderThumbMouseUp$$($event$$38_ratio$$1_relY$$1$$) {
  window.stage.$removeEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandleZoomSliderThumbMouseMove$);
  window.stage.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleZoomSliderThumbMouseUp$);
  if(this.$_bZoomSliderThumbMouseDown$) {
    (0,D.$DvtEventManager$consumeEvent$$)($event$$38_ratio$$1_relY$$1$$);
    this.$_bZoomSliderThumbMouseDown$ = D.$JSCompiler_alias_FALSE$$;
    this.$_zoomSliderThumb$.$stopDrag$();
    $event$$38_ratio$$1_relY$$1$$ = this.$_zoomSliderEndY$ - (this.$_zoomSliderThumb$.y + this.$_zoomSliderThumb$.height / 2);
    0 > $event$$38_ratio$$1_relY$$1$$ && ($event$$38_ratio$$1_relY$$1$$ = 0);
    $event$$38_ratio$$1_relY$$1$$ = this.$_minScale$ + $event$$38_ratio$$1_relY$$1$$ / (this.$_zoomSliderEndY$ - this.$_zoomSliderStartY$) * (this.$_maxScale$ - this.$_minScale$);
    var $animator$$8$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($event$$38_ratio$$1_relY$$1$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$8$$);
    $animator$$8$$.play()
  }
};
D.$DvtPanControl$$ = function $$DvtPanControl$$$($context$$49$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$8$$, $resources$$12$$, $control$$, $styleMap$$14$$) {
  this.Init($context$$49$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$8$$, $resources$$12$$, $control$$, $styleMap$$14$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanControl$$, D.$DvtBasePanZoomControl$$, "DvtPanControl");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanControl$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$50$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$9$$, $resources$$13$$, $control$$1$$, $styleMap$$15$$) {
  D.$DvtPanControl$$.$superclass$.Init.call(this, $context$$50$$, $panZoomCanvas$$9$$, $resources$$13$$);
  this.$_panTimer$ = new D.$DvtTimer$$($context$$50$$, 50, this.$HandlePanTimer$, this);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panCenter$ = new D.$DvtPoint$$(20, 20);
  this.$_controls$ = $control$$1$$ ? $control$$1$$ : 16777215;
  $panButton$$1$$.$addChild$($recenterButton$$1$$);
  $recenterButton$$1$$ && (this.$_panCenterSprite$ = $recenterButton$$1$$, this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_panCenterSprite$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), D.$DvtAgent$$.$isTouchDevice$() || (this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, 
  this.$HandlePanCenterDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanCenterUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanCenterRollOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanCenterRollOut$, D.$JSCompiler_alias_FALSE$$, this)), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, 
  this.$HandlePanCenterMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panButton$ = $panButton$$1$$;
  this.$_panButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this);
  D.$DvtAgent$$.$isTouchDevice$() || (this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandlePanMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanMouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanRollOver$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanRollOut$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandlePanMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanButtonBackground$($context$$50$$, $styleMap$$15$$);
  this.$_panControl$.$addChild$(this.$_panButton$);
  this.$addChild$(this.$_panControl$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanClick$$($event$$52$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$52$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseDown$$($event$$53_localPoint_stagePoint$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$53_localPoint_stagePoint$$);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $event$$53_localPoint_stagePoint$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$53_localPoint_stagePoint$$);
  $event$$53_localPoint_stagePoint$$ = this.$_panButton$.$stageToLocal$($event$$53_localPoint_stagePoint$$);
  (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$53_localPoint_stagePoint$$.x, $event$$53_localPoint_stagePoint$$.y, this.$_panButton$.$downState$);
  this.$_panMousePoint$ = new D.$DvtPoint$$($event$$53_localPoint_stagePoint$$.x, $event$$53_localPoint_stagePoint$$.y);
  this.$_panTimer$.start();
  this.$_panTimerCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseUp$$($event$$54$$) {
  this.$_bPanMouseDown$ && ((0,D.$DvtEventManager$consumeEvent$$)($event$$54$$), this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
  this.$_panButton$.$_mouseOutHandler$($event$$54$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOver$$($event$$55$$) {
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  var $tooltip$$inline_905$$ = this.$getResources$().$_panControlTooltip$;
  this.$getTooltipManager$().$showTooltip$($event$$55$$.pageX, $event$$55$$.pageY, $tooltip$$inline_905$$, $event$$55$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOut$$($event$$56$$) {
  this.$HandlePanMouseUp$($event$$56$$);
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseMove$$($event$$57_localPoint$$1_stagePoint$$1$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$57_localPoint$$1_stagePoint$$1$$);
  $event$$57_localPoint$$1_stagePoint$$1$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$57_localPoint$$1_stagePoint$$1$$);
  $event$$57_localPoint$$1_stagePoint$$1$$ = this.$_panButton$.$stageToLocal$($event$$57_localPoint$$1_stagePoint$$1$$);
  this.$_bPanMouseDown$ ? ((0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$57_localPoint$$1_stagePoint$$1$$.x, $event$$57_localPoint$$1_stagePoint$$1$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new D.$DvtPoint$$($event$$57_localPoint$$1_stagePoint$$1$$.x, $event$$57_localPoint$$1_stagePoint$$1$$.y)) : (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$57_localPoint$$1_stagePoint$$1$$.x, $event$$57_localPoint$$1_stagePoint$$1$$.y, 
  this.$_panButton$.$overState$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanTimer$ = function $$JSCompiler_prototypeAlias$$$$HandlePanTimer$$() {
  if(this.$_bPanMouseDown$) {
    var $angleRads_deltaY$$ = window.Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $deltaX$$ = window.Math.cos($angleRads_deltaY$$), $angleRads_deltaY$$ = window.Math.sin($angleRads_deltaY$$), $factor$$1$$ = 15;
    this.$_panTimerCount$++;
    40 < this.$_panTimerCount$ && ($factor$$1$$ *= 3);
    this.$_panZoomCanvas$.$panBy$($factor$$1$$ * $deltaX$$, $factor$$1$$ * $angleRads_deltaY$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterClick$$($event$$58$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$58$$);
  this.$_panZoomCanvas$.$zoomAndCenter$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterDown$$($event$$59$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$59$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterUp$$($event$$60$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$60$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOver$$($event$$61$$) {
  var $tooltip$$inline_913$$ = this.$getResources$().$_panControlCenterTooltip$;
  this.$getTooltipManager$().$showTooltip$($event$$61$$.pageX, $event$$61$$.pageY, $tooltip$$inline_913$$, $event$$61$$.target);
  this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$DvtEventManager$consumeEvent$$)($event$$61$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOut$$($event$$62$$) {
  this.$getTooltipManager$().$hideTooltip$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$62$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterMouseMove$$($event$$63$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$63$$)
};
D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$ = function $$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$$($JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$, $localX$$, $localY$$, $displayObj$$) {
  $displayObj$$.$setRotation$(window.Math.atan2($localY$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.y, $localX$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.x) - window.Math.PI / 4)
};
D.$DvtPanZoomControlPanelEvent$$ = function $$DvtPanZoomControlPanelEvent$$$($subtype$$) {
  this.Init("dvtPZCPExpand");
  this.$_subtype$ = $subtype$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtPanZoomControlPanelEvent");
D.$DvtPanZoomControlPanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtPanZoomControlPanel$$ = function $$DvtPanZoomControlPanel$$$($context$$21$$, $canvas$$, $buttonImages$$, $resources$$, $controls$$1$$, $view$$3$$) {
  this.Init($context$$21$$, $canvas$$, $buttonImages$$, $resources$$, $controls$$1$$, $view$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanel$$, D.$DvtContainer$$, "DvtPanZoomControlPanel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomControlPanel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$22_s$$5$$, $canvas$$1$$, $buttonImages$$1$$, $resources$$1$$, $controls$$2$$, $view$$4$$) {
  D.$DvtPanZoomControlPanel$$.$superclass$.Init.call(this, $context$$22_s$$5$$, D.$JSCompiler_alias_NULL$$, "_controlPanel");
  this.$_bMouseOver$ = this.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $canvas$$1$$;
  this.$_tooltipManager$ = $context$$22_s$$5$$.$getTooltipManager$();
  this.$_resources$ = new D.$DvtPanZoomControlPanelResources$$($resources$$1$$);
  this.$_controls$ = $controls$$2$$ == D.$JSCompiler_alias_NULL$$ ? 16777215 : $controls$$2$$;
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_view$ = $view$$4$$) {
    this.$_styleMap$ = this.$_view$.$getControlPanelStyleMap$(), this.$_styleMap$.centerButtonDisplayed || (this.$_controls$ &= -17, this.$_view$.$_displayedControls$ = this.$_controls$)
  }
  this.$_zoomLevels$ = D.$DvtZoomSlider$DEFAULT_ZOOM_LEVELS$$;
  this.$_zoomSliderMinScale$ = 0;
  this.$_state$ = this.$_zoomSliderMaxScale$ = 1;
  this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
  this.$_buttonImages$ = $buttonImages$$1$$;
  this.$_bgAlpha$ = this.$_styleMap$.backgroundAlpha;
  this.$_eventManager$ = new D.$DvtPanZoomControlPanelEventManager$$($context$$22_s$$5$$, D.$JSCompiler_alias_NULL$$, $view$$4$$);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtPanZoomControlPanel$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this);
  $context$$22_s$$5$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$_background$.$setAlpha$(this.$_bgAlpha$);
  this.$_frame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$addChild$($context$$22_s$$5$$);
  this.$tabChildren$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($state$$) {
  this.$_state$ != $state$$ && (this.$toggleExpandCollapse$(), this.$_state$ = $state$$, (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$JSCompiler_prototypeAlias$$.$setResources$ = function $$JSCompiler_prototypeAlias$$$$setResources$$($resources$$2$$) {
  this.$_resources$ = $resources$$2$$;
  this.$_zoomSlider$ && this.$_zoomSlider$.$setResources$($resources$$2$$);
  this.$_zoomInButton$ && this.$_zoomInButton$.$setResources$($resources$$2$$);
  this.$_zoomOutButton$ && this.$_zoomOutButton$.$setResources$($resources$$2$$);
  this.$_zoomToFitButton$ && this.$_zoomToFitButton$.$setResources$($resources$$2$$)
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
  var $h$$7$$ = 0, $h$$7$$ = this.$isSingleHorzRow$() ? D.$DvtPanZoomControlPanelLAFUtils$$.$getViewPanelHalfHeight$() : D.$DvtPanZoomControlPanelLAFUtils$$.$getViewPanelHeight$();
  return window.Math.max((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $h$$7$$)
};
D.$JSCompiler_StaticMethods_RenderCollapsed$$ = function $$JSCompiler_StaticMethods_RenderCollapsed$$$($JSCompiler_StaticMethods_RenderCollapsed$self$$) {
  var $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $contentBar$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$), $hh$$2$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $bR2L$$ = D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$ = D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewClosedShape$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$, $hh$$2$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$ = D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$, $hh$$2$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_collapsedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$ = D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_RenderCollapsed$self$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$.setCursor("pointer");
  $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getResources$();
  $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderCollapsed$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$.$_controlPanelExpandTooltip$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_getControlPanelExpandTooltip$self$$inline_847_context$$23_proxy$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  return $contentBar$$
};
D.$DvtPanZoomControlPanel$$.prototype.$PopulateHorzContentBar$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtPanZoomControlPanel$$.prototype.$toggleExpandCollapse$ = function $$DvtPanZoomControlPanel$$$$$toggleExpandCollapse$$() {
  this.$_bTransition$ || (2 === this.$_state$ ? this.$_doCollapse$() : 1 === this.$_state$ && this.$_doExpand$())
};
D.$DvtPanZoomControlPanel$$.prototype.$HandleExpandClick$ = function $$DvtPanZoomControlPanel$$$$$HandleExpandClick$$($event$$25$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$25$$);
  this.$_bTransition$ || (this.$_doExpand$(), this.$getTooltipManager$() && this.$getTooltipManager$().$hideTooltip$())
};
D.$DvtPanZoomControlPanel$$.prototype.$_doExpand$ = function $$DvtPanZoomControlPanel$$$$$_doExpand$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  var $context$$inline_857_odim$$inline_869_transX$$inline_874$$ = this.$_context$, $event$$inline_877_s$$inline_858$$ = new D.$DvtContainer$$($context$$inline_857_odim$$inline_869_transX$$inline_874$$);
  this.$_background$ = new D.$DvtContainer$$($context$$inline_857_odim$$inline_869_transX$$inline_874$$);
  this.$_frame$ = new D.$DvtContainer$$($context$$inline_857_odim$$inline_869_transX$$inline_874$$);
  $event$$inline_877_s$$inline_858$$.$addChild$(this.$_background$);
  $event$$inline_877_s$$inline_858$$.$addChild$(this.$_frame$);
  var $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ = D.$DvtAgent$$.$isRightToLeft$($context$$inline_857_odim$$inline_869_transX$$inline_874$$), $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = 0, $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$ = 
  new D.$DvtContainer$$($context$$inline_857_odim$$inline_869_transX$$inline_874$$), $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$;
  $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ = 0;
  var $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = this.$_context$, $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ = this.$isSingleHorzRow$();
  0 != (this.$_controls$ & 16) && (this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanControl$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, this.$_panZoomCanvas$, this.$getResources$(), this.$_controls$, this.$_buttonImages$, this.$_styleMap$), $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ && 
  (this.$_panControlUnderlay$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, this.$_styleMap$), this.$_panControlUnderlay2$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, 
  this.$_styleMap$), $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$addChild$(this.$_panControlUnderlay2$), $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$addChild$(this.$_panControlUnderlay$)), $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$addChild$(this.$_panControl$), $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$++);
  this.$_collapseButton$ = D.$DvtButtonLAFUtils$$.$createCollapseButton$(this.$_context$, this.$_buttonImages$, this.$getViewPanelHeight$(), this.$_styleMap$, D.$DvtAgent$$.$isRightToLeft$(this.$_context$));
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_collapseButton$, this.$HandleCollapseClick$, this);
  this.$_collapseButton$.setCursor("pointer");
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = this.$getResources$();
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = new D.$DvtPanZoomControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$.$_controlPanelCollapseTooltip$);
  this.$_eventManager$.$associate$(this.$_collapseButton$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$);
  $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$addChild$(this.$_collapseButton$);
  this.$_additionalContent$ = new D.$DvtContainer$$(this.$_context$);
  this.$PopulateHorzContentBar$(this.$_additionalContent$);
  0 < this.$_additionalContent$.$getNumChildren$() ? ($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$addChild$(this.$_additionalContent$), $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$++) : this.$_additionalContent$ = D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = 
  this.$_context$, $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ = D.$JSCompiler_alias_NULL$$, $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0), $backgroundWidth$$inline_8904_buttonWidth$$inline_8870$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0), $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ = this.$getViewPanelHeight$(), $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.hbar, "paddingLeft", 0), $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.hbar, "paddingInner", 0);
  $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ ? (this.$_collapseButton$.$setTranslateX$(0), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$, 
  this.$_additionalContent$ && ($dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, this.$_additionalContent$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += 
  $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_additionalContent$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, ($buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ - 
  $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$.$h$) / 2), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += window.Math.max($dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$.$w$, $backgroundWidth$$inline_8904_buttonWidth$$inline_8870$$)), this.$_panControl$ && ($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += 
  $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$, $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControl$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$), 
  this.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$), this.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay2$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, 
  $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$), $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, this.$_panControl$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += 
  $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$.$w$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$) : (this.$_panControl$ && ($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += 
  $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$, $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControl$, $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$, $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$), 
  this.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay$, $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$, $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$), this.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay2$, $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$, 
  $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$), $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, this.$_panControl$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += 
  $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$ + $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$.$w$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += 1), this.$_additionalContent$ && ($dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, 
  this.$_additionalContent$), 0 == $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ && ($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$), 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_additionalContent$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, ($buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ - $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$.$h$) / 
  2), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$.$w$, $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = window.Math.max($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ + 
  $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$, $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$)), this.$_collapseButton$.$setTranslateX$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$), 
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ += $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$);
  $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$;
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = D.$JSCompiler_alias_NULL$$;
  $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ = this.$_controls$ & 16 || this.$_styleMap$ && this.$_styleMap$.panelDrawerStyles && 0 == $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ ? (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingTop", 0) : 0;
  this.$isSingleHorzRow$() && 0 != (this.$_controls$ & 16) && ($bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ += D.$DvtPanZoomControlPanelLAFUtils$$.$getViewPanelHeight$() - this.$getViewPanelHeight$());
  if(0 != (this.$_controls$ & 256) || 0 != (this.$_controls$ & 4097)) {
    $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = new D.$DvtContainer$$($context$$inline_857_odim$$inline_869_transX$$inline_874$$), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$.$setTranslateY$($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$getTranslateY$() + 
    this.$getViewPanelHeight$()), $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, 0 != (this.$_controls$ & 256) && ($buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingLeft", 0), this.$_zoomToFitButton$ = D.$DvtButtonLAFUtils$$.$createZoomToFitButton$(this.$_context$, this.$_panZoomCanvas$, this.$getResources$(), this.$_eventManager$, this.$_buttonImages$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_zoomToFitButton$, 
    $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$, this.$_zoomToFitButton$.$getTranslateY$() + $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$), $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, 
    this.$_zoomToFitButton$), $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$.$addChild$(this.$_zoomToFitButton$), $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ += $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$.$h$, 
    $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ += $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$), $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, 
    $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ = D.$JSCompiler_alias_NULL$$, $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, 
    "paddingLeft", 0), 0 != (this.$_controls$ & 4097) && (this.$_zoomInButton$ = D.$DvtButtonLAFUtils$$.$createZoomInButton$(this.$_context$, this.$_panZoomCanvas$, this.$getResources$(), this.$_eventManager$, this.$_buttonImages$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_zoomInButton$, $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$, this.$_zoomInButton$.$getTranslateY$() + $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$), 
    $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, this.$_zoomInButton$), $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$.$addChild$(this.$_zoomInButton$), $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ += 
    $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$.$h$ + $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$, this.$_zoomOutButton$ = D.$DvtButtonLAFUtils$$.$createZoomOutButton$(this.$_context$, this.$_panZoomCanvas$, this.$getResources$(), this.$_eventManager$, this.$_buttonImages$, this.$_styleMap$), 
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_zoomOutButton$, $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$, this.$_zoomOutButton$.$getTranslateY$() + $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$), $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, 
    this.$_zoomOutButton$), $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$.$addChild$(this.$_zoomOutButton$), $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ += $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$.$h$, 
    $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ = this.$_panZoomCanvas$.$getZoom$(), $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$), 
    $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$), this.$_zoomInButton$ && this.$_zoomInButton$.$setEnabled$($bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ != 
    $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$), this.$_zoomOutButton$ && this.$_zoomOutButton$.$setEnabled$($bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ != $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$)), 
    this.$_frame$.$addChild$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$)
  }
  var $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ = 
  $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$, $buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$ = this.$_context$, $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0), $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $backgroundWidth$$inline_8904_buttonWidth$$inline_8870$$ = ($dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) ? $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ : $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ - 
  $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$, $backgroundHeight$$inline_8905$$ = this.$getViewPanelHeight$(), $backgroundFrameOffsetX$$inline_8906$$ = 0, $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = 0;
  $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ ? $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ && 0 == $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ && ($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ ? 
  -$buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$ : $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$) : ($backgroundFrameOffsetX$$inline_8906$$ = $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ ? $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$ : 0, $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = 
  $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ ? $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$ : 0);
  if(0 < $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ || $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$) {
    $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$ = D.$JSCompiler_alias_NULL$$, $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 0)), $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$ = $dim$$inline_8868_panelDrawerStyle$$inline_8903_yy$$inline_8875$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$, 
    $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$, $backgroundWidth$$inline_8904_buttonWidth$$inline_8870$$, $backgroundHeight$$inline_8905$$, 0 < $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ && $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ != 
    D.$JSCompiler_alias_NULL$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_BOTTOM$ : D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_LEFT$, $buttonPaddingInner$$inline_8874_paddingSide$$inline_8889_panelWidth$$inline_8902$$) : D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$, $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$, $backgroundWidth$$inline_8904_buttonWidth$$inline_8870$$ - 
    2 * $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$, $backgroundHeight$$inline_8905$$ - 2 * $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$, !$animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$), $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$)), $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$.$setFill$(D.$JSCompiler_alias_NULL$$), 
    $buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$.$setTranslateX$($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$getTranslateX$() + $backgroundFrameOffsetX$$inline_8906$$), $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$addChildAt$($buttonWidth$$inline_8901_r$$inline_8909_viewFrame$$inline_8908$$, 0), $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ = 
    D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewOpenShape$($buttonPaddingSide$$inline_8873_context$$inline_8900_dim$$inline_8882_paddingInner$$inline_8888_paddingSide$$inline_8881_prevZoom$$inline_8892$$, $backgroundWidth$$inline_8904_buttonWidth$$inline_8870$$, this.$getViewPanelHeight$(), !$animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$, 
    $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$getTranslateY$()), this.$_background$.$addChild$($animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$)
  }
  this.$_frame$.$addChild$($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$);
  $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$;
  $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = this.$_context$;
  $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ = D.$DvtAgent$$.$isRightToLeft$($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$);
  $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  !this.$_additionalContent$ && 0 == (this.$_controls$ & 16) ? $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ ? ($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$setTranslateX$(0 - $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$getTranslateX$()), 
  $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$setTranslateY$(0), $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ && (D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$), 
  $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$setTranslateX$($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$getTranslateX$() - $buttonWidth$$inline_8917_dim$$inline_8887_nKidHorzContentBar$$inline_8897_nextZoom$$inline_8891_paddingInner$$inline_8880_panelHeight$$inline_8872$$), $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$.$setTranslateY$(0))) : 
  $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ ? ($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$, 
  0, 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$, $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, 0)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$, 
  $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$getTranslateX$(), 0) : $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ && $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ && ($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$), $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$setTranslateX$(0), $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$.$setTranslateX$($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$.$w$ + 
  $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$.x - $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$));
  $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ = $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$;
  $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ = $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$;
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = this.$_context$;
  $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ && ($backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$.$getNumChildren$(), $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ = 
  1 < $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ || this.$_zoomToFitButton$ == D.$JSCompiler_alias_NULL$$ || 1 < $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ || 0 < $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ && 
  1 == $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ = D.$JSCompiler_alias_NULL$$, this.$_styleMap$ && this.$_styleMap$.panelDrawerStyles && ($bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$ = 
  0 < $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_TOP$ : D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_RIGHT$), $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, 
  $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$), $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ += 4, $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ = $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$ ? 
  $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$ : window.Math.max($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$.$h$, $bBiDi$$inline_8916_barWidth$$inline_8920_currY$$inline_8926_currZoom$$inline_8890_panelWidth$$inline_8871_vertContentBar$$inline_8878_vertContentBar$$inline_8885_vertContentBar$$inline_8896$$), 
  $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ += (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingBottom", 0), $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$ = D.$DvtPanZoomControlPanelLAFUtils$$.$renderEmptyZoomShape$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, 
  $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$, this.$_styleMap$, $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$, this.$getViewPanelHeight$()), $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ = 
  D.$DvtPanZoomControlPanelLAFUtils$$.$renderEmptyZoomFrame$($JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$, $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$, $backgroundShapeOffsetX$$inline_8907_context$$inline_8867_context$$inline_8915_cpWidth$$inline_8918_currX$$inline_860_dimHorizontal$$inline_8919_nKidsVert$$inline_8928_roundedCorner$$inline_8929$$, 
  this.$_styleMap$, $bSingleRow$$inline_8853_collapseButtonWidth$$inline_8869_currY$$inline_864_currY$$inline_8879_currY$$inline_8886_openside$$inline_8930$$, this.$getViewPanelHeight$()), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$, $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$.$getTranslateX$(), $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$.$getTranslateY$()), 
  this.$_background$.$addChild$($dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$), $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$.$addChildAt$($cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$, 0));
  this.$_expandedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_857_odim$$inline_869_transX$$inline_874$$, $event$$inline_877_s$$inline_858$$);
  this.$addChild$($event$$inline_877_s$$inline_858$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_867$$ = this.$getChildAt$(0), $context$$inline_857_odim$$inline_869_transX$$inline_874$$ = $oldContent$$inline_867$$.$getDimensions$(), $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  $context$$inline_857_odim$$inline_869_transX$$inline_874$$ && 0 != $context$$inline_857_odim$$inline_869_transX$$inline_874$$.$w$ ? ($cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ = $event$$inline_877_s$$inline_858$$.$getDimensions$(), $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$ = new D.$DvtAnimator$$(this.$_context$, 
  0.25), $oldContent$$inline_867$$.$setAlpha$(1), $event$$inline_877_s$$inline_858$$.$setAlpha$(0), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$, "typeNumber", $oldContent$$inline_867$$, $oldContent$$inline_867$$.$getAlpha$, $oldContent$$inline_867$$.$setAlpha$, 0), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$, 
  "typeNumber", $event$$inline_877_s$$inline_858$$, $event$$inline_877_s$$inline_858$$.$getAlpha$, $event$$inline_877_s$$inline_858$$.$setAlpha$, 1), $event$$inline_877_s$$inline_858$$.$setScaleX$($context$$inline_857_odim$$inline_869_transX$$inline_874$$.$w$ / $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$.$w$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$, 
  "typeNumber", $event$$inline_877_s$$inline_858$$, $event$$inline_877_s$$inline_858$$.$getScaleX$, $event$$inline_877_s$$inline_858$$.$setScaleX$, 1), D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && ($event$$inline_877_s$$inline_858$$.$setTranslateX$($oldContent$$inline_867$$.$getTranslateX$()), $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = 
  $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$.$w$ + $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$.x, (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$, "typeNumber", 
  $event$$inline_877_s$$inline_858$$, $event$$inline_877_s$$inline_858$$.$getTranslateX$, $event$$inline_877_s$$inline_858$$.$setTranslateX$, $oldContent$$inline_867$$.$getTranslateX$() + $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$ - $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$)), 
  $event$$inline_877_s$$inline_858$$.$setScaleY$($context$$inline_857_odim$$inline_869_transX$$inline_874$$.$h$ / $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$.$h$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$, "typeNumber", $event$$inline_877_s$$inline_858$$, $event$$inline_877_s$$inline_858$$.$getScaleY$, 
  $event$$inline_877_s$$inline_858$$.$setScaleY$, 1), $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$.$setOnEnd$(function() {
    $oldContent$$inline_867$$.getParent().removeChild($oldContent$$inline_867$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
    this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
  }, this), $animator$$inline_872_bBiDi$$inline_859_vertContentBar$$inline_8914_vertContentBar$$inline_8924_viewShape$$inline_8910$$.play()) : ($oldContent$$inline_867$$.getParent().removeChild($oldContent$$inline_867$$), D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? ($cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$ = (0,D.$DvtDisplayableUtils$_getDimForced$$)(this.$_context$, $event$$inline_877_s$$inline_858$$), 
  $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$ = window.Math.floor($cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$.$w$ + $cpHeight$$inline_8932_nKidHorzContentBar$$inline_862_nKidHorzContentBar$$inline_8851_nKidHorzContentBar$$inline_8862_ndim$$inline_871_zoomFrame$$inline_8934$$.x), 
  $context$$inline_857_odim$$inline_869_transX$$inline_874$$ = $dim$$inline_8931_horzContentBar$$inline_861_openCloseButtonWidth$$inline_870_zoomShape$$inline_8933$$ - $JSCompiler_StaticMethods_getControlPanelCollapseTooltip$self$$inline_8857_context$$inline_8852_context$$inline_8927_currX$$inline_8866_dimWidth$$inline_873_proxy$$inline_8858_vertContentBar$$inline_863$$) : $context$$inline_857_odim$$inline_869_transX$$inline_874$$ = 0, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($event$$inline_877_s$$inline_858$$, 
  $context$$inline_857_odim$$inline_869_transX$$inline_874$$, 0));
  this.$_state$ = 2;
  $event$$inline_877_s$$inline_858$$ = new D.$DvtPanZoomControlPanelEvent$$("show");
  this.$FireListener$($event$$inline_877_s$$inline_858$$)
};
D.$JSCompiler_StaticMethods__applyAlphasForMouse$$ = function $$JSCompiler_StaticMethods__applyAlphasForMouse$$$($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) {
  var $bMouseOver$$1$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__applyAlphasForMouse$self$$.$_context$.$_stage$ && ($bMouseOver$$1$$ = D.$JSCompiler_alias_TRUE$$);
  $bMouseOver$$1$$ ? (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) : (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$)
};
D.$DvtPanZoomControlPanel$$.prototype.$HandleCollapseClick$ = function $$DvtPanZoomControlPanel$$$$$HandleCollapseClick$$($event$$26$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$26$$);
  this.$_bTransition$ || this.$_doCollapse$()
};
D.$DvtPanZoomControlPanel$$.prototype.$_doCollapse$ = function $$DvtPanZoomControlPanel$$$$$_doCollapse$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  var $event$$inline_887_s$$8$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$addChild$($event$$inline_887_s$$8$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_880$$ = this.$getChildAt$(0), $animator$$inline_882$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  $oldContent$$inline_880$$.$setAlpha$(1);
  $event$$inline_887_s$$8$$.$setAlpha$(0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_882$$, "typeNumber", $oldContent$$inline_880$$, $oldContent$$inline_880$$.$getAlpha$, $oldContent$$inline_880$$.$setAlpha$, 0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_882$$, "typeNumber", $event$$inline_887_s$$8$$, $event$$inline_887_s$$8$$.$getAlpha$, $event$$inline_887_s$$8$$.$setAlpha$, 1);
  var $ndim$$inline_883$$ = this.$_collapsedDim$, $odim$$inline_884$$ = this.$_expandedDim$;
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_882$$, "typeNumber", $oldContent$$inline_880$$, $oldContent$$inline_880$$.$getScaleX$, $oldContent$$inline_880$$.$setScaleX$, $ndim$$inline_883$$.$w$ / $odim$$inline_884$$.$w$);
  D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_882$$, "typeNumber", $oldContent$$inline_880$$, $oldContent$$inline_880$$.$getTranslateX$, $oldContent$$inline_880$$.$setTranslateX$, $event$$inline_887_s$$8$$.$getTranslateX$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_882$$, "typeNumber", $oldContent$$inline_880$$, $oldContent$$inline_880$$.$getScaleY$, $oldContent$$inline_880$$.$setScaleY$, $ndim$$inline_883$$.$h$ / $odim$$inline_884$$.$h$);
  $animator$$inline_882$$.$setOnEnd$(function() {
    $oldContent$$inline_880$$.getParent().removeChild($oldContent$$inline_880$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
  }, this);
  $animator$$inline_882$$.play();
  this.$_state$ = 1;
  $event$$inline_887_s$$8$$ = new D.$DvtPanZoomControlPanelEvent$$("hide");
  this.$FireListener$($event$$inline_887_s$$8$$)
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
D.$DvtPanZoomControlPanel$$.prototype.$getButtonImages$ = (0,D.$JSCompiler_get$$)("$_buttonImages$");
D.$JSCompiler_StaticMethods_enableZoomInControl$$ = function $$JSCompiler_StaticMethods_enableZoomInControl$$$($JSCompiler_StaticMethods_enableZoomInControl$self$$, $enabled$$) {
  $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$.$setEnabled$($enabled$$)
};
D.$JSCompiler_StaticMethods_enableZoomOutControl$$ = function $$JSCompiler_StaticMethods_enableZoomOutControl$$$($JSCompiler_StaticMethods_enableZoomOutControl$self$$, $enabled$$1$$) {
  $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$.$setEnabled$($enabled$$1$$)
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
D.$DvtPanZoomControlPanelResources$$ = function $$DvtPanZoomControlPanelResources$$$($parent$$51$$) {
  this.Init($parent$$51$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelResources$$, D.$DvtObj$$, "DvtPanZoomControlPanelResources");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomControlPanelResources$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($parent$$52$$) {
  $parent$$52$$ ? $parent$$52$$.$getAttr$ ? (this.$_controlPanelExpandTooltip$ = $parent$$52$$.$getAttr$("cpe"), this.$_controlPanelCollapseTooltip$ = $parent$$52$$.$getAttr$("cpc"), this.$_panControlCenterTooltip$ = $parent$$52$$.$getAttr$("pcc"), this.$_panControlTooltip$ = $parent$$52$$.$getAttr$("pc"), this.$_zoomToFitTooltip$ = $parent$$52$$.$getAttr$("ztf"), this.$_zoomInTooltip$ = $parent$$52$$.$getAttr$("zi"), this.$_zoomOutTooltip$ = $parent$$52$$.$getAttr$("zo"), this.$_panelCardTooltip$ = 
  $parent$$52$$.$getAttr$("pcs"), this.$_layoutHierVertTopTooltip$ = $parent$$52$$.$getAttr$("lhvt"), this.$_layoutHierHorzLeftTooltip$ = $parent$$52$$.$getAttr$("lhhl"), this.$_layoutTreeTooltip$ = $parent$$52$$.$getAttr$("lt"), this.$_layoutRadialTooltip$ = $parent$$52$$.$getAttr$("lr"), this.$_layoutCircleTooltip$ = $parent$$52$$.$getAttr$("lc"), this.$_layoutTooltip$ = $parent$$52$$.$getAttr$("lo")) : (this.$_controlPanelExpandTooltip$ = $parent$$52$$.cpe, this.$_controlPanelCollapseTooltip$ = 
  $parent$$52$$.cpc, this.$_panControlCenterTooltip$ = $parent$$52$$.pcc, this.$_panControlTooltip$ = $parent$$52$$.pc, this.$_zoomToFitTooltip$ = $parent$$52$$.ztf, this.$_zoomInTooltip$ = $parent$$52$$.zi, this.$_zoomOutTooltip$ = $parent$$52$$.zo, this.$_panelCardTooltip$ = $parent$$52$$.pcs, this.$_layoutHierVertTopTooltip$ = $parent$$52$$.lhvt, this.$_layoutHierHorzLeftTooltip$ = $parent$$52$$.lhhl, this.$_layoutTreeTooltip$ = $parent$$52$$.lt, this.$_layoutRadialTooltip$ = $parent$$52$$.lr, 
  this.$_layoutCircleTooltip$ = $parent$$52$$.lc, this.$_layoutTooltip$ = $parent$$52$$.lo) : (this.$_controlPanelExpandTooltip$ = "Show Control Panel (/)", this.$_controlPanelCollapseTooltip$ = "Hide (/)", this.$_panControlCenterTooltip$ = "Zoom and Center (Ctrl+Alt+0)", this.$_panControlTooltip$ = "Pan", this.$_zoomToFitTooltip$ = "Zoom to Fit (0)", this.$_zoomInTooltip$ = "Zoom In (+)", this.$_zoomOutTooltip$ = "Zoom Out (-)", this.$_panelCardTooltip$ = "View", this.$_layoutHierVertTopTooltip$ = 
  "Vertical, Top Down", this.$_layoutHierHorzLeftTooltip$ = "Horizontal, Left-to-Right", this.$_layoutTreeTooltip$ = "Tree", this.$_layoutRadialTooltip$ = "Radial", this.$_layoutCircleTooltip$ = "Circle", this.$_layoutTooltip$ = "Layout")
};
D.$JSCompiler_prototypeAlias$$.$getLayoutHierVertTopTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutHierVertTopTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutHierHorzLeftTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutHierHorzLeftTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutTreeTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutTreeTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutRadialTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutRadialTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutCircleTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutCircleTooltip$");
D.$JSCompiler_prototypeAlias$$.$getLayoutTooltip$ = (0,D.$JSCompiler_get$$)("$_layoutTooltip$");
D.$DvtPanZoomControlPanelEventManager$$ = function $$DvtPanZoomControlPanelEventManager$$$($context$$437$$, $callback$$87$$, $callbackObj$$60$$) {
  this.Init($context$$437$$, $callback$$87$$, $callbackObj$$60$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelEventManager$$, D.$DvtEventManager$$, "DvtPanZoomControlPanelEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomControlPanelEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$311$$) {
  var $obj$$241$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$311$$));
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$311$$);
  $obj$$241$$ && ($obj$$241$$.$HandleMouseDown$ && $obj$$241$$.$HandleMouseDown$($event$$311$$), $event$$311$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$312$$) {
  var $obj$$242$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$312$$));
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$312$$);
  $obj$$242$$ && ($obj$$242$$.$HandleMouseUp$ && $obj$$242$$.$HandleMouseUp$($event$$312$$), $event$$312$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$313$$) {
  var $obj$$243$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$313$$));
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$313$$);
  $obj$$243$$ && ($obj$$243$$.$HandleMouseOut$ && $obj$$243$$.$HandleMouseOut$($event$$313$$), $event$$313$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$314$$) {
  var $obj$$244$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$314$$));
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$314$$);
  $obj$$244$$ && ($obj$$244$$.$HandleMouseMove$ && $obj$$244$$.$HandleMouseMove$($event$$314$$), $event$$314$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$315$$) {
  var $obj$$245$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$315$$));
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $event$$315$$);
  $obj$$245$$ && ($obj$$245$$.$HandleClick$ && $obj$$245$$.$HandleClick$($event$$315$$), $event$$315$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$316$$) {
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$316$$);
  var $obj$$246$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$316$$));
  $obj$$246$$ && $obj$$246$$.$HandleRollOver$ && $obj$$246$$.$HandleRollOver$($event$$316$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$317$$) {
  D.$DvtPanZoomControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$317$$);
  var $obj$$247$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$317$$));
  $obj$$247$$ && $obj$$247$$.$HandleRollOut$ && $obj$$247$$.$HandleRollOut$($event$$317$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$318$$) {
  var $obj$$248$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$318$$));
  $obj$$248$$ && ($obj$$248$$.$HandleClick$ && $obj$$248$$.$HandleClick$($event$$318$$), $event$$318$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$319$$) {
  $event$$319$$.$blockTouchHold$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$319$$)
};
D.$DvtPanZoomControlPanelEventHandlerProxy$$ = function $$DvtPanZoomControlPanelEventHandlerProxy$$$($callback$$32$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$3$$) {
  this.Init($callback$$32$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomControlPanelEventHandlerProxy$$, D.$DvtObj$$, "DvtPanZoomControlPanelEventHandlerProxy");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomControlPanelEventHandlerProxy$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($callbackObj$$8$$, $handleClick$$1$$, $handleMouseDown$$1$$, $handleMouseUp$$1$$, $handleMouseOut$$1$$, $handleMouseOver$$1$$, $tooltip$$4$$) {
  this.$_callbackObj$ = $callbackObj$$8$$;
  this.$_handleClick$ = $handleClick$$1$$;
  this.$_handleMouseUp$ = $handleMouseUp$$1$$;
  this.$_handleMouseDown$ = $handleMouseDown$$1$$;
  this.$_handleMouseOut$ = $handleMouseOut$$1$$;
  this.$_handleMouseOver$ = $handleMouseOver$$1$$;
  this.$_tooltip$ = $tooltip$$4$$
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$47$$) {
  this.$_handleClick$ && this.$_handleClick$.call(this.$_callbackObj$, $event$$47$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$48$$) {
  this.$_handleMouseDown$ && this.$_handleMouseDown$.call(this.$_callbackObj$, $event$$48$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseUp$$($event$$49$$) {
  this.$_handleMouseUp$ && this.$_handleMouseUp$.call(this.$_callbackObj$, $event$$49$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$($event$$50$$) {
  this.$_handleMouseOut$ && this.$_handleMouseOut$.call(this.$_callbackObj$, $event$$50$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$($event$$51$$) {
  this.$_handleMouseOver$ && this.$_handleMouseOver$.call(this.$_callbackObj$, $event$$51$$)
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
D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewOpenShape$ = function $$DvtPanZoomControlPanelLAFUtils$$$$createEmptyViewOpenShape$$($context$$36_mc$$, $nw$$, $nh$$, $bL2R$$, $styleMap$$9$$) {
  $nw$$ || ($nw$$ = 86);
  $nh$$ || ($nh$$ = 47);
  $bL2R$$ === D.$JSCompiler_alias_VOID$$ && ($bL2R$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$1$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$9$$, "border-radius", 0));
  $context$$36_mc$$ = D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($context$$36_mc$$, $r$$1$$, $nw$$ - 2 * $r$$1$$, $nh$$ - 2 * $r$$1$$, $bL2R$$);
  $context$$36_mc$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$9$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$36_mc$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelper$ = function $$DvtPanZoomControlPanelLAFUtils$$$$makeViewOpenShapeHelper$$($context$$37$$, $r$$2$$, $ww$$5$$, $hh$$4$$, $bL2R$$1$$) {
  var $x$$63$$ = $ww$$5$$ + $r$$2$$, $y$$40$$ = $hh$$4$$ + $r$$2$$, $cmds$$ = window.DvtPathUtils.moveTo($x$$63$$ + $r$$2$$, $y$$40$$ + $r$$2$$), $cmds$$ = $cmds$$ + window.DvtPathUtils.lineTo($x$$63$$ - $ww$$5$$, $y$$40$$ + $r$$2$$), $x$$63$$ = $x$$63$$ - $ww$$5$$, $cmds$$ = $cmds$$ + window.DvtPathUtils.lineTo($x$$63$$ - $r$$2$$, $y$$40$$ + $r$$2$$), $cmds$$ = $cmds$$ + window.DvtPathUtils.lineTo($x$$63$$ - $r$$2$$, $y$$40$$ - $hh$$4$$), $y$$40$$ = $y$$40$$ - $hh$$4$$;
  $bL2R$$1$$ ? ($cmds$$ += window.DvtPathUtils.$quadTo$(-$r$$2$$ + $x$$63$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$2$$ + $y$$40$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$2$$ + $x$$63$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$2$$ + $y$$40$$) + window.DvtPathUtils.$quadTo$(-D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$2$$ + $x$$63$$, -$r$$2$$ + $y$$40$$, $x$$63$$, -$r$$2$$ + $y$$40$$) + window.DvtPathUtils.lineTo($x$$63$$, -$r$$2$$ + $y$$40$$), 
  $cmds$$ += window.DvtPathUtils.lineTo($x$$63$$ + $ww$$5$$ + $r$$2$$, -$r$$2$$ + $y$$40$$), $cmds$$ += window.DvtPathUtils.lineTo($x$$63$$ + $ww$$5$$ + $r$$2$$, $y$$40$$ + $hh$$4$$)) : ($cmds$$ += window.DvtPathUtils.lineTo($x$$63$$ - $r$$2$$, -$r$$2$$ + $y$$40$$), $cmds$$ += window.DvtPathUtils.lineTo($x$$63$$ + $ww$$5$$, -$r$$2$$ + $y$$40$$), $x$$63$$ += $ww$$5$$, $cmds$$ += window.DvtPathUtils.$quadTo$(D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$2$$ + $x$$63$$, -$r$$2$$ + $y$$40$$, D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * 
  $r$$2$$ + $x$$63$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$2$$ + $y$$40$$) + window.DvtPathUtils.$quadTo$($r$$2$$ + $x$$63$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$2$$ + $y$$40$$, $r$$2$$ + $x$$63$$, $y$$40$$) + window.DvtPathUtils.lineTo($x$$63$$ + $r$$2$$, $y$$40$$ + $hh$$4$$));
  $cmds$$ += window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$37$$, $cmds$$)
};
D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewClosedShape$ = function $$DvtPanZoomControlPanelLAFUtils$$$$createEmptyViewClosedShape$$($context$$38_mc$$1$$, $buttonHeight_nh$$1$$, $styleMap$$10$$, $arPoints_bR2L$$1_color$$5$$) {
  $buttonHeight_nh$$1$$ || ($buttonHeight_nh$$1$$ = 47);
  var $r$$3$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$10$$, "border-radius", 0)), $buttonWidth$$3$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$10$$, "openCloseButtonWidth", 0);
  $buttonHeight_nh$$1$$ = window.Math.max($buttonHeight_nh$$1$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$10$$, "buttonHeight", $buttonHeight_nh$$1$$));
  $arPoints_bR2L$$1_color$$5$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$3$$, $buttonHeight_nh$$1$$, $r$$3$$, $arPoints_bR2L$$1_color$$5$$);
  $arPoints_bR2L$$1_color$$5$$ = $arPoints_bR2L$$1_color$$5$$.concat("Z");
  $context$$38_mc$$1$$ = new D.$DvtPath$$($context$$38_mc$$1$$, $arPoints_bR2L$$1_color$$5$$, "cls_shape");
  ($arPoints_bR2L$$1_color$$5$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$10$$, "tab-color-inactive", D.$JSCompiler_alias_NULL$$)) || ($arPoints_bR2L$$1_color$$5$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$10$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $context$$38_mc$$1$$.$setSolidFill$($arPoints_bR2L$$1_color$$5$$);
  return $context$$38_mc$$1$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$createEmptyViewClosedFrame$ = function $$DvtPanZoomControlPanelLAFUtils$$$$createEmptyViewClosedFrame$$($context$$39_mc$$2$$, $buttonHeight$$1_nh$$2$$, $styleMap$$11$$, $arPoints$$1_bR2L$$2$$) {
  $buttonHeight$$1_nh$$2$$ || ($buttonHeight$$1_nh$$2$$ = 47);
  var $r$$4$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$11$$, "border-radius", 0)), $buttonWidth$$4$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$11$$, "openCloseButtonWidth", 0);
  $buttonHeight$$1_nh$$2$$ = window.Math.max($buttonHeight$$1_nh$$2$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$11$$, "buttonHeight", $buttonHeight$$1_nh$$2$$));
  $arPoints$$1_bR2L$$2$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$4$$, $buttonHeight$$1_nh$$2$$, $r$$4$$, $arPoints$$1_bR2L$$2$$);
  $arPoints$$1_bR2L$$2$$ = $arPoints$$1_bR2L$$2$$.concat("Z");
  $context$$39_mc$$2$$ = new D.$DvtPath$$($context$$39_mc$$2$$, $arPoints$$1_bR2L$$2$$, "cls_shape");
  $context$$39_mc$$2$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$11$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $context$$39_mc$$2$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $context$$39_mc$$2$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$renderEmptyZoomShape$ = function $$DvtPanZoomControlPanelLAFUtils$$$$renderEmptyZoomShape$$($context$$40_mc$$3$$, $nh$$3$$, $styleMap$$12$$, $openSide$$1$$, $openSideSize$$) {
  $nh$$3$$ || ($nh$$3$$ = 137);
  var $r$$5$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$12$$, "border-radius", 0)), $cpWidth$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$12$$, "tabSize", 0), $ww$$6$$ = $cpWidth$$1$$ - 2 * $r$$5$$, $hh$$5$$ = $nh$$3$$ + 7 - 2 * $r$$5$$;
  $context$$40_mc$$3$$ = $openSide$$1$$ && $openSideSize$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$40_mc$$3$$, $r$$5$$, $cpWidth$$1$$, $nh$$3$$, $openSide$$1$$, $openSideSize$$) : D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$40_mc$$3$$, $r$$5$$, $ww$$6$$, $hh$$5$$);
  $context$$40_mc$$3$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$12$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$40_mc$$3$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$renderEmptyZoomFrame$ = function $$DvtPanZoomControlPanelLAFUtils$$$$renderEmptyZoomFrame$$($context$$41$$, $nh$$4$$, $roundBottomRight$$, $styleMap$$13$$, $openSide$$2$$, $openSideSize$$1$$) {
  $nh$$4$$ || ($nh$$4$$ = 137);
  $roundBottomRight$$ || ($roundBottomRight$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$6$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$13$$, "border-radius", 0)), $cpWidth$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$13$$, "tabSize", 0), $ww$$7$$ = $cpWidth$$2$$ - 2 * $r$$6$$, $hh$$6$$ = $nh$$4$$ + 7 - 2 * $r$$6$$, $mc$$4$$ = D.$JSCompiler_alias_NULL$$, $mc$$4$$ = $openSide$$2$$ && $openSideSize$$1$$ ? D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$41$$, $r$$6$$, $cpWidth$$2$$, $nh$$4$$, $openSide$$2$$, $openSideSize$$1$$) : 
  D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$41$$, $r$$6$$, $ww$$7$$, $hh$$6$$, $roundBottomRight$$);
  $mc$$4$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$13$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $mc$$4$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $mc$$4$$
};
D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelper$ = function $$DvtPanZoomControlPanelLAFUtils$$$$makeZoomShapeHelper$$($context$$42$$, $r$$7$$, $ww$$8$$, $hh$$7$$, $roundBottomRight$$1$$) {
  $roundBottomRight$$1$$ || ($roundBottomRight$$1$$ = D.$JSCompiler_alias_TRUE$$);
  var $x$$64$$ = $ww$$8$$ + $r$$7$$, $y$$41$$ = $hh$$7$$, $cmds$$1$$ = window.DvtPathUtils.moveTo($x$$64$$ + $r$$7$$, $y$$41$$), $cmds$$1$$ = $roundBottomRight$$1$$ ? $cmds$$1$$ + (window.DvtPathUtils.$quadTo$($r$$7$$ + $x$$64$$, D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$7$$ + $y$$41$$, D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$7$$ + $x$$64$$, D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$7$$ + $y$$41$$) + window.DvtPathUtils.$quadTo$(D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * 
  $r$$7$$ + $x$$64$$, $r$$7$$ + $y$$41$$, $x$$64$$, $r$$7$$ + $y$$41$$) + window.DvtPathUtils.lineTo($x$$64$$, $r$$7$$ + $y$$41$$)) : $cmds$$1$$ + window.DvtPathUtils.lineTo($x$$64$$ + $r$$7$$, $y$$41$$ + $r$$7$$), $cmds$$1$$ = $cmds$$1$$ + window.DvtPathUtils.lineTo($x$$64$$ - $ww$$8$$, $r$$7$$ + $y$$41$$), $x$$64$$ = $x$$64$$ - $ww$$8$$, $cmds$$1$$ = $cmds$$1$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$7$$ + $x$$64$$, $r$$7$$ + $y$$41$$, -D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * 
  $r$$7$$ + $x$$64$$, D.$DvtPanZoomControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$7$$ + $y$$41$$) + window.DvtPathUtils.$quadTo$(-$r$$7$$ + $x$$64$$, D.$DvtPanZoomControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$7$$ + $y$$41$$, -$r$$7$$ + $x$$64$$, $y$$41$$) + window.DvtPathUtils.lineTo(-$r$$7$$ + $x$$64$$, $y$$41$$) + window.DvtPathUtils.lineTo(-$r$$7$$ + $x$$64$$, $y$$41$$ - $hh$$7$$)), $y$$41$$ = $y$$41$$ - $hh$$7$$, $cmds$$1$$ = $cmds$$1$$ + (window.DvtPathUtils.lineTo($x$$64$$ + $ww$$8$$ + $r$$7$$, $y$$41$$) + 
  window.DvtPathUtils.lineTo($x$$64$$ + $ww$$8$$ + $r$$7$$, $y$$41$$ + $hh$$7$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$42$$, $cmds$$1$$)
};
D.$DvtPanZoomControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$ = function $$DvtPanZoomControlPanelLAFUtils$$$$makeZoomShapeHelperOpenSide$$($context$$43$$, $arPoints$$2_r$$8$$, $width$$17$$, $height$$17$$, $openSide$$3$$, $openSideSize$$2$$) {
  $arPoints$$2_r$$8$$ = D.$DvtPanZoomControlPanelLAFUtils$$.$GetShapePathCommands$($width$$17$$, $height$$17$$, $arPoints$$2_r$$8$$, $openSide$$3$$, $openSideSize$$2$$);
  return new D.$DvtPath$$($context$$43$$, $arPoints$$2_r$$8$$)
};
D.$DvtPanZoomControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$ = function $$DvtPanZoomControlPanelLAFUtils$$$$makeViewOpenShapeHelperOpenSide$$($context$$44$$, $arPoints$$3_r$$9$$, $width$$18$$, $height$$18$$, $openSide$$4$$, $openSideSize$$3$$) {
  $arPoints$$3_r$$9$$ = D.$DvtPanZoomControlPanelLAFUtils$$.$GetShapePathCommands$($width$$18$$, $height$$18$$, $arPoints$$3_r$$9$$, $openSide$$4$$, $openSideSize$$3$$);
  return new D.$DvtPath$$($context$$44$$, $arPoints$$3_r$$9$$)
};
D.$DvtPanZoomControlPanelLAFUtils$$.$GetShapePathCommands$ = function $$DvtPanZoomControlPanelLAFUtils$$$$GetShapePathCommands$$($width$$19$$, $height$$19$$, $r$$10$$, $openSide$$5$$, $openSideSize$$4$$) {
  var $arPoints$$4$$, $bidi$$ = D.$DvtAgent$$.$isRightToLeft$();
  $openSide$$5$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_TOP$ && !$bidi$$ && ($arPoints$$4$$ = ["M", $width$$19$$, 0, "L", $width$$19$$, $height$$19$$ - $r$$10$$, "A", $r$$10$$, $r$$10$$, 0, 0, 1, $width$$19$$ - $r$$10$$, $height$$19$$, "L", 0, $height$$19$$, "L", 0, 0]);
  $openSide$$5$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_TOP$ && $bidi$$ ? $arPoints$$4$$ = ["M", $width$$19$$, 0, "L", $width$$19$$, $height$$19$$, "L", $r$$10$$, $height$$19$$, "A", $r$$10$$, $r$$10$$, 0, 0, 1, 0, $height$$19$$ - $r$$10$$, "L", 0, 0] : $openSide$$5$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_RIGHT$ && !$bidi$$ ? $arPoints$$4$$ = ["M", $width$$19$$, $openSideSize$$4$$, "L", $width$$19$$, $height$$19$$ - $r$$10$$, "A", $r$$10$$, $r$$10$$, 0, 0, 1, $width$$19$$ - $r$$10$$, 
  $height$$19$$, "L", 0, $height$$19$$, "L", 0, 0, "L", $width$$19$$, 0] : $openSide$$5$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_RIGHT$ && $bidi$$ ? $arPoints$$4$$ = ["M", 0, 0, "L", $width$$19$$, 0, "L", $width$$19$$, $height$$19$$, "L", $r$$10$$, $height$$19$$, "A", $r$$10$$, $r$$10$$, 0, 0, 1, 0, $height$$19$$ - $r$$10$$, "L", 0, $openSideSize$$4$$] : $openSide$$5$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_LEFT$ && !$bidi$$ ? $arPoints$$4$$ = ["M", 0, 0, "L", $width$$19$$ - $r$$10$$, 
  0, "A", $r$$10$$, $r$$10$$, 0, 0, 1, $width$$19$$, $r$$10$$, "L", $width$$19$$, $height$$19$$ - $r$$10$$, "A", $r$$10$$, $r$$10$$, 0, 0, 1, $width$$19$$ - $r$$10$$, $height$$19$$, "L", 0, $height$$19$$] : $openSide$$5$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_LEFT$ && $bidi$$ ? $arPoints$$4$$ = ["M", $width$$19$$, $height$$19$$, "L", $r$$10$$, $height$$19$$, "A", $r$$10$$, $r$$10$$, 0, 0, 1, 0, $height$$19$$ - $r$$10$$, "L", 0, $r$$10$$, "A", $r$$10$$, $r$$10$$, 0, 0, 1, $r$$10$$, 0, "L", 
  $width$$19$$, 0] : $openSide$$5$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_BOTTOM$ && !$bidi$$ ? $arPoints$$4$$ = ["M", 0, $height$$19$$, "L", 0, 0, "L", $width$$19$$ - $r$$10$$, 0, "A", $r$$10$$, $r$$10$$, 0, 0, 1, $width$$19$$, $r$$10$$, "L", $width$$19$$, $height$$19$$ - $r$$10$$, "A", $r$$10$$, $r$$10$$, 0, 0, 1, $width$$19$$ - $r$$10$$, $height$$19$$, "L", $openSideSize$$4$$, $height$$19$$] : $openSide$$5$$ == D.$DvtPanZoomControlPanelLAFUtils$$.$OPEN_BOTTOM$ && $bidi$$ && ($arPoints$$4$$ = 
  ["M", $width$$19$$, $height$$19$$, "L", $width$$19$$, 0, "L", $r$$10$$, 0, "A", $r$$10$$, $r$$10$$, 0, 0, 0, 0, $r$$10$$, "L", 0, $height$$19$$ - $r$$10$$, "A", $r$$10$$, $r$$10$$, 0, 0, 0, $r$$10$$, $height$$19$$, "L", $width$$19$$ - $openSideSize$$4$$, $height$$19$$]);
  return $arPoints$$4$$
};
D.$DvtAbstractComponent$$ = function $$DvtAbstractComponent$$$($context$$442$$) {
  this.Init($context$$442$$)
};
(0,D.$goog$exportSymbol$$)("DvtAbstractComponent", D.$DvtAbstractComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractComponent$$, D.$DvtContainer$$, "DvtAbstractComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAbstractComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$443$$) {
  D.$DvtAbstractComponent$$.$superclass$.Init.call(this, $context$$443$$);
  this.$_backgroundPane$ = new D.$DvtRect$$($context$$443$$, 0, 0, 0, 0);
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
D.$JSCompiler_prototypeAlias$$.$loadXml$ = function $$JSCompiler_prototypeAlias$$$$loadXml$$($rootXmlNode$$3_xmlString$$13$$, $eventType$$14$$, $paramKeys$$2$$, $paramValues$$2$$) {
  var $parser$$5$$ = new D.$DvtXmlParser$$;
  if($parser$$5$$ && ($rootXmlNode$$3_xmlString$$13$$ = $parser$$5$$.parse($rootXmlNode$$3_xmlString$$13$$))) {
    if("r" === $rootXmlNode$$3_xmlString$$13$$.getName() && ($rootXmlNode$$3_xmlString$$13$$ = $rootXmlNode$$3_xmlString$$13$$.getFirstChild()), $rootXmlNode$$3_xmlString$$13$$) {
      switch($eventType$$14$$) {
        default:
          this.$LoadXmlInitial$($eventType$$14$$, $rootXmlNode$$3_xmlString$$13$$, $paramKeys$$2$$, $paramValues$$2$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$loadJson$ = function $$JSCompiler_prototypeAlias$$$$loadJson$$($jsonObj$$1$$, $eventType$$15$$, $paramKeys$$3$$, $paramValues$$3$$) {
  if($jsonObj$$1$$) {
    switch($eventType$$15$$) {
      default:
        this.$LoadJsonInitial$($eventType$$15$$, $jsonObj$$1$$, $paramKeys$$3$$, $paramValues$$3$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$LoadXmlInitial$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$LoadJsonInitial$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($xmlString$$14$$, $width$$64$$, $height$$58$$) {
  this.$_width$ = $width$$64$$;
  this.$_height$ = $height$$58$$;
  this.$_backgroundPane$.$setWidth$(this.$_width$);
  this.$_backgroundPane$.$setHeight$(this.$_height$);
  $xmlString$$14$$ ? $xmlString$$14$$ = this.$ProcessJSON$($xmlString$$14$$) : this.$_bRenderNullXml$ = D.$JSCompiler_alias_TRUE$$;
  this.$loadXml$($xmlString$$14$$);
  this.$renderComponent$();
  this.$_bRenderNullXml$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtAbstractComponent$$.prototype.render = D.$DvtAbstractComponent$$.prototype.$render$;
D.$DvtAbstractComponent$$.prototype.$renderJson$ = function $$DvtAbstractComponent$$$$$renderJson$$($jsonObj$$4$$, $width$$65$$, $height$$59$$) {
  this.$_width$ = $width$$65$$;
  this.$_height$ = $height$$59$$;
  this.$_backgroundPane$.$setWidth$(this.$_width$);
  this.$_backgroundPane$.$setHeight$(this.$_height$);
  $jsonObj$$4$$ ? $jsonObj$$4$$ = this.$ProcessJSON$($jsonObj$$4$$) : this.$_bRenderNullXml$ = D.$JSCompiler_alias_TRUE$$;
  this.$loadJson$($jsonObj$$4$$);
  this.$renderComponent$();
  this.$_bRenderNullXml$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtAbstractComponent$$.prototype.renderJson = D.$DvtAbstractComponent$$.prototype.$renderJson$;
D.$DvtAbstractComponent$$.prototype.$RenderBackground$ = function $$DvtAbstractComponent$$$$$RenderBackground$$() {
  if(this.$_compCSSStyle$) {
    var $fill$$23_fillType$$inline_3794$$;
    var $bgColor$$inline_3795_compCSSStyle$$inline_3793$$ = this.$_compCSSStyle$;
    $bgColor$$inline_3795_compCSSStyle$$inline_3793$$ ? ($fill$$23_fillType$$inline_3794$$ = $bgColor$$inline_3795_compCSSStyle$$inline_3793$$.$getStyle$("fill-type"), ($bgColor$$inline_3795_compCSSStyle$$inline_3793$$ = $bgColor$$inline_3795_compCSSStyle$$inline_3793$$.$getStyle$("background-color")) || ($bgColor$$inline_3795_compCSSStyle$$inline_3793$$ = "#7396C8"), $fill$$23_fillType$$inline_3794$$ = "solid" == $fill$$23_fillType$$inline_3794$$ ? new D.$DvtSolidFill$$($bgColor$$inline_3795_compCSSStyle$$inline_3793$$) : 
    (0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, $bgColor$$inline_3795_compCSSStyle$$inline_3793$$)) : $fill$$23_fillType$$inline_3794$$ = D.$JSCompiler_alias_VOID$$;
    $fill$$23_fillType$$inline_3794$$ && this.$_backgroundPane$.$setFill$($fill$$23_fillType$$inline_3794$$)
  }else {
    "none" != this.$_backgroundColor$ ? ($fill$$23_fillType$$inline_3794$$ = (0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, this.$_backgroundColor$), this.$_backgroundPane$.$setFill$($fill$$23_fillType$$inline_3794$$)) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_backgroundPane$)
  }
};
D.$JSCompiler_StaticMethods__getBackgroundGradient$$ = function $$JSCompiler_StaticMethods__getBackgroundGradient$$$($JSCompiler_StaticMethods__getBackgroundGradient$self$$, $color$$39$$) {
  var $arColors$$15_newColor_rrRatio$$1$$, $arAlphas$$16_bgAlpha$$2$$ = 1;
  if($color$$39$$ && "#7396C8" != $color$$39$$) {
    $arAlphas$$16_bgAlpha$$2$$ = D.$DvtColorUtils$$.$getAlpha$($color$$39$$);
    $arColors$$15_newColor_rrRatio$$1$$ = (D.$DvtColorUtils$$.$getRed$("#AECDEA") - D.$DvtColorUtils$$.$getRed$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getRed$("#7396C8"));
    var $arStops$$14_bgRgb_ggRatio$$1$$ = (D.$DvtColorUtils$$.$getGreen$("#AECDEA") - D.$DvtColorUtils$$.$getGreen$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getGreen$("#7396C8")), $bbRatio$$1_gw$$ = (D.$DvtColorUtils$$.$getBlue$("#AECDEA") - D.$DvtColorUtils$$.$getBlue$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getBlue$("#7396C8")), $gh_rr$$2$$ = D.$DvtColorUtils$$.$getRed$($color$$39$$), $gg$$2_gx_ww$$60$$ = D.$DvtColorUtils$$.$getGreen$($color$$39$$), $bb$$2_cx$$22$$ = D.$DvtColorUtils$$.$getBlue$($color$$39$$);
    $arColors$$15_newColor_rrRatio$$1$$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($gh_rr$$2$$ + $arColors$$15_newColor_rrRatio$$1$$ * (255 - $gh_rr$$2$$)), window.Math.round($gg$$2_gx_ww$$60$$ + $arStops$$14_bgRgb_ggRatio$$1$$ * (255 - $gg$$2_gx_ww$$60$$)), window.Math.round($bb$$2_cx$$22$$ + $bbRatio$$1_gw$$ * (255 - $bb$$2_cx$$22$$)));
    $arStops$$14_bgRgb_ggRatio$$1$$ = D.$DvtColorUtils$$.$getRGB$($color$$39$$);
    $arColors$$15_newColor_rrRatio$$1$$ = ["#FFFFFF", "#FFFFFF", $arColors$$15_newColor_rrRatio$$1$$, $arStops$$14_bgRgb_ggRatio$$1$$]
  }else {
    $arColors$$15_newColor_rrRatio$$1$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
  }
  var $arAlphas$$16_bgAlpha$$2$$ = [$arAlphas$$16_bgAlpha$$2$$, $arAlphas$$16_bgAlpha$$2$$, $arAlphas$$16_bgAlpha$$2$$, $arAlphas$$16_bgAlpha$$2$$], $arStops$$14_bgRgb_ggRatio$$1$$ = [0, 45 / 255, 190 / 255, 1], $gg$$2_gx_ww$$60$$ = $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_width$, $bbRatio$$1_gw$$ = 1.7 * 1.7 * $gg$$2_gx_ww$$60$$, $gh_rr$$2$$ = 1.7 * $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_height$, $gg$$2_gx_ww$$60$$ = 0 + ($gg$$2_gx_ww$$60$$ - $bbRatio$$1_gw$$) / 
  2, $bb$$2_cx$$22$$ = $gg$$2_gx_ww$$60$$ + $bbRatio$$1_gw$$ / 2, $cy$$23$$ = -35 + $gh_rr$$2$$ / 2, $r$$50$$ = 1.5 * window.Math.min($bbRatio$$1_gw$$ / 2, $gh_rr$$2$$ / 2);
  return new D.$DvtRadialGradientFill$$($arColors$$15_newColor_rrRatio$$1$$, $arAlphas$$16_bgAlpha$$2$$, $arStops$$14_bgRgb_ggRatio$$1$$, $bb$$2_cx$$22$$, $cy$$23$$, $r$$50$$, [$gg$$2_gx_ww$$60$$, -35, $bbRatio$$1_gw$$, $gh_rr$$2$$])
};
D.$JSCompiler_StaticMethods_getResourcesMap$$ = function $$JSCompiler_StaticMethods_getResourcesMap$$$($JSCompiler_StaticMethods_getResourcesMap$self$$) {
  $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ || ($JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ = {});
  return $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$
};
D.$DvtAbstractComponent$$.prototype.$setSkinName$ = (0,D.$JSCompiler_set$$)("$_skinName$");
D.$DvtAbstractComponent$$.prototype.$getControlPanelStyleMap$ = (0,D.$JSCompiler_get$$)("$_controlPanelStyleMap$");
D.$JSCompiler_StaticMethods_parseComponentAttrs$$ = function $$JSCompiler_StaticMethods_parseComponentAttrs$$$($JSCompiler_StaticMethods_parseComponentAttrs$self$$, $xmlNode$$21$$) {
  var $compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$;
  $compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$ = (0,D.$JSCompiler_StaticMethods_parseComponentStyle$$)($xmlNode$$21$$.$getAttr$("skinStyle"), D.$JSCompiler_alias_NULL$$);
  if($compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$ = (0,D.$JSCompiler_StaticMethods_parseComponentStyle$$)($xmlNode$$21$$.$getAttr$("inlineStyle"), $compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$)) {
    $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_compCSSStyle$ = $compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$
  }
  var $cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$ = {};
  if($compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$ = $xmlNode$$21$$.$getAttr$("skin")) {
    $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$setSkinName$($compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$), $cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$.skin = $compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$
  }
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "background-color", $xmlNode$$21$$.$getAttr$("cpBackgroundColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "border-color", $xmlNode$$21$$.$getAttr$("cpBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "border-radius", $xmlNode$$21$$.$getAttr$("cpBorderRadius"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "box-shadow", $xmlNode$$21$$.$getAttr$("cpBoxShadow"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "tab-color-inactive", $xmlNode$$21$$.$getAttr$("tabBgColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "tab-border-color-inactive", $xmlNode$$21$$.$getAttr$("tabBorderColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "scrollbarBackground", $xmlNode$$21$$.$getAttr$("scrollbarBg"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "scrollbarBorderColor", $xmlNode$$21$$.$getAttr$("scrollbarBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "scrollbarHandleColor", $xmlNode$$21$$.$getAttr$("scrollbarHandleColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "scrollbarHandleActiveColor", $xmlNode$$21$$.$getAttr$("scrollbarHandleActiveColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$, "scrollbarHandleHoverColor", $xmlNode$$21$$.$getAttr$("scrollbarHandleHoverColor"));
  $cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$ = D.$DvtPanZoomControlPanelDefaults$$.$calcOptions$($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_controlPanelStyleMap$ = $cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$;
  $cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$ = {};
  $compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$ && ($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$.skin = $compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$);
  $compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$ = D.$DvtCommonLegendDefaults$$.$calcOptions$($cpStyleMap$$inline_3805_legendStyleMap$$inline_3807$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_legendStyleMap$ = $compCSSStyle$$2_skinName$$inline_3806_styleMap$$inline_9422$$
};
D.$JSCompiler_StaticMethods_parseComponentStyle$$ = function $$JSCompiler_StaticMethods_parseComponentStyle$$$($attr$$26$$, $compCSSStyle$$3$$) {
  $attr$$26$$ && ($compCSSStyle$$3$$ ? $compCSSStyle$$3$$.$merge$(new D.$DvtCSSStyle$$($attr$$26$$)) : $compCSSStyle$$3$$ = new D.$DvtCSSStyle$$($attr$$26$$));
  return $compCSSStyle$$3$$
};
D.$DvtAbstractComponent$$.prototype.$ProcessJSON$ = (0,D.$JSCompiler_identityFn$$)();
D.$DvtAbstractPanZoomComponent$$ = function $$DvtAbstractPanZoomComponent$$$($context$$438$$) {
  this.Init($context$$438$$)
};
(0,D.$goog$exportSymbol$$)("DvtAbstractPanZoomComponent", D.$DvtAbstractPanZoomComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractPanZoomComponent$$, D.$DvtAbstractComponent$$, "DvtAbstractPanZoomComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAbstractPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$439$$) {
  D.$DvtAbstractPanZoomComponent$$.$superclass$.Init.call(this, $context$$439$$);
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
    var $controlPanel$$1$$ = this.$_panZoomCanvas$.$_controlPanel$;
    $controlPanel$$1$$ && $controlPanel$$1$$.$addEvtListener$("dvtPZCPExpand", this.$HandleControlPanelEvent$, D.$JSCompiler_alias_FALSE$$, this)
  }
  this.$SetClipRect$(this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$CreatePanZoomCanvas$ = function $$JSCompiler_prototypeAlias$$$$CreatePanZoomCanvas$$($ww$$54$$, $hh$$47$$) {
  var $JSCompiler_temp_const$$511_pzc$$1$$ = this.$_context$, $JSCompiler_temp_const$$510$$ = this.$getButtonImages$(), $JSCompiler_inline_result$$512$$;
  a: {
    switch(this.$_controlPanelBehavior$) {
      case "initCollapsed":
        $JSCompiler_inline_result$$512$$ = 0;
        break a;
      case "initExpanded":
        $JSCompiler_inline_result$$512$$ = 1;
        break a;
      default:
        $JSCompiler_inline_result$$512$$ = 2
    }
  }
  $JSCompiler_temp_const$$511_pzc$$1$$ = new D.$DvtPanZoomCanvas$$($JSCompiler_temp_const$$511_pzc$$1$$, $JSCompiler_temp_const$$510$$, $ww$$54$$, $hh$$47$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_inline_result$$512$$, this.$getPanZoomResources$(), this.$_displayedControls$, this);
  $JSCompiler_temp_const$$511_pzc$$1$$.$addEvtListener$("dvtPan", this.$HandlePanEvent$, D.$JSCompiler_alias_FALSE$$, this);
  $JSCompiler_temp_const$$511_pzc$$1$$.$addEvtListener$("dvtZoom", this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addChildAt$($JSCompiler_temp_const$$511_pzc$$1$$, 1);
  return $JSCompiler_temp_const$$511_pzc$$1$$
};
D.$JSCompiler_prototypeAlias$$.$HandleControlPanelEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_getPanZoomCanvas$$ = function $$JSCompiler_StaticMethods_getPanZoomCanvas$$$($JSCompiler_StaticMethods_getPanZoomCanvas$self$$) {
  return $JSCompiler_StaticMethods_getPanZoomCanvas$self$$.$_panZoomCanvas$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAbstractPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$11$$, $dy$$14$$, $animator$$17$$) {
  this.$_panZoomCanvas$.$panBy$($dx$$11$$, $dy$$14$$, $animator$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$panTo$ = function $$JSCompiler_prototypeAlias$$$$panTo$$($xx$$43$$, $yy$$42$$, $animator$$18$$) {
  this.$_panZoomCanvas$.$panTo$($xx$$43$$, $yy$$42$$, $animator$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$3$$, $xx$$44$$, $yy$$43$$, $animator$$19$$) {
  this.$_panZoomCanvas$.$zoomBy$($dz$$3$$, $xx$$44$$, $yy$$43$$, $animator$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$zoomTo$ = function $$JSCompiler_prototypeAlias$$$$zoomTo$$($zz$$, $xx$$45$$, $yy$$44$$, $animator$$20$$) {
  this.$_panZoomCanvas$.$zoomTo$($zz$$, $xx$$45$$, $yy$$44$$, $animator$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$zoomToFit$ = function $$JSCompiler_prototypeAlias$$$$zoomToFit$$($animator$$21$$) {
  this.$_panZoomCanvas$.$zoomToFit$($animator$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$getPanZoomResources$ = (0,D.$JSCompiler_get$$)("$_panZoomResources$");
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = (0,D.$JSCompiler_set$$)("$_featuresOff$");
D.$JSCompiler_prototypeAlias$$.$isChangeLayoutOff$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$getResources$ = (0,D.$JSCompiler_get$$)("$_resources$");
D.$JSCompiler_prototypeAlias$$.$setResources$ = (0,D.$JSCompiler_set$$)("$_resources$");
D.$JSCompiler_prototypeAlias$$.$setButtonImages$ = (0,D.$JSCompiler_set$$)("$_buttonImages$");
D.$JSCompiler_prototypeAlias$$.$getButtonImages$ = (0,D.$JSCompiler_get$$)("$_buttonImages$");
D.$JSCompiler_prototypeAlias$$.$isMouseWheelHandled$ = function $$JSCompiler_prototypeAlias$$$$isMouseWheelHandled$$() {
  return this.$_panZoomCanvas$.$_bZoomingEnabled$ && 0 == (this.$_featuresOff$ & 2)
};
D.$DvtAbstractPanZoomComponent$$.prototype.isMouseWheelHandled = D.$DvtAbstractPanZoomComponent$$.prototype.$isMouseWheelHandled$;
D.$DvtAbstractPanZoomComponent$$.prototype.$SetClipRect$ = function $$DvtAbstractPanZoomComponent$$$$$SetClipRect$$($ww$$55$$, $hh$$48$$) {
  var $clipPath$$5$$ = new D.$DvtClipPath$$("comp");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$5$$, this.$getTranslateX$(), this.$getTranslateY$(), $ww$$55$$, $hh$$48$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$5$$)
};
D.$DvtPanZoomCanvas$$ = function $$DvtPanZoomCanvas$$$($context$$440$$, $buttonImages$$6$$, $ww$$56$$, $hh$$49$$, $id$$168$$, $controlPanelState$$, $controlPanelResources$$, $displayedControls$$1$$, $view$$13$$) {
  this.Init($context$$440$$, $buttonImages$$6$$, $ww$$56$$, $hh$$49$$, $id$$168$$, $controlPanelState$$, $controlPanelResources$$, $displayedControls$$1$$, $view$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvas$$, D.$DvtContainer$$, "DvtPanZoomCanvas");
D.$DvtPanZoomCanvas$$.prototype.Init = function $$DvtPanZoomCanvas$$$$Init$($context$$441$$, $buttonImages$$7$$, $ww$$57$$, $hh$$50$$, $id$$169$$, $controlPanelState$$1$$, $controlPanelResources$$1$$, $displayedControls$$2$$, $view$$14$$) {
  D.$DvtPanZoomCanvas$$.$superclass$.Init.call(this, $context$$441$$, D.$JSCompiler_alias_NULL$$, $id$$169$$);
  this.$_view$ = $view$$14$$;
  this.$_ww$ = $ww$$57$$;
  this.$_hh$ = $hh$$50$$;
  this.$_buttonImages$ = $buttonImages$$7$$;
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
  this.$_eventManager$ = new D.$DvtPanZoomCanvasEventManager$$($context$$441$$, this.$FireListener$, this);
  this.$_eventManager$.$addListeners$(this);
  this.$_clipIdSuffix$ = 1;
  this.$SetClipRect$($ww$$57$$, $hh$$50$$);
  this.$_bElasticConstraints$ = D.$JSCompiler_alias_FALSE$$;
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtPanZoomCanvas$$.prototype.$setSize$ = function $$DvtPanZoomCanvas$$$$$setSize$$($ww$$58$$, $hh$$51$$, $bAdjustSizeOnly$$) {
  this.$_ww$ = $ww$$58$$;
  this.$_hh$ = $hh$$51$$;
  $bAdjustSizeOnly$$ || (this.$_backgroundPane$.$setWidth$($ww$$58$$), this.$_backgroundPane$.$setHeight$($hh$$51$$), this.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), this.$SetClipRect$($ww$$58$$, $hh$$51$$))
};
D.$DvtPanZoomCanvas$$.prototype.$getSize$ = function $$DvtPanZoomCanvas$$$$$getSize$$() {
  return new D.$DvtDimension$$(this.$_ww$, this.$_hh$)
};
D.$DvtPanZoomCanvas$$.prototype.$SetClipRect$ = function $$DvtPanZoomCanvas$$$$$SetClipRect$$($ww$$59$$, $hh$$52$$) {
  var $clipPath$$6$$ = new D.$DvtClipPath$$("pzc");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$6$$, this.$getTranslateX$(), this.$getTranslateY$(), $ww$$59$$, $hh$$52$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$6$$)
};
D.$JSCompiler_StaticMethods_getContentPane$$ = function $$JSCompiler_StaticMethods_getContentPane$$$($JSCompiler_StaticMethods_getContentPane$self$$) {
  return $JSCompiler_StaticMethods_getContentPane$self$$.$_contentPane$
};
D.$JSCompiler_StaticMethods_getContentPaneMatrix$$ = function $$JSCompiler_StaticMethods_getContentPaneMatrix$$$($JSCompiler_StaticMethods_getContentPaneMatrix$self$$, $animator$$22$$) {
  if($animator$$22$$) {
    var $mat$$32$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$22$$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$);
    if($mat$$32$$) {
      return $mat$$32$$
    }
  }
  return $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvas$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getZoom$ = function $$JSCompiler_prototypeAlias$$$$getZoom$$($animator$$23$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$23$$).$_a$
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$12_mat$$33$$, $deltaX$$5_dy$$15_fireStartEventFunc$$, $animator$$26$$) {
  if(this.$_bPanningEnabled$) {
    var $oldX$$4$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$26$$).$_tx$, $oldY$$4$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$26$$).$_ty$, $newX$$5$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $oldX$$4$$ + $dx$$12_mat$$33$$), $newY$$5$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $oldY$$4$$ + $deltaX$$5_dy$$15_fireStartEventFunc$$);
    $deltaX$$5_dy$$15_fireStartEventFunc$$ = $newX$$5$$ - $oldX$$4$$;
    var $deltaY$$5_fireEndEventFunc$$ = $newY$$5$$ - $oldY$$4$$;
    $dx$$12_mat$$33$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$26$$ && ($dx$$12_mat$$33$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$26$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($dx$$12_mat$$33$$ = $dx$$12_mat$$33$$.clone());
    $dx$$12_mat$$33$$ || ($dx$$12_mat$$33$$ = this.$_contentPane$.$getMatrix$().clone());
    $dx$$12_mat$$33$$.translate($deltaX$$5_dy$$15_fireStartEventFunc$$, $deltaY$$5_fireEndEventFunc$$);
    var $thisRef$$12$$ = this;
    $deltaX$$5_dy$$15_fireStartEventFunc$$ = function $$deltaX$$5_dy$$15_fireStartEventFunc$$$() {
      var $dx$$12_mat$$33$$ = new D.$DvtPanEvent$$("panning", $newX$$5$$, $newY$$5$$, $oldX$$4$$, $oldY$$4$$, $animator$$26$$);
      $thisRef$$12$$.$FireListener$($dx$$12_mat$$33$$)
    };
    $deltaY$$5_fireEndEventFunc$$ = function $$deltaY$$5_fireEndEventFunc$$$() {
      var $dx$$12_mat$$33$$ = new D.$DvtPanEvent$$("panned", $newX$$5$$, $newY$$5$$, $oldX$$4$$, $oldY$$4$$, $animator$$26$$);
      $thisRef$$12$$.$FireListener$($dx$$12_mat$$33$$)
    };
    $animator$$26$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$26$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $dx$$12_mat$$33$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$26$$, $deltaX$$5_dy$$15_fireStartEventFunc$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$26$$, $deltaY$$5_fireEndEventFunc$$)) : ($deltaX$$5_dy$$15_fireStartEventFunc$$(), this.$_contentPane$.$setMatrix$($dx$$12_mat$$33$$), $deltaY$$5_fireEndEventFunc$$())
  }
};
D.$JSCompiler_prototypeAlias$$.$panTo$ = function $$JSCompiler_prototypeAlias$$$$panTo$$($dx$$13_xx$$46$$, $dy$$16_yy$$45$$, $animator$$27$$) {
  this.$_bPanningEnabled$ && ($dx$$13_xx$$46$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$27$$).$_tx$, $dy$$16_yy$$45$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$27$$).$_ty$, this.$panBy$($dx$$13_xx$$46$$, $dy$$16_yy$$45$$, $animator$$27$$))
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($currZoom$$inline_3728_dz$$4_mat$$34$$, $xx$$47$$, $yy$$46$$, $animator$$28$$) {
  if(this.$_bZoomingEnabled$) {
    !$xx$$47$$ && 0 !== $xx$$47$$ && ($xx$$47$$ = this.$_ww$ / 2);
    !$yy$$46$$ && 0 !== $yy$$46$$ && ($yy$$46$$ = this.$_hh$ / 2);
    var $oldZoom$$1$$ = this.$getZoom$($animator$$28$$), $newZoom$$5$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $oldZoom$$1$$ * $currZoom$$inline_3728_dz$$4_mat$$34$$);
    this.$_controlPanel$ && ($currZoom$$inline_3728_dz$$4_mat$$34$$ = this.$getZoom$(), $newZoom$$5$$ == this.$_minZoom$ && $newZoom$$5$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : $currZoom$$inline_3728_dz$$4_mat$$34$$ <= $newZoom$$5$$ && $newZoom$$5$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)) : $currZoom$$inline_3728_dz$$4_mat$$34$$ >= $newZoom$$5$$ && $newZoom$$5$$ == this.$_minZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)));
    if(window.Math.round(1E5 * $oldZoom$$1$$) != window.Math.round(1E5 * $newZoom$$5$$)) {
      var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$5$$ / $oldZoom$$1$$;
      $currZoom$$inline_3728_dz$$4_mat$$34$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$28$$ && ($currZoom$$inline_3728_dz$$4_mat$$34$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$28$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($currZoom$$inline_3728_dz$$4_mat$$34$$ = $currZoom$$inline_3728_dz$$4_mat$$34$$.clone());
      $currZoom$$inline_3728_dz$$4_mat$$34$$ || ($currZoom$$inline_3728_dz$$4_mat$$34$$ = this.$_contentPane$.$getMatrix$().clone());
      $currZoom$$inline_3728_dz$$4_mat$$34$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $xx$$47$$, $yy$$46$$);
      var $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_3728_dz$$4_mat$$34$$.$_tx$) - $currZoom$$inline_3728_dz$$4_mat$$34$$.$_tx$, $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_3728_dz$$4_mat$$34$$.$_ty$) - $currZoom$$inline_3728_dz$$4_mat$$34$$.$_ty$;
      (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "adjustPanConstraints", $newZoom$$5$$, $oldZoom$$1$$, $animator$$28$$, D.$JSCompiler_alias_NULL$$, $xx$$47$$, $yy$$46$$, $xDiff$$, $yDiff$$);
      $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_3728_dz$$4_mat$$34$$.$_tx$) - $currZoom$$inline_3728_dz$$4_mat$$34$$.$_tx$;
      $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_3728_dz$$4_mat$$34$$.$_ty$) - $currZoom$$inline_3728_dz$$4_mat$$34$$.$_ty$;
      $currZoom$$inline_3728_dz$$4_mat$$34$$.translate($xDiff$$, $yDiff$$);
      var $thisRef$$13$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$13$$, "zooming", $newZoom$$5$$, $oldZoom$$1$$, $animator$$28$$, D.$JSCompiler_alias_NULL$$, $xx$$47$$, $yy$$46$$, $xDiff$$, $yDiff$$)
      }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$13$$, "zoomed", $thisRef$$13$$.$getZoom$(), $oldZoom$$1$$, $animator$$28$$, D.$JSCompiler_alias_NULL$$, $xx$$47$$, $yy$$46$$, $xDiff$$, $yDiff$$)
      };
      $animator$$28$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$28$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $currZoom$$inline_3728_dz$$4_mat$$34$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$28$$, $deltaZoom_fireStartEventFunc$$1$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$28$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($currZoom$$inline_3728_dz$$4_mat$$34$$), 
      $fireEndEventFunc$$1$$())
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$zoomTo$ = function $$JSCompiler_prototypeAlias$$$$zoomTo$$($dz$$5_zz$$1$$, $xx$$48$$, $yy$$47$$, $animator$$29$$) {
  this.$_bZoomingEnabled$ && ($dz$$5_zz$$1$$ /= this.$getZoom$($animator$$29$$), this.$zoomBy$($dz$$5_zz$$1$$, $xx$$48$$, $yy$$47$$, $animator$$29$$))
};
D.$JSCompiler_prototypeAlias$$.$zoomToFit$ = function $$JSCompiler_prototypeAlias$$$$zoomToFit$$($animator$$31$$, $fitBounds$$1$$) {
  if(this.$_bZoomToFitEnabled$) {
    var $panningEnabled$$1$$ = this.$_bPanningEnabled$, $zoomingEnabled$$ = this.$_bZoomingEnabled$;
    this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
    try {
      var $bounds$$56$$ = $fitBounds$$1$$;
      $bounds$$56$$ || ($bounds$$56$$ = this.$_contentPane$.$getDimensions$());
      var $bounds$$56$$ = (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomToFitCalcBounds", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$31$$, $bounds$$56$$).$_zoomToFitBounds$, $dz$$6$$ = window.Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $bounds$$56$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $bounds$$56$$.$h$), $dz$$6$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $dz$$6$$), $dx$$15$$ = this.$_ww$ / 2 - ($bounds$$56$$.x + $bounds$$56$$.$w$ / 
      2) * $dz$$6$$, $dy$$18$$ = this.$_hh$ / 2 - ($bounds$$56$$.y + $bounds$$56$$.$h$ / 2) * $dz$$6$$, $thisRef$$14$$ = this, $fireStartEventFunc$$2$$ = function $$fireStartEventFunc$$2$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$14$$, "zoomToFitBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$31$$, $bounds$$56$$)
      }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$14$$, "zoomToFitEnd", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$31$$, $bounds$$56$$)
      };
      $animator$$31$$ ? (0,D.$DvtPlayable$prependOnInit$$)($animator$$31$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
      this.$zoomTo$($dz$$6$$, 0, 0, $animator$$31$$);
      this.$panTo$($dx$$15$$, $dy$$18$$, $animator$$31$$);
      $animator$$31$$ ? (0,D.$DvtPlayable$appendOnEnd$$)($animator$$31$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
    }finally {
      this.$_bPanningEnabled$ = $panningEnabled$$1$$, this.$_bZoomingEnabled$ = $zoomingEnabled$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getViewport$ = function $$JSCompiler_prototypeAlias$$$$getViewport$$() {
  var $topLeftGlobal_topLeftLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(0, 0)), $bottomRightGlobal_bottomRightLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(this.$_ww$, this.$_hh$)), $topLeftGlobal_topLeftLocal$$ = this.$_contentPane$.$stageToLocal$($topLeftGlobal_topLeftLocal$$), $bottomRightGlobal_bottomRightLocal$$ = this.$_contentPane$.$stageToLocal$($bottomRightGlobal_bottomRightLocal$$);
  return new D.$DvtRectangle$$($topLeftGlobal_topLeftLocal$$.x, $topLeftGlobal_topLeftLocal$$.y, $bottomRightGlobal_bottomRightLocal$$.x - $topLeftGlobal_topLeftLocal$$.x, $bottomRightGlobal_bottomRightLocal$$.y - $topLeftGlobal_topLeftLocal$$.y)
};
D.$JSCompiler_StaticMethods_SetElasticConstraints$$ = function $$JSCompiler_StaticMethods_SetElasticConstraints$$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $bElastic$$) {
  if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticConstraints$ = $bElastic$$) {
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ && ($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$isRunning$() && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.stop(), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$)
  }else {
    var $currX$$12_panEvent$$inline_3755$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$15$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_ty$, $currZoom$$6$$ = $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getZoom$();
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ = $currX$$12_panEvent$$inline_3755$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currX$$12_panEvent$$inline_3755$$) || $currY$$15$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currY$$15$$);
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ = $currZoom$$6$$ != (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currZoom$$6$$);
    if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ || $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$) {
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_context$, 0.4), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$setEasing$(D.$DvtEasing$cubicOut$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$zoomBy$(1, 0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_ww$, 
      0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_hh$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$panBy$(0, 0, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), (0,D.$DvtPlayable$appendOnEnd$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnimOnEnd$, 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && ($currX$$12_panEvent$$inline_3755$$ = new D.$DvtPanEvent$$("elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$FireListener$($currX$$12_panEvent$$inline_3755$$)), 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, "elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.play()
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$DvtPanZoomCanvas$$$$$_elasticConstraintsAnimOnEnd$$() {
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_bElasticPan$) {
    var $panEvent$$inline_3764$$ = new D.$DvtPanEvent$$("elasticAnimEnd", D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$);
    this.$FireListener$($panEvent$$inline_3764$$)
  }
  this.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "elasticAnimEnd")
};
D.$JSCompiler_StaticMethods_ConstrainPanX$$ = function $$JSCompiler_StaticMethods_ConstrainPanX$$$($JSCompiler_StaticMethods_ConstrainPanX$self$$, $xx$$49$$) {
  var $dx$$16_offsetX$$4$$ = $xx$$49$$;
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$16_offsetX$$4$$ < $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - $dx$$16_offsetX$$4$$, $dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$16_offsetX$$4$$)) : $dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$);
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$16_offsetX$$4$$ > $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$16_offsetX$$4$$ -= $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$, $dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$16_offsetX$$4$$)) : $dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$);
  return $dx$$16_offsetX$$4$$
};
D.$JSCompiler_StaticMethods_ConstrainPanY$$ = function $$JSCompiler_StaticMethods_ConstrainPanY$$$($JSCompiler_StaticMethods_ConstrainPanY$self$$, $yy$$48$$) {
  var $dy$$19_offsetY$$3$$ = $yy$$48$$;
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$19_offsetY$$3$$ < $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$19_offsetY$$3$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - $dy$$19_offsetY$$3$$, $dy$$19_offsetY$$3$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$19_offsetY$$3$$)) : $dy$$19_offsetY$$3$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$);
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$19_offsetY$$3$$ > $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$19_offsetY$$3$$ -= $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$, $dy$$19_offsetY$$3$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$19_offsetY$$3$$)) : $dy$$19_offsetY$$3$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$);
  return $dy$$19_offsetY$$3$$
};
D.$JSCompiler_StaticMethods_ConstrainZoom$$ = function $$JSCompiler_StaticMethods_ConstrainZoom$$$($JSCompiler_StaticMethods_ConstrainZoom$self$$, $zz$$2$$) {
  var $dz$$8_newZ$$ = window.Math.max(0, $zz$$2$$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && $dz$$8_newZ$$ < $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$8_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - $dz$$8_newZ$$, $dz$$8_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$8_newZ$$)) : $dz$$8_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && $dz$$8_newZ$$ > $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$8_newZ$$ -= $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$, $dz$$8_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ + window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$8_newZ$$)) : $dz$$8_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$);
  return $dz$$8_newZ$$
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
  var $openCloseButtonWidth$$1_styleMap$$57$$ = $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_view$.$getControlPanelStyleMap$(), $posX_transX$$3$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth$$1_styleMap$$57$$, "paddingSide", 0), $posY$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth$$1_styleMap$$57$$, "paddingTop", 0), $openCloseButtonWidth$$1_styleMap$$57$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth$$1_styleMap$$57$$, "openCloseButtonWidth", 0), $posX_transX$$3$$ = 
  D.$DvtAgent$$.$isRightToLeft$($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_context$) ? $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_ww$ - $openCloseButtonWidth$$1_styleMap$$57$$ - $posX_transX$$3$$ : $posX_transX$$3$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_controlPanel$, $posX_transX$$3$$, $posY$$)
};
D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$ = function $$JSCompiler_StaticMethods_GetRelativeMousePosition$$$($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$, $event$$326$$) {
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$.$_context$, $event$$326$$.pageX, $event$$326$$.pageY)
};
D.$JSCompiler_StaticMethods_FireZoomEvent$$ = function $$JSCompiler_StaticMethods_FireZoomEvent$$$($JSCompiler_StaticMethods_FireZoomEvent$self$$, $subType$$5_zoomEvent$$, $newZoom$$6$$, $oldZoom$$2$$, $animator$$33$$, $zoomToFitBounds$$1$$, $xx$$50$$, $yy$$49$$, $tx$$10$$, $ty$$10$$) {
  $subType$$5_zoomEvent$$ = new D.$DvtZoomEvent$$($subType$$5_zoomEvent$$, $newZoom$$6$$, $oldZoom$$2$$, $animator$$33$$, $zoomToFitBounds$$1$$, new D.$DvtPoint$$($xx$$50$$, $yy$$49$$), $tx$$10$$, $ty$$10$$);
  $JSCompiler_StaticMethods_FireZoomEvent$self$$.$FireListener$($subType$$5_zoomEvent$$);
  return $subType$$5_zoomEvent$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomAndCenter$ = function $$DvtPanZoomCanvas$$$$$zoomAndCenter$$() {
  (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomAndCenter")
};
D.$JSCompiler_StaticMethods_getNextZoomLevel$$ = function $$JSCompiler_StaticMethods_getNextZoomLevel$$$($JSCompiler_StaticMethods_getNextZoomLevel$self$$, $currZoom$$7$$) {
  var $zoomLevel$$1$$;
  $zoomLevel$$1$$ = $currZoom$$7$$ + $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$1$$ > $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$ && ($zoomLevel$$1$$ = $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$);
  return $zoomLevel$$1$$
};
D.$JSCompiler_StaticMethods_getPrevZoomLevel$$ = function $$JSCompiler_StaticMethods_getPrevZoomLevel$$$($JSCompiler_StaticMethods_getPrevZoomLevel$self$$, $currZoom$$8$$) {
  var $zoomLevel$$2$$;
  $zoomLevel$$2$$ = $currZoom$$8$$ - $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$2$$ < $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$ && ($zoomLevel$$2$$ = $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$);
  return $zoomLevel$$2$$
};
D.$DvtPanZoomCanvas$$.prototype.$setMinZoom$ = (0,D.$JSCompiler_set$$)("$_minZoom$");
D.$DvtPanZoomCanvas$$.prototype.$setMaxZoom$ = function $$DvtPanZoomCanvas$$$$$setMaxZoom$$($n$$15$$) {
  0 > $n$$15$$ && ($n$$15$$ = 1);
  this.$_maxZoom$ = $n$$15$$
};
D.$DvtPanZoomCanvas$$.prototype.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animationDuration$");
D.$DvtPanZoomCanvas$$.prototype.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$DvtPanZoomCanvasEventManager$$ = function $$DvtPanZoomCanvasEventManager$$$($context$$444$$, $callback$$88$$, $callbackObj$$61$$) {
  this.Init($context$$444$$, $callback$$88$$, $callbackObj$$61$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasEventManager$$, D.$DvtEventManager$$, "DvtPanZoomCanvasEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvasEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$445$$, $callback$$89$$, $callbackObj$$62$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.Init.call(this, $context$$445$$, $callback$$89$$, $callbackObj$$62$$);
  this.$_pzc$ = $callbackObj$$62$$;
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZooming$ = this.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMomentumPanning$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$44$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$44$$);
  D.$DvtAgent$$.$isPlatformGecko$() ? $displayable$$44$$.$addEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$44$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$328_pos$$22$$) {
  2 != $event$$328_pos$$22$$.button && ($event$$328_pos$$22$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$328_pos$$22$$), this.$_mx$ = $event$$328_pos$$22$$.x, this.$_my$ = $event$$328_pos$$22$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = D.$JSCompiler_alias_TRUE$$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$329_zz$$3$$) {
  if(this.$_bDown$) {
    var $pos$$23_yy$$51$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$329_zz$$3$$), $xx$$52$$ = $pos$$23_yy$$51$$.x, $pos$$23_yy$$51$$ = $pos$$23_yy$$51$$.y;
    $event$$329_zz$$3$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$)), $event$$329_zz$$3$$ = this.$_origZoom$ * window.Math.pow(1 + 0.01 * (this.$_py$ >= $pos$$23_yy$$51$$ ? 
    1 : -1), window.Math.abs(this.$_py$ - $pos$$23_yy$$51$$)), this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($event$$329_zz$$3$$, this.$_px$, this.$_py$) : this.$_callbackObj$.$zoomTo$($event$$329_zz$$3$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$52$$, $pos$$23_yy$$51$$);
    this.$_mx$ = $xx$$52$$;
    this.$_my$ = $pos$$23_yy$$51$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$() {
  this.$_bDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this);
  this.$_bZooming$ && (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$331$$) {
  if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
    (!$event$$331$$.relatedTarget || $event$$331$$.relatedTarget == D.$JSCompiler_alias_NULL$$) && this.$OnMouseUp$($event$$331$$)
  }
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$331$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$332$$) {
  var $currZoom$$10_oldZoomAnim_zz$$4$$ = this.$_callbackObj$.$getZoom$();
  this.$_zoomAnimator$ && ($currZoom$$10_oldZoomAnim_zz$$4$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $currZoom$$10_oldZoomAnim_zz$$4$$ = this.$_callbackObj$.$getZoom$($currZoom$$10_oldZoomAnim_zz$$4$$), this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$);
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  var $delta$$13_pos$$24$$ = 0;
  $event$$332$$.wheelDelta != D.$JSCompiler_alias_NULL$$ && ($delta$$13_pos$$24$$ = $event$$332$$.wheelDelta, D.$DvtAgent$$.$isPlatformGecko$() && ($delta$$13_pos$$24$$ = -$delta$$13_pos$$24$$));
  $currZoom$$10_oldZoomAnim_zz$$4$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $delta$$13_pos$$24$$ / window.Math.abs($delta$$13_pos$$24$$);
  $delta$$13_pos$$24$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$332$$);
  this.$_context$.$getDocumentUtils$().$cancelDomEvent$($event$$332$$);
  this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($currZoom$$10_oldZoomAnim_zz$$4$$, $delta$$13_pos$$24$$.x, $delta$$13_pos$$24$$.y, this.$_zoomAnimator$) : this.$_callbackObj$.$zoomTo$($currZoom$$10_oldZoomAnim_zz$$4$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
  this.$_zoomAnimator$ && ((0,D.$DvtPlayable$appendOnEnd$$)(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
};
D.$JSCompiler_prototypeAlias$$.$_clearZoomAnimator$ = function $$JSCompiler_prototypeAlias$$$$_clearZoomAnimator$$() {
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_handleMomentumStartTimer$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_handleMomentumTimer$ = function $$JSCompiler_prototypeAlias$$$$_handleMomentumTimer$$() {
  var $dy$$20_ratio$$9$$ = 1 - 0.04 * this.$_momentumIterCount$, $dy$$20_ratio$$9$$ = $dy$$20_ratio$$9$$ * $dy$$20_ratio$$9$$, $interval$$4_newX$$7$$ = this.$_momentumTimer$.$getInterval$(), $dx$$17$$ = $dy$$20_ratio$$9$$ * this.$_momentumXperMS$ * $interval$$4_newX$$7$$, $dy$$20_ratio$$9$$ = $dy$$20_ratio$$9$$ * this.$_momentumYperMS$ * $interval$$4_newX$$7$$;
  this.$_momentumDx$ += $dx$$17$$;
  this.$_momentumDy$ += $dy$$20_ratio$$9$$;
  var $interval$$4_newX$$7$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $newY$$7$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
  this.$_callbackObj$.$panTo$($interval$$4_newX$$7$$, $newY$$7$$);
  var $bStop$$ = D.$JSCompiler_alias_FALSE$$;
  if(24 <= this.$_momentumIterCount$) {
    $bStop$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    var $currX$$13$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$16$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$;
    if(window.Math.abs($currX$$13$$ - $interval$$4_newX$$7$$) > window.Math.abs($dx$$17$$) || window.Math.abs($currY$$16$$ - $newY$$7$$) > window.Math.abs($dy$$20_ratio$$9$$)) {
      $bStop$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $bStop$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$333$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$333$$, this.$ZoomStartTouch$, this);
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$333$$, this.$PanStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$334$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$334$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$334$$, "panTouch");
  $event$$334$$ && $event$$334$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$335$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$335$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$335$$, "panTouch")
};
D.$JSCompiler_prototypeAlias$$.$ZoomStartTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomStartTouch$$($event$$336$$, $touch$$40$$) {
  var $targets$$inline_3822_touchIds$$9$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  1 >= $targets$$inline_3822_touchIds$$9$$.length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$40$$.identifier, "zoomTouch", D.$JSCompiler_alias_NULL$$, "zoomTouch", "zoomTouch", this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $touch$$40$$.pageX, this.$_my$ = $touch$$40$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, 
  this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = D.$JSCompiler_alias_NULL$$, $targets$$inline_3822_touchIds$$9$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_3822_touchIds$$9$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_3822_touchIds$$9$$), 
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_3822_touchIds$$9$$);
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$ZoomMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomMoveTouch$$() {
  var $targets$$inline_3837_touchIds$$10$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  if(2 == $targets$$inline_3837_touchIds$$10$$.length) {
    var $data$$34_touch1Data$$inline_3826$$;
    var $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$ = this.$TouchManager$;
    if(2 == $targets$$inline_3837_touchIds$$10$$.length) {
      if($data$$34_touch1Data$$inline_3826$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.$_touchMap$[$targets$$inline_3837_touchIds$$10$$[0]], $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.$_touchMap$[$targets$$inline_3837_touchIds$$10$$[1]], $data$$34_touch1Data$$inline_3826$$ == D.$JSCompiler_alias_NULL$$ || 
      $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$ == D.$JSCompiler_alias_NULL$$ || 0 == $data$$34_touch1Data$$inline_3826$$.$dx$ && 0 == $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.$dy$) {
        $data$$34_touch1Data$$inline_3826$$ = D.$JSCompiler_alias_NULL$$
      }else {
        var $cp$$5_dist$$inline_3830_dx$$inline_3828$$ = $data$$34_touch1Data$$inline_3826$$.pageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.pageX, $dy$$inline_3829_prevdx$$inline_3831$$ = $data$$34_touch1Data$$inline_3826$$.pageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.pageY, $cp$$5_dist$$inline_3830_dx$$inline_3828$$ = window.Math.sqrt($cp$$5_dist$$inline_3830_dx$$inline_3828$$ * $cp$$5_dist$$inline_3830_dx$$inline_3828$$ + 
        $dy$$inline_3829_prevdx$$inline_3831$$ * $dy$$inline_3829_prevdx$$inline_3831$$), $dy$$inline_3829_prevdx$$inline_3831$$ = $data$$34_touch1Data$$inline_3826$$.$prevPageX$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.$prevPageX$, $prevdy$$inline_3832$$ = $data$$34_touch1Data$$inline_3826$$.$prevPageY$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.$prevPageY$, $cx$$inline_3833$$ = ($data$$34_touch1Data$$inline_3826$$.pageX + 
        $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.pageX) / 2, $cy$$inline_3834$$ = ($data$$34_touch1Data$$inline_3826$$.pageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.pageY) / 2;
        $data$$34_touch1Data$$inline_3826$$ = {$dz$:$cp$$5_dist$$inline_3830_dx$$inline_3828$$ - window.Math.sqrt($dy$$inline_3829_prevdx$$inline_3831$$ * $dy$$inline_3829_prevdx$$inline_3831$$ + $prevdy$$inline_3832$$ * $prevdy$$inline_3832$$), $cx$:$cx$$inline_3833$$, $cy$:$cy$$inline_3834$$, $dcx$:$cx$$inline_3833$$ - ($data$$34_touch1Data$$inline_3826$$.$prevPageX$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.$prevPageX$) / 2, $dcy$:$cy$$inline_3834$$ - 
        ($data$$34_touch1Data$$inline_3826$$.$prevPageY$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$.$prevPageY$) / 2, $dist$:$cp$$5_dist$$inline_3830_dx$$inline_3828$$}
      }
    }else {
      $data$$34_touch1Data$$inline_3826$$ = D.$JSCompiler_alias_NULL$$
    }
    $data$$34_touch1Data$$inline_3826$$ && (this.$_bZooming$ || (this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$)), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), this.$_origDist$ == D.$JSCompiler_alias_NULL$$ && 
    (this.$_origDist$ = $data$$34_touch1Data$$inline_3826$$.$dist$ - $data$$34_touch1Data$$inline_3826$$.$dz$), $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$ = this.$_origZoom$ * ($data$$34_touch1Data$$inline_3826$$.$dist$ / this.$_origDist$), $cp$$5_dist$$inline_3830_dx$$inline_3828$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_pzc$.$_context$, $data$$34_touch1Data$$inline_3826$$.$cx$, $data$$34_touch1Data$$inline_3826$$.$cy$), this.$hideTooltip$(), 
    $targets$$inline_3837_touchIds$$10$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_3837_touchIds$$10$$), this.$_callbackObj$.$_currTargets$ = $targets$$inline_3837_touchIds$$10$$, this.$_callbackObj$.$zoomTo$($JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3824_touch2Data$$inline_3827_zz$$5$$, $cp$$5_dist$$inline_3830_dx$$inline_3828$$.x, $cp$$5_dist$$inline_3830_dx$$inline_3828$$.y), this.$_callbackObj$.$panBy$($data$$34_touch1Data$$inline_3826$$.$dcx$, 
    $data$$34_touch1Data$$inline_3826$$.$dcy$))
  }
};
D.$JSCompiler_prototypeAlias$$.$ZoomEndTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomEndTouch$$() {
  this.$_bZooming$ && (this.$_origDist$ = D.$JSCompiler_alias_NULL$$, this.$TouchManager$.$_blockTouchHold$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this));
  var $touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_3842$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $touchIds$$11$$);
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_3842$$;
  0 == $touchIds$$11$$.length && this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("zoomEnd"))
};
D.$JSCompiler_prototypeAlias$$.$PanStartTouch$ = function $$JSCompiler_prototypeAlias$$$$PanStartTouch$$($event$$339$$, $touch$$43$$) {
  !this.$_bZooming$ && 1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$43$$.identifier, "panTouch", D.$JSCompiler_alias_NULL$$, "panTouch", "panTouch", this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $touch$$43$$.pageX, this.$_my$ = $touch$$43$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$PanMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$PanMoveTouch$$($event$$340$$, $touch$$44$$) {
  if(!this.$_bZooming$ && 1 == (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length) {
    var $xx$$53$$ = $touch$$44$$.pageX, $yy$$52$$ = $touch$$44$$.pageY;
    (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$53$$, $yy$$52$$);
    this.$_mx$ = $xx$$53$$;
    this.$_my$ = $yy$$52$$
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
D.$JSCompiler_StaticMethods__handlePanMove$$ = function $$JSCompiler_StaticMethods__handlePanMove$$$($JSCompiler_StaticMethods__handlePanMove$self$$, $xx$$54$$, $yy$$53$$) {
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ || ($JSCompiler_StaticMethods__handlePanMove$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanBegin")), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$), 
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$ = []));
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$.$panTo$($JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanX$ + $xx$$54$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_px$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanY$ + $yy$$53$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_py$);
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$ = $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ = (new window.Date).getTime(), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ ? ($JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.$isRunning$() && $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.stop(), 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.reset()) : $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanMove$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanMove$self$$.$_handleMomentumStartTimer$, $JSCompiler_StaticMethods__handlePanMove$self$$, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.push({$dt$:$JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ - 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$, $dx$:$xx$$54$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_mx$, $dy$:$yy$$53$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_my$}), 5 < $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.length && $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.splice(0, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.start())
};
D.$JSCompiler_StaticMethods__handlePanEnd$$ = function $$JSCompiler_StaticMethods__handlePanEnd$$$($JSCompiler_StaticMethods__handlePanEnd$self$$) {
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanEnd"));
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$);
  if($JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.$isRunning$()) {
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.stop();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.reset();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ ? $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.reset() : $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanEnd$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanEnd$self$$.$_handleMomentumTimer$, $JSCompiler_StaticMethods__handlePanEnd$self$$);
    for(var $dt$$ = 0, $dx$$18$$ = 0, $dy$$21$$ = 0, $numMoves$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;0 < $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;) {
      var $objMove$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.pop(), $dt$$ = $dt$$ + $objMove$$.$dt$, $dx$$18$$ = $dx$$18$$ + $objMove$$.$dx$, $dy$$21$$ = $dy$$21$$ + $objMove$$.$dy$
    }
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumXperMS$ = $dx$$18$$ / $dt$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumYperMS$ = $dy$$21$$ / $dt$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.setInterval(window.Math.ceil($dt$$ / $numMoves$$));
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumIterCount$ = 1;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDx$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDy$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_bPanningEnabled$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.start()
  }else {
    (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtPanZoomCanvasKeyboardHandler$$ = function $$DvtPanZoomCanvasKeyboardHandler$$$($component$$4$$, $manager$$10$$) {
  this.Init($component$$4$$, $manager$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPanZoomCanvasKeyboardHandler");
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.Init = function $$DvtPanZoomCanvasKeyboardHandler$$$$Init$($component$$5$$, $manager$$11$$) {
  D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.Init($manager$$11$$);
  this.$_component$ = $component$$5$$
};
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanZoomCanvasKeyboardHandler$$$$$processKeyDown$$($controlPanel$$3_event$$327$$) {
  var $keyCode$$15$$ = $controlPanel$$3_event$$327$$.keyCode, $canvas$$4$$ = this.$_component$.$_panZoomCanvas$;
  if(33 == $keyCode$$15$$) {
    $controlPanel$$3_event$$327$$.ctrlKey || $controlPanel$$3_event$$327$$.shiftKey ? $canvas$$4$$.$panBy$($canvas$$4$$.$_panIncrement$, 0) : $canvas$$4$$.$panBy$(0, $canvas$$4$$.$_panIncrement$)
  }else {
    if(34 == $keyCode$$15$$) {
      $controlPanel$$3_event$$327$$.ctrlKey || $controlPanel$$3_event$$327$$.shiftKey ? $canvas$$4$$.$panBy$(-$canvas$$4$$.$_panIncrement$, 0) : $canvas$$4$$.$panBy$(0, -$canvas$$4$$.$_panIncrement$)
    }else {
      if(191 == $keyCode$$15$$) {
        ($controlPanel$$3_event$$327$$ = $canvas$$4$$.$_controlPanel$) && $controlPanel$$3_event$$327$$.$toggleExpandCollapse$()
      }else {
        var $JSCompiler_temp$$404_keyCode$$inline_3767_keyCode$$inline_3770$$ = $controlPanel$$3_event$$327$$.keyCode;
        if((D.$DvtAgent$$.$isPlatformGecko$() ? 61 == $JSCompiler_temp$$404_keyCode$$inline_3767_keyCode$$inline_3770$$ && !$controlPanel$$3_event$$327$$.shiftKey : 187 == $JSCompiler_temp$$404_keyCode$$inline_3767_keyCode$$inline_3770$$ && !$controlPanel$$3_event$$327$$.shiftKey) || (0,D.$DvtKeyboardEvent$isPlus$$)($controlPanel$$3_event$$327$$)) {
          $canvas$$4$$.$zoomTo$($canvas$$4$$.$getZoom$() + $canvas$$4$$.$_zoomIncrement$)
        }else {
          if(!($JSCompiler_temp$$404_keyCode$$inline_3767_keyCode$$inline_3770$$ = (0,D.$DvtKeyboardEvent$isMinus$$)($controlPanel$$3_event$$327$$))) {
            $JSCompiler_temp$$404_keyCode$$inline_3767_keyCode$$inline_3770$$ = $controlPanel$$3_event$$327$$.keyCode, $JSCompiler_temp$$404_keyCode$$inline_3767_keyCode$$inline_3770$$ = D.$DvtAgent$$.$isPlatformGecko$() ? 173 == $JSCompiler_temp$$404_keyCode$$inline_3767_keyCode$$inline_3770$$ && $controlPanel$$3_event$$327$$.shiftKey ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : 189 == $JSCompiler_temp$$404_keyCode$$inline_3767_keyCode$$inline_3770$$ && $controlPanel$$3_event$$327$$.shiftKey ? 
            D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
          }
          if($JSCompiler_temp$$404_keyCode$$inline_3767_keyCode$$inline_3770$$) {
            $canvas$$4$$.$zoomTo$($canvas$$4$$.$getZoom$() - $canvas$$4$$.$_zoomIncrement$)
          }else {
            if((48 == $keyCode$$15$$ || 96 == $keyCode$$15$$) && !$controlPanel$$3_event$$327$$.ctrlKey && !$controlPanel$$3_event$$327$$.shiftKey) {
              $canvas$$4$$.$zoomToFit$()
            }else {
              return D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $controlPanel$$3_event$$327$$)
            }
          }
        }
      }
    }
  }
};
D.$DvtCollapsiblePanel$$ = function $$DvtCollapsiblePanel$$$($context$$65$$, $maxWidth$$3$$, $maxHeight$$3$$, $collapseDir$$, $buttonImages$$2$$, $styleMap$$18$$, $disclosed$$6$$, $isFixed$$1$$) {
  this.Init($context$$65$$, $maxWidth$$3$$, $maxHeight$$3$$, $collapseDir$$, $buttonImages$$2$$, $styleMap$$18$$, $disclosed$$6$$, $isFixed$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanel$$, D.$DvtContainer$$, "DvtCollapsiblePanel");
D.$DvtCollapsiblePanel$$.prototype.Init = function $$DvtCollapsiblePanel$$$$Init$($context$$66$$, $maxWidth$$4$$, $maxHeight$$4$$, $collapseDir$$1$$, $buttonImages$$3$$, $styleMap$$19$$, $disclosed$$7$$, $isFixed$$2$$) {
  D.$DvtCollapsiblePanel$$.$superclass$.Init.call(this, $context$$66$$);
  this.$_maxWidth$ = $maxWidth$$4$$;
  this.$_maxHeight$ = $maxHeight$$4$$;
  this.$_collapseDir$ = $collapseDir$$1$$ ? $collapseDir$$1$$ : "col_northeast";
  D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && ("col_northeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northwest" : "col_northwest" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northeast" : "col_southeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_southwest" : "col_southwest" == this.$_collapseDir$ && (this.$_collapseDir$ = "col_southeast"));
  this.$_buttonImages$ = $buttonImages$$3$$;
  this.$_isFixed$ = $isFixed$$2$$ ? $isFixed$$2$$ : D.$DvtAgent$$.$isEnvironmentBatik$();
  this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = D.$JSCompiler_alias_NULL$$;
  this.$_styleMap$ = $styleMap$$19$$;
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$);
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", D.$JSCompiler_alias_NULL$$));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_collapse$ = $disclosed$$7$$ !== D.$JSCompiler_alias_VOID$$ ? !$disclosed$$7$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_scrollableContainer$ = new D.$DvtScrollableContainer$$($context$$66$$, 0, 0, $maxWidth$$4$$ - 10, $maxHeight$$4$$ - 10, 3, "collapsiblePanel");
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
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentWidth$ = function $$DvtCollapsiblePanel$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 27
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentHeight$ = function $$DvtCollapsiblePanel$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 27
};
D.$JSCompiler_StaticMethods__getRefPoint$$ = function $$JSCompiler_StaticMethods__getRefPoint$$$($JSCompiler_StaticMethods__getRefPoint$self$$, $point$$, $isScale$$) {
  return!$JSCompiler_StaticMethods__getRefPoint$self$$.isCollapsed() ? $isScale$$ ? new D.$DvtPoint$$(1 / $point$$.x, 1 / $point$$.y) : new D.$DvtPoint$$(-$point$$.x, -$point$$.y) : $point$$
};
D.$JSCompiler_StaticMethods__collapseExpand$$ = function $$JSCompiler_StaticMethods__collapseExpand$$$($JSCompiler_StaticMethods__collapseExpand$self$$, $animate$$) {
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  var $moveAnim_north_translatePoint2$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_northeast" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $west$$3$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $moveAnim2_translatePoint_translateX$$ = $west$$3$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 
  $translateY$$ = $moveAnim_north_translatePoint2$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$, $scaleAnim_scalePoint$$ = new D.$DvtPoint$$(1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$), $moveAnim2_translatePoint_translateX$$ = new D.$DvtPoint$$($moveAnim2_translatePoint_translateX$$, $translateY$$), $moveAnim_north_translatePoint2$$ = new D.$DvtPoint$$($west$$3$$ ? -$JSCompiler_StaticMethods__collapseExpand$self$$.$_width$ : 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, $translateY$$ - ($moveAnim_north_translatePoint2$$ ? 0 : 25));
  $animate$$ || ($JSCompiler_StaticMethods__collapseExpand$self$$.$_background$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$ && $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$.$setAlpha$(0));
  $scaleAnim_scalePoint$$ = new D.$DvtAnimScaleBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $scaleAnim_scalePoint$$, D.$JSCompiler_alias_TRUE$$), $animate$$ ? 0.25 : 1E-5);
  $moveAnim_north_translatePoint2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim_north_translatePoint2$$), $animate$$ ? 0.25 : 1E-5);
  $moveAnim2_translatePoint_translateX$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim2_translatePoint_translateX$$), $animate$$ ? 0.25 : 1E-5);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $scaleAnim_scalePoint$$, $moveAnim_north_translatePoint2$$, $moveAnim2_translatePoint_translateX$$);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$.$getTooltipManager$().$hideTooltip$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$)), $JSCompiler_StaticMethods__collapseExpand$self$$.isCollapsed() && $JSCompiler_StaticMethods__collapseExpand$self$$.$_scrollableContainer$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__collapseExpand$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.play())
};
D.$JSCompiler_StaticMethods__getOutlinePath$$ = function $$JSCompiler_StaticMethods__getOutlinePath$$$($JSCompiler_StaticMethods__getOutlinePath$self$$, $width$$22$$, $height$$22$$) {
  var $r$$11$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_borderRadius$, $cmds$$2$$, $west$$4$$ = "col_northwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$;
  25 >= $height$$22$$ && ($height$$22$$ = 25);
  $cmds$$2$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$ ? window.DvtPathUtils.moveTo($r$$11$$, 0) : window.DvtPathUtils.moveTo(0, 0);
  $cmds$$2$$ += window.DvtPathUtils.lineTo($width$$22$$ - $r$$11$$, 0);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && $west$$4$$ ? ($cmds$$2$$ += window.DvtPathUtils.lineTo($width$$22$$, 0), $cmds$$2$$ += window.DvtPathUtils.lineTo($width$$22$$, $r$$11$$)) : $cmds$$2$$ += window.DvtPathUtils.$quadTo$($width$$22$$, 0, $width$$22$$, $r$$11$$);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$22$$ && $west$$4$$ ? $cmds$$2$$ += window.DvtPathUtils.lineTo($width$$22$$, $height$$22$$) : ($cmds$$2$$ += window.DvtPathUtils.lineTo($width$$22$$, $height$$22$$ - $r$$11$$), $cmds$$2$$ += window.DvtPathUtils.$quadTo$($width$$22$$, $height$$22$$, $width$$22$$ - $r$$11$$, $height$$22$$));
  $cmds$$2$$ += window.DvtPathUtils.lineTo($r$$11$$, $height$$22$$);
  $cmds$$2$$ = !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$22$$ && !$west$$4$$ ? $cmds$$2$$ + window.DvtPathUtils.lineTo(0, $height$$22$$) : $cmds$$2$$ + window.DvtPathUtils.$quadTo$(0, $height$$22$$, 0, $height$$22$$ - $r$$11$$);
  if($JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$) {
    $cmds$$2$$ += window.DvtPathUtils.lineTo(0, $r$$11$$), $cmds$$2$$ += window.DvtPathUtils.$quadTo$(0, 0, $r$$11$$, 0)
  }
  return $cmds$$2$$ += window.DvtPathUtils.closePath()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCollapsiblePanel$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  var $alpha$$4_stroke$$2$$ = this.$_background$.$getStroke$().clone();
  $alpha$$4_stroke$$2$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($alpha$$4_stroke$$2$$);
  var $alpha$$4_stroke$$2$$ = this.$_styleMap$[D.$DvtPanZoomControlPanel$$.$BG_ROLLOUT_ALPHA$], $fill$$2$$ = this.$_background$.$getFill$().clone();
  $fill$$2$$.$setAlpha$($alpha$$4_stroke$$2$$);
  this.$_background$.$setFill$($fill$$2$$);
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
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOver$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOver$$($evt$$22$$) {
  var $tooltip$$6$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
  $tooltip$$6$$ != D.$JSCompiler_alias_NULL$$ && this.$_context$.$getTooltipManager$().$showTooltip$($evt$$22$$.pageX, $evt$$22$$.pageY, $tooltip$$6$$, this.$_collapseExpandButton$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOut$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOut$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$() {
  var $alpha$$5_stroke$$3$$ = this.$_background$.$getStroke$().clone();
  $alpha$$5_stroke$$3$$.$setAlpha$(this.$_styleMap$.borderHoverAlpha);
  this.$_background$.$setStroke$($alpha$$5_stroke$$3$$);
  var $alpha$$5_stroke$$3$$ = this.$_styleMap$.backgroundHoverAlpha, $fill$$3$$ = this.$_background$.$getFill$().clone();
  $fill$$3$$.$setAlpha$($alpha$$5_stroke$$3$$);
  this.$_background$.$setFill$($fill$$3$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderHoverAlpha)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$() {
  var $fill$$4_stroke$$4$$ = this.$_background$.$getStroke$().clone();
  $fill$$4_stroke$$4$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($fill$$4_stroke$$4$$);
  $fill$$4_stroke$$4$$ = this.$_background$.$getFill$().clone();
  $fill$$4_stroke$$4$$.$setAlpha$(this.$_bgAlpha$);
  this.$_background$.$setFill$($fill$$4_stroke$$4$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha)
};
D.$DvtCollapsiblePanelEvent$$ = function $$DvtCollapsiblePanelEvent$$$($subtype$$3$$) {
  this.Init("dvtCollapsiblePanelEvent");
  this.$_subtype$ = $subtype$$3$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtCollapsiblePanelEvent");
D.$DvtCollapsiblePanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtImageLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtImageLAFUtils$$, D.$DvtObj$$, "DvtImageLAFUtils");
D.$DvtImageLAFUtils$$.$loadIcon$ = function $$DvtImageLAFUtils$$$$loadIcon$$($context$$102$$, $uri$$19$$) {
  var $image$$7$$ = new D.$DvtImage$$($context$$102$$, $uri$$19$$);
  $image$$7$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$102$$, $uri$$19$$, function($context$$102$$) {
    $context$$102$$ != D.$JSCompiler_alias_NULL$$ && ($context$$102$$.width && $context$$102$$.height) && ($image$$7$$.$setWidth$($context$$102$$.width), $image$$7$$.$setHeight$($context$$102$$.height))
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
D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$ = "solid";
D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$ = "#7BA0D9";
D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ = "#3474D3";
D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$ = "#BFD8FB";
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
D.$DvtButtonLAFUtils$$.$createPanControl$ = function $$DvtButtonLAFUtils$$$$createPanControl$$($context$$67$$, $panZoomCanvas$$12$$, $resources$$16$$, $controls$$3$$, $imageURIs$$, $styleMap$$20$$) {
  var $panButton$$2_panUpState$$;
  $panButton$$2_panUpState$$ = $imageURIs$$ && $imageURIs$$.$getAttr$ ? D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$67$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_PAN_ENA$), $styleMap$$20$$) : D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$67$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_PAN_ENA$], $styleMap$$20$$);
  var $panDownState$$ = new D.$DvtContainer$$($context$$67$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panDownState$$, 20, 20);
  var $downImage_panOverState$$;
  $downImage_panOverState$$ = $imageURIs$$ && $imageURIs$$.$getAttr$ ? D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$67$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_PAN_DWN$), $styleMap$$20$$) : D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$67$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_PAN_DWN$], $styleMap$$20$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, -20, -20);
  $panDownState$$.$addChild$($downImage_panOverState$$);
  $downImage_panOverState$$ = new D.$DvtContainer$$($context$$67$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, 20, 20);
  var $overImage$$;
  $overImage$$ = $imageURIs$$ && $imageURIs$$.$getAttr$ ? D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$67$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_PAN_OVR$), $styleMap$$20$$) : D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$67$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_PAN_OVR$], $styleMap$$20$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($overImage$$, -20, -20);
  $downImage_panOverState$$.$addChild$($overImage$$);
  $panButton$$2_panUpState$$ = new D.$DvtButton$$($context$$67$$, $panButton$$2_panUpState$$, $downImage_panOverState$$, $panDownState$$);
  if(0 < ($controls$$3$$ & 16)) {
    var $recenterButton$$2$$;
    $recenterButton$$2$$ = $imageURIs$$ && $imageURIs$$.$getAttr$ ? new D.$DvtButton$$($context$$67$$, D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$67$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$), $styleMap$$20$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$67$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$), $styleMap$$20$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$67$$, $imageURIs$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$), 
    $styleMap$$20$$)) : new D.$DvtButton$$($context$$67$$, D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$67$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$], $styleMap$$20$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$67$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$], $styleMap$$20$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$67$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$], $styleMap$$20$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($recenterButton$$2$$, 9, 9)
  }
  return new D.$DvtPanControl$$($context$$67$$, $panButton$$2_panUpState$$, $recenterButton$$2$$, $panZoomCanvas$$12$$, $resources$$16$$, $controls$$3$$, $styleMap$$20$$)
};
D.$DvtButtonLAFUtils$$.$createDrillUpButton$ = function $$DvtButtonLAFUtils$$$$createDrillUpButton$$($context$$68$$, $mapCallback$$, $panZoomCanvas$$13$$, $resources$$17$$, $dis_imageURIs$$1$$, $eventManager$$7$$, $styleMap$$21$$) {
  if($dis_imageURIs$$1$$ && $dis_imageURIs$$1$$.$getAttr$) {
    var $ena$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 0, $dis_imageURIs$$1$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$), $styleMap$$21$$), $ovr$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 1, $dis_imageURIs$$1$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$), $styleMap$$21$$), $dwn$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 2, $dis_imageURIs$$1$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$), $styleMap$$21$$);
    $dis_imageURIs$$1$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 0, $dis_imageURIs$$1$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$), $styleMap$$21$$)
  }else {
    $ena$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 0, $dis_imageURIs$$1$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$21$$), $ovr$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 1, $dis_imageURIs$$1$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$], $styleMap$$21$$), $dwn$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 2, $dis_imageURIs$$1$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$], $styleMap$$21$$), $dis_imageURIs$$1$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 
    0, $dis_imageURIs$$1$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$21$$)
  }
  return new D.$DvtMapControlButton$$($context$$68$$, new D.$DvtButton$$($context$$68$$, $ena$$3$$, $ovr$$3$$, $dwn$$3$$, $dis_imageURIs$$1$$), $mapCallback$$, $panZoomCanvas$$13$$, 0, $resources$$17$$, $eventManager$$7$$)
};
D.$DvtButtonLAFUtils$$.$createDrillDownButton$ = function $$DvtButtonLAFUtils$$$$createDrillDownButton$$($context$$69$$, $mapCallback$$1$$, $panZoomCanvas$$14$$, $resources$$18$$, $dis$$1_imageURIs$$2$$, $eventManager$$8$$, $styleMap$$22$$) {
  if($dis$$1_imageURIs$$2$$ && $dis$$1_imageURIs$$2$$.$getAttr$) {
    var $ena$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 0, $dis$$1_imageURIs$$2$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$), $styleMap$$22$$), $ovr$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 1, $dis$$1_imageURIs$$2$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$), $styleMap$$22$$), $dwn$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 2, $dis$$1_imageURIs$$2$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$), 
    $styleMap$$22$$);
    $dis$$1_imageURIs$$2$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 0, $dis$$1_imageURIs$$2$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$), $styleMap$$22$$)
  }else {
    $ena$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 0, $dis$$1_imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$22$$), $ovr$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 1, $dis$$1_imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$], $styleMap$$22$$), $dwn$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 2, $dis$$1_imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$], $styleMap$$22$$), $dis$$1_imageURIs$$2$$ = 
    D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 0, $dis$$1_imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$22$$)
  }
  return new D.$DvtMapControlButton$$($context$$69$$, new D.$DvtButton$$($context$$69$$, $ena$$4$$, $ovr$$4$$, $dwn$$4$$, $dis$$1_imageURIs$$2$$), $mapCallback$$1$$, $panZoomCanvas$$14$$, 1, $resources$$18$$, $eventManager$$8$$)
};
D.$DvtButtonLAFUtils$$.$createResetButton$ = function $$DvtButtonLAFUtils$$$$createResetButton$$($context$$70$$, $mapCallback$$2$$, $panZoomCanvas$$15$$, $resources$$19$$, $dis$$2_imageURIs$$3$$, $eventManager$$9$$, $styleMap$$23$$) {
  if($dis$$2_imageURIs$$3$$ && $dis$$2_imageURIs$$3$$.$getAttr$) {
    var $ena$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 0, $dis$$2_imageURIs$$3$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RESET_ENA$), $styleMap$$23$$), $ovr$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 1, $dis$$2_imageURIs$$3$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RESET_OVR$), $styleMap$$23$$), $dwn$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 2, $dis$$2_imageURIs$$3$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RESET_DWN$), $styleMap$$23$$);
    $dis$$2_imageURIs$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 0, $dis$$2_imageURIs$$3$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_RESET_ENA$), $styleMap$$23$$)
  }else {
    $ena$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 0, $dis$$2_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$23$$), $ovr$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 1, $dis$$2_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RESET_OVR$], $styleMap$$23$$), $dwn$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 2, $dis$$2_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RESET_DWN$], $styleMap$$23$$), $dis$$2_imageURIs$$3$$ = 
    D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 0, $dis$$2_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$23$$)
  }
  return new D.$DvtMapControlButton$$($context$$70$$, new D.$DvtButton$$($context$$70$$, $ena$$5$$, $ovr$$5$$, $dwn$$5$$, $dis$$2_imageURIs$$3$$), $mapCallback$$2$$, $panZoomCanvas$$15$$, 2, $resources$$19$$, $eventManager$$9$$)
};
D.$DvtButtonLAFUtils$$.$createZoomToFitButton$ = function $$DvtButtonLAFUtils$$$$createZoomToFitButton$$($context$$71$$, $panZoomCanvas$$16$$, $resources$$20$$, $eventManager$$10$$, $dwn$$6_imageURIs$$4$$, $styleMap$$24$$) {
  if($dwn$$6_imageURIs$$4$$ && $dwn$$6_imageURIs$$4$$.$getAttr$) {
    var $ena$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$71$$, 0, $dwn$$6_imageURIs$$4$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$), $styleMap$$24$$), $ovr$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$71$$, 1, $dwn$$6_imageURIs$$4$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$), $styleMap$$24$$);
    $dwn$$6_imageURIs$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$71$$, 2, $dwn$$6_imageURIs$$4$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$), $styleMap$$24$$)
  }else {
    $ena$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$71$$, 0, $dwn$$6_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$], $styleMap$$24$$), $ovr$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$71$$, 1, $dwn$$6_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$], $styleMap$$24$$), $dwn$$6_imageURIs$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$71$$, 2, $dwn$$6_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$], $styleMap$$24$$)
  }
  return new D.$DvtZoomToFitButton$$($context$$71$$, new D.$DvtButton$$($context$$71$$, $ena$$6$$, $ovr$$6$$, $dwn$$6_imageURIs$$4$$), $panZoomCanvas$$16$$, $resources$$20$$, $eventManager$$10$$)
};
D.$DvtButtonLAFUtils$$.$createZoomInButton$ = function $$DvtButtonLAFUtils$$$$createZoomInButton$$($context$$72$$, $panZoomCanvas$$17$$, $resources$$21$$, $eventManager$$11$$, $dis$$3_imageURIs$$5$$, $styleMap$$25$$) {
  if($dis$$3_imageURIs$$5$$ && $dis$$3_imageURIs$$5$$.$getAttr$) {
    var $ena$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$72$$, 0, $dis$$3_imageURIs$$5$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$), $styleMap$$25$$), $ovr$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$72$$, 1, $dis$$3_imageURIs$$5$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$), $styleMap$$25$$), $dwn$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$72$$, 2, $dis$$3_imageURIs$$5$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$), $styleMap$$25$$);
    $dis$$3_imageURIs$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$72$$, 3, $dis$$3_imageURIs$$5$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$), $styleMap$$25$$)
  }else {
    $ena$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$72$$, 0, $dis$$3_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$], $styleMap$$25$$), $ovr$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$72$$, 1, $dis$$3_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$], $styleMap$$25$$), $dwn$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$72$$, 2, $dis$$3_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$], $styleMap$$25$$), $dis$$3_imageURIs$$5$$ = 
    D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$72$$, 3, $dis$$3_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$], $styleMap$$25$$)
  }
  return new D.$DvtZoomInButton$$($context$$72$$, new D.$DvtButton$$($context$$72$$, $ena$$7$$, $ovr$$7$$, $dwn$$7$$, $dis$$3_imageURIs$$5$$), $panZoomCanvas$$17$$, $resources$$21$$, $eventManager$$11$$)
};
D.$DvtButtonLAFUtils$$.$createZoomOutButton$ = function $$DvtButtonLAFUtils$$$$createZoomOutButton$$($context$$73$$, $panZoomCanvas$$18$$, $resources$$22$$, $eventManager$$12$$, $dis$$4_imageURIs$$6$$, $styleMap$$26$$) {
  if($dis$$4_imageURIs$$6$$ && $dis$$4_imageURIs$$6$$.$getAttr$) {
    var $ena$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$73$$, 0, $dis$$4_imageURIs$$6$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$), $styleMap$$26$$), $ovr$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$73$$, 1, $dis$$4_imageURIs$$6$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$), $styleMap$$26$$), $dwn$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$73$$, 2, $dis$$4_imageURIs$$6$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$), $styleMap$$26$$);
    $dis$$4_imageURIs$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$73$$, 3, $dis$$4_imageURIs$$6$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$), $styleMap$$26$$)
  }else {
    $ena$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$73$$, 0, $dis$$4_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$], $styleMap$$26$$), $ovr$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$73$$, 1, $dis$$4_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$], $styleMap$$26$$), $dwn$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$73$$, 2, $dis$$4_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$], $styleMap$$26$$), $dis$$4_imageURIs$$6$$ = 
    D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$73$$, 3, $dis$$4_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$], $styleMap$$26$$)
  }
  return new D.$DvtZoomOutButton$$($context$$73$$, new D.$DvtButton$$($context$$73$$, $ena$$8$$, $ovr$$8$$, $dwn$$8$$, $dis$$4_imageURIs$$6$$), $panZoomCanvas$$18$$, $resources$$22$$, $eventManager$$12$$)
};
D.$DvtButtonLAFUtils$$.$createLayoutItemButtonState$ = function $$DvtButtonLAFUtils$$$$createLayoutItemButtonState$$($context$$74_image$$2$$, $attrb_bname$$, $state$$1$$, $images$$5_uri$$11$$, $styleMap$$27$$) {
  var $r$$12$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$27$$, "buttonRadius", 0), $w$$10$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$27$$, "buttonWidth", 0), $h$$10$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$27$$, "buttonWidth", 0), $shape$$4$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$74_image$$2$$, $r$$12$$, $w$$10$$, $h$$10$$, $styleMap$$27$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$1$$, $shape$$4$$, $w$$10$$, $h$$10$$ + 2 * $r$$12$$, $styleMap$$27$$, D.$JSCompiler_alias_TRUE$$);
  $attrb_bname$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$74_image$$2$$, $state$$1$$, $attrb_bname$$);
  $images$$5_uri$$11$$ = $images$$5_uri$$11$$ && $images$$5_uri$$11$$.$getAttr$ ? $images$$5_uri$$11$$.$getAttr$($attrb_bname$$) : $images$$5_uri$$11$$[$attrb_bname$$];
  ($context$$74_image$$2$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$74_image$$2$$, $images$$5_uri$$11$$, $w$$10$$, $h$$10$$)) && $shape$$4$$.$addChild$($context$$74_image$$2$$);
  return $shape$$4$$
};
D.$DvtButtonLAFUtils$$.$_getLayoutURI$ = function $$DvtButtonLAFUtils$$$$_getLayoutURI$$($context$$75$$, $state$$2$$, $attrb$$1_bname$$1$$, $bSel$$) {
  var $r2l$$ = "";
  0 == $state$$2$$ ? $state$$2$$ = D.$DvtButtonLAFUtils$$.$_UP$ : 1 == $state$$2$$ ? $state$$2$$ = D.$DvtButtonLAFUtils$$.$_OVER$ : 2 == $state$$2$$ && ($state$$2$$ = D.$DvtButtonLAFUtils$$.$_DOWN$);
  $bSel$$ && ($attrb$$1_bname$$1$$ += D.$DvtButtonLAFUtils$$.$_SEL$, D.$DvtAgent$$.$isRightToLeft$($context$$75$$) && ($r2l$$ = D.$DvtButtonLAFUtils$$.$_R2L$));
  return $attrb$$1_bname$$1$$ + ($state$$2$$ + $r2l$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardButtonState$ = function $$DvtButtonLAFUtils$$$$createPanelCardButtonState$$($context$$76$$, $state$$3$$, $styleMap$$28$$, $images$$6$$) {
  var $attrb$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$76$$, $state$$3$$, D.$DvtButtonLAFUtils$$.$_SYNC$, D.$JSCompiler_alias_TRUE$$);
  return $images$$6$$ && $images$$6$$.$getAttr$ ? D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$76$$, $state$$3$$, $images$$6$$.$getAttr$($attrb$$2$$), $styleMap$$28$$) : D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$76$$, $state$$3$$, $images$$6$$[$attrb$$2$$], $styleMap$$28$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardSyncItemState$ = function $$DvtButtonLAFUtils$$$$createPanelCardSyncItemState$$($base$$1_context$$77$$, $state$$4$$, $ww$$10$$, $hh$$9$$, $styleMap$$29$$) {
  var $r$$13$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$29$$, "buttonRadius", 0);
  $base$$1_context$$77$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($base$$1_context$$77$$, $r$$13$$, $ww$$10$$, $hh$$9$$, $styleMap$$29$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$4$$, $base$$1_context$$77$$, $ww$$10$$, $hh$$9$$ + 2 * $r$$13$$, $styleMap$$29$$, D.$JSCompiler_alias_TRUE$$);
  return $base$$1_context$$77$$
};
D.$DvtButtonLAFUtils$$.$createZoomSliderButton$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtButtonLAFUtils$$.$createControlButtonState$ = function $$DvtButtonLAFUtils$$$$createControlButtonState$$($context$$79$$, $attrb$$3_bname$$2$$, $state$$6$$, $images$$8$$, $styleMap$$30$$) {
  $attrb$$3_bname$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$79$$, $state$$6$$, $attrb$$3_bname$$2$$);
  return $images$$8$$ && $images$$8$$.$getAttr$ ? D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$79$$, $state$$6$$, $images$$8$$.$getAttr$($attrb$$3_bname$$2$$), $styleMap$$30$$) : D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$79$$, $state$$6$$, $images$$8$$[$attrb$$3_bname$$2$$], $styleMap$$30$$)
};
D.$DvtButtonLAFUtils$$.$createExpandButton$ = function $$DvtButtonLAFUtils$$$$createExpandButton$$($context$$80$$, $dwn$$9_imageURIs$$7$$, $h$$11$$, $styleMap$$31$$, $bR2L$$3$$) {
  if($dwn$$9_imageURIs$$7$$ && $dwn$$9_imageURIs$$7$$.$getAttr$) {
    var $ena$$9$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$80$$, 0, $h$$11$$, $dwn$$9_imageURIs$$7$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$), $styleMap$$31$$, $bR2L$$3$$), $ovr$$9$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$80$$, 1, $h$$11$$, $dwn$$9_imageURIs$$7$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$), $styleMap$$31$$, $bR2L$$3$$);
    $dwn$$9_imageURIs$$7$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$80$$, 2, $h$$11$$, $dwn$$9_imageURIs$$7$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$), $styleMap$$31$$, $bR2L$$3$$)
  }else {
    $ena$$9$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$80$$, 0, $h$$11$$, $dwn$$9_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$], $styleMap$$31$$, $bR2L$$3$$), $ovr$$9$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$80$$, 1, $h$$11$$, $dwn$$9_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$], $styleMap$$31$$, $bR2L$$3$$), $dwn$$9_imageURIs$$7$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$80$$, 2, $h$$11$$, $dwn$$9_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$], 
    $styleMap$$31$$, $bR2L$$3$$)
  }
  return new D.$DvtButton$$($context$$80$$, $ena$$9$$, $ovr$$9$$, $dwn$$9_imageURIs$$7$$)
};
D.$DvtButtonLAFUtils$$.$createCollapseButton$ = function $$DvtButtonLAFUtils$$$$createCollapseButton$$($context$$81$$, $dwn$$10_imageURIs$$8$$, $h$$12$$, $styleMap$$32$$, $bR2L$$4$$) {
  if($dwn$$10_imageURIs$$8$$ && $dwn$$10_imageURIs$$8$$.$getAttr$) {
    var $ena$$10$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$81$$, 0, $h$$12$$, $dwn$$10_imageURIs$$8$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$), $styleMap$$32$$, $bR2L$$4$$), $ovr$$10$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$81$$, 1, $h$$12$$, $dwn$$10_imageURIs$$8$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$), $styleMap$$32$$, $bR2L$$4$$);
    $dwn$$10_imageURIs$$8$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$81$$, 2, $h$$12$$, $dwn$$10_imageURIs$$8$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$), $styleMap$$32$$, $bR2L$$4$$)
  }else {
    $ena$$10$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$81$$, 0, $h$$12$$, $dwn$$10_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$], $styleMap$$32$$, $bR2L$$4$$), $ovr$$10$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$81$$, 1, $h$$12$$, $dwn$$10_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$], $styleMap$$32$$, $bR2L$$4$$), $dwn$$10_imageURIs$$8$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$81$$, 2, $h$$12$$, 
    $dwn$$10_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$], $styleMap$$32$$, $bR2L$$4$$)
  }
  return new D.$DvtButton$$($context$$81$$, $ena$$10$$, $ovr$$10$$, $dwn$$10_imageURIs$$8$$)
};
D.$DvtButtonLAFUtils$$.$createQuickQueryButton$ = function $$DvtButtonLAFUtils$$$$createQuickQueryButton$$($context$$82$$, $imageURIs$$9$$) {
  if($imageURIs$$9$$ && $imageURIs$$9$$.$getAttr$) {
    var $ena$$11$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$82$$, $imageURIs$$9$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$)), $ovr$$11$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$82$$, $imageURIs$$9$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$)), $dwn$$11$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$82$$, $imageURIs$$9$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$))
  }else {
    $ena$$11$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$82$$, $imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$]), $ovr$$11$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$82$$, $imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$]), $dwn$$11$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$82$$, $imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$])
  }
  return new D.$DvtButton$$($context$$82$$, $ena$$11$$, $ovr$$11$$, $dwn$$11$$)
};
D.$DvtButtonLAFUtils$$.$createClearResultsButton$ = function $$DvtButtonLAFUtils$$$$createClearResultsButton$$($context$$83$$, $imageURIs$$10$$) {
  if($imageURIs$$10$$ && $imageURIs$$10$$.$getAttr$) {
    var $ena$$12$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$83$$, $imageURIs$$10$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$)), $ovr$$12$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$83$$, $imageURIs$$10$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$)), $dwn$$12$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$83$$, $imageURIs$$10$$.$getAttr$(D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$))
  }else {
    $ena$$12$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$83$$, $imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$]), $ovr$$12$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$83$$, $imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$]), $dwn$$12$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$83$$, $imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$])
  }
  return new D.$DvtButton$$($context$$83$$, $ena$$12$$, $ovr$$12$$, $dwn$$12$$)
};
D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$ = function $$DvtButtonLAFUtils$$$$_createButtonBaseImage$$($context$$84_image$$3$$, $base$$2_state$$7$$, $uri$$12$$, $styleMap$$33$$) {
  var $w$$11$$, $h$$13$$, $r$$14$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$33$$, "buttonRadius", 0);
  if("undefined" === $w$$11$$ || $w$$11$$ == D.$JSCompiler_alias_NULL$$) {
    $w$$11$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$33$$, "buttonWidth", 0)
  }
  if("undefined" === $h$$13$$ || $h$$13$$ == D.$JSCompiler_alias_NULL$$) {
    $h$$13$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$33$$, "buttonWidth", 0)
  }
  $base$$2_state$$7$$ = D.$DvtButtonLAFUtils$$.$_drawBaseButton$($context$$84_image$$3$$, $base$$2_state$$7$$, $r$$14$$, $w$$11$$, $h$$13$$, $styleMap$$33$$);
  ($context$$84_image$$3$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$84_image$$3$$, $uri$$12$$, $w$$11$$, $h$$13$$)) && $base$$2_state$$7$$.$addChild$($context$$84_image$$3$$);
  return $base$$2_state$$7$$
};
D.$DvtButtonLAFUtils$$.$_loadIcon$ = function $$DvtButtonLAFUtils$$$$_loadIcon$$($context$$85$$, $uri$$13$$, $buttonWidth$$5$$, $buttonHeight$$2$$) {
  var $image$$4$$ = new D.$DvtImage$$($context$$85$$, $uri$$13$$);
  $image$$4$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$85$$, $uri$$13$$, function($context$$85$$) {
    $context$$85$$ != D.$JSCompiler_alias_NULL$$ && ($context$$85$$.width && $context$$85$$.height) && ($image$$4$$.$setWidth$($context$$85$$.width), $image$$4$$.$setHeight$($context$$85$$.height), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($image$$4$$, $buttonWidth$$5$$ / 2 - $context$$85$$.width / 2, $buttonHeight$$2$$ / 2 - $context$$85$$.height / 2))
  });
  return $image$$4$$
};
D.$DvtButtonLAFUtils$$.$_createZoomSliderButtonState$ = function $$DvtButtonLAFUtils$$$$_createZoomSliderButtonState$$($context$$86_currLoader$$, $state$$8$$, $ww$$11$$, $uri$$14$$) {
  var $mc$$5_x$$67$$ = $ww$$11$$, $y$$44$$ = 16, $cmds$$3$$ = window.DvtPathUtils.moveTo($mc$$5_x$$67$$, $y$$44$$) + window.DvtPathUtils.lineTo($mc$$5_x$$67$$ - $ww$$11$$, $y$$44$$), $mc$$5_x$$67$$ = $mc$$5_x$$67$$ - $ww$$11$$, $cmds$$3$$ = $cmds$$3$$ + window.DvtPathUtils.lineTo($mc$$5_x$$67$$, $y$$44$$ - 16), $y$$44$$ = $y$$44$$ - 16, $cmds$$3$$ = $cmds$$3$$ + window.DvtPathUtils.lineTo($mc$$5_x$$67$$ + $ww$$11$$, $y$$44$$), $cmds$$3$$ = $cmds$$3$$ + (window.DvtPathUtils.lineTo($mc$$5_x$$67$$ + 
  $ww$$11$$, $y$$44$$ + 16) + window.DvtPathUtils.closePath()), $mc$$5_x$$67$$ = new D.$DvtPath$$($context$$86_currLoader$$, $cmds$$3$$);
  if($context$$86_currLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$86_currLoader$$, $uri$$14$$)) {
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$86_currLoader$$, -6 + window.sw, -2), $mc$$5_x$$67$$.$addChild$($context$$86_currLoader$$)
  }
  D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$($state$$8$$, $mc$$5_x$$67$$, $ww$$11$$);
  return $mc$$5_x$$67$$
};
D.$DvtButtonLAFUtils$$.$_createPanButtonState$ = function $$DvtButtonLAFUtils$$$$_createPanButtonState$$($context$$87_image$$5$$, $uri$$15$$, $styleMap$$34$$) {
  var $mc$$6$$ = new D.$DvtContainer$$($context$$87_image$$5$$), $hitZone$$ = new D.$DvtCircle$$($context$$87_image$$5$$, 20, 20, 20);
  $hitZone$$.$setAlpha$(0);
  $hitZone$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$34$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $mc$$6$$.$addChild$($hitZone$$);
  ($context$$87_image$$5$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$87_image$$5$$, $uri$$15$$)) && $mc$$6$$.$addChild$($context$$87_image$$5$$);
  return $mc$$6$$
};
D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$ = function $$DvtButtonLAFUtils$$$$_createRecenterButtonState$$($context$$88_image$$6$$, $uri$$16$$, $styleMap$$35$$) {
  var $shape$$7$$ = new D.$DvtContainer$$($context$$88_image$$6$$), $hitZone$$1$$ = new D.$DvtCircle$$($context$$88_image$$6$$, 11, 11, 8);
  $hitZone$$1$$.$setAlpha$(0);
  $hitZone$$1$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$35$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $shape$$7$$.$addChild$($hitZone$$1$$);
  ($context$$88_image$$6$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$88_image$$6$$, $uri$$16$$)) && $shape$$7$$.$addChild$($context$$88_image$$6$$);
  return $shape$$7$$
};
D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$ = function $$DvtButtonLAFUtils$$$$_createCollapseExpandButtonState$$($context$$89_iconLoader$$, $sprite_state$$9$$, $nh$$5$$, $imageW_uri$$17$$, $styleMap$$36$$, $bR2L$$5_imageH$$) {
  $nh$$5$$ || ($nh$$5$$ = 47);
  $sprite_state$$9$$ = D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$($context$$89_iconLoader$$, $sprite_state$$9$$, $nh$$5$$, $styleMap$$36$$, $bR2L$$5_imageH$$);
  if($context$$89_iconLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$89_iconLoader$$, $imageW_uri$$17$$)) {
    $imageW_uri$$17$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$36$$, "imageWidth", 0), $bR2L$$5_imageH$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$36$$, "imageHeight", 0), $sprite_state$$9$$.$addChild$($context$$89_iconLoader$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$89_iconLoader$$, ((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$36$$, "openCloseButtonWidth", 0) - $imageW_uri$$17$$) / 2, ($nh$$5$$ - $bR2L$$5_imageH$$) / 2)
  }
  return $sprite_state$$9$$
};
D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$ = function $$DvtButtonLAFUtils$$$$_createQuickQueryButtonState$$($context$$90$$, $uri$$18$$) {
  var $iconLoader$$1$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$90$$, $uri$$18$$);
  $iconLoader$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  return $iconLoader$$1$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonBackground$ = function $$DvtButtonLAFUtils$$$$createPanButtonBackground$$($context$$91$$, $styleMap$$37$$) {
  var $shape$$8$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$91$$), $bgColor$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "background-color", D.$JSCompiler_alias_NULL$$), $borderColor$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "border-color", D.$JSCompiler_alias_NULL$$);
  "solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "fill-type", D.$JSCompiler_alias_NULL$$) ? ($shape$$8$$.$setSolidStroke$($borderColor$$1$$), $shape$$8$$.$setSolidFill$($bgColor$$1$$)) : ($shape$$8$$.$setStroke$(new D.$DvtLinearGradientStroke$$(36, ["#8D93A5", "#E0EAEB", $borderColor$$1$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $shape$$8$$.$setFill$(new D.$DvtLinearGradientFill$$(90, [$bgColor$$1$$, $bgColor$$1$$, "#5A83BE", $bgColor$$1$$], [0.9, 0.1, 0, 0.7], [0, 105 / 
  255, 150 / 255, 1], [0, 0, 40, 40])));
  return $shape$$8$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$ = function $$DvtButtonLAFUtils$$$$createPanButtonUnderlay$$($context$$92$$, $styleMap$$38$$) {
  var $shape$$9$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$92$$), $color$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$38$$, "background-color", D.$JSCompiler_alias_NULL$$);
  $shape$$9$$.$setSolidStroke$($color$$8$$);
  $shape$$9$$.$setSolidFill$($color$$8$$);
  return $shape$$9$$
};
D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$ = function $$DvtButtonLAFUtils$$$$_drawPanButtonBase$$($context$$93$$) {
  var $cmds$$4$$ = window.DvtPathUtils.moveTo(40, 20) + window.DvtPathUtils.$quadTo$(40, 20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20, 40) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(0, 
  20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20) + window.DvtPathUtils.$quadTo$(0, 20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20, 0) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(40, 
  20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20) + window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$93$$, $cmds$$4$$, "draw_pan_button")
};
D.$DvtButtonLAFUtils$$.$_setGradientBorder$ = function $$DvtButtonLAFUtils$$$$_setGradientBorder$$($shape$$10$$, $ww$$14$$, $hh$$13$$) {
  $shape$$10$$.$setSolidStroke$("#FFFFFF");
  $shape$$10$$.$setStroke$(new D.$DvtLinearGradientStroke$$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [0, 0, $ww$$14$$, $hh$$13$$], 1))
};
D.$DvtButtonLAFUtils$$.$_setButtonColors$ = function $$DvtButtonLAFUtils$$$$_setButtonColors$$($state$$11$$, $shape$$11$$, $ww$$15$$, $hh$$14$$, $styleMap$$39$$, $isDropdownItem$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$39$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    !$isDropdownItem$$ || $isDropdownItem$$ && 0 == $state$$11$$ ? (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$11$$) : (1 == $state$$11$$ || 2 == $state$$11$$) && $shape$$11$$.$setFill$(new D.$DvtSolidFill$$("#EBECED"))
  }else {
    if("skyros" == $styleMap$$39$$.skin) {
      switch($state$$11$$) {
        case 1:
          $shape$$11$$.$setFill$(new D.$DvtSolidFill$$("#FFFFFF", 0.7));
          $shape$$11$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$39$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        case 2:
          $shape$$11$$.$setFill$(new D.$DvtSolidFill$$("#B3C6DB"));
          $shape$$11$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$39$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        default:
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$11$$)
      }
    }else {
      var $fill_colors$$1$$, $fill_alphas$$1$$, $fill_ratios$$1$$;
      switch($state$$11$$) {
        case 3:
        ;
        case 0:
          $fill_colors$$1$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
          $fill_alphas$$1$$ = [0.01, 0, 0.05, 0.01];
          $fill_ratios$$1$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 1:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$11$$, $ww$$15$$, $hh$$14$$);
          $fill_colors$$1$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
          $fill_alphas$$1$$ = [0.5, 0.2, 0.1, 0.7];
          $fill_ratios$$1$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$11$$, $ww$$15$$, $hh$$14$$), $fill_colors$$1$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$1$$ = [0.1, 0.3, 0.6], $fill_ratios$$1$$ = [0, 130 / 255, 1]
      }
      $shape$$11$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$1$$, $fill_alphas$$1$$, $fill_ratios$$1$$, [0, 0, $ww$$15$$, $hh$$14$$]))
    }
  }
};
D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$ = function $$DvtButtonLAFUtils$$$$_setCloseButtonColors$$($fill$$5_state$$12$$, $shape$$12$$, $bgColor$$2_ww$$16$$, $hh$$15$$, $styleMap$$40$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$12$$)
  }else {
    var $borderColor$$2_stroke$$5$$;
    $borderColor$$2_stroke$$5$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "border-color", D.$JSCompiler_alias_NULL$$);
    if("solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "fill-type", D.$JSCompiler_alias_NULL$$)) {
      $bgColor$$2_ww$$16$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "background-color", D.$JSCompiler_alias_NULL$$);
      switch($fill$$5_state$$12$$) {
        case 0:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "backgroundAlpha", 1);
          window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "borderAlpha", 1);
          break;
        case 2:
        ;
        case 1:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "backgroundHoverAlpha", 1), window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "borderHoverAlpha", 1)
      }
      $fill$$5_state$$12$$ = new D.$DvtSolidFill$$($bgColor$$2_ww$$16$$, window.bgAlpha);
      $borderColor$$2_stroke$$5$$ = new D.$DvtSolidStroke$$($borderColor$$2_stroke$$5$$, window.strokeAlpha)
    }else {
      var $fill_colors$$2$$, $fill_alphas$$2$$, $fill_ratios$$2$$;
      switch($fill$$5_state$$12$$) {
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
      $fill$$5_state$$12$$ = new D.$DvtLinearGradientFill$$(0, $fill_colors$$2$$, $fill_alphas$$2$$, $fill_ratios$$2$$, [0, 0, $bgColor$$2_ww$$16$$, $hh$$15$$]);
      $borderColor$$2_stroke$$5$$ = new D.$DvtSolidStroke$$($borderColor$$2_stroke$$5$$, 1, 0.8)
    }
    $shape$$12$$.$setStroke$($borderColor$$2_stroke$$5$$);
    $shape$$12$$.$setFill$($fill$$5_state$$12$$)
  }
};
D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$ = function $$DvtButtonLAFUtils$$$$_setSliderButtonColors$$($state$$13$$, $shape$$13$$, $ww$$17$$) {
  var $fill_colors$$3$$, $fill_alphas$$3$$, $fill_ratios$$3$$;
  switch($state$$13$$) {
    case 0:
      $shape$$13$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
      $fill_colors$$3$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
      $fill_alphas$$3$$ = [0.6, 0.3, 0.3, 0.8];
      $fill_ratios$$3$$ = [0, 125 / 255, 130 / 255, 1];
      break;
    case 1:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$13$$, $ww$$17$$, 16);
      $fill_colors$$3$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      $fill_alphas$$3$$ = [0.4, 0.3, 0.7, 1];
      $fill_ratios$$3$$ = [0, 70 / 255, 200 / 255, 1];
      break;
    case 2:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$13$$, $ww$$17$$, 16), $fill_colors$$3$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$3$$ = [0.6, 0.5, 0.8], $fill_ratios$$3$$ = [0, 130 / 255, 1]
  }
  $shape$$13$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$3$$, $fill_alphas$$3$$, $fill_ratios$$3$$, [0, 0, $ww$$17$$, 16]))
};
D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$ = function $$DvtButtonLAFUtils$$$$GetButtonPathCommands$$($buttonWidth$$7$$, $buttonHeight$$3$$, $r$$17$$, $bidi$$1$$) {
  return $bidi$$1$$ ? ["M", $buttonWidth$$7$$, 0, "L", $r$$17$$, 0, "A", $r$$17$$, $r$$17$$, 0, 0, 0, 0, $r$$17$$, "L", 0, $buttonHeight$$3$$ - $r$$17$$, "A", $r$$17$$, $r$$17$$, 0, 0, 0, $r$$17$$, $buttonHeight$$3$$, "L", $buttonWidth$$7$$, $buttonHeight$$3$$] : ["M", 0, 0, "L", $buttonWidth$$7$$ - $r$$17$$, 0, "A", $r$$17$$, $r$$17$$, 0, 0, 1, $buttonWidth$$7$$, $r$$17$$, "L", $buttonWidth$$7$$, $buttonHeight$$3$$ - $r$$17$$, "A", $r$$17$$, $r$$17$$, 0, 0, 1, $buttonWidth$$7$$ - $r$$17$$, $buttonHeight$$3$$, 
  "L", 0, $buttonHeight$$3$$]
};
D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$ = function $$DvtButtonLAFUtils$$$$_drawOpenCloseButtonHelper$$($context$$95_shape$$14$$, $state$$14$$, $buttonHeight$$4_nh$$6$$, $styleMap$$41$$, $bR2L$$6$$) {
  $buttonHeight$$4_nh$$6$$ || ($buttonHeight$$4_nh$$6$$ = 47);
  var $r$$18$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$41$$, "border-radius", 0)), $buttonWidth$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$41$$, "openCloseButtonWidth", 0);
  $buttonHeight$$4_nh$$6$$ = window.Math.max($buttonHeight$$4_nh$$6$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$41$$, "buttonHeight", $buttonHeight$$4_nh$$6$$));
  $context$$95_shape$$14$$ = new D.$DvtPath$$($context$$95_shape$$14$$, D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$8$$, $buttonHeight$$4_nh$$6$$, $r$$18$$, $bR2L$$6$$));
  D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$($state$$14$$, $context$$95_shape$$14$$, $buttonWidth$$8$$, $buttonHeight$$4_nh$$6$$, $styleMap$$41$$);
  return $context$$95_shape$$14$$
};
D.$DvtButtonLAFUtils$$.$_drawBaseButton$ = function $$DvtButtonLAFUtils$$$$_drawBaseButton$$($context$$96_shape$$15$$, $state$$15$$, $r$$19$$, $ww$$18$$, $hh$$17$$, $styleMap$$42$$) {
  $context$$96_shape$$15$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$96_shape$$15$$, $r$$19$$, $ww$$18$$, $hh$$17$$, $styleMap$$42$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$15$$, $context$$96_shape$$15$$, $ww$$18$$, $hh$$17$$ + 2 * $r$$19$$, $styleMap$$42$$);
  return $context$$96_shape$$15$$
};
D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$ = function $$DvtButtonLAFUtils$$$$_createBaseButtonShape$$($context$$97$$, $r$$20$$, $ww$$19$$, $hh$$18$$, $styleMap$$43_x$$69$$) {
  if("skyros" == $styleMap$$43_x$$69$$.skin) {
    return new D.$DvtRect$$($context$$97$$, 0, 0, $ww$$19$$, $hh$$18$$)
  }
  $ww$$19$$ -= 2 * $r$$20$$;
  $hh$$18$$ -= 2 * $r$$20$$;
  $styleMap$$43_x$$69$$ = $ww$$19$$ + $r$$20$$;
  var $y$$46$$ = $hh$$18$$ + $r$$20$$, $cmds$$5$$ = window.DvtPathUtils.moveTo($styleMap$$43_x$$69$$ + $r$$20$$, $y$$46$$) + window.DvtPathUtils.$quadTo$($r$$20$$ + $styleMap$$43_x$$69$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $y$$46$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $styleMap$$43_x$$69$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $y$$46$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $styleMap$$43_x$$69$$, $r$$20$$ + $y$$46$$, $styleMap$$43_x$$69$$, 
  $r$$20$$ + $y$$46$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$69$$, $y$$46$$ + $r$$20$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$69$$ - $ww$$19$$, $r$$20$$ + $y$$46$$);
  $styleMap$$43_x$$69$$ -= $ww$$19$$;
  $cmds$$5$$ += window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $styleMap$$43_x$$69$$, $r$$20$$ + $y$$46$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $styleMap$$43_x$$69$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $y$$46$$) + window.DvtPathUtils.$quadTo$(-$r$$20$$ + $styleMap$$43_x$$69$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $y$$46$$, -$r$$20$$ + $styleMap$$43_x$$69$$, $y$$46$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$69$$ - $r$$20$$, $y$$46$$) + 
  window.DvtPathUtils.lineTo($styleMap$$43_x$$69$$ - $r$$20$$, $y$$46$$ - $hh$$18$$);
  $y$$46$$ -= $hh$$18$$;
  $cmds$$5$$ += window.DvtPathUtils.$quadTo$(-$r$$20$$ + $styleMap$$43_x$$69$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $y$$46$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $styleMap$$43_x$$69$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $y$$46$$) + window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $styleMap$$43_x$$69$$, -$r$$20$$ + $y$$46$$, $styleMap$$43_x$$69$$, -$r$$20$$ + $y$$46$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$69$$, -$r$$20$$ + $y$$46$$) + 
  window.DvtPathUtils.lineTo($styleMap$$43_x$$69$$ + $ww$$19$$, -$r$$20$$ + $y$$46$$);
  $styleMap$$43_x$$69$$ += $ww$$19$$;
  $cmds$$5$$ += window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $styleMap$$43_x$$69$$, -$r$$20$$ + $y$$46$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $styleMap$$43_x$$69$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $y$$46$$) + window.DvtPathUtils.$quadTo$($r$$20$$ + $styleMap$$43_x$$69$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $y$$46$$, $r$$20$$ + $styleMap$$43_x$$69$$, $y$$46$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$69$$ + $r$$20$$, $y$$46$$ + 
  $hh$$18$$) + window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$97$$, $cmds$$5$$)
};
D.$DvtButtonLAFUtils$$.$drawZoomSliderCrossLine$ = function $$DvtButtonLAFUtils$$$$drawZoomSliderCrossLine$$($yy$$14$$) {
  (0,window.lineStyle)(1, "#656D81", 1, D.$JSCompiler_alias_TRUE$$);
  window.DvtPathUtils.moveTo(0, $yy$$14$$);
  window.DvtPathUtils.lineTo(window.NaN, $yy$$14$$);
  (0,window.lineStyle)(1, "#FFFFFF", 1, D.$JSCompiler_alias_TRUE$$);
  window.DvtPathUtils.moveTo(0, $yy$$14$$ + 1);
  window.DvtPathUtils.lineTo(window.NaN, $yy$$14$$ + 1)
};
D.$DvtButtonLAFUtils$$.$drawDropdownShape$ = function $$DvtButtonLAFUtils$$$$drawDropdownShape$$($context$$99$$, $ww$$21$$, $hh$$19$$, $r$$21_styleMap$$44$$) {
  $r$$21_styleMap$$44$$ = (0,D.$DvtStyleUtils$getStyle$$)($r$$21_styleMap$$44$$, "radius", 0);
  $ww$$21$$ -= 2 * $r$$21_styleMap$$44$$;
  $hh$$19$$ -= $r$$21_styleMap$$44$$;
  var $x$$70$$ = $ww$$21$$ + $r$$21_styleMap$$44$$, $y$$47$$ = $hh$$19$$, $cmds$$7$$ = window.DvtPathUtils.moveTo($x$$70$$ + $r$$21_styleMap$$44$$, $y$$47$$) + window.DvtPathUtils.$quadTo$($r$$21_styleMap$$44$$ + $x$$70$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$21_styleMap$$44$$ + $y$$47$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$21_styleMap$$44$$ + $x$$70$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$21_styleMap$$44$$ + $y$$47$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$21_styleMap$$44$$ + 
  $x$$70$$, $r$$21_styleMap$$44$$ + $y$$47$$, $x$$70$$, $r$$21_styleMap$$44$$ + $y$$47$$) + window.DvtPathUtils.lineTo($x$$70$$, $r$$21_styleMap$$44$$ + $y$$47$$) + window.DvtPathUtils.lineTo($x$$70$$ - $ww$$21$$, $r$$21_styleMap$$44$$ + $y$$47$$), $x$$70$$ = $x$$70$$ - $ww$$21$$, $cmds$$7$$ = $cmds$$7$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$21_styleMap$$44$$ + $x$$70$$, $r$$21_styleMap$$44$$ + $y$$47$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$21_styleMap$$44$$ + 
  $x$$70$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$21_styleMap$$44$$ + $y$$47$$) + window.DvtPathUtils.$quadTo$(-$r$$21_styleMap$$44$$ + $x$$70$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$21_styleMap$$44$$ + $y$$47$$, -$r$$21_styleMap$$44$$ + $x$$70$$, $y$$47$$) + window.DvtPathUtils.lineTo(-$r$$21_styleMap$$44$$ + $x$$70$$, $y$$47$$) + window.DvtPathUtils.lineTo(-$r$$21_styleMap$$44$$ + $x$$70$$, $y$$47$$ - $hh$$19$$)), $y$$47$$ = $y$$47$$ - $hh$$19$$, $cmds$$7$$ = $cmds$$7$$ + (window.DvtPathUtils.lineTo($x$$70$$ + 
  $ww$$21$$ + $r$$21_styleMap$$44$$, $y$$47$$) + window.DvtPathUtils.lineTo($x$$70$$ + $ww$$21$$ + $r$$21_styleMap$$44$$, $y$$47$$ + $hh$$19$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$99$$, $cmds$$7$$)
};
D.$DvtButtonLAFUtils$$.$dropShadowFilter$ = function $$DvtButtonLAFUtils$$$$dropShadowFilter$$($context$$100$$, $t$$) {
  var $filter$$ = new window.DvtDropShadowFilter(7, 45, "#5A83BE", 0.9, 14, 14, 1, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), $filterArray$$ = [];
  $filterArray$$.push($filter$$);
  $t$$.filters = $filterArray$$
};
D.$DvtButtonLAFUtils$$.$_getDimForced$ = function $$DvtButtonLAFUtils$$$$_getDimForced$$($context$$101$$, $obj$$33$$) {
  $obj$$33$$ instanceof D.$DvtButton$$ && ($obj$$33$$ = $obj$$33$$.$getChildAt$(0));
  return(0,D.$DvtDisplayableUtils$_getDimForced$$)($context$$101$$, $obj$$33$$)
};
D.$DvtButtonLAFUtils$$.$parseStyle$ = function $$DvtButtonLAFUtils$$$$parseStyle$$($dispObj$$2$$, $buttonStyle$$) {
  var $fillType$$2_linearGradient$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$, $borderColor$$3_stroke$$6$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$, $backgroundColor$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, $background$$;
  $buttonStyle$$ && ($buttonStyle$$.$getStyle$("fill-type") && ($fillType$$2_linearGradient$$ = $buttonStyle$$.$getStyle$("fill-type")), $buttonStyle$$.$getStyle$("border-color") && ($borderColor$$3_stroke$$6$$ = $buttonStyle$$.$getStyle$("border-color")), $buttonStyle$$.$getStyle$("background-color") && ($backgroundColor$$ = $buttonStyle$$.$getStyle$("background-color")), $buttonStyle$$.$getStyle$("background") && ($background$$ = $buttonStyle$$.$getStyle$("background")));
  var $borderColor$$3_stroke$$6$$ = new D.$DvtSolidStroke$$($borderColor$$3_stroke$$6$$), $fill$$6_fill_colors$$4_midColor$$;
  if("solid" == $fillType$$2_linearGradient$$) {
    $fill$$6_fill_colors$$4_midColor$$ = new D.$DvtSolidFill$$($backgroundColor$$)
  }else {
    var $endColor$$1_fill_alphas$$4$$, $fill_ratios$$4$$, $degree$$;
    if($background$$ && 0 <= $background$$.indexOf("linear-gradient")) {
      if($fillType$$2_linearGradient$$ = (0,D.$DvtGradientParser$parseCSSGradient$$)($background$$)) {
        $degree$$ = $fillType$$2_linearGradient$$.$getAngle$(), $fill$$6_fill_colors$$4_midColor$$ = $fillType$$2_linearGradient$$.$_arColors$, $endColor$$1_fill_alphas$$4$$ = $fillType$$2_linearGradient$$.$_arAlphas$, $fill_ratios$$4$$ = $fillType$$2_linearGradient$$.$_arRatios$
      }
    }else {
      $fill$$6_fill_colors$$4_midColor$$ = $backgroundColor$$, $endColor$$1_fill_alphas$$4$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$6_fill_colors$$4_midColor$$ != D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ && ($endColor$$1_fill_alphas$$4$$ = D.$DvtColorUtils$$.$inferColor$(D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$6_fill_colors$$4_midColor$$)), $fill$$6_fill_colors$$4_midColor$$ = [$fill$$6_fill_colors$$4_midColor$$, $endColor$$1_fill_alphas$$4$$], 
      $endColor$$1_fill_alphas$$4$$ = [0.6, 0.8], $fill_ratios$$4$$ = [0, 1], $degree$$ = -270
    }
    $fill$$6_fill_colors$$4_midColor$$ = new D.$DvtLinearGradientFill$$($degree$$, $fill$$6_fill_colors$$4_midColor$$, $endColor$$1_fill_alphas$$4$$, $fill_ratios$$4$$)
  }
  $dispObj$$2$$.$setFill$($fill$$6_fill_colors$$4_midColor$$);
  $dispObj$$2$$.$setStroke$($borderColor$$3_stroke$$6$$)
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
D.DvtCommonLegend = function $DvtCommonLegend$($context$$12$$, $w$$6$$, $h$$5$$, $images$$, $styleMap$$1$$) {
  this.Init($context$$12$$, $w$$6$$, $h$$5$$, $images$$, $styleMap$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtCommonLegend, D.$DvtContainer$$, "DvtCommonLegend");
D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$ = "isLegendDisclosed";
D.DvtCommonLegend.$SKIN_NAME$ = "skin";
D.$JSCompiler_prototypeAlias$$ = D.DvtCommonLegend.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$13$$, $w$$7$$, $h$$6$$, $images$$1$$, $styleMap$$2$$) {
  D.DvtCommonLegend.$superclass$.Init.call(this, $context$$13$$, D.$JSCompiler_alias_NULL$$, $w$$7$$, $h$$6$$);
  this.$_isBiDi$ = D.$DvtAgent$$.$isRightToLeft$();
  this.$_width$ = this.$_viewportWidth$ = $w$$7$$;
  this.$_height$ = $h$$6$$;
  this.$_attrLookUp$ = {};
  this.$_hideAttrsLookUp$ = {};
  this.$_associations$ = [];
  this.$_addSeparators$ = D.$JSCompiler_alias_FALSE$$;
  this.$_separators$ = [];
  this.$_rollOverEnabled$ = this.$_showHideEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_hidden$ = [];
  this.$_images$ = $images$$1$$;
  this.$_styleMap$ = $styleMap$$2$$;
  this.$_isWordWrap$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isWordWrap$ = (0,D.$JSCompiler_get$$)("$_isWordWrap$");
D.$JSCompiler_prototypeAlias$$.$setXML$ = (0,D.$JSCompiler_set$$)("$_legendNode$");
D.$JSCompiler_prototypeAlias$$.$setJSON$ = function $$JSCompiler_prototypeAlias$$$$setJSON$$($json$$) {
  $json$$ && (this.$_legendJSON$ = $json$$)
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_StaticMethods__renderLegendSection$$ = function $$JSCompiler_StaticMethods__renderLegendSection$$$($JSCompiler_StaticMethods__renderLegendSection$self$$, $childNodes_legendSectionNode$$, $parent$$4$$, $availSpace$$4$$, $isBiDi$$) {
  var $section$$1_sectionTitle$$ = $childNodes_legendSectionNode$$.$getAttr$("label"), $section$$1_sectionTitle$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, $section$$1_sectionTitle$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$);
  $section$$1_sectionTitle$$.$render$($parent$$4$$, $availSpace$$4$$, $isBiDi$$);
  if($childNodes_legendSectionNode$$ = $childNodes_legendSectionNode$$.$getChildNodes$()) {
    for(var $i$$28$$ = 0;$i$$28$$ < $childNodes_legendSectionNode$$.length;$i$$28$$++) {
      var $childNode_itemChildren$$inline_753_itemNode$$inline_750$$ = $childNodes_legendSectionNode$$[$i$$28$$], $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$;
      if("item" == $childNode_itemChildren$$inline_753_itemNode$$inline_750$$.getName()) {
        $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$ = $JSCompiler_StaticMethods__renderLegendSection$self$$;
        var $i$$inline_754_prop$$inline_751$$ = {};
        $i$$inline_754_prop$$inline_751$$.itemId = $childNode_itemChildren$$inline_753_itemNode$$inline_750$$.$getAttr$("itemId");
        $i$$inline_754_prop$$inline_751$$.attributeGroupId = $childNode_itemChildren$$inline_753_itemNode$$inline_750$$.$getAttr$("attributeGroupId");
        $i$$inline_754_prop$$inline_751$$.hideAttrs = $childNode_itemChildren$$inline_753_itemNode$$inline_750$$.$getAttr$("hideAttrs");
        $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$.$_context$, $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$, $i$$inline_754_prop$$inline_751$$, $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$.$_legendItemStyle$, 
        $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$.$_styleMap$);
        $childNode_itemChildren$$inline_753_itemNode$$inline_750$$ = $childNode_itemChildren$$inline_753_itemNode$$inline_750$$.$getChildNodes$();
        for($i$$inline_754_prop$$inline_751$$ = 0;$i$$inline_754_prop$$inline_751$$ < $childNode_itemChildren$$inline_753_itemNode$$inline_750$$.length;$i$$inline_754_prop$$inline_751$$++) {
          if("marker" == $childNode_itemChildren$$inline_753_itemNode$$inline_750$$[$i$$inline_754_prop$$inline_751$$].getName()) {
            var $legendRow$$inline_8815$$ = $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$, $markerNode$$inline_8816_opacity$$inline_8821$$ = $childNode_itemChildren$$inline_753_itemNode$$inline_750$$[$i$$inline_754_prop$$inline_751$$], $url$$inline_8817$$ = $markerNode$$inline_8816_opacity$$inline_8821$$.$getAttr$("url"), $shape$$inline_8818$$ = $markerNode$$inline_8816_opacity$$inline_8821$$.$getAttr$("shapeType"), $color$$inline_8819$$ = $markerNode$$inline_8816_opacity$$inline_8821$$.$getAttr$("color"), 
            $pattern$$inline_8820$$ = $markerNode$$inline_8816_opacity$$inline_8821$$.$getAttr$("pattern");
            ($markerNode$$inline_8816_opacity$$inline_8821$$ = $markerNode$$inline_8816_opacity$$inline_8821$$.$getAttr$("opacity")) && ($markerNode$$inline_8816_opacity$$inline_8821$$ = (0,window.parseFloat)($markerNode$$inline_8816_opacity$$inline_8821$$));
            $legendRow$$inline_8815$$.setMarker($url$$inline_8817$$, $shape$$inline_8818$$, $color$$inline_8819$$, $pattern$$inline_8820$$, $markerNode$$inline_8816_opacity$$inline_8821$$)
          }else {
            "text" == $childNode_itemChildren$$inline_753_itemNode$$inline_750$$[$i$$inline_754_prop$$inline_751$$].getName() && $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$.$setText$($childNode_itemChildren$$inline_753_itemNode$$inline_750$$[$i$$inline_754_prop$$inline_751$$].$getAttr$("value"))
          }
        }
      }else {
        "text" == $childNode_itemChildren$$inline_753_itemNode$$inline_750$$.getName() && ($JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$), 
        $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$.$setText$($childNode_itemChildren$$inline_753_itemNode$$inline_750$$.$getAttr$("value")))
      }
      $JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$ && ($JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$.$render$($section$$1_sectionTitle$$, $availSpace$$4$$, $isBiDi$$), $section$$1_sectionTitle$$.$addItem$($JSCompiler_StaticMethods__parseItem$self$$inline_749_legendListItem$$2_legendListItem$$inline_752$$))
    }
  }
  $parent$$4$$.$addChild$($section$$1_sectionTitle$$);
  $availSpace$$4$$.y = $availSpace$$4$$.y - $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap;
  return $section$$1_sectionTitle$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$ = function $$JSCompiler_StaticMethods__renderLegendSectionJSON$$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$, $parent$$5$$, $availSpace$$5$$, $isBiDi$$1$$) {
  var $section$$2$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$.label, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$);
  $section$$2$$.$render$($parent$$5$$, $availSpace$$5$$, $isBiDi$$1$$);
  var $legendItems$$1$$ = $legendSectionNode$$1_textItems$$.item, $itemNode$$inline_757_legendListItem$$3$$;
  if($legendItems$$1$$) {
    for(var $i$$29$$ = 0;$i$$29$$ < $legendItems$$1$$.length;$i$$29$$++) {
      var $JSCompiler_StaticMethods__parseItemJSON$self$$inline_756_legendListItem$$inline_759$$ = $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$;
      $itemNode$$inline_757_legendListItem$$3$$ = $legendItems$$1$$[$i$$29$$];
      var $prop$$inline_758_url$$inline_8825$$ = {};
      $prop$$inline_758_url$$inline_8825$$.itemId = $itemNode$$inline_757_legendListItem$$3$$.itemId;
      $prop$$inline_758_url$$inline_8825$$.attributeGroupId = $itemNode$$inline_757_legendListItem$$3$$.attributeGroupId;
      $prop$$inline_758_url$$inline_8825$$.hideAttrs = $itemNode$$inline_757_legendListItem$$3$$.hideAttrs;
      var $JSCompiler_StaticMethods__parseItemJSON$self$$inline_756_legendListItem$$inline_759$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItemJSON$self$$inline_756_legendListItem$$inline_759$$.$_context$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_756_legendListItem$$inline_759$$, $prop$$inline_758_url$$inline_8825$$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_756_legendListItem$$inline_759$$.$_legendItemStyle$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_756_legendListItem$$inline_759$$.$_styleMap$), 
      $markerNode$$inline_8824_opacity$$inline_8829$$ = $itemNode$$inline_757_legendListItem$$3$$.marker, $prop$$inline_758_url$$inline_8825$$ = $markerNode$$inline_8824_opacity$$inline_8829$$.url, $shape$$inline_8826$$ = $markerNode$$inline_8824_opacity$$inline_8829$$.shapeType, $color$$inline_8827$$ = $markerNode$$inline_8824_opacity$$inline_8829$$.color, $pattern$$inline_8828$$ = $markerNode$$inline_8824_opacity$$inline_8829$$.pattern;
      ($markerNode$$inline_8824_opacity$$inline_8829$$ = $markerNode$$inline_8824_opacity$$inline_8829$$.opacity) && ($markerNode$$inline_8824_opacity$$inline_8829$$ = (0,window.parseFloat)($markerNode$$inline_8824_opacity$$inline_8829$$));
      $JSCompiler_StaticMethods__parseItemJSON$self$$inline_756_legendListItem$$inline_759$$.setMarker($prop$$inline_758_url$$inline_8825$$, $shape$$inline_8826$$, $color$$inline_8827$$, $pattern$$inline_8828$$, $markerNode$$inline_8824_opacity$$inline_8829$$);
      $JSCompiler_StaticMethods__parseItemJSON$self$$inline_756_legendListItem$$inline_759$$.$setText$($itemNode$$inline_757_legendListItem$$3$$.text.value);
      if($itemNode$$inline_757_legendListItem$$3$$ = $JSCompiler_StaticMethods__parseItemJSON$self$$inline_756_legendListItem$$inline_759$$) {
        $itemNode$$inline_757_legendListItem$$3$$.$render$($section$$2$$, $availSpace$$5$$, $isBiDi$$1$$), $section$$2$$.$addItem$($itemNode$$inline_757_legendListItem$$3$$)
      }
    }
  }
  if($legendSectionNode$$1_textItems$$ = $legendSectionNode$$1_textItems$$.text) {
    for($i$$29$$ = 0;$i$$29$$ < $legendSectionNode$$1_textItems$$.length;$i$$29$$++) {
      $itemNode$$inline_757_legendListItem$$3$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$), $itemNode$$inline_757_legendListItem$$3$$.$setText$($legendSectionNode$$1_textItems$$[$i$$29$$].value), $itemNode$$inline_757_legendListItem$$3$$ && 
      ($itemNode$$inline_757_legendListItem$$3$$.$render$($section$$2$$, $availSpace$$5$$, $isBiDi$$1$$), $section$$2$$.$addItem$($itemNode$$inline_757_legendListItem$$3$$))
    }
  }
  $parent$$5$$.$addChild$($section$$2$$);
  $availSpace$$5$$.y = $availSpace$$5$$.y - $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$.rowColGap;
  return $section$$2$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$ = function $$JSCompiler_StaticMethods__renderLegendSectionGroup$$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $childNodes$$1_legendSectionNode$$2$$, $bidiMultiplier_parent$$6$$, $availSpace$$6$$, $isBiDi$$2$$) {
  var $sectionGroup_sectionTitle$$2$$ = $childNodes$$1_legendSectionNode$$2$$.$getAttr$("label"), $disclosed$$2_i$$30$$ = "true" == $childNodes$$1_legendSectionNode$$2$$.$getAttr$("disclosed"), $childNode$$1_expandTooltip$$1_section$$3$$ = $childNodes$$1_legendSectionNode$$2$$.$getAttr$("expandTooltip"), $collapseTooltip$$1$$ = $childNodes$$1_legendSectionNode$$2$$.$getAttr$("collapseTooltip"), $sectionGroup_sectionTitle$$2$$ = new D.$DvtCommonLegendSectionGroup$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_context$, 
  $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $sectionGroup_sectionTitle$$2$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_sectionGroupTitleStyle$, $collapseTooltip$$1$$, $childNode$$1_expandTooltip$$1_section$$3$$, $disclosed$$2_i$$30$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$);
  $sectionGroup_sectionTitle$$2$$.$render$($bidiMultiplier_parent$$6$$, $availSpace$$6$$, $isBiDi$$2$$);
  $bidiMultiplier_parent$$6$$ = $isBiDi$$2$$ ? -1 : 1;
  if($childNodes$$1_legendSectionNode$$2$$ = $childNodes$$1_legendSectionNode$$2$$.$getChildNodes$()) {
    for($disclosed$$2_i$$30$$ = 0;$disclosed$$2_i$$30$$ < $childNodes$$1_legendSectionNode$$2$$.length;$disclosed$$2_i$$30$$++) {
      $childNode$$1_expandTooltip$$1_section$$3$$ = $childNodes$$1_legendSectionNode$$2$$[$disclosed$$2_i$$30$$], "section" == $childNode$$1_expandTooltip$$1_section$$3$$.getName() && ($availSpace$$6$$.x += ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$6$$, $childNode$$1_expandTooltip$$1_section$$3$$ = (0,D.$JSCompiler_StaticMethods__renderLegendSection$$)($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, 
      $childNode$$1_expandTooltip$$1_section$$3$$, $sectionGroup_sectionTitle$$2$$, $availSpace$$6$$, $isBiDi$$2$$), $availSpace$$6$$.x -= ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$6$$, $sectionGroup_sectionTitle$$2$$.$addItem$($childNode$$1_expandTooltip$$1_section$$3$$))
    }
  }
  $availSpace$$6$$.y = $availSpace$$6$$.y - $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap;
  return $sectionGroup_sectionTitle$$2$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$ = function $$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$$($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$, $bidiMultiplier$$1_parent$$7$$, $availSpace$$7$$, $isBiDi$$3$$) {
  var $sectionGroup$$1$$ = new D.$DvtCommonLegendSectionGroup$$($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$.label, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_sectionGroupTitleStyle$, $legendSectionNode$$3_sections$$.collapseTooltip, $legendSectionNode$$3_sections$$.expandTooltip, "true" == $legendSectionNode$$3_sections$$.disclosed, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$);
  $sectionGroup$$1$$.$render$($bidiMultiplier$$1_parent$$7$$, $availSpace$$7$$, $isBiDi$$3$$);
  $bidiMultiplier$$1_parent$$7$$ = $isBiDi$$3$$ ? -1 : 1;
  if($legendSectionNode$$3_sections$$ = $legendSectionNode$$3_sections$$.section) {
    for(var $i$$31$$ = 0;$i$$31$$ < $legendSectionNode$$3_sections$$.length;$i$$31$$++) {
      $availSpace$$7$$.x += ($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap) * $bidiMultiplier$$1_parent$$7$$;
      var $section$$4$$ = (0,D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$)($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$[$i$$31$$], $sectionGroup$$1$$, $availSpace$$7$$, $isBiDi$$3$$);
      $availSpace$$7$$.x -= ($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap) * $bidiMultiplier$$1_parent$$7$$;
      $sectionGroup$$1$$.$addItem$($section$$4$$)
    }
  }
  $availSpace$$7$$.y = $availSpace$$7$$.y - $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap;
  return $sectionGroup$$1$$
};
D.$JSCompiler_StaticMethods__renderSeparator$$ = function $$JSCompiler_StaticMethods__renderSeparator$$$($JSCompiler_StaticMethods__renderSeparator$self$$, $container$$1$$, $availSpace$$8$$) {
  $availSpace$$8$$.y = $availSpace$$8$$.y - $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
  var $line1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$8$$.x, $availSpace$$8$$.y, $availSpace$$8$$.x, $availSpace$$8$$.y);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line1$$);
  $line1$$.$setSolidStroke$($JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorColor);
  $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line1$$);
  var $separator$$;
  if("alta" == $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.skin) {
    $separator$$ = $line1$$
  }else {
    $availSpace$$8$$.y++;
    var $line2$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$8$$.x, $availSpace$$8$$.y, $availSpace$$8$$.x, $availSpace$$8$$.y);
    $line2$$.$setSolidStroke$("#FFFFFF");
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line2$$);
    $separator$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$);
    $separator$$.$addChild$($line1$$);
    $separator$$.$addChild$($line2$$);
    $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line2$$)
  }
  $container$$1$$.$addChild$($separator$$);
  $availSpace$$8$$.y += $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
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
  if(this.$_legendNode$) {
    this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
    this.$_title$ = this.$_legendNode$.$getAttr$("label");
    this.$_isDisclosed$ = "true" == this.$_legendNode$.$getAttr$("disclosed");
    var $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ = this.$_legendNode$.getElementsByTagName("style");
    if($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ && ($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$[0].$getChildNodes$())) {
      for(var $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = 0;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ < $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.length;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$++) {
        var $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$[$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$];
        "legend-title" == $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.getName() ? this.$_legendTitleStyle$ = $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.getTextContent() : "sectionGroup-title" == $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.getName() ? 
        this.$_sectionGroupTitleStyle$ = $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.getTextContent() : "section-title" == $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.getName() ? this.$_sectionTitleStyle$ = $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.getTextContent() : 
        "legend-item" == $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.getName() && (this.$_legendItemStyle$ = $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.getTextContent())
      }
    }
    if($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ = this.$_legendNode$.$getAttr$("noWrap")) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$
    }
    $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.$w$ - 
    $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.x, this.$_isBiDi$ && ($childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.$w$ - 
    $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$), 0 < $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ && (this.$_isBiDi$ && $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$setTextString$(this.$_title$), $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$setX$($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.x), 
    $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$setY$($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$, 
    $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.$h$, this.$_legendContent$), $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$getDimensions$()) && 
    0 < $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$h$))) {
      $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.y = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.y + $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$h$ + 
      this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ = this.$_legendNode$.$getChildNodes$()) {
      for($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = 0;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ < $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.length;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$++) {
        var $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$ = $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$[$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$];
        if("separatorDef" == $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$.getName() && ($childNode$$inline_769_separators$$inline_770_separators$$inline_782$$ = $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$.$getChildNodes$(), 0 < $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$.length && "separator" == $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$[0].getName())) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
      for($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = 0;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ < $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.length;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$++) {
        $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$ = $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$[$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$], $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.x = 
        this.$_isBiDi$ ? this.$_width$ : 0, "sectionGroup" == $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$.getName() ? (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$)(this, $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$, this.$_legendContent$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$, this.$_isBiDi$))) : "section" == $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$.getName() && 
        (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSection$$)(this, $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$, this.$_legendContent$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$, this.$_isBiDi$)))
      }
    }
  }else {
    this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
    this.$_title$ = this.$_legendJSON$.label;
    this.$_isDisclosed$ = "true" == this.$_legendJSON$.disclosed;
    if($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ = this.$_legendJSON$.style) {
      this.$_legendTitleStyle$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$["legend-title"], this.$_sectionGroupTitleStyle$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$["sectionGroup-title"], 
      this.$_sectionTitleStyle$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$["section-title"], this.$_legendItemStyle$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$["legend-item"]
    }
    if($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ = this.$_legendJSON$.noWrap) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$
    }
    $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.$w$ - 
    $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.x, this.$_isBiDi$ && ($childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.$w$ - 
    $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$), 0 < $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ && (this.$_isBiDi$ && $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$setTextString$(this.$_title$), $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$setX$($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.x), 
    $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$setY$($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$, 
    $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.$h$, this.$_legendContent$), $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$getDimensions$()) && 
    0 < $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$h$))) {
      $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.y = $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.y + $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$.$h$ + 
      this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ = this.$_legendJSON$.separatorDef) {
      for($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = 0;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ < $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.length;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$++) {
        if(($childNode$$inline_769_separators$$inline_770_separators$$inline_782$$ = $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$[$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$].separator) && 0 < $childNode$$inline_769_separators$$inline_770_separators$$inline_782$$.length) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ = this.$_legendJSON$.sectionGroup;
    $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.x = this.$_isBiDi$ ? this.$_width$ : 0;
    if($childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$) {
      for($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = 0;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ < $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.length;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$)(this, $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$[$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$], this.$_legendContent$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$, 
        this.$_isBiDi$))
      }
    }
    if($childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$ = this.$_legendJSON$.section) {
      for($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = 0;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ < $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$.length;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$)(this, $childNode$$inline_8835_childNodes$$inline_767_fitWidth$$inline_765_fitWidth$$inline_778_sectionGroups$$inline_783_sections$$inline_784_separatorDefs$$inline_780$$[$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$], this.$_legendContent$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$, 
        this.$_isBiDi$))
      }
    }
  }
  this.$_dim$ = this.$getDimensions$();
  for($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ = 0;$availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ < this.$_separators$.length;$availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$++) {
    this.$_isBiDi$ ? (this.$_dim$.x = this.$_separators$[$availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$].$getX1$() - this.$_dim$.$w$, this.$_separators$[$availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$].$setX2$(this.$_dim$.x)) : 
    this.$_separators$[$availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$].$setX2$(this.$_dim$.$w$ + this.$_separators$[$availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$].$getX1$())
  }
  this.$_eventHandler$.$addListeners$(this);
  for($i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ = 0;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$ < this.$_associations$.length;$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$++) {
    $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$ = this.$_associations$[$i$$inline_768_i$$inline_781_i$$inline_8834_legendTitle$$inline_764_legendTitle$$inline_777_titleDim$$inline_766_titleDim$$inline_779$$], this.$_eventHandler$.$associate$($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$, 
    $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$), this.$_hidden$ && -1 < D.$DvtArrayUtils$$.$getIndex$(this.$_hidden$, $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.$getAttributeGroup$() + 
    ":" + $availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$.$getItemId$()) && (0,D.$JSCompiler_StaticMethods_filterRow$$)($availSpace$$inline_763_availSpace$$inline_776_childNodes$$inline_8833_j$$inline_771_j$$inline_785_legendRow$$inline_772_legendRow$$inline_786_legendStyleNode$$inline_8832_legendStyleNode$$inline_8841_noWrap$$inline_762_noWrap$$inline_775$$)
  }
  this.$_isBiDi$ && this.$_legendContent$.$setTranslateX$(-this.$_dim$.x)
};
D.$DvtCommonLegendSectionGroup$$ = function $$DvtCommonLegendSectionGroup$$$($context$$14$$, $legend$$2$$, $sectionTitle$$4$$, $sectionTitleStyle$$, $collapseTooltip$$3$$, $expandTooltip$$3$$, $disclosed$$4$$, $styleMap$$3$$) {
  this.Init($context$$14$$, $legend$$2$$, $sectionTitle$$4$$, $sectionTitleStyle$$, $collapseTooltip$$3$$, $expandTooltip$$3$$, $disclosed$$4$$, $styleMap$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSectionGroup$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSectionGroup$$.prototype.Init = function $$DvtCommonLegendSectionGroup$$$$Init$($context$$15$$, $legend$$3$$, $sectionTitle$$5$$, $sectionTitleStyle$$1$$, $collapseTooltip$$4$$, $expandTooltip$$4$$, $disclosed$$5$$, $styleMap$$4$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$15$$);
  this.$_title$ = $sectionTitle$$5$$;
  this.$_titleStyle$ = $sectionTitleStyle$$1$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$3$$;
  this.$_collapseTooltip$ = $collapseTooltip$$4$$;
  this.$_expandTooltip$ = $expandTooltip$$4$$;
  this.$_buttonState$ = $disclosed$$5$$ ? 0 : 1;
  this.$_styleMap$ = $styleMap$$4$$
};
D.$JSCompiler_StaticMethods__createButton$$ = function $$JSCompiler_StaticMethods__createButton$$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$, $dwn$$1_dwn$$inline_803_images$$3$$, $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$, $buttonState_ena$$1_ena$$inline_801$$) {
  if(!$dwn$$1_dwn$$inline_803_images$$3$$) {
    return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$)
  }
  if(!$dwn$$1_dwn$$inline_803_images$$3$$.$getAttr$) {
    a: {
      switch($buttonState_ena$$1_ena$$inline_801$$) {
        case 1:
          $buttonState_ena$$1_ena$$inline_801$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.sectionColEna, $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$);
          var $ovr$$1_ovr$$inline_802$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.sectionColOvr, $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$);
          $dwn$$1_dwn$$inline_803_images$$3$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.sectionColDwn, $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$);
          $JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$ = new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $buttonState_ena$$1_ena$$inline_801$$, $ovr$$1_ovr$$inline_802$$, $dwn$$1_dwn$$inline_803_images$$3$$);
          break a;
        default:
          $buttonState_ena$$1_ena$$inline_801$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.sectionExpEna, $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$), $ovr$$1_ovr$$inline_802$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.sectionExpOvr, $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$), $dwn$$1_dwn$$inline_803_images$$3$$ = 
          new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.sectionExpDwn, $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$), $JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$ = new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $buttonState_ena$$1_ena$$inline_801$$, $ovr$$1_ovr$$inline_802$$, $dwn$$1_dwn$$inline_803_images$$3$$)
      }
    }
    return $JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$
  }
  switch($buttonState_ena$$1_ena$$inline_801$$) {
    case 1:
      return $buttonState_ena$$1_ena$$inline_801$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.$getAttr$("sectionColEna"), $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$), $ovr$$1_ovr$$inline_802$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.$getAttr$("sectionColOvr"), $x$$61$$, $y$$38$$, $width$$15$$, 
      $height$$15$$), $dwn$$1_dwn$$inline_803_images$$3$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.$getAttr$("sectionColDwn"), $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$), new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $buttonState_ena$$1_ena$$inline_801$$, $ovr$$1_ovr$$inline_802$$, $dwn$$1_dwn$$inline_803_images$$3$$);
    default:
      return $buttonState_ena$$1_ena$$inline_801$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.$getAttr$("sectionExpEna"), $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$), $ovr$$1_ovr$$inline_802$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.$getAttr$("sectionExpOvr"), $x$$61$$, $y$$38$$, $width$$15$$, 
      $height$$15$$), $dwn$$1_dwn$$inline_803_images$$3$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $dwn$$1_dwn$$inline_803_images$$3$$.$getAttr$("sectionExpDwn"), $x$$61$$, $y$$38$$, $width$$15$$, $height$$15$$), new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self_JSCompiler_inline_result$$536$$.$_context$, $buttonState_ena$$1_ena$$inline_801$$, $ovr$$1_ovr$$inline_802$$, $dwn$$1_dwn$$inline_803_images$$3$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendSectionGroup$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_handleMouseClick$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseClick$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$();
  var $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$ = D.$DvtAgent$$.$isRightToLeft$() ? -1 : 1;
  this.$_sectionHeight$ || (this.$_sectionHeight$ = this.$getDimensions$().$h$ - this.$_headerHeight$);
  0 == this.$_buttonState$ ? ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$ = this.$_button$.getParent(), $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$.removeChild(this.$_button$), this.$_button$ = this.$_collapsedBtn$, $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$, this.$_buttonY$ + 5.5, this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_FALSE$$, this.$_buttonState$ = 1, $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$ = -this.$_sectionHeight$) : ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$ = 
  this.$_button$.getParent(), $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$.removeChild(this.$_button$), this.$_button$ = this.$_expandedBtn$, $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$, this.$_buttonY$ + 
  1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_TRUE$$, this.$_buttonState$ = 0, $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$ = this.$_sectionHeight$);
  if(this.$_itemsVisible$) {
    for(var $i$$inline_809$$ = 0;$i$$inline_809$$ < this.$_items$.length;$i$$inline_809$$++) {
      this.$addChild$(this.$_items$[$i$$inline_809$$])
    }
  }else {
    for($i$$inline_809$$ = 0;$i$$inline_809$$ < this.$_items$.length;$i$$inline_809$$++) {
      this.removeChild(this.$_items$[$i$$inline_809$$])
    }
  }
  this.$_legend$.update(this, $bidiMultiplier$$inline_806_diff$$inline_807_parent$$inline_808$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseOver$$($event$$16$$) {
  var $tooltip$$;
  $tooltip$$ = 0 == this.$_buttonState$ ? this.$_collapseTooltip$ : this.$_expandTooltip$;
  $tooltip$$ != D.$JSCompiler_alias_NULL$$ && this.$_context$.$getTooltipManager$().$showTooltip$($event$$16$$.pageX, $event$$16$$.pageY, $tooltip$$, this.$_button$, D.$JSCompiler_alias_TRUE$$);
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
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($collapsibleHitArea_dim$$2_parent$$10$$, $availSpace$$12$$, $isBiDi$$5$$) {
  $collapsibleHitArea_dim$$2_parent$$10$$.$addChild$(this);
  $collapsibleHitArea_dim$$2_parent$$10$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($collapsibleHitArea_dim$$2_parent$$10$$);
  this.$_buttonX$ = $availSpace$$12$$.x;
  this.$_buttonY$ = $availSpace$$12$$.y;
  var $bidiMultiplier$$inline_815_sectionTitle$$6$$ = $isBiDi$$5$$ ? -1 : 1;
  if("alta" == this.$_styleMap$.skin) {
    var $fitWidth$$2_images$$inline_816$$ = this.$_legend$.$_images$;
    this.$_expandedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_816$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 0);
    this.$_collapsedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_816$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 1);
    this.$_button$ = this.$_expandedBtn$
  }else {
    this.$_button$ = new D.$DvtPolygon$$(this.$_context$, [this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_815_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_815_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_815_sectionTitle$$6$$, this.$_buttonY$ + 9.5]), this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
  }
  $collapsibleHitArea_dim$$2_parent$$10$$.$addChild$(this.$_button$);
  D.$DvtAgent$$.$isTouchDevice$() ? $collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this) : ($collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this), $collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$_handleMouseOver$, D.$JSCompiler_alias_FALSE$$, this), $collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  this.$_handleMouseOut$, D.$JSCompiler_alias_FALSE$$, this), $collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_handleMouseDown$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_buttonState$ = 0;
  $availSpace$$12$$.x += (("alta" == this.$_styleMap$.skin && $isBiDi$$5$$ ? 0 : this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap) * $bidiMultiplier$$inline_815_sectionTitle$$6$$;
  this.$_title$ && ($bidiMultiplier$$inline_815_sectionTitle$$6$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $fitWidth$$2_images$$inline_816$$ = $availSpace$$12$$.$w$ - $availSpace$$12$$.x, $isBiDi$$5$$ && ($fitWidth$$2_images$$inline_816$$ = $availSpace$$12$$.$w$ - $fitWidth$$2_images$$inline_816$$), 0 < $fitWidth$$2_images$$inline_816$$ && ($isBiDi$$5$$ && $bidiMultiplier$$inline_815_sectionTitle$$6$$.$alignRight$(), this.$_titleStyle$ && 
  $bidiMultiplier$$inline_815_sectionTitle$$6$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $bidiMultiplier$$inline_815_sectionTitle$$6$$.$setTextString$(this.$_title$), $bidiMultiplier$$inline_815_sectionTitle$$6$$.$setX$($availSpace$$12$$.x), $bidiMultiplier$$inline_815_sectionTitle$$6$$.$setY$($availSpace$$12$$.y), D.$DvtTextUtils$$.$fitText$($bidiMultiplier$$inline_815_sectionTitle$$6$$, $fitWidth$$2_images$$inline_816$$, $availSpace$$12$$.$h$, $collapsibleHitArea_dim$$2_parent$$10$$), 
  $bidiMultiplier$$inline_815_sectionTitle$$6$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($bidiMultiplier$$inline_815_sectionTitle$$6$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $collapsibleHitArea_dim$$2_parent$$10$$ = $bidiMultiplier$$inline_815_sectionTitle$$6$$.$getDimensions$(), $availSpace$$12$$.y = $availSpace$$12$$.y + window.Math.max($collapsibleHitArea_dim$$2_parent$$10$$ ? $collapsibleHitArea_dim$$2_parent$$10$$.$h$ : 0, this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap));
  $availSpace$$12$$.x += (this.$_styleMap$.buttonSize + this.$_styleMap$.rowColGap) * ($isBiDi$$5$$ ? 1 : -1);
  this.$_headerHeight$ = this.$getDimensions$().$h$
};
D.$DvtCommonLegendSection$$ = function $$DvtCommonLegendSection$$$($context$$16$$, $legend$$4$$, $sectionTitle$$7$$, $sectionTitleStyle$$2$$, $styleMap$$5$$) {
  this.Init($context$$16$$, $legend$$4$$, $sectionTitle$$7$$, $sectionTitleStyle$$2$$, $styleMap$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSection$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSection$$.prototype.Init = function $$DvtCommonLegendSection$$$$Init$($context$$17$$, $legend$$5$$, $sectionTitle$$8$$, $sectionTitleStyle$$3$$, $styleMap$$6$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$17$$);
  this.$_title$ = $sectionTitle$$8$$;
  this.$_titleStyle$ = $sectionTitleStyle$$3$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$5$$;
  this.$_styleMap$ = $styleMap$$6$$
};
D.$DvtCommonLegendSection$$.prototype.$addItem$ = function $$DvtCommonLegendSection$$$$$addItem$$($item$$1$$) {
  return this.$_items$.push($item$$1$$)
};
D.$DvtCommonLegendSection$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$DvtCommonLegendSection$$.prototype.$render$ = function $$DvtCommonLegendSection$$$$$render$$($parent$$11_sectionTitle$$9$$, $availSpace$$13$$, $dim$$3_isBiDi$$6$$) {
  $parent$$11_sectionTitle$$9$$.$addChild$(this);
  if(this.$_title$) {
    $parent$$11_sectionTitle$$9$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$);
    var $fitWidth$$3$$ = $availSpace$$13$$.$w$ - $availSpace$$13$$.x;
    $dim$$3_isBiDi$$6$$ && ($fitWidth$$3$$ = $availSpace$$13$$.$w$ - $fitWidth$$3$$);
    0 < $fitWidth$$3$$ && ($dim$$3_isBiDi$$6$$ && $parent$$11_sectionTitle$$9$$.$alignRight$(), this.$_titleStyle$ && $parent$$11_sectionTitle$$9$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $parent$$11_sectionTitle$$9$$.$setTextString$(this.$_title$), $parent$$11_sectionTitle$$9$$.$setX$($availSpace$$13$$.x), $parent$$11_sectionTitle$$9$$.$setY$($availSpace$$13$$.y), D.$DvtTextUtils$$.$fitText$($parent$$11_sectionTitle$$9$$, $fitWidth$$3$$, $availSpace$$13$$.$h$, this), $parent$$11_sectionTitle$$9$$.$isTruncated$() && 
    this.$_legend$.$getEventManager$().$associate$($parent$$11_sectionTitle$$9$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $dim$$3_isBiDi$$6$$ = $parent$$11_sectionTitle$$9$$.$getDimensions$(), $availSpace$$13$$.y = $availSpace$$13$$.y + ($dim$$3_isBiDi$$6$$ ? $dim$$3_isBiDi$$6$$.$h$ : 0) + this.$_styleMap$.rowColGap)
  }
};
D.$DvtCommonLegendRow$$ = function $$DvtCommonLegendRow$$$($context$$18$$, $legend$$6$$, $prop$$6$$, $itemStyle$$, $styleMap$$7$$) {
  this.Init($context$$18$$, $legend$$6$$, $prop$$6$$, $itemStyle$$, $styleMap$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendRow$$, D.$DvtContainer$$, "DvtCommonLegendRow");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendRow$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$19$$, $legend$$7$$, $prop$$7$$, $itemStyle$$1$$, $styleMap$$8$$) {
  D.$DvtCommonLegendRow$$.$superclass$.Init.call(this, $context$$19$$);
  this.$_legend$ = $legend$$7$$;
  this.$_prop$ = $prop$$7$$;
  this.$_itemStyle$ = $itemStyle$$1$$;
  this.$_bHidden$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $styleMap$$8$$
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
D.$JSCompiler_prototypeAlias$$.setMarker = function $$JSCompiler_prototypeAlias$$$setMarker$($url$$23$$, $shape$$2$$, $color$$4$$, $pattern$$3$$, $opacity$$2$$) {
  this.$_url$ = $url$$23$$;
  this.$_shape$ = $shape$$2$$;
  this.$_color$ = $color$$4$$ ? $color$$4$$ : "#000000";
  this.$_pattern$ = $pattern$$3$$;
  this.$_opacity$ = $opacity$$2$$
};
D.$JSCompiler_StaticMethods_filterRow$$ = function $$JSCompiler_StaticMethods_filterRow$$$($JSCompiler_StaticMethods_filterRow$self$$) {
  $JSCompiler_StaticMethods_filterRow$self$$.$_bHidden$ = !$JSCompiler_StaticMethods_filterRow$self$$.$_bHidden$;
  $JSCompiler_StaticMethods_filterRow$self$$.$_marker$.$setHollow$($JSCompiler_StaticMethods_filterRow$self$$.$_color$)
};
D.$DvtCommonLegendRow$$.prototype.$render$ = function $$DvtCommonLegendRow$$$$$render$$($parent$$12_rowX$$, $availSpace$$14$$, $isBiDi$$7$$) {
  if(this.$_prop$) {
    var $JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$ = this.$_legend$, $attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$ = this.$_prop$.attributeGroupId, $itemId$$inline_820$$ = this.$_prop$.itemId;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$] == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$] = {});
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$][$itemId$$inline_820$$] = this;
    this.$_legend$.$_associations$.push(this);
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$ = this.$_legend$;
    $attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$ = this.$_prop$.hideAttrs;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$] || ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$] = this)
  }
  $parent$$12_rowX$$.$addChild$(this);
  $parent$$12_rowX$$ = $availSpace$$14$$.x;
  $isBiDi$$7$$ && ($availSpace$$14$$.x -= this.$_styleMap$.indicatorSize);
  var $marker$$1_textDim$$;
  if(this.$_url$ || this.$_shape$ != D.$JSCompiler_alias_NULL$$) {
    $marker$$1_textDim$$ = new D.$DvtMarker$$(this.$_context$, this.$_url$ ? [this.$_url$] : this.$_shape$, this.$_styleMap$[D.DvtCommonLegend.$SKIN_NAME$], $availSpace$$14$$.x, $availSpace$$14$$.y, this.$_styleMap$.indicatorSize, this.$_styleMap$.indicatorSize), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$ = D.$DvtMarkerUtils$$.$getCustomMarkerInfo$(this.$_context$, this.$_shape$), !this.$_url$ && 
    !$JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$ && (this.$_pattern$ ? $marker$$1_textDim$$.$setFill$(new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$)) : $marker$$1_textDim$$.$setSolidFill$(this.$_color$, this.$_opacity$)), this.$addChild$($marker$$1_textDim$$), $availSpace$$14$$.x = $isBiDi$$7$$ ? $availSpace$$14$$.x - this.$_styleMap$.rowColGap : $availSpace$$14$$.x + this.$_styleMap$.indicatorSize + 
    this.$_styleMap$.rowColGap
  }
  this.$_marker$ = $marker$$1_textDim$$;
  $marker$$1_textDim$$ = new D.$DvtRectangle$$;
  this.$_text$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$ = $availSpace$$14$$.$w$ - $availSpace$$14$$.x, $isBiDi$$7$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$ = $availSpace$$14$$.$w$ - $JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$), 
  0 > $JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$ ? this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$)) : ($attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $isBiDi$$7$$ && $attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$.$alignRight$(), 
  this.$_itemStyle$ && $attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_itemStyle$)), $attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$.$setTextString$(this.$_text$), $attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$.$setX$($availSpace$$14$$.x), $attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$.$setY$($availSpace$$14$$.y), D.$DvtTextUtils$$.$fitText$($attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$, 
  $JSCompiler_StaticMethods_addAttrLookup$self$$inline_818_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_826_fitWidth$$4_isCustomShape$$, $availSpace$$14$$.$h$, this) ? ($marker$$1_textDim$$ = $attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$.$getDimensions$(), $attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($attributeGroupId$$inline_819_hideAttrs$$inline_827_text$$11$$, new D.$DvtSimpleObjPeer$$(this.$_text$))) : 
  this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$))));
  $availSpace$$14$$.y = $availSpace$$14$$.y + window.Math.max(this.$_styleMap$.indicatorSize, $marker$$1_textDim$$.$h$) + this.$_styleMap$.rowColGap;
  $availSpace$$14$$.x = $parent$$12_rowX$$
};
D.$DvtCommonLegendEventManager$$ = function $$DvtCommonLegendEventManager$$$($context$$20$$, $callback$$31$$, $legend$$8$$) {
  this.Init($context$$20$$, $callback$$31$$, $legend$$8$$);
  this.$_legend$ = $legend$$8$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendEventManager$$, D.$DvtEventManager$$, "DvtCommonLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$19$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$19$$);
  this.$_handleClick$($event$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$20$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$20$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$21$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$21$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$22$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$22$$);
  this.$_handleClick$($event$$22$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($event$$23_listItemEvent$$inline_835$$) {
  if(this.$_legend$.$_showHideEnabled$) {
    var $obj$$30$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$23_listItemEvent$$inline_835$$.target);
    if($obj$$30$$ instanceof D.$DvtCommonLegendRow$$) {
      var $listItemId$$inline_833$$ = $obj$$30$$.$getItemId$(), $attributeGroupId$$inline_834$$ = $obj$$30$$.$getAttributeGroup$();
      (0,D.$JSCompiler_StaticMethods_filterRow$$)($obj$$30$$);
      $event$$23_listItemEvent$$inline_835$$ = new D.$DvtListItemEvent$$($listItemId$$inline_833$$, $attributeGroupId$$inline_834$$, $obj$$30$$.$_bHidden$ ? "hide" : "show", $event$$23_listItemEvent$$inline_835$$);
      this.$_legend$.$FireListener$($event$$23_listItemEvent$$inline_835$$)
    }
  }
};
D.$JSCompiler_StaticMethods__handleRollOver$$ = function $$JSCompiler_StaticMethods__handleRollOver$$$($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$24$$) {
  if($JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_rollOverEnabled$) {
    var $obj$$31_rollOverEvent$$inline_842$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$24$$.target);
    if($obj$$31_rollOverEvent$$inline_842$$ instanceof D.$DvtCommonLegendRow$$) {
      var $listItemId$$inline_840$$ = $obj$$31_rollOverEvent$$inline_842$$.$getItemId$(), $attributeGroupId$$inline_841$$ = $obj$$31_rollOverEvent$$inline_842$$.$getAttributeGroup$(), $obj$$31_rollOverEvent$$inline_842$$ = new D.$DvtLegendItemRollOverEvent$$($listItemId$$inline_840$$, $attributeGroupId$$inline_841$$, $obj$$31_rollOverEvent$$inline_842$$.$getHideAttributes$(), $event$$24$$.type, $event$$24$$);
      $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$FireListener$($obj$$31_rollOverEvent$$inline_842$$)
    }
  }
};
});