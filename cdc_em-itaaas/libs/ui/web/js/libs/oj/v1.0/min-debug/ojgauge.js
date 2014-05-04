define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtGauge"], function($oj$$14$$, $$$$14$$) {
  $oj$$14$$.$__registerWidget$("oj.dvtBaseGauge", $$$$14$$.oj.dvtBaseComponent, {option:function($key$$75$$, $value$$169$$) {
    var $previousValue$$3$$, $newValue$$6_valueOptionSet$$1$$ = !1;
    "string" === typeof $key$$75$$ && void 0 !== $value$$169$$ ? "value" === $key$$75$$ && ($newValue$$6_valueOptionSet$$1$$ = !0, $previousValue$$3$$ = this.options.value) : "object" === typeof $key$$75$$ && $key$$75$$ && void 0 !== $key$$75$$.value && ($newValue$$6_valueOptionSet$$1$$ = !0, $previousValue$$3$$ = this.options.value);
    var $ret$$27$$ = this._superApply(arguments);
    $newValue$$6_valueOptionSet$$1$$ && ($newValue$$6_valueOptionSet$$1$$ = this.options.value, $oj$$14$$.$Object$.$innerEquals$($previousValue$$3$$, $newValue$$6_valueOptionSet$$1$$) || this._trigger("optionChange", null, {option:"value", previousValue:$previousValue$$3$$, value:$newValue$$6_valueOptionSet$$1$$}));
    return $ret$$27$$
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$ = this._super();
    $styleClasses$$["oj-gauge-metric-label"] = {path:"metricLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$["oj-gauge-tick-label"] = {path:"tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$
  }, $_GetTranslationMap$:function() {
    var $superMap$$ = this._super(), $selfMap$$ = {"DvtGaugeBundle.EMPTY_TEXT":this.$_GetTranslatedResource$("msgNoData")};
    $selfMap$$["DvtGaugeBundle.EMPTY_TEXT"] = $oj$$14$$.$Translations$.$getResource$("oj-dvtBaseComponent.msgNoData");
    var $ret$$28$$ = {}, $key$$76$$;
    for($key$$76$$ in $superMap$$) {
      $ret$$28$$[$key$$76$$] = $superMap$$[$key$$76$$]
    }
    for($key$$76$$ in $selfMap$$) {
      $ret$$28$$[$key$$76$$] = $selfMap$$[$key$$76$$]
    }
    return $ret$$28$$
  }, $_HandleEvent$:function($event$$151$$) {
    var $type$$72$$ = $event$$151$$ && $event$$151$$.getType ? $event$$151$$.getType() : null;
    $type$$72$$ === DvtValueChangeEvent.TYPE ? this.option("value", $event$$151$$.getNewValue()) : $type$$72$$ === DvtValueChangeEvent.TYPE_INPUT ? this._trigger("input", null, {value:$event$$151$$.getNewValue()}) : this._super($event$$151$$)
  }});
  $oj$$14$$.$__registerWidget$("oj.ojStatusMeterGauge", $$$$14$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateComponent$:function($context$$38$$, $callback$$88$$, $callbackObj$$1$$) {
    return DvtStatusMeterGauge.newInstance($context$$38$$, $callback$$88$$, $callbackObj$$1$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$1$$ = this._super();
    $styleClasses$$1$$.push("oj-statusmetergauge");
    return $styleClasses$$1$$
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$14$$.$__registerWidget$("oj.ojLedGauge", $$$$14$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateComponent$:function($context$$39$$, $callback$$89$$, $callbackObj$$2$$) {
    return DvtLedGauge.newInstance($context$$39$$, $callback$$89$$, $callbackObj$$2$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$2$$ = this._super();
    $styleClasses$$2$$.push("oj-ledgauge");
    return $styleClasses$$2$$
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$14$$.$__registerWidget$("oj.ojRatingGauge", $$$$14$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateComponent$:function($context$$40$$, $callback$$90$$, $callbackObj$$3$$) {
    return DvtRatingGauge.newInstance($context$$40$$, $callback$$90$$, $callbackObj$$3$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$3$$ = this._super();
    $styleClasses$$3$$.push("oj-ratinggauge");
    return $styleClasses$$3$$
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$14$$.$__registerWidget$("oj.ojDialGauge", $$$$14$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateComponent$:function($context$$41$$, $callback$$91$$, $callbackObj$$4$$) {
    return DvtDialGauge.newInstance($context$$41$$, $callback$$91$$, $callbackObj$$4$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$4$$ = this._super();
    $styleClasses$$4$$.push("oj-dialgauge");
    return $styleClasses$$4$$
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }})
});
