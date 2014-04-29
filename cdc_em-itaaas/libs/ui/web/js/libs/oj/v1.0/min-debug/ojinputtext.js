define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$4$$, $$$$4$$) {
  $oj$$4$$.$__registerWidget$("oj.inputBase", $$$$4$$.oj.editableValue, {version:"1.0.0", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"", _WIDGET_CLASS_NAMES:"", $_INPUT_HELPER_KEY$:"", options:{pattern:void 0, placeholder:void 0, readOnly:void 0}, $_SaveAttributes$:function($element$$20$$) {
    var $ret$$2$$ = this._superApply(arguments);
    this.$_processAttrCheck$();
    return $ret$$2$$
  }, $_InitOptions$:function() {
    this._super();
    void 0 === this.options.readOnly && (this.options.readOnly = void 0 !== this.element.attr("readonly") ? !!this.element.prop("readonly") : !1);
    if("boolean" !== typeof this.options.readOnly) {
      throw"Option 'readOnly' has an invalid value set: " + this.options.readOnly;
    }
    void 0 === this.options.pattern && (this.options.pattern = this.element.prop("pattern"))
  }, $_ComponentCreate$:function() {
    var $node$$10$$ = this.element, $ret$$3$$ = this._superApply(arguments), $savedAttributes$$3$$ = this.$_GetSavedAttributes$($node$$10$$);
    "boolean" === typeof this.options.readOnly && this.element.prop("readonly", this.options.readOnly);
    this.$_DoWrapElement$() && this.$_wrapElement$();
    "pattern" in $savedAttributes$$3$$ && $node$$10$$.removeAttr("pattern");
    return $ret$$3$$
  }, $_AfterCreate$:function() {
    var $ret$$4$$ = this._superApply(arguments);
    this.options.disabled && this.disable();
    this._CLASS_NAMES && this.element.addClass(this._CLASS_NAMES);
    this.element.on("blur", $$$$4$$.proxy(this.$_onBlurHandler$, this));
    this.$_AppendInputHelper$();
    return $ret$$4$$
  }, _setOption:function __setOption($key$$34$$, $value$$86$$) {
    var $retVal$$6$$ = this._super($key$$34$$, $value$$86$$);
    "disabled" === $key$$34$$ && this.element.attr("disabled", $value$$86$$);
    "readOnly" === $key$$34$$ && this.element.prop("readonly", !!$value$$86$$);
    "pattern" === $key$$34$$ && (this.$__defaultRegExpOptions$.pattern = $value$$86$$);
    return $retVal$$6$$
  }, _destroy:function __destroy() {
    var $ret$$5$$ = this._superApply(arguments);
    this.element.off("blur");
    this.element.removeClass(this._CLASS_NAMES);
    this.$_inputHelper$ && this.$_inputHelper$.remove();
    this.$_DoWrapElement$() && this.element.unwrap();
    return $ret$$5$$
  }, $_processAttrCheck$:function __processAttrCheck() {
    for(var $attrCheck$$ = this._ATTR_CHECK, $i$$84$$ = 0, $j$$11$$ = $attrCheck$$.length;$i$$84$$ < $j$$11$$;$i$$84$$++) {
      var $attr$$12$$ = $attrCheck$$[$i$$84$$].attr;
      "setMandatory" in $attrCheck$$[$i$$84$$] && this.element.attr($attr$$12$$, $attrCheck$$[$i$$84$$].setMandatory)
    }
  }, $_onBlurHandler$:function __onBlurHandler($event$$34$$) {
    this.$_SetValue$(this.$_GetDisplayValue$(), $event$$34$$)
  }, $_DoWrapElement$:$JSCompiler_get$$("_WIDGET_CLASS_NAMES"), $_wrapElement$:function __wrapElement() {
    $$$$4$$(this.element).wrap($$$$4$$("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));
    this.$_wrapper$ = this.element.parent()
  }, $_AppendInputHelper$:function __AppendInputHelper() {
    if(this.$_INPUT_HELPER_KEY$ && this.$_DoWrapElement$()) {
      var $helperLabeledById$$ = this.$_GetSubId$(this.$_INPUT_HELPER_KEY$);
      this.element.attr("aria-labelledby", $helperLabeledById$$);
      this.$_inputHelper$ = $$$$4$$("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'" + $helperLabeledById$$ + "'\x3e" + this.$getTranslatedString$(this.$_INPUT_HELPER_KEY$) + "\x3c/div\x3e");
      this.widget().append(this.$_inputHelper$)
    }
  }, $_RefreshLabelDependents$:function() {
    this.$__defaultRegExpOptions$ = {};
    this._super()
  }, $_GetDefaultValidators$:function() {
    var $ret$$6$$ = this._superApply(arguments), $validatorMap$$ = {};
    this.options.pattern && ($validatorMap$$[$oj$$4$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP] = this.$_getDefaultRegExpValidator$());
    return $$$$4$$.extend($validatorMap$$, $ret$$6$$)
  }, $_getDefaultRegExpValidator$:function() {
    var $vf$$1$$;
    this.$__defaultRegExpOptions$ = {pattern:this.options.pattern, label:this.$_getLabelText$()};
    return($vf$$1$$ = $oj$$4$$.$Validation$.$validatorFactory$($oj$$4$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP)) ? $vf$$1$$.createValidator(this.$__defaultRegExpOptions$) : null
  }, $_GetSubId$:function __getSubId($sub$$) {
    return this.uuid + "_" + $sub$$
  }, $_IsRTL$:function() {
    return"rtl" === this.$_GetReadingDirection$()
  }, getNodeBySubId:function($locator$$3$$) {
    return null == $locator$$3$$ ? this.element ? this.element[0] : null : null
  }, widget:function _widget() {
    return this.$_DoWrapElement$() ? this.$_wrapper$ : this.element
  }});
  $oj$$4$$.$__registerWidget$("oj.ojInputText", $$$$4$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], _CLASS_NAMES:"oj-inputtext-input", _WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component", _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-inputtext")});
  $oj$$4$$.$__registerWidget$("oj.ojTextArea", $$$$4$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3ctextarea\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"oj-textarea-input", _WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component", _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-textarea")});
  $oj$$4$$.$__registerWidget$("oj.ojInputPassword", $$$$4$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"password"}], _CLASS_NAMES:"oj-inputpassword-input", _WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component", _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-inputpassword")})
});
