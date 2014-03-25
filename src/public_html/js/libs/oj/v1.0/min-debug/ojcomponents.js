define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojvalidation"], function($oj$$18$$, $$$$17$$) {
  (function() {
    $oj$$18$$.$__registerWidget$("oj.ojAccordion", $$$$17$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{expansion:"single"}, _create:function() {
      this._super();
      this.element.addClass("oj-accordion oj-widget oj-helper-reset").attr("role", "group");
      this.refresh()
    }, $_showContextMenu$:function($menu$$3$$, $event$$131$$) {
      $menu$$3$$.show($event$$131$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), focus:"menu"})
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-widget oj-helper-reset").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy")
    }, _setOption:function($key$$74$$, $value$$157$$) {
      "expansion" === $key$$74$$ && "single" == $value$$157$$ && "multiple" == this.options.expansion && this.$colllapsibles$.not(".oj-collapsible-collapsed").first().siblings(".oj-collapsible").trigger("ojcollapse");
      this._super($key$$74$$, $value$$157$$);
      "disabled" === $key$$74$$ && (($value$$157$$ = !!$value$$157$$) && this.$colllapsibles$.each(function() {
        null == $$$$17$$(this).ojCollapsible("option", $key$$74$$) && $$$$17$$(this).ojCollapsible("option", $key$$74$$, $value$$157$$)
      }), this.element.toggleClass("oj-disabled", $value$$157$$))
    }, refresh:function() {
      this._super();
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this.$_setupEvents$()
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$17$$(this).ojCollapsible("option", "clickable", "header")
      });
      this.$colllapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({clickable:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible")
    }, $_setupEvents$:function() {
      var $events$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$};
      this._off(this.$colllapsibles$);
      this._on(this.$colllapsibles$, $events$$)
    }, $_keydown$:function($event$$132$$) {
      if(!$event$$132$$.altKey && !$event$$132$$.ctrlKey && $$$$17$$($event$$132$$.target).hasClass("oj-collapsible-header")) {
        var $keyCode$$3$$ = $$$$17$$.ui.keyCode, $enabledCollapsibles$$ = this.$colllapsibles$.not(".oj-disabled"), $length$$15$$ = $enabledCollapsibles$$.length, $target$$83$$ = $$$$17$$($event$$132$$.target).closest(".oj-collapsible"), $currentIndex$$1$$ = $enabledCollapsibles$$.index($target$$83$$), $toFocus$$ = !1;
        if(0 <= $currentIndex$$1$$) {
          switch($event$$132$$.keyCode) {
            case $keyCode$$3$$.RIGHT:
            ;
            case $keyCode$$3$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ + 1) % $length$$15$$];
              break;
            case $keyCode$$3$$.LEFT:
            ;
            case $keyCode$$3$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ - 1 + $length$$15$$) % $length$$15$$];
              break;
            case $keyCode$$3$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$3$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$15$$ - 1]
          }
        }
        $toFocus$$ && ($target$$83$$ && $$$$17$$($target$$83$$).trigger("ojfocusout"), $$$$17$$($toFocus$$).trigger("ojfocus"), $event$$132$$.preventDefault())
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$133$$) {
      return"single" === this.options.expansion && ($closestCollapsible_event$$133$$ = $$$$17$$($closestCollapsible_event$$133$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$133$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$133$$.siblings(".oj-collapsible:not(.oj-collapsible-collapsed)").map(function() {
        return $$$$17$$(this).data("oj-ojCollapsible")
      }) : $$$$17$$()
    }, $_beforeExpandHandler$:function($event$$134$$) {
      var $result$$14$$;
      this.$_findTargetSiblings$($event$$134$$).each(function() {
        return $result$$14$$ = this._trigger("beforecollapse", $event$$134$$)
      });
      return $result$$14$$
    }, $_expandHandler$:function($event$$135$$) {
      this.$_findTargetSiblings$($event$$135$$).each(function() {
        this.collapse(!1, $event$$135$$)
      })
    }})
  })();
  $oj$$18$$.$__registerWidget$("oj._ojRadioCheckbox", $$$$17$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:null, checked:null, type:null}, label:function() {
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
    var $type$$79$$ = this.options.type;
    "checkbox" == $type$$79$$ ? (this.$uiRadioCheckbox$ = this.element.addClass("oj-checkbox oj-widget"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-checkbox-label")) : "radio" == $type$$79$$ && (this.$uiRadioCheckbox$ = this.element.addClass("oj-radio oj-widget"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-radio-label"));
    var $self$$57$$ = this;
    this._hoverable(this.element);
    this._focusable(this.element);
    this.$_activeable$(this.element);
    $$$$17$$.each($self$$57$$.$$label$, function() {
      $self$$57$$._hoverable(this);
      $self$$57$$._focusable(this);
      $self$$57$$.$_activeable$(this)
    })
  }, _setOption:function($key$$75$$, $value$$158$$) {
    this._super($key$$75$$, $value$$158$$);
    "disabled" === $key$$75$$ && (($value$$158$$ = !!$value$$158$$) ? (this.element.prop("disabled", !0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"), this.$$label$.removeClass("oj-enabled").addClass("oj-disabled")) : (this.element.prop("disabled", !1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"), this.$$label$.addClass("oj-enabled").removeClass("oj-disabled")));
    "checked" === $key$$75$$ && ($value$$158$$ ? this.element.prop("checked", !0) : this.element.prop("checked", !1), this.element.toggleClass("oj-checked", $value$$158$$))
  }, $_getLabelsForElement$:function() {
    var $labelClosestParent$$ = this.element.closest("label"), $labelForQuery$$ = "label[for\x3d'" + this.element.prop("id") + "']";
    return $labelClosestParent$$.add($$$$17$$($labelForQuery$$))
  }, _destroy:function() {
    this._super();
    var $type$$80$$ = this.options.type;
    "checkbox" == $type$$80$$ ? (this.element.removeClass("oj-checkbox oj-checked oj-disabled oj-enabled oj-widget"), this.$$label$.removeClass("oj-enabled oj-disabled oj-checkbox-label")) : "radio" == $type$$80$$ && (this.element.removeClass("oj-radio oj-checked oj-disabled oj-enabled oj-widget"), this.$$label$.removeClass("oj-enabled oj-disabled oj-radio-label"))
  }});
  (function() {
    function $_radioGroup$$($radio$$, $$elems$$) {
      var $name$$91_selector$$15$$ = $radio$$.name, $$radios_form$$ = $radio$$.form;
      $name$$91_selector$$15$$ ? ($name$$91_selector$$15$$ = $name$$91_selector$$15$$.replace(/'/g, "\\'"), $name$$91_selector$$15$$ = ":radio[name\x3d'" + $name$$91_selector$$15$$ + "']:oj-button", $$radios_form$$ = $$elems$$ ? $$elems$$.filter($name$$91_selector$$15$$) : $$radios_form$$ ? $$$$17$$($$radios_form$$).find($name$$91_selector$$15$$) : $$$$17$$($name$$91_selector$$15$$, $radio$$.ownerDocument).filter(function() {
        return!this.form
      })) : $$radios_form$$ = ($$elems$$ ? $$elems$$.filter($radio$$) : $$$$17$$($radio$$)).filter(":oj-button");
      return $$radios_form$$
    }
    var $lastActive$$, $startXPos$$, $startYPos$$, $clickDragged$$ = !1;
    $oj$$18$$.$__registerWidget$("oj.ojButton", $$$$17$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cbutton\x3e", widgetEventPrefix:"oj", options:{disabled:null, display:"all", label:null, icons:{start:null, end:"auto"}, menu:{menu:null}}, _create:function() {
      this.element.closest("form").unbind("reset.ojButton").bind("reset.ojButton", function() {
        var $form$$1$$ = $$$$17$$(this);
        setTimeout(function() {
          $form$$1$$.find(":oj-button").each(function() {
            $$$$17$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1)
          }).length || $form$$1$$.unbind("reset.ojButton")
        }, 1)
      });
      "boolean" !== typeof this.options.disabled && (this.options.disabled = !!this.element.prop("disabled"));
      this.$menuEventNamespace$ = this.eventNamespace + "menu";
      this.$_initButtonTypes$();
      this.$hasTitle$ = !!this.$rootElement$.attr("title");
      var $self$$58$$ = this, $options$$252$$ = this.options, $toggleButton$$ = "checkbox" === this.type || "radio" === this.type, $activeClass$$ = $toggleButton$$ ? "" : "oj-active";
      this._hoverable(this.$rootElement$);
      this.$rootElement$.addClass("oj-button oj-widget oj-enabled");
      this.$buttonElement$.bind("mouseenter" + this.eventNamespace, function() {
        $options$$252$$.disabled || this === $lastActive$$ && $self$$58$$.$rootElement$.addClass("oj-active")
      }).bind("mouseleave" + this.eventNamespace, function() {
        $options$$252$$.disabled || $self$$58$$.$rootElement$.removeClass($activeClass$$)
      }).bind("click" + this.eventNamespace, function($event$$136$$) {
        $options$$252$$.disabled && ($event$$136$$.preventDefault(), $event$$136$$.stopImmediatePropagation())
      });
      this.element.attr("role", "button").bind("focus" + this.eventNamespace, function() {
        $self$$58$$.$rootElement$.addClass("oj-focus")
      }).bind("blur" + this.eventNamespace, function() {
        $self$$58$$.$rootElement$.removeClass("oj-focus")
      });
      $toggleButton$$ && (this.element.bind("change" + this.eventNamespace, function($event$$137$$) {
        if(!$clickDragged$$) {
          $self$$58$$.$_applyCheckedStateFromDom$(!0);
          var $buttonset$$ = $$$$17$$(this).closest(":oj-buttonset").data("oj-ojButtonset"), $checkedState$$ = $buttonset$$ && $buttonset$$.$_getCheckedFromDom$($buttonset$$.$$buttons$);
          $buttonset$$ && void 0 !== $checkedState$$ && ($buttonset$$.$_optionChangeOriginalEvent$ = $event$$137$$, $buttonset$$._setOption("checked", $checkedState$$))
        }
      }), this.$buttonElement$.bind("mousedown" + this.eventNamespace, function($event$$138$$) {
        $options$$252$$.disabled || ($clickDragged$$ = !1, $startXPos$$ = $event$$138$$.pageX, $startYPos$$ = $event$$138$$.pageY)
      }).bind("mouseup" + this.eventNamespace, function($event$$139$$) {
        $options$$252$$.disabled || $startXPos$$ === $event$$139$$.pageX && $startYPos$$ === $event$$139$$.pageY || ($clickDragged$$ = !0)
      }));
      "checkbox" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if($options$$252$$.disabled || $clickDragged$$) {
          return!1
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$140$$) {
        $event$$140$$.keyCode === $$$$17$$.ui.keyCode.ENTER && ($options$$252$$.disabled || $self$$58$$.element.click())
      })) : "radio" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if($options$$252$$.disabled || $clickDragged$$) {
          return!1
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$141$$) {
        $event$$141$$.keyCode !== $$$$17$$.ui.keyCode.ENTER || ($self$$58$$.element[0].checked || $options$$252$$.disabled) || ($self$$58$$.element[0].checked = !0, $self$$58$$.element.change(), $self$$58$$.element.click())
      })) : (this.$buttonElement$.bind("mousedown" + this.eventNamespace, function($event$$142$$) {
        if($options$$252$$.disabled) {
          return!1
        }
        1 === $event$$142$$.which && ($$$$17$$(this).addClass("oj-active"), $lastActive$$ = this, $self$$58$$.document.one("mouseup", function() {
          $lastActive$$ = null
        }))
      }).bind("mouseup" + this.eventNamespace, function() {
        if($options$$252$$.disabled) {
          return!1
        }
        $$$$17$$(this).removeClass("oj-active")
      }).bind("keydown" + this.eventNamespace, function($event$$143$$) {
        if($options$$252$$.disabled) {
          return!1
        }
        $event$$143$$.keyCode !== $$$$17$$.ui.keyCode.SPACE && $event$$143$$.keyCode !== $$$$17$$.ui.keyCode.ENTER || $$$$17$$(this).addClass("oj-active")
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
        $$$$17$$(this).removeClass("oj-active")
      }), this.$buttonElement$.is("a") && this.$buttonElement$.bind("keyup" + this.eventNamespace, function($event$$144$$) {
        $event$$144$$.keyCode === $$$$17$$.ui.keyCode.SPACE && $$$$17$$(this).click()
      }));
      this._setOption("disabled", $options$$252$$.disabled);
      this.$_handleLabelAndIconsAtCreateTime$();
      this.$_setupMenuButton$();
      this._super()
    }, $_initButtonTypes$:function() {
      var $checked_labelSelector$$;
      if(this.element.is("input[type\x3dcheckbox]")) {
        this.type = "checkbox"
      }else {
        if(this.element.is("input[type\x3dradio]")) {
          this.type = "radio"
        }else {
          if(this.element.is("input[type\x3dbutton],input[type\x3dsubmit],input[type\x3dreset]")) {
            this.type = "input"
          }else {
            if(this.element.is("button,a")) {
              this.type = "button"
            }else {
              throw Error("JET Button not supported on this element type");
            }
          }
        }
      }
      "checkbox" === this.type || "radio" === this.type ? ($checked_labelSelector$$ = "label[for\x3d'" + this.element.attr("id") + "']", this.$buttonElement$ = this.element.siblings().filter($checked_labelSelector$$).addClass("oj-button-label"), this.element.addClass("oj-helper-hidden-accessible").add(this.$buttonElement$).wrapAll("\x3cspan\x3e\x3c/span\x3e"), this.$rootElement$ = this.element.parent(), ($checked_labelSelector$$ = this.element[0].checked) && this.$rootElement$.addClass("oj-checked"), 
      this.element.attr("aria-pressed", $checked_labelSelector$$)) : this.$rootElement$ = this.$buttonElement$ = this.element
    }, widget:$JSCompiler_get$$("$rootElement$"), _destroy:function() {
      this.$_removeMenuBehavior$();
      this.element.removeClass("oj-helper-hidden-accessible").removeAttr("role").removeAttr("aria-pressed");
      var $isToggle$$ = "checkbox" === this.type || "radio" === this.type;
      $isToggle$$ || this.$rootElement$.removeClass("oj-button oj-widget oj-enabled oj-hover oj-active oj-checked oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only");
      this.$buttonElement$.html(this.$buttonElement$.find(".oj-button-text").html());
      $isToggle$$ ? (this.$buttonElement$.removeClass("oj-button-label"), this.element.unwrap()) : this.$hasTitle$ || this.$rootElement$.removeAttr("title")
    }, _setOption:function($key$$76$$, $value$$159$$) {
      this._super($key$$76$$, $value$$159$$);
      switch($key$$76$$) {
        case "disabled":
          $value$$159$$ = !!$value$$159$$;
          this.element.is("a") || (this.element.prop("disabled", $value$$159$$), this.widget().toggleClass("oj-enabled", !$value$$159$$), this.$rootElement$.removeAttr("aria-disabled"));
          $value$$159$$ && (this.widget().removeClass("oj-active"), this.$_dismissMenu$(null, null, !0));
          break;
        case "label":
          this.$_setLabelOption$();
          break;
        case "display":
          "input" !== this.type && this.$_setDisplayOptionOnDom$();
          break;
        case "icons":
          this.$_setIconsOption$(!0);
          break;
        case "menu":
          "auto" === this.options.icons.end && this.$_setIconsOption$(!1), this.$_setupMenuButton$()
      }
    }, refresh:function() {
      this._super()
    }, $_applyCheckedStateFromDom$:function($wholeGroup$$) {
      "radio" === this.type ? ($wholeGroup$$ ? $_radioGroup$$(this.element[0]) : this.element).each(function() {
        var $$radioWidget$$ = $$$$17$$(this).data("oj-ojButton");
        this.checked ? ($$radioWidget$$.$rootElement$.addClass("oj-checked"), $$radioWidget$$.element.attr("aria-pressed", "true")) : ($$radioWidget$$.$rootElement$.removeClass("oj-checked"), $$radioWidget$$.element.attr("aria-pressed", "false"))
      }) : "checkbox" === this.type && (this.element[0].checked ? (this.$rootElement$.addClass("oj-checked"), this.element.attr("aria-pressed", "true")) : (this.$rootElement$.removeClass("oj-checked"), this.element.attr("aria-pressed", "false")))
    }, $_handleLabelAndIconsAtCreateTime$:function() {
      var $keepDom_textSpan$$ = !1;
      null === this.options.label && ($keepDom_textSpan$$ = !0, this.options.label = "input" === this.type ? this.$buttonElement$.val() : this.$buttonElement$.html());
      if("input" === this.type) {
        this.$_setLabelOnDomOfSpanlessButton$()
      }else {
        var $keepDom_textSpan$$ = this.$_setLabelOnDomAtCreateTime$($keepDom_textSpan$$), $hasStartIcon$$ = this.$_setIconOnDom$(!0), $hasEndIcon$$ = this.$_setIconOnDom$(!1);
        this.$_setDisplayOptionOnDom$($keepDom_textSpan$$, $hasStartIcon$$, $hasEndIcon$$)
      }
    }, $_setLabelOnDomAtCreateTime$:function($keepDom$$1$$) {
      var $buttonElement$$ = this.$buttonElement$, $textSpan$$1$$ = $$$$17$$("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e", this.document[0]);
      $keepDom$$1$$ ? $textSpan$$1$$.append($buttonElement$$.contents()) : ($buttonElement$$.empty(), $textSpan$$1$$.text(this.options.label));
      $buttonElement$$.append($textSpan$$1$$);
      return $textSpan$$1$$
    }, $_setLabelOption$:function() {
      if("input" === this.type) {
        this.$_setLabelOnDomOfSpanlessButton$()
      }else {
        var $textSpan$$2$$ = this.$buttonElement$.find(".oj-button-text");
        $textSpan$$2$$.text(this.options.label);
        this.$_setDisplayOptionOnDom$($textSpan$$2$$)
      }
    }, $_setLabelOnDomOfSpanlessButton$:function() {
      this.options.label && this.element.val(this.options.label)
    }, $_setIconsOption$:function($doStart_hasEndIcon$$1$$) {
      if("input" !== this.type) {
        var $hasStartIcon$$1$$;
        $doStart_hasEndIcon$$1$$ && ($hasStartIcon$$1$$ = this.$_setIconOnDom$(!0));
        $doStart_hasEndIcon$$1$$ = this.$_setIconOnDom$(!1);
        this.$_setDisplayOptionOnDom$(void 0, $hasStartIcon$$1$$, $doStart_hasEndIcon$$1$$)
      }
    }, $_setIconOnDom$:function($isStart_standardIconClass$$) {
      if($isStart_standardIconClass$$) {
        $isStart_standardIconClass$$ = "oj-button-icon-start";
        var $appIconClass$$ = this.options.icons.start, $lastIvar$$ = "_lastStartIcon", $pendTo$$ = "prependTo"
      }else {
        $isStart_standardIconClass$$ = "oj-button-icon-end", $appIconClass$$ = this.$_getEndIconOption$(), $lastIvar$$ = "_lastEndIcon", $pendTo$$ = "appendTo"
      }
      var $iconSpan$$ = this.$buttonElement$.find("." + $isStart_standardIconClass$$);
      $appIconClass$$ ? ($iconSpan$$.length ? $iconSpan$$.removeClass(this[$lastIvar$$]) : $iconSpan$$ = $$$$17$$("\x3cspan\x3e\x3c/span\x3e").addClass($isStart_standardIconClass$$)[$pendTo$$](this.$buttonElement$), $iconSpan$$.addClass($appIconClass$$)) : $iconSpan$$.remove();
      this[$lastIvar$$] = $appIconClass$$;
      return!!$appIconClass$$
    }, $_getEndIconOption$:function() {
      var $icons$$1$$ = this.options.icons;
      return"auto" === $icons$$1$$.end ? this.$_getMenu$() ? "oj-widget-icon oj-button-menu-dropdown-icon" : null : $icons$$1$$.end
    }, $_setDisplayOptionOnDom$:function($buttonText_textSpan$$3$$, $buttonClass_hasStartIcon$$2$$, $atLeastOneIcon_hasEndIcon$$2$$) {
      void 0 === $buttonText_textSpan$$3$$ && ($buttonText_textSpan$$3$$ = this.$buttonElement$.find(".oj-button-text"));
      void 0 === $buttonClass_hasStartIcon$$2$$ && ($buttonClass_hasStartIcon$$2$$ = !!this.options.icons.start);
      void 0 === $atLeastOneIcon_hasEndIcon$$2$$ && ($atLeastOneIcon_hasEndIcon$$2$$ = !!this.$_getEndIconOption$());
      var $multipleIcons$$ = $buttonClass_hasStartIcon$$2$$ && $atLeastOneIcon_hasEndIcon$$2$$;
      $atLeastOneIcon_hasEndIcon$$2$$ = $buttonClass_hasStartIcon$$2$$ || $atLeastOneIcon_hasEndIcon$$2$$;
      var $displayIsIcons$$ = "icons" === this.options.display;
      $atLeastOneIcon_hasEndIcon$$2$$ && $displayIsIcons$$ ? ($buttonText_textSpan$$3$$.addClass("oj-helper-hidden-accessible"), this.$hasTitle$ || ($buttonText_textSpan$$3$$ = $buttonText_textSpan$$3$$.text(), this.$rootElement$.attr("title", $$$$17$$.trim($buttonText_textSpan$$3$$)))) : ($buttonText_textSpan$$3$$.removeClass("oj-helper-hidden-accessible"), this.$hasTitle$ || this.$rootElement$.removeAttr("title"));
      $buttonClass_hasStartIcon$$2$$ = $atLeastOneIcon_hasEndIcon$$2$$ ? $displayIsIcons$$ ? $multipleIcons$$ ? "oj-button-icons-only" : "oj-button-icon-only" : $multipleIcons$$ ? "oj-button-text-icons" : $buttonClass_hasStartIcon$$2$$ ? "oj-button-text-icon-start" : "oj-button-text-icon-end" : "oj-button-text-only";
      this.$rootElement$.removeClass("oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only").addClass($buttonClass_hasStartIcon$$2$$)
    }, $_setupMenuButton$:function() {
      this.$_removeMenuBehavior$();
      var $menu$$4$$ = this.$_getMenu$();
      if($menu$$4$$) {
        var $self$$59$$ = this;
        this.element.attr("aria-haspopup", !0).on("keydown" + this.$menuEventNamespace$, function($event$$145$$) {
          return $event$$145$$.which === $$$$17$$.ui.keyCode.DOWN ? ($self$$59$$.$_showMenu$($event$$145$$, "firstItem", $menu$$4$$), !1) : $event$$145$$.which === $$$$17$$.ui.keyCode.ESCAPE ? ($self$$59$$.$_dismissMenu$($event$$145$$, $menu$$4$$), !1) : !0
        }).on("click" + this.$menuEventNamespace$, function($event$$146$$) {
          $menu$$4$$.$__spaceEnterDownInMenu$ || $self$$59$$.$_toggleMenu$($event$$146$$, $menu$$4$$);
          return $menu$$4$$.$__spaceEnterDownInMenu$ = !1
        });
        $menu$$4$$.widget().on("oj__dismiss" + this.$menuEventNamespace$, function($event$$147$$) {
          $self$$59$$.$_menuDismissHandler$($event$$147$$)
        }).on("ojbeforeshow" + this.$menuEventNamespace$, function($event$$148$$) {
          $self$$59$$.$_launchingMenu$ || $self$$59$$.$_menuDismissHandler$($event$$148$$);
          $self$$59$$.$_launchingMenu$ = !1
        })
      }
    }, $_removeMenuBehavior$:function() {
      this.element.removeAttr("aria-haspopup").off(this.$menuEventNamespace$)
    }, $_getMenu$:function() {
      var $menu$$5$$ = this.options.menu;
      $menu$$5$$ && ($menu$$5$$ = $menu$$5$$.menu);
      $menu$$5$$ && ($menu$$5$$ = $$$$17$$("#" + $menu$$5$$).data("oj-ojMenu"));
      return $menu$$5$$ && this.element.not("input") ? $menu$$5$$ : null
    }, $_showMenu$:function($event$$149$$, $focus$$, $menu$$6$$) {
      this.options.disabled || ($menu$$6$$ || ($menu$$6$$ = this.$_getMenu$()), $menu$$6$$ && (this.$rootElement$.addClass("oj-checked"), this.$_launchingMenu$ = !0, $menu$$6$$.show($event$$149$$, {launcher:this.element, focus:$focus$$}), this.$_menuVisible$ = !0))
    }, $_dismissMenu$:function($event$$150$$, $menu$$7$$, $force$$) {
      if($force$$ || !this.options.disabled) {
        $menu$$7$$ || ($menu$$7$$ = this.$_getMenu$()), $menu$$7$$ && $menu$$7$$.$__dismiss$($event$$150$$)
      }
    }, $_menuDismissHandler$:function() {
      "button" === this.type && this.$rootElement$.removeClass("oj-checked");
      this.$_menuVisible$ = !1
    }, $_toggleMenu$:function($event$$152$$, $menu$$8$$) {
      this.$_menuVisible$ ? this.$_dismissMenu$($event$$152$$, $menu$$8$$) : this.$_showMenu$($event$$152$$, "none", $menu$$8$$)
    }});
    $oj$$18$$.$__registerWidget$("oj.ojButtonset", $$$$17$$.oj.baseComponent, {version:"1.0.0", $items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a, :data(oj-ojButton)", widgetEventPrefix:"oj", options:{checked:void 0, focusManagement:"oneTabstop", optionChange:null}, $_setCheckedOnDom$:function($checked$$1$$, $$buttons$$1$$) {
      var $name$$92_type$$81_valid$$9$$ = $$$$17$$.type($checked$$1$$);
      if("string" === $name$$92_type$$81_valid$$9$$ || "null" === $name$$92_type$$81_valid$$9$$) {
        return($name$$92_type$$81_valid$$9$$ = (($name$$92_type$$81_valid$$9$$ = $$buttons$$1$$[0].name) || 1 >= $$buttons$$1$$.length) && $$buttons$$1$$.filter("input[type\x3dradio][name\x3d" + $name$$92_type$$81_valid$$9$$ + "]").length === $$buttons$$1$$.length && (null === $checked$$1$$ || $$buttons$$1$$.filter("[value\x3d" + $checked$$1$$ + "]").length)) && $$buttons$$1$$.each(function() {
          this.checked = this.value === $checked$$1$$
        }), $name$$92_type$$81_valid$$9$$
      }
      if("array" === $name$$92_type$$81_valid$$9$$) {
        var $name$$92_type$$81_valid$$9$$ = $$buttons$$1$$.filter("input[type\x3dcheckbox]").length === $$buttons$$1$$.length, $last$$;
        ($name$$92_type$$81_valid$$9$$ = $name$$92_type$$81_valid$$9$$ && $checked$$1$$.concat().sort().every(function($elem$$18$$) {
          var $retVal$$12$$ = $elem$$18$$ !== $last$$ && $$buttons$$1$$.filter("[value\x3d" + $elem$$18$$ + "]").length;
          $last$$ = $elem$$18$$;
          return $retVal$$12$$
        })) && $$buttons$$1$$.each(function() {
          this.checked = -1 < $checked$$1$$.indexOf(this.value)
        });
        return $name$$92_type$$81_valid$$9$$
      }
      return!1
    }, $_getCheckedFromDom$:function($$buttons$$2$$) {
      var $checked$$2$$ = void 0, $isRadio$$ = null, $name$$93$$ = null;
      $$buttons$$2$$.each(function() {
        if("input" !== this.tagName.toLowerCase()) {
          return $checked$$2$$ = void 0, !1
        }
        var $currentIsRadio_currentType$$ = this.type.toLowerCase(), $currentName$$;
        if("radio" === $currentIsRadio_currentType$$) {
          $currentIsRadio_currentType$$ = !0, $currentName$$ = this.name.toLowerCase()
        }else {
          if("checkbox" === $currentIsRadio_currentType$$) {
            $currentIsRadio_currentType$$ = !1, $currentName$$ = null
          }else {
            return $checked$$2$$ = void 0, !1
          }
        }
        if(void 0 !== $checked$$2$$ && ($currentIsRadio_currentType$$ !== $isRadio$$ || $currentName$$ !== $name$$93$$ || $isRadio$$ && !$name$$93$$)) {
          return $checked$$2$$ = void 0, !1
        }
        void 0 === $checked$$2$$ ? ($checked$$2$$ = $currentIsRadio_currentType$$ ? this.checked ? this.value : null : this.checked ? [this.value] : [], $isRadio$$ = $currentIsRadio_currentType$$, $name$$93$$ = $currentName$$) : this.checked && ($isRadio$$ ? $checked$$2$$ = this.value : $checked$$2$$.push(this.value))
      });
      return $checked$$2$$
    }, $_checkedEquals$:function($checked1$$, $checked2$$) {
      return $checked1$$ === $checked2$$ ? !0 : "array" === $$$$17$$.type($checked1$$) && "array" === $$$$17$$.type($checked2$$) && !$$$$17$$($checked1$$).not($checked2$$).length && !$$$$17$$($checked2$$).not($checked1$$).length
    }, _create:function() {
      this.element.addClass("oj-buttonset oj-widget").attr("role", "group");
      this.$_setup$(!0);
      this._super()
    }, $_showContextMenu$:function($menu$$9$$, $event$$153$$) {
      $menu$$9$$.show($event$$153$$, {launcher:this.element.find(":oj-button[tabindex\x3d0]"), focus:"menu"})
    }, _setOption:function($key$$77$$, $value$$160$$) {
      var $bail_previousValue$$3$$ = !1, $optionChangeOriginalEvent$$ = this.$_optionChangeOriginalEvent$;
      this.$_optionChangeOriginalEvent$ = null;
      "disabled" === $key$$77$$ && this.$$buttons$.ojButton("option", $key$$77$$, $value$$160$$);
      "checked" !== $key$$77$$ || $optionChangeOriginalEvent$$ || null === $value$$160$$ && void 0 === this.$_getCheckedFromDom$(this.$$buttons$) || (this.$_setCheckedOnDom$($value$$160$$, this.$$buttons$) ? this.$$buttons$.each(function() {
        $$$$17$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1)
      }) : $bail_previousValue$$3$$ = !0);
      $bail_previousValue$$3$$ || ($bail_previousValue$$3$$ = this.options[$key$$77$$], this._super($key$$77$$, $value$$160$$), "checked" === $key$$77$$ && this.$_fireOptionChange$($key$$77$$, $bail_previousValue$$3$$, $value$$160$$, this.$_checkedEquals$, $optionChangeOriginalEvent$$))
    }, $_fireOptionChange$:function($key$$78$$, $previousValue$$4$$, $value$$161$$, $equals$$, $originalEvent$$2$$) {
      $equals$$.call(this, $previousValue$$4$$, $value$$161$$) || this._trigger("optionChange", $originalEvent$$2$$, {option:$key$$78$$, previousValue:$previousValue$$4$$, value:$value$$161$$, optionMetadata:{writeback:$originalEvent$$2$$ ? "shouldWrite" : "shouldNotWrite"}})
    }, refresh:function() {
      this._super();
      this.$_setup$(!1)
    }, $_setup$:function($isCreate$$) {
      var $self$$60$$ = this;
      this.$isRtl$ = "rtl" === this._GetReadingDirection();
      this.element.find(":not(iframe)").andSelf().contents().filter(function() {
        return 3 === this.nodeType && "" === this.nodeValue.trim()
      }).remove();
      this.$$buttons$ = this.element.find(this.$items$);
      if($isCreate$$) {
        if(!this.$_setCheckedOnDom$(this.options.checked, this.$$buttons$)) {
          var $newChecked$$ = this.$_getCheckedFromDom$(this.$$buttons$);
          this.options.checked = void 0 === $newChecked$$ ? null : $newChecked$$
        }
      }else {
        var $newChecked$$ = this.$_getCheckedFromDom$(this.$$buttons$), $newChecked$$ = void 0 === $newChecked$$ ? null : $newChecked$$, $oldChecked$$ = this.options.checked;
        this.options.checked = $newChecked$$;
        var $shouldFire$$ = !0
      }
      this.$$buttons$.filter(":oj-button").ojButton("refresh").each(function() {
        $$$$17$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1)
      }).end().not(":oj-button").ojButton().end().map(function() {
        return $$$$17$$(this).ojButton("widget")[0]
      }).removeClass("oj-buttonset-corner-start oj-buttonset-corner-end").filter(":first").addClass("oj-buttonset-corner-start").end().filter(":last").addClass("oj-buttonset-corner-end").end().end();
      $isCreate$$ && this.options.disabled && this.$$buttons$.ojButton("option", "disabled", !0);
      "oneTabstop" === this.options.focusManagement && (this.$$buttons$.unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$154$$) {
        $self$$60$$.$_handleKeyDown$($event$$154$$, $$$$17$$(this))
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $clickDragged$$ || $$$$17$$(this).ojButton("option", "disabled") || $self$$60$$.$_setTabStop$($$$$17$$(this))
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$60$$.$_setTabStop$($$$$17$$(this))
      }), this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$17$$(this).ojButton("option", "disabled")
      }), this.$_initTabindexes$($isCreate$$));
      $shouldFire$$ && this.$_fireOptionChange$("checked", $oldChecked$$, $newChecked$$, this.$_checkedEquals$, null)
    }, $_initTabindexes$:function($$newTabStop_isCreate$$1$$) {
      var $$last$$ = $$$$17$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop_isCreate$$1$$ = $$newTabStop_isCreate$$1$$ || !$$last$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$;
      this.$_setTabStop$($$newTabStop_isCreate$$1$$)
    }, $_mapToTabbable$:function($$button$$) {
      var $$enabledButtons$$ = this.$$enabledButtons$;
      return $$button$$.map(function($index$$142$$, $elem$$19$$) {
        if("radio" != $elem$$19$$.type || $elem$$19$$.checked || "" == $elem$$19$$.name) {
          return $elem$$19$$
        }
        var $$checkedRadio$$ = $_radioGroup$$($elem$$19$$, $$enabledButtons$$).filter(":checked");
        return $$checkedRadio$$.length ? $$checkedRadio$$[0] : $elem$$19$$
      })
    }, $_setTabStop$:function($$button$$1$$) {
      $$button$$1$$ = this.$_mapToTabbable$($$button$$1$$);
      var $button$$ = $$button$$1$$[0], $last$$1$$ = this.$_lastTabStop$;
      $button$$ !== $last$$1$$ && ($$$$17$$($last$$1$$).attr("tabindex", "-1"), $$button$$1$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$)
    }, $_handleKeyDown$:function($event$$157$$, $$button$$2$$) {
      switch($event$$157$$.which) {
        case $$$$17$$.ui.keyCode.LEFT:
        ;
        case $$$$17$$.ui.keyCode.RIGHT:
          $event$$157$$.preventDefault();
          var $$enabledButtons$$1$$ = this.$$enabledButtons$, $length$$16$$ = $$enabledButtons$$1$$.length;
          if(2 > $length$$16$$) {
            break
          }
          var $oldIndex$$1$$ = $$enabledButtons$$1$$.index($$button$$2$$);
          $$enabledButtons$$1$$.eq(($oldIndex$$1$$ + ($event$$157$$.which == $$$$17$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$16$$) % $length$$16$$).focus();
          break;
        case $$$$17$$.ui.keyCode.UP:
        ;
        case $$$$17$$.ui.keyCode.DOWN:
          "radio" == $$button$$2$$.attr("type") && $event$$157$$.preventDefault()
      }
    }, _destroy:function() {
      this.element.removeClass("oj-buttonset oj-widget").removeAttr("role");
      "oneTabstop" === this.options.focusManagement && this.$$buttons$.attr("tabindex", "0");
      this.$$buttons$.map(function() {
        return $$$$17$$(this).ojButton("widget")[0]
      }).removeClass("oj-buttonset-corner-start oj-buttonset-corner-end").end().ojButton("destroy")
    }})
  })();
  (function() {
    function $_each2$$($list$$, $c$$23$$) {
      for(var $j$$32$$ = $$$$17$$($list$$[0]), $i$$199$$ = -1, $l$$4$$ = $list$$.length;++$i$$199$$ < $l$$4$$ && ($j$$32$$.context = $j$$32$$[0] = $list$$[$i$$199$$]) && !1 !== $c$$23$$.call($j$$32$$[0], $i$$199$$, $j$$32$$);) {
      }
    }
    function $_measureScrollbar$$($$template_className$$8$$) {
      $$template_className$$8$$ = $$$$17$$("\x3cdiv class\x3d'" + $$template_className$$8$$ + "-measure-scrollbar'\x3e\x3c/div\x3e");
      $$template_className$$8$$.appendTo("body");
      var $dim$$ = {width:$$template_className$$8$$.width() - $$template_className$$8$$[0].clientWidth, height:$$template_className$$8$$.height() - $$template_className$$8$$[0].clientHeight};
      $$template_className$$8$$.remove();
      return $dim$$
    }
    function $_splitVal$$($string$$3$$, $separator$$1$$) {
      var $val$$26$$, $i$$200$$, $l$$5$$;
      if(null === $string$$3$$ || 1 > $string$$3$$.length) {
        return[]
      }
      $val$$26$$ = $string$$3$$.split($separator$$1$$);
      $i$$200$$ = 0;
      for($l$$5$$ = $val$$26$$.length;$i$$200$$ < $l$$5$$;$i$$200$$ += 1) {
        $val$$26$$[$i$$200$$] = $$$$17$$.trim($val$$26$$[$i$$200$$])
      }
      return $val$$26$$
    }
    function $_installKeyUpChangeEvent$$($element$$48$$) {
      $element$$48$$.on("keydown", function() {
        void 0 === $$$$17$$.data($element$$48$$, "keyup-change-value") && $$$$17$$.data($element$$48$$, "keyup-change-value", $element$$48$$.val())
      });
      $element$$48$$.on("keyup", function($e$$52_val$$27$$) {
        $e$$52_val$$27$$.which === $_KEY$$.ENTER ? $e$$52_val$$27$$.stopPropagation() : ($e$$52_val$$27$$ = $$$$17$$.data($element$$48$$, "keyup-change-value"), void 0 !== $e$$52_val$$27$$ && $element$$48$$.val() !== $e$$52_val$$27$$ && ($$$$17$$.removeData($element$$48$$, "keyup-change-value"), $element$$48$$.trigger("keyup-change")))
      })
    }
    function $_installFilteredMouseMove$$($element$$49$$) {
      $element$$49$$.on("mousemove", function($e$$53$$) {
        var $lastpos$$ = $_lastMousePosition$$;
        if(void 0 === $lastpos$$ || $lastpos$$.x !== $e$$53$$.pageX || $lastpos$$.y !== $e$$53$$.pageY) {
          $$$$17$$($e$$53$$.target).trigger("mousemove-filtered", $e$$53$$), $_lastMousePosition$$.x = $e$$53$$.pageX, $_lastMousePosition$$.y = $e$$53$$.pageY
        }
      })
    }
    function $_thunk$$($formula$$) {
      var $evaluated$$ = !1, $value$$162$$;
      return function() {
        !1 === $evaluated$$ && ($value$$162$$ = $formula$$(), $evaluated$$ = !0);
        return $value$$162$$
      }
    }
    function $_focus$$($$el$$) {
      $$el$$[0] !== document.activeElement && window.setTimeout(function() {
        var $el$$1_range$$17$$ = $$el$$[0], $pos$$5$$ = $$el$$.val().length;
        $$el$$.focus();
        $$el$$.is(":visible") && $el$$1_range$$17$$ === document.activeElement && ($el$$1_range$$17$$.setSelectionRange ? $el$$1_range$$17$$.setSelectionRange($pos$$5$$, $pos$$5$$) : $el$$1_range$$17$$.createTextRange && ($el$$1_range$$17$$ = $el$$1_range$$17$$.createTextRange(), $el$$1_range$$17$$.collapse(!1), $el$$1_range$$17$$.select()))
      }, 0)
    }
    function $_killEvent$$($event$$158$$) {
      $event$$158$$.preventDefault();
      $event$$158$$.stopPropagation()
    }
    function $_local$$($dataItem_options$$253$$) {
      function $text$$7$$($item$$4$$) {
        return"" + $item$$4$$.text
      }
      var $data$$83$$ = $dataItem_options$$253$$, $dataText$$, $tmp$$1$$;
      $$$$17$$.isArray($data$$83$$) && ($tmp$$1$$ = $data$$83$$, $data$$83$$ = {$results$:$tmp$$1$$});
      !1 === $$$$17$$.isFunction($data$$83$$) && ($tmp$$1$$ = $data$$83$$, $data$$83$$ = function $$data$$83$$$() {
        return $tmp$$1$$
      });
      $dataItem_options$$253$$ = $data$$83$$();
      $dataItem_options$$253$$.text && ($text$$7$$ = $dataItem_options$$253$$.text, $$$$17$$.isFunction($text$$7$$) || ($dataText$$ = $dataItem_options$$253$$.text, $text$$7$$ = function $$text$$7$$$($item$$5$$) {
        return $item$$5$$[$dataText$$]
      }));
      return function($query$$3$$) {
        var $t$$ = $query$$3$$.$term$, $filtered$$ = {$results$:[]}, $process$$1$$;
        "" === $t$$ ? $query$$3$$.$callback$($data$$83$$()) : ($process$$1$$ = function $$process$$1$$$($datum$$, $collection$$51$$) {
          var $group$$1$$, $attr$$16$$;
          $datum$$ = $datum$$[0];
          if($datum$$.children) {
            $group$$1$$ = {};
            for($attr$$16$$ in $datum$$) {
              $datum$$.hasOwnProperty($attr$$16$$) && ($group$$1$$[$attr$$16$$] = $datum$$[$attr$$16$$])
            }
            $group$$1$$.children = [];
            $_each2$$($$$$17$$($datum$$.children), function($i$$201$$, $childDatum$$) {
              $process$$1$$($childDatum$$, $group$$1$$.children)
            });
            ($group$$1$$.children.length || $query$$3$$.$matcher$($t$$, $text$$7$$($group$$1$$), $datum$$)) && $collection$$51$$.push($group$$1$$)
          }else {
            $query$$3$$.$matcher$($t$$, $text$$7$$($datum$$), $datum$$) && $collection$$51$$.push($datum$$)
          }
        }, $_each2$$($$$$17$$($data$$83$$().$results$), function($i$$202$$, $datum$$1$$) {
          $process$$1$$($datum$$1$$, $filtered$$.$results$)
        }), $query$$3$$.$callback$($filtered$$))
      }
    }
    function $_checkFormatter$$($formatter$$) {
      if($$$$17$$.isFunction($formatter$$)) {
        return!0
      }
      if(!$formatter$$) {
        return!1
      }
      throw Error("formatNoMatches must be a function or a false value");
    }
    function $_clazz$$($SuperClass$$, $methods$$1$$) {
      function $constructor$$1$$() {
      }
      $oj$$18$$.$Object$.$createSubclass$($constructor$$1$$, $SuperClass$$, "");
      $constructor$$1$$.prototype = $$$$17$$.extend($constructor$$1$$.prototype, $methods$$1$$);
      return $constructor$$1$$
    }
    $oj$$18$$.$__registerWidget$("oj.ojCombobox", $$$$17$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{placeholder:"", multiple:!1, data:null, expand:null}, widget:function() {
      return this.$combobox$.$container$
    }, _create:function() {
      this.$_setup$();
      this._super()
    }, $_setup$:function() {
      var $opts$$11$$, $multiple$$ = this.options.multiple;
      $opts$$11$$ = {};
      $opts$$11$$.element = this.element;
      $opts$$11$$.$ojContext$ = this;
      $opts$$11$$ = $$$$17$$.extend(this.options, $opts$$11$$);
      this.$combobox$ = $multiple$$ ? new $_OjMultiCombobox$$ : new $_OjSingleCombobox$$;
      this.$combobox$._init($opts$$11$$);
      this.$_SetRootAttributes$()
    }, _destroy:function() {
      this.$combobox$._destroy()
    }, expand:function($event$$160$$) {
      this.$combobox$.open();
      this._trigger("ojexpand", $event$$160$$)
    }, collapse:function() {
      this.$combobox$.close()
    }, _setOption:function($key$$80$$, $value$$163$$) {
      this._super($key$$80$$, $value$$163$$);
      "disabled" === $key$$80$$ && ($value$$163$$ ? this.$combobox$.$_disable$() : this.$combobox$.$_enable$())
    }, _GetMessagingTriggerElement:function() {
      return this.$combobox$.$container$
    }});
    $oj$$18$$.$__registerWidget$("oj.ojSelect", $$$$17$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cselect\x3e", widgetEventPrefix:"oj", options:{minimumResultsForSearch:10, placeholder:"", data:null, expand:null}, widget:function() {
      return this.select.$container$
    }, _create:function() {
      this.$_setup$();
      this._super()
    }, $_setup$:function() {
      var $opts$$12$$;
      $opts$$12$$ = {};
      $opts$$12$$.element = this.element;
      $opts$$12$$.$ojContext$ = this;
      $opts$$12$$ = $$$$17$$.extend(this.options, $opts$$12$$);
      this.select = new $_OjSingleSelect$$;
      this.select._init($opts$$12$$);
      this.$_SetRootAttributes$()
    }, _destroy:function() {
      this.select._destroy()
    }, expand:function() {
      this.select.open()
    }, collapse:function() {
      this.select.close()
    }, _setOption:function($key$$81$$, $value$$164$$) {
      this._super($key$$81$$, $value$$164$$);
      "disabled" === $key$$81$$ && ($value$$164$$ ? this.select.$_disable$() : this.select.$_enable$())
    }, _GetMessagingTriggerElement:function() {
      return this.select.$container$
    }});
    var $_KEY$$, $_AbstractOjChoice$$, $_AbstractSingleChoice$$, $_OjSingleCombobox$$, $_OjMultiCombobox$$, $_OjSingleSelect$$, $_nextUid$$, $_lastMousePosition$$ = {x:0, y:0}, $_scrollBarDimensions$$;
    $_KEY$$ = {TAB:9, ENTER:13, $ESC$:27, SPACE:32, LEFT:37, UP:38, RIGHT:39, DOWN:40, $SHIFT$:16, $CTRL$:17, $ALT$:18, PAGE_UP:33, PAGE_DOWN:34, HOME:36, END:35, $BACKSPACE$:8, $DELETE$:46, $isArrow$:function $$_KEY$$$$isArrow$$($k$$4$$) {
      $k$$4$$ = $k$$4$$.which ? $k$$4$$.which : $k$$4$$;
      switch($k$$4$$) {
        case $_KEY$$.LEFT:
        ;
        case $_KEY$$.RIGHT:
        ;
        case $_KEY$$.UP:
        ;
        case $_KEY$$.DOWN:
          return!0
      }
      return!1
    }, $isControl$:function $$_KEY$$$$isControl$$($e$$54$$) {
      switch($e$$54$$.which) {
        case $_KEY$$.$SHIFT$:
        ;
        case $_KEY$$.$CTRL$:
        ;
        case $_KEY$$.$ALT$:
          return!0
      }
      return $e$$54$$.metaKey ? !0 : !1
    }, $isFunctionKey$:function $$_KEY$$$$isFunctionKey$$($k$$6$$) {
      $k$$6$$ = $k$$6$$.which ? $k$$6$$.which : $k$$6$$;
      return 112 <= $k$$6$$ && 123 >= $k$$6$$
    }};
    $_nextUid$$ = function() {
      var $counter$$ = 1;
      return function() {
        return $counter$$++
      }
    }();
    $_AbstractOjChoice$$ = $_clazz$$(Object, {$_bind$:function($func$$10$$) {
      var $self$$61$$ = this;
      return function() {
        $func$$10$$.apply($self$$61$$, arguments)
      }
    }, _init:function($opts$$13$$) {
      var $search$$1$$, $className$$9$$ = this.$_classNm$, $disabled$$1_elemName_readonly$$ = this.$_elemNm$, $resultsSelector$$ = "." + $className$$9$$ + "-results";
      this.$ojContext$ = $opts$$13$$.$ojContext$;
      this.$opts$ = $opts$$13$$ = this.$_prepareOpts$($opts$$13$$);
      this.id = $opts$$13$$.id;
      void 0 !== $opts$$13$$.element.data($disabled$$1_elemName_readonly$$) && null !== $opts$$13$$.element.data($disabled$$1_elemName_readonly$$) && $opts$$13$$.element.data($disabled$$1_elemName_readonly$$)._destroy();
      this.$container$ = this.$_createContainer$();
      this.$containerId$ = "ojChoiceId_" + ($opts$$13$$.element.attr("id") || "autogen" + $_nextUid$$());
      this.$containerSelector$ = "#" + this.$containerId$.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
      this.$container$.attr("id", this.$containerId$);
      this.body = $_thunk$$(function() {
        return $opts$$13$$.element.closest("body")
      });
      this.$container$.attr("style", $opts$$13$$.element.attr("style"));
      this.$elementTabIndex$ = this.$opts$.element.attr("tabindex");
      this.$opts$.element.data($disabled$$1_elemName_readonly$$, this).attr("tabindex", "-1").before(this.$container$);
      this.$container$.data($disabled$$1_elemName_readonly$$, this);
      this.$dropdown$ = this.$container$.find("." + $className$$9$$ + "-drop");
      this.$dropdown$.data($disabled$$1_elemName_readonly$$, this);
      this.$dropdown$.on("click", $_killEvent$$);
      this.$results$ = this.$container$.find($resultsSelector$$);
      this.search = $search$$1$$ = this.$container$.find("input." + $className$$9$$ + "-input");
      this.$resultsPage$ = this.$queryCount$ = 0;
      this.context = null;
      this.$_initContainer$();
      this.$container$.on("click", $_killEvent$$);
      $_installFilteredMouseMove$$(this.$results$);
      this.$dropdown$.on("mousemove-filtered touchstart touchmove touchend", $resultsSelector$$, this.$_bind$(this.$_highlightUnderEvent$));
      $$$$17$$(this.$container$).on("change", "." + $className$$9$$ + "-input", function($e$$55$$) {
        $e$$55$$.stopPropagation()
      });
      $$$$17$$(this.$dropdown$).on("change", "." + $className$$9$$ + "-input", function($e$$56$$) {
        $e$$56$$.stopPropagation()
      });
      $_installKeyUpChangeEvent$$($search$$1$$);
      $search$$1$$.on("keyup-change input paste", this.$_bind$(this.$_updateResults$));
      $search$$1$$.on("focus", function() {
        $search$$1$$.addClass($className$$9$$ + "-focused")
      });
      $search$$1$$.on("blur", function() {
        $search$$1$$.removeClass($className$$9$$ + "-focused")
      });
      this.$dropdown$.on("mouseup", $resultsSelector$$, this.$_bind$(function($e$$57$$) {
        0 < $$$$17$$($e$$57$$.target).closest("." + $className$$9$$ + "-result-selectable").length && (this.$_highlightUnderEvent$($e$$57$$), this.$_selectHighlighted$($e$$57$$))
      }));
      this.$dropdown$.on("click mouseup mousedown", function($e$$58$$) {
        $e$$58$$.stopPropagation()
      });
      $$$$17$$.isFunction(this.$opts$.$initSelection$) && ($opts$$13$$.value && this.$setVal$($opts$$13$$.value), this.$_initSelection$());
      $disabled$$1_elemName_readonly$$ = $opts$$13$$.element.prop("disabled");
      void 0 === $disabled$$1_elemName_readonly$$ && ($disabled$$1_elemName_readonly$$ = !1);
      this.$_enable$(!$disabled$$1_elemName_readonly$$);
      $disabled$$1_elemName_readonly$$ = $opts$$13$$.element.prop("readonly");
      void 0 === $disabled$$1_elemName_readonly$$ && ($disabled$$1_elemName_readonly$$ = !1);
      this.$_readonly$($disabled$$1_elemName_readonly$$);
      $_scrollBarDimensions$$ = $_scrollBarDimensions$$ || $_measureScrollbar$$(this.$_classNm$);
      this.autofocus = $opts$$13$$.element.prop("autofocus");
      $opts$$13$$.element.prop("autofocus", !1);
      this.autofocus && this.$_focus$()
    }, _destroy:function() {
      var $element$$50$$ = this.$opts$.element, $ojcomp$$ = $element$$50$$.data(this.$_elemNm$);
      this.close();
      this.$propertyObserver$ && (delete this.$propertyObserver$, this.$propertyObserver$ = null);
      void 0 !== $ojcomp$$ && ($ojcomp$$.$container$.remove(), $ojcomp$$.$dropdown$.remove(), $element$$50$$.removeClass(this.$_classNm$ + "-offscreen").removeData(this.$_elemNm$).off("." + this.$_classNm$).prop("autofocus", this.autofocus || !1), this.$elementTabIndex$ ? $element$$50$$.attr({$tabindex$:this.$elementTabIndex$}) : $element$$50$$.removeAttr("tabindex"), $element$$50$$.show())
    }, $_optionToData$:function($element$$51$$) {
      if($element$$51$$.is("option")) {
        return{id:$element$$51$$.prop("value"), text:$element$$51$$.text(), element:$element$$51$$.get(), css:$element$$51$$.attr("class"), disabled:$element$$51$$.prop("disabled"), locked:"locked" === $element$$51$$.attr("locked") || !0 === $element$$51$$.data("locked")}
      }
      if($element$$51$$.is("optgroup")) {
        return{text:$element$$51$$.attr("label"), children:[], element:$element$$51$$.get(), css:$element$$51$$.attr("class")}
      }
    }, $_prepareOpts$:function($opts$$14$$) {
      var $element$$52$$, $datalist$$, $idKey$$, $self$$62$$ = this;
      $element$$52$$ = $opts$$14$$.element;
      var $tagName$$2$$ = $element$$52$$.get(0).tagName.toLowerCase();
      "input" === $tagName$$2$$ && $element$$52$$.attr("list") ? this.$datalist$ = $datalist$$ = $$$$17$$("#" + $element$$52$$.attr("list")) : "select" === $tagName$$2$$ && 0 < $element$$52$$.children().length && (this.$datalist$ = $datalist$$ = $element$$52$$);
      $opts$$14$$ = $$$$17$$.extend({}, {$populateResults$:function($container$$2$$, $results$$4$$, $query$$4$$) {
        var $populate$$, $id$$18$$ = this.$opts$.id;
        $populate$$ = function $$populate$$$($results$$5$$, $container$$3$$, $depth$$17$$) {
          var $i$$203$$, $l$$6$$, $result$$15$$, $label$$3_selectable$$, $disabled$$2_formatted$$1$$, $compound_innerContainer$$, $node$$16$$;
          $i$$203$$ = 0;
          for($l$$6$$ = $results$$5$$.length;$i$$203$$ < $l$$6$$;$i$$203$$ += 1) {
            $result$$15$$ = $results$$5$$[$i$$203$$], $disabled$$2_formatted$$1$$ = !0 === $result$$15$$.disabled, $label$$3_selectable$$ = !$disabled$$2_formatted$$1$$ && void 0 !== $id$$18$$($result$$15$$), $compound_innerContainer$$ = $result$$15$$.children && 0 < $result$$15$$.children.length, $node$$16$$ = $$$$17$$("\x3cli\x3e\x3c/li\x3e"), $node$$16$$.addClass($self$$62$$.$_classNm$ + "-results-dept-" + $depth$$17$$), $node$$16$$.addClass($self$$62$$.$_classNm$ + "-result"), $node$$16$$.addClass($label$$3_selectable$$ ? 
            $self$$62$$.$_classNm$ + "-result-selectable" : $self$$62$$.$_classNm$ + "-result-unselectable"), $disabled$$2_formatted$$1$$ && $node$$16$$.addClass("oj-disabled"), $compound_innerContainer$$ && $node$$16$$.addClass($self$$62$$.$_classNm$ + "-result-with-children"), $node$$16$$.attr("role", "presentation"), $label$$3_selectable$$ = $$$$17$$(document.createElement("div")), $label$$3_selectable$$.addClass($self$$62$$.$_classNm$ + "-result-label"), $label$$3_selectable$$.attr("id", $self$$62$$.$_classNm$ + 
            "-result-label-" + $_nextUid$$()), $label$$3_selectable$$.attr("role", "option"), $disabled$$2_formatted$$1$$ && $label$$3_selectable$$.attr("aria-disabled", "true"), $disabled$$2_formatted$$1$$ = $opts$$14$$.$formatResult$($result$$15$$, $label$$3_selectable$$, $query$$4$$, $self$$62$$.$opts$.$escapeMarkup$), void 0 !== $disabled$$2_formatted$$1$$ && $label$$3_selectable$$.html($disabled$$2_formatted$$1$$), $node$$16$$.append($label$$3_selectable$$), $compound_innerContainer$$ && ($compound_innerContainer$$ = 
            $$$$17$$("\x3cul\x3e\x3c/ul\x3e"), $compound_innerContainer$$.addClass($self$$62$$.$_classNm$ + "-result-sub"), $populate$$($result$$15$$.children, $compound_innerContainer$$, $depth$$17$$ + 1), $node$$16$$.append($compound_innerContainer$$)), $node$$16$$.data($self$$62$$.$_elemNm$, $result$$15$$), $container$$3$$.append($node$$16$$)
          }
        };
        $populate$$($results$$4$$, $container$$2$$, 0)
      }}, $_ojChoice_defaults$$, "select" === $tagName$$2$$ ? null : $_ojCombobox_methods$$, $opts$$14$$);
      "function" !== typeof $opts$$14$$.id && ($idKey$$ = $opts$$14$$.id, $opts$$14$$.id = function $$opts$$14$$$id$($e$$59$$) {
        return $e$$59$$[$idKey$$]
      });
      $datalist$$ ? ($opts$$14$$.$query$ = this.$_bind$(function($query$$5$$) {
        var $data$$84$$ = {$results$:[], $more$:!1}, $term$$ = $query$$5$$.$term$, $children$$2$$, $process$$2$$;
        $process$$2$$ = function $$process$$2$$$($element$$53$$, $collection$$52$$) {
          var $group$$2$$;
          $element$$53$$.is("option") ? $query$$5$$.$matcher$($term$$, $element$$53$$.text(), $element$$53$$) && $collection$$52$$.push($self$$62$$.$_optionToData$($element$$53$$)) : $element$$53$$.is("optgroup") && ($group$$2$$ = $self$$62$$.$_optionToData$($element$$53$$), $_each2$$($element$$53$$.children(), function($i$$204$$, $elm$$) {
            $process$$2$$($elm$$, $group$$2$$.children)
          }), 0 < $group$$2$$.children.length && $collection$$52$$.push($group$$2$$))
        };
        $children$$2$$ = $datalist$$.children();
        if(void 0 !== this.$_getPlaceholder$() && 0 < $children$$2$$.length) {
          var $placeholderOption$$ = this.$_getPlaceholderOption$();
          $placeholderOption$$ && ($children$$2$$ = $children$$2$$.not($placeholderOption$$))
        }
        $_each2$$($children$$2$$, function($i$$205$$, $elm$$1$$) {
          $process$$2$$($elm$$1$$, $data$$84$$.$results$)
        });
        $query$$5$$.$callback$($data$$84$$)
      }), $opts$$14$$.id = function $$opts$$14$$$id$($e$$60$$) {
        return $e$$60$$.id
      }) : "data" in $opts$$14$$ && ($opts$$14$$.$query$ = $_local$$($opts$$14$$.data));
      return $opts$$14$$
    }, $_triggerSelect$:function($data$$85_evt$$21$$) {
      $data$$85_evt$$21$$ = $$$$17$$.Event(this.$_elemNm$ + "-selecting", {val:this.id($data$$85_evt$$21$$), object:$data$$85_evt$$21$$});
      this.$opts$.element.trigger($data$$85_evt$$21$$);
      return!$data$$85_evt$$21$$.isDefaultPrevented()
    }, $_triggerChange$:function() {
      this.$ojContext$._SetValue(this.$getVal$())
    }, $_isInterfaceEnabled$:function() {
      return!0 === this.$enabledInterface$
    }, $_enableInterface$:function() {
      var $enabled$$ = this.$_enabled$ && !this.$_readonly$;
      if($enabled$$ === this.$enabledInterface$) {
        return!1
      }
      this.$container$.toggleClass("oj-disabled", !$enabled$$);
      this.close();
      this.$enabledInterface$ = $enabled$$;
      return!0
    }, $_enable$:function($enabled$$1$$) {
      void 0 === $enabled$$1$$ && ($enabled$$1$$ = !0);
      this.$_enabled$ !== $enabled$$1$$ && (this.$_enabled$ = $enabled$$1$$, this.$opts$.element.prop("disabled", !$enabled$$1$$), this.$_enableInterface$())
    }, $_disable$:function() {
      this.$_enable$(!1)
    }, $_readonly$:function($enabled$$2$$) {
      void 0 === $enabled$$2$$ && ($enabled$$2$$ = !1);
      if(this.$_readonly$ === $enabled$$2$$) {
        return!1
      }
      this.$_readonly$ = $enabled$$2$$;
      this.$opts$.element.prop("readonly", $enabled$$2$$);
      this.$_enableInterface$();
      return!0
    }, $_opened$:function() {
      return this.$container$.hasClass(this.$_classNm$ + "-dropdown-open")
    }, $_positionDropdown$:function() {
      var $$dropdown$$ = this.$dropdown$, $offset$$22$$ = this.$container$.offset(), $dropTop_height$$12$$ = this.$container$.outerHeight(!1), $css_width$$13$$ = this.$container$.outerWidth(!1), $above_dropHeight$$ = $$dropdown$$.outerHeight(!1), $$window_resultsListNode$$ = $$$$17$$(window), $windowWidth$$ = $$window_resultsListNode$$.width(), $windowHeight$$ = $$window_resultsListNode$$.height(), $bodyOffset_viewPortRight$$ = $$window_resultsListNode$$.scrollLeft() + $windowWidth$$, $enoughRoomBelow_viewportBottom$$ = 
      $$window_resultsListNode$$.scrollTop() + $windowHeight$$, $dropTop_height$$12$$ = $offset$$22$$.top + $dropTop_height$$12$$, $dropLeft$$ = $offset$$22$$.left, $enoughRoomBelow_viewportBottom$$ = $dropTop_height$$12$$ + $above_dropHeight$$ <= $enoughRoomBelow_viewportBottom$$, $enoughRoomAbove$$ = $offset$$22$$.top - $above_dropHeight$$ >= this.body().scrollTop(), $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight$$ = $dropLeft$$ + $dropWidth$$ <= $bodyOffset_viewPortRight$$, $changeDirection$$;
      $$dropdown$$.hasClass(this.$_classNm$ + "-drop-above") ? ($above_dropHeight$$ = !0, !$enoughRoomAbove$$ && $enoughRoomBelow_viewportBottom$$ && ($changeDirection$$ = !0, $above_dropHeight$$ = !1)) : ($above_dropHeight$$ = !1, !$enoughRoomBelow_viewportBottom$$ && $enoughRoomAbove$$ && ($above_dropHeight$$ = $changeDirection$$ = !0));
      $changeDirection$$ ? ($$dropdown$$.hide(), $offset$$22$$ = this.$container$.offset(), $dropTop_height$$12$$ = this.$container$.outerHeight(!1), $css_width$$13$$ = this.$container$.outerWidth(!1), $$dropdown$$.outerHeight(!1), $bodyOffset_viewPortRight$$ = $$window_resultsListNode$$.scrollLeft() + $windowWidth$$, $$window_resultsListNode$$.scrollTop(), $dropTop_height$$12$$ = $offset$$22$$.top + $dropTop_height$$12$$, !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$12$$ -= 
      1), $dropLeft$$ = $offset$$22$$.left, $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight$$ = $dropLeft$$ + $dropWidth$$ <= $bodyOffset_viewPortRight$$, $$dropdown$$.show()) : !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$12$$ -= 1);
      this.$opts$.$dropdownAutoWidth$ ? ($$window_resultsListNode$$ = $$$$17$$("." + this.$_classNm$ + "-results", $$dropdown$$)[0], $$dropdown$$.addClass(this.$_classNm$ + "-drop-auto-width"), $$dropdown$$.css("width", ""), $dropWidth$$ = $$dropdown$$.outerWidth(!1) + ($$window_resultsListNode$$.scrollHeight === $$window_resultsListNode$$.clientHeight ? 0 : $_scrollBarDimensions$$.width), $dropWidth$$ > $css_width$$13$$ ? $css_width$$13$$ = $dropWidth$$ : $dropWidth$$ = $css_width$$13$$, $enoughRoomOnRight$$ = 
      $dropLeft$$ + $dropWidth$$ <= $bodyOffset_viewPortRight$$) : this.$container$.removeClass(this.$_classNm$ + "-drop-auto-width");
      "static" !== this.body().css("position") && ($bodyOffset_viewPortRight$$ = this.body().offset(), $dropTop_height$$12$$ -= $bodyOffset_viewPortRight$$.top, $dropLeft$$ -= $bodyOffset_viewPortRight$$.left);
      $enoughRoomOnRight$$ || ($dropLeft$$ = $offset$$22$$.left + $css_width$$13$$ - $dropWidth$$);
      $css_width$$13$$ = {left:$dropLeft$$, width:$css_width$$13$$};
      $above_dropHeight$$ ? ($css_width$$13$$.bottom = $windowHeight$$ - $offset$$22$$.top, $css_width$$13$$.top = "auto", this.$container$.addClass(this.$_classNm$ + "-drop-above"), $$dropdown$$.addClass(this.$_classNm$ + "-drop-above")) : ($css_width$$13$$.top = $dropTop_height$$12$$, $css_width$$13$$.bottom = "auto", this.$container$.removeClass(this.$_classNm$ + "-drop-above"), $$dropdown$$.removeClass(this.$_classNm$ + "-drop-above"));
      $$dropdown$$.css($css_width$$13$$)
    }, $_shouldOpen$:function() {
      var $event$$161$$;
      if(this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$) {
        return!1
      }
      $event$$161$$ = $$$$17$$.Event(this.$_elemNm$ + "-opening");
      this.$opts$.element.trigger($event$$161$$);
      return!$event$$161$$.isDefaultPrevented()
    }, $_clearDropdownAlignmentPreference$:function() {
      this.$container$.removeClass(this.$_classNm$ + "-drop-above");
      this.$dropdown$.removeClass(this.$_classNm$ + "-drop-above")
    }, open:function() {
      if(!this.$_shouldOpen$()) {
        return!1
      }
      this.$_opening$();
      return!0
    }, $_clearPlaceholder$:function() {
      this.search.hasClass(this.$_classNm$ + "-default") && this.search.val("").removeClass(this.$_classNm$ + "-default")
    }, $_opening$:function() {
      var $cid$$6_mask$$5$$ = this.$containerId$, $scroll$$ = "scroll." + $cid$$6_mask$$5$$, $resize$$ = "resize." + $cid$$6_mask$$5$$, $orient$$ = "orientationchange." + $cid$$6_mask$$5$$, $className$$10$$ = this.$_classNm$, $elemName$$1$$ = this.$_elemNm$;
      this.$_clearPlaceholder$();
      this.$container$.addClass($className$$10$$ + "-dropdown-open");
      this.$_clearDropdownAlignmentPreference$();
      this.$dropdown$[0] !== this.body().children().last()[0] && this.$dropdown$.detach().appendTo(this.body());
      $cid$$6_mask$$5$$ = $$$$17$$("#" + $className$$10$$ + "-drop-mask");
      0 == $cid$$6_mask$$5$$.length && ($cid$$6_mask$$5$$ = $$$$17$$(document.createElement("div")), $cid$$6_mask$$5$$.attr("id", $className$$10$$ + "-drop-mask").attr("class", $className$$10$$ + "-drop-mask"), $cid$$6_mask$$5$$.hide(), $cid$$6_mask$$5$$.appendTo(this.body()), $cid$$6_mask$$5$$.on("mousedown touchstart click", function($e$$61$$) {
        var $dropdown_self$$63$$ = $$$$17$$("#" + $className$$10$$ + "-drop");
        0 < $dropdown_self$$63$$.length && ($dropdown_self$$63$$ = $dropdown_self$$63$$.data($elemName$$1$$), $dropdown_self$$63$$.$opts$.$selectOnBlur$ && $dropdown_self$$63$$.$_selectHighlighted$({$noFocus$:!0}), $dropdown_self$$63$$.close(), $e$$61$$.preventDefault(), $e$$61$$.stopPropagation())
      }));
      this.$dropdown$.prev()[0] !== $cid$$6_mask$$5$$[0] && this.$dropdown$.before($cid$$6_mask$$5$$);
      $$$$17$$("#" + $className$$10$$ + "-drop").removeAttr("id");
      this.$dropdown$.attr("id", $className$$10$$ + "-drop");
      $cid$$6_mask$$5$$.show();
      this.$_positionDropdown$();
      this.$dropdown$.show();
      this.$_positionDropdown$();
      this.search.attr("aria-expanded", !0);
      var $that$$2$$ = this;
      this.$container$.parents().add(window).each(function() {
        $$$$17$$(this).on($resize$$ + " " + $scroll$$ + " " + $orient$$, function() {
          $that$$2$$.$_positionDropdown$()
        })
      })
    }, close:function() {
      if(this.$_opened$()) {
        var $cid$$7$$ = this.$containerId$, $scroll$$1$$ = "scroll." + $cid$$7$$, $resize$$1$$ = "resize." + $cid$$7$$, $orient$$1$$ = "orientationchange." + $cid$$7$$;
        this.$container$.parents().add(window).each(function() {
          $$$$17$$(this).off($scroll$$1$$).off($resize$$1$$).off($orient$$1$$)
        });
        this.$_clearDropdownAlignmentPreference$();
        $$$$17$$("#" + this.$_classNm$ + "-drop-mask").hide();
        this.$dropdown$.removeAttr("id");
        this.$dropdown$.hide();
        this.$container$.removeClass(this.$_classNm$ + "-dropdown-open");
        this.$results$.empty();
        this.search.attr("aria-expanded", !1)
      }
    }, $_clearSearch$:$JSCompiler_emptyFn$$(), $_ensureHighlightVisible$:function() {
      var $results$$6$$ = this.$results$, $children$$3_more_rb$$, $index$$143$$, $child$$5$$, $hb_y$$38$$;
      $index$$143$$ = this.$_highlight$();
      0 > $index$$143$$ || (0 == $index$$143$$ ? $results$$6$$.scrollTop(0) : ($children$$3_more_rb$$ = this.$_findHighlightableChoices$().find("." + this.$_classNm$ + "-result-label"), $child$$5$$ = $$$$17$$($children$$3_more_rb$$[$index$$143$$]), $hb_y$$38$$ = $child$$5$$.offset().top + $child$$5$$.outerHeight(!0), $index$$143$$ === $children$$3_more_rb$$.length - 1 && ($children$$3_more_rb$$ = $results$$6$$.find("li." + this.$_classNm$ + "-more-results"), 0 < $children$$3_more_rb$$.length && ($hb_y$$38$$ = 
      $children$$3_more_rb$$.offset().top + $children$$3_more_rb$$.outerHeight(!0))), $children$$3_more_rb$$ = $results$$6$$.offset().top + $results$$6$$.outerHeight(!0), $hb_y$$38$$ > $children$$3_more_rb$$ && $results$$6$$.scrollTop($results$$6$$.scrollTop() + ($hb_y$$38$$ - $children$$3_more_rb$$)), $hb_y$$38$$ = $child$$5$$.offset().top - $results$$6$$.offset().top, 0 > $hb_y$$38$$ && "none" != $child$$5$$.css("display") && $results$$6$$.scrollTop($results$$6$$.scrollTop() + $hb_y$$38$$)))
    }, $_findHighlightableChoices$:function() {
      return this.$results$.find("." + this.$_classNm$ + "-result-selectable:not(.oj-disabled, ." + this.$_classNm$ + "-selected)")
    }, $_moveHighlight$:function($delta$$2$$) {
      for(var $choices$$ = this.$_findHighlightableChoices$(), $index$$144$$ = this.$_highlight$();-1 < $index$$144$$ && $index$$144$$ < $choices$$.length;) {
        var $index$$144$$ = $index$$144$$ + $delta$$2$$, $choice$$ = $$$$17$$($choices$$[$index$$144$$]);
        if($choice$$.hasClass(this.$_classNm$ + "-result-selectable") && !$choice$$.hasClass("oj-disabled") && !$choice$$.hasClass(this.$_classNm$ + "-selected")) {
          this.$_highlight$($index$$144$$);
          break
        }
      }
    }, $_highlight$:function($index$$145$$) {
      var $choice$$1_choices$$1$$ = this.$_findHighlightableChoices$();
      if(0 === arguments.length) {
        return $choice$$1_choices$$1$$.get().indexOf($choice$$1_choices$$1$$.filter("." + this.$_classNm$ + "-highlighted")[0])
      }
      $index$$145$$ >= $choice$$1_choices$$1$$.length && ($index$$145$$ = $choice$$1_choices$$1$$.length - 1);
      0 > $index$$145$$ && ($index$$145$$ = 0);
      this.$_removeHighlight$();
      $choice$$1_choices$$1$$ = $$$$17$$($choice$$1_choices$$1$$[$index$$145$$]);
      $choice$$1_choices$$1$$.addClass(this.$_classNm$ + "-highlighted");
      this.search.attr("aria-activedescendant", $choice$$1_choices$$1$$.find("." + this.$_classNm$ + "-result-label").attr("id"));
      this.$_ensureHighlightVisible$()
    }, $_removeHighlight$:function() {
      this.$results$.find("." + this.$_classNm$ + "-highlighted").removeClass(this.$_classNm$ + "-highlighted")
    }, $_highlightUnderEvent$:function($el$$3_event$$162$$) {
      $el$$3_event$$162$$ = $$$$17$$($el$$3_event$$162$$.target).closest("." + this.$_classNm$ + "-result-selectable");
      if(0 < $el$$3_event$$162$$.length && !$el$$3_event$$162$$.is("." + this.$_classNm$ + "-highlighted")) {
        var $choices$$2$$ = this.$_findHighlightableChoices$();
        this.$_highlight$($choices$$2$$.index($el$$3_event$$162$$))
      }else {
        0 == $el$$3_event$$162$$.length && this.$_removeHighlight$()
      }
    }, $_updateResults$:function($initial$$) {
      function $render$$($html$$2$$) {
        $results$$7$$.html($html$$2$$);
        $self$$64$$.$_positionDropdown$()
      }
      var $search$$2$$ = this.search, $results$$7$$ = this.$results$, $opts$$15$$ = this.$opts$, $self$$64$$ = this, $input$$1_term$$1$$;
      $input$$1_term$$1$$ = $search$$2$$.val();
      var $lastTerm$$ = $$$$17$$.data(this.$container$, this.$_classNm$ + "-last-term"), $queryNumber$$;
      !0 !== $initial$$ && $lastTerm$$ && $input$$1_term$$1$$ === $lastTerm$$ || ($$$$17$$.data(this.$container$, this.$_classNm$ + "-last-term", $input$$1_term$$1$$), $queryNumber$$ = ++this.$queryCount$, this.$_removeHighlight$(), $input$$1_term$$1$$ = this.search.val(), this.$resultsPage$ = 1, $opts$$15$$.$query$({element:$opts$$15$$.element, $term$:void 0 != $input$$1_term$$1$$ && null != $input$$1_term$$1$$ && !0 !== $initial$$ ? $input$$1_term$$1$$ : "", page:this.$resultsPage$, context:null, 
      $matcher$:$opts$$15$$.$matcher$, $callback$:this.$_bind$(function($data$$88$$) {
        var $def$$;
        $queryNumber$$ == this.$queryCount$ && this.$_opened$() && (this.context = void 0 === $data$$88$$.context ? null : $data$$88$$.context, 0 === $data$$88$$.$results$.length && (this.$opts$.$manageNewEntry$ && "" !== $search$$2$$.val()) && ($def$$ = this.$opts$.$manageNewEntry$.call($self$$64$$, $search$$2$$.val(), $data$$88$$.$results$), void 0 !== $def$$ && null !== $def$$ && void 0 !== $self$$64$$.id($def$$) && null !== $self$$64$$.id($def$$) && 0 === $$$$17$$($data$$88$$.$results$).filter(function() {
          return $self$$64$$.id(this) === $self$$64$$.id($def$$)
        }).length && $data$$88$$.$results$.unshift($def$$)), 0 === $data$$88$$.$results$.length && $_checkFormatter$$($opts$$15$$.$formatNoMatches$) ? $render$$("\x3cli class\x3d'" + $self$$64$$.$_classNm$ + "-no-results'\x3e" + $opts$$15$$.$formatNoMatches$($search$$2$$.val()) + "\x3c/li\x3e") : ($results$$7$$.empty(), $self$$64$$.$opts$.$populateResults$.call(this, $results$$7$$, $data$$88$$.$results$, {$term$:$search$$2$$.val(), page:this.$resultsPage$, context:null}), this.$_postprocessResults$($data$$88$$, 
        $initial$$), $self$$64$$.$_positionDropdown$()))
      })}))
    }, $_cancel$:function() {
      this.close()
    }, $_focusSearch$:function() {
      $_focus$$(this.search)
    }, $_selectHighlighted$:function($options$$254$$) {
      var $index$$146$$ = this.$_highlight$(), $data$$89$$ = this.$results$.find("." + this.$_classNm$ + "-highlighted").closest("." + this.$_classNm$ + "-result").data(this.$_elemNm$);
      $data$$89$$ ? (this.$_highlight$($index$$146$$), this.$_onSelect$($data$$89$$, $options$$254$$)) : $options$$254$$ && $options$$254$$.$noFocus$ && this.close()
    }, $_getPlaceholder$:function() {
      return this.$opts$.element.attr("placeholder") || this.$opts$.element.attr("data-placeholder") || this.$opts$.element.data("placeholder") || this.$opts$.placeholder
    }, $_getPlaceholderOption$:$JSCompiler_emptyFn$$(), $_initContainerWidth$:function() {
      var $attrs$$inline_694_style$$inline_693_width$$14$$;
      a: {
        var $attr$$inline_698_matches$$inline_695$$, $i$$inline_696$$, $l$$inline_697$$;
        $attrs$$inline_694_style$$inline_693_width$$14$$ = this.$opts$.element.attr("style");
        if(void 0 !== $attrs$$inline_694_style$$inline_693_width$$14$$) {
          for($attrs$$inline_694_style$$inline_693_width$$14$$ = $attrs$$inline_694_style$$inline_693_width$$14$$.split(";"), $i$$inline_696$$ = 0, $l$$inline_697$$ = $attrs$$inline_694_style$$inline_693_width$$14$$.length;$i$$inline_696$$ < $l$$inline_697$$;$i$$inline_696$$ += 1) {
            if($attr$$inline_698_matches$$inline_695$$ = $attrs$$inline_694_style$$inline_693_width$$14$$[$i$$inline_696$$].replace(/\s/g, ""), $attr$$inline_698_matches$$inline_695$$ = $attr$$inline_698_matches$$inline_695$$.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== $attr$$inline_698_matches$$inline_695$$ && 1 <= $attr$$inline_698_matches$$inline_695$$.length) {
              $attrs$$inline_694_style$$inline_693_width$$14$$ = $attr$$inline_698_matches$$inline_695$$[1];
              break a
            }
          }
        }
        $attrs$$inline_694_style$$inline_693_width$$14$$ = void 0
      }
      null !== $attrs$$inline_694_style$$inline_693_width$$14$$ && this.$container$.css("width", $attrs$$inline_694_style$$inline_693_width$$14$$)
    }, $getVal$:function() {
      return this.$opts$.element.val()
    }, $setVal$:function($val$$28$$) {
      this.$opts$.element.val($val$$28$$)
    }, $_hasSearchBox$:function() {
      return void 0 !== this.$opts$.minimumResultsForSearch && void 0 !== this.$container$.$_hasSearchBox$
    }});
    $_AbstractSingleChoice$$ = $_clazz$$($_AbstractOjChoice$$, {$_enableInterface$:function() {
      $_AbstractSingleChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$())
    }, $_focus$:function() {
      this.$_opened$() && this.close()
    }, $_cancel$:function() {
      $_AbstractSingleChoice$$.$superclass$.$_cancel$.apply(this, arguments)
    }, _destroy:function() {
      $$$$17$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
      $_AbstractSingleChoice$$.$superclass$._destroy.apply(this, arguments)
    }, $_clear$:function() {
      this.selection.data(this.$_elemNm$) && (this.$opts$.element.val(""), this.search.val(""), this.selection.removeData(this.$_elemNm$), this.$_triggerChange$());
      this.$_setPlaceholder$()
    }, $_initSelection$:function() {
      var $element$$54$$, $self$$65$$ = this;
      if(this.$datalist$ || "" !== this.$getVal$()) {
        $element$$54$$ = this.$datalist$ ? this.$datalist$ : this.$opts$.element, this.$opts$.$initSelection$.call(null, $element$$54$$, function($selected$$14$$) {
          void 0 !== $selected$$14$$ && null !== $selected$$14$$ && ($self$$65$$.$setVal$($self$$65$$.id($selected$$14$$)), $self$$65$$.$_updateSelection$($selected$$14$$), $self$$65$$.close())
        })
      }
    }, $_containerKeydownHandler$:function($e$$63$$) {
      if(this.$_isInterfaceEnabled$()) {
        if($e$$63$$.which === $_KEY$$.PAGE_UP || $e$$63$$.which === $_KEY$$.PAGE_DOWN) {
          $_killEvent$$($e$$63$$)
        }else {
          var $isSelectTag$$ = "ojselect" === this.$_elemNm$;
          switch($e$$63$$.which) {
            case $_KEY$$.UP:
            ;
            case $_KEY$$.DOWN:
              this.$_opened$() ? this.$_moveHighlight$($e$$63$$.which === $_KEY$$.UP ? -1 : 1) : (this.open(), $isSelectTag$$ && $_focus$$(this.selection));
              $_killEvent$$($e$$63$$);
              return;
            case $_KEY$$.ENTER:
              this.$_selectHighlighted$();
              $_killEvent$$($e$$63$$);
              return;
            case $_KEY$$.TAB:
              this.$_selectHighlighted$({$noFocus$:!0});
              return;
            case $_KEY$$.$ESC$:
              this.$_cancel$($e$$63$$);
              $_killEvent$$($e$$63$$);
              return
          }
          $isSelectTag$$ && (this.$_userTyping$ = !0);
          this.$_opened$() || this.open()
        }
      }
    }, $_containerKeyupHandler$:function() {
      this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open()
    }, $_initContainer$:function() {
      var $container$$4_selection$$5$$;
      $container$$4_selection$$5$$ = this.$container$;
      var $idSuffix$$ = $_nextUid$$(), $elementLabel$$;
      this.selection = $container$$4_selection$$5$$ = $container$$4_selection$$5$$.find("." + this.$_classNm$ + "-choice");
      $elementLabel$$ = $$$$17$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']").attr("id", this.$_classNm$ + "-label-" + $idSuffix$$);
      $container$$4_selection$$5$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$);
      this.$results$.attr("id", this.$_classNm$ + "-results-" + $idSuffix$$);
      this.search.attr("aria-owns", this.$_classNm$ + "-results-" + $idSuffix$$);
      this.search.attr("aria-labelledby", $elementLabel$$.attr("id"));
      this.search.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
      this.search.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$));
      $container$$4_selection$$5$$.on("mousedown", "abbr", this.$_bind$(function($e$$65$$) {
        this.$_isInterfaceEnabled$() && (this.$_clear$(), $e$$65$$.preventDefault(), $e$$65$$.stopImmediatePropagation(), this.close(), this.selection.$_focus$())
      }));
      $container$$4_selection$$5$$.on("mousedown", this.$_bind$(function() {
        this.$_opened$() ? this.close() : this.$_isInterfaceEnabled$() && this.open();
        this.search.focus()
      }));
      $container$$4_selection$$5$$.on("focus", this.$_bind$(function($e$$67$$) {
        $_killEvent$$($e$$67$$)
      }));
      this.search.on("blur", this.$_bind$(function() {
        this.search.removeClass(this.$_classNm$ + "-focused")
      }));
      this.$_initContainerWidth$();
      this.$opts$.element.addClass(this.$_classNm$ + "-offscreen");
      this.$_setPlaceholder$()
    }, $_opening$:function($event$$163$$) {
      var $el$$4_range$$18$$, $len$$10$$;
      $_AbstractSingleChoice$$.$superclass$.$_opening$.apply(this, arguments);
      $el$$4_range$$18$$ = this.search.get(0);
      $el$$4_range$$18$$.createTextRange ? ($el$$4_range$$18$$ = $el$$4_range$$18$$.createTextRange(), $el$$4_range$$18$$.collapse(!1), $el$$4_range$$18$$.select()) : $el$$4_range$$18$$.setSelectionRange && ($len$$10$$ = this.search.val().length, $el$$4_range$$18$$.setSelectionRange($len$$10$$, $len$$10$$));
      this.$_updateResults$(!0);
      this.$opts$.element.trigger($$$$17$$.Event("ojexpand"))
    }, $_prepareOpts$:function() {
      var $opts$$16$$ = $_AbstractSingleChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$66$$ = this, $tagName$$3$$ = $opts$$16$$.element.get(0).tagName.toLowerCase();
      if("input" === $tagName$$3$$ && $opts$$16$$.element.prop("list") || "select" === $tagName$$3$$ && 0 < $opts$$16$$.element.children().length) {
        $opts$$16$$.$initSelection$ = function $$opts$$16$$$$initSelection$$($element$$55$$, $callback$$87$$) {
          var $selected$$15$$;
          $selected$$15$$ = $self$$66$$.$getVal$() ? $self$$66$$.$_optionToData$($element$$55$$.find("option").filter(function() {
            return this.value === $self$$66$$.$getVal$()
          })) : $self$$66$$.$_optionToData$($element$$55$$.find("option").filter($JSCompiler_get$$("selected")));
          $callback$$87$$($selected$$15$$)
        }
      }else {
        if("data" in $opts$$16$$ || this.$getVal$()) {
          $opts$$16$$.$initSelection$ = $opts$$16$$.$initSelection$ || function($element$$56$$, $callback$$88$$) {
            var $id$$19$$ = $self$$66$$.$getVal$(), $first$$3$$ = null, $match$$13$$ = null;
            $opts$$16$$.$query$({$matcher$:function($is_match_term$$2$$, $text$$8$$, $el$$5$$) {
              ($is_match_term$$2$$ = $id$$19$$ === $opts$$16$$.id($el$$5$$)) && ($match$$13$$ = $el$$5$$);
              $first$$3$$ || ($first$$3$$ = $el$$5$$);
              return $is_match_term$$2$$
            }, $callback$:$$$$17$$.isFunction($callback$$88$$) ? function() {
              $match$$13$$ || "select" !== $tagName$$3$$ || ($match$$13$$ = $first$$3$$);
              $callback$$88$$($match$$13$$)
            } : $$$$17$$.noop})
          }
        }
      }
      return $opts$$16$$
    }, $_setPlaceholder$:function() {
      var $placeholder$$ = this.$_getPlaceholder$();
      void 0 === $placeholder$$ && ($placeholder$$ = "");
      this.search.val($placeholder$$).addClass(this.$_classNm$ + "-default");
      this.$container$.removeClass(this.$_classNm$ + "-allowclear")
    }, $_postprocessResults$:function($data$$91_highlightableChoices$$, $initial$$1$$, $noHighlightUpdate$$) {
      var $selected$$16$$ = 0, $self$$67$$ = this;
      $data$$91_highlightableChoices$$ = this.$_findHighlightableChoices$();
      $_each2$$($data$$91_highlightableChoices$$, function($i$$207$$, $elm$$2$$) {
        if($self$$67$$.id($elm$$2$$.data($self$$67$$.$_elemNm$)) === $self$$67$$.$getVal$()) {
          return $selected$$16$$ = $i$$207$$, !1
        }
      });
      !1 !== $noHighlightUpdate$$ && (!0 === $initial$$1$$ && 0 <= $selected$$16$$ ? this.$_highlight$($selected$$16$$) : this.$_highlight$(0))
    }, $_onSelect$:function($data$$92$$) {
      if(this.$_triggerSelect$($data$$92$$)) {
        var $old$$ = this.$getVal$();
        this.$_data$();
        this.$setVal$(this.id($data$$92$$));
        this.$_updateSelection$($data$$92$$);
        this.close();
        $old$$ !== this.id($data$$92$$) && this.$_triggerChange$()
      }
    }, val:function() {
      var $val$$29$$, $data$$93$$ = null, $self$$68$$ = this;
      this.$_data$();
      if(0 === arguments.length) {
        return this.$getVal$()
      }
      $val$$29$$ = arguments[0];
      if(this.$datalist$) {
        var $selected$$17$$;
        $selected$$17$$ = this.$datalist$.val($val$$29$$).find("option").filter($JSCompiler_get$$("selected"));
        $_each2$$($selected$$17$$, function($i$$208$$, $elm$$3$$) {
          $data$$93$$ = $self$$68$$.$_optionToData$($elm$$3$$);
          return!1
        });
        this.$setVal$($val$$29$$);
        this.$_updateSelection$($data$$93$$);
        this.$_setPlaceholder$();
        this.$_triggerChange$()
      }else {
        if($val$$29$$ || 0 === $val$$29$$) {
          if(void 0 === this.$opts$.$initSelection$) {
            throw Error("cannot call val() if initSelection() is not defined");
          }
          this.$setVal$($val$$29$$);
          this.$opts$.$initSelection$(this.$opts$.element, function($data$$94$$) {
            $self$$68$$.$setVal$($data$$94$$ ? $self$$68$$.id($data$$94$$) : "");
            $self$$68$$.$_updateSelection$($data$$94$$);
            $self$$68$$.$_setPlaceholder$();
            $self$$68$$.$_triggerChange$()
          })
        }else {
          this.$_clear$()
        }
      }
    }, $_clearSearch$:function() {
      this.search.val("")
    }, $_data$:function($value$$165$$) {
      var $data$$95$$;
      if(0 === arguments.length) {
        return $data$$95$$ = this.selection.data(this.$_elemNm$), void 0 == $data$$95$$ && ($data$$95$$ = null), $data$$95$$
      }
      $value$$165$$ ? (this.$_data$(), this.$setVal$($value$$165$$ ? this.id($value$$165$$) : ""), this.$_updateSelection$($value$$165$$), this.$_triggerChange$()) : this.$_clear$()
    }});
    $_OjSingleCombobox$$ = $_clazz$$($_AbstractSingleChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
      return $$$$17$$(document.createElement("div")).attr({"class":"oj-combobox oj-widget"}).html("\x3cdiv class\x3d'oj-combobox-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cspan class\x3d'oj-combobox-search'\x3e\x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-combobox-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3c/span\x3e\x3cabbr class\x3d'oj-combobox-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e   \x3ca class\x3d'oj-combobox-arrow' role\x3d'presentation'\x3e\x3cb class\x3d'oj-combobox-icon oj-widget-icon oj-clickable-icon oj-combobox-open-icon' role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-combobox-drop oj-combobox-display-none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-combobox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e")
    }, close:function() {
      this.$_opened$() && ($_OjSingleCombobox$$.$superclass$.close.apply(this, arguments), "" == this.search.val() ? this.$_clear$() : this.$_data$() || "" === this.search.val ? this.search.val(this.$_data$().text) : this.$_clearSearch$())
    }, $_updateSelection$:function($data$$96$$) {
      var $formatted$$2$$;
      this.selection.data(this.$_elemNm$, $data$$96$$);
      null !== $data$$96$$ && ($formatted$$2$$ = this.$opts$.$formatSelection$($data$$96$$, this.search, this.$opts$.$escapeMarkup$));
      void 0 !== $formatted$$2$$ && this.search.val($formatted$$2$$);
      this.search.removeClass(this.$_classNm$ + "-default");
      this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear")
    }});
    $_OjMultiCombobox$$ = $_clazz$$($_AbstractOjChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
      return $$$$17$$(document.createElement("div")).attr({"class":"oj-combobox oj-combobox-multi oj-widget"}).html("\x3cul class\x3d'oj-combobox-choices'\x3e  \x3cli class\x3d'oj-combobox-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-combobox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-combobox-description oj-combobox-offscreen'/\x3e\x3cdiv class\x3d'oj-combobox-drop oj-combobox-drop-multi oj-combobox-display-none'\x3e   \x3cul class\x3d'oj-combobox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e")
    }, $_prepareOpts$:function() {
      var $opts$$17$$ = $_OjMultiCombobox$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$69$$ = this;
      "input" === $opts$$17$$.element.get(0).tagName.toLowerCase() && $opts$$17$$.element.prop("list") ? $opts$$17$$.$initSelection$ = function $$opts$$17$$$$initSelection$$($element$$57$$, $callback$$89$$) {
        var $data$$97$$ = [];
        if($opts$$17$$.element.val()) {
          for(var $selected$$18$$, $ids$$ = $_splitVal$$($opts$$17$$.element.val(), $opts$$17$$.separator), $i$$209$$ = 0;$i$$209$$ < $ids$$.length;$i$$209$$++) {
            var $id$$20$$ = $ids$$[$i$$209$$];
            $selected$$18$$ = $element$$57$$.find("option").filter(function() {
              return this.value === $id$$20$$
            });
            $data$$97$$.push($self$$69$$.$_optionToData$($selected$$18$$))
          }
        }else {
          $selected$$18$$ = $element$$57$$.find("option").filter($JSCompiler_get$$("selected")), $_each2$$($selected$$18$$, function($i$$210$$, $elm$$4$$) {
            $data$$97$$.push($self$$69$$.$_optionToData$($elm$$4$$))
          })
        }
        $callback$$89$$($data$$97$$)
      } : "data" in $opts$$17$$ && ($opts$$17$$.$initSelection$ = $opts$$17$$.$initSelection$ || function($element$$58$$, $callback$$90$$) {
        var $ids$$1$$ = $_splitVal$$($element$$58$$.val(), $opts$$17$$.separator), $matches$$2$$ = [];
        $opts$$17$$.$query$({$matcher$:function($is_match$$1_term$$3$$, $text$$9$$, $el$$6$$) {
          ($is_match$$1_term$$3$$ = $$$$17$$.grep($ids$$1$$, function($id$$21$$) {
            return $id$$21$$ === $opts$$17$$.id($el$$6$$)
          }).length) && $matches$$2$$.push($el$$6$$);
          return $is_match$$1_term$$3$$
        }, $callback$:$$$$17$$.isFunction($callback$$90$$) ? function() {
          for(var $ordered$$ = [], $i$$211$$ = 0;$i$$211$$ < $ids$$1$$.length;$i$$211$$++) {
            for(var $id$$22$$ = $ids$$1$$[$i$$211$$], $j$$33$$ = 0;$j$$33$$ < $matches$$2$$.length;$j$$33$$++) {
              var $match$$14$$ = $matches$$2$$[$j$$33$$];
              if($id$$22$$ === $opts$$17$$.id($match$$14$$)) {
                $ordered$$.push($match$$14$$);
                $matches$$2$$.splice($j$$33$$, 1);
                break
              }
            }
          }
          $callback$$90$$($ordered$$)
        } : $$$$17$$.noop})
      });
      return $opts$$17$$
    }, $_selectChoice$:function($choice$$2$$) {
      var $selected$$19$$ = this.$container$.find("." + this.$_classNm$ + "-search-choice-focus");
      $selected$$19$$.length && $choice$$2$$ && $choice$$2$$[0] == $selected$$19$$[0] || ($selected$$19$$.length && this.$opts$.element.trigger("choice-deselected", $selected$$19$$), $selected$$19$$.removeClass(this.$_classNm$ + "-search-choice-focus"), $choice$$2$$ && $choice$$2$$.length && (this.close(), $choice$$2$$.addClass(this.$_classNm$ + "-search-choice-focus"), this.$container$.find(".oj-combobox-description").html($choice$$2$$.attr("valueText") + ". Press back space to delete.").attr("aria-live", 
      "assertive"), this.$opts$.element.trigger("choice-selected", $choice$$2$$)))
    }, _destroy:function() {
      $$$$17$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
      $_OjMultiCombobox$$.$superclass$._destroy.apply(this, arguments)
    }, $_initContainer$:function() {
      var $selector$$16$$ = "." + this.$_classNm$ + "-choices", $selection$$6$$, $idSuffix$$1$$ = $_nextUid$$(), $elementLabel$$1$$;
      this.$searchContainer$ = this.$container$.find("." + this.$_classNm$ + "-search-field");
      this.selection = $selection$$6$$ = this.$container$.find($selector$$16$$);
      var $_this$$1$$ = this;
      this.selection.on("click", "." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)", function() {
        $_this$$1$$.search[0].$_focus$();
        $_this$$1$$.$_selectChoice$($$$$17$$(this))
      });
      $elementLabel$$1$$ = $$$$17$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']").attr("id", this.$_classNm$ + "-label-" + $idSuffix$$1$$);
      this.$results$.attr("id", this.$_classNm$ + "-results-" + $idSuffix$$1$$);
      this.search.attr("aria-owns", this.$_classNm$ + "-results-" + $idSuffix$$1$$);
      this.search.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
      this.search.on("input paste", this.$_bind$(function() {
        this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open()
      }));
      this.search.attr("tabindex", this.$elementTabIndex$);
      this.$keydowns$ = 0;
      this.search.on("keydown", this.$_bind$(function($e$$69$$) {
        var $JSCompiler_object_inline_offset_721_el$$inline_702$$, $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$;
        if(this.$_isInterfaceEnabled$()) {
          ++this.$keydowns$;
          var $selected$$20$$ = $selection$$6$$.find("." + this.$_classNm$ + "-search-choice-focus"), $prev$$1$$ = $selected$$20$$.prev("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)"), $next$$1$$ = $selected$$20$$.next("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)");
          $JSCompiler_object_inline_offset_721_el$$inline_702$$ = this.search;
          $JSCompiler_object_inline_offset_721_el$$inline_702$$ = $$$$17$$($JSCompiler_object_inline_offset_721_el$$inline_702$$)[0];
          var $offset$$inline_703_sel$$inline_705$$ = 0;
          $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ = 0;
          "selectionStart" in $JSCompiler_object_inline_offset_721_el$$inline_702$$ ? ($offset$$inline_703_sel$$inline_705$$ = $JSCompiler_object_inline_offset_721_el$$inline_702$$.selectionStart, $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ = $JSCompiler_object_inline_offset_721_el$$inline_702$$.selectionEnd - $offset$$inline_703_sel$$inline_705$$) : "selection" in document && ($JSCompiler_object_inline_offset_721_el$$inline_702$$.$_focus$(), $offset$$inline_703_sel$$inline_705$$ = 
          document.selection.createRange(), $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ = document.selection.createRange().text.length, $offset$$inline_703_sel$$inline_705$$.moveStart("character", -$JSCompiler_object_inline_offset_721_el$$inline_702$$.value.length), $offset$$inline_703_sel$$inline_705$$ = $offset$$inline_703_sel$$inline_705$$.text.length - $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$);
          $JSCompiler_object_inline_offset_721_el$$inline_702$$ = $offset$$inline_703_sel$$inline_705$$;
          if(!$selected$$20$$.length || $e$$69$$.which != $_KEY$$.LEFT && $e$$69$$.which != $_KEY$$.RIGHT && $e$$69$$.which != $_KEY$$.$BACKSPACE$ && $e$$69$$.which != $_KEY$$.$DELETE$ && $e$$69$$.which != $_KEY$$.ENTER) {
            if(($e$$69$$.which !== $_KEY$$.$BACKSPACE$ || 1 != this.$keydowns$) && $e$$69$$.which != $_KEY$$.LEFT || 0 != $JSCompiler_object_inline_offset_721_el$$inline_702$$ || $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$) {
              this.$_selectChoice$(null);
              if(this.$_opened$()) {
                switch($e$$69$$.which) {
                  case $_KEY$$.UP:
                  ;
                  case $_KEY$$.DOWN:
                    this.$_moveHighlight$($e$$69$$.which === $_KEY$$.UP ? -1 : 1);
                    $_killEvent$$($e$$69$$);
                    return;
                  case $_KEY$$.ENTER:
                    this.$_selectHighlighted$();
                    $_killEvent$$($e$$69$$);
                    return;
                  case $_KEY$$.TAB:
                    this.$_selectHighlighted$({$noFocus$:!0});
                    this.close();
                    return;
                  case $_KEY$$.$ESC$:
                    this.$_cancel$($e$$69$$);
                    $_killEvent$$($e$$69$$);
                    return
                }
              }
              $e$$69$$.which === $_KEY$$.TAB || ($_KEY$$.$isControl$($e$$69$$) || $_KEY$$.$isFunctionKey$($e$$69$$) || $e$$69$$.which === $_KEY$$.$BACKSPACE$ || $e$$69$$.which === $_KEY$$.$ESC$) || $e$$69$$.which === $_KEY$$.ENTER && (!1 === this.$opts$.$openOnEnter$ || $e$$69$$.altKey || $e$$69$$.ctrlKey || $e$$69$$.shiftKey || $e$$69$$.metaKey) || (this.open(), $e$$69$$.which !== $_KEY$$.PAGE_UP && $e$$69$$.which !== $_KEY$$.PAGE_DOWN || $_killEvent$$($e$$69$$), $e$$69$$.which === $_KEY$$.ENTER && 
              $_killEvent$$($e$$69$$))
            }else {
              this.$_selectChoice$($selection$$6$$.find("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)").last()), $_killEvent$$($e$$69$$)
            }
          }else {
            $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ = $selected$$20$$, $e$$69$$.which == $_KEY$$.LEFT && $prev$$1$$.length ? $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ = $prev$$1$$ : $e$$69$$.which == $_KEY$$.RIGHT ? $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ = $next$$1$$.length ? $next$$1$$ : null : $e$$69$$.which === $_KEY$$.$BACKSPACE$ ? (this.$_unselect$($selected$$20$$.first()), this.search.width(10), 
            $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ = $prev$$1$$.length ? $prev$$1$$ : $next$$1$$) : $e$$69$$.which == $_KEY$$.$DELETE$ ? (this.$_unselect$($selected$$20$$.first()), this.search.width(10), $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ = $next$$1$$.length ? $next$$1$$ : null) : $e$$69$$.which == $_KEY$$.ENTER && ($JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ = null), this.$_selectChoice$($JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$), 
            $_killEvent$$($e$$69$$), $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$ && $JSCompiler_object_inline_length_722_length$$inline_704_selectedChoice$$.length || this.open()
          }
        }
      }));
      this.search.on("keyup", this.$_bind$(function() {
        this.$keydowns$ = 0;
        this.$_resizeSearch$()
      }));
      this.search.on("blur", this.$_bind$(function($e$$71$$) {
        this.search.removeClass(this.$_classNm$ + "-focused");
        this.$_selectChoice$(null);
        this.$_opened$() || this.$_clearSearch$();
        $e$$71$$.stopImmediatePropagation()
      }));
      this.$container$.on("click", $selector$$16$$, this.$_bind$(function($e$$72$$) {
        !this.$_isInterfaceEnabled$() || 0 < $$$$17$$($e$$72$$.target).closest("." + this.$_classNm$ + "-search-choice").length || (this.$_selectChoice$(null), this.$_clearPlaceholder$(), this.open(), this.$_focusSearch$(), $e$$72$$.preventDefault())
      }));
      this.$container$.on("focus", $selector$$16$$, this.$_bind$(function() {
        this.$_isInterfaceEnabled$() && this.$_clearPlaceholder$()
      }));
      this.$_initContainerWidth$();
      this.$opts$.element.addClass(this.$_classNm$ + "-offscreen");
      this.$_clearSearch$()
    }, $_enableInterface$:function() {
      $_OjMultiCombobox$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$())
    }, $_initSelection$:function() {
      "" === this.$opts$.element.val() && "" === this.$opts$.element.text() && (this.$_updateSelection$([]), this.close(), this.$_clearSearch$());
      if(this.$datalist$ || "" !== this.$opts$.element.val()) {
        var $self$$70$$ = this;
        this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, function($data$$99$$) {
          void 0 !== $data$$99$$ && null !== $data$$99$$ && ($self$$70$$.$_updateSelection$($data$$99$$), $self$$70$$.close(), $self$$70$$.$_clearSearch$())
        })
      }
    }, $_clearSearch$:function() {
      var $placeholder$$1$$ = this.$_getPlaceholder$(), $maxWidth$$ = this.$_getMaxSearchWidth$();
      void 0 !== $placeholder$$1$$ && 0 === this.$getVal$().length ? (this.search.val($placeholder$$1$$).addClass(this.$_classNm$ + "-default"), this.search.width(0 < $maxWidth$$ ? $maxWidth$$ : this.$container$.css("width"))) : this.search.val("").width(10)
    }, $_clearPlaceholder$:function() {
      this.search.hasClass(this.$_classNm$ + "-default") && this.search.val("").removeClass(this.$_classNm$ + "-default")
    }, $_opening$:function($event$$164$$) {
      this.$_resizeSearch$();
      $_OjMultiCombobox$$.$superclass$.$_opening$.apply(this, arguments);
      this.$_focusSearch$();
      this.$_updateResults$(!0);
      this.search.focus();
      this.$opts$.element.trigger($$$$17$$.Event("ojexpand"))
    }, close:function() {
      this.$_opened$() && (this.$_clearSearch$(), $_OjMultiCombobox$$.$superclass$.close.apply(this, arguments))
    }, $_focus$:function() {
      this.close();
      this.search.focus()
    }, $_updateSelection$:function($data$$100$$) {
      var $ids$$2$$ = [], $filtered$$1$$ = [], $self$$71$$ = this;
      $$$$17$$($data$$100$$).each(function() {
        0 > $ids$$2$$.indexOf($self$$71$$.id(this)) && ($ids$$2$$.push($self$$71$$.id(this)), $filtered$$1$$.push(this))
      });
      $data$$100$$ = $filtered$$1$$;
      this.selection.find("." + this.$_classNm$ + "-search-choice").remove();
      $$$$17$$($data$$100$$).each(function() {
        $self$$71$$.$_addSelectedChoice$(this)
      });
      $self$$71$$.$_postprocessResults$()
    }, $_onSelect$:function($data$$101$$, $options$$256$$) {
      this.$_triggerSelect$($data$$101$$) && (this.$_addSelectedChoice$($data$$101$$), !this.select && this.$opts$.$closeOnSelect$ || this.$_postprocessResults$($data$$101$$, !1, !0 === this.$opts$.$closeOnSelect$), this.$opts$.$closeOnSelect$ ? (this.close(), this.search.width(10)) : 0 < this.$_findHighlightableChoices$().length ? (this.$_clearSearch$(), this.search.width(10), this.$_resizeSearch$(), this.$_positionDropdown$()) : (this.close(), this.search.width(10)), this.$_triggerChange$(), $options$$256$$ && 
      $options$$256$$.$noFocus$ || this.$_focusSearch$())
    }, $_cancel$:function() {
      this.close();
      this.$_focusSearch$()
    }, $_addSelectedChoice$:function($data$$102$$) {
      var $enableChoice$$ = !$data$$102$$.locked, $choice$$3_enabledItem$$ = $$$$17$$("\x3cli class\x3d'" + this.$_classNm$ + "-search-choice'\x3e    \x3cdiv\x3e\x3c/div\x3e    \x3ca href\x3d'#' onclick\x3d'return false;' class\x3d'" + this.$_classNm$ + "-search-choice-close' tabindex\x3d'-1'\x3e\x3c/a\x3e\x3c/li\x3e"), $disabledItem_id$$23$$ = $$$$17$$("\x3cli class\x3d'" + this.$_classNm$ + "-search-choice " + this.$_classNm$ + "-locked'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e"), $choice$$3_enabledItem$$ = 
      $enableChoice$$ ? $choice$$3_enabledItem$$ : $disabledItem_id$$23$$, $disabledItem_id$$23$$ = this.id($data$$102$$), $val$$30$$ = this.$getVal$(), $formatted$$3$$;
      $formatted$$3$$ = this.$opts$.$formatSelection$($data$$102$$, $choice$$3_enabledItem$$.find("div"), this.$opts$.$escapeMarkup$);
      void 0 != $formatted$$3$$ && ($choice$$3_enabledItem$$.find("div").replaceWith("\x3cdiv\x3e" + $formatted$$3$$ + "\x3c/div\x3e"), $choice$$3_enabledItem$$.attr("valueText", $formatted$$3$$));
      if($enableChoice$$) {
        $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-search-choice-close").on("mousedown", $_killEvent$$).on("click dblclick", this.$_bind$(function($e$$73$$) {
          this.$_isInterfaceEnabled$() && ($$$$17$$($e$$73$$.target).closest("." + this.$_classNm$ + "-search-choice").fadeOut("fast", this.$_bind$(function() {
            this.$_unselect$($$$$17$$($e$$73$$.target));
            this.selection.find("." + this.$_classNm$ + "-search-choice-focus").removeClass(this.$_classNm$ + "-search-choice-focus");
            this.close();
            this.$_focusSearch$()
          })).dequeue(), $_killEvent$$($e$$73$$))
        }))
      }
      $choice$$3_enabledItem$$.data(this.$_elemNm$, $data$$102$$);
      $choice$$3_enabledItem$$.insertBefore(this.$searchContainer$);
      $val$$30$$.push($disabledItem_id$$23$$);
      this.$setVal$($val$$30$$)
    }, $_unselect$:function($selected$$21$$) {
      var $val$$31$$ = this.$getVal$(), $data$$103$$, $index$$147$$;
      $selected$$21$$ = $selected$$21$$.closest("." + this.$_classNm$ + "-search-choice");
      if(0 === $selected$$21$$.length) {
        throw"Invalid argument: " + $selected$$21$$ + ". Must be ." + this.$_classNm$ + "-search-choice";
      }
      if($data$$103$$ = $selected$$21$$.data(this.$_elemNm$)) {
        for(;0 <= ($index$$147$$ = $val$$31$$.indexOf(this.id($data$$103$$)));) {
          $val$$31$$.splice($index$$147$$, 1), this.$setVal$($val$$31$$), this.select && this.$_postprocessResults$()
        }
        $selected$$21$$.remove();
        this.$_triggerChange$()
      }
    }, $_postprocessResults$:function($data$$104$$, $choices$$3_initial$$2$$, $noHighlightUpdate$$1$$) {
      var $val$$32$$ = this.$getVal$();
      $choices$$3_initial$$2$$ = this.$results$.find("." + this.$_classNm$ + "-result");
      var $compound$$1$$ = this.$results$.find("." + this.$_classNm$ + "-result-with-children"), $self$$72$$ = this;
      $_each2$$($choices$$3_initial$$2$$, function($i$$212$$, $choice$$4$$) {
        var $id$$24$$ = $self$$72$$.id($choice$$4$$.data($self$$72$$.$_elemNm$));
        0 <= $val$$32$$.indexOf($id$$24$$) && ($choice$$4$$.addClass($self$$72$$.$_classNm$ + "-selected"), $choice$$4$$.find("." + $self$$72$$.$_classNm$ + "-result-selectable").addClass($self$$72$$.$_classNm$ + "-selected"))
      });
      $_each2$$($compound$$1$$, function($i$$213$$, $choice$$5$$) {
        $choice$$5$$.is("." + $self$$72$$.$_classNm$ + "-result-selectable") || 0 !== $choice$$5$$.find("." + $self$$72$$.$_classNm$ + "-result-selectable:not(." + $self$$72$$.$_classNm$ + "-selected)").length || $choice$$5$$.addClass($self$$72$$.$_classNm$ + "-selected")
      });
      -1 == this.$_highlight$() && !1 !== $noHighlightUpdate$$1$$ && $self$$72$$.$_highlight$(0);
      !this.$opts$.$manageNewEntry$ && 0 < !$choices$$3_initial$$2$$.filter("." + this.$_classNm$ + "-result:not(." + this.$_classNm$ + "-selected)").length && (!$data$$104$$ || $data$$104$$ && !$data$$104$$.$more$ && 0 === this.$results$.find("." + this.$_classNm$ + "-no-results").length) && $_checkFormatter$$($self$$72$$.$opts$.$formatNoMatches$) && this.$results$.append("\x3cli class\x3d'" + this.$_classNm$ + "-no-results'\x3e" + $self$$72$$.$opts$.$formatNoMatches$($self$$72$$.search.val()) + 
      "\x3c/li\x3e")
    }, $_getMaxSearchWidth$:function() {
      return this.selection.width() - (this.search.outerWidth(!1) - this.search.width())
    }, $_resizeSearch$:function() {
      var $minimumWidth$$, $left$$5_searchWidth$$, $maxWidth$$1$$, $containerLeft$$, $sideBorderPadding$$ = this.search.outerWidth(!1) - this.search.width();
      $minimumWidth$$ = this.search.width() + 10;
      $left$$5_searchWidth$$ = this.search.offset().left;
      $maxWidth$$1$$ = this.selection.width();
      $containerLeft$$ = this.selection.offset().left;
      $left$$5_searchWidth$$ = $maxWidth$$1$$ - ($left$$5_searchWidth$$ - $containerLeft$$) - $sideBorderPadding$$;
      $left$$5_searchWidth$$ < $minimumWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
      40 > $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
      0 >= $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $minimumWidth$$);
      this.search.width(Math.floor($left$$5_searchWidth$$))
    }, $getVal$:function() {
      var $val$$33$$;
      $val$$33$$ = this.$opts$.element.val();
      return $_splitVal$$($val$$33$$, this.$opts$.separator)
    }, $setVal$:function($val$$34$$) {
      var $unique$$;
      $unique$$ = [];
      $$$$17$$($val$$34$$).each(function() {
        0 > $unique$$.indexOf(this) && $unique$$.push(this)
      });
      this.$opts$.element.val(0 === $unique$$.length ? "" : $unique$$.join(this.$opts$.separator));
      this.search.attr("aria-activedescendant", this.$opts$.element.attr("id"))
    }, val:function($val$$35$$) {
      var $oldData$$4$$, $self$$73$$ = this;
      if(0 === arguments.length) {
        return this.$getVal$()
      }
      $oldData$$4$$ = this.$_data$();
      $oldData$$4$$.length || ($oldData$$4$$ = []);
      if($val$$35$$ || 0 === $val$$35$$) {
        this.$setVal$($val$$35$$);
        if(this.select) {
          this.$opts$.$initSelection$(this.select, this.$_bind$(this.$_updateSelection$)), this.$_triggerChange$()
        }else {
          if(void 0 === this.$opts$.$initSelection$) {
            throw Error("val() cannot be called if initSelection() is not defined");
          }
          this.$opts$.$initSelection$(this.$opts$.element, function($data$$105$$) {
            var $ids$$3$$ = $$$$17$$.map($data$$105$$, $self$$73$$.id);
            $self$$73$$.$setVal$($ids$$3$$);
            $self$$73$$.$_updateSelection$($data$$105$$);
            $self$$73$$.$_clearSearch$();
            $self$$73$$.$_triggerChange$()
          })
        }
        this.$_clearSearch$()
      }else {
        this.$opts$.element.val(""), this.$_updateSelection$([]), this.$_clearSearch$(), this.$_triggerChange$()
      }
    }, $_data$:function($values$$11$$) {
      var $self$$74$$ = this, $ids$$4$$;
      if(0 === arguments.length) {
        return this.selection.find("." + this.$_classNm$ + "-search-choice").map(function() {
          return $$$$17$$(this).data($self$$74$$.$_elemNm$)
        }).get()
      }
      this.$_data$();
      $values$$11$$ || ($values$$11$$ = []);
      $ids$$4$$ = $$$$17$$.map($values$$11$$, function($e$$74$$) {
        return $self$$74$$.$opts$.id($e$$74$$)
      });
      this.$setVal$($ids$$4$$);
      this.$_updateSelection$($values$$11$$);
      this.$_clearSearch$();
      this.$_triggerChange$()
    }});
    $_OjSingleSelect$$ = $_clazz$$($_AbstractSingleChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_userTyping$:!1, $_createContainer$:function() {
      return $$$$17$$(document.createElement("div")).attr({"class":"oj-select oj-widget"}).html("\x3cdiv class\x3d'oj-select-choice' tabindex\x3d'0' role\x3d'presentation'\x3e  \x3cspan class\x3d'oj-select-box'\x3e    \x3cspan class\x3d'oj-select-chosen'\x3e\x3c/span\x3e    \x3cabbr class\x3d'oj-select-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e    \x3ca class\x3d'oj-widget-icon oj-clickable-icon oj-select-open-icon' role\x3d'presentation'\x3e    \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e  \x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-select-drop oj-select-display-none' role\x3d'presentation'\x3e  \x3cdiv class\x3d'oj-select-search-wrapper'\x3e  \x3cdiv class\x3d'oj-select-search'\x3e    \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'           spellcheck\x3d'false' class\x3d'oj-select-input' title\x3d'Search field'            role\x3d'select' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e    \x3cspan class\x3d'oj-select-spyglass-box'\x3e      \x3cspan class\x3d'oj-widget-icon oj-select-search-icon' role\x3d'presentation'\x3e       \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/span\x3e    \x3c/span\x3e  \x3c/div\x3e  \x3c/div\x3e   \x3cul class\x3d'oj-select-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e")
    }, $_opening$:function() {
      $_OjSingleSelect$$.$superclass$.$_opening$.apply(this, arguments);
      this.$_showSearchBox$()
    }, close:function() {
      this.$_opened$() && ($_OjSingleSelect$$.$superclass$.close.apply(this, arguments), "" == this.text.text() ? this.$_clear$() : this.$_data$() || "" === this.search.val ? this.search.val(this.$_data$().text) : this.$_clearSearch$())
    }, $_initContainer$:function() {
      this.text = this.$container$.find(".oj-select-chosen");
      $_OjSingleSelect$$.$superclass$.$_initContainer$.apply(this, arguments);
      this.selection.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
      this.selection.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$))
    }, $_initSelection$:function() {
      this.$_isPlaceholderOptionSelected$() ? (this.$_updateSelection$(null), this.close(), this.$_setPlaceholder$()) : $_OjSingleSelect$$.$superclass$.$_initSelection$.apply(this, arguments)
    }, $_updateSelection$:function($data$$106$$) {
      var $formatted$$4$$;
      this.selection.data(this.$_elemNm$, $data$$106$$);
      null !== $data$$106$$ && ($formatted$$4$$ = this.$opts$.$formatSelection$($data$$106$$, this.search, this.$opts$.$escapeMarkup$));
      void 0 !== $formatted$$4$$ && this.text.text($formatted$$4$$);
      this.$setVal$($data$$106$$ ? this.$opts$.id($data$$106$$) : $data$$106$$);
      this.text.removeClass(this.$_classNm$ + "-default");
      this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear")
    }, $_getPlaceholderOption$:function() {
      var $firstOption$$ = this.$opts$.element.children("option").first();
      if("" === $firstOption$$.text() && "" === $firstOption$$.val()) {
        return $firstOption$$
      }
    }, $_isPlaceholderOptionSelected$:function() {
      var $placeholderOption$$1$$;
      if(!this.$_getPlaceholder$()) {
        return!1
      }
      var $cval$$ = this.$getVal$();
      return void 0 !== ($placeholderOption$$1$$ = this.$_getPlaceholderOption$()) && $placeholderOption$$1$$.prop("selected") || "" === $cval$$ || void 0 === $cval$$ || null === $cval$$
    }, $_getPlaceholder$:function() {
      return void 0 === this.$_getPlaceholderOption$() ? void 0 : $_OjSingleSelect$$.$superclass$.$_getPlaceholder$.apply(this, arguments)
    }, $_setPlaceholder$:function() {
      var $placeholder$$2$$ = this.$_getPlaceholder$();
      this.$_isPlaceholderOptionSelected$() && void 0 !== $placeholder$$2$$ && void 0 !== this.$_getPlaceholderOption$() && (void 0 === $placeholder$$2$$ && ($placeholder$$2$$ = ""), this.text.text($placeholder$$2$$).addClass(this.$_classNm$ + "-default"), this.$container$.removeClass(this.$_classNm$ + "-allowclear"))
    }, $_clearPlaceholder$:function() {
      this.text.hasClass(this.$_classNm$ + "-default") && this.text.val("").removeClass(this.$_classNm$ + "-default")
    }, $getVal$:function() {
      return this.$opts$.element.val() || this.selection.data("selectVal")
    }, $setVal$:function($val$$36$$) {
      this.$opts$.element.val($val$$36$$);
      this.selection.data("selectVal", $val$$36$$)
    }, $_showSearchBox$:function() {
      var $searchBox$$ = this.$dropdown$.find(".oj-select-search");
      $searchBox$$ && (this.$_hasSearchBox$() ? (this.$dropdown$.find(".oj-select-search-wrapper").css("display", ""), $$$$17$$($searchBox$$).removeAttr("aria-hidden").attr({tabIndex:"0"})) : (this.$dropdown$.find(".oj-select-search-wrapper").css("display", "none"), $$$$17$$($searchBox$$).removeAttr("tabIndex").attr({"aria-hidden":"true"})))
    }, $_hasSearchBox$:function() {
      return(this.$datalist$ ? this.$datalist$[0].length : this.$opts$.data.length) > this.$opts$.minimumResultsForSearch || this.$_userTyping$
    }});
    var $_ojChoice_defaults$$ = {$closeOnSelect$:!0, $openOnEnter$:!0, $formatResult$:function($result$$16$$, $container$$8_markup$$1$$, $query$$6$$, $escapeMarkup$$) {
      $container$$8_markup$$1$$ = [];
      $container$$8_markup$$1$$.push($escapeMarkup$$($result$$16$$.text));
      return $container$$8_markup$$1$$.join("")
    }, $formatSelection$:function($data$$107$$, $container$$9$$, $escapeMarkup$$1$$) {
      return $data$$107$$ ? $escapeMarkup$$1$$($data$$107$$.text) : void 0
    }, $formatNoMatches$:$JSCompiler_returnArg$$("No matches found"), id:function($e$$75$$) {
      return $e$$75$$.id
    }, $matcher$:function($term$$4$$, $text$$10$$) {
      return 0 <= ("" + $text$$10$$).toUpperCase().indexOf(("" + $term$$4$$).toUpperCase())
    }, separator:",", $escapeMarkup$:function _defaultEscapeMarkup($markup$$) {
      var $replace_map$$ = {"\\":"\x26#92;", "\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#39;", "/":"\x26#47;"};
      return String($markup$$).replace(/[&<>"'\/\\]/g, function($match$$12$$) {
        return $replace_map$$[$match$$12$$]
      })
    }, $blurOnChange$:!1, $selectOnBlur$:!1}, $_ojCombobox_methods$$ = {$manageNewEntry$:function($term$$5$$) {
      return{id:$$$$17$$.trim($term$$5$$), text:$$$$17$$.trim($term$$5$$)}
    }}
  })();
  (function() {
    $oj$$18$$.$__registerWidget$("oj.ojMenu", $$$$17$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", options:{icons:{submenu:"ui-icon-carat-1-e"}, menuPosition:{my:"left top", at:"left bottom"}, menuSelector:"ul", submenuPosition:{my:"left top", at:"right top"}, beforeShow:null, blur:null, focus:null, select:null}, _create:function() {
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-widget").toggleClass("oj-menu-icons", !!this.element.find(".oj-widget-icon").length).attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$165$$) {
        this.options.disabled && $event$$165$$.preventDefault()
      }, click:function($event$$166$$) {
        this.options.disabled && $event$$166$$.preventDefault()
      }, keydown:function($event$$167$$) {
        this.options.disabled && $event$$167$$.keyCode === $$$$17$$.ui.keyCode.ESCAPE && this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$167$$)
      }, blur:function($event$$168$$) {
        this.options.disabled && this.$_launcher$ && this.$__dismiss$($event$$168$$)
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$169$$) {
        $event$$169$$.preventDefault()
      }, "click .oj-disabled \x3e a":function($event$$170$$) {
        $event$$170$$.preventDefault()
      }, "click .oj-menu-item:has(a)":function($event$$171$$) {
        var $target$$84$$ = $$$$17$$($event$$171$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$84$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, this.select($event$$171$$), $target$$84$$.has(".oj-menu").length ? this.expand($event$$171$$) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".oj-menu").length && clearTimeout(this.$timer$)))
      }, "mouseenter .oj-menu-item":function($event$$172$$) {
        var $target$$85$$ = $$$$17$$($event$$172$$.currentTarget);
        $target$$85$$.siblings().children(".oj-active").removeClass("oj-active");
        this.focus($event$$172$$, $target$$85$$)
      }, mouseleave:this.collapseAll, "mouseleave .oj-menu":this.collapseAll, focus:function($event$$173$$, $keepActiveItem$$) {
        var $item$$6$$ = this.active || this.element.children(".oj-menu-item").eq(0);
        $keepActiveItem$$ || this.focus($event$$173$$, $item$$6$$)
      }, blur:function($event$$174$$) {
        this._delay(function() {
          $$$$17$$.contains(this.element[0], this.document[0].activeElement) || this.collapseAll($event$$174$$)
        });
        this.$_launcher$ && this.$__dismiss$($event$$174$$)
      }, keydown:this.$_keydown$, keyup:function($event$$175$$) {
        if($event$$175$$.keyCode == $$$$17$$.ui.keyCode.ENTER || $event$$175$$.keyCode == $$$$17$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1
        }
      }});
      this.$_setup$();
      this._on(!0, this.document, {click:function($event$$176$$) {
        $$$$17$$($event$$176$$.target).closest(this.element).length || (this.collapseAll($event$$176$$), this.$_launcher$ && this.$__dismiss$($event$$176$$));
        this.$mouseHandled$ = !1
      }});
      this._super()
    }, _destroy:function() {
      this.element.removeAttr("aria-activedescendant").find(".oj-menu").addBack().removeClass("oj-menu oj-widget oj-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$20$$ = $$$$17$$(this);
        $elem$$20$$.data("oj-ojMenu-submenu-carat") && $elem$$20$$.remove()
      });
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role")
    }, $_keydown$:function($event$$177$$) {
      function $escape$$1$$($value$$166$$) {
        return $value$$166$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26")
      }
      var $match$$15_prev$$2$$, $activeItemId_character$$, $skip_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$177$$.keyCode) {
        case $$$$17$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$177$$);
          break;
        case $$$$17$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$177$$);
          break;
        case $$$$17$$.ui.keyCode.UP:
          this.previous($event$$177$$);
          break;
        case $$$$17$$.ui.keyCode.DOWN:
          this.next($event$$177$$);
          break;
        case $$$$17$$.ui.keyCode.LEFT:
        ;
        case $$$$17$$.ui.keyCode.RIGHT:
          $event$$177$$.keyCode === $$$$17$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.active && !this.active.is(".oj-disabled") && this.expand($event$$177$$) : this.collapse($event$$177$$);
          break;
        case $$$$17$$.ui.keyCode.ENTER:
        ;
        case $$$$17$$.ui.keyCode.SPACE:
          this.$_activate$($event$$177$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$75$$ = this;
          setTimeout(function() {
            $self$$75$$.$__spaceEnterDownInMenu$ = !1
          }, 100);
          break;
        case $$$$17$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$ = this.element.attr("aria-activedescendant"), $skip_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$ && !$$$$17$$("#" + $activeItemId_character$$).is($skip_topLevelAnchorSelector$$) ? this.collapse($event$$177$$) : this.$_focusLauncherAndDismiss$($event$$177$$)) : this.collapse($event$$177$$);
          break;
        default:
          $preventDefault$$ = !1, $match$$15_prev$$2$$ = this.$previousFilter$ || "", $activeItemId_character$$ = String.fromCharCode($event$$177$$.keyCode), $skip_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$ === $match$$15_prev$$2$$ ? $skip_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$ = $match$$15_prev$$2$$ + $activeItemId_character$$, $regex$$1$$ = RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$15_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$17$$(this).children("a").text())
          }), $match$$15_prev$$2$$ = $skip_topLevelAnchorSelector$$ && -1 !== $match$$15_prev$$2$$.index(this.active.next()) ? this.active.nextAll(".oj-menu-item") : $match$$15_prev$$2$$, $match$$15_prev$$2$$.length || ($activeItemId_character$$ = String.fromCharCode($event$$177$$.keyCode), $regex$$1$$ = RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$15_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$17$$(this).children("a").text())
          })), $match$$15_prev$$2$$.length ? (this.focus($event$$177$$, $match$$15_prev$$2$$), 1 < $match$$15_prev$$2$$.length ? (this.$previousFilter$ = $activeItemId_character$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$
      }
      $preventDefault$$ && $event$$177$$.preventDefault()
    }, $_activate$:function($event$$178$$) {
      this.active.is(".oj-disabled") || (this.active.children("a[aria-haspopup\x3d'true']").length ? this.expand($event$$178$$) : this.select($event$$178$$))
    }, refresh:function() {
      this._super();
      this.$_setup$()
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this._GetReadingDirection();
      var $icon$$ = this.options.icons.submenu, $children$$4_submenus$$ = this.element.find(this.options.menuSelector);
      $children$$4_submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-widget").hide().attr({role:this.role, "aria-hidden":"true", "aria-expanded":"false"}).each(function() {
        var $menu$$10$$ = $$$$17$$(this), $item$$7_itemId$$ = $menu$$10$$.prev("a"), $submenuCarat$$ = $$$$17$$("\x3cspan\x3e");
        $submenuCarat$$.addClass("oj-menu-icon oj-widget-icon " + $icon$$).data("oj-ojMenu-submenu-carat", !0);
        $item$$7_itemId$$.attr("aria-haspopup", "true").prepend($submenuCarat$$);
        $item$$7_itemId$$ = $item$$7_itemId$$.attr("id");
        $menu$$10$$.attr("aria-labelledby", $item$$7_itemId$$)
      });
      $children$$4_submenus$$ = $children$$4_submenus$$.add(this.element).children();
      $children$$4_submenus$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$4_submenus$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$4_submenus$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$8$$ = $$$$17$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$8$$.text()) || $item$$8$$.addClass("oj-menu-divider").attr("role", "separator")
      });
      $children$$4_submenus$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$4_submenus$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      this.active && !$$$$17$$.contains(this.element[0], this.active[0]) && this.blur()
    }, $_itemRole$:$JSCompiler_returnArg$$("menuitem"), _setOption:function($key$$82$$, $value$$167$$) {
      "icons" === $key$$82$$ && this.element.find(".oj-menu-icon").removeClass(this.options.icons.submenu).addClass($value$$167$$.submenu);
      this._super($key$$82$$, $value$$167$$)
    }, focus:function($event$$179$$, $item$$9$$) {
      var $focused$$4_nested$$;
      this.blur($event$$179$$, $event$$179$$ && "focus" === $event$$179$$.type);
      this.active = $item$$9$$.first();
      $focused$$4_nested$$ = this.active.children("a").addClass("oj-focus");
      this.role && this.element.attr("aria-activedescendant", $focused$$4_nested$$.attr("id"));
      this.active.parent().closest(".oj-menu-item").children("a:first").addClass("oj-active");
      $event$$179$$ && "keydown" === $event$$179$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        this.$_close$()
      }, this.delay);
      $focused$$4_nested$$ = $item$$9$$.children(".oj-menu");
      $focused$$4_nested$$.length && (/^mouse/.test($event$$179$$.type) && !this.active.hasClass("oj-disabled")) && this.$_startOpening$($focused$$4_nested$$);
      this.$activeMenu$ = $item$$9$$.parent();
      this._trigger("focus", $event$$179$$, {item:$item$$9$$})
    }, blur:function($event$$180$$, $JSCompiler_OptimizeArgumentsArray_p4$$) {
      $JSCompiler_OptimizeArgumentsArray_p4$$ || clearTimeout(this.$timer$);
      this.active && (this.active.children("a").removeClass("oj-focus"), this.active = null, this._trigger("blur", $event$$180$$, {item:this.active}))
    }, $_focusLauncherAndDismiss$:function($event$$181$$) {
      var $menuFocused$$ = this.element.is(":focus");
      this.$_launcher$.focus();
      $menuFocused$$ || this.$__dismiss$($event$$181$$)
    }, $__dismiss$:function($event$$182$$) {
      this.element.hide().attr("aria-hidden", "true");
      this.$_launcher$ = void 0;
      this._trigger("__dismiss", $event$$182$$, {})
    }, show:function($event$$183$$, $params$$14$$) {
      this.$_popupInited$ || (this.$_popupInit$(), this.$_popupInited$ = !0);
      if($params$$14$$ && $params$$14$$.launcher) {
        var $launcher$$ = $params$$14$$.launcher;
        if(this._trigger("beforeShow", $event$$183$$, {launcher:$launcher$$})) {
          var $launcher$$ = "string" === $$$$17$$.type($launcher$$) ? $$$$17$$("#" + $launcher$$) : $launcher$$, $focusFirstItem_position$$8$$ = $$$$17$$.extend({}, this.options.menuPosition);
          null == $focusFirstItem_position$$8$$.of && ($focusFirstItem_position$$8$$.of = $event$$183$$ && "contextmenu" === $event$$183$$.type ? $event$$183$$ : $launcher$$);
          this.element.show().removeAttr("aria-hidden").position($focusFirstItem_position$$8$$);
          (($focusFirstItem_position$$8$$ = "firstItem" === $params$$14$$.focus) || "menu" === $params$$14$$.focus) && this.element.focus();
          $focusFirstItem_position$$8$$ ? this.focus($event$$183$$, this.element.children().first()) : this.blur($event$$183$$);
          this.$_launcher$ = $launcher$$
        }
      }
    }, $_popupInit$:function() {
      this.element.css({position:"absolute", zIndex:999})
    }, $_startOpening$:function($submenu$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$.attr("aria-hidden") && (this.$timer$ = this._delay(function() {
        this.$_close$();
        this.$_open$($submenu$$)
      }, this.delay))
    }, $_open$:function($submenu$$1$$) {
      var $position$$9$$ = $$$$17$$.extend({of:this.active}, this.options.submenuPosition);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$1$$.parents(".oj-menu")).hide().attr("aria-hidden", "true");
      $submenu$$1$$.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position($position$$9$$)
    }, collapseAll:function($event$$184$$, $all$$) {
      clearTimeout(this.$timer$);
      this.$timer$ = this._delay(function() {
        var $currentMenu$$ = $all$$ ? this.element : $$$$17$$($event$$184$$ && $event$$184$$.target).closest(this.element.find(".oj-menu"));
        $currentMenu$$.length || ($currentMenu$$ = this.element);
        this.$_close$($currentMenu$$);
        this.blur($event$$184$$);
        this.$activeMenu$ = $currentMenu$$
      }, this.delay)
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.active ? this.active.parent() : this.element);
      $startMenu$$.find(".oj-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.oj-active").removeClass("oj-active")
    }, collapse:function($event$$185$$) {
      var $newItem$$ = this.active && this.active.parent().closest(".oj-menu-item", this.element);
      $newItem$$ && $newItem$$.length && (this.$_close$(), this.focus($event$$185$$, $newItem$$))
    }, expand:function($event$$186$$) {
      var $newItem$$1$$ = this.active && this.active.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this._delay(function() {
        this.focus($event$$186$$, $newItem$$1$$)
      }))
    }, next:function($event$$187$$) {
      this.$_move$("next", "first", $event$$187$$)
    }, previous:function($event$$188$$) {
      this.$_move$("prev", "last", $event$$188$$)
    }, $_isFirstItem$:function() {
      return this.active && !this.active.prevAll(".oj-menu-item").length
    }, $_isLastItem$:function() {
      return this.active && !this.active.nextAll(".oj-menu-item").length
    }, $_move$:function($direction$$8$$, $filter$$3$$, $event$$189$$) {
      var $next$$2$$;
      this.active && ($next$$2$$ = "first" === $direction$$8$$ || "last" === $direction$$8$$ ? this.active["first" === $direction$$8$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.active[$direction$$8$$ + "All"](".oj-menu-item").eq(0));
      $next$$2$$ && $next$$2$$.length && this.active || ($next$$2$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$3$$]());
      this.focus($event$$189$$, $next$$2$$)
    }, select:function($event$$190$$) {
      if(!this.active && $event$$190$$ && $event$$190$$.target) {
        var $menuItem_ui$$7$$ = $$$$17$$($event$$190$$.target).closest(".oj-menu-item");
        $menuItem_ui$$7$$.closest(this.element).length && (this.active = $menuItem_ui$$7$$)
      }
      this.active && ($menuItem_ui$$7$$ = {item:this.active}, this.active.has(".oj-menu").length || this.collapseAll($event$$190$$, !0), this.$_launcher$ && ($menuItem_ui$$7$$.item.children(this.options.menuSelector).length || this.$_focusLauncherAndDismiss$($event$$190$$)), this._trigger("select", $event$$190$$, $menuItem_ui$$7$$))
    }})
  })();
  (function() {
    $oj$$18$$.$__registerWidget$("oj.ojTrain", $$$$17$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selection:"next", currentStep:"", optionChange:null}, $_stepNum$:0, $_stepArray$:[], _create:function() {
      var $options$$257$$ = this.options;
      this._super();
      this.$_stepNum$ = $options$$257$$.steps.length;
      this.$_marginType$ = (this.$_isRtl$ = "rtl" === this._GetReadingDirection()) ? "margin-right" : "margin-left";
      this.$_alignType$ = this.$_isRtl$ ? "right" : "left";
      var $bar_i$$214$$ = $$$$17$$("\x3cdiv class\x3d'oj-train-bar'\x3e\x3c/div\x3e");
      this.$_maxStepWidth$ = this.element.width() < 107 * (this.$_stepNum$ - 1) + 72 ? (this.element.width() - 72) / (this.$_stepNum$ - 1) : 107;
      this.$_centerMargin$ = (this.element.width() - this.$_maxStepWidth$ * (this.$_stepNum$ - 1) - 72) / 2;
      this.$_stepList$ = $$$$17$$("\x3cul\x3e").attr({"aria-label":"Train Component"}).css({margin:"0", padding:"0"});
      1 < this.$_stepNum$ && $bar_i$$214$$.css({"margin-top":"7px", width:(this.$_stepNum$ - 1) * this.$_maxStepWidth$ + "px"}).css(this.$_marginType$, 36 + this.$_centerMargin$ + "px").css(this.$_alignType$, 0);
      $bar_i$$214$$.appendTo(this.element);
      this.$_progressbar$ = $$$$17$$("\x3cdiv class\x3d'oj-train-bar-overlay'\x3e\x3c/div\x3e");
      this.$_progressbar$.appendTo(this.element);
      this.$_setupArray$();
      this.$_currentStepIndex$ = this.$_getCurrentStepIndex$($options$$257$$.currentStep);
      for($bar_i$$214$$ = 0;$bar_i$$214$$ < this.$_stepNum$;$bar_i$$214$$++) {
        var $stepTag$$ = $$$$17$$("\x3cli\x3e").attr({id:this.$_stepArray$[$bar_i$$214$$][1]}).css({"list-style-type":"none", position:"absolute"}).css(this.$_marginType$, this.$_centerMargin$ + this.$_maxStepWidth$ * $bar_i$$214$$ + "px").css(this.$_alignType$, 0);
        this.$_stepList$.append($stepTag$$);
        $bar_i$$214$$ == this.$_currentStepIndex$ + 1 && "next" == $options$$257$$.selection && (this.$_stepArray$[$bar_i$$214$$][2] = "on");
        this.$_drawLabel$($bar_i$$214$$);
        this.$_drawStepFill$($bar_i$$214$$);
        this.$_drawButton$($bar_i$$214$$);
        this.$_drawMessageType$($bar_i$$214$$)
      }
      this.$_updateProgressWidth$();
      this.element.addClass("oj-train oj-widget oj-widget-content oj-corner-all")
    }, $_updateProgressWidth$:function() {
      this.$_progressbar$.css({"margin-top":"7px", width:(this.$_currentStepIndex$ === this.$_stepNum$ - 1 ? (this.$_stepNum$ - 1) * this.$_maxStepWidth$ : this.$_maxStepWidth$ * this.$_currentStepIndex$ + 53.5 * (this.$_maxStepWidth$ / 107)) + "px"}).css(this.$_marginType$, this.$_centerMargin$ + 36 + "px").css(this.$_alignType$, 0);
      this.$_stepList$.appendTo(this.element)
    }, $_setupArray$:function() {
      for(var $options$$258$$ = this.options, $i$$215$$ = 0;$i$$215$$ < this.$_stepNum$;$i$$215$$++) {
        var $step$$ = $options$$258$$.steps[$i$$215$$];
        this.$_stepArray$[$i$$215$$] = Array(5);
        this.$_stepArray$[$i$$215$$][2] = $options$$258$$.selection && "next" != $options$$258$$.selection ? $options$$258$$.selection : "off";
        this.$_stepArray$[$i$$215$$][3] = "unvisited";
        for(var $key$$83$$ in $step$$) {
          "name" === $key$$83$$ ? this.$_stepArray$[$i$$215$$][0] = $step$$[$key$$83$$] : "id" === $key$$83$$ ? this.$_stepArray$[$i$$215$$][1] = $step$$[$key$$83$$] : "selection" === $key$$83$$ ? this.$_stepArray$[$i$$215$$][2] = $step$$[$key$$83$$] : "state" === $key$$83$$ ? this.$_stepArray$[$i$$215$$][3] = $step$$[$key$$83$$] : "messageType" === $key$$83$$ && (this.$_stepArray$[$i$$215$$][4] = $step$$[$key$$83$$])
        }
      }
    }, $_drawButton$:function($index$$148$$) {
      var $button$$1$$ = $$$$17$$("\x3cdiv/\x3e"), $scrnRead$$ = $$$$17$$("\x3cspan/\x3e"), $self$$76$$ = this, $desc$$ = "";
      if(this.$_stepArray$[$index$$148$$]) {
        var $state$$3_stepLi$$ = this.$_stepArray$[$index$$148$$][3];
        this.$_currentStepIndex$ === $index$$148$$ ? ($button$$1$$.addClass("oj-train-button-current"), $desc$$ = ". This is the current step.") : "visited" === $state$$3_stepLi$$ ? ($button$$1$$.addClass("oj-train-button-visited"), $desc$$ = ". This step has been visited.") : "unvisited" === $state$$3_stepLi$$ ? ($button$$1$$.addClass("oj-train-button-unvisited"), $desc$$ = ". This step has not been visited yet.") : $button$$1$$.addClass("oj-train-button-disabled");
        "disabled" === this.$_stepArray$[$index$$148$$][3] || null != this.options.disabled && this.options.disabled || "on" !== this.$_stepArray$[$index$$148$$][2] || (this._hoverable($button$$1$$), $button$$1$$.bind("click" + this.eventNamespace, function() {
          var $oldStep$$ = $self$$76$$.options.currentStep;
          $self$$76$$.options.currentStep = this.parentNode.id;
          $self$$76$$.$_fireOptionChange$("currentStep", $oldStep$$, this.parentNode.id, !0)
        }));
        $button$$1$$.css({"margin-top":"4px", width:"12px", height:"12px"}).css(this.$_marginType$, "29px").css(this.$_alignType$, 0);
        $state$$3_stepLi$$ = this.$_stepList$.children().eq($index$$148$$).children();
        3 <= $state$$3_stepLi$$.length ? ($state$$3_stepLi$$[2].remove(), $button$$1$$.insertAfter($state$$3_stepLi$$[1])) : this.$_stepList$.children().eq($index$$148$$).append($button$$1$$);
        $scrnRead$$.text($desc$$);
        $scrnRead$$.css("display", "none");
        this.$_stepList$.children().eq($index$$148$$).find("a").append($scrnRead$$)
      }
    }, $_drawMessageType$:function($index$$149$$) {
      var $icon$$1$$ = $$$$17$$("\x3cdiv/\x3e"), $scrnRead$$1$$ = $$$$17$$("\x3cspan/\x3e"), $desc$$1$$ = "", $self$$77$$ = this;
      if(this.$_stepArray$[$index$$149$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$149$$][4];
        "complete" === $messageType$$ ? ($icon$$1$$.addClass("oj-train-icon-complete"), $desc$$1$$ = " Complete") : "info" === $messageType$$ ? ($icon$$1$$.addClass("oj-train-icon-info"), $desc$$1$$ = " Info") : "error" === $messageType$$ ? ($icon$$1$$.addClass("oj-train-icon-error"), $desc$$1$$ = " Error") : "warning" === $messageType$$ && ($icon$$1$$.addClass("oj-train-icon-warning"), $desc$$1$$ = " Warning");
        var $stepLi$$1$$ = this.$_stepList$.children().eq($index$$149$$).children();
        4 <= $stepLi$$1$$.length && $stepLi$$1$$[3].remove();
        "disabled" === this.$_stepArray$[$index$$149$$][3] || null != this.options.disabled && this.options.disabled || "on" !== this.$_stepArray$[$index$$149$$][2] || (this._hoverable($icon$$1$$), $icon$$1$$.bind("click" + this.eventNamespace, function() {
          var $oldStep$$1$$ = $self$$77$$.options.currentStep;
          $self$$77$$.options.currentStep = this.parentNode.id;
          $self$$77$$.$_fireOptionChange$("currentStep", $oldStep$$1$$, this.parentNode.id, !0)
        }));
        null != $messageType$$ && "none" != $messageType$$ && ($icon$$1$$.css({"margin-top":"9px", height:"9px", width:"9px"}).css(this.$_marginType$, "34px").css(this.$_alignType$, 0), $scrnRead$$1$$.text($desc$$1$$), $scrnRead$$1$$.css("display", "none"), this.$_stepList$.children().eq($index$$149$$).find("a").append($scrnRead$$1$$), this.$_stepList$.children().eq($index$$149$$).append($icon$$1$$))
      }
    }, $_fireOptionChange$:function($key$$84$$, $previousValue$$5$$, $value$$168$$, $originalEvent$$3$$) {
      this._trigger("optionChange", $originalEvent$$3$$, {option:$key$$84$$, previousValue:$previousValue$$5$$, value:$value$$168$$, optionMetadata:{writeback:$originalEvent$$3$$ ? "shouldWrite" : "shouldNotWrite"}})
    }, $_drawStepFill$:function($index$$150_stepLi$$2$$) {
      var $stepFill$$ = $$$$17$$("\x3cdiv/\x3e");
      this.$_stepArray$[$index$$150_stepLi$$2$$] && ($index$$150_stepLi$$2$$ <= this.$_currentStepIndex$ ? $stepFill$$.addClass("oj-train-stepBackground-overlay") : $stepFill$$.addClass("oj-train-stepBackground"), $stepFill$$.css(this.$_marginType$, "25px").css(this.$_alignType$, 0), $index$$150_stepLi$$2$$ = this.$_stepList$.children().eq($index$$150_stepLi$$2$$).children(), 1 < $index$$150_stepLi$$2$$.length && $index$$150_stepLi$$2$$[1].remove(), $stepFill$$.insertAfter($index$$150_stepLi$$2$$[0]))
    }, $_drawLabel$:function($index$$151$$) {
      var $self$$78$$ = this;
      if(this.$_stepArray$[$index$$151$$]) {
        var $label$$4$$ = $$$$17$$("\x3ca\x3e" + this.$_stepArray$[$index$$151$$][0] + "\x3c/a\x3e");
        $label$$4$$.addClass("oj-train-label");
        $label$$4$$.css("margin-bottom", "7px");
        $label$$4$$.css(this.$_alignType$, 0);
        $index$$151$$ === this.$_currentStepIndex$ ? $label$$4$$.addClass("oj-selected") : "visited" === this.$_stepArray$[$index$$151$$][3] ? $label$$4$$.addClass("oj-visited") : "disabled" === this.$_stepArray$[$index$$151$$][3] && $label$$4$$.addClass("oj-disabled");
        "on" !== this.$_stepArray$[$index$$151$$][2] || null != this.options.disabled && this.options.disabled || ($label$$4$$.attr("tabindex", $index$$151$$ + 1), this._hoverable($label$$4$$), $label$$4$$.bind("click keydown" + this.eventNamespace, function($e$$76_oldStep$$2$$) {
          if(13 == $e$$76_oldStep$$2$$.keyCode || "click" == $e$$76_oldStep$$2$$.type) {
            $e$$76_oldStep$$2$$ = $self$$78$$.options.currentStep, $self$$78$$.options.currentStep = this.parentNode.id, $self$$78$$.$_fireOptionChange$("currentStep", $e$$76_oldStep$$2$$, this.parentNode.id, !0)
          }
        }));
        var $stepLi$$3$$ = this.$_stepList$.children().eq($index$$151$$).children();
        1 <= $stepLi$$3$$.length && $stepLi$$3$$[0].remove();
        this.$_stepList$.children().eq($index$$151$$).prepend($label$$4$$)
      }
    }, $_getCurrentStepIndex$:function($id$$25$$) {
      for(var $i$$216$$ = 0;$i$$216$$ < this.$_stepNum$;$i$$216$$++) {
        if(this.$_stepArray$[$i$$216$$] && this.$_stepArray$[$i$$216$$][1] === $id$$25$$) {
          return $i$$216$$
        }
      }
      return 0
    }, getStepName:function($id$$26$$) {
      for(var $i$$217$$ = 0;$i$$217$$ < this.$_stepNum$;$i$$217$$++) {
        if(this.$_stepArray$[$i$$217$$] && this.$_stepArray$[$i$$217$$][1] === $id$$26$$) {
          return this.$_stepArray$[$i$$217$$][0]
        }
      }
      return null
    }, getStepId:function($name$$95$$) {
      for(var $i$$218$$ = 0;$i$$218$$ < this.$_stepNum$;$i$$218$$++) {
        if(this.$_stepArray$[$i$$218$$] && this.$_stepArray$[$i$$218$$][0] === $name$$95$$) {
          return this.$_stepArray$[$i$$218$$][1]
        }
      }
      return null
    }, select:function($id$$27$$) {
      for(var $i$$219$$ = 0;$i$$219$$ < this.$_stepNum$;$i$$219$$++) {
        this.$_stepArray$[$i$$219$$] && this.$_stepArray$[$i$$219$$][1] === $id$$27$$ && ("next" === this.options.selection && $i$$219$$ + 1 < this.$_stepNum$ && (this.$_stepArray$[$i$$219$$ + 1][2] = "on", this.$_drawLabel$($i$$219$$ + 1), this.$_drawButton$($i$$219$$ + 1)), this.$_stepArray$[$i$$219$$][3] = "current", this.$_currentStepIndex$ = $i$$219$$, this.options.currentStep = $id$$27$$, this.$_drawLabel$($i$$219$$), this.$_drawButton$($i$$219$$), this.$_updateProgressWidth$())
      }
      for($i$$219$$ = 0;$i$$219$$ < this.$_stepNum$;$i$$219$$++) {
        this.$_drawStepFill$($i$$219$$)
      }
    }, deselect:function($id$$28$$, $selection$$7$$, $state$$4$$, $messageType$$1$$) {
      for(var $i$$220$$ = 0;$i$$220$$ < this.$_stepNum$;$i$$220$$++) {
        this.$_stepArray$[$i$$220$$] && this.$_stepArray$[$i$$220$$][1] === $id$$28$$ && ($selection$$7$$ ? this.$_stepArray$[$i$$220$$][2] = $selection$$7$$ : this.$_stepArray$[$i$$220$$][2] = "off", $state$$4$$ ? this.$_stepArray$[$i$$220$$][3] = $state$$4$$ : this.$_stepArray$[$i$$220$$][3] = "visited", $messageType$$1$$ ? this.$_stepArray$[$i$$220$$][4] = $messageType$$1$$ : this.$_stepArray$[$i$$220$$][4] = "none", this.$_currentStepIndex$ = -1, "next" === this.options.selection && $i$$220$$ + 
        1 < this.$_stepNum$ && (this.$_stepArray$[$i$$220$$ + 1][2] = "off", this.$_drawLabel$($i$$220$$ + 1), this.$_drawButton$($i$$220$$ + 1)), this.$_drawLabel$($i$$220$$), this.$_drawButton$($i$$220$$), this.$_drawMessageType$($i$$220$$))
      }
    }, nextSelectableStep:function() {
      for(var $i$$221$$ = this.$_currentStepIndex$;$i$$221$$ < this.$_stepNum$;$i$$221$$++) {
        if($i$$221$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$221$$ + 1] && "on" === this.$_stepArray$[$i$$221$$ + 1][2]) {
          return this.$_stepArray$[$i$$221$$ + 1][1]
        }
      }
      return this.$_stepArray$[this.$_currentStepIndex$][1]
    }, previousSelectableStep:function() {
      for(var $i$$222$$ = this.$_currentStepIndex$;0 <= $i$$222$$;$i$$222$$--) {
        if(this.$_stepArray$[$i$$222$$ - 1] && "on" === this.$_stepArray$[$i$$222$$ - 1][2]) {
          return this.$_stepArray$[$i$$222$$ - 1][1]
        }
      }
      return this.$_stepArray$[this.$_currentStepIndex$][1]
    }})
  })();
  $oj$$18$$.$__registerWidget$("oj.ojRadioset", $$$$17$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{}, refresh:function() {
    this._super();
    this.$$radios$ = this.$_findRadiosWithMatchingName$().filter(".oj-radio")._ojRadioCheckbox("refresh").end().not(".oj-radio")._ojRadioCheckbox().end();
    this.$_setup$()
  }, widget:$JSCompiler_get$$("$uiRadioset$"), _create:function() {
    this.$$radios$ = this.$_findRadiosWithMatchingName$()._ojRadioCheckbox();
    this.$uiRadioset$ = this.element.addClass("oj-radioset oj-widget").attr("role", "radiogroup");
    this._on(this.$_events$);
    this.$_setup$();
    this._super();
    this.$_SetRootAttributes$()
  }, $_findRadiosWithMatchingName$:function() {
    var $first$$4_name$$96$$ = this.element.find("input[type\x3dradio]:first");
    0 === $first$$4_name$$96$$.length && $oj$$18$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
    $first$$4_name$$96$$ = $first$$4_name$$96$$.attr("name");
    return void 0 === $first$$4_name$$96$$ ? this.element.find("input[type\x3dradio]").not("[name]") : this.element.find("input[type\x3dradio][name\x3d" + $first$$4_name$$96$$ + "]")
  }, $_showContextMenu$:function($menu$$11$$, $event$$191$$) {
    var $launcher$$1_radios$$ = this.element.find("input[type\x3dradio]"), $checked$$3$$ = $launcher$$1_radios$$.filter(":checked"), $launcher$$1_radios$$ = $checked$$3$$.length ? $checked$$3$$ : $launcher$$1_radios$$.first();
    $menu$$11$$.show($event$$191$$, {launcher:$launcher$$1_radios$$, focus:"menu"})
  }, $_setup$:function() {
    this.options.disabled && this.disable()
  }, $_events$:{change:function($event$$192$$) {
    this._HandleChangeEvent($event$$192$$)
  }}, _HandleChangeEvent:function() {
    this._super()
  }, _GetDisplayValue:function() {
    return this._GetElementValue()
  }, _SetDisplayValue:function($displayValue$$5_radioWithMatchingValue_valueFilter$$) {
    null != $displayValue$$5_radioWithMatchingValue_valueFilter$$ && ($displayValue$$5_radioWithMatchingValue_valueFilter$$ = "[value\x3d'" + $displayValue$$5_radioWithMatchingValue_valueFilter$$ + "']", void 0 !== $displayValue$$5_radioWithMatchingValue_valueFilter$$ && void 0 !== this.$$radios$ && ($displayValue$$5_radioWithMatchingValue_valueFilter$$ = this.$$radios$.filter($displayValue$$5_radioWithMatchingValue_valueFilter$$), void 0 !== $displayValue$$5_radioWithMatchingValue_valueFilter$$ && 
    0 < $displayValue$$5_radioWithMatchingValue_valueFilter$$.length ? $displayValue$$5_radioWithMatchingValue_valueFilter$$.prop("checked") || $displayValue$$5_radioWithMatchingValue_valueFilter$$._ojRadioCheckbox("option", "checked", !0) : this.$$radios$._ojRadioCheckbox("option", "checked", !1)))
  }, _GetElementValue:function() {
    var $checkedRadio$$ = this.$$radios$.filter(":checked");
    return 0 === $checkedRadio$$.length ? null : $checkedRadio$$.val()
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-radioset"), _GetContentElement:function() {
    return this.$_findRadiosWithMatchingName$()
  }, _RefreshAriaRequired:function($ariaValue$$2_value$$170$$) {
    var $rootNode$$ = this.$uiRadioset$;
    ($ariaValue$$2_value$$170$$ = "required" == $ariaValue$$2_value$$170$$ ? !0 : !1) && $rootNode$$ ? $rootNode$$.attr("aria-required", $ariaValue$$2_value$$170$$) : $rootNode$$.removeAttr("aria-required")
  }, _setOption:function($key$$85$$, $value$$171$$) {
    this._super($key$$85$$, $value$$171$$);
    "disabled" === $key$$85$$ && this.$$radios$._ojRadioCheckbox("option", $key$$85$$, $value$$171$$)
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-radioset oj-enabled oj-widget").removeAttr("role");
    this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy")
  }});
  $oj$$18$$.$__registerWidget$("oj._ojRadio", $$$$17$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:null, checked:null}, label:function() {
    void 0 === this.$$label$ && (this.$$label$ = this.$_getLabelsForElement$());
    return this.$$label$
  }, refresh:function() {
    this._super();
    var $isDisabled$$1$$ = this.element.is(":disabled");
    $isDisabled$$1$$ !== this.options.disabled && this._setOption("disabled", $isDisabled$$1$$);
    this.$_setup$()
  }, widget:$JSCompiler_get$$("$uiRadio$"), _create:function() {
    this._super();
    "boolean" !== typeof this.options.checked && (this.options.checked = !!this.element.prop("checked"));
    "boolean" !== typeof this.options.disabled && (this.options.disabled = !!this.element.prop("disabled"));
    this.$_drawOnCreate$();
    this._on(this.$_events$)
  }, _init:function() {
    this._super();
    this.$_setup$()
  }, $_setup$:function() {
    this.options.disabled ? this.disable() : this.enable();
    this.options.checked ? this._setOption("checked", !0) : this._setOption("checked", !1)
  }, $_events$:{}, $_drawOnCreate$:function() {
    this.$uiRadio$ = this.element.addClass("oj-radio oj-widget");
    this.$$label$ = this.$_getLabelsForElement$();
    this.$$label$.addClass("oj-radio-label");
    var $self$$79$$ = this;
    this._hoverable(this.element);
    this._focusable(this.element);
    this.$_activeable$(this.element);
    $$$$17$$.each($self$$79$$.$$label$, function() {
      $self$$79$$._hoverable(this);
      $self$$79$$._focusable(this);
      $self$$79$$.$_activeable$(this)
    })
  }, _setOption:function($key$$86$$, $value$$172$$) {
    this._super($key$$86$$, $value$$172$$);
    "disabled" === $key$$86$$ && (($value$$172$$ = !!$value$$172$$) ? (this.element.prop("disabled", !0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"), this.$$label$.removeClass("oj-enabled").addClass("oj-disabled")) : (this.element.prop("disabled", !1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"), this.$$label$.addClass("oj-enabled").removeClass("oj-disabled")));
    "checked" === $key$$86$$ && ($value$$172$$ ? this.element.prop("checked", !0) : this.element.prop("checked", !1), this.element.toggleClass("oj-checked", $value$$172$$))
  }, $_getLabelsForElement$:function() {
    var $labelClosestParent$$1$$ = this.element.closest("label"), $labelForQuery$$1$$ = "label[for\x3d'" + this.element.prop("id") + "']";
    return $labelClosestParent$$1$$.add($$$$17$$($labelForQuery$$1$$))
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-radio oj-checked oj-disabled oj-enabled oj-widget");
    this.$$label$.removeClass("oj-enabled oj-disabled oj-radio-label")
  }});
  $oj$$18$$.$__registerWidget$("oj.ojInputText", $$$$17$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], _CLASS_NAMES:"oj-inputtext oj-form-control oj-widget", _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-inputtext")});
  $oj$$18$$.$__registerWidget$("oj._ojLabel", $$$$17$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3clabel\x3e", widgetEventPrefix:"oj", options:{describedById:null, help:{definition:null, source:null}, required:null, rootAttributes:void 0}, $_BUNDLE_KEY$:{$_TOOLTIP_HELP$:"tooltipHelp", $_TOOLTIP_REQUIRED$:"tooltipRequired"}, widget:$JSCompiler_get$$("$uiLabel$"), refresh:function() {
    this._super();
    this.$_refreshRequired$();
    this.$_refreshHelp$()
  }, _create:function() {
    this._super();
    this.$_drawOnCreate$()
  }, $_drawOnCreate$:function() {
    this.$uiLabel$ = this.element.wrap(this.$_uiLabelWrapperHtml$()).closest(".oj-widget");
    this.$_moveClassesToRoot$();
    if(this.options.help.definition || this.options.help.source) {
      this.$_insertHelpHtml$(), this.$_addHelpDefToLabel$()
    }
    "required" === this.options.required && this.element.before(this.$_requiredHtml$())
  }, $_moveClassesToRoot$:function() {
    var $arrayOfClasses_classes$$ = this.element.attr("class");
    this.$movedClassArray$ = [];
    if($arrayOfClasses_classes$$) {
      for(var $arrayOfClasses_classes$$ = $arrayOfClasses_classes$$.split(/\s+/), $numClasses$$ = $arrayOfClasses_classes$$.length, $i$$223$$ = 0;$i$$223$$ < $numClasses$$;$i$$223$$++) {
        var $className$$11$$ = $arrayOfClasses_classes$$[$i$$223$$];
        0 < $className$$11$$.indexOf("-label") && (this.$uiLabel$.addClass($className$$11$$), this.element.removeClass($className$$11$$), this.$movedClassArray$.push($className$$11$$))
      }
    }
  }, $_uiLabelWrapperHtml$:function() {
    var $inputLabelClass$$;
    this.options.rootAttributes && ($inputLabelClass$$ = this.options.rootAttributes["class"]);
    return null !== $inputLabelClass$$ ? "\x3cdiv class\x3d'oj-label oj-widget " + $inputLabelClass$$ + "'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e" : "\x3cdiv class\x3d'oj-label oj-widget'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e"
  }, $_requiredHtml$:function() {
    return"\x3cspan class\x3d'oj-label-required-icon oj-widget-icon' title\x3d'" + this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_REQUIRED$) + "'\x3e\x3c/span\x3e"
  }, $_helpHtml$:function($helpDef$$2_tooltipHelp$$, $source$$10$$, $describedById$$) {
    if($source$$10$$) {
      var $helpHtml$$;
      $helpHtml$$ = "\x3cspan id\x3d'" + $describedById$$ + "'\x3e" + ("\x3ca href\x3d'" + $source$$10$$ + "' target\x3d'_blank'\x3e\x3cspan class\x3d");
      $helpHtml$$ += "'oj-label-help-icon oj-widget-icon oj-clickable-icon' title\x3d'";
      $helpDef$$2_tooltipHelp$$ || ($helpDef$$2_tooltipHelp$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_HELP$));
      $helpHtml$$ += $helpDef$$2_tooltipHelp$$;
      $helpHtml$$ += "' role\x3d'img'\x3e\x3c/span\x3e";
      $helpHtml$$ += "\x3c/a\x3e\x3c/span\x3e"
    }
    return $helpHtml$$
  }, $_addHelpDefToLabel$:function() {
    var $helpDef$$3$$ = this.options.help.definition;
    $helpDef$$3$$ && (this.element.addClass("oj-label-help-def"), this.element.attr("title", $helpDef$$3$$))
  }, $_removeHelpDefToLabel$:function() {
    this.element.removeClass("oj-label-help-def");
    this.element.attr("title", "")
  }, $_insertHelpHtml$:function() {
    var $helpSource$$3$$ = this.options.help.source;
    if($helpSource$$3$$) {
      var $helpDef$$4$$ = this.options.help.definition;
      this.$uiLabel$.find(".oj-label-group").prepend(this.$_helpHtml$($helpDef$$4$$, $helpSource$$3$$, this.options.describedById))
    }
  }, $_refreshHelp$:function() {
    null !== this.options.describedById && this.$uiLabel$.find("#" + this.options.describedById).remove();
    this.$_removeHelpDefToLabel$();
    this.$_insertHelpHtml$();
    this.$_addHelpDefToLabel$()
  }, $_refreshRequired$:function() {
    "required" === this.options.required ? 0 === this.$uiLabel$.find(".oj-label-required-icon").length && this.element.before(this.$_requiredHtml$()) : this.$uiLabel$.find(".oj-label-required-icon").remove()
  }, _setOption:function($key$$87$$, $value$$173$$) {
    this._super($key$$87$$, $value$$173$$);
    "required" === $key$$87$$ && this.$_refreshRequired$();
    "help" === $key$$87$$ && this.$_refreshHelp$()
  }, getNodeBySubId:function($locator$$9_subId$$4$$) {
    if(null == $locator$$9_subId$$4$$) {
      return this.element ? this.element[0] : null
    }
    $locator$$9_subId$$4$$ = $locator$$9_subId$$4$$.subId;
    return"oj-label-help-icon" === $locator$$9_subId$$4$$ ? this.widget().find(".oj-label-help-icon")[0] : "oj-label-help-icon-anchor" === $locator$$9_subId$$4$$ ? this.widget().find(".oj-label-help-icon").parent()[0] : "oj-label-required-icon" === $locator$$9_subId$$4$$ ? this.widget().find(".oj-label-required-icon")[0] : null
  }, _destroy:function() {
    this._super();
    for(var $i$$224$$ = 0;$i$$224$$ < this.$movedClassArray$.length;$i$$224$$++) {
      this.element.addClass(this.$movedClassArray$[$i$$224$$])
    }
    this.$_removeHelpDefToLabel$();
    this.$uiLabel$.replaceWith(this.element)
  }});
  (function() {
    var $uid$$ = 0;
    $oj$$18$$.$__registerWidget$("oj.ojCollapsible", $$$$17$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{collapsed:!0, disabled:null, event:"click", clickable:"disclosureIcon", expand:null, beforeExpand:null, collapse:null, beforeCollapse:null}, _create:function() {
      this._super();
      this.$activatable$ = $$$$17$$();
      this.element.addClass("oj-collapsible oj-widget oj-helper-reset");
      this.$_processPanels$();
      this.$_refresh$()
    }, $_showContextMenu$:function($menu$$12$$, $event$$194$$) {
      $menu$$12$$.show($event$$194$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), focus:"menu"})
    }, $_createIcons$:function() {
      var $icon$$2$$ = this.options.collapsed ? "oj-collapsible-close-icon" : "oj-collapsible-open-icon";
      (this.$_isDisabled$() ? $$$$17$$("\x3cspan\x3e") : $$$$17$$("\x3ca href\x3d'#'\x3e")).addClass("oj-widget-icon oj-clickable-icon oj-collapsible-header-icon " + $icon$$2$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
      this.header.addClass("oj-collapsible-icons ")
    }, $_destroyIcons$:function() {
      this.header.removeClass("oj-collapsible-icons").children(".oj-collapsible-header-icon").remove()
    }, _destroy:function() {
      this.element.removeClass("oj-collapsible oj-widget oj-helper-reset oj-collapsible-collapsed oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).removeAttr("tabIndex");
      this.header.removeClass("oj-collapsible-header oj-helper-reset").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id")
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.$_findFocusables$(this.content).removeAttr("tabIndex");
      this.content.unwrap();
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-helper-reset oj-widget-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id")
      })
    }, $_isDisabled$:function() {
      return this.element.hasClass("oj-disabled")
    }, $_getClickableSelector$:function() {
      return"header" == this.options.clickable ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon"
    }, _setOption:function($key$$88$$, $value$$174$$) {
      "collapsed" === $key$$88$$ ? this.$_setCollapsed$($value$$174$$) : ("event" === $key$$88$$ || "clickable" === $key$$88$$ ? (this.$_tearDownEvents$(), this._super($key$$88$$, $value$$174$$), this.$_setupEvents$()) : this._super($key$$88$$, $value$$174$$), "disabled" === $key$$88$$ && (this.header.add(this.header.next()), this.element.toggleClass("oj-disabled", !!$value$$174$$)))
    }, $_keydown$:function($event$$195$$) {
      if(!$event$$195$$.altKey && !$event$$195$$.ctrlKey) {
        var $keyCode$$4$$ = $$$$17$$.ui.keyCode;
        switch($event$$195$$.keyCode) {
          case $keyCode$$4$$.SPACE:
          ;
          case $keyCode$$4$$.ENTER:
            this.$_toggleHandler$($event$$195$$)
        }
      }
    }, refresh:function() {
      this._super();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$()
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header oj-helper-reset");
      this.content = this.header.next().addClass("oj-collapsible-content oj-helper-reset oj-widget-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper oj-helper-reset");
      this.options.disabled && this.element.addClass("oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).attr("tabIndex", -1)
    }, $_refresh$:function() {
      var $focusable$$1_header$$7$$ = this.header, $content$$22$$ = this.content, $options$$260$$ = this.options, $collapsibleId$$ = this.$collapsibleId$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$), $headerId$$ = $focusable$$1_header$$7$$.attr("id"), $contentId$$ = $content$$22$$.attr("id");
      $headerId$$ || $focusable$$1_header$$7$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$22$$.attr("id", $contentId$$));
      this.$_createIcons$();
      $focusable$$1_header$$7$$ = this.$_findFirstFocusableInHeader$();
      $focusable$$1_header$$7$$.attr("role", "button").attr("aria-controls", $contentId$$);
      this.$_isDisabled$() && $focusable$$1_header$$7$$.attr("aria-disabled", !0);
      this.$_isDisabled$() || this.$_setContentTabIndex$($options$$260$$.collapsed ? "-1" : "0");
      this.element.toggleClass("oj-collapsible-collapsed", $options$$260$$.collapsed);
      $options$$260$$.collapsed ? (this.$wrapper$.css("max-height", 0), $content$$22$$.attr({"aria-hidden":"true"}), $focusable$$1_header$$7$$.attr("aria-expanded", "false")) : ($content$$22$$.attr({"aria-hidden":"false"}), $focusable$$1_header$$7$$.attr("aria-expanded", "true"));
      this.$_tearDownEvents$();
      this.$_setupEvents$()
    }, $_setCollapsed$:function($collapsed$$) {
      $collapsed$$ !== this.options.collapsed && ($collapsed$$ ? this.collapse(!0) : this.expand(!0))
    }, $_setupEvents$:function() {
      var $events$$1$$ = {keydown:this.$_keydown$}, $clickable_event$$196$$ = this.options.event;
      if($clickable_event$$196$$) {
        var $self$$80$$ = this;
        $$$$17$$.each($clickable_event$$196$$.split(" "), function($index$$152$$, $eventName$$1$$) {
          $events$$1$$[$eventName$$1$$] = $self$$80$$.$_toggleHandler$
        })
      }
      $clickable_event$$196$$ = this.element.find(this.$_getClickableSelector$());
      this._on($clickable_event$$196$$, $events$$1$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this.$_isDisabled$() || (this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$}), this._hoverable($clickable_event$$196$$), this._focusable($clickable_event$$196$$), this.$_activatable$($clickable_event$$196$$))
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getClickableSelector$()));
      this._off(this.element.add(this.content))
    }, $_toggleHandler$:function($event$$197$$) {
      this.$_isDisabled$() || (this.options.collapsed ? this.expand(!0, $event$$197$$) : this.collapse(!0, $event$$197$$), $event$$197$$.preventDefault(), $event$$197$$.stopPropagation(), this.header.find(".oj-collapsible-header-icon").focus())
    }, $_expandCollapseHandler$:function($event$$198$$) {
      if(!this.$_isDisabled$() && !$event$$198$$.isDefaultPrevented()) {
        var $element$$61$$ = this.element, $options$$261$$ = this.options, $content$$23$$ = this.content, $wrapper$$ = this.$wrapper$, $isCollapse$$ = "ojcollapse" === $event$$198$$.type;
        $event$$198$$.preventDefault();
        $options$$261$$.collapsed = $isCollapse$$;
        $wrapper$$.$contentHeight$ = $wrapper$$.outerHeight();
        $isCollapse$$ ? ($wrapper$$.removeClass("oj-collapsible-transition"), $wrapper$$.css("max-height", $wrapper$$.$contentHeight$), setTimeout(function() {
          $wrapper$$.addClass("oj-collapsible-transition").css("max-height", 0);
          $element$$61$$.addClass("oj-collapsible-collapsed")
        }, 10)) : ($wrapper$$.$contentHeight$ += $content$$23$$.outerHeight(), $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$.$contentHeight$}), $element$$61$$.removeClass("oj-collapsible-collapsed"));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", !$isCollapse$$).toggleClass("oj-collapsible-close-icon", $isCollapse$$ || !1).end();
        this.content.attr("aria-hidden", $isCollapse$$);
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", !$isCollapse$$);
        this.$_setContentTabIndex$($isCollapse$$ ? "-1" : "0")
      }
    }, $_focusHandler$:function($event$$199$$) {
      if(this.$_isDisabled$()) {
        return null
      }
      "ojfocusout" == $event$$199$$.type ? this.$_findFirstFocusableInHeader$().attr("tabIndex", -1) : "ojfocus" == $event$$199$$.type && this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus()
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first()
    }, $_setContentTabIndex$:function($value$$175$$) {
      return this.$_findFocusables$(this.content).attr("tabIndex", $value$$175$$)
    }, $_findFocusables$:function($start$$31$$) {
      return this.$_isDisabled$() ? $start$$31$$.find("span") : $start$$31$$.find("a,:input")
    }, expand:function($vetoable$$, $event$$200$$) {
      this.$_isDisabled$() || $vetoable$$ && !1 === this._trigger("beforeexpand", $event$$200$$) || this._trigger("expand", $event$$200$$)
    }, collapse:function($vetoable$$1$$, $event$$201$$) {
      this.$_isDisabled$() || $vetoable$$1$$ && !1 === this._trigger("beforecollapse", $event$$201$$) || this._trigger("collapse", $event$$201$$)
    }, $_transitionEndHandler$:function($event$$202$$) {
      this.$_isDisabled$() || (this.options.collapsed ? this._trigger("aftercollapse", $event$$202$$) : (this.$wrapper$.css("max-height", 9999), this._trigger("afterexpand", $event$$202$$)))
    }, $_activatable$:function($element$$62$$) {
      this.$activatable$ = this.$activatable$.add($element$$62$$);
      this._on($element$$62$$, {mousedown:function($event$$203$$) {
        $$$$17$$($event$$203$$.currentTarget).addClass("oj-active")
      }, mouseup:function($event$$204$$) {
        $$$$17$$($event$$204$$.currentTarget).removeClass("oj-active")
      }})
    }})
  })();
  (function() {
    function $_radioGroup$$1$$($radio$$1$$, $$elems$$1$$) {
      var $name$$97_selector$$18$$ = $radio$$1$$.name, $$radios$$1_form$$2$$ = $radio$$1$$.form;
      $name$$97_selector$$18$$ ? ($name$$97_selector$$18$$ = $name$$97_selector$$18$$.replace(/'/g, "\\'"), $name$$97_selector$$18$$ = ":radio[name\x3d'" + $name$$97_selector$$18$$ + "']:oj-button", $$radios$$1_form$$2$$ = $$elems$$1$$ ? $$elems$$1$$.filter($name$$97_selector$$18$$) : $$radios$$1_form$$2$$ ? $$$$17$$($$radios$$1_form$$2$$).find($name$$97_selector$$18$$) : $$$$17$$($name$$97_selector$$18$$, $radio$$1$$.ownerDocument).filter(function() {
        return!this.form
      })) : $$radios$$1_form$$2$$ = ($$elems$$1$$ ? $$elems$$1$$.filter($radio$$1$$) : $$$$17$$($radio$$1$$)).filter(":oj-button");
      return $$radios$$1_form$$2$$
    }
    $oj$$18$$.$__registerWidget$("oj.ojToolbar", $$$$17$$.oj.baseComponent, {version:"1.0.0", $items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a, :data(oj-ojButton)", widgetEventPrefix:"oj", options:{}, _create:function() {
      this.element.addClass("oj-toolbar oj-widget").attr("role", "toolbar");
      this.$_setup$(!0);
      this._super()
    }, $_showContextMenu$:function($menu$$13$$, $event$$205$$) {
      $menu$$13$$.show($event$$205$$, {launcher:this.element.find(":oj-button[tabindex\x3d0]"), focus:"menu"})
    }, _setOption:function($key$$89$$, $value$$176$$) {
      "disabled" === $key$$89$$ && this.$$buttons$.ojButton("option", $key$$89$$, $value$$176$$);
      this._super($key$$89$$, $value$$176$$)
    }, refresh:function() {
      this._super();
      this.$_setup$(!1)
    }, $_setup$:function($isCreate$$2$$) {
      var $self$$81$$ = this;
      this.$isRtl$ = "rtl" === this._GetReadingDirection();
      this.$$buttons$ = this.element.find(this.$items$).unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$206$$) {
        $self$$81$$.$_handleKeyDown$($event$$206$$, $$$$17$$(this))
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$17$$(this).ojButton("option", "disabled") || $self$$81$$.$_setTabStop$($$$$17$$(this))
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$81$$.$_setTabStop$($$$$17$$(this))
      });
      this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$17$$(this).ojButton("option", "disabled")
      });
      this.$_initTabindexes$($isCreate$$2$$)
    }, $_initTabindexes$:function($$newTabStop$$1_isCreate$$3$$) {
      var $$last$$1$$ = $$$$17$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop$$1_isCreate$$3$$ = $$newTabStop$$1_isCreate$$3$$ || !$$last$$1$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$1$$;
      this.$_setTabStop$($$newTabStop$$1_isCreate$$3$$)
    }, $_mapToTabbable$:function($$button$$3$$) {
      var $$enabledButtons$$2$$ = this.$$enabledButtons$;
      return $$button$$3$$.map(function($index$$154$$, $elem$$21$$) {
        if("radio" != $elem$$21$$.type || $elem$$21$$.checked || "" == $elem$$21$$.name) {
          return $elem$$21$$
        }
        var $$checkedRadio$$1$$ = $_radioGroup$$1$$($elem$$21$$, $$enabledButtons$$2$$).filter(":checked");
        return $$checkedRadio$$1$$.length ? $$checkedRadio$$1$$[0] : $elem$$21$$
      })
    }, $_setTabStop$:function($$button$$4$$) {
      $$button$$4$$ = this.$_mapToTabbable$($$button$$4$$);
      var $button$$2$$ = $$button$$4$$[0], $last$$2$$ = this.$_lastTabStop$;
      $button$$2$$ !== $last$$2$$ && ($$$$17$$($last$$2$$).attr("tabindex", "-1"), $$button$$4$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$2$$)
    }, $_handleKeyDown$:function($event$$209$$, $$button$$5$$) {
      switch($event$$209$$.which) {
        case $$$$17$$.ui.keyCode.LEFT:
        ;
        case $$$$17$$.ui.keyCode.RIGHT:
          $event$$209$$.preventDefault();
          var $$enabledButtons$$3$$ = this.$$enabledButtons$, $length$$18$$ = $$enabledButtons$$3$$.length;
          if(2 > $length$$18$$) {
            break
          }
          var $oldIndex$$2$$ = $$enabledButtons$$3$$.index($$button$$5$$);
          $$enabledButtons$$3$$.eq(($oldIndex$$2$$ + ($event$$209$$.which == $$$$17$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$18$$) % $length$$18$$).focus();
          break;
        case $$$$17$$.ui.keyCode.UP:
        ;
        case $$$$17$$.ui.keyCode.DOWN:
          "radio" == $$button$$5$$.attr("type") && $event$$209$$.preventDefault()
      }
    }, _destroy:function() {
      this.element.removeClass("oj-toolbar oj-widget").removeAttr("role");
      this.$$buttons$.attr("tabindex", "0").map(function() {
        return $$$$17$$(this).ojButton("widget")[0]
      })
    }})
  })();
  $oj$$18$$.$__registerWidget$("oj.ojPopup", $$$$17$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{autoDismiss:"none", chrome:"default", initialFocus:"none", position:{my:"left top", at:"left bottom", collision:"flip"}, tail:"none"}, _create:function() {
    var $rootElement$$ = $$$$17$$("\x3cdiv\x3e");
    this.$_rootElement$ = $rootElement$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
    var $content$$24$$ = $$$$17$$("\x3cdiv\x3e").addClass("oj-popup-content");
    $content$$24$$.appendTo($rootElement$$);
    this.element.after($rootElement$$);
    this.element.appendTo($content$$24$$);
    this.$_createTail$();
    this.$_setChrome$();
    this.$_usingCallback$ = $$$$17$$.proxy(this.$_usingHandler$, this);
    this._super()
  }, _destroy:function() {
    this._super();
    this.$isOpen$() && this.close();
    this.$_destroyTail$();
    delete this.$_usingCallback$;
    this.$_rootElement$.replaceWith(this.element)
  }, widget:$JSCompiler_get$$("$_rootElement$"), open:function($launcher$$2$$, $position$$10$$) {
    if(this.$isOpen$() && (this.close(), this.$isOpen$())) {
      return
    }
    if(!1 !== this._trigger("beforeOpen")) {
      this.$_setLauncher$($launcher$$2$$);
      this.$_setPosition$($position$$10$$);
      var $rootElement$$1$$ = this.$_rootElement$;
      $oj$$18$$.$Assert$.$assertPrototype$($rootElement$$1$$, jQuery);
      $launcher$$2$$ = this.$_launcher$;
      $oj$$18$$.$Assert$.$assertPrototype$($launcher$$2$$, jQuery);
      this._on(!0, $$$$17$$(window), {resize:this.$_resizeHandler$});
      this._on(!0, $rootElement$$1$$, {keydown:this.$_keydownHandler$});
      this._on(!0, $launcher$$2$$, {keydown:this.$_keydownHandler$});
      var $launcherId$$ = $launcher$$2$$.attr("id");
      $oj$$18$$.$StringUtils$.$isEmptyOrUndefined$($launcherId$$) && ($launcher$$2$$.data("id-generated", !0), $launcherId$$ = $launcher$$2$$.uniqueId().attr("id"));
      $launcher$$2$$.attr("aria-haspopup", "true");
      $rootElement$$1$$.removeAttr("aria-hidden");
      $rootElement$$1$$.attr("aria-describedby", $launcherId$$);
      $rootElement$$1$$.attr("role", "tooltip");
      $position$$10$$ = this.options.position;
      $rootElement$$1$$.show().position($position$$10$$);
      this._trigger("open");
      this.$_intialFoucs$()
    }
  }, close:function() {
    if(this.$isOpen$() && !1 !== this._trigger("beforeClose")) {
      this.$_restoreFocus$();
      var $rootElement$$2$$ = this.$_rootElement$;
      $oj$$18$$.$Assert$.$assertPrototype$($rootElement$$2$$, jQuery);
      $rootElement$$2$$.hide();
      $rootElement$$2$$.attr("aria-hidden", "true");
      var $launcher$$3$$ = this.$_launcher$;
      $oj$$18$$.$Assert$.$assertPrototype$($launcher$$3$$, jQuery);
      $launcher$$3$$.data("id-generated") && $launcher$$3$$.removeUniqueId();
      $launcher$$3$$.removeAttr("aria-haspopup");
      $rootElement$$2$$.removeAttr("aria-describedby");
      this._off($$$$17$$(window), "resize");
      this._off($rootElement$$2$$, "keydown");
      this._off($launcher$$3$$, "keydown");
      delete this.$_launcher$;
      this._trigger("close")
    }
  }, $isOpen$:function() {
    return this.$_rootElement$.is(":visible")
  }, _setOption:function($key$$90$$, $value$$177$$) {
    switch($key$$90$$) {
      case "tail":
        $value$$177$$ !== this.options.tail && (this.$_destroyTail$(), this.$_createTail$($value$$177$$));
        break;
      case "chrome":
        $value$$177$$ !== this.options.chrome && this.$_setChrome$($value$$177$$);
        break;
      case "position":
        this.$_setPosition$($value$$177$$), this.$isOpen$() && this.$_resizeHandler$()
    }
    this._super($key$$90$$, $value$$177$$)
  }, $_GetRootStyle$:$JSCompiler_returnArg$$("oj-popup"), $_createTail$:function($tail$$) {
    var $tailDecoration_tailDom_tailStyle$$ = $tail$$ ? $tail$$ : this.options.tail;
    if("none" === $tailDecoration_tailDom_tailStyle$$) {
      return null
    }
    var $tailDecoration_tailDom_tailStyle$$ = ["oj-popup-tail", $tailDecoration_tailDom_tailStyle$$].join("-"), $rootElement$$3_tailStyleStartTop$$ = [$tailDecoration_tailDom_tailStyle$$, "start-top"].join("-"), $tailStyleEndTop$$ = [$tailDecoration_tailDom_tailStyle$$, "end-top"].join("-"), $tailStyleStartMiddle$$ = [$tailDecoration_tailDom_tailStyle$$, "start-middle"].join("-"), $tailStyleEndMiddle$$ = [$tailDecoration_tailDom_tailStyle$$, "end-middle"].join("-"), $tailStyleStartBottom$$ = [$tailDecoration_tailDom_tailStyle$$, 
    "start-bottom"].join("-"), $tailStyleEndBottom$$ = [$tailDecoration_tailDom_tailStyle$$, "end-bottom"].join("-");
    this.$_TAIL_STYLES$ = [$rootElement$$3_tailStyleStartTop$$, $tailStyleEndTop$$, $tailStyleStartMiddle$$, $tailStyleEndMiddle$$, $tailStyleStartBottom$$, $tailStyleEndBottom$$];
    this.$_TAIL_ALIGN_RULES$ = {"right-top":$tailStyleEndTop$$, "right-middle":$tailStyleEndMiddle$$, "right-bottom":$tailStyleEndBottom$$, "left-top":$rootElement$$3_tailStyleStartTop$$, "left-middle":$tailStyleStartMiddle$$, "left-bottom":$tailStyleStartBottom$$, "center-top":$rootElement$$3_tailStyleStartTop$$, "center-middle":$tailStyleStartMiddle$$, "center-bottom":$tailStyleEndBottom$$};
    $tailDecoration_tailDom_tailStyle$$ = $$$$17$$("\x3cdiv\x3e").hide().addClass("oj-popup-tail").addClass($tailDecoration_tailDom_tailStyle$$);
    this.$_tailId$ = "#" + $tailDecoration_tailDom_tailStyle$$.uniqueId().attr("id");
    $rootElement$$3_tailStyleStartTop$$ = this.$_rootElement$;
    $oj$$18$$.$Assert$.$assertPrototype$($rootElement$$3_tailStyleStartTop$$, jQuery);
    $tailDecoration_tailDom_tailStyle$$.appendTo($rootElement$$3_tailStyleStartTop$$);
    return $tail$$
  }, $_getTail$:function() {
    var $tailId$$ = this.$_tailId$;
    return $tailId$$ ? $$$$17$$($tailId$$) : null
  }, $_destroyTail$:function() {
    var $tail$$1$$ = this.$_getTail$();
    $tail$$1$$ && $tail$$1$$.remove();
    delete this.$_tailId$
  }, $_setChrome$:function($chrome_chromeDecoration$$) {
    $chrome_chromeDecoration$$ = $chrome_chromeDecoration$$ ? $chrome_chromeDecoration$$ : this.options.chrome;
    var $rootElement$$4$$ = this.$_rootElement$;
    $oj$$18$$.$Assert$.$assertPrototype$($rootElement$$4$$, jQuery);
    "default" === $chrome_chromeDecoration$$ && $rootElement$$4$$.hasClass("oj-popup-no-chrome") ? $rootElement$$4$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome_chromeDecoration$$ || $rootElement$$4$$.hasClass("oj-popup-no-chrome") || $rootElement$$4$$.addClass("oj-popup-no-chrome")
  }, $_setLauncher$:function($launcher$$4$$) {
    $launcher$$4$$ ? "string" === $$$$17$$.type($launcher$$4$$) ? $launcher$$4$$ = $$$$17$$($launcher$$4$$) : 1 !== $launcher$$4$$.nodeType && ($launcher$$4$$ = $$$$17$$($launcher$$4$$)) : $launcher$$4$$ = $$$$17$$(document.activeElement);
    if($launcher$$4$$ instanceof jQuery && 1 < $launcher$$4$$.length) {
      var $rootElement$$5$$ = this.$_rootElement$;
      $oj$$18$$.$Assert$.$assertPrototype$($rootElement$$5$$, jQuery);
      for(var $i$$225$$ = 0;$i$$225$$ < $launcher$$4$$.length;$i$$225$$++) {
        var $target$$86$$ = $launcher$$4$$[0];
        if(!$oj$$18$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$5$$[0], $target$$86$$)) {
          $launcher$$4$$ = $$$$17$$($target$$86$$);
          break
        }
      }
    }else {
      if(!($launcher$$4$$ instanceof jQuery) || $launcher$$4$$ instanceof jQuery && 0 === $launcher$$4$$.length) {
        $launcher$$4$$ = $$$$17$$(document.activeElement)
      }
    }
    $oj$$18$$.$Assert$.$assertPrototype$($launcher$$4$$, jQuery);
    this.$_launcher$ = $launcher$$4$$
  }, $_setPosition$:function($position$$11$$) {
    var $launcher$$5_options$$262_usingCallback$$ = this.options;
    $position$$11$$ && ($launcher$$5_options$$262_usingCallback$$.position = $$$$17$$.extend($launcher$$5_options$$262_usingCallback$$[$position$$11$$], $position$$11$$));
    $position$$11$$ = $launcher$$5_options$$262_usingCallback$$.position;
    $launcher$$5_options$$262_usingCallback$$ = this.$_usingCallback$;
    $oj$$18$$.$Assert$.$assertFunction$($launcher$$5_options$$262_usingCallback$$);
    $$$$17$$.isFunction($position$$11$$.using) && $position$$11$$.using !== $launcher$$5_options$$262_usingCallback$$ && ($position$$11$$.origUsing = $position$$11$$.using);
    $position$$11$$.using = $launcher$$5_options$$262_usingCallback$$;
    $launcher$$5_options$$262_usingCallback$$ = this.$_launcher$;
    $oj$$18$$.$Assert$.$assertPrototype$($launcher$$5_options$$262_usingCallback$$, jQuery);
    $position$$11$$.of || ($position$$11$$.of = $launcher$$5_options$$262_usingCallback$$)
  }, $_usingHandler$:function($pos$$7$$, $props$$4$$) {
    var $origUsing_rootElement$$6_tail$$2$$ = $props$$4$$.element.element;
    $oj$$18$$.$Assert$.$assertPrototype$($origUsing_rootElement$$6_tail$$2$$, jQuery);
    $origUsing_rootElement$$6_tail$$2$$.css($pos$$7$$);
    if($origUsing_rootElement$$6_tail$$2$$ = this.$_getTail$()) {
      $origUsing_rootElement$$6_tail$$2$$.hide();
      for(var $i$$226_tailStyle$$1$$ = 0;$i$$226_tailStyle$$1$$ < this.$_TAIL_STYLES$.length;$i$$226_tailStyle$$1$$++) {
        $origUsing_rootElement$$6_tail$$2$$.removeClass(this.$_TAIL_STYLES$[$i$$226_tailStyle$$1$$])
      }
      $i$$226_tailStyle$$1$$ = this.$_TAIL_ALIGN_RULES$[[$props$$4$$.horizontal, $props$$4$$.vertical].join("-")];
      $oj$$18$$.$Assert$.$assertString$($i$$226_tailStyle$$1$$);
      $i$$226_tailStyle$$1$$ && ($origUsing_rootElement$$6_tail$$2$$.addClass($i$$226_tailStyle$$1$$), $origUsing_rootElement$$6_tail$$2$$.show());
      ($origUsing_rootElement$$6_tail$$2$$ = this.options.position.origUsing) && $origUsing_rootElement$$6_tail$$2$$($pos$$7$$, $props$$4$$)
    }
  }, $_resizeHandler$:function() {
    var $rootElement$$7$$ = this.$_rootElement$;
    $oj$$18$$.$Assert$.$assertPrototype$($rootElement$$7$$, jQuery);
    var $position$$12$$ = this.options.position;
    $oj$$18$$.$Assert$.$assertObject$($position$$12$$);
    $rootElement$$7$$.position($position$$12$$)
  }, $_intialFoucs$:function() {
    var $first$$5_nodes_options$$264$$ = this.options;
    "none" !== $first$$5_nodes_options$$264$$.initialFocus && "firstFocusable" === $first$$5_nodes_options$$264$$.initialFocus && ($first$$5_nodes_options$$264$$ = this.element.find(":focusable"), 0 < $first$$5_nodes_options$$264$$.length && ($first$$5_nodes_options$$264$$ = $first$$5_nodes_options$$264$$[0], $oj$$18$$.$Assert$.$assertDomElement$($first$$5_nodes_options$$264$$), $$$$17$$($first$$5_nodes_options$$264$$).focus()))
  }, $_isFocusInPopup$:function($activeElement$$) {
    $activeElement$$ || ($activeElement$$ = document.activeElement);
    $oj$$18$$.$Assert$.$assertDomElement$($activeElement$$);
    var $rootElement$$8$$ = this.$_rootElement$;
    $oj$$18$$.$Assert$.$assertPrototype$($rootElement$$8$$, jQuery);
    return $oj$$18$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$8$$[0], $activeElement$$)
  }, $_isFocusInLauncher$:function($activeElement$$1$$) {
    $activeElement$$1$$ || ($activeElement$$1$$ = document.activeElement);
    $oj$$18$$.$Assert$.$assertDomElement$($activeElement$$1$$);
    var $launcher$$6$$ = this.$_launcher$;
    $oj$$18$$.$Assert$.$assertPrototype$($launcher$$6$$, jQuery);
    return $oj$$18$$.$DomUtils$.$isAncestorOrSelf$($launcher$$6$$[0], $activeElement$$1$$)
  }, $_restoreFocus$:function() {
    if(this.$_isFocusInPopup$()) {
      var $launcher$$7$$ = this.$_launcher$;
      $oj$$18$$.$Assert$.$assertPrototype$($launcher$$7$$, jQuery);
      $launcher$$7$$.focus()
    }
  }, $_keydownHandler$:function($event$$211_launcher$$8$$) {
    if(!$event$$211_launcher$$8$$.isDefaultPrevented()) {
      var $target$$87$$ = $event$$211_launcher$$8$$.target;
      $oj$$18$$.$Assert$.$assertDomElement$($target$$87$$);
      if($event$$211_launcher$$8$$.keyCode === $$$$17$$.ui.keyCode.ESCAPE) {
        $event$$211_launcher$$8$$.preventDefault(), this.close()
      }else {
        if(117 === $event$$211_launcher$$8$$.keyCode) {
          this.$_isFocusInPopup$($target$$87$$) ? ($event$$211_launcher$$8$$.preventDefault(), $event$$211_launcher$$8$$ = this.$_launcher$, $oj$$18$$.$Assert$.$assertPrototype$($event$$211_launcher$$8$$, jQuery), $event$$211_launcher$$8$$.focus()) : this.$_isFocusInLauncher$($target$$87$$) && ($event$$211_launcher$$8$$.preventDefault(), this.$_intialFoucs$())
        }else {
          if(9 === $event$$211_launcher$$8$$.keyCode && this.$_isFocusInPopup$($target$$87$$)) {
            var $lastNode_nodes$$1$$ = this.element.find(":focusable");
            if(0 < $lastNode_nodes$$1$$.length) {
              var $firstNode$$ = $lastNode_nodes$$1$$[0];
              $oj$$18$$.$Assert$.$assertDomElement$($firstNode$$);
              $lastNode_nodes$$1$$ = $lastNode_nodes$$1$$[$lastNode_nodes$$1$$.length - 1];
              $oj$$18$$.$Assert$.$assertDomElement$($lastNode_nodes$$1$$);
              $firstNode$$ === $target$$87$$ && $event$$211_launcher$$8$$.shiftKey ? ($event$$211_launcher$$8$$.preventDefault(), $$$$17$$($lastNode_nodes$$1$$).focus()) : $lastNode_nodes$$1$$ !== $target$$87$$ || $event$$211_launcher$$8$$.shiftKey || ($event$$211_launcher$$8$$.preventDefault(), $$$$17$$($firstNode$$).focus())
            }
          }
        }
      }
    }
  }});
  (function() {
    function $_addSheet$$($opts$$18$$, $bLink$$) {
      var $tmp$$2$$ = !1, $isNew$$ = !0;
      if($opts$$18$$.$str$) {
        $opts$$18$$.title && ($tmp$$2$$ = $$$$17$$("style[id\x3d'" + $opts$$18$$.title + "-stylesheet']")[0]), $tmp$$2$$ ? $isNew$$ = !1 : ($tmp$$2$$ = document.createElement("style"), $tmp$$2$$.setAttribute("type", "text/css"), $opts$$18$$.title && $tmp$$2$$.setAttribute("id", $opts$$18$$.title + "-stylesheet")), $tmp$$2$$.styleSheet ? $isNew$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$2$$), $tmp$$2$$.styleSheet.cssText = $opts$$18$$.$str$) : $tmp$$2$$.styleSheet.cssText = $tmp$$2$$.styleSheet.cssText + 
        " " + $opts$$18$$.$str$ : ($tmp$$2$$.appendChild(document.createTextNode($opts$$18$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$2$$))
      }else {
        if($opts$$18$$.url && $bLink$$) {
          if(document.createStyleSheet) {
            try {
              document.createStyleSheet($opts$$18$$.url)
            }catch($e$$77$$) {
            }
          }else {
            $tmp$$2$$ = document.createElement("link"), $tmp$$2$$.rel = "stylesheet", $tmp$$2$$.type = "text/css", $tmp$$2$$.media = "all", $tmp$$2$$.href = $opts$$18$$.url, document.getElementsByTagName("head")[0].appendChild($tmp$$2$$)
          }
        }
      }
    }
    var $_aEvNames$$ = "select deselect hover dehover expand collapse loaded move delete deselectall rename refresh expandall collapseall destroy create remove cut copy paste".split(" "), $_defaultMenu$$ = "\x3cul\x3e\x3cli id\x3d'ojtreecreate'\x3e\x3ca href\x3d'#'\x3e{create}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreerename'\x3e\x3ca href\x3d'#'\x3e{rename}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreedelete'\x3e\x3ca href\x3d'#'\x3e{remove}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreeedit'\x3e\x3ca href\x3d'#'\x3e{edit}\x3c/a\x3e\x3cul\x3e\x3cli id\x3d'ojtreecut'\x3e\x3ca href\x3d'#'\x3e{cut}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreecopy'\x3e\x3ca href\x3d'#'\x3e{copy}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreepaste'\x3e\x3ca href\x3d'#'\x3e{paste}\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e", 
    $_translated$$ = !1, $scrollbar_width$$, $e1$$, $e2$$;
    $$$$17$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$ = $$$$17$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$ = $$$$17$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$.width() - $e2$$.width(), $e1$$.add($e2$$).remove()) : ($e1$$ = $$$$17$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$.width(), $e1$$.parent().remove())
    });
    var $_instance$$ = -1;
    $oj$$18$$.$__registerWidget$("oj.ojTree", $$$$17$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{animDuration:500, expandParents:!1, initExpanded:null, $initLoaded$:[], selectionMode:"single", $selectedParentCollapse$:!1, $selectedParentExpand$:!0, selectPrevOnDelete:!1, $selectMultipleModifier$:"ctrl", $selectRangeModifier$:"shift", $disableSelectingChildren$:!1, json_data:null, $html_data$:null, icons:!0, types:null, before:null, collapse:null, 
    create:null, collapseAll:null, cut:null, dehover:null, "delete":null, deselect:null, deselectAll:null, destroy:null, expand:null, expandAll:null, hover:null, loaded:null, move:null, paste:null, refresh:null, rename:null, select:null}, collapse:function($node$$17$$, $skipAnim$$) {
      $node$$17$$ = this.$_getNode$($node$$17$$);
      var $s$$7$$ = $skipAnim$$ || this.options.animDuration, $t$$1$$ = this;
      if(!$node$$17$$.length || !$node$$17$$.hasClass("oj-tree-open")) {
        return!1
      }
      $s$$7$$ && $node$$17$$.children("ul").attr("style", "display:block !important");
      $node$$17$$.removeClass("oj-tree-open").addClass("oj-tree-closed").attr("aria-expanded", "false");
      $s$$7$$ ? $node$$17$$.children("ul").stop(!0, !0).slideUp($s$$7$$, function() {
        this.style.display = "";
        $t$$1$$.after_close($node$$17$$)
      }) : $t$$1$$.after_close($node$$17$$);
      this.$_emitEvent$({obj:$node$$17$$}, "collapse")
    }, collapseAll:function($node$$18$$, $anim$$) {
      var $origTarg$$ = $node$$18$$ ? $node$$18$$ : -1, $_this$$2$$ = this;
      ($node$$18$$ = $node$$18$$ ? this.$_getNode$($node$$18$$) : this.$_$container$) && -1 !== $node$$18$$ ? $origTarg$$ = $node$$18$$ : $node$$18$$ = this.$_$container_ul$;
      $node$$18$$.find("li.oj-tree-open").addBack().each(function() {
        $_this$$2$$.collapse(this, !$anim$$)
      });
      this.$_emitEvent$({obj:$origTarg$$}, "collapseall")
    }, expand:function($node$$19$$, $skipAnim$$1$$) {
      this.$_expand$($node$$19$$, !1, $skipAnim$$1$$)
    }, expanded:function($nodes$$2$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$3$$ = this;
      if($nodes$$2$$ && "array" === $$$$17$$.type($nodes$$2$$)) {
        return $exlen$$ = $nodes$$2$$.length, $$$$17$$.each($nodes$$2$$, function($i$$227$$, $val$$37$$) {
          $_this$$3$$.$_expand$($val$$37$$, !1, $skipAnim$$2$$)
        }), null
      }
      $nodes$$2$$ = this.$_$container_ul$.find("li.oj-tree-open");
      $exlen$$ = $nodes$$2$$.length;
      $exlr$$ = [];
      for(var $n$$22$$ = 0;$n$$22$$ < $exlen$$;$n$$22$$++) {
        $exlr$$.push($$$$17$$($nodes$$2$$[$n$$22$$]))
      }
      return $exlr$$
    }, expandAll:function($node$$20$$, $anim$$1$$) {
      this.$_expandAll$($node$$20$$, $anim$$1$$)
    }, toggleExpand:function($node$$21$$) {
      $node$$21$$ = this.$_getNode$($node$$21$$);
      if($node$$21$$.hasClass("oj-tree-closed")) {
        return this.expand($node$$21$$)
      }
      if($node$$21$$.hasClass("oj-tree-open")) {
        return this.collapse($node$$21$$)
      }
    }, deselect:function($node$$22$$) {
      $node$$22$$ = this.$_getNode$($node$$22$$);
      if(!$node$$22$$.length) {
        return!1
      }
      this.isSelected($node$$22$$) && ($node$$22$$.children("a").removeClass("oj-tree-clicked"), $node$$22$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$22$$), this.$_data$.ui.$last_selected$.get(0) === $node$$22$$.get(0) && (this.$_data$.ui.$last_selected$ = this.$_data$.ui.selected.eq(0)), this.$_emitEvent$({obj:$node$$22$$}, "deselect"))
    }, deselectAll:function($context$$42_ret$$27$$) {
      $context$$42_ret$$27$$ = $context$$42_ret$$27$$ ? $$$$17$$($context$$42_ret$$27$$).find("a.oj-tree-clicked").parent() : this.$_$container$.find("a.oj-tree-clicked").parent();
      $context$$42_ret$$27$$.children("a.oj-tree-clicked").removeClass("oj-tree-clicked");
      $context$$42_ret$$27$$.removeAttr("aria-selected");
      this.$_data$.ui.selected = $$$$17$$([]);
      this.$_data$.ui.$last_selected$ = !1;
      this.$_emitEvent$({obj:$context$$42_ret$$27$$}, "deselectall")
    }, select:function($node$$23$$) {
      this.$_select$($node$$23$$)
    }, selected:function($nodes$$3$$) {
      if(void 0 === $nodes$$3$$) {
        return this.$_getSelected$()
      }
      if(void 0 !== $nodes$$3$$.length) {
        var $_this$$4$$ = this;
        $$$$17$$.each($nodes$$3$$, function($i$$228$$, $val$$38$$) {
          $val$$38$$ && $_this$$4$$.$_select$($val$$38$$, !0)
        })
      }
      return null
    }, toggleSelect:function($node$$24$$) {
      $node$$24$$ = this.$_getNode$($node$$24$$);
      if(!$node$$24$$.length) {
        return!1
      }
      this.isSelected($node$$24$$) ? this.deselect($node$$24$$) : this.$_select$($node$$24$$, !0)
    }, isCollapsed:function($node$$25$$) {
      return($node$$25$$ = this.$_getNode$($node$$25$$)) && -1 !== $node$$25$$ && $node$$25$$.hasClass("oj-tree-closed")
    }, isExpanded:function($node$$26$$) {
      return($node$$26$$ = this.$_getNode$($node$$26$$)) && -1 !== $node$$26$$ && $node$$26$$.hasClass("oj-tree-open")
    }, isLeaf:function($node$$27$$) {
      return($node$$27$$ = this.$_getNode$($node$$27$$)) && -1 !== $node$$27$$ && $node$$27$$.hasClass("oj-tree-leaf")
    }, isSelected:function($node$$28$$) {
      return 0 <= this.$_data$.ui.selected.index(this.$_getNode$($node$$28$$))
    }, create:function($refnode$$, $position$$13$$, $data$$108$$) {
      return this.$_create_node$($refnode$$, $position$$13$$, $data$$108$$)
    }, "delete":function($node$$29$$) {
      $node$$29$$ = this.$_getNode$($node$$29$$);
      if(!$node$$29$$.length) {
        return!1
      }
      this.$__rollback$();
      var $p$$6$$ = this.$_getParent$($node$$29$$), $prev$$3$$ = $$$$17$$([]), $t$$2$$ = this, $sib$$ = this.$_getPrev$($node$$29$$);
      $node$$29$$.each(function() {
        $prev$$3$$ = $prev$$3$$.add($t$$2$$.$_getPrev$(this))
      });
      $node$$29$$ = $node$$29$$.detach();
      -1 !== $p$$6$$ && 0 === $p$$6$$.find("\x3e ul \x3e li").length && $p$$6$$.removeClass("oj-tree-open oj-tree-closed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_clean_node$($p$$6$$);
      this.$_emitEvent$({obj:$node$$29$$, prev:$sib$$, parent:$p$$6$$}, "delete");
      return $node$$29$$
    }, getText:function($node$$30$$) {
      $node$$30$$ = this.$_getNode$($node$$30$$);
      if(!$node$$30$$.length) {
        return!1
      }
      var $s$$8$$ = this.options.html_titles;
      $node$$30$$ = $node$$30$$.children("a:eq(0)");
      if($s$$8$$) {
        return $node$$30$$ = $node$$30$$.clone(), $node$$30$$.children("INS").remove(), $node$$30$$.html()
      }
      $node$$30$$ = $node$$30$$.contents().filter(function() {
        return 3 == this.nodeType
      })[0];
      return $node$$30$$.nodeValue
    }, rename:function($node$$31$$, $text$$11$$) {
      this.$_rename_node$($node$$31$$, $text$$11$$)
    }, hover:function($node$$32$$) {
      $node$$32$$ = this.$_getNode$($node$$32$$);
      if(!$node$$32$$.length) {
        return!1
      }
      $node$$32$$.hasClass("oj-tree-hovered") || this.dehover();
      this.$_data$.ui.$hovered$ = $node$$32$$.children("a").addClass("oj-tree-hovered").parent();
      this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id"));
      this.$_fix_scroll$($node$$32$$);
      this.$_emitEvent$({obj:$node$$32$$}, "hover")
    }, dehover:function() {
      var $obj$$52$$ = this.$_data$.ui.$hovered$, $p$$7$$;
      if(!$obj$$52$$ || !$obj$$52$$.length) {
        return!1
      }
      $p$$7$$ = $obj$$52$$.children("a").removeClass("oj-tree-hovered").parent();
      this.$_$container_ul$.removeAttr("aria-activedescendant");
      this.$_data$.ui.$hovered$[0] === $p$$7$$[0] && (this.$_data$.ui.$hovered$ = null);
      this.$_emitEvent$({obj:$obj$$52$$}, "dehover")
    }, getPath:function($node$$33$$, $idMode$$) {
      var $p$$8$$ = [], $_this$$5$$ = this;
      $node$$33$$ = this.$_getNode$($node$$33$$);
      if(-1 === $node$$33$$ || !$node$$33$$ || !$node$$33$$.length) {
        return!1
      }
      $node$$33$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$8$$.push($idMode$$ ? this.id : $_this$$5$$.getText(this))
      });
      $p$$8$$.reverse();
      $p$$8$$.push($idMode$$ ? $node$$33$$.attr("id") : this.getText($node$$33$$));
      return $p$$8$$
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)")
    }, refresh:function($node$$34$$) {
      this._super();
      this.$_refresh$($node$$34$$)
    }, move:function($node$$35$$, $refnode$$1$$, $position$$14$$, $iscopy$$) {
      this.$_move_node$($node$$35$$, $refnode$$1$$, $position$$14$$, $iscopy$$)
    }, destroy:function() {
      var $n$$23$$ = this.$_index$;
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "")
      });
      $$$$17$$(document).unbind(".oj-tree-" + $n$$23$$).undelegate(".oj-tree-" + $n$$23$$);
      this._super()
    }, _create:function() {
      this._super();
      this.$_bCreate$ = !0;
      this.$_elemId$ = "#" + this.element.attr("id");
      this.$_$container$ = $$$$17$$(this.$_elemId$);
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_index$ = this.$_newIndex$();
      this.$_isRtl$ = "rtl" === this._GetReadingDirection();
      this.$_initWidget$();
      this.$_bCreate$ = !1
    }, _setOption:function($key$$91$$, $newval$$) {
      if(!this.$_bCreate$) {
        var $val$$39$$;
        "selectionMode" === $key$$91$$ ? ($val$$39$$ = "none" === $newval$$ ? 0 : "single" === $newval$$ ? 1 : "multiple" === $newval$$ ? -1 : void 0, $val$$39$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $val$$39$$)) : "icons" === $key$$91$$ ? "boolean" == $$$$17$$.type($newval$$) && $newval$$ != this.$_data$.$themes$.icons && (this.$_data$.$themes$.icons = $newval$$, this[$newval$$ ? "show_icons" : "hide_icons"]()) : "contextMenu" !== $key$$91$$ || (this.$_data$.menu.$changing$ || 
        $newval$$.menu == this.options.contextMenu.menu) || (this.$_clearMenu$(), this.$_initMenu$($newval$$))
      }
      this._super($key$$91$$, $newval$$)
    }, $_getNodeCore$:function($obj$$53$$) {
      var $$obj$$ = $$$$17$$($obj$$53$$, this.$_$container$);
      if($$obj$$.is(".oj-tree") || -1 == $obj$$53$$) {
        return-1
      }
      $$obj$$ = $$obj$$.closest("li", this.$_$container$);
      return $$obj$$.length ? $$obj$$ : !1
    }, $_getNode$:function($obj$$54$$, $allow_multiple$$) {
      if("undefined" === typeof $obj$$54$$ || null === $obj$$54$$) {
        return $allow_multiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$last_selected$
      }
      var $$obj$$1$$ = $$$$17$$($obj$$54$$, this.$_$container$);
      if($$obj$$1$$.is(".oj-tree") || -1 == $obj$$54$$) {
        return-1
      }
      $$obj$$1$$ = $$obj$$1$$.closest("li", this.$_$container$);
      return $$obj$$1$$.length ? $$obj$$1$$ : !1
    }, $_getPrev$:function($obj$$55$$, $strict$$) {
      $obj$$55$$ = this.$_getNode$($obj$$55$$);
      if(-1 === $obj$$55$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child")
      }
      if(!$obj$$55$$.length) {
        return!1
      }
      if($strict$$) {
        return 0 < $obj$$55$$.prevAll("li").length ? $obj$$55$$.prevAll("li:eq(0)") : !1
      }
      if($obj$$55$$.prev("li").length) {
        for($obj$$55$$ = $obj$$55$$.prev("li").eq(0);$obj$$55$$.hasClass("oj-tree-open");) {
          $obj$$55$$ = $obj$$55$$.children("ul:eq(0)").children("li:last")
        }
        return $obj$$55$$
      }
      var $o$$ = $obj$$55$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$.length ? $o$$ : !1
    }, $_getNext$:function($obj$$56$$, $strict$$1$$) {
      $obj$$56$$ = this.$_getNode$($obj$$56$$);
      return-1 === $obj$$56$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$56$$.length ? $strict$$1$$ ? 0 < $obj$$56$$.nextAll("li").size() ? $obj$$56$$.nextAll("li:eq(0)") : !1 : $obj$$56$$.hasClass("oj-tree-open") ? $obj$$56$$.find("li:eq(0)") : 0 < $obj$$56$$.nextAll("li").size() ? $obj$$56$$.nextAll("li:eq(0)") : $obj$$56$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1
    }, $_getParent$:function($o$$1_obj$$57$$) {
      $o$$1_obj$$57$$ = this.$_getNode$($o$$1_obj$$57$$);
      if(-1 == $o$$1_obj$$57$$ || !$o$$1_obj$$57$$.length) {
        return!1
      }
      $o$$1_obj$$57$$ = $o$$1_obj$$57$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$1_obj$$57$$.length ? $o$$1_obj$$57$$ : -1
    }, $_getChildren$:function($obj$$58$$) {
      $obj$$58$$ = this.$_getNode$($obj$$58$$);
      return-1 === $obj$$58$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$58$$.length ? $obj$$58$$.children("ul:eq(0)").children("li") : !1
    }, $_reference$:function($node$$36$$) {
      $node$$36$$.parents("div").eq(0);
      return this
    }, $_applyDefaults$:function($to$$1$$, $from$$1$$) {
      void 0 != $to$$1$$ && void 0 != $from$$1$$ && $$$$17$$.each($from$$1$$, function($prop$$79$$, $val$$40$$) {
        void 0 == $to$$1$$[$prop$$79$$] && ($to$$1$$[$prop$$79$$] = $val$$40$$)
      })
    }, $_prepare_move$:function($o$$2$$, $r$$3$$, $pos$$8$$, $cb$$1$$, $is_cb$$) {
      var $p$$9$$ = {$ot$:this};
      $p$$9$$.$o$ = $p$$9$$.$ot$.$_getNode$($o$$2$$);
      $p$$9$$.$r$ = -1 === $r$$3$$ ? -1 : this.$_getNode$($r$$3$$);
      $p$$9$$.$p$ = "undefined" === typeof $pos$$8$$ || !1 === $pos$$8$$ ? "last" : $pos$$8$$;
      if(!$is_cb$$ && this.$_data$.$core$.$prepared_move$.$o$ && this.$_data$.$core$.$prepared_move$.$o$[0] === $p$$9$$.$o$[0] && this.$_data$.$core$.$prepared_move$.$r$[0] === $p$$9$$.$r$[0] && this.$_data$.$core$.$prepared_move$.$p$ === $p$$9$$.$p$) {
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$), $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$)
      }else {
        $p$$9$$.$ot$ = this;
        $p$$9$$.$rt$ = this;
        if(-1 !== $p$$9$$.$r$ && $p$$9$$.$r$) {
          if(!/^(before|after)$/.test($p$$9$$.$p$) && !this.$_is_loaded$($p$$9$$.$r$)) {
            return this.$_load_node$($p$$9$$.$r$, function() {
              this.$_prepare_move$($o$$2$$, $r$$3$$, $pos$$8$$, $cb$$1$$, !0)
            })
          }
          switch($p$$9$$.$p$) {
            case "before":
              $p$$9$$.$cp$ = $p$$9$$.$r$.index();
              $p$$9$$.$cr$ = $p$$9$$.$rt$.$_getParent$($p$$9$$.$r$);
              break;
            case "after":
              $p$$9$$.$cp$ = $p$$9$$.$r$.index() + 1;
              $p$$9$$.$cr$ = $p$$9$$.$rt$.$_getParent$($p$$9$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$9$$.$cp$ = 0;
              $p$$9$$.$cr$ = $p$$9$$.$r$;
              break;
            case "last":
              $p$$9$$.$cp$ = $p$$9$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$9$$.$cr$ = $p$$9$$.$r$;
              break;
            default:
              $p$$9$$.$cp$ = $p$$9$$.$p$, $p$$9$$.$cr$ = $p$$9$$.$r$
          }
        }else {
          switch($p$$9$$.$cr$ = -1, $p$$9$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$9$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$9$$.$cp$ = $p$$9$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$9$$.$cp$ = $p$$9$$.$p$
          }
        }
        $p$$9$$.$np$ = -1 == $p$$9$$.$cr$ ? $p$$9$$.$rt$.$_$container$ : $p$$9$$.$cr$;
        $p$$9$$.$op$ = $p$$9$$.$ot$.$_getParent$($p$$9$$.$o$);
        $p$$9$$.$cop$ = $p$$9$$.$o$.index();
        -1 === $p$$9$$.$op$ && ($p$$9$$.$op$ = $p$$9$$.$ot$ ? $p$$9$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$9$$.$p$) && ($p$$9$$.$op$ && $p$$9$$.$np$ && $p$$9$$.$op$[0] === $p$$9$$.$np$[0] && $p$$9$$.$o$.index() < $p$$9$$.$cp$) && $p$$9$$.$cp$++;
        $p$$9$$.$or$ = $p$$9$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$9$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepared_move$ = $p$$9$$;
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$, "prepare_move");
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$, "prepare_move")
      }
    }, check_move:function() {
      var $obj$$59$$ = this.$_data$.$core$.$prepared_move$, $ret$$28$$ = !0, $r$$4$$;
      $r$$4$$ = -1 === $obj$$59$$.$r$ ? this.$_$container$() : $obj$$59$$.$r$;
      if(!$obj$$59$$ || !$obj$$59$$.$o$ || $obj$$59$$.$or$[0] === $obj$$59$$.$o$[0]) {
        return!1
      }
      if(!$obj$$59$$.$cy$) {
        if($obj$$59$$.$op$ && $obj$$59$$.$np$ && $obj$$59$$.$op$[0] === $obj$$59$$.$np$[0] && $obj$$59$$.$cp$ - 1 === $obj$$59$$.$o$.index()) {
          return!1
        }
        $obj$$59$$.$o$.each(function() {
          if(-1 !== $r$$4$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$28$$ = !1
          }
        })
      }
      return $ret$$28$$
    }, $_rename_node$:function($node$$37$$, $text$$12$$) {
      var $t$$3$$;
      $node$$37$$ = this.$_getNode$($node$$37$$);
      this.$__rollback$();
      $t$$3$$ = this.getText($node$$37$$);
      $node$$37$$ && ($node$$37$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments))) && this.$_emitEvent$({obj:$node$$37$$, title:$text$$12$$, prevTitle:$t$$3$$}, "rename")
    }, $_move_node$:function($obj$$60$$, $d$$3_o$$3_ref$$2$$, $position$$15$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      if(!$is_prepared$$) {
        return this.$_prepare_move$($obj$$60$$, $d$$3_o$$3_ref$$2$$, $position$$15$$, function($p$$10$$) {
          this.$_move_node$($p$$10$$, !1, !1, $is_copy$$, !0, $skip_check$$)
        })
      }
      $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0);
      if(!$skip_check$$ && !this.check_move()) {
        return!1
      }
      this.$__rollback$();
      $d$$3_o$$3_ref$$2$$ = !1;
      $is_copy$$ ? ($d$$3_o$$3_ref$$2$$ = $obj$$60$$.$o$.clone(!0), $d$$3_o$$3_ref$$2$$.find("*[id]").addBack().each(function() {
        this.id && (this.id = "copy_" + this.id)
      })) : $d$$3_o$$3_ref$$2$$ = $obj$$60$$.$o$;
      $obj$$60$$.$or$.length ? $obj$$60$$.$or$.before($d$$3_o$$3_ref$$2$$) : ($obj$$60$$.$np$.children("ul").length || $$$$17$$("\x3cul /\x3e").appendTo($obj$$60$$.$np$), $obj$$60$$.$np$.children("ul:eq(0)").append($d$$3_o$$3_ref$$2$$));
      try {
        $obj$$60$$.$ot$.$_clean_node$($obj$$60$$.$op$), $obj$$60$$.$rt$.$_clean_node$($obj$$60$$.$np$), $obj$$60$$.$op$.find("\x3e ul \x3e li").length || $obj$$60$$.$op$.removeClass("oj-tree-open oj-tree-closed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove()
      }catch($e$$78$$) {
      }
      $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0, this.$_data$.$core$.$prepared_move$.$oc$ = $d$$3_o$$3_ref$$2$$);
      $d$$3_o$$3_ref$$2$$ = $$$$17$$.extend(!0, {}, this.$_data$.$core$.$prepared_move$);
      $d$$3_o$$3_ref$$2$$.obj = $obj$$60$$.$o$;
      this.$_emitEvent$($d$$3_o$$3_ref$$2$$, "move");
      return this.$_data$.$core$.$prepared_move$
    }, $_getMove$:function() {
      return this.$_data$.$crrm$.$prepared_move$
    }, $_getType$:function($node$$38$$) {
      return($node$$38$$ = this.$_getNode$($node$$38$$)) && $node$$38$$.length ? $node$$38$$.attr(this.options.types.attr) || "default" : !1
    }, $_clean_node$:function($obj$$61$$) {
      $obj$$61$$ = $obj$$61$$ && -1 != $obj$$61$$ ? $$$$17$$($obj$$61$$) : this.$_$container_ul$;
      $obj$$61$$ = $obj$$61$$.is("li") ? $obj$$61$$.find("li").addBack() : $obj$$61$$.find("li");
      $obj$$61$$.removeClass("oj-tree-last").filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-tree-open").removeClass("oj-tree-leaf").addClass("oj-tree-closed").attr("aria-expanded", "false");
      $obj$$61$$.not(".oj-tree-open, .oj-tree-closed").addClass("oj-tree-leaf").children("ul").remove();
      this.$_emitEvent$({obj:$obj$$61$$}, "clean_node")
    }, $_create_node$:function($obj$$62$$, $position$$16$$, $js$$, $callback$$91$$, $is_loaded$$) {
      $obj$$62$$ = this.$_getNode$($obj$$62$$);
      if(-1 !== $obj$$62$$ && !$obj$$62$$.length) {
        return!1
      }
      $position$$16$$ = "undefined" === typeof $position$$16$$ ? "last" : $position$$16$$;
      var $d$$4$$ = $$$$17$$("\x3cli /\x3e"), $s$$9$$ = this.options, $tmp$$3$$;
      if(!$is_loaded$$ && !this.$_is_loaded$($obj$$62$$)) {
        return this.$_load_node$($obj$$62$$, function() {
          this.$_create_node$($obj$$62$$, $position$$16$$, $js$$, $callback$$91$$, !0)
        }), !1
      }
      this.$__rollback$();
      "string" === typeof $js$$ && ($js$$ = {data:$js$$});
      $js$$ || ($js$$ = {});
      $js$$.attr && $d$$4$$.attr($js$$.attr);
      $js$$.metadata && $d$$4$$.data($js$$.metadata);
      $js$$.state && $d$$4$$.addClass("oj-tree-" + ("expanded" === $js$$.state ? "open" : "closed"));
      $js$$.data || ($js$$.data = void 0 !== $js$$.title ? $js$$.title : this.$getTranslatedString$("m_newnode"));
      $$$$17$$.isArray($js$$.data) || ($tmp$$3$$ = $js$$.data, $js$$.data = [], $js$$.data.push($tmp$$3$$));
      $$$$17$$.each($js$$.data, function($i$$229$$, $m$$26$$) {
        $tmp$$3$$ = $$$$17$$("\x3ca /\x3e");
        $$$$17$$.isFunction($m$$26$$) && ($m$$26$$ = $m$$26$$.call(this, $js$$));
        if("string" == typeof $m$$26$$) {
          $tmp$$3$$.attr("href", "#")[$s$$9$$.html_titles ? "html" : "text"]($m$$26$$)
        }else {
          $m$$26$$.attr || ($m$$26$$.attr = {}), $m$$26$$.attr.href || ($m$$26$$.attr.href = "#"), $tmp$$3$$.attr($m$$26$$.attr)[$s$$9$$.html_titles ? "html" : "text"]($m$$26$$.title), $m$$26$$.language && $tmp$$3$$.addClass($m$$26$$.language)
        }
        $tmp$$3$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
        !$m$$26$$.icon && $js$$.icon && ($m$$26$$.icon = $js$$.icon);
        $m$$26$$.icon && (-1 === $m$$26$$.icon.indexOf("/") ? $tmp$$3$$.children("ins").addClass($m$$26$$.icon) : $tmp$$3$$.children("ins").css("background", "url('" + $m$$26$$.icon + "') center center no-repeat"));
        $d$$4$$.append($tmp$$3$$)
      });
      $d$$4$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
      -1 === $obj$$62$$ && ($obj$$62$$ = this.$_$container$, "before" === $position$$16$$ && ($position$$16$$ = "first"), "after" === $position$$16$$ && ($position$$16$$ = "last"));
      switch($position$$16$$) {
        case "before":
          $obj$$62$$.before($d$$4$$);
          $tmp$$3$$ = this.$_getParent$($obj$$62$$);
          break;
        case "after":
          $obj$$62$$.after($d$$4$$);
          $tmp$$3$$ = this.$_getParent$($obj$$62$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$62$$.children("ul").length || $obj$$62$$.append("\x3cul /\x3e");
          $obj$$62$$.children("ul").prepend($d$$4$$);
          $tmp$$3$$ = $obj$$62$$;
          break;
        case "last":
          $obj$$62$$.children("ul").length || $obj$$62$$.append("\x3cul /\x3e");
          $obj$$62$$.children("ul").append($d$$4$$);
          $tmp$$3$$ = $obj$$62$$;
          break;
        default:
          $obj$$62$$.children("ul").length || $obj$$62$$.append("\x3cul /\x3e"), $position$$16$$ || ($position$$16$$ = 0), $tmp$$3$$ = $obj$$62$$.children("ul").children("li").eq($position$$16$$), $tmp$$3$$.length ? $tmp$$3$$.before($d$$4$$) : $obj$$62$$.children("ul").append($d$$4$$), $tmp$$3$$ = $obj$$62$$
      }
      if(-1 === $tmp$$3$$ || $tmp$$3$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$3$$ = -1
      }
      this.$_clean_node$($tmp$$3$$);
      this.$_emitEvent$({obj:$d$$4$$, parent:$tmp$$3$$}, "create_node");
      $callback$$91$$ && $callback$$91$$.call(this, $d$$4$$);
      return $d$$4$$
    }, $_expand$:function($obj$$63$$, $callback$$92$$, $skip_animation$$) {
      $obj$$63$$ = this.$_getNode$($obj$$63$$);
      if(!$obj$$63$$.length) {
        return!1
      }
      if(!$obj$$63$$.hasClass("oj-tree-closed")) {
        return $callback$$92$$ && $callback$$92$$.call(), !1
      }
      var $s$$10$$ = $skip_animation$$ || this.options.animDuration, $t$$4$$ = this;
      this.$_is_loaded$($obj$$63$$) ? (this.options.expandParents && $obj$$63$$.parentsUntil(".oj-tree", ".oj-tree-closed").each(function() {
        $t$$4$$.expand(this, !1, !0)
      }), $s$$10$$ && $obj$$63$$.children("ul").css("display", "none"), $obj$$63$$.removeClass("oj-tree-closed").addClass("oj-tree-open").attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $s$$10$$ ? $obj$$63$$.children("ul").stop(!0, !0).slideDown($s$$10$$, function() {
        this.style.display = "";
        $t$$4$$.after_open($obj$$63$$)
      }) : $t$$4$$.after_open($obj$$63$$), this.$_emitEvent$({obj:$obj$$63$$}, "expand"), $callback$$92$$ && $callback$$92$$.call()) : ($obj$$63$$.children("a").addClass("oj-tree-loading"), this.$_load_node$($obj$$63$$, function() {
        $t$$4$$.expand($obj$$63$$, $callback$$92$$, $skip_animation$$)
      }, $callback$$92$$))
    }, $_expandAll$:function($obj$$64$$, $do_animation$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$64$$ ? $obj$$64$$ : -1;
      ($obj$$64$$ = $obj$$64$$ ? this.$_getNode$($obj$$64$$) : -1) && -1 !== $obj$$64$$ ? $origTarg$$1$$ = $obj$$64$$ : $obj$$64$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$64$$ = $obj$$64$$.find("li.oj-tree-closed") : ($original_obj$$ = $obj$$64$$, $obj$$64$$ = $obj$$64$$.is(".oj-tree-closed") ? $obj$$64$$.find("li.oj-tree-closed").addBack() : $obj$$64$$.find("li.oj-tree-closed"));
      var $_this$$7$$ = this;
      $obj$$64$$.each(function() {
        var $__this$$ = this;
        $_this$$7$$.$_is_loaded$(this) ? $_this$$7$$.$_expand$(this, !1, !$do_animation$$) : $_this$$7$$.expand(this, function() {
          $_this$$7$$.$_expandAll$($__this$$, $do_animation$$, $original_obj$$)
        }, !$do_animation$$)
      });
      0 === $original_obj$$.find("li.oj-tree-closed").length && this.$_emitEvent$({obj:$origTarg$$1$$}, "expandall")
    }, $_select$:function($node$$39$$, $check_s$$11$$, $e$$79$$) {
      $node$$39$$ = this.$_getNode$($node$$39$$);
      if(-1 == $node$$39$$ || !$node$$39$$ || !$node$$39$$.length) {
        return!1
      }
      $check_s$$11$$ = this.options;
      var $is_multiple$$ = "on" == $check_s$$11$$.selectMultipleModifier || !1 !== $check_s$$11$$.selectMultipleModifier && $e$$79$$ && $e$$79$$[$check_s$$11$$.selectMultipleModifier + "Key"], $is_range$$ = !1 !== $check_s$$11$$.selectRangeModifier && $e$$79$$ && $e$$79$$[$check_s$$11$$.selectRangeModifier + "Key"] && this.$_data$.ui.$last_selected$ && this.$_data$.ui.$last_selected$[0] !== $node$$39$$[0] && this.$_data$.ui.$last_selected$.parent()[0] === $node$$39$$.parent()[0], $is_selected$$ = 
      this.isSelected($node$$39$$), $proceed$$ = !0, $t$$5$$ = this;
      $is_multiple$$ || -1 != this.$_data$.$core$.$selectMode$ || ($is_multiple$$ = !0);
      if(0 == this.$_data$.$core$.$selectMode$ || $check_s$$11$$.disableSelectingChildren && $is_multiple$$ && ($node$$39$$.parentsUntil(".oj-tree", "li").children("a.oj-tree-clicked").length || $node$$39$$.children("ul").find("a.oj-tree-clicked:eq(0)").length)) {
        return!1
      }
      $proceed$$ = !1;
      switch(!0) {
        case $is_range$$:
          this.$_data$.ui.$last_selected$.addClass("oj-tree-last-selected");
          $node$$39$$ = $node$$39$$[$node$$39$$.index() < this.$_data$.ui.$last_selected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
          -1 == this.$_data$.$core$.$selectMode$ || $node$$39$$.length < this.$_data$.$core$.$selectMode$ ? (this.$_data$.ui.$last_selected$.removeClass("oj-tree-last-selected"), this.$_data$.ui.$last_selected$.removeClass("oj-tree-last-selected"), this.data.ui.selected.each(function() {
            this !== $t$$5$$.$_data$.ui.$last_selected$[0] && $t$$5$$.deselect(this)
          }), $is_selected$$ = !1, $proceed$$ = !0) : $proceed$$ = !1;
          break;
        case $is_selected$$ && !$is_multiple$$:
          this.deselectAll();
          $is_selected$$ = !1;
          $proceed$$ = !0;
          break;
        case !$is_selected$$ && !$is_multiple$$:
          if(-1 == this.$_data$.$core$.$selectMode$ || 0 < this.$_data$.$core$.$selectMode$) {
            this.deselectAll(), $proceed$$ = !0
          }
          break;
        case $is_selected$$ && $is_multiple$$:
          this.deselect($node$$39$$);
          break;
        case !$is_selected$$ && $is_multiple$$:
          if(-1 == this.$_data$.$core$.$selectMode$ || this.$_data$.ui.selected.length + 1 <= this.$_data$.$core$.$selectMode$) {
            $proceed$$ = !0
          }
      }
      $proceed$$ && !$is_selected$$ && ($is_range$$ || (this.$_data$.ui.$last_selected$ = $node$$39$$), $node$$39$$.children("a").addClass("oj-tree-clicked"), $node$$39$$.attr("aria-selected", "true"), $check_s$$11$$.selectedParentExpand && $node$$39$$.parents(".oj-tree-closed").each(function() {
        $t$$5$$.expand(this, !1, !0)
      }), this.$_data$.ui.selected = this.$_data$.ui.selected.add($node$$39$$), this.$_fix_scroll$($node$$39$$.eq(0)), this.$_emitEvent$({obj:$node$$39$$, e:$e$$79$$}, "select"))
    }, $_refresh$:function($node$$40$$) {
      this.$_refresh_core$($node$$40$$)
    }, $_refresh_core$:function($node$$41$$) {
      var $origTarg$$2$$ = $node$$41$$ ? $node$$41$$ : -1, $_this$$8$$ = this;
      this.$_save_opened$();
      $node$$41$$ || ($node$$41$$ = -1);
      ($node$$41$$ = this.$_getNode$($node$$41$$)) ? $origTarg$$2$$ = $node$$41$$ : $node$$41$$ = -1;
      -1 !== $node$$41$$ ? $node$$41$$.children("UL").remove() : this.$_$container_ul$.empty();
      this.$_load_node$($node$$41$$, function() {
        $_this$$8$$.$_emitEvent$({obj:$origTarg$$2$$}, "refresh");
        $_this$$8$$.$_reload_nodes$()
      })
    }, $_refresh_ui$:function($obj$$65$$) {
      this.save_selected();
      this.$_refresh_core$($obj$$65$$)
    }, after_open:function($obj$$66$$) {
      this.$_emitEvent$({obj:$obj$$66$$}, "after_open")
    }, after_close:function($obj$$67$$) {
      this.$_emitEvent$({obj:$obj$$67$$}, "after_close")
    }, $_reopen$:function() {
      var $_this$$9$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$17$$.each(this.$_data$.$core$.$toExpand$, function($i$$230$$, $val$$41$$) {
        $_this$$9$$.$_expand$($val$$41$$, !1, !0)
      });
      this.$_emitEvent$({}, "reopen")
    }, $_getSelected$:function($context$$43$$) {
      return $context$$43$$ ? $$$$17$$($context$$43$$).find("a.oj-tree-clicked").parent() : this.$_data$.ui.selected
    }, $_set_text$:function($obj$$68$$, $val$$42$$) {
      $obj$$68$$ = this.$_getNode$($obj$$68$$);
      if(!$obj$$68$$.length) {
        return!1
      }
      $obj$$68$$ = $obj$$68$$.children("a:eq(0)");
      if(this.options.html_titles) {
        var $tmp$$4$$ = $obj$$68$$.children("INS").clone();
        $obj$$68$$.html($val$$42$$).prepend($tmp$$4$$);
        this.$_emitEvent$({obj:$obj$$68$$, name:$val$$42$$}, "set_text");
        return!0
      }
      $obj$$68$$ = $obj$$68$$.contents().filter(function() {
        return 3 == this.nodeType
      })[0];
      this.$_emitEvent$({obj:$obj$$68$$, name:$val$$42$$}, "set_text");
      return $obj$$68$$.nodeValue = $val$$42$$
    }, $_load_node$:function($obj$$69$$) {
      this.$_emitEvent$({obj:$obj$$69$$}, "load_node")
    }, $_is_loaded$:$JSCompiler_returnArg$$(!0), $_load_node_J$:function($obj$$71$$, $s_call$$, $e_call$$) {
      var $_this$$10$$ = this;
      this.$_load_node_json$($obj$$71$$, function() {
        $_this$$10$$.$_emitEvent$({obj:$_this$$10$$.$_getNode$($obj$$71$$)}, "load_node");
        $s_call$$.call(this)
      }, $e_call$$)
    }, $_is_loaded_J$:function($obj$$72$$) {
      var $s$$12$$ = this.options.json_data;
      $obj$$72$$ = this.$_getNode$($obj$$72$$);
      return-1 == $obj$$72$$ || !$obj$$72$$ || !$s$$12$$.ajax && !$s$$12$$.progressive_render && !$$$$17$$.isFunction($s$$12$$.data) || $obj$$72$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$72$$.children("ul").children("li").length
    }, $_load_node_H$:function($obj$$73$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$11$$ = this;
      this.$_load_node_html$($obj$$73$$, function() {
        $_this$$11$$.$_emitEvent$({obj:$_this$$11$$.$_getNode$($obj$$73$$)}, "load_node");
        $s_call$$1$$.call(this)
      }, $e_call$$1$$)
    }, $_is_loaded_H$:function($obj$$74$$) {
      var $s$$13$$ = this.options.html_data;
      $obj$$74$$ = this.$_getNode$($obj$$74$$);
      return-1 == $obj$$74$$ || !$obj$$74$$ || !$s$$13$$.ajax && !$$$$17$$.isFunction($s$$13$$.data) || $obj$$74$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$74$$.children("ul").children("li").size()
    }, reselect:function() {
      var $_this$$12$$ = this, $s$$14$$ = this.$_data$.ui.$to_select$, $s$$14$$ = $$$$17$$.map($$$$17$$.makeArray($s$$14$$), function($n$$24$$) {
        return"#" + $n$$24$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
      });
      $$$$17$$.each($s$$14$$, function($i$$231$$, $val$$43$$) {
        $val$$43$$ && "#" !== $val$$43$$ && $_this$$12$$.select($val$$43$$)
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter($JSCompiler_get$$("parentNode"));
      this.$_emitEvent$(null, "reselect")
    }, save_selected:function() {
      var $_this$$13$$ = this;
      this.$_data$.ui.$to_select$ = [];
      this.$_data$.ui.selected.each(function() {
        this.id && $_this$$13$$.$_data$.ui.$to_select$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
      });
      this.$_emitEvent$(this.$_data$.ui.$to_select$, "save_selected")
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && ($$$$17$$.isArray($rb$$1$$) || ($rb$$1$$ = [$rb$$1$$]), $$$$17$$.each($rb$$1$$, $JSCompiler_emptyFn$$()))
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback");
      return{$i$:this.$_index$, $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data}
    }, set_rollback:function($html$$3$$, $data$$109$$) {
      this.$_$container$ && this.$_$container$.empty().append($html$$3$$);
      this.data = $data$$109$$;
      this.$_emitEvent$(null, "set_rollback")
    }, $_refresh_json$:function($obj$$75$$) {
      $obj$$75$$ = this.$_getNode$($obj$$75$$);
      var $s$$15$$ = this.options.json_data;
      $obj$$75$$ && (-1 !== $obj$$75$$ && $s$$15$$.progressive_unload && ($$$$17$$.isFunction($s$$15$$.data) || $s$$15$$.ajax)) && $obj$$75$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$75$$)
    }, $_load_node_json$:function($obj$$76$$, $s_call$$2$$, $e_call$$2$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $s$$16$$ = this.$_getOptions$().json_data, $d$$5$$;
      if(($obj$$76$$ = this.$_getNode$($obj$$76$$)) && -1 !== $obj$$76$$ && ($s$$16$$.progressive_render || $s$$16$$.progressive_unload) && !$obj$$76$$.is(".oj-tree-open, .oj-tree-leaf") && 0 === $obj$$76$$.children("ul").children("li").length && $obj$$76$$.data("oj-tree-children")) {
        if($d$$5$$ = this.$_parseJson$($obj$$76$$.data("oj-tree-children"), $obj$$76$$)) {
          $obj$$76$$.append($d$$5$$), $s$$16$$.progressive_unload || $obj$$76$$.removeData("oj-tree-children")
        }
        this.$_clean_node$($obj$$76$$);
        $s_call$$2$$ && $s_call$$2$$.call(this)
      }else {
        if($obj$$76$$ && -1 !== $obj$$76$$) {
          if($obj$$76$$.data("oj-tree-is-loading")) {
            return
          }
          $obj$$76$$.data("oj-tree-is-loading", !0)
        }
        switch(!0) {
          case !$s$$16$$.data && !$s$$16$$.ajax:
            throw"Neither data nor ajax settings supplied.";;
          case $$$$17$$.isFunction($s$$16$$.data):
            $s$$16$$.data.call(this, $obj$$76$$, $$$$17$$.proxy(function($d$$6$$) {
              ($d$$6$$ = this.$_parseJson$($d$$6$$, $obj$$76$$)) ? (-1 !== $obj$$76$$ && $obj$$76$$ ? ($obj$$76$$.append($d$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$76$$.removeData("oj-tree-is-loading")) : this.$_$container$.children("ul").empty().append($d$$6$$.children()), this.$_clean_node$($obj$$76$$), $s_call$$2$$ && $s_call$$2$$.call(this)) : (-1 !== $obj$$76$$ && $obj$$76$$ ? ($obj$$76$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$76$$.removeData("oj-tree-is-loading"), 
              $s$$16$$.correct_state && this.$_correct_state$($obj$$76$$)) : $s$$16$$.correct_state && this.$_$container$.children("ul").empty(), $e_call$$2$$ && $e_call$$2$$.call(this))
            }, this));
            break;
          case !!$s$$16$$.data && !$s$$16$$.ajax || !!$s$$16$$.data && !!$s$$16$$.ajax && (!$obj$$76$$ || -1 === $obj$$76$$):
            $obj$$76$$ && -1 != $obj$$76$$ || (($d$$5$$ = this.$_parseJson$($s$$16$$.data, $obj$$76$$)) ? (this.$_$container$.children("ul").empty().append($d$$5$$.children()), this.$_clean_node$()) : $s$$16$$.correct_state && this.$_$container$.children("ul").empty());
            $s_call$$2$$ && $s_call$$2$$.call(this);
            break;
          case !$s$$16$$.data && !!$s$$16$$.ajax || !!$s$$16$$.data && !!$s$$16$$.ajax && $obj$$76$$ && -1 !== $obj$$76$$:
            $error_func$$ = function $$error_func$$$($x$$55$$, $t$$6$$, $e$$80$$) {
              var $ef$$ = this.$_getOptions$().json_data.ajax.error;
              $ef$$ && $ef$$.call(this, $t$$6$$, $e$$80$$, $x$$55$$);
              -1 != $obj$$76$$ && $obj$$76$$.length ? ($obj$$76$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$76$$.removeData("oj-tree-is-loading"), "success" === $t$$6$$ && $s$$16$$.correct_state && this.$_correct_state$($obj$$76$$)) : "success" === $t$$6$$ && $s$$16$$.correct_state && this.$_$container$.children("ul").empty();
              $e_call$$2$$ && $e_call$$2$$.call(this)
            }, $success_func$$ = function $$success_func$$$($d$$7$$, $$u_t$$7$$, $x$$56$$) {
              var $sf$$ = this.$_getOptions$().json_data.ajax.success;
              $sf$$ && ($d$$7$$ = $sf$$.call(this, $d$$7$$, $$u_t$$7$$, $x$$56$$) || $d$$7$$);
              if("" === $d$$7$$ || $d$$7$$ && $d$$7$$.toString && "" === $d$$7$$.toString().replace(/^[\s\n]+$/, "") || !$$$$17$$.isArray($d$$7$$) && !$$$$17$$.isPlainObject($d$$7$$)) {
                return $error_func$$.call(this, $x$$56$$, $$u_t$$7$$, "")
              }
              ($d$$7$$ = this.$_parseJson$($d$$7$$, $obj$$76$$)) ? (-1 !== $obj$$76$$ && $obj$$76$$ ? ($obj$$76$$.append($d$$7$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$76$$.removeData("oj-tree-is-loading")) : ($$u_t$$7$$ = this.$_$container$.children("ul"), $$u_t$$7$$.empty().append($d$$7$$.children()), $$u_t$$7$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_t$$7$$.attr("aria-multiselectable", !0)), 
              this.$_clean_node$($obj$$76$$), $s_call$$2$$ && $s_call$$2$$.call(this)) : -1 !== $obj$$76$$ && $obj$$76$$ ? ($obj$$76$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$76$$.removeData("oj-tree-is-loading"), $s$$16$$.correct_state && (this.$_correct_state$($obj$$76$$), $s_call$$2$$ && $s_call$$2$$.call(this))) : $s$$16$$.correct_state && (this.$_$container$.children("ul").empty(), $s_call$$2$$ && $s_call$$2$$.call(this))
            }, $s$$16$$.ajax.context = this, $s$$16$$.ajax.error = $error_func$$, $s$$16$$.ajax.success = $success_func$$, $s$$16$$.ajax.dataType || ($s$$16$$.ajax.dataType = "json"), $$$$17$$.isFunction($s$$16$$.ajax.url) && ($s$$16$$.ajax.url = $s$$16$$.ajax.url.call(this, $obj$$76$$)), $$$$17$$.isFunction($s$$16$$.ajax.data) && ($s$$16$$.ajax.data = $s$$16$$.ajax.data.call(this, $obj$$76$$)), $$$$17$$.ajax($s$$16$$.ajax)
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$77_ul2$$, $isRecurse_ul1$$) {
      var $d$$8$$ = !1, $i$$233_p$$11$$ = this.options, $j$$34_s$$17$$ = $i$$233_p$$11$$.json_data, $t$$8$$ = $i$$233_p$$11$$.html_titles, $tmp$$5$$;
      if(!$js$$1$$) {
        return $d$$8$$
      }
      $j$$34_s$$17$$.progressive_unload && ($obj$$77_ul2$$ && -1 !== $obj$$77_ul2$$) && $obj$$77_ul2$$.data("oj-tree-children", $d$$8$$);
      if($$$$17$$.isArray($js$$1$$)) {
        $d$$8$$ = $$$$17$$("\x3cul\x3e");
        if(!$js$$1$$.length) {
          return!1
        }
        $i$$233_p$$11$$ = 0;
        for($j$$34_s$$17$$ = $js$$1$$.length;$i$$233_p$$11$$ < $j$$34_s$$17$$;$i$$233_p$$11$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$233_p$$11$$], $obj$$77_ul2$$, !0), $tmp$$5$$.length && ($d$$8$$ = $d$$8$$.append($tmp$$5$$))
        }
        $d$$8$$ = $d$$8$$.children()
      }else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        if(!$js$$1$$.data && "" !== $js$$1$$.data) {
          if(void 0 !== $js$$1$$.title) {
            $js$$1$$.data = $js$$1$$.title, delete $js$$1$$.title
          }else {
            return $d$$8$$
          }
        }
        $d$$8$$ = $$$$17$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && $d$$8$$.attr($js$$1$$.attr);
        $js$$1$$.metadata && $d$$8$$.data($js$$1$$.metadata);
        ($js$$1$$.state || $js$$1$$.children && 0 === $js$$1$$.children.length) && $d$$8$$.addClass("oj-tree-" + ("expanded" === $js$$1$$.state ? "open" : "closed"));
        $$$$17$$.isArray($js$$1$$.data) || ($tmp$$5$$ = $js$$1$$.data, $js$$1$$.data = [], $js$$1$$.data.push($tmp$$5$$));
        $$$$17$$.each($js$$1$$.data, function($i$$234$$, $m$$27$$) {
          $tmp$$5$$ = $$$$17$$("\x3ca tabindex\x3d'-1' /\x3e");
          $$$$17$$.isFunction($m$$27$$) && ($m$$27$$ = $m$$27$$.call(this, $js$$1$$));
          if("string" == typeof $m$$27$$) {
            $tmp$$5$$.attr("href", "#")[$t$$8$$ ? "html" : "text"]($m$$27$$)
          }else {
            $m$$27$$.attr || ($m$$27$$.attr = {}), $m$$27$$.attr.href || ($m$$27$$.attr.href = "#"), $tmp$$5$$.attr($m$$27$$.attr)[$t$$8$$ ? "html" : "text"]($m$$27$$.title), $m$$27$$.language && $tmp$$5$$.addClass($m$$27$$.language)
          }
          $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
          !$m$$27$$.icon && $js$$1$$.icon && ($m$$27$$.icon = $js$$1$$.icon);
          $m$$27$$.icon && (-1 === $m$$27$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$27$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$27$$.icon + "') center center no-repeat"));
          $d$$8$$.append($tmp$$5$$)
        });
        $d$$8$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && ($j$$34_s$$17$$.progressive_render && "expanded" !== $js$$1$$.state ? $d$$8$$.addClass("oj-tree-closed").attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : ($j$$34_s$$17$$.progressive_unload && $d$$8$$.data("oj-tree-children", $js$$1$$.children), $$$$17$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$77_ul2$$, !0), $tmp$$5$$.length && ($obj$$77_ul2$$ = $$$$17$$("\x3cul role\x3d'group' /\x3e"), 
        $obj$$77_ul2$$.append($tmp$$5$$), $d$$8$$.append($obj$$77_ul2$$)))))
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$17$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$8$$), $d$$8$$ = $isRecurse_ul1$$);
      return $d$$8$$
    }, $_getJson$:function($obj$$78$$, $li_attr$$, $a_attr$$, $is_callback$$) {
      var $result$$17$$ = [], $s$$18$$ = this.options, $_this$$14$$ = this, $tmp1$$, $tmp2$$, $li$$, $a$$60$$, $t$$9$$, $lang$$;
      ($obj$$78$$ = this.$_getNode$($obj$$78$$)) && -1 !== $obj$$78$$ || ($obj$$78$$ = this.$_$container$.find("\x3e ul \x3e li"));
      $li_attr$$ = $$$$17$$.isArray($li_attr$$) ? $li_attr$$ : ["id", "class"];
      !$is_callback$$ && this.data.types && $li_attr$$.push($s$$18$$.types.type_attr);
      $a_attr$$ = $$$$17$$.isArray($a_attr$$) ? $a_attr$$ : [];
      $obj$$78$$.each(function() {
        $li$$ = $$$$17$$(this);
        $tmp1$$ = {data:[]};
        $li_attr$$.length && ($tmp1$$.attr = {});
        $$$$17$$.each($li_attr$$, function($i$$235$$, $v$$1$$) {
          ($tmp2$$ = $li$$.attr($v$$1$$)) && ($tmp2$$.length && $tmp2$$.replace(/oj-tree[^ ]*/ig, "").length) && ($tmp1$$.attr[$v$$1$$] = (" " + $tmp2$$).replace(/ oj-tree[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, ""))
        });
        $li$$.hasClass("oj-tree-open") && ($tmp1$$.state = "open");
        $li$$.hasClass("oj-tree-closed") && ($tmp1$$.state = "closed");
        $li$$.data() && ($tmp1$$.$metadata$ = $li$$.data());
        $a$$60$$ = $li$$.children("a");
        $a$$60$$.each(function() {
          $t$$9$$ = $$$$17$$(this);
          $a_attr$$.length || -1 !== $$$$17$$.inArray("languages", $s$$18$$.plugins) || $t$$9$$.children("ins").get(0).style.backgroundImage.length || $t$$9$$.children("ins").get(0).className && $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").length ? ($lang$$ = !1, -1 !== $$$$17$$.inArray("languages", $s$$18$$.plugins) && ($$$$17$$.isArray($s$$18$$.languages) && $s$$18$$.languages.length) && $$$$17$$.each($s$$18$$.languages, function($l$$8$$, $lv$$) {
            if($t$$9$$.hasClass($lv$$)) {
              return $lang$$ = $lv$$, !1
            }
          }), $tmp2$$ = {attr:{}, title:$_this$$14$$.getText($t$$9$$, $lang$$)}, $$$$17$$.each($a_attr$$, function($k$$7$$, $z$$4$$) {
            $tmp2$$.attr[$z$$4$$] = (" " + ($t$$9$$.attr($z$$4$$) || "")).replace(/ oj-tree[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "")
          }), -1 !== $$$$17$$.inArray("languages", $s$$18$$.plugins) && ($$$$17$$.isArray($s$$18$$.languages) && $s$$18$$.languages.length) && $$$$17$$.each($s$$18$$.languages, function($k$$8$$, $z$$5$$) {
            if($t$$9$$.hasClass($z$$5$$)) {
              return $tmp2$$.language = $z$$5$$, !0
            }
          }), $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/^\s+$/ig, "").length && ($tmp2$$.$icon$ = $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "")), $t$$9$$.children("ins").get(0).style.backgroundImage.length && ($tmp2$$.$icon$ = $t$$9$$.children("ins").get(0).style.backgroundImage.replace("url(", "").replace(")", ""))) : $tmp2$$ = $_this$$14$$.getText($t$$9$$);
          1 < $a$$60$$.length ? $tmp1$$.data.push($tmp2$$) : $tmp1$$.data = $tmp2$$
        });
        $li$$ = $li$$.find("\x3e ul \x3e li");
        $li$$.length && ($tmp1$$.children = $_this$$14$$.$_getJson$($li$$, $li_attr$$, $a_attr$$, !0));
        $result$$17$$.push($tmp1$$)
      });
      return $result$$17$$
    }, $_correct_state$:function($obj$$79$$) {
      $obj$$79$$ = this.$_getNode$($obj$$79$$);
      if(!$obj$$79$$ || -1 === $obj$$79$$) {
        return!1
      }
      $obj$$79$$.removeClass("oj-tree-closed oj-tree-open").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      this.$_emitEvent$({obj:$obj$$79$$}, "correct_state")
    }, $_core_notify$:function($n$$25$$, $data$$110$$) {
      $data$$110$$.$opened$ && this.$_expand$($n$$25$$, !1, !0)
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded")
    }, $_load_node_html$:function($obj$$80$$, $s_call$$3$$, $e_call$$3$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$9$$, $s$$19$$ = this.options.html_data;
      if(($obj$$80$$ = this.$_getNode$($obj$$80$$)) && -1 !== $obj$$80$$) {
        if($obj$$80$$.data("oj-tree-is-loading")) {
          return
        }
        $obj$$80$$.data("oj-tree-is-loading", !0)
      }
      switch(!0) {
        case $$$$17$$.isFunction($s$$19$$.data):
          $s$$19$$.data.call(this, $obj$$80$$, $$$$17$$.proxy(function($d$$10$$) {
            $d$$10$$ && "" !== $d$$10$$ && $d$$10$$.toString && "" !== $d$$10$$.toString().replace(/^[\s\n]+$/, "") ? ($d$$10$$ = $$$$17$$($d$$10$$), $d$$10$$.is("ul") || ($d$$10$$ = $$$$17$$("\x3cul /\x3e").append($d$$10$$)), -1 != $obj$$80$$ && $obj$$80$$ ? ($obj$$80$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$80$$.append($d$$10$$).children("ul").find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $obj$$80$$.removeData("oj-tree-is-loading")) : this.$_$container$.children("ul").empty().append($d$$10$$.children()).find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_clean_node$($obj$$80$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $obj$$80$$ && -1 !== $obj$$80$$ ? ($obj$$80$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$80$$.removeData("oj-tree-is-loading"), $s$$19$$.correct_state && (this.$_correct_state$($obj$$80$$), $s_call$$3$$ && $s_call$$3$$.call(this))) : 
            $s$$19$$.correct_state && (this.$_$container$.children("ul").empty(), $s_call$$3$$ && $s_call$$3$$.call(this))
          }, this));
          break;
        case !$s$$19$$.data && !$s$$19$$.ajax:
          $obj$$80$$ && -1 != $obj$$80$$ || (this.$_$container$.children("ul").empty().append(this.$_data$.html.$originalContainerHtml$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$3$$ && $s_call$$3$$.call(this);
          break;
        case !!$s$$19$$.data && !$s$$19$$.ajax || !!$s$$19$$.data && !!$s$$19$$.ajax && (!$obj$$80$$ || -1 === $obj$$80$$):
          $obj$$80$$ && -1 != $obj$$80$$ || ($d$$9$$ = $$$$17$$($s$$19$$.data), $d$$9$$.is("ul") || ($d$$9$$ = $$$$17$$("\x3cul /\x3e").append($d$$9$$)), this.$_$container$.children("ul").empty().append($d$$9$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$3$$ && $s_call$$3$$.call(this);
          break;
        case !$s$$19$$.data && !!$s$$19$$.ajax || !!$s$$19$$.data && !!$s$$19$$.ajax && $obj$$80$$ && -1 !== $obj$$80$$:
          $obj$$80$$ = this.$_getNode$($obj$$80$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$57$$, $t$$10$$, $e$$81$$) {
            var $ef$$1$$ = this.$_getOptions$().html_data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$57$$, $t$$10$$, $e$$81$$);
            -1 != $obj$$80$$ && $obj$$80$$.length ? ($obj$$80$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$80$$.removeData("oj-tree-is-loading"), "success" === $t$$10$$ && $s$$19$$.correct_state && this.$_correct_state$($obj$$80$$)) : "success" === $t$$10$$ && $s$$19$$.correct_state && this.$_$container$().children("ul").empty();
            $e_call$$3$$ && $e_call$$3$$.call(this)
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$11$$, $t$$11$$, $x$$58$$) {
            var $sf$$1$$ = this.$_getOptions$().html_data.ajax.success;
            $sf$$1$$ && ($d$$11$$ = $sf$$1$$.call(this, $d$$11$$, $t$$11$$, $x$$58$$) || $d$$11$$);
            if("" === $d$$11$$ || $d$$11$$ && $d$$11$$.toString && "" === $d$$11$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$58$$, $t$$11$$, "")
            }
            $d$$11$$ ? ($d$$11$$ = $$$$17$$($d$$11$$), $d$$11$$.is("ul") || ($d$$11$$ = $$$$17$$("\x3cul /\x3e").append($d$$11$$)), -1 != $obj$$80$$ && $obj$$80$$ ? ($obj$$80$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$80$$.append($d$$11$$).children("ul").find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $obj$$80$$.removeData("oj-tree-is-loading")) : this.$_$container$.children("ul").empty().append($d$$11$$.children()).find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_clean_node$($obj$$80$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$80$$ && -1 !== $obj$$80$$ ? ($obj$$80$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$80$$.removeData("oj-tree-is-loading"), $s$$19$$.correct_state && (this.$_correct_state$($obj$$80$$), $s_call$$3$$ && $s_call$$3$$.call(this))) : 
            $s$$19$$.correct_state && (this.$_$container$.children("ul").empty(), $s_call$$3$$ && $s_call$$3$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"))
          }, $s$$19$$.ajax.context = this, $s$$19$$.ajax.error = $error_func$$1$$, $s$$19$$.ajax.success = $success_func$$1$$, $s$$19$$.ajax.dataType || ($s$$19$$.ajax.dataType = "html"), $$$$17$$.isFunction($s$$19$$.ajax.url) && ($s$$19$$.ajax.url = $s$$19$$.ajax.url.call(this, $obj$$80$$)), $$$$17$$.isFunction($s$$19$$.ajax.data) && ($s$$19$$.ajax.data = $s$$19$$.ajax.data.call(this, $obj$$80$$)), $$$$17$$.ajax($s$$19$$.ajax)
      }
    }, $_dnd_prepare$:function() {
      var $a$$61_vars$$ = this.$_data$.$dnd$.$vars$;
      if($a$$61_vars$$.$r$ && $a$$61_vars$$.$r$.length) {
        this.$_data$.$dnd$.off = $a$$61_vars$$.$r$.offset();
        this.$_isRtl$ && (this.$_data$.$dnd$.off.right = this.$_data$.$dnd$.off.left + $a$$61_vars$$.$r$.width());
        if(this.$_data$.$dnd$.$foreign$) {
          return $a$$61_vars$$ = this.options.dnd.drag_check.call(this, {o:$a$$61_vars$$.$o$, r:$a$$61_vars$$.$r$}), this.$_data$.$dnd$.after = $a$$61_vars$$.after, this.$_data$.$dnd$.before = $a$$61_vars$$.before, this.$_data$.$dnd$.inside = $a$$61_vars$$.inside, this.$_data$.$dnd$.$prepared$ = !0, this.$_dnd_show$()
        }
        this.$_prepare_move$($a$$61_vars$$.$o$, $a$$61_vars$$.$r$, "before");
        this.$_data$.$dnd$.before = this.check_move();
        this.$_prepare_move$($a$$61_vars$$.$o$, $a$$61_vars$$.$r$, "after");
        this.$_data$.$dnd$.after = this.check_move();
        this.$_is_loaded$($a$$61_vars$$.$r$) ? (this.$_prepare_move$($a$$61_vars$$.$o$, $a$$61_vars$$.$r$, "inside"), this.$_data$.$dnd$.inside = this.check_move()) : this.$_data$.$dnd$.inside = !1;
        this.$_data$.$dnd$.$prepared$ = !0;
        return this.$_dnd_show$()
      }
    }, $_dnd_show$:function() {
      var $dnd_pos$$9$$ = this.$_data$.$dnd$;
      if($dnd_pos$$9$$.$prepared$) {
        var $o$$4$$ = ["before", "inside", "after"], $r$$5$$ = !1, $ctl$$ = $dnd_pos$$9$$.$ctl$, $vars$$1$$ = $dnd_pos$$9$$.$vars$, $o$$4$$ = $dnd_pos$$9$$.$w$ < this.$_data$.$core$.$li_height$ / 3 ? ["before", "inside", "after"] : $dnd_pos$$9$$.$w$ <= 2 * this.$_data$.$core$.$li_height$ / 3 ? $dnd_pos$$9$$.$w$ < this.$_data$.$core$.$li_height$ / 2 ? ["inside", "before", "after"] : ["inside", "after", "before"] : ["after", "inside", "before"];
        $$$$17$$.each($o$$4$$, $$$$17$$.proxy(function($i$$236$$, $val$$45$$) {
          if(this.$_data$.$dnd$[$val$$45$$]) {
            return $ctl$$.$helper$.children("ins").attr("class", "oj-tree-ok"), $r$$5$$ = $val$$45$$, !1
          }
        }, this));
        !1 === $r$$5$$ && $ctl$$.$helper$.children("ins").attr("class", "oj-tree-invalid");
        $dnd_pos$$9$$ = this.$_isRtl$ ? this.$_data$.$dnd$.off.right - 18 : this.$_data$.$dnd$.off.left + 10;
        switch($r$$5$$) {
          case "before":
            $vars$$1$$.$m$.css({left:$dnd_pos$$9$$ + "px", top:this.$_data$.$dnd$.off.top - 6 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$dnd_pos$$9$$ + 8 + "px", top:this.$_data$.$dnd$.off.top - 1 + "px"}).show();
            break;
          case "after":
            $vars$$1$$.$m$.css({left:$dnd_pos$$9$$ + "px", top:this.$_data$.$dnd$.off.top + this.$_data$.$core$.$li_height$ - 6 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$dnd_pos$$9$$ + 8 + "px", top:this.$_data$.$dnd$.off.top + this.$_data$.$core$.$li_height$ - 1 + "px"}).show();
            break;
          case "inside":
            $vars$$1$$.$m$.css({left:$dnd_pos$$9$$ + (this.$_isRtl$ ? -4 : 4) + "px", top:this.$_data$.$dnd$.off.top + this.$_data$.$core$.$li_height$ / 2 - 5 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
            break;
          default:
            $vars$$1$$.$m$.hide(), $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide()
        }
        return $vars$$1$$.$last_pos$ = $r$$5$$
      }
    }, $_dnd_enter$:function($obj$$81_openTimeout_s$$20$$) {
      var $dnd$$1$$ = this.$_data$.$dnd$, $vars$$2$$ = $dnd$$1$$.$vars$;
      $dnd$$1$$.$mto$ && (clearTimeout($dnd$$1$$.$mto$), $dnd$$1$$.$mto$ = !1);
      $dnd$$1$$.$prepared$ = !1;
      $vars$$2$$.$r$ = this.$_getNode$($obj$$81_openTimeout_s$$20$$);
      $obj$$81_openTimeout_s$$20$$ = this.options.dnd;
      var $checkTimeout$$ = $obj$$81_openTimeout_s$$20$$.check_timeout;
      $checkTimeout$$ ? ($dnd$$1$$.$to1$ && clearTimeout($dnd$$1$$.$to1$), $dnd$$1$$.$to1$ = setTimeout($$$$17$$.proxy(this.$_dnd_prepare$, this), $checkTimeout$$)) : this.$_dnd_prepare$();
      ($obj$$81_openTimeout_s$$20$$ = $obj$$81_openTimeout_s$$20$$.open_timeout) ? ($dnd$$1$$.$to2$ && clearTimeout($dnd$$1$$.$to2$), $vars$$2$$.$r$ && ($vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-tree-closed")) && ($dnd$$1$$.$to2$ = setTimeout($$$$17$$.proxy(this.$_dnd_open$, this), $obj$$81_openTimeout_s$$20$$))) : $vars$$2$$.$r$ && ($vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-tree-closed")) && this.$_dnd_open$()
    }, $_dnd_leave$:function($e$$82$$) {
      var $dnd$$2$$ = this.$_data$.$dnd$, $vars$$3$$ = this.$_data$.$dnd$.$vars$;
      $dnd$$2$$.after = !1;
      $dnd$$2$$.before = !1;
      $dnd$$2$$.inside = !1;
      this.$_data$.$dnd$.$ctl$.$helper$.children("ins").attr("class", "oj-tree-invalid");
      $vars$$3$$.$m$.hide();
      $vars$$3$$.$ml$ && $vars$$3$$.$ml$.hide();
      $vars$$3$$.$r$ && $vars$$3$$.$r$[0] === $e$$82$$.target.parentNode && ($dnd$$2$$.$to1$ && (clearTimeout($dnd$$2$$.$to1$), $dnd$$2$$.$to1$ = !1), $dnd$$2$$.$to2$ && (clearTimeout($dnd$$2$$.$to2$), $dnd$$2$$.$to2$ = !1))
    }, $_dnd_open$:function() {
      var $vars$$4$$ = this.$_data$.$dnd$.$vars$;
      this.$_data$.$dnd$.$to2$ = !1;
      this.expand($vars$$4$$.$r$, $$$$17$$.proxy(this.$_dnd_prepare$, this), !0)
    }, $_dnd_finish$:function($e$$83$$) {
      var $dnd$$3$$ = this.$_data$.$dnd$, $vars$$5$$ = this.$_data$.$dnd$.$vars$;
      $dnd$$3$$.$foreign$ ? ($dnd$$3$$.after || $dnd$$3$$.before || $dnd$$3$$.inside) && this.options.dnd.drag_finish.call(this, {o:$vars$$5$$.$o$, r:$vars$$5$$.$r$, p:$vars$$5$$.$last_pos$}) : (this.$_dnd_prepare$(), this.$_move_node$($vars$$5$$.$o$, $vars$$5$$.$r$, $vars$$5$$.$last_pos$, $e$$83$$[this.options.dnd.copy_modifier + "Key"]));
      $vars$$5$$.$o$ = !1;
      $vars$$5$$.$r$ = !1;
      $vars$$5$$.$m$.hide();
      $vars$$5$$.$ml$ && $vars$$5$$.$ml$.hide()
    }, $_start_drag$:function($obj$$82$$, $e$$84$$) {
      var $dnd$$4$$ = this.$_data$.$dnd$, $vars$$6$$ = this.$_data$.$dnd$.$vars$;
      $vars$$6$$.$o$ = this.$_getNode$($obj$$82$$);
      this.$_data$.ui && this.isSelected($vars$$6$$.$o$) && ($vars$$6$$.$o$ = this.$_getNode$(null, !0));
      var $dt$$ = 1 < $vars$$6$$.$o$.length ? this.$getTranslatedString$("m_multisel") : this.getText($vars$$6$$.$o$), $cnt$$ = this.$_$container$;
      this.options.html_titles || ($dt$$ = $dt$$.replace(/</ig, "\x26lt;").replace(/>/ig, "\x26gt;"));
      this.$_drag_start$($e$$84$$, {$jstree$:!0, $obj$:$vars$$6$$.$o$}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $dt$$);
      this.$_data$.$themes$ && ($vars$$6$$.$m$ && $vars$$6$$.$m$.attr("class", "oj-tree-" + this.$_data$.$themes$.$theme$), $dnd$$4$$.$ctl$.$helper$.attr("class", "oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
      $dnd$$4$$.$cof$ = $cnt$$.offset();
      $dnd$$4$$.$cw$ = parseInt($cnt$$.width(), 10);
      $dnd$$4$$.ch = parseInt($cnt$$.height(), 10);
      $dnd$$4$$.active = !0
    }, $_drag_start$:function($e$$85$$, $data$$111$$, $html$$4$$) {
      var $ctl$$1$$ = this.$_data$.$dnd$.$ctl$;
      $ctl$$1$$.$is_drag$ && this.$_drag_stop$();
      try {
        $e$$85$$.currentTarget.unselectable = "on", $e$$85$$.currentTarget.onselectstart = $JSCompiler_returnArg$$(!1), $e$$85$$.currentTarget.style && ($e$$85$$.currentTarget.style.MozUserSelect = "none")
      }catch($err$$6$$) {
      }
      $ctl$$1$$.$init_x$ = $e$$85$$.pageX;
      $ctl$$1$$.$init_y$ = $e$$85$$.pageY;
      $ctl$$1$$.$user_data$ = $data$$111$$;
      $ctl$$1$$.$is_down$ = !0;
      $ctl$$1$$.$helper$ = $$$$17$$("\x3cdiv id\x3d'ojtreeu-dragged' /\x3e").html($html$$4$$);
      $$$$17$$(document).bind("mousemove", this.$_drag$.bind(this));
      $$$$17$$(document).bind("mouseup", this.$_drag_stop$.bind(this));
      return!1
    }, $_drag$:function($e$$86$$) {
      var $ctl$$2$$ = this.$_data$.$dnd$.$ctl$, $vars$$7$$ = this.$_data$.$dnd$.$vars$;
      if($ctl$$2$$.$is_down$) {
        if(!$ctl$$2$$.$is_drag$) {
          if(5 < Math.abs($e$$86$$.pageX - $ctl$$2$$.$init_x$) || 5 < Math.abs($e$$86$$.pageY - $ctl$$2$$.$init_y$)) {
            $ctl$$2$$.$helper$.appendTo("body"), $ctl$$2$$.$is_drag$ = !0, $$$$17$$(document).triggerHandler("drag_start.ojtreeu", [{event:$e$$86$$, data:$ctl$$2$$.$user_data$}])
          }else {
            return
          }
        }
        if("mousemove" === $e$$86$$.type) {
          var $d$$12_l$$9$$ = $$$$17$$(document), $t$$12$$ = $d$$12_l$$9$$.scrollTop(), $d$$12_l$$9$$ = $d$$12_l$$9$$.scrollLeft();
          20 > $e$$86$$.pageY - $t$$12$$ ? ($vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "up", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$17$$(document).scrollTop($$$$17$$(document).scrollTop() - $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $$$$17$$(window).height() - ($e$$86$$.pageY - $t$$12$$) ? ($vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "down", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$17$$(document).scrollTop(Number($$$$17$$(document).scrollTop()) + $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $e$$86$$.pageX - $d$$12_l$$9$$ ? ($vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "left", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$17$$(document).scrollLeft($$$$17$$(document).scrollLeft() - $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0);
          20 > $$$$17$$(window).width() - ($e$$86$$.pageX - $d$$12_l$$9$$) ? ($vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "right", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$17$$(document).scrollLeft(Number($$$$17$$(document).scrollLeft()) + $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0)
        }
        $ctl$$2$$.$helper$.css({left:$e$$86$$.pageX + $ctl$$2$$.$helper_left$ + "px", top:$e$$86$$.pageY + $ctl$$2$$.$helper_top$ + "px"});
        $$$$17$$(document).triggerHandler("drag.ojtreeu", [{event:$e$$86$$, data:$ctl$$2$$.$user_data$}])
      }
    }, $_drag_stop$:function($e$$87$$) {
      var $vars$$8$$ = this.$_data$.$dnd$.$vars$, $ctl$$3$$ = this.$_data$.$dnd$.$ctl$;
      $vars$$8$$.$sli$ && clearInterval($vars$$8$$.$sli$);
      $vars$$8$$.$sti$ && clearInterval($vars$$8$$.$sti$);
      $$$$17$$(document).unbind("mousemove", this.$_drag$.bind(this));
      $$$$17$$(document).unbind("mouseup", this.$_drag_stop$.bind(this));
      $$$$17$$(document).triggerHandler("drag_stop.ojtreeu", [{event:$e$$87$$ ? $e$$87$$ : {}, data:$ctl$$3$$.$user_data$}]);
      $ctl$$3$$.$helper$.remove();
      $ctl$$3$$.$init_x$ = 0;
      $ctl$$3$$.$init_y$ = 0;
      $ctl$$3$$.$user_data$ = {};
      $ctl$$3$$.$is_down$ = !1;
      $ctl$$3$$.$is_drag$ = !1
    }, $_save_opened$:function() {
      var $_this$$15$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-tree-open").each(function() {
        this.id && $_this$$15$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
      });
      this.$_emitEvent$($_this$$15$$.$_data$.$core$.$toExpand$, "save_opened")
    }, $_reload_nodes$:function($bExpandAll_is_callback$$1$$) {
      var $_this$$16$$ = this, $done$$ = !0, $current$$7$$ = [], $remaining$$ = [];
      $bExpandAll_is_callback$$1$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0, ($bExpandAll_is_callback$$1$$ = "all" === this.$_data$.$core$.$toExpand$) ? this.$_data$.$core$.$toExpand$ = [] : "array" === $$$$17$$.type(this.$_data$.$core$.$toExpand$) && (0 < this.$_data$.$core$.$toExpand$.length && "all" === this.$_data$.$core$.$toExpand$[0]) && (this.$_data$.$core$.$toExpand$.length = 0, $bExpandAll_is_callback$$1$$ = !0), $bExpandAll_is_callback$$1$$ && this.$_$container_ul$.find("li.oj-tree-closed").each(function() {
        $$$$17$$(this).attr("id");
        $_this$$16$$.$_data$.$core$.$toExpand$.push("#" + $$$$17$$(this).attr("id"))
      }), this.$_data$.$core$.$toExpand$ = $$$$17$$.map($$$$17$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$26$$) {
        return"#" + $n$$26$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
      }), this.$_data$.$core$.$toLoad$ = $$$$17$$.map($$$$17$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$27$$) {
        return"#" + $n$$27$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
      }), this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$)));
      this.$_data$.$core$.$toLoad$.length && ($$$$17$$.each(this.$_data$.$core$.$toLoad$, function($i$$237$$, $val$$46$$) {
        if("#" == $val$$46$$) {
          return!0
        }
        $$$$17$$($val$$46$$).length ? $current$$7$$.push($val$$46$$) : $remaining$$.push($val$$46$$)
      }), $current$$7$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$, $$$$17$$.each($current$$7$$, function($i$$238$$, $val$$47$$) {
        $_this$$16$$.$_is_loaded$($val$$47$$) || ($_this$$16$$.$_load_node$($val$$47$$, function() {
          $_this$$16$$.$_reload_nodes$(!0)
        }, function() {
          $_this$$16$$.$_reload_nodes$(!0)
        }), $done$$ = !1)
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$17$$.each(this.$_data$.$core$.$toExpand$, function($i$$239$$, $val$$48$$) {
        $_this$$16$$.expand($val$$48$$, !1, !0)
      });
      $done$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$16$$.$_emitEvent$({}, "reload_nodes")
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$())
    }, set_theme:function($theme_name$$, $theme_url$$) {
      if(!$theme_name$$) {
        return!1
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$17$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.show_dots() : this.hide_dots();
      this.$_data$.$themes$.icons ? this.show_icons() : this.hide_icons();
      this.$_emitEvent$(null, "set_theme")
    }, show_dots:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots")
    }, hide_dots:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots")
    }, toggle_dots:function() {
      this.$_data$.$themes$.$dots$ ? this.hide_dots() : this.show_dots()
    }, isIcons:function() {
      return this.$_data$.$themes$.icons
    }, show_icons:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons")
    }, hide_icons:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons")
    }, toggle_icons:function() {
      this.data.$themes$.icons ? this.hide_icons() : this.show_icons()
    }, $_execKey$:function($t$$13$$, $key$$92_tmp$$6$$, $event$$212$$) {
      if($t$$13$$.$_data$.keys.enabled && ($key$$92_tmp$$6$$ = $t$$13$$.$_keyHandler$[$key$$92_tmp$$6$$])) {
        return $key$$92_tmp$$6$$.call($t$$13$$, $event$$212$$)
      }
    }, $_enableKeys$:function() {
      this.$_data$.keys.enabled = !0
    }, $_disableKeys$:function() {
      this.$_data$.keys.enabled = !1
    }, $_initWidget$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initCrrmOpts$();
      this.$_initJsonOpts$();
      this.$_initTypeOpts$();
      this.$_initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initJsonData$();
      this.$_initHtmlData$();
      this.$_initTypes$();
      this.$_initDnD$();
      this.$_initKeys$();
      this.$_initMenu$();
      this.$_start$()
    }, $_emitEvent$:function($data$$112$$, $eventname$$) {
      if($eventname$$ && "string" === $$$$17$$.type($eventname$$)) {
        var $args$$14_rslt$$;
        $args$$14_rslt$$ = Array.prototype.slice.call(arguments);
        var $evname_s$$inline_707$$ = $eventname$$, $inst$$ = this.$_$container$, $isBefore$$ = "before" === $eventname$$, $b$$inline_710_isPublic$$ = !1, $item$$10$$;
        if(!0 !== this.$_data$.$core$.locked || "unlock" === $eventname$$ || "isLocked" === $eventname$$ || "lock" === $eventname$$) {
          $isBefore$$ || ($evname_s$$inline_707$$ = $eventname$$, "expandAll" === $evname_s$$inline_707$$ ? $evname_s$$inline_707$$ = "expandall" : "collapseAll" === $evname_s$$inline_707$$ ? $evname_s$$inline_707$$ = "collapseall" : "deselectAll" === $evname_s$$inline_707$$ ? $evname_s$$inline_707$$ = "deselectall" : "rename_node" === $evname_s$$inline_707$$ ? $evname_s$$inline_707$$ = "rename" : "set_focus" === $evname_s$$inline_707$$ ? $evname_s$$inline_707$$ = "focus" : "unset_focus" === $evname_s$$inline_707$$ ? 
          $evname_s$$inline_707$$ = "unfocus" : "delete_node" === $evname_s$$inline_707$$ ? $evname_s$$inline_707$$ = "delete" : "move_node" === $evname_s$$inline_707$$ ? $evname_s$$inline_707$$ = "move" : "create_node" === $evname_s$$inline_707$$ && ($evname_s$$inline_707$$ = "create"), ($b$$inline_710_isPublic$$ = 0 <= $$$$17$$.inArray($evname_s$$inline_707$$, $_aEvNames$$)) || "create_node" != $evname_s$$inline_707$$ || ($b$$inline_710_isPublic$$ = !0));
          $b$$inline_710_isPublic$$ || ($evname_s$$inline_707$$ = "tree" + $evname_s$$inline_707$$);
          $item$$10$$ = $data$$112$$ ? $data$$112$$.obj : void 0;
          "loaded" === $evname_s$$inline_707$$ && ($item$$10$$ = -1);
          var $eventdata$$ = {};
          $eventdata$$.item = $item$$10$$;
          $eventdata$$.inst = $inst$$;
          $isBefore$$ ? ($eventdata$$.func = $data$$112$$.func, $eventdata$$.args = $args$$14_rslt$$) : $b$$inline_710_isPublic$$ && ("move" == $evname_s$$inline_707$$ ? ($eventdata$$.position = $data$$112$$.$p$, $eventdata$$.reference = $data$$112$$.$r$, $eventdata$$.data = $data$$112$$) : "rename" == $evname_s$$inline_707$$ ? ($eventdata$$.title = $data$$112$$.name, delete $eventdata$$.name) : "remove" == $evname_s$$inline_707$$ ? ($eventdata$$.parent = $data$$112$$.parent, $eventdata$$.prev = 
          $data$$112$$.prev) : "delete" == $evname_s$$inline_707$$ && ($eventdata$$.prev = $data$$112$$.prev, $eventdata$$.parent = $data$$112$$.parent));
          console.log("JRM-\x3e Event (" + $eventname$$ + ")  " + $evname_s$$inline_707$$ + " isPublic\x3d" + $b$$inline_710_isPublic$$ + ($isBefore$$ ? " isBefore\x3dtrue - " + $eventdata$$.func : ""));
          if($b$$inline_710_isPublic$$) {
            if($args$$14_rslt$$ = this._trigger($evname_s$$inline_707$$, new $$$$17$$.Event("oj" + $evname_s$$inline_707$$), $eventdata$$), $isBefore$$) {
              return"undefined" != typeof $args$$14_rslt$$ && ($args$$14_rslt$$ = $args$$14_rslt$$ ? !0 : !1), $args$$14_rslt$$
            }
          }else {
            this.$_$container$.trigger($evname_s$$inline_707$$, $eventdata$$)
          }
        }
      }
    }, $__rollback$:function() {
      return this.get_rollback()
    }, $__call_old$:$JSCompiler_emptyFn$$(), $_start$:function() {
      this.$set_focus$();
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + "\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$getTranslatedString$("m_loading") + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_index$);
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-tree-closed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_$container$.delegate(".oj-tree-list li \x3e ins", "click.ojtree", $$$$17$$.proxy(function($event$$213_trgt$$) {
        $event$$213_trgt$$ = $$$$17$$($event$$213_trgt$$.target);
        this.toggleExpand($event$$213_trgt$$)
      }, this)).bind("mousedown.ojtree", $$$$17$$.proxy(function() {
        this.$set_focus$()
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$2$$;
        if(document.selection && document.selection.empty) {
          document.selection.empty()
        }else {
          if(window.getSelection) {
            $sel$$2$$ = window.getSelection();
            try {
              $sel$$2$$.removeAllRanges(), $sel$$2$$.collapse(document.getElementsByTagName("body")[0], 0)
            }catch($err$$7$$) {
            }
          }
        }
      });
      this.$_data$.$core$.$notify_plugins$ && this.$_$container$.bind("treeload_node", $$$$17$$.proxy(function($e$$88$$, $ui$$9$$) {
        var $o$$5$$ = this.$_getNode$($ui$$9$$.item), $t$$14$$ = this;
        -1 === $o$$5$$ && ($o$$5$$ = this.$_$container_ul$);
        $o$$5$$.length && $o$$5$$.find("li").each(function() {
          var $th$$ = $$$$17$$(this);
          $th$$.data("oj-tree") && $$$$17$$.each($th$$.data("oj-tree"), function($plugin$$, $values$$12$$) {
            $th$$.data[$plugin$$] && $$$$17$$.isFunction($t$$14$$["_" + $plugin$$ + "_notify"]) && $t$$14$$["_" + $plugin$$ + "_notify"].call($t$$14$$, $th$$, $values$$12$$)
          })
        })
      }, this));
      this.$_data$.$core$.$load_open$ && this.$_$container$.bind("treeload_node", $$$$17$$.proxy(function($e$$89$$, $ui$$10$$) {
        var $o$$6$$ = this.$_getNode$($ui$$10$$.item);
        -1 === $o$$6$$ && ($o$$6$$ = this.$_$container_ul$);
        $o$$6$$.length && $o$$6$$.find("li.oj-tree-open:not(:has(ul))").each(function() {
          this.$_load_node$(this, $$$$17$$.noop, $$$$17$$.noop)
        })
      }, this));
      this.$_emitEvent$({}, "init");
      this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$()
      })
    }, $_initCore$:function() {
      $_translated$$ || ($_defaultMenu$$ = $_defaultMenu$$.replace("{create}", this.$getTranslatedString$("m_create")), $_defaultMenu$$ = $_defaultMenu$$.replace("{rename}", this.$getTranslatedString$("m_rename")), $_defaultMenu$$ = $_defaultMenu$$.replace("{remove}", this.$getTranslatedString$("m_remove")), $_defaultMenu$$ = $_defaultMenu$$.replace("{edit}", this.$getTranslatedString$("m_edit")), $_defaultMenu$$ = $_defaultMenu$$.replace("{cut}", this.$getTranslatedString$("m_cut")), $_defaultMenu$$ = 
      $_defaultMenu$$.replace("{copy}", this.$getTranslatedString$("m_copy")), $_defaultMenu$$ = $_defaultMenu$$.replace("{paste}", this.$getTranslatedString$("m_paste")), $_translated$$ = !0);
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_index$);
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)")
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$17$$();
      this.$_data$.ui.$last_selected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$17$$.proxy(function($event$$215$$) {
        $event$$215$$.preventDefault();
        $event$$215$$.currentTarget.blur();
        $$$$17$$($event$$215$$.currentTarget).hasClass("oj-tree-loading") || this.$_select$($event$$215$$.currentTarget, !0, $event$$215$$)
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$17$$.proxy(function($event$$216$$) {
        $$$$17$$($event$$216$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$216$$.target)
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$17$$.proxy(function($event$$217$$) {
        $$$$17$$($event$$217$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$217$$.target)
      }, this)).bind("treereopen", $$$$17$$.proxy(function() {
        this.reselect()
      }, this)).bind("treeget_rollback", $$$$17$$.proxy(function() {
        this.dehover();
        this.save_selected()
      }, this)).bind("treeset_rollback", $$$$17$$.proxy(function() {
        this.reselect()
      }, this)).bind("ojcollapse", $$$$17$$.proxy(function($event$$218$$, $ui$$11$$) {
        var $obj$$83$$ = this.$_getNode$($ui$$11$$.item), $clk$$ = $obj$$83$$ && $obj$$83$$.length ? $obj$$83$$.children("ul").find("a.oj-tree-clicked") : $$$$17$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$83$$)
        })
      }, this)).bind("ojdelete", $$$$17$$.proxy(function($event$$219$$, $ui$$12$$) {
        var $s$$21$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$84$$ = this.$_getNode$($ui$$12$$.item), $clk$$1_obj$$84$$ = $clk$$1_obj$$84$$ && $clk$$1_obj$$84$$.length ? $clk$$1_obj$$84$$.find("a.oj-tree-clicked") : [], $_this$$18$$ = this;
        $clk$$1_obj$$84$$.each(function() {
          $_this$$18$$.deselect(this)
        });
        $s$$21$$ && $clk$$1_obj$$84$$.length && $ui$$12$$.prev.each(function() {
          if(this.parentNode) {
            return $_this$$18$$.select(this), !1
          }
        })
      }, this)).bind("ojmove", $$$$17$$.proxy(function($event$$220$$, $ui$$13$$) {
        var $data$$113$$ = $ui$$13$$.data;
        $data$$113$$.cy && ($data$$113$$.oc.find("a.oj-tree-clicked").removeClass("oj-tree-clicked"), $data$$113$$.oc.removeAttr("aria-selected"))
      }, this))
    }, $_initJsonData$:function() {
      var $s$$22$$ = this.options.json_data;
      $s$$22$$ && ($s$$22$$.progressive_unload && this.$_$container$.bind("treeafter_close", function($e$$90$$, $ui$$14$$) {
        $ui$$14$$.item.children("ul").remove()
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$)
    }, $_initHtmlData$:function() {
      var $opts$$19$$ = this.options.html_data, $ot$$ = $$$$17$$.type($opts$$19$$);
      "undefined" == $ot$$ || "boolean" == $ot$$ && !$opts$$19$$ || "boolean" != $ot$$ && "object" != $ot$$ || (this.$_data$.html.$useExistingMarkup$ = !0, this.$_data$.html.$originalContainerHtml$ = this.$_$container$.find(" \x3e ul \x3e li").clone(!0), this.$_data$.html.$originalContainerHtml$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType
      }).remove(), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$)
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$17$$("script").each(function() {
        if(this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("treeinit", $$$$17$$.proxy(function() {
        var $s$$23$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$23$$.dots;
        this.$_data$.$themes$.icons = $s$$23$$.icons;
        this.set_theme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url)
      }, this)).bind("ojloaded", $$$$17$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.show_dots() : this.hide_dots();
        this.$_data$.$themes$.icons ? this.show_icons() : this.hide_icons()
      }, this))
    }, $_initTypes$:function() {
      var $s$$24$$ = this.options.types;
      $s$$24$$ && this.$_$container$.bind("treeinit", $$$$17$$.proxy(function() {
        var $attr$$18$$ = $s$$24$$.attr || this.$_data$.types.$defaults$.type_attr, $icons_css$$ = "", $_this$$19$$ = this;
        $$$$17$$.each($s$$24$$.types, function($i$$240$$, $tp$$) {
          $$$$17$$.each($tp$$, function($k$$9$$) {
            /^(max_depth|max_children|icon|valid_children)$/.test($k$$9$$) || $_this$$19$$.$_data$.types.$attach_to$.push($k$$9$$)
          });
          if(!$tp$$.icon) {
            if($tp$$.image || $tp$$.position) {
              $tp$$.icon = {}, $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image), void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position)
            }else {
              return!0
            }
          }
          if($tp$$.icon.image || $tp$$.icon.position) {
            $icons_css$$ = "default" == $i$$240$$ ? $icons_css$$ + (".oj-tree-" + $_this$$19$$.$_index$ + " a \x3e .oj-tree-icon { ") : $icons_css$$ + (".oj-tree-" + $_this$$19$$.$_index$ + " li[" + $attr$$18$$ + '\x3d"' + $i$$240$$ + '"] \x3e a \x3e .oj-tree-icon { '), $tp$$.icon.image && ($icons_css$$ += " background-image:url(" + $tp$$.icon.image + "); "), $icons_css$$ = $tp$$.icon.position ? $icons_css$$ + (" background-position:" + $tp$$.icon.position + "; ") : $icons_css$$ + " background-position:0 0; ", 
            $icons_css$$ += "} "
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"})
      }, this)).bind("ojbefore", $$$$17$$.proxy(function($e$$91$$, $data$$114$$) {
        var $d$$13_o$$7_s$$25$$, $t$$16$$;
        if(($d$$13_o$$7_s$$25$$ = ($d$$13_o$$7_s$$25$$ = this.options.types.use_data ? this.$_getNode$($data$$114$$.args[0]) : !1) && -1 !== $d$$13_o$$7_s$$25$$ && $d$$13_o$$7_s$$25$$.length ? $d$$13_o$$7_s$$25$$.data("oj-tree") : !1) && $d$$13_o$$7_s$$25$$.types && !1 === $d$$13_o$$7_s$$25$$.types.data.func || -1 !== $$$$17$$.inArray($data$$114$$.func, this.$_data$.types.$attach_to$) && ($data$$114$$.args[0] && ($data$$114$$.args[0].tagName || $data$$114$$.args[0].jquery)) && ($d$$13_o$$7_s$$25$$ = 
        this.options.types.types, $t$$16$$ = this.$_getType$($data$$114$$.args[0]), ($d$$13_o$$7_s$$25$$[$t$$16$$] && "undefined" !== typeof $d$$13_o$$7_s$$25$$[$t$$16$$][$data$$114$$.func] || $d$$13_o$$7_s$$25$$["default"] && "undefined" !== typeof $d$$13_o$$7_s$$25$$["default"][$data$$114$$.func]) && !1 === this._check($data$$114$$.func, $data$$114$$.args[0]))) {
          return $e$$91$$.stopImmediatePropagation(), !1
        }
      }, this))
    }, $_initDnD$:function() {
      if(this.$_data$.$dnd$.reorder) {
        $_addSheet$$({$str$:'#ojtreeu-dragged { display:block; margin:0 0 0 0; padding:4px 4px 4px 24px; position:absolute; top:-2000px; line-height:16px; z-index:10000; } #ojtreeu-dragged ins { display:block; text-decoration:none; width:16px; height:16px; margin:0 0 0 0; padding:0; position:absolute; top:4px; left:4px;  -moz-border-radius:4px; border-radius:4px; -webkit-border-radius:4px; } #oj-tree-marker { padding:0; margin:0; font-size:12px; overflow:hidden; height:12px; width:8px; position:absolute; top:-30px; z-index:10001; background-repeat:no-repeat; display:none; background-color:transparent; text-shadow:1px 1px 1px white; color:black; line-height:10px; background:url("css/libs/oj/v1.0/alta/images/d.png") -41px -57px no-repeat !important; text-indent:-100px; } #ojtreeu-dragged .oj-tree-ok { background:url("css/libs/oj/v1.0/alta/images/d.png") -2px -53px no-repeat !important; } #ojtreeu-dragged .oj-tree-invalid { background:url("css/libs/oj/v1.0/alta/images/d.png") -18px -53px no-repeat !important; } #oj-tree-marker-line { padding:0; margin:0; line-height:0%; font-size:1px; overflow:hidden; height:1px; width:100px; position:absolute; top:-30px; z-index:10000; background-repeat:no-repeat; display:none; background-color:#456c43;  cursor:pointer; border:1px solid #eeeeee; border-left:0; -moz-box-shadow: 0px 0px 2px #666; -webkit-box-shadow: 0px 0px 2px #666; box-shadow: 0px 0px 2px #666;  -moz-border-radius:1px; border-radius:1px; -webkit-border-radius:1px; }', 
        title:"oj-tree"}, !0);
        var $s$$26_vars$$9$$ = this.$_data$.$dnd$.$vars$;
        $s$$26_vars$$9$$.$m$ = $$$$17$$("\x3cdiv /\x3e").attr({id:"oj-tree-marker"}).hide().html("\x26raquo;").bind("mouseleave mouseenter", $$$$17$$.proxy(function($e$$92$$) {
          var $vars$$10$$ = this.$_data$.$dnd$.$vars$;
          $vars$$10$$.$m$.hide();
          $vars$$10$$.$ml$.hide();
          $e$$92$$.preventDefault();
          $e$$92$$.stopImmediatePropagation();
          return!1
        }, this)).appendTo("body");
        $s$$26_vars$$9$$.$ml$ = $$$$17$$("\x3cdiv /\x3e").attr({id:"oj-tree-marker-line"}).hide().bind("mouseup", function($e$$93$$) {
          var $vars$$11$$ = this.$_data$.$dnd$.$vars$;
          if($vars$$11$$.$r$ && $vars$$11$$.$r$.length) {
            return $vars$$11$$.$r$.children("a").trigger($e$$93$$), $e$$93$$.preventDefault(), $e$$93$$.stopImmediatePropagation(), !1
          }
        }).bind("mouseleave", $$$$17$$.proxy(function($e$$94$$) {
          var $vars$$12$$ = this.$_data$.$dnd$.$vars$, $rt$$ = $$$$17$$($e$$94$$.relatedTarget);
          if(($rt$$.is(".oj-tree") || 0 === $rt$$.closest(".oj-tree").length) && $vars$$12$$.$r$ && $vars$$12$$.$r$.length) {
            return $vars$$12$$.$r$.children("a").trigger($e$$94$$), $vars$$12$$.$m$.hide(), $vars$$12$$.$ml$.hide(), $e$$94$$.preventDefault(), $e$$94$$.stopImmediatePropagation(), !1
          }
        }, this)).appendTo("body");
        $$$$17$$(document).bind("drag_start.ojtreeu", $$$$17$$.proxy(function($e$$95$$, $data$$115$$) {
          var $vars$$13$$ = this.$_data$.$dnd$.$vars$;
          $data$$115$$.data.$jstree$ && ($vars$$13$$.$m$.show(), $vars$$13$$.$ml$ && $vars$$13$$.$ml$.show())
        }, this));
        $$$$17$$(document).bind("drag_stop.ojtreeu", $$$$17$$.proxy(function($e$$96$$, $data$$116$$) {
          var $vars$$14$$ = this.$_data$.$dnd$.$vars$;
          $data$$116$$.data.$jstree$ && ($vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide())
        }, this));
        this.$_$container$.bind("mouseenter.ojtree", $$$$17$$.proxy(function($e$$97_tr$$) {
          var $ctl$$4$$ = this.$_data$.$dnd$.$ctl$, $dc_vars$$15$$ = this.$_data$.$dnd$.$vars$;
          $ctl$$4$$.$is_drag$ && $ctl$$4$$.$user_data$.$jstree$ && (this.options.themes && ($dc_vars$$15$$.$m$.attr("class", "oj-tree-" + this.$_data$.$themes$.$theme$), $dc_vars$$15$$.$ml$ && $dc_vars$$15$$.$ml$.attr("class", "oj-tree-" + this.$_data$.$themes$.$theme$), $ctl$$4$$.$helper$.attr("class", "oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$)), $e$$97_tr$$.currentTarget === $e$$97_tr$$.target && ($ctl$$4$$.$user_data$.$obj$ && $$$$17$$($ctl$$4$$.$user_data$.$obj$).length && 
          $$$$17$$($ctl$$4$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== $e$$97_tr$$.target) && ($e$$97_tr$$ = this.$_reference$($e$$97_tr$$.target), $e$$97_tr$$.data.$dnd$.$foreign$ ? ($dc_vars$$15$$ = $e$$97_tr$$.options.dnd.drag_check.call(this, {o:$dc_vars$$15$$.$o$, r:$e$$97_tr$$.$_$container$, is_root:!0}), !0 !== $dc_vars$$15$$ && !0 !== $dc_vars$$15$$.inside && !0 !== $dc_vars$$15$$.before && !0 !== $dc_vars$$15$$.after || $ctl$$4$$.$helper$.children("ins").attr("class", "oj-tree-ok")) : 
          ($e$$97_tr$$.$_prepare_move$($dc_vars$$15$$.$o$, $e$$97_tr$$.$_$container$, "last"), $e$$97_tr$$.check_move() && $ctl$$4$$.$helper$.children("ins").attr("class", "oj-tree-ok"))))
        }, this)).bind("mouseup.ojtree", $$$$17$$.proxy(function($dc$$1_e$$98$$) {
          var $vars$$16$$ = this.$_data$.$dnd$.$vars$, $ctl$$5_tr$$1$$ = this.$_data$.$dnd$.$ctl$;
          $ctl$$5_tr$$1$$.$is_drag$ && ($ctl$$5_tr$$1$$.$user_data$.$jstree$ && $dc$$1_e$$98$$.currentTarget === $dc$$1_e$$98$$.target && $ctl$$5_tr$$1$$.$user_data$.$obj$ && $$$$17$$($ctl$$5_tr$$1$$.$user_data$.$obj$).length && $$$$17$$($ctl$$5_tr$$1$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== $dc$$1_e$$98$$.target) && ($ctl$$5_tr$$1$$ = this.$_reference$($dc$$1_e$$98$$.currentTarget), $ctl$$5_tr$$1$$.data.dnd.foreign ? ($dc$$1_e$$98$$ = $ctl$$5_tr$$1$$.$_getOptions$().dnd.drag_check.call(this, 
          {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$1$$.$_$container$, is_root:!0}), !0 !== $dc$$1_e$$98$$ && !0 !== $dc$$1_e$$98$$.inside && !0 !== $dc$$1_e$$98$$.before && !0 !== $dc$$1_e$$98$$.after || $ctl$$5_tr$$1$$.$_getOptions$().dnd.drag_finish.call(this, {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$1$$.$_$container$, is_root:!0})) : $ctl$$5_tr$$1$$.$_move_node$($vars$$16$$.$o$, $ctl$$5_tr$$1$$.$_$container$, "last", $dc$$1_e$$98$$[$ctl$$5_tr$$1$$.options.dnd.copy_modifier + "Key"]))
        }, this)).bind("mouseleave.ojtree", $$$$17$$.proxy(function($e$$99$$) {
          var $ctl$$6$$ = this.$_data$.$dnd$.$ctl$;
          if($e$$99$$.relatedTarget && $e$$99$$.relatedTarget.id && "oj-tree-marker-line" === $e$$99$$.relatedTarget.id) {
            return!1
          }
          $ctl$$6$$.$is_drag$ && $ctl$$6$$.$user_data$.$jstree$ && (this.$_data$.$dnd$.$i1$ && clearInterval(this.$_data$.$dnd$.$i1$), this.$_data$.$dnd$.$i2$ && clearInterval(this.$_data$.$dnd$.$i2$), this.$_data$.$dnd$.$to1$ && clearTimeout(this.$_data$.$dnd$.$to1$), this.$_data$.$dnd$.$to2$ && clearTimeout(this.$_data$.$dnd$.$to2$), $ctl$$6$$.$helper$.children("ins").hasClass("oj-tree-ok") && $ctl$$6$$.$helper$.children("ins").attr("class", "oj-tree-invalid"))
        }, this)).bind("mousemove.ojtree", $$$$17$$.proxy(function($e$$100$$) {
          var $ctl$$7$$ = this.$_data$.$dnd$.$ctl$;
          if($ctl$$7$$.$is_drag$ && $ctl$$7$$.$user_data$.$jstree$) {
            var $cnt$$1$$ = this.$_$container$[0];
            $e$$100$$.pageX + 24 > this.$_data$.$dnd$.$cof$.left + this.$_data$.$dnd$.$cw$ ? (this.$_data$.$dnd$.$i1$ && clearInterval(this.$_data$.$dnd$.$i1$), this.$_data$.$dnd$.$i1$ = setInterval($$$$17$$.proxy(function() {
              this.scrollLeft += $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : $e$$100$$.pageX - 24 < this.$_data$.$dnd$.$cof$.left ? (this.$_data$.$dnd$.$i1$ && clearInterval(this.$_data$.$dnd$.$i1$), this.$_data$.$dnd$.$i1$ = setInterval($$$$17$$.proxy(function() {
              this.scrollLeft -= $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : this.$_data$.$dnd$.$i1$ && clearInterval(this.$_data$.$dnd$.$i1$);
            $e$$100$$.pageY + 24 > this.$_data$.$dnd$.$cof$.top + this.$_data$.$dnd$.ch ? (this.$_data$.$dnd$.$i2$ && clearInterval(this.$_data$.$dnd$.$i2$), this.$_data$.$dnd$.$i2$ = setInterval($$$$17$$.proxy(function() {
              this.scrollTop += $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : $e$$100$$.pageY - 24 < this.$_data$.$dnd$.$cof$.top ? (this.$_data$.$dnd$.$i2$ && clearInterval(this.$_data$.$dnd$.$i2$), this.$_data$.$dnd$.$i2$ = setInterval($$$$17$$.proxy(function() {
              this.scrollTop -= $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : this.$_data$.$dnd$.$i2$ && clearInterval(this.$_data$.$dnd$.$i2$)
          }
        }, this)).bind("scroll.ojtree", $$$$17$$.proxy(function() {
          var $ctl$$8$$ = this.$_data$.$dnd$.$ctl$, $vars$$17$$ = this.$_data$.$dnd$.$vars$;
          $ctl$$8$$.$is_drag$ && ($ctl$$8$$.$user_data$.$jstree$ && $vars$$17$$.$m$ && $vars$$17$$.$ml$) && ($vars$$17$$.$m$.hide(), $vars$$17$$.$ml$.hide())
        }, this)).delegate(".oj-tree-list a", "mousedown.ojtree", $$$$17$$.proxy(function($e$$102$$) {
          if(1 === $e$$102$$.which) {
            return this.$_start_drag$($e$$102$$.currentTarget, $e$$102$$), !1
          }
        }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$17$$.proxy(function($e$$103$$) {
          var $ctl$$9$$ = this.$_data$.$dnd$.$ctl$;
          $ctl$$9$$.$is_drag$ && $ctl$$9$$.$user_data$.$jstree$ && this.$_dnd_enter$($e$$103$$.currentTarget)
        }, this)).delegate(".oj-tree-list a", "mousemove.ojtree", $$$$17$$.proxy(function($e$$104$$) {
          var $ctl$$10$$ = this.$_data$.$dnd$.$ctl$, $vars$$18$$ = this.$_data$.$dnd$.$vars$;
          $ctl$$10$$.$is_drag$ && $ctl$$10$$.$user_data$.$jstree$ && ($vars$$18$$.$r$ && $vars$$18$$.$r$.length && $vars$$18$$.$r$.children("a")[0] === $e$$104$$.currentTarget || this.$_dnd_enter$($e$$104$$.currentTarget), "undefined" === typeof this.$_data$.$dnd$.off.top && (this.$_data$.$dnd$.off = $$$$17$$($e$$104$$.target).offset()), "undefined" === typeof this.$_data$.$dnd$.off.top && (this.$_data$.$dnd$.off = $$$$17$$($e$$104$$.target).offset()), this.$_data$.$dnd$.$w$ = ($e$$104$$.pageY - 
          (this.$_data$.$dnd$.off.top || 0)) % this.$_data$.$core$.$li_height$, this.$_data$.$dnd$.$w$ = ($e$$104$$.pageY - (this.$_data$.$dnd$.off.top || 0)) % this.$_data$.$core$.$li_height$, 0 > this.$_data$.$dnd$.$w$ && (this.$_data$.$dnd$.$w$ += this.$_data$.$core$.$li_height$), this.$_dnd_show$())
        }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$17$$.proxy(function($e$$105$$) {
          var $ctl$$11$$ = this.$_data$.$dnd$.$ctl$, $vars$$19$$ = this.$_data$.$dnd$.$vars$;
          if($ctl$$11$$.$is_drag$ && $ctl$$11$$.$user_data$.$jstree$) {
            if($e$$105$$.relatedTarget && $e$$105$$.relatedTarget.id && "oj-tree-marker-line" === $e$$105$$.relatedTarget.id) {
              return!1
            }
            $vars$$19$$.$m$ && $vars$$19$$.$m$.hide();
            $vars$$19$$.$ml$ && $vars$$19$$.$ml$.hide();
            this.$_data$.$dnd$.$mto$ = setTimeout(function($t$$17$$) {
              return function() {
                $t$$17$$.$_dnd_leave$($e$$105$$)
              }
            }(this), 0)
          }
        }, this)).delegate(".oj-tree-list a", "mouseup.ojtree", $$$$17$$.proxy(function($e$$106$$) {
          var $ctl$$12$$ = this.$_data$.$dnd$.$ctl$;
          $ctl$$12$$.$is_drag$ && $ctl$$12$$.$user_data$.$jstree$ && this.$_dnd_finish$($e$$106$$)
        }, this));
        $$$$17$$(document).bind("drag_stop.ojtreeu", $$$$17$$.proxy(function() {
          var $dnd$$5$$ = this.$_data$.$dnd$, $vars$$20$$ = this.$_data$.$dnd$.$vars$;
          $dnd$$5$$.$to1$ && clearTimeout($dnd$$5$$.$to1$);
          $dnd$$5$$.$to2$ && clearTimeout($dnd$$5$$.$to2$);
          $dnd$$5$$.$i1$ && clearInterval($dnd$$5$$.$i1$);
          $dnd$$5$$.$i2$ && clearInterval($dnd$$5$$.$i2$);
          $dnd$$5$$.after = !1;
          $dnd$$5$$.before = !1;
          $dnd$$5$$.inside = !1;
          $dnd$$5$$.off = !1;
          $dnd$$5$$.$prepared$ = !1;
          $dnd$$5$$.$w$ = !1;
          $dnd$$5$$.$to1$ = !1;
          $dnd$$5$$.$to2$ = !1;
          $dnd$$5$$.$i1$ = !1;
          $dnd$$5$$.$i2$ = !1;
          $dnd$$5$$.active = !1;
          $dnd$$5$$.$foreign$ = !1;
          $vars$$20$$.$m$ && $vars$$20$$.$m$.css({top:"-2000px"});
          $vars$$20$$.$ml$ && $vars$$20$$.$ml$.css({top:"-2000px"})
        }, this)).bind("drag_start.ojtreeu", $$$$17$$.proxy(function($e$$107$$, $data$$117$$) {
          if($data$$117$$.data.$jstree$) {
            var $et$$ = $$$$17$$($data$$117$$.event.target);
            $et$$.closest(".jstree").hasClass("oj-tree-" + this.$_index$) && this.$_dnd_enter$($et$$)
          }
        }, this));
        $s$$26_vars$$9$$ = this.options.dnd;
        $s$$26_vars$$9$$.drag_target && $$$$17$$(document).delegate($s$$26_vars$$9$$.drag_target, "mousedown.ojtree-" + this.$_index$, $$$$17$$.proxy(function($e$$108$$) {
          var $cnt$$2_ctl$$13$$ = this.$_data$.$dnd$.$ctl$, $dnd$$6$$ = this.$_data$.$dnd$, $vars$$21$$ = this.$_data$.$dnd$.$vars$;
          $vars$$21$$.$o$ = $e$$108$$.target;
          this.$_drag_start$($e$$108$$, {$jstree$:!0, $obj$:$e$$108$$.target}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $$$$17$$($e$$108$$.target).text());
          this.$_data$.$themes$ && ($vars$$21$$.$m$ && $vars$$21$$.$m$.attr("class", "oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$21$$.$m$ && $vars$$21$$.$m$.attr("class", "oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$21$$.$ml$ && $vars$$21$$.$ml$.attr("class", "oj-tree-" + this.$_data$.$themes$.$theme$), $cnt$$2_ctl$$13$$.$helper$.attr("class", "oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
          $cnt$$2_ctl$$13$$.$helper$.children("ins").attr("class", "oj-tree-invalid");
          $cnt$$2_ctl$$13$$ = this.$_$container$;
          $dnd$$6$$.$cof$ = $cnt$$2_ctl$$13$$.offset();
          $dnd$$6$$.$cw$ = parseInt($cnt$$2_ctl$$13$$.width(), 10);
          $dnd$$6$$.ch = parseInt($cnt$$2_ctl$$13$$.height(), 10);
          $dnd$$6$$.$foreign$ = !0;
          $e$$108$$.preventDefault()
        }, this));
        $s$$26_vars$$9$$.drop_target && $$$$17$$(document).delegate($s$$26_vars$$9$$.drop_target, "mouseenter.ojtreex-" + this.$_index$, $$$$17$$.proxy(function($e$$109$$) {
          var $dnd$$7$$ = this.$_data$.$dnd$, $vars$$22$$ = this.$_data$.$dnd$.$vars$;
          $dnd$$7$$.active && this.options.dnd.drop_check.call(this, {o:$vars$$22$$.$o$, r:$$$$17$$($e$$109$$.target), e:$e$$109$$}) && $dnd$$7$$.$ctl$.$helper$.children("ins").attr("class", "oj-tree-ok")
        }, this)).delegate($s$$26_vars$$9$$.drop_target, "mouseleave.ojtree-" + this.$_index$, $$$$17$$.proxy(function() {
          this.$_data$.$dnd$.active && this.$_data$.$dnd$.$ctl$.$helper$.children("ins").attr("class", "oj-tree-invalid")
        }, this)).delegate($s$$26_vars$$9$$.drop_target, "mouseup.ojtreex-" + this.$_index$, $$$$17$$.proxy(function($e$$111$$) {
          var $vars$$23$$ = this.$_data$.$dnd$.$vars$;
          this.$_data$.$dnd$.active && this.$_data$.$dnd$.$ctl$.$helper$.children("ins").hasClass("oj-tree-ok") && this.options.dnd.drop_finish.call(this, {o:$vars$$23$$.$o$, r:$$$$17$$($e$$111$$.target), e:$e$$111$$})
        }, this))
      }
    }, $_initDnDOpts$:function() {
      var $opts$$20$$, $ot$$1$$;
      "undefined" !== this.options.dnd && ($opts$$20$$ = this.options.dnd, $ot$$1$$ = $$$$17$$.type(this.options.dnd), "object" === $ot$$1$$ ? "boolean" === $$$$17$$.type($opts$$20$$.reorder) && $opts$$20$$.reorder && (this.$_data$.$dnd$.reorder = !0) : "string" == $ot$$1$$ && "reorder" == $opts$$20$$ && (this.$_data$.$dnd$.reorder = !0), this.$_data$.$dnd$.reorder && (this.options.dnd = {}, this.$_applyDefaults$(this.options.dnd, this.$_data$.$dnd$.$defaults$)))
    }, $_initCrrm$:function() {
      this.$_$container$.bind("ojmove", $$$$17$$.proxy($JSCompiler_emptyFn$$(), this))
    }, $_initKeys$:function() {
      var $_this$$20$$ = this;
      $$$$17$$.each(this.$_keyHandler$, function($i$$241$$, $v$$3$$) {
        !1 !== $v$$3$$ && -1 == $$$$17$$.inArray($i$$241$$, $_this$$20$$.$_data$.keys.bound) && ($$$$17$$(document).on("keydown", null, $i$$241$$, function($event$$221$$) {
          return $_this$$20$$.$_execKey$($_this$$20$$, $i$$241$$, $event$$221$$)
        }), $_this$$20$$.$_data$.keys.bound.push($i$$241$$))
      });
      this.$_enableKeys$()
    }, $_initMenu$:function($newVal$$) {
      var $menu$$14_opts$$21$$, $$m_t$$19$$;
      if(this.options.contextMenu || $newVal$$) {
        if($menu$$14_opts$$21$$ = $newVal$$ ? $newVal$$ : this.options.contextMenu, $$m_t$$19$$ = $$$$17$$.type($menu$$14_opts$$21$$), "object" == $$m_t$$19$$ && ($menu$$14_opts$$21$$ = $menu$$14_opts$$21$$.menu, void 0 != $menu$$14_opts$$21$$)) {
          $$m_t$$19$$ = $$$$17$$.type($menu$$14_opts$$21$$);
          "function" == $$m_t$$19$$ && ($menu$$14_opts$$21$$ = $menu$$14_opts$$21$$(), $menu$$14_opts$$21$$ = $menu$$14_opts$$21$$.menu, $$m_t$$19$$ = $$$$17$$.type($menu$$14_opts$$21$$));
          if("boolean" == $$m_t$$19$$) {
            if(!$menu$$14_opts$$21$$) {
              return
            }
            this.$_data$.menu.$menuid$ = "ojtreemenu" + this.$_index$;
            this.$_data$.menu.$$container$ = $$$$17$$($_defaultMenu$$);
            this.$_data$.menu.$$container$.css("display", "none");
            this.$_data$.menu.$$container$.attr("id", this.$_data$.menu.$menuid$);
            this.$_data$.menu.$usermenu$ = !0;
            this.$_data$.menu.$$elemPaste$ = this.$_data$.menu.$$container$.find("#ojtreepaste")
          }else {
            if("string" === $$m_t$$19$$) {
              if($$m_t$$19$$ = $$$$17$$(document.getElementById($menu$$14_opts$$21$$))) {
                $$m_t$$19$$.css("display", "none"), this.$_data$.menu.$$container$ = $$m_t$$19$$, this.$_data$.menu.$menuid$ = $menu$$14_opts$$21$$, this.$_data$.menu.$usermenu$ = !0, this.$_data$.menu.$$container$.css("display", "none")
              }
            }else {
              return
            }
          }
          this.$_data$.menu.$usermenu$ && ($newVal$$ ? this.$_applyMenu$() : this.$_$container$.bind("ojloaded", $$$$17$$.proxy(function() {
            this.$_applyMenu$()
          }, this)))
        }
      }
    }, $_handleContextMenuBeforeShow$:function($e$$113_state$$5$$) {
      this.$_data$.menu.$node$ = $$$$17$$($e$$113_state$$5$$.originalEvent.target.parentNode);
      if(this.$_data$.menu.$usermenu$ && this.$_data$.menu.$attached$ && this.$_data$.menu.$$elemPaste$) {
        $e$$113_state$$5$$ = this.$_data$.menu.$$elemPaste$.hasClass("oj-disabled");
        var $disabledState$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$;
        $e$$113_state$$5$$ || ($e$$113_state$$5$$ = !1);
        $e$$113_state$$5$$ != $disabledState$$ && ($disabledState$$ ? this.$_data$.menu.$$elemPaste$.addClass("oj-disabled") : this.$_data$.menu.$$elemPaste$.removeClass("oj-disabled"), this.$_data$.menu.$$container$.ojMenu("refresh"))
      }
    }, $_handleContextMenuSelect$:function($ev$$, $ui$$16$$) {
      var $id$$31$$ = $ui$$16$$ ? $ui$$16$$.item.attr("id") : void 0;
      "ojtreecopy" === $id$$31$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$31$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$31$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreedelete" === $id$$31$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$31$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$31$$ && this.$_crrm_create$(this.$_data$.menu.$node$)
    }, $_initCoreOpts$:function() {
      var $val$$49$$ = this.options.selectionMode, $val$$49$$ = void 0 == $val$$49$$ ? "single" : $val$$49$$;
      "none" === $val$$49$$ ? $val$$49$$ = 0 : "single" === $val$$49$$ ? $val$$49$$ = 1 : "multiple" === $val$$49$$ && ($val$$49$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$49$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_data$.$core$.$toExpand$ = this.options.initExpanded;
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded
    }, $_initUIOpts$:$JSCompiler_emptyFn$$(), $_initJsonOpts$:function() {
      this.options.json_data && this.options.json_data && this.$_applyDefaults$(this.options.json_data, this.$_data$.$json$.$defaults$)
    }, $_initHtmlOpts$:$JSCompiler_emptyFn$$(), $_initCrrmOpts$:function() {
      void 0 == this.options.crrm && this.$_applyDefaults$(this.options.crrm, this.$_data$.$crrm$.$defaults$)
    }, $_initMenuOpts$:$JSCompiler_emptyFn$$(), $_initThemeOpts$:$JSCompiler_emptyFn$$(), $_initTypeOpts$:function() {
      "object" == $$$$17$$.type(this.options.types) && this.$_applyDefaults$(this.options.types, this.$_data$.types.$defaults$)
    }, $_initData$:function() {
      var $data$$119$$ = this.$_data$;
      $data$$119$$.$core$ = {$html_titles$:!1, $initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $notify_plugins$:!0, $toExpand$:!1, $toLoad$:!1, $prepared_move$:{}};
      $data$$119$$.ui = {selected:$$$$17$$(), $last_selected$:!1, $hovered$:null, $to_select$:null};
      $data$$119$$.$crrm$ = {};
      $data$$119$$.$crrm$.$cp_nodes$ = !1;
      $data$$119$$.$crrm$.$ct_nodes$ = !1;
      $data$$119$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:$JSCompiler_returnArg$$(!0)}};
      $data$$119$$.$crrm$.$prepared_move$ = {};
      $data$$119$$.$json$ = {};
      $data$$119$$.$json$.$defaults$ = {data:!1, ajax:!1, correct_state:!0, progressive_render:!1, progressive_unload:!1};
      $data$$119$$.html = {};
      $data$$119$$.html.$defaults$ = {data:!1, ajax:!1, correct_state:!0};
      $data$$119$$.html.$useExistingMarkup$ = !1;
      $data$$119$$.html.$originalContainerHtml$ = !1;
      $data$$119$$.$themes$ = {};
      $data$$119$$.$themes$.icons = !0;
      $data$$119$$.$themes$.$dots$ = !1;
      $data$$119$$.$themes$.$theme$ = "default";
      $data$$119$$.$themes$.url = !1;
      $data$$119$$.$themes$.$themes_loaded$ = [];
      $data$$119$$.$themes$.$_themes$ = !1;
      $data$$119$$.types = {};
      $data$$119$$.types.$attach_to$ = [];
      $data$$119$$.types.$defaults$ = {max_children:-1, max_depth:-1, valid_children:"all", use_data:!1, type_attr:"type", types:{"default":{max_children:-1, max_depth:-1, valid_children:"all"}}};
      $data$$119$$.menu = {};
      $data$$119$$.menu.$actions$ = !1;
      $data$$119$$.menu.$menuid$ = !1;
      $data$$119$$.menu.select = !1;
      $data$$119$$.menu.$usermenu$ = !1;
      $data$$119$$.menu.$attached$ = !1;
      $data$$119$$.menu.$$container$ = !1;
      $data$$119$$.menu.parent = !1;
      $data$$119$$.menu.$$elemPaste$ = !1;
      $data$$119$$.menu.$changing$ = !1;
      $data$$119$$.keys = {};
      $data$$119$$.keys.enabled = !0;
      $data$$119$$.keys.bound = [];
      $data$$119$$.$dnd$ = {};
      $data$$119$$.$dnd$.reorder = !0;
      $data$$119$$.$dnd$.active = !1;
      $data$$119$$.$dnd$.after = !1;
      $data$$119$$.$dnd$.inside = !1;
      $data$$119$$.$dnd$.before = !1;
      $data$$119$$.$dnd$.off = !1;
      $data$$119$$.$dnd$.$prepared$ = !1;
      $data$$119$$.$dnd$.$w$ = 0;
      $data$$119$$.$dnd$.$to1$ = !1;
      $data$$119$$.$dnd$.$to2$ = !1;
      $data$$119$$.$dnd$.$cof$ = !1;
      $data$$119$$.$dnd$.$cw$ = !1;
      $data$$119$$.$dnd$.ch = !1;
      $data$$119$$.$dnd$.$i1$ = !1;
      $data$$119$$.$dnd$.$i2$ = !1;
      $data$$119$$.$dnd$.$mto$ = !1;
      $data$$119$$.$dnd$.$defaults$ = {copy_modifier:"ctrl", check_timeout:100, open_timeout:500, drop_target:".oj-tree-drop", drop_check:$JSCompiler_returnArg$$(!0), drop_finish:$$$$17$$.noop, drag_target:".oj-tree-draggable", drag_finish:$$$$17$$.noop, drag_check:function $$data$$119$$$$dnd$$$defaults$$drag_check$() {
        return{after:!1, before:!1, inside:!0}
      }};
      $data$$119$$.$dnd$.$vars$ = {};
      $data$$119$$.$dnd$.$vars$.$o$ = !1;
      $data$$119$$.$dnd$.$vars$.$r$ = !1;
      $data$$119$$.$dnd$.$vars$.$m$ = !1;
      $data$$119$$.$dnd$.$vars$.$ml$ = !1;
      $data$$119$$.$dnd$.$vars$.$sli$ = void 0;
      $data$$119$$.$dnd$.$vars$.$sti$ = void 0;
      $data$$119$$.$dnd$.$vars$.$dir1$ = !1;
      $data$$119$$.$dnd$.$vars$.$dir2$ = !1;
      $data$$119$$.$dnd$.$vars$.$last_pos$ = !1;
      $data$$119$$.$dnd$.$ctl$ = {};
      $data$$119$$.$dnd$.$ctl$.$is_down$ = !1;
      $data$$119$$.$dnd$.$ctl$.$is_drag$ = !1;
      $data$$119$$.$dnd$.$ctl$.$helper$ = !1;
      $data$$119$$.$dnd$.$ctl$.$scroll_spd$ = 10;
      $data$$119$$.$dnd$.$ctl$.$init_x$ = 0;
      $data$$119$$.$dnd$.$ctl$.$init_y$ = 0;
      $data$$119$$.$dnd$.$ctl$.$threshold$ = 5;
      $data$$119$$.$dnd$.$ctl$.$helper_left$ = 5;
      $data$$119$$.$dnd$.$ctl$.$helper_top$ = 10;
      $data$$119$$.$dnd$.$ctl$.$user_data$ = {}
    }, $_fix_scroll$:function($obj$$85_t$$20$$) {
      var $c$$24$$ = this.$_$container$[0];
      $c$$24$$.scrollHeight > $c$$24$$.offsetHeight && ($obj$$85_t$$20$$ = this.$_getNode$($obj$$85_t$$20$$)) && (-1 !== $obj$$85_t$$20$$ && $obj$$85_t$$20$$.length && $obj$$85_t$$20$$.is(":visible")) && ($obj$$85_t$$20$$ = $obj$$85_t$$20$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$85_t$$20$$ && ($c$$24$$.scrollTop = $c$$24$$.scrollTop + $obj$$85_t$$20$$ - 1), $obj$$85_t$$20$$ + this.$_data$.$core$.$li_height$ + ($c$$24$$.scrollWidth > $c$$24$$.offsetWidth ? $scrollbar_width$$ : 0) > 
      $c$$24$$.offsetHeight && ($c$$24$$.scrollTop += $obj$$85_t$$20$$ - $c$$24$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$24$$.scrollWidth > $c$$24$$.offsetWidth ? $scrollbar_width$$ : 0)))
    }, $set_focus$:function() {
      this.$_data$.$focused$ || (this.$_$container$.addClass("oj-tree-focused"), this.$_data$.$focused$ = !0, this.$_emitEvent$(null, "set_focus"))
    }, $is_focused$:function() {
      return this.$_data$.$focused$
    }, $unset_focus$:function() {
      this.$_data$.$focused$ && (this.$_$container$.removeClass("oj-tree-focused"), this.$_data$.$focused$ = !1);
      this.$_emitEvent$(null, "unset_focus")
    }, $_focused$:$JSCompiler_emptyFn$$(), $_newIndex$:function() {
      return++$_instance$$
    }, $_getIndex$:$JSCompiler_get$$("$_index$"), $_getOptions$:function() {
      return $$$$17$$.extend(!0, {}, this.options)
    }, $_getContainer$:$JSCompiler_get$$("$_$container$"), $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1
    }, left:function() {
      var $o$$15$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$15$$ && ($o$$15$$.hasClass("oj-tree-open") ? this.collapse($o$$15$$) : this.hover(this.$_getPrev$($o$$15$$)));
      return!1
    }, "ctrl+left":function() {
      var $o$$16$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$16$$ && ($o$$16$$.hasClass("oj-tree-open") ? this.collapse($o$$16$$) : this.hover(this.$_getPrev$($o$$16$$)));
      return!1
    }, "shift+left":function() {
      var $o$$17$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$17$$ && ($o$$17$$.hasClass("oj-tree-open") ? this.collapse($o$$17$$) : this.hover(this.$_getPrev$($o$$17$$)));
      return!1
    }, right:function() {
      var $o$$18$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$18$$ && $o$$18$$.length && ($o$$18$$.hasClass("oj-tree-closed") ? this.expand($o$$18$$) : this.hover(this.$_getNext$($o$$18$$)));
      return!1
    }, "ctrl+right":function() {
      var $o$$19$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$19$$ && $o$$19$$.length && ($o$$19$$.hasClass("oj-tree-closed") ? this.expand($o$$19$$) : this.hover(this.$_getNext$($o$$19$$)));
      return!1
    }, "shift+right":function() {
      var $o$$20$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$20$$ && $o$$20$$.length && ($o$$20$$.hasClass("oj-tree-closed") ? this.expand($o$$20$$) : this.hover(this.$_getNext$($o$$20$$)));
      return!1
    }, space:function() {
      this.$_data$.ui.$hovered$ && this.$_data$.ui.$hovered$.children("a:eq(0)").click();
      return!1
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1
    }, end:function() {
      var $a$$62$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      this.hover($a$$62$$[$a$$62$$.length - 1]);
      return!1
    }, "*":function() {
      var $l$$10$$ = this.$_$container_ul$.find("a");
      this.selected($l$$10$$);
      return!1
    }, "ctrl+space":function($event$$222$$) {
      $event$$222$$.type = "click";
      this.$_data$.ui.$hovered$ && this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($event$$222$$);
      return!1
    }, "shift+space":function($event$$223$$) {
      $event$$223$$.type = "click";
      this.$_data$.ui.$hovered$ && this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($event$$223$$);
      return!1
    }, f2:function() {
      this.rename(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$)
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null))
    }}, $_applyMenu$:function() {
      if(!this.$_data$.menu.$attached$) {
        if(this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$container$) {
          var $$ul$$ = this.$_data$.menu.$$container$;
          $$ul$$.parent().detach();
          $$ul$$.css("display", "none")
        }
        this.$_data$.menu.$attached$ = !0;
        var $_this$$21$$ = this;
        setTimeout(function() {
          $_this$$21$$.$_$container$.append($_this$$21$$.$_data$.menu.$$container$);
          $_this$$21$$.$_data$.menu.$$container$.ojMenu();
          $_this$$21$$.$_data$.menu.$ojmenuCreated$ = !0;
          $_this$$21$$.$_data$.menu.$changing$ = !0;
          $_this$$21$$._setOption("contextMenu", {menu:$_this$$21$$.$_data$.menu.$menuid$});
          $_this$$21$$.$_data$.menu.$changing$ = !1;
          $_this$$21$$.$_data$.menu.$$container$.on("ojselect", $$$$17$$.proxy($_this$$21$$.$_handleContextMenuSelect$, $_this$$21$$));
          $_this$$21$$.$_data$.menu.$$container$.on("ojbeforeshow", $$$$17$$.proxy($_this$$21$$.$_handleContextMenuBeforeShow$, $_this$$21$$))
        }, 0)
      }
    }, $_clearMenu$:function() {
      this.$_data$.menu.$usermenu$ && (this.$_data$.menu.$$container$.ojMenu("destroy"), this.$_data$.menu.parent.append(this.$_data$.menu.$$container$), this.$_data$.menu.$attached$ = !1, this.$_data$.menu.$menuid$ = null, this.$_data$.menu.$$container$ = null, this.$_data$.menu.parent = null)
    }, $_crrm_cut$:function($obj$$86$$) {
      $obj$$86$$ = this.$_getNode$($obj$$86$$, !0);
      if(!$obj$$86$$ || !$obj$$86$$.length) {
        return!1
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$86$$;
      this.$_emitEvent$({obj:$obj$$86$$}, "cut")
    }, $_crrm_copy$:function($obj$$87$$) {
      $obj$$87$$ = this.$_getNode$($obj$$87$$, !0);
      if(!$obj$$87$$ || !$obj$$87$$.length) {
        return!1
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$87$$;
      this.$_emitEvent$({obj:$obj$$87$$}, "copy")
    }, $_crrm_paste$:function($obj$$88$$) {
      $obj$$88$$ = this.$_getNode$($obj$$88$$);
      if(!$obj$$88$$ || !$obj$$88$$.length) {
        return!1
      }
      var $nodes$$4$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if(!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$88$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$88$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$88$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$88$$, nodes:$nodes$$4$$}, "paste")
    }, $_crrm_move_node$:function($obj$$89$$, $ref$$3$$, $position$$17$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$28$$ = this.options.crrm.move;
      if(!$is_prepared$$1$$) {
        return"undefined" === typeof $position$$17$$ && ($position$$17$$ = $s$$28$$.defaultPosition), "inside" !== $position$$17$$ || $s$$28$$.defaultPosition.match(/^(before|after)$/) || ($position$$17$$ = $s$$28$$.defaultPosition), this.$_move_node$($obj$$89$$, $ref$$3$$, $position$$17$$, $is_copy$$1$$, !1, $skip_check$$1$$)
      }
      if(!0 === $s$$28$$.alwaysCopy || "multitree" === $s$$28$$.alwaysCopy && $obj$$89$$.$rt$.$_index$ !== $obj$$89$$.$ot$.$_index$) {
        $is_copy$$1$$ = !0
      }
      this.$_move_node$($obj$$89$$, $ref$$3$$, $position$$17$$, $is_copy$$1$$, !0, $skip_check$$1$$)
    }, $_crrm_remove$:function($obj$$90$$) {
      $obj$$90$$ = this.$_getNode$($obj$$90$$, !0);
      this.$__rollback$();
      this["delete"]($obj$$90$$)
    }, $_crrm_rename$:function($obj$$91$$) {
      var $f$$3$$ = this.$_emitEvent$;
      $obj$$91$$ = this.$_getNode$($obj$$91$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$91$$, function($obj$$92$$, $new_name$$, $old_name$$) {
        $f$$3$$.call(this, {obj:$obj$$92$$, title:$new_name$$, prevTitle:$old_name$$}, "rename")
      })
    }, $_crrm_showInput$:function($obj$$93$$, $callback$$93$$) {
      $obj$$93$$ = this.$_getNode$($obj$$93$$);
      var $rtl$$2$$ = this.$_isRtl$, $w$$5$$ = this.options.crrm.inputWidthLimit, $w1$$ = $obj$$93$$.children("ins").width(), $w2$$ = $obj$$93$$.find("\x3e a:visible \x3e ins").width() * $obj$$93$$.find("\x3e a:visible \x3e ins").length, $t$$22$$ = this.getText($obj$$93$$), $h1$$ = $$$$17$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$2$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$93$$.css("position", "relative").append($$$$17$$("\x3cinput /\x3e", 
      {value:$t$$22$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$2$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$2$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$17$$.proxy(function() {
        var $i$$242$$ = $obj$$93$$.children(".oj-tree-rename-input"), $v$$4$$ = $i$$242$$.val();
        "" === $v$$4$$ && ($v$$4$$ = $t$$22$$);
        $h1$$.remove();
        $i$$242$$.remove();
        this.$_set_text$($obj$$93$$, $t$$22$$);
        this.$_rename_node$($obj$$93$$, $v$$4$$);
        $callback$$93$$.call(this, $obj$$93$$, $v$$4$$, $t$$22$$);
        $obj$$93$$.css("position", "")
      }, this), keyup:function($event$$224_key$$93$$) {
        $event$$224_key$$93$$ = $event$$224_key$$93$$.keyCode || $event$$224_key$$93$$.which;
        27 == $event$$224_key$$93$$ ? (this.value = $t$$22$$, this.blur()) : 13 == $event$$224_key$$93$$ ? this.blur() : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$5$$))
      }, keypress:function($event$$225$$) {
        if(13 == ($event$$225$$.keyCode || $event$$225$$.which)) {
          return!1
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$93$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$5$$))[0].select()
    }, $_crrm_create$:function($obj$$94$$, $position$$18$$, $js$$2$$, $callback$$94$$, $skip_rename$$) {
      var $_this$$22$$ = this;
      ($obj$$94$$ = this.$_getNode$($obj$$94$$)) || ($obj$$94$$ = -1);
      this.$__rollback$();
      return this.$_create_node$($obj$$94$$, $position$$18$$, $js$$2$$, function($t$$24$$) {
        var $p$$12$$ = this.$_getParent$($t$$24$$), $pos$$10$$ = $$$$17$$($t$$24$$).index();
        $callback$$94$$ && $callback$$94$$.call(this, $t$$24$$);
        $p$$12$$.length && $p$$12$$.hasClass("oj-tree-closed") && this.expand($p$$12$$, !1, !0);
        $skip_rename$$ ? $_this$$22$$.$_emitEvent$({obj:$t$$24$$, name:this.getText($t$$24$$), parent:$p$$12$$, position:$pos$$10$$}) : this.$_crrm_showInput$($t$$24$$, function($obj$$95$$, $new_name$$1$$) {
          $_this$$22$$.$_emitEvent$({obj:$obj$$95$$, name:$new_name$$1$$, parent:$p$$12$$, position:$pos$$10$$})
        })
      })
    }, $_crrm_check_move$:$JSCompiler_returnArg$$(!1)});
    $$$$17$$(function() {
      $_addSheet$$({$str$:".oj-tree-list, .oj-tree-list ul, .oj-tree-list li { display:block; margin:0 0 0 0; padding:0 0 0 0; list-style-type:none; } .oj-tree-list li { display:block; min-height:18px; line-height:18px; white-space:nowrap; margin-left:18px; min-width:18px; } .oj-tree-rtl li { margin-left:0; margin-right:18px; } .oj-tree-list \x3e li { margin-left:0px; } .oj-tree-rtl \x3e ul \x3e li { margin-right:0px; } .oj-tree-list ins { display:inline-block; text-decoration:none; width:18px; height:18px; margin:0 0 0 0; padding:0; } .oj-tree-list a { display:inline-block; line-height:16px; height:16px; color:black; white-space:nowrap; text-decoration:none; padding:1px 2px; margin:0; } .oj-tree-list a:focus { outline: none; } .oj-tree-list a \x3e ins { height:16px; width:16px; } .oj-tree-list a \x3e .oj-tree-icon { margin-right:3px; } .oj-tree-rtl a \x3e .oj-tree-icon { margin-left:3px; margin-right:0; } li.oj-tree-open \x3e ul { display:block; } li.oj-tree-closed \x3e ul { display:none; } ", 
      title:"oj-tree"})
    })
  })();
  (function() {
    function $keyHandler$$($handleObj$$4$$) {
      if("string" === typeof $handleObj$$4$$.data) {
        var $origHandler$$ = $handleObj$$4$$.handler, $keys$$16$$ = $handleObj$$4$$.data.toLowerCase().split(" ");
        $handleObj$$4$$.handler = function $$handleObj$$4$$$handler$($event$$226$$) {
          if(this === $event$$226$$.target || !/textarea|select/i.test($event$$226$$.target.nodeName) && "text" !== $event$$226$$.target.type) {
            var $i$$243_special$$ = "keypress" !== $event$$226$$.type && jQuery.$hotkeys$.$specialKeys$[$event$$226$$.which], $character$$1_l$$11$$ = String.fromCharCode($event$$226$$.which).toLowerCase(), $modif$$ = "", $possible$$ = {};
            $event$$226$$.altKey && "alt" !== $i$$243_special$$ && ($modif$$ += "alt+");
            $event$$226$$.ctrlKey && "ctrl" !== $i$$243_special$$ && ($modif$$ += "ctrl+");
            $event$$226$$.metaKey && (!$event$$226$$.ctrlKey && "meta" !== $i$$243_special$$) && ($modif$$ += "meta+");
            $event$$226$$.shiftKey && "shift" !== $i$$243_special$$ && ($modif$$ += "shift+");
            $i$$243_special$$ ? $possible$$[$modif$$ + $i$$243_special$$] = !0 : ($possible$$[$modif$$ + $character$$1_l$$11$$] = !0, $possible$$[$modif$$ + jQuery.$hotkeys$.$shiftNums$[$character$$1_l$$11$$]] = !0, "shift+" === $modif$$ && ($possible$$[jQuery.hotkeys.shiftNums[$character$$1_l$$11$$]] = !0));
            $i$$243_special$$ = 0;
            for($character$$1_l$$11$$ = $keys$$16$$.length;$i$$243_special$$ < $character$$1_l$$11$$;$i$$243_special$$++) {
              if($possible$$[$keys$$16$$[$i$$243_special$$]]) {
                return $origHandler$$.apply(this, arguments)
              }
            }
          }
        }
      }
    }
    jQuery.$hotkeys$ = {version:"0.8", $specialKeys$:{8:"backspace", 9:"tab", 13:"return", 16:"shift", 17:"ctrl", 18:"alt", 19:"pause", 20:"capslock", 27:"esc", 32:"space", 33:"pageup", 34:"pagedown", 35:"end", 36:"home", 37:"left", 38:"up", 39:"right", 40:"down", 45:"insert", 46:"del", 96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9", 106:"*", 107:"+", 109:"-", 110:".", 111:"/", 112:"f1", 113:"f2", 114:"f3", 115:"f4", 116:"f5", 117:"f6", 118:"f7", 119:"f8", 120:"f9", 
    121:"f10", 122:"f11", 123:"f12", 144:"numlock", 145:"scroll", 191:"/", 224:"meta"}, $shiftNums$:{"`":"~", 1:"!", 2:"@", 3:"#", 4:"$", 5:"%", 6:"^", 7:"\x26", 8:"*", 9:"(", 0:")", "-":"_", "\x3d":"+", ";":": ", "'":'"', ",":"\x3c", ".":"\x3e", "/":"?", "\\":"|"}};
    jQuery.each(["keydown", "keyup", "keypress"], function() {
      jQuery.event.special[this] = {add:$keyHandler$$}
    })
  })();
  window.adf || (window.adf = {});
  var $adf$$ = window.adf;
  $adf$$.$shared$ = $adf$$.$shared$ || {};
  $adf$$.$shared$.$impl$ = $adf$$.$shared$.$impl$ || {};
  $adf$$.$shared$.$impl$.$conveyorBelt$ = $adf$$.$shared$.$impl$.$conveyorBelt$ || {};
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$($agentName_elem$$22$$, $orientation$$, $contentParent$$, $bRtl$$, $buttonInfo$$, $callbackInfo$$) {
    this.$_elem$ = $agentName_elem$$22$$;
    this.$_orientation$ = $orientation$$;
    this.$_contentParent$ = $contentParent$$;
    this.$_bRtl$ = $bRtl$$;
    $buttonInfo$$ && (this.$_prevButtonId$ = $buttonInfo$$.prevButtonId, this.$_nextButtonId$ = $buttonInfo$$.nextButtonId, this.$_prevButtonStyleClass$ = $buttonInfo$$.prevButtonStyleClass, this.$_nextButtonStyleClass$ = $buttonInfo$$.nextButtonStyleClass, this.$_prevButtonIcon$ = $buttonInfo$$.prevButtonIcon, this.$_nextButtonIcon$ = $buttonInfo$$.nextButtonIcon);
    $callbackInfo$$ && (this.$_scrollFunc$ = $callbackInfo$$.scrollFunc, this.$_firstVisibleItemChangedFunc$ = $callbackInfo$$.firstVisibleItemChangedFunc, this.$_callbackObj$ = $callbackInfo$$.callbackObj, this.$_bAutomaticSizeCheck$ = $callbackInfo$$.automaticSizeCheck);
    this.$_bExternalScroll$ = !0;
    this.$_firstVisibleItemIndex$ = 0;
    $agentName_elem$$22$$ = navigator.userAgent.toLowerCase();
    if(-1 !== $agentName_elem$$22$$.indexOf("gecko/")) {
      this.$_bAgentGecko$ = !0
    }else {
      if(-1 !== $agentName_elem$$22$$.indexOf("opera")) {
        this.$_bAgentOpera$ = !0
      }else {
        if(-1 !== $agentName_elem$$22$$.indexOf("applewebkit") || -1 !== $agentName_elem$$22$$.indexOf("safari")) {
          this.$_bAgentWebkit$ = !0
        }
      }
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$setup$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$setup$$($bInit_contentContainer$$) {
    var $self$$82$$ = this, $cbcClass$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    if($bInit_contentContainer$$) {
      this.$_createInnerContainers$();
      this.$_createPrevButton$(this.$_prevButtonId$, this.$_prevButtonStyleClass$, this.$_prevButtonIcon$);
      this.$_createNextButton$(this.$_nextButtonId$, this.$_nextButtonStyleClass$, this.$_nextButtonIcon$);
      var $nextButton$$ = this.$_nextButton$;
      this.$_buttonWidth$ = $nextButton$$.offsetWidth;
      this.$_buttonHeight$ = $nextButton$$.offsetHeight;
      this.$_hidePrevButton$();
      this.$_hideNextButton$();
      this.$_mouseWheelListener$ = function $this$$_mouseWheelListener$$($event$$227$$) {
        $self$$82$$.$_handleMouseWheel$($event$$227$$)
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_elem$, "mousewheel", this.$_mouseWheelListener$);
      $cbcClass$$.$_addBubbleEventListener$(this.$_elem$, "wheel", this.$_mouseWheelListener$);
      this.$_touchStartListener$ = function $this$$_touchStartListener$$($event$$228$$) {
        $self$$82$$.$_handleTouchStart$($event$$228$$)
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
      this.$_touchMoveListener$ = function $this$$_touchMoveListener$$($event$$229$$) {
        $self$$82$$.$_handleTouchMove$($event$$229$$)
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
      this.$_touchEndListener$ = function $this$$_touchEndListener$$() {
        $self$$82$$.$_handleTouchEnd$()
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
      this.$_origScroll$ = 0
    }else {
      this.$_reinitializeInnerDom$()
    }
    this.$_clearCachedSizes$();
    this.$_adjustOverflowSize$($bInit_contentContainer$$);
    $bInit_contentContainer$$ = this.$_contentContainer$;
    this.$_alignButtons$($bInit_contentContainer$$.offsetWidth, $bInit_contentContainer$$.offsetHeight);
    this.$_bAutomaticSizeCheck$ ? this.$_checkSizesTimer$ || (this.$_checkSizesTimer$ = setInterval(function() {
      $self$$82$$.$_checkSizes$()
    }, $cbcClass$$.$_CHECK_SIZES_INTERVAL$)) : this.$_checkSizes$()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.destroy = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$destroy$() {
    this.$_checkSizesTimer$ && (clearInterval(this.$_checkSizesTimer$), this.$_checkSizesTimer$ = null);
    var $elem$$23$$ = this.$_elem$, $cbcClass$$1$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    $cbcClass$$1$$.$_removeBubbleEventListener$($elem$$23$$, "mousewheel", this.$_mouseWheelListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$($elem$$23$$, "wheel", this.$_mouseWheelListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
    this.$_touchEndListener$ = this.$_touchMoveListener$ = this.$_touchStartListener$ = this.$_mouseWheelListener$ = null;
    $cbcClass$$1$$.$_reparentChildren$(this.$_contentContainer$, $elem$$23$$);
    this.$_tableDiv$ ? $elem$$23$$.removeChild(this.$_tableDiv$) : ($elem$$23$$.removeChild(this.$_overflowContainer$), $elem$$23$$.removeChild(this.$_nextButton$), $elem$$23$$.removeChild(this.$_prevButton$));
    this.$_tableCellDivNextButton$ = this.$_tableCellDivPrevButton$ = this.$_tableDiv$ = this.$_overflowContainer$ = this.$_contentContainer$ = this.$_prevButton$ = this.$_nextButton$ = null;
    this.$_clearCachedSizes$();
    this.$_callbackObj$ = this.$_firstVisibleItemChangedFunc$ = this.$_scrollFunc$ = this.$_elem$ = null
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_reparentChildren$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_reparentChildren$$($fromNode$$, $toNode$$) {
    for(var $fromNodeChildren$$ = $fromNode$$.childNodes;0 < $fromNodeChildren$$.length;) {
      $toNode$$.appendChild($fromNodeChildren$$[0])
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getComputedStyle$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getComputedStyle$$($elem$$24$$) {
    var $defView$$ = $elem$$24$$.ownerDocument.defaultView, $computedStyle$$ = null;
    return $computedStyle$$ = $defView$$ ? $defView$$.getComputedStyle($elem$$24$$, null) : $elem$$24$$.currentStyle
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getElemInnerWidth$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getElemInnerWidth$$($elem$$25$$) {
    var $cbcClass$$2$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $computedStyle$$1$$ = $cbcClass$$2$$.$_getComputedStyle$($elem$$25$$);
    return $elem$$25$$.offsetWidth - ($cbcClass$$2$$.$_getCSSLengthAsInt$($computedStyle$$1$$.paddingLeft) + $cbcClass$$2$$.$_getCSSLengthAsInt$($computedStyle$$1$$.paddingRight) + $cbcClass$$2$$.$_getCSSLengthAsInt$($computedStyle$$1$$.borderLeftWidth) + $cbcClass$$2$$.$_getCSSLengthAsInt$($computedStyle$$1$$.borderRightWidth))
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getElemInnerHeight$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getElemInnerHeight$$($elem$$26$$) {
    var $cbcClass$$3$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $computedStyle$$2$$ = $cbcClass$$3$$.$_getComputedStyle$($elem$$26$$);
    return $elem$$26$$.offsetHeight - ($cbcClass$$3$$.$_getCSSLengthAsInt$($computedStyle$$2$$.paddingTop) + $cbcClass$$3$$.$_getCSSLengthAsInt$($computedStyle$$2$$.paddingBottom) + $cbcClass$$3$$.$_getCSSLengthAsInt$($computedStyle$$2$$.borderTopWidth) + $cbcClass$$3$$.$_getCSSLengthAsInt$($computedStyle$$2$$.borderBottomWidth))
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getCSSLengthAsInt$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getCSSLengthAsInt$$($cssLength_intLength$$) {
    return 0 < $cssLength_intLength$$.length && "auto" != $cssLength_intLength$$ ? ($cssLength_intLength$$ = parseInt($cssLength_intLength$$, 10), isNaN($cssLength_intLength$$) && ($cssLength_intLength$$ = 0), $cssLength_intLength$$) : 0
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_addBubbleEventListener$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_addBubbleEventListener$$($node$$42$$, $type$$82$$, $listener$$32$$) {
    $node$$42$$.addEventListener ? $node$$42$$.addEventListener($type$$82$$, $listener$$32$$, !1) : $node$$42$$.attachEvent && $node$$42$$.attachEvent("on" + $type$$82$$, $listener$$32$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_removeBubbleEventListener$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_removeBubbleEventListener$$($node$$43$$, $type$$83$$, $listener$$33$$) {
    $node$$43$$.removeEventListener ? $node$$43$$.removeEventListener($type$$83$$, $listener$$33$$, !1) : $node$$43$$.detachEvent && $node$$43$$.detachEvent("on" + $type$$83$$, $listener$$33$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getWheelDelta$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getWheelDelta$$($event$$231$$) {
    var $wheelDelta$$ = 0;
    return $wheelDelta$$ = null != $event$$231$$.wheelDelta ? $event$$231$$.wheelDelta : null != $event$$231$$.deltaY ? -$event$$231$$.deltaY : -$event$$231$$.detail
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_isHorizontal$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_isHorizontal$$() {
    return"horizontal" === this.$_orientation$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_isEmpty$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_isEmpty$$() {
    return!this.$_getContentParent$().hasChildNodes()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_reinitializeInnerDom$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_reinitializeInnerDom$$() {
    this.$_origScroll$ = this.$_getCurrScroll$();
    this.$_clearOverflowMaxSize$();
    this.$_setOverflowScroll$(0);
    this.$_hidePrevButton$();
    this.$_hideNextButton$()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_clearCachedSizes$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_clearCachedSizes$$() {
    this.$_oldComponentSize$ = this.$_oldContentSize$ = this.$_sizes$ = this.$_totalSize$ = null
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_checkSizes$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_checkSizes$$() {
    var $oldContentSize_totalSize$$ = this.$_oldContentSize$, $oldComponentSize$$ = this.$_oldComponentSize$, $contentContainer$$1_contentHeight$$ = this.$_contentContainer$, $contentWidth$$ = $contentContainer$$1_contentHeight$$.offsetWidth, $contentContainer$$1_contentHeight$$ = $contentContainer$$1_contentHeight$$.offsetHeight, $elem$$27_elemHeight$$ = this.$_elem$, $elemWidth$$ = $elem$$27_elemHeight$$.offsetWidth, $elem$$27_elemHeight$$ = $elem$$27_elemHeight$$.offsetHeight, $bSizeChanged$$ = 
    !1, $bFirst$$ = !$oldContentSize_totalSize$$ || !$oldComponentSize$$;
    if($bFirst$$ || $oldContentSize_totalSize$$.$w$ !== $contentWidth$$ || $oldContentSize_totalSize$$.$h$ !== $contentContainer$$1_contentHeight$$ || $oldComponentSize$$.$w$ !== $elemWidth$$ || $oldComponentSize$$.$h$ !== $elem$$27_elemHeight$$) {
      $bFirst$$ || this.$_reinitializeInnerDom$(), this.$_clearCachedSizes$(), this.$_oldContentSize$ = {$w$:$contentWidth$$, $h$:$contentContainer$$1_contentHeight$$}, this.$_oldComponentSize$ = {$w$:$elemWidth$$, $h$:$elem$$27_elemHeight$$}, $bSizeChanged$$ = !0
    }
    this.$_totalSize$ && this.$_sizes$ || (this.$_totalSize$ = this.$_measureContents$(), $bSizeChanged$$ = !0);
    $bSizeChanged$$ && ($bFirst$$ || this.$_adjustOverflowSize$(), $oldContentSize_totalSize$$ = this.$_totalSize$, this.$_alignButtons$($oldContentSize_totalSize$$.$w$, $oldContentSize_totalSize$$.$h$))
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_alignButtons$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_alignButtons$$($w$$6$$, $h$$5$$) {
    var $nextButtonStyle$$ = this.$_nextButton$.style, $prevButtonStyle$$ = this.$_prevButton$.style;
    if(this.$_isHorizontal$()) {
      var $hOffset_vOffset$$ = 0.5 * ($h$$5$$ - this.$_buttonHeight$);
      $nextButtonStyle$$.top = $hOffset_vOffset$$ + "px";
      $prevButtonStyle$$.top = $hOffset_vOffset$$ + "px"
    }else {
      $hOffset_vOffset$$ = 0.5 * ($w$$6$$ - this.$_buttonWidth$), this.$_bRtl$ ? ($nextButtonStyle$$.left = -$hOffset_vOffset$$ + "px", $prevButtonStyle$$.left = -$hOffset_vOffset$$ + "px") : ($nextButtonStyle$$.left = $hOffset_vOffset$$ + "px", $prevButtonStyle$$.left = $hOffset_vOffset$$ + "px")
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_adjustOverflowSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_adjustOverflowSize$$($bInit$$1$$) {
    var $contentContainer$$2$$ = this.$_contentContainer$, $bHoriz$$ = this.$_isHorizontal$(), $cbcClass$$4_elemInnerSize$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $cbcClass$$4_elemInnerSize$$ = $bHoriz$$ ? $cbcClass$$4_elemInnerSize$$.$_getElemInnerWidth$(this.$_elem$) : $cbcClass$$4_elemInnerSize$$.$_getElemInnerHeight$(this.$_elem$);
    ($bHoriz$$ ? $contentContainer$$2$$.offsetWidth : $contentContainer$$2$$.offsetHeight) > $cbcClass$$4_elemInnerSize$$ && this.$_setOverflowMaxSize$($cbcClass$$4_elemInnerSize$$);
    this.$_minScroll$ = 0;
    this.$_maxScroll$ = $bHoriz$$ ? $contentContainer$$2$$.offsetWidth - $cbcClass$$4_elemInnerSize$$ + this.$_buttonWidth$ : $contentContainer$$2$$.offsetHeight - $cbcClass$$4_elemInnerSize$$ + this.$_buttonHeight$;
    0 > this.$_maxScroll$ && (this.$_maxScroll$ = 0);
    this.$_hidePrevButton$();
    this.$_hideNextButton$();
    this.$_setCurrScroll$($bInit$$1$$ ? this.$_minScroll$ : this.$_origScroll$, !0);
    this.$_origScroll$ = 0
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_createInnerContainers$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_createInnerContainers$$() {
    var $self$$83$$ = this, $bHoriz$$1_style$$2$$ = this.$_isHorizontal$(), $overflowContainer$$ = document.createElement("div");
    this.$_overflowContainer$ = $overflowContainer$$;
    var $elem$$28_overflowContainerStyle$$ = $overflowContainer$$.style;
    $elem$$28_overflowContainerStyle$$.overflow = "hidden";
    $elem$$28_overflowContainerStyle$$.display = this.$_getCssDisplay$();
    $elem$$28_overflowContainerStyle$$.position = "relative";
    $bHoriz$$1_style$$2$$ && ($elem$$28_overflowContainerStyle$$.verticalAlign = "top");
    var $elem$$28_overflowContainerStyle$$ = this.$_elem$, $cbcClass$$5$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $contentContainer$$3$$ = document.createElement("div");
    this.$_contentContainer$ = $contentContainer$$3$$;
    var $contentContainerStyle_tableDiv$$ = $contentContainer$$3$$.style;
    $contentContainerStyle_tableDiv$$.position = "relative";
    $bHoriz$$1_style$$2$$ && ($contentContainerStyle_tableDiv$$.display = "inline-block");
    $overflowContainer$$.appendChild($contentContainer$$3$$);
    $contentContainerStyle_tableDiv$$ = null;
    if($bHoriz$$1_style$$2$$) {
      this.$_tableDiv$ = $contentContainerStyle_tableDiv$$ = document.createElement("div");
      $bHoriz$$1_style$$2$$ = $contentContainerStyle_tableDiv$$.style;
      $bHoriz$$1_style$$2$$.display = "table";
      var $tableRowDiv$$ = document.createElement("div"), $bHoriz$$1_style$$2$$ = $tableRowDiv$$.style;
      $bHoriz$$1_style$$2$$.display = "table-row";
      var $tableCellDivPrevButton$$ = document.createElement("div");
      this.$_tableCellDivPrevButton$ = $tableCellDivPrevButton$$;
      $bHoriz$$1_style$$2$$ = $tableCellDivPrevButton$$.style;
      $bHoriz$$1_style$$2$$.display = "table-cell";
      var $tableCellDivOverflow$$ = document.createElement("div"), $bHoriz$$1_style$$2$$ = $tableCellDivOverflow$$.style;
      $bHoriz$$1_style$$2$$.display = "table-cell";
      var $tableCellDivNextButton$$ = document.createElement("div");
      this.$_tableCellDivNextButton$ = $tableCellDivNextButton$$;
      $bHoriz$$1_style$$2$$ = $tableCellDivNextButton$$.style;
      $bHoriz$$1_style$$2$$.display = "table-cell";
      $tableCellDivOverflow$$.appendChild($overflowContainer$$);
      $tableRowDiv$$.appendChild($tableCellDivPrevButton$$);
      $tableRowDiv$$.appendChild($tableCellDivOverflow$$);
      $tableRowDiv$$.appendChild($tableCellDivNextButton$$);
      $contentContainerStyle_tableDiv$$.appendChild($tableRowDiv$$)
    }
    $cbcClass$$5$$.$_reparentChildren$($elem$$28_overflowContainerStyle$$, $contentContainer$$3$$);
    $contentContainerStyle_tableDiv$$ ? $elem$$28_overflowContainerStyle$$.appendChild($contentContainerStyle_tableDiv$$) : $elem$$28_overflowContainerStyle$$.appendChild($overflowContainer$$);
    $cbcClass$$5$$.$_addBubbleEventListener$($overflowContainer$$, "scroll", function() {
      $self$$83$$.$_handleScroll$()
    })
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getCssDisplay$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getCssDisplay$$() {
    return this.$_isHorizontal$() ? "inline-block" : "block"
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_createPrevButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_createPrevButton$$($buttonId_elem$$29_prevButtonStyle$$1$$, $buttonStyleClass$$, $icon$$3$$) {
    var $self$$84$$ = this, $prevButton$$1$$ = document.createElement("div");
    this.$_prevButton$ = $prevButton$$1$$;
    $buttonId_elem$$29_prevButtonStyle$$1$$ && $prevButton$$1$$.setAttribute("id", $buttonId_elem$$29_prevButtonStyle$$1$$);
    $prevButton$$1$$.setAttribute("class", $buttonStyleClass$$);
    $prevButton$$1$$.setAttribute("aria-hidden", "true");
    $buttonId_elem$$29_prevButtonStyle$$1$$ = $prevButton$$1$$.style;
    $buttonId_elem$$29_prevButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonId_elem$$29_prevButtonStyle$$1$$.position = "relative";
    this.$_isHorizontal$() && ($buttonId_elem$$29_prevButtonStyle$$1$$.verticalAlign = "top");
    $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_addBubbleEventListener$($prevButton$$1$$, "click", function() {
      $self$$84$$.$_scrollPrev$()
    });
    this.$_tableCellDivPrevButton$ ? this.$_tableCellDivPrevButton$.appendChild($prevButton$$1$$) : ($buttonId_elem$$29_prevButtonStyle$$1$$ = this.$_elem$, $buttonId_elem$$29_prevButtonStyle$$1$$.insertBefore($prevButton$$1$$, $buttonId_elem$$29_prevButtonStyle$$1$$.firstChild));
    $icon$$3$$ && $prevButton$$1$$.appendChild($icon$$3$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_createNextButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_createNextButton$$($buttonId$$1_nextButtonStyle$$1$$, $buttonStyleClass$$1$$, $icon$$4$$) {
    var $self$$85$$ = this, $nextButton$$2$$ = document.createElement("div");
    this.$_nextButton$ = $nextButton$$2$$;
    $buttonId$$1_nextButtonStyle$$1$$ && $nextButton$$2$$.setAttribute("id", $buttonId$$1_nextButtonStyle$$1$$);
    $nextButton$$2$$.setAttribute("class", $buttonStyleClass$$1$$);
    $nextButton$$2$$.setAttribute("aria-hidden", "true");
    $buttonId$$1_nextButtonStyle$$1$$ = $nextButton$$2$$.style;
    $buttonId$$1_nextButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonId$$1_nextButtonStyle$$1$$.position = "relative";
    this.$_isHorizontal$() && ($buttonId$$1_nextButtonStyle$$1$$.verticalAlign = "top");
    $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_addBubbleEventListener$($nextButton$$2$$, "click", function() {
      $self$$85$$.$_scrollNext$()
    });
    this.$_tableCellDivNextButton$ ? this.$_tableCellDivNextButton$.appendChild($nextButton$$2$$) : this.$_elem$.appendChild($nextButton$$2$$);
    $icon$$4$$ && $nextButton$$2$$.appendChild($icon$$4$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getContentParent$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getContentParent$$() {
    var $contentParent$$2$$ = this.$_contentParent$;
    $contentParent$$2$$ || ($contentParent$$2$$ = this.$_contentContainer$);
    return $contentParent$$2$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_measureContents$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_measureContents$$() {
    var $children$$5_contentParent$$3$$ = this.$_getContentParent$(), $totalSize$$1$$ = {$w$:0, $h$:0}, $sizes$$1$$ = [];
    if($children$$5_contentParent$$3$$.hasChildNodes()) {
      for(var $children$$5_contentParent$$3$$ = $children$$5_contentParent$$3$$.childNodes, $bHoriz$$2$$ = this.$_isHorizontal$(), $contentWidth$$1$$ = 0, $contentWidth$$1$$ = this.$_contentContainer$.offsetWidth, $startOffset$$ = 0, $prevSizeObj$$ = null, $i$$245$$ = 0;$i$$245$$ < $children$$5_contentParent$$3$$.length;$i$$245$$++) {
        var $child$$6_overlap$$ = $children$$5_contentParent$$3$$[$i$$245$$];
        if(1 === $child$$6_overlap$$.nodeType) {
          var $ww$$ = $child$$6_overlap$$.offsetWidth, $hh$$ = $child$$6_overlap$$.offsetHeight, $sizeObj$$1$$ = {$w$:$ww$$, $h$:$hh$$, id:$child$$6_overlap$$.id};
          $bHoriz$$2$$ ? ($sizeObj$$1$$.start = this.$_bRtl$ ? $contentWidth$$1$$ - ($child$$6_overlap$$.offsetLeft + $ww$$) : $child$$6_overlap$$.offsetLeft, 0 === $i$$245$$ && ($startOffset$$ = $sizeObj$$1$$.start), $sizeObj$$1$$.start -= $startOffset$$, $totalSize$$1$$.$w$ = $sizeObj$$1$$.start + $ww$$, $totalSize$$1$$.$h$ = Math.max($totalSize$$1$$.$h$, $hh$$), $sizeObj$$1$$.end = $totalSize$$1$$.$w$ - 1) : ($sizeObj$$1$$.start = $child$$6_overlap$$.offsetTop, $totalSize$$1$$.$w$ = Math.max($totalSize$$1$$.$w$, 
          $ww$$), $totalSize$$1$$.$h$ = $sizeObj$$1$$.start + $hh$$, $sizeObj$$1$$.end = $totalSize$$1$$.$h$ - 1);
          $prevSizeObj$$ && $prevSizeObj$$.end >= $sizeObj$$1$$.start && ($child$$6_overlap$$ = $prevSizeObj$$.end - ($sizeObj$$1$$.start - 1), $prevSizeObj$$.end -= $child$$6_overlap$$, $bHoriz$$2$$ ? $prevSizeObj$$.$w$ -= $child$$6_overlap$$ : $prevSizeObj$$.$h$ -= $child$$6_overlap$$);
          $sizes$$1$$.push($sizeObj$$1$$);
          $prevSizeObj$$ = $sizeObj$$1$$
        }
      }
    }
    this.$_sizes$ = $sizes$$1$$;
    return $totalSize$$1$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getSizes$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getSizes$$() {
    if(!this.$_sizes$) {
      var $totalSize$$2$$ = this.$_measureContents$();
      this.$_totalSize$ || (this.$_totalSize$ = $totalSize$$2$$)
    }
    return this.$_sizes$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_showNextButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_showNextButton$$() {
    this.$_nextButton$.style.display = this.$_getCssDisplay$()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_showPrevButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_showPrevButton$$() {
    this.$_prevButton$.style.display = this.$_getCssDisplay$()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_hideNextButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_hideNextButton$$() {
    this.$_nextButton$.style.display = "none"
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_hidePrevButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_hidePrevButton$$() {
    this.$_prevButton$.style.display = "none"
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_isNextButtonShown$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_isNextButtonShown$$() {
    return"none" !== this.$_nextButton$.style.display
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_isPrevButtonShown$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_isPrevButtonShown$$() {
    return"none" !== this.$_prevButton$.style.display
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getButtonSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getButtonSize$$() {
    return this.$_isHorizontal$() ? this.$_buttonWidth$ : this.$_buttonHeight$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_updateButtonVisibility$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_updateButtonVisibility$$($scroll$$2$$) {
    var $buttonSize$$ = this.$_getButtonSize$(), $ovScroll$$ = this.$_getCurrScroll$(), $ovSize$$ = this.$_getCurrViewportSize$(), $bNeedsScroll$$ = this.$_needsScroll$();
    $scroll$$2$$ <= this.$_minScroll$ ? (this.$_isPrevButtonShown$() && ($ovSize$$ += $buttonSize$$, $ovScroll$$ -= $buttonSize$$), this.$_hidePrevButton$()) : $bNeedsScroll$$ && (this.$_isPrevButtonShown$() || ($ovSize$$ -= $buttonSize$$, $ovScroll$$ += $buttonSize$$), this.$_showPrevButton$());
    $scroll$$2$$ >= this.$_maxScroll$ ? (this.$_isNextButtonShown$() && ($ovSize$$ += $buttonSize$$), this.$_hideNextButton$()) : $bNeedsScroll$$ && (this.$_isNextButtonShown$() || ($ovSize$$ -= $buttonSize$$), this.$_showNextButton$());
    this.$_setOverflowScroll$($ovScroll$$);
    $bNeedsScroll$$ ? this.$_setOverflowMaxSize$($ovSize$$) : this.$_clearOverflowMaxSize$()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setOverflowMaxSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setOverflowMaxSize$$($s$$31_size$$11$$) {
    var $overflowContainerStyle$$1$$ = this.$_overflowContainer$.style;
    $s$$31_size$$11$$ += "px";
    this.$_isHorizontal$() ? $overflowContainerStyle$$1$$.maxWidth = $s$$31_size$$11$$ : $overflowContainerStyle$$1$$.maxHeight = $s$$31_size$$11$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_clearOverflowMaxSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_clearOverflowMaxSize$$() {
    var $overflowContainerStyle$$2$$ = this.$_overflowContainer$.style;
    this.$_isHorizontal$() ? $overflowContainerStyle$$2$$.maxWidth = "" : $overflowContainerStyle$$2$$.maxHeight = ""
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setOverflowScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setOverflowScroll$$($scroll$$3$$) {
    var $overflowContainer$$3$$ = this.$_overflowContainer$;
    this.$_isHorizontal$() ? $overflowContainer$$3$$.scrollLeft = this.$_convertScrollLogicalToBrowser$($scroll$$3$$) : $overflowContainer$$3$$.scrollTop = $scroll$$3$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getCurrViewportSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getCurrViewportSize$$() {
    var $overflowContainer$$4$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? $overflowContainer$$4$$.offsetWidth : $overflowContainer$$4$$.offsetHeight
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setCurrScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setCurrScroll$$($scroll$$4$$, $bImmediate$$) {
    this.$_bScrolling$ || (this.$_bExternalScroll$ = !1, this.$_setCurrScrollHelper$($scroll$$4$$, $bImmediate$$))
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setCurrScrollHelper$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setCurrScrollHelper$$($scroll$$5$$, $bImmediate$$1$$) {
    if(!this.$_isEmpty$()) {
      this.$_bScrolling$ = !0;
      $scroll$$5$$ = this.$_constrainScroll$($scroll$$5$$);
      this.$_updateButtonVisibility$($scroll$$5$$);
      var $scrollFunc$$ = this.$_scrollFunc$;
      if($bImmediate$$1$$ || !$scrollFunc$$ || $scroll$$5$$ === this.$_getCurrScroll$()) {
        this.$_onScrollAnimEnd$($scroll$$5$$)
      }else {
        var $self$$86$$ = this;
        $scrollFunc$$.call(this.$_callbackObj$, this.$_overflowContainer$, this.$_convertScrollLogicalToBrowser$($scroll$$5$$), Math.abs(this.$_getCurrScroll$() - $scroll$$5$$) / $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SCROLL_SPEED$, function() {
          $self$$86$$.$_onScrollAnimEnd$($scroll$$5$$)
        })
      }
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getCurrScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getCurrScroll$$() {
    var $overflowContainer$$5$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? this.$_convertScrollBrowserToLogical$($overflowContainer$$5$$.scrollLeft) : $overflowContainer$$5$$.scrollTop
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_needsScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_needsScroll$$() {
    var $contentContainer$$5$$ = this.$_contentContainer$, $overflowContainer$$6$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? $contentContainer$$5$$.offsetWidth > $overflowContainer$$6$$.offsetWidth : $contentContainer$$5$$.offsetHeight > $overflowContainer$$6$$.offsetHeight
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_constrainScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_constrainScroll$$($scroll$$6$$) {
    !this.$_needsScroll$() || $scroll$$6$$ < this.$_minScroll$ ? $scroll$$6$$ = this.$_minScroll$ : $scroll$$6$$ > this.$_maxScroll$ && ($scroll$$6$$ = this.$_maxScroll$);
    return $scroll$$6$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleMouseWheel$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleMouseWheel$$($event$$235$$) {
    var $bConsumeEvent$$ = this.$_bScrolling$;
    if(this.$_needsScroll$() && !this.$_bScrolling$) {
      var $wheelDelta$$1$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getWheelDelta$($event$$235$$);
      0 > $wheelDelta$$1$$ && this.$_isNextButtonShown$() ? ($bConsumeEvent$$ = !0, this.$_scrollNext$()) : 0 < $wheelDelta$$1$$ && this.$_isPrevButtonShown$() && ($bConsumeEvent$$ = !0, this.$_scrollPrev$())
    }
    $bConsumeEvent$$ && ($event$$235$$.preventDefault(), $event$$235$$.stopPropagation())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleTouchStart$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleTouchStart$$($event$$236_eventTouches_firstTouch$$) {
    $event$$236_eventTouches_firstTouch$$ = $event$$236_eventTouches_firstTouch$$.touches;
    this.$_needsScroll$() && (!this.$_bScrolling$ && 1 === $event$$236_eventTouches_firstTouch$$.length) && (this.$_bTouch$ = !0, $event$$236_eventTouches_firstTouch$$ = $event$$236_eventTouches_firstTouch$$[0], this.$_touchStartCoord$ = this.$_isHorizontal$() ? $event$$236_eventTouches_firstTouch$$.pageX : $event$$236_eventTouches_firstTouch$$.pageY, this.$_touchStartScroll$ = this.$_getCurrScroll$(), this.$_touchStartNextScroll$ = this.$_calcNextScroll$(), this.$_touchStartPrevScroll$ = this.$_calcPrevScroll$())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleTouchMove$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleTouchMove$$($diff_event$$237_firstTouch$$1$$) {
    if(this.$_bTouch$) {
      var $bHoriz$$3$$ = this.$_isHorizontal$();
      $diff_event$$237_firstTouch$$1$$ = $diff_event$$237_firstTouch$$1$$.touches[0];
      $diff_event$$237_firstTouch$$1$$ = ($bHoriz$$3$$ ? $diff_event$$237_firstTouch$$1$$.pageX : $diff_event$$237_firstTouch$$1$$.pageY) - this.$_touchStartCoord$;
      var $overflowContainer$$7$$ = this.$_overflowContainer$;
      Math.abs($diff_event$$237_firstTouch$$1$$) < $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SWIPE_THRESHOLD$ * ($bHoriz$$3$$ ? $overflowContainer$$7$$.offsetWidth : $overflowContainer$$7$$.offsetHeight) ? this.$_setCurrScroll$(this.$_touchStartScroll$ - $diff_event$$237_firstTouch$$1$$, !0) : (this.$_setCurrScroll$(($bHoriz$$3$$ && this.$_bRtl$ ? 0 < $diff_event$$237_firstTouch$$1$$ : 0 > $diff_event$$237_firstTouch$$1$$) ? this.$_touchStartNextScroll$ : this.$_touchStartPrevScroll$), 
      this.$_bTouch$ = !1)
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleTouchEnd$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleTouchEnd$$() {
    this.$_bTouch$ && this.$_setCurrScroll$(this.$_touchStartScroll$);
    this.$_bTouch$ = !1
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleScroll$$() {
    this.$_bExternalScroll$ && !this.$_bScrolling$ && this.$_setCurrScrollHelper$(this.$_getCurrScroll$(), !0)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_onScrollAnimEnd$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_onScrollAnimEnd$$($lastVisIndex_scroll$$7$$) {
    this.$_setOverflowScroll$($lastVisIndex_scroll$$7$$);
    this.$_setExternalScrollTimeout$();
    this.$_bScrolling$ = !1;
    if(this.$_firstVisibleItemChangedFunc$) {
      this.$_firstVisibleItemIndex$ = this.$_calcFirstVisibleItemIndex$();
      $lastVisIndex_scroll$$7$$ = this.$_calcLastVisibleItemIndex$();
      var $sizes$$2$$ = this.$_getSizes$(), $sizeObj$$2$$ = $sizes$$2$$[this.$_firstVisibleItemIndex$];
      this.$_firstVisibleItemIndex$ !== $lastVisIndex_scroll$$7$$ && (this.$_getCurrScroll$() > $sizeObj$$2$$.start && this.$_firstVisibleItemIndex$ < $sizes$$2$$.length - 2) && (this.$_firstVisibleItemIndex$++, $sizeObj$$2$$ = $sizes$$2$$[this.$_firstVisibleItemIndex$]);
      this.$_firstVisibleItemId$ = $sizeObj$$2$$.id;
      this.$_firstVisibleItemChangedFunc$.call(this.$_callbackObj$, this.$_firstVisibleItemId$)
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setExternalScrollTimeout$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setExternalScrollTimeout$$() {
    var $self$$87$$ = this;
    window.setTimeout(function() {
      $self$$87$$ && ($self$$87$$.$_bExternalScroll$ = !0)
    }, 0)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_scrollNext$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_scrollNext$$() {
    this.$_bScrolling$ || this.$_setCurrScroll$(this.$_calcNextScroll$())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_scrollPrev$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_scrollPrev$$() {
    this.$_bScrolling$ || this.$_setCurrScroll$(this.$_calcPrevScroll$())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcNextScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcNextScroll$$() {
    var $nextIndex$$ = this.$_calcNextVisibleItemIndex$(), $scroll$$8$$ = 0;
    return $scroll$$8$$ = $nextIndex$$ === this.$_calcFirstVisibleItemIndex$() ? this.$_getCurrScroll$() + this.$_getCurrViewportSize$() : this.$_calcStartScroll$($nextIndex$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcPrevScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcPrevScroll$$() {
    var $prevIndex$$ = this.$_calcPrevVisibleItemIndex$(), $scroll$$9$$ = 0, $scroll$$9$$ = $prevIndex$$ === this.$_calcLastVisibleItemIndex$() ? this.$_getCurrScroll$() - this.$_getCurrViewportSize$() : this.$_calcEndScroll$($prevIndex$$);
    this.$_isNextButtonShown$() || ($scroll$$9$$ += this.$_getButtonSize$());
    $scroll$$9$$ < this.$_getButtonSize$() && ($scroll$$9$$ = this.$_minScroll$);
    return $scroll$$9$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcStartScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcStartScroll$$($index$$155$$) {
    return this.$_getSizes$()[$index$$155$$].start
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcEndScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcEndScroll$$($index$$156$$) {
    return this.$_getSizes$()[$index$$156$$].end - this.$_getCurrViewportSize$() + 1
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcFirstVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcFirstVisibleItemIndex$$() {
    var $i$$246$$ = this.$_calcItemIndex$(this.$_getCurrScroll$());
    return 0 > $i$$246$$ ? 0 : $i$$246$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcLastVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcLastVisibleItemIndex$$() {
    var $i$$247$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$() - 1), $sizes$$5$$ = this.$_getSizes$();
    return 0 > $i$$247$$ ? $sizes$$5$$.length - 1 : $i$$247$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcPrevVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcPrevVisibleItemIndex$$() {
    var $i$$248$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() - 1);
    return 0 > $i$$248$$ ? 0 : $i$$248$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcNextVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcNextVisibleItemIndex$$() {
    var $i$$249$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$()), $sizes$$6$$ = this.$_getSizes$();
    return 0 > $i$$249$$ ? $sizes$$6$$.length - 1 : $i$$249$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcItemIndex$$($scroll$$10$$) {
    for(var $sizes$$7$$ = this.$_getSizes$(), $i$$250$$ = 0;$i$$250$$ < $sizes$$7$$.length;$i$$250$$++) {
      if($scroll$$10$$ <= $sizes$$7$$[$i$$250$$].end) {
        return $i$$250$$
      }
    }
    return-1
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_convertScrollLogicalToBrowser$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_convertScrollLogicalToBrowser$$($scroll$$11$$) {
    var $newScroll$$ = $scroll$$11$$;
    if(this.$_bRtl$ && this.$_isHorizontal$()) {
      if(this.$_bAgentGecko$) {
        $newScroll$$ = -$scroll$$11$$
      }else {
        if(this.$_bAgentWebkit$ || this.$_bAgentOpera$) {
          $newScroll$$ = this.$_contentContainer$.offsetWidth - this.$_overflowContainer$.offsetWidth - $scroll$$11$$
        }
      }
    }
    return $newScroll$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_convertScrollBrowserToLogical$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_convertScrollBrowserToLogical$$($scroll$$12$$) {
    return this.$_convertScrollLogicalToBrowser$($scroll$$12$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SCROLL_SPEED$ = 1.1;
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SWIPE_THRESHOLD$ = 0.33;
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_CHECK_SIZES_INTERVAL$ = 300;
  (function() {
    var $sizeRelatedOptions$$ = {buttons:!0, height:!0, maxHeight:!0, maxWidth:!0, minHeight:!0, minWidth:!0, width:!0}, $resizableRelatedOptions$$ = {maxHeight:!0, maxWidth:!0, minHeight:!0, minWidth:!0};
    $oj$$18$$.$__registerWidget$("oj.ojDialog", $$$$17$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{appendTo:"body", autoOpen:!0, buttons:[], escapeBehavior:"close", closeOnEscape:!0, closeText:"", dialogClass:"", dragAffordance:"title-bar", draggable:!0, hide:null, height:"auto", initialVisibility:"show", maxHeight:null, maxWidth:null, minHeight:150, minWidth:150, modal:!1, modality:"modal", position:{my:"center", at:"center", of:window, collision:"fit", $using$:function($pos$$11$$) {
      var $topOffset$$ = $$$$17$$(this).css($pos$$11$$).offset().top;
      0 > $topOffset$$ && $$$$17$$(this).css("top", $pos$$11$$.top - $topOffset$$)
    }}, resizeBehavior:"resizable", resizable:!0, role:"resizable", show:null, title:null, width:300, beforeClose:null, close:null, drag:null, dragStart:null, dragStop:null, focus:null, open:null, resize:null, resizeStart:null, resizeStop:null}, _create:function() {
      this.$originalCss$ = {display:this.element[0].style.display, width:this.element[0].style.width, minHeight:this.element[0].style.minHeight, maxHeight:this.element[0].style.maxHeight, height:this.element[0].style.height};
      this.$originalPosition$ = {parent:this.element.parent(), index:this.element.parent().children().index(this.element)};
      this.$originalTitle$ = this.element.attr("title");
      this.options.title = this.options.title || this.$originalTitle$;
      this.$_createWrapper$();
      this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.$uiDialog$);
      this.$userDefinedDialog$ = !1;
      this.$uiDialog$.find(".oj-dialog-header").length && (this.$userDefinedDialog$ = !0);
      this.$userDefinedDialog$ && this.$uiDialog$.find(".oj-dialog-header").prependTo(this.$uiDialog$);
      this.$userDefinedDialog$ || this.$_createTitlebar$();
      this.$_createButtonPane$();
      "title-bar" === this.options.dragAffordance && $$$$17$$.fn.draggable && this.$_makeDraggable$();
      "resizable" === this.options.resizeBehavior && $$$$17$$.fn.resizable && this.$_makeResizable$();
      this.$_isOpen$ = !1;
      this._super()
    }, _init:function() {
      "show" === this.options.initialVisibility && this.open()
    }, $_appendTo$:function() {
      var $element$$63$$ = this.options.appendTo;
      return $element$$63$$ && ($element$$63$$.jquery || $element$$63$$.nodeType) ? $$$$17$$($element$$63$$) : this.document.find($element$$63$$ || "body").eq(0)
    }, _destroy:function() {
      var $next$$3$$, $originalPosition$$ = this.$originalPosition$;
      this.$_destroyOverlay$();
      this.element.removeUniqueId().removeClass("oj-dialog-content").css(this.$originalCss$).detach();
      this.$uiDialog$.stop(!0, !0).remove();
      this.$originalTitle$ && this.element.attr("title", this.$originalTitle$);
      $next$$3$$ = $originalPosition$$.parent.children().eq($originalPosition$$.index);
      $next$$3$$.length && $next$$3$$[0] !== this.element[0] ? $next$$3$$.before(this.element) : $originalPosition$$.parent.append(this.element)
    }, widget:$JSCompiler_get$$("$uiDialog$"), disable:$$$$17$$.noop, enable:$$$$17$$.noop, close:function($event$$240$$) {
      var $that$$3$$ = this;
      this.$_isOpen$ && !1 !== this._trigger("beforeClose", $event$$240$$) && (this.$_isOpen$ = !1, this.$_destroyOverlay$(), this.opener.filter(":focusable").focus().length || $$$$17$$(this.document[0].activeElement).blur(), this._hide(this.$uiDialog$, this.options.hide, function() {
        $that$$3$$._trigger("close", $event$$240$$)
      }))
    }, $isOpen$:$JSCompiler_get$$("$_isOpen$"), $moveToTop$:function() {
      this.$_moveToTop$()
    }, $_moveToTop$:function($event$$241$$, $silent$$16$$) {
      var $moved$$ = !!this.$uiDialog$.nextAll(":visible").insertBefore(this.$uiDialog$).length;
      $moved$$ && !$silent$$16$$ && this._trigger("focus", $event$$241$$);
      return $moved$$
    }, open:function() {
      var $that$$4$$ = this;
      this.$_isOpen$ ? this.$_moveToTop$() && this.$_focusTabbable$() : (this.$_isOpen$ = !0, this.opener = $$$$17$$(this.document[0].activeElement), this.$_size$(), this.$_position$(), this.$_createOverlay$(), this.$_moveToTop$(null, !0), this._show(this.$uiDialog$, this.options.show, function() {
        $that$$4$$.$_focusTabbable$();
        $that$$4$$._trigger("focus")
      }), this._trigger("open"))
    }, $_focusTabbable$:function() {
      var $hasFocus$$ = this.element.find("[autofocus]");
      $hasFocus$$.length || ($hasFocus$$ = this.element.find(":tabbable"));
      $hasFocus$$.length || this.$uiDialogButtonPane$ && ($hasFocus$$ = this.$uiDialogButtonPane$.find(":tabbable"));
      $hasFocus$$.length || this.$uiDialogTitlebarClose$ && ($hasFocus$$ = this.$uiDialogTitlebarClose$.filter(":tabbable"));
      $hasFocus$$.length || ($hasFocus$$ = this.$uiDialog$);
      $hasFocus$$.eq(0).focus()
    }, $_keepFocus$:function($event$$242$$) {
      function $checkFocus$$() {
        var $activeElement$$2$$ = this.document[0].activeElement;
        this.$uiDialog$[0] === $activeElement$$2$$ || $$$$17$$.contains(this.$uiDialog$[0], $activeElement$$2$$) || this.$_focusTabbable$()
      }
      $event$$242$$.preventDefault();
      $checkFocus$$.call(this);
      this._delay($checkFocus$$)
    }, $_createWrapper$:function() {
      this.$uiDialog$ = $$$$17$$("\x3cdiv\x3e").addClass("oj-dialog oj-widget oj-dialog-front " + this.options.dialogClass).hide().attr({tabIndex:-1, role:"dialog"}).appendTo(this.$_appendTo$());
      this._on(this.$uiDialog$, {keydown:function($event$$243$$) {
        if("close" === this.options.escapeBehavior && !$event$$243$$.isDefaultPrevented() && $event$$243$$.keyCode && $event$$243$$.keyCode === $$$$17$$.ui.keyCode.ESCAPE) {
          $event$$243$$.preventDefault(), this.close($event$$243$$)
        }else {
          if($event$$243$$.keyCode === $$$$17$$.ui.keyCode.TAB) {
            var $last$$3_tabbables$$ = this.$uiDialog$.find(":tabbable"), $first$$6$$ = $last$$3_tabbables$$.filter(":first"), $last$$3_tabbables$$ = $last$$3_tabbables$$.filter(":last");
            $event$$243$$.target !== $last$$3_tabbables$$[0] && $event$$243$$.target !== this.$uiDialog$[0] || $event$$243$$.shiftKey ? $event$$243$$.target !== $first$$6$$[0] && $event$$243$$.target !== this.$uiDialog$[0] || !$event$$243$$.shiftKey || ($last$$3_tabbables$$.focus(1), $event$$243$$.preventDefault()) : ($first$$6$$.focus(1), $event$$243$$.preventDefault())
          }
        }
      }, mousedown:function($event$$244$$) {
        this.$_moveToTop$($event$$244$$) && this.$_focusTabbable$()
      }});
      this.element.find("[aria-describedby]").length || this.$uiDialog$.attr({"aria-describedby":this.element.uniqueId().attr("id")})
    }, $_createTitlebar$:function() {
      var $uiDialogTitle$$;
      this.$uiDialogTitlebar$ = $$$$17$$("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix oj-dialog-temp-createdtitlebar").prependTo(this.$uiDialog$);
      this._on(this.$uiDialogTitlebar$, {mousedown:function($event$$245$$) {
        $$$$17$$($event$$245$$.target).closest(".oj-dialog-close-icon") || this.$uiDialog$.focus()
      }});
      this.$uiDialogTitlebarClose$ = $$$$17$$("\x3cbutton\x3e\x3c/button\x3e").ojButton({display:"icons", icons:{start:"oj-widget-icon oj-dialog-close-icon"}, text:!1}).addClass("oj-dialog-header-close oj-button-no-chrome").appendTo(this.$uiDialogTitlebar$);
      this._on(this.$uiDialogTitlebarClose$, {click:function($event$$246$$) {
        $event$$246$$.preventDefault();
        this.close($event$$246$$)
      }});
      $uiDialogTitle$$ = $$$$17$$("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").prependTo(this.$uiDialogTitlebar$);
      this.$_title$($uiDialogTitle$$);
      this.$uiDialog$.attr({"aria-labelledby":$uiDialogTitle$$.attr("id")})
    }, $_title$:function($title$$8$$) {
      this.options.title || $title$$8$$.html("\x26#160;");
      $title$$8$$.text(this.options.title)
    }, $_createButtonPane$:function() {
      this.$uiDialogButtonPane$ = $$$$17$$("\x3cdiv\x3e").addClass("oj-dialog-buttonpane oj-helper-clearfix");
      this.$uiButtonSet$ = $$$$17$$("\x3cdiv\x3e").addClass("oj-dialog-buttonset").appendTo(this.$uiDialogButtonPane$);
      this.$_createButtons$()
    }, $_createButtons$:function() {
      var $that$$5$$ = this, $buttons$$1$$ = this.options.buttons;
      this.$uiDialogButtonPane$.remove();
      this.$uiButtonSet$.empty();
      $$$$17$$.isEmptyObject($buttons$$1$$) || $$$$17$$.isArray($buttons$$1$$) && !$buttons$$1$$.length ? this.$uiDialog$.removeClass("oj-dialog-buttons") : ($$$$17$$.each($buttons$$1$$, function($name$$98$$, $props$$5$$) {
        var $click$$, $buttonOptions$$;
        $props$$5$$ = $$$$17$$.isFunction($props$$5$$) ? {click:$props$$5$$, text:$name$$98$$} : $props$$5$$;
        $props$$5$$ = $$$$17$$.extend({type:"button"}, $props$$5$$);
        $click$$ = $props$$5$$.click;
        $props$$5$$.click = function $$props$$5$$$click$() {
          $click$$.apply($that$$5$$.element[0], arguments)
        };
        $buttonOptions$$ = {icons:$props$$5$$.icons, text:$props$$5$$.showText};
        delete $props$$5$$.icons;
        delete $props$$5$$.showText;
        $$$$17$$("\x3cbutton\x3e\x3c/button\x3e", $props$$5$$).ojButton($buttonOptions$$).appendTo($that$$5$$.$uiButtonSet$)
      }), this.$uiDialog$.addClass("oj-dialog-buttons"), this.$uiDialogButtonPane$.appendTo(this.$uiDialog$))
    }, $_makeDraggable$:function() {
      function $filteredUi$$($ui$$17$$) {
        return{position:$ui$$17$$.position, offset:$ui$$17$$.offset}
      }
      var $that$$6$$ = this, $options$$265$$ = this.options;
      this.$uiDialog$.draggable({cancel:".oj-dialog-content, .oj-dialog-header-close", handle:".oj-dialog-header", $containment$:"document", start:function($event$$247$$, $ui$$18$$) {
        $$$$17$$(this).addClass("oj-dialog-dragging");
        $that$$6$$.$_blockFrames$();
        $that$$6$$._trigger("dragStart", $event$$247$$, $filteredUi$$($ui$$18$$))
      }, drag:function($event$$248$$, $ui$$19$$) {
        $that$$6$$._trigger("drag", $event$$248$$, $filteredUi$$($ui$$19$$))
      }, stop:function($event$$249$$, $ui$$20$$) {
        $options$$265$$.position = [$ui$$20$$.position.left - $that$$6$$.document.scrollLeft(), $ui$$20$$.position.top - $that$$6$$.document.scrollTop()];
        $$$$17$$(this).removeClass("oj-dialog-dragging");
        $that$$6$$.$_unblockFrames$();
        $that$$6$$._trigger("dragStop", $event$$249$$, $filteredUi$$($ui$$20$$))
      }})
    }, $_makeResizable$:function() {
      function $filteredUi$$1$$($ui$$21$$) {
        return{$originalPosition$:$ui$$21$$.$originalPosition$, $originalSize$:$ui$$21$$.$originalSize$, position:$ui$$21$$.position, size:$ui$$21$$.size}
      }
      var $that$$7$$ = this, $options$$266$$ = this.options, $handles_resizeHandles$$ = $options$$266$$.resizable, $position$$19$$ = this.$uiDialog$.css("position"), $handles_resizeHandles$$ = "string" === typeof $handles_resizeHandles$$ ? $handles_resizeHandles$$ : "n,e,s,w,se,sw,ne,nw";
      this.$uiDialog$.resizable({cancel:".oj-dialog-content", $containment$:"document", $alsoResize$:this.element, maxWidth:$options$$266$$.maxWidth, maxHeight:$options$$266$$.maxHeight, minWidth:$options$$266$$.minWidth, minHeight:this.$_minHeight$(), $handles$:$handles_resizeHandles$$, start:function($event$$250$$, $ui$$22$$) {
        $$$$17$$(this).addClass("oj-dialog-resizing");
        $that$$7$$.$_blockFrames$();
        $that$$7$$._trigger("resizeStart", $event$$250$$, $filteredUi$$1$$($ui$$22$$))
      }, resize:function($event$$251$$, $ui$$23$$) {
        $that$$7$$._trigger("resize", $event$$251$$, $filteredUi$$1$$($ui$$23$$))
      }, stop:function($event$$252$$, $ui$$24$$) {
        $options$$266$$.height = $$$$17$$(this).height();
        $options$$266$$.width = $$$$17$$(this).width();
        $$$$17$$(this).removeClass("oj-dialog-resizing");
        $that$$7$$.$_unblockFrames$();
        $that$$7$$._trigger("resizeStop", $event$$252$$, $filteredUi$$1$$($ui$$24$$))
      }}).css("position", $position$$19$$)
    }, $_minHeight$:function() {
      var $options$$267$$ = this.options;
      return"auto" === $options$$267$$.height ? $options$$267$$.minHeight : Math.min($options$$267$$.minHeight, $options$$267$$.height)
    }, $_position$:function() {
      var $isVisible$$ = this.$uiDialog$.is(":visible");
      $isVisible$$ || this.$uiDialog$.show();
      this.$uiDialog$.position(this.options.position);
      $isVisible$$ || this.$uiDialog$.hide()
    }, _setOptions:function($options$$268$$) {
      var $that$$8$$ = this, $resize$$2$$ = !1, $resizableOptions$$ = {};
      $$$$17$$.each($options$$268$$, function($key$$96$$, $value$$178$$) {
        $that$$8$$._setOption($key$$96$$, $value$$178$$);
        $key$$96$$ in $sizeRelatedOptions$$ && ($resize$$2$$ = !0);
        $key$$96$$ in $resizableRelatedOptions$$ && ($resizableOptions$$[$key$$96$$] = $value$$178$$)
      });
      $resize$$2$$ && (this.$_size$(), this.$_position$());
      this.$uiDialog$.is(":data(oj-resizable)") && this.$uiDialog$.resizable("option", $resizableOptions$$)
    }, _setOption:function($key$$97$$, $value$$179$$) {
      var $isDraggable_isResizable$$, $uiDialog$$ = this.$uiDialog$;
      "dialogClass" === $key$$97$$ && $uiDialog$$.removeClass(this.options.dialogClass).addClass($value$$179$$);
      "disabled" !== $key$$97$$ && (this._super($key$$97$$, $value$$179$$), "appendTo" === $key$$97$$ && this.$uiDialog$.appendTo(this.$_appendTo$()), "buttons" === $key$$97$$ && this.$_createButtons$(), "draggable" === $key$$97$$ && (($isDraggable_isResizable$$ = $uiDialog$$.is(":data(oj-draggable)")) && !$value$$179$$ && $uiDialog$$.draggable("destroy"), !$isDraggable_isResizable$$ && $value$$179$$ && this.$_makeDraggable$()), "position" === $key$$97$$ && this.$_position$(), "resizable" === $key$$97$$ && 
      (($isDraggable_isResizable$$ = $uiDialog$$.is(":data(oj-resizable)")) && !$value$$179$$ && $uiDialog$$.resizable("destroy"), $isDraggable_isResizable$$ && "string" === typeof $value$$179$$ && $uiDialog$$.resizable("option", "handles", $value$$179$$), $isDraggable_isResizable$$ || !1 === $value$$179$$ || this.$_makeResizable$()), "title" === $key$$97$$ && this.$_title$(this.$uiDialogTitlebar$.find(".oj-dialog-title")))
    }, $_size$:function() {
      var $nonContentHeight$$, $minContentHeight$$, $maxContentHeight$$, $options$$269$$ = this.options;
      this.element.show().css({width:"auto", minHeight:0, maxHeight:"none", height:0});
      $options$$269$$.minWidth > $options$$269$$.width && ($options$$269$$.width = $options$$269$$.minWidth);
      $nonContentHeight$$ = this.$uiDialog$.css({height:"auto", width:$options$$269$$.width}).outerHeight();
      $minContentHeight$$ = Math.max(0, $options$$269$$.minHeight - $nonContentHeight$$);
      $maxContentHeight$$ = "number" === typeof $options$$269$$.maxHeight ? Math.max(0, $options$$269$$.maxHeight - $nonContentHeight$$) : "none";
      "auto" === $options$$269$$.height ? this.element.css({minHeight:$minContentHeight$$, maxHeight:$maxContentHeight$$, height:"auto"}) : this.element.height(Math.max(0, $options$$269$$.height - $nonContentHeight$$));
      this.$uiDialog$.is(":data(oj-resizable)") && this.$uiDialog$.resizable("option", "minHeight", this.$_minHeight$())
    }, $_blockFrames$:function() {
      this.$iframeBlocks$ = this.document.find("iframe").map(function() {
        var $iframe$$ = $$$$17$$(this), $offset$$23$$ = $iframe$$.offset();
        return $$$$17$$("\x3cdiv\x3e").css({position:"absolute", width:$iframe$$.outerWidth(), height:$iframe$$.outerHeight()}).appendTo($iframe$$.parent()).offset($offset$$23$$)[0]
      })
    }, $_unblockFrames$:function() {
      this.$iframeBlocks$ && (this.$iframeBlocks$.remove(), delete this.$iframeBlocks$)
    }, $_allowInteraction$:function($event$$253$$) {
      return $$$$17$$($event$$253$$.target).closest(".oj-dialog").length ? !0 : !!$$$$17$$($event$$253$$.target).closest(".oj-datepicker").length
    }, $_createOverlay$:function() {
      if("modeless" !== this.options.modality) {
        var $that$$9$$ = this, $widgetFullName$$ = this.widgetFullName;
        $$$$17$$.ui.dialog.overlayInstances || this._delay(function() {
          $$$$17$$.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function($event$$254$$) {
            $that$$9$$.$_allowInteraction$($event$$254$$) || ($event$$254$$.preventDefault(), $$$$17$$(".oj-dialog:visible:last .oj-dialog-content").data($widgetFullName$$).$_focusTabbable$())
          })
        });
        this.$overlay$ = $$$$17$$("\x3cdiv\x3e").addClass("oj-widget-overlay oj-dialog-front").appendTo(this.$_appendTo$());
        this._on(this.$overlay$, {mousedown:"_keepFocus"});
        $$$$17$$.ui.dialog.overlayInstances++
      }
    }, $_destroyOverlay$:function() {
      "modeless" !== this.options.modality && this.$overlay$ && ($$$$17$$.ui.dialog.overlayInstances--, $$$$17$$.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.$overlay$.remove(), this.$overlay$ = null)
    }});
    $$$$17$$.ui.dialog.overlayInstances = 0
  })();
  $oj$$18$$.$__registerWidget$("oj.ojCheckboxset", $$$$17$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{}, refresh:function() {
    this._super();
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$().filter(".oj-checkbox")._ojRadioCheckbox("refresh").end().not(".oj-checkbox")._ojRadioCheckbox().end();
    this.$_setup$()
  }, widget:$JSCompiler_get$$("$uiCheckboxset$"), _create:function() {
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$()._ojRadioCheckbox();
    this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-widget").attr("role", "group");
    this._on(this.$_events$);
    this.$_setup$();
    this._super();
    this.$_SetRootAttributes$()
  }, $_findCheckboxesWithMatchingName$:function() {
    var $first$$7_name$$99$$ = this.element.find("input[type\x3dcheckbox]:first");
    0 === $first$$7_name$$99$$.length && $oj$$18$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
    $first$$7_name$$99$$ = $first$$7_name$$99$$.attr("name");
    return void 0 === $first$$7_name$$99$$ ? this.element.find("input[type\x3dcheckbox]").not("[name]") : this.element.find("input[type\x3dcheckbox][name\x3d" + $first$$7_name$$99$$ + "]")
  }, $_showContextMenu$:function($menu$$15$$, $event$$255$$) {
    var $checkboxes_launcher$$9$$ = this.element.find("input[type\x3dcheckbox]"), $checked$$4$$ = $checkboxes_launcher$$9$$.filter(":checked"), $checkboxes_launcher$$9$$ = $checked$$4$$.length ? $checked$$4$$ : $checkboxes_launcher$$9$$.first();
    $menu$$15$$.show($event$$255$$, {launcher:$checkboxes_launcher$$9$$, focus:"menu"})
  }, $_setup$:function() {
    this.options.disabled && this.disable()
  }, $_events$:{change:function($event$$256$$) {
    this._HandleChangeEvent($event$$256$$)
  }}, _HandleChangeEvent:function() {
    this._super()
  }, _GetDisplayValue:function() {
    return this._GetElementValue()
  }, _SetDisplayValue:function($checkedBoxes$$) {
    this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
    if(null != $checkedBoxes$$) {
      for(var $i$$251$$ = 0;$i$$251$$ < $checkedBoxes$$.length;$i$$251$$++) {
        var $checkboxWithMatchingValue_valueFilter$$1$$ = "[value\x3d'" + $checkedBoxes$$[$i$$251$$] + "']";
        void 0 !== $checkboxWithMatchingValue_valueFilter$$1$$ && void 0 !== this.$$checkboxes$ && ($checkboxWithMatchingValue_valueFilter$$1$$ = this.$$checkboxes$.filter($checkboxWithMatchingValue_valueFilter$$1$$), void 0 !== $checkboxWithMatchingValue_valueFilter$$1$$ && 0 < $checkboxWithMatchingValue_valueFilter$$1$$.length && ($checkboxWithMatchingValue_valueFilter$$1$$.prop("checked") || $checkboxWithMatchingValue_valueFilter$$1$$._ojRadioCheckbox("option", "checked", !0)))
      }
    }
  }, _GetElementValue:function() {
    var $checkedValues$$ = [], $selectedCheckbox$$ = this.$$checkboxes$.filter(":checked");
    if(0 === $selectedCheckbox$$.length) {
      return null
    }
    $selectedCheckbox$$.each(function() {
      $checkedValues$$.push($$$$17$$(this).val())
    });
    return $checkedValues$$
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-checkboxset"), _GetContentElement:function() {
    return this.$_findCheckboxesWithMatchingName$()
  }, _RefreshAriaRequired:function($ariaValue$$3_value$$181$$) {
    var $rootNode$$1$$ = this.$uiCheckboxset$;
    ($ariaValue$$3_value$$181$$ = "required" == $ariaValue$$3_value$$181$$ ? !0 : !1) && $rootNode$$1$$ ? $rootNode$$1$$.attr("aria-required", $ariaValue$$3_value$$181$$) : $rootNode$$1$$.removeAttr("aria-required")
  }, _setOption:function($key$$98$$, $value$$182$$) {
    this._super($key$$98$$, $value$$182$$);
    "disabled" === $key$$98$$ && this.$$checkboxes$._ojRadioCheckbox("option", $key$$98$$, $value$$182$$)
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-checkboxset oj-enabled oj-widget").removeAttr("role");
    this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy")
  }});
  (function() {
    $oj$$18$$.$__registerWidget$("oj.ojTabs", $$$$17$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", delay:300, options:{active:0, disabled:!1, event:"click", orientation:"horizontal", removable:!1, reorder:!1, activate:null, beforeActivate:null, remove:null, beforeRemove:null}, _create:function() {
      var $self$$88$$ = this, $options$$270$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_setupOrientation$($options$$270$$.orientation);
      this.element.delegate(".oj-tabs-nav \x3e li", "mousedown" + this.eventNamespace, function($event$$258$$) {
        $$$$17$$(this).is(".oj-disabled") && $event$$258$$.preventDefault()
      }).delegate(".oj-tabs-anchor", "focus" + this.eventNamespace, function() {
        $$$$17$$(this).closest("li").is(".oj-disabled") && this.blur()
      });
      this.$_processTabs$();
      if($$$$17$$.isArray($options$$270$$.disabled)) {
        var $disabledTabs$$ = this.$tabs$.filter(".oj-disabled");
        $options$$270$$.disabled = $$$$17$$.unique($options$$270$$.disabled.concat($$$$17$$.map($disabledTabs$$, function($li$$1$$) {
          return $self$$88$$.$tabs$.index($li$$1$$)
        }))).sort()
      }
      this.$_needActivate$ = $options$$270$$.active;
      $options$$270$$.active = -1;
      this.$_refresh$()
    }, $_showContextMenu$:function($menu$$16$$, $event$$259$$) {
      $menu$$16$$.show($event$$259$$, {launcher:this.element.children(".oj-tabs-nav").children("[tabindex\x3d0]"), focus:"menu"})
    }, $_tabKeydown$:function($event$$260$$) {
      var $focusedTab$$ = $$$$17$$(this.document[0].activeElement).closest("li"), $selectedIndex$$ = this.$tabs$.index($focusedTab$$), $goingForward$$ = !0;
      if(!this.$_handlePageNav$($event$$260$$)) {
        switch($event$$260$$.keyCode) {
          case $$$$17$$.ui.keyCode.RIGHT:
          ;
          case $$$$17$$.ui.keyCode.DOWN:
            $selectedIndex$$++;
            break;
          case $$$$17$$.ui.keyCode.UP:
          ;
          case $$$$17$$.ui.keyCode.LEFT:
            $goingForward$$ = !1;
            $selectedIndex$$--;
            break;
          case $$$$17$$.ui.keyCode.END:
            $selectedIndex$$ = this.$tabs$.length - 1;
            break;
          case $$$$17$$.ui.keyCode.HOME:
            $selectedIndex$$ = 0;
            break;
          default:
            return
        }
        $event$$260$$.preventDefault();
        clearTimeout(this.$activating$);
        $selectedIndex$$ = this.$_focusNextTab$($selectedIndex$$, $goingForward$$);
        $event$$260$$.ctrlKey || ($focusedTab$$.attr("aria-selected", "false"), this.$tabs$.eq($selectedIndex$$).attr("aria-selected", "true"), this.$activating$ = this._delay(function() {
          this.option("active", $selectedIndex$$)
        }, this.delay))
      }
    }, $_panelKeydown$:function($anchor_event$$261$$) {
      this.$_handlePageNav$($anchor_event$$261$$) || ($anchor_event$$261$$.ctrlKey && $anchor_event$$261$$.keyCode === $$$$17$$.ui.keyCode.UP && ($anchor_event$$261$$.preventDefault(), this.active.focus()), $anchor_event$$261$$.altKey && 46 === $anchor_event$$261$$.keyCode && ($anchor_event$$261$$.preventDefault(), $anchor_event$$261$$ = this.active.find(".oj-tabs-close-icon"), this.$_removeTabHandler$({target:$anchor_event$$261$$, currentTarget:$anchor_event$$261$$, preventDefault:$$$$17$$.noop})))
    }, $_handlePageNav$:function($event$$262$$) {
      if($event$$262$$.ctrlKey && $event$$262$$.keyCode === $$$$17$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$(this.options.active - 1, !1)), !0
      }
      if($event$$262$$.ctrlKey && $event$$262$$.keyCode === $$$$17$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$(this.options.active + 1, !0)), !0
      }
    }, $_isTabDisabled$:function($index$$157$$) {
      return-1 != $$$$17$$.inArray($index$$157$$, this.options.disabled)
    }, $_findNextTab$:function($index$$158$$, $goingForward$$1$$) {
      function $constrain$$() {
        $index$$158$$ > $lastTabIndex$$ && ($index$$158$$ = 0);
        0 > $index$$158$$ && ($index$$158$$ = $lastTabIndex$$);
        return $index$$158$$
      }
      for(var $lastTabIndex$$ = this.$tabs$.length - 1;this.$_isTabDisabled$($constrain$$());) {
        $index$$158$$ = $goingForward$$1$$ ? $index$$158$$ + 1 : $index$$158$$ - 1
      }
      return $index$$158$$
    }, $_focusNextTab$:function($index$$159$$, $goingForward$$2$$) {
      $index$$159$$ = this.$_findNextTab$($index$$159$$, $goingForward$$2$$);
      this.$tabs$.eq($index$$159$$).focus();
      return $index$$159$$
    }, $_activateNextTab$:function($index$$160$$) {
      for(var $lastTabIndex$$1$$ = this.$tabs$.length - 1, $next$$4$$ = $index$$160$$ + 1;$next$$4$$ <= $lastTabIndex$$1$$;) {
        if(!this.$_isTabDisabled$($next$$4$$)) {
          return this.$_activate$($next$$4$$), $next$$4$$ - 1
        }
        $next$$4$$++
      }
      for($next$$4$$ = $index$$160$$ - 1;0 <= $next$$4$$;) {
        if(!this.$_isTabDisabled$($next$$4$$)) {
          return this.$_activate$($next$$4$$), $next$$4$$
        }
        $next$$4$$--
      }
      return-1
    }, _setOption:function($key$$99$$, $value$$183$$) {
      "active" === $key$$99$$ ? ("string" === typeof $value$$183$$ && ($value$$183$$ = this.$_parse$($value$$183$$)), this.$_activate$($value$$183$$)) : "disabled" === $key$$99$$ ? this.$_setupDisabled$($value$$183$$) : "removable" === $key$$99$$ ? this.$_setRemovable$($value$$183$$) : "reorder" === $key$$99$$ ? $value$$183$$ !== this.options.reorder && (this.options.reorder = $value$$183$$, this.$_setupReorder$()) : "orientation" === $key$$99$$ ? (this.$_setupOrientation$($value$$183$$), this.refresh()) : 
      (this._super($key$$99$$, $value$$183$$), "event" === $key$$99$$ && (this.$_tearDownEvents$(), this._super($key$$99$$, $value$$183$$), this.$_setupEvents$()))
    }, refresh:function() {
      this._super();
      this.$_destroyCloseIcons$();
      this.$_processTabs$();
      this.$_refresh$()
    }, $_refresh$:function() {
      this.active = this.$tabs$.length && -1 != this.options.active ? this.$_findActive$(this.options.active) : $$$$17$$();
      this.$_setupDisabled$(this.options.disabled);
      this.$_createCloseIcons$();
      this.$_tearDownEvents$();
      this.$_setupEvents$();
      this.$tabs$.not(this.active).attr({"aria-selected":"false", tabIndex:"-1"});
      this.$panels$.not(this.$_getPanelForTab$(this.active)).hide().attr({"aria-expanded":"false", "aria-hidden":"true"});
      this.active.length ? (this.active.addClass("oj-tabs-active").attr({"aria-selected":"true", tabIndex:"0"}), this.$_getPanelForTab$(this.active).show().attr({"aria-expanded":"true", "aria-hidden":"false"})) : this.$tabs$.eq(0).attr("tabIndex", "0");
      if(void 0 !== this.$_needActivate$) {
        var $active$$ = this.$_needActivate$;
        this.$_needActivate$ = void 0;
        this.options.active = 0 != $active$$ && (0 > $active$$ || $active$$ > this.$tabs$.length) ? 0 : $active$$;
        this.$_activate$($active$$)
      }
      "horizontal" == this.options.orientation && this.$_addConveyor$();
      this.$_setupReorder$()
    }, $_addConveyor$:function() {
      if("horizontal" == this.options.orientation) {
        var $tabsId$$ = this.$tablist$.uniqueId().attr("id"), $conveyorDiv_ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent();
        $conveyorDiv_ulParent$$.addClass("oj-tabs-conveyor");
        $conveyorDiv_ulParent$$ = $conveyorDiv_ulParent$$.wrap("\x3cdiv\x3e").parent();
        $conveyorDiv_ulParent$$.uniqueId().attr("id");
        this.$conveyor$ = $conveyorDiv_ulParent$$.ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $tabsId$$})
      }
    }, $_processTabs$:function() {
      var $self$$89$$ = this;
      this.$_destroyTabBar$();
      this.$tablist$ = $$$$17$$("\x3cul\x3e").addClass("oj-tabs-nav oj-helper-reset oj-helper-clearfix").attr("role", "tablist").prependTo(this.element);
      this.$tabs$ = $$$$17$$();
      this.$panels$ = $$$$17$$();
      this.element.children(":not(.oj-tabs-nav)").each(function($index$$161$$) {
        var $anchorId_header$$8$$ = $$$$17$$(this).find("\x3e :first-child"), $headerClone_tab$$ = $anchorId_header$$8$$.clone();
        $headerClone_tab$$.css("display", "").attr({"aria-hidden":"false"});
        var $anchor$$1_ohd_originalAriaControls$$ = $anchorId_header$$8$$[0];
        $anchor$$1_ohd_originalAriaControls$$.id && $self$$89$$.$_addPrefixId$($anchor$$1_ohd_originalAriaControls$$);
        $anchorId_header$$8$$.find("[id]").each(function() {
          $self$$89$$.$_addPrefixId$(this)
        });
        $anchor$$1_ohd_originalAriaControls$$ = $headerClone_tab$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent();
        $anchor$$1_ohd_originalAriaControls$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        $headerClone_tab$$ = $anchor$$1_ohd_originalAriaControls$$.parent().addClass("oj-tabs-tab-content").parent().addClass("oj-tabs-default").attr({role:"tab", "aria-hidden":"false", tabIndex:"-1"});
        $headerClone_tab$$.appendTo($self$$89$$.$tablist$);
        $self$$89$$.$tabs$ = $self$$89$$.$tabs$.add($headerClone_tab$$);
        $anchorId_header$$8$$.hide().attr({"aria-hidden":"true"});
        var $anchorId_header$$8$$ = $anchor$$1_ohd_originalAriaControls$$.uniqueId().attr("id"), $anchor$$1_ohd_originalAriaControls$$ = $headerClone_tab$$.attr("aria-controls"), $panel$$ = $$$$17$$(this);
        $panel$$.hasClass("oj-disabled") && $self$$89$$.disable($index$$161$$);
        $anchor$$1_ohd_originalAriaControls$$ && $headerClone_tab$$.data("oj-tabs-aria-controls", $anchor$$1_ohd_originalAriaControls$$);
        $headerClone_tab$$.attr({"aria-controls":$panel$$.uniqueId().attr("id"), "aria-labelledby":$anchorId_header$$8$$});
        $self$$89$$.$panels$ = $self$$89$$.$panels$.add($panel$$);
        $panel$$.attr("aria-labelledby", $anchorId_header$$8$$)
      });
      if("vertical" == this.options.orientation) {
        var $maxTabWidth$$ = 0, $sumTabHeight$$ = 0;
        this.$tabs$.addClass("oj-tabs-active").each(function() {
          var $tab$$1$$ = $$$$17$$(this);
          $maxTabWidth$$ = Math.max($maxTabWidth$$, $tab$$1$$.width());
          $sumTabHeight$$ += $tab$$1$$.outerHeight(!0)
        }).removeClass("oj-tabs-active");
        this.options.removable && ($maxTabWidth$$ += 20);
        this.$tabs$.css({width:$maxTabWidth$$ + "px"});
        var $outerWidth$$ = this.$tablist$.outerWidth(!0);
        "rtl" == this._GetReadingDirection() ? this.$panels$.css({"margin-right":$outerWidth$$ - 1 + "px", "min-height":$sumTabHeight$$ + "px"}) : this.$panels$.css({"margin-left":$outerWidth$$ - 1 + "px", "min-height":$sumTabHeight$$ + "px"})
      }
      this.$panels$.addClass("oj-tabs-panel").attr("role", "tabpanel")
    }, $_setupDisabled$:function($disabled$$4$$) {
      $$$$17$$.isArray($disabled$$4$$) && ($disabled$$4$$.length ? $disabled$$4$$.length === this.$tabs$.length && ($disabled$$4$$ = !0) : $disabled$$4$$ = !1);
      this.$tabs$.each(function($index$$162$$) {
        !0 === $disabled$$4$$ || -1 !== $$$$17$$.inArray($index$$162$$, $disabled$$4$$) ? $$$$17$$(this).addClass("oj-disabled").attr("aria-disabled", "true") : $$$$17$$(this).removeClass("oj-disabled").removeAttr("aria-disabled")
      });
      this.options.disabled = $disabled$$4$$
    }, $_setupEvents$:function() {
      var $events$$2$$ = {keydown:this.$_tabKeydown$}, $enabledTabs_event$$263$$ = this.options.event;
      if($enabledTabs_event$$263$$) {
        var $self$$90$$ = this;
        $$$$17$$.each($enabledTabs_event$$263$$.split(" "), function($index$$163$$, $eventName$$2$$) {
          $events$$2$$[$eventName$$2$$] = $self$$90$$.$_eventHandler$
        })
      }
      $enabledTabs_event$$263$$ = this.$tabs$.not(".oj-disabled");
      this._on($enabledTabs_event$$263$$, $events$$2$$);
      this._on(this.$panels$, {keydown:this.$_panelKeydown$});
      if(this.options.removable) {
        var $revents$$ = {click:this.$_removeTabHandler$};
        this._on($enabledTabs_event$$263$$.find(".oj-tabs-close-icon"), $revents$$)
      }
      this._focusable($enabledTabs_event$$263$$);
      this._hoverable($enabledTabs_event$$263$$);
      this.$_activeable$($enabledTabs_event$$263$$)
    }, $_tearDownEvents$:function() {
      var $enabledTabs$$1$$ = this.$tabs$.not(".oj-disabled");
      this._off($enabledTabs$$1$$);
      this._off(this.$panels$)
    }, $_eventHandler$:function($event$$264$$) {
      var $options$$271$$ = this.options, $active$$1_eventData$$3$$ = this.active, $tab$$2$$ = $$$$17$$($event$$264$$.currentTarget).closest("li"), $clickedIsActive$$ = $tab$$2$$[0] === $active$$1_eventData$$3$$[0], $toShow$$ = this.$_getPanelForTab$($tab$$2$$), $toHide$$ = $active$$1_eventData$$3$$.length ? this.$_getPanelForTab$($active$$1_eventData$$3$$) : $$$$17$$(), $active$$1_eventData$$3$$ = {oldTab:$active$$1_eventData$$3$$, oldPanel:$toHide$$, newTab:$tab$$2$$, newPanel:$toShow$$};
      $event$$264$$.preventDefault();
      $tab$$2$$.hasClass("oj-disabled") || (this.$running$ || $clickedIsActive$$ || !1 === this._trigger("beforeActivate", $event$$264$$, $active$$1_eventData$$3$$)) || ($options$$271$$.active = this.$tabs$.index($tab$$2$$), this.active = $clickedIsActive$$ ? $$$$17$$() : $tab$$2$$, $toHide$$.length || $toShow$$.length || $$$$17$$.error("OJ Tabs: Mismatching fragment identifier."), this.$_toggle$($event$$264$$, $active$$1_eventData$$3$$))
    }, $_toggle$:function($event$$265$$, $eventData$$4$$) {
      var $toShow$$1$$ = $eventData$$4$$.newPanel, $toHide$$1$$ = $eventData$$4$$.oldPanel;
      this.$running$ = !0;
      $eventData$$4$$.oldTab.closest("li").removeClass("oj-tabs-active");
      $toHide$$1$$.hide();
      $eventData$$4$$.newTab.closest("li").addClass("oj-tabs-active");
      $toShow$$1$$.show();
      this.$running$ = !1;
      this._trigger("activate", $event$$265$$, $eventData$$4$$);
      $toHide$$1$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $eventData$$4$$.oldTab.attr("aria-selected", "false");
      $toShow$$1$$.length && $toHide$$1$$.length ? $eventData$$4$$.oldTab.attr("tabIndex", "-1") : $toShow$$1$$.length && this.$tabs$.filter(function() {
        return"0" === $$$$17$$(this).attr("tabIndex")
      }).attr("tabIndex", "-1");
      $toShow$$1$$.attr({"aria-expanded":"true", "aria-hidden":"false"});
      $eventData$$4$$.newTab.attr({"aria-selected":"true", tabIndex:"0"})
    }, $_activate$:function($anchor$$3_index$$164$$) {
      var $active$$3$$ = this.$_findActive$($anchor$$3_index$$164$$);
      $active$$3$$[0] !== this.active[0] && ($active$$3$$.length || ($active$$3$$ = this.active), this.options.active = $anchor$$3_index$$164$$, $anchor$$3_index$$164$$ = $active$$3$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$anchor$$3_index$$164$$, currentTarget:$anchor$$3_index$$164$$, preventDefault:$$$$17$$.noop}))
    }, $_findActive$:function($index$$165$$) {
      return this.$tabs$.eq($index$$165$$)
    }, $_createCloseIcons$:function() {
      this.options.removable && this.$tabs$.not(".oj-disabled").each(function() {
        var $div$$3$$ = $$$$17$$(this).find("\x3e :first-child");
        $$$$17$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-widget-icon oj-clickable-icon oj-tabs-close-icon").attr({tabIndex:"-1", "aria-labelledby":$$$$17$$(this).attr("id"), role:"presentation"}).appendTo($div$$3$$)
      })
    }, $_destroyCloseIcons$:function() {
      this.$tabs$.find("oj-tabs-close-icon").remove()
    }, $_destroyTabBar$:function() {
      this.$conveyor$ ? (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.active = this.$conveyor$ = null) : this.element.children(".oj-tabs-nav").remove()
    }, _destroy:function() {
      var $orientation$$1$$ = this.options.orientation;
      "vertical" == $orientation$$1$$ ? this.element.removeClass("oj-tabs-vertical oj-widget oj-helper-clearfix") : this.element.removeClass("oj-tabs oj-widget ");
      this.$_destroyTabBar$();
      var $self$$92$$ = this;
      this.$panels$.each(function() {
        $$$$17$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-disabled oj-tabs-panel").css("display", "");
        "vertical" == $orientation$$1$$ && $$$$17$$(this).css("margin-left", "").css("min-height", "");
        var $header$$9$$ = $$$$17$$(this).find("\x3e :first-child");
        $header$$9$$.css("display", "").removeAttr("aria-hidden");
        var $ohd$$1$$ = $header$$9$$[0];
        $ohd$$1$$.id && $self$$92$$.$_removePrefixId$($ohd$$1$$);
        $header$$9$$.find("[id]").each(function() {
          $self$$92$$.$_removePrefixId$(this)
        })
      })
    }, enable:function($index$$166$$) {
      var $disabled$$5$$ = this.options.disabled;
      !1 !== $disabled$$5$$ && ($disabled$$5$$ = void 0 === $index$$166$$ ? !1 : $$$$17$$.isArray($disabled$$5$$) ? $$$$17$$.map($disabled$$5$$, function($num$$7$$) {
        return $num$$7$$ !== $index$$166$$ ? $num$$7$$ : null
      }) : $$$$17$$.map(this.$tabs$, function($li$$2$$, $num$$8$$) {
        return $num$$8$$ !== $index$$166$$ ? $num$$8$$ : null
      }), this.$_setupDisabled$($disabled$$5$$))
    }, disable:function($index$$167$$) {
      var $disabled$$6$$ = this.options.disabled;
      if(!0 !== $disabled$$6$$) {
        if(void 0 === $index$$167$$) {
          $disabled$$6$$ = !0
        }else {
          if(-1 !== $$$$17$$.inArray($index$$167$$, $disabled$$6$$)) {
            return
          }
          $disabled$$6$$ = $$$$17$$.isArray($disabled$$6$$) ? $$$$17$$.merge([$index$$167$$], $disabled$$6$$).sort() : [$index$$167$$]
        }
        this.$_setupDisabled$($disabled$$6$$)
      }
    }, $_setRemovable$:function($removable$$) {
      $removable$$ !== this.options.removable && (this.options.removable = $removable$$, this.refresh())
    }, $_removeTabHandler$:function($event$$266$$) {
      var $tab$$3$$ = $$$$17$$($event$$266$$.currentTarget).closest("li");
      if($tab$$3$$ && !1 !== this._trigger("beforeremove", $event$$266$$)) {
        var $idxRmTab$$ = this.$tabs$.index($tab$$3$$);
        $tab$$3$$.hasClass("oj-tabs-active") ? this.options.active = this.$_activateNextTab$($idxRmTab$$) : $idxRmTab$$ < this.options.active && (this.options.active = Math.max(0, this.options.active - 1));
        if($$$$17$$.isArray(this.options.disabled)) {
          for(var $adis$$ = this.options.disabled, $i$$252$$ = $adis$$.length - 1;0 <= $i$$252$$;$i$$252$$--) {
            $idxRmTab$$ == $adis$$[$i$$252$$] ? this.options.disabled = $adis$$ = $adis$$.splice($i$$252$$, 1) : $idxRmTab$$ < $adis$$[$i$$252$$] && ($adis$$[$i$$252$$] -= 1)
          }
        }
        this.$_getPanelForTab$($tab$$3$$);
        this.$_getPanelForTab$($tab$$3$$).remove();
        $tab$$3$$.remove();
        this.refresh();
        this._trigger("remove", $event$$266$$)
      }
    }, addTab:function($newTab_options$$272$$) {
      this.element.append($newTab_options$$272$$);
      $newTab_options$$272$$ = this.options;
      if(-1 == $newTab_options$$272$$.active) {
        $newTab_options$$272$$.active = this.$tabs$.length;
        var $disabledTabs$$1$$ = this.$tabs$.filter(".oj-disabled"), $self$$93$$ = this;
        $newTab_options$$272$$.disabled = $$$$17$$.map($disabledTabs$$1$$, function($li$$3$$) {
          return $self$$93$$.$tabs$.index($li$$3$$)
        })
      }
      this.refresh()
    }, $_setupReorder$:function() {
      var $tabBar$$ = this.$conveyor$ ? this.$conveyor$.find(".oj-tabs-nav") : this.element.children(".oj-tabs-nav");
      if(this.options.reorder) {
        var $self$$94$$ = this;
        $tabBar$$.sortable({axis:"horizontal" == $self$$94$$.options.orientation ? "x" : "y", stop:function($event$$267$$, $ui$$25$$) {
          var $mvTab_prevTab$$ = $ui$$25$$.item, $mvContent$$ = $self$$94$$.$_getPanelForTab$($mvTab_prevTab$$), $mvTab_prevTab$$ = $mvTab_prevTab$$.prev();
          $mvTab_prevTab$$.length ? $self$$94$$.$_getPanelForTab$($mvTab_prevTab$$).after($mvContent$$) : $tabBar$$.after($mvContent$$)
        }})
      }else {
        $tabBar$$.sortable({disabled:!0})
      }
    }, $_setupOrientation$:function($value$$184$$) {
      $value$$184$$ || ($value$$184$$ = this.options.orientation);
      if("horizontal" == $value$$184$$) {
        this.element.addClass("oj-tabs oj-widget")
      }else {
        if("vertical" == $value$$184$$) {
          this.element.addClass("oj-tabs-vertical oj-widget oj-helper-clearfix")
        }else {
          return
        }
      }
      this.options.orientation = $value$$184$$
    }, $_sanitizeSelector$:function($hash$$) {
      return $hash$$ ? $hash$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : ""
    }, $_getPanelForTab$:function($id$$33_tab$$4$$) {
      $id$$33_tab$$4$$ = $$$$17$$($id$$33_tab$$4$$).attr("aria-controls");
      return this.element.find(this.$_sanitizeSelector$("#" + $id$$33_tab$$4$$))
    }, $_addPrefixId$:function($elem$$31$$) {
      $$$$17$$($elem$$31$$).attr("id", "ojtabs-id_" + $elem$$31$$.id)
    }, $_removePrefixId$:function($elem$$32$$) {
      $$$$17$$($elem$$32$$).attr("id", $elem$$32$$.id.substring(10))
    }})
  })();
  (function() {
    $oj$$18$$.$__registerWidget$("oj.ojProgressbar", $$$$17$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _create:function() {
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar oj-widget oj-widget-content oj-corner-all").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$17$$("\x3cdiv class\x3d'oj-progressbar-value oj-widget-header oj-corner-left'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
      this._super()
    }, _getCreateOptions:function() {
      var $allDefaults$$1$$ = this._super(), $options$$273$$ = {}, $element$$64$$ = this.element;
      $$$$17$$.each(["max"], function($i$$253$$, $option$$12$$) {
        var $value$$185$$ = $element$$64$$.attr($option$$12$$);
        void 0 !== $value$$185$$ && $value$$185$$.length && ($options$$273$$[$option$$12$$] = $value$$185$$)
      });
      return $$$$17$$.extend($allDefaults$$1$$, $options$$273$$)
    }, value:function($newValue$$7$$) {
      if(void 0 === $newValue$$7$$) {
        return this.options.value
      }
      this.options.value = this.$_constrainedValue$($newValue$$7$$)
    }, $_constrainedValue$:function($newValue$$8$$) {
      void 0 === $newValue$$8$$ && ($newValue$$8$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$8$$;
      "number" !== typeof $newValue$$8$$ && ($newValue$$8$$ = isNaN($newValue$$8$$) ? 0 : Number($newValue$$8$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$8$$))
    }, _setOptions:function($options$$274$$) {
      if(!this.options.disabled) {
        var $value$$186$$ = $options$$274$$.value;
        delete $options$$274$$.value;
        this._super($options$$274$$);
        this.options.value = this.$_constrainedValue$($value$$186$$);
        this.$_refreshValue$()
      }
    }, _setOption:function($key$$100$$, $value$$187$$) {
      "max" === $key$$100$$ && ($value$$187$$ = Math.max(this.min, $value$$187$$));
      this._super($key$$100$$, $value$$187$$)
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
    }, $_refreshValue$:function() {
      var $value$$188$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$188$$ > this.min).toggleClass("oj-corner-right", $value$$188$$ === this.options.max).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$17$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$188$$}), this.$overlayDiv$ && (this.$overlayDiv$.remove(), this.$overlayDiv$ = 
      null))
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar oj-widget oj-widget-content oj-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove()
    }})
  })();
  $oj$$18$$.$__registerWidget$("oj.ojTextArea", $$$$17$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3ctextarea\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"oj-textarea oj-form-control oj-widget", _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-textarea")});
  $oj$$18$$.$__registerWidget$("oj.ojInputPassword", $$$$17$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"password"}], _CLASS_NAMES:"oj-inputpassword oj-form-control oj-widget", _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-inputpassword")});
  (function() {
    $oj$$18$$.$__registerWidget$("oj.ojConveyorBelt", $$$$17$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{orientation:"horizontal", contentParent:null}, _create:function() {
      this.element.addClass("oj-conveyorbelt oj-widget");
      this._super()
    }, _init:function() {
      this.$_setup$(!0)
    }, refresh:function() {
      this._super();
      var $bRecreate$$ = "rtl" === this._GetReadingDirection() !== this.$_bRTL$;
      $bRecreate$$ && this.$_destroyCBCommon$();
      this.$_setup$($bRecreate$$)
    }, $_setup$:function($children$$6_isInit$$1$$) {
      this.$_bRTL$ = "rtl" === this._GetReadingDirection();
      var $elem$$34_numChildren$$ = this.element, $i$$254_options$$275$$ = this.options;
      if($children$$6_isInit$$1$$ && !this.$_cbCommon$) {
        var $child$$7_orientation$$2$$ = $i$$254_options$$275$$.orientation, $callbackInfo$$1_prevStyleClass$$ = null, $nextStyleClass$$ = null, $prevIcon$$ = null, $nextIcon$$ = null, $animateScrollFunc_contentParentElem$$ = null;
        "vertical" !== $child$$7_orientation$$2$$ ? ($callbackInfo$$1_prevStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-start-overflow-indicator", $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-end-overflow-indicator", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-start-overflow-icon"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-end-overflow-icon"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollLeft$) : 
        ($callbackInfo$$1_prevStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-top-overflow-indicator", $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-bottom-overflow-indicator", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-top-overflow-icon"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-bottom-overflow-icon"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollTop$);
        var $buttonInfo$$1$$ = {};
        $buttonInfo$$1$$.prevButtonStyleClass = $callbackInfo$$1_prevStyleClass$$;
        $buttonInfo$$1$$.nextButtonStyleClass = $nextStyleClass$$;
        $buttonInfo$$1$$.prevButtonIcon = $prevIcon$$;
        $buttonInfo$$1$$.nextButtonIcon = $nextIcon$$;
        $callbackInfo$$1_prevStyleClass$$ = {automaticSizeCheck:!0};
        "true" !== $elem$$34_numChildren$$.attr("_ojConveyorBeltTesting") && ($callbackInfo$$1_prevStyleClass$$.scrollFunc = $animateScrollFunc_contentParentElem$$, $callbackInfo$$1_prevStyleClass$$.callbackObj = this);
        $animateScrollFunc_contentParentElem$$ = null;
        $i$$254_options$$275$$.contentParent && ($animateScrollFunc_contentParentElem$$ = $$$$17$$($i$$254_options$$275$$.contentParent)[0]);
        this.$_cbCommon$ = new window.adf.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$($elem$$34_numChildren$$[0], $child$$7_orientation$$2$$, $animateScrollFunc_contentParentElem$$, this.$_bRTL$, $buttonInfo$$1$$, $callbackInfo$$1_prevStyleClass$$)
      }
      this.$_cbCommon$.$setup$($children$$6_isInit$$1$$);
      if($children$$6_isInit$$1$$) {
        for($children$$6_isInit$$1$$ = $elem$$34_numChildren$$.find(".oj-conveyorbelt-overflow-indicator"), $elem$$34_numChildren$$ = $children$$6_isInit$$1$$.size(), $i$$254_options$$275$$ = 0;$i$$254_options$$275$$ < $elem$$34_numChildren$$;$i$$254_options$$275$$++) {
          $child$$7_orientation$$2$$ = $children$$6_isInit$$1$$.get($i$$254_options$$275$$), this.$_setupButtonMouseStyles$($child$$7_orientation$$2$$)
        }
      }
    }, _destroy:function() {
      this.$_destroyCBCommon$();
      this.element.removeClass("oj-conveyorbelt oj-widget")
    }, _setOption:function($key$$101$$, $value$$189$$) {
      var $bRecreate$$1$$ = !1;
      switch($key$$101$$) {
        case "containerParent":
        ;
        case "orientation":
          $bRecreate$$1$$ = !0
      }
      $bRecreate$$1$$ && this.$_destroyCBCommon$();
      this._super($key$$101$$, $value$$189$$);
      $bRecreate$$1$$ && this.$_setup$(!0)
    }, $_destroyCBCommon$:function() {
      var $cbCommon$$1$$ = this.$_cbCommon$;
      $cbCommon$$1$$ && $cbCommon$$1$$.destroy();
      this.$_cbCommon$ = null
    }, $_setupButtonMouseStyles$:function($element$$65$$) {
      this._on($element$$65$$, {mousedown:function($event$$268$$) {
        $$$$17$$($event$$268$$.currentTarget).addClass("oj-active")
      }, mouseup:function($event$$269$$) {
        $$$$17$$($event$$269$$.currentTarget).removeClass("oj-active")
      }, mouseenter:function($event$$270$$) {
        $$$$17$$($event$$270$$.currentTarget).addClass("oj-hover")
      }, mouseleave:function($currTarget$$3_event$$271$$) {
        $currTarget$$3_event$$271$$ = $currTarget$$3_event$$271$$.currentTarget;
        $$$$17$$($currTarget$$3_event$$271$$).removeClass("oj-hover");
        $$$$17$$($currTarget$$3_event$$271$$).removeClass("oj-active")
      }})
    }, $_createIcon$:function($iconStyleClass$$) {
      var $span$$ = document.createElement("span");
      $span$$.setAttribute("class", "oj-widget-icon oj-clickable-icon " + $iconStyleClass$$);
      return $span$$
    }, $_animateScrollLeft$:function($elem$$36$$, $value$$190$$, $duration$$11$$, $onEndFunc$$1$$) {
      var $props$$6$$ = {};
      $props$$6$$.scrollLeft = $value$$190$$;
      $$$$17$$($elem$$36$$).animate($props$$6$$, $duration$$11$$, "swing", $onEndFunc$$1$$)
    }, $_animateScrollTop$:function($elem$$37$$, $value$$191$$, $duration$$12$$, $onEndFunc$$2$$) {
      var $props$$7$$ = {};
      $props$$7$$.scrollTop = $value$$191$$;
      $$$$17$$($elem$$37$$).animate($props$$7$$, $duration$$12$$, "swing", $onEndFunc$$2$$)
    }, getNodeBySubId:function($locator$$10_subId$$5$$) {
      if(null == $locator$$10_subId$$5$$) {
        return this.element ? this.element[0] : null
      }
      $locator$$10_subId$$5$$ = $locator$$10_subId$$5$$.subId;
      return"oj-conveyorbelt-start-overflow-indicator" === $locator$$10_subId$$5$$ ? this.widget().find(".oj-conveyorbelt-start-overflow-indicator")[0] : "oj-conveyorbelt-end-overflow-indicator" === $locator$$10_subId$$5$$ ? this.widget().find(".oj-conveyorbelt-end-overflow-indicator")[0] : "oj-conveyorbelt-top-overflow-indicator" === $locator$$10_subId$$5$$ ? this.widget().find(".oj-conveyorbelt-top-overflow-indicator")[0] : "oj-conveyorbelt-bottom-overflow-indicator" === $locator$$10_subId$$5$$ ? 
      this.widget().find(".oj-conveyorbelt-bottom-overflow-indicator")[0] : null
    }})
  })();
  $oj$$18$$.$__registerWidget$("oj.ojInputNumber", $$$$17$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{max:null, min:null, readOnly:null, step:1}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, _create:function() {
    this.$_draw$();
    this.$_SetRootAttributes$();
    this._on(this.$_events$);
    this._on(this.window, {beforeunload:function() {
      this.element.removeAttr("autocomplete")
    }});
    this._super();
    this._SetDisplayValue(this.options.value);
    this._setOption("step", this.options.step);
    "boolean" !== typeof this.options.readOnly ? this.options.readOnly = !!this.element.prop("readonly") : this.element.prop("readonly", this.options.readOnly);
    this.$_refreshAriaMinMaxValue$();
    this.$_updateButtons$()
  }, _getCreateOptions:function() {
    var $allDefaults$$2$$ = this._super(), $options$$276$$ = {}, $element$$66$$ = this.element;
    $$$$17$$.each(["min", "max", "step"], function($i$$255$$, $option$$13$$) {
      var $value$$192$$ = $element$$66$$.attr($option$$13$$);
      void 0 !== $value$$192$$ && $value$$192$$.length && ($options$$276$$[$option$$13$$] = $value$$192$$)
    });
    return $$$$17$$.extend($allDefaults$$2$$, $options$$276$$)
  }, $_events$:{keydown:function($event$$272$$) {
    $event$$272$$.keyCode === $$$$17$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$272$$), $event$$272$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$272$$) && $event$$272$$.preventDefault()
  }, keyup:function($event$$273$$) {
    this.$_stop$($event$$273$$)
  }, focus:function() {
    this.previous = this.element.val()
  }, blur:function($event$$274$$) {
    this.$cancelBlur$ ? delete this.$cancelBlur$ : this.$_blurEnterSetValue$($event$$274$$)
  }, "mousedown .oj-inputnumber-button":function($event$$275$$) {
    function $checkFocus$$1$$() {
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = $previous$$, this._delay(function() {
        this.previous = $previous$$
      }))
    }
    var $previous$$;
    $previous$$ = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
    $event$$275$$.preventDefault();
    $checkFocus$$1$$.call(this);
    this.$cancelBlur$ = !0;
    this._delay(function() {
      delete this.$cancelBlur$;
      $checkFocus$$1$$.call(this)
    });
    this.$_start$();
    this.$_repeat$(null, $$$$17$$($event$$275$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$275$$)
  }, "mouseup .oj-inputnumber-button":function($event$$276$$) {
    this.$_stop$($event$$276$$)
  }, "mouseenter .oj-inputnumber-button":function($event$$277$$) {
    $$$$17$$($event$$277$$.currentTarget).hasClass("oj-active") && (this.$_start$(), this.$_repeat$(null, $$$$17$$($event$$277$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$277$$))
  }, "mouseleave .oj-inputnumber-button":function($event$$278$$) {
    this.$_stop$($event$$278$$)
  }}, $_draw$:function() {
    var $uiInputNumber$$ = this.$uiInputNumber$ = this.element.addClass("oj-inputnumber-input").attr("autocomplete", "off").wrap("\x3cspan class\x3d'oj-inputnumber oj-widget'\x3e\x3c/span\x3e").parent().append("\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e");
    this.saveType = this.element.prop("type");
    this.element.attr("type", "text");
    var $incrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_INCREMENT$), $decrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_DECREMENT$);
    $uiInputNumber$$.find(".oj-inputnumber-up").ojButton({display:"icons", icons:{start:"oj-widget-icon oj-inputnumber-up-icon"}, label:$incrementString$$});
    $uiInputNumber$$.find(".oj-inputnumber-down").ojButton({display:"icons", icons:{start:"oj-widget-icon oj-inputnumber-down-icon"}, label:$decrementString$$});
    this.buttons = $uiInputNumber$$.find(".oj-inputnumber-button").attr("tabIndex", "-1").attr("aria-hidden", !0);
    this.options.disabled && this.disable();
    this.options.readOnly && this._setOption("readOnly", !0)
  }, $_keydown$:function($event$$279$$) {
    var $keyCode$$6$$ = $$$$17$$.ui.keyCode;
    switch($event$$279$$.keyCode) {
      case $keyCode$$6$$.UP:
        return this.$_repeat$(null, 1, $event$$279$$), !0;
      case $keyCode$$6$$.DOWN:
        return this.$_repeat$(null, -1, $event$$279$$), !0
    }
    return!1
  }, $_uiInputNumberHtml$:$JSCompiler_returnArg$$("\x3cspan class\x3d'oj-inputnumber oj-widget'\x3e\x3c/span\x3e"), $_buttonHtml$:$JSCompiler_returnArg$$("\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e"), $_start$:function() {
    return this.$spinning$ = !0
  }, $_repeat$:function($i$$256$$, $steps$$1$$, $event$$280$$) {
    $i$$256$$ = $i$$256$$ || 500;
    clearTimeout(this.$timer$);
    this.$timer$ = this._delay(function() {
      this.$_repeat$(40, $steps$$1$$, $event$$280$$)
    }, $i$$256$$);
    this.$_spin$($steps$$1$$ * this.options.step, $event$$280$$)
  }, $_spin$:function($step$$1$$, $event$$281$$) {
    var $displayValue$$7_value$$193$$ = this._GetDisplayValue() || 0, $displayValue$$7_value$$193$$ = this.$_parseValue$($displayValue$$7_value$$193$$);
    "string" === typeof $displayValue$$7_value$$193$$ && ($displayValue$$7_value$$193$$ = +$displayValue$$7_value$$193$$);
    $displayValue$$7_value$$193$$ = this.$_adjustValue$($displayValue$$7_value$$193$$, $step$$1$$);
    this._SetValue("" + $displayValue$$7_value$$193$$, $event$$281$$)
  }, $_precision$:function() {
    var $precision$$1$$ = this.$_precisionOf$(this.options.step);
    null !== this.options.min && ($precision$$1$$ = Math.max($precision$$1$$, this.$_precisionOf$(this.options.min)));
    return $precision$$1$$
  }, $_precisionOf$:function($num$$9_str$$17$$) {
    $num$$9_str$$17$$ = $num$$9_str$$17$$.toString();
    var $decimal$$ = $num$$9_str$$17$$.indexOf(".");
    return-1 === $decimal$$ ? 0 : $num$$9_str$$17$$.length - $decimal$$ - 1
  }, $_adjustValue$:function($value$$194$$, $step$$2$$) {
    var $aboveMin_newValue$$9$$, $stepBase_validMax$$, $options$$278$$ = this.options;
    $stepBase_validMax$$ = null !== $options$$278$$.min ? $options$$278$$.min : 0;
    $aboveMin_newValue$$9$$ = $value$$194$$ - $stepBase_validMax$$;
    Math.round($aboveMin_newValue$$9$$ / $options$$278$$.step) * $options$$278$$.step !== $aboveMin_newValue$$9$$ ? ($aboveMin_newValue$$9$$ = 0 > $step$$2$$ ? Math.ceil($aboveMin_newValue$$9$$ / $options$$278$$.step) * $options$$278$$.step : Math.floor($aboveMin_newValue$$9$$ / $options$$278$$.step) * $options$$278$$.step, $aboveMin_newValue$$9$$ = $stepBase_validMax$$ + $aboveMin_newValue$$9$$ + $step$$2$$) : $aboveMin_newValue$$9$$ = $value$$194$$ + $step$$2$$;
    $aboveMin_newValue$$9$$ = parseFloat($aboveMin_newValue$$9$$.toFixed(this.$_precision$()));
    return null !== $options$$278$$.min && $aboveMin_newValue$$9$$ < $options$$278$$.min ? $options$$278$$.min : null !== $options$$278$$.max && $aboveMin_newValue$$9$$ > $options$$278$$.max ? ($stepBase_validMax$$ = Math.floor(($options$$278$$.max - $stepBase_validMax$$) / $options$$278$$.step) * $options$$278$$.step + $stepBase_validMax$$, $stepBase_validMax$$ = parseFloat($stepBase_validMax$$.toFixed(this.$_precision$()))) : $aboveMin_newValue$$9$$
  }, $_stop$:function() {
    this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1)
  }, $_updateButtons$:function() {
    var $value$$195$$ = this._GetDisplayValue() || 0, $min$$8$$ = this.options.min, $max$$8$$ = this.options.max;
    if(this.$uiInputNumber$) {
      var $downButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton(), $upButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton();
      this.options.disabled ? ($downButton$$.ojButton("disable"), $upButton$$.ojButton("disable")) : null !== $max$$8$$ && $value$$195$$ >= $max$$8$$ ? ($downButton$$.ojButton("enable"), $upButton$$.ojButton("disable")) : (null !== $min$$8$$ && $value$$195$$ <= $min$$8$$ ? $downButton$$.ojButton("disable") : $downButton$$.ojButton("enable"), $upButton$$.ojButton("enable"))
    }
  }, $_blurEnterSetValue$:function($event$$283$$) {
    this.$_stop$();
    this.previous !== this.element.val() && this._SetValue(this.element.val(), $event$$283$$)
  }, _setOption:function($key$$102$$, $value$$196$$) {
    "max" !== $key$$102$$ && "min" !== $key$$102$$ || "string" !== typeof $value$$196$$ || ($value$$196$$ = this.$_parse$($value$$196$$));
    "step" === $key$$102$$ && ($value$$196$$ = this.$_parseStep$($value$$196$$));
    this._super($key$$102$$, $value$$196$$);
    "disabled" === $key$$102$$ && ($value$$196$$ ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1));
    "readOnly" === $key$$102$$ && ($value$$196$$ ? this.element.prop("readonly", !0) : this.element.prop("readonly", !1))
  }, $_parse$:function($val$$50$$) {
    "string" === typeof $val$$50$$ && "" !== $val$$50$$ && ($val$$50$$ = +$val$$50$$);
    return"" === $val$$50$$ || isNaN($val$$50$$) ? null : $val$$50$$
  }, $_parseStep$:function($parsedStep_val$$51$$) {
    "string" === typeof $parsedStep_val$$51$$ && "" !== $parsedStep_val$$51$$ && ($parsedStep_val$$51$$ = +$parsedStep_val$$51$$);
    $parsedStep_val$$51$$ = "" === $parsedStep_val$$51$$ || isNaN($parsedStep_val$$51$$) ? null : $parsedStep_val$$51$$;
    if(null === $parsedStep_val$$51$$ || 0 >= $parsedStep_val$$51$$) {
      $parsedStep_val$$51$$ = 1
    }
    return $parsedStep_val$$51$$
  }, $_refreshAriaMinMaxValue$:function() {
    var $valuenow$$ = this.$_parse$(this.options.value), $valuetext$$ = this.element.val();
    this.element.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$});
    this._ValueEquals("" + $valuenow$$, $valuetext$$) || this.element.attr({"aria-valuetext":$valuetext$$})
  }, _Refresh:function($name$$100$$, $value$$197$$) {
    this._super($name$$100$$, $value$$197$$);
    "value" !== $name$$100$$ && "max" !== $name$$100$$ && "min" !== $name$$100$$ || this.$_refreshAriaMinMaxValue$();
    this.$_updateButtons$()
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-inputnumber"), _destroy:function() {
    this.element.removeClass("oj-inputnumber-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeAttr("aria-valuetext").removeAttr("aria-disabled");
    this.element.attr("type", this.saveType);
    this._super();
    this._off(this.element, "keydown keyup focus blur mousedown mouseup mouseenter mouseleave");
    this.$uiInputNumber$.replaceWith(this.element);
    clearTimeout(this.$timer$)
  }, getNodeBySubId:function($locator$$11_subId$$6$$) {
    if(null == $locator$$11_subId$$6$$) {
      return this.element ? this.element[0] : null
    }
    $locator$$11_subId$$6$$ = $locator$$11_subId$$6$$.subId;
    return"oj-inputnumber-up" === $locator$$11_subId$$6$$ ? this.widget().find(".oj-inputnumber-up")[0] : "oj-inputnumber-down" === $locator$$11_subId$$6$$ ? this.widget().find(".oj-inputnumber-down")[0] : null
  }, _CanSetValue:function() {
    return!this._super() || this.options.readOnly ? !1 : !0
  }, stepUp:function($steps$$2$$) {
    this.$_step$($steps$$2$$, !0)
  }, stepDown:function($steps$$3$$) {
    this.$_step$($steps$$3$$, !1)
  }, $_step$:function($steps$$4$$, $up$$) {
    this.$_start$();
    $up$$ ? this.$_spin$(($steps$$4$$ || 1) * this.options.step) : this.$_spin$(($steps$$4$$ || 1) * -this.options.step);
    this.$_stop$()
  }, widget:$JSCompiler_get$$("$uiInputNumber$")})
});
