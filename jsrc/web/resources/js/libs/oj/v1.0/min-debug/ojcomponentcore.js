define(["ojs/ojcore", "jquery", "jqueryui"], function($oj$$2$$, $$$$2$$) {
  function $__ojDynamicGetter$$($callback$$77$$, $needsDynamicContext$$) {
    this.$getCallback$ = function $this$$getCallback$$() {
      return $callback$$77$$
    };
    this.$isDynamicContextNeeded$ = function $this$$isDynamicContextNeeded$$() {
      return $needsDynamicContext$$
    }
  }
  function $_defineDynamicProperty$$($self$$24$$, $options$$93$$, $prop$$47$$, $getter$$, $contextCallback$$) {
    var $override$$ = void 0;
    Object.defineProperty($options$$93$$, $prop$$47$$, {get:function() {
      if($prop$$47$$ === $self$$24$$.$_settingOption$) {
        return $override$$ || {}
      }
      if(void 0 !== $override$$ && !$$$$2$$.isPlainObject($override$$)) {
        return $override$$
      }
      var $defaults$$ = $getter$$($contextCallback$$ ? $contextCallback$$() : $prop$$47$$);
      return $$$$2$$.isPlainObject($defaults$$) ? $$$$2$$.widget.extend({}, $defaults$$ || {}, $override$$ || {}) : void 0 === $override$$ ? $defaults$$ : $override$$
    }, set:function($value$$64$$) {
      $override$$ = $value$$64$$
    }, enumerable:!0})
  }
  $oj$$2$$.Components = {};
  $goog$exportPath_$$("Components", $oj$$2$$.Components, $oj$$2$$);
  $oj$$2$$.Components.$setDefaultOptions$ = function $$oj$$2$$$Components$$setDefaultOptions$$($options$$94$$) {
    $oj$$2$$.Components.$_defaultProperties$ = $$$$2$$.widget.extend($oj$$2$$.Components.$_defaultProperties$ || {}, $options$$94$$)
  };
  $goog$exportPath_$$("Components.setDefaultOptions", $oj$$2$$.Components.$setDefaultOptions$, $oj$$2$$);
  $oj$$2$$.Components.$getDefaultOptions$ = function $$oj$$2$$$Components$$getDefaultOptions$$() {
    return $oj$$2$$.Components.$_defaultProperties$ || {}
  };
  $goog$exportPath_$$("Components.getDefaultOptions", $oj$$2$$.Components.$getDefaultOptions$, $oj$$2$$);
  $oj$$2$$.Components.$createDynamicPropertyGetter$ = function $$oj$$2$$$Components$$createDynamicPropertyGetter$$($callback$$78$$) {
    return new $__ojDynamicGetter$$($callback$$78$$, !0)
  };
  $goog$exportPath_$$("Components.createDynamicPropertyGetter", $oj$$2$$.Components.$createDynamicPropertyGetter$, $oj$$2$$);
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
  }, _create:function() {
    this.$_savedAttributes$ = [];
    this._SaveAttributes(this.element);
    this._CreateComponent();
    this._AfterCreateComponent()
  }, _getCreateOptions:function() {
    var $defaults$$1$$ = {}, $getters_widgetHierNames$$ = {};
    this.$_RegisterTranslatedOptionGetters$($getters_widgetHierNames$$);
    for(var $allProperties_prop$$48_proto$$1$$ in $getters_widgetHierNames$$) {
      $defaults$$1$$[$allProperties_prop$$48_proto$$1$$] = new $__ojDynamicGetter$$($getters_widgetHierNames$$[$allProperties_prop$$48_proto$$1$$])
    }
    $getters_widgetHierNames$$ = [];
    for($allProperties_prop$$48_proto$$1$$ = this.constructor.prototype;null != $allProperties_prop$$48_proto$$1$$ && $allProperties_prop$$48_proto$$1$$.widgetName;) {
      $getters_widgetHierNames$$.push($allProperties_prop$$48_proto$$1$$.widgetName), $allProperties_prop$$48_proto$$1$$ = Object.getPrototypeOf($allProperties_prop$$48_proto$$1$$)
    }
    $getters_widgetHierNames$$.push("default");
    $allProperties_prop$$48_proto$$1$$ = $oj$$2$$.Components.$getDefaultOptions$();
    for(var $i$$65$$ = $getters_widgetHierNames$$.length;0 <= $i$$65$$;$i$$65$$--) {
      var $props$$2$$ = $allProperties_prop$$48_proto$$1$$[$getters_widgetHierNames$$[$i$$65$$]];
      void 0 !== $props$$2$$ && ($defaults$$1$$ = $$$$2$$.widget.extend($defaults$$1$$, $props$$2$$))
    }
    return $defaults$$1$$
  }, _CreateComponent:function() {
    this.activeable = $$$$2$$();
    this.$_setupDynamicProperties$();
    var $element$$inline_335$$ = this.element, $widgetName$$inline_336$$ = this.widgetName, $data$$inline_337$$ = $element$$inline_335$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_337$$ || ($data$$inline_337$$ = [], $element$$inline_335$$.data($_OJ_WIDGET_NAMES_DATA$$, $data$$inline_337$$));
    0 > $data$$inline_337$$.indexOf($widgetName$$inline_336$$) && $data$$inline_337$$.push($widgetName$$inline_336$$)
  }, _AfterCreateComponent:function() {
    this.$contextMenuEventNamespace$ = this.eventNamespace + "contextMenu";
    this.$_setupContextMenu$()
  }, _SaveAttributes:function($element$$13$$) {
    var $self$$25$$ = this;
    $$$$2$$.each($element$$13$$, function($index$$66$$, $ele$$1$$) {
      var $saveAttributes$$ = {}, $attributes$$10$$ = $ele$$1$$.attributes;
      $self$$25$$.$_savedAttributes$.push({element:$ele$$1$$, attributes:$saveAttributes$$});
      $$$$2$$.each($attributes$$10$$, function($index$$67$$, $attr$$10$$) {
        var $nodeName$$2$$ = $attr$$10$$.name, $nodeAttribute$$ = {attr:$attr$$10$$.value};
        $nodeAttribute$$.prop = $$$$2$$($ele$$1$$).prop($nodeName$$2$$);
        $saveAttributes$$[$nodeName$$2$$] = $nodeAttribute$$
      })
    })
  }, $_GetSavedAttributes$:function($element$$14$$) {
    var $savedAttributes$$ = this.$_savedAttributes$;
    $element$$14$$ = $element$$14$$[0];
    for(var $i$$66$$ = 0, $j$$6$$ = $savedAttributes$$.length;$i$$66$$ < $j$$6$$;$i$$66$$++) {
      var $curr$$ = $savedAttributes$$[$i$$66$$];
      if($curr$$.element === $element$$14$$) {
        return $curr$$.attributes
      }
    }
    return{}
  }, $_RestoreAttributes$:function() {
    $$$$2$$.each(this.$_savedAttributes$, function($index$$68$$, $savedAttr$$) {
      var $element$$15$$ = $$$$2$$($savedAttr$$.element), $attributes$$11$$ = $savedAttr$$.attributes;
      if(1 === $element$$15$$.length) {
        for(var $currAttr$$ = $savedAttr$$.element.attributes, $removeAttr$$ = [], $i$$67$$ = 0, $j$$7$$ = $currAttr$$.length;$i$$67$$ < $j$$7$$;$i$$67$$++) {
          $currAttr$$[$i$$67$$].name in $attributes$$11$$ || $removeAttr$$.push($currAttr$$[$i$$67$$].name)
        }
        $i$$67$$ = 0;
        for($j$$7$$ = $removeAttr$$.length;$i$$67$$ < $j$$7$$;$i$$67$$++) {
          $element$$15$$.removeAttr($removeAttr$$[$i$$67$$])
        }
        for(var $attribute$$1$$ in $attributes$$11$$) {
          $element$$15$$.attr($attribute$$1$$, $attributes$$11$$[$attribute$$1$$].attr)
        }
      }
    })
  }, $_RegisterTranslatedOptionGetters$:function($getters$$1$$) {
    var $sectionName$$ = this.$_GetTranslationsSectionName$(), $translations$$2$$ = $oj$$2$$.$Translations$.$getComponentTranslations$($sectionName$$) || {}, $prop$$49$$;
    for($prop$$49$$ in $translations$$2$$) {
      $getters$$1$$[$prop$$49$$] = function $$getters$$1$$$$prop$$49$$$($name$$71$$) {
        return $oj$$2$$.$Translations$.$getComponentTranslations$($sectionName$$)[$name$$71$$]
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
    var $element$$inline_339$$ = this.element, $index$$inline_342_widgetName$$inline_340$$ = this.widgetName, $data$$inline_341$$ = $element$$inline_339$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_341$$ && ($index$$inline_342_widgetName$$inline_340$$ = $data$$inline_341$$.indexOf($index$$inline_342_widgetName$$inline_340$$), 0 <= $index$$inline_342_widgetName$$inline_340$$ && ($data$$inline_341$$.splice($index$$inline_342_widgetName$$inline_340$$, 1), 0 === $data$$inline_341$$.length && $element$$inline_339$$.removeData($_OJ_WIDGET_NAMES_DATA$$)))
  }, option:function($key$$27$$, $value$$65$$) {
    var $retval$$;
    if(0 < arguments.length && "string" === typeof $key$$27$$ && void 0 !== $value$$65$$) {
      var $dotIndex$$ = $key$$27$$.indexOf(".");
      0 < $dotIndex$$ && (this.$_settingOption$ = $key$$27$$.substring(0, $dotIndex$$))
    }
    try {
      $retval$$ = this._superApply(arguments)
    }finally {
      return this.$_settingOption$ = null, $retval$$
    }
  }, _setOption:function($key$$28$$, $value$$66$$) {
    "disabled" === $key$$28$$ ? (this.options[$key$$28$$] = $value$$66$$, this.widget().toggleClass("oj-disabled", !!$value$$66$$).attr("aria-disabled", $value$$66$$), $value$$66$$ && (this.hoverable.removeClass("oj-hover"), this.focusable.removeClass("oj-focus"), this.activeable || (this.activeable = $$$$2$$()), this.activeable.removeClass("oj-active"))) : (this._super($key$$28$$, $value$$66$$), "contextMenu" === $key$$28$$ && this.$_setupContextMenu$());
    return this
  }, $_setupContextMenu$:function() {
    this.$_unbindContextMenu$();
    var $menu$$ = this.options.contextMenu;
    $menu$$ && ($menu$$ = $menu$$.menu);
    $menu$$ || ($menu$$ = this.element.attr("contextmenu"));
    $menu$$ && ($menu$$ = $$$$2$$("#" + $menu$$).data("oj-ojMenu"));
    if($menu$$) {
      var $self$$26$$ = this;
      this.$_listenerNodes$().on("keydown" + this.$contextMenuEventNamespace$ + " contextmenu" + this.$contextMenuEventNamespace$, function($event$$16$$) {
        return"contextmenu" === $event$$16$$.type || 121 == $event$$16$$.which && $event$$16$$.shiftKey ? ($self$$26$$.$_showContextMenu$($menu$$, $event$$16$$), !1) : !0
      })
    }
  }, $_unbindContextMenu$:function() {
    this.$_listenerNodes$().off(this.$contextMenuEventNamespace$)
  }, $_showContextMenu$:function($menu$$1$$, $event$$17$$) {
    $menu$$1$$.show($event$$17$$, {launcher:this.element, focus:"menu"})
  }, $_listenerNodes$:function() {
    var $widget$$ = this.widget();
    return $widget$$ ? $widget$$ : $$$$2$$()
  }, _hoverable:function($element$$16$$) {
    this.hoverable = this.hoverable.add($element$$16$$);
    this._on($element$$16$$, {mouseenter:function($event$$18$$) {
      $$$$2$$($event$$18$$.currentTarget).addClass("oj-hover")
    }, mouseleave:function($event$$19$$) {
      $$$$2$$($event$$19$$.currentTarget).removeClass("oj-hover")
    }})
  }, _focusable:function($element$$17$$) {
    this.focusable = this.focusable.add($element$$17$$);
    this._on($element$$17$$, {focusin:function($event$$20$$) {
      $$$$2$$($event$$20$$.currentTarget).addClass("oj-focus")
    }, focusout:function($event$$21$$) {
      $$$$2$$($event$$21$$.currentTarget).removeClass("oj-focus")
    }})
  }, $_activeable$:function($element$$18$$) {
    this.activeable = this.activeable.add($element$$18$$);
    this._on($element$$18$$, {mousedown:function($event$$22$$) {
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
      for(var $elem$$inline_344$$ = this.element[0], $containers$$inline_345$$ = [];$elem$$inline_344$$;) {
        var $ga$$inline_346_name$$inline_347$$ = $elem$$inline_344$$.getAttribute, $ga$$inline_346_name$$inline_347$$ = $ga$$inline_346_name$$inline_347$$ ? $ga$$inline_346_name$$inline_347$$.call($elem$$inline_344$$, $oj$$2$$.Components.$_OJ_CONTAINER_ATTR$) : null;
        null != $ga$$inline_346_name$$inline_347$$ && $containers$$inline_345$$.push($ga$$inline_346_name$$inline_347$$);
        $elem$$inline_344$$ = $elem$$inline_344$$.parentNode
      }
      $c$$16$$.containers = $containers$$inline_345$$
    }
    return this.$_propertyContext$
  }, $_setupDynamicProperties$:function() {
    function $contextCallback$$1$$() {
      return $self$$27$$.$_getDynamicPropertyContext$()
    }
    var $self$$27$$ = this, $options$$95$$ = this.options, $prop$$50$$;
    for($prop$$50$$ in $options$$95$$) {
      var $val$$19$$ = $options$$95$$[$prop$$50$$];
      if("undefined" !== typeof $val$$19$$ && $val$$19$$ instanceof $__ojDynamicGetter$$) {
        var $callback$$79$$ = $val$$19$$.$getCallback$();
        $$$$2$$.isFunction($callback$$79$$) ? (delete $options$$95$$[$prop$$50$$], $_defineDynamicProperty$$(this, $options$$95$$, $prop$$50$$, $callback$$79$$, $val$$19$$.$isDynamicContextNeeded$() ? $contextCallback$$1$$ : void 0)) : $oj$$2$$.$Logger$.error("Dynamic getter for property %s is not a function", $prop$$50$$)
      }
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
  $oj$$2$$.$editableValue$ = $$$$2$$.widget("oj.editableValue", $$$$2$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{converter:null, disabled:null, help:{definition:null, source:null}, messages:null, messagingDisplayOptions:void 0, pattern:"", required:"", title:"", validators:null, value:null, optionChange:null, rootAttributes:void 0}, option:function($key$$30$$, $value$$67$$) {
    var $deleteSpecialEventKey_retVal$$4$$, $previousValue$$, $previousMsgs$$, $newValue_valueOptionSet$$ = !1, $originalEvent$$, $messagesOptionSet$$ = !1;
    $deleteSpecialEventKey_retVal$$4$$ = !1;
    var $refreshMessagingOptions$$ = !0, $placeholderOptionSet$$ = !1;
    if("string" === typeof $key$$30$$ && void 0 !== $value$$67$$) {
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
          $$$$2$$.extend({}, this.options.messagingDisplayOptions);
          break;
        case "placeholder":
          $placeholderOptionSet$$ = !0
      }
    }else {
      "object" === typeof $key$$30$$ && $key$$30$$ && (void 0 !== $key$$30$$.value && ($newValue_valueOptionSet$$ = !0, $previousValue$$ = this.options.value, $deleteSpecialEventKey_retVal$$4$$ = !0), void 0 !== $key$$30$$.messages && ($messagesOptionSet$$ = !0, $previousMsgs$$ = this.options.messages, $deleteSpecialEventKey_retVal$$4$$ = !0), $key$$30$$.messagingDisplayOptions && $$$$2$$.extend({}, this.options.messagingDisplayOptions), $key$$30$$.placeholder && ($placeholderOptionSet$$ = !0, $refreshMessagingOptions$$ = 
      $key$$30$$._oj_messaging_update ? !1 : !0, delete $key$$30$$._oj_messaging_update), $deleteSpecialEventKey_retVal$$4$$ && ($originalEvent$$ = $key$$30$$._oj_originalEvent, delete $key$$30$$._oj_originalEvent))
    }
    $deleteSpecialEventKey_retVal$$4$$ = this._superApply(arguments);
    $newValue_valueOptionSet$$ && ($newValue_valueOptionSet$$ = this.options.value, this._ValueEquals($previousValue$$, $newValue_valueOptionSet$$) || this._TriggerOptionChange("value", $previousValue$$, $originalEvent$$ || null));
    $messagesOptionSet$$ && !this._ValueEquals($previousMsgs$$, this.options.messages) && this._TriggerOptionChange("messages", $previousMsgs$$, $originalEvent$$ || null);
    $placeholderOptionSet$$ && ($refreshMessagingOptions$$ ? (this.$__customPlaceholderSet$ = !0, this.$_initComponentMessaging$()) : this.$__customPlaceholderSet$ = !1);
    return $deleteSpecialEventKey_retVal$$4$$
  }, isValid:$JSCompiler_get$$("$__valid$"), refresh:function() {
    this._super();
    this.$_doRefresh$(!0)
  }, validate:function($requiredOnly$$) {
    this.$_doRunValidation$(this.options.value, void 0, $requiredOnly$$ ? this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$ : this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
    return this.isValid() ? !0 : !1
  }, $_VALIDATION_MODE$:{$FULL$:1, $VALIDATORS_ONLY$:2, $REQUIRED_VALIDATOR_ONLY$:3, NONE:4}, _CreateComponent:function() {
    this._super()
  }, _AfterCreateComponent:function() {
    this._super();
    this.options.value || (this.options.value = this._GetElementValue());
    "boolean" !== typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
    this.$_createOjLabel$();
    this.$_doRefresh$(!1);
    this.$_initComponentMessaging$();
    this.options.messages || (this.options.messages = []);
    this._TriggerOptionChange("messages", [], null);
    this.widget().addClass("oj-form-control")
  }, _SaveAttributes:function($node$$5$$) {
    var $ret$$2$$ = this._superApply(arguments), $savedAttributes$$1$$ = this.$_GetSavedAttributes$($node$$5$$);
    this.options.required || (this.options.required = "required" in $savedAttributes$$1$$ && $savedAttributes$$1$$.required.prop ? "required" : "optional");
    this.options.title || (this.options.title = "title" in $savedAttributes$$1$$ ? $savedAttributes$$1$$.title.prop || "" : "");
    this.options.pattern || (this.options.pattern = "pattern" in $savedAttributes$$1$$ ? $savedAttributes$$1$$.pattern.prop || "" : "");
    this.options.pattern && (this._GetDefaultValidators().regExp = this.$_getDefaultRegExpValidator$());
    this.options.placeholder || (this.options.placeholder = "placeholder" in $savedAttributes$$1$$ ? $savedAttributes$$1$$.placeholder.prop || "" : "", this.$__customPlaceholderSet$ = !0);
    $$$$2$$.each(["required", "title", "pattern"], function($index$$69$$, $value$$68$$) {
      $value$$68$$ in $savedAttributes$$1$$ && $node$$5$$.removeAttr($value$$68$$)
    });
    return $ret$$2$$
  }, _destroy:function() {
    var $widget$$1$$ = this.widget();
    this.$_clearMessages$(void 0, !0);
    this.$_getComponentMessaging$().$deactivate$(this.$_getMessagingContent$());
    $$$$2$$.each(this.$_OPTION_TO_CSS_MAPPING$, function() {
      $widget$$1$$.removeClass(this.toString())
    });
    $widget$$1$$.removeClass("oj-form-control");
    this.element.removeAttr("aria-required");
    this.$$label$ && this.$$label$._ojLabel("destroy");
    return this._super()
  }, _setOption:function($name$$73$$, $value$$69$$) {
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
        ($hasMessages_maxLevel$$ = $value$$69$$ && 0 !== $value$$69$$.length) ? (this.$__maxSeverityLevel$ = 0, $hasMessages_maxLevel$$ = this.$_getMaxSeverity$(), this.$__valid$ = $hasMessages_maxLevel$$ >= $oj$$2$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !1 : !0) : (this.$__maxSeverityLevel$ = 0, this.$__valid$ = !0);
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$());
        break;
      case "messagingDisplayOptions":
        this.$__messagingDisplayOptions$ = null;
        this.$_initComponentMessaging$();
        break;
      case "pattern":
        this.$__defaultRegExpOptions$.pattern = $value$$69$$;
        $shouldRefresh$$ = !1;
        break;
      case "placeholder":
        this._SetPlaceholder($value$$69$$);
        $shouldRefresh$$ = !1;
        break;
      case "title":
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$))
    }
    $shouldRefresh$$ && (this._Refresh($name$$73$$, $value$$69$$), this.$_refreshAria$($name$$73$$, $value$$69$$), this.$_refreshTheming$($name$$73$$, $value$$69$$));
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
      var $allValidators$$ = [], $validatorsOption$$ = this.options.validators, $vOptions_validator$$, $isValidatorInstance$$ = !0, $defaultValidatorMap_vType$$ = this._GetDefaultValidators(), $defaultValidators_normalizedValidators$$ = [], $vTypeStr$$, $i$$68_val$$20$$;
      for($i$$68_val$$20$$ in $defaultValidatorMap_vType$$) {
        $defaultValidatorMap_vType$$.hasOwnProperty($i$$68_val$$20$$) && $defaultValidators_normalizedValidators$$.push($defaultValidatorMap_vType$$[$i$$68_val$$20$$])
      }
      $allValidators$$ = $allValidators$$.concat($defaultValidators_normalizedValidators$$);
      if($validatorsOption$$) {
        $defaultValidators_normalizedValidators$$ = [];
        for($i$$68_val$$20$$ = 0;$i$$68_val$$20$$ < $validatorsOption$$.length;$i$$68_val$$20$$++) {
          $vOptions_validator$$ = $validatorsOption$$[$i$$68_val$$20$$], "object" === typeof $vOptions_validator$$ ? ($vOptions_validator$$.validate && "function" === typeof $vOptions_validator$$.validate || ($isValidatorInstance$$ = !1), $isValidatorInstance$$ || ($vTypeStr$$ = $vOptions_validator$$.type) && "string" === typeof $vTypeStr$$ && (($defaultValidatorMap_vType$$ = $oj$$2$$.$Validation$.$validatorFactory$($vTypeStr$$)) ? ($vOptions_validator$$ = $$$$2$$.extend({}, $vOptions_validator$$.options) || 
          {}, $vOptions_validator$$.converter = $vOptions_validator$$.converter || this._GetConverter(), $vOptions_validator$$.label = $vOptions_validator$$.label || this.$_getLabelText$(), $vOptions_validator$$ = $defaultValidatorMap_vType$$.createValidator($vOptions_validator$$)) : $oj$$2$$.$Logger$.error("Unable to locate a validatorFactory for the requested type: " + $vTypeStr$$)), $defaultValidators_normalizedValidators$$.push($vOptions_validator$$)) : $oj$$2$$.$Logger$.error("Unable to parse the validator provided:" + 
          $vOptions_validator$$)
        }
        $allValidators$$ = $allValidators$$.concat($defaultValidators_normalizedValidators$$)
      }
      this.$__allValidators$ = $allValidators$$
    }
    return this.$__allValidators$ || []
  }, _ResetAllValidators:function() {
    this.$__allValidators$ && (this.$__allValidators$.length = 0);
    this.$__allValidators$ = null
  }, _IsRequired:function() {
    return"required" === this.options.required
  }, _HandleChangeEvent:function($event$$24$$) {
    var $submittedValue$$ = this._GetDisplayValue();
    this._SetValue($submittedValue$$, $event$$24$$)
  }, _Refresh:function($helpDef_name$$74$$, $helpSource_value$$71$$, $fullRefresh_labelHelpIconWrapper$$) {
    switch($helpDef_name$$74$$) {
      case "converter":
        $helpSource_value$$71$$ = this.options.value;
        this.$_refreshComponentDisplayValue$($helpSource_value$$71$$, !0);
        break;
      case "value":
        this.$_refreshComponentDisplayValue$($helpSource_value$$71$$, $fullRefresh_labelHelpIconWrapper$$);
        break;
      case "required":
        this.$$label$ && this.$$label$._ojLabel("option", "required", $helpSource_value$$71$$);
        break;
      case "help":
        $helpDef_name$$74$$ = this.options.help.definition, $helpSource_value$$71$$ = this.options.help.source, $fullRefresh_labelHelpIconWrapper$$ = this.$_ariaDescribedByHelpIconWrapper$($helpSource_value$$71$$), this.$$label$ && (this.$$label$._ojLabel("option", "describedById", $fullRefresh_labelHelpIconWrapper$$), this.$$label$._ojLabel("option", "help", {definition:$helpDef_name$$74$$, source:$helpSource_value$$71$$}))
    }
  }, _RefreshAriaRequired:function($ariaValue_value$$72$$) {
    var $contentNode$$ = this._GetContentElement();
    ($ariaValue_value$$72$$ = "required" == $ariaValue_value$$72$$ ? !0 : !1) && $contentNode$$ ? $contentNode$$.attr("aria-required", $ariaValue_value$$72$$) : $contentNode$$.removeAttr("aria-required")
  }, _SetDisplayValue:function($displayValue$$) {
    this._GetContentElement().val($displayValue$$)
  }, _SetValue:function($newValue$$2$$, $event$$25$$, $mode$$9_options$$96$$) {
    var $previousValue$$1$$ = this.options.value, $runningValidations$$ = !0;
    if(void 0 === $newValue$$2$$) {
      return $oj$$2$$.$Logger$.warn("Attempt to set a value of undefined"), !1
    }
    if(this._CanSetValue()) {
      $mode$$9_options$$96$$ = $mode$$9_options$$96$$ && $mode$$9_options$$96$$.$validationMode$ ? $mode$$9_options$$96$$.$validationMode$ : this.$_VALIDATION_MODE$.$FULL$;
      if($runningValidations$$ = $mode$$9_options$$96$$ !== this.$_VALIDATION_MODE$.NONE) {
        if($newValue$$2$$ !== this.$__oj_lastElementValue$) {
          if(this.$_setLastElementValue$($newValue$$2$$), this.$_clearMessages$($event$$25$$), $newValue$$2$$ = this.$_doRunValidation$($newValue$$2$$, $event$$25$$, $mode$$9_options$$96$$), !this.isValid()) {
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
    var $styleValue_value$$73$$ = this.options.rootAttributes;
    if($styleValue_value$$73$$) {
      var $widget$$2$$ = this.widget(), $classValue_currStyle_idValue$$ = $styleValue_value$$73$$.id;
      $classValue_currStyle_idValue$$ && $widget$$2$$.attr("id", $classValue_currStyle_idValue$$);
      ($classValue_currStyle_idValue$$ = $styleValue_value$$73$$["class"]) && $widget$$2$$.addClass($classValue_currStyle_idValue$$);
      if($styleValue_value$$73$$ = $styleValue_value$$73$$.style) {
        ($classValue_currStyle_idValue$$ = $widget$$2$$.attr("style")) ? $widget$$2$$.attr("style", $classValue_currStyle_idValue$$ + ";" + $styleValue_value$$73$$) : $widget$$2$$.attr("style", $styleValue_value$$73$$)
      }
    }
  }, _SetPlaceholder:function($value$$74$$) {
    this._GetContentElement().attr("placeholder", $value$$74$$)
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
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-editablevalue"), $_OPTION_TO_CSS_MAPPING$:{disabled:"oj-disabled", required:"oj-required", readOnly:"oj-read-only"}, $__MESSAGING_CONTENT_UPDATE_TYPE$:{$ALL$:1, $VALIDITY_STATE$:2, $CONVERTER_HINT$:3, $VALIDATOR_HINTS$:4, $TITLE$:5}, $_clearMessages$:function($event$$26$$, $silentUpdate$$) {
    if($silentUpdate$$) {
      this.options.messages = []
    }else {
      var $msgsHash$$ = {messages:[]};
      $event$$26$$ && ($msgsHash$$._oj_originalEvent = $event$$26$$);
      this.option($msgsHash$$)
    }
  }, $_doRefresh$:function($fullRefresh$$1$$) {
    if($fullRefresh$$1$$ = $fullRefresh$$1$$ || !1) {
      this.$$label$ && this.$$label$._ojLabel("refresh"), this.$_refreshLabelDependents$(), this.$_initComponentMessaging$()
    }
    this._Refresh("value", this.options.value, $fullRefresh$$1$$);
    this.$_refreshAria$("required", this.options.required);
    this.$_refreshTheming$("required", this.options.required)
  }, $_getLastModelValue$:$JSCompiler_get$$("$__oj_lastModelValue$"), $_getLastElementValue$:$JSCompiler_get$$("$__oj_lastElementValue$"), $_getAriaLabelledByElement$:function($ariaId_elem$$14$$) {
    $ariaId_elem$$14$$ = $ariaId_elem$$14$$.attr("aria-labelledby");
    return void 0 !== $ariaId_elem$$14$$ ? $$$$2$$("label[id\x3d'" + $ariaId_elem$$14$$ + "']") : null
  }, $_createOjLabel$:function() {
    if(this.$$label$ = this._GetLabelElement()) {
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
  }, $_getLabelText$:function() {
    if(this.$$label$) {
      return this.$$label$.text()
    }
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
    this.$__customPlaceholderSet$ || (this.options.placeholder = "");
    $compMessaging$$.activate($messagingTrigger$$, $messagingContent$$)
  }, $_setLastModelValue$:$JSCompiler_set$$("$__oj_lastModelValue$"), $_setLastElementValue$:$JSCompiler_set$$("$__oj_lastElementValue$"), $_updateMessages$:function($message$$27$$, $event$$27$$) {
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
  }, $_doRunValidation$:function($value$$77$$, $event$$29$$, $mode$$10$$) {
    var $newValue$$4$$ = $value$$77$$;
    try {
      $mode$$10$$ === this.$_VALIDATION_MODE$.$FULL$ && ($newValue$$4$$ = this.$_parseValue$($value$$77$$)), this.$_validateValue$($newValue$$4$$, $mode$$10$$ === this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$)
    }catch($ve$$) {
      this.$_processValidationError$($ve$$, $event$$29$$)
    }
    return $newValue$$4$$
  }, $_formatValue$:function($value$$78$$) {
    var $formattedValue$$ = $value$$78$$, $converter$$ = this._GetConverter();
    $converter$$ && "object" === typeof $converter$$ && ($converter$$.format && "function" === typeof $converter$$.format ? $formattedValue$$ = $converter$$.format($value$$78$$) : $oj$$2$$.$Logger$.$level$ > $oj$$2$$.$Logger$.$LEVEL_WARN$ && $oj$$2$$.$Logger$.info("converter does not support the format method."));
    return $formattedValue$$
  }, $_getComponentMessaging$:function() {
    this.$__componentMessaging$ || (this.$__componentMessaging$ = new $oj$$2$$.$ComponentMessaging$(this));
    return this.$__componentMessaging$
  }, $_getDefaultRequiredValidator$:function() {
    var $vf$$;
    this.$__defaultReqValOptions$ = {label:this.$_getLabelText$()};
    return($vf$$ = $oj$$2$$.$Validation$.$validatorFactory$($oj$$2$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED)) ? $vf$$.createValidator(this.$__defaultReqValOptions$) : null
  }, $_getDefaultRegExpValidator$:function() {
    var $vf$$1$$;
    this.$__defaultRegExpOptions$ = {pattern:this.options.pattern, label:this.$_getLabelText$()};
    return($vf$$1$$ = $oj$$2$$.$Validation$.$validatorFactory$($oj$$2$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP)) ? $vf$$1$$.createValidator(this.$__defaultRegExpOptions$) : null
  }, $_getHintsForAllValidators$:function($allValidators$$1$$) {
    var $vHint_validator$$1$$, $validatorHints$$ = [];
    $vHint_validator$$1$$ = "";
    var $i$$69$$;
    this._IsRequired() && ($vHint_validator$$1$$ = this.$_hasRequiredInValidators$($allValidators$$1$$), $vHint_validator$$1$$ || ($vHint_validator$$1$$ = this.$_getDefaultRequiredValidator$(), $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$)));
    for($i$$69$$ = 0;$i$$69$$ < $allValidators$$1$$.length;$i$$69$$++) {
      $vHint_validator$$1$$ = $allValidators$$1$$[$i$$69$$], "object" === typeof $vHint_validator$$1$$ && $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$)
    }
    return $validatorHints$$
  }, $_getMessagingContent$:function($updateType$$) {
    var $messagingContent$$1$$ = {}, $allValidators$$2_converter$$1_converterHint$$ = this._GetConverter(), $validatorHints$$1$$ = [];
    $updateType$$ = $updateType$$ || this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$;
    if($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$) {
      $messagingContent$$1$$.validityState = this.$_getValidityState$()
    }
    ($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$) && $allValidators$$2_converter$$1_converterHint$$ && "object" === typeof $allValidators$$2_converter$$1_converterHint$$ && $allValidators$$2_converter$$1_converterHint$$.getHint && "function" === typeof $allValidators$$2_converter$$1_converterHint$$.getHint && ($allValidators$$2_converter$$1_converterHint$$ = $allValidators$$2_converter$$1_converterHint$$.getHint()) && 
    ($messagingContent$$1$$.converterHint = $allValidators$$2_converter$$1_converterHint$$);
    if($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$) {
      $allValidators$$2_converter$$1_converterHint$$ = this._GetAllValidators(), $validatorHints$$1$$ = this.$_getHintsForAllValidators$($allValidators$$2_converter$$1_converterHint$$), 0 < $validatorHints$$1$$.length && ($messagingContent$$1$$.validatorHint = $validatorHints$$1$$)
    }
    ($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$) && this.options.title && ($messagingContent$$1$$.title = this.options.title);
    return $messagingContent$$1$$
  }, $_hasRequiredInValidators$:function($allValidators$$3$$) {
    var $validator$$2$$ = null, $i$$70$$, $required$$ = null;
    for($i$$70$$ = 0;$i$$70$$ < $allValidators$$3$$.length;$i$$70$$++) {
      if($validator$$2$$ = $allValidators$$3$$[$i$$70$$], $validator$$2$$ instanceof $oj$$2$$.$RequiredValidator$) {
        $required$$ = $validator$$2$$;
        break
      }
    }
    return $required$$
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
    this.$_updateMessages$($newMsg$$, $event$$30$$)
  }, $_refreshAria$:function($option$$1$$, $value$$79$$) {
    this._GetContentElement();
    switch($option$$1$$) {
      case "required":
        this._RefreshAriaRequired($value$$79$$)
    }
  }, $_refreshComponentDisplayValue$:function($value$$80$$, $fullRefresh$$2$$) {
    var $modelValue$$ = $value$$80$$ || this.options.value, $lastModelValue$$;
    $lastModelValue$$ = this.$__oj_lastModelValue$;
    ($fullRefresh$$2$$ || $modelValue$$ !== $lastModelValue$$) && this.$_updateElementDisplayValue$($modelValue$$)
  }, $_refreshLabelDependents$:function() {
    this.$__defaultRegExpOptions$ = {};
    this.$__defaultReqValOptions$ = {};
    this._ResetAllValidators()
  }, $_refreshTheming$:function($option$$2$$, $value$$81$$) {
    this.$_OPTION_TO_CSS_MAPPING$.hasOwnProperty($option$$2$$) && ("required" !== $option$$2$$ ? this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$2$$], !!$value$$81$$) : this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$2$$], "required" === $value$$81$$))
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
  }, $_updateInvalidElementTracker$:$JSCompiler_emptyFn$$(), $_validateValue$:function($value$$82$$, $requiredOnly$$1$$) {
    if(this.$__valid$) {
      var $allValidators$$4$$ = this._GetAllValidators(), $validator$$3$$, $i$$71$$, $reqValRun$$ = !1;
      this._IsRequired() && (($validator$$3$$ = this.$_hasRequiredInValidators$($allValidators$$4$$)) || ($validator$$3$$ = this.$_getDefaultRequiredValidator$()), $validator$$3$$.validate($value$$82$$), $reqValRun$$ = !0);
      if(!$requiredOnly$$1$$) {
        for($i$$71$$ = 0;$i$$71$$ < $allValidators$$4$$.length;$i$$71$$++) {
          $validator$$3$$ = $allValidators$$4$$[$i$$71$$], "object" === typeof $validator$$3$$ && ($validator$$3$$.validate && "function" === typeof $validator$$3$$.validate ? $validator$$3$$ instanceof $oj$$2$$.$RequiredValidator$ && $reqValRun$$ || $validator$$3$$.validate($value$$82$$) : $oj$$2$$.$Logger$.$level$ > $oj$$2$$.$Logger$.$LEVEL_WARN$ && $oj$$2$$.$Logger$.info("validator does not support the validate method."))
        }
      }
    }
  }});
  $oj$$2$$.Components.$setDefaultOptions$({editableValue:{messagingDisplayOptions:$oj$$2$$.Components.$createDynamicPropertyGetter$(function() {
    return{messages:["notewindow"], converterHint:["placeholder", "notewindow"], validatorHint:["notewindow"], title:["notewindow"]}
  })}});
  $oj$$2$$.$__registerWidget$("oj.inputBase", $$$$2$$.oj.editableValue, {version:"1.0.0", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"", _WIDGET_CLASS_NAMES:"", _EVENT_LIST:[{type:"blur", $handlers$:"_HandleSetValue"}, {type:"keydown", $handlers$:function($event$$32$$) {
    $event$$32$$.keyCode === $$$$2$$.ui.keyCode.ENTER && (this._HandleSetValue($event$$32$$), $event$$32$$.preventDefault(), $event$$32$$.stopPropagation())
  }}, {type:"paste", $handlers$:"_HandleSetValue"}], options:{readOnly:null}, getNodeBySubId:function($locator$$1$$) {
    return null == $locator$$1$$ ? this.element ? this.element[0] : null : null
  }, $_GetEventList$:$JSCompiler_get$$("_EVENT_LIST"), _HandleSetValue:function __HandleSetValue($event$$33$$) {
    this._SetValue(this._GetDisplayValue(), $event$$33$$)
  }, _GetSubId:function __getSubId($sub$$) {
    return this.uuid + "_" + $sub$$
  }, _IsRTL:function() {
    return"rtl" === this._GetReadingDirection()
  }, _DoWrapElement:$JSCompiler_get$$("_WIDGET_CLASS_NAMES"), _create:function __create() {
    this._DoWrapElement() && this.$_wrapElement$();
    this.$_SetRootAttributes$();
    var $ret$$3$$ = this._superApply(arguments);
    this._CLASS_NAMES && this.element.addClass(this._CLASS_NAMES);
    this.$_processEventList$();
    this.$_processAttrCheck$();
    this.options.disabled && this.disable();
    "boolean" !== typeof this.options.readOnly ? this.options.readOnly = !!this.element.prop("readonly") : this.element.prop("readonly", this.options.readOnly);
    return $ret$$3$$
  }, $_wrapElement$:function __wrapElement() {
    $$$$2$$(this.element).wrap($$$$2$$("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));
    this.$_wrapper$ = this.element.parent()
  }, $_processEventList$:function __processEventList() {
    for(var $eventList$$1$$ = this.$_GetEventList$(), $i$$72$$ = 0, $j$$8$$ = $eventList$$1$$.length;$i$$72$$ < $j$$8$$;$i$$72$$++) {
      var $handler$$45$$ = $$$$2$$.proxy(function() {
        var $handlers$$5$$ = $eventList$$1$$[$i$$72$$].$handlers$;
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
      this.element.on($eventList$$1$$[$i$$72$$].type, $handler$$45$$)
    }
  }, $_processAttrCheck$:function __processAttrCheck() {
    this.$_resetAttributes$ = [];
    for(var $attrCheck$$ = this._ATTR_CHECK, $i$$73$$ = 0, $j$$9$$ = $attrCheck$$.length;$i$$73$$ < $j$$9$$;$i$$73$$++) {
      var $attr$$11$$ = $attrCheck$$[$i$$73$$].attr, $exists$$ = this.element.is("[" + $attr$$11$$ + "]"), $setMandatoryExists$$ = "setMandatory" in $attrCheck$$[$i$$73$$], $val$$21$$ = this.element.attr($attr$$11$$);
      $exists$$ ? $setMandatoryExists$$ && $val$$21$$ != $attrCheck$$[$i$$73$$].setMandatory && (this.$_resetAttributes$.push({process:"setAttr", param:{attr:$attr$$11$$, val:$val$$21$$}}), this.element.attr($attr$$11$$, $attrCheck$$[$i$$73$$].setMandatory)) : $setMandatoryExists$$ && (this.$_resetAttributes$.push({process:"removeAttr", param:{attr:$attr$$11$$}}), this.element.attr($attr$$11$$, $attrCheck$$[$i$$73$$].setMandatory))
    }
  }, _destroy:function __destroy() {
    for(var $ret$$4$$ = this._superApply(arguments), $attr$$12_eventList$$2$$ = this.$_GetEventList$(), $resetAttributes$$ = this.$_resetAttributes$, $i$$74$$ = 0, $j$$10_param$$3_val$$22$$ = $attr$$12_eventList$$2$$.length;$i$$74$$ < $j$$10_param$$3_val$$22$$;$i$$74$$++) {
      this.element.off($attr$$12_eventList$$2$$[$i$$74$$].type)
    }
    this.widget().removeClass(this._CLASS_NAMES);
    for($i$$74$$ = $resetAttributes$$.length - 1;-1 < $i$$74$$;$i$$74$$--) {
      switch($j$$10_param$$3_val$$22$$ = $resetAttributes$$[$i$$74$$].param || {}, $attr$$12_eventList$$2$$ = $j$$10_param$$3_val$$22$$.attr, $j$$10_param$$3_val$$22$$ = $j$$10_param$$3_val$$22$$.val, $resetAttributes$$[$i$$74$$].process) {
        case "setAttr":
          this.element.attr($attr$$12_eventList$$2$$, $j$$10_param$$3_val$$22$$);
          break;
        case "removeAttr":
          this.element.removeAttr($attr$$12_eventList$$2$$)
      }
    }
    this._DoWrapElement() && this.element.unwrap();
    return $ret$$4$$
  }, _setOption:function __setOption($key$$31$$, $value$$83$$) {
    this._super($key$$31$$, $value$$83$$);
    "disabled" === $key$$31$$ && this.element.attr("disabled", $value$$83$$);
    "readOnly" === $key$$31$$ && this.element.prop("readonly", !!$value$$83$$)
  }, widget:function _widget() {
    return this._DoWrapElement() ? this.$_wrapper$ : this.element
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
    this.$_activated$ ? this.$_reactivate$($target$$73$$, $content$$4$$) : ($$$$2$$.each(this.$_strategies$, function($i$$75$$, $strategy$$) {
      $strategy$$.activate($that$$.$_component$, $target$$73$$, $content$$4$$)
    }), this.$_activated$ = !0)
  };
  $oj$$2$$.$ComponentMessaging$.prototype.update = function $$oj$$2$$$$ComponentMessaging$$$update$($content$$5$$) {
    $oj$$2$$.$Assert$.$assertObject$($content$$5$$);
    $oj$$2$$.$Assert$.$assertBoolean$(this.$_activated$);
    this.$_activated$ && $$$$2$$.each(this.$_strategies$, function($i$$76$$, $strategy$$1$$) {
      $strategy$$1$$.update($content$$5$$)
    })
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$deactivate$ = function $$oj$$2$$$$ComponentMessaging$$$$deactivate$$($content$$6$$) {
    $oj$$2$$.$Assert$.$assertObject$($content$$6$$);
    $$$$2$$.each(this.$_strategies$, function($i$$77$$, $strategy$$2$$) {
      $strategy$$2$$.$deactivate$($content$$6$$)
    });
    this.$_activated$ = !1;
    this.$_strategies$ = {}
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$_createMessagingStrategy$ = function $$oj$$2$$$$ComponentMessaging$$$$_createMessagingStrategy$$($type$$56$$, $options$$97$$) {
    var $strategy$$3$$ = null;
    switch($type$$56$$) {
      case $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$:
        $strategy$$3$$ = new $oj$$2$$.$NoteWindowMessagingStrategy$($options$$97$$);
        break;
      case $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$:
        $strategy$$3$$ = new $oj$$2$$.$PlaceholderMessagingStrategy$($options$$97$$);
        break;
      case $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE:
        $strategy$$3$$ = new $oj$$2$$.$MessagingStrategy$($options$$97$$)
    }
    return $strategy$$3$$
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$_getResolvedMessagingDisplayOptions$ = function $$oj$$2$$$$ComponentMessaging$$$$_getResolvedMessagingDisplayOptions$$() {
    var $artifactsByDisplayType$$ = {}, $artifactDisplayTypeResolved$$ = !1, $compPH$$ = this.$_component$.options.placeholder, $artifact$$, $$messagingPreferences$$ = {}, $self$$28$$ = this;
    $$$$2$$.each(this.$_component$.options.messagingDisplayOptions || {}, function($key$$33$$, $displayTypes$$) {
      $artifactDisplayTypeResolved$$ = !1;
      $artifact$$ = $key$$33$$ + "";
      Array.isArray($displayTypes$$) ? $$$$2$$.each($displayTypes$$, function($index$$71$$, $displayType$$) {
        $artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = $self$$28$$.$_resolveDisplayTypeForArtifact$($artifact$$, $displayType$$, $compPH$$, $$messagingPreferences$$))
      }) : "string" === typeof $displayTypes$$ && ($artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = $self$$28$$.$_resolveDisplayTypeForArtifact$($artifact$$, $displayTypes$$, $compPH$$, $$messagingPreferences$$)));
      $artifactDisplayTypeResolved$$ || ($$messagingPreferences$$[$artifact$$] = $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE)
    });
    $$$$2$$.each($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$, function($type$$57$$, $name$$75$$) {
      $artifactsByDisplayType$$[$name$$75$$] = []
    });
    $$$$2$$.each($$messagingPreferences$$, function($artifact$$1$$, $displayType$$1$$) {
      $artifactsByDisplayType$$[$displayType$$1$$].push($artifact$$1$$)
    });
    return $artifactsByDisplayType$$
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$_resolveDisplayTypeForArtifact$ = function $$oj$$2$$$$ComponentMessaging$$$$_resolveDisplayTypeForArtifact$$($artifact$$2$$, $displayType$$2$$, $compPH$$1$$, $$messagingPreferences$$1$$) {
    var $artifactDisplayTypeResolved$$1$$ = !1;
    switch($displayType$$2$$) {
      case $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$:
        "converterHint" !== $artifact$$2$$ || ($artifactDisplayTypeResolved$$1$$ || $compPH$$1$$) || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0);
        break;
      default:
        $artifactDisplayTypeResolved$$1$$ || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0)
    }
    return $artifactDisplayTypeResolved$$1$$
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
      $artifactsForType$$ && 0 < $artifactsForType$$.length ? $strategy$$4$$ ? $strategy$$4$$ && $strategy$$4$$.$reactivate$($artifactsForType$$, $content$$7$$) : ($strategy$$4$$ = $cm$$.$_createMessagingStrategy$($type$$58$$, $artifactsForType$$), $cm$$.$_strategies$[$type$$58$$] = $strategy$$4$$, $strategy$$4$$.activate($cm$$.$_component$, $target$$74$$, $content$$7$$)) : $strategy$$4$$ && ($strategy$$4$$.$deactivate$($content$$7$$), delete $cm$$.$_strategies$[$type$$58$$])
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
    $content$$9_target$$76$$ && (this.$IsValid$() ? this.$HasMessages$() && $maxSeverity$$3$$ === $oj$$2$$.$Message$.$SEVERITY_LEVEL$.WARNING ? ($removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$), $addClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$)) : ($removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$), $removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$)) : ($removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$), 
    $addClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$), $invalid$$ = !0), $jqRoot$$.removeClass($removeClasses$$.join(" ")).addClass($addClasses$$.join(" ")), $content$$9_target$$76$$.attr({"aria-invalid":$invalid$$}))
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$deactivate$ = function $$oj$$2$$$$MessagingStrategy$$$$deactivate$$() {
    this.$_component$.widget().removeClass($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$).removeClass($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$);
    this.$_target$.removeAttr("aria-invalid").removeAttr("aria-describedby");
    this.$_component$ = this.$_target$ = null
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$reactivate$ = function $$oj$$2$$$$MessagingStrategy$$$$reactivate$$($newDisplayOptions$$, $content$$11$$) {
    this.$Init$($newDisplayOptions$$);
    this.update($content$$11$$)
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
  $oj$$2$$.$MessagingStrategy$.prototype.$_updateMessagingContent$ = function $$oj$$2$$$$MessagingStrategy$$$$_updateMessagingContent$$($content$$12$$) {
    this.$_messagingContent$ = $$$$2$$.extend(this.$_messagingContent$ || {}, $content$$12$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$($displayOptions$$2$$) {
    this.$Init$($displayOptions$$2$$)
  };
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$PlaceholderMessagingStrategy$, $oj$$2$$.$MessagingStrategy$, "oj.PlaceholderMessagingStrategy");
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$Init$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$Init$$($displayOptions$$3$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.$Init$.call(this, $displayOptions$$3$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.activate = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$activate$($component$$3$$, $target$$77$$, $content$$13$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.activate.call(this, $component$$3$$, $target$$77$$, $content$$13$$);
    this.$_refreshPlaceholder$()
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.update = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$update$($content$$14$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.update.call(this, $content$$14$$);
    this.$_refreshPlaceholder$()
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$deactivate$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$deactivate$$($content$$15$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.$deactivate$.call(this, $content$$15$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$_refreshPlaceholder$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$_refreshPlaceholder$$() {
    var $content$$16_hints$$2_target$$78$$ = this.$_target$;
    this.$_component$.widget();
    if(this.$ShowPlaceholderContent$() && $content$$16_hints$$2_target$$78$$ && ($content$$16_hints$$2_target$$78$$ = this.$GetConverterHint$(), $content$$16_hints$$2_target$$78$$ = $content$$16_hints$$2_target$$78$$.length ? $content$$16_hints$$2_target$$78$$[0] : "")) {
      var $values$$6$$ = {};
      $values$$6$$.placeholder = $content$$16_hints$$2_target$$78$$;
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
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.activate = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$activate$($component$$4$$, $target$$79$$, $content$$17$$) {
    $oj$$2$$.$NoteWindowMessagingStrategy$.$superclass$.activate.call(this, $component$$4$$, $target$$79$$, $content$$17$$);
    this.$_initTooltip$();
    this.update($content$$17$$)
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.update = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$update$($content$$18$$) {
    $oj$$2$$.$NoteWindowMessagingStrategy$.$superclass$.update.call(this, $content$$18$$)
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$deactivate$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$deactivate$$($content$$19$$) {
    this.$_target$.off("mouseleave", this.$_handleMouseLeave$).off("focusin", this.$_showTooltip$).off("focusout", this.$_hideTooltip$);
    this.$_destroyTooltip$();
    $oj$$2$$.$NoteWindowMessagingStrategy$.$superclass$.$deactivate$.call(this, $content$$19$$)
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
    var $self$$29$$ = this;
    if(!this.$_isTooltipInitialized$()) {
      var $jqTarget$$ = this.$_target$;
      this.$_component$.widget();
      this.$_tooltip$ = $jqTarget$$.tooltip({position:{my:"left+14 bottom", at:"right top", of:$jqTarget$$, using:function($position$$, $feedback$$) {
        $$$$2$$(this).css($position$$);
        $$$$2$$("\x3cdiv\x3e").addClass("arrow").addClass($feedback$$.vertical).addClass($feedback$$.horizontal).appendTo(this)
      }}, open:$JSCompiler_emptyFn$$(), close:$JSCompiler_emptyFn$$(), content:function() {
        return $self$$29$$.$_buildNoteWindowHtml$()
      }, items:$jqTarget$$}).off("mouseover mouseout").on("mouseleave", {target:$$$$2$$(this)}, $self$$29$$.$_handleMouseLeave$).on("focusout", {target:$$$$2$$(this)}, $self$$29$$.$_hideTooltip$).on("focusin", {target:$$$$2$$(this)}, $self$$29$$.$_showTooltip$)
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
    $$$$2$$.each($nwContent$$, function($i$$78$$, $content$$20$$) {
      $content$$20$$ && ($addSeparator$$ ? $nwHtml$$ = $nwHtml$$.concat($that$$1$$.$_getSeparatorHtml$($document$$1$$)) : $addSeparator$$ = !0, $nwHtml$$ = $nwHtml$$.concat($content$$20$$))
    });
    return $nwHtml$$
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_buildMessagesHtml$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_buildMessagesHtml$$() {
    var $messages$$6_messagesByType$$, $content$$21$$ = "", $i$$79$$, $j$$11_maxSeverity$$4$$, $severityStr$$, $severityLevel$$, $detail$$4_message$$28_messageObj$$;
    $j$$11_maxSeverity$$4$$ = this.$GetMaxSeverity$();
    var $summary$$1$$, $messagesByTypes$$ = {};
    $messages$$6_messagesByType$$ = [];
    if(this.$HasMessages$()) {
      $messages$$6_messagesByType$$ = this.$GetMessages$();
      for($i$$79$$ = 0;$i$$79$$ < $messages$$6_messagesByType$$.length;$i$$79$$++) {
        $detail$$4_message$$28_messageObj$$ = $messages$$6_messagesByType$$[$i$$79$$], $detail$$4_message$$28_messageObj$$ = $detail$$4_message$$28_messageObj$$ instanceof $oj$$2$$.$Message$ ? $detail$$4_message$$28_messageObj$$ : new $oj$$2$$.$Message$($detail$$4_message$$28_messageObj$$.summary, $detail$$4_message$$28_messageObj$$.detail, $detail$$4_message$$28_messageObj$$.severity), $severityLevel$$ = $oj$$2$$.$Message$.$getSeverityLevel$($detail$$4_message$$28_messageObj$$.severity), $messagesByTypes$$[$severityLevel$$] || 
        ($messagesByTypes$$[$severityLevel$$] = []), $messagesByTypes$$[$severityLevel$$].push($detail$$4_message$$28_messageObj$$)
      }
      for($i$$79$$ = $j$$11_maxSeverity$$4$$;$i$$79$$ >= $oj$$2$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION;$i$$79$$--) {
        for($messages$$6_messagesByType$$ = $messagesByTypes$$[$i$$79$$] || [], $j$$11_maxSeverity$$4$$ = 0;$j$$11_maxSeverity$$4$$ < $messages$$6_messagesByType$$.length;$j$$11_maxSeverity$$4$$++) {
          $detail$$4_message$$28_messageObj$$ = $messages$$6_messagesByType$$[$j$$11_maxSeverity$$4$$], $oj$$2$$.$Assert$.$assertPrototype$($detail$$4_message$$28_messageObj$$, $oj$$2$$.$Message$), $severityLevel$$ = $oj$$2$$.$Message$.$getSeverityLevel$($detail$$4_message$$28_messageObj$$.severity), $severityStr$$ = this.$_getSeverityTranslatedString$($severityLevel$$), $summary$$1$$ = $detail$$4_message$$28_messageObj$$.summary || $severityStr$$, $detail$$4_message$$28_messageObj$$ = $detail$$4_message$$28_messageObj$$.detail || 
          "", $content$$21$$ = $content$$21$$.concat("\x3cdiv class\x3d'oj-message'\x3e").concat("\x3cspan class\x3d'" + this.$_getSeverityIconSelector$($severityLevel$$) + "' title\x3d'" + $severityStr$$ + "' role\x3d'img'\x3e\x3c/span\x3e").concat("\x3cspan class\x3d'oj-message-content'\x3e").concat("\x3cdiv class\x3d'oj-message-summary'\x3e" + $summary$$1$$ + "\x3c/div\x3e"), $detail$$4_message$$28_messageObj$$ && ($content$$21$$ = $content$$21$$.concat("\x3cdiv class\x3d'oj-message-detail'\x3e" + 
          $detail$$4_message$$28_messageObj$$ + "\x3c/div\x3e")), $content$$21$$ = $content$$21$$.concat("\x3c/div\x3e")
        }
      }
    }
    return $content$$21$$
  };
  $oj$$2$$.$NoteWindowMessagingStrategy$.prototype.$_buildHintsHtml$ = function $$oj$$2$$$$NoteWindowMessagingStrategy$$$$_buildHintsHtml$$($document$$2$$) {
    var $hints$$3$$ = [], $jHintsDom$$, $i$$80$$;
    this.$ShowValidatorHint$() && ($hints$$3$$ = $hints$$3$$.concat(this.$GetValidatorHints$()));
    this.$ShowConverterHint$() && ($hints$$3$$ = $hints$$3$$.concat(this.$GetConverterHint$()));
    if($hints$$3$$ && 0 < $hints$$3$$.length) {
      for($jHintsDom$$ = $$$$2$$($document$$2$$.createElement("div")), $jHintsDom$$.addClass("oj-form-control-hint"), $i$$80$$ = 0;$i$$80$$ < $hints$$3$$.length;$i$$80$$++) {
        $jHintsDom$$.append(this.$_getHintDom$($document$$2$$, $hints$$3$$[$i$$80$$]))
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
  $oj$$2$$.$DomUtils$.$_HTML_START_TAG$ = "\\x3chtml\\x3e";
  $oj$$2$$.$DomUtils$.$_HTML_END_TAG$ = "\\x3c/html\\x3e";
  $oj$$2$$.$DomUtils$.$_LEGAL_ELEMENTS$ = {SPAN:1, B:1, A:1, I:1, EM:1, BR:1, HR:1, LI:1, OL:1, UL:1, P:1, TT:1, BIG:1, SMALL:1, PRE:1};
  $oj$$2$$.$DomUtils$.$_LEGAL_ATTRIBUTES$ = {"class":1, style:1, href:1};
  $oj$$2$$.$DomUtils$.$isHTMLContent$ = function $$oj$$2$$$$DomUtils$$$isHTMLContent$$($content$$22$$) {
    return 0 === $content$$22$$.indexOf($oj$$2$$.$DomUtils$.$_HTML_START_TAG$) && $content$$22$$.lastIndexOf($oj$$2$$.$DomUtils$.$_HTML_END_TAG$) === $content$$22$$.length - 7 ? !0 : !1
  };
  $oj$$2$$.$DomUtils$.$cleanHtml$ = function $$oj$$2$$$$DomUtils$$$cleanHtml$$($value$$84$$) {
    var $offSpan$$ = $$$$2$$(document.createElement("span")).get(0);
    ($offSpan$$.innerHTML = $value$$84$$) && 0 <= $value$$84$$.indexOf("\\x3c") && $oj$$2$$.$DomUtils$.$_cleanElementHtml$($offSpan$$);
    return $offSpan$$
  };
  $oj$$2$$.$DomUtils$.$_cleanElementHtml$ = function $$oj$$2$$$$DomUtils$$$_cleanElementHtml$$($node$$6$$) {
    for(var $children$$ = $node$$6$$.childNodes, $child$$1$$, $attrs$$15$$, $attr$$13$$, $childHasAttr$$, $i$$81$$, $count$$10$$ = $children$$.length - 1;0 <= $count$$10$$;) {
      if($child$$1$$ = $children$$.item($count$$10$$), 1 === $child$$1$$.nodeType) {
        if($oj$$2$$.$DomUtils$.$_LEGAL_ELEMENTS$[$child$$1$$.nodeName]) {
          for($attrs$$15$$ = $child$$1$$.attributes, $i$$81$$ = $attrs$$15$$.length - 1;0 <= $i$$81$$;$i$$81$$--) {
            $attr$$13$$ = $attrs$$15$$[$i$$81$$], ($childHasAttr$$ = void 0 !== $$$$2$$($child$$1$$).attr($attr$$13$$)) && ($oj$$2$$.$DomUtils$.$_LEGAL_ATTRIBUTES$[$attr$$13$$.name] || $child$$1$$.removeAttribute($attr$$13$$.nodeName))
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
  $oj$$2$$.$DomUtils$.$addResizeListener$ = function $$oj$$2$$$$DomUtils$$$addResizeListener$$($elem$$15$$, $listener$$32$$) {
    var $jelem$$1$$ = $$$$2$$($elem$$15$$), $tracker$$ = $jelem$$1$$.data($oj$$2$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null == $tracker$$ && ($tracker$$ = new $oj$$2$$.$DomUtils$.$_ResizeTracker$($elem$$15$$), $jelem$$1$$.data($oj$$2$$.$DomUtils$.$_RESIZE_TRACKER_KEY$, $tracker$$), $tracker$$.start());
    $tracker$$.addListener($listener$$32$$)
  };
  $oj$$2$$.$DomUtils$.$removeResizeListener$ = function $$oj$$2$$$$DomUtils$$$removeResizeListener$$($elem$$16$$, $listener$$33$$) {
    var $jelem$$2$$ = $$$$2$$($elem$$16$$), $tracker$$1$$ = $jelem$$2$$.data($oj$$2$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null != $tracker$$1$$ && ($tracker$$1$$.removeListener($listener$$33$$), $tracker$$1$$.$isEmpty$() && ($tracker$$1$$.stop(), $jelem$$2$$.removeData($oj$$2$$.$DomUtils$.$_RESIZE_TRACKER_KEY$)))
  };
  $oj$$2$$.$DomUtils$.$_ResizeTracker$ = function $$oj$$2$$$$DomUtils$$$_ResizeTracker$$($div$$1$$) {
    this.$_listeners$ = jQuery.Callbacks();
    this.addListener = function $this$addListener$($listener$$34$$) {
      this.$_listeners$.add($listener$$34$$)
    };
    this.removeListener = function $this$removeListener$($listener$$35$$) {
      this.$_listeners$.remove($listener$$35$$)
    };
    this.$isEmpty$ = function $this$$isEmpty$$() {
      return this.$_listeners$.empty()
    };
    this.start = function $this$start$() {
      var $firstChild$$ = $div$$1$$.childNodes[0];
      this.$_detectExpansion$ = document.createElement("div");
      this.$_detectExpansion$.className = "oj-helper-detect-resize";
      var $contractionChild_expansionChild$$ = document.createElement("div");
      this.$_detectExpansion$.appendChild($contractionChild_expansionChild$$);
      $div$$1$$.insertBefore(this.$_detectExpansion$, $firstChild$$);
      this.$_scrollListener$ = this.$_handleScroll$.bind(this);
      this.$_detectExpansion$.addEventListener("scroll", this.$_scrollListener$, !1);
      this.$_detectContraction$ = document.createElement("div");
      this.$_detectContraction$.className = "oj-helper-detect-resize";
      $contractionChild_expansionChild$$ = document.createElement("div");
      $contractionChild_expansionChild$$.style.width = "200%";
      $contractionChild_expansionChild$$.style.height = "200%";
      this.$_detectContraction$.appendChild($contractionChild_expansionChild$$);
      $div$$1$$.insertBefore(this.$_detectContraction$, $firstChild$$);
      this.$_detectContraction$.addEventListener("scroll", this.$_scrollListener$, !1);
      this.$_adjust$(this.$_detectExpansion$.offsetWidth, this.$_detectExpansion$.offsetHeight)
    };
    this.stop = function $this$stop$() {
      this.$_detectExpansion$.removeEventListener("scroll", this.$_scrollListener$);
      this.$_detectContraction$.removeEventListener("scroll", this.$_scrollListener$);
      $div$$1$$.removeChild(this.$_detectExpansion$);
      $div$$1$$.removeChild(this.$_detectContraction$)
    };
    this.$_handleScroll$ = function $this$$_handleScroll$$($evt$$17_newWidth$$) {
      $evt$$17_newWidth$$.stopPropagation();
      $evt$$17_newWidth$$ = this.$_detectExpansion$.offsetWidth;
      var $newHeight$$ = this.$_detectExpansion$.offsetHeight;
      if(this.$_oldWidth$ != $evt$$17_newWidth$$ || this.$_oldHeight$ != $newHeight$$) {
        this.$_adjust$($evt$$17_newWidth$$, $newHeight$$), this.$_listeners$.fire($evt$$17_newWidth$$, $newHeight$$)
      }
    };
    this.$_adjust$ = function $this$$_adjust$$($width$$12$$, $height$$11$$) {
      this.$_oldWidth$ = $width$$12$$;
      this.$_oldHeight$ = $height$$11$$;
      var $expansionChild$$1$$ = this.$_detectExpansion$.firstChild;
      $expansionChild$$1$$.style.width = $width$$12$$ + 1 + "px";
      $expansionChild$$1$$.style.height = $height$$11$$ + 1 + "px";
      this.$_detectExpansion$.scrollLeft = 1;
      this.$_detectExpansion$.scrollTop = 1;
      this.$_detectContraction$.scrollLeft = $width$$12$$;
      this.$_detectContraction$.scrollTop = $height$$11$$
    }
  };
  $oj$$2$$.$DomUtils$.$_RESIZE_TRACKER_KEY$ = "_ojResizeTracker";
  $oj$$2$$.$Test$ = {};
  $goog$exportPath_$$("Test", $oj$$2$$.$Test$, $oj$$2$$);
  $oj$$2$$.$Test$.ready = !1;
  $goog$exportPath_$$("Test.ready", $oj$$2$$.$Test$.ready, $oj$$2$$);
  $oj$$2$$.$Test$.$domNodeForLocator$ = function $$oj$$2$$$$Test$$$domNodeForLocator$$($element$$19_locator$$2$$) {
    var $locObj$$ = $element$$19_locator$$2$$;
    if($oj$$2$$.$StringUtils$.$isString$($element$$19_locator$$2$$)) {
      try {
        $locObj$$ = $$$$2$$.parseJSON($element$$19_locator$$2$$)
      }catch($e$$27$$) {
        return null
      }
    }
    return $locObj$$ && $locObj$$.element && ($element$$19_locator$$2$$ = $$$$2$$($locObj$$.element)) ? $oj$$2$$.Components.$getWidgetConstructor$($element$$19_locator$$2$$[0], $locObj$$.component)("getNodeBySubId", {subId:$locObj$$.subId}) : null
  };
  $goog$exportPath_$$("Test.domNodeForLocator", $oj$$2$$.$Test$.$domNodeForLocator$, $oj$$2$$);
  $$$$2$$(document).ready(function() {
    var $div$$inline_361$$ = $$$$2$$("\x3cdiv style\x3d'border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs\x3d);'\x3e\x3c/div\x3e"), $bki$$inline_362$$;
    $div$$inline_361$$.appendTo("body");
    $bki$$inline_362$$ = $div$$inline_361$$.css("backgroundImage");
    $div$$inline_361$$.css("borderTopColor") != $div$$inline_361$$.css("borderRightColor") && (null == $bki$$inline_362$$ || "none" != $bki$$inline_362$$ && "url (invalid-url:)" != $bki$$inline_362$$) || $$$$2$$("body").addClass("oj-hicontrast");
    $div$$inline_361$$.remove()
  });
  $$$$2$$(document).ready(function() {
    "Microsoft Internet Explorer" == navigator.appName && $$$$2$$("html").addClass("oj-slow-borderradius oj-slow-cssgradients oj-slow-boxshadow")
  })
});
