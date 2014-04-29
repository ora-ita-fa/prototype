define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$36$$, $$$$34$$) {
  $oj$$36$$.$__registerWidget$("oj._ojRadioCheckbox", $$$$34$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:null, checked:null, type:null}, label:function() {
    void 0 === this.$$label$ && (this.$$label$ = this.$_getLabelsForElement$());
    return this.$$label$
  }, refresh:function() {
    this._super();
    var $isDisabled$$ = this.element.is(":disabled");
    $isDisabled$$ !== this.options.disabled && this._setOption("disabled", $isDisabled$$);
    this.$_setup$()
  }, widget:$JSCompiler_get$$("$uiRadioCheckbox$"), _create:function() {
    this._super();
    "boolean" !== typeof this.options.checked && (this.options.checked = !!this.element.prop("checked"));
    "boolean" !== typeof this.options.disabled && (this.options.disabled = !!this.element.prop("disabled"));
    this.options.type = this.element.prop("type");
    this.$_drawOnCreate$();
    this._on(this.$_events$)
  }, _init:function() {
    this._super();
    this.$_setup$()
  }, $_setup$:function() {
    this.options.disabled ? this.disable() : this.enable();
    this.options.checked ? this._setOption("checked", !0) : this._setOption("checked", !1)
  }, $_events$:{}, $_drawOnCreate$:function() {
    var $type$$80$$ = this.options.type;
    "checkbox" == $type$$80$$ ? (this.$uiRadioCheckbox$ = this.element.addClass("oj-checkbox oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-checkbox-label")) : "radio" == $type$$80$$ && (this.$uiRadioCheckbox$ = this.element.addClass("oj-radio oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-radio-label"));
    var $self$$103$$ = this;
    this._hoverable(this.element);
    this._focusable(this.element);
    this.$_activeable$(this.element);
    $$$$34$$.each($self$$103$$.$$label$, function() {
      $self$$103$$._hoverable(this);
      $self$$103$$._focusable(this);
      $self$$103$$.$_activeable$(this)
    })
  }, _setOption:function($key$$114$$, $value$$204$$) {
    this._super($key$$114$$, $value$$204$$);
    "disabled" === $key$$114$$ && (($value$$204$$ = !!$value$$204$$) ? (this.element.prop("disabled", !0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"), this.$$label$.removeClass("oj-enabled").addClass("oj-disabled")) : (this.element.prop("disabled", !1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"), this.$$label$.addClass("oj-enabled").removeClass("oj-disabled")));
    "checked" === $key$$114$$ && ($value$$204$$ ? this.element.prop("checked", !0) : this.element.prop("checked", !1), this.element.toggleClass("oj-selected", $value$$204$$))
  }, $_getLabelsForElement$:function() {
    var $labelClosestParent$$ = this.element.closest("label"), $labelForQuery$$ = "label[for\x3d'" + this.element.prop("id") + "']";
    return $labelClosestParent$$.add($$$$34$$($labelForQuery$$))
  }, getNodeBySubId:function($locator$$22_subId$$16$$) {
    if(null == $locator$$22_subId$$16$$) {
      return this.element ? this.element[0] : null
    }
    $locator$$22_subId$$16$$ = $locator$$22_subId$$16$$.subId;
    return"oj-radiocheckbox-input" === $locator$$22_subId$$16$$ ? this.element[0] : "oj-radiocheckbox-label" === $locator$$22_subId$$16$$ ? this.label()[0] : null
  }, _destroy:function() {
    this._super();
    var $type$$81$$ = this.options.type;
    "checkbox" == $type$$81$$ ? (this.element.removeClass("oj-checkbox oj-selected oj-disabled oj-enabled oj-component"), this.$$label$.removeClass("oj-enabled oj-disabled oj-checkbox-label")) : "radio" == $type$$81$$ && (this.element.removeClass("oj-radio oj-selected oj-disabled oj-enabled oj-component"), this.$$label$.removeClass("oj-enabled oj-disabled oj-radio-label"))
  }})
});
