define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$34$$, $$$$33$$) {
  $oj$$34$$.$__registerWidget$("oj.ojRadioset", $$$$33$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{}, refresh:function() {
    this._super();
    this.$$radios$ = this.$_findRadiosWithMatchingName$().filter(".oj-radio")._ojRadioCheckbox("refresh").end().not(".oj-radio")._ojRadioCheckbox().end();
    this.$_setup$()
  }, widget:$JSCompiler_get$$("$uiRadioset$"), $_ComponentCreate$:function() {
    this._super();
    this.$$radios$ = this.$_findRadiosWithMatchingName$()._ojRadioCheckbox();
    this.$uiRadioset$ = this.element.addClass("oj-radioset oj-component").attr("role", "radiogroup");
    this._on(this.$_events$);
    this.$_setup$()
  }, $_findRadiosWithMatchingName$:function() {
    var $first$$7_name$$100$$ = this.element.find("input[type\x3dradio]:first");
    0 === $first$$7_name$$100$$.length && $oj$$34$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
    $first$$7_name$$100$$ = $first$$7_name$$100$$.attr("name");
    return void 0 === $first$$7_name$$100$$ ? this.element.find("input[type\x3dradio]").not("[name]") : this.element.find("input[type\x3dradio][name\x3d" + $first$$7_name$$100$$ + "]")
  }, $_showContextMenu$:function($menu$$18$$, $event$$331$$) {
    var $launcher$$9_radios$$ = this.element.find("input[type\x3dradio]"), $checked$$4$$ = $launcher$$9_radios$$.filter(":checked"), $launcher$$9_radios$$ = $checked$$4$$.length ? $checked$$4$$ : $launcher$$9_radios$$.first();
    $menu$$18$$.show($event$$331$$, {launcher:$launcher$$9_radios$$, focus:"menu"})
  }, $_setup$:function() {
    !0 === this.options.disabled ? this.disable() : !1 === this.options.disabled && this.enable()
  }, $_events$:{change:function($event$$332$$) {
    this.$_HandleChangeEvent$($event$$332$$)
  }}, $_HandleChangeEvent$:function($event$$333$$) {
    this._super($event$$333$$)
  }, $_GetDisplayValue$:function() {
    return this.$_GetElementValue$()
  }, $_SetDisplayValue$:function($displayValue$$7_radioWithMatchingValue_valueFilter$$1$$) {
    null != $displayValue$$7_radioWithMatchingValue_valueFilter$$1$$ && ($displayValue$$7_radioWithMatchingValue_valueFilter$$1$$ = "[value\x3d'" + $displayValue$$7_radioWithMatchingValue_valueFilter$$1$$ + "']", void 0 !== $displayValue$$7_radioWithMatchingValue_valueFilter$$1$$ && void 0 !== this.$$radios$ && ($displayValue$$7_radioWithMatchingValue_valueFilter$$1$$ = this.$$radios$.filter($displayValue$$7_radioWithMatchingValue_valueFilter$$1$$), void 0 !== $displayValue$$7_radioWithMatchingValue_valueFilter$$1$$ && 
    0 < $displayValue$$7_radioWithMatchingValue_valueFilter$$1$$.length ? $displayValue$$7_radioWithMatchingValue_valueFilter$$1$$.prop("checked") || $displayValue$$7_radioWithMatchingValue_valueFilter$$1$$._ojRadioCheckbox("option", "checked", !0) : this.$$radios$._ojRadioCheckbox("option", "checked", !1)))
  }, $_GetElementValue$:function() {
    var $checkedRadio$$ = this.$$radios$.filter(":checked");
    return 0 === $checkedRadio$$.length ? null : $checkedRadio$$.val()
  }, $_InitOptions$:function() {
    var $checkedRadio$$1_radios$$1_result$$20$$;
    this._super();
    null == this.options.value && ($checkedRadio$$1_radios$$1_result$$20$$ = this.$_findRadiosWithMatchingName$(), $checkedRadio$$1_radios$$1_result$$20$$ = $checkedRadio$$1_radios$$1_result$$20$$.filter(":checked"), $checkedRadio$$1_radios$$1_result$$20$$ = 0 === $checkedRadio$$1_radios$$1_result$$20$$.length ? null : $checkedRadio$$1_radios$$1_result$$20$$.val(), this.options.value = $checkedRadio$$1_radios$$1_result$$20$$)
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-radioset"), $_GetContentElement$:function() {
    return this.$_findRadiosWithMatchingName$()
  }, $_RefreshAriaRequired$:function($ariaValue$$3_value$$202$$) {
    var $rootNode$$1$$ = this.$uiRadioset$;
    ($ariaValue$$3_value$$202$$ = "required" == $ariaValue$$3_value$$202$$ ? !0 : !1) && $rootNode$$1$$ ? $rootNode$$1$$.attr("aria-required", $ariaValue$$3_value$$202$$) : $rootNode$$1$$.removeAttr("aria-required")
  }, _setOption:function($key$$113$$, $value$$203$$) {
    this._super($key$$113$$, $value$$203$$);
    "disabled" === $key$$113$$ && this.$$radios$._ojRadioCheckbox("option", $key$$113$$, $value$$203$$)
  }, getNodeBySubId:function($locator$$21$$) {
    return null == $locator$$21$$ ? this.element ? this.element[0] : null : "oj-radioset-inputs" === $locator$$21$$.subId ? this.$$radios$ : null
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-radioset oj-enabled oj-component").removeAttr("role");
    this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy")
  }})
});
