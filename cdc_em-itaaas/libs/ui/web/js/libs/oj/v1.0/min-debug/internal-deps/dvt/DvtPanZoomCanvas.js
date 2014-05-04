define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtComboBox$$ = function $$DvtComboBox$$$($context$$27$$, $id$$5$$, $styleMap$$11$$) {
  this.Init($context$$27$$, $id$$5$$, $styleMap$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBox$$, D.$DvtContainer$$, "DvtComboBox");
D.$DvtComboBox$$.prototype.Init = function $$DvtComboBox$$$$Init$($context$$28$$, $id$$6$$, $styleMap$$12$$) {
  D.$DvtComboBox$$.$superclass$.Init.call(this, $context$$28$$, D.$JSCompiler_alias_NULL$$, $id$$6$$);
  this.$_styleMap$ = $styleMap$$12$$;
  this.$_itemButtonStates$ = [];
  this.$_items$ = [];
  this.$_tooltips$ = [];
  this.$_selectedIndex$ = 0;
  this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxItemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_dim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_tooltipManager$ = $context$$28$$.$getTooltipManager$();
  this.$_isTouchDevice$ = D.$DvtAgent$$.$isTouchDevice$();
  this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $id$$6$$ + "_cl");
  this.$addChild$(this.$_button$);
  this.$_contentArea$ = new D.$DvtContainer$$($context$$28$$);
  this.$_contentArea$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_contentArea$);
  this.$_hideDropdownTimer$ = new D.$DvtTimer$$($context$$28$$, 100, this.$HandleHideDropdownTimer$, this, 1);
  this.$_outOfFocusCheckTimer$ = new D.$DvtTimer$$($context$$28$$, 100, this.$HandleOutOfFocusCheckTimer$, this, 1);
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtComboBox$$.prototype.$setSelectedIndex$ = function $$DvtComboBox$$$$$setSelectedIndex$$($comboBoxEvent$$inline_827_selectedIndex$$) {
  this.$_selectedIndex$ = $comboBoxEvent$$inline_827_selectedIndex$$;
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this);
  $comboBoxEvent$$inline_827_selectedIndex$$ = new D.$DvtComboBoxEvent$$("cbItemChange", $comboBoxEvent$$inline_827_selectedIndex$$, this.$_event$);
  this.$_event$ = D.$JSCompiler_alias_NULL$$;
  this.$FireListener$($comboBoxEvent$$inline_827_selectedIndex$$)
};
D.$JSCompiler_StaticMethods_createButton$$ = function $$JSCompiler_StaticMethods_createButton$$$($JSCompiler_StaticMethods_createButton$self$$, $id$$7$$) {
  var $JSCompiler_temp_const$$114_button$$5$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_831_dim$$inline_838_s$$inline_839$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_832_s$$inline_833$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_832_s$$inline_833$$ = new D.$DvtRect$$($context$$inline_831_dim$$inline_838_s$$inline_839$$, 0, 0, $dim$$inline_832_s$$inline_833$$.$w$, $dim$$inline_832_s$$inline_833$$.$h$, 
  $id$$7$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_832_s$$inline_833$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dim$$inline_832_s$$inline_833$$);
  $dim$$inline_832_s$$inline_833$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_831_dim$$inline_838_s$$inline_839$$, $dim$$inline_832_s$$inline_833$$.getWidth(), $dim$$inline_832_s$$inline_833$$.getHeight()));
  var $context$$inline_837_context$$inline_843$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_831_dim$$inline_838_s$$inline_839$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $context$$inline_831_dim$$inline_838_s$$inline_839$$ = new D.$DvtRect$$($context$$inline_837_context$$inline_843$$, 0, 0, $context$$inline_831_dim$$inline_838_s$$inline_839$$.$w$, $context$$inline_831_dim$$inline_838_s$$inline_839$$.$h$, $id$$7$$ + "_up");
  $context$$inline_831_dim$$inline_838_s$$inline_839$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$inline_831_dim$$inline_838_s$$inline_839$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$, D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$]));
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($context$$inline_831_dim$$inline_838_s$$inline_839$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $context$$inline_831_dim$$inline_838_s$$inline_839$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_837_context$$inline_843$$, $context$$inline_831_dim$$inline_838_s$$inline_839$$.getWidth(), $context$$inline_831_dim$$inline_838_s$$inline_839$$.getHeight()));
  var $context$$inline_837_context$$inline_843$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_844_s$$inline_845$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_844_s$$inline_845$$ = new D.$DvtRect$$($context$$inline_837_context$$inline_843$$, 0, 0, $dim$$inline_844_s$$inline_845$$.$w$, $dim$$inline_844_s$$inline_845$$.$h$, $id$$7$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_844_s$$inline_845$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $dim$$inline_844_s$$inline_845$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $dim$$inline_844_s$$inline_845$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$, D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$]));
  $dim$$inline_844_s$$inline_845$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_837_context$$inline_843$$, $dim$$inline_844_s$$inline_845$$.getWidth(), $dim$$inline_844_s$$inline_845$$.getHeight()));
  $JSCompiler_temp_const$$114_button$$5$$ = new D.$DvtButton$$($JSCompiler_temp_const$$114_button$$5$$, $dim$$inline_832_s$$inline_833$$, $context$$inline_831_dim$$inline_838_s$$inline_839$$, $dim$$inline_844_s$$inline_845$$, D.$JSCompiler_alias_NULL$$, $id$$7$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_temp_const$$114_button$$5$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$114_button$$5$$.setCursor("pointer");
  $JSCompiler_StaticMethods_createButton$self$$.$_isTouchDevice$ || $JSCompiler_temp_const$$114_button$$5$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleButtonDown$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$114_button$$5$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  return $JSCompiler_temp_const$$114_button$$5$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtComboBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($obj$$32$$, $buttonStates_itdim_tooltip$$1$$, $enaState$$1$$, $ovrState$$1$$, $dwnState$$1$$) {
  $obj$$32$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_items$.push($obj$$32$$);
  this.$_tooltips$.push($buttonStates_itdim_tooltip$$1$$);
  $buttonStates_itdim_tooltip$$1$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, $enaState$$1$$ ? $enaState$$1$$ : $obj$$32$$);
  var $maxItemDim$$ = this.$_maxItemDim$, $dim$$7$$ = this.$getDimensions$();
  $buttonStates_itdim_tooltip$$1$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $buttonStates_itdim_tooltip$$1$$.$w$, $dim$$7$$.$w$ = $buttonStates_itdim_tooltip$$1$$.$w$ + 16);
  $buttonStates_itdim_tooltip$$1$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $buttonStates_itdim_tooltip$$1$$.$h$, $dim$$7$$.$h$ = $buttonStates_itdim_tooltip$$1$$.$h$);
  this.$_maxItemDim$ = $maxItemDim$$;
  $buttonStates_itdim_tooltip$$1$$ = D.$JSCompiler_alias_NULL$$;
  $enaState$$1$$ && ($ovrState$$1$$ && $dwnState$$1$$) && ($buttonStates_itdim_tooltip$$1$$ = [], $buttonStates_itdim_tooltip$$1$$[0] = $enaState$$1$$, $buttonStates_itdim_tooltip$$1$$[1] = $ovrState$$1$$, $buttonStates_itdim_tooltip$$1$$[2] = $dwnState$$1$$);
  this.$_itemButtonStates$.push($buttonStates_itdim_tooltip$$1$$);
  this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $obj$$32$$.getId()), this.$addChildAt$(this.$_button$, 0), (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this))
};
D.$JSCompiler_prototypeAlias$$.getItem = function $$JSCompiler_prototypeAlias$$$getItem$($i$$36$$) {
  return this.$_items$[$i$$36$$]
};
D.$JSCompiler_prototypeAlias$$.$getSelectedItem$ = function $$JSCompiler_prototypeAlias$$$$getSelectedItem$$() {
  var $selIndex$$ = this.$_selectedIndex$;
  return 0 > $selIndex$$ || $selIndex$$ > this.$_items$.length - 1 ? D.$JSCompiler_alias_NULL$$ : this.$_items$[$selIndex$$]
};
D.$JSCompiler_prototypeAlias$$.$HandleExpandClick$ = function $$JSCompiler_prototypeAlias$$$$HandleExpandClick$$($context$$33_event$$43_stage$$1$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($context$$33_event$$43_stage$$1$$);
  this.$_bRemoveDropdown$ && (this.$_bRemoveDropdown$ = D.$JSCompiler_alias_FALSE$$, this.$_dropdown$ && (this.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = D.$JSCompiler_alias_NULL$$));
  $context$$33_event$$43_stage$$1$$ = this.$_context$;
  for(var $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : D.$JSCompiler_alias_NULL$$, $bgAlpha$$inline_865_leftPadding$$inline_851$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$, "paddingLeft", 0), $bottomPadding$$inline_852$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$, "paddingBottom", 0), $rightPadding$$inline_853$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$, 
  "paddingRight", 0), $interItemPadding$$inline_854$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$, "paddingInner", 0), $currY$$inline_855$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$, "paddingTop", 0), $context$$inline_856$$ = this.$_context$, $dim$$inline_857_proxy$$inline_862$$, $itemSprite$$inline_858$$, $item$$inline_859$$, $bgColor$$inline_864_content$$inline_860_dim$$8$$ = new D.$DvtContainer$$($context$$inline_856$$, 
  "__dd"), $i$$inline_861$$ = 0;$i$$inline_861$$ < this.$_items$.length;$i$$inline_861$$++) {
    $item$$inline_859$$ = this.$_items$[$i$$inline_861$$], $dim$$inline_857_proxy$$inline_862$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_856$$, $item$$inline_859$$), $itemSprite$$inline_858$$ = new D.$DvtContainer$$($context$$inline_856$$, "__it" + $i$$inline_861$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSprite$$inline_858$$, $bgAlpha$$inline_865_leftPadding$$inline_851$$, $currY$$inline_855$$), $itemSprite$$inline_858$$.$addChild$($item$$inline_859$$), $item$$inline_859$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), 
    $item$$inline_859$$.setCursor("pointer"), $currY$$inline_855$$ += $dim$$inline_857_proxy$$inline_862$$.$h$ + $interItemPadding$$inline_854$$, this.$_eventManager$ && ($dim$$inline_857_proxy$$inline_862$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, this.$HandleDropdownItemClick$, this.$HandleButtonDown$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_tooltips$[$i$$inline_861$$]), this.$_eventManager$.$associate$($item$$inline_859$$, $dim$$inline_857_proxy$$inline_862$$)), 
    $bgColor$$inline_864_content$$inline_860_dim$$8$$.$addChild$($itemSprite$$inline_858$$)
  }
  $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$ = D.$DvtButtonLAFUtils$$.$drawDropdownShape$($context$$inline_856$$, this.$_maxItemDim$.$w$ + $bgAlpha$$inline_865_leftPadding$$inline_851$$ + $rightPadding$$inline_853$$, $currY$$inline_855$$ + $bottomPadding$$inline_852$$ - $interItemPadding$$inline_854$$, $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$);
  $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$.$addChild$($bgColor$$inline_864_content$$inline_860_dim$$8$$);
  $bgColor$$inline_864_content$$inline_860_dim$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  $bgAlpha$$inline_865_leftPadding$$inline_851$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$), (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "borderAlpha", 1));
  $bgColor$$inline_864_content$$inline_860_dim$$8$$ && $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$.$setSolidFill$($bgColor$$inline_864_content$$inline_860_dim$$8$$, $bgAlpha$$inline_865_leftPadding$$inline_851$$);
  this.$_dropdown$ = $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$;
  $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$33_event$$43_stage$$1$$, this.$_dropdown$);
  this.$addChild$(this.$_dropdown$);
  $bgColor$$inline_864_content$$inline_860_dim$$8$$ = this.$_button$.$getDimensions$();
  $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$ = D.$DvtAgent$$.$isRightToLeft$($context$$33_event$$43_stage$$1$$) ? -$comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$.$w$ + 1 * $bgColor$$inline_864_content$$inline_860_dim$$8$$.$w$ / 4 : 3 * $bgColor$$inline_864_content$$inline_860_dim$$8$$.$w$ / 4;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_dropdown$, $comboBoxStyles$$inline_850_dd$$inline_863_dddim_transX$$, 3 * $bgColor$$inline_864_content$$inline_860_dim$$8$$.$h$ / 4);
  this.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$_button$, D.$JSCompiler_alias_TRUE$$);
  this.$FireListener$(new D.$DvtComboBoxEvent$$("cbShowDropdown"));
  ($context$$33_event$$43_stage$$1$$ = $context$$33_event$$43_stage$$1$$.$_stage$) && (this.$_isTouchDevice$ ? $context$$33_event$$43_stage$$1$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this) : $context$$33_event$$43_stage$$1$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this))
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
D.$JSCompiler_prototypeAlias$$.$HandleDropdownItemClick$ = function $$JSCompiler_prototypeAlias$$$$HandleDropdownItemClick$$($event$$48$$) {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_TRUE$$;
  this.$_hideDropdownTimer$.stop();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$48$$);
  var $displayObject$$inline_867_eventTarget$$;
  $displayObject$$inline_867_eventTarget$$ = $event$$48$$.target;
  for(var $content$$1_n$$inline_868$$, $id$$inline_869$$;$displayObject$$inline_867_eventTarget$$;) {
    if(($id$$inline_869$$ = $displayObject$$inline_867_eventTarget$$.getId()) && $displayObject$$inline_867_eventTarget$$ instanceof D.$DvtContainer$$ && "__it" == $id$$inline_869$$.substr(0, 4)) {
      $content$$1_n$$inline_868$$ = $displayObject$$inline_867_eventTarget$$;
      break
    }
    $displayObject$$inline_867_eventTarget$$ = $displayObject$$inline_867_eventTarget$$.getParent()
  }
  $displayObject$$inline_867_eventTarget$$ = $content$$1_n$$inline_868$$;
  var $index$$47$$;
  this.$_dropdown$ && $displayObject$$inline_867_eventTarget$$ && ($content$$1_n$$inline_868$$ = this.$_dropdown$.$getChildAt$(0)) && ($index$$47$$ = $content$$1_n$$inline_868$$.$getChildIndex$($displayObject$$inline_867_eventTarget$$));
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_event$ = $event$$48$$;
  this.$setSelectedIndex$($index$$47$$)
};
D.$JSCompiler_StaticMethods_HideDropdown$$ = function $$JSCompiler_StaticMethods_HideDropdown$$$($JSCompiler_StaticMethods_HideDropdown$self$$) {
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_HideDropdown$self$$.$_button$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_HideDropdown$self$$.$FireListener$(new D.$DvtComboBoxEvent$$("cbHideDropdown")), $JSCompiler_StaticMethods_HideDropdown$self$$.$_bRemoveDropdown$ = D.$JSCompiler_alias_TRUE$$);
  var $stage$$2$$ = $JSCompiler_StaticMethods_HideDropdown$self$$.$_context$.$_stage$;
  $stage$$2$$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_isTouchDevice$ ? $stage$$2$$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$) : $stage$$2$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$));
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
D.$DvtComboBox$DrawArrow$$ = function $$DvtComboBox$DrawArrow$$$($context$$35_shape$$3$$, $ww$$2$$, $hh$$2$$) {
  var $aPoints$$ = [];
  $aPoints$$.push($ww$$2$$ - 12, $hh$$2$$ / 2 - 2);
  $aPoints$$.push($ww$$2$$ - 4, $hh$$2$$ / 2 - 2);
  $aPoints$$.push($ww$$2$$ - 8, $hh$$2$$ / 2 + 2);
  $aPoints$$.push($ww$$2$$ - 12, $hh$$2$$ / 2 - 2);
  $context$$35_shape$$3$$ = new D.$DvtPolygon$$($context$$35_shape$$3$$, $aPoints$$, D.$JSCompiler_alias_NULL$$);
  $context$$35_shape$$3$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$35_shape$$3$$.$setSolidFill$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$35_shape$$3$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$35_shape$$3$$
};
D.$DvtComboBox$$.prototype.$setEventManager$ = (0,D.$JSCompiler_set$$)("$_eventManager$");
D.$DropdownItemSprite$$ = function $$DropdownItemSprite$$$($context$$36$$, $x$$62$$, $y$$39$$, $w$$8$$, $h$$7$$, $id$$12$$) {
  this.Init($context$$36$$, $x$$62$$, $y$$39$$, $w$$8$$, $h$$7$$, $id$$12$$)
};
D.$DvtObj$$.$createSubclass$(D.$DropdownItemSprite$$, D.$DvtRect$$, "DropdownItemSprite");
D.$DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($context$$37$$) {
  D.$DvtRect$$.$superclass$.Init.call(this, $context$$37$$)
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
D.$DvtBaseControl$$ = function $$DvtBaseControl$$$($context$$47$$, $panZoomCanvas$$6$$, $resources$$6$$) {
  this.Init($context$$47$$, $panZoomCanvas$$6$$, $resources$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseControl$$, D.$DvtContainer$$, "DvtBaseControl");
D.$DvtBaseControl$$.prototype.Init = function $$DvtBaseControl$$$$Init$($context$$48$$, $panZoomCanvas$$7$$, $resources$$7$$) {
  D.$DvtBaseControl$$.$superclass$.Init.call(this, $context$$48$$);
  this.$_panZoomCanvas$ = $panZoomCanvas$$7$$;
  this.$_context$ = $context$$48$$;
  this.$_tooltipManager$ = $context$$48$$.$getTooltipManager$();
  this.$Bundle$ = $resources$$7$$
};
D.$DvtBaseControl$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$DvtZoomInButton$$ = function $$DvtZoomInButton$$$($context$$23$$, $button$$3$$, $panZoomCanvas$$2$$, $resources$$2$$, $eventManager$$2$$) {
  this.Init($context$$23$$, $button$$3$$, $panZoomCanvas$$2$$, $resources$$2$$, $eventManager$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomInButton$$, D.$DvtBaseControl$$, "DvtZoomInButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomInButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$24_proxy$$1$$, $button$$4$$, $panZoomCanvas$$3$$, $resources$$3$$, $eventManager$$3$$) {
  D.$DvtZoomInButton$$.$superclass$.Init.call(this, $context$$24_proxy$$1$$, $panZoomCanvas$$3$$, $resources$$3$$);
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomInTimer$ = new D.$DvtTimer$$($context$$24_proxy$$1$$, 100, this.$HandleZoomInTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$24_proxy$$1$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomInButton$ = $button$$4$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomInButton$, this.$HandleZoomInClick$, this);
  this.$_eventManager$ = $eventManager$$3$$;
  $context$$24_proxy$$1$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomInMouseDown$, this.$HandleZoomInMouseUp$, this.$HandleZoomInMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMIN"));
  this.$_eventManager$.$associate$(this.$_zoomInButton$, $context$$24_proxy$$1$$);
  this.$addChild$(this.$_zoomInButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  if(!this.$_zoomInTimer$.$isRunning$()) {
    var $currZoom_newZoom$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom_newZoom$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom_newZoom$$), $animator$$5$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($currZoom_newZoom$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$5$$);
    $animator$$5$$.play()
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
D.$DvtZoomOutButton$$ = function $$DvtZoomOutButton$$$($context$$49$$, $button$$6$$, $panZoomCanvas$$8$$, $resources$$8$$, $eventManager$$5$$) {
  this.Init($context$$49$$, $button$$6$$, $panZoomCanvas$$8$$, $resources$$8$$, $eventManager$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomOutButton$$, D.$DvtBaseControl$$, "DvtZoomOutButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomOutButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$50_proxy$$3$$, $button$$7$$, $panZoomCanvas$$9$$, $resources$$9$$, $eventManager$$6$$) {
  D.$DvtZoomOutButton$$.$superclass$.Init.call(this, $context$$50_proxy$$3$$, $panZoomCanvas$$9$$, $resources$$9$$);
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomOutTimer$ = new D.$DvtTimer$$($context$$50_proxy$$3$$, 100, this.$HandleZoomOutTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$50_proxy$$3$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomOutButton$ = $button$$7$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomOutButton$, this.$HandleZoomOutClick$, this);
  this.$_eventManager$ = $eventManager$$6$$;
  $context$$50_proxy$$3$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomOutMouseDown$, this.$HandleZoomOutMouseUp$, this.$HandleZoomOutMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMOUT"));
  this.$_eventManager$.$associate$(this.$_zoomOutButton$, $context$$50_proxy$$3$$);
  this.$addChild$(this.$_zoomOutButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  if(!this.$_zoomOutTimer$.$isRunning$()) {
    var $currZoom$$2_newZoom$$2$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$2_newZoom$$2$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$2_newZoom$$2$$), $animator$$6$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($currZoom$$2_newZoom$$2$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$6$$);
    $animator$$6$$.play()
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
  var $currZoom$$3$$ = this.$_panZoomCanvas$.$getZoom$();
  this.$_panZoomCanvas$.$zoomTo$((0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$3$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$1$$) {
  this.$_zoomOutButton$.setCursor($enabled$$1$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomOutButton$.$setEnabled$($enabled$$1$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomOutButton$)
};
D.$DvtZoomToFitButton$$ = function $$DvtZoomToFitButton$$$($context$$21$$, $button$$1$$, $panZoomCanvas$$, $resources$$, $eventManager$$) {
  this.Init($context$$21$$, $button$$1$$, $panZoomCanvas$$, $resources$$, $eventManager$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomToFitButton$$, D.$DvtBaseControl$$, "DvtZoomToFitButton");
D.$DvtZoomToFitButton$$.prototype.Init = function $$DvtZoomToFitButton$$$$Init$($context$$22_proxy$$, $button$$2$$, $panZoomCanvas$$1$$, $resources$$1$$, $eventManager$$1$$) {
  D.$DvtZoomToFitButton$$.$superclass$.Init.call(this, $context$$22_proxy$$, $panZoomCanvas$$1$$, $resources$$1$$);
  this.$_zoomToFitButton$ = $button$$2$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomToFitButton$, this.$HandleZoomToFitClick$, this);
  this.$_zoomToFitButton$.setCursor("pointer");
  this.$_eventManager$ = $eventManager$$1$$;
  $context$$22_proxy$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMTOFIT"));
  this.$_eventManager$.$associate$(this.$_zoomToFitButton$, $context$$22_proxy$$);
  this.$addChild$(this.$_zoomToFitButton$)
};
D.$DvtZoomToFitButton$$.prototype.$HandleZoomToFitClick$ = function $$DvtZoomToFitButton$$$$$HandleZoomToFitClick$$() {
  var $animator$$4$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomToFit$($animator$$4$$);
  $animator$$4$$.play()
};
D.$DvtPanControl$$ = function $$DvtPanControl$$$($context$$25$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$4$$, $resources$$4$$, $control$$, $styleMap$$9$$) {
  this.Init($context$$25$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$4$$, $resources$$4$$, $control$$, $styleMap$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanControl$$, D.$DvtBaseControl$$, "DvtPanControl");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanControl$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$26$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$5$$, $resources$$5$$, $control$$1$$, $styleMap$$10$$) {
  D.$DvtPanControl$$.$superclass$.Init.call(this, $context$$26$$, $panZoomCanvas$$5$$, $resources$$5$$);
  this.$_panTimer$ = new D.$DvtTimer$$($context$$26$$, 50, this.$HandlePanTimer$, this);
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
  this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanButtonBackground$($context$$26$$, $styleMap$$10$$);
  this.$_panControl$.$addChild$(this.$_panButton$);
  this.$addChild$(this.$_panControl$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanClick$$($event$$31$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$31$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseDown$$($event$$32_localPoint_stagePoint$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$32_localPoint_stagePoint$$);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $event$$32_localPoint_stagePoint$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$32_localPoint_stagePoint$$);
  $event$$32_localPoint_stagePoint$$ = this.$_panButton$.$stageToLocal$($event$$32_localPoint_stagePoint$$);
  (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$32_localPoint_stagePoint$$.x, $event$$32_localPoint_stagePoint$$.y, this.$_panButton$.$downState$);
  this.$_panMousePoint$ = new D.$DvtPoint$$($event$$32_localPoint_stagePoint$$.x, $event$$32_localPoint_stagePoint$$.y);
  this.$_panTimer$.start();
  this.$_panTimerCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseUp$$($event$$33$$) {
  this.$_bPanMouseDown$ && ((0,D.$DvtEventManager$consumeEvent$$)($event$$33$$), this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
  this.$_panButton$.$_mouseOutHandler$($event$$33$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOver$$($event$$34$$) {
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  var $tooltip$$inline_815$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_PAN");
  this.$getTooltipManager$().$showTooltip$($event$$34$$.pageX, $event$$34$$.pageY, $tooltip$$inline_815$$, $event$$34$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOut$$($event$$35$$) {
  this.$HandlePanMouseUp$($event$$35$$);
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseMove$$($event$$36_localPoint$$1_stagePoint$$1$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$36_localPoint$$1_stagePoint$$1$$);
  $event$$36_localPoint$$1_stagePoint$$1$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$36_localPoint$$1_stagePoint$$1$$);
  $event$$36_localPoint$$1_stagePoint$$1$$ = this.$_panButton$.$stageToLocal$($event$$36_localPoint$$1_stagePoint$$1$$);
  this.$_bPanMouseDown$ ? ((0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$36_localPoint$$1_stagePoint$$1$$.x, $event$$36_localPoint$$1_stagePoint$$1$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new D.$DvtPoint$$($event$$36_localPoint$$1_stagePoint$$1$$.x, $event$$36_localPoint$$1_stagePoint$$1$$.y)) : (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$36_localPoint$$1_stagePoint$$1$$.x, $event$$36_localPoint$$1_stagePoint$$1$$.y, 
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
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterClick$$($event$$37$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$37$$);
  this.$_panZoomCanvas$.$zoomAndCenter$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterDown$$($event$$38$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$38$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterUp$$($event$$39$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$39$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOver$$($event$$40$$) {
  var $tooltip$$inline_821$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMANDCENTER");
  this.$getTooltipManager$().$showTooltip$($event$$40$$.pageX, $event$$40$$.pageY, $tooltip$$inline_821$$, $event$$40$$.target);
  this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$DvtEventManager$consumeEvent$$)($event$$40$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOut$$($event$$41$$) {
  this.$getTooltipManager$().$hideTooltip$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$41$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterMouseMove$$($event$$42$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$42$$)
};
D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$ = function $$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$$($JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$, $localX$$, $localY$$, $displayObj$$) {
  $displayObj$$.$setRotation$(window.Math.atan2($localY$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.y, $localX$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.x) - window.Math.PI / 4)
};
D.$DvtControlPanelEvent$$ = function $$DvtControlPanelEvent$$$($subtype$$) {
  this.Init("dvtPZCPExpand");
  this.$_subtype$ = $subtype$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtControlPanelEvent");
D.$DvtControlPanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtControlPanel$$ = function $$DvtControlPanel$$$($context$$52$$, $canvas$$, $buttonImages$$, $resources$$10$$, $controls$$1$$, $view$$3$$) {
  this.Init($context$$52$$, $canvas$$, $buttonImages$$, $resources$$10$$, $controls$$1$$, $view$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanel$$, D.$DvtContainer$$, "DvtControlPanel");
D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$ = [0, 0.25, 0.5, 0.75, 1];
D.$DvtControlPanel$$.prototype.Init = function $$DvtControlPanel$$$$Init$($context$$53_s$$9$$, $canvas$$1$$, $buttonImages$$1$$, $resources$$11$$, $controls$$2$$, $view$$4$$) {
  D.$DvtControlPanel$$.$superclass$.Init.call(this, $context$$53_s$$9$$, D.$JSCompiler_alias_NULL$$, "_controlPanel");
  this.$_bMouseOver$ = this.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $canvas$$1$$;
  this.$_tooltipManager$ = $context$$53_s$$9$$.$getTooltipManager$();
  this.$Bundle$ = $resources$$11$$;
  this.$_controls$ = $controls$$2$$ == D.$JSCompiler_alias_NULL$$ ? 16777215 : $controls$$2$$;
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_view$ = $view$$4$$) {
    this.$_styleMap$ = this.$_view$.$getControlPanelStyleMap$(), this.$_styleMap$.centerButtonDisplayed || (this.$_controls$ &= -17, this.$_view$.$_displayedControls$ = this.$_controls$)
  }
  this.$_zoomLevels$ = D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$;
  this.$_state$ = 1;
  this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
  this.$_buttonImages$ = $buttonImages$$1$$;
  this.$_bgAlpha$ = this.$_styleMap$.backgroundAlpha;
  this.$_eventManager$ = new D.$DvtControlPanelEventManager$$($context$$53_s$$9$$, D.$JSCompiler_alias_NULL$$, $view$$4$$);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtControlPanel$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this);
  $context$$53_s$$9$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$_background$.$setAlpha$(this.$_bgAlpha$);
  this.$_frame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$addChild$($context$$53_s$$9$$);
  this.$tabChildren$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$DvtControlPanel$$.prototype.$setState$ = function $$DvtControlPanel$$$$$setState$$($state$$) {
  this.$_state$ != $state$$ && (this.$toggleExpandCollapse$(), this.$_state$ = $state$$, (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)(this))
};
D.$DvtControlPanel$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
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
D.$DvtControlPanel$$.prototype.$isSingleHorzRow$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtControlPanel$$.prototype.$getViewPanelHeight$ = function $$DvtControlPanel$$$$$getViewPanelHeight$$() {
  var $h$$9$$ = 0, $h$$9$$ = this.$isSingleHorzRow$() ? D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$() : D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$();
  return window.Math.max((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $h$$9$$)
};
D.$JSCompiler_StaticMethods_RenderCollapsed$$ = function $$JSCompiler_StaticMethods_RenderCollapsed$$$($JSCompiler_StaticMethods_RenderCollapsed$self$$) {
  var $context$$54_proxy$$4$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $contentBar$$ = new D.$DvtContainer$$($context$$54_proxy$$4$$), $hh$$8$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $bR2L$$2$$ = D.$DvtAgent$$.$isRightToLeft$($context$$54_proxy$$4$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$($context$$54_proxy$$4$$, $hh$$8$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$2$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($context$$54_proxy$$4$$, $hh$$8$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$2$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_collapsedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$54_proxy$$4$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$ = D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$2$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_RenderCollapsed$self$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$.setCursor("pointer");
  $context$$54_proxy$$4$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderCollapsed$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$Bundle$, "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $context$$54_proxy$$4$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  return $contentBar$$
};
D.$DvtControlPanel$$.prototype.$PopulateHorzContentBar$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtControlPanel$$.prototype.$toggleExpandCollapse$ = function $$DvtControlPanel$$$$$toggleExpandCollapse$$() {
  this.$_bTransition$ || (2 === this.$_state$ ? this.$_doCollapse$() : 1 === this.$_state$ && this.$_doExpand$())
};
D.$DvtControlPanel$$.prototype.$HandleExpandClick$ = function $$DvtControlPanel$$$$$HandleExpandClick$$($event$$61$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$61$$);
  this.$_bTransition$ || (this.$_doExpand$(), this.$getTooltipManager$() && this.$getTooltipManager$().$hideTooltip$())
};
D.$DvtControlPanel$$.prototype.$_doExpand$ = function $$DvtControlPanel$$$$$_doExpand$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  var $context$$inline_880_odim$$inline_892_transX$$inline_897$$ = this.$_context$, $event$$inline_900_s$$inline_881$$ = new D.$DvtContainer$$($context$$inline_880_odim$$inline_892_transX$$inline_897$$);
  this.$_background$ = new D.$DvtContainer$$($context$$inline_880_odim$$inline_892_transX$$inline_897$$);
  this.$_frame$ = new D.$DvtContainer$$($context$$inline_880_odim$$inline_892_transX$$inline_897$$);
  $event$$inline_900_s$$inline_881$$.$addChild$(this.$_background$);
  $event$$inline_900_s$$inline_881$$.$addChild$(this.$_frame$);
  var $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ = D.$DvtAgent$$.$isRightToLeft$($context$$inline_880_odim$$inline_892_transX$$inline_897$$), $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = 0, $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$ = 
  new D.$DvtContainer$$($context$$inline_880_odim$$inline_892_transX$$inline_897$$), $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$;
  $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ = 0;
  var $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ = this.$_context$, $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ = this.$isSingleHorzRow$();
  0 != (this.$_controls$ & 16) && (this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanControl$($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, this.$_panZoomCanvas$, this.$Bundle$, this.$_controls$, this.$_buttonImages$, this.$_styleMap$), $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ && (this.$_panControlUnderlay$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, 
  this.$_styleMap$), this.$_panControlUnderlay2$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, this.$_styleMap$), $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$addChild$(this.$_panControlUnderlay2$), $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$addChild$(this.$_panControlUnderlay$)), 
  $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$addChild$(this.$_panControl$), $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$++);
  this.$_collapseButton$ = D.$DvtButtonLAFUtils$$.$createCollapseButton$(this.$_context$, this.$_buttonImages$, this.$getViewPanelHeight$(), this.$_styleMap$, D.$DvtAgent$$.$isRightToLeft$(this.$_context$));
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_collapseButton$, this.$HandleCollapseClick$, this);
  this.$_collapseButton$.setCursor("pointer");
  $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL"));
  this.$_eventManager$.$associate$(this.$_collapseButton$, $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$);
  $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$addChild$(this.$_collapseButton$);
  this.$_additionalContent$ = new D.$DvtContainer$$(this.$_context$);
  this.$PopulateHorzContentBar$(this.$_additionalContent$);
  0 < this.$_additionalContent$.$getNumChildren$() ? ($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$addChild$(this.$_additionalContent$), $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$++) : this.$_additionalContent$ = D.$JSCompiler_alias_NULL$$;
  var $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ = $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = 
  this.$_context$, $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ = D.$JSCompiler_alias_NULL$$, $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0), $backgroundWidth$$inline_8857_buttonWidth$$inline_8823$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0), $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ = this.$getViewPanelHeight$(), $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.hbar, "paddingLeft", 0), $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.hbar, "paddingInner", 0);
  $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ ? (this.$_collapseButton$.$setTranslateX$(0), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$, this.$_additionalContent$ && ($dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, this.$_additionalContent$), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_additionalContent$, 
  $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, ($buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ - $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$.$h$) / 2), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += window.Math.max($dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$.$w$, 
  $backgroundWidth$$inline_8857_buttonWidth$$inline_8823$$)), this.$_panControl$ && ($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$, $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControl$, $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, 
  $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$), this.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay$, $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$), this.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay2$, $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, 
  $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$), $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, this.$_panControl$), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += 
  $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$.$w$), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$) : (this.$_panControl$ && ($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += 
  $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$, $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControl$, $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$, $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$), 
  this.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay$, $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$, $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$), this.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_panControlUnderlay2$, $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$, 
  $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$), $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, this.$_panControl$), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += 
  $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$ + $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$.$w$, $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += 1), this.$_additionalContent$ && ($dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, 
  this.$_additionalContent$), 0 == $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ && ($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_additionalContent$, 
  $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, ($buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ - $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$.$h$) / 2), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$.$w$, 
  $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ = window.Math.max($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ + $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$, $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$)), 
  this.$_collapseButton$.$setTranslateX$($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ += $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$);
  $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$;
  $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ = D.$JSCompiler_alias_NULL$$;
  $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ = this.$_controls$ & 16 || this.$_styleMap$ && this.$_styleMap$.panelDrawerStyles && 0 == $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ ? (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingTop", 0) : 0;
  this.$isSingleHorzRow$() && 0 != (this.$_controls$ & 16) && ($bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ += D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$() - this.$getViewPanelHeight$());
  if(0 != (this.$_controls$ & 256) || 0 != (this.$_controls$ & 4097)) {
    $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ = new D.$DvtContainer$$($context$$inline_880_odim$$inline_892_transX$$inline_897$$), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$.$setTranslateY$($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$getTranslateY$() + this.$getViewPanelHeight$()), 
    $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ = $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, 0 != (this.$_controls$ & 256) && ($buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingLeft", 0), this.$_zoomToFitButton$ = D.$DvtButtonLAFUtils$$.$createZoomToFitButton$(this.$_context$, this.$_panZoomCanvas$, this.$Bundle$, this.$_eventManager$, this.$_buttonImages$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_zoomToFitButton$, 
    $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$, this.$_zoomToFitButton$.$getTranslateY$() + $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$), $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, 
    this.$_zoomToFitButton$), $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$.$addChild$(this.$_zoomToFitButton$), $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ += $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$.$h$, 
    $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ += $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$), $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ = $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, 
    $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ = D.$JSCompiler_alias_NULL$$, $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, 
    "paddingLeft", 0), 0 != (this.$_controls$ & 4097) && (this.$_zoomInButton$ = D.$DvtButtonLAFUtils$$.$createZoomInButton$(this.$_context$, this.$_panZoomCanvas$, this.$Bundle$, this.$_eventManager$, this.$_buttonImages$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_zoomInButton$, $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$, this.$_zoomInButton$.$getTranslateY$() + $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$), 
    $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, this.$_zoomInButton$), $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$.$addChild$(this.$_zoomInButton$), $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ += 
    $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$.$h$ + $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$, this.$_zoomOutButton$ = D.$DvtButtonLAFUtils$$.$createZoomOutButton$(this.$_context$, this.$_panZoomCanvas$, this.$Bundle$, this.$_eventManager$, this.$_buttonImages$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_zoomOutButton$, 
    $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$, this.$_zoomOutButton$.$getTranslateY$() + $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$), $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, this.$_zoomOutButton$), 
    $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$.$addChild$(this.$_zoomOutButton$), $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ += $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$.$h$, 
    $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ = this.$_panZoomCanvas$.$getZoom$(), $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$), 
    $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$), this.$_zoomInButton$ && this.$_zoomInButton$.$setEnabled$($bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ != 
    $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$), this.$_zoomOutButton$ && this.$_zoomOutButton$.$setEnabled$($bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ != $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$)), 
    this.$_frame$.$addChild$($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$)
  }
  var $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ = $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ = $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$, 
  $buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$ = this.$_context$, $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0), $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $backgroundWidth$$inline_8857_buttonWidth$$inline_8823$$ = 
  ($dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) ? $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ : $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ - 
  $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$, $backgroundHeight$$inline_8858$$ = this.$getViewPanelHeight$(), $backgroundFrameOffsetX$$inline_8859$$ = 0, $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = 0;
  $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ ? $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ && 0 == $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ && ($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ ? 
  -$buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$ : $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$) : ($backgroundFrameOffsetX$$inline_8859$$ = $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ ? $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$ : 0, $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = 
  $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ ? $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$ : 0);
  if(0 < $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ || $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$) {
    $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$ = D.$JSCompiler_alias_NULL$$, $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 0)), $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$ = $dim$$inline_8821_panelDrawerStyle$$inline_8856_yy$$inline_8828$$ ? D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$, 
    $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$, $backgroundWidth$$inline_8857_buttonWidth$$inline_8823$$, $backgroundHeight$$inline_8858$$, 0 < $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ && $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ != 
    D.$JSCompiler_alias_NULL$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ : D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$, $buttonPaddingInner$$inline_8827_paddingSide$$inline_8842_panelWidth$$inline_8855$$) : D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$, $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$, $backgroundWidth$$inline_8857_buttonWidth$$inline_8823$$ - 
    2 * $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$, $backgroundHeight$$inline_8858$$ - 2 * $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$, !$animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$), $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$)), $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$.$setFill$(D.$JSCompiler_alias_NULL$$), 
    $buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$.$setTranslateX$($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$getTranslateX$() + $backgroundFrameOffsetX$$inline_8859$$), $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$addChildAt$($buttonWidth$$inline_8854_r$$inline_8862_viewFrame$$inline_8861$$, 0), $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ = 
    D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($buttonPaddingSide$$inline_8826_context$$inline_8853_dim$$inline_8835_paddingInner$$inline_8841_paddingSide$$inline_8834_prevZoom$$inline_8845$$, $backgroundWidth$$inline_8857_buttonWidth$$inline_8823$$, this.$getViewPanelHeight$(), !$animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$, this.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$, 
    $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$getTranslateY$()), this.$_background$.$addChild$($animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$)
  }
  this.$_frame$.$addChild$($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$);
  $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ = $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$;
  $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = this.$_context$;
  $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ = D.$DvtAgent$$.$isRightToLeft$($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$);
  $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  !this.$_additionalContent$ && 0 == (this.$_controls$ & 16) ? $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ ? ($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$setTranslateX$(0 - $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$getTranslateX$()), 
  $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$setTranslateY$(0), $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ && (D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$), 
  $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$setTranslateX$($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$getTranslateX$() - $buttonWidth$$inline_8870_dim$$inline_8840_nKidHorzContentBar$$inline_8850_nextZoom$$inline_8844_paddingInner$$inline_8833_panelHeight$$inline_8825$$), $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$.$setTranslateY$(0))) : 
  $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ ? ($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$, 
  0, 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$, $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, 0)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$, 
  $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$getTranslateX$(), 0) : $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ && $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ && ($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$), $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$setTranslateX$(0), $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$.$setTranslateX$($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$.$w$ + 
  $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$.x - $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$));
  $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ = $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$;
  $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ = $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$;
  $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ = this.$_context$;
  $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ && ($backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$.$getNumChildren$(), $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ = 
  1 < $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ || this.$_zoomToFitButton$ == D.$JSCompiler_alias_NULL$$ || 1 < $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ || 0 < $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ && 
  1 == $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ = D.$JSCompiler_alias_NULL$$, this.$_styleMap$ && this.$_styleMap$.panelDrawerStyles && ($bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$ = 
  0 < $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ : D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$), $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, 
  $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$), $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ += 4, $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ = $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$ ? 
  $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$ : window.Math.max($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$.$h$, $bBiDi$$inline_8869_barWidth$$inline_8873_currY$$inline_8879_currZoom$$inline_8843_panelWidth$$inline_8824_vertContentBar$$inline_8831_vertContentBar$$inline_8838_vertContentBar$$inline_8849$$), 
  $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ += (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$.vbar, "paddingBottom", 0), $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, 
  $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$, this.$_styleMap$, $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$, this.$getViewPanelHeight$()), $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ = 
  D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$($context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$, $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$, $backgroundShapeOffsetX$$inline_8860_context$$inline_8820_context$$inline_8868_cpWidth$$inline_8871_currX$$inline_883_dimHorizontal$$inline_8872_nKidsVert$$inline_8881_roundedCorner$$inline_8882$$, 
  this.$_styleMap$, $bSingleRow$$inline_8807_collapseButtonWidth$$inline_8822_currY$$inline_8832_currY$$inline_8839_currY$$inline_887_openside$$inline_8883$$, this.$getViewPanelHeight$()), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$, $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$.$getTranslateX$(), $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$.$getTranslateY$()), 
  this.$_background$.$addChild$($dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$), $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$.$addChildAt$($cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$, 0));
  this.$_expandedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_880_odim$$inline_892_transX$$inline_897$$, $event$$inline_900_s$$inline_881$$);
  this.$addChild$($event$$inline_900_s$$inline_881$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_890$$ = this.$getChildAt$(0), $context$$inline_880_odim$$inline_892_transX$$inline_897$$ = $oldContent$$inline_890$$.$getDimensions$(), $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  $context$$inline_880_odim$$inline_892_transX$$inline_897$$ && 0 != $context$$inline_880_odim$$inline_892_transX$$inline_897$$.$w$ ? ($cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ = $event$$inline_900_s$$inline_881$$.$getDimensions$(), $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$ = new D.$DvtAnimator$$(this.$_context$, 
  0.25), $oldContent$$inline_890$$.$setAlpha$(1), $event$$inline_900_s$$inline_881$$.$setAlpha$(0), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$, "typeNumber", $oldContent$$inline_890$$, $oldContent$$inline_890$$.$getAlpha$, $oldContent$$inline_890$$.$setAlpha$, 0), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$, 
  "typeNumber", $event$$inline_900_s$$inline_881$$, $event$$inline_900_s$$inline_881$$.$getAlpha$, $event$$inline_900_s$$inline_881$$.$setAlpha$, 1), $event$$inline_900_s$$inline_881$$.$setScaleX$($context$$inline_880_odim$$inline_892_transX$$inline_897$$.$w$ / $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$.$w$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$, 
  "typeNumber", $event$$inline_900_s$$inline_881$$, $event$$inline_900_s$$inline_881$$.$getScaleX$, $event$$inline_900_s$$inline_881$$.$setScaleX$, 1), D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && ($event$$inline_900_s$$inline_881$$.$setTranslateX$($oldContent$$inline_890$$.$getTranslateX$()), $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ = $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$.$w$ + 
  $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$.x, (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$, "typeNumber", $event$$inline_900_s$$inline_881$$, $event$$inline_900_s$$inline_881$$.$getTranslateX$, $event$$inline_900_s$$inline_881$$.$setTranslateX$, $oldContent$$inline_890$$.$getTranslateX$() + 
  $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$ - $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$)), $event$$inline_900_s$$inline_881$$.$setScaleY$($context$$inline_880_odim$$inline_892_transX$$inline_897$$.$h$ / $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$.$h$), 
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$, "typeNumber", $event$$inline_900_s$$inline_881$$, $event$$inline_900_s$$inline_881$$.$getScaleY$, $event$$inline_900_s$$inline_881$$.$setScaleY$, 1), $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$.$setOnEnd$(function() {
    $oldContent$$inline_890$$.getParent().removeChild($oldContent$$inline_890$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
    this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
  }, this), $animator$$inline_895_bBiDi$$inline_882_vertContentBar$$inline_8867_vertContentBar$$inline_8877_viewShape$$inline_8863$$.play()) : ($oldContent$$inline_890$$.getParent().removeChild($oldContent$$inline_890$$), D.$DvtAgent$$.$isRightToLeft$(this.$_context$) ? ($cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$ = (0,D.$DvtDisplayableUtils$_getDimForced$$)(this.$_context$, $event$$inline_900_s$$inline_881$$), 
  $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$ = window.Math.floor($cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$.$w$ + $cpHeight$$inline_8885_nKidHorzContentBar$$inline_8805_nKidHorzContentBar$$inline_8815_nKidHorzContentBar$$inline_885_ndim$$inline_894_zoomFrame$$inline_8887$$.x), $context$$inline_880_odim$$inline_892_transX$$inline_897$$ = 
  $dim$$inline_8884_horzContentBar$$inline_884_openCloseButtonWidth$$inline_893_zoomShape$$inline_8886$$ - $context$$inline_8806_context$$inline_8880_currX$$inline_8819_dimWidth$$inline_896_proxy$$inline_8811_vertContentBar$$inline_886$$) : $context$$inline_880_odim$$inline_892_transX$$inline_897$$ = 0, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($event$$inline_900_s$$inline_881$$, $context$$inline_880_odim$$inline_892_transX$$inline_897$$, 0));
  this.$_state$ = 2;
  $event$$inline_900_s$$inline_881$$ = new D.$DvtControlPanelEvent$$("show");
  this.$FireListener$($event$$inline_900_s$$inline_881$$)
};
D.$JSCompiler_StaticMethods__applyAlphasForMouse$$ = function $$JSCompiler_StaticMethods__applyAlphasForMouse$$$($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) {
  var $bMouseOver$$1$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__applyAlphasForMouse$self$$.$_context$.$_stage$ && ($bMouseOver$$1$$ = D.$JSCompiler_alias_TRUE$$);
  $bMouseOver$$1$$ ? (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) : (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$)
};
D.$DvtControlPanel$$.prototype.$HandleCollapseClick$ = function $$DvtControlPanel$$$$$HandleCollapseClick$$($event$$62$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$62$$);
  this.$_bTransition$ || this.$_doCollapse$()
};
D.$DvtControlPanel$$.prototype.$_doCollapse$ = function $$DvtControlPanel$$$$$_doCollapse$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  var $event$$inline_910_s$$12$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$addChild$($event$$inline_910_s$$12$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_903$$ = this.$getChildAt$(0), $animator$$inline_905$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  $oldContent$$inline_903$$.$setAlpha$(1);
  $event$$inline_910_s$$12$$.$setAlpha$(0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_905$$, "typeNumber", $oldContent$$inline_903$$, $oldContent$$inline_903$$.$getAlpha$, $oldContent$$inline_903$$.$setAlpha$, 0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_905$$, "typeNumber", $event$$inline_910_s$$12$$, $event$$inline_910_s$$12$$.$getAlpha$, $event$$inline_910_s$$12$$.$setAlpha$, 1);
  var $ndim$$inline_906$$ = this.$_collapsedDim$, $odim$$inline_907$$ = this.$_expandedDim$;
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_905$$, "typeNumber", $oldContent$$inline_903$$, $oldContent$$inline_903$$.$getScaleX$, $oldContent$$inline_903$$.$setScaleX$, $ndim$$inline_906$$.$w$ / $odim$$inline_907$$.$w$);
  D.$DvtAgent$$.$isRightToLeft$(this.$_context$) && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_905$$, "typeNumber", $oldContent$$inline_903$$, $oldContent$$inline_903$$.$getTranslateX$, $oldContent$$inline_903$$.$setTranslateX$, $event$$inline_910_s$$12$$.$getTranslateX$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_905$$, "typeNumber", $oldContent$$inline_903$$, $oldContent$$inline_903$$.$getScaleY$, $oldContent$$inline_903$$.$setScaleY$, $ndim$$inline_906$$.$h$ / $odim$$inline_907$$.$h$);
  $animator$$inline_905$$.$setOnEnd$(function() {
    $oldContent$$inline_903$$.getParent().removeChild($oldContent$$inline_903$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
  }, this);
  $animator$$inline_905$$.play();
  this.$_state$ = 1;
  $event$$inline_910_s$$12$$ = new D.$DvtControlPanelEvent$$("hide");
  this.$FireListener$($event$$inline_910_s$$12$$)
};
D.$DvtControlPanel$$.prototype.$HandleRollOver$ = function $$DvtControlPanel$$$$$HandleRollOver$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)(this)
};
D.$DvtControlPanel$$.prototype.$HandleRollOut$ = function $$DvtControlPanel$$$$$HandleRollOut$$() {
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
D.$DvtControlPanel$$.prototype.$getDimensions$ = function $$DvtControlPanel$$$$$getDimensions$$() {
  this.$_dim$ || (this.$_dim$ = D.$DvtControlPanel$$.$superclass$.$getDimensions$.call(this));
  return this.$_dim$
};
D.$DvtControlPanel$$.prototype.$renderComponent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtControlPanel$$.prototype.$getButtonImages$ = (0,D.$JSCompiler_get$$)("$_buttonImages$");
D.$JSCompiler_StaticMethods_enableZoomInControl$$ = function $$JSCompiler_StaticMethods_enableZoomInControl$$$($JSCompiler_StaticMethods_enableZoomInControl$self$$, $enabled$$2$$) {
  $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$.$setEnabled$($enabled$$2$$)
};
D.$JSCompiler_StaticMethods_enableZoomOutControl$$ = function $$JSCompiler_StaticMethods_enableZoomOutControl$$$($JSCompiler_StaticMethods_enableZoomOutControl$self$$, $enabled$$3$$) {
  $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$.$setEnabled$($enabled$$3$$)
};
D.$DvtControlPanelDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelDefaults$$, D.$DvtObj$$, "DvtControlPanelDefaults");
D.$DvtControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:D.$JSCompiler_alias_TRUE$$, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:D.$JSCompiler_alias_FALSE$$, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", 
scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
D.$DvtControlPanelDefaults$$.$DEFAULT$ = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:0.5, backgroundHoverAlpha:1, backgroundDragAlpha:0.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:0.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:D.$JSCompiler_alias_TRUE$$, comboBox:{paddingTop:2, paddingBottom:6, 
paddingLeft:3, paddingRight:3, paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
D.$DvtControlPanelDefaults$$.$calcOptions$ = function $$DvtControlPanelDefaults$$$$calcOptions$$($userOptions$$5$$) {
  var $defaults$$4$$ = D.$DvtControlPanelDefaults$$.$_getDefaults$($userOptions$$5$$);
  return $userOptions$$5$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$5$$, $defaults$$4$$) : $defaults$$4$$
};
D.$DvtControlPanelDefaults$$.$_getDefaults$ = function $$DvtControlPanelDefaults$$$$_getDefaults$$($userOptions$$6$$) {
  var $defaults$$5$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$5$$ = $userOptions$$6$$ && "skyros" === $userOptions$$6$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : $userOptions$$6$$ && "alta" === $userOptions$$6$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_ALTA$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.clone(D.$DvtControlPanelDefaults$$.$DEFAULT$)
};
D.$DvtControlPanelEventManager$$ = function $$DvtControlPanelEventManager$$$($context$$431$$, $callback$$87$$, $callbackObj$$60$$) {
  this.Init($context$$431$$, $callback$$87$$, $callbackObj$$60$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventManager$$, D.$DvtEventManager$$, "DvtControlPanelEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$302$$) {
  var $obj$$242$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$302$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$302$$);
  $obj$$242$$ && ($obj$$242$$.$HandleMouseDown$ && $obj$$242$$.$HandleMouseDown$($event$$302$$), $event$$302$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$303$$) {
  var $obj$$243$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$303$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$303$$);
  $obj$$243$$ && ($obj$$243$$.$HandleMouseUp$ && $obj$$243$$.$HandleMouseUp$($event$$303$$), $event$$303$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$304$$) {
  var $obj$$244$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$304$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$304$$);
  $obj$$244$$ && ($obj$$244$$.$HandleMouseOut$ && $obj$$244$$.$HandleMouseOut$($event$$304$$), $event$$304$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$305$$) {
  var $obj$$245$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$305$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$305$$);
  $obj$$245$$ && ($obj$$245$$.$HandleMouseMove$ && $obj$$245$$.$HandleMouseMove$($event$$305$$), $event$$305$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$306$$) {
  var $obj$$246$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$306$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $event$$306$$);
  $obj$$246$$ && ($obj$$246$$.$HandleClick$ && $obj$$246$$.$HandleClick$($event$$306$$), $event$$306$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$307$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$307$$);
  var $obj$$247$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$307$$));
  $obj$$247$$ && $obj$$247$$.$HandleRollOver$ && $obj$$247$$.$HandleRollOver$($event$$307$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$308$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$308$$);
  var $obj$$248$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$308$$));
  $obj$$248$$ && $obj$$248$$.$HandleRollOut$ && $obj$$248$$.$HandleRollOut$($event$$308$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$309$$) {
  var $obj$$249$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$309$$));
  $obj$$249$$ && ($obj$$249$$.$HandleClick$ && $obj$$249$$.$HandleClick$($event$$309$$), $event$$309$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$310$$) {
  $event$$310$$.$blockTouchHold$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$310$$)
};
D.$DvtControlPanelEventHandlerProxy$$ = function $$DvtControlPanelEventHandlerProxy$$$($callback$$32$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$2$$) {
  this.Init($callback$$32$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventHandlerProxy$$, D.$DvtObj$$, "DvtControlPanelEventHandlerProxy");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventHandlerProxy$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($callbackObj$$8$$, $handleClick$$1$$, $handleMouseDown$$1$$, $handleMouseUp$$1$$, $handleMouseOut$$1$$, $handleMouseOver$$1$$, $tooltip$$3$$) {
  this.$_callbackObj$ = $callbackObj$$8$$;
  this.$_handleClick$ = $handleClick$$1$$;
  this.$_handleMouseUp$ = $handleMouseUp$$1$$;
  this.$_handleMouseDown$ = $handleMouseDown$$1$$;
  this.$_handleMouseOut$ = $handleMouseOut$$1$$;
  this.$_handleMouseOver$ = $handleMouseOver$$1$$;
  this.$_tooltip$ = $tooltip$$3$$
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$49$$) {
  this.$_handleClick$ && this.$_handleClick$.call(this.$_callbackObj$, $event$$49$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$50$$) {
  this.$_handleMouseDown$ && this.$_handleMouseDown$.call(this.$_callbackObj$, $event$$50$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseUp$$($event$$51$$) {
  this.$_handleMouseUp$ && this.$_handleMouseUp$.call(this.$_callbackObj$, $event$$51$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$($event$$52$$) {
  this.$_handleMouseOut$ && this.$_handleMouseOut$.call(this.$_callbackObj$, $event$$52$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$($event$$53$$) {
  this.$_handleMouseOver$ && this.$_handleMouseOver$.call(this.$_callbackObj$, $event$$53$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$DvtControlPanelLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelLAFUtils$$, D.$DvtObj$$, "DvtControlPanelLAFUtils");
D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ = "top";
D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ = "right";
D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ = "left";
D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ = "bottom";
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHalfHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewOpenShape$$($context$$38_mc$$, $nw$$, $nh$$, $bL2R$$, $styleMap$$13$$) {
  $nw$$ || ($nw$$ = 86);
  $nh$$ || ($nh$$ = 47);
  $bL2R$$ === D.$JSCompiler_alias_VOID$$ && ($bL2R$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$13$$, "border-radius", 0));
  $context$$38_mc$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($context$$38_mc$$, $r$$, $nw$$ - 2 * $r$$, $nh$$ - 2 * $r$$, $bL2R$$);
  $context$$38_mc$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$13$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$38_mc$$
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelper$$($context$$39$$, $r$$1$$, $ww$$4$$, $hh$$4$$, $bL2R$$1$$) {
  var $x$$64$$ = $ww$$4$$ + $r$$1$$, $y$$41$$ = $hh$$4$$ + $r$$1$$, $cmds$$ = window.DvtPathUtils.moveTo($x$$64$$ + $r$$1$$, $y$$41$$ + $r$$1$$), $cmds$$ = $cmds$$ + window.DvtPathUtils.lineTo($x$$64$$ - $ww$$4$$, $y$$41$$ + $r$$1$$), $x$$64$$ = $x$$64$$ - $ww$$4$$, $cmds$$ = $cmds$$ + window.DvtPathUtils.lineTo($x$$64$$ - $r$$1$$, $y$$41$$ + $r$$1$$), $cmds$$ = $cmds$$ + window.DvtPathUtils.lineTo($x$$64$$ - $r$$1$$, $y$$41$$ - $hh$$4$$), $y$$41$$ = $y$$41$$ - $hh$$4$$;
  $bL2R$$1$$ ? ($cmds$$ += window.DvtPathUtils.$quadTo$(-$r$$1$$ + $x$$64$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$1$$ + $y$$41$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$1$$ + $x$$64$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$1$$ + $y$$41$$) + window.DvtPathUtils.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$1$$ + $x$$64$$, -$r$$1$$ + $y$$41$$, $x$$64$$, -$r$$1$$ + $y$$41$$) + window.DvtPathUtils.lineTo($x$$64$$, -$r$$1$$ + $y$$41$$), $cmds$$ += window.DvtPathUtils.lineTo($x$$64$$ + 
  $ww$$4$$ + $r$$1$$, -$r$$1$$ + $y$$41$$), $cmds$$ += window.DvtPathUtils.lineTo($x$$64$$ + $ww$$4$$ + $r$$1$$, $y$$41$$ + $hh$$4$$)) : ($cmds$$ += window.DvtPathUtils.lineTo($x$$64$$ - $r$$1$$, -$r$$1$$ + $y$$41$$), $cmds$$ += window.DvtPathUtils.lineTo($x$$64$$ + $ww$$4$$, -$r$$1$$ + $y$$41$$), $x$$64$$ += $ww$$4$$, $cmds$$ += window.DvtPathUtils.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$1$$ + $x$$64$$, -$r$$1$$ + $y$$41$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$1$$ + $x$$64$$, 
  -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$1$$ + $y$$41$$) + window.DvtPathUtils.$quadTo$($r$$1$$ + $x$$64$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$1$$ + $y$$41$$, $r$$1$$ + $x$$64$$, $y$$41$$) + window.DvtPathUtils.lineTo($x$$64$$ + $r$$1$$, $y$$41$$ + $hh$$4$$));
  $cmds$$ += window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$39$$, $cmds$$)
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedShape$$($context$$40_mc$$1$$, $buttonHeight_nh$$1$$, $styleMap$$14$$, $arPoints_bR2L_color$$5$$) {
  $buttonHeight_nh$$1$$ || ($buttonHeight_nh$$1$$ = 47);
  var $r$$2$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$14$$, "border-radius", 0)), $buttonWidth$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$14$$, "openCloseButtonWidth", 0);
  $buttonHeight_nh$$1$$ = window.Math.max($buttonHeight_nh$$1$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$14$$, "buttonHeight", $buttonHeight_nh$$1$$));
  $arPoints_bR2L_color$$5$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$, $buttonHeight_nh$$1$$, $r$$2$$, $arPoints_bR2L_color$$5$$);
  $arPoints_bR2L_color$$5$$ = $arPoints_bR2L_color$$5$$.concat("Z");
  $context$$40_mc$$1$$ = new D.$DvtPath$$($context$$40_mc$$1$$, $arPoints_bR2L_color$$5$$, "cls_shape");
  ($arPoints_bR2L_color$$5$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$14$$, "tab-color-inactive", D.$JSCompiler_alias_NULL$$)) || ($arPoints_bR2L_color$$5$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$14$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $context$$40_mc$$1$$.$setSolidFill$($arPoints_bR2L_color$$5$$);
  return $context$$40_mc$$1$$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedFrame$$($context$$41_mc$$2$$, $buttonHeight$$1_nh$$2$$, $styleMap$$15$$, $arPoints$$1_bR2L$$1$$) {
  $buttonHeight$$1_nh$$2$$ || ($buttonHeight$$1_nh$$2$$ = 47);
  var $r$$3$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$15$$, "border-radius", 0)), $buttonWidth$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$15$$, "openCloseButtonWidth", 0);
  $buttonHeight$$1_nh$$2$$ = window.Math.max($buttonHeight$$1_nh$$2$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$15$$, "buttonHeight", $buttonHeight$$1_nh$$2$$));
  $arPoints$$1_bR2L$$1$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$1$$, $buttonHeight$$1_nh$$2$$, $r$$3$$, $arPoints$$1_bR2L$$1$$);
  $arPoints$$1_bR2L$$1$$ = $arPoints$$1_bR2L$$1$$.concat("Z");
  $context$$41_mc$$2$$ = new D.$DvtPath$$($context$$41_mc$$2$$, $arPoints$$1_bR2L$$1$$, "cls_shape");
  $context$$41_mc$$2$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$15$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $context$$41_mc$$2$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $context$$41_mc$$2$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomShape$$($context$$42_mc$$3$$, $nh$$3$$, $styleMap$$16$$, $openSide$$, $openSideSize$$) {
  $nh$$3$$ || ($nh$$3$$ = 137);
  var $r$$4$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$16$$, "border-radius", 0)), $cpWidth$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$16$$, "tabSize", 0), $ww$$5$$ = $cpWidth$$ - 2 * $r$$4$$, $hh$$5$$ = $nh$$3$$ + 7 - 2 * $r$$4$$;
  $context$$42_mc$$3$$ = $openSide$$ && $openSideSize$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$42_mc$$3$$, $r$$4$$, $cpWidth$$, $nh$$3$$, $openSide$$, $openSideSize$$) : D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$42_mc$$3$$, $r$$4$$, $ww$$5$$, $hh$$5$$);
  $context$$42_mc$$3$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$16$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$42_mc$$3$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomFrame$$($context$$43$$, $nh$$4$$, $roundBottomRight$$, $styleMap$$17$$, $openSide$$1$$, $openSideSize$$1$$) {
  $nh$$4$$ || ($nh$$4$$ = 137);
  $roundBottomRight$$ || ($roundBottomRight$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$5$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$17$$, "border-radius", 0)), $cpWidth$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$17$$, "tabSize", 0), $ww$$6$$ = $cpWidth$$1$$ - 2 * $r$$5$$, $hh$$6$$ = $nh$$4$$ + 7 - 2 * $r$$5$$, $mc$$4$$ = D.$JSCompiler_alias_NULL$$, $mc$$4$$ = $openSide$$1$$ && $openSideSize$$1$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$43$$, $r$$5$$, $cpWidth$$1$$, $nh$$4$$, $openSide$$1$$, $openSideSize$$1$$) : 
  D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$43$$, $r$$5$$, $ww$$6$$, $hh$$6$$, $roundBottomRight$$);
  $mc$$4$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$17$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $mc$$4$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $mc$$4$$
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelper$$($context$$44$$, $r$$6$$, $ww$$7$$, $hh$$7$$, $roundBottomRight$$1$$) {
  $roundBottomRight$$1$$ || ($roundBottomRight$$1$$ = D.$JSCompiler_alias_TRUE$$);
  var $x$$65$$ = $ww$$7$$ + $r$$6$$, $y$$42$$ = $hh$$7$$, $cmds$$1$$ = window.DvtPathUtils.moveTo($x$$65$$ + $r$$6$$, $y$$42$$), $cmds$$1$$ = $roundBottomRight$$1$$ ? $cmds$$1$$ + (window.DvtPathUtils.$quadTo$($r$$6$$ + $x$$65$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$6$$ + $y$$42$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$6$$ + $x$$65$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$6$$ + $y$$42$$) + window.DvtPathUtils.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$6$$ + $x$$65$$, 
  $r$$6$$ + $y$$42$$, $x$$65$$, $r$$6$$ + $y$$42$$) + window.DvtPathUtils.lineTo($x$$65$$, $r$$6$$ + $y$$42$$)) : $cmds$$1$$ + window.DvtPathUtils.lineTo($x$$65$$ + $r$$6$$, $y$$42$$ + $r$$6$$), $cmds$$1$$ = $cmds$$1$$ + window.DvtPathUtils.lineTo($x$$65$$ - $ww$$7$$, $r$$6$$ + $y$$42$$), $x$$65$$ = $x$$65$$ - $ww$$7$$, $cmds$$1$$ = $cmds$$1$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$6$$ + $x$$65$$, $r$$6$$ + $y$$42$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * 
  $r$$6$$ + $x$$65$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$6$$ + $y$$42$$) + window.DvtPathUtils.$quadTo$(-$r$$6$$ + $x$$65$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$6$$ + $y$$42$$, -$r$$6$$ + $x$$65$$, $y$$42$$) + window.DvtPathUtils.lineTo(-$r$$6$$ + $x$$65$$, $y$$42$$) + window.DvtPathUtils.lineTo(-$r$$6$$ + $x$$65$$, $y$$42$$ - $hh$$7$$)), $y$$42$$ = $y$$42$$ - $hh$$7$$, $cmds$$1$$ = $cmds$$1$$ + (window.DvtPathUtils.lineTo($x$$65$$ + $ww$$7$$ + $r$$6$$, $y$$42$$) + window.DvtPathUtils.lineTo($x$$65$$ + 
  $ww$$7$$ + $r$$6$$, $y$$42$$ + $hh$$7$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$44$$, $cmds$$1$$)
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelperOpenSide$$($context$$45$$, $arPoints$$2_r$$7$$, $width$$16$$, $height$$15$$, $openSide$$2$$, $openSideSize$$2$$) {
  $arPoints$$2_r$$7$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($width$$16$$, $height$$15$$, $arPoints$$2_r$$7$$, $openSide$$2$$, $openSideSize$$2$$);
  return new D.$DvtPath$$($context$$45$$, $arPoints$$2_r$$7$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelperOpenSide$$($context$$46$$, $arPoints$$3_r$$8$$, $width$$17$$, $height$$16$$, $openSide$$3$$, $openSideSize$$3$$) {
  $arPoints$$3_r$$8$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($width$$17$$, $height$$16$$, $arPoints$$3_r$$8$$, $openSide$$3$$, $openSideSize$$3$$);
  return new D.$DvtPath$$($context$$46$$, $arPoints$$3_r$$8$$)
};
D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$ = function $$DvtControlPanelLAFUtils$$$$GetShapePathCommands$$($width$$18$$, $height$$17$$, $r$$9$$, $openSide$$4$$, $openSideSize$$4$$) {
  var $arPoints$$4$$, $bidi$$ = D.$DvtAgent$$.$isRightToLeft$();
  $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && !$bidi$$ && ($arPoints$$4$$ = ["M", $width$$18$$, 0, "L", $width$$18$$, $height$$17$$ - $r$$9$$, "A", $r$$9$$, $r$$9$$, 0, 0, 1, $width$$18$$ - $r$$9$$, $height$$17$$, "L", 0, $height$$17$$, "L", 0, 0]);
  $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && $bidi$$ ? $arPoints$$4$$ = ["M", $width$$18$$, 0, "L", $width$$18$$, $height$$17$$, "L", $r$$9$$, $height$$17$$, "A", $r$$9$$, $r$$9$$, 0, 0, 1, 0, $height$$17$$ - $r$$9$$, "L", 0, 0] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && !$bidi$$ ? $arPoints$$4$$ = ["M", $width$$18$$, $openSideSize$$4$$, "L", $width$$18$$, $height$$17$$ - $r$$9$$, "A", $r$$9$$, $r$$9$$, 0, 0, 1, $width$$18$$ - $r$$9$$, $height$$17$$, "L", 0, 
  $height$$17$$, "L", 0, 0, "L", $width$$18$$, 0] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && $bidi$$ ? $arPoints$$4$$ = ["M", 0, 0, "L", $width$$18$$, 0, "L", $width$$18$$, $height$$17$$, "L", $r$$9$$, $height$$17$$, "A", $r$$9$$, $r$$9$$, 0, 0, 1, 0, $height$$17$$ - $r$$9$$, "L", 0, $openSideSize$$4$$] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && !$bidi$$ ? $arPoints$$4$$ = ["M", 0, 0, "L", $width$$18$$ - $r$$9$$, 0, "A", $r$$9$$, $r$$9$$, 0, 0, 1, $width$$18$$, 
  $r$$9$$, "L", $width$$18$$, $height$$17$$ - $r$$9$$, "A", $r$$9$$, $r$$9$$, 0, 0, 1, $width$$18$$ - $r$$9$$, $height$$17$$, "L", 0, $height$$17$$] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && $bidi$$ ? $arPoints$$4$$ = ["M", $width$$18$$, $height$$17$$, "L", $r$$9$$, $height$$17$$, "A", $r$$9$$, $r$$9$$, 0, 0, 1, 0, $height$$17$$ - $r$$9$$, "L", 0, $r$$9$$, "A", $r$$9$$, $r$$9$$, 0, 0, 1, $r$$9$$, 0, "L", $width$$18$$, 0] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && 
  !$bidi$$ ? $arPoints$$4$$ = ["M", 0, $height$$17$$, "L", 0, 0, "L", $width$$18$$ - $r$$9$$, 0, "A", $r$$9$$, $r$$9$$, 0, 0, 1, $width$$18$$, $r$$9$$, "L", $width$$18$$, $height$$17$$ - $r$$9$$, "A", $r$$9$$, $r$$9$$, 0, 0, 1, $width$$18$$ - $r$$9$$, $height$$17$$, "L", $openSideSize$$4$$, $height$$17$$] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && $bidi$$ && ($arPoints$$4$$ = ["M", $width$$18$$, $height$$17$$, "L", $width$$18$$, 0, "L", $r$$9$$, 0, "A", $r$$9$$, $r$$9$$, 0, 
  0, 0, 0, $r$$9$$, "L", 0, $height$$17$$ - $r$$9$$, "A", $r$$9$$, $r$$9$$, 0, 0, 0, $r$$9$$, $height$$17$$, "L", $width$$18$$ - $openSideSize$$4$$, $height$$17$$]);
  return $arPoints$$4$$
};
D.$DvtAbstractComponent$$ = function $$DvtAbstractComponent$$$($context$$436$$) {
  this.Init($context$$436$$)
};
(0,D.$goog$exportSymbol$$)("DvtAbstractComponent", D.$DvtAbstractComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractComponent$$, D.$DvtContainer$$, "DvtAbstractComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAbstractComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$437$$) {
  D.$DvtAbstractComponent$$.$superclass$.Init.call(this, $context$$437$$);
  this.$_backgroundPane$ = new D.$DvtRect$$($context$$437$$, 0, 0, 0, 0);
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
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($xmlString$$14$$, $width$$63$$, $height$$56$$) {
  this.$_width$ = $width$$63$$;
  this.$_height$ = $height$$56$$;
  this.$_backgroundPane$.$setWidth$(this.$_width$);
  this.$_backgroundPane$.$setHeight$(this.$_height$);
  $xmlString$$14$$ ? $xmlString$$14$$ = this.$ProcessJSON$($xmlString$$14$$) : this.$_bRenderNullXml$ = D.$JSCompiler_alias_TRUE$$;
  this.$loadXml$($xmlString$$14$$);
  this.$renderComponent$();
  this.$_bRenderNullXml$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtAbstractComponent$$.prototype.render = D.$DvtAbstractComponent$$.prototype.$render$;
D.$DvtAbstractComponent$$.prototype.$renderJson$ = function $$DvtAbstractComponent$$$$$renderJson$$($jsonObj$$4$$, $width$$64$$, $height$$57$$) {
  this.$_width$ = $width$$64$$;
  this.$_height$ = $height$$57$$;
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
    var $fill$$23_fillType$$inline_3737$$;
    var $bgColor$$inline_3738_compCSSStyle$$inline_3736$$ = this.$_compCSSStyle$;
    $bgColor$$inline_3738_compCSSStyle$$inline_3736$$ ? ($fill$$23_fillType$$inline_3737$$ = $bgColor$$inline_3738_compCSSStyle$$inline_3736$$.$getStyle$("fill-type"), ($bgColor$$inline_3738_compCSSStyle$$inline_3736$$ = $bgColor$$inline_3738_compCSSStyle$$inline_3736$$.$getStyle$("background-color")) || ($bgColor$$inline_3738_compCSSStyle$$inline_3736$$ = "#7396C8"), $fill$$23_fillType$$inline_3737$$ = "solid" == $fill$$23_fillType$$inline_3737$$ ? new D.$DvtSolidFill$$($bgColor$$inline_3738_compCSSStyle$$inline_3736$$) : 
    (0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, $bgColor$$inline_3738_compCSSStyle$$inline_3736$$)) : $fill$$23_fillType$$inline_3737$$ = D.$JSCompiler_alias_VOID$$;
    $fill$$23_fillType$$inline_3737$$ && this.$_backgroundPane$.$setFill$($fill$$23_fillType$$inline_3737$$)
  }else {
    "none" != this.$_backgroundColor$ ? ($fill$$23_fillType$$inline_3737$$ = (0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, this.$_backgroundColor$), this.$_backgroundPane$.$setFill$($fill$$23_fillType$$inline_3737$$)) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_backgroundPane$)
  }
};
D.$JSCompiler_StaticMethods__getBackgroundGradient$$ = function $$JSCompiler_StaticMethods__getBackgroundGradient$$$($JSCompiler_StaticMethods__getBackgroundGradient$self$$, $color$$39$$) {
  var $arColors$$15_newColor_rrRatio$$1$$, $arAlphas$$16_bgAlpha$$2$$ = 1;
  if($color$$39$$ && "#7396C8" != $color$$39$$) {
    $arAlphas$$16_bgAlpha$$2$$ = D.$DvtColorUtils$$.$getAlpha$($color$$39$$);
    $arColors$$15_newColor_rrRatio$$1$$ = (D.$DvtColorUtils$$.$getRed$("#AECDEA") - D.$DvtColorUtils$$.$getRed$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getRed$("#7396C8"));
    var $arStops$$14_bgRgb_ggRatio$$1$$ = (D.$DvtColorUtils$$.$getGreen$("#AECDEA") - D.$DvtColorUtils$$.$getGreen$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getGreen$("#7396C8")), $bbRatio$$1_gw$$ = (D.$DvtColorUtils$$.$getBlue$("#AECDEA") - D.$DvtColorUtils$$.$getBlue$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getBlue$("#7396C8")), $gh_rr$$2$$ = D.$DvtColorUtils$$.$getRed$($color$$39$$), $gg$$2_gx_ww$$56$$ = D.$DvtColorUtils$$.$getGreen$($color$$39$$), $bb$$2_cx$$22$$ = D.$DvtColorUtils$$.$getBlue$($color$$39$$);
    $arColors$$15_newColor_rrRatio$$1$$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($gh_rr$$2$$ + $arColors$$15_newColor_rrRatio$$1$$ * (255 - $gh_rr$$2$$)), window.Math.round($gg$$2_gx_ww$$56$$ + $arStops$$14_bgRgb_ggRatio$$1$$ * (255 - $gg$$2_gx_ww$$56$$)), window.Math.round($bb$$2_cx$$22$$ + $bbRatio$$1_gw$$ * (255 - $bb$$2_cx$$22$$)));
    $arStops$$14_bgRgb_ggRatio$$1$$ = D.$DvtColorUtils$$.$getRGB$($color$$39$$);
    $arColors$$15_newColor_rrRatio$$1$$ = ["#FFFFFF", "#FFFFFF", $arColors$$15_newColor_rrRatio$$1$$, $arStops$$14_bgRgb_ggRatio$$1$$]
  }else {
    $arColors$$15_newColor_rrRatio$$1$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
  }
  var $arAlphas$$16_bgAlpha$$2$$ = [$arAlphas$$16_bgAlpha$$2$$, $arAlphas$$16_bgAlpha$$2$$, $arAlphas$$16_bgAlpha$$2$$, $arAlphas$$16_bgAlpha$$2$$], $arStops$$14_bgRgb_ggRatio$$1$$ = [0, 45 / 255, 190 / 255, 1], $gg$$2_gx_ww$$56$$ = $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_width$, $bbRatio$$1_gw$$ = 1.7 * 1.7 * $gg$$2_gx_ww$$56$$, $gh_rr$$2$$ = 1.7 * $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_height$, $gg$$2_gx_ww$$56$$ = 0 + ($gg$$2_gx_ww$$56$$ - $bbRatio$$1_gw$$) / 
  2, $bb$$2_cx$$22$$ = $gg$$2_gx_ww$$56$$ + $bbRatio$$1_gw$$ / 2, $cy$$23$$ = -35 + $gh_rr$$2$$ / 2, $r$$50$$ = 1.5 * window.Math.min($bbRatio$$1_gw$$ / 2, $gh_rr$$2$$ / 2);
  return new D.$DvtRadialGradientFill$$($arColors$$15_newColor_rrRatio$$1$$, $arAlphas$$16_bgAlpha$$2$$, $arStops$$14_bgRgb_ggRatio$$1$$, $bb$$2_cx$$22$$, $cy$$23$$, $r$$50$$, [$gg$$2_gx_ww$$56$$, -35, $bbRatio$$1_gw$$, $gh_rr$$2$$])
};
D.$JSCompiler_StaticMethods_getResourcesMap$$ = function $$JSCompiler_StaticMethods_getResourcesMap$$$($JSCompiler_StaticMethods_getResourcesMap$self$$) {
  $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ || ($JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ = $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$ ? $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$.resources : {});
  return $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$
};
D.$DvtAbstractComponent$$.prototype.$setSkinName$ = (0,D.$JSCompiler_set$$)("$_skinName$");
D.$DvtAbstractComponent$$.prototype.$getControlPanelStyleMap$ = (0,D.$JSCompiler_get$$)("$_controlPanelStyleMap$");
D.$JSCompiler_StaticMethods_parseComponentAttrs$$ = function $$JSCompiler_StaticMethods_parseComponentAttrs$$$($JSCompiler_StaticMethods_parseComponentAttrs$self$$, $xmlNode$$20$$) {
  var $compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$;
  $compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$ = (0,D.$JSCompiler_StaticMethods_parseComponentStyle$$)($xmlNode$$20$$.$getAttr$("skinStyle"), D.$JSCompiler_alias_NULL$$);
  if($compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$ = (0,D.$JSCompiler_StaticMethods_parseComponentStyle$$)($xmlNode$$20$$.$getAttr$("inlineStyle"), $compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$)) {
    $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_compCSSStyle$ = $compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$
  }
  var $cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$ = {};
  if($compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$ = $xmlNode$$20$$.$getAttr$("skin")) {
    $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$setSkinName$($compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$), $cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$.skin = $compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$
  }
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "background-color", $xmlNode$$20$$.$getAttr$("cpBackgroundColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "border-color", $xmlNode$$20$$.$getAttr$("cpBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "border-radius", $xmlNode$$20$$.$getAttr$("cpBorderRadius"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "box-shadow", $xmlNode$$20$$.$getAttr$("cpBoxShadow"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "tab-color-inactive", $xmlNode$$20$$.$getAttr$("tabBgColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "tab-border-color-inactive", $xmlNode$$20$$.$getAttr$("tabBorderColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "scrollbarBackground", $xmlNode$$20$$.$getAttr$("scrollbarBg"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "scrollbarBorderColor", $xmlNode$$20$$.$getAttr$("scrollbarBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "scrollbarHandleColor", $xmlNode$$20$$.$getAttr$("scrollbarHandleColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "scrollbarHandleActiveColor", $xmlNode$$20$$.$getAttr$("scrollbarHandleActiveColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$, "scrollbarHandleHoverColor", $xmlNode$$20$$.$getAttr$("scrollbarHandleHoverColor"));
  $cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_controlPanelStyleMap$ = $cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$;
  $cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$ = {};
  $compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$ && ($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$.skin = $compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$);
  $compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$ = D.$DvtCommonLegendDefaults$$.$calcOptions$($cpStyleMap$$inline_3748_legendStyleMap$$inline_3750$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_legendStyleMap$ = $compCSSStyle$$2_skinName$$inline_3749_styleMap$$inline_9367$$
};
D.$JSCompiler_StaticMethods_parseComponentStyle$$ = function $$JSCompiler_StaticMethods_parseComponentStyle$$$($attr$$26$$, $compCSSStyle$$3$$) {
  $attr$$26$$ && ($compCSSStyle$$3$$ ? $compCSSStyle$$3$$.$merge$(new D.$DvtCSSStyle$$($attr$$26$$)) : $compCSSStyle$$3$$ = new D.$DvtCSSStyle$$($attr$$26$$));
  return $compCSSStyle$$3$$
};
D.$DvtAbstractComponent$$.prototype.$ProcessJSON$ = (0,D.$JSCompiler_identityFn$$)();
D.$DvtAbstractComponent$$.prototype.$SetOptions$ = (0,D.$JSCompiler_set$$)("$Options$");
D.$DvtAbstractPanZoomComponent$$ = function $$DvtAbstractPanZoomComponent$$$($context$$432$$) {
  this.Init($context$$432$$)
};
(0,D.$goog$exportSymbol$$)("DvtAbstractPanZoomComponent", D.$DvtAbstractPanZoomComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractPanZoomComponent$$, D.$DvtAbstractComponent$$, "DvtAbstractPanZoomComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAbstractPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$433$$) {
  D.$DvtAbstractPanZoomComponent$$.$superclass$.Init.call(this, $context$$433$$);
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
D.$JSCompiler_prototypeAlias$$.$CreatePanZoomCanvas$ = function $$JSCompiler_prototypeAlias$$$$CreatePanZoomCanvas$$($ww$$50$$, $hh$$46$$) {
  var $JSCompiler_temp_const$$495_pzc$$1$$ = this.$_context$, $JSCompiler_temp_const$$494$$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), $JSCompiler_inline_result$$496$$;
  a: {
    switch(this.$_controlPanelBehavior$) {
      case "initCollapsed":
        $JSCompiler_inline_result$$496$$ = 0;
        break a;
      case "initExpanded":
        $JSCompiler_inline_result$$496$$ = 1;
        break a;
      default:
        $JSCompiler_inline_result$$496$$ = 2
    }
  }
  $JSCompiler_temp_const$$495_pzc$$1$$ = new D.$DvtPanZoomCanvas$$($JSCompiler_temp_const$$495_pzc$$1$$, $JSCompiler_temp_const$$494$$, $ww$$50$$, $hh$$46$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_inline_result$$496$$, this.$Bundle$, this.$_displayedControls$, this);
  $JSCompiler_temp_const$$495_pzc$$1$$.$addEvtListener$("dvtPan", this.$HandlePanEvent$, D.$JSCompiler_alias_FALSE$$, this);
  $JSCompiler_temp_const$$495_pzc$$1$$.$addEvtListener$("dvtZoom", this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addChildAt$($JSCompiler_temp_const$$495_pzc$$1$$, 1);
  return $JSCompiler_temp_const$$495_pzc$$1$$
};
D.$JSCompiler_prototypeAlias$$.$HandleControlPanelEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_getPanZoomCanvas$$ = function $$JSCompiler_StaticMethods_getPanZoomCanvas$$$($JSCompiler_StaticMethods_getPanZoomCanvas$self$$) {
  return $JSCompiler_StaticMethods_getPanZoomCanvas$self$$.$_panZoomCanvas$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAbstractPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$11$$, $dy$$14$$, $animator$$14$$) {
  this.$_panZoomCanvas$.$panBy$($dx$$11$$, $dy$$14$$, $animator$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$panTo$ = function $$JSCompiler_prototypeAlias$$$$panTo$$($xx$$41$$, $yy$$40$$, $animator$$15$$) {
  this.$_panZoomCanvas$.$panTo$($xx$$41$$, $yy$$40$$, $animator$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$3$$, $xx$$42$$, $yy$$41$$, $animator$$16$$) {
  this.$_panZoomCanvas$.$zoomBy$($dz$$3$$, $xx$$42$$, $yy$$41$$, $animator$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$zoomTo$ = function $$JSCompiler_prototypeAlias$$$$zoomTo$$($zz$$, $xx$$43$$, $yy$$42$$, $animator$$17$$) {
  this.$_panZoomCanvas$.$zoomTo$($zz$$, $xx$$43$$, $yy$$42$$, $animator$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$zoomToFit$ = function $$JSCompiler_prototypeAlias$$$$zoomToFit$$($animator$$18$$) {
  this.$_panZoomCanvas$.$zoomToFit$($animator$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = (0,D.$JSCompiler_set$$)("$_featuresOff$");
D.$JSCompiler_prototypeAlias$$.$isChangeLayoutOff$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$isMouseWheelHandled$ = function $$JSCompiler_prototypeAlias$$$$isMouseWheelHandled$$() {
  return this.$_panZoomCanvas$.$_bZoomingEnabled$ && 0 == (this.$_featuresOff$ & 2)
};
D.$DvtAbstractPanZoomComponent$$.prototype.isMouseWheelHandled = D.$DvtAbstractPanZoomComponent$$.prototype.$isMouseWheelHandled$;
D.$DvtAbstractPanZoomComponent$$.prototype.$SetClipRect$ = function $$DvtAbstractPanZoomComponent$$$$$SetClipRect$$($ww$$51$$, $hh$$47$$) {
  var $clipPath$$5$$ = new D.$DvtClipPath$$("comp");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$5$$, this.$getTranslateX$(), this.$getTranslateY$(), $ww$$51$$, $hh$$47$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$5$$)
};
D.$DvtPanZoomCanvas$$ = function $$DvtPanZoomCanvas$$$($context$$434$$, $buttonImages$$6$$, $ww$$52$$, $hh$$48$$, $id$$168$$, $controlPanelState$$, $controlPanelResources$$, $displayedControls$$1$$, $view$$13$$) {
  this.Init($context$$434$$, $buttonImages$$6$$, $ww$$52$$, $hh$$48$$, $id$$168$$, $controlPanelState$$, $controlPanelResources$$, $displayedControls$$1$$, $view$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvas$$, D.$DvtContainer$$, "DvtPanZoomCanvas");
D.$DvtPanZoomCanvas$$.prototype.Init = function $$DvtPanZoomCanvas$$$$Init$($context$$435$$, $buttonImages$$7$$, $ww$$53$$, $hh$$49$$, $id$$169$$, $controlPanelState$$1$$, $controlPanelResources$$1$$, $displayedControls$$2$$, $view$$14$$) {
  D.$DvtPanZoomCanvas$$.$superclass$.Init.call(this, $context$$435$$, D.$JSCompiler_alias_NULL$$, $id$$169$$);
  this.$_view$ = $view$$14$$;
  this.$_ww$ = $ww$$53$$;
  this.$_hh$ = $hh$$49$$;
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
  this.$_eventManager$ = new D.$DvtPanZoomCanvasEventManager$$($context$$435$$, this.$FireListener$, this);
  this.$_eventManager$.$addListeners$(this);
  this.$_clipIdSuffix$ = 1;
  this.$SetClipRect$($ww$$53$$, $hh$$49$$);
  this.$_bElasticConstraints$ = D.$JSCompiler_alias_FALSE$$;
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtPanZoomCanvas$$.prototype.$setSize$ = function $$DvtPanZoomCanvas$$$$$setSize$$($ww$$54$$, $hh$$50$$, $bAdjustSizeOnly$$) {
  this.$_ww$ = $ww$$54$$;
  this.$_hh$ = $hh$$50$$;
  $bAdjustSizeOnly$$ || (this.$_backgroundPane$.$setWidth$($ww$$54$$), this.$_backgroundPane$.$setHeight$($hh$$50$$), this.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), this.$SetClipRect$($ww$$54$$, $hh$$50$$))
};
D.$DvtPanZoomCanvas$$.prototype.$getSize$ = function $$DvtPanZoomCanvas$$$$$getSize$$() {
  return new D.$DvtDimension$$(this.$_ww$, this.$_hh$)
};
D.$DvtPanZoomCanvas$$.prototype.$SetClipRect$ = function $$DvtPanZoomCanvas$$$$$SetClipRect$$($ww$$55$$, $hh$$51$$) {
  var $clipPath$$6$$ = new D.$DvtClipPath$$("pzc");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$6$$, this.$getTranslateX$(), this.$getTranslateY$(), $ww$$55$$, $hh$$51$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$6$$)
};
D.$JSCompiler_StaticMethods_getContentPane$$ = function $$JSCompiler_StaticMethods_getContentPane$$$($JSCompiler_StaticMethods_getContentPane$self$$) {
  return $JSCompiler_StaticMethods_getContentPane$self$$.$_contentPane$
};
D.$JSCompiler_StaticMethods_getContentPaneMatrix$$ = function $$JSCompiler_StaticMethods_getContentPaneMatrix$$$($JSCompiler_StaticMethods_getContentPaneMatrix$self$$, $animator$$19$$) {
  if($animator$$19$$) {
    var $mat$$32$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$19$$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$);
    if($mat$$32$$) {
      return $mat$$32$$
    }
  }
  return $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvas$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getZoom$ = function $$JSCompiler_prototypeAlias$$$$getZoom$$($animator$$20$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$20$$).$_a$
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$12_mat$$33$$, $deltaX$$5_dy$$15_fireStartEventFunc$$, $animator$$23$$) {
  if(this.$_bPanningEnabled$) {
    var $oldX$$4$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$23$$).$_tx$, $oldY$$4$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$23$$).$_ty$, $newX$$5$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $oldX$$4$$ + $dx$$12_mat$$33$$), $newY$$5$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $oldY$$4$$ + $deltaX$$5_dy$$15_fireStartEventFunc$$);
    $deltaX$$5_dy$$15_fireStartEventFunc$$ = $newX$$5$$ - $oldX$$4$$;
    var $deltaY$$5_fireEndEventFunc$$ = $newY$$5$$ - $oldY$$4$$;
    $dx$$12_mat$$33$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$23$$ && ($dx$$12_mat$$33$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$23$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($dx$$12_mat$$33$$ = $dx$$12_mat$$33$$.clone());
    $dx$$12_mat$$33$$ || ($dx$$12_mat$$33$$ = this.$_contentPane$.$getMatrix$().clone());
    $dx$$12_mat$$33$$.translate($deltaX$$5_dy$$15_fireStartEventFunc$$, $deltaY$$5_fireEndEventFunc$$);
    var $thisRef$$12$$ = this;
    $deltaX$$5_dy$$15_fireStartEventFunc$$ = function $$deltaX$$5_dy$$15_fireStartEventFunc$$$() {
      var $dx$$12_mat$$33$$ = new D.$DvtPanEvent$$("panning", $newX$$5$$, $newY$$5$$, $oldX$$4$$, $oldY$$4$$, $animator$$23$$);
      $thisRef$$12$$.$FireListener$($dx$$12_mat$$33$$)
    };
    $deltaY$$5_fireEndEventFunc$$ = function $$deltaY$$5_fireEndEventFunc$$$() {
      var $dx$$12_mat$$33$$ = new D.$DvtPanEvent$$("panned", $newX$$5$$, $newY$$5$$, $oldX$$4$$, $oldY$$4$$, $animator$$23$$);
      $thisRef$$12$$.$FireListener$($dx$$12_mat$$33$$)
    };
    $animator$$23$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$23$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $dx$$12_mat$$33$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$23$$, $deltaX$$5_dy$$15_fireStartEventFunc$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$23$$, $deltaY$$5_fireEndEventFunc$$)) : ($deltaX$$5_dy$$15_fireStartEventFunc$$(), this.$_contentPane$.$setMatrix$($dx$$12_mat$$33$$), $deltaY$$5_fireEndEventFunc$$())
  }
};
D.$JSCompiler_prototypeAlias$$.$panTo$ = function $$JSCompiler_prototypeAlias$$$$panTo$$($dx$$13_xx$$44$$, $dy$$16_yy$$43$$, $animator$$24$$) {
  this.$_bPanningEnabled$ && ($dx$$13_xx$$44$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$24$$).$_tx$, $dy$$16_yy$$43$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$24$$).$_ty$, this.$panBy$($dx$$13_xx$$44$$, $dy$$16_yy$$43$$, $animator$$24$$))
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($currZoom$$inline_3671_dz$$4_mat$$34$$, $xx$$45$$, $yy$$44$$, $animator$$25$$) {
  if(this.$_bZoomingEnabled$) {
    !$xx$$45$$ && 0 !== $xx$$45$$ && ($xx$$45$$ = this.$_ww$ / 2);
    !$yy$$44$$ && 0 !== $yy$$44$$ && ($yy$$44$$ = this.$_hh$ / 2);
    var $oldZoom$$1$$ = this.$getZoom$($animator$$25$$), $newZoom$$5$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $oldZoom$$1$$ * $currZoom$$inline_3671_dz$$4_mat$$34$$);
    this.$_controlPanel$ && ($currZoom$$inline_3671_dz$$4_mat$$34$$ = this.$getZoom$(), $newZoom$$5$$ == this.$_minZoom$ && $newZoom$$5$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : $currZoom$$inline_3671_dz$$4_mat$$34$$ <= $newZoom$$5$$ && $newZoom$$5$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)) : $currZoom$$inline_3671_dz$$4_mat$$34$$ >= $newZoom$$5$$ && $newZoom$$5$$ == this.$_minZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)));
    if(window.Math.round(1E5 * $oldZoom$$1$$) != window.Math.round(1E5 * $newZoom$$5$$)) {
      var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$5$$ / $oldZoom$$1$$;
      $currZoom$$inline_3671_dz$$4_mat$$34$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$25$$ && ($currZoom$$inline_3671_dz$$4_mat$$34$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$25$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($currZoom$$inline_3671_dz$$4_mat$$34$$ = $currZoom$$inline_3671_dz$$4_mat$$34$$.clone());
      $currZoom$$inline_3671_dz$$4_mat$$34$$ || ($currZoom$$inline_3671_dz$$4_mat$$34$$ = this.$_contentPane$.$getMatrix$().clone());
      $currZoom$$inline_3671_dz$$4_mat$$34$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $xx$$45$$, $yy$$44$$);
      var $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_3671_dz$$4_mat$$34$$.$_tx$) - $currZoom$$inline_3671_dz$$4_mat$$34$$.$_tx$, $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_3671_dz$$4_mat$$34$$.$_ty$) - $currZoom$$inline_3671_dz$$4_mat$$34$$.$_ty$;
      (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "adjustPanConstraints", $newZoom$$5$$, $oldZoom$$1$$, $animator$$25$$, D.$JSCompiler_alias_NULL$$, $xx$$45$$, $yy$$44$$, $xDiff$$, $yDiff$$);
      $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_3671_dz$$4_mat$$34$$.$_tx$) - $currZoom$$inline_3671_dz$$4_mat$$34$$.$_tx$;
      $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_3671_dz$$4_mat$$34$$.$_ty$) - $currZoom$$inline_3671_dz$$4_mat$$34$$.$_ty$;
      $currZoom$$inline_3671_dz$$4_mat$$34$$.translate($xDiff$$, $yDiff$$);
      var $thisRef$$13$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$13$$, "zooming", $newZoom$$5$$, $oldZoom$$1$$, $animator$$25$$, D.$JSCompiler_alias_NULL$$, $xx$$45$$, $yy$$44$$, $xDiff$$, $yDiff$$)
      }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$13$$, "zoomed", $thisRef$$13$$.$getZoom$(), $oldZoom$$1$$, $animator$$25$$, D.$JSCompiler_alias_NULL$$, $xx$$45$$, $yy$$44$$, $xDiff$$, $yDiff$$)
      };
      $animator$$25$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$25$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $currZoom$$inline_3671_dz$$4_mat$$34$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$25$$, $deltaZoom_fireStartEventFunc$$1$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$25$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($currZoom$$inline_3671_dz$$4_mat$$34$$), 
      $fireEndEventFunc$$1$$())
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$zoomTo$ = function $$JSCompiler_prototypeAlias$$$$zoomTo$$($dz$$5_zz$$1$$, $xx$$46$$, $yy$$45$$, $animator$$26$$) {
  this.$_bZoomingEnabled$ && ($dz$$5_zz$$1$$ /= this.$getZoom$($animator$$26$$), this.$zoomBy$($dz$$5_zz$$1$$, $xx$$46$$, $yy$$45$$, $animator$$26$$))
};
D.$JSCompiler_prototypeAlias$$.$center$ = function $$JSCompiler_prototypeAlias$$$$center$$($animator$$27$$, $fitBounds$$) {
  var $panningEnabled$$ = this.$_bPanningEnabled$;
  this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  var $bounds$$55_cyBounds$$ = $fitBounds$$;
  $bounds$$55_cyBounds$$ || ($bounds$$55_cyBounds$$ = this.$_contentPane$.$getDimensions$());
  var $cxBounds$$ = ($bounds$$55_cyBounds$$.x + $bounds$$55_cyBounds$$.$w$ / 2) * this.$getZoom$(), $bounds$$55_cyBounds$$ = ($bounds$$55_cyBounds$$.y + $bounds$$55_cyBounds$$.$h$ / 2) * this.$getZoom$();
  this.$panTo$(this.$_ww$ / 2 - $cxBounds$$, this.$_hh$ / 2 - $bounds$$55_cyBounds$$, $animator$$27$$);
  this.$_bPanningEnabled$ = $panningEnabled$$
};
D.$JSCompiler_prototypeAlias$$.$zoomToFit$ = function $$JSCompiler_prototypeAlias$$$$zoomToFit$$($animator$$28$$, $fitBounds$$1$$) {
  if(this.$_bZoomToFitEnabled$) {
    var $panningEnabled$$1$$ = this.$_bPanningEnabled$, $zoomingEnabled$$ = this.$_bZoomingEnabled$;
    this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
    try {
      var $bounds$$56$$ = $fitBounds$$1$$;
      $bounds$$56$$ || ($bounds$$56$$ = this.$_contentPane$.$getDimensions$());
      var $bounds$$56$$ = (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomToFitCalcBounds", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$28$$, $bounds$$56$$).$_zoomToFitBounds$, $dz$$6$$ = window.Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $bounds$$56$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $bounds$$56$$.$h$), $dz$$6$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $dz$$6$$), $dx$$15$$ = this.$_ww$ / 2 - ($bounds$$56$$.x + $bounds$$56$$.$w$ / 
      2) * $dz$$6$$, $dy$$18$$ = this.$_hh$ / 2 - ($bounds$$56$$.y + $bounds$$56$$.$h$ / 2) * $dz$$6$$, $thisRef$$14$$ = this, $fireStartEventFunc$$2$$ = function $$fireStartEventFunc$$2$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$14$$, "zoomToFitBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$28$$, $bounds$$56$$)
      }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$14$$, "zoomToFitEnd", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$28$$, $bounds$$56$$)
      };
      $animator$$28$$ ? (0,D.$DvtPlayable$prependOnInit$$)($animator$$28$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
      this.$zoomTo$($dz$$6$$, 0, 0, $animator$$28$$);
      this.$panTo$($dx$$15$$, $dy$$18$$, $animator$$28$$);
      $animator$$28$$ ? (0,D.$DvtPlayable$appendOnEnd$$)($animator$$28$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
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
    var $currX$$12_panEvent$$inline_3698$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$15$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_ty$, $currZoom$$5$$ = $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getZoom$();
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ = $currX$$12_panEvent$$inline_3698$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currX$$12_panEvent$$inline_3698$$) || $currY$$15$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currY$$15$$);
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ = $currZoom$$5$$ != (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currZoom$$5$$);
    if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ || $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$) {
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_context$, 0.4), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$setEasing$(D.$DvtEasing$cubicOut$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$zoomBy$(1, 0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_ww$, 
      0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_hh$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$panBy$(0, 0, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), (0,D.$DvtPlayable$appendOnEnd$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnimOnEnd$, 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && ($currX$$12_panEvent$$inline_3698$$ = new D.$DvtPanEvent$$("elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$FireListener$($currX$$12_panEvent$$inline_3698$$)), 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, "elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.play()
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$DvtPanZoomCanvas$$$$$_elasticConstraintsAnimOnEnd$$() {
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_bElasticPan$) {
    var $panEvent$$inline_3707$$ = new D.$DvtPanEvent$$("elasticAnimEnd", D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$);
    this.$FireListener$($panEvent$$inline_3707$$)
  }
  this.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "elasticAnimEnd")
};
D.$JSCompiler_StaticMethods_ConstrainPanX$$ = function $$JSCompiler_StaticMethods_ConstrainPanX$$$($JSCompiler_StaticMethods_ConstrainPanX$self$$, $xx$$47$$) {
  var $dx$$16_offsetX$$4$$ = $xx$$47$$;
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$16_offsetX$$4$$ < $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - $dx$$16_offsetX$$4$$, $dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$16_offsetX$$4$$)) : $dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$);
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$16_offsetX$$4$$ > $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$16_offsetX$$4$$ -= $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$, $dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$16_offsetX$$4$$)) : $dx$$16_offsetX$$4$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$);
  return $dx$$16_offsetX$$4$$
};
D.$JSCompiler_StaticMethods_ConstrainPanY$$ = function $$JSCompiler_StaticMethods_ConstrainPanY$$$($JSCompiler_StaticMethods_ConstrainPanY$self$$, $yy$$46$$) {
  var $dy$$19_offsetY$$3$$ = $yy$$46$$;
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
  2 != this.$_controlPanelState$ && !this.$_controlPanel$ && (this.$_controlPanel$ = new D.$DvtControlPanel$$(this.$_context$, this, this.$_buttonImages$, this.$_controlPanelResources$, this.$_displayedControls$, this.$_view$), this.$addChild$(this.$_controlPanel$), 0 == this.$_controlPanelState$ ? this.$_controlPanel$.$setState$(1) : 1 == this.$_controlPanelState$ && this.$_controlPanel$.$setState$(2), (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), this.$_controlPanel$.$renderComponent$())
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
D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$ = function $$JSCompiler_StaticMethods_GetRelativeMousePosition$$$($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$, $event$$317$$) {
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$.$_context$, $event$$317$$.pageX, $event$$317$$.pageY)
};
D.$JSCompiler_StaticMethods_FireZoomEvent$$ = function $$JSCompiler_StaticMethods_FireZoomEvent$$$($JSCompiler_StaticMethods_FireZoomEvent$self$$, $subType$$5_zoomEvent$$, $newZoom$$6$$, $oldZoom$$2$$, $animator$$30$$, $zoomToFitBounds$$1$$, $xx$$48$$, $yy$$47$$, $tx$$10$$, $ty$$10$$) {
  $subType$$5_zoomEvent$$ = new D.$DvtZoomEvent$$($subType$$5_zoomEvent$$, $newZoom$$6$$, $oldZoom$$2$$, $animator$$30$$, $zoomToFitBounds$$1$$, new D.$DvtPoint$$($xx$$48$$, $yy$$47$$), $tx$$10$$, $ty$$10$$);
  $JSCompiler_StaticMethods_FireZoomEvent$self$$.$FireListener$($subType$$5_zoomEvent$$);
  return $subType$$5_zoomEvent$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomAndCenter$ = function $$DvtPanZoomCanvas$$$$$zoomAndCenter$$() {
  (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomAndCenter")
};
D.$JSCompiler_StaticMethods_getNextZoomLevel$$ = function $$JSCompiler_StaticMethods_getNextZoomLevel$$$($JSCompiler_StaticMethods_getNextZoomLevel$self$$, $currZoom$$6$$) {
  var $zoomLevel$$1$$;
  $zoomLevel$$1$$ = $currZoom$$6$$ + $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$1$$ > $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$ && ($zoomLevel$$1$$ = $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$);
  return $zoomLevel$$1$$
};
D.$JSCompiler_StaticMethods_getPrevZoomLevel$$ = function $$JSCompiler_StaticMethods_getPrevZoomLevel$$$($JSCompiler_StaticMethods_getPrevZoomLevel$self$$, $currZoom$$7$$) {
  var $zoomLevel$$2$$;
  $zoomLevel$$2$$ = $currZoom$$7$$ - $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_zoomIncrement$;
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
D.$DvtPanZoomCanvasEventManager$$ = function $$DvtPanZoomCanvasEventManager$$$($context$$438$$, $callback$$88$$, $callbackObj$$61$$) {
  this.Init($context$$438$$, $callback$$88$$, $callbackObj$$61$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasEventManager$$, D.$DvtEventManager$$, "DvtPanZoomCanvasEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvasEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$439$$, $callback$$89$$, $callbackObj$$62$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.Init.call(this, $context$$439$$, $callback$$89$$, $callbackObj$$62$$);
  this.$_pzc$ = $callbackObj$$62$$;
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZooming$ = this.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMomentumPanning$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$44$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$44$$);
  D.$DvtAgent$$.$isPlatformGecko$() ? $displayable$$44$$.$addEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$44$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$319_pos$$22$$) {
  2 != $event$$319_pos$$22$$.button && ($event$$319_pos$$22$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$319_pos$$22$$), this.$_mx$ = $event$$319_pos$$22$$.x, this.$_my$ = $event$$319_pos$$22$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = D.$JSCompiler_alias_TRUE$$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$320_zz$$3$$) {
  if(this.$_bDown$) {
    var $pos$$23_yy$$49$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$320_zz$$3$$), $xx$$50$$ = $pos$$23_yy$$49$$.x, $pos$$23_yy$$49$$ = $pos$$23_yy$$49$$.y;
    $event$$320_zz$$3$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$)), $event$$320_zz$$3$$ = this.$_origZoom$ * window.Math.pow(1 + 0.01 * (this.$_py$ >= $pos$$23_yy$$49$$ ? 
    1 : -1), window.Math.abs(this.$_py$ - $pos$$23_yy$$49$$)), this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($event$$320_zz$$3$$, this.$_px$, this.$_py$) : this.$_callbackObj$.$zoomTo$($event$$320_zz$$3$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$50$$, $pos$$23_yy$$49$$);
    this.$_mx$ = $xx$$50$$;
    this.$_my$ = $pos$$23_yy$$49$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$() {
  this.$_bDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this);
  this.$_bZooming$ && (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$322$$) {
  if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
    (!$event$$322$$.relatedTarget || $event$$322$$.relatedTarget == D.$JSCompiler_alias_NULL$$) && this.$OnMouseUp$($event$$322$$)
  }
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$322$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$323$$) {
  var $currZoom$$9_oldZoomAnim_zz$$4$$ = this.$_callbackObj$.$getZoom$();
  this.$_zoomAnimator$ && ($currZoom$$9_oldZoomAnim_zz$$4$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $currZoom$$9_oldZoomAnim_zz$$4$$ = this.$_callbackObj$.$getZoom$($currZoom$$9_oldZoomAnim_zz$$4$$), this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$);
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  var $delta$$13_pos$$24$$ = 0;
  $event$$323$$.wheelDelta != D.$JSCompiler_alias_NULL$$ && ($delta$$13_pos$$24$$ = $event$$323$$.wheelDelta, D.$DvtAgent$$.$isPlatformGecko$() && ($delta$$13_pos$$24$$ = -$delta$$13_pos$$24$$));
  $currZoom$$9_oldZoomAnim_zz$$4$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $delta$$13_pos$$24$$ / window.Math.abs($delta$$13_pos$$24$$);
  $delta$$13_pos$$24$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$323$$);
  this.$_context$.$getDocumentUtils$().$cancelDomEvent$($event$$323$$);
  this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($currZoom$$9_oldZoomAnim_zz$$4$$, $delta$$13_pos$$24$$.x, $delta$$13_pos$$24$$.y, this.$_zoomAnimator$) : this.$_callbackObj$.$zoomTo$($currZoom$$9_oldZoomAnim_zz$$4$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
  this.$_zoomAnimator$ && ((0,D.$DvtPlayable$appendOnEnd$$)(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
};
D.$JSCompiler_prototypeAlias$$.$_clearZoomAnimator$ = function $$JSCompiler_prototypeAlias$$$$_clearZoomAnimator$$() {
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_handleMomentumStartTimer$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_handleMomentumTimer$ = function $$JSCompiler_prototypeAlias$$$$_handleMomentumTimer$$() {
  var $dy$$20_ratio$$7$$ = 1 - 0.04 * this.$_momentumIterCount$, $dy$$20_ratio$$7$$ = $dy$$20_ratio$$7$$ * $dy$$20_ratio$$7$$, $interval$$4_newX$$7$$ = this.$_momentumTimer$.$getInterval$(), $dx$$17$$ = $dy$$20_ratio$$7$$ * this.$_momentumXperMS$ * $interval$$4_newX$$7$$, $dy$$20_ratio$$7$$ = $dy$$20_ratio$$7$$ * this.$_momentumYperMS$ * $interval$$4_newX$$7$$;
  this.$_momentumDx$ += $dx$$17$$;
  this.$_momentumDy$ += $dy$$20_ratio$$7$$;
  var $interval$$4_newX$$7$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $newY$$7$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
  this.$_callbackObj$.$panTo$($interval$$4_newX$$7$$, $newY$$7$$);
  var $bStop$$ = D.$JSCompiler_alias_FALSE$$;
  if(24 <= this.$_momentumIterCount$) {
    $bStop$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    var $currX$$13$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$16$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$;
    if(window.Math.abs($currX$$13$$ - $interval$$4_newX$$7$$) > window.Math.abs($dx$$17$$) || window.Math.abs($currY$$16$$ - $newY$$7$$) > window.Math.abs($dy$$20_ratio$$7$$)) {
      $bStop$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $bStop$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$324$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$324$$, this.$ZoomStartTouch$, this);
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$324$$, this.$PanStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$325$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$325$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$325$$, "panTouch");
  $event$$325$$ && $event$$325$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$326$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$326$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$326$$, "panTouch")
};
D.$JSCompiler_prototypeAlias$$.$ZoomStartTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomStartTouch$$($event$$327$$, $touch$$40$$) {
  var $targets$$inline_3765_touchIds$$9$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  1 >= $targets$$inline_3765_touchIds$$9$$.length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$40$$.identifier, "zoomTouch", D.$JSCompiler_alias_NULL$$, "zoomTouch", "zoomTouch", this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $touch$$40$$.pageX, this.$_my$ = $touch$$40$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, 
  this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = D.$JSCompiler_alias_NULL$$, $targets$$inline_3765_touchIds$$9$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_3765_touchIds$$9$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_3765_touchIds$$9$$), 
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_3765_touchIds$$9$$);
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$ZoomMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomMoveTouch$$() {
  var $targets$$inline_3780_touchIds$$10$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  if(2 == $targets$$inline_3780_touchIds$$10$$.length) {
    var $data$$34_touch1Data$$inline_3769$$;
    var $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$ = this.$TouchManager$;
    if(2 == $targets$$inline_3780_touchIds$$10$$.length) {
      if($data$$34_touch1Data$$inline_3769$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.$_touchMap$[$targets$$inline_3780_touchIds$$10$$[0]], $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.$_touchMap$[$targets$$inline_3780_touchIds$$10$$[1]], $data$$34_touch1Data$$inline_3769$$ == D.$JSCompiler_alias_NULL$$ || 
      $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$ == D.$JSCompiler_alias_NULL$$ || 0 == $data$$34_touch1Data$$inline_3769$$.$dx$ && 0 == $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.$dy$) {
        $data$$34_touch1Data$$inline_3769$$ = D.$JSCompiler_alias_NULL$$
      }else {
        var $cp$$5_dist$$inline_3773_dx$$inline_3771$$ = $data$$34_touch1Data$$inline_3769$$.pageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.pageX, $dy$$inline_3772_prevdx$$inline_3774$$ = $data$$34_touch1Data$$inline_3769$$.pageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.pageY, $cp$$5_dist$$inline_3773_dx$$inline_3771$$ = window.Math.sqrt($cp$$5_dist$$inline_3773_dx$$inline_3771$$ * $cp$$5_dist$$inline_3773_dx$$inline_3771$$ + 
        $dy$$inline_3772_prevdx$$inline_3774$$ * $dy$$inline_3772_prevdx$$inline_3774$$), $dy$$inline_3772_prevdx$$inline_3774$$ = $data$$34_touch1Data$$inline_3769$$.$prevPageX$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.$prevPageX$, $prevdy$$inline_3775$$ = $data$$34_touch1Data$$inline_3769$$.$prevPageY$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.$prevPageY$, $cx$$inline_3776$$ = ($data$$34_touch1Data$$inline_3769$$.pageX + 
        $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.pageX) / 2, $cy$$inline_3777$$ = ($data$$34_touch1Data$$inline_3769$$.pageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.pageY) / 2;
        $data$$34_touch1Data$$inline_3769$$ = {$dz$:$cp$$5_dist$$inline_3773_dx$$inline_3771$$ - window.Math.sqrt($dy$$inline_3772_prevdx$$inline_3774$$ * $dy$$inline_3772_prevdx$$inline_3774$$ + $prevdy$$inline_3775$$ * $prevdy$$inline_3775$$), $cx$:$cx$$inline_3776$$, $cy$:$cy$$inline_3777$$, $dcx$:$cx$$inline_3776$$ - ($data$$34_touch1Data$$inline_3769$$.$prevPageX$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.$prevPageX$) / 2, $dcy$:$cy$$inline_3777$$ - 
        ($data$$34_touch1Data$$inline_3769$$.$prevPageY$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$.$prevPageY$) / 2, $dist$:$cp$$5_dist$$inline_3773_dx$$inline_3771$$}
      }
    }else {
      $data$$34_touch1Data$$inline_3769$$ = D.$JSCompiler_alias_NULL$$
    }
    $data$$34_touch1Data$$inline_3769$$ && (this.$_bZooming$ || (this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$)), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), this.$_origDist$ == D.$JSCompiler_alias_NULL$$ && 
    (this.$_origDist$ = $data$$34_touch1Data$$inline_3769$$.$dist$ - $data$$34_touch1Data$$inline_3769$$.$dz$), $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$ = this.$_origZoom$ * ($data$$34_touch1Data$$inline_3769$$.$dist$ / this.$_origDist$), $cp$$5_dist$$inline_3773_dx$$inline_3771$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_pzc$.$_context$, $data$$34_touch1Data$$inline_3769$$.$cx$, $data$$34_touch1Data$$inline_3769$$.$cy$), this.$hideTooltip$(), 
    $targets$$inline_3780_touchIds$$10$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_3780_touchIds$$10$$), this.$_callbackObj$.$_currTargets$ = $targets$$inline_3780_touchIds$$10$$, this.$_callbackObj$.$zoomTo$($JSCompiler_StaticMethods_getMultiTouchData$self$$inline_3767_touch2Data$$inline_3770_zz$$5$$, $cp$$5_dist$$inline_3773_dx$$inline_3771$$.x, $cp$$5_dist$$inline_3773_dx$$inline_3771$$.y), this.$_callbackObj$.$panBy$($data$$34_touch1Data$$inline_3769$$.$dcx$, 
    $data$$34_touch1Data$$inline_3769$$.$dcy$))
  }
};
D.$JSCompiler_prototypeAlias$$.$ZoomEndTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomEndTouch$$() {
  this.$_bZooming$ && (this.$_origDist$ = D.$JSCompiler_alias_NULL$$, this.$TouchManager$.$_blockTouchHold$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this));
  var $touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_3785$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $touchIds$$11$$);
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_3785$$;
  0 == $touchIds$$11$$.length && this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("zoomEnd"))
};
D.$JSCompiler_prototypeAlias$$.$PanStartTouch$ = function $$JSCompiler_prototypeAlias$$$$PanStartTouch$$($event$$330$$, $touch$$43$$) {
  !this.$_bZooming$ && 1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$43$$.identifier, "panTouch", D.$JSCompiler_alias_NULL$$, "panTouch", "panTouch", this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $touch$$43$$.pageX, this.$_my$ = $touch$$43$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$PanMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$PanMoveTouch$$($event$$331$$, $touch$$44$$) {
  if(!this.$_bZooming$ && 1 == (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length) {
    var $xx$$51$$ = $touch$$44$$.pageX, $yy$$50$$ = $touch$$44$$.pageY;
    (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$51$$, $yy$$50$$);
    this.$_mx$ = $xx$$51$$;
    this.$_my$ = $yy$$50$$
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
D.$JSCompiler_StaticMethods__handlePanMove$$ = function $$JSCompiler_StaticMethods__handlePanMove$$$($JSCompiler_StaticMethods__handlePanMove$self$$, $xx$$52$$, $yy$$51$$) {
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ || ($JSCompiler_StaticMethods__handlePanMove$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanBegin")), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$), 
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$ = []));
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$.$panTo$($JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanX$ + $xx$$52$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_px$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanY$ + $yy$$51$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_py$);
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$ = $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ = (new window.Date).getTime(), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ ? ($JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.$isRunning$() && $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.stop(), 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.reset()) : $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanMove$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanMove$self$$.$_handleMomentumStartTimer$, $JSCompiler_StaticMethods__handlePanMove$self$$, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.push({$dt$:$JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ - 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$, $dx$:$xx$$52$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_mx$, $dy$:$yy$$51$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_my$}), 5 < $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.length && $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.splice(0, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.start())
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
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanZoomCanvasKeyboardHandler$$$$$processKeyDown$$($controlPanel$$3_event$$318$$) {
  var $keyCode$$14$$ = $controlPanel$$3_event$$318$$.keyCode, $canvas$$4$$ = this.$_component$.$_panZoomCanvas$;
  if(33 == $keyCode$$14$$) {
    $controlPanel$$3_event$$318$$.ctrlKey || $controlPanel$$3_event$$318$$.shiftKey ? $canvas$$4$$.$panBy$($canvas$$4$$.$_panIncrement$, 0) : $canvas$$4$$.$panBy$(0, $canvas$$4$$.$_panIncrement$)
  }else {
    if(34 == $keyCode$$14$$) {
      $controlPanel$$3_event$$318$$.ctrlKey || $controlPanel$$3_event$$318$$.shiftKey ? $canvas$$4$$.$panBy$(-$canvas$$4$$.$_panIncrement$, 0) : $canvas$$4$$.$panBy$(0, -$canvas$$4$$.$_panIncrement$)
    }else {
      if(191 == $keyCode$$14$$) {
        ($controlPanel$$3_event$$318$$ = $canvas$$4$$.$_controlPanel$) && $controlPanel$$3_event$$318$$.$toggleExpandCollapse$()
      }else {
        var $JSCompiler_temp$$394_keyCode$$inline_3710_keyCode$$inline_3713$$ = $controlPanel$$3_event$$318$$.keyCode;
        if((D.$DvtAgent$$.$isPlatformGecko$() ? 61 == $JSCompiler_temp$$394_keyCode$$inline_3710_keyCode$$inline_3713$$ && !$controlPanel$$3_event$$318$$.shiftKey : 187 == $JSCompiler_temp$$394_keyCode$$inline_3710_keyCode$$inline_3713$$ && !$controlPanel$$3_event$$318$$.shiftKey) || (0,D.$DvtKeyboardEvent$isPlus$$)($controlPanel$$3_event$$318$$)) {
          $canvas$$4$$.$zoomTo$($canvas$$4$$.$getZoom$() + $canvas$$4$$.$_zoomIncrement$)
        }else {
          if(!($JSCompiler_temp$$394_keyCode$$inline_3710_keyCode$$inline_3713$$ = (0,D.$DvtKeyboardEvent$isMinus$$)($controlPanel$$3_event$$318$$))) {
            $JSCompiler_temp$$394_keyCode$$inline_3710_keyCode$$inline_3713$$ = $controlPanel$$3_event$$318$$.keyCode, $JSCompiler_temp$$394_keyCode$$inline_3710_keyCode$$inline_3713$$ = D.$DvtAgent$$.$isPlatformGecko$() ? 173 == $JSCompiler_temp$$394_keyCode$$inline_3710_keyCode$$inline_3713$$ && $controlPanel$$3_event$$318$$.shiftKey ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : 189 == $JSCompiler_temp$$394_keyCode$$inline_3710_keyCode$$inline_3713$$ && $controlPanel$$3_event$$318$$.shiftKey ? 
            D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
          }
          if($JSCompiler_temp$$394_keyCode$$inline_3710_keyCode$$inline_3713$$) {
            $canvas$$4$$.$zoomTo$($canvas$$4$$.$getZoom$() - $canvas$$4$$.$_zoomIncrement$)
          }else {
            if((48 == $keyCode$$14$$ || 96 == $keyCode$$14$$) && !$controlPanel$$3_event$$318$$.ctrlKey && !$controlPanel$$3_event$$318$$.shiftKey) {
              $canvas$$4$$.$zoomToFit$()
            }else {
              return D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $controlPanel$$3_event$$318$$)
            }
          }
        }
      }
    }
  }
};
D.$DvtCollapsiblePanel$$ = function $$DvtCollapsiblePanel$$$($context$$62$$, $maxWidth$$3$$, $maxHeight$$3$$, $collapseDir$$, $buttonImages$$2$$, $styleMap$$18$$, $disclosed$$6$$, $isFixed$$1$$) {
  this.Init($context$$62$$, $maxWidth$$3$$, $maxHeight$$3$$, $collapseDir$$, $buttonImages$$2$$, $styleMap$$18$$, $disclosed$$6$$, $isFixed$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanel$$, D.$DvtContainer$$, "DvtCollapsiblePanel");
D.$DvtCollapsiblePanel$$.prototype.Init = function $$DvtCollapsiblePanel$$$$Init$($context$$63$$, $maxWidth$$4$$, $maxHeight$$4$$, $collapseDir$$1$$, $buttonImages$$3$$, $styleMap$$19$$, $disclosed$$7$$, $isFixed$$2$$) {
  D.$DvtCollapsiblePanel$$.$superclass$.Init.call(this, $context$$63$$);
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
  this.$_scrollableContainer$ = new D.$DvtScrollableContainer$$($context$$63$$, 0, 0, $maxWidth$$4$$ - 10, $maxHeight$$4$$ - 10, 3, "collapsiblePanel");
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
D.$JSCompiler_StaticMethods__getOutlinePath$$ = function $$JSCompiler_StaticMethods__getOutlinePath$$$($JSCompiler_StaticMethods__getOutlinePath$self$$, $width$$21$$, $height$$20$$) {
  var $r$$11$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_borderRadius$, $cmds$$2$$, $west$$4$$ = "col_northwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$;
  25 >= $height$$20$$ && ($height$$20$$ = 25);
  $cmds$$2$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$ ? window.DvtPathUtils.moveTo($r$$11$$, 0) : window.DvtPathUtils.moveTo(0, 0);
  $cmds$$2$$ += window.DvtPathUtils.lineTo($width$$21$$ - $r$$11$$, 0);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && $west$$4$$ ? ($cmds$$2$$ += window.DvtPathUtils.lineTo($width$$21$$, 0), $cmds$$2$$ += window.DvtPathUtils.lineTo($width$$21$$, $r$$11$$)) : $cmds$$2$$ += window.DvtPathUtils.$quadTo$($width$$21$$, 0, $width$$21$$, $r$$11$$);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$20$$ && $west$$4$$ ? $cmds$$2$$ += window.DvtPathUtils.lineTo($width$$21$$, $height$$20$$) : ($cmds$$2$$ += window.DvtPathUtils.lineTo($width$$21$$, $height$$20$$ - $r$$11$$), $cmds$$2$$ += window.DvtPathUtils.$quadTo$($width$$21$$, $height$$20$$, $width$$21$$ - $r$$11$$, $height$$20$$));
  $cmds$$2$$ += window.DvtPathUtils.lineTo($r$$11$$, $height$$20$$);
  $cmds$$2$$ = !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$20$$ && !$west$$4$$ ? $cmds$$2$$ + window.DvtPathUtils.lineTo(0, $height$$20$$) : $cmds$$2$$ + window.DvtPathUtils.$quadTo$(0, $height$$20$$, 0, $height$$20$$ - $r$$11$$);
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
  var $alpha$$4_stroke$$2$$ = this.$_styleMap$[D.$DvtControlPanel$$.$BG_ROLLOUT_ALPHA$], $fill$$2$$ = this.$_background$.$getFill$().clone();
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
  var $tooltip$$5$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
  $tooltip$$5$$ != D.$JSCompiler_alias_NULL$$ && this.$_context$.$getTooltipManager$().$showTooltip$($evt$$22$$.pageX, $evt$$22$$.pageY, $tooltip$$5$$, this.$_collapseExpandButton$, D.$JSCompiler_alias_TRUE$$)
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
D.$DvtImageLAFUtils$$.$loadIcon$ = function $$DvtImageLAFUtils$$$$loadIcon$$($context$$96$$, $uri$$17$$) {
  var $image$$7$$ = new D.$DvtImage$$($context$$96$$, $uri$$17$$);
  $image$$7$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$96$$, $uri$$17$$, function($context$$96$$) {
    $context$$96$$ != D.$JSCompiler_alias_NULL$$ && ($context$$96$$.width && $context$$96$$.height) && ($image$$7$$.$setWidth$($context$$96$$.width), $image$$7$$.$setHeight$($context$$96$$.height))
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
D.$DvtButtonLAFUtils$$.$_UP$ = "Up";
D.$DvtButtonLAFUtils$$.$_OVER$ = "Over";
D.$DvtButtonLAFUtils$$.$_DOWN$ = "Down";
D.$DvtButtonLAFUtils$$.$_SEL$ = "Sel";
D.$DvtButtonLAFUtils$$.$_R2L$ = "_r";
D.$DvtButtonLAFUtils$$.$_SYNC$ = "synchronize";
D.$DvtButtonLAFUtils$$.$createPanControl$ = function $$DvtButtonLAFUtils$$$$createPanControl$$($context$$64$$, $panZoomCanvas$$10$$, $resources$$12$$, $controls$$3$$, $imageURIs$$, $styleMap$$20$$) {
  var $panButton$$2_panUpState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$64$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_PAN_ENA$], $styleMap$$20$$), $panDownState$$ = new D.$DvtContainer$$($context$$64$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panDownState$$, 20, 20);
  var $downImage_panOverState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$64$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_PAN_DWN$], $styleMap$$20$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, -20, -20);
  $panDownState$$.$addChild$($downImage_panOverState$$);
  $downImage_panOverState$$ = new D.$DvtContainer$$($context$$64$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, 20, 20);
  var $overImage$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$64$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_PAN_OVR$], $styleMap$$20$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($overImage$$, -20, -20);
  $downImage_panOverState$$.$addChild$($overImage$$);
  $panButton$$2_panUpState$$ = new D.$DvtButton$$($context$$64$$, $panButton$$2_panUpState$$, $downImage_panOverState$$, $panDownState$$);
  if(0 < ($controls$$3$$ & 16)) {
    var $recenterButton$$2$$ = new D.$DvtButton$$($context$$64$$, D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$64$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$], $styleMap$$20$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$64$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$], $styleMap$$20$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$64$$, $imageURIs$$[D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$], $styleMap$$20$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($recenterButton$$2$$, 9, 9)
  }
  return new D.$DvtPanControl$$($context$$64$$, $panButton$$2_panUpState$$, $recenterButton$$2$$, $panZoomCanvas$$10$$, $resources$$12$$, $controls$$3$$, $styleMap$$20$$)
};
D.$DvtButtonLAFUtils$$.$createDrillUpButton$ = function $$DvtButtonLAFUtils$$$$createDrillUpButton$$($context$$65$$, $mapCallback$$, $panZoomCanvas$$11$$, $resources$$13$$, $dis_imageURIs$$1$$, $eventManager$$7$$, $styleMap$$21$$) {
  var $ena$$2$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$65$$, 0, $dis_imageURIs$$1$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$21$$), $ovr$$2$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$65$$, 1, $dis_imageURIs$$1$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$], $styleMap$$21$$), $dwn$$2$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$65$$, 2, $dis_imageURIs$$1$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$], $styleMap$$21$$);
  $dis_imageURIs$$1$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$65$$, 0, $dis_imageURIs$$1$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$21$$);
  return new D.$DvtMapControlButton$$($context$$65$$, new D.$DvtButton$$($context$$65$$, $ena$$2$$, $ovr$$2$$, $dwn$$2$$, $dis_imageURIs$$1$$), $mapCallback$$, $panZoomCanvas$$11$$, 0, $resources$$13$$, $eventManager$$7$$)
};
D.$DvtButtonLAFUtils$$.$createDrillDownButton$ = function $$DvtButtonLAFUtils$$$$createDrillDownButton$$($context$$66$$, $mapCallback$$1$$, $panZoomCanvas$$12$$, $resources$$14$$, $dis$$1_imageURIs$$2$$, $eventManager$$8$$, $styleMap$$22$$) {
  var $ena$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$66$$, 0, $dis$$1_imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$22$$), $ovr$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$66$$, 1, $dis$$1_imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$], $styleMap$$22$$), $dwn$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$66$$, 2, $dis$$1_imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$], $styleMap$$22$$);
  $dis$$1_imageURIs$$2$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$66$$, 0, $dis$$1_imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$22$$);
  return new D.$DvtMapControlButton$$($context$$66$$, new D.$DvtButton$$($context$$66$$, $ena$$3$$, $ovr$$3$$, $dwn$$3$$, $dis$$1_imageURIs$$2$$), $mapCallback$$1$$, $panZoomCanvas$$12$$, 1, $resources$$14$$, $eventManager$$8$$)
};
D.$DvtButtonLAFUtils$$.$createResetButton$ = function $$DvtButtonLAFUtils$$$$createResetButton$$($context$$67$$, $mapCallback$$2$$, $panZoomCanvas$$13$$, $resources$$15$$, $dis$$2_imageURIs$$3$$, $eventManager$$9$$, $styleMap$$23$$) {
  var $ena$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$67$$, 0, $dis$$2_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$23$$), $ovr$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$67$$, 1, $dis$$2_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RESET_OVR$], $styleMap$$23$$), $dwn$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$67$$, 2, $dis$$2_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RESET_DWN$], $styleMap$$23$$);
  $dis$$2_imageURIs$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$67$$, 0, $dis$$2_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$23$$);
  return new D.$DvtMapControlButton$$($context$$67$$, new D.$DvtButton$$($context$$67$$, $ena$$4$$, $ovr$$4$$, $dwn$$4$$, $dis$$2_imageURIs$$3$$), $mapCallback$$2$$, $panZoomCanvas$$13$$, 2, $resources$$15$$, $eventManager$$9$$)
};
D.$DvtButtonLAFUtils$$.$createZoomToFitButton$ = function $$DvtButtonLAFUtils$$$$createZoomToFitButton$$($context$$68$$, $panZoomCanvas$$14$$, $resources$$16$$, $eventManager$$10$$, $dwn$$5_imageURIs$$4$$, $styleMap$$24$$) {
  var $ena$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 0, $dwn$$5_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$], $styleMap$$24$$), $ovr$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 1, $dwn$$5_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$], $styleMap$$24$$);
  $dwn$$5_imageURIs$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$68$$, 2, $dwn$$5_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$], $styleMap$$24$$);
  return new D.$DvtZoomToFitButton$$($context$$68$$, new D.$DvtButton$$($context$$68$$, $ena$$5$$, $ovr$$5$$, $dwn$$5_imageURIs$$4$$), $panZoomCanvas$$14$$, $resources$$16$$, $eventManager$$10$$)
};
D.$DvtButtonLAFUtils$$.$createZoomInButton$ = function $$DvtButtonLAFUtils$$$$createZoomInButton$$($context$$69$$, $panZoomCanvas$$15$$, $resources$$17$$, $eventManager$$11$$, $dis$$3_imageURIs$$5$$, $styleMap$$25$$) {
  var $ena$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 0, $dis$$3_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$], $styleMap$$25$$), $ovr$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 1, $dis$$3_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$], $styleMap$$25$$), $dwn$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 2, $dis$$3_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$], $styleMap$$25$$);
  $dis$$3_imageURIs$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$69$$, 3, $dis$$3_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$], $styleMap$$25$$);
  return new D.$DvtZoomInButton$$($context$$69$$, new D.$DvtButton$$($context$$69$$, $ena$$6$$, $ovr$$6$$, $dwn$$6$$, $dis$$3_imageURIs$$5$$), $panZoomCanvas$$15$$, $resources$$17$$, $eventManager$$11$$)
};
D.$DvtButtonLAFUtils$$.$createZoomOutButton$ = function $$DvtButtonLAFUtils$$$$createZoomOutButton$$($context$$70$$, $panZoomCanvas$$16$$, $resources$$18$$, $eventManager$$12$$, $dis$$4_imageURIs$$6$$, $styleMap$$26$$) {
  var $ena$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 0, $dis$$4_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$], $styleMap$$26$$), $ovr$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 1, $dis$$4_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$], $styleMap$$26$$), $dwn$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 2, $dis$$4_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$], $styleMap$$26$$);
  $dis$$4_imageURIs$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$70$$, 3, $dis$$4_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$], $styleMap$$26$$);
  return new D.$DvtZoomOutButton$$($context$$70$$, new D.$DvtButton$$($context$$70$$, $ena$$7$$, $ovr$$7$$, $dwn$$7$$, $dis$$4_imageURIs$$6$$), $panZoomCanvas$$16$$, $resources$$18$$, $eventManager$$12$$)
};
D.$DvtButtonLAFUtils$$.$createLayoutItemButtonState$ = function $$DvtButtonLAFUtils$$$$createLayoutItemButtonState$$($context$$71_image$$2$$, $attrb_bname$$, $state$$1$$, $images$$4$$, $styleMap$$27$$) {
  var $r$$12$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$27$$, "buttonRadius", 0), $w$$10$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$27$$, "buttonWidth", 0), $h$$10$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$27$$, "buttonWidth", 0), $shape$$4$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$71_image$$2$$, $r$$12$$, $w$$10$$, $h$$10$$, $styleMap$$27$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$1$$, $shape$$4$$, $w$$10$$, $h$$10$$ + 2 * $r$$12$$, $styleMap$$27$$, D.$JSCompiler_alias_TRUE$$);
  $attrb_bname$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$71_image$$2$$, $state$$1$$, $attrb_bname$$);
  ($context$$71_image$$2$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$71_image$$2$$, $images$$4$$[$attrb_bname$$], $w$$10$$, $h$$10$$)) && $shape$$4$$.$addChild$($context$$71_image$$2$$);
  return $shape$$4$$
};
D.$DvtButtonLAFUtils$$.$_getLayoutURI$ = function $$DvtButtonLAFUtils$$$$_getLayoutURI$$($context$$72$$, $state$$2$$, $attrb$$1_bname$$1$$, $bSel$$) {
  var $r2l$$ = "";
  0 == $state$$2$$ ? $state$$2$$ = D.$DvtButtonLAFUtils$$.$_UP$ : 1 == $state$$2$$ ? $state$$2$$ = D.$DvtButtonLAFUtils$$.$_OVER$ : 2 == $state$$2$$ && ($state$$2$$ = D.$DvtButtonLAFUtils$$.$_DOWN$);
  $bSel$$ && ($attrb$$1_bname$$1$$ += D.$DvtButtonLAFUtils$$.$_SEL$, D.$DvtAgent$$.$isRightToLeft$($context$$72$$) && ($r2l$$ = D.$DvtButtonLAFUtils$$.$_R2L$));
  return $attrb$$1_bname$$1$$ + ($state$$2$$ + $r2l$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardButtonState$ = function $$DvtButtonLAFUtils$$$$createPanelCardButtonState$$($context$$73$$, $state$$3$$, $styleMap$$28$$, $images$$5$$) {
  var $attrb$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$73$$, $state$$3$$, D.$DvtButtonLAFUtils$$.$_SYNC$, D.$JSCompiler_alias_TRUE$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$73$$, $state$$3$$, $images$$5$$[$attrb$$2$$], $styleMap$$28$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardSyncItemState$ = function $$DvtButtonLAFUtils$$$$createPanelCardSyncItemState$$($base$$1_context$$74$$, $state$$4$$, $ww$$8$$, $hh$$9$$, $styleMap$$29$$) {
  var $r$$13$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$29$$, "buttonRadius", 0);
  $base$$1_context$$74$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($base$$1_context$$74$$, $r$$13$$, $ww$$8$$, $hh$$9$$, $styleMap$$29$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$4$$, $base$$1_context$$74$$, $ww$$8$$, $hh$$9$$ + 2 * $r$$13$$, $styleMap$$29$$, D.$JSCompiler_alias_TRUE$$);
  return $base$$1_context$$74$$
};
D.$DvtButtonLAFUtils$$.$createControlButtonState$ = function $$DvtButtonLAFUtils$$$$createControlButtonState$$($context$$75$$, $attrb$$3_bname$$2$$, $state$$5$$, $images$$7$$, $styleMap$$30$$) {
  $attrb$$3_bname$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$75$$, $state$$5$$, $attrb$$3_bname$$2$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$75$$, $state$$5$$, $images$$7$$[$attrb$$3_bname$$2$$], $styleMap$$30$$)
};
D.$DvtButtonLAFUtils$$.$createExpandButton$ = function $$DvtButtonLAFUtils$$$$createExpandButton$$($context$$76$$, $dwn$$8_imageURIs$$7$$, $h$$11$$, $styleMap$$31$$, $bR2L$$3$$) {
  var $ena$$8$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$76$$, 0, $h$$11$$, $dwn$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$], $styleMap$$31$$, $bR2L$$3$$), $ovr$$8$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$76$$, 1, $h$$11$$, $dwn$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$], $styleMap$$31$$, $bR2L$$3$$);
  $dwn$$8_imageURIs$$7$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$76$$, 2, $h$$11$$, $dwn$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$], $styleMap$$31$$, $bR2L$$3$$);
  return new D.$DvtButton$$($context$$76$$, $ena$$8$$, $ovr$$8$$, $dwn$$8_imageURIs$$7$$)
};
D.$DvtButtonLAFUtils$$.$createCollapseButton$ = function $$DvtButtonLAFUtils$$$$createCollapseButton$$($context$$77$$, $dwn$$9_imageURIs$$8$$, $h$$12$$, $styleMap$$32$$, $bR2L$$4$$) {
  var $ena$$9$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$77$$, 0, $h$$12$$, $dwn$$9_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$], $styleMap$$32$$, $bR2L$$4$$), $ovr$$9$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$77$$, 1, $h$$12$$, $dwn$$9_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$], $styleMap$$32$$, $bR2L$$4$$);
  $dwn$$9_imageURIs$$8$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$77$$, 2, $h$$12$$, $dwn$$9_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$], $styleMap$$32$$, $bR2L$$4$$);
  return new D.$DvtButton$$($context$$77$$, $ena$$9$$, $ovr$$9$$, $dwn$$9_imageURIs$$8$$)
};
D.$DvtButtonLAFUtils$$.$createQuickQueryButton$ = function $$DvtButtonLAFUtils$$$$createQuickQueryButton$$($context$$78$$, $imageURIs$$9$$) {
  var $ena$$10$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$78$$, $imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$]), $ovr$$10$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$78$$, $imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$]), $dwn$$10$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$78$$, $imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$]);
  return new D.$DvtButton$$($context$$78$$, $ena$$10$$, $ovr$$10$$, $dwn$$10$$)
};
D.$DvtButtonLAFUtils$$.$createClearResultsButton$ = function $$DvtButtonLAFUtils$$$$createClearResultsButton$$($context$$79$$, $imageURIs$$10$$) {
  var $ena$$11$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$79$$, $imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$]), $ovr$$11$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$79$$, $imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$]), $dwn$$11$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$79$$, $imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$]);
  return new D.$DvtButton$$($context$$79$$, $ena$$11$$, $ovr$$11$$, $dwn$$11$$)
};
D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$ = function $$DvtButtonLAFUtils$$$$_createButtonBaseImage$$($context$$80_image$$3$$, $base$$2_state$$6$$, $uri$$11$$, $styleMap$$33$$) {
  var $w$$11$$, $h$$13$$, $r$$14$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$33$$, "buttonRadius", 0);
  if("undefined" === $w$$11$$ || $w$$11$$ == D.$JSCompiler_alias_NULL$$) {
    $w$$11$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$33$$, "buttonWidth", 0)
  }
  if("undefined" === $h$$13$$ || $h$$13$$ == D.$JSCompiler_alias_NULL$$) {
    $h$$13$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$33$$, "buttonWidth", 0)
  }
  $base$$2_state$$6$$ = D.$DvtButtonLAFUtils$$.$_drawBaseButton$($context$$80_image$$3$$, $base$$2_state$$6$$, $r$$14$$, $w$$11$$, $h$$13$$, $styleMap$$33$$);
  ($context$$80_image$$3$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$80_image$$3$$, $uri$$11$$, $w$$11$$, $h$$13$$)) && $base$$2_state$$6$$.$addChild$($context$$80_image$$3$$);
  return $base$$2_state$$6$$
};
D.$DvtButtonLAFUtils$$.$_loadIcon$ = function $$DvtButtonLAFUtils$$$$_loadIcon$$($context$$81$$, $uri$$12$$, $buttonWidth$$5$$, $buttonHeight$$2$$) {
  var $image$$4$$ = new D.$DvtImage$$($context$$81$$, $uri$$12$$);
  $image$$4$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$81$$, $uri$$12$$, function($context$$81$$) {
    $context$$81$$ != D.$JSCompiler_alias_NULL$$ && ($context$$81$$.width && $context$$81$$.height) && ($image$$4$$.$setWidth$($context$$81$$.width), $image$$4$$.$setHeight$($context$$81$$.height), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($image$$4$$, $buttonWidth$$5$$ / 2 - $context$$81$$.width / 2, $buttonHeight$$2$$ / 2 - $context$$81$$.height / 2))
  });
  return $image$$4$$
};
D.$DvtButtonLAFUtils$$.$_createPanButtonState$ = function $$DvtButtonLAFUtils$$$$_createPanButtonState$$($context$$82_image$$5$$, $uri$$13$$, $styleMap$$34$$) {
  var $mc$$5$$ = new D.$DvtContainer$$($context$$82_image$$5$$), $hitZone$$ = new D.$DvtCircle$$($context$$82_image$$5$$, 20, 20, 20);
  $hitZone$$.$setAlpha$(0);
  $hitZone$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$34$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $mc$$5$$.$addChild$($hitZone$$);
  ($context$$82_image$$5$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$82_image$$5$$, $uri$$13$$)) && $mc$$5$$.$addChild$($context$$82_image$$5$$);
  return $mc$$5$$
};
D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$ = function $$DvtButtonLAFUtils$$$$_createRecenterButtonState$$($context$$83_image$$6$$, $uri$$14$$, $styleMap$$35$$) {
  var $shape$$7$$ = new D.$DvtContainer$$($context$$83_image$$6$$), $hitZone$$1$$ = new D.$DvtCircle$$($context$$83_image$$6$$, 11, 11, 8);
  $hitZone$$1$$.$setAlpha$(0);
  $hitZone$$1$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$35$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $shape$$7$$.$addChild$($hitZone$$1$$);
  ($context$$83_image$$6$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$83_image$$6$$, $uri$$14$$)) && $shape$$7$$.$addChild$($context$$83_image$$6$$);
  return $shape$$7$$
};
D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$ = function $$DvtButtonLAFUtils$$$$_createCollapseExpandButtonState$$($context$$84_iconLoader$$, $sprite_state$$7$$, $nh$$5$$, $imageW_uri$$15$$, $styleMap$$36$$, $bR2L$$5_imageH$$) {
  $nh$$5$$ || ($nh$$5$$ = 47);
  $sprite_state$$7$$ = D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$($context$$84_iconLoader$$, $sprite_state$$7$$, $nh$$5$$, $styleMap$$36$$, $bR2L$$5_imageH$$);
  if($context$$84_iconLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$84_iconLoader$$, $imageW_uri$$15$$)) {
    $imageW_uri$$15$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$36$$, "imageWidth", 0), $bR2L$$5_imageH$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$36$$, "imageHeight", 0), $sprite_state$$7$$.$addChild$($context$$84_iconLoader$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$84_iconLoader$$, ((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$36$$, "openCloseButtonWidth", 0) - $imageW_uri$$15$$) / 2, ($nh$$5$$ - $bR2L$$5_imageH$$) / 2)
  }
  return $sprite_state$$7$$
};
D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$ = function $$DvtButtonLAFUtils$$$$_createQuickQueryButtonState$$($context$$85$$, $uri$$16$$) {
  var $iconLoader$$1$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$85$$, $uri$$16$$);
  $iconLoader$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  return $iconLoader$$1$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonBackground$ = function $$DvtButtonLAFUtils$$$$createPanButtonBackground$$($context$$86$$, $styleMap$$37$$) {
  var $shape$$8$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$86$$), $bgColor$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "background-color", D.$JSCompiler_alias_NULL$$), $borderColor$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "border-color", D.$JSCompiler_alias_NULL$$);
  "solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$37$$, "fill-type", D.$JSCompiler_alias_NULL$$) ? ($shape$$8$$.$setSolidStroke$($borderColor$$1$$), $shape$$8$$.$setSolidFill$($bgColor$$1$$)) : ($shape$$8$$.$setStroke$(new D.$DvtLinearGradientStroke$$(36, ["#8D93A5", "#E0EAEB", $borderColor$$1$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $shape$$8$$.$setFill$(new D.$DvtLinearGradientFill$$(90, [$bgColor$$1$$, $bgColor$$1$$, "#5A83BE", $bgColor$$1$$], [0.9, 0.1, 0, 0.7], [0, 105 / 
  255, 150 / 255, 1], [0, 0, 40, 40])));
  return $shape$$8$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$ = function $$DvtButtonLAFUtils$$$$createPanButtonUnderlay$$($context$$87$$, $styleMap$$38$$) {
  var $shape$$9$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$87$$), $color$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$38$$, "background-color", D.$JSCompiler_alias_NULL$$);
  $shape$$9$$.$setSolidStroke$($color$$8$$);
  $shape$$9$$.$setSolidFill$($color$$8$$);
  return $shape$$9$$
};
D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$ = function $$DvtButtonLAFUtils$$$$_drawPanButtonBase$$($context$$88$$) {
  var $cmds$$3$$ = window.DvtPathUtils.moveTo(40, 20) + window.DvtPathUtils.$quadTo$(40, 20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20, 40) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(0, 
  20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20) + window.DvtPathUtils.$quadTo$(0, 20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20, 0) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(40, 
  20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20) + window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$88$$, $cmds$$3$$, "draw_pan_button")
};
D.$DvtButtonLAFUtils$$.$_setGradientBorder$ = function $$DvtButtonLAFUtils$$$$_setGradientBorder$$($shape$$10$$, $ww$$11$$, $hh$$12$$, $xx$$8$$, $yy$$8$$) {
  $shape$$10$$.$setSolidStroke$("#FFFFFF");
  $shape$$10$$.$setStroke$(new D.$DvtLinearGradientStroke$$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [$xx$$8$$, $yy$$8$$, $ww$$11$$, $hh$$12$$], 1))
};
D.$DvtButtonLAFUtils$$.$_setButtonColors$ = function $$DvtButtonLAFUtils$$$$_setButtonColors$$($state$$9$$, $shape$$11$$, $ww$$12$$, $hh$$13$$, $styleMap$$39$$, $isDropdownItem$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$39$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    !$isDropdownItem$$ || $isDropdownItem$$ && 0 == $state$$9$$ ? (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$11$$) : (1 == $state$$9$$ || 2 == $state$$9$$) && $shape$$11$$.$setFill$(new D.$DvtSolidFill$$("#EBECED"))
  }else {
    if("skyros" == $styleMap$$39$$.skin) {
      switch($state$$9$$) {
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
      switch($state$$9$$) {
        case 3:
        ;
        case 0:
          $fill_colors$$1$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
          $fill_alphas$$1$$ = [0.01, 0, 0.05, 0.01];
          $fill_ratios$$1$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 1:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$11$$, $ww$$12$$, $hh$$13$$, 0, 0);
          $fill_colors$$1$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
          $fill_alphas$$1$$ = [0.5, 0.2, 0.1, 0.7];
          $fill_ratios$$1$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$11$$, $ww$$12$$, $hh$$13$$, 0, 0), $fill_colors$$1$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$1$$ = [0.1, 0.3, 0.6], $fill_ratios$$1$$ = [0, 130 / 255, 1]
      }
      $shape$$11$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$1$$, $fill_alphas$$1$$, $fill_ratios$$1$$, [0, 0, $ww$$12$$, $hh$$13$$]))
    }
  }
};
D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$ = function $$DvtButtonLAFUtils$$$$_setCloseButtonColors$$($fill$$5_state$$10$$, $shape$$12$$, $bgColor$$2_ww$$13$$, $hh$$14$$, $styleMap$$40$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$12$$)
  }else {
    var $borderColor$$2_stroke$$5$$;
    $borderColor$$2_stroke$$5$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "border-color", D.$JSCompiler_alias_NULL$$);
    if("solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "fill-type", D.$JSCompiler_alias_NULL$$)) {
      $bgColor$$2_ww$$13$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "background-color", D.$JSCompiler_alias_NULL$$);
      switch($fill$$5_state$$10$$) {
        case 0:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "backgroundAlpha", 1);
          window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "borderAlpha", 1);
          break;
        case 2:
        ;
        case 1:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "backgroundHoverAlpha", 1), window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$40$$, "borderHoverAlpha", 1)
      }
      $fill$$5_state$$10$$ = new D.$DvtSolidFill$$($bgColor$$2_ww$$13$$, window.bgAlpha);
      $borderColor$$2_stroke$$5$$ = new D.$DvtSolidStroke$$($borderColor$$2_stroke$$5$$, window.strokeAlpha)
    }else {
      var $fill_colors$$2$$, $fill_alphas$$2$$, $fill_ratios$$2$$;
      switch($fill$$5_state$$10$$) {
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
      $fill$$5_state$$10$$ = new D.$DvtLinearGradientFill$$(0, $fill_colors$$2$$, $fill_alphas$$2$$, $fill_ratios$$2$$, [0, 0, $bgColor$$2_ww$$13$$, $hh$$14$$]);
      $borderColor$$2_stroke$$5$$ = new D.$DvtSolidStroke$$($borderColor$$2_stroke$$5$$, 1, 0.8)
    }
    $shape$$12$$.$setStroke$($borderColor$$2_stroke$$5$$);
    $shape$$12$$.$setFill$($fill$$5_state$$10$$)
  }
};
D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$ = function $$DvtButtonLAFUtils$$$$_setSliderButtonColors$$($state$$11$$, $shape$$13$$, $ww$$14$$, $hh$$15$$, $xx$$11$$, $yy$$11$$) {
  var $fill_colors$$3$$, $fill_alphas$$3$$, $fill_ratios$$3$$;
  switch($state$$11$$) {
    case 0:
      $shape$$13$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
      $fill_colors$$3$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
      $fill_alphas$$3$$ = [0.6, 0.3, 0.3, 0.8];
      $fill_ratios$$3$$ = [0, 125 / 255, 130 / 255, 1];
      break;
    case 1:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$13$$, $ww$$14$$, $hh$$15$$, $xx$$11$$, $yy$$11$$);
      $fill_colors$$3$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      $fill_alphas$$3$$ = [0.4, 0.3, 0.7, 1];
      $fill_ratios$$3$$ = [0, 70 / 255, 200 / 255, 1];
      break;
    case 2:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$13$$, $ww$$14$$, $hh$$15$$, $xx$$11$$, $yy$$11$$), $fill_colors$$3$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$3$$ = [0.6, 0.5, 0.8], $fill_ratios$$3$$ = [0, 130 / 255, 1]
  }
  $shape$$13$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$3$$, $fill_alphas$$3$$, $fill_ratios$$3$$, [$xx$$11$$, $yy$$11$$, $ww$$14$$, $hh$$15$$]))
};
D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$ = function $$DvtButtonLAFUtils$$$$GetButtonPathCommands$$($buttonWidth$$7$$, $buttonHeight$$3$$, $r$$17$$, $bidi$$1$$) {
  return $bidi$$1$$ ? ["M", $buttonWidth$$7$$, 0, "L", $r$$17$$, 0, "A", $r$$17$$, $r$$17$$, 0, 0, 0, 0, $r$$17$$, "L", 0, $buttonHeight$$3$$ - $r$$17$$, "A", $r$$17$$, $r$$17$$, 0, 0, 0, $r$$17$$, $buttonHeight$$3$$, "L", $buttonWidth$$7$$, $buttonHeight$$3$$] : ["M", 0, 0, "L", $buttonWidth$$7$$ - $r$$17$$, 0, "A", $r$$17$$, $r$$17$$, 0, 0, 1, $buttonWidth$$7$$, $r$$17$$, "L", $buttonWidth$$7$$, $buttonHeight$$3$$ - $r$$17$$, "A", $r$$17$$, $r$$17$$, 0, 0, 1, $buttonWidth$$7$$ - $r$$17$$, $buttonHeight$$3$$, 
  "L", 0, $buttonHeight$$3$$]
};
D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$ = function $$DvtButtonLAFUtils$$$$_drawOpenCloseButtonHelper$$($context$$90_shape$$14$$, $state$$12$$, $buttonHeight$$4_nh$$6$$, $styleMap$$41$$, $bR2L$$6$$) {
  $buttonHeight$$4_nh$$6$$ || ($buttonHeight$$4_nh$$6$$ = 47);
  var $r$$18$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$41$$, "border-radius", 0)), $buttonWidth$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$41$$, "openCloseButtonWidth", 0);
  $buttonHeight$$4_nh$$6$$ = window.Math.max($buttonHeight$$4_nh$$6$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$41$$, "buttonHeight", $buttonHeight$$4_nh$$6$$));
  $context$$90_shape$$14$$ = new D.$DvtPath$$($context$$90_shape$$14$$, D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$8$$, $buttonHeight$$4_nh$$6$$, $r$$18$$, $bR2L$$6$$));
  D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$($state$$12$$, $context$$90_shape$$14$$, $buttonWidth$$8$$, $buttonHeight$$4_nh$$6$$, $styleMap$$41$$);
  return $context$$90_shape$$14$$
};
D.$DvtButtonLAFUtils$$.$_drawBaseButton$ = function $$DvtButtonLAFUtils$$$$_drawBaseButton$$($context$$91_shape$$15$$, $state$$13$$, $r$$19$$, $ww$$15$$, $hh$$16$$, $styleMap$$42$$) {
  $context$$91_shape$$15$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$91_shape$$15$$, $r$$19$$, $ww$$15$$, $hh$$16$$, $styleMap$$42$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$13$$, $context$$91_shape$$15$$, $ww$$15$$, $hh$$16$$ + 2 * $r$$19$$, $styleMap$$42$$);
  return $context$$91_shape$$15$$
};
D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$ = function $$DvtButtonLAFUtils$$$$_createBaseButtonShape$$($context$$92$$, $r$$20$$, $ww$$16$$, $hh$$17$$, $styleMap$$43_x$$67$$) {
  if("skyros" == $styleMap$$43_x$$67$$.skin) {
    return new D.$DvtRect$$($context$$92$$, 0, 0, $ww$$16$$, $hh$$17$$)
  }
  $ww$$16$$ -= 2 * $r$$20$$;
  $hh$$17$$ -= 2 * $r$$20$$;
  $styleMap$$43_x$$67$$ = $ww$$16$$ + $r$$20$$;
  var $y$$44$$ = $hh$$17$$ + $r$$20$$, $cmds$$4$$ = window.DvtPathUtils.moveTo($styleMap$$43_x$$67$$ + $r$$20$$, $y$$44$$) + window.DvtPathUtils.$quadTo$($r$$20$$ + $styleMap$$43_x$$67$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $y$$44$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $styleMap$$43_x$$67$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $y$$44$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $styleMap$$43_x$$67$$, $r$$20$$ + $y$$44$$, $styleMap$$43_x$$67$$, 
  $r$$20$$ + $y$$44$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$67$$, $y$$44$$ + $r$$20$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$67$$ - $ww$$16$$, $r$$20$$ + $y$$44$$);
  $styleMap$$43_x$$67$$ -= $ww$$16$$;
  $cmds$$4$$ += window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $styleMap$$43_x$$67$$, $r$$20$$ + $y$$44$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $styleMap$$43_x$$67$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $y$$44$$) + window.DvtPathUtils.$quadTo$(-$r$$20$$ + $styleMap$$43_x$$67$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $y$$44$$, -$r$$20$$ + $styleMap$$43_x$$67$$, $y$$44$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$67$$ - $r$$20$$, $y$$44$$) + 
  window.DvtPathUtils.lineTo($styleMap$$43_x$$67$$ - $r$$20$$, $y$$44$$ - $hh$$17$$);
  $y$$44$$ -= $hh$$17$$;
  $cmds$$4$$ += window.DvtPathUtils.$quadTo$(-$r$$20$$ + $styleMap$$43_x$$67$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $y$$44$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $styleMap$$43_x$$67$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $y$$44$$) + window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $styleMap$$43_x$$67$$, -$r$$20$$ + $y$$44$$, $styleMap$$43_x$$67$$, -$r$$20$$ + $y$$44$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$67$$, -$r$$20$$ + $y$$44$$) + 
  window.DvtPathUtils.lineTo($styleMap$$43_x$$67$$ + $ww$$16$$, -$r$$20$$ + $y$$44$$);
  $styleMap$$43_x$$67$$ += $ww$$16$$;
  $cmds$$4$$ += window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $styleMap$$43_x$$67$$, -$r$$20$$ + $y$$44$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $styleMap$$43_x$$67$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$20$$ + $y$$44$$) + window.DvtPathUtils.$quadTo$($r$$20$$ + $styleMap$$43_x$$67$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$20$$ + $y$$44$$, $r$$20$$ + $styleMap$$43_x$$67$$, $y$$44$$) + window.DvtPathUtils.lineTo($styleMap$$43_x$$67$$ + $r$$20$$, $y$$44$$ + 
  $hh$$17$$) + window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$92$$, $cmds$$4$$)
};
D.$DvtButtonLAFUtils$$.$drawDropdownShape$ = function $$DvtButtonLAFUtils$$$$drawDropdownShape$$($context$$93$$, $ww$$17$$, $hh$$18$$, $r$$21_styleMap$$44$$) {
  $r$$21_styleMap$$44$$ = (0,D.$DvtStyleUtils$getStyle$$)($r$$21_styleMap$$44$$, "radius", 0);
  $ww$$17$$ -= 2 * $r$$21_styleMap$$44$$;
  $hh$$18$$ -= $r$$21_styleMap$$44$$;
  var $x$$68$$ = $ww$$17$$ + $r$$21_styleMap$$44$$, $y$$45$$ = $hh$$18$$, $cmds$$5$$ = window.DvtPathUtils.moveTo($x$$68$$ + $r$$21_styleMap$$44$$, $y$$45$$) + window.DvtPathUtils.$quadTo$($r$$21_styleMap$$44$$ + $x$$68$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$21_styleMap$$44$$ + $y$$45$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$21_styleMap$$44$$ + $x$$68$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$21_styleMap$$44$$ + $y$$45$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$21_styleMap$$44$$ + 
  $x$$68$$, $r$$21_styleMap$$44$$ + $y$$45$$, $x$$68$$, $r$$21_styleMap$$44$$ + $y$$45$$) + window.DvtPathUtils.lineTo($x$$68$$, $r$$21_styleMap$$44$$ + $y$$45$$) + window.DvtPathUtils.lineTo($x$$68$$ - $ww$$17$$, $r$$21_styleMap$$44$$ + $y$$45$$), $x$$68$$ = $x$$68$$ - $ww$$17$$, $cmds$$5$$ = $cmds$$5$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$21_styleMap$$44$$ + $x$$68$$, $r$$21_styleMap$$44$$ + $y$$45$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$21_styleMap$$44$$ + 
  $x$$68$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$21_styleMap$$44$$ + $y$$45$$) + window.DvtPathUtils.$quadTo$(-$r$$21_styleMap$$44$$ + $x$$68$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$21_styleMap$$44$$ + $y$$45$$, -$r$$21_styleMap$$44$$ + $x$$68$$, $y$$45$$) + window.DvtPathUtils.lineTo(-$r$$21_styleMap$$44$$ + $x$$68$$, $y$$45$$) + window.DvtPathUtils.lineTo(-$r$$21_styleMap$$44$$ + $x$$68$$, $y$$45$$ - $hh$$18$$)), $y$$45$$ = $y$$45$$ - $hh$$18$$, $cmds$$5$$ = $cmds$$5$$ + (window.DvtPathUtils.lineTo($x$$68$$ + 
  $ww$$17$$ + $r$$21_styleMap$$44$$, $y$$45$$) + window.DvtPathUtils.lineTo($x$$68$$ + $ww$$17$$ + $r$$21_styleMap$$44$$, $y$$45$$ + $hh$$18$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$93$$, $cmds$$5$$)
};
D.$DvtButtonLAFUtils$$.$dropShadowFilter$ = function $$DvtButtonLAFUtils$$$$dropShadowFilter$$($context$$94$$, $t$$) {
  var $filter$$ = new window.DvtDropShadowFilter(7, 45, "#5A83BE", 0.9, 14, 14, 1, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), $filterArray$$ = [];
  $filterArray$$.push($filter$$);
  $t$$.filters = $filterArray$$
};
D.$DvtButtonLAFUtils$$.$_getDimForced$ = function $$DvtButtonLAFUtils$$$$_getDimForced$$($context$$95$$, $obj$$33$$) {
  $obj$$33$$ instanceof D.$DvtButton$$ && ($obj$$33$$ = $obj$$33$$.$getChildAt$(0));
  return(0,D.$DvtDisplayableUtils$_getDimForced$$)($context$$95$$, $obj$$33$$)
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
  this.$_isWordWrap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bundle$ = new D.$DvtUtilBundle$$
};
D.$JSCompiler_prototypeAlias$$.$__getBundle$ = (0,D.$JSCompiler_get$$)("$_bundle$");
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
      var $childNode_itemChildren$$inline_731_itemNode$$inline_728$$ = $childNodes_legendSectionNode$$[$i$$28$$], $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$;
      if("item" == $childNode_itemChildren$$inline_731_itemNode$$inline_728$$.getName()) {
        $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$ = $JSCompiler_StaticMethods__renderLegendSection$self$$;
        var $i$$inline_732_prop$$inline_729$$ = {};
        $i$$inline_732_prop$$inline_729$$.itemId = $childNode_itemChildren$$inline_731_itemNode$$inline_728$$.$getAttr$("itemId");
        $i$$inline_732_prop$$inline_729$$.attributeGroupId = $childNode_itemChildren$$inline_731_itemNode$$inline_728$$.$getAttr$("attributeGroupId");
        $i$$inline_732_prop$$inline_729$$.hideAttrs = $childNode_itemChildren$$inline_731_itemNode$$inline_728$$.$getAttr$("hideAttrs");
        $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$.$_context$, $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$, $i$$inline_732_prop$$inline_729$$, $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$.$_legendItemStyle$, 
        $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$.$_styleMap$);
        $childNode_itemChildren$$inline_731_itemNode$$inline_728$$ = $childNode_itemChildren$$inline_731_itemNode$$inline_728$$.$getChildNodes$();
        for($i$$inline_732_prop$$inline_729$$ = 0;$i$$inline_732_prop$$inline_729$$ < $childNode_itemChildren$$inline_731_itemNode$$inline_728$$.length;$i$$inline_732_prop$$inline_729$$++) {
          if("marker" == $childNode_itemChildren$$inline_731_itemNode$$inline_728$$[$i$$inline_732_prop$$inline_729$$].getName()) {
            var $legendRow$$inline_8767$$ = $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$, $markerNode$$inline_8768_opacity$$inline_8773$$ = $childNode_itemChildren$$inline_731_itemNode$$inline_728$$[$i$$inline_732_prop$$inline_729$$], $url$$inline_8769$$ = $markerNode$$inline_8768_opacity$$inline_8773$$.$getAttr$("url"), $shape$$inline_8770$$ = $markerNode$$inline_8768_opacity$$inline_8773$$.$getAttr$("shapeType"), $color$$inline_8771$$ = $markerNode$$inline_8768_opacity$$inline_8773$$.$getAttr$("color"), 
            $pattern$$inline_8772$$ = $markerNode$$inline_8768_opacity$$inline_8773$$.$getAttr$("pattern");
            ($markerNode$$inline_8768_opacity$$inline_8773$$ = $markerNode$$inline_8768_opacity$$inline_8773$$.$getAttr$("opacity")) && ($markerNode$$inline_8768_opacity$$inline_8773$$ = (0,window.parseFloat)($markerNode$$inline_8768_opacity$$inline_8773$$));
            $legendRow$$inline_8767$$.setMarker($url$$inline_8769$$, $shape$$inline_8770$$, $color$$inline_8771$$, $pattern$$inline_8772$$, $markerNode$$inline_8768_opacity$$inline_8773$$)
          }else {
            "text" == $childNode_itemChildren$$inline_731_itemNode$$inline_728$$[$i$$inline_732_prop$$inline_729$$].getName() && $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$.$setText$($childNode_itemChildren$$inline_731_itemNode$$inline_728$$[$i$$inline_732_prop$$inline_729$$].$getAttr$("value"))
          }
        }
      }else {
        "text" == $childNode_itemChildren$$inline_731_itemNode$$inline_728$$.getName() && ($JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$), 
        $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$.$setText$($childNode_itemChildren$$inline_731_itemNode$$inline_728$$.$getAttr$("value")))
      }
      $JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$ && ($JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$.$render$($section$$1_sectionTitle$$, $availSpace$$4$$, $isBiDi$$), $section$$1_sectionTitle$$.$addItem$($JSCompiler_StaticMethods__parseItem$self$$inline_727_legendListItem$$2_legendListItem$$inline_730$$))
    }
  }
  $parent$$4$$.$addChild$($section$$1_sectionTitle$$);
  $availSpace$$4$$.y = $availSpace$$4$$.y - $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap;
  return $section$$1_sectionTitle$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$ = function $$JSCompiler_StaticMethods__renderLegendSectionJSON$$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$, $parent$$5$$, $availSpace$$5$$, $isBiDi$$1$$) {
  var $section$$2$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$.label, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$);
  $section$$2$$.$render$($parent$$5$$, $availSpace$$5$$, $isBiDi$$1$$);
  var $legendItems$$1$$ = $legendSectionNode$$1_textItems$$.item, $itemNode$$inline_735_legendListItem$$3$$;
  if($legendItems$$1$$) {
    for(var $i$$29$$ = 0;$i$$29$$ < $legendItems$$1$$.length;$i$$29$$++) {
      var $JSCompiler_StaticMethods__parseItemJSON$self$$inline_734_legendListItem$$inline_737$$ = $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$;
      $itemNode$$inline_735_legendListItem$$3$$ = $legendItems$$1$$[$i$$29$$];
      var $prop$$inline_736_url$$inline_8777$$ = {};
      $prop$$inline_736_url$$inline_8777$$.itemId = $itemNode$$inline_735_legendListItem$$3$$.itemId;
      $prop$$inline_736_url$$inline_8777$$.attributeGroupId = $itemNode$$inline_735_legendListItem$$3$$.attributeGroupId;
      $prop$$inline_736_url$$inline_8777$$.hideAttrs = $itemNode$$inline_735_legendListItem$$3$$.hideAttrs;
      var $JSCompiler_StaticMethods__parseItemJSON$self$$inline_734_legendListItem$$inline_737$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItemJSON$self$$inline_734_legendListItem$$inline_737$$.$_context$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_734_legendListItem$$inline_737$$, $prop$$inline_736_url$$inline_8777$$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_734_legendListItem$$inline_737$$.$_legendItemStyle$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_734_legendListItem$$inline_737$$.$_styleMap$), 
      $markerNode$$inline_8776_opacity$$inline_8781$$ = $itemNode$$inline_735_legendListItem$$3$$.marker, $prop$$inline_736_url$$inline_8777$$ = $markerNode$$inline_8776_opacity$$inline_8781$$.url, $shape$$inline_8778$$ = $markerNode$$inline_8776_opacity$$inline_8781$$.shapeType, $color$$inline_8779$$ = $markerNode$$inline_8776_opacity$$inline_8781$$.color, $pattern$$inline_8780$$ = $markerNode$$inline_8776_opacity$$inline_8781$$.pattern;
      ($markerNode$$inline_8776_opacity$$inline_8781$$ = $markerNode$$inline_8776_opacity$$inline_8781$$.opacity) && ($markerNode$$inline_8776_opacity$$inline_8781$$ = (0,window.parseFloat)($markerNode$$inline_8776_opacity$$inline_8781$$));
      $JSCompiler_StaticMethods__parseItemJSON$self$$inline_734_legendListItem$$inline_737$$.setMarker($prop$$inline_736_url$$inline_8777$$, $shape$$inline_8778$$, $color$$inline_8779$$, $pattern$$inline_8780$$, $markerNode$$inline_8776_opacity$$inline_8781$$);
      $JSCompiler_StaticMethods__parseItemJSON$self$$inline_734_legendListItem$$inline_737$$.$setText$($itemNode$$inline_735_legendListItem$$3$$.text.value);
      if($itemNode$$inline_735_legendListItem$$3$$ = $JSCompiler_StaticMethods__parseItemJSON$self$$inline_734_legendListItem$$inline_737$$) {
        $itemNode$$inline_735_legendListItem$$3$$.$render$($section$$2$$, $availSpace$$5$$, $isBiDi$$1$$), $section$$2$$.$addItem$($itemNode$$inline_735_legendListItem$$3$$)
      }
    }
  }
  if($legendSectionNode$$1_textItems$$ = $legendSectionNode$$1_textItems$$.text) {
    for($i$$29$$ = 0;$i$$29$$ < $legendSectionNode$$1_textItems$$.length;$i$$29$$++) {
      $itemNode$$inline_735_legendListItem$$3$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$), $itemNode$$inline_735_legendListItem$$3$$.$setText$($legendSectionNode$$1_textItems$$[$i$$29$$].value), $itemNode$$inline_735_legendListItem$$3$$ && 
      ($itemNode$$inline_735_legendListItem$$3$$.$render$($section$$2$$, $availSpace$$5$$, $isBiDi$$1$$), $section$$2$$.$addItem$($itemNode$$inline_735_legendListItem$$3$$))
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
    var $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ = this.$_legendNode$.getElementsByTagName("style");
    if($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ && ($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$[0].$getChildNodes$())) {
      for(var $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = 0;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ < $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.length;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$++) {
        var $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$[$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$];
        "legend-title" == $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.getName() ? this.$_legendTitleStyle$ = $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.getTextContent() : "sectionGroup-title" == $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.getName() ? 
        this.$_sectionGroupTitleStyle$ = $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.getTextContent() : "section-title" == $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.getName() ? this.$_sectionTitleStyle$ = $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.getTextContent() : 
        "legend-item" == $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.getName() && (this.$_legendItemStyle$ = $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.getTextContent())
      }
    }
    if($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ = this.$_legendNode$.$getAttr$("noWrap")) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$
    }
    $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.$w$ - 
    $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.x, this.$_isBiDi$ && ($childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.$w$ - 
    $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$), 0 < $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ && (this.$_isBiDi$ && $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$setTextString$(this.$_title$), $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$setX$($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.x), 
    $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$setY$($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$, 
    $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.$h$, this.$_legendContent$), $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$getDimensions$()) && 
    0 < $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$h$))) {
      $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.y = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.y + $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$h$ + 
      this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ = this.$_legendNode$.$getChildNodes$()) {
      for($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = 0;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ < $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.length;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$++) {
        var $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$ = $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$[$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$];
        if("separatorDef" == $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$.getName() && ($childNode$$inline_747_separators$$inline_748_separators$$inline_760$$ = $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$.$getChildNodes$(), 0 < $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$.length && "separator" == $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$[0].getName())) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
      for($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = 0;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ < $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.length;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$++) {
        $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$ = $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$[$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$], $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.x = 
        this.$_isBiDi$ ? this.$_width$ : 0, "sectionGroup" == $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$.getName() ? (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$)(this, $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$, this.$_legendContent$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$, this.$_isBiDi$))) : "section" == $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$.getName() && 
        (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSection$$)(this, $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$, this.$_legendContent$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$, this.$_isBiDi$)))
      }
    }
  }else {
    this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
    this.$_title$ = this.$_legendJSON$.label;
    this.$_isDisclosed$ = "true" == this.$_legendJSON$.disclosed;
    if($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ = this.$_legendJSON$.style) {
      this.$_legendTitleStyle$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$["legend-title"], this.$_sectionGroupTitleStyle$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$["sectionGroup-title"], 
      this.$_sectionTitleStyle$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$["section-title"], this.$_legendItemStyle$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$["legend-item"]
    }
    if($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ = this.$_legendJSON$.noWrap) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$
    }
    $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.$w$ - 
    $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.x, this.$_isBiDi$ && ($childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.$w$ - 
    $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$), 0 < $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ && (this.$_isBiDi$ && $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$setTextString$(this.$_title$), $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$setX$($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.x), 
    $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$setY$($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$, 
    $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.$h$, this.$_legendContent$), $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$getDimensions$()) && 
    0 < $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$h$))) {
      $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.y = $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.y + $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$.$h$ + 
      this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ = this.$_legendJSON$.separatorDef) {
      for($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = 0;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ < $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.length;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$++) {
        if(($childNode$$inline_747_separators$$inline_748_separators$$inline_760$$ = $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$[$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$].separator) && 0 < $childNode$$inline_747_separators$$inline_748_separators$$inline_760$$.length) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ = this.$_legendJSON$.sectionGroup;
    $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.x = this.$_isBiDi$ ? this.$_width$ : 0;
    if($childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$) {
      for($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = 0;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ < $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.length;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$)(this, $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$[$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$], this.$_legendContent$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$, 
        this.$_isBiDi$))
      }
    }
    if($childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$ = this.$_legendJSON$.section) {
      for($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = 0;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ < $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$.length;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$)(this, $childNode$$inline_8787_childNodes$$inline_745_fitWidth$$inline_743_fitWidth$$inline_756_sectionGroups$$inline_761_sections$$inline_762_separatorDefs$$inline_758$$[$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$], this.$_legendContent$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$, 
        this.$_isBiDi$))
      }
    }
  }
  this.$_dim$ = this.$getDimensions$();
  for($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ = 0;$availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ < this.$_separators$.length;$availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$++) {
    this.$_isBiDi$ ? (this.$_dim$.x = this.$_separators$[$availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$].$getX1$() - this.$_dim$.$w$, this.$_separators$[$availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$].$setX2$(this.$_dim$.x)) : 
    this.$_separators$[$availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$].$setX2$(this.$_dim$.$w$ + this.$_separators$[$availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$].$getX1$())
  }
  this.$_eventHandler$.$addListeners$(this);
  for($i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ = 0;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$ < this.$_associations$.length;$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$++) {
    $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$ = this.$_associations$[$i$$inline_746_i$$inline_759_i$$inline_8786_legendTitle$$inline_742_legendTitle$$inline_755_titleDim$$inline_744_titleDim$$inline_757$$], this.$_eventHandler$.$associate$($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$, 
    $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$), this.$_hidden$ && -1 < D.$DvtArrayUtils$$.$getIndex$(this.$_hidden$, $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.$getAttributeGroup$() + 
    ":" + $availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$.$getItemId$()) && (0,D.$JSCompiler_StaticMethods_filterRow$$)($availSpace$$inline_741_availSpace$$inline_754_childNodes$$inline_8785_j$$inline_749_j$$inline_763_legendRow$$inline_750_legendRow$$inline_764_legendStyleNode$$inline_8784_legendStyleNode$$inline_8793_noWrap$$inline_740_noWrap$$inline_753$$)
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
D.$JSCompiler_StaticMethods__createButton$$ = function $$JSCompiler_StaticMethods__createButton$$$($JSCompiler_StaticMethods__createButton$self$$, $dwn$$1_images$$3$$, $x$$61$$, $y$$38$$, $width$$15$$, $height$$14$$, $buttonState_ena$$1$$) {
  if(!$dwn$$1_images$$3$$) {
    return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$)
  }
  switch($buttonState_ena$$1$$) {
    case 1:
      $buttonState_ena$$1$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$1_images$$3$$.groupColEna, $x$$61$$, $y$$38$$, $width$$15$$, $height$$14$$);
      var $ovr$$1$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$1_images$$3$$.groupColOvr, $x$$61$$, $y$$38$$, $width$$15$$, $height$$14$$);
      $dwn$$1_images$$3$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$1_images$$3$$.groupColDwn, $x$$61$$, $y$$38$$, $width$$15$$, $height$$14$$);
      return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState_ena$$1$$, $ovr$$1$$, $dwn$$1_images$$3$$);
    default:
      return $buttonState_ena$$1$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$1_images$$3$$.groupExpDwn, $x$$61$$, $y$$38$$, $width$$15$$, $height$$14$$), $ovr$$1$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$1_images$$3$$.groupExpOvr, $x$$61$$, $y$$38$$, $width$$15$$, $height$$14$$), $dwn$$1_images$$3$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$1_images$$3$$.groupExpDwn, 
      $x$$61$$, $y$$38$$, $width$$15$$, $height$$14$$), new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState_ena$$1$$, $ovr$$1$$, $dwn$$1_images$$3$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendSectionGroup$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_handleMouseClick$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseClick$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$();
  var $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$ = D.$DvtAgent$$.$isRightToLeft$() ? -1 : 1;
  this.$_sectionHeight$ || (this.$_sectionHeight$ = this.$getDimensions$().$h$ - this.$_headerHeight$);
  0 == this.$_buttonState$ ? ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$ = this.$_button$.getParent(), $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$.removeChild(this.$_button$), this.$_button$ = this.$_collapsedBtn$, $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$, this.$_buttonY$ + 5.5, this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_FALSE$$, this.$_buttonState$ = 1, $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$ = -this.$_sectionHeight$) : ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$ = 
  this.$_button$.getParent(), $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$.removeChild(this.$_button$), this.$_button$ = this.$_expandedBtn$, $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$, this.$_buttonY$ + 
  1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_TRUE$$, this.$_buttonState$ = 0, $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$ = this.$_sectionHeight$);
  if(this.$_itemsVisible$) {
    for(var $i$$inline_776$$ = 0;$i$$inline_776$$ < this.$_items$.length;$i$$inline_776$$++) {
      this.$addChild$(this.$_items$[$i$$inline_776$$])
    }
  }else {
    for($i$$inline_776$$ = 0;$i$$inline_776$$ < this.$_items$.length;$i$$inline_776$$++) {
      this.removeChild(this.$_items$[$i$$inline_776$$])
    }
  }
  this.$_legend$.update(this, $bidiMultiplier$$inline_773_diff$$inline_774_parent$$inline_775$$)
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
  var $bidiMultiplier$$inline_782_sectionTitle$$6$$ = $isBiDi$$5$$ ? -1 : 1;
  if("alta" == this.$_styleMap$.skin) {
    var $fitWidth$$2_images$$inline_783$$ = this.$_legend$.$_images$;
    this.$_expandedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_783$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 0);
    this.$_collapsedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_783$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 1);
    this.$_button$ = this.$_expandedBtn$
  }else {
    this.$_button$ = new D.$DvtPolygon$$(this.$_context$, [this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_782_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_782_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_782_sectionTitle$$6$$, this.$_buttonY$ + 9.5]), this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
  }
  $collapsibleHitArea_dim$$2_parent$$10$$.$addChild$(this.$_button$);
  D.$DvtAgent$$.$isTouchDevice$() ? $collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this) : ($collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this), $collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$_handleMouseOver$, D.$JSCompiler_alias_FALSE$$, this), $collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  this.$_handleMouseOut$, D.$JSCompiler_alias_FALSE$$, this), $collapsibleHitArea_dim$$2_parent$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_handleMouseDown$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_buttonState$ = 0;
  $availSpace$$12$$.x += (("alta" == this.$_styleMap$.skin && $isBiDi$$5$$ ? 0 : this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap) * $bidiMultiplier$$inline_782_sectionTitle$$6$$;
  this.$_title$ && ($bidiMultiplier$$inline_782_sectionTitle$$6$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $fitWidth$$2_images$$inline_783$$ = $availSpace$$12$$.$w$ - $availSpace$$12$$.x, $isBiDi$$5$$ && ($fitWidth$$2_images$$inline_783$$ = $availSpace$$12$$.$w$ - $fitWidth$$2_images$$inline_783$$), 0 < $fitWidth$$2_images$$inline_783$$ && ($isBiDi$$5$$ && $bidiMultiplier$$inline_782_sectionTitle$$6$$.$alignRight$(), this.$_titleStyle$ && 
  $bidiMultiplier$$inline_782_sectionTitle$$6$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $bidiMultiplier$$inline_782_sectionTitle$$6$$.$setTextString$(this.$_title$), $bidiMultiplier$$inline_782_sectionTitle$$6$$.$setX$($availSpace$$12$$.x), $bidiMultiplier$$inline_782_sectionTitle$$6$$.$setY$($availSpace$$12$$.y), D.$DvtTextUtils$$.$fitText$($bidiMultiplier$$inline_782_sectionTitle$$6$$, $fitWidth$$2_images$$inline_783$$, $availSpace$$12$$.$h$, $collapsibleHitArea_dim$$2_parent$$10$$), 
  $bidiMultiplier$$inline_782_sectionTitle$$6$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($bidiMultiplier$$inline_782_sectionTitle$$6$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $collapsibleHitArea_dim$$2_parent$$10$$ = $bidiMultiplier$$inline_782_sectionTitle$$6$$.$getDimensions$(), $availSpace$$12$$.y = $availSpace$$12$$.y + window.Math.max($collapsibleHitArea_dim$$2_parent$$10$$ ? $collapsibleHitArea_dim$$2_parent$$10$$.$h$ : 0, this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap));
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
  $JSCompiler_StaticMethods_filterRow$self$$.$_marker$.$setHollow$($JSCompiler_StaticMethods_filterRow$self$$.$_color$);
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($JSCompiler_StaticMethods_filterRow$self$$, "label", $JSCompiler_StaticMethods_filterRow$self$$.$_text$ + ". " + (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$__getBundle$(), $JSCompiler_StaticMethods_filterRow$self$$.$_bHidden$ ? "STATE_HIDDEN" : "STATE_VISIBLE"))
};
D.$DvtCommonLegendRow$$.prototype.$render$ = function $$DvtCommonLegendRow$$$$$render$$($parent$$12_rowX$$, $availSpace$$14$$, $isBiDi$$7$$) {
  if(this.$_prop$) {
    var $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$ = this.$_legend$, $attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$ = this.$_prop$.attributeGroupId, $itemId$$inline_787$$ = this.$_prop$.itemId;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$] == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$] = {});
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$][$itemId$$inline_787$$] = this;
    this.$_legend$.$_associations$.push(this);
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$ = this.$_legend$;
    $attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$ = this.$_prop$.hideAttrs;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$] || ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$] = this)
  }
  $parent$$12_rowX$$.$addChild$(this);
  $parent$$12_rowX$$ = $availSpace$$14$$.x;
  $isBiDi$$7$$ && ($availSpace$$14$$.x -= this.$_styleMap$.indicatorSize);
  var $marker$$1_textDim$$;
  if(this.$_url$ || this.$_shape$ != D.$JSCompiler_alias_NULL$$) {
    $marker$$1_textDim$$ = new D.$DvtMarker$$(this.$_context$, this.$_url$ ? [this.$_url$] : this.$_shape$, this.$_styleMap$[D.DvtCommonLegend.$SKIN_NAME$], $availSpace$$14$$.x, $availSpace$$14$$.y, this.$_styleMap$.indicatorSize, this.$_styleMap$.indicatorSize), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$ = D.$DvtMarkerUtils$$.$getCustomMarkerInfo$(this.$_context$, this.$_shape$), !this.$_url$ && 
    !$JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$ && (this.$_pattern$ ? $marker$$1_textDim$$.$setFill$(new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$)) : $marker$$1_textDim$$.$setSolidFill$(this.$_color$, this.$_opacity$)), this.$addChild$($marker$$1_textDim$$), $availSpace$$14$$.x = $isBiDi$$7$$ ? $availSpace$$14$$.x - this.$_styleMap$.rowColGap : $availSpace$$14$$.x + this.$_styleMap$.indicatorSize + 
    this.$_styleMap$.rowColGap
  }
  this.$_marker$ = $marker$$1_textDim$$;
  $marker$$1_textDim$$ = new D.$DvtRectangle$$;
  this.$_text$ && (this.$_legend$.$_showHideEnabled$ && ((0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this, "img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this, "label", this.$_text$ + ". " + (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_legend$.$__getBundle$(), "STATE_VISIBLE"))), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$ = $availSpace$$14$$.$w$ - $availSpace$$14$$.x, 
  $isBiDi$$7$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$ = $availSpace$$14$$.$w$ - $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$), 0 > $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$ ? this.$_legend$.$getEventManager$().$associate$(this.$_marker$, 
  new D.$DvtSimpleObjPeer$$(this.$_text$)) : ($attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $isBiDi$$7$$ && $attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$.$alignRight$(), this.$_itemStyle$ && $attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_itemStyle$)), $attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$.$setTextString$(this.$_text$), 
  $attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$.$setX$($availSpace$$14$$.x), $attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$.$setY$($availSpace$$14$$.y), D.$DvtTextUtils$$.$fitText$($attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$, $JSCompiler_StaticMethods_addAttrLookup$self$$inline_785_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_793_fitWidth$$4_isCustomShape$$, $availSpace$$14$$.$h$, this) ? ($marker$$1_textDim$$ = $attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$.$getDimensions$(), 
  $attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($attributeGroupId$$inline_786_hideAttrs$$inline_794_text$$11$$, new D.$DvtSimpleObjPeer$$(this.$_text$))) : this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$))));
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
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($event$$23_listItemEvent$$inline_802$$) {
  if(this.$_legend$.$_showHideEnabled$) {
    var $obj$$30$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$23_listItemEvent$$inline_802$$.target);
    if($obj$$30$$ instanceof D.$DvtCommonLegendRow$$) {
      var $listItemId$$inline_800$$ = $obj$$30$$.$getItemId$(), $attributeGroupId$$inline_801$$ = $obj$$30$$.$getAttributeGroup$();
      (0,D.$JSCompiler_StaticMethods_filterRow$$)($obj$$30$$);
      $event$$23_listItemEvent$$inline_802$$ = new D.$DvtListItemEvent$$($listItemId$$inline_800$$, $attributeGroupId$$inline_801$$, $obj$$30$$.$_bHidden$ ? "hide" : "show", $event$$23_listItemEvent$$inline_802$$);
      this.$_legend$.$FireListener$($event$$23_listItemEvent$$inline_802$$)
    }
  }
};
D.$JSCompiler_StaticMethods__handleRollOver$$ = function $$JSCompiler_StaticMethods__handleRollOver$$$($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$24$$) {
  var $obj$$31$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$24$$.target);
  if($obj$$31$$ instanceof D.$DvtCommonLegendRow$$) {
    if($JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_rollOverEnabled$) {
      var $listItemId$$inline_807_rollOverEvent$$inline_809$$ = $obj$$31$$.$getItemId$(), $attributeGroupId$$inline_808$$ = $obj$$31$$.$getAttributeGroup$(), $listItemId$$inline_807_rollOverEvent$$inline_809$$ = new D.$DvtLegendItemRollOverEvent$$($listItemId$$inline_807_rollOverEvent$$inline_809$$, $attributeGroupId$$inline_808$$, $obj$$31$$.$getHideAttributes$(), $event$$24$$.type, $event$$24$$);
      $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$FireListener$($listItemId$$inline_807_rollOverEvent$$inline_809$$)
    }
    $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_showHideEnabled$ && (0,D.$JSCompiler_StaticMethods_UpdateActiveElement$$)($JSCompiler_StaticMethods__handleRollOver$self$$, $obj$$31$$)
  }
};
});