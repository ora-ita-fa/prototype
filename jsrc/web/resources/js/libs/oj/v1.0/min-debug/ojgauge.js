define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtGauge"], function($oj$$23$$, $$$$22$$) {
  $oj$$23$$.$__registerWidget$("oj.dvtBaseGauge", $$$$22$$.oj.dvtBaseComponent, {option:function($key$$106$$, $value$$201$$) {
    var $previousValue$$6$$, $newValue$$9_valueOptionSet$$1$$ = !1;
    "string" === typeof $key$$106$$ && void 0 !== $value$$201$$ ? "value" === $key$$106$$ && ($newValue$$9_valueOptionSet$$1$$ = !0, $previousValue$$6$$ = this.options.value) : "object" === typeof $key$$106$$ && $key$$106$$ && void 0 !== $key$$106$$.value && ($newValue$$9_valueOptionSet$$1$$ = !0, $previousValue$$6$$ = this.options.value);
    var $ret$$31$$ = this._superApply(arguments);
    $newValue$$9_valueOptionSet$$1$$ && ($newValue$$9_valueOptionSet$$1$$ = this.options.value, $oj$$23$$.$Object$.$innerEquals$($previousValue$$6$$, $newValue$$9_valueOptionSet$$1$$) || this._trigger("optionChange", null, {option:"value", previousValue:$previousValue$$6$$, value:$newValue$$9_valueOptionSet$$1$$}));
    return $ret$$31$$
  }, $_getChildStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$["oj-gauge-metric-label"] = {path:"metricLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-gauge-tick-label"] = {path:"tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$11$$
  }, $_getTranslationMap$:function() {
    var $superMap$$3$$ = this._super(), $selfMap$$3$$ = {"oj-ojDvtCommon.msgNoData":"DvtGaugeBundle.EMPTY_TEXT"}, $ret$$32$$ = {}, $key$$107$$;
    for($key$$107$$ in $superMap$$3$$) {
      $ret$$32$$[$key$$107$$] = $superMap$$3$$[$key$$107$$]
    }
    for($key$$107$$ in $selfMap$$3$$) {
      $ret$$32$$[$key$$107$$] = $selfMap$$3$$[$key$$107$$]
    }
    return $ret$$32$$
  }, $_handleEvent$:function($event$$308$$) {
    var $type$$85$$ = $event$$308$$ && $event$$308$$.getType ? $event$$308$$.getType() : null;
    $type$$85$$ === DvtValueChangeEvent.TYPE ? this.option("value", $event$$308$$.getNewValue()) : $type$$85$$ === DvtValueChangeEvent.TYPE_INPUT ? this._trigger("input", null, {value:$event$$308$$.getNewValue()}) : this._super($event$$308$$)
  }});
  $oj$$23$$.$__registerWidget$("oj.ojDialGauge", $$$$22$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_createComponent$:function($context$$46$$, $callback$$100$$, $callbackObj$$7$$) {
    return DvtDialGauge.newInstance($context$$46$$, $callback$$100$$, $callbackObj$$7$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$.push("oj-dialgauge");
    return $styleClasses$$12$$
  }, $_render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$23$$.$__registerWidget$("oj.ojLedGauge", $$$$22$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{optionChange:null}, $_createComponent$:function($context$$47$$, $callback$$101$$, $callbackObj$$8$$) {
    return DvtLedGauge.newInstance($context$$47$$, $callback$$101$$, $callbackObj$$8$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$.push("oj-ledgauge");
    return $styleClasses$$13$$
  }, $_render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$23$$.$__registerWidget$("oj.ojRatingGauge", $$$$22$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_createComponent$:function($context$$48$$, $callback$$102$$, $callbackObj$$9$$) {
    return DvtRatingGauge.newInstance($context$$48$$, $callback$$102$$, $callbackObj$$9$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$.push("oj-ratinggauge");
    return $styleClasses$$14$$
  }, $_render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$23$$.$__registerWidget$("oj.ojStatusMeterGauge", $$$$22$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_createComponent$:function($context$$49$$, $callback$$103$$, $callbackObj$$10$$) {
    return DvtStatusMeterGauge.newInstance($context$$49$$, $callback$$103$$, $callbackObj$$10$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$.push("oj-statusmetergauge");
    return $styleClasses$$15$$
  }, $_render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }})
});
