define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$22$$, $$$$22$$) {
  $oj$$22$$.$__registerWidget$("oj.ojCheckboxset", $$$$22$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{}, refresh:function() {
    this._super();
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$().filter(".oj-checkbox")._ojRadioCheckbox("refresh").end().not(".oj-checkbox")._ojRadioCheckbox().end();
    this.$_setup$()
  }, widget:$JSCompiler_get$$("$uiCheckboxset$"), $_ComponentCreate$:function() {
    this._super();
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$()._ojRadioCheckbox();
    this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-component").attr("role", "group");
    this._on(this.$_events$);
    this.$_setup$()
  }, $_findCheckboxesWithMatchingName$:function() {
    var $first$$5_name$$96$$ = this.element.find("input[type\x3dcheckbox]:first");
    0 === $first$$5_name$$96$$.length && $oj$$22$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
    $first$$5_name$$96$$ = $first$$5_name$$96$$.attr("name");
    return void 0 === $first$$5_name$$96$$ ? this.element.find("input[type\x3dcheckbox]").not("[name]") : this.element.find("input[type\x3dcheckbox][name\x3d" + $first$$5_name$$96$$ + "]")
  }, $_showContextMenu$:function($menu$$14$$, $event$$275$$) {
    var $checkboxes_launcher$$8$$ = this.element.find("input[type\x3dcheckbox]"), $checked$$3$$ = $checkboxes_launcher$$8$$.filter(":checked"), $checkboxes_launcher$$8$$ = $checked$$3$$.length ? $checked$$3$$ : $checkboxes_launcher$$8$$.first();
    $menu$$14$$.show($event$$275$$, {launcher:$checkboxes_launcher$$8$$, focus:"menu"})
  }, $_setup$:function() {
    this.options.disabled && this.disable()
  }, $_events$:{change:function($event$$276$$) {
    this.$_HandleChangeEvent$($event$$276$$)
  }}, $_HandleChangeEvent$:function($event$$277$$) {
    this._super($event$$277$$)
  }, $_GetDisplayValue$:function() {
    return this.$_GetElementValue$()
  }, $_SetDisplayValue$:function($checkedBoxes$$) {
    this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
    if(null != $checkedBoxes$$) {
      for(var $i$$255$$ = 0;$i$$255$$ < $checkedBoxes$$.length;$i$$255$$++) {
        var $checkboxWithMatchingValue_valueFilter$$ = "[value\x3d'" + $checkedBoxes$$[$i$$255$$] + "']";
        void 0 !== $checkboxWithMatchingValue_valueFilter$$ && void 0 !== this.$$checkboxes$ && ($checkboxWithMatchingValue_valueFilter$$ = this.$$checkboxes$.filter($checkboxWithMatchingValue_valueFilter$$), void 0 !== $checkboxWithMatchingValue_valueFilter$$ && 0 < $checkboxWithMatchingValue_valueFilter$$.length && ($checkboxWithMatchingValue_valueFilter$$.prop("checked") || $checkboxWithMatchingValue_valueFilter$$._ojRadioCheckbox("option", "checked", !0)))
      }
    }
  }, $_GetElementValue$:function() {
    var $checkedValues$$ = [], $selectedCheckbox$$ = this.$$checkboxes$.filter(":checked");
    if(0 === $selectedCheckbox$$.length) {
      return null
    }
    $selectedCheckbox$$.each(function() {
      $checkedValues$$.push($$$$22$$(this).val())
    });
    return $checkedValues$$
  }, $_InitOptions$:function() {
    var $checkboxes$$1_result$$18_selectedCheckbox$$1$$, $checkedValues$$1$$ = [];
    this._super();
    null == this.options.value && ($checkboxes$$1_result$$18_selectedCheckbox$$1$$ = this.$_findCheckboxesWithMatchingName$(), $checkboxes$$1_result$$18_selectedCheckbox$$1$$ = $checkboxes$$1_result$$18_selectedCheckbox$$1$$.filter(":checked"), 0 === $checkboxes$$1_result$$18_selectedCheckbox$$1$$.length ? $checkboxes$$1_result$$18_selectedCheckbox$$1$$ = null : ($checkboxes$$1_result$$18_selectedCheckbox$$1$$.each(function() {
      $checkedValues$$1$$.push($$$$22$$(this).val())
    }), $checkboxes$$1_result$$18_selectedCheckbox$$1$$ = $checkedValues$$1$$), this.options.value = $checkboxes$$1_result$$18_selectedCheckbox$$1$$)
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-checkboxset"), $_GetContentElement$:function() {
    return this.$_findCheckboxesWithMatchingName$()
  }, $_RefreshAriaRequired$:function($ariaValue$$2_value$$181$$) {
    var $rootNode$$ = this.$uiCheckboxset$;
    ($ariaValue$$2_value$$181$$ = "required" == $ariaValue$$2_value$$181$$ ? !0 : !1) && $rootNode$$ ? $rootNode$$.attr("aria-required", $ariaValue$$2_value$$181$$) : $rootNode$$.removeAttr("aria-required")
  }, _setOption:function($key$$90$$, $value$$182$$) {
    this._super($key$$90$$, $value$$182$$);
    "disabled" === $key$$90$$ && this.$$checkboxes$._ojRadioCheckbox("option", $key$$90$$, $value$$182$$)
  }, getNodeBySubId:function($locator$$16$$) {
    return null == $locator$$16$$ ? this.element ? this.element[0] : null : "oj-checkboxset-inputs" === $locator$$16$$.subId ? this.$$checkboxes$ : null
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-checkboxset oj-enabled oj-component").removeAttr("role");
    this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy")
  }})
});
