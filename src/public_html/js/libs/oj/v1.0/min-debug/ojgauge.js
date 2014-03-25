define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtGauge"], function($oj$$22$$, $$$$21$$) {
  $oj$$22$$.$__registerWidget$("oj.dvtBaseGauge", $$$$21$$.oj.dvtBaseComponent, {option:function($key$$104$$, $value$$199$$) {
    var $previousValue$$6$$, $newValue$$10_valueOptionSet$$1$$ = !1;
    "string" === typeof $key$$104$$ && void 0 !== $value$$199$$ ? "value" === $key$$104$$ && ($newValue$$10_valueOptionSet$$1$$ = !0, $previousValue$$6$$ = this.options.value) : "object" === typeof $key$$104$$ && $key$$104$$ && void 0 !== $key$$104$$.value && ($newValue$$10_valueOptionSet$$1$$ = !0, $previousValue$$6$$ = this.options.value);
    var $ret$$29$$ = this._superApply(arguments);
    $newValue$$10_valueOptionSet$$1$$ && ($newValue$$10_valueOptionSet$$1$$ = this.options.value, $oj$$22$$.$Object$.$innerEquals$($previousValue$$6$$, $newValue$$10_valueOptionSet$$1$$) || this._trigger("optionChange", null, {option:"value", previousValue:$previousValue$$6$$, value:$newValue$$10_valueOptionSet$$1$$}));
    return $ret$$29$$
  }, $_getChildStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$["oj-gauge-metric-label"] = {path:"metricLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-gauge-tick-label"] = {path:"tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$11$$
  }, $_getTranslationMap$:function() {
    var $superMap$$3$$ = this._super(), $selfMap$$3$$ = {"oj-ojDvtCommon.msgNoData":"DvtGaugeBundle.EMPTY_TEXT"}, $ret$$30$$ = {}, $key$$105$$;
    for($key$$105$$ in $superMap$$3$$) {
      $ret$$30$$[$key$$105$$] = $superMap$$3$$[$key$$105$$]
    }
    for($key$$105$$ in $selfMap$$3$$) {
      $ret$$30$$[$key$$105$$] = $selfMap$$3$$[$key$$105$$]
    }
    return $ret$$30$$
  }, $_handleEvent$:function($event$$294$$) {
    var $type$$85$$ = $event$$294$$ && $event$$294$$.getType ? $event$$294$$.getType() : null;
    $type$$85$$ === DvtValueChangeEvent.TYPE ? this.option("value", $event$$294$$.getNewValue()) : $type$$85$$ === DvtValueChangeEvent.TYPE_INPUT ? this._trigger("input", null, {value:$event$$294$$.getNewValue()}) : this._super($event$$294$$)
  }});
  $oj$$22$$.$__registerWidget$("oj.ojDialGauge", $$$$21$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_createComponent$:function($context$$45$$, $callback$$96$$, $callbackObj$$7$$) {
    return DvtDialGauge.newInstance($context$$45$$, $callback$$96$$, $callbackObj$$7$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$.push("oj-dialgauge");
    return $styleClasses$$12$$
  }, $_render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$22$$.$__registerWidget$("oj.ojLedGauge", $$$$21$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{optionChange:null}, $_createComponent$:function($context$$46$$, $callback$$97$$, $callbackObj$$8$$) {
    return DvtLedGauge.newInstance($context$$46$$, $callback$$97$$, $callbackObj$$8$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$.push("oj-ledgauge");
    return $styleClasses$$13$$
  }, $_render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$22$$.$__registerWidget$("oj.ojRatingGauge", $$$$21$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_createComponent$:function($context$$47$$, $callback$$98$$, $callbackObj$$9$$) {
    return DvtRatingGauge.newInstance($context$$47$$, $callback$$98$$, $callbackObj$$9$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$.push("oj-ratinggauge");
    return $styleClasses$$14$$
  }, $_render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }});
  $oj$$22$$.$__registerWidget$("oj.ojStatusMeterGauge", $$$$21$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_createComponent$:function($context$$48$$, $callback$$99$$, $callbackObj$$10$$) {
    return DvtStatusMeterGauge.newInstance($context$$48$$, $callback$$99$$, $callbackObj$$10$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$.push("oj-statusmetergauge");
    return $styleClasses$$15$$
  }, $_render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super()
  }})
});
