define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojvalidation"], function($oj$$19$$, $$$$18$$) {
  (function() {
    $oj$$19$$.$__registerWidget$("oj.ojAccordion", $$$$18$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{expansion:"single"}, _create:function() {
      this._super();
      this.element.addClass("oj-accordion oj-widget oj-helper-reset").attr("role", "group");
      this.$_refresh$()
    }, $_showContextMenu$:function($menu$$3$$, $event$$144$$) {
      $menu$$3$$.show($event$$144$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), focus:"menu"})
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-widget oj-helper-reset").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy")
    }, _setOption:function($key$$76$$, $value$$161$$) {
      "expansion" === $key$$76$$ && "single" == $value$$161$$ && "multiple" == this.options.expansion && this.$colllapsibles$.not(".oj-collapsible-collapsed").first().siblings(".oj-collapsible").trigger("ojcollapse");
      this._super($key$$76$$, $value$$161$$);
      "disabled" === $key$$76$$ && (($value$$161$$ = !!$value$$161$$) && this.$colllapsibles$.each(function() {
        null == $$$$18$$(this).ojCollapsible("option", $key$$76$$) && $$$$18$$(this).ojCollapsible("option", $key$$76$$, $value$$161$$)
      }), this.element.toggleClass("oj-disabled", $value$$161$$))
    }, refresh:function() {
      this._super();
      this.$_refresh$()
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this.$_setupEvents$()
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$18$$(this).ojCollapsible("option", "clickable", "header")
      });
      this.$colllapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({clickable:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible")
    }, $_setupEvents$:function() {
      var $events$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$};
      this._off(this.$colllapsibles$);
      this._on(this.$colllapsibles$, $events$$)
    }, $_keydown$:function($event$$145$$) {
      if(!$event$$145$$.altKey && !$event$$145$$.ctrlKey && ($$$$18$$($event$$145$$.target).hasClass("oj-collapsible-header") || $$$$18$$($event$$145$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$3$$ = $$$$18$$.ui.keyCode, $enabledCollapsibles$$ = this.$colllapsibles$.not(".oj-disabled"), $length$$15$$ = $enabledCollapsibles$$.length, $target$$83$$ = $$$$18$$($event$$145$$.target).closest(".oj-collapsible"), $currentIndex$$1$$ = $enabledCollapsibles$$.index($target$$83$$), $toFocus$$ = !1;
        if(0 <= $currentIndex$$1$$) {
          switch($event$$145$$.keyCode) {
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
        $toFocus$$ && ($target$$83$$ && $$$$18$$($target$$83$$).trigger("ojfocusout"), $$$$18$$($toFocus$$).trigger("ojfocus"), $event$$145$$.preventDefault())
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$146$$) {
      return"single" === this.options.expansion && ($closestCollapsible_event$$146$$ = $$$$18$$($closestCollapsible_event$$146$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$146$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$146$$.siblings(".oj-collapsible:not(.oj-collapsible-collapsed)").map(function() {
        return $$$$18$$(this).data("oj-ojCollapsible")
      }) : $$$$18$$()
    }, $_beforeExpandHandler$:function($event$$147$$) {
      var $result$$15$$;
      this.$_findTargetSiblings$($event$$147$$).each(function() {
        return $result$$15$$ = this._trigger("beforecollapse", $event$$147$$)
      });
      return $result$$15$$
    }, $_expandHandler$:function($event$$148$$) {
      this.$_findTargetSiblings$($event$$148$$).each(function() {
        this.$_Collapse$(!1, $event$$148$$)
      })
    }})
  })();
  $oj$$19$$.$__registerWidget$("oj._ojRadioCheckbox", $$$$18$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:null, checked:null, type:null}, label:function() {
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
    var $self$$62$$ = this;
    this._hoverable(this.element);
    this._focusable(this.element);
    this.$_activeable$(this.element);
    $$$$18$$.each($self$$62$$.$$label$, function() {
      $self$$62$$._hoverable(this);
      $self$$62$$._focusable(this);
      $self$$62$$.$_activeable$(this)
    })
  }, _setOption:function($key$$77$$, $value$$162$$) {
    this._super($key$$77$$, $value$$162$$);
    "disabled" === $key$$77$$ && (($value$$162$$ = !!$value$$162$$) ? (this.element.prop("disabled", !0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"), this.$$label$.removeClass("oj-enabled").addClass("oj-disabled")) : (this.element.prop("disabled", !1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"), this.$$label$.addClass("oj-enabled").removeClass("oj-disabled")));
    "checked" === $key$$77$$ && ($value$$162$$ ? this.element.prop("checked", !0) : this.element.prop("checked", !1), this.element.toggleClass("oj-checked", $value$$162$$))
  }, $_getLabelsForElement$:function() {
    var $labelClosestParent$$ = this.element.closest("label"), $labelForQuery$$ = "label[for\x3d'" + this.element.prop("id") + "']";
    return $labelClosestParent$$.add($$$$18$$($labelForQuery$$))
  }, getNodeBySubId:function($locator$$9_subId$$4$$) {
    if(null == $locator$$9_subId$$4$$) {
      return this.element ? this.element[0] : null
    }
    $locator$$9_subId$$4$$ = $locator$$9_subId$$4$$.subId;
    return"oj-radiocheckbox-input" === $locator$$9_subId$$4$$ ? this.element[0] : "oj-radiocheckbox-label" === $locator$$9_subId$$4$$ ? this.label()[0] : null
  }, _destroy:function() {
    this._super();
    var $type$$80$$ = this.options.type;
    "checkbox" == $type$$80$$ ? (this.element.removeClass("oj-checkbox oj-checked oj-disabled oj-enabled oj-widget"), this.$$label$.removeClass("oj-enabled oj-disabled oj-checkbox-label")) : "radio" == $type$$80$$ && (this.element.removeClass("oj-radio oj-checked oj-disabled oj-enabled oj-widget"), this.$$label$.removeClass("oj-enabled oj-disabled oj-radio-label"))
  }});
  (function() {
    function $_radioGroup$$($radio$$, $$elems$$) {
      var $name$$91_selector$$15$$ = $radio$$.name, $$radios_form$$ = $radio$$.form;
      $name$$91_selector$$15$$ ? ($name$$91_selector$$15$$ = $name$$91_selector$$15$$.replace(/'/g, "\\'"), $name$$91_selector$$15$$ = ":radio[name\x3d'" + $name$$91_selector$$15$$ + "']:oj-button", $$radios_form$$ = $$elems$$ ? $$elems$$.filter($name$$91_selector$$15$$) : $$radios_form$$ ? $$$$18$$($$radios_form$$).find($name$$91_selector$$15$$) : $$$$18$$($name$$91_selector$$15$$, $radio$$.ownerDocument).filter(function() {
        return!this.form
      })) : $$radios_form$$ = ($$elems$$ ? $$elems$$.filter($radio$$) : $$$$18$$($radio$$)).filter(":oj-button");
      return $$radios_form$$
    }
    var $lastActive$$, $startXPos$$, $startYPos$$, $clickDragged$$ = !1;
    $oj$$19$$.$__registerWidget$("oj.ojButton", $$$$18$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cbutton\x3e", widgetEventPrefix:"oj", options:{disabled:null, display:"all", label:null, icons:{start:null, end:"auto"}, menu:{menu:null}}, _create:function() {
      this.element.closest("form").unbind("reset.ojButton").bind("reset.ojButton", function() {
        var $form$$1$$ = $$$$18$$(this);
        setTimeout(function() {
          $form$$1$$.find(":oj-button").each(function() {
            $$$$18$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1)
          }).length || $form$$1$$.unbind("reset.ojButton")
        }, 1)
      });
      "boolean" !== typeof this.options.disabled && (this.options.disabled = !!this.element.prop("disabled"));
      this.$menuEventNamespace$ = this.eventNamespace + "menu";
      this.$_initButtonTypes$();
      this.$hasTitle$ = !!this.$rootElement$.attr("title");
      var $self$$63$$ = this, $options$$279$$ = this.options, $toggleButton$$ = "checkbox" === this.type || "radio" === this.type, $activeClass$$ = $toggleButton$$ ? "" : "oj-active";
      this.$rootElement$.addClass("oj-button oj-widget oj-enabled oj-default");
      this.$buttonElement$.bind("mouseenter" + this.eventNamespace, function() {
        $options$$279$$.disabled || (this === $lastActive$$ && $self$$63$$.$rootElement$.addClass("oj-active"), $self$$63$$.$rootElement$.addClass("oj-hover").removeClass("oj-default"))
      }).bind("mouseleave" + this.eventNamespace, function() {
        $self$$63$$.$rootElement$.removeClass("oj-hover");
        $options$$279$$.disabled || ($self$$63$$.$rootElement$.removeClass($activeClass$$), $self$$63$$.$_addOJDefaultClass$())
      }).bind("click" + this.eventNamespace, function($event$$149$$) {
        $options$$279$$.disabled && ($event$$149$$.preventDefault(), $event$$149$$.stopImmediatePropagation())
      });
      this.element.attr("role", "button").bind("focus" + this.eventNamespace, function() {
        $self$$63$$.$rootElement$.addClass("oj-focus").removeClass("oj-default")
      }).bind("blur" + this.eventNamespace, function() {
        $self$$63$$.$rootElement$.removeClass("oj-focus");
        $self$$63$$.$_addOJDefaultClass$()
      });
      $toggleButton$$ && (this.element.bind("change" + this.eventNamespace, function($event$$150$$) {
        if(!$clickDragged$$) {
          $self$$63$$.$_applyCheckedStateFromDom$(!0);
          var $buttonset$$ = $$$$18$$(this).closest(":oj-buttonset").data("oj-ojButtonset"), $checkedState$$ = $buttonset$$ && $buttonset$$.$_getCheckedFromDom$($buttonset$$.$$buttons$);
          $buttonset$$ && void 0 !== $checkedState$$ && ($buttonset$$.$_optionChangeOriginalEvent$ = $event$$150$$, $buttonset$$._setOption("checked", $checkedState$$))
        }
      }), this.$buttonElement$.bind("mousedown" + this.eventNamespace, function($event$$151$$) {
        $options$$279$$.disabled || ($clickDragged$$ = !1, $startXPos$$ = $event$$151$$.pageX, $startYPos$$ = $event$$151$$.pageY)
      }).bind("mouseup" + this.eventNamespace, function($event$$152$$) {
        $options$$279$$.disabled || $startXPos$$ === $event$$152$$.pageX && $startYPos$$ === $event$$152$$.pageY || ($clickDragged$$ = !0)
      }));
      "checkbox" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if($options$$279$$.disabled || $clickDragged$$) {
          return!1
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$153$$) {
        $event$$153$$.keyCode === $$$$18$$.ui.keyCode.ENTER && ($options$$279$$.disabled || $self$$63$$.element.click())
      })) : "radio" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if($options$$279$$.disabled || $clickDragged$$) {
          return!1
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$154$$) {
        $event$$154$$.keyCode !== $$$$18$$.ui.keyCode.ENTER || ($self$$63$$.element[0].checked || $options$$279$$.disabled) || ($self$$63$$.element[0].checked = !0, $self$$63$$.element.change(), $self$$63$$.element.click())
      })) : (this.$buttonElement$.bind("mousedown" + this.eventNamespace, function($event$$155$$) {
        if($options$$279$$.disabled) {
          return!1
        }
        1 === $event$$155$$.which && ($$$$18$$(this).addClass("oj-active").removeClass("oj-default"), $lastActive$$ = this, $self$$63$$.document.one("mouseup", function() {
          $lastActive$$ = null
        }))
      }).bind("mouseup" + this.eventNamespace, function() {
        if($options$$279$$.disabled) {
          return!1
        }
        $$$$18$$(this).removeClass("oj-active");
        $self$$63$$.$_addOJDefaultClass$()
      }).bind("keydown" + this.eventNamespace, function($event$$156$$) {
        if($options$$279$$.disabled) {
          return!1
        }
        $event$$156$$.keyCode !== $$$$18$$.ui.keyCode.SPACE && $event$$156$$.keyCode !== $$$$18$$.ui.keyCode.ENTER || $$$$18$$(this).addClass("oj-active").removeClass("oj-default")
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
        $$$$18$$(this).removeClass("oj-active");
        $self$$63$$.$_addOJDefaultClass$()
      }), this.$buttonElement$.is("a") && this.$buttonElement$.bind("keyup" + this.eventNamespace, function($event$$157$$) {
        $event$$157$$.keyCode === $$$$18$$.ui.keyCode.SPACE && $$$$18$$(this).click()
      }));
      this._setOption("disabled", $options$$279$$.disabled);
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
      "checkbox" === this.type || "radio" === this.type ? ($checked_labelSelector$$ = "label[for\x3d'" + this.element.attr("id") + "']", this.$buttonElement$ = this.element.siblings().filter($checked_labelSelector$$).addClass("oj-button-label"), this.element.addClass("oj-helper-hidden-accessible").add(this.$buttonElement$).wrapAll("\x3cspan\x3e\x3c/span\x3e"), this.$rootElement$ = this.element.parent(), ($checked_labelSelector$$ = this.element[0].checked) && this.$rootElement$.addClass("oj-checked").removeClass("oj-default"), 
      this.element.attr("aria-pressed", $checked_labelSelector$$)) : this.$rootElement$ = this.$buttonElement$ = this.element
    }, widget:$JSCompiler_get$$("$rootElement$"), _destroy:function() {
      this.$_removeMenuBehavior$();
      this.element.removeClass("oj-helper-hidden-accessible").removeAttr("role").removeAttr("aria-pressed");
      var $isToggle$$ = "checkbox" === this.type || "radio" === this.type;
      $isToggle$$ || this.$rootElement$.removeClass("oj-button oj-widget oj-enabled oj-default oj-hover oj-active oj-checked oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only");
      this.$buttonElement$.html(this.$buttonElement$.find(".oj-button-text").html());
      $isToggle$$ ? (this.$buttonElement$.removeClass("oj-button-label"), this.element.unwrap()) : this.$hasTitle$ || this.$rootElement$.removeAttr("title")
    }, _setOption:function($key$$78$$, $value$$163$$) {
      this._super($key$$78$$, $value$$163$$);
      switch($key$$78$$) {
        case "disabled":
          $value$$163$$ = !!$value$$163$$;
          this.element.is("a") || (this.element.prop("disabled", $value$$163$$), this.widget().toggleClass("oj-enabled", !$value$$163$$), this.$rootElement$.removeAttr("aria-disabled"));
          $value$$163$$ ? (this.widget().removeClass("oj-active oj-default"), this.$_dismissMenu$(null, null, !0)) : this.$_addOJDefaultClass$();
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
        var $$radioWidget$$ = $$$$18$$(this).data("oj-ojButton");
        this.checked ? ($$radioWidget$$.$rootElement$.addClass("oj-checked").removeClass("oj-default"), $$radioWidget$$.element.attr("aria-pressed", "true")) : ($$radioWidget$$.$rootElement$.removeClass("oj-checked"), $$radioWidget$$.$_addOJDefaultClass$(), $$radioWidget$$.element.attr("aria-pressed", "false"))
      }) : "checkbox" === this.type && (this.element[0].checked ? (this.$rootElement$.addClass("oj-checked").removeClass("oj-default"), this.element.attr("aria-pressed", "true")) : (this.$rootElement$.removeClass("oj-checked"), this.$_addOJDefaultClass$(), this.element.attr("aria-pressed", "false")))
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
      var $buttonElement$$ = this.$buttonElement$, $textSpan$$1$$ = $$$$18$$("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e", this.document[0]);
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
      $appIconClass$$ ? ($iconSpan$$.length ? $iconSpan$$.removeClass(this[$lastIvar$$]) : $iconSpan$$ = $$$$18$$("\x3cspan\x3e\x3c/span\x3e").addClass($isStart_standardIconClass$$)[$pendTo$$](this.$buttonElement$), $iconSpan$$.addClass($appIconClass$$)) : $iconSpan$$.remove();
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
      $atLeastOneIcon_hasEndIcon$$2$$ && $displayIsIcons$$ ? ($buttonText_textSpan$$3$$.addClass("oj-helper-hidden-accessible"), this.$hasTitle$ || ($buttonText_textSpan$$3$$ = $buttonText_textSpan$$3$$.text(), this.$rootElement$.attr("title", $$$$18$$.trim($buttonText_textSpan$$3$$)))) : ($buttonText_textSpan$$3$$.removeClass("oj-helper-hidden-accessible"), this.$hasTitle$ || this.$rootElement$.removeAttr("title"));
      $buttonClass_hasStartIcon$$2$$ = $atLeastOneIcon_hasEndIcon$$2$$ ? $displayIsIcons$$ ? $multipleIcons$$ ? "oj-button-icons-only" : "oj-button-icon-only" : $multipleIcons$$ ? "oj-button-text-icons" : $buttonClass_hasStartIcon$$2$$ ? "oj-button-text-icon-start" : "oj-button-text-icon-end" : "oj-button-text-only";
      this.$rootElement$.removeClass("oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only").addClass($buttonClass_hasStartIcon$$2$$)
    }, $_setupMenuButton$:function() {
      this.$_removeMenuBehavior$();
      var $menu$$4$$ = this.$_getMenu$();
      if($menu$$4$$) {
        var $self$$64$$ = this;
        this.element.attr("aria-haspopup", !0).on("keydown" + this.$menuEventNamespace$, function($event$$158$$) {
          return $event$$158$$.which === $$$$18$$.ui.keyCode.DOWN ? ($self$$64$$.$_showMenu$($event$$158$$, "firstItem", $menu$$4$$), !1) : $event$$158$$.which === $$$$18$$.ui.keyCode.ESCAPE ? ($self$$64$$.$_dismissMenu$($event$$158$$, $menu$$4$$), !1) : !0
        }).on("click" + this.$menuEventNamespace$, function($event$$159$$) {
          $menu$$4$$.$__spaceEnterDownInMenu$ || $self$$64$$.$_toggleMenu$($event$$159$$, $menu$$4$$);
          return $menu$$4$$.$__spaceEnterDownInMenu$ = !1
        });
        $menu$$4$$.widget().on("oj__dismiss" + this.$menuEventNamespace$, function($event$$160$$) {
          $self$$64$$.$_menuDismissHandler$($event$$160$$)
        }).on("ojbeforeshow" + this.$menuEventNamespace$, function($event$$161$$) {
          $self$$64$$.$_launchingMenu$ || $self$$64$$.$_menuDismissHandler$($event$$161$$);
          $self$$64$$.$_launchingMenu$ = !1
        })
      }
    }, $_removeMenuBehavior$:function() {
      this.element.removeAttr("aria-haspopup").off(this.$menuEventNamespace$)
    }, $_getMenu$:function() {
      var $menu$$5$$ = this.options.menu;
      $menu$$5$$ && ($menu$$5$$ = $menu$$5$$.menu);
      $menu$$5$$ && ($menu$$5$$ = $$$$18$$("#" + $menu$$5$$).data("oj-ojMenu"));
      return $menu$$5$$ && this.element.not("input") ? $menu$$5$$ : null
    }, $_showMenu$:function($event$$162$$, $focus$$, $menu$$6$$) {
      this.options.disabled || ($menu$$6$$ || ($menu$$6$$ = this.$_getMenu$()), $menu$$6$$ && (this.$rootElement$.addClass("oj-checked").removeClass("oj-default"), this.$_launchingMenu$ = !0, $menu$$6$$.show($event$$162$$, {launcher:this.element, focus:$focus$$}), this.$_menuVisible$ = !0))
    }, $_dismissMenu$:function($event$$163$$, $menu$$7$$, $force$$) {
      if($force$$ || !this.options.disabled) {
        $menu$$7$$ || ($menu$$7$$ = this.$_getMenu$()), $menu$$7$$ && $menu$$7$$.$__dismiss$($event$$163$$)
      }
    }, $_menuDismissHandler$:function() {
      "button" === this.type && (this.$rootElement$.removeClass("oj-checked"), this.$_addOJDefaultClass$());
      this.$_menuVisible$ = !1
    }, $_toggleMenu$:function($event$$165$$, $menu$$8$$) {
      this.$_menuVisible$ ? this.$_dismissMenu$($event$$165$$, $menu$$8$$) : this.$_showMenu$($event$$165$$, "none", $menu$$8$$)
    }, $_addOJDefaultClass$:function() {
      this.$rootElement$.is(".oj-active, .oj-disabled, .oj-checked, .oj-hover, .oj-focus") || this.$rootElement$.addClass("oj-default")
    }});
    $oj$$19$$.$__registerWidget$("oj.ojButtonset", $$$$18$$.oj.baseComponent, {version:"1.0.0", $items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a, :data(oj-ojButton)", widgetEventPrefix:"oj", options:{checked:void 0, focusManagement:"oneTabstop", optionChange:null}, $_setCheckedOnDom$:function($checked$$1$$, $$buttons$$1$$) {
      var $name$$92_type$$81_valid$$9$$ = $$$$18$$.type($checked$$1$$);
      if("string" === $name$$92_type$$81_valid$$9$$ || "null" === $name$$92_type$$81_valid$$9$$) {
        return($name$$92_type$$81_valid$$9$$ = (($name$$92_type$$81_valid$$9$$ = $$buttons$$1$$[0].name) || 1 >= $$buttons$$1$$.length) && $$buttons$$1$$.filter("input[type\x3dradio][name\x3d" + $name$$92_type$$81_valid$$9$$ + "]").length === $$buttons$$1$$.length && (null === $checked$$1$$ || $$buttons$$1$$.filter("[value\x3d" + $checked$$1$$ + "]").length)) && $$buttons$$1$$.each(function() {
          this.checked = this.value === $checked$$1$$
        }), $name$$92_type$$81_valid$$9$$
      }
      if("array" === $name$$92_type$$81_valid$$9$$) {
        var $name$$92_type$$81_valid$$9$$ = $$buttons$$1$$.filter("input[type\x3dcheckbox]").length === $$buttons$$1$$.length, $last$$;
        ($name$$92_type$$81_valid$$9$$ = $name$$92_type$$81_valid$$9$$ && $checked$$1$$.concat().sort().every(function($elem$$20$$) {
          var $retVal$$12$$ = $elem$$20$$ !== $last$$ && $$buttons$$1$$.filter("[value\x3d" + $elem$$20$$ + "]").length;
          $last$$ = $elem$$20$$;
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
      return $checked1$$ === $checked2$$ ? !0 : "array" === $$$$18$$.type($checked1$$) && "array" === $$$$18$$.type($checked2$$) && !$$$$18$$($checked1$$).not($checked2$$).length && !$$$$18$$($checked2$$).not($checked1$$).length
    }, _create:function() {
      this.element.addClass("oj-buttonset oj-widget").attr("role", "group");
      this.$_setup$(!0);
      this._super()
    }, $_showContextMenu$:function($menu$$9$$, $event$$166$$) {
      $menu$$9$$.show($event$$166$$, {launcher:this.element.find(":oj-button[tabindex\x3d0]"), focus:"menu"})
    }, _setOption:function($key$$79$$, $value$$164$$) {
      var $bail_previousValue$$3$$ = !1, $optionChangeOriginalEvent$$ = this.$_optionChangeOriginalEvent$;
      this.$_optionChangeOriginalEvent$ = null;
      "disabled" === $key$$79$$ && this.$$buttons$.ojButton("option", $key$$79$$, $value$$164$$);
      "checked" !== $key$$79$$ || $optionChangeOriginalEvent$$ || null === $value$$164$$ && void 0 === this.$_getCheckedFromDom$(this.$$buttons$) || (this.$_setCheckedOnDom$($value$$164$$, this.$$buttons$) ? this.$$buttons$.each(function() {
        $$$$18$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1)
      }) : $bail_previousValue$$3$$ = !0);
      $bail_previousValue$$3$$ || ($bail_previousValue$$3$$ = this.options[$key$$79$$], this._super($key$$79$$, $value$$164$$), "checked" === $key$$79$$ && this.$_fireOptionChange$($key$$79$$, $bail_previousValue$$3$$, $value$$164$$, this.$_checkedEquals$, $optionChangeOriginalEvent$$))
    }, $_fireOptionChange$:function($key$$80$$, $previousValue$$4$$, $value$$165$$, $equals$$, $originalEvent$$2$$) {
      $equals$$.call(this, $previousValue$$4$$, $value$$165$$) || this._trigger("optionChange", $originalEvent$$2$$, {option:$key$$80$$, previousValue:$previousValue$$4$$, value:$value$$165$$, optionMetadata:{writeback:$originalEvent$$2$$ ? "shouldWrite" : "shouldNotWrite"}})
    }, refresh:function() {
      this._super();
      this.$_setup$(!1)
    }, $_setup$:function($isCreate$$) {
      var $self$$65$$ = this;
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
        $$$$18$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1)
      }).end().not(":oj-button").ojButton().end().map(function() {
        return $$$$18$$(this).ojButton("widget")[0]
      }).removeClass("oj-buttonset-corner-start oj-buttonset-corner-end").filter(":first").addClass("oj-buttonset-corner-start").end().filter(":last").addClass("oj-buttonset-corner-end").end().end();
      $isCreate$$ && this.options.disabled && this.$$buttons$.ojButton("option", "disabled", !0);
      "oneTabstop" === this.options.focusManagement && (this.$$buttons$.unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$167$$) {
        $self$$65$$.$_handleKeyDown$($event$$167$$, $$$$18$$(this))
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $clickDragged$$ || $$$$18$$(this).ojButton("option", "disabled") || $self$$65$$.$_setTabStop$($$$$18$$(this))
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$65$$.$_setTabStop$($$$$18$$(this))
      }), this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$18$$(this).ojButton("option", "disabled")
      }), this.$_initTabindexes$($isCreate$$));
      $shouldFire$$ && this.$_fireOptionChange$("checked", $oldChecked$$, $newChecked$$, this.$_checkedEquals$, null)
    }, $_initTabindexes$:function($$newTabStop_isCreate$$1$$) {
      var $$last$$ = $$$$18$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop_isCreate$$1$$ = $$newTabStop_isCreate$$1$$ || !$$last$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$;
      this.$_setTabStop$($$newTabStop_isCreate$$1$$)
    }, $_mapToTabbable$:function($$button$$) {
      var $$enabledButtons$$ = this.$$enabledButtons$;
      return $$button$$.map(function($index$$154$$, $elem$$21$$) {
        if("radio" != $elem$$21$$.type || $elem$$21$$.checked || "" == $elem$$21$$.name) {
          return $elem$$21$$
        }
        var $$checkedRadio$$ = $_radioGroup$$($elem$$21$$, $$enabledButtons$$).filter(":checked");
        return $$checkedRadio$$.length ? $$checkedRadio$$[0] : $elem$$21$$
      })
    }, $_setTabStop$:function($$button$$1$$) {
      $$button$$1$$ = this.$_mapToTabbable$($$button$$1$$);
      var $button$$ = $$button$$1$$[0], $last$$1$$ = this.$_lastTabStop$;
      $button$$ !== $last$$1$$ && ($$$$18$$($last$$1$$).attr("tabindex", "-1"), $$button$$1$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$)
    }, $_handleKeyDown$:function($event$$170$$, $$button$$2$$) {
      switch($event$$170$$.which) {
        case $$$$18$$.ui.keyCode.LEFT:
        ;
        case $$$$18$$.ui.keyCode.RIGHT:
          $event$$170$$.preventDefault();
          var $$enabledButtons$$1$$ = this.$$enabledButtons$, $length$$16$$ = $$enabledButtons$$1$$.length;
          if(2 > $length$$16$$) {
            break
          }
          var $oldIndex$$1$$ = $$enabledButtons$$1$$.index($$button$$2$$);
          $$enabledButtons$$1$$.eq(($oldIndex$$1$$ + ($event$$170$$.which == $$$$18$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$16$$) % $length$$16$$).focus();
          break;
        case $$$$18$$.ui.keyCode.UP:
        ;
        case $$$$18$$.ui.keyCode.DOWN:
          "radio" == $$button$$2$$.attr("type") && $event$$170$$.preventDefault()
      }
    }, _destroy:function() {
      this.element.removeClass("oj-buttonset oj-widget").removeAttr("role");
      "oneTabstop" === this.options.focusManagement && this.$$buttons$.attr("tabindex", "0");
      this.$$buttons$.map(function() {
        return $$$$18$$(this).ojButton("widget")[0]
      }).removeClass("oj-buttonset-corner-start oj-buttonset-corner-end").end().ojButton("destroy")
    }})
  })();
  (function() {
    function $_each2$$($list$$, $c$$23$$) {
      for(var $j$$33$$ = $$$$18$$($list$$[0]), $i$$204$$ = -1, $l$$4$$ = $list$$.length;++$i$$204$$ < $l$$4$$ && ($j$$33$$.context = $j$$33$$[0] = $list$$[$i$$204$$]) && !1 !== $c$$23$$.call($j$$33$$[0], $i$$204$$, $j$$33$$);) {
      }
    }
    function $_measureScrollbar$$() {
      var $$template$$ = $$$$18$$("\x3cdiv class\x3d'oj-listbox-measure-scrollbar'\x3e\x3c/div\x3e");
      $$template$$.appendTo("body");
      var $dim$$ = {width:$$template$$.width() - $$template$$[0].clientWidth, height:$$template$$.height() - $$template$$[0].clientHeight};
      $$template$$.remove();
      return $dim$$
    }
    function $_splitVal$$($string$$3$$, $separator$$1$$) {
      var $val$$29$$, $i$$205$$, $l$$5$$;
      if(null === $string$$3$$ || 1 > $string$$3$$.length) {
        return[]
      }
      $val$$29$$ = $string$$3$$.split($separator$$1$$);
      $i$$205$$ = 0;
      for($l$$5$$ = $val$$29$$.length;$i$$205$$ < $l$$5$$;$i$$205$$ += 1) {
        $val$$29$$[$i$$205$$] = $$$$18$$.trim($val$$29$$[$i$$205$$])
      }
      return $val$$29$$
    }
    function $_installKeyUpChangeEvent$$($element$$49$$) {
      $element$$49$$.on("keydown", function() {
        void 0 === $$$$18$$.data($element$$49$$, "keyup-change-value") && $$$$18$$.data($element$$49$$, "keyup-change-value", $element$$49$$.val())
      });
      $element$$49$$.on("keyup", function($e$$52_val$$30$$) {
        $e$$52_val$$30$$.which === $_KEY$$.ENTER ? $e$$52_val$$30$$.stopPropagation() : ($e$$52_val$$30$$ = $$$$18$$.data($element$$49$$, "keyup-change-value"), void 0 !== $e$$52_val$$30$$ && $element$$49$$.val() !== $e$$52_val$$30$$ && ($$$$18$$.removeData($element$$49$$, "keyup-change-value"), $element$$49$$.trigger("keyup-change")))
      })
    }
    function $_installFilteredMouseMove$$($element$$50$$) {
      $element$$50$$.on("mousemove", function($e$$53$$) {
        var $lastpos$$ = $_lastMousePosition$$;
        if(void 0 === $lastpos$$ || $lastpos$$.x !== $e$$53$$.pageX || $lastpos$$.y !== $e$$53$$.pageY) {
          $$$$18$$($e$$53$$.target).trigger("mousemove-filtered", $e$$53$$), $_lastMousePosition$$.x = $e$$53$$.pageX, $_lastMousePosition$$.y = $e$$53$$.pageY
        }
      })
    }
    function $_thunk$$($formula$$) {
      var $evaluated$$ = !1, $value$$166$$;
      return function() {
        !1 === $evaluated$$ && ($value$$166$$ = $formula$$(), $evaluated$$ = !0);
        return $value$$166$$
      }
    }
    function $_focus$$($$el$$) {
      $$el$$[0] !== document.activeElement && window.setTimeout(function() {
        var $el$$1_range$$18$$ = $$el$$[0], $pos$$5$$ = $$el$$.val().length;
        $$el$$.focus();
        $$el$$.is(":visible") && $el$$1_range$$18$$ === document.activeElement && ($el$$1_range$$18$$.setSelectionRange ? $el$$1_range$$18$$.setSelectionRange($pos$$5$$, $pos$$5$$) : $el$$1_range$$18$$.createTextRange && ($el$$1_range$$18$$ = $el$$1_range$$18$$.createTextRange(), $el$$1_range$$18$$.collapse(!1), $el$$1_range$$18$$.select()))
      }, 0)
    }
    function $_killEvent$$($event$$171$$) {
      $event$$171$$.preventDefault();
      $event$$171$$.stopPropagation()
    }
    function $_local$$($dataItem_options$$280$$) {
      function $text$$7$$($item$$4$$) {
        return"" + $item$$4$$.text
      }
      var $data$$87$$ = $dataItem_options$$280$$, $dataText$$, $tmp$$1$$;
      $$$$18$$.isArray($data$$87$$) && ($tmp$$1$$ = $data$$87$$, $data$$87$$ = {$results$:$tmp$$1$$});
      !1 === $$$$18$$.isFunction($data$$87$$) && ($tmp$$1$$ = $data$$87$$, $data$$87$$ = function $$data$$87$$$() {
        return $tmp$$1$$
      });
      $dataItem_options$$280$$ = $data$$87$$();
      $dataItem_options$$280$$.text && ($text$$7$$ = $dataItem_options$$280$$.text, $$$$18$$.isFunction($text$$7$$) || ($dataText$$ = $dataItem_options$$280$$.text, $text$$7$$ = function $$text$$7$$$($item$$5$$) {
        return $item$$5$$[$dataText$$]
      }));
      return function($query$$3$$) {
        var $t$$ = $query$$3$$.$term$, $filtered$$ = {$results$:[]}, $process$$1$$;
        "" === $t$$ ? $query$$3$$.$callback$($data$$87$$()) : ($process$$1$$ = function $$process$$1$$$($datum$$, $collection$$53$$) {
          var $group$$1$$, $attr$$16$$;
          $datum$$ = $datum$$[0];
          if($datum$$.children) {
            $group$$1$$ = {};
            for($attr$$16$$ in $datum$$) {
              $datum$$.hasOwnProperty($attr$$16$$) && ($group$$1$$[$attr$$16$$] = $datum$$[$attr$$16$$])
            }
            $group$$1$$.children = [];
            $_each2$$($$$$18$$($datum$$.children), function($i$$206$$, $childDatum$$) {
              $process$$1$$($childDatum$$, $group$$1$$.children)
            });
            ($group$$1$$.children.length || $query$$3$$.$matcher$($t$$, $text$$7$$($group$$1$$), $datum$$)) && $collection$$53$$.push($group$$1$$)
          }else {
            $query$$3$$.$matcher$($t$$, $text$$7$$($datum$$), $datum$$) && $collection$$53$$.push($datum$$)
          }
        }, $_each2$$($$$$18$$($data$$87$$().$results$), function($i$$207$$, $datum$$1$$) {
          $process$$1$$($datum$$1$$, $filtered$$.$results$)
        }), $query$$3$$.$callback$($filtered$$))
      }
    }
    function $_checkFormatter$$($formatter$$) {
      if($$$$18$$.isFunction($formatter$$)) {
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
      $oj$$19$$.$Object$.$createSubclass$($constructor$$1$$, $SuperClass$$, "");
      $constructor$$1$$.prototype = $$$$18$$.extend($constructor$$1$$.prototype, $methods$$1$$);
      return $constructor$$1$$
    }
    $oj$$19$$.$__registerWidget$("oj.ojCombobox", $$$$18$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{placeholder:"", multiple:!1, data:null, expand:null}, widget:function() {
      return this.$combobox$.$container$
    }, _create:function() {
      this.$_setup$();
      this._super()
    }, $_setup$:function() {
      var $opts$$11$$, $multiple$$ = this.options.multiple;
      $opts$$11$$ = {};
      $opts$$11$$.element = this.element;
      $opts$$11$$.$ojContext$ = this;
      $opts$$11$$ = $$$$18$$.extend(this.options, $opts$$11$$);
      this.$combobox$ = $multiple$$ ? new $_OjMultiCombobox$$ : new $_OjSingleCombobox$$;
      this.$combobox$._init($opts$$11$$);
      this.$_SetRootAttributes$()
    }, _destroy:function() {
      this.$combobox$._destroy()
    }, refresh:function() {
      this._super();
      this.$combobox$._destroy();
      this.$_setup$()
    }, expand:function($event$$173$$) {
      this.$combobox$.open();
      this._trigger("ojexpand", $event$$173$$)
    }, collapse:function() {
      this.$combobox$.close()
    }, _setOption:function($key$$82$$, $value$$167$$) {
      this._super($key$$82$$, $value$$167$$);
      "disabled" === $key$$82$$ ? $value$$167$$ ? this.$combobox$.$_disable$() : this.$combobox$.$_enable$() : "data" === $key$$82$$ && this.refresh()
    }, _GetMessagingTriggerElement:function() {
      return this.$combobox$.$container$
    }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-combobox"), getNodeBySubId:function($locator$$10_subId$$5$$) {
      if(null == $locator$$10_subId$$5$$) {
        return this.$combobox$.$container$ ? this.$combobox$.$container$ : null
      }
      $locator$$10_subId$$5$$ = $locator$$10_subId$$5$$.subId;
      switch($locator$$10_subId$$5$$) {
        case "oj-combobox-input":
        ;
        case "oj-combobox-arrow":
        ;
        case "oj-listbox-drop":
        ;
        case "oj-combobox-results":
          return this.widget().find($locator$$10_subId$$5$$)[0]
      }
      return null
    }});
    $oj$$19$$.$__registerWidget$("oj.ojSelect", $$$$18$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cselect\x3e", widgetEventPrefix:"oj", options:{minimumResultsForSearch:10, placeholder:"", data:null, expand:null}, widget:function() {
      return this.select.$container$
    }, _create:function() {
      this.$_setup$();
      this._super()
    }, $_setup$:function() {
      var $opts$$12$$;
      $opts$$12$$ = {};
      $opts$$12$$.element = this.element;
      $opts$$12$$.$ojContext$ = this;
      $opts$$12$$ = $$$$18$$.extend(this.options, $opts$$12$$);
      this.select = new $_OjSingleSelect$$;
      this.select._init($opts$$12$$);
      this.$_SetRootAttributes$()
    }, refresh:function() {
      this._super();
      this.select._destroy();
      this.$_setup$()
    }, _destroy:function() {
      this.select._destroy()
    }, expand:function() {
      this.select.open()
    }, collapse:function() {
      this.select.close()
    }, _setOption:function($key$$83$$, $value$$168$$) {
      this._super($key$$83$$, $value$$168$$);
      "disabled" === $key$$83$$ ? $value$$168$$ ? this.select.$_disable$() : this.select.$_enable$() : "data" === $key$$83$$ ? this.$_setup$() : "value" === $key$$83$$ && (this.select.$setVal$($value$$168$$), this.select.$_initSelection$())
    }, getNodeBySubId:function($locator$$11_subId$$6$$) {
      if(null == $locator$$11_subId$$6$$) {
        return this.select.$container$ ? this.select.$container$ : null
      }
      $locator$$11_subId$$6$$ = $locator$$11_subId$$6$$.subId;
      switch($locator$$11_subId$$6$$) {
        case "oj-select-chosen":
        ;
        case "oj-select-search":
        ;
        case "oj-listbox-drop":
        ;
        case "oj-listbox-results":
          return this.widget().find("." + $locator$$11_subId$$6$$)[0]
      }
      return null
    }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-select"), _GetMessagingTriggerElement:function() {
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
      var $self$$66$$ = this;
      return function() {
        $func$$10$$.apply($self$$66$$, arguments)
      }
    }, _init:function($opts$$13$$) {
      var $search$$1$$, $className$$9$$ = this.$_classNm$, $disabled$$1_elemName_readonly$$ = this.$_elemNm$;
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
      this.$dropdown$ = this.$container$.find(".oj-listbox-drop");
      this.$dropdown$.data($disabled$$1_elemName_readonly$$, this);
      this.$dropdown$.on("click", $_killEvent$$);
      this.$results$ = this.$container$.find(".oj-listbox-results");
      this.search = $search$$1$$ = this.$container$.find("input." + $className$$9$$ + "-input");
      this.$resultsPage$ = this.$queryCount$ = 0;
      this.context = null;
      this.$_initContainer$();
      this.$container$.on("click", $_killEvent$$);
      $_installFilteredMouseMove$$(this.$results$);
      this.$dropdown$.on("mousemove-filtered touchstart touchmove touchend", ".oj-listbox-results", this.$_bind$(this.$_highlightUnderEvent$));
      $$$$18$$(this.$container$).on("change", "." + $className$$9$$ + "-input", function($e$$55$$) {
        $e$$55$$.stopPropagation()
      });
      $$$$18$$(this.$dropdown$).on("change", "." + $className$$9$$ + "-input", function($e$$56$$) {
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
      this.$dropdown$.on("mouseup", ".oj-listbox-results", this.$_bind$(function($e$$57$$) {
        0 < $$$$18$$($e$$57$$.target).closest(".oj-listbox-result-selectable").length && (this.$_highlightUnderEvent$($e$$57$$), this.$_selectHighlighted$($e$$57$$))
      }));
      this.$dropdown$.on("click mouseup mousedown", function($e$$58$$) {
        $e$$58$$.stopPropagation()
      });
      $$$$18$$.isFunction(this.$opts$.$initSelection$) && ($opts$$13$$.value ? this.$setVal$($opts$$13$$.value) : "oj-select" === this.$_classNm$ && ($opts$$13$$.data && 0 < $opts$$13$$.data.length) && this.$setVal$($opts$$13$$.data[0]), this.$_initSelection$());
      $disabled$$1_elemName_readonly$$ = $opts$$13$$.element.prop("disabled");
      void 0 === $disabled$$1_elemName_readonly$$ && ($disabled$$1_elemName_readonly$$ = !1);
      this.$_enable$(!$disabled$$1_elemName_readonly$$);
      $disabled$$1_elemName_readonly$$ = $opts$$13$$.element.prop("readonly");
      void 0 === $disabled$$1_elemName_readonly$$ && ($disabled$$1_elemName_readonly$$ = !1);
      this.$_readonly$($disabled$$1_elemName_readonly$$);
      $_scrollBarDimensions$$ = $_scrollBarDimensions$$ || $_measureScrollbar$$();
      this.autofocus = $opts$$13$$.element.prop("autofocus");
      $opts$$13$$.element.prop("autofocus", !1);
      this.autofocus && this.$_focus$()
    }, _destroy:function() {
      var $element$$51$$ = this.$opts$.element, $ojcomp$$ = $element$$51$$.data(this.$_elemNm$);
      this.close();
      this.$propertyObserver$ && (delete this.$propertyObserver$, this.$propertyObserver$ = null);
      void 0 !== $ojcomp$$ && ($ojcomp$$.$container$.remove(), $ojcomp$$.$dropdown$.remove(), $element$$51$$.removeClass(this.$_classNm$ + "-offscreen").removeData(this.$_elemNm$).off("." + this.$_classNm$).prop("autofocus", this.autofocus || !1), this.$elementTabIndex$ ? $element$$51$$.attr({$tabindex$:this.$elementTabIndex$}) : $element$$51$$.removeAttr("tabindex"), $element$$51$$.show())
    }, $_optionToData$:function($element$$52$$) {
      if($element$$52$$.is("option")) {
        return{id:$element$$52$$.prop("value"), text:$element$$52$$.text(), element:$element$$52$$.get(), css:$element$$52$$.attr("class"), disabled:$element$$52$$.prop("disabled"), locked:"locked" === $element$$52$$.attr("locked") || !0 === $element$$52$$.data("locked")}
      }
      if($element$$52$$.is("optgroup")) {
        return{text:$element$$52$$.attr("label"), children:[], element:$element$$52$$.get(), css:$element$$52$$.attr("class")}
      }
    }, $_prepareOpts$:function($opts$$14$$) {
      var $element$$53$$, $datalist$$, $idKey$$, $self$$67$$ = this;
      $element$$53$$ = $opts$$14$$.element;
      var $tagName$$2$$ = $element$$53$$.get(0).tagName.toLowerCase();
      "input" === $tagName$$2$$ && $element$$53$$.attr("list") ? this.$datalist$ = $datalist$$ = $$$$18$$("#" + $element$$53$$.attr("list")) : "select" === $tagName$$2$$ && 0 < $element$$53$$.children().length && (this.$datalist$ = $datalist$$ = $element$$53$$);
      $opts$$14$$ = $$$$18$$.extend({}, {$populateResults$:function($container$$2$$, $results$$6$$, $query$$4$$) {
        var $populate$$, $id$$23$$ = this.$opts$.id;
        $populate$$ = function $$populate$$$($results$$7$$, $container$$3$$, $depth$$19$$) {
          var $i$$208$$, $l$$6$$, $result$$16$$, $label$$4_selectable$$, $disabled$$2_formatted$$1$$, $compound_innerContainer$$, $node$$17$$;
          $i$$208$$ = 0;
          for($l$$6$$ = $results$$7$$.length;$i$$208$$ < $l$$6$$;$i$$208$$ += 1) {
            $result$$16$$ = $results$$7$$[$i$$208$$], $disabled$$2_formatted$$1$$ = !0 === $result$$16$$.disabled, $label$$4_selectable$$ = !$disabled$$2_formatted$$1$$ && void 0 !== $id$$23$$($result$$16$$), $compound_innerContainer$$ = $result$$16$$.children && 0 < $result$$16$$.children.length, $node$$17$$ = $$$$18$$("\x3cli\x3e\x3c/li\x3e"), $node$$17$$.addClass("oj-listbox-results-dept-" + $depth$$19$$), $node$$17$$.addClass("oj-listbox-result"), $node$$17$$.addClass($label$$4_selectable$$ ? 
            "oj-listbox-result-selectable" : "oj-listbox-result-unselectable"), $disabled$$2_formatted$$1$$ && $node$$17$$.addClass("oj-disabled"), $compound_innerContainer$$ && $node$$17$$.addClass("oj-listbox-result-with-children"), $node$$17$$.attr("role", "presentation"), $label$$4_selectable$$ = $$$$18$$(document.createElement("div")), $label$$4_selectable$$.addClass("oj-listbox-result-label"), $label$$4_selectable$$.attr("id", "oj-listbox-result-label-" + $_nextUid$$()), $label$$4_selectable$$.attr("role", 
            "option"), $disabled$$2_formatted$$1$$ && $label$$4_selectable$$.attr("aria-disabled", "true"), $disabled$$2_formatted$$1$$ = $opts$$14$$.$formatResult$($result$$16$$, $label$$4_selectable$$, $query$$4$$, $self$$67$$.$opts$.$escapeMarkup$), void 0 !== $disabled$$2_formatted$$1$$ && $label$$4_selectable$$.html($disabled$$2_formatted$$1$$), $node$$17$$.append($label$$4_selectable$$), $compound_innerContainer$$ && ($compound_innerContainer$$ = $$$$18$$("\x3cul\x3e\x3c/ul\x3e"), $compound_innerContainer$$.addClass("oj-listbox-result-sub"), 
            $populate$$($result$$16$$.children, $compound_innerContainer$$, $depth$$19$$ + 1), $node$$17$$.append($compound_innerContainer$$)), $node$$17$$.data($self$$67$$.$_elemNm$, $result$$16$$), $container$$3$$.append($node$$17$$)
          }
        };
        $populate$$($results$$6$$, $container$$2$$, 0)
      }}, $_ojChoice_defaults$$, "select" === $tagName$$2$$ ? null : $_ojCombobox_methods$$, $opts$$14$$);
      "function" !== typeof $opts$$14$$.id && ($idKey$$ = $opts$$14$$.id, $opts$$14$$.id = function $$opts$$14$$$id$($e$$59$$) {
        return $e$$59$$[$idKey$$]
      });
      $datalist$$ ? ($opts$$14$$.$query$ = this.$_bind$(function($query$$5$$) {
        var $data$$88$$ = {$results$:[], $more$:!1}, $term$$ = $query$$5$$.$term$, $children$$2$$, $process$$2$$;
        $process$$2$$ = function $$process$$2$$$($element$$54$$, $collection$$54$$) {
          var $group$$2$$;
          $element$$54$$.is("option") ? $query$$5$$.$matcher$($term$$, $element$$54$$.text(), $element$$54$$) && $collection$$54$$.push($self$$67$$.$_optionToData$($element$$54$$)) : $element$$54$$.is("optgroup") && ($group$$2$$ = $self$$67$$.$_optionToData$($element$$54$$), $_each2$$($element$$54$$.children(), function($i$$209$$, $elm$$) {
            $process$$2$$($elm$$, $group$$2$$.children)
          }), 0 < $group$$2$$.children.length && $collection$$54$$.push($group$$2$$))
        };
        $children$$2$$ = $datalist$$.children();
        if(void 0 !== this.$_getPlaceholder$() && 0 < $children$$2$$.length) {
          var $placeholderOption$$ = this.$_getPlaceholderOption$();
          $placeholderOption$$ && ($children$$2$$ = $children$$2$$.not($placeholderOption$$))
        }
        $_each2$$($children$$2$$, function($i$$210$$, $elm$$1$$) {
          $process$$2$$($elm$$1$$, $data$$88$$.$results$)
        });
        $query$$5$$.$callback$($data$$88$$)
      }), $opts$$14$$.id = function $$opts$$14$$$id$($e$$60$$) {
        return $e$$60$$.id
      }) : "data" in $opts$$14$$ && ($opts$$14$$.$query$ = $_local$$($opts$$14$$.data));
      return $opts$$14$$
    }, $_triggerSelect$:function($data$$89_evt$$22$$) {
      $data$$89_evt$$22$$ = $$$$18$$.Event(this.$_elemNm$ + "-selecting", {val:this.id($data$$89_evt$$22$$), object:$data$$89_evt$$22$$});
      this.$opts$.element.trigger($data$$89_evt$$22$$);
      return!$data$$89_evt$$22$$.isDefaultPrevented()
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
      return this.$container$.hasClass("oj-listbox-dropdown-open")
    }, $_positionDropdown$:function() {
      var $$dropdown$$ = this.$dropdown$, $offset$$23$$ = this.$container$.offset(), $dropTop_height$$15$$ = this.$container$.outerHeight(!1), $css_width$$16$$ = this.$container$.outerWidth(!1), $above_dropHeight$$ = $$dropdown$$.outerHeight(!1), $$window_resultsListNode$$ = $$$$18$$(window), $windowWidth$$ = $$window_resultsListNode$$.width(), $windowHeight$$ = $$window_resultsListNode$$.height(), $bodyOffset_viewPortRight$$ = $$window_resultsListNode$$.scrollLeft() + $windowWidth$$, $enoughRoomBelow_viewportBottom$$ = 
      $$window_resultsListNode$$.scrollTop() + $windowHeight$$, $dropTop_height$$15$$ = $offset$$23$$.top + $dropTop_height$$15$$, $dropLeft$$ = $offset$$23$$.left, $enoughRoomBelow_viewportBottom$$ = $dropTop_height$$15$$ + $above_dropHeight$$ <= $enoughRoomBelow_viewportBottom$$, $enoughRoomAbove$$ = $offset$$23$$.top - $above_dropHeight$$ >= this.body().scrollTop(), $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight$$ = $dropLeft$$ + $dropWidth$$ <= $bodyOffset_viewPortRight$$, $changeDirection$$;
      $$dropdown$$.hasClass("oj-listbox-drop-above") ? ($above_dropHeight$$ = !0, !$enoughRoomAbove$$ && $enoughRoomBelow_viewportBottom$$ && ($changeDirection$$ = !0, $above_dropHeight$$ = !1)) : ($above_dropHeight$$ = !1, !$enoughRoomBelow_viewportBottom$$ && $enoughRoomAbove$$ && ($above_dropHeight$$ = $changeDirection$$ = !0));
      $changeDirection$$ ? ($$dropdown$$.hide(), $offset$$23$$ = this.$container$.offset(), $dropTop_height$$15$$ = this.$container$.outerHeight(!1), $css_width$$16$$ = this.$container$.outerWidth(!1), $$dropdown$$.outerHeight(!1), $bodyOffset_viewPortRight$$ = $$window_resultsListNode$$.scrollLeft() + $windowWidth$$, $$window_resultsListNode$$.scrollTop(), $dropTop_height$$15$$ = $offset$$23$$.top + $dropTop_height$$15$$, !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$15$$ -= 
      1), $dropLeft$$ = $offset$$23$$.left, $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight$$ = $dropLeft$$ + $dropWidth$$ <= $bodyOffset_viewPortRight$$, $$dropdown$$.show()) : !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$15$$ -= 1);
      this.$opts$.$dropdownAutoWidth$ ? ($$window_resultsListNode$$ = $$$$18$$(".oj-listbox-results", $$dropdown$$)[0], $$dropdown$$.addClass("oj-listbox-drop-auto-width"), $$dropdown$$.css("width", ""), $dropWidth$$ = $$dropdown$$.outerWidth(!1) + ($$window_resultsListNode$$.scrollHeight === $$window_resultsListNode$$.clientHeight ? 0 : $_scrollBarDimensions$$.width), $dropWidth$$ > $css_width$$16$$ ? $css_width$$16$$ = $dropWidth$$ : $dropWidth$$ = $css_width$$16$$, $enoughRoomOnRight$$ = $dropLeft$$ + 
      $dropWidth$$ <= $bodyOffset_viewPortRight$$) : this.$container$.removeClass("oj-listbox-drop-auto-width");
      "static" !== this.body().css("position") && ($bodyOffset_viewPortRight$$ = this.body().offset(), $dropTop_height$$15$$ -= $bodyOffset_viewPortRight$$.top, $dropLeft$$ -= $bodyOffset_viewPortRight$$.left);
      $enoughRoomOnRight$$ || ($dropLeft$$ = $offset$$23$$.left + $css_width$$16$$ - $dropWidth$$);
      $css_width$$16$$ = {left:$dropLeft$$, width:$css_width$$16$$};
      $above_dropHeight$$ ? ($css_width$$16$$.bottom = $windowHeight$$ - $offset$$23$$.top, $css_width$$16$$.top = "auto", this.$container$.addClass("oj-listbox-drop-above"), $$dropdown$$.addClass("oj-listbox-drop-above")) : ($css_width$$16$$.top = $dropTop_height$$15$$, $css_width$$16$$.bottom = "auto", this.$container$.removeClass("oj-listbox-drop-above"), $$dropdown$$.removeClass("oj-listbox-drop-above"));
      $$dropdown$$.css($css_width$$16$$)
    }, $_shouldOpen$:function() {
      var $event$$174$$;
      if(this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$) {
        return!1
      }
      $event$$174$$ = $$$$18$$.Event(this.$_elemNm$ + "-opening");
      this.$opts$.element.trigger($event$$174$$);
      return!$event$$174$$.isDefaultPrevented()
    }, $_clearDropdownAlignmentPreference$:function() {
      this.$container$.removeClass("oj-listbox-drop-above");
      this.$dropdown$.removeClass("oj-listbox-drop-above")
    }, open:function() {
      if(!this.$_shouldOpen$()) {
        return!1
      }
      this.$_opening$();
      return!0
    }, $_clearPlaceholder$:function() {
      this.search.hasClass(this.$_classNm$ + "-default") && this.search.val("").removeClass(this.$_classNm$ + "-default")
    }, $_opening$:function() {
      var $cid$$6_mask$$5$$ = this.$containerId$, $scroll$$ = "scroll." + $cid$$6_mask$$5$$, $resize$$ = "resize." + $cid$$6_mask$$5$$, $orient$$ = "orientationchange." + $cid$$6_mask$$5$$, $elemName$$1$$ = this.$_elemNm$;
      this.$_clearPlaceholder$();
      this.$container$.addClass("oj-listbox-dropdown-open");
      this.$_clearDropdownAlignmentPreference$();
      this.$dropdown$[0] !== this.body().children().last()[0] && this.$dropdown$.detach().appendTo(this.body());
      $cid$$6_mask$$5$$ = $$$$18$$("#oj-listbox-drop-mask");
      0 == $cid$$6_mask$$5$$.length && ($cid$$6_mask$$5$$ = $$$$18$$(document.createElement("div")), $cid$$6_mask$$5$$.attr("id", "oj-listbox-drop-mask").attr("class", "oj-listbox-drop-mask"), $cid$$6_mask$$5$$.hide(), $cid$$6_mask$$5$$.appendTo(this.body()), $cid$$6_mask$$5$$.on("mousedown touchstart click", function($e$$61$$) {
        var $dropdown_self$$68$$ = $$$$18$$("#oj-listbox-drop");
        0 < $dropdown_self$$68$$.length && ($dropdown_self$$68$$ = $dropdown_self$$68$$.data($elemName$$1$$), $dropdown_self$$68$$.$opts$.$selectOnBlur$ && $dropdown_self$$68$$.$_selectHighlighted$({$noFocus$:!0}), $dropdown_self$$68$$.close(), $e$$61$$.preventDefault(), $e$$61$$.stopPropagation())
      }));
      this.$dropdown$.prev()[0] !== $cid$$6_mask$$5$$[0] && this.$dropdown$.before($cid$$6_mask$$5$$);
      $$$$18$$("#oj-listbox-drop").removeAttr("id");
      this.$dropdown$.attr("id", "oj-listbox-drop");
      $cid$$6_mask$$5$$.show();
      this.$_positionDropdown$();
      this.$dropdown$.show();
      this.$_positionDropdown$();
      this.search.attr("aria-expanded", !0);
      var $that$$2$$ = this;
      this.$container$.parents().add(window).each(function() {
        $$$$18$$(this).on($resize$$ + " " + $scroll$$ + " " + $orient$$, function() {
          $that$$2$$.$_positionDropdown$()
        })
      })
    }, close:function() {
      if(this.$_opened$()) {
        var $cid$$7$$ = this.$containerId$, $scroll$$1$$ = "scroll." + $cid$$7$$, $resize$$1$$ = "resize." + $cid$$7$$, $orient$$1$$ = "orientationchange." + $cid$$7$$;
        this.$container$.parents().add(window).each(function() {
          $$$$18$$(this).off($scroll$$1$$).off($resize$$1$$).off($orient$$1$$)
        });
        this.$_clearDropdownAlignmentPreference$();
        $$$$18$$("#oj-listbox-drop-mask").hide();
        this.$dropdown$.removeAttr("id");
        this.$dropdown$.hide();
        this.$container$.removeClass("oj-listbox-dropdown-open");
        this.$results$.empty();
        this.search.attr("aria-expanded", !1)
      }
    }, $_clearSearch$:$JSCompiler_emptyFn$$(), $_ensureHighlightVisible$:function() {
      var $results$$8$$ = this.$results$, $children$$3_more_rb$$, $index$$155$$, $child$$5$$, $hb_y$$38$$;
      $index$$155$$ = this.$_highlight$();
      0 > $index$$155$$ || (0 == $index$$155$$ ? $results$$8$$.scrollTop(0) : ($children$$3_more_rb$$ = this.$_findHighlightableChoices$().find(".oj-listbox-result-label"), $child$$5$$ = $$$$18$$($children$$3_more_rb$$[$index$$155$$]), $hb_y$$38$$ = $child$$5$$.offset().top + $child$$5$$.outerHeight(!0), $index$$155$$ === $children$$3_more_rb$$.length - 1 && ($children$$3_more_rb$$ = $results$$8$$.find("li.oj-listbox-more-results"), 0 < $children$$3_more_rb$$.length && ($hb_y$$38$$ = $children$$3_more_rb$$.offset().top + 
      $children$$3_more_rb$$.outerHeight(!0))), $children$$3_more_rb$$ = $results$$8$$.offset().top + $results$$8$$.outerHeight(!0), $hb_y$$38$$ > $children$$3_more_rb$$ && $results$$8$$.scrollTop($results$$8$$.scrollTop() + ($hb_y$$38$$ - $children$$3_more_rb$$)), $hb_y$$38$$ = $child$$5$$.offset().top - $results$$8$$.offset().top, 0 > $hb_y$$38$$ && "none" != $child$$5$$.css("display") && $results$$8$$.scrollTop($results$$8$$.scrollTop() + $hb_y$$38$$)))
    }, $_findHighlightableChoices$:function() {
      return this.$results$.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-listbox-selected)")
    }, $_moveHighlight$:function($delta$$2$$) {
      for(var $choices$$ = this.$_findHighlightableChoices$(), $index$$156$$ = this.$_highlight$();-1 < $index$$156$$ && $index$$156$$ < $choices$$.length;) {
        var $index$$156$$ = $index$$156$$ + $delta$$2$$, $choice$$ = $$$$18$$($choices$$[$index$$156$$]);
        if($choice$$.hasClass("oj-listbox-result-selectable") && !$choice$$.hasClass("oj-disabled") && !$choice$$.hasClass("oj-listbox-selected")) {
          this.$_highlight$($index$$156$$);
          break
        }
      }
    }, $_highlight$:function($index$$157$$) {
      var $choice$$1_choices$$1$$ = this.$_findHighlightableChoices$();
      if(0 === arguments.length) {
        return $choice$$1_choices$$1$$.get().indexOf($choice$$1_choices$$1$$.filter(".oj-listbox-highlighted")[0])
      }
      $index$$157$$ >= $choice$$1_choices$$1$$.length && ($index$$157$$ = $choice$$1_choices$$1$$.length - 1);
      0 > $index$$157$$ && ($index$$157$$ = 0);
      this.$_removeHighlight$();
      $choice$$1_choices$$1$$ = $$$$18$$($choice$$1_choices$$1$$[$index$$157$$]);
      $choice$$1_choices$$1$$.addClass("oj-listbox-highlighted");
      this.search.attr("aria-activedescendant", $choice$$1_choices$$1$$.find(".oj-listbox-result-label").attr("id"));
      this.$_ensureHighlightVisible$()
    }, $_removeHighlight$:function() {
      this.$results$.find(".oj-listbox-highlighted").removeClass("oj-listbox-highlighted")
    }, $_highlightUnderEvent$:function($el$$3_event$$175$$) {
      $el$$3_event$$175$$ = $$$$18$$($el$$3_event$$175$$.target).closest(".oj-listbox-result-selectable");
      if(0 < $el$$3_event$$175$$.length && !$el$$3_event$$175$$.is(".oj-listbox-highlighted")) {
        var $choices$$2$$ = this.$_findHighlightableChoices$();
        this.$_highlight$($choices$$2$$.index($el$$3_event$$175$$))
      }else {
        0 == $el$$3_event$$175$$.length && this.$_removeHighlight$()
      }
    }, $_updateResults$:function($initial$$) {
      function $render$$($html$$2$$) {
        $results$$9$$.html($html$$2$$);
        $self$$69$$.$_positionDropdown$()
      }
      var $search$$2$$ = this.search, $results$$9$$ = this.$results$, $opts$$15$$ = this.$opts$, $self$$69$$ = this, $input$$1_term$$1$$;
      $input$$1_term$$1$$ = $search$$2$$.val();
      var $lastTerm$$ = $$$$18$$.data(this.$container$, this.$_classNm$ + "-last-term"), $queryNumber$$;
      !0 !== $initial$$ && $lastTerm$$ && $input$$1_term$$1$$ === $lastTerm$$ || ($$$$18$$.data(this.$container$, this.$_classNm$ + "-last-term", $input$$1_term$$1$$), $queryNumber$$ = ++this.$queryCount$, this.$_removeHighlight$(), $input$$1_term$$1$$ = this.search.val(), this.$resultsPage$ = 1, $opts$$15$$.$query$({element:$opts$$15$$.element, $term$:void 0 != $input$$1_term$$1$$ && null != $input$$1_term$$1$$ && !0 !== $initial$$ ? $input$$1_term$$1$$ : "", page:this.$resultsPage$, context:null, 
      $matcher$:$opts$$15$$.$matcher$, $callback$:this.$_bind$(function($data$$92$$) {
        var $def$$;
        $queryNumber$$ == this.$queryCount$ && this.$_opened$() && (this.context = void 0 === $data$$92$$.context ? null : $data$$92$$.context, 0 === $data$$92$$.$results$.length && (this.$opts$.$manageNewEntry$ && "" !== $search$$2$$.val()) && ($def$$ = this.$opts$.$manageNewEntry$.call($self$$69$$, $search$$2$$.val(), $data$$92$$.$results$), void 0 !== $def$$ && null !== $def$$ && void 0 !== $self$$69$$.id($def$$) && null !== $self$$69$$.id($def$$) && 0 === $$$$18$$($data$$92$$.$results$).filter(function() {
          return $self$$69$$.id(this) === $self$$69$$.id($def$$)
        }).length && $data$$92$$.$results$.unshift($def$$)), 0 === $data$$92$$.$results$.length && $_checkFormatter$$($opts$$15$$.$formatNoMatches$) ? $render$$("\x3cli class\x3d'oj-listbox-no-results'\x3e" + $opts$$15$$.$formatNoMatches$($self$$69$$.$ojContext$, $search$$2$$.val()) + "\x3c/li\x3e") : ($results$$9$$.empty(), $self$$69$$.$opts$.$populateResults$.call(this, $results$$9$$, $data$$92$$.$results$, {$term$:$search$$2$$.val(), page:this.$resultsPage$, context:null}), this.$_postprocessResults$($data$$92$$, 
        $initial$$), $self$$69$$.$_positionDropdown$()))
      })}))
    }, $_cancel$:function() {
      this.close()
    }, $_focusSearch$:function() {
      $_focus$$(this.search)
    }, $_selectHighlighted$:function($options$$281$$) {
      var $index$$158$$ = this.$_highlight$(), $data$$93$$ = this.$results$.find(".oj-listbox-highlighted").closest(".oj-listbox-result").data(this.$_elemNm$);
      $data$$93$$ ? (this.$_highlight$($index$$158$$), this.$_onSelect$($data$$93$$, $options$$281$$)) : $options$$281$$ && $options$$281$$.$noFocus$ && this.close()
    }, $_getPlaceholder$:function() {
      return this.$opts$.element.attr("placeholder") || this.$opts$.element.attr("data-placeholder") || this.$opts$.element.data("placeholder") || this.$opts$.placeholder
    }, $_getPlaceholderOption$:$JSCompiler_emptyFn$$(), $_initContainerWidth$:function() {
      var $attrs$$inline_727_style$$inline_726_width$$17$$;
      a: {
        var $attr$$inline_731_matches$$inline_728$$, $i$$inline_729$$, $l$$inline_730$$;
        $attrs$$inline_727_style$$inline_726_width$$17$$ = this.$opts$.element.attr("style");
        if(void 0 !== $attrs$$inline_727_style$$inline_726_width$$17$$) {
          for($attrs$$inline_727_style$$inline_726_width$$17$$ = $attrs$$inline_727_style$$inline_726_width$$17$$.split(";"), $i$$inline_729$$ = 0, $l$$inline_730$$ = $attrs$$inline_727_style$$inline_726_width$$17$$.length;$i$$inline_729$$ < $l$$inline_730$$;$i$$inline_729$$ += 1) {
            if($attr$$inline_731_matches$$inline_728$$ = $attrs$$inline_727_style$$inline_726_width$$17$$[$i$$inline_729$$].replace(/\s/g, ""), $attr$$inline_731_matches$$inline_728$$ = $attr$$inline_731_matches$$inline_728$$.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== $attr$$inline_731_matches$$inline_728$$ && 1 <= $attr$$inline_731_matches$$inline_728$$.length) {
              $attrs$$inline_727_style$$inline_726_width$$17$$ = $attr$$inline_731_matches$$inline_728$$[1];
              break a
            }
          }
        }
        $attrs$$inline_727_style$$inline_726_width$$17$$ = void 0
      }
      null !== $attrs$$inline_727_style$$inline_726_width$$17$$ && this.$container$.css("width", $attrs$$inline_727_style$$inline_726_width$$17$$)
    }, $getVal$:function() {
      return this.$ojContext$.option("value")
    }, $setVal$:function($val$$31$$) {
      "string" === typeof $val$$31$$ ? this.$ojContext$._SetValue([$val$$31$$]) : this.$ojContext$._SetValue($val$$31$$);
      this.$opts$.element.val($val$$31$$)
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
      $$$$18$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
      $_AbstractSingleChoice$$.$superclass$._destroy.apply(this, arguments)
    }, $_clear$:function() {
      this.selection.data(this.$_elemNm$) && (this.$setVal$([]), this.search.val(""), this.selection.removeData(this.$_elemNm$));
      this.$_setPlaceholder$()
    }, $_initSelection$:function() {
      var $element$$55$$, $self$$70$$ = this;
      if(this.$datalist$ || this.$getVal$()) {
        $element$$55$$ = this.$datalist$ ? this.$datalist$ : this.$opts$.element, this.$opts$.$initSelection$.call(null, $element$$55$$, function($selected$$14$$) {
          void 0 !== $selected$$14$$ && null !== $selected$$14$$ && ($self$$70$$.$setVal$($self$$70$$.id($selected$$14$$)), $self$$70$$.$_updateSelection$($selected$$14$$), $self$$70$$.close())
        })
      }
    }, $_containerKeydownHandler$:function($e$$63$$) {
      if(this.$_isInterfaceEnabled$()) {
        if($e$$63$$.which === $_KEY$$.PAGE_UP || $e$$63$$.which === $_KEY$$.PAGE_DOWN) {
          $_killEvent$$($e$$63$$)
        }else {
          switch($e$$63$$.which) {
            case $_KEY$$.UP:
            ;
            case $_KEY$$.DOWN:
              this.$_opened$() ? this.$_moveHighlight$($e$$63$$.which === $_KEY$$.UP ? -1 : 1) : this.open();
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
          this.$_userTyping$ = !0;
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
      $elementLabel$$ = $$$$18$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
      $elementLabel$$.attr("id") || $elementLabel$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$);
      $container$$4_selection$$5$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$);
      this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$);
      this.search.attr("aria-owns", "oj-listbox-results-" + $idSuffix$$);
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
    }, $_opening$:function($event$$176$$) {
      var $el$$4_range$$19$$, $len$$10$$;
      $_AbstractSingleChoice$$.$superclass$.$_opening$.apply(this, arguments);
      $el$$4_range$$19$$ = this.search.get(0);
      $el$$4_range$$19$$.createTextRange ? ($el$$4_range$$19$$ = $el$$4_range$$19$$.createTextRange(), $el$$4_range$$19$$.collapse(!1), $el$$4_range$$19$$.select()) : $el$$4_range$$19$$.setSelectionRange && ($len$$10$$ = this.search.val().length, $el$$4_range$$19$$.setSelectionRange($len$$10$$, $len$$10$$));
      this.$_updateResults$(!0);
      this.$opts$.element.trigger($$$$18$$.Event("ojexpand"))
    }, $_prepareOpts$:function() {
      var $opts$$16$$ = $_AbstractSingleChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$71$$ = this, $tagName$$3$$ = $opts$$16$$.element.get(0).tagName.toLowerCase();
      if("input" === $tagName$$3$$ && $opts$$16$$.element.prop("list") || "select" === $tagName$$3$$ && 0 < $opts$$16$$.element.children().length) {
        $opts$$16$$.$initSelection$ = function $$opts$$16$$$$initSelection$$($element$$56$$, $callback$$91$$) {
          var $selected$$15$$;
          $selected$$15$$ = $self$$71$$.$getVal$() && 0 < $self$$71$$.$getVal$().length ? $self$$71$$.$_optionToData$($element$$56$$.find("option").filter(function() {
            return this.value === $self$$71$$.$getVal$()[0]
          })) : $self$$71$$.$_optionToData$($element$$56$$.find("option").filter($JSCompiler_get$$("selected")));
          $callback$$91$$($selected$$15$$)
        }
      }else {
        if("data" in $opts$$16$$ || this.$getVal$() && 0 < this.$getVal$().length) {
          $opts$$16$$.$initSelection$ = $opts$$16$$.$initSelection$ || function($element$$57$$, $callback$$92$$) {
            var $id$$24$$ = "";
            $self$$71$$.$getVal$() && $self$$71$$.$getVal$().length && ($id$$24$$ = $self$$71$$.$getVal$()[0]);
            var $first$$4$$ = null, $match$$13$$ = null;
            $opts$$16$$.$query$({$matcher$:function($is_match_term$$2$$, $text$$8$$, $el$$5$$) {
              ($is_match_term$$2$$ = $id$$24$$ === $opts$$16$$.id($el$$5$$)) && ($match$$13$$ = $el$$5$$);
              $first$$4$$ || ($first$$4$$ = $el$$5$$);
              return $is_match_term$$2$$
            }, $callback$:$$$$18$$.isFunction($callback$$92$$) ? function() {
              $match$$13$$ || "select" !== $tagName$$3$$ || ($match$$13$$ = $first$$4$$);
              $callback$$92$$($match$$13$$)
            } : $$$$18$$.noop})
          }
        }
      }
      return $opts$$16$$
    }, $_setPlaceholder$:function() {
      var $placeholder$$ = this.$_getPlaceholder$();
      void 0 === $placeholder$$ && ($placeholder$$ = "");
      this.search.val($placeholder$$).addClass(this.$_classNm$ + "-default");
      this.$container$.removeClass(this.$_classNm$ + "-allowclear")
    }, $_postprocessResults$:function($data$$95_highlightableChoices$$, $initial$$1$$, $noHighlightUpdate$$) {
      var $selected$$16$$ = 0, $self$$72$$ = this;
      $data$$95_highlightableChoices$$ = this.$_findHighlightableChoices$();
      $_each2$$($data$$95_highlightableChoices$$, function($i$$212$$, $elm$$2$$) {
        if($self$$72$$.id($elm$$2$$.data($self$$72$$.$_elemNm$)) === $self$$72$$.$getVal$()[0]) {
          return $selected$$16$$ = $i$$212$$, !1
        }
      });
      !1 !== $noHighlightUpdate$$ && (!0 === $initial$$1$$ && 0 <= $selected$$16$$ ? this.$_highlight$($selected$$16$$) : this.$_highlight$(0))
    }, $_onSelect$:function($data$$96$$) {
      if(this.$_triggerSelect$($data$$96$$)) {
        var $old$$ = this.$getVal$()[0];
        this.$_data$();
        this.$setVal$(this.id($data$$96$$));
        this.$_updateSelection$($data$$96$$);
        this.close();
        $old$$ !== this.id($data$$96$$) && this.$_triggerChange$()
      }
    }, val:function() {
      var $val$$32$$, $data$$97$$ = null, $self$$73$$ = this;
      this.$_data$();
      if(0 === arguments.length) {
        return this.$getVal$()
      }
      $val$$32$$ = arguments[0];
      if(this.$datalist$) {
        var $selected$$17$$;
        $selected$$17$$ = this.$datalist$.val($val$$32$$).find("option").filter($JSCompiler_get$$("selected"));
        $_each2$$($selected$$17$$, function($i$$213$$, $elm$$3$$) {
          $data$$97$$ = $self$$73$$.$_optionToData$($elm$$3$$);
          return!1
        });
        this.$setVal$($val$$32$$);
        this.$_updateSelection$($data$$97$$);
        this.$_setPlaceholder$()
      }else {
        if($val$$32$$ || 0 === $val$$32$$) {
          if(void 0 === this.$opts$.$initSelection$) {
            throw Error("cannot call val() if initSelection() is not defined");
          }
          this.$setVal$($val$$32$$);
          this.$opts$.$initSelection$(this.$opts$.element, function($data$$98$$) {
            $self$$73$$.$setVal$($data$$98$$ ? $self$$73$$.id($data$$98$$) : []);
            $self$$73$$.$_updateSelection$($data$$98$$);
            $self$$73$$.$_setPlaceholder$()
          })
        }else {
          this.$_clear$()
        }
      }
    }, $_clearSearch$:function() {
      this.search.val("")
    }, $_data$:function($value$$169$$) {
      var $data$$99$$;
      if(0 === arguments.length) {
        return $data$$99$$ = this.selection.data(this.$_elemNm$), void 0 == $data$$99$$ && ($data$$99$$ = null), $data$$99$$
      }
      $value$$169$$ ? (this.$_data$(), this.$setVal$($value$$169$$ ? this.id($value$$169$$) : []), this.$_updateSelection$($value$$169$$)) : this.$_clear$()
    }});
    $_OjSingleCombobox$$ = $_clazz$$($_AbstractSingleChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
      return $$$$18$$(document.createElement("div")).attr({"class":"oj-combobox oj-widget"}).html("\x3cdiv class\x3d'oj-combobox-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cspan class\x3d'oj-combobox-search'\x3e\x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-combobox-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3c/span\x3e\x3cabbr class\x3d'oj-combobox-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e   \x3ca class\x3d'oj-combobox-arrow' role\x3d'presentation'\x3e\x3cb class\x3d'oj-combobox-icon oj-widget-icon oj-clickable-icon oj-combobox-open-icon' role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop oj-combobox-display-none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e")
    }, close:function() {
      this.$_opened$() && ($_OjSingleCombobox$$.$superclass$.close.apply(this, arguments), "" == this.search.val() ? this.$_clear$() : this.$_data$() || "" === this.search.val ? this.search.val(this.$_data$().text) : this.$_clearSearch$())
    }, $_updateSelection$:function($data$$100$$) {
      var $formatted$$2$$;
      this.selection.data(this.$_elemNm$, $data$$100$$);
      null !== $data$$100$$ && ($formatted$$2$$ = this.$opts$.$formatSelection$($data$$100$$, this.search, this.$opts$.$escapeMarkup$));
      void 0 !== $formatted$$2$$ && this.search.val($formatted$$2$$);
      this.search.removeClass(this.$_classNm$ + "-default");
      this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear")
    }});
    $_OjMultiCombobox$$ = $_clazz$$($_AbstractOjChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
      return $$$$18$$(document.createElement("div")).attr({"class":"oj-combobox oj-combobox-multi oj-widget"}).html("\x3cul class\x3d'oj-combobox-choices'\x3e  \x3cli class\x3d'oj-combobox-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-combobox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-combobox-description oj-combobox-offscreen'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi oj-combobox-display-none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e")
    }, $_prepareOpts$:function() {
      var $opts$$17$$ = $_OjMultiCombobox$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$74$$ = this;
      "input" === $opts$$17$$.element.get(0).tagName.toLowerCase() && $opts$$17$$.element.prop("list") ? $opts$$17$$.$initSelection$ = function $$opts$$17$$$$initSelection$$($element$$58$$, $callback$$93$$) {
        var $data$$101$$ = [];
        if($opts$$17$$.element.val()) {
          for(var $selected$$18$$, $ids$$ = $_splitVal$$($opts$$17$$.element.val(), $opts$$17$$.separator), $i$$214$$ = 0;$i$$214$$ < $ids$$.length;$i$$214$$++) {
            var $id$$25$$ = $ids$$[$i$$214$$];
            $selected$$18$$ = $element$$58$$.find("option").filter(function() {
              return this.value === $id$$25$$
            });
            $data$$101$$.push($self$$74$$.$_optionToData$($selected$$18$$))
          }
        }else {
          $selected$$18$$ = $element$$58$$.find("option").filter($JSCompiler_get$$("selected")), $_each2$$($selected$$18$$, function($i$$215$$, $elm$$4$$) {
            $data$$101$$.push($self$$74$$.$_optionToData$($elm$$4$$))
          })
        }
        $callback$$93$$($data$$101$$)
      } : "data" in $opts$$17$$ && ($opts$$17$$.$initSelection$ = $opts$$17$$.$initSelection$ || function($element$$59$$, $callback$$94$$) {
        var $ids$$1$$ = $_splitVal$$($element$$59$$.val(), $opts$$17$$.separator), $matches$$2$$ = [];
        $opts$$17$$.$query$({$matcher$:function($is_match$$1_term$$3$$, $text$$9$$, $el$$6$$) {
          ($is_match$$1_term$$3$$ = $$$$18$$.grep($ids$$1$$, function($id$$26$$) {
            return $id$$26$$ === $opts$$17$$.id($el$$6$$)
          }).length) && $matches$$2$$.push($el$$6$$);
          return $is_match$$1_term$$3$$
        }, $callback$:$$$$18$$.isFunction($callback$$94$$) ? function() {
          for(var $ordered$$ = [], $i$$216$$ = 0;$i$$216$$ < $ids$$1$$.length;$i$$216$$++) {
            for(var $id$$27$$ = $ids$$1$$[$i$$216$$], $j$$34$$ = 0;$j$$34$$ < $matches$$2$$.length;$j$$34$$++) {
              var $match$$14$$ = $matches$$2$$[$j$$34$$];
              if($id$$27$$ === $opts$$17$$.id($match$$14$$)) {
                $ordered$$.push($match$$14$$);
                $matches$$2$$.splice($j$$34$$, 1);
                break
              }
            }
          }
          $callback$$94$$($ordered$$)
        } : $$$$18$$.noop})
      });
      return $opts$$17$$
    }, $_selectChoice$:function($choice$$2$$) {
      var $selected$$19$$ = this.$container$.find("." + this.$_classNm$ + "-search-choice-focus");
      $selected$$19$$.length && $choice$$2$$ && $choice$$2$$[0] == $selected$$19$$[0] || ($selected$$19$$.length && this.$opts$.element.trigger("choice-deselected", $selected$$19$$), $selected$$19$$.removeClass(this.$_classNm$ + "-search-choice-focus"), $choice$$2$$ && $choice$$2$$.length && (this.close(), $choice$$2$$.addClass(this.$_classNm$ + "-search-choice-focus"), this.$container$.find(".oj-combobox-description").html($choice$$2$$.attr("valueText") + ". Press back space to delete.").attr("aria-live", 
      "assertive"), this.$opts$.element.trigger("choice-selected", $choice$$2$$)))
    }, _destroy:function() {
      $$$$18$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
      $_OjMultiCombobox$$.$superclass$._destroy.apply(this, arguments)
    }, $_initContainer$:function() {
      var $selector$$16$$ = "." + this.$_classNm$ + "-choices", $selection$$6$$, $idSuffix$$1$$ = $_nextUid$$(), $elementLabel$$1$$;
      this.$searchContainer$ = this.$container$.find("." + this.$_classNm$ + "-search-field");
      this.selection = $selection$$6$$ = this.$container$.find($selector$$16$$);
      var $_this$$1$$ = this;
      this.selection.on("click", "." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)", function() {
        $_this$$1$$.search[0].$_focus$();
        $_this$$1$$.$_selectChoice$($$$$18$$(this))
      });
      $elementLabel$$1$$ = $$$$18$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
      $elementLabel$$1$$.attr("id") || $elementLabel$$1$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$1$$);
      this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$1$$);
      this.search.attr("aria-owns", "oj-listbox-results-" + $idSuffix$$1$$);
      this.search.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
      this.search.on("input paste", this.$_bind$(function() {
        this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open()
      }));
      this.search.attr("tabindex", this.$elementTabIndex$);
      this.$keydowns$ = 0;
      this.search.on("keydown", this.$_bind$(function($e$$69$$) {
        var $JSCompiler_object_inline_offset_754_el$$inline_735$$, $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$;
        if(this.$_isInterfaceEnabled$()) {
          ++this.$keydowns$;
          var $selected$$20$$ = $selection$$6$$.find("." + this.$_classNm$ + "-search-choice-focus"), $prev$$1$$ = $selected$$20$$.prev("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)"), $next$$1$$ = $selected$$20$$.next("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)");
          $JSCompiler_object_inline_offset_754_el$$inline_735$$ = this.search;
          $JSCompiler_object_inline_offset_754_el$$inline_735$$ = $$$$18$$($JSCompiler_object_inline_offset_754_el$$inline_735$$)[0];
          var $offset$$inline_736_sel$$inline_738$$ = 0;
          $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ = 0;
          "selectionStart" in $JSCompiler_object_inline_offset_754_el$$inline_735$$ ? ($offset$$inline_736_sel$$inline_738$$ = $JSCompiler_object_inline_offset_754_el$$inline_735$$.selectionStart, $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ = $JSCompiler_object_inline_offset_754_el$$inline_735$$.selectionEnd - $offset$$inline_736_sel$$inline_738$$) : "selection" in document && ($JSCompiler_object_inline_offset_754_el$$inline_735$$.$_focus$(), $offset$$inline_736_sel$$inline_738$$ = 
          document.selection.createRange(), $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ = document.selection.createRange().text.length, $offset$$inline_736_sel$$inline_738$$.moveStart("character", -$JSCompiler_object_inline_offset_754_el$$inline_735$$.value.length), $offset$$inline_736_sel$$inline_738$$ = $offset$$inline_736_sel$$inline_738$$.text.length - $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$);
          $JSCompiler_object_inline_offset_754_el$$inline_735$$ = $offset$$inline_736_sel$$inline_738$$;
          if(!$selected$$20$$.length || $e$$69$$.which != $_KEY$$.LEFT && $e$$69$$.which != $_KEY$$.RIGHT && $e$$69$$.which != $_KEY$$.$BACKSPACE$ && $e$$69$$.which != $_KEY$$.$DELETE$ && $e$$69$$.which != $_KEY$$.ENTER) {
            if(($e$$69$$.which !== $_KEY$$.$BACKSPACE$ || 1 != this.$keydowns$) && $e$$69$$.which != $_KEY$$.LEFT || 0 != $JSCompiler_object_inline_offset_754_el$$inline_735$$ || $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$) {
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
            $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ = $selected$$20$$, $e$$69$$.which == $_KEY$$.LEFT && $prev$$1$$.length ? $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ = $prev$$1$$ : $e$$69$$.which == $_KEY$$.RIGHT ? $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ = $next$$1$$.length ? $next$$1$$ : null : $e$$69$$.which === $_KEY$$.$BACKSPACE$ ? (this.$_unselect$($selected$$20$$.first()), this.search.width(10), 
            $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ = $prev$$1$$.length ? $prev$$1$$ : $next$$1$$) : $e$$69$$.which == $_KEY$$.$DELETE$ ? (this.$_unselect$($selected$$20$$.first()), this.search.width(10), $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ = $next$$1$$.length ? $next$$1$$ : null) : $e$$69$$.which == $_KEY$$.ENTER && ($JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ = null), this.$_selectChoice$($JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$), 
            $_killEvent$$($e$$69$$), $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$ && $JSCompiler_object_inline_length_755_length$$inline_737_selectedChoice$$.length || this.open()
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
        !this.$_isInterfaceEnabled$() || 0 < $$$$18$$($e$$72$$.target).closest("." + this.$_classNm$ + "-search-choice").length || (this.$_selectChoice$(null), this.$_clearPlaceholder$(), this.open(), this.$_focusSearch$(), $e$$72$$.preventDefault())
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
        var $self$$75$$ = this;
        this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, function($data$$103$$) {
          void 0 !== $data$$103$$ && null !== $data$$103$$ && ($self$$75$$.$_updateSelection$($data$$103$$), $self$$75$$.close(), $self$$75$$.$_clearSearch$())
        })
      }
    }, $_clearSearch$:function() {
      var $placeholder$$1$$ = this.$_getPlaceholder$(), $maxWidth$$ = this.$_getMaxSearchWidth$();
      void 0 === $placeholder$$1$$ || this.$getVal$() && 0 !== this.$getVal$().length ? this.search.val("").width(10) : (this.search.val($placeholder$$1$$).addClass(this.$_classNm$ + "-default"), this.search.width(0 < $maxWidth$$ ? $maxWidth$$ : this.$container$.css("width")))
    }, $_clearPlaceholder$:function() {
      this.search.hasClass(this.$_classNm$ + "-default") && this.search.val("").removeClass(this.$_classNm$ + "-default")
    }, $_opening$:function($event$$177$$) {
      this.$_resizeSearch$();
      $_OjMultiCombobox$$.$superclass$.$_opening$.apply(this, arguments);
      this.$_focusSearch$();
      this.$_updateResults$(!0);
      this.search.focus();
      this.$opts$.element.trigger($$$$18$$.Event("ojexpand"))
    }, close:function() {
      this.$_opened$() && (this.$_clearSearch$(), $_OjMultiCombobox$$.$superclass$.close.apply(this, arguments))
    }, $_focus$:function() {
      this.close();
      this.search.focus()
    }, $_updateSelection$:function($data$$104$$) {
      var $ids$$2$$ = [], $filtered$$1$$ = [], $self$$76$$ = this;
      $$$$18$$($data$$104$$).each(function() {
        0 > $ids$$2$$.indexOf($self$$76$$.id(this)) && ($ids$$2$$.push($self$$76$$.id(this)), $filtered$$1$$.push(this))
      });
      $data$$104$$ = $filtered$$1$$;
      this.selection.find("." + this.$_classNm$ + "-search-choice").remove();
      $$$$18$$($data$$104$$).each(function() {
        $self$$76$$.$_addSelectedChoice$(this)
      });
      $self$$76$$.$_postprocessResults$()
    }, $_onSelect$:function($data$$105$$, $options$$283$$) {
      this.$_triggerSelect$($data$$105$$) && (this.$_addSelectedChoice$($data$$105$$), !this.select && this.$opts$.$closeOnSelect$ || this.$_postprocessResults$($data$$105$$, !1, !0 === this.$opts$.$closeOnSelect$), this.$opts$.$closeOnSelect$ ? (this.close(), this.search.width(10)) : 0 < this.$_findHighlightableChoices$().length ? (this.$_clearSearch$(), this.search.width(10), this.$_resizeSearch$(), this.$_positionDropdown$()) : (this.close(), this.search.width(10)), this.$_triggerChange$(), $options$$283$$ && 
      $options$$283$$.$noFocus$ || this.$_focusSearch$())
    }, $_cancel$:function() {
      this.close();
      this.$_focusSearch$()
    }, $_addSelectedChoice$:function($data$$106$$) {
      var $enableChoice$$ = !$data$$106$$.locked, $choice$$3_enabledItem$$ = $$$$18$$("\x3cli class\x3d'" + this.$_classNm$ + "-search-choice'\x3e    \x3cdiv\x3e\x3c/div\x3e    \x3ca href\x3d'#' onclick\x3d'return false;' class\x3d'" + this.$_classNm$ + "-search-choice-close' tabindex\x3d'-1'\x3e\x3c/a\x3e\x3c/li\x3e"), $disabledItem_id$$28$$ = $$$$18$$("\x3cli class\x3d'" + this.$_classNm$ + "-search-choice " + this.$_classNm$ + "-locked'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e"), $choice$$3_enabledItem$$ = 
      $enableChoice$$ ? $choice$$3_enabledItem$$ : $disabledItem_id$$28$$, $disabledItem_id$$28$$ = this.id($data$$106$$), $val$$33$$ = this.$getVal$(), $formatted$$3$$;
      $formatted$$3$$ = this.$opts$.$formatSelection$($data$$106$$, $choice$$3_enabledItem$$.find("div"), this.$opts$.$escapeMarkup$);
      void 0 != $formatted$$3$$ && ($choice$$3_enabledItem$$.find("div").replaceWith("\x3cdiv\x3e" + $formatted$$3$$ + "\x3c/div\x3e"), $choice$$3_enabledItem$$.attr("valueText", $formatted$$3$$));
      if($enableChoice$$) {
        $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-search-choice-close").on("mousedown", $_killEvent$$).on("click dblclick", this.$_bind$(function($e$$73$$) {
          this.$_isInterfaceEnabled$() && ($$$$18$$($e$$73$$.target).closest("." + this.$_classNm$ + "-search-choice").fadeOut("fast", this.$_bind$(function() {
            this.$_unselect$($$$$18$$($e$$73$$.target));
            this.selection.find("." + this.$_classNm$ + "-search-choice-focus").removeClass(this.$_classNm$ + "-search-choice-focus");
            this.close();
            this.$_focusSearch$()
          })).dequeue(), $_killEvent$$($e$$73$$))
        }))
      }
      $choice$$3_enabledItem$$.data(this.$_elemNm$, $data$$106$$);
      $choice$$3_enabledItem$$.insertBefore(this.$searchContainer$);
      $val$$33$$.push($disabledItem_id$$28$$);
      this.$setVal$($val$$33$$)
    }, $_unselect$:function($selected$$21$$) {
      var $val$$34$$ = this.$getVal$(), $data$$107$$, $index$$159$$;
      $selected$$21$$ = $selected$$21$$.closest("." + this.$_classNm$ + "-search-choice");
      if(0 === $selected$$21$$.length) {
        throw"Invalid argument: " + $selected$$21$$ + ". Must be ." + this.$_classNm$ + "-search-choice";
      }
      if($data$$107$$ = $selected$$21$$.data(this.$_elemNm$)) {
        for(;0 <= ($index$$159$$ = $val$$34$$.indexOf(this.id($data$$107$$)));) {
          $val$$34$$.splice($index$$159$$, 1), this.$setVal$($val$$34$$), this.select && this.$_postprocessResults$()
        }
        $selected$$21$$.remove();
        this.$_triggerChange$()
      }
    }, $_postprocessResults$:function($data$$108$$, $choices$$3_initial$$2$$, $noHighlightUpdate$$1$$) {
      var $val$$35$$ = this.$getVal$();
      $choices$$3_initial$$2$$ = this.$results$.find(".oj-listbox-result");
      var $compound$$1$$ = this.$results$.find(".oj-listbox-result-with-children"), $self$$77$$ = this;
      $_each2$$($choices$$3_initial$$2$$, function($i$$217$$, $choice$$4$$) {
        var $id$$29$$ = $self$$77$$.id($choice$$4$$.data($self$$77$$.$_elemNm$));
        0 <= $val$$35$$.indexOf($id$$29$$) && ($choice$$4$$.addClass("oj-listbox-selected"), $choice$$4$$.find(".oj-listbox-result-selectable").addClass("oj-listbox-selected"))
      });
      $_each2$$($compound$$1$$, function($i$$218$$, $choice$$5$$) {
        $choice$$5$$.is(".oj-listbox-result-selectable") || 0 !== $choice$$5$$.find(".oj-listbox-result-selectable:not(.oj-listbox-selected)").length || $choice$$5$$.addClass("oj-listbox-selected")
      });
      -1 == this.$_highlight$() && !1 !== $noHighlightUpdate$$1$$ && $self$$77$$.$_highlight$(0);
      !this.$opts$.$manageNewEntry$ && 0 < !$choices$$3_initial$$2$$.filter(".oj-listbox-result:not(.oj-listbox-selected)").length && (!$data$$108$$ || $data$$108$$ && !$data$$108$$.$more$ && 0 === this.$results$.find(".oj-listbox-no-results").length) && $_checkFormatter$$($self$$77$$.$opts$.$formatNoMatches$) && this.$results$.append("\x3cli class\x3d'oj-listbox-no-results'\x3e" + $self$$77$$.$opts$.$formatNoMatches$($self$$77$$.$ojContext$, $self$$77$$.search.val()) + "\x3c/li\x3e")
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
      var $val$$36$$;
      $val$$36$$ = this.$opts$.element.val();
      return $_splitVal$$($val$$36$$, this.$opts$.separator)
    }, $setVal$:function($val$$37$$) {
      var $unique$$;
      $unique$$ = [];
      "string" === typeof $val$$37$$ && ($val$$37$$ = $_splitVal$$($val$$37$$, this.$opts$.separator));
      $$$$18$$($val$$37$$).each(function() {
        0 > $unique$$.indexOf(this) && $unique$$.push(this)
      });
      this.$opts$.element.val(0 === $unique$$.length ? "" : $unique$$.join(this.$opts$.separator));
      this.search.attr("aria-activedescendant", this.$opts$.element.attr("id"))
    }, val:function($val$$38$$) {
      var $oldData$$4$$, $self$$78$$ = this;
      if(0 === arguments.length) {
        return this.$getVal$()
      }
      $oldData$$4$$ = this.$_data$();
      $oldData$$4$$.length || ($oldData$$4$$ = []);
      if($val$$38$$ || 0 === $val$$38$$) {
        this.$setVal$($val$$38$$);
        if(this.select) {
          this.$opts$.$initSelection$(this.select, this.$_bind$(this.$_updateSelection$)), this.$_triggerChange$()
        }else {
          if(void 0 === this.$opts$.$initSelection$) {
            throw Error("cannot call val() if initSelection() is not defined");
          }
          this.$opts$.$initSelection$(this.$opts$.element, function($data$$109$$) {
            var $ids$$3$$ = $$$$18$$.map($data$$109$$, $self$$78$$.id);
            $self$$78$$.$setVal$($ids$$3$$);
            $self$$78$$.$_updateSelection$($data$$109$$);
            $self$$78$$.$_clearSearch$();
            $self$$78$$.$_triggerChange$()
          })
        }
        this.$_clearSearch$()
      }else {
        this.$opts$.element.val(null), this.$_updateSelection$([]), this.$_clearSearch$(), this.$_triggerChange$()
      }
    }, $_data$:function($values$$11$$) {
      var $self$$79$$ = this, $ids$$4$$;
      if(0 === arguments.length) {
        return this.selection.find("." + this.$_classNm$ + "-search-choice").map(function() {
          return $$$$18$$(this).data($self$$79$$.$_elemNm$)
        }).get()
      }
      this.$_data$();
      $values$$11$$ || ($values$$11$$ = []);
      $ids$$4$$ = $$$$18$$.map($values$$11$$, function($e$$74$$) {
        return $self$$79$$.$opts$.id($e$$74$$)
      });
      this.$setVal$($ids$$4$$);
      this.$_updateSelection$($values$$11$$);
      this.$_clearSearch$()
    }});
    $_OjSingleSelect$$ = $_clazz$$($_AbstractSingleChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_userTyping$:!1, $_createContainer$:function() {
      return $$$$18$$(document.createElement("div")).attr({"class":"oj-select oj-widget"}).html("\x3cdiv class\x3d'oj-select-choice' tabindex\x3d'0' role\x3d'presentation'\x3e  \x3cspan class\x3d'oj-select-box'\x3e    \x3cspan class\x3d'oj-select-chosen'\x3e\x3c/span\x3e    \x3cabbr class\x3d'oj-select-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e    \x3ca class\x3d'oj-widget-icon oj-clickable-icon oj-select-open-icon' role\x3d'presentation'\x3e    \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e  \x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop oj-select-display-none' role\x3d'presentation'\x3e  \x3cdiv class\x3d'oj-select-search-wrapper'\x3e  \x3cdiv class\x3d'oj-select-search'\x3e    \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'           spellcheck\x3d'false' class\x3d'oj-select-input' title\x3d'Search field'            role\x3d'select' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e    \x3cspan class\x3d'oj-select-spyglass-box'\x3e      \x3cspan class\x3d'oj-widget-icon oj-select-search-icon' role\x3d'presentation'\x3e       \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/span\x3e    \x3c/span\x3e  \x3c/div\x3e  \x3c/div\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e")
    }, $_opening$:function() {
      $_OjSingleSelect$$.$superclass$.$_opening$.apply(this, arguments);
      this.$_showSearchBox$()
    }, close:function() {
      this.$_opened$() && ($_OjSingleSelect$$.$superclass$.close.apply(this, arguments), "" == this.text.text() ? this.$_clear$() : this.$_clearSearch$())
    }, $_initContainer$:function() {
      this.text = this.$container$.find(".oj-select-chosen");
      $_OjSingleSelect$$.$superclass$.$_initContainer$.apply(this, arguments);
      this.selection.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
      this.selection.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$))
    }, $_initSelection$:function() {
      this.$_isPlaceholderOptionSelected$() ? (this.$_updateSelection$(null), this.close(), this.$_setPlaceholder$()) : $_OjSingleSelect$$.$superclass$.$_initSelection$.apply(this, arguments)
    }, $_updateSelection$:function($data$$110$$) {
      var $formatted$$4$$;
      this.selection.data(this.$_elemNm$, $data$$110$$);
      null !== $data$$110$$ && ($formatted$$4$$ = this.$opts$.$formatSelection$($data$$110$$, this.search, this.$opts$.$escapeMarkup$));
      void 0 !== $formatted$$4$$ && this.text.text($formatted$$4$$);
      this.$setVal$($data$$110$$ ? this.$opts$.id($data$$110$$) : $data$$110$$);
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
      return $_OjSingleSelect$$.$superclass$.$getVal$.call(this)
    }, $setVal$:function($val$$39$$) {
      this.$opts$.element.val($val$$39$$);
      this.selection.data("selectVal", $val$$39$$)
    }, $_showSearchBox$:function() {
      var $focusOnSearchBox$$ = !1, $searchBox$$ = this.$dropdown$.find(".oj-select-search");
      $searchBox$$ && (this.$_hasSearchBox$() ? (this.$dropdown$.find(".oj-select-search-wrapper").removeClass("oj-helper-hidden-accessible"), $$$$18$$($searchBox$$).removeAttr("aria-hidden").attr({tabIndex:"0"}), $focusOnSearchBox$$ = !0) : (this.$dropdown$.find(".oj-select-search-wrapper").addClass("oj-helper-hidden-accessible"), $$$$18$$($searchBox$$).removeAttr("tabIndex").attr({"aria-hidden":"true"})));
      $_focus$$($focusOnSearchBox$$ ? this.search : this.selection)
    }, $_hasSearchBox$:function() {
      return(this.$datalist$ ? this.$datalist$[0].length : this.$opts$.data.length) > this.$opts$.minimumResultsForSearch || this.$_userTyping$
    }});
    var $_ojChoice_defaults$$ = {$closeOnSelect$:!0, $openOnEnter$:!0, $formatResult$:function($result$$17$$, $container$$8_markup$$1$$, $query$$6$$, $escapeMarkup$$) {
      $container$$8_markup$$1$$ = [];
      $container$$8_markup$$1$$.push($escapeMarkup$$($result$$17$$.text));
      return $container$$8_markup$$1$$.join("")
    }, $formatSelection$:function($data$$111$$, $container$$9$$, $escapeMarkup$$1$$) {
      return $data$$111$$ && $data$$111$$.text ? $escapeMarkup$$1$$($data$$111$$.text) : void 0
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
      return{id:$$$$18$$.trim($term$$5$$), text:$$$$18$$.trim($term$$5$$)}
    }}
  })();
  (function() {
    $oj$$19$$.$__registerWidget$("oj.ojMenu", $$$$18$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", options:{menuPosition:{my:"left top", at:"left bottom"}, menuSelector:"ul", submenuPosition:{my:"left top", at:"right top"}, beforeShow:null, blur:null, focus:null, select:null}, _create:function() {
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-widget").toggleClass("oj-menu-icons", !!this.element.find(".oj-widget-icon").length).attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$178$$) {
        this.options.disabled && $event$$178$$.preventDefault()
      }, click:function($event$$179$$) {
        this.options.disabled && $event$$179$$.preventDefault()
      }, keydown:function($event$$180$$) {
        this.options.disabled && $event$$180$$.keyCode === $$$$18$$.ui.keyCode.ESCAPE && this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$180$$)
      }, blur:function($event$$181$$) {
        this.options.disabled && this.$_launcher$ && this.$__dismiss$($event$$181$$)
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$182$$) {
        $event$$182$$.preventDefault()
      }, "click .oj-disabled \x3e a":function($event$$183$$) {
        $event$$183$$.preventDefault()
      }, "click .oj-menu-item:has(a)":function($event$$184$$) {
        var $target$$84$$ = $$$$18$$($event$$184$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$84$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, this.select($event$$184$$), $target$$84$$.has(".oj-menu").length ? this.expand($event$$184$$) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".oj-menu").length && clearTimeout(this.$timer$)))
      }, "mouseenter .oj-menu-item":function($event$$185$$) {
        var $target$$85$$ = $$$$18$$($event$$185$$.currentTarget);
        $target$$85$$.siblings().children(".oj-active").removeClass("oj-active");
        this.focus($event$$185$$, $target$$85$$)
      }, mouseleave:this.collapseAll, "mouseleave .oj-menu":this.collapseAll, focus:function($event$$186$$, $keepActiveItem$$) {
        var $item$$6$$ = this.active || this.element.children(".oj-menu-item").eq(0);
        $keepActiveItem$$ || this.focus($event$$186$$, $item$$6$$)
      }, blur:function($event$$187$$) {
        this._delay(function() {
          $$$$18$$.contains(this.element[0], this.document[0].activeElement) || this.collapseAll($event$$187$$)
        });
        this.$_launcher$ && this.$__dismiss$($event$$187$$)
      }, keydown:this.$_keydown$, keyup:function($event$$188$$) {
        if($event$$188$$.keyCode == $$$$18$$.ui.keyCode.ENTER || $event$$188$$.keyCode == $$$$18$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1
        }
      }});
      this.$_setup$();
      var $self$$80$$ = this;
      $self$$80$$.$_clickAwayHandler$ = function $$self$$80$$$$_clickAwayHandler$$($event$$189$$) {
        ("click" === $event$$189$$.type || "contextmenu" === $event$$189$$.type || 121 == $event$$189$$.which && $event$$189$$.shiftKey) && !$$$$18$$($event$$189$$.target).closest($self$$80$$.element).length && ($self$$80$$.collapseAll($event$$189$$), $self$$80$$.$_launcher$ && $self$$80$$.$__dismiss$($event$$189$$));
        "click" === $event$$189$$.type && ($self$$80$$.$mouseHandled$ = !1)
      };
      this.document[0].addEventListener("contextmenu", $self$$80$$.$_clickAwayHandler$, !0);
      this.document[0].addEventListener("keydown", $self$$80$$.$_clickAwayHandler$, !0);
      this.document[0].addEventListener("click", $self$$80$$.$_clickAwayHandler$, !0);
      this._super()
    }, _destroy:function() {
      this.element.removeAttr("aria-activedescendant").find(".oj-menu").addBack().removeClass("oj-menu oj-widget oj-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$22$$ = $$$$18$$(this);
        $elem$$22$$.data("oj-ojMenu-submenu-icon") && $elem$$22$$.remove()
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      this.$_clickAwayHandler$ && (this.document[0].removeEventListener("contextmenu", this.$_clickAwayHandler$, !0), this.document[0].removeEventListener("keydown", this.$_clickAwayHandler$, !0), this.document[0].removeEventListener("click", this.$_clickAwayHandler$, !0))
    }, $_keydown$:function($event$$190$$) {
      function $escape$$1$$($value$$170$$) {
        return $value$$170$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26")
      }
      var $match$$15_prev$$2$$, $activeItemId_character$$, $skip_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$190$$.keyCode) {
        case $$$$18$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$190$$);
          break;
        case $$$$18$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$190$$);
          break;
        case $$$$18$$.ui.keyCode.UP:
          this.previous($event$$190$$);
          break;
        case $$$$18$$.ui.keyCode.DOWN:
          this.next($event$$190$$);
          break;
        case $$$$18$$.ui.keyCode.LEFT:
        ;
        case $$$$18$$.ui.keyCode.RIGHT:
          $event$$190$$.keyCode === $$$$18$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.active && !this.active.is(".oj-disabled") && this.expand($event$$190$$) : this.collapse($event$$190$$);
          break;
        case $$$$18$$.ui.keyCode.ENTER:
        ;
        case $$$$18$$.ui.keyCode.SPACE:
          this.$_activate$($event$$190$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$81$$ = this;
          setTimeout(function() {
            $self$$81$$.$__spaceEnterDownInMenu$ = !1
          }, 100);
          break;
        case $$$$18$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$ = this.element.attr("aria-activedescendant"), $skip_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$ && !$$$$18$$("#" + $activeItemId_character$$).is($skip_topLevelAnchorSelector$$) ? this.collapse($event$$190$$) : this.$_focusLauncherAndDismiss$($event$$190$$)) : this.collapse($event$$190$$);
          break;
        default:
          $preventDefault$$ = !1, $match$$15_prev$$2$$ = this.$previousFilter$ || "", $activeItemId_character$$ = String.fromCharCode($event$$190$$.keyCode), $skip_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$ === $match$$15_prev$$2$$ ? $skip_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$ = $match$$15_prev$$2$$ + $activeItemId_character$$, $regex$$1$$ = RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$15_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$18$$(this).children("a").text())
          }), $match$$15_prev$$2$$ = $skip_topLevelAnchorSelector$$ && -1 !== $match$$15_prev$$2$$.index(this.active.next()) ? this.active.nextAll(".oj-menu-item") : $match$$15_prev$$2$$, $match$$15_prev$$2$$.length || ($activeItemId_character$$ = String.fromCharCode($event$$190$$.keyCode), $regex$$1$$ = RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$15_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$18$$(this).children("a").text())
          })), $match$$15_prev$$2$$.length ? (this.focus($event$$190$$, $match$$15_prev$$2$$), 1 < $match$$15_prev$$2$$.length ? (this.$previousFilter$ = $activeItemId_character$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$
      }
      $preventDefault$$ && $event$$190$$.preventDefault()
    }, $_activate$:function($event$$191$$) {
      this.active.is(".oj-disabled") || (this.active.children("a[aria-haspopup\x3d'true']").length ? this.expand($event$$191$$) : this.select($event$$191$$))
    }, refresh:function() {
      this._super();
      this.$_setup$()
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this._GetReadingDirection();
      var $self$$82$$ = this, $children$$4_submenus$$ = this.element.find(this.options.menuSelector);
      $children$$4_submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-widget").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$10$$ = $$$$18$$(this), $item$$7_itemId$$ = $self$$82$$.$_getSubmenuItem$($menu$$10$$), $submenuIcon$$ = $$$$18$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-widget-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$7_itemId$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").prepend($submenuIcon$$);
        $item$$7_itemId$$ = $item$$7_itemId$$.attr("id");
        $menu$$10$$.attr("aria-labelledby", $item$$7_itemId$$)
      });
      $children$$4_submenus$$ = $children$$4_submenus$$.add(this.element).children();
      $children$$4_submenus$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$4_submenus$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$4_submenus$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$8$$ = $$$$18$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$8$$.text()) || $item$$8$$.addClass("oj-menu-divider").attr("role", "separator")
      });
      $children$$4_submenus$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$4_submenus$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      this.active && !$$$$18$$.contains(this.element[0], this.active[0]) && this.blur()
    }, $_getSubmenuItem$:function($submenu$$) {
      return $submenu$$.prev("a")
    }, $_itemRole$:$JSCompiler_returnArg$$("menuitem"), focus:function($event$$192$$, $item$$9$$) {
      var $focused$$4_nested$$;
      this.blur($event$$192$$, $event$$192$$ && "focus" === $event$$192$$.type);
      this.active = $item$$9$$.first();
      $focused$$4_nested$$ = this.active.children("a").addClass("oj-focus");
      this.role && this.element.attr("aria-activedescendant", $focused$$4_nested$$.attr("id"));
      this.active.parent().closest(".oj-menu-item").children("a:first").addClass("oj-active");
      $event$$192$$ && "keydown" === $event$$192$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        this.$_close$()
      }, this.delay);
      $focused$$4_nested$$ = $item$$9$$.children(".oj-menu");
      $focused$$4_nested$$.length && (/^mouse/.test($event$$192$$.type) && !this.active.hasClass("oj-disabled")) && this.$_startOpening$($focused$$4_nested$$);
      this.$activeMenu$ = $item$$9$$.parent();
      this._trigger("focus", $event$$192$$, {item:$item$$9$$})
    }, blur:function($event$$193$$, $JSCompiler_OptimizeArgumentsArray_p4$$) {
      $JSCompiler_OptimizeArgumentsArray_p4$$ || clearTimeout(this.$timer$);
      this.active && (this.active.children("a").removeClass("oj-focus"), this.active = null, this._trigger("blur", $event$$193$$, {item:this.active}))
    }, $_focusLauncherAndDismiss$:function($event$$194$$) {
      var $menuFocused$$ = this.element.is(":focus");
      this.$_launcher$.focus();
      $menuFocused$$ || this.$__dismiss$($event$$194$$)
    }, $__dismiss$:function($event$$195$$) {
      this.element.hide().attr("aria-hidden", "true");
      this.$_launcher$ = void 0;
      this._trigger("__dismiss", $event$$195$$, {})
    }, show:function($event$$196$$, $params$$15$$) {
      this.$_popupInited$ || (this.$_popupInit$(), this.$_popupInited$ = !0);
      if($params$$15$$ && $params$$15$$.launcher) {
        var $launcher$$ = $params$$15$$.launcher;
        if(this._trigger("beforeShow", $event$$196$$, {launcher:$launcher$$})) {
          var $launcher$$ = "string" === $$$$18$$.type($launcher$$) ? $$$$18$$("#" + $launcher$$) : $launcher$$, $focusFirstItem_position$$8$$ = $$$$18$$.extend({}, this.options.menuPosition);
          null == $focusFirstItem_position$$8$$.of && ($focusFirstItem_position$$8$$.of = $event$$196$$ && "contextmenu" === $event$$196$$.type ? $event$$196$$ : $launcher$$);
          this.element.show().removeAttr("aria-hidden").position($focusFirstItem_position$$8$$);
          (($focusFirstItem_position$$8$$ = "firstItem" === $params$$15$$.focus) || "menu" === $params$$15$$.focus) && this.element.focus();
          $focusFirstItem_position$$8$$ ? this.focus($event$$196$$, this.element.children().first()) : this.blur($event$$196$$);
          this.$_launcher$ = $launcher$$
        }
      }
    }, $_popupInit$:function() {
      this.element.css({position:"absolute", zIndex:999})
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ = this._delay(function() {
        this.$_close$();
        this.$_open$($submenu$$1$$)
      }, this.delay))
    }, $_open$:function($submenu$$2$$) {
      var $position$$9$$ = $$$$18$$.extend({of:this.active}, this.options.submenuPosition);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$9$$);
      this.$_getSubmenuItem$($submenu$$2$$).attr("aria-expanded", "true")
    }, collapseAll:function($event$$197$$, $all$$1$$) {
      clearTimeout(this.$timer$);
      this.$timer$ = this._delay(function() {
        var $currentMenu$$ = $all$$1$$ ? this.element : $$$$18$$($event$$197$$ && $event$$197$$.target).closest(this.element.find(".oj-menu"));
        $currentMenu$$.length || ($currentMenu$$ = this.element);
        this.$_close$($currentMenu$$);
        this.blur($event$$197$$);
        this.$activeMenu$ = $currentMenu$$
      }, this.delay)
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.active ? this.active.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true");
      this.$_getSubmenuItem$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("a.oj-active").removeClass("oj-active")
    }, collapse:function($event$$198$$) {
      var $newItem$$ = this.active && this.active.parent().closest(".oj-menu-item", this.element);
      $newItem$$ && $newItem$$.length && (this.$_close$(), this.focus($event$$198$$, $newItem$$))
    }, expand:function($event$$199$$) {
      var $newItem$$1$$ = this.active && this.active.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this._delay(function() {
        this.focus($event$$199$$, $newItem$$1$$)
      }))
    }, next:function($event$$200$$) {
      this.$_move$("next", "first", $event$$200$$)
    }, previous:function($event$$201$$) {
      this.$_move$("prev", "last", $event$$201$$)
    }, $_isFirstItem$:function() {
      return this.active && !this.active.prevAll(".oj-menu-item").length
    }, $_isLastItem$:function() {
      return this.active && !this.active.nextAll(".oj-menu-item").length
    }, $_move$:function($direction$$8$$, $filter$$3$$, $event$$202$$) {
      var $next$$2$$;
      this.active && ($next$$2$$ = "first" === $direction$$8$$ || "last" === $direction$$8$$ ? this.active["first" === $direction$$8$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.active[$direction$$8$$ + "All"](".oj-menu-item").eq(0));
      $next$$2$$ && $next$$2$$.length && this.active || ($next$$2$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$3$$]());
      this.focus($event$$202$$, $next$$2$$)
    }, select:function($event$$203$$) {
      if(!this.active && $event$$203$$ && $event$$203$$.target) {
        var $menuItem_ui$$9$$ = $$$$18$$($event$$203$$.target).closest(".oj-menu-item");
        $menuItem_ui$$9$$.closest(this.element).length && (this.active = $menuItem_ui$$9$$)
      }
      this.active && ($menuItem_ui$$9$$ = {item:this.active}, this.active.has(".oj-menu").length || this.collapseAll($event$$203$$, !0), this.$_launcher$ && ($menuItem_ui$$9$$.item.children(this.options.menuSelector).length || this.$_focusLauncherAndDismiss$($event$$203$$)), this._trigger("select", $event$$203$$, $menuItem_ui$$9$$))
    }})
  })();
  (function() {
    $oj$$19$$.$__registerWidget$("oj.ojTrain", $$$$18$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selection:"next", currentStep:"", optionChange:null}, $_stepNum$:0, $_stepArray$:null, _create:function() {
      var $options$$284$$ = this.options;
      this._super();
      this.$_stepNum$ = $options$$284$$.steps.length;
      this.$_marginType$ = (this.$_isRtl$ = "rtl" === this._GetReadingDirection()) ? "margin-right" : "margin-left";
      this.$_alignType$ = this.$_isRtl$ ? "right" : "left";
      var $bar_i$$219$$ = $$$$18$$("\x3cdiv class\x3d'oj-train-bar'\x3e\x3c/div\x3e");
      this.$_maxStepWidth$ = this.element.width() < 107 * (this.$_stepNum$ - 1) + 72 ? (this.element.width() - 72) / (this.$_stepNum$ - 1) : 107;
      this.$_centerMargin$ = (this.element.width() - this.$_maxStepWidth$ * (this.$_stepNum$ - 1) - 72) / 2;
      this.$_stepList$ = $$$$18$$("\x3cul\x3e").attr({"aria-label":"Train Component"}).css({margin:"0", padding:"0"});
      1 < this.$_stepNum$ && $bar_i$$219$$.css({"margin-top":"7px", width:(this.$_stepNum$ - 1) * this.$_maxStepWidth$ + "px"}).css(this.$_marginType$, 36 + this.$_centerMargin$ + "px").css(this.$_alignType$, 0);
      $bar_i$$219$$.appendTo(this.element);
      this.$_progressbar$ = $$$$18$$("\x3cdiv class\x3d'oj-train-bar-overlay'\x3e\x3c/div\x3e");
      this.$_progressbar$.appendTo(this.element);
      this.$_setupArray$();
      this.$_currentStepIndex$ = this.$_getCurrentStepIndex$($options$$284$$.currentStep);
      for($bar_i$$219$$ = 0;$bar_i$$219$$ < this.$_stepNum$;$bar_i$$219$$++) {
        var $stepTag$$ = $$$$18$$("\x3cli\x3e").attr({id:this.$_stepArray$[$bar_i$$219$$][1]}).css({"list-style-type":"none", position:"absolute"}).css(this.$_marginType$, this.$_centerMargin$ + this.$_maxStepWidth$ * $bar_i$$219$$ + "px").css(this.$_alignType$, 0);
        this.$_stepList$.append($stepTag$$);
        $bar_i$$219$$ == this.$_currentStepIndex$ + 1 && "next" == $options$$284$$.selection && (this.$_stepArray$[$bar_i$$219$$][2] = "on");
        this.$_drawLabel$($bar_i$$219$$);
        this.$_drawStepFill$($bar_i$$219$$);
        this.$_drawButton$($bar_i$$219$$);
        this.$_drawMessageType$($bar_i$$219$$)
      }
      this.$_updateProgressWidth$();
      this.element.addClass("oj-train oj-widget oj-widget-content oj-corner-all")
    }, $_updateProgressWidth$:function() {
      this.$_progressbar$.css({"margin-top":"7px", width:(this.$_currentStepIndex$ === this.$_stepNum$ - 1 ? (this.$_stepNum$ - 1) * this.$_maxStepWidth$ : this.$_maxStepWidth$ * this.$_currentStepIndex$ + 53.5 * (this.$_maxStepWidth$ / 107)) + "px"}).css(this.$_marginType$, this.$_centerMargin$ + 36 + "px").css(this.$_alignType$, 0);
      this.$_stepList$.appendTo(this.element)
    }, $_setupArray$:function() {
      var $options$$285$$ = this.options;
      this.$_stepArray$ = [];
      for(var $i$$220$$ = 0;$i$$220$$ < this.$_stepNum$;$i$$220$$++) {
        var $step$$ = $options$$285$$.steps[$i$$220$$];
        this.$_stepArray$[$i$$220$$] = Array(5);
        this.$_stepArray$[$i$$220$$][2] = $options$$285$$.selection && "next" != $options$$285$$.selection ? $options$$285$$.selection : "off";
        this.$_stepArray$[$i$$220$$][3] = "unvisited";
        for(var $key$$84$$ in $step$$) {
          "name" === $key$$84$$ ? this.$_stepArray$[$i$$220$$][0] = $step$$[$key$$84$$] : "id" === $key$$84$$ ? this.$_stepArray$[$i$$220$$][1] = $step$$[$key$$84$$] : "selection" === $key$$84$$ ? this.$_stepArray$[$i$$220$$][2] = $step$$[$key$$84$$] : "state" === $key$$84$$ ? this.$_stepArray$[$i$$220$$][3] = $step$$[$key$$84$$] : "messageType" === $key$$84$$ && (this.$_stepArray$[$i$$220$$][4] = $step$$[$key$$84$$])
        }
      }
    }, $_drawButton$:function($index$$160$$) {
      var $button$$1$$ = $$$$18$$("\x3cdiv/\x3e"), $scrnRead$$ = $$$$18$$("\x3cspan/\x3e"), $self$$83$$ = this, $desc$$ = "";
      if(this.$_stepArray$[$index$$160$$]) {
        var $state$$3_stepLi$$ = this.$_stepArray$[$index$$160$$][3];
        this.$_currentStepIndex$ === $index$$160$$ ? ($button$$1$$.addClass("oj-train-button-current"), $desc$$ = ". This is the current step.") : "visited" === $state$$3_stepLi$$ ? ($button$$1$$.addClass("oj-train-button-visited"), $desc$$ = ". This step has been visited.") : "unvisited" === $state$$3_stepLi$$ ? ($button$$1$$.addClass("oj-train-button-unvisited"), $desc$$ = ". This step has not been visited yet.") : $button$$1$$.addClass("oj-train-button-disabled");
        "disabled" === this.$_stepArray$[$index$$160$$][3] || null != this.options.disabled && this.options.disabled || "on" !== this.$_stepArray$[$index$$160$$][2] || (this._hoverable($button$$1$$), $button$$1$$.bind("click" + this.eventNamespace, function() {
          var $oldStep$$ = $self$$83$$.options.currentStep;
          $self$$83$$.options.currentStep = this.parentNode.id;
          $self$$83$$.$_fireOptionChange$("currentStep", $oldStep$$, this.parentNode.id, !0)
        }));
        $button$$1$$.css({"margin-top":"4px", width:"12px", height:"12px"}).css(this.$_marginType$, "29px").css(this.$_alignType$, 0);
        $state$$3_stepLi$$ = this.$_stepList$.children().eq($index$$160$$).children();
        3 <= $state$$3_stepLi$$.length ? ($state$$3_stepLi$$[2].remove(), $button$$1$$.insertAfter($state$$3_stepLi$$[1])) : this.$_stepList$.children().eq($index$$160$$).append($button$$1$$);
        $scrnRead$$.text($desc$$);
        $scrnRead$$.css("display", "none");
        this.$_stepList$.children().eq($index$$160$$).find("a").append($scrnRead$$)
      }
    }, $_drawMessageType$:function($index$$161$$) {
      var $icon$$ = $$$$18$$("\x3cdiv/\x3e"), $scrnRead$$1$$ = $$$$18$$("\x3cspan/\x3e"), $desc$$1$$ = "", $self$$84$$ = this;
      if(this.$_stepArray$[$index$$161$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$161$$][4];
        "complete" === $messageType$$ ? ($icon$$.addClass("oj-train-icon-complete"), $desc$$1$$ = " Complete") : "info" === $messageType$$ ? ($icon$$.addClass("oj-train-icon-info"), $desc$$1$$ = " Info") : "error" === $messageType$$ ? ($icon$$.addClass("oj-train-icon-error"), $desc$$1$$ = " Error") : "warning" === $messageType$$ && ($icon$$.addClass("oj-train-icon-warning"), $desc$$1$$ = " Warning");
        var $stepLi$$1$$ = this.$_stepList$.children().eq($index$$161$$).children();
        4 <= $stepLi$$1$$.length && $stepLi$$1$$[3].remove();
        "disabled" === this.$_stepArray$[$index$$161$$][3] || null != this.options.disabled && this.options.disabled || "on" !== this.$_stepArray$[$index$$161$$][2] || (this._hoverable($icon$$), $icon$$.bind("click" + this.eventNamespace, function() {
          var $oldStep$$1$$ = $self$$84$$.options.currentStep;
          $self$$84$$.options.currentStep = this.parentNode.id;
          $self$$84$$.$_fireOptionChange$("currentStep", $oldStep$$1$$, this.parentNode.id, !0)
        }));
        null != $messageType$$ && "none" != $messageType$$ && ($icon$$.css({"margin-top":"9px", height:"9px", width:"9px"}).css(this.$_marginType$, "34px").css(this.$_alignType$, 0), $scrnRead$$1$$.text($desc$$1$$), $scrnRead$$1$$.css("display", "none"), this.$_stepList$.children().eq($index$$161$$).find("a").append($scrnRead$$1$$), this.$_stepList$.children().eq($index$$161$$).append($icon$$))
      }
    }, $_fireOptionChange$:function($key$$85$$, $previousValue$$5$$, $value$$171$$, $originalEvent$$3$$) {
      this._trigger("optionChange", $originalEvent$$3$$, {option:$key$$85$$, previousValue:$previousValue$$5$$, value:$value$$171$$, optionMetadata:{writeback:$originalEvent$$3$$ ? "shouldWrite" : "shouldNotWrite"}})
    }, $_drawStepFill$:function($index$$162_stepLi$$2$$) {
      var $stepFill$$ = $$$$18$$("\x3cdiv/\x3e");
      this.$_stepArray$[$index$$162_stepLi$$2$$] && ($index$$162_stepLi$$2$$ <= this.$_currentStepIndex$ ? $stepFill$$.addClass("oj-train-stepBackground-overlay") : $stepFill$$.addClass("oj-train-stepBackground"), $stepFill$$.css(this.$_marginType$, "25px").css(this.$_alignType$, 0), $index$$162_stepLi$$2$$ = this.$_stepList$.children().eq($index$$162_stepLi$$2$$).children(), 1 < $index$$162_stepLi$$2$$.length && $index$$162_stepLi$$2$$[1].remove(), $stepFill$$.insertAfter($index$$162_stepLi$$2$$[0]))
    }, $_drawLabel$:function($index$$163$$) {
      var $self$$85$$ = this;
      if(this.$_stepArray$[$index$$163$$]) {
        var $label$$5$$ = $$$$18$$("\x3ca\x3e" + this.$_stepArray$[$index$$163$$][0] + "\x3c/a\x3e");
        $label$$5$$.addClass("oj-train-label");
        $label$$5$$.css("margin-bottom", "7px");
        $label$$5$$.css(this.$_alignType$, 0);
        $index$$163$$ === this.$_currentStepIndex$ ? $label$$5$$.addClass("oj-selected") : "visited" === this.$_stepArray$[$index$$163$$][3] ? $label$$5$$.addClass("oj-visited") : "disabled" === this.$_stepArray$[$index$$163$$][3] && $label$$5$$.addClass("oj-disabled");
        "on" !== this.$_stepArray$[$index$$163$$][2] || null != this.options.disabled && this.options.disabled || ($label$$5$$.attr("href", "#"), this._hoverable($label$$5$$), $label$$5$$.bind("click keydown" + this.eventNamespace, function($e$$76_oldStep$$2$$) {
          if(13 == $e$$76_oldStep$$2$$.keyCode || "click" == $e$$76_oldStep$$2$$.type) {
            $e$$76_oldStep$$2$$ = $self$$85$$.options.currentStep, $self$$85$$.options.currentStep = this.parentNode.id, $self$$85$$.$_fireOptionChange$("currentStep", $e$$76_oldStep$$2$$, this.parentNode.id, !0)
          }
        }));
        var $stepLi$$3$$ = this.$_stepList$.children().eq($index$$163$$).children();
        1 <= $stepLi$$3$$.length && $stepLi$$3$$[0].remove();
        this.$_stepList$.children().eq($index$$163$$).prepend($label$$5$$)
      }
    }, $_getCurrentStepIndex$:function($id$$30$$) {
      for(var $i$$221$$ = 0;$i$$221$$ < this.$_stepNum$;$i$$221$$++) {
        if(this.$_stepArray$[$i$$221$$] && this.$_stepArray$[$i$$221$$][1] === $id$$30$$) {
          return $i$$221$$
        }
      }
      return 0
    }, getStepName:function($id$$31$$) {
      for(var $i$$222$$ = 0;$i$$222$$ < this.$_stepNum$;$i$$222$$++) {
        if(this.$_stepArray$[$i$$222$$] && this.$_stepArray$[$i$$222$$][1] === $id$$31$$) {
          return this.$_stepArray$[$i$$222$$][0]
        }
      }
      return null
    }, getStepId:function($name$$95$$) {
      for(var $i$$223$$ = 0;$i$$223$$ < this.$_stepNum$;$i$$223$$++) {
        if(this.$_stepArray$[$i$$223$$] && this.$_stepArray$[$i$$223$$][0] === $name$$95$$) {
          return this.$_stepArray$[$i$$223$$][1]
        }
      }
      return null
    }, select:function($id$$32$$) {
      for(var $i$$224$$ = 0;$i$$224$$ < this.$_stepNum$;$i$$224$$++) {
        if(this.$_stepArray$[$i$$224$$] && this.$_stepArray$[$i$$224$$][1] === $id$$32$$) {
          "next" === this.options.selection && $i$$224$$ + 1 < this.$_stepNum$ && (this.$_stepArray$[$i$$224$$ + 1][2] = "on", this.$_drawLabel$($i$$224$$ + 1), this.$_drawButton$($i$$224$$ + 1));
          this.$_stepArray$[$i$$224$$][3] = "current";
          this.$_currentStepIndex$ = $i$$224$$;
          this.options.currentStep = $id$$32$$;
          this.$_drawLabel$($i$$224$$);
          this.$_drawButton$($i$$224$$);
          this.$_updateProgressWidth$();
          break
        }
      }
      for($i$$224$$ = 0;$i$$224$$ < this.$_stepNum$;$i$$224$$++) {
        this.$_drawStepFill$($i$$224$$)
      }
    }, deselect:function($id$$33$$, $selection$$7$$, $state$$4$$, $messageType$$1$$) {
      for(var $i$$225$$ = 0;$i$$225$$ < this.$_stepNum$;$i$$225$$++) {
        if(this.$_stepArray$[$i$$225$$] && this.$_stepArray$[$i$$225$$][1] === $id$$33$$) {
          $selection$$7$$ ? this.$_stepArray$[$i$$225$$][2] = $selection$$7$$ : this.$_stepArray$[$i$$225$$][2] = "off";
          $state$$4$$ ? this.$_stepArray$[$i$$225$$][3] = $state$$4$$ : this.$_stepArray$[$i$$225$$][3] = "visited";
          $messageType$$1$$ ? this.$_stepArray$[$i$$225$$][4] = $messageType$$1$$ : this.$_stepArray$[$i$$225$$][4] = "none";
          this.$_currentStepIndex$ = -1;
          "next" === this.options.selection && $i$$225$$ + 1 < this.$_stepNum$ && (this.$_stepArray$[$i$$225$$ + 1][2] = "off", this.$_drawLabel$($i$$225$$ + 1), this.$_drawButton$($i$$225$$ + 1));
          this.$_drawLabel$($i$$225$$);
          this.$_drawButton$($i$$225$$);
          this.$_drawMessageType$($i$$225$$);
          break
        }
      }
    }, nextSelectableStep:function() {
      for(var $i$$226$$ = this.$_currentStepIndex$;$i$$226$$ < this.$_stepNum$;$i$$226$$++) {
        if($i$$226$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$226$$ + 1] && "on" === this.$_stepArray$[$i$$226$$ + 1][2]) {
          return this.$_stepArray$[$i$$226$$ + 1][1]
        }
      }
      return this.$_stepArray$[this.$_currentStepIndex$][1]
    }, previousSelectableStep:function() {
      for(var $i$$227$$ = this.$_currentStepIndex$;0 <= $i$$227$$;$i$$227$$--) {
        if(this.$_stepArray$[$i$$227$$ - 1] && "on" === this.$_stepArray$[$i$$227$$ - 1][2]) {
          return this.$_stepArray$[$i$$227$$ - 1][1]
        }
      }
      return this.$_stepArray$[this.$_currentStepIndex$][1]
    }})
  })();
  $oj$$19$$.$__registerWidget$("oj.ojRadioset", $$$$18$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{}, refresh:function() {
    this._super();
    this.$$radios$ = this.$_findRadiosWithMatchingName$().filter(".oj-radio")._ojRadioCheckbox("refresh").end().not(".oj-radio")._ojRadioCheckbox().end();
    this.$_setup$()
  }, widget:$JSCompiler_get$$("$uiRadioset$"), _CreateComponent:function() {
    this._super();
    this.$$radios$ = this.$_findRadiosWithMatchingName$()._ojRadioCheckbox();
    this.$uiRadioset$ = this.element.addClass("oj-radioset oj-widget").attr("role", "radiogroup");
    this._on(this.$_events$);
    this.$_setup$();
    this.$_SetRootAttributes$()
  }, $_findRadiosWithMatchingName$:function() {
    var $first$$5_name$$96$$ = this.element.find("input[type\x3dradio]:first");
    0 === $first$$5_name$$96$$.length && $oj$$19$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
    $first$$5_name$$96$$ = $first$$5_name$$96$$.attr("name");
    return void 0 === $first$$5_name$$96$$ ? this.element.find("input[type\x3dradio]").not("[name]") : this.element.find("input[type\x3dradio][name\x3d" + $first$$5_name$$96$$ + "]")
  }, $_showContextMenu$:function($menu$$11$$, $event$$204$$) {
    var $launcher$$1_radios$$ = this.element.find("input[type\x3dradio]"), $checked$$3$$ = $launcher$$1_radios$$.filter(":checked"), $launcher$$1_radios$$ = $checked$$3$$.length ? $checked$$3$$ : $launcher$$1_radios$$.first();
    $menu$$11$$.show($event$$204$$, {launcher:$launcher$$1_radios$$, focus:"menu"})
  }, $_setup$:function() {
    this.options.disabled && this.disable()
  }, $_events$:{change:function($event$$205$$) {
    this._HandleChangeEvent($event$$205$$)
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
  }, _RefreshAriaRequired:function($ariaValue$$2_value$$173$$) {
    var $rootNode$$ = this.$uiRadioset$;
    ($ariaValue$$2_value$$173$$ = "required" == $ariaValue$$2_value$$173$$ ? !0 : !1) && $rootNode$$ ? $rootNode$$.attr("aria-required", $ariaValue$$2_value$$173$$) : $rootNode$$.removeAttr("aria-required")
  }, _setOption:function($key$$86$$, $value$$174$$) {
    this._super($key$$86$$, $value$$174$$);
    "disabled" === $key$$86$$ && this.$$radios$._ojRadioCheckbox("option", $key$$86$$, $value$$174$$)
  }, getNodeBySubId:function($locator$$12$$) {
    return null == $locator$$12$$ ? this.element ? this.element[0] : null : "oj-radioset-inputs" === $locator$$12$$.subId ? this.$$radios$ : null
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-radioset oj-enabled oj-widget").removeAttr("role");
    this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy")
  }});
  $oj$$19$$.$__registerWidget$("oj.ojInputText", $$$$18$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], _CLASS_NAMES:"oj-inputtext-input", _WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-widget", _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-inputtext")});
  $oj$$19$$.$__registerWidget$("oj._ojLabel", $$$$18$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3clabel\x3e", widgetEventPrefix:"oj", options:{describedById:null, help:{definition:null, source:null}, required:null, rootAttributes:void 0}, $_BUNDLE_KEY$:{$_TOOLTIP_HELP$:"tooltipHelp", $_TOOLTIP_REQUIRED$:"tooltipRequired"}, widget:$JSCompiler_get$$("$uiLabel$"), refresh:function() {
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
      for(var $arrayOfClasses_classes$$ = $arrayOfClasses_classes$$.split(/\s+/), $numClasses$$ = $arrayOfClasses_classes$$.length, $i$$228$$ = 0;$i$$228$$ < $numClasses$$;$i$$228$$++) {
        var $className$$11$$ = $arrayOfClasses_classes$$[$i$$228$$];
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
    if($helpDef$$3$$) {
      this.element.addClass("oj-label-help-def");
      var $title$$8$$ = this.element.attr("title");
      $title$$8$$ ? this.element.attr("title", $title$$8$$ + " " + $helpDef$$3$$) : this.element.attr("title", $helpDef$$3$$)
    }
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
  }, _setOption:function($key$$87$$, $value$$175$$) {
    this._super($key$$87$$, $value$$175$$);
    "required" === $key$$87$$ && this.$_refreshRequired$();
    "help" === $key$$87$$ && this.$_refreshHelp$()
  }, getNodeBySubId:function($locator$$13_subId$$8$$) {
    if(null == $locator$$13_subId$$8$$) {
      return this.element ? this.element[0] : null
    }
    $locator$$13_subId$$8$$ = $locator$$13_subId$$8$$.subId;
    return"oj-label-help-icon" === $locator$$13_subId$$8$$ ? this.widget().find(".oj-label-help-icon")[0] : "oj-label-help-icon-anchor" === $locator$$13_subId$$8$$ ? this.widget().find(".oj-label-help-icon").parent()[0] : "oj-label-required-icon" === $locator$$13_subId$$8$$ ? this.widget().find(".oj-label-required-icon")[0] : null
  }, _destroy:function() {
    this._super();
    for(var $i$$229$$ = 0;$i$$229$$ < this.$movedClassArray$.length;$i$$229$$++) {
      this.element.addClass(this.$movedClassArray$[$i$$229$$])
    }
    this.$_removeHelpDefToLabel$();
    this.$uiLabel$.replaceWith(this.element)
  }});
  (function() {
    var $uid$$ = 0;
    $oj$$19$$.$__registerWidget$("oj.ojCollapsible", $$$$18$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{collapsed:!0, disabled:null, event:"click", clickable:"disclosureIcon", expand:null, beforeExpand:null, collapse:null, beforeCollapse:null}, _create:function() {
      this._super();
      this.$activatable$ = $$$$18$$();
      this.element.addClass("oj-collapsible oj-widget oj-helper-reset");
      this.$_processPanels$();
      this.$_refresh$()
    }, $_showContextMenu$:function($menu$$12$$, $event$$207$$) {
      $menu$$12$$.show($event$$207$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), focus:"menu"})
    }, $_createIcons$:function() {
      var $icon$$1$$ = this.options.collapsed ? "oj-collapsible-close-icon" : "oj-collapsible-open-icon";
      (this.$_isDisabled$() ? $$$$18$$("\x3cspan\x3e") : $$$$18$$("\x3ca href\x3d'#'\x3e")).addClass("oj-widget-icon oj-clickable-icon oj-collapsible-header-icon " + $icon$$1$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
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
    }, _setOption:function($key$$88$$, $value$$176$$) {
      "collapsed" === $key$$88$$ ? this.$_setCollapsed$($value$$176$$) : ("event" === $key$$88$$ || "clickable" === $key$$88$$ ? (this.$_tearDownEvents$(), this._super($key$$88$$, $value$$176$$), this.$_setupEvents$()) : this._super($key$$88$$, $value$$176$$), "disabled" === $key$$88$$ && (this.header.add(this.header.next()), this.element.toggleClass("oj-disabled", !!$value$$176$$)))
    }, $_keydown$:function($event$$208$$) {
      if(!$event$$208$$.altKey && !$event$$208$$.ctrlKey) {
        var $keyCode$$4$$ = $$$$18$$.ui.keyCode;
        switch($event$$208$$.keyCode) {
          case $keyCode$$4$$.SPACE:
          ;
          case $keyCode$$4$$.ENTER:
            this.$_toggleHandler$($event$$208$$)
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
      var $focusable$$1_header$$7$$ = this.header, $content$$23$$ = this.content, $options$$287$$ = this.options, $collapsibleId$$ = this.$collapsibleId$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$), $headerId$$ = $focusable$$1_header$$7$$.attr("id"), $contentId$$ = $content$$23$$.attr("id");
      $headerId$$ || $focusable$$1_header$$7$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$23$$.attr("id", $contentId$$));
      this.$_createIcons$();
      $focusable$$1_header$$7$$ = this.$_findFirstFocusableInHeader$();
      $focusable$$1_header$$7$$.attr("role", "button").attr("aria-controls", $contentId$$);
      this.$_isDisabled$() && $focusable$$1_header$$7$$.attr("aria-disabled", !0);
      this.$_isDisabled$() || this.$_setContentTabIndex$($options$$287$$.collapsed ? "-1" : "0");
      this.element.toggleClass("oj-collapsible-collapsed", $options$$287$$.collapsed);
      $options$$287$$.collapsed ? (this.$wrapper$.css("max-height", 0), $content$$23$$.attr({"aria-hidden":"true"}), $focusable$$1_header$$7$$.attr("aria-expanded", "false")) : ($content$$23$$.attr({"aria-hidden":"false"}), $focusable$$1_header$$7$$.attr("aria-expanded", "true"));
      this.$_tearDownEvents$();
      this.$_setupEvents$()
    }, $_setCollapsed$:function($collapsed$$) {
      $collapsed$$ !== this.options.collapsed && ($collapsed$$ ? this.collapse(!0) : this.expand(!0))
    }, $_setupEvents$:function() {
      var $events$$1$$ = {keydown:this.$_keydown$}, $clickable_event$$209$$ = this.options.event;
      if($clickable_event$$209$$) {
        var $self$$86$$ = this;
        $$$$18$$.each($clickable_event$$209$$.split(" "), function($index$$164$$, $eventName$$1$$) {
          $events$$1$$[$eventName$$1$$] = $self$$86$$.$_toggleHandler$
        })
      }
      $clickable_event$$209$$ = this.element.find(this.$_getClickableSelector$());
      this._on($clickable_event$$209$$, $events$$1$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this.$_isDisabled$() || (this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$}), this._hoverable($clickable_event$$209$$), this._focusable($clickable_event$$209$$), this.$_activatable$($clickable_event$$209$$))
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getClickableSelector$()));
      this._off(this.element.add(this.content))
    }, $_toggleHandler$:function($event$$210$$) {
      this.$_isDisabled$() || (this.options.collapsed ? this.$_Expand$(!0, $event$$210$$) : this.$_Collapse$(!0, $event$$210$$), $event$$210$$.preventDefault(), $event$$210$$.stopPropagation(), this.header.find(".oj-collapsible-header-icon").focus())
    }, $_expandCollapseHandler$:function($event$$211$$) {
      if(!this.$_isDisabled$() && !$event$$211$$.isDefaultPrevented()) {
        var $element$$62$$ = this.element, $options$$288$$ = this.options, $content$$24$$ = this.content, $wrapper$$ = this.$wrapper$, $isCollapse$$ = "ojcollapse" === $event$$211$$.type;
        $event$$211$$.preventDefault();
        $options$$288$$.collapsed = $isCollapse$$;
        $wrapper$$.$contentHeight$ = $wrapper$$.outerHeight();
        $isCollapse$$ ? ($wrapper$$.removeClass("oj-collapsible-transition"), $wrapper$$.css("max-height", $wrapper$$.$contentHeight$), setTimeout(function() {
          $wrapper$$.addClass("oj-collapsible-transition").css("max-height", 0);
          $element$$62$$.addClass("oj-collapsible-collapsed")
        }, 10)) : ($wrapper$$.$contentHeight$ += $content$$24$$.outerHeight(), $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$.$contentHeight$}), $element$$62$$.removeClass("oj-collapsible-collapsed"));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", !$isCollapse$$).toggleClass("oj-collapsible-close-icon", $isCollapse$$ || !1).end();
        this.content.attr("aria-hidden", $isCollapse$$);
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", !$isCollapse$$);
        this.$_setContentTabIndex$($isCollapse$$ ? "-1" : "0")
      }
    }, $_focusHandler$:function($event$$212$$) {
      if(this.$_isDisabled$()) {
        return null
      }
      "ojfocusout" == $event$$212$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$212$$.preventDefault(), $event$$212$$.stopPropagation()) : "ojfocus" == $event$$212$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$212$$.preventDefault(), $event$$212$$.stopPropagation())
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first()
    }, $_setContentTabIndex$:function($value$$177$$) {
      return this.$_findFocusables$(this.content).attr("tabIndex", $value$$177$$)
    }, $_findFocusables$:function($start$$31$$) {
      return this.$_isDisabled$() ? $start$$31$$.find("span") : $start$$31$$.find("a,:input")
    }, $_Expand$:function($vetoable$$, $event$$213$$) {
      this.$_isDisabled$() || $vetoable$$ && !1 === this._trigger("beforeexpand", $event$$213$$) || this._trigger("expand", $event$$213$$)
    }, $_Collapse$:function($vetoable$$1$$, $event$$214$$) {
      this.$_isDisabled$() || $vetoable$$1$$ && !1 === this._trigger("beforecollapse", $event$$214$$) || this._trigger("collapse", $event$$214$$)
    }, $_transitionEndHandler$:function($event$$215$$) {
      this.$_isDisabled$() || (this.options.collapsed ? this._trigger("aftercollapse", $event$$215$$) : (this.$wrapper$.css("max-height", 9999), this._trigger("afterexpand", $event$$215$$)))
    }, $_activatable$:function($element$$63$$) {
      this.$activatable$ = this.$activatable$.add($element$$63$$);
      this._on($element$$63$$, {mousedown:function($event$$216$$) {
        $$$$18$$($event$$216$$.currentTarget).addClass("oj-active")
      }, mouseup:function($event$$217$$) {
        $$$$18$$($event$$217$$.currentTarget).removeClass("oj-active")
      }})
    }})
  })();
  (function() {
    function $_radioGroup$$1$$($radio$$1$$, $$elems$$1$$) {
      var $name$$97_selector$$18$$ = $radio$$1$$.name, $$radios$$1_form$$2$$ = $radio$$1$$.form;
      $name$$97_selector$$18$$ ? ($name$$97_selector$$18$$ = $name$$97_selector$$18$$.replace(/'/g, "\\'"), $name$$97_selector$$18$$ = ":radio[name\x3d'" + $name$$97_selector$$18$$ + "']:oj-button", $$radios$$1_form$$2$$ = $$elems$$1$$ ? $$elems$$1$$.filter($name$$97_selector$$18$$) : $$radios$$1_form$$2$$ ? $$$$18$$($$radios$$1_form$$2$$).find($name$$97_selector$$18$$) : $$$$18$$($name$$97_selector$$18$$, $radio$$1$$.ownerDocument).filter(function() {
        return!this.form
      })) : $$radios$$1_form$$2$$ = ($$elems$$1$$ ? $$elems$$1$$.filter($radio$$1$$) : $$$$18$$($radio$$1$$)).filter(":oj-button");
      return $$radios$$1_form$$2$$
    }
    $oj$$19$$.$__registerWidget$("oj.ojToolbar", $$$$18$$.oj.baseComponent, {version:"1.0.0", $items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a, :data(oj-ojButton)", widgetEventPrefix:"oj", options:{}, _create:function() {
      this.element.addClass("oj-toolbar oj-widget").attr("role", "toolbar");
      this.$_setup$(!0);
      this._super()
    }, $_showContextMenu$:function($menu$$13$$, $event$$218$$) {
      $menu$$13$$.show($event$$218$$, {launcher:this.element.find(":oj-button[tabindex\x3d0]"), focus:"menu"})
    }, _setOption:function($key$$89$$, $value$$178$$) {
      "disabled" === $key$$89$$ && this.$$buttons$.ojButton("option", $key$$89$$, $value$$178$$);
      this._super($key$$89$$, $value$$178$$)
    }, refresh:function() {
      this._super();
      this.$_setup$(!1)
    }, $_setup$:function($isCreate$$2$$) {
      var $self$$87$$ = this;
      this.$isRtl$ = "rtl" === this._GetReadingDirection();
      this.$$buttons$ = this.element.find(this.$items$).unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$219$$) {
        $self$$87$$.$_handleKeyDown$($event$$219$$, $$$$18$$(this))
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$18$$(this).ojButton("option", "disabled") || $self$$87$$.$_setTabStop$($$$$18$$(this))
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$87$$.$_setTabStop$($$$$18$$(this))
      });
      this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$18$$(this).ojButton("option", "disabled")
      });
      this.$_initTabindexes$($isCreate$$2$$)
    }, $_initTabindexes$:function($$newTabStop$$1_isCreate$$3$$) {
      var $$last$$1$$ = $$$$18$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop$$1_isCreate$$3$$ = $$newTabStop$$1_isCreate$$3$$ || !$$last$$1$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$1$$;
      this.$_setTabStop$($$newTabStop$$1_isCreate$$3$$)
    }, $_mapToTabbable$:function($$button$$3$$) {
      var $$enabledButtons$$2$$ = this.$$enabledButtons$;
      return $$button$$3$$.map(function($index$$166$$, $elem$$23$$) {
        if("radio" != $elem$$23$$.type || $elem$$23$$.checked || "" == $elem$$23$$.name) {
          return $elem$$23$$
        }
        var $$checkedRadio$$1$$ = $_radioGroup$$1$$($elem$$23$$, $$enabledButtons$$2$$).filter(":checked");
        return $$checkedRadio$$1$$.length ? $$checkedRadio$$1$$[0] : $elem$$23$$
      })
    }, $_setTabStop$:function($$button$$4$$) {
      $$button$$4$$ = this.$_mapToTabbable$($$button$$4$$);
      var $button$$2$$ = $$button$$4$$[0], $last$$2$$ = this.$_lastTabStop$;
      $button$$2$$ !== $last$$2$$ && ($$$$18$$($last$$2$$).attr("tabindex", "-1"), $$button$$4$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$2$$)
    }, $_handleKeyDown$:function($event$$222$$, $$button$$5$$) {
      switch($event$$222$$.which) {
        case $$$$18$$.ui.keyCode.LEFT:
        ;
        case $$$$18$$.ui.keyCode.RIGHT:
          $event$$222$$.preventDefault();
          var $$enabledButtons$$3$$ = this.$$enabledButtons$, $length$$18$$ = $$enabledButtons$$3$$.length;
          if(2 > $length$$18$$) {
            break
          }
          var $oldIndex$$2$$ = $$enabledButtons$$3$$.index($$button$$5$$);
          $$enabledButtons$$3$$.eq(($oldIndex$$2$$ + ($event$$222$$.which == $$$$18$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$18$$) % $length$$18$$).focus();
          break;
        case $$$$18$$.ui.keyCode.UP:
        ;
        case $$$$18$$.ui.keyCode.DOWN:
          "radio" == $$button$$5$$.attr("type") && $event$$222$$.preventDefault()
      }
    }, _destroy:function() {
      this.element.removeClass("oj-toolbar oj-widget").removeAttr("role");
      this.$$buttons$.attr("tabindex", "0").map(function() {
        return $$$$18$$(this).ojButton("widget")[0]
      })
    }})
  })();
  (function() {
    $oj$$19$$.$__registerWidget$("oj.ojPopup", $$$$18$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{autoDismiss:"none", chrome:"default", initialFocus:"firstFocusable", position:{my:"left top", at:"left bottom", of:"", collision:"flip"}, tail:"none"}, _create:function() {
      var $rootElement$$ = $$$$18$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      var $content$$25$$ = $$$$18$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$25$$.appendTo($rootElement$$);
      this.element.after($rootElement$$);
      this.element.appendTo($content$$25$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_usingCallback$ = $$$$18$$.proxy(this.$_usingHandler$, this);
      this.$_dismissalCallback$ = $$$$18$$.proxy(this.$_dismissalHandler$, this);
      this._super()
    }, _destroy:function() {
      this._super();
      this.isOpen() && this.close();
      this.$_destroyTail$();
      delete this.$_usingCallback$;
      delete this.$_dismissalCallback$;
      this.$_rootElement$.replaceWith(this.element);
      this.element.hide()
    }, widget:$JSCompiler_get$$("$_rootElement$"), open:function($launcher$$2$$, $position$$10$$) {
      if(this.isOpen() && (this.close(), this.isOpen())) {
        return
      }
      if(!1 !== this._trigger("beforeOpen")) {
        var $options$$289$$ = this.options;
        this.$_setLauncher$($launcher$$2$$);
        this.$_setPosition$($position$$10$$);
        var $rootElement$$1$$ = this.$_rootElement$;
        $oj$$19$$.$Assert$.$assertPrototype$($rootElement$$1$$, jQuery);
        $launcher$$2$$ = this.$_launcher$;
        $oj$$19$$.$Assert$.$assertPrototype$($launcher$$2$$, jQuery);
        "focusLoss" === $options$$289$$.autoDismiss && this.$_registerAutoDismiss$(!0);
        this._on(!0, $$$$18$$(window), {resize:this.$_resizeHandler$});
        this._on(!0, $rootElement$$1$$, {keydown:this.$_keydownHandler$});
        this._on(!0, $launcher$$2$$, {keydown:this.$_keydownHandler$});
        var $launcherId$$ = $launcher$$2$$.attr("id");
        $oj$$19$$.$StringUtils$.$isEmptyOrUndefined$($launcherId$$) && ($launcher$$2$$.data("id-generated", !0), $launcherId$$ = $launcher$$2$$.uniqueId().attr("id"));
        $launcher$$2$$.attr("aria-haspopup", "true");
        $rootElement$$1$$.removeAttr("aria-hidden");
        $rootElement$$1$$.attr("aria-describedby", $launcherId$$);
        $rootElement$$1$$.attr("role", "tooltip");
        $position$$10$$ = $options$$289$$.position;
        $rootElement$$1$$.show().position($position$$10$$);
        this._trigger("open");
        this.$_intialFoucs$()
      }
    }, close:function() {
      if(this.isOpen() && !1 !== this._trigger("beforeClose")) {
        this.$_restoreFocus$();
        var $position$$11_rootElement$$2$$ = this.$_rootElement$;
        $oj$$19$$.$Assert$.$assertPrototype$($position$$11_rootElement$$2$$, jQuery);
        $position$$11_rootElement$$2$$.hide();
        $position$$11_rootElement$$2$$.attr("aria-hidden", "true");
        var $launcher$$3$$ = this.$_launcher$;
        $oj$$19$$.$Assert$.$assertPrototype$($launcher$$3$$, jQuery);
        $launcher$$3$$.data("id-generated") && $launcher$$3$$.removeUniqueId();
        $launcher$$3$$.removeAttr("aria-haspopup");
        $position$$11_rootElement$$2$$.removeAttr("aria-describedby");
        var $options$$290$$ = this.options;
        "focusLoss" === $options$$290$$.autoDismiss && this.$_registerAutoDismiss$(!1);
        this._off($$$$18$$(window), "resize");
        this._off($position$$11_rootElement$$2$$, "keydown");
        this._off($launcher$$3$$, "keydown");
        delete this.$_launcher$;
        $position$$11_rootElement$$2$$ = $options$$290$$.position;
        $position$$11_rootElement$$2$$._ofo && (delete $position$$11_rootElement$$2$$._ofo, delete $position$$11_rootElement$$2$$.of);
        this._trigger("close")
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible")
    }, _setOption:function($key$$90$$, $value$$179$$) {
      var $options$$291$$ = this.options;
      switch($key$$90$$) {
        case "tail":
          $value$$179$$ !== $options$$291$$.tail && (this.$_destroyTail$(), this.$_createTail$($value$$179$$));
          break;
        case "chrome":
          $value$$179$$ !== $options$$291$$.chrome && this.$_setChrome$($value$$179$$);
          break;
        case "position":
          this.$_setPosition$($value$$179$$);
          this.isOpen() && this.$_resizeHandler$();
          break;
        case "autoDismiss":
          this.isOpen() && $value$$179$$ !== $options$$291$$.autoDismiss && ("none" === $value$$179$$ ? this.$_registerAutoDismiss$(!1) : "focusLoss" === $value$$179$$ && this.$_registerAutoDismiss$(!0))
      }
      this._super($key$$90$$, $value$$179$$)
    }, $_GetRootStyle$:$JSCompiler_returnArg$$("oj-popup"), $_createTail$:function($tail$$) {
      var $tailDecoration_tailStyle$$ = $tail$$ ? $tail$$ : this.options.tail;
      if("none" === $tailDecoration_tailStyle$$) {
        return null
      }
      var $tailDecoration_tailStyle$$ = ["oj-popup-tail", $tailDecoration_tailStyle$$].join("-"), $tailDom_tailStyleStartTop$$ = [$tailDecoration_tailStyle$$, "start-top"].join("-"), $rootElement$$3_tailStyleEndTop$$ = [$tailDecoration_tailStyle$$, "end-top"].join("-"), $tailStyleStartMiddle$$ = [$tailDecoration_tailStyle$$, "start-middle"].join("-"), $tailStyleEndMiddle$$ = [$tailDecoration_tailStyle$$, "end-middle"].join("-"), $tailStyleStartBottom$$ = [$tailDecoration_tailStyle$$, "start-bottom"].join("-"), 
      $tailStyleEndBottom$$ = [$tailDecoration_tailStyle$$, "end-bottom"].join("-"), $tailStyleCenterTop$$ = [$tailDecoration_tailStyle$$, "center-top"].join("-"), $tailStyleCenterBottom$$ = [$tailDecoration_tailStyle$$, "center-bottom"].join("-");
      this.$_TAIL_STYLES$ = [$tailDom_tailStyleStartTop$$, $rootElement$$3_tailStyleEndTop$$, $tailStyleStartMiddle$$, $tailStyleEndMiddle$$, $tailStyleStartBottom$$, $tailStyleEndBottom$$, $tailStyleCenterTop$$, $tailStyleCenterBottom$$];
      this.$_TAIL_ALIGN_RULES$ = {"right-top":$rootElement$$3_tailStyleEndTop$$, "right-middle":$tailStyleEndMiddle$$, "right-bottom":$tailStyleEndBottom$$, "left-top":$tailDom_tailStyleStartTop$$, "left-middle":$tailStyleStartMiddle$$, "left-bottom":$tailStyleStartBottom$$, "center-top":$tailStyleCenterTop$$, "center-middle":$tailStyleStartMiddle$$, "center-bottom":$tailStyleCenterBottom$$};
      $tailDom_tailStyleStartTop$$ = $$$$18$$("\x3cdiv\x3e").hide().addClass("oj-popup-tail");
      this.$_tailId$ = "#" + $tailDom_tailStyleStartTop$$.uniqueId().attr("id");
      $rootElement$$3_tailStyleEndTop$$ = this.$_rootElement$;
      $oj$$19$$.$Assert$.$assertPrototype$($rootElement$$3_tailStyleEndTop$$, jQuery);
      $tailDom_tailStyleStartTop$$.appendTo($rootElement$$3_tailStyleEndTop$$);
      $rootElement$$3_tailStyleEndTop$$.addClass($tailDecoration_tailStyle$$);
      return $tail$$
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$18$$($tailId$$) : null
    }, $_destroyTail$:function() {
      var $tail$$1_tailStyle$$1$$ = this.$_getTail$();
      $tail$$1_tailStyle$$1$$ && $tail$$1_tailStyle$$1$$.remove();
      delete this.$_tailId$;
      var $tail$$1_tailStyle$$1$$ = ["oj-popup-tail", this.options.tail].join("-"), $rootElement$$4$$ = this.$_rootElement$;
      $oj$$19$$.$Assert$.$assertPrototype$($rootElement$$4$$, jQuery);
      $rootElement$$4$$.removeClass($tail$$1_tailStyle$$1$$)
    }, $_setChrome$:function($chrome_chromeDecoration$$) {
      $chrome_chromeDecoration$$ = $chrome_chromeDecoration$$ ? $chrome_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$5$$ = this.$_rootElement$;
      $oj$$19$$.$Assert$.$assertPrototype$($rootElement$$5$$, jQuery);
      "default" === $chrome_chromeDecoration$$ && $rootElement$$5$$.hasClass("oj-popup-no-chrome") ? $rootElement$$5$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome_chromeDecoration$$ || $rootElement$$5$$.hasClass("oj-popup-no-chrome") || $rootElement$$5$$.addClass("oj-popup-no-chrome")
    }, $_setLauncher$:function($launcher$$4$$) {
      $launcher$$4$$ ? "string" === $$$$18$$.type($launcher$$4$$) ? $launcher$$4$$ = $$$$18$$($launcher$$4$$) : 1 !== $launcher$$4$$.nodeType && ($launcher$$4$$ = $$$$18$$($launcher$$4$$)) : $launcher$$4$$ = $$$$18$$(document.activeElement);
      if($launcher$$4$$ instanceof jQuery && 1 < $launcher$$4$$.length) {
        var $rootElement$$6$$ = this.$_rootElement$;
        $oj$$19$$.$Assert$.$assertPrototype$($rootElement$$6$$, jQuery);
        for(var $i$$230$$ = 0;$i$$230$$ < $launcher$$4$$.length;$i$$230$$++) {
          var $target$$86$$ = $launcher$$4$$[0];
          if(!$oj$$19$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$6$$[0], $target$$86$$)) {
            $launcher$$4$$ = $$$$18$$($target$$86$$);
            break
          }
        }
      }else {
        if(!($launcher$$4$$ instanceof jQuery) || $launcher$$4$$ instanceof jQuery && 0 === $launcher$$4$$.length) {
          $launcher$$4$$ = $$$$18$$(document.activeElement)
        }
      }
      $oj$$19$$.$Assert$.$assertPrototype$($launcher$$4$$, jQuery);
      this.$_launcher$ = $launcher$$4$$
    }, $_setPosition$:function($position$$12$$) {
      var $launcher$$5_options$$292_usingCallback$$ = this.options;
      $position$$12$$ && ($launcher$$5_options$$292_usingCallback$$.position = $$$$18$$.extend($launcher$$5_options$$292_usingCallback$$[$position$$12$$], $position$$12$$));
      $position$$12$$ = $launcher$$5_options$$292_usingCallback$$.position;
      $launcher$$5_options$$292_usingCallback$$ = this.$_usingCallback$;
      $oj$$19$$.$Assert$.$assertFunction$($launcher$$5_options$$292_usingCallback$$);
      $$$$18$$.isFunction($position$$12$$.using) && $position$$12$$.using !== $launcher$$5_options$$292_usingCallback$$ && ($position$$12$$.origUsing = $position$$12$$.using);
      $position$$12$$.using = $launcher$$5_options$$292_usingCallback$$;
      $launcher$$5_options$$292_usingCallback$$ = this.$_launcher$;
      $oj$$19$$.$Assert$.$assertPrototype$($launcher$$5_options$$292_usingCallback$$, jQuery);
      $position$$12$$.of || ($position$$12$$.of = $launcher$$5_options$$292_usingCallback$$, $position$$12$$._ofo = !0)
    }, $_usingHandler$:function($pos$$7$$, $props$$4$$) {
      var $origUsing_rootElement$$7_tail$$2$$ = $props$$4$$.element.element;
      $oj$$19$$.$Assert$.$assertPrototype$($origUsing_rootElement$$7_tail$$2$$, jQuery);
      $origUsing_rootElement$$7_tail$$2$$.css($pos$$7$$);
      if($origUsing_rootElement$$7_tail$$2$$ = this.$_getTail$()) {
        $origUsing_rootElement$$7_tail$$2$$.hide();
        for(var $i$$231_tailStyle$$2$$ = 0;$i$$231_tailStyle$$2$$ < this.$_TAIL_STYLES$.length;$i$$231_tailStyle$$2$$++) {
          $origUsing_rootElement$$7_tail$$2$$.removeClass(this.$_TAIL_STYLES$[$i$$231_tailStyle$$2$$])
        }
        $i$$231_tailStyle$$2$$ = this.$_TAIL_ALIGN_RULES$[[$props$$4$$.horizontal, $props$$4$$.vertical].join("-")];
        $oj$$19$$.$Assert$.$assertString$($i$$231_tailStyle$$2$$);
        $i$$231_tailStyle$$2$$ && ($origUsing_rootElement$$7_tail$$2$$.addClass($i$$231_tailStyle$$2$$), $origUsing_rootElement$$7_tail$$2$$.show());
        ($origUsing_rootElement$$7_tail$$2$$ = this.options.position.origUsing) && $origUsing_rootElement$$7_tail$$2$$($pos$$7$$, $props$$4$$)
      }
    }, $_resizeHandler$:function() {
      var $rootElement$$8$$ = this.$_rootElement$;
      $oj$$19$$.$Assert$.$assertPrototype$($rootElement$$8$$, jQuery);
      var $position$$13$$ = this.options.position;
      $oj$$19$$.$Assert$.$assertObject$($position$$13$$);
      $rootElement$$8$$.position($position$$13$$)
    }, $_intialFoucs$:function() {
      var $first$$6_nodes_options$$294$$ = this.options;
      "none" !== $first$$6_nodes_options$$294$$.initialFocus && "firstFocusable" === $first$$6_nodes_options$$294$$.initialFocus && ($first$$6_nodes_options$$294$$ = this.element.find(":focusable"), 0 < $first$$6_nodes_options$$294$$.length && ($first$$6_nodes_options$$294$$ = $first$$6_nodes_options$$294$$[0], $oj$$19$$.$Assert$.$assertDomElement$($first$$6_nodes_options$$294$$), $$$$18$$($first$$6_nodes_options$$294$$).focus(), this._trigger("focus")))
    }, $_isFocusInPopup$:function($activeElement$$) {
      $activeElement$$ || ($activeElement$$ = document.activeElement);
      $oj$$19$$.$Assert$.$assertDomElement$($activeElement$$);
      var $rootElement$$9$$ = this.$_rootElement$;
      $oj$$19$$.$Assert$.$assertPrototype$($rootElement$$9$$, jQuery);
      return $oj$$19$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$9$$[0], $activeElement$$)
    }, $_isFocusInLauncher$:function($activeElement$$1$$) {
      $activeElement$$1$$ || ($activeElement$$1$$ = document.activeElement);
      $oj$$19$$.$Assert$.$assertDomElement$($activeElement$$1$$);
      var $launcher$$6$$ = this.$_launcher$;
      $oj$$19$$.$Assert$.$assertPrototype$($launcher$$6$$, jQuery);
      return $oj$$19$$.$DomUtils$.$isAncestorOrSelf$($launcher$$6$$[0], $activeElement$$1$$)
    }, $_restoreFocus$:function() {
      if(this.$_isFocusInPopup$()) {
        var $launcher$$7$$ = this.$_launcher$;
        $oj$$19$$.$Assert$.$assertPrototype$($launcher$$7$$, jQuery);
        $launcher$$7$$.focus()
      }
    }, $_keydownHandler$:function($event$$224_launcher$$8$$) {
      if(!$event$$224_launcher$$8$$.isDefaultPrevented()) {
        var $target$$87$$ = $event$$224_launcher$$8$$.target;
        $oj$$19$$.$Assert$.$assertDomElement$($target$$87$$);
        if($event$$224_launcher$$8$$.keyCode === $$$$18$$.ui.keyCode.ESCAPE) {
          $event$$224_launcher$$8$$.preventDefault(), this.close()
        }else {
          if(117 === $event$$224_launcher$$8$$.keyCode) {
            this.$_isFocusInPopup$($target$$87$$) ? ($event$$224_launcher$$8$$.preventDefault(), $event$$224_launcher$$8$$ = this.$_launcher$, $oj$$19$$.$Assert$.$assertPrototype$($event$$224_launcher$$8$$, jQuery), $event$$224_launcher$$8$$.focus()) : this.$_isFocusInLauncher$($target$$87$$) && ($event$$224_launcher$$8$$.preventDefault(), this.$_intialFoucs$())
          }else {
            if(9 === $event$$224_launcher$$8$$.keyCode && this.$_isFocusInPopup$($target$$87$$)) {
              var $lastNode_nodes$$1$$ = this.element.find(":tabbable");
              if(0 < $lastNode_nodes$$1$$.length) {
                var $firstNode$$ = $lastNode_nodes$$1$$[0];
                $oj$$19$$.$Assert$.$assertDomElement$($firstNode$$);
                $lastNode_nodes$$1$$ = $lastNode_nodes$$1$$[$lastNode_nodes$$1$$.length - 1];
                $oj$$19$$.$Assert$.$assertDomElement$($lastNode_nodes$$1$$);
                $firstNode$$ === $target$$87$$ && $event$$224_launcher$$8$$.shiftKey ? ($event$$224_launcher$$8$$.preventDefault(), $$$$18$$($lastNode_nodes$$1$$).focus()) : $lastNode_nodes$$1$$ !== $target$$87$$ || $event$$224_launcher$$8$$.shiftKey || ($event$$224_launcher$$8$$.preventDefault(), $$$$18$$($firstNode$$).focus())
              }
            }
          }
        }
      }
    }, $_registerAutoDismiss$:function($isListening$$) {
      var $dismissalCallback$$ = this.$_dismissalCallback$;
      $oj$$19$$.$Assert$.$assertFunction$($dismissalCallback$$);
      var $documentElement$$ = document.documentElement;
      $oj$$19$$.$Assert$.$assertDomElement$($documentElement$$);
      $isListening$$ ? ($documentElement$$.addEventListener("mousedown", $dismissalCallback$$, !0), $documentElement$$.addEventListener("focus", $dismissalCallback$$, !0)) : ($documentElement$$.removeEventListener("mousedown", $dismissalCallback$$, !0), $documentElement$$.removeEventListener("focus", $dismissalCallback$$, !0))
    }, $_dismissalHandler$:function($event$$225_target$$88$$) {
      var $launcher$$9$$ = this.$_launcher$, $rootElement$$10$$ = this.$_rootElement$;
      $oj$$19$$.$Assert$.$assertPrototype$($launcher$$9$$, jQuery);
      $oj$$19$$.$Assert$.$assertPrototype$($rootElement$$10$$, jQuery);
      $event$$225_target$$88$$ = $event$$225_target$$88$$.target;
      $oj$$19$$.$Assert$.$assertDomElement$($event$$225_target$$88$$);
      $oj$$19$$.$DomUtils$.$isAncestorOrSelf$($launcher$$9$$[0], $event$$225_target$$88$$) || $oj$$19$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$10$$[0], $event$$225_target$$88$$) || this.close()
    }})
  })();
  (function() {
    function $_addSheet$$($opts$$18$$) {
      var $tmp$$2$$ = !1, $isNew$$ = !0;
      $opts$$18$$.$str$ && ($opts$$18$$.title && ($tmp$$2$$ = $$$$18$$("style[id\x3d'" + $opts$$18$$.title + "-stylesheet']")[0]), $tmp$$2$$ ? $isNew$$ = !1 : ($tmp$$2$$ = document.createElement("style"), $tmp$$2$$.setAttribute("type", "text/css"), $opts$$18$$.title && $tmp$$2$$.setAttribute("id", $opts$$18$$.title + "-stylesheet")), $tmp$$2$$.styleSheet ? $isNew$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$2$$), $tmp$$2$$.styleSheet.cssText = $opts$$18$$.$str$) : $tmp$$2$$.styleSheet.cssText = 
      $tmp$$2$$.styleSheet.cssText + " " + $opts$$18$$.$str$ : ($tmp$$2$$.appendChild(document.createTextNode($opts$$18$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$2$$)))
    }
    var $_aEvNames$$ = "select deselect hover dehover expand collapse loaded move remove deselectAll rename refresh expandAll collapseAll destroy create before remove cut copy paste".split(" "), $_defaultMenu$$ = "\x3cul\x3e\x3cli id\x3d'ojtreecreate'\x3e\x3ca href\x3d'#'\x3e{create}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreerename'\x3e\x3ca href\x3d'#'\x3e{rename}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreeremove'\x3e\x3ca href\x3d'#'\x3e{remove}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreeedit'\x3e\x3ca href\x3d'#'\x3e{edit}\x3c/a\x3e\x3cul\x3e\x3cli id\x3d'ojtreecut'\x3e\x3ca href\x3d'#'\x3e{cut}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreecopy'\x3e\x3ca href\x3d'#'\x3e{copy}\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d'ojtreepaste'\x3e\x3ca href\x3d'#'\x3e{paste}\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e", 
    $_translated$$ = !1, $scrollbar_width$$, $e1$$, $e2$$;
    $$$$18$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$ = $$$$18$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$ = $$$$18$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$.width() - $e2$$.width(), $e1$$.add($e2$$).remove()) : ($e1$$ = $$$$18$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$.width(), $e1$$.parent().remove())
    });
    var $_instance$$ = -1;
    $oj$$19$$.$__registerWidget$("oj.ojTree", $$$$18$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{animDuration:500, dnd:!1, expandParents:!1, initExpanded:null, $initLoaded$:[], selectionMode:"single", $selectedParentCollapse$:!1, $selectedParentExpand$:!0, selectPrevOnDelete:!1, $selectMultipleModifier$:"ctrl", $selectRangeModifier$:"shift", $disableSelectingChildren$:!1, data:null, icons:!0, types:null, before:null, collapse:null, create:null, 
    collapseAll:null, cut:null, dehover:null, remove:null, deselect:null, deselectAll:null, destroy:null, expand:null, expandAll:null, hover:null, loaded:null, move:null, paste:null, refresh:null, rename:null, select:null}, collapse:function($node$$18$$, $skipAnim$$) {
      $node$$18$$ = this.$_getNode$($node$$18$$);
      var $s$$8$$ = $skipAnim$$ || this.options.animDuration, $t$$1$$ = this;
      if(!$node$$18$$.length || -1 === $node$$18$$ || !$node$$18$$.hasClass("oj-tree-open") || this.$_data$.$core$.locked || $node$$18$$.hasClass("oj-disabled")) {
        return!1
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$18$$, func:"collapse"}, "before");
      if("boolean" != typeof $rslt$$ || $rslt$$) {
        $s$$8$$ && $node$$18$$.children("ul").attr("style", "display:block !important"), $node$$18$$.removeClass("oj-tree-open").addClass("oj-tree-closed").attr("aria-expanded", "false"), $s$$8$$ ? $node$$18$$.children("ul").stop(!0, !0).slideUp($s$$8$$, function() {
          this.style.display = "";
          $t$$1$$.after_close($node$$18$$)
        }) : $t$$1$$.after_close($node$$18$$), this.$_emitEvent$({obj:$node$$18$$}, "collapse")
      }
    }, collapseAll:function($node$$19$$, $anim$$) {
      var $origTarg$$ = $node$$19$$ ? $node$$19$$ : -1, $_this$$2$$ = this;
      if(!this.$_data$.$core$.locked && (($node$$19$$ = $node$$19$$ ? this.$_getNode$($node$$19$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$19$$), $node$$19$$ && -1 !== $origTarg$$ || ($node$$19$$ = this.$_$container_ul$), !$node$$19$$.hasClass("oj-disabled"))) {
        var $objs$$ = $node$$19$$.find("li.oj-tree-open");
        $objs$$.length && ($objs$$.each(function() {
          $_this$$2$$.collapse(this, !$anim$$)
        }), $objs$$.each(function($i$$232$$, $val$$41$$) {
          $objs$$[$i$$232$$] = $$$$18$$($val$$41$$)
        }), this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll"))
      }
    }, expand:function($node$$20$$, $skipAnim$$1$$) {
      this.$_expand$($node$$20$$, !1, $skipAnim$$1$$)
    }, expanded:function($nodes$$2$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$3$$ = this;
      if($nodes$$2$$ && "array" === $$$$18$$.type($nodes$$2$$)) {
        if(this.$_data$.$core$.locked) {
          return null
        }
        $exlen$$ = $nodes$$2$$.length;
        $$$$18$$.each($nodes$$2$$, function($i$$233$$, $val$$42$$) {
          $_this$$3$$.$_expand$($val$$42$$, !1, $skipAnim$$2$$)
        });
        return null
      }
      $nodes$$2$$ = this.$_$container_ul$.find("li.oj-tree-open");
      $exlen$$ = $nodes$$2$$.length;
      $exlr$$ = [];
      for(var $n$$22$$ = 0;$n$$22$$ < $exlen$$;$n$$22$$++) {
        $exlr$$.push($$$$18$$($nodes$$2$$[$n$$22$$]))
      }
      return $exlr$$
    }, expandAll:function($node$$21$$, $anim$$1$$) {
      this.$_expandAll$($node$$21$$, $anim$$1$$)
    }, toggleExpand:function($node$$22$$) {
      $node$$22$$ = this.$_getNode$($node$$22$$);
      if(-1 !== $node$$22$$ && !$node$$22$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if($node$$22$$.hasClass("oj-tree-closed")) {
          return this.expand($node$$22$$)
        }
        if($node$$22$$.hasClass("oj-tree-open")) {
          return this.collapse($node$$22$$)
        }
      }
    }, deselect:function($node$$23$$) {
      $node$$23$$ = this.$_getNode$($node$$23$$);
      if(!$node$$23$$.length) {
        return!1
      }
      $node$$23$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || !this.isSelected($node$$23$$) || ($node$$23$$.children("a").removeClass("oj-tree-clicked"), $node$$23$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$23$$), this.$_data$.ui.$last_selected$.get(0) === $node$$23$$.get(0) && (this.$_data$.ui.$last_selected$ = this.$_data$.ui.selected.eq(0)), this.$_emitEvent$({obj:$node$$23$$}, "deselect"))
    }, deselectAll:function($context$$42$$) {
      if(!this.$_data$.$core$.locked) {
        var $origTarg$$1$$ = $context$$42$$ ? $context$$42$$ : -1, $ret$$27$$ = $context$$42$$ ? $$$$18$$($context$$42$$).find("a.oj-tree-clicked").parent() : this.$_$container$.find("a.oj-tree-clicked").parent();
        $ret$$27$$.hasClass("oj-disabled") || ($ret$$27$$.children("a.oj-tree-clicked").removeClass("oj-tree-clicked"), $ret$$27$$.removeAttr("aria-selected"), this.$_data$.ui.selected = $$$$18$$([]), this.$_data$.ui.$last_selected$ = !1, $ret$$27$$.length && ($ret$$27$$.each(function($i$$234$$, $val$$43$$) {
          $ret$$27$$[$i$$234$$] = $$$$18$$($val$$43$$)
        }), this.$_emitEvent$({obj:$ret$$27$$, targ:$origTarg$$1$$}, "deselectAll")))
      }
    }, select:function($node$$24$$) {
      this.$_select$($node$$24$$)
    }, selected:function($nodes$$3$$) {
      if(this.$_data$.$core$.locked) {
        return null
      }
      if(void 0 === $nodes$$3$$) {
        return this.$_getSelected$()
      }
      if(void 0 !== $nodes$$3$$.length) {
        var $_this$$4$$ = this;
        $$$$18$$.each($nodes$$3$$, function($i$$235$$, $val$$44$$) {
          $val$$44$$ && $_this$$4$$.$_select$($val$$44$$, !0)
        })
      }
      return null
    }, toggleSelect:function($node$$25$$) {
      $node$$25$$ = this.$_getNode$($node$$25$$);
      if(!$node$$25$$.length) {
        return!1
      }
      $node$$25$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || (this.isSelected($node$$25$$) ? this.deselect($node$$25$$) : this.$_select$($node$$25$$, !0))
    }, isCollapsed:function($node$$26$$) {
      return($node$$26$$ = this.$_getNode$($node$$26$$)) && -1 !== $node$$26$$ && $node$$26$$.hasClass("oj-tree-closed")
    }, isExpanded:function($node$$27$$) {
      return($node$$27$$ = this.$_getNode$($node$$27$$)) && -1 !== $node$$27$$ && $node$$27$$.hasClass("oj-tree-open")
    }, isLeaf:function($node$$28$$) {
      return this.$_isLeaf$($node$$28$$)
    }, isSelected:function($node$$29$$) {
      return 0 <= this.$_data$.ui.selected.index(this.$_getNode$($node$$29$$))
    }, create:function($refnode$$, $position$$14$$, $data$$112$$) {
      return this.$_create_node$($refnode$$, $position$$14$$, $data$$112$$)
    }, remove:function($node$$30$$) {
      $node$$30$$ = this.$_getNode$($node$$30$$);
      if(!$node$$30$$.length || $node$$30$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1
      }
      var $p$$6_rslt$$1$$ = this.$_emitEvent$({obj:$node$$30$$, func:"remove"}, "before");
      if("boolean" == typeof $p$$6_rslt$$1$$ && !$p$$6_rslt$$1$$) {
        return!1
      }
      this.$__rollback$();
      var $p$$6_rslt$$1$$ = this.$_getParent$($node$$30$$), $prev$$3$$ = $$$$18$$([]), $t$$2$$ = this, $sib$$ = this.$_getPrev$($node$$30$$);
      $node$$30$$.each(function() {
        $prev$$3$$ = $prev$$3$$.add($t$$2$$.$_getPrev$(this))
      });
      $node$$30$$ = $node$$30$$.detach();
      -1 !== $p$$6_rslt$$1$$ && 0 === $p$$6_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$6_rslt$$1$$.removeClass("oj-tree-open oj-tree-closed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_clean_node$($p$$6_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$30$$, prev:$sib$$, parent:$p$$6_rslt$$1$$}, "remove");
      return $node$$30$$
    }, getText:function($node$$31$$) {
      $node$$31$$ = this.$_getNode$($node$$31$$);
      if(!$node$$31$$.length) {
        return!1
      }
      var $ht$$ = this.$_data$.$core$.$htmlTitles$;
      $node$$31$$ = $node$$31$$.children("a:eq(0)");
      if($ht$$) {
        return $node$$31$$ = $node$$31$$.clone(), $node$$31$$.children("INS").remove(), $node$$31$$.html()
      }
      $node$$31$$ = $node$$31$$.contents().filter(function() {
        return 3 == this.nodeType
      })[0];
      return $node$$31$$.nodeValue
    }, rename:function($node$$32$$, $text$$11$$) {
      this.$_rename_node$($node$$32$$, $text$$11$$)
    }, hover:function($node$$33$$) {
      $node$$33$$ = this.$_getNode$($node$$33$$);
      if(!$node$$33$$.length) {
        return!1
      }
      if(!$node$$33$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$33$$, func:"hover"}, "before");
        if("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          $node$$33$$.hasClass("oj-tree-hovered") || this.dehover(), this.$_data$.ui.$hovered$ = $node$$33$$.children("a").addClass("oj-tree-hovered").parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$33$$), this.$_emitEvent$({obj:$node$$33$$}, "hover")
        }
      }
    }, dehover:function() {
      var $obj$$52$$ = this.$_data$.ui.$hovered$, $p$$7$$;
      if(!$obj$$52$$ || !$obj$$52$$.length) {
        return!1
      }
      $obj$$52$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || ($p$$7$$ = $obj$$52$$.children("a").removeClass("oj-tree-hovered").parent(), this.$_$container_ul$.removeAttr("aria-activedescendant"), this.$_data$.ui.$hovered$[0] === $p$$7$$[0] && (this.$_data$.ui.$hovered$ = null), this.$_emitEvent$({obj:$obj$$52$$}, "dehover"))
    }, getPath:function($node$$34$$, $idMode$$) {
      var $p$$8$$ = [], $_this$$5$$ = this;
      $node$$34$$ = this.$_getNode$($node$$34$$);
      if(-1 === $node$$34$$ || !$node$$34$$ || !$node$$34$$.length) {
        return!1
      }
      $node$$34$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$8$$.push($idMode$$ ? this.id : $_this$$5$$.getText(this))
      });
      $p$$8$$.reverse();
      $p$$8$$.push($idMode$$ ? $node$$34$$.attr("id") : this.getText($node$$34$$));
      return $p$$8$$
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)")
    }, refresh:function($node$$35$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$35$$)
    }, move:function($node$$36$$, $refnode$$1$$, $position$$15$$, $iscopy$$) {
      this.$_move_node$($node$$36$$, $refnode$$1$$, $position$$15$$, $iscopy$$)
    }, getType:function($node$$37$$) {
      return this.$_getType$($node$$37$$)
    }, setType:function($node$$38$$, $str$$17$$) {
      return this.$_setType$($node$$38$$, $str$$17$$)
    }, getNodeBySubId:function($locator$$14$$) {
      return $locator$$14$$ ? this.$_processSubId$($locator$$14$$) : this.element ? this.element[0] : null
    }, destroy:function() {
      var $n$$23$$ = this.$_index$;
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "")
      });
      $$$$18$$(document).unbind(".oj-tree-" + $n$$23$$).undelegate(".oj-tree-" + $n$$23$$);
      this._super()
    }, _create:function() {
      this._super();
      this.$_bCreate$ = !0;
      this.$_elemId$ = "#" + this.element.attr("id");
      this.$_$container$ = $$$$18$$(this.$_elemId$ ? this.$_elemId$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "");
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_index$ = this.$_newIndex$();
      this.$_isRtl$ = "rtl" === this._GetReadingDirection();
      this.$_initTree$();
      this.$_bCreate$ = !1
    }, _setOption:function($key$$91$$, $newval$$) {
      if(!this.$_bCreate$) {
        var $state$$5_val$$45$$;
        if("selectionMode" === $key$$91$$) {
          $state$$5_val$$45$$ = "none" === $newval$$ ? 0 : "single" === $newval$$ ? 1 : "multiple" === $newval$$ ? -1 : void 0, $state$$5_val$$45$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $state$$5_val$$45$$)
        }else {
          if("icons" === $key$$91$$) {
            "boolean" == $$$$18$$.type($newval$$) && $newval$$ != this.$_data$.$themes$.icons && (this.$_data$.$themes$.icons = $newval$$, this[$newval$$ ? "show_icons" : "hide_icons"]())
          }else {
            if("contextMenu" === $key$$91$$) {
              if(!this.$_data$.menu.$changing$ && (this.$_clearMenu$(), $newval$$.menu)) {
                this._super($key$$91$$, $newval$$);
                this.$_initMenu$(!0);
                return
              }
            }else {
              if("disabled" === $key$$91$$) {
                ($state$$5_val$$45$$ = this.$_$container_ul$.hasClass("oj-disabled")) || ($state$$5_val$$45$$ = !1);
                if("undefined" === typeof $newval$$) {
                  return this._super($key$$91$$, $newval$$), $state$$5_val$$45$$
                }
                $state$$5_val$$45$$ != $newval$$ && ($newval$$ ? (this.$_$container_ul$.addClass("oj-disabled"), this.$_$container_ul$.prop("disabled", "disabled")) : (this.$_$container_ul$.removeClass("oj-disabled"), this.$_$container_ul$.removeAttr("disabled")), this.$_lock$($newval$$))
              }else {
                if("data" === $key$$91$$) {
                  this._super($key$$91$$, $newval$$);
                  this.$_initDSOpts$();
                  this.$_initDataSource$();
                  this.$_load_node$(-1, function() {
                    this.$_loaded$();
                    this.$_reload_nodes$()
                  });
                  return
                }
              }
            }
          }
        }
      }
      this._super($key$$91$$, $newval$$)
    }, $_getNodeCore$:function($obj$$53$$) {
      var $$obj$$ = $$$$18$$($obj$$53$$, this.$_$container$);
      if($$obj$$.is(".oj-tree") || -1 == $obj$$53$$) {
        return-1
      }
      $$obj$$ = $$obj$$.closest("li", this.$_$container$);
      return $$obj$$.length ? $$obj$$ : !1
    }, $_getNode$:function($obj$$54$$, $allow_multiple$$) {
      if("undefined" === typeof $obj$$54$$ || null === $obj$$54$$) {
        return $allow_multiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$last_selected$
      }
      var $$obj$$1$$ = $$$$18$$($obj$$54$$, this.$_$container$);
      if($$obj$$1$$.is(".oj-tree") || -1 === $obj$$54$$) {
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
    }, $_isLeaf$:function($node$$39$$) {
      return($node$$39$$ = this.$_getNode$($node$$39$$)) && -1 !== $node$$39$$ && $node$$39$$.hasClass("oj-tree-leaf")
    }, $_reference$:function($node$$40$$) {
      $node$$40$$.parents("div").eq(0);
      return this
    }, $_applyDefaults$:function($to$$1$$, $from$$1$$) {
      void 0 != $to$$1$$ && void 0 != $from$$1$$ && $$$$18$$.each($from$$1$$, function($prop$$83$$, $val$$46$$) {
        void 0 == $to$$1$$[$prop$$83$$] && ($to$$1$$[$prop$$83$$] = $val$$46$$)
      })
    }, $_lock$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass("oj-tree-locked").css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass("oj-tree-locked").css("opacity", this.$_data$.ui.opacity))
    }, $_prepare_move$:function($o$$2$$, $r$$1$$, $pos$$8$$, $cb$$1$$, $is_cb$$) {
      var $p$$9$$ = {$ot$:this};
      $p$$9$$.$o$ = $p$$9$$.$ot$.$_getNode$($o$$2$$);
      $p$$9$$.$r$ = -1 === $r$$1$$ ? -1 : this.$_getNode$($r$$1$$);
      $p$$9$$.$p$ = "undefined" === typeof $pos$$8$$ || !1 === $pos$$8$$ ? "last" : $pos$$8$$;
      if(!$is_cb$$ && this.$_data$.$core$.$prepared_move$.$o$ && this.$_data$.$core$.$prepared_move$.$o$[0] === $p$$9$$.$o$[0] && this.$_data$.$core$.$prepared_move$.$r$[0] === $p$$9$$.$r$[0] && this.$_data$.$core$.$prepared_move$.$p$ === $p$$9$$.$p$) {
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$), $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$)
      }else {
        $p$$9$$.$ot$ = this;
        $p$$9$$.$rt$ = this;
        if(-1 !== $p$$9$$.$r$ && $p$$9$$.$r$) {
          if(!/^(before|after)$/.test($p$$9$$.$p$) && !this.$_is_loaded$($p$$9$$.$r$)) {
            return this.$_load_node$($p$$9$$.$r$, function() {
              this.$_prepare_move$($o$$2$$, $r$$1$$, $pos$$8$$, $cb$$1$$, !0)
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
      var $obj$$59$$ = this.$_data$.$core$.$prepared_move$, $ret$$28$$ = !0, $r$$2$$;
      $r$$2$$ = -1 === $obj$$59$$.$r$ ? this.$_$container$() : $obj$$59$$.$r$;
      if(!$obj$$59$$ || !$obj$$59$$.$o$ || $obj$$59$$.$or$[0] === $obj$$59$$.$o$[0]) {
        return!1
      }
      if(!$obj$$59$$.$cy$) {
        if($obj$$59$$.$op$ && $obj$$59$$.$np$ && $obj$$59$$.$op$[0] === $obj$$59$$.$np$[0] && $obj$$59$$.$cp$ - 1 === $obj$$59$$.$o$.index()) {
          return!1
        }
        $obj$$59$$.$o$.each(function() {
          if(-1 !== $r$$2$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$28$$ = !1
          }
        })
      }
      return $ret$$28$$
    }, $_rename_node$:function($node$$41$$, $text$$12$$) {
      var $t$$3$$;
      $node$$41$$ = this.$_getNode$($node$$41$$);
      this.$__rollback$();
      $t$$3$$ = this.getText($node$$41$$);
      if($node$$41$$ && $node$$41$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$41$$, func:"rename", title:$text$$12$$, prevTitle:$t$$3$$}, "before");
        if("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return
        }
      }
      $node$$41$$ && ($node$$41$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments))) && this.$_emitEvent$({obj:$node$$41$$, title:$text$$12$$, prevTitle:$t$$3$$}, "rename")
    }, $_move_node$:function($obj$$60$$, $d$$3_o$$3_ref$$3$$, $position$$16$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      if(!($obj$$60$$.hasClass && $obj$$60$$.hasClass("oj-disabled") || this.$_data$.$core$.locked)) {
        if(!$is_prepared$$) {
          return this.$_prepare_move$($obj$$60$$, $d$$3_o$$3_ref$$3$$, $position$$16$$, function($p$$10$$) {
            this.$_move_node$($p$$10$$, !1, !1, $is_copy$$, !0, $skip_check$$)
          })
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0);
        if(!$skip_check$$ && !this.check_move()) {
          return!1
        }
        this.$__rollback$();
        $d$$3_o$$3_ref$$3$$ = !1;
        $is_copy$$ ? ($d$$3_o$$3_ref$$3$$ = $obj$$60$$.$o$.clone(!0), $d$$3_o$$3_ref$$3$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id)
        })) : $d$$3_o$$3_ref$$3$$ = $obj$$60$$.$o$;
        $obj$$60$$.$or$.length ? $obj$$60$$.$or$.before($d$$3_o$$3_ref$$3$$) : ($obj$$60$$.$np$.children("ul").length || $$$$18$$("\x3cul /\x3e").appendTo($obj$$60$$.$np$), $obj$$60$$.$np$.children("ul:eq(0)").append($d$$3_o$$3_ref$$3$$));
        try {
          $obj$$60$$.$ot$.$_clean_node$($obj$$60$$.$op$), $obj$$60$$.$rt$.$_clean_node$($obj$$60$$.$np$), $obj$$60$$.$op$.find("\x3e ul \x3e li").length || $obj$$60$$.$op$.removeClass("oj-tree-open oj-tree-closed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove()
        }catch($e$$78$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0, this.$_data$.$core$.$prepared_move$.$oc$ = $d$$3_o$$3_ref$$3$$);
        $d$$3_o$$3_ref$$3$$ = $$$$18$$.extend(!0, {}, this.$_data$.$core$.$prepared_move$);
        $d$$3_o$$3_ref$$3$$.obj = $obj$$60$$.$o$;
        this.$_emitEvent$($d$$3_o$$3_ref$$3$$, "move");
        return this.$_data$.$core$.$prepared_move$
      }
    }, $_getMove$:function() {
      return this.$_data$.$crrm$.$prepared_move$
    }, $_getType$:function($node$$42$$) {
      return($node$$42$$ = this.$_getNode$($node$$42$$)) && $node$$42$$.length ? $node$$42$$.attr(this.options.types.attr) || "default" : !1
    }, $_setType$:function($str$$18$$, $node$$43$$) {
      var $s$$9$$ = this.options.types, $ret$$29$$ = !1;
      $node$$43$$ = this.$_getNode$($node$$43$$);
      ($ret$$29$$ = $s$$9$$ ? $node$$43$$.length && $str$$18$$ ? $node$$43$$.attr(this.options.types.attr, $str$$18$$) : !1 : !1) && this.$_emitEvent$({obj:$node$$43$$, type:$str$$18$$}, "settype");
      return $ret$$29$$
    }, $_check$:function($rule$$3$$, $obj$$61$$, $opts$$19$$) {
      $obj$$61$$ = this.$_getNode$($obj$$61$$);
      var $v$$1$$ = !1, $ty$$ = this.$_getType$($obj$$61$$), $d$$4$$ = 0, $_this$$7$$ = this, $s$$10$$ = this.$_getOptions$().types, $data$$113$$ = !1;
      if(-1 === $obj$$61$$) {
        if($s$$10$$[$rule$$3$$]) {
          $v$$1$$ = $s$$10$$[$rule$$3$$]
        }else {
          return
        }
      }else {
        if(!1 === $ty$$) {
          return
        }
        ($data$$113$$ = this.$_data$.types.$defaults$.useData ? $obj$$61$$.data("oj-tree") : !1) && $data$$113$$.types && "undefined" !== typeof $data$$113$$.types[$rule$$3$$] ? $v$$1$$ = $data$$113$$.types[$rule$$3$$] : $s$$10$$.types[$ty$$] && "undefined" !== typeof $s$$10$$.types[$ty$$][$rule$$3$$] ? $v$$1$$ = $s$$10$$.types[$ty$$][$rule$$3$$] : $s$$10$$.types["default"] && "undefined" !== typeof $s$$10$$.types["default"][$rule$$3$$] && ($v$$1$$ = $s$$10$$.types["default"][$rule$$3$$])
      }
      $$$$18$$.isFunction($v$$1$$) && ($v$$1$$ = $v$$1$$.call(this, $obj$$61$$));
      var $md$$ = this.$_data$.types.$defaults$.maxDepth;
      "maxDepth" === $rule$$3$$ && (-1 !== $obj$$61$$ && !1 !== $opts$$19$$ && -2 !== this.$_data$.types.$defaults$.maxDepth && 0 !== $v$$1$$) && $obj$$61$$.children("a:eq(0)").parentsUntil(".oj-tree", "li").each(function($i$$236$$) {
        if(-1 !== $md$$ && 0 >= $md$$ - ($i$$236$$ + 1)) {
          return $v$$1$$ = 0, !1
        }
        $d$$4$$ = 0 === $i$$236$$ ? $v$$1$$ : $_this$$7$$.$_check$($rule$$3$$, this, !1);
        if(-1 !== $d$$4$$ && 0 >= $d$$4$$ - ($i$$236$$ + 1)) {
          return $v$$1$$ = 0, !1
        }
        0 <= $d$$4$$ && ($d$$4$$ - ($i$$236$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $d$$4$$ - ($i$$236$$ + 1));
        0 <= $md$$ && ($md$$ - ($i$$236$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $md$$ - ($i$$236$$ + 1))
      });
      return $v$$1$$
    }, $_clean_node$:function($obj$$62$$) {
      $obj$$62$$ = $obj$$62$$ && -1 != $obj$$62$$ ? $$$$18$$($obj$$62$$) : this.$_$container_ul$;
      $obj$$62$$ = $obj$$62$$.is("li") ? $obj$$62$$.find("li").addBack() : $obj$$62$$.find("li");
      $obj$$62$$.removeClass("oj-tree-last").filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-tree-open").removeClass("oj-tree-leaf").addClass("oj-tree-closed").attr("aria-expanded", "false");
      $obj$$62$$.not(".oj-tree-open, .oj-tree-closed").addClass("oj-tree-leaf").children("ul").remove();
      this.$_emitEvent$({obj:$obj$$62$$}, "clean_node")
    }, $_create_node$:function($obj$$63$$, $position$$17$$, $js$$, $callback$$95$$, $is_loaded$$) {
      $obj$$63$$ = this.$_getNode$($obj$$63$$);
      if(-1 !== $obj$$63$$ && !$obj$$63$$.length) {
        return!1
      }
      $position$$17$$ = "undefined" === typeof $position$$17$$ ? "last" : $position$$17$$;
      var $d$$5$$ = $$$$18$$("\x3cli /\x3e"), $tmp$$3$$;
      if(!$is_loaded$$ && !this.$_is_loaded$($obj$$63$$)) {
        return this.$_load_node$($obj$$63$$, function() {
          this.$_create_node$($obj$$63$$, $position$$17$$, $js$$, $callback$$95$$, !0)
        }), !1
      }
      this.$__rollback$();
      "string" === typeof $js$$ && ($js$$ = {data:$js$$});
      $js$$ || ($js$$ = {});
      $js$$.attr && $d$$5$$.attr($js$$.attr);
      $js$$.metadata && $d$$5$$.data($js$$.metadata);
      $js$$.state && $d$$5$$.addClass("oj-tree-" + ("expanded" === $js$$.state ? "open" : "closed"));
      $js$$.data || ($js$$.data = void 0 !== $js$$.title ? $js$$.title : this.$getTranslatedString$("m_newnode"));
      $$$$18$$.isArray($js$$.data) || ($tmp$$3$$ = $js$$.data, $js$$.data = [], $js$$.data.push($tmp$$3$$));
      var $_this$$8$$ = this;
      $$$$18$$.each($js$$.data, function($i$$237$$, $m$$21$$) {
        $tmp$$3$$ = $$$$18$$("\x3ca /\x3e");
        $$$$18$$.isFunction($m$$21$$) && ($m$$21$$ = $m$$21$$.call(this, $js$$));
        if("string" == typeof $m$$21$$) {
          $tmp$$3$$.attr("href", "#")[$_this$$8$$.$_data$.$core$.$htmlTitles$ ? "html" : "text"]($m$$21$$)
        }else {
          $m$$21$$.attr || ($m$$21$$.attr = {}), $m$$21$$.attr.href || ($m$$21$$.attr.href = "#"), $tmp$$3$$.attr($m$$21$$.attr)[$_this$$8$$.$_data$.$core$.$htmlTitles$ ? "html" : "text"]($m$$21$$.title), $m$$21$$.language && $tmp$$3$$.addClass($m$$21$$.language)
        }
        $tmp$$3$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
        !$m$$21$$.icon && $js$$.icon && ($m$$21$$.icon = $js$$.icon);
        $m$$21$$.icon && (-1 === $m$$21$$.icon.indexOf("/") ? $tmp$$3$$.children("ins").addClass($m$$21$$.icon) : $tmp$$3$$.children("ins").css("background", "url('" + $m$$21$$.icon + "') center center no-repeat"));
        $d$$5$$.append($tmp$$3$$)
      });
      $d$$5$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
      -1 === $obj$$63$$ && ($obj$$63$$ = this.$_$container$, "before" === $position$$17$$ && ($position$$17$$ = "first"), "after" === $position$$17$$ && ($position$$17$$ = "last"));
      switch($position$$17$$) {
        case "before":
          $obj$$63$$.before($d$$5$$);
          $tmp$$3$$ = this.$_getParent$($obj$$63$$);
          break;
        case "after":
          $obj$$63$$.after($d$$5$$);
          $tmp$$3$$ = this.$_getParent$($obj$$63$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$63$$.children("ul").length || $obj$$63$$.append("\x3cul /\x3e");
          $obj$$63$$.children("ul").prepend($d$$5$$);
          $tmp$$3$$ = $obj$$63$$;
          break;
        case "last":
          $obj$$63$$.children("ul").length || $obj$$63$$.append("\x3cul /\x3e");
          $obj$$63$$.children("ul").append($d$$5$$);
          $tmp$$3$$ = $obj$$63$$;
          break;
        default:
          $obj$$63$$.children("ul").length || $obj$$63$$.append("\x3cul /\x3e"), $position$$17$$ || ($position$$17$$ = 0), $tmp$$3$$ = $obj$$63$$.children("ul").children("li").eq($position$$17$$), $tmp$$3$$.length ? $tmp$$3$$.before($d$$5$$) : $obj$$63$$.children("ul").append($d$$5$$), $tmp$$3$$ = $obj$$63$$
      }
      if(-1 === $tmp$$3$$ || $tmp$$3$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$3$$ = -1
      }
      this.$_clean_node$($tmp$$3$$);
      this.$_emitEvent$({obj:$d$$5$$, parent:$tmp$$3$$}, "create_node");
      $callback$$95$$ && $callback$$95$$.call(this, $d$$5$$);
      return $d$$5$$
    }, $_expand$:function($obj$$64$$, $callback$$96$$, $skip_animation$$) {
      $obj$$64$$ = this.$_getNode$($obj$$64$$);
      if(!$obj$$64$$.length) {
        return!1
      }
      if(!$obj$$64$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if(!$obj$$64$$.hasClass("oj-tree-closed")) {
          return $callback$$96$$ && $callback$$96$$.call(), !1
        }
        var $rslt$$4_s$$12$$ = this.$_emitEvent$({obj:$obj$$64$$, func:"expand"}, "before");
        if("boolean" != typeof $rslt$$4_s$$12$$ || $rslt$$4_s$$12$$) {
          var $rslt$$4_s$$12$$ = $skip_animation$$ || this.options.animDuration, $t$$4$$ = this;
          this.$_is_loaded$($obj$$64$$) ? (this.options.expandParents && $obj$$64$$.parentsUntil(".oj-tree", ".oj-tree-closed").each(function() {
            $t$$4$$.expand(this, !1, !0)
          }), $rslt$$4_s$$12$$ && $obj$$64$$.children("ul").css("display", "none"), $obj$$64$$.removeClass("oj-tree-closed").addClass("oj-tree-open").attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $rslt$$4_s$$12$$ ? $obj$$64$$.children("ul").stop(!0, !0).slideDown($rslt$$4_s$$12$$, function() {
            this.style.display = "";
            $t$$4$$.after_open($obj$$64$$)
          }) : $t$$4$$.after_open($obj$$64$$), this.$_emitEvent$({obj:$obj$$64$$}, "expand"), $callback$$96$$ && $callback$$96$$.call()) : ($obj$$64$$.children("a").addClass("oj-tree-loading"), this.$_load_node$($obj$$64$$, function() {
            $t$$4$$.expand($obj$$64$$, $callback$$96$$, $skip_animation$$)
          }, $callback$$96$$))
        }
      }
    }, $_expandAll$:function($obj$$65$$, $do_animation$$, $original_obj$$) {
      var $origTarg$$2$$ = $obj$$65$$ ? $obj$$65$$ : -1;
      ($obj$$65$$ = $obj$$65$$ ? this.$_getNode$($obj$$65$$) : -1) && -1 !== $obj$$65$$ ? $origTarg$$2$$ = $obj$$65$$ : $obj$$65$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$65$$ = $obj$$65$$.find("li.oj-tree-closed") : ($original_obj$$ = $obj$$65$$, $obj$$65$$ = $obj$$65$$.is(".oj-tree-closed") ? $obj$$65$$.find("li.oj-tree-closed").addBack() : $obj$$65$$.find("li.oj-tree-closed"));
      var $_this$$9$$ = this;
      $obj$$65$$.each(function() {
        var $__this$$ = this;
        $_this$$9$$.$_is_loaded$(this) ? $_this$$9$$.$_expand$(this, !1, !$do_animation$$) : $_this$$9$$.expand(this, function() {
          $_this$$9$$.$_expandAll$($__this$$, $do_animation$$, $original_obj$$)
        }, !$do_animation$$)
      });
      0 === $original_obj$$.find("li.oj-tree-closed").length && $obj$$65$$.length && ($obj$$65$$.each(function($i$$238$$, $val$$47$$) {
        $obj$$65$$[$i$$238$$] = $$$$18$$($val$$47$$)
      }), this.$_emitEvent$({obj:$obj$$65$$, targ:$origTarg$$2$$}, "expandAll"))
    }, $_select$:function($node$$44$$, $check_rslt$$5_s$$13$$, $e$$79$$) {
      $node$$44$$ = this.$_getNode$($node$$44$$);
      if(-1 == $node$$44$$ || !$node$$44$$ || !$node$$44$$.length) {
        return!1
      }
      if(!$node$$44$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked && ($check_rslt$$5_s$$13$$ = this.$_emitEvent$({obj:$node$$44$$, func:"select"}, "before"), "boolean" != typeof $check_rslt$$5_s$$13$$ || $check_rslt$$5_s$$13$$)) {
        $check_rslt$$5_s$$13$$ = this.options;
        var $is_multiple$$ = "on" == $check_rslt$$5_s$$13$$.selectMultipleModifier || !1 !== $check_rslt$$5_s$$13$$.selectMultipleModifier && $e$$79$$ && $e$$79$$[$check_rslt$$5_s$$13$$.selectMultipleModifier + "Key"], $is_range$$ = !1 !== $check_rslt$$5_s$$13$$.selectRangeModifier && $e$$79$$ && $e$$79$$[$check_rslt$$5_s$$13$$.selectRangeModifier + "Key"] && this.$_data$.ui.$last_selected$ && this.$_data$.ui.$last_selected$[0] !== $node$$44$$[0] && this.$_data$.ui.$last_selected$.parent()[0] === 
        $node$$44$$.parent()[0], $is_selected$$ = this.isSelected($node$$44$$), $proceed$$ = !0, $t$$5$$ = this;
        $is_multiple$$ || -1 != this.$_data$.$core$.$selectMode$ || ($is_multiple$$ = !0);
        if(0 == this.$_data$.$core$.$selectMode$ || $check_rslt$$5_s$$13$$.disableSelectingChildren && $is_multiple$$ && ($node$$44$$.parentsUntil(".oj-tree", "li").children("a.oj-tree-clicked").length || $node$$44$$.children("ul").find("a.oj-tree-clicked:eq(0)").length)) {
          return!1
        }
        $proceed$$ = !1;
        switch(!0) {
          case $is_range$$:
            this.$_data$.ui.$last_selected$.addClass("oj-tree-last-selected");
            $node$$44$$ = $node$$44$$[$node$$44$$.index() < this.$_data$.ui.$last_selected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
            -1 == this.$_data$.$core$.$selectMode$ || $node$$44$$.length < this.$_data$.$core$.$selectMode$ ? (this.$_data$.ui.$last_selected$.removeClass("oj-tree-last-selected"), this.$_data$.ui.$last_selected$.removeClass("oj-tree-last-selected"), this.data.ui.selected.each(function() {
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
            this.deselect($node$$44$$);
            break;
          case !$is_selected$$ && $is_multiple$$:
            if(-1 == this.$_data$.$core$.$selectMode$ || this.$_data$.ui.selected.length + 1 <= this.$_data$.$core$.$selectMode$) {
              $proceed$$ = !0
            }
        }
        $proceed$$ && !$is_selected$$ && ($is_range$$ || (this.$_data$.ui.$last_selected$ = $node$$44$$), $node$$44$$.children("a").addClass("oj-tree-clicked"), $node$$44$$.attr("aria-selected", "true"), $check_rslt$$5_s$$13$$.selectedParentExpand && $node$$44$$.parents(".oj-tree-closed").each(function() {
          $t$$5$$.expand(this, !1, !0)
        }), this.$_data$.ui.selected = this.$_data$.ui.selected.add($node$$44$$), this.$_fix_scroll$($node$$44$$.eq(0)), this.$_emitEvent$({obj:$node$$44$$, e:$e$$79$$}, "select"))
      }
    }, $_refresh$:function($node$$45$$) {
      this.$_refresh_core$($node$$45$$)
    }, $_refresh_core$:function($node$$46$$) {
      var $origTarg$$3$$ = $node$$46$$ ? $node$$46$$ : -1, $_this$$10$$ = this;
      this.$_save_opened$();
      $node$$46$$ || ($node$$46$$ = -1);
      ($node$$46$$ = this.$_getNode$($node$$46$$)) ? $origTarg$$3$$ = $node$$46$$ : $node$$46$$ = -1;
      -1 !== $node$$46$$ ? $node$$46$$.children("UL").remove() : this.$_$container_ul$.empty();
      this.$_load_node$($node$$46$$, function() {
        $_this$$10$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$10$$.$_reload_nodes$()
      })
    }, $_refresh_ui$:function($obj$$66$$) {
      this.save_selected();
      this.$_refresh_core$($obj$$66$$)
    }, after_open:function($obj$$67$$) {
      this.$_emitEvent$({obj:$obj$$67$$}, "after_open")
    }, after_close:function($obj$$68$$) {
      this.$_emitEvent$({obj:$obj$$68$$}, "after_close")
    }, $_reopen$:function() {
      var $_this$$11$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$18$$.each(this.$_data$.$core$.$toExpand$, function($i$$239$$, $val$$48$$) {
        $_this$$11$$.$_expand$($val$$48$$, !1, !0)
      });
      this.$_emitEvent$({}, "reopen")
    }, $_getSelected$:function($context$$43$$) {
      return $context$$43$$ ? $$$$18$$($context$$43$$).find("a.oj-tree-clicked").parent() : this.$_data$.ui.selected
    }, $_set_text$:function($obj$$69$$, $val$$49$$) {
      $obj$$69$$ = this.$_getNode$($obj$$69$$);
      if(!$obj$$69$$.length) {
        return!1
      }
      $obj$$69$$ = $obj$$69$$.children("a:eq(0)");
      if(this.$_data$.$core$.$htmlTitles$) {
        var $tmp$$4$$ = $obj$$69$$.children("INS").clone();
        $obj$$69$$.html($val$$49$$).prepend($tmp$$4$$);
        this.$_emitEvent$({obj:$obj$$69$$, name:$val$$49$$}, "set_text");
        return!0
      }
      $obj$$69$$ = $obj$$69$$.contents().filter(function() {
        return 3 == this.nodeType
      })[0];
      this.$_emitEvent$({obj:$obj$$69$$, name:$val$$49$$}, "set_text");
      return $obj$$69$$.nodeValue = $val$$49$$
    }, $_load_node$:function($obj$$70$$) {
      this.$_emitEvent$({obj:$obj$$70$$}, "load_node")
    }, $_is_loaded$:$JSCompiler_returnArg$$(!0), $_load_node_DS$:function($obj$$72$$, $s_call$$, $e_call$$) {
      var $_this$$12$$ = this;
      this.$_load_node_tree$($obj$$72$$, function() {
        $_this$$12$$.$_emitEvent$({obj:$_this$$12$$.$_getNode$($obj$$72$$)}, "load_node");
        $s_call$$.call(this)
      }, $e_call$$)
    }, $_is_loaded_DS$:function($obj$$73$$) {
      $obj$$73$$ = this.$_getNode$($obj$$73$$);
      return-1 === $obj$$73$$ || !$obj$$73$$ || $obj$$73$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$73$$.children("ul").children("li").length
    }, $_refresh_DS$:function($obj$$74$$) {
      ($obj$$74$$ = this.$_getNode$($obj$$74$$)) && -1 !== $obj$$74$$ && $obj$$74$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$74$$)
    }, $_load_node_J$:function($obj$$75$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$13$$ = this;
      this.$_load_node_json$($obj$$75$$, function() {
        $_this$$13$$.$_emitEvent$({obj:$_this$$13$$.$_getNode$($obj$$75$$)}, "load_node");
        $s_call$$1$$.call(this)
      }, $e_call$$1$$)
    }, $_is_loaded_J$:function($obj$$76$$) {
      var $s$$14$$ = this.options.data;
      $obj$$76$$ = this.$_getNode$($obj$$76$$);
      return-1 == $obj$$76$$ || !$obj$$76$$ || !$s$$14$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$18$$.isFunction($s$$14$$.data) || $obj$$76$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$76$$.children("ul").children("li").length
    }, $_load_node_H$:function($obj$$77$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$14$$ = this;
      this.$_load_node_html$($obj$$77$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$77$$)}, "load_node");
        $s_call$$2$$.call(this)
      }, $e_call$$2$$)
    }, $_is_loaded_H$:function($obj$$78$$) {
      var $s$$15$$ = this.options.data, $data$$114$$ = null, $ajax$$ = null;
      $s$$15$$ && ($data$$114$$ = $s$$15$$.data || null, $ajax$$ = $s$$15$$.ajax || null);
      $obj$$78$$ = this.$_getNode$($obj$$78$$);
      return-1 == $obj$$78$$ || !$obj$$78$$ || !$ajax$$ && !$$$$18$$.isFunction($data$$114$$) || $obj$$78$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$78$$.children("ul").children("li").size()
    }, reselect:function() {
      var $_this$$15$$ = this, $s$$16$$ = this.$_data$.ui.$to_select$, $s$$16$$ = $$$$18$$.map($$$$18$$.makeArray($s$$16$$), function($n$$24$$) {
        return"#" + $n$$24$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
      });
      $$$$18$$.each($s$$16$$, function($i$$240$$, $val$$50$$) {
        $val$$50$$ && "#" !== $val$$50$$ && $_this$$15$$.select($val$$50$$)
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter($JSCompiler_get$$("parentNode"));
      this.$_emitEvent$(null, "reselect")
    }, save_selected:function() {
      var $_this$$16$$ = this;
      this.$_data$.ui.$to_select$ = [];
      this.$_data$.ui.selected.each(function() {
        this.id && $_this$$16$$.$_data$.ui.$to_select$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
      });
      this.$_emitEvent$(this.$_data$.ui.$to_select$, "save_selected")
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && ($$$$18$$.isArray($rb$$1$$) || ($rb$$1$$ = [$rb$$1$$]), $$$$18$$.each($rb$$1$$, $JSCompiler_emptyFn$$()))
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback");
      return{$i$:this.$_index$, $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data}
    }, set_rollback:function($html$$3$$, $data$$115$$) {
      this.$_$container$ && this.$_$container_ul$ && this.$_$container_ul$.empty().append($html$$3$$);
      this.data = $data$$115$$;
      this.$_emitEvent$(null, "set_rollback")
    }, $_load_node_tree$:function($obj$$79$$, $s_call$$3$$) {
      var $d$$6_rslt$$6$$ = this.$_JsonDSToJson$($obj$$79$$);
      if($d$$6_rslt$$6$$.success && $d$$6_rslt$$6$$.$js$) {
        var $$u_bTree$$ = !$obj$$79$$ || -1 === $obj$$79$$, $s$$17$$ = this.options.data;
        if($s$$17$$.data && !$s$$17$$.ajax || $s$$17$$.data && $s$$17$$.ajax && $$u_bTree$$) {
          $$u_bTree$$ && (($d$$6_rslt$$6$$ = this.$_parseJson$($d$$6_rslt$$6$$.$js$, $obj$$79$$)) ? (this.$_$container_ul$.empty().append($d$$6_rslt$$6$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this)
        }else {
          if(!$s$$17$$.data && $s$$17$$.ajax || $s$$17$$.data && $s$$17$$.ajax && !$$u_bTree$$) {
            ($d$$6_rslt$$6$$ = this.$_parseJson$($d$$6_rslt$$6$$.$js$, $obj$$79$$)) ? ($$u_bTree$$ ? ($$u_bTree$$ = this.$_$container_ul$, $$u_bTree$$.empty().append($d$$6_rslt$$6$$.children()), $$u_bTree$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$.attr("aria-multiselectable", !0)) : ($obj$$79$$.append($d$$6_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$79$$.removeData("oj-tree-is-loading")), 
            this.$_clean_node$($obj$$79$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$79$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$79$$.removeData("oj-tree-is-loading"), $s$$17$$.correct_state && (this.$_correct_state$($obj$$79$$), $s_call$$3$$ && $s_call$$3$$.call(this)))
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$12$$, $node$$47$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$20$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$12$$ && ($parentKey$$12$$ = null, $range$$20$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$12$$);
      0 < $cc$$ && ($range$$20$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$12$$, $range$$20$$, {success:$$$$18$$.proxy(function($jns$$) {
        for(var $c$$24$$ = $jns$$.$getCount$(), $attr$$18_n$$25_r$$3$$, $i$$242$$ = 0;$i$$242$$ < $c$$24$$;$i$$242$$++) {
          $node$$47$$ = {};
          ($attr$$18_n$$25_r$$3$$ = $jns$$.getData($i$$242$$)) && ($node$$47$$.attr = $attr$$18_n$$25_r$$3$$);
          $node$$47$$.title = $jns$$.$m_nodes$[$i$$242$$].title;
          $attr$$18_n$$25_r$$3$$.$metadata$ && ($node$$47$$.metadata = $jns$$.$m_nodes$[$i$$242$$].$metadata$);
          var $key$$92$$ = $node$$47$$.attr.id;
          $attr$$18_n$$25_r$$3$$ = $ds$$.$getChildCount$($key$$92$$);
          0 < $attr$$18_n$$25_r$$3$$ && ($attr$$18_n$$25_r$$3$$ = this.$_JsonDSToJson$($key$$92$$, $node$$47$$), $node$$47$$.children = $attr$$18_n$$25_r$$3$$.$js$);
          $arJson$$.push($node$$47$$)
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$
      }, this), error:function() {
        $rslt$$7$$.success = !1
      }}));
      return $rslt$$7$$
    }, $_refresh_json$:function($obj$$80$$) {
      $obj$$80$$ = this.$_getNode$($obj$$80$$);
      if(!this.$_data$.$core$.locked) {
        var $bTree$$1$$ = !$obj$$80$$ || -1 !== $obj$$80$$ || !$obj$$80$$.length;
        if($bTree$$1$$ || !$obj$$80$$.hasClass("oj-disabled")) {
          var $s$$18$$ = this.options.data.json;
          !$bTree$$1$$ && (this.$_data$.$ds$.$progressiveUnload$ && ($$$$18$$.isFunction($s$$18$$.data) || $s$$18$$.ajax)) && $obj$$80$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$80$$)
        }
      }
    }, $_load_node_json$:function($obj$$81$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$7_s$$19$$ = this.$_getOptions$().data, $data$$116$$ = $d$$7_s$$19$$ && $d$$7_s$$19$$.data || null, $ajax$$1$$ = $d$$7_s$$19$$ && $d$$7_s$$19$$.ajax || null;
      !$d$$7_s$$19$$ || ($data$$116$$ || $ajax$$1$$) || ($data$$116$$ = $d$$7_s$$19$$);
      if(($obj$$81$$ = this.$_getNode$($obj$$81$$)) && -1 !== $obj$$81$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$81$$.is(".oj-tree-open, .oj-tree-leaf") && 0 === $obj$$81$$.children("ul").children("li").length && $obj$$81$$.data("oj-tree-children")) {
        if($d$$7_s$$19$$ = this.$_parseJson$($obj$$81$$.data("oj-tree-children"), $obj$$81$$)) {
          $obj$$81$$.append($d$$7_s$$19$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$81$$.removeData("oj-tree-children")
        }
        this.$_clean_node$($obj$$81$$);
        $s_call$$4$$ && $s_call$$4$$.call(this)
      }else {
        if($obj$$81$$ && -1 !== $obj$$81$$) {
          if($obj$$81$$.data("oj-tree-is-loading")) {
            return
          }
          $obj$$81$$.data("oj-tree-is-loading", !0)
        }
        switch(!0) {
          case !$data$$116$$ && !$ajax$$1$$:
            throw"ojTree - neither data nor ajax settings supplied.";;
          case $$$$18$$.isFunction($data$$116$$):
            $data$$116$$.call(this, $obj$$81$$, $$$$18$$.proxy(function($d$$8$$) {
              ($d$$8$$ = this.$_parseJson$($d$$8$$, $obj$$81$$)) ? (-1 !== $obj$$81$$ && $obj$$81$$ ? ($obj$$81$$.append($d$$8$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$8$$.children()), this.$_clean_node$($obj$$81$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$81$$ && $obj$$81$$ ? ($obj$$81$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$81$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this))
            }, this));
            break;
          case !!$data$$116$$ && !$ajax$$1$$ || !!$data$$116$$ && !!$ajax$$1$$ && (!$obj$$81$$ || -1 === $obj$$81$$):
            $obj$$81$$ && -1 != $obj$$81$$ || (($d$$7_s$$19$$ = this.$_parseJson$($data$$116$$, $obj$$81$$)) ? (this.$_$container_ul$.empty().append($d$$7_s$$19$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$116$$ && !!$ajax$$1$$ || !!$data$$116$$ && !!$ajax$$1$$ && $obj$$81$$ && -1 !== $obj$$81$$:
            $error_func$$ = function $$error_func$$$($x$$55$$, $t$$6$$, $e$$80$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $t$$6$$, $e$$80$$, $x$$55$$);
              -1 != $obj$$81$$ && $obj$$81$$.length ? ($obj$$81$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading"), "success" === $t$$6$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$81$$)) : "success" === $t$$6$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this)
            }, $success_func$$ = function $$success_func$$$($d$$9$$, $$u$$1_t$$7$$, $x$$56$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$9$$ = $sf$$.call(this, $d$$9$$, $$u$$1_t$$7$$, $x$$56$$) || $d$$9$$);
              if("" === $d$$9$$ || $d$$9$$ && $d$$9$$.toString && "" === $d$$9$$.toString().replace(/^[\s\n]+$/, "") || !$$$$18$$.isArray($d$$9$$) && !$$$$18$$.isPlainObject($d$$9$$)) {
                return $error_func$$.call(this, $x$$56$$, $$u$$1_t$$7$$, "")
              }
              ($d$$9$$ = this.$_parseJson$($d$$9$$, $obj$$81$$)) ? (-1 !== $obj$$81$$ && $obj$$81$$ ? ($obj$$81$$.append($d$$9$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading")) : ($$u$$1_t$$7$$ = this.$_$container_ul$, $$u$$1_t$$7$$.empty().append($d$$9$$.children()), $$u$$1_t$$7$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u$$1_t$$7$$.attr("aria-multiselectable", !0)), 
              this.$_clean_node$($obj$$81$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$81$$ && $obj$$81$$ ? ($obj$$81$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$81$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this))
            }, $d$$7_s$$19$$.ajax.context = this, $d$$7_s$$19$$.ajax.error = $error_func$$, $d$$7_s$$19$$.ajax.success = $success_func$$, $d$$7_s$$19$$.dataType || ($d$$7_s$$19$$.ajax.dataType = "json"), $$$$18$$.isFunction($d$$7_s$$19$$.ajax.url) && ($d$$7_s$$19$$.ajax.url = $d$$7_s$$19$$.ajax.url.call(this, $obj$$81$$)), $$$$18$$.isFunction($d$$7_s$$19$$.ajax.data) && ($d$$7_s$$19$$.ajax.data = $d$$7_s$$19$$.ajax.data.call(this, $obj$$81$$)), $$$$18$$.ajax($d$$7_s$$19$$.ajax)
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$82_ul2$$, $isRecurse_ul1$$) {
      var $d$$10$$ = !1, $tmp$$5$$, $i$$243$$, $j$$35$$;
      if(!$js$$1$$) {
        return $d$$10$$
      }
      this.$_data$.$ds$.$progressiveUnload$ && ($obj$$82_ul2$$ && -1 !== $obj$$82_ul2$$) && $obj$$82_ul2$$.data("oj-tree-children", $d$$10$$);
      if("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$18$$.parseJSON($js$$1$$)
        }catch($err$$6$$) {
          $js$$1$$ = []
        }
      }
      if($$$$18$$.isArray($js$$1$$)) {
        $d$$10$$ = $$$$18$$("\x3cul\x3e");
        if(!$js$$1$$.length) {
          return!1
        }
        $i$$243$$ = 0;
        for($j$$35$$ = $js$$1$$.length;$i$$243$$ < $j$$35$$;$i$$243$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$243$$], $obj$$82_ul2$$, !0), $tmp$$5$$.length && ($d$$10$$ = $d$$10$$.append($tmp$$5$$))
        }
        $d$$10$$ = $d$$10$$.children()
      }else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        if(!$js$$1$$.data && "" !== $js$$1$$.data) {
          if(void 0 !== $js$$1$$.title) {
            $js$$1$$.data = $js$$1$$.title, delete $js$$1$$.title
          }else {
            return $d$$10$$
          }
        }
        $d$$10$$ = $$$$18$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && $d$$10$$.attr($js$$1$$.attr);
        $js$$1$$.metadata && $d$$10$$.data($js$$1$$.metadata);
        ($js$$1$$.state || $js$$1$$.children && 0 === $js$$1$$.children.length) && $d$$10$$.addClass("oj-tree-" + ("expanded" === $js$$1$$.state ? "open" : "closed"));
        $$$$18$$.isArray($js$$1$$.data) || ($tmp$$5$$ = $js$$1$$.data, $js$$1$$.data = [], $js$$1$$.data.push($tmp$$5$$));
        var $ht$$1$$ = this.$_data$.$core$.$htmlTitles$;
        $$$$18$$.each($js$$1$$.data, function($i$$244$$, $m$$22$$) {
          $tmp$$5$$ = $$$$18$$("\x3ca tabindex\x3d'-1' /\x3e");
          $$$$18$$.isFunction($m$$22$$) && ($m$$22$$ = $m$$22$$.call(this, $js$$1$$));
          if("string" == typeof $m$$22$$) {
            $tmp$$5$$.attr("href", "#")[$ht$$1$$ ? "html" : "text"]($m$$22$$)
          }else {
            $m$$22$$.attr || ($m$$22$$.attr = {});
            for(var $x$$57$$ in $m$$22$$) {
              "attr" !== $x$$57$$ && ($m$$22$$.attr[$x$$57$$] = $m$$22$$[$x$$57$$])
            }
            $m$$22$$.attr.href || ($m$$22$$.attr.href = "#");
            $tmp$$5$$.attr($m$$22$$.attr);
            $tmp$$5$$[$ht$$1$$ ? "html" : "text"]($m$$22$$.title ? $m$$22$$.title : $js$$1$$.title);
            $m$$22$$.language && $tmp$$5$$.addClass($m$$22$$.language)
          }
          $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
          !$m$$22$$.icon && $js$$1$$.icon && ($m$$22$$.icon = $js$$1$$.icon);
          $m$$22$$.icon && (-1 === $m$$22$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$22$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$22$$.icon + "') center center no-repeat"));
          $d$$10$$.append($tmp$$5$$)
        });
        $d$$10$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$10$$.addClass("oj-tree-closed").attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$10$$.data("oj-tree-children", $js$$1$$.children), $$$$18$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$82_ul2$$, !0), $tmp$$5$$.length && ($obj$$82_ul2$$ = $$$$18$$("\x3cul role\x3d'group' /\x3e"), 
        $obj$$82_ul2$$.append($tmp$$5$$), $d$$10$$.append($obj$$82_ul2$$)))))
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$18$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$10$$), $d$$10$$ = $isRecurse_ul1$$);
      return $d$$10$$
    }, $_getJson$:function($obj$$83$$, $li_attr$$, $a_attr$$, $is_callback$$) {
      var $result$$18$$ = [], $s$$20$$ = this.options, $_this$$17$$ = this, $tmp1$$, $tmp2$$, $li$$, $a$$60$$, $t$$8$$, $lang$$;
      ($obj$$83$$ = this.$_getNode$($obj$$83$$)) && -1 !== $obj$$83$$ || ($obj$$83$$ = this.$_$container$.find("\x3e ul \x3e li"));
      $li_attr$$ = $$$$18$$.isArray($li_attr$$) ? $li_attr$$ : ["id", "class"];
      !$is_callback$$ && $s$$20$$.types && $li_attr$$.push($s$$20$$.types.attr);
      $a_attr$$ = $$$$18$$.isArray($a_attr$$) ? $a_attr$$ : [];
      $obj$$83$$.each(function() {
        $li$$ = $$$$18$$(this);
        $tmp1$$ = {data:[]};
        $li_attr$$.length && ($tmp1$$.attr = {});
        $$$$18$$.each($li_attr$$, function($i$$245$$, $v$$2$$) {
          ($tmp2$$ = $li$$.attr($v$$2$$)) && ($tmp2$$.length && $tmp2$$.replace(/oj-tree[^ ]*/ig, "").length) && ($tmp1$$.attr[$v$$2$$] = (" " + $tmp2$$).replace(/ oj-tree[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, ""))
        });
        $li$$.hasClass("oj-tree-open") && ($tmp1$$.state = "open");
        $li$$.hasClass("oj-tree-closed") && ($tmp1$$.state = "closed");
        $li$$.data() && ($tmp1$$.$metadata$ = $li$$.data());
        $a$$60$$ = $li$$.children("a");
        $a$$60$$.each(function() {
          $t$$8$$ = $$$$18$$(this);
          $a_attr$$.length || -1 !== $$$$18$$.inArray("languages", $s$$20$$.plugins) || $t$$8$$.children("ins").get(0).style.backgroundImage.length || $t$$8$$.children("ins").get(0).className && $t$$8$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").length ? ($lang$$ = !1, -1 !== $$$$18$$.inArray("languages", $s$$20$$.plugins) && ($$$$18$$.isArray($s$$20$$.languages) && $s$$20$$.languages.length) && $$$$18$$.each($s$$20$$.languages, function($l$$8$$, $lv$$) {
            if($t$$8$$.hasClass($lv$$)) {
              return $lang$$ = $lv$$, !1
            }
          }), $tmp2$$ = {attr:{}, title:$_this$$17$$.getText($t$$8$$, $lang$$)}, $$$$18$$.each($a_attr$$, function($k$$7$$, $z$$4$$) {
            $tmp2$$.attr[$z$$4$$] = (" " + ($t$$8$$.attr($z$$4$$) || "")).replace(/ oj-tree[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "")
          }), -1 !== $$$$18$$.inArray("languages", $s$$20$$.plugins) && ($$$$18$$.isArray($s$$20$$.languages) && $s$$20$$.languages.length) && $$$$18$$.each($s$$20$$.languages, function($k$$8$$, $z$$5$$) {
            if($t$$8$$.hasClass($z$$5$$)) {
              return $tmp2$$.language = $z$$5$$, !0
            }
          }), $t$$8$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/^\s+$/ig, "").length && ($tmp2$$.$icon$ = $t$$8$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "")), $t$$8$$.children("ins").get(0).style.backgroundImage.length && ($tmp2$$.$icon$ = $t$$8$$.children("ins").get(0).style.backgroundImage.replace("url(", "").replace(")", ""))) : $tmp2$$ = $_this$$17$$.getText($t$$8$$);
          1 < $a$$60$$.length ? $tmp1$$.data.push($tmp2$$) : $tmp1$$.data = $tmp2$$
        });
        $li$$ = $li$$.find("\x3e ul \x3e li");
        $li$$.length && ($tmp1$$.children = $_this$$17$$.$_getJson$($li$$, $li_attr$$, $a_attr$$, !0));
        $result$$18$$.push($tmp1$$)
      });
      return $result$$18$$
    }, $_correct_state$:function($obj$$84$$) {
      $obj$$84$$ = this.$_getNode$($obj$$84$$);
      if(!$obj$$84$$ || -1 === $obj$$84$$) {
        return!1
      }
      $obj$$84$$.removeClass("oj-tree-closed oj-tree-open").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      this.$_emitEvent$({obj:$obj$$84$$}, "correct_state")
    }, $_core_notify$:function($n$$26$$, $data$$117$$) {
      $data$$117$$.$opened$ && this.$_expand$($n$$26$$, !1, !0)
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded")
    }, $_load_node_html$:function($obj$$85$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$11_s$$21$$, $data$$118$$ = ($d$$11_s$$21$$ = this.options.data) && $d$$11_s$$21$$.data || null, $ajax$$2$$ = $d$$11_s$$21$$ && $d$$11_s$$21$$.ajax || null;
      if(($obj$$85$$ = this.$_getNode$($obj$$85$$)) && -1 !== $obj$$85$$) {
        if($obj$$85$$.data("oj-tree-is-loading")) {
          return
        }
        $obj$$85$$.data("oj-tree-is-loading", !0)
      }
      switch(!0) {
        case !$data$$118$$ && !$ajax$$2$$ && $d$$11_s$$21$$ && "string" === typeof $d$$11_s$$21$$:
          this.$_loadHtmlString$($d$$11_s$$21$$, $obj$$85$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$18$$.isFunction($data$$118$$):
          $data$$118$$.call(this, $obj$$85$$, $$$$18$$.proxy(function($d$$12$$) {
            this.$_loadHtmlString$($d$$12$$, $obj$$85$$, $s_call$$5$$, $e_call$$5$$)
          }, this));
          break;
        case !$data$$118$$ && !$ajax$$2$$:
          $obj$$85$$ && -1 != $obj$$85$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$originalContainerHtml$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$118$$ && !$ajax$$2$$ || !!$data$$118$$ && !!$ajax$$2$$ && (!$obj$$85$$ || -1 === $obj$$85$$):
          $obj$$85$$ && -1 != $obj$$85$$ || ($d$$11_s$$21$$ = $$$$18$$($data$$118$$), $d$$11_s$$21$$.is("ul") || ($d$$11_s$$21$$ = $$$$18$$("\x3cul /\x3e").append($d$$11_s$$21$$)), this.$_$container_ul$.empty().append($d$$11_s$$21$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$118$$ && !!$ajax$$2$$ || !!$data$$118$$ && !!$ajax$$2$$ && $obj$$85$$ && -1 !== $obj$$85$$:
          $obj$$85$$ = this.$_getNode$($obj$$85$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$58$$, $t$$9$$, $e$$81$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$58$$, $t$$9$$, $e$$81$$);
            -1 != $obj$$85$$ && $obj$$85$$.length ? ($obj$$85$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$85$$.removeData("oj-tree-is-loading"), "success" === $t$$9$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$85$$)) : "success" === $t$$9$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this)
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$13$$, $t$$10$$, $x$$59$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$13$$ = $sf$$1$$.call(this, $d$$13$$, $t$$10$$, $x$$59$$) || $d$$13$$);
            if("" === $d$$13$$ || $d$$13$$ && $d$$13$$.toString && "" === $d$$13$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$59$$, $t$$10$$, "")
            }
            $d$$13$$ ? ($d$$13$$ = $$$$18$$($d$$13$$), $d$$13$$.is("ul") || ($d$$13$$ = $$$$18$$("\x3cul /\x3e").append($d$$13$$)), -1 != $obj$$85$$ && $obj$$85$$ ? ($obj$$85$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$85$$.append($d$$13$$).children("ul").find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $obj$$85$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$13$$.children()).find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_clean_node$($obj$$85$$), $s_call$$5$$ && $s_call$$5$$.call(this)) : ($obj$$85$$ && -1 !== $obj$$85$$ ? ($obj$$85$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$85$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$85$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : 
            this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"))
          }, $d$$11_s$$21$$.ajax.context = this, $d$$11_s$$21$$.ajax.error = $error_func$$1$$, $d$$11_s$$21$$.ajax.success = $success_func$$1$$, $d$$11_s$$21$$.ajax.dataType || ($d$$11_s$$21$$.ajax.dataType = "html"), $$$$18$$.isFunction($d$$11_s$$21$$.ajax.url) && ($d$$11_s$$21$$.ajax.url = $d$$11_s$$21$$.ajax.url.call(this, $obj$$85$$)), $$$$18$$.isFunction($d$$11_s$$21$$.ajax.data) && ($d$$11_s$$21$$.ajax.data = $d$$11_s$$21$$.ajax.data.call(this, $obj$$85$$)), $$$$18$$.ajax($d$$11_s$$21$$.ajax)
      }
    }, $_loadHtmlString$:function($s$$22$$, $obj$$86$$, $s_call$$6$$) {
      $s$$22$$ && "" !== $s$$22$$ && $s$$22$$.toString && "" !== $s$$22$$.toString().replace(/^[\s\n]+$/, "") ? ($s$$22$$ = $$$$18$$($s$$22$$), $s$$22$$.is("ul") || ($s$$22$$ = $$$$18$$("\x3cul /\x3e").append($s$$22$$)), -1 != $obj$$86$$ && $obj$$86$$ ? ($obj$$86$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$86$$.append($s$$22$$).children("ul").find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
      }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $obj$$86$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($s$$22$$.children()).find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
      }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_clean_node$($obj$$86$$), $s_call$$6$$ && $s_call$$6$$.call(this)) : $obj$$86$$ && -1 !== $obj$$86$$ ? ($obj$$86$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$86$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$86$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : 
      this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && $s_call$$6$$.call(this))
    }, $_dnd_prepare$:function() {
      var $a$$61_vars$$ = this.$_data$.dnd.$vars$;
      if($a$$61_vars$$.$r$ && $a$$61_vars$$.$r$.length) {
        this.$_data$.dnd.off = $a$$61_vars$$.$r$.offset();
        this.$_isRtl$ && (this.$_data$.dnd.off.right = this.$_data$.dnd.off.left + $a$$61_vars$$.$r$.width());
        if(this.$_data$.dnd.$foreign$) {
          return $a$$61_vars$$ = this.options.dnd.drag_check.call(this, {o:$a$$61_vars$$.$o$, r:$a$$61_vars$$.$r$}), this.$_data$.dnd.after = $a$$61_vars$$.after, this.$_data$.dnd.before = $a$$61_vars$$.before, this.$_data$.dnd.inside = $a$$61_vars$$.inside, this.$_data$.dnd.$prepared$ = !0, this.$_dnd_show$()
        }
        this.$_prepare_move$($a$$61_vars$$.$o$, $a$$61_vars$$.$r$, "before");
        this.$_data$.dnd.before = this.check_move();
        this.$_prepare_move$($a$$61_vars$$.$o$, $a$$61_vars$$.$r$, "after");
        this.$_data$.dnd.after = this.check_move();
        this.$_is_loaded$($a$$61_vars$$.$r$) ? (this.$_prepare_move$($a$$61_vars$$.$o$, $a$$61_vars$$.$r$, "inside"), this.$_data$.dnd.inside = this.check_move()) : this.$_data$.dnd.inside = !1;
        this.$_data$.dnd.$prepared$ = !0;
        return this.$_dnd_show$()
      }
    }, $_dnd_show$:function() {
      var $dnd_pos$$9$$ = this.$_data$.dnd;
      if($dnd_pos$$9$$.$prepared$) {
        var $o$$4$$ = ["before", "inside", "after"], $r$$4$$ = !1, $ctl$$ = $dnd_pos$$9$$.$ctl$, $vars$$1$$ = $dnd_pos$$9$$.$vars$, $o$$4$$ = $dnd_pos$$9$$.$w$ < this.$_data$.$core$.$li_height$ / 3 ? ["before", "inside", "after"] : $dnd_pos$$9$$.$w$ <= 2 * this.$_data$.$core$.$li_height$ / 3 ? $dnd_pos$$9$$.$w$ < this.$_data$.$core$.$li_height$ / 2 ? ["inside", "before", "after"] : ["inside", "after", "before"] : ["after", "inside", "before"];
        $$$$18$$.each($o$$4$$, $$$$18$$.proxy(function($i$$246$$, $val$$52$$) {
          if(this.$_data$.dnd[$val$$52$$]) {
            return $ctl$$.$helper$.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok"), $r$$4$$ = $val$$52$$, !1
          }
        }, this));
        !1 === $r$$4$$ && $ctl$$.$helper$.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
        $dnd_pos$$9$$ = this.$_isRtl$ ? this.$_data$.dnd.off.right - 18 : this.$_data$.dnd.off.left + 10;
        switch($r$$4$$) {
          case "before":
            $vars$$1$$.$m$.css({left:$dnd_pos$$9$$ + "px", top:this.$_data$.dnd.off.top - 6 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$dnd_pos$$9$$ + 8 + "px", top:this.$_data$.dnd.off.top - 1 + "px"}).show();
            break;
          case "after":
            $vars$$1$$.$m$.css({left:$dnd_pos$$9$$ + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 6 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$dnd_pos$$9$$ + 8 + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 1 + "px"}).show();
            break;
          case "inside":
            $vars$$1$$.$m$.css({left:$dnd_pos$$9$$ + (this.$_isRtl$ ? -4 : 4) + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ / 2 - 5 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
            break;
          default:
            $vars$$1$$.$m$.hide(), $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide()
        }
        return $vars$$1$$.$last_pos$ = $r$$4$$
      }
    }, $_dnd_enter$:function($obj$$87_openTimeout_s$$23$$) {
      var $dnd$$1$$ = this.$_data$.dnd, $vars$$2$$ = $dnd$$1$$.$vars$;
      $dnd$$1$$.$mto$ && (clearTimeout($dnd$$1$$.$mto$), $dnd$$1$$.$mto$ = !1);
      $dnd$$1$$.$prepared$ = !1;
      $vars$$2$$.$r$ = this.$_getNode$($obj$$87_openTimeout_s$$23$$);
      $obj$$87_openTimeout_s$$23$$ = this.options.dnd;
      var $checkTimeout$$ = $obj$$87_openTimeout_s$$23$$.check_timeout;
      $checkTimeout$$ ? ($dnd$$1$$.$to1$ && clearTimeout($dnd$$1$$.$to1$), $dnd$$1$$.$to1$ = setTimeout($$$$18$$.proxy(this.$_dnd_prepare$, this), $checkTimeout$$)) : this.$_dnd_prepare$();
      ($obj$$87_openTimeout_s$$23$$ = $obj$$87_openTimeout_s$$23$$.open_timeout) ? ($dnd$$1$$.$to2$ && clearTimeout($dnd$$1$$.$to2$), $vars$$2$$.$r$ && ($vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-tree-closed")) && ($dnd$$1$$.$to2$ = setTimeout($$$$18$$.proxy(this.$_dnd_open$, this), $obj$$87_openTimeout_s$$23$$))) : $vars$$2$$.$r$ && ($vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-tree-closed")) && this.$_dnd_open$()
    }, $_dnd_leave$:function($e$$82$$) {
      var $dnd$$2$$ = this.$_data$.dnd, $vars$$3$$ = this.$_data$.dnd.$vars$;
      $dnd$$2$$.after = !1;
      $dnd$$2$$.before = !1;
      $dnd$$2$$.inside = !1;
      this.$_data$.dnd.$ctl$.$helper$.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
      $vars$$3$$.$m$.hide();
      $vars$$3$$.$ml$ && $vars$$3$$.$ml$.hide();
      $vars$$3$$.$r$ && $vars$$3$$.$r$[0] === $e$$82$$.target.parentNode && ($dnd$$2$$.$to1$ && (clearTimeout($dnd$$2$$.$to1$), $dnd$$2$$.$to1$ = !1), $dnd$$2$$.$to2$ && (clearTimeout($dnd$$2$$.$to2$), $dnd$$2$$.$to2$ = !1))
    }, $_dnd_open$:function() {
      var $vars$$4$$ = this.$_data$.dnd.$vars$;
      this.$_data$.dnd.$to2$ = !1;
      this.expand($vars$$4$$.$r$, $$$$18$$.proxy(this.$_dnd_prepare$, this), !0)
    }, $_dnd_finish$:function($e$$83$$) {
      var $dnd$$3$$ = this.$_data$.dnd, $vars$$5$$ = this.$_data$.dnd.$vars$;
      $dnd$$3$$.$foreign$ ? ($dnd$$3$$.after || $dnd$$3$$.before || $dnd$$3$$.inside) && this.options.dnd.drag_finish.call(this, {o:$vars$$5$$.$o$, r:$vars$$5$$.$r$, p:$vars$$5$$.$last_pos$}) : (this.$_dnd_prepare$(), this.$_move_node$($vars$$5$$.$o$, $vars$$5$$.$r$, $vars$$5$$.$last_pos$, $e$$83$$[this.options.dnd.copy_modifier + "Key"]));
      $vars$$5$$.$o$ = !1;
      $vars$$5$$.$r$ = !1;
      $vars$$5$$.$m$.hide();
      $vars$$5$$.$ml$ && $vars$$5$$.$ml$.hide()
    }, $_start_drag$:function($obj$$88$$, $e$$84$$) {
      var $dnd$$4$$ = this.$_data$.dnd, $vars$$6$$ = this.$_data$.dnd.$vars$;
      $vars$$6$$.$o$ = this.$_getNode$($obj$$88$$);
      if(!$vars$$6$$.$o$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        this.$_data$.ui && this.isSelected($vars$$6$$.$o$) && ($vars$$6$$.$o$ = this.$_getNode$(null, !0));
        var $dt$$ = 1 < $vars$$6$$.$o$.length ? this.$getTranslatedString$("m_multisel") : this.getText($vars$$6$$.$o$), $cnt$$ = this.$_$container$;
        this.$_data$.$core$.$htmlTitles$ || ($dt$$ = $dt$$.replace(/</ig, "\x26lt;").replace(/>/ig, "\x26gt;"));
        this.$_drag_start$($e$$84$$, {$jstree$:!0, $obj$:$vars$$6$$.$o$}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $dt$$);
        this.$_data$.$themes$ && ($vars$$6$$.$m$ && $vars$$6$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dnd$$4$$.$ctl$.$helper$.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
        $dnd$$4$$.$cof$ = $cnt$$.offset();
        $dnd$$4$$.$cw$ = parseInt($cnt$$.width(), 10);
        $dnd$$4$$.ch = parseInt($cnt$$.height(), 10);
        $dnd$$4$$.active = !0
      }
    }, $_drag_start$:function($e$$85$$, $data$$119$$, $html$$4$$) {
      var $ctl$$1$$ = this.$_data$.dnd.$ctl$;
      $ctl$$1$$.$is_drag$ && this.$_drag_stop$();
      try {
        $e$$85$$.currentTarget.unselectable = "on", $e$$85$$.currentTarget.onselectstart = $JSCompiler_returnArg$$(!1), $e$$85$$.currentTarget.style && ($e$$85$$.currentTarget.style.MozUserSelect = "none")
      }catch($err$$7$$) {
      }
      $ctl$$1$$.$init_x$ = $e$$85$$.pageX;
      $ctl$$1$$.$init_y$ = $e$$85$$.pageY;
      $ctl$$1$$.$user_data$ = $data$$119$$;
      $ctl$$1$$.$is_down$ = !0;
      $ctl$$1$$.$helper$ = $$$$18$$("\x3cdiv class\x3d'ojtreeu-dragged' /\x3e").html($html$$4$$);
      $$$$18$$(document).bind("mousemove", this.$_drag$.bind(this));
      $$$$18$$(document).bind("mouseup", this.$_drag_stop$.bind(this));
      return!1
    }, $_drag$:function($e$$86$$) {
      var $ctl$$2$$ = this.$_data$.dnd.$ctl$, $vars$$7$$ = this.$_data$.dnd.$vars$;
      if($ctl$$2$$.$is_down$) {
        if(!$ctl$$2$$.$is_drag$) {
          if(5 < Math.abs($e$$86$$.pageX - $ctl$$2$$.$init_x$) || 5 < Math.abs($e$$86$$.pageY - $ctl$$2$$.$init_y$)) {
            $ctl$$2$$.$helper$.appendTo("body"), $ctl$$2$$.$is_drag$ = !0, $$$$18$$(document).triggerHandler("drag_start.ojtreeu", [{event:$e$$86$$, data:$ctl$$2$$.$user_data$}])
          }else {
            return
          }
        }
        if("mousemove" === $e$$86$$.type) {
          var $d$$14_l$$9$$ = $$$$18$$(document), $t$$11$$ = $d$$14_l$$9$$.scrollTop(), $d$$14_l$$9$$ = $d$$14_l$$9$$.scrollLeft();
          20 > $e$$86$$.pageY - $t$$11$$ ? ($vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "up", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$18$$(document).scrollTop($$$$18$$(document).scrollTop() - $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $$$$18$$(window).height() - ($e$$86$$.pageY - $t$$11$$) ? ($vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "down", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$18$$(document).scrollTop(Number($$$$18$$(document).scrollTop()) + $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $e$$86$$.pageX - $d$$14_l$$9$$ ? ($vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "left", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$18$$(document).scrollLeft($$$$18$$(document).scrollLeft() - $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0);
          20 > $$$$18$$(window).width() - ($e$$86$$.pageX - $d$$14_l$$9$$) ? ($vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "right", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$18$$(document).scrollLeft(Number($$$$18$$(document).scrollLeft()) + $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0)
        }
        $ctl$$2$$.$helper$.css({left:$e$$86$$.pageX + $ctl$$2$$.$helper_left$ + "px", top:$e$$86$$.pageY + $ctl$$2$$.$helper_top$ + "px"});
        $$$$18$$(document).triggerHandler("drag.ojtreeu", [{event:$e$$86$$, data:$ctl$$2$$.$user_data$}])
      }
    }, $_drag_stop$:function($e$$87$$) {
      var $vars$$8$$ = this.$_data$.dnd.$vars$, $ctl$$3$$ = this.$_data$.dnd.$ctl$;
      $vars$$8$$.$sli$ && clearInterval($vars$$8$$.$sli$);
      $vars$$8$$.$sti$ && clearInterval($vars$$8$$.$sti$);
      $$$$18$$(document).unbind("mousemove", this.$_drag$.bind(this));
      $$$$18$$(document).unbind("mouseup", this.$_drag_stop$.bind(this));
      $$$$18$$(document).triggerHandler("drag_stop.ojtreeu", [{event:$e$$87$$ ? $e$$87$$ : {}, data:$ctl$$3$$.$user_data$}]);
      $ctl$$3$$.$helper$.remove();
      $ctl$$3$$.$init_x$ = 0;
      $ctl$$3$$.$init_y$ = 0;
      $ctl$$3$$.$user_data$ = {};
      $ctl$$3$$.$is_down$ = !1;
      $ctl$$3$$.$is_drag$ = !1
    }, $_save_opened$:function() {
      var $_this$$18$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-tree-open").each(function() {
        this.id && $_this$$18$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
      });
      this.$_emitEvent$($_this$$18$$.$_data$.$core$.$toExpand$, "save_opened")
    }, $_reload_nodes$:function($bExpandAll_is_callback$$1$$) {
      var $_this$$19$$ = this, $done$$ = !0, $current$$6$$ = [], $remaining$$ = [];
      $bExpandAll_is_callback$$1$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0, ($bExpandAll_is_callback$$1$$ = "all" === this.$_data$.$core$.$toExpand$) ? this.$_data$.$core$.$toExpand$ = [] : "array" === $$$$18$$.type(this.$_data$.$core$.$toExpand$) && (0 < this.$_data$.$core$.$toExpand$.length && "all" === this.$_data$.$core$.$toExpand$[0]) && (this.$_data$.$core$.$toExpand$.length = 0, $bExpandAll_is_callback$$1$$ = !0), $bExpandAll_is_callback$$1$$ && this.$_$container_ul$.find("li.oj-tree-closed").each(function() {
        $$$$18$$(this).attr("id");
        $_this$$19$$.$_data$.$core$.$toExpand$.push("#" + $$$$18$$(this).attr("id"))
      }), this.$_data$.$core$.$toExpand$ = $$$$18$$.map($$$$18$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$27$$) {
        return"#" + $n$$27$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
      }), this.$_data$.$core$.$toLoad$ = $$$$18$$.map($$$$18$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$28$$) {
        return"#" + $n$$28$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
      }), this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$)));
      this.$_data$.$core$.$toLoad$.length && ($$$$18$$.each(this.$_data$.$core$.$toLoad$, function($i$$247$$, $val$$53$$) {
        if("#" == $val$$53$$) {
          return!0
        }
        $$$$18$$($val$$53$$).length ? $current$$6$$.push($val$$53$$) : $remaining$$.push($val$$53$$)
      }), $current$$6$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$, $$$$18$$.each($current$$6$$, function($i$$248$$, $val$$54$$) {
        $_this$$19$$.$_is_loaded$($val$$54$$) || ($_this$$19$$.$_load_node$($val$$54$$, function() {
          $_this$$19$$.$_reload_nodes$(!0)
        }, function() {
          $_this$$19$$.$_reload_nodes$(!0)
        }), $done$$ = !1)
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$18$$.each(this.$_data$.$core$.$toExpand$, function($i$$249$$, $val$$55$$) {
        $_this$$19$$.expand($val$$55$$, !1, !0)
      });
      $done$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$19$$.$_emitEvent$({}, "reload_nodes")
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$())
    }, set_theme:function($theme_name$$, $theme_url$$) {
      if(!$theme_name$$) {
        return!1
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$18$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
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
    }, $_execKey$:function($t$$12$$, $key$$93_tmp$$6$$, $event$$226$$) {
      if($t$$12$$.$_data$.keys.enabled && ($key$$93_tmp$$6$$ = $t$$12$$.$_keyHandler$[$key$$93_tmp$$6$$])) {
        return $key$$93_tmp$$6$$.call($t$$12$$, $event$$226$$)
      }
    }, $_enableKeys$:function() {
      this.$_data$.keys.enabled = !0
    }, $_disableKeys$:function() {
      this.$_data$.keys.enabled = !1
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$();
      this.$_initTypeOpts$();
      this.$_initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_initDnD$();
      this.$_initKeys$();
      this.$_initMenu$();
      this.$_start$()
    }, $_emitEvent$:function($data$$120$$, $eventname$$) {
      if($eventname$$ && "string" === $$$$18$$.type($eventname$$)) {
        var $args$$14_rslt$$8$$, $func$$11_inst$$;
        $args$$14_rslt$$8$$ = Array.prototype.slice.call(arguments);
        var $evname_s$$inline_740$$ = $eventname$$;
        $func$$11_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $eventname$$, $b$$inline_743_isPublic$$ = !1, $item$$10$$;
        if(!0 !== this.$_data$.$core$.locked || "unlock" === $eventname$$ || "isLocked" === $eventname$$ || "lock" === $eventname$$) {
          $evname_s$$inline_740$$ = $eventname$$;
          "rename_node" === $evname_s$$inline_740$$ ? $evname_s$$inline_740$$ = "rename" : "set_focus" === $evname_s$$inline_740$$ ? $evname_s$$inline_740$$ = "focus" : "unset_focus" === $evname_s$$inline_740$$ ? $evname_s$$inline_740$$ = "unfocus" : "delete_node" === $evname_s$$inline_740$$ ? $evname_s$$inline_740$$ = "remove" : "move_node" === $evname_s$$inline_740$$ ? $evname_s$$inline_740$$ = "move" : "create_node" === $evname_s$$inline_740$$ && ($evname_s$$inline_740$$ = "create");
          ($b$$inline_743_isPublic$$ = 0 <= $$$$18$$.inArray($evname_s$$inline_740$$, $_aEvNames$$)) || "create_node" != $evname_s$$inline_740$$ || ($b$$inline_743_isPublic$$ = !0);
          $b$$inline_743_isPublic$$ || ($evname_s$$inline_740$$ = "tree" + $evname_s$$inline_740$$);
          $item$$10$$ = $data$$120$$ ? $data$$120$$.obj : void 0;
          "loaded" === $evname_s$$inline_740$$ && ($item$$10$$ = -1);
          var $eventdata$$ = {};
          $eventdata$$.item = $item$$10$$;
          $eventdata$$.inst = $func$$11_inst$$;
          if($isBefore$$) {
            $func$$11_inst$$ = $data$$120$$.func, $eventdata$$.func = $func$$11_inst$$, $eventdata$$.args = $args$$14_rslt$$8$$, "rename" === $func$$11_inst$$ && ($eventdata$$.title = $data$$120$$.title, $eventdata$$.prevTitle = $data$$120$$.prevTitle)
          }else {
            if($b$$inline_743_isPublic$$) {
              if("move" == $evname_s$$inline_740$$) {
                $eventdata$$.position = $data$$120$$.$p$, $eventdata$$.reference = $data$$120$$.$r$, $eventdata$$.data = $data$$120$$
              }else {
                if("rename" == $evname_s$$inline_740$$) {
                  $eventdata$$.title = $data$$120$$.title, $eventdata$$.prevTitle = $data$$120$$.prevTitle
                }else {
                  if("remove" == $evname_s$$inline_740$$) {
                    $eventdata$$.parent = $data$$120$$.parent, $eventdata$$.prev = $data$$120$$.prev
                  }else {
                    if("delete" == $evname_s$$inline_740$$) {
                      $eventdata$$.prev = $data$$120$$.prev, $eventdata$$.parent = $data$$120$$.parent
                    }else {
                      if("expandAll" === $evname_s$$inline_740$$ || "collapseAll" === $evname_s$$inline_740$$ || "deselectAll" === $evname_s$$inline_740$$) {
                        $eventdata$$.targ = $data$$120$$.targ
                      }
                    }
                  }
                }
              }
            }
          }
          if($b$$inline_743_isPublic$$) {
            if($args$$14_rslt$$8$$ = this._trigger($evname_s$$inline_740$$, new $$$$18$$.Event("oj" + $evname_s$$inline_740$$), $eventdata$$), $isBefore$$) {
              return"undefined" != typeof $args$$14_rslt$$8$$ && ($args$$14_rslt$$8$$ = $args$$14_rslt$$8$$ ? !0 : !1), $args$$14_rslt$$8$$
            }
          }else {
            this.$_$container$.trigger($evname_s$$inline_740$$, $eventdata$$)
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
      this.$_$container$.delegate(".oj-tree-list li \x3e ins", "click.ojtree", $$$$18$$.proxy(function($event$$227_trgt$$) {
        $event$$227_trgt$$ = $$$$18$$($event$$227_trgt$$.target);
        this.toggleExpand($event$$227_trgt$$)
      }, this)).bind("mousedown.ojtree", $$$$18$$.proxy(function() {
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
            }catch($err$$8$$) {
            }
          }
        }
      });
      this.$_data$.$core$.$notify_plugins$ && this.$_$container$.bind("treeload_node", $$$$18$$.proxy(function($e$$88$$, $ui$$11$$) {
        var $o$$5$$ = this.$_getNode$($ui$$11$$.item), $t$$13$$ = this;
        -1 === $o$$5$$ && ($o$$5$$ = this.$_$container_ul$);
        $o$$5$$.length && $o$$5$$.find("li").each(function() {
          var $th$$ = $$$$18$$(this);
          $th$$.data("oj-tree") && $$$$18$$.each($th$$.data("oj-tree"), function($plugin$$, $values$$12$$) {
            $th$$.data[$plugin$$] && $$$$18$$.isFunction($t$$13$$["_" + $plugin$$ + "_notify"]) && $t$$13$$["_" + $plugin$$ + "_notify"].call($t$$13$$, $th$$, $values$$12$$)
          })
        })
      }, this));
      this.$_data$.$core$.$load_open$ && this.$_$container$.bind("treeload_node", $$$$18$$.proxy(function($e$$89$$, $ui$$12$$) {
        var $o$$6$$ = this.$_getNode$($ui$$12$$.item);
        -1 === $o$$6$$ && ($o$$6$$ = this.$_$container_ul$);
        $o$$6$$.length && $o$$6$$.find("li.oj-tree-open:not(:has(ul))").each(function() {
          this.$_load_node$(this, $$$$18$$.noop, $$$$18$$.noop)
        })
      }, this));
      this.$_emitEvent$({}, "init");
      this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$()
      });
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$()
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
      this.$_data$.ui.selected = $$$$18$$();
      this.$_data$.ui.$last_selected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$18$$.proxy(function($event$$229$$) {
        $event$$229$$.preventDefault();
        $event$$229$$.currentTarget.blur();
        $$$$18$$($event$$229$$.currentTarget).hasClass("oj-tree-loading") || this.$_select$($event$$229$$.currentTarget, !0, $event$$229$$)
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$18$$.proxy(function($event$$230$$) {
        $$$$18$$($event$$230$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$230$$.target)
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$18$$.proxy(function($event$$231$$) {
        $$$$18$$($event$$231$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$231$$.target)
      }, this)).bind("treereopen", $$$$18$$.proxy(function() {
        this.reselect()
      }, this)).bind("treeget_rollback", $$$$18$$.proxy(function() {
        this.dehover();
        this.save_selected()
      }, this)).bind("treeset_rollback", $$$$18$$.proxy(function() {
        this.reselect()
      }, this)).bind("ojcollapse", $$$$18$$.proxy(function($event$$232$$, $ui$$13$$) {
        var $obj$$89$$ = this.$_getNode$($ui$$13$$.item), $clk$$ = $obj$$89$$ && $obj$$89$$.length ? $obj$$89$$.children("ul").find("a.oj-tree-clicked") : $$$$18$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$89$$)
        })
      }, this)).bind("ojremove", $$$$18$$.proxy(function($event$$233$$, $ui$$14$$) {
        var $s$$24$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$90$$ = this.$_getNode$($ui$$14$$.item), $clk$$1_obj$$90$$ = $clk$$1_obj$$90$$ && $clk$$1_obj$$90$$.length ? $clk$$1_obj$$90$$.find("a.oj-tree-clicked") : [], $_this$$21$$ = this;
        $clk$$1_obj$$90$$.each(function() {
          $_this$$21$$.deselect(this)
        });
        $s$$24$$ && $clk$$1_obj$$90$$.length && $ui$$14$$.prev.each(function() {
          if(this.parentNode) {
            return $_this$$21$$.select(this), !1
          }
        })
      }, this)).bind("ojmove", $$$$18$$.proxy(function($event$$234$$, $ui$$15$$) {
        var $data$$121$$ = $ui$$15$$.data;
        $data$$121$$.cy && ($data$$121$$.oc.find("a.oj-tree-clicked").removeClass("oj-tree-clicked"), $data$$121$$.oc.removeAttr("aria-selected"))
      }, this))
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$()
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$)
    }, $_initJsonData$:function() {
      2 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("treeafter_close", function($e$$90$$, $ui$$16$$) {
        $ui$$16$$.item.children("ul").remove()
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$)
    }, $_initHtmlData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$originalContainerHtml$ = this.$_$container$.find(" \x3e ul \x3e li").clone(!0), this.$_data$.html.$originalContainerHtml$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType
      }).remove()), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$)
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$18$$("script").each(function() {
        if(this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("treeinit", $$$$18$$.proxy(function() {
        var $s$$25$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$25$$.dots;
        this.$_data$.$themes$.icons = $s$$25$$.icons;
        this.set_theme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url)
      }, this)).bind("ojloaded", $$$$18$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.show_dots() : this.hide_dots();
        this.$_data$.$themes$.icons ? this.show_icons() : this.hide_icons()
      }, this))
    }, $_initTypes$:function() {
      var $s$$26$$ = this.options.types;
      $s$$26$$ && this.$_$container$.bind("treeinit", $$$$18$$.proxy(function() {
        var $types$$ = $$$$18$$.extend(!0, {}, $s$$26$$.types), $attr$$19$$ = $s$$26$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$22$$ = this;
        $$$$18$$.each($types$$, function($i$$250$$, $tp$$) {
          $$$$18$$.each($tp$$, function($k$$9$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$9$$) || $_this$$22$$.$_data$.types.$attachTo$.push($k$$9$$)
          });
          var $ot$$ = typeof $tp$$.icon;
          if("undefined" === $ot$$) {
            $ot$$ = typeof $tp$$.image;
            if("boolean" === $ot$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none"
            }else {
              if(!$tp$$.image && !$tp$$.position) {
                return!0
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position)
          }
          if($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$250$$ ? $icons_css$$ += ".oj-tree-" + $_this$$22$$.$_index$ + " a \x3e .oj-tree-icon { " : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + $_this$$22$$.$_index$ + " li[" + $attr$$19$$ + '\x3d"' + $i$$250$$ + '"] \x3e a \x3e .oj-tree-icon { '), $icons_css$$ = "ojt$none" !== $tp$$.icon.image ? $icons_css$$ + (" background-image:url(" + $tp$$.icon.image + "); ") : $icons_css$$ + " background-image:none; ", $icons_css$$ = $tp$$.icon.position ? $icons_css$$ + (" background-position:" + 
            $tp$$.icon.position + "; ") : $icons_css$$ + " background-position:0 0; ", $icons_css$$ += "} "
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"})
      }, this)).bind("ojbefore", $$$$18$$.proxy(function($e$$91$$, $data$$122$$) {
        var $d$$15_o$$7_s$$27$$, $ty$$1$$, $func$$12$$ = $data$$122$$.func, $item$$11$$ = $data$$122$$.item;
        if(($d$$15_o$$7_s$$27$$ = ($d$$15_o$$7_s$$27$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$11$$) : !1) && -1 !== $d$$15_o$$7_s$$27$$ && $d$$15_o$$7_s$$27$$.length ? $d$$15_o$$7_s$$27$$.data("oj-tree") : !1) && $d$$15_o$$7_s$$27$$.types && !1 === $d$$15_o$$7_s$$27$$[$func$$12$$] || -1 !== $$$$18$$.inArray($func$$12$$, this.$_data$.types.$attachTo$) && ($data$$122$$.item && ($data$$122$$.item.tagName || $data$$122$$.item.jquery)) && ($d$$15_o$$7_s$$27$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$11$$), ($d$$15_o$$7_s$$27$$[$ty$$1$$] && "undefined" !== typeof $d$$15_o$$7_s$$27$$[$ty$$1$$][$func$$12$$] || $d$$15_o$$7_s$$27$$["default"] && "undefined" !== typeof $d$$15_o$$7_s$$27$$["default"][$func$$12$$]) && !1 === this.$_check$($func$$12$$, $item$$11$$))) {
          return $e$$91$$.stopImmediatePropagation(), !1
        }
      }, this))
    }, $_initDnD$:function() {
      if(this.$_data$.dnd.reorder) {
        var $s$$28_vars$$9$$ = this.$_data$.dnd.$vars$;
        $s$$28_vars$$9$$.$m$ = $$$$18$$("\x3cdiv /\x3e").addClass("oj-tree-marker").hide().html("\x26raquo;").bind("mouseleave mouseenter", $$$$18$$.proxy(function($e$$92$$) {
          var $vars$$10$$ = this.$_data$.dnd.$vars$;
          $vars$$10$$.$m$.hide();
          $vars$$10$$.$ml$.hide();
          $e$$92$$.preventDefault();
          $e$$92$$.stopImmediatePropagation();
          return!1
        }, this)).appendTo("body");
        $s$$28_vars$$9$$.$ml$ = $$$$18$$("\x3cdiv /\x3e").addClass("oj-tree-marker-line").hide().bind("mouseup", function($e$$93$$) {
          var $vars$$11$$ = this.$_data$.dnd.$vars$;
          if($vars$$11$$.$r$ && $vars$$11$$.$r$.length) {
            return $vars$$11$$.$r$.children("a").trigger($e$$93$$), $e$$93$$.preventDefault(), $e$$93$$.stopImmediatePropagation(), !1
          }
        }).bind("mouseleave", $$$$18$$.proxy(function($e$$94$$) {
          var $vars$$12$$ = this.$_data$.dnd.$vars$, $rt$$ = $$$$18$$($e$$94$$.relatedTarget);
          if(($rt$$.is(".oj-tree") || 0 === $rt$$.closest(".oj-tree").length) && $vars$$12$$.$r$ && $vars$$12$$.$r$.length) {
            return $vars$$12$$.$r$.children("a").trigger($e$$94$$), $vars$$12$$.$m$.hide(), $vars$$12$$.$ml$.hide(), $e$$94$$.preventDefault(), $e$$94$$.stopImmediatePropagation(), !1
          }
        }, this)).appendTo("body");
        $$$$18$$(document).bind("drag_start.ojtreeu", $$$$18$$.proxy(function($e$$95$$, $data$$123$$) {
          var $vars$$13$$ = this.$_data$.dnd.$vars$;
          $data$$123$$.data.$jstree$ && ($vars$$13$$.$m$.show(), $vars$$13$$.$ml$ && $vars$$13$$.$ml$.show())
        }, this));
        $$$$18$$(document).bind("drag_stop.ojtreeu", $$$$18$$.proxy(function($e$$96$$, $data$$124$$) {
          var $vars$$14$$ = this.$_data$.dnd.$vars$;
          $data$$124$$.data.$jstree$ && ($vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide())
        }, this));
        this.$_$container$.bind("mouseenter.ojtree", $$$$18$$.proxy(function($e$$97_tr$$) {
          var $ctl$$4$$ = this.$_data$.dnd.$ctl$, $dc_vars$$15$$ = this.$_data$.dnd.$vars$;
          $ctl$$4$$.$is_drag$ && $ctl$$4$$.$user_data$.$jstree$ && (this.options.themes && ($dc_vars$$15$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dc_vars$$15$$.$ml$ && $dc_vars$$15$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $ctl$$4$$.$helper$.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$)), $e$$97_tr$$.currentTarget === $e$$97_tr$$.target && ($ctl$$4$$.$user_data$.$obj$ && $$$$18$$($ctl$$4$$.$user_data$.$obj$).length && $$$$18$$($ctl$$4$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== 
          $e$$97_tr$$.target) && ($e$$97_tr$$ = this.$_reference$($e$$97_tr$$.target), $e$$97_tr$$.data.dnd.$foreign$ ? ($dc_vars$$15$$ = $e$$97_tr$$.options.dnd.drag_check.call(this, {o:$dc_vars$$15$$.$o$, r:$e$$97_tr$$.$_$container$, is_root:!0}), !0 !== $dc_vars$$15$$ && !0 !== $dc_vars$$15$$.inside && !0 !== $dc_vars$$15$$.before && !0 !== $dc_vars$$15$$.after || $ctl$$4$$.$helper$.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok")) : ($e$$97_tr$$.$_prepare_move$($dc_vars$$15$$.$o$, 
          $e$$97_tr$$.$_$container$, "last"), $e$$97_tr$$.check_move() && $ctl$$4$$.$helper$.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok"))))
        }, this)).bind("mouseup.ojtree", $$$$18$$.proxy(function($dc$$1_e$$98$$) {
          var $vars$$16$$ = this.$_data$.dnd.$vars$, $ctl$$5_tr$$1$$ = this.$_data$.dnd.$ctl$;
          $ctl$$5_tr$$1$$.$is_drag$ && ($ctl$$5_tr$$1$$.$user_data$.$jstree$ && $dc$$1_e$$98$$.currentTarget === $dc$$1_e$$98$$.target && $ctl$$5_tr$$1$$.$user_data$.$obj$ && $$$$18$$($ctl$$5_tr$$1$$.$user_data$.$obj$).length && $$$$18$$($ctl$$5_tr$$1$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== $dc$$1_e$$98$$.target) && ($ctl$$5_tr$$1$$ = this.$_reference$($dc$$1_e$$98$$.currentTarget), $ctl$$5_tr$$1$$.data.dnd.foreign ? ($dc$$1_e$$98$$ = $ctl$$5_tr$$1$$.$_getOptions$().dnd.drag_check.call(this, 
          {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$1$$.$_$container$, is_root:!0}), !0 !== $dc$$1_e$$98$$ && !0 !== $dc$$1_e$$98$$.inside && !0 !== $dc$$1_e$$98$$.before && !0 !== $dc$$1_e$$98$$.after || $ctl$$5_tr$$1$$.$_getOptions$().dnd.drag_finish.call(this, {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$1$$.$_$container$, is_root:!0})) : $ctl$$5_tr$$1$$.$_move_node$($vars$$16$$.$o$, $ctl$$5_tr$$1$$.$_$container$, "last", $dc$$1_e$$98$$[$ctl$$5_tr$$1$$.options.dnd.copy_modifier + "Key"]))
        }, this)).bind("mouseleave.ojtree", $$$$18$$.proxy(function($e$$99$$) {
          var $ctl$$6$$ = this.$_data$.dnd.$ctl$;
          if($e$$99$$.relatedTarget && $$$$18$$($e$$99$$.relatedTarget).hasClass("oj-tree-marker-line")) {
            return!1
          }
          $ctl$$6$$.$is_drag$ && $ctl$$6$$.$user_data$.$jstree$ && (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$to1$ && clearTimeout(this.$_data$.dnd.$to1$), this.$_data$.dnd.$to2$ && clearTimeout(this.$_data$.dnd.$to2$), $ctl$$6$$.$helper$.children("ins").hasClass("oj-tree-ok") && $ctl$$6$$.$helper$.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid"))
        }, this)).bind("mousemove.ojtree", $$$$18$$.proxy(function($e$$100$$) {
          var $ctl$$7$$ = this.$_data$.dnd.$ctl$;
          if($ctl$$7$$.$is_drag$ && $ctl$$7$$.$user_data$.$jstree$) {
            var $cnt$$1$$ = this.$_$container$[0];
            $e$$100$$.pageX + 24 > this.$_data$.dnd.$cof$.left + this.$_data$.dnd.$cw$ ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$18$$.proxy(function() {
              this.scrollLeft += $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : $e$$100$$.pageX - 24 < this.$_data$.dnd.$cof$.left ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$18$$.proxy(function() {
              this.scrollLeft -= $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$);
            $e$$100$$.pageY + 24 > this.$_data$.dnd.$cof$.top + this.$_data$.dnd.ch ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$18$$.proxy(function() {
              this.scrollTop += $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : $e$$100$$.pageY - 24 < this.$_data$.dnd.$cof$.top ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$18$$.proxy(function() {
              this.scrollTop -= $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$)
          }
        }, this)).bind("scroll.ojtree", $$$$18$$.proxy(function() {
          var $ctl$$8$$ = this.$_data$.dnd.$ctl$, $vars$$17$$ = this.$_data$.dnd.$vars$;
          $ctl$$8$$.$is_drag$ && ($ctl$$8$$.$user_data$.$jstree$ && $vars$$17$$.$m$ && $vars$$17$$.$ml$) && ($vars$$17$$.$m$.hide(), $vars$$17$$.$ml$.hide())
        }, this)).delegate(".oj-tree-list a", "mousedown.ojtree", $$$$18$$.proxy(function($e$$102$$) {
          if(1 === $e$$102$$.which) {
            return this.$_start_drag$($e$$102$$.currentTarget, $e$$102$$), !1
          }
        }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$18$$.proxy(function($e$$103$$) {
          var $ctl$$9$$ = this.$_data$.dnd.$ctl$;
          $ctl$$9$$.$is_drag$ && $ctl$$9$$.$user_data$.$jstree$ && this.$_dnd_enter$($e$$103$$.currentTarget)
        }, this)).delegate(".oj-tree-list a", "mousemove.ojtree", $$$$18$$.proxy(function($e$$104$$) {
          var $ctl$$10$$ = this.$_data$.dnd.$ctl$, $vars$$18$$ = this.$_data$.dnd.$vars$;
          $ctl$$10$$.$is_drag$ && $ctl$$10$$.$user_data$.$jstree$ && ($vars$$18$$.$r$ && $vars$$18$$.$r$.length && $vars$$18$$.$r$.children("a")[0] === $e$$104$$.currentTarget || this.$_dnd_enter$($e$$104$$.currentTarget), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$18$$($e$$104$$.target).offset()), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$18$$($e$$104$$.target).offset()), this.$_data$.dnd.$w$ = ($e$$104$$.pageY - (this.$_data$.dnd.off.top || 
          0)) % this.$_data$.$core$.$li_height$, 0 > this.$_data$.dnd.$w$ && (this.$_data$.dnd.$w$ += this.$_data$.$core$.$li_height$), this.$_dnd_show$())
        }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$18$$.proxy(function($e$$105$$) {
          var $ctl$$11$$ = this.$_data$.dnd.$ctl$, $vars$$19$$ = this.$_data$.dnd.$vars$;
          if($ctl$$11$$.$is_drag$ && $ctl$$11$$.$user_data$.$jstree$) {
            if($e$$105$$.relatedTarget && $$$$18$$($e$$105$$.relatedTarget).hasClass("oj-tree-marker-line")) {
              return!1
            }
            $vars$$19$$.$m$ && $vars$$19$$.$m$.hide();
            $vars$$19$$.$ml$ && $vars$$19$$.$ml$.hide();
            this.$_data$.dnd.$mto$ = setTimeout(function($t$$15$$) {
              return function() {
                $t$$15$$.$_dnd_leave$($e$$105$$)
              }
            }(this), 0)
          }
        }, this)).delegate(".oj-tree-list a", "mouseup.ojtree", $$$$18$$.proxy(function($e$$106$$) {
          var $ctl$$12$$ = this.$_data$.dnd.$ctl$;
          $ctl$$12$$.$is_drag$ && $ctl$$12$$.$user_data$.$jstree$ && this.$_dnd_finish$($e$$106$$)
        }, this));
        $$$$18$$(document).bind("drag_stop.ojtreeu", $$$$18$$.proxy(function() {
          var $dnd$$5$$ = this.$_data$.dnd, $vars$$20$$ = this.$_data$.dnd.$vars$;
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
        }, this)).bind("drag_start.ojtreeu", $$$$18$$.proxy(function($e$$107$$, $data$$125$$) {
          if($data$$125$$.data.$jstree$) {
            var $et$$ = $$$$18$$($data$$125$$.event.target);
            $et$$.closest(".jstree").hasClass("oj-tree-" + this.$_index$) && this.$_dnd_enter$($et$$)
          }
        }, this));
        $s$$28_vars$$9$$ = this.options.dnd;
        $s$$28_vars$$9$$.drag_target && $$$$18$$(document).delegate($s$$28_vars$$9$$.drag_target, "mousedown.ojtree-" + this.$_index$, $$$$18$$.proxy(function($e$$108$$) {
          var $cnt$$2_ctl$$13$$ = this.$_data$.dnd.$ctl$, $dnd$$6$$ = this.$_data$.dnd, $vars$$21$$ = this.$_data$.dnd.$vars$;
          $vars$$21$$.$o$ = $e$$108$$.target;
          this.$_drag_start$($e$$108$$, {$jstree$:!0, $obj$:$e$$108$$.target}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $$$$18$$($e$$108$$.target).text());
          this.$_data$.$themes$ && ($vars$$21$$.$m$ && $vars$$21$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$21$$.$ml$ && $vars$$21$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $cnt$$2_ctl$$13$$.$helper$.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
          $cnt$$2_ctl$$13$$.$helper$.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
          $cnt$$2_ctl$$13$$ = this.$_$container$;
          $dnd$$6$$.$cof$ = $cnt$$2_ctl$$13$$.offset();
          $dnd$$6$$.$cw$ = parseInt($cnt$$2_ctl$$13$$.width(), 10);
          $dnd$$6$$.ch = parseInt($cnt$$2_ctl$$13$$.height(), 10);
          $dnd$$6$$.$foreign$ = !0;
          $e$$108$$.preventDefault()
        }, this));
        $s$$28_vars$$9$$.drop_target && $$$$18$$(document).delegate($s$$28_vars$$9$$.drop_target, "mouseenter.ojtreex-" + this.$_index$, $$$$18$$.proxy(function($e$$109$$) {
          var $dnd$$7$$ = this.$_data$.dnd, $vars$$22$$ = this.$_data$.dnd.$vars$;
          $dnd$$7$$.active && this.options.dnd.drop_check.call(this, {o:$vars$$22$$.$o$, r:$$$$18$$($e$$109$$.target), e:$e$$109$$}) && $dnd$$7$$.$ctl$.$helper$.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok")
        }, this)).delegate($s$$28_vars$$9$$.drop_target, "mouseleave.ojtree-" + this.$_index$, $$$$18$$.proxy(function() {
          this.$_data$.dnd.active && this.$_data$.dnd.$ctl$.$helper$.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid")
        }, this)).delegate($s$$28_vars$$9$$.drop_target, "mouseup.ojtreex-" + this.$_index$, $$$$18$$.proxy(function($e$$111$$) {
          var $vars$$23$$ = this.$_data$.dnd.$vars$;
          this.$_data$.dnd.active && this.$_data$.dnd.$ctl$.$helper$.children("ins").hasClass("oj-tree-ok") && this.options.dnd.drop_finish.call(this, {o:$vars$$23$$.$o$, r:$$$$18$$($e$$111$$.target), e:$e$$111$$})
        }, this))
      }
    }, $_initDnDOpts$:function() {
      var $opts$$20$$ = this.options.dnd, $ot$$1$$ = typeof $opts$$20$$;
      "undefined" !== $ot$$1$$ && ("boolean" === $ot$$1$$ && $opts$$20$$ ? this.$_data$.dnd.reorder = !0 : "object" === $ot$$1$$ ? "boolean" === typeof $opts$$20$$.reorder && (this.$_data$.dnd.reorder = $opts$$20$$.reorder) : "string" == $ot$$1$$ && "reorder" == $opts$$20$$ && (this.$_data$.dnd.reorder = !0), this.$_data$.dnd.reorder && (this.options.dnd = {}, this.$_applyDefaults$(this.options.dnd, this.$_data$.dnd.$defaults$)))
    }, $_initCrrm$:function() {
      this.$_$container$.bind("ojmove", $$$$18$$.proxy($JSCompiler_emptyFn$$(), this))
    }, $_initKeys$:function() {
      var $_this$$23$$ = this;
      $$$$18$$.each(this.$_keyHandler$, function($i$$251$$, $v$$4$$) {
        !1 !== $v$$4$$ && -1 == $$$$18$$.inArray($i$$251$$, $_this$$23$$.$_data$.keys.bound) && ($$$$18$$(document).on("keydown", null, $i$$251$$, function($event$$235$$) {
          return $_this$$23$$.$_execKey$($_this$$23$$, $i$$251$$, $event$$235$$)
        }), $_this$$23$$.$_data$.keys.bound.push($i$$251$$))
      });
      this.$_enableKeys$()
    }, $_initMenu$:function($bNewVal$$) {
      var $menu$$14_opts$$21$$, $$m_t$$17$$;
      if(this.options.contextMenu && ($menu$$14_opts$$21$$ = this.options.contextMenu, $$m_t$$17$$ = $$$$18$$.type($menu$$14_opts$$21$$), "object" == $$m_t$$17$$ && ($menu$$14_opts$$21$$ = $menu$$14_opts$$21$$.menu, void 0 != $menu$$14_opts$$21$$ && ($$m_t$$17$$ = $$$$18$$.type($menu$$14_opts$$21$$), "function" == $$m_t$$17$$ && ($menu$$14_opts$$21$$ = $menu$$14_opts$$21$$(), $menu$$14_opts$$21$$ = $menu$$14_opts$$21$$.menu, $$m_t$$17$$ = $$$$18$$.type($menu$$14_opts$$21$$)), "string" === $$m_t$$17$$)))) {
        if($$m_t$$17$$ = $$$$18$$(document.getElementById($menu$$14_opts$$21$$))) {
          $$m_t$$17$$.css("display", "none"), this.$_data$.menu.$$container$ = $$m_t$$17$$, this.$_data$.menu.$menuid$ = $menu$$14_opts$$21$$, this.$_data$.menu.$usermenu$ = !0, this.$_data$.menu.$$elemPaste$ = this.$_data$.menu.$$container$.find("#ojtreepaste")
        }
        this.$_data$.menu.$usermenu$ && $bNewVal$$ && this.$_applyMenu$()
      }
    }, $_handleContextMenuBeforeShow$:function($e$$113_state$$6$$) {
      this.$_data$.menu.$node$ = $$$$18$$($e$$113_state$$6$$.originalEvent.target.parentNode);
      if(this.$_data$.menu.$usermenu$ && this.$_data$.menu.$attached$ && this.$_data$.menu.$$elemPaste$) {
        $e$$113_state$$6$$ = this.$_data$.menu.$$elemPaste$.hasClass("oj-disabled");
        var $disabledState$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$;
        $e$$113_state$$6$$ || ($e$$113_state$$6$$ = !1);
        $e$$113_state$$6$$ != $disabledState$$ && ($disabledState$$ ? this.$_data$.menu.$$elemPaste$.addClass("oj-disabled") : this.$_data$.menu.$$elemPaste$.removeClass("oj-disabled"), this.$_data$.menu.$$container$.ojMenu("refresh"))
      }
    }, $_handleContextMenuSelect$:function($ev$$, $ui$$18$$) {
      var $id$$35$$ = $ui$$18$$ ? $ui$$18$$.item.attr("id") : void 0;
      "ojtreecopy" === $id$$35$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$35$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$35$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$35$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$35$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$35$$ && this.$_crrm_create$(this.$_data$.menu.$node$)
    }, $_initCoreOpts$:function() {
      var $val$$56$$ = this.options.selectionMode, $val$$56$$ = void 0 == $val$$56$$ ? "single" : $val$$56$$;
      "none" === $val$$56$$ ? $val$$56$$ = 0 : "single" === $val$$56$$ ? $val$$56$$ = 1 : "multiple" === $val$$56$$ && ($val$$56$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$56$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_data$.$core$.$toExpand$ = this.options.initExpanded;
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded
    }, $_initUIOpts$:$JSCompiler_emptyFn$$(), $_initDSOpts$:function() {
      var $s$$29$$ = this.options.data, $dt$$1_ot$$2$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      if($s$$29$$) {
        if($dt$$1_ot$$2$$ = $$$$18$$.type($s$$29$$), "string" === $dt$$1_ot$$2$$) {
          this.$_isHtml$($s$$29$$) ? this.$_data$.$ds$.type = 3 : this.$_data$.$ds$.type = 2
        }else {
          if("array" === $dt$$1_ot$$2$$) {
            this.$_data$.$ds$.type = 2
          }else {
            if("object" === $dt$$1_ot$$2$$) {
              if($s$$29$$.getChildCount) {
                this.$_data$.$ds$.type = 1
              }else {
                if($s$$29$$.data || $s$$29$$.ajax) {
                  ($dt$$1_ot$$2$$ = $s$$29$$.dataType) ? "json" === $dt$$1_ot$$2$$ ? this.$_data$.$ds$.type = 2 : "html" === $dt$$1_ot$$2$$ && (this.$_data$.$ds$.type = 3) : ($s$$29$$.dataType = "json", this.$_data$.$ds$.type = 2)
                }
              }
            }
          }
        }
      }else {
        this.$_data$.$ds$.type = 3, this.$_data$.html.$useExistingMarkup$ = !0
      }
    }, $_initTreeDSOpts$:$JSCompiler_emptyFn$$(), $_initJsonOpts$:$JSCompiler_emptyFn$$(), $_initHtmlOpts$:$JSCompiler_emptyFn$$(), $_initCrrmOpts$:$JSCompiler_emptyFn$$(), $_initMenuOpts$:$JSCompiler_emptyFn$$(), $_initThemeOpts$:$JSCompiler_emptyFn$$(), $_initTypeOpts$:function() {
      var $o$$8$$ = this.options.types;
      "object" === typeof $o$$8$$ && this.$_applyDefaults$($o$$8$$, {attr:this.$_data$.types.$defaults$.attr})
    }, $_initData$:function() {
      var $data$$127$$ = this.$_data$;
      $data$$127$$.$core$ = {$htmlTitles$:!1, $initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $notify_plugins$:!0, $toExpand$:!1, $toLoad$:!1, $prepared_move$:{}};
      $data$$127$$.ui = {selected:$$$$18$$(), $last_selected$:!1, $hovered$:null, $to_select$:null, opacity:1};
      $data$$127$$.$crrm$ = {};
      $data$$127$$.$crrm$.$cp_nodes$ = !1;
      $data$$127$$.$crrm$.$ct_nodes$ = !1;
      $data$$127$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:$JSCompiler_returnArg$$(!0)}};
      $data$$127$$.$crrm$.$prepared_move$ = {};
      $data$$127$$.$ds$ = {};
      $data$$127$$.$ds$.$progressiveRender$ = !1;
      $data$$127$$.$ds$.$progressiveUnload$ = !1;
      $data$$127$$.$ds$.$correctState$ = !0;
      $data$$127$$.$ds$.type = 0;
      $data$$127$$.$json$ = {};
      $data$$127$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$127$$.html = {};
      $data$$127$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$127$$.html.$useExistingMarkup$ = !1;
      $data$$127$$.html.$originalContainerHtml$ = !1;
      $data$$127$$.$themes$ = {};
      $data$$127$$.$themes$.icons = !0;
      $data$$127$$.$themes$.$dots$ = !1;
      $data$$127$$.$themes$.$theme$ = "default";
      $data$$127$$.$themes$.url = !1;
      $data$$127$$.$themes$.$themes_loaded$ = [];
      $data$$127$$.$themes$.$_themes$ = !1;
      $data$$127$$.types = {};
      $data$$127$$.types.$attachTo$ = [];
      $data$$127$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$127$$.menu = {};
      $data$$127$$.menu.$actions$ = !1;
      $data$$127$$.menu.$menuid$ = !1;
      $data$$127$$.menu.select = !1;
      $data$$127$$.menu.$usermenu$ = !1;
      $data$$127$$.menu.$attached$ = !1;
      $data$$127$$.menu.$$container$ = !1;
      $data$$127$$.menu.parent = !1;
      $data$$127$$.menu.$$elemPaste$ = !1;
      $data$$127$$.menu.$node$ = !1;
      $data$$127$$.menu.$changing$ = !1;
      $data$$127$$.keys = {};
      $data$$127$$.keys.enabled = !0;
      $data$$127$$.keys.bound = [];
      $data$$127$$.dnd = {};
      $data$$127$$.dnd.reorder = !1;
      $data$$127$$.dnd.active = !1;
      $data$$127$$.dnd.after = !1;
      $data$$127$$.dnd.inside = !1;
      $data$$127$$.dnd.before = !1;
      $data$$127$$.dnd.off = !1;
      $data$$127$$.dnd.$prepared$ = !1;
      $data$$127$$.dnd.$w$ = 0;
      $data$$127$$.dnd.$to1$ = !1;
      $data$$127$$.dnd.$to2$ = !1;
      $data$$127$$.dnd.$cof$ = !1;
      $data$$127$$.dnd.$cw$ = !1;
      $data$$127$$.dnd.ch = !1;
      $data$$127$$.dnd.$i1$ = !1;
      $data$$127$$.dnd.$i2$ = !1;
      $data$$127$$.dnd.$mto$ = !1;
      $data$$127$$.dnd.$defaults$ = {copy_modifier:"ctrl", check_timeout:100, open_timeout:500, drop_target:".oj-tree-drop", drop_check:$JSCompiler_returnArg$$(!0), drop_finish:$$$$18$$.noop, drag_target:".oj-tree-draggable", drag_finish:$$$$18$$.noop, drag_check:function $$data$$127$$$dnd$$defaults$$drag_check$() {
        return{after:!1, before:!1, inside:!0}
      }};
      $data$$127$$.dnd.$vars$ = {};
      $data$$127$$.dnd.$vars$.$o$ = !1;
      $data$$127$$.dnd.$vars$.$r$ = !1;
      $data$$127$$.dnd.$vars$.$m$ = !1;
      $data$$127$$.dnd.$vars$.$ml$ = !1;
      $data$$127$$.dnd.$vars$.$sli$ = void 0;
      $data$$127$$.dnd.$vars$.$sti$ = void 0;
      $data$$127$$.dnd.$vars$.$dir1$ = !1;
      $data$$127$$.dnd.$vars$.$dir2$ = !1;
      $data$$127$$.dnd.$vars$.$last_pos$ = !1;
      $data$$127$$.dnd.$ctl$ = {};
      $data$$127$$.dnd.$ctl$.$is_down$ = !1;
      $data$$127$$.dnd.$ctl$.$is_drag$ = !1;
      $data$$127$$.dnd.$ctl$.$helper$ = !1;
      $data$$127$$.dnd.$ctl$.$scroll_spd$ = 10;
      $data$$127$$.dnd.$ctl$.$init_x$ = 0;
      $data$$127$$.dnd.$ctl$.$init_y$ = 0;
      $data$$127$$.dnd.$ctl$.$threshold$ = 5;
      $data$$127$$.dnd.$ctl$.$helper_left$ = 5;
      $data$$127$$.dnd.$ctl$.$helper_top$ = 10;
      $data$$127$$.dnd.$ctl$.$user_data$ = {}
    }, $_fix_scroll$:function($obj$$91_t$$18$$) {
      var $c$$25$$ = this.$_$container$[0];
      $c$$25$$.scrollHeight > $c$$25$$.offsetHeight && ($obj$$91_t$$18$$ = this.$_getNode$($obj$$91_t$$18$$)) && (-1 !== $obj$$91_t$$18$$ && $obj$$91_t$$18$$.length && $obj$$91_t$$18$$.is(":visible")) && ($obj$$91_t$$18$$ = $obj$$91_t$$18$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$91_t$$18$$ && ($c$$25$$.scrollTop = $c$$25$$.scrollTop + $obj$$91_t$$18$$ - 1), $obj$$91_t$$18$$ + this.$_data$.$core$.$li_height$ + ($c$$25$$.scrollWidth > $c$$25$$.offsetWidth ? $scrollbar_width$$ : 0) > 
      $c$$25$$.offsetHeight && ($c$$25$$.scrollTop += $obj$$91_t$$18$$ - $c$$25$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$25$$.scrollWidth > $c$$25$$.offsetWidth ? $scrollbar_width$$ : 0)))
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
      return $$$$18$$.extend(!0, {}, this.options)
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
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1
    }, "ctrl+space":function($event$$236$$) {
      $event$$236$$.type = "click";
      this.$_data$.ui.$hovered$ && this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($event$$236$$);
      return!1
    }, "shift+space":function($event$$237$$) {
      $event$$237$$.type = "click";
      this.$_data$.ui.$hovered$ && this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($event$$237$$);
      return!1
    }, f2:function() {
      this.rename(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$)
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null))
    }}, $_applyMenu$:function() {
      this.$_data$.menu.$attached$ || (this.$_data$.menu.$attached$ = !0, this.$_data$.menu.parent = this.$_data$.menu.$$container$.parent(), this.$_$container$.append(this.$_data$.menu.$$container$), this.$_data$.menu.$$container$.ojMenu(), this.$_data$.menu.$ojmenuCreated$ = !0, this.$_data$.menu.$changing$ = !0, this._setOption("contextMenu", {menu:this.$_data$.menu.$menuid$}), this.$_data$.menu.$changing$ = !1, this.$_data$.menu.$$container$.on("ojselect", $$$$18$$.proxy(this.$_handleContextMenuSelect$, 
      this)), this.$_data$.menu.$$container$.on("ojbeforeshow", $$$$18$$.proxy(this.$_handleContextMenuBeforeShow$, this)))
    }, $_clearMenu$:function() {
      this.$_data$.menu.$usermenu$ && (this.$_data$.menu.$$container$ && (this.$_data$.menu.$$container$.ojMenu("destroy"), this.$_data$.menu.parent.append(this.$_data$.menu.$$container$)), this.$_data$.menu.$attached$ = !1, this.$_data$.menu.$menuid$ = null, this.$_data$.menu.$$container$ = null, this.$_data$.menu.parent = null, this.$_data$.menu.$usermenu$ = !1)
    }, $_crrm_cut$:function($obj$$92$$) {
      $obj$$92$$ = this.$_getNode$($obj$$92$$, !0);
      if(!$obj$$92$$ || !$obj$$92$$.length) {
        return!1
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$92$$;
      this.$_emitEvent$({obj:$obj$$92$$}, "cut")
    }, $_crrm_copy$:function($obj$$93$$) {
      $obj$$93$$ = this.$_getNode$($obj$$93$$, !0);
      if(!$obj$$93$$ || !$obj$$93$$.length) {
        return!1
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$93$$;
      this.$_emitEvent$({obj:$obj$$93$$}, "copy")
    }, $_crrm_paste$:function($obj$$94$$) {
      $obj$$94$$ = this.$_getNode$($obj$$94$$);
      if(!$obj$$94$$ || !$obj$$94$$.length) {
        return!1
      }
      var $nodes$$4$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if(!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$94$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$94$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$94$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$94$$, nodes:$nodes$$4$$}, "paste")
    }, $_crrm_move_node$:function($obj$$95$$, $ref$$4$$, $position$$18$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$30$$ = this.$_data$.$crrm$.$defaults$.move;
      if(!$is_prepared$$1$$) {
        return"undefined" === typeof $position$$18$$ && ($position$$18$$ = $s$$30$$.defaultPosition), "inside" !== $position$$18$$ || $s$$30$$.defaultPosition.match(/^(before|after)$/) || ($position$$18$$ = $s$$30$$.defaultPosition), this.$_move_node$($obj$$95$$, $ref$$4$$, $position$$18$$, $is_copy$$1$$, !1, $skip_check$$1$$)
      }
      if(!0 === $s$$30$$.alwaysCopy || "multitree" === $s$$30$$.alwaysCopy && $obj$$95$$.$rt$.$_index$ !== $obj$$95$$.$ot$.$_index$) {
        $is_copy$$1$$ = !0
      }
      this.$_move_node$($obj$$95$$, $ref$$4$$, $position$$18$$, $is_copy$$1$$, !0, $skip_check$$1$$)
    }, $_crrm_remove$:function($obj$$96$$) {
      $obj$$96$$ = this.$_getNode$($obj$$96$$, !0);
      this.$__rollback$();
      this.remove($obj$$96$$)
    }, $_crrm_rename$:function($obj$$97$$) {
      var $f$$3$$ = this.$_emitEvent$;
      $obj$$97$$ = this.$_getNode$($obj$$97$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$97$$, function($obj$$98$$, $new_name$$, $old_name$$) {
        $f$$3$$.call(this, {obj:$obj$$98$$, title:$new_name$$, prevTitle:$old_name$$}, "rename")
      })
    }, $_crrm_showInput$:function($obj$$99$$, $callback$$97$$) {
      $obj$$99$$ = this.$_getNode$($obj$$99$$);
      var $rtl$$2$$ = this.$_isRtl$, $w$$5$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$99$$.children("ins").width(), $w2$$ = $obj$$99$$.find("\x3e a:visible \x3e ins").width() * $obj$$99$$.find("\x3e a:visible \x3e ins").length, $t$$20$$ = this.getText($obj$$99$$), $h1$$ = $$$$18$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$2$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$99$$.css("position", "relative").append($$$$18$$("\x3cinput /\x3e", 
      {value:$t$$20$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$2$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$2$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$18$$.proxy(function() {
        var $i$$252$$ = $obj$$99$$.children(".oj-tree-rename-input"), $v$$5$$ = $i$$252$$.val();
        "" === $v$$5$$ && ($v$$5$$ = $t$$20$$);
        $h1$$.remove();
        $i$$252$$.remove();
        this.$_set_text$($obj$$99$$, $t$$20$$);
        this.$_rename_node$($obj$$99$$, $v$$5$$);
        $callback$$97$$.call(this, $obj$$99$$, $v$$5$$, $t$$20$$);
        $obj$$99$$.css("position", "")
      }, this), keyup:function($event$$238_key$$94$$) {
        $event$$238_key$$94$$ = $event$$238_key$$94$$.keyCode || $event$$238_key$$94$$.which;
        27 == $event$$238_key$$94$$ ? (this.value = $t$$20$$, this.blur()) : 13 == $event$$238_key$$94$$ ? this.blur() : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$5$$))
      }, keypress:function($event$$239$$) {
        if(13 == ($event$$239$$.keyCode || $event$$239$$.which)) {
          return!1
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$99$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$5$$))[0].select()
    }, $_crrm_create$:function($obj$$100$$, $position$$19$$, $js$$2$$, $callback$$98$$, $skip_rename$$) {
      var $_this$$24$$ = this;
      ($obj$$100$$ = this.$_getNode$($obj$$100$$)) || ($obj$$100$$ = -1);
      this.$__rollback$();
      return this.$_create_node$($obj$$100$$, $position$$19$$, $js$$2$$, function($t$$22$$) {
        var $p$$11$$ = this.$_getParent$($t$$22$$), $pos$$10$$ = $$$$18$$($t$$22$$).index();
        $callback$$98$$ && $callback$$98$$.call(this, $t$$22$$);
        $p$$11$$.length && $p$$11$$.hasClass("oj-tree-closed") && this.expand($p$$11$$, !1, !0);
        $skip_rename$$ ? $_this$$24$$.$_emitEvent$({obj:$t$$22$$, name:this.getText($t$$22$$), parent:$p$$11$$, position:$pos$$10$$}) : this.$_crrm_showInput$($t$$22$$, function($obj$$101$$, $new_name$$1$$) {
          $_this$$24$$.$_emitEvent$({obj:$obj$$101$$, name:$new_name$$1$$, parent:$p$$11$$, position:$pos$$10$$})
        })
      })
    }, $_crrm_check_move$:$JSCompiler_returnArg$$(!1), $_isHtml$:function($s$$32$$) {
      if(!$s$$32$$ || 3 > $s$$32$$.length) {
        return!1
      }
      $s$$32$$ = $s$$32$$.trim();
      return"\x3c" === $s$$32$$.charAt(0)
    }, $_processSubId$:function($l$$11_locator$$15$$) {
      var $subId$$9$$ = $l$$11_locator$$15$$.subId, $origNode$$ = $l$$11_locator$$15$$.node, $node$$48$$ = $origNode$$ ? this.$_getNode$($origNode$$) : null, $key$$96$$ = "string" === typeof $l$$11_locator$$15$$.key ? $l$$11_locator$$15$$.key : null, $val$$57$$ = "string" === typeof $l$$11_locator$$15$$.value ? $l$$11_locator$$15$$.value : null, $$elem$$, $txt$$;
      switch($subId$$9$$) {
        case "disclosure":
          if(-1 === $origNode$$ || -1 === $node$$48$$) {
            return this.$_$container_ul$ ? this.$_$container_ul$[0] : null
          }
          if($key$$96$$) {
            $l$$11_locator$$15$$ = this.$_$container_ul$.find("li"), $$$$18$$.each($l$$11_locator$$15$$, function($i$$253$$, $v$$6$$) {
              $v$$6$$ = $$$$18$$($v$$6$$);
              if($v$$6$$.attr($key$$96$$) && $v$$6$$.attr($key$$96$$) === $val$$57$$) {
                return $node$$48$$ = $v$$6$$, !1
              }
            })
          }else {
            if(!$node$$48$$ && "string" === typeof $origNode$$) {
              $txt$$ = $origNode$$.trim();
              $l$$11_locator$$15$$ = this.$_$container_ul$.find("a");
              $$$$18$$.each($l$$11_locator$$15$$, function($i$$254$$, $v$$7$$) {
                if($v$$7$$.text.trim() === $txt$$) {
                  return $$elem$$ = $$$$18$$($v$$7$$), !1
                }
              });
              if(!$$elem$$) {
                break
              }
              $node$$48$$ = $$elem$$.closest("li")
            }else {
              if($node$$48$$ && this.$_isLeaf$($node$$48$$)) {
                break
              }
            }
          }
          if($node$$48$$ && !this.$_isLeaf$($node$$48$$)) {
            return $node$$48$$.find(" \x3e ins:eq(0)")
          }
          break;
        case "icon":
          if(-1 === $origNode$$ || -1 === $node$$48$$) {
            return this.$_$container_ul$ ? this.$_$container_ul$[0] : null
          }
          if($key$$96$$) {
            $l$$11_locator$$15$$ = this.$_$container_ul$.find("li"), $$$$18$$.each($l$$11_locator$$15$$, function($i$$255$$, $v$$8$$) {
              $v$$8$$ = $$$$18$$($v$$8$$);
              if($v$$8$$.attr($key$$96$$) && $v$$8$$.attr($key$$96$$) === $val$$57$$) {
                return $node$$48$$ = $v$$8$$, !1
              }
            })
          }else {
            if(!$node$$48$$ && "string" === typeof $origNode$$) {
              $txt$$ = $origNode$$.trim();
              $l$$11_locator$$15$$ = this.$_$container_ul$.find("a");
              $$$$18$$.each($l$$11_locator$$15$$, function($i$$256$$, $v$$9$$) {
                if($v$$9$$.text.trim() === $txt$$) {
                  return $$elem$$ = $$$$18$$($v$$9$$), !1
                }
              });
              if(!$$elem$$) {
                break
              }
              $node$$48$$ = $$elem$$.closest("li")
            }
          }
          if($node$$48$$ && $node$$48$$.length) {
            return $node$$48$$.find(" \x3e a \x3e ins:eq(0)")
          }
          break;
        case "first":
          return this.$_$container_ul$.find("li:eq(0)");
        case "last":
          return this.$_$container_ul$.find("li:last-child").last()
      }
      return null
    }});
    $$$$18$$(function() {
      $_addSheet$$({$str$:".oj-tree-list, .oj-tree-list ul, .oj-tree-list li { display:block; margin:0 0 0 0; padding:0 0 0 0; list-style-type:none; } .oj-tree-list li { display:block; min-height:18px; line-height:18px; white-space:nowrap; margin-left:18px; min-width:18px; } .oj-tree-rtl li { margin-left:0; margin-right:18px; } .oj-tree-list \x3e ul \x3e li { margin-left:0px; } .oj-tree-rtl \x3e ul \x3e li { margin-right:0px; } .oj-tree-list ins { display:inline-block; text-decoration:none; width:18px; height:18px; margin:0 0 0 0; padding:0; } .oj-tree-list a { display:inline-block; line-height:16px; height:16px; color:black; white-space:nowrap; text-decoration:none; padding:1px 2px; margin:0; } .oj-tree-list a:focus { outline: none; } .oj-tree-list a \x3e ins { height:16px; width:16px; } .oj-tree-list a \x3e .oj-tree-icon { margin-right:3px; } .oj-tree-rtl a \x3e .oj-tree-icon { margin-left:3px; margin-right:0; } li.oj-tree-open \x3e ul { display:block; } li.oj-tree-closed \x3e ul { display:none; } ", 
      title:"oj-tree"})
    })
  })();
  (function() {
    function $keyHandler$$($handleObj$$4$$) {
      if("string" === typeof $handleObj$$4$$.data) {
        var $origHandler$$ = $handleObj$$4$$.handler, $keys$$15$$ = $handleObj$$4$$.data.toLowerCase().split(" ");
        $handleObj$$4$$.handler = function $$handleObj$$4$$$handler$($event$$240$$) {
          if(this === $event$$240$$.target || !/textarea|select/i.test($event$$240$$.target.nodeName) && "text" !== $event$$240$$.target.type) {
            var $i$$257_special$$ = "keypress" !== $event$$240$$.type && jQuery.$hotkeys$.$specialKeys$[$event$$240$$.which], $character$$1_l$$12$$ = String.fromCharCode($event$$240$$.which).toLowerCase(), $modif$$ = "", $possible$$ = {};
            $event$$240$$.altKey && "alt" !== $i$$257_special$$ && ($modif$$ += "alt+");
            $event$$240$$.ctrlKey && "ctrl" !== $i$$257_special$$ && ($modif$$ += "ctrl+");
            $event$$240$$.metaKey && (!$event$$240$$.ctrlKey && "meta" !== $i$$257_special$$) && ($modif$$ += "meta+");
            $event$$240$$.shiftKey && "shift" !== $i$$257_special$$ && ($modif$$ += "shift+");
            $i$$257_special$$ ? $possible$$[$modif$$ + $i$$257_special$$] = !0 : ($possible$$[$modif$$ + $character$$1_l$$12$$] = !0, $possible$$[$modif$$ + jQuery.$hotkeys$.$shiftNums$[$character$$1_l$$12$$]] = !0, "shift+" === $modif$$ && ($possible$$[jQuery.hotkeys.shiftNums[$character$$1_l$$12$$]] = !0));
            $i$$257_special$$ = 0;
            for($character$$1_l$$12$$ = $keys$$15$$.length;$i$$257_special$$ < $character$$1_l$$12$$;$i$$257_special$$++) {
              if($possible$$[$keys$$15$$[$i$$257_special$$]]) {
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
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$($agentName_elem$$24$$, $orientation$$, $contentParent$$, $bRtl$$, $buttonInfo$$, $callbackInfo$$) {
    this.$_elem$ = $agentName_elem$$24$$;
    this.$_orientation$ = $orientation$$;
    this.$_contentParent$ = $contentParent$$;
    this.$_bRtl$ = $bRtl$$;
    $buttonInfo$$ && (this.$_prevButtonId$ = $buttonInfo$$.prevButtonId, this.$_nextButtonId$ = $buttonInfo$$.nextButtonId, this.$_prevButtonStyleClass$ = $buttonInfo$$.prevButtonStyleClass, this.$_nextButtonStyleClass$ = $buttonInfo$$.nextButtonStyleClass, this.$_prevButtonIcon$ = $buttonInfo$$.prevButtonIcon, this.$_nextButtonIcon$ = $buttonInfo$$.nextButtonIcon);
    $callbackInfo$$ && (this.$_scrollFunc$ = $callbackInfo$$.scrollFunc, this.$_firstVisibleItemChangedFunc$ = $callbackInfo$$.firstVisibleItemChangedFunc, this.$_callbackObj$ = $callbackInfo$$.callbackObj, this.$_addResizeListenerFunc$ = $callbackInfo$$.addResizeListener, this.$_removeResizeListenerFunc$ = $callbackInfo$$.removeResizeListener);
    this.$_bExternalScroll$ = !0;
    this.$_firstVisibleItemIndex$ = 0;
    $agentName_elem$$24$$ = navigator.userAgent.toLowerCase();
    if(-1 !== $agentName_elem$$24$$.indexOf("gecko/")) {
      this.$_bAgentGecko$ = !0
    }else {
      if(-1 !== $agentName_elem$$24$$.indexOf("opera")) {
        this.$_bAgentOpera$ = !0
      }else {
        if(-1 !== $agentName_elem$$24$$.indexOf("applewebkit") || -1 !== $agentName_elem$$24$$.indexOf("safari")) {
          this.$_bAgentWebkit$ = !0
        }
      }
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$setup$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$setup$$($bInit$$) {
    var $self$$88$$ = this, $cbcClass$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    if($bInit$$) {
      this.$_createInnerContainers$();
      this.$_createPrevButton$(this.$_prevButtonId$, this.$_prevButtonStyleClass$, this.$_prevButtonIcon$);
      this.$_createNextButton$(this.$_nextButtonId$, this.$_nextButtonStyleClass$, this.$_nextButtonIcon$);
      var $nextButton$$ = this.$_nextButton$;
      this.$_buttonWidth$ = $nextButton$$.offsetWidth;
      this.$_buttonHeight$ = $nextButton$$.offsetHeight;
      this.$_hidePrevButton$();
      this.$_hideNextButton$();
      this.$_mouseWheelListener$ = function $this$$_mouseWheelListener$$($event$$241$$) {
        $self$$88$$.$_handleMouseWheel$($event$$241$$)
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_elem$, "mousewheel", this.$_mouseWheelListener$);
      $cbcClass$$.$_addBubbleEventListener$(this.$_elem$, "wheel", this.$_mouseWheelListener$);
      this.$_touchStartListener$ = function $this$$_touchStartListener$$($event$$242$$) {
        $self$$88$$.$_handleTouchStart$($event$$242$$)
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
      this.$_touchMoveListener$ = function $this$$_touchMoveListener$$($event$$243$$) {
        $self$$88$$.$_handleTouchMove$($event$$243$$)
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
      this.$_touchEndListener$ = function $this$$_touchEndListener$$() {
        $self$$88$$.$_handleTouchEnd$()
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
      this.$_origScroll$ = 0
    }else {
      this.$_reinitializeInnerDom$()
    }
    this.$_clearCachedSizes$();
    this.$_adjustOverflowSize$($bInit$$);
    this.$_handleResize$(!0);
    $bInit$$ && this.$_addResizeListenerFunc$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
      $self$$88$$.$_handleResize$(!1)
    }, this.$_addResizeListenerFunc$.call(this.$_callbackObj$, this.$_elem$, this.$_handleResizeFunc$), this.$_addResizeListenerFunc$.call(this.$_callbackObj$, this.$_contentContainer$, this.$_handleResizeFunc$))
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.destroy = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$destroy$() {
    var $elem$$25$$ = this.$_elem$, $cbcClass$$1$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    $cbcClass$$1$$.$_removeBubbleEventListener$($elem$$25$$, "mousewheel", this.$_mouseWheelListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$($elem$$25$$, "wheel", this.$_mouseWheelListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
    this.$_touchEndListener$ = this.$_touchMoveListener$ = this.$_touchStartListener$ = this.$_mouseWheelListener$ = null;
    this.$_removeResizeListenerFunc$ && this.$_handleResizeFunc$ && (this.$_removeResizeListenerFunc$.call(this.$_callbackObj$, this.$_elem$, this.$_handleResizeFunc$), this.$_removeResizeListenerFunc$.call(this.$_callbackObj$, this.$_contentContainer$, this.$_handleResizeFunc$));
    this.$_handleResizeFunc$ = null;
    $cbcClass$$1$$.$_reparentChildren$(this.$_contentContainer$, $elem$$25$$);
    this.$_tableDiv$ ? $elem$$25$$.removeChild(this.$_tableDiv$) : ($elem$$25$$.removeChild(this.$_overflowContainer$), $elem$$25$$.removeChild(this.$_nextButton$), $elem$$25$$.removeChild(this.$_prevButton$));
    this.$_tableCellDivNextButton$ = this.$_tableCellDivPrevButton$ = this.$_tableDiv$ = this.$_overflowContainer$ = this.$_contentContainer$ = this.$_prevButton$ = this.$_nextButton$ = null;
    this.$_clearCachedSizes$();
    this.$_callbackObj$ = this.$_removeResizeListenerFunc$ = this.$_addResizeListenerFunc$ = this.$_firstVisibleItemChangedFunc$ = this.$_scrollFunc$ = this.$_elem$ = null
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_reparentChildren$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_reparentChildren$$($fromNode$$, $toNode$$) {
    for(var $fromNodeChildren$$ = $fromNode$$.childNodes;0 < $fromNodeChildren$$.length;) {
      $toNode$$.appendChild($fromNodeChildren$$[0])
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getComputedStyle$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getComputedStyle$$($elem$$26$$) {
    var $defView$$ = $elem$$26$$.ownerDocument.defaultView, $computedStyle$$ = null;
    return $computedStyle$$ = $defView$$ ? $defView$$.getComputedStyle($elem$$26$$, null) : $elem$$26$$.currentStyle
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getElemInnerWidth$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getElemInnerWidth$$($elem$$27$$) {
    var $cbcClass$$2$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $computedStyle$$1$$ = $cbcClass$$2$$.$_getComputedStyle$($elem$$27$$);
    return $elem$$27$$.offsetWidth - ($cbcClass$$2$$.$_getCSSLengthAsInt$($computedStyle$$1$$.paddingLeft) + $cbcClass$$2$$.$_getCSSLengthAsInt$($computedStyle$$1$$.paddingRight) + $cbcClass$$2$$.$_getCSSLengthAsInt$($computedStyle$$1$$.borderLeftWidth) + $cbcClass$$2$$.$_getCSSLengthAsInt$($computedStyle$$1$$.borderRightWidth))
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getElemInnerHeight$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getElemInnerHeight$$($elem$$28$$) {
    var $cbcClass$$3$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $computedStyle$$2$$ = $cbcClass$$3$$.$_getComputedStyle$($elem$$28$$);
    return $elem$$28$$.offsetHeight - ($cbcClass$$3$$.$_getCSSLengthAsInt$($computedStyle$$2$$.paddingTop) + $cbcClass$$3$$.$_getCSSLengthAsInt$($computedStyle$$2$$.paddingBottom) + $cbcClass$$3$$.$_getCSSLengthAsInt$($computedStyle$$2$$.borderTopWidth) + $cbcClass$$3$$.$_getCSSLengthAsInt$($computedStyle$$2$$.borderBottomWidth))
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getCSSLengthAsInt$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getCSSLengthAsInt$$($cssLength_intLength$$) {
    return 0 < $cssLength_intLength$$.length && "auto" != $cssLength_intLength$$ ? ($cssLength_intLength$$ = parseInt($cssLength_intLength$$, 10), isNaN($cssLength_intLength$$) && ($cssLength_intLength$$ = 0), $cssLength_intLength$$) : 0
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_addBubbleEventListener$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_addBubbleEventListener$$($node$$49$$, $type$$82$$, $listener$$36$$) {
    $node$$49$$.addEventListener ? $node$$49$$.addEventListener($type$$82$$, $listener$$36$$, !1) : $node$$49$$.attachEvent && $node$$49$$.attachEvent("on" + $type$$82$$, $listener$$36$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_removeBubbleEventListener$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_removeBubbleEventListener$$($node$$50$$, $type$$83$$, $listener$$37$$) {
    $node$$50$$.removeEventListener ? $node$$50$$.removeEventListener($type$$83$$, $listener$$37$$, !1) : $node$$50$$.detachEvent && $node$$50$$.detachEvent("on" + $type$$83$$, $listener$$37$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getWheelDelta$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getWheelDelta$$($event$$245$$) {
    var $wheelDelta$$ = 0;
    return $wheelDelta$$ = null != $event$$245$$.wheelDelta ? $event$$245$$.wheelDelta : null != $event$$245$$.deltaY ? -$event$$245$$.deltaY : -$event$$245$$.detail
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
    this.$_sizes$ = this.$_totalSize$ = null
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleResize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleResize$$($bSetup_totalSize$$) {
    $bSetup_totalSize$$ || this.$_reinitializeInnerDom$();
    this.$_clearCachedSizes$();
    this.$_totalSize$ && this.$_sizes$ || (this.$_totalSize$ = this.$_measureContents$());
    $bSetup_totalSize$$ || this.$_adjustOverflowSize$();
    $bSetup_totalSize$$ = this.$_totalSize$;
    this.$_alignButtons$($bSetup_totalSize$$.$w$, $bSetup_totalSize$$.$h$)
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
    var $contentContainer$$ = this.$_contentContainer$, $bHoriz$$ = this.$_isHorizontal$(), $cbcClass$$4_elemInnerSize$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $cbcClass$$4_elemInnerSize$$ = $bHoriz$$ ? $cbcClass$$4_elemInnerSize$$.$_getElemInnerWidth$(this.$_elem$) : $cbcClass$$4_elemInnerSize$$.$_getElemInnerHeight$(this.$_elem$);
    ($bHoriz$$ ? $contentContainer$$.offsetWidth : $contentContainer$$.offsetHeight) > $cbcClass$$4_elemInnerSize$$ && this.$_setOverflowMaxSize$($cbcClass$$4_elemInnerSize$$);
    this.$_minScroll$ = 0;
    this.$_maxScroll$ = $bHoriz$$ ? $contentContainer$$.offsetWidth - $cbcClass$$4_elemInnerSize$$ + this.$_buttonWidth$ : $contentContainer$$.offsetHeight - $cbcClass$$4_elemInnerSize$$ + this.$_buttonHeight$;
    0 > this.$_maxScroll$ && (this.$_maxScroll$ = 0);
    this.$_hidePrevButton$();
    this.$_hideNextButton$();
    this.$_setCurrScroll$($bInit$$1$$ ? this.$_minScroll$ : this.$_origScroll$, !0);
    this.$_origScroll$ = 0
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_createInnerContainers$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_createInnerContainers$$() {
    var $self$$89$$ = this, $bHoriz$$1_style$$2$$ = this.$_isHorizontal$(), $overflowContainer$$ = document.createElement("div");
    this.$_overflowContainer$ = $overflowContainer$$;
    var $elem$$29_overflowContainerStyle$$ = $overflowContainer$$.style;
    $elem$$29_overflowContainerStyle$$.overflow = "hidden";
    $elem$$29_overflowContainerStyle$$.display = this.$_getCssDisplay$();
    $elem$$29_overflowContainerStyle$$.position = "relative";
    $bHoriz$$1_style$$2$$ && ($elem$$29_overflowContainerStyle$$.verticalAlign = "top");
    var $elem$$29_overflowContainerStyle$$ = this.$_elem$, $cbcClass$$5$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $contentContainer$$1$$ = document.createElement("div");
    this.$_contentContainer$ = $contentContainer$$1$$;
    var $contentContainerStyle_tableDiv$$ = $contentContainer$$1$$.style;
    $contentContainerStyle_tableDiv$$.position = "relative";
    $bHoriz$$1_style$$2$$ && ($contentContainerStyle_tableDiv$$.display = "inline-block");
    $overflowContainer$$.appendChild($contentContainer$$1$$);
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
    $cbcClass$$5$$.$_reparentChildren$($elem$$29_overflowContainerStyle$$, $contentContainer$$1$$);
    $contentContainerStyle_tableDiv$$ ? $elem$$29_overflowContainerStyle$$.appendChild($contentContainerStyle_tableDiv$$) : $elem$$29_overflowContainerStyle$$.appendChild($overflowContainer$$);
    $cbcClass$$5$$.$_addBubbleEventListener$($overflowContainer$$, "scroll", function($event$$246$$) {
      $self$$89$$.$_handleScroll$($event$$246$$)
    })
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getCssDisplay$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getCssDisplay$$() {
    return this.$_isHorizontal$() ? "inline-block" : "block"
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_createPrevButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_createPrevButton$$($buttonId_elem$$30_prevButtonStyle$$1$$, $buttonStyleClass$$, $icon$$2$$) {
    var $self$$90$$ = this, $prevButton$$1$$ = document.createElement("div");
    this.$_prevButton$ = $prevButton$$1$$;
    $buttonId_elem$$30_prevButtonStyle$$1$$ && $prevButton$$1$$.setAttribute("id", $buttonId_elem$$30_prevButtonStyle$$1$$);
    $prevButton$$1$$.setAttribute("class", $buttonStyleClass$$);
    $prevButton$$1$$.setAttribute("aria-hidden", "true");
    $buttonId_elem$$30_prevButtonStyle$$1$$ = $prevButton$$1$$.style;
    $buttonId_elem$$30_prevButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonId_elem$$30_prevButtonStyle$$1$$.position = "relative";
    this.$_isHorizontal$() && ($buttonId_elem$$30_prevButtonStyle$$1$$.verticalAlign = "top");
    $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_addBubbleEventListener$($prevButton$$1$$, "click", function() {
      $self$$90$$.$_scrollPrev$()
    });
    this.$_tableCellDivPrevButton$ ? this.$_tableCellDivPrevButton$.appendChild($prevButton$$1$$) : ($buttonId_elem$$30_prevButtonStyle$$1$$ = this.$_elem$, $buttonId_elem$$30_prevButtonStyle$$1$$.insertBefore($prevButton$$1$$, $buttonId_elem$$30_prevButtonStyle$$1$$.firstChild));
    $icon$$2$$ && $prevButton$$1$$.appendChild($icon$$2$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_createNextButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_createNextButton$$($buttonId$$1_nextButtonStyle$$1$$, $buttonStyleClass$$1$$, $icon$$3$$) {
    var $self$$91$$ = this, $nextButton$$2$$ = document.createElement("div");
    this.$_nextButton$ = $nextButton$$2$$;
    $buttonId$$1_nextButtonStyle$$1$$ && $nextButton$$2$$.setAttribute("id", $buttonId$$1_nextButtonStyle$$1$$);
    $nextButton$$2$$.setAttribute("class", $buttonStyleClass$$1$$);
    $nextButton$$2$$.setAttribute("aria-hidden", "true");
    $buttonId$$1_nextButtonStyle$$1$$ = $nextButton$$2$$.style;
    $buttonId$$1_nextButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonId$$1_nextButtonStyle$$1$$.position = "relative";
    this.$_isHorizontal$() && ($buttonId$$1_nextButtonStyle$$1$$.verticalAlign = "top");
    $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_addBubbleEventListener$($nextButton$$2$$, "click", function() {
      $self$$91$$.$_scrollNext$()
    });
    this.$_tableCellDivNextButton$ ? this.$_tableCellDivNextButton$.appendChild($nextButton$$2$$) : this.$_elem$.appendChild($nextButton$$2$$);
    $icon$$3$$ && $nextButton$$2$$.appendChild($icon$$3$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getContentParent$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getContentParent$$() {
    var $contentParent$$2$$ = this.$_contentParent$;
    $contentParent$$2$$ || ($contentParent$$2$$ = this.$_contentContainer$);
    return $contentParent$$2$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_measureContents$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_measureContents$$() {
    var $children$$5_contentParent$$3$$ = this.$_getContentParent$(), $totalSize$$1$$ = {$w$:0, $h$:0}, $sizes$$1$$ = [];
    if($children$$5_contentParent$$3$$.hasChildNodes()) {
      for(var $children$$5_contentParent$$3$$ = $children$$5_contentParent$$3$$.childNodes, $bHoriz$$2$$ = this.$_isHorizontal$(), $contentWidth$$ = 0, $contentWidth$$ = this.$_contentContainer$.offsetWidth, $startOffset$$ = 0, $prevSizeObj$$ = null, $i$$259$$ = 0;$i$$259$$ < $children$$5_contentParent$$3$$.length;$i$$259$$++) {
        var $child$$6_overlap$$ = $children$$5_contentParent$$3$$[$i$$259$$];
        if(1 === $child$$6_overlap$$.nodeType) {
          var $ww$$ = $child$$6_overlap$$.offsetWidth, $hh$$ = $child$$6_overlap$$.offsetHeight, $sizeObj$$1$$ = {$w$:$ww$$, $h$:$hh$$, id:$child$$6_overlap$$.id};
          $bHoriz$$2$$ ? ($sizeObj$$1$$.start = this.$_bRtl$ ? $contentWidth$$ - ($child$$6_overlap$$.offsetLeft + $ww$$) : $child$$6_overlap$$.offsetLeft, 0 === $i$$259$$ && ($startOffset$$ = $sizeObj$$1$$.start), $sizeObj$$1$$.start -= $startOffset$$, $totalSize$$1$$.$w$ = $sizeObj$$1$$.start + $ww$$, $totalSize$$1$$.$h$ = Math.max($totalSize$$1$$.$h$, $hh$$), $sizeObj$$1$$.end = $totalSize$$1$$.$w$ - 1) : ($sizeObj$$1$$.start = $child$$6_overlap$$.offsetTop, $totalSize$$1$$.$w$ = Math.max($totalSize$$1$$.$w$, 
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
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setOverflowMaxSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setOverflowMaxSize$$($s$$34_size$$11$$) {
    var $overflowContainerStyle$$1$$ = this.$_overflowContainer$.style;
    $s$$34_size$$11$$ += "px";
    this.$_isHorizontal$() ? $overflowContainerStyle$$1$$.maxWidth = $s$$34_size$$11$$ : $overflowContainerStyle$$1$$.maxHeight = $s$$34_size$$11$$
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
        var $self$$92$$ = this;
        $scrollFunc$$.call(this.$_callbackObj$, this.$_overflowContainer$, this.$_convertScrollLogicalToBrowser$($scroll$$5$$), Math.abs(this.$_getCurrScroll$() - $scroll$$5$$) / $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SCROLL_SPEED$, function() {
          $self$$92$$.$_onScrollAnimEnd$($scroll$$5$$)
        })
      }
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getCurrScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getCurrScroll$$() {
    var $overflowContainer$$5$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? this.$_convertScrollBrowserToLogical$($overflowContainer$$5$$.scrollLeft) : $overflowContainer$$5$$.scrollTop
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_needsScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_needsScroll$$() {
    var $contentContainer$$3$$ = this.$_contentContainer$, $overflowContainer$$6$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? $contentContainer$$3$$.offsetWidth > $overflowContainer$$6$$.offsetWidth : $contentContainer$$3$$.offsetHeight > $overflowContainer$$6$$.offsetHeight
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_constrainScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_constrainScroll$$($scroll$$6$$) {
    !this.$_needsScroll$() || $scroll$$6$$ < this.$_minScroll$ ? $scroll$$6$$ = this.$_minScroll$ : $scroll$$6$$ > this.$_maxScroll$ && ($scroll$$6$$ = this.$_maxScroll$);
    return $scroll$$6$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleMouseWheel$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleMouseWheel$$($event$$249$$) {
    var $bConsumeEvent$$ = this.$_bScrolling$;
    if(this.$_needsScroll$() && !this.$_bScrolling$) {
      var $wheelDelta$$1$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getWheelDelta$($event$$249$$);
      0 > $wheelDelta$$1$$ && this.$_isNextButtonShown$() ? ($bConsumeEvent$$ = !0, this.$_scrollNext$()) : 0 < $wheelDelta$$1$$ && this.$_isPrevButtonShown$() && ($bConsumeEvent$$ = !0, this.$_scrollPrev$())
    }
    $bConsumeEvent$$ && ($event$$249$$.preventDefault(), $event$$249$$.stopPropagation())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleTouchStart$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleTouchStart$$($event$$250_eventTouches_firstTouch$$) {
    $event$$250_eventTouches_firstTouch$$ = $event$$250_eventTouches_firstTouch$$.touches;
    this.$_needsScroll$() && (!this.$_bScrolling$ && 1 === $event$$250_eventTouches_firstTouch$$.length) && (this.$_bTouch$ = !0, $event$$250_eventTouches_firstTouch$$ = $event$$250_eventTouches_firstTouch$$[0], this.$_touchStartCoord$ = this.$_isHorizontal$() ? $event$$250_eventTouches_firstTouch$$.pageX : $event$$250_eventTouches_firstTouch$$.pageY, this.$_touchStartScroll$ = this.$_getCurrScroll$(), this.$_touchStartNextScroll$ = this.$_calcNextScroll$(), this.$_touchStartPrevScroll$ = this.$_calcPrevScroll$())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleTouchMove$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleTouchMove$$($diff_event$$251_firstTouch$$1$$) {
    if(this.$_bTouch$) {
      var $bHoriz$$3$$ = this.$_isHorizontal$();
      $diff_event$$251_firstTouch$$1$$ = $diff_event$$251_firstTouch$$1$$.touches[0];
      $diff_event$$251_firstTouch$$1$$ = ($bHoriz$$3$$ ? $diff_event$$251_firstTouch$$1$$.pageX : $diff_event$$251_firstTouch$$1$$.pageY) - this.$_touchStartCoord$;
      var $overflowContainer$$7$$ = this.$_overflowContainer$;
      Math.abs($diff_event$$251_firstTouch$$1$$) < $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SWIPE_THRESHOLD$ * ($bHoriz$$3$$ ? $overflowContainer$$7$$.offsetWidth : $overflowContainer$$7$$.offsetHeight) ? this.$_setCurrScroll$(this.$_touchStartScroll$ - $diff_event$$251_firstTouch$$1$$, !0) : (this.$_setCurrScroll$(($bHoriz$$3$$ && this.$_bRtl$ ? 0 < $diff_event$$251_firstTouch$$1$$ : 0 > $diff_event$$251_firstTouch$$1$$) ? this.$_touchStartNextScroll$ : this.$_touchStartPrevScroll$), 
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
    var $self$$93$$ = this;
    window.setTimeout(function() {
      $self$$93$$ && ($self$$93$$.$_bExternalScroll$ = !0)
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
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcStartScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcStartScroll$$($index$$167$$) {
    return this.$_getSizes$()[$index$$167$$].start
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcEndScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcEndScroll$$($index$$168$$) {
    return this.$_getSizes$()[$index$$168$$].end - this.$_getCurrViewportSize$() + 1
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcFirstVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcFirstVisibleItemIndex$$() {
    var $i$$260$$ = this.$_calcItemIndex$(this.$_getCurrScroll$());
    return 0 > $i$$260$$ ? 0 : $i$$260$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcLastVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcLastVisibleItemIndex$$() {
    var $i$$261$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$() - 1), $sizes$$5$$ = this.$_getSizes$();
    return 0 > $i$$261$$ ? $sizes$$5$$.length - 1 : $i$$261$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcPrevVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcPrevVisibleItemIndex$$() {
    var $i$$262$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() - 1);
    return 0 > $i$$262$$ ? 0 : $i$$262$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcNextVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcNextVisibleItemIndex$$() {
    var $i$$263$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$()), $sizes$$6$$ = this.$_getSizes$();
    return 0 > $i$$263$$ ? $sizes$$6$$.length - 1 : $i$$263$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcItemIndex$$($scroll$$10$$) {
    for(var $sizes$$7$$ = this.$_getSizes$(), $i$$264$$ = 0;$i$$264$$ < $sizes$$7$$.length;$i$$264$$++) {
      if($scroll$$10$$ <= $sizes$$7$$[$i$$264$$].end) {
        return $i$$264$$
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
  (function() {
    var $sizeRelatedOptions$$ = {buttons:!0, height:!0, maxHeight:!0, maxWidth:!0, minHeight:!0, minWidth:!0, width:!0}, $resizableRelatedOptions$$ = {maxHeight:!0, maxWidth:!0, minHeight:!0, minWidth:!0};
    $oj$$19$$.$__registerWidget$("oj.ojDialog", $$$$18$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{appendTo:null, autoOpen:!0, buttons:[], escapeBehavior:"close", cancelBehavior:"icon", closeOnEscape:!0, closeText:"", dialogClass:"", dragAffordance:"title-bar", draggable:!0, hide:null, height:"auto", initialVisibility:"show", maxHeight:null, maxWidth:null, minHeight:150, minWidth:150, modal:!1, modality:"modal", position:{my:"center", at:"center", of:window, collision:"fit", 
    $using$:function($pos$$11$$) {
      var $topOffset$$ = $$$$18$$(this).css($pos$$11$$).offset().top;
      0 > $topOffset$$ && $$$$18$$(this).css("top", $pos$$11$$.top - $topOffset$$)
    }}, resizeBehavior:"resizable", resizable:!0, role:"resizable", show:null, title:null, width:300, beforeClose:null, close:null, drag:null, dragStart:null, dragStop:null, focus:null, open:null, resize:null, resizeStart:null, resizeStop:null}, _create:function() {
      this.$originalCss$ = {display:this.element[0].style.display, width:this.element[0].style.width, minHeight:this.element[0].style.minHeight, maxHeight:this.element[0].style.maxHeight, height:this.element[0].style.height};
      this.$originalPosition$ = {parent:this.element.parent(), index:this.element.parent().children().index(this.element)};
      this.$originalTitle$ = this.element.attr("title");
      this.options.title = this.options.title || this.$originalTitle$;
      this.$_createWrapper$();
      this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.$uiDialog$);
      this.$userDefinedDialog$ = !1;
      var $b$$47_nestedContent$$ = this.element.find(".oj-dialog");
      $b$$47_nestedContent$$.length ? $b$$47_nestedContent$$.parents(".oj-dialog-header").length && (this.$userDefinedDialog$ = !0) : this.element.find(".oj-dialog-header").length && (this.$userDefinedDialog$ = !0);
      this.$userDefinedDialog$ && ($b$$47_nestedContent$$ = this.element.find(".oj-dialog-header"), $b$$47_nestedContent$$.prependTo(this.$uiDialog$), "icon" === this.options.cancelBehavior && this.$_createCloseButton$($b$$47_nestedContent$$));
      this.$userDefinedDialog$ || this.$_createTitlebar$();
      this.$_createButtonPane$();
      "title-bar" === this.options.dragAffordance && $$$$18$$.fn.draggable && this.$_makeDraggable$();
      "resizable" === this.options.resizeBehavior && $$$$18$$.fn.resizable && this.$_makeResizable$();
      this.$_isOpen$ = !1;
      this._super()
    }, _init:function() {
      "show" === this.options.initialVisibility && this.open()
    }, $_appendTo$:function() {
      var $element$$64$$ = this.options.appendTo;
      return $element$$64$$ && ($element$$64$$.jquery || $element$$64$$.nodeType) ? $$$$18$$($element$$64$$) : this.document.find($element$$64$$ || "body").eq(0)
    }, _destroy:function() {
      var $next$$3$$, $originalPosition$$ = this.$originalPosition$;
      this.$_destroyOverlay$();
      this.element.removeUniqueId().removeClass("oj-dialog-content").css(this.$originalCss$).detach();
      this.$uiDialog$.stop(!0, !0).remove();
      this.$originalTitle$ && this.element.attr("title", this.$originalTitle$);
      $next$$3$$ = $originalPosition$$.parent.children().eq($originalPosition$$.index);
      $next$$3$$.length && $next$$3$$[0] !== this.element[0] ? $next$$3$$.before(this.element) : $originalPosition$$.parent.append(this.element)
    }, widget:$JSCompiler_get$$("$uiDialog$"), disable:$$$$18$$.noop, enable:$$$$18$$.noop, close:function($event$$254$$) {
      var $that$$3$$ = this;
      this.$_isOpen$ && !1 !== this._trigger("beforeClose", $event$$254$$) && (this.$_isOpen$ = !1, this.$_destroyOverlay$(), this.opener.filter(":focusable").focus().length || $$$$18$$(this.document[0].activeElement).blur(), this._hide(this.$uiDialog$, this.options.hide, function() {
        $that$$3$$._trigger("close", $event$$254$$)
      }))
    }, isOpen:$JSCompiler_get$$("$_isOpen$"), $moveToTop$:function() {
      this.$_moveToTop$()
    }, $_moveToTop$:function($event$$255$$, $silent$$16$$) {
      if(null === this.options.appendTo) {
        var $lastDialog_moved$$ = $$$$18$$(".oj-dialog").not(":hidden").last();
        return $lastDialog_moved$$ ? this.$uiDialog$ != $lastDialog_moved$$ ? (this.$uiDialog$.insertAfter($lastDialog_moved$$), $silent$$16$$ || this._trigger("focus", $event$$255$$), !0) : !1 : !1
      }
      ($lastDialog_moved$$ = !!this.$uiDialog$.nextAll(":visible").insertBefore(this.$uiDialog$).length) && !$silent$$16$$ && this._trigger("focus", $event$$255$$);
      return $lastDialog_moved$$
    }, open:function() {
      var $that$$4$$ = this;
      this.$_isOpen$ ? this.$_moveToTop$() && this.$_focusTabbable$() : (this.$_isOpen$ = !0, this.opener = $$$$18$$(this.document[0].activeElement), this.$_size$(), this.$_position$(), this.$_createOverlay$(), this.$_moveToTop$(null, !0), this._show(this.$uiDialog$, this.options.show, function() {
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
    }, $_keepFocus$:function($event$$256$$) {
      function $checkFocus$$() {
        var $activeElement$$2$$ = this.document[0].activeElement;
        this.$uiDialog$[0] === $activeElement$$2$$ || $$$$18$$.contains(this.$uiDialog$[0], $activeElement$$2$$) || this.$_focusTabbable$()
      }
      $event$$256$$.preventDefault();
      $checkFocus$$.call(this);
      this._delay($checkFocus$$)
    }, $_createWrapper$:function() {
      this.$uiDialog$ = $$$$18$$("\x3cdiv\x3e").addClass("oj-dialog oj-widget oj-dialog-front " + this.options.dialogClass).hide().attr({tabIndex:-1, role:"dialog"});
      null === this.options.appendTo ? this.$uiDialog$.insertBefore(this.element) : this.$uiDialog$.appendTo(this.$_appendTo$());
      this._on(this.$uiDialog$, {keydown:function($event$$257$$) {
        if("none" != this.options.cancelBehavior && !$event$$257$$.isDefaultPrevented() && $event$$257$$.keyCode && $event$$257$$.keyCode === $$$$18$$.ui.keyCode.ESCAPE) {
          $event$$257$$.preventDefault(), this.close($event$$257$$)
        }else {
          if($event$$257$$.keyCode === $$$$18$$.ui.keyCode.TAB) {
            var $last$$3_tabbables$$ = this.$uiDialog$.find(":tabbable"), $first$$7$$ = $last$$3_tabbables$$.filter(":first"), $last$$3_tabbables$$ = $last$$3_tabbables$$.filter(":last");
            $event$$257$$.target !== $last$$3_tabbables$$[0] && $event$$257$$.target !== this.$uiDialog$[0] || $event$$257$$.shiftKey ? $event$$257$$.target !== $first$$7$$[0] && $event$$257$$.target !== this.$uiDialog$[0] || !$event$$257$$.shiftKey || ($last$$3_tabbables$$.focus(1), $event$$257$$.preventDefault()) : ($first$$7$$.focus(1), $event$$257$$.preventDefault())
          }
        }
      }, mousedown:function($event$$258$$) {
        this.$_moveToTop$($event$$258$$) && this.$_focusTabbable$()
      }});
      this.element.find("[aria-describedby]").length || this.$uiDialog$.attr({"aria-describedby":this.element.uniqueId().attr("id")})
    }, $_createCloseButton$:function($domDestination$$) {
      this.$uiDialogTitlebarClose$ = $$$$18$$("\x3cbutton\x3e\x3c/button\x3e").ojButton({display:"icons", icons:{start:"oj-widget-icon oj-dialog-close-icon"}, text:!1}).addClass("oj-dialog-header-close oj-button-no-chrome").appendTo($domDestination$$);
      this._on(this.$uiDialogTitlebarClose$, {click:function($event$$259$$) {
        $event$$259$$.preventDefault();
        this.close($event$$259$$)
      }})
    }, $_createTitlebar$:function() {
      var $uiDialogTitle$$;
      this.$uiDialogTitlebar$ = $$$$18$$("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix oj-dialog-temp-createdtitlebar").prependTo(this.$uiDialog$);
      this._on(this.$uiDialogTitlebar$, {mousedown:function($event$$260$$) {
        $$$$18$$($event$$260$$.target).closest(".oj-dialog-close-icon") || this.$uiDialog$.focus()
      }});
      "icon" === this.options.cancelBehavior && this.$_createCloseButton$(this.$uiDialogTitlebar$);
      $uiDialogTitle$$ = $$$$18$$("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").prependTo(this.$uiDialogTitlebar$);
      this.$_title$($uiDialogTitle$$);
      this.$uiDialog$.attr({"aria-labelledby":$uiDialogTitle$$.attr("id")})
    }, $_title$:function($title$$9$$) {
      this.options.title || $title$$9$$.html("\x26#160;");
      $title$$9$$.text(this.options.title)
    }, $_createButtonPane$:function() {
      this.$uiDialogButtonPane$ = $$$$18$$("\x3cdiv\x3e").addClass("oj-dialog-buttonpane oj-helper-clearfix");
      this.$uiButtonSet$ = $$$$18$$("\x3cdiv\x3e").addClass("oj-dialog-buttonset").appendTo(this.$uiDialogButtonPane$);
      this.$_createButtons$()
    }, $_createButtons$:function() {
      var $that$$5$$ = this, $buttons$$1$$ = this.options.buttons;
      this.$uiDialogButtonPane$.remove();
      this.$uiButtonSet$.empty();
      $$$$18$$.isEmptyObject($buttons$$1$$) || $$$$18$$.isArray($buttons$$1$$) && !$buttons$$1$$.length ? this.$uiDialog$.removeClass("oj-dialog-buttons") : ($$$$18$$.each($buttons$$1$$, function($name$$98$$, $props$$5$$) {
        var $click$$, $buttonOptions$$;
        $props$$5$$ = $$$$18$$.isFunction($props$$5$$) ? {click:$props$$5$$, text:$name$$98$$} : $props$$5$$;
        $props$$5$$ = $$$$18$$.extend({type:"button"}, $props$$5$$);
        $click$$ = $props$$5$$.click;
        $props$$5$$.click = function $$props$$5$$$click$() {
          $click$$.apply($that$$5$$.element[0], arguments)
        };
        $buttonOptions$$ = {icons:$props$$5$$.icons, text:$props$$5$$.showText};
        delete $props$$5$$.icons;
        delete $props$$5$$.showText;
        $$$$18$$("\x3cbutton\x3e\x3c/button\x3e", $props$$5$$).ojButton($buttonOptions$$).appendTo($that$$5$$.$uiButtonSet$)
      }), this.$uiDialog$.addClass("oj-dialog-buttons"), this.$uiDialogButtonPane$.appendTo(this.$uiDialog$))
    }, $_makeDraggable$:function() {
      function $filteredUi$$($ui$$19$$) {
        return{position:$ui$$19$$.position, offset:$ui$$19$$.offset}
      }
      var $that$$6$$ = this, $options$$295$$ = this.options;
      this.$uiDialog$.draggable({cancel:".oj-dialog-content, .oj-dialog-header-close", handle:".oj-dialog-header", $containment$:"document", start:function($event$$261$$, $ui$$20$$) {
        $$$$18$$(this).addClass("oj-dialog-dragging");
        $that$$6$$.$_blockFrames$();
        $that$$6$$._trigger("dragStart", $event$$261$$, $filteredUi$$($ui$$20$$))
      }, drag:function($event$$262$$, $ui$$21$$) {
        $that$$6$$._trigger("drag", $event$$262$$, $filteredUi$$($ui$$21$$))
      }, stop:function($event$$263$$, $ui$$22$$) {
        $options$$295$$.position = [$ui$$22$$.position.left - $that$$6$$.document.scrollLeft(), $ui$$22$$.position.top - $that$$6$$.document.scrollTop()];
        $$$$18$$(this).removeClass("oj-dialog-dragging");
        $that$$6$$.$_unblockFrames$();
        $that$$6$$._trigger("dragStop", $event$$263$$, $filteredUi$$($ui$$22$$))
      }})
    }, $_makeResizable$:function() {
      function $filteredUi$$1$$($ui$$23$$) {
        return{$originalPosition$:$ui$$23$$.$originalPosition$, $originalSize$:$ui$$23$$.$originalSize$, position:$ui$$23$$.position, size:$ui$$23$$.size}
      }
      var $that$$7$$ = this, $options$$296$$ = this.options, $handles_resizeHandles$$ = $options$$296$$.resizable, $position$$20$$ = this.$uiDialog$.css("position"), $handles_resizeHandles$$ = "string" === typeof $handles_resizeHandles$$ ? $handles_resizeHandles$$ : "n,e,s,w,se,sw,ne,nw";
      this.$uiDialog$.resizable({cancel:".oj-dialog-content", $containment$:"document", $alsoResize$:this.element, maxWidth:$options$$296$$.maxWidth, maxHeight:$options$$296$$.maxHeight, minWidth:$options$$296$$.minWidth, minHeight:this.$_minHeight$(), $handles$:$handles_resizeHandles$$, start:function($event$$264$$, $ui$$24$$) {
        $$$$18$$(this).addClass("oj-dialog-resizing");
        $that$$7$$.$_blockFrames$();
        $that$$7$$._trigger("resizeStart", $event$$264$$, $filteredUi$$1$$($ui$$24$$))
      }, resize:function($event$$265$$, $ui$$25$$) {
        $that$$7$$._trigger("resize", $event$$265$$, $filteredUi$$1$$($ui$$25$$))
      }, stop:function($event$$266$$, $ui$$26$$) {
        $options$$296$$.height = $$$$18$$(this).height();
        $options$$296$$.width = $$$$18$$(this).width();
        $$$$18$$(this).removeClass("oj-dialog-resizing");
        $that$$7$$.$_unblockFrames$();
        $that$$7$$._trigger("resizeStop", $event$$266$$, $filteredUi$$1$$($ui$$26$$))
      }}).css("position", $position$$20$$)
    }, $_minHeight$:function() {
      var $options$$297$$ = this.options;
      return"auto" === $options$$297$$.height ? $options$$297$$.minHeight : Math.min($options$$297$$.minHeight, $options$$297$$.height)
    }, $_position$:function() {
      var $isVisible$$ = this.$uiDialog$.is(":visible");
      $isVisible$$ || this.$uiDialog$.show();
      this.$uiDialog$.position(this.options.position);
      $isVisible$$ || this.$uiDialog$.hide()
    }, _setOptions:function($options$$298$$) {
      var $that$$8$$ = this, $resize$$2$$ = !1, $resizableOptions$$ = {};
      $$$$18$$.each($options$$298$$, function($key$$98$$, $value$$180$$) {
        $that$$8$$._setOption($key$$98$$, $value$$180$$);
        $key$$98$$ in $sizeRelatedOptions$$ && ($resize$$2$$ = !0);
        $key$$98$$ in $resizableRelatedOptions$$ && ($resizableOptions$$[$key$$98$$] = $value$$180$$)
      });
      $resize$$2$$ && (this.$_size$(), this.$_position$());
      this.$uiDialog$.is(":data(oj-resizable)") && this.$uiDialog$.resizable("option", $resizableOptions$$)
    }, _setOption:function($key$$99$$, $value$$181$$) {
      var $isDraggable_isResizable$$, $uiDialog$$ = this.$uiDialog$;
      "dialogClass" === $key$$99$$ && $uiDialog$$.removeClass(this.options.dialogClass).addClass($value$$181$$);
      "disabled" !== $key$$99$$ && (this._super($key$$99$$, $value$$181$$), "appendTo" === $key$$99$$ && this.$uiDialog$.appendTo(this.$_appendTo$()), "buttons" === $key$$99$$ && this.$_createButtons$(), "draggable" === $key$$99$$ && (($isDraggable_isResizable$$ = $uiDialog$$.is(":data(oj-draggable)")) && !$value$$181$$ && $uiDialog$$.draggable("destroy"), !$isDraggable_isResizable$$ && $value$$181$$ && this.$_makeDraggable$()), "position" === $key$$99$$ && this.$_position$(), "resizable" === $key$$99$$ && 
      (($isDraggable_isResizable$$ = $uiDialog$$.is(":data(oj-resizable)")) && !$value$$181$$ && $uiDialog$$.resizable("destroy"), $isDraggable_isResizable$$ && "string" === typeof $value$$181$$ && $uiDialog$$.resizable("option", "handles", $value$$181$$), $isDraggable_isResizable$$ || !1 === $value$$181$$ || this.$_makeResizable$()), "title" === $key$$99$$ && this.$_title$(this.$uiDialogTitlebar$.find(".oj-dialog-title")))
    }, $_size$:function() {
      var $nonContentHeight$$, $minContentHeight$$, $maxContentHeight$$, $options$$299$$ = this.options;
      this.element.show().css({width:"auto", minHeight:0, maxHeight:"none", height:0});
      $options$$299$$.minWidth > $options$$299$$.width && ($options$$299$$.width = $options$$299$$.minWidth);
      $nonContentHeight$$ = this.$uiDialog$.css({height:"auto", width:$options$$299$$.width}).outerHeight();
      $minContentHeight$$ = Math.max(0, $options$$299$$.minHeight - $nonContentHeight$$);
      $maxContentHeight$$ = "number" === typeof $options$$299$$.maxHeight ? Math.max(0, $options$$299$$.maxHeight - $nonContentHeight$$) : "none";
      "auto" === $options$$299$$.height ? this.element.css({minHeight:$minContentHeight$$, maxHeight:$maxContentHeight$$, height:"auto"}) : this.element.height(Math.max(0, $options$$299$$.height - $nonContentHeight$$));
      this.$uiDialog$.is(":data(oj-resizable)") && this.$uiDialog$.resizable("option", "minHeight", this.$_minHeight$())
    }, $_blockFrames$:function() {
      this.$iframeBlocks$ = this.document.find("iframe").map(function() {
        var $iframe$$ = $$$$18$$(this), $offset$$24$$ = $iframe$$.offset();
        return $$$$18$$("\x3cdiv\x3e").css({position:"absolute", width:$iframe$$.outerWidth(), height:$iframe$$.outerHeight()}).appendTo($iframe$$.parent()).offset($offset$$24$$)[0]
      })
    }, $_unblockFrames$:function() {
      this.$iframeBlocks$ && (this.$iframeBlocks$.remove(), delete this.$iframeBlocks$)
    }, $_allowInteraction$:function($event$$267$$) {
      return $$$$18$$($event$$267$$.target).closest(".oj-dialog").length ? !0 : !!$$$$18$$($event$$267$$.target).closest(".oj-datepicker").length
    }, $_createOverlay$:function() {
      if("modeless" !== this.options.modality) {
        var $that$$9$$ = this, $widgetFullName$$ = this.widgetFullName;
        $$$$18$$.ui.dialog.overlayInstances || this._delay(function() {
          $$$$18$$.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function($event$$268$$) {
            $that$$9$$.$_allowInteraction$($event$$268$$) || ($event$$268$$.preventDefault(), $$$$18$$(".oj-dialog:visible:last .oj-dialog-content").data($widgetFullName$$).$_focusTabbable$())
          })
        });
        this.$overlay$ = $$$$18$$("\x3cdiv\x3e").addClass("oj-widget-overlay oj-dialog-front");
        null === this.options.appendTo ? this.$overlay$.insertBefore(this.$uiDialog$) : this.$overlay$.appendTo(this.$_appendTo$());
        this._on(this.$overlay$, {mousedown:"_keepFocus"});
        $$$$18$$.ui.dialog.overlayInstances++
      }
    }, $_destroyOverlay$:function() {
      "modeless" !== this.options.modality && this.$overlay$ && ($$$$18$$.ui.dialog.overlayInstances--, $$$$18$$.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.$overlay$.remove(), this.$overlay$ = null)
    }, getNodeBySubId:function($locator$$16_subId$$10$$) {
      if(null == $locator$$16_subId$$10$$) {
        return this.element ? this.element[0] : null
      }
      $locator$$16_subId$$10$$ = $locator$$16_subId$$10$$.subId;
      switch($locator$$16_subId$$10$$) {
        case "oj-dialog-header":
        ;
        case "oj-dialog-body":
        ;
        case "oj-dialog-footer":
        ;
        case "oj-dialog-content":
        ;
        case "oj-dialog-header-close":
        ;
        case "ui-resizable-n":
        ;
        case "ui-resizable-e":
        ;
        case "ui-resizable-s":
        ;
        case "ui-resizable-w":
        ;
        case "ui-resizable-se":
        ;
        case "ui-resizable-sw":
        ;
        case "ui-resizable-ne":
        ;
        case "ui-resizable-nw":
          return this.widget().find($locator$$16_subId$$10$$)[0]
      }
      return null
    }});
    $$$$18$$.ui.dialog.overlayInstances = 0
  })();
  $oj$$19$$.$__registerWidget$("oj.ojCheckboxset", $$$$18$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{}, refresh:function() {
    this._super();
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$().filter(".oj-checkbox")._ojRadioCheckbox("refresh").end().not(".oj-checkbox")._ojRadioCheckbox().end();
    this.$_setup$()
  }, widget:$JSCompiler_get$$("$uiCheckboxset$"), _CreateComponent:function() {
    this._super();
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$()._ojRadioCheckbox();
    this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-widget").attr("role", "group");
    this._on(this.$_events$);
    this.$_setup$();
    this.$_SetRootAttributes$()
  }, $_findCheckboxesWithMatchingName$:function() {
    var $first$$8_name$$99$$ = this.element.find("input[type\x3dcheckbox]:first");
    0 === $first$$8_name$$99$$.length && $oj$$19$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
    $first$$8_name$$99$$ = $first$$8_name$$99$$.attr("name");
    return void 0 === $first$$8_name$$99$$ ? this.element.find("input[type\x3dcheckbox]").not("[name]") : this.element.find("input[type\x3dcheckbox][name\x3d" + $first$$8_name$$99$$ + "]")
  }, $_showContextMenu$:function($menu$$15$$, $event$$269$$) {
    var $checkboxes_launcher$$10$$ = this.element.find("input[type\x3dcheckbox]"), $checked$$4$$ = $checkboxes_launcher$$10$$.filter(":checked"), $checkboxes_launcher$$10$$ = $checked$$4$$.length ? $checked$$4$$ : $checkboxes_launcher$$10$$.first();
    $menu$$15$$.show($event$$269$$, {launcher:$checkboxes_launcher$$10$$, focus:"menu"})
  }, $_setup$:function() {
    this.options.disabled && this.disable()
  }, $_events$:{change:function($event$$270$$) {
    this._HandleChangeEvent($event$$270$$)
  }}, _HandleChangeEvent:function() {
    this._super()
  }, _GetDisplayValue:function() {
    return this._GetElementValue()
  }, _SetDisplayValue:function($checkedBoxes$$) {
    this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
    if(null != $checkedBoxes$$) {
      for(var $i$$265$$ = 0;$i$$265$$ < $checkedBoxes$$.length;$i$$265$$++) {
        var $checkboxWithMatchingValue_valueFilter$$1$$ = "[value\x3d'" + $checkedBoxes$$[$i$$265$$] + "']";
        void 0 !== $checkboxWithMatchingValue_valueFilter$$1$$ && void 0 !== this.$$checkboxes$ && ($checkboxWithMatchingValue_valueFilter$$1$$ = this.$$checkboxes$.filter($checkboxWithMatchingValue_valueFilter$$1$$), void 0 !== $checkboxWithMatchingValue_valueFilter$$1$$ && 0 < $checkboxWithMatchingValue_valueFilter$$1$$.length && ($checkboxWithMatchingValue_valueFilter$$1$$.prop("checked") || $checkboxWithMatchingValue_valueFilter$$1$$._ojRadioCheckbox("option", "checked", !0)))
      }
    }
  }, _GetElementValue:function() {
    var $checkedValues$$ = [], $selectedCheckbox$$ = this.$$checkboxes$.filter(":checked");
    if(0 === $selectedCheckbox$$.length) {
      return null
    }
    $selectedCheckbox$$.each(function() {
      $checkedValues$$.push($$$$18$$(this).val())
    });
    return $checkedValues$$
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-checkboxset"), _GetContentElement:function() {
    return this.$_findCheckboxesWithMatchingName$()
  }, _RefreshAriaRequired:function($ariaValue$$3_value$$183$$) {
    var $rootNode$$1$$ = this.$uiCheckboxset$;
    ($ariaValue$$3_value$$183$$ = "required" == $ariaValue$$3_value$$183$$ ? !0 : !1) && $rootNode$$1$$ ? $rootNode$$1$$.attr("aria-required", $ariaValue$$3_value$$183$$) : $rootNode$$1$$.removeAttr("aria-required")
  }, _setOption:function($key$$100$$, $value$$184$$) {
    this._super($key$$100$$, $value$$184$$);
    "disabled" === $key$$100$$ && this.$$checkboxes$._ojRadioCheckbox("option", $key$$100$$, $value$$184$$)
  }, getNodeBySubId:function($locator$$17$$) {
    return null == $locator$$17$$ ? this.element ? this.element[0] : null : "oj-checkboxset-inputs" === $locator$$17$$.subId ? this.$$checkboxes$ : null
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-checkboxset oj-enabled oj-widget").removeAttr("role");
    this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy")
  }});
  (function() {
    $oj$$19$$.$__registerWidget$("oj.ojTabs", $$$$18$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", delay:300, options:{active:0, disabled:!1, $tabSizeBehavior$:"auto", $tabMinWidth$:40, $tabMaxWidth$:100, event:"click", orientation:"horizontal", removable:!1, reorder:!1, activate:null, beforeActivate:null, remove:null, beforeRemove:null}, _create:function() {
      var $self$$94$$ = this, $options$$300$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_setupOrientation$($options$$300$$.orientation);
      this.element.delegate(".oj-tabs-nav \x3e li", "mousedown" + this.eventNamespace, function($event$$272$$) {
        $$$$18$$(this).is(".oj-disabled") && $event$$272$$.preventDefault()
      }).delegate(".oj-tabs-anchor", "focus" + this.eventNamespace, function() {
        $$$$18$$(this).closest("li").is(".oj-disabled") && this.blur()
      });
      this.$_processTabs$();
      if($$$$18$$.isArray($options$$300$$.disabled)) {
        var $disabledTabs$$ = this.$tabs$.filter(".oj-disabled");
        $options$$300$$.disabled = $$$$18$$.unique($options$$300$$.disabled.concat($$$$18$$.map($disabledTabs$$, function($li$$1$$) {
          return $self$$94$$.$tabs$.index($li$$1$$)
        }))).sort()
      }
      this.$_needActivate$ = $options$$300$$.active;
      $options$$300$$.active = -1;
      this.$_refresh$()
    }, $_showContextMenu$:function($menu$$16$$, $event$$273$$) {
      $menu$$16$$.show($event$$273$$, {launcher:this.element.children(".oj-tabs-nav").children("[tabindex\x3d0]"), focus:"menu"})
    }, $_tabKeydown$:function($event$$274$$) {
      var $focusedTab$$ = $$$$18$$(this.document[0].activeElement).closest("li"), $selectedIndex$$ = this.$tabs$.index($focusedTab$$), $goingForward$$ = !0;
      if(!this.$_handlePageNav$($event$$274$$)) {
        switch($event$$274$$.keyCode) {
          case $$$$18$$.ui.keyCode.RIGHT:
          ;
          case $$$$18$$.ui.keyCode.DOWN:
            $selectedIndex$$++;
            break;
          case $$$$18$$.ui.keyCode.UP:
          ;
          case $$$$18$$.ui.keyCode.LEFT:
            $goingForward$$ = !1;
            $selectedIndex$$--;
            break;
          case $$$$18$$.ui.keyCode.END:
            $selectedIndex$$ = this.$tabs$.length - 1;
            break;
          case $$$$18$$.ui.keyCode.HOME:
            $selectedIndex$$ = 0;
            break;
          default:
            return
        }
        $event$$274$$.preventDefault();
        clearTimeout(this.$activating$);
        $selectedIndex$$ = this.$_focusNextTab$($selectedIndex$$, $goingForward$$);
        $event$$274$$.ctrlKey || ($focusedTab$$.attr("aria-selected", "false"), this.$tabs$.eq($selectedIndex$$).attr("aria-selected", "true"), this.$activating$ = this._delay(function() {
          this.option("active", $selectedIndex$$)
        }, this.delay))
      }
    }, $_panelKeydown$:function($anchor_event$$275$$) {
      this.$_handlePageNav$($anchor_event$$275$$) || ($anchor_event$$275$$.ctrlKey && $anchor_event$$275$$.keyCode === $$$$18$$.ui.keyCode.UP && ($anchor_event$$275$$.preventDefault(), this.active.focus()), $anchor_event$$275$$.altKey && 46 === $anchor_event$$275$$.keyCode && ($anchor_event$$275$$.preventDefault(), $anchor_event$$275$$ = this.active.find(".oj-tabs-close-icon"), this.$_removeTabHandler$({target:$anchor_event$$275$$, currentTarget:$anchor_event$$275$$, preventDefault:$$$$18$$.noop})))
    }, $_handlePageNav$:function($event$$276$$) {
      if($event$$276$$.ctrlKey && $event$$276$$.keyCode === $$$$18$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$(this.options.active - 1, !1)), !0
      }
      if($event$$276$$.ctrlKey && $event$$276$$.keyCode === $$$$18$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$(this.options.active + 1, !0)), !0
      }
    }, $_isTabDisabled$:function($index$$169$$) {
      return-1 != $$$$18$$.inArray($index$$169$$, this.options.disabled)
    }, $_findNextTab$:function($index$$170$$, $goingForward$$1$$) {
      function $constrain$$() {
        $index$$170$$ > $lastTabIndex$$ && ($index$$170$$ = 0);
        0 > $index$$170$$ && ($index$$170$$ = $lastTabIndex$$);
        return $index$$170$$
      }
      for(var $lastTabIndex$$ = this.$tabs$.length - 1;this.$_isTabDisabled$($constrain$$());) {
        $index$$170$$ = $goingForward$$1$$ ? $index$$170$$ + 1 : $index$$170$$ - 1
      }
      return $index$$170$$
    }, $_focusNextTab$:function($index$$171$$, $goingForward$$2$$) {
      $index$$171$$ = this.$_findNextTab$($index$$171$$, $goingForward$$2$$);
      this.$tabs$.eq($index$$171$$).focus();
      return $index$$171$$
    }, $_activateNextTab$:function($index$$172$$) {
      for(var $lastTabIndex$$1$$ = this.$tabs$.length - 1, $next$$4$$ = $index$$172$$ + 1;$next$$4$$ <= $lastTabIndex$$1$$;) {
        if(!this.$_isTabDisabled$($next$$4$$)) {
          return this.$_activate$($next$$4$$), $next$$4$$ - 1
        }
        $next$$4$$++
      }
      for($next$$4$$ = $index$$172$$ - 1;0 <= $next$$4$$;) {
        if(!this.$_isTabDisabled$($next$$4$$)) {
          return this.$_activate$($next$$4$$), $next$$4$$
        }
        $next$$4$$--
      }
      return-1
    }, _setOption:function($key$$101$$, $value$$185$$) {
      "active" === $key$$101$$ ? ("string" === typeof $value$$185$$ && ($value$$185$$ = this.$_parse$($value$$185$$)), this.$_activate$($value$$185$$)) : "disabled" === $key$$101$$ ? this.$_setupDisabled$($value$$185$$) : "removable" === $key$$101$$ ? this.$_setRemovable$($value$$185$$) : "reorder" === $key$$101$$ ? $value$$185$$ !== this.options.reorder && (this.options.reorder = $value$$185$$, this.$_setupReorder$()) : "orientation" === $key$$101$$ ? (this.$_setupOrientation$($value$$185$$), this.refresh()) : 
      (this._super($key$$101$$, $value$$185$$), "event" === $key$$101$$ && (this.$_tearDownEvents$(), this._super($key$$101$$, $value$$185$$), this.$_setupEvents$()))
    }, refresh:function() {
      this._super();
      this.$_destroyCloseIcons$();
      this.$_processTabs$();
      this.$_refresh$()
    }, $_refresh$:function() {
      this.active = this.$tabs$.length && -1 != this.options.active ? this.$_findActive$(this.options.active) : $$$$18$$();
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
      "horizontal" == this.options.orientation && (this.$_truncateBeforeOverflow$(), this.$_addConveyor$());
      this.$_setupReorder$()
    }, $_addConveyor$:function() {
      if("horizontal" == this.options.orientation) {
        var $tabsId$$ = this.$tablist$.uniqueId().attr("id"), $conveyorDiv$$ = this.$_getTabbarWrapper$().wrap("\x3cdiv\x3e").parent();
        $conveyorDiv$$.uniqueId().attr("id");
        this.$conveyor$ = $conveyorDiv$$.ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $tabsId$$})
      }
    }, $_processTabs$:function() {
      var $self$$95$$ = this;
      this.$_destroyTabBar$();
      this.$tablist$ = $$$$18$$("\x3cul\x3e").addClass("oj-tabs-nav oj-helper-reset oj-helper-clearfix").attr("role", "tablist").prependTo(this.element);
      this.$tabs$ = $$$$18$$();
      this.$panels$ = $$$$18$$();
      this.element.children(":not(.oj-tabs-nav)").each(function($index$$173$$) {
        var $anchorId_header$$8$$ = $$$$18$$(this).find("\x3e :first-child"), $headerClone_tab$$ = $anchorId_header$$8$$.clone();
        $headerClone_tab$$.addClass("oj-tabs-title").css("display", "").attr({"aria-hidden":"false"});
        $self$$95$$.$_removePrefixIds$($headerClone_tab$$);
        var $anchor$$1_ohd_originalAriaControls$$ = $anchorId_header$$8$$[0];
        $anchor$$1_ohd_originalAriaControls$$.id && $self$$95$$.$_addPrefixId$($anchor$$1_ohd_originalAriaControls$$);
        $anchorId_header$$8$$.find("[id]").each(function() {
          $self$$95$$.$_addPrefixId$(this)
        });
        $anchor$$1_ohd_originalAriaControls$$ = $headerClone_tab$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent();
        $anchor$$1_ohd_originalAriaControls$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        $headerClone_tab$$ = $anchor$$1_ohd_originalAriaControls$$.parent().addClass("oj-tabs-tab-content").parent().addClass("oj-tabs-default").attr({role:"tab", "aria-hidden":"false", tabIndex:"-1"});
        $headerClone_tab$$.appendTo($self$$95$$.$tablist$);
        $self$$95$$.$tabs$ = $self$$95$$.$tabs$.add($headerClone_tab$$);
        $anchorId_header$$8$$.hide().attr({"aria-hidden":"true"});
        var $anchorId_header$$8$$ = $anchor$$1_ohd_originalAriaControls$$.uniqueId().attr("id"), $anchor$$1_ohd_originalAriaControls$$ = $headerClone_tab$$.attr("aria-controls"), $panel$$ = $$$$18$$(this);
        $panel$$.hasClass("oj-disabled") && $self$$95$$.disable($index$$173$$);
        $anchor$$1_ohd_originalAriaControls$$ && $headerClone_tab$$.data("oj-tabs-aria-controls", $anchor$$1_ohd_originalAriaControls$$);
        $headerClone_tab$$.attr({"aria-controls":$panel$$.uniqueId().attr("id"), "aria-labelledby":$anchorId_header$$8$$});
        $self$$95$$.$panels$ = $self$$95$$.$panels$.add($panel$$);
        $panel$$.attr("aria-labelledby", $anchorId_header$$8$$)
      });
      if("vertical" == this.options.orientation) {
        var $maxTabWidth$$ = 0, $sumTabHeight$$ = 0;
        this.$tabs$.addClass("oj-tabs-active").each(function() {
          var $tab$$1$$ = $$$$18$$(this);
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
      $$$$18$$.isArray($disabled$$4$$) && ($disabled$$4$$.length ? $disabled$$4$$.length === this.$tabs$.length && ($disabled$$4$$ = !0) : $disabled$$4$$ = !1);
      this.$tabs$.each(function($index$$174$$) {
        !0 === $disabled$$4$$ || -1 !== $$$$18$$.inArray($index$$174$$, $disabled$$4$$) ? $$$$18$$(this).addClass("oj-disabled").attr("aria-disabled", "true") : $$$$18$$(this).removeClass("oj-disabled").removeAttr("aria-disabled")
      });
      this.options.disabled = $disabled$$4$$
    }, $_setupEvents$:function() {
      var $events$$2$$ = {keydown:this.$_tabKeydown$}, $enabledTabs_event$$277$$ = this.options.event;
      if($enabledTabs_event$$277$$) {
        var $self$$96$$ = this;
        $$$$18$$.each($enabledTabs_event$$277$$.split(" "), function($index$$175$$, $eventName$$2$$) {
          $events$$2$$[$eventName$$2$$] = $self$$96$$.$_eventHandler$
        })
      }
      $enabledTabs_event$$277$$ = this.$tabs$.not(".oj-disabled");
      this._on($enabledTabs_event$$277$$, $events$$2$$);
      this._on(this.$panels$, {keydown:this.$_panelKeydown$});
      if(this.options.removable) {
        var $revents$$ = {click:this.$_removeTabHandler$};
        this._on($enabledTabs_event$$277$$.find(".oj-tabs-close-icon"), $revents$$)
      }
      this._focusable($enabledTabs_event$$277$$);
      this._hoverable($enabledTabs_event$$277$$);
      this.$_activeable$($enabledTabs_event$$277$$)
    }, $_tearDownEvents$:function() {
      var $enabledTabs$$1$$ = this.$tabs$.not(".oj-disabled");
      this._off($enabledTabs$$1$$);
      this._off(this.$panels$)
    }, $_eventHandler$:function($event$$278$$) {
      var $options$$301$$ = this.options, $active$$1_eventData$$3$$ = this.active, $tab$$2$$ = $$$$18$$($event$$278$$.currentTarget).closest("li"), $clickedIsActive$$ = $tab$$2$$[0] === $active$$1_eventData$$3$$[0], $toShow$$ = this.$_getPanelForTab$($tab$$2$$), $toHide$$ = $active$$1_eventData$$3$$.length ? this.$_getPanelForTab$($active$$1_eventData$$3$$) : $$$$18$$(), $active$$1_eventData$$3$$ = {oldTab:$active$$1_eventData$$3$$, oldPanel:$toHide$$, newTab:$tab$$2$$, newPanel:$toShow$$};
      $event$$278$$.preventDefault();
      $tab$$2$$.hasClass("oj-disabled") || (this.$running$ || $clickedIsActive$$ || !1 === this._trigger("beforeActivate", $event$$278$$, $active$$1_eventData$$3$$)) || ($options$$301$$.active = this.$tabs$.index($tab$$2$$), this.active = $clickedIsActive$$ ? $$$$18$$() : $tab$$2$$, $toHide$$.length || $toShow$$.length || $$$$18$$.error("OJ Tabs: Mismatching fragment identifier."), this.$_toggle$($event$$278$$, $active$$1_eventData$$3$$))
    }, $_toggle$:function($event$$279$$, $eventData$$4$$) {
      var $toShow$$1$$ = $eventData$$4$$.newPanel, $toHide$$1$$ = $eventData$$4$$.oldPanel;
      this.$running$ = !0;
      $eventData$$4$$.oldTab.closest("li").removeClass("oj-tabs-active");
      $toHide$$1$$.hide();
      $eventData$$4$$.newTab.closest("li").addClass("oj-tabs-active");
      $toShow$$1$$.show();
      this.$running$ = !1;
      this._trigger("activate", $event$$279$$, $eventData$$4$$);
      $toHide$$1$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $eventData$$4$$.oldTab.attr("aria-selected", "false");
      $toShow$$1$$.length && $toHide$$1$$.length ? $eventData$$4$$.oldTab.attr("tabIndex", "-1") : $toShow$$1$$.length && this.$tabs$.filter(function() {
        return"0" === $$$$18$$(this).attr("tabIndex")
      }).attr("tabIndex", "-1");
      $toShow$$1$$.attr({"aria-expanded":"true", "aria-hidden":"false"});
      $eventData$$4$$.newTab.attr({"aria-selected":"true", tabIndex:"0"})
    }, $_activate$:function($anchor$$3_index$$176$$) {
      var $active$$3$$ = this.$_findActive$($anchor$$3_index$$176$$);
      $active$$3$$[0] !== this.active[0] && ($active$$3$$.length || ($active$$3$$ = this.active), this.options.active = $anchor$$3_index$$176$$, $anchor$$3_index$$176$$ = $active$$3$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$anchor$$3_index$$176$$, currentTarget:$anchor$$3_index$$176$$, preventDefault:$$$$18$$.noop}))
    }, $_findActive$:function($index$$177$$) {
      return this.$tabs$.eq($index$$177$$)
    }, $_createCloseIcons$:function() {
      this.options.removable && this.$tabs$.not(".oj-disabled").each(function() {
        var $div$$5$$ = $$$$18$$(this).find("\x3e :first-child");
        $$$$18$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-widget-icon oj-clickable-icon oj-tabs-close-icon").attr({tabIndex:"-1", "aria-labelledby":$$$$18$$(this).attr("id"), role:"presentation"}).appendTo($div$$5$$)
      })
    }, $_destroyCloseIcons$:function() {
      this.$tabs$.find("oj-tabs-close-icon").remove()
    }, $_destroyTabBar$:function() {
      this.$_tabMaxWidthApplied$ = !1;
      this.$_hasResizeListener$ && ($oj$$19$$.$DomUtils$.$removeResizeListener$(this.element[0], $$$$18$$.proxy(this.$handleResize$, this)), this.$_hasResizeListener$ = !1);
      this.$conveyor$ ? (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.active = this.$conveyor$ = null) : this.element.children(".oj-tabs-nav").remove()
    }, _destroy:function() {
      var $orientation$$1$$ = this.options.orientation;
      "vertical" == $orientation$$1$$ ? this.element.removeClass("oj-tabs-vertical oj-widget oj-helper-clearfix") : this.element.removeClass("oj-tabs oj-widget ");
      this.$_destroyTabBar$();
      var $self$$98$$ = this;
      this.$panels$.each(function() {
        $$$$18$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-disabled oj-tabs-panel").css("display", "");
        "vertical" == $orientation$$1$$ && $$$$18$$(this).css("margin-left", "").css("min-height", "");
        var $header$$9$$ = $$$$18$$(this).find("\x3e :first-child");
        $header$$9$$.css("display", "").removeAttr("aria-hidden");
        $self$$98$$.$_removePrefixIds$($header$$9$$)
      })
    }, enable:function($index$$178$$) {
      var $disabled$$5$$ = this.options.disabled;
      !1 !== $disabled$$5$$ && ($disabled$$5$$ = void 0 === $index$$178$$ ? !1 : $$$$18$$.isArray($disabled$$5$$) ? $$$$18$$.map($disabled$$5$$, function($num$$7$$) {
        return $num$$7$$ !== $index$$178$$ ? $num$$7$$ : null
      }) : $$$$18$$.map(this.$tabs$, function($li$$2$$, $num$$8$$) {
        return $num$$8$$ !== $index$$178$$ ? $num$$8$$ : null
      }), this.$_setupDisabled$($disabled$$5$$))
    }, disable:function($index$$179$$) {
      var $disabled$$6$$ = this.options.disabled;
      if(!0 !== $disabled$$6$$) {
        if(void 0 === $index$$179$$) {
          $disabled$$6$$ = !0
        }else {
          if(-1 !== $$$$18$$.inArray($index$$179$$, $disabled$$6$$)) {
            return
          }
          $disabled$$6$$ = $$$$18$$.isArray($disabled$$6$$) ? $$$$18$$.merge([$index$$179$$], $disabled$$6$$).sort() : [$index$$179$$]
        }
        this.$_setupDisabled$($disabled$$6$$)
      }
    }, $_setRemovable$:function($removable$$) {
      $removable$$ !== this.options.removable && (this.options.removable = $removable$$, this.refresh())
    }, $_removeTabHandler$:function($event$$280$$) {
      var $tab$$3$$ = $$$$18$$($event$$280$$.currentTarget).closest("li"), $panel$$1$$ = this.$_getPanelForTab$($tab$$3$$), $eventData$$5$$ = {tab:$tab$$3$$, panel:$panel$$1$$};
      if($tab$$3$$ && !1 !== this._trigger("beforeremove", $event$$280$$, $eventData$$5$$)) {
        var $idxRmTab$$ = this.$tabs$.index($tab$$3$$);
        $tab$$3$$.hasClass("oj-tabs-active") ? this.options.active = this.$_activateNextTab$($idxRmTab$$) : $idxRmTab$$ < this.options.active && (this.options.active = Math.max(0, this.options.active - 1));
        if($$$$18$$.isArray(this.options.disabled)) {
          for(var $adis$$ = this.options.disabled, $i$$266$$ = $adis$$.length - 1;0 <= $i$$266$$;$i$$266$$--) {
            $idxRmTab$$ == $adis$$[$i$$266$$] ? this.options.disabled = $adis$$ = $adis$$.splice($i$$266$$, 1) : $idxRmTab$$ < $adis$$[$i$$266$$] && ($adis$$[$i$$266$$] -= 1)
          }
        }
        $panel$$1$$.remove();
        $tab$$3$$.remove();
        this.refresh();
        this._trigger("remove", $event$$280$$, $eventData$$5$$)
      }
    }, addTab:function($newTab_options$$302$$) {
      this.element.append($newTab_options$$302$$);
      $newTab_options$$302$$ = this.options;
      if(-1 == $newTab_options$$302$$.active) {
        $newTab_options$$302$$.active = this.$tabs$.length;
        var $disabledTabs$$1$$ = this.$tabs$.filter(".oj-disabled"), $self$$99$$ = this;
        $newTab_options$$302$$.disabled = $$$$18$$.map($disabledTabs$$1$$, function($li$$3$$) {
          return $self$$99$$.$tabs$.index($li$$3$$)
        })
      }
      this.refresh()
    }, $_setupReorder$:function() {
      var $tabBar$$ = this.$conveyor$ ? this.$conveyor$.find(".oj-tabs-nav") : this.element.children(".oj-tabs-nav");
      if(this.options.reorder) {
        var $self$$100$$ = this;
        $tabBar$$.sortable({axis:"horizontal" == $self$$100$$.options.orientation ? "x" : "y", stop:function($event$$281$$, $ui$$27$$) {
          var $mvTab_prevTab$$ = $ui$$27$$.item, $mvContent$$ = $self$$100$$.$_getPanelForTab$($mvTab_prevTab$$), $mvTab_prevTab$$ = $mvTab_prevTab$$.prev();
          $mvTab_prevTab$$.length ? $self$$100$$.$_getPanelForTab$($mvTab_prevTab$$).after($mvContent$$) : $tabBar$$.after($mvContent$$)
        }})
      }else {
        $tabBar$$.sortable({disabled:!0})
      }
    }, $_setupOrientation$:function($value$$186$$) {
      $value$$186$$ || ($value$$186$$ = this.options.orientation);
      if("horizontal" == $value$$186$$) {
        this.element.addClass("oj-tabs oj-widget")
      }else {
        if("vertical" == $value$$186$$) {
          this.element.addClass("oj-tabs-vertical oj-widget oj-helper-clearfix")
        }else {
          return
        }
      }
      this.options.orientation = $value$$186$$
    }, $_sanitizeSelector$:function($hash$$1$$) {
      return $hash$$1$$ ? $hash$$1$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : ""
    }, $_getPanelForTab$:function($id$$37_tab$$4$$) {
      $id$$37_tab$$4$$ = $$$$18$$($id$$37_tab$$4$$).attr("aria-controls");
      return this.element.find(this.$_sanitizeSelector$("#" + $id$$37_tab$$4$$))
    }, $_addPrefixId$:function($elem$$32$$) {
      0 > $elem$$32$$.id.indexOf("ojtabs-id_") && $$$$18$$($elem$$32$$).attr("id", "ojtabs-id_" + $elem$$32$$.id)
    }, $_removePrefixId$:function($elem$$33$$) {
      0 == $elem$$33$$.id.indexOf("ojtabs-id_") && $$$$18$$($elem$$33$$).attr("id", $elem$$33$$.id.substring(10))
    }, $_removePrefixIds$:function($header$$10$$) {
      var $self$$101$$ = this, $ohd$$1$$ = $header$$10$$[0];
      $ohd$$1$$.id && this.$_removePrefixId$($ohd$$1$$);
      $header$$10$$.find("[id]").each(function() {
        $self$$101$$.$_removePrefixId$(this)
      })
    }, $_getTabsWidth$:function() {
      return this.element[0].clientWidth
    }, $_isOverflow$:function() {
      return this.$_originalWidth$ > this.$_getTabsWidth$()
    }, $_getTabMaxWidth$:function() {
      return this.options.$tabMaxWidth$
    }, $_applyTabMaxWidth$:function() {
      if(!this.$_tabMaxWidthApplied$) {
        var $maxWidth$$2$$ = this.options.$tabMaxWidth$;
        this.options.removable && ($maxWidth$$2$$ -= 28);
        this.$tabs$.each(function() {
          $$$$18$$(this).find(".oj-tabs-title").css("max-width", "" + $maxWidth$$2$$ + "px").addClass("oj-tabs-title-overflow")
        });
        this.$_tabMaxWidthApplied$ = !0
      }
    }, $_removeTabMaxWidth$:function() {
      this.$_tabMaxWidthApplied$ && (this.$tabs$.each(function() {
        $$$$18$$(this).find(".oj-tabs-title").css("max-width", "").removeClass("oj-tabs-title-overflow")
      }), this.$_tabMaxWidthApplied$ = !1)
    }, $handleResize$:function() {
      this.$_isOverflow$() ? this.$_tabMaxWidthApplied$ || this.$_applyTabMaxWidth$() : this.$_tabMaxWidthApplied$ && this.$_removeTabMaxWidth$()
    }, $_getTabbarWrapper$:function() {
      var $ulParent$$ = this.$tablist$.parent();
      $ulParent$$.hasClass("oj-tabs-conveyor") || ($ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"));
      return $ulParent$$
    }, $_truncateBeforeOverflow$:function() {
      var $options$$303$$ = this.options;
      "horizontal" == $options$$303$$.orientation && 0 < this.$tabs$.length && "auto" === $options$$303$$.$tabSizeBehavior$ && ($oj$$19$$.$DomUtils$.$addResizeListener$(this.element[0], $$$$18$$.proxy(this.$handleResize$, this)), this.$_hasResizeListener$ = !0, this.$_originalWidth$ = this.$_getTabbarWrapper$()[0].scrollWidth, this.$_isOverflow$() && this.$_applyTabMaxWidth$())
    }, $_uniformTabWidth$:function() {
      if(0 < this.$tabs$.length) {
        var $tabPercent$$ = 1 / this.$tabs$.length;
        this.$tabs$.each(function() {
          $$$$18$$(this).css("width", 100 * $tabPercent$$ + "%")
        });
        $tabPercent$$ * this.$_getTabsWidth$() < this.options.$tabMinWidth$ && this.$_addConveyor$()
      }
    }, $initSizing$:function() {
      this.$_isOverflow$() && this.$_applyTabMaxWidth$()
    }, $initOverflow$:function() {
      this.$_isOverflow$() && this.$_addConveyor$()
    }, $_truncateBeforeOverflowGab$:function() {
      var $options$$304$$ = this.options;
      "horizontal" == $options$$304$$.orientation && 0 < this.$tabs$.length && ("auto" === $options$$304$$.$tabSizeBehavior$ && window.setTimeout($$$$18$$.proxy(this.$initSizing$, this), 0), window.setTimeout($$$$18$$.proxy(this.$initOverflow$, this), 0))
    }})
  })();
  (function() {
    $oj$$19$$.$__registerWidget$("oj.ojProgressbar", $$$$18$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _create:function() {
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar oj-widget oj-widget-content oj-corner-all").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$18$$("\x3cdiv class\x3d'oj-progressbar-value oj-widget-header oj-corner-left'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
      this._super()
    }, _getCreateOptions:function() {
      var $allDefaults$$ = this._super(), $options$$305$$ = {}, $element$$65$$ = this.element;
      $$$$18$$.each(["max"], function($i$$267$$, $option$$12$$) {
        var $value$$187$$ = $element$$65$$.attr($option$$12$$);
        void 0 !== $value$$187$$ && $value$$187$$.length && ($options$$305$$[$option$$12$$] = $value$$187$$)
      });
      return $$$$18$$.extend($allDefaults$$, $options$$305$$)
    }, value:function($newValue$$6$$) {
      if(void 0 === $newValue$$6$$) {
        return this.options.value
      }
      this.options.value = this.$_constrainedValue$($newValue$$6$$)
    }, $_constrainedValue$:function($newValue$$7$$) {
      void 0 === $newValue$$7$$ && ($newValue$$7$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$7$$;
      "number" !== typeof $newValue$$7$$ && ($newValue$$7$$ = isNaN($newValue$$7$$) ? 0 : Number($newValue$$7$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$7$$))
    }, _setOptions:function($options$$306$$) {
      if(!this.options.disabled) {
        var $value$$188$$ = $options$$306$$.value;
        delete $options$$306$$.value;
        this._super($options$$306$$);
        this.options.value = this.$_constrainedValue$($value$$188$$);
        this.$_refreshValue$()
      }
    }, _setOption:function($key$$102$$, $value$$189$$) {
      "max" === $key$$102$$ && ($value$$189$$ = Math.max(this.min, $value$$189$$));
      this._super($key$$102$$, $value$$189$$)
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
    }, $_refreshValue$:function() {
      var $value$$190$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$190$$ > this.min).toggleClass("oj-corner-right", $value$$190$$ === this.options.max).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$18$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$190$$}), this.$overlayDiv$ && (this.$overlayDiv$.remove(), this.$overlayDiv$ = 
      null))
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar oj-widget oj-widget-content oj-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove()
    }})
  })();
  $oj$$19$$.$__registerWidget$("oj.ojTextArea", $$$$18$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3ctextarea\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"oj-textarea-input", _WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-widget", _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-textarea")});
  $oj$$19$$.$__registerWidget$("oj.ojInputPassword", $$$$18$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"password"}], _CLASS_NAMES:"oj-inputpassword-input", _WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-widget", _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-inputpassword")});
  (function() {
    $oj$$19$$.$__registerWidget$("oj.ojConveyorBelt", $$$$18$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{orientation:"horizontal", contentParent:null}, _create:function() {
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
      var $elem$$35_numChildren$$ = this.element, $i$$268_options$$307$$ = this.options;
      if($children$$6_isInit$$1$$ && !this.$_cbCommon$) {
        var $child$$7_orientation$$2$$ = $i$$268_options$$307$$.orientation, $callbackInfo$$1_prevStyleClass$$ = null, $nextStyleClass$$ = null, $prevIcon$$ = null, $nextIcon$$ = null, $animateScrollFunc_contentParentElem$$ = null;
        "vertical" !== $child$$7_orientation$$2$$ ? ($callbackInfo$$1_prevStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-start-overflow-indicator", $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-end-overflow-indicator", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-start-overflow-icon"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-end-overflow-icon"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollLeft$) : 
        ($callbackInfo$$1_prevStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-top-overflow-indicator", $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-conveyorbelt-bottom-overflow-indicator", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-top-overflow-icon"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-bottom-overflow-icon"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollTop$);
        var $buttonInfo$$1$$ = {};
        $buttonInfo$$1$$.prevButtonStyleClass = $callbackInfo$$1_prevStyleClass$$;
        $buttonInfo$$1$$.nextButtonStyleClass = $nextStyleClass$$;
        $buttonInfo$$1$$.prevButtonIcon = $prevIcon$$;
        $buttonInfo$$1$$.nextButtonIcon = $nextIcon$$;
        $callbackInfo$$1_prevStyleClass$$ = {};
        $callbackInfo$$1_prevStyleClass$$.addResizeListener = $oj$$19$$.$DomUtils$.$addResizeListener$;
        $callbackInfo$$1_prevStyleClass$$.removeResizeListener = $oj$$19$$.$DomUtils$.$removeResizeListener$;
        "true" !== $elem$$35_numChildren$$.attr("_ojConveyorBeltTesting") && ($callbackInfo$$1_prevStyleClass$$.scrollFunc = $animateScrollFunc_contentParentElem$$);
        $animateScrollFunc_contentParentElem$$ = null;
        $i$$268_options$$307$$.contentParent && ($animateScrollFunc_contentParentElem$$ = $$$$18$$($i$$268_options$$307$$.contentParent)[0]);
        this.$_cbCommon$ = new window.adf.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$($elem$$35_numChildren$$[0], $child$$7_orientation$$2$$, $animateScrollFunc_contentParentElem$$, this.$_bRTL$, $buttonInfo$$1$$, $callbackInfo$$1_prevStyleClass$$)
      }
      this.$_cbCommon$.$setup$($children$$6_isInit$$1$$);
      if($children$$6_isInit$$1$$) {
        for($children$$6_isInit$$1$$ = $elem$$35_numChildren$$.find(".oj-conveyorbelt-overflow-indicator"), $elem$$35_numChildren$$ = $children$$6_isInit$$1$$.size(), $i$$268_options$$307$$ = 0;$i$$268_options$$307$$ < $elem$$35_numChildren$$;$i$$268_options$$307$$++) {
          $child$$7_orientation$$2$$ = $children$$6_isInit$$1$$.get($i$$268_options$$307$$), this.$_setupButtonMouseStyles$($child$$7_orientation$$2$$)
        }
      }
    }, _destroy:function() {
      this.$_destroyCBCommon$();
      this.element.removeClass("oj-conveyorbelt oj-widget")
    }, _setOption:function($key$$103$$, $value$$191$$) {
      var $bRecreate$$1$$ = !1;
      switch($key$$103$$) {
        case "containerParent":
        ;
        case "orientation":
          $bRecreate$$1$$ = !0
      }
      $bRecreate$$1$$ && this.$_destroyCBCommon$();
      this._super($key$$103$$, $value$$191$$);
      $bRecreate$$1$$ && this.$_setup$(!0)
    }, $_destroyCBCommon$:function() {
      var $cbCommon$$1$$ = this.$_cbCommon$;
      $cbCommon$$1$$ && $cbCommon$$1$$.destroy();
      this.$_cbCommon$ = null
    }, $_setupButtonMouseStyles$:function($element$$66$$) {
      this._on($element$$66$$, {mousedown:function($event$$282$$) {
        $$$$18$$($event$$282$$.currentTarget).addClass("oj-active")
      }, mouseup:function($event$$283$$) {
        $$$$18$$($event$$283$$.currentTarget).removeClass("oj-active")
      }, mouseenter:function($event$$284$$) {
        $$$$18$$($event$$284$$.currentTarget).addClass("oj-hover")
      }, mouseleave:function($currTarget$$3_event$$285$$) {
        $currTarget$$3_event$$285$$ = $currTarget$$3_event$$285$$.currentTarget;
        $$$$18$$($currTarget$$3_event$$285$$).removeClass("oj-hover");
        $$$$18$$($currTarget$$3_event$$285$$).removeClass("oj-active")
      }})
    }, $_createIcon$:function($iconStyleClass$$) {
      var $span$$ = document.createElement("span");
      $span$$.setAttribute("class", "oj-widget-icon oj-clickable-icon " + $iconStyleClass$$);
      return $span$$
    }, $_animateScrollLeft$:function($elem$$37$$, $value$$192$$, $duration$$11$$, $onEndFunc$$1$$) {
      var $props$$6$$ = {};
      $props$$6$$.scrollLeft = $value$$192$$;
      $$$$18$$($elem$$37$$).animate($props$$6$$, $duration$$11$$, "swing", $onEndFunc$$1$$)
    }, $_animateScrollTop$:function($elem$$38$$, $value$$193$$, $duration$$12$$, $onEndFunc$$2$$) {
      var $props$$7$$ = {};
      $props$$7$$.scrollTop = $value$$193$$;
      $$$$18$$($elem$$38$$).animate($props$$7$$, $duration$$12$$, "swing", $onEndFunc$$2$$)
    }, getNodeBySubId:function($locator$$18_subId$$12$$) {
      if(null == $locator$$18_subId$$12$$) {
        return this.element ? this.element[0] : null
      }
      $locator$$18_subId$$12$$ = $locator$$18_subId$$12$$.subId;
      return"oj-conveyorbelt-start-overflow-indicator" === $locator$$18_subId$$12$$ ? this.widget().find(".oj-conveyorbelt-start-overflow-indicator")[0] : "oj-conveyorbelt-end-overflow-indicator" === $locator$$18_subId$$12$$ ? this.widget().find(".oj-conveyorbelt-end-overflow-indicator")[0] : "oj-conveyorbelt-top-overflow-indicator" === $locator$$18_subId$$12$$ ? this.widget().find(".oj-conveyorbelt-top-overflow-indicator")[0] : "oj-conveyorbelt-bottom-overflow-indicator" === $locator$$18_subId$$12$$ ? 
      this.widget().find(".oj-conveyorbelt-bottom-overflow-indicator")[0] : null
    }})
  })();
  $oj$$19$$.$__registerWidget$("oj.ojInputNumber", $$$$18$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:$oj$$19$$.$Validation$.$converterFactory$($oj$$19$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER).createConverter(), max:null, min:null, readOnly:null, step:1}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, _CreateComponent:function() {
    this._super();
    this.$_draw$();
    this.$_SetRootAttributes$();
    this._on(this.$_events$);
    this._on(this.window, {beforeunload:function() {
      this.element.removeAttr("autocomplete")
    }});
    this.$_inputNumberDefaultValidators$ = {}
  }, _AfterCreateComponent:function() {
    this._super();
    this._setOption("step", this.options.step);
    "boolean" !== typeof this.options.readOnly ? this.options.readOnly = !!this.element.prop("readonly") : this.element.prop("readonly", this.options.readOnly);
    this.$_refreshAriaMinMaxValue$();
    this.$_updateButtons$()
  }, _GetDefaultValidators:function() {
    var $ret$$30$$ = this._superApply(arguments), $numberRangeOptions$$ = {};
    if(null != this.options.min || null != this.options.max) {
      $numberRangeOptions$$ = {min:this.options.min, max:this.options.max, converter:this._GetConverter()}, this.$_inputNumberDefaultValidators$[$oj$$19$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE] = $oj$$19$$.$Validation$.$validatorFactory$($oj$$19$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE).createValidator($numberRangeOptions$$)
    }
    return $$$$18$$.extend(this.$_inputNumberDefaultValidators$, $ret$$30$$)
  }, _getCreateOptions:function() {
    var $allDefaults$$1$$ = this._super(), $options$$308$$ = {}, $element$$67$$ = this.element;
    $$$$18$$.each(["min", "max", "step"], function($i$$269$$, $option$$13$$) {
      var $value$$194$$ = $element$$67$$.attr($option$$13$$);
      void 0 !== $value$$194$$ && $value$$194$$.length && ($options$$308$$[$option$$13$$] = $value$$194$$)
    });
    return $$$$18$$.extend($allDefaults$$1$$, $options$$308$$)
  }, $_events$:{keydown:function($event$$286$$) {
    $event$$286$$.keyCode === $$$$18$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$286$$), $event$$286$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$286$$) && $event$$286$$.preventDefault()
  }, keyup:function($event$$287$$) {
    this.$_stop$($event$$287$$)
  }, focus:function() {
    this.previous = this.element.val()
  }, blur:function($event$$288$$) {
    this.$cancelBlur$ ? delete this.$cancelBlur$ : this.$_blurEnterSetValue$($event$$288$$)
  }, "mousedown .oj-inputnumber-button":function($event$$289$$) {
    function $checkFocus$$1$$() {
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = $previous$$, this._delay(function() {
        this.previous = $previous$$
      }))
    }
    var $previous$$;
    $previous$$ = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
    $event$$289$$.preventDefault();
    $checkFocus$$1$$.call(this);
    this.$cancelBlur$ = !0;
    this._delay(function() {
      delete this.$cancelBlur$;
      $checkFocus$$1$$.call(this)
    });
    this.$_start$();
    this.$_repeat$(null, $$$$18$$($event$$289$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$289$$)
  }, "mouseup .oj-inputnumber-button":function($event$$290$$) {
    this.$_stop$($event$$290$$)
  }, "mouseenter .oj-inputnumber-button":function($event$$291$$) {
    $$$$18$$($event$$291$$.currentTarget).hasClass("oj-active") && (this.$_start$(), this.$_repeat$(null, $$$$18$$($event$$291$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$291$$))
  }, "mouseleave .oj-inputnumber-button":function($event$$292$$) {
    this.$_stop$($event$$292$$)
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
  }, $_keydown$:function($event$$293$$) {
    var $keyCode$$6$$ = $$$$18$$.ui.keyCode;
    switch($event$$293$$.keyCode) {
      case $keyCode$$6$$.UP:
        return this.$_repeat$(null, 1, $event$$293$$), !0;
      case $keyCode$$6$$.DOWN:
        return this.$_repeat$(null, -1, $event$$293$$), !0
    }
    return!1
  }, $_uiInputNumberHtml$:$JSCompiler_returnArg$$("\x3cspan class\x3d'oj-inputnumber oj-widget'\x3e\x3c/span\x3e"), $_buttonHtml$:$JSCompiler_returnArg$$("\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e"), $_start$:function() {
    return this.$spinning$ = !0
  }, $_repeat$:function($i$$270$$, $steps$$1$$, $event$$294$$) {
    $i$$270$$ = $i$$270$$ || 500;
    clearTimeout(this.$timer$);
    this.$timer$ = this._delay(function() {
      this.$_repeat$(40, $steps$$1$$, $event$$294$$)
    }, $i$$270$$);
    this.$_spin$($steps$$1$$ * this.options.step, $event$$294$$)
  }, $_spin$:function($step$$1$$, $event$$295$$) {
    var $displayValue$$7_value$$195$$ = this._GetDisplayValue() || 0, $displayValue$$7_value$$195$$ = this.$_parseValue$($displayValue$$7_value$$195$$), $displayValue$$7_value$$195$$ = this.$_adjustValue$($displayValue$$7_value$$195$$, $step$$1$$);
    this._SetValue($displayValue$$7_value$$195$$, $event$$295$$, this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$)
  }, $_precision$:function() {
    var $precision$$1$$ = this.$_precisionOf$(this.options.step);
    null !== this.options.min && ($precision$$1$$ = Math.max($precision$$1$$, this.$_precisionOf$(this.options.min)));
    return $precision$$1$$
  }, $_precisionOf$:function($num$$9_str$$19$$) {
    $num$$9_str$$19$$ = $num$$9_str$$19$$.toString();
    var $decimal$$ = $num$$9_str$$19$$.indexOf(".");
    return-1 === $decimal$$ ? 0 : $num$$9_str$$19$$.length - $decimal$$ - 1
  }, $_adjustValue$:function($value$$196$$, $step$$2$$) {
    var $aboveMin_newValue$$8$$, $stepBase_validMax$$, $options$$310$$ = this.options, $precision$$2$$ = this.$_precision$();
    $stepBase_validMax$$ = null !== $options$$310$$.min ? $options$$310$$.min : 0;
    $aboveMin_newValue$$8$$ = $value$$196$$ - $stepBase_validMax$$;
    var $rounded$$1$$ = Math.round($aboveMin_newValue$$8$$ / $options$$310$$.step) * $options$$310$$.step, $rounded$$1$$ = parseFloat($rounded$$1$$.toFixed($precision$$2$$));
    $rounded$$1$$ !== $aboveMin_newValue$$8$$ ? ($aboveMin_newValue$$8$$ = 0 > $step$$2$$ ? Math.ceil($aboveMin_newValue$$8$$ / $options$$310$$.step) * $options$$310$$.step : Math.floor($aboveMin_newValue$$8$$ / $options$$310$$.step) * $options$$310$$.step, $aboveMin_newValue$$8$$ = $stepBase_validMax$$ + $aboveMin_newValue$$8$$ + $step$$2$$) : $aboveMin_newValue$$8$$ = $value$$196$$ + $step$$2$$;
    $aboveMin_newValue$$8$$ = parseFloat($aboveMin_newValue$$8$$.toFixed($precision$$2$$));
    return null !== $options$$310$$.min && $aboveMin_newValue$$8$$ < $options$$310$$.min ? $options$$310$$.min : null !== $options$$310$$.max && $aboveMin_newValue$$8$$ > $options$$310$$.max ? ($stepBase_validMax$$ = Math.floor(($options$$310$$.max - $stepBase_validMax$$) / $options$$310$$.step) * $options$$310$$.step + $stepBase_validMax$$, $stepBase_validMax$$ = parseFloat($stepBase_validMax$$.toFixed($precision$$2$$))) : $aboveMin_newValue$$8$$
  }, $_stop$:function() {
    this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1)
  }, $_updateButtons$:function() {
    var $value$$197$$ = this._GetDisplayValue() || 0, $min$$8$$ = this.options.min, $max$$8$$ = this.options.max;
    if(this.$uiInputNumber$) {
      var $downButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton(), $upButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton();
      this.options.disabled ? ($downButton$$.ojButton("disable"), $upButton$$.ojButton("disable")) : null !== $max$$8$$ && $value$$197$$ >= $max$$8$$ ? ($downButton$$.ojButton("enable"), $upButton$$.ojButton("disable")) : (null !== $min$$8$$ && $value$$197$$ <= $min$$8$$ ? $downButton$$.ojButton("disable") : $downButton$$.ojButton("enable"), $upButton$$.ojButton("enable"))
    }
  }, $_blurEnterSetValue$:function($event$$297$$) {
    this.$_stop$();
    this.previous !== this.element.val() && this._SetValue(this.element.val(), $event$$297$$)
  }, _setOption:function($key$$104$$, $value$$198$$) {
    "max" !== $key$$104$$ && "min" !== $key$$104$$ || "string" !== typeof $value$$198$$ || ($value$$198$$ = this.$_parse$($value$$198$$));
    "step" === $key$$104$$ && ($value$$198$$ = this.$_parseStep$($value$$198$$));
    this._super($key$$104$$, $value$$198$$);
    "disabled" === $key$$104$$ && ($value$$198$$ ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1));
    "readOnly" === $key$$104$$ && ($value$$198$$ ? this.element.prop("readonly", !0) : this.element.prop("readonly", !1))
  }, $_parse$:function($val$$58$$) {
    "string" === typeof $val$$58$$ && "" !== $val$$58$$ && ($val$$58$$ = +$val$$58$$);
    return"" === $val$$58$$ || isNaN($val$$58$$) ? null : $val$$58$$
  }, $_parseStep$:function($parsedStep_val$$59$$) {
    "string" === typeof $parsedStep_val$$59$$ && "" !== $parsedStep_val$$59$$ && ($parsedStep_val$$59$$ = +$parsedStep_val$$59$$);
    $parsedStep_val$$59$$ = "" === $parsedStep_val$$59$$ || isNaN($parsedStep_val$$59$$) ? null : $parsedStep_val$$59$$;
    if(null === $parsedStep_val$$59$$ || 0 >= $parsedStep_val$$59$$) {
      $parsedStep_val$$59$$ = 1
    }
    return $parsedStep_val$$59$$
  }, $_refreshAriaMinMaxValue$:function() {
    var $valuenow$$ = this.$_parse$(this.options.value), $valuetext$$ = this.element.val();
    this.element.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$});
    this._ValueEquals("" + $valuenow$$, $valuetext$$) || this.element.attr({"aria-valuetext":$valuetext$$})
  }, _Refresh:function($name$$100$$, $value$$199$$) {
    this._super($name$$100$$, $value$$199$$);
    "value" !== $name$$100$$ && "max" !== $name$$100$$ && "min" !== $name$$100$$ || this.$_refreshAriaMinMaxValue$();
    this.$_updateButtons$()
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-inputnumber"), _destroy:function() {
    this.element.removeClass("oj-inputnumber-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeAttr("aria-valuetext").removeAttr("aria-disabled");
    this.element.attr("type", this.saveType);
    this._super();
    this._off(this.element, "keydown keyup focus blur mousedown mouseup mouseenter mouseleave");
    this.$uiInputNumber$.replaceWith(this.element);
    clearTimeout(this.$timer$)
  }, getNodeBySubId:function($locator$$19_subId$$13$$) {
    if(null == $locator$$19_subId$$13$$) {
      return this.element ? this.element[0] : null
    }
    $locator$$19_subId$$13$$ = $locator$$19_subId$$13$$.subId;
    return"oj-inputnumber-up" === $locator$$19_subId$$13$$ ? this.widget().find(".oj-inputnumber-up")[0] : "oj-inputnumber-down" === $locator$$19_subId$$13$$ ? this.widget().find(".oj-inputnumber-down")[0] : null
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
