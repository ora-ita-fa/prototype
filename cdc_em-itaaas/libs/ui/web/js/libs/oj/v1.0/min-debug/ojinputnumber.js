define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$31$$, $$$$31$$) {
  $oj$$31$$.$__registerWidget$("oj.ojInputNumber", $$$$31$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:$oj$$31$$.$Validation$.$converterFactory$($oj$$31$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER).createConverter(), max:void 0, min:void 0, readOnly:null, placeholder:void 0, step:void 0}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, $_ComponentCreate$:function() {
    this._super();
    this.$_draw$();
    this._on(this.$_events$);
    this._on(this.window, {beforeunload:function() {
      this.element.removeAttr("autocomplete")
    }});
    this.element.removeAttr("pattern");
    this.$_inputNumberDefaultValidators$ = {}
  }, $_AfterCreate$:function() {
    this._super();
    this._setOption("step", this.options.step);
    "boolean" !== typeof this.options.readOnly ? this.options.readOnly = !!this.element.prop("readonly") : this.element.prop("readonly", this.options.readOnly);
    this.$_refreshAriaMinMaxValue$();
    this.$_updateButtons$()
  }, $_InitOptions$:function() {
    this._super();
    null == this.options.value && (this.options.value = "" !== this.element.val() ? this.element.val() : null);
    this.options.value = this.$_coerceInputNumberValue$(this.options.value);
    var $that$$23$$ = this;
    $$$$31$$.each(["min", "max", "step"], function($index$$178$$, $value$$191$$) {
      void 0 === $that$$23$$.options[$value$$191$$] && ($that$$23$$.options[$value$$191$$] = $that$$23$$.element.attr($value$$191$$), null == $that$$23$$.options[$value$$191$$] && ($that$$23$$.options[$value$$191$$] = "step" === $value$$191$$ ? 1 : null));
      null != $that$$23$$.options[$value$$191$$] && ($that$$23$$.options[$value$$191$$] = "step" === $value$$191$$ ? $that$$23$$.$_parseStep$($that$$23$$.options[$value$$191$$]) : $that$$23$$.$_parse$($that$$23$$.options[$value$$191$$]))
    })
  }, $_GetDefaultValidators$:function() {
    var $ret$$40$$ = this._superApply(arguments), $min$$8$$ = null != this.options.min ? this.options.min : void 0, $max$$9$$ = null != this.options.max ? this.options.max : void 0, $numberRangeOptions$$ = {};
    if(null != $min$$8$$ || null != $max$$9$$) {
      $numberRangeOptions$$ = {min:$min$$8$$, max:$max$$9$$, converter:this.$_GetConverter$()}, this.$_createRangeValidator$($numberRangeOptions$$)
    }
    return $$$$31$$.extend(this.$_inputNumberDefaultValidators$, $ret$$40$$)
  }, $_events$:{keydown:function($event$$319$$) {
    $event$$319$$.keyCode === $$$$31$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$319$$), $event$$319$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$319$$) && $event$$319$$.preventDefault()
  }, keyup:function($event$$320$$) {
    this.$_stop$($event$$320$$)
  }, focus:function() {
    this.previous = this.element.val()
  }, blur:function($event$$321$$) {
    this.$cancelBlur$ ? delete this.$cancelBlur$ : this.$_blurEnterSetValue$($event$$321$$)
  }, "mousedown .oj-inputnumber-button":function($event$$322$$) {
    function $checkFocus$$1$$() {
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = $previous$$, this._delay(function() {
        this.previous = $previous$$
      }))
    }
    var $previous$$;
    $previous$$ = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
    $event$$322$$.preventDefault();
    $checkFocus$$1$$.call(this);
    this.$cancelBlur$ = !0;
    this._delay(function() {
      delete this.$cancelBlur$;
      $checkFocus$$1$$.call(this)
    });
    this.$_start$();
    this.$_repeat$(null, $$$$31$$($event$$322$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$322$$)
  }, "mouseup .oj-inputnumber-button":function($event$$323$$) {
    this.$_stop$($event$$323$$)
  }, "mouseenter .oj-inputnumber-button":function($event$$324$$) {
    $$$$31$$($event$$324$$.currentTarget).hasClass("oj-active") && (this.$_start$(), this.$_repeat$(null, $$$$31$$($event$$324$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$324$$))
  }, "mouseleave .oj-inputnumber-button":function($event$$325$$) {
    this.$_stop$($event$$325$$)
  }}, $_draw$:function() {
    var $uiInputNumber$$ = this.$uiInputNumber$ = this.element.addClass("oj-inputnumber-input").attr("autocomplete", "off").wrap("\x3cspan class\x3d'oj-inputnumber oj-component'\x3e\x3c/span\x3e").parent().append("\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e");
    this.saveType = this.element.prop("type");
    this.element.attr("type", "text");
    var $incrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_INCREMENT$), $decrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_DECREMENT$);
    $uiInputNumber$$.find(".oj-inputnumber-up").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-up-icon"}, label:$incrementString$$});
    $uiInputNumber$$.find(".oj-inputnumber-down").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-down-icon"}, label:$decrementString$$});
    this.buttons = $uiInputNumber$$.find(".oj-inputnumber-button").attr("tabIndex", "-1").attr("aria-hidden", !0);
    this.options.disabled && this.disable();
    this.options.readOnly && this._setOption("readOnly", !0)
  }, $_keydown$:function($event$$326$$) {
    var $keyCode$$6$$ = $$$$31$$.ui.keyCode;
    switch($event$$326$$.keyCode) {
      case $keyCode$$6$$.UP:
        return this.$_repeat$(null, 1, $event$$326$$), !0;
      case $keyCode$$6$$.DOWN:
        return this.$_repeat$(null, -1, $event$$326$$), !0
    }
    return!1
  }, $_uiInputNumberHtml$:$JSCompiler_returnArg$$("\x3cspan class\x3d'oj-inputnumber oj-component'\x3e\x3c/span\x3e"), $_buttonHtml$:$JSCompiler_returnArg$$("\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e"), $_start$:function() {
    return this.$spinning$ = !0
  }, $_repeat$:function($i$$262$$, $steps$$, $event$$327$$) {
    $i$$262$$ = $i$$262$$ || 500;
    clearTimeout(this.$timer$);
    this.$timer$ = this._delay(function() {
      this.$_repeat$(40, $steps$$, $event$$327$$)
    }, $i$$262$$);
    this.$_spin$($steps$$ * this.options.step, $event$$327$$)
  }, $_spin$:function($step$$, $event$$328$$) {
    var $displayValue$$6_value$$192$$ = this.$_GetDisplayValue$() || 0, $displayValue$$6_value$$192$$ = this.$_parseValue$($displayValue$$6_value$$192$$), $displayValue$$6_value$$192$$ = this.$_adjustValue$($displayValue$$6_value$$192$$, $step$$);
    this.$_SetValue$($displayValue$$6_value$$192$$, $event$$328$$, this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$)
  }, $_precision$:function() {
    var $precision$$1$$ = this.$_precisionOf$(this.options.step);
    null != this.options.min && ($precision$$1$$ = Math.max($precision$$1$$, this.$_precisionOf$(this.options.min)));
    return $precision$$1$$
  }, $_precisionOf$:function($num$$9_str$$19$$) {
    $num$$9_str$$19$$ = $num$$9_str$$19$$.toString();
    var $decimal$$ = $num$$9_str$$19$$.indexOf(".");
    return-1 === $decimal$$ ? 0 : $num$$9_str$$19$$.length - $decimal$$ - 1
  }, $_adjustValue$:function($value$$193$$, $step$$1$$) {
    var $aboveMin_newValue$$7$$, $stepBase_validMax$$, $options$$289$$ = this.options, $precision$$2$$ = this.$_precision$();
    $stepBase_validMax$$ = null != $options$$289$$.min ? $options$$289$$.min : 0;
    $aboveMin_newValue$$7$$ = $value$$193$$ - $stepBase_validMax$$;
    var $rounded$$1$$ = Math.round($aboveMin_newValue$$7$$ / $options$$289$$.step) * $options$$289$$.step, $rounded$$1$$ = parseFloat($rounded$$1$$.toFixed($precision$$2$$));
    $rounded$$1$$ !== $aboveMin_newValue$$7$$ ? ($aboveMin_newValue$$7$$ = 0 > $step$$1$$ ? Math.ceil($aboveMin_newValue$$7$$ / $options$$289$$.step) * $options$$289$$.step : Math.floor($aboveMin_newValue$$7$$ / $options$$289$$.step) * $options$$289$$.step, $aboveMin_newValue$$7$$ = $stepBase_validMax$$ + $aboveMin_newValue$$7$$ + $step$$1$$) : $aboveMin_newValue$$7$$ = $value$$193$$ + $step$$1$$;
    $aboveMin_newValue$$7$$ = parseFloat($aboveMin_newValue$$7$$.toFixed($precision$$2$$));
    return null != $options$$289$$.min && $aboveMin_newValue$$7$$ < $options$$289$$.min ? $options$$289$$.min : null != $options$$289$$.max && $aboveMin_newValue$$7$$ > $options$$289$$.max ? ($stepBase_validMax$$ = Math.floor(($options$$289$$.max - $stepBase_validMax$$) / $options$$289$$.step) * $options$$289$$.step + $stepBase_validMax$$, $stepBase_validMax$$ = parseFloat($stepBase_validMax$$.toFixed($precision$$2$$))) : $aboveMin_newValue$$7$$
  }, $_stop$:function() {
    this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1)
  }, $_updateButtons$:function() {
    var $value$$194$$ = this.$_GetDisplayValue$() || 0, $min$$9$$ = this.options.min, $max$$10$$ = this.options.max;
    if(this.$uiInputNumber$) {
      var $downButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton(), $upButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton();
      this.options.disabled ? ($downButton$$.ojButton("disable"), $upButton$$.ojButton("disable")) : null != $max$$10$$ && $value$$194$$ >= $max$$10$$ ? ($downButton$$.ojButton("enable"), $upButton$$.ojButton("disable")) : (null != $min$$9$$ && $value$$194$$ <= $min$$9$$ ? $downButton$$.ojButton("disable") : $downButton$$.ojButton("enable"), $upButton$$.ojButton("enable"))
    }
  }, $_blurEnterSetValue$:function($event$$330$$) {
    this.$_stop$();
    this.previous !== this.element.val() && this.$_SetValue$(this.element.val(), $event$$330$$)
  }, _setOption:function($key$$109$$, $value$$195$$) {
    "value" === $key$$109$$ && ($value$$195$$ = this.$_coerceInputNumberValue$($value$$195$$));
    "max" !== $key$$109$$ && "min" !== $key$$109$$ || "string" !== typeof $value$$195$$ || ($value$$195$$ = this.$_parse$($value$$195$$));
    "step" === $key$$109$$ && ($value$$195$$ = this.$_parseStep$($value$$195$$));
    this._super($key$$109$$, $value$$195$$);
    "disabled" === $key$$109$$ && ($value$$195$$ ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1));
    "readOnly" === $key$$109$$ && ($value$$195$$ ? this.element.prop("readonly", !0) : this.element.prop("readonly", !1))
  }, option:function($key$$110$$, $value$$196$$) {
    var $retVal$$14$$ = this._superApply(arguments);
    if("max" === $key$$110$$ || "min" === $key$$110$$ || "object" === typeof $key$$110$$ && (void 0 !== $key$$110$$.min || void 0 !== $key$$110$$.max)) {
      var $min$$10_numberRangeOptions$$1$$ = void 0, $max$$11$$ = void 0;
      "max" === $key$$110$$ ? $max$$11$$ = null != $value$$196$$ ? $value$$196$$ : void 0 : "min" === $key$$110$$ ? $min$$10_numberRangeOptions$$1$$ = null != $value$$196$$ ? $value$$196$$ : void 0 : (void 0 !== $key$$110$$.max && ($max$$11$$ = null != $key$$110$$.max ? $key$$110$$.max : void 0), void 0 !== $key$$110$$.min && ($min$$10_numberRangeOptions$$1$$ = null != $key$$110$$.min ? $key$$110$$.min : void 0));
      $min$$10_numberRangeOptions$$1$$ = {min:$min$$10_numberRangeOptions$$1$$, max:$max$$11$$, converter:this.$_GetConverter$()};
      this.$_createRangeValidator$($min$$10_numberRangeOptions$$1$$);
      this.$_ResetAllValidators$()
    }
    return $retVal$$14$$
  }, $_createRangeValidator$:function($options$$290$$) {
    this.$_inputNumberDefaultValidators$[$oj$$31$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE] = $oj$$31$$.$Validation$.$validatorFactory$($oj$$31$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE).createValidator($options$$290$$)
  }, $_coerceInputNumberValue$:function($val$$55$$) {
    if(null !== $val$$55$$) {
      return+$val$$55$$
    }
  }, $_parse$:function($parsedVal_val$$56$$) {
    if(null === $parsedVal_val$$56$$) {
      return $parsedVal_val$$56$$
    }
    $parsedVal_val$$56$$ = "string" === typeof $parsedVal_val$$56$$ && "" !== $parsedVal_val$$56$$ ? +$parsedVal_val$$56$$ : parseFloat($parsedVal_val$$56$$);
    return isNaN($parsedVal_val$$56$$) ? ($oj$$31$$.$Logger$.error("min or max or step is not a number"), null) : $parsedVal_val$$56$$
  }, $_parseStep$:function($parsedStep_val$$57$$) {
    if(null === $parsedStep_val$$57$$) {
      return 1
    }
    $parsedStep_val$$57$$ = this.$_parse$($parsedStep_val$$57$$);
    if(null === $parsedStep_val$$57$$ || 0 >= $parsedStep_val$$57$$) {
      $parsedStep_val$$57$$ = 1
    }
    return $parsedStep_val$$57$$
  }, $_refreshAriaMinMaxValue$:function() {
    var $valuenow$$ = this.$_parse$(this.options.value), $valuetext$$ = this.element.val();
    this.element.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$});
    this.$_ValueEquals$("" + $valuenow$$, $valuetext$$) || this.element.attr({"aria-valuetext":$valuetext$$})
  }, $_Refresh$:function($name$$97$$, $value$$197$$) {
    this._super($name$$97$$, $value$$197$$);
    "value" !== $name$$97$$ && "max" !== $name$$97$$ && "min" !== $name$$97$$ || this.$_refreshAriaMinMaxValue$();
    this.$_updateButtons$()
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-inputnumber"), _destroy:function() {
    this.element.removeClass("oj-inputnumber-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeAttr("aria-valuetext").removeAttr("aria-disabled");
    this.element.attr("type", this.saveType);
    this._super();
    this._off(this.element, "keydown keyup focus blur mousedown mouseup mouseenter mouseleave");
    this.$uiInputNumber$.replaceWith(this.element);
    clearTimeout(this.$timer$)
  }, getNodeBySubId:function($locator$$20_subId$$14$$) {
    if(null == $locator$$20_subId$$14$$) {
      return this.element ? this.element[0] : null
    }
    $locator$$20_subId$$14$$ = $locator$$20_subId$$14$$.subId;
    return"oj-inputnumber-up" === $locator$$20_subId$$14$$ ? this.widget().find(".oj-inputnumber-up")[0] : "oj-inputnumber-down" === $locator$$20_subId$$14$$ ? this.widget().find(".oj-inputnumber-down")[0] : "oj-inputnumber-input" === $locator$$20_subId$$14$$ ? this.widget().find(".oj-inputnumber-input")[0] : null
  }, $_CanSetValue$:function() {
    return!this._super() || this.options.readOnly ? !1 : !0
  }, stepUp:function($steps$$1$$) {
    this.$_step$($steps$$1$$, !0)
  }, stepDown:function($steps$$2$$) {
    this.$_step$($steps$$2$$, !1)
  }, $_step$:function($steps$$3$$, $up$$) {
    this.$_start$();
    $up$$ ? this.$_spin$(($steps$$3$$ || 1) * this.options.step) : this.$_spin$(($steps$$3$$ || 1) * -this.options.step);
    this.$_stop$()
  }, widget:$JSCompiler_get$$("$uiInputNumber$")})
});
