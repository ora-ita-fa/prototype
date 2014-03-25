define(["ojs/ojcore", "jquery", "jqueryui"], function($oj$$2$$, $$$$2$$) {
  function $_defineDynamicProperty$$($self$$23$$, $options$$92$$, $prop$$47$$, $getter$$, $contextCallback$$) {
    var $override$$ = $options$$92$$[$prop$$47$$];
    Object.defineProperty($options$$92$$, $prop$$47$$, {get:function() {
      if($prop$$47$$ === $self$$23$$.$_settingOption$) {
        return $override$$ || {}
      }
      if(void 0 !== $override$$ && !$$$$2$$.isPlainObject($override$$)) {
        return $override$$
      }
      var $defaults$$ = $getter$$($contextCallback$$ ? $contextCallback$$() : $prop$$47$$);
      return $$$$2$$.isPlainObject($defaults$$) ? $$$$2$$.widget.extend({}, $defaults$$ || {}, $override$$ || {}) : void 0 === $override$$ ? $defaults$$ : $override$$
    }, set:function($value$$62$$) {
      $override$$ = $value$$62$$
    }, enumerable:!0})
  }
  $oj$$2$$.Components = {};
  $goog$exportPath_$$("Components", $oj$$2$$.Components, $oj$$2$$);
  $oj$$2$$.Components.$setDefaultOptions$ = function $$oj$$2$$$Components$$setDefaultOptions$$($options$$93$$) {
    $oj$$2$$.Components.$_defaultProperties$ = $$$$2$$.widget.extend($oj$$2$$.Components.$_defaultProperties$ || {}, $options$$93$$)
  };
  $goog$exportPath_$$("Components.setDefaultOptions", $oj$$2$$.Components.$setDefaultOptions$, $oj$$2$$);
  $oj$$2$$.Components.$getDefaultOptions$ = function $$oj$$2$$$Components$$getDefaultOptions$$() {
    return $oj$$2$$.Components.$_defaultProperties$ || {}
  };
  $goog$exportPath_$$("Components.getDefaultOptions", $oj$$2$$.Components.$getDefaultOptions$, $oj$$2$$);
  $oj$$2$$.Components.$getWidgetConstructor$ = function $$oj$$2$$$Components$$getWidgetConstructor$$($element$$12$$, $widgetName$$2$$) {
    var $jelem$$ = $$$$2$$($element$$12$$);
    if(null == $widgetName$$2$$) {
      var $data$$41_func$$7$$ = $jelem$$.data($_OJ_WIDGET_NAMES_DATA$$);
      $data$$41_func$$7$$ && ($widgetName$$2$$ = $data$$41_func$$7$$[0])
    }
    return null != $widgetName$$2$$ && ($data$$41_func$$7$$ = $jelem$$[$widgetName$$2$$], "function" === typeof $data$$41_func$$7$$) ? $data$$41_func$$7$$.bind($jelem$$) : null
  };
  $goog$exportPath_$$("Components.getWidgetConstructor", $oj$$2$$.Components.$getWidgetConstructor$, $oj$$2$$);
  $oj$$2$$.Components.$_OJ_CONTAINER_ATTR$ = "data-oj-container";
  var $_OJ_WIDGET_NAMES_DATA$$ = "oj-widget-names";
  $$$$2$$.widget("oj.baseComponent", {options:{contextMenu:{menu:null}}, refresh:function() {
    this.$_propertyContext$ = null
  }, _createWidget:function($options$$94$$, $element$$13$$) {
    this.activeable = $$$$2$$();
    this._super($options$$94$$, $element$$13$$);
    var $element$$inline_331$$ = this.element, $widgetName$$inline_332$$ = this.widgetName, $data$$inline_333$$ = $element$$inline_331$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_333$$ || ($data$$inline_333$$ = [], $element$$inline_331$$.data($_OJ_WIDGET_NAMES_DATA$$, $data$$inline_333$$));
    0 > $data$$inline_333$$.indexOf($widgetName$$inline_332$$) && $data$$inline_333$$.push($widgetName$$inline_332$$)
  }, _create:function() {
    this.$_setDefaultProperties$();
    this.$contextMenuEventNamespace$ = this.eventNamespace + "contextMenu";
    this.$_setupContextMenu$();
    this.$_savedAttributes$ = [];
    this._SaveAttributes(this.element)
  }, _SaveAttributes:function($element$$14$$) {
    var $self$$24$$ = this;
    $$$$2$$.each($element$$14$$, function($index$$66$$, $ele$$1$$) {
      var $saveAttributes$$ = {}, $attributes$$10$$ = $ele$$1$$.attributes;
      $self$$24$$.$_savedAttributes$.push({element:$ele$$1$$, attributes:$saveAttributes$$});
      $$$$2$$.each($attributes$$10$$, function($index$$67$$, $attr$$10$$) {
        var $nodeName$$2$$ = $attr$$10$$.name, $nodeAttribute$$ = {attr:$attr$$10$$.value};
        $nodeAttribute$$.prop = $$$$2$$($ele$$1$$).prop($nodeName$$2$$);
        $saveAttributes$$[$nodeName$$2$$] = $nodeAttribute$$
      })
    })
  }, _GetSavedAttributes:function($element$$15$$) {
    var $savedAttributes$$ = this.$_savedAttributes$;
    $element$$15$$ = $element$$15$$[0];
    for(var $i$$64$$ = 0, $j$$5$$ = $savedAttributes$$.length;$i$$64$$ < $j$$5$$;$i$$64$$++) {
      var $curr$$ = $savedAttributes$$[$i$$64$$];
      if($curr$$.element === $element$$15$$) {
        return $curr$$.attributes
      }
    }
    return{}
  }, _RestoreAttributes:function() {
    $$$$2$$.each(this.$_savedAttributes$, function($index$$68$$, $savedAttr$$) {
      var $element$$16$$ = $$$$2$$($savedAttr$$.element), $attributes$$11$$ = $savedAttr$$.attributes;
      if(1 === $element$$16$$.length) {
        for(var $currAttr$$ = $savedAttr$$.element.attributes, $removeAttr$$ = [], $i$$65$$ = 0, $j$$6$$ = $currAttr$$.length;$i$$65$$ < $j$$6$$;$i$$65$$++) {
          $currAttr$$[$i$$65$$].name in $attributes$$11$$ || $removeAttr$$.push($currAttr$$[$i$$65$$].name)
        }
        $i$$65$$ = 0;
        for($j$$6$$ = $removeAttr$$.length;$i$$65$$ < $j$$6$$;$i$$65$$++) {
          $element$$16$$.removeAttr($removeAttr$$[$i$$65$$])
        }
        for(var $attribute$$1$$ in $attributes$$11$$) {
          $element$$16$$.attr($attribute$$1$$, $attributes$$11$$[$attribute$$1$$].attr)
        }
      }
    })
  }, $_RegisterTranslatedOptionGetters$:function($getters$$) {
    var $sectionName$$ = this.$_GetTranslationsSectionName$(), $translations$$2$$ = $oj$$2$$.$Translations$.$getComponentTranslations$($sectionName$$) || {}, $prop$$48$$;
    for($prop$$48$$ in $translations$$2$$) {
      $getters$$[$prop$$48$$] = function $$getters$$$$prop$$48$$$($name$$70$$) {
        return $oj$$2$$.$Translations$.$getComponentTranslations$($sectionName$$)[$name$$70$$]
      }
    }
  }, $_GetTranslationsSectionName$:$JSCompiler_get$$("widgetFullName"), $getTranslatedString$:function($key$$26$$, $var_args$$44$$) {
    var $params$$2$$ = {}, $pattern$$2$$;
    2 < arguments.length ? $params$$2$$ = Array.prototype.slice.call(arguments, 1) : 2 == arguments.length && ($params$$2$$ = arguments[1], "object" === typeof $params$$2$$ || $params$$2$$ instanceof Array || ($params$$2$$ = [$params$$2$$]));
    $pattern$$2$$ = this.options[$key$$26$$];
    return null == $pattern$$2$$ ? $key$$26$$ : $oj$$2$$.$Translations$.$applyParameters$($pattern$$2$$.toString(), $params$$2$$)
  }, getNodeBySubId:function($locator$$) {
    return null == $locator$$ || $locator$$.subId ? this.element ? this.element[0] : null : null
  }, destroy:function() {
    this.$_unbindContextMenu$();
    this._super();
    this.widget().removeClass("oj-disabled");
    this.hoverable.removeClass("oj-hover");
    this.focusable.removeClass("oj-focus");
    this.activeable.removeClass("oj-active");
    var $element$$inline_335$$ = this.element, $index$$inline_338_widgetName$$inline_336$$ = this.widgetName, $data$$inline_337$$ = $element$$inline_335$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_337$$ && ($index$$inline_338_widgetName$$inline_336$$ = $data$$inline_337$$.indexOf($index$$inline_338_widgetName$$inline_336$$), 0 <= $index$$inline_338_widgetName$$inline_336$$ && ($data$$inline_337$$.splice($index$$inline_338_widgetName$$inline_336$$, 1), 0 === $data$$inline_337$$.length && $element$$inline_335$$.removeData($_OJ_WIDGET_NAMES_DATA$$)))
  }, option:function($key$$27$$, $value$$63$$) {
    var $retval$$;
    if(0 < arguments.length && "string" === typeof $key$$27$$ && void 0 !== $value$$63$$) {
      var $dotIndex$$ = $key$$27$$.indexOf(".");
      0 < $dotIndex$$ && (this.$_settingOption$ = $key$$27$$.substring(0, $dotIndex$$))
    }
    try {
      $retval$$ = this._superApply(arguments)
    }finally {
      return this.$_settingOption$ = null, $retval$$
    }
  }, _setOption:function($key$$28$$, $value$$64$$) {
    "disabled" === $key$$28$$ ? (this.options[$key$$28$$] = $value$$64$$, this.widget().toggleClass("oj-disabled", !!$value$$64$$).attr("aria-disabled", $value$$64$$), $value$$64$$ && (this.hoverable.removeClass("oj-hover"), this.focusable.removeClass("oj-focus"), this.activeable.removeClass("oj-active"))) : (this._super($key$$28$$, $value$$64$$), "contextMenu" === $key$$28$$ && this.$_setupContextMenu$());
    return this
  }, $_setupContextMenu$:function() {
    this.$_unbindContextMenu$();
    var $menu$$ = this.options.contextMenu;
    $menu$$ && ($menu$$ = $menu$$.menu);
    $menu$$ || ($menu$$ = this.element.attr("contextmenu"));
    $menu$$ && ($menu$$ = $$$$2$$("#" + $menu$$).data("oj-ojMenu"));
    if($menu$$) {
      var $self$$25$$ = this;
      this.$_listenerNodes$().on("keydown" + this.$contextMenuEventNamespace$ + " contextmenu" + this.$contextMenuEventNamespace$, function($event$$16$$) {
        return"contextmenu" === $event$$16$$.type || 121 == $event$$16$$.which && $event$$16$$.shiftKey ? ($self$$25$$.$_showContextMenu$($menu$$, $event$$16$$), !1) : !0
      })
    }
  }, $_unbindContextMenu$:function() {
    this.$_listenerNodes$().off(this.$contextMenuEventNamespace$)
  }, $_showContextMenu$:function($menu$$1$$, $event$$17$$) {
    $menu$$1$$.show($event$$17$$, {launcher:this.element, focus:"menu"})
  }, $_listenerNodes$:function() {
    var $widget$$ = this.widget();
    return $widget$$ ? $widget$$ : $$$$2$$()
  }, _hoverable:function($element$$17$$) {
    this.hoverable = this.hoverable.add($element$$17$$);
    this._on($element$$17$$, {mouseenter:function($event$$18$$) {
      $$$$2$$($event$$18$$.currentTarget).addClass("oj-hover")
    }, mouseleave:function($event$$19$$) {
      $$$$2$$($event$$19$$.currentTarget).removeClass("oj-hover")
    }})
  }, _focusable:function($element$$18$$) {
    this.focusable = this.focusable.add($element$$18$$);
    this._on($element$$18$$, {focusin:function($event$$20$$) {
      $$$$2$$($event$$20$$.currentTarget).addClass("oj-focus")
    }, focusout:function($event$$21$$) {
      $$$$2$$($event$$21$$.currentTarget).removeClass("oj-focus")
    }})
  }, $_activeable$:function($element$$19$$) {
    this.activeable = this.activeable.add($element$$19$$);
    this._on($element$$19$$, {mousedown:function($event$$22$$) {
      $$$$2$$($event$$22$$.currentTarget).addClass("oj-active")
    }, mouseup:function($event$$23$$) {
      $$$$2$$($event$$23$$.currentTarget).removeClass("oj-active")
    }})
  }, $getResource$:function($key$$29$$) {
    return this.options[$key$$29$$]
  }, _GetReadingDirection:function() {
    return"rtl" === document.documentElement.dir ? "rtl" : "ltr"
  }, $_getDynamicPropertyContext$:function() {
    if(!this.$_propertyContext$) {
      var $c$$16$$ = {};
      this.$_propertyContext$ = $c$$16$$;
      for(var $elem$$inline_340$$ = this.element[0], $containers$$inline_341$$ = [];$elem$$inline_340$$;) {
        var $ga$$inline_342_name$$inline_343$$ = $elem$$inline_340$$.getAttribute, $ga$$inline_342_name$$inline_343$$ = $ga$$inline_342_name$$inline_343$$ ? $ga$$inline_342_name$$inline_343$$.call($elem$$inline_340$$, $oj$$2$$.Components.$_OJ_CONTAINER_ATTR$) : null;
        null != $ga$$inline_342_name$$inline_343$$ && $containers$$inline_341$$.push($ga$$inline_342_name$$inline_343$$);
        $elem$$inline_340$$ = $elem$$inline_340$$.parentNode
      }
      $c$$16$$.containers = $containers$$inline_341$$
    }
    return this.$_propertyContext$
  }, $_setDefaultProperties$:function() {
    function $contextCallback$$1$$() {
      return $self$$26$$.$_getDynamicPropertyContext$()
    }
    for(var $val$$16_widgetHierNames$$ = [], $defaults$$1_proto$$1$$ = this.constructor.prototype;null != $defaults$$1_proto$$1$$ && $defaults$$1_proto$$1$$.widgetName;) {
      $val$$16_widgetHierNames$$.push($defaults$$1_proto$$1$$.widgetName), $defaults$$1_proto$$1$$ = Object.getPrototypeOf($defaults$$1_proto$$1$$)
    }
    $val$$16_widgetHierNames$$.push("default");
    for(var $defaults$$1_proto$$1$$ = {}, $allProperties_current$$1$$ = $oj$$2$$.Components.$getDefaultOptions$(), $i$$66$$ = $val$$16_widgetHierNames$$.length;0 <= $i$$66$$;$i$$66$$--) {
      var $props$$2$$ = $allProperties_current$$1$$[$val$$16_widgetHierNames$$[$i$$66$$]];
      void 0 !== $props$$2$$ && ($defaults$$1_proto$$1$$ = $$$$2$$.widget.extend($defaults$$1_proto$$1$$, $props$$2$$))
    }
    var $self$$26$$ = this, $getters$$1_prop$$49$$;
    for($getters$$1_prop$$49$$ in $defaults$$1_proto$$1$$) {
      if($val$$16_widgetHierNames$$ = $defaults$$1_proto$$1$$[$getters$$1_prop$$49$$], $allProperties_current$$1$$ = this.options[$getters$$1_prop$$49$$], void 0 === $allProperties_current$$1$$ || $$$$2$$.isPlainObject($allProperties_current$$1$$)) {
        $$$$2$$.isFunction($val$$16_widgetHierNames$$) ? $_defineDynamicProperty$$(this, this.options, $getters$$1_prop$$49$$, $val$$16_widgetHierNames$$, $contextCallback$$1$$) : $$$$2$$.isPlainObject($val$$16_widgetHierNames$$) ? this.options[$getters$$1_prop$$49$$] = $$$$2$$.widget.extend({}, $val$$16_widgetHierNames$$, $allProperties_current$$1$$ || {}) : void 0 === $allProperties_current$$1$$ && (this.options[$getters$$1_prop$$49$$] = $val$$16_widgetHierNames$$)
      }
    }
    $getters$$1_prop$$49$$ = {};
    this.$_RegisterTranslatedOptionGetters$($getters$$1_prop$$49$$);
    for(var $prp$$ in $getters$$1_prop$$49$$) {
      $_defineDynamicProperty$$(this, this.options, $prp$$, $getters$$1_prop$$49$$[$prp$$])
    }
  }});
  $oj$$2$$.$__registerWidget$ = function $$oj$$2$$$$__registerWidget$$($name$$72_namespace$$2$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$) {
    $$$$2$$.widget($name$$72_namespace$$2$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$);
    if("oj.oj" === $name$$72_namespace$$2$$.substring(0, 5) || "oj._oj" === $name$$72_namespace$$2$$.substring(0, 6)) {
      $base$$3_nameArray_simpleName$$ = $name$$72_namespace$$2$$.split(".");
      $name$$72_namespace$$2$$ = $base$$3_nameArray_simpleName$$[0];
      $base$$3_nameArray_simpleName$$ = $base$$3_nameArray_simpleName$$[1];
      var $fullName$$ = $name$$72_namespace$$2$$ + "-" + $base$$3_nameArray_simpleName$$;
      $$$$2$$.expr[":"][("_" === $base$$3_nameArray_simpleName$$.substring(0, 1) ? "_" + $name$$72_namespace$$2$$ + "-" + $base$$3_nameArray_simpleName$$.substring(3) : $name$$72_namespace$$2$$ + "-" + $base$$3_nameArray_simpleName$$.substring(2)).toLowerCase()] = function $$$$$2$$$expr$__1$_$$base$$3_nameArray_simpleName$$$substring$_$$name$$72_namespace$$2$$$__2$$base$$3_nameArray_simpleName$$$substring$$name$$72_namespace$$2$$$__3$$base$$3_nameArray_simpleName$$$substring$toLowerCase$($elem$$13$$) {
        return!!$$$$2$$.data($elem$$13$$, $fullName$$)
      }
    }
  };
  $oj$$2$$.$editableValue$ = $$$$2$$.widget("oj.editableValue", $$$$2$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{converter:null, disabled:null, help:{definition:null, source:null}, messages:null, messagingDisplayOptions:void 0, pattern:"", required:"", title:"", validators:null, value:null, optionChange:null, rootAttributes:void 0}, option:function($key$$30$$, $value$$65$$) {
    var $deleteSpecialEventKey_retVal$$4$$, $previousValue$$, $previousMsgs$$, $newValue_valueOptionSet$$ = !1, $originalEvent$$, $messagesOptionSet$$ = !1;
    $deleteSpecialEventKey_retVal$$4$$ = !1;
    var $refreshMessagingOptions$$ = !0, $placeholderOptionSet$$ = !1;
    if("string" === typeof $key$$30$$ && void 0 !== $value$$65$$) {
      switch($key$$30$$) {
        case "value":
          $newValue_valueOptionSet$$ = !0;
          $previousValue$$ = this.options.value;
          break;
        case "messages":
          $messagesOptionSet$$ = !0;
          $previousMsgs$$ = this.options.messages || [];
          break;
        case "messagingDisplayOptions":
          $$$$2$$.extend({}, this.options.messagingDisplayOptions)
      }
    }else {
      "object" === typeof $key$$30$$ && $key$$30$$ && (void 0 !== $key$$30$$.value && ($newValue_valueOptionSet$$ = !0, $previousValue$$ = this.options.value, $deleteSpecialEventKey_retVal$$4$$ = !0), void 0 !== $key$$30$$.messages && ($messagesOptionSet$$ = !0, $previousMsgs$$ = this.options.messages, $deleteSpecialEventKey_retVal$$4$$ = !0), $key$$30$$.messagingDisplayOptions && $$$$2$$.extend({}, this.options.messagingDisplayOptions), $key$$30$$.placeholder && ($placeholderOptionSet$$ = !0, $refreshMessagingOptions$$ = 
      $key$$30$$._oj_messaging_update ? !1 : !0, delete $key$$30$$._oj_messaging_update), $deleteSpecialEventKey_retVal$$4$$ && ($originalEvent$$ = $key$$30$$._oj_originalEvent, delete $key$$30$$._oj_originalEvent))
    }
    $deleteSpecialEventKey_retVal$$4$$ = this._superApply(arguments);
    $newValue_valueOptionSet$$ && ($newValue_valueOptionSet$$ = this.options.value, this._ValueEquals($previousValue$$, $newValue_valueOptionSet$$) || this._TriggerOptionChange("value", $previousValue$$, $originalEvent$$ || null));
    $messagesOptionSet$$ && !this._ValueEquals($previousMsgs$$, this.options.messages) && this._TriggerOptionChange("messages", $previousMsgs$$, $originalEvent$$ || null);
    $placeholderOptionSet$$ && $refreshMessagingOptions$$ && this.$_initComponentMessaging$();
    return $deleteSpecialEventKey_retVal$$4$$
  }, isValid:$JSCompiler_get$$("$__valid$"), refresh:function() {
    this._super();
    this._Refresh("value", this.options.value);
    this.$_refreshAria$("required", this.options.required);
    this.$_refreshTheming$("required", this.options.required);
    null !== this.$$label$ && this.$$label$._ojLabel("refresh")
  }, validate:function($requiredOnly$$) {
    this.$_doRunValidation$(this.options.value, void 0, $requiredOnly$$ ? this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$ : this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
    return this.isValid() ? !0 : !1
  }, $_VALIDATION_MODE$:{$FULL$:1, $VALIDATORS_ONLY$:2, $REQUIRED_VALIDATOR_ONLY$:3, NONE:4}, _create:function() {
    this._super();
    this.widget().addClass("oj-form-control");
    this.options.value || (this.options.value = this._GetElementValue());
    "boolean" !== typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
    this.$_createOjLabel$()
  }, _SaveAttributes:function($node$$5$$) {
    var $ret$$2$$ = this._superApply(arguments), $savedAttributes$$1$$ = this._GetSavedAttributes($node$$5$$);
    this.options.required || (this.options.required = "required" in $savedAttributes$$1$$ && $savedAttributes$$1$$.required.prop ? "required" : "optional");
    this.options.title || (this.options.title = "title" in $savedAttributes$$1$$ ? $savedAttributes$$1$$.title.prop || "" : "");
    this.options.pattern || (this.options.pattern = "pattern" in $savedAttributes$$1$$ ? $savedAttributes$$1$$.pattern.prop || "" : "");
    this.options.pattern && (this._GetDefaultValidators().regExp = this.$_getDefaultRegExpValidator$());
    $$$$2$$.each(["required", "title", "pattern"], function($index$$69$$, $value$$66$$) {
      $value$$66$$ in $savedAttributes$$1$$ && $node$$5$$.removeAttr($value$$66$$)
    });
    return $ret$$2$$
  }, _getCreateOptions:function() {
    var $allDefaults$$ = this._super();
    this._setDefaultMessagingOptions();
    return $allDefaults$$
  }, _init:function() {
    this._super();
    this.$_initComponentMessaging$();
    this.$_clearMessages$();
    this.refresh()
  }, _destroy:function() {
    var $widget$$1$$ = this.widget();
    this.$_clearMessages$(void 0, !0);
    this.$_getComponentMessaging$().$deactivate$(this.$_getMessagingContent$());
    $$$$2$$.each(this.$_OPTION_TO_CSS_MAPPING$, function() {
      $widget$$1$$.removeClass(this.toString())
    });
    $widget$$1$$.removeClass("oj-form-control");
    this.element.removeAttr("aria-required");
    null !== this.$$label$ && this.$$label$._ojLabel("destroy");
    return this._super()
  }, _setOption:function($name$$73$$, $value$$67$$) {
    var $retVal$$5$$ = this._superApply(arguments), $shouldRefresh$$ = !0, $hasMessages_maxLevel$$;
    $hasMessages_maxLevel$$ = 0;
    switch($name$$73$$) {
      case "converter":
        this.$__converter$ = null;
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$));
        break;
      case "validators":
        this._ResetAllValidators();
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$));
        $shouldRefresh$$ = !1;
        break;
      case "messages":
        ($hasMessages_maxLevel$$ = $value$$67$$ && 0 !== $value$$67$$.length) ? (this.$__maxSeverityLevel$ = 0, $hasMessages_maxLevel$$ = this.$_getMaxSeverity$(), this.$__valid$ = $hasMessages_maxLevel$$ >= $oj$$2$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !1 : !0) : (this.$__maxSeverityLevel$ = 0, this.$__valid$ = !0);
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$());
        break;
      case "messagingDisplayOptions":
        this.$__messagingDisplayOptions$ = null;
        this.$_initComponentMessaging$();
        break;
      case "pattern":
        this.$__defaultRegExpOptions$.pattern = $value$$67$$;
        $shouldRefresh$$ = !1;
        break;
      case "placeholder":
        this._SetPlaceholder($value$$67$$);
        $shouldRefresh$$ = !1;
        break;
      case "title":
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$))
    }
    $shouldRefresh$$ && (this._Refresh($name$$73$$, $value$$67$$), this.$_refreshAria$($name$$73$$, $value$$67$$), this.$_refreshTheming$($name$$73$$, $value$$67$$));
    return $retVal$$5$$
  }, _GetContentElement:$JSCompiler_get$$("element"), _GetLabelElement:function() {
    var $ariaElement_id$$9_queryResult$$ = this.$_getAriaLabelledByElement$(this.element);
    if(null !== $ariaElement_id$$9_queryResult$$ && 0 !== $ariaElement_id$$9_queryResult$$.length) {
      return $ariaElement_id$$9_queryResult$$
    }
    $ariaElement_id$$9_queryResult$$ = this.element.prop("id");
    if(void 0 !== $ariaElement_id$$9_queryResult$$ && ($ariaElement_id$$9_queryResult$$ = $$$$2$$("label[for\x3d'" + $ariaElement_id$$9_queryResult$$ + "']"), 0 !== $ariaElement_id$$9_queryResult$$.length)) {
      return $ariaElement_id$$9_queryResult$$
    }
    $ariaElement_id$$9_queryResult$$ = this.element.closest("[aria-labelledby]");
    return 0 !== $ariaElement_id$$9_queryResult$$.length && ($ariaElement_id$$9_queryResult$$ = this.$_getAriaLabelledByElement$($ariaElement_id$$9_queryResult$$), null !== $ariaElement_id$$9_queryResult$$ && 0 !== $ariaElement_id$$9_queryResult$$.length) ? $ariaElement_id$$9_queryResult$$ : null
  }, $_GetDefaultMessagingDisplayOptions$:function() {
    return $$$$2$$.extend({}, this.$__DEFAULT_MESSAGING_OPTIONS$)
  }, _GetElementValue:function() {
    return this.element.val()
  }, _GetMessagingTriggerElement:function() {
    return this._GetContentElement()
  }, _GetConverter:function() {
    this.$__converter$ || (this.$__converter$ = $oj$$2$$.$IntlConverterUtils$.getConverterInstance(this.options.converter));
    return this.$__converter$ || null
  }, _GetDefaultValidators:function() {
    this.$__defaultValidators$ || (this.$__defaultValidators$ = {});
    return this.$__defaultValidators$
  }, _GetDisplayValue:function() {
    return this._GetContentElement().val()
  }, _GetAllValidators:function() {
    if(!this.$__allValidators$) {
      var $allValidators$$ = [], $validatorsOption$$ = this.options.validators, $vOptions_validator$$1$$, $isValidatorInstance$$ = !0, $defaultValidatorMap_vType$$ = this._GetDefaultValidators(), $defaultValidators_normalizedValidators$$ = [], $vTypeStr$$, $i$$67_val$$17$$;
      for($i$$67_val$$17$$ in $defaultValidatorMap_vType$$) {
        $defaultValidatorMap_vType$$.hasOwnProperty($i$$67_val$$17$$) && $defaultValidators_normalizedValidators$$.push($defaultValidatorMap_vType$$[$i$$67_val$$17$$])
      }
      $allValidators$$ = $allValidators$$.concat($defaultValidators_normalizedValidators$$);
      if($validatorsOption$$) {
        $defaultValidators_normalizedValidators$$ = [];
        for($i$$67_val$$17$$ = 0;$i$$67_val$$17$$ < $validatorsOption$$.length;$i$$67_val$$17$$++) {
          $vOptions_validator$$1$$ = $validatorsOption$$[$i$$67_val$$17$$], "object" === typeof $vOptions_validator$$1$$ ? ($vOptions_validator$$1$$.validate && "function" === typeof $vOptions_validator$$1$$.validate || ($isValidatorInstance$$ = !1), $isValidatorInstance$$ || ($vTypeStr$$ = $vOptions_validator$$1$$.type) && "string" === typeof $vTypeStr$$ && (($defaultValidatorMap_vType$$ = $oj$$2$$.$Validation$.$validatorFactory$($vTypeStr$$)) ? ($vOptions_validator$$1$$ = $vOptions_validator$$1$$.options || 
          {}, $vOptions_validator$$1$$.converter = $vOptions_validator$$1$$.converter || this._GetConverter(), $vOptions_validator$$1$$ = $defaultValidatorMap_vType$$.createValidator($vOptions_validator$$1$$)) : $oj$$2$$.$Logger$.error("Unable to locate a validatorFactory for the requested type: " + $vTypeStr$$)), $defaultValidators_normalizedValidators$$.push($vOptions_validator$$1$$)) : $oj$$2$$.$Logger$.error("Unable to parse the validator provided:" + $vOptions_validator$$1$$)
        }
        $allValidators$$ = $allValidators$$.concat($defaultValidators_normalizedValidators$$)
      }
      this.$__allValidators$ = $allValidators$$
    }
    return this.$__allValidators$ || []
  }, _ResetAllValidators:function() {
    this.$__allValidators$ = null
  }, _IsRequired:function() {
    return"required" === this.options.required
  }, _HandleChangeEvent:function($event$$24$$) {
    var $submittedValue$$ = this._GetDisplayValue();
    this._SetValue($submittedValue$$, $event$$24$$)
  }, _Refresh:function($name$$74$$, $value$$69$$) {
    switch($name$$74$$) {
      case "converter":
        $value$$69$$ = this.options.value;
        this.$_refreshComponentDisplayValue$($value$$69$$, !0);
        break;
      case "value":
        this.$_refreshComponentDisplayValue$($value$$69$$);
        break;
      case "required":
        null !== this.$$label$ && this.$$label$._ojLabel("option", "required", $value$$69$$);
        break;
      case "help":
        var $helpDef$$ = this.options.help.definition, $helpSource$$ = this.options.help.source, $labelHelpIconWrapper$$ = this.$_ariaDescribedByHelpIconWrapper$($helpSource$$);
        null !== this.$$label$ && (this.$$label$._ojLabel("option", "describedById", $labelHelpIconWrapper$$), this.$$label$._ojLabel("option", "help", {definition:$helpDef$$, source:$helpSource$$}))
    }
  }, _RefreshAriaRequired:function($ariaValue_value$$70$$) {
    var $contentNode$$ = this._GetContentElement();
    ($ariaValue_value$$70$$ = "required" == $ariaValue_value$$70$$ ? !0 : !1) && $contentNode$$ ? $contentNode$$.attr("aria-required", $ariaValue_value$$70$$) : $contentNode$$.removeAttr("aria-required")
  }, _SetDisplayValue:function($displayValue$$) {
    this._GetContentElement().val($displayValue$$)
  }, _SetValue:function($newValue$$2$$, $event$$25$$, $mode$$9_options$$95$$) {
    var $previousValue$$1$$ = this.options.value, $runningValidations$$ = !0;
    if(void 0 === $newValue$$2$$) {
      return $oj$$2$$.$Logger$.warn("Attempt to set a value of undefined"), !1
    }
    if(this._CanSetValue()) {
      $mode$$9_options$$95$$ = $mode$$9_options$$95$$ && $mode$$9_options$$95$$.$validationMode$ ? $mode$$9_options$$95$$.$validationMode$ : this.$_VALIDATION_MODE$.$FULL$;
      if($runningValidations$$ = $mode$$9_options$$95$$ !== this.$_VALIDATION_MODE$.NONE) {
        if($newValue$$2$$ !== this.$__oj_lastElementValue$) {
          if(this.$_setLastElementValue$($newValue$$2$$), this.$_clearMessages$($event$$25$$), $newValue$$2$$ = this.$_doRunValidation$($newValue$$2$$, $event$$25$$, $mode$$9_options$$95$$), !this.isValid()) {
            return!1
          }
        }else {
          return $oj$$2$$.$Logger$.$level$ > $oj$$2$$.$Logger$.$LEVEL_WARN$ && $oj$$2$$.$Logger$.info("Validation was skipped because the display value " + $newValue$$2$$.toString ? $newValue$$2$$.toString() : $newValue$$2$$ + " as the previous."), !1
        }
      }
      this._ValueEquals($previousValue$$1$$, $newValue$$2$$) ? (this.$_updateElementDisplayValue$($newValue$$2$$, $event$$25$$), $oj$$2$$.$Logger$.$level$ > $oj$$2$$.$Logger$.$LEVEL_WARN$ && $oj$$2$$.$Logger$.info("The value was not set on the component as it's the same as the current value - " + $newValue$$2$$.toString ? $newValue$$2$$.toString() : $newValue$$2$$)) : this.$_updateValueOption$($newValue$$2$$, $event$$25$$)
    }
    return!0
  }, _CanSetValue:function() {
    return this.options.disabled ? !1 : !0
  }, $_SetRootAttributes$:function() {
    var $styleValue_value$$71$$ = this.options.rootAttributes;
    if($styleValue_value$$71$$) {
      var $widget$$2$$ = this.widget(), $classValue_currStyle_idValue$$ = $styleValue_value$$71$$.id;
      $classValue_currStyle_idValue$$ && $widget$$2$$.attr("id", $classValue_currStyle_idValue$$);
      ($classValue_currStyle_idValue$$ = $styleValue_value$$71$$["class"]) && $widget$$2$$.addClass($classValue_currStyle_idValue$$);
      if($styleValue_value$$71$$ = $styleValue_value$$71$$.style) {
        ($classValue_currStyle_idValue$$ = $widget$$2$$.attr("style")) ? $widget$$2$$.attr("style", $classValue_currStyle_idValue$$ + ";" + $styleValue_value$$71$$) : $widget$$2$$.attr("style", $styleValue_value$$71$$)
      }
    }
  }, _SetPlaceholder:function($value$$72$$) {
    this._GetContentElement().attr("placeholder", $value$$72$$)
  }, _TriggerOptionChange:function($option$$, $dataHash_previousValue$$2$$, $originalEvent$$1$$) {
    $oj$$2$$.$Assert$.$assertNonEmptyString$($option$$, "");
    $dataHash_previousValue$$2$$ = {option:$option$$, previousValue:$dataHash_previousValue$$2$$, value:this.options[$option$$], optionMetadata:{writeback:"shouldWrite"}};
    switch($option$$) {
      case "messages":
        this._trigger("optionChange", $originalEvent$$1$$ || null, $dataHash_previousValue$$2$$);
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$());
        break;
      case "value":
        this._trigger("optionChange", $originalEvent$$1$$ || null, $dataHash_previousValue$$2$$)
    }
  }, _ValueEquals:function($value1$$6$$, $value2$$6$$) {
    return $oj$$2$$.$Object$.$innerEquals$($value1$$6$$, $value2$$6$$)
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-editablevalue"), $_OPTION_TO_CSS_MAPPING$:{disabled:"oj-disabled", required:"oj-required", readOnly:"oj-read-only"}, $__DEFAULT_MESSAGING_OPTIONS$:{messages:["notewindow"], converterHint:["placeholder", "notewindow"], validatorHint:["notewindow"], title:["notewindow"]}, $__MESSAGING_CONTENT_UPDATE_TYPE$:{$ALL$:1, $VALIDITY_STATE$:2, $CONVERTER_HINT$:3, $VALIDATOR_HINTS$:4, $TITLE$:5}, $_clearMessages$:function($event$$26$$, $silentUpdate$$) {
    if($silentUpdate$$) {
      this.options.messages = []
    }else {
      var $msgsHash$$ = {messages:[]};
      $event$$26$$ && ($msgsHash$$._oj_originalEvent = $event$$26$$);
      this.option($msgsHash$$)
    }
  }, $_getLastModelValue$:$JSCompiler_get$$("$__oj_lastModelValue$"), $_getLastElementValue$:$JSCompiler_get$$("$__oj_lastElementValue$"), $_getAriaLabelledByElement$:function($ariaId_elem$$14$$) {
    $ariaId_elem$$14$$ = $ariaId_elem$$14$$.attr("aria-labelledby");
    return void 0 !== $ariaId_elem$$14$$ ? $$$$2$$("label[id\x3d'" + $ariaId_elem$$14$$ + "']") : null
  }, $_createOjLabel$:function() {
    this.$$label$ = this._GetLabelElement();
    if(null !== this.$$label$) {
      var $helpDef$$1$$ = this.options.help.definition, $helpSource$$1$$ = this.options.help.source, $labelHelpIconWrapper$$1$$ = this.$_ariaDescribedByHelpIconWrapper$($helpSource$$1$$);
      this.$$label$._ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass() + "-label"}, describedById:$labelHelpIconWrapper$$1$$, required:this.options.required, help:{definition:$helpDef$$1$$, source:$helpSource$$1$$}})
    }
  }, $_ariaDescribedByHelpIconWrapper$:function($helpSource$$2$$) {
    var $labelHelpIconWrapperId$$ = this.element.prop("id") + "Icons";
    $helpSource$$2$$ && this._GetContentElement().each(function() {
      var $ariaDescBy$$ = $$$$2$$(this).attr("aria-describedby");
      $ariaDescBy$$ ? $$$$2$$(this).attr("aria-describedby", $ariaDescBy$$ + " " + $labelHelpIconWrapperId$$) : $$$$2$$(this).attr("aria-describedby", $labelHelpIconWrapperId$$)
    });
    return $labelHelpIconWrapperId$$
  }, $_getMaxSeverity$:function() {
    this.$__maxSeverityLevel$ || (this.$__maxSeverityLevel$ = $oj$$2$$.$Message$.$getMaxSeverity$(this.options.messages));
    return this.$__maxSeverityLevel$
  }, $_getValidityState$:function() {
    if(this.$__validityState$) {
      var $messages$$ = $$$$2$$.extend([], this.options.messages);
      this.$__validityState$.update(this.$__valid$, $messages$$, this.$__maxSeverityLevel$)
    }else {
      "undefined" === typeof this.$__valid$ && (this.$__valid$ = !0), this.$__validityState$ = new $oj$$2$$.ComponentValidity(this.$__valid$, this.options.messages, this.$__maxSeverityLevel$)
    }
    return this.$__validityState$
  }, $_initComponentMessaging$:function() {
    var $compMessaging$$ = this.$_getComponentMessaging$(), $messagingTrigger$$ = this._GetMessagingTriggerElement(), $messagingContent$$ = this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$);
    $compMessaging$$.activate($messagingTrigger$$, $messagingContent$$)
  }, $_setLastModelValue$:$JSCompiler_set$$("$__oj_lastModelValue$"), $_setLastElementValue$:$JSCompiler_set$$("$__oj_lastElementValue$"), $_updateMessagesOption$:function($message$$27$$, $event$$27$$) {
    var $msgs$$ = this.options.messages.slice(), $messagesHash$$ = {};
    $oj$$2$$.$Assert$.$assertPrototype$($message$$27$$, $oj$$2$$.$Message$);
    $msgs$$.push($message$$27$$);
    $messagesHash$$.messages = $msgs$$;
    $event$$27$$ && ($messagesHash$$._oj_originalEvent = $event$$27$$);
    this.option($messagesHash$$)
  }, $_updateValueOption$:function($newValue$$3$$, $event$$28$$) {
    var $values$$5$$ = {};
    $values$$5$$.value = $newValue$$3$$;
    $event$$28$$ && ($values$$5$$._oj_originalEvent = $event$$28$$);
    this.option($values$$5$$)
  }, $_doRunValidation$:function($value$$75$$, $event$$29$$, $mode$$10$$) {
    var $newValue$$4$$ = $value$$75$$;
    try {
      $mode$$10$$ === this.$_VALIDATION_MODE$.$FULL$ && ($newValue$$4$$ = this.$_parseValue$($value$$75$$)), this.$_validateValue$($newValue$$4$$, $mode$$10$$ === this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$)
    }catch($ve$$) {
      this.$_processValidationError$($ve$$, $event$$29$$)
    }
    return $newValue$$4$$
  }, $_formatValue$:function($value$$76$$) {
    var $formattedValue$$ = $value$$76$$, $converter$$ = this._GetConverter();
    $converter$$ && "object" === typeof $converter$$ && ($converter$$.format && "function" === typeof $converter$$.format ? $formattedValue$$ = $converter$$.format($value$$76$$) : $oj$$2$$.$Logger$.$level$ > $oj$$2$$.$Logger$.$LEVEL_WARN$ && $oj$$2$$.$Logger$.info("converter does not support the format method."));
    return $formattedValue$$
  }, $_getComponentMessaging$:function() {
    this.$__componentMessaging$ || (this.$__componentMessaging$ = new $oj$$2$$.$ComponentMessaging$(this));
    return this.$__componentMessaging$
  }, $_getDefaultRequiredValidator$:function() {
    var $vf$$;
    this.$__requiredValidator$ || (this.$__requiredValidator$ = ($vf$$ = $oj$$2$$.$Validation$.$validatorFactory$($oj$$2$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED)) ? $vf$$.createValidator() : null);
    return this.$__requiredValidator$
  }, $_getDefaultRegExpValidator$:function() {
    var $vf$$1$$;
    this.$__defaultRegExpOptions$ = {pattern:this.options.pattern};
    return($vf$$1$$ = $oj$$2$$.$Validation$.$validatorFactory$($oj$$2$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP)) ? $vf$$1$$.createValidator(this.$__defaultRegExpOptions$) : null
  }, $_getMessagingContent$:function($updateType$$) {
    var $messagingContent$$1$$ = {}, $allValidators$$1_converter$$1_converterHint$$ = this._GetConverter(), $vHint_validator$$2$$, $validatorHints$$ = [], $i$$68$$;
    $updateType$$ = $updateType$$ || this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$;
    if($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$) {
      $messagingContent$$1$$.validityState = this.$_getValidityState$()
    }
    ($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$) && $allValidators$$1_converter$$1_converterHint$$ && "object" === typeof $allValidators$$1_converter$$1_converterHint$$ && $allValidators$$1_converter$$1_converterHint$$.getHint && "function" === typeof $allValidators$$1_converter$$1_converterHint$$.getHint && ($allValidators$$1_converter$$1_converterHint$$ = $allValidators$$1_converter$$1_converterHint$$.getHint()) && 
    ($messagingContent$$1$$.converterHint = $allValidators$$1_converter$$1_converterHint$$);
    if($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$) {
      $allValidators$$1_converter$$1_converterHint$$ = this._GetAllValidators();
      for($i$$68$$ = 0;$i$$68$$ < $allValidators$$1_converter$$1_converterHint$$.length;$i$$68$$++) {
        $vHint_validator$$2$$ = $allValidators$$1_converter$$1_converterHint$$[$i$$68$$], "object" === typeof $vHint_validator$$2$$ && $vHint_validator$$2$$.getHint && "function" === typeof $vHint_validator$$2$$.getHint && ($vHint_validator$$2$$ = $vHint_validator$$2$$.getHint()) && $validatorHints$$.push($vHint_validator$$2$$)
      }
      0 < $validatorHints$$.length && ($messagingContent$$1$$.validatorHint = $validatorHints$$)
    }
    ($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$) && this.options.title && ($messagingContent$$1$$.title = this.options.title);
    return $messagingContent$$1$$
  }, $_parseValue$:function($submittedValue$$1$$) {
    var $converter$$2$$ = this._GetConverter(), $parsedValue$$ = $submittedValue$$1$$;
    $converter$$2$$ && "object" === typeof $converter$$2$$ && ($converter$$2$$.parse && "function" === typeof $converter$$2$$.parse ? $parsedValue$$ = $converter$$2$$.parse($submittedValue$$1$$) : $oj$$2$$.$Logger$.$level$ > $oj$$2$$.$Logger$.$LEVEL_WARN$ && $oj$$2$$.$Logger$.info("converter does not support the parse method."));
    return $parsedValue$$
  }, $_processValidationError$:function($e$$23$$, $event$$30$$) {
    var $detail$$3_ojmessage$$, $summary$$, $severity$$, $newMsg$$ = {};
    $e$$23$$ instanceof $oj$$2$$.$ConverterError$ || $e$$23$$ instanceof $oj$$2$$.$ValidatorError$ ? ($detail$$3_ojmessage$$ = $e$$23$$.$getMessage$(), $oj$$2$$.$Assert$.$assertPrototype$($detail$$3_ojmessage$$, $oj$$2$$.$Message$), $severity$$ = $detail$$3_ojmessage$$.severity, $summary$$ = $detail$$3_ojmessage$$.summary, $detail$$3_ojmessage$$ = $detail$$3_ojmessage$$.detail) : ($severity$$ = $oj$$2$$.$Message$.$SEVERITY_LEVEL$.ERROR, $summary$$ = $oj$$2$$.$Translations$.$getTranslatedString$("oj-message.error"), 
    $detail$$3_ojmessage$$ = $e$$23$$.message || $oj$$2$$.$Translations$.$getTranslatedString$("oj-converter.detail"));
    $newMsg$$.summary = $summary$$;
    $newMsg$$.severity = $severity$$;
    $newMsg$$.detail = $detail$$3_ojmessage$$;
    this.$_updateMessagesOption$($newMsg$$, $event$$30$$)
  }, $_refreshAria$:function($option$$1$$, $value$$77$$) {
    this._GetContentElement();
    switch($option$$1$$) {
      case "required":
        this._RefreshAriaRequired($value$$77$$)
    }
  }, $_refreshComponentDisplayValue$:function($value$$78$$, $forceRefresh$$) {
    var $modelValue$$ = $value$$78$$ || this.options.value, $lastModelValue$$;
    $lastModelValue$$ = this.$__oj_lastModelValue$;
    ($forceRefresh$$ || $modelValue$$ !== $lastModelValue$$) && this.$_updateElementDisplayValue$($modelValue$$)
  }, $_refreshTheming$:function($option$$2$$, $value$$79$$) {
    this.$_OPTION_TO_CSS_MAPPING$.hasOwnProperty($option$$2$$) && ("required" !== $option$$2$$ ? this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$2$$], !!$value$$79$$) : this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$2$$], "required" === $value$$79$$))
  }, _setDefaultMessagingOptions:function() {
    var $self$$27$$ = this;
    $oj$$2$$.Components.$setDefaultOptions$({editableValue:{messagingDisplayOptions:function($context$$32$$) {
      return $self$$27$$.$_GetDefaultMessagingDisplayOptions$($context$$32$$)
    }}})
  }, $_updateElementDisplayValue$:function($modelValue$$1$$, $event$$31$$) {
    var $displayValue$$1$$;
    this.$_setLastModelValue$($modelValue$$1$$);
    $displayValue$$1$$ = $modelValue$$1$$;
    try {
      $displayValue$$1$$ = this.$_formatValue$($modelValue$$1$$)
    }catch($e$$24$$) {
      this.$_processValidationError$($e$$24$$, $event$$31$$)
    }
    this.$_setLastElementValue$($displayValue$$1$$);
    this._SetDisplayValue($displayValue$$1$$)
  }, $_updateInvalidElementTracker$:$JSCompiler_emptyFn$$(), $_validateValue$:function($value$$80$$, $requiredOnly$$1$$) {
    if(this.$__valid$) {
      var $allValidators$$2$$ = [], $validator$$3$$, $i$$69$$;
      this._IsRequired() && this.$_getDefaultRequiredValidator$().validate($value$$80$$);
      if(!$requiredOnly$$1$$) {
        for($allValidators$$2$$ = this._GetAllValidators(), $i$$69$$ = 0;$i$$69$$ < $allValidators$$2$$.length;$i$$69$$++) {
          $validator$$3$$ = $allValidators$$2$$[$i$$69$$], "object" === typeof $validator$$3$$ && ($validator$$3$$.validate && "function" === typeof $validator$$3$$.validate ? $validator$$3$$.validate($value$$80$$) : $oj$$2$$.$Logger$.$level$ > $oj$$2$$.$Logger$.$LEVEL_WARN$ && $oj$$2$$.$Logger$.info("validator does not support the validate method."))
        }
      }
    }
  }});
  $oj$$2$$.$__registerWidget$("oj.inputBase", $$$$2$$.oj.editableValue, {version:"1.0.0", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"", _EVENT_LIST:[{type:"blur", $handlers$:"_HandleSetValue"}, {type:"keydown", $handlers$:function($event$$32$$) {
    $event$$32$$.keyCode === $$$$2$$.ui.keyCode.ENTER && (this._HandleSetValue($event$$32$$), $event$$32$$.preventDefault(), $event$$32$$.stopPropagation())
  }}, {type:"paste", $handlers$:"_HandleSetValue"}], options:{readOnly:null}, getNodeBySubId:function($locator$$1$$) {
    return null == $locator$$1$$ ? this.element ? this.element[0] : null : null
  }, $_GetEventList$:$JSCompiler_get$$("_EVENT_LIST"), _HandleSetValue:function __HandleSetValue($event$$33$$) {
    this._SetValue(this._GetDisplayValue(), $event$$33$$)
  }, _GetSubId:function __getSubId($sub$$) {
    return this.uuid + "_" + $sub$$
  }, _IsRTL:function() {
    return"rtl" === this._GetReadingDirection()
  }, _create:function __create() {
    this.$_SetRootAttributes$();
    var $ret$$3$$ = this._superApply(arguments);
    this.widget().addClass(this._CLASS_NAMES);
    this.$_processEventList$();
    this.$_processAttrCheck$();
    this.options.disabled && this.disable();
    "boolean" !== typeof this.options.readOnly ? this.options.readOnly = !!this.element.prop("readonly") : this.element.prop("readonly", this.options.readOnly);
    return $ret$$3$$
  }, $_processEventList$:function __processEventList() {
    for(var $eventList$$1$$ = this.$_GetEventList$(), $i$$70$$ = 0, $j$$7$$ = $eventList$$1$$.length;$i$$70$$ < $j$$7$$;$i$$70$$++) {
      var $handler$$45$$ = $$$$2$$.proxy(function() {
        var $handlers$$5$$ = $eventList$$1$$[$i$$70$$].$handlers$;
        return function($evt$$16$$) {
          function $handle$$19$$($handler$$46$$, $scope$$, $args$$11$$) {
            if($$$$2$$.isFunction($handler$$46$$)) {
              $handler$$46$$.apply($scope$$, $args$$11$$)
            }else {
              if("string" === typeof $handler$$46$$) {
                $scope$$[$handler$$46$$]($args$$11$$)
              }
            }
          }
          if($handlers$$5$$) {
            if($$$$2$$.isArray($handlers$$5$$)) {
              for(var $m$$10$$ = 0, $n$$12$$ = $handlers$$5$$.length;$m$$10$$ < $n$$12$$;$m$$10$$++) {
                $handle$$19$$($handlers$$5$$[$m$$10$$], this, arguments)
              }
            }else {
              $handle$$19$$($handlers$$5$$, this, arguments)
            }
          }
        }
      }(), this);
      this.element.on($eventList$$1$$[$i$$70$$].type, $handler$$45$$)
    }
  }, $_processAttrCheck$:function __processAttrCheck() {
    this.$_resetAttributes$ = [];
    for(var $attrCheck$$ = this._ATTR_CHECK, $i$$71$$ = 0, $j$$8$$ = $attrCheck$$.length;$i$$71$$ < $j$$8$$;$i$$71$$++) {
      var $attr$$11$$ = $attrCheck$$[$i$$71$$].attr, $exists$$ = this.element.is("[" + $attr$$11$$ + "]"), $setMandatoryExists$$ = "setMandatory" in $attrCheck$$[$i$$71$$], $val$$18$$ = this.element.attr($attr$$11$$);
      $exists$$ ? $setMandatoryExists$$ && $val$$18$$ != $attrCheck$$[$i$$71$$].setMandatory && (this.$_resetAttributes$.push({process:"setAttr", param:{attr:$attr$$11$$, val:$val$$18$$}}), this.element.attr($attr$$11$$, $attrCheck$$[$i$$71$$].setMandatory)) : $setMandatoryExists$$ && (this.$_resetAttributes$.push({process:"removeAttr", param:{attr:$attr$$11$$}}), this.element.attr($attr$$11$$, $attrCheck$$[$i$$71$$].setMandatory))
    }
  }, _destroy:function __destroy() {
    for(var $ret$$4$$ = this._superApply(arguments), $attr$$12_eventList$$2$$ = this.$_GetEventList$(), $resetAttributes$$ = this.$_resetAttributes$, $i$$72$$ = 0, $j$$9_param$$3_val$$19$$ = $attr$$12_eventList$$2$$.length;$i$$72$$ < $j$$9_param$$3_val$$19$$;$i$$72$$++) {
      this.element.off($attr$$12_eventList$$2$$[$i$$72$$].type)
    }
    this.widget().removeClass(this._CLASS_NAMES);
    for($i$$72$$ = $resetAttributes$$.length - 1;-1 < $i$$72$$;$i$$72$$--) {
      switch($j$$9_param$$3_val$$19$$ = $resetAttributes$$[$i$$72$$].param || {}, $attr$$12_eventList$$2$$ = $j$$9_param$$3_val$$19$$.attr, $j$$9_param$$3_val$$19$$ = $j$$9_param$$3_val$$19$$.val, $resetAttributes$$[$i$$72$$].process) {
        case "setAttr":
          this.element.attr($attr$$12_eventList$$2$$, $j$$9_param$$3_val$$19$$);
          break;
        case "removeAttr":
          this.element.removeAttr($attr$$12_eventList$$2$$)
      }
    }
    return $ret$$4$$
  }, _setOption:function __setOption($key$$31$$, $value$$81$$) {
    this._super($key$$31$$, $value$$81$$);
    "disabled" === $key$$31$$ && this.element.attr("disabled", $value$$81$$);
    "readOnly" === $key$$31$$ && this.element.prop("readonly", !!$value$$81$$)
  }});
  $oj$$2$$.ComponentValidity = function $$oj$$2$$$ComponentValidity$($valid$$1$$, $messages$$1$$, $maxSeverity$$) {
    this.$Init$($valid$$1$$, $messages$$1$$, $maxSeverity$$)
  };
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.ComponentValidity, $oj$$2$$.$Object$, "oj.ComponentValidity");
  $oj$$2$$.ComponentValidity.prototype.$Init$ = function $$oj$$2$$$ComponentValidity$$$Init$$($valid$$2$$, $messages$$2$$, $maxSeverity$$1$$) {
    $oj$$2$$.ComponentValidity.$superclass$.$Init$.call(this);
    this.$_valid$ = $valid$$2$$;
    this.$_messages$ = $messages$$2$$;
    this.$_maxSeverity$ = $maxSeverity$$1$$
  };
  $oj$$2$$.ComponentValidity.prototype.isValid = $JSCompiler_get$$("$_valid$");
  $oj$$2$$.ComponentValidity.prototype.getMessages = function $$oj$$2$$$ComponentValidity$$getMessages$() {
    return this.$_messages$ ? this.$_messages$ : []
  };
  $oj$$2$$.ComponentValidity.prototype.$getMaxSeverity$ = $JSCompiler_get$$("$_maxSeverity$");
  $oj$$2$$.ComponentValidity.prototype.update = function $$oj$$2$$$ComponentValidity$$update$($valid$$3$$, $messages$$3$$, $maxSeverity$$2$$) {
    this.$_valid$ = $valid$$3$$;
    this.$_messages$ = $messages$$3$$;
    this.$_maxSeverity$ = $maxSeverity$$2$$
  };
  $oj$$2$$.ComponentValidity.prototype.$__getJSON$ = function $$oj$$2$$$ComponentValidity$$$__getJSON$$() {
    return{messages:$$$$2$$.extend([], this.$_messages$), valid:this.$_valid$, maxSeverity:this.$_maxSeverity$}
  };
  $oj$$2$$.$ComponentMessaging$ = function $$oj$$2$$$$ComponentMessaging$$($component$$) {
    this.$Init$($component$$)
  };
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$ComponentMessaging$, $oj$$2$$.$Object$, "oj.ComponentMessaging");
  $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$ = {NONE:"none", $NOTEWINDOW$:"notewindow", $PLACEHOLDER$:"placeholder"};
  $oj$$2$$.$ComponentMessaging$.prototype.$Init$ = function $$oj$$2$$$$ComponentMessaging$$$$Init$$($component$$1$$) {
    $oj$$2$$.$ComponentMessaging$.$superclass$.$Init$.call(this);
    this.$_component$ = $component$$1$$;
    this.$_activated$ = !1;
    this.$_initializeMessagingStrategies$()
  };
  $oj$$2$$.$ComponentMessaging$.prototype.activate = function $$oj$$2$$$$ComponentMessaging$$$activate$($target$$73$$, $content$$4$$) {
    var $that$$ = this;
    $oj$$2$$.$Assert$.$assertObject$($content$$4$$);
    this.$_activated$ ? this.$_reactivate$($target$$73$$, $content$$4$$) : ($$$$2$$.each(this.$_strategies$, function($i$$73$$, $strategy$$) {
      $strategy$$.activate($that$$.$_component$, $target$$73$$, $content$$4$$)
    }), this.$_activated$ = !0)
  };
  $oj$$2$$.$ComponentMessaging$.prototype.update = function $$oj$$2$$$$ComponentMessaging$$$update$($content$$5$$) {
    $oj$$2$$.$Assert$.$assertObject$($content$$5$$);
    $oj$$2$$.$Assert$.$assertBoolean$(this.$_activated$);
    this.$_activated$ && $$$$2$$.each(this.$_strategies$, function($i$$74$$, $strategy$$1$$) {
      $strategy$$1$$.update($content$$5$$)
    })
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$deactivate$ = function $$oj$$2$$$$ComponentMessaging$$$$deactivate$$($content$$6$$) {
    $oj$$2$$.$Assert$.$assertObject$($content$$6$$);
    $$$$2$$.each(this.$_strategies$, function($i$$75$$, $strategy$$2$$) {
      $strategy$$2$$.$deactivate$($content$$6$$)
    });
    this.$_activated$ = !1;
    this.$_strategies$ = {}
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$_createMessagingStrategy$ = function $$oj$$2$$$$ComponentMessaging$$$$_createMessagingStrategy$$($type$$56$$, $options$$96$$) {
    var $strategy$$3$$ = null;
    switch($type$$56$$) {
      case $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$:
        $strategy$$3$$ = new $oj$$2$$.$NoteWindowMessagingStrategy$($options$$96$$);
        break;
      case $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$:
        $strategy$$3$$ = new $oj$$2$$.$PlaceholderMessagingStrategy$($options$$96$$);
        break;
      case $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE:
        $strategy$$3$$ = new $oj$$2$$.$MessagingStrategy$($options$$96$$)
    }
    return $strategy$$3$$
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$_getResolvedMessagingDisplayOptions$ = function $$oj$$2$$$$ComponentMessaging$$$$_getResolvedMessagingDisplayOptions$$() {
    var $artifactsByDisplayType$$ = {}, $artifactDisplayTypeResolved$$ = !1, $compPH$$ = this.$_component$.options.placeholder, $artifact$$1$$, $$messagingPreferences$$ = {};
    $$$$2$$.each(this.$_component$.options.messagingDisplayOptions || {}, function($key$$33$$, $displayTypes$$) {
      $artifactDisplayTypeResolved$$ = !1;
      $artifact$$1$$ = $key$$33$$ + "";
      $$$$2$$.each($displayTypes$$, function($index$$71$$, $displayType$$1$$) {
        switch($displayType$$1$$) {
          case $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$:
            if("converterHint" === $artifact$$1$$ && !$artifactDisplayTypeResolved$$ && !$compPH$$) {
              $$messagingPreferences$$[$artifact$$1$$] = $displayType$$1$$;
              $artifactDisplayTypeResolved$$ = !0;
              break
            }
            break;
          default:
            $artifactDisplayTypeResolved$$ || ($$messagingPreferences$$[$artifact$$1$$] = $displayType$$1$$, $artifactDisplayTypeResolved$$ = !0)
        }
      });
      $artifactDisplayTypeResolved$$ || ($$messagingPreferences$$[$artifact$$1$$] = $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE)
    });
    $$$$2$$.each($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$, function($type$$57$$, $name$$75$$) {
      $artifactsByDisplayType$$[$name$$75$$] = []
    });
    $$$$2$$.each($$messagingPreferences$$, function($artifact$$2$$, $displayType$$2$$) {
      $artifactsByDisplayType$$[$displayType$$2$$].push($artifact$$2$$)
    });
    return $artifactsByDisplayType$$
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$_initializeMessagingStrategies$ = function $$oj$$2$$$$ComponentMessaging$$$$_initializeMessagingStrategies$$() {
    var $artifactsByDisplayType$$1_displayInPlaceholder$$ = this.$_getResolvedMessagingDisplayOptions$(), $displayInNoteWindow$$ = $artifactsByDisplayType$$1_displayInPlaceholder$$[$oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$], $displayNone$$ = $artifactsByDisplayType$$1_displayInPlaceholder$$[$oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE], $artifactsByDisplayType$$1_displayInPlaceholder$$ = $artifactsByDisplayType$$1_displayInPlaceholder$$[$oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$], 
    $messagingStrategies$$1$$ = {};
    0 < $displayInNoteWindow$$.length && ($messagingStrategies$$1$$[$oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$] = this.$_createMessagingStrategy$($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$, $displayInNoteWindow$$));
    0 < $artifactsByDisplayType$$1_displayInPlaceholder$$.length && ($messagingStrategies$$1$$[$oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$] = this.$_createMessagingStrategy$($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$, $artifactsByDisplayType$$1_displayInPlaceholder$$));
    0 < $displayNone$$.length && ($messagingStrategies$$1$$[$oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE] = this.$_createMessagingStrategy$($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE, $displayNone$$));
    this.$_strategies$ = $messagingStrategies$$1$$
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$_reactivate$ = function $$oj$$2$$$$ComponentMessaging$$$$_reactivate$$($target$$74$$, $content$$7$$) {
    var $artifactsByDisplayType$$2$$ = this.$_getResolvedMessagingDisplayOptions$(), $strategy$$4$$, $cm$$ = this;
    $$$$2$$.each($artifactsByDisplayType$$2$$, function($type$$58$$, $artifactsForType$$) {
      $strategy$$4$$ = $cm$$.$_strategies$[$type$$58$$];
      $artifactsForType$$ && 0 < $artifactsForType$$.length ? $strategy$$4$$ ? $strategy$$4$$ && $strategy$$4$$.$reinitialize$($artifactsForType$$) : ($strategy$$4$$ = $cm$$.$_createMessagingStrategy$($type$$58$$, $artifactsForType$$), $cm$$.$_strategies$[$type$$58$$] = $strategy$$4$$, $strategy$$4$$.activate($cm$$.$_component$, $target$$74$$, $content$$7$$)) : $strategy$$4$$ && ($strategy$$4$$.$deactivate$($content$$7$$), delete $cm$$.$_strategies$[$type$$58$$])
    })
  };
  $oj$$2$$.$MessagingStrategy$ = function $$oj$$2$$$$MessagingStrategy$$($displayOptions$$) {
    this.$Init$($displayOptions$$)
  };
  $oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$ = "oj-invalid";
  $oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$ = "oj-warning";
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$MessagingStrategy$, $oj$$2$$.$Object$, "oj.MessagingStrategy");
  $oj$$2$$.$MessagingStrategy$.prototype.$Init$ = function $$oj$$2$$$$MessagingStrategy$$$$Init$$($displayOptions$$1$$) {
    $oj$$2$$.$Assert$.$assertArray$($displayOptions$$1$$);
    $oj$$2$$.$MessagingStrategy$.$superclass$.$Init$.call(this);
    this.$_displayOptions$ = $displayOptions$$1$$
  };
  $oj$$2$$.$MessagingStrategy$.prototype.activate = function $$oj$$2$$$$MessagingStrategy$$$activate$($component$$2$$, $target$$75$$, $content$$8$$) {
    this.$_target$ = $target$$75$$;
    this.$_component$ = $component$$2$$;
    this.$_updateMessagingContent$($content$$8$$)
  };
  $oj$$2$$.$MessagingStrategy$.prototype.update = function $$oj$$2$$$$MessagingStrategy$$$update$($content$$9_target$$76$$) {
    this.$_updateMessagingContent$($content$$9_target$$76$$);
    $content$$9_target$$76$$ = this.$_target$;
    var $maxSeverity$$3$$ = this.$GetMaxSeverity$(), $removeClasses$$ = [], $addClasses$$ = [], $invalid$$ = !1, $jqRoot$$ = this.$_component$.widget();
    $content$$9_target$$76$$ && (this.$IsValid$() ? this.$HasMessages$() && $maxSeverity$$3$$ === $oj$$2$$.$Message$.$SEVERITY_LEVEL$.$WARNING$ ? ($removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$), $addClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$)) : ($removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$), $removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$)) : ($removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$), 
    $addClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$), $invalid$$ = !0), $jqRoot$$.removeClass($removeClasses$$.join(" ")).addClass($addClasses$$.join(" ")), $content$$9_target$$76$$.attr({"aria-invalid":$invalid$$}))
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$deactivate$ = function $$oj$$2$$$$MessagingStrategy$$$$deactivate$$() {
    this.$_component$.widget().removeClass($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$).removeClass($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$);
    this.$_target$.removeAttr("aria-invalid").removeAttr("aria-describedby");
    this.$_component$ = this.$_target$ = null
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$reinitialize$ = function $$oj$$2$$$$MessagingStrategy$$$$reinitialize$$($newDisplayOptions$$) {
    this.$Init$($newDisplayOptions$$)
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetMessages$ = function $$oj$$2$$$$MessagingStrategy$$$$GetMessages$$() {
    return this.$GetValidityState$().getMessages()
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetMaxSeverity$ = function $$oj$$2$$$$MessagingStrategy$$$$GetMaxSeverity$$() {
    return this.$GetValidityState$().$getMaxSeverity$()
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetConverterHint$ = function $$oj$$2$$$$MessagingStrategy$$$$GetConverterHint$$() {
    var $hints$$ = [], $converterHint$$1$$ = this.$_messagingContent$.converterHint;
    $converterHint$$1$$ && $hints$$.push($converterHint$$1$$);
    return $hints$$
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetValidatorHints$ = function $$oj$$2$$$$MessagingStrategy$$$$GetValidatorHints$$() {
    var $hints$$1$$ = [];
    $$$$2$$.each(this.$_messagingContent$.validatorHint || [], function($index$$72$$, $hint$$1$$) {
      $hints$$1$$.push($hint$$1$$)
    });
    return $hints$$1$$
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetTitle$ = function $$oj$$2$$$$MessagingStrategy$$$$GetTitle$$() {
    return this.$_messagingContent$.title || ""
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetValidityState$ = function $$oj$$2$$$$MessagingStrategy$$$$GetValidityState$$() {
    return this.$_messagingContent$.validityState
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$HasMessages$ = function $$oj$$2$$$$MessagingStrategy$$$$HasMessages$$() {
    var $messages$$4$$ = this.$GetMessages$();
    return $messages$$4$$ && 0 < $messages$$4$$.length ? !0 : !1
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$ShowMessages$ = function $$oj$$2$$$$MessagingStrategy$$$$ShowMessages$$() {
    return-1 !== this.$_displayOptions$.indexOf("messages") ? !0 : !1
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$ShowConverterHint$ = function $$oj$$2$$$$MessagingStrategy$$$$ShowConverterHint$$() {
    return-1 !== this.$_displayOptions$.indexOf("converterHint") ? !0 : !1
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$ShowValidatorHint$ = function $$oj$$2$$$$MessagingStrategy$$$$ShowValidatorHint$$() {
    return-1 !== this.$_displayOptions$.indexOf("validatorHint") ? !0 : !1
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$ShowTitle$ = function $$oj$$2$$$$MessagingStrategy$$$$ShowTitle$$() {
    return-1 !== this.$_displayOptions$.indexOf("title") ? !0 : !1
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$IsValid$ = function $$oj$$2$$$$MessagingStrategy$$$$IsValid$$() {
    return this.$GetValidityState$().isValid()
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$_updateMessagingContent$ = function $$oj$$2$$$$MessagingStrategy$$$$_updateMessagingContent$$($content$$11$$) {
    this.$_messagingContent$ = $$$$2$$.extend(this.$_messagingContent$ || {}, $content$$11$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$($displayOptions$$2$$) {
    this.$Init$($displayOptions$$2$$)
  };
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$PlaceholderMessagingStrategy$, $oj$$2$$.$MessagingStrategy$, "oj.PlaceholderMessagingStrategy");
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$Init$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$Init$$($displayOptions$$3$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.$Init$.call(this, $displayOptions$$3$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.activate = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$activate$($component$$3$$, $target$$77$$, $content$$12$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.activate.call(this, $component$$3$$, $target$$77$$, $content$$12$$);
    this.$_refreshPlaceholder$()
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.update = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$update$($content$$13$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.update.call(this, $content$$13$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$deactivate$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$deactivate$$($content$$14$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.$deactivate$.call(this, $content$$14$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$_refreshPlaceholder$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$_refreshPlaceholder$$() {
    var $content$$15_hints$$2_target$$78$$ = this.$_target$;
    this.$_component$.widget();
    if(this.$ShowPlaceholderContent$() && $content$$15_hints$$2_target$$78$$ && ($content$$15_hints$$2_target$$78$$ = this.$GetConverterHint$(), $content$$15_hints$$2_target$$78$$ = $content$$15_hints$$2_target$$78$$.length ? $content$$15_hints$$2_target$$78$$[0] : "")) {
      var $values$$6$$ = {};
      $values$$6$$.placeholder = $content$$15_hints$$2_target$$78$$;
      $values$$6$$._oj_messaging_update = !0;
      this.$_component$.option($values$$6$$)
    }
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$ShowPlaceholderContent$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$ShowPlaceholderContent$$() {
    return this.$ShowConverterHint$()
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$($displayOptions$$4$$) {
    this.$Init$($displayOptions$$4$$)
  };
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$NoteWindowMessagingStrategy$, $oj$$2$$.$MessagingStrategy$, "oj.NoteWindowMessagingStrategy");
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$Init$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$Init$$($displayOptions$$5$$) {
    $oj$$2$$.$NoteWindowMessagingStrategy$.$superclass$.$Init$.call(this, $displayOptions$$5$$)
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.activate = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$activate$($component$$4$$, $target$$79$$, $content$$16$$) {
    $oj$$2$$.$NoteWindowMessagingStrategy$.$superclass$.activate.call(this, $component$$4$$, $target$$79$$, $content$$16$$);
    this.$_initTooltip$();
    this.update($content$$16$$)
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.update = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$update$($content$$17$$) {
    $oj$$2$$.$NoteWindowMessagingStrategy$.$superclass$.update.call(this, $content$$17$$)
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$deactivate$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$deactivate$$($content$$18$$) {
    this.$_target$.off("mouseleave", this.$_handleMouseLeave$).off("focusin", this.$_showTooltip$).off("focusout", this.$_hideTooltip$);
    this.$_destroyTooltip$();
    $oj$$2$$.$NoteWindowMessagingStrategy$.$superclass$.$deactivate$.call(this, $content$$18$$)
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$reinitialize$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$reinitialize$$($newDisplayOptions$$1$$) {
    $oj$$2$$.$NoteWindowMessagingStrategy$.$superclass$.$reinitialize$.call(this, $newDisplayOptions$$1$$)
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_showTooltip$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_showTooltip$$() {
    $$$$2$$(this).tooltip("enable").tooltip("open")
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_hideTooltip$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_hideTooltip$$() {
    $$$$2$$(this).tooltip("disable").tooltip("close")
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_handleMouseLeave$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_handleMouseLeave$$($e$$25$$) {
    $e$$25$$.preventDefault();
    $e$$25$$.stopImmediatePropagation();
    return!1
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_initTooltip$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_initTooltip$$() {
    var $self$$28$$ = this;
    if(!this.$_isTooltipInitialized$()) {
      var $jqTarget$$ = this.$_target$;
      this.$_component$.widget();
      this.$_tooltip$ = $jqTarget$$.tooltip({position:{my:"left+14 bottom", at:"right top", of:$jqTarget$$, using:function($position$$, $feedback$$) {
        $$$$2$$(this).css($position$$);
        $$$$2$$("\x3cdiv\x3e").addClass("arrow").addClass($feedback$$.vertical).addClass($feedback$$.horizontal).appendTo(this)
      }}, open:$JSCompiler_emptyFn$$(), close:$JSCompiler_emptyFn$$(), content:function() {
        return $self$$28$$.$_buildNoteWindowHtml$()
      }, items:$jqTarget$$}).off("mouseover mouseout").on("mouseleave", {target:$$$$2$$(this)}, $self$$28$$.$_handleMouseLeave$).on("focusout", {target:$$$$2$$(this)}, $self$$28$$.$_hideTooltip$).on("focusin", {target:$$$$2$$(this)}, $self$$28$$.$_showTooltip$)
    }
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_destroyTooltip$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_destroyTooltip$$() {
    this.$_isTooltipInitialized$() && this.$_tooltip$ && this.$_tooltip$.tooltip("destroy");
    this.$_tooltip$ = null
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_buildNoteWindowHtml$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_buildNoteWindowHtml$$() {
    var $nwHtml$$ = "", $document$$1$$ = this.$_component$.document[0], $nwContent$$ = [], $addSeparator$$ = !1, $that$$1$$ = this;
    this.$ShowMessages$() && $nwContent$$.push(this.$_buildMessagesHtml$());
    (this.$ShowConverterHint$() || this.$ShowValidatorHint$()) && $nwContent$$.push(this.$_buildHintsHtml$($document$$1$$));
    this.$ShowTitle$() && $nwContent$$.push(this.$_buildTitleHtml$($document$$1$$));
    $$$$2$$.each($nwContent$$, function($i$$76$$, $content$$19$$) {
      $content$$19$$ && ($addSeparator$$ ? $nwHtml$$ = $nwHtml$$.concat($that$$1$$.$_getSeparatorHtml$($document$$1$$)) : $addSeparator$$ = !0, $nwHtml$$ = $nwHtml$$.concat($content$$19$$))
    });
    return $nwHtml$$
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_buildMessagesHtml$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_buildMessagesHtml$$() {
    var $messages$$6_messagesByType$$, $content$$20$$ = "", $i$$77$$, $j$$10_maxSeverity$$4$$, $severityStr$$, $severityLevel$$, $detail$$4_message$$28_messageObj$$;
    $j$$10_maxSeverity$$4$$ = this.$GetMaxSeverity$();
    var $summary$$1$$, $messagesByTypes$$ = {};
    $messages$$6_messagesByType$$ = [];
    if(this.$HasMessages$()) {
      $messages$$6_messagesByType$$ = this.$GetMessages$();
      for($i$$77$$ = 0;$i$$77$$ < $messages$$6_messagesByType$$.length;$i$$77$$++) {
        $detail$$4_message$$28_messageObj$$ = $messages$$6_messagesByType$$[$i$$77$$], $detail$$4_message$$28_messageObj$$ = $detail$$4_message$$28_messageObj$$ instanceof $oj$$2$$.$Message$ ? $detail$$4_message$$28_messageObj$$ : new $oj$$2$$.$Message$($detail$$4_message$$28_messageObj$$.summary, $detail$$4_message$$28_messageObj$$.detail, $detail$$4_message$$28_messageObj$$.severity), $severityLevel$$ = $oj$$2$$.$Message$.$getSeverityLevel$($detail$$4_message$$28_messageObj$$.severity), $messagesByTypes$$[$severityLevel$$] || 
        ($messagesByTypes$$[$severityLevel$$] = []), $messagesByTypes$$[$severityLevel$$].push($detail$$4_message$$28_messageObj$$)
      }
      for($i$$77$$ = $j$$10_maxSeverity$$4$$;$i$$77$$ >= $oj$$2$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION;$i$$77$$--) {
        for($messages$$6_messagesByType$$ = $messagesByTypes$$[$i$$77$$] || [], $j$$10_maxSeverity$$4$$ = 0;$j$$10_maxSeverity$$4$$ < $messages$$6_messagesByType$$.length;$j$$10_maxSeverity$$4$$++) {
          $detail$$4_message$$28_messageObj$$ = $messages$$6_messagesByType$$[$j$$10_maxSeverity$$4$$], $oj$$2$$.$Assert$.$assertPrototype$($detail$$4_message$$28_messageObj$$, $oj$$2$$.$Message$), $severityLevel$$ = $oj$$2$$.$Message$.$getSeverityLevel$($detail$$4_message$$28_messageObj$$.severity), $severityStr$$ = this.$_getSeverityTranslatedString$($severityLevel$$), $summary$$1$$ = $detail$$4_message$$28_messageObj$$.summary || $severityStr$$, $detail$$4_message$$28_messageObj$$ = $detail$$4_message$$28_messageObj$$.detail || 
          "", $content$$20$$ = $content$$20$$.concat("\x3cdiv class\x3d'oj-message'\x3e").concat("\x3cspan class\x3d'" + this.$_getSeverityIconSelector$($severityLevel$$) + "' title\x3d'" + $severityStr$$ + "' role\x3d'img'\x3e\x3c/span\x3e").concat("\x3cspan class\x3d'oj-message-content'\x3e").concat("\x3cdiv class\x3d'oj-message-summary'\x3e" + $summary$$1$$ + "\x3c/div\x3e"), $detail$$4_message$$28_messageObj$$ && ($content$$20$$ = $content$$20$$.concat("\x3cdiv class\x3d'oj-message-detail'\x3e" + 
          $detail$$4_message$$28_messageObj$$ + "\x3c/div\x3e")), $content$$20$$ = $content$$20$$.concat("\x3c/div\x3e")
        }
      }
    }
    return $content$$20$$
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_buildHintsHtml$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_buildHintsHtml$$($document$$2$$) {
    var $hints$$3$$ = [], $jHintsDom$$, $i$$78$$;
    this.$ShowValidatorHint$() && ($hints$$3$$ = $hints$$3$$.concat(this.$GetValidatorHints$()));
    this.$ShowConverterHint$() && ($hints$$3$$ = $hints$$3$$.concat(this.$GetConverterHint$()));
    if($hints$$3$$ && 0 < $hints$$3$$.length) {
      for($jHintsDom$$ = $$$$2$$($document$$2$$.createElement("div")), $jHintsDom$$.addClass("oj-form-control-hint"), $i$$78$$ = 0;$i$$78$$ < $hints$$3$$.length;$i$$78$$++) {
        $jHintsDom$$.append(this.$_getHintDom$($document$$2$$, $hints$$3$$[$i$$78$$]))
      }
    }
    return $jHintsDom$$ ? $jHintsDom$$.get(0).outerHTML : ""
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_buildTitleHtml$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_buildTitleHtml$$($document$$3$$) {
    var $title$$7$$ = this.$GetTitle$(), $jTitleDom$$;
    $title$$7$$ && ($jTitleDom$$ = $$$$2$$($document$$3$$.createElement("div")), $jTitleDom$$.addClass("oj-form-control-title"), $jTitleDom$$.append(this.$_getHintDom$($document$$3$$, $title$$7$$)));
    return $jTitleDom$$ ? $jTitleDom$$.get(0).outerHTML : ""
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_getHintDom$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_getHintDom$$($document$$4$$, $hintText$$) {
    var $jHintDom$$ = null;
    $oj$$2$$.$DomUtils$.$isHTMLContent$($hintText$$) ? $jHintDom$$ = $oj$$2$$.$DomUtils$.$cleanHtml$($hintText$$.substring(6, $hintText$$.length - 7)) : ($jHintDom$$ = $$$$2$$($document$$4$$.createElement("div")), $jHintDom$$.text($hintText$$), $jHintDom$$ = $jHintDom$$.get(0));
    return $jHintDom$$
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_getSeparatorHtml$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_getSeparatorHtml$$($document$$5_jSeparatorDom$$) {
    return($document$$5_jSeparatorDom$$ = $$$$2$$($document$$5_jSeparatorDom$$.createElement("hr"))) ? $document$$5_jSeparatorDom$$.get(0).outerHTML : ""
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_getSeverityTranslatedString$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_getSeverityTranslatedString$$($severity$$2$$) {
    var $sevTypeStr$$;
    switch($severity$$2$$) {
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevTypeStr$$ = $oj$$2$$.$Translations$.$getTranslatedString$("oj-message.fatal");
        break;
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevTypeStr$$ = $oj$$2$$.$Translations$.$getTranslatedString$("oj-message.error");
        break;
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevTypeStr$$ = $oj$$2$$.$Translations$.$getTranslatedString$("oj-message.warning");
        break;
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevTypeStr$$ = $oj$$2$$.$Translations$.$getTranslatedString$("oj-message.info");
        break;
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevTypeStr$$ = $oj$$2$$.$Translations$.$getTranslatedString$("oj-message.confirmation")
    }
    return $sevTypeStr$$
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_getSeverityIconSelector$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_getSeverityIconSelector$$($severity$$3$$) {
    var $sevIconStr$$;
    switch($severity$$3$$) {
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevIconStr$$ = "oj-message-error-icon";
        break;
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevIconStr$$ = "oj-message-error-icon";
        break;
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevIconStr$$ = "oj-message-warning-icon";
        break;
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevIconStr$$ = "oj-message-info-icon";
        break;
      case $oj$$2$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevIconStr$$ = "oj-message-confirmation-icon"
    }
    return"oj-widget-icon " + $sevIconStr$$
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_isTooltipInitialized$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_isTooltipInitialized$$() {
    var $target$$80$$ = this.$_target$;
    return $target$$80$$ ? $target$$80$$.is(":ui-tooltip") : !1
  };
  $oj$$2$$.$DomUtils$ = {};
  $goog$exportPath_$$("DomUtils", $oj$$2$$.$DomUtils$, $oj$$2$$);
  $oj$$2$$.$DomUtils$.$_HTML_START_TAG$ = "\\x3chtml\\x3e";
  $oj$$2$$.$DomUtils$.$_HTML_END_TAG$ = "\\x3c/html\\x3e";
  $oj$$2$$.$DomUtils$.$_LEGAL_ELEMENTS$ = {SPAN:1, B:1, A:1, I:1, EM:1, BR:1, HR:1, LI:1, OL:1, UL:1, P:1, TT:1, BIG:1, SMALL:1, PRE:1};
  $oj$$2$$.$DomUtils$.$_LEGAL_ATTRIBUTES$ = {"class":1, style:1, href:1};
  $oj$$2$$.$DomUtils$.$isHTMLContent$ = function $$oj$$2$$$$DomUtils$$$isHTMLContent$$($content$$21$$) {
    return 0 === $content$$21$$.indexOf($oj$$2$$.$DomUtils$.$_HTML_START_TAG$) && $content$$21$$.lastIndexOf($oj$$2$$.$DomUtils$.$_HTML_END_TAG$) === $content$$21$$.length - 7 ? !0 : !1
  };
  $goog$exportPath_$$("DomUtils.isHTMLContent", $oj$$2$$.$DomUtils$.$isHTMLContent$, $oj$$2$$);
  $oj$$2$$.$DomUtils$.$cleanHtml$ = function $$oj$$2$$$$DomUtils$$$cleanHtml$$($value$$82$$) {
    var $offSpan$$ = $$$$2$$(document.createElement("span")).get(0);
    ($offSpan$$.innerHTML = $value$$82$$) && 0 <= $value$$82$$.indexOf("\\x3c") && $oj$$2$$.$DomUtils$.$_cleanElementHtml$($offSpan$$);
    return $offSpan$$
  };
  $oj$$2$$.$DomUtils$.$_cleanElementHtml$ = function $$oj$$2$$$$DomUtils$$$_cleanElementHtml$$($node$$6$$) {
    for(var $children$$ = $node$$6$$.childNodes, $child$$1$$, $attrs$$14$$, $attr$$13$$, $childHasAttr$$, $i$$79$$, $count$$10$$ = $children$$.length - 1;0 <= $count$$10$$;) {
      if($child$$1$$ = $children$$.item($count$$10$$), 1 === $child$$1$$.nodeType) {
        if($oj$$2$$.$DomUtils$.$_LEGAL_ELEMENTS$[$child$$1$$.nodeName]) {
          for($attrs$$14$$ = $child$$1$$.attributes, $i$$79$$ = $attrs$$14$$.length - 1;0 <= $i$$79$$;$i$$79$$--) {
            $attr$$13$$ = $attrs$$14$$[$i$$79$$], ($childHasAttr$$ = void 0 !== $$$$2$$($child$$1$$).attr($attr$$13$$)) && ($oj$$2$$.$DomUtils$.$_LEGAL_ATTRIBUTES$[$attr$$13$$.name] || $child$$1$$.removeAttribute($attr$$13$$.nodeName))
          }
        }
        $oj$$2$$.$DomUtils$.$_cleanElementHtml$($child$$1$$)
      }else {
        $node$$6$$.removeChild($child$$1$$)
      }
    }
  };
  $oj$$2$$.$DomUtils$.$isAncestor$ = function $$oj$$2$$$$DomUtils$$$isAncestor$$($ancestorNode$$, $node$$7$$) {
    $oj$$2$$.$Assert$.$assertDomElement$($ancestorNode$$);
    $oj$$2$$.$Assert$.$assertDomElement$($node$$7$$);
    for(var $parentNode$$1$$ = $node$$7$$.parentNode;$parentNode$$1$$;) {
      if($parentNode$$1$$ == $ancestorNode$$) {
        return!0
      }
      $parentNode$$1$$ = $parentNode$$1$$.parentNode
    }
    return!1
  };
  $oj$$2$$.$DomUtils$.$isAncestorOrSelf$ = function $$oj$$2$$$$DomUtils$$$isAncestorOrSelf$$($ancestorNode$$1$$, $node$$8$$) {
    $oj$$2$$.$Assert$.$assertDomElement$($ancestorNode$$1$$);
    $oj$$2$$.$Assert$.$assertDomElement$($node$$8$$);
    return $node$$8$$ == $ancestorNode$$1$$ ? !0 : $oj$$2$$.$DomUtils$.$isAncestor$($ancestorNode$$1$$, $node$$8$$)
  };
  $oj$$2$$.$Test$ = {};
  $goog$exportPath_$$("Test", $oj$$2$$.$Test$, $oj$$2$$);
  $oj$$2$$.$Test$.ready = !1;
  $goog$exportPath_$$("Test.ready", $oj$$2$$.$Test$.ready, $oj$$2$$);
  $oj$$2$$.$Test$.$domNodeForLocator$ = function $$oj$$2$$$$Test$$$domNodeForLocator$$($element$$20_locator$$2$$) {
    var $locObj$$ = $element$$20_locator$$2$$;
    if($oj$$2$$.$StringUtils$.$isString$($element$$20_locator$$2$$)) {
      try {
        $locObj$$ = $$$$2$$.parseJSON($element$$20_locator$$2$$)
      }catch($e$$27$$) {
        return null
      }
    }
    return $locObj$$ && $locObj$$.element && ($element$$20_locator$$2$$ = $$$$2$$($locObj$$.element)) ? $oj$$2$$.Components.$getWidgetConstructor$($element$$20_locator$$2$$[0], $locObj$$.component)("getNodeBySubId", {subId:$locObj$$.subId}) : null
  };
  $goog$exportPath_$$("Test.domNodeForLocator", $oj$$2$$.$Test$.$domNodeForLocator$, $oj$$2$$);
  $$$$2$$(document).ready(function() {
    var $div$$inline_365$$ = $$$$2$$("\x3cdiv style\x3d'border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs\x3d);'\x3e\x3c/div\x3e"), $bki$$inline_366$$;
    $div$$inline_365$$.appendTo("body");
    $bki$$inline_366$$ = $div$$inline_365$$.css("backgroundImage");
    $div$$inline_365$$.css("borderTopColor") != $div$$inline_365$$.css("borderRightColor") && (null == $bki$$inline_366$$ || "none" != $bki$$inline_366$$ && "url (invalid-url:)" != $bki$$inline_366$$) || $$$$2$$("body").addClass("oj-hicontrast");
    $div$$inline_365$$.remove()
  })
});
