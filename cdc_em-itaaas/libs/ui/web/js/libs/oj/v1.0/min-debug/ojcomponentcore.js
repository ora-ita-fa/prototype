define(["ojs/ojcore", "jquery", "jqueryui"], function($oj$$2$$, $$$$2$$) {
  function $__ojDynamicGetter$$($callback$$77$$, $needsDynamicContext$$) {
    this.$getCallback$ = function $this$$getCallback$$() {
      return $callback$$77$$
    };
    this.$isDynamicContextNeeded$ = function $this$$isDynamicContextNeeded$$() {
      return $needsDynamicContext$$
    }
  }
  function $_defineDynamicProperty$$($self$$24$$, $options$$95$$, $prop$$47$$, $getter$$, $contextCallback$$) {
    var $override$$ = void 0;
    Object.defineProperty($options$$95$$, $prop$$47$$, {get:function() {
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
  $oj$$2$$.Components.$setDefaultOptions$ = function $$oj$$2$$$Components$$setDefaultOptions$$($options$$96$$) {
    $oj$$2$$.Components.$_defaultProperties$ = $$$$2$$.widget.extend($oj$$2$$.Components.$_defaultProperties$ || {}, $options$$96$$)
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
  var $_OJ_WIDGET_NAMES_DATA$$ = "oj-component-names";
  $$$$2$$.widget("oj.baseComponent", {options:{contextMenu:null, rootAttributes:void 0}, refresh:function() {
    this.$_propertyContext$ = null
  }, $_SetRootAttributes$:function() {
    var $value$$65$$ = this.options.rootAttributes;
    if($value$$65$$) {
      var $widget$$ = this.widget();
      if(null != $widget$$) {
        var $classValue_styleValue$$ = $value$$65$$["class"];
        $classValue_styleValue$$ && $widget$$.addClass($classValue_styleValue$$);
        if($classValue_styleValue$$ = $value$$65$$.style) {
          var $currStyle$$ = $widget$$.attr("style");
          $currStyle$$ ? $widget$$.attr("style", $currStyle$$ + ";" + $classValue_styleValue$$) : $widget$$.attr("style", $classValue_styleValue$$)
        }
        $value$$65$$ = $$$$2$$.extend({}, $value$$65$$);
        delete $value$$65$$["class"];
        delete $value$$65$$.style;
        $widget$$.attr($value$$65$$)
      }
    }
  }, _create:function() {
    this.$_SaveAttributes$(this.element);
    this.$_InitOptions$();
    this.$_ComponentCreate$();
    this.$_AfterCreate$()
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
    for(var $i$$66$$ = $getters_widgetHierNames$$.length;0 <= $i$$66$$;$i$$66$$--) {
      var $props$$2$$ = $allProperties_prop$$48_proto$$1$$[$getters_widgetHierNames$$[$i$$66$$]];
      void 0 !== $props$$2$$ && ($defaults$$1$$ = $$$$2$$.widget.extend($defaults$$1$$, $props$$2$$))
    }
    return $defaults$$1$$
  }, $_InitOptions$:function() {
    this.$_setupDynamicProperties$()
  }, $_ComponentCreate$:function() {
    this.activeable = $$$$2$$();
    this.$_setupDynamicProperties$();
    var $element$$inline_332$$ = this.element, $widgetName$$inline_333$$ = this.widgetName, $data$$inline_334$$ = $element$$inline_332$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_334$$ || ($data$$inline_334$$ = [], $element$$inline_332$$.data($_OJ_WIDGET_NAMES_DATA$$, $data$$inline_334$$));
    0 > $data$$inline_334$$.indexOf($widgetName$$inline_333$$) && $data$$inline_334$$.push($widgetName$$inline_333$$)
  }, $_AfterCreate$:function() {
    this.$_SetRootAttributes$();
    this.$contextMenuEventNamespace$ = this.eventNamespace + "contextMenu";
    this.$_setupContextMenu$()
  }, $_SaveAttributes$:function($element$$13$$) {
    var $self$$25$$ = this;
    this.$_savedAttributes$ = [];
    $$$$2$$.each($element$$13$$, function($index$$66$$, $ele$$1$$) {
      var $saveAttributes$$ = {}, $attributes$$10$$ = $ele$$1$$.attributes;
      $self$$25$$.$_savedAttributes$.push({element:$ele$$1$$, attributes:$saveAttributes$$});
      $$$$2$$.each($attributes$$10$$, function($index$$67$$, $attr$$10$$) {
        var $attrName$$ = $attr$$10$$.name, $attrValues$$ = {attr:$attr$$10$$.value};
        $attrValues$$.prop = $$$$2$$($ele$$1$$).prop($attrName$$);
        $saveAttributes$$[$attrName$$] = $attrValues$$
      })
    })
  }, $_GetSavedAttributes$:function($element$$14$$) {
    var $savedAttributes$$ = this.$_savedAttributes$;
    $element$$14$$ = $element$$14$$[0];
    for(var $i$$67$$ = 0, $j$$7$$ = $savedAttributes$$.length;$i$$67$$ < $j$$7$$;$i$$67$$++) {
      var $curr$$ = $savedAttributes$$[$i$$67$$];
      if($curr$$.element === $element$$14$$) {
        return $curr$$.attributes
      }
    }
    return{}
  }, $_RestoreAttributes$:function() {
    $$$$2$$.each(this.$_savedAttributes$, function($index$$68$$, $savedAttr$$) {
      var $element$$15$$ = $$$$2$$($savedAttr$$.element), $attributes$$11$$ = $savedAttr$$.attributes;
      if(1 === $element$$15$$.length) {
        for(var $currAttr$$ = $savedAttr$$.element.attributes, $removeAttr$$ = [], $i$$68$$ = 0, $j$$8$$ = $currAttr$$.length;$i$$68$$ < $j$$8$$;$i$$68$$++) {
          $currAttr$$[$i$$68$$].name in $attributes$$11$$ || $removeAttr$$.push($currAttr$$[$i$$68$$].name)
        }
        $i$$68$$ = 0;
        for($j$$8$$ = $removeAttr$$.length;$i$$68$$ < $j$$8$$;$i$$68$$++) {
          $element$$15$$.removeAttr($removeAttr$$[$i$$68$$])
        }
        for(var $attribute$$1$$ in $attributes$$11$$) {
          $element$$15$$.attr($attribute$$1$$, $attributes$$11$$[$attribute$$1$$].attr)
        }
      }
    })
  }, $_RegisterTranslatedOptionGetters$:function($getters$$1$$) {
    var $sectionName$$ = this.$_GetTranslationsSectionName$(), $translations$$2$$ = $oj$$2$$.$Translations$.$getComponentTranslations$($sectionName$$) || {}, $prop$$49$$;
    for($prop$$49$$ in $translations$$2$$) {
      $getters$$1$$[$prop$$49$$] = function $$getters$$1$$$$prop$$49$$$($name$$72$$) {
        return $oj$$2$$.$Translations$.$getComponentTranslations$($sectionName$$)[$name$$72$$]
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
    var $element$$inline_336$$ = this.element, $index$$inline_339_widgetName$$inline_337$$ = this.widgetName, $data$$inline_338$$ = $element$$inline_336$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_338$$ && ($index$$inline_339_widgetName$$inline_337$$ = $data$$inline_338$$.indexOf($index$$inline_339_widgetName$$inline_337$$), 0 <= $index$$inline_339_widgetName$$inline_337$$ && ($data$$inline_338$$.splice($index$$inline_339_widgetName$$inline_337$$, 1), 0 === $data$$inline_338$$.length && $element$$inline_336$$.removeData($_OJ_WIDGET_NAMES_DATA$$)))
  }, option:function($key$$27$$, $value$$66$$) {
    var $retval$$;
    if(0 < arguments.length && "string" === typeof $key$$27$$ && void 0 !== $value$$66$$) {
      var $dotIndex$$ = $key$$27$$.indexOf(".");
      0 < $dotIndex$$ && (this.$_settingOption$ = $key$$27$$.substring(0, $dotIndex$$))
    }
    try {
      $retval$$ = this._superApply(arguments)
    }finally {
      return this.$_settingOption$ = null, $retval$$
    }
  }, _setOption:function($key$$28$$, $value$$67$$) {
    "disabled" === $key$$28$$ ? (this.options[$key$$28$$] = $value$$67$$, this.widget().toggleClass("oj-disabled", !!$value$$67$$).attr("aria-disabled", $value$$67$$), $value$$67$$ && (this.hoverable.removeClass("oj-hover"), this.focusable.removeClass("oj-focus"), this.activeable || (this.activeable = $$$$2$$()), this.activeable.removeClass("oj-active"))) : (this._super($key$$28$$, $value$$67$$), "contextMenu" === $key$$28$$ && this.$_setupContextMenu$());
    return this
  }, $_setupContextMenu$:function() {
    this.$_unbindContextMenu$();
    var $menu$$ = this.options.contextMenu;
    $menu$$ || ($menu$$ = this.element.attr("contextmenu")) && ($menu$$ = "#" + $menu$$);
    $menu$$ && ($menu$$ = $$$$2$$($menu$$).data("oj-ojMenu"));
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
    var $widget$$1$$ = this.widget();
    return $widget$$1$$ ? $widget$$1$$ : $$$$2$$()
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
  }, $_GetReadingDirection$:function() {
    return"rtl" === document.documentElement.dir ? "rtl" : "ltr"
  }, $_getDynamicPropertyContext$:function() {
    if(!this.$_propertyContext$) {
      var $c$$16$$ = {};
      this.$_propertyContext$ = $c$$16$$;
      for(var $elem$$inline_341$$ = this.element[0], $containers$$inline_342$$ = [];$elem$$inline_341$$;) {
        var $ga$$inline_343_name$$inline_344$$ = $elem$$inline_341$$.getAttribute, $ga$$inline_343_name$$inline_344$$ = $ga$$inline_343_name$$inline_344$$ ? $ga$$inline_343_name$$inline_344$$.call($elem$$inline_341$$, $oj$$2$$.Components.$_OJ_CONTAINER_ATTR$) : null;
        null != $ga$$inline_343_name$$inline_344$$ && $containers$$inline_342$$.push($ga$$inline_343_name$$inline_344$$);
        $elem$$inline_341$$ = $elem$$inline_341$$.parentNode
      }
      $c$$16$$.containers = $containers$$inline_342$$
    }
    return this.$_propertyContext$
  }, $_setupDynamicProperties$:function() {
    function $contextCallback$$1$$() {
      return $self$$27$$.$_getDynamicPropertyContext$()
    }
    var $self$$27$$ = this, $options$$97$$ = this.options, $prop$$50$$;
    for($prop$$50$$ in $options$$97$$) {
      var $val$$19$$ = $options$$97$$[$prop$$50$$];
      if("undefined" !== typeof $val$$19$$ && $val$$19$$ instanceof $__ojDynamicGetter$$) {
        var $callback$$79$$ = $val$$19$$.$getCallback$();
        $$$$2$$.isFunction($callback$$79$$) ? (delete $options$$97$$[$prop$$50$$], $_defineDynamicProperty$$(this, $options$$97$$, $prop$$50$$, $callback$$79$$, $val$$19$$.$isDynamicContextNeeded$() ? $contextCallback$$1$$ : void 0)) : $oj$$2$$.$Logger$.error("Dynamic getter for property %s is not a function", $prop$$50$$)
      }
    }
  }});
  $oj$$2$$.$__registerWidget$ = function $$oj$$2$$$$__registerWidget$$($name$$73_namespace$$2$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$) {
    $$$$2$$.widget($name$$73_namespace$$2$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$);
    if("oj.oj" === $name$$73_namespace$$2$$.substring(0, 5) || "oj._oj" === $name$$73_namespace$$2$$.substring(0, 6)) {
      $base$$3_nameArray_simpleName$$ = $name$$73_namespace$$2$$.split(".");
      $name$$73_namespace$$2$$ = $base$$3_nameArray_simpleName$$[0];
      $base$$3_nameArray_simpleName$$ = $base$$3_nameArray_simpleName$$[1];
      var $fullName$$ = $name$$73_namespace$$2$$ + "-" + $base$$3_nameArray_simpleName$$;
      $$$$2$$.expr[":"][("_" === $base$$3_nameArray_simpleName$$.substring(0, 1) ? "_" + $name$$73_namespace$$2$$ + "-" + $base$$3_nameArray_simpleName$$.substring(3) : $name$$73_namespace$$2$$ + "-" + $base$$3_nameArray_simpleName$$.substring(2)).toLowerCase()] = function $$$$$2$$$expr$__1$_$$base$$3_nameArray_simpleName$$$substring$_$$name$$73_namespace$$2$$$__2$$base$$3_nameArray_simpleName$$$substring$$name$$73_namespace$$2$$$__3$$base$$3_nameArray_simpleName$$$substring$toLowerCase$($elem$$13$$) {
        return!!$$$$2$$.data($elem$$13$$, $fullName$$)
      }
    }
  };
  $oj$$2$$.$DomUtils$ = {};
  $oj$$2$$.$DomUtils$.$_HTML_START_TAG$ = "\\x3chtml\\x3e";
  $oj$$2$$.$DomUtils$.$_HTML_END_TAG$ = "\\x3c/html\\x3e";
  $oj$$2$$.$DomUtils$.$_LEGAL_ELEMENTS$ = {SPAN:1, B:1, A:1, I:1, EM:1, BR:1, HR:1, LI:1, OL:1, UL:1, P:1, TT:1, BIG:1, SMALL:1, PRE:1};
  $oj$$2$$.$DomUtils$.$_LEGAL_ATTRIBUTES$ = {"class":1, style:1, href:1};
  $oj$$2$$.$DomUtils$.$isHTMLContent$ = function $$oj$$2$$$$DomUtils$$$isHTMLContent$$($content$$4$$) {
    return 0 === $content$$4$$.indexOf($oj$$2$$.$DomUtils$.$_HTML_START_TAG$) && $content$$4$$.lastIndexOf($oj$$2$$.$DomUtils$.$_HTML_END_TAG$) === $content$$4$$.length - 7 ? !0 : !1
  };
  $oj$$2$$.$DomUtils$.$cleanHtml$ = function $$oj$$2$$$$DomUtils$$$cleanHtml$$($value$$68$$) {
    var $offSpan$$ = $$$$2$$(document.createElement("span")).get(0);
    ($offSpan$$.innerHTML = $value$$68$$) && 0 <= $value$$68$$.indexOf("\\x3c") && $oj$$2$$.$DomUtils$.$_cleanElementHtml$($offSpan$$);
    return $offSpan$$
  };
  $oj$$2$$.$DomUtils$.$_cleanElementHtml$ = function $$oj$$2$$$$DomUtils$$$_cleanElementHtml$$($node$$5$$) {
    for(var $children$$ = $node$$5$$.childNodes, $child$$1$$, $attrs$$15$$, $attr$$11$$, $childHasAttr$$, $i$$69$$, $count$$10$$ = $children$$.length - 1;0 <= $count$$10$$;) {
      if($child$$1$$ = $children$$.item($count$$10$$), 1 === $child$$1$$.nodeType) {
        if($oj$$2$$.$DomUtils$.$_LEGAL_ELEMENTS$[$child$$1$$.nodeName]) {
          for($attrs$$15$$ = $child$$1$$.attributes, $i$$69$$ = $attrs$$15$$.length - 1;0 <= $i$$69$$;$i$$69$$--) {
            $attr$$11$$ = $attrs$$15$$[$i$$69$$], ($childHasAttr$$ = void 0 !== $$$$2$$($child$$1$$).attr($attr$$11$$)) && ($oj$$2$$.$DomUtils$.$_LEGAL_ATTRIBUTES$[$attr$$11$$.name] || $child$$1$$.removeAttribute($attr$$11$$.nodeName))
          }
        }
        $oj$$2$$.$DomUtils$.$_cleanElementHtml$($child$$1$$)
      }else {
        $node$$5$$.removeChild($child$$1$$)
      }
    }
  };
  $oj$$2$$.$DomUtils$.$isAncestor$ = function $$oj$$2$$$$DomUtils$$$isAncestor$$($ancestorNode$$, $node$$6$$) {
    $oj$$2$$.$Assert$.$assertDomElement$($ancestorNode$$);
    $oj$$2$$.$Assert$.$assertDomElement$($node$$6$$);
    for(var $parentNode$$1$$ = $node$$6$$.parentNode;$parentNode$$1$$;) {
      if($parentNode$$1$$ == $ancestorNode$$) {
        return!0
      }
      $parentNode$$1$$ = $parentNode$$1$$.parentNode
    }
    return!1
  };
  $oj$$2$$.$DomUtils$.$isAncestorOrSelf$ = function $$oj$$2$$$$DomUtils$$$isAncestorOrSelf$$($ancestorNode$$1$$, $node$$7$$) {
    $oj$$2$$.$Assert$.$assertDomElement$($ancestorNode$$1$$);
    $oj$$2$$.$Assert$.$assertDomElement$($node$$7$$);
    return $node$$7$$ == $ancestorNode$$1$$ ? !0 : $oj$$2$$.$DomUtils$.$isAncestor$($ancestorNode$$1$$, $node$$7$$)
  };
  $oj$$2$$.$DomUtils$.$addResizeListener$ = function $$oj$$2$$$$DomUtils$$$addResizeListener$$($elem$$14$$, $listener$$32$$) {
    var $jelem$$1$$ = $$$$2$$($elem$$14$$), $tracker$$ = $jelem$$1$$.data($oj$$2$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null == $tracker$$ && ($tracker$$ = new $oj$$2$$.$DomUtils$.$_ResizeTracker$($elem$$14$$), $jelem$$1$$.data($oj$$2$$.$DomUtils$.$_RESIZE_TRACKER_KEY$, $tracker$$), $tracker$$.start());
    $tracker$$.addListener($listener$$32$$)
  };
  $oj$$2$$.$DomUtils$.$removeResizeListener$ = function $$oj$$2$$$$DomUtils$$$removeResizeListener$$($elem$$15$$, $listener$$33$$) {
    var $jelem$$2$$ = $$$$2$$($elem$$15$$), $tracker$$1$$ = $jelem$$2$$.data($oj$$2$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null != $tracker$$1$$ && ($tracker$$1$$.removeListener($listener$$33$$), $tracker$$1$$.isEmpty() && ($tracker$$1$$.stop(), $jelem$$2$$.removeData($oj$$2$$.$DomUtils$.$_RESIZE_TRACKER_KEY$)))
  };
  $oj$$2$$.$DomUtils$.$_invokeAfterPaint$ = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function($fn$$5$$) {
    return window.setTimeout($fn$$5$$, 0)
  }).bind(window);
  $oj$$2$$.$DomUtils$.$_ResizeTracker$ = function $$oj$$2$$$$DomUtils$$$_ResizeTracker$$($div$$1$$) {
    this.$_listeners$ = jQuery.Callbacks();
    this.addListener = function $this$addListener$($listener$$34$$) {
      this.$_listeners$.add($listener$$34$$)
    };
    this.removeListener = function $this$removeListener$($listener$$35$$) {
      this.$_listeners$.remove($listener$$35$$)
    };
    this.isEmpty = function $this$isEmpty$() {
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
    this.$_handleScroll$ = function $this$$_handleScroll$$($evt$$16_expDiv$$) {
      $evt$$16_expDiv$$.stopPropagation();
      $evt$$16_expDiv$$ = this.$_detectExpansion$;
      var $newWidth$$ = $evt$$16_expDiv$$.offsetWidth, $newHeight$$ = $evt$$16_expDiv$$.offsetHeight;
      if(this.$_oldWidth$ != $newWidth$$ || this.$_oldHeight$ != $newHeight$$) {
        this.$_retrySetScroll$ = 2;
        this.$_adjust$($newWidth$$, $newHeight$$);
        var $listeners$$ = this.$_listeners$;
        $oj$$2$$.$DomUtils$.$_invokeAfterPaint$(function() {
          $listeners$$.fire($newWidth$$, $newHeight$$)
        })
      }else {
        0 < this.$_retrySetScroll$ && (0 == $evt$$16_expDiv$$.scrollLeft || 0 == $evt$$16_expDiv$$.scrollTop) && (this.$_retrySetScroll$--, this.$_adjust$($newWidth$$, $newHeight$$))
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
  $oj$$2$$.$ComponentMessaging$ = function $$oj$$2$$$$ComponentMessaging$$($component$$) {
    this.Init($component$$)
  };
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$ComponentMessaging$, $oj$$2$$.$Object$, "oj.ComponentMessaging");
  $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$ = {NONE:"none", $NOTEWINDOW$:"notewindow", $PLACEHOLDER$:"placeholder"};
  $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$ = {};
  $oj$$2$$.$ComponentMessaging$.$registerMessagingStrategy$ = function $$oj$$2$$$$ComponentMessaging$$$registerMessagingStrategy$$($type$$56$$, $strategyConstructorCallback$$) {
    $type$$56$$ && "function" === typeof $strategyConstructorCallback$$ && ($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$type$$56$$] = $strategyConstructorCallback$$)
  };
  $oj$$2$$.$ComponentMessaging$.prototype.Init = function $$oj$$2$$$$ComponentMessaging$$$Init$($component$$1$$) {
    $oj$$2$$.$ComponentMessaging$.$superclass$.Init.call(this);
    this.$_component$ = $component$$1$$;
    this.$_activated$ = !1;
    this.$_initializeMessagingStrategies$()
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$activate$ = function $$oj$$2$$$$ComponentMessaging$$$$activate$$($launcher$$, $content$$5$$) {
    var $that$$ = this;
    $oj$$2$$.$Assert$.$assertObject$($content$$5$$);
    this.$_activated$ ? this.$_reactivate$($launcher$$, $content$$5$$) : ($$$$2$$.each(this.$_strategies$, function($i$$70$$, $strategy$$) {
      $strategy$$.$activate$($that$$.$_component$, $launcher$$, $content$$5$$)
    }), this.$_activated$ = !0)
  };
  $oj$$2$$.$ComponentMessaging$.prototype.update = function $$oj$$2$$$$ComponentMessaging$$$update$($content$$6$$) {
    $oj$$2$$.$Assert$.$assertObject$($content$$6$$);
    $oj$$2$$.$Assert$.$assertBoolean$(this.$_activated$);
    this.$_activated$ && $$$$2$$.each(this.$_strategies$, function($i$$71$$, $strategy$$1$$) {
      $strategy$$1$$.update($content$$6$$)
    })
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$deactivate$ = function $$oj$$2$$$$ComponentMessaging$$$$deactivate$$($content$$7$$) {
    $oj$$2$$.$Assert$.$assertObject$($content$$7$$);
    $$$$2$$.each(this.$_strategies$, function($i$$72$$, $strategy$$2$$) {
      $strategy$$2$$.$deactivate$($content$$7$$)
    });
    this.$_activated$ = !1;
    this.$_strategies$ = {}
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$_createMessagingStrategy$ = function $$oj$$2$$$$ComponentMessaging$$$$_createMessagingStrategy$$($type$$57$$, $options$$98$$) {
    return new ($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$type$$57$$] || $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$.none)($options$$98$$)
  };
  $oj$$2$$.$ComponentMessaging$.prototype.$_getResolvedMessagingDisplayOptions$ = function $$oj$$2$$$$ComponentMessaging$$$$_getResolvedMessagingDisplayOptions$$() {
    var $artifactsByDisplayType$$ = {}, $artifactDisplayTypeResolved$$ = !1, $compPH$$ = this.$_component$.options.placeholder, $artifact$$, $$messagingPreferences$$ = {}, $self$$28$$ = this;
    $$$$2$$.each(this.$_component$.options.messagingDisplayOptions || {}, function($key$$31$$, $displayTypes$$) {
      $artifactDisplayTypeResolved$$ = !1;
      $artifact$$ = $key$$31$$ + "";
      Array.isArray($displayTypes$$) ? $$$$2$$.each($displayTypes$$, function($index$$70$$, $displayType$$) {
        $artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = $self$$28$$.$_resolveDisplayTypeForArtifact$($artifact$$, $displayType$$, $compPH$$, $$messagingPreferences$$))
      }) : "string" === typeof $displayTypes$$ && ($artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = $self$$28$$.$_resolveDisplayTypeForArtifact$($artifact$$, $displayTypes$$, $compPH$$, $$messagingPreferences$$)));
      $artifactDisplayTypeResolved$$ || ($$messagingPreferences$$[$artifact$$] = $oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE)
    });
    $$$$2$$.each($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$, function($type$$58$$, $name$$74$$) {
      $artifactsByDisplayType$$[$name$$74$$] = []
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
  $oj$$2$$.$ComponentMessaging$.prototype.$_reactivate$ = function $$oj$$2$$$$ComponentMessaging$$$$_reactivate$$($launcher$$1$$, $content$$8$$) {
    var $artifactsByDisplayType$$2$$ = this.$_getResolvedMessagingDisplayOptions$(), $strategy$$3$$, $cm$$ = this;
    $$$$2$$.each($artifactsByDisplayType$$2$$, function($type$$59$$, $artifactsForType$$) {
      $strategy$$3$$ = $cm$$.$_strategies$[$type$$59$$];
      $artifactsForType$$ && 0 < $artifactsForType$$.length ? $strategy$$3$$ ? $strategy$$3$$ && $strategy$$3$$.$reactivate$($artifactsForType$$, $content$$8$$) : ($strategy$$3$$ = $cm$$.$_createMessagingStrategy$($type$$59$$, $artifactsForType$$), $cm$$.$_strategies$[$type$$59$$] = $strategy$$3$$, $strategy$$3$$.$activate$($cm$$.$_component$, $launcher$$1$$, $content$$8$$)) : $strategy$$3$$ && ($strategy$$3$$.$deactivate$($content$$8$$), delete $cm$$.$_strategies$[$type$$59$$])
    })
  };
  $oj$$2$$.$MessagingStrategy$ = function $$oj$$2$$$$MessagingStrategy$$($displayOptions$$) {
    this.Init($displayOptions$$)
  };
  $oj$$2$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE, $oj$$2$$.$MessagingStrategy$);
  $oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$ = "oj-invalid";
  $oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$ = "oj-warning";
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$MessagingStrategy$, $oj$$2$$.$Object$, "oj.MessagingStrategy");
  $oj$$2$$.$MessagingStrategy$.prototype.Init = function $$oj$$2$$$$MessagingStrategy$$$Init$($displayOptions$$1$$) {
    $oj$$2$$.$Assert$.$assertArray$($displayOptions$$1$$);
    $oj$$2$$.$MessagingStrategy$.$superclass$.Init.call(this);
    this.$_displayOptions$ = $displayOptions$$1$$
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$activate$ = function $$oj$$2$$$$MessagingStrategy$$$$activate$$($component$$2$$, $launcher$$2$$, $content$$9$$) {
    this.$_launcher$ = $launcher$$2$$;
    this.$_component$ = $component$$2$$;
    this.$_updateMessagingContent$($content$$9$$)
  };
  $oj$$2$$.$MessagingStrategy$.prototype.update = function $$oj$$2$$$$MessagingStrategy$$$update$($content$$10_launcher$$3$$) {
    this.$_updateMessagingContent$($content$$10_launcher$$3$$);
    $content$$10_launcher$$3$$ = this.$_launcher$;
    var $maxSeverity$$ = this.$GetMaxSeverity$(), $removeClasses$$ = [], $addClasses$$ = [], $invalid$$ = !1, $jqRoot$$ = this.$_component$.widget();
    $content$$10_launcher$$3$$ && (this.$IsValid$() ? this.$HasMessages$() && $maxSeverity$$ === $oj$$2$$.$Message$.$SEVERITY_LEVEL$.WARNING ? ($removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$), $addClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$)) : ($removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$), $removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$)) : ($removeClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$), 
    $addClasses$$.push($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$), $invalid$$ = !0), $jqRoot$$.removeClass($removeClasses$$.join(" ")).addClass($addClasses$$.join(" ")), $content$$10_launcher$$3$$.attr({"aria-invalid":$invalid$$}))
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$deactivate$ = function $$oj$$2$$$$MessagingStrategy$$$$deactivate$$() {
    this.$_component$.widget().removeClass($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_INVALID$).removeClass($oj$$2$$.$MessagingStrategy$.$_SELECTOR_STATE_WARNING$);
    this.$_launcher$.removeAttr("aria-invalid").removeAttr("aria-describedby");
    this.$_component$ = this.$_launcher$ = null
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$reactivate$ = function $$oj$$2$$$$MessagingStrategy$$$$reactivate$$($newDisplayOptions$$, $content$$12$$) {
    this.Init($newDisplayOptions$$);
    this.update($content$$12$$)
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetMessages$ = function $$oj$$2$$$$MessagingStrategy$$$$GetMessages$$() {
    return this.$GetValidityState$().$getMessages$()
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetMaxSeverity$ = function $$oj$$2$$$$MessagingStrategy$$$$GetMaxSeverity$$() {
    return this.$GetValidityState$().$getMaxSeverity$()
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetConverterHint$ = function $$oj$$2$$$$MessagingStrategy$$$$GetConverterHint$$() {
    var $hints$$ = [], $converterHint$$ = this.$_messagingContent$.converterHint;
    $converterHint$$ && $hints$$.push($converterHint$$);
    return $hints$$
  };
  $oj$$2$$.$MessagingStrategy$.prototype.$GetValidatorHints$ = function $$oj$$2$$$$MessagingStrategy$$$$GetValidatorHints$$() {
    var $hints$$1$$ = [];
    $$$$2$$.each(this.$_messagingContent$.validatorHint || [], function($index$$71$$, $hint$$1$$) {
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
    var $messages$$ = this.$GetMessages$();
    return $messages$$ && 0 < $messages$$.length ? !0 : !1
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
  $oj$$2$$.$MessagingStrategy$.prototype.$_updateMessagingContent$ = function $$oj$$2$$$$MessagingStrategy$$$$_updateMessagingContent$$($content$$13$$) {
    this.$_messagingContent$ = $$$$2$$.extend(this.$_messagingContent$ || {}, $content$$13$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$($displayOptions$$2$$) {
    this.Init($displayOptions$$2$$)
  };
  $oj$$2$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$2$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$, $oj$$2$$.$PlaceholderMessagingStrategy$);
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$PlaceholderMessagingStrategy$, $oj$$2$$.$MessagingStrategy$, "oj.PlaceholderMessagingStrategy");
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.Init = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$Init$($displayOptions$$3$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.Init.call(this, $displayOptions$$3$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$activate$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$activate$$($component$$3$$, $launcher$$4$$, $content$$14$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.$activate$.call(this, $component$$3$$, $launcher$$4$$, $content$$14$$);
    this.$_refreshPlaceholder$()
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.update = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$update$($content$$15$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.update.call(this, $content$$15$$);
    this.$_refreshPlaceholder$()
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$deactivate$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$deactivate$$($content$$16$$) {
    $oj$$2$$.$PlaceholderMessagingStrategy$.$superclass$.$deactivate$.call(this, $content$$16$$)
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$_refreshPlaceholder$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$_refreshPlaceholder$$() {
    var $content$$17_hints$$2_launcher$$5$$ = this.$_launcher$;
    this.$_component$.widget();
    if(this.$ShowPlaceholderContent$() && $content$$17_hints$$2_launcher$$5$$ && ($content$$17_hints$$2_launcher$$5$$ = this.$GetConverterHint$(), $content$$17_hints$$2_launcher$$5$$ = $content$$17_hints$$2_launcher$$5$$.length ? $content$$17_hints$$2_launcher$$5$$[0] : "")) {
      var $values$$5$$ = {};
      $values$$5$$.placeholder = $content$$17_hints$$2_launcher$$5$$;
      $values$$5$$._oj_messaging_update = !0;
      this.$_component$.option($values$$5$$)
    }
  };
  $oj$$2$$.$PlaceholderMessagingStrategy$.prototype.$ShowPlaceholderContent$ = function $$oj$$2$$$$PlaceholderMessagingStrategy$$$$ShowPlaceholderContent$$() {
    return this.$ShowConverterHint$()
  };
  $oj$$2$$.$ComponentValidity$ = function $$oj$$2$$$$ComponentValidity$$($valid$$1$$, $messages$$1$$, $maxSeverity$$1$$) {
    this.Init($valid$$1$$, $messages$$1$$, $maxSeverity$$1$$)
  };
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$ComponentValidity$, $oj$$2$$.$Object$, "oj.ComponentValidity");
  $oj$$2$$.$ComponentValidity$.prototype.Init = function $$oj$$2$$$$ComponentValidity$$$Init$($valid$$2$$, $messages$$2$$, $maxSeverity$$2$$) {
    $oj$$2$$.$ComponentValidity$.$superclass$.Init.call(this);
    this.$_valid$ = $valid$$2$$;
    this.$_messages$ = $messages$$2$$;
    this.$_maxSeverity$ = $maxSeverity$$2$$
  };
  $oj$$2$$.$ComponentValidity$.prototype.isValid = $JSCompiler_get$$("$_valid$");
  $oj$$2$$.$ComponentValidity$.prototype.$getMessages$ = function $$oj$$2$$$$ComponentValidity$$$$getMessages$$() {
    return this.$_messages$ ? this.$_messages$ : []
  };
  $oj$$2$$.$ComponentValidity$.prototype.$getMaxSeverity$ = $JSCompiler_get$$("$_maxSeverity$");
  $oj$$2$$.$ComponentValidity$.prototype.update = function $$oj$$2$$$$ComponentValidity$$$update$($valid$$3$$, $messages$$3$$, $maxSeverity$$3$$) {
    this.$_valid$ = $valid$$3$$;
    this.$_messages$ = $messages$$3$$;
    this.$_maxSeverity$ = $maxSeverity$$3$$
  };
  $oj$$2$$.$Test$ = {};
  $goog$exportPath_$$("Test", $oj$$2$$.$Test$, $oj$$2$$);
  $oj$$2$$.$Test$.ready = !1;
  $goog$exportPath_$$("Test.ready", $oj$$2$$.$Test$.ready, $oj$$2$$);
  $oj$$2$$.$Test$.$domNodeForLocator$ = function $$oj$$2$$$$Test$$$domNodeForLocator$$($element$$19_locator$$1$$) {
    var $locObj$$ = $element$$19_locator$$1$$;
    if($oj$$2$$.$StringUtils$.$isString$($element$$19_locator$$1$$)) {
      try {
        $locObj$$ = $$$$2$$.parseJSON($element$$19_locator$$1$$)
      }catch($e$$23$$) {
        return null
      }
    }
    return $locObj$$ && $locObj$$.element && ($element$$19_locator$$1$$ = $$$$2$$($locObj$$.element)) ? $oj$$2$$.Components.$getWidgetConstructor$($element$$19_locator$$1$$[0], $locObj$$.component)("getNodeBySubId", {subId:$locObj$$.subId}) : null
  };
  $goog$exportPath_$$("Test.domNodeForLocator", $oj$$2$$.$Test$.$domNodeForLocator$, $oj$$2$$);
  $$$$2$$(document).ready(function() {
    var $div$$inline_358$$ = $$$$2$$("\x3cdiv style\x3d'border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs\x3d);'\x3e\x3c/div\x3e"), $bki$$inline_359$$;
    $div$$inline_358$$.appendTo("body");
    $bki$$inline_359$$ = $div$$inline_358$$.css("backgroundImage");
    $div$$inline_358$$.css("borderTopColor") != $div$$inline_358$$.css("borderRightColor") && (null == $bki$$inline_359$$ || "none" != $bki$$inline_359$$ && "url (invalid-url:)" != $bki$$inline_359$$) || $$$$2$$("body").addClass("oj-hicontrast");
    $div$$inline_358$$.remove()
  });
  $$$$2$$(document).ready(function() {
    "Microsoft Internet Explorer" == navigator.appName && $$$$2$$("html").addClass("oj-slow-borderradius oj-slow-cssgradients oj-slow-boxshadow")
  });
  $oj$$2$$.$PositionUtils$ = {};
  $oj$$2$$.$PositionUtils$.$normalizeHorizontalAlignment$ = function $$oj$$2$$$$PositionUtils$$$normalizeHorizontalAlignment$$($position$$, $isRtl$$) {
    $oj$$2$$.$Assert$.$assertObject$($position$$, "position");
    for(var $target$$73$$ = $$$$2$$.extend({}, $position$$), $i$$73$$ = 0;$i$$73$$ < $oj$$2$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$.length;$i$$73$$++) {
      var $propName$$ = $oj$$2$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$[$i$$73$$], $align$$ = $target$$73$$[$propName$$];
      $align$$ && ($target$$73$$[$propName$$] = $align$$.replace("start", $isRtl$$ ? "right" : "left").replace("end", $isRtl$$ ? "left" : "right"))
    }
    return $target$$73$$
  };
  $oj$$2$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$ = ["my", "at"]
});
